exports.ids = [270,48,124];
exports.modules = {

/***/ 1252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(346);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(387);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=b3d14e18&













var lib_vue_loader_options_pagesvue_type_template_id_b3d14e18_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"brands mb-4 mt-2\">", "</div>", [_c('slider', {
    attrs: {
      "imageList": _vm.imageList
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _vm._l(_vm.webCategoryList, function (category) {
    return _vm._ssrNode("<div class=\"discount-products mb-4\">", "</div>", [_c(VCard["a" /* default */], {
      staticClass: "pa-6 rounded-lg"
    }, [_c(VRow["a" /* default */], [_c(VList["a" /* default */], {
      staticStyle: {
        "margin-bottom": "-10px"
      }
    }, [_c(VListItem["a" /* default */], [_c(components_VList["c" /* VListItemTitle */], [_c('h3', [_vm._v(_vm._s(`${category.name} `))])]), _vm._v(" "), _c(VListItemIcon["a" /* default */])], 1)], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
      staticClass: "green--text mt-3",
      attrs: {
        "text": "",
        "color": "green"
      },
      on: {
        "click": _vm.gotoProductDetail
      }
    }, [_vm._v("\n          ເບິ່ງເພີ່ມເຕີມ\n          "), _c(VIcon["a" /* default */], {
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
    }, _vm._l(category.products, function (product) {
      return _c('div', {
        key: product.id,
        staticClass: "col-12 col-md-2 col-sm-6 col-xs-6 text-center"
      }, [_c('discount-products-card', {
        attrs: {
          "product": product
        }
      })], 1);
    }), 0)], 1)], 1)], 1)], 1);
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=b3d14e18&

// EXTERNAL MODULE: ./assets/img/banners/banner_1.png
var banner_1 = __webpack_require__(668);
var banner_1_default = /*#__PURE__*/__webpack_require__.n(banner_1);

// EXTERNAL MODULE: ./assets/img/banners/banner_2.png
var banner_2 = __webpack_require__(669);
var banner_2_default = /*#__PURE__*/__webpack_require__.n(banner_2);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&




/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: 'web',
  data() {
    return {
      isloading: false,
      Banner_1: banner_1_default.a,
      Banner_2: banner_2_default.a,
      icons: ['mdi-facebook', 'mdi-whatsapp'],
      webCategoryList: [],
      menuList: [{
        text: 'ໂຮມ',
        icon: 'mdi-home',
        path: '/home'
      }, {
        text: 'ສິນຄ້າທັງໝົດ',
        icon: 'mdi-package-variant',
        path: '/home'
      }, {
        text: 'ໝວດໝູ່ສິນຄ້າ',
        icon: 'mdi-information',
        path: '/home'
      }, {
        text: 'ກ່ຽວກັບເຮົາ',
        icon: 'mdi-file-document-outline',
        path: '/home'
      }, {
        text: 'ຊ່ອງທາງການຕິດຕໍ່',
        icon: 'mdi-file-document-outline',
        path: '/home'
      }, {
        text: 'ບົດຄວາມ',
        icon: 'mdi-file-document-outline',
        path: '/home'
      }, {
        text: 'ເງື່ອນໄຂການເຊົ່າຊຸດ',
        icon: 'mdi-file-document-outline',
        path: '/home'
      }]
    };
  },
  computed: {
    host() {
      return Object(api["a" /* hostName */])();
    },
    imageList() {
      const imageList = [];
      for (const iterator of this.webCategoryList) {
        for (const product of iterator['products']) {
          imageList.push(...product['images']);
        }
      }
      console.log(`Image ${JSON.stringify(imageList)}`);
      return imageList;
    }
  },
  async created() {
    this.$router.push('/admin/moneyAdvance'); // Link to the main page manually
    // await this.loadCategory()
  },

  methods: {
    formatPrice(price) {
      console.log(`Price ${Object(common["e" /* getFormatNum */])(price)}`);
      return Object(common["e" /* getFormatNum */])(price);
    },
    gotoProductDetail(productId) {
      // this.$router.push({ name: 'product-details', params: { id: productId } });
      this.$router.push({
        path: `product/${productId}`
      });
    },
    async loadCategory() {
      try {
        // this.isloading = true
        const response = await this.$axios.get('/webproductgroup/find');
        // this.isloading = false
        console.info(`Category found ${JSON.stringify(response)}`);
        this.webCategoryList = response.data;
        console.info(`Category found ${JSON.stringify(this.webCategoryList)}`);
      } catch (error) {
        // swalError2(this.$swal, 'Error', 'Could no load category ' + JSON.stringify(error))
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  lib_vue_loader_options_pagesvue_type_template_id_b3d14e18_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1076a7be"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Slider: __webpack_require__(881).default,LoadingIndicator: __webpack_require__(86).default,DiscountProductsCard: __webpack_require__(611).default})


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
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

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(471);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0df5f600", content, true)

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{bottom:0;left:0;margin:0;position:absolute;right:0}.v-carousel .v-window-item{display:block;height:inherit;-webkit-text-decoration:none;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(473);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("3f874970", content, true)

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;margin:0 16px;position:absolute;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(517);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("d67becdc", content, true)

/***/ }),

/***/ 517:
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

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCarousel/VCarousel.sass
var VCarousel = __webpack_require__(470);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VWindow/VWindow.sass
var VWindow = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindow.js
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ var VWindow_VWindow = (VItemGroup["a" /* BaseItemGroup */].extend({
  name: 'v-window',
  directives: {
    Touch: touch["a" /* default */]
  },
  provide() {
    return {
      windowGroup: this
    };
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: Boolean,
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },
  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },
  computed: {
    isActive() {
      return this.transitionCount > 0;
    },
    classes() {
      return {
        ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },
    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.internalReverse ? !this.isReverse : this.isReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },
    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },
    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },
    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },
    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },
    internalReverse() {
      return this.$vuetify.rtl ? !this.reverse : this.reverse;
    }
  },
  watch: {
    internalIndex(val, oldVal) {
      this.isReverse = this.updateReverse(val, oldVal);
    }
  },
  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },
    genContainer() {
      const children = [this.genDefaultSlot()];
      if (this.showArrows) {
        children.push(this.genControlIcons());
      }
      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },
    genIcon(direction, icon, click) {
      var _a, _b, _c;
      const on = {
        click: e => {
          e.stopPropagation();
          this.changedByDelimiters = true;
          click();
        }
      };
      const attrs = {
        'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
      };
      const children = (_c = (_b = (_a = this.$scopedSlots)[direction]) === null || _b === void 0 ? void 0 : _b.call(_a, {
        on,
        attrs
      })) !== null && _c !== void 0 ? _c : [this.$createElement(VBtn["a" /* default */], {
        props: {
          icon: true
        },
        attrs,
        on
      }, [this.$createElement(VIcon["a" /* default */], {
        props: {
          large: true
        }
      }, icon)])];
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, children);
    },
    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }
      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }
      return icons;
    },
    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },
    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },
    next() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },
    prev() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },
    updateReverse(val, oldVal) {
      const itemsLength = this.items.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) return val < oldVal;
      if (val === lastIndex && oldVal === 0) {
        return true;
      } else if (val === 0 && oldVal === lastIndex) {
        return false;
      } else {
        return val < oldVal;
      }
    }
  },
  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };
    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }
    return h('div', data, [this.genContainer()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/index.js
var VProgressLinear = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/button-group/index.js
var button_group = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js
// Styles
 // Extensions

 // Components



 // Mixins
// TODO: Move this into core components v2.0

 // Utilities



/* harmony default export */ var VCarousel_VCarousel = __webpack_exports__["a"] = (VWindow_VWindow.extend({
  name: 'v-carousel',
  props: {
    continuous: {
      type: Boolean,
      default: true
    },
    cycle: Boolean,
    delimiterIcon: {
      type: String,
      default: '$delimiter'
    },
    height: {
      type: [Number, String],
      default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
      type: [Number, String],
      default: 6000,
      validator: value => value > 0
    },
    mandatory: {
      type: Boolean,
      default: true
    },
    progress: Boolean,
    progressColor: String,
    showArrows: {
      type: Boolean,
      default: true
    },
    verticalDelimiters: {
      type: String,
      default: undefined
    }
  },
  // pass down the parent's theme
  provide() {
    return {
      parentTheme: this.theme
    };
  },
  data() {
    return {
      internalHeight: this.height,
      slideTimeout: undefined
    };
  },
  computed: {
    classes() {
      return {
        ...VWindow_VWindow.options.computed.classes.call(this),
        'v-carousel': true,
        'v-carousel--hide-delimiter-background': this.hideDelimiterBackground,
        'v-carousel--vertical-delimiters': this.isVertical
      };
    },
    isDark() {
      return this.dark || !this.light;
    },
    isVertical() {
      return this.verticalDelimiters != null;
    }
  },
  watch: {
    internalValue: 'restartTimeout',
    interval: 'restartTimeout',
    height(val, oldVal) {
      if (val === oldVal || !val) return;
      this.internalHeight = val;
    },
    cycle(val) {
      if (val) {
        this.restartTimeout();
      } else {
        clearTimeout(this.slideTimeout);
        this.slideTimeout = undefined;
      }
    }
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('hide-controls')) {
      Object(console["a" /* breaking */])('hide-controls', ':show-arrows="false"', this);
    }
  },
  mounted() {
    this.startTimeout();
  },
  methods: {
    genControlIcons() {
      if (this.isVertical) return null;
      return VWindow_VWindow.options.methods.genControlIcons.call(this);
    },
    genDelimiters() {
      return this.$createElement('div', {
        staticClass: 'v-carousel__controls',
        style: {
          left: this.verticalDelimiters === 'left' && this.isVertical ? 0 : 'auto',
          right: this.verticalDelimiters === 'right' ? 0 : 'auto'
        }
      }, [this.genItems()]);
    },
    genItems() {
      const length = this.items.length;
      const children = [];
      for (let i = 0; i < length; i++) {
        const child = this.$createElement(VBtn["a" /* default */], {
          staticClass: 'v-carousel__controls__item',
          attrs: {
            'aria-label': this.$vuetify.lang.t('$vuetify.carousel.ariaLabel.delimiter', i + 1, length)
          },
          props: {
            icon: true,
            small: true,
            value: this.getValue(this.items[i], i)
          },
          key: i
        }, [this.$createElement(VIcon["a" /* default */], {
          props: {
            size: 18
          }
        }, this.delimiterIcon)]);
        children.push(child);
      }
      return this.$createElement(button_group["a" /* default */], {
        props: {
          value: this.internalValue,
          mandatory: this.mandatory
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, children);
    },
    genProgress() {
      return this.$createElement(VProgressLinear["a" /* default */], {
        staticClass: 'v-carousel__progress',
        props: {
          color: this.progressColor,
          value: (this.internalIndex + 1) / this.items.length * 100
        }
      });
    },
    restartTimeout() {
      this.slideTimeout && clearTimeout(this.slideTimeout);
      this.slideTimeout = undefined;
      window.requestAnimationFrame(this.startTimeout);
    },
    startTimeout() {
      if (!this.cycle) return;
      this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6000);
    }
  },
  render(h) {
    const render = VWindow_VWindow.options.render.call(this, h);
    render.data.style = `height: ${Object(helpers["h" /* convertToUnit */])(this.height)};`;
    /* istanbul ignore else */

    if (!this.hideDelimiters) {
      render.children.push(this.genDelimiters());
    }
    /* istanbul ignore else */

    if (this.progress || this.progressColor) {
      render.children.push(this.genProgress());
    }
    return render;
  }
}));

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/bootable/index.js
var bootable = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindowItem.js
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(mixins["a" /* default */])(bootable["a" /* default */], Object(groupable["a" /* factory */])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ var VWindowItem = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },
  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },
  computed: {
    classes() {
      return this.groupClasses;
    },
    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }
      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }
  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },
    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },
    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.

      this.inTransition = false;
      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },
    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.

      this.inTransition = true;
      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(helpers["h" /* convertToUnit */])(this.windowGroup.$el.clientHeight);
      }
      this.windowGroup.transitionCount++;
    },
    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }
      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.

        this.windowGroup.transitionHeight = Object(helpers["h" /* convertToUnit */])(el.clientHeight);
      });
    }
  },
  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js
// Extensions
 // Components

 // Utilities



 // Types

const VCarouselItem_baseMixins = Object(mixins["a" /* default */])(VWindowItem, routable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VCarouselItem = __webpack_exports__["a"] = (VCarouselItem_baseMixins.extend().extend({
  name: 'v-carousel-item',
  inject: {
    parentTheme: {
      default: {
        isDark: false
      }
    }
  },
  // pass down the parent's theme
  provide() {
    return {
      theme: this.parentTheme
    };
  },
  inheritAttrs: false,
  methods: {
    genDefaultSlot() {
      return [this.$createElement(VImg["a" /* default */], {
        staticClass: 'v-carousel__item',
        props: {
          ...this.$attrs,
          height: this.windowGroup.internalHeight
        },
        on: this.$listeners,
        scopedSlots: {
          placeholder: this.$scopedSlots.placeholder
        }
      }, Object(helpers["s" /* getSlot */])(this))];
    },
    genWindowItem() {
      const {
        tag,
        data
      } = this.generateRouteLink();
      data.staticClass = 'v-window-item';
      data.directives.push({
        name: 'show',
        value: this.isActive
      });
      return this.$createElement(tag, data, this.genDefaultSlot());
    }
  }
}));

/***/ }),

/***/ 611:
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
var VHover = __webpack_require__(392);

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
var api = __webpack_require__(32);

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

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_1.a8ec209.png";

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_2.e1b3784.png";

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export calculateUpdatedOffset */
/* unused harmony export calculateCenteredOffset */
/* unused harmony export BaseSlideGroup */
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(516);
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
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
/* harmony default export */ __webpack_exports__["a"] = (BaseSlideGroup.extend({
  name: 'v-slide-group',
  provide() {
    return {
      slideGroup: this
    };
  }
}));

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product_1.4a4e54e.jpg";

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(34);

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

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js + 1 modules
var VCarousel = __webpack_require__(525);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js + 1 modules
var VCarouselItem = __webpack_require__(526);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
var VSlideGroup = __webpack_require__(670);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js + 1 modules
var VSlideItem = __webpack_require__(722);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slider.vue?vue&type=template&id=921bc894&









var slidervue_type_template_id_921bc894_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ma-0"
  }, [_c(VCarousel["a" /* default */], {
    ref: "carousel"
  }, [_c(VCarouselItem["a" /* default */], {
    attrs: {
      "src": "https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/bikini.jpg",
      "cover": ""
    }
  }), _vm._v(" "), _c(VCarouselItem["a" /* default */], {
    attrs: {
      "src": "https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/Untitled-1.jpg",
      "cover": ""
    }
  }), _vm._v(" "), _c(VCarouselItem["a" /* default */], {
    attrs: {
      "src": "https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/%E0%B8%A2%E0%B8%B9%E0%B8%AD%E0%B8%B4.jpg",
      "cover": ""
    }
  })], 1), _vm._ssrNode(" "), _c(VSheet["a" /* default */], {
    staticClass: "rounded-lg"
  }, [_c(VSlideGroup["a" /* default */], {
    ref: "slideGroup",
    attrs: {
      "show-arrows": "",
      "center-active": "",
      "cycle": ""
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
  }, [_vm._v(" "), _vm._v(" "), _vm._l(_vm.imageList, function (image, index) {
    return _c(VSlideItem["a" /* default */], {
      key: index
    }, [_c(VCard["a" /* default */], {
      staticClass: "ma-4",
      attrs: {
        "width": "100"
      },
      on: {
        "click": function ($event) {
          return _vm.gotoProductDetail(image['productId']);
        }
      }
    }, [_c(VImg["a" /* default */], {
      staticClass: "pointer-cursor hover",
      attrs: {
        "width": "100",
        "src": _vm.host + '/' + image['img_path']
      }
    })], 1)], 1);
  })], 2)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/slider.vue?vue&type=template&id=921bc894&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(32);

// EXTERNAL MODULE: ./assets/img/products/product_1.jpg
var product_1 = __webpack_require__(703);
var product_1_default = /*#__PURE__*/__webpack_require__.n(product_1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slider.vue?vue&type=script&lang=js&



// import SliderV1 from '~/assets/img/slider/SliderV1.jpg'
/* harmony default export */ var slidervue_type_script_lang_js_ = ({
  name: 'slider',
  props: {
    imageList: {
      type: Array,
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
      xiaomiImage: product_1_default.a
      // sliderV1: SliderV1,
      // imageList: XiaomiImage,
    };
  },

  mounted() {
    // Auto-slide every 5 seconds (adjust the interval as needed)
    setInterval(this.nextSlide, 5000);
  },
  methods: {
    gotoProductDetail(productId) {
      // this.$router.push({ name: 'product-details', params: { id: productId } });
      this.$router.push({
        path: `product/${productId}`
      });
    },
    nextSlide() {
      // Programmatically go to the next slide
      this.$refs.carousel.next();
      this.$refs.slideGroup.next();
    }
  }
});
// CONCATENATED MODULE: ./components/slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_slidervue_type_script_lang_js_ = (slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/slider.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_slidervue_type_script_lang_js_,
  slidervue_type_template_id_921bc894_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "457bf854"
  
)

/* harmony default export */ var slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map