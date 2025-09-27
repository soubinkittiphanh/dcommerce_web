exports.ids = [104];
exports.modules = {

/***/ 1268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(399);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orderSumaryCardV2.vue?vue&type=template&id=4b590d48&scoped=true&






var orderSumaryCardV2vue_type_template_id_4b590d48_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "ml-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_vm._v(_vm._s(this.orderDetail.title))]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "items": _vm.orderDetail
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/orderSumaryCardV2.vue?vue&type=template&id=4b590d48&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orderSumaryCardV2.vue?vue&type=script&lang=js&

/* harmony default export */ var orderSumaryCardV2vue_type_script_lang_js_ = ({
  props: {
    orderDetail: {
      type: Array
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    gross: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      headers: [{
        text: 'ລາຍການ',
        value: 'name'
      }, {
        text: 'ຈຳນວນ',
        value: 'value'
      }, {
        text: 'ມູນຄ່າ ກີບ',
        value: 'amount'
      }, {
        text: 'ມູນຄ່າ ບາດ',
        value: 'amountTHB'
      }, {
        text: 'ຄ່າຂົນສົ່ງ ກີບ',
        value: 'deliveryFee'
      }, {
        text: 'ຄ່າຂົນສົ່ງ ບາດ',
        value: 'deliveryFeeTHB'
      }],
      headerStyle: {
        backgroundColor: '#2196f3',
        // change to your desired color
        color: 'white',
        // change to the text color you want
        fontWeight: 'bold' // change to the font weight you want
      }
    };
  },

  computed: {
    headerList() {
      for (const iterator of object) {}
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/orderSumaryCardV2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_orderSumaryCardV2vue_type_script_lang_js_ = (orderSumaryCardV2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/orderSumaryCardV2.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_orderSumaryCardV2vue_type_script_lang_js_,
  orderSumaryCardV2vue_type_template_id_4b590d48_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "4b590d48",
  "2da27994"
  
)

/* harmony default export */ var orderSumaryCardV2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=order-sumary-card-v2.js.map