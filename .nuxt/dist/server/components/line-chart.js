exports.ids = [50];
exports.modules = {

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_d725b3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(756);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_d725b3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_d725b3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_d725b3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_d725b3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".line-chart-container[data-v-d725b3b8]{height:300px;position:relative;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineChart.vue?vue&type=template&id=d725b3b8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "line-chart-container"
  }, [_vm._ssrNode("<canvas" + _vm._ssrAttr("width", _vm.width) + _vm._ssrAttr("height", _vm.height) + " data-v-d725b3b8></canvas>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LineChart.vue?vue&type=template&id=d725b3b8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineChart.vue?vue&type=script&lang=js&
/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  name: 'LineChart',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        labels: [],
        datasets: []
      })
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      })
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    if (false) {}
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.updateChart();
      }
    }
  },
  methods: {
    async createChart() {
      if (true) return;
      try {
        // Dynamically import Chart.js to avoid SSR issues
        const {
          default: Chart
        } = await __webpack_require__.e(/* import() */ 255).then(__webpack_require__.t.bind(null, 489, 7));
        const ctx = this.$refs.chart.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.data,
          options: this.options
        });
      } catch (error) {
        console.error('Failed to create chart:', error);
      }
    },
    updateChart() {
      if (this.chart) {
        this.chart.data = this.data;
        this.chart.update();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/LineChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1000)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d725b3b8",
  "283fd687"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1001);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2106505d", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=line-chart.js.map