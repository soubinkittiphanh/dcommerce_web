exports.ids = [115];
exports.modules = {

/***/ 1272:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/Item.vue?vue&type=template&id=459a6e1c&










var Itemvue_type_template_id_459a6e1c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "mx-auto",
    attrs: {
      "max-width": "500"
    }
  }, [_c(VContainer["a" /* default */], {
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, _vm._l(_vm.cards, function (card) {
    return _c(VCol["a" /* default */], {
      key: card.title,
      attrs: {
        "cols": card.flex
      }
    }, [_c(VCard["a" /* default */], [_c(VImg["a" /* default */], {
      staticClass: "align-end",
      attrs: {
        "src": card.src,
        "gradient": "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
        "height": "200px",
        "cover": ""
      }
    }, [_c(components_VCard["d" /* VCardTitle */], {
      staticClass: "text-white",
      domProps: {
        "textContent": _vm._s(card.title)
      }
    })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "size": "small",
        "color": "surface-variant",
        "variant": "text",
        "icon": "mdi-heart"
      }
    }), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "size": "small",
        "color": "surface-variant",
        "variant": "text",
        "icon": "mdi-bookmark"
      }
    }), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "size": "small",
        "color": "surface-variant",
        "variant": "text",
        "icon": "mdi-share-variant"
      }
    })], 1)], 1)], 1);
  }), 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/Item.vue?vue&type=template&id=459a6e1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/Item.vue?vue&type=script&lang=js&
/* harmony default export */ var Itemvue_type_script_lang_js_ = ({
  data: () => ({
    cards: [{
      title: 'Pre-fab homes',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 12
    }, {
      title: 'Favorite road trips',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 6
    }, {
      title: 'Best airlines',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 6
    }]
  })
});
// CONCATENATED MODULE: ./components/product/Item.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_Itemvue_type_script_lang_js_ = (Itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/Item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_Itemvue_type_script_lang_js_,
  Itemvue_type_template_id_459a6e1c_render,
  staticRenderFns,
  false,
  null,
  null,
  "f85212f4"
  
)

/* harmony default export */ var Item = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-item.js.map