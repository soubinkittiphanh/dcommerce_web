exports.ids = [277];
exports.modules = {

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1347);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6bdebfb8", content, true, context)
};

/***/ }),

/***/ 1346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_080cf9b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1013);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_080cf9b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_080cf9b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_080cf9b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_080cf9b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1347:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bank-balance-report[data-v-080cf9b6]{background:linear-gradient(135deg,#f5f7fa,#c3cfe2);min-height:100vh}.header-card[data-v-080cf9b6]{border-radius:16px!important}.filters-card[data-v-080cf9b6],.summary-card[data-v-080cf9b6]{border-radius:12px!important}.summary-card[data-v-080cf9b6]{border-left:4px solid var(--v-primary-base);transition:transform .2s ease,box-shadow .2s ease}.summary-card[data-v-080cf9b6]:hover{box-shadow:0 8px 25px rgba(0,0,0,.15)!important;transform:translateY(-4px)}.summary-details[data-v-080cf9b6]{font-family:\"Roboto Mono\",monospace}.detail-row[data-v-080cf9b6]{align-items:center;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;padding:8px 0}.detail-row[data-v-080cf9b6]:last-child{border-bottom:none}.advance[data-v-080cf9b6]{color:var(--v-success-base)!important}.settlement[data-v-080cf9b6]{color:var(--v-error-base)!important}.ending[data-v-080cf9b6]{color:var(--v-primary-base)!important}.positive[data-v-080cf9b6]{color:var(--v-success-base)!important}.negative[data-v-080cf9b6]{color:var(--v-error-base)!important}.zero[data-v-080cf9b6]{color:var(--v-grey-base)!important}.account-cell[data-v-080cf9b6]{max-width:280px}.bank-cell[data-v-080cf9b6]{max-width:200px}.amount-cell[data-v-080cf9b6]{font-weight:600;text-align:right}.amount-cell[data-v-080cf9b6],.monospace[data-v-080cf9b6]{font-family:\"Roboto Mono\",monospace}.search-field[data-v-080cf9b6]{max-width:300px}.total-row[data-v-080cf9b6]{background:linear-gradient(135deg,rgba(var(--v-primary-base),.1) 0,rgba(var(--v-primary-base),.05) 100%);border-top:2px solid var(--v-primary-base)}.detail-grid .detail-item[data-v-080cf9b6]{align-items:center;border-bottom:1px solid rgba(0,0,0,.08);display:flex;justify-content:space-between;padding:12px 0}.detail-grid .detail-item[data-v-080cf9b6]:last-child{border-bottom:none}.calculation-formula[data-v-080cf9b6]{background:#fff;border-left:4px solid var(--v-primary-base);border-radius:8px;font-family:\"Roboto Mono\",monospace;font-size:16px;padding:16px;text-align:center}.gap-3>*+*[data-v-080cf9b6]{margin-left:12px}.gap-1>*+*[data-v-080cf9b6]{margin-left:4px}.bank-balance-report[data-v-080cf9b6]{animation:fadeIn-080cf9b6 .5s ease-out}@keyframes fadeIn-080cf9b6{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width:768px){.header-card .d-flex[data-v-080cf9b6]{flex-direction:column;gap:16px}.search-field[data-v-080cf9b6]{max-width:100%}.account-cell[data-v-080cf9b6],.bank-cell[data-v-080cf9b6]{max-width:200px}}@media print{.bank-balance-report[data-v-080cf9b6]{background:#fff!important}.filters-card[data-v-080cf9b6],.header-card[data-v-080cf9b6]{border:1px solid #ddd!important;box-shadow:none!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1665:
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
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(499);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/2.1/index.vue?vue&type=template&id=080cf9b6&scoped=true



















var _2_1vue_type_template_id_080cf9b6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "bank-balance-report",
    attrs: {
      "fluid": ""
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "header-card mb-6",
    attrs: {
      "elevation": "4"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center w-100"
  }, [_c('div', [_c('h2', {
    staticClass: "text-h4 font-weight-bold mb-1"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "large": "",
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-bank")]), _vm._v("\n            ລາຍງານຍອດເງິນໃນບັນຊີທະນາຄານ\n          ")], 1), _vm._v(" "), _c('p', {
    staticClass: "text-subtitle-1 mb-0 opacity-90"
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
  }, [_vm._v("mdi-printer")]), _vm._v("\n            ພິມ\n          ")], 1)], 1)])])], 1), _vm._v(" "), _c(VCard["a" /* default */], {
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
      "items": _vm.bankAccountOptions,
      "item-text": "text",
      "item-value": "value",
      "label": "ບັນຊີທະນາຄານ",
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
        }, [_vm._v("mdi-bank-outline")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.filters.bankAccountId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "bankAccountId", $$v);
      },
      expression: "filters.bankAccountId"
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
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-refresh")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _vm.currencySummaries.length ? _c('div', {
    staticClass: "mb-6"
  }, [_c(VCard["a" /* default */], {
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
    }, [_c('span', {
      staticClass: "text-body-2"
    }, [_vm._v("ຍອດຍົກມາ:")]), _vm._v(" "), _c('span', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.formatAmount(curr.balanceForward)))])]), _vm._v(" "), _c('div', {
      staticClass: "detail-row advance"
    }, [_c('span', {
      staticClass: "text-body-2"
    }, [_vm._v("+ ເງິນກູ້ໃໝ່:")]), _vm._v(" "), _c('span', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.formatAmount(curr.newAdvances)))])]), _vm._v(" "), _c('div', {
      staticClass: "detail-row settlement"
    }, [_c('span', {
      staticClass: "text-body-2"
    }, [_vm._v("- ການຊຳລະ:")]), _vm._v(" "), _c('span', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.formatAmount(curr.newSettlements)))])])])])], 1)], 1);
  }), 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c(VCard["a" /* default */], {
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
  }, [_vm._v("mdi-table")]), _vm._v("\n          ລາຍງານລະອຽດຕາມບັນຊີທະນາຄານ\n        ")], 1), _vm._v(" "), _c(VTextField["a" /* default */], {
    staticClass: "search-field",
    staticStyle: {
      "max-width": "300px"
    },
    attrs: {
      "label": "ຄົ້ນຫາບັນຊີທະນາຄານ...",
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
      key: "item.bankAccount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "account-cell"
        }, [_c('div', {
          staticClass: "font-weight-bold text-body-1 mb-1"
        }, [_vm._v(_vm._s(item.accountName))]), _vm._v(" "), _c('div', {
          staticClass: "text-caption text--secondary mb-1"
        }, [_vm._v(_vm._s(item.accountNumber))]), _vm._v(" "), _c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": "grey lighten-2",
            "outlined": ""
          }
        }, [_vm._v("\n            " + _vm._s(item.accountType) + "\n          ")])], 1)];
      }
    }, {
      key: "item.bankDetails",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "bank-cell"
        }, [_c('div', {
          staticClass: "font-weight-bold text-body-1"
        }, [_vm._v(_vm._s(item.bankName))]), _vm._v(" "), item.bankBranch ? _c('div', {
          staticClass: "text-caption text--secondary"
        }, [_vm._v(_vm._s(item.bankBranch))]) : _vm._e()])];
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
        return [_c('div', {
          staticClass: "d-flex gap-1"
        }, [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "icon": "",
            "small": ""
          },
          on: {
            "click": function ($event) {
              return _vm.viewDetails(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-eye")])], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
          attrs: {
            "color": "info",
            "icon": "",
            "small": ""
          },
          on: {
            "click": function ($event) {
              return _vm.viewTransactions(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-format-list-bulleted")])], 1)], 1)];
      }
    }, _vm.filteredData.length ? {
      key: "body.append",
      fn: function () {
        return [_c('tr', {
          staticClass: "total-row"
        }, [_c('td', {
          staticClass: "font-weight-bold text-h6 primary--text",
          attrs: {
            "colspan": "3"
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
    staticClass: "text-body-2 grey--text"
  }, [_vm._v("ກະລຸນາເລືອກຕົວກອງແລ້ວລອງໃໝ່")])], 1) : _vm._e()], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "700",
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
  }, [_vm._v("mdi-bank")]), _vm._v("\n        ລາຍລະອຽດຍອດເງິນບັນຊີທະນາຄານ\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }, [_vm._v("ຂໍ້ມູນບັນຊີທະນາຄານ")]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ຊື່ບັນຊີ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedItem.accountName))])]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ເລກບັນຊີ:")]), _vm._v(" "), _c('span', {
    staticClass: "monospace"
  }, [_vm._v(_vm._s(_vm.selectedItem.accountNumber))])]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ປະເພດບັນຊີ:")]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "grey lighten-2",
      "outlined": "",
      "small": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.selectedItem.accountType) + "\n                  ")])], 1)]), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4 mb-4",
    attrs: {
      "flat": "",
      "outlined": ""
    }
  }, [_c('h4', {
    staticClass: "text-h6 primary--text mb-3"
  }, [_vm._v("ຂໍ້ມູນທະນາຄານ")]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ທະນາຄານ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedItem.bankName))])]), _vm._v(" "), _vm.selectedItem.bankBranch ? _c('div', {
    staticClass: "detail-item"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ສາຂາ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedItem.bankBranch))])]) : _vm._e(), _vm._v(" "), _c('div', {
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
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ຍອດຍົກມາ:")]), _vm._v(" "), _c('span', {
    staticClass: "amount"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.selectedItem.balanceForward)))])]), _vm._v(" "), _c('div', {
    staticClass: "detail-item advance"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ເງິນກູ້ໃໝ່:")]), _vm._v(" "), _c('span', {
    staticClass: "amount"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.selectedItem.newAdvances)))])]), _vm._v(" "), _c('div', {
    staticClass: "detail-item settlement"
  }, [_c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v("ການຊຳລະ:")]), _vm._v(" "), _c('span', {
    staticClass: "amount"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.selectedItem.newSettlements)))])]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "detail-item ending"
  }, [_c('span', {
    staticClass: "font-weight-bold text-h6"
  }, [_vm._v("ຍອດສຸດທ້າຍ:")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.selectedItem.endingBalance)))])])])], 1)])], 1)], 1) : _vm._e(), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _vm.selectedItem ? _c(VBtn["a" /* default */], {
    attrs: {
      "color": "info"
    },
    on: {
      "click": function ($event) {
        return _vm.viewTransactions(_vm.selectedItem);
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-format-list-bulleted")]), _vm._v("\n          ເບິ່ງລາຍການ\n        ")], 1) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "color": _vm.snackbar.color,
      "timeout": 3000,
      "top": "",
      "right": ""
    },
    scopedSlots: _vm._u([{
      key: "action",
      fn: function ({
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._b({
          attrs: {
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.snackbar.show = false;
            }
          }
        }, 'v-btn', attrs, false), [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)];
      }
    }]),
    model: {
      value: _vm.snackbar.show,
      callback: function ($$v) {
        _vm.$set(_vm.snackbar, "show", $$v);
      },
      expression: "snackbar.show"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.snackbar.message) + "\n    ")])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/report/MA/2.1/index.vue?vue&type=template&id=080cf9b6&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/2.1/index.vue?vue&type=script&lang=js
var _2_1vue_type_script_lang_js = __webpack_require__(867);

// CONCATENATED MODULE: ./pages/admin/report/MA/2.1/index.vue?vue&type=script&lang=js
 /* harmony default export */ var MA_2_1vue_type_script_lang_js = (_2_1vue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/report/MA/2.1/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1346)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_2_1vue_type_script_lang_js,
  _2_1vue_type_template_id_080cf9b6_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "080cf9b6",
  "1ec85a07"
  
)

/* harmony default export */ var _2_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(479);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2f6b6adb", content, true)

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(478);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },
    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },
    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },
    styles() {
      if (this.absolute || !this.app) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application;
      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(bottom + footer + insetFooter),
        paddingLeft: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(left),
        paddingRight: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(bar + top)
      };
    }
  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },
  mounted() {
    if (this.isActive) this.setTimeout();
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq

    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },
  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "s"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "s"])(this)]);
    },
    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        style: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          pointerenter: () => window.clearTimeout(this.activeTimeout),
          pointerleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },
    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },
    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);
      if (!this.isActive ||
      // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }
      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }
}));

/***/ }),

/***/ 867:
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
  name: 'BankAccountBalanceReportLao',
  data() {
    return {
      loading: false,
      search: '',
      detailsDialog: false,
      selectedItem: null,
      snackbar: {
        show: false,
        message: '',
        color: 'success'
      },
      filters: {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        bankAccountId: '',
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
      bankAccounts: [],
      currencies: [],
      reportData: [],
      currencySummaries: []
    };
  },
  computed: {
    tableHeaders() {
      return [{
        text: 'ບັນຊີທະນາຄານ',
        value: 'bankAccount',
        sortable: true,
        width: 280
      }, {
        text: 'ລາຍລະອຽດທະນາຄານ',
        value: 'bankDetails',
        sortable: true,
        width: 200
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
        text: 'ເງິນກູ້ໃໝ່',
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
        text: 'ຍອດສຸດທ້າຍ',
        value: 'endingBalance',
        sortable: true,
        width: 150,
        align: 'right'
      }, {
        text: 'ການດຳເນີນການ',
        value: 'actions',
        sortable: false,
        width: 120,
        align: 'center'
      }];
    },
    bankAccountOptions() {
      return [{
        text: 'ບັນຊີທະນາຄານທັງໝົດ',
        value: ''
      }, ...this.bankAccounts.map(account => ({
        text: `${account.accountName} - ${account.accountNumber}`,
        value: account.id
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
        var _item$accountName, _item$accountNumber, _item$bankName, _item$currencyCode;
        return ((_item$accountName = item.accountName) === null || _item$accountName === void 0 ? void 0 : _item$accountName.toLowerCase().includes(this.search.toLowerCase())) || ((_item$accountNumber = item.accountNumber) === null || _item$accountNumber === void 0 ? void 0 : _item$accountNumber.toLowerCase().includes(this.search.toLowerCase())) || ((_item$bankName = item.bankName) === null || _item$bankName === void 0 ? void 0 : _item$bankName.toLowerCase().includes(this.search.toLowerCase())) || ((_item$currencyCode = item.currencyCode) === null || _item$currencyCode === void 0 ? void 0 : _item$currencyCode.toLowerCase().includes(this.search.toLowerCase()));
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
        const [bankAccountsRes, currenciesRes] = await Promise.all([this.$axios.get('/api/bank_account/find'), this.$axios.get('/api/currency/findAll')]);
        this.bankAccounts = bankAccountsRes.data.data || bankAccountsRes.data;
        this.currencies = currenciesRes.data.data || currenciesRes.data;
      } catch (error) {
        console.error('Error loading initial data:', error);
        this.showSnackbar('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ', 'error');
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
        if (this.filters.bankAccountId) params.append('bankAccountId', this.filters.bankAccountId);
        if (this.filters.currencyId) params.append('currencyId', this.filters.currencyId);
        const response = await this.$axios.get(`/api/money-advances/report/bank-account-balance-report?${params}`);
        if (response.data.success) {
          this.reportData = response.data.data || [];
          this.calculateCurrencySummaries();
        }
      } catch (error) {
        console.error('Error loading report:', error);
        this.showSnackbar('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດລາຍງານ', 'error');
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
        bankAccountId: '',
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
    viewTransactions(item) {
      // Implement transaction view
      console.log('View transactions for bank account:', item);
      this.showSnackbar('ຟຸງຊັ້ນນີ້ຍັງບໍ່ທັນມີ', 'info');
    },
    exportToExcel() {
      if (!this.reportDataWithBalance.length) {
        this.showSnackbar('ບໍ່ມີຂໍ້ມູນໃຫ້ສົ່ງອອກ', 'warning');
        return;
      }
      const exportData = this.reportDataWithBalance.map((item, index) => ({
        'ລຳດັບ': index + 1,
        'ຊື່ບັນຊີ': item.accountName,
        'ເລກບັນຊີ': item.accountNumber,
        'ທະນາຄານ': item.bankName,
        'ສາຂາ': item.bankBranch || '',
        'ປະເພດບັນຊີ': item.accountType,
        'ສະກຸນເງິນ': item.currencyCode,
        'ຍອດຍົກມາ': item.balanceForward,
        'ເງິນກູ້ໃໝ່': item.newAdvances,
        'ການຊຳລະ': item.newSettlements,
        'ຍອດສຸດທ້າຍ': item.endingBalance
      }));
      const headers = Object.keys(exportData[0]);
      const csvContent = [headers.join(','), ...exportData.map(row => headers.map(header => `"${(row[header] || '').toString().replace(/"/g, '""')}"`).join(','))].join('\n');
      const blob = new Blob(['\uFEFF' + csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `ລາຍງານຍອດເງິນທະນາຄານ-${this.formatPeriod().replace(' ', '-')}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      this.showSnackbar('ສົ່ງອອກສຳເລັດແລ້ວ', 'success');
    },
    printReport() {
      window.print();
    },
    showSnackbar(message, color = 'success') {
      this.snackbar = {
        show: true,
        message,
        color
      };
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(413)["URLSearchParams"], __webpack_require__(413)["URL"]))

/***/ })

};;
//# sourceMappingURL=index.js.map