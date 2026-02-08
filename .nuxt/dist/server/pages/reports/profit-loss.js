exports.ids = [349,145];
exports.modules = {

/***/ 1090:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js
var VSimpleTable = __webpack_require__(196);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(499);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/reports/ProfitLossReport.vue?vue&type=template&id=382d481a&scoped=true


















var ProfitLossReportvue_type_template_id_382d481a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pl-report-container notosans-lao"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-chart-line")]), _vm._v(" "), _c('span', [_vm._v("ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ (P&L Report)")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "loading": _vm.exporting
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
      "text": "",
      "loading": _vm.loading
    },
    on: {
      "click": _vm.fetchData
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n            ໂຫຼດໃໝ່\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ວັນທີເລີ່ມຕົ້ນ",
      "type": "date",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-calendar-start",
      "rules": [_vm.rules.required, _vm.rules.validFromDate]
    },
    model: {
      value: _vm.filters.fromDate,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "fromDate", $$v);
      },
      expression: "filters.fromDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ວັນທີສິ້ນສຸດ",
      "type": "date",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-calendar-end",
      "rules": [_vm.rules.required, _vm.rules.validToDate]
    },
    model: {
      value: _vm.filters.toDate,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "toDate", $$v);
      },
      expression: "filters.toDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "block": "",
      "loading": _vm.loading,
      "disabled": !_vm.isValidDateRange
    },
    on: {
      "click": _vm.generateReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-chart-box")]), _vm._v("\n                ສ້າງລາຍງານ\n              ")], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": _vm.setCurrentMonth
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-calendar-month")]), _vm._v("\n                ເດືອນນີ້\n              ")], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": _vm.setCurrentYear
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-calendar-range")]), _vm._v("\n                ປີນີ້\n              ")], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "mt-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "loading": _vm.loading
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "40",
      "color": "success"
    }
  }, [_vm._v("mdi-cash-plus")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-2 text-subtitle-1"
  }, [_vm._v("ລາຍຮັບລວມ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Total Revenue")]), _vm._v(" "), _c('h2', {
    staticClass: "text-h5 success--text font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.formatCurrency(_vm.totalRevenueLAK)) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text mt-1"
  }, [_vm._v("LAK")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pt-0"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": "",
      "color": "success",
      "disabled": _vm.receiveRecords.length === 0
    },
    on: {
      "click": function ($event) {
        _vm.showRevenueDetails = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-eye")]), _vm._v("\n            ລາຍລະອຽດ\n          ")], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "loading": _vm.loading
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "40",
      "color": "error"
    }
  }, [_vm._v("mdi-cash-minus")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-2 text-subtitle-1"
  }, [_vm._v("ລາຍຈ່າຍລວມ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Total Expenses")]), _vm._v(" "), _c('h2', {
    staticClass: "text-h5 error--text font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.formatCurrency(_vm.totalExpenseLAK)) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text mt-1"
  }, [_vm._v("LAK")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pt-0"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": "",
      "color": "error",
      "disabled": _vm.expenseRecords.length === 0
    },
    on: {
      "click": function ($event) {
        _vm.showExpenseDetails = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-eye")]), _vm._v("\n            ລາຍລະອຽດ\n          ")], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "loading": _vm.loading
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "40",
      "color": _vm.netProfitLoss >= 0 ? 'success' : 'error'
    }
  }, [_vm._v("\n            " + _vm._s(_vm.netProfitLoss >= 0 ? 'mdi-trending-up' : 'mdi-trending-down') + "\n          ")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-2 text-subtitle-1"
  }, [_vm._v("\n            " + _vm._s(_vm.netProfitLoss >= 0 ? 'ກຳໄລສຸດທິ' : 'ຂາດທຶນສຸດທິ') + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("\n            " + _vm._s(_vm.netProfitLoss >= 0 ? 'Net Profit' : 'Net Loss') + "\n          ")]), _vm._v(" "), _c('h2', {
    staticClass: "text-h5 font-weight-bold",
    class: _vm.netProfitLoss >= 0 ? 'success--text' : 'error--text'
  }, [_vm._v("\n            " + _vm._s(_vm.formatCurrency(Math.abs(_vm.netProfitLoss))) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text mt-1"
  }, [_vm._v("LAK")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pt-0"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": "",
      "color": _vm.netProfitLoss >= 0 ? 'success' : 'error',
      "disabled": !_vm.hasData
    },
    on: {
      "click": function ($event) {
        _vm.showPLBreakdown = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-chart-pie")]), _vm._v("\n            ວິເຄາະ\n          ")], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "loading": _vm.loading
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "40",
      "color": "info"
    }
  }, [_vm._v("mdi-percent")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-2 text-subtitle-1"
  }, [_vm._v("ອັດຕາກຳໄລ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Profit Margin")]), _vm._v(" "), _c('h2', {
    staticClass: "text-h5 font-weight-bold",
    class: _vm.profitMargin >= 0 ? 'info--text' : 'error--text'
  }, [_vm._v("\n            " + _vm._s(_vm.formatPercentage(_vm.profitMargin)) + "%\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text mt-1"
  }, [_vm._v("\n            " + _vm._s(_vm.profitMargin >= 0 ? 'ກຳໄລ' : 'ຂາດທຶນ') + "\n          ")])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "loading": _vm.loading
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "40",
      "color": "purple"
    }
  }, [_vm._v("mdi-code-tags")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-2 text-subtitle-1"
  }, [_vm._v("ລະຫັດລາຍຮັບ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Revenue Codes")]), _vm._v(" "), _c('h2', {
    staticClass: "text-h5 purple--text font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(Object.keys(_vm.revenueByTransactionCode).length) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text mt-1"
  }, [_vm._v("ປະເພດ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pt-0"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": "",
      "color": "purple",
      "disabled": Object.keys(_vm.revenueByTransactionCode).length === 0
    },
    on: {
      "click": function ($event) {
        _vm.showRevenueCodeBreakdown = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-eye")]), _vm._v("\n            ວິເຄາະ\n          ")], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "loading": _vm.loading
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "40",
      "color": "orange"
    }
  }, [_vm._v("mdi-code-tags")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-2 text-subtitle-1"
  }, [_vm._v("ລະຫັດລາຍຈ່າຍ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Expense Codes")]), _vm._v(" "), _c('h2', {
    staticClass: "text-h5 orange--text font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(Object.keys(_vm.expenseByTransactionCode).length) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text mt-1"
  }, [_vm._v("ປະເພດ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pt-0"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": "",
      "color": "orange",
      "disabled": Object.keys(_vm.expenseByTransactionCode).length === 0
    },
    on: {
      "click": function ($event) {
        _vm.showExpenseCodeBreakdown = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-eye")]), _vm._v("\n            ວິເຄາະ\n          ")], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm.hasData ? _c(VRow["a" /* default */], {
    staticClass: "mt-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "success white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-chart-donut")]), _vm._v("\n          ລາຍຮັບຕາມລະຫັດ Transaction\n        ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        return [_c('thead', [_c('tr', [_c('th', [_vm._v("ລະຫັດ")]), _vm._v(" "), _c('th', [_vm._v("ຄຳອະທິບາຍ")]), _vm._v(" "), _c('th', {
          staticClass: "text-right"
        }, [_vm._v("ຈຳນວນ (LAK)")]), _vm._v(" "), _c('th', {
          staticClass: "text-right"
        }, [_vm._v("%")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.revenueByTransactionCode, function (item, code) {
          return _c('tr', {
            key: `revenue-${code}`
          }, [_c('td', [_c(VChip["a" /* default */], {
            attrs: {
              "small": "",
              "color": code === 'UN-ALLOCATED' ? 'grey' : 'success',
              "text-color": "white"
            }
          }, [_vm._v("\n                      " + _vm._s(code) + "\n                    ")])], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatCurrency(item.amount)) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-right"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatPercentage(item.amount / _vm.totalRevenueLAK * 100)) + "%\n                  ")])]);
        }), 0)];
      },
      proxy: true
    }], null, false, 1441816302)
  })], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "error white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-chart-donut")]), _vm._v("\n          ລາຍຈ່າຍຕາມລະຫັດ Transaction\n        ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        return [_c('thead', [_c('tr', [_c('th', [_vm._v("ລະຫັດ")]), _vm._v(" "), _c('th', [_vm._v("ຄຳອະທິບາຍ")]), _vm._v(" "), _c('th', {
          staticClass: "text-right"
        }, [_vm._v("ຈຳນວນ (LAK)")]), _vm._v(" "), _c('th', {
          staticClass: "text-right"
        }, [_vm._v("%")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.expenseByTransactionCode, function (item, code) {
          return _c('tr', {
            key: `expense-${code}`
          }, [_c('td', [_c(VChip["a" /* default */], {
            attrs: {
              "small": "",
              "color": code === 'UN-ALLOCATED' ? 'grey' : 'error',
              "text-color": "white"
            }
          }, [_vm._v("\n                      " + _vm._s(code) + "\n                    ")])], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c('td', {
            staticClass: "text-right font-weight-bold"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatCurrency(item.amount)) + "\n                  ")]), _vm._v(" "), _c('td', {
            staticClass: "text-right"
          }, [_vm._v("\n                    " + _vm._s(_vm.formatPercentage(item.amount / _vm.totalExpenseLAK * 100)) + "%\n                  ")])]);
        }), 0)];
      },
      proxy: true
    }], null, false, 1667241919)
  })], 1)], 1)], 1)], 1) : _vm._e(), _vm._ssrNode(" "), _vm.hasData ? _c(VRow["a" /* default */], {
    staticClass: "mt-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "8"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-chart-bar")]), _vm._v("\n          ການວິເຄາະລາຍຮັບ ແລະ ລາຍຈ່າຍ\n        ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "chart-container"
  }, [_c('div', {
    staticClass: "chart-bar-wrapper"
  }, [_c('div', {
    staticClass: "chart-label"
  }, [_vm._v("ລາຍຮັບ")]), _vm._v(" "), _c('div', {
    staticClass: "chart-bar"
  }, [_c('div', {
    staticClass: "chart-fill success",
    style: {
      width: _vm.revenuePercentage + '%'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "chart-value"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalRevenueLAK)) + " LAK")])]), _vm._v(" "), _c('div', {
    staticClass: "chart-bar-wrapper"
  }, [_c('div', {
    staticClass: "chart-label"
  }, [_vm._v("ລາຍຈ່າຍ")]), _vm._v(" "), _c('div', {
    staticClass: "chart-bar"
  }, [_c('div', {
    staticClass: "chart-fill error",
    style: {
      width: _vm.expensePercentage + '%'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "chart-value"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalExpenseLAK)) + " LAK")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-information")]), _vm._v("\n          ຂໍ້ມູນເພີ່ມເຕີມ\n        ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c('tbody', [_c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ໄລຍະເວລາ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDateRange()))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຈຳນວນລາຍຮັບ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.receiveRecords.length) + " ລາຍການ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຈຳນວນລາຍຈ່າຍ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.expenseRecords.length) + " ລາຍການ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ປະເພດລາຍຮັບ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(Object.keys(_vm.revenueByTransactionCode).length) + " ປະເພດ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ປະເພດລາຍຈ່າຍ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(Object.keys(_vm.expenseByTransactionCode).length) + " ປະເພດ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ສະກຸນເງິນທີ່ນຳໃຊ້:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.uniqueCurrencies.join(', ')))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ສ້າງລາຍງານ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(new Date())))])])])])], 1)], 1)], 1)], 1) : _vm._e(), _vm._ssrNode(" "), !_vm.hasData && !_vm.loading ? _c(VRow["a" /* default */], {
    staticClass: "mt-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center py-8"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey"
    }
  }, [_vm._v("mdi-chart-line-variant")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-4 text-h6 grey--text"
  }, [_vm._v("ບໍ່ມີຂໍ້ມູນໃນໄລຍະທີ່ເລືອກ")]), _vm._v(" "), _c('p', {
    staticClass: "text-caption grey--text mt-2"
  }, [_vm._v("\n            ກະລຸນາເລືອກໄລຍະເວລາທີ່ມີຂໍ້ມູນລາຍຮັບ ຫຼື ລາຍຈ່າຍ\n          ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "color": "primary",
      "outlined": ""
    },
    on: {
      "click": _vm.setCurrentMonth
    }
  }, [_vm._v("\n            ລອງເບິ່ງເດືອນນີ້\n          ")])], 1)], 1)], 1)], 1) : _vm._e(), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1000px",
      "scrollable": ""
    },
    model: {
      value: _vm.showRevenueDetails,
      callback: function ($$v) {
        _vm.showRevenueDetails = $$v;
      },
      expression: "showRevenueDetails"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "success white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-cash-plus")]), _vm._v("\n        ລາຍລະອຽດລາຍຮັບ\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        _vm.showRevenueDetails = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.revenueHeaders,
      "items": _vm.revenueDetailItems,
      "items-per-page": 10,
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "item.receivedDate",
      fn: function ({
        item
      }) {
        return [_vm._v("\n            " + _vm._s(_vm.formatDate(item.receivedDate)) + "\n          ")];
      }
    }, {
      key: "item.originalAmount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-right"
        }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(item.originalAmount)) + "\n              "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "grey--text"
        }, [_vm._v(_vm._s(item.currencyCode))])])];
      }
    }, {
      key: "item.lakAmount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-right font-weight-bold"
        }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(item.lakAmount)) + "\n            ")])];
      }
    }, {
      key: "item.transactionCode",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": item.transactionCode === 'UN-ALLOCATED' ? 'grey' : 'success',
            "text-color": "white"
          }
        }, [_vm._v("\n              " + _vm._s(item.transactionCode) + "\n            ")])];
      }
    }])
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1000px",
      "scrollable": ""
    },
    model: {
      value: _vm.showExpenseDetails,
      callback: function ($$v) {
        _vm.showExpenseDetails = $$v;
      },
      expression: "showExpenseDetails"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "error white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-cash-minus")]), _vm._v("\n        ລາຍລະອຽດລາຍຈ່າຍ\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        _vm.showExpenseDetails = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.expenseHeaders,
      "items": _vm.expenseDetailItems,
      "items-per-page": 10,
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "item.settlementDate",
      fn: function ({
        item
      }) {
        return [_vm._v("\n            " + _vm._s(_vm.formatDate(item.settlementDate)) + "\n          ")];
      }
    }, {
      key: "item.originalAmount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-right"
        }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(item.originalAmount)) + "\n              "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "grey--text"
        }, [_vm._v(_vm._s(item.currencyCode))])])];
      }
    }, {
      key: "item.lakAmount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-right font-weight-bold"
        }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(item.lakAmount)) + "\n            ")])];
      }
    }, {
      key: "item.transactionCode",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": item.transactionCode === 'UN-ALLOCATED' ? 'grey' : 'error',
            "text-color": "white"
          }
        }, [_vm._v("\n              " + _vm._s(item.transactionCode) + "\n            ")])];
      }
    }])
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px",
      "scrollable": ""
    },
    model: {
      value: _vm.showRevenueCodeBreakdown,
      callback: function ($$v) {
        _vm.showRevenueCodeBreakdown = $$v;
      },
      expression: "showRevenueCodeBreakdown"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "purple white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-code-tags")]), _vm._v("\n        ວິເຄາະລາຍຮັບຕາມລະຫັດ Transaction\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        _vm.showRevenueCodeBreakdown = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], _vm._l(_vm.revenueByTransactionCode, function (item, code) {
    return _c(VCard["a" /* default */], {
      key: `revenue-card-${code}`,
      staticClass: "mb-3",
      attrs: {
        "outlined": ""
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pb-2"
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', [_c(VChip["a" /* default */], {
      staticClass: "mb-2",
      attrs: {
        "color": code === 'UN-ALLOCATED' ? 'grey' : 'success',
        "text-color": "white"
      }
    }, [_vm._v("\n                  " + _vm._s(code) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "text-subtitle-2"
    }, [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c('div', {
      staticClass: "text-caption grey--text"
    }, [_vm._v(_vm._s(item.count) + " ລາຍການ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "text-right"
    }, [_c('div', {
      staticClass: "text-h6 success--text font-weight-bold"
    }, [_vm._v("\n                  " + _vm._s(_vm.formatCurrency(item.amount)) + " LAK\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "text-caption"
    }, [_vm._v("\n                  " + _vm._s(_vm.formatPercentage(item.amount / _vm.totalRevenueLAK * 100)) + "% ຂອງລາຍຮັບລວມ\n                ")])])])])], 1);
  }), 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px",
      "scrollable": ""
    },
    model: {
      value: _vm.showExpenseCodeBreakdown,
      callback: function ($$v) {
        _vm.showExpenseCodeBreakdown = $$v;
      },
      expression: "showExpenseCodeBreakdown"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "orange white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-code-tags")]), _vm._v("\n        ວິເຄາະລາຍຈ່າຍຕາມລະຫັດ Transaction\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        _vm.showExpenseCodeBreakdown = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], _vm._l(_vm.expenseByTransactionCode, function (item, code) {
    return _c(VCard["a" /* default */], {
      key: `expense-card-${code}`,
      staticClass: "mb-3",
      attrs: {
        "outlined": ""
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pb-2"
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', [_c(VChip["a" /* default */], {
      staticClass: "mb-2",
      attrs: {
        "color": code === 'UN-ALLOCATED' ? 'grey' : 'error',
        "text-color": "white"
      }
    }, [_vm._v("\n                  " + _vm._s(code) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "text-subtitle-2"
    }, [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c('div', {
      staticClass: "text-caption grey--text"
    }, [_vm._v(_vm._s(item.count) + " ລາຍການ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "text-right"
    }, [_c('div', {
      staticClass: "text-h6 error--text font-weight-bold"
    }, [_vm._v("\n                  " + _vm._s(_vm.formatCurrency(item.amount)) + " LAK\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "text-caption"
    }, [_vm._v("\n                  " + _vm._s(_vm.formatPercentage(item.amount / _vm.totalExpenseLAK * 100)) + "% ຂອງລາຍຈ່າຍລວມ\n                ")])])])])], 1);
  }), 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.showPLBreakdown,
      callback: function ($$v) {
        _vm.showPLBreakdown = $$v;
      },
      expression: "showPLBreakdown"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "info white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-chart-pie")]), _vm._v("\n        ການວິເຄາະກຳໄລ / ຂາດທຶນ\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        _vm.showPLBreakdown = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c('div', {
    staticClass: "breakdown-item"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center mb-2"
  }, [_c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ລາຍຮັບລວມ:")]), _vm._v(" "), _c('span', {
    staticClass: "success--text font-weight-bold"
  }, [_vm._v("\n              +" + _vm._s(_vm.formatCurrency(_vm.totalRevenueLAK)) + " LAK\n            ")])])]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "breakdown-item"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center mb-2"
  }, [_c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ລາຍຈ່າຍລວມ:")]), _vm._v(" "), _c('span', {
    staticClass: "error--text font-weight-bold"
  }, [_vm._v("\n              -" + _vm._s(_vm.formatCurrency(_vm.totalExpenseLAK)) + " LAK\n            ")])])]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "breakdown-item"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center mb-2"
  }, [_c('span', {
    staticClass: "text-h6 font-weight-bold"
  }, [_vm._v("\n              " + _vm._s(_vm.netProfitLoss >= 0 ? 'ກຳໄລສຸດທິ:' : 'ຂາດທຶນສຸດທິ:') + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6 font-weight-bold",
    class: _vm.netProfitLoss >= 0 ? 'success--text' : 'error--text'
  }, [_vm._v("\n              " + _vm._s(_vm.netProfitLoss >= 0 ? '+' : '-') + _vm._s(_vm.formatCurrency(Math.abs(_vm.netProfitLoss))) + " LAK\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "mt-4"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.netProfitLoss >= 0 ? 'success' : 'error',
      "text-color": "white",
      "small": ""
    }
  }, [_vm._v("\n            ອັດຕາກຳໄລ: " + _vm._s(_vm.formatPercentage(_vm.profitMargin)) + "%\n          ")])], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "timeout": -1,
      "color": "info",
      "bottom": "",
      "right": ""
    },
    model: {
      value: _vm.showExportProgress,
      callback: function ($$v) {
        _vm.showExportProgress = $$v;
      },
      expression: "showExportProgress"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-download")]), _vm._v("\n    ກຳລັງສ້າງລາຍງານ Excel...\n    "), _c(VProgressLinear["a" /* default */], {
    staticClass: "mb-0 mt-2",
    attrs: {
      "indeterminate": "",
      "color": "white"
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/reports/ProfitLossReport.vue?vue&type=template&id=382d481a&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(146);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(147);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(148);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(149);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(150);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(151);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(152);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(153);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(154);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(155);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(156);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(157);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(158);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(159);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(160);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(161);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/reports/ProfitLossReport.vue?vue&type=script&lang=js
















/* harmony default export */ var ProfitLossReportvue_type_script_lang_js = ({
  name: 'ProfitLossReport',
  data() {
    return {
      loading: false,
      exporting: false,
      showExportProgress: false,
      showRevenueDetails: false,
      showExpenseDetails: false,
      showPLBreakdown: false,
      showRevenueCodeBreakdown: false,
      showExpenseCodeBreakdown: false,
      // Date filters
      filters: {
        fromDate: '',
        toDate: ''
      },
      // Data arrays
      receiveRecords: [],
      expenseRecords: [],
      currencies: [],
      // Validation rules
      rules: {
        required: v => !!v || 'ຈຳເປັນຕ້ອງມີ',
        validFromDate: v => {
          if (!v || !this.filters.toDate) return true;
          return new Date(v) <= new Date(this.filters.toDate) || 'ວັນທີເລີ່ມຕົ້ນຕ້ອງນ້ອຍກວ່າວັນທີສິ້ນສຸດ';
        },
        validToDate: v => {
          if (!v || !this.filters.fromDate) return true;
          return new Date(v) >= new Date(this.filters.fromDate) || 'ວັນທີສິ້ນສຸດຕ້ອງໃຫຍ່ກວ່າວັນທີເລີ່ມຕົ້ນ';
        }
      },
      // Table headers
      revenueHeaders: [{
        text: 'ເລກທີໃບຮັບ',
        value: 'receiptNumber',
        width: '140px'
      }, {
        text: 'ວັນທີ',
        value: 'receivedDate',
        width: '110px'
      }, {
        text: 'ຈຳນວນເງິນ',
        value: 'originalAmount',
        align: 'end',
        width: '130px'
      }, {
        text: 'ຈຳນວນ LAK',
        value: 'lakAmount',
        align: 'end',
        width: '130px'
      }, {
        text: 'ລະຫັດ Txn',
        value: 'transactionCode',
        width: '120px'
      }, {
        text: 'ອ້າງອີງ',
        value: 'referenceNumber',
        width: '110px'
      }],
      expenseHeaders: [{
        text: 'ລະຫັດ',
        value: 'id',
        width: '80px'
      }, {
        text: 'ວັນທີ',
        value: 'settlementDate',
        width: '110px'
      }, {
        text: 'ຈຳນວນເງິນ',
        value: 'originalAmount',
        align: 'end',
        width: '130px'
      }, {
        text: 'ຈຳນວນ LAK',
        value: 'lakAmount',
        align: 'end',
        width: '130px'
      }, {
        text: 'ລະຫັດ Txn',
        value: 'transactionCode',
        width: '120px'
      }, {
        text: 'ອ້າງອີງ',
        value: 'reference',
        width: '110px'
      }]
    };
  },
  computed: {
    /**
     * Check if selected date range is valid
     */
    isValidDateRange() {
      return this.filters.fromDate && this.filters.toDate && new Date(this.filters.fromDate) <= new Date(this.filters.toDate);
    },
    /**
     * Check if we have any data to show
     */
    hasData() {
      return this.receiveRecords.length > 0 || this.expenseRecords.length > 0;
    },
    /**
     * Calculate total revenue in LAK
     * Convert all receive records to LAK using: amount * exchangeRate
     */
    totalRevenueLAK() {
      return this.receiveRecords.reduce((total, record) => {
        const lakAmount = this.convertToLAK(record.totalReceivedAmount, record.exchangeRate, record.currency);
        return total + lakAmount;
      }, 0);
    },
    /**
     * Calculate total expenses in LAK
     * Convert all expense records to LAK using: amount * exchangeRate
     */
    totalExpenseLAK() {
      return this.expenseRecords.reduce((total, record) => {
        const lakAmount = this.convertToLAK(record.paymentAmount, record.exchangeRate, record.currency);
        return total + lakAmount;
      }, 0);
    },
    /**
     * Calculate net profit/loss
     * P&L = Total Revenue - Total Expenses
     */
    netProfitLoss() {
      return this.totalRevenueLAK - this.totalExpenseLAK;
    },
    /**
     * Calculate profit margin percentage
     * Profit Margin = (Net Profit / Total Revenue) * 100
     */
    profitMargin() {
      if (this.totalRevenueLAK === 0) return 0;
      return this.netProfitLoss / this.totalRevenueLAK * 100;
    },
    /**
     * Calculate revenue percentage for chart display
     */
    revenuePercentage() {
      const total = this.totalRevenueLAK + this.totalExpenseLAK;
      return total > 0 ? this.totalRevenueLAK / total * 100 : 0;
    },
    /**
     * Calculate expense percentage for chart display
     */
    expensePercentage() {
      const total = this.totalRevenueLAK + this.totalExpenseLAK;
      return total > 0 ? this.totalExpenseLAK / total * 100 : 0;
    },
    /**
     * Get unique currencies used in the report
     */
    uniqueCurrencies() {
      const currencies = new Set();
      this.receiveRecords.forEach(record => {
        var _record$currency;
        const code = ((_record$currency = record.currency) === null || _record$currency === void 0 ? void 0 : _record$currency.code) || 'LAK';
        currencies.add(code);
      });
      this.expenseRecords.forEach(record => {
        var _record$currency2;
        const code = ((_record$currency2 = record.currency) === null || _record$currency2 === void 0 ? void 0 : _record$currency2.code) || 'LAK';
        currencies.add(code);
      });
      return Array.from(currencies);
    },
    /**
     * NEW: Group revenue by transaction code
     */
    revenueByTransactionCode() {
      const grouped = {};
      this.receiveRecords.forEach(record => {
        // Process each receive line for transaction details
        if (record.receiveLines && record.receiveLines.length > 0) {
          record.receiveLines.forEach(line => {
            const transaction = line.transaction;
            const txnCode = (transaction === null || transaction === void 0 ? void 0 : transaction.code) || 'UN-ALLOCATED';
            const txnDescription = (transaction === null || transaction === void 0 ? void 0 : transaction.description) || 'ບໍ່ມີການຈັດສັນປະເພດ';

            // Calculate LAK amount for this line
            const lineAmount = this.convertToLAK(line.allocatedAmount || 0, record.exchangeRate, record.currency);
            if (!grouped[txnCode]) {
              grouped[txnCode] = {
                code: txnCode,
                description: txnDescription,
                amount: 0,
                count: 0
              };
            }
            grouped[txnCode].amount += lineAmount;
            grouped[txnCode].count += 1;
          });
        } else {
          // If no receive lines, treat as unallocated
          const txnCode = 'UN-ALLOCATED';
          const lakAmount = this.convertToLAK(record.totalReceivedAmount, record.exchangeRate, record.currency);
          if (!grouped[txnCode]) {
            grouped[txnCode] = {
              code: txnCode,
              description: 'ບໍ່ມີການຈັດສັນປະເພດ',
              amount: 0,
              count: 0
            };
          }
          grouped[txnCode].amount += lakAmount;
          grouped[txnCode].count += 1;
        }
      });

      // Sort by amount descending
      return Object.keys(grouped).sort((a, b) => grouped[b].amount - grouped[a].amount).reduce((sorted, key) => {
        sorted[key] = grouped[key];
        return sorted;
      }, {});
    },
    /**
     * NEW: Group expenses by transaction code
     */
    expenseByTransactionCode() {
      const grouped = {};
      this.expenseRecords.forEach(record => {
        // Process each invoice settlement for transaction details
        if (record.invoiceSettlements && record.invoiceSettlements.length > 0) {
          record.invoiceSettlements.forEach(settlement => {
            const transaction = settlement.transaction;
            const txnCode = (transaction === null || transaction === void 0 ? void 0 : transaction.code) || 'UN-ALLOCATED';
            const txnDescription = (transaction === null || transaction === void 0 ? void 0 : transaction.description) || 'ບໍ່ມີການຈັດສັນປະເພດ';

            // Calculate LAK amount for this settlement
            const settlementAmount = this.convertToLAK(settlement.amount || 0, record.exchangeRate, record.currency);
            if (!grouped[txnCode]) {
              grouped[txnCode] = {
                code: txnCode,
                description: txnDescription,
                amount: 0,
                count: 0
              };
            }
            grouped[txnCode].amount += settlementAmount;
            grouped[txnCode].count += 1;
          });
        } else {
          // If no invoice settlements, treat as unallocated
          const txnCode = 'UN-ALLOCATED';
          const lakAmount = this.convertToLAK(record.paymentAmount, record.exchangeRate, record.currency);
          if (!grouped[txnCode]) {
            grouped[txnCode] = {
              code: txnCode,
              description: 'ບໍ່ມີການຈັດສັນປະເພດ',
              amount: 0,
              count: 0
            };
          }
          grouped[txnCode].amount += lakAmount;
          grouped[txnCode].count += 1;
        }
      });

      // Sort by amount descending
      return Object.keys(grouped).sort((a, b) => grouped[b].amount - grouped[a].amount).reduce((sorted, key) => {
        sorted[key] = grouped[key];
        return sorted;
      }, {});
    },
    /**
     * NEW: Format revenue data for detail table with transaction codes
     */
    revenueDetailItems() {
      const items = [];
      this.receiveRecords.forEach(record => {
        if (record.receiveLines && record.receiveLines.length > 0) {
          // Create separate row for each receive line
          record.receiveLines.forEach((line, index) => {
            var _record$currency3;
            const transaction = line.transaction;
            const txnCode = (transaction === null || transaction === void 0 ? void 0 : transaction.code) || 'UN-ALLOCATED';
            const lakAmount = this.convertToLAK(line.allocatedAmount || 0, record.exchangeRate, record.currency);
            items.push({
              id: `${record.id}-${index}`,
              receiptNumber: record.receiptNumber + (record.receiveLines.length > 1 ? ` (${index + 1})` : ''),
              receivedDate: record.receivedDate,
              originalAmount: line.allocatedAmount || 0,
              currencyCode: ((_record$currency3 = record.currency) === null || _record$currency3 === void 0 ? void 0 : _record$currency3.code) || 'LAK',
              exchangeRate: record.exchangeRate || 1,
              lakAmount: lakAmount,
              transactionCode: txnCode,
              referenceNumber: record.referenceNumber,
              description: line.description
            });
          });
        } else {
          var _record$currency4;
          // Single row for record without lines
          const lakAmount = this.convertToLAK(record.totalReceivedAmount, record.exchangeRate, record.currency);
          items.push({
            id: record.id,
            receiptNumber: record.receiptNumber,
            receivedDate: record.receivedDate,
            originalAmount: record.totalReceivedAmount,
            currencyCode: ((_record$currency4 = record.currency) === null || _record$currency4 === void 0 ? void 0 : _record$currency4.code) || 'LAK',
            exchangeRate: record.exchangeRate || 1,
            lakAmount: lakAmount,
            transactionCode: 'UN-ALLOCATED',
            referenceNumber: record.referenceNumber,
            description: record.notes
          });
        }
      });
      return items;
    },
    /**
     * NEW: Format expense data for detail table with transaction codes
     */
    expenseDetailItems() {
      const items = [];
      this.expenseRecords.forEach(record => {
        if (record.invoiceSettlements && record.invoiceSettlements.length > 0) {
          // Create separate row for each settlement
          record.invoiceSettlements.forEach((settlement, index) => {
            var _record$currency5;
            const transaction = settlement.transaction;
            const txnCode = (transaction === null || transaction === void 0 ? void 0 : transaction.code) || 'UN-ALLOCATED';
            const lakAmount = this.convertToLAK(settlement.amount || 0, record.exchangeRate, record.currency);
            items.push({
              id: `${record.id}-${index}`,
              settlementDate: record.settlementDate,
              originalAmount: settlement.amount || 0,
              currencyCode: ((_record$currency5 = record.currency) === null || _record$currency5 === void 0 ? void 0 : _record$currency5.code) || 'LAK',
              exchangeRate: record.exchangeRate || 1,
              lakAmount: lakAmount,
              transactionCode: txnCode,
              reference: record.reference,
              description: settlement.description
            });
          });
        } else {
          var _record$currency6;
          // Single row for record without settlements
          const lakAmount = this.convertToLAK(record.paymentAmount, record.exchangeRate, record.currency);
          items.push({
            id: record.id,
            settlementDate: record.settlementDate,
            originalAmount: record.paymentAmount,
            currencyCode: ((_record$currency6 = record.currency) === null || _record$currency6 === void 0 ? void 0 : _record$currency6.code) || 'LAK',
            exchangeRate: record.exchangeRate || 1,
            lakAmount: lakAmount,
            transactionCode: 'UN-ALLOCATED',
            reference: record.reference,
            description: record.description
          });
        }
      });
      return items;
    }
  },
  mounted() {
    // Set default to current month
    this.setCurrentMonth();
    // Load initial data
    this.fetchCurrencies();
  },
  methods: {
    /**
     * CORE CURRENCY CONVERSION LOGIC
     * Convert any amount to LAK using the exchange rate
     * Formula: amount_lak = amount * exchangeRate
     * If currency is already LAK, exchangeRate should be 1
     */
    convertToLAK(amount, exchangeRate, currency) {
      // Handle null/undefined values safely
      if (!amount || amount === 0) return 0;

      // If currency is LAK, no conversion needed
      const currencyCode = (currency === null || currency === void 0 ? void 0 : currency.code) || (currency === null || currency === void 0 ? void 0 : currency.name) || 'LAK';
      if (currencyCode === 'LAK') {
        return parseFloat(amount) || 0;
      }

      // Use provided exchange rate, fallback to 1 if missing
      const rate = parseFloat(exchangeRate) || 1;
      const convertedAmount = parseFloat(amount) * rate;
      return convertedAmount || 0;
    },
    /**
     * Fetch receive records within date range
     */
    async fetchReceiveRecords() {
      try {
        const params = {
          bookingDateFrom: this.filters.fromDate,
          bookingDateTo: this.filters.toDate
        };
        const {
          data
        } = await this.$axios.get('/api/ar-receive-headers/pl', {
          params
        });
        if (data !== null && data !== void 0 && data.success) {
          // Filter records by date range on client side as backup
          this.receiveRecords = (data.data.receiveHeaders || []).filter(record => {
            const recordDate = new Date(record.receivedDate || record.bookingDate);
            const fromDate = new Date(this.filters.fromDate);
            const toDate = new Date(this.filters.toDate);
            return recordDate >= fromDate && recordDate <= toDate;
          });
        } else {
          this.receiveRecords = [];
        }
      } catch (error) {
        console.error('Error fetching receive records:', error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນລາຍຮັບ');
        this.receiveRecords = [];
      }
    },
    /**
     * Fetch expense records within date range
     */
    async fetchExpenseRecords() {
      try {
        const params = {
          startDate: this.filters.fromDate,
          endDate: this.filters.toDate
        };
        const {
          data
        } = await this.$axios.get('/api/ap-invoices-settlement/pl', {
          params
        });
        if (data !== null && data !== void 0 && data.success) {
          // Filter records by date range on client side as backup
          this.expenseRecords = (data.data.settlements || []).filter(record => {
            const recordDate = new Date(record.settlementDate);
            const fromDate = new Date(this.filters.fromDate);
            const toDate = new Date(this.filters.toDate);
            return recordDate >= fromDate && recordDate <= toDate;
          });
        } else {
          this.expenseRecords = [];
        }
      } catch (error) {
        console.error('Error fetching expense records:', error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນລາຍຈ່າຍ');
        this.expenseRecords = [];
      }
    },
    /**
     * Fetch currency master data
     */
    async fetchCurrencies() {
      try {
        const {
          data
        } = await this.$axios.get('/api/currency/findAll');
        this.currencies = data || [];
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    },
    /**
     * Main method to fetch all data and generate report
     */
    async fetchData() {
      if (!this.isValidDateRange) {
        this.$toast.warning('ກະລຸນາເລືອກໄລຍະເວລາທີ່ຖືກຕ້ອງ');
        return;
      }
      this.loading = true;
      try {
        // Fetch both revenue and expense data in parallel
        await Promise.all([this.fetchReceiveRecords(), this.fetchExpenseRecords()]);
        this.$toast.success('ໂຫຼດຂໍ້ມູນສຳເລັດ');
      } catch (error) {
        console.error('Error fetching P&L data:', error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ');
      } finally {
        this.loading = false;
      }
    },
    /**
     * Alias for fetchData to maintain semantic clarity
     */
    generateReport() {
      this.fetchData();
    },
    /**
     * Set date range to current month
     */
    setCurrentMonth() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      this.filters.fromDate = new Date(year, month, 1).toISOString().split('T')[0];
      this.filters.toDate = new Date(year, month + 1, 0).toISOString().split('T')[0];
    },
    /**
     * Set date range to current year
     */
    setCurrentYear() {
      const now = new Date();
      const year = now.getFullYear();
      this.filters.fromDate = `${year}-01-01`;
      this.filters.toDate = `${year}-12-31`;
    },
    /**
     * Export P&L report to Excel
     */
    async exportToExcel() {
      if (!this.hasData) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນສຳລັບການສົ່ງອອກ');
        return;
      }
      this.exporting = true;
      this.showExportProgress = true;
      try {
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `P&L_Report_TransactionCode_${this.filters.fromDate}_to_${this.filters.toDate}_${currentDate}.xlsx`;
        await this.generatePLExcel(filename);
        this.$toast.success('ສົ່ງອອກລາຍງານສຳເລັດ');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ');
      } finally {
        this.exporting = false;
        this.showExportProgress = false;
      }
    },
    /**
     * Generate Excel file with P&L data including transaction code breakdown
     */
    async generatePLExcel(filename) {
      try {
        // Try to use XLSX library
        const XLSX = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 418, 7));

        // Summary sheet data
        const summaryData = [['ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ (P&L Report) - ວິເຄາະຕາມລະຫັດ Transaction', '', '', ''], ['ໄລຍະເວລາ:', this.formatDateRange(), '', ''], ['ສ້າງລາຍງານ:', this.formatDate(new Date()), '', ''], ['', '', '', ''], ['ລາຍການ', 'ຈຳນວນ (LAK)', 'ອັດຕາ (%)', 'ໝາຍເຫດ'], ['ລາຍຮັບລວມ', this.totalRevenueLAK, this.revenuePercentage.toFixed(2), `${this.receiveRecords.length} ລາຍການ`], ['ລາຍຈ່າຍລວມ', this.totalExpenseLAK, this.expensePercentage.toFixed(2), `${this.expenseRecords.length} ລາຍການ`], ['', '', '', ''], [this.netProfitLoss >= 0 ? 'ກຳໄລສຸດທິ' : 'ຂາດທຶນສຸດທິ', Math.abs(this.netProfitLoss), this.formatPercentage(this.profitMargin), this.netProfitLoss >= 0 ? 'ກຳໄລ' : 'ຂາດທຶນ']];

        // Revenue by transaction code
        const revenueByCodeData = [['ລາຍຮັບຕາມລະຫັດ Transaction', '', '', ''], ['ລະຫັດ', 'ຄຳອະທິບາຍ', 'ຈຳນວນ (LAK)', '% ຂອງລາຍຮັບລວມ'], ...Object.keys(this.revenueByTransactionCode).map(code => {
          const item = this.revenueByTransactionCode[code];
          return [code, item.description, item.amount, (item.amount / this.totalRevenueLAK * 100).toFixed(2)];
        })];

        // Expense by transaction code
        const expenseByCodeData = [['ລາຍຈ່າຍຕາມລະຫັດ Transaction', '', '', ''], ['ລະຫັດ', 'ຄຳອະທິບາຍ', 'ຈຳນວນ (LAK)', '% ຂອງລາຍຈ່າຍລວມ'], ...Object.keys(this.expenseByTransactionCode).map(code => {
          const item = this.expenseByTransactionCode[code];
          return [code, item.description, item.amount, (item.amount / this.totalExpenseLAK * 100).toFixed(2)];
        })];

        // Revenue detail data with transaction codes
        const revenueData = [['ລາຍລະອຽດລາຍຮັບ - ແຍກຕາມ Transaction Code', '', '', '', '', '', ''], ['ເລກທີໃບຮັບ', 'ວັນທີ', 'ຈຳນວນເງິນ', 'ສະກຸນເງິນ', 'ອັດຕາແລກປ່ຽນ', 'ຈຳນວນ LAK', 'ລະຫັດ Transaction'], ...this.revenueDetailItems.map(item => [item.receiptNumber || '', this.formatDate(item.receivedDate), item.originalAmount || 0, item.currencyCode || 'LAK', item.exchangeRate || 1, item.lakAmount, item.transactionCode])];

        // Expense detail data with transaction codes
        const expenseData = [['ລາຍລະອຽດລາຍຈ່າຍ - ແຍກຕາມ Transaction Code', '', '', '', '', '', ''], ['ລະຫັດ', 'ວັນທີ', 'ຈຳນວນເງິນ', 'ສະກຸນເງິນ', 'ອັດຕາແລກປ່ຽນ', 'ຈຳນວນ LAK', 'ລະຫັດ Transaction'], ...this.expenseDetailItems.map(item => [item.id || '', this.formatDate(item.settlementDate), item.originalAmount || 0, item.currencyCode || 'LAK', item.exchangeRate || 1, item.lakAmount, item.transactionCode])];

        // Create workbook
        const workbook = XLSX.utils.book_new();

        // Add sheets
        const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
        const revenueByCodeSheet = XLSX.utils.aoa_to_sheet(revenueByCodeData);
        const expenseByCodeSheet = XLSX.utils.aoa_to_sheet(expenseByCodeData);
        const revenueSheet = XLSX.utils.aoa_to_sheet(revenueData);
        const expenseSheet = XLSX.utils.aoa_to_sheet(expenseData);
        XLSX.utils.book_append_sheet(workbook, summarySheet, 'ສະຫຼຸບ P&L');
        XLSX.utils.book_append_sheet(workbook, revenueByCodeSheet, 'ລາຍຮັບຕາມລະຫັດ');
        XLSX.utils.book_append_sheet(workbook, expenseByCodeSheet, 'ລາຍຈ່າຍຕາມລະຫັດ');
        XLSX.utils.book_append_sheet(workbook, revenueSheet, 'ລາຍຮັບລະອຽດ');
        XLSX.utils.book_append_sheet(workbook, expenseSheet, 'ລາຍຈ່າຍລະອຽດ');

        // Set column widths
        const wscols = [{
          wch: 20
        }, {
          wch: 25
        }, {
          wch: 15
        }, {
          wch: 15
        }, {
          wch: 15
        }, {
          wch: 15
        }, {
          wch: 15
        }];
        summarySheet['!cols'] = wscols;
        revenueByCodeSheet['!cols'] = wscols;
        expenseByCodeSheet['!cols'] = wscols;
        revenueSheet['!cols'] = wscols;
        expenseSheet['!cols'] = wscols;

        // Save file
        XLSX.writeFile(workbook, filename);
      } catch (xlsxError) {
        // Fallback to CSV
        console.log('XLSX not available, generating CSV');
        const csvData = this.generatePLCSV();
        this.downloadBlob(csvData, filename.replace('.xlsx', '.csv'));
      }
    },
    /**
     * Generate CSV fallback
     */
    generatePLCSV() {
      const csvLines = ['ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ - ຕາມລະຫັດ Transaction,,,', `ໄລຍະເວລາ,${this.formatDateRange()},,`, `ລາຍຮັບລວມ,${this.totalRevenueLAK},,`, `ລາຍຈ່າຍລວມ,${this.totalExpenseLAK},,`, `${this.netProfitLoss >= 0 ? 'ກຳໄລສຸດທິ' : 'ຂາດທຶນສຸດທິ'},${Math.abs(this.netProfitLoss)},,`, '', 'ລາຍຮັບຕາມລະຫັດ Transaction,,,', ...Object.keys(this.revenueByTransactionCode).map(code => {
        const item = this.revenueByTransactionCode[code];
        return `${code},${item.description},${item.amount},${(item.amount / this.totalRevenueLAK * 100).toFixed(2)}%`;
      })];
      return new Blob([csvLines.join('\n')], {
        type: 'text/csv;charset=utf-8;'
      });
    },
    /**
     * Download blob helper
     */
    downloadBlob(blob, filename) {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    },
    // Utility formatting methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount || 0);
    },
    formatPercentage(percentage) {
      return parseFloat(percentage || 0).toFixed(2);
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-GB');
    },
    formatDateRange() {
      return `${this.formatDate(this.filters.fromDate)} - ${this.formatDate(this.filters.toDate)}`;
    }
  }
});
// CONCATENATED MODULE: ./components/reports/ProfitLossReport.vue?vue&type=script&lang=js
 /* harmony default export */ var reports_ProfitLossReportvue_type_script_lang_js = (ProfitLossReportvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/reports/ProfitLossReport.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(825)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reports_ProfitLossReportvue_type_script_lang_js,
  ProfitLossReportvue_type_template_id_382d481a_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "382d481a",
  "30ebdbbe"
  
)

/* harmony default export */ var ProfitLossReport = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_loss_vue_vue_type_style_index_0_id_c1fc0f1c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(984);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_loss_vue_vue_type_style_index_0_id_c1fc0f1c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_loss_vue_vue_type_style_index_0_id_c1fc0f1c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_loss_vue_vue_type_style_index_0_id_c1fc0f1c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_loss_vue_vue_type_style_index_0_id_c1fc0f1c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1294:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text-h4[data-v-c1fc0f1c]{color:#1976d2}.text-subtitle-1[data-v-c1fc0f1c]{line-height:1.5}.v-breadcrumbs[data-v-c1fc0f1c]{padding:0!important}.v-breadcrumbs-item[data-v-c1fc0f1c]{font-size:14px}@media (max-width:600px){.text-h4[data-v-c1fc0f1c]{font-size:1.5rem!important}.d-flex.justify-space-between[data-v-c1fc0f1c]{align-items:flex-start!important;flex-direction:column}.v-breadcrumbs[data-v-c1fc0f1c]{margin-top:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js + 1 modules
var VBreadcrumbs = __webpack_require__(665);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js
var VBreadcrumbsItem = __webpack_require__(552);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reports/profit-loss.vue?vue&type=template&id=c1fc0f1c&scoped=true



var profit_lossvue_type_template_id_c1fc0f1c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"d-flex justify-space-between align-center mb-6\" data-v-c1fc0f1c>", "</div>", [_vm._ssrNode("<div data-v-c1fc0f1c><h1 class=\"font-weight-bold\" data-v-c1fc0f1c>\n        ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ\n      </h1> <p class=\"grey--text mt-2\" data-v-c1fc0f1c>\n        Profit &amp; Loss Report - ວິເຄາະລາຍຮັບ ແລະ ລາຍຈ່າຍ\n      </p></div> "), _c(VBreadcrumbs["a" /* default */], {
    staticClass: "pa-0",
    attrs: {
      "items": _vm.breadcrumbs
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VBreadcrumbsItem["a" /* default */], {
          staticClass: "text-decoration-none",
          attrs: {
            "href": item.href,
            "disabled": item.disabled
          }
        }, [_vm._v("\n          " + _vm._s(item.text) + "\n        ")])];
      }
    }])
  })], 2), _vm._ssrNode(" "), _c('ProfitLossReport')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/reports/profit-loss.vue?vue&type=template&id=c1fc0f1c&scoped=true

// EXTERNAL MODULE: ./components/reports/ProfitLossReport.vue + 4 modules
var ProfitLossReport = __webpack_require__(1090);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reports/profit-loss.vue?vue&type=script&lang=js

/* harmony default export */ var profit_lossvue_type_script_lang_js = ({
  name: 'ProfitLossReportPage',
  components: {
    ProfitLossReport: ProfitLossReport["default"]
  },
  // Page metadata
  head() {
    return {
      title: 'ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ - P&L Report',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Profit & Loss Report - ລາຍງານວິເຄາະລາຍຮັບ ແລະ ລາຍຈ່າຍ ດ້ວຍການຄຳນວນຫຼາຍສະກຸນເງິນ'
      }]
    };
  },
  // Page middleware (optional)
  middleware: ['auth'],
  // Require authentication to view this page

  // Page layout (optional)
  layout: 'default',
  data() {
    return {
      breadcrumbs: [
        // {
        //   text: 'ໜ້າຫຼັກ',
        //   disabled: false,
        //   href: '/'
        // },
        // {
        //   text: 'ລາຍງານ',
        //   disabled: false,
        //   href: '/reports'
        // },
        // {
        //   text: 'P&L Report',
        //   disabled: true,
        //   href: '/reports/profit-loss'
        // }
      ]
    };
  },
  // Async data fetching (if needed for initial data)
  async asyncData({
    $axios,
    error
  }) {
    try {
      // You can pre-fetch any initial data here if needed
      // For example, currency list or default date ranges

      return {
        // initialData: data
      };
    } catch (err) {
      // Handle errors gracefully
      console.error('Error loading P&L report page:', err);
      // Don't throw error, let component handle data fetching
      return {};
    }
  },
  // Server-side data fetching (alternative to asyncData)
  async fetch() {
    // This runs on both server and client
    // Can be used for data that doesn't need to be available on initial render
    try {
      // Example: fetch currencies or other supporting data
      // await this.$store.dispatch('currencies/fetchCurrencies')
    } catch (error) {
      console.error('Error in fetch:', error);
    }
  }
});
// CONCATENATED MODULE: ./pages/reports/profit-loss.vue?vue&type=script&lang=js
 /* harmony default export */ var reports_profit_lossvue_type_script_lang_js = (profit_lossvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/reports/profit-loss.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1293)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reports_profit_lossvue_type_script_lang_js,
  profit_lossvue_type_template_id_c1fc0f1c_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "c1fc0f1c",
  "315eaecb"
  
)

/* harmony default export */ var profit_loss = __webpack_exports__["default"] = (component.exports);

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

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(551);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("29751484", content, true)

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_mixins_routable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]).extend({
  name: 'v-breadcrumbs-item',
  props: {
    // In a breadcrumb, the currently
    // active item should be dimmed
    activeClass: {
      type: String,
      default: 'v-breadcrumbs__item--disabled'
    },
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs__item': true,
        [this.activeClass]: this.disabled
      };
    }
  },
  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    return h('li', [h(tag, {
      ...data,
      attrs: {
        ...data.attrs,
        'aria-current': this.isActive && this.isLink ? 'page' : undefined
      }
    }, this.$slots.default)]);
  }
}));

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.sass
var VBreadcrumbs = __webpack_require__(550);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js
var VBreadcrumbsItem = __webpack_require__(552);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsDivider.js

/* harmony default export */ var VBreadcrumbsDivider = (Object(helpers["j" /* createSimpleFunctional */])('v-breadcrumbs__divider', 'li'));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js
// Styles
 // Components


 // Mixins

 // Utils


/* harmony default export */ var VBreadcrumbs_VBreadcrumbs = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    },
    items: {
      type: Array,
      default: () => []
    },
    large: Boolean
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs--large': this.large,
        ...this.themeClasses
      };
    }
  },
  methods: {
    genDivider() {
      return this.$createElement(VBreadcrumbsDivider, this.$slots.divider ? this.$slots.divider : this.divider);
    },
    genItems() {
      const items = [];
      const hasSlot = !!this.$scopedSlots.item;
      const keys = [];
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        keys.push(item.text);
        if (hasSlot) items.push(this.$scopedSlots.item({
          item
        }));else items.push(this.$createElement(VBreadcrumbsItem["a" /* default */], {
          key: keys.join('.'),
          props: item
        }, [item.text]));
        if (i < this.items.length - 1) items.push(this.genDivider());
      }
      return items;
    }
  },
  render(h) {
    const children = this.$slots.default || this.genItems();
    return h('ul', {
      staticClass: 'v-breadcrumbs',
      class: this.classes
    }, children);
  }
}));

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(826);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6c24c110", content, true, context)
};

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfitLossReport_vue_vue_type_style_index_0_id_382d481a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(720);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfitLossReport_vue_vue_type_style_index_0_id_382d481a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfitLossReport_vue_vue_type_style_index_0_id_382d481a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfitLossReport_vue_vue_type_style_index_0_id_382d481a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfitLossReport_vue_vue_type_style_index_0_id_382d481a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".notosans-lao[data-v-382d481a],.notosans-lao *[data-v-382d481a]{font-family:\"Noto Sans Lao\",Arial,sans-serif!important}.pl-report-container[data-v-382d481a]{padding:20px}.v-card-title.primary[data-v-382d481a]{background:linear-gradient(45deg,#1976d2,#1565c0)}.v-card-title.success[data-v-382d481a]{background:linear-gradient(45deg,#4caf50,#66bb6a)}.v-card-title.error[data-v-382d481a]{background:linear-gradient(45deg,#f44336,#ef5350)}.v-card-title.purple[data-v-382d481a]{background:linear-gradient(45deg,#9c27b0,#ba68c8)}.v-card-title.orange[data-v-382d481a]{background:linear-gradient(45deg,#ff9800,#ffb74d)}.chart-container[data-v-382d481a]{padding:20px 0}.chart-bar-wrapper[data-v-382d481a]{margin-bottom:20px}.chart-label[data-v-382d481a]{color:#333;font-weight:600;margin-bottom:8px}.chart-bar[data-v-382d481a]{background:#f5f5f5;border-radius:15px;height:30px;overflow:hidden;position:relative}.chart-fill[data-v-382d481a]{border-radius:15px;height:100%;transition:width .5s ease}.chart-fill.success[data-v-382d481a]{background:linear-gradient(90deg,#4caf50,#66bb6a)}.chart-fill.error[data-v-382d481a]{background:linear-gradient(90deg,#f44336,#ef5350)}.chart-value[data-v-382d481a]{color:#666;font-weight:600;margin-top:5px}.breakdown-item[data-v-382d481a]{padding:10px 0}.v-btn.success[data-v-382d481a]{background-color:#4caf50!important;color:#fff!important}.v-btn.success[data-v-382d481a]:hover{background-color:#45a049!important}.v-chip.success[data-v-382d481a]{background-color:#4caf50!important}.v-chip.error[data-v-382d481a]{background-color:#f44336!important}.v-chip.purple[data-v-382d481a]{background-color:#9c27b0!important}.v-chip.orange[data-v-382d481a]{background-color:#ff9800!important}@media (max-width:960px){.pl-report-container[data-v-382d481a]{padding:10px}.text-h5[data-v-382d481a]{font-size:1.3rem!important}.text-subtitle-1[data-v-382d481a]{font-size:1rem!important}}@media (max-width:600px){.text-h5[data-v-382d481a]{font-size:1.1rem!important}.text-subtitle-1[data-v-382d481a]{font-size:.9rem!important}.v-col.md-2[data-v-382d481a]{flex:0 0 50%!important;max-width:50%!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1294);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a6901f50", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=profit-loss.js.map