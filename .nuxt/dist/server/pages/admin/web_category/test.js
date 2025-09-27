exports.ids = [258];
exports.modules = {

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_7e12c691_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(803);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_7e12c691_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_7e12c691_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_7e12c691_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_7e12c691_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".draggable-item[data-v-7e12c691]{cursor:move;cursor:grab}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/web_category/test.vue?vue&type=template&id=7e12c691&scoped=true&





var testvue_type_template_id_7e12c691_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drag-drop-lists"
  }, [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], [_c('draggable', {
    attrs: {
      "group": "items"
    },
    on: {
      "end": _vm.onEnd
    },
    model: {
      value: _vm.listOne,
      callback: function ($$v) {
        _vm.listOne = $$v;
      },
      expression: "listOne"
    }
  }, _vm._l(_vm.listOne, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "draggable-item mb-1"
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "color": "primary",
        "rounded": ""
      }
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                        ")])], 1);
  }), 0)], 1), _vm._v(" "), _c(VCol["a" /* default */], [_c('draggable', {
    attrs: {
      "group": "items"
    },
    on: {
      "end": _vm.onEnd
    },
    model: {
      value: _vm.listTwo,
      callback: function ($$v) {
        _vm.listTwo = $$v;
      },
      expression: "listTwo"
    }
  }, _vm._l(_vm.listTwo, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "draggable-item mb-1"
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "color": "primary",
        "rounded": ""
      }
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                        ")])], 1);
  }), 0)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/web_category/test.vue?vue&type=template&id=7e12c691&scoped=true&

// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__(372);
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/web_category/test.vue?vue&type=script&lang=js&

/* harmony default export */ var testvue_type_script_lang_js_ = ({
  components: {
    draggable: external_vuedraggable_default.a
  },
  data() {
    return {
      listOne: [{
        name: "Item 1"
      }, {
        name: "Item 2"
      }],
      listTwo: [{
        name: "Item 3"
      }, {
        name: "Item 4"
      }]
    };
  },
  methods: {
    onEnd(event) {
      console.log('Drag ended:', event);
      console.log(`LIST ONE ${JSON.stringify(this.listOne)}`);
      console.log(`LIST TWO ${JSON.stringify(this.listTwo)}`);
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/web_category/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var web_category_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/web_category/test.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1053)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  web_category_testvue_type_script_lang_js_,
  testvue_type_template_id_7e12c691_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "7e12c691",
  "03a44327"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1054);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("63b85794", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=test.js.map