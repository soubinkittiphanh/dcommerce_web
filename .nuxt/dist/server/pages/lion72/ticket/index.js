exports.ids = [251];
exports.modules = {

/***/ 1132:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(379);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/lion72/ticket/index.vue?vue&type=template&id=b04b59bc&scoped=true&







var ticketvue_type_template_id_b04b59bc_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "ma-1"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_vm._v("ວັນທີ: " + _vm._s(_vm.todayDate))]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_vm._v("ເວລາ: " + _vm._s(_vm.currentTime))]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "4"
    }
  }, [_c('span', {
    staticClass: "mdi mdi-check-circle-outline",
    staticStyle: {
      "color": "green",
      "font-size": "44px"
    }
  })])], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VDivider["a" /* default */]), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "3"
    }
  }, [_c('h4', [_vm._v("\n                    ເລກສ່ຽງ\n                ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "3"
    }
  }, [_c('h4', [_vm._v("\n                    ຈຳນວນ\n                ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "3"
    }
  }, [_c('h4', [_vm._v("\n                    ເລກສ່ຽງ\n                ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "3"
    }
  }, [_c('h4', [_vm._v("\n                    ຈຳນວນ\n                ")])])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, _vm._l(_vm.oddEvenList['evenIndexList'], function (txn, i) {
    return _c(VRow["a" /* default */], {
      key: i,
      attrs: {
        "no-gutters": ""
      }
    }, [_c(VCol["a" /* default */], {
      staticClass: "text-right",
      attrs: {
        "cols": "6"
      }
    }, [_vm._v(_vm._s(txn['normal'] ? 'ລ່າງ' : 'ບົນ') + "-" + _vm._s(txn['luckyNumber']))]), _vm._v(" "), _c(VCol["a" /* default */], {
      staticClass: "text-right",
      attrs: {
        "cols": "6"
      }
    }, [_vm._v(_vm._s(_vm.thoundsandFormatter(txn['amount'])))])], 1);
  }), 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, _vm._l(_vm.oddEvenList['oddIndexList'], function (txn, i) {
    return _c(VRow["a" /* default */], {
      key: i,
      attrs: {
        "no-gutters": ""
      }
    }, [_c(VCol["a" /* default */], {
      staticClass: "text-right",
      attrs: {
        "cols": "6"
      }
    }, [_vm._v(_vm._s(txn['normal'] ? 'ລ່າງ' : 'ບົນ') + "-" + _vm._s(txn['luckyNumber']))]), _vm._v(" "), _c(VCol["a" /* default */], {
      staticClass: "text-right",
      attrs: {
        "cols": "6"
      }
    }, [_vm._v(_vm._s(_vm.thoundsandFormatter(txn['amount'])))])], 1);
  }), 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticClass: "text-left",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "ma-1",
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.goHome
    }
  }, [_c('span', {
    staticClass: "mdi mdi-arrow-left"
  })])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "6"
    }
  }, [_c('h4', [_vm._v("\n                    ຍອດລວມ: " + _vm._s(_vm.ticketTotal) + "\n                ")])])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/lion72/ticket/index.vue?vue&type=template&id=b04b59bc&scoped=true&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/lion72/ticket/index.vue?vue&type=script&lang=js&

/* harmony default export */ var ticketvue_type_script_lang_js_ = ({
  layout: "login",
  data() {
    return {
      transactionList: [{
        luckyNumber: '00',
        amount: 1000
      }, {
        luckyNumber: '210',
        amount: 1000
      }, {
        luckyNumber: '602',
        amount: 2000
      }, {
        luckyNumber: '62',
        amount: 10000
      }, {
        luckyNumber: '60',
        amount: 100000
      }, {
        luckyNumber: '602',
        amount: 1000
      }]
    };
  },
  mounted() {
    this.transactionList = this.$route.query.txn;
    // Do something with the parameters
  },

  methods: {
    thoundsandFormatter(val) {
      return Object(common["e" /* getFormatNum */])(val);
    },
    goHome() {
      this.$router.push({
        path: '/lion72'
      });
    }
  },
  computed: {
    oddEvenList() {
      const oddIndexList = [];
      const evenIndexList = [];
      this.transactionList.forEach((item, index) => {
        if (index % 2 === 0) {
          evenIndexList.push(item);
        } else {
          oddIndexList.push(item);
        }
      });
      return {
        oddIndexList,
        evenIndexList
      };
    },
    ticketTotal() {
      const totalPrice = this.transactionList.reduce((total, item) => {
        return total + item['amount'];
      }, 0);
      return this.thoundsandFormatter(totalPrice);
    },
    todayDate() {
      const today = new Date();
      const day = today.getDate().toString().padStart(2, '0');
      const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = today.getFullYear();
      return `${day}/${month}/${year}`;
    },
    currentTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false
      });
      return timeString;
    }
  }
});
// CONCATENATED MODULE: ./pages/lion72/ticket/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var lion72_ticketvue_type_script_lang_js_ = (ticketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/lion72/ticket/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(970)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lion72_ticketvue_type_script_lang_js_,
  ticketvue_type_template_id_b04b59bc_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "b04b59bc",
  "32f85fb6"
  
)

/* harmony default export */ var ticket = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(971);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("47f4a5f8", content, true, context)
};

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b04b59bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b04b59bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b04b59bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b04b59bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b04b59bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".zigzag-footer[data-v-b04b59bc]{position:relative}.zigzag-footer[data-v-b04b59bc]:before{background:#fff;clip-path:polygon(0 0,100% 0,50% 100%);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map