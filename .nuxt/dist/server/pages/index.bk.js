exports.ids = [269,110];
exports.modules = {

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.bk.vue?vue&type=template&id=1bc9e734&scoped=true&




var index_bkvue_type_template_id_1bc9e734_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mx-3"
  }, [_vm._ssrNode("<h2 class=\"mt-2 grey--text\" data-v-1bc9e734> ໝວດສິນຄ້າຂາຍດີ</h2> "), _c(VContainer["a" /* default */], {
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], _vm._l(_vm.productList, function (productItem) {
    return _c(VCol["a" /* default */], {
      key: productItem.img_path,
      attrs: {
        "cols": "12",
        "sm": "3"
      }
    }, [_c('product-card', {
      attrs: {
        "productItem": productItem
      }
    })], 1);
  }), 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.bk.vue?vue&type=template&id=1bc9e734&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.bk.vue?vue&type=script&lang=js&
// import { Carousel3d, Slide } from "vue-carousel-3d";

/* harmony default export */ var index_bkvue_type_script_lang_js_ = ({
  //   middleware: 'auths',
  components: {
    // Carousel3d,
    // Slide,
  },
  layout: "products",
  data: () => {
    return {
      notCodData: [],
      productList: [],
      peeAirOutlet: "PEEAIR4",
      greewoodOutlet: "Green",
      deletedCardData: [],
      isLoading: false
    };
  },
  async created() {
    await this.getData();
  },
  computed: {
    dateNow() {
      const sqlDatetimeNow = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toJSON().slice(0, 19).replace('T', ' ');
      const fdate = sqlDatetimeNow.substring(0, 11);
      // const tdate=sqlDatetimeNow.substring(0,11);
      return fdate;
    }
  },
  methods: {
    async getData() {
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
// CONCATENATED MODULE: ./pages/index.bk.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_index_bkvue_type_script_lang_js_ = (index_bkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/index.bk.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_index_bkvue_type_script_lang_js_,
  index_bkvue_type_template_id_1bc9e734_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "1bc9e734",
  "25947434"
  
)

/* harmony default export */ var index_bk = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(834).default})


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(445);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e8a466fa", content, true)

/***/ }),

/***/ 445:
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

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
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

/***/ 834:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
var VRating = __webpack_require__(468);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=2b144a15&










var ProductCardvue_type_template_id_2b144a15_render = function render() {
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

// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=2b144a15&

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
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ProductCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  ProductCardvue_type_template_id_2b144a15_render,
  staticRenderFns,
  false,
  null,
  null,
  "1a7dab1c"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.bk.js.map