exports.ids = [200];
exports.modules = {

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(462);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/bankSummary/index.vue?vue&type=template&id=9cb5862a&scoped=true&

















var bankSummaryvue_type_template_id_9cb5862a_scoped_true_render = function render() {
  var _vm$selectedAdvance;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "money-advances-report"
  }, [_vm._ssrNode("<div class=\"report-header\" data-v-9cb5862a>", "</div>", [_vm._ssrNode("<div class=\"title-section\" data-v-9cb5862a><h1 class=\"page-title\" data-v-9cb5862a><i class=\"fas fa-money-bill-wave\" data-v-9cb5862a></i>\n        ລາຍງານການຈ່າຍເງິນລ່ວງໜ້າ\n      </h1> <p class=\"page-subtitle\" data-v-9cb5862a>Money Advances Report</p></div> "), _vm._ssrNode("<div class=\"action-buttons\" data-v-9cb5862a>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "#01532B",
      "loading": _vm.exporting,
      "dark": ""
    },
    on: {
      "click": _vm.exportToExcel
    }
  }, [_c('i', {
    staticClass: "fas fa-file-excel"
  }), _vm._v("\n        Export Excel\n      ")]), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "#01532B",
      "dark": ""
    },
    on: {
      "click": _vm.printReport
    }
  }, [_c('i', {
    staticClass: "fas fa-print"
  }), _vm._v("\n        Print\n      ")])], 2)], 2), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "filter-card mb-4",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "filter-title d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-filter")]), _vm._v("\n      ຕົວກອງ (Filters)\n    ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ຈາກວັນທີ (From Date)",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.required, _vm.rules.dateRange],
      "max": _vm.filters.toDate || _vm.maxDate
    },
    on: {
      "change": _vm.applyFilters
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
      "type": "date",
      "label": "ເຖິງວັນທີ (To Date)",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.required, _vm.rules.dateRange],
      "min": _vm.filters.fromDate,
      "max": _vm.maxDate
    },
    on: {
      "change": _vm.applyFilters
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
      "md": "4"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.bankAccounts,
      "item-text": "accountName",
      "item-value": "id",
      "label": "ບັນຊີທະນາຄານ (Bank Account)",
      "clearable": "",
      "outlined": "",
      "dense": ""
    },
    on: {
      "change": _vm.applyFilters
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "bank-account-selection"
        }, [_c('span', {
          staticClass: "bank-name"
        }, [_vm._v(_vm._s(item.accountName))]), _vm._v(" "), _c('small', [_vm._v(_vm._s(item.bankName) + " - " + _vm._s(item.accountNumber))])])];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "bank-account-item"
        }, [_c('div', {
          staticClass: "bank-name"
        }, [_vm._v(_vm._s(item.accountName))]), _vm._v(" "), _c('div', {
          staticClass: "bank-details"
        }, [_vm._v(_vm._s(item.bankName) + " - " + _vm._s(item.accountNumber))])])];
      }
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
      "md": "2"
    }
  }, [_c('div', {
    staticClass: "filter-actions"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "custom-primary-bg white--text mb-2",
    attrs: {
      "block": "",
      "outlined": "",
      "loading": _vm.loading,
      "disabled": !_vm.isDateRangeValid
    },
    on: {
      "click": _vm.applyFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-magnify")]), _vm._v("\n              ຄົ້ນຫາ\n            ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "custom-secondary-btn",
    attrs: {
      "block": "",
      "outlined": "",
      "color": "grey lighten-1"
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-restore")]), _vm._v("\n              ຣີເຊັດ\n            ")], 1)], 1)])], 1), _vm._v(" "), _vm.filters.fromDate && _vm.filters.toDate ? _c(VRow["a" /* default */], {
    staticClass: "mt-2"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "date-range-alert",
    attrs: {
      "type": "info",
      "dense": "",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-calendar-range")]), _vm._v(" "), _c('span', [_vm._v("\n                ໄລຍະເວລາທີ່ເລືອກ: " + _vm._s(_vm.formattedFromDate) + " ເຖິງ\n                " + _vm._s(_vm.formattedToDate) + " (" + _vm._s(_vm.daysBetween) + " ວັນ)\n              ")])], 1)])], 1)], 1) : _vm._e()], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "summary-cards mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card advance-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-money-bill-wave"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ລວມລາຍຈ່າຍ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Total Advances")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.summaryData.totalAdvancesLcy)))]), _vm._v(" "), _c('p', {
    staticClass: "summary-lcy"
  }, [_vm._v("LAK")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card settlement-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-hand-holding-usd"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ລວມຊຳລະ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Total Settlements")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.summaryData.totalSettlementsLcy)))]), _vm._v(" "), _c('p', {
    staticClass: "summary-lcy"
  }, [_vm._v("LAK")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card outstanding-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-clock"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ຄ້າງຊຳລະ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Outstanding Balance")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.summaryData.outstandingBalanceLcy)))]), _vm._v(" "), _c('p', {
    staticClass: "summary-lcy"
  }, [_vm._v("LAK")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "summary-card records-card",
    attrs: {
      "elevation": "3"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c('i', {
    staticClass: "fas fa-file-invoice"
  })]), _vm._v(" "), _c('div', {
    staticClass: "summary-details"
  }, [_c('h3', {
    staticClass: "summary-title"
  }, [_vm._v("ລວມລາຍການ")]), _vm._v(" "), _c('p', {
    staticClass: "summary-subtitle"
  }, [_vm._v("Total Records")]), _vm._v(" "), _c('h2', {
    staticClass: "summary-amount"
  }, [_vm._v(_vm._s(_vm.summaryData.totalRecords || 0))]), _vm._v(" "), _c('p', {
    staticClass: "summary-lcy"
  }, [_vm._v("Records")])])])])], 1)], 1)], 1), _vm._ssrNode(" "), _vm.summaryData.fullySettledCount ? _c(VRow["a" /* default */], {
    staticClass: "additional-summary mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stats-card",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center"
  }, [_c('h3', {
    staticClass: "stats-number"
  }, [_vm._v(_vm._s(_vm.summaryData.fullySettledCount || 0))]), _vm._v(" "), _c('p', {
    staticClass: "stats-label"
  }, [_vm._v("ຊຳລະສົມບູນ"), _c('br'), _vm._v("Fully Settled")])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stats-card",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center"
  }, [_c('h3', {
    staticClass: "stats-number"
  }, [_vm._v(_vm._s(_vm.summaryData.partiallySettledCount || 0))]), _vm._v(" "), _c('p', {
    staticClass: "stats-label"
  }, [_vm._v("ຊຳລະບາງສ່ວນ"), _c('br'), _vm._v("Partially Settled")])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stats-card",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center"
  }, [_c('h3', {
    staticClass: "stats-number"
  }, [_vm._v(_vm._s(_vm.summaryData.unsettledCount || 0))]), _vm._v(" "), _c('p', {
    staticClass: "stats-label"
  }, [_vm._v("ຍັງບໍ່ໄດ້ຊຳລະ"), _c('br'), _vm._v("Unsettled")])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stats-card",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center"
  }, [_c('h3', {
    staticClass: "stats-number"
  }, [_vm._v(_vm._s(_vm.summaryData.averageSettlementPercentage || 0) + "%")]), _vm._v(" "), _c('p', {
    staticClass: "stats-label"
  }, [_vm._v("ສະເລ່ຍຊຳລະ"), _c('br'), _vm._v("Avg Settlement")])])], 1)], 1)], 1) : _vm._e(), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "table-card",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "table-title"
  }, [_c('i', {
    staticClass: "fas fa-table"
  }), _vm._v("\n      ລາຍລະອຽດການຈ່າຍເງິນລ່ວງໜ້າ (Money Advances Details)\n      "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VTextField["a" /* default */], {
    staticClass: "search-field",
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "ຄົ້ນຫາ...",
      "single-line": "",
      "hide-details": "",
      "outlined": "",
      "dense": ""
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "report-table",
    attrs: {
      "headers": _vm.tableHeaders,
      "items": _vm.reportData,
      "search": _vm.search,
      "loading": _vm.loading,
      "items-per-page": 25,
      "footer-props": {
        itemsPerPageOptions: [10, 25, 50, 100],
        itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:'
      }
    },
    scopedSlots: _vm._u([{
      key: "item.bookingDate",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "date-cell"
        }, [_vm._v(_vm._s(_vm.formatDate(item.bookingDate)))])];
      }
    }, {
      key: "item.ministry",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "ministry-cell"
        }, [_c('span', {
          staticClass: "ministry-name"
        }, [_vm._v(_vm._s(item.ministry.ministryName))]), _vm._v(" "), _c('span', {
          staticClass: "ministry-code"
        }, [_vm._v(_vm._s(item.ministry.ministryCode))])])];
      }
    }, {
      key: "item.bankAccount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "bank-account-cell"
        }, [_c('span', {
          staticClass: "bank-account-name"
        }, [_vm._v(_vm._s(item.bankAccount.accountName))]), _vm._v(" "), _c('span', {
          staticClass: "bank-account-number"
        }, [_vm._v(_vm._s(item.bankAccount.accountNumber))]), _vm._v(" "), _c('span', {
          staticClass: "bank-name"
        }, [_vm._v(_vm._s(item.bankAccount.bankName))])])];
      }
    }, {
      key: "item.currencyCode",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": _vm.getCurrencyColor(item.currencyCode),
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(item.currencyCode) + "\n        ")])];
      }
    }, {
      key: "item.amount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "amount-breakdown"
        }, [_c('span', {
          staticClass: "amount-cell"
        }, [_vm._v(_vm._s(_vm.formatCurrency(item.amount)))]), _vm._v(" "), _c('div', {
          staticClass: "exchange-rate"
        }, [_vm._v("\n            Rate: " + _vm._s(_vm.formatExchangeRate(item.exchangeRate)) + "\n          ")])])];
      }
    }, {
      key: "item.lcyEquivalent",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "amount-cell lcy-amount"
        }, [_vm._v("\n          " + _vm._s(_vm.formatCurrency(item.lcyEquivalent)) + "\n        ")])];
      }
    }, {
      key: "item.settlementAmount",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "amount-cell settlement-amount"
        }, [_vm._v("\n          " + _vm._s(_vm.formatCurrency(item.settlementAmount)) + "\n        ")])];
      }
    }, {
      key: "item.outstandingAmount",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "amount-cell",
          class: item.outstandingAmount > 0 ? 'outstanding-amount' : 'settled-amount'
        }, [_vm._v("\n          " + _vm._s(_vm.formatCurrency(item.outstandingAmount)) + "\n        ")])];
      }
    }, {
      key: "item.status",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": _vm.getStatusColor(item.status),
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.getStatusText(item.status)) + "\n        ")])];
      }
    }, {
      key: "item.settlementPercentage",
      fn: function ({
        item
      }) {
        return [_c(VProgressLinear["a" /* default */], {
          attrs: {
            "value": parseFloat(item.settlementPercentage),
            "color": _vm.getProgressColor(item.settlementPercentage),
            "height": "20",
            "rounded": ""
          }
        }, [_c('span', {
          staticClass: "progress-text"
        }, [_vm._v(_vm._s(item.settlementPercentage) + "%")])])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "small": "",
            "color": "#01532B",
            "dark": ""
          },
          on: {
            "click": function ($event) {
              return _vm.viewAdvanceDetails(item);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-eye"
        }), _vm._v("\n          ລາຍລະອຽດ\n        ")])];
      }
    }])
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1000px"
    },
    model: {
      value: _vm.detailsDialog,
      callback: function ($$v) {
        _vm.detailsDialog = $$v;
      },
      expression: "detailsDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "dialog-title"
  }, [_c('i', {
    staticClass: "fas fa-money-bill-wave"
  }), _vm._v("\n        ລາຍລະອຽດການຈ່າຍເງິນ #" + _vm._s((_vm$selectedAdvance = _vm.selectedAdvance) === null || _vm$selectedAdvance === void 0 ? void 0 : _vm$selectedAdvance.id) + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": function ($event) {
        _vm.detailsDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _vm.selectedAdvance ? _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນການຈ່າຍເງິນ (Payment Information)")]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-3 custom-divider"
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "detail-stat"
  }, [_c('strong', [_vm._v("ວັນທີຈ່າຍ:")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatDate(_vm.selectedAdvance.bookingDate)))])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "detail-stat"
  }, [_c('strong', [_vm._v("ຈຳນວນເງິນ:")]), _vm._v(" "), _c('p', [_vm._v("\n                " + _vm._s(_vm.formatCurrency(_vm.selectedAdvance.amount)) + "\n                " + _vm._s(_vm.selectedAdvance.currencyCode) + "\n              ")]), _vm._v(" "), _c('small', [_vm._v("LCY: " + _vm._s(_vm.formatCurrency(_vm.selectedAdvance.lcyEquivalent)))])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "detail-stat"
  }, [_c('strong', [_vm._v("ສະຖານະ:")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.getStatusText(_vm.selectedAdvance.status)))])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "detail-stat"
  }, [_c('strong', [_vm._v("ຄ້າງຊຳລະ:")]), _vm._v(" "), _c('p', {
    staticClass: "outstanding-text"
  }, [_vm._v("\n                " + _vm._s(_vm.formatCurrency(_vm.selectedAdvance.outstandingAmount)) + " " + _vm._s(_vm.selectedAdvance.currencyCode) + "\n              ")])])])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນທົ່ວໄປ (General Information)")]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-3 custom-divider"
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "detail-item"
  }, [_c('strong', [_vm._v("ກະຊວງ:")]), _vm._v(" " + _vm._s(_vm.selectedAdvance.ministry.ministryName) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('strong', [_vm._v("ລະຫັດກະຊວງ:")]), _vm._v(" " + _vm._s(_vm.selectedAdvance.ministry.ministryCode) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('strong', [_vm._v("ຈຸດປະສົງ:")]), _vm._v(" " + _vm._s(_vm.selectedAdvance.purpose) + "\n            ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "detail-item"
  }, [_c('strong', [_vm._v("ບັນຊີທະນາຄານ:")]), _vm._v(" " + _vm._s(_vm.selectedAdvance.bankAccount.accountName) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('strong', [_vm._v("ເລກບັນຊີ:")]), _vm._v(" " + _vm._s(_vm.selectedAdvance.bankAccount.accountNumber) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "detail-item"
  }, [_c('strong', [_vm._v("ທະນາຄານ:")]), _vm._v(" " + _vm._s(_vm.selectedAdvance.bankAccount.bankName) + "\n            ")])])], 1), _vm._v(" "), _vm.selectedAdvance.settlementLine && _vm.selectedAdvance.settlementLine.length > 0 ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ລາຍການຊຳລະ (Settlement Details)")]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-3 custom-divider"
  }), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "detail-table",
    attrs: {
      "headers": _vm.settlementHeaders,
      "items": _vm.selectedAdvance.settlementLine,
      "hide-default-footer": ""
    },
    scopedSlots: _vm._u([{
      key: "item.bookingDate",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "date-cell"
        }, [_vm._v(_vm._s(_vm.formatDate(item.bookingDate)))])];
      }
    }, {
      key: "item.amount",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "amount-cell"
        }, [_vm._v(_vm._s(_vm.formatCurrency(item.amount)))])];
      }
    }, {
      key: "item.method",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": "#01532B",
            "text-color": "white"
          }
        }, [_vm._v("\n                  " + _vm._s(item.method) + "\n                ")])];
      }
    }], null, false, 1055275594)
  })], 1)], 1) : _vm._e()], 1) : _vm._e()], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/report/MA/bankSummary/index.vue?vue&type=template&id=9cb5862a&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/report/MA/bankSummary/index.vue?vue&type=script&lang=js&
var bankSummaryvue_type_script_lang_js_ = __webpack_require__(658);

// CONCATENATED MODULE: ./pages/admin/report/MA/bankSummary/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_bankSummaryvue_type_script_lang_js_ = (bankSummaryvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/report/MA/bankSummary/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(992)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_bankSummaryvue_type_script_lang_js_,
  bankSummaryvue_type_template_id_9cb5862a_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "9cb5862a",
  "43856dc8"
  
)

/* harmony default export */ var bankSummary = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(440);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("1c8f4490", content, true)

/***/ }),

/***/ 440:
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
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

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'MoneyAdvancesReport',
  data() {
    return {
      loading: false,
      exporting: false,
      search: '',
      detailsDialog: false,
      selectedAdvance: null,
      // Updated filter data for date range
      filters: {
        fromDate: null,
        toDate: null,
        bankAccountId: null
      },
      // Validation rules
      rules: {
        required: value => !!value || 'ກະລຸນາເລືອກວັນທີ',
        dateRange: () => {
          if (!this.filters.fromDate || !this.filters.toDate) return true;
          return new Date(this.filters.fromDate) <= new Date(this.filters.toDate) || 'ວັນທີເລີ່ມຕົ້ນຕ້ອງນ້ອຍກວ່າວັນທີສິ້ນສຸດ';
        }
      },
      // Options data
      bankAccounts: [],
      // Report data
      reportData: [],
      summaryData: {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        totalRecords: 0,
        fullySettledCount: 0,
        partiallySettledCount: 0,
        unsettledCount: 0,
        overdueCount: 0,
        averageSettlementPercentage: "0.00"
      },
      // Updated table headers to match API response
      tableHeaders: [{
        text: 'ວັນທີຈ່າຍ',
        value: 'bookingDate',
        width: '100px'
      }, {
        text: 'ກະຊວງ',
        value: 'ministry',
        width: '180px'
      }, {
        text: 'ບັນຊີທະນາຄານ',
        value: 'bankAccount',
        width: '180px'
      }, {
        text: 'ສະກຸນເງິນ',
        value: 'currencyCode',
        width: '80px'
      }, {
        text: 'ຈຳນວນເງິນ',
        value: 'amount',
        width: '120px'
      }, {
        text: 'LCY',
        value: 'lcyEquivalent',
        width: '120px'
      }, {
        text: 'ຊຳລະແລ້ວ',
        value: 'settlementAmount',
        width: '120px'
      }, {
        text: 'ຄ້າງຊຳລະ',
        value: 'outstandingAmount',
        width: '120px'
      }, {
        text: 'ສະຖານະ',
        value: 'status',
        width: '100px'
      }, {
        text: 'ຊຳລະ %',
        value: 'settlementPercentage',
        width: '120px'
      }, {
        text: 'ຈັດການ',
        value: 'actions',
        sortable: false,
        width: '100px'
      }],
      settlementHeaders: [{
        text: 'ວັນທີຊຳລະ',
        value: 'bookingDate'
      }, {
        text: 'ຈຳນວນ',
        value: 'amount'
      }, {
        text: 'ວິທີການ',
        value: 'method'
      }, {
        text: 'ໝາຍເຫດ',
        value: 'notes'
      }]
    };
  },
  computed: {
    formattedFromDate() {
      return this.filters.fromDate ? this.formatDisplayDate(this.filters.fromDate) : '';
    },
    formattedToDate() {
      return this.filters.toDate ? this.formatDisplayDate(this.filters.toDate) : '';
    },
    maxDate() {
      return new Date().toISOString().substr(0, 10);
    },
    isDateRangeValid() {
      if (!this.filters.fromDate || !this.filters.toDate) return false;
      return new Date(this.filters.fromDate) <= new Date(this.filters.toDate);
    },
    daysBetween() {
      if (!this.filters.fromDate || !this.filters.toDate) return 0;
      const from = new Date(this.filters.fromDate);
      const to = new Date(this.filters.toDate);
      const timeDiff = to.getTime() - from.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
    }
  },
  async created() {
    await this.loadInitialData();
    this.setDefaultDateRange();
    this.applyFilters();
  },
  methods: {
    async loadInitialData() {
      try {
        const response = await this.$axios.get('/api/bank_account/find');
        this.bankAccounts = response.data.data || response.data;
      } catch (error) {
        console.error('Error loading bank accounts:', error);
        this.$toast.error('Error loading initial data');
      }
    },
    setDefaultDateRange() {
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      this.filters.fromDate = firstDayOfMonth.toISOString().substr(0, 10);
      this.filters.toDate = lastDayOfMonth.toISOString().substr(0, 10);
    },
    async applyFilters() {
      if (!this.filters.fromDate || !this.filters.toDate) {
        this.$toast.warning('ກະລຸນາເລືອກໄລຍະເວລາ');
        return;
      }
      if (!this.isDateRangeValid) {
        this.$toast.warning('ໄລຍະເວລາບໍ່ຖືກຕ້ອງ');
        return;
      }
      this.loading = true;
      try {
        const params = new URLSearchParams();
        params.append('fromDate', this.filters.fromDate);
        params.append('toDate', this.filters.toDate);
        if (this.filters.bankAccountId) {
          params.append('bankAccountId', this.filters.bankAccountId);
        }
        console.log('Fetching data with params:', params.toString());

        // Updated to use the correct API endpoint
        const response = await this.$axios.get(`/api/money-advances/report?${params}`);
        if (response.data && response.data.success && response.data.data) {
          this.reportData = response.data.data;
          this.summaryData = response.data.summary || this.getDefaultSummary();
          console.info(`Filtered data ${JSON.stringify(this.reportData)}`);
          console.log('Data loaded successfully:', this.reportData.length, 'records');
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error loading report data:', error);
        this.reportData = [];
        this.summaryData = this.getDefaultSummary();
        if (error.response) {
          var _error$response$data;
          const status = error.response.status;
          const message = ((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Server error';
          this.$toast.error(`Error ${status}: ${message}`);
        } else if (error.request) {
          this.$toast.error('Network error. Please check your connection.');
        } else {
          this.$toast.error('Error loading report data');
        }
      } finally {
        this.loading = false;
      }
    },
    resetFilters() {
      this.filters = {
        fromDate: null,
        toDate: null,
        bankAccountId: null
      };
      this.setDefaultDateRange();
      this.applyFilters();
    },
    getDefaultSummary() {
      return {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        totalRecords: 0,
        fullySettledCount: 0,
        partiallySettledCount: 0,
        unsettledCount: 0,
        overdueCount: 0,
        averageSettlementPercentage: "0.00"
      };
    },
    viewAdvanceDetails(advance) {
      this.selectedAdvance = advance;
      this.detailsDialog = true;
    },
    async exportToExcel() {
      this.exporting = true;
      try {
        const params = new URLSearchParams();
        Object.keys(this.filters).forEach(key => {
          if (this.filters[key]) {
            params.append(key, this.filters[key]);
          }
        });
        const response = await this.$axios.get(`/api/money-advances/report/export?${params}`, {
          responseType: 'blob'
        });
        const blob = new Blob([response.data]);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `money-advances-report-${this.filters.fromDate}-to-${this.filters.toDate}.xlsx`;
        link.click();
      } catch (error) {
        console.error('Error exporting report:', error);
        this.$toast.error('Error exporting report');
      } finally {
        this.exporting = false;
      }
    },
    printReport() {
      window.print();
    },
    formatDisplayDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    formatCurrency(amount) {
      if (!amount) return '0.00';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    },
    formatExchangeRate(rate) {
      if (!rate) return '1.0000';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
      }).format(rate);
    },
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-GB');
    },
    getCurrencyColor(currencyCode) {
      const colors = {
        'USD': '#01532B',
        'LAK': '#01532B',
        'THB': '#F59E0B',
        'EUR': '#8B5CF6',
        'CNY': '#EF4444'
      };
      return colors[currencyCode] || '#6B7280';
    },
    getStatusColor(status) {
      switch (status) {
        case 'settled':
          return '#28a745';
        case 'pending':
          return '#ffc107';
        case 'approved':
          return '#17a2b8';
        case 'rejected':
          return '#dc3545';
        default:
          return '#6c757d';
      }
    },
    getStatusText(status) {
      switch (status) {
        case 'settled':
          return 'ຊຳລະແລ້ວ';
        case 'pending':
          return 'ລໍຖ້າ';
        case 'approved':
          return 'ອະນຸມັດ';
        case 'rejected':
          return 'ປະຕິເສດ';
        default:
          return status;
      }
    },
    getProgressColor(percentage) {
      const percent = parseFloat(percentage);
      if (percent === 100) return '#28a745';
      if (percent >= 50) return '#ffc107';
      return '#dc3545';
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(336)["URLSearchParams"]))

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(993);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("cd631cfe", content, true, context)
};

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9cb5862a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(764);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9cb5862a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9cb5862a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9cb5862a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9cb5862a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".money-advances-report[data-v-9cb5862a]{padding:0}.report-header[data-v-9cb5862a]{align-items:center;background:linear-gradient(135deg,#01532b,#0d4f3c 50%,#1a5d4a);border-radius:8px;box-shadow:0 4px 12px rgba(1,83,43,.3);color:#fff;display:flex;justify-content:space-between;margin-bottom:24px;padding:20px}.title-section h1[data-v-9cb5862a]{font-size:28px;font-weight:600;margin:0}.title-section p[data-v-9cb5862a]{font-size:14px;margin:5px 0 0;opacity:.9}.action-buttons[data-v-9cb5862a]{display:flex;gap:12px}.filter-card[data-v-9cb5862a]{background:#fff;border-radius:8px}.filter-title[data-v-9cb5862a]{background:#01532b;color:#fff;font-weight:600}.custom-primary-bg[data-v-9cb5862a]{background-color:#01532b!important}.custom-secondary-btn[data-v-9cb5862a]{background-color:#6c757d!important;color:#fff!important;font-weight:500!important;text-transform:none!important}.filter-actions[data-v-9cb5862a]{display:flex;flex-direction:column;gap:8px}.date-range-alert[data-v-9cb5862a]{background-color:rgba(1,83,43,.1)!important;border-color:#01532b!important}.date-range-alert[data-v-9cb5862a],.date-range-alert[data-v-9cb5862a] .v-icon{color:#01532b!important}.bank-account-selection[data-v-9cb5862a]{display:flex;flex-direction:column}.bank-account-selection .bank-name[data-v-9cb5862a]{color:#01532b;font-size:14px;font-weight:600}.bank-account-selection small[data-v-9cb5862a]{color:#666;font-size:11px}.bank-account-item[data-v-9cb5862a]{padding:8px 0}.bank-account-item .bank-name[data-v-9cb5862a]{color:#01532b;font-size:14px;font-weight:600}.bank-account-item .bank-details[data-v-9cb5862a]{color:#666;font-size:12px;margin-top:2px}.summary-cards[data-v-9cb5862a]{margin-bottom:24px}.summary-card[data-v-9cb5862a]{border-top:3px solid #01532b;height:140px;overflow:hidden;position:relative}.summary-content[data-v-9cb5862a]{align-items:center;display:flex;height:100%}.summary-icon[data-v-9cb5862a]{color:#01532b;font-size:48px;margin-right:16px;opacity:.8}.summary-details h3[data-v-9cb5862a]{color:#01532b;font-size:16px;font-weight:600;margin:0}.summary-details p[data-v-9cb5862a]{color:#666;font-size:12px;margin:4px 0}.summary-details h2[data-v-9cb5862a]{color:#01532b;font-size:24px;font-weight:700;margin:8px 0 0}.summary-lcy[data-v-9cb5862a]{color:#01532b;font-size:11px;margin-top:4px!important;opacity:.8}.advance-card[data-v-9cb5862a]{background:linear-gradient(135deg,#01532b,#0d4f3c);color:#fff}.advance-card .summary-details h2[data-v-9cb5862a],.advance-card .summary-details h3[data-v-9cb5862a],.advance-card .summary-icon[data-v-9cb5862a],.advance-card .summary-lcy[data-v-9cb5862a]{color:#fff!important}.settlement-card[data-v-9cb5862a]{background:linear-gradient(135deg,#f0fdf4,#dcfce7)}.outstanding-card[data-v-9cb5862a]{background:linear-gradient(135deg,#fef2f2,#fecaca)}.records-card[data-v-9cb5862a]{background:linear-gradient(135deg,#fffbeb,#fef3c7)}.additional-summary[data-v-9cb5862a]{margin-bottom:24px}.stats-card[data-v-9cb5862a]{border-left:4px solid #01532b;height:100px}.stats-number[data-v-9cb5862a]{color:#01532b;font-size:24px;font-weight:700;margin:0}.stats-label[data-v-9cb5862a]{color:#6b7280;font-size:11px;line-height:1.2;margin:4px 0 0}.table-card[data-v-9cb5862a]{border-left:4px solid #01532b;margin-bottom:24px}.table-title[data-v-9cb5862a]{background:linear-gradient(90deg,#f8f9fa,#e9ecef);color:#01532b;font-weight:600}.search-field[data-v-9cb5862a]{max-width:300px}.report-table[data-v-9cb5862a]{background:#fff}.ministry-cell[data-v-9cb5862a]{display:flex;flex-direction:column}.ministry-name[data-v-9cb5862a]{color:#01532b;font-size:14px;font-weight:600}.ministry-code[data-v-9cb5862a]{background:#f8f9fa;border-radius:4px;color:#666;display:inline-block;font-family:monospace;font-size:11px;margin-top:4px;padding:2px 6px;width:-moz-fit-content;width:fit-content}.bank-account-cell[data-v-9cb5862a]{display:flex;flex-direction:column}.bank-account-name[data-v-9cb5862a]{color:#01532b;font-size:14px;font-weight:600}.bank-account-number[data-v-9cb5862a]{color:#666;font-family:monospace;font-size:11px}.bank-name[data-v-9cb5862a]{color:#999;font-size:12px;font-style:italic}.amount-breakdown[data-v-9cb5862a]{align-items:center;display:flex;flex-direction:column}.amount-cell[data-v-9cb5862a]{font-family:monospace;font-size:13px;font-weight:600}.exchange-rate[data-v-9cb5862a]{color:#666;font-size:10px;margin-top:2px}.lcy-amount[data-v-9cb5862a]{color:#01532b}.settlement-amount[data-v-9cb5862a]{color:#059669}.outstanding-amount[data-v-9cb5862a]{color:#dc3545}.settled-amount[data-v-9cb5862a]{color:#28a745}.progress-text[data-v-9cb5862a]{color:#fff;font-size:12px;font-weight:600;text-shadow:1px 1px 2px rgba(0,0,0,.5)}.dialog-title[data-v-9cb5862a]{background:linear-gradient(90deg,#01532b,#0d4f3c);color:#fff;font-weight:600}.section-title[data-v-9cb5862a]{color:#01532b;font-weight:600;margin-bottom:8px}.custom-divider[data-v-9cb5862a]{border-color:#01532b!important;border-width:2px!important}.detail-stat[data-v-9cb5862a]{background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #bbf7d0;border-radius:8px;padding:12px;text-align:center}.detail-stat strong[data-v-9cb5862a]{color:#01532b;display:block;font-size:14px;margin-bottom:8px}.detail-stat p[data-v-9cb5862a]{color:#01532b;font-family:monospace;font-size:18px;font-weight:600;margin:0}.detail-stat small[data-v-9cb5862a]{color:#666;display:block;font-size:11px;font-style:italic;margin-top:4px}.detail-item[data-v-9cb5862a]{font-size:14px;margin-bottom:12px}.detail-item strong[data-v-9cb5862a]{color:#01532b}.detail-table[data-v-9cb5862a]{border:1px solid #e5e7eb;border-radius:8px;margin-top:16px}.date-cell[data-v-9cb5862a]{font-family:monospace;font-size:13px}@media print{.action-buttons[data-v-9cb5862a],.filter-card[data-v-9cb5862a],.v-btn[data-v-9cb5862a]{display:none!important}.additional-summary[data-v-9cb5862a],.summary-cards[data-v-9cb5862a]{page-break-inside:avoid}}@media (max-width:768px){.report-header[data-v-9cb5862a]{gap:16px}.report-header[data-v-9cb5862a],.summary-content[data-v-9cb5862a]{flex-direction:column;text-align:center}.summary-icon[data-v-9cb5862a]{margin-bottom:8px;margin-right:0}.filter-actions[data-v-9cb5862a]{margin-top:16px}.filter-actions .v-btn[data-v-9cb5862a]{width:100%}.stats-card[data-v-9cb5862a]{height:80px}.stats-number[data-v-9cb5862a]{font-size:18px}.stats-label[data-v-9cb5862a]{font-size:10px}.amount-breakdown[data-v-9cb5862a]{font-size:12px}.detail-stat[data-v-9cb5862a]{padding:8px}.detail-stat p[data-v-9cb5862a]{font-size:14px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map