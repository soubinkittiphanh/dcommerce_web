exports.ids = [201,197];
exports.modules = {

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(374);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js
var VSimpleTable = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(713);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/settlement/index.vue?vue&type=template&id=178d0b7e&scoped=true&



































var settlementvue_type_template_id_178d0b7e_scoped_true_render = function render() {
  var _vm$currentSettlement;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "pa-4",
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "8"
    }
  }, [_c('h1', {
    staticClass: "text-h4 font-weight-bold primary--text"
  }, [_vm._v("\n        Settlements Dashboard\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "text-subtitle-1 grey--text"
  }, [_vm._v("\n        Manage and monitor all settlement transactions\n      ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary",
      "large": ""
    },
    on: {
      "click": _vm.openCreateDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n        New Settlement\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "large": "",
      "outlined": "",
      "loading": _vm.loading
    },
    on: {
      "click": _vm.refreshData
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n        Refresh\n      ")], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-6"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "color": "primary",
      "dark": "",
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "size": "40"
    }
  }, [_vm._v("mdi-file-document-multiple")]), _vm._v(" "), _c('div', {
    staticClass: "text-h4 font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.stats.totalCount || 0) + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1"
  }, [_vm._v("Total Settlements")])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "color": "success",
      "dark": "",
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "size": "40"
    }
  }, [_vm._v("mdi-currency-usd")]), _vm._v(" "), _c('div', {
    staticClass: "text-h5 font-weight-bold"
  }, [_vm._v("\n            ₭" + _vm._s(_vm.formatAmount(_vm.stats.totalAmount) || '0.00') + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1"
  }, [_vm._v("Total Amount")])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "color": "info",
      "dark": "",
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "size": "40"
    }
  }, [_vm._v("mdi-calendar-month")]), _vm._v(" "), _c('div', {
    staticClass: "text-h4 font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.stats.thisMonth || 0) + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1"
  }, [_vm._v("This Month")])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "color": "warning",
      "dark": "",
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "size": "40"
    }
  }, [_vm._v("mdi-clock-outline")]), _vm._v(" "), _c('div', {
    staticClass: "text-h4 font-weight-bold"
  }, [_vm._v(_vm._s(_vm.stats.pending || 0))]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1"
  }, [_vm._v("Pending")])], 1)], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-6"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-chart-donut")]), _vm._v("\n          Settlement Methods\n        ")], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticStyle: {
      "height": "300px"
    }
  }, [_c('canvas', {
    ref: "methodChart",
    attrs: {
      "width": "100%",
      "height": "100%"
    }
  })])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-chart-line")]), _vm._v("\n          Monthly Trends\n        ")], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticStyle: {
      "height": "300px"
    }
  }, [_c('canvas', {
    ref: "trendChart",
    attrs: {
      "width": "100%",
      "height": "100%"
    }
  })])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-office-building")]), _vm._v("\n          Ministry & Currency Summary\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingMinistrySummary
    },
    on: {
      "click": _vm.fetchMinistrySummary
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticStyle: {
      "height": "300px",
      "overflow-y": "auto"
    }
  }, [_vm.loadingMinistrySummary ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("Loading summary...")])], 1) : _vm.ministrySummary.length === 0 ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No ministry data available\n            ")])], 1) : _c(VExpansionPanels["a" /* default */], {
    attrs: {
      "accordion": "",
      "flat": ""
    }
  }, _vm._l(_vm.ministrySummary, function (ministry) {
    return _c(VExpansionPanel["a" /* default */], {
      key: ministry.ministryId
    }, [_c(VExpansionPanelHeader["a" /* default */], [_c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', [_c('div', {
      staticClass: "font-weight-medium text-subtitle-2"
    }, [_vm._v("\n                      " + _vm._s(ministry.ministryName || `Ministry #${ministry.ministryId}`) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "text-caption grey--text"
    }, [_vm._v("\n                      " + _vm._s(ministry.settlementCount) + " settlements\n                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "text-right"
    }, [_c('div', {
      staticClass: "font-weight-bold success--text"
    }, [_vm._v("\n                      ₭" + _vm._s(_vm.formatAmount(ministry.totalLakEquivalent)) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "text-caption grey--text"
    }, [_vm._v("\n                      " + _vm._s(ministry.currencies.length) + " currencies\n                    ")])])])]), _vm._v(" "), _c(VExpansionPanelContent["a" /* default */], [_c(VList["a" /* default */], {
      attrs: {
        "dense": ""
      }
    }, _vm._l(ministry.currencies, function (currency) {
      return _c(VListItem["a" /* default */], {
        key: `${ministry.ministryId}-${currency.currencyId}`,
        staticClass: "px-0"
      }, [_c(VListItemAvatar["a" /* default */], {
        attrs: {
          "size": "24"
        }
      }, [_c(VChip["a" /* default */], {
        attrs: {
          "x-small": "",
          "color": _vm.getCurrencyColor(currency.currencyCode),
          "dark": ""
        }
      }, [_vm._v("\n                        " + _vm._s(currency.currencyCode || 'LAK') + "\n                      ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
        staticClass: "text-body-2"
      }, [_vm._v("\n                        " + _vm._s(currency.currencyCode || 'LAK') + " -\n                        " + _vm._s(currency.count) + " settlements\n                      ")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], {
        staticClass: "text-caption"
      }, [_vm._v("\n                        Rate: " + _vm._s(currency.avgExchangeRate) + "\n                      ")])], 1), _vm._v(" "), _c(VListItemAction["a" /* default */], [_c('div', {
        staticClass: "text-right"
      }, [_c('div', {
        staticClass: "font-weight-medium text-body-2"
      }, [_vm._v("\n                          " + _vm._s(currency.currencySymbol) + _vm._s(_vm.formatAmount(currency.totalAmount)) + "\n                        ")]), _vm._v(" "), _c('div', {
        staticClass: "text-caption success--text"
      }, [_vm._v("\n                          ₭" + _vm._s(_vm.formatAmount(currency.lakEquivalent)) + "\n                        ")])])])], 1);
    }), 1)], 1)], 1);
  }), 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "rounded-xl",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-office-building")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ລາຍງານ ຕາມກົມ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.ministrySummaryReport.length
    },
    on: {
      "click": _vm.exportMinistryReportToExcel
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export Excel\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingMinistryReport
    },
    on: {
      "click": _vm.fetchMinistryReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingMinistryReport ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("Loading ministry report...")])], 1) : !_vm.ministrySummaryReport.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No ministry data available\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        var _vm$ministryTotals2;
        return [_c('thead', [_c('tr', {
          staticClass: "primary lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Code\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Count\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
          return _c('th', {
            key: 'head-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Total (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.ministrySummaryReport, function (item, index) {
          return _c('tr', {
            key: item.ministryId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'orange lighten-4': item.ministryId === 'NO_MINISTRY'
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2",
            class: {
              'grey--text': item.ministryId === 'NO_MINISTRY'
            }
          }, [_vm._v("\n                    " + _vm._s(item.ministryCode) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2",
            class: {
              'grey--text font-italic': item.ministryId === 'NO_MINISTRY'
            }
          }, [_vm._v("\n                    " + _vm._s(item.ministryName) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2 text-right"
          }, [_vm._v("\n                    " + _vm._s(item.settlementCount) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
            var _item$amounts;
            return _c('td', {
              key: 'amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts = item.amounts) === null || _item$amounts === void 0 ? void 0 : _item$amounts[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold success--text"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "primary lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "3"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.ministrySummaryReport.reduce((sum, m) => sum + m.settlementCount, 0)) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
          var _vm$ministryTotals, _vm$ministryTotals$cu;
          return _c('td', {
            key: 'sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$ministryTotals = _vm.ministryTotals) === null || _vm$ministryTotals === void 0 ? void 0 : (_vm$ministryTotals$cu = _vm$ministryTotals.currencyTotals) === null || _vm$ministryTotals$cu === void 0 ? void 0 : _vm$ministryTotals$cu[currency]) || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2 primary--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$ministryTotals2 = _vm.ministryTotals) === null || _vm$ministryTotals2 === void 0 ? void 0 : _vm$ministryTotals2.totalLakEquivalent) || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "rounded-xl",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-bank")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ລາຍງານຕາມບັນຊີ ທະນາຄານ\n           \n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.bankAccountSummaryReport.length
    },
    on: {
      "click": _vm.exportBankAccountReportToExcel
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export Excel\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingBankAccountReport
    },
    on: {
      "click": _vm.fetchBankAccountReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingBankAccountReport ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading bank account report...\n            ")])], 1) : !_vm.bankAccountSummaryReport.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No bank account data available\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        var _vm$bankAccountTotals3;
        return [_c('thead', [_c('tr', {
          staticClass: "primary lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Number\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Bank Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Type\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Count\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
          return _c('th', {
            key: 'head-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Total (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.bankAccountSummaryReport, function (item, index) {
          return _c('tr', {
            key: item.bankAccountId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'orange lighten-4': item.bankAccountId === 'NO_BANK_ACCOUNT'
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2",
            class: {
              'grey--text': item.bankAccountId === 'NO_BANK_ACCOUNT'
            }
          }, [_vm._v("\n                    " + _vm._s(item.accountNumber) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2",
            class: {
              'grey--text font-italic': item.bankAccountId === 'NO_BANK_ACCOUNT'
            }
          }, [_vm._v("\n                    " + _vm._s(item.accountName) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2",
            class: {
              'grey--text font-italic': item.bankAccountId === 'NO_BANK_ACCOUNT'
            }
          }, [_vm._v("\n                    " + _vm._s(item.bankName) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_c(VChip["a" /* default */], {
            attrs: {
              "x-small": "",
              "color": item.accountType === 'Cash' ? 'orange' : 'blue',
              "text-color": item.accountType === 'Cash' ? 'white' : 'white'
            }
          }, [_vm._v("\n                      " + _vm._s(item.accountType) + "\n                    ")])], 1), _vm._v(" "), _c('td', {
            staticClass: "text-body-2 text-right"
          }, [_vm._v("\n                    " + _vm._s(item.settlementCount) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
            var _item$amounts2;
            return _c('td', {
              key: 'amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts2 = item.amounts) === null || _item$amounts2 === void 0 ? void 0 : _item$amounts2[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold success--text"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "primary lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "5"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.bankAccountSummaryReport.reduce((sum, b) => sum + b.settlementCount, 0)) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
          var _vm$bankAccountTotals, _vm$bankAccountTotals2;
          return _c('td', {
            key: 'sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$bankAccountTotals = _vm.bankAccountTotals) === null || _vm$bankAccountTotals === void 0 ? void 0 : (_vm$bankAccountTotals2 = _vm$bankAccountTotals.currencyTotals) === null || _vm$bankAccountTotals2 === void 0 ? void 0 : _vm$bankAccountTotals2[currency]) || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2 primary--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$bankAccountTotals3 = _vm.bankAccountTotals) === null || _vm$bankAccountTotals3 === void 0 ? void 0 : _vm$bankAccountTotals3.totalLakEquivalent) || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "rounded-xl",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-account-multiple")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ລາຍງານ ຕາມຫົວບັນຊີ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.chartAccountSummaryReport.length
    },
    on: {
      "click": _vm.exportChartAccountReportToExcel
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export Excel\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingChartAccountReport
    },
    on: {
      "click": _vm.fetchChartAccountReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingChartAccountReport ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading chart account report...\n            ")])], 1) : !_vm.chartAccountSummaryReport.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No chart account data available\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        var _vm$chartAccountTotal3;
        return [_c('thead', [_c('tr', {
          staticClass: "primary lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Number\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Count\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
          return _c('th', {
            key: 'head-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Total (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.chartAccountSummaryReport, function (item, index) {
          return _c('tr', {
            key: item.chartAccountId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'orange lighten-4': item.chartAccountId === 'NO_CHART_ACCOUNT'
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2",
            class: {
              'grey--text': item.chartAccountId === 'NO_CHART_ACCOUNT'
            }
          }, [_vm._v("\n                    " + _vm._s(item.accountNumber) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2",
            class: {
              'grey--text font-italic': item.chartAccountId === 'NO_CHART_ACCOUNT'
            }
          }, [_vm._v("\n                    " + _vm._s(item.accountName) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2 text-right"
          }, [_vm._v("\n                    " + _vm._s(item.settlementCount) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
            var _item$amounts3;
            return _c('td', {
              key: 'amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts3 = item.amounts) === null || _item$amounts3 === void 0 ? void 0 : _item$amounts3[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold success--text"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "primary lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "3"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.chartAccountSummaryReport.reduce((sum, c) => sum + c.settlementCount, 0)) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.currencyList, function (currency) {
          var _vm$chartAccountTotal, _vm$chartAccountTotal2;
          return _c('td', {
            key: 'sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$chartAccountTotal = _vm.chartAccountTotals) === null || _vm$chartAccountTotal === void 0 ? void 0 : (_vm$chartAccountTotal2 = _vm$chartAccountTotal.currencyTotals) === null || _vm$chartAccountTotal2 === void 0 ? void 0 : _vm$chartAccountTotal2[currency]) || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2 primary--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$chartAccountTotal3 = _vm.chartAccountTotals) === null || _vm$chartAccountTotal3 === void 0 ? void 0 : _vm$chartAccountTotal3.totalLakEquivalent) || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-filter")]), _vm._v("\n      Filters & Search\n    ")], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.methodOptions,
      "label": "Payment Method",
      "prepend-icon": "mdi-credit-card",
      "clearable": "",
      "outlined": "",
      "dense": ""
    },
    on: {
      "change": _vm.applyFilters
    },
    model: {
      value: _vm.filters.method,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "method", $$v);
      },
      expression: "filters.method"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "Date From",
      "prepend-icon": "mdi-calendar",
      "outlined": "",
      "dense": ""
    },
    on: {
      "change": _vm.applyFilters
    },
    model: {
      value: _vm.filters.dateFrom,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "dateFrom", $$v);
      },
      expression: "filters.dateFrom"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "Date To",
      "prepend-icon": "mdi-calendar",
      "outlined": "",
      "dense": ""
    },
    on: {
      "change": _vm.applyFilters
    },
    model: {
      value: _vm.filters.dateTo,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "dateTo", $$v);
      },
      expression: "filters.dateTo"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Search settlements...",
      "prepend-icon": "mdi-magnify",
      "outlined": "",
      "dense": "",
      "clearable": ""
    },
    on: {
      "input": _vm.debounceSearch
    },
    model: {
      value: _vm.searchQuery,
      callback: function ($$v) {
        _vm.searchQuery = $$v;
      },
      expression: "searchQuery"
    }
  })], 1)], 1), _vm._v(" "), _vm.hasActiveFilters ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "outlined": "",
      "color": "grey"
    },
    on: {
      "click": _vm.clearFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-filter-remove")]), _vm._v("\n            Clear All Filters\n          ")], 1)], 1)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-table")]), _vm._v("\n      Settlements List\n      "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "outlined": ""
    }
  }, [_vm._v("\n        " + _vm._s(_vm.pagination.totalItems) + " Total Records\n      ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.tableHeaders,
      "items": _vm.settlements,
      "loading": _vm.loading,
      "server-items-length": _vm.pagination.totalItems,
      "options": _vm.tableOptions,
      "footer-props": {
        'items-per-page-options': [10, 25, 50, 100],
        'show-current-page': true,
        'show-first-last-page': true
      },
      "loading-text": "Loading settlements...",
      "no-data-text": "No settlements found"
    },
    on: {
      "update:options": [function ($event) {
        _vm.tableOptions = $event;
      }, _vm.onTableOptionsUpdate]
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function ({
        props
      }) {
        return [_c('thead', {
          staticClass: "primary lighten-2"
        }, [_c('tr', _vm._l(props.headers, function (header) {
          return _c('th', {
            key: header.text,
            staticClass: "white--text font-weight-bold",
            class: [header.sortable !== false ? 'sortable' : ''],
            on: {
              "click": function ($event) {
                header.sortable !== false ? _vm.changeSort(header.value) : null;
              }
            }
          }, [_vm._v("\n              " + _vm._s(header.text) + "\n              "), header.sortable !== false ? _c(VIcon["a" /* default */], {
            staticClass: "ml-1",
            attrs: {
              "color": "white",
              "small": ""
            }
          }, [_vm._v("\n                " + _vm._s(_vm.getSortIcon(header.value)) + "\n              ")]) : _vm._e()], 1);
        }), 0)])];
      }
    }, {
      key: "item.bookingDate",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": "grey lighten-3"
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "small": ""
          }
        }, [_vm._v("mdi-calendar")]), _vm._v("\n          " + _vm._s(_vm.formatDate(item.bookingDate)) + "\n        ")], 1)];
      }
    }, {
      key: "item.amount",
      fn: function ({
        item
      }) {
        var _item$currency;
        return [_c('div', [_c('span', {
          staticClass: "font-weight-bold text-h6 success--text"
        }, [_vm._v("\n            " + _vm._s(_vm.getCurrencySymbol((_item$currency = item.currency) === null || _item$currency === void 0 ? void 0 : _item$currency.code)) + _vm._s(_vm.formatAmount(item.amount)) + "\n          ")]), _vm._v(" "), item.currency && item.currency.code !== 'LAK' ? _c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("\n            " + _vm._s(item.currency.code) + " @ " + _vm._s(item.exchangeRate || 1) + "\n          ")]) : _vm._e()])];
      }
    }, {
      key: "item.method",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getMethodColor(item.method),
            "small": "",
            "dark": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "x-small": ""
          }
        }, [_vm._v(_vm._s(_vm.getMethodIcon(item.method)))]), _vm._v("\n          " + _vm._s(_vm.formatMethod(item.method)) + "\n        ")], 1)];
      }
    }, {
      key: "item.proceeder",
      fn: function ({
        item
      }) {
        return [item.proceeder ? _c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VAvatar["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "size": "24",
            "color": "primary"
          }
        }, [_c('span', {
          staticClass: "white--text text-caption"
        }, [_vm._v("\n              " + _vm._s(_vm.getInitials(item.proceeder.cus_name || item.proceeder.cus_email)) + "\n            ")])]), _vm._v(" "), _c('div', [_c('div', {
          staticClass: "font-weight-medium"
        }, [_vm._v("\n              " + _vm._s(item.proceeder.cus_name || item.proceeder.cus_email) + "\n            ")]), _vm._v(" "), _c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("\n              " + _vm._s(item.proceeder.cus_email) + "\n            ")])])], 1) : _c('span', {
          staticClass: "grey--text"
        }, [_vm._v("N/A")])];
      }
    }, {
      key: "item.moneyAdvance",
      fn: function ({
        item
      }) {
        return [item.moneyAdvance ? _c('div', [_c(VChip["a" /* default */], {
          staticClass: "mb-1",
          attrs: {
            "x-small": "",
            "color": "info"
          }
        }, [_vm._v("\n            #" + _vm._s(item.moneyAdvance.id) + "\n          ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": _vm.getStatusColor(item.moneyAdvance.status),
            "dark": ""
          }
        }, [_vm._v("\n            " + _vm._s(item.moneyAdvance.status) + "\n          ")])], 1) : _c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": "grey",
            "dark": ""
          }
        }, [_vm._v(" Independent ")])];
      }
    }, {
      key: "item.status",
      fn: function ({
        item
      }) {
        return [item.moneyAdvance ? _c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getStatusColor(item.moneyAdvance.status),
            "small": "",
            "dark": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "x-small": ""
          }
        }, [_vm._v(_vm._s(_vm.getStatusIcon(item.moneyAdvance.status)))]), _vm._v("\n          " + _vm._s(item.moneyAdvance.status) + "\n        ")], 1) : _c(VChip["a" /* default */], {
          attrs: {
            "color": "grey",
            "small": "",
            "dark": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "x-small": ""
          }
        }, [_vm._v("mdi-check-circle")]), _vm._v("\n          Independent\n        ")], 1)];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex"
        }, [_c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on,
              attrs
            }) {
              return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
                attrs: {
                  "icon": "",
                  "x-small": "",
                  "color": "primary"
                },
                on: {
                  "click": function ($event) {
                    return _vm.viewSettlement(item);
                  }
                }
              }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-eye")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("View Details")])]), _vm._v(" "), _c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on,
              attrs
            }) {
              return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
                staticClass: "ml-1",
                attrs: {
                  "icon": "",
                  "x-small": "",
                  "color": "secondary"
                },
                on: {
                  "click": function ($event) {
                    return _vm.editSettlement(item);
                  }
                }
              }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-pencil")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("Edit Settlement")])]), _vm._v(" "), _c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on,
              attrs
            }) {
              return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
                staticClass: "ml-1",
                attrs: {
                  "icon": "",
                  "x-small": "",
                  "color": "error"
                },
                on: {
                  "click": function ($event) {
                    return _vm.confirmDelete(item);
                  }
                }
              }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-delete")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("Delete Settlement")])])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "900px",
      "persistent": "",
      "scrollable": ""
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.dialogMode === 'create' ? 'mdi-plus' : _vm.dialogMode === 'edit' ? 'mdi-pencil' : 'mdi-eye') + "\n        ")]), _vm._v("\n        " + _vm._s(_vm.dialogTitle) + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pt-6"
  }, [_vm.dialogMode !== 'view' ? _c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.formValid,
      callback: function ($$v) {
        _vm.formValid = $$v;
      },
      expression: "formValid"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "Booking Date",
      "prepend-icon": "mdi-calendar",
      "rules": [_vm.rules.required],
      "outlined": "",
      "required": ""
    },
    model: {
      value: _vm.settlementForm.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.settlementForm, "bookingDate", $$v);
      },
      expression: "settlementForm.bookingDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "step": "0.01",
      "label": "Amount",
      "prepend-icon": "mdi-currency-usd",
      "rules": [_vm.rules.required, _vm.rules.positiveNumber],
      "outlined": "",
      "required": ""
    },
    model: {
      value: _vm.settlementForm.amount,
      callback: function ($$v) {
        _vm.$set(_vm.settlementForm, "amount", $$v);
      },
      expression: "settlementForm.amount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.methodSelectOptions,
      "label": "Payment Method",
      "prepend-icon": "mdi-credit-card",
      "rules": [_vm.rules.required],
      "outlined": "",
      "required": ""
    },
    model: {
      value: _vm.settlementForm.method,
      callback: function ($$v) {
        _vm.$set(_vm.settlementForm, "method", $$v);
      },
      expression: "settlementForm.method"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "step": "0.0001",
      "label": "Exchange Rate",
      "prepend-icon": "mdi-swap-horizontal",
      "placeholder": "1.0000",
      "outlined": ""
    },
    model: {
      value: _vm.settlementForm.exchangeRate,
      callback: function ($$v) {
        _vm.$set(_vm.settlementForm, "exchangeRate", $$v);
      },
      expression: "settlementForm.exchangeRate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Notes",
      "prepend-icon": "mdi-note-text",
      "rows": "3",
      "outlined": "",
      "no-resize": ""
    },
    model: {
      value: _vm.settlementForm.notes,
      callback: function ($$v) {
        _vm.$set(_vm.settlementForm, "notes", $$v);
      },
      expression: "settlementForm.notes"
    }
  })], 1)], 1)], 1) : _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-calendar")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Booking Date")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], {
    staticClass: "text-h6"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.currentSettlement.bookingDate)))])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-currency-usd")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Amount")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], {
    staticClass: "text-h5 font-weight-bold success--text"
  }, [_vm._v("\n                    " + _vm._s(_vm.getCurrencySymbol((_vm$currentSettlement = _vm.currentSettlement.currency) === null || _vm$currentSettlement === void 0 ? void 0 : _vm$currentSettlement.code)) + _vm._s(_vm.formatAmount(_vm.currentSettlement.amount)) + "\n                  ")])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": _vm.getMethodColor(_vm.currentSettlement.method)
    }
  }, [_vm._v(_vm._s(_vm.getMethodIcon(_vm.currentSettlement.method)))])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Payment Method")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.getMethodColor(_vm.currentSettlement.method),
      "small": "",
      "dark": ""
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.formatMethod(_vm.currentSettlement.method)) + "\n                    ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "info"
    }
  }, [_vm._v("mdi-swap-horizontal")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Exchange Rate")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], {
    staticClass: "text-h6"
  }, [_vm._v(_vm._s(_vm.currentSettlement.exchangeRate || '1.0000'))])], 1)], 1)], 1), _vm._v(" "), _vm.currentSettlement.notes ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "grey"
    }
  }, [_vm._v("mdi-note-text")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Notes")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(_vm.currentSettlement.notes))])], 1)], 1)], 1) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "outlined": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("\n          " + _vm._s(_vm.dialogMode === 'view' ? 'Close' : 'Cancel') + "\n        ")]), _vm._v(" "), _vm.dialogMode !== 'view' ? _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "color": "primary",
      "loading": _vm.saving,
      "disabled": !_vm.formValid
    },
    on: {
      "click": _vm.saveSettlement
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v(_vm._s(_vm.dialogMode === 'create' ? 'mdi-plus' : 'mdi-content-save'))]), _vm._v("\n          " + _vm._s(_vm.dialogMode === 'create' ? 'Create' : 'Update') + "\n        ")], 1) : _vm._e()], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/report/MA/settlement/index.vue?vue&type=template&id=178d0b7e&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(90);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(91);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(338);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(339);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(340);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(341);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(342);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(343);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(344);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(345);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(346);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(347);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(348);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(349);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(350);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(351);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(352);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(353);

// EXTERNAL MODULE: ./pages/admin/report/MA/mixin/excel.js
var excel = __webpack_require__(742);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/settlement/index.vue?vue&type=script&lang=js&






























/* harmony default export */ var settlementvue_type_script_lang_js_ = ({
  name: 'SettlementDashboard',
  mixins: [excel["default"]],
  data() {
    return {
      // Bank Account Report Data
      loadingBankAccountReport: false,
      bankAccountSummaryReport: [],
      bankAccountTotals: {
        totalLakEquivalent: 0,
        currencyTotals: {}
      },
      dateRange: {
        start: null,
        end: null
      },
      ministryTotals: {},
      loadingMinistryReport: false,
      settlements: [],
      loading: false,
      saving: false,
      dialog: false,
      formValid: false,
      // Dialog state
      dialogMode: 'create',
      // create, edit, view
      currentSettlement: {},
      // Form data
      settlementForm: {
        bookingDate: '',
        amount: '',
        method: '',
        exchangeRate: 1,
        notes: '',
        userId: null
      },
      // Validation rules
      rules: {
        required: value => !!value || 'This field is required',
        positiveNumber: value => value && value > 0 || 'Must be greater than 0'
      },
      // Table configuration
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ['id'],
        sortDesc: [true]
      },
      pagination: {
        totalItems: 0
      },
      tableHeaders: [{
        text: 'ID',
        value: 'id',
        sortable: true,
        width: '80px'
      }, {
        text: 'Date',
        value: 'bookingDate',
        sortable: true,
        width: '120px'
      }, {
        text: 'Amount',
        value: 'amount',
        sortable: true,
        width: '150px'
      }, {
        text: 'Method',
        value: 'method',
        sortable: false,
        width: '140px'
      }, {
        text: 'Proceeder',
        value: 'proceeder',
        sortable: false,
        width: '180px'
      }, {
        text: 'Money Advance',
        value: 'moneyAdvance',
        sortable: false,
        width: '140px'
      }, {
        text: 'Status',
        value: 'status',
        sortable: false,
        width: '120px'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        width: '120px'
      }],
      // Filters
      filters: {
        method: '',
        dateFrom: '',
        dateTo: ''
      },
      searchQuery: '',
      searchTimeout: null,
      currencyList: [],
      // Statistics
      stats: {
        totalCount: 0,
        totalAmount: 0,
        thisMonth: 0,
        pending: 0
      },
      // Ministry Summary
      ministrySummary: [],
      loadingMinistrySummary: false,
      // Ministry Summary Report
      ministrySummaryReport: [],
      // Chart Account Report
      // Chart Account Report Data (UPDATED)
      loadingChartAccountReport: false,
      chartAccountSummaryReport: [],
      // Changed from chartAccountReport
      chartAccountTotals: {
        totalLakEquivalent: 0,
        currencyTotals: {}
      },
      // Options
      methodOptions: [{
        text: 'All Methods',
        value: ''
      }, {
        text: 'Cash Payment',
        value: 'cash'
      }, {
        text: 'Bank Transfer',
        value: 'bank_transfer'
      }, {
        text: 'Salary Deduction',
        value: 'deduction'
      }],
      methodSelectOptions: [{
        text: 'Cash Payment',
        value: 'cash'
      }, {
        text: 'Bank Transfer',
        value: 'bank_transfer'
      }, {
        text: 'Salary Deduction',
        value: 'deduction'
      }],
      // Charts
      methodChart: null,
      trendChart: null
    };
  },
  computed: {
    dialogTitle() {
      const titles = {
        create: 'Create New Settlement',
        edit: 'Edit Settlement',
        view: 'Settlement Details'
      };
      return titles[this.dialogMode] || 'Settlement';
    },
    hasActiveFilters() {
      return this.filters.method || this.filters.dateFrom || this.filters.dateTo || this.searchQuery;
    }
  },
  async mounted() {
    await this.loadInitialData();
  },
  methods: {
    async loadInitialData() {
      await Promise.all([this.fetchSettlements(), this.fetchStats(), this.fetchMinistrySummary(), this.fetchChartAccountReport(), this.fetchMinistryReport(), this.fetchBankAccountReport()]);
      this.$nextTick(() => {
        this.initializeCharts();
      });
    },
    async refreshData() {
      await this.loadInitialData();
      this.$toast.success('Data refreshed successfully');
    },
    async fetchSettlements() {
      this.loading = true;
      try {
        var _this$tableOptions$so, _this$tableOptions$so2, _response$data$data$p;
        const params = {
          page: this.tableOptions.page || 1,
          limit: this.tableOptions.itemsPerPage || 10,
          sortBy: ((_this$tableOptions$so = this.tableOptions.sortBy) === null || _this$tableOptions$so === void 0 ? void 0 : _this$tableOptions$so[0]) || 'id',
          sortOrder: (_this$tableOptions$so2 = this.tableOptions.sortDesc) !== null && _this$tableOptions$so2 !== void 0 && _this$tableOptions$so2[0] ? 'desc' : 'asc',
          ...this.filters
        };
        if (this.searchQuery) {
          params.search = this.searchQuery;
        }
        const response = await this.$axios.get('/api/settlements', {
          params
        });
        this.settlements = response.data.data.settlements || [];
        this.pagination.totalItems = ((_response$data$data$p = response.data.data.pagination) === null || _response$data$data$p === void 0 ? void 0 : _response$data$data$p.totalItems) || 0;
      } catch (error) {
        console.error('Error fetching settlements:', error);
        this.$toast.error('Failed to load settlements');
      } finally {
        this.loading = false;
      }
    },
    async fetchStats() {
      try {
        const response = await this.$axios.get('/api/settlements/stats');
        this.stats = response.data.data || {};
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    },
    async fetchMinistrySummary() {
      this.loadingMinistrySummary = true;
      try {
        var _response$data$data;
        // Fetch all settlements with currency and ministry data
        const response = await this.$axios.get('/api/settlements', {
          params: {
            limit: 1000,
            // Get all settlements for comprehensive analysis
            page: 1
          }
        });
        const settlements = ((_response$data$data = response.data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.settlements) || [];

        // Group settlements by ministry and currency
        const ministryMap = new Map();
        settlements.forEach(settlement => {
          // Skip settlements without ministry
          if (!settlement.ministry) return;
          const ministryId = settlement.ministry.id;
          const ministryName = settlement.ministry.ministryNameEn || settlement.ministry.ministryName || `Ministry ${ministryId}`;

          // Initialize ministry if not exists
          if (!ministryMap.has(ministryId)) {
            ministryMap.set(ministryId, {
              ministryId,
              ministryName,
              ministryCode: settlement.ministry.ministryCode || '',
              settlementCount: 0,
              totalAmount: 0,
              totalLakEquivalent: 0,
              currencies: new Map()
            });
          }
          const ministry = ministryMap.get(ministryId);

          // Get currency info
          const currency = settlement.currency || {};
          const currencyId = currency.id || null;
          const currencyCode = currency.code || 'LAK';
          const currencySymbol = this.getCurrencySymbol(currencyCode);
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1;
          const amount = parseFloat(settlement.amount) || 0;
          const lakEquivalent = amount * exchangeRate;

          // Initialize currency if not exists for this ministry
          if (!ministry.currencies.has(currencyId)) {
            ministry.currencies.set(currencyId, {
              currencyId,
              currencyCode,
              currencySymbol,
              currencyName: currency.name || currencyCode,
              count: 0,
              totalAmount: 0,
              totalExchangeRateSum: 0,
              lakEquivalent: 0
            });
          }
          const currencyData = ministry.currencies.get(currencyId);

          // Update currency totals
          currencyData.count += 1;
          currencyData.totalAmount += amount;
          currencyData.totalExchangeRateSum += exchangeRate;
          currencyData.lakEquivalent += lakEquivalent;

          // Update ministry totals
          ministry.settlementCount += 1;
          ministry.totalAmount += amount;
          ministry.totalLakEquivalent += lakEquivalent;
        });

        // Convert to array format and calculate averages
        this.ministrySummary = Array.from(ministryMap.values()).map(ministry => {
          const currencies = Array.from(ministry.currencies.values()).map(currency => ({
            ...currency,
            avgExchangeRate: currency.count > 0 ? (currency.totalExchangeRateSum / currency.count).toFixed(4) : '1.0000'
          }));
          return {
            ...ministry,
            currencies: currencies.sort((a, b) => b.totalAmount - a.totalAmount) // Sort by amount desc
          };
        }).sort((a, b) => b.totalLakEquivalent - a.totalLakEquivalent); // Sort ministries by LAK equivalent desc
      } catch (error) {
        console.error('Error fetching ministry summary:', error);
        this.ministrySummary = [];
      } finally {
        this.loadingMinistrySummary = false;
      }
    },
    async fetchChartAccountReport() {
      try {
        this.loadingChartAccountReport = true;

        // Fetch all pages of data (same pattern as ministry/bank account reports)
        let allSettlements = [];
        let currentPage = 1;
        let totalPages = 1;
        do {
          var _response$data$data2, _response$data$data3;
          const response = await this.$axios.get('/api/settlements', {
            params: {
              branchId: this.selectedBranchId,
              fromDate: this.dateRange.start,
              toDate: this.dateRange.end,
              isPosted: true,
              include: ['chartAccount', 'currency'],
              page: currentPage,
              limit: 50
            }
          });
          const pageData = ((_response$data$data2 = response.data.data) === null || _response$data$data2 === void 0 ? void 0 : _response$data$data2.settlements) || [];
          allSettlements = allSettlements.concat(pageData);

          // Update pagination info
          const pagination = (_response$data$data3 = response.data.data) === null || _response$data$data3 === void 0 ? void 0 : _response$data$data3.pagination;
          if (pagination) {
            totalPages = pagination.totalPages;
            console.log(`Fetched page ${currentPage} of ${totalPages}, got ${pageData.length} settlements`);
          }
          currentPage++;
        } while (currentPage <= totalPages);
        console.log(`Total settlements fetched for chart account report: ${allSettlements.length}`);
        const chartAccountMap = new Map();
        const currencySet = new Set();
        allSettlements.forEach(settlement => {
          var _settlement$currency;
          const chartAccount = settlement.chartAccount;

          // Handle both chart account assignments and null chart account
          let chartAccountId, accountNumber, accountName;
          if (chartAccount) {
            chartAccountId = chartAccount.id;
            accountNumber = chartAccount.accountNumber;
            accountName = chartAccount.accountName || chartAccount.accountLLName;
          } else {
            // Handle settlements with no chart account
            chartAccountId = 'NO_CHART_ACCOUNT';
            accountNumber = 'N/A';
            accountName = 'No Chart Account Assigned';
          }
          const currencyCode = ((_settlement$currency = settlement.currency) === null || _settlement$currency === void 0 ? void 0 : _settlement$currency.code) || 'LAK';
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1;
          const amount = parseFloat(settlement.amount) || 0;
          const lakEquivalent = amount * exchangeRate;
          currencySet.add(currencyCode);
          if (!chartAccountMap.has(chartAccountId)) {
            chartAccountMap.set(chartAccountId, {
              chartAccountId,
              accountNumber,
              accountName,
              settlementCount: 0,
              totalLakEquivalent: 0,
              amounts: {}
            });
          }
          const chartAccountRow = chartAccountMap.get(chartAccountId);
          chartAccountRow.settlementCount += 1;
          chartAccountRow.totalLakEquivalent += lakEquivalent;
          chartAccountRow.amounts[currencyCode] = (chartAccountRow.amounts[currencyCode] || 0) + amount;
        });
        this.currencyList = Array.from(currencySet).sort();

        // Sort chart accounts: real accounts first (by account number), then "No Chart Account" at the bottom
        this.chartAccountSummaryReport = Array.from(chartAccountMap.values()).sort((a, b) => {
          if (a.chartAccountId === 'NO_CHART_ACCOUNT') return 1;
          if (b.chartAccountId === 'NO_CHART_ACCOUNT') return -1;

          // Sort by account number if available, otherwise by account name
          if (a.accountNumber && b.accountNumber) {
            return String(a.accountNumber).localeCompare(String(b.accountNumber));
          }
          return a.accountName.localeCompare(b.accountName);
        });

        // Log chart account breakdown for debugging
        console.log('Chart account breakdown:');
        this.chartAccountSummaryReport.forEach(chartAccount => {
          console.log(`- ${chartAccount.accountNumber}: ${chartAccount.accountName} (${chartAccount.settlementCount} settlements)`);
        });
        this.chartAccountTotals = {
          totalLakEquivalent: this.chartAccountSummaryReport.reduce((sum, c) => sum + c.totalLakEquivalent, 0),
          currencyTotals: {}
        };
        this.currencyList.forEach(currency => {
          this.chartAccountTotals.currencyTotals[currency] = this.chartAccountSummaryReport.reduce((sum, c) => sum + (c.amounts[currency] || 0), 0);
        });
        console.log(`Final chart account report: ${this.chartAccountSummaryReport.length} chart accounts found`);
      } catch (err) {
        console.error('Error fetching chart account report:', err);
        this.$toast.error('Failed to fetch chart account report.');
      } finally {
        this.loadingChartAccountReport = false;
      }
    },
    async fetchMinistryReport() {
      try {
        this.loadingMinistryReport = true;

        // Fetch all pages of data
        let allSettlements = [];
        let currentPage = 1;
        let totalPages = 1;
        do {
          var _response$data$data4, _response$data$data5;
          const response = await this.$axios.get('/api/settlements', {
            params: {
              branchId: this.selectedBranchId,
              fromDate: this.dateRange.start,
              toDate: this.dateRange.end,
              isPosted: true,
              include: ['ministry', 'currency'],
              page: currentPage,
              // Add page parameter
              limit: 50 // Increase items per page to reduce API calls
            }
          });

          const pageData = ((_response$data$data4 = response.data.data) === null || _response$data$data4 === void 0 ? void 0 : _response$data$data4.settlements) || [];
          allSettlements = allSettlements.concat(pageData);

          // Update pagination info
          const pagination = (_response$data$data5 = response.data.data) === null || _response$data$data5 === void 0 ? void 0 : _response$data$data5.pagination;
          if (pagination) {
            totalPages = pagination.totalPages;
            console.log(`Fetched page ${currentPage} of ${totalPages}, got ${pageData.length} settlements`);
          }
          currentPage++;
        } while (currentPage <= totalPages);
        console.log(`Total settlements fetched: ${allSettlements.length}`);
        console.log('All settlements:', allSettlements);
        const ministryMap = new Map();
        const currencySet = new Set();
        allSettlements.forEach(settlement => {
          var _settlement$currency2;
          const ministry = settlement.ministry;

          // Handle both ministry assignments and null ministry
          let ministryId, ministryName, ministryCode;
          if (ministry) {
            ministryId = ministry.id;
            ministryName = ministry.ministryName;
            ministryCode = ministry.ministryCode;
          } else {
            // Handle settlements with no ministry
            ministryId = 'NO_MINISTRY';
            ministryName = 'No Ministry Assigned';
            ministryCode = 'N/A';
          }
          const currencyCode = ((_settlement$currency2 = settlement.currency) === null || _settlement$currency2 === void 0 ? void 0 : _settlement$currency2.code) || 'LAK';
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1;
          const amount = parseFloat(settlement.amount) || 0;
          const lakEquivalent = amount * exchangeRate;
          currencySet.add(currencyCode);
          if (!ministryMap.has(ministryId)) {
            ministryMap.set(ministryId, {
              ministryId,
              ministryName,
              ministryCode,
              settlementCount: 0,
              totalLakEquivalent: 0,
              amounts: {}
            });
          }
          const ministryRow = ministryMap.get(ministryId);
          ministryRow.settlementCount += 1;
          ministryRow.totalLakEquivalent += lakEquivalent;
          ministryRow.amounts[currencyCode] = (ministryRow.amounts[currencyCode] || 0) + amount;
        });
        this.currencyList = Array.from(currencySet).sort();

        // Sort ministries: real ministries first (alphabetically), then "No Ministry" at the bottom
        this.ministrySummaryReport = Array.from(ministryMap.values()).sort((a, b) => {
          if (a.ministryId === 'NO_MINISTRY') return 1;
          if (b.ministryId === 'NO_MINISTRY') return -1;
          return a.ministryName.localeCompare(b.ministryName);
        });

        // Log ministry breakdown for debugging
        console.log('Ministry breakdown:');
        this.ministrySummaryReport.forEach(ministry => {
          console.log(`- ${ministry.ministryCode}: ${ministry.ministryName} (${ministry.settlementCount} settlements)`);
        });
        this.ministryTotals = {
          totalLakEquivalent: this.ministrySummaryReport.reduce((sum, m) => sum + m.totalLakEquivalent, 0),
          currencyTotals: {}
        };
        this.currencyList.forEach(currency => {
          this.ministryTotals.currencyTotals[currency] = this.ministrySummaryReport.reduce((sum, m) => sum + (m.amounts[currency] || 0), 0);
        });
        console.log(`Final report: ${this.ministrySummaryReport.length} ministries found`);
      } catch (err) {
        console.error('Error fetching ministry report:', err);
        this.$toast.error('Failed to fetch ministry report.');
      } finally {
        this.loadingMinistryReport = false;
      }
    },
    async fetchBankAccountReport() {
      try {
        this.loadingBankAccountReport = true;

        // Fetch all pages of data
        let allSettlements = [];
        let currentPage = 1;
        let totalPages = 1;
        do {
          var _response$data$data6, _response$data$data7;
          const response = await this.$axios.get('/api/settlements', {
            params: {
              branchId: this.selectedBranchId,
              fromDate: this.dateRange.start,
              toDate: this.dateRange.end,
              isPosted: true,
              include: ['bankAccount', 'currency'],
              // Try this first
              page: currentPage,
              limit: 50
            }
          });
          const pageData = ((_response$data$data6 = response.data.data) === null || _response$data$data6 === void 0 ? void 0 : _response$data$data6.settlements) || [];
          allSettlements = allSettlements.concat(pageData);

          // Update pagination info
          const pagination = (_response$data$data7 = response.data.data) === null || _response$data$data7 === void 0 ? void 0 : _response$data$data7.pagination;
          if (pagination) {
            totalPages = pagination.totalPages;
            console.log(`Fetched page ${currentPage} of ${totalPages}, got ${pageData.length} settlements`);
          }
          currentPage++;
        } while (currentPage <= totalPages);
        console.log(`Total settlements fetched for bank account report: ${allSettlements.length}`);

        // DEBUG: Check what bank account data we have
        console.log('=== BANK ACCOUNT DEBUG ===');
        allSettlements.forEach((settlement, index) => {
          if (settlement.bankAccountId || settlement.bankAccount) {
            console.log(`Settlement ${settlement.id}:`, {
              bankAccountId: settlement.bankAccountId,
              bankAccount: settlement.bankAccount,
              method: settlement.method,
              amount: settlement.amount
            });
          }
        });

        // Count settlements by method for debugging
        const methodCounts = {};
        allSettlements.forEach(settlement => {
          const method = settlement.method || 'unknown';
          methodCounts[method] = (methodCounts[method] || 0) + 1;
        });
        console.log('Settlement methods:', methodCounts);
        const bankAccountMap = new Map();
        const currencySet = new Set();
        allSettlements.forEach(settlement => {
          var _settlement$currency3;
          const bankAccount = settlement.bankAccount;

          // DEBUG: Log each settlement processing
          console.log(`Processing settlement ${settlement.id}:`, {
            hasBankAccount: !!bankAccount,
            bankAccountId: settlement.bankAccountId,
            method: settlement.method
          });

          // Handle both bank account assignments and null bank account
          let bankAccountId, accountNumber, accountName, bankName, accountType;
          if (bankAccount) {
            bankAccountId = bankAccount.id;
            accountNumber = bankAccount.accountNumber;
            accountName = bankAccount.accountName;
            bankName = bankAccount.bankName;
            accountType = bankAccount.accountType;
            console.log(`Found bank account: ${accountNumber} - ${accountName}`);
          } else {
            // Handle settlements with no bank account (cash transactions)
            bankAccountId = 'NO_BANK_ACCOUNT';
            accountNumber = 'N/A';
            accountName = 'Cash Transaction';
            bankName = 'No Bank';
            accountType = 'Cash';
            console.log(`Cash transaction: ${settlement.method}`);
          }
          const currencyCode = ((_settlement$currency3 = settlement.currency) === null || _settlement$currency3 === void 0 ? void 0 : _settlement$currency3.code) || 'LAK';
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1;
          const amount = parseFloat(settlement.amount) || 0;
          const lakEquivalent = amount * exchangeRate;
          currencySet.add(currencyCode);
          if (!bankAccountMap.has(bankAccountId)) {
            bankAccountMap.set(bankAccountId, {
              bankAccountId,
              accountNumber,
              accountName,
              bankName,
              accountType,
              settlementCount: 0,
              totalLakEquivalent: 0,
              amounts: {}
            });
            console.log(`Created new bank account group: ${bankAccountId} - ${accountName}`);
          }
          const bankAccountRow = bankAccountMap.get(bankAccountId);
          bankAccountRow.settlementCount += 1;
          bankAccountRow.totalLakEquivalent += lakEquivalent;
          bankAccountRow.amounts[currencyCode] = (bankAccountRow.amounts[currencyCode] || 0) + amount;
        });
        console.log(`Bank account groups created: ${bankAccountMap.size}`);
        console.log('Bank account map:', Array.from(bankAccountMap.entries()));
        this.currencyList = Array.from(currencySet).sort();

        // Sort bank accounts: real bank accounts first (by bank name, then account name), then "Cash" at the bottom
        this.bankAccountSummaryReport = Array.from(bankAccountMap.values()).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1;
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1;

          // Sort by bank name first, then by account name
          const bankComparison = a.bankName.localeCompare(b.bankName);
          if (bankComparison !== 0) return bankComparison;
          return a.accountName.localeCompare(b.accountName);
        });

        // Log bank account breakdown for debugging
        console.log('Final bank account breakdown:');
        this.bankAccountSummaryReport.forEach(bankAccount => {
          console.log(`- ${bankAccount.accountNumber}: ${bankAccount.accountName} at ${bankAccount.bankName} (${bankAccount.settlementCount} settlements)`);
        });
        this.bankAccountTotals = {
          totalLakEquivalent: this.bankAccountSummaryReport.reduce((sum, b) => sum + b.totalLakEquivalent, 0),
          currencyTotals: {}
        };
        this.currencyList.forEach(currency => {
          this.bankAccountTotals.currencyTotals[currency] = this.bankAccountSummaryReport.reduce((sum, b) => sum + (b.amounts[currency] || 0), 0);
        });
        console.log(`Final bank account report: ${this.bankAccountSummaryReport.length} bank accounts found`);
        console.log('Final report data:', this.bankAccountSummaryReport);
      } catch (err) {
        console.error('Error fetching bank account report:', err);
        this.$toast.error('Failed to fetch bank account report.');
      } finally {
        this.loadingBankAccountReport = false;
      }
    },
    // Table events
    onTableOptionsUpdate(options) {
      this.tableOptions = options;
      this.fetchSettlements();
    },
    changeSort(column) {
      if (this.tableOptions.sortBy[0] === column) {
        this.tableOptions.sortDesc[0] = !this.tableOptions.sortDesc[0];
      } else {
        this.tableOptions.sortBy = [column];
        this.tableOptions.sortDesc = [false];
      }
      this.fetchSettlements();
    },
    getSortIcon(column) {
      if (this.tableOptions.sortBy[0] !== column) return 'mdi-sort';
      return this.tableOptions.sortDesc[0] ? 'mdi-sort-descending' : 'mdi-sort-ascending';
    },
    // Filters
    applyFilters() {
      this.tableOptions.page = 1;
      this.fetchSettlements();
    },
    clearFilters() {
      this.filters = {
        method: '',
        dateFrom: '',
        dateTo: ''
      };
      this.searchQuery = '';
      this.applyFilters();
    },
    debounceSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.applyFilters();
      }, 500);
    },
    // Dialog operations
    openCreateDialog() {
      var _this$$auth$user;
      this.dialogMode = 'create';
      this.settlementForm = {
        bookingDate: new Date().toISOString().split('T')[0],
        amount: '',
        method: '',
        exchangeRate: 1,
        notes: '',
        userId: ((_this$$auth$user = this.$auth.user) === null || _this$$auth$user === void 0 ? void 0 : _this$$auth$user.id) || null
      };
      this.dialog = true;
    },
    editSettlement(settlement) {
      this.dialogMode = 'edit';
      this.currentSettlement = settlement;
      this.settlementForm = {
        id: settlement.id,
        bookingDate: settlement.bookingDate,
        amount: settlement.amount,
        method: settlement.method,
        exchangeRate: settlement.exchangeRate || 1,
        notes: settlement.notes || '',
        userId: settlement.userId
      };
      this.dialog = true;
    },
    viewSettlement(settlement) {
      this.dialogMode = 'view';
      this.currentSettlement = settlement;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.dialogMode = 'create';
      this.currentSettlement = {};
      if (this.$refs.form) {
        this.$refs.form.reset();
      }
    },
    async saveSettlement() {
      if (!this.$refs.form.validate()) return;
      this.saving = true;
      try {
        if (this.dialogMode === 'create') {
          await this.$axios.post('/api/settlements', this.settlementForm);
          this.$toast.success('Settlement created successfully');
        } else {
          await this.$axios.put(`/api/settlements/${this.settlementForm.id}`, this.settlementForm);
          this.$toast.success('Settlement updated successfully');
        }
        this.closeDialog();
        await this.loadInitialData();
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving settlement:', error);
        this.$toast.error(((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Failed to save settlement');
      } finally {
        this.saving = false;
      }
    },
    async confirmDelete(settlement) {
      const confirmed = await this.$swal({
        title: 'Delete Settlement?',
        text: `Are you sure you want to delete settlement #${settlement.id}? This action cannot be undone.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
      });
      if (confirmed.isConfirmed) {
        await this.deleteSettlement(settlement);
      }
    },
    async deleteSettlement(settlement) {
      try {
        await this.$axios.delete(`/api/settlements/${settlement.id}`);
        this.$toast.success('Settlement deleted successfully');
        await this.loadInitialData();
      } catch (error) {
        console.error('Error deleting settlement:', error);
        this.$toast.error('Failed to delete settlement');
      }
    },
    // Chart initialization
    initializeCharts() {
      this.initMethodChart();
      this.initTrendChart();
    },
    initMethodChart() {
      if (!this.$refs.methodChart || !window.Chart) return;
      const ctx = this.$refs.methodChart.getContext('2d');
      if (this.methodChart) {
        this.methodChart.destroy();
      }

      // Calculate method distribution from actual settlements data
      const methodCounts = {
        cash: 0,
        bank_transfer: 0,
        deduction: 0
      };
      this.settlements.forEach(settlement => {
        if (methodCounts.hasOwnProperty(settlement.method)) {
          methodCounts[settlement.method]++;
        }
      });
      const data = [methodCounts.cash, methodCounts.bank_transfer, methodCounts.deduction];
      const hasData = data.some(value => value > 0);
      this.methodChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Cash Payment', 'Bank Transfer', 'Salary Deduction'],
          datasets: [{
            data: hasData ? data : [1, 1, 1],
            // Show equal parts if no data
            backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
            borderWidth: 2,
            borderColor: '#fff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  if (!hasData) return 'No data available';
                  return context.label + ': ' + context.parsed + ' settlements';
                }
              }
            }
          }
        }
      });
    },
    initTrendChart() {
      if (!this.$refs.trendChart || !window.Chart) return;
      const ctx = this.$refs.trendChart.getContext('2d');
      if (this.trendChart) {
        this.trendChart.destroy();
      }

      // Calculate monthly trends from actual settlements data
      const monthlyData = {};
      const currentYear = new Date().getFullYear();

      // Initialize months
      for (let i = 0; i < 12; i++) {
        const month = new Date(currentYear, i, 1).toLocaleDateString('en-US', {
          month: 'short'
        });
        monthlyData[month] = 0;
      }

      // Group settlements by month
      this.settlements.forEach(settlement => {
        const date = new Date(settlement.bookingDate);
        if (date.getFullYear() === currentYear) {
          const month = date.toLocaleDateString('en-US', {
            month: 'short'
          });
          const lakEquivalent = (parseFloat(settlement.amount) || 0) * (parseFloat(settlement.exchangeRate) || 1);
          monthlyData[month] += lakEquivalent;
        }
      });
      const labels = Object.keys(monthlyData);
      const data = Object.values(monthlyData);
      const hasData = data.some(value => value > 0);
      this.trendChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Settlement Amount (LAK Equivalent)',
            data: hasData ? data : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#01532B',
            // Your primary color
            backgroundColor: 'rgba(1, 83, 43, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  if (!hasData) return 'No data available';
                  return 'LAK ' + context.parsed.y.toLocaleString();
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return '₭' + value.toLocaleString();
                }
              }
            }
          }
        }
      });
    },
    // Utility methods
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatAmount(amount) {
      if (!amount) return '0.00';
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatMethod(method) {
      const methods = {
        cash: 'Cash Payment',
        bank_transfer: 'Bank Transfer',
        deduction: 'Salary Deduction'
      };
      return methods[method] || method;
    },
    getMethodColor(method) {
      const colors = {
        cash: 'success',
        bank_transfer: 'primary',
        deduction: 'warning'
      };
      return colors[method] || 'grey';
    },
    getMethodIcon(method) {
      const icons = {
        cash: 'mdi-cash',
        bank_transfer: 'mdi-bank',
        deduction: 'mdi-minus-circle'
      };
      return icons[method] || 'mdi-help-circle';
    },
    getStatusColor(status) {
      const colors = {
        approved: 'success',
        settled: 'primary',
        pending: 'warning',
        rejected: 'error'
      };
      return colors[status] || 'grey';
    },
    getStatusIcon(status) {
      const icons = {
        approved: 'mdi-check-circle',
        settled: 'mdi-check-all',
        pending: 'mdi-clock-outline',
        rejected: 'mdi-close-circle'
      };
      return icons[status] || 'mdi-help-circle';
    },
    getInitials(name) {
      if (!name) return '?';
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    },
    getCurrencyColor(currencyCode) {
      const colors = {
        USD: 'success',
        LAK: 'primary',
        THB: 'warning',
        BTH: 'warning',
        // Same as THB
        EUR: 'info',
        CNY: 'error',
        VND: 'secondary'
      };
      return colors[currencyCode] || 'grey';
    },
    getCurrencySymbol(currencyCode) {
      const symbols = {
        USD: '$',
        LAK: '₭',
        THB: '฿',
        BTH: '฿',
        // Same as THB (Thai Baht)
        EUR: '€',
        CNY: '¥',
        VND: '₫'
      };
      return symbols[currencyCode] || '₭';
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/report/MA/settlement/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementvue_type_script_lang_js_ = (settlementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/report/MA/settlement/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(974)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementvue_type_script_lang_js_,
  settlementvue_type_template_id_178d0b7e_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "178d0b7e",
  "f0f67526"
  
)

/* harmony default export */ var settlement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 392:
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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
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

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(536);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("53887fd2", content, true)

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);border-radius:4px;color:#fff;display:inline-block;font-size:14px;line-height:22px;opacity:0;padding:5px 16px;pointer-events:none;position:absolute;text-transform:none;width:auto}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(535);
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _mixins_menuable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(107);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
 // Mixins





 // Helpers




/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_menuable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;
      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }
      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },
    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;
      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }
      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      if (this.attach === false) top += this.pageYOffset;
      return `${this.calcYOverflow(top)}px`;
    },
    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },
    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },
    offsetY() {
      return this.top || this.bottom;
    },
    offsetX() {
      return this.left || this.right;
    },
    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "h"])(this.maxWidth),
        minWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "h"])(this.minWidth),
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },
  mounted() {
    if (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* getSlotType */ "t"])(this, 'activator', true) === 'v-slot') {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_7__[/* consoleError */ "b"])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },
  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },
    deactivate() {
      this.runDelay('close');
    },
    genActivatorListeners() {
      const listeners = _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genActivatorListeners.call(this);
      if (this.openOnFocus) {
        listeners.focus = e => {
          this.getActivator(e);
          this.runDelay('open');
        };
        listeners.blur = e => {
          this.getActivator(e);
          this.runDelay('close');
        };
      }
      listeners.keydown = e => {
        if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* keyCodes */ "y"].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };
      return listeners;
    },
    genActivatorAttributes() {
      return {
        'aria-haspopup': true,
        'aria-expanded': String(this.isActive)
      };
    },
    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },
    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }
  },
  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }
}));

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(360);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      sharedMessage: 'Hello from mixin!'
    };
  },
  methods: {
    // Excel Export Functions
    // Add these methods to your Vue component

    // Individual Export Functions
    async exportMinistryReportToExcel() {
      try {
        if (!this.ministrySummaryReport.length) {
          this.$toast.warning('No ministry data to export');
          return;
        }
        const workbook = this.createExcelWorkbook();
        const worksheet = this.createMinistryWorksheet();

        // Add worksheet to workbook
        xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, worksheet, 'Ministry Report');

        // Generate filename with current date
        const filename = `Ministry_Report_${this.formatDateForFilename()}.xlsx`;

        // Save file
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, filename);
        this.$toast.success('Ministry report exported successfully');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('Failed to export ministry report');
      }
    },
    async exportBankAccountReportToExcel() {
      try {
        if (!this.bankAccountSummaryReport.length) {
          this.$toast.warning('No bank account data to export');
          return;
        }
        const workbook = this.createExcelWorkbook();
        const worksheet = this.createBankAccountWorksheet();
        xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, worksheet, 'Bank Account Report');
        const filename = `Bank_Account_Report_${this.formatDateForFilename()}.xlsx`;
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, filename);
        this.$toast.success('Bank account report exported successfully');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('Failed to export bank account report');
      }
    },
    async exportChartAccountReportToExcel() {
      try {
        if (!this.chartAccountSummaryReport.length) {
          this.$toast.warning('No chart account data to export');
          return;
        }
        const workbook = this.createExcelWorkbook();
        const worksheet = this.createChartAccountWorksheet();
        xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, worksheet, 'Chart Account Report');
        const filename = `Chart_Account_Report_${this.formatDateForFilename()}.xlsx`;
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, filename);
        this.$toast.success('Chart account report exported successfully');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('Failed to export chart account report');
      }
    },
    // Combined Export Function
    async exportAllReportsToExcel() {
      try {
        const hasMinistry = this.ministrySummaryReport && this.ministrySummaryReport.length > 0;
        const hasBankAccount = this.bankAccountSummaryReport && this.bankAccountSummaryReport.length > 0;
        const hasChartAccount = this.chartAccountSummaryReport && this.chartAccountSummaryReport.length > 0;
        if (!hasMinistry && !hasBankAccount && !hasChartAccount) {
          this.$toast.warning('No data available to export');
          return;
        }
        const workbook = this.createExcelWorkbook();

        // Add each report as a separate sheet
        if (hasMinistry) {
          const ministryWorksheet = this.createMinistryWorksheet();
          xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, ministryWorksheet, 'Ministry Report');
        }
        if (hasBankAccount) {
          const bankAccountWorksheet = this.createBankAccountWorksheet();
          xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, bankAccountWorksheet, 'Bank Account Report');
        }
        if (hasChartAccount) {
          const chartAccountWorksheet = this.createChartAccountWorksheet();
          xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, chartAccountWorksheet, 'Chart Account Report');
        }
        const filename = `Financial_Reports_${this.formatDateForFilename()}.xlsx`;
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, filename);
        this.$toast.success('All reports exported successfully');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('Failed to export reports');
      }
    },
    // Helper Functions
    createExcelWorkbook() {
      return xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_new();
    },
    createMinistryWorksheet() {
      var _this$ministryTotals2;
      // Create header row
      const headers = ['#', 'Ministry Code', 'Ministry Name', 'Settlement Count', ...this.currencyList, 'Total (LAK)'];

      // Create data rows
      const data = this.ministrySummaryReport.map((item, index) => {
        const row = [index + 1, item.ministryCode, item.ministryName, item.settlementCount];

        // Add currency amounts
        this.currencyList.forEach(currency => {
          var _item$amounts;
          row.push(((_item$amounts = item.amounts) === null || _item$amounts === void 0 ? void 0 : _item$amounts[currency]) || 0);
        });

        // Add total
        row.push(item.totalLakEquivalent || 0);
        return row;
      });

      // Add totals row
      const totalsRow = ['', '', 'TOTAL', this.ministrySummaryReport.reduce((sum, m) => sum + m.settlementCount, 0)];
      this.currencyList.forEach(currency => {
        var _this$ministryTotals, _this$ministryTotals$;
        totalsRow.push(((_this$ministryTotals = this.ministryTotals) === null || _this$ministryTotals === void 0 ? void 0 : (_this$ministryTotals$ = _this$ministryTotals.currencyTotals) === null || _this$ministryTotals$ === void 0 ? void 0 : _this$ministryTotals$[currency]) || 0);
      });
      totalsRow.push(((_this$ministryTotals2 = this.ministryTotals) === null || _this$ministryTotals2 === void 0 ? void 0 : _this$ministryTotals2.totalLakEquivalent) || 0);

      // Combine headers, data, and totals
      const worksheetData = [headers, ...data, totalsRow];

      // Create worksheet
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].aoa_to_sheet(worksheetData);

      // Add metadata
      this.addWorksheetMetadata(worksheet, 'Ministry Financial Report');
      return worksheet;
    },
    createBankAccountWorksheet() {
      var _this$bankAccountTota3;
      const headers = ['#', 'Account Number', 'Account Name', 'Bank Name', 'Account Type', 'Settlement Count', ...this.currencyList, 'Total (LAK)'];
      const data = this.bankAccountSummaryReport.map((item, index) => {
        const row = [index + 1, item.accountNumber, item.accountName, item.bankName, item.accountType, item.settlementCount];
        this.currencyList.forEach(currency => {
          var _item$amounts2;
          row.push(((_item$amounts2 = item.amounts) === null || _item$amounts2 === void 0 ? void 0 : _item$amounts2[currency]) || 0);
        });
        row.push(item.totalLakEquivalent || 0);
        return row;
      });
      const totalsRow = ['', '', '', '', 'TOTAL', this.bankAccountSummaryReport.reduce((sum, b) => sum + b.settlementCount, 0)];
      this.currencyList.forEach(currency => {
        var _this$bankAccountTota, _this$bankAccountTota2;
        totalsRow.push(((_this$bankAccountTota = this.bankAccountTotals) === null || _this$bankAccountTota === void 0 ? void 0 : (_this$bankAccountTota2 = _this$bankAccountTota.currencyTotals) === null || _this$bankAccountTota2 === void 0 ? void 0 : _this$bankAccountTota2[currency]) || 0);
      });
      totalsRow.push(((_this$bankAccountTota3 = this.bankAccountTotals) === null || _this$bankAccountTota3 === void 0 ? void 0 : _this$bankAccountTota3.totalLakEquivalent) || 0);
      const worksheetData = [headers, ...data, totalsRow];
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].aoa_to_sheet(worksheetData);
      this.addWorksheetMetadata(worksheet, 'Bank Account Financial Report');
      return worksheet;
    },
    createChartAccountWorksheet() {
      var _this$chartAccountTot3;
      const headers = ['#', 'Account Number', 'Account Name', 'Settlement Count', ...this.currencyList, 'Total (LAK)'];
      const data = this.chartAccountSummaryReport.map((item, index) => {
        const row = [index + 1, item.accountNumber, item.accountName, item.settlementCount];
        this.currencyList.forEach(currency => {
          var _item$amounts3;
          row.push(((_item$amounts3 = item.amounts) === null || _item$amounts3 === void 0 ? void 0 : _item$amounts3[currency]) || 0);
        });
        row.push(item.totalLakEquivalent || 0);
        return row;
      });
      const totalsRow = ['', '', 'TOTAL', this.chartAccountSummaryReport.reduce((sum, c) => sum + c.settlementCount, 0)];
      this.currencyList.forEach(currency => {
        var _this$chartAccountTot, _this$chartAccountTot2;
        totalsRow.push(((_this$chartAccountTot = this.chartAccountTotals) === null || _this$chartAccountTot === void 0 ? void 0 : (_this$chartAccountTot2 = _this$chartAccountTot.currencyTotals) === null || _this$chartAccountTot2 === void 0 ? void 0 : _this$chartAccountTot2[currency]) || 0);
      });
      totalsRow.push(((_this$chartAccountTot3 = this.chartAccountTotals) === null || _this$chartAccountTot3 === void 0 ? void 0 : _this$chartAccountTot3.totalLakEquivalent) || 0);
      const worksheetData = [headers, ...data, totalsRow];
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].aoa_to_sheet(worksheetData);
      this.addWorksheetMetadata(worksheet, 'Chart Account Financial Report');
      return worksheet;
    },
    addWorksheetMetadata(worksheet, title) {
      var _this$dateRange, _this$dateRange2;
      // Add title and date range as metadata
      const metadata = [[title], [`Report Period: ${((_this$dateRange = this.dateRange) === null || _this$dateRange === void 0 ? void 0 : _this$dateRange.start) || 'N/A'} to ${((_this$dateRange2 = this.dateRange) === null || _this$dateRange2 === void 0 ? void 0 : _this$dateRange2.end) || 'N/A'}`], [`Generated: ${new Date().toLocaleString()}`], [''] // Empty row before data
      ];

      // Insert metadata at the top
      xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].sheet_add_aoa(worksheet, metadata, {
        origin: 'A1'
      });

      // Adjust the existing data to start after metadata
      const range = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].decode_range(worksheet['!ref']);
      range.e.r += metadata.length;
      worksheet['!ref'] = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].encode_range(range);
    },
    formatDateForFilename() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${year}${month}${day}_${hours}${minutes}`;
    }
  }
});

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(975);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("50bdc3b0", content, true, context)
};

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178d0b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178d0b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178d0b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178d0b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_178d0b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card[data-v-178d0b7e]{transition:all .3s ease}.v-card[data-v-178d0b7e]:hover{transform:translateY(-2px)}.sortable[data-v-178d0b7e]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.sortable[data-v-178d0b7e]:hover{background-color:hsla(0,0%,100%,.1)!important}.primary.lighten-2 th[data-v-178d0b7e]{background-color:var(--v-primary-lighten2)!important}.chart-account-table[data-v-178d0b7e]{font-family:\"Roboto\",sans-serif}.chart-account-table thead th[data-v-178d0b7e]{background-color:var(--v-primary-base)!important;border-right:1px solid hsla(0,0%,100%,.2)!important;color:#fff!important;font-size:.875rem!important;font-weight:700!important;padding:12px 8px!important}.chart-account-table tbody td[data-v-178d0b7e]{border-bottom:1px solid #e0e0e0!important;border-right:1px solid #f5f5f5!important;font-size:.8rem!important;padding:8px!important}.chart-account-table tbody tr[data-v-178d0b7e]:hover{background-color:#f8f9fa!important}.chart-account-table .primary.lighten-4 td[data-v-178d0b7e]{background-color:var(--v-primary-lighten4)!important;border-top:2px solid var(--v-primary-base)!important;font-weight:700!important}@media (max-width:768px){.chart-account-table[data-v-178d0b7e]{font-size:.75rem}.chart-account-table tbody td[data-v-178d0b7e],.chart-account-table thead th[data-v-178d0b7e]{font-size:.7rem!important;padding:6px 4px!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map