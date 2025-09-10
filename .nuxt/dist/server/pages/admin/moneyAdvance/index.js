exports.ids = [190,62,63,64,76,77,78,80,82];
exports.modules = {

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js + 16 modules
var VDatePicker = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvance/index.vue?vue&type=template&id=1b6ae2c6&scoped=true&

















var moneyAdvancevue_type_template_id_1b6ae2c6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "money-advance-container"
  }, [_c(VCard["a" /* default */], {
    staticClass: "header-card",
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "py-3"
  }, [_c('div', {
    staticClass: "header-content"
  }, [_c('h1', {
    staticClass: "header-title"
  }, [_vm._v("ອອກລາຍຈ່າຍ")]), _vm._v(" "), _c('div', {
    staticClass: "header-actions"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "small": "",
      "outlined": ""
    },
    on: {
      "click": _vm.openAuditReports
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-chart-line")]), _vm._v("\n            ລາຍງານ\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "small": ""
    },
    on: {
      "click": function ($event) {
        return _vm.openDialog();
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n            ລົງລາຍຈ່າຍ\n          ")], 1)], 1)])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"summary-grid mb-2\" data-v-1b6ae2c6>", "</div>", [_c(VCard["a" /* default */], {
    staticClass: "summary-card"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c('div', {
    staticClass: "summary-layout"
  }, [_c('div', {
    staticClass: "summary-icon total"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-cash-multiple")])], 1), _vm._v(" "), _c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-amount"
  }, [_vm._v(_vm._s(_vm.dashboard.counts.total))]), _vm._v(" "), _c('div', {
    staticClass: "summary-label"
  }, [_vm._v("ຈນ ລາຍຈ່າຍ")])])])])], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "summary-card pending"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c('div', {
    staticClass: "summary-layout"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "warning"
    }
  }, [_vm._v("mdi-clock-outline")])], 1), _vm._v(" "), _c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-amount"
  }, [_vm._v(_vm._s(_vm.dashboard.counts.pending))]), _vm._v(" "), _c('div', {
    staticClass: "summary-label"
  }, [_vm._v("ຄ້າງອະນຸມັດ")])])])])], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "summary-card approved"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c('div', {
    staticClass: "summary-layout"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-check-circle")])], 1), _vm._v(" "), _c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-amount"
  }, [_vm._v(_vm._s(_vm.dashboard.counts.approved))]), _vm._v(" "), _c('div', {
    staticClass: "summary-label"
  }, [_vm._v("ອະນຸມັດແລ້ວ")])])])])], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "summary-card settled"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c('div', {
    staticClass: "summary-layout"
  }, [_c('div', {
    staticClass: "summary-icon"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "info"
    }
  }, [_vm._v("mdi-cash-check")])], 1), _vm._v(" "), _c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-amount"
  }, [_vm._v(_vm._s(_vm.dashboard.counts.settled))]), _vm._v(" "), _c('div', {
    staticClass: "summary-label"
  }, [_vm._v("ຊຳລະແລ້ວ")])])])])], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "summary-card total-amount"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c('div', {
    staticClass: "summary-layout"
  }, [_c('div', {
    staticClass: "summary-icon total"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-calculator")])], 1), _vm._v(" "), _c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-amount"
  }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(_vm.dashboard.amounts.total)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "summary-label"
  }, [_vm._v("ລວມຍອດທັງໝົດ")])])])])], 1)], 2), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "filter-card mb-2",
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "py-2"
  }, [_c(VRow["a" /* default */], {
    staticClass: "filter-row",
    attrs: {
      "no-gutters": "",
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "px-1",
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VMenu["a" /* default */], {
    ref: "fromDateMenu",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "label": "ວັນທີ່ເລີ່ມຕົ້ນ",
            "hint": "DD/MM/YYYY",
            "dense": "",
            "outlined": "",
            "clearable": "",
            "hide-details": "auto",
            "prepend-inner-icon": "mdi-calendar"
          },
          on: {
            "click:clear": _vm.clearFromDate
          },
          model: {
            value: _vm.formattedFromDate,
            callback: function ($$v) {
              _vm.formattedFromDate = $$v;
            },
            expression: "formattedFromDate"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }]),
    model: {
      value: _vm.fromDateMenu,
      callback: function ($$v) {
        _vm.fromDateMenu = $$v;
      },
      expression: "fromDateMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": ""
    },
    on: {
      "input": _vm.setFromDate
    },
    model: {
      value: _vm.pickerFromDate,
      callback: function ($$v) {
        _vm.pickerFromDate = $$v;
      },
      expression: "pickerFromDate"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "px-1",
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VMenu["a" /* default */], {
    ref: "toDateMenu",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "label": "ວັນທີ່ສິ້ນສຸດ",
            "hint": "DD/MM/YYYY",
            "dense": "",
            "outlined": "",
            "clearable": "",
            "hide-details": "auto",
            "prepend-inner-icon": "mdi-calendar"
          },
          on: {
            "click:clear": _vm.clearToDate
          },
          model: {
            value: _vm.formattedToDate,
            callback: function ($$v) {
              _vm.formattedToDate = $$v;
            },
            expression: "formattedToDate"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }]),
    model: {
      value: _vm.toDateMenu,
      callback: function ($$v) {
        _vm.toDateMenu = $$v;
      },
      expression: "toDateMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": ""
    },
    on: {
      "input": _vm.setToDate
    },
    model: {
      value: _vm.pickerToDate,
      callback: function ($$v) {
        _vm.pickerToDate = $$v;
      },
      expression: "pickerToDate"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "px-1",
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "ສະຖານະ",
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto"
    },
    on: {
      "change": _vm.onFilterChange
    },
    model: {
      value: _vm.statusFilter,
      callback: function ($$v) {
        _vm.statusFilter = $$v;
      },
      expression: "statusFilter"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "px-1",
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.userOptions,
      "label": "ຜູ້ໃຊ້",
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto"
    },
    on: {
      "change": _vm.fetchData
    },
    model: {
      value: _vm.filters.makerId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "makerId", $$v);
      },
      expression: "filters.makerId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "px-1",
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.ministryOptions,
      "label": "ກະຊວງ",
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto"
    },
    on: {
      "change": _vm.fetchData
    },
    model: {
      value: _vm.filters.ministryId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "ministryId", $$v);
      },
      expression: "filters.ministryId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "px-1",
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c('div', {
    staticClass: "filter-actions"
  }, [_c(VTextField["a" /* default */], {
    staticStyle: {
      "margin-bottom": "4px"
    },
    attrs: {
      "label": "ຄົ້ນຫາ",
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-magnify"
    },
    on: {
      "input": _vm.debounceSearch
    },
    model: {
      value: _vm.searchTerm,
      callback: function ($$v) {
        _vm.searchTerm = $$v;
      },
      expression: "searchTerm"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "action-buttons"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "x-small": "",
      "loading": _vm.loading
    },
    on: {
      "click": _vm.applyFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-filter")])], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "outlined": "",
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-refresh")])], 1)], 1)], 1)])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "table-card",
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2 px-3"
  }, [_c('span', {
    staticClass: "table-title"
  }, [_vm._v("ລາຍການ (" + _vm._s(_vm.advances.length) + ")")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "table-controls"
  }, [_c(VSelect["a" /* default */], {
    staticStyle: {
      "max-width": "70px"
    },
    attrs: {
      "items": _vm.perPageOptions,
      "label": "ແຖວ",
      "dense": "",
      "outlined": "",
      "hide-details": ""
    },
    on: {
      "input": function ($event) {
        return _vm.changePage(1);
      }
    },
    model: {
      value: _vm.pagination.itemsPerPage,
      callback: function ($$v) {
        _vm.$set(_vm.pagination, "itemsPerPage", $$v);
      },
      expression: "pagination.itemsPerPage"
    }
  })], 1)], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "compact-table",
    attrs: {
      "headers": _vm.compactHeaders,
      "items": _vm.advances,
      "page": _vm.pagination.currentPage,
      "items-per-page": _vm.pagination.itemsPerPage,
      "server-items-length": _vm.pagination.totalItems,
      "dense": "",
      "hide-default-footer": "",
      "loading": _vm.loading,
      "loading-text": "ກຳລັງໂຫຼດຂໍ້ມູນ..."
    },
    on: {
      "update:page": function ($event) {
        return _vm.$set(_vm.pagination, "currentPage", $event);
      }
    },
    scopedSlots: _vm._u([{
      key: "item.id",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "id-text"
        }, [_vm._v(_vm._s(item.id))])];
      }
    }, {
      key: "item.maker",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "maker-name"
        }, [_vm._v(_vm._s(item.maker ? item.maker.cus_name : 'N/A'))])];
      }
    }, {
      key: "item.ministry",
      fn: function ({
        item
      }) {
        return [item.ministry ? _c('div', {
          staticClass: "ministry-compact"
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "color": "info",
            "x-small": "",
            "outlined": ""
          }
        }, [_vm._v("\n            " + _vm._s(item.ministry.ministryCode || item.ministry.name) + "\n          ")])], 1) : _c('span', {
          staticClass: "no-data"
        }, [_vm._v("-")])];
      }
    }, {
      key: "item.amount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "amount-column"
        }, [_c('span', {
          staticClass: "amount-value"
        }, [_vm._v(_vm._s(_vm.formatCurrency(item.amount, item.currency.code)))]), _vm._v(" "), item.currency ? _c('span', {
          staticClass: "currency-code"
        }, [_vm._v(_vm._s(item.currency.code))]) : _vm._e()])];
      }
    }, {
      key: "item.purpose",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "purpose-text",
          attrs: {
            "title": item.purpose
          }
        }, [_vm._v("\n          " + _vm._s(_vm.truncateText(item.purpose, 20)) + "\n        ")])];
      }
    }, {
      key: "item.bankAccount",
      fn: function ({
        item
      }) {
        return [item.bankAccount ? _c('div', {
          staticClass: "bank-compact"
        }, [_c('div', {
          staticClass: "bank-name"
        }, [_vm._v(_vm._s(item.bankAccount.bankName))]), _vm._v(" "), _c('div', {
          staticClass: "account-number"
        }, [_vm._v("\n            " + _vm._s(item.bankAccount.accountNumber) + "\n          ")])]) : _c('span', {
          staticClass: "no-data"
        }, [_vm._v("-")])];
      }
    }, {
      key: "item.status",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getStatusColor(item.status),
            "x-small": "",
            "outlined": ""
          }
        }, [_vm._v("\n          " + _vm._s(_vm.getStatusInLao(item.status)) + "\n        ")])];
      }
    }, {
      key: "item.dueDate",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "date-compact",
          class: {
            overdue: _vm.isOverdue(item.dueDate)
          }
        }, [_vm._v("\n          " + _vm._s(_vm.formatCompactDate(item.dueDate)) + "\n        ")])];
      }
    }, {
      key: "item.bookingDate",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "date-compact"
        }, [_vm._v(_vm._s(_vm.formatCompactDate(item.bookingDate)))])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "action-buttons-table"
        }, [_c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "x-small": "",
            "title": "ເບິ່ງລາຍລະອຽດ"
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
            "icon": "",
            "x-small": "",
            "title": "ແກ້ໄຂ"
          },
          on: {
            "click": function ($event) {
              return _vm.openDialog(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), item.status === 'pending' ? _c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "x-small": "",
            "color": "success",
            "title": "ອະນຸມັດ"
          },
          on: {
            "click": function ($event) {
              return _vm.approveAdvance(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-check")])], 1) : _vm._e(), _vm._v(" "), item.status === 'approved' ? _c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "x-small": "",
            "color": "success",
            "title": "ສ້າງການຊຳລະ"
          },
          on: {
            "click": function ($event) {
              return _vm.createSettlement(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-cash-register")])], 1) : _vm._e(), _vm._v(" "), _c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "x-small": "",
            "color": "error",
            "title": "ພິມ"
          },
          on: {
            "click": function ($event) {
              return _vm.printAdvanceDetails(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-printer")])], 1)], 1)];
      }
    }])
  }), _vm._v(" "), _c('div', {
    staticClass: "compact-pagination"
  }, [_c('div', {
    staticClass: "pagination-info"
  }, [_vm._v("\n        " + _vm._s(_vm.paginationInfo.start) + "-" + _vm._s(_vm.paginationInfo.end) + " ຈາກ\n        " + _vm._s(_vm.pagination.totalItems) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "pagination-controls"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "disabled": _vm.pagination.currentPage === 1
    },
    on: {
      "click": function ($event) {
        return _vm.changePage(_vm.pagination.currentPage - 1);
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-chevron-left")])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-numbers"
  }, _vm._l(_vm.paginationPages, function (page) {
    return _c(VBtn["a" /* default */], {
      key: page,
      attrs: {
        "color": page === _vm.pagination.currentPage ? 'primary' : '',
        "outlined": page !== _vm.pagination.currentPage,
        "x-small": "",
        "min-width": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.changePage(page);
        }
      }
    }, [_vm._v("\n            " + _vm._s(page) + "\n          ")]);
  }), 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "disabled": _vm.pagination.currentPage === _vm.pagination.totalPages
    },
    on: {
      "click": function ($event) {
        return _vm.changePage(_vm.pagination.currentPage + 1);
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-chevron-right")])], 1)], 1)])], 1), _vm._ssrNode(" "), !_vm.loading && _vm.advances.length === 0 ? _c(VCard["a" /* default */], {
    staticClass: "no-data-card",
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center py-8"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-inbox")]), _vm._v(" "), _c('div', {
    staticClass: "mt-3 text-h6 grey--text"
  }, [_vm._v("ບໍ່ມີຂໍ້ມູນ")]), _vm._v(" "), _c('div', {
    staticClass: "grey--text"
  }, [_vm._v("\n        ບໍ່ພົບລາຍການລາຍຈ່າຍທີ່ຕົງກັບເງື່ອນໄຂການຄົ້ນຫາ\n      ")])], 1)], 1) : _vm._e(), _vm._ssrNode(" "), _c('money-advance-dialog', {
    key: _vm.randomKeyMaintenanceDialog,
    attrs: {
      "show": _vm.showDialog,
      "is-edit": _vm.isEdit,
      "form-data": _vm.form,
      "users": _vm.users,
      "currencies": _vm.currencies,
      "bank-accounts": _vm.bankAccounts,
      "ministries": _vm.ministries,
      "form-loading": _vm.formLoading,
      "saving": _vm.saving
    },
    on: {
      "close": _vm.closeDialog,
      "print": function ($event) {
        _vm.printAdvanceDetails(_vm.advances.find(advance => advance.id == _vm.form.id));
      },
      "save": _vm.saveAdvance,
      "currency-changed": _vm.updateSelectedCurrency,
      "bank-account-changed": _vm.updateSelectedBankAccount,
      "ministry-changed": _vm.updateSelectedMinistry,
      "validation-error": _vm.showToast
    }
  }), _vm._ssrNode(" "), _c('money-advance-detail-dialog', {
    attrs: {
      "show": _vm.showDetailDialog,
      "details": _vm.advanceDetails,
      "loading": _vm.detailLoading,
      "status-labels": _vm.statusLabels
    },
    on: {
      "close": _vm.closeDetailDialog,
      "print": _vm.printAdvanceDetails,
      "download": _vm.downloadAdvanceDetails,
      "retry-load": _vm.retryLoadDetails,
      "edit": _vm.handleEditFromDetail,
      "approve": _vm.handleApproveFromDetail,
      "create-settlement": _vm.handleCreateSettlement
    }
  }), _vm._ssrNode(" "), _vm.selectedRecordForAudit && _vm.selectedRecordForAudit.id ? _c('audit-trail-dialog', {
    attrs: {
      "show": _vm.showAuditDialog,
      "record-id": _vm.selectedRecordForAudit.id,
      "record-data": _vm.selectedRecordForAudit,
      "can-restore": _vm.canRestoreRecord
    },
    on: {
      "close": _vm.closeAuditDialog,
      "compare": _vm.handleVersionComparison,
      "restore": _vm.handleVersionRestore,
      "view-full-changes": _vm.handleViewFullChanges,
      "success": _vm.showToast,
      "error": msg => _vm.showToast(msg, 'error')
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.selectedRecordForComparison && _vm.selectedRecordForComparison.id ? _c('version-comparison-dialog', {
    attrs: {
      "show": _vm.showComparisonDialog,
      "record-id": _vm.selectedRecordForComparison.id,
      "record-data": _vm.selectedRecordForComparison,
      "initial-comparison": _vm.comparisonData,
      "can-restore": _vm.canRestoreRecord
    },
    on: {
      "close": _vm.closeComparisonDialog,
      "restore": _vm.handleVersionRestore,
      "success": _vm.showToast,
      "error": msg => _vm.showToast(msg, 'error')
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('audit-reports-dialog', {
    attrs: {
      "show": _vm.showAuditReportsDialog
    },
    on: {
      "close": _vm.closeAuditReportsDialog,
      "success": _vm.showToast,
      "error": msg => _vm.showToast(msg, 'error')
    }
  }), _vm._ssrNode(" "), _vm.showPrintVoucher && _vm.advanceDetails ? _c('VoucherPrintComponent', {
    key: _vm.advanceDetails.id,
    attrs: {
      "voucher-data": _vm.advanceDetails
    },
    on: {
      "close": _vm.closePrintVoucher
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('SettlementDialog', {
    attrs: {
      "visible": _vm.showSettlementDialog,
      "settlement": _vm.settlementData,
      "outstanding-invoices": [],
      "currencies": _vm.currencies,
      "bank-accounts": _vm.bankAccounts,
      "ministries": _vm.ministries,
      "chart-accounts": _vm.chartAccounts,
      "users": _vm.users
    },
    on: {
      "close": _vm.closeSettlementDialog,
      "save": _vm.saveSettlement
    }
  }), _vm._ssrNode(" "), _c(VOverlay["a" /* default */], {
    attrs: {
      "value": _vm.loading
    }
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "size": "64",
      "color": "primary"
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/moneyAdvance/index.vue?vue&type=template&id=1b6ae2c6&scoped=true&

// EXTERNAL MODULE: ./components/MA/paymentDialog/index.vue + 4 modules
var paymentDialog = __webpack_require__(850);

// EXTERNAL MODULE: ./components/MA/paymentDetailDialog/index.vue + 4 modules
var paymentDetailDialog = __webpack_require__(851);

// EXTERNAL MODULE: ./components/MA/paymentVoucher/index.vue + 4 modules
var paymentVoucher = __webpack_require__(589);

// EXTERNAL MODULE: ./components/MA/paymentAuditDialog/index.vue + 4 modules
var paymentAuditDialog = __webpack_require__(852);

// EXTERNAL MODULE: ./components/MA/paymentCompareDialog/index.vue + 4 modules
var paymentCompareDialog = __webpack_require__(853);

// EXTERNAL MODULE: ./components/MA/paymentAuditReportDialog/index.vue + 4 modules
var paymentAuditReportDialog = __webpack_require__(854);

// EXTERNAL MODULE: ./components/MA/settlementDialog/index.vue + 4 modules
var settlementDialog = __webpack_require__(523);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvance/index.vue?vue&type=script&lang=js&
// Import all the existing components








/* harmony default export */ var moneyAdvancevue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceManagement',
  components: {
    MoneyAdvanceDialog: paymentDialog["default"],
    MoneyAdvanceDetailDialog: paymentDetailDialog["default"],
    VoucherPrintComponent: paymentVoucher["default"],
    AuditTrailDialog: paymentAuditDialog["default"],
    VersionComparisonDialog: paymentCompareDialog["default"],
    AuditReportsDialog: paymentAuditReportDialog["default"],
    SettlementDialog: settlementDialog["default"]
  },
  middleware: 'auths',
  data() {
    return {
      // Date picker state
      fromDateMenu: false,
      toDateMenu: false,
      pickerFromDate: null,
      pickerToDate: null,
      formattedFromDate: null,
      formattedToDate: null,
      // Filter and search state
      statusFilter: '',
      searchTerm: '',
      searchTimeout: null,
      // Status configuration
      statusLabels: {
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ',
        cancelled: 'ຍົກເລີກ'
      },
      // Data arrays
      advances: [],
      users: [],
      currencies: [],
      ministries: [],
      bankAccounts: [],
      chartAccounts: [],
      // Dashboard data
      dashboard: {
        counts: {
          total: 0,
          pending: 0,
          approved: 0,
          settled: 0
        },
        amounts: {
          total: 0,
          pending: 0
        }
      },
      // Pagination
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 25
      },
      // Filters
      filters: {
        status: '',
        makerId: '',
        ministryId: '',
        fromDate: '',
        toDate: ''
      },
      // Loading states
      loading: false,
      saving: false,
      formLoading: false,
      detailLoading: false,
      // Dialog states
      showDialog: false,
      randomKeyMaintenanceDialog: 1,
      showDetailDialog: false,
      showPrintVoucher: false,
      showSettlementDialog: false,
      showAuditDialog: false,
      showComparisonDialog: false,
      showAuditReportsDialog: false,
      // Selected data
      selectedAdvance: null,
      advanceDetails: null,
      settlementData: null,
      selectedAdvanceForSettlement: null,
      selectedRecordForAudit: null,
      selectedRecordForComparison: null,
      comparisonData: null,
      // Form state
      isEdit: false,
      canRestoreRecord: false,
      form: {
        id: null,
        amount: '',
        method: 'cash',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        reason: '',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: ''
      }
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    // Compact table headers
    compactHeaders() {
      return [{
        text: 'ID',
        value: 'id',
        width: '60px',
        sortable: true
      }, {
        text: 'ຜູ້ລົງ',
        value: 'maker',
        width: '100px',
        sortable: true
      }, {
        text: 'ກົມ',
        value: 'ministry',
        width: '80px',
        sortable: false
      }, {
        text: 'ຈຳນວນ',
        value: 'amount',
        width: '100px',
        sortable: true
      }, {
        text: 'ຈຸດປະສົງ',
        value: 'purpose',
        width: '150px',
        sortable: true
      }, {
        text: 'ບັນຊີ',
        value: 'bankAccount',
        width: '120px',
        sortable: false
      }, {
        text: 'ສະຖານະ',
        value: 'status',
        width: '80px',
        sortable: true
      }, {
        text: 'ຄົບກຳໜົດ',
        value: 'dueDate',
        width: '80px',
        sortable: true
      }, {
        text: 'ວັນທີ',
        value: 'bookingDate',
        width: '80px',
        sortable: true
      }, {
        text: '',
        value: 'actions',
        width: '120px',
        sortable: false
      }];
    },
    // Filter options
    statusOptions() {
      return [{
        text: 'ທຸກສະຖານະ',
        value: ''
      }, {
        text: 'ຄ້າງອະນຸມັດ',
        value: 'pending'
      }, {
        text: 'ອະນຸມັດແລ້ວ',
        value: 'approved'
      }, {
        text: 'ຊຳລະແລ້ວ',
        value: 'settled'
      }];
    },
    userOptions() {
      return [{
        text: 'ທຸກຜູ້ໃຊ້',
        value: ''
      }, ...this.users.map(user => ({
        text: user.cus_name,
        value: user.id
      }))];
    },
    ministryOptions() {
      return [{
        text: 'ທຸກກະຊວງ',
        value: ''
      }, ...this.ministries.map(ministry => ({
        text: `${ministry.ministryCode} - ${ministry.ministryName}`,
        value: ministry.id
      }))];
    },
    perPageOptions() {
      return [10, 25, 50, 100];
    },
    paginationPages() {
      const pages = [];
      const start = Math.max(1, this.pagination.currentPage - 2);
      const end = Math.min(this.pagination.totalPages, this.pagination.currentPage + 2);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage + 1;
      const end = Math.min(start + this.pagination.itemsPerPage - 1, this.pagination.totalItems);
      return {
        start: this.pagination.totalItems > 0 ? start : 0,
        end,
        total: this.pagination.totalItems
      };
    }
  },
  async mounted() {
    await this.loadInitialData();
    this.canRestoreRecord = this.checkRestorePermissions();
  },
  methods: {
    // Date formatting and handling methods
    formatDate(date) {
      if (!date) return null;
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
    setFromDate(val) {
      this.formattedFromDate = this.formatDate(val);
      this.pickerFromDate = val;
      this.filters.fromDate = val;
      this.fromDateMenu = false;
    },
    setToDate(val) {
      this.formattedToDate = this.formatDate(val);
      this.pickerToDate = val;
      this.filters.toDate = val;
      this.toDateMenu = false;
    },
    clearFromDate() {
      this.formattedFromDate = null;
      this.pickerFromDate = null;
      this.filters.fromDate = '';
    },
    clearToDate() {
      this.formattedToDate = null;
      this.pickerToDate = null;
      this.filters.toDate = '';
    },
    formatCompactDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      });
    },
    // Utility methods
    truncateText(text, length = 20) {
      if (!text) return 'N/A';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    getStatusColor(status) {
      const colors = {
        pending: 'warning',
        approved: 'success',
        settled: 'info',
        rejected: 'error',
        cancelled: 'grey'
      };
      return colors[status] || 'grey';
    },
    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase();
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    },
    checkRestorePermissions() {
      var _this$user, _this$user2, _this$user2$permissio;
      return ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.role) === 'admin' || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : (_this$user2$permissio = _this$user2.permissions) === null || _this$user2$permissio === void 0 ? void 0 : _this$user2$permissio.includes('restore_records'));
    },
    // Data loading methods (keeping existing logic)
    async loadInitialData() {
      await Promise.all([this.fetchData(), this.fetchDashboard(), this.fetchUsers(), this.fetchCurrencies(), this.fetchMinistry(), this.fetchBankAccounts(), this.fetchChartAccounts()]);
    },
    async fetchData() {
      this.loading = true;
      try {
        const params = {
          page: this.pagination.currentPage,
          limit: this.pagination.itemsPerPage,
          ...this.filters
        };
        if (this.statusFilter) {
          params.status = this.statusFilter;
        }
        if (this.searchTerm) {
          params.search = this.searchTerm;
        }
        const {
          data
        } = await this.$axios.get('/api/money-advances', {
          params
        });
        this.advances = data.data.advances;
        this.pagination = data.data.pagination;
      } catch (error) {
        this.showToast('Error fetching money advances', 'error');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async fetchDashboard() {
      try {
        const params = {};
        if (this.filters.makerId) params.makerId = this.filters.makerId;
        if (this.filters.ministryId) params.ministryId = this.filters.ministryId;
        if (this.filters.fromDate) params.fromDate = this.filters.fromDate;
        if (this.filters.toDate) params.toDate = this.filters.toDate;
        const {
          data
        } = await this.$axios.get('/api/money-advances/dashboard', {
          params
        });
        this.dashboard = data.data;
      } catch (error) {
        console.error('Error fetching dashboard:', error);
      }
    },
    async fetchUsers() {
      try {
        const {
          data
        } = await this.$axios.get('/api/user/find');
        if (data && data.data) {
          this.users = Array.isArray(data.data) ? data.data : [];
        } else if (Array.isArray(data)) {
          this.users = data;
        } else {
          this.users = [];
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        this.users = [];
        this.showToast('Failed to load users', 'error');
      }
    },
    async fetchCurrencies() {
      try {
        const {
          data
        } = await this.$axios.get('/api/currency/find');
        if (data && data.data) {
          this.currencies = Array.isArray(data.data) ? data.data : [];
        } else if (Array.isArray(data)) {
          this.currencies = data;
        } else {
          this.currencies = [];
        }
      } catch (error) {
        console.error('Error fetching currencies:', error);
        this.currencies = [];
        this.showToast('Failed to load currencies', 'error');
      }
    },
    async fetchMinistry() {
      try {
        const response = await this.$axios.get('/api/ministries');
        if (response.data && response.data.success) {
          this.ministries = response.data.data || [];
        } else {
          this.ministries = [];
        }
      } catch (error) {
        console.error('Error fetching ministries:', error);
        this.ministries = [];
        this.showToast('Failed to load ministries', 'error');
      }
    },
    async fetchBankAccounts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/bank_account/find');
        if (data && data.data) {
          this.bankAccounts = Array.isArray(data.data) ? data.data : [];
        } else if (Array.isArray(data)) {
          this.bankAccounts = data;
        } else {
          this.bankAccounts = [];
        }
        this.bankAccounts = this.bankAccounts.filter(account => account.isActive);
      } catch (error) {
        console.error('Error fetching bank accounts:', error);
        this.bankAccounts = [];
      }
    },
    async fetchChartAccounts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/accountChart/find');
        if (data && data.data) {
          this.chartAccounts = Array.isArray(data.data) ? data.data : [];
        } else if (Array.isArray(data)) {
          this.chartAccounts = data;
        } else {
          this.chartAccounts = [];
        }
      } catch (error) {
        console.error('Error fetching chart accounts:', error);
        this.chartAccounts = [];
      }
    },
    // Filter and search methods
    onFilterChange() {
      this.filters.status = this.statusFilter;
      this.pagination.currentPage = 1;
      this.fetchData();
      this.fetchDashboard();
    },
    applyFilters() {
      this.pagination.currentPage = 1;
      this.fetchData();
      this.fetchDashboard();
    },
    resetFilters() {
      this.filters = {
        status: '',
        makerId: '',
        ministryId: '',
        fromDate: '',
        toDate: ''
      };
      this.searchTerm = '';
      this.statusFilter = '';
      this.clearFromDate();
      this.clearToDate();
      this.pagination.currentPage = 1;
      this.fetchData();
      this.fetchDashboard();
    },
    debounceSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.pagination.currentPage = 1;
        this.fetchData();
      }, 500);
    },
    // Keep all existing dialog and CRUD methods
    async openDialog(advance = null) {
      this.isEdit = !!advance;
      this.showDialog = true;
      this.randomKeyMaintenanceDialog = `dialog-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      if (this.users.length === 0 || this.currencies.length === 0 || this.ministries.length === 0) {
        this.formLoading = true;
        await Promise.all([this.users.length === 0 ? this.fetchUsers() : Promise.resolve(), this.currencies.length === 0 ? this.fetchCurrencies() : Promise.resolve(), this.ministries.length === 0 ? this.fetchMinistry() : Promise.resolve(), this.bankAccounts.length === 0 ? this.fetchBankAccounts() : Promise.resolve()]);
        this.formLoading = false;
      }
      if (advance) {
        this.form = {
          id: advance.id,
          amount: advance.amount,
          method: advance.method,
          purpose: advance.purpose || '',
          note: advance.note || '',
          makerId: advance.makerId,
          currencyId: advance.currencyId,
          dueDate: advance.dueDate ? advance.dueDate.split('T')[0] : '',
          bankAccountId: advance.bankAccountId || '',
          ministryId: advance.ministryId || '',
          bookingDate: advance.bookingDate || '',
          externalBookingDate: advance.externalBookingDate || '',
          exchangeRate: advance.exchangeRate || '',
          reason: '',
          externalRef: advance.externalRef || '',
          externalRefNo: advance.externalRefNo || '',
          chequeNo: advance.chequeNo || '',
          receiveName: advance.receiveName || '',
          receiveIDNO: advance.receiveIDNO || ''
        };
      } else {
        this.resetForm();
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'USD') || this.currencies[0];
          this.form.currencyId = defaultCurrency.id;
        }
      }
    },
    closeDialog() {
      this.showDialog = false;
      this.resetForm();
    },
    resetForm() {
      const today = new Date().toISOString().split('T')[0];
      this.form = {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: this.user.id,
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        exchangeRate: 1,
        ministryId: '',
        bookingDate: today,
        reason: '',
        method: 'cash',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: ''
      };
      this.isEdit = false;
    },
    async saveAdvance(formData) {
      this.saving = true;
      try {
        var _this$user3;
        const auditContext = {
          reason: formData.reason || (this.isEdit ? 'Updated record' : 'Created new record'),
          userId: (_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.id
        };
        if (this.isEdit && formData.id) {
          formData.updateUserId = this.user.id;
          await this.$axios.put(`/api/money-advances/${formData.id}`, {
            ...formData,
            ...auditContext
          });
          this.showToast('Money advance updated successfully', 'success');
        } else {
          const response = await this.$axios.post('/api/money-advances', {
            ...formData,
            ...auditContext
          });
          const newRecord = response.data.data;
          this.form = {
            id: newRecord.id,
            amount: newRecord.amount,
            method: newRecord.method || 'cash',
            purpose: newRecord.purpose || '',
            note: newRecord.note || '',
            makerId: newRecord.makerId,
            currencyId: newRecord.currencyId,
            dueDate: newRecord.dueDate ? newRecord.dueDate.split('T')[0] : '',
            bankAccountId: newRecord.bankAccountId || '',
            ministryId: newRecord.ministryId || '',
            bookingDate: newRecord.bookingDate || '',
            exchangeRate: newRecord.exchangeRate || '',
            reason: '',
            externalRef: newRecord.externalRef || '',
            externalRefNo: newRecord.externalRefNo || '',
            chequeNo: newRecord.chequeNo || '',
            receiveName: newRecord.receiveName || '',
            receiveIDNO: newRecord.receiveIDNO || ''
          };
          this.isEdit = true;
          this.$nextTick(() => {
            this.randomKeyMaintenanceDialog = `dialog-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
          });
          this.showToast('Money advance created successfully', 'success');
        }
        await this.fetchData();
        await this.fetchDashboard();
      } catch (error) {
        var _error$response, _error$response$data;
        const message = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Error saving money advance';
        this.showToast(message, 'error');
        console.error('Save error:', error);
      } finally {
        this.saving = false;
      }
    },
    async approveAdvance(advance) {
      try {
        const result = await Object(common["i" /* swalConfirm */])(this.$swal, 'ຢືນຢັນ ການອະນຸມັດ', `ທ່ານແນ່ໃຈທີ່ຈະອະນຸມັດລາຍການນີ້ແມ່ນບໍ່ ${this.formatCurrency(advance.amount)}?`, 'question', 'ບໍ່', 'ຕົກລົງ');
        if (result.isConfirmed) {
          await this.$axios.put(`/api/money-advances/${advance.id}/approve`, {
            checkerId: this.user.id,
            reason: 'Approved by manager'
          });
          this.showToast('Money advance approved successfully', 'success');
          await this.fetchData();
          await this.fetchDashboard();
        }
      } catch (error) {
        console.error('Error approving:', error);
        this.showToast('Error approving money advance', 'error');
      }
    },
    // Keep all other existing methods (viewDetails, createSettlement, etc.)
    async viewDetails(advance) {
      this.selectedAdvance = advance;
      this.showDetailDialog = true;
      try {
        this.detailLoading = true;
        const {
          data
        } = await this.$axios.get(`/api/money-advances/${advance.id}`);
        this.advanceDetails = data.data;
      } catch (error) {
        console.error('Error fetching advance details:', error);
        this.showToast('Error loading advance details', 'error');
      } finally {
        this.detailLoading = false;
      }
    },
    closeDetailDialog() {
      this.showDetailDialog = false;
      this.selectedAdvance = null;
      this.advanceDetails = null;
    },
    async createSettlement(advance) {
      try {
        this.selectedAdvanceForSettlement = advance;
        const settlementDate = new Date().toISOString().split('T')[0];
        this.settlementData = {
          id: null,
          amount: advance.amount,
          currencyId: advance.currencyId,
          userId: advance.makerId,
          ministryId: advance.ministryId || '',
          bankAccountId: advance.bankAccountId || '',
          chartAccountId: '',
          method: '',
          settlementDate: settlementDate,
          bookingDate: settlementDate,
          notes: `ຊຳລະຄືນ ຈາກ ລາຍຈ່າຍເລກທີ #${advance.id} - ${advance.purpose || 'ບໍ່ໄດ້ລະບຸເນື້ອໃນ'}`,
          moneyAdvanceId: advance.id,
          linkToAdvance: 'true'
        };
        this.showSettlementDialog = true;
      } catch (error) {
        console.error('Error preparing settlement:', error);
        this.showToast('Error preparing settlement', 'error');
      }
    },
    closeSettlementDialog() {
      this.showSettlementDialog = false;
      this.settlementData = null;
      this.selectedAdvanceForSettlement = null;
    },
    async saveSettlement(settlementData) {
      try {
        var _this$selectedAdvance, _this$user4;
        const auditContext = {
          reason: `Settlement created for Money Advance #${(_this$selectedAdvance = this.selectedAdvanceForSettlement) === null || _this$selectedAdvance === void 0 ? void 0 : _this$selectedAdvance.id}`,
          userId: (_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.id
        };
        const completeSettlementData = {
          ...settlementData,
          bookingDate: settlementData.bookingDate || settlementData.settlementDate,
          ...auditContext
        };
        const response = await this.$axios.post('/api/settlements', completeSettlementData);
        if (response.data && response.data.success) {
          this.showToast('Settlement created successfully', 'success');
          this.closeSettlementDialog();
          await this.fetchData();
          await this.fetchDashboard();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Failed to create settlement');
        }
      } catch (error) {
        var _error$response2, _error$response2$data;
        console.error('Error saving settlement:', error);
        const message = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || 'Error creating settlement';
        this.showToast(message, 'error');
      }
    },
    printAdvanceDetails(payment) {
      this.showPrintVoucher = false;
      this.$nextTick(() => {
        this.advanceDetails = payment;
        this.showPrintVoucher = true;
      });
    },
    closePrintVoucher() {
      this.showPrintVoucher = false;
      setTimeout(() => {
        this.advanceDetails = null;
      }, 100);
    },
    // Audit methods (keeping existing)
    viewAuditTrail(advance) {
      this.selectedRecordForAudit = advance;
      this.showAuditDialog = true;
    },
    closeAuditDialog() {
      this.showAuditDialog = false;
      setTimeout(() => {
        this.selectedRecordForAudit = null;
      }, 300);
    },
    handleVersionComparison(comparisonData) {
      this.selectedRecordForComparison = this.selectedRecordForAudit;
      this.comparisonData = comparisonData;
      this.showAuditDialog = false;
      this.showComparisonDialog = true;
    },
    closeComparisonDialog() {
      this.showComparisonDialog = false;
      setTimeout(() => {
        this.selectedRecordForComparison = null;
        this.comparisonData = null;
      }, 300);
    },
    async handleVersionRestore(versionData) {
      try {
        const result = await Object(common["i" /* swalConfirm */])(this.$swal, 'ຢືນຢັນການກັບຄືນ', `ທ່ານແນ່ໃຈທີ່ຈະກັບຄືນໄປຫາເວີຊັ່ນນີ້ບໍ່?`, 'question', 'ຍົກເລີກ', 'ກັບຄືນ');
        if (result.isConfirmed) {
          var _this$selectedRecordF, _this$selectedRecordF2;
          const recordId = ((_this$selectedRecordF = this.selectedRecordForAudit) === null || _this$selectedRecordF === void 0 ? void 0 : _this$selectedRecordF.id) || ((_this$selectedRecordF2 = this.selectedRecordForComparison) === null || _this$selectedRecordF2 === void 0 ? void 0 : _this$selectedRecordF2.id);
          const {
            data
          } = await this.$axios.post(`/api/money-advances/${recordId}/restore`, {
            targetVersion: versionData.version,
            reason: 'Restored via audit trail'
          });
          if (data.success) {
            this.showToast('ກັບຄືນເວີຊັ່ນສຳເລັດ', 'success');
            this.closeAuditDialog();
            this.closeComparisonDialog();
            await this.fetchData();
          } else {
            throw new Error(data.message || 'Restore failed');
          }
        }
      } catch (error) {
        console.error('Error restoring version:', error);
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການກັບຄືນ', 'error');
      }
    },
    handleViewFullChanges(auditEntry) {
      console.log('View full changes for:', auditEntry);
      this.showToast('ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ', 'info');
    },
    openAuditReports() {
      this.showAuditReportsDialog = true;
    },
    closeAuditReportsDialog() {
      this.showAuditReportsDialog = false;
    },
    // Detail dialog handlers
    downloadAdvanceDetails() {
      const details = this.formatAdvanceForDownload();
      const blob = new Blob([details], {
        type: 'text/plain'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `money-advance-${this.advanceDetails.id}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    },
    retryLoadDetails() {
      if (this.selectedAdvance) {
        this.viewDetails(this.selectedAdvance);
      }
    },
    handleEditFromDetail(advance) {
      this.closeDetailDialog();
      this.openDialog(advance);
    },
    handleApproveFromDetail(advance) {
      this.closeDetailDialog();
      this.approveAdvance(advance);
    },
    handleCreateSettlement(advance) {
      this.closeDetailDialog();
      this.createSettlement(advance);
    },
    formatAdvanceForDownload() {
      var _advance$maker, _advance$ministry, _advance$currency;
      const advance = this.advanceDetails;
      return `
MONEY ADVANCE DETAILS
=====================

ID: ${advance.id}
Maker: ${((_advance$maker = advance.maker) === null || _advance$maker === void 0 ? void 0 : _advance$maker.cus_name) || 'N/A'}
Ministry: ${((_advance$ministry = advance.ministry) === null || _advance$ministry === void 0 ? void 0 : _advance$ministry.name) || 'N/A'}
Amount: ${this.formatCurrency(advance.amount)} ${((_advance$currency = advance.currency) === null || _advance$currency === void 0 ? void 0 : _advance$currency.code) || ''}
Purpose: ${advance.purpose || 'N/A'}
Status: ${advance.status.toUpperCase()}
Due Date: ${this.formatDate(advance.dueDate)}
Created Date: ${this.formatDate(advance.createdAt)}
Updated Date: ${this.formatDate(advance.updatedAt)}

${advance.bankAccount ? `Bank Account: ${advance.bankAccount.bankName} - ${advance.bankAccount.accountNumber}` : 'No Bank Account'}

Notes: ${advance.note || 'No notes provided'}

${advance.checker ? `Checker: ${advance.checker.cus_name}` : ''}
${advance.approvedAt ? `Approved At: ${this.formatDate(advance.approvedAt)}` : ''}
${advance.settledAt ? `Settled At: ${this.formatDate(advance.settledAt)}` : ''}

Generated on: ${new Date().toLocaleString()}
      `.trim();
    },
    // Pagination
    changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page;
        this.fetchData();
      }
    },
    // Update methods for form dialog
    updateSelectedCurrency(currencyId) {
      console.log('Currency changed to:', currencyId);
    },
    updateSelectedBankAccount(bankAccountId) {
      console.log('Bank account changed to:', bankAccountId);
    },
    updateSelectedMinistry(ministryId) {
      console.log('Ministry changed to:', ministryId);
    },
    // Utility methods
    // formatCurrency(amount) {
    //   return new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    //   }).format(amount || 0)
    // },

    formatCurrency(amount, currencyCode = 'LAK') {
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
          maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2
        }).format(amount || 0);
      } catch (error) {
        return `${this.formatNumber(amount)} ${currencyCode}`;
      }
    },
    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message);
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'Error' : 'Success',
          message: message,
          type: type === 'error' ? 'error' : 'success'
        });
      } else {
        console.log(`${type.toUpperCase()}: ${message}`);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/moneyAdvance/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_moneyAdvancevue_type_script_lang_js_ = (moneyAdvancevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/moneyAdvance/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(929)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_moneyAdvancevue_type_script_lang_js_,
  moneyAdvancevue_type_template_id_1b6ae2c6_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "1b6ae2c6",
  "5a581034"
  
)

/* harmony default export */ var moneyAdvance = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'localable',
  props: {
    locale: String
  },
  computed: {
    currentLocale() {
      return this.locale || this.$vuetify.lang.current;
    }
  }
}));

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLeapYear; });
function createUTCDate(year, month = 0, day = 1) {
  let date;
  if (year < 100 && year >= 0) {
    date = new Date(Date.UTC(year, month, day));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(year);
    }
  } else {
    date = new Date(Date.UTC(year, month, day));
  }
  return date;
}
function firstWeekOffset(year, firstDayOfWeek, firstDayOfYear) {
  const firstWeekDayInFirstWeek = 7 + firstDayOfWeek - firstDayOfYear;
  const firstWeekDayOfYear = (7 + createUTCDate(year, 0, firstWeekDayInFirstWeek).getUTCDay() - firstDayOfWeek) % 7;
  return -firstWeekDayOfYear + firstWeekDayInFirstWeek - 1;
}
function dayOfYear(year, month, day, firstDayOfWeek) {
  let dayOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month];
  if (month > 1 && isLeapYear(year)) {
    dayOfYear++;
  }
  return dayOfYear + day;
}
function weeksInYear(year, firstDayOfWeek, firstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, firstDayOfYear);
  const weekOffsetNext = firstWeekOffset(year + 1, firstDayOfWeek, firstDayOfYear);
  const daysInYear = isLeapYear(year) ? 366 : 365;
  return (daysInYear - weekOffset + weekOffsetNext) / 7;
}
function weekNumber(year, month, day, firstDayOfWeek, localeFirstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, localeFirstDayOfYear);
  const week = Math.ceil((dayOfYear(year, month, day, firstDayOfWeek) - weekOffset) / 7);
  if (week < 1) {
    return week + weeksInYear(year - 1, firstDayOfWeek, localeFirstDayOfYear);
  } else if (week > weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear)) {
    return week - weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear);
  } else {
    return week;
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PARSE_REGEX */
/* unused harmony export PARSE_TIME */
/* unused harmony export DAYS_IN_MONTH */
/* unused harmony export DAYS_IN_MONTH_LEAP */
/* unused harmony export DAYS_IN_MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAYS_IN_MONTH_MAX; });
/* unused harmony export MONTH_MAX */
/* unused harmony export MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DAY_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DAYS_IN_WEEK; });
/* unused harmony export MINUTES_IN_HOUR */
/* unused harmony export MINUTE_MAX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINUTES_IN_DAY; });
/* unused harmony export HOURS_IN_DAY */
/* unused harmony export HOUR_MAX */
/* unused harmony export FIRST_HOUR */
/* unused harmony export OFFSET_YEAR */
/* unused harmony export OFFSET_MONTH */
/* unused harmony export OFFSET_HOUR */
/* unused harmony export OFFSET_TIME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getStartOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getEndOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getStartOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getEndOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return validateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return parseTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return validateTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return parseTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getDayIdentifier; });
/* unused harmony export getTimeIdentifier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getTimestampIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return updateRelative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isTimedless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return updateHasTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return updateMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return updateWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return updateFormatted; });
/* unused harmony export getWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return copyTimestamp; });
/* unused harmony export padNumber */
/* unused harmony export getDate */
/* unused harmony export getTime */
/* unused harmony export nextMinutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return nextDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return prevDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return relativeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return diffMinutes; });
/* unused harmony export findWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getWeekdaySkips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return timestampToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createDayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createIntervalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createNativeLocaleFormatter; });
/* harmony import */ var _util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392);

const PARSE_REGEX = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/;
const PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/;
const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_MIN = 28;
const DAYS_IN_MONTH_MAX = 31;
const MONTH_MAX = 12;
const MONTH_MIN = 1;
const DAY_MIN = 1;
const DAYS_IN_WEEK = 7;
const MINUTES_IN_HOUR = 60;
const MINUTE_MAX = 59;
const MINUTES_IN_DAY = 24 * 60;
const HOURS_IN_DAY = 24;
const HOUR_MAX = 23;
const FIRST_HOUR = 0;
const OFFSET_YEAR = 10000;
const OFFSET_MONTH = 100;
const OFFSET_HOUR = 100;
const OFFSET_TIME = 10000;
function getStartOfWeek(timestamp, weekdays, today) {
  const start = copyTimestamp(timestamp);
  findWeekday(start, weekdays[0], prevDay);
  updateFormatted(start);
  if (today) {
    updateRelative(start, today, start.hasTime);
  }
  return start;
}
function getEndOfWeek(timestamp, weekdays, today) {
  const end = copyTimestamp(timestamp);
  findWeekday(end, weekdays[weekdays.length - 1]);
  updateFormatted(end);
  if (today) {
    updateRelative(end, today, end.hasTime);
  }
  return end;
}
function getStartOfMonth(timestamp) {
  const start = copyTimestamp(timestamp);
  start.day = DAY_MIN;
  updateWeekday(start);
  updateFormatted(start);
  return start;
}
function getEndOfMonth(timestamp) {
  const end = copyTimestamp(timestamp);
  end.day = daysInMonth(end.year, end.month);
  updateWeekday(end);
  updateFormatted(end);
  return end;
}
function validateTime(input) {
  return typeof input === 'number' && isFinite(input) || !!PARSE_TIME.exec(input) || typeof input === 'object' && isFinite(input.hour) && isFinite(input.minute);
}
function parseTime(input) {
  if (typeof input === 'number') {
    // when a number is given, it's minutes since 12:00am
    return input;
  } else if (typeof input === 'string') {
    // when a string is given, it's a hh:mm:ss format where seconds are optional
    const parts = PARSE_TIME.exec(input);
    if (!parts) {
      return false;
    }
    return parseInt(parts[1]) * 60 + parseInt(parts[3] || 0);
  } else if (typeof input === 'object') {
    // when an object is given, it must have hour and minute
    if (typeof input.hour !== 'number' || typeof input.minute !== 'number') {
      return false;
    }
    return input.hour * 60 + input.minute;
  } else {
    // unsupported type
    return false;
  }
}
function validateTimestamp(input) {
  return typeof input === 'number' && isFinite(input) || typeof input === 'string' && !!PARSE_REGEX.exec(input) || input instanceof Date;
}
function parseTimestamp(input, required = false, now) {
  if (typeof input === 'number' && isFinite(input)) {
    input = new Date(input);
  }
  if (input instanceof Date) {
    const date = parseDate(input);
    if (now) {
      updateRelative(date, now, date.hasTime);
    }
    return date;
  }
  if (typeof input !== 'string') {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  } // YYYY-MM-DD hh:mm:ss

  const parts = PARSE_REGEX.exec(input);
  if (!parts) {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  }
  const timestamp = {
    date: input,
    time: '',
    year: parseInt(parts[1]),
    month: parseInt(parts[2]),
    day: parseInt(parts[4]) || 1,
    hour: parseInt(parts[6]) || 0,
    minute: parseInt(parts[8]) || 0,
    weekday: 0,
    hasDay: !!parts[4],
    hasTime: !!(parts[6] && parts[8]),
    past: false,
    present: false,
    future: false
  };
  updateWeekday(timestamp);
  updateFormatted(timestamp);
  if (now) {
    updateRelative(timestamp, now, timestamp.hasTime);
  }
  return timestamp;
}
function parseDate(date) {
  return updateFormatted({
    date: '',
    time: '',
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    hasDay: true,
    hasTime: true,
    past: false,
    present: true,
    future: false
  });
}
function getDayIdentifier(timestamp) {
  return timestamp.year * OFFSET_YEAR + timestamp.month * OFFSET_MONTH + timestamp.day;
}
function getTimeIdentifier(timestamp) {
  return timestamp.hour * OFFSET_HOUR + timestamp.minute;
}
function getTimestampIdentifier(timestamp) {
  return getDayIdentifier(timestamp) * OFFSET_TIME + getTimeIdentifier(timestamp);
}
function updateRelative(timestamp, now, time = false) {
  let a = getDayIdentifier(now);
  let b = getDayIdentifier(timestamp);
  let present = a === b;
  if (timestamp.hasTime && time && present) {
    a = getTimeIdentifier(now);
    b = getTimeIdentifier(timestamp);
    present = a === b;
  }
  timestamp.past = b < a;
  timestamp.present = present;
  timestamp.future = b > a;
  return timestamp;
}
function isTimedless(input) {
  return input instanceof Date || typeof input === 'number' && isFinite(input);
}
function updateHasTime(timestamp, hasTime, now) {
  if (timestamp.hasTime !== hasTime) {
    timestamp.hasTime = hasTime;
    if (!hasTime) {
      timestamp.hour = HOUR_MAX;
      timestamp.minute = MINUTE_MAX;
      timestamp.time = getTime(timestamp);
    }
    if (now) {
      updateRelative(timestamp, now, timestamp.hasTime);
    }
  }
  return timestamp;
}
function updateMinutes(timestamp, minutes, now) {
  timestamp.hasTime = true;
  timestamp.hour = Math.floor(minutes / MINUTES_IN_HOUR);
  timestamp.minute = minutes % MINUTES_IN_HOUR;
  timestamp.time = getTime(timestamp);
  if (now) {
    updateRelative(timestamp, now, true);
  }
  return timestamp;
}
function updateWeekday(timestamp) {
  timestamp.weekday = getWeekday(timestamp);
  return timestamp;
}
function updateFormatted(timestamp) {
  timestamp.time = getTime(timestamp);
  timestamp.date = getDate(timestamp);
  return timestamp;
}
function getWeekday(timestamp) {
  if (timestamp.hasDay) {
    const _ = Math.floor;
    const k = timestamp.day;
    const m = (timestamp.month + 9) % MONTH_MAX + 1;
    const C = _(timestamp.year / 100);
    const Y = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
    return ((k + _(2.6 * m - 0.2) - 2 * C + Y + _(Y / 4) + _(C / 4)) % 7 + 7) % 7;
  }
  return timestamp.weekday;
}
function daysInMonth(year, month) {
  return Object(_util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__[/* isLeapYear */ "a"])(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
}
function copyTimestamp(timestamp) {
  const {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  } = timestamp;
  return {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  };
}
function padNumber(x, length) {
  let padded = String(x);
  while (padded.length < length) {
    padded = '0' + padded;
  }
  return padded;
}
function getDate(timestamp) {
  let str = `${padNumber(timestamp.year, 4)}-${padNumber(timestamp.month, 2)}`;
  if (timestamp.hasDay) str += `-${padNumber(timestamp.day, 2)}`;
  return str;
}
function getTime(timestamp) {
  if (!timestamp.hasTime) {
    return '';
  }
  return `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
}
function nextMinutes(timestamp, minutes) {
  timestamp.minute += minutes;
  while (timestamp.minute > MINUTES_IN_HOUR) {
    timestamp.minute -= MINUTES_IN_HOUR;
    timestamp.hour++;
    if (timestamp.hour >= HOURS_IN_DAY) {
      nextDay(timestamp);
      timestamp.hour = FIRST_HOUR;
    }
  }
  return timestamp;
}
function nextDay(timestamp) {
  timestamp.day++;
  timestamp.weekday = (timestamp.weekday + 1) % DAYS_IN_WEEK;
  if (timestamp.day > DAYS_IN_MONTH_MIN && timestamp.day > daysInMonth(timestamp.year, timestamp.month)) {
    timestamp.day = DAY_MIN;
    timestamp.month++;
    if (timestamp.month > MONTH_MAX) {
      timestamp.month = MONTH_MIN;
      timestamp.year++;
    }
  }
  return timestamp;
}
function prevDay(timestamp) {
  timestamp.day--;
  timestamp.weekday = (timestamp.weekday + 6) % DAYS_IN_WEEK;
  if (timestamp.day < DAY_MIN) {
    timestamp.month--;
    if (timestamp.month < MONTH_MIN) {
      timestamp.year--;
      timestamp.month = MONTH_MAX;
    }
    timestamp.day = daysInMonth(timestamp.year, timestamp.month);
  }
  return timestamp;
}
function relativeDays(timestamp, mover = nextDay, days = 1) {
  while (--days >= 0) mover(timestamp);
  return timestamp;
}
function diffMinutes(min, max) {
  const Y = (max.year - min.year) * 525600;
  const M = (max.month - min.month) * 43800;
  const D = (max.day - min.day) * 1440;
  const h = (max.hour - min.hour) * 60;
  const m = max.minute - min.minute;
  return Y + M + D + h + m;
}
function findWeekday(timestamp, weekday, mover = nextDay, maxDays = 6) {
  while (timestamp.weekday !== weekday && --maxDays >= 0) mover(timestamp);
  return timestamp;
}
function getWeekdaySkips(weekdays) {
  const skips = [1, 1, 1, 1, 1, 1, 1];
  const filled = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < weekdays.length; i++) {
    filled[weekdays[i]] = 1;
  }
  for (let k = 0; k < DAYS_IN_WEEK; k++) {
    let skip = 1;
    for (let j = 1; j < DAYS_IN_WEEK; j++) {
      const next = (k + j) % DAYS_IN_WEEK;
      if (filled[next]) {
        break;
      }
      skip++;
    }
    skips[k] = filled[k] * skip;
  }
  return skips;
}
function timestampToDate(timestamp) {
  const time = `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
  const date = timestamp.date;
  return new Date(`${date}T${time}:00+00:00`);
}
function createDayList(start, end, now, weekdaySkips, max = 42, min = 0) {
  const stop = getDayIdentifier(end);
  const days = [];
  let current = copyTimestamp(start);
  let currentIdentifier = 0;
  let stopped = currentIdentifier === stop;
  if (stop < getDayIdentifier(start)) {
    throw new Error('End date is earlier than start date.');
  }
  while ((!stopped || days.length < min) && days.length < max) {
    currentIdentifier = getDayIdentifier(current);
    stopped = stopped || currentIdentifier === stop;
    if (weekdaySkips[current.weekday] === 0) {
      current = nextDay(current);
      continue;
    }
    const day = copyTimestamp(current);
    updateFormatted(day);
    updateRelative(day, now);
    days.push(day);
    current = relativeDays(current, nextDay, weekdaySkips[current.weekday]);
  }
  if (!days.length) throw new Error('No dates found using specified start date, end date, and weekdays.');
  return days;
}
function createIntervalList(timestamp, first, minutes, count, now) {
  const intervals = [];
  for (let i = 0; i < count; i++) {
    const mins = first + i * minutes;
    const int = copyTimestamp(timestamp);
    intervals.push(updateMinutes(int, mins, now));
  }
  return intervals;
}
function createNativeLocaleFormatter(locale, getOptions) {
  const emptyFormatter = (_t, _s) => '';
  if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
    return emptyFormatter;
  }
  return (timestamp, short) => {
    try {
      const intlFormatter = new Intl.DateTimeFormat(locale || undefined, getOptions(timestamp, short));
      return intlFormatter.format(timestampToDate(timestamp));
    } catch (e) {
      return '';
    }
  };
}

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(403);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("265ccd52", content, true)

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:4px;contain:layout style;display:inline-flex;flex-direction:column;font-size:1rem;position:relative;vertical-align:top}.v-picker--full-width{display:flex;width:100%}.v-picker--full-width>.v-picker__body{margin:initial}.v-picker__title{border-top-left-radius:4px;border-top-right-radius:4px;color:#fff;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){cursor:pointer;opacity:.6}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{align-items:center;display:flex;flex:1 0 auto;flex-direction:column;height:auto;margin:0 auto;overflow:hidden;position:relative;z-index:0}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-bottom-right-radius:0;border-top-right-radius:0;height:100%;position:absolute;top:0;width:170px;z-index:1}.v-application--is-ltr .v-picker--landscape .v-picker__title{left:0}.v-application--is-rtl .v-picker--landscape .v-picker__title{right:0}.v-application--is-ltr .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-ltr .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:170px;margin-right:0}.v-application--is-rtl .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-rtl .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:0;margin-right:170px}.v-picker--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(405);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ec842454", content, true)

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-title{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;line-height:1}.v-application--is-ltr .v-date-picker-title .v-picker__title__btn{text-align:left}.v-application--is-rtl .v-date-picker-title .v-picker__title__btn{text-align:right}.v-date-picker-title__year{align-items:center;display:inline-flex;font-size:14px;font-weight:500;margin-bottom:8px}.v-date-picker-title__date{font-size:34px;font-weight:500;margin-bottom:-8px;overflow:hidden;padding-bottom:8px;position:relative;text-align:left}.v-date-picker-title__date>div{position:relative}.v-date-picker-title--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(407);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("075924a4", content, true)

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:rgba(0,0,0,.87)}.theme--light.v-date-picker-header .v-date-picker-header__value--disabled button{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:#fff}.theme--dark.v-date-picker-header .v-date-picker-header__value--disabled button{color:hsla(0,0%,100%,.5)}.v-date-picker-header{align-items:center;display:flex;justify-content:space-between;padding:4px 16px;position:relative}.v-date-picker-header .v-btn{margin:0;z-index:auto}.v-date-picker-header .v-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-date-picker-header__value{flex:1;overflow:hidden;position:relative;text-align:center}.v-date-picker-header__value div{transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-header__value button{cursor:pointer;font-weight:700;outline:none;padding:.5rem;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-date-picker-header--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0f7d136a", content, true)

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-table .v-date-picker-table--date__week,.theme--light.v-date-picker-table th{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-table .v-date-picker-table--date__week,.theme--dark.v-date-picker-table th{color:hsla(0,0%,100%,.5)}.v-date-picker-table{height:242px;padding:0 12px;position:relative}.v-date-picker-table table{table-layout:fixed;top:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-table td,.v-date-picker-table th{position:relative;text-align:center}.v-date-picker-table th{font-size:12px}.v-date-picker-table--date .v-btn{height:32px;width:32px}.v-date-picker-table .v-btn{font-size:12px;margin:0;z-index:auto}.v-date-picker-table .v-btn.v-btn--active{color:#fff}.v-date-picker-table--month td{height:56px;text-align:center;vertical-align:middle;width:33.333333%}.v-date-picker-table--month td .v-btn{margin:0 auto;max-width:140px;min-width:40px;width:100%}.v-date-picker-table--date th{font-weight:600;padding:8px 0}.v-date-picker-table--date td{width:45px}.v-date-picker-table__events{height:8px;left:0;position:absolute;text-align:center;white-space:pre;width:100%}.v-date-picker-table__events>div{border-radius:50%;display:inline-block;height:8px;margin:0 1px;width:8px}.v-date-picker-table--date .v-date-picker-table__events{bottom:6px}.v-date-picker-table--month .v-date-picker-table__events{bottom:8px}.v-date-picker-table__current .v-date-picker-table__events{margin-bottom:-1px}.v-date-picker-table--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("4dc2915a", content, true)

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-years{font-size:16px;font-weight:400;height:290px;list-style-type:none;overflow:auto;text-align:center}.v-date-picker-years.v-date-picker-years{padding:0}.v-date-picker-years li{cursor:pointer;padding:8px 0;transition:none}.v-date-picker-years li.active{font-size:26px;font-weight:500;padding:10px 0}.v-date-picker-years li:hover{background:rgba(0,0,0,.12)}.v-picker--landscape .v-date-picker-years{height:290px;padding:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTitle.sass
var VDatePickerTitle = __webpack_require__(404);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker-button/index.js
// Mixins
 // Utilities



/* @vue/component */

/* harmony default export */ var picker_button = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  methods: {
    genPickerButton(prop, value, content, readonly = false, staticClass = '') {
      const active = this[prop] === value;
      const click = event => {
        event.stopPropagation();
        this.$emit(`update:${Object(helpers["x" /* kebabCase */])(prop)}`, value);
      };
      return this.$createElement('div', {
        staticClass: `v-picker__title__btn ${staticClass}`.trim(),
        class: {
          'v-picker__title__btn--active': active,
          'v-picker__title__btn--readonly': readonly
        },
        on: active || readonly ? undefined : {
          click
        }
      }, Array.isArray(content) ? content : [content]);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerTitle.js
 // Components

 // Mixins

 // Utils


/* harmony default export */ var VDatePicker_VDatePickerTitle = (Object(mixins["a" /* default */])(picker_button
/* @vue/component */).extend({
  name: 'v-date-picker-title',
  props: {
    date: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    readonly: Boolean,
    selectingYear: Boolean,
    value: {
      type: String
    },
    year: {
      type: [Number, String],
      default: ''
    },
    yearIcon: {
      type: String
    }
  },
  data: () => ({
    isReversing: false
  }),
  computed: {
    computedTransition() {
      return this.isReversing ? 'picker-reverse-transition' : 'picker-transition';
    }
  },
  watch: {
    value(val, prev) {
      this.isReversing = val < prev;
    }
  },
  methods: {
    genYearIcon() {
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          dark: true
        }
      }, this.yearIcon);
    },
    getYearBtn() {
      return this.genPickerButton('selectingYear', true, [String(this.year), this.yearIcon ? this.genYearIcon() : null], false, 'v-date-picker-title__year');
    },
    genTitleText() {
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('div', {
        domProps: {
          innerHTML: this.date || '&nbsp;'
        },
        key: this.value
      })]);
    },
    genTitleDate() {
      return this.genPickerButton('selectingYear', false, [this.genTitleText()], false, 'v-date-picker-title__date');
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-date-picker-title',
      class: {
        'v-date-picker-title--disabled': this.disabled
      }
    }, [this.getYearBtn(), this.genTitleDate()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerHeader.sass
var VDatePickerHeader = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/localable/index.js
var localable = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/pad.js
const padStart = (string, targetLength, padString) => {
  targetLength = targetLength >> 0;
  string = String(string);
  padString = String(padString);
  if (string.length > targetLength) {
    return String(string);
  }
  targetLength = targetLength - string.length;
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length);
  }
  return padString.slice(0, targetLength) + String(string);
};
/* harmony default export */ var pad = ((n, length = 2) => padStart(n, length, '0'));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/createNativeLocaleFormatter.js

function createNativeLocaleFormatter(locale, options, substrOptions = {
  start: 0,
  length: 0
}) {
  const makeIsoString = dateString => {
    const [year, month, date] = dateString.trim().split(' ')[0].split('-');
    return [pad(year, 4), pad(month || 1), pad(date || 1)].join('-');
  };
  try {
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);
    return dateString => intlFormatter.format(new Date(`${makeIsoString(dateString)}T00:00:00+00:00`));
  } catch (e) {
    return substrOptions.start || substrOptions.length ? dateString => makeIsoString(dateString).substr(substrOptions.start || 0, substrOptions.length) : undefined;
  }
}
/* harmony default export */ var util_createNativeLocaleFormatter = (createNativeLocaleFormatter);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/monthChange.js

/**
 * @param {String} value YYYY-MM format
 * @param {Number} sign -1 or +1
 */

/* harmony default export */ var monthChange = ((value, sign) => {
  const [year, month] = value.split('-').map(Number);
  if (month + sign === 0) {
    return `${year - 1}-12`;
  } else if (month + sign === 13) {
    return `${year + 1}-01`;
  } else {
    return `${year}-${pad(month + sign)}`;
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerHeader.js
 // Components


 // Mixins



 // Utils



/* harmony default export */ var VDatePicker_VDatePickerHeader = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-header',
  props: {
    disabled: Boolean,
    format: Function,
    min: String,
    max: String,
    nextAriaLabel: String,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevAriaLabel: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    readonly: Boolean,
    value: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isReversing: false
    };
  },
  computed: {
    formatter() {
      if (this.format) {
        return this.format;
      } else if (String(this.value).split('-')[1]) {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 7
        });
      } else {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        });
      }
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  methods: {
    genBtn(change) {
      const ariaLabelId = change > 0 ? this.nextAriaLabel : this.prevAriaLabel;
      const ariaLabel = ariaLabelId ? this.$vuetify.lang.t(ariaLabelId) : undefined;
      const disabled = this.disabled || change < 0 && this.min && this.calculateChange(change) < this.min || change > 0 && this.max && this.calculateChange(change) > this.max;
      return this.$createElement(VBtn["a" /* default */], {
        attrs: {
          'aria-label': ariaLabel
        },
        props: {
          dark: this.dark,
          disabled,
          icon: true,
          light: this.light
        },
        on: {
          click: e => {
            e.stopPropagation();
            this.$emit('input', this.calculateChange(change));
          }
        }
      }, [this.$createElement(VIcon["a" /* default */], change < 0 === !this.$vuetify.rtl ? this.prevIcon : this.nextIcon)]);
    },
    calculateChange(sign) {
      const [year, month] = String(this.value).split('-').map(Number);
      if (month == null) {
        return `${year + sign}`;
      } else {
        return monthChange(String(this.value), sign);
      }
    },
    genHeader() {
      const color = !this.disabled && (this.color || 'accent');
      const header = this.$createElement('div', this.setTextColor(color, {
        key: String(this.value)
      }), [this.$createElement('button', {
        attrs: {
          type: 'button'
        },
        on: {
          click: () => this.$emit('toggle')
        }
      }, [this.$slots.default || this.formatter(String(this.value))])]);
      const transition = this.$createElement('transition', {
        props: {
          name: this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition'
        }
      }, [header]);
      return this.$createElement('div', {
        staticClass: 'v-date-picker-header__value',
        class: {
          'v-date-picker-header__value--disabled': this.disabled
        }
      }, [transition]);
    }
  },
  render() {
    return this.$createElement('div', {
      staticClass: 'v-date-picker-header',
      class: {
        'v-date-picker-header--disabled': this.disabled,
        ...this.themeClasses
      }
    }, [this.genBtn(-1), this.genHeader(), this.genBtn(+1)]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTable.sass
var VDatePickerTable = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/eventHelpers.js
function createItemTypeNativeListeners(instance, itemTypeSuffix, value) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName.slice(0, -itemTypeSuffix.length)] = event => instance.$emit(eventName, value, event);
    }
    return on;
  }, {});
}
function createItemTypeListeners(instance, itemTypeSuffix) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName] = instance.$listeners[eventName];
    }
    return on;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/sanitizeDateString.js
// Adds leading zero to month/day if necessary, returns 'YYYY' if type = 'year',
// 'YYYY-MM' if 'month' and 'YYYY-MM-DD' if 'date'

/* harmony default export */ var sanitizeDateString = ((dateString, type) => {
  const [year, month = 1, date = 1] = dateString.split('-');
  return `${year}-${pad(month)}-${pad(date)}`.substr(0, {
    date: 10,
    month: 7,
    year: 4
  }[type]);
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/isDateAllowed.js
function isDateAllowed(date, min, max, allowedFn) {
  return (!allowedFn || allowedFn(date)) && (!min || date >= min.substr(0, 10)) && (!max || date <= max);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/mixins/date-picker-table.js
 // Directives

 // Mixins



 // Utils






/* harmony default export */ var date_picker_table = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    allowedDates: Function,
    current: String,
    disabled: Boolean,
    format: Function,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    min: String,
    max: String,
    range: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    tableDate: {
      type: String,
      required: true
    },
    value: [String, Array]
  },
  data: () => ({
    isReversing: false,
    wheelThrottle: null
  }),
  computed: {
    computedTransition() {
      return this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition';
    },
    displayedMonth() {
      return Number(this.tableDate.split('-')[1]) - 1;
    },
    displayedYear() {
      return Number(this.tableDate.split('-')[0]);
    }
  },
  watch: {
    tableDate(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  mounted() {
    this.wheelThrottle = Object(helpers["G" /* throttle */])(this.wheel, 250);
  },
  methods: {
    genButtonClasses(isAllowed, isFloating, isSelected, isCurrent, isFirst, isLast) {
      return {
        'v-size--default': !isFloating,
        'v-date-picker-table__current': isCurrent,
        'v-btn--active': isSelected,
        'v-btn--flat': !isAllowed || this.disabled,
        'v-btn--text': isSelected === isCurrent,
        'v-btn--rounded': isFloating,
        'v-btn--disabled': !isAllowed || this.disabled,
        'v-btn--outlined': isCurrent && !isSelected,
        'v-date-picker--first-in-range': isFirst,
        'v-date-picker--last-in-range': isLast,
        ...this.themeClasses
      };
    },
    genButtonEvents(value, isAllowed, mouseEventType) {
      if (this.disabled) return undefined;
      return Object(mergeData["c" /* mergeListeners */])({
        click: () => {
          if (isAllowed && !this.readonly) this.$emit('input', value);
        }
      }, createItemTypeNativeListeners(this, `:${mouseEventType}`, value));
    },
    genButton(value, isFloating, mouseEventType, formatter, isOtherMonth = false) {
      const isAllowed = isDateAllowed(value, this.min, this.max, this.allowedDates);
      const isSelected = this.isSelected(value) && isAllowed;
      const isCurrent = value === this.current;
      const setColor = isSelected ? this.setBackgroundColor : this.setTextColor;
      const color = (isSelected || isCurrent) && (this.color || 'accent');
      let isFirst = false;
      let isLast = false;
      if (this.range && !!this.value && Array.isArray(this.value)) {
        isFirst = value === this.value[0];
        isLast = value === this.value[this.value.length - 1];
      }
      return this.$createElement('button', setColor(color, {
        staticClass: 'v-btn',
        class: this.genButtonClasses(isAllowed && !isOtherMonth, isFloating, isSelected, isCurrent, isFirst, isLast),
        attrs: {
          type: 'button'
        },
        domProps: {
          disabled: this.disabled || !isAllowed || isOtherMonth
        },
        on: this.genButtonEvents(value, isAllowed, mouseEventType)
      }), [this.$createElement('div', {
        staticClass: 'v-btn__content'
      }, [formatter(value)]), this.genEvents(value)]);
    },
    getEventColors(date) {
      const arrayize = v => Array.isArray(v) ? v : [v];
      let eventData;
      let eventColors = [];
      if (Array.isArray(this.events)) {
        eventData = this.events.includes(date);
      } else if (this.events instanceof Function) {
        eventData = this.events(date) || false;
      } else if (this.events) {
        eventData = this.events[date] || false;
      } else {
        eventData = false;
      }
      if (!eventData) {
        return [];
      } else if (eventData !== true) {
        eventColors = arrayize(eventData);
      } else if (typeof this.eventColor === 'string') {
        eventColors = [this.eventColor];
      } else if (typeof this.eventColor === 'function') {
        eventColors = arrayize(this.eventColor(date));
      } else if (Array.isArray(this.eventColor)) {
        eventColors = this.eventColor;
      } else {
        eventColors = arrayize(this.eventColor[date]);
      }
      return eventColors.filter(v => v);
    },
    genEvents(date) {
      const eventColors = this.getEventColors(date);
      return eventColors.length ? this.$createElement('div', {
        staticClass: 'v-date-picker-table__events'
      }, eventColors.map(color => this.$createElement('div', this.setBackgroundColor(color)))) : null;
    },
    isValidScroll(value, calculateTableDate) {
      const tableDate = calculateTableDate(value); // tableDate is 'YYYY-MM' for DateTable and 'YYYY' for MonthTable

      const sanitizeType = tableDate.split('-').length === 1 ? 'year' : 'month';
      return value < 0 && (this.min ? tableDate >= sanitizeDateString(this.min, sanitizeType) : true) || value > 0 && (this.max ? tableDate <= sanitizeDateString(this.max, sanitizeType) : true);
    },
    wheel(e, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(e.deltaY));
    },
    touch(value, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(value));
    },
    genTable(staticClass, children, calculateTableDate) {
      const transition = this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('table', {
        key: this.tableDate
      }, children)]);
      const touchDirective = {
        name: 'touch',
        value: {
          left: e => e.offsetX < -15 && this.isValidScroll(1, calculateTableDate) && this.touch(1, calculateTableDate),
          right: e => e.offsetX > 15 && this.isValidScroll(-1, calculateTableDate) && this.touch(-1, calculateTableDate)
        }
      };
      return this.$createElement('div', {
        staticClass,
        class: {
          'v-date-picker-table--disabled': this.disabled,
          ...this.themeClasses
        },
        on: !this.disabled && this.scrollable ? {
          wheel: e => {
            e.preventDefault();
            if (this.isValidScroll(e.deltaY, calculateTableDate)) {
              this.wheelThrottle(e, calculateTableDate);
            }
          }
        } : undefined,
        directives: [touchDirective]
      }, [transition]);
    },
    isSelected(value) {
      if (Array.isArray(this.value)) {
        if (this.range && this.value.length === 2) {
          const [from, to] = [...this.value].sort();
          return from <= value && value <= to;
        } else {
          return this.value.indexOf(value) !== -1;
        }
      }
      return value === this.value;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dateTimeUtils.js
var dateTimeUtils = __webpack_require__(392);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerDateTable.js
// Mixins
 // Utils





/* harmony default export */ var VDatePickerDateTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-date-table',
  props: {
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    weekdayFormat: Function
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        day: 'numeric',
        timeZone: 'UTC'
      }, {
        start: 8,
        length: 2
      });
    },
    weekdayFormatter() {
      return this.weekdayFormat || util_createNativeLocaleFormatter(this.currentLocale, {
        weekday: 'narrow',
        timeZone: 'UTC'
      });
    },
    weekDays() {
      const first = parseInt(this.firstDayOfWeek, 10);
      return this.weekdayFormatter ? Object(helpers["i" /* createRange */])(7).map(i => this.weekdayFormatter(`2017-01-${first + i + 15}`)) // 2017-01-15 is Sunday
      : Object(helpers["i" /* createRange */])(7).map(i => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][(i + first) % 7]);
    }
  },
  methods: {
    calculateTableDate(delta) {
      return monthChange(this.tableDate, Math.sign(delta || 1));
    },
    genTHead() {
      const days = this.weekDays.map(day => this.$createElement('th', day));
      if (this.showWeek) {
        days.unshift(this.$createElement('th'));
      }
      return this.$createElement('thead', this.genTR(days));
    },
    // Returns number of the days from the firstDayOfWeek to the first day of the current month
    weekDaysBeforeFirstDayOfTheMonth() {
      const firstDayOfTheMonth = new Date(`${this.displayedYear}-${pad(this.displayedMonth + 1)}-01T00:00:00+00:00`);
      const weekDay = firstDayOfTheMonth.getUTCDay();
      return (weekDay - parseInt(this.firstDayOfWeek) + 7) % 7;
    },
    getWeekNumber(dayInMonth) {
      return Object(dateTimeUtils["b" /* weekNumber */])(this.displayedYear, this.displayedMonth, dayInMonth, parseInt(this.firstDayOfWeek), parseInt(this.localeFirstDayOfYear));
    },
    genWeekNumber(weekNumber) {
      return this.$createElement('td', [this.$createElement('small', {
        staticClass: 'v-date-picker-table--date__week'
      }, String(weekNumber).padStart(2, '0'))]);
    },
    // eslint-disable-next-line max-statements
    genTBody() {
      const children = [];
      const daysInMonth = new Date(this.displayedYear, this.displayedMonth + 1, 0).getDate();
      let rows = [];
      let day = this.weekDaysBeforeFirstDayOfTheMonth();
      if (this.showWeek) {
        rows.push(this.genWeekNumber(this.getWeekNumber(1)));
      }
      const prevMonthYear = this.displayedMonth ? this.displayedYear : this.displayedYear - 1;
      const prevMonth = (this.displayedMonth + 11) % 12;
      const firstDayFromPreviousMonth = new Date(this.displayedYear, this.displayedMonth, 0).getDate();
      const cellsInRow = this.showWeek ? 8 : 7;
      while (day--) {
        const date = `${prevMonthYear}-${pad(prevMonth + 1)}-${pad(firstDayFromPreviousMonth - day)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      for (day = 1; day <= daysInMonth; day++) {
        const date = `${this.displayedYear}-${pad(this.displayedMonth + 1)}-${pad(day)}`;
        rows.push(this.$createElement('td', [this.genButton(date, true, 'date', this.formatter)]));
        if (rows.length % cellsInRow === 0) {
          children.push(this.genTR(rows));
          rows = [];
          if (this.showWeek && (day < daysInMonth || this.showAdjacentMonths)) {
            rows.push(this.genWeekNumber(this.getWeekNumber(day + 7)));
          }
        }
      }
      const nextMonthYear = this.displayedMonth === 11 ? this.displayedYear + 1 : this.displayedYear;
      const nextMonth = (this.displayedMonth + 1) % 12;
      let nextMonthDay = 1;
      while (rows.length < cellsInRow) {
        const date = `${nextMonthYear}-${pad(nextMonth + 1)}-${pad(nextMonthDay++)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      if (rows.length) {
        children.push(this.genTR(rows));
      }
      return this.$createElement('tbody', children);
    },
    genTR(children) {
      return [this.$createElement('tr', children)];
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--date', [this.genTHead(), this.genTBody()], this.calculateTableDate);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerMonthTable.js
// Mixins
 // Utils



/* harmony default export */ var VDatePickerMonthTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-month-table',
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        month: 'short',
        timeZone: 'UTC'
      }, {
        start: 5,
        length: 2
      });
    }
  },
  methods: {
    calculateTableDate(delta) {
      return `${parseInt(this.tableDate, 10) + Math.sign(delta || 1)}`;
    },
    genTBody() {
      const children = [];
      const cols = Array(3).fill(null);
      const rows = 12 / cols.length;
      for (let row = 0; row < rows; row++) {
        const tds = cols.map((_, col) => {
          const month = row * cols.length + col;
          const date = `${this.displayedYear}-${pad(month + 1)}`;
          return this.$createElement('td', {
            key: month
          }, [this.genButton(date, false, 'month', this.formatter)]);
        });
        children.push(this.$createElement('tr', {
          key: row
        }, tds));
      }
      return this.$createElement('tbody', children);
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--month', [this.genTBody()], this.calculateTableDate);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerYears.sass
var VDatePickerYears = __webpack_require__(410);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerYears.js
 // Mixins


 // Utils




/* harmony default export */ var VDatePicker_VDatePickerYears = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-years',
  props: {
    format: Function,
    min: [Number, String],
    max: [Number, String],
    readonly: Boolean,
    value: [Number, String]
  },
  data() {
    return {
      defaultColor: 'primary'
    };
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        year: 'numeric',
        timeZone: 'UTC'
      }, {
        length: 4
      });
    }
  },
  mounted() {
    setTimeout(() => {
      const activeItem = this.$el.getElementsByClassName('active')[0];
      if (activeItem) {
        this.$el.scrollTop = activeItem.offsetTop - this.$el.offsetHeight / 2 + activeItem.offsetHeight / 2;
      } else if (this.min && !this.max) {
        this.$el.scrollTop = this.$el.scrollHeight;
      } else if (!this.min && this.max) {
        this.$el.scrollTop = 0;
      } else {
        this.$el.scrollTop = this.$el.scrollHeight / 2 - this.$el.offsetHeight / 2;
      }
    });
  },
  methods: {
    genYearItem(year) {
      const formatted = this.formatter(`${year}`);
      const active = parseInt(this.value, 10) === year;
      const color = active && (this.color || 'primary');
      return this.$createElement('li', this.setTextColor(color, {
        key: year,
        class: {
          active
        },
        on: Object(mergeData["c" /* mergeListeners */])({
          click: () => this.$emit('input', year)
        }, createItemTypeNativeListeners(this, ':year', year))
      }), formatted);
    },
    genYearItems() {
      const children = [];
      const selectedYear = this.value ? parseInt(this.value, 10) : new Date().getFullYear();
      const maxYear = this.max ? parseInt(this.max, 10) : selectedYear + 100;
      const minYear = Math.min(maxYear, this.min ? parseInt(this.min, 10) : selectedYear - 100);
      for (let year = maxYear; year >= minYear; year--) {
        children.push(this.genYearItem(year));
      }
      return children;
    }
  },
  render() {
    return this.$createElement('ul', {
      staticClass: 'v-date-picker-years',
      ref: 'years'
    }, this.genYearItems());
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VPicker/VPicker.sass
var VPicker = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCard/VCard.sass
var VCard = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/VPicker.js

 // Mixins



 // Helpers



/* @vue/component */

/* harmony default export */ var VPicker_VPicker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    landscape: Boolean,
    noTitle: Boolean,
    transition: {
      type: String,
      default: 'fade-transition'
    },
    width: {
      type: [Number, String],
      default: 290
    }
  },
  computed: {
    computedTitleColor() {
      const defaultTitleColor = this.isDark ? false : this.color || 'primary';
      return this.color || defaultTitleColor;
    }
  },
  methods: {
    genTitle() {
      return this.$createElement('div', this.setBackgroundColor(this.computedTitleColor, {
        staticClass: 'v-picker__title',
        class: {
          'v-picker__title--landscape': this.landscape
        }
      }), this.$slots.title);
    },
    genBodyTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, this.$slots.default);
    },
    genBody() {
      return this.$createElement('div', {
        staticClass: 'v-picker__body',
        class: {
          'v-picker__body--no-title': this.noTitle,
          ...this.themeClasses
        },
        style: this.fullWidth ? undefined : {
          width: Object(helpers["h" /* convertToUnit */])(this.width)
        }
      }, [this.genBodyTransition()]);
    },
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-picker__actions v-card__actions',
        class: {
          'v-picker__actions--no-title': this.noTitle
        }
      }, this.$slots.actions);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-picker v-card',
      class: {
        'v-picker--flat': this.flat,
        'v-picker--landscape': this.landscape,
        'v-picker--full-width': this.fullWidth,
        ...this.themeClasses,
        ...this.elevationClasses
      }
    }, [this.$slots.title ? this.genTitle() : null, this.genBody(), this.$slots.actions ? this.genActions() : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/index.js


/* harmony default export */ var components_VPicker = (VPicker_VPicker);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker/index.js
// Components
 // Mixins



 // Utils


/* harmony default export */ var picker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    headerColor: String,
    landscape: Boolean,
    noTitle: Boolean,
    width: {
      type: [Number, String],
      default: 290
    }
  },
  methods: {
    genPickerTitle() {
      return null;
    },
    genPickerBody() {
      return null;
    },
    genPickerActionsSlot() {
      return this.$scopedSlots.default ? this.$scopedSlots.default({
        save: this.save,
        cancel: this.cancel
      }) : this.$slots.default;
    },
    genPicker(staticClass) {
      const children = [];
      if (!this.noTitle) {
        const title = this.genPickerTitle();
        title && children.push(title);
      }
      const body = this.genPickerBody();
      body && children.push(body);
      children.push(this.$createElement('template', {
        slot: 'actions'
      }, [this.genPickerActionsSlot()]));
      return this.$createElement(components_VPicker, {
        staticClass,
        props: {
          color: this.headerColor || this.color,
          dark: this.dark,
          elevation: this.elevation,
          flat: this.flat,
          fullWidth: this.fullWidth,
          landscape: this.landscape,
          light: this.light,
          width: this.width,
          noTitle: this.noTitle
        }
      }, children);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/timestamp.js
var timestamp = __webpack_require__(396);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js
// Components




 // Mixins


 // Utils







/* harmony default export */ var VDatePicker = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(localable["a" /* default */], picker).extend({
  name: 'v-date-picker',
  props: {
    activePicker: String,
    allowedDates: Function,
    // Function formatting the day in date picker table
    dayFormat: Function,
    disabled: Boolean,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    // Function formatting the tableDate in the day/month table header
    headerDateFormat: Function,
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    max: String,
    min: String,
    // Function formatting month in the months table
    monthFormat: Function,
    multiple: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    nextMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextMonthAriaLabel'
    },
    nextYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextYearAriaLabel'
    },
    pickerDate: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    prevMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevMonthAriaLabel'
    },
    prevYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevYearAriaLabel'
    },
    range: Boolean,
    reactive: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    showCurrent: {
      type: [Boolean, String],
      default: true
    },
    selectedItemsText: {
      type: String,
      default: '$vuetify.datePicker.itemsSelected'
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    // Function formatting currently selected date in the picker title
    titleDateFormat: Function,
    type: {
      type: String,
      default: 'date',
      validator: type => ['date', 'month'].includes(type) // TODO: year
    },

    value: [Array, String],
    weekdayFormat: Function,
    // Function formatting the year in table header and pickup title
    yearFormat: Function,
    yearIcon: String
  },
  data() {
    const now = new Date();
    return {
      internalActivePicker: this.type.toUpperCase(),
      inputDay: null,
      inputMonth: null,
      inputYear: null,
      isReversing: false,
      now,
      // tableDate is a string in 'YYYY' / 'YYYY-M' format (leading zero for month is not required)
      tableDate: (() => {
        if (this.pickerDate) {
          return this.pickerDate;
        }
        const multipleValue = Object(helpers["I" /* wrapInArray */])(this.value);
        const date = multipleValue[multipleValue.length - 1] || (typeof this.showCurrent === 'string' ? this.showCurrent : `${now.getFullYear()}-${now.getMonth() + 1}`);
        return sanitizeDateString(date, this.type === 'date' ? 'month' : 'year');
      })()
    };
  },
  computed: {
    multipleValue() {
      return Object(helpers["I" /* wrapInArray */])(this.value);
    },
    isMultiple() {
      return this.multiple || this.range;
    },
    lastValue() {
      return this.isMultiple ? this.multipleValue[this.multipleValue.length - 1] : this.value;
    },
    selectedMonths() {
      if (!this.value || this.type === 'month') {
        return this.value;
      } else if (this.isMultiple) {
        return this.multipleValue.map(val => val.substr(0, 7));
      } else {
        return this.value.substr(0, 7);
      }
    },
    current() {
      if (this.showCurrent === true) {
        return sanitizeDateString(`${this.now.getFullYear()}-${this.now.getMonth() + 1}-${this.now.getDate()}`, this.type);
      }
      return this.showCurrent || null;
    },
    inputDate() {
      return this.type === 'date' ? `${this.inputYear}-${pad(this.inputMonth + 1)}-${pad(this.inputDay)}` : `${this.inputYear}-${pad(this.inputMonth + 1)}`;
    },
    tableMonth() {
      return Number((this.pickerDate || this.tableDate).split('-')[1]) - 1;
    },
    tableYear() {
      return Number((this.pickerDate || this.tableDate).split('-')[0]);
    },
    minMonth() {
      return this.min ? sanitizeDateString(this.min, 'month') : null;
    },
    maxMonth() {
      return this.max ? sanitizeDateString(this.max, 'month') : null;
    },
    minYear() {
      return this.min ? sanitizeDateString(this.min, 'year') : null;
    },
    maxYear() {
      return this.max ? sanitizeDateString(this.max, 'year') : null;
    },
    formatters() {
      return {
        year: this.yearFormat || util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        }),
        titleDate: this.titleDateFormat || (this.isMultiple ? this.defaultTitleMultipleDateFormatter : this.defaultTitleDateFormatter)
      };
    },
    defaultTitleMultipleDateFormatter() {
      return dates => {
        if (!dates.length) {
          return '-';
        }
        if (dates.length === 1) {
          return this.defaultTitleDateFormatter(dates[0]);
        }
        return this.$vuetify.lang.t(this.selectedItemsText, dates.length);
      };
    },
    defaultTitleDateFormatter() {
      const titleFormats = {
        year: {
          year: 'numeric',
          timeZone: 'UTC'
        },
        month: {
          month: 'long',
          timeZone: 'UTC'
        },
        date: {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          timeZone: 'UTC'
        }
      };
      const titleDateFormatter = util_createNativeLocaleFormatter(this.currentLocale, titleFormats[this.type], {
        start: 0,
        length: {
          date: 10,
          month: 7,
          year: 4
        }[this.type]
      });
      const landscapeFormatter = date => titleDateFormatter(date).replace(/([^\d\s])([\d])/g, (match, nonDigit, digit) => `${nonDigit} ${digit}`).replace(', ', ',<br>');
      return this.landscape ? landscapeFormatter : titleDateFormatter;
    }
  },
  watch: {
    internalActivePicker: {
      immediate: true,
      handler(val) {
        this.$emit('update:active-picker', val);
      }
    },
    activePicker(val) {
      this.internalActivePicker = val;
    },
    tableDate(val, prev) {
      // Make a ISO 8601 strings from val and prev for comparision, otherwise it will incorrectly
      // compare for example '2000-9' and '2000-10'
      const sanitizeType = this.type === 'month' ? 'year' : 'month';
      this.isReversing = sanitizeDateString(val, sanitizeType) < sanitizeDateString(prev, sanitizeType);
      this.$emit('update:picker-date', val);
    },
    pickerDate(val) {
      if (val) {
        this.tableDate = val;
      } else if (this.lastValue && this.type === 'date') {
        this.tableDate = sanitizeDateString(this.lastValue, 'month');
      } else if (this.lastValue && this.type === 'month') {
        this.tableDate = sanitizeDateString(this.lastValue, 'year');
      }
    },
    value(newValue, oldValue) {
      this.checkMultipleProp();
      this.setInputDate();
      if (!this.isMultiple && this.value && !this.pickerDate || this.isMultiple && this.multipleValue.length && (!oldValue || !oldValue.length) && !this.pickerDate) {
        this.tableDate = sanitizeDateString(this.inputDate, this.type === 'month' ? 'year' : 'month');
      }
    },
    type(type) {
      this.internalActivePicker = type.toUpperCase();
      if (this.value && this.value.length) {
        const output = this.multipleValue.map(val => sanitizeDateString(val, type)).filter(this.isDateAllowed);
        this.$emit('input', this.isMultiple ? output : output[0]);
      }
    }
  },
  created() {
    this.checkMultipleProp();
    if (this.pickerDate !== this.tableDate) {
      this.$emit('update:picker-date', this.tableDate);
    }
    this.setInputDate();
  },
  methods: {
    emitInput(newInput) {
      if (this.range) {
        if (this.multipleValue.length !== 1) {
          this.$emit('input', [newInput]);
        } else {
          const output = [this.multipleValue[0], newInput];
          this.$emit('input', output);
          this.$emit('change', output);
        }
        return;
      }
      const output = this.multiple ? this.multipleValue.indexOf(newInput) === -1 ? this.multipleValue.concat([newInput]) : this.multipleValue.filter(x => x !== newInput) : newInput;
      this.$emit('input', output);
      this.multiple || this.$emit('change', newInput);
    },
    checkMultipleProp() {
      if (this.value == null) return;
      const valueType = this.value.constructor.name;
      const expected = this.isMultiple ? 'Array' : 'String';
      if (valueType !== expected) {
        Object(console["c" /* consoleWarn */])(`Value must be ${this.isMultiple ? 'an' : 'a'} ${expected}, got ${valueType}`, this);
      }
    },
    isDateAllowed(value) {
      return isDateAllowed(value, this.min, this.max, this.allowedDates);
    },
    yearClick(value) {
      this.inputYear = value;
      if (this.type === 'month') {
        this.tableDate = `${value}`;
      } else {
        this.tableDate = `${value}-${pad((this.tableMonth || 0) + 1)}`;
      }
      this.internalActivePicker = 'MONTH';
      if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
        this.$emit('input', this.inputDate);
      }
    },
    monthClick(value) {
      const [year, month] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      if (this.type === 'date') {
        if (this.inputDay) {
          this.inputDay = Math.min(this.inputDay, Object(timestamp["i" /* daysInMonth */])(this.inputYear, this.inputMonth + 1));
        }
        this.tableDate = value;
        this.internalActivePicker = 'DATE';
        if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
          this.$emit('input', this.inputDate);
        }
      } else {
        this.emitInput(this.inputDate);
      }
    },
    dateClick(value) {
      const [year, month, day] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      this.inputDay = parseInt(day, 10);
      this.emitInput(this.inputDate);
    },
    genPickerTitle() {
      return this.$createElement(VDatePicker_VDatePickerTitle, {
        props: {
          date: this.value ? this.formatters.titleDate(this.isMultiple ? this.multipleValue : this.value) : '',
          disabled: this.disabled,
          readonly: this.readonly,
          selectingYear: this.internalActivePicker === 'YEAR',
          year: this.formatters.year(this.multipleValue.length ? `${this.inputYear}` : this.tableDate),
          yearIcon: this.yearIcon,
          value: this.multipleValue[0]
        },
        slot: 'title',
        on: {
          'update:selecting-year': value => this.internalActivePicker = value ? 'YEAR' : this.type.toUpperCase()
        }
      });
    },
    genTableHeader() {
      return this.$createElement(VDatePicker_VDatePickerHeader, {
        props: {
          nextIcon: this.nextIcon,
          color: this.color,
          dark: this.dark,
          disabled: this.disabled,
          format: this.headerDateFormat,
          light: this.light,
          locale: this.locale,
          min: this.internalActivePicker === 'DATE' ? this.minMonth : this.minYear,
          max: this.internalActivePicker === 'DATE' ? this.maxMonth : this.maxYear,
          nextAriaLabel: this.internalActivePicker === 'DATE' ? this.nextMonthAriaLabel : this.nextYearAriaLabel,
          prevAriaLabel: this.internalActivePicker === 'DATE' ? this.prevMonthAriaLabel : this.prevYearAriaLabel,
          prevIcon: this.prevIcon,
          readonly: this.readonly,
          value: this.internalActivePicker === 'DATE' ? `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}` : `${pad(this.tableYear, 4)}`
        },
        on: {
          toggle: () => this.internalActivePicker = this.internalActivePicker === 'DATE' ? 'MONTH' : 'YEAR',
          input: value => this.tableDate = value
        }
      });
    },
    genDateTable() {
      return this.$createElement(VDatePickerDateTable, {
        props: {
          allowedDates: this.allowedDates,
          color: this.color,
          current: this.current,
          dark: this.dark,
          disabled: this.disabled,
          events: this.events,
          eventColor: this.eventColor,
          firstDayOfWeek: this.firstDayOfWeek,
          format: this.dayFormat,
          light: this.light,
          locale: this.locale,
          localeFirstDayOfYear: this.localeFirstDayOfYear,
          min: this.min,
          max: this.max,
          range: this.range,
          readonly: this.readonly,
          scrollable: this.scrollable,
          showAdjacentMonths: this.showAdjacentMonths,
          showWeek: this.showWeek,
          tableDate: `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}`,
          value: this.value,
          weekdayFormat: this.weekdayFormat
        },
        ref: 'table',
        on: {
          input: this.dateClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':date')
        }
      });
    },
    genMonthTable() {
      return this.$createElement(VDatePickerMonthTable, {
        props: {
          allowedDates: this.type === 'month' ? this.allowedDates : null,
          color: this.color,
          current: this.current ? sanitizeDateString(this.current, 'month') : null,
          dark: this.dark,
          disabled: this.disabled,
          events: this.type === 'month' ? this.events : null,
          eventColor: this.type === 'month' ? this.eventColor : null,
          format: this.monthFormat,
          light: this.light,
          locale: this.locale,
          min: this.minMonth,
          max: this.maxMonth,
          range: this.range,
          readonly: this.readonly && this.type === 'month',
          scrollable: this.scrollable,
          value: this.selectedMonths,
          tableDate: `${pad(this.tableYear, 4)}`
        },
        ref: 'table',
        on: {
          input: this.monthClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':month')
        }
      });
    },
    genYears() {
      return this.$createElement(VDatePicker_VDatePickerYears, {
        props: {
          color: this.color,
          format: this.yearFormat,
          locale: this.locale,
          min: this.minYear,
          max: this.maxYear,
          value: this.tableYear
        },
        on: {
          input: this.yearClick,
          ...createItemTypeListeners(this, ':year')
        }
      });
    },
    genPickerBody() {
      const children = this.internalActivePicker === 'YEAR' ? [this.genYears()] : [this.genTableHeader(), this.internalActivePicker === 'DATE' ? this.genDateTable() : this.genMonthTable()];
      return this.$createElement('div', {
        key: this.internalActivePicker
      }, children);
    },
    setInputDate() {
      if (this.lastValue) {
        const array = this.lastValue.split('-');
        this.inputYear = parseInt(array[0], 10);
        this.inputMonth = parseInt(array[1], 10) - 1;
        if (this.type === 'date') {
          this.inputDay = parseInt(array[2], 10);
        }
      } else {
        this.inputYear = this.inputYear || this.now.getFullYear();
        this.inputMonth = this.inputMonth == null ? this.inputMonth : this.now.getMonth();
        this.inputDay = this.inputDay || this.now.getDate();
      }
    }
  },
  render() {
    return this.genPicker('v-picker--date');
  }
}));

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(488);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("89a841e4", content, true, context)
};

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(507);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("33c9f604", content, true, context)
};

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=template&id=99e2760e&scoped=true&



var settlementVouchervue_type_template_id_99e2760e_scoped_true_render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$minis, _vm$voucherData$proce, _vm$voucherData$proce2, _vm$voucherData$check;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showPrintDialog ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-99e2760e>", "</div>", [_vm._ssrNode("<div class=\"modal-content\" data-v-99e2760e>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-99e2760e><h3 data-v-99e2760e>ພິມໃບຮັບເງິນ</h3> <button class=\"close-btn\" data-v-99e2760e><i class=\"fas fa-times\" data-v-99e2760e></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-99e2760e>", "</div>", [_vm._ssrNode("<div id=\"voucher-print\" class=\"voucher-container\" data-v-99e2760e>", "</div>", [_vm._ssrNode("<div class=\"voucher-header\" data-v-99e2760e><div class=\"company-info\" data-v-99e2760e><div class=\"company-name\" data-v-99e2760e><img" + _vm._ssrAttr("src", __webpack_require__(167)) + " alt=\"Ministry Logo\" class=\"voucher-logo-gov\" data-v-99e2760e></div> <div class=\"company-name\" data-v-99e2760e>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-99e2760e>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div></div></div> "), _c(VRow["a" /* default */], {
    staticClass: "ministry-voucher-section",
    attrs: {
      "align": "end",
      "justify": "space-between",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-start pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('img', {
    staticClass: "voucher-logo",
    attrs: {
      "src": __webpack_require__(166),
      "alt": "Ministry Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ກົມແຜນການ ແລະ ການເງິນ")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ພະແນກຄຸ້ມຄອງລາຍຮັບ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-end pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "number-box"
  }, [_c('span', {
    staticClass: "number-label"
  }, [_vm._v("No")]), _vm._v(" "), _c('span', {
    staticClass: "number-value"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatVoucherNumber(_vm.voucherData.id)) + "\n                ")])])])], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "ministry-voucher-section",
    attrs: {
      "align": "end",
      "justify": "space-between",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-start pa-0",
    attrs: {
      "cols": "6"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-end pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "voucher-title"
  }, [_c('span', {
    staticClass: "label",
    staticStyle: {
      "font-size": "14px !important"
    }
  }, [_vm._v("ນະຄອນຫຼວງວຽງຈັນ ວັນທີ")]), _vm._v(" "), _c('span', {
    staticClass: "dotted-line"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatDateLao(_vm.voucherData.bookingDate)) + "\n                ")])])])], 1), _vm._ssrNode(" <div class=\"voucher-title-main\" data-v-99e2760e>ໃບຮັບເງິນ</div> <div class=\"voucher-details\" data-v-99e2760e><div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ອີງຕາມ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRef || '')) + "</span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ສະບັບ ເລກທີ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRefNo || '')) + "</span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ພະແນກຄັງເງິນສົດໄດ້ຮັບເງິນ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cash') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ສົດ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cheque') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ເຊັກ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'bank_transfer') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ໂອນທະນາຄານ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ກີບ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ບາດ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ໂດລາ </span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ຈຳນວນເງິນ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount)) + "\n                " + _vm._s(_vm.getCurrencyWord((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.code))) + "</span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ຂຽນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.code))) + "</span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ຈາກທ່ານ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.fromPersonName || '')) + "</span> <span class=\"label\" data-v-99e2760e>ຊື່ງແມ່ນພະນັກງານສັງກັດຢູ່</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$minis = _vm.voucherData.ministry) === null || _vm$voucherData$minis === void 0 ? void 0 : _vm$voucherData$minis.ministryName) || '')) + "</span></div> " + (_vm.voucherData.method === 'bank_transfer' && _vm.voucherData.bankAccount ? "<div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ບັນຊີທະນາຄານ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.bankAccount.bankName)) + "</span> <span class=\"label\" data-v-99e2760e>ເລກບັນຊີ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.bankAccount.accountNumber)) + "</span></div>" : "<!---->") + " " + (_vm.voucherData.method === 'cheque' && _vm.voucherData.chequeNo ? "<div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ເລກເຊັກ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo)) + "</span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-99e2760e><span class=\"dotted-line\" data-v-99e2760e></span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ເນື້ອໃນລາຍຮັບ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.notes || _vm.voucherData.purpose || 'ບໍ່ມີຫມາຍເຫດ')) + "</span></div> " + (_vm.voucherData.moneyAdvance ? "<div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ</span> <span class=\"value\" data-v-99e2760e>" + _vm._ssrEscape("#" + _vm._s(_vm.voucherData.moneyAdvance.id)) + "</span> <span class=\"label\" data-v-99e2760e>ຈຳນວນ</span> <span class=\"value\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.moneyAdvance.amount)) + "\n              ") + "</span> <span class=\"dotted-line\" data-v-99e2760e></span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-99e2760e><span class=\"dotted-line\" data-v-99e2760e></span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"dotted-line\" data-v-99e2760e></span></div></div> <div class=\"voucher-title-main\" data-v-99e2760e>\n            ດັ່ງນັ້ນ ຈິ່ງໄດ້ພ້ອມກັນລົງລາຍເຊັນ ຢັ້ງຢືນໄວ້ເປັນຫຫຼັກຖານ\n          </div> <div class=\"signature-section\" data-v-99e2760e><div class=\"signature-box\" data-v-99e2760e><div class=\"signature-title\" data-v-99e2760e>ພະແນກຄຸ້ມຄອງລາຍຮັບ</div> <div class=\"signature-name\" data-v-99e2760e></div></div> <div class=\"signature-box\" data-v-99e2760e><div class=\"signature-title\" data-v-99e2760e>ຜູ້ຮັບ</div> <div class=\"signature-name\" data-v-99e2760e>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$proce = _vm.voucherData.proceeder) === null || _vm$voucherData$proce === void 0 ? void 0 : _vm$voucherData$proce.cus_name) || ((_vm$voucherData$proce2 = _vm.voucherData.proceeder) === null || _vm$voucherData$proce2 === void 0 ? void 0 : _vm$voucherData$proce2.name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-99e2760e><div class=\"signature-title\" data-v-99e2760e>ຜູ້ມອບ</div> <div class=\"signature-name\" data-v-99e2760e>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.fromPersonName || ((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-99e2760e><button class=\"btn btn-secondary\" data-v-99e2760e><i class=\"fas fa-times\" data-v-99e2760e></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-99e2760e><i class=\"fas fa-print\" data-v-99e2760e></i>\n          ພິມ\n        </button></div>")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=template&id=99e2760e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settlementVouchervue_type_script_lang_js_ = ({
  name: 'SettlementVoucherPrintComponent',
  props: {
    voucherData: {
      type: Object,
      default: () => ({
        id: 5,
        amount: 4000000,
        purpose: 'Settlement payment',
        notes: '',
        method: 'cash',
        status: 'completed',
        bookingDate: '2025-01-20T00:00:00.000Z',
        settlementDate: '2025-01-20T00:00:00.000Z',
        createdAt: '2025-01-20T15:12:51.000Z',
        updateTimestamp: '2025-01-20T15:12:51.000Z',
        exchangeRate: 1,
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: '',
        proceeder: {
          id: 2,
          cus_id: 1001,
          cus_name: 'CASHIER01',
          name: 'CASHIER01'
        },
        checker: null,
        updateUser: null,
        currency: {
          id: 5,
          code: 'USD',
          name: 'US Dollar',
          currencyName: 'US Dollar',
          rate: 1,
          isActive: true,
          isLocalCCY: false
        },
        bankAccount: null,
        ministry: null,
        chartAccount: null,
        moneyAdvance: null
      })
    }
  },
  data() {
    return {
      showPrintDialog: false
    };
  },
  watch: {
    voucherData: {
      handler(newValue) {
        if (newValue && newValue.id) {
          this.showPrintDialog = true;
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    openPrintDialog() {
      this.showPrintDialog = true;
    },
    closePrintDialog() {
      this.showPrintDialog = false;
      this.$emit('close');
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0');
    },
    formatDate(dateString) {
      if (!dateString) return {
        day: '',
        month: '',
        year: ''
      };
      const date = new Date(dateString);
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      };
    },
    formatDateLao(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    formatTime(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    },
    formatAmount(amount) {
      if (!amount) return '0';
      return new Intl.NumberFormat('en-US').format(amount);
    },
    getCurrencyWord(currencyCode) {
      let result = '';
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ';
          break;
        case 'USD':
          result += ' ໂດລາ';
          break;
        case 'THB':
          result += ' ບາດ';
          break;
        default:
          result += 'ກີບ';
      }
      return result;
    },
    formatExchangeRate(rate) {
      if (!rate || rate === 1) return '1.0000';
      return parseFloat(rate).toFixed(4);
    },
    getPaymentMethodText(method) {
      const methodTexts = {
        cash: 'ເງິນສົດ',
        cheque: 'ເຊັກ',
        bank_transfer: 'ໂອນຜ່ານທະນາຄານ',
        deduction: 'ຫັກລົບ'
      };
      return methodTexts[method] || method || 'N/A';
    },
    convertToWords(amount, currencyCode) {
      if (!amount) return '';
      const numbers = ['', 'ໜຶ່ງ', 'ສອງ', 'ສາມ', 'ສີ່', 'ຫ້າ', 'ຫົກ', 'ເຈັດ', 'ແປດ', 'ເກົ້າ'];

      // Convert number to string and process
      const amountStr = amount.toString();
      const length = amountStr.length;
      if (length > 10) {
        // For very large numbers (over 10 billion), just return formatted number
        return this.formatAmount(amount) + ' ' + (currencyCode || '');
      }
      let result = '';

      // Helper function to convert a 3-digit group
      const convertThreeDigits = num => {
        let text = '';
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;
        const tens = Math.floor(remainder / 10);
        const ones = remainder % 10;

        // Hundreds place
        if (hundreds > 0) {
          text += numbers[hundreds] + 'ຮ້ອຍ';
        }

        // Tens and ones place
        if (remainder === 20) {
          // Special case: 20 = ຊາວ
          text += 'ຊາວ';
        } else if (tens >= 2) {
          // 30, 40, 50, etc.
          text += numbers[tens] + 'ສິບ';
          if (ones > 0) {
            text += numbers[ones];
          }
        } else if (tens === 1) {
          // 10-19
          text += 'ສິບ';
          if (ones > 0) {
            text += numbers[ones];
          }
        } else if (ones > 0) {
          // 1-9
          text += numbers[ones];
        }
        return text;
      };

      // Convert based on number size
      if (length <= 3) {
        // 1 - 999
        result = convertThreeDigits(amount);
      } else if (length <= 6) {
        // 1,000 - 999,999
        if (amount >= 100000) {
          // Handle ແສນ (100,000) unit for 100,000 - 999,999
          const saen = Math.floor(amount / 100000);
          const remainder = amount % 100000;
          if (saen === 10) {
            // Special case: 1,000,000 should be handled in millions section
            // This shouldn't happen in this range, but keeping for safety
            result = 'ສິບແສນ';
          } else {
            result = numbers[saen] + 'ແສນ';
          }
          if (remainder > 0) {
            if (remainder >= 1000) {
              const thousands = Math.floor(remainder / 1000);
              const finalRemainder = remainder % 1000;
              if (thousands === 10) {
                result += 'ສິບພັນ';
              } else if (thousands === 20) {
                result += 'ຊາວພັນ';
              } else {
                result += convertThreeDigits(thousands) + 'ພັນ';
              }
              if (finalRemainder > 0) {
                result += convertThreeDigits(finalRemainder);
              }
            } else {
              result += convertThreeDigits(remainder);
            }
          }
        } else {
          // Handle ພັນ (1,000) unit for 1,000 - 99,999
          const thousands = Math.floor(amount / 1000);
          const remainder = amount % 1000;
          if (thousands === 10) {
            // Special case: 10,000 = ສິບພັນ
            result = 'ສິບພັນ';
          } else if (thousands === 20) {
            // Special case: 20,000 = ຊາວພັນ
            result = 'ຊາວພັນ';
          } else {
            result = convertThreeDigits(thousands) + 'ພັນ';
          }
          if (remainder > 0) {
            result += convertThreeDigits(remainder);
          }
        }
      } else if (length <= 9) {
        // 1,000,000 - 999,999,999 (millions)
        const millions = Math.floor(amount / 1000000);
        const remainder = amount % 1000000;

        // Handle millions part
        if (millions === 10) {
          result = 'ສິບລ້ານ';
        } else if (millions === 20) {
          result = 'ຊາວລ້ານ';
        } else {
          result = convertThreeDigits(millions) + 'ລ້ານ';
        }

        // Handle remainder (saen, thousands and hundreds)
        if (remainder > 0) {
          if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000);
            const saenRemainder = remainder % 100000;
            result += numbers[saen] + 'ແສນ';
            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000);
                const finalRemainder = saenRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(saenRemainder);
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000);
            const finalRemainder = remainder % 1000;
            if (thousands === 10) {
              result += 'ສິບພັນ';
            } else if (thousands === 20) {
              result += 'ຊາວພັນ';
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ';
            }
            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder);
            }
          } else {
            result += convertThreeDigits(remainder);
          }
        }
      } else if (length <= 10) {
        // 1,000,000,000 - 9,999,999,999 (billions)
        const billions = Math.floor(amount / 1000000000);
        const remainder = amount % 1000000000;

        // Handle billions part
        result = numbers[billions] + 'ພັນລ້ານ';

        // Handle remainder (millions, saen, thousands, hundreds)
        if (remainder > 0) {
          if (remainder >= 1000000) {
            const millions = Math.floor(remainder / 1000000);
            const millionRemainder = remainder % 1000000;
            if (millions === 10) {
              result += 'ສິບລ້ານ';
            } else if (millions === 20) {
              result += 'ຊາວລ້ານ';
            } else {
              result += convertThreeDigits(millions) + 'ລ້ານ';
            }
            if (millionRemainder > 0) {
              if (millionRemainder >= 100000) {
                // Handle ແສນ unit in remainder
                const saen = Math.floor(millionRemainder / 100000);
                const saenRemainder = millionRemainder % 100000;
                result += numbers[saen] + 'ແສນ';
                if (saenRemainder > 0) {
                  if (saenRemainder >= 1000) {
                    const thousands = Math.floor(saenRemainder / 1000);
                    const finalRemainder = saenRemainder % 1000;
                    if (thousands === 10) {
                      result += 'ສິບພັນ';
                    } else if (thousands === 20) {
                      result += 'ຊາວພັນ';
                    } else {
                      result += convertThreeDigits(thousands) + 'ພັນ';
                    }
                    if (finalRemainder > 0) {
                      result += convertThreeDigits(finalRemainder);
                    }
                  } else {
                    result += convertThreeDigits(saenRemainder);
                  }
                }
              } else if (millionRemainder >= 1000) {
                const thousands = Math.floor(millionRemainder / 1000);
                const finalRemainder = millionRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(millionRemainder);
              }
            }
          } else if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000);
            const saenRemainder = remainder % 100000;
            result += numbers[saen] + 'ແສນ';
            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000);
                const finalRemainder = saenRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(saenRemainder);
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000);
            const finalRemainder = remainder % 1000;
            if (thousands === 10) {
              result += 'ສິບພັນ';
            } else if (thousands === 20) {
              result += 'ຊາວພັນ';
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ';
            }
            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder);
            }
          } else {
            result += convertThreeDigits(remainder);
          }
        }
      }

      // Add currency
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ';
          break;
        case 'USD':
          result += ' ໂດລາ';
          break;
        case 'THB':
          result += ' ບາດ';
          break;
        default:
          result += currencyCode ? ' ' + currencyCode : '';
      }
      return result;
    },
    printVoucher() {
      // Clone the voucher content to avoid modifying the original
      const voucherElement = this.$refs.voucherContent.cloneNode(true);

      // Get all checkboxes in the cloned element
      const checkboxes = voucherElement.querySelectorAll('input[type="checkbox"]');

      // Manually set the checked state based on data
      checkboxes.forEach((checkbox, index) => {
        let shouldBeChecked = false;

        // The checkboxes appear in this order: cash, cheque, bank_transfer, LAK, THB, USD
        if (index === 0) {
          // First checkbox - Cash
          shouldBeChecked = this.voucherData.method === 'cash';
        } else if (index === 1) {
          // Second checkbox - Cheque
          shouldBeChecked = this.voucherData.method === 'cheque';
        } else if (index === 2) {
          // Third checkbox - Bank Transfer
          shouldBeChecked = this.voucherData.method === 'bank_transfer';
        } else if (index === 3) {
          var _this$voucherData$cur;
          // Fourth checkbox - LAK (ກີບ)
          shouldBeChecked = ((_this$voucherData$cur = this.voucherData.currency) === null || _this$voucherData$cur === void 0 ? void 0 : _this$voucherData$cur.code) === 'LAK';
        } else if (index === 4) {
          var _this$voucherData$cur2;
          // Fifth checkbox - THB (ບາດ)
          shouldBeChecked = ((_this$voucherData$cur2 = this.voucherData.currency) === null || _this$voucherData$cur2 === void 0 ? void 0 : _this$voucherData$cur2.code) === 'THB';
        } else if (index === 5) {
          var _this$voucherData$cur3;
          // Sixth checkbox - USD (ໂດລາ)
          shouldBeChecked = ((_this$voucherData$cur3 = this.voucherData.currency) === null || _this$voucherData$cur3 === void 0 ? void 0 : _this$voucherData$cur3.code) === 'USD';
        }

        // Set the checked attribute
        if (shouldBeChecked) {
          checkbox.setAttribute('checked', 'checked');
          checkbox.checked = true;
        } else {
          checkbox.removeAttribute('checked');
          checkbox.checked = false;
        }
      });

      // Get the processed HTML content
      const printContent = voucherElement.innerHTML;
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      printWindow.document.write(`
    <html>
      <head>
        <title>ໃບຮັບເງິນ - Settlement Receipt</title>
        <style>
          body { 
            font-family: 'Phetsarath OT', 'Noto Sans Lao', Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            line-height: 1.4;
            font-weight: bold !important;
          }

          * {
            font-weight: bold !important;
          }

          .voucher-logo {
            width: 110px;
            height: 110px;
            object-fit: contain;
            margin-bottom: 1px !important;
            line-height: 1 !important;
          }
          .voucher-logo-gov {
            max-width: 80px;
            max-height: 80px;
            width: auto;
            height: auto;
            object-fit: contain;
            margin-top: 30px !important;
            margin-bottom: 4px !important;
            line-height: 1 !important;
          }
          .voucher-container { 
            border: 2px solid #000; 
            padding: 15px; 
            font-size: 12px; 
            line-height: 1.4; 
            max-width: 210mm;
            margin: 0 auto;
            font-weight: bold;
          }
          .voucher-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: flex-start; 
            margin-bottom: 10px; 
            padding-bottom: 5px; 
          }
          .ministry-voucher-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 0 !important;
            padding: 0 !important;
            margin-bottom: 10px !important;
          }
          .ministry-voucher-section .col,
          .ministry-voucher-section > div {
            padding: 0 !important;
            margin: 0 !important;
          }
          .voucher-title {
            font-size: 16px !important;
            margin: 0 !important;
            margin-bottom: 2px !important;
            line-height: 1.2 !important;
            text-align: left;
            text-decoration: none;
            font-weight: bold !important;
          }
          .voucher-title-main {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin: 20px 0;
            text-decoration: underline;
          }
          .company-info { 
            flex: 1; 
            text-align: center; 
          }
          .company-name { 
            font-weight: bold !important; 
            font-size: 14px; 
            margin-bottom: 3px; 
          }
          .department { 
            font-size: 12px; 
            margin-bottom: 3px; 
            font-weight: bold !important;
          }
          .sub-department { 
            font-size: 10px; 
            margin-bottom: 10px; 
            font-weight: bold !important;
          }
          .amount-line { 
            font-size: 10px; 
            letter-spacing: 2px; 
            font-weight: bold !important;
          }
          .number-box { 
            border: 2px solid #000; 
            padding: 5px 8px; 
            text-align: center; 
            background: #f9f9f9; 
            margin-bottom: 5px;
          }
          .number-label { 
            font-weight: bold !important; 
            margin-right: 10px; 
          }
          .number-value { 
            font-weight: bold !important; 
            color: #d32f2f;
          }
          .detail-row { 
            display: flex; 
            align-items: center; 
            margin-bottom: 8px; 
            min-height: 20px; 
          }
          .label { 
            font-weight: bold !important; 
            margin-right: 8px; 
            white-space: nowrap; 
          }
          .value { 
            margin-right: 15px; 
            border-bottom: 1px solid #000; 
            min-width: 35px; 
            text-align: center; 
            padding: 1px 3px; 
            font-weight: bold !important;
          }
          .dotted-line { 
            flex: 1; 
            border-bottom: 1px dotted #000; 
            margin: 0 8px; 
            min-height: 18px; 
            padding: 1px 3px; 
            font-weight: bold !important;
          }
          .currency-options { 
            display: flex; 
            gap: 15px; 
            margin-left: 8px; 
          }
          .currency-options label { 
            display: flex; 
            align-items: center; 
            gap: 3px; 
            font-weight: bold !important; 
          }
          .amount-display { 
            font-weight: bold !important; 
            font-size: 14px; 
            margin: 0 8px; 
            color: #d32f2f;
          }
          .amount-words { 
            flex: 1; 
            border-bottom: 1px solid #000; 
            margin-left: 8px; 
            padding: 1px 8px; 
            font-style: italic; 
            font-weight: bold !important;
          }
          .signature-section { 
            display: flex; 
            justify-content: space-between; 
            margin-top: 30px; 
            gap: 8px; 
          }
          .signature-box { 
            flex: 1; 
            text-align: center; 
          }
          .signature-title { 
            font-size: 14px; 
            margin-bottom: 25px;
            margin-bottom: 100px; 
            font-weight: bold !important; 
          }
          .signature-name { 
            font-size: 14px; 
            margin-top: 5px; 
            font-weight: bold !important; 
          }

          /* Ensure checkboxes are visible and properly styled */
          input[type="checkbox"] {
            width: 14px;
            height: 14px;
            margin-right: 4px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Force checkbox states to be visible in print */
          input[type="checkbox"]:checked {
            accent-color: black;
          }

          @media print {
            input[type="checkbox"] {
              -webkit-appearance: checkbox;
              appearance: checkbox;
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
      printWindow.print();
      printWindow.close();
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementVouchervue_type_script_lang_js_ = (settlementVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(487)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementVouchervue_type_script_lang_js_,
  settlementVouchervue_type_template_id_99e2760e_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "99e2760e",
  "42cd2c00"
  
)

/* harmony default export */ var settlementVoucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(466);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".voucher-logo[data-v-99e2760e]{height:110px;line-height:1!important;margin-bottom:1px!important;-o-object-fit:contain;object-fit:contain;width:110px}.voucher-logo-gov[data-v-99e2760e]{height:auto;line-height:1!important;margin-bottom:4px!important;margin-top:40px!important;max-height:80px;max-width:80px;-o-object-fit:contain;object-fit:contain;width:auto}.modal-overlay[data-v-99e2760e]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-99e2760e]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-99e2760e]{align-items:center;border-bottom:1px solid #eee;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-99e2760e]{color:#333;margin:0}.close-btn[data-v-99e2760e]{background:none;border:none;color:#666;cursor:pointer;font-size:18px}.close-btn[data-v-99e2760e]:hover{color:#333}.modal-body[data-v-99e2760e]{padding:20px}.modal-footer[data-v-99e2760e]{border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-99e2760e]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-99e2760e]{background:#007bff;color:#fff}.btn-primary[data-v-99e2760e]:hover{background:#0056b3}.btn-secondary[data-v-99e2760e]{background:#6c757d;color:#fff}.btn-secondary[data-v-99e2760e]:hover{background:#545b62}.voucher-container[data-v-99e2760e]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;font-weight:700;line-height:1.3;margin:0 auto;max-width:700px;padding:15px;width:100%}.voucher-container *[data-v-99e2760e]{font-weight:700!important}.voucher-header[data-v-99e2760e]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:10px;padding-bottom:5px}.ministry-voucher-section[data-v-99e2760e]{margin:0 0 10px!important;padding:0!important}.ministry-voucher-section .col[data-v-99e2760e],.ministry-voucher-section .v-col[data-v-99e2760e]{margin:0!important;padding:0!important}.row[data-v-99e2760e]{margin:0!important}.col[data-v-99e2760e]{padding:0!important}.company-info[data-v-99e2760e]{flex:1;text-align:center}.company-name[data-v-99e2760e]{font-size:16px;margin-bottom:3px}.company-name[data-v-99e2760e],.department[data-v-99e2760e]{font-weight:700!important}.department[data-v-99e2760e]{font-size:14px;margin-bottom:3px}.sub-department[data-v-99e2760e]{font-size:12px;margin-bottom:8px}.amount-line[data-v-99e2760e],.sub-department[data-v-99e2760e]{font-weight:700!important}.amount-line[data-v-99e2760e]{font-size:12px;letter-spacing:2px}.number-box[data-v-99e2760e]{background:#f9f9f9;border:2px solid #333;margin-bottom:5px;padding:6px 10px;text-align:center}.number-label[data-v-99e2760e]{margin-right:8px}.number-label[data-v-99e2760e],.number-value[data-v-99e2760e]{font-weight:700!important}.number-value[data-v-99e2760e]{color:#d32f2f}.voucher-title[data-v-99e2760e]{font-size:18px;font-weight:700!important;margin:15px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-title[data-v-99e2760e]:not(.voucher-container>.voucher-title){font-size:16px!important;font-weight:700!important;line-height:1.2!important;margin:0 0 2px!important;text-align:left!important;-webkit-text-decoration:none!important;text-decoration:none!important}.voucher-title-main[data-v-99e2760e]{font-size:18px;font-weight:700!important;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-details[data-v-99e2760e]{margin-bottom:25px}.detail-row[data-v-99e2760e]{align-items:center;display:flex;margin-bottom:10px;min-height:22px}.detail-row.description[data-v-99e2760e]{align-items:flex-start;flex-direction:column}.label[data-v-99e2760e]{margin-right:8px;white-space:nowrap}.label[data-v-99e2760e],.value[data-v-99e2760e]{font-weight:700!important}.value[data-v-99e2760e]{border-bottom:1px solid #333;margin-right:15px;min-width:35px;padding:2px 4px;text-align:center}.dotted-line[data-v-99e2760e]{border-bottom:1px dotted #333;flex:1;font-weight:700!important;margin:0 8px;min-height:18px;padding:2px 4px}.currency-options[data-v-99e2760e]{display:flex;gap:15px;margin-left:8px}.currency-options label[data-v-99e2760e]{align-items:center;display:flex;gap:4px}.amount-display[data-v-99e2760e],.currency-options label[data-v-99e2760e]{font-weight:700!important}.amount-display[data-v-99e2760e]{color:#d32f2f;font-size:16px;margin:0 8px}.description-content[data-v-99e2760e]{background:#fafafa;border:1px solid #333;margin-top:4px;min-height:50px;padding:8px;width:100%}.amount-words[data-v-99e2760e],.description-content[data-v-99e2760e]{font-weight:700!important}.amount-words[data-v-99e2760e]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:8px;padding:2px 8px}.signature-section[data-v-99e2760e]{display:flex;gap:8px;justify-content:space-between;margin-top:30px}.signature-box[data-v-99e2760e]{flex:1;text-align:center}.signature-title[data-v-99e2760e]{font-size:14px;font-weight:700!important;margin-bottom:100px}.signature-line[data-v-99e2760e]{border-bottom:1px solid #333;height:1px;margin-top:15px}.signature-name[data-v-99e2760e]{color:#666;font-size:14px;font-weight:700!important;margin-top:4px}@media print{*[data-v-99e2760e],.print-only[data-v-99e2760e],.print-only *[data-v-99e2760e],body *[data-v-99e2760e]{font-weight:700!important}.print-only[data-v-99e2760e],.print-only *[data-v-99e2760e]{visibility:visible}.print-only[data-v-99e2760e]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-99e2760e]{border:2px solid #000!important;font-size:12px!important;font-weight:700!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}}.print-only[data-v-99e2760e]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-99e2760e]{left:auto;position:static;top:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(559);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("08dd24f8", content, true, context)
};

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(477);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".compact-date-field[data-v-216c16b2]{font-size:13px!important}.compact-date-field .v-input__control[data-v-216c16b2],.compact-date-field .v-input__slot[data-v-216c16b2]{max-height:40px!important;min-height:40px!important}.compact-date-field .v-input__slot[data-v-216c16b2]{align-items:center!important;padding:0 12px!important}.compact-date-field .v-text-field__details[data-v-216c16b2]{display:none!important}.compact-date-field .v-input__icon--prepend-inner[data-v-216c16b2]{align-self:center!important;margin-right:8px!important;margin-top:0!important}.compact-date-field .v-input__icon--append[data-v-216c16b2]{align-self:center!important;margin-left:8px!important;margin-top:0!important}.compact-date-field .v-text-field__slot[data-v-216c16b2]{align-items:center!important;max-height:38px!important;min-height:38px!important}.compact-date-field input[data-v-216c16b2]{font-size:13px!important;height:38px!important;line-height:1.2!important;margin:0!important;padding:0!important}.compact-date-field .v-text-field--outlined .v-input__control .v-input__slot[data-v-216c16b2],.compact-date-field.v-text-field--outlined .v-input__control .v-input__slot[data-v-216c16b2]{background:#fafafa!important;border:2px solid #e5e7eb!important;border-radius:6px!important}.compact-date-field .v-text-field--outlined.v-input--is-focused .v-input__control .v-input__slot[data-v-216c16b2],.compact-date-field.v-input--is-focused .v-input__slot[data-v-216c16b2]{background:#fff!important;border-color:#667eea!important;box-shadow:0 0 0 2px rgba(102,126,234,.1)!important}.compact-date-field .v-text-field--outlined.v-input--is-disabled .v-input__control .v-input__slot[data-v-216c16b2],.compact-date-field.v-input--is-disabled .v-input__slot[data-v-216c16b2]{background-color:#f3f4f6!important;border-color:#d1d5db!important}.compact-date-field.error--text .v-text-field--outlined .v-input__control .v-input__slot[data-v-216c16b2]{border-color:#e74c3c!important}.compact-date-field .v-text-field--outlined fieldset[data-v-216c16b2]{border:none!important}.compact-date-field .v-text-field--outlined .v-text-field__details[data-v-216c16b2]{display:none!important}.v-menu__content[data-v-216c16b2]{border-radius:8px!important;box-shadow:0 8px 32px rgba(0,0,0,.12)!important;overflow:hidden!important}.v-date-picker[data-v-216c16b2]{box-shadow:none!important}.modal-header-right[data-v-216c16b2]{align-items:center;display:flex;gap:15px}.voucher-number[data-v-216c16b2]{color:#fff;font-size:14px;font-weight:600;opacity:.9}.modal-overlay[data-v-216c16b2]{align-items:center;animation:fadeIn-216c16b2 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.enhanced-dialog[data-v-216c16b2]{animation:slideIn-216c16b2 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);display:flex;flex-direction:column;height:95vh;margin:0 auto;max-height:95vh;max-width:95vw;overflow:hidden;width:95%}.modal-header[data-v-216c16b2]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;flex-shrink:0;justify-content:space-between;padding:16px 24px}.modal-title-section[data-v-216c16b2]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-216c16b2]{font-size:18px;opacity:.9}.modal-title[data-v-216c16b2]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-216c16b2]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;opacity:.8;padding:6px;transition:opacity .2s}.close-btn[data-v-216c16b2]:hover{background:hsla(0,0%,100%,.1);opacity:1}.close-btn[data-v-216c16b2]:disabled{cursor:not-allowed;opacity:.5}.modal-body[data-v-216c16b2]{flex:1;min-height:0;overflow-y:auto;padding:16px 24px}.form-loading[data-v-216c16b2]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-216c16b2]{animation:spin-216c16b2 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-216c16b2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid.compact[data-v-216c16b2]{grid-gap:12px;align-content:start;display:grid;gap:12px;grid-template-columns:repeat(4,1fr);height:100%}.form-group[data-v-216c16b2]{margin-bottom:0}.form-group.full-width[data-v-216c16b2]{grid-column:1/-1}.form-label[data-v-216c16b2]{align-items:center;color:#374151;display:flex;font-size:12px;font-weight:600;gap:6px;margin-bottom:4px}.form-label.required[data-v-216c16b2]:after{color:#e74c3c;content:\"*\";margin-left:2px}.form-label i[data-v-216c16b2]{color:#6b7280;font-size:10px}.form-control.compact[data-v-216c16b2]{background:#fafafa;border:2px solid #e5e7eb;border-radius:6px;box-sizing:border-box;font-size:13px;padding:8px 12px;transition:all .2s ease;width:100%}.form-control.compact[data-v-216c16b2]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}.form-control.compact[data-v-216c16b2]:disabled{background-color:#f3f4f6;border-color:#d1d5db;color:#6b7280;cursor:not-allowed}.form-control.is-invalid[data-v-216c16b2]{border-color:#e74c3c}.invalid-feedback[data-v-216c16b2]{color:#e74c3c;display:block;font-size:10px;margin-top:2px}.input-group.compact[data-v-216c16b2]{border-radius:6px;display:flex;overflow:hidden}.input-group.compact .form-control[data-v-216c16b2]{border-radius:0;border-right:none}.input-group-append[data-v-216c16b2]{display:flex}.input-group-text.compact[data-v-216c16b2]{background:#f8f9fa;border:2px solid #e5e7eb;border-left:none;color:#6b7280;font-size:12px;font-weight:600;padding:8px 12px}.custom-select-wrapper[data-v-216c16b2]{position:relative}.custom-select.compact[data-v-216c16b2]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:30px}.select-icon[data-v-216c16b2]{color:#6b7280;font-size:10px;pointer-events:none;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.link-advance-options.compact[data-v-216c16b2]{display:flex;gap:12px;margin-top:4px}.radio-option[data-v-216c16b2]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:12px;gap:4px}.radio-option input[type=radio][data-v-216c16b2]{margin:0;transform:scale(.8)}.radio-label[data-v-216c16b2]{font-weight:500}.compact-advance[data-v-216c16b2]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:1px solid #e2e8f0;border-radius:8px;margin:8px 0;padding:12px}.advance-toggle[data-v-216c16b2]{align-items:center;display:flex;justify-content:space-between;margin-bottom:8px}.advance-selection.compact[data-v-216c16b2]{margin-top:8px}.advance-selection-container.compact[data-v-216c16b2]{align-items:flex-start;display:flex;gap:8px;margin-bottom:8px}.flex-1[data-v-216c16b2]{flex:1}.btn.compact[data-v-216c16b2]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:6px 12px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-sm.compact[data-v-216c16b2]{font-size:11px;padding:4px 8px}.advance-info.compact[data-v-216c16b2]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:6px;margin-top:8px;padding:8px}.advance-summary[data-v-216c16b2]{align-items:center;display:flex;flex-wrap:wrap;font-size:11px;gap:8px}.advance-id[data-v-216c16b2]{background:#e2e8f0;color:#1e293b;font-family:\"Courier New\",monospace}.advance-amount[data-v-216c16b2],.advance-id[data-v-216c16b2]{border-radius:4px;font-size:10px;font-weight:700;padding:2px 6px}.advance-amount[data-v-216c16b2]{background:#d1fae5;color:#059669}.advance-purpose[data-v-216c16b2]{color:#6b7280;font-size:10px;font-style:italic}.status-badge[data-v-216c16b2]{border-radius:8px;font-size:9px;font-weight:600;letter-spacing:.3px;padding:2px 6px;text-transform:uppercase}.status-badge.pending[data-v-216c16b2]{background:#fef3c7;color:#92400e}.status-badge.approved[data-v-216c16b2]{background:#d1fae5;color:#065f46}.status-badge.settled[data-v-216c16b2]{background:#dbeafe;color:#1e40af}.field-hint[data-v-216c16b2]{align-items:center;display:flex;font-size:10px;gap:4px;justify-content:space-between;margin-top:4px}.field-hint.error[data-v-216c16b2]{color:#e74c3c}.field-hint.warning[data-v-216c16b2]{color:#f39c12}.field-hint.info[data-v-216c16b2]{color:#0ea5e9}.text-counter[data-v-216c16b2]{color:#9ca3af;font-size:9px;margin-left:auto}.form-errors.compact[data-v-216c16b2]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;margin-top:12px;padding:12px}.form-errors.compact h6[data-v-216c16b2]{align-items:center;color:#dc2626;display:flex;font-size:12px;gap:4px;margin:0 0 6px}.form-errors.compact ul[data-v-216c16b2]{color:#dc2626;font-size:11px;margin:0;padding-left:16px}.enhanced-footer.compact[data-v-216c16b2],.modal-footer.compact[data-v-216c16b2]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;flex-shrink:0;gap:8px;justify-content:flex-end;padding:12px 24px}.btn[data-v-216c16b2]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:13px;font-weight:600;gap:6px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-216c16b2]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-216c16b2]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-216c16b2]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-216c16b2]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-216c16b2]{background:transparent;border:2px solid #667eea;color:#667eea}.btn-outline-primary[data-v-216c16b2]:hover{background:#667eea;color:#fff}.btn[data-v-216c16b2]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-216c16b2]{animation:spin-216c16b2 1s linear infinite}.advance-filters.compact[data-v-216c16b2]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:12px;padding:12px}.filter-row.compact[data-v-216c16b2]{grid-gap:12px;align-items:center;display:grid;gap:12px;grid-template-columns:1fr auto}.advances-list.compact[data-v-216c16b2]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;max-height:300px;overflow-y:auto}.advance-items.compact[data-v-216c16b2]{display:flex;flex-direction:column;padding:8px}.advance-item.compact[data-v-216c16b2]{background:#fff;border:1px solid #e5e7eb;border-radius:6px;cursor:pointer;margin-bottom:8px;padding:12px;transition:all .2s ease}.advance-item.compact[data-v-216c16b2]:hover{background:#f0f9ff;border-color:#60a5fa}.advance-item.compact.selected[data-v-216c16b2]{background:#dbeafe;border-color:#3b82f6}.advance-item-content.compact[data-v-216c16b2]{display:flex;flex-direction:column;gap:8px}.advance-item-header.compact[data-v-216c16b2]{align-items:center;display:flex;justify-content:space-between}.advance-item-body.compact[data-v-216c16b2]{grid-gap:8px;display:grid;font-size:11px;gap:8px;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}.empty-state[data-v-216c16b2],.loading-state[data-v-216c16b2]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:40px}.empty-state i[data-v-216c16b2]{color:#ccc;font-size:48px;margin-bottom:16px}@media (max-width:1200px){.form-grid.compact[data-v-216c16b2]{grid-template-columns:repeat(3,1fr)}}@media (max-width:768px){.enhanced-dialog[data-v-216c16b2]{height:98vh;margin:1vh auto;max-height:98vh;width:98%}.form-grid.compact[data-v-216c16b2]{gap:8px;grid-template-columns:repeat(2,1fr)}.modal-body[data-v-216c16b2],.modal-header[data-v-216c16b2]{padding:12px 16px}.enhanced-footer.compact[data-v-216c16b2],.modal-footer.compact[data-v-216c16b2]{flex-direction:column-reverse;padding:12px 16px}.enhanced-footer.compact .btn[data-v-216c16b2],.modal-footer.compact .btn[data-v-216c16b2]{justify-content:center;width:100%}.compact-date-field .v-input__slot[data-v-216c16b2]{padding:0 8px!important}}@media (max-width:480px){.form-grid.compact[data-v-216c16b2]{grid-template-columns:1fr}.advance-toggle[data-v-216c16b2]{align-items:flex-start;gap:8px}.advance-selection-container.compact[data-v-216c16b2],.advance-toggle[data-v-216c16b2]{flex-direction:column}}@keyframes fadeIn-216c16b2{0%{opacity:0}to{opacity:1}}@keyframes slideIn-216c16b2{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js + 16 modules
var VDatePicker = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=template&id=216c16b2&scoped=true&




var settlementDialogvue_type_template_id_216c16b2_scoped_true_render = function render() {
  var _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.visible ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-216c16b2><div class=\"modal-title-section\" data-v-216c16b2><i class=\"fas fa-money-bill-wave modal-icon\" data-v-216c16b2></i> <h5 class=\"modal-title\" data-v-216c16b2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ລົງລາຍຮັບ ການຊຳລະ') + "\n          ") + "</h5></div> <div class=\"modal-header-right\" data-v-216c16b2><span class=\"voucher-number\" data-v-216c16b2>" + _vm._ssrEscape("\n            ເລກທີ:\n            " + _vm._s(_vm.formData.id ? _vm.formatVoucherNumber(_vm.formData.id) : '000000') + "\n          ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " class=\"close-btn\" data-v-216c16b2><i class=\"fas fa-times\" data-v-216c16b2></i></button></div></div> "), _vm._ssrNode("<form data-v-216c16b2>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-216c16b2>", "</div>", [_vm.loading || _vm.isSubmitting ? _vm._ssrNode("<div class=\"form-loading\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-216c16b2></div> <p data-v-216c16b2>" + _vm._ssrEscape("\n              " + _vm._s(_vm.isSubmitting ? 'ກຳລັງບັນທຶກຂໍ້ມູນ...' : 'ກຳລັງໂຫຼດຂໍ້ມູນ...') + "\n            ") + "</p>")], 2) : _vm._ssrNode("<div class=\"form-grid compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-calendar\" data-v-216c16b2></i>\n                ວັນທີລົງຊຳລະ\n              </label> "), _c(VMenu["a" /* default */], {
    ref: "bookingDateMenu",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto",
      "disabled": _vm.isFormDisabled
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          class: {
            'compact-date-field': true
          },
          attrs: {
            "outlined": "",
            "dense": "",
            "clearable": "",
            "hide-details": "",
            "prepend-inner-icon": "mdi-calendar",
            "error": !!_vm.errors.bookingDate,
            "error-messages": _vm.errors.bookingDate,
            "disabled": _vm.isFormDisabled
          },
          on: {
            "click:clear": _vm.clearBookingDate
          },
          model: {
            value: _vm.formattedBookingDate,
            callback: function ($$v) {
              _vm.formattedBookingDate = $$v;
            },
            expression: "formattedBookingDate"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }], null, false, 2723088033),
    model: {
      value: _vm.bookingDateMenu,
      callback: function ($$v) {
        _vm.bookingDateMenu = $$v;
      },
      expression: "bookingDateMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": "",
      "max": _vm.today,
      "disabled": _vm.isFormDisabled
    },
    on: {
      "input": _vm.setBookingDate
    },
    model: {
      value: _vm.pickerBookingDate,
      callback: function ($$v) {
        _vm.pickerBookingDate = $$v;
      },
      expression: "pickerBookingDate"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-credit-card\" data-v-216c16b2></i>\n                ວິທີການຊຳລະ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.method,
      expression: "formData.method"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.method
    },
    attrs: {
      "disabled": _vm.isFormDisabled,
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "method", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleMethodChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກວິທີການຊຳລະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ (Cash)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cheque"
    }
  }, [_vm._v("ເຊັກ (Cheque)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("\n                    ໂອນທະນາຄານ (Bank Transfer)\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "deduction"
    }
  }, [_vm._v("ຫັກລົບ (Deduction)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.method ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.method) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-hashtag\" data-v-216c16b2></i>\n                ອີງຕາມ\n              </label> <input type=\"text\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"ອີງຕາມ ການຕົກລົງ ເຫັນດີ...\" maxlength=\"50\"" + _vm._ssrAttr("value", _vm.formData.externalRef) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.externalRef
  }) + " data-v-216c16b2> " + (_vm.errors.externalRef ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.externalRef) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-hashtag\" data-v-216c16b2></i>\n                ເລກອ້າງອິງພາຍນອກ\n              </label> <input type=\"text\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"REF-001, TXN-123...\" maxlength=\"50\"" + _vm._ssrAttr("value", _vm.formData.externalRefNo) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.externalRefNo
  }) + " data-v-216c16b2> " + (_vm.errors.externalRefNo ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.externalRefNo) + "\n              ") + "</div>" : "<!---->") + "</div> " + (_vm.formData.method === 'cheque' ? "<div class=\"form-group\" data-v-216c16b2><label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-money-check\" data-v-216c16b2></i>\n                ເລກເຊັກ\n              </label> <input type=\"text\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"ໃສ່ເລກເຊັກ...\" maxlength=\"20\"" + _vm._ssrAttr("required", _vm.formData.method === 'cheque') + _vm._ssrAttr("value", _vm.formData.chequeNo) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.chequeNo
  }) + " data-v-216c16b2> " + (_vm.errors.chequeNo ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.chequeNo) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-coins\" data-v-216c16b2></i>\n                ສະກຸນເງິນ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.currencyId,
      expression: "formData.currencyId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.currencyId
    },
    attrs: {
      "disabled": _vm.isFormDisabled || _vm.isLinkedToAdvance,
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedCurrency]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n                    " + _vm._s(currency.code || currency.currencyCode) + " -\n                    " + _vm._s(currency.name || currency.currencyName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.currencyId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-216c16b2><label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-dollar-sign\" data-v-216c16b2></i>\n                ຈຳນວນເງິນ\n              </label> <div class=\"input-group compact\" data-v-216c16b2><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"0.00\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.amount) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.amount
  }) + " data-v-216c16b2> <div class=\"input-group-append\" data-v-216c16b2><span class=\"input-group-text compact\" data-v-216c16b2>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.selectedCurrencyCode) + "\n                  ") + "</span></div></div> " + (_vm.errors.amount ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.amount) + "\n              ") + "</div>" : "<!---->") + "</div> " + (_vm.formData.method === 'cash' || _vm.formData.method === 'cheque' ? "<div class=\"form-group\" data-v-216c16b2><label" + _vm._ssrClass("form-label", {
    required: _vm.formData.method === 'cash' || _vm.formData.method === 'cheque'
  }) + " data-v-216c16b2><i class=\"fas fa-user-circle\" data-v-216c16b2></i>\n                ຈາກທ່ານ (ຜູ້ຈ່າຍ)\n              </label> <input type=\"text\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"ຊື່ຜູ້ຈ່າຍເງິນ...\" maxlength=\"100\"" + _vm._ssrAttr("required", _vm.formData.method === 'cash' || _vm.formData.method === 'cheque') + _vm._ssrAttr("value", _vm.formData.fromPersonName) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.fromPersonName
  }) + " data-v-216c16b2> " + (_vm.errors.fromPersonName ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.fromPersonName) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-building\" data-v-216c16b2></i>\n                ສັງກັດຢູ່ (ກະຊວງ)\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ministryId,
      expression: "formData.ministryId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.ministryId
    },
    attrs: {
      "disabled": _vm.isFormDisabled
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedMinistry]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກະຊວງ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                    " + _vm._s(ministry.ministryCode) + " - " + _vm._s(ministry.ministryName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2)], 2), _vm._ssrNode(" "), _vm.formData.method === 'bank_transfer' ? _vm._ssrNode("<div class=\"form-group full-width\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-university\" data-v-216c16b2></i>\n                ບັນຊີທະນາຄານ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.bankAccountId,
      expression: "formData.bankAccountId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.bankAccountId
    },
    attrs: {
      "disabled": _vm.isFormDisabled,
      "required": _vm.formData.method === 'bank_transfer'
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedBankAccount]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີທະນາຄານ")]), _vm._v(" "), _vm._l(_vm.filteredBankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                    " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.bankAccountId ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.bankAccountId) + "\n              ") + "</div>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" <div class=\"form-group\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-exchange-alt\" data-v-216c16b2></i>\n                ອັດຕາແລກປ່ຽນ\n              </label> <div class=\"input-group compact\" data-v-216c16b2><input type=\"number\" step=\"0.0001\" min=\"0\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.formData.exchangeRate) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-216c16b2> <div class=\"input-group-append\" data-v-216c16b2><span class=\"input-group-text compact\" data-v-216c16b2><i class=\"fas fa-calculator\" data-v-216c16b2></i></span></div></div> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.exchangeRate) + "\n              ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-chart-line\" data-v-216c16b2></i>\n                ບັນຊີລວມ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.chartAccountId,
      expression: "formData.chartAccountId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.chartAccountId
    },
    attrs: {
      "disabled": _vm.isFormDisabled
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "chartAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີລວມ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.chartAccounts, function (chartAccount) {
    return _c('option', {
      key: chartAccount.id,
      domProps: {
        "value": chartAccount.id
      }
    }, [_vm._v("\n                    " + _vm._s(chartAccount.accountNumber) + " -\n                    " + _vm._s(chartAccount.accountName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-user\" data-v-216c16b2></i>\n                ຜູ້ລົງບັນຊີ (ຜູ້ຮັບ)\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.userId,
      expression: "formData.userId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.userId
    },
    attrs: {
      "disabled": true,
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "userId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ລົງບັນຊີ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                    " + _vm._s(user.cus_name || user.name || user.username) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.userId ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.userId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group full-width compact-advance\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"advance-toggle\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-link\" data-v-216c16b2></i>\n                  ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ\n                </label> <div class=\"link-advance-options compact\" data-v-216c16b2><label class=\"radio-option\" data-v-216c16b2><input type=\"radio\" value=\"false\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "false")) + " data-v-216c16b2> <span class=\"radio-label\" data-v-216c16b2>ບໍ່ເຊື່ອມຕໍ່</span></label> <label class=\"radio-option\" data-v-216c16b2><input type=\"radio\" value=\"true\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "true")) + " data-v-216c16b2> <span class=\"radio-label\" data-v-216c16b2>ເຊື່ອມຕໍ່</span></label></div></div> "), _vm.formData.linkToAdvance === 'true' ? _vm._ssrNode("<div class=\"advance-selection compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"advance-selection-container compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"custom-select-wrapper flex-1\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.moneyAdvanceId,
      expression: "formData.moneyAdvanceId"
    }],
    staticClass: "form-control custom-select compact",
    attrs: {
      "disabled": _vm.isFormDisabled
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "moneyAdvanceId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedAdvance]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກລາຍຈ່າຍລ່ວງໜ້າ")]), _vm._v(" "), _vm._l(_vm.availableAdvances, function (advance) {
    var _advance$ministry;
    return _c('option', {
      key: advance.id,
      domProps: {
        "value": advance.id
      }
    }, [_vm._v("\n                        #" + _vm._s(advance.id) + " - #" + _vm._s(advance.receiveName) + " - #" + _vm._s(((_advance$ministry = advance.ministry) === null || _advance$ministry === void 0 ? void 0 : _advance$ministry.ministryName) || '') + "\n                        -\n                        " + _vm._s(_vm.formatCurrency(advance.amount, advance.currency.code)) + "\n                      ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled || _vm.loadingAdvances) + " class=\"btn btn-outline-primary btn-sm compact\" data-v-216c16b2>" + (_vm.loadingAdvances ? "<i class=\"fas fa-spinner fa-spin\" data-v-216c16b2></i>" : "<i class=\"fas fa-search\" data-v-216c16b2></i>") + "</button>")], 2), _vm._ssrNode(" " + (_vm.selectedAdvance ? "<div class=\"advance-info compact\" data-v-216c16b2><div class=\"advance-summary\" data-v-216c16b2><span class=\"advance-id\" data-v-216c16b2>" + _vm._ssrEscape("#" + _vm._s(_vm.selectedAdvance.id)) + "</span> <span class=\"advance-amount\" data-v-216c16b2>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.selectedAdvance.amount, _vm.selectedAdvance.currency.code))) + "</span> <span class=\"advance-purpose\" data-v-216c16b2>" + _vm._ssrEscape(_vm._s(_vm.selectedAdvance.purpose || 'No purpose')) + "</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.selectedAdvance.status]) + " data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatStatus(_vm.selectedAdvance.status)) + "\n                    ") + "</span></div></div>" : "<!---->"))], 2) : _vm._e()], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-sticky-note\" data-v-216c16b2></i>\n                ເນື້ອໃນລາຍຮັບ (ໝາຍເຫດ)\n              </label> <textarea" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " rows=\"3\" placeholder=\"ເນື້ອໃນລາຍຮັບ / ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control compact\" data-v-216c16b2>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-216c16b2><span class=\"text-counter\" data-v-216c16b2>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors compact\" data-v-216c16b2><h6 data-v-216c16b2><i class=\"fas fa-exclamation-circle\" data-v-216c16b2></i>\n              ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດ:\n            </h6> <ul data-v-216c16b2>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-216c16b2>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer compact\" data-v-216c16b2><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " class=\"btn btn-secondary compact\" data-v-216c16b2><i class=\"fas fa-times\" data-v-216c16b2></i>\n            ຍົກເລີກ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled || !_vm.isFormValid) + " class=\"btn btn-primary compact\" data-v-216c16b2>" + (_vm.isSubmitting ? "<i class=\"fas fa-spinner fa-spin\" data-v-216c16b2></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-216c16b2></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.isSubmitting ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button> <button type=\"button\" title=\"Save & Print\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled || !_vm.isFormValid) + " class=\"btn btn-sm btn-outline-secondary\" data-v-216c16b2><i class=\"fas fa-print\" data-v-216c16b2></i>\n            Save &amp; Print\n          </button></div>")], 2)], 2), _vm._ssrNode(" "), _vm.showAdvanceBrowser ? _vm._ssrNode("<div class=\"modal-overlay browser-overlay\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog advance-browser-dialog\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-216c16b2><div class=\"modal-title-section\" data-v-216c16b2><i class=\"fas fa-search modal-icon\" data-v-216c16b2></i> <h5 class=\"modal-title\" data-v-216c16b2>ເລືອກລາຍຈ່າຍລ່ວງໜ້າ</h5></div> <button class=\"close-btn\" data-v-216c16b2><i class=\"fas fa-times\" data-v-216c16b2></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"advance-filters compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"filter-row compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-216c16b2><input type=\"text\" placeholder=\"ຄົ້ນຫາຕາມຈຸດປະສົງ, ໝາຍເຫດ...\"" + _vm._ssrAttr("value", _vm.advanceSearch.query) + " class=\"form-control compact\" data-v-216c16b2></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.advanceSearch.status,
      expression: "advanceSearch.status"
    }],
    staticClass: "form-control compact",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.advanceSearch, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.filterAdvances]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກສະຖານະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("ລໍຖ້າ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("ອະນຸມັດ")])])])], 2)]), _vm._ssrNode(" <div class=\"advances-list compact\" data-v-216c16b2>" + (_vm.loadingAdvances ? "<div class=\"loading-state\" data-v-216c16b2><div class=\"spinner-small\" data-v-216c16b2></div> <p data-v-216c16b2>ກຳລັງໂຫຼດ...</p></div>" : _vm.filteredAdvances.length === 0 ? "<div class=\"empty-state\" data-v-216c16b2><i class=\"fas fa-inbox\" data-v-216c16b2></i> <p data-v-216c16b2>ບໍ່ພົບລາຍຈ່າຍລ່ວງໜ້າ</p></div>" : "<div class=\"advance-items compact\" data-v-216c16b2>" + _vm._ssrList(_vm.filteredAdvances, function (advance) {
    var _vm$selectedAdvanceFo;
    return "<div" + _vm._ssrClass("advance-item compact", {
      selected: ((_vm$selectedAdvanceFo = _vm.selectedAdvanceForBrowser) === null || _vm$selectedAdvanceFo === void 0 ? void 0 : _vm$selectedAdvanceFo.id) === advance.id
    }) + " data-v-216c16b2><div class=\"advance-item-content compact\" data-v-216c16b2><div class=\"advance-item-header compact\" data-v-216c16b2><span class=\"advance-id\" data-v-216c16b2>" + _vm._ssrEscape("#" + _vm._s(advance.id)) + "</span> <span" + _vm._ssrClass(null, ['status-badge', advance.status]) + " data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatStatus(advance.status)) + "\n                    ") + "</span></div> <div class=\"advance-item-body compact\" data-v-216c16b2><div class=\"advance-amount\" data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatCurrency(advance.amount, advance.currency.code)) + "\n                    ") + "</div> <div class=\"advance-date\" data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatDate(advance.bookingDate)) + "\n                    ") + "</div> " + (advance.purpose ? "<div class=\"advance-purpose\" data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(advance.purpose) + "\n                    ") + "</div>" : "<!---->") + "</div></div></div>";
  }) + "</div>") + "</div>")], 2), _vm._ssrNode(" <div class=\"modal-footer compact\" data-v-216c16b2><button type=\"button\" class=\"btn btn-secondary compact\" data-v-216c16b2><i class=\"fas fa-times\" data-v-216c16b2></i>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.selectedAdvanceForBrowser) + " class=\"btn btn-primary compact\" data-v-216c16b2><i class=\"fas fa-check\" data-v-216c16b2></i>\n            ເລືອກ\n          </button></div>")], 2)]) : _vm._e()], 2) : _vm._e(), _vm._ssrNode(" "), _vm.showPrintVoucher && _vm.settlementDetail ? _c('VoucherPrintComponent', {
    key: _vm.settlementDetail.id,
    attrs: {
      "voucher-data": _vm.settlementDetail
    },
    on: {
      "close": _vm.closePrintVoucher
    }
  }) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=template&id=216c16b2&scoped=true&

// EXTERNAL MODULE: ./components/MA/settlementVoucher/index.vue + 4 modules
var settlementVoucher = __webpack_require__(486);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var settlementDialogvue_type_script_lang_js_ = ({
  name: 'SettlementDialog',
  components: {
    VoucherPrintComponent: settlementVoucher["default"]
  },
  props: {
    paymentMethod: {
      type: String,
      default: 'cash'
    },
    visible: {
      type: Boolean,
      default: false
    },
    settlement: {
      type: Object,
      default: null
    },
    outstandingInvoices: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    bankAccounts: {
      type: Array,
      default: () => []
    },
    ministries: {
      type: Array,
      default: () => []
    },
    chartAccounts: {
      type: Array,
      default: () => []
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  emits: ['close', 'save', 'created', 'updated'],
  data() {
    return {
      bookingDateMenu: false,
      pickerBookingDate: null,
      // for v-date-picker (YYYY-MM-DD format)
      formattedBookingDate: null,
      // for display (DD/MM/YYYY format)
      showPrintVoucher: false,
      settlementDetail: null,
      loading: false,
      isSubmitting: false,
      // New flag for submission state
      justCreated: false,
      // NEW: Flag to prevent form reset after creation
      loadingAdvances: false,
      showAdvanceBrowser: false,
      selectedAdvanceForBrowser: null,
      availableAdvances: [],
      filteredAdvances: [],
      advanceSearch: {
        query: '',
        status: ''
      },
      formData: {
        bookingDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: ''
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.settlement && this.settlement.id || this.formData.id && this.justCreated;
    },
    isLinkedToAdvance() {
      return this.formData.linkToAdvance === 'true' && this.formData.moneyAdvanceId;
    },
    isBaseCurrency() {
      return this.selectedCurrencyCode === 'LAK';
    },
    showEquivalentAmount() {
      return !this.isBaseCurrency && this.formData.amount > 0 && this.formData.exchangeRate > 0;
    },
    equivalentAmountLAK() {
      if (!this.showEquivalentAmount) return 0;
      return this.formData.amount * this.formData.exchangeRate;
    },
    selectedInvoicesTotal() {
      return this.outstandingInvoices.filter(invoice => this.formData.selectedInvoices.includes(invoice.id)).reduce((total, invoice) => total + (invoice.outstandingAmount || 0), 0);
    },
    selectedCurrencyCode() {
      if (!this.formData.currencyId) return 'LAK';
      const currency = this.currencies.find(c => c.id == this.formData.currencyId);
      if (!this._isInitializing) this.formData.exchangeRate = (currency === null || currency === void 0 ? void 0 : currency.rate) || 1;
      return currency ? currency.code || currency.currencyCode : 'LAK';
    },
    selectedBankAccount() {
      if (!this.formData.bankAccountId) return null;
      return this.bankAccounts.find(account => account.id == this.formData.bankAccountId);
    },
    selectedMinistry() {
      if (!this.formData.ministryId) return null;
      return this.ministries.find(ministry => ministry.id == this.formData.ministryId);
    },
    selectedCurrency() {
      if (!this.formData.currencyId) return null;
      return this.currencies.find(currency => currency.id == this.formData.currencyId);
    },
    selectedAdvance() {
      if (!this.formData.moneyAdvanceId) return null;
      return this.availableAdvances.find(advance => advance.id == this.formData.moneyAdvanceId);
    },
    user() {
      return this.$auth.user || '';
    },
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts.filter(account => account.isActive !== false);
      }
      const currencyCode = this.selectedCurrency.code || this.selectedCurrency.currencyCode;
      const filtered = this.bankAccounts.filter(account => (account.currency === currencyCode || !account.currency) && account.isActive !== false);
      return filtered.length > 0 ? filtered : this.bankAccounts.filter(account => account.isActive !== false);
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    isFormValid() {
      const validations = {
        hasAmount: !!(this.formData.amount && parseFloat(this.formData.amount) > 0),
        hasCurrency: !!this.formData.currencyId,
        hasUser: !!this.formData.userId,
        hasSettlementDate: !!this.formData.bookingDate,
        hasMethod: !!this.formData.method,
        hasUsers: this.users.length > 0,
        hasCurrencies: this.currencies.length > 0,
        bankAccountValid: this.formData.method !== 'bank_transfer' || !!this.formData.bankAccountId,
        exchangeRateValid: !this.formData.exchangeRate || this.formData.exchangeRate > 0,
        chequeNoValid: this.formData.method !== 'cheque' || !!this.formData.chequeNo,
        fromPersonNameValid: this.formData.method !== 'cash' && this.formData.method !== 'cheque' || !!this.formData.fromPersonName
      };
      return Object.values(validations).every(v => v === true);
    },
    isFormDisabled() {
      return this.loading || this.isSubmitting;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.justCreated = false; // Reset flag when dialog opens
        this.initializeForm();
        this.loadMoneyAdvances();
      } else {
        this.resetForm();
      }
    },
    'formData.currencyId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (!this._isInitializing || !this.isEditMode) {
          this.handleCurrencyChange();
        }
      }
    },
    settlement: {
      handler(newVal, oldVal) {
        if (this.visible && newVal !== oldVal && !this.isSubmitting && !this.justCreated) {
          this.$nextTick(() => {
            this.initializeForm();
          });
        }
      },
      deep: true,
      immediate: false
    },
    'formData.moneyAdvanceId'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance();
          this.syncAmountFromAdvance();
        });
      }
    },
    'formData.linkToAdvance'(newVal, oldVal) {
      if (newVal === 'false' && oldVal === 'true') {
        this.clearAdvanceSelection();
      }
    },
    availableAdvances: {
      handler(newAdvances) {
        if (newAdvances.length > 0 && this.formData.moneyAdvanceId && this.formData.linkToAdvance === 'true') {
          this.$nextTick(() => {
            this.syncCurrencyFromAdvance();
            this.syncAmountFromAdvance();
          });
        }
      },
      immediate: false
    }
  },
  mounted() {
    // Debug carousel references
    console.log('Refs available:', Object.keys(this.$refs));
    this.checkForCarouselCode();
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto';
    this.isSubmitting = false;
    this.loading = false;
    this.cleanupEventListeners();
  },
  methods: {
    // Date formatting method
    formatDateForDisplay(date) {
      if (!date) return null;
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
    // Set booking date from picker
    setBookingDate(val) {
      this.pickerBookingDate = val;
      this.formData.bookingDate = val; // Keep YYYY-MM-DD format for backend
      this.formattedBookingDate = this.formatDateForDisplay(val);
      this.bookingDateMenu = false;

      // Clear any existing error
      this.clearFieldError('bookingDate');
    },
    // Clear booking date
    clearBookingDate() {
      this.pickerBookingDate = null;
      this.formData.bookingDate = '';
      this.formattedBookingDate = null;
      this.clearFieldError('bookingDate');
    },
    // Debug methods for carousel issue
    checkForCarouselCode() {
      const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      const carouselMethods = methods.filter(method => method.toLowerCase().includes('carousel') || method.toLowerCase().includes('next') || method.toLowerCase().includes('prev'));
      if (carouselMethods.length > 0) {
        console.warn('Found potential carousel-related methods:', carouselMethods);
      }
    },
    cleanupEventListeners() {
      try {
        document.removeEventListener('keydown', this.handleKeydown);
        window.removeEventListener('resize', this.handleResize);
      } catch (error) {
        console.warn('Error cleaning up event listeners:', error);
      }
    },
    // Override potential carousel methods
    nextSlide() {
      console.warn('nextSlide called but no carousel exists');
    },
    prevSlide() {
      console.warn('prevSlide called but no carousel exists');
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0');
    },
    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message);
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'Error' : 'Success',
          message: message,
          type: type === 'error' ? 'error' : 'success'
        });
      } else {
        alert(`${type.toUpperCase()}: ${message}`);
      }
    },
    async fetchSettlementByid() {
      if (!this.formData.id) return this.showToast('ກະລຸນາບັນທຶກຂໍ້ມູນກ່ອນ', 'error');
      this.loading = true;
      try {
        const {
          data
        } = await this.$axios.get(`/api/settlements/${this.formData.id}`);
        this.settlementDetail = data.data;
        console.info(`Settlement detail ${JSON.stringify(this.settlementDetail)}`);
      } catch (error) {
        this.showToast('Error fetching settlement details', 'error');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    closePrintVoucher() {
      this.showPrintVoucher = false;
      setTimeout(() => {
        this.settlementDetail = null;
      }, 100);
    },
    async printSettlement() {
      await this.saveSettlement();
      await this.fetchSettlementByid();
      this.showPrintVoucher = true;
    },
    initializeForm() {
      console.info(`INITIALY DATA BEING CALLED ..... `);
      if (this.isSubmitting) {
        return;
      }

      // Don't reinitialize if we just created a record
      if (this.justCreated && this.formData.id) {
        console.log('Skipping form initialization - record was just created');
        return;
      }
      this._isInitializing = true;
      try {
        if (this.settlement && (this.settlement.id || this.settlement.moneyAdvanceId)) {
          const hasMoneyAdvance = this.settlement.moneyAdvanceId && this.settlement.moneyAdvanceId !== null && this.settlement.moneyAdvanceId !== '' && this.settlement.moneyAdvanceId !== '0' && this.settlement.moneyAdvanceId !== 0;
          this.formData = {
            id: this.settlement.id,
            bookingDate: this.settlement.bookingDate ? this.settlement.bookingDate.split('T')[0] : '',
            method: this.settlement.method || '',
            amount: this.settlement.amount || null,
            currencyId: this.settlement.currencyId || '',
            exchangeRate: this.settlement.exchangeRate !== undefined && this.settlement.exchangeRate !== null ? this.settlement.exchangeRate : 1,
            bankAccountId: this.settlement.bankAccountId || '',
            ministryId: this.settlement.ministryId || '',
            chartAccountId: this.settlement.chartAccountId || '',
            userId: this.settlement.userId || '',
            notes: this.settlement.notes || '',
            selectedInvoices: [],
            linkToAdvance: hasMoneyAdvance || this.settlement.linkToAdvance === 'true' ? 'true' : 'false',
            moneyAdvanceId: hasMoneyAdvance ? this.settlement.moneyAdvanceId.toString() : '',
            externalRef: this.settlement.externalRef || '',
            externalRefNo: this.settlement.externalRefNo || '',
            chequeNo: this.settlement.chequeNo || '',
            fromPersonName: this.settlement.fromPersonName || ''
          };

          // Set date picker values for existing settlement
          if (this.formData.bookingDate) {
            this.pickerBookingDate = this.formData.bookingDate;
            this.formattedBookingDate = this.formatDateForDisplay(this.formData.bookingDate);
          }
          if (this.formData.linkToAdvance === 'true') {
            this.$nextTick(() => {
              this.waitForAdvancesAndSync();
            });
          }
        } else {
          var _this$user;
          // New settlement
          const todayDate = this.today;
          this.formData = {
            bookingDate: todayDate,
            method: this.paymentMethod,
            amount: null,
            currencyId: '',
            exchangeRate: 1,
            bankAccountId: '',
            ministryId: '',
            chartAccountId: '',
            userId: ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id) || '',
            notes: '',
            selectedInvoices: [],
            linkToAdvance: 'false',
            moneyAdvanceId: '',
            externalRef: '',
            externalRefNo: '',
            chequeNo: '',
            fromPersonName: ''
          };

          // Set date picker values for new settlement
          this.pickerBookingDate = todayDate;
          this.formattedBookingDate = this.formatDateForDisplay(todayDate);
          if (this.currencies.length > 0) {
            const defaultCurrency = this.currencies.find(c => (c.code || c.currencyCode) === 'LAK') || this.currencies[0];
            this.formData.currencyId = defaultCurrency.id;
          }
        }
        this.errors = {};
        this.formErrors = [];
      } catch (error) {
        console.error('Error initializing form:', error);
        this.showToast('Error initializing form', 'error');
      } finally {
        this.$nextTick(() => {
          this._isInitializing = false;
        });
      }
      console.info(`SETTLEMENT AFTER INITIALIZATION: ${JSON.stringify(this.formData)}`);
    },
    // Update your resetForm method to clear date picker values
    resetForm() {
      var _this$user2;
      if (this.isSubmitting) {
        return;
      }
      this.formData = {
        bookingDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.id) || '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: ''
      };

      // Clear date picker values
      this.pickerBookingDate = null;
      this.formattedBookingDate = null;
      this.bookingDateMenu = false;
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
      this.isSubmitting = false;
      this.justCreated = false;
      if (this.showAdvanceBrowser) {
        this.closeAdvanceBrowser();
      }
    },
    waitForAdvancesAndSync() {
      const checkAndSync = () => {
        if (this.availableAdvances.length > 0 && this.formData.moneyAdvanceId) {
          const foundAdvance = this.availableAdvances.find(advance => advance.id.toString() === this.formData.moneyAdvanceId.toString());
          if (foundAdvance) {
            this.syncCurrencyFromAdvance();
            this.syncAmountFromAdvance();
          }
        } else if (!this.loadingAdvances) {
          setTimeout(checkAndSync, 200);
        }
      };
      checkAndSync();
    },
    handleCurrencyChange() {
      if (this.isBaseCurrency) {
        if (!this.isEditMode || this.formData.exchangeRate === null || this.formData.exchangeRate === undefined) {
          this.formData.exchangeRate = 1;
        }
      } else if (!this.formData.exchangeRate || this.formData.exchangeRate === 1) {
        if (!this.isEditMode) {
          this.formData.exchangeRate = null;
        }
      }
    },
    calculateEquivalentAmount() {
      // Placeholder for calculation logic
    },
    async loadMoneyAdvances() {
      this.loadingAdvances = true;
      try {
        const params = {
          status: ['pending', 'approved'],
          available_for_settlement: true
        };
        if (this.formData.moneyAdvanceId) {
          params.include_advance_id = this.formData.moneyAdvanceId;
        }
        const {
          data
        } = await this.$axios.get('/api/money-advances', {
          params
        });
        if (data && data.success) {
          this.availableAdvances = data.data || [];
          if (this.formData.moneyAdvanceId) {
            const foundAdvance = this.availableAdvances.find(advance => advance.id.toString() === this.formData.moneyAdvanceId.toString());
            if (!foundAdvance) {
              try {
                const {
                  data: advanceData
                } = await this.$axios.get(`/api/money-advances/${this.formData.moneyAdvanceId}`);
                if (advanceData && advanceData.success) {
                  this.availableAdvances.unshift(advanceData.data);
                }
              } catch (error) {
                console.error('Error fetching individual advance:', error);
              }
            }
          }
        } else {
          this.availableAdvances = [];
        }
        this.filteredAdvances = [...this.availableAdvances];
      } catch (error) {
        console.error('Error loading money advances:', error);
        this.availableAdvances = [];
        this.filteredAdvances = [];
      } finally {
        this.loadingAdvances = false;
      }
    },
    handleMethodChange() {
      if (this.formData.method !== 'bank_transfer') {
        this.formData.bankAccountId = '';
      }
      if (this.formData.method !== 'deduction') {
        this.formData.selectedInvoices = [];
      }
      if (this.formData.method !== 'cheque') {
        this.formData.chequeNo = '';
      }
      if (this.formData.method !== 'cash' && this.formData.method !== 'cheque') {
        this.formData.fromPersonName = '';
      }
      this.clearFieldError('bankAccountId');
      this.clearFieldError('chequeNo');
      this.clearFieldError('fromPersonName');
    },
    updateSelectedInvoicesAmount() {
      if (this.formData.method === 'deduction') {
        this.formData.amount = this.selectedInvoicesTotal;
      }
    },
    updateSelectedCurrency() {
      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency;
        const selectedCurrency = this.selectedCurrency.code || this.selectedCurrency.currencyCode;
        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.formData.bankAccountId = '';
        }
      }
    },
    updateSelectedBankAccount() {
      // Any additional logic when bank account changes
    },
    updateSelectedMinistry() {
      // Any additional logic when ministry changes
    },
    clearAdvanceSelection() {
      this.formData.moneyAdvanceId = '';
      this.formData.linkToAdvance = 'false';
      if (this.currencies.length > 0) {
        const defaultCurrency = this.currencies.find(c => (c.code || c.currencyCode) === 'LAK') || this.currencies[0];
        this.formData.currencyId = defaultCurrency.id;
        this.formData.exchangeRate = 1;
      }
      this.formData.amount = null;
    },
    updateSelectedAdvance() {
      if (this.selectedAdvance) {
        this.syncCurrencyFromAdvance();
        this.syncAmountFromAdvance();
      }
    },
    syncCurrencyFromAdvance() {
      if (!this.selectedAdvance) return;
      const advanceCurrency = this.getAdvanceCurrency();
      if (advanceCurrency) {
        this.formData.currencyId = advanceCurrency.id;
        if (this.selectedAdvance.exchangeRate && this.selectedAdvance.exchangeRate !== null) {
          this.formData.exchangeRate = this.selectedAdvance.exchangeRate;
        } else {
          if (this.isBaseCurrency && (this.formData.exchangeRate === null || this.formData.exchangeRate === undefined)) {
            this.formData.exchangeRate = 1;
          }
        }
      }
    },
    syncAmountFromAdvance() {
      if (this.selectedAdvance && this.selectedAdvance.amount) {
        this.formData.amount = this.selectedAdvance.amount;
      }
    },
    getAdvanceCurrency() {
      if (!this.selectedAdvance) return null;
      if (this.selectedAdvance.currencyId) {
        return this.currencies.find(c => c.id == this.selectedAdvance.currencyId);
      }
      if (this.selectedAdvance.currencyCode) {
        return this.currencies.find(c => (c.code || c.currencyCode) === this.selectedAdvance.currencyCode);
      }
      if (this.selectedAdvance.currency) {
        if (typeof this.selectedAdvance.currency === 'object') {
          return this.currencies.find(c => c.id == this.selectedAdvance.currency.id);
        } else {
          return this.currencies.find(c => (c.code || c.currencyCode) === this.selectedAdvance.currency);
        }
      }
      return null;
    },
    browseMoneyAdvances() {
      this.showAdvanceBrowser = true;
      this.selectedAdvanceForBrowser = this.selectedAdvance;
      document.body.style.overflow = 'hidden';
    },
    closeAdvanceBrowser() {
      this.showAdvanceBrowser = false;
      this.selectedAdvanceForBrowser = null;
      this.advanceSearch.query = '';
      this.advanceSearch.status = '';
      this.filteredAdvances = [...this.availableAdvances];
      document.body.style.overflow = 'auto';
    },
    handleAdvanceBrowserOverlayClick(event) {
      if (event.target === event.currentTarget) {
        this.closeAdvanceBrowser();
      }
    },
    selectAdvanceFromBrowser(advance) {
      this.selectedAdvanceForBrowser = advance;
    },
    confirmAdvanceSelection() {
      if (this.selectedAdvanceForBrowser) {
        this.formData.moneyAdvanceId = this.selectedAdvanceForBrowser.id;
        this.closeAdvanceBrowser();
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance();
          this.syncAmountFromAdvance();
        });
      }
    },
    searchAdvances() {
      this.filterAdvances();
    },
    filterAdvances() {
      let filtered = [...this.availableAdvances];
      if (this.advanceSearch.status) {
        filtered = filtered.filter(advance => advance.status === this.advanceSearch.status);
      }
      if (this.advanceSearch.query) {
        const query = this.advanceSearch.query.toLowerCase();
        filtered = filtered.filter(advance => advance.purpose && advance.purpose.toLowerCase().includes(query) || advance.note && advance.note.toLowerCase().includes(query) || advance.id.toString().includes(query));
      }
      this.filteredAdvances = filtered;
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];
      try {
        // Required fields validation
        if (!this.formData.bookingDate) {
          this.errors.bookingDate = 'ກະລຸນາເລືອກວັນທີ';
          this.formErrors.push('ວັນທີລົງຊຳລະ ແມ່ນຈຳເປັນ');
        }
        if (!this.formData.method) {
          this.errors.method = 'ກະລຸນາເລືອກວິທີການຊຳລະ';
          this.formErrors.push('ວິທີການຊຳລະ ແມ່ນຈຳເປັນ');
        }
        if (!this.formData.amount || this.formData.amount <= 0) {
          this.errors.amount = 'ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ';
          this.formErrors.push('ຈຳນວນເງິນ ແມ່ນຈຳເປັນ ແລະ ຕ້ອງຫຼາຍກວ່າ 0');
        }
        if (!this.formData.currencyId) {
          this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
          this.formErrors.push('ສະກຸນເງິນ ແມ່ນຈຳເປັນ');
        }
        if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
          this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0';
          this.formErrors.push('ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0');
        }
        if (!this.formData.userId) {
          this.errors.userId = 'ກະລຸນາເລືອກຜູ້ລົງບັນຊີ';
          this.formErrors.push('ຜູ້ລົງບັນຊີ ແມ່ນຈຳເປັນ');
        }

        // Conditional validation
        if (this.formData.method === 'bank_transfer' && !this.formData.bankAccountId) {
          this.errors.bankAccountId = 'ກະລຸນາເລືອກບັນຊີທະນາຄານ';
          this.formErrors.push('ບັນຊີທະນາຄານ ແມ່ນຈຳເປັນສຳລັບການໂອນທະນາຄານ');
        }
        if (this.formData.method === 'cheque' && !this.formData.chequeNo) {
          this.errors.chequeNo = 'ກະລຸນາໃສ່ເລກເຊັກ';
          this.formErrors.push('ເລກເຊັກ ແມ່ນຈຳເປັນສຳລັບການຊຳລະດ້ວຍເຊັກ');
        }
        if ((this.formData.method === 'cash' || this.formData.method === 'cheque') && !this.formData.fromPersonName) {
          this.errors.fromPersonName = 'ກະລຸນາໃສ່ຊື່ຜູ້ຈ່າຍ';
          this.formErrors.push('ຊື່ຜູ້ຈ່າຍ ແມ່ນຈຳເປັນສຳລັບການຊຳລະດ້ວຍເງິນສົດ ແລະ ເຊັກ');
        }

        // Special validation for linked advances
        if (this.isLinkedToAdvance && this.selectedAdvance) {
          const advanceCurrency = this.getAdvanceCurrency();
          if (advanceCurrency && this.formData.currencyId != advanceCurrency.id) {
            this.errors.currencyId = 'ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ';
            this.formErrors.push('ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າທີ່ເລືອກ');
          }

          // Check if advance amount matches
          if (this.selectedAdvance.amount && Math.abs(this.formData.amount - this.selectedAdvance.amount) > 0.01) {
            this.errors.amount = 'ຈຳນວນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ';
            this.formErrors.push('ຈຳນວນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າທີ່ເລືອກ');
          }
        }
        if (this.formData.notes && this.formData.notes.length > 500) {
          this.formErrors.push('ໝາຍເຫດຕ້ອງບໍ່ເກີນ 500 ຕົວອັກສອນ');
        }
        if (this.users.length === 0) {
          this.formErrors.push('ບໍ່ມີຜູ້ໃຊ້ງານ. ກະລຸນາຕິດຕໍ່ຜູ້ຄຸ້ມຄອງລະບົບ.');
        }
        if (this.currencies.length === 0) {
          this.formErrors.push('ບໍ່ມີສະກຸນເງິນ. ກະລຸນາຕິດຕໍ່ຜູ້ຄຸ້ມຄອງລະບົບ.');
        }
        return this.formErrors.length === 0;
      } catch (error) {
        console.error('Validation error:', error);
        this.formErrors.push('ເກີດຂໍ້ຜິດພາດໃນການກວດສອບຟອມ');
        return false;
      }
    },
    clearFieldError(fieldName) {
      if (this.errors[fieldName]) {
        this.$delete(this.errors, fieldName);
      }
    },
    // FIXED saveSettlement method
    async saveSettlement() {
      if (!this.validateForm() || this.isSubmitting) {
        return;
      }

      // Prevent double submission
      this.isSubmitting = true;
      this.loading = true;
      try {
        const submitData = {
          ...this.formData,
          selectedInvoices: this.formData.method === 'deduction' ? this.formData.selectedInvoices : [],
          bookingDate: this.formData.bookingDate
        };

        // Remove empty values and unused fields
        Object.keys(submitData).forEach(key => {
          if (submitData[key] === '' || submitData[key] === null) {
            delete submitData[key];
          }
        });

        // Remove advance-related fields if not linking
        if (submitData.linkToAdvance !== 'true') {
          delete submitData.moneyAdvanceId;
        }
        delete submitData.linkToAdvance;
        console.log('📤 Submitting settlement data:', submitData);
        let response;
        let isNewRecord = !this.formData.id;
        if (isNewRecord) {
          // Creating new settlement
          console.info(`SETTLEMENT BEFORE SAVE ${JSON.stringify(this.formData)}`);
          response = await this.$axios.post('/api/settlements', submitData);
          console.info(`RESPONSE DATA ${JSON.stringify(response.data)}`);
          if (response.data && response.data.data) {
            // Update form data with the new ID
            this.formData.id = response.data.data.id;
            this.formData.bookingDate = response.data.data.bookingDate;

            // Emit created event to parent component
            this.$emit('created', response.data.data);
            this.showToast('Money settlement created successfully', 'success');
          }
          console.info(`SETTLEMENT AFTER SAVE ${JSON.stringify(this.formData)}`);
        } else {
          // Updating existing settlement
          response = await this.$axios.put(`/api/settlements/${this.formData.id}`, submitData);
          console.info(`UPDATE RESPONSE DATA ${JSON.stringify(response.data)}`);
          if (response.data && response.data.data) {
            // Emit updated event to parent with updated data
            this.$emit('updated', response.data.data);
            this.showToast('Money settlement updated successfully', 'success');
          }
        }

        // Clear any validation errors on successful save
        this.errors = {};
        this.formErrors = [];
      } catch (error) {
        console.error('Form submission error:', error);

        // Clear previous form errors
        this.formErrors = [];

        // Handle different types of errors
        if (error.response) {
          // Server responded with error status
          const status = error.response.status;
          const errorData = error.response.data;
          if (status === 422 && errorData.errors) {
            // Validation errors from server
            Object.keys(errorData.errors).forEach(field => {
              this.errors[field] = errorData.errors[field][0];
              this.formErrors.push(`${field}: ${errorData.errors[field][0]}`);
            });
          } else if (status === 409) {
            // Conflict error
            this.formErrors.push('ມີການຂັດແຍ້ງກັບຂໍ້ມູນທີ່ມີຢູ່ແລ້ວ. ກະລຸນາລອງໃໝ່.');
          } else if (status === 404) {
            // Not found error
            this.formErrors.push('ບໍ່ພົບຂໍ້ມູນທີ່ຕ້ອງການ. ກະລຸນາລອງໃໝ່.');
          } else {
            // Other server errors
            this.formErrors.push(errorData.message || 'ເກີດຂໍ້ຜິດພາດຈາກເຊີເວີ. ກະລຸນາລອງໃໝ່.');
          }
        } else if (error.request) {
          // Network error
          this.formErrors.push('ບໍ່ສາມາດເຊື່ອມຕໍ່ເຊີເວີໄດ້. ກະລຸນາກວດສອບການເຊື່ອມຕໍ່ອິນເຕີເນັດ.');
        } else {
          // Other errors
          this.formErrors.push('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ. ກະລຸນາລອງໃໝ່.');
        }

        // Show error toast
        this.showToast(this.formErrors[0] || 'ເກີດຂໍ້ຜິດພາດ', 'error');
      } finally {
        this.loading = false;
        this.isSubmitting = false;
      }
    },
    closeDialog() {
      if (this.isSubmitting) {
        // Confirm if user wants to cancel during submission
        if (confirm('Are you sure you want to cancel? The form is currently being submitted.')) {
          this.isSubmitting = false;
          this.loading = false;
          this.justCreated = false; // Reset flag when closing
        } else {
          return;
        }
      } else {
        this.justCreated = false; // Reset flag when closing
      }

      this.$emit('close');
    },
    handleOverlayClick(event) {
      // Only close if clicking directly on overlay, not on child elements
      if (event.target === event.currentTarget && !this.isSubmitting) {
        this.closeDialog();
      }
    },
    // Utility methods
    formatCurrency(amount, currency = 'LAK', locale = 'en-US', options = {}) {
      if (typeof amount !== 'number' && amount !== null && amount !== undefined) {
        amount = 0;
      }
      const defaultOptions = {
        style: 'currency',
        currency: currency.toUpperCase(),
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        ...options
      };
      try {
        return new Intl.NumberFormat(locale, defaultOptions).format(amount || 0);
      } catch (error) {
        return `${currency.toUpperCase()} ${(amount || 0).toLocaleString()}`;
      }
    },
    formatDate(date) {
      if (!date) return 'ບໍ່ລະບຸ';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatAdvanceOption(advance) {
      return `#${advance.id} - ${this.formatCurrency(advance.amount, advance.currency.code)} - ${advance.purpose || 'No purpose'}`;
    },
    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        settled: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementDialogvue_type_script_lang_js_ = (settlementDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(506)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementDialogvue_type_script_lang_js_,
  settlementDialogvue_type_template_id_216c16b2_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "216c16b2",
  "6aebe1cc"
  
)

/* harmony default export */ var settlementDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(496);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".voucher-logo[data-v-3d1eb6e0]{height:110px;line-height:1!important;margin-bottom:1px!important;-o-object-fit:contain;object-fit:contain;width:110px}.voucher-logo-gov[data-v-3d1eb6e0]{height:auto;line-height:1!important;margin-bottom:4px!important;margin-top:30px!important;max-height:80px;max-width:80px;-o-object-fit:contain;object-fit:contain;width:auto}.modal-overlay[data-v-3d1eb6e0]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-3d1eb6e0]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-3d1eb6e0]{align-items:center;border-bottom:1px solid #eee;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-3d1eb6e0]{color:#333;margin:0}.close-btn[data-v-3d1eb6e0]{background:none;border:none;color:#666;cursor:pointer;font-size:18px}.close-btn[data-v-3d1eb6e0]:hover{color:#333}.modal-body[data-v-3d1eb6e0]{padding:20px}.modal-footer[data-v-3d1eb6e0]{border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-3d1eb6e0]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-3d1eb6e0]{background:#007bff;color:#fff}.btn-primary[data-v-3d1eb6e0]:hover{background:#0056b3}.btn-secondary[data-v-3d1eb6e0]{background:#6c757d;color:#fff}.btn-secondary[data-v-3d1eb6e0]:hover{background:#545b62}.voucher-container[data-v-3d1eb6e0]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;font-weight:700;line-height:1.3;margin:0 auto;max-width:700px;padding:15px;width:100%}.voucher-container *[data-v-3d1eb6e0]{font-weight:700!important}.voucher-header[data-v-3d1eb6e0]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:15;padding-bottom:5px}.ministry-voucher-section[data-v-3d1eb6e0]{margin:0 0 10px!important;padding:0!important}.ministry-voucher-section .col[data-v-3d1eb6e0],.ministry-voucher-section .v-col[data-v-3d1eb6e0]{margin:0!important;padding:0!important}.row[data-v-3d1eb6e0]{margin:0!important}.col[data-v-3d1eb6e0]{padding:0!important}.company-info[data-v-3d1eb6e0]{flex:1;text-align:center}.company-name[data-v-3d1eb6e0]{font-size:16px;margin-bottom:3px}.company-name[data-v-3d1eb6e0],.department[data-v-3d1eb6e0]{font-weight:700!important}.department[data-v-3d1eb6e0]{font-size:14px;margin-bottom:3px}.sub-department[data-v-3d1eb6e0]{font-size:12px;margin-bottom:8px}.amount-line[data-v-3d1eb6e0],.sub-department[data-v-3d1eb6e0]{font-weight:700!important}.amount-line[data-v-3d1eb6e0]{font-size:12px;letter-spacing:2px}.number-box[data-v-3d1eb6e0]{background:#f9f9f9;border:2px solid #333;margin-bottom:5px;padding:6px 10px;text-align:center}.number-label[data-v-3d1eb6e0]{margin-right:8px}.number-label[data-v-3d1eb6e0],.number-value[data-v-3d1eb6e0]{font-weight:700!important}.number-value[data-v-3d1eb6e0]{color:#d32f2f}.voucher-title[data-v-3d1eb6e0]{font-size:18px;font-weight:700!important;margin:15px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-title[data-v-3d1eb6e0]:not(.voucher-container>.voucher-title){font-size:16px!important;font-weight:700!important;line-height:1.2!important;margin:0 0 2px!important;text-align:left!important;-webkit-text-decoration:none!important;text-decoration:none!important}.voucher-details[data-v-3d1eb6e0]{margin-bottom:25px}.detail-row[data-v-3d1eb6e0]{align-items:center;display:flex;margin-bottom:10px;min-height:22px}.detail-row.description[data-v-3d1eb6e0]{align-items:flex-start;flex-direction:column}.label[data-v-3d1eb6e0]{margin-right:8px;white-space:nowrap}.label[data-v-3d1eb6e0],.value[data-v-3d1eb6e0]{font-weight:700!important}.value[data-v-3d1eb6e0]{border-bottom:1px solid #333;margin-right:15px;min-width:35px;padding:2px 4px;text-align:center}.dotted-line[data-v-3d1eb6e0]{border-bottom:1px dotted #333;flex:1;font-weight:700!important;margin:0 8px;min-height:18px;padding:2px 4px}.currency-options[data-v-3d1eb6e0]{display:flex;gap:15px;margin-left:8px}.currency-options label[data-v-3d1eb6e0]{align-items:center;display:flex;gap:4px}.amount-display[data-v-3d1eb6e0],.currency-options label[data-v-3d1eb6e0]{font-weight:700!important}.amount-display[data-v-3d1eb6e0]{font-size:16px;margin:0 8px}.description-content[data-v-3d1eb6e0]{background:#fafafa;border:1px solid #333;margin-top:4px;min-height:50px;padding:8px;width:100%}.amount-words[data-v-3d1eb6e0],.description-content[data-v-3d1eb6e0]{font-weight:700!important}.amount-words[data-v-3d1eb6e0]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:8px;padding:2px 8px}.signature-section[data-v-3d1eb6e0]{display:flex;gap:8px;justify-content:space-between;margin-top:30px}.signature-box[data-v-3d1eb6e0]{flex:1;text-align:center}.signature-title[data-v-3d1eb6e0]{font-size:14px;font-weight:700!important;margin-bottom:100px}.signature-line[data-v-3d1eb6e0]{border-bottom:1px solid #333;height:1px;margin-top:15px}.signature-name[data-v-3d1eb6e0]{color:#666;font-size:14px;font-weight:700!important;margin-top:4px}.voucher-title-main[data-v-3d1eb6e0]{font-size:18px;font-weight:700;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}@media print{*[data-v-3d1eb6e0],.print-only[data-v-3d1eb6e0],.print-only *[data-v-3d1eb6e0],body *[data-v-3d1eb6e0]{font-weight:700!important}.print-only[data-v-3d1eb6e0],.print-only *[data-v-3d1eb6e0]{visibility:visible}.print-only[data-v-3d1eb6e0]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-3d1eb6e0]{border:2px solid #000!important;font-size:12px!important;font-weight:700!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}}.print-only[data-v-3d1eb6e0]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-3d1eb6e0]{left:auto;position:static;top:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("620cab2e", content, true, context)
};

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(650);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5422c78c", content, true, context)
};

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(652);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("683701e4", content, true, context)
};

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(654);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3bcd7bf8", content, true, context)
};

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(656);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("9673ac5e", content, true, context)
};

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentVoucher/index.vue?vue&type=template&id=3d1eb6e0&scoped=true&



var paymentVouchervue_type_template_id_3d1eb6e0_scoped_true_render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$maker, _vm$voucherData$minis, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$maker2, _vm$voucherData$check;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showPrintDialog ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-3d1eb6e0>", "</div>", [_vm._ssrNode("<div class=\"modal-content\" data-v-3d1eb6e0>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-3d1eb6e0><h3 data-v-3d1eb6e0>ພິມໃບຈ່າຍສົດອອກຄັງ</h3> <button class=\"close-btn\" data-v-3d1eb6e0><i class=\"fas fa-times\" data-v-3d1eb6e0></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-3d1eb6e0>", "</div>", [_vm._ssrNode("<div id=\"voucher-print\" class=\"voucher-container\" data-v-3d1eb6e0>", "</div>", [_vm._ssrNode("<div class=\"voucher-header\" data-v-3d1eb6e0><div class=\"company-info\" data-v-3d1eb6e0><div class=\"company-name\" data-v-3d1eb6e0><img" + _vm._ssrAttr("src", __webpack_require__(167)) + " alt=\"Ministry Logo\" class=\"voucher-logo-gov\" data-v-3d1eb6e0></div> <div class=\"company-name\" data-v-3d1eb6e0>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-3d1eb6e0>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div></div></div> "), _c(VRow["a" /* default */], {
    staticClass: "ministry-voucher-section",
    attrs: {
      "align": "end",
      "justify": "space-between",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-start pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('img', {
    staticClass: "voucher-logo",
    attrs: {
      "src": __webpack_require__(166),
      "alt": "Ministry Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ກົມແຜນການ ແລະ ການເງິນ")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ພະແນກຄຸ້ມຄອງລາຍຮັບ")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  })]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-end pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "number-box"
  }, [_c('span', {
    staticClass: "number-label"
  }, [_vm._v("No")]), _vm._v(" "), _c('span', {
    staticClass: "number-value"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatVoucherNumber(_vm.voucherData.id)) + "\n                ")])])])], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "ministry-voucher-section",
    attrs: {
      "align": "end",
      "justify": "space-between",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-start pa-0",
    attrs: {
      "cols": "6"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-end pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "voucher-title"
  }, [_c('span', {
    staticClass: "label",
    staticStyle: {
      "font-size": "14px !important"
    }
  }, [_vm._v("ນະຄອນຫຼວງວຽງຈັນ ວັນທີ")]), _vm._v(" "), _c('span', {
    staticClass: "dotted-line"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatDateLao(_vm.voucherData.bookingDate)) + "\n                ")])])])], 1), _vm._ssrNode(" <div class=\"voucher-title-main\" data-v-3d1eb6e0>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-3d1eb6e0><div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ອີງໃສ່ໃບສັ່ງຈ່າຍ ເລກທີ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.externalRef || '')) + "</span> <span class=\"label\" data-v-3d1eb6e0>ລົງວັນທີ</span> <span class=\"value\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.externalBookingDate).day)) + "</span> <span class=\"label\" data-v-3d1eb6e0>ເດືອນ</span> <span class=\"value\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.externalBookingDate).month)) + "</span> <span class=\"label\" data-v-3d1eb6e0>ປີ</span> <span class=\"value\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.externalBookingDate).year)) + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ພະແນກຄຸ້ມຄອງລາຍຮັບ, ກະຊວງ ໂຍທາທິການ ແລະ ຂົນສົ່ງ.</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ໄດ້ຈ່າຍເງິນ </span> <label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cash') + " data-v-3d1eb6e0></label> <span class=\"label\" data-v-3d1eb6e0> ສົດ </span> <label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cheque') + " data-v-3d1eb6e0></label> <span class=\"label\" data-v-3d1eb6e0> ແຊັກເລກທີ່ </span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo || '')) + "</span> <div class=\"currency-options\" data-v-3d1eb6e0><label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-3d1eb6e0>\n                  ກີບ</label> <label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-3d1eb6e0>\n                  ບາດ</label> <label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-3d1eb6e0>\n                  ໂດລາ</label></div></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ໃຫ້ທ່ານ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.voucherData.receiveName || ((_vm$voucherData$maker = _vm.voucherData.maker) === null || _vm$voucherData$maker === void 0 ? void 0 : _vm$voucherData$maker.cus_name) || '')) + "</span> <span class=\"label\" data-v-3d1eb6e0>ເລກບັດປະຈຳຕົວ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.voucherData.receiveIDNO || '')) + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ສັງກັດຢູ່ພາກສ່ວນ ກົມ/ກອງ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$minis = _vm.voucherData.ministry) === null || _vm$voucherData$minis === void 0 ? void 0 : _vm$voucherData$minis.ministryName) || '')) + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ເນື້ອໃນລາຍຈ່າຍ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.voucherData.purpose || '')) + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0></span> <span class=\"dotted-line\" data-v-3d1eb6e0></span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0></span> <span class=\"dotted-line\" data-v-3d1eb6e0></span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ຈຳນວນ</span> <span class=\"amount-display\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount)) + "\n                " + _vm._s(_vm.getCurrencyWord((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.code)) + "\n              ") + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.code))) + "</span></div></div> <div class=\"signature-section\" data-v-3d1eb6e0><div class=\"signature-box\" data-v-3d1eb6e0><div class=\"signature-title\" data-v-3d1eb6e0>ຫົວໜ້າພະແນກ ຄຸ້ມຄອງລາຍຮັບ</div> <div class=\"signature-name\" data-v-3d1eb6e0></div></div> <div class=\"signature-box\" data-v-3d1eb6e0><div class=\"signature-title\" data-v-3d1eb6e0>ຜູ້ຮັບເງິນ</div> <div class=\"signature-name\" data-v-3d1eb6e0>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.receiveName || ((_vm$voucherData$maker2 = _vm.voucherData.maker) === null || _vm$voucherData$maker2 === void 0 ? void 0 : _vm$voucherData$maker2.cus_name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-3d1eb6e0><div class=\"signature-title\" data-v-3d1eb6e0>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-name\" data-v-3d1eb6e0>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-3d1eb6e0><button class=\"btn btn-secondary\" data-v-3d1eb6e0><i class=\"fas fa-times\" data-v-3d1eb6e0></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-3d1eb6e0><i class=\"fas fa-print\" data-v-3d1eb6e0></i>\n          ພິມ\n        </button></div>")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=template&id=3d1eb6e0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentVoucher/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentVouchervue_type_script_lang_js_ = ({
  name: 'VoucherPrintComponent',
  props: {
    voucherData: {
      type: Object,
      default: () => ({
        id: 5,
        amount: 4000000,
        purpose: 'test',
        note: '',
        status: 'pending',
        method: 'cash',
        approvedAt: null,
        dueDate: '2025-07-24T00:00:00.000Z',
        createdAt: '2025-07-09T15:12:51.000Z',
        updateTimestamp: '2025-07-09T15:12:51.000Z',
        makerId: 2,
        checkerId: null,
        currencyId: 5,
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
        maker: {
          id: 2,
          cus_id: 1001,
          cus_pass: '1111',
          cus_name: 'USER01',
          cus_tel: 'TELEPHONE',
          cus_email: 'EMAIL',
          cus_active: true,
          village: null,
          district: null,
          province: null,
          remark: null,
          isActive: true,
          createdAt: '2025-01-24T19:54:20.000Z',
          updateTimestamp: '2025-01-24T19:54:20.000Z',
          groupId: 1
        },
        checker: null,
        currency: {
          id: 5,
          code: 'USD',
          name: 'US Dollar',
          rate: 1,
          isActive: true,
          isLocalCCY: false,
          createdAt: '2023-09-17T06:52:15.000Z',
          updateTimestamp: '2025-03-03T01:11:36.000Z'
        },
        ministry: null,
        settlementLine: []
      })
    }
  },
  data() {
    return {
      showPrintDialog: false
    };
  },
  watch: {
    voucherData: {
      handler(newValue) {
        if (newValue && newValue.id) {
          this.showPrintDialog = true;
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    formatDateLao(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    openPrintDialog() {
      this.showPrintDialog = true;
    },
    closePrintDialog() {
      this.showPrintDialog = false;
      this.$emit('close');
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0');
    },
    formatDate(dateString) {
      if (!dateString) return {
        day: '',
        month: '',
        year: ''
      };
      const date = new Date(dateString);
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      };
    },
    formatAmount(amount) {
      if (!amount) return '0';
      return new Intl.NumberFormat('en-US').format(amount);
    },
    getCurrencyWord(currencyCode) {
      let result = '';
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ';
          break;
        case 'USD':
          result += ' ໂດລາ';
          break;
        case 'THB':
          result += ' ບາດ';
          break;
        default:
          result += 'ກີບ';
      }
      return result;
    },
    convertToWords(amount, currencyCode) {
      if (!amount) return '';
      const numbers = ['', 'ໜຶ່ງ', 'ສອງ', 'ສາມ', 'ສີ່', 'ຫ້າ', 'ຫົກ', 'ເຈັດ', 'ແປດ', 'ເກົ້າ'];

      // Convert number to string and process
      const amountStr = amount.toString();
      const length = amountStr.length;
      if (length > 10) {
        // For very large numbers (over 10 billion), just return formatted number
        return this.formatAmount(amount) + ' ' + (currencyCode || '');
      }
      let result = '';

      // Helper function to convert a 3-digit group
      const convertThreeDigits = num => {
        let text = '';
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;
        const tens = Math.floor(remainder / 10);
        const ones = remainder % 10;

        // Hundreds place
        if (hundreds > 0) {
          text += numbers[hundreds] + 'ຮ້ອຍ';
        }

        // Tens and ones place
        if (remainder === 20) {
          // Special case: 20 = ຊາວ
          text += 'ຊາວ';
        } else if (tens >= 2) {
          // 30, 40, 50, etc.
          text += numbers[tens] + 'ສິບ';
          if (ones > 0) {
            text += numbers[ones];
          }
        } else if (tens === 1) {
          // 10-19
          text += 'ສິບ';
          if (ones > 0) {
            text += numbers[ones];
          }
        } else if (ones > 0) {
          // 1-9
          text += numbers[ones];
        }
        return text;
      };

      // Convert based on number size
      if (length <= 3) {
        // 1 - 999
        result = convertThreeDigits(amount);
      } else if (length <= 6) {
        // 1,000 - 999,999
        if (amount >= 100000) {
          // Handle ແສນ (100,000) unit for 100,000 - 999,999
          const saen = Math.floor(amount / 100000);
          const remainder = amount % 100000;
          if (saen === 10) {
            // Special case: 1,000,000 should be handled in millions section
            // This shouldn't happen in this range, but keeping for safety
            result = 'ສິບແສນ';
          } else {
            result = numbers[saen] + 'ແສນ';
          }
          if (remainder > 0) {
            if (remainder >= 1000) {
              const thousands = Math.floor(remainder / 1000);
              const finalRemainder = remainder % 1000;
              if (thousands === 10) {
                result += 'ສິບພັນ';
              } else if (thousands === 20) {
                result += 'ຊາວພັນ';
              } else {
                result += convertThreeDigits(thousands) + 'ພັນ';
              }
              if (finalRemainder > 0) {
                result += convertThreeDigits(finalRemainder);
              }
            } else {
              result += convertThreeDigits(remainder);
            }
          }
        } else {
          // Handle ພັນ (1,000) unit for 1,000 - 99,999
          const thousands = Math.floor(amount / 1000);
          const remainder = amount % 1000;
          if (thousands === 10) {
            // Special case: 10,000 = ສິບພັນ
            result = 'ສິບພັນ';
          } else if (thousands === 20) {
            // Special case: 20,000 = ຊາວພັນ
            result = 'ຊາວພັນ';
          } else {
            result = convertThreeDigits(thousands) + 'ພັນ';
          }
          if (remainder > 0) {
            result += convertThreeDigits(remainder);
          }
        }
      } else if (length <= 9) {
        // 1,000,000 - 999,999,999 (millions)
        const millions = Math.floor(amount / 1000000);
        const remainder = amount % 1000000;

        // Handle millions part
        if (millions === 10) {
          result = 'ສິບລ້ານ';
        } else if (millions === 20) {
          result = 'ຊາວລ້ານ';
        } else {
          result = convertThreeDigits(millions) + 'ລ້ານ';
        }

        // Handle remainder (saen, thousands and hundreds)
        if (remainder > 0) {
          if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000);
            const saenRemainder = remainder % 100000;
            result += numbers[saen] + 'ແສນ';
            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000);
                const finalRemainder = saenRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(saenRemainder);
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000);
            const finalRemainder = remainder % 1000;
            if (thousands === 10) {
              result += 'ສິບພັນ';
            } else if (thousands === 20) {
              result += 'ຊາວພັນ';
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ';
            }
            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder);
            }
          } else {
            result += convertThreeDigits(remainder);
          }
        }
      } else if (length <= 10) {
        // 1,000,000,000 - 9,999,999,999 (billions)
        const billions = Math.floor(amount / 1000000000);
        const remainder = amount % 1000000000;

        // Handle billions part
        result = numbers[billions] + 'ພັນລ້ານ';

        // Handle remainder (millions, saen, thousands, hundreds)
        if (remainder > 0) {
          if (remainder >= 1000000) {
            const millions = Math.floor(remainder / 1000000);
            const millionRemainder = remainder % 1000000;
            if (millions === 10) {
              result += 'ສິບລ້ານ';
            } else if (millions === 20) {
              result += 'ຊາວລ້ານ';
            } else {
              result += convertThreeDigits(millions) + 'ລ້ານ';
            }
            if (millionRemainder > 0) {
              if (millionRemainder >= 100000) {
                // Handle ແສນ unit in remainder
                const saen = Math.floor(millionRemainder / 100000);
                const saenRemainder = millionRemainder % 100000;
                result += numbers[saen] + 'ແສນ';
                if (saenRemainder > 0) {
                  if (saenRemainder >= 1000) {
                    const thousands = Math.floor(saenRemainder / 1000);
                    const finalRemainder = saenRemainder % 1000;
                    if (thousands === 10) {
                      result += 'ສິບພັນ';
                    } else if (thousands === 20) {
                      result += 'ຊາວພັນ';
                    } else {
                      result += convertThreeDigits(thousands) + 'ພັນ';
                    }
                    if (finalRemainder > 0) {
                      result += convertThreeDigits(finalRemainder);
                    }
                  } else {
                    result += convertThreeDigits(saenRemainder);
                  }
                }
              } else if (millionRemainder >= 1000) {
                const thousands = Math.floor(millionRemainder / 1000);
                const finalRemainder = millionRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(millionRemainder);
              }
            }
          } else if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000);
            const saenRemainder = remainder % 100000;
            result += numbers[saen] + 'ແສນ';
            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000);
                const finalRemainder = saenRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(saenRemainder);
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000);
            const finalRemainder = remainder % 1000;
            if (thousands === 10) {
              result += 'ສິບພັນ';
            } else if (thousands === 20) {
              result += 'ຊາວພັນ';
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ';
            }
            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder);
            }
          } else {
            result += convertThreeDigits(remainder);
          }
        }
      }

      // Add currency
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ';
          break;
        case 'USD':
          result += ' ໂດລາ';
          break;
        case 'THB':
          result += ' ບາດ';
          break;
        default:
          result += currencyCode ? ' ' + currencyCode : '';
      }
      return result;
    },
    printVoucher() {
      // Clone the voucher content to avoid modifying the original
      const voucherElement = this.$refs.voucherContent.cloneNode(true);

      // Get all checkboxes in the cloned element
      const checkboxes = voucherElement.querySelectorAll('input[type="checkbox"]');

      // Manually set the checked state based on data
      checkboxes.forEach((checkbox, index) => {
        let shouldBeChecked = false;

        // Method 1: Use index-based approach (more reliable)
        // The checkboxes appear in this order: cash, cheque, LAK, THB, USD
        if (index === 0) {
          // First checkbox - Cash
          shouldBeChecked = this.voucherData.method === 'cash';
        } else if (index === 1) {
          // Second checkbox - Cheque
          shouldBeChecked = this.voucherData.method === 'cheque';
        } else if (index === 2) {
          var _this$voucherData$cur;
          // Third checkbox - LAK (ກີບ)
          shouldBeChecked = ((_this$voucherData$cur = this.voucherData.currency) === null || _this$voucherData$cur === void 0 ? void 0 : _this$voucherData$cur.code) === 'LAK';
        } else if (index === 3) {
          var _this$voucherData$cur2;
          // Fourth checkbox - THB (ບາດ)
          shouldBeChecked = ((_this$voucherData$cur2 = this.voucherData.currency) === null || _this$voucherData$cur2 === void 0 ? void 0 : _this$voucherData$cur2.code) === 'THB';
        } else if (index === 4) {
          var _this$voucherData$cur3;
          // Fifth checkbox - USD (ໂດລາ)
          shouldBeChecked = ((_this$voucherData$cur3 = this.voucherData.currency) === null || _this$voucherData$cur3 === void 0 ? void 0 : _this$voucherData$cur3.code) === 'USD';
        }

        // Fallback method: Check by parent label text for currency checkboxes
        if (index >= 2) {
          const parentLabel = checkbox.closest('label');
          const parentText = parentLabel ? parentLabel.textContent.trim() : '';
          if (parentText.includes('ກີບ')) {
            var _this$voucherData$cur4;
            shouldBeChecked = ((_this$voucherData$cur4 = this.voucherData.currency) === null || _this$voucherData$cur4 === void 0 ? void 0 : _this$voucherData$cur4.code) === 'LAK';
          } else if (parentText.includes('ບາດ')) {
            var _this$voucherData$cur5;
            shouldBeChecked = ((_this$voucherData$cur5 = this.voucherData.currency) === null || _this$voucherData$cur5 === void 0 ? void 0 : _this$voucherData$cur5.code) === 'THB';
          } else if (parentText.includes('ໂດລາ')) {
            var _this$voucherData$cur6;
            shouldBeChecked = ((_this$voucherData$cur6 = this.voucherData.currency) === null || _this$voucherData$cur6 === void 0 ? void 0 : _this$voucherData$cur6.code) === 'USD';
          }
        }

        // Set the checked attribute
        if (shouldBeChecked) {
          checkbox.setAttribute('checked', 'checked');
          checkbox.checked = true;
        } else {
          checkbox.removeAttribute('checked');
          checkbox.checked = false;
        }
      });

      // Get the processed HTML content
      const printContent = voucherElement.innerHTML;
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      printWindow.document.write(`
    <html>
      <head>
        <title>ໃບຈ່າຍເງິນສົດອອກຄັງ</title>
        <style>
          body { 
            font-family: 'Phetsarath OT', 'Noto Sans Lao', Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            line-height: 1.4;
            font-weight: bold !important;
          }

          * {
            font-weight: bold !important;
          }

          .voucher-logo {
            width: 110px;
            height: 110px;
            object-fit: contain;
            margin-bottom: 1px !important;
            line-height: 1 !important;
          }
          
          .voucher-logo-gov {
            max-width: 90px;
            max-height: 90px;
            width: auto;
            height: auto;
            object-fit: contain;
            margin-top: 30px !important;
            margin-bottom: 4px !important;
            line-height: 1 !important;
          }
          
          .voucher-container { 
            border: 2px solid #000; 
            padding: 15px; 
            font-size: 12px; 
            line-height: 1.4; 
            max-width: 210mm;
            margin: 0 auto;
            font-weight: bold;
          }
          
          .voucher-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: flex-start; 
            margin-bottom: 15px; 
            padding-bottom: 5px; 
          }
          
          .ministry-voucher-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 0 !important;
            padding: 0 !important;
            margin-bottom: 10px !important;
          }
          
          .ministry-voucher-section .col,
          .ministry-voucher-section > div {
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .voucher-title {
            font-size: 16px !important;
            margin: 0 !important;
            margin-bottom: 2px !important;
            line-height: 1.2 !important;
            text-align: left;
            text-decoration: none;
            font-weight: bold !important;
          }
          
          .voucher-title-main {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin: 20px 0;
            text-decoration: underline;
          }
          
          .company-info { 
            flex: 1; 
            text-align: center; 
          }
          
          .company-name { 
            font-weight: bold !important; 
            font-size: 14px; 
            margin-bottom: 3px; 
          }
          
          .department { 
            font-size: 12px; 
            margin-bottom: 3px; 
            font-weight: bold !important;
          }
          
          .sub-department { 
            font-size: 10px; 
            margin-bottom: 10px; 
            font-weight: bold !important;
          }
          
          .amount-line { 
            font-size: 10px; 
            letter-spacing: 2px; 
            font-weight: bold !important;
          }
          
          .number-box { 
            border: 2px solid #000; 
            padding: 5px 8px; 
            text-align: center; 
            background: #f9f9f9; 
            margin-bottom: 5px;
          }
          
          .number-label { 
            font-weight: bold !important; 
            margin-right: 10px; 
          }
          
          .number-value { 
            font-weight: bold !important; 
          }
          
          .detail-row { 
            display: flex; 
            align-items: center; 
            margin-bottom: 8px; 
            min-height: 20px; 
          }
          
          .label { 
            font-weight: bold !important; 
            margin-right: 8px; 
            white-space: nowrap; 
          }
          
          .value { 
            margin-right: 15px; 
            border-bottom: 1px solid #000; 
            min-width: 35px; 
            text-align: center; 
            padding: 1px 3px; 
            font-weight: bold !important;
          }
          
          .dotted-line { 
            flex: 1; 
            border-bottom: 1px dotted #000; 
            margin: 0 8px; 
            min-height: 18px; 
            padding: 1px 3px; 
            font-weight: bold !important;
          }
          
          .currency-options { 
            display: flex; 
            gap: 15px; 
            margin-left: 8px; 
          }
          
          .currency-options label { 
            display: flex; 
            align-items: center; 
            gap: 3px; 
            font-weight: bold !important; 
          }
          
          .amount-display { 
            font-weight: bold !important; 
            font-size: 16px; 
            margin: 0 8px; 
          }
          
          .amount-words { 
            flex: 1; 
            border-bottom: 1px solid #000; 
            margin-left: 8px; 
            padding: 1px 8px; 
            font-style: italic; 
            font-weight: bold !important;
          }
          
          .signature-section { 
            display: flex; 
            justify-content: space-between; 
            margin-top: 30px; 
            gap: 8px; 
          }
          
          .signature-box { 
            flex: 1; 
            text-align: center; 
          }
          
          .signature-title { 
            font-size: 14px; 
            margin-bottom: 25px;
            margin-bottom: 100px; 
            font-weight: bold !important; 
          }
          
          .signature-name { 
            font-size: 14px; 
            margin-top: 5px; 
            font-weight: bold !important; 
          }

          /* Ensure checkboxes are visible and properly styled */
          input[type="checkbox"] {
            width: 14px;
            height: 14px;
            margin-right: 4px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Force checkbox states to be visible in print */
          input[type="checkbox"]:checked {
            accent-color: black;
          }

          @media print {
            input[type="checkbox"] {
              -webkit-appearance: checkbox;
              appearance: checkbox;
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
      printWindow.print();
      printWindow.close();
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentVouchervue_type_script_lang_js_ = (paymentVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(558)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentVouchervue_type_script_lang_js_,
  paymentVouchervue_type_template_id_3d1eb6e0_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "3d1eb6e0",
  "36e13303"
  
)

/* harmony default export */ var paymentVoucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d98828d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(560);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d98828d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d98828d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d98828d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d98828d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".compact-date-field[data-v-d98828d8]{font-size:12px!important}.compact-date-field .v-input__control[data-v-d98828d8],.compact-date-field .v-input__slot[data-v-d98828d8]{max-height:32px!important;min-height:32px!important}.compact-date-field .v-input__slot[data-v-d98828d8]{align-items:center!important;padding:0 8px!important}.compact-date-field .v-text-field__details[data-v-d98828d8]{display:none!important}.compact-date-field .v-input__icon--prepend-inner[data-v-d98828d8]{align-self:center!important;margin-right:6px!important;margin-top:0!important}.compact-date-field .v-input__icon--append[data-v-d98828d8]{align-self:center!important;margin-left:6px!important;margin-top:0!important}.compact-date-field .v-text-field__slot[data-v-d98828d8]{align-items:center!important;max-height:30px!important;min-height:30px!important}.compact-date-field input[data-v-d98828d8]{font-size:12px!important;height:30px!important;line-height:1.2!important;margin:0!important;padding:0!important}.compact-date-field .v-text-field--outlined .v-input__control .v-input__slot[data-v-d98828d8],.compact-date-field.v-text-field--outlined .v-input__control .v-input__slot[data-v-d98828d8]{background:#fafafa!important;border:1px solid #e5e7eb!important;border-radius:4px!important}.compact-date-field .v-text-field--outlined.v-input--is-focused .v-input__control .v-input__slot[data-v-d98828d8],.compact-date-field.v-input--is-focused .v-input__slot[data-v-d98828d8]{background:#fff!important;border-color:#667eea!important;box-shadow:0 0 0 2px rgba(102,126,234,.1)!important}.compact-date-field .v-text-field--outlined.v-input--is-disabled .v-input__control .v-input__slot[data-v-d98828d8],.compact-date-field.v-input--is-disabled .v-input__slot[data-v-d98828d8]{background-color:#f3f4f6!important;border-color:#d1d5db!important;opacity:.6!important}.compact-date-field .v-text-field--outlined fieldset[data-v-d98828d8]{border:none!important}.compact-date-field .v-text-field--outlined .v-text-field__details[data-v-d98828d8]{display:none!important}.v-menu__content[data-v-d98828d8]{border-radius:8px!important;box-shadow:0 8px 32px rgba(0,0,0,.12)!important;overflow:hidden!important}.v-date-picker[data-v-d98828d8]{box-shadow:none!important}.modal-header-right[data-v-d98828d8]{align-items:center;display:flex;gap:15px}.voucher-number[data-v-d98828d8]{color:#fff;font-size:14px;font-weight:600;opacity:.9}.modal-overlay[data-v-d98828d8]{align-items:center;animation:fadeIn-d98828d8 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-d98828d8{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-d98828d8]{animation:slideIn-d98828d8 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:98vh;max-width:95vw;overflow:hidden;width:95%}@keyframes slideIn-d98828d8{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-d98828d8]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:16px 18px}.modal-title-section[data-v-d98828d8]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-d98828d8]{font-size:18px;opacity:.9}.modal-title[data-v-d98828d8]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-d98828d8]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;opacity:.8;padding:6px;transition:opacity .2s}.close-btn[data-v-d98828d8]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-d98828d8]{max-height:calc(98vh - 120px);overflow-y:auto;padding:16px 18px}.form-loading[data-v-d98828d8]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-d98828d8]{animation:spin-d98828d8 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-d98828d8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid[data-v-d98828d8]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(3,1fr)}.form-group[data-v-d98828d8]{margin-bottom:0}.form-group.full-width[data-v-d98828d8]{grid-column:1/-1}.form-group.span-2[data-v-d98828d8]{grid-column:span 2}.form-group.span-3[data-v-d98828d8]{grid-column:span 3}.form-label[data-v-d98828d8]{align-items:center;color:#374151;display:flex;font-size:11px;font-weight:600;gap:6px;margin-bottom:4px}.form-label.required[data-v-d98828d8]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-d98828d8]{color:#6b7280;font-size:11px}.form-control[data-v-d98828d8]{background:#fafafa;border:1px solid #e5e7eb;border-radius:4px;box-sizing:border-box;font-size:12px;height:32px;padding:6px 8px;transition:all .2s ease;width:100%}.form-control[data-v-d98828d8]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}textarea.form-control[data-v-d98828d8]{height:auto;min-height:60px;resize:vertical}.custom-select-wrapper[data-v-d98828d8]{position:relative}.custom-select[data-v-d98828d8]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:32px}.select-icon[data-v-d98828d8]{color:#6b7280;font-size:12px;pointer-events:none;position:absolute;right:8px;top:50%;transform:translateY(-50%)}.ministry-info[data-v-d98828d8]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:4px;margin-top:6px;padding:6px}.ministry-details[data-v-d98828d8]{grid-gap:3px;display:grid;gap:3px;grid-template-columns:1fr}.ministry-detail-item[data-v-d98828d8]{align-items:center;color:#075985;display:flex;font-size:10px;gap:4px}.ministry-detail-item i[data-v-d98828d8]{color:#0ea5e9;flex-shrink:0;width:12px}.ministry-name[data-v-d98828d8]{font-weight:600}.ministry-code[data-v-d98828d8]{background:#e0f2fe;border-radius:2px;font-family:monospace;padding:1px 4px}.bank-account-info[data-v-d98828d8]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:4px;margin-top:6px;padding:6px}.bank-details[data-v-d98828d8]{grid-gap:3px;display:grid;gap:3px;grid-template-columns:1fr}.bank-detail-item[data-v-d98828d8]{align-items:center;color:#6b7280;display:flex;font-size:10px;gap:4px}.bank-detail-item i[data-v-d98828d8]{color:#667eea;width:12px}.form-errors[data-v-d98828d8]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;margin-top:16px;padding:12px}.form-errors h6[data-v-d98828d8]{align-items:center;color:#dc2626;display:flex;font-size:12px;gap:6px;margin:0 0 8px}.form-errors ul[data-v-d98828d8]{color:#dc2626;font-size:11px;margin:0;padding-left:16px}.enhanced-footer[data-v-d98828d8]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:12px 18px}.btn[data-v-d98828d8]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-d98828d8]:hover:not(:disabled){box-shadow:0 3px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-d98828d8]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-d98828d8]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-d98828d8]{background:#6c757d;color:#fff}.btn[data-v-d98828d8]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-d98828d8]{animation:spin-d98828d8 1s linear infinite}@media (max-width:1024px){.form-grid[data-v-d98828d8]{grid-template-columns:repeat(2,1fr)}.form-group.span-2[data-v-d98828d8],.form-group.span-3[data-v-d98828d8]{grid-column:1/-1}}@media (max-width:768px){.enhanced-dialog[data-v-d98828d8]{margin:10px;width:98%}.form-grid[data-v-d98828d8]{grid-template-columns:1fr}.form-group.span-2[data-v-d98828d8],.form-group.span-3[data-v-d98828d8]{grid-column:1}.enhanced-footer[data-v-d98828d8],.modal-body[data-v-d98828d8],.modal-header[data-v-d98828d8]{padding:14px 16px}.enhanced-footer[data-v-d98828d8]{flex-direction:column-reverse}.enhanced-footer .btn[data-v-d98828d8]{justify-content:center;width:100%}.compact-date-field .v-input__slot[data-v-d98828d8]{padding:0 6px!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(561);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-0bf00b78]{align-items:center;animation:fadeIn-0bf00b78 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-0bf00b78{0%{opacity:0}to{opacity:1}}.detail-dialog[data-v-0bf00b78]{animation:slideIn-0bf00b78 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:850px;overflow:hidden;width:95%}@keyframes slideIn-0bf00b78{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-0bf00b78]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-0bf00b78]{font-size:20px;opacity:.9}.modal-title[data-v-0bf00b78]{font-size:20px;font-weight:600;margin:0}.header-actions[data-v-0bf00b78]{align-items:center;display:flex;gap:8px}.btn-icon[data-v-0bf00b78]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;opacity:.8;padding:8px;transition:all .2s}.btn-icon[data-v-0bf00b78]:hover{background:hsla(0,0%,100%,.1);opacity:1}.close-btn[data-v-0bf00b78]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-0bf00b78]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-0bf00b78]{max-height:70vh;overflow-y:auto;padding:0}.detail-body[data-v-0bf00b78]{background:#f8f9fa}.detail-loading[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #e9ecef;border-radius:8px;color:#666;display:flex;justify-content:center;margin:20px;padding:60px}.spinner-small[data-v-0bf00b78]{animation:spin-0bf00b78 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-0bf00b78{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.detail-content[data-v-0bf00b78]{display:flex;flex-direction:column;gap:20px;padding:24px}.detail-status[data-v-0bf00b78]{background:#fff;border:2px solid #e9ecef;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:0;padding:20px;text-align:center}.status-badge[data-v-0bf00b78]{align-items:center;border:2px solid transparent;border-radius:25px;display:inline-flex;font-size:16px;font-weight:600;gap:8px;letter-spacing:.5px;padding:12px 24px;text-transform:uppercase}.status-badge.status-pending[data-v-0bf00b78]{background:linear-gradient(135deg,#f39c12,#e67e22);border-color:#d68910;color:#fff}.status-badge.status-approved[data-v-0bf00b78]{background:linear-gradient(135deg,#27ae60,#229954);border-color:#1e8449;color:#fff}.status-badge.status-settled[data-v-0bf00b78]{background:linear-gradient(135deg,#3498db,#2980b9);border-color:#2471a3;color:#fff}.status-badge.status-rejected[data-v-0bf00b78]{background:linear-gradient(135deg,#e74c3c,#c0392b);border-color:#a93226;color:#fff}.status-badge.status-cancelled[data-v-0bf00b78]{background:linear-gradient(135deg,#95a5a6,#7f8c8d);border-color:#6c7b7d;color:#fff}.detail-section[data-v-0bf00b78]{background:#fff;border:2px solid #e9ecef;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:20px;padding:24px;transition:all .2s ease}.detail-section[data-v-0bf00b78]:hover{border-color:#dee2e6;box-shadow:0 4px 12px rgba(0,0,0,.12)}.detail-section[data-v-0bf00b78]:last-child{margin-bottom:0}.section-title[data-v-0bf00b78]{align-items:center;border-bottom:3px solid #ecf0f1;color:#2c3e50;display:flex;font-size:18px;font-weight:700;gap:12px;margin-bottom:20px;padding-bottom:12px}.section-title i[data-v-0bf00b78]{color:#3498db;font-size:16px}.detail-grid[data-v-0bf00b78]{grid-gap:24px;display:grid;gap:24px;grid-template-columns:1fr 1fr}.detail-item[data-v-0bf00b78]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;display:flex;flex-direction:column;gap:8px;padding:16px;transition:all .2s ease}.detail-item[data-v-0bf00b78]:hover{background:#e8f4fd;border-color:#3498db}.detail-item.full-width[data-v-0bf00b78]{grid-column:1/-1}.detail-item label[data-v-0bf00b78]{color:#6c757d;font-size:12px;font-weight:700;letter-spacing:.8px;margin-bottom:4px;text-transform:uppercase}.detail-value[data-v-0bf00b78]{color:#2c3e50;font-size:16px;font-weight:600;word-break:break-word}.amount-display[data-v-0bf00b78]{background:linear-gradient(135deg,#d5f4e6,#fafafa);border:2px solid #a9dfbf;border-radius:8px;color:#27ae60;font-size:28px;font-weight:800;padding:8px;text-align:center}.amount-display small[data-v-0bf00b78]{color:#6c757d;font-size:16px;font-weight:500;margin-left:8px}.exchange-rate-display[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#f4ecf7,#fafafa);border:2px solid #d7bde2;border-radius:8px;color:#8e44ad;display:flex;font-size:18px;font-weight:700;gap:8px;justify-content:center;padding:12px;text-align:center}.exchange-rate-display i[data-v-0bf00b78]{color:#9b59b6;font-size:16px}.user-info[data-v-0bf00b78]{align-items:center;background:#e8f4fd;border:1px solid #85c1e9;border-radius:6px;display:flex;gap:10px;padding:8px 12px}.user-info i[data-v-0bf00b78]{color:#3498db;font-size:14px}.timeline[data-v-0bf00b78]{background:#fafafa;border:2px solid #e9ecef;border-radius:8px;padding:20px;position:relative}.timeline[data-v-0bf00b78]:before{background:linear-gradient(180deg,#3498db,#ecf0f1);border-radius:2px;bottom:20px;content:\"\";left:35px;position:absolute;top:20px;width:3px}.timeline-item[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #ecf0f1;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);display:flex;margin-bottom:24px;margin-left:20px;padding:16px;position:relative}.timeline-item[data-v-0bf00b78]:last-child{margin-bottom:0}.timeline-icon[data-v-0bf00b78]{align-items:center;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.2);color:#fff;display:flex;font-size:16px;height:40px;justify-content:center;left:-36px;margin-right:20px;position:absolute;width:40px;z-index:1}.timeline-icon.created[data-v-0bf00b78]{background:linear-gradient(135deg,#3498db,#2980b9)}.timeline-icon.approved[data-v-0bf00b78]{background:linear-gradient(135deg,#27ae60,#229954)}.timeline-icon.due[data-v-0bf00b78]{background:linear-gradient(135deg,#f39c12,#e67e22)}.timeline-icon.due.overdue[data-v-0bf00b78]{animation:pulse-0bf00b78 2s infinite;background:linear-gradient(135deg,#e74c3c,#c0392b)}.timeline-icon.settled[data-v-0bf00b78]{background:linear-gradient(135deg,#9b59b6,#8e44ad)}@keyframes pulse-0bf00b78{0%{box-shadow:0 0 0 0 rgba(231,76,60,.7),0 2px 8px rgba(0,0,0,.2)}70%{box-shadow:0 0 0 12px rgba(231,76,60,0),0 2px 8px rgba(0,0,0,.2)}to{box-shadow:0 0 0 0 rgba(231,76,60,0),0 2px 8px rgba(0,0,0,.2)}}.timeline-content[data-v-0bf00b78]{flex:1;margin-left:20px}.timeline-content label[data-v-0bf00b78]{color:#6c757d;display:block;font-size:12px;font-weight:700;letter-spacing:.5px;margin-bottom:4px;text-transform:uppercase}.timeline-date[data-v-0bf00b78]{color:#2c3e50;font-size:15px;font-weight:600}.timeline-date.overdue[data-v-0bf00b78]{color:#e74c3c;font-weight:700}.overdue-badge[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#e74c3c,#c0392b);border:1px solid #a93226;border-radius:12px;color:#fff;display:inline-flex;font-size:11px;font-weight:600;gap:4px;margin-left:8px;padding:4px 8px}.notes-content[data-v-0bf00b78]{background:#fff9e6;border:2px solid #f7dc6f;border-left:6px solid #f1c40f;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);color:#2c3e50;font-size:15px;font-style:italic;line-height:1.8;padding:20px}.history-list[data-v-0bf00b78]{display:flex;flex-direction:column;gap:12px}.history-item[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #ecf0f1;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.05);display:flex;gap:16px;padding:16px;transition:all .2s ease}.history-item[data-v-0bf00b78]:hover{background:#f8fcff;border-color:#3498db}.history-icon[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#3498db,#2980b9);border:2px solid #85c1e9;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:12px;height:32px;justify-content:center;width:32px}.history-content[data-v-0bf00b78]{display:flex;flex:1;flex-direction:column;gap:4px}.history-action[data-v-0bf00b78]{color:#2c3e50;font-size:15px;font-weight:700;text-transform:capitalize}.history-user[data-v-0bf00b78]{color:#6c757d;font-size:13px;font-weight:500}.history-date[data-v-0bf00b78]{color:#95a5a6;font-size:12px;font-weight:400}.detail-error[data-v-0bf00b78]{background:#fff;border:2px solid #fadbd8;border-radius:12px;color:#e74c3c;margin:20px;padding:60px 20px;text-align:center}.detail-error i[data-v-0bf00b78]{font-size:48px;margin-bottom:15px;opacity:.7}.detail-footer[data-v-0bf00b78]{align-items:center;background:#f8f9fa;border-top:2px solid #e9ecef;display:flex;justify-content:space-between;padding:16px 24px}.close-detail-btn[data-v-0bf00b78]{align-items:center;background:#6c757d;border:none;border-radius:6px;color:#fff;cursor:pointer;display:flex;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s ease}.close-detail-btn[data-v-0bf00b78]:hover{background:#5a6268;transform:translateY(-1px)}.detail-actions[data-v-0bf00b78]{align-items:center;display:flex;gap:8px}.detail-actions .action-btn[data-v-0bf00b78]{align-items:center;border:none;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;display:flex;font-size:14px;height:36px;justify-content:center;padding:0;position:relative;transition:all .2s ease;width:36px}.detail-actions .action-btn[data-v-0bf00b78]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-2px)}.detail-actions .action-btn[data-v-0bf00b78]:active{box-shadow:0 1px 2px rgba(0,0,0,.1);transform:translateY(0)}.detail-actions .btn-warning[data-v-0bf00b78]{background:#ffc107;color:#212529}.detail-actions .btn-warning[data-v-0bf00b78]:hover{background:#e0a800}.detail-actions .btn-success[data-v-0bf00b78]{background:#28a745;color:#fff}.detail-actions .btn-success[data-v-0bf00b78]:hover{background:#218838}.detail-actions .btn-primary[data-v-0bf00b78]{background:#007bff;color:#fff}.detail-actions .btn-primary[data-v-0bf00b78]:hover{background:#0056b3}.btn[data-v-0bf00b78]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:6px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-0bf00b78]{background:#007bff;color:#fff}.btn-primary[data-v-0bf00b78]:hover{background:#0056b3}.btn-secondary[data-v-0bf00b78]{background:#6c757d;color:#fff}.btn-secondary[data-v-0bf00b78]:hover{background:#5a6268}.btn-sm[data-v-0bf00b78]{font-size:12px;padding:4px 8px}.detail-actions .action-btn[data-v-0bf00b78]:before{background:rgba(0,0,0,.8);border-radius:4px;bottom:-32px;color:#fff;content:attr(title);font-size:11px;left:50%;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;transform:translateX(-50%);transition:opacity .2s ease;white-space:nowrap;z-index:10}.detail-actions .action-btn[data-v-0bf00b78]:hover:before{opacity:1}@media (max-width:768px){.detail-dialog[data-v-0bf00b78]{margin:10px;width:98%}.detail-grid[data-v-0bf00b78]{gap:16px;grid-template-columns:1fr}.detail-footer[data-v-0bf00b78]{align-items:center;flex-direction:row;justify-content:space-between;padding:12px 16px}.close-detail-btn[data-v-0bf00b78]{font-size:14px;padding:6px 12px}.detail-actions[data-v-0bf00b78]{gap:6px}.detail-actions .action-btn[data-v-0bf00b78]{font-size:12px;height:32px;width:32px}.detail-actions .action-btn[data-v-0bf00b78]:before{bottom:-28px;font-size:10px}.timeline[data-v-0bf00b78]{padding:16px}.timeline[data-v-0bf00b78]:before{left:25px}.timeline-item[data-v-0bf00b78]{margin-left:10px;padding:12px}.timeline-icon[data-v-0bf00b78]{font-size:12px;height:32px;left:-26px;width:32px}.amount-display[data-v-0bf00b78]{font-size:24px}.exchange-rate-display[data-v-0bf00b78]{font-size:16px}.detail-content[data-v-0bf00b78],.detail-section[data-v-0bf00b78],.modal-header[data-v-0bf00b78]{padding:16px}.section-title[data-v-0bf00b78]{font-size:16px}}@media (max-width:480px){.detail-content[data-v-0bf00b78],.detail-section[data-v-0bf00b78]{padding:12px}.section-title[data-v-0bf00b78]{font-size:14px}.amount-display[data-v-0bf00b78]{font-size:20px}.exchange-rate-display[data-v-0bf00b78]{font-size:14px}.timeline-content[data-v-0bf00b78]{margin-left:10px}}@media print{.modal-overlay[data-v-0bf00b78]{-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background:none!important;position:static!important}.detail-dialog[data-v-0bf00b78]{box-shadow:none!important;margin:0!important;max-width:none!important;width:100%!important}.modal-footer[data-v-0bf00b78],.modal-header[data-v-0bf00b78]{display:none!important}.detail-body[data-v-0bf00b78]{background:#fff!important;max-height:none!important}.btn[data-v-0bf00b78],.header-actions[data-v-0bf00b78]{display:none!important}.detail-section[data-v-0bf00b78]{-moz-column-break-inside:avoid;border:2px solid #333!important;break-inside:avoid;margin-bottom:20px!important;page-break-inside:avoid}.section-title[data-v-0bf00b78]{border-bottom:2px solid #333!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-dialog[data-v-5c476a8a]{max-height:90vh;max-width:900px;width:95%}.audit-header[data-v-5c476a8a]{background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff}.audit-content[data-v-5c476a8a]{max-height:70vh;overflow-y:auto}.error-container[data-v-5c476a8a],.loading-container[data-v-5c476a8a],.no-data-container[data-v-5c476a8a]{color:#666;padding:40px 20px;text-align:center}.spinner[data-v-5c476a8a]{animation:spin-5c476a8a 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#4f46e5;height:40px;margin:0 auto 20px;width:40px}@keyframes spin-5c476a8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.error-icon[data-v-5c476a8a],.no-data-icon[data-v-5c476a8a]{font-size:48px;margin-bottom:15px;opacity:.5}.audit-summary[data-v-5c476a8a]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:24px}.summary-card[data-v-5c476a8a]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;gap:12px;padding:16px}.summary-card[data-v-5c476a8a],.summary-icon[data-v-5c476a8a]{align-items:center;display:flex}.summary-icon[data-v-5c476a8a]{background:#4f46e5;border-radius:50%;color:#fff;font-size:18px;height:40px;justify-content:center;width:40px}.summary-info[data-v-5c476a8a]{flex:1}.summary-label[data-v-5c476a8a]{color:#64748b;font-size:12px;margin-bottom:4px}.summary-value[data-v-5c476a8a]{color:#1e293b;font-size:16px;font-weight:600}.audit-controls[data-v-5c476a8a]{margin-bottom:24px}.filter-controls[data-v-5c476a8a]{align-items:center;display:flex;gap:12px}.filter-select[data-v-5c476a8a]{border:1px solid #d1d5db;border-radius:6px;font-size:14px;max-width:200px;padding:8px 12px}.audit-timeline[data-v-5c476a8a]{position:relative}.audit-timeline[data-v-5c476a8a]:before{background:#e2e8f0;bottom:0;content:\"\";left:20px;position:absolute;top:0;width:2px}.timeline-item[data-v-5c476a8a]{margin-bottom:24px;margin-left:40px;position:relative}.timeline-item.expandable .timeline-header[data-v-5c476a8a]{cursor:pointer}.timeline-item.expandable .timeline-header[data-v-5c476a8a]:hover{background:#f8fafc}.timeline-marker[data-v-5c476a8a]{align-items:center;background:#fff;border:2px solid #e2e8f0;border-radius:50%;display:flex;font-size:16px;height:40px;justify-content:center;left:-60px;position:absolute;top:8px;width:40px}.timeline-content[data-v-5c476a8a]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden}.timeline-header[data-v-5c476a8a]{align-items:center;border-radius:8px;display:flex;justify-content:space-between;padding:16px;transition:background-color .2s}.timeline-main-info[data-v-5c476a8a]{flex:1}.timeline-action[data-v-5c476a8a]{align-items:center;display:flex;gap:12px;margin-bottom:4px}.action-badge[data-v-5c476a8a]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 8px;text-transform:uppercase}.action-badge.create[data-v-5c476a8a]{background:#dcfce7;color:#166534}.action-badge.update[data-v-5c476a8a]{background:#fef3c7;color:#92400e}.action-badge.approve[data-v-5c476a8a]{background:#dcfce7;color:#166534}.action-badge.settle[data-v-5c476a8a]{background:#dbeafe;color:#1e40af}.action-badge.delete[data-v-5c476a8a]{background:#fee2e2;color:#dc2626}.timeline-time[data-v-5c476a8a]{color:#64748b;font-size:12px}.timeline-user[data-v-5c476a8a]{align-items:center;color:#475569;display:flex;font-size:14px;gap:6px}.timeline-toggle[data-v-5c476a8a]{align-items:center;color:#64748b;display:flex;gap:8px}.changes-count[data-v-5c476a8a],.toggle-icon[data-v-5c476a8a]{font-size:12px}.toggle-icon[data-v-5c476a8a]{transition:transform .2s}.timeline-reason[data-v-5c476a8a]{align-items:center;background:#f1f5f9;border-top:1px solid #e2e8f0;color:#475569;display:flex;font-size:14px;font-style:italic;gap:8px;padding:8px 16px}.timeline-details[data-v-5c476a8a]{background:#fafbfc;border-top:1px solid #e2e8f0;padding:16px}.changes-list h6[data-v-5c476a8a]{color:#374151;font-size:14px;margin:0 0 12px}.change-item[data-v-5c476a8a]{background:#fff;border:1px solid #e2e8f0;border-radius:6px;margin-bottom:12px;padding:12px}.change-field[data-v-5c476a8a]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.change-values[data-v-5c476a8a]{grid-gap:12px;align-items:center;display:grid;gap:12px;grid-template-columns:1fr auto 1fr}.new-value[data-v-5c476a8a],.old-value[data-v-5c476a8a]{display:flex;flex-direction:column;gap:4px}.value-label[data-v-5c476a8a]{color:#64748b;font-size:12px;font-weight:500}.value[data-v-5c476a8a]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;color:#1e293b;font-size:14px;padding:6px 8px}.old-value .value[data-v-5c476a8a]{background:#fef2f2;border-color:#fecaca;color:#991b1b}.new-value .value[data-v-5c476a8a]{background:#f0fdf4;border-color:#bbf7d0;color:#166534}.arrow[data-v-5c476a8a]{color:#64748b;font-size:14px}.view-full-details[data-v-5c476a8a]{margin-top:12px;text-align:center}.load-more-container[data-v-5c476a8a]{border-top:1px solid #e2e8f0;margin-top:24px;padding-top:24px;text-align:center}.btn[data-v-5c476a8a]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;transition:all .2s}.btn[data-v-5c476a8a]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-primary[data-v-5c476a8a]{background:#4f46e5;color:#fff}.btn-secondary[data-v-5c476a8a]{background:#6b7280;color:#fff}.btn-info[data-v-5c476a8a]{background:#0ea5e9;color:#fff}.btn-link[data-v-5c476a8a]{background:none;border:1px solid transparent;color:#4f46e5;-webkit-text-decoration:none;text-decoration:none}.btn-link[data-v-5c476a8a]:hover{background:#f0f9ff;border-color:#bae6fd}.btn-sm[data-v-5c476a8a]{font-size:12px;padding:6px 12px}.btn[data-v-5c476a8a]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.audit-footer[data-v-5c476a8a]{background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;gap:12px;justify-content:flex-end}@media (max-width:768px){.audit-dialog[data-v-5c476a8a]{margin:10px;width:98%}.audit-summary[data-v-5c476a8a]{grid-template-columns:1fr}.filter-controls[data-v-5c476a8a]{align-items:stretch;flex-direction:column}.filter-select[data-v-5c476a8a]{max-width:none}.timeline-item[data-v-5c476a8a]{margin-left:20px}.timeline-marker[data-v-5c476a8a]{font-size:14px;height:30px;left:-40px;width:30px}.change-values[data-v-5c476a8a]{gap:8px;grid-template-columns:1fr}.arrow[data-v-5c476a8a]{text-align:center;transform:rotate(90deg)}.audit-footer[data-v-5c476a8a]{flex-direction:column-reverse}.audit-footer .btn[data-v-5c476a8a]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-e6a23e30]{align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.comparison-dialog[data-v-e6a23e30]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1000px;overflow:hidden;width:95%}.modal-header[data-v-e6a23e30]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-e6a23e30]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-e6a23e30]{font-size:20px}.modal-title[data-v-e6a23e30]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-e6a23e30]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-e6a23e30]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-e6a23e30]{max-height:70vh;overflow-y:auto;padding:0}.error-state[data-v-e6a23e30],.loading-state[data-v-e6a23e30],.no-differences[data-v-e6a23e30],.select-versions-prompt[data-v-e6a23e30]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:60px 20px;text-align:center}.spinner[data-v-e6a23e30]{animation:spin-e6a23e30 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#667eea;height:40px;margin-bottom:20px;width:40px}@keyframes spin-e6a23e30{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.error-icon[data-v-e6a23e30],.no-diff-icon[data-v-e6a23e30],.prompt-icon[data-v-e6a23e30]{font-size:48px;margin-bottom:20px;opacity:.6}.error-icon[data-v-e6a23e30]{color:#e74c3c}.prompt-icon[data-v-e6a23e30]{color:#3498db}.no-diff-icon[data-v-e6a23e30]{color:#27ae60}.version-selector[data-v-e6a23e30]{grid-gap:20px;align-items:end;background:#f8f9fa;border-bottom:1px solid #e9ecef;display:grid;gap:20px;grid-template-columns:1fr auto 1fr;padding:24px}.selector-group[data-v-e6a23e30]{display:flex;flex-direction:column;gap:8px}.selector-group label[data-v-e6a23e30]{color:#2c3e50;font-size:14px;font-weight:600}.form-control[data-v-e6a23e30]{background:#fff;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;padding:12px 16px;transition:border-color .2s ease}.form-control[data-v-e6a23e30]:focus{border-color:#667eea;outline:none}.comparison-arrow[data-v-e6a23e30]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;font-size:16px;height:40px;justify-content:center;margin-top:24px;width:40px}.comparison-results[data-v-e6a23e30]{padding:24px}.comparison-summary[data-v-e6a23e30]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:24px}.summary-card[data-v-e6a23e30]{background:#fff;border:1px solid #e9ecef;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);gap:12px;padding:16px}.summary-card[data-v-e6a23e30],.summary-icon[data-v-e6a23e30]{align-items:center;display:flex}.summary-icon[data-v-e6a23e30]{background:#667eea;border-radius:50%;color:#fff;font-size:16px;height:40px;justify-content:center;width:40px}.summary-number[data-v-e6a23e30]{color:#2c3e50;font-size:20px;font-weight:700}.summary-text[data-v-e6a23e30]{color:#2c3e50;font-size:12px;font-weight:600;word-break:break-word}.summary-label[data-v-e6a23e30]{color:#7f8c8d;font-size:11px;margin-top:4px}.differences-table h6[data-v-e6a23e30]{align-items:center;color:#2c3e50;display:flex;font-size:16px;font-weight:600;gap:8px;margin-bottom:16px}.table-container[data-v-e6a23e30]{border:1px solid #e9ecef;border-radius:8px;overflow:hidden}.comparison-table[data-v-e6a23e30]{background:#fff;border-collapse:collapse;width:100%}.comparison-table th[data-v-e6a23e30]{background:#f8f9fa;border-bottom:2px solid #e9ecef;font-size:13px;font-weight:600;padding:16px 12px;text-align:left}.field-header[data-v-e6a23e30]{color:#495057;width:200px}.version-header[data-v-e6a23e30]{position:relative}.version-header.version1[data-v-e6a23e30]{background:linear-gradient(135deg,#ffe6e6,#fcc)}.version-header.version2[data-v-e6a23e30]{background:linear-gradient(135deg,#e6ffe6,#cfc)}.version-info[data-v-e6a23e30]{text-align:center}.version-label[data-v-e6a23e30]{color:#2c3e50;font-weight:700}.version-date[data-v-e6a23e30]{color:#7f8c8d;font-size:11px;margin-top:2px}.comparison-table td[data-v-e6a23e30]{border-bottom:1px solid #f1f3f4;padding:16px 12px;vertical-align:top}.diff-row[data-v-e6a23e30]:hover{background:#f8f9fa}.field-cell[data-v-e6a23e30]{background:#fafbfc;border-right:1px solid #e9ecef}.field-info[data-v-e6a23e30]{align-items:center;display:flex;gap:8px}.field-info i[data-v-e6a23e30]{color:#6c757d;text-align:center;width:16px}.field-name[data-v-e6a23e30]{color:#495057;font-size:13px;font-weight:600}.value-cell[data-v-e6a23e30]{position:relative}.value-cell.version1[data-v-e6a23e30]{background:#fff8f8}.value-cell.version2[data-v-e6a23e30]{background:#f8fff8}.value-content[data-v-e6a23e30]{align-items:center;display:flex;justify-content:space-between;min-height:24px;position:relative}.value-text[data-v-e6a23e30]{background:hsla(0,0%,100%,.8);border:1px solid transparent;border-radius:4px;flex:1;font-family:\"Monaco\",\"Menlo\",\"Ubuntu Mono\",monospace;font-size:12px;padding:6px 10px}.old-value .value-text[data-v-e6a23e30]{background:#fef2f2;border-color:#fecaca;color:#dc2626}.new-value .value-text[data-v-e6a23e30]{background:#f0fdf4;border-color:#bbf7d0;color:#059669}.change-indicator[data-v-e6a23e30]{color:#3b82f6;font-size:12px;margin-left:8px;opacity:.7}.comparison-actions[data-v-e6a23e30]{gap:12px;justify-content:center;margin-top:24px;padding-top:24px}.comparison-actions[data-v-e6a23e30],.modal-footer[data-v-e6a23e30]{border-top:1px solid #e9ecef;display:flex}.modal-footer[data-v-e6a23e30]{align-items:center;background:#f8f9fa;justify-content:space-between;padding:20px 24px}.btn[data-v-e6a23e30]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-e6a23e30]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-e6a23e30]:disabled{cursor:not-allowed;opacity:.6;transform:none!important}.btn-primary[data-v-e6a23e30]{background:#667eea;color:#fff}.btn-secondary[data-v-e6a23e30]{background:#6c757d;color:#fff}.btn-warning[data-v-e6a23e30]{background:#f39c12;color:#fff}.btn-outline[data-v-e6a23e30]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline[data-v-e6a23e30]:hover:not(:disabled){background:#667eea;color:#fff}.btn-sm[data-v-e6a23e30]{font-size:12px;padding:8px 16px}@media (max-width:768px){.comparison-dialog[data-v-e6a23e30]{margin:10px;width:98%}.version-selector[data-v-e6a23e30]{gap:16px;grid-template-columns:1fr}.comparison-arrow[data-v-e6a23e30]{margin:0 auto;transform:rotate(90deg)}.comparison-summary[data-v-e6a23e30]{grid-template-columns:1fr}.comparison-table[data-v-e6a23e30]{font-size:12px}.comparison-table td[data-v-e6a23e30],.comparison-table th[data-v-e6a23e30]{padding:12px 8px}.field-header[data-v-e6a23e30]{width:auto}.modal-footer[data-v-e6a23e30]{gap:12px}.comparison-actions[data-v-e6a23e30],.modal-footer[data-v-e6a23e30]{flex-direction:column}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(564);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-7e1ed358]{align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.reports-dialog[data-v-7e1ed358]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1200px;overflow:hidden;width:95%}.modal-header[data-v-7e1ed358]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-7e1ed358]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-7e1ed358]{font-size:20px}.modal-title[data-v-7e1ed358]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-7e1ed358]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-7e1ed358]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-7e1ed358]{max-height:70vh;overflow-y:auto;padding:0}.tabs-container[data-v-7e1ed358]{background:#f8f9fa;border-bottom:1px solid #e9ecef}.tabs[data-v-7e1ed358]{display:flex;padding:0 24px}.tab-btn[data-v-7e1ed358]{align-items:center;background:none;border:none;border-bottom:3px solid transparent;color:#6c757d;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;padding:16px 24px;transition:all .2s ease}.tab-btn[data-v-7e1ed358]:hover{background:hsla(0,0%,100%,.5);color:#495057}.tab-btn.active[data-v-7e1ed358]{background:#fff;border-bottom-color:#667eea;color:#667eea}.report-content[data-v-7e1ed358]{padding:24px}.report-header[data-v-7e1ed358]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;margin-bottom:24px;padding-bottom:16px}.report-header h6[data-v-7e1ed358]{color:#2c3e50;font-size:16px;gap:8px;margin:0}.date-filter[data-v-7e1ed358],.report-header h6[data-v-7e1ed358]{align-items:center;display:flex}.date-filter[data-v-7e1ed358]{gap:12px}.date-filter span[data-v-7e1ed358]{color:#6c757d;font-size:14px}.form-control[data-v-7e1ed358]{border:1px solid #ddd;border-radius:4px;font-size:14px;padding:8px 12px}.loading-state[data-v-7e1ed358]{align-items:center;color:#6c757d;display:flex;gap:12px;justify-content:center;padding:60px}.spinner-sm[data-v-7e1ed358]{animation:spin-7e1ed358 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#667eea;height:20px;width:20px}.activity-summary[data-v-7e1ed358]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:24px}.summary-card[data-v-7e1ed358]{background:#fff;border:1px solid #e9ecef;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);gap:12px;padding:16px}.summary-card[data-v-7e1ed358],.summary-icon[data-v-7e1ed358]{align-items:center;display:flex}.summary-icon[data-v-7e1ed358]{background:#667eea;border-radius:50%;color:#fff;font-size:16px;height:40px;justify-content:center;width:40px}.summary-number[data-v-7e1ed358]{color:#2c3e50;font-size:20px;font-weight:700}.summary-text[data-v-7e1ed358]{color:#2c3e50;font-size:14px;font-weight:600}.summary-label[data-v-7e1ed358]{color:#7f8c8d;font-size:11px;margin-top:4px}.activity-table[data-v-7e1ed358]{border:1px solid #e9ecef;border-radius:8px;overflow:hidden}.table[data-v-7e1ed358]{border-collapse:collapse;margin:0;width:100%}.table th[data-v-7e1ed358]{background:#f8f9fa;border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;text-align:left}.table td[data-v-7e1ed358],.table th[data-v-7e1ed358]{font-size:13px;padding:12px}.table td[data-v-7e1ed358]{border-bottom:1px solid #f1f3f4}.user-info[data-v-7e1ed358]{display:flex;flex-direction:column;gap:2px}.user-name[data-v-7e1ed358]{color:#2c3e50;font-weight:600}.user-id[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.activity-count[data-v-7e1ed358]{border-radius:12px;display:inline-block;font-size:11px;font-weight:600;min-width:24px;padding:4px 8px;text-align:center}.activity-count.create[data-v-7e1ed358]{background:#d4edda;color:#155724}.activity-count.update[data-v-7e1ed358]{background:#fff3cd;color:#856404}.activity-count.approve[data-v-7e1ed358]{background:#cce5ff;color:#004085}.activity-count.settle[data-v-7e1ed358]{background:#e2e3e5;color:#495057}.activity-count.delete[data-v-7e1ed358]{background:#f8d7da;color:#721c24}.total-count[data-v-7e1ed358]{color:#2c3e50;font-weight:700}.chart-container[data-v-7e1ed358]{margin-bottom:32px}.chart-container h6[data-v-7e1ed358]{color:#2c3e50;margin-bottom:16px}.chart-placeholder[data-v-7e1ed358]{background:#f8f9fa;border-radius:8px;min-height:200px;padding:20px}.chart-bars[data-v-7e1ed358]{align-items:end;display:flex;gap:4px;height:150px;margin-bottom:8px}.chart-bar[data-v-7e1ed358]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:4px 4px 0 0;cursor:pointer;flex:1;min-height:8px;position:relative;transition:all .2s ease}.chart-bar[data-v-7e1ed358]:hover{opacity:.8}.bar-value[data-v-7e1ed358]{color:#495057;font-size:10px;font-weight:600;left:50%;position:absolute;top:-20px;transform:translateX(-50%)}.chart-labels[data-v-7e1ed358]{display:flex;gap:4px}.chart-label[data-v-7e1ed358]{color:#6c757d;flex:1;font-size:10px;text-align:center}.breakdown-grid[data-v-7e1ed358]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:32px}.breakdown-item[data-v-7e1ed358]{align-items:center;background:#f8f9fa;border-radius:8px;display:flex;gap:12px;padding:16px}.breakdown-icon[data-v-7e1ed358]{align-items:center;border-radius:50%;color:#fff;display:flex;font-size:14px;height:32px;justify-content:center;width:32px}.breakdown-icon.create[data-v-7e1ed358]{background:#28a745}.breakdown-icon.update[data-v-7e1ed358]{background:#ffc107;color:#212529}.breakdown-icon.approve[data-v-7e1ed358]{background:#17a2b8}.breakdown-icon.settle[data-v-7e1ed358]{background:#6c757d}.breakdown-icon.delete[data-v-7e1ed358]{background:#dc3545}.breakdown-label[data-v-7e1ed358]{color:#2c3e50;font-size:12px;font-weight:600}.breakdown-count[data-v-7e1ed358]{color:#495057;font-size:18px;font-weight:700}.breakdown-percentage[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.changes-timeline[data-v-7e1ed358]{display:flex;flex-direction:column;gap:12px}.change-item[data-v-7e1ed358]{background:#f8f9fa;border-radius:6px;gap:12px;padding:12px}.change-icon[data-v-7e1ed358],.change-item[data-v-7e1ed358]{align-items:center;display:flex}.change-icon[data-v-7e1ed358]{border-radius:50%;color:#fff;font-size:10px;height:24px;justify-content:center;width:24px}.change-content[data-v-7e1ed358]{flex:1}.change-text[data-v-7e1ed358]{color:#495057;font-size:13px;margin-bottom:2px}.change-time[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.export-options[data-v-7e1ed358]{display:flex;flex-direction:column;gap:24px}.export-option[data-v-7e1ed358]{border:1px solid #e9ecef;border-radius:8px;padding:20px}.option-header[data-v-7e1ed358]{align-items:center;display:flex;gap:12px;margin-bottom:12px}.option-header i[data-v-7e1ed358]{color:#667eea;font-size:18px}.option-header h6[data-v-7e1ed358]{color:#2c3e50;margin:0}.export-controls[data-v-7e1ed358]{gap:12px;margin-top:16px}.date-range[data-v-7e1ed358],.export-controls[data-v-7e1ed358]{align-items:center;display:flex}.date-range[data-v-7e1ed358]{gap:8px}.backup-info[data-v-7e1ed358]{color:#6c757d}.btn[data-v-7e1ed358]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;transition:all .2s ease}.btn[data-v-7e1ed358]:hover:not(:disabled){transform:translateY(-1px)}.btn[data-v-7e1ed358]:disabled{cursor:not-allowed;opacity:.6;transform:none!important}.btn-primary[data-v-7e1ed358]{background:#667eea;color:#fff}.btn-secondary[data-v-7e1ed358]{background:#6c757d;color:#fff}.btn-warning[data-v-7e1ed358]{background:#ffc107;color:#212529}.btn-outline[data-v-7e1ed358]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline[data-v-7e1ed358]:hover:not(:disabled){background:#667eea;color:#fff}.btn-sm[data-v-7e1ed358]{font-size:12px;padding:6px 12px}.modal-footer[data-v-7e1ed358]{align-items:center;background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px 24px}.no-data[data-v-7e1ed358]{color:#6c757d;padding:60px 20px;text-align:center}.no-data i[data-v-7e1ed358]{font-size:48px;margin-bottom:16px;opacity:.5}@media (max-width:768px){.reports-dialog[data-v-7e1ed358]{margin:10px;width:98%}.tabs[data-v-7e1ed358]{overflow-x:auto;padding:0 16px}.tab-btn[data-v-7e1ed358]{padding:12px 16px;white-space:nowrap}.report-content[data-v-7e1ed358]{padding:16px}.report-header[data-v-7e1ed358]{align-items:stretch;flex-direction:column;gap:16px}.date-filter[data-v-7e1ed358]{flex-wrap:wrap}.activity-summary[data-v-7e1ed358],.breakdown-grid[data-v-7e1ed358]{grid-template-columns:1fr}.export-controls[data-v-7e1ed358]{align-items:stretch;flex-direction:column}.date-range[data-v-7e1ed358]{justify-content:center}}@keyframes spin-7e1ed358{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(930);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ce24a9da", content, true, context)
};

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js + 16 modules
var VDatePicker = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDialog/index.vue?vue&type=template&id=d98828d8&scoped=true&




var paymentDialogvue_type_template_id_d98828d8_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.show ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-d98828d8><div class=\"modal-title-section\" data-v-d98828d8><i class=\"fas fa-money-bill-wave modal-icon\" data-v-d98828d8></i> <h5 class=\"modal-title\" data-v-d98828d8>" + _vm._ssrEscape("\n            " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂລາຍຈ່າຍ' : 'ລົງບັນຊີລາຍຈ່າຍ') + "\n          ") + "</h5></div> <div class=\"modal-header-right\" data-v-d98828d8><span class=\"voucher-number\" data-v-d98828d8>" + _vm._ssrEscape("\n            ເລກທີ:\n            " + _vm._s(_vm.formData.id ? _vm.formatVoucherNumber(_vm.localForm.id) : '000000') + "\n          ") + "</span> <button class=\"close-btn\" data-v-d98828d8><i class=\"fas fa-times\" data-v-d98828d8></i></button></div></div> "), _vm._ssrNode("<form data-v-d98828d8>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-d98828d8>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"form-loading\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-d98828d8></div> <p data-v-d98828d8>Loading form data...</p>")], 2) : _vm._ssrNode("<div class=\"form-grid\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-d98828d8><i class=\"fas fa-calendar\" data-v-d98828d8></i>\n                ວັນທີ\n              </label> "), _c(VMenu["a" /* default */], {
    ref: "bookingDateMenu",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto",
      "disabled": _vm.formLoading || _vm.saving
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          class: {
            'compact-date-field': true
          },
          attrs: {
            "outlined": "",
            "dense": "",
            "clearable": "",
            "hide-details": "",
            "prepend-inner-icon": "mdi-calendar",
            "disabled": _vm.formLoading || _vm.saving
          },
          on: {
            "click:clear": _vm.clearBookingDate
          },
          model: {
            value: _vm.formattedBookingDate,
            callback: function ($$v) {
              _vm.formattedBookingDate = $$v;
            },
            expression: "formattedBookingDate"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }], null, false, 3606568412),
    model: {
      value: _vm.bookingDateMenu,
      callback: function ($$v) {
        _vm.bookingDateMenu = $$v;
      },
      expression: "bookingDateMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": "",
      "max": _vm.today,
      "disabled": _vm.formLoading || _vm.saving
    },
    on: {
      "input": _vm.setBookingDate
    },
    model: {
      value: _vm.pickerBookingDate,
      callback: function ($$v) {
        _vm.pickerBookingDate = $$v;
      },
      expression: "pickerBookingDate"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-d98828d8><i class=\"fas fa-credit-card\" data-v-d98828d8></i>\n                ວິທີການຈ່າຍເງິນ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-d98828d8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.method,
      expression: "localForm.method"
    }],
    staticClass: "form-control custom-select",
    attrs: {
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "method", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleMethodChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກວິທີການຊຳລະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ (Cash)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cheque"
    }
  }, [_vm._v("ເຊັກ (Cheque)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("\n                    ໂອນທະນາຄານ (Bank Transfer)\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "deduction"
    }
  }, [_vm._v("ຫັກລົບ (Deduction)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-d98828d8><i class=\"fas fa-chevron-down\" data-v-d98828d8></i></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-d98828d8><i class=\"fas fa-coins\" data-v-d98828d8></i>\n                ສະກຸນເງິນ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-d98828d8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.currencyId,
      expression: "localForm.currencyId"
    }],
    staticClass: "form-control custom-select",
    attrs: {
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedCurrency]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n                    " + _vm._s(currency.code) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-d98828d8><i class=\"fas fa-chevron-down\" data-v-d98828d8></i></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-d98828d8><label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-exchange-alt\" data-v-d98828d8></i>\n                ອັດຕາແລກປ່ຽນ\n              </label> <input type=\"number\" step=\"0.000001\" min=\"0\" placeholder=\"ອັດຕາແລກປ່ຽນ\"" + _vm._ssrAttr("value", _vm.localForm.exchangeRate) + " class=\"form-control\" data-v-d98828d8></div> <div class=\"form-group\" data-v-d98828d8><label class=\"form-label required\" data-v-d98828d8><i class=\"fas fa-dollar-sign\" data-v-d98828d8></i>\n                ຈຳນວນເງິນ\n              </label> <input type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"Enter amount\" required=\"required\"" + _vm._ssrAttr("value", _vm.localForm.amount) + " class=\"form-control\" data-v-d98828d8></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-d98828d8><i class=\"fas fa-user\" data-v-d98828d8></i>\n                ຜູ້ໃຊ້\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-d98828d8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.makerId,
      expression: "localForm.makerId"
    }],
    staticClass: "form-control custom-select",
    attrs: {
      "required": "",
      "disabled": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "makerId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ລົງ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                    " + _vm._s(user.cus_name) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-d98828d8><i class=\"fas fa-chevron-down\" data-v-d98828d8></i></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-d98828d8><label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-external-link-alt\" data-v-d98828d8></i>\n                ອີງໃສ່ໃບສະເໜີ / ຖອນ\n              </label> <input type=\"text\" placeholder=\"ອີງໃສ່ໃບສະເໜີ / ຖອນ\" maxlength=\"100\"" + _vm._ssrAttr("value", _vm.localForm.externalRef) + " class=\"form-control\" data-v-d98828d8></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-calendar-check\" data-v-d98828d8></i>\n                ວັນທີອ້າງອີງພາຍນອກ\n              </label> "), _c(VMenu["a" /* default */], {
    ref: "externalBookingDateMenu",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto",
      "disabled": _vm.formLoading || _vm.saving
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          class: {
            'compact-date-field': true
          },
          attrs: {
            "outlined": "",
            "dense": "",
            "clearable": "",
            "hide-details": "",
            "prepend-inner-icon": "mdi-calendar-check",
            "disabled": _vm.formLoading || _vm.saving,
            "placeholder": "ເລືອກວັນທີ"
          },
          on: {
            "click:clear": _vm.clearExternalBookingDate
          },
          model: {
            value: _vm.formattedExternalBookingDate,
            callback: function ($$v) {
              _vm.formattedExternalBookingDate = $$v;
            },
            expression: "formattedExternalBookingDate"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }], null, false, 123352561),
    model: {
      value: _vm.externalBookingDateMenu,
      callback: function ($$v) {
        _vm.externalBookingDateMenu = $$v;
      },
      expression: "externalBookingDateMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": "",
      "max": _vm.today,
      "disabled": _vm.formLoading || _vm.saving
    },
    on: {
      "input": _vm.setExternalBookingDate
    },
    model: {
      value: _vm.pickerExternalBookingDate,
      callback: function ($$v) {
        _vm.pickerExternalBookingDate = $$v;
      },
      expression: "pickerExternalBookingDate"
    }
  })], 1)], 2), _vm._ssrNode(" <div class=\"form-group\"" + _vm._ssrStyle(null, null, {
    display: _vm.localForm.method === 'cheque' ? '' : 'none'
  }) + " data-v-d98828d8><label" + _vm._ssrClass("form-label", {
    required: _vm.localForm.method === 'cheque'
  }) + " data-v-d98828d8><i class=\"fas fa-money-check\" data-v-d98828d8></i>\n                ເລກເຊັກ\n              </label> <input type=\"text\" placeholder=\"ເລກເຊັກ\" maxlength=\"50\"" + _vm._ssrAttr("required", _vm.localForm.method === 'cheque') + _vm._ssrAttr("value", _vm.localForm.chequeNo) + " class=\"form-control\" data-v-d98828d8></div> <div class=\"form-group\" data-v-d98828d8><label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-user-circle\" data-v-d98828d8></i>\n                ຊື່ຜູ້ຮັບ\n              </label> <input type=\"text\" placeholder=\"ຊື່ຜູ້ຮັບເງິນ\" maxlength=\"100\"" + _vm._ssrAttr("value", _vm.localForm.receiveName) + " class=\"form-control\" data-v-d98828d8></div> <div class=\"form-group\" data-v-d98828d8><label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-id-card\" data-v-d98828d8></i>\n                ເລກບັດປະຈຳຕົວຜູ້ຮັບ\n              </label> <input type=\"text\" placeholder=\"ເລກບັດປະຈຳຕົວ\" maxlength=\"20\"" + _vm._ssrAttr("value", _vm.localForm.receiveIDNO) + " class=\"form-control\" data-v-d98828d8></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-calendar-alt\" data-v-d98828d8></i>\n                ວັນຄົບຮອບຄວນຊຳລະ\n              </label> "), _c(VMenu["a" /* default */], {
    ref: "dueDateMenu",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto",
      "disabled": _vm.formLoading || _vm.saving
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          class: {
            'compact-date-field': true
          },
          attrs: {
            "outlined": "",
            "dense": "",
            "clearable": "",
            "hide-details": "",
            "prepend-inner-icon": "mdi-calendar-clock",
            "disabled": _vm.formLoading || _vm.saving
          },
          on: {
            "click:clear": _vm.clearDueDate
          },
          model: {
            value: _vm.formattedDueDate,
            callback: function ($$v) {
              _vm.formattedDueDate = $$v;
            },
            expression: "formattedDueDate"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }], null, false, 3924764633),
    model: {
      value: _vm.dueDateMenu,
      callback: function ($$v) {
        _vm.dueDateMenu = $$v;
      },
      expression: "dueDateMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": "",
      "min": _vm.today,
      "disabled": _vm.formLoading || _vm.saving
    },
    on: {
      "input": _vm.setDueDate
    },
    model: {
      value: _vm.pickerDueDate,
      callback: function ($$v) {
        _vm.pickerDueDate = $$v;
      },
      expression: "pickerDueDate"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group span-2\" data-v-d98828d8>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-building\" data-v-d98828d8></i>\n                ກົມ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-d98828d8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.ministryId,
      expression: "localForm.ministryId"
    }],
    staticClass: "form-control custom-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedMinistry]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກົມ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                    " + _vm._s(ministry.ministryCode + ' ' + ministry.ministryName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-d98828d8><i class=\"fas fa-chevron-down\" data-v-d98828d8></i></div>")], 2), _vm._ssrNode(" " + (_vm.selectedMinistry ? "<div class=\"ministry-info\" data-v-d98828d8><div class=\"ministry-details\" data-v-d98828d8><div class=\"ministry-detail-item\" data-v-d98828d8><i class=\"fas fa-building\" data-v-d98828d8></i> <span class=\"ministry-name\" data-v-d98828d8>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryName)) + "</span></div> " + (_vm.selectedMinistry.ministryCode ? "<div class=\"ministry-detail-item\" data-v-d98828d8><i class=\"fas fa-tag\" data-v-d98828d8></i> <span class=\"ministry-code\" data-v-d98828d8>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryCode)) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\"" + _vm._ssrStyle(null, null, {
    display: _vm.localForm.method === 'bank_transfer' ? '' : 'none'
  }) + " data-v-d98828d8>", "</div>", [_vm._ssrNode("<label" + _vm._ssrClass("form-label", {
    required: _vm.localForm.method === 'bank_transfer'
  }) + " data-v-d98828d8><i class=\"fas fa-university\" data-v-d98828d8></i>\n                ບັນຊີທະນາຄານ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-d98828d8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.bankAccountId,
      expression: "localForm.bankAccountId"
    }],
    staticClass: "form-control custom-select",
    attrs: {
      "required": _vm.localForm.method === 'bank_transfer'
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedBankAccount]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີ")]), _vm._v(" "), _vm._l(_vm.filteredBankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                    " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-d98828d8><i class=\"fas fa-chevron-down\" data-v-d98828d8></i></div>")], 2), _vm._ssrNode(" " + (_vm.selectedBankAccount ? "<div class=\"bank-account-info\" data-v-d98828d8><div class=\"bank-details\" data-v-d98828d8><div class=\"bank-detail-item\" data-v-d98828d8><i class=\"fas fa-building\" data-v-d98828d8></i> <span data-v-d98828d8>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.bankName)) + "</span></div> <div class=\"bank-detail-item\" data-v-d98828d8><i class=\"fas fa-credit-card\" data-v-d98828d8></i> <span data-v-d98828d8>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountNumber)) + "</span></div></div></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-d98828d8><label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-tag\" data-v-d98828d8></i>\n                ຈຸດປະສົງ\n              </label> <input type=\"text\" placeholder=\"ເນື້ອໃນ ການອອກລາຍຈ່າຍ\" maxlength=\"255\"" + _vm._ssrAttr("value", _vm.localForm.purpose) + " class=\"form-control\" data-v-d98828d8></div> <div class=\"form-group full-width\" data-v-d98828d8><label class=\"form-label\" data-v-d98828d8><i class=\"fas fa-sticky-note\" data-v-d98828d8></i>\n                ໂນ໊ດ\n              </label> <textarea rows=\"2\" placeholder=\"ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control\" data-v-d98828d8>" + _vm._ssrEscape(_vm._s(_vm.localForm.note)) + "</textarea></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-d98828d8><h6 data-v-d98828d8><i class=\"fas fa-exclamation-circle\" data-v-d98828d8></i>\n              Please fix the following errors:\n            </h6> <ul data-v-d98828d8>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-d98828d8>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-d98828d8><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-d98828d8><i class=\"fas fa-times\" data-v-d98828d8></i>\n            ອອກ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.saving || _vm.formLoading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-d98828d8>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-d98828d8></i>" : "<i" + _vm._ssrClass("fas", _vm.isEdit ? 'fa-save' : 'fa-plus') + " data-v-d98828d8></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.saving ? 'Saving...' : _vm.isEdit ? 'ບັນທຶກ ການແກ້ໄຂ' : 'ບັນທຶກ') + "\n          ") + "</button> <button title=\"Save & Print\" class=\"btn btn-sm btn-danger\" data-v-d98828d8><i class=\"fas fa-print\" data-v-d98828d8></i>\n            Save &amp; Print\n          </button></div>")], 2)], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.showPrintVoucher && _vm.advanceDetails ? _c('VoucherPrintComponent', {
    key: _vm.advanceDetails.id,
    attrs: {
      "voucher-data": _vm.advanceDetails
    },
    on: {
      "close": _vm.closePrintVoucher
    }
  }) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue?vue&type=template&id=d98828d8&scoped=true&

// EXTERNAL MODULE: ./components/MA/paymentVoucher/index.vue + 4 modules
var paymentVoucher = __webpack_require__(589);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDialog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var paymentDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceDialog',
  components: {
    VoucherPrintComponent: paymentVoucher["default"]
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default: () => ({
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        exchangeRate: '',
        method: 'cash',
        externalRef: '',
        externalRefNo: '',
        externalBookingDate: '',
        // NEW FIELD
        chequeNo: '',
        receiveName: '',
        receiveIDNO: ''
      })
    },
    users: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    bankAccounts: {
      type: Array,
      default: () => []
    },
    ministries: {
      type: Array,
      default: () => []
    },
    formLoading: {
      type: Boolean,
      default: false
    },
    saving: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // Date picker specific properties
      bookingDateMenu: false,
      externalBookingDateMenu: false,
      // FIXED: This was declared but not used properly
      dueDateMenu: false,
      pickerBookingDate: null,
      pickerDueDate: null,
      pickerExternalBookingDate: null,
      // NEW: For external booking date picker
      formattedBookingDate: null,
      formattedDueDate: null,
      formattedExternalBookingDate: null,
      // NEW: For external booking date display

      advanceDetails: null,
      showPrintVoucher: false,
      localForm: {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        exchangeRate: '',
        method: 'cash',
        externalRef: '',
        externalRefNo: '',
        externalBookingDate: '',
        // NEW FIELD
        chequeNo: '',
        receiveName: '',
        receiveIDNO: ''
      },
      formErrors: []
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    selectedCurrencyCode() {
      if (!this.localForm.currencyId) return 'USD';
      const currency = this.currencies.find(c => c.id == this.localForm.currencyId);
      return currency ? currency.code : 'USD';
    },
    selectedBankAccount() {
      if (!this.localForm.bankAccountId) return null;
      return this.bankAccounts.find(account => account.id == this.localForm.bankAccountId);
    },
    selectedMinistry() {
      if (!this.localForm.ministryId) return null;
      return this.ministries.find(ministry => ministry.id == this.localForm.ministryId);
    },
    selectedCurrency() {
      if (!this.localForm.currencyId) return null;
      return this.currencies.find(currency => currency.id == this.localForm.currencyId);
    },
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts;
      }
      const currencyCode = this.selectedCurrency.code;
      const filtered = this.bankAccounts.filter(account => account.currency === currencyCode || !account.currency);
      return filtered.length > 0 ? filtered : this.bankAccounts;
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    isFormValid() {
      const validations = {
        'amount exists': !!this.localForm.amount,
        'amount > 0': this.localForm.amount && parseFloat(this.localForm.amount) > 0,
        'makerId exists': !!this.localForm.makerId,
        'currencyId exists': !!this.localForm.currencyId,
        'bookingDate exists': !!this.localForm.bookingDate,
        'method exists': !!this.localForm.method,
        'users available': this.users.length > 0,
        'currencies available': this.currencies.length > 0,
        'exchange rate valid': !this.localForm.exchangeRate || this.localForm.exchangeRate && !isNaN(parseFloat(this.localForm.exchangeRate)) && parseFloat(this.localForm.exchangeRate) > 0,
        'externalRef valid': !this.localForm.externalRef || this.localForm.externalRef.length <= 100,
        'externalRefNo valid': !this.localForm.externalRefNo || this.localForm.externalRefNo.length <= 50,
        'chequeNo valid': !this.localForm.chequeNo || this.localForm.chequeNo.length <= 50,
        'receiveName valid': !this.localForm.receiveName || this.localForm.receiveName.length <= 100,
        'receiveIDNO valid': !this.localForm.receiveIDNO || this.localForm.receiveIDNO.length <= 20,
        // Conditional validations based on method
        'cheque number required': this.localForm.method !== 'cheque' || this.localForm.method === 'cheque' && !!this.localForm.chequeNo,
        'bank account required': this.localForm.method !== 'bank_transfer' || this.localForm.method === 'bank_transfer' && !!this.localForm.bankAccountId
      };
      return Object.values(validations).every(Boolean);
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initForm();
      }
    },
    formData: {
      handler(newVal) {
        console.info(`Form data is changing...`, newVal);
        if (newVal && typeof newVal === 'object') {
          if (!this.localForm.id || newVal.id && newVal.id !== this.localForm.id) {
            this.localForm = {
              ...this.getDefaultForm(),
              ...newVal
            };
            if (!this.localForm.method || this.localForm.method === '') {
              this.localForm.method = 'cash';
              console.info('🔧 Setting method to default: cash');
            }
            if (!this.isEdit && !this.localForm.bookingDate) {
              this.localForm.bookingDate = this.today;
            }
            console.info('🔧 Updated localForm:', this.localForm);
          } else {
            console.info('🔧 Skipping update - local form already has this data');
          }
        }
      },
      deep: true,
      immediate: true
    },
    'localForm.method'(newMethod, oldMethod) {
      console.info(`Method changed from "${oldMethod}" to "${newMethod}"`);
      if (oldMethod && newMethod !== oldMethod) {
        this.handleMethodChange();
      }
    }
  },
  mounted() {
    console.info('🔧 Component mounted, initializing form...');
    this.initForm();
  },
  methods: {
    formatDateForDisplay(date) {
      if (!date) return null;
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
    // Set booking date from picker
    setBookingDate(val) {
      this.pickerBookingDate = val;
      this.localForm.bookingDate = this.formatDateForAPI(val);
      this.formattedBookingDate = this.formatDateForDisplay(val);
      this.bookingDateMenu = false;
      console.info(`Set booking date: picker=${val}, localForm=${this.localForm.bookingDate}, formatted=${this.formattedBookingDate}`);
    },
    // NEW: Set external booking date from picker
    setExternalBookingDate(val) {
      this.pickerExternalBookingDate = val;
      this.localForm.externalBookingDate = this.formatDateForAPI(val);
      this.formattedExternalBookingDate = this.formatDateForDisplay(val);
      this.externalBookingDateMenu = false;
      console.info(`Set external booking date: picker=${val}, localForm=${this.localForm.externalBookingDate}, formatted=${this.formattedExternalBookingDate}`);
    },
    // Set due date from picker
    setDueDate(val) {
      this.pickerDueDate = val;
      this.localForm.dueDate = this.formatDateForAPI(val);
      this.formattedDueDate = this.formatDateForDisplay(val);
      this.dueDateMenu = false;
      console.info(`Set due date: picker=${val}, localForm=${this.localForm.dueDate}, formatted=${this.formattedDueDate}`);
    },
    // Clear booking date
    clearBookingDate() {
      this.pickerBookingDate = null;
      this.localForm.bookingDate = '';
      this.formattedBookingDate = null;
    },
    // NEW: Clear external booking date
    clearExternalBookingDate() {
      this.pickerExternalBookingDate = null;
      this.localForm.externalBookingDate = '';
      this.formattedExternalBookingDate = null;
    },
    // Clear due date
    clearDueDate() {
      this.pickerDueDate = null;
      this.localForm.dueDate = '';
      this.formattedDueDate = null;
    },
    getDefaultForm() {
      return {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: this.today,
        exchangeRate: '',
        method: 'cash',
        externalRef: '',
        externalRefNo: '',
        externalBookingDate: '',
        // NEW FIELD
        chequeNo: '',
        receiveName: '',
        receiveIDNO: ''
      };
    },
    formatDisplayDate(dateString) {
      if (!dateString) return '';
      try {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      } catch (error) {
        return dateString;
      }
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0');
    },
    async fetchAdvanceByid() {
      if (!this.localForm.id) return this.showToast('ກະລຸນາບັນທຶກຂໍ້ມູນກ່ອນ', 'error');
      this.loading = true;
      try {
        const {
          data
        } = await this.$axios.get(`/api/money-advances/${this.localForm.id}`);
        this.advanceDetails = data.data;
      } catch (error) {
        this.showToast('Error fetching money advances', 'error');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async printAdvanceDetails() {
      await this.saveAdvance();
      await this.fetchAdvanceByid();
      this.showPrintVoucher = true;
    },
    closePrintVoucher() {
      this.showPrintVoucher = false;
      setTimeout(() => {
        this.advanceDetails = null;
      }, 100);
    },
    initForm() {
      this.formErrors = [];
      console.info('🔧 initForm called with formData:', this.formData);
      if (this.isEdit && this.formData && this.formData.id) {
        console.info('🔧 Edit mode - copying formData with defaults preserved');
        this.localForm = {
          ...this.getDefaultForm(),
          ...this.formData
        };
        if (!this.localForm.method || this.localForm.method === '') {
          this.localForm.method = 'cash';
          console.info('🔧 Edit mode: Setting method to default cash');
        }

        // Format dates when loading existing data
        if (this.localForm.bookingDate) {
          const formattedBookingDate = this.formatDateForAPI(this.localForm.bookingDate);
          this.localForm.bookingDate = formattedBookingDate;
          this.pickerBookingDate = formattedBookingDate;
          this.formattedBookingDate = this.formatDateForDisplay(formattedBookingDate);
        }

        // NEW: Handle external booking date in edit mode
        if (this.localForm.externalBookingDate) {
          const formattedExternalBookingDate = this.formatDateForAPI(this.localForm.externalBookingDate);
          this.localForm.externalBookingDate = formattedExternalBookingDate;
          this.pickerExternalBookingDate = formattedExternalBookingDate;
          this.formattedExternalBookingDate = this.formatDateForDisplay(formattedExternalBookingDate);
        }
        if (this.localForm.dueDate) {
          const formattedDueDate = this.formatDateForAPI(this.localForm.dueDate);
          this.localForm.dueDate = formattedDueDate;
          this.pickerDueDate = formattedDueDate;
          this.formattedDueDate = this.formatDateForDisplay(formattedDueDate);
        }
      } else {
        console.info('🔧 New mode - using defaults');
        this.localForm = this.getDefaultForm();

        // Set date picker values for new advance
        const todayDate = this.today;
        this.localForm.bookingDate = todayDate;
        this.pickerBookingDate = todayDate;
        this.formattedBookingDate = this.formatDateForDisplay(todayDate);

        // Due date and external booking date are optional, so leave them empty
        this.localForm.dueDate = '';
        this.pickerDueDate = null;
        this.formattedDueDate = null;

        // NEW: Initialize external booking date as empty for new records
        this.localForm.externalBookingDate = '';
        this.pickerExternalBookingDate = null;
        this.formattedExternalBookingDate = null;

        // Set default currency
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'LAK') || this.currencies[0];
          this.localForm.currencyId = defaultCurrency.id;
        }

        // Set current user
        if (this.user && this.user.id) {
          this.localForm.makerId = this.user.id;
        }

        // If we have formData with content but no edit flag, copy it
        if (this.formData && Object.keys(this.formData).some(key => this.formData[key] && key !== 'id')) {
          console.info('🔧 Copying non-empty formData to localForm');
          Object.assign(this.localForm, this.formData);

          // Format copied dates properly
          if (this.localForm.bookingDate) {
            const formattedBookingDate = this.formatDateForAPI(this.localForm.bookingDate);
            this.localForm.bookingDate = formattedBookingDate;
            this.pickerBookingDate = formattedBookingDate;
            this.formattedBookingDate = this.formatDateForDisplay(formattedBookingDate);
          }

          // NEW: Handle external booking date when copying formData
          if (this.localForm.externalBookingDate) {
            const formattedExternalBookingDate = this.formatDateForAPI(this.localForm.externalBookingDate);
            this.localForm.externalBookingDate = formattedExternalBookingDate;
            this.pickerExternalBookingDate = formattedExternalBookingDate;
            this.formattedExternalBookingDate = this.formatDateForDisplay(formattedExternalBookingDate);
          }
          if (this.localForm.dueDate) {
            const formattedDueDate = this.formatDateForAPI(this.localForm.dueDate);
            this.localForm.dueDate = formattedDueDate;
            this.pickerDueDate = formattedDueDate;
            this.formattedDueDate = this.formatDateForDisplay(formattedDueDate);
          }
        }
      }

      // Always ensure method is set
      if (!this.localForm.method) {
        this.localForm.method = 'cash';
        console.info('🔧 Final fallback: Setting method to cash');
      }
      console.info('🔧 Final localForm with formatted dates:', this.localForm);
    },
    resetForm() {
      console.info('🔧 resetForm called');
      this.localForm = this.getDefaultForm();

      // Reset date picker values
      const todayDate = this.today;
      this.pickerBookingDate = todayDate;
      this.formattedBookingDate = this.formatDateForDisplay(todayDate);
      this.pickerDueDate = null;
      this.formattedDueDate = null;

      // NEW: Reset external booking date
      this.pickerExternalBookingDate = null;
      this.formattedExternalBookingDate = null;

      // Close any open menus
      this.bookingDateMenu = false;
      this.externalBookingDateMenu = false; // NEW
      this.dueDateMenu = false;
    },
    validateForm() {
      this.formErrors = [];
      if (!this.localForm.amount || parseFloat(this.localForm.amount) <= 0) {
        this.formErrors.push('Amount is required and must be greater than 0');
      }
      if (!this.localForm.makerId) {
        this.formErrors.push('User selection is required');
      }
      if (!this.localForm.currencyId) {
        this.formErrors.push('Currency selection is required');
      }
      if (!this.localForm.bookingDate) {
        this.formErrors.push('Booking date is required');
      }
      if (!this.localForm.method) {
        this.formErrors.push('Payment method is required');
      }

      // Conditional validations based on method
      if (this.localForm.method === 'cheque' && !this.localForm.chequeNo) {
        this.formErrors.push('Cheque number is required when payment method is cheque');
      }
      if (this.localForm.method === 'bank_transfer' && !this.localForm.bankAccountId) {
        this.formErrors.push('Bank account is required when payment method is bank transfer');
      }
      if (this.localForm.purpose && this.localForm.purpose.length > 255) {
        this.formErrors.push('Purpose must not exceed 255 characters');
      }
      if (this.localForm.note && this.localForm.note.length > 500) {
        this.formErrors.push('Note must not exceed 500 characters');
      }
      if (this.localForm.exchangeRate && parseFloat(this.localForm.exchangeRate) <= 0) {
        this.formErrors.push('Exchange rate must be greater than 0 if provided');
      }
      if (this.localForm.externalRef && this.localForm.externalRef.length > 100) {
        this.formErrors.push('External reference must not exceed 100 characters');
      }
      if (this.localForm.externalRefNo && this.localForm.externalRefNo.length > 50) {
        this.formErrors.push('External reference number must not exceed 50 characters');
      }
      if (this.localForm.chequeNo && this.localForm.chequeNo.length > 50) {
        this.formErrors.push('Cheque number must not exceed 50 characters');
      }
      if (this.localForm.receiveName && this.localForm.receiveName.length > 100) {
        this.formErrors.push('Receiver name must not exceed 100 characters');
      }
      if (this.localForm.receiveIDNO && this.localForm.receiveIDNO.length > 20) {
        this.formErrors.push('Receiver ID number must not exceed 20 characters');
      }
      if (this.localForm.chequeNo && !/^[a-zA-Z0-9\-\/]*$/.test(this.localForm.chequeNo)) {
        this.formErrors.push('Cheque number can only contain letters, numbers, hyphens, and forward slashes');
      }
      if (this.localForm.receiveIDNO && !/^[a-zA-Z0-9]*$/.test(this.localForm.receiveIDNO)) {
        this.formErrors.push('Receiver ID number can only contain letters and numbers');
      }
      if (this.users.length === 0) {
        this.formErrors.push('No users available. Please contact administrator.');
      }
      if (this.currencies.length === 0) {
        this.formErrors.push('No currencies available. Please contact administrator.');
      }
      return this.formErrors.length === 0;
    },
    updateSelectedCurrency() {
      console.info(`select currency: ${this.selectedCurrency.code} currency list ${JSON.stringify(this.currencies)}`);
      this.localForm.exchangeRate = this.currencies.find(currency => currency.code === this.selectedCurrency.code).rate || 1;
      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency;
        const selectedCurrency = this.selectedCurrency.code;
        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.localForm.bankAccountId = '';
        }
      }
      this.$emit('currency-changed', this.localForm.currencyId);
    },
    updateSelectedBankAccount() {
      this.$emit('bank-account-changed', this.localForm.bankAccountId);
    },
    updateSelectedMinistry() {
      this.$emit('ministry-changed', this.localForm.ministryId);
    },
    handleMethodChange() {
      const method = this.localForm.method;
      console.info(`🔧 handleMethodChange: ${method}`);

      // Clear conditional fields when method changes
      if (method !== 'cheque') {
        this.localForm.chequeNo = '';
      }
      if (method !== 'bank_transfer') {
        this.localForm.bankAccountId = '';
      }
      this.$emit('method-changed', method);
    },
    closeDialog() {
      this.$emit('close');
    },
    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message);
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'Error' : 'Success',
          message: message,
          type: type === 'error' ? 'error' : 'success'
        });
      } else {
        alert(`${type.toUpperCase()}: ${message}`);
      }
    },
    async saveAdvance() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'Please fix the form errors');
        return;
      }
      console.info(`FORM DATA BEFORE CLEANING: ${JSON.stringify(this.localForm)}`);
      const formData = {
        ...this.localForm
      };

      // Format dates properly for API
      if (formData.bookingDate) {
        formData.bookingDate = this.formatDateForAPI(formData.bookingDate);
      }
      if (formData.dueDate) {
        formData.dueDate = this.formatDateForAPI(formData.dueDate);
      }

      // NEW: Format external booking date for API
      if (formData.externalBookingDate) {
        formData.externalBookingDate = this.formatDateForAPI(formData.externalBookingDate);
      }

      // Clean up empty fields
      if (!formData.ministryId) delete formData.ministryId;
      if (!formData.bankAccountId) delete formData.bankAccountId;
      if (!formData.dueDate) delete formData.dueDate;
      if (!formData.purpose) delete formData.purpose;
      if (!formData.note) delete formData.note;
      if (!formData.exchangeRate) delete formData.exchangeRate;
      if (!formData.externalRef) delete formData.externalRef;
      if (!formData.externalRefNo) delete formData.externalRefNo;
      if (!formData.externalBookingDate) delete formData.externalBookingDate; // NEW
      if (!formData.chequeNo) delete formData.chequeNo;
      if (!formData.receiveName) delete formData.receiveName;
      if (!formData.receiveIDNO) delete formData.receiveIDNO;
      console.info(`CLEANED FORM DATA WITH FORMATTED DATES: ${JSON.stringify(formData)}`);
      this.$emit('save', formData);
    },
    formatDateForAPI(dateValue) {
      if (!dateValue) return null;

      // If it's already in YYYY-MM-DD format, return as is
      if (typeof dateValue === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
        return dateValue;
      }

      // If it's a Date object or ISO string, extract just the date part
      try {
        const date = new Date(dateValue);
        if (isNaN(date.getTime())) return null;
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      } catch (error) {
        console.error('Error formatting date for API:', error);
        return null;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentDialogvue_type_script_lang_js_ = (paymentDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(647)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentDialogvue_type_script_lang_js_,
  paymentDialogvue_type_template_id_d98828d8_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "d98828d8",
  "a055272e"
  
)

/* harmony default export */ var paymentDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDetailDialog/index.vue?vue&type=template&id=0bf00b78&scoped=true&
var render = function render() {
  var _vm$details$currency, _vm$details$maker, _vm$details$checker;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog detail-dialog\" data-v-0bf00b78><div class=\"modal-header\" data-v-0bf00b78><div class=\"modal-title-section\" data-v-0bf00b78><i class=\"fas fa-file-invoice-dollar modal-icon\" data-v-0bf00b78></i> <h5 class=\"modal-title\" data-v-0bf00b78>ລາຍລະອຽດການອອກລາຍຈ່າຍ</h5></div> <div class=\"header-actions\" data-v-0bf00b78><button title=\"Print\" class=\"btn-icon\" data-v-0bf00b78><i class=\"fas fa-print\" data-v-0bf00b78></i></button> <button title=\"Download\" class=\"btn-icon\" data-v-0bf00b78><i class=\"fas fa-download\" data-v-0bf00b78></i></button> <button class=\"close-btn\" data-v-0bf00b78><i class=\"fas fa-times\" data-v-0bf00b78></i></button></div></div> <div class=\"modal-body detail-body\" data-v-0bf00b78>" + (_vm.loading ? "<div class=\"detail-loading\" data-v-0bf00b78><div class=\"spinner-small\" data-v-0bf00b78></div> <p data-v-0bf00b78>Loading details...</p></div>" : _vm.details ? "<div class=\"detail-content\" data-v-0bf00b78><div class=\"detail-status\" data-v-0bf00b78><span" + _vm._ssrClass(null, ['status-badge', 'status-' + _vm.details.status]) + " data-v-0bf00b78><i" + _vm._ssrClass("fas", _vm.getStatusIcon(_vm.details.status)) + " data-v-0bf00b78></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusInLao(_vm.details.status)) + "\n          ") + "</span></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-info-circle\" data-v-0bf00b78></i>\n            ຂໍ້ມູນເບື້ອງຕົ້ນ\n          </h6> <div class=\"detail-grid\" data-v-0bf00b78><div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ID</label> <span class=\"detail-value\" data-v-0bf00b78>" + _vm._ssrEscape("#" + _vm._s(_vm.details.id)) + "</span></div> <div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຈຳນວນເງິນ</label> <span class=\"detail-value amount-display\" data-v-0bf00b78>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatCurrency(_vm.details.amount)) + "\n                ") + "<small data-v-0bf00b78>" + _vm._ssrEscape(_vm._s((_vm$details$currency = _vm.details.currency) === null || _vm$details$currency === void 0 ? void 0 : _vm$details$currency.code)) + "</small></span></div> " + (_vm.details.exchangeRate ? "<div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ອັດຕາແລກປ່ຽນ</label> <span class=\"detail-value exchange-rate-display\" data-v-0bf00b78><i class=\"fas fa-exchange-alt\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatExchangeRate(_vm.details.exchangeRate)) + "\n              ") + "</span></div>" : "<!---->") + " <div class=\"detail-item full-width\" data-v-0bf00b78><label data-v-0bf00b78>ຈຸດປະສົງ</label> <span class=\"detail-value\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.details.purpose || 'No purpose specified')) + "</span></div></div></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-users\" data-v-0bf00b78></i>\n            ຜູ້ໃຊ້ ທີ່ກ່ຽວຂ້ອງ\n          </h6> <div class=\"detail-grid\" data-v-0bf00b78><div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຜູ້ລົງບັນຊີ</label> <span class=\"detail-value user-info\" data-v-0bf00b78><i class=\"fas fa-user\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$details$maker = _vm.details.maker) === null || _vm$details$maker === void 0 ? void 0 : _vm$details$maker.cus_name) || 'N/A') + "\n              ") + "</span></div> <div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຜູ້ອະນຸມັດ</label> <span class=\"detail-value user-info\" data-v-0bf00b78><i class=\"fas fa-user-check\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$details$checker = _vm.details.checker) === null || _vm$details$checker === void 0 ? void 0 : _vm$details$checker.cus_name) || 'Not yet approved') + "\n              ") + "</span></div></div></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-calendar\" data-v-0bf00b78></i>\n            ການເຄື່ອນໄຫວລາຍການ\n          </h6> <div class=\"timeline\" data-v-0bf00b78><div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon created\" data-v-0bf00b78><i class=\"fas fa-plus\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ລົງບັນຊີລາຍຈ່າຍ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.createdAt))) + "</span></div></div> " + (_vm.details.approvedAt ? "<div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon approved\" data-v-0bf00b78><i class=\"fas fa-check\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ອະນຸມັດແລ້ວ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.approvedAt))) + "</span></div></div>" : "<!---->") + " " + (_vm.details.dueDate ? "<div class=\"timeline-item\" data-v-0bf00b78><div" + _vm._ssrClass("timeline-icon due", {
    overdue: _vm.isOverdue(_vm.details.dueDate)
  }) + " data-v-0bf00b78><i class=\"fas fa-clock\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ວັນຄົບຮອບຄວນຊຳລະ</label> <span" + _vm._ssrClass("timeline-date", {
    overdue: _vm.isOverdue(_vm.details.dueDate)
  }) + " data-v-0bf00b78>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatDateTime(_vm.details.dueDate)) + "\n                  ") + (_vm.isOverdue(_vm.details.dueDate) ? "<span class=\"overdue-badge\" data-v-0bf00b78><i class=\"fas fa-exclamation-triangle\" data-v-0bf00b78></i> Overdue\n                  </span>" : "<!---->") + "</span></div></div>" : "<!---->") + " " + (_vm.details.settledAt ? "<div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon settled\" data-v-0bf00b78><i class=\"fas fa-money-bill\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ຮັບຊຳລະ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.settledAt))) + "</span></div></div>" : "<!---->") + "</div></div> " + (_vm.details.note ? "<div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-sticky-note\" data-v-0bf00b78></i>\n            Notes\n          </h6> <div class=\"notes-content\" data-v-0bf00b78>" + _vm._ssrEscape("\n            " + _vm._s(_vm.details.note) + "\n          ") + "</div></div>" : "<!---->") + " " + (_vm.details.history && _vm.details.history.length > 0 ? "<div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-history\" data-v-0bf00b78></i>\n            Action History\n          </h6> <div class=\"history-list\" data-v-0bf00b78>" + _vm._ssrList(_vm.details.history, function (history, index) {
    return "<div class=\"history-item\" data-v-0bf00b78><div class=\"history-icon\" data-v-0bf00b78><i" + _vm._ssrClass("fas", _vm.getHistoryIcon(history.action)) + " data-v-0bf00b78></i></div> <div class=\"history-content\" data-v-0bf00b78><span class=\"history-action\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(history.action)) + "</span> <span class=\"history-user\" data-v-0bf00b78>" + _vm._ssrEscape("by " + _vm._s(history.user)) + "</span> <span class=\"history-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(history.createdAt))) + "</span></div></div>";
  }) + "</div></div>" : "<!---->") + "</div>" : "<div class=\"detail-error\" data-v-0bf00b78><i class=\"fas fa-exclamation-triangle\" data-v-0bf00b78></i> <p data-v-0bf00b78>Failed to load advance details</p> <button class=\"btn btn-primary btn-sm\" data-v-0bf00b78><i class=\"fas fa-redo\" data-v-0bf00b78></i> Try Again\n        </button></div>") + "</div> <div class=\"modal-footer detail-footer\" data-v-0bf00b78><button class=\"btn btn-secondary close-detail-btn\" data-v-0bf00b78><i class=\"fas fa-times\" data-v-0bf00b78></i>\n        Close\n      </button> <div class=\"detail-actions\" data-v-0bf00b78>" + (_vm.details && _vm.details.status === 'pending' ? "<button title=\"Edit\" class=\"btn btn-warning action-btn\" data-v-0bf00b78><i class=\"fas fa-edit\" data-v-0bf00b78></i></button>" : "<!---->") + " " + (_vm.details && _vm.details.status === 'pending' ? "<button title=\"Approve\" class=\"btn btn-success action-btn\" data-v-0bf00b78><i class=\"fas fa-check\" data-v-0bf00b78></i></button>" : "<!---->") + " " + (_vm.details && _vm.details.status === 'approved' ? "<button title=\"Create Settlement\" class=\"btn btn-success action-btn\" data-v-0bf00b78><i class=\"fas fa-file-invoice-dollar\" data-v-0bf00b78></i></button>" : "<!---->") + "</div></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue?vue&type=template&id=0bf00b78&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDetailDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentDetailDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceDetailDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    details: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    statusLabels: {
      type: Object,
      default: () => ({
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ',
        cancelled: 'ຍົກເລີກ'
      })
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    printDetails() {
      this.$emit('print');
    },
    downloadDetails() {
      this.$emit('download');
    },
    retryLoad() {
      this.$emit('retry-load');
    },
    editAdvance() {
      this.$emit('edit', this.details);
    },
    approveAdvance() {
      this.$emit('approve', this.details);
    },
    createSettlement() {
      this.$emit('create-settlement', this.details);
    },
    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase();
    },
    getStatusIcon(status) {
      const icons = {
        pending: 'fa-clock',
        approved: 'fa-check-circle',
        settled: 'fa-money-bill-wave',
        rejected: 'fa-times-circle',
        cancelled: 'fa-ban'
      };
      return icons[status] || 'fa-question-circle';
    },
    getHistoryIcon(action) {
      const icons = {
        created: 'fa-plus',
        updated: 'fa-edit',
        approved: 'fa-check',
        settled: 'fa-money-bill',
        deleted: 'fa-trash',
        rejected: 'fa-times',
        cancelled: 'fa-ban'
      };
      return icons[action] || 'fa-history';
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatExchangeRate(rate) {
      if (!rate) return 'N/A';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 6
      }).format(rate);
    },
    formatDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentDetailDialogvue_type_script_lang_js_ = (paymentDetailDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(649)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentDetailDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0bf00b78",
  "abe22b4c"
  
)

/* harmony default export */ var paymentDetailDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditDialog/index.vue?vue&type=template&id=5c476a8a&scoped=true&
var render = function render() {
  var _vm$auditTrail$, _vm$auditTrail$2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog audit-dialog\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"modal-header audit-header\" data-v-5c476a8a><div class=\"modal-title-section\" data-v-5c476a8a><i class=\"fas fa-history modal-icon\" data-v-5c476a8a></i> <h5 class=\"modal-title\" data-v-5c476a8a>" + _vm._ssrEscape("\n          ປະຫວັດການປ່ຽນແປງ - " + _vm._s(_vm.recordTitle) + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-5c476a8a><i class=\"fas fa-times\" data-v-5c476a8a></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-5c476a8a>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-container\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-5c476a8a></div> <p data-v-5c476a8a>ກຳລັງໂຫຼດປະຫວັດການປ່ຽນແປງ...</p>")], 2) : _vm.error ? _vm._ssrNode("<div class=\"error-container\" data-v-5c476a8a><div class=\"error-icon\" data-v-5c476a8a><i class=\"fas fa-exclamation-triangle\" data-v-5c476a8a></i></div> <h4 data-v-5c476a8a>ເກີດຂໍ້ຜິດພາດ</h4> <p data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p> <button class=\"btn btn-primary btn-sm\" data-v-5c476a8a><i class=\"fas fa-redo\" data-v-5c476a8a></i>\n          ລອງໃໝ່\n        </button></div>") : _vm.auditTrail.length === 0 ? _vm._ssrNode("<div class=\"no-data-container\" data-v-5c476a8a><div class=\"no-data-icon\" data-v-5c476a8a><i class=\"fas fa-history\" data-v-5c476a8a></i></div> <h4 data-v-5c476a8a>ບໍ່ມີປະຫວັດການປ່ຽນແປງ</h4> <p data-v-5c476a8a>ບໍ່ພົບປະຫວັດການປ່ຽນແປງສຳລັບບັນຊີນີ້</p></div>") : _vm._ssrNode("<div class=\"audit-content\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"audit-summary\" data-v-5c476a8a><div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-list\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ລວມການປ່ຽນແປງ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.length)) + "</div></div></div> <div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-clock\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ການປ່ຽນແປງລ່າສຸດ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_vm$auditTrail$ = _vm.auditTrail[0]) === null || _vm$auditTrail$ === void 0 ? void 0 : _vm$auditTrail$.changedAt))) + "</div></div></div> <div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-user\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ຜູ້ປ່ຽນແປງລ່າສຸດ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(((_vm$auditTrail$2 = _vm.auditTrail[0]) === null || _vm$auditTrail$2 === void 0 ? void 0 : _vm$auditTrail$2.changedBy) || 'ລະບົບ')) + "</div></div></div></div> "), _vm._ssrNode("<div class=\"audit-controls\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"filter-controls\" data-v-5c476a8a>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionFilter,
      expression: "actionFilter"
    }],
    staticClass: "form-control filter-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.actionFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.filterAuditTrail]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກການດຳເນີນການ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREATE"
    }
  }, [_vm._v("ສ້າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UPDATE"
    }
  }, [_vm._v("ແກ້ໄຂ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "APPROVE"
    }
  }, [_vm._v("ອະນຸມັດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SETTLE"
    }
  }, [_vm._v("ຊຳລະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DELETE"
    }
  }, [_vm._v("ລົບ")])]), _vm._ssrNode(" <button class=\"btn btn-secondary btn-sm\" data-v-5c476a8a><i class=\"fas fa-download\" data-v-5c476a8a></i>\n              ສົ່ງອອກ\n            </button>")], 2)]), _vm._ssrNode(" <div class=\"audit-timeline\" data-v-5c476a8a>" + _vm._ssrList(_vm.filteredAuditTrail, function (item, index) {
    return "<div" + _vm._ssrClass("timeline-item", {
      'expandable': item.totalChanges > 0
    }) + " data-v-5c476a8a><div class=\"timeline-marker\" data-v-5c476a8a><i" + _vm._ssrClass(null, _vm.getActionIcon(item.action)) + " data-v-5c476a8a></i></div> <div class=\"timeline-content\" data-v-5c476a8a><div class=\"timeline-header\" data-v-5c476a8a><div class=\"timeline-main-info\" data-v-5c476a8a><div class=\"timeline-action\" data-v-5c476a8a><span" + _vm._ssrClass(null, ['action-badge', item.action.toLowerCase()]) + " data-v-5c476a8a>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getActionInLao(item.action)) + "\n                    ") + "</span> <span class=\"timeline-time\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(item.changedAt))) + "</span></div> <div class=\"timeline-user\" data-v-5c476a8a><i class=\"fas fa-user-circle\" data-v-5c476a8a></i>" + _vm._ssrEscape("\n                    " + _vm._s(item.changedBy || 'ລະບົບ') + "\n                  ") + "</div></div> " + (item.totalChanges > 0 ? "<div class=\"timeline-toggle\" data-v-5c476a8a><span class=\"changes-count\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(item.totalChanges) + " ການປ່ຽນແປງ") + "</span> <i" + _vm._ssrClass("toggle-icon", ['fas', item.expanded ? 'fa-chevron-up' : 'fa-chevron-down']) + " data-v-5c476a8a></i></div>" : "<!---->") + "</div> " + (item.reason ? "<div class=\"timeline-reason\" data-v-5c476a8a><i class=\"fas fa-comment\" data-v-5c476a8a></i> <span data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(item.reason)) + "</span></div>" : "<!---->") + " " + (item.expanded && item.keyChanges && item.keyChanges.length > 0 ? "<div class=\"timeline-details\" data-v-5c476a8a><div class=\"changes-list\" data-v-5c476a8a><h6 data-v-5c476a8a>ລາຍລະອຽດການປ່ຽນແປງ:</h6> " + _vm._ssrList(item.keyChanges, function (change) {
      return "<div class=\"change-item\" data-v-5c476a8a><div class=\"change-field\" data-v-5c476a8a><i" + _vm._ssrClass(null, _vm.getFieldIcon(change.field)) + " data-v-5c476a8a></i>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getFieldNameInLao(change.field)) + "\n                    ") + "</div> <div class=\"change-values\" data-v-5c476a8a><div class=\"old-value\" data-v-5c476a8a><span class=\"value-label\" data-v-5c476a8a>ເກົ່າ:</span> <span class=\"value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatValue(change.field, change.oldValue))) + "</span></div> <div class=\"arrow\" data-v-5c476a8a><i class=\"fas fa-arrow-right\" data-v-5c476a8a></i></div> <div class=\"new-value\" data-v-5c476a8a><span class=\"value-label\" data-v-5c476a8a>ໃໝ່:</span> <span class=\"value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatValue(change.field, change.newValue))) + "</span></div></div></div>";
    }) + "</div></div>" : "<!---->") + " " + (item.totalChanges > 3 && item.expanded ? "<div class=\"view-full-details\" data-v-5c476a8a><button class=\"btn btn-link btn-sm\" data-v-5c476a8a><i class=\"fas fa-eye\" data-v-5c476a8a></i>" + _vm._ssrEscape("\n                  ເບິ່ງລາຍລະອຽດທັງໝົດ (" + _vm._s(item.totalChanges) + " ການປ່ຽນແປງ)\n                ") + "</button></div>" : "<!---->") + "</div></div>";
  }) + "</div> " + (_vm.hasMoreData ? "<div class=\"load-more-container\" data-v-5c476a8a><button" + _vm._ssrAttr("disabled", _vm.loadingMore) + " class=\"btn btn-secondary\" data-v-5c476a8a>" + (_vm.loadingMore ? "<i class=\"fas fa-spinner fa-spin\" data-v-5c476a8a></i>" : "<i class=\"fas fa-plus\" data-v-5c476a8a></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.loadingMore ? 'ກຳລັງໂຫຼດ...' : 'ໂຫຼດເພີ່ມ') + "\n          ") + "</button></div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"modal-footer audit-footer\" data-v-5c476a8a><button" + _vm._ssrAttr("disabled", _vm.auditTrail.length < 2) + " class=\"btn btn-info\" data-v-5c476a8a><i class=\"fas fa-balance-scale\" data-v-5c476a8a></i>\n        ປຽບທຽບເວີຊັ່ນ\n      </button> <button class=\"btn btn-secondary\" data-v-5c476a8a><i class=\"fas fa-times\" data-v-5c476a8a></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue?vue&type=template&id=5c476a8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentAuditDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceAuditDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    recordId: {
      type: [Number, String],
      required: true
    },
    recordTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      auditTrail: [],
      filteredAuditTrail: [],
      loading: false,
      loadingMore: false,
      error: null,
      actionFilter: '',
      currentPage: 1,
      hasMoreData: false,
      // Lao translations
      actionLabels: {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      },
      fieldLabels: {
        amount: 'ຈຳນວນເງິນ',
        purpose: 'ຈຸດປະສົງ',
        status: 'ສະຖານະ',
        note: 'ໂນ໊ດ',
        dueDate: 'ວັນຄົບຮອບ',
        bookingDate: 'ວັນທີບັນຊີ',
        makerId: 'ຜູ້ລົງບັນຊີ',
        checkerId: 'ຜູ້ກວດ',
        currencyId: 'ສະກຸນເງິນ',
        bankAccountId: 'ບັນຊີທະນາຄານ',
        ministryId: 'ກະຊວງ',
        exchangeRate: 'ອັດຕາແລກປ່ຽນ',
        approvedAt: 'ວັນທີອະນຸມັດ'
      }
    };
  },
  watch: {
    show(newVal) {
      if (newVal && this.recordId) {
        this.loadAuditTrail();
      }
    },
    recordId(newVal) {
      if (newVal && this.show) {
        this.loadAuditTrail();
      }
    }
  },
  methods: {
    async loadAuditTrail() {
      this.loading = true;
      this.error = null;
      this.currentPage = 1;
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 20,
            offset: 0
          }
        });
        this.auditTrail = response.data.data.map(item => ({
          ...item,
          expanded: false
        }));
        this.hasMoreData = response.data.data.length === 20;
        this.filterAuditTrail();
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error loading audit trail:', error);
        this.error = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ';
      } finally {
        this.loading = false;
      }
    },
    async loadMoreAuditTrail() {
      this.loadingMore = true;
      this.currentPage++;
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 20,
            offset: (this.currentPage - 1) * 20
          }
        });
        const newItems = response.data.data.map(item => ({
          ...item,
          expanded: false
        }));
        this.auditTrail.push(...newItems);
        this.hasMoreData = newItems.length === 20;
        this.filterAuditTrail();
      } catch (error) {
        console.error('Error loading more audit trail:', error);
        this.currentPage--; // Revert page increment on error
      } finally {
        this.loadingMore = false;
      }
    },
    filterAuditTrail() {
      if (this.actionFilter) {
        this.filteredAuditTrail = this.auditTrail.filter(item => item.action === this.actionFilter);
      } else {
        this.filteredAuditTrail = [...this.auditTrail];
      }
    },
    toggleExpand(item) {
      if (item.totalChanges > 0) {
        this.$set(item, 'expanded', !item.expanded);
      }
    },
    getActionInLao(action) {
      return this.actionLabels[action] || action;
    },
    getFieldNameInLao(field) {
      return this.fieldLabels[field] || field;
    },
    getActionIcon(action) {
      const icons = {
        CREATE: 'fas fa-plus text-success',
        UPDATE: 'fas fa-edit text-warning',
        APPROVE: 'fas fa-check text-success',
        SETTLE: 'fas fa-money-bill text-info',
        DELETE: 'fas fa-trash text-danger'
      };
      return icons[action] || 'fas fa-circle';
    },
    getFieldIcon(field) {
      const icons = {
        amount: 'fas fa-dollar-sign',
        purpose: 'fas fa-tag',
        status: 'fas fa-flag',
        note: 'fas fa-sticky-note',
        dueDate: 'fas fa-calendar',
        bookingDate: 'fas fa-calendar-alt',
        makerId: 'fas fa-user',
        checkerId: 'fas fa-user-check',
        currencyId: 'fas fa-coins',
        bankAccountId: 'fas fa-university',
        ministryId: 'fas fa-building',
        exchangeRate: 'fas fa-exchange-alt',
        approvedAt: 'fas fa-check-circle'
      };
      return icons[field] || 'fas fa-info-circle';
    },
    formatValue(field, value) {
      if (value === null || value === undefined) {
        return 'ບໍ່ມີ';
      }
      if (field === 'amount') {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value);
      }
      if (field.includes('Date') || field.includes('At')) {
        return this.formatDate(value);
      }
      if (field === 'status') {
        const statusLabels = {
          pending: 'ຄ້າງອະນຸມັດ',
          approved: 'ອະນຸມັດແລ້ວ',
          settled: 'ຊຳລະແລ້ວ'
        };
        return statusLabels[value] || value;
      }
      return value.toString();
    },
    formatDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('lo-LA');
    },
    async exportAuditTrail() {
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 1000,
            offset: 0,
            format: 'csv'
          },
          responseType: 'blob'
        });
        const blob = new Blob([response.data], {
          type: 'text/csv'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `audit-trail-${this.recordId}-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('show-toast', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກຂໍ້ມູນ', 'error');
      }
    },
    compareVersions() {
      this.$emit('compare-versions', this.recordId);
    },
    viewFullDetails(item) {
      this.$emit('view-full-details', item);
    },
    closeDialog() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentAuditDialogvue_type_script_lang_js_ = (paymentAuditDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(651)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentAuditDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c476a8a",
  "2eaf8618"
  
)

/* harmony default export */ var paymentAuditDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentCompareDialog/index.vue?vue&type=template&id=e6a23e30&scoped=true&
var render = function render() {
  var _vm$recordData;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog comparison-dialog\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-e6a23e30><div class=\"modal-title-section\" data-v-e6a23e30><i class=\"fas fa-code-compare modal-icon\" data-v-e6a23e30></i> <h5 class=\"modal-title\" data-v-e6a23e30>" + _vm._ssrEscape("\n          ປຽບທຽບເວີຊັ່ນ - " + _vm._s(((_vm$recordData = _vm.recordData) === null || _vm$recordData === void 0 ? void 0 : _vm$recordData.purpose) || `Record #${_vm.recordId}`) + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-e6a23e30><i class=\"fas fa-times\" data-v-e6a23e30></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-e6a23e30>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-state\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-e6a23e30></div> <p data-v-e6a23e30>ກຳລັງໂຫຼດຂໍ້ມູນສຳລັບປຽບທຽບ...</p>")], 2) : _vm.error ? _vm._ssrNode("<div class=\"error-state\" data-v-e6a23e30><div class=\"error-icon\" data-v-e6a23e30><i class=\"fas fa-exclamation-triangle\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ</h6> <p data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p> <button class=\"btn btn-primary btn-sm\" data-v-e6a23e30><i class=\"fas fa-redo\" data-v-e6a23e30></i>\n          ລອງໃໝ່\n        </button></div>") : _vm._ssrNode("<div class=\"comparison-content\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"version-selector\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"selector-group\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<label data-v-e6a23e30>ເວີຊັ່ນທີ່ 1 (ເກົ່າ):</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedVersion1,
      expression: "selectedVersion1"
    }],
    staticClass: "form-control",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedVersion1 = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.loadComparison]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກເວີຊັ່ນ...")]), _vm._v(" "), _vm._l(_vm.availableVersions, function (version) {
    return _c('option', {
      key: version.id,
      attrs: {
        "disabled": version.id === _vm.selectedVersion2
      },
      domProps: {
        "value": version.id
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getVersionLabel(version)) + "\n              ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"comparison-arrow\" data-v-e6a23e30><i class=\"fas fa-exchange-alt\" data-v-e6a23e30></i></div> "), _vm._ssrNode("<div class=\"selector-group\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<label data-v-e6a23e30>ເວີຊັ່ນທີ່ 2 (ໃໝ່):</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedVersion2,
      expression: "selectedVersion2"
    }],
    staticClass: "form-control",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedVersion2 = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.loadComparison]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກເວີຊັ່ນ...")]), _vm._v(" "), _vm._l(_vm.availableVersions, function (version) {
    return _c('option', {
      key: version.id,
      attrs: {
        "disabled": version.id === _vm.selectedVersion1
      },
      domProps: {
        "value": version.id
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getVersionLabel(version)) + "\n              ")]);
  })], 2)], 2)], 2), _vm._ssrNode(" " + (_vm.comparisonData ? "<div class=\"comparison-results\" data-v-e6a23e30><div class=\"comparison-summary\" data-v-e6a23e30><div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-edit\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-number\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(Object.keys(_vm.comparisonData.differences || {}).length)) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ການປ່ຽນແປງ</div></div></div> <div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-calendar\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-number\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getTimeDifference())) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ວັນຫ່າງກັນ</div></div></div> <div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-user\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getDifferentUsers())) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ຜູ້ປ່ຽນແປງ</div></div></div></div> " + (Object.keys(_vm.comparisonData.differences || {}).length === 0 ? "<div class=\"no-differences\" data-v-e6a23e30><div class=\"no-diff-icon\" data-v-e6a23e30><i class=\"fas fa-equals\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ບໍ່ມີການປ່ຽນແປງ</h6> <p data-v-e6a23e30>ເວີຊັ່ນທັງສອງມີຂໍ້ມູນຄືກັນ</p></div>" : "<div class=\"differences-table\" data-v-e6a23e30><h6 data-v-e6a23e30><i class=\"fas fa-list\" data-v-e6a23e30></i>\n              ລາຍລະອຽດການປ່ຽນແປງ\n            </h6> <div class=\"table-container\" data-v-e6a23e30><table class=\"comparison-table\" data-v-e6a23e30><thead data-v-e6a23e30><tr data-v-e6a23e30><th class=\"field-header\" data-v-e6a23e30>ຟິວ</th> <th class=\"version-header version1\" data-v-e6a23e30><div class=\"version-info\" data-v-e6a23e30><div class=\"version-label\" data-v-e6a23e30>" + _vm._ssrEscape("ເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion1))) + "</div> <div class=\"version-date\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getVersionDate(_vm.selectedVersion1))) + "</div></div></th> <th class=\"version-header version2\" data-v-e6a23e30><div class=\"version-info\" data-v-e6a23e30><div class=\"version-label\" data-v-e6a23e30>" + _vm._ssrEscape("ເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion2))) + "</div> <div class=\"version-date\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getVersionDate(_vm.selectedVersion2))) + "</div></div></th></tr></thead> <tbody data-v-e6a23e30>" + _vm._ssrList(_vm.comparisonData.differences, function (diff, field) {
    return "<tr class=\"diff-row\" data-v-e6a23e30><td class=\"field-cell\" data-v-e6a23e30><div class=\"field-info\" data-v-e6a23e30><i" + _vm._ssrClass(null, _vm.getFieldIcon(field)) + " data-v-e6a23e30></i> <span class=\"field-name\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getFieldLabel(field))) + "</span></div></td> <td class=\"value-cell version1\" data-v-e6a23e30><div class=\"value-content old-value\" data-v-e6a23e30><div class=\"value-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.formatValue(diff.current))) + "</div></div></td> <td class=\"value-cell version2\" data-v-e6a23e30><div class=\"value-content new-value\" data-v-e6a23e30><div class=\"value-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.formatValue(diff.version))) + "</div> <div class=\"change-indicator\" data-v-e6a23e30><i class=\"fas fa-arrow-left\" data-v-e6a23e30></i></div></div></td></tr>";
  }) + "</tbody></table></div></div>") + " " + (Object.keys(_vm.comparisonData.differences || {}).length > 0 ? "<div class=\"comparison-actions\" data-v-e6a23e30>" + (_vm.canRestore ? "<button class=\"btn btn-warning\" data-v-e6a23e30><i class=\"fas fa-undo\" data-v-e6a23e30></i>" + _vm._ssrEscape("\n              ກັບຄືນໄປເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion1)) + "\n            ") + "</button>" : "<!---->") + " <button class=\"btn btn-secondary\" data-v-e6a23e30><i class=\"fas fa-download\" data-v-e6a23e30></i>\n              ສົ່ງອອກການປຽບທຽບ\n            </button></div>" : "<!---->") + "</div>" : "<div class=\"select-versions-prompt\" data-v-e6a23e30><div class=\"prompt-icon\" data-v-e6a23e30><i class=\"fas fa-hand-pointer\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ເລືອກເວີຊັ່ນເພື່ອປຽບທຽບ</h6> <p data-v-e6a23e30>ກະລຸນາເລືອກສອງເວີຊັ່ນທີ່ທ່ານຕ້ອງການປຽບທຽບ</p></div>"))], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-e6a23e30><button" + _vm._ssrAttr("disabled", !_vm.selectedVersion1 || !_vm.selectedVersion2) + " class=\"btn btn-outline\" data-v-e6a23e30><i class=\"fas fa-exchange-alt\" data-v-e6a23e30></i>\n        ສະຫຼັບເວີຊັ່ນ\n      </button> <button class=\"btn btn-primary\" data-v-e6a23e30><i class=\"fas fa-times\" data-v-e6a23e30></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue?vue&type=template&id=e6a23e30&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentCompareDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentCompareDialogvue_type_script_lang_js_ = ({
  name: 'VersionComparisonDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    recordId: {
      type: [Number, String],
      required: true
    },
    recordData: {
      type: Object,
      default: null
    },
    initialComparison: {
      type: Object,
      default: null
    },
    canRestore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      error: null,
      availableVersions: [],
      selectedVersion1: null,
      selectedVersion2: null,
      comparisonData: null,
      fieldLabels: {
        amount: 'ຈຳນວນເງິນ',
        purpose: 'ຈຸດປະສົງ',
        status: 'ສະຖານະ',
        dueDate: 'ວັນຄົບກຳນົດ',
        note: 'ໝາຍເຫດ',
        ministryId: 'ກະຊວງ',
        bankAccountId: 'ບັນຊີທະນາຄານ',
        currencyId: 'ສະກຸນເງິນ',
        bookingDate: 'ວັນທີ່ລົງບັນຊີ',
        exchangeRate: 'ອັດຕາແລກປ່ຽນ',
        makerId: 'ຜູ້ລົງບັນຊີ',
        checkerId: 'ຜູ້ອະນຸມັດ',
        approvedAt: 'ວັນທີ່ອະນຸມັດ'
      }
    };
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeDialog();
      }
    },
    initialComparison: {
      handler(newVal) {
        if (newVal && this.show) {
          this.setupInitialComparison();
        }
      },
      immediate: true
    }
  },
  methods: {
    async initializeDialog() {
      if (this.initialComparison) {
        this.setupInitialComparison();
      } else {
        await this.fetchAvailableVersions();
      }
    },
    setupInitialComparison() {
      if (this.initialComparison.current && this.initialComparison.previous) {
        this.selectedVersion1 = this.initialComparison.previous.id;
        this.selectedVersion2 = this.initialComparison.current.id;

        // Mock the comparison data structure
        this.comparisonData = {
          currentVersion: this.initialComparison.current.version || 1,
          compareVersion: this.initialComparison.previous.version || 1,
          differences: this.calculateDifferences(this.initialComparison.previous, this.initialComparison.current)
        };
      }
    },
    calculateDifferences(version1, version2) {
      const differences = {};
      const fieldsToCompare = Object.keys(this.fieldLabels);
      fieldsToCompare.forEach(field => {
        var _version1$data, _version2$data;
        const val1 = ((_version1$data = version1.data) === null || _version1$data === void 0 ? void 0 : _version1$data[field]) || version1[field];
        const val2 = ((_version2$data = version2.data) === null || _version2$data === void 0 ? void 0 : _version2$data[field]) || version2[field];
        if (val1 !== val2) {
          differences[field] = {
            current: val2,
            version: val1
          };
        }
      });
      return differences;
    },
    async fetchAvailableVersions() {
      if (!this.recordId) return;
      this.loading = true;
      this.error = null;
      try {
        const {
          data
        } = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`);
        if (data.success) {
          this.availableVersions = data.data.map(entry => ({
            id: entry.id,
            version: entry.version || 1,
            action: entry.action,
            changedAt: entry.changedAt,
            changedBy: entry.changedBy,
            data: entry.newData || entry.oldData || {}
          }));
        } else {
          throw new Error(data.message || 'Failed to fetch versions');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error fetching versions:', error);
        this.error = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message;
      } finally {
        this.loading = false;
      }
    },
    async loadComparison() {
      if (!this.selectedVersion1 || !this.selectedVersion2) {
        this.comparisonData = null;
        return;
      }
      try {
        // For now, calculate differences locally
        // In a real implementation, you might want to call an API endpoint
        const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
        const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
        if (version1 && version2) {
          this.comparisonData = {
            currentVersion: version2.version,
            compareVersion: version1.version,
            differences: this.calculateDifferences(version1, version2)
          };
        }
      } catch (error) {
        console.error('Error loading comparison:', error);
        this.error = 'ເກີດຂໍ້ຜິດພາດໃນການປຽບທຽບ';
      }
    },
    getVersionLabel(version) {
      const actionLabel = {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      };
      const date = new Date(version.changedAt).toLocaleDateString('lo-LA');
      const action = actionLabel[version.action] || version.action;
      return `v${version.version} - ${action} (${date})`;
    },
    getVersionNumber(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      return (version === null || version === void 0 ? void 0 : version.version) || '?';
    },
    getVersionDate(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      return version ? new Date(version.changedAt).toLocaleDateString('lo-LA') : '';
    },
    getTimeDifference() {
      if (!this.selectedVersion1 || !this.selectedVersion2) return 0;
      const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
      const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
      if (version1 && version2) {
        const date1 = new Date(version1.changedAt);
        const date2 = new Date(version2.changedAt);
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }
      return 0;
    },
    getDifferentUsers() {
      if (!this.selectedVersion1 || !this.selectedVersion2) return 'N/A';
      const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
      const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
      if (version1 && version2) {
        if (version1.changedBy === version2.changedBy) {
          return version1.changedBy || 'ບໍ່ຮູ້';
        } else {
          return `${version1.changedBy || 'ບໍ່ຮູ້'} → ${version2.changedBy || 'ບໍ່ຮູ້'}`;
        }
      }
      return 'N/A';
    },
    getFieldIcon(field) {
      const icons = {
        amount: 'fas fa-dollar-sign',
        purpose: 'fas fa-tag',
        status: 'fas fa-flag',
        dueDate: 'fas fa-calendar',
        note: 'fas fa-sticky-note',
        ministryId: 'fas fa-building',
        bankAccountId: 'fas fa-university',
        currencyId: 'fas fa-coins',
        bookingDate: 'fas fa-calendar-day',
        exchangeRate: 'fas fa-exchange-alt',
        makerId: 'fas fa-user',
        checkerId: 'fas fa-user-check',
        approvedAt: 'fas fa-calendar-check'
      };
      return icons[field] || 'fas fa-info-circle';
    },
    getFieldLabel(field) {
      return this.fieldLabels[field] || field;
    },
    formatValue(value) {
      if (value === null || value === undefined) return 'N/A';
      if (typeof value === 'boolean') return value ? 'ແມ່ນ' : 'ບໍ່';
      if (typeof value === 'number') return value.toLocaleString();
      if (typeof value === 'string' && value.includes('T')) {
        // Likely a date
        try {
          return new Date(value).toLocaleDateString('lo-LA');
        } catch {
          return value;
        }
      }
      return String(value);
    },
    swapVersions() {
      const temp = this.selectedVersion1;
      this.selectedVersion1 = this.selectedVersion2;
      this.selectedVersion2 = temp;
      this.loadComparison();
    },
    restoreToVersion(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      if (version) {
        this.$emit('restore', version);
      }
    },
    async exportComparison() {
      if (!this.comparisonData) return;
      try {
        const csvContent = this.generateComparisonCSV();
        const blob = new Blob([csvContent], {
          type: 'text/csv;charset=utf-8;'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `comparison-${this.recordId}-v${this.getVersionNumber(this.selectedVersion1)}-v${this.getVersionNumber(this.selectedVersion2)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.$emit('success', 'ສົ່ງອອກການປຽບທຽບສຳເລັດ');
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ');
      }
    },
    generateComparisonCSV() {
      const headers = ['Field', 'Version 1 Value', 'Version 2 Value'];
      const rows = [headers];
      Object.entries(this.comparisonData.differences).forEach(([field, diff]) => {
        rows.push([this.getFieldLabel(field), this.formatValue(diff.version), this.formatValue(diff.current)]);
      });
      return rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    },
    closeDialog() {
      this.selectedVersion1 = null;
      this.selectedVersion2 = null;
      this.comparisonData = null;
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentCompareDialogvue_type_script_lang_js_ = (paymentCompareDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(653)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentCompareDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e6a23e30",
  "60dc4ca2"
  
)

/* harmony default export */ var paymentCompareDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditReportDialog/index.vue?vue&type=template&id=7e1ed358&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog reports-dialog\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-7e1ed358><div class=\"modal-title-section\" data-v-7e1ed358><i class=\"fas fa-chart-line modal-icon\" data-v-7e1ed358></i> <h5 class=\"modal-title\" data-v-7e1ed358>ລາຍງານປະຫວັດການປ່ຽນແປງ</h5></div> <button class=\"close-btn\" data-v-7e1ed358><i class=\"fas fa-times\" data-v-7e1ed358></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"tabs-container\" data-v-7e1ed358><div class=\"tabs\" data-v-7e1ed358>" + _vm._ssrList(_vm.reportTabs, function (tab) {
    return "<button" + _vm._ssrClass(null, ['tab-btn', {
      active: _vm.activeTab === tab.id
    }]) + " data-v-7e1ed358><i" + _vm._ssrClass(null, tab.icon) + " data-v-7e1ed358></i>" + _vm._ssrEscape("\n            " + _vm._s(tab.label) + "\n          ") + "</button>";
  }) + "</div></div> " + (_vm.activeTab === 'user-activity' ? "<div class=\"report-content\" data-v-7e1ed358><div class=\"report-header\" data-v-7e1ed358><h6 data-v-7e1ed358><i class=\"fas fa-users\" data-v-7e1ed358></i>\n            ລາຍງານກິດຈະກຳຜູ້ໃຊ້\n          </h6> <div class=\"date-filter\" data-v-7e1ed358><input type=\"date\"" + _vm._ssrAttr("value", _vm.userActivityFilter.startDate) + " class=\"form-control\" data-v-7e1ed358> <span data-v-7e1ed358>ຫາ</span> <input type=\"date\"" + _vm._ssrAttr("value", _vm.userActivityFilter.endDate) + " class=\"form-control\" data-v-7e1ed358> <button class=\"btn btn-primary btn-sm\" data-v-7e1ed358><i class=\"fas fa-search\" data-v-7e1ed358></i>\n              ຄົ້ນຫາ\n            </button></div></div> " + (_vm.userActivityLoading ? "<div class=\"loading-state\" data-v-7e1ed358><div class=\"spinner-sm\" data-v-7e1ed358></div> <span data-v-7e1ed358>ກຳລັງໂຫຼດຂໍ້ມູນ...</span></div>" : _vm.userActivityData.length > 0 ? "<div class=\"user-activity-content\" data-v-7e1ed358><div class=\"activity-summary\" data-v-7e1ed358><div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-user-friends\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-number\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.uniqueActiveUsers)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ຜູ້ໃຊ້ທີ່ມີກິດຈະກຳ</div></div></div> <div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-edit\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-number\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.totalActivities)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ລວມກິດຈະກຳ</div></div></div> <div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-crown\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-text\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.mostActiveUser)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ຜູ້ໃຊ້ທີ່ມີກິດຈະກຳສູງສຸດ</div></div></div></div> <div class=\"activity-table\" data-v-7e1ed358><table class=\"table\" data-v-7e1ed358><thead data-v-7e1ed358><tr data-v-7e1ed358><th data-v-7e1ed358>ຜູ້ໃຊ້</th> <th data-v-7e1ed358>ສ້າງ</th> <th data-v-7e1ed358>ແກ້ໄຂ</th> <th data-v-7e1ed358>ອະນຸມັດ</th> <th data-v-7e1ed358>ຊຳລະ</th> <th data-v-7e1ed358>ລົບ</th> <th data-v-7e1ed358>ລວມ</th> <th data-v-7e1ed358>ກິດຈະກຳຫຼ້າສຸດ</th></tr></thead> <tbody data-v-7e1ed358>" + _vm._ssrList(_vm.userActivityData, function (user) {
    return "<tr data-v-7e1ed358><td data-v-7e1ed358><div class=\"user-info\" data-v-7e1ed358><div class=\"user-name\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.userName)) + "</div> <div class=\"user-id\" data-v-7e1ed358>" + _vm._ssrEscape("ID: " + _vm._s(user.userId)) + "</div></div></td> <td data-v-7e1ed358><span class=\"activity-count create\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.CREATE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count update\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.UPDATE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count approve\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.APPROVE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count settle\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.SETTLE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count delete\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.DELETE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"total-count\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.totalActivities)) + "</span></td> <td data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(user.lastActivity))) + "</td></tr>";
  }) + "</tbody></table></div></div>" : "<div class=\"no-data\" data-v-7e1ed358><i class=\"fas fa-chart-bar\" data-v-7e1ed358></i> <p data-v-7e1ed358>ບໍ່ມີຂໍ້ມູນກິດຈະກຳໃນຊ່ວງເວລານີ້</p></div>") + "</div>" : "<!---->") + " "), _vm.activeTab === 'system-activity' ? _vm._ssrNode("<div class=\"report-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"report-header\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<h6 data-v-7e1ed358><i class=\"fas fa-server\" data-v-7e1ed358></i>\n            ລາຍງານກິດຈະກຳລະບົບ\n          </h6> "), _vm._ssrNode("<div class=\"date-filter\" data-v-7e1ed358>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.systemActivityFilter.period,
      expression: "systemActivityFilter.period"
    }],
    staticClass: "form-control",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.systemActivityFilter, "period", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.fetchSystemActivity]
    }
  }, [_c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("7 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "30"
    }
  }, [_vm._v("30 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "90"
    }
  }, [_vm._v("90 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "365"
    }
  }, [_vm._v("1 ປີຜ່ານມາ")])]), _vm._ssrNode(" <button class=\"btn btn-primary btn-sm\" data-v-7e1ed358><i class=\"fas fa-sync\" data-v-7e1ed358></i>\n              ອັບເດດ\n            </button>")], 2)], 2), _vm._ssrNode(" " + (_vm.systemActivityLoading ? "<div class=\"loading-state\" data-v-7e1ed358><div class=\"spinner-sm\" data-v-7e1ed358></div> <span data-v-7e1ed358>ກຳລັງໂຫຼດຂໍ້ມູນ...</span></div>" : _vm.systemActivityData ? "<div class=\"system-activity-content\" data-v-7e1ed358><div class=\"chart-container\" data-v-7e1ed358><h6 data-v-7e1ed358>ກິດຈະກຳລາຍວັນ</h6> <div class=\"chart-placeholder\" data-v-7e1ed358><div class=\"chart-bars\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.dailyStats, function (day, index) {
    return "<div" + _vm._ssrAttr("title", `${day.date}: ${day.count} ກິດຈະກຳ`) + " class=\"chart-bar\"" + _vm._ssrStyle(null, {
      height: day.count / _vm.maxDailyActivity * 100 + '%'
    }, null) + " data-v-7e1ed358><div class=\"bar-value\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(day.count)) + "</div></div>";
  }) + "</div> <div class=\"chart-labels\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.dailyStats, function (day, index) {
    return "<span class=\"chart-label\" data-v-7e1ed358>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatShortDate(day.date)) + "\n                ") + "</span>";
  }) + "</div></div></div> <div class=\"activity-breakdown\" data-v-7e1ed358><h6 data-v-7e1ed358>ການແບ່ງປະເພດກິດຈະກຳ</h6> <div class=\"breakdown-grid\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.activityBreakdown, function (activity) {
    return "<div class=\"breakdown-item\" data-v-7e1ed358><div" + _vm._ssrClass("breakdown-icon", activity.action.toLowerCase()) + " data-v-7e1ed358><i" + _vm._ssrClass(null, _vm.getActivityIcon(activity.action)) + " data-v-7e1ed358></i></div> <div class=\"breakdown-info\" data-v-7e1ed358><div class=\"breakdown-label\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.getActivityLabel(activity.action))) + "</div> <div class=\"breakdown-count\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(activity.count)) + "</div> <div class=\"breakdown-percentage\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(activity.percentage) + "%") + "</div></div></div>";
  }) + "</div></div> <div class=\"recent-changes\" data-v-7e1ed358><h6 data-v-7e1ed358>ການປ່ຽນແປງຫຼ້າສຸດ</h6> <div class=\"changes-timeline\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.recentChanges, function (change) {
    return "<div class=\"change-item\" data-v-7e1ed358><div" + _vm._ssrClass("change-icon", change.action.toLowerCase()) + " data-v-7e1ed358><i" + _vm._ssrClass(null, _vm.getActivityIcon(change.action)) + " data-v-7e1ed358></i></div> <div class=\"change-content\" data-v-7e1ed358><div class=\"change-text\" data-v-7e1ed358><strong data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(change.user)) + "</strong>" + _vm._ssrEscape(" \n                    " + _vm._s(_vm.getActivityLabel(change.action)) + " \n                    ") + "<em data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(change.recordPurpose || `Record #${change.recordId}`)) + "</em></div> <div class=\"change-time\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.formatRelativeTime(change.changedAt))) + "</div></div></div>";
  }) + "</div></div></div>" : "<div class=\"no-data\" data-v-7e1ed358><i class=\"fas fa-server\" data-v-7e1ed358></i> <p data-v-7e1ed358>ບໍ່ມີຂໍ້ມູນກິດຈະກຳລະບົບ</p></div>"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm.activeTab === 'export' ? _vm._ssrNode("<div class=\"report-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"export-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<h6 data-v-7e1ed358><i class=\"fas fa-download\" data-v-7e1ed358></i>\n            ສົ່ງອອກລາຍງານ\n          </h6> "), _vm._ssrNode("<div class=\"export-options\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"export-option\" data-v-7e1ed358><div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-file-csv\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ສົ່ງອອກຂໍ້ມູນ CSV</h6></div> <p data-v-7e1ed358>ສົ່ງອອກຂໍ້ມູນປະຫວັດການປ່ຽນແປງໃນຮູບແບບ CSV ສຳລັບການວິເຄາະ</p> <div class=\"export-controls\" data-v-7e1ed358><div class=\"date-range\" data-v-7e1ed358><input type=\"date\"" + _vm._ssrAttr("value", _vm.exportFilter.startDate) + " class=\"form-control\" data-v-7e1ed358> <span data-v-7e1ed358>ຫາ</span> <input type=\"date\"" + _vm._ssrAttr("value", _vm.exportFilter.endDate) + " class=\"form-control\" data-v-7e1ed358></div> <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-secondary\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-download\" data-v-7e1ed358></i>") + "\n                  ສົ່ງອອກ CSV\n                </button></div></div> "), _vm._ssrNode("<div class=\"export-option\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-chart-pie\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ລາຍງານສະຫຼຸບ</h6></div> <p data-v-7e1ed358>ສົ່ງອອກລາຍງານສະຫຼຸບດ້ວຍກາຟິກແລະການວິເຄາະ</p> "), _vm._ssrNode("<div class=\"export-controls\" data-v-7e1ed358>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.exportFilter.reportType,
      expression: "exportFilter.reportType"
    }],
    staticClass: "form-control",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.exportFilter, "reportType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "summary"
    }
  }, [_vm._v("ສະຫຼຸບທົ່ວໄປ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "user-activity"
    }
  }, [_vm._v("ກິດຈະກຳຜູ້ໃຊ້")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "trend-analysis"
    }
  }, [_vm._v("ການວິເຄາະແນວໂນ້ມ")])]), _vm._ssrNode(" <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-primary\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-file-pdf\" data-v-7e1ed358></i>") + "\n                  ສ້າງລາຍງານ\n                </button>")], 2)], 2), _vm._ssrNode(" <div class=\"export-option\" data-v-7e1ed358><div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-database\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ສໍາລອງຂໍ້ມູນ</h6></div> <p data-v-7e1ed358>ສໍາລອງຂໍ້ມູນປະຫວັດການປ່ຽນແປງທັງໝົດ</p> <div class=\"export-controls\" data-v-7e1ed358><div class=\"backup-info\" data-v-7e1ed358><small data-v-7e1ed358>ຂໍ້ມູນທັງໝົດຈະຖືກສໍາລອງໃນຮູບແບບ JSON</small></div> <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-warning\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-archive\" data-v-7e1ed358></i>") + "\n                  ສໍາລອງຂໍ້ມູນ\n                </button></div></div>")], 2)], 2)]) : _vm._e()], 2), _vm._ssrNode(" <div class=\"modal-footer\" data-v-7e1ed358><button" + _vm._ssrAttr("disabled", _vm.isLoading) + " class=\"btn btn-outline\" data-v-7e1ed358><i class=\"fas fa-sync\" data-v-7e1ed358></i>\n        ອັບເດດ\n      </button> <button class=\"btn btn-primary\" data-v-7e1ed358><i class=\"fas fa-times\" data-v-7e1ed358></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue?vue&type=template&id=7e1ed358&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditReportDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentAuditReportDialogvue_type_script_lang_js_ = ({
  name: 'AuditReportsDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeTab: 'user-activity',
      reportTabs: [{
        id: 'user-activity',
        label: 'ກິດຈະກຳຜູ້ໃຊ້',
        icon: 'fas fa-users'
      }, {
        id: 'system-activity',
        label: 'ກິດຈະກຳລະບົບ',
        icon: 'fas fa-server'
      }, {
        id: 'export',
        label: 'ສົ່ງອອກ',
        icon: 'fas fa-download'
      }],
      // User Activity
      userActivityLoading: false,
      userActivityData: [],
      userActivityFilter: {
        startDate: this.getDateDaysAgo(30),
        endDate: this.getTodayDate()
      },
      // System Activity
      systemActivityLoading: false,
      systemActivityData: null,
      systemActivityFilter: {
        period: '30'
      },
      // Export
      exportLoading: false,
      exportFilter: {
        startDate: this.getDateDaysAgo(30),
        endDate: this.getTodayDate(),
        reportType: 'summary'
      },
      actionLabels: {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      }
    };
  },
  computed: {
    isLoading() {
      return this.userActivityLoading || this.systemActivityLoading || this.exportLoading;
    },
    uniqueActiveUsers() {
      return this.userActivityData.length;
    },
    totalActivities() {
      return this.userActivityData.reduce((sum, user) => sum + user.totalActivities, 0);
    },
    mostActiveUser() {
      if (this.userActivityData.length === 0) return 'N/A';
      const topUser = this.userActivityData.reduce((max, user) => user.totalActivities > max.totalActivities ? user : max);
      return topUser.userName;
    },
    maxDailyActivity() {
      var _this$systemActivityD;
      if (!((_this$systemActivityD = this.systemActivityData) !== null && _this$systemActivityD !== void 0 && _this$systemActivityD.dailyStats)) return 1;
      return Math.max(...this.systemActivityData.dailyStats.map(day => day.count));
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeReports();
      }
    }
  },
  methods: {
    async initializeReports() {
      await this.fetchUserActivity();
      await this.fetchSystemActivity();
    },
    async fetchUserActivity() {
      this.userActivityLoading = true;
      try {
        const params = {
          startDate: this.userActivityFilter.startDate,
          endDate: this.userActivityFilter.endDate
        };
        const {
          data
        } = await this.$axios.get('/api/money-advances/audit/date-range', {
          params
        });

        // Process the audit data to group by user
        const userActivities = {};
        data.data.forEach(auditEntry => {
          var _auditEntry$changedBy;
          const userId = auditEntry.changedBy;
          const userName = ((_auditEntry$changedBy = auditEntry.changedByUser) === null || _auditEntry$changedBy === void 0 ? void 0 : _auditEntry$changedBy.cus_name) || 'Unknown User';
          if (!userActivities[userId]) {
            userActivities[userId] = {
              userId,
              userName,
              activities: {},
              totalActivities: 0,
              lastActivity: auditEntry.changedAt
            };
          }
          if (!userActivities[userId].activities[auditEntry.action]) {
            userActivities[userId].activities[auditEntry.action] = 0;
          }
          userActivities[userId].activities[auditEntry.action]++;
          userActivities[userId].totalActivities++;
          if (new Date(auditEntry.changedAt) > new Date(userActivities[userId].lastActivity)) {
            userActivities[userId].lastActivity = auditEntry.changedAt;
          }
        });
        this.userActivityData = Object.values(userActivities).sort((a, b) => b.totalActivities - a.totalActivities);
      } catch (error) {
        console.error('Error fetching user activity:', error);
        this.userActivityData = [];
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກິດຈະກຳຜູ້ໃຊ້');
      } finally {
        this.userActivityLoading = false;
      }
    },
    async fetchSystemActivity() {
      this.systemActivityLoading = true;
      try {
        const days = parseInt(this.systemActivityFilter.period);
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const params = {
          startDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
          limit: 500
        };
        const {
          data
        } = await this.$axios.get('/api/money-advances/audit/date-range', {
          params
        });

        // Process daily statistics
        const dailyStats = {};
        const activityBreakdown = {};
        let totalActivities = 0;
        data.data.forEach(auditEntry => {
          const date = auditEntry.changedAt.split('T')[0];

          // Daily stats
          if (!dailyStats[date]) {
            dailyStats[date] = {
              date,
              count: 0
            };
          }
          dailyStats[date].count++;

          // Activity breakdown
          if (!activityBreakdown[auditEntry.action]) {
            activityBreakdown[auditEntry.action] = 0;
          }
          activityBreakdown[auditEntry.action]++;
          totalActivities++;
        });

        // Fill missing dates with 0
        for (let i = 0; i < days; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          if (!dailyStats[dateStr]) {
            dailyStats[dateStr] = {
              date: dateStr,
              count: 0
            };
          }
        }
        this.systemActivityData = {
          dailyStats: Object.values(dailyStats).sort((a, b) => new Date(a.date) - new Date(b.date)),
          activityBreakdown: Object.entries(activityBreakdown).map(([action, count]) => ({
            action,
            count,
            percentage: (count / totalActivities * 100).toFixed(1)
          })).sort((a, b) => b.count - a.count),
          recentChanges: data.data.sort((a, b) => new Date(b.changedAt) - new Date(a.changedAt)).slice(0, 10).map(entry => {
            var _entry$changedByUser, _entry$record;
            return {
              id: entry.id,
              action: entry.action,
              user: ((_entry$changedByUser = entry.changedByUser) === null || _entry$changedByUser === void 0 ? void 0 : _entry$changedByUser.cus_name) || 'Unknown',
              recordId: entry.recordId,
              recordPurpose: (_entry$record = entry.record) === null || _entry$record === void 0 ? void 0 : _entry$record.purpose,
              changedAt: entry.changedAt
            };
          })
        };
      } catch (error) {
        console.error('Error fetching system activity:', error);
        this.systemActivityData = null;
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກິດຈະກຳລະບົບ');
      } finally {
        this.systemActivityLoading = false;
      }
    },
    async exportCSV() {
      this.exportLoading = true;
      try {
        const params = {
          startDate: this.exportFilter.startDate,
          endDate: this.exportFilter.endDate,
          format: 'csv'
        };
        const response = await this.$axios.get('/api/money-advances/audit/export', {
          params,
          responseType: 'blob'
        });
        const blob = new Blob([response.data], {
          type: 'text/csv'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `audit-report-${params.startDate}-to-${params.endDate}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.$emit('success', 'ສົ່ງອອກ CSV ສຳເລັດ');
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ CSV');
      } finally {
        this.exportLoading = false;
      }
    },
    async generateReport() {
      this.exportLoading = true;
      try {
        // This would generate a PDF report
        this.$emit('success', 'ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ');
      } catch (error) {
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສ້າງລາຍງານ');
      } finally {
        this.exportLoading = false;
      }
    },
    async backupData() {
      this.exportLoading = true;
      try {
        // This would create a full backup
        this.$emit('success', 'ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ');
      } catch (error) {
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສໍາລອງຂໍ້ມູນ');
      } finally {
        this.exportLoading = false;
      }
    },
    refreshCurrentReport() {
      if (this.activeTab === 'user-activity') {
        this.fetchUserActivity();
      } else if (this.activeTab === 'system-activity') {
        this.fetchSystemActivity();
      }
    },
    getActivityIcon(action) {
      const icons = {
        CREATE: 'fas fa-plus-circle',
        UPDATE: 'fas fa-edit',
        APPROVE: 'fas fa-check-circle',
        SETTLE: 'fas fa-money-bill-wave',
        DELETE: 'fas fa-trash-alt'
      };
      return icons[action] || 'fas fa-question-circle';
    },
    getActivityLabel(action) {
      return this.actionLabels[action] || action;
    },
    formatDateTime(dateTime) {
      if (!dateTime) return 'N/A';
      return new Date(dateTime).toLocaleString('lo-LA');
    },
    formatShortDate(date) {
      return new Date(date).toLocaleDateString('lo-LA', {
        month: 'short',
        day: 'numeric'
      });
    },
    formatRelativeTime(dateTime) {
      const now = new Date();
      const date = new Date(dateTime);
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      if (diffMins < 1) return 'ຫຼ້າສຸດ';
      if (diffMins < 60) return `${diffMins} ນາທີຜ່ານມາ`;
      if (diffHours < 24) return `${diffHours} ຊົ່ວໂມງຜ່ານມາ`;
      return `${diffDays} ມື້ຜ່ານມາ`;
    },
    getDateDaysAgo(days) {
      const date = new Date();
      date.setDate(date.getDate() - days);
      return date.toISOString().split('T')[0];
    },
    getTodayDate() {
      return new Date().toISOString().split('T')[0];
    },
    closeDialog() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentAuditReportDialogvue_type_script_lang_js_ = (paymentAuditReportDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(655)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentAuditReportDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e1ed358",
  "2d1edbac"
  
)

/* harmony default export */ var paymentAuditReportDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b6ae2c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(740);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b6ae2c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b6ae2c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b6ae2c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b6ae2c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".money-advance-container[data-v-1b6ae2c6]{background-color:#fafafa;min-height:100vh;padding:8px}.header-card[data-v-1b6ae2c6]{border:1px solid #e2e8f0;margin-bottom:8px}.header-content[data-v-1b6ae2c6]{align-items:center;display:flex;justify-content:space-between}.header-title[data-v-1b6ae2c6]{color:#1a202c;font-size:18px;font-weight:600;margin:0}.header-actions[data-v-1b6ae2c6]{display:flex;gap:8px}.summary-grid[data-v-1b6ae2c6]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}.summary-card[data-v-1b6ae2c6]{border:1px solid #e2e8f0;transition:transform .2s}.summary-card[data-v-1b6ae2c6]:hover{transform:translateY(-2px)}.summary-card.total-amount[data-v-1b6ae2c6]{background:linear-gradient(135deg,#667eea,#764ba2)!important;color:#fff}.summary-card.pending[data-v-1b6ae2c6]{border-left:4px solid #f59e0b}.summary-card.approved[data-v-1b6ae2c6]{border-left:4px solid #10b981}.summary-card.settled[data-v-1b6ae2c6]{border-left:4px solid #3b82f6}.summary-layout[data-v-1b6ae2c6]{gap:12px}.summary-icon[data-v-1b6ae2c6],.summary-layout[data-v-1b6ae2c6]{align-items:center;display:flex}.summary-icon[data-v-1b6ae2c6]{background:#f3f4f6;border-radius:50%;flex-shrink:0;height:36px;justify-content:center;width:36px}.summary-icon.total[data-v-1b6ae2c6]{background:hsla(0,0%,100%,.2)}.summary-content[data-v-1b6ae2c6]{flex:1;min-width:0}.summary-amount[data-v-1b6ae2c6]{color:#1a202c;font-size:16px;font-weight:700;word-break:break-word}.total-amount .summary-amount[data-v-1b6ae2c6]{color:#fff}.summary-label[data-v-1b6ae2c6]{color:#718096;font-size:11px;margin-top:2px}.total-amount .summary-label[data-v-1b6ae2c6]{color:hsla(0,0%,100%,.9)}.filter-card[data-v-1b6ae2c6]{border:1px solid #e2e8f0}.filter-row[data-v-1b6ae2c6]{align-items:flex-end}.filter-actions[data-v-1b6ae2c6]{flex-direction:column}.action-buttons[data-v-1b6ae2c6],.filter-actions[data-v-1b6ae2c6]{display:flex;gap:4px}.table-card[data-v-1b6ae2c6]{border:1px solid #e2e8f0}.table-title[data-v-1b6ae2c6]{font-size:14px;font-weight:600}.table-controls[data-v-1b6ae2c6]{align-items:center;display:flex;gap:8px}.compact-table[data-v-1b6ae2c6]{font-size:12px}.compact-table[data-v-1b6ae2c6] th{background:#f8fafc!important;font-size:11px!important;font-weight:600!important;height:36px!important;padding:6px 8px!important}.compact-table[data-v-1b6ae2c6] td{border-bottom:1px solid #f1f5f9!important;height:40px!important;padding:4px 8px!important}.id-text[data-v-1b6ae2c6]{font-size:12px;font-weight:600}.maker-name[data-v-1b6ae2c6]{color:#2d3748;font-size:11px}.ministry-compact[data-v-1b6ae2c6]{display:flex;justify-content:center}.amount-column[data-v-1b6ae2c6]{align-items:flex-end;display:flex;flex-direction:column;text-align:right}.amount-value[data-v-1b6ae2c6]{color:#22c55e;font-size:12px;font-weight:600}.currency-code[data-v-1b6ae2c6]{color:#718096;font-size:9px;text-transform:uppercase}.purpose-text[data-v-1b6ae2c6]{color:#4a5568;font-size:11px}.bank-compact[data-v-1b6ae2c6]{font-size:10px}.bank-name[data-v-1b6ae2c6]{color:#2d3748;font-weight:600}.account-number[data-v-1b6ae2c6]{color:#718096;font-family:monospace}.date-compact[data-v-1b6ae2c6]{color:#4a5568;font-size:10px}.date-compact.overdue[data-v-1b6ae2c6]{color:#e53e3e;font-weight:600}.action-buttons-table[data-v-1b6ae2c6]{display:flex;gap:2px;justify-content:center}.no-data[data-v-1b6ae2c6]{color:#a0aec0;font-size:10px;font-style:italic}.no-data-card[data-v-1b6ae2c6]{border:1px solid #e2e8f0;margin-top:16px}.compact-pagination[data-v-1b6ae2c6]{align-items:center;background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;padding:8px 12px}.pagination-info[data-v-1b6ae2c6]{color:#718096;font-size:11px}.pagination-controls[data-v-1b6ae2c6]{align-items:center;display:flex;gap:4px}.page-numbers[data-v-1b6ae2c6]{display:flex;gap:2px;margin:0 8px}@media (max-width:960px){.header-content[data-v-1b6ae2c6]{align-items:stretch;flex-direction:column;gap:12px}.summary-grid[data-v-1b6ae2c6]{grid-template-columns:repeat(2,1fr)}.filter-row[data-v-1b6ae2c6]{gap:8px}.action-buttons-table[data-v-1b6ae2c6]{flex-direction:column;gap:1px}}@media (max-width:600px){.money-advance-container[data-v-1b6ae2c6]{padding:4px}.summary-grid[data-v-1b6ae2c6]{grid-template-columns:1fr}.compact-pagination[data-v-1b6ae2c6]{align-items:stretch;text-align:center}.compact-pagination[data-v-1b6ae2c6],.summary-layout[data-v-1b6ae2c6],.table-controls[data-v-1b6ae2c6]{flex-direction:column;gap:8px}.summary-layout[data-v-1b6ae2c6]{text-align:center}.summary-icon[data-v-1b6ae2c6]{margin:0 auto}}.v-card[data-v-1b6ae2c6]{box-shadow:0 1px 3px rgba(0,0,0,.1)!important}.v-btn--small[data-v-1b6ae2c6]{height:28px!important;min-width:60px!important}.v-btn--x-small[data-v-1b6ae2c6]{height:24px!important;min-width:24px!important}.v-chip--x-small[data-v-1b6ae2c6]{font-size:10px!important;height:18px!important;padding:0 6px!important}.v-select--dense .v-input__control[data-v-1b6ae2c6],.v-text-field--dense .v-input__control[data-v-1b6ae2c6]{min-height:32px!important}.v-text-field--dense .v-input__details[data-v-1b6ae2c6]{min-height:14px!important;padding-top:2px!important}.v-text-field--dense .v-messages[data-v-1b6ae2c6]{font-size:10px!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map