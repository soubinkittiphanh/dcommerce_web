exports.ids = [195];
exports.modules = {

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js
var VSimpleTable = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(377);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/master/index.vue?vue&type=template&id=2948fc5e&scoped=true&














var mastervue_type_template_id_2948fc5e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "payment-settlement-analysis"
  }, [_vm._ssrNode("<div class=\"report-header\" data-v-2948fc5e><div class=\"title-section\" data-v-2948fc5e><h1 class=\"page-title\" data-v-2948fc5e><i class=\"fas fa-analytics\" data-v-2948fc5e></i>\n        ການວິເຄາະການຊຳລະ ແລະລາຍຮັບ\n      </h1> <p class=\"page-subtitle\" data-v-2948fc5e>Payment &amp; Settlement Analysis</p></div></div> "), _c(VCard["a" /* default */], {
    staticClass: "filter-card mb-4",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "filter-title"
  }, [_c('i', {
    staticClass: "fas fa-calendar"
  }), _vm._v("\n      ເລືອກເດືອນ (Monthly Filter)\n    ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
    attrs: {
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.yearOptions,
      "label": "Select Year",
      "outlined": "",
      "prepend-icon": "mdi-calendar"
    },
    on: {
      "change": _vm.onDateChange
    },
    model: {
      value: _vm.selectedYear,
      callback: function ($$v) {
        _vm.selectedYear = $$v;
      },
      expression: "selectedYear"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.monthOptions,
      "item-text": "name",
      "item-value": "value",
      "label": "Select Month",
      "outlined": "",
      "prepend-icon": "mdi-calendar-month"
    },
    on: {
      "change": _vm.onDateChange
    },
    model: {
      value: _vm.selectedMonthNum,
      callback: function ($$v) {
        _vm.selectedMonthNum = $$v;
      },
      expression: "selectedMonthNum"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "filter-info"
  }, [_c(VAlert["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "type": "info",
      "border": "left",
      "colored-border": ""
    }
  }, [_c('strong', [_vm._v("Selected Month:")]), _vm._v(" " + _vm._s(_vm.formattedSelectedMonth) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "filter-actions"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.loading,
      "large": ""
    },
    on: {
      "click": _vm.fetchAllReports
    }
  }, [_c('i', {
    staticClass: "fas fa-search"
  }), _vm._v("\n                ວິເຄາະຂໍ້ມູນ (Analyze Data)\n              ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "large": ""
    },
    on: {
      "click": _vm.resetMonth
    }
  }, [_c('i', {
    staticClass: "fas fa-undo"
  }), _vm._v("\n                ຣີເຊັດ (Reset)\n              ")])], 1)], 1)])], 1)], 1)], 1), _vm._ssrNode(" "), _vm.loading ? _c(VRow["a" /* default */], {
    attrs: {
      "justify": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "cols": "12"
    }
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary",
      "size": "64"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2"
  }, [_vm._v("Loading reports...")])], 1)], 1) : _vm._e(), _vm._ssrNode(" <div class=\"section-header mb-3\" data-v-2948fc5e><h2 class=\"section-title\" data-v-2948fc5e><i class=\"fas fa-balance-scale\" data-v-2948fc5e></i>\n      ຍອດຍົກມາ (BALANCE FORWARD)\n    </h2></div> "), _c(VRow["a" /* default */], {
    staticClass: "summary-cards mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card balance-forward-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-calendar-minus"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ຍອດຍົກມາທັງໝົດ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Total Balance Forward")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v("\n                " + _vm._s(_vm.formatAmount(_vm.balanceForwardData.totals.totalLakEquivalent)) + "\n              ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("LAK")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card balance-ministry-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-building"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ກະຊວງມີຍອດ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Ministries with Balance")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v("\n                " + _vm._s(_vm.balanceForwardData.byMinistry.filter(m => m.totalLakEquivalent !== 0).length) + "\n              ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Ministries")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card balance-account-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-university"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ບັນຊີມີຍອດ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Accounts with Balance")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v("\n                " + _vm._s(_vm.balanceForwardData.byBankAccount.filter(b => b.totalLakEquivalent !== 0).length) + "\n              ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Accounts")])])])])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
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
    staticClass: "success--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-office-building")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ຍອດຍົກມາ ຕາມກົມ (" + _vm._s(_vm.balanceForwardData.byMinistry.length) + ")\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.balanceForwardData.byMinistry.length,
      "loading": _vm.exporting
    },
    on: {
      "click": function ($event) {
        return _vm.exportReport('balance-ministry');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingBalanceForward
    },
    on: {
      "click": _vm.fetchBalanceForward
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingBalanceForward ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "success"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("Loading balance forward...")])], 1) : !_vm.balanceForwardData.byMinistry.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No balance forward data\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        return [_c('thead', [_c('tr', {
          staticClass: "success lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Code\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Name\n                  ")]), _vm._v(" "), _vm._l(Object.keys(_vm.balanceForwardData.totals.currencyTotals), function (currency) {
          return _c('th', {
            key: 'bf-min-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Balance (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', _vm._l(_vm.balanceForwardData.byMinistry.filter(m => m.totalLakEquivalent !== 0), function (item, index) {
          return _c('tr', {
            key: item.ministryId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'green lighten-5': item.totalLakEquivalent > 0,
              'red lighten-5': item.totalLakEquivalent < 0
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.ministryCode))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.ministryName))]), _vm._v(" "), _vm._l(Object.keys(_vm.balanceForwardData.totals.currencyTotals), function (currency) {
            var _item$amounts;
            return _c('td', {
              key: 'bf-min-amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts = item.amounts) === null || _item$amounts === void 0 ? void 0 : _item$amounts[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold",
            class: item.totalLakEquivalent >= 0 ? 'success--text' : 'error--text'
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), 0)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" <div class=\"section-header mb-3\" data-v-2948fc5e><h2 class=\"section-title\" data-v-2948fc5e><i class=\"fas fa-credit-card\" data-v-2948fc5e></i>\n      ລາຍຈ່າຍ (PAYMENTS)\n    </h2></div> "), _c(VRow["a" /* default */], {
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
    staticClass: "success--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-office-building")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ລາຍຈ່າຍ ຕາມກົມ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.paymentMinistryReport.length,
      "loading": _vm.exporting
    },
    on: {
      "click": function ($event) {
        return _vm.exportReport('payment-ministry');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingPaymentMinistry
    },
    on: {
      "click": _vm.fetchPaymentMinistryReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingPaymentMinistry ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "success"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading payment by ministry...\n            ")])], 1) : !_vm.paymentMinistryReport.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No payment data available\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        var _vm$paymentMinistryTo3;
        return [_c('thead', [_c('tr', {
          staticClass: "success lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Code\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Count\n                  ")]), _vm._v(" "), _vm._l(_vm.paymentCurrencyList, function (currency) {
          return _c('th', {
            key: 'pay-min-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Total (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.paymentMinistryReport, function (item, index) {
          return _c('tr', {
            key: item.ministryId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'orange lighten-4': item.ministryId === 'NO_MINISTRY'
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.ministryCode))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.ministryName))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2 text-right"
          }, [_vm._v(_vm._s(item.count))]), _vm._v(" "), _vm._l(_vm.paymentCurrencyList, function (currency) {
            var _item$amounts2;
            return _c('td', {
              key: 'pay-min-amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts2 = item.amounts) === null || _item$amounts2 === void 0 ? void 0 : _item$amounts2[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold success--text"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "success lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "3"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.paymentMinistryReport.reduce((sum, m) => sum + m.count, 0)) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.paymentCurrencyList, function (currency) {
          var _vm$paymentMinistryTo, _vm$paymentMinistryTo2;
          return _c('td', {
            key: 'pay-min-sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$paymentMinistryTo = _vm.paymentMinistryTotals) === null || _vm$paymentMinistryTo === void 0 ? void 0 : (_vm$paymentMinistryTo2 = _vm$paymentMinistryTo.currencyTotals) === null || _vm$paymentMinistryTo2 === void 0 ? void 0 : _vm$paymentMinistryTo2[currency]) || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2 success--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$paymentMinistryTo3 = _vm.paymentMinistryTotals) === null || _vm$paymentMinistryTo3 === void 0 ? void 0 : _vm$paymentMinistryTo3.totalLakEquivalent) || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
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
    staticClass: "success--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-bank")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ລາຍຈ່າຍ ຕາມບັນຊີທະນາຄານ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.paymentBankReport.length,
      "loading": _vm.exporting
    },
    on: {
      "click": function ($event) {
        return _vm.exportReport('payment-bank');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingPaymentBank
    },
    on: {
      "click": _vm.fetchPaymentBankReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingPaymentBank ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "success"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading payment by bank account...\n            ")])], 1) : !_vm.paymentBankReport.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No payment bank data available\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        var _vm$paymentBankTotals3;
        return [_c('thead', [_c('tr', {
          staticClass: "success lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Number\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Bank Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Count\n                  ")]), _vm._v(" "), _vm._l(_vm.paymentCurrencyList, function (currency) {
          return _c('th', {
            key: 'pay-bank-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Total (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.paymentBankReport, function (item, index) {
          return _c('tr', {
            key: item.bankAccountId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'orange lighten-4': item.bankAccountId === 'NO_BANK_ACCOUNT'
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.accountNumber))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.accountName))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.bankName))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2 text-right"
          }, [_vm._v(_vm._s(item.count))]), _vm._v(" "), _vm._l(_vm.paymentCurrencyList, function (currency) {
            var _item$amounts3;
            return _c('td', {
              key: 'pay-bank-amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts3 = item.amounts) === null || _item$amounts3 === void 0 ? void 0 : _item$amounts3[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold success--text"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "success lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "4"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.paymentBankReport.reduce((sum, b) => sum + b.count, 0)) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.paymentCurrencyList, function (currency) {
          var _vm$paymentBankTotals, _vm$paymentBankTotals2;
          return _c('td', {
            key: 'pay-bank-sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$paymentBankTotals = _vm.paymentBankTotals) === null || _vm$paymentBankTotals === void 0 ? void 0 : (_vm$paymentBankTotals2 = _vm$paymentBankTotals.currencyTotals) === null || _vm$paymentBankTotals2 === void 0 ? void 0 : _vm$paymentBankTotals2[currency]) || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2 success--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$paymentBankTotals3 = _vm.paymentBankTotals) === null || _vm$paymentBankTotals3 === void 0 ? void 0 : _vm$paymentBankTotals3.totalLakEquivalent) || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" <div class=\"section-header mb-3 mt-6\" data-v-2948fc5e><h2 class=\"section-title\" data-v-2948fc5e><i class=\"fas fa-receipt\" data-v-2948fc5e></i>\n      ລາຍຮັບ (SETTLEMENTS)\n    </h2></div> "), _c(VRow["a" /* default */], {
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
    staticClass: "success--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-office-building")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ລາຍຮັບ ຕາມກົມ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.settlementMinistryReport.length,
      "loading": _vm.exporting
    },
    on: {
      "click": function ($event) {
        return _vm.exportReport('settlement-ministry');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingSettlementMinistry
    },
    on: {
      "click": _vm.fetchSettlementMinistryReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingSettlementMinistry ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "success"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading settlement by ministry...\n            ")])], 1) : !_vm.settlementMinistryReport.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No settlement data available\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        var _vm$settlementMinistr3;
        return [_c('thead', [_c('tr', {
          staticClass: "success lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Code\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Count\n                  ")]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
          return _c('th', {
            key: 'set-min-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Total (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.settlementMinistryReport, function (item, index) {
          return _c('tr', {
            key: item.ministryId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'orange lighten-4': item.ministryId === 'NO_MINISTRY'
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.ministryCode))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.ministryName))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2 text-right"
          }, [_vm._v(_vm._s(item.count))]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
            var _item$amounts4;
            return _c('td', {
              key: 'set-min-amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts4 = item.amounts) === null || _item$amounts4 === void 0 ? void 0 : _item$amounts4[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold success--text"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "success lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "3"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.settlementMinistryReport.reduce((sum, m) => sum + m.count, 0)) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
          var _vm$settlementMinistr, _vm$settlementMinistr2;
          return _c('td', {
            key: 'set-min-sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$settlementMinistr = _vm.settlementMinistryTotals) === null || _vm$settlementMinistr === void 0 ? void 0 : (_vm$settlementMinistr2 = _vm$settlementMinistr.currencyTotals) === null || _vm$settlementMinistr2 === void 0 ? void 0 : _vm$settlementMinistr2[currency]) || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2 success--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$settlementMinistr3 = _vm.settlementMinistryTotals) === null || _vm$settlementMinistr3 === void 0 ? void 0 : _vm$settlementMinistr3.totalLakEquivalent) || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
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
    staticClass: "success--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-bank")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ລາຍຮັບ ຕາມບັນຊີທະນາຄານ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.settlementBankReport.length,
      "loading": _vm.exporting
    },
    on: {
      "click": function ($event) {
        return _vm.exportReport('settlement-bank');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingSettlementBank
    },
    on: {
      "click": _vm.fetchSettlementBankReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingSettlementBank ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "success"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading settlement by bank account...\n            ")])], 1) : !_vm.settlementBankReport.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No settlement bank data available\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        var _vm$settlementBankTot3;
        return [_c('thead', [_c('tr', {
          staticClass: "success lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Number\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Bank Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Count\n                  ")]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
          return _c('th', {
            key: 'set-bank-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Total (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.settlementBankReport, function (item, index) {
          return _c('tr', {
            key: item.bankAccountId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'orange lighten-4': item.bankAccountId === 'NO_BANK_ACCOUNT'
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.accountNumber))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.accountName))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.bankName))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2 text-right"
          }, [_vm._v(_vm._s(item.count))]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
            var _item$amounts5;
            return _c('td', {
              key: 'set-bank-amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts5 = item.amounts) === null || _item$amounts5 === void 0 ? void 0 : _item$amounts5[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold success--text"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "success lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "4"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.settlementBankReport.reduce((sum, b) => sum + b.count, 0)) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
          var _vm$settlementBankTot, _vm$settlementBankTot2;
          return _c('td', {
            key: 'set-bank-sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$settlementBankTot = _vm.settlementBankTotals) === null || _vm$settlementBankTot === void 0 ? void 0 : (_vm$settlementBankTot2 = _vm$settlementBankTot.currencyTotals) === null || _vm$settlementBankTot2 === void 0 ? void 0 : _vm$settlementBankTot2[currency]) || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2 success--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$settlementBankTot3 = _vm.settlementBankTotals) === null || _vm$settlementBankTot3 === void 0 ? void 0 : _vm$settlementBankTot3.totalLakEquivalent) || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
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
    staticClass: "success--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-chart-tree")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ລາຍຮັບ ຕາມບັນຊີຜັງ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.settlementChartReport.length,
      "loading": _vm.exporting
    },
    on: {
      "click": function ($event) {
        return _vm.exportReport('settlement-chart');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingSettlementChart
    },
    on: {
      "click": _vm.fetchSettlementChartReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingSettlementChart ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "success"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading settlement by chart account...\n            ")])], 1) : !_vm.settlementChartReport.length ? _c('div', {
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
        var _vm$settlementChartTo3;
        return [_c('thead', [_c('tr', {
          staticClass: "success lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Chart Account Code\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Chart Account Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Count\n                  ")]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
          return _c('th', {
            key: 'set-chart-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Total (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.settlementChartReport, function (item, index) {
          return _c('tr', {
            key: item.chartAccountId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'orange lighten-4': item.chartAccountId === 'NO_CHART_ACCOUNT'
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.chartAccountCode))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.chartAccountName))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2 text-right"
          }, [_vm._v(_vm._s(item.count))]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
            var _item$amounts6;
            return _c('td', {
              key: 'set-chart-amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts6 = item.amounts) === null || _item$amounts6 === void 0 ? void 0 : _item$amounts6[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold success--text"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "success lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "3"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2"
        }, [_vm._v("\n                    " + _vm._s(_vm.settlementChartReport.reduce((sum, c) => sum + c.count, 0)) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.settlementCurrencyList, function (currency) {
          var _vm$settlementChartTo, _vm$settlementChartTo2;
          return _c('td', {
            key: 'set-chart-sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$settlementChartTo = _vm.settlementChartTotals) === null || _vm$settlementChartTo === void 0 ? void 0 : (_vm$settlementChartTo2 = _vm$settlementChartTo.currencyTotals) === null || _vm$settlementChartTo2 === void 0 ? void 0 : _vm$settlementChartTo2[currency]) || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2 success--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_vm$settlementChartTo3 = _vm.settlementChartTotals) === null || _vm$settlementChartTo3 === void 0 ? void 0 : _vm$settlementChartTo3.totalLakEquivalent) || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" <div class=\"section-header mb-3 mt-6\" data-v-2948fc5e><h2 class=\"section-title\" data-v-2948fc5e><i class=\"fas fa-calculator\" data-v-2948fc5e></i>\n      ຍອດຄົງເຫຼືອ (OUTSTANDING BALANCE)\n    </h2></div> "), _c(VRow["a" /* default */], {
    staticClass: "summary-cards mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card outstanding-total-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-balance-scale-right"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ຍອດຄົງເຫຼືອທັງໝົດ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Total Outstanding Balance")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v("\n                " + _vm._s(_vm.formatAmount(_vm.outstandingBalanceData.totals.totalLakEquivalent)) + "\n              ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("LAK")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card outstanding-ministry-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-building"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ກະຊວງມີຍອດຄົງເຫຼືອ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Ministries with Outstanding")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v("\n                " + _vm._s(_vm.outstandingBalanceData.byMinistry.filter(m => Math.abs(m.totalLakEquivalent) > 0.01).length) + "\n              ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Ministries")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card outstanding-account-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-university"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ບັນຊີມີຍອດຄົງເຫຼືອ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Accounts with Outstanding")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v("\n                " + _vm._s(_vm.outstandingBalanceData.byBankAccount.filter(b => Math.abs(b.totalLakEquivalent) > 0.01).length) + "\n              ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Accounts")])])])])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
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
    staticClass: "success--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-office-building")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ຍອດຄົງເຫຼືອ ຕາມກົມ (" + _vm._s(_vm.outstandingBalanceData.byMinistry.length) + ")\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.outstandingBalanceData.byMinistry.length,
      "loading": _vm.exporting
    },
    on: {
      "click": function ($event) {
        return _vm.exportReport('outstanding-ministry');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingOutstandingBalance
    },
    on: {
      "click": _vm.calculateOutstandingBalance
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingOutstandingBalance ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "success"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading outstanding balance...\n            ")])], 1) : !_vm.outstandingBalanceData.byMinistry.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No outstanding balance data\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        return [_c('thead', [_c('tr', {
          staticClass: "success lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Code\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Ministry Name\n                  ")]), _vm._v(" "), _vm._l(Object.keys(_vm.outstandingBalanceData.totals.currencyTotals), function (currency) {
          return _c('th', {
            key: 'out-min-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Outstanding (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.outstandingBalanceData.byMinistry.filter(m => Math.abs(m.totalLakEquivalent) > 0.01), function (item, index) {
          return _c('tr', {
            key: item.ministryId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'green lighten-5': item.totalLakEquivalent > 0,
              'red lighten-5': item.totalLakEquivalent < 0
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.ministryCode))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.ministryName))]), _vm._v(" "), _vm._l(Object.keys(_vm.outstandingBalanceData.totals.currencyTotals), function (currency) {
            var _item$amounts7;
            return _c('td', {
              key: 'out-min-amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts7 = item.amounts) === null || _item$amounts7 === void 0 ? void 0 : _item$amounts7[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold",
            class: item.totalLakEquivalent >= 0 ? 'success--text' : 'error--text'
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "success lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "3"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _vm._l(Object.keys(_vm.outstandingBalanceData.totals.currencyTotals), function (currency) {
          return _c('td', {
            key: 'out-min-sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(_vm.outstandingBalanceData.totals.currencyTotals[currency] || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2",
          class: _vm.outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'success--text' : 'error--text'
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(_vm.outstandingBalanceData.totals.totalLakEquivalent || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
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
    staticClass: "success--text py-2 px-4 d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-bank")]), _vm._v(" "), _c('span', {
    staticClass: "text-subtitle-1 font-weight-medium"
  }, [_vm._v("\n            ຍອດຄົງເຫຼືອ ຕາມບັນຊີທະນາຄານ\n          ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": "",
      "outlined": "",
      "disabled": !_vm.outstandingBalanceData.byBankAccount.length,
      "loading": _vm.exporting
    },
    on: {
      "click": function ($event) {
        return _vm.exportReport('outstanding-bank');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n            Export\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "loading": _vm.loadingOutstandingBalance
    },
    on: {
      "click": _vm.calculateOutstandingBalance
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingOutstandingBalance ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "success"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-caption"
  }, [_vm._v("\n              Loading outstanding balance...\n            ")])], 1) : !_vm.outstandingBalanceData.byBankAccount.length ? _c('div', {
    staticClass: "text-center py-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-subtitle-2 grey--text"
  }, [_vm._v("\n              No outstanding balance data\n            ")])], 1) : _c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        return [_c('thead', [_c('tr', {
          staticClass: "success lighten-3"
        }, [_c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("#")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Number\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Account Name\n                  ")]), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold"
        }, [_vm._v("\n                    Bank Name\n                  ")]), _vm._v(" "), _vm._l(Object.keys(_vm.outstandingBalanceData.totals.currencyTotals), function (currency) {
          return _c('th', {
            key: 'out-bank-' + currency,
            staticClass: "white--text text-caption font-weight-bold text-right"
          }, [_vm._v("\n                    " + _vm._s(currency) + "\n                  ")]);
        }), _vm._v(" "), _c('th', {
          staticClass: "white--text text-caption font-weight-bold text-right"
        }, [_vm._v("\n                    Outstanding (LAK)\n                  ")])], 2)]), _vm._v(" "), _c('tbody', [_vm._l(_vm.outstandingBalanceData.byBankAccount.filter(b => Math.abs(b.totalLakEquivalent) > 0.01), function (item, index) {
          return _c('tr', {
            key: item.bankAccountId,
            class: {
              'grey lighten-5': index % 2 === 0,
              'green lighten-5': item.totalLakEquivalent > 0,
              'red lighten-5': item.totalLakEquivalent < 0
            }
          }, [_c('td', {
            staticClass: "text-caption text-center"
          }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.accountNumber))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.accountName))]), _vm._v(" "), _c('td', {
            staticClass: "text-body-2"
          }, [_vm._v(_vm._s(item.bankName))]), _vm._v(" "), _vm._l(Object.keys(_vm.outstandingBalanceData.totals.currencyTotals), function (currency) {
            var _item$amounts8;
            return _c('td', {
              key: 'out-bank-amt-' + currency,
              staticClass: "text-body-2 text-right"
            }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(((_item$amounts8 = item.amounts) === null || _item$amounts8 === void 0 ? void 0 : _item$amounts8[currency]) || 0)) + "\n                  ")]);
          }), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold",
            class: item.totalLakEquivalent >= 0 ? 'success--text' : 'error--text'
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(item.totalLakEquivalent || 0)) + "\n                  ")])], 2);
        }), _vm._v(" "), _c('tr', {
          staticClass: "success lighten-4"
        }, [_c('td', {
          staticClass: "font-weight-bold text-caption",
          attrs: {
            "colspan": "4"
          }
        }, [_vm._v("\n                    ລວມ\n                  ")]), _vm._v(" "), _vm._l(Object.keys(_vm.outstandingBalanceData.totals.currencyTotals), function (currency) {
          return _c('td', {
            key: 'out-bank-sum-' + currency,
            staticClass: "text-right font-weight-bold text-body-2"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(_vm.outstandingBalanceData.totals.currencyTotals[currency] || 0)) + "\n                  ")]);
        }), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold text-body-2",
          class: _vm.outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'success--text' : 'error--text'
        }, [_vm._v("\n                    " + _vm._s(_vm.formatAmount(_vm.outstandingBalanceData.totals.totalLakEquivalent || 0)) + "\n                  ")])], 2)], 2)];
      },
      proxy: true
    }])
  })], 1)], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/report/MA/master/index.vue?vue&type=template&id=2948fc5e&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/master/index.vue?vue&type=script&lang=js&
var mastervue_type_script_lang_js_ = __webpack_require__(636);

// CONCATENATED MODULE: ./pages/admin/report/MA/master/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_mastervue_type_script_lang_js_ = (mastervue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/report/MA/master/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(970)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_mastervue_type_script_lang_js_,
  mastervue_type_template_id_2948fc5e_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2948fc5e",
  "e712e034"
  
)

/* harmony default export */ var master = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(450);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("1c8f4490", content, true)

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:\"\";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-bottom-right-radius:inherit;border-top-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-bottom:8px;padding-top:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:\"\";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(449);
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(140);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
// Styles
 // Extensions

 // Components


 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-alert',
  props: {
    border: {
      type: String,
      validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    coloredBorder: Boolean,
    dense: Boolean,
    dismissible: Boolean,
    closeIcon: {
      type: String,
      default: '$cancel'
    },
    icon: {
      default: '',
      type: [Boolean, String],
      validator(val) {
        return typeof val === 'string' || val === false;
      }
    },
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,
    type: {
      type: String,
      validator(val) {
        return ['info', 'error', 'success', 'warning'].includes(val);
      }
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    __cachedBorder() {
      if (!this.border) return null;
      let data = {
        staticClass: 'v-alert__border',
        class: {
          [`v-alert__border--${this.border}`]: true
        }
      };
      if (this.coloredBorder) {
        data = this.setBackgroundColor(this.computedColor, data);
        data.class['v-alert__border--has-color'] = true;
      }
      return this.$createElement('div', data);
    },
    __cachedDismissible() {
      if (!this.dismissible) return null;
      const color = this.iconColor;
      return this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        staticClass: 'v-alert__dismissible',
        props: {
          color,
          icon: true,
          small: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: () => this.isActive = false
        }
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        props: {
          color
        }
      }, this.closeIcon)]);
    },
    __cachedIcon() {
      if (!this.computedIcon) return null;
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-alert__icon',
        props: {
          color: this.iconColor
        }
      }, this.computedIcon);
    },
    classes() {
      const classes = {
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-alert--border': Boolean(this.border),
        'v-alert--dense': this.dense,
        'v-alert--outlined': this.outlined,
        'v-alert--prominent': this.prominent,
        'v-alert--text': this.text
      };
      if (this.border) {
        classes[`v-alert--border-${this.border}`] = true;
      }
      return classes;
    },
    computedColor() {
      return this.color || this.type;
    },
    computedIcon() {
      if (this.icon === false) return false;
      if (typeof this.icon === 'string' && this.icon) return this.icon;
      if (!['error', 'info', 'success', 'warning'].includes(this.type)) return false;
      return `$${this.type}`;
    },
    hasColoredIcon() {
      return this.hasText || Boolean(this.border) && this.coloredBorder;
    },
    hasText() {
      return this.text || this.outlined;
    },
    iconColor() {
      return this.hasColoredIcon ? this.computedColor : undefined;
    },
    isDark() {
      if (this.type && !this.coloredBorder && !this.outlined) return true;
      return _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].options.computed.isDark.call(this);
    }
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('outline')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* breaking */ "a"])('outline', 'outlined', this);
    }
  },
  methods: {
    genWrapper() {
      const children = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
        toggle: this.toggle
      }) : this.__cachedDismissible];
      const data = {
        staticClass: 'v-alert__wrapper'
      };
      return this.$createElement('div', data, children);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-alert__content'
      }, this.$slots.default);
    },
    genAlert() {
      let data = {
        staticClass: 'v-alert',
        attrs: {
          role: 'alert'
        },
        on: this.listeners$,
        class: this.classes,
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      };
      if (!this.coloredBorder) {
        const setColor = this.hasText ? this.setTextColor : this.setBackgroundColor;
        data = setColor(this.computedColor, data);
      }
      return this.$createElement('div', data, [this.genWrapper()]);
    },
    /** @public */
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  render(h) {
    const render = this.genAlert();
    if (!this.transition) return render;
    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [render]);
  }
}));

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(339);
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(340);
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(341);
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(342);
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(343);
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(344);
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(345);
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(346);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(347);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(348);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(349);
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(350);
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(351);
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(352);
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(353);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(354);
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_28__);





























/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'PaymentSettlementAnalysis',
  data() {
    return {
      // Outstanding Balance Data (NEW)
      outstandingBalanceData: {
        byMinistry: [],
        byBankAccount: [],
        byCurrency: [],
        totals: {
          totalLakEquivalent: 0,
          currencyTotals: {}
        }
      },
      loadingOutstandingBalance: false,
      loading: false,
      exporting: false,
      selectedBranchId: 1,
      // You can make this dynamic if needed

      // Monthly Date Selection (dropdowns)
      selectedYear: new Date().getFullYear(),
      selectedMonthNum: new Date().getMonth() + 1,
      // Month options for dropdown
      monthOptions: [{
        name: 'January',
        value: 1
      }, {
        name: 'February',
        value: 2
      }, {
        name: 'March',
        value: 3
      }, {
        name: 'April',
        value: 4
      }, {
        name: 'May',
        value: 5
      }, {
        name: 'June',
        value: 6
      }, {
        name: 'July',
        value: 7
      }, {
        name: 'August',
        value: 8
      }, {
        name: 'September',
        value: 9
      }, {
        name: 'October',
        value: 10
      }, {
        name: 'November',
        value: 11
      }, {
        name: 'December',
        value: 12
      }],
      // Balance Forward Data (new)
      balanceForwardData: {
        byMinistry: [],
        byBankAccount: [],
        byCurrency: [],
        totals: {
          totalLakEquivalent: 0,
          currencyTotals: {}
        }
      },
      loadingBalanceForward: false,
      // Payment Data
      paymentMinistryReport: [],
      paymentMinistryTotals: {
        currencyTotals: {},
        totalLakEquivalent: 0
      },
      paymentBankReport: [],
      paymentBankTotals: {
        currencyTotals: {},
        totalLakEquivalent: 0
      },
      paymentCurrencyList: [],
      loadingPaymentMinistry: false,
      loadingPaymentBank: false,
      // Settlement Data
      settlementMinistryReport: [],
      settlementMinistryTotals: {
        currencyTotals: {},
        totalLakEquivalent: 0
      },
      settlementBankReport: [],
      settlementBankTotals: {
        currencyTotals: {},
        totalLakEquivalent: 0
      },
      settlementChartReport: [],
      settlementChartTotals: {
        currencyTotals: {},
        totalLakEquivalent: 0
      },
      settlementCurrencyList: [],
      loadingSettlementMinistry: false,
      loadingSettlementBank: false,
      loadingSettlementChart: false
    };
  },
  computed: {
    yearOptions() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = currentYear - 5; i <= currentYear + 2; i++) {
        years.push(i);
      }
      return years;
    },
    // Convert dropdowns to YYYY-MM format for existing methods
    selectedMonth() {
      const monthStr = this.selectedMonthNum.toString().padStart(2, '0');
      return `${this.selectedYear}-${monthStr}`;
    },
    maxDate() {
      // Restrict selection to current month or earlier
      const now = new Date();
      return now.toISOString().substr(0, 7); // YYYY-MM format
    },

    formattedSelectedMonth() {
      var _this$monthOptions$fi;
      const monthName = ((_this$monthOptions$fi = this.monthOptions.find(m => m.value === this.selectedMonthNum)) === null || _this$monthOptions$fi === void 0 ? void 0 : _this$monthOptions$fi.name) || 'Invalid';
      return `${monthName} ${this.selectedYear}`;
    }
  },
  async created() {
    this.setDefaultMonth();
    await this.fetchAllReports();
  },
  methods: {
    async calculateOutstandingBalance() {
      try {
        this.loadingOutstandingBalance = true;
        console.log('Calculating outstanding balance...');

        // We need balance forward, current payments, and current settlements
        const balanceForward = this.balanceForwardData;
        const currentPayments = this.paymentMinistryReport;
        const currentSettlements = this.settlementMinistryReport;

        // Create maps for easy lookup
        const ministryBalanceMap = new Map();
        const bankAccountBalanceMap = new Map();
        const allCurrencies = new Set();

        // Start with balance forward by ministry
        balanceForward.byMinistry.forEach(item => {
          ministryBalanceMap.set(item.ministryId, {
            ministryId: item.ministryId,
            ministryCode: item.ministryCode,
            ministryName: item.ministryName,
            amounts: {
              ...item.amounts
            },
            totalLakEquivalent: item.totalLakEquivalent
          });
          Object.keys(item.amounts || {}).forEach(currency => {
            allCurrencies.add(currency);
          });
        });

        // Start with balance forward by bank account
        balanceForward.byBankAccount.forEach(item => {
          bankAccountBalanceMap.set(item.bankAccountId, {
            bankAccountId: item.bankAccountId,
            accountNumber: item.accountNumber,
            accountName: item.accountName,
            bankName: item.bankName,
            amounts: {
              ...item.amounts
            },
            totalLakEquivalent: item.totalLakEquivalent
          });
          Object.keys(item.amounts || {}).forEach(currency => {
            allCurrencies.add(currency);
          });
        });

        // Add current month payments (positive to balance)
        currentPayments.forEach(payment => {
          const ministryId = payment.ministryId;
          if (!ministryBalanceMap.has(ministryId)) {
            ministryBalanceMap.set(ministryId, {
              ministryId,
              ministryCode: payment.ministryCode,
              ministryName: payment.ministryName,
              amounts: {},
              totalLakEquivalent: 0
            });
          }
          const ministryBalance = ministryBalanceMap.get(ministryId);
          ministryBalance.totalLakEquivalent += payment.totalLakEquivalent;
          Object.keys(payment.amounts || {}).forEach(currency => {
            allCurrencies.add(currency);
            ministryBalance.amounts[currency] = (ministryBalance.amounts[currency] || 0) + payment.amounts[currency];
          });
        });

        // Add current month payments to bank accounts
        this.paymentBankReport.forEach(payment => {
          const bankAccountId = payment.bankAccountId;
          if (!bankAccountBalanceMap.has(bankAccountId)) {
            bankAccountBalanceMap.set(bankAccountId, {
              bankAccountId,
              accountNumber: payment.accountNumber,
              accountName: payment.accountName,
              bankName: payment.bankName,
              amounts: {},
              totalLakEquivalent: 0
            });
          }
          const bankBalance = bankAccountBalanceMap.get(bankAccountId);
          bankBalance.totalLakEquivalent += payment.totalLakEquivalent;
          Object.keys(payment.amounts || {}).forEach(currency => {
            allCurrencies.add(currency);
            bankBalance.amounts[currency] = (bankBalance.amounts[currency] || 0) + payment.amounts[currency];
          });
        });

        // Subtract current month settlements (negative to balance)
        currentSettlements.forEach(settlement => {
          const ministryId = settlement.ministryId;
          if (!ministryBalanceMap.has(ministryId)) {
            ministryBalanceMap.set(ministryId, {
              ministryId,
              ministryCode: settlement.ministryCode,
              ministryName: settlement.ministryName,
              amounts: {},
              totalLakEquivalent: 0
            });
          }
          const ministryBalance = ministryBalanceMap.get(ministryId);
          ministryBalance.totalLakEquivalent -= settlement.totalLakEquivalent;
          Object.keys(settlement.amounts || {}).forEach(currency => {
            allCurrencies.add(currency);
            ministryBalance.amounts[currency] = (ministryBalance.amounts[currency] || 0) - settlement.amounts[currency];
          });
        });

        // Subtract current month settlements from bank accounts
        this.settlementBankReport.forEach(settlement => {
          const bankAccountId = settlement.bankAccountId;
          if (!bankAccountBalanceMap.has(bankAccountId)) {
            bankAccountBalanceMap.set(bankAccountId, {
              bankAccountId,
              accountNumber: settlement.accountNumber,
              accountName: settlement.accountName,
              bankName: settlement.bankName,
              amounts: {},
              totalLakEquivalent: 0
            });
          }
          const bankBalance = bankAccountBalanceMap.get(bankAccountId);
          bankBalance.totalLakEquivalent -= settlement.totalLakEquivalent;
          Object.keys(settlement.amounts || {}).forEach(currency => {
            allCurrencies.add(currency);
            bankBalance.amounts[currency] = (bankBalance.amounts[currency] || 0) - settlement.amounts[currency];
          });
        });

        // Calculate currency totals
        const currencyTotals = {};
        Array.from(allCurrencies).forEach(currency => {
          currencyTotals[currency] = Array.from(ministryBalanceMap.values()).reduce((sum, ministry) => sum + (ministry.amounts[currency] || 0), 0);
        });

        // Calculate total LAK equivalent
        const totalLakEquivalent = Array.from(ministryBalanceMap.values()).reduce((sum, ministry) => sum + ministry.totalLakEquivalent, 0);

        // Set outstanding balance data
        this.outstandingBalanceData = {
          byMinistry: Array.from(ministryBalanceMap.values()).sort((a, b) => {
            if (a.ministryId === 'NO_MINISTRY') return 1;
            if (b.ministryId === 'NO_MINISTRY') return -1;
            return a.ministryName.localeCompare(b.ministryName);
          }),
          byBankAccount: Array.from(bankAccountBalanceMap.values()).sort((a, b) => {
            if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1;
            if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1;
            const bankComparison = a.bankName.localeCompare(b.bankName);
            if (bankComparison !== 0) return bankComparison;
            return a.accountName.localeCompare(b.accountName);
          }),
          byCurrency: Array.from(allCurrencies).map(currency => ({
            currency,
            amount: currencyTotals[currency] || 0
          })),
          totals: {
            currencyTotals,
            totalLakEquivalent
          }
        };
        console.log('Outstanding balance calculated successfully');
      } catch (error) {
        console.error('Error calculating outstanding balance:', error);
        this.$toast.error('Failed to calculate outstanding balance');
      } finally {
        this.loadingOutstandingBalance = false;
      }
    },
    setDefaultMonth() {
      const now = new Date();
      this.selectedYear = now.getFullYear();
      this.selectedMonthNum = now.getMonth() + 1;
    },
    onDateChange() {
      console.log('Date changed to:', this.selectedMonth);
      this.fetchAllReports();
    },
    resetMonth() {
      this.setDefaultMonth();
      this.fetchAllReports();
    },
    getDateRanges() {
      if (!this.selectedMonth) return {
        current: {},
        previous: {}
      };
      const [year, month] = this.selectedMonth.split('-');
      const currentYear = parseInt(year);
      const currentMonth = parseInt(month);

      // Current month range
      const currentStart = new Date(currentYear, currentMonth - 1, 1);
      const currentEnd = new Date(currentYear, currentMonth, 0); // Last day of current month

      // Previous month range (for balance forward)
      const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
      const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const previousStart = new Date(previousYear, 0, 1); // From beginning of year
      const previousEnd = new Date(currentYear, currentMonth - 1, 0); // Last day of previous month

      return {
        current: {
          start: currentStart.toISOString().substr(0, 10),
          end: currentEnd.toISOString().substr(0, 10)
        },
        previous: {
          start: previousStart.toISOString().substr(0, 10),
          end: previousEnd.toISOString().substr(0, 10)
        }
      };
    },
    // 3. UPDATE fetchAllReports method to include outstanding balance calculation
    // Replace the existing fetchAllReports method with this updated version:

    async fetchAllReports() {
      this.loading = true;
      try {
        // Fetch all base reports first
        await Promise.all([this.fetchBalanceForward(), this.fetchPaymentMinistryReport(), this.fetchPaymentBankReport(), this.fetchSettlementMinistryReport(), this.fetchSettlementBankReport(), this.fetchSettlementChartReport()]);

        // Calculate outstanding balance after all data is loaded
        await this.calculateOutstandingBalance();
        this.$toast.success('All reports loaded successfully');
      } catch (error) {
        console.error('Error loading reports:', error);
        this.$toast.error('Error loading some reports');
      } finally {
        this.loading = false;
      }
    },
    // ========================================
    // BALANCE FORWARD METHODS
    // ========================================

    async fetchBalanceForward() {
      try {
        this.loadingBalanceForward = true;
        console.log('Calculating balance forward...');
        const dateRanges = this.getDateRanges();
        if (!dateRanges.previous.start) {
          console.log('No date selected for balance forward');
          return;
        }

        // Fetch payments and settlements from beginning of year to end of previous month
        const [paymentsData, settlementsData] = await Promise.all([this.fetchPaymentsForPeriod(dateRanges.previous.start, dateRanges.previous.end), this.fetchSettlementsForPeriod(dateRanges.previous.start, dateRanges.previous.end)]);
        console.log(`Balance Forward - Payments: ${paymentsData.length}, Settlements: ${settlementsData.length}`);

        // Calculate balance forward
        this.calculateBalanceForward(paymentsData, settlementsData);
        console.log('Balance forward calculated successfully');
      } catch (err) {
        console.error('Error calculating balance forward:', err);
        this.$toast.error('Failed to calculate balance forward');
      } finally {
        this.loadingBalanceForward = false;
      }
    },
    async fetchPaymentsForPeriod(startDate, endDate) {
      let allPayments = [];
      let currentPage = 1;
      let totalPages = 1;
      do {
        var _response$data$data, _response$data$data2;
        const response = await this.$axios.get('/api/money-advances', {
          params: {
            branchId: this.selectedBranchId,
            fromDate: startDate,
            toDate: endDate,
            include: ['ministry', 'currency', 'bankAccount'],
            page: currentPage,
            limit: 50
          }
        });
        const pageData = ((_response$data$data = response.data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.advances) || [];
        allPayments = allPayments.concat(pageData);
        const pagination = (_response$data$data2 = response.data.data) === null || _response$data$data2 === void 0 ? void 0 : _response$data$data2.pagination;
        if (pagination) {
          totalPages = pagination.totalPages;
        }
        currentPage++;
      } while (currentPage <= totalPages);
      return allPayments;
    },
    async fetchSettlementsForPeriod(startDate, endDate) {
      let allSettlements = [];
      let currentPage = 1;
      let totalPages = 1;
      do {
        var _response$data$data3, _response$data$data4;
        const response = await this.$axios.get('/api/settlements', {
          params: {
            branchId: this.selectedBranchId,
            fromDate: startDate,
            toDate: endDate,
            isPosted: true,
            include: ['ministry', 'currency', 'bankAccount'],
            page: currentPage,
            limit: 50
          }
        });
        const pageData = ((_response$data$data3 = response.data.data) === null || _response$data$data3 === void 0 ? void 0 : _response$data$data3.settlements) || [];
        allSettlements = allSettlements.concat(pageData);
        const pagination = (_response$data$data4 = response.data.data) === null || _response$data$data4 === void 0 ? void 0 : _response$data$data4.pagination;
        if (pagination) {
          totalPages = pagination.totalPages;
        }
        currentPage++;
      } while (currentPage <= totalPages);
      return allSettlements;
    },
    calculateBalanceForward(payments, settlements) {
      const ministryMap = new Map();
      const bankAccountMap = new Map();
      const currencyTotals = {};

      // Process payments (positive balances)
      payments.forEach(payment => {
        var _payment$currency;
        const ministry = payment.ministry;
        const bankAccount = payment.bankAccount;
        const currencyCode = ((_payment$currency = payment.currency) === null || _payment$currency === void 0 ? void 0 : _payment$currency.code) || 'LAK';
        const exchangeRate = parseFloat(payment.exchangeRate) || 1;
        const amount = parseFloat(payment.amount) || 0;
        const lakEquivalent = amount * exchangeRate;

        // Ministry balance
        const ministryId = (ministry === null || ministry === void 0 ? void 0 : ministry.id) || 'NO_MINISTRY';
        const ministryCode = (ministry === null || ministry === void 0 ? void 0 : ministry.ministryCode) || 'N/A';
        const ministryName = (ministry === null || ministry === void 0 ? void 0 : ministry.ministryName) || 'No Ministry Assigned';
        if (!ministryMap.has(ministryId)) {
          ministryMap.set(ministryId, {
            ministryId,
            ministryCode,
            ministryName,
            amounts: {},
            totalLakEquivalent: 0
          });
        }
        const ministryEntry = ministryMap.get(ministryId);
        ministryEntry.amounts[currencyCode] = (ministryEntry.amounts[currencyCode] || 0) + amount;
        ministryEntry.totalLakEquivalent += lakEquivalent;

        // Bank Account balance
        const bankAccountId = (bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.id) || 'NO_BANK_ACCOUNT';
        const accountNumber = (bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.accountNumber) || 'N/A';
        const accountName = (bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.accountName) || 'Cash Transaction';
        const bankName = (bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.bankName) || 'No Bank';
        if (!bankAccountMap.has(bankAccountId)) {
          bankAccountMap.set(bankAccountId, {
            bankAccountId,
            accountNumber,
            accountName,
            bankName,
            amounts: {},
            totalLakEquivalent: 0
          });
        }
        const bankAccountEntry = bankAccountMap.get(bankAccountId);
        bankAccountEntry.amounts[currencyCode] = (bankAccountEntry.amounts[currencyCode] || 0) + amount;
        bankAccountEntry.totalLakEquivalent += lakEquivalent;

        // Currency totals
        currencyTotals[currencyCode] = (currencyTotals[currencyCode] || 0) + amount;
      });

      // Process settlements (subtract from balances)
      settlements.forEach(settlement => {
        var _settlement$currency;
        const ministry = settlement.ministry;
        const bankAccount = settlement.bankAccount;
        const currencyCode = ((_settlement$currency = settlement.currency) === null || _settlement$currency === void 0 ? void 0 : _settlement$currency.code) || 'LAK';
        const exchangeRate = parseFloat(settlement.exchangeRate) || 1;
        const amount = parseFloat(settlement.amount) || 0;
        const lakEquivalent = amount * exchangeRate;

        // Ministry balance
        const ministryId = (ministry === null || ministry === void 0 ? void 0 : ministry.id) || 'NO_MINISTRY';
        const ministryCode = (ministry === null || ministry === void 0 ? void 0 : ministry.ministryCode) || 'N/A';
        const ministryName = (ministry === null || ministry === void 0 ? void 0 : ministry.ministryName) || 'No Ministry Assigned';
        if (!ministryMap.has(ministryId)) {
          ministryMap.set(ministryId, {
            ministryId,
            ministryCode,
            ministryName,
            amounts: {},
            totalLakEquivalent: 0
          });
        }
        const ministryEntry = ministryMap.get(ministryId);
        ministryEntry.amounts[currencyCode] = (ministryEntry.amounts[currencyCode] || 0) - amount;
        ministryEntry.totalLakEquivalent -= lakEquivalent;

        // Bank Account balance
        const bankAccountId = (bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.id) || 'NO_BANK_ACCOUNT';
        const accountNumber = (bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.accountNumber) || 'N/A';
        const accountName = (bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.accountName) || 'Cash Transaction';
        const bankName = (bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.bankName) || 'No Bank';
        if (!bankAccountMap.has(bankAccountId)) {
          bankAccountMap.set(bankAccountId, {
            bankAccountId,
            accountNumber,
            accountName,
            bankName,
            amounts: {},
            totalLakEquivalent: 0
          });
        }
        const bankAccountEntry = bankAccountMap.get(bankAccountId);
        bankAccountEntry.amounts[currencyCode] = (bankAccountEntry.amounts[currencyCode] || 0) - amount;
        bankAccountEntry.totalLakEquivalent -= lakEquivalent;

        // Currency totals
        currencyTotals[currencyCode] = (currencyTotals[currencyCode] || 0) - amount;
      });

      // Calculate total LAK equivalent properly
      const totalLakEquivalent = Array.from(ministryMap.values()).reduce((sum, m) => sum + m.totalLakEquivalent, 0);

      // Set balance forward data
      this.balanceForwardData = {
        byMinistry: Array.from(ministryMap.values()).sort((a, b) => {
          if (a.ministryId === 'NO_MINISTRY') return 1;
          if (b.ministryId === 'NO_MINISTRY') return -1;
          return a.ministryName.localeCompare(b.ministryName);
        }),
        byBankAccount: Array.from(bankAccountMap.values()).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1;
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1;
          const bankComparison = a.bankName.localeCompare(b.bankName);
          if (bankComparison !== 0) return bankComparison;
          return a.accountName.localeCompare(b.accountName);
        }),
        totals: {
          currencyTotals,
          totalLakEquivalent
        }
      };
      console.log('Balance Forward Data:', this.balanceForwardData);
    },
    // ========================================
    // PAYMENT REPORTS
    // ========================================

    async fetchPaymentMinistryReport() {
      try {
        this.loadingPaymentMinistry = true;
        console.log('Fetching payment ministry report...');
        const dateRanges = this.getDateRanges();
        if (!dateRanges.current.start) {
          console.log('No month selected');
          return;
        }
        const allPayments = await this.fetchPaymentsForPeriod(dateRanges.current.start, dateRanges.current.end);
        console.log(`Current month payments: ${allPayments.length}`);

        // Process payment ministry data
        const ministryMap = new Map();
        const currencySet = new Set();
        allPayments.forEach(advance => {
          var _advance$currency;
          const ministry = advance.ministry;
          let ministryId, ministryName, ministryCode;
          if (ministry) {
            ministryId = ministry.id;
            ministryName = ministry.ministryName;
            ministryCode = ministry.ministryCode;
          } else {
            ministryId = 'NO_MINISTRY';
            ministryName = 'No Ministry Assigned';
            ministryCode = 'N/A';
          }
          const currencyCode = ((_advance$currency = advance.currency) === null || _advance$currency === void 0 ? void 0 : _advance$currency.code) || 'LAK';
          const exchangeRate = parseFloat(advance.exchangeRate) || 1;
          const amount = parseFloat(advance.amount) || 0;
          const lakEquivalent = amount * exchangeRate;
          currencySet.add(currencyCode);
          if (!ministryMap.has(ministryId)) {
            ministryMap.set(ministryId, {
              ministryId,
              ministryName,
              ministryCode,
              count: 0,
              totalLakEquivalent: 0,
              amounts: {}
            });
          }
          const ministryRow = ministryMap.get(ministryId);
          ministryRow.count += 1;
          ministryRow.totalLakEquivalent += lakEquivalent;
          ministryRow.amounts[currencyCode] = (ministryRow.amounts[currencyCode] || 0) + amount;
        });
        this.paymentCurrencyList = Array.from(currencySet).sort();
        this.paymentMinistryReport = Array.from(ministryMap.values()).sort((a, b) => {
          if (a.ministryId === 'NO_MINISTRY') return 1;
          if (b.ministryId === 'NO_MINISTRY') return -1;
          return a.ministryName.localeCompare(b.ministryName);
        });
        console.log(`Payment ministry report: ${this.paymentMinistryReport.length} ministries`);

        // Calculate totals
        this.paymentMinistryTotals = {
          totalLakEquivalent: this.paymentMinistryReport.reduce((sum, m) => sum + m.totalLakEquivalent, 0),
          currencyTotals: {}
        };
        this.paymentCurrencyList.forEach(currency => {
          this.paymentMinistryTotals.currencyTotals[currency] = this.paymentMinistryReport.reduce((sum, m) => sum + (m.amounts[currency] || 0), 0);
        });
      } catch (err) {
        console.error('Error fetching payment ministry report:', err);
        this.$toast.error('Failed to fetch payment ministry report: ' + err.message);
      } finally {
        this.loadingPaymentMinistry = false;
      }
    },
    async fetchPaymentBankReport() {
      try {
        this.loadingPaymentBank = true;
        console.log('Fetching payment bank report...');
        const dateRanges = this.getDateRanges();
        if (!dateRanges.current.start) return;
        const allPayments = await this.fetchPaymentsForPeriod(dateRanges.current.start, dateRanges.current.end);
        console.log(`Current month payments for bank report: ${allPayments.length}`);

        // Process payment bank data
        const bankAccountMap = new Map();
        const currencySet = new Set();
        allPayments.forEach(advance => {
          var _advance$currency2;
          const bankAccount = advance.bankAccount;
          let bankAccountId, accountNumber, accountName, bankName;
          if (bankAccount) {
            bankAccountId = bankAccount.id;
            accountNumber = bankAccount.accountNumber;
            accountName = bankAccount.accountName;
            bankName = bankAccount.bankName;
          } else {
            bankAccountId = 'NO_BANK_ACCOUNT';
            accountNumber = 'N/A';
            accountName = 'Cash Transaction';
            bankName = 'No Bank';
          }
          const currencyCode = ((_advance$currency2 = advance.currency) === null || _advance$currency2 === void 0 ? void 0 : _advance$currency2.code) || 'LAK';
          const exchangeRate = parseFloat(advance.exchangeRate) || 1;
          const amount = parseFloat(advance.amount) || 0;
          const lakEquivalent = amount * exchangeRate;
          currencySet.add(currencyCode);
          if (!bankAccountMap.has(bankAccountId)) {
            bankAccountMap.set(bankAccountId, {
              bankAccountId,
              accountNumber,
              accountName,
              bankName,
              count: 0,
              totalLakEquivalent: 0,
              amounts: {}
            });
          }
          const bankAccountRow = bankAccountMap.get(bankAccountId);
          bankAccountRow.count += 1;
          bankAccountRow.totalLakEquivalent += lakEquivalent;
          bankAccountRow.amounts[currencyCode] = (bankAccountRow.amounts[currencyCode] || 0) + amount;
        });
        this.paymentCurrencyList = Array.from(currencySet).sort();
        this.paymentBankReport = Array.from(bankAccountMap.values()).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1;
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1;
          const bankComparison = a.bankName.localeCompare(b.bankName);
          if (bankComparison !== 0) return bankComparison;
          return a.accountName.localeCompare(b.accountName);
        });
        console.log(`Payment bank report: ${this.paymentBankReport.length} bank accounts`);

        // Calculate totals
        this.paymentBankTotals = {
          totalLakEquivalent: this.paymentBankReport.reduce((sum, b) => sum + b.totalLakEquivalent, 0),
          currencyTotals: {}
        };
        this.paymentCurrencyList.forEach(currency => {
          this.paymentBankTotals.currencyTotals[currency] = this.paymentBankReport.reduce((sum, b) => sum + (b.amounts[currency] || 0), 0);
        });
      } catch (err) {
        console.error('Error fetching payment bank report:', err);
        this.$toast.error('Failed to fetch payment bank report: ' + err.message);
      } finally {
        this.loadingPaymentBank = false;
      }
    },
    // ========================================
    // SETTLEMENT REPORTS
    // ========================================

    async fetchSettlementMinistryReport() {
      try {
        this.loadingSettlementMinistry = true;
        const dateRanges = this.getDateRanges();
        if (!dateRanges.current.start) return;
        const allSettlements = await this.fetchSettlementsForPeriod(dateRanges.current.start, dateRanges.current.end);

        // Process settlement ministry data
        const ministryMap = new Map();
        const currencySet = new Set();
        allSettlements.forEach(settlement => {
          var _settlement$currency2;
          const ministry = settlement.ministry;
          let ministryId, ministryName, ministryCode;
          if (ministry) {
            ministryId = ministry.id;
            ministryName = ministry.ministryName;
            ministryCode = ministry.ministryCode;
          } else {
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
              count: 0,
              totalLakEquivalent: 0,
              amounts: {}
            });
          }
          const ministryRow = ministryMap.get(ministryId);
          ministryRow.count += 1;
          ministryRow.totalLakEquivalent += lakEquivalent;
          ministryRow.amounts[currencyCode] = (ministryRow.amounts[currencyCode] || 0) + amount;
        });
        this.settlementCurrencyList = Array.from(currencySet).sort();
        this.settlementMinistryReport = Array.from(ministryMap.values()).sort((a, b) => {
          if (a.ministryId === 'NO_MINISTRY') return 1;
          if (b.ministryId === 'NO_MINISTRY') return -1;
          return a.ministryName.localeCompare(b.ministryName);
        });

        // Calculate totals
        this.settlementMinistryTotals = {
          totalLakEquivalent: this.settlementMinistryReport.reduce((sum, m) => sum + m.totalLakEquivalent, 0),
          currencyTotals: {}
        };
        this.settlementCurrencyList.forEach(currency => {
          this.settlementMinistryTotals.currencyTotals[currency] = this.settlementMinistryReport.reduce((sum, m) => sum + (m.amounts[currency] || 0), 0);
        });
      } catch (err) {
        console.error('Error fetching settlement ministry report:', err);
        this.$toast.error('Failed to fetch settlement ministry report.');
      } finally {
        this.loadingSettlementMinistry = false;
      }
    },
    async fetchSettlementBankReport() {
      try {
        this.loadingSettlementBank = true;
        const dateRanges = this.getDateRanges();
        if (!dateRanges.current.start) return;
        const allSettlements = await this.fetchSettlementsForPeriod(dateRanges.current.start, dateRanges.current.end);

        // Process settlement bank data
        const bankAccountMap = new Map();
        const currencySet = new Set();
        allSettlements.forEach(settlement => {
          var _settlement$currency3;
          const bankAccount = settlement.bankAccount;
          let bankAccountId, accountNumber, accountName, bankName;
          if (bankAccount) {
            bankAccountId = bankAccount.id;
            accountNumber = bankAccount.accountNumber;
            accountName = bankAccount.accountName;
            bankName = bankAccount.bankName;
          } else {
            bankAccountId = 'NO_BANK_ACCOUNT';
            accountNumber = 'N/A';
            accountName = 'Cash Transaction';
            bankName = 'No Bank';
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
              count: 0,
              totalLakEquivalent: 0,
              amounts: {}
            });
          }
          const bankAccountRow = bankAccountMap.get(bankAccountId);
          bankAccountRow.count += 1;
          bankAccountRow.totalLakEquivalent += lakEquivalent;
          bankAccountRow.amounts[currencyCode] = (bankAccountRow.amounts[currencyCode] || 0) + amount;
        });
        this.settlementCurrencyList = Array.from(currencySet).sort();
        this.settlementBankReport = Array.from(bankAccountMap.values()).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1;
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1;
          const bankComparison = a.bankName.localeCompare(b.bankName);
          if (bankComparison !== 0) return bankComparison;
          return a.accountName.localeCompare(b.accountName);
        });

        // Calculate totals
        this.settlementBankTotals = {
          totalLakEquivalent: this.settlementBankReport.reduce((sum, b) => sum + b.totalLakEquivalent, 0),
          currencyTotals: {}
        };
        this.settlementCurrencyList.forEach(currency => {
          this.settlementBankTotals.currencyTotals[currency] = this.settlementBankReport.reduce((sum, b) => sum + (b.amounts[currency] || 0), 0);
        });
      } catch (err) {
        console.error('Error fetching settlement bank report:', err);
        this.$toast.error('Failed to fetch settlement bank report.');
      } finally {
        this.loadingSettlementBank = false;
      }
    },
    async fetchSettlementChartReport() {
      try {
        this.loadingSettlementChart = true;
        const dateRanges = this.getDateRanges();
        if (!dateRanges.current.start) return;
        const allSettlements = await this.fetchSettlementsForPeriod(dateRanges.current.start, dateRanges.current.end);

        // Process settlement chart account data
        const chartAccountMap = new Map();
        const currencySet = new Set();
        allSettlements.forEach(settlement => {
          var _settlement$currency4;
          const chartAccount = settlement.chartAccount;
          let chartAccountId, chartAccountCode, chartAccountName;
          if (chartAccount) {
            chartAccountId = chartAccount.id;
            chartAccountCode = chartAccount.accountCode || chartAccount.code;
            chartAccountName = chartAccount.accountName || chartAccount.name;
          } else {
            chartAccountId = 'NO_CHART_ACCOUNT';
            chartAccountCode = 'N/A';
            chartAccountName = 'No Chart Account';
          }
          const currencyCode = ((_settlement$currency4 = settlement.currency) === null || _settlement$currency4 === void 0 ? void 0 : _settlement$currency4.code) || 'LAK';
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1;
          const amount = parseFloat(settlement.amount) || 0;
          const lakEquivalent = amount * exchangeRate;
          currencySet.add(currencyCode);
          if (!chartAccountMap.has(chartAccountId)) {
            chartAccountMap.set(chartAccountId, {
              chartAccountId,
              chartAccountCode,
              chartAccountName,
              count: 0,
              totalLakEquivalent: 0,
              amounts: {}
            });
          }
          const chartAccountRow = chartAccountMap.get(chartAccountId);
          chartAccountRow.count += 1;
          chartAccountRow.totalLakEquivalent += lakEquivalent;
          chartAccountRow.amounts[currencyCode] = (chartAccountRow.amounts[currencyCode] || 0) + amount;
        });
        this.settlementCurrencyList = Array.from(currencySet).sort();
        this.settlementChartReport = Array.from(chartAccountMap.values()).sort((a, b) => {
          if (a.chartAccountId === 'NO_CHART_ACCOUNT') return 1;
          if (b.chartAccountId === 'NO_CHART_ACCOUNT') return -1;
          return a.chartAccountCode.localeCompare(b.chartAccountCode);
        });

        // Calculate totals
        this.settlementChartTotals = {
          totalLakEquivalent: this.settlementChartReport.reduce((sum, c) => sum + c.totalLakEquivalent, 0),
          currencyTotals: {}
        };
        this.settlementCurrencyList.forEach(currency => {
          this.settlementChartTotals.currencyTotals[currency] = this.settlementChartReport.reduce((sum, c) => sum + (c.amounts[currency] || 0), 0);
        });
      } catch (err) {
        console.error('Error fetching settlement chart report:', err);
        this.$toast.error('Failed to fetch settlement chart report.');
      } finally {
        this.loadingSettlementChart = false;
      }
    },
    // ========================================
    // UTILITY METHODS
    // ========================================

    formatAmount(amount) {
      if (!amount || amount === 0) return '0';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(amount);
    },
    async exportReport(reportType) {
      this.exporting = true;
      try {
        let data = [];
        let filename = '';
        switch (reportType) {
          case 'balance-ministry':
            data = this.prepareExportData(this.balanceForwardData.byMinistry, Object.keys(this.balanceForwardData.totals.currencyTotals), 'ministry');
            filename = 'Balance_Forward_By_Ministry';
            break;
          case 'payment-ministry':
            data = this.prepareExportData(this.paymentMinistryReport, this.paymentCurrencyList, 'ministry');
            filename = 'Payment_By_Ministry';
            break;
          case 'payment-bank':
            data = this.prepareExportData(this.paymentBankReport, this.paymentCurrencyList, 'bank');
            filename = 'Payment_By_Bank_Account';
            break;
          case 'settlement-ministry':
            data = this.prepareExportData(this.settlementMinistryReport, this.settlementCurrencyList, 'ministry');
            filename = 'Settlement_By_Ministry';
            break;
          case 'settlement-bank':
            data = this.prepareExportData(this.settlementBankReport, this.settlementCurrencyList, 'bank');
            filename = 'Settlement_By_Bank_Account';
            break;
          case 'settlement-chart':
            data = this.prepareExportData(this.settlementChartReport, this.settlementCurrencyList, 'chart');
            filename = 'Settlement_By_Chart_Account';
            break;
          case 'outstanding-ministry':
            data = this.prepareExportData(this.outstandingBalanceData.byMinistry, Object.keys(this.outstandingBalanceData.totals.currencyTotals), 'ministry');
            filename = 'Outstanding_Balance_By_Ministry';
            break;
          case 'outstanding-bank':
            data = this.prepareExportData(this.outstandingBalanceData.byBankAccount, Object.keys(this.outstandingBalanceData.totals.currencyTotals), 'bank');
            filename = 'Outstanding_Balance_By_Bank_Account';
            break;
        }
        await this.exportToCSV(data, filename);
        this.$toast.success(`${filename} exported successfully`);
      } catch (error) {
        console.error('Error exporting report:', error);
        this.$toast.error('Failed to export report');
      } finally {
        this.exporting = false;
      }
    },
    prepareExportData(reportData, currencyList, type) {
      return reportData.map((item, index) => {
        const row = {
          '#': index + 1
        };
        if (type === 'ministry') {
          row['Ministry Code'] = item.ministryCode;
          row['Ministry Name'] = item.ministryName;
        } else if (type === 'bank') {
          row['Account Number'] = item.accountNumber;
          row['Account Name'] = item.accountName;
          row['Bank Name'] = item.bankName;
        } else if (type === 'chart') {
          row['Chart Account Code'] = item.chartAccountCode;
          row['Chart Account Name'] = item.chartAccountName;
        }
        if (item.count !== undefined) {
          row['Count'] = item.count;
        }
        currencyList.forEach(currency => {
          var _item$amounts;
          row[currency] = this.formatAmount(((_item$amounts = item.amounts) === null || _item$amounts === void 0 ? void 0 : _item$amounts[currency]) || 0);
        });
        row['Total (LAK)'] = this.formatAmount(item.totalLakEquivalent || 0);
        return row;
      });
    },
    async exportToCSV(data, filename) {
      if (data.length === 0) return;
      const headers = Object.keys(data[0]);
      const csvContent = [headers.join(','), ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))].join('\n');
      const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${filename}-${new Date().toISOString().substr(0, 10)}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(336)["URL"]))

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(971);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c0edd022", content, true, context)
};

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2948fc5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(740);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2948fc5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2948fc5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2948fc5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2948fc5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".payment-settlement-analysis[data-v-2948fc5e]{padding:0}.report-header[data-v-2948fc5e]{align-items:center;background:#01532b;border-radius:8px;color:#fff;display:flex;justify-content:space-between;margin-bottom:24px;padding:20px}.title-section h1[data-v-2948fc5e]{font-size:28px;font-weight:600;margin:0}.title-section p[data-v-2948fc5e]{font-size:14px;margin:5px 0 0;opacity:.9}.filter-card[data-v-2948fc5e]{background:#fff}.filter-title[data-v-2948fc5e]{background:#f8f9fa;color:#495057;font-weight:600}.filter-info[data-v-2948fc5e]{display:flex;flex-direction:column;height:100%;justify-content:center}.filter-actions[data-v-2948fc5e]{align-items:center;display:flex;gap:12px}.section-header[data-v-2948fc5e]{border-bottom:3px solid #e0e0e0;padding-bottom:8px}.section-title[data-v-2948fc5e]{color:#495057;font-size:24px;font-weight:600;margin:0}.section-title i[data-v-2948fc5e]{color:#01532b;margin-right:12px}.summary-cards .summary-card[data-v-2948fc5e]{height:100%}.summary-content[data-v-2948fc5e]{gap:16px}.summary-content[data-v-2948fc5e],.summary-icon[data-v-2948fc5e]{align-items:center;display:flex}.summary-icon[data-v-2948fc5e]{background:#01532b;border-radius:12px;color:#fff;font-size:24px;height:60px;justify-content:center;width:60px}.summary-details h3[data-v-2948fc5e]{color:#495057;font-size:16px;font-weight:600;margin:0}.summary-details p[data-v-2948fc5e]{color:#6c757d;font-size:14px;margin:4px 0}.summary-amount[data-v-2948fc5e]{color:#01532b;font-size:24px;font-weight:700;margin:8px 0 4px}.custom-green-header[data-v-2948fc5e]{background-color:#01532b!important;color:#fff!important}.custom-green-text[data-v-2948fc5e]{color:#01532b!important}.custom-green-bg-light[data-v-2948fc5e]{background-color:rgba(1,83,43,.1)!important}.custom-green-bg-lighter[data-v-2948fc5e]{background-color:rgba(1,83,43,.05)!important}.success--text[data-v-2948fc5e],.v-card-title.success--text[data-v-2948fc5e],.v-icon.success[data-v-2948fc5e],.v-progress-circular.success[data-v-2948fc5e]{color:#01532b!important}.success.lighten-3[data-v-2948fc5e]{background-color:#01532b!important}.success.lighten-4[data-v-2948fc5e]{background-color:rgba(1,83,43,.1)!important}@media (max-width:768px){.report-header[data-v-2948fc5e]{flex-direction:column;gap:16px;text-align:center}.filter-actions[data-v-2948fc5e]{flex-direction:column;width:100%}.filter-actions .v-btn[data-v-2948fc5e]{width:100%}.section-title[data-v-2948fc5e]{font-size:20px}.summary-content[data-v-2948fc5e]{flex-direction:column;text-align:center}.summary-amount[data-v-2948fc5e]{font-size:20px}.outstanding-total-card .summary-icon[data-v-2948fc5e]{background:linear-gradient(135deg,#ff6b6b,#ee5a24)}.outstanding-ministry-card .summary-icon[data-v-2948fc5e]{background:linear-gradient(135deg,#4834d4,#686de0)}.outstanding-account-card .summary-icon[data-v-2948fc5e]{background:linear-gradient(135deg,#00d2d3,#54a0ff)}.outstanding-total-card .summary-amount[data-v-2948fc5e]{color:#ee5a24}.outstanding-ministry-card .summary-amount[data-v-2948fc5e]{color:#4834d4}.outstanding-account-card .summary-amount[data-v-2948fc5e]{color:#00d2d3}.v-simple-table tbody tr.green.lighten-5[data-v-2948fc5e]{background-color:rgba(76,175,80,.1)!important}.v-simple-table tbody tr.red.lighten-5[data-v-2948fc5e]{background-color:rgba(244,67,54,.1)!important}.outstanding-positive[data-v-2948fc5e]{color:#4caf50!important;font-weight:700}.outstanding-negative[data-v-2948fc5e]{color:#f44336!important;font-weight:700}@media (max-width:768px){.outstanding-account-card .summary-amount[data-v-2948fc5e],.outstanding-ministry-card .summary-amount[data-v-2948fc5e],.outstanding-total-card .summary-amount[data-v-2948fc5e]{font-size:18px}}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map