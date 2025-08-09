exports.ids = [72];
exports.modules = {

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product.e130afd.jpg";

/***/ }),

/***/ 546:
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
var VHover = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(377);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new-update-product.vue?vue&type=template&id=d6b8bfda&







var new_update_productvue_type_template_id_d6b8bfda_render = function render() {
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
            "max-width": "300",
            "outlined": ""
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "max-width": "100%",
            "src": _vm.productImage
          }
        }), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
          staticClass: "text-start"
        }, [_c('div', {
          staticClass: "font-weight-meduim blue--text"
        }, [_vm._v(_vm._s(_vm.categoryName))]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim black--text"
        }, [_vm._v(_vm._s(_vm.productName))]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim black--text"
        }, [_vm._v("\n          ລາຄາເລີ່ມຕົ້ນ:\n          " + _vm._s(_vm.productPrice) + "\n        ")]), _vm._v(" "), _c('div', {
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

// CONCATENATED MODULE: ./components/new-update-product.vue?vue&type=template&id=d6b8bfda&

// EXTERNAL MODULE: ./assets/img/product/product.jpg
var product = __webpack_require__(458);
var product_default = /*#__PURE__*/__webpack_require__.n(product);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new-update-product.vue?vue&type=script&lang=js&

/* harmony default export */ var new_update_productvue_type_script_lang_js_ = ({
  name: 'new-products-card',
  data() {
    return {
      categoryName: 'ຊຸດ Dress',
      productName: 'ຊຸດລາຕີ ສີນ້ຳຕານ RED CARPET Size S-M',
      productPrice: '250,000 LAK',
      productImage: product_default.a
    };
  }
});
// CONCATENATED MODULE: ./components/new-update-product.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_new_update_productvue_type_script_lang_js_ = (new_update_productvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/new-update-product.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_new_update_productvue_type_script_lang_js_,
  new_update_productvue_type_template_id_d6b8bfda_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d4a8a9aa"
  
)

/* harmony default export */ var new_update_product = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new-update-product.js.map