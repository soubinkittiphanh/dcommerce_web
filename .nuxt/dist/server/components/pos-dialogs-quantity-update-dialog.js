exports.ids = [109];
exports.modules = {

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityUpdateDialog_vue_vue_type_style_index_0_id_69f70c00_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(842);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityUpdateDialog_vue_vue_type_style_index_0_id_69f70c00_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityUpdateDialog_vue_vue_type_style_index_0_id_69f70c00_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityUpdateDialog_vue_vue_type_style_index_0_id_69f70c00_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityUpdateDialog_vue_vue_type_style_index_0_id_69f70c00_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".terminal-dialog .terminal-card[data-v-69f70c00]{cursor:pointer;transition:all .2s ease}.terminal-dialog .terminal-card[data-v-69f70c00]:hover{box-shadow:0 4px 8px rgba(0,0,0,.12);transform:translateY(-2px)}.terminal-dialog .terminal-card.selected[data-v-69f70c00]{background-color:rgba(var(--v-primary-base),.05);border-color:var(--v-primary-base)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1291:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(347);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(388);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/dialogs/QuantityUpdateDialog.vue?vue&type=template&id=69f70c00&scoped=true&








var QuantityUpdateDialogvue_type_template_id_69f70c00_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "1200"
    },
    model: {
      value: _vm.internalValue,
      callback: function ($$v) {
        _vm.internalValue = $$v;
      },
      expression: "internalValue"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5 primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-receipt-text")]), _vm._v("\n      ໃບສະເໜີລາຄາ\n      "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        _vm.internalValue = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_c('quotation')], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pos/dialogs/QuantityUpdateDialog.vue?vue&type=template&id=69f70c00&scoped=true&

// EXTERNAL MODULE: ./components/quotation/index.vue + 4 modules
var quotation = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/dialogs/QuantityUpdateDialog.vue?vue&type=script&lang=js&

/* harmony default export */ var QuantityUpdateDialogvue_type_script_lang_js_ = ({
  name: 'QuotationDialog',
  components: {
    Quotation: quotation["default"]
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/pos/dialogs/QuantityUpdateDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_QuantityUpdateDialogvue_type_script_lang_js_ = (QuantityUpdateDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/pos/dialogs/QuantityUpdateDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_QuantityUpdateDialogvue_type_script_lang_js_,
  QuantityUpdateDialogvue_type_template_id_69f70c00_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "69f70c00",
  "76ddc3ae"
  
)

/* harmony default export */ var QuantityUpdateDialog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Quotation: __webpack_require__(108).default})


/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1129);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("fa80940c", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=pos-dialogs-quantity-update-dialog.js.map