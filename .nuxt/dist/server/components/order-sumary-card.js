exports.ids = [87];
exports.modules = {

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(380);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orderSumaryCard.vue?vue&type=template&id=143a1440&






var orderSumaryCardvue_type_template_id_143a1440_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "ml-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_vm._v(_vm._s(this.orderDetail.title))]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v("ຈຳນວນ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v(_vm._s(this.orderDetail.amount) + " ອໍເດີ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v("ຍອດຂາຍ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v(_vm._s(this.orderDetail.sale))])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v("ສ່ວນຫລຸດ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v(_vm._s(this.orderDetail.discount))])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v("COD/RIDER FEE")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v(_vm._s(this.orderDetail.gross))])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _vm.showTotal ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v("ຈຳນວນເງິນທີ່ໄດ້ຮັບຈາກລູກຄ້າ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }, [_vm._v(_vm._s(_vm.gross))])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/orderSumaryCard.vue?vue&type=template&id=143a1440&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orderSumaryCard.vue?vue&type=script&lang=js&
/* harmony default export */ var orderSumaryCardvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/orderSumaryCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_orderSumaryCardvue_type_script_lang_js_ = (orderSumaryCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/orderSumaryCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_orderSumaryCardvue_type_script_lang_js_,
  orderSumaryCardvue_type_template_id_143a1440_render,
  staticRenderFns,
  false,
  null,
  null,
  "ab0f9610"
  
)

/* harmony default export */ var orderSumaryCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=order-sumary-card.js.map