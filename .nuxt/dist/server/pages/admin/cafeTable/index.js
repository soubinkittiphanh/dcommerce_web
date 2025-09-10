exports.ids = [161,27,28,29,30];
exports.modules = {

/***/ 1132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(447);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(544);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js
var VSubheader = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/cafeTable/index.vue?vue&type=template&id=a70deaa8&scoped=true&



























var cafeTablevue_type_template_id_a70deaa8_scoped_true_render = function render() {
  var _vm$selectedTable;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "pa-0 fill-height",
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], {
    staticClass: "fill-height",
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column",
    attrs: {
      "cols": "8"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "ma-0 rounded-0",
    attrs: {
      "elevation": "1"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-table-furniture")]), _vm._v("\n          Table Management\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-check-circle")]), _vm._v("\n            Available: " + _vm._s(_vm.availableTables) + "\n          ")], 1), _vm._v(" "), _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "warning",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-clock")]), _vm._v("\n            Occupied: " + _vm._s(_vm.occupiedTables) + "\n          ")], 1), _vm._v(" "), _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "error",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-silverware-clean")]), _vm._v("\n            Cleaning: " + _vm._s(_vm.cleaningTables) + "\n          ")], 1), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "info",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-bookmark")]), _vm._v("\n            Reserved: " + _vm._s(_vm.reservedTables) + "\n          ")], 1)], 1)], 1), _vm._v(" "), _vm.loading ? _c(VCard["a" /* default */], {
    staticClass: "flex-grow-1 ma-0 rounded-0 d-flex align-center justify-center"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-4 text-h6"
  }, [_vm._v("Loading tables...")])], 1)]) : _c(VCard["a" /* default */], {
    staticClass: "flex-grow-1 ma-0 rounded-0",
    staticStyle: {
      "overflow-y": "auto"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_vm.tables.length > 0 ? _c(VRow["a" /* default */], _vm._l(_vm.tables, function (table) {
    return _c(VCol["a" /* default */], {
      key: table.id,
      staticClass: "pa-2",
      attrs: {
        "cols": "3"
      }
    }, [_c(VCard["a" /* default */], {
      class: ['text-center pa-4 cursor-pointer table-card', _vm.selectedTable && _vm.selectedTable.id === table.id ? 'elevation-8' : 'elevation-2'],
      attrs: {
        "color": _vm.getTableColor(table.status),
        "height": "150",
        "hover": ""
      },
      on: {
        "click": function ($event) {
          return _vm.selectTable(table);
        }
      }
    }, [_c(components_VCard["d" /* VCardTitle */], {
      staticClass: "justify-center white--text text-h4 pa-2"
    }, [_vm._v("\n                  " + _vm._s(table.number) + "\n                ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-2 white--text"
    }, [_c('div', {
      staticClass: "text-h6 font-weight-bold mb-1"
    }, [_vm._v("\n                    " + _vm._s(_vm.getStatusText(table.status)) + "\n                  ")]), _vm._v(" "), table.capacity ? _c('div', {
      staticClass: "caption"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "color": "white"
      }
    }, [_vm._v("mdi-account-multiple")]), _vm._v("\n                    " + _vm._s(table.capacity) + " seats\n                  ")], 1) : _vm._e(), _vm._v(" "), table.orderTotal ? _c('div', {
      staticClass: "caption mt-1"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "color": "white"
      }
    }, [_vm._v("mdi-currency-usd")]), _vm._v("\n                    $" + _vm._s(table.orderTotal.toFixed(2)) + "\n                  ")], 1) : _vm._e(), _vm._v(" "), table.timeOccupied ? _c('div', {
      staticClass: "caption"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "color": "white"
      }
    }, [_vm._v("mdi-clock-outline")]), _vm._v("\n                    " + _vm._s(_vm.formatTime(table.timeOccupied)) + "\n                  ")], 1) : _vm._e()])], 1)], 1);
  }), 1) : _c('div', {
    staticClass: "text-center pa-8"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey"
    }
  }, [_vm._v("mdi-table-furniture")]), _vm._v(" "), _c('p', {
    staticClass: "text-h6 mt-4 grey--text"
  }, [_vm._v("No tables found")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.fetchTables
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n              Refresh Tables\n            ")], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column",
    attrs: {
      "cols": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "flex-grow-1 ma-0 rounded-0 d-flex flex-column",
    attrs: {
      "elevation": "2"
    }
  }, [_vm.selectedTable ? _c(components_VCard["d" /* VCardTitle */], {
    staticClass: "secondary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-table-chair")]), _vm._v("\n          Table " + _vm._s(_vm.selectedTable.number) + "\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VMenu["a" /* default */], {
    attrs: {
      "offset-y": ""
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
            "color": "white"
          }
        }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], [_vm._v("mdi-dots-vertical")])], 1)];
      }
    }], null, false, 1012294362)
  }, [_vm._v(" "), _c(VList["a" /* default */], [_c(VListItem["a" /* default */], {
    on: {
      "click": function ($event) {
        return _vm.changeTableStatus('available');
      }
    }
  }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-check-circle")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("Mark Available")])], 1), _vm._v(" "), _c(VListItem["a" /* default */], {
    on: {
      "click": function ($event) {
        return _vm.changeTableStatus('cleaning');
      }
    }
  }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "error"
    }
  }, [_vm._v("mdi-silverware-clean")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("Mark for Cleaning")])], 1), _vm._v(" "), _c(VListItem["a" /* default */], {
    on: {
      "click": function ($event) {
        return _vm.changeTableStatus('reserved');
      }
    }
  }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "info"
    }
  }, [_vm._v("mdi-bookmark")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("Mark Reserved")])], 1)], 1)], 1)], 1) : _c(components_VCard["d" /* VCardTitle */], {
    staticClass: "secondary white--text justify-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-hand-pointing-right")]), _vm._v("\n          Select a Table\n        ")], 1), _vm._v(" "), _vm.selectedTable ? _c(components_VCard["c" /* VCardText */], {
    staticClass: "flex-grow-1 pa-4"
  }, [_c(VCard["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["b" /* VCardSubtitle */], [_vm._v("Table Information")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Status")]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.getTableColor(_vm.selectedTable.status),
      "text-color": "white",
      "small": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.getStatusText(_vm.selectedTable.status)) + "\n                  ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Capacity")]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                    " + _vm._s(_vm.selectedTable.capacity) + " seats\n                  ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Table Number")]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                    #" + _vm._s(_vm.selectedTable.number) + "\n                  ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Current Total")]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-bold text-h6",
    class: _vm.getTotalAmountColor()
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPrice(_vm.selectedTable.currentTotal || 0)) + "\n                  ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Created")]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatDate(_vm.selectedTable.createdAt)) + "\n                  ")])]), _vm._v(" "), _vm.selectedTable.currentOrderId ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Items in Order")]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                    " + _vm._s(_vm.selectedTable.itemCount || 0) + " items\n                  ")])]) : _vm._e(), _vm._v(" "), _vm.selectedTable.customerName ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Customer")]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                    " + _vm._s(_vm.selectedTable.customerName) + "\n                  ")])]) : _vm._e(), _vm._v(" "), _vm.selectedTable.currentOrderId ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Current Order ID")]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-medium d-flex justify-space-between align-center"
  }, [_c('span', [_vm._v("#" + _vm._s(_vm.selectedTable.currentOrderId))]), _vm._v(" "), _vm.selectedTable.orderStatus ? _c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.getOrderStatusColor(_vm.selectedTable.orderStatus),
      "text-color": "white",
      "x-small": ""
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.selectedTable.orderStatus) + "\n                    ")]) : _vm._e()], 1)]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _vm.selectedTable.order && _vm.selectedTable.order.length > 0 ? _c(VCard["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["b" /* VCardSubtitle */], [_vm._v("\n              Current Order\n              "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "text-color": "white",
      "small": ""
    }
  }, [_vm._v("\n                " + _vm._s(_vm.selectedTable.order.length) + " items\n              ")])], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticStyle: {
      "max-height": "200px",
      "overflow-y": "auto"
    }
  }, [_vm._l(_vm.selectedTable.order, function (item) {
    return _c('div', {
      key: item.id,
      staticClass: "d-flex justify-space-between mb-2"
    }, [_c('div', [_c('div', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "text-caption grey--text"
    }, [_vm._v("\n                    Qty: " + _vm._s(item.quantity) + "\n                  ")])]), _vm._v(" "), _c('div', {
      staticClass: "font-weight-bold primary--text"
    }, [_vm._v("\n                  $" + _vm._s(_vm.formatPrice(item.unitPrice * item.quantity)) + "\n                ")])]);
  }), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between text-h6 font-weight-bold"
  }, [_c('span', [_vm._v("Total:")]), _vm._v(" "), _c('span', {
    staticClass: "primary--text"
  }, [_vm._v("$" + _vm._s(_vm.formatPrice(_vm.selectedTable.currentTotal || 0)))])])], 2)], 1) : _vm._e(), _vm._v(" "), _vm.selectedTable.status === 'available' ? _c(VCard["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["b" /* VCardSubtitle */], [_vm._v("Seat Customer")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Customer Name",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-account"
    },
    model: {
      value: _vm.customerName,
      callback: function ($$v) {
        _vm.customerName = $$v;
      },
      expression: "customerName"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Party Size",
      "type": "number",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-account-group",
      "max": _vm.selectedTable.capacity
    },
    model: {
      value: _vm.partySize,
      callback: function ($$v) {
        _vm.partySize = $$v;
      },
      expression: "partySize"
    }
  })], 1)], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.selectedTable ? _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c('div', {
    staticClass: "w-100"
  }, [_vm.selectedTable.status === 'available' ? _c('div', [_c(VBtn["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "color": "primary",
      "block": "",
      "large": "",
      "disabled": !_vm.customerName,
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.seatCustomer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-account-plus")]), _vm._v("\n                Seat Customer\n              ")], 1)], 1) : _vm.selectedTable.status === 'occupied' ? _c('div', [_c(VBtn["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "color": "primary",
      "block": "",
      "large": ""
    },
    on: {
      "click": _vm.openPOS
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-cash-register")]), _vm._v("\n                Add Items\n              ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "color": "success",
      "block": "",
      "large": "",
      "disabled": !_vm.selectedTable.currentTotal || _vm.selectedTable.currentTotal === 0,
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.processPayment
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-credit-card")]), _vm._v("\n                Process Payment\n              ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "color": "info",
      "block": "",
      "disabled": !_vm.selectedTable.currentTotal || _vm.selectedTable.currentTotal === 0,
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.printCustomerReceipt
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n                Print Receipt\n              ")], 1)], 1) : _vm.selectedTable.status === 'cleaning' ? _c('div', [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "block": "",
      "large": "",
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.markTableClean
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-check-circle")]), _vm._v("\n                Mark Clean & Available\n              ")], 1)], 1) : _vm.selectedTable.status === 'reserved' ? _c('div', [_c(VBtn["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "color": "primary",
      "block": "",
      "large": "",
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.seatReservedCustomer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-account-check")]), _vm._v("\n                Seat Reserved Customer\n              ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "block": "",
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.cancelReservation
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-cancel")]), _vm._v("\n                Cancel Reservation\n              ")], 1)], 1) : _vm._e()])]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400",
      "persistent": ""
    },
    model: {
      value: _vm.showPrintConfirmDialog,
      callback: function ($$v) {
        _vm.showPrintConfirmDialog = $$v;
      },
      expression: "showPrintConfirmDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "headline d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-check-circle")]), _vm._v("\n        Payment Successful!\n      ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center py-4"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "size": "64",
      "color": "success"
    }
  }, [_vm._v("mdi-credit-card-check")]), _vm._v(" "), _c('div', {
    staticClass: "text-h6 mb-2"
  }, [_vm._v("\n          Payment has been processed successfully\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1 mb-4"
  }, [_vm._v("\n          Amount: "), _c('strong', [_vm._v(_vm._s(_vm.formatPrice(_vm.paymentAmount)))])]), _vm._v(" "), _c('div', {
    staticClass: "text-body-1"
  }, [_vm._v("\n          Would you like to print the receipt now?\n        ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "justify-center pb-4"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.handlePrintConfirmation(false);
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n          No, Skip\n        ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "color": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.handlePrintConfirmation(true);
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n          Yes, Print Receipt\n        ")], 1)], 1)], 1)], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600",
      "persistent": ""
    },
    model: {
      value: _vm.showPaymentDialog,
      callback: function ($$v) {
        _vm.showPaymentDialog = $$v;
      },
      expression: "showPaymentDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-credit-card")]), _vm._v("\n        Process Payment - Table\n        " + _vm._s(_vm.selectedTable ? _vm.selectedTable.number : '') + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closePaymentDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-6"
  }, [_c(VCard["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center pa-4"
  }, [_c('div', {
    staticClass: "text-h4 font-weight-bold primary--text"
  }, [_vm._v("\n              " + _vm._s(_vm.formatPrice(_vm.paymentAmount)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1 grey--text"
  }, [_vm._v("Total Amount to Pay")])])], 1), _vm._v(" "), _vm.paymentLoading ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("Loading payment methods...")])], 1) : _c('div', [_c(VSubheader["a" /* default */], {
    staticClass: "px-0"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-wallet")]), _vm._v("\n            Select Payment Method\n          ")], 1), _vm._v(" "), _vm.paymentList.length > 0 ? _c(VRow["a" /* default */], _vm._l(_vm.paymentList, function (payment) {
    var _vm$selectedPaymentMe, _vm$selectedPaymentMe2, _vm$selectedPaymentMe3, _vm$selectedPaymentMe4, _vm$selectedPaymentMe5;
    return _c(VCol["a" /* default */], {
      key: payment.id,
      staticClass: "pa-1",
      attrs: {
        "cols": "6"
      }
    }, [_c(VCard["a" /* default */], {
      class: ['payment-method-card cursor-pointer text-center pa-3', ((_vm$selectedPaymentMe = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe === void 0 ? void 0 : _vm$selectedPaymentMe.id) === payment.id ? 'white--text elevation-4' : 'elevation-1'],
      attrs: {
        "color": ((_vm$selectedPaymentMe2 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe2 === void 0 ? void 0 : _vm$selectedPaymentMe2.id) === payment.id ? _vm.getPaymentColor(payment.payment_code) : '',
        "hover": "",
        "height": "100"
      },
      on: {
        "click": function ($event) {
          _vm.selectedPaymentMethod = payment;
        }
      }
    }, [_c(VIcon["a" /* default */], {
      staticClass: "mb-2",
      attrs: {
        "color": ((_vm$selectedPaymentMe3 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe3 === void 0 ? void 0 : _vm$selectedPaymentMe3.id) === payment.id ? 'white' : _vm.getPaymentColor(payment.payment_code),
        "size": "32"
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.getPaymentIcon(payment.payment_code)) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "font-weight-medium",
      class: ((_vm$selectedPaymentMe4 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe4 === void 0 ? void 0 : _vm$selectedPaymentMe4.id) === payment.id ? 'white--text' : ''
    }, [_vm._v("\n                  " + _vm._s(payment.payment_name) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "caption",
      class: ((_vm$selectedPaymentMe5 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe5 === void 0 ? void 0 : _vm$selectedPaymentMe5.id) === payment.id ? 'white--text' : 'grey--text'
    }, [_vm._v("\n                  " + _vm._s(payment.payment_code) + "\n                ")])], 1)], 1);
  }), 1) : _c(VAlert["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "type": "warning",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-alert")]), _vm._v("\n              No active payment methods available\n            ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "small": "",
      "color": "warning"
    },
    on: {
      "click": _vm.loadPaymentMethods
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n              Retry\n            ")], 1)], 1), _vm._v(" "), _vm.selectedPaymentMethod ? _c(VCard["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "outlined": "",
      "color": "grey lighten-5"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-3",
    attrs: {
      "color": _vm.getPaymentColor(_vm.selectedPaymentMethod.payment_code)
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.getPaymentIcon(_vm.selectedPaymentMethod.payment_code)) + "\n                ")]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                    " + _vm._s(_vm.selectedPaymentMethod.payment_name) + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "caption grey--text"
  }, [_vm._v("\n                    " + _vm._s(_vm.selectedPaymentMethod.payment_desc || 'No description') + "\n                  ")])])], 1)])], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": "",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closePaymentDialog
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "large": "",
      "disabled": !_vm.selectedPaymentMethod || _vm.actionLoading,
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.confirmPayment
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n          Process Payment\n        ")], 1)], 1)], 1)], 1), _vm._v(" "), _c('PrintTicketDialog', {
    attrs: {
      "show": _vm.showCustomerPrint,
      "ticket": _vm.selectedTicket,
      "restaurant-info": _vm.restaurantConfig
    },
    on: {
      "close": _vm.closePrintDialog,
      "printed": _vm.onPrintSuccess
    }
  }), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": ""
    },
    model: {
      value: _vm.showPOSDialog,
      callback: function ($$v) {
        _vm.showPOSDialog = $$v;
      },
      expression: "showPOSDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(VToolbar["a" /* default */], {
    attrs: {
      "color": "primary",
      "dark": ""
    }
  }, [_c(components_VToolbar["a" /* VToolbarTitle */], [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-cash-register")]), _vm._v("\n          POS - Table " + _vm._s(_vm.selectedTable ? _vm.selectedTable.number : '') + "\n        ")], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": _vm.closePOS
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.selectedTable && _vm.showPOSDialog ? _c('CafePOSScreen', {
    key: `pos-${(_vm$selectedTable = _vm.selectedTable) === null || _vm$selectedTable === void 0 ? void 0 : _vm$selectedTable.id}`,
    attrs: {
      "tableId": _vm.selectedTable ? _vm.selectedTable.id : null
    },
    on: {
      "reload-data": function ($event) {
        return _vm.loadTableTicketData(_vm.selectedTable.id);
      },
      "reload-table": _vm.fetchTables
    }
  }) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "color": _vm.snackbar.color,
      "timeout": _vm.snackbar.timeout,
      "location": "top right",
      "variant": "elevated"
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function () {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "white",
            "variant": "text"
          },
          on: {
            "click": function ($event) {
              _vm.snackbar.show = false;
            }
          }
        }, [_vm._v("\n        Close\n      ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.snackbar.show,
      callback: function ($$v) {
        _vm.$set(_vm.snackbar, "show", $$v);
      },
      expression: "snackbar.show"
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v(_vm._s(_vm.snackbar.icon))]), _vm._v("\n      " + _vm._s(_vm.snackbar.message) + "\n    ")], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/cafeTable/index.vue?vue&type=template&id=a70deaa8&scoped=true&

// EXTERNAL MODULE: ./components/CAFE/printdialog/index.vue + 4 modules
var printdialog = __webpack_require__(586);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/cafeTable/index.vue?vue&type=script&lang=js&

/* harmony default export */ var cafeTablevue_type_script_lang_js_ = ({
  components: {
    PrintTicketDialog: printdialog["default"]
  },
  name: 'OperationsTableScreen',
  data() {
    return {
      showPrintConfirmDialog: false,
      // Print related
      showCustomerPrint: false,
      selectedTicket: null,
      // Restaurant configuration
      restaurantConfig: {
        name: 'Your Restaurant Name',
        address: '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567'
      },
      selectedTable: null,
      customerName: 'Walk-in',
      partySize: 1,
      showPOSDialog: false,
      loading: false,
      actionLoading: false,
      tables: [],
      // Payment dialog data
      showPaymentDialog: false,
      paymentList: [],
      selectedPaymentMethod: null,
      paymentLoading: false,
      paymentAmount: 0,
      snackbar: {
        show: false,
        message: '',
        color: 'success',
        icon: 'mdi-check-circle',
        timeout: 4000
      }
    };
  },
  computed: {
    availableTables() {
      return this.tables.filter(table => table.status === 'available').length;
    },
    occupiedTables() {
      return this.tables.filter(table => table.status === 'occupied').length;
    },
    cleaningTables() {
      return this.tables.filter(table => table.status === 'cleaning').length;
    },
    reservedTables() {
      return this.tables.filter(table => table.status === 'reserved').length;
    }
  },
  mounted() {
    this.fetchTables();
  },
  methods: {
    // Handle print confirmation response
    handlePrintConfirmation(shouldPrint) {
      this.showPrintConfirmDialog = false;
      if (shouldPrint) {
        this.printCustomerReceipt();
      } else {
        this.showMessage(`Payment of ${this.formatPrice(this.paymentAmount)} processed successfully`, 'success', 'mdi-check-circle');
      }
      this.paymentAmount = 0;
    },
    // Silent table status change (without showing message)
    async changeTableStatusSilent(status) {
      try {
        const payload = {
          status,
          timeOccupied: status === 'occupied' ? new Date() : null,
          currentOrderId: status === 'occupied' ? this.selectedTable.currentOrderId : null
        };
        await this.$axios.patch(`api/tables/${this.selectedTable.id}/status`, payload);
        if (status === 'available') {
          this.selectedTable.customerName = null;
          this.selectedTable.timeOccupied = null;
          this.selectedTable.order = [];
          this.selectedTable.orderTotal = 0;
          this.selectedTable.currentOrderId = null;
        }
        this.selectedTable.status = status;
        this.fetchTables();
      } catch (error) {
        console.error('Failed to update table status silently:', error);
      }
    },
    async printCustomerReceipt() {
      console.log('Print customer receipt clicked');
      if (!this.selectedTable || !this.selectedTable.currentOrderId) {
        this.showMessage('No active order found for this table', 'warning', 'mdi-alert');
        return;
      }
      try {
        this.actionLoading = true;
        console.log('Fetching latest ticket data before printing...');
        const ticketResponse = await this.$axios.get(`api/ticket/${this.selectedTable.currentOrderId}`);
        const latestTicket = ticketResponse.data.data || ticketResponse.data;

        // Fetch customer data if exists
        let customerData = null;
        if (latestTicket.clientId) {
          try {
            const customerResponse = await this.$axios.get(`api/client/find/${latestTicket.clientId}`);
            customerData = customerResponse.data.data || customerResponse.data;
          } catch (error) {
            console.warn('Could not fetch customer data:', error);
            customerData = this.selectedTable.customerName ? {
              name: this.selectedTable.customerName
            } : null;
          }
        }

        // Fetch the latest ticket lines
        const ticketLinesResponse = await this.$axios.get(`api/ticketLine/ticket/${latestTicket.id}`);
        const ticketLines = ticketLinesResponse.data.data || ticketLinesResponse.data;

        // Fetch products for mapping
        let products = [];
        try {
          const productsResponse = await this.$axios.get('product_f/1');
          const productData = productsResponse.data.data || productsResponse.data;
          products = productData.map(product => ({
            id: product.id,
            pro_id: product.pro_id,
            pro_name: product.pro_name,
            categ_name: product.categ_name,
            stock_count: product.card_count || 0,
            isActive: product.pro_status === 1
          }));
        } catch (error) {
          console.warn('Could not fetch products for mapping:', error);
        }

        // Map ticket lines
        const mappedTicketLines = ticketLines.map(line => {
          var _line$product;
          const product = products.find(p => p.id === line.productId);
          return {
            id: line.productId,
            pro_id: line.productId,
            pro_name: ((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.name) || (product === null || product === void 0 ? void 0 : product.pro_name) || `Product ${line.productId}`,
            categ_name: (product === null || product === void 0 ? void 0 : product.categ_name) || 'Unknown Category',
            stock_count: (product === null || product === void 0 ? void 0 : product.stock_count) || 0,
            isActive: (product === null || product === void 0 ? void 0 : product.isActive) || false,
            pro_price: line.unitPrice,
            quantity: line.quantity,
            ticketLineId: line.id,
            totalPrice: line.totalPrice || line.unitPrice * line.quantity,
            isFromTicketLine: true,
            originalTicketLinePrice: line.unitPrice
          };
        }).filter(item => item.pro_name);

        // Build the complete ticket object for printing
        const ticketForPrint = {
          ...latestTicket,
          client: customerData,
          table: {
            id: this.selectedTable.id,
            number: this.selectedTable.number,
            name: `Table ${this.selectedTable.number}`
          },
          ticketLines: mappedTicketLines
        };

        // Calculate totals if missing
        if (!ticketForPrint.subtotal) {
          const subtotal = mappedTicketLines.reduce((total, item) => {
            return total + parseFloat(item.pro_price) * item.quantity;
          }, 0);
          ticketForPrint.subtotal = subtotal;
          ticketForPrint.tax = subtotal * 0.085;
          ticketForPrint.total = subtotal + subtotal * 0.085;
        }
        console.log('Updated ticket for print:', ticketForPrint);
        console.log('Ticket lines count:', mappedTicketLines.length);

        // Update the selected table with latest data
        this.selectedTable.currentTotal = latestTicket.total;
        this.selectedTable.order = mappedTicketLines;

        // Use PrintTicketDialog component
        this.selectedTicket = ticketForPrint;
        this.showCustomerPrint = true;
        this.showMessage('Receipt prepared for printing!', 'success', 'mdi-printer');
      } catch (error) {
        console.error('Error fetching latest ticket data for printing:', error);
        this.showMessage('Failed to load latest ticket data. Please try again.', 'warning', 'mdi-alert');
      } finally {
        this.actionLoading = false;
      }
    },
    closePrintDialog() {
      this.showCustomerPrint = false;
      this.selectedTicket = null;
    },
    onPrintSuccess(ticket) {
      console.log('Ticket printed successfully:', ticket.id);
      this.showMessage('Receipt printed successfully!', 'success', 'mdi-printer');
    },
    // Core table methods
    async fetchTables() {
      this.loading = true;
      try {
        const response = await this.$axios.get('api/tables');
        console.log('Tables response:', response.data);
        const tableData = response.data.data || response.data;
        this.tables = tableData.map(table => ({
          id: table.id,
          name: table.name,
          number: table.number,
          capacity: table.capacity,
          status: table.status,
          timeOccupied: table.timeOccupied ? new Date(table.timeOccupied) : null,
          currentOrderId: table.currentOrderId,
          createdAt: table.createdAt,
          updateTimestamp: table.updateTimestamp,
          customerName: null,
          order: [],
          orderTotal: 0
        }));
        this.showMessage(`Loaded ${this.tables.length} tables successfully!`);
      } catch (error) {
        console.error('Error fetching tables:', error);
        this.showMessage('Failed to load tables. Please try again.', 'error', 'mdi-alert');
      } finally {
        this.loading = false;
      }
    },
    async selectTable(table) {
      this.selectedTable = {
        ...table
      };
      this.partySize = 1;
      await this.loadTableTicketData(table.id);
    },
    async loadTableTicketData(tableId) {
      console.info(`Loading data ${tableId}`);
      try {
        const response = await this.$axios.get(`api/ticket/table/${tableId}/pending`);
        const pendingTickets = response.data || [];
        if (pendingTickets.length > 0) {
          const currentTicket = pendingTickets[0];
          this.selectedTable.currentTotal = currentTicket.total || 0;
          this.selectedTable.currentOrderId = currentTicket.id;
          this.selectedTable.orderStatus = currentTicket.status;
          try {
            const linesResponse = await this.$axios.get(`api/ticketLine/ticket/${currentTicket.id}`);
            const lines = linesResponse.data.data || linesResponse.data || [];
            this.selectedTable.order = lines;
            this.selectedTable.itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
          } catch (linesError) {
            console.log('Could not fetch ticket lines:', linesError);
            this.selectedTable.itemCount = 0;
          }
        } else {
          this.selectedTable.currentTotal = 0;
          this.selectedTable.currentOrderId = null;
          this.selectedTable.orderStatus = null;
          this.selectedTable.itemCount = 0;
        }
      } catch (error) {
        console.log('No pending tickets for table:', tableId);
        this.selectedTable.currentTotal = 0;
        this.selectedTable.currentOrderId = null;
        this.selectedTable.orderStatus = null;
        this.selectedTable.itemCount = 0;
      }
    },
    // Customer seating methods
    async seatCustomer() {
      if (!this.customerName.trim()) {
        this.showMessage('Please enter a customer name', 'warning', 'mdi-alert');
        return;
      }
      this.actionLoading = true;
      try {
        const seatData = {
          customerName: this.customerName.trim(),
          partySize: parseInt(this.partySize) || 1
        };
        await this.$axios.post(`api/tables/${this.selectedTable.id}/seat-customer`, seatData);
        this.selectedTable.status = 'occupied';
        this.selectedTable.customerName = this.customerName.trim();
        this.selectedTable.timeOccupied = new Date();
        this.showMessage(`${this.customerName} has been seated at Table ${this.selectedTable.number}`, 'success', 'mdi-check-circle');
        this.customerName = '';
        this.partySize = 1;
        this.fetchTables();
      } catch (error) {
        var _error$response;
        console.error('Error seating customer:', error);
        if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400) {
          var _error$response$data;
          const message = ((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Invalid seating request';
          this.showMessage(message, 'error', 'mdi-alert');
        } else {
          this.showMessage('Failed to seat customer. Please try again.', 'error', 'mdi-alert');
        }
      } finally {
        this.actionLoading = false;
      }
    },
    // Table status methods
    async changeTableStatus(status) {
      this.actionLoading = true;
      try {
        const payload = {
          status,
          timeOccupied: status === 'occupied' ? new Date() : null,
          currentOrderId: status === 'occupied' ? this.selectedTable.currentOrderId : null
        };
        await this.$axios.patch(`api/tables/${this.selectedTable.id}/status`, payload);
        if (status === 'available') {
          this.selectedTable.customerName = null;
          this.selectedTable.timeOccupied = null;
          this.selectedTable.order = [];
          this.selectedTable.orderTotal = 0;
          this.selectedTable.currentOrderId = null;
        }
        this.selectedTable.status = status;
        this.showMessage(`Table ${this.selectedTable.number} marked as ${this.getStatusText(status)}`);
        this.fetchTables();
      } catch (error) {
        this.showMessage('Failed to update table status. Please try again.', 'error', 'mdi-alert');
      } finally {
        this.actionLoading = false;
      }
    },
    markTableClean() {
      this.changeTableStatus('available');
    },
    seatReservedCustomer() {
      this.changeTableStatus('occupied');
    },
    cancelReservation() {
      this.changeTableStatus('available');
    },
    // Payment methods
    async loadPaymentMethods() {
      this.paymentLoading = true;
      this.paymentList = [];
      try {
        const response = await this.$axios.get('/api/paymentMethod/find');
        this.paymentList = response.data.filter(payment => payment.isActive);
        console.log('Payment methods loaded:', this.paymentList);
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.showMessage('Failed to load payment methods', 'error', 'mdi-alert');
      } finally {
        this.paymentLoading = false;
      }
    },
    async processPayment() {
      const total = this.selectedTable.currentTotal || this.selectedTable.orderTotal || 0;
      if (total <= 0) {
        this.showMessage('No amount to process', 'warning', 'mdi-alert');
        return;
      }
      this.paymentAmount = total;
      await this.loadPaymentMethods();
      this.showPaymentDialog = true;
    },
    async confirmPayment() {
      if (!this.selectedPaymentMethod) {
        this.showMessage('Please select a payment method', 'warning', 'mdi-alert');
        return;
      }
      this.actionLoading = true;
      try {
        if (this.selectedTable.currentOrderId) {
          await this.$axios.patch(`/api/ticket/${this.selectedTable.currentOrderId}/payment-status`, {
            paymentStatus: 'paid',
            paymentId: this.selectedPaymentMethod.id
          });
        }

        // Close payment dialog first
        this.closePaymentDialog();

        // Show print confirmation dialog
        this.showPrintConfirmDialog = true;

        // Update table status to cleaning
        await this.changeTableStatusSilent('cleaning');
      } catch (error) {
        console.error('Payment processing error:', error);
        this.showMessage('Failed to process payment', 'error', 'mdi-alert');
      } finally {
        this.actionLoading = false;
      }
    },
    closePaymentDialog() {
      this.showPaymentDialog = false;
      this.selectedPaymentMethod = null;
      this.paymentAmount = 0;
    },
    // POS methods
    openPOS() {
      this.showPOSDialog = true;
    },
    closePOS() {
      this.showPOSDialog = false;
    },
    // Utility methods
    showMessage(message, color = 'success', icon = 'mdi-check-circle') {
      this.snackbar = {
        show: true,
        message,
        color,
        icon,
        timeout: 4000
      };
    },
    getTableColor(status) {
      const colors = {
        available: 'success',
        occupied: 'warning',
        cleaning: 'error',
        reserved: 'info'
      };
      return colors[status] || 'grey';
    },
    getStatusText(status) {
      const texts = {
        available: 'Available',
        occupied: 'Occupied',
        cleaning: 'Cleaning',
        reserved: 'Reserved'
      };
      return texts[status] || 'Unknown';
    },
    getPaymentIcon(paymentCode) {
      const icons = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        CREDIT: 'mdi-credit-card-outline',
        DEBIT: 'mdi-credit-card',
        MOBILE: 'mdi-cellphone',
        DIGITAL: 'mdi-wallet',
        BANK: 'mdi-bank',
        CHECK: 'mdi-checkbook'
      };
      return icons[paymentCode] || 'mdi-currency-usd';
    },
    getPaymentColor(paymentCode) {
      const colors = {
        CASH: 'green',
        CARD: 'blue',
        CREDIT: 'purple',
        DEBIT: 'indigo',
        MOBILE: 'orange',
        DIGITAL: 'teal',
        BANK: 'brown',
        CHECK: 'grey'
      };
      return colors[paymentCode] || 'primary';
    },
    formatTime(time) {
      if (!time) return '';
      const diff = Date.now() - time.getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(minutes / 60);
      if (hours > 0) {
        return `${hours}h ${minutes % 60}m`;
      }
      return `${minutes}m`;
    },
    formatDate(dateString) {
      if (!dateString) return '';
      return new Date(dateString).toLocaleDateString();
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    getTotalAmountColor() {
      const total = this.selectedTable.currentTotal || 0;
      if (total === 0) return 'grey--text';
      if (total > 100) return 'success--text';
      return 'primary--text';
    },
    getOrderStatusColor(status) {
      const colors = {
        pending: 'orange',
        preparing: 'blue',
        ready: 'green',
        served: 'purple',
        paid: 'success'
      };
      return colors[status] || 'grey';
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/cafeTable/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_cafeTablevue_type_script_lang_js_ = (cafeTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/cafeTable/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(899)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_cafeTablevue_type_script_lang_js_,
  cafeTablevue_type_template_id_a70deaa8_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "a70deaa8",
  "528f4703"
  
)

/* harmony default export */ var cafeTable = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CafePOSScreen: __webpack_require__(844).default})


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(394);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 394:
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

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(393);
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

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(423);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("1c8f4490", content, true)

/***/ }),

/***/ 423:
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

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(138);
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

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(476);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2f6b6adb", content, true)

/***/ }),

/***/ 476:
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

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(546);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("129a2380", content, true, context)
};

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(548);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0670f0cc", content, true, context)
};

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(550);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3c2be8fc", content, true, context)
};

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(475);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
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

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(493);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-02cb606c]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.print-dialog-content[data-v-02cb606c]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:600px;overflow-y:auto;width:100%}.print-dialog-header[data-v-02cb606c]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:20px 24px}.print-dialog-header h2[data-v-02cb606c]{color:#333;font-size:20px;margin:0}.close-btn[data-v-02cb606c]{align-items:center;background:none;border:none;border-radius:50%;color:#6c757d;cursor:pointer;display:flex;font-size:28px;height:32px;justify-content:center;padding:0;transition:all .2s;width:32px}.close-btn[data-v-02cb606c]:hover{background:#e9ecef;color:#333}.print-preview[data-v-02cb606c]{background:#fff;color:#000;font-family:\"Courier New\",monospace;font-size:13px;line-height:1.4;padding:24px}.print-header[data-v-02cb606c]{margin-bottom:20px;text-align:center}.restaurant-name[data-v-02cb606c]{color:#333;font-size:24px;font-weight:700;margin:0 0 8px}.restaurant-address[data-v-02cb606c]{color:#666;font-size:14px;line-height:1.3;margin:0}.print-ticket-info[data-v-02cb606c]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr;margin-bottom:15px}.detail-row[data-v-02cb606c]{display:flex;font-size:13px;justify-content:space-between;margin-bottom:4px}.detail-label[data-v-02cb606c]{color:#333;font-weight:700}.detail-value[data-v-02cb606c]{color:#000}.print-divider[data-v-02cb606c]{border-top:2px dashed #333;margin:20px 0}.print-items[data-v-02cb606c]{margin-bottom:20px}.section-title[data-v-02cb606c]{color:#333;font-size:16px;font-weight:700;margin:0 0 15px;text-align:center}.print-item[data-v-02cb606c]{border-bottom:1px dotted #ccc;margin-bottom:12px;padding-bottom:8px}.print-item[data-v-02cb606c]:last-child{border-bottom:none}.item-line[data-v-02cb606c]{margin-bottom:4px}.item-main[data-v-02cb606c]{display:flex;font-weight:700;justify-content:space-between;margin-bottom:2px}.item-name[data-v-02cb606c]{color:#333}.item-price[data-v-02cb606c]{color:#000}.item-details[data-v-02cb606c]{color:#666;display:flex;font-size:12px;justify-content:space-between;margin-left:15px}.item-total[data-v-02cb606c]{color:#000;font-weight:700}.item-notes[data-v-02cb606c]{color:#888;font-size:11px;font-style:italic;margin-left:15px;margin-top:4px}.no-items-print[data-v-02cb606c]{color:#666;font-style:italic;padding:20px;text-align:center}.print-summary[data-v-02cb606c]{margin:20px 0}.summary-line[data-v-02cb606c]{display:flex;font-size:14px;justify-content:space-between;margin-bottom:4px}.summary-label[data-v-02cb606c]{color:#333}.summary-value[data-v-02cb606c]{color:#000;font-weight:700}.total-line[data-v-02cb606c]{border-top:2px solid #333;font-size:18px;font-weight:700;margin-top:12px;padding-top:8px}.total-line .summary-label[data-v-02cb606c],.total-line .summary-value[data-v-02cb606c]{color:#000}.print-payment[data-v-02cb606c]{margin:20px 0}.payment-status[data-v-02cb606c]{display:flex;font-size:14px;font-weight:700;justify-content:space-between;margin-bottom:8px}.payment-label[data-v-02cb606c]{color:#333}.payment-value.payment-pending[data-v-02cb606c]{color:#856404}.payment-value.payment-paid[data-v-02cb606c]{color:#155724}.payment-value.payment-refunded[data-v-02cb606c]{color:#721c24}.payment-details[data-v-02cb606c]{color:#666;font-size:12px}.payment-info[data-v-02cb606c]{display:flex;flex-direction:column;gap:4px}.print-notes[data-v-02cb606c]{margin:20px 0}.print-notes h4[data-v-02cb606c]{color:#333;font-size:14px;font-weight:700;margin:0 0 8px}.print-notes p[data-v-02cb606c]{background:#f8f9fa;border-left:4px solid #ffc107;border-radius:4px;color:#000;font-size:13px;margin:0;padding:10px}.print-custom-footer[data-v-02cb606c]{color:#666;font-size:12px;margin:20px 0;text-align:center}.print-footer[data-v-02cb606c]{margin-top:30px;text-align:center}.thank-you[data-v-02cb606c]{color:#333;font-size:16px;font-weight:700;margin:15px 0 10px}.print-time[data-v-02cb606c]{color:#888;font-size:11px;margin:0}.print-dialog-actions[data-v-02cb606c]{background:#f8f9fa;border-radius:0 0 12px 12px;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.print-btn[data-v-02cb606c]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;padding:12px 24px;transition:all .2s}.print-primary[data-v-02cb606c]{background:#007bff;color:#fff}.print-primary[data-v-02cb606c]:disabled{background:#6c757d;cursor:not-allowed}.print-secondary[data-v-02cb606c]{background:#6c757d;color:#fff}.print-btn[data-v-02cb606c]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}@media (max-width:768px){.print-dialog-content[data-v-02cb606c]{margin:10px;max-height:95vh}.print-preview[data-v-02cb606c]{font-size:12px;padding:16px}.print-ticket-info[data-v-02cb606c]{gap:10px;grid-template-columns:1fr}.restaurant-name[data-v-02cb606c]{font-size:20px}.section-title[data-v-02cb606c]{font-size:14px}.total-line[data-v-02cb606c]{font-size:16px}.print-dialog-actions[data-v-02cb606c]{flex-direction:column}.print-btn[data-v-02cb606c]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bb865a2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bb865a2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bb865a2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bb865a2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bb865a2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-3bb865a2]{cursor:pointer}.payment-method-card[data-v-3bb865a2]{border:2px solid transparent;transition:all .3s ease}.payment-method-card[data-v-3bb865a2]:hover{transform:translateY(-2px)}.payment-method-card.elevation-4[data-v-3bb865a2]{border:2px solid hsla(0,0%,100%,.3)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-73f437f1]{cursor:pointer}.customer-card[data-v-73f437f1]{border:2px solid transparent;transition:all .3s ease}.customer-card[data-v-73f437f1]:hover{border-color:rgba(25,118,210,.3);transform:translateY(-1px)}.selected-customer[data-v-73f437f1]{background-color:rgba(25,118,210,.1);border-color:#1976d2!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(634);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ea6b8bd8", content, true, context)
};

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/printdialog/index.vue?vue&type=template&id=02cb606c&scoped=true&
var render = function render() {
  var _vm$ticket$client, _vm$ticket$table, _vm$ticket$table2, _vm$ticket$client2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"print-dialog-content\" data-v-02cb606c><div class=\"print-dialog-header\" data-v-02cb606c><h2 data-v-02cb606c>Print Ticket</h2> <button class=\"close-btn\" data-v-02cb606c>×</button></div> " + (_vm.ticket ? "<div class=\"print-preview\" data-v-02cb606c><div class=\"print-header\" data-v-02cb606c><div class=\"restaurant-info\" data-v-02cb606c><h1 class=\"restaurant-name\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.restaurantInfo.name)) + "</h1> <p class=\"restaurant-address\" data-v-02cb606c>" + _vm._s(_vm.restaurantInfo.address) + "</p></div></div> <div class=\"print-ticket-info\" data-v-02cb606c><div class=\"ticket-details\" data-v-02cb606c><div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Ticket #:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.ticket.id)) + "</span></div> <div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Date:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.formatPrintDate(_vm.ticket.createdAt))) + "</span></div> <div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Time:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.formatPrintTime(_vm.ticket.createdAt))) + "</span></div> <div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Status:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.formatStatus(_vm.ticket.status))) + "</span></div></div> <div class=\"customer-table-info\" data-v-02cb606c><div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Customer:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(((_vm$ticket$client = _vm.ticket.client) === null || _vm$ticket$client === void 0 ? void 0 : _vm$ticket$client.name) || 'Walk-in Customer')) + "</span></div> <div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Table:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(((_vm$ticket$table = _vm.ticket.table) === null || _vm$ticket$table === void 0 ? void 0 : _vm$ticket$table.number) || ((_vm$ticket$table2 = _vm.ticket.table) === null || _vm$ticket$table2 === void 0 ? void 0 : _vm$ticket$table2.name) || 'N/A')) + "</span></div> " + ((_vm$ticket$client2 = _vm.ticket.client) !== null && _vm$ticket$client2 !== void 0 && _vm$ticket$client2.phone ? "<div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Phone:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.ticket.client.phone)) + "</span></div>" : "<!---->") + "</div></div> <div class=\"print-divider\" data-v-02cb606c></div> <div class=\"print-items\" data-v-02cb606c><h3 class=\"section-title\" data-v-02cb606c>ORDER ITEMS</h3> " + (_vm.ticket.ticketLines && _vm.ticket.ticketLines.length > 0 ? "<div data-v-02cb606c>" + _vm._ssrList(_vm.ticket.ticketLines, function (line) {
    return "<div class=\"print-item\" data-v-02cb606c><div class=\"item-line\" data-v-02cb606c><div class=\"item-main\" data-v-02cb606c><span class=\"item-name\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.getItemName(line))) + "</span> <span class=\"item-price\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(line.originalTicketLinePrice))) + "</span></div> <div class=\"item-details\" data-v-02cb606c><span class=\"item-qty\" data-v-02cb606c>" + _vm._ssrEscape("Qty: " + _vm._s(line.quantity)) + "</span> <span class=\"item-total\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.getItemTotal(line)))) + "</span></div></div> " + (line.notes ? "<div class=\"item-notes\" data-v-02cb606c>" + _vm._ssrEscape("\n              Note: " + _vm._s(line.notes) + "\n            ") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"no-items-print\" data-v-02cb606c><p data-v-02cb606c>No items in this order</p></div>") + "</div> <div class=\"print-divider\" data-v-02cb606c></div> <div class=\"print-summary\" data-v-02cb606c><div class=\"summary-line\" data-v-02cb606c><span class=\"summary-label\" data-v-02cb606c>Subtotal:</span> <span class=\"summary-value\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.ticket.subtotal))) + "</span></div> <div class=\"summary-line\" data-v-02cb606c><span class=\"summary-label\" data-v-02cb606c>Tax:</span> <span class=\"summary-value\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.ticket.tax))) + "</span></div> <div class=\"summary-line total-line\" data-v-02cb606c><span class=\"summary-label\" data-v-02cb606c>TOTAL:</span> <span class=\"summary-value\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.ticket.total))) + "</span></div></div> <div class=\"print-payment\" data-v-02cb606c><div class=\"payment-status\" data-v-02cb606c><span class=\"payment-label\" data-v-02cb606c>Payment Status:</span> <span" + _vm._ssrClass("payment-value", `payment-${_vm.ticket.paymentStatus}`) + " data-v-02cb606c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.formatPaymentStatus(_vm.ticket.paymentStatus)) + "\n          ") + "</span></div> " + (_vm.ticket.payment && _vm.ticket.paymentStatus === 'paid' ? "<div class=\"payment-details\" data-v-02cb606c><div class=\"payment-info\" data-v-02cb606c><span data-v-02cb606c>" + _vm._ssrEscape("Method: " + _vm._s(_vm.ticket.payment.payment_code || 'N/A')) + "</span> " + (_vm.ticket.payment.id ? "<span data-v-02cb606c>" + _vm._ssrEscape("\n              Transaction: " + _vm._s(_vm.ticket.payment.payment_code) + "\n            ") + "</span>" : "<!---->") + "</div></div>" : "<!---->") + "</div> " + (_vm.ticket.notes ? "<div class=\"print-notes\" data-v-02cb606c><div class=\"print-divider\" data-v-02cb606c></div> <h4 data-v-02cb606c>NOTES:</h4> <p data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.ticket.notes)) + "</p></div>" : "<!---->") + " " + (_vm.customFooter ? "<div class=\"print-custom-footer\" data-v-02cb606c><div class=\"print-divider\" data-v-02cb606c></div> <div data-v-02cb606c>" + _vm._s(_vm.customFooter) + "</div></div>" : "<!---->") + " <div class=\"print-footer\" data-v-02cb606c><div class=\"print-divider\" data-v-02cb606c></div> <p class=\"thank-you\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.footerMessage)) + "</p> <p class=\"print-time\" data-v-02cb606c>" + _vm._ssrEscape("\n          Printed: " + _vm._s(_vm.formatPrintDateTime(new Date())) + "\n        ") + "</p></div></div>" : "<!---->") + " <div class=\"print-dialog-actions\" data-v-02cb606c><button" + _vm._ssrAttr("disabled", _vm.printing) + " class=\"print-btn print-primary\" data-v-02cb606c>" + (_vm.printing ? "<span data-v-02cb606c>Printing...</span>" : "<span data-v-02cb606c>🖨️ Print</span>") + "</button> <button class=\"print-btn print-secondary\" data-v-02cb606c>\n        Cancel\n      </button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue?vue&type=template&id=02cb606c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/printdialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var printdialogvue_type_script_lang_js_ = ({
  name: 'PrintTicketDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ticket: {
      type: Object,
      default: null
    },
    restaurantInfo: {
      type: Object,
      default: () => ({
        name: 'Restaurant Name',
        address: '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567'
      })
    },
    footerMessage: {
      type: String,
      default: 'Thank you for your visit!'
    },
    customFooter: {
      type: String,
      default: null
    },
    printTitle: {
      type: String,
      default: 'Print Ticket'
    }
  },
  data() {
    return {
      printing: false
    };
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    async printNow() {
      if (!this.ticket) return;
      this.printing = true;
      try {
        const printContent = document.querySelector('.print-preview').innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Ticket #${this.ticket.id}</title>
            <style>
              ${this.getPrintStyles()}
            </style>
          </head>
          <body>
            ${printContent}
          </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();

        // Wait a moment for content to load, then print
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
          this.printing = false;
          this.$emit('printed', this.ticket);
          this.closeDialog();
        }, 250);
      } catch (error) {
        console.error('Print error:', error);
        this.printing = false;
        this.$emit('print-error', error);
      }
    },
    getPrintStyles() {
      return `
        body {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.4;
          margin: 0;
          padding: 20px;
          color: #000;
        }
        .print-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .restaurant-name {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 8px 0;
        }
        .restaurant-address {
          font-size: 11px;
          margin: 0;
          line-height: 1.3;
        }
        .print-ticket-info {
          margin-bottom: 15px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .detail-label {
          font-weight: bold;
        }
        .print-divider {
          border-top: 1px dashed #000;
          margin: 15px 0;
        }
        .section-title {
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 10px 0;
          text-align: center;
        }
        .print-item {
          margin-bottom: 8px;
        }
        .item-line {
          margin-bottom: 2px;
        }
        .item-main {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .item-details {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          margin-left: 10px;
        }
        .item-notes {
          font-size: 10px;
          font-style: italic;
          margin-left: 10px;
          color: #666;
        }
        .print-summary {
          margin: 15px 0;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .total-line {
          font-weight: bold;
          font-size: 14px;
          border-top: 1px solid #000;
          padding-top: 5px;
          margin-top: 8px;
        }
        .print-payment {
          margin: 15px 0;
        }
        .payment-status {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .payment-details {
          font-size: 11px;
          margin-top: 5px;
        }
        .payment-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .print-notes {
          margin: 15px 0;
        }
        .print-notes h4 {
          font-size: 12px;
          margin: 0 0 5px 0;
        }
        .print-notes p {
          margin: 0;
          font-size: 11px;
        }
        .print-custom-footer {
          margin: 15px 0;
          text-align: center;
        }
        .print-footer {
          text-align: center;
          margin-top: 20px;
        }
        .thank-you {
          font-weight: bold;
          margin: 10px 0 5px 0;
        }
        .print-time {
          font-size: 10px;
          margin: 0;
          color: #666;
        }
        .payment-pending { color: #856404; }
        .payment-paid { color: #155724; }
        .payment-refunded { color: #721c24; }
        .no-items-print {
          text-align: center;
          padding: 20px;
          color: #666;
          font-style: italic;
        }
        @media print {
          body { margin: 0; padding: 10px; }
        }
      `;
    },
    formatPrintDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString();
    },
    formatPrintTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatPrintDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    formatStatus(status) {
      const statusMap = {
        pending: 'Pending',
        preparing: 'Preparing',
        ready: 'Ready',
        served: 'Served',
        paid: 'Paid'
      };
      return statusMap[status] || status;
    },
    formatPaymentStatus(status) {
      const statusMap = {
        pending: 'Unpaid',
        paid: 'Paid',
        refunded: 'Refunded'
      };
      return statusMap[status] || status;
    },
    getItemName(line) {
      console.info(`Line detail ${JSON.stringify(line)}`);
      // Handle different possible structures
      return line.pro_name || line.pro_desc || 'Unknown Item';
    },
    getItemTotal(line) {
      // Handle different possible structures
      return line.total || line.totalPrice || line.subtotal || line.quantity * line.originalTicketLinePrice || 0;
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var CAFE_printdialogvue_type_script_lang_js_ = (printdialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(545)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_printdialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "02cb606c",
  "02b6a379"
  
)

/* harmony default export */ var printdialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(447);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js
var VSubheader = __webpack_require__(127);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/paymentDialog/index.vue?vue&type=template&id=3bb865a2&scoped=true&














var paymentDialogvue_type_template_id_3bb865a2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600",
      "persistent": ""
    },
    model: {
      value: _vm.dialogVisible,
      callback: function ($$v) {
        _vm.dialogVisible = $$v;
      },
      expression: "dialogVisible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-credit-card")]), _vm._v("\n      Process Payment - Table " + _vm._s(_vm.tableId || '') + "\n      "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-6"
  }, [_c(VCard["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center pa-4"
  }, [_c('div', {
    staticClass: "text-h4 font-weight-bold primary--text"
  }, [_vm._v("\n            " + _vm._s(_vm.formatPrice(_vm.paymentAmount)) + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1 grey--text"
  }, [_vm._v("Total Amount to Pay")])])], 1), _vm._v(" "), _vm.paymentLoading ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("Loading payment methods...")])], 1) : _c('div', [_c(VSubheader["a" /* default */], {
    staticClass: "px-0"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-wallet")]), _vm._v("\n          Select Payment Method\n        ")], 1), _vm._v(" "), _vm.paymentList.length > 0 ? _c(VRow["a" /* default */], _vm._l(_vm.paymentList, function (payment) {
    var _vm$selectedPaymentMe, _vm$selectedPaymentMe2, _vm$selectedPaymentMe3;
    return _c(VCol["a" /* default */], {
      key: payment.id,
      staticClass: "pa-1",
      attrs: {
        "cols": "6"
      }
    }, [_c(VCard["a" /* default */], {
      class: ['payment-method-card cursor-pointer text-center pa-3', ((_vm$selectedPaymentMe = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe === void 0 ? void 0 : _vm$selectedPaymentMe.id) === payment.id ? 'white--text elevation-4' : 'elevation-1'],
      attrs: {
        "color": ((_vm$selectedPaymentMe2 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe2 === void 0 ? void 0 : _vm$selectedPaymentMe2.id) === payment.id ? _vm.getPaymentColor(payment.payment_code) : '',
        "hover": "",
        "height": "100"
      },
      on: {
        "click": function ($event) {
          _vm.selectedPaymentMethod = payment;
        }
      }
    }, [_c(VIcon["a" /* default */], {
      staticClass: "mb-2",
      attrs: {
        "color": ((_vm$selectedPaymentMe3 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe3 === void 0 ? void 0 : _vm$selectedPaymentMe3.id) === payment.id ? 'white' : _vm.getPaymentColor(payment.payment_code),
        "size": "32"
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getPaymentIcon(payment.payment_code)) + "\n              ")]), _vm._v(" "), _c('div', {
      staticClass: "font-weight-medium"
    }, [_vm._v("\n                " + _vm._s(payment.payment_name) + "\n              ")]), _vm._v(" "), _c('div', {
      staticClass: "caption"
    }, [_vm._v("\n                " + _vm._s(payment.payment_code) + "\n              ")])], 1)], 1);
  }), 1) : _c(VAlert["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "type": "warning",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-alert")]), _vm._v("\n            No active payment methods available\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "small": "",
      "color": "warning"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('retry-payment-methods');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n            Retry\n          ")], 1)], 1), _vm._v(" "), _vm.selectedPaymentMethod ? _c(VCard["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "outlined": "",
      "color": "grey lighten-5"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-3",
    attrs: {
      "color": _vm.getPaymentColor(_vm.selectedPaymentMethod.payment_code)
    }
  }, [_vm._v("\n                " + _vm._s(_vm.getPaymentIcon(_vm.selectedPaymentMethod.payment_code)) + "\n              ")]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                  " + _vm._s(_vm.selectedPaymentMethod.payment_name) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "caption grey--text"
  }, [_vm._v("\n                  " + _vm._s(_vm.selectedPaymentMethod.payment_desc || 'No description') + "\n                ")])])], 1)])], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": "",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "large": "",
      "disabled": !_vm.selectedPaymentMethod || _vm.actionLoading,
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.confirmPayment
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n        Process Payment\n      ")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/paymentDialog/index.vue?vue&type=template&id=3bb865a2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/paymentDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentDialogvue_type_script_lang_js_ = ({
  name: 'PaymentDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    tableId: {
      type: [String, Number],
      required: true
    },
    paymentAmount: {
      type: Number,
      default: 0
    },
    paymentList: {
      type: Array,
      default: () => []
    },
    paymentLoading: {
      type: Boolean,
      default: false
    },
    actionLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedPaymentMethod: null
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.closeDialog();
        }
      }
    }
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.selectedPaymentMethod = null;
      }
    }
  },
  methods: {
    closeDialog() {
      this.selectedPaymentMethod = null;
      this.$emit('close');
    },
    confirmPayment() {
      if (!this.selectedPaymentMethod) {
        this.$emit('show-message', 'Please select a payment method', 'warning', 'mdi-alert');
        return;
      }
      this.$emit('confirm-payment', this.selectedPaymentMethod);
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    getPaymentIcon(paymentCode) {
      const icons = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        CREDIT: 'mdi-credit-card-outline',
        DEBIT: 'mdi-credit-card',
        MOBILE: 'mdi-cellphone',
        DIGITAL: 'mdi-wallet',
        BANK: 'mdi-bank',
        CHECK: 'mdi-checkbook'
      };
      return icons[paymentCode] || 'mdi-currency-usd';
    },
    getPaymentColor(paymentCode) {
      const colors = {
        CASH: 'green',
        CARD: 'blue',
        CREDIT: 'purple',
        DEBIT: 'indigo',
        MOBILE: 'orange',
        DIGITAL: 'teal',
        BANK: 'brown',
        CHECK: 'grey'
      };
      return colors[paymentCode] || 'primary';
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/paymentDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var CAFE_paymentDialogvue_type_script_lang_js_ = (paymentDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/paymentDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(547)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_paymentDialogvue_type_script_lang_js_,
  paymentDialogvue_type_template_id_3bb865a2_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "3bb865a2",
  "5aa91eb2"
  
)

/* harmony default export */ var paymentDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 599:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(416);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/customerDialog/index.vue?vue&type=template&id=73f437f1&scoped=true&

















var customerDialogvue_type_template_id_73f437f1_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800",
      "persistent": ""
    },
    model: {
      value: _vm.dialogVisible,
      callback: function ($$v) {
        _vm.dialogVisible = $$v;
      },
      expression: "dialogVisible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-account-search")]), _vm._v("\n        Select Customer\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VTextField["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "prepend-inner-icon": "mdi-magnify",
      "label": "Search customers by name, company, phone...",
      "variant": "outlined",
      "density": "compact",
      "clearable": ""
    },
    model: {
      value: _vm.customerSearchQuery,
      callback: function ($$v) {
        _vm.customerSearchQuery = $$v;
      },
      expression: "customerSearchQuery"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    },
    on: {
      "click": function ($event) {
        _vm.showAddCustomerForm = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-account-plus")]), _vm._v("\n            Add New Customer\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "info",
      "outlined": ""
    },
    on: {
      "click": _vm.selectWalkInCustomer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-walk")]), _vm._v("\n            Walk-in Customer\n          ")], 1)], 1), _vm._v(" "), _vm.loadingCustomers ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("Loading customers...")])], 1) : _c('div', {
    staticStyle: {
      "max-height": "400px",
      "overflow-y": "auto"
    }
  }, [_vm._l(_vm.filteredCustomers, function (customer) {
    var _vm$tempSelectedCusto;
    return _c(VCard["a" /* default */], {
      key: customer.id,
      staticClass: "mb-2 cursor-pointer customer-card",
      class: {
        'selected-customer': ((_vm$tempSelectedCusto = _vm.tempSelectedCustomer) === null || _vm$tempSelectedCusto === void 0 ? void 0 : _vm$tempSelectedCusto.id) === customer.id
      },
      attrs: {
        "outlined": "",
        "hover": ""
      },
      on: {
        "click": function ($event) {
          return _vm.selectCustomer(customer);
        }
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-3"
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', [_c('div', {
      staticClass: "font-weight-bold text-subtitle-1"
    }, [_vm._v("\n                    " + _vm._s(customer.name) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "text-body-2 grey--text"
    }, [_vm._v("\n                    " + _vm._s(customer.company || 'No company') + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "caption mt-1"
    }, [customer.email ? _c('span', [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-email")]), _vm._v("\n                      " + _vm._s(customer.email) + "\n                    ")], 1) : _vm._e(), _vm._v(" "), customer.telephone ? _c('span', {
      staticClass: "ml-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-phone")]), _vm._v("\n                      " + _vm._s(customer.telephone) + "\n                    ")], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "text-right"
    }, [_c(VChip["a" /* default */], {
      staticClass: "mb-1",
      attrs: {
        "color": _vm.getGradeColor(customer.grade),
        "text-color": "white",
        "small": ""
      }
    }, [_vm._v("\n                    Grade " + _vm._s(customer.grade) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "caption"
    }, [_vm._v("\n                    Credit: " + _vm._s(customer.credit) + " days\n                  ")]), _vm._v(" "), !customer.isActive ? _c(VChip["a" /* default */], {
      attrs: {
        "color": "error",
        "text-color": "white",
        "x-small": ""
      }
    }, [_vm._v("\n                    Inactive\n                  ")]) : _vm._e()], 1)])])], 1);
  }), _vm._v(" "), _vm.filteredCustomers.length === 0 ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey"
    }
  }, [_vm._v("mdi-account-search")]), _vm._v(" "), _c('p', {
    staticClass: "mt-2 grey--text"
  }, [_vm._v("No customers found")])], 1) : _vm._e()], 2)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.tempSelectedCustomer
    },
    on: {
      "click": _vm.confirmCustomerSelection
    }
  }, [_vm._v("\n          Select Customer\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600",
      "persistent": ""
    },
    model: {
      value: _vm.showAddCustomerForm,
      callback: function ($$v) {
        _vm.showAddCustomerForm = $$v;
      },
      expression: "showAddCustomerForm"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "success white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-account-plus")]), _vm._v("\n        Add New Customer\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": _vm.closeAddCustomerForm
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VForm["a" /* default */], {
    ref: "customerForm",
    model: {
      value: _vm.customerFormValid,
      callback: function ($$v) {
        _vm.customerFormValid = $$v;
      },
      expression: "customerFormValid"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Customer Name *",
      "variant": "outlined",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.newCustomer.name,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "name", $$v);
      },
      expression: "newCustomer.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Company",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.company,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "company", $$v);
      },
      expression: "newCustomer.company"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Email",
      "variant": "outlined",
      "rules": [_vm.rules.email]
    },
    model: {
      value: _vm.newCustomer.email,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "email", $$v);
      },
      expression: "newCustomer.email"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Phone",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.telephone,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "telephone", $$v);
      },
      expression: "newCustomer.telephone"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Address",
      "variant": "outlined",
      "rows": "2"
    },
    model: {
      value: _vm.newCustomer.address,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "address", $$v);
      },
      expression: "newCustomer.address"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.gradeOptions,
      "label": "Grade",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.grade,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "grade", $$v);
      },
      expression: "newCustomer.grade"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Credit Days",
      "type": "number",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.credit,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "credit", $$v);
      },
      expression: "newCustomer.credit"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Late Charge %",
      "type": "number",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.lateChargePercent,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "lateChargePercent", $$v);
      },
      expression: "newCustomer.lateChargePercent"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.closeAddCustomerForm
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "disabled": !_vm.customerFormValid,
      "loading": _vm.savingCustomer
    },
    on: {
      "click": _vm.saveNewCustomer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n          Save Customer\n        ")], 1)], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue?vue&type=template&id=73f437f1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/customerDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var customerDialogvue_type_script_lang_js_ = ({
  name: 'CustomerDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    customers: {
      type: Array,
      default: () => []
    },
    selectedCustomer: {
      type: Object,
      default: null
    },
    loadingCustomers: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tempSelectedCustomer: null,
      customerSearchQuery: '',
      showAddCustomerForm: false,
      savingCustomer: false,
      customerFormValid: false,
      newCustomer: {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: 'A',
        isActive: true
      },
      rules: {
        required: value => !!value || 'This field is required',
        email: value => {
          if (!value) return true;
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value) || 'Invalid email format';
        }
      },
      gradeOptions: ['A', 'B', 'C', 'D', 'E', 'F']
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.closeDialog();
        }
      }
    },
    filteredCustomers() {
      if (!this.customerSearchQuery) {
        return this.customers.filter(customer => customer.isActive);
      }
      const searchTerm = this.customerSearchQuery.toLowerCase();
      return this.customers.filter(customer => {
        var _customer$company, _customer$email, _customer$telephone;
        return customer.isActive && (customer.name.toLowerCase().includes(searchTerm) || ((_customer$company = customer.company) === null || _customer$company === void 0 ? void 0 : _customer$company.toLowerCase().includes(searchTerm)) || ((_customer$email = customer.email) === null || _customer$email === void 0 ? void 0 : _customer$email.toLowerCase().includes(searchTerm)) || ((_customer$telephone = customer.telephone) === null || _customer$telephone === void 0 ? void 0 : _customer$telephone.includes(searchTerm)));
      });
    }
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.tempSelectedCustomer = null;
        this.customerSearchQuery = '';
      }
    }
  },
  methods: {
    selectCustomer(customer) {
      this.tempSelectedCustomer = customer;
    },
    confirmCustomerSelection() {
      this.$emit('customer-selected', this.tempSelectedCustomer);
      this.closeDialog();
    },
    selectWalkInCustomer() {
      this.$emit('walk-in-selected');
      this.closeDialog();
    },
    closeDialog() {
      this.tempSelectedCustomer = null;
      this.customerSearchQuery = '';
      this.$emit('close');
    },
    closeAddCustomerForm() {
      this.showAddCustomerForm = false;
      this.resetNewCustomerForm();
    },
    resetNewCustomerForm() {
      this.newCustomer = {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: 'A',
        isActive: true
      };
      this.customerFormValid = false;
      if (this.$refs.customerForm) {
        this.$refs.customerForm.resetValidation();
      }
    },
    async saveNewCustomer() {
      var _this$newCustomer$com, _this$newCustomer$ema, _this$newCustomer$add, _this$newCustomer$tel;
      if (!this.customerFormValid) {
        this.$emit('show-message', 'Please fill in all required fields', 'warning', 'mdi-alert');
        return;
      }
      this.savingCustomer = true;
      const customerData = {
        name: this.newCustomer.name.trim(),
        company: ((_this$newCustomer$com = this.newCustomer.company) === null || _this$newCustomer$com === void 0 ? void 0 : _this$newCustomer$com.trim()) || null,
        email: ((_this$newCustomer$ema = this.newCustomer.email) === null || _this$newCustomer$ema === void 0 ? void 0 : _this$newCustomer$ema.trim()) || null,
        address: ((_this$newCustomer$add = this.newCustomer.address) === null || _this$newCustomer$add === void 0 ? void 0 : _this$newCustomer$add.trim()) || null,
        telephone: ((_this$newCustomer$tel = this.newCustomer.telephone) === null || _this$newCustomer$tel === void 0 ? void 0 : _this$newCustomer$tel.trim()) || null,
        credit: parseInt(this.newCustomer.credit) || 30,
        lateChargePercent: parseFloat(this.newCustomer.lateChargePercent) || 0,
        grade: this.newCustomer.grade,
        isActive: true
      };
      try {
        this.$emit('save-customer', customerData);
      } finally {
        this.savingCustomer = false;
      }
    },
    onCustomerSaved() {
      this.closeAddCustomerForm();
      this.closeDialog();
    },
    getGradeColor(grade) {
      const colors = {
        A: 'success',
        B: 'info',
        C: 'warning',
        D: 'orange',
        E: 'deep-orange',
        F: 'error'
      };
      return colors[grade] || 'grey';
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var CAFE_customerDialogvue_type_script_lang_js_ = (customerDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(549)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_customerDialogvue_type_script_lang_js_,
  customerDialogvue_type_template_id_73f437f1_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "73f437f1",
  "67afed58"
  
)

/* harmony default export */ var customerDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3109b930_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(551);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3109b930_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3109b930_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3109b930_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3109b930_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-3109b930]{cursor:pointer}.w-100[data-v-3109b930]{width:100%}.product-card[data-v-3109b930]:hover:not(.product-disabled){transform:translateY(-2px);transition:transform .2s ease}.product-disabled[data-v-3109b930]{cursor:not-allowed!important;opacity:.6}.product-disabled[data-v-3109b930]:hover{transform:none!important}.ticket-line-item[data-v-3109b930]{background-color:rgba(33,150,243,.05);border-left:3px solid #2196f3}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(900);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("cb671396", content, true, context)
};

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(447);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(387);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(544);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CafePOSScreen/index.vue?vue&type=template&id=3109b930&scoped=true&



















var CafePOSScreenvue_type_template_id_3109b930_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "pa-0 fill-height",
    attrs: {
      "fluid": ""
    }
  }, [_c('PrintTicketDialog', {
    attrs: {
      "show": _vm.showCustomerPrint,
      "ticket": _vm.selectedTicket,
      "restaurant-info": _vm.restaurantConfig
    },
    on: {
      "close": _vm.closePrintDialog,
      "printed": _vm.onPrintSuccess
    }
  }), _vm._v(" "), _c('PaymentDialog', {
    attrs: {
      "show": _vm.showPaymentDialog,
      "table-id": _vm.tableId,
      "payment-amount": _vm.paymentAmount,
      "payment-list": _vm.paymentList,
      "payment-loading": _vm.paymentLoading,
      "action-loading": _vm.actionLoading
    },
    on: {
      "close": _vm.closePaymentDialog,
      "confirm-payment": _vm.handlePaymentConfirm,
      "retry-payment-methods": _vm.loadPaymentMethods,
      "show-message": _vm.showMessage
    }
  }), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400",
      "persistent": ""
    },
    model: {
      value: _vm.showPrintConfirmDialog,
      callback: function ($$v) {
        _vm.showPrintConfirmDialog = $$v;
      },
      expression: "showPrintConfirmDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "headline d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-check-circle")]), _vm._v("\n        Payment Successful!\n      ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center py-4"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "size": "64",
      "color": "success"
    }
  }, [_vm._v("mdi-credit-card-check")]), _vm._v(" "), _c('div', {
    staticClass: "text-h6 mb-2"
  }, [_vm._v("\n          Payment has been processed successfully\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1 mb-4"
  }, [_vm._v("\n          Amount: "), _c('strong', [_vm._v(_vm._s(_vm.formatPrice(_vm.paymentAmount)))])]), _vm._v(" "), _c('div', {
    staticClass: "text-body-1"
  }, [_vm._v("\n          Would you like to print the receipt now?\n        ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "justify-center pb-4"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.handlePrintConfirmation(false);
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n          No, Skip\n        ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "color": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.handlePrintConfirmation(true);
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n          Yes, Print Receipt\n        ")], 1)], 1)], 1)], 1), _vm._v(" "), _c('CustomerDialog', {
    attrs: {
      "show": _vm.showCustomerDialog,
      "customers": _vm.customers,
      "selected-customer": _vm.selectedCustomer,
      "loading-customers": _vm.loadingCustomers
    },
    on: {
      "close": _vm.closeCustomerDialog,
      "customer-selected": _vm.handleCustomerSelected,
      "walk-in-selected": _vm.handleWalkInSelected,
      "save-customer": _vm.handleSaveCustomer,
      "show-message": _vm.showMessage
    }
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    staticStyle: {
      "height": "100vh"
    },
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column",
    staticStyle: {
      "overflow": "hidden"
    },
    attrs: {
      "cols": "8"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "ma-0 rounded-0"
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-storefront")]), _vm._v("\n          Product Menu\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _vm.tableId ? _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "accent",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-table-furniture")]), _vm._v("\n            Table " + _vm._s(_vm.tableId) + "\n          ")], 1) : _vm._e(), _vm._v(" "), _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white",
      "text-color": "primary"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-package-variant")]), _vm._v("\n            " + _vm._s(_vm.filteredProducts.length) + " items\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "white",
      "text": "",
      "loading": _vm.loading
    },
    on: {
      "click": _vm.fetchProducts
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n            Refresh\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "prepend-inner-icon": "mdi-magnify",
      "label": "Search products...",
      "variant": "outlined",
      "density": "compact",
      "clearable": "",
      "hide-details": ""
    },
    model: {
      value: _vm.searchQuery,
      callback: function ($$v) {
        _vm.searchQuery = $$v;
      },
      expression: "searchQuery"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.categoryOptions,
      "item-text": "title",
      "item-value": "value",
      "label": "Filter by Category",
      "variant": "outlined",
      "density": "compact",
      "clearable": "",
      "hide-details": ""
    },
    model: {
      value: _vm.categoryFilter,
      callback: function ($$v) {
        _vm.categoryFilter = $$v;
      },
      expression: "categoryFilter"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _vm.loading ? _c(VCard["a" /* default */], {
    staticClass: "flex-grow-1 ma-0 rounded-0 d-flex align-center justify-center"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-4 text-h6"
  }, [_vm._v("Loading products...")])], 1)]) : _c(VCard["a" /* default */], {
    staticClass: "flex-grow-1 ma-0 rounded-0",
    staticStyle: {
      "overflow-y": "auto"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_vm.filteredProducts.length > 0 ? _c(VRow["a" /* default */], _vm._l(_vm.filteredProducts, function (product) {
    return _c(VCol["a" /* default */], {
      key: product.id,
      staticClass: "pa-2",
      attrs: {
        "cols": "4"
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "text-center pa-4 cursor-pointer product-card",
      class: {
        'product-disabled': !product.isActive || product.stock_count <= 0
      },
      attrs: {
        "elevation": "2",
        "hover": "",
        "height": "160",
        "disabled": !product.isActive || product.stock_count <= 0
      },
      on: {
        "click": function ($event) {
          return _vm.addToCart(product);
        }
      }
    }, [_c(components_VCard["d" /* VCardTitle */], {
      staticClass: "justify-center text-subtitle-1 pa-1",
      staticStyle: {
        "line-height": "1.2"
      }
    }, [_vm._v("\n                  " + _vm._s(product.pro_name) + "\n                ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-2"
    }, [_c('div', {
      staticClass: "text-h5 primary--text font-weight-bold mb-2"
    }, [_vm._v("\n                    " + _vm._s(_vm.formatPrice(product.pro_price)) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c(VChip["a" /* default */], {
      attrs: {
        "color": _vm.getCategoryColor(product.categ_name),
        "text-color": "white",
        "x-small": ""
      }
    }, [_vm._v("\n                      " + _vm._s(product.categ_name) + "\n                    ")]), _vm._v(" "), _c(VChip["a" /* default */], {
      attrs: {
        "color": _vm.getStockColor(product.stock_count),
        "text-color": "white",
        "x-small": ""
      }
    }, [_vm._v("\n                      " + _vm._s(product.stock_count) + " left\n                    ")])], 1), _vm._v(" "), product.pro_desc ? _c('div', {
      staticClass: "caption mt-2 grey--text",
      staticStyle: {
        "height": "32px",
        "overflow": "hidden"
      }
    }, [_vm._v("\n                    " + _vm._s(product.pro_desc) + "\n                  ")]) : _vm._e(), _vm._v(" "), !product.isActive ? _c('div', {
      staticClass: "caption mt-1 error--text font-weight-bold"
    }, [_vm._v("\n                    INACTIVE\n                  ")]) : _vm._e()])], 1)], 1);
  }), 1) : _c('div', {
    staticClass: "text-center pa-8"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey"
    }
  }, [_vm._v("mdi-package-variant-closed")]), _vm._v(" "), _c('p', {
    staticClass: "text-h6 mt-4 grey--text"
  }, [_vm._v("No products found")]), _vm._v(" "), _c('p', {
    staticClass: "grey--text"
  }, [_vm._v("Try adjusting your search or filters")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.fetchProducts
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n              Refresh Products\n            ")], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column",
    staticStyle: {
      "max-height": "100vh",
      "overflow": "hidden"
    },
    attrs: {
      "cols": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "flex-grow-1 ma-0 rounded-0 d-flex flex-column",
    staticStyle: {
      "overflow": "hidden"
    },
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
  }, [_vm._v("mdi-shopping")]), _vm._v("\n          Current Order\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "white",
      "text-color": "secondary",
      "small": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.getTotalItems()) + " items\n          ")]), _vm._v(" "), _vm.currentTicket ? _c(VChip["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "color": _vm.getTicketStatusColor(_vm.currentTicket.status),
      "text-color": "white",
      "small": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.currentTicket.status.toUpperCase()) + "\n          ")]) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3 bg-grey-lighten-5"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center mb-2"
  }, [_c('div', {
    staticClass: "text-subtitle-2 font-weight-bold"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-account")]), _vm._v("\n              Customer Information\n            ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "small": "",
      "outlined": ""
    },
    on: {
      "click": function ($event) {
        _vm.showCustomerDialog = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v(_vm._s(_vm.selectedCustomer ? 'mdi-account-edit' : 'mdi-account-plus'))]), _vm._v("\n              " + _vm._s(_vm.selectedCustomer ? 'Change' : 'Select') + "\n            ")], 1)], 1), _vm._v(" "), _vm.selectedCustomer ? _c(VCard["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center"
  }, [_c('div', [_c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                  " + _vm._s(_vm.selectedCustomer.name) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "caption grey--text"
  }, [_vm._v("\n                  " + _vm._s(_vm.selectedCustomer.company || 'No company') + "\n                ")]), _vm._v(" "), _vm.selectedCustomer.telephone ? _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-phone")]), _vm._v("\n                  " + _vm._s(_vm.selectedCustomer.telephone) + "\n                ")], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.getGradeColor(_vm.selectedCustomer.grade),
      "text-color": "white",
      "x-small": ""
    }
  }, [_vm._v("\n                  Grade " + _vm._s(_vm.selectedCustomer.grade) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "caption mt-1"
  }, [_vm._v("\n                  Credit: " + _vm._s(_vm.selectedCustomer.credit) + " days\n                ")])], 1)])]) : _c(VAlert["a" /* default */], {
    attrs: {
      "type": "info",
      "dense": "",
      "outlined": ""
    }
  }, [_vm._v("\n            No customer selected - Walk-in customer\n          ")])], 1), _vm._v(" "), _vm.currentTicket ? _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-2 bg-grey-lighten-4"
  }, [_c('div', {
    staticClass: "caption"
  }, [_c('strong', [_vm._v("Ticket #" + _vm._s(_vm.currentTicket.id))]), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.formatDateTime(_vm.currentTicket.createdAt)))])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex-grow-1",
    staticStyle: {
      "overflow-y": "auto",
      "padding": "16px"
    }
  }, [_vm.cart.length === 0 ? _c('div', {
    staticClass: "text-center mt-8"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "size": "64",
      "color": "grey lighten-2"
    }
  }, [_vm._v("\n              mdi-shopping-outline\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "grey--text"
  }, [_vm._v("No items in cart")]), _vm._v(" "), _c('p', {
    staticClass: "grey--text caption"
  }, [_vm._v("Add items from the menu")])], 1) : _c('div', _vm._l(_vm.cart, function (item) {
    return _c(VCard["a" /* default */], {
      key: item.id,
      staticClass: "mb-2 pa-2",
      class: {
        'ticket-line-item': item.isFromTicketLine
      },
      attrs: {
        "outlined": ""
      }
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center mb-2"
    }, [_c('div', [_c('div', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(item.pro_name))]), _vm._v(" "), _c('div', {
      staticClass: "caption grey--text"
    }, [_vm._v("\n                    ID: " + _vm._s(item.pro_id) + " | " + _vm._s(item.categ_name) + "\n                  ")]), _vm._v(" "), item.isFromTicketLine ? _c('div', {
      staticClass: "caption info--text"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "color": "info"
      }
    }, [_vm._v("mdi-history")]), _vm._v("\n                    Saved item (" + _vm._s(_vm.formatPrice(item.pro_price)) + " each)\n                  ")], 1) : _vm._e(), _vm._v(" "), item.isFromTicketLine && _vm.getCurrentProductPrice(item.pro_id) !== item.pro_price ? _c('div', {
      staticClass: "caption warning--text"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "color": "warning"
      }
    }, [_vm._v("mdi-alert")]), _vm._v("\n                    Current price:\n                    " + _vm._s(_vm.formatPrice(_vm.getCurrentProductPrice(item.pro_id))) + "\n                  ")], 1) : _vm._e()]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.removeFromCart(item.id);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', {
      staticClass: "d-flex align-center"
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "grey"
      },
      on: {
        "click": function ($event) {
          return _vm.updateQuantity(item.id, -1);
        }
      }
    }, [_c(VIcon["a" /* default */], [_vm._v("mdi-minus")])], 1), _vm._v(" "), _c('span', {
      staticClass: "mx-3 font-weight-bold"
    }, [_vm._v(_vm._s(item.quantity))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "grey",
        "disabled": item.quantity >= item.stock_count
      },
      on: {
        "click": function ($event) {
          return _vm.updateQuantity(item.id, 1);
        }
      }
    }, [_c(VIcon["a" /* default */], [_vm._v("mdi-plus")])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "font-weight-bold primary--text"
    }, [_vm._v("\n                  " + _vm._s(_vm.formatPrice(item.pro_price * item.quantity)) + "\n                ")])]), _vm._v(" "), item.quantity >= item.stock_count ? _c('div', {
      staticClass: "caption error--text mt-1"
    }, [_vm._v("\n                Max stock reached\n              ")]) : _vm._e(), _vm._v(" "), item.isFromTicketLine && !item.isActive ? _c('div', {
      staticClass: "caption warning--text mt-1"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "color": "warning"
      }
    }, [_vm._v("mdi-alert")]), _vm._v("\n                Product is currently inactive\n              ")], 1) : _vm._e()]);
  }), 1)]), _vm._v(" "), _c('div', {
    staticClass: "pa-4"
  }, [_vm.cart.length > 0 ? _c(VCard["a" /* default */], {
    staticClass: "mb-3 pa-3 w-100",
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between mb-1"
  }, [_c('span', [_vm._v("Subtotal:")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.getTotalPrice())))])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between mb-1"
  }, [_c('span', [_vm._v("Tax (8.5%):")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.getTotalPrice() * 0.085)))])]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between text-h6 font-weight-bold"
  }, [_c('span', [_vm._v("Total:")]), _vm._v(" "), _c('span', {
    staticClass: "primary--text"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.getTotalPrice() * 1.085)))])])], 1) : _vm._e(), _vm._v(" "), _vm.cart.length > 0 ? _c('div', [_c(VBtn["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "color": "info",
      "block": "",
      "loading": _vm.savingTicket
    },
    on: {
      "click": _vm.saveTicket
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n              " + _vm._s(_vm.currentTicket ? 'Update Ticket' : 'Save Ticket') + "\n            ")], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "pr-1",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "block": "",
      "large": "",
      "disabled": !_vm.currentTicket
    },
    on: {
      "click": _vm.processPayment
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-credit-card")]), _vm._v("\n                  Payment\n                ")], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pl-1",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "green",
      "block": "",
      "large": "",
      "disabled": !_vm.currentTicket
    },
    on: {
      "click": _vm.printCustomerReceipt
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n                  Print Ticket\n                ")], 1)], 1)], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "color": "grey",
      "block": "",
      "large": ""
    },
    on: {
      "click": _vm.clearCart
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-cart-remove")]), _vm._v("\n              Clear Cart\n            ")], 1)], 1) : _vm._e()], 1)], 1)], 1)], 1), _vm._v(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "color": _vm.snackbar.color,
      "timeout": _vm.snackbar.timeout,
      "location": "top right",
      "variant": "elevated"
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function () {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "white",
            "variant": "text"
          },
          on: {
            "click": function ($event) {
              _vm.snackbar.show = false;
            }
          }
        }, [_vm._v("\n        Close\n      ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.snackbar.show,
      callback: function ($$v) {
        _vm.$set(_vm.snackbar, "show", $$v);
      },
      expression: "snackbar.show"
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v(_vm._s(_vm.snackbar.icon))]), _vm._v("\n      " + _vm._s(_vm.snackbar.message) + "\n    ")], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CafePOSScreen/index.vue?vue&type=template&id=3109b930&scoped=true&

// EXTERNAL MODULE: ./components/CAFE/printdialog/index.vue + 4 modules
var printdialog = __webpack_require__(586);

// EXTERNAL MODULE: ./components/CAFE/paymentDialog/index.vue + 4 modules
var paymentDialog = __webpack_require__(598);

// EXTERNAL MODULE: ./components/CAFE/customerDialog/index.vue + 4 modules
var customerDialog = __webpack_require__(599);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CafePOSScreen/index.vue?vue&type=script&lang=js&



/* harmony default export */ var CafePOSScreenvue_type_script_lang_js_ = ({
  components: {
    PrintTicketDialog: printdialog["default"],
    PaymentDialog: paymentDialog["default"],
    CustomerDialog: customerDialog["default"]
  },
  name: 'MenuPOSScreen',
  props: {
    tableId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      // Restaurant configuration
      restaurantConfig: {
        name: 'Your Restaurant Name',
        address: '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567'
      },
      // Print related
      showCustomerPrint: false,
      selectedTicket: null,
      showPrintConfirmDialog: false,
      // Cart and products
      cart: [],
      products: [],
      currentTicket: null,
      loading: false,
      savingTicket: false,
      // Search and filters
      searchQuery: '',
      categoryFilter: '',
      categoryOptions: [{
        title: 'All Categories',
        value: ''
      }, {
        title: 'Engine Oils',
        value: 49
      }, {
        title: 'Car Care',
        value: 50
      }],
      // Payment dialog
      showPaymentDialog: false,
      paymentAmount: 0,
      actionLoading: false,
      paymentLoading: false,
      paymentList: [],
      // Customer management
      customers: [],
      selectedCustomer: null,
      showCustomerDialog: false,
      loadingCustomers: false,
      // Snackbar
      snackbar: {
        show: false,
        message: '',
        color: 'success',
        icon: 'mdi-check-circle',
        timeout: 4000
      },
      // Auto-save timeout
      autoSaveTimeout: null
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;

      // Search filter
      if (this.searchQuery) {
        const searchTerm = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product => {
          var _product$pro_desc, _product$barCode;
          return product.pro_name.toLowerCase().includes(searchTerm) || ((_product$pro_desc = product.pro_desc) === null || _product$pro_desc === void 0 ? void 0 : _product$pro_desc.toLowerCase().includes(searchTerm)) || product.pro_id.toString().includes(searchTerm) || ((_product$barCode = product.barCode) === null || _product$barCode === void 0 ? void 0 : _product$barCode.toLowerCase().includes(searchTerm));
        });
      }

      // Category filter
      if (this.categoryFilter) {
        filtered = filtered.filter(product => product.pro_category === this.categoryFilter);
      }

      // Sort by name
      return filtered.sort((a, b) => a.pro_name.localeCompare(b.pro_name));
    }
  },
  mounted() {
    this.fetchProducts();
    this.fetchCustomers();
    this.loadExistingTicket();
  },
  watch: {
    // Auto-save cart changes
    cart: {
      handler() {
        if (this.currentTicket && this.cart.length > 0) {
          clearTimeout(this.autoSaveTimeout);
          this.autoSaveTimeout = setTimeout(() => {
            this.saveTicket(true); // Silent save
          }, 2000);
        }
      },
      deep: true
    }
  },
  methods: {
    // Core data fetching methods
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await this.$axios.get('product_f/1');
        console.log('Products response:', response.data);
        const productData = response.data.data || response.data;
        this.products = productData.map(product => ({
          id: product.id,
          pro_id: product.pro_id,
          pro_name: product.pro_name,
          pro_price: product.pro_price,
          duration_minutes: product.duration_minutes || 0,
          pro_desc: product.pro_desc || '',
          pro_status: product.pro_status,
          pro_image_path: product.img_path,
          retail_cost_percent: product.retail_cost_percent || 0,
          cost_price: product.cost_price,
          stock_count: product.card_count || 0,
          minStock: product.minStock || 0,
          locking_session_id: product.locking_session_id,
          barCode: product.barCode,
          vendorName: product.vendorName,
          isActive: product.pro_status === 1,
          _category: 'product',
          categ_name: product.categ_name,
          co_name: product.co_name,
          companyId: product.companyId,
          img_name: product.img_name,
          receiveUnitId: product.receiveUnitId,
          stockUnitId: product.stockUnitId,
          pro_category: product.pro_category,
          saleCurrencyId: product.saleCurrencyId,
          costCurrencyId: product.costCurrencyId,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt
        }));
        this.showMessage(`Loaded ${this.products.length} products successfully!`);
      } catch (error) {
        console.error('Error fetching products:', error);
        this.showMessage('Failed to load products. Please try again.', 'error', 'mdi-alert');
      } finally {
        this.loading = false;
      }
    },
    async fetchCustomers() {
      this.loadingCustomers = true;
      try {
        const response = await this.$axios.get('api/client/find');
        console.log('Customers response:', response.data);
        const customerData = response.data.data || response.data;
        this.customers = customerData.map(customer => ({
          id: customer.id,
          name: customer.name,
          company: customer.company,
          email: customer.email,
          address: customer.address,
          telephone: customer.telephone,
          credit: customer.credit,
          lateChargePercent: customer.lateChargePercent,
          grade: customer.grade,
          isActive: customer.isActive,
          createdAt: customer.createdAt,
          updatedAt: customer.updatedAt
        }));
        console.log(`Loaded ${this.customers.length} customers`);
      } catch (error) {
        console.error('Error fetching customers:', error);
        this.showMessage('Failed to load customers', 'error', 'mdi-alert');
      } finally {
        this.loadingCustomers = false;
      }
    },
    // Ticket management methods
    async loadExistingTicket() {
      try {
        const response = await this.$axios.get(`api/ticket/table/${this.tableId}/pending`);
        if (response.data && response.data.length > 0) {
          this.currentTicket = response.data[0];
          if (this.currentTicket.clientId) {
            await this.loadTicketCustomer(this.currentTicket.clientId);
          }
          this.loadTicketLines();
        }
      } catch (error) {
        console.log('No existing ticket found or error:', error);
      }
    },
    async loadTicketCustomer(clientId) {
      try {
        const response = await this.$axios.get(`api/client/find/${clientId}`);
        this.selectedCustomer = response.data.data || response.data;
        console.log('Loaded ticket customer:', this.selectedCustomer.name);
      } catch (error) {
        console.error('Error loading ticket customer:', error);
      }
    },
    async loadTicketLines() {
      if (!this.currentTicket) return;
      try {
        const response = await this.$axios.get(`api/ticketLine/ticket/${this.currentTicket.id}`);
        const ticketLines = response.data.data || response.data;
        this.cart = ticketLines.map(line => {
          var _line$product;
          const product = this.products.find(p => p.id === line.productId);
          return {
            id: line.productId,
            pro_id: line.productId,
            pro_name: ((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.name) || (product === null || product === void 0 ? void 0 : product.pro_name) || `Product ${line.productId}`,
            categ_name: (product === null || product === void 0 ? void 0 : product.categ_name) || 'Unknown Category',
            stock_count: (product === null || product === void 0 ? void 0 : product.stock_count) || 0,
            isActive: (product === null || product === void 0 ? void 0 : product.isActive) || false,
            pro_price: line.unitPrice,
            quantity: line.quantity,
            ticketLineId: line.id,
            totalPrice: line.totalPrice || line.unitPrice * line.quantity,
            isFromTicketLine: true,
            originalTicketLinePrice: line.unitPrice
          };
        }).filter(item => item.pro_name);
        console.info(`Loaded ${this.cart.length} items from ticket lines`);
      } catch (error) {
        console.error('Error loading ticket lines:', error);
        this.showMessage('Failed to load saved ticket items', 'error', 'mdi-alert');
      }
    },
    async saveTicket(silent = false) {
      if (this.cart.length === 0) {
        if (!silent) this.showMessage('Cart is empty', 'warning', 'mdi-alert');
        return;
      }
      if (!this.tableId) {
        console.error('Table ID is missing:', this.tableId);
        if (!silent) this.showMessage('Table ID is missing. Please check the table selection.', 'error', 'mdi-alert');
        return;
      }
      this.savingTicket = true;
      try {
        const subtotal = this.getTotalPrice();
        const tax = subtotal * 0.085;
        const total = subtotal + tax;
        const ticketData = {
          tableId: parseInt(this.tableId),
          clientId: this.selectedCustomer ? this.selectedCustomer.id : null,
          status: 'pending',
          subtotal: parseFloat(subtotal.toFixed(2)),
          tax: parseFloat(tax.toFixed(2)),
          total: parseFloat(total.toFixed(2)),
          paymentStatus: 'pending',
          customerNotes: this.selectedCustomer ? `Customer: ${this.selectedCustomer.name}` : 'Walk-in customer',
          ticketLines: this.cart.map(item => ({
            id: item.ticketLineId || undefined,
            productId: item.id,
            quantity: item.quantity,
            unitPrice: parseFloat(item.pro_price),
            totalPrice: parseFloat((item.pro_price * item.quantity).toFixed(2)),
            status: 'ordered'
          }))
        };
        console.log('Saving ticket with data:', ticketData);
        let response;
        if (this.currentTicket) {
          response = await this.$axios.put(`api/ticket/${this.currentTicket.id}`, ticketData);
          this.$emit('reload-data');
          if (!silent) this.showMessage('Ticket updated successfully!', 'success', 'mdi-content-save');
        } else {
          response = await this.$axios.post('api/ticket/', ticketData);
          this.currentTicket = response.data.data || response.data;
          this.$emit('reload-data');
          if (!silent) this.showMessage('Ticket saved successfully!', 'success', 'mdi-content-save');
        }
      } catch (error) {
        console.error('Error saving ticket:', error);
        if (!silent) this.showMessage('Failed to save ticket. Please try again.', 'error', 'mdi-alert');
      } finally {
        this.savingTicket = false;
      }
    },
    // Cart management methods
    addToCart(product) {
      console.log('Adding product to cart:', product);
      if (!product.isActive) {
        this.showMessage('Product is not active', 'warning', 'mdi-alert');
        return;
      }
      if (product.stock_count <= 0) {
        this.showMessage('Product is out of stock', 'warning', 'mdi-alert');
        return;
      }
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity < product.stock_count) {
          existingItem.quantity += 1;
          if (!existingItem.isFromTicketLine) {
            existingItem.pro_price = parseFloat(product.pro_price);
          }
        } else {
          this.showMessage('Maximum stock reached', 'warning', 'mdi-alert');
        }
      } else {
        this.cart.push({
          id: product.id,
          pro_id: product.id,
          pro_name: product.pro_name,
          pro_price: parseFloat(product.pro_price),
          categ_name: product.categ_name,
          stock_count: product.stock_count,
          isActive: product.isActive,
          quantity: 1,
          isFromTicketLine: false
        });
      }
    },
    updateQuantity(itemId, change) {
      const item = this.cart.find(i => i.id === itemId);
      if (!item) return;
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        this.removeFromCart(itemId);
        return;
      }
      if (newQuantity > item.stock_count) {
        this.showMessage('Maximum stock reached', 'warning', 'mdi-alert');
        return;
      }
      item.quantity = newQuantity;
    },
    removeFromCart(itemId) {
      const itemIndex = this.cart.findIndex(item => item.id === itemId);
      if (itemIndex > -1) {
        const item = this.cart[itemIndex];
        this.cart.splice(itemIndex, 1);
        this.showMessage(`${item.pro_name} removed from cart`, 'info', 'mdi-information');
      }
    },
    clearCart() {
      if (this.cart.length === 0) {
        this.showMessage('Cart is already empty', 'info', 'mdi-information');
        return;
      }
      const itemCount = this.getTotalItems();
      const totalAmount = this.getTotalPrice();
      this.cart = [];
      this.currentTicket = null;
      this.selectedCustomer = null;
      this.showMessage(`Cart cleared - ${itemCount} items (${this.formatPrice(totalAmount)}) removed`, 'info', 'mdi-cart-remove');
    },
    // Payment methods
    async loadPaymentMethods() {
      this.paymentLoading = true;
      this.paymentList = [];
      try {
        const response = await this.$axios.get('/api/paymentMethod/find');
        this.paymentList = response.data.filter(payment => payment.isActive);
        console.log('Payment methods loaded:', this.paymentList);
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.showMessage('Failed to load payment methods', 'error', 'mdi-alert');
      } finally {
        this.paymentLoading = false;
      }
    },
    async processPayment() {
      const total = this.getTotalPrice() * 1.085 || 0;
      if (total <= 0) {
        this.showMessage('No amount to process', 'warning', 'mdi-alert');
        return;
      }
      this.paymentAmount = total;
      await this.loadPaymentMethods();
      this.showPaymentDialog = true;
    },
    async handlePaymentConfirm(selectedPaymentMethod) {
      this.actionLoading = true;
      try {
        if (this.currentTicket.id) {
          await this.$axios.patch(`/api/ticket/${this.currentTicket.id}/payment-status`, {
            paymentStatus: 'paid',
            paymentId: selectedPaymentMethod.id
          });
        }

        // Close payment dialog first
        this.closePaymentDialog();

        // Show print confirmation dialog
        this.showPrintConfirmDialog = true;
        await this.updateTableStatus('cleaning');
      } catch (error) {
        console.error('Payment processing error:', error);
        this.showMessage('Failed to process payment', 'error', 'mdi-alert');
      } finally {
        this.actionLoading = false;
      }
    },
    // Print confirmation handler
    handlePrintConfirmation(shouldPrint) {
      this.showPrintConfirmDialog = false;
      if (shouldPrint) {
        // Execute print ticket function
        this.printCustomerReceipt();
      } else {
        // Just show success message if user skipped printing
        this.showMessage(`Payment of ${this.formatPrice(this.paymentAmount)} processed successfully`, 'success', 'mdi-check-circle');
      }

      // Reset payment amount
      this.paymentAmount = 0;
    },
    closePaymentDialog() {
      this.showPaymentDialog = false;
      this.paymentAmount = 0;
    },
    async updateTableStatus(status) {
      const payload = {
        status,
        timeOccupied: status === 'occupied' ? new Date() : null,
        currentOrderId: status === 'occupied' ? this.currentTicket.id : null
      };
      await this.$axios.patch(`api/tables/${this.tableId}/status`, payload);
      await this.loadExistingTicket();
      this.$emit('reload-data');
      this.$emit('reload-table');
    },
    // Customer management methods
    handleCustomerSelected(customer) {
      this.selectedCustomer = customer;
      this.showMessage(`Customer ${customer.name} selected`, 'success', 'mdi-account-check');
    },
    handleWalkInSelected() {
      this.selectedCustomer = null;
      this.showMessage('Walk-in customer selected', 'info', 'mdi-walk');
    },
    async handleSaveCustomer(customerData) {
      try {
        console.log('Saving customer:', customerData);
        const response = await this.$axios.post('api/client/create', customerData);
        const savedCustomer = response.data.data || response.data;
        this.customers.unshift(savedCustomer);
        this.selectedCustomer = savedCustomer;
        this.showMessage(`Customer ${savedCustomer.name} created successfully!`, 'success', 'mdi-account-plus');
      } catch (error) {
        var _error$response;
        console.error('Error saving customer:', error);
        if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400) {
          this.showMessage('Invalid customer data. Please check all fields.', 'error', 'mdi-alert');
        } else {
          this.showMessage('Failed to save customer. Please try again.', 'error', 'mdi-alert');
        }
      }
    },
    closeCustomerDialog() {
      this.showCustomerDialog = false;
    },
    // Print methods
    // Updated printCustomerReceipt method - using same data model as loadExistingTicket/loadTicketLines
    async printCustomerReceipt() {
      console.log('Print button clicked');
      if (!this.currentTicket) {
        this.showMessage('Please save the ticket first before printing', 'warning', 'mdi-alert');
        return;
      }
      try {
        // Show loading state
        this.loading = true;

        // Fetch the latest ticket data from the server using same pattern as loadExistingTicket
        console.log('Fetching latest ticket data before printing...');
        const ticketResponse = await this.$axios.get(`api/ticket/${this.currentTicket.id}`);
        const latestTicket = ticketResponse.data.data || ticketResponse.data;

        // Fetch customer data if exists - same pattern as loadTicketCustomer
        let customerData = null;
        if (latestTicket.clientId) {
          try {
            const customerResponse = await this.$axios.get(`api/client/find/${latestTicket.clientId}`);
            customerData = customerResponse.data.data || customerResponse.data;
          } catch (error) {
            console.warn('Could not fetch customer data:', error);
            customerData = this.selectedCustomer;
          }
        }

        // Fetch the latest ticket lines using EXACT same logic as loadTicketLines
        const ticketLinesResponse = await this.$axios.get(`api/ticketLine/ticket/${latestTicket.id}`);
        const ticketLines = ticketLinesResponse.data.data || ticketLinesResponse.data;

        // Map ticket lines using EXACT same mapping as loadTicketLines
        const mappedTicketLines = ticketLines.map(line => {
          var _line$product2;
          const product = this.products.find(p => p.id === line.productId);
          return {
            id: line.productId,
            pro_id: line.productId,
            pro_name: ((_line$product2 = line.product) === null || _line$product2 === void 0 ? void 0 : _line$product2.name) || (product === null || product === void 0 ? void 0 : product.pro_name) || `Product ${line.productId}`,
            categ_name: (product === null || product === void 0 ? void 0 : product.categ_name) || 'Unknown Category',
            stock_count: (product === null || product === void 0 ? void 0 : product.stock_count) || 0,
            isActive: (product === null || product === void 0 ? void 0 : product.isActive) || false,
            pro_price: line.unitPrice,
            quantity: line.quantity,
            ticketLineId: line.id,
            totalPrice: line.totalPrice || line.unitPrice * line.quantity,
            isFromTicketLine: true,
            originalTicketLinePrice: line.unitPrice
          };
        }).filter(item => item.pro_name);

        // Build the complete ticket object for printing with same structure
        const ticketForPrint = {
          ...latestTicket,
          client: customerData,
          table: {
            id: this.tableId,
            number: this.tableId,
            name: `Table ${this.tableId}`
          },
          // Use the mapped ticket lines with same structure as cart
          ticketLines: mappedTicketLines
        };

        // If totals are missing, calculate them
        if (!ticketForPrint.subtotal) {
          const subtotal = mappedTicketLines.reduce((total, item) => {
            return total + parseFloat(item.pro_price) * item.quantity;
          }, 0);
          ticketForPrint.subtotal = subtotal;
          ticketForPrint.tax = subtotal * 0.085;
          ticketForPrint.total = subtotal + subtotal * 0.085;
        }
        console.log(`Updated ticket for print: ${JSON.stringify(ticketForPrint)} }`);
        console.log('Ticket lines count:', mappedTicketLines.length);

        // Update the current ticket with latest data
        this.currentTicket = latestTicket;

        // Set the ticket for printing
        this.selectedTicket = ticketForPrint;
        this.showCustomerPrint = true;
      } catch (error) {
        console.error('Error fetching latest ticket data for printing:', error);
        this.showMessage('Failed to load latest ticket data. Using current data for printing.', 'warning', 'mdi-alert');

        // Fallback to existing logic if API call fails
        const ticketForPrint = {
          ...this.currentTicket,
          client: this.selectedCustomer || null,
          table: {
            id: this.tableId,
            number: this.tableId,
            name: `Table ${this.tableId}`
          },
          ticketLines: this.cart // Use existing cart data as fallback
        };

        // Ensure totals exist for fallback
        if (!ticketForPrint.subtotal) {
          ticketForPrint.subtotal = this.getTotalPrice();
          ticketForPrint.tax = this.getTotalPrice() * 0.085;
          ticketForPrint.total = this.getTotalPrice() * 1.085;
        }
        this.selectedTicket = ticketForPrint;
        this.showCustomerPrint = true;
      } finally {
        this.loading = false;
      }
    },
    closePrintDialog() {
      this.showCustomerPrint = false;
      this.selectedTicket = null;
    },
    onPrintSuccess(ticket) {
      console.log('Ticket printed successfully:', ticket.id);
      this.showMessage('Ticket printed successfully!', 'success', 'mdi-printer');
    },
    // Utility methods
    showMessage(message, color = 'success', icon = 'mdi-check-circle') {
      this.snackbar = {
        show: true,
        message,
        color,
        icon,
        timeout: 4000
      };
    },
    getCurrentProductPrice(productId) {
      const product = this.products.find(p => p.id === productId);
      return product ? parseFloat(product.pro_price) : 0;
    },
    getTotalPrice() {
      return this.cart.reduce((total, item) => {
        return total + parseFloat(item.pro_price) * item.quantity;
      }, 0);
    },
    getTotalItems() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    formatDateTime(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleString();
    },
    getCategoryColor(categoryName) {
      if (categoryName && categoryName.includes('Engine')) return 'primary';
      if (categoryName && categoryName.includes('ຄາແຄຣ')) return 'purple';
      return 'info';
    },
    getStockColor(stockCount) {
      if (stockCount <= 0) return 'error';
      if (stockCount <= 5) return 'warning';
      return 'success';
    },
    getTicketStatusColor(status) {
      const colors = {
        pending: 'orange',
        preparing: 'blue',
        ready: 'green',
        served: 'purple',
        paid: 'success'
      };
      return colors[status] || 'grey';
    },
    getGradeColor(grade) {
      const colors = {
        A: 'success',
        B: 'info',
        C: 'warning',
        D: 'orange',
        E: 'deep-orange',
        F: 'error'
      };
      return colors[grade] || 'grey';
    }
  },
  beforeDestroy() {
    if (this.autoSaveTimeout) {
      clearTimeout(this.autoSaveTimeout);
    }
  }
});
// CONCATENATED MODULE: ./components/CafePOSScreen/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CafePOSScreenvue_type_script_lang_js_ = (CafePOSScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CafePOSScreen/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(633)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CafePOSScreenvue_type_script_lang_js_,
  CafePOSScreenvue_type_template_id_3109b930_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "3109b930",
  "79b8fefa"
  
)

/* harmony default export */ var CafePOSScreen = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70deaa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(725);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70deaa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70deaa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70deaa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a70deaa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-a70deaa8]{cursor:pointer}.w-100[data-v-a70deaa8]{width:100%}.table-card[data-v-a70deaa8]:hover{transform:translateY(-2px);transition:transform .2s ease}.payment-method-card[data-v-a70deaa8]{border:2px solid transparent;transition:all .3s ease}.payment-method-card[data-v-a70deaa8]:hover{transform:translateY(-2px)}.payment-method-card.elevation-4[data-v-a70deaa8]{border:2px solid hsla(0,0%,100%,.3)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map