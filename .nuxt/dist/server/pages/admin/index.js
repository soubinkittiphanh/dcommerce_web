exports.ids = [209,56,57,101,102,127,130,131,325];
exports.modules = {

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menuOverview/index.vue?vue&type=template&id=1c25764e








var menuOverviewvue_type_template_id_1c25764e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "cols": "3"
    }
  }, [_c(VAvatar["a" /* default */], {
    attrs: {
      "color": "primary",
      "size": "50"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "dark": "",
      "size": "30"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.icon) + "\n          ")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pt-0",
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "cols": "9"
    }
  }, [_c(VRow["a" /* default */], {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "font-size": "larger",
      "font-weight": "bold",
      "font-family": "Arial, Helvetica, sans-serif"
    },
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.total) + "\n          ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, _vm._l(_vm.groupedSales, function (details, paymentCode) {
    return _c(VCard["a" /* default */], {
      key: paymentCode,
      staticClass: "mx-auto",
      attrs: {
        "max-width": "344",
        "outlined": ""
      }
    }, [_c(components_VCard["c" /* VCardText */], [_vm._v("\n                " + _vm._s(paymentCode)), _c('br'), _vm._v(" "), _c(VChip["a" /* default */], {
      attrs: {
        "color": "grey",
        "text-color": "white"
      }
    }, [_vm._v("\n                  " + _vm._s(details.totalSales.toLocaleString()) + " /\n                  " + _vm._s(details.count) + "\n                  "), _c(VIcon["a" /* default */], {
      attrs: {
        "size": "14"
      }
    }, [_vm._v("mdi-invoice-list-outline")])], 1)], 1)], 1);
  }), 1)], 1), _vm._v(" "), _c(VRow["a" /* default */])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/menuOverview/index.vue?vue&type=template&id=1c25764e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menuOverview/index.vue?vue&type=script&lang=js
/* harmony default export */ var menuOverviewvue_type_script_lang_js = ({
  name: 'menu-card',
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    total: {
      type: String,
      default: ''
    },
    groupedSales: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      imageSrc: __webpack_require__(198)
    };
  },
  methods: {
    takeMeTo() {
      this.$router.push(this.path);
    }
  }
});
// CONCATENATED MODULE: ./components/menuOverview/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_menuOverviewvue_type_script_lang_js = (menuOverviewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/menuOverview/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_menuOverviewvue_type_script_lang_js,
  menuOverviewvue_type_template_id_1c25764e_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "91e44424"
  
)

/* harmony default export */ var menuOverview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cashier_2.208aede.svg";

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/invoice.45f420f.svg";

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pay-card.8fb80cc.svg";

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/stock.b6becdb.svg";

/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/responsive.bfad449.svg";

/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/patient.1cdc99c.svg";

/***/ }),

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c039c0e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(856);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c039c0e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c039c0e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c039c0e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c039c0e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modern-dashboard[data-v-9c039c0e]{background:linear-gradient(135deg,#f5f7fa,#c3cfe2);font-family:\"Inter\",\"Noto Sans Lao\",sans-serif;min-height:100vh}.loading-container[data-v-9c039c0e]{align-items:center;background:#fff;border-radius:16px;box-shadow:0 20px 25px -5px rgba(0,0,0,.1);display:flex;flex-direction:column;padding:2rem}.loading-spinner[data-v-9c039c0e]{animation:spin-9c039c0e 1s linear infinite;border:3px solid #f3f4f6;border-radius:50%;border-top-color:#667eea;height:40px;margin-bottom:1rem;width:40px}@keyframes spin-9c039c0e{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.loading-text[data-v-9c039c0e]{color:#6b7280;font-weight:500;margin:0}.terminal-dialog[data-v-9c039c0e]{border-radius:16px!important;box-shadow:0 25px 50px -12px rgba(0,0,0,.25)!important;overflow:hidden}.dialog-header[data-v-9c039c0e]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;display:flex;justify-content:space-between;padding:1.5rem 2rem}.dialog-header h3[data-v-9c039c0e]{font-size:1.25rem;font-weight:600;margin:0}.dialog-content[data-v-9c039c0e]{max-height:400px;overflow-y:auto;padding:1.5rem 2rem}.custom-radio-group .v-input[data-v-9c039c0e]{margin:0}.terminal-option[data-v-9c039c0e]{align-items:center;background:#fff;border:2px solid #f3f4f6;border-radius:12px;cursor:pointer;display:flex;justify-content:space-between;margin-bottom:.75rem;padding:1rem;transition:all .2s ease}.terminal-option[data-v-9c039c0e]:hover{border-color:#667eea;box-shadow:0 4px 12px rgba(102,126,234,.15);transform:translateY(-2px)}.terminal-option.selected[data-v-9c039c0e]{background:rgba(102,126,234,.05);border-color:#667eea}.terminal-option .hidden[data-v-9c039c0e]{display:none}.terminal-info h4[data-v-9c039c0e]{color:#1f2937;font-weight:600;margin:0 0 .25rem}.terminal-info p[data-v-9c039c0e]{color:#6b7280;font-size:.875rem;margin:0}.dialog-actions[data-v-9c039c0e]{background:#f9fafb;display:flex;justify-content:flex-end;padding:1.5rem 2rem}.primary-button[data-v-9c039c0e]{background:linear-gradient(135deg,#667eea,#764ba2)!important;border-radius:8px!important;box-shadow:0 4px 12px rgba(102,126,234,.4)!important;color:#fff!important;font-weight:600!important;height:44px!important;padding:0 2rem!important;text-transform:none!important;transition:all .2s ease!important}.primary-button[data-v-9c039c0e]:hover{box-shadow:0 8px 20px rgba(102,126,234,.6)!important;transform:translateY(-2px)}.primary-button[data-v-9c039c0e]:disabled{box-shadow:none!important;opacity:.6;transform:none!important}.dashboard-container[data-v-9c039c0e]{margin:0 auto;max-width:1400px;padding:2rem}.dashboard-header[data-v-9c039c0e]{align-items:flex-end;display:flex;justify-content:space-between;margin-bottom:3rem;padding:2rem 0}.header-content[data-v-9c039c0e]{flex:1}.dashboard-title[data-v-9c039c0e]{background:linear-gradient(135deg,#1f2937,#667eea);-webkit-background-clip:text;color:#1f2937;font-size:2.5rem;font-weight:700;margin:0 0 .5rem;-webkit-text-fill-color:transparent;background-clip:text}.dashboard-subtitle[data-v-9c039c0e]{color:#6b7280;font-size:1.125rem;font-weight:400;margin:0}.header-actions[data-v-9c039c0e]{gap:1rem}.date-display[data-v-9c039c0e],.header-actions[data-v-9c039c0e]{align-items:center;display:flex}.date-display[data-v-9c039c0e]{background:#fff;border-radius:12px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);color:#6b7280;font-weight:500;gap:.5rem;padding:.75rem 1rem}.section-header[data-v-9c039c0e]{margin-bottom:2rem}.section-title[data-v-9c039c0e]{color:#1f2937;font-size:1.75rem;font-weight:600;margin:0 0 .5rem}.section-description[data-v-9c039c0e]{color:#6b7280;font-size:1rem;margin:0}.quick-actions-section[data-v-9c039c0e]{margin-bottom:4rem}.quick-actions-grid[data-v-9c039c0e]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:1.5rem;gap:1.5rem}.action-card[data-v-9c039c0e]{background:#fff;border:1px solid #f3f4f6;border-radius:16px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);cursor:pointer;overflow:hidden;padding:2rem;position:relative;transition:all .3s ease}.action-card[data-v-9c039c0e]:hover{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);transform:translateY(-8px)}.action-card:hover .card-overlay[data-v-9c039c0e]{opacity:1}.card-overlay[data-v-9c039c0e]{background:linear-gradient(135deg,rgba(102,126,234,.1),rgba(118,75,162,.1));bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s ease}.card-icon[data-v-9c039c0e]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;display:flex;height:64px;justify-content:center;margin-bottom:1.5rem;padding:1rem;width:64px}.card-icon img[data-v-9c039c0e]{filter:brightness(0) invert(1);height:32px;width:32px}.card-content[data-v-9c039c0e]{align-items:center;display:flex;justify-content:space-between}.card-content h3[data-v-9c039c0e]{color:#1f2937;flex:1;font-size:1.125rem;font-weight:600;margin:0}.arrow-icon[data-v-9c039c0e]{color:#6b7280;transition:transform .3s ease}.action-card:hover .arrow-icon[data-v-9c039c0e]{color:#667eea;transform:translateX(4px)}.kpi-section[data-v-9c039c0e]{margin-bottom:4rem}.kpi-grid[data-v-9c039c0e]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:1.5rem;gap:1.5rem}.kpi-card[data-v-9c039c0e]{background:#fff;border:1px solid #f3f4f6;border-radius:16px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);overflow:hidden;padding:2rem;position:relative;transition:all .3s ease}.kpi-card[data-v-9c039c0e]:before{content:\"\";height:4px;left:0;position:absolute;right:0;top:0}.kpi-card--0[data-v-9c039c0e]:before,.kpi-card[data-v-9c039c0e]:before{background:linear-gradient(90deg,#667eea,#764ba2)}.kpi-card--1[data-v-9c039c0e]:before{background:linear-gradient(90deg,#f093fb,#f5576c)}.kpi-card--2[data-v-9c039c0e]:before{background:linear-gradient(90deg,#4facfe,#00f2fe)}.kpi-card[data-v-9c039c0e]:hover{box-shadow:0 12px 20px -5px rgba(0,0,0,.15);transform:translateY(-4px)}.kpi-header[data-v-9c039c0e]{justify-content:space-between;margin-bottom:1rem}.kpi-header[data-v-9c039c0e],.kpi-icon[data-v-9c039c0e]{align-items:center;display:flex}.kpi-icon[data-v-9c039c0e]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:12px;color:#fff;height:48px;justify-content:center;width:48px}.kpi-trend[data-v-9c039c0e]{background:linear-gradient(135deg,#ecfdf5,#d1fae5);border:1px solid #10b981;border-radius:10px;box-shadow:0 2px 4px rgba(16,185,129,.1);padding:.5rem}.kpi-content[data-v-9c039c0e]{flex:1}.kpi-title[data-v-9c039c0e]{color:#6b7280;font-size:.875rem;font-weight:500;margin:0 0 .5rem}.kpi-value[data-v-9c039c0e]{color:#1f2937;font-size:2rem;font-weight:700;margin-bottom:1rem}.payment-breakdown[data-v-9c039c0e]{border-top:1px solid #f3f4f6;padding-top:1rem}.payment-item[data-v-9c039c0e]{align-items:center;border-bottom:1px solid #f9fafb;display:flex;justify-content:space-between;padding:.5rem 0}.payment-item[data-v-9c039c0e]:last-child{border-bottom:none}.payment-method[data-v-9c039c0e]{color:#6b7280;font-size:.875rem;font-weight:500}.payment-amount[data-v-9c039c0e]{color:#1f2937;font-size:.875rem;font-weight:600}.analytics-section[data-v-9c039c0e]{margin-bottom:4rem}.analytics-grid[data-v-9c039c0e]{display:grid;grid-template-columns:repeat(12,1fr);grid-gap:1.5rem;gap:1.5rem}.chart-card[data-v-9c039c0e]{background:#fff;border:1px solid #f3f4f6;border-radius:16px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);overflow:hidden;transition:all .3s ease}.chart-card[data-v-9c039c0e]:hover{box-shadow:0 12px 20px -5px rgba(0,0,0,.15)}.chart-card--large[data-v-9c039c0e]{grid-column:span 8}.chart-card--small[data-v-9c039c0e]{grid-column:span 4}.chart-card[data-v-9c039c0e]:not(.chart-card--large):not(.chart-card--small){grid-column:span 6}@media (max-width:1024px){.chart-card[data-v-9c039c0e],.chart-card--large[data-v-9c039c0e],.chart-card--small[data-v-9c039c0e]{grid-column:span 12}}.chart-header[data-v-9c039c0e]{align-items:center;border-bottom:1px solid #f3f4f6;display:flex;justify-content:space-between;margin-bottom:1rem;padding:1.5rem 2rem 0}.chart-header h3[data-v-9c039c0e]{color:#1f2937;font-size:1.125rem;font-weight:600;margin:0}.chart-period[data-v-9c039c0e]{background:#f9fafb;border-radius:6px;color:#6b7280;font-size:.875rem;font-weight:500;padding:.25rem .75rem}.chart-container[data-v-9c039c0e]{padding:0 2rem 2rem}.echarts-container[data-v-9c039c0e]{height:400px;width:100%}.inventory-section[data-v-9c039c0e]{margin-bottom:2rem}.inventory-container[data-v-9c039c0e]{background:#fff;border:1px solid #f3f4f6;border-radius:16px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1)}@media (max-width:768px){.dashboard-container[data-v-9c039c0e]{padding:0}.dashboard-header[data-v-9c039c0e]{align-items:flex-start;flex-direction:column;gap:1rem}.dashboard-title[data-v-9c039c0e]{font-size:2rem}.quick-actions-grid[data-v-9c039c0e]{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.kpi-grid[data-v-9c039c0e]{grid-template-columns:1fr}.section-title[data-v-9c039c0e]{font-size:1.5rem}}@media (max-width:480px){.action-card[data-v-9c039c0e],.kpi-card[data-v-9c039c0e]{padding:1.5rem}.card-icon[data-v-9c039c0e]{height:56px;width:56px}.kpi-value[data-v-9c039c0e]{font-size:1.75rem}.chart-header[data-v-9c039c0e]{padding:1rem 1.5rem 0}.chart-container[data-v-9c039c0e]{padding:0 1.5rem 1.5rem}}@keyframes slideInUp-9c039c0e{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.action-card[data-v-9c039c0e],.chart-card[data-v-9c039c0e],.kpi-card[data-v-9c039c0e]{animation:slideInUp-9c039c0e .6s ease-out}.action-card[data-v-9c039c0e]:first-child{animation-delay:.1s}.action-card[data-v-9c039c0e]:nth-child(2){animation-delay:.2s}.action-card[data-v-9c039c0e]:nth-child(3){animation-delay:.3s}.action-card[data-v-9c039c0e]:nth-child(4){animation-delay:.4s}.action-card[data-v-9c039c0e]:nth-child(5){animation-delay:.5s}.action-card[data-v-9c039c0e]:nth-child(6){animation-delay:.6s}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
var VRadio = __webpack_require__(422);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
var VRadioGroup = __webpack_require__(421);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=9c039c0e&scoped=true







var adminvue_type_template_id_9c039c0e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modern-dashboard"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('div', {
    staticClass: "loading-container"
  }, [_c('div', {
    staticClass: "loading-spinner"
  }), _vm._v(" "), _c('p', {
    staticClass: "loading-text"
  }, [_vm._v("Loading...")])])]), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "scrollable": "",
      "max-width": "500",
      "persistent": ""
    },
    model: {
      value: _vm.terminalDialog,
      callback: function ($$v) {
        _vm.terminalDialog = $$v;
      },
      expression: "terminalDialog"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "terminal-dialog"
  }, [_c('div', {
    staticClass: "dialog-header"
  }, [_c('h3', [_vm._v("ເລືອກ Terminal")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": ""
    },
    on: {
      "click": function ($event) {
        _vm.terminalDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-content"
  }, [_c(VRadioGroup["a" /* default */], {
    staticClass: "custom-radio-group",
    model: {
      value: _vm.terminalSelected,
      callback: function ($$v) {
        _vm.terminalSelected = $$v;
      },
      expression: "terminalSelected"
    }
  }, _vm._l(_vm.findAllTerminal, function (terminal) {
    return _c('div', {
      key: terminal.id,
      staticClass: "terminal-option",
      class: {
        'selected': _vm.terminalSelected === terminal.id
      },
      on: {
        "click": function ($event) {
          _vm.terminalSelected = terminal.id;
        }
      }
    }, [_c(VRadio["a" /* default */], {
      staticClass: "hidden",
      attrs: {
        "value": terminal.id
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "terminal-info"
    }, [_c('h4', [_vm._v(_vm._s(terminal.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(terminal.description))])]), _vm._v(" "), _vm.terminalSelected === terminal.id ? _c(VIcon["a" /* default */], {
      attrs: {
        "color": "primary"
      }
    }, [_vm._v("mdi-check-circle")]) : _vm._e()], 1);
  }), 0)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-actions"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary-button",
    attrs: {
      "disabled": !_vm.terminalSelected
    },
    on: {
      "click": _vm.chooseTerminal
    }
  }, [_vm._v("\n          ເລືອກ Terminal\n        ")])], 1)])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"dashboard-container\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"dashboard-header\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"header-content\" data-v-9c039c0e><h1 class=\"dashboard-title\" data-v-9c039c0e>Dashboard Overview</h1> <p class=\"dashboard-subtitle\" data-v-9c039c0e>Real-time business insights and analytics</p></div> "), _vm._ssrNode("<div class=\"header-actions\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"date-display\" data-v-9c039c0e>", "</div>", [_c(VIcon["a" /* default */], [_vm._v("mdi-calendar")]), _vm._ssrNode(" <span data-v-9c039c0e>" + _vm._ssrEscape(_vm._s(_vm.currentDate)) + "</span>")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"quick-actions-section\" data-v-9c039c0e>", "</section>", [_vm._ssrNode("<div class=\"section-header\" data-v-9c039c0e><h2 class=\"section-title\" data-v-9c039c0e>Quick Actions</h2> <p class=\"section-description\" data-v-9c039c0e>Access your most used features</p></div> "), _vm._ssrNode("<div class=\"quick-actions-grid\" data-v-9c039c0e>", "</div>", _vm._l(_vm.menus, function (item, index) {
    return _vm._ssrNode("<div class=\"action-card\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"card-icon\" data-v-9c039c0e><img" + _vm._ssrAttr("src", item.svgIcon) + " alt data-v-9c039c0e></div> "), _vm._ssrNode("<div class=\"card-content\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<h3 data-v-9c039c0e>" + _vm._ssrEscape(_vm._s(item.title)) + "</h3> "), _c(VIcon["a" /* default */], {
      staticClass: "arrow-icon"
    }, [_vm._v("mdi-arrow-right")])], 2), _vm._ssrNode(" <div class=\"card-overlay\" data-v-9c039c0e></div>")], 2);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"kpi-section\" data-v-9c039c0e>", "</section>", [_vm._ssrNode("<div class=\"section-header\" data-v-9c039c0e><h2 class=\"section-title\" data-v-9c039c0e>Sales Overview</h2> <p class=\"section-description\" data-v-9c039c0e>Track your performance metrics</p></div> "), _vm._ssrNode("<div class=\"kpi-grid\" data-v-9c039c0e>", "</div>", _vm._l(_vm.menusOverview, function (item, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("kpi-card", `kpi-card--${index}`) + " data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"kpi-header\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"kpi-icon\" data-v-9c039c0e>", "</div>", [_c(VIcon["a" /* default */], [_vm._v(_vm._s(item.icon))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"kpi-trend\" data-v-9c039c0e>", "</div>", [_c(VIcon["a" /* default */], {
      attrs: {
        "size": "18",
        "color": "#10B981"
      }
    }, [_vm._v("mdi-trending-up")])], 1)], 2), _vm._ssrNode(" <div class=\"kpi-content\" data-v-9c039c0e><h3 class=\"kpi-title\" data-v-9c039c0e>" + _vm._ssrEscape(_vm._s(item.title)) + "</h3> <div class=\"kpi-value\" data-v-9c039c0e>" + _vm._ssrEscape(_vm._s(item.total)) + "</div> " + (item.groupedSales && Object.keys(item.groupedSales).length > 0 ? "<div class=\"payment-breakdown\" data-v-9c039c0e>" + _vm._ssrList(item.groupedSales, function (payment, code) {
      return "<div class=\"payment-item\" data-v-9c039c0e><span class=\"payment-method\" data-v-9c039c0e>" + _vm._ssrEscape(_vm._s(payment.paymentName)) + "</span> <span class=\"payment-amount\" data-v-9c039c0e>" + _vm._ssrEscape(_vm._s(_vm.numberFormatter(payment.totalSales))) + "</span></div>";
    }) + "</div>" : "<!---->") + "</div>")], 2);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"analytics-section\" data-v-9c039c0e>", "</section>", [_vm._ssrNode("<div class=\"section-header\" data-v-9c039c0e><h2 class=\"section-title\" data-v-9c039c0e>Analytics Dashboard</h2> <p class=\"section-description\" data-v-9c039c0e>Detailed insights into your business performance</p></div> "), _vm._ssrNode("<div class=\"analytics-grid\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"chart-card chart-card--large\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"chart-header\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<h3 data-v-9c039c0e>ສິນຄ້າຂາຍດີຕາມໝວດ</h3> "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": ""
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-dots-horizontal")])], 1)], 2), _vm._ssrNode(" <div class=\"chart-container\" data-v-9c039c0e><div class=\"echarts-container\" data-v-9c039c0e></div></div>")], 2), _vm._ssrNode(" "), _vm.dailyState ? _vm._ssrNode("<div class=\"chart-card\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"chart-header\" data-v-9c039c0e><h3 data-v-9c039c0e>Daily Sales Trend</h3> <div class=\"chart-period\" data-v-9c039c0e>This Month</div></div> "), _vm._ssrNode("<div class=\"chart-container\" data-v-9c039c0e>", "</div>", [_c('apexchart', {
    attrs: {
      "type": "line",
      "height": "300",
      "options": _vm.barOptionsForDailyStat,
      "series": _vm.barSeriesForDailyStat
    }
  })], 1)], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"chart-card chart-card--small\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"chart-header\" data-v-9c039c0e><h3 data-v-9c039c0e>Payment Methods</h3></div> "), _vm._ssrNode("<div class=\"chart-container\" data-v-9c039c0e>", "</div>", [_c('apexchart', {
    attrs: {
      "type": "donut",
      "height": "250",
      "options": _vm.options,
      "series": _vm.paymentSeries
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm.dailyState ? _vm._ssrNode("<div class=\"chart-card\" data-v-9c039c0e>", "</div>", [_vm._ssrNode("<div class=\"chart-header\" data-v-9c039c0e><h3 data-v-9c039c0e>Monthly Overview</h3> <div class=\"chart-period\" data-v-9c039c0e>" + _vm._ssrEscape(_vm._s(new Date().getFullYear())) + "</div></div> "), _vm._ssrNode("<div class=\"chart-container\" data-v-9c039c0e>", "</div>", [_c('apexchart', {
    attrs: {
      "type": "line",
      "height": "300",
      "options": _vm.barOptionsForMonthlyStat,
      "series": _vm.barSeriesForMonthlyStat
    }
  })], 1)], 2) : _vm._e()], 2)], 2), _vm._ssrNode(" "), _vm.currentSelectedLocation ? _vm._ssrNode("<section class=\"inventory-section\" data-v-9c039c0e>", "</section>", [_vm._ssrNode("<div class=\"section-header\" data-v-9c039c0e><h2 class=\"section-title\" data-v-9c039c0e>Inventory Alerts</h2> <p class=\"section-description\" data-v-9c039c0e>Monitor low stock items</p></div> "), _vm._ssrNode("<div class=\"inventory-container\" data-v-9c039c0e>", "</div>", [_c('MinStockCard')], 1)], 2) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=9c039c0e&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(41);

// EXTERNAL MODULE: ./components/minStockCard/index.vue + 4 modules
var minStockCard = __webpack_require__(835);

// EXTERNAL MODULE: ./components/menuOverview/index.vue + 4 modules
var menuOverview = __webpack_require__(1001);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: external "echarts"
var external_echarts_ = __webpack_require__(407);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js






/* harmony default export */ var adminvue_type_script_lang_js = ({
  components: {
    MenuOverview: menuOverview["default"],
    MinStockCard: minStockCard["default"]
  },
  middleware: 'auths',
  data() {
    return {
      terminalDialog: false,
      terminalSelected: null,
      currentDate: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      // Chart configurations
      barOptionsForMonthlyStat: {
        colors: ['#10B981'],
        // Bright green for better visibility
        chart: {
          type: 'line',
          height: 'auto',
          toolbar: {
            show: false
          },
          background: 'transparent'
        },
        stroke: {
          curve: 'smooth',
          width: 4,
          // Increased from 3 to 4
          dashArray: 0
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            // Increased opacity
            opacityTo: 0.1,
            stops: [0, 90, 100]
          }
        },
        markers: {
          size: 5,
          colors: ['#10B981'],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              fontFamily: 'Noto Sans Lao, sans-serif',
              fontSize: '12px',
              colors: '#6B7280'
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          title: {
            text: ''
          },
          labels: {
            formatter: function (value) {
              return value.toLocaleString();
            },
            style: {
              colors: '#6B7280',
              fontSize: '12px'
            }
          }
        },
        grid: {
          show: true,
          borderColor: '#F3F4F6',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        tooltip: {
          theme: 'light',
          style: {
            fontSize: '12px',
            fontFamily: 'Noto Sans Lao, sans-serif'
          }
        },
        title: {
          text: '',
          style: {
            fontFamily: 'Noto Sans Lao, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            color: '#1F2937'
          }
        }
      },
      barSeriesForMonthlyStat: [{
        name: 'Sales',
        data: []
      }],
      menus: [{
        title: 'POS',
        svgIcon: __webpack_require__(1045),
        path: '/pos/minimart'
      }, {
        title: 'Invoice',
        svgIcon: __webpack_require__(1046),
        path: '/admin/ordersFromPos'
      }, {
        title: 'ລູກຫນີ້',
        svgIcon: __webpack_require__(1047),
        path: '/admin/ordersFromPosCredit'
      }, {
        title: 'Stock',
        svgIcon: __webpack_require__(1048),
        path: '/admin/product/productlist'
      }, {
        title: 'ລາຍງານ ລູກຄ້າຕິດຫນີ້',
        svgIcon: __webpack_require__(1049),
        path: '/admin/ordersFromPosSummaryByCustomer'
      }, {
        title: 'Customer',
        svgIcon: __webpack_require__(1050),
        path: '/admin/client'
      }],
      yearlySale: [],
      menusOverview: [{
        title: 'ຍອດຂາຍມື້ນິ (KIP)',
        icon: 'mdi-calendar-today',
        path: '',
        total: '0',
        groupedSales: {}
      }, {
        title: `ຍອດຂາຍເດືອນນີ້ - ${new Date().toDateString().split(' ')[1]}/${new Date().toDateString().split(' ')[3]} KIP`,
        icon: 'mdi-calendar-month',
        path: '',
        total: '0',
        cnt: '0'
      }, {
        title: `ຍອດຂາຍ 6 ເດືອນຫຼັງ - KIP`,
        icon: 'mdi-calendar-range',
        path: '',
        total: '0'
      }],
      minstockComponentsKey: 1,
      isloading: false,
      dailyState: false,
      options: {
        chart: {
          type: 'donut',
          height: 250
        },
        colors: ['#667eea', '#f093fb', '#764ba2', '#4facfe', '#00f2fe'],
        labels: [],
        legend: {
          position: 'bottom',
          fontSize: '12px',
          fontFamily: 'Noto Sans Lao, sans-serif'
        },
        plotOptions: {
          pie: {
            donut: {
              size: '70%'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(1) + '%';
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      barSeriesForDailyStat: [{
        name: 'Daily Sales',
        data: []
      }],
      barOptionsForDailyStat: {
        colors: ['#3B82F6'],
        // Bright blue for better visibility
        chart: {
          type: 'line',
          height: 'auto',
          toolbar: {
            show: false
          },
          background: 'transparent'
        },
        stroke: {
          curve: 'smooth',
          width: 4,
          // Increased from 3 to 4
          dashArray: 0
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            // Increased opacity
            opacityTo: 0.1,
            stops: [0, 90, 100]
          }
        },
        markers: {
          size: 5,
          colors: ['#3B82F6'],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              fontFamily: 'Noto Sans Lao, sans-serif',
              fontSize: '12px',
              colors: '#6B7280'
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toLocaleString();
            },
            style: {
              colors: '#6B7280',
              fontSize: '12px'
            }
          }
        },
        grid: {
          show: true,
          borderColor: '#F3F4F6',
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        tooltip: {
          theme: 'light',
          style: {
            fontSize: '12px',
            fontFamily: 'Noto Sans Lao, sans-serif'
          }
        },
        title: {
          text: '',
          style: {
            fontFamily: 'Noto Sans Lao, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            color: '#1F2937'
          }
        }
      }
    };
  },
  async created() {
    await this.loadSaleStatistic();
    this.generateDailyStatisticSale();
    this.init();
  },
  async mounted() {
    await this.loadTopSale();
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllTerminal', 'findSelectedTerminal', 'currentSelectedLocation', 'findAllLocation']),
    // Use computed properties for chart data
    paymentSeries() {
      return this.paymentMethodData.series;
    },
    paymentLabels() {
      return this.paymentMethodData.labels;
    },
    totalSale6M() {
      const totalPrice = this.yearlySale.reduce((total, item) => {
        let rider_fee = 0;
        let cod_fee = 0;
        if (item.dynamic_customer) {
          rider_fee = item.dynamic_customer.rider_fee;
          cod_fee = item.dynamic_customer.cod_fee;
        }
        return total += item.total + rider_fee - cod_fee;
      }, 0);
      return Object(common["e" /* getFormatNum */])(totalPrice);
    },
    totalSaleMTD() {
      const monthSaleList = this.yearlySale.filter(el => el.bookingDate.split('-')[1] == common["m" /* today */].split('-')[1]);
      const totalPrice = monthSaleList.reduce((total, item) => {
        let rider_fee = 0;
        let cod_fee = 0;
        if (item.dynamic_customer) {
          rider_fee = item.dynamic_customer.rider_fee;
          cod_fee = item.dynamic_customer.cod_fee;
        }
        return total += item.total + rider_fee - cod_fee;
      }, 0);
      return Object(common["e" /* getFormatNum */])(totalPrice);
    },
    txnSaleMTD() {
      const monthSaleList = this.yearlySale.filter(el => el.bookingDate.split('-')[1] == common["m" /* today */].split('-')[1]);
      const dailyTransactions = monthSaleList.reduce((acc, transaction) => {
        const date = transaction.bookingDate;
        const index = acc.findIndex(item => item.date === date);
        let rider_fee = 0;
        let cod_fee = 0;
        if (transaction.dynamic_customer) {
          rider_fee = transaction.dynamic_customer.rider_fee;
          cod_fee = transaction.dynamic_customer.cod_fee;
        }
        if (index === -1) {
          acc.push({
            date,
            transactions: [transaction],
            totalSale: transaction.total + rider_fee - cod_fee
          });
        } else {
          acc[index].transactions.push(transaction);
          acc[index].totalSale += transaction.total + rider_fee - cod_fee;
        }
        return acc;
      }, []);
      return dailyTransactions;
    },
    totalSaleTD() {
      const todaySaleList = this.yearlySale.filter(el => el.bookingDate == common["m" /* today */]);
      const totalPrice = todaySaleList.reduce((total, item) => {
        let rider_fee = 0;
        let cod_fee = 0;
        if (item.dynamic_customer) {
          rider_fee = item.dynamic_customer.rider_fee;
          cod_fee = item.dynamic_customer.cod_fee;
        }
        return total += item.total + rider_fee - cod_fee;
      }, 0);
      return Object(common["e" /* getFormatNum */])(totalPrice);
    },
    // Computed property for payment method chart
    paymentMethodData() {
      if (!this.yearlySale || this.yearlySale.length === 0) {
        return {
          series: [],
          labels: []
        };
      }
      const grouped = this.saleGroupByPayment(this.yearlySale);
      const series = [];
      const labels = [];
      Object.keys(grouped).forEach(code => {
        const payment = grouped[code];
        series.push(payment.totalSales);
        labels.push(payment.paymentName);
      });
      return {
        series,
        labels
      };
    }
  },
  watch: {
    // Watch for payment data changes to update chart labels
    paymentLabels: {
      handler(newLabels) {
        this.options.labels = newLabels;
      },
      immediate: true
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['setSelectedTerminal', 'setSelectedLocation', 'initProduct']),
    navigateTo(path) {
      this.$router.push(path);
    },
    saleGroupByPayment(saleList) {
      if (!Array.isArray(saleList)) {
        throw new Error('Input must be an array');
      }
      return saleList.reduce((acc, sale) => {
        var _sale$payment;
        const paymentCode = ((_sale$payment = sale.payment) === null || _sale$payment === void 0 ? void 0 : _sale$payment.payment_code) || 'UNKNOWN';
        const total = sale.total || 0;
        if (!acc[paymentCode]) {
          var _sale$payment2;
          acc[paymentCode] = {
            totalSales: 0,
            count: 0,
            paymentName: ((_sale$payment2 = sale.payment) === null || _sale$payment2 === void 0 ? void 0 : _sale$payment2.payment_name) || 'Unknown Payment'
          };
        }
        acc[paymentCode].totalSales += total;
        acc[paymentCode].count += 1;
        return acc;
      }, {});
    },
    async chooseTerminal() {
      this.setSelectedTerminal(this.terminalSelected);
      const location = this.findAllLocation.find(el => el.id == this.findAllTerminal.find(el => el.id == this.terminalSelected)['locationId']);
      if (location) {
        this.setSelectedLocation(location);
        this.minstockComponentsKey += 1;
        this.terminalDialog = false;
        await this.loadProduct(location.id);
      }
    },
    async loadProduct(locationId) {
      this.isloading = true;
      this.productList = [];
      await this.$axios.get(`product_f/${locationId}`).then(res => {
        this.initProduct(res.data.data);
      }).catch(er => {
        console.log('Data: ' + er);
      });
      this.isloading = false;
    },
    numberFormatter(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    getRandomColor() {
      const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#a8edea', '#fed6e3'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    async loadTopSale() {
      this.isloading = true;
      await this.$axios.get('api/topsaleMinimart/?top=' + 5).then(res => {
        const chart = external_echarts_["init"](this.$refs.chart);
        const option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'horizontal',
            bottom: '0%',
            textStyle: {
              fontFamily: 'Noto Sans Lao, sans-serif',
              fontSize: 12
            }
          },
          series: [{
            name: 'Sales by Category',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '45%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'Noto Sans Lao, sans-serif'
              }
            },
            labelLine: {
              show: false
            },
            data: []
          }]
        };
        const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'];
        res.data.forEach((el, index) => {
          const entry = {
            name: el.categ_name,
            value: +el.sale_count,
            itemStyle: {
              color: colors[index % colors.length]
            }
          };
          option.series[0].data.push(entry);
        });
        chart.setOption(option);
      }).catch(err => {
        console.log('error', err);
      });
      this.isloading = false;
    },
    async loadSaleStatistic() {
      const date = Object(common["c" /* firstAndLastDateOfLast6Months */])(); // Changed from firstAndLastDateOfCurrentYear()
      this.isloading = true;
      await this.$axios.get('api/sale/sumsaleYearly', {
        params: {
          date
        }
      }).then(res => {
        this.yearlySale = []; // Note: keeping the same variable name for compatibility
        for (const iterator of res.data) {
          this.yearlySale.push(iterator);
        }
        const monthSaleList = this.yearlySale.filter(el => el.bookingDate.split('-')[1] == common["m" /* today */].split('-')[1]);
        const todaySaleList = this.yearlySale.filter(el => el.bookingDate == common["m" /* today */]);
        this.menusOverview[2]['total'] = this.totalSale6M; // Updated name
        this.menusOverview[2]['groupedSales'] = this.saleGroupByPayment(this.yearlySale);
        this.menusOverview[1]['total'] = this.totalSaleMTD;
        this.menusOverview[1]['groupedSales'] = this.saleGroupByPayment(monthSaleList);
        this.menusOverview[0]['total'] = this.totalSaleTD;
        this.menusOverview[0]['groupedSales'] = this.saleGroupByPayment(todaySaleList);
        this.monthGroupSale();
      }).catch(err => {
        console.log('error', err);
      });
      this.isloading = false;
    },
    async generateDailyStatisticSale() {
      this.isloading = true;
      for (const iterator of this.txnSaleMTD) {
        this.barSeriesForDailyStat[0].data.push(iterator['totalSale']);
        this.barOptionsForDailyStat.xaxis.categories.push(iterator['date']);
      }
      this.dailyState = true;
      this.isloading = false;
    },
    monthGroupSale() {
      let groupedTransactions = {};
      this.yearlySale.forEach(transaction => {
        const date = new Date(transaction.bookingDate);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const key = `${year}-${month.toString().padStart(2, '0')}`;
        if (!groupedTransactions[key]) {
          groupedTransactions[key] = {
            total: 0,
            transactions: []
          };
        }
        let rider_fee = 0;
        let cod_fee = 0;
        if (transaction.dynamic_customer) {
          rider_fee = transaction.dynamic_customer.rider_fee;
          cod_fee = transaction.dynamic_customer.cod_fee;
        }
        groupedTransactions[key].total += transaction.total + rider_fee - cod_fee;
        groupedTransactions[key].transactions.push(transaction);
      });
      const keyList = Object.keys(groupedTransactions);
      for (const iterator of keyList) {
        this.barSeriesForMonthlyStat[0].data.push(groupedTransactions[iterator]['total']);
        this.barOptionsForMonthlyStat.xaxis.categories.push(iterator);
      }
      return groupedTransactions;
    },
    init() {
      console.log('Dashboard initialized');
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_adminvue_type_script_lang_js = (adminvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1051)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js,
  adminvue_type_template_id_9c039c0e_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "9c039c0e",
  "8e090fbe"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MinStockCard: __webpack_require__(835).default})


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);


/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(440);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(444);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }
  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _a;
        val ? this.calculateInputHeight() : (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
      });
    },
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },
    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },
  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },
    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },
    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },
    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }
      this.$emit('keydown', e);
    }
  }
}));

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(428);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34








var DialogClassicMessagevue_type_template_id_3accbb34_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5 grey lighten-2"
  }, [_vm._v(" ຂໍ້ຄວາມ ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v(" ຕົກລົງ ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=script&lang=js
/* harmony default export */ var DialogClassicMessagevue_type_script_lang_js = ({
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleDialog() {
      this.$emit('closedialog');
    }
  }
});
// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DialogClassicMessagevue_type_script_lang_js = (DialogClassicMessagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DialogClassicMessagevue_type_script_lang_js,
  DialogClassicMessagevue_type_template_id_3accbb34_render,
  staticRenderFns,
  false,
  null,
  null,
  "cf974660"
  
)

/* harmony default export */ var DialogClassicMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(443);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },
  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },
    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }
  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },
    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },
    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }
  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', {
        ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },
    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }
  }
}));

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(467);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(435);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(423);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=template&id=5ba95cfe



















var PriceListFormvue_type_template_id_5ba95cfe_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_c(VChip["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n        ຈັດການ ລາຍການລາຄາ\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລະຫັດສິນຄ້າ",
      "disabled": ""
    },
    model: {
      value: _vm.form.productId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "productId", $$v);
      },
      expression: "form.productId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* Name",
      "required": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.grades,
      "label": "Grade *"
    },
    model: {
      value: _vm.form.grade,
      callback: function ($$v) {
        _vm.$set(_vm.form, "grade", $$v);
      },
      expression: "form.grade"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລາຄາ"
    },
    model: {
      value: _vm.form.amount,
      callback: function ($$v) {
        _vm.$set(_vm.form, "amount", $$v);
      },
      expression: "form.amount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency*"
    },
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.type,
      "label": "ຮູບແບບລາຄາ",
      "required": ""
    },
    model: {
      value: _vm.form.type,
      callback: function ($$v) {
        _vm.$set(_vm.form, "type", $$v);
      },
      expression: "form.type"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "Is Active"
    },
    model: {
      value: _vm.form.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isActive", _vm._n($$v));
      },
      expression: "form.isActive"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n              ເພີ່ມ\n            ")])], 1)], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.entries
    },
    scopedSlots: _vm._u([{
      key: `item.id`,
      fn: function ({
        item,
        index
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "warning",
            "text": ""
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item, index);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-trash"
        })])];
      }
    }, {
      key: `item.name`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(item.name) + " [ " + _vm._s(item.grade) + " ]\n        ")];
      }
    }, {
      key: `item.amount`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(_vm.formatNumber(item.amount)) + "\n        ")];
      }
    }], null, true)
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        Close\n      ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=template&id=5ba95cfe

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=script&lang=js


/* harmony default export */ var PriceListFormvue_type_script_lang_js = ({
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true
    },
    recordId: {
      type: Number,
      require: false,
      default: 0
    }
  },
  data() {
    return {
      grades: ['A', 'B', 'C', 'D', 'E', 'F'],
      search: '',
      form: {
        grade: '',
        productId: '',
        id: null,
        name: '',
        amount: 0,
        type: 'Price',
        currencyId: 1,
        isActive: true
      },
      type: ['Price', 'Percent'],
      entries: [],
      headers: [{
        text: 'Name',
        align: 'end',
        value: 'name',
        sortable: false
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'amount',
        sortable: false
      }, {
        text: 'ສູດຄິດໄລ່',
        align: 'end',
        value: 'type',
        sortable: false
      }, {
        text: 'ລົບ',
        align: 'end',
        value: 'id',
        sortable: false
      }],
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  async created() {
    this.form.productId = this.recordId;
    this.loadEntry();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['addProductPricesToCreate', 'deleteProductPricesToCreate']),
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        if (this.recordId == 0) {
          let localForm = {
            ...this.form
          };
          this.addProductPricesToCreate(localForm);
          console.log(`Item to create ${this.findAllProductPriceListToCreate.length}`);
          return;
        }
        this.isloading = true;
        let api = 'api/priceList/create';
        console.log('API => ', api);
        try {
          const response = await this.$axios.post(api, this.form);
          console.log(`Load data ${JSON.stringify(response)}`);
          await this.loadEntry();
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
        } catch (error) {
          return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    async deleteItem(item, idx) {
      if (this.recordId == 0) {
        this.deleteProductPricesToCreate(idx);
        return;
      }
      if (!this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = `api/priceList/find/${item.id}`;
        console.log('API => ', api);
        try {
          const response = await this.$axios.delete(api);
          console.log(`Load data `);
          await this.loadEntry();
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction has been deleted');
        } catch (error) {
          return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    async loadEntry() {
      console.log(`Loading data .... ${this.recordId}`);
      if (this.recordId == 0) {
        this.entries = this.findAllProductPriceListToCreate;
        return;
      }
      try {
        const response = await this.$axios.get(`api/priceList/findByProductId/${this.recordId}`);
        console.warn(`RESPONSE DATA ${JSON.stringify(response.data)}`);
        this.entries = response.data;
      } catch (error) {
        console.log('Cannot fetch data ' + error);
        return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProductPriceListToCreate', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency'])
  }
});
// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PriceListFormvue_type_script_lang_js = (PriceListFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/PriceListForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PriceListFormvue_type_script_lang_js,
  PriceListFormvue_type_template_id_5ba95cfe_render,
  staticRenderFns,
  false,
  null,
  null,
  "23382228"
  
)

/* harmony default export */ var PriceListForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(66).default})


/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(428);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=template&id=5419c5a1






var DiaImagevue_type_template_id_5419c5a1_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.iUrl || 'No image'
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "variant": "text",
      "rounded": ""
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.$emit('closeDia');
      }
    }
  }, [_vm._v("\n      Close\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=template&id=5419c5a1

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=script&lang=js
/* harmony default export */ var DiaImagevue_type_script_lang_js = ({
  props: ['iUrl']
});
// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DiaImagevue_type_script_lang_js = (DiaImagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DiaImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiaImagevue_type_script_lang_js,
  DiaImagevue_type_template_id_5419c5a1_render,
  staticRenderFns,
  false,
  null,
  null,
  "f6f6a7dc"
  
)

/* harmony default export */ var DiaImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(475);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("735d40bc", content, true)

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(501);
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_4__);
// import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'





// import { Logger } from 'html2canvas/dist/types/core/logger'
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  middleware: 'auths',
  mixins: [_pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: {
    // ✅ ADD: Tax rate options for dropdown
    taxRateOptions() {
      return this.taxRates.map(tax => ({
        id: tax.id,
        name: tax.name,
        code: tax.code,
        rate: tax.rate,
        displayRate: (parseFloat(tax.rate) * 100).toFixed(2) + '%',
        displayText: `${tax.name} (${(parseFloat(tax.rate) * 100).toFixed(2)}%)`,
        description: tax.description,
        isDefault: tax.isDefault,
        isActive: tax.isActive
      }));
    },
    // ✅ ADD: Get selected tax rate details
    selectedTaxRate() {
      return this.taxRates.find(tax => tax.id === this.formData.taxId);
    },
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    host() {
      return Object(_common_api__WEBPACK_IMPORTED_MODULE_2__[/* hostName */ "a"])();
    },
    barcode2by2cm() {
      const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <style>
        @font-face {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
        * {
          font-family: 'DM Sans';
        }
      </style>
    </head>
    <body>
      <div style="text-align: center;">
        <table style="width: 200px; text-align: center;">
          <tr>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
      return html;
    },
    barcode3by2cm() {
      const html = `
      <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
      <table style="width: 200px; text-align: center;" >
  <tr>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
      <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
       
    </td>
  
  </tr>
</table>
</div>
</body>
            </html>
`;
      return html;
    },
    barcodeNormal() {
      const html = `
          <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
                <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `;
      return html;
    }
  },
  async mounted() {
    console.log('FORMDATA ID: ' + this.formData.pro_id);
    this.pro_id = this.headerId;
    this.formData.pro_id = this.headerId;
    console.log('Mounted: ');
    this.fetchProId(this.headerId);
    this.fetchCategory();
    this.fetchCompany();
    // ✅ ADD: Load tax rates
    await this.fetchTaxRates();
  },
  watch: {
    // ✅ ADD: Watch for tax rate changes
    'formData.taxId'(newTaxId) {
      this.onTaxRateChange();
    },
    // ✅ ADD: Watch for price changes to update tax calculations
    'formData.pro_price'() {
      // Tax calculations will automatically update due to computed properties
    }
  },
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id);
    console.log('PRO DEFUALT ID: ' + this.pro_id);
    return /^\d+$/.test(data.params.id);
  },
  data() {
    return {
      productType: ['product', 'service', 'stock'],
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      barcodeValue: '',
      imagesPreviewURL: [],
      files: null,
      IMG_URL: '',
      NAME: '',
      barcodeImage: '',
      rules: {
        taxRule: [v => !!v || 'ກະລຸນາເລືອກອັດຕາພາສີ (Please select tax rate)'],
        nameRule: [v => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ', v => v && v.length <= 150 || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ'],
        priceRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        minRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        // (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        costPrice: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        retailRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        imageRule: [files => {
          let fileSize = 0;
          let totalSize = 0;
          if (files) {
            files.forEach(el => {
              fileSize += el.size;
              console.log('Size: ' + el.size);
            });
            totalSize = fileSize / files.length;
            console.log('File size: aaa' + files.length + ' Each: ' + totalSize || false);
          } else {
            console.log('File: ' + files);
          }
          console.log('Total: ' + totalSize);
          return totalSize < 2000000 || 'ຂະຫນາດເກີນ';
        }]
      },
      preview: false,
      previewSrc: null,
      title: 'ຈັດການສິນຄ້າ',
      valid: false,
      category: [],
      // ✅ ADD: Tax-related data
      taxRates: [],
      loadingTaxRates: false,
      // ✅ UPDATE: Add taxId to formData
      formData: {
        productId: null,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        companyId: 2,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: true,
        validateStockOnSale: true,
        vendorName: '',
        taxId: null // ✅ NEW: Tax ID field
      },
      companyList: [],
      isLoading: false,
      validLocal: true,
      diaMessageTitle: 'ຄຳເຕືອນ',
      diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
      pro_id: null,
      dia_confirm: false,
      tempImgId: null
      // formData: {}
    };
  },
  methods: {
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.formData.productId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    formatNumber(val) {
      return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* getFormatNum */ "e"])(val);
    },
    generateBarcode() {
      // Generate a random 12-digit number as the barcode value
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000;
      // Use jsbarcode library to generate the barcode SVG image
      // Get the canvas element
      let canvas = document.createElement('canvas');
      // canvas.width = 20 // Approximation for 3cm at 96dpi
      // canvas.height = 20 // Approximation for 2cm at 96dpi
      jsbarcode__WEBPACK_IMPORTED_MODULE_4___default()(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 10
        // margin: 5,
        // width: 30, // Match canvas width
        // height: 20, // Match canvas height
      });
      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(barcodeValue);
    },
    generateBarcodeImage(barcodeValue) {
      // Get the canvas element using the ref attribute
      if (!barcodeValue) return;
      let canvas = this.$refs.barcodeCanvas;
      console.log(`.....Canvas logger.....`);
      console.log(canvas);
      console.log(canvas.width, canvas.height);
      // Set the canvas width and height to match the paper size
      // canvas.width = 20
      // canvas.height = 10
      // Generate the barcode image using JsBarcode
      jsbarcode__WEBPACK_IMPORTED_MODULE_4___default()(canvas, barcodeValue, {
        format: 'code128',
        displayValue: true,
        fontSize: 12,
        // margin: 10
        width: 1,
        // Match canvas width
        height: 13 // Match canvas height 35
      });

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL();
    },
    validateLocal() {
      console.log('VALIDATING...');
      this.$refs.formLocal.validate();
    },
    async fetchCategory() {
      this.isLoading = true;
      await this.$axios.get('category_f').then(res => {
        console.log('=>category' + res.data);
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    async fetchCompany() {
      this.isLoading = true;
      await this.$axios.get('api/company/find').then(res => {
        console.log('=>Company' + res.data);
        this.companyList = res.data.map(el => {
          return {
            id: el.id,
            name: el.name
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    previewImg(url) {
      console.warn(`image preview ${url}`);
      this.previewSrc = url;
      this.preview = true;
    },
    onFilesChange(payload) {
      const file = payload; // in case vuetify file input
      this.files = payload;
      if (file) {
        for (let i = 0; i < file.length; i++) {
          this.imagesPreviewURL.push({
            IMG_URL: URL.createObjectURL(file[i]),
            NAME: file[i].name,
            isvalid: this.sizeValidate(file[i].size)
          });
        }
        // URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null;
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1);
      this.files.splice(idx, 1);
      this.deleteFileFrServ(idx);
    },
    sizeValidate(z) {
      console.log('SIZE' + z);
      const maxSize = 20000000;
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`;
      }
    },
    async deleteFileFrServ(idx) {
      //   v && this.deleteFileFrServ'

      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* confirmSwal */ "a"])(this.$swal, 'warning', async () => {
        console.log('Delete record function');
        this.isLoading = true;
        await this.$axios.post('/unlink_file', {
          img_name: this.formData.pro_image[idx].name
        }).then(res => {
          res.data === 'Transaction completed' && this.formData.pro_image.splice(idx, 1);
          // this.message = res.data
          Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "k"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(er => {
          this.message = er.error;
        });
        this.isLoading = false;
      });
    },
    printBarcode() {
      const windowContent = this.threeColPaper ? this.barcode2by2cm : this.barcodeNormal;
      const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
      printWin.document.open();
      printWin.document.write(windowContent);
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
    },
    // ✅ ADD: Fetch tax rates from API
    async fetchTaxRates() {
      this.loadingTaxRates = true;
      try {
        const response = await this.$axios.get('/api/tax/active');
        this.taxRates = response.data.data || [];

        // Set default tax rate if no tax is selected and we have a default
        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
        console.log('Tax rates loaded:', this.taxRates);
      } catch (error) {
        var _this$$toast, _this$$toast$error;
        console.error('Error loading tax rates:', error);
        // Show user-friendly error message
        ((_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : (_this$$toast$error = _this$$toast.error) === null || _this$$toast$error === void 0 ? void 0 : _this$$toast$error.call(_this$$toast, 'Failed to load tax rates')) || console.error('Failed to load tax rates');
      } finally {
        this.loadingTaxRates = false;
      }
    },
    // ✅ ADD: Calculate tax amount
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) {
        return 0;
      }
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxRate = parseFloat(this.selectedTaxRate.rate) || 0;
      return basePrice * taxRate;
    },
    // ✅ ADD: Calculate total with tax
    calculateTotalWithTax() {
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxAmount = this.calculateTaxAmount();
      return basePrice + taxAmount;
    },
    // ✅ UPDATE: Modified fetchProId to include tax data
    async fetchProId(id) {
      this.isLoading = true;
      console.log('FECT ID:' + id);
      await this.$axios.post('/product_f_id', {
        proid: id
      }).then(res => {
        console.log('Product ID ' + res.data);
        const el = res.data[0];
        console.log('===> Min stock', el.minStock);
        const image = res.data[0].img_name == null ? [] : res.data.map(el => {
          return {
            name: el.img_name,
            path: el.img_path
          };
        });
        this.formData = {
          productId: el.id,
          pro_category: el.pro_category,
          pro_id: el.pro_id,
          pro_name: el.pro_name,
          _category: el._category,
          pro_price: el.pro_price,
          pro_desc: el.pro_desc,
          pro_status: el.pro_status === 1 || false,
          pro_retail_price: el.retail_cost_percent,
          pro_cost_price: el.cost_price,
          companyId: el.companyId,
          minStock: el.minStock,
          barCode: el.barCode,
          receiveUnitId: el.receiveUnitId,
          stockUnitId: el.stockUnitId,
          costCurrencyId: el.costCurrencyId,
          saleCurrencyId: el.saleCurrencyId,
          pro_image: image,
          isActive: el.isActive,
          validateStockOnSale: el.validateStockOnSale,
          vendorName: el.vendorName,
          taxId: el.taxId || null // ✅ ADD: Load existing tax ID
        };

        // Set default tax if none is assigned
        if (!this.formData.taxId && this.taxRates.length > 0) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
        if (!this.formData.barCode) {
          this.formData.barCode = '';
        }
        this.generateBarcodeImage(this.formData.barCode);
      }).catch(er => {
        console.log('Error: ' + er);
        this.message = er;
      });
      this.isLoading = false;
    },
    // ✅ UPDATE: Modified uploadFilesLocal to include tax data
    async uploadFilesLocal() {
      console.log('===> Upload data');
      if (!this.$refs.formLocal.validate()) {
        return;
      }

      // ✅ ADD: Validate tax selection
      // if (!this.formData.taxId) {
      //   this.$toast?.error?.('Please select a tax rate') ||
      //     console.error('Please select a tax rate')
      //   return
      // }

      this.isLoading = true;
      const formData = new FormData();

      // ✅ ADD: Include tax information in the form data
      const formDataWithTax = {
        ...this.formData,
        // Add tax calculation details for backend reference
        selectedTaxRate: this.selectedTaxRate ? {
          id: this.selectedTaxRate.id,
          name: this.selectedTaxRate.name,
          code: this.selectedTaxRate.code,
          rate: this.selectedTaxRate.rate
        } : null,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax()
      };
      formData.append('FORM', JSON.stringify(formDataWithTax));
      if (this.files) {
        this.files.forEach(element => {
          formData.append('files', element);
        });
      }
      await this.$axios.post('uploadmulti_update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.$emit('close-dialog');
        this.$emit('refresh');
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "k"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
      }).catch(er => {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalError2 */ "j"])(this.$swal, 'Error', er.response.data);
      });
      this.isLoading = false;
    },
    // ✅ ADD: Helper method to refresh tax rates
    async refreshTaxRates() {
      await this.fetchTaxRates();
    },
    // ✅ ADD: Method to handle tax rate changes
    onTaxRateChange() {
      // You can add additional logic here when tax rate changes
      // For example, recalculate prices, validate, etc.
      console.log('Tax rate changed to:', this.selectedTaxRate);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(399)["URL"]))

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_1__);

// Try different import approaches - uncomment the one that works in your project:

// Option 1: Relative path (if utils is in a specific folder)
// import { getFormatNum, swalSuccess, swalError2 } from '../utils'
// import { getFormatNum, swalSuccess, swalError2 } from '../../utils'

// Option 2: Nuxt alias
// import { getFormatNum, swalSuccess, swalError2 } from '~/utils'

// Option 3: Direct path from root
// import { getFormatNum, swalSuccess, swalError2 } from '@/utils/index.js'

// Option 4: If utils is in plugins or a different location
// import { getFormatNum, swalSuccess, swalError2 } from '~/plugins/utils'

// Option 5: Define inline if utils not available
const getFormatNum = val => {
  if (!val) return '0';
  return Number(val).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
};
const swalSuccess = (swal, title, message) => {
  if (swal) {
    swal.fire({
      icon: 'success',
      title: title,
      text: message,
      timer: 2000
    });
  } else {
    alert(`${title}: ${message}`);
  }
};
const swalError2 = (swal, title, error) => {
  if (swal) {
    swal.fire({
      icon: 'error',
      title: title,
      text: error.toString()
    });
  } else {
    alert(`${title}: ${error}`);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    title: {
      type: String,
      default: 'Create Product'
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      productType: ['product', 'service', 'stock'],
      valid: false,
      isloading: false,
      message: null,
      preview: false,
      previewSrc: '',
      priceListDialog: false,
      priceListFormKey: 0,
      pricingRecordId: null,
      barcodeImage: '',
      threeColPaper: false,
      // Tax-related data
      loadingTaxRates: false,
      taxRates: [],
      formData: {
        companyId: null,
        pro_category: null,
        pro_id: null,
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_cost_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        isActive: 1,
        validateStockOnSale: 1,
        minStock: 0,
        barCode: '',
        receiveUnitId: null,
        stockUnitId: null,
        saleCurrencyId: null,
        vendorName: '',
        taxId: null // Add tax field
      },
      rules: {
        nameRule: [v => !!v || 'ຊື່ສິນຄ້າຈຳເປັນ'],
        priceRule: [v => !!v || 'ລາຄາຈຳເປັນ']
      },
      category: [],
      companyList: [],
      // unitList: [],
      findAllCurrency: [],
      files: []
    };
  },
  computed: {
    // ...mapGetters(['findAllProductPriceListToCreate']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['findAllProductPriceListToCreate', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    dialogMessage() {
      return this.message !== null;
    },
    // Tax rate options for autocomplete
    taxRateOptions() {
      return this.taxRates.map(rate => ({
        id: rate.id,
        name: rate.name,
        code: rate.code,
        rate: rate.rate,
        isDefault: rate.isDefault,
        displayText: `${rate.name} (${rate.code})`,
        displayRate: `${(rate.rate * 100).toFixed(1)}%`
      }));
    },
    // Get selected tax rate details
    selectedTaxRate() {
      if (!this.formData.taxId || !this.taxRates.length) return null;
      return this.taxRates.find(rate => rate.id === this.formData.taxId);
    },
    barcode3by2cm() {
      const html = `
            <!DOCTYPE html>
            <html>
            <head>
            <title></title>
            <style>
            @font-face {
              font-family: 'DM Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
          }
            *{
              font-family: 'DM Sans';
            }
          </style>
              </head>
              <body>
                  <div style="text-align: center;">
                        <table style="width: 200px; text-align: center;" >
                            <tr>
                              <td style="width: 500px; height: 15px;font-size:8px;">
                                ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                                </br>
                                <img src="${this.barcodeImage}">
                              </td>               
                            </tr>
                          </table>
                    </div>
            </body>
            </html>
        `;
      return html;
    },
    barcodeNormal() {
      const html = `
            <!DOCTYPE html>
            <html>
            <head>
            <title></title>
            <style>
            @font-face {
              font-family: 'DM Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
          }
            *{
              font-family: 'DM Sans';
            }
          </style>
              </head>
              <body>
              <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `;
      return html;
    }
  },
  async mounted() {
    await Promise.all([this.fetchCategory(), this.fetchCompany(),
    // this.fetchUnit(),
    this.fetchCurrency(), this.fetchTaxRates() // Add tax rates fetching
    ]);
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['clearProductPricesToCreate', 'addProductPricesToCreate', 'deleteProductPricesToCreate']),
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.headerId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    validate() {
      this.$refs.form.validate();
    },
    formatNumber(val) {
      return getFormatNum(val);
    },
    // Tax calculation methods
    async fetchTaxRates() {
      this.loadingTaxRates = true;
      try {
        const response = await this.$axios.get('/api/tax/active');
        this.taxRates = response.data.data || [];

        // Set default tax rate if no tax is selected and we have a default
        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
        console.log('Tax rates loaded:', this.taxRates);
      } catch (error) {
        console.error('Error loading tax rates:', error);
        // Use console instead of toast if toast is not available
        console.error('Failed to load tax rates');
      } finally {
        this.loadingTaxRates = false;
      }
    },
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) {
        return 0;
      }
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxRate = parseFloat(this.selectedTaxRate.rate) || 0;
      return basePrice * taxRate;
    },
    calculateTotalWithTax() {
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxAmount = this.calculateTaxAmount();
      return basePrice + taxAmount;
    },
    onTaxRateChange() {
      console.log('Tax rate changed to:', this.selectedTaxRate);
    },
    generateBarcode() {
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 100000000000;
      const canvas = document.createElement('canvas');
      jsbarcode__WEBPACK_IMPORTED_MODULE_1___default()(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 20,
        margin: 10
      });
      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(barcodeValue);
    },
    generateBarcodeImage(barcode) {
      const canvas = this.$refs.barcodeCanvas;
      console.log(`.....Canvas logger.....`);
      console.log(canvas);
      if (canvas) {
        console.log(canvas.width, canvas.height);
        jsbarcode__WEBPACK_IMPORTED_MODULE_1___default()(canvas, barcode, {
          format: 'code128',
          displayValue: true,
          fontSize: 12,
          width: 1,
          height: 13
        });
        this.barcodeImage = canvas.toDataURL();
      }
    },
    printBarcode() {
      const windowContent = this.threeColPaper ? this.barcode3by2cm : this.barcodeNormal;
      const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
      printWin.document.open();
      printWin.document.write(windowContent);
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async fetchCategory() {
      this.isloading = true;
      try {
        const res = await this.$axios.get('category_f');
        console.log('=>category' + res.data);
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
        if (this.category.length > 0) {
          this.formData.pro_category = this.category[0]['categ_id'];
        }
      } catch (er) {
        var _er$response;
        console.log('error: ' + ((_er$response = er.response) === null || _er$response === void 0 ? void 0 : _er$response.data) || false);
      }
      this.isloading = false;
    },
    async fetchCompany() {
      this.isloading = true;
      try {
        const res = await this.$axios.get('api/company/find');
        console.log('=>Company' + res.data);
        this.companyList = res.data.map(el => {
          return {
            id: el.id,
            name: el.name
          };
        });
        if (this.companyList.length > 0) {
          this.formData.companyId = this.companyList[0]['id'];
        }
      } catch (er) {
        var _er$response2;
        console.log('error: ' + ((_er$response2 = er.response) === null || _er$response2 === void 0 ? void 0 : _er$response2.data) || false);
      }
      this.isloading = false;
    },
    // async fetchUnit() {
    //   try {
    //     const response = await this.$axios.get('/api/unit/find')
    //     this.unitList = response.data.map((el) => ({
    //       id: el.id,
    //       name: el.name,
    //     }))
    //   } catch (error) {
    //     console.error('Error fetching units:', error)
    //     // Fallback if API doesn't exist
    //     this.unitList = []
    //   }
    // },

    async fetchCurrency() {
      try {
        const response = await this.$axios.get('/api/currency/find');
        this.findAllCurrency = response.data.map(el => ({
          id: el.id,
          code: el.code
        }));
      } catch (error) {
        console.error('Error fetching currency:', error);
        // Fallback if API doesn't exist
        this.findAllCurrency = [];
      }
    },
    onFilesChange(files) {
      this.files = files || [];
    },
    // File preview helper
    getFilePreview(file) {
      if (file && file instanceof File) {
        return URL.createObjectURL(file);
      }
      return '';
    },
    // Remove file from preview
    removeFile(index) {
      this.files.splice(index, 1);
    },
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.isloading = true;
      const formData = new FormData();

      // Include tax information in the form data
      const formDataWithTax = {
        ...this.formData,
        selectedTaxRate: this.selectedTaxRate ? {
          id: this.selectedTaxRate.id,
          name: this.selectedTaxRate.name,
          code: this.selectedTaxRate.code,
          rate: this.selectedTaxRate.rate
        } : null,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax()
      };
      formData.append('FORM', JSON.stringify(formDataWithTax));
      if (this.files && this.files.length > 0) {
        this.files.forEach(element => {
          formData.append('files', element);
        });
      }
      try {
        const response = await this.$axios.post('uploadmulti', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const productIdCreated = response.data.split('|')[1];
        console.log(`Product ID created: ${productIdCreated}`);
        const commResponse = await this.commitPriceListRecord(productIdCreated);
        console.info(`Commit response ${commResponse}`);
        this.isloading = false;
        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        console.info(`Create product complete: response => ${JSON.stringify(response)}`);
        this.$emit('refresh');
        this.$emit('close-dialog');
      } catch (error) {
        this.isloading = false;
        swalError2(this.$swal, 'Error', error);
        console.error('Error response:', error.response);
      }
    },
    async commitPriceListRecord(productId) {
      this.isloading = true;
      let api = 'api/priceList/create';
      console.log(`API => ProductId='${productId}'`, api);
      try {
        const requests = this.findAllProductPriceListToCreate.map(item => {
          const newItem = {
            ...item,
            productId
          };
          return this.$axios.post(api, newItem);
        });
        const responses = await Promise.all(requests);
        responses.forEach(response => {
          console.log(`Load data: ${JSON.stringify(response)}`);
        });
        this.clearProductPricesToCreate();
        return responses;
      } catch (error) {
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ໃນການເພີ່ມ price list');
        console.error('Error during price list commit:', error);
        return null;
      }
    },
    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(399)["URL"]))

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(457);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },
    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.isDisabled),
        role: 'switch'
      };
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },
    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }
  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },
    genSwitch() {
      const {
        title,
        ...switchAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', {
        ...this.attrs,
        ...switchAttrs
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },
    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__[/* VFabTransition */ "c"], {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },
    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },
    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },
    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].right && !this.isActive) this.onChange();
    }
  }
}));

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(500);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("011483c6", content, true, context)
};

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(504);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2fe1fa0f", content, true, context)
};

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(506);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("34ac6086", content, true, context)
};

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },
    onMouseLeave() {
      this.runDelay('close');
    }
  },
  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }
    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }
    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }
    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }
    if (!this.disabled) {
      element.data = element.data || {};
      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }
    return element;
  }
}));

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(496);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e8a466fa", content, true)

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var VBtnToggle = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(502);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(423);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(478);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(460);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=template&id=0b0f0458&scoped=true




















var ProductFormCreatevue_type_template_id_0b0f0458_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-overlay"
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-0b0f0458>", "</div>", [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px",
      "persistent": ""
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
    }
  }, [_c('dialog-classic-message', {
    attrs: {
      "message": _vm.message
    },
    on: {
      "closedialog": function ($event) {
        _vm.message = null;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-content\" data-v-0b0f0458>", "</div>", [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.companyList,
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.companyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "companyId", $$v);
      },
      expression: "formData.companyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "categ_name",
      "item-value": "categ_id",
      "items": _vm.category,
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "value": _vm.formData.pro_id || '1XXX',
      "label": "ໄອດີສິນຄ້າ",
      "disabled": "",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລາຄາ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຕົ້ນທຶນ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.saleCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "saleCurrencyId", $$v);
      },
      expression: "formData.saleCurrencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.productType,
      "label": "Product type",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                      " + _vm._s(item) + "\n                    ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item))])];
      }
    }]),
    model: {
      value: _vm.formData._category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "_category", $$v);
      },
      expression: "formData._category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.taxRateOptions,
      "label": "Tax Rate",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                      " + _vm._s(item.displayRate) + "\n                    ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item.name))])];
      }
    }]),
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ລາຄາສົ່ງ %",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ຮູບພາບ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2 mb-1",
    attrs: {
      "dense": "",
      "outlined": "",
      "color": "info"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between text-caption flex-wrap"
  }, [_c('span', [_vm._v("Base: " + _vm._s(_vm.formatNumber(_vm.formData.pro_price)))]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "):\n                      " + _vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))]), _vm._v(" "), _c('span', [_c('strong', [_vm._v("Total:\n                        " + _vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": function ($event) {
        return _vm.triggerPriceListForm();
      }
    }
  }, [_vm._v("\n                  ຈັດການລາຄາ\n                ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.vendorName,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "vendorName", $$v);
      },
      expression: "formData.vendorName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", _vm._n($$v));
      },
      expression: "formData.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "ກວດສຕັອກກ່ອນຂາຍ",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.validateStockOnSale,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "validateStockOnSale", _vm._n($$v));
      },
      expression: "formData.validateStockOnSale"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ",
      "rows": "2",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-center mb-2"
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%",
      "height": "auto"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-caption mt-1"
  }, [_vm._v("\n                      ລາຄາ: " + _vm._s(_vm.formatNumber(_vm.formData.pro_price)) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_c(VBtnToggle["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length > 0,
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("\n                        Generate\n                      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length == 0,
      "color": "success"
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("\n                        Print\n                      ")])], 1)], 1)])], 1), _vm._v(" "), _vm.files && _vm.files.length > 0 ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    staticStyle: {
      "max-height": "200px",
      "overflow-y": "auto"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-caption mb-2"
  }, [_vm._v("Image Preview")]), _vm._v(" "), _vm._l(_vm.files, function (file, index) {
    return _c('div', {
      key: index,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": _vm.getFilePreview(file)
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1"
    }, [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.removeFile(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  })], 2)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text-caption mt-2"
  }, [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ.")])], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-footer\" data-v-0b0f0458>", "</div>", [_vm._ssrNode("<div class=\"footer-actions\" data-v-0b0f0458>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "small": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n          ຍົກເລີກ\n        ")], 1), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.valid,
      "small": ""
    },
    on: {
      "click": _vm.uploadFiles
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n          ບັນທຶກ\n        ")], 1)], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=template&id=0b0f0458&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=script&lang=js
var ProductFormCreatevue_type_script_lang_js = __webpack_require__(477);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductFormCreatevue_type_script_lang_js = (ProductFormCreatevue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(505)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormCreatevue_type_script_lang_js,
  ProductFormCreatevue_type_template_id_0b0f0458_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "0b0f0458",
  "45253468"
  
)

/* harmony default export */ var ProductFormCreate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(461).default,LoadingIndicator: __webpack_require__(66).default,DiaImage: __webpack_require__(473).default,PriceListForm: __webpack_require__(472).default})


/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var VBtnToggle = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(467);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(502);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(423);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(478);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(460);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=template&id=2a0c1bfa&scoped=true





















var ProductFormvue_type_template_id_2a0c1bfa_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-overlay"
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-2a0c1bfa>", "</div>", [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isLoading,
      callback: function ($$v) {
        _vm.isLoading = $$v;
      },
      expression: "isLoading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-content\" data-v-2a0c1bfa>", "</div>", [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VForm["a" /* default */], {
    ref: "formLocal",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.validLocal,
      callback: function ($$v) {
        _vm.validLocal = $$v;
      },
      expression: "validLocal"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.companyList,
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.companyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "companyId", $$v);
      },
      expression: "formData.companyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "categ_name",
      "item-value": "categ_id",
      "items": _vm.category,
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": !!_vm.formData.pro_id,
      "label": "ໄອດີສິນຄ້າ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_id,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_id", $$v);
      },
      expression: "formData.pro_id"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.priceRule,
      "label": "ຕົ້ນທຶນ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.saleCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "saleCurrencyId", $$v);
      },
      expression: "formData.saleCurrencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.productType,
      "label": "Product type",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                      " + _vm._s(item) + "\n                    ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item))])];
      }
    }]),
    model: {
      value: _vm.formData._category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "_category", $$v);
      },
      expression: "formData._category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.taxRateOptions,
      "label": "Tax Rate",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                      " + _vm._s(item.displayRate) + "\n                    ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item.name))])];
      }
    }]),
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ລາຄາສົ່ງ %",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ຮູບພາບ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2 mb-1",
    attrs: {
      "dense": "",
      "outlined": "",
      "color": "info"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between text-caption"
  }, [_c('span', [_vm._v("Base: " + _vm._s(_vm.formatNumber(_vm.formData.pro_price)))]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "):\n                      " + _vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))]), _vm._v(" "), _c('span', [_c('strong', [_vm._v("Total:\n                        " + _vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": function ($event) {
        return _vm.triggerPriceListForm();
      }
    }
  }, [_vm._v("\n                  ຈັດການລາຄາ\n                ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.vendorName,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "vendorName", $$v);
      },
      expression: "formData.vendorName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", _vm._n($$v));
      },
      expression: "formData.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "ກວດສຕັອກກ່ອນຂາຍ",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.validateStockOnSale,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "validateStockOnSale", _vm._n($$v));
      },
      expression: "formData.validateStockOnSale"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ",
      "rows": "2",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "outlined": ""
    }
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%",
      "height": "auto"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-center mt-1"
  }, [_c(VBtnToggle["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length > 0,
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("\n                        Generate\n                      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length == 0,
      "color": "success"
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("\n                        Print\n                      ")])], 1), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    staticClass: "mt-1",
    attrs: {
      "label": "3Col",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.threeColPaper,
      callback: function ($$v) {
        _vm.threeColPaper = _vm._n($$v);
      },
      expression: "threeColPaper"
    }
  })], 1)])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    staticStyle: {
      "max-height": "200px",
      "overflow-y": "auto"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-caption mb-2"
  }, [_vm._v("Image Preview")]), _vm._v(" "), _vm._l(_vm.formData.pro_image, function (img, idx) {
    return _c('div', {
      key: `existing-${idx}`,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(`${_vm.host}/uploads/${img.name}`);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": `${_vm.host}/uploads/${img.name}`
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1"
    }, [_vm._v(_vm._s(img.name))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFileFrServ(idx);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  }), _vm._v(" "), _vm._l(_vm.imagesPreviewURL, function (item, index) {
    return _c('div', {
      key: `new-${index}`,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(item.IMG_URL);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.IMG_URL
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1"
    }, [_vm._v(_vm._s(item.NAME))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFile(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text-caption mt-2"
  }, [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ.")])], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-footer\" data-v-2a0c1bfa>", "</div>", [_vm._ssrNode("<div class=\"footer-actions\" data-v-2a0c1bfa>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v(" Close ")]), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "small": ""
    },
    on: {
      "click": _vm.uploadFilesLocal
    }
  }, [_vm._v(" Save ")])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=template&id=2a0c1bfa&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=script&lang=js
var ProductFormvue_type_script_lang_js = __webpack_require__(476);

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductFormvue_type_script_lang_js = (ProductFormvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(503)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormvue_type_script_lang_js,
  ProductFormvue_type_template_id_2a0c1bfa_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2a0c1bfa",
  "51248ea0"
  
)

/* harmony default export */ var ProductForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(66).default,DiaImage: __webpack_require__(473).default,PriceListForm: __webpack_require__(472).default})


/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".iframe-container{overflow:hidden;padding-top:56.25%;position:relative}.iframe-container iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(424);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(493);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
var VRating = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(428);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/index.vue?vue&type=template&id=1183dcac
















var productvue_type_template_id_1183dcac_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          class: {
            'on-hover': hover
          },
          attrs: {
            "elevation": hover ? 16 : 2
          }
        }, [_c('router-link', {
          attrs: {
            "to": `/movie/${_vm.movie.id}`
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "src": _vm.posterPath,
            "alt": ""
          }
        })], 1)], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "8"
    }
  }, [_c('h1', {
    staticClass: "grey--text text-darken-3 mt-5"
  }, [_vm._v(_vm._s(this.movie.title))]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "2"
    }
  }, [_c(VRating["a" /* default */], {
    attrs: {
      "value": _vm.movie.vote_average / 2,
      "color": "amber",
      "dense": "",
      "half-increments": "",
      "readonly": "",
      "size": "14"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "3"
    }
  }, [_c('span', {
    staticClass: "gray--text ml-n7"
  }, [_vm._v("\n                        " + _vm._s(_vm.movie.vote_average * 10) + "% | " + _vm._s(_vm.movie.release_date) + "\n                    ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "7"
    }
  }, [_c('div', {
    staticClass: "subtitle-2 grey--text ml-n16"
  }, _vm._l(_vm.movie.genres, function (item, index) {
    return _c('span', {
      key: index,
      staticClass: "ml-1"
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                            "), _vm.movie.genres.length - 1 != index ? _c('span', [_vm._v(",")]) : _vm._e()]);
  }), 0)])], 1), _vm._v(" "), _c('p', {
    staticClass: "mt-5 grey--text text--darken-3 subheader"
  }, [_vm._v(_vm._s(this.movie.overview))]), _vm._v(" "), _c('div', {
    staticClass: "mt-5"
  }, [_c('h2', {
    staticClass: "mt-5 grey--text text--darken-3"
  }, [_vm._v("Featured Cast")]), _vm._v(" "), _vm._l(_vm.movie.credits.crew, function (crew, index) {
    return _c('div', {
      key: index,
      staticClass: "mt-5"
    }, [index < 2 ? _c('div', {}, [_c('h3', [_vm._v(_vm._s(crew.name))]), _vm._v(" "), _c('span', {
      staticClass: "grey--text"
    }, [_vm._v(_vm._s(crew.job))])]) : _vm._e()]);
  })], 2), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "persistent": "",
      "max-width": "800px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "tile": "",
            "color": "error"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.openYouTubeModel.apply(null, arguments);
            }
          }
        }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
          attrs: {
            "left": ""
          }
        }, [_vm._v("mdi-play")]), _vm._v("Play\n                    ")], 1)];
      }
    }]),
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_vm._v(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(this.movie.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": ""
    }
  }, [_c('div', {
    staticClass: "iframe-container"
  }, [!_vm.isVideo ? _c('img', {
    attrs: {
      "src": _vm.mediaURL
    }
  }) : _vm._e(), _vm._v(" "), _vm.isVideo ? _c('iframe', {
    attrs: {
      "allowfullscreen": "",
      "src": _vm.mediaURL
    }
  }) : _vm._e()])])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialog = _vm.flase;
      }
    }
  }, [_vm._v("Close")])], 1)], 1)], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "tile": "",
      "color": "error"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-heart")]), _vm._v("Favorite\n            ")], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._ssrNode(" "), _c('Cast', {
    attrs: {
      "casts": _vm.movie.credits.cast
    }
  }), _vm._ssrNode(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._ssrNode(" "), _c('Images', {
    attrs: {
      "images": _vm.movie.images.backdrops
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/product/index.vue?vue&type=template&id=1183dcac

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/product/index.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(499)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  productvue_type_template_id_1183dcac_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "30570ffe"
  
)

/* harmony default export */ var product = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474);
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
// Styles
 // Extensions

 // Components

 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-file-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    chips: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    counterSizeString: {
      type: String,
      default: '$vuetify.fileInput.counterSize'
    },
    counterString: {
      type: String,
      default: '$vuetify.fileInput.counter'
    },
    hideInput: Boolean,
    multiple: Boolean,
    placeholder: String,
    prependIcon: {
      type: String,
      default: '$file'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: [Boolean, Number],
      default: false,
      validator: v => {
        return typeof v === 'boolean' || [1000, 1024].includes(v);
      }
    },
    smallChips: Boolean,
    truncateLength: {
      type: [Number, String],
      default: 22
    },
    type: {
      type: String,
      default: 'file'
    },
    value: {
      default: undefined,
      validator: val => {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(val).every(v => v != null && typeof v === 'object');
      }
    }
  },
  computed: {
    classes() {
      return {
        ..._VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-file-input': true
      };
    },
    computedCounterValue() {
      const fileCount = this.multiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
      if (!this.showSize) return this.$vuetify.lang.t(this.counterString, fileCount);
      const bytes = this.internalArrayValue.reduce((bytes, {
        size = 0
      }) => {
        return bytes + size;
      }, 0);
      return this.$vuetify.lang.t(this.counterSizeString, fileCount, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(bytes, this.base === 1024));
    },
    internalArrayValue() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(this.internalValue);
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(val) {
        this.lazyValue = val;
        this.$emit('change', this.lazyValue);
      }
    },
    isDirty() {
      return this.internalArrayValue.length > 0;
    },
    isLabelActive() {
      return this.isDirty;
    },
    text() {
      if (!this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel)) return [this.placeholder];
      return this.internalArrayValue.map(file => {
        const {
          name = '',
          size = 0
        } = file;
        const truncatedText = this.truncateText(name);
        return !this.showSize ? truncatedText : `${truncatedText} (${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(size, this.base === 1024)})`;
      });
    },
    base() {
      return typeof this.showSize !== 'boolean' ? this.showSize : undefined;
    },
    hasChips() {
      return this.chips || this.smallChips;
    }
  },
  watch: {
    readonly: {
      handler(v) {
        if (v === true) Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* consoleError */ "b"])('readonly is not supported on <v-file-input>', this);
      },
      immediate: true
    },
    value(v) {
      const value = this.multiple ? v : v ? [v] : [];
      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* deepEqual */ "k"])(value, this.$refs.input.files)) {
        // When the input value is changed programatically, clear the
        // internal input's value so that the `onInput` handler
        // can be triggered again if the user re-selects the exact
        // same file(s). Ideally, `input.files` should be
        // manipulated directly but that property is readonly.
        this.$refs.input.value = '';
      }
    }
  },
  methods: {
    clearableCallback() {
      this.internalValue = this.multiple ? [] : null;
      this.$refs.input.value = '';
    },
    genChips() {
      if (!this.isDirty) return [];
      return this.text.map((text, index) => this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          small: this.smallChips
        },
        on: {
          'click:close': () => {
            const internalValue = this.internalValue;
            internalValue.splice(index, 1);
            this.internalValue = internalValue; // Trigger the watcher
          }
        }
      }, [text]));
    },
    genControl() {
      const render = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControl.call(this);
      if (this.hideInput) {
        render.data.style = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_5__[/* mergeStyles */ "d"])(render.data.style, {
          display: 'none'
        });
      }
      return render;
    },
    genInput() {
      const input = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.data.attrs.multiple = this.multiple; // We should not be setting value
      // programmatically on the input
      // when it is using type="file"

      delete input.data.domProps.value; // This solves an issue in Safari where
      // nothing happens when adding a file
      // due to the input event not firing
      // https://github.com/vuetifyjs/vuetify/issues/7941

      delete input.data.on.input;
      input.data.on.change = this.onInput;
      return [this.genSelections(), input];
    },
    genPrependSlot() {
      if (!this.prependIcon) return null;
      const icon = this.genIcon('prepend', () => {
        this.$refs.input.click();
      });
      return this.genSlot('prepend', 'outer', [icon]);
    },
    genSelectionText() {
      const length = this.text.length;
      if (length < 2) return this.text;
      if (this.showSize && !this.counter) return [this.computedCounterValue];
      return [this.$vuetify.lang.t(this.counterString, length)];
    },
    genSelections() {
      const children = [];
      if (this.isDirty && this.$scopedSlots.selection) {
        this.internalArrayValue.forEach((file, index) => {
          if (!this.$scopedSlots.selection) return;
          children.push(this.$scopedSlots.selection({
            text: this.text[index],
            file,
            index
          }));
        });
      } else {
        children.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText());
      }
      return this.$createElement('div', {
        staticClass: 'v-file-input__text',
        class: {
          'v-file-input__text--placeholder': this.placeholder && !this.isDirty,
          'v-file-input__text--chips': this.hasChips && !this.$scopedSlots.selection
        }
      }, children);
    },
    genTextFieldSlot() {
      const node = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genTextFieldSlot.call(this);
      node.data.on = {
        ...(node.data.on || {}),
        click: e => {
          // Clicking the label already delegates to input element, so we shouldn't click it twice
          if (e.target && e.target.nodeName === 'LABEL') return;
          this.$refs.input.click();
        }
      };
      return node;
    },
    onInput(e) {
      const files = [...(e.target.files || [])];
      this.internalValue = this.multiple ? files : files[0]; // Set initialValue here otherwise isFocused
      // watcher in VTextField will emit a change
      // event whenever the component is blurred

      this.initialValue = this.internalValue;
    },
    onKeyDown(e) {
      this.$emit('keydown', e);
    },
    truncateText(str) {
      if (str.length < Number(this.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(this.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }
  }
}));

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-2a0c1bfa]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-2a0c1bfa],.modal-overlay[data-v-2a0c1bfa]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-2a0c1bfa]{background:#fff;flex-direction:column;overflow:hidden}.modal-content[data-v-2a0c1bfa]{flex:1;overflow-x:hidden;overflow-y:auto;padding-bottom:20px}.modal-footer[data-v-2a0c1bfa]{background:#f8f9fa;border-top:1px solid #e9ecef;bottom:0;box-shadow:0 -2px 4px rgba(0,0,0,.1);padding:12px 20px;position:sticky;z-index:10}.footer-actions[data-v-2a0c1bfa]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-2a0c1bfa]{height:100vh;width:100vw}.footer-actions[data-v-2a0c1bfa]{flex-direction:row;gap:8px}.footer-actions .v-btn[data-v-2a0c1bfa]{min-width:80px}.col-2[data-v-2a0c1bfa],.col-3[data-v-2a0c1bfa],.col-4[data-v-2a0c1bfa],.col-6[data-v-2a0c1bfa]{flex:0 0 100%;max-width:100%}}@media (max-width:600px){.modal-footer[data-v-2a0c1bfa]{padding:8px 16px}.footer-actions[data-v-2a0c1bfa]{width:100%}.footer-actions .v-btn[data-v-2a0c1bfa]{flex:1}}.modal-content[data-v-2a0c1bfa]::-webkit-scrollbar{width:8px}.modal-content[data-v-2a0c1bfa]::-webkit-scrollbar-track{background:#f1f1f1}.modal-content[data-v-2a0c1bfa]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.modal-content[data-v-2a0c1bfa]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.my-form[data-v-2a0c1bfa]{font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_0b0f0458_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(487);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_0b0f0458_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_0b0f0458_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_0b0f0458_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_0b0f0458_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-0b0f0458]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-0b0f0458],.modal-overlay[data-v-0b0f0458]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-0b0f0458]{background:#fff;flex-direction:column;overflow:hidden}.modal-content[data-v-0b0f0458]{flex:1;overflow-x:hidden;overflow-y:auto;padding-bottom:20px}.modal-footer[data-v-0b0f0458]{background:#f8f9fa;border-top:1px solid #e9ecef;bottom:0;box-shadow:0 -2px 4px rgba(0,0,0,.1);padding:12px 20px;position:sticky;z-index:10}.footer-actions[data-v-0b0f0458]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-0b0f0458]{height:100vh;width:100vw}.footer-actions[data-v-0b0f0458]{flex-direction:row;gap:8px}.footer-actions .v-btn[data-v-0b0f0458]{min-width:80px}}@media (max-width:600px){.modal-footer[data-v-0b0f0458]{padding:8px 16px}.footer-actions[data-v-0b0f0458]{width:100%}.footer-actions .v-btn[data-v-0b0f0458]{flex:1}}.modal-content[data-v-0b0f0458]::-webkit-scrollbar{width:8px}.modal-content[data-v-0b0f0458]::-webkit-scrollbar-track{background:#f1f1f1}.modal-content[data-v-0b0f0458]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.modal-content[data-v-0b0f0458]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.grey[data-v-0b0f0458],.text-h5[data-v-0b0f0458]{font-family:\"Noto Sans Lao\"}.my-form[data-v-0b0f0458]{font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
// Styles
 // Components

 // Mixins





 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-rating',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    color: {
      type: String,
      default: 'primary'
    },
    clearable: Boolean,
    dense: Boolean,
    emptyIcon: {
      type: String,
      default: '$ratingEmpty'
    },
    fullIcon: {
      type: String,
      default: '$ratingFull'
    },
    halfIcon: {
      type: String,
      default: '$ratingHalf'
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    size: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    iconLabel: {
      type: String,
      default: '$vuetify.rating.ariaLabel.icon'
    }
  },
  data() {
    return {
      hoverIndex: -1,
      internalValue: this.value
    };
  },
  computed: {
    directives() {
      if (this.readonly || !this.ripple) return [];
      return [{
        name: 'ripple',
        value: {
          circle: true
        }
      }];
    },
    iconProps() {
      const {
        dark,
        large,
        light,
        medium,
        small,
        size,
        xLarge,
        xSmall
      } = this.$props;
      return {
        dark,
        large,
        light,
        medium,
        size,
        small,
        xLarge,
        xSmall
      };
    },
    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    }
  },
  watch: {
    internalValue(val) {
      val !== this.value && this.$emit('input', val);
    },
    value(val) {
      this.internalValue = val;
    }
  },
  methods: {
    createClickFn(i) {
      return e => {
        if (this.readonly) return;
        const newValue = this.genHoverIndex(e, i);
        if (this.clearable && this.internalValue === newValue) {
          this.internalValue = 0;
        } else {
          this.internalValue = newValue;
        }
      };
    },
    createProps(i) {
      const props = {
        index: i,
        value: this.internalValue,
        click: this.createClickFn(i),
        isFilled: Math.floor(this.internalValue) > i,
        isHovered: Math.floor(this.hoverIndex) > i
      };
      if (this.halfIncrements) {
        props.isHalfHovered = !props.isHovered && (this.hoverIndex - i) % 1 > 0;
        props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
      }
      return props;
    },
    genHoverIndex(e, i) {
      let isHalf = this.isHalfEvent(e);
      if (this.halfIncrements && this.$vuetify.rtl) {
        isHalf = !isHalf;
      }
      return i + (isHalf ? 0.5 : 1);
    },
    getIconName(props) {
      const isFull = this.isHovering ? props.isHovered : props.isFilled;
      const isHalf = this.isHovering ? props.isHalfHovered : props.isHalfFilled;
      return isFull ? this.fullIcon : isHalf ? this.halfIcon : this.emptyIcon;
    },
    getColor(props) {
      if (this.isHovering) {
        if (props.isHovered || props.isHalfHovered) return this.color;
      } else {
        if (props.isFilled || props.isHalfFilled) return this.color;
      }
      return this.backgroundColor;
    },
    isHalfEvent(e) {
      if (this.halfIncrements) {
        const rect = e.target && e.target.getBoundingClientRect();
        if (rect && e.pageX - rect.left < rect.width / 2) return true;
      }
      return false;
    },
    onMouseEnter(e, i) {
      this.runDelay('open', () => {
        this.hoverIndex = this.genHoverIndex(e, i);
      });
    },
    onMouseLeave() {
      this.runDelay('close', () => this.hoverIndex = -1);
    },
    genItem(i) {
      const props = this.createProps(i);
      if (this.$scopedSlots.item) return this.$scopedSlots.item(props);
      const listeners = {
        click: props.click
      };
      if (this.hover) {
        listeners.mouseenter = e => this.onMouseEnter(e, i);
        listeners.mouseleave = this.onMouseLeave;
        if (this.halfIncrements) {
          listeners.mousemove = e => this.onMouseEnter(e, i);
        }
      }
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.setTextColor(this.getColor(props), {
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.iconLabel, i + 1, Number(this.length))
        },
        directives: this.directives,
        props: this.iconProps,
        on: listeners
      }), [this.getIconName(props)]);
    }
  },
  render(h) {
    const children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* createRange */ "i"])(Number(this.length)).map(i => this.genItem(i));
    return h('div', {
      staticClass: 'v-rating',
      class: {
        'v-rating--readonly': this.readonly,
        'v-rating--dense': this.dense
      }
    }, children);
  }
}));

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/minStockCard/index.vue?vue&type=template&id=150c6638





var minStockCardvue_type_template_id_150c6638_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("\n      ສິ້ນຄ້າໃກ້ໝົດ\n    ")]), _vm._v(" "), _vm.loaddata ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.loaddata,
      "items-per-page": _vm.pageLine
    },
    scopedSlots: _vm._u([{
      key: `item.pro_cost_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_cost_price)) + "\n\n      ")];
      }
    }, {
      key: `item.pro_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_price)) + "\n\n      ")];
      }
    }, {
      key: `item.pro_card_count`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_card_count)) + "\n\n      ")];
      }
    }, {
      key: `item.status`,
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          staticClass: "ma-2",
          attrs: {
            "color": _vm.verifyStockStatus(item.minStock, item.pro_card_count).includes(`In`) ? `green` : _vm.verifyStockStatus(item.minStock, item.pro_card_count).includes(`Out`) ? `red` : `orange`,
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.verifyStockStatus(item.minStock, item.pro_card_count)) + "\n        ")])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/minStockCard/index.vue?vue&type=template&id=150c6638

// EXTERNAL MODULE: ./components/product/ProductForm.vue + 3 modules
var ProductForm = __webpack_require__(498);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./components/product/ProductFormCreate.vue + 3 modules
var ProductFormCreate = __webpack_require__(497);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(143);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/minStockCard/index.vue?vue&type=script&lang=js





/* harmony default export */ var minStockCardvue_type_script_lang_js = ({
  components: {
    ProductForm: ProductForm["default"],
    ProductFormCreate: ProductFormCreate["default"]
  },
  middleware: 'auths',
  data() {
    return {
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedProductId: '',
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      headers: [{
        text: 'ໄອດີ',
        align: 'center',
        value: 'pro_id'
      }, {
        text: 'ຊື່ສິນຄ້າ',
        align: 'center',
        value: 'pro_name'
      }, {
        text: 'ຮ້ານ',
        align: 'center',
        value: 'pro_outlet_name'
      }, {
        text: 'ຫມວດສິນຄ້າ',
        align: 'center',
        value: 'pro_category_desc'
      }, {
        text: 'ລາຄາ',
        align: 'center',
        value: 'pro_price'
      },
      // { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
      {
        text: 'ສະຕັອກຂັ້ນຕ່ຳ',
        align: 'center',
        value: 'minStock'
      }, {
        text: 'Stock',
        align: 'center',
        value: 'pro_card_count'
      }, {
        text: 'Status',
        align: 'center',
        value: 'status'
      }, {
        text: 'cost',
        align: 'center',
        value: 'pro_cost_price'
      }, {
        text: 'Vendor',
        align: 'center',
        value: 'vendorName'
      }
      // {
      //   text: 'ສະຕັອກ',
      //   align: 'center',
      //   value: 'functionStock',
      //   sortable: false,
      // },
      // {
      //   text: 'ເບິ່ງສະຕັອກ',
      //   align: 'center',
      //   value: 'functionStockView',
      //   sortable: false,
      // },
      // {
      //   text: 'ແກ້ໄຂ',
      //   align: 'center',
      //   value: 'functionEdit',
      //   sortable: false,
      // },
      ]
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllTerminal', 'findSelectedTerminal', 'currentSelectedLocation', 'findAllLocation'])
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true;
        return;
      }
      this.dialogMessage = false;
    }
  },
  async mounted() {
    await this.fetchData();
    await this.loadCardCategory();
  },
  methods: {
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    verifyStockStatus(minStock, CurStock) {
      let statusStock = '';
      CurStock == 0 ? statusStock = 'Out of stock' : minStock < CurStock ? statusStock = 'In stock' : statusStock = 'Low stock';
      return statusStock;
    },
    triggerCardForm(payload) {
      this.stockFormKey += 1;
      this.selectedProductId = payload.pro_id;
      this.selectedProductCost = payload.pro_cost_price;
      this.selectedProductName = payload.pro_name;
      this.isstock = true;
    },
    async fetchData() {
      console.log(`CARD SELECTE ${this.currentSelectedLocation['id']}`);
      this.isloading = true;
      await this.$axios.get(`product_f/${this.currentSelectedLocation['id']}`).then(res => {
        this.loaddata = [];
        for (const iterator of res.data.data) {
          if (iterator['minStock'] > iterator['card_count']) {
            this.loaddata.push({
              pro_id: iterator.pro_id,
              pro_name: iterator.pro_name,
              pro_price: iterator.pro_price,
              pro_desc: iterator.pro_desc,
              pro_status: iterator.pro_status,
              pro_category: iterator.pro_category,
              pro_category_desc: iterator.pro_category + ' - ' + iterator.categ_name,
              pro_card_count: iterator.card_count,
              pro_cost_price: iterator.cost_price,
              pro_outlet: iterator.outlet,
              pro_outlet_name: iterator.outlet_name,
              minStock: iterator.minStock,
              vendorName: iterator.vendorName,
              // function: iterator.pro_id,
              functionEdit: iterator.pro_id,
              functionStock: iterator.pro_id,
              functionStockView: iterator.pro_id,
              status: iterator.pro_id
            });
          }
        }
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
      this.isloading = false;
    },
    editItem(item) {
      this.productFormKey += 1;
      this.selectedProductId = item.pro_id;
      this.editProductForm = true;
      // const obj=JSON.stringify(idx)
      // this.$router.push(`/admin/product/${idx.pro_id}`)
    },
    editStock(idx) {
      console.log('ID ' + idx.pro_id);
      console.log('NAME ' + idx.pro_name);
      console.log('OBJ ' + Object.keys(idx));
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.pro_id}`);
    },
    attachFile(payload) {
      this.carddata.length = 0;
      const file = payload; // in case vuetify file input
      // this.files = payload
      const reader = new FileReader();
      if (file) {
        console.log('FILE LEN: ' + file);
        reader.onload = res => {
          this.content = res.target.result;
          console.log('Data content => : ' + this.content);
          const arr = this.content.replace(/\r\n/g, '\n').split('\n'); // filter text line by line
          const tempCardData = arr.filter(el => el !== '' && el.length >= 10); // filter only useable value and trim out null line
          let i = 0;
          tempCardData.forEach(element => {
            // loop and push to real datacart
            i++;
            console.log(`Data loop ${i} ${element}`);
            this.carddata.push(element.replace('	', '|').replace('	', '|').split("'").pop()); // filter only valid number after ' and push to cartdata
            console.log(element.split("'").pop());
          });
          console.log('CARD DATA: ' + this.carddata);
        };
        reader.onerror = err => console.log(err);
        reader.readAsText(file);
        // URL.revokeObjectURL(file) // free memory
      }
      // var file = FileReader.FileReader()
    },
    loadCardCategory() {
      this.isloading = true;
      this.$axios.get('stockcate_f').then(res => {
        this.cardType = res.data.map(el => {
          return {
            card_type_code: el.card_type_code,
            card_type_name: el.card_type_name
          };
        });
        this.selectedCardType = this.cardType[0].card_type_code;
        console.log('CARD LEN: ' + this.cardType.length);
        console.log('CARD LEN: ' + this.cardType[0].card_type_code);
        this.isloading = false;
      }).catch(er => {
        console.log('Error: ' + er);
        this.isloading = false;
      });
    },
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true;
        await this.$axios.post("/api/card/rebuildStock").then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.fetchData();
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
        this.isloading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/minStockCard/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_minStockCardvue_type_script_lang_js = (minStockCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/minStockCard/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_minStockCardvue_type_script_lang_js,
  minStockCardvue_type_template_id_150c6638_render,
  staticRenderFns,
  false,
  null,
  null,
  "78e2740a"
  
)

/* harmony default export */ var minStockCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1052);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("065b3c7e", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map