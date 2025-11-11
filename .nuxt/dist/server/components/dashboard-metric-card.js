exports.ids = [52];
exports.modules = {

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(736);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d600e96e", content, true, context)
};

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetricCard_vue_vue_type_style_index_0_id_e734e182_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetricCard_vue_vue_type_style_index_0_id_e734e182_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetricCard_vue_vue_type_style_index_0_id_e734e182_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetricCard_vue_vue_type_style_index_0_id_e734e182_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetricCard_vue_vue_type_style_index_0_id_e734e182_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".metric-card[data-v-e734e182]{background:#fff;border-left:4px solid transparent;border-radius:.5rem;box-shadow:0 1px 3px rgba(0,0,0,.1);overflow:hidden;position:relative;transition:all .2s ease}.metric-card[data-v-e734e182]:hover{box-shadow:0 4px 6px rgba(0,0,0,.1);transform:translateY(-1px)}.metric-card--alert[data-v-e734e182]{background:linear-gradient(135deg,#fffbeb,#fff);border-left-color:#f59e0b}.metric-card__content[data-v-e734e182]{padding:1.5rem}.metric-card__header[data-v-e734e182]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:1rem}.metric-card__text[data-v-e734e182]{flex:1}.metric-card__title[data-v-e734e182]{color:#6b7280;font-size:.875rem;font-weight:500;line-height:1.2;margin:0 0 .5rem}.metric-card__value[data-v-e734e182]{color:#111827;font-size:1.875rem;font-weight:700;line-height:1.1;margin:0 0 .25rem}.metric-card__subtitle[data-v-e734e182]{color:#6b7280;font-size:.75rem;line-height:1.3;margin:0}.metric-card__icon-container[data-v-e734e182]{align-items:center;border-radius:.75rem;display:flex;flex-shrink:0;height:3rem;justify-content:center;margin-left:1rem;width:3rem}.metric-card__icon[data-v-e734e182]{height:1.5rem;width:1.5rem}.metric-card__trend[data-v-e734e182]{align-items:center;border-top:1px solid #f3f4f6;display:flex;gap:.25rem;padding-top:.75rem}.metric-card__trend-icon[data-v-e734e182]{height:1rem;width:1rem}.metric-card__trend-icon--positive[data-v-e734e182]{color:#059669}.metric-card__trend-icon--negative[data-v-e734e182]{color:#dc2626}.metric-card__trend-text[data-v-e734e182]{font-size:.75rem;font-weight:500}.metric-card__trend-text--positive[data-v-e734e182]{color:#059669}.metric-card__trend-text--negative[data-v-e734e182]{color:#dc2626}.metric-card__alert-indicator[data-v-e734e182]{align-items:center;animation:pulse-e734e182 2s infinite;background:#f59e0b;border-radius:50%;display:flex;height:1.5rem;justify-content:center;position:absolute;right:.75rem;top:.75rem;width:1.5rem}.metric-card__alert-icon[data-v-e734e182]{color:#fff;height:.875rem;width:.875rem}@keyframes pulse-e734e182{0%,to{opacity:1}50%{opacity:.7}}@media (max-width:640px){.metric-card__content[data-v-e734e182]{padding:1rem}.metric-card__header[data-v-e734e182]{align-items:stretch;flex-direction:column;gap:1rem}.metric-card__icon-container[data-v-e734e182]{align-self:flex-end;margin-left:0}.metric-card__value[data-v-e734e182]{font-size:1.5rem}}@media (prefers-color-scheme:dark){.metric-card[data-v-e734e182]{background:#1f2937;border-color:#374151}.metric-card__title[data-v-e734e182]{color:#9ca3af}.metric-card__value[data-v-e734e182]{color:#f9fafb}.metric-card__subtitle[data-v-e734e182]{color:#9ca3af}.metric-card__trend[data-v-e734e182]{border-top-color:#374151}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/MetricCard.vue?vue&type=template&id=e734e182&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "metric-card",
    class: {
      'metric-card--alert': _vm.alert
    }
  }, [_vm._ssrNode("<div class=\"metric-card__content\" data-v-e734e182>", "</div>", [_vm._ssrNode("<div class=\"metric-card__header\" data-v-e734e182>", "</div>", [_vm._ssrNode("<div class=\"metric-card__text\" data-v-e734e182><h3 class=\"metric-card__title\" data-v-e734e182>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> <p class=\"metric-card__value\" data-v-e734e182>" + _vm._ssrEscape(_vm._s(_vm.value)) + "</p> " + (_vm.subtitle ? "<p class=\"metric-card__subtitle\" data-v-e734e182>" + _vm._ssrEscape(_vm._s(_vm.subtitle)) + "</p>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"metric-card__icon-container\"" + _vm._ssrStyle(null, {
    backgroundColor: `${_vm.color}15`
  }, null) + " data-v-e734e182>", "</div>", [_c(_vm.iconComponent, {
    tag: "component",
    staticClass: "metric-card__icon",
    style: {
      color: _vm.color
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm.trend !== null && _vm.trend !== undefined ? _vm._ssrNode("<div class=\"metric-card__trend\" data-v-e734e182>", "</div>", [_vm.trend >= 0 ? _c('TrendingUpIcon', {
    staticClass: "metric-card__trend-icon metric-card__trend-icon--positive"
  }) : _c('TrendingDownIcon', {
    staticClass: "metric-card__trend-icon metric-card__trend-icon--negative"
  }), _vm._ssrNode(" <span" + _vm._ssrClass("metric-card__trend-text", {
    'metric-card__trend-text--positive': _vm.trend >= 0,
    'metric-card__trend-text--negative': _vm.trend < 0
  }) + " data-v-e734e182>" + _vm._ssrEscape("\n        " + _vm._s(Math.abs(_vm.trend).toFixed(1)) + "% vs last period\n      ") + "</span>")], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm.alert ? _vm._ssrNode("<div class=\"metric-card__alert-indicator\" data-v-e734e182>", "</div>", [_c('AlertTriangleIcon', {
    staticClass: "metric-card__alert-icon"
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/dashboard/MetricCard.vue?vue&type=template&id=e734e182&scoped=true

// EXTERNAL MODULE: external "vue-feather-icons"
var external_vue_feather_icons_ = __webpack_require__(380);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/MetricCard.vue?vue&type=script&lang=js

/* harmony default export */ var MetricCardvue_type_script_lang_js = ({
  name: 'MetricCard',
  components: {
    DollarSignIcon: external_vue_feather_icons_["DollarSignIcon"],
    ShoppingCartIcon: external_vue_feather_icons_["ShoppingCartIcon"],
    TrendingUpIcon: external_vue_feather_icons_["TrendingUpIcon"],
    TrendingDownIcon: external_vue_feather_icons_["TrendingDownIcon"],
    AlertTriangleIcon: external_vue_feather_icons_["AlertTriangleIcon"],
    UsersIcon: external_vue_feather_icons_["UsersIcon"],
    PackageIcon: external_vue_feather_icons_["PackageIcon"],
    ClockIcon: external_vue_feather_icons_["ClockIcon"],
    BarChart3Icon: external_vue_feather_icons_["BarChart3Icon"],
    PieChartIcon: external_vue_feather_icons_["PieChartIcon"]
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'bar-chart-3'
    },
    color: {
      type: String,
      default: '#3B82F6'
    },
    trend: {
      type: Number,
      default: null
    },
    alert: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconComponent() {
      const iconMap = {
        'dollar-sign': 'DollarSignIcon',
        'shopping-cart': 'ShoppingCartIcon',
        'trending-up': 'TrendingUpIcon',
        'alert-triangle': 'AlertTriangleIcon',
        'users': 'UsersIcon',
        'package': 'PackageIcon',
        'clock': 'ClockIcon',
        'bar-chart-3': 'BarChart3Icon',
        'pie-chart': 'PieChartIcon'
      };
      return iconMap[this.icon] || 'BarChart3Icon';
    }
  }
});
// CONCATENATED MODULE: ./components/dashboard/MetricCard.vue?vue&type=script&lang=js
 /* harmony default export */ var dashboard_MetricCardvue_type_script_lang_js = (MetricCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/dashboard/MetricCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(735)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_MetricCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e734e182",
  "53b8628e"
  
)

/* harmony default export */ var MetricCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard-metric-card.js.map