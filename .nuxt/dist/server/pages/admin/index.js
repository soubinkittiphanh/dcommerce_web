exports.ids = [222,57,102,103,134,138,139,345];
exports.modules = {

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

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
      imageSrc: __webpack_require__(205)
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

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cashier_2.208aede.svg";

/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/invoice.45f420f.svg";

/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pay-card.8fb80cc.svg";

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/stock.b6becdb.svg";

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/patient.1cdc99c.svg";

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20edbe42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(898);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20edbe42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20edbe42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20edbe42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_20edbe42_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard-container[data-v-20edbe42]{background:#f8fafc;font-family:\"Inter\",\"Noto Sans Lao\",sans-serif;margin:0 auto;max-width:1440px;padding:20px}.dashboard-header[data-v-20edbe42]{align-items:center;display:flex;justify-content:space-between;margin-bottom:30px}.dashboard-title[data-v-20edbe42]{color:#1e293b;font-size:2.2rem;font-weight:700}.dashboard-subtitle[data-v-20edbe42]{color:#64748b}.date-display[data-v-20edbe42]{background:#fff;border-radius:12px;box-shadow:0 2px 4px rgba(0,0,0,.05);color:#64748b;font-weight:500;padding:10px 20px}.quick-actions-grid[data-v-20edbe42]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:20px;gap:20px;margin-bottom:40px}.action-card[data-v-20edbe42]{background:#fff;border:1px solid #e2e8f0;border-radius:16px;cursor:pointer;overflow:hidden;padding:24px;position:relative;transition:all .3s ease}.action-card[data-v-20edbe42]:hover{box-shadow:0 10px 15px -3px rgba(0,0,0,.1);transform:translateY(-5px)}.card-icon[data-v-20edbe42]{align-items:center;border-radius:12px;display:flex;height:48px;justify-content:center;margin-bottom:16px;width:48px}.card-icon img[data-v-20edbe42]{filter:brightness(0) invert(1);width:24px}.kpi-grid[data-v-20edbe42]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:24px;gap:24px;margin-bottom:40px}.kpi-card[data-v-20edbe42]{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:24px;position:relative}.kpi-header[data-v-20edbe42]{display:flex;justify-content:space-between;margin-bottom:16px}.kpi-icon[data-v-20edbe42]{align-items:center;border-radius:12px;display:flex;height:48px;justify-content:center;width:48px}.kpi-value[data-v-20edbe42]{color:#0f172a;font-size:1.8rem;font-weight:700;margin-bottom:8px}.kpi-title[data-v-20edbe42]{color:#64748b;font-size:.9rem;margin-bottom:12px}.payment-breakdown[data-v-20edbe42]{border-top:1px dashed #e2e8f0;margin-top:16px;padding-top:16px}.payment-item[data-v-20edbe42]{color:#475569;display:flex;font-size:.9rem;justify-content:space-between;margin-bottom:8px}.analytics-grid[data-v-20edbe42]{display:grid;grid-template-columns:repeat(12,1fr);grid-gap:24px;gap:24px}.chart-card[data-v-20edbe42]{background:#fff;border:1px solid #e2e8f0;border-radius:16px;grid-column:span 6;padding:20px}.chart-card.chart-card--large[data-v-20edbe42]{grid-column:span 8}.chart-card.chart-card--small[data-v-20edbe42]{grid-column:span 4}.chart-card.full-width[data-v-20edbe42]{grid-column:span 12}.chart-header[data-v-20edbe42]{border-bottom:1px solid #f1f5f9;color:#1e293b;font-weight:600;margin-bottom:20px;padding-bottom:10px}.echarts-container[data-v-20edbe42]{height:350px;width:100%}.chart-container[data-v-20edbe42]{min-height:250px;width:100%}.loading-container[data-v-20edbe42]{align-items:center;background:#fff;border-radius:12px;display:flex;flex-direction:column;padding:30px}.loading-spinner[data-v-20edbe42]{animation:spin-20edbe42 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#6366f1;height:40px;width:40px}@keyframes spin-20edbe42{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.terminal-option[data-v-20edbe42]{align-items:center;border:2px solid #f1f5f9;border-radius:12px;cursor:pointer;display:flex;margin-bottom:12px;padding:16px;transition:.2s}.terminal-option.selected[data-v-20edbe42]{background:#f5f3ff;border-color:#6366f1}.hidden[data-v-20edbe42]{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
var VRadio = __webpack_require__(437);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
var VRadioGroup = __webpack_require__(436);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=20edbe42&scoped=true








var adminvue_type_template_id_20edbe42_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
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
  }, [_vm._v("ກຳລັງໂຫລດຂໍ້ມູນ...")])])]), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
    staticClass: "dialog-header",
    style: _vm.dialogHeaderStyle
  }, [_c('h3', [_vm._v("ເລືອກຈຸດຂາຍ (Terminal)")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": ""
    },
    on: {
      "click": function ($event) {
        _vm.terminalDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c('div', {
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
        selected: _vm.terminalSelected === terminal.id
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
    style: _vm.primaryButtonStyle,
    attrs: {
      "disabled": !_vm.terminalSelected
    },
    on: {
      "click": _vm.chooseTerminal
    }
  }, [_vm._v("\n          ຢືນຢັນເລືອກ Terminal\n        ")])], 1)])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"dashboard-container\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"dashboard-header\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"header-content\" data-v-20edbe42><h1 class=\"dashboard-title\" data-v-20edbe42>ພາບລວມລະບົບ</h1> <p class=\"dashboard-subtitle\" data-v-20edbe42>\n          ຕິດຕາມຜົນການດຳເນີນງານ ແລະ ການຊຳລະເງິນ\n        </p></div> "), _vm._ssrNode("<div class=\"header-actions\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"date-display\" data-v-20edbe42>", "</div>", [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-calendar")]), _vm._ssrNode(_vm._ssrEscape("\n          " + _vm._s(_vm.currentDate) + "\n        "))], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"quick-actions-section\" data-v-20edbe42>", "</section>", [_vm._ssrNode("<div class=\"section-header\" data-v-20edbe42><h2 class=\"section-title\" data-v-20edbe42>ເມນູດ່ວນ</h2></div> "), _vm._ssrNode("<div class=\"quick-actions-grid\" data-v-20edbe42>", "</div>", _vm._l(_vm.menus, function (item, index) {
    return _vm._ssrNode("<div class=\"action-card\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"card-icon\"" + _vm._ssrStyle(null, _vm.cardIconStyle, null) + " data-v-20edbe42><img" + _vm._ssrAttr("src", item.svgIcon) + " alt data-v-20edbe42></div> "), _vm._ssrNode("<div class=\"card-content\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<h3 data-v-20edbe42>" + _vm._ssrEscape(_vm._s(item.title)) + "</h3> "), _c(VIcon["a" /* default */], {
      staticClass: "arrow-icon"
    }, [_vm._v("mdi-arrow-right")])], 2), _vm._ssrNode(" <div class=\"card-overlay\" data-v-20edbe42></div>")], 2);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"kpi-section\" data-v-20edbe42>", "</section>", [_vm._ssrNode("<div class=\"section-header\" data-v-20edbe42><h2 class=\"section-title\" data-v-20edbe42>ສະຫຼຸບຍອດຂາຍ</h2></div> "), _vm._ssrNode("<div class=\"kpi-grid\" data-v-20edbe42>", "</div>", _vm._l(_vm.menusOverview, function (item, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("kpi-card", `kpi-card--${index}`) + " data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"kpi-header\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"kpi-icon\"" + _vm._ssrStyle(null, _vm.kpiIconStyle, null) + " data-v-20edbe42>", "</div>", [_c(VIcon["a" /* default */], {
      attrs: {
        "color": "white"
      }
    }, [_vm._v(_vm._s(item.icon))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"kpi-trend\" data-v-20edbe42>", "</div>", [_c(VIcon["a" /* default */], {
      attrs: {
        "size": "18",
        "color": "#10B981"
      }
    }, [_vm._v("mdi-trending-up")])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"kpi-content\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<h3 class=\"kpi-title\" data-v-20edbe42>" + _vm._ssrEscape(_vm._s(item.title)) + "</h3> <div class=\"kpi-value\" data-v-20edbe42>" + _vm._ssrEscape(_vm._s(item.total)) + "</div> "), item.groupedCurrency ? _vm._ssrNode("<div class=\"currency-summary mb-4\" data-v-20edbe42>", "</div>", _vm._l(item.groupedCurrency, function (amount, code) {
      return _c(VChip["a" /* default */], {
        key: code,
        staticClass: "mr-2 mb-1",
        attrs: {
          "x-small": "",
          "label": "",
          "outlined": "",
          "color": "primary"
        }
      }, [_c('strong', [_vm._v(_vm._s(code))]), _vm._v(": " + _vm._s(_vm.numberFormatter(amount)) + "\n              ")]);
    }), 1) : _vm._e(), _vm._ssrNode(" " + (item.groupedSales && Object.keys(item.groupedSales).length > 0 ? "<div class=\"payment-breakdown\" data-v-20edbe42>" + _vm._ssrList(item.groupedSales, function (payment, key) {
      return "<div class=\"payment-item\" data-v-20edbe42><div class=\"d-flex flex-column\" data-v-20edbe42><span class=\"payment-method\" data-v-20edbe42>" + _vm._ssrEscape(_vm._s(payment.paymentName)) + "</span> <small class=\"text--secondary font-weight-bold\" style=\"font-size: 0.7rem; color: #94a3b8\" data-v-20edbe42>" + _vm._ssrEscape(_vm._s(payment.currencyCode)) + "</small></div> <span class=\"payment-amount font-weight-bold\" data-v-20edbe42>" + _vm._ssrEscape(_vm._s(_vm.numberFormatter(payment.amount))) + "</span></div>";
    }) + "</div>" : "<!---->"))], 2)], 2);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"analytics-section\" data-v-20edbe42>", "</section>", [_vm._ssrNode("<div class=\"analytics-grid\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"chart-card chart-card--large\" data-v-20edbe42><div class=\"chart-header\" data-v-20edbe42><h3 data-v-20edbe42>ສິນຄ້າຂາຍດີຕາມໝວດ</h3></div> <div class=\"chart-container\" data-v-20edbe42><div class=\"echarts-container\" data-v-20edbe42></div></div></div> "), _vm._ssrNode("<div class=\"chart-card chart-card--small\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"chart-header\" data-v-20edbe42><h3 data-v-20edbe42>ຮູບແບບການຊຳລະ (ມູນຄ່າລວມ)</h3></div> "), _vm._ssrNode("<div class=\"chart-container\" data-v-20edbe42>", "</div>", [_c('apexchart', {
    attrs: {
      "type": "donut",
      "height": "250",
      "options": _vm.options,
      "series": _vm.paymentSeries
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm.dailyState ? _vm._ssrNode("<div class=\"chart-card full-width\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"chart-header\" data-v-20edbe42><h3 data-v-20edbe42>ທ່າອ່ຽງການຂາຍລາຍວັນ (ສະກຸນເງິນກີບ)</h3></div> "), _vm._ssrNode("<div class=\"chart-container\" data-v-20edbe42>", "</div>", [_c('apexchart', {
    attrs: {
      "type": "line",
      "height": "300",
      "options": _vm.barOptionsForDailyStat,
      "series": _vm.barSeriesForDailyStat
    }
  })], 1)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.monthlyState ? _vm._ssrNode("<div class=\"chart-card full-width\" data-v-20edbe42>", "</div>", [_vm._ssrNode("<div class=\"chart-header\" data-v-20edbe42><h3 data-v-20edbe42>ທ່າອ່ຽງການຂາຍລາຍເດືອນ (6 ເດືອນຍ້ອນຫຼັງ)</h3></div> "), _vm._ssrNode("<div class=\"chart-container\" data-v-20edbe42>", "</div>", [_c('apexchart', {
    attrs: {
      "type": "bar",
      "height": "300",
      "options": _vm.barOptionsForMonthlyStat,
      "series": _vm.barSeriesForMonthlyStat
    }
  })], 1)], 2) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm.currentSelectedLocation ? _vm._ssrNode("<section class=\"inventory-section mt-10\" data-v-20edbe42>", "</section>", [_vm._ssrNode("<div class=\"section-header\" data-v-20edbe42><h2 class=\"section-title\" data-v-20edbe42>ແຈ້ງເຕືອນສິນຄ້າໃນສາງ</h2> <p class=\"section-description\" data-v-20edbe42>\n          ລາຍການສິນຄ້າທີ່ມີຈຳນວນຕ່ຳກວ່າເກນກຳນົດ\n        </p></div> "), _vm._ssrNode("<div class=\"inventory-container\" data-v-20edbe42>", "</div>", [_c('MinStockCard')], 1)], 2) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=20edbe42&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./components/minStockCard/index.vue + 4 modules
var minStockCard = __webpack_require__(875);

// EXTERNAL MODULE: ./components/menuOverview/index.vue + 4 modules
var menuOverview = __webpack_require__(1066);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: external "echarts"
var external_echarts_ = __webpack_require__(420);

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
      isloading: false,
      dailyState: false,
      monthlyState: false,
      minstockComponentsKey: 1,
      topSaleChartInstance: null,
      yearlySale: [],
      currentDate: new Date().toLocaleDateString('lo-LA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      barSeriesForDailyStat: [{
        name: 'ຍອດຂາຍ',
        data: []
      }],
      barOptionsForDailyStat: {
        chart: {
          type: 'line',
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: 'smooth',
          width: 4
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          labels: {
            formatter: val => Number(val).toLocaleString()
          }
        }
      },
      barSeriesForMonthlyStat: [{
        name: 'ຍອດຂາຍລາຍເດືອນ',
        data: []
      }],
      barOptionsForMonthlyStat: {
        chart: {
          type: 'bar',
          toolbar: {
            show: false
          },
          animations: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: '45%',
            distributed: true
          }
        },
        colors: ['#764ba2'],
        xaxis: {
          categories: []
        },
        yaxis: {
          labels: {
            formatter: val => Number(val).toLocaleString()
          }
        },
        dataLabels: {
          enabled: false
        }
      },
      options: {
        chart: {
          type: 'donut',
          height: 250
        },
        labels: [],
        legend: {
          position: 'bottom'
        },
        colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe']
      },
      menusOverview: [{
        title: 'ຍອດຂາຍມື້ນີ້ (ລວມເງິນກີບ)',
        icon: 'mdi-calendar-today',
        total: '0',
        groupedSales: {},
        groupedCurrency: {}
      }, {
        title: 'ຍອດຂາຍເດືອນນີ້',
        icon: 'mdi-calendar-month',
        total: '0',
        groupedSales: {},
        groupedCurrency: {}
      }, {
        title: 'ຍອດຂາຍ 6 ເດືອນຫຼັງ',
        icon: 'mdi-calendar-range',
        total: '0',
        groupedSales: {},
        groupedCurrency: {}
      }],
      menus: [{
        title: 'ຂາຍສິນຄ້າ (POS)',
        svgIcon: __webpack_require__(1110),
        path: '/pos/minimart'
      }, {
        title: 'ໃບບິນ (Invoice)',
        svgIcon: __webpack_require__(1111),
        path: '/admin/ordersFromPos'
      }, {
        title: 'ລູກໜີ້',
        svgIcon: __webpack_require__(1112),
        path: '/admin/ordersFromPosCredit'
      }, {
        title: 'ສາງສິນຄ້າ',
        svgIcon: __webpack_require__(1113),
        path: '/admin/product/productlist'
      }, {
        title: 'ລູກຄ້າ',
        svgIcon: __webpack_require__(1114),
        path: '/admin/client'
      }]
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllTerminal', 'findAllLocation', 'findAllPayment', 'findAllCurrency', 'currentSelectedLocation']),
    primaryGradient() {
      const theme = this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark : this.$vuetify.theme.themes.light;
      return `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`;
    },
    dialogHeaderStyle() {
      return {
        background: this.primaryGradient
      };
    },
    primaryButtonStyle() {
      return {
        background: this.primaryGradient,
        color: 'white'
      };
    },
    kpiIconStyle() {
      return {
        background: this.primaryGradient
      };
    },
    cardIconStyle() {
      return {
        background: this.primaryGradient
      };
    },
    paymentSeries() {
      return this.paymentMethodData.series;
    },
    paymentLabels() {
      return this.paymentMethodData.labels;
    },
    paymentMethodData() {
      if (!this.yearlySale.length) return {
        series: [],
        labels: []
      };
      const grouped = this.saleGroupByPayment(this.yearlySale);
      const data = Object.values(grouped);
      return {
        series: data.map(i => Math.round(i.totalSales)),
        labels: data.map(i => `${i.paymentName} (${i.currencyCode})`)
      };
    }
  },
  watch: {
    paymentLabels(newLabels) {
      this.options = {
        ...this.options,
        labels: newLabels
      };
    }
  },
  async created() {
    await this.loadSaleStatistic();
  },
  mounted() {
    this.loadTopSale();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['setSelectedTerminal', 'setSelectedLocation', 'initProduct']),
    navigateTo(path) {
      this.$router.push(path);
    },
    numberFormatter(value) {
      return Object(common["e" /* getFormatNum */])(Math.round(value));
    },
    handleResize() {
      var _this$topSaleChartIns;
      (_this$topSaleChartIns = this.topSaleChartInstance) === null || _this$topSaleChartIns === void 0 ? void 0 : _this$topSaleChartIns.resize();
    },
    getLineConvertedAmount(line, currencies, headerCcyId) {
      const lineTotal = Number(line.total || 0);
      const targetCcyId = line.currencyId || headerCcyId;
      const ccy = currencies.find(c => Number(c.id) === Number(targetCcyId));
      if (!ccy || Number(ccy.isLocalCCY) === 1) return lineTotal;
      const rate = Number(line.exchangeRate || 1);
      return ccy.exchangeDirection === 'foreign_to_local' ? lineTotal * rate : lineTotal / rate;
    },
    getConvertedSaleTotal(sale) {
      const currencies = this.findAllCurrency || [];
      let total = (sale.lines || []).reduce((sum, line) => sum + this.getLineConvertedAmount(line, currencies, sale.currencyId), 0);
      if (!sale.lines || sale.lines.length === 0) total = Number(sale.total || 0);
      if (sale.dynamic_customer) {
        total += Number(sale.dynamic_customer.rider_fee) || 0;
        total -= Number(sale.dynamic_customer.cod_fee) || 0;
      }
      return total;
    },
    getRawCurrencySummary(saleList) {
      const currencies = this.findAllCurrency || [];
      return saleList.reduce((acc, sale) => {
        (sale.lines || []).forEach(line => {
          const targetId = line.currencyId || sale.currencyId;
          const ccy = currencies.find(c => Number(c.id) === Number(targetId));
          const code = ccy ? ccy.code : '???';
          acc[code] = (acc[code] || 0) + Number(line.total || 0);
        });
        return acc;
      }, {});
    },
    saleGroupByPayment(saleList) {
      if (!Array.isArray(saleList)) return {};
      const currencies = this.findAllCurrency || [];
      return saleList.reduce((acc, sale) => {
        const headerCcy = currencies.find(c => Number(c.id) === Number(sale.currencyId));
        const headerCode = headerCcy ? headerCcy.code : '???';
        if (sale.payments && sale.payments.length > 0) {
          sale.payments.forEach(p => {
            const pmDetails = this.findAllPayment.find(pm => pm.id === p.paymentId);
            const pCcy = currencies.find(c => Number(c.id) === Number(p.currencyId || sale.currencyId));
            const pCode = pCcy ? pCcy.code : headerCode;
            const key = `${p.paymentId}_${pCode}`;
            if (!acc[key]) acc[key] = {
              amount: 0,
              totalSales: 0,
              paymentName: (pmDetails === null || pmDetails === void 0 ? void 0 : pmDetails.payment_name) || 'ອື່ນໆ',
              currencyCode: pCode
            };
            acc[key].amount += Number(p.amount || 0);
            let conv = Number(p.amount || 0);
            if (pCcy && Number(pCcy.isLocalCCY) !== 1) {
              const r = Number(p.exchangeRate || 1);
              conv = pCcy.exchangeDirection === 'foreign_to_local' ? conv * r : conv / r;
            }
            acc[key].totalSales += conv;
          });
        } else if (sale.payment) {
          const key = `${sale.payment.id}_${headerCode}`;
          if (!acc[key]) acc[key] = {
            amount: 0,
            totalSales: 0,
            paymentName: sale.payment.payment_name || 'ເງິນສົດ',
            currencyCode: headerCode
          };
          acc[key].amount += Number(sale.total || 0);
          acc[key].totalSales += this.getConvertedSaleTotal(sale);
        }
        return acc;
      }, {});
    },
    async loadSaleStatistic() {
      const dateRange = Object(common["c" /* firstAndLastDateOfLast6Months */])();
      const todayStr = new Date().toISOString().split('T')[0];
      this.isloading = true;
      try {
        var _this$currentSelected;
        const res = await this.$axios.get('api/sale/sumsaleYearly', {
          params: {
            date: dateRange,
            locationId: (_this$currentSelected = this.currentSelectedLocation) === null || _this$currentSelected === void 0 ? void 0 : _this$currentSelected.id,
            includeCards: false
          }
        });
        this.yearlySale = res.data;
        const monthFilter = todayStr.split('-')[1];
        const periods = [{
          key: 0,
          list: this.yearlySale.filter(el => el.bookingDate === todayStr)
        }, {
          key: 1,
          list: this.yearlySale.filter(el => el.bookingDate.split('-')[1] === monthFilter)
        }, {
          key: 2,
          list: this.yearlySale
        }];
        periods.forEach(p => {
          const grouped = this.saleGroupByPayment(p.list);
          const total = Object.values(grouped).reduce((s, i) => s + i.totalSales, 0);
          this.menusOverview[p.key].total = Object(common["e" /* getFormatNum */])(Math.round(total));
          this.menusOverview[p.key].groupedSales = grouped;
          this.menusOverview[p.key].groupedCurrency = this.getRawCurrencySummary(p.list);
        });
        this.generateDailyStatisticSale();
        this.monthGroupSale();
      } catch (err) {
        console.error(err);
      } finally {
        this.isloading = false;
      }
    },
    generateDailyStatisticSale() {
      const dailyMap = {};
      const monthStr = new Date().toISOString().split('-')[1];
      this.yearlySale.filter(el => el.bookingDate.split('-')[1] === monthStr).forEach(sale => {
        dailyMap[sale.bookingDate] = (dailyMap[sale.bookingDate] || 0) + this.getConvertedSaleTotal(sale);
      });
      const dates = Object.keys(dailyMap).sort();
      this.barSeriesForDailyStat = [{
        name: 'ຍອດລວມ (ກີບ)',
        data: dates.map(d => Math.round(dailyMap[d]))
      }];
      this.barOptionsForDailyStat = {
        ...this.barOptionsForDailyStat,
        xaxis: {
          categories: dates
        }
      };
      this.dailyState = dates.length > 0;
    },
    monthGroupSale() {
      if (!this.yearlySale.length) return;
      let grouped = {};
      this.yearlySale.forEach(sale => {
        const d = new Date(sale.bookingDate);
        const key = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}`;
        grouped[key] = (grouped[key] || 0) + this.getConvertedSaleTotal(sale);
      });
      const keys = Object.keys(grouped).sort();
      const values = keys.map(k => Math.round(grouped[k]));
      this.barSeriesForMonthlyStat = [{
        name: 'ຍອດຂາຍ (ກີບ)',
        data: values
      }];
      this.barOptionsForMonthlyStat = {
        ...this.barOptionsForMonthlyStat,
        xaxis: {
          ...this.barOptionsForMonthlyStat.xaxis,
          categories: keys
        }
      };
      this.monthlyState = values.length > 0;
    },
    async chooseTerminal() {
      const term = this.findAllTerminal.find(t => t.id === this.terminalSelected);
      if (term) {
        const loc = this.findAllLocation.find(l => l.id === term.locationId);
        if (loc) {
          this.setSelectedLocation(loc);
          this.terminalDialog = false;
          this.minstockComponentsKey++;
          await this.loadProduct(loc.id);
          await this.loadSaleStatistic();
          await this.loadTopSale();
        }
      }
    },
    async loadProduct(locationId) {
      this.isloading = true;
      try {
        const res = await this.$axios.get(`product_f/${locationId}`);
        this.initProduct(res.data.data);
      } catch (e) {
        console.log(e);
      }
      this.isloading = false;
    },
    async loadTopSale() {
      try {
        const res = await this.$axios.get('api/topsaleMinimart/?top=5');
        if (!this.$refs.topSaleChart) return;
        if (this.topSaleChartInstance) this.topSaleChartInstance.dispose();
        this.topSaleChartInstance = external_echarts_["init"](this.$refs.topSaleChart);
        const data = res.data.map(el => ({
          name: el.categ_name,
          value: +el.sale_count
        }));
        this.topSaleChartInstance.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'horizontal',
            bottom: '0%'
          },
          series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            itemStyle: {
              borderRadius: 10
            },
            data
          }]
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_adminvue_type_script_lang_js = (adminvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js,
  adminvue_type_template_id_20edbe42_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "20edbe42",
  "8e090fbe"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MinStockCard: __webpack_require__(875).default})


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 458:
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

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(461);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 461:
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

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(476);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 476:
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

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(460);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
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

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(414);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_barcodePrinter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);






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
  data() {
    return {
      productType: ['product', 'service', 'stock'],
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      imagesPreviewURL: [],
      files: null,
      barcodeImage: '',
      preview: false,
      previewSrc: null,
      title: 'ຈັດການສິນຄ້າ',
      validLocal: true,
      isLoading: false,
      taxRates: [],
      loadingTaxRates: false,
      // ✅ FIX: Initialize these so Vue sees them on render
      category: [],
      companyList: [],
      formData: {
        productId: null,
        pro_category: null,
        pro_id: null,
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: 1,
        companyId: null,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: null,
        stockUnitId: null,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: 1,
        validateStockOnSale: 1,
        vendorName: '',
        taxId: null,
        pro_image: []
      },
      rules: {
        nameRule: [v => !!v || 'ກະລຸນາໃສ່ຊື່ສິນຄ້າ'],
        priceRule: [v => !!/^\d+$/.test(v) || 'ກະລຸນາໃສ່ຕົວເລກເທົ່ານັ້ນ']
      }
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    host() {
      return this.$axios.defaults.baseURL;
    },
    taxRateOptions() {
      return this.taxRates.map(tax => ({
        id: tax.id,
        name: tax.name,
        displayRate: (parseFloat(tax.rate) * 100).toFixed(2) + '%',
        displayText: `${tax.name} (${(parseFloat(tax.rate) * 100).toFixed(2)}%)`,
        rate: tax.rate
      }));
    },
    selectedTaxRate() {
      return this.taxRates.find(tax => tax.id === this.formData.taxId);
    }
  },
  async mounted() {
    this.isLoading = true;
    await Promise.all([this.fetchCategory(), this.fetchCompany(), this.fetchTaxRates()]);
    if (this.headerId) {
      await this.fetchProId(this.headerId);
    }
    this.isLoading = false;
  },
  methods: {
    // ✅ FIX: Define fetchData so the warning disappears
    fetchData() {
      console.log("Price list refreshed");
      if (this.headerId) {
        this.fetchProId(this.headerId);
      }
    },
    formatNumber(val) {
      return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* getFormatNum */ "e"])(val);
    },
    printBarcode() {
      const formattedPrice = this.formatNumber(this.formData.pro_price);
      let windowContent = this.threeColPaper ? Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_5__[/* getBarcode2by2cmHtml */ "b"])(formattedPrice, this.barcodeImage) : Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_5__[/* getBarcodeNormalHtml */ "c"])(formattedPrice, this.barcodeImage);
      Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_5__[/* executePrintWindow */ "a"])(windowContent);
    },
    generateBarcode() {
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000;
      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(this.formData.barCode);
    },
    generateBarcodeImage(barcodeValue) {
      if (!barcodeValue) return;
      this.$nextTick(() => {
        const canvas = this.$refs.barcodeCanvas;
        if (canvas) {
          jsbarcode__WEBPACK_IMPORTED_MODULE_4___default()(canvas, barcodeValue, {
            format: 'code128',
            displayValue: true,
            fontSize: 12,
            width: 1,
            height: 13
          });
          this.barcodeImage = canvas.toDataURL();
        }
      });
    },
    async uploadFilesLocal() {
      if (!this.$refs.formLocal.validate()) return;
      this.isLoading = true;
      const fData = new FormData();
      const payload = {
        ...this.formData,
        pro_status: this.formData.isActive ? 1 : 0,
        selectedTaxRate: this.selectedTaxRate,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax()
      };
      fData.append('FORM', JSON.stringify(payload));
      if (this.files) {
        this.files.forEach(file => fData.append('files', file));
      }
      await this.$axios.post('uploadmulti_update', fData).then(() => {
        this.$emit('close-dialog');
        this.$emit('refresh');
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "l"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
      }).catch(er => {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalError2 */ "k"])(this.$swal, 'Error', er.response.data);
      });
      this.isLoading = false;
    },
    async fetchProId(id) {
      await this.$axios.post('/product_f_id', {
        proid: id
      }).then(res => {
        const el = res.data[0];
        const images = el.img_name ? res.data.map(i => ({
          name: i.img_name,
          path: i.img_path
        })) : [];
        this.formData = {
          productId: el.id,
          pro_category: el.pro_category,
          pro_id: el.pro_id,
          pro_name: el.pro_name,
          _category: el._category || 'product',
          pro_price: el.pro_price,
          pro_desc: el.pro_desc,
          pro_status: el.pro_status,
          pro_retail_price: el.retail_cost_percent,
          pro_cost_price: el.cost_price,
          companyId: el.companyId,
          minStock: el.minStock,
          barCode: el.barCode || '',
          receiveUnitId: el.receiveUnitId,
          stockUnitId: el.stockUnitId,
          costCurrencyId: el.costCurrencyId || 1,
          saleCurrencyId: el.saleCurrencyId || 1,
          pro_image: images,
          isActive: el.isActive == 1,
          validateStockOnSale: el.validateStockOnSale == 1,
          vendorName: el.vendorName,
          taxId: el.taxId || null
        };
        this.generateBarcodeImage(this.formData.barCode);
      });
    },
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) return 0;
      return parseFloat(this.formData.pro_price) * parseFloat(this.selectedTaxRate.rate);
    },
    calculateTotalWithTax() {
      return parseFloat(this.formData.pro_price || 0) + this.calculateTaxAmount();
    },
    async fetchTaxRates() {
      const res = await this.$axios.get('/api/tax/active');
      this.taxRates = res.data.data || [];
    },
    async fetchCategory() {
      const res = await this.$axios.get('category_f');
      this.category = res.data.map(el => ({
        categ_id: el.categ_id,
        categ_name: el.categ_name
      }));
    },
    async fetchCompany() {
      const res = await this.$axios.get('api/company/find');
      this.companyList = res.data.map(el => ({
        id: el.id,
        name: el.name
      }));
    },
    onFilesChange(payload) {
      this.files = payload;
      if (payload) {
        this.imagesPreviewURL = Array.from(payload).map(file => ({
          IMG_URL: URL.createObjectURL(file),
          NAME: file.name
        }));
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1);
      this.files.splice(idx, 1);
    },
    async deleteFileFrServ(idx) {
      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* confirmSwal */ "a"])(this.$swal, 'warning', async () => {
        this.isLoading = true;
        await this.$axios.post('/unlink_file', {
          img_name: this.formData.pro_image[idx].name
        }).then(() => {
          this.formData.pro_image.splice(idx, 1);
          Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "l"])(this.$swal, 'Succeed', 'ລຶບສຳເລັດ');
        });
        this.isLoading = false;
      });
    },
    triggerPriceListForm() {
      this.pricingRecordId = this.formData.productId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(413)["URL"]))

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_barcodePrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(503);



// ✅ IMPORT: Import the barcode logic (Adjust path to where you saved the file)


// Utils definition (kept from your original code)
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
      // This toggles the print size

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
        taxId: null,
        baseUnitId: null
      },
      rules: {
        nameRule: [v => !!v || 'ຊື່ສິນຄ້າຈຳເປັນ'],
        priceRule: [v => !!v || 'ລາຄາຈຳເປັນ'],
        currencyRule: [v => !!v || 'Currency is required']
      },
      category: [],
      companyList: [],
      findAllCurrency: [],
      files: []
    };
  },
  computed: {
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
    }

    // ✅ NOTE: barcode3by2cm and barcodeNormal are REMOVED from computed
    // They are now handled by the imported functions.
  },
  async mounted() {
    await Promise.all([this.fetchCategory(), this.fetchCompany(), this.fetchCurrency(), this.fetchTaxRates()]);
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
        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
      } catch (error) {
        console.error('Error loading tax rates:', error);
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
      if (canvas) {
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
    // ✅ REFACTORED: Printing logic using external helper
    printBarcode() {
      // 1. Get formatted price
      const formattedPrice = this.formatNumber(this.formData.pro_price);

      // 2. Select HTML template based on "threeColPaper" toggle
      let windowContent = '';
      if (this.threeColPaper) {
        // Calls the imported function for small paper
        windowContent = Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_2__[/* getBarcode2by2cmHtml */ "b"])(formattedPrice, this.barcodeImage);
      } else {
        // Calls the imported function for normal paper
        windowContent = Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_2__[/* getBarcodeNormalHtml */ "c"])(formattedPrice, this.barcodeImage);
      }

      // 3. Execute print
      Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_2__[/* executePrintWindow */ "a"])(windowContent);
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
    async fetchCurrency() {
      try {
        const response = await this.$axios.get('/api/currency/findAll');
        this.findAllCurrency = response.data.map(el => ({
          id: el.id,
          code: el.code
        }));
      } catch (error) {
        console.error('Error fetching currency:', error);
        this.findAllCurrency = [];
      }
    },
    onFilesChange(files) {
      this.files = files || [];
    },
    getFilePreview(file) {
      if (file && file instanceof File) {
        return URL.createObjectURL(file);
      }
      return '';
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.isloading = true;
      const formData = new FormData();
      this.formData.baseUnitId = this.formData.stockUnitId;
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
      try {
        const requests = this.findAllProductPriceListToCreate.map(item => {
          const newItem = {
            ...item,
            productId
          };
          return this.$axios.post(api, newItem);
        });
        const responses = await Promise.all(requests);
        this.clearProductPricesToCreate();
        return responses;
      } catch (error) {
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ໃນການເພີ່ມ price list');
        return null;
      }
    },
    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(413)["URL"]))

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(475);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(142);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110);
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

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(496);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("735d40bc", content, true)

/***/ }),

/***/ 496:
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

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("011483c6", content, true, context)
};

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=template&id=c7a1474c



















var PriceListFormvue_type_template_id_c7a1474c_render = function render() {
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

// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=template&id=c7a1474c

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
      // grades: ['A', 'B', 'C', 'D', 'E', 'F'],
      grades: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
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
          Object(common["l" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
        } catch (error) {
          return Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
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
          Object(common["l" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction has been deleted');
        } catch (error) {
          return Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
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
        return Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
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
  PriceListFormvue_type_template_id_c7a1474c_render,
  staticRenderFns,
  false,
  null,
  null,
  "23382228"
  
)

/* harmony default export */ var PriceListForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default})


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBarcode2by2cmHtml; });
/* unused harmony export getBarcode3by2cmHtml */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBarcodeNormalHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return executePrintWindow; });
// ~/util/barcodePrinter.js

/**
 * Generates HTML for 2x2cm barcode
 */
const getBarcode2by2cmHtml = (formattedPrice, barcodeImage) => {
  return `
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
              ລາຄາ: ${formattedPrice}
              <img src="${barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${formattedPrice}
              <img src="${barcodeImage}">
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
};

/**
 * Generates HTML for 3x2cm barcode
 * (Note: Your original code defined this but didn't use it in the print function, 
 * but I have included it here just in case)
 */
const getBarcode3by2cmHtml = (formattedPrice, barcodeImage) => {
  return `
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
        ລາຄາ:${formattedPrice}
      <img src="${barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${formattedPrice}
        <img src="${barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${formattedPrice}
        <img src="${barcodeImage}">
    </td>
  </tr>
</table>
</div>
</body>
</html>
`;
};

/**
 * Generates HTML for Normal barcode
 */
const getBarcodeNormalHtml = (formattedPrice, barcodeImage) => {
  return `
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
                            ລາຄາ:${formattedPrice}
                            </br>
                            <img src="${barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `;
};

/**
 * Handles opening the window and printing
 */
const executePrintWindow = htmlContent => {
  const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
  printWin.document.open();
  printWin.document.write(htmlContent);
  setTimeout(() => {
    printWin.print();
    printWin.close();
  }, 1000);
};

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(525);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4809edc9", content, true, context)
};

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(527);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53c7c341", content, true, context)
};

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

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

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
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

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(513);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e8a466fa", content, true)

/***/ }),

/***/ 513:
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

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(494);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(481);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=template&id=d3712508&scoped=true


















var ProductFormCreatevue_type_template_id_d3712508_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-overlay"
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-d3712508>", "</div>", [_vm._ssrNode("<div class=\"modal-content\" data-v-d3712508>", "</div>", [_c(VCard["a" /* default */], {
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "grey lighten-4 py-2 mb-4"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "label": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-package-variant-closed")]), _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
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
  }, [_c('div', {
    staticClass: "text-subtitle-2 primary--text mb-2"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ (General Information)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4",
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
      "items": _vm.companyList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": ""
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
      "items": _vm.category,
      "item-text": "categ_name",
      "item-value": "categ_id",
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": ""
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
      "value": _vm.formData.pro_id || 'AUTO',
      "label": "ໄອດີສິນຄ້າ",
      "disabled": "",
      "dense": "",
      "outlined": ""
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "8"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": ""
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
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "append-icon": "mdi-barcode-scan"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2 orange--text text--darken-3 mb-2"
  }, [_vm._v("ການກຳນົດລາຄາ ແລະ ພາສີ (Pricing & Tax)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
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
      "color": "error"
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
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລາຄາຂາຍ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "color": "success"
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
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.findAllCurrency,
      "item-text": "code",
      "item-value": "id",
      "label": "ສະກຸນເງິນ*",
      "dense": "",
      "outlined": ""
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
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.taxRateOptions,
      "item-text": "displayText",
      "item-value": "id",
      "label": "ອາກອນ (Tax)",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "dense": "",
      "color": "blue-grey lighten-5"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-around text-caption blue-grey--text text--darken-3"
  }, [_c('span', [_vm._v("Base: "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.formData.pro_price)))])]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "): "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))])]), _vm._v(" "), _c('span', {
    staticClass: "primary--text"
  }, [_vm._v("Total: "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "mt-n2 mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "text": "",
      "color": "primary"
    },
    on: {
      "click": _vm.triggerPriceListForm
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-layers-plus")]), _vm._v(" ຈັດການລາຄາຫຼາຍລະດັບ (Multi-level Price)\n                ")], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2 green--text text--darken-3 mb-2"
  }, [_vm._v("ສາງ ແລະ ການຈັດຊື້ (Inventory)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.unitList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": ""
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
      "items": _vm.unitList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": ""
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
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": ""
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
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": ""
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
      "color": "warning"
    },
    model: {
      value: _vm.formData.validateStockOnSale,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "validateStockOnSale", _vm._n($$v));
      },
      expression: "formData.validateStockOnSale"
    }
  })], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ (Description)",
      "rows": "3",
      "dense": "",
      "outlined": "",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  }), _vm._v(" "), _c(VFileInput["a" /* default */], {
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ຮູບພາບສິນຄ້າ",
      "dense": "",
      "outlined": "",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3 d-flex flex-column align-center",
    attrs: {
      "outlined": ""
    }
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "3 Column (Small Paper)",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.threeColPaper,
      callback: function ($$v) {
        _vm.threeColPaper = $$v;
      },
      expression: "threeColPaper"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("ສ້າງ Barcode")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "success",
      "disabled": !_vm.formData.barCode
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("ພິມ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-footer\" data-v-d3712508>", "</div>", [_vm._ssrNode("<div class=\"footer-actions\" data-v-d3712508>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "depressed": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("ຍົກເລີກ")]), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.valid,
      "depressed": ""
    },
    on: {
      "click": _vm.uploadFiles
    }
  }, [_vm._v("ບັນທຶກສິນຄ້າ")])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=template&id=d3712508&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=script&lang=js
var ProductFormCreatevue_type_script_lang_js = __webpack_require__(493);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductFormCreatevue_type_script_lang_js = (ProductFormCreatevue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(526)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormCreatevue_type_script_lang_js,
  ProductFormCreatevue_type_template_id_d3712508_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "d3712508",
  "45253468"
  
)

/* harmony default export */ var ProductFormCreate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(494);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(481);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=template&id=5e8ca846&scoped=true





















var ProductFormvue_type_template_id_5e8ca846_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-overlay"
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-5e8ca846>", "</div>", [_c(VDialog["a" /* default */], {
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
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-content\" data-v-5e8ca846>", "</div>", [_c(VCard["a" /* default */], {
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "grey lighten-4 py-2 mb-4"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "label": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-update")]), _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
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
  }, [_c('div', {
    staticClass: "text-subtitle-2 primary--text mb-2"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ (General Information)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4",
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
      "items": _vm.companyList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": ""
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
      "items": _vm.category,
      "item-text": "categ_name",
      "item-value": "categ_id",
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": ""
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
      "disabled": "",
      "label": "ໄອດີສິນຄ້າ",
      "dense": "",
      "outlined": ""
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
      "cols": "12",
      "sm": "8"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": ""
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
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "append-icon": "mdi-barcode-scan"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2 orange--text text--darken-3 mb-2"
  }, [_vm._v("ການກຳນົດລາຄາ ແລະ ພາສີ (Pricing & Tax)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
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
      "color": "error"
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
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລາຄາຂາຍ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "color": "success"
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
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.findAllCurrency,
      "item-text": "code",
      "item-value": "id",
      "label": "ສະກຸນເງິນ*",
      "dense": "",
      "outlined": ""
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
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.taxRateOptions,
      "item-text": "displayText",
      "item-value": "id",
      "label": "ອາກອນ (Tax)",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "dense": "",
      "color": "blue-grey lighten-5"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-around text-caption blue-grey--text text--darken-3"
  }, [_c('span', [_vm._v("Base: "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.formData.pro_price)))])]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "): "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))])]), _vm._v(" "), _c('span', {
    staticClass: "primary--text"
  }, [_vm._v("Total: "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "mt-n2 mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "text": "",
      "color": "primary"
    },
    on: {
      "click": _vm.triggerPriceListForm
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-layers-plus")]), _vm._v(" ຈັດການລາຄາຫຼາຍລະດັບ\n                ")], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2 green--text text--darken-3 mb-2"
  }, [_vm._v("ສາງ ແລະ ການຈັດຊື້ (Inventory)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.unitList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": ""
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
      "items": _vm.unitList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": ""
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
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": ""
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
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": ""
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
      "color": "warning"
    },
    model: {
      value: _vm.formData.validateStockOnSale,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "validateStockOnSale", _vm._n($$v));
      },
      expression: "formData.validateStockOnSale"
    }
  })], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ",
      "rows": "3",
      "dense": "",
      "outlined": "",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  }), _vm._v(" "), _c(VFileInput["a" /* default */], {
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ເພີ່ມຮູບພາບສິນຄ້າ",
      "dense": "",
      "outlined": "",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  }), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-2 mt-2",
    staticStyle: {
      "max-height": "200px",
      "overflow-y": "auto"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-caption font-weight-bold mb-2"
  }, [_vm._v("Image Management")]), _vm._v(" "), _vm._l(_vm.formData.pro_image, function (img, idx) {
    return _c('div', {
      key: `ex-${idx}`,
      staticClass: "d-flex align-center mb-1 grey lighten-5 pa-1 rounded"
    }, [_c(VAvatar["a" /* default */], {
      staticClass: "cursor-pointer",
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
      staticClass: "text-caption ml-2 flex-grow-1 text-truncate"
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
      staticClass: "d-flex align-center mb-1 blue lighten-5 pa-1 rounded"
    }, [_c(VAvatar["a" /* default */], {
      staticClass: "cursor-pointer",
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
      staticClass: "text-caption ml-2 flex-grow-1 text-truncate"
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
    }, [_vm._v("mdi-close-circle")])], 1)], 1);
  })], 2)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3 d-flex flex-column align-center",
    attrs: {
      "outlined": ""
    }
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "3 Column (Small Paper)",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.threeColPaper,
      callback: function ($$v) {
        _vm.threeColPaper = $$v;
      },
      expression: "threeColPaper"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("Generate")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "success",
      "disabled": !_vm.formData.barCode
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("Print")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-footer\" data-v-5e8ca846>", "</div>", [_vm._ssrNode("<div class=\"footer-actions\" data-v-5e8ca846>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "depressed": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("Close")]), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.validLocal,
      "depressed": ""
    },
    on: {
      "click": _vm.uploadFilesLocal
    }
  }, [_vm._v("Update Product")])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=template&id=5e8ca846&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=script&lang=js
var ProductFormvue_type_script_lang_js = __webpack_require__(492);

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductFormvue_type_script_lang_js = (ProductFormvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(524)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormvue_type_script_lang_js,
  ProductFormvue_type_template_id_5e8ca846_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "5e8ca846",
  "51248ea0"
  
)

/* harmony default export */ var ProductForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default,DiaImage: __webpack_require__(509).default,PriceListForm: __webpack_require__(501).default})


/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(500);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 522:
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

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(511);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
var VRating = __webpack_require__(542);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

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
  
  var style0 = __webpack_require__(521)
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

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5e8ca846_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(504);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5e8ca846_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5e8ca846_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5e8ca846_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5e8ca846_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".enhanced-dialog[data-v-5e8ca846],.enhanced-dialog *[data-v-5e8ca846],.v-application .enhanced-dialog[data-v-5e8ca846]{font-family:\"Noto Sans Lao\",sans-serif!important}.enhanced-dialog[data-v-5e8ca846] .text-subtitle-2,.enhanced-dialog[data-v-5e8ca846] .v-btn__content,.enhanced-dialog[data-v-5e8ca846] .v-input,.enhanced-dialog[data-v-5e8ca846] .v-label{font-family:\"Noto Sans Lao\",sans-serif!important}.modal-overlay[data-v-5e8ca846]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-5e8ca846],.modal-overlay[data-v-5e8ca846]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-5e8ca846]{background:#fff;flex-direction:column;overflow:hidden}.modal-content[data-v-5e8ca846]{flex:1;overflow-y:auto;padding-bottom:20px}.modal-footer[data-v-5e8ca846]{background:#f8f9fa;border-top:1px solid #e9ecef;bottom:0;padding:12px 20px;position:sticky;z-index:10}.footer-actions[data-v-5e8ca846]{display:flex;gap:8px;justify-content:flex-end}.modal-content[data-v-5e8ca846]::-webkit-scrollbar{width:6px}.modal-content[data-v-5e8ca846]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".enhanced-dialog[data-v-d3712508],.enhanced-dialog *[data-v-d3712508]{font-family:\"Noto Sans Lao\",sans-serif!important}.enhanced-dialog[data-v-d3712508] .text-caption,.enhanced-dialog[data-v-d3712508] .text-subtitle-2,.enhanced-dialog[data-v-d3712508] .v-alert__content,.enhanced-dialog[data-v-d3712508] .v-btn__content,.enhanced-dialog[data-v-d3712508] .v-chip__content,.enhanced-dialog[data-v-d3712508] .v-input,.enhanced-dialog[data-v-d3712508] .v-label,.enhanced-dialog[data-v-d3712508] .v-messages{font-family:\"Noto Sans Lao\",sans-serif!important}.modal-overlay[data-v-d3712508]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-d3712508],.modal-overlay[data-v-d3712508]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-d3712508]{background:#fff;flex-direction:column;overflow:hidden}.modal-content[data-v-d3712508]{flex:1;overflow-x:hidden;overflow-y:auto;padding-bottom:20px}.modal-footer[data-v-d3712508]{background:#f8f9fa;border-top:1px solid #e9ecef;bottom:0;box-shadow:0 -2px 4px rgba(0,0,0,.1);padding:12px 20px;position:sticky;z-index:10}.footer-actions[data-v-d3712508]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-d3712508]{height:100vh;width:100vw}.footer-actions[data-v-d3712508]{flex-direction:row;gap:8px}}@media (max-width:600px){.modal-footer[data-v-d3712508]{padding:8px 16px}.footer-actions[data-v-d3712508]{width:100%}.footer-actions .v-btn[data-v-d3712508]{flex:1}}.modal-content[data-v-d3712508]::-webkit-scrollbar{width:6px}.modal-content[data-v-d3712508]::-webkit-scrollbar-track{background:#f1f1f1}.modal-content[data-v-d3712508]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:10px}.modal-content[data-v-d3712508]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(130);
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

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(512);
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58);
/* harmony import */ var _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96);
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

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(452);

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
var ProductForm = __webpack_require__(520);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./components/product/ProductFormCreate.vue + 3 modules
var ProductFormCreate = __webpack_require__(519);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(162);

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

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3d1e885a", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map