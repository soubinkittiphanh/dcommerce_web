exports.ids = [51];
exports.modules = {

/***/ 1245:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hot-products-card.vue?vue&type=template&id=5c7e1c36&







var hot_products_cardvue_type_template_id_5c7e1c36_render = function render() {
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
            "width": "220",
            "height": "440"
          }
        }, [_c(VImg["a" /* default */], {
          staticClass: "pointer-cursor",
          attrs: {
            "max-width": "220",
            "src": _vm.host + '/' + _vm.productImage
          }
        }), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
          staticClass: "text-start"
        }, [_c('div', {
          staticClass: "font-weight-meduim black--text"
        }, [_vm._v(_vm._s(_vm.productName))]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim green--text"
        }, [_vm._v("\n          " + _vm._s(_vm.productPrice) + "\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "d-flex justify-space-between mt-2"
        }, [_c(VChip["a" /* default */], {
          staticClass: "ma-0 white--text",
          attrs: {
            "small": "",
            "label": "",
            "color": "red"
          }
        }, [_vm._v("\n            ຍອດນິຍົມ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
          staticClass: "ma-0 white--text",
          attrs: {
            "small": "",
            "label": "",
            "outlined": "",
            "color": "red"
          }
        }, [_vm._v("\n            ພ້ອມສົ່ງ\n          ")])], 1)])], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/hot-products-card.vue?vue&type=template&id=5c7e1c36&

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hot-products-card.vue?vue&type=script&lang=js&

/* harmony default export */ var hot_products_cardvue_type_script_lang_js_ = ({
  name: 'hot-products-card',
  props: {
    productImage: {
      type: String,
      require: true
    },
    productName: {
      type: String,
      require: true
    },
    productPrice: {
      type: String,
      require: true
    }
  },
  computed: {
    host() {
      return Object(api["a" /* hostName */])();
    }
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./components/hot-products-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_hot_products_cardvue_type_script_lang_js_ = (hot_products_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/hot-products-card.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_hot_products_cardvue_type_script_lang_js_,
  hot_products_cardvue_type_template_id_5c7e1c36_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "108f6636"
  
)

/* harmony default export */ var hot_products_card = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hot-products-card.js.map