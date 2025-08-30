exports.ids = [91];
exports.modules = {

/***/ 1232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(381);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new-products-card.vue?vue&type=template&id=291565d8&







var new_products_cardvue_type_template_id_291565d8_render = function render() {
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
        }), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
          staticClass: "text-start"
        }, [_c('div', {
          staticClass: "font-weight-meduim black--text"
        }, [_vm._v(_vm._s(_vm.productImage))]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim green--text"
        }, [_vm._v("\n          " + _vm._s(_vm.productPrice) + "\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "d-flex justify-space-between mt-2"
        }, [_c(VChip["a" /* default */], {
          staticClass: "ma-0 white--text",
          attrs: {
            "small": "",
            "label": "",
            "color": "blue"
          }
        }, [_vm._v("\n            ໃໝ່\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
          staticClass: "ma-0 white--text",
          attrs: {
            "small": "",
            "label": "",
            "outlined": "",
            "color": "blue"
          }
        }, [_vm._v("\n            ພ້ອມສົ່ງ\n          ")])], 1)])], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/new-products-card.vue?vue&type=template&id=291565d8&

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new-products-card.vue?vue&type=script&lang=js&

/* harmony default export */ var new_products_cardvue_type_script_lang_js_ = ({
  name: 'new-products-card',
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
// CONCATENATED MODULE: ./components/new-products-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_new_products_cardvue_type_script_lang_js_ = (new_products_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/new-products-card.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_new_products_cardvue_type_script_lang_js_,
  new_products_cardvue_type_template_id_291565d8_render,
  staticRenderFns,
  false,
  null,
  null,
  "8e5c266e"
  
)

/* harmony default export */ var new_products_card = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new-products-card.js.map