exports.ids = [32];
exports.modules = {

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orderSumaryCardPos.vue?vue&type=template&id=3b45c91c&







var orderSumaryCardPosvue_type_template_id_3b45c91c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "ml-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_vm._v(_vm._s(this.orderDetail.title))]), _vm._v(" "), _c('div', {
    staticClass: "pa-4"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v("ຈຳນວນ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v(_vm._s(this.orderDetail.amount) + " ອໍເດີ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v("ມູນຄ່າ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v(_vm._s(this.orderDetail.sale))])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/orderSumaryCardPos.vue?vue&type=template&id=3b45c91c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orderSumaryCardPos.vue?vue&type=script&lang=js&
/* harmony default export */ var orderSumaryCardPosvue_type_script_lang_js_ = ({
  props: {
    orderDetail: {
      type: Object,
      default: ''
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    gross: {
      type: String,
      default: '0'
    }
  }
});
// CONCATENATED MODULE: ./components/orderSumaryCardPos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_orderSumaryCardPosvue_type_script_lang_js_ = (orderSumaryCardPosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/orderSumaryCardPos.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_orderSumaryCardPosvue_type_script_lang_js_,
  orderSumaryCardPosvue_type_template_id_3b45c91c_render,
  staticRenderFns,
  false,
  null,
  null,
  "b7424606"
  
)

/* harmony default export */ var orderSumaryCardPos = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=order-sumary-card-pos.js.map