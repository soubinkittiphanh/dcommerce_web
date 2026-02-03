exports.ids = [125];
exports.modules = {

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1400);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("16598ccd", content, true, context)
};

/***/ }),

/***/ 1399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PosAppBar_vue_vue_type_style_index_0_id_5ddf954b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1040);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PosAppBar_vue_vue_type_style_index_0_id_5ddf954b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PosAppBar_vue_vue_type_style_index_0_id_5ddf954b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PosAppBar_vue_vue_type_style_index_0_id_5ddf954b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PosAppBar_vue_vue_type_style_index_0_id_5ddf954b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".app-header[data-v-5ddf954b]{box-shadow:0 4px 20px rgba(0,0,0,.15)!important}.cart-mobile-btn[data-v-5ddf954b],.menu-btn[data-v-5ddf954b]{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.1)!important;transition:all .3s ease}.cart-mobile-btn[data-v-5ddf954b]:hover,.menu-btn[data-v-5ddf954b]:hover{background:hsla(0,0%,100%,.2)!important;transform:scale(1.05)}.header-btn[data-v-5ddf954b]{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.1)!important;border:1px solid hsla(0,0%,100%,.2)!important;margin:0 2px;transition:all .3s ease}.header-btn[data-v-5ddf954b]:hover{background:hsla(0,0%,100%,.2)!important;box-shadow:0 4px 15px rgba(0,0,0,.2);transform:translateY(-2px)}.active-route[data-v-5ddf954b]{background:hsla(0,0%,100%,.25)!important;box-shadow:0 2px 10px rgba(0,0,0,.15)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js + 2 modules
var VAppBar = __webpack_require__(453);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBadge/VBadge.js
var VBadge = __webpack_require__(445);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/PosAppBar.vue?vue&type=template&id=5ddf954b&scoped=true








var PosAppBarvue_type_template_id_5ddf954b_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VAppBar["a" /* default */], {
    staticClass: "app-header",
    attrs: {
      "app": "",
      "color": "primary",
      "dark": "",
      "clipped-left": "",
      "clipped-right": "",
      "elevation": "8",
      "height": "80"
    }
  }, [_c(VContainer["a" /* default */], {
    staticClass: "pa-3",
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "align": "center",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex align-center",
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-3 menu-btn",
    attrs: {
      "icon": "",
      "large": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('toggle-drawer');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "28"
    }
  }, [_vm._v("mdi-menu")])], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "d-lg-none cart-mobile-btn",
    attrs: {
      "icon": "",
      "large": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('toggle-cart-drawer');
      }
    }
  }, [_vm.cartItemCount > 0 ? _c(VBadge["a" /* default */], {
    attrs: {
      "content": _vm.cartItemCount,
      "color": "error",
      "overlap": "",
      "dot": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "28"
    }
  }, [_vm._v("mdi-cart")])], 1) : _c(VIcon["a" /* default */], {
    attrs: {
      "size": "28"
    }
  }, [_vm._v("mdi-cart-outline")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex justify-end",
    attrs: {
      "cols": "12",
      "md": "8",
      "lg": "9"
    }
  }, [_c('div', {
    staticClass: "d-flex align-center flex-wrap ga-2"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "header-btn mr-2",
    attrs: {
      "color": _vm.isCustomerDisplayOpen ? 'success' : 'white',
      "text": "",
      "large": "",
      "rounded": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('open-customer-screen');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "20"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.isCustomerDisplayOpen ? 'mdi-monitor-eye' : 'mdi-monitor-share') + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "d-none d-sm-inline font-weight-medium"
  }, [_vm._v("\n              " + _vm._s(_vm.isCustomerDisplayOpen ? 'ອັບເດດຈໍ' : 'ຈໍລູກຄ້າ') + "\n            ")])], 1), _vm._v(" "), _vm._l(_vm.headerMenu, function (item) {
    return _c(VBtn["a" /* default */], {
      key: item.title,
      staticClass: "header-btn",
      class: {
        'active-route': _vm.$route.path === item.path
      },
      attrs: {
        "to": item.path,
        "text": "",
        "large": "",
        "rounded": ""
      },
      on: {
        "click": function ($event) {
          return _vm.handleMenuClick(item);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "left": "",
        "size": "20"
      }
    }, [_vm._v(_vm._s(item.icon))]), _vm._v(" "), _c('span', {
      staticClass: "d-none d-sm-inline font-weight-medium"
    }, [_vm._v(_vm._s(item.title))])], 1);
  })], 2)])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pos/PosAppBar.vue?vue&type=template&id=5ddf954b&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/PosAppBar.vue?vue&type=script&lang=js
/* harmony default export */ var PosAppBarvue_type_script_lang_js = ({
  name: 'PosAppBar',
  props: {
    currentTerminal: Object,
    isCustomerDisplayOpen: Boolean,
    drawer: Boolean,
    cartItemCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['toggle-drawer', 'toggle-cart-drawer', 'open-customer-screen', 'set-quotation'],
  data() {
    return {
      headerMenu: [{
        title: 'Home',
        path: '/admin',
        icon: 'mdi-home-circle-outline',
        method: null
      }, {
        title: 'Orders',
        path: '/admin/ordersFromPos',
        icon: 'mdi-reorder-horizontal',
        method: null
      }, {
        title: 'Quotation',
        path: '',
        icon: 'mdi-receipt-text-clock-outline',
        method: 'setQuotation'
      }, {
        title: 'Logout',
        path: '/admin/logout',
        icon: 'mdi-logout',
        method: null
      }]
    };
  },
  methods: {
    handleMenuClick(item) {
      if (item.method === 'setQuotation') {
        this.$emit('set-quotation');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/pos/PosAppBar.vue?vue&type=script&lang=js
 /* harmony default export */ var pos_PosAppBarvue_type_script_lang_js = (PosAppBarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/pos/PosAppBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1399)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_PosAppBarvue_type_script_lang_js,
  PosAppBarvue_type_template_id_5ddf954b_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "5ddf954b",
  "1d0fbae8"
  
)

/* harmony default export */ var PosAppBar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pos-app-bar.js.map