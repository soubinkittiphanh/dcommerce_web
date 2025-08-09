exports.ids = [42];
exports.modules = {

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(382);

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

/***/ })

};;
//# sourceMappingURL=discount-products-card.js.map