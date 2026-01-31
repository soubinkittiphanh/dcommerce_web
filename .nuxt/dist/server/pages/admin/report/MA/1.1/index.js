exports.ids = [274];
exports.modules = {

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1341);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("294ef160", content, true, context)
};

/***/ }),

/***/ 1340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4240d66e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4240d66e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4240d66e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4240d66e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4240d66e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".balance-report[data-v-4240d66e]{background:linear-gradient(135deg,#f5f7fa,#c3cfe2);min-height:100vh}.header-card[data-v-4240d66e]{border-radius:16px!important}.filters-card[data-v-4240d66e],.summary-card[data-v-4240d66e]{border-radius:12px!important}.summary-card[data-v-4240d66e]{border-left:4px solid var(--v-primary-base);transition:transform .2s ease,box-shadow .2s ease}.summary-card[data-v-4240d66e]:hover{box-shadow:0 8px 25px rgba(0,0,0,.15)!important;transform:translateY(-4px)}.summary-details[data-v-4240d66e]{font-family:\"Roboto Mono\",monospace}.detail-row[data-v-4240d66e]{align-items:center;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;padding:8px 0}.detail-row[data-v-4240d66e]:last-child{border-bottom:none}.advance[data-v-4240d66e]{color:var(--v-success-base)!important}.settlement[data-v-4240d66e]{color:var(--v-error-base)!important}.ending[data-v-4240d66e]{color:var(--v-primary-base)!important}.positive[data-v-4240d66e]{color:var(--v-success-base)!important}.negative[data-v-4240d66e]{color:var(--v-error-base)!important}.zero[data-v-4240d66e]{color:var(--v-grey-base)!important}.ministry-cell[data-v-4240d66e]{max-width:250px}.amount-cell[data-v-4240d66e]{font-family:\"Roboto Mono\",monospace;font-weight:600;text-align:right}.search-field[data-v-4240d66e]{max-width:300px}.total-row[data-v-4240d66e]{background:linear-gradient(135deg,rgba(var(--v-primary-base),.1) 0,rgba(var(--v-primary-base),.05) 100%);border-top:2px solid var(--v-primary-base)}.detail-grid .detail-item[data-v-4240d66e]{align-items:center;border-bottom:1px solid rgba(0,0,0,.08);display:flex;justify-content:space-between;padding:12px 0}.detail-grid .detail-item[data-v-4240d66e]:last-child{border-bottom:none}.calculation-formula[data-v-4240d66e]{background:#fff;border-left:4px solid var(--v-primary-base);border-radius:8px;font-family:\"Roboto Mono\",monospace;font-size:16px;padding:16px;text-align:center}.gap-3>*+*[data-v-4240d66e]{margin-left:12px}.balance-report[data-v-4240d66e]{animation:fadeIn-4240d66e .5s ease-out}@keyframes fadeIn-4240d66e{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width:768px){.header-card .d-flex[data-v-4240d66e]{flex-direction:column;gap:16px}.search-field[data-v-4240d66e]{max-width:100%}}@media print{.balance-report[data-v-4240d66e]{background:#fff!important}.filters-card[data-v-4240d66e],.header-card[data-v-4240d66e]{border:1px solid #ddd!important;box-shadow:none!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1658:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(451);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/1.1/index.vue?vue&type=template&id=4240d66e&scoped=true
















var _1_1vue_type_template_id_4240d66e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VCard["a" /* default */], {
    staticClass: "header-card mb-6",
    attrs: {
      "elevation": "4"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center w-100"
  }, [_c('div', [_c('h2', {
    staticClass: "font-weight-bold mb-1"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "large": "",
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-chart-line")]), _vm._v("\n            ລາຍງານເບີກຈ່າຍ\n          ")], 1), _vm._v(" "), _c('p', {
    staticClass: "mb-0 opacity-90"
  }, [_vm._v("\n            " + _vm._s(_vm.formatPeriod()) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex gap-3"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "white",
      "outlined": "",
      "disabled": _vm.loading,
      "large": ""
    },
    on: {
      "click": _vm.exportToExcel
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            ສົ່ງອອກ Excel\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "white",
      "outlined": "",
      "large": ""
    },
    on: {
      "click": _vm.printReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n            ພິມ\n          ")], 1)], 1)])])], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "filters-card mb-6",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "secondary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-filter")]), _vm._v("\n      ຕົວກອງ\n    ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-6"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.months,
      "item-text": "text",
      "item-value": "value",
      "label": "ເດືອນ",
      "outlined": "",
      "dense": ""
    },
    on: {
      "change": _vm.applyFilters
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-calendar-month")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.filters.month,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "month", $$v);
      },
      expression: "filters.month"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.years,
      "label": "ປີ",
      "outlined": "",
      "dense": ""
    },
    on: {
      "change": _vm.applyFilters
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-calendar")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.filters.year,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "year", $$v);
      },
      expression: "filters.year"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.ministryOptions,
      "item-text": "text",
      "item-value": "value",
      "label": "ກະຊວງ",
      "outlined": "",
      "dense": "",
      "clearable": ""
    },
    on: {
      "change": _vm.applyFilters
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-office-building")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.filters.ministryId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "ministryId", $$v);
      },
      expression: "filters.ministryId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.currencyOptions,
      "item-text": "text",
      "item-value": "value",
      "label": "ສະກຸນເງິນ",
      "outlined": "",
      "dense": "",
      "clearable": ""
    },
    on: {
      "change": _vm.applyFilters
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-currency-usd")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.filters.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "currencyId", $$v);
      },
      expression: "filters.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex align-center",
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "1"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "icon": "",
      "large": ""
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-refresh")])], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm.currencySummaries.length ? _vm._ssrNode("<div class=\"mb-6\" data-v-4240d66e>", "</div>", [_c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "lightprimary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-chart-pie")]), _vm._v("\n        ສະຫຼຸບຕາມສະກຸນເງິນ\n      ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-6"
  }, [_c(VRow["a" /* default */], _vm._l(_vm.currencySummaries, function (curr) {
    return _c(VCol["a" /* default */], {
      key: curr.currencyCode,
      attrs: {
        "cols": "12",
        "sm": "6",
        "md": "4",
        "lg": "3"
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "summary-card",
      attrs: {
        "elevation": "4",
        "outlined": ""
      }
    }, [_c(components_VCard["d" /* VCardTitle */], {
      staticClass: "pb-2"
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center w-100"
    }, [_c(VChip["a" /* default */], {
      attrs: {
        "color": "primary",
        "dark": ""
      }
    }, [_vm._v("\n                    " + _vm._s(curr.currencyCode) + "\n                  ")]), _vm._v(" "), _c('span', {
      staticClass: "text-h5 font-weight-bold primary--text"
    }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(curr.endingBalance)) + "\n                  ")])], 1)]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c('div', {
      staticClass: "summary-details"
    }, [_c('div', {
      staticClass: "detail-row"
    }, [_c('span', [_vm._v("ຍອດຍົກມາ:")]), _vm._v(" "), _c('span', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.formatAmount(curr.balanceForward)))])]), _vm._v(" "), _c('div', {
      staticClass: "detail-row advance"
    }, [_c('span', [_vm._v("+ ລາຍຈ່າຍ:")]), _vm._v(" "), _c('span', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.formatAmount(curr.newAdvances)))])]), _vm._v(" "), _c('div', {
      staticClass: "detail-row settlement"
    }, [_c('span', [_vm._v("- ການຊຳລະ:")]), _vm._v(" "), _c('span', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.formatAmount(curr.newSettlements)))])])])])], 1)], 1);
  }), 1)], 1)], 1)], 1) : _vm._e(), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center w-100"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-table")]), _vm._v("\n          ລາຍງານລະອຽດ\n        ")], 1), _vm._v(" "), _c(VTextField["a" /* default */], {
    staticClass: "search-field",
    staticStyle: {
      "max-width": "300px"
    },
    attrs: {
      "label": "ຄົ້ນຫາ...",
      "prepend-inner-icon": "mdi-magnify",
      "hide-details": "",
      "single-line": "",
      "outlined": "",
      "dense": "",
      "dark": ""
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1)]), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "text-center pa-12"
  }, [_c(VProgressCircular["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "size": 70,
      "width": 7,
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "text-h6 primary--text"
  }, [_vm._v("ກຳລັງໂຫຼດຂໍ້ມູນ...")])], 1) : _c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.tableHeaders,
      "items": _vm.filteredData,
      "search": _vm.search,
      "hide-default-footer": "",
      "items-per-page": -1
    },
    scopedSlots: _vm._u([{
      key: "item.ministry",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "ministry-cell"
        }, [_c('div', {
          staticClass: "font-weight-bold text-body-1"
        }, [_vm._v(_vm._s(item.ministryCode))]), _vm._v(" "), _c('div', {
          staticClass: "text--secondary"
        }, [_vm._v(_vm._s(item.ministryName))])])];
      }
    }, {
      key: "item.currencyCode",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": "secondary",
            "outlined": "",
            "small": ""
          }
        }, [_vm._v("\n          " + _vm._s(item.currencyCode) + "\n        ")])];
      }
    }, {
      key: "item.balanceForward",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "amount-cell"
        }, [_vm._v("\n          " + _vm._s(_vm.formatAmount(item.balanceForward)) + "\n        ")])];
      }
    }, {
      key: "item.newAdvances",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "amount-cell advance"
        }, [_vm._v("\n          " + _vm._s(_vm.formatAmount(item.newAdvances)) + "\n        ")])];
      }
    }, {
      key: "item.newSettlements",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "amount-cell settlement"
        }, [_vm._v("\n          " + _vm._s(_vm.formatAmount(item.newSettlements)) + "\n        ")])];
      }
    }, {
      key: "item.endingBalance",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "amount-cell ending",
          class: _vm.getBalanceClass(item.endingBalance)
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getBalanceColor(item.endingBalance),
            "outlined": item.endingBalance === 0,
            "small": ""
          }
        }, [_vm._v("\n            " + _vm._s(_vm.formatAmount(item.endingBalance)) + "\n          ")])], 1)];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "icon": ""
          },
          on: {
            "click": function ($event) {
              return _vm.viewDetails(item);
            }
          }
        }, [_c(VIcon["a" /* default */], [_vm._v("mdi-eye")])], 1)];
      }
    }, _vm.filteredData.length ? {
      key: "body.append",
      fn: function () {
        return [_c('tr', {
          staticClass: "total-row"
        }, [_c('td', {
          staticClass: "font-weight-bold primary--text",
          attrs: {
            "colspan": "2"
          }
        }, [_vm._v("\n            ລວມທັງໝົດ\n          ")]), _vm._v(" "), _c('td', {
          staticClass: "amount-cell font-weight-bold"
        }, [_vm._v(_vm._s(_vm.formatAmount(_vm.totals.balanceForward)))]), _vm._v(" "), _c('td', {
          staticClass: "amount-cell font-weight-bold"
        }, [_vm._v(_vm._s(_vm.formatAmount(_vm.totals.newAdvances)))]), _vm._v(" "), _c('td', {
          staticClass: "amount-cell font-weight-bold"
        }, [_vm._v(_vm._s(_vm.formatAmount(_vm.totals.newSettlements)))]), _vm._v(" "), _c('td', {
          staticClass: "amount-cell font-weight-bold"
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "color": "primary",
            "dark": ""
          }
        }, [_vm._v("\n              " + _vm._s(_vm.formatAmount(_vm.totals.endingBalance)) + "\n            ")])], 1), _vm._v(" "), _c('td')])];
      },
      proxy: true
    } : null], null, true)
  }), _vm._v(" "), !_vm.loading && !_vm.filteredData.length ? _c('div', {
    staticClass: "text-center pa-12"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-inbox-outline")]), _vm._v(" "), _c('h3', {
    staticClass: "text-h6 mt-4 grey--text"
  }, [_vm._v("ບໍ່ມີຂໍ້ມູນ")]), _vm._v(" "), _c('p', {
    staticClass: "grey--text"
  }, [_vm._v("ກະລຸນາເລືອກຕົວກອງແລ້ວລອງໃໝ່")])], 1) : _vm._e()], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600",
      "persistent": ""
    },
    model: {
      value: _vm.detailsDialog,
      callback: function ($$v) {
        _vm.detailsDialog = $$v;
      },
      expression: "detailsDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n        ລາຍລະອຽດຍອດເງິນ\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": function ($event) {
        _vm.detailsDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _vm.selectedItem ? _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-6"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "detail-grid"
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-4 mb-4",
    attrs: {
      "flat": "",
      "outlined": ""
    }
  }, [_c('h4', {
    staticClass: "text-h6 primary--text mb-3"
  }, [_vm._v("ຂໍ້ມູນກະຊວງ")]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ກະຊວງ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedItem.ministryCode) + " - " + _vm._s(_vm.selectedItem.ministryName))])]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ສະກຸນເງິນ:")]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "secondary",
      "outlined": "",
      "small": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.selectedItem.currencyCode) + "\n                  ")])], 1)]), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4 mb-4",
    attrs: {
      "flat": "",
      "outlined": ""
    }
  }, [_c('h4', {
    staticClass: "text-h6 primary--text mb-3"
  }, [_vm._v("ລາຍລະອຽດຍອດເງິນ")]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('span', {}, [_vm._v("ຍອດຍົກມາ:")]), _vm._v(" "), _c('span', {
    staticClass: "amount"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.selectedItem.balanceForward)))])]), _vm._v(" "), _c('div', {
    staticClass: "detail-item advance"
  }, [_c('span', {}, [_vm._v("ລາຍຈ່າຍ:")]), _vm._v(" "), _c('span', {
    staticClass: "amount"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.selectedItem.newAdvances)))])]), _vm._v(" "), _c('div', {
    staticClass: "detail-item settlement"
  }, [_c('span', {}, [_vm._v("ການຊຳລະ:")]), _vm._v(" "), _c('span', {
    staticClass: "amount"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.selectedItem.newSettlements)))])]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "detail-item ending"
  }, [_c('span', {
    staticClass: "font-weight-bold text-h6"
  }, [_vm._v("ຍອດເຫຼືອ:")]), _vm._v(" "), _c('span', {
    staticClass: "amount text-h6 font-weight-bold",
    class: _vm.getBalanceClass(_vm.selectedItem.endingBalance)
  }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(_vm.selectedItem.endingBalance)) + "\n                  ")])])], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4",
    attrs: {
      "flat": "",
      "color": "grey lighten-4"
    }
  }, [_c('h4', {
    staticClass: "text-h6 primary--text mb-3"
  }, [_vm._v("ການຄິດໄລ່")]), _vm._v(" "), _c('div', {
    staticClass: "calculation-formula text-body-1 font-weight-medium"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatAmount(_vm.selectedItem.balanceForward)) + " + \n                  " + _vm._s(_vm.formatAmount(_vm.selectedItem.newAdvances)) + " - \n                  " + _vm._s(_vm.formatAmount(_vm.selectedItem.newSettlements)) + " = \n                  "), _c('strong', {
    staticClass: "primary--text"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.selectedItem.endingBalance)))])])])], 1)])], 1)], 1) : _vm._e()], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/report/MA/1.1/index.vue?vue&type=template&id=4240d66e&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/1.1/index.vue?vue&type=script&lang=js
var _1_1vue_type_script_lang_js = __webpack_require__(864);

// CONCATENATED MODULE: ./pages/admin/report/MA/1.1/index.vue?vue&type=script&lang=js
 /* harmony default export */ var MA_1_1vue_type_script_lang_js = (_1_1vue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/report/MA/1.1/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1340)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_1_1vue_type_script_lang_js,
  _1_1vue_type_template_id_4240d66e_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "4240d66e",
  "30455386"
  
)

/* harmony default export */ var _1_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams, URL) {/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);













/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'BalanceReportLao',
  data() {
    return {
      loading: false,
      search: '',
      detailsDialog: false,
      selectedItem: null,
      filters: {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        ministryId: '',
        currencyId: ''
      },
      months: [{
        text: 'ມັງກອນ',
        value: 1
      }, {
        text: 'ກຸມພາ',
        value: 2
      }, {
        text: 'ມີນາ',
        value: 3
      }, {
        text: 'ເມສາ',
        value: 4
      }, {
        text: 'ພຶດສະພາ',
        value: 5
      }, {
        text: 'ມິຖຸນາ',
        value: 6
      }, {
        text: 'ກໍລະກົດ',
        value: 7
      }, {
        text: 'ສິງຫາ',
        value: 8
      }, {
        text: 'ກັນຍາ',
        value: 9
      }, {
        text: 'ຕຸລາ',
        value: 10
      }, {
        text: 'ພະຈິກ',
        value: 11
      }, {
        text: 'ທັນວາ',
        value: 12
      }],
      years: [],
      ministries: [],
      currencies: [],
      reportData: [],
      currencySummaries: []
    };
  },
  computed: {
    tableHeaders() {
      return [{
        text: 'ກະຊວງ',
        value: 'ministry',
        sortable: true,
        width: 250
      }, {
        text: 'ສະກຸນເງິນ',
        value: 'currencyCode',
        sortable: true,
        width: 120,
        align: 'center'
      }, {
        text: 'ຍອດຍົກມາ',
        value: 'balanceForward',
        sortable: true,
        width: 150,
        align: 'right'
      }, {
        text: 'ລາຍຈ່າຍໃໝ່',
        value: 'newAdvances',
        sortable: true,
        width: 150,
        align: 'right'
      }, {
        text: 'ການຊຳລະ',
        value: 'newSettlements',
        sortable: true,
        width: 150,
        align: 'right'
      }, {
        text: 'ຍອດເຫຼືອ',
        value: 'endingBalance',
        sortable: true,
        width: 150,
        align: 'right'
      }, {
        text: 'ການດຳເນີນການ',
        value: 'actions',
        sortable: false,
        width: 100,
        align: 'center'
      }];
    },
    ministryOptions() {
      return [{
        text: 'ກະຊວງທັງໝົດ',
        value: ''
      }, ...this.ministries.map(ministry => ({
        text: `${ministry.ministryCode} - ${ministry.ministryName}`,
        value: ministry.id
      }))];
    },
    currencyOptions() {
      return [{
        text: 'ສະກຸນເງິນທັງໝົດ',
        value: ''
      }, ...this.currencies.map(currency => ({
        text: currency.code,
        value: currency.id
      }))];
    },
    reportDataWithBalance() {
      return this.reportData.map(item => ({
        ...item,
        endingBalance: parseFloat(item.balanceForward || 0) + parseFloat(item.newAdvances || 0) - parseFloat(item.newSettlements || 0)
      }));
    },
    filteredData() {
      if (!this.search) return this.reportDataWithBalance;
      return this.reportDataWithBalance.filter(item => {
        var _item$ministryName, _item$ministryCode, _item$currencyCode;
        return ((_item$ministryName = item.ministryName) === null || _item$ministryName === void 0 ? void 0 : _item$ministryName.toLowerCase().includes(this.search.toLowerCase())) || ((_item$ministryCode = item.ministryCode) === null || _item$ministryCode === void 0 ? void 0 : _item$ministryCode.toLowerCase().includes(this.search.toLowerCase())) || ((_item$currencyCode = item.currencyCode) === null || _item$currencyCode === void 0 ? void 0 : _item$currencyCode.toLowerCase().includes(this.search.toLowerCase()));
      });
    },
    totals() {
      return this.filteredData.reduce((acc, item) => {
        acc.balanceForward += parseFloat(item.balanceForward || 0);
        acc.newAdvances += parseFloat(item.newAdvances || 0);
        acc.newSettlements += parseFloat(item.newSettlements || 0);
        acc.endingBalance += parseFloat(item.endingBalance || 0);
        return acc;
      }, {
        balanceForward: 0,
        newAdvances: 0,
        newSettlements: 0,
        endingBalance: 0
      });
    }
  },
  async created() {
    this.initializeYears();
    await this.loadInitialData();
    await this.applyFilters();
  },
  methods: {
    initializeYears() {
      const currentYear = new Date().getFullYear();
      for (let i = currentYear; i >= currentYear - 5; i--) {
        this.years.push(i);
      }
    },
    async loadInitialData() {
      try {
        this.loading = true;
        const [ministriesRes, currenciesRes] = await Promise.all([this.$axios.get('/api/ministries'), this.$axios.get('/api/currency/findAll')]);
        this.ministries = ministriesRes.data.data || ministriesRes.data;
        this.currencies = currenciesRes.data.data || currenciesRes.data;
      } catch (error) {
        var _this$$toast;
        console.error('Error loading initial data:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ');
      } finally {
        this.loading = false;
      }
    },
    async applyFilters() {
      this.loading = true;
      try {
        const monthStart = `${this.filters.year}-${String(this.filters.month).padStart(2, '0')}-01`;
        const lastDay = new Date(this.filters.year, this.filters.month, 0).getDate();
        const monthEnd = `${this.filters.year}-${String(this.filters.month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
        const params = new URLSearchParams({
          monthStart,
          monthEnd
        });
        if (this.filters.ministryId) params.append('ministryId', this.filters.ministryId);
        if (this.filters.currencyId) params.append('currencyId', this.filters.currencyId);
        const response = await this.$axios.get(`/api/money-advances/report/balance-report?${params}`);
        if (response.data.success) {
          this.reportData = response.data.data || [];
          this.calculateCurrencySummaries();
        }
      } catch (error) {
        var _this$$toast2;
        console.error('Error loading report:', error);
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດລາຍງານ');
      } finally {
        this.loading = false;
      }
    },
    calculateCurrencySummaries() {
      const summaryMap = new Map();
      this.reportDataWithBalance.forEach(item => {
        const key = item.currencyCode;
        if (!summaryMap.has(key)) {
          summaryMap.set(key, {
            currencyCode: item.currencyCode,
            currencyName: item.currencyName,
            balanceForward: 0,
            newAdvances: 0,
            newSettlements: 0,
            endingBalance: 0
          });
        }
        const summary = summaryMap.get(key);
        summary.balanceForward += parseFloat(item.balanceForward || 0);
        summary.newAdvances += parseFloat(item.newAdvances || 0);
        summary.newSettlements += parseFloat(item.newSettlements || 0);
        summary.endingBalance += parseFloat(item.endingBalance || 0);
      });
      this.currencySummaries = Array.from(summaryMap.values());
    },
    resetFilters() {
      this.filters = {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        ministryId: '',
        currencyId: ''
      };
      this.applyFilters();
    },
    formatAmount(amount) {
      if (!amount && amount !== 0) return '0.00';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    },
    formatPeriod() {
      var _this$months$find;
      const monthName = (_this$months$find = this.months.find(m => m.value === this.filters.month)) === null || _this$months$find === void 0 ? void 0 : _this$months$find.text;
      return `${monthName} ${this.filters.year}`;
    },
    getBalanceClass(balance) {
      const amount = parseFloat(balance || 0);
      if (amount > 0) return 'positive';
      if (amount < 0) return 'negative';
      return 'zero';
    },
    getBalanceColor(balance) {
      const amount = parseFloat(balance || 0);
      if (amount > 0) return 'success';
      if (amount < 0) return 'error';
      return 'grey';
    },
    viewDetails(item) {
      this.selectedItem = item;
      this.detailsDialog = true;
    },
    exportToExcel() {
      var _this$$toast4;
      if (!this.reportDataWithBalance.length) {
        var _this$$toast3;
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.warning('ບໍ່ມີຂໍ້ມູນໃຫ້ສົ່ງອອກ');
        return;
      }
      const exportData = this.reportDataWithBalance.map((item, index) => ({
        'ລຳດັບ': index + 1,
        'ລະຫັດກະຊວງ': item.ministryCode,
        'ຊື່ກະຊວງ': item.ministryName,
        'ສະກຸນເງິນ': item.currencyCode,
        'ຍອດຍົກມາ': item.balanceForward,
        'ລາຍຈ່າຍໃໝ່': item.newAdvances,
        'ການຊຳລະ': item.newSettlements,
        'ຍອດເຫຼືອ': item.endingBalance
      }));
      const headers = Object.keys(exportData[0]);
      const csvContent = [headers.join(','), ...exportData.map(row => headers.map(header => `"${(row[header] || '').toString().replace(/"/g, '""')}"`).join(','))].join('\n');
      const blob = new Blob(['\uFEFF' + csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `ລາຍງານຍອດເງິນ-${this.formatPeriod().replace(' ', '-')}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.success('ສົ່ງອອກສຳເລັດແລ້ວ');
    },
    printReport() {
      // Create print content
      const printContent = this.generatePrintContent();

      // Create new window for printing
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>ລາຍງານເບີກຈ່າຍ - ${this.formatPeriod()}</title>
          <style>
            body {
              font-family: 'Segoe UI', Arial, sans-serif;
              margin: 20px;
              color: #333;
              line-height: 1.4;
            }
            .print-header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #333;
              padding-bottom: 15px;
            }
            .print-header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
            }
            .print-header .period {
              font-size: 16px;
              color: #666;
              margin-top: 5px;
            }
            .summary-section {
              margin-bottom: 25px;
            }
            .summary-title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 15px;
              color: #333;
            }
            .summary-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 15px;
              margin-bottom: 20px;
            }
            .summary-item {
              border: 1px solid #ddd;
              padding: 12px;
              border-radius: 4px;
            }
            .summary-item .currency {
              font-weight: bold;
              font-size: 14px;
            }
            .summary-item .amount {
              font-size: 16px;
              font-weight: bold;
              margin: 5px 0;
            }
            .summary-item .details {
              font-size: 12px;
              color: #666;
            }
            .data-table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              font-size: 12px;
            }
            .data-table th {
              background-color: #f5f5f5;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
              font-weight: bold;
            }
            .data-table td {
              border: 1px solid #ddd;
              padding: 6px 8px;
            }
            .data-table tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            .amount-cell {
              text-align: right;
              font-family: 'Courier New', monospace;
            }
            .positive {
              color: #28a745;
            }
            .negative {
              color: #dc3545;
            }
            .zero {
              color: #6c757d;
            }
            .total-row {
              font-weight: bold;
              background-color: #e9ecef !important;
            }
            .total-row td {
              border-top: 2px solid #333;
            }
            .print-footer {
              margin-top: 30px;
              padding-top: 15px;
              border-top: 1px solid #ddd;
              text-align: center;
              font-size: 11px;
              color: #666;
            }
            @media print {
              body {
                margin: 0;
              }
              .summary-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
        </html>
      `);
      printWindow.document.close();

      // Wait for content to load, then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    },
    generatePrintContent() {
      const currentDate = new Date().toLocaleDateString('en-GB');

      // Generate summary cards HTML
      let summaryHtml = '';
      if (this.currencySummaries.length > 0) {
        summaryHtml = `
          <div class="summary-section">
            <div class="summary-title">ສະຫຼຸບຕາມສະກຸນເງິນ</div>
            <div class="summary-grid">
              ${this.currencySummaries.map(curr => `
                <div class="summary-item">
                  <div class="currency">${curr.currencyCode}</div>
                  <div class="amount">${this.formatAmount(curr.endingBalance)}</div>
                  <div class="details">
                    ຍອດຍົກມາ: ${this.formatAmount(curr.balanceForward)}<br>
                    ລາຍຈ່າຍ: ${this.formatAmount(curr.newAdvances)}<br>
                    ການຊຳລະ: ${this.formatAmount(curr.newSettlements)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Generate table HTML
      const tableRows = this.filteredData.map(item => `
        <tr>
          <td>
            <strong>${item.ministryCode || ''}</strong><br>
            <small style="color: #666;">${item.ministryName || ''}</small>
          </td>
          <td style="text-align: center;">
            <span style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px;">
              ${item.currencyCode || ''}
            </span>
          </td>
          <td class="amount-cell">${this.formatAmount(item.balanceForward)}</td>
          <td class="amount-cell" style="color: #28a745;">${this.formatAmount(item.newAdvances)}</td>
          <td class="amount-cell" style="color: #dc3545;">${this.formatAmount(item.newSettlements)}</td>
          <td class="amount-cell ${this.getBalanceClass(item.endingBalance)}">
            ${this.formatAmount(item.endingBalance)}
          </td>
        </tr>
      `).join('');

      // Generate totals row
      const totalsRow = `
        <tr class="total-row">
          <td colspan="2"><strong>ລວມທັງໝົດ</strong></td>
          <td class="amount-cell"><strong>${this.formatAmount(this.totals.balanceForward)}</strong></td>
          <td class="amount-cell"><strong>${this.formatAmount(this.totals.newAdvances)}</strong></td>
          <td class="amount-cell"><strong>${this.formatAmount(this.totals.newSettlements)}</strong></td>
          <td class="amount-cell"><strong>${this.formatAmount(this.totals.endingBalance)}</strong></td>
        </tr>
      `;
      return `
        <div class="print-header">
          <h1>ລາຍງານເບີກຈ່າຍ</h1>
          <div class="period">${this.formatPeriod()}</div>
        </div>
        
        ${summaryHtml}
        
        <div class="summary-title">ລາຍງານລະອຽດ</div>
        <table class="data-table">
          <thead>
            <tr>
              <th>ກະຊວງ</th>
              <th>ສະກຸນເງິນ</th>
              <th>ຍອດຍົກມາ</th>
              <th>ລາຍຈ່າຍໃໝ່</th>
              <th>ການຊຳລະ</th>
              <th>ຍອດເຫຼືອ</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
            ${totalsRow}
          </tbody>
        </table>
        
        <div class="print-footer">
          ພິມເມື່ອ: ${currentDate} | ລາຍງານເບີກຈ່າຍ
        </div>
      `;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(412)["URLSearchParams"], __webpack_require__(412)["URL"]))

/***/ })

};;
//# sourceMappingURL=index.js.map