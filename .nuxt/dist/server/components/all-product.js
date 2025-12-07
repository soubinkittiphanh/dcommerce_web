exports.ids = [22];
exports.modules = {

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
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

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product.e130afd.jpg";

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(493);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(428);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/all-product.vue?vue&type=template&id=10a052e7







var all_productvue_type_template_id_10a052e7_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c('router-link', {
    staticClass: "text-decoration-none",
    attrs: {
      "to": '/fashion/product-detail'
    }
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
            "max-width": "300",
            "outlined": ""
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "max-width": "100%",
            "src": `${_vm.host}/${_vm.productImage}`
          }
        }), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
          staticClass: "text-start"
        }, [_c('div', {
          staticClass: "font-weight-meduim blue--text"
        }, [_vm._v(_vm._s(_vm.categoryName))]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim black--text"
        }, [_vm._v(_vm._s(_vm.productName))]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim black--text"
        }, [_vm._v("\n            ລາຄາເລີ່ມຕົ້ນ:\n            " + _vm._s(_vm.productPrice) + "\n          ")]), _vm._v(" "), _c('div', {
          staticClass: "d-flex justify-space-between mt-2"
        }, [_c(VChip["a" /* default */], {
          staticClass: "ma-0 white--text",
          attrs: {
            "small": "",
            "label": "",
            "color": "blue"
          }
        }, [_vm._v("\n              ໃໝ່\n            ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
          staticClass: "ma-0 white--text",
          attrs: {
            "small": "",
            "label": "",
            "outlined": "",
            "color": "blue"
          }
        }, [_vm._v("\n              ພ້ອມສົ່ງ\n            ")])], 1)])], 1)];
      }
    }])
  })], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/all-product.vue?vue&type=template&id=10a052e7

// EXTERNAL MODULE: ./assets/img/product/product.jpg
var product = __webpack_require__(536);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/all-product.vue?vue&type=script&lang=js


/* harmony default export */ var all_productvue_type_script_lang_js = ({
  name: 'new-products-card',
  props: {
    productName: {
      type: String,
      require: true,
      default: true
    },
    categoryName: {
      type: String,
      require: false,
      default: 0
    },
    productPrice: {
      type: Number,
      require: false,
      default: 0
    },
    productImage: {
      type: String,
      require: false,
      default: 0
    }
  },
  data() {
    return {
      // categoryName: 'ຊຸດ Dress',
      // productName: 'ຊຸດລາຕີ ສີນ້ຳຕານ RED CARPET Size S-M',
      // productPrice: '250,000 LAK',
      // productImage: ProductImage,
    };
  },
  computed: {
    host() {
      return Object(api["a" /* hostName */])();
    }
  }
});
// CONCATENATED MODULE: ./components/all-product.vue?vue&type=script&lang=js
 /* harmony default export */ var components_all_productvue_type_script_lang_js = (all_productvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/all-product.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_all_productvue_type_script_lang_js,
  all_productvue_type_template_id_10a052e7_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "43f58d60"
  
)

/* harmony default export */ var all_product = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=all-product.js.map