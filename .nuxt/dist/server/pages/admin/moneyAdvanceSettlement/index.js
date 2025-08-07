exports.ids = [167,59,60,61];
exports.modules = {

/***/ 1057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvanceSettlement/index.vue?vue&type=template&id=49e87fba&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settlement-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-49e87fba><div class=\"header-content\" data-v-49e87fba><h1 class=\"page-title\" data-v-49e87fba>ສະຫລຸບບັນຊີ ລາຍຮັບ</h1> <div class=\"header-actions\" data-v-49e87fba><button class=\"btn btn-primary\" data-v-49e87fba><i class=\"fas fa-plus\" data-v-49e87fba></i>\n          ລົງລາຍຮັບ ການຊຳລະ\n        </button> <button class=\"btn btn-secondary\" data-v-49e87fba><i class=\"fas fa-download\" data-v-49e87fba></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-49e87fba><label data-v-49e87fba>ເລືອກຕາມວັນທີ:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.startDate) + " class=\"form-control\" data-v-49e87fba> <span class=\"date-separator\" data-v-49e87fba>ຫາ</span> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.endDate) + " class=\"form-control\" data-v-49e87fba></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<label data-v-49e87fba>ຊ່ອງທາງລາຍຮັບ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.method,
      expression: "filters.method"
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
        _vm.$set(_vm.filters, "method", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Methods")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("Cash")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("Bank Transfer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "deduction"
    }
  }, [_vm._v("Deduction")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<label data-v-49e87fba>ເລືອກບັນຊີ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.accountNo,
      expression: "filters.accountNo"
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
        _vm.$set(_vm.filters, "accountNo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Accounts")]), _vm._v(" "), _vm._l(_vm.accountList, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n            " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + " (" + _vm._s(account.accountName) + ")\n          ")]);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<label data-v-49e87fba>ເລືອກກະຊວງ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.ministryId,
      expression: "filters.ministryId"
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
        _vm.$set(_vm.filters, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Ministries")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n            " + _vm._s(ministry.ministryCode) + " - " + _vm._s(ministry.ministryName) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<label data-v-49e87fba>ເລືອກບັນຊີລວມ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.chartAccountId,
      expression: "filters.chartAccountId"
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
        _vm.$set(_vm.filters, "chartAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Chart Accounts")]), _vm._v(" "), _vm._l(_vm.chartAccounts, function (chartAccount) {
    return _c('option', {
      key: chartAccount.id,
      domProps: {
        "value": chartAccount.id
      }
    }, [_vm._v("\n            " + _vm._s(chartAccount.accountNumber) + " - " + _vm._s(chartAccount.accountName) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"filter-actions\" data-v-49e87fba><button class=\"btn btn-outline-primary\" data-v-49e87fba><i class=\"fas fa-search\" data-v-49e87fba></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-49e87fba><i class=\"fas fa-undo\" data-v-49e87fba></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-49e87fba><div class=\"summary-card total-lak\" data-v-49e87fba><div class=\"card-icon total\" data-v-49e87fba><i class=\"fas fa-calculator\" data-v-49e87fba></i></div> <div class=\"card-content\" data-v-49e87fba><h3 data-v-49e87fba>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.totalLAK.amount, 'LAK'))) + "</h3> <p data-v-49e87fba>" + _vm._ssrEscape("ລວມຍອດທັງໝົດ (LAK) - " + _vm._s(_vm.summaryStats.totalLAK.count) + " ລາຍການ") + "</p></div></div> " + _vm._ssrList(_vm.summaryStats.currencies, function (currencyStat) {
    return "<div class=\"summary-card currency-card\" data-v-49e87fba><div class=\"card-icon currency\" data-v-49e87fba><i class=\"fas fa-coins\" data-v-49e87fba></i></div> <div class=\"card-content\" data-v-49e87fba><h3 data-v-49e87fba>" + _vm._ssrEscape("\n          " + _vm._s(_vm.formatCurrencyAmount(currencyStat.originalAmount, currencyStat.currencyCode)) + "\n        ") + "</h3> <p class=\"currency-name\" data-v-49e87fba>" + _vm._ssrEscape("\n          " + _vm._s(currencyStat.currencyName) + " (" + _vm._s(currencyStat.count) + " ລາຍການ)\n        ") + "</p> <p class=\"lak-equivalent\" data-v-49e87fba>" + _vm._ssrEscape("\n          ≈ " + _vm._s(_vm.formatCurrency(currencyStat.lakEquivalent, 'LAK')) + "\n        ") + "</p></div></div>";
  }) + "</div> "), _vm._ssrNode("<div class=\"table-section\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-49e87fba><h3 data-v-49e87fba>ລາຍການຮັບເງິນ</h3> <span class=\"record-count\" data-v-49e87fba>" + _vm._ssrEscape(_vm._s(_vm.filteredSettlements.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-49e87fba>", "</div>", [_vm._ssrNode("<label data-v-49e87fba>Show:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pagination.perPage,
      expression: "pagination.perPage"
    }],
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.pagination, "perPage", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updatePagination]
    }
  }, [_c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100"
    }
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-49e87fba>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-49e87fba><table class=\"data-table\" data-v-49e87fba><thead data-v-49e87fba><tr data-v-49e87fba><th class=\"sortable\" data-v-49e87fba>\n              ID\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('id')) + " data-v-49e87fba></i></th> <th class=\"sortable\" data-v-49e87fba>\n              ວັນທີລົງຊຳລະ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('settlementDate')) + " data-v-49e87fba></i></th> <th class=\"sortable\" data-v-49e87fba>\n              Payment Method\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('method')) + " data-v-49e87fba></i></th> <th class=\"sortable\" data-v-49e87fba>\n              ຜູ້ລົງບັນຊີ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('requester')) + " data-v-49e87fba></i></th> <th class=\"sortable\" data-v-49e87fba>\n              ຈຳນວນເງິນ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('amount')) + " data-v-49e87fba></i></th> <th data-v-49e87fba>ສະກຸນເງິນ</th> <th data-v-49e87fba>Ministry</th> <th data-v-49e87fba>Chart Account</th> <th data-v-49e87fba>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-49e87fba>" + _vm._ssrList(_vm.paginatedSettlements, function (settlement) {
    return "<tr data-v-49e87fba><td data-v-49e87fba>" + _vm._ssrEscape(_vm._s(settlement.id) + " " + _vm._s(settlement.moneyAdvanceId)) + "</td> <td data-v-49e87fba>" + _vm._ssrEscape(_vm._s(_vm.formatDate(settlement.settlementDate))) + "</td> <td data-v-49e87fba><span" + _vm._ssrClass(null, ['method-badge', settlement.method]) + " data-v-49e87fba>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatMethod(settlement.method)) + "\n              ") + "</span></td> <td data-v-49e87fba>" + _vm._ssrEscape(_vm._s(settlement.requester)) + "</td> <td class=\"amount-cell\" data-v-49e87fba>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatSettlementAmount(settlement)) + "\n            ") + "</td> <td data-v-49e87fba>" + (_vm.getSettlementCurrency(settlement) ? "<span class=\"currency-tag\" data-v-49e87fba>" + _vm._ssrEscape("\n                " + _vm._s(_vm.getSettlementCurrency(settlement).code) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-49e87fba>-</span>") + "</td> <td data-v-49e87fba>" + (settlement.ministry ? "<span class=\"ministry-tag\" data-v-49e87fba>" + _vm._ssrEscape("\n                " + _vm._s(settlement.ministry.ministryCode) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-49e87fba>-</span>") + "</td> <td data-v-49e87fba>" + (settlement.chartAccount ? "<span class=\"chart-account-tag\" data-v-49e87fba>" + _vm._ssrEscape("\n                " + _vm._s(settlement.chartAccount.accountNumber) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-49e87fba>-</span>") + "</td> <td class=\"actions-cell\" data-v-49e87fba><button title=\"View Details\" class=\"btn btn-sm btn-outline-primary\" data-v-49e87fba><i class=\"fas fa-eye\" data-v-49e87fba></i></button> <button title=\"Edit\" class=\"btn btn-sm btn-outline-info\" data-v-49e87fba><i class=\"fas fa-edit\" data-v-49e87fba></i></button> <button title=\"Print\" class=\"btn btn-sm btn-outline-secondary\" data-v-49e87fba><i class=\"fas fa-print\" data-v-49e87fba></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-49e87fba><div class=\"pagination-info\" data-v-49e87fba>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-49e87fba><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-49e87fba>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-49e87fba>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-49e87fba>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-49e87fba>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-49e87fba>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('SettlementDialog', {
    attrs: {
      "visible": _vm.showEditDialog,
      "settlement": _vm.selectedSettlement,
      "chart-accounts": _vm.chartAccounts,
      "ministries": _vm.ministries,
      "currencies": _vm.currencies,
      "bankAccounts": _vm.accountList,
      "users": _vm.users,
      "outstanding-invoices": _vm.outstandingInvoices
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onSettlementSave
    }
  })], 1), _vm._ssrNode(" "), _vm.showPrintVoucher && _vm.settlementDetail ? _c('VoucherPrintComponent', {
    key: _vm.settlementDetail.id,
    attrs: {
      "voucher-data": _vm.settlementDetail
    },
    on: {
      "close": _vm.closePrintVoucher
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('client-only', [_c('SettlementViewDialog', {
    attrs: {
      "visible": _vm.showViewDialog,
      "settlement": _vm.selectedSettlement
    },
    on: {
      "close": _vm.closeViewDialog
    }
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-49e87fba><div class=\"loading-spinner\" data-v-49e87fba><i class=\"fas fa-spinner fa-spin\" data-v-49e87fba></i> <p data-v-49e87fba>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/moneyAdvanceSettlement/index.vue?vue&type=template&id=49e87fba&scoped=true&

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

// EXTERNAL MODULE: ./components/MA/settlementDialog/index.vue + 4 modules
var settlementDialog = __webpack_require__(556);

// EXTERNAL MODULE: ./components/MA/settlementViewDialog/index.vue + 4 modules
var settlementViewDialog = __webpack_require__(788);

// EXTERNAL MODULE: ./components/MA/settlementVoucher/index.vue + 4 modules
var settlementVoucher = __webpack_require__(789);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvanceSettlement/index.vue?vue&type=script&lang=js&
















/* harmony default export */ var moneyAdvanceSettlementvue_type_script_lang_js_ = ({
  name: 'SettlementSummary',
  components: {
    SettlementDialog: settlementDialog["default"],
    SettlementViewDialog: settlementViewDialog["default"],
    VoucherPrintComponent: settlementVoucher["default"]
  },
  data() {
    return {
      showPrintVoucher: false,
      // Dialog visibility states
      showEditDialog: false,
      // For SettlementDialog
      showViewDialog: false,
      // For SettlementViewDialog
      selectedSettlement: null,
      // Data arrays
      outstandingInvoices: [],
      users: [],
      currencies: [],
      ministries: [],
      chartAccounts: [],
      accountList: [],
      settlements: [],
      filteredSettlements: [],
      // Loading states
      loading: false,
      formLoading: false,
      settlementDetail: null,
      // Filters
      filters: {
        startDate: '',
        endDate: '',
        method: '',
        accountNo: '',
        ministryId: '',
        chartAccountId: '',
        search: ''
      },
      // Sorting
      sort: {
        field: 'settlementDate',
        direction: 'desc'
      },
      // Pagination
      pagination: {
        currentPage: 1,
        perPage: 25
      },
      // Summary statistics
      summaryStats: {
        totalLAK: {
          amount: 0,
          count: 0
        },
        currencies: [] // Array of { currencyId, currencyCode, currencyName, originalAmount, lakEquivalent, count }
      }
    };
  },

  computed: {
    user() {
      return this.$auth.user || '';
    },
    paginatedSettlements() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
      const end = start + this.pagination.perPage;
      return this.filteredSettlements.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredSettlements.length / this.pagination.perPage);
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      const end = Math.min(start + this.pagination.perPage - 1, this.filteredSettlements.length);
      return {
        start,
        end,
        total: this.filteredSettlements.length
      };
    },
    visiblePages() {
      const pages = [];
      const current = this.pagination.currentPage;
      const total = this.totalPages;
      if (total <= 7) {
        for (let i = 1; i <= total; i++) {
          pages.push(i);
        }
      } else {
        if (current <= 4) {
          for (let i = 1; i <= 5; i++) pages.push(i);
          pages.push('...');
          pages.push(total);
        } else if (current >= total - 3) {
          pages.push(1);
          pages.push('...');
          for (let i = total - 4; i <= total; i++) pages.push(i);
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = current - 1; i <= current + 1; i++) pages.push(i);
          pages.push('...');
          pages.push(total);
        }
      }
      return pages;
    }
  },
  mounted() {
    this.initializeData();
  },
  methods: {
    closePrintVoucher() {
      this.showPrintVoucher = false;
      setTimeout(() => {
        this.settlementDetail = null;
      }, 100);
    },
    printSettlement(settlement) {
      console.info(`SETTLEMENT DETAIL ${JSON.stringify(settlement)}`);
      this.showPrintVoucher = false;
      this.$nextTick(() => {
        this.settlementDetail = settlement;
        this.showPrintVoucher = true;
      });
    },
    // Dialog Control Methods
    async openCreateDialog() {
      console.log('Opening create dialog...');
      this.selectedSettlement = null;
      this.loading = true;
      try {
        // Load outstanding invoices for the settlement dialog
        await this.loadOutstandingInvoices();

        // Show the dialog
        this.showEditDialog = true;
        console.log('showEditDialog set to:', this.showEditDialog);
      } catch (error) {
        console.error('Error opening create dialog:', error);
        this.showToast('Failed to load form data', 'error');
      } finally {
        this.loading = false;
      }
    },
    async editSettlement(settlement) {
      console.log(`Opening edit dialog for settlement: ${JSON.stringify(settlement)}`, settlement.id);
      this.selectedSettlement = settlement;
      this.loading = true;
      try {
        await this.loadOutstandingInvoices();
        this.showEditDialog = true;
      } catch (error) {
        console.error('Error opening edit dialog:', error);
        this.showToast('Failed to load settlement data', 'error');
      } finally {
        this.loading = false;
      }
    },
    viewSettlement(settlement) {
      console.log('Opening view dialog for settlement:', settlement.id);
      this.selectedSettlement = settlement;
      this.showViewDialog = true;
    },
    closeEditDialog() {
      console.log('Closing edit dialog');
      this.showEditDialog = false;
      this.selectedSettlement = null;
    },
    closeViewDialog() {
      console.log('Closing view dialog');
      this.showViewDialog = false;
      this.selectedSettlement = null;
    },
    // Data Loading Methods
    async loadOutstandingInvoices() {
      try {
        // For now, provide dummy data since the API might not be available
        this.outstandingInvoices = [{
          id: 1,
          invoiceNumber: 'INV-001',
          vendor: {
            id: 1,
            name: 'Test Vendor 1'
          },
          dueDate: '2025-08-01',
          outstandingAmount: 1000
        }, {
          id: 2,
          invoiceNumber: 'INV-002',
          vendor: {
            id: 2,
            name: 'Test Vendor 2'
          },
          dueDate: '2025-08-15',
          outstandingAmount: 2500
        }];

        // Uncomment this when your API is ready:
        // const { data } = await this.$axios.get('/api/invoices/outstanding')
        // this.outstandingInvoices = data || []
      } catch (error) {
        console.error('Error loading outstanding invoices:', error);
        this.outstandingInvoices = [];
        this.showToast('Failed to load outstanding invoices', 'error');
      }
    },
    async initializeData() {
      await Promise.all([this.fetchCurrencies(), this.fetchMinistry(), this.fetchChartAccounts(), this.fetchUsers(), this.fetchBankAccounts(), this.fetchSettlements()]);
      this.applyFilters();
      this.calculateSummaryStats();
    },
    async fetchUsers() {
      try {
        const {
          data
        } = await this.$axios.get('/api/user/find');
        if (data && data.data) {
          this.users = Array.isArray(data) ? data : [];
        } else if (Array.isArray(data)) {
          this.users = data;
        } else {
          this.users = [];
        }
        console.log('Fetched users:', this.users.length);
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
          this.currencies = Array.isArray(data) ? data : [];
        } else if (Array.isArray(data)) {
          this.currencies = data;
        } else {
          this.currencies = [];
        }
        console.log('Fetched currencies:', this.currencies.length);
      } catch (error) {
        console.error('Error fetching currencies:', error);
        this.currencies = [];
        this.showToast('Failed to load currencies', 'error');
      }
    },
    async fetchBankAccounts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/bank_account/find');
        if (data && data.data) {
          this.accountList = Array.isArray(data) ? data : [];
        } else if (Array.isArray(data)) {
          this.accountList = data;
        } else {
          this.accountList = [];
        }

        // Filter only active bank accounts
        this.accountList = this.accountList.filter(account => account.isActive);
        console.log('Fetched bank accounts:', this.accountList.length);
      } catch (error) {
        console.error('Error fetching bank accounts:', error);
        this.accountList = [];
        console.warn('Bank accounts not available - feature will work without them');
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
        console.log('Fetched ministries:', this.ministries);
      } catch (error) {
        console.error('Error fetching ministries:', error);
        this.ministries = [];
        this.showToast('Failed to load ministries', 'error');
      }
    },
    async fetchChartAccounts() {
      try {
        const response = await this.$axios.get('/api/accountChart/find');

        // Check if response.data is directly an array
        if (Array.isArray(response.data)) {
          this.chartAccounts = response.data;
        }
        // Check if response.data has a nested structure with success flag
        else if (response.data && response.data.success) {
          this.chartAccounts = response.data.data || [];
        }
        // Handle other possible structures
        else if (response.data) {
          this.chartAccounts = response.data;
        } else {
          this.chartAccounts = [];
        }
        console.log('Fetched chart accounts:', this.chartAccounts);
      } catch (error) {
        console.error('Error fetching chart accounts:', error);
        this.chartAccounts = [];
        this.showToast('Failed to load chart accounts', 'error');
      }
    },
    async fetchSettlements() {
      this.loading = true;
      try {
        const response = await this.$axios.get('/api/settlements');
        if (response.data && response.data.success && response.data.data && response.data.data.settlements) {
          this.settlements = response.data.data.settlements.map(settlement => {
            var _settlement$proceeder;
            return {
              id: settlement.id,
              settlementDate: settlement.createdAt,
              method: settlement.method,
              requester: ((_settlement$proceeder = settlement.proceeder) === null || _settlement$proceeder === void 0 ? void 0 : _settlement$proceeder.cus_name) || 'Unknown',
              amount: settlement.amount,
              userId: settlement.userId,
              currencyId: settlement.currencyId,
              bankAccountId: settlement.bankAccountId,
              ministryId: settlement.ministryId,
              chartAccountId: settlement.chartAccountId,
              ministry: settlement.ministry,
              chartAccount: settlement.chartAccount,
              moneyAdvanceId: settlement.moneyAdvanceId,
              exchangeRate: settlement.exchangeRate,
              notes: settlement.notes
            };
          });
        } else {
          console.error('Unexpected response structure:', response.data);
          this.settlements = [];
        }
      } catch (error) {
        console.error('Error fetching settlements:', error);
        this.showToast('Error loading settlement data', 'error');
        this.settlements = [];
      } finally {
        this.loading = false;
      }
    },
    // Settlement Save Handler
    async onSettlementSave(settlementData) {
      try {
        this.loading = true;
        console.log('Saving settlement:', settlementData);
        let response;
        if (this.selectedSettlement && this.selectedSettlement.id) {
          settlementData.updateUserId = this.user.id;
          response = await this.$axios.put(`/api/settlements/${this.selectedSettlement.id}`, settlementData);
        } else {
          response = await this.$axios.post('/api/settlements', settlementData);
        }
        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success');
          this.closeEditDialog();
          await this.fetchSettlements();
          this.applyFilters();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Save failed');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving settlement:', error);
        const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ';
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.settlements];
      if (this.filters.startDate) {
        filtered = filtered.filter(s => s.settlementDate >= this.filters.startDate);
      }
      if (this.filters.endDate) {
        filtered = filtered.filter(s => s.settlementDate <= this.filters.endDate);
      }
      if (this.filters.method) {
        filtered = filtered.filter(s => s.method === this.filters.method);
      }
      if (this.filters.accountNo) {
        filtered = filtered.filter(s => s.bankAccountId === this.filters.accountNo);
      }
      if (this.filters.ministryId) {
        filtered = filtered.filter(s => s.ministryId === this.filters.ministryId);
      }
      if (this.filters.chartAccountId) {
        filtered = filtered.filter(s => s.chartAccountId === this.filters.chartAccountId);
      }
      this.filteredSettlements = filtered;
      this.sortData();
      this.pagination.currentPage = 1;
      this.calculateSummaryStats();
    },
    resetFilters() {
      this.filters = {
        startDate: '',
        endDate: '',
        method: '',
        accountNo: '',
        ministryId: '',
        chartAccountId: '',
        search: ''
      };
      this.applyFilters();
    },
    sortBy(field) {
      if (this.sort.field === field) {
        this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        this.sort.field = field;
        this.sort.direction = 'asc';
      }
      this.sortData();
    },
    sortData() {
      this.filteredSettlements.sort((a, b) => {
        let aVal = a[this.sort.field];
        let bVal = b[this.sort.field];
        if (typeof aVal === 'string') {
          aVal = aVal.toLowerCase();
          bVal = bVal.toLowerCase();
        }
        if (aVal < bVal) return this.sort.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return this.sort.direction === 'asc' ? 1 : -1;
        return 0;
      });
    },
    getSortIcon(field) {
      if (this.sort.field !== field) return 'fas fa-sort';
      return this.sort.direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
    },
    calculateSummaryStats() {
      // Initialize stats
      const currencyStats = new Map();
      let totalLAKAmount = 0;
      let totalCount = 0;

      // Process each settlement
      this.filteredSettlements.forEach(settlement => {
        const amount = parseFloat(settlement.amount) || 0;
        const exchangeRate = parseFloat(settlement.exchangeRate) || 1;
        const currencyId = settlement.currencyId;

        // Calculate LAK equivalent
        const lakEquivalent = amount * exchangeRate;
        totalLAKAmount += lakEquivalent;
        totalCount++;

        // Find currency details
        const currency = this.currencies.find(c => c.id === currencyId);
        const currencyCode = (currency === null || currency === void 0 ? void 0 : currency.code) || 'LAK';
        const currencyName = (currency === null || currency === void 0 ? void 0 : currency.name) || 'Lao Kip';

        // Group by currency
        if (!currencyStats.has(currencyId)) {
          currencyStats.set(currencyId, {
            currencyId,
            currencyCode,
            currencyName,
            originalAmount: 0,
            lakEquivalent: 0,
            count: 0
          });
        }
        const stat = currencyStats.get(currencyId);
        stat.originalAmount += amount;
        stat.lakEquivalent += lakEquivalent;
        stat.count++;
      });

      // Update summary stats
      this.summaryStats = {
        totalLAK: {
          amount: totalLAKAmount,
          count: totalCount
        },
        currencies: Array.from(currencyStats.values()).sort((a, b) => {
          // Sort by LAK equivalent amount (descending)
          return b.lakEquivalent - a.lakEquivalent;
        })
      };
    },
    // Pagination methods
    updatePagination() {
      this.pagination.currentPage = 1;
    },
    previousPage() {
      if (this.pagination.currentPage > 1) {
        this.pagination.currentPage--;
      }
    },
    nextPage() {
      if (this.pagination.currentPage < this.totalPages) {
        this.pagination.currentPage++;
      }
    },
    goToPage(page) {
      this.pagination.currentPage = page;
    },
    exportData() {
      const csvData = this.convertToCSV(this.filteredSettlements);
      this.downloadCSV(csvData, 'settlement-summary.csv');
    },
    // Enhanced currency formatting
    formatCurrency(amount, currencyCode = 'LAK') {
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
          maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2
        }).format(amount || 0);
      } catch (error) {
        // Fallback formatting if currency code is not supported
        return `${this.formatNumber(amount)} ${currencyCode}`;
      }
    },
    formatCurrencyAmount(amount, currencyCode) {
      return this.formatCurrency(amount, currencyCode);
    },
    formatSettlementAmount(settlement) {
      const currency = this.getSettlementCurrency(settlement);
      const currencyCode = (currency === null || currency === void 0 ? void 0 : currency.code) || 'LAK';
      return this.formatCurrency(settlement.amount, currencyCode);
    },
    getSettlementCurrency(settlement) {
      return this.currencies.find(c => c.id === settlement.currencyId);
    },
    formatNumber(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(amount || 0);
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatMethod(method) {
      const methodLabels = {
        cash: 'Cash',
        bank_transfer: 'Bank Transfer',
        deduction: 'Deduction'
      };
      return methodLabels[method] || method;
    },
    convertToCSV(data) {
      const headers = ['ID', 'Date', 'Method', 'Requester', 'Amount', 'Currency', 'Ministry', 'Chart Account'];
      const csvContent = [headers.join(','), ...data.map(row => {
        var _row$ministry, _row$chartAccount;
        const currency = this.getSettlementCurrency(row);
        return [row.id, row.settlementDate, row.method, row.requester, row.amount, (currency === null || currency === void 0 ? void 0 : currency.code) || '', ((_row$ministry = row.ministry) === null || _row$ministry === void 0 ? void 0 : _row$ministry.ministryCode) || '', ((_row$chartAccount = row.chartAccount) === null || _row$chartAccount === void 0 ? void 0 : _row$chartAccount.accountCode) || ''].join(',');
      })].join('\n');
      return csvContent;
    },
    downloadCSV(csvContent, filename) {
      const blob = new Blob([csvContent], {
        type: 'text/csv'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        this.$toast[type](message);
      } else {
        // Fallback for when toast is not available
        if (type === 'error') {
          alert(`Error: ${message}`);
        } else if (type === 'success') {
          console.log(`✅ ${message}`);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/moneyAdvanceSettlement/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_moneyAdvanceSettlementvue_type_script_lang_js_ = (moneyAdvanceSettlementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/moneyAdvanceSettlement/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(863)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_moneyAdvanceSettlementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "49e87fba",
  "fae257a2"
  
)

/* harmony default export */ var moneyAdvanceSettlement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(530);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0f3044aa", content, true, context)
};

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(478);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-284f8c8b]{align-items:center;animation:fadeIn-284f8c8b .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-284f8c8b{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-284f8c8b]{animation:slideIn-284f8c8b .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow:hidden;width:95%}@keyframes slideIn-284f8c8b{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-284f8c8b]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-284f8c8b]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-284f8c8b]{font-size:20px;opacity:.9}.modal-title[data-v-284f8c8b]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-284f8c8b]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-284f8c8b]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-284f8c8b]{max-height:60vh;overflow-y:auto;padding:24px}.form-loading[data-v-284f8c8b]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-284f8c8b]{animation:spin-284f8c8b 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-284f8c8b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid[data-v-284f8c8b]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-284f8c8b]{margin-bottom:0}.form-group.full-width[data-v-284f8c8b]{grid-column:1/-1}.form-label[data-v-284f8c8b]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-284f8c8b]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-284f8c8b]{color:#6b7280;font-size:12px}.currency-note[data-v-284f8c8b]{color:#6b7280}.currency-note[data-v-284f8c8b],.exchange-rate-note[data-v-284f8c8b]{font-size:11px;font-style:italic;font-weight:400}.exchange-rate-note[data-v-284f8c8b]{color:#059669}.form-control[data-v-284f8c8b]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-284f8c8b]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control[data-v-284f8c8b]:disabled{background-color:#f3f4f6;border-color:#d1d5db;color:#6b7280;cursor:not-allowed}.form-control.is-invalid[data-v-284f8c8b]{border-color:#e74c3c}.invalid-feedback[data-v-284f8c8b]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.input-group[data-v-284f8c8b]{border-radius:8px;display:flex;overflow:hidden}.input-group .form-control[data-v-284f8c8b]{border-radius:0;border-right:none}.input-group-append[data-v-284f8c8b]{display:flex}.input-group-text[data-v-284f8c8b]{background:#f8f9fa;border:2px solid #e5e7eb;border-left:none;color:#6b7280;font-size:14px;font-weight:600;padding:12px 16px}.custom-select-wrapper[data-v-284f8c8b]{position:relative}.custom-select[data-v-284f8c8b]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-284f8c8b]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.custom-select:disabled+.select-icon[data-v-284f8c8b]{color:#9ca3af}.custom-select-wrapper[data-v-284f8c8b]:has(.form-control:disabled){opacity:.7}.link-advance-options[data-v-284f8c8b]{display:flex;gap:20px;margin-top:8px}.radio-option[data-v-284f8c8b]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.radio-option input[type=radio][data-v-284f8c8b]{margin:0}.radio-label[data-v-284f8c8b]{font-weight:500}.form-group.full-width[data-v-284f8c8b]:has([v-if*=\"formData.linkToAdvance === 'true'\"]){background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05);margin:16px 0;padding:20px;transition:all .3s ease}.money-advance-section[data-v-284f8c8b]{animation:slideInUp-284f8c8b .4s ease-out;background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05);margin:16px 0;padding:20px;position:relative;transition:all .3s ease}@keyframes slideInUp-284f8c8b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.money-advance-section[data-v-284f8c8b]:before{background:linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6);border-radius:12px 12px 0 0;content:\"\";height:4px;left:0;position:absolute;right:0;top:0}.money-advance-section[data-v-284f8c8b]:hover{border-color:#cbd5e1;box-shadow:0 4px 12px rgba(0,0,0,.08);transform:translateY(-1px)}.money-advance-section .form-label[data-v-284f8c8b]{color:#1e293b;font-size:15px;font-weight:700;margin-bottom:16px}.money-advance-section .form-label i[data-v-284f8c8b]{color:#3b82f6;font-size:14px;margin-right:10px}.money-advance-section .btn-outline-primary[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f8fafc);border:2px solid #3b82f6;box-shadow:0 2px 4px rgba(59,130,246,.1);color:#1e40af;font-weight:600;transition:all .2s ease}.money-advance-section .btn-outline-primary[data-v-284f8c8b]:hover{background:linear-gradient(135deg,#3b82f6,#6366f1);box-shadow:0 4px 8px rgba(59,130,246,.3);color:#fff;transform:translateY(-1px)}.money-advance-section .btn-outline-primary[data-v-284f8c8b]:disabled{background:#f1f5f9;border-color:#cbd5e1;box-shadow:none;color:#94a3b8;transform:none}.advance-selection-container[data-v-284f8c8b]{align-items:flex-start;display:flex;gap:12px;margin-bottom:16px}.advance-selection-container .custom-select-wrapper[data-v-284f8c8b]{flex:1}.money-advance-section .custom-select[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f8fafc);border:2px solid #cbd5e1;box-shadow:0 2px 4px rgba(0,0,0,.05);color:#1e293b;font-weight:500}.money-advance-section .custom-select[data-v-284f8c8b]:focus{background:#fff;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1)}.money-advance-section .select-icon[data-v-284f8c8b]{color:#3b82f6}.money-advance-section .advance-info[data-v-284f8c8b]{background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #bfdbfe;border-radius:10px;box-shadow:0 2px 4px rgba(59,130,246,.1);margin-top:16px;padding:16px}.money-advance-section .advance-details[data-v-284f8c8b]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.money-advance-section .advance-detail-item[data-v-284f8c8b]{align-items:center;background:hsla(0,0%,100%,.7);border:1px solid rgba(191,219,254,.5);border-radius:6px;color:#1e40af;display:flex;font-size:13px;gap:8px;padding:8px 12px}.money-advance-section .advance-detail-item i[data-v-284f8c8b]{color:#3b82f6;flex-shrink:0;font-size:12px;width:16px}.money-advance-section .advance-label[data-v-284f8c8b]{color:#1e40af;font-weight:600;min-width:60px}.money-advance-section .advance-value[data-v-284f8c8b]{color:#1e293b;font-weight:700}.money-advance-section .advance-value.amount[data-v-284f8c8b]{color:#059669;font-size:15px;font-weight:800}.money-advance-section .field-hint.warning[data-v-284f8c8b]{background:linear-gradient(135deg,#fef3c7,#fde68a);border:1px solid #f59e0b;border-radius:8px;color:#92400e;font-weight:600;margin-top:16px;padding:12px 16px}.money-advance-section .field-hint.warning i[data-v-284f8c8b]{color:#f59e0b}.advance-info[data-v-284f8c8b]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;margin-top:12px;padding:12px}.advance-details[data-v-284f8c8b]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.advance-detail-item[data-v-284f8c8b]{align-items:center;color:#075985;display:flex;font-size:12px;gap:8px}.advance-detail-item i[data-v-284f8c8b]{color:#0ea5e9;flex-shrink:0;width:14px}.advance-label[data-v-284f8c8b]{font-weight:500;min-width:60px}.advance-value[data-v-284f8c8b]{font-weight:600}.advance-value.amount[data-v-284f8c8b]{color:#059669;font-size:14px}.status-badge[data-v-284f8c8b]{border-radius:12px;font-size:10px;font-weight:600;letter-spacing:.5px;padding:4px 8px;text-transform:uppercase}.status-badge.pending[data-v-284f8c8b]{background:#fef3c7;color:#92400e}.status-badge.approved[data-v-284f8c8b]{background:#d1fae5;color:#065f46}.status-badge.settled[data-v-284f8c8b]{background:#dbeafe;color:#1e40af}.ministry-info[data-v-284f8c8b]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;margin-top:12px;padding:12px}.ministry-details[data-v-284f8c8b]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr}.ministry-detail-item[data-v-284f8c8b]{align-items:center;color:#075985;display:flex;font-size:12px;gap:8px}.ministry-detail-item i[data-v-284f8c8b]{color:#0ea5e9;flex-shrink:0;width:14px}.ministry-name[data-v-284f8c8b]{font-weight:600}.ministry-code[data-v-284f8c8b]{background:#e0f2fe;border-radius:4px;font-family:monospace;padding:2px 6px}.bank-account-info[data-v-284f8c8b]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;margin-top:12px;padding:12px}.bank-details[data-v-284f8c8b]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr 1fr}.bank-detail-item[data-v-284f8c8b]{align-items:center;color:#6b7280;display:flex;font-size:12px;gap:6px}.bank-detail-item i[data-v-284f8c8b]{color:#667eea;width:12px}.bank-detail-item .branch[data-v-284f8c8b]{color:#9ca3af;font-style:italic}.invoice-list[data-v-284f8c8b]{border:1px solid #e9ecef;border-radius:4px;max-height:200px;overflow-y:auto;padding:8px}.invoice-item[data-v-284f8c8b]{margin-bottom:8px}.invoice-item[data-v-284f8c8b]:last-child{margin-bottom:0}.invoice-checkbox[data-v-284f8c8b]{align-items:flex-start;border-radius:4px;cursor:pointer;display:flex;padding:8px;transition:background-color .2s}.invoice-checkbox[data-v-284f8c8b]:hover{background-color:#f8f9fa}.invoice-checkbox input[type=checkbox][data-v-284f8c8b]{margin-right:12px;margin-top:4px}.invoice-details[data-v-284f8c8b]{flex:1}.invoice-number[data-v-284f8c8b]{color:#333;font-size:14px;font-weight:600}.invoice-vendor[data-v-284f8c8b]{color:#666;font-size:13px;margin-top:2px}.invoice-amount[data-v-284f8c8b]{color:#28a745;font-size:13px;font-weight:600;margin-top:2px}.invoice-due[data-v-284f8c8b]{color:#666;font-size:12px;margin-top:2px}.selected-summary[data-v-284f8c8b]{background-color:#e7f3ff;border-radius:4px;color:#06c;font-size:14px;font-weight:600;margin-top:12px;padding:8px 12px}.field-hint[data-v-284f8c8b]{align-items:center;display:flex;font-size:12px;gap:6px;justify-content:space-between;margin-top:6px}.field-hint.error[data-v-284f8c8b]{color:#e74c3c}.field-hint.warning[data-v-284f8c8b]{color:#f39c12}.field-hint.info[data-v-284f8c8b]{background-color:#dbeafe;border-left:4px solid #3b82f6;border-radius:4px;color:#1e40af;padding:8px 12px}.text-counter[data-v-284f8c8b]{color:#9ca3af;font-size:11px;margin-left:auto}.form-errors[data-v-284f8c8b]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-284f8c8b]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-284f8c8b]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-284f8c8b],.modal-footer[data-v-284f8c8b]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-284f8c8b]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-284f8c8b]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-284f8c8b]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-284f8c8b]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-284f8c8b]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-284f8c8b]{background:transparent;border:2px solid #667eea;color:#667eea}.btn-outline-primary[data-v-284f8c8b]:hover{background:#667eea;color:#fff}.btn-sm[data-v-284f8c8b]{font-size:12px;padding:8px 16px}.btn[data-v-284f8c8b]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-284f8c8b]{animation:spin-284f8c8b 1s linear infinite}.browser-overlay[data-v-284f8c8b]{z-index:1100!important}.advance-browser-dialog[data-v-284f8c8b]{max-height:80vh;max-width:900px;z-index:1101!important}.advance-browser-dialog .modal-body[data-v-284f8c8b]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border-radius:0 0 12px 12px;padding:24px;position:relative}.advance-browser-dialog .modal-body[data-v-284f8c8b]:before{background:radial-gradient(circle at 20% 80%,rgba(120,119,198,.03) 0,transparent 50%),radial-gradient(circle at 80% 20%,rgba(255,119,198,.03) 0,transparent 50%),radial-gradient(circle at 40% 40%,rgba(120,200,255,.03) 0,transparent 50%);border-radius:0 0 12px 12px;bottom:0;content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0}.advance-browser-dialog .modal-header[data-v-284f8c8b]{background:linear-gradient(135deg,#667eea,#764ba2);overflow:hidden;position:relative}.advance-browser-dialog .modal-header[data-v-284f8c8b]:before{background:radial-gradient(circle at 20% 20%,hsla(0,0%,100%,.1) 0,transparent 50%),radial-gradient(circle at 80% 80%,hsla(0,0%,100%,.1) 0,transparent 50%);bottom:0;content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0}.advance-filters[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f8fafc);border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05);margin-bottom:20px;padding:20px;position:relative}.advance-filters[data-v-284f8c8b]:before{background:linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6);border-radius:12px 12px 0 0;content:\"\";height:4px;left:0;position:absolute;right:0;top:0}.filter-row[data-v-284f8c8b]{grid-gap:16px;align-items:center;display:grid;gap:16px;grid-template-columns:1fr auto}.filter-group[data-v-284f8c8b]{margin:0}.filter-group label[data-v-284f8c8b]{color:#374151;display:block;font-size:14px;font-weight:600;margin-bottom:8px}.advance-filters .form-control[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f9fafb);border:2px solid #d1d5db;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#374151;font-size:14px;font-weight:500;padding:12px 16px;transition:all .2s ease}.advance-filters .form-control[data-v-284f8c8b]:focus{background:#fff;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1);outline:none}.advance-filters .form-control[data-v-284f8c8b]::-moz-placeholder{color:#9ca3af;font-style:italic}.advance-filters .form-control[data-v-284f8c8b]::placeholder{color:#9ca3af;font-style:italic}.advances-list[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f8fafc);border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.08);max-height:400px;overflow-y:auto;position:relative}.advances-list[data-v-284f8c8b]:before{background:linear-gradient(90deg,#10b981,#3b82f6,#8b5cf6);border-radius:12px 12px 0 0;content:\"\";height:3px;left:0;position:absolute;right:0;top:0;z-index:1}.empty-state[data-v-284f8c8b],.loading-state[data-v-284f8c8b]{align-items:center;background:linear-gradient(135deg,#f9fafb,#f3f4f6);border-radius:10px;color:#6b7280;display:flex;flex-direction:column;justify-content:center;margin:16px;padding:60px 40px}.loading-state[data-v-284f8c8b]{background:linear-gradient(135deg,#eff6ff,#dbeafe);color:#1e40af}.empty-state[data-v-284f8c8b]{background:linear-gradient(135deg,#fef3c7,#fde68a);color:#92400e}.empty-state i[data-v-284f8c8b]{color:#d97706;font-size:48px;margin-bottom:16px}.empty-state p[data-v-284f8c8b],.loading-state p[data-v-284f8c8b]{font-size:16px;font-weight:600;margin:8px 0 0}.advance-items[data-v-284f8c8b]{display:flex;flex-direction:column;padding:8px}.advance-item[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f9fafb);border:2px solid #e5e7eb;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,.05);cursor:pointer;margin-bottom:12px;overflow:hidden;padding:18px;position:relative;transition:all .3s ease}.advance-item[data-v-284f8c8b]:before{background:linear-gradient(180deg,#e5e7eb,#d1d5db);bottom:0;content:\"\";left:0;position:absolute;top:0;transition:all .3s ease;width:4px}.advance-item[data-v-284f8c8b]:hover{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border-color:#60a5fa;box-shadow:0 8px 20px rgba(96,165,250,.15);transform:translateY(-2px)}.advance-item[data-v-284f8c8b]:hover:before{background:linear-gradient(180deg,#3b82f6,#1d4ed8);width:6px}.advance-item.selected[data-v-284f8c8b]{background:linear-gradient(135deg,#dbeafe,#bfdbfe);border-color:#3b82f6;box-shadow:0 6px 16px rgba(59,130,246,.2);transform:translateY(-1px)}.advance-item.selected[data-v-284f8c8b]:before{background:linear-gradient(180deg,#1d4ed8,#1e40af);width:6px}.advance-item[data-v-284f8c8b]:last-child{margin-bottom:8px}.advance-item-content[data-v-284f8c8b]{display:flex;flex-direction:column;gap:12px}.advance-item-header[data-v-284f8c8b]{align-items:center;display:flex;justify-content:space-between;margin-bottom:8px}.advance-id[data-v-284f8c8b]{background:linear-gradient(135deg,#f1f5f9,#e2e8f0);border:1px solid #cbd5e1;border-radius:6px;color:#1e293b;font-family:\"Courier New\",monospace;font-size:14px;font-weight:700;padding:6px 12px}.advance-item.selected .advance-id[data-v-284f8c8b]{background:linear-gradient(135deg,#1e40af,#1d4ed8);border-color:#1e40af;color:#fff}.advance-item-body[data-v-284f8c8b]{grid-gap:12px;background:hsla(0,0%,100%,.7);border:1px solid rgba(229,231,235,.8);border-radius:8px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));padding:16px}.advance-item.selected .advance-item-body[data-v-284f8c8b]{background:hsla(0,0%,100%,.9);border-color:rgba(59,130,246,.3)}.advance-amount[data-v-284f8c8b]{background:linear-gradient(135deg,#d1fae5,#a7f3d0);border:1px solid #34d399;border-radius:6px;color:#059669;font-size:16px;font-weight:800;padding:8px 12px;text-align:center}.advance-date[data-v-284f8c8b]{background:linear-gradient(135deg,#f3f4f6,#e5e7eb);border:1px solid #d1d5db;border-radius:6px;color:#6b7280;font-size:13px;font-weight:600;padding:6px 10px}.advance-purpose[data-v-284f8c8b]{background:linear-gradient(135deg,#fef3c7,#fde68a);border:1px solid #f59e0b;border-radius:6px;color:#374151;font-size:13px;font-style:italic;font-weight:500;padding:8px 12px}.advance-maker[data-v-284f8c8b]{background:linear-gradient(135deg,#ede9fe,#ddd6fe);border:1px solid #a78bfa;border-radius:6px;color:#6b7280;font-size:13px;font-weight:600;padding:6px 10px}.advance-item .status-badge[data-v-284f8c8b]{border:2px solid;border-radius:20px;box-shadow:0 2px 4px rgba(0,0,0,.1);font-size:11px;font-weight:700;letter-spacing:.5px;padding:6px 12px;text-transform:uppercase}.advance-item .status-badge.pending[data-v-284f8c8b]{background:linear-gradient(135deg,#fef3c7,#fde68a);border-color:#f59e0b;color:#92400e}.advance-item .status-badge.approved[data-v-284f8c8b]{background:linear-gradient(135deg,#d1fae5,#a7f3d0);border-color:#10b981;color:#065f46}.advances-list[data-v-284f8c8b]::-webkit-scrollbar{width:8px}.advances-list[data-v-284f8c8b]::-webkit-scrollbar-track{background:linear-gradient(135deg,#f1f5f9,#e2e8f0);border-radius:10px}.advances-list[data-v-284f8c8b]::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#94a3b8,#64748b);background-clip:content-box;border:2px solid transparent;border-radius:10px}.advances-list[data-v-284f8c8b]::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#64748b,#475569);background-clip:content-box}.loading-state .spinner-small[data-v-284f8c8b]{animation:spin-284f8c8b 1s linear infinite;border:3px solid #dbeafe;border-radius:50%;border-top-color:#3b82f6;height:32px;margin:0 auto 16px;width:32px}.advance-filters .filter-group[data-v-284f8c8b]:first-child:before{color:#6b7280;content:\"🔍 ຄົ້ນຫາ\";display:block;font-size:12px;font-weight:600;margin-bottom:6px}.advance-filters .filter-group[data-v-284f8c8b]:last-child:before{color:#6b7280;content:\"📊 ສະຖານະ\";display:block;font-size:12px;font-weight:600;margin-bottom:6px}.advance-browser-dialog .modal-footer[data-v-284f8c8b]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border-radius:0 0 12px 12px;border-top:2px solid #e2e8f0;padding:20px 24px}.advance-browser-dialog .modal-footer .btn[data-v-284f8c8b]{border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);font-size:14px;font-weight:600;min-width:120px;padding:12px 24px;transition:all .2s ease}.advance-browser-dialog .modal-footer .btn-secondary[data-v-284f8c8b]{background:linear-gradient(135deg,#6b7280,#4b5563);border:2px solid #6b7280;color:#fff}.advance-browser-dialog .modal-footer .btn-secondary[data-v-284f8c8b]:hover{background:linear-gradient(135deg,#4b5563,#374151);box-shadow:0 4px 8px hsla(220,9%,46%,.3);transform:translateY(-1px)}.advance-browser-dialog .modal-footer .btn-primary[data-v-284f8c8b]{background:linear-gradient(135deg,#3b82f6,#1d4ed8);border:2px solid #3b82f6;color:#fff}.advance-browser-dialog .modal-footer .btn-primary[data-v-284f8c8b]:hover:not(:disabled){background:linear-gradient(135deg,#1d4ed8,#1e40af);box-shadow:0 4px 12px rgba(59,130,246,.4);transform:translateY(-1px)}.advance-browser-dialog .modal-footer .btn-primary[data-v-284f8c8b]:disabled{background:linear-gradient(135deg,#9ca3af,#6b7280);border-color:#9ca3af;box-shadow:none;cursor:not-allowed;transform:none}.advance-browser-dialog[data-v-284f8c8b]{animation:modalSlideIn-284f8c8b .4s ease-out}@keyframes modalSlideIn-284f8c8b{0%{opacity:0;transform:translateY(-30px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}.advance-item[data-v-284f8c8b]{animation:itemFadeIn-284f8c8b .3s ease-out forwards;opacity:0}.advance-item[data-v-284f8c8b]:first-child{animation-delay:.1s}.advance-item[data-v-284f8c8b]:nth-child(2){animation-delay:.15s}.advance-item[data-v-284f8c8b]:nth-child(3){animation-delay:.2s}.advance-item[data-v-284f8c8b]:nth-child(4){animation-delay:.25s}.advance-item[data-v-284f8c8b]:nth-child(5){animation-delay:.3s}.advance-item[data-v-284f8c8b]:nth-child(n+6){animation-delay:.35s}@keyframes itemFadeIn-284f8c8b{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.advance-item.selected[data-v-284f8c8b]{animation:selectedPulse-284f8c8b 2s ease-in-out infinite alternate}@keyframes selectedPulse-284f8c8b{0%{box-shadow:0 6px 16px rgba(59,130,246,.2)}to{box-shadow:0 8px 20px rgba(59,130,246,.3)}}@media (max-width:768px){.enhanced-dialog[data-v-284f8c8b]{margin:10px;width:98%}.advance-details[data-v-284f8c8b],.bank-details[data-v-284f8c8b],.form-grid[data-v-284f8c8b],.ministry-details[data-v-284f8c8b]{grid-template-columns:1fr}.modal-body[data-v-284f8c8b],.modal-header[data-v-284f8c8b]{padding:16px}.enhanced-footer[data-v-284f8c8b],.modal-footer[data-v-284f8c8b]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-284f8c8b],.modal-footer .btn[data-v-284f8c8b]{justify-content:center;width:100%}.link-advance-options[data-v-284f8c8b]{flex-direction:column;gap:12px}.advance-selection-container[data-v-284f8c8b]{flex-direction:column}.advance-item-body[data-v-284f8c8b]{gap:8px}.advance-filters[data-v-284f8c8b]{padding:16px}.advance-filters[data-v-284f8c8b]:before{height:3px}.filter-row[data-v-284f8c8b]{gap:12px;grid-template-columns:1fr}.advance-item[data-v-284f8c8b]{margin-bottom:8px;padding:16px 12px}.advance-item-body[data-v-284f8c8b]{grid-template-columns:1fr;padding:12px}.advance-amount[data-v-284f8c8b]{font-size:15px}.advance-id[data-v-284f8c8b]{font-size:13px;padding:4px 8px}.empty-state[data-v-284f8c8b],.loading-state[data-v-284f8c8b]{padding:40px 20px}.advances-list[data-v-284f8c8b]{max-height:300px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(611);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6ba9f626", content, true, context)
};

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(613);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("496668d0", content, true, context)
};

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=template&id=284f8c8b&scoped=true&
var render = function render() {
  var _vm$user, _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-284f8c8b><div class=\"modal-title-section\" data-v-284f8c8b><i class=\"fas fa-money-bill-wave modal-icon\" data-v-284f8c8b></i> <h5 class=\"modal-title\" data-v-284f8c8b>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ລົງລາຍຮັບ ການຊຳລະ') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-284f8c8b><i class=\"fas fa-times\" data-v-284f8c8b></i></button></div> "), _vm._ssrNode("<form data-v-284f8c8b>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-284f8c8b>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"form-loading\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-284f8c8b></div> <p data-v-284f8c8b>Loading form data...</p>")], 2) : _vm._ssrNode("<div class=\"form-grid\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b><label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-calendar\" data-v-284f8c8b></i>\n              ວັນທີລົງຊຳລະ\n            </label> <input type=\"date\"" + _vm._ssrAttr("max", _vm.today) + " required=\"required\"" + _vm._ssrAttr("value", _vm.formData.settlementDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.settlementDate
  }) + " data-v-284f8c8b> " + (_vm.errors.settlementDate ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.settlementDate) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-credit-card\" data-v-284f8c8b></i>\n              ວິທີການຊຳລະ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.method,
      expression: "formData.method"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.method
    },
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
      "value": "bank_transfer"
    }
  }, [_vm._v("\n                  ໂອນຜ່ານທະນາຄານ (Bank Transfer)\n                ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "deduction"
    }
  }, [_vm._v("ຫັກລົບ (Deduction)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.method ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.method) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-284f8c8b><label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-link\" data-v-284f8c8b></i>\n              ເຊື່ອມຕໍ່ກັບລາຍຈ່າຍລ່ວງໜ້າ\n            </label> <div class=\"link-advance-options\" data-v-284f8c8b><label class=\"radio-option\" data-v-284f8c8b><input type=\"radio\" value=\"false\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "false")) + " data-v-284f8c8b> <span class=\"radio-label\" data-v-284f8c8b>ບໍ່ເຊື່ອມຕໍ່</span></label> <label class=\"radio-option\" data-v-284f8c8b><input type=\"radio\" value=\"true\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "true")) + " data-v-284f8c8b> <span class=\"radio-label\" data-v-284f8c8b>ເຊື່ອມຕໍ່ກັບລາຍຈ່າຍລ່ວງໜ້າ</span></label></div></div> "), _vm.formData.linkToAdvance === 'true' ? _vm._ssrNode("<div class=\"form-group full-width money-advance-section\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-search\" data-v-284f8c8b></i>\n              ເລືອກລາຍຈ່າຍລ່ວງໜ້າ\n            </label> "), _vm._ssrNode("<div class=\"advance-selection-container\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.moneyAdvanceId,
      expression: "formData.moneyAdvanceId"
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
        _vm.$set(_vm.formData, "moneyAdvanceId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedAdvance]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກລາຍຈ່າຍລ່ວງໜ້າ")]), _vm._v(" "), _vm._l(_vm.availableAdvances, function (advance) {
    return _c('option', {
      key: advance.id,
      domProps: {
        "value": advance.id
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatAdvanceOption(advance)) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loadingAdvances) + " class=\"btn btn-outline-primary btn-sm\" data-v-284f8c8b>" + (_vm.loadingAdvances ? "<i class=\"fas fa-spinner fa-spin\" data-v-284f8c8b></i>" : "<i class=\"fas fa-search\" data-v-284f8c8b></i>") + "\n                ເລືອກ\n              </button>")], 2), _vm._ssrNode(" " + (_vm.selectedAdvance ? "<div class=\"advance-info\" data-v-284f8c8b><div class=\"advance-details\" data-v-284f8c8b><div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-hashtag\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ລະຫັດ:</span> <span class=\"advance-value\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedAdvance.id)) + "</span></div> <div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-calendar\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ວັນທີ:</span> <span class=\"advance-value\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedAdvance.bookingDate))) + "</span></div> <div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-dollar-sign\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ຈຳນວນ:</span> <span class=\"advance-value amount\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.selectedAdvance.amount, _vm.selectedAdvance.currency.code))) + "</span></div> " + (_vm.selectedAdvance.purpose ? "<div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-tag\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ຈຸດປະສົງ:</span> <span class=\"advance-value\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedAdvance.purpose)) + "</span></div>" : "<!---->") + " <div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ສະຖານະ:</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.selectedAdvance.status]) + " data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(_vm.selectedAdvance.status)) + "\n                  ") + "</span></div></div></div>" : "<!---->") + " " + (_vm.availableAdvances.length === 0 && !_vm.loadingAdvances ? "<div class=\"field-hint warning\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              ບໍ່ມີລາຍຈ່າຍລ່ວງໜ້າທີ່ສາມາດເຊື່ອມຕໍ່ໄດ້\n            </div>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" <div class=\"form-group\" data-v-284f8c8b><label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-dollar-sign\" data-v-284f8c8b></i>\n              ຈຳນວນເງິນ\n            </label> <div class=\"input-group\" data-v-284f8c8b><input type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"0.00\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.amount) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.amount
  }) + " data-v-284f8c8b> <div class=\"input-group-append\" data-v-284f8c8b><span class=\"input-group-text\" data-v-284f8c8b>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.selectedCurrencyCode) + "\n                ") + "</span></div></div> " + (_vm.errors.amount ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.amount) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.isLinkedToAdvance && _vm.selectedAdvance ? "<div class=\"field-hint info\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              ຈຳນວນເງິນຖືກກຳນົດໂດຍອັດຕະໂນມັດຕາມລາຍຈ່າຍລ່ວງໜ້າ\n            </div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-coins\" data-v-284f8c8b></i>\n              ສະກຸນເງິນ\n              " + (_vm.isLinkedToAdvance ? "<span class=\"currency-note\" data-v-284f8c8b>\n                (ຕາມລາຍຈ່າຍລ່ວງໜ້າ)\n              </span>" : "<!---->") + "</label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.currencyId,
      expression: "formData.currencyId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.currencyId
    },
    attrs: {
      "required": "",
      "disabled": _vm.isLinkedToAdvance
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
    }, [_vm._v("\n                  " + _vm._s(currency.code || currency.currencyCode) + " -\n                  " + _vm._s(currency.name || currency.currencyName) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.currencyId) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.isLinkedToAdvance && _vm.selectedAdvance ? "<div class=\"field-hint info\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              ສະກຸນເງິນຖືກກຳນົດໂດຍອັດຕະໂນມັດຕາມລາຍຈ່າຍລ່ວງໜ້າ\n            </div>" : "<!---->") + " " + (_vm.currencies.length === 0 ? "<div class=\"field-hint error\" data-v-284f8c8b><i class=\"fas fa-exclamation-triangle\" data-v-284f8c8b></i>\n              No currencies available. Please contact administrator.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-284f8c8b><label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-exchange-alt\" data-v-284f8c8b></i>\n              ອັດຕາແລກປ່ຽນ\n              <span class=\"exchange-rate-note\" data-v-284f8c8b>" + _vm._ssrEscape("\n                (" + _vm._s(_vm.selectedCurrencyCode) + " ຕໍ່ LAK)\n              ") + "</span></label> <div class=\"input-group\" data-v-284f8c8b><input type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.formData.exchangeRate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-284f8c8b> <div class=\"input-group-append\" data-v-284f8c8b><span class=\"input-group-text\" data-v-284f8c8b><i class=\"fas fa-calculator\" data-v-284f8c8b></i></span></div></div> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.exchangeRate) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.showEquivalentAmount ? "<div class=\"field-hint info\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>" + _vm._ssrEscape("\n              ເທົ່າກັບ " + _vm._s(_vm.formatCurrency(_vm.equivalentAmountLAK)) + " LAK\n            ") + "</div>" : "<!---->") + " " + (_vm.isBaseCurrency ? "<div class=\"field-hint info\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              ສະກຸນເງິນພື້ນຖານ (LAK) - ອັດຕາແລກປ່ຽນ = 1\n            </div>" : "<!---->") + "</div> "), _vm.formData.method === 'bank_transfer' ? _vm._ssrNode("<div class=\"form-group full-width\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-university\" data-v-284f8c8b></i>\n              ບັນຊີທະນາຄານ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.bankAccountId,
      expression: "formData.bankAccountId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.bankAccountId
    },
    attrs: {
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
    }, [_vm._v("\n                  " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + " (" + _vm._s(account.accountName) + ")\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.bankAccountId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.bankAccountId) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.selectedBankAccount ? "<div class=\"bank-account-info\" data-v-284f8c8b><div class=\"bank-details\" data-v-284f8c8b><div class=\"bank-detail-item\" data-v-284f8c8b><i class=\"fas fa-building\" data-v-284f8c8b></i> <span data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.bankName)) + "</span> " + (_vm.selectedBankAccount.bankBranch ? "<span class=\"branch\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    (" + _vm._s(_vm.selectedBankAccount.bankBranch) + ")\n                  ") + "</span>" : "<!---->") + "</div> <div class=\"bank-detail-item\" data-v-284f8c8b><i class=\"fas fa-credit-card\" data-v-284f8c8b></i> <span data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountNumber)) + "</span></div> <div class=\"bank-detail-item\" data-v-284f8c8b><i class=\"fas fa-tag\" data-v-284f8c8b></i> <span data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountType || _vm.selectedBankAccount.accountName)) + "</span></div> <div class=\"bank-detail-item\" data-v-284f8c8b><i class=\"fas fa-coins\" data-v-284f8c8b></i> <span data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.currency)) + "</span></div></div></div>" : "<!---->") + " " + (_vm.bankAccounts.length === 0 ? "<div class=\"field-hint warning\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              No bank accounts available. You can still create the settlement\n              without selecting a bank account.\n            </div>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-building\" data-v-284f8c8b></i>\n              ກະຊວງ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ministryId,
      expression: "formData.ministryId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.ministryId
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
    }, [_vm._v("\n                  " + _vm._s(ministry.ministryCode) + " - " + _vm._s(ministry.ministryName) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.ministryId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.ministryId) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.selectedMinistry ? "<div class=\"ministry-info\" data-v-284f8c8b><div class=\"ministry-details\" data-v-284f8c8b><div class=\"ministry-detail-item\" data-v-284f8c8b><i class=\"fas fa-building\" data-v-284f8c8b></i> <span class=\"ministry-name\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryName)) + "</span></div> <div class=\"ministry-detail-item\" data-v-284f8c8b><i class=\"fas fa-tag\" data-v-284f8c8b></i> <span class=\"ministry-code\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryCode)) + "</span></div></div></div>" : "<!---->") + " " + (_vm.ministries.length === 0 ? "<div class=\"field-hint warning\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              No ministries available. You can still create the settlement\n              without selecting a ministry.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-chart-line\" data-v-284f8c8b></i>\n              ບັນຊີລວມ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.chartAccountId,
      expression: "formData.chartAccountId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.chartAccountId
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
    }, [_vm._v("\n                  " + _vm._s(chartAccount.accountNumber) + " -\n                  " + _vm._s(chartAccount.accountName) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.chartAccountId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.chartAccountId) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" " + (_vm.formData.method === 'deduction' ? "<div class=\"form-group full-width\" data-v-284f8c8b><label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-file-invoice\" data-v-284f8c8b></i>\n              ໃບແຈ້ງໜີ້ທີ່ຄ້າງຊຳລະ\n            </label> <div class=\"invoice-list\" data-v-284f8c8b>" + _vm._ssrList(_vm.outstandingInvoices, function (invoice) {
    var _invoice$vendor;
    return "<div class=\"invoice-item\" data-v-284f8c8b><label class=\"invoice-checkbox\" data-v-284f8c8b><input type=\"checkbox\"" + _vm._ssrAttr("value", invoice.id) + _vm._ssrAttr("checked", Array.isArray(_vm.formData.selectedInvoices) ? _vm._i(_vm.formData.selectedInvoices, invoice.id) > -1 : _vm.formData.selectedInvoices) + " data-v-284f8c8b> <div class=\"invoice-details\" data-v-284f8c8b><div class=\"invoice-number\" data-v-284f8c8b>" + _vm._ssrEscape("\n                      " + _vm._s(invoice.invoiceNumber) + "\n                    ") + "</div> <div class=\"invoice-vendor\" data-v-284f8c8b>" + _vm._ssrEscape("\n                      " + _vm._s((_invoice$vendor = invoice.vendor) === null || _invoice$vendor === void 0 ? void 0 : _invoice$vendor.name) + "\n                    ") + "</div> <div class=\"invoice-amount\" data-v-284f8c8b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatCurrency(invoice.outstandingAmount, invoice.currency.code)) + "\n                    ") + "</div> <div class=\"invoice-due\" data-v-284f8c8b>" + _vm._ssrEscape("\n                      ຄົບກຳຫນົດ: " + _vm._s(_vm.formatDate(invoice.dueDate)) + "\n                    ") + "</div></div></label></div>";
  }) + "</div> " + (_vm.formData.selectedInvoices.length > 0 ? "<div class=\"selected-summary\" data-v-284f8c8b>" + _vm._ssrEscape("\n              ຈຳນວນທີ່ເລືອກ: " + _vm._s(_vm.formatCurrency(_vm.selectedInvoicesTotal)) + "\n            ") + "</div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-user\" data-v-284f8c8b></i>\n              ຜູ້ລົງບັນຊີ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.userId,
      expression: "formData.userId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.userId
    },
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
    }, [_vm._v("\n                  " + _vm._s(user.cus_name || user.name || user.username) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.userId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.userId) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.users.length === 0 ? "<div class=\"field-hint error\" data-v-284f8c8b><i class=\"fas fa-exclamation-triangle\" data-v-284f8c8b></i>\n              No users available. Please contact administrator.\n            </div>" : "<!---->") + " <div class=\"field-hint info\" style=\"margin-top: 4px\" data-v-284f8c8b><small data-v-284f8c8b>" + _vm._ssrEscape("Selected: " + _vm._s(_vm.formData.userId || 'None') + " | Current User:\n                " + _vm._s(((_vm$user = _vm.user) === null || _vm$user === void 0 ? void 0 : _vm$user.id) || 'None')) + "</small></div>")], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-284f8c8b><label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-sticky-note\" data-v-284f8c8b></i>\n              ໝາຍເຫດ\n            </label> <textarea rows=\"3\" placeholder=\"ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-284f8c8b><span class=\"text-counter\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-284f8c8b><h6 data-v-284f8c8b><i class=\"fas fa-exclamation-circle\" data-v-284f8c8b></i>\n            Please fix the following errors:\n          </h6> <ul data-v-284f8c8b>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-284f8c8b><button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" style=\"margin-right: auto\" data-v-284f8c8b><i class=\"fas fa-bug\" data-v-284f8c8b></i>\n          Debug\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-284f8c8b><i class=\"fas fa-times\" data-v-284f8c8b></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-284f8c8b>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-284f8c8b></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-284f8c8b></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'Saving...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)], 2), _vm._ssrNode(" "), _vm.showAdvanceBrowser ? _vm._ssrNode("<div class=\"modal-overlay browser-overlay\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog advance-browser-dialog\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-284f8c8b><div class=\"modal-title-section\" data-v-284f8c8b><i class=\"fas fa-search modal-icon\" data-v-284f8c8b></i> <h5 class=\"modal-title\" data-v-284f8c8b>ເລືອກລາຍຈ່າຍລ່ວງໜ້າ</h5></div> <button class=\"close-btn\" data-v-284f8c8b><i class=\"fas fa-times\" data-v-284f8c8b></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"advance-filters\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-284f8c8b><input type=\"text\" placeholder=\"ຄົ້ນຫາຕາມຈຸດປະສົງ, ໝາຍເຫດ...\"" + _vm._ssrAttr("value", _vm.advanceSearch.query) + " class=\"form-control\" data-v-284f8c8b></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.advanceSearch.status,
      expression: "advanceSearch.status"
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
  }, [_vm._v("ອະນຸມັດ")])])])], 2)]), _vm._ssrNode(" <div class=\"advances-list\" data-v-284f8c8b>" + (_vm.loadingAdvances ? "<div class=\"loading-state\" data-v-284f8c8b><div class=\"spinner-small\" data-v-284f8c8b></div> <p data-v-284f8c8b>Loading advances...</p></div>" : _vm.filteredAdvances.length === 0 ? "<div class=\"empty-state\" data-v-284f8c8b><i class=\"fas fa-inbox\" data-v-284f8c8b></i> <p data-v-284f8c8b>ບໍ່ພົບລາຍຈ່າຍລ່ວງໜ້າ</p></div>" : "<div class=\"advance-items\" data-v-284f8c8b>" + _vm._ssrList(_vm.filteredAdvances, function (advance) {
    var _vm$selectedAdvanceFo;
    return "<div" + _vm._ssrClass("advance-item", {
      selected: ((_vm$selectedAdvanceFo = _vm.selectedAdvanceForBrowser) === null || _vm$selectedAdvanceFo === void 0 ? void 0 : _vm$selectedAdvanceFo.id) === advance.id
    }) + " data-v-284f8c8b><div class=\"advance-item-content\" data-v-284f8c8b><div class=\"advance-item-header\" data-v-284f8c8b><span class=\"advance-id\" data-v-284f8c8b>" + _vm._ssrEscape("#" + _vm._s(advance.id)) + "</span> <span" + _vm._ssrClass(null, ['status-badge', advance.status]) + " data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(advance.status)) + "\n                  ") + "</span></div> <div class=\"advance-item-body\" data-v-284f8c8b><div class=\"advance-amount\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatCurrency(advance.amount, advance.currency.code)) + "\n                  ") + "</div> <div class=\"advance-date\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatDate(advance.bookingDate)) + "\n                  ") + "</div> " + (advance.purpose ? "<div class=\"advance-purpose\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(advance.purpose) + "\n                  ") + "</div>" : "<!---->") + " " + (advance.maker ? "<div class=\"advance-maker\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(advance.maker.cus_name) + "\n                  ") + "</div>" : "<!---->") + "</div></div></div>";
  }) + "</div>") + "</div>")], 2), _vm._ssrNode(" <div class=\"modal-footer\" data-v-284f8c8b><button type=\"button\" class=\"btn btn-secondary\" data-v-284f8c8b><i class=\"fas fa-times\" data-v-284f8c8b></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.selectedAdvanceForBrowser) + " class=\"btn btn-primary\" data-v-284f8c8b><i class=\"fas fa-check\" data-v-284f8c8b></i>\n          ເລືອກ\n        </button></div>")], 2)]) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=template&id=284f8c8b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settlementDialogvue_type_script_lang_js_ = ({
  name: 'SettlementDialog',
  props: {
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
  data() {
    return {
      loading: false,
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
        settlementDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        // New field
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: ''
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.settlement && this.settlement.id;
    },
    // New computed property for checking if linked to advance
    isLinkedToAdvance() {
      return this.formData.linkToAdvance === 'true' && this.formData.moneyAdvanceId;
    },
    // New computed properties for exchange rate functionality
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
      if (!this._isInitializing) this.formData.exchangeRate = currency.rate || 1;
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
    // Filter bank accounts by selected currency if possible
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
      // 🐛 DEBUG: Let's check each validation condition
      const validations = {
        hasAmount: !!(this.formData.amount && parseFloat(this.formData.amount) > 0),
        hasCurrency: !!this.formData.currencyId,
        hasUser: !!this.formData.userId,
        // Check if user is selected
        hasSettlementDate: !!this.formData.settlementDate,
        hasMethod: !!this.formData.method,
        hasUsers: this.users.length > 0,
        hasCurrencies: this.currencies.length > 0,
        // 🆕 FIX: Correct operator precedence - was: (!this.formData.method === 'bank_transfer' || this.formData.bankAccountId)
        bankAccountValid: this.formData.method !== 'bank_transfer' || !!this.formData.bankAccountId,
        // New exchange rate validation
        exchangeRateValid: !this.formData.exchangeRate || this.formData.exchangeRate > 0
      };

      // 🐛 DEBUG: Log current form state
      console.log('🔍 Form Validation Debug:', {
        formData: {
          amount: this.formData.amount,
          currencyId: this.formData.currencyId,
          exchangeRate: this.formData.exchangeRate,
          userId: this.formData.userId,
          settlementDate: this.formData.settlementDate,
          method: this.formData.method,
          bankAccountId: this.formData.bankAccountId
        },
        validations,
        usersLength: this.users.length,
        currenciesLength: this.currencies.length,
        finalValid: Object.values(validations).every(v => v === true)
      });

      // Return true only if ALL conditions are met
      return Object.values(validations).every(v => v === true);
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm();
        this.loadMoneyAdvances();
      } else {
        this.resetForm();
      }
    },
    'formData.currencyId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        // Don't override exchange rate during initialization in edit mode
        if (!this._isInitializing || !this.isEditMode) {
          this.handleCurrencyChange();
        }
      }
    },
    settlement: {
      handler(newVal, oldVal) {
        if (this.visible && newVal !== oldVal) {
          this.$nextTick(() => {
            this.initializeForm();
          });
        }
      },
      deep: true
    },
    // Watch for currency changes to auto-set exchange rate
    'formData.currencyId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.handleCurrencyChange();
      }
    },
    // Watch for money advance changes
    'formData.moneyAdvanceId'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance();
          this.syncAmountFromAdvance();
        });
      }
    },
    // Watch for link to advance changes
    'formData.linkToAdvance'(newVal, oldVal) {
      if (newVal === 'false' && oldVal === 'true') {
        this.clearAdvanceSelection();
      }
    },
    // 🆕 NEW: Watch for available advances to load and auto-sync
    availableAdvances: {
      handler(newAdvances) {
        if (newAdvances.length > 0 && this.formData.moneyAdvanceId && this.formData.linkToAdvance === 'true') {
          console.log('🔄 Advances loaded, triggering auto-sync...');
          this.$nextTick(() => {
            this.syncCurrencyFromAdvance();
            this.syncAmountFromAdvance();
          });
        }
      },
      immediate: false
    }
  },
  beforeDestroy() {
    // Cleanup: ensure body scroll is restored when component is destroyed
    document.body.style.overflow = 'auto';
  },
  methods: {
    initializeForm() {
      console.warn(`initiate data ${JSON.stringify(this.settlement)}`);
      console.warn(`initiate user ${JSON.stringify(this.user)}`);
      if (this.settlement && (this.settlement.id || this.settlement.moneyAdvanceId)) {
        // Edit mode OR new settlement with money advance link
        const hasMoneyAdvance = this.settlement.moneyAdvanceId && this.settlement.moneyAdvanceId !== null && this.settlement.moneyAdvanceId !== '' && this.settlement.moneyAdvanceId !== '0' && this.settlement.moneyAdvanceId !== 0;
        console.log('🔍 Settlement initialization:', {
          isEdit: !!this.settlement.id,
          hasMoneyAdvance,
          moneyAdvanceId: this.settlement.moneyAdvanceId,
          linkToAdvanceFromProp: this.settlement.linkToAdvance,
          originalExchangeRate: this.settlement.exchangeRate // ✅ Log original value
        });

        this.formData = {
          settlementDate: this.settlement.settlementDate ? this.settlement.settlementDate.split('T')[0] : '',
          method: this.settlement.method || '',
          amount: this.settlement.amount || null,
          currencyId: this.settlement.currencyId || '',
          // ✅ FIX 1: Properly handle exchange rate - check for undefined/null, not falsy
          exchangeRate: this.settlement.exchangeRate !== undefined && this.settlement.exchangeRate !== null ? this.settlement.exchangeRate : 1,
          bankAccountId: this.settlement.bankAccountId || '',
          ministryId: this.settlement.ministryId || '',
          chartAccountId: this.settlement.chartAccountId || '',
          userId: this.settlement.userId || '',
          notes: this.settlement.notes || '',
          selectedInvoices: [],
          linkToAdvance: hasMoneyAdvance || this.settlement.linkToAdvance === 'true' ? 'true' : 'false',
          moneyAdvanceId: hasMoneyAdvance ? this.settlement.moneyAdvanceId.toString() : ''
        };
        console.log('✅ Form data initialized:', {
          linkToAdvance: this.formData.linkToAdvance,
          moneyAdvanceId: this.formData.moneyAdvanceId,
          exchangeRate: this.formData.exchangeRate // ✅ Log the set value
        });

        // ✅ FIX 2: Add initialization flag to prevent watchers from overriding during init
        this._isInitializing = true;

        // If linked to advance, ensure currency sync after money advances are loaded
        if (this.formData.linkToAdvance === 'true') {
          this.$nextTick(() => {
            this.waitForAdvancesAndSync();
            // Clear initialization flag after sync
            this._isInitializing = false;
          });
        } else {
          // Clear initialization flag
          this.$nextTick(() => {
            this._isInitializing = false;
          });
        }
      } else {
        // Create mode - set defaults
        this.formData = {
          settlementDate: this.today,
          method: '',
          amount: null,
          currencyId: '',
          exchangeRate: 1,
          // Default to 1
          bankAccountId: '',
          ministryId: '',
          chartAccountId: '',
          userId: this.user.id,
          notes: '',
          selectedInvoices: [],
          linkToAdvance: 'false',
          moneyAdvanceId: ''
        };
        this._isInitializing = true;

        // Set default currency if available
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => (c.code || c.currencyCode) === 'LAK') || this.currencies[0];
          this.formData.currencyId = defaultCurrency.id;
        }
        this.$nextTick(() => {
          this._isInitializing = false;
        });
      }
      this.errors = {};
      this.formErrors = [];
    },
    // Helper method to wait for advances to load and then sync
    waitForAdvancesAndSync() {
      console.log('🔄 Waiting for advances to load and sync...');
      const checkAndSync = () => {
        console.log('🔍 Check and sync - Available advances:', this.availableAdvances.length, 'Loading:', this.loadingAdvances);
        if (this.availableAdvances.length > 0 && this.formData.moneyAdvanceId) {
          console.log('✅ Found advances, looking for advance ID:', this.formData.moneyAdvanceId);

          // Find the specific advance
          const foundAdvance = this.availableAdvances.find(advance => advance.id.toString() === this.formData.moneyAdvanceId.toString());
          if (foundAdvance) {
            console.log('🎯 Found matching advance:', foundAdvance);
            this.syncCurrencyFromAdvance();
            this.syncAmountFromAdvance();
          } else {
            console.warn('⚠️ Advance not found in available advances list. Available IDs:', this.availableAdvances.map(a => a.id));
          }
        } else if (!this.loadingAdvances) {
          console.log('🔄 No advances loaded yet and not loading, retrying...');
          // If not loading and no advances, try again after a short delay
          setTimeout(checkAndSync, 200);
        }
      };

      // Start checking
      checkAndSync();
    },
    resetForm() {
      this.formData = {
        settlementDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        // Reset to default
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: this.user.id,
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: ''
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;

      // Ensure browser dialog is closed and body scroll is restored
      if (this.showAdvanceBrowser) {
        this.showAdvanceBrowser = false;
        this.selectedAdvanceForBrowser = null;
        document.body.style.overflow = 'auto';
      }
    },
    // New method to handle currency changes
    // Fix 3: Update handleCurrencyChange to be more careful about overriding
    handleCurrencyChange() {
      console.log('🔄 Currency change detected:', {
        isInitializing: this._isInitializing,
        isEditMode: this.isEditMode,
        isBaseCurrency: this.isBaseCurrency,
        currentExchangeRate: this.formData.exchangeRate
      });
      if (this.isBaseCurrency) {
        // ✅ FIX 4: Only auto-set to 1 if not in edit mode or if rate is null/undefined
        if (!this.isEditMode || this.formData.exchangeRate === null || this.formData.exchangeRate === undefined) {
          this.formData.exchangeRate = 1;
          console.log('✅ Set exchange rate to 1 for base currency');
        } else {
          console.log('⚠️ Preserving existing exchange rate in edit mode:', this.formData.exchangeRate);
        }
      } else if (!this.formData.exchangeRate || this.formData.exchangeRate === 1) {
        // You could potentially fetch exchange rate from an API here
        // For now, just ensure it's not 1 for non-base currencies
        if (!this.isEditMode) {
          this.formData.exchangeRate = null;
        }
      }
    },
    // New method to calculate equivalent amount
    calculateEquivalentAmount() {
      // This method can be used to trigger reactivity or perform additional calculations
      // The computed property `equivalentAmountLAK` handles the actual calculation
    },
    async loadMoneyAdvances() {
      this.loadingAdvances = true;
      console.log('📥 Loading money advances...');
      try {
        // Load available money advances that can be linked
        const params = {
          status: ['pending', 'approved'],
          available_for_settlement: true
        };

        // If we have a specific money advance ID, make sure to include it
        if (this.formData.moneyAdvanceId) {
          params.include_advance_id = this.formData.moneyAdvanceId;
          console.log('🎯 Including specific advance ID:', this.formData.moneyAdvanceId);
        }
        const {
          data
        } = await this.$axios.get('/api/money-advances', {
          params
        });
        if (data && data.success) {
          this.availableAdvances = data.data || [];
          console.log('✅ Loaded advances:', this.availableAdvances.length, 'advances');

          // If we have a specific advance ID, make sure it's in the list
          if (this.formData.moneyAdvanceId) {
            const foundAdvance = this.availableAdvances.find(advance => advance.id.toString() === this.formData.moneyAdvanceId.toString());
            if (!foundAdvance) {
              console.warn('⚠️ Specific advance not found in list, fetching individually...');
              // Try to fetch the specific advance
              try {
                const {
                  data: advanceData
                } = await this.$axios.get(`/api/money-advances/${this.formData.moneyAdvanceId}`);
                if (advanceData && advanceData.success) {
                  console.log('✅ Found individual advance, adding to list');
                  this.availableAdvances.unshift(advanceData.data);
                }
              } catch (error) {
                console.error('❌ Error fetching individual advance:', error);
              }
            } else {
              console.log('✅ Found advance in list:', foundAdvance.id);
            }
          }
        } else {
          this.availableAdvances = [];
          console.warn('⚠️ No data returned from money advances API');
        }
        this.filteredAdvances = [...this.availableAdvances];
        console.log('📋 Final available advances:', this.availableAdvances.map(a => ({
          id: a.id,
          status: a.status
        })));
      } catch (error) {
        console.error('❌ Error loading money advances:', error);
        this.availableAdvances = [];
        this.filteredAdvances = [];
      } finally {
        this.loadingAdvances = false;
      }
    },
    handleMethodChange() {
      // Reset bank account when method changes
      if (this.formData.method !== 'bank_transfer') {
        this.formData.bankAccountId = '';
      }
      // Reset selected invoices when method changes
      if (this.formData.method !== 'deduction') {
        this.formData.selectedInvoices = [];
      }
      // Clear validation errors
      this.clearFieldError('bankAccountId');
    },
    updateSelectedInvoicesAmount() {
      // Automatically update amount based on selected invoices
      if (this.formData.method === 'deduction') {
        this.formData.amount = this.selectedInvoicesTotal;
      }
    },
    updateSelectedCurrency() {
      // Reset bank account if currency changes and current bank account doesn't match
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

      // Reset currency to default when unlinking
      if (this.currencies.length > 0) {
        const defaultCurrency = this.currencies.find(c => (c.code || c.currencyCode) === 'LAK') || this.currencies[0];
        this.formData.currencyId = defaultCurrency.id;
        this.formData.exchangeRate = 1; // Reset exchange rate
      }

      // Reset amount
      this.formData.amount = null;
    },
    updateSelectedAdvance() {
      console.info(`ອິນວອຍຖືກເລືອກ ${JSON.stringify(this.selectedAdvance)}`);
      if (this.selectedAdvance) {
        console.info(`Logging sync currency...`);
        this.syncCurrencyFromAdvance();
        this.syncAmountFromAdvance();
      }
    },
    // New method to sync currency from money advance

    // Fix 4: Update syncCurrencyFromAdvance to preserve existing rates
    syncCurrencyFromAdvance() {
      if (!this.selectedAdvance) return;
      const advanceCurrency = this.getAdvanceCurrency();
      if (advanceCurrency) {
        const selectedCurrency = this.currencies.find(c => c.id == advanceCurrency.id) || this.currencies[0];
        this.formData.currencyId = advanceCurrency.id;
        // this.formData.exchangeRate = selectedCurrency.rate
        // ✅ FIX 5: Better logic for syncing exchange rate
        if (this.selectedAdvance.exchangeRate && this.selectedAdvance.exchangeRate !== null) {
          this.formData.exchangeRate = this.selectedAdvance.exchangeRate;
          console.log('✅ Synced exchange rate from advance:', this.selectedAdvance.exchangeRate);
        } else {
          // Only set to 1 if we don't have an existing rate and it's base currency
          if (this.isBaseCurrency && (this.formData.exchangeRate === null || this.formData.exchangeRate === undefined)) {
            this.formData.exchangeRate = 1;
            console.log('✅ Set default exchange rate for base currency');
          }
          // For non-base currencies, preserve existing rate or leave as is
          console.log('⚠️ No exchange rate in advance, preserving current:', this.formData.exchangeRate);
        }
        console.log('Auto-selected currency:', advanceCurrency.id, 'from money advance');
      } else {
        console.warn('Could not determine currency from money advance:', this.selectedAdvance);
      }
    },
    // Fix 5: Add method to debug exchange rate issues
    debugExchangeRate() {
      var _this$settlement, _this$settlement2, _this$settlement3;
      console.clear();
      console.log('🔍 === EXCHANGE RATE DEBUG ===');
      console.log('Settlement data:', {
        exchangeRate: (_this$settlement = this.settlement) === null || _this$settlement === void 0 ? void 0 : _this$settlement.exchangeRate,
        currencyId: (_this$settlement2 = this.settlement) === null || _this$settlement2 === void 0 ? void 0 : _this$settlement2.currencyId,
        method: (_this$settlement3 = this.settlement) === null || _this$settlement3 === void 0 ? void 0 : _this$settlement3.method
      });
      console.log('Form data:', {
        exchangeRate: this.formData.exchangeRate,
        currencyId: this.formData.currencyId
      });
      console.log('Computed values:', {
        selectedCurrencyCode: this.selectedCurrencyCode,
        isBaseCurrency: this.isBaseCurrency,
        isEditMode: this.isEditMode,
        isInitializing: this._isInitializing
      });
      console.log('🔍 === END DEBUG ===');
    },
    // New method to sync amount from money advance
    syncAmountFromAdvance() {
      if (this.selectedAdvance && this.selectedAdvance.amount) {
        this.formData.amount = this.selectedAdvance.amount;
        console.log('Auto-filled amount:', this.selectedAdvance.amount, 'from money advance');
      }
    },
    // Helper method to get advance currency
    getAdvanceCurrency() {
      if (!this.selectedAdvance) return null;

      // Try different ways to get currency from advance
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
      // Prevent body scrolling when browser modal is open
      document.body.style.overflow = 'hidden';
    },
    closeAdvanceBrowser() {
      this.showAdvanceBrowser = false;
      this.selectedAdvanceForBrowser = null;
      this.advanceSearch.query = '';
      this.advanceSearch.status = '';
      this.filteredAdvances = [...this.availableAdvances];
      // Restore body scrolling
      document.body.style.overflow = 'auto';
    },
    handleAdvanceBrowserOverlayClick(event) {
      // Only close if clicking directly on the overlay, not on child elements
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

        // Sync currency and amount after selection
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

      // Filter by status
      if (this.advanceSearch.status) {
        filtered = filtered.filter(advance => advance.status === this.advanceSearch.status);
      }

      // Filter by search query
      if (this.advanceSearch.query) {
        const query = this.advanceSearch.query.toLowerCase();
        filtered = filtered.filter(advance => advance.purpose && advance.purpose.toLowerCase().includes(query) || advance.note && advance.note.toLowerCase().includes(query) || advance.id.toString().includes(query));
      }
      this.filteredAdvances = filtered;
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];

      // Required fields validation
      if (!this.formData.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີ';
        this.formErrors.push('Settlement date is required');
      }
      if (!this.formData.method) {
        this.errors.method = 'ກະລຸນາເລືອກວິທີການຊຳລະ';
        this.formErrors.push('Payment method is required');
      }
      if (!this.formData.amount || this.formData.amount <= 0) {
        this.errors.amount = 'ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ';
        this.formErrors.push('Amount is required and must be greater than 0');
      }
      if (!this.formData.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
        this.formErrors.push('Currency selection is required');
      }

      // New exchange rate validation
      if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0';
        this.formErrors.push('Exchange rate must be greater than 0');
      }
      if (!this.formData.userId) {
        this.errors.userId = 'ກະລຸນາເລືອກຜູ້ລົງບັນຊີ';
        this.formErrors.push('User selection is required');
      }

      // Conditional validation
      if (this.formData.method === 'bank_transfer' && !this.formData.bankAccountId) {
        this.errors.bankAccountId = 'ກະລຸນາເລືອກບັນຊີທະນາຄານ';
        this.formErrors.push('Bank account is required for bank transfer');
      }

      // Special validation for linked advances
      if (this.isLinkedToAdvance && this.selectedAdvance) {
        const advanceCurrency = this.getAdvanceCurrency();
        if (advanceCurrency && this.formData.currencyId != advanceCurrency.id) {
          this.errors.currencyId = 'ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ';
          this.formErrors.push('Currency must match the selected money advance');
        }
      }
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters');
      }
      if (this.users.length === 0) {
        this.formErrors.push('No users available. Please contact administrator.');
      }
      if (this.currencies.length === 0) {
        this.formErrors.push('No currencies available. Please contact administrator.');
      }
      return this.formErrors.length === 0;
    },
    clearFieldError(fieldName) {
      if (this.errors[fieldName]) {
        this.$delete(this.errors, fieldName);
      }
    },
    async saveSettlement() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          selectedInvoices: this.formData.method === 'deduction' ? this.formData.selectedInvoices : [],
          // 🆕 FIX: Add missing bookingDate field using settlementDate
          bookingDate: this.formData.settlementDate
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

        // Emit save event to parent
        this.$emit('save', submitData);
      } catch (error) {
        console.error('Form submission error:', error);
        this.formErrors.push('An error occurred while saving. Please try again.');
      } finally {
        this.loading = false;
      }
    },
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    // Utility methods
    formatCurrency(amount, currency = 'LAK', locale = 'en-US', options = {}) {
      // Validate inputs
      if (typeof amount !== 'number' && amount !== null && amount !== undefined) {
        console.warn('formatCurrency: amount should be a number');
        amount = 0;
      }

      // Default formatting options
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
        console.error('Currency formatting error:', error);
        // Fallback to simple formatting
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
    },
    // Debug method (remove in production)
    debugCurrencySync() {
      console.log('--- Currency Sync Debug ---');
      console.log('Is linked to advance:', this.isLinkedToAdvance);
      console.log('Selected advance:', this.selectedAdvance);
      console.log('Current currency ID:', this.formData.currencyId);
      console.log('Available currencies:', this.currencies.map(c => ({
        id: c.id,
        code: c.code || c.currencyCode,
        name: c.name || c.currencyName
      })));
      if (this.selectedAdvance) {
        console.log('Advance currency info:', {
          currencyId: this.selectedAdvance.currencyId,
          currencyCode: this.selectedAdvance.currencyCode,
          currency: this.selectedAdvance.currency
        });
        const advanceCurrency = this.getAdvanceCurrency();
        console.log('Resolved advance currency:', advanceCurrency);
      }
    },
    // 🐛 DEBUG: Form validation debug method
    debugFormValidation() {
      console.clear();
      console.log('🔍 === FORM VALIDATION DEBUG ===');

      // Call isFormValid to see the debug output
      const isValid = this.isFormValid;

      // Show what will be submitted
      const submitData = {
        ...this.formData,
        bookingDate: this.formData.settlementDate,
        // Show the bookingDate that will be added
        selectedInvoices: this.formData.method === 'deduction' ? this.formData.selectedInvoices : []
      };
      console.log('📋 Current Form Data:', JSON.stringify(this.formData, null, 2));
      console.log('📤 Data That Will Be Submitted:', JSON.stringify(submitData, null, 2));
      console.log('👥 Available Users:', this.users.length, this.users.map(u => ({
        id: u.id,
        name: u.cus_name || u.name
      })));
      console.log('💱 Available Currencies:', this.currencies.length, this.currencies.map(c => ({
        id: c.id,
        code: c.code || c.currencyCode
      })));
      console.log('🏦 Available Bank Accounts:', this.bankAccounts.length);
      console.log('🏛️ Available Ministries:', this.ministries.length);
      console.log('✅ Form Valid:', isValid);
      console.log('🔄 Loading:', this.loading);
      console.log('🚫 Button Disabled:', this.loading || !isValid);

      // Check specific issues
      if (!this.formData.userId) {
        console.warn('⚠️ ISSUE: No user selected');
      }
      if (!this.formData.method) {
        console.warn('⚠️ ISSUE: No payment method selected');
      }
      if (!this.formData.amount || parseFloat(this.formData.amount) <= 0) {
        console.warn('⚠️ ISSUE: Invalid amount');
      }
      if (!this.formData.currencyId) {
        console.warn('⚠️ ISSUE: No currency selected');
      }
      if (!this.formData.settlementDate) {
        console.warn('⚠️ ISSUE: No settlement date');
      }
      if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
        console.warn('⚠️ ISSUE: Invalid exchange rate');
      }
      console.log('🔍 === END DEBUG ===');

      // Show alert with summary
      alert(`Form Valid: ${isValid}\nButton Disabled: ${this.loading || !isValid}\n\nCheck console for detailed debug info.\n\n✅ bookingDate will be set to: ${this.formData.settlementDate}\n💱 Exchange Rate: ${this.formData.exchangeRate}`);
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementDialogvue_type_script_lang_js_ = (settlementDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(529)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "284f8c8b",
  "6aebe1cc"
  
)

/* harmony default export */ var settlementDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(531);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-dialog-overlay[data-v-fbd763dc]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1000}.settlement-dialog[data-v-fbd763dc]{background:#fff;border-radius:8px;box-shadow:0 10px 25px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:900px;width:100%}.dialog-header[data-v-fbd763dc]{align-items:center;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;padding:20px 24px}.dialog-title[data-v-fbd763dc]{color:#111827;font-size:1.5rem;font-weight:600;margin:0}.close-button[data-v-fbd763dc]{background:none;border:none;border-radius:4px;color:#6b7280;cursor:pointer;padding:4px;transition:all .2s}.close-button[data-v-fbd763dc]:hover{background-color:#f3f4f6;color:#374151}.dialog-content[data-v-fbd763dc]{flex:1;overflow-y:auto;padding:0 24px}.settlement-details[data-v-fbd763dc]{padding:20px 0}.info-section[data-v-fbd763dc]{margin-bottom:32px}.info-section[data-v-fbd763dc]:last-child{margin-bottom:0}.section-title[data-v-fbd763dc]{border-bottom:2px solid #e5e7eb;color:#374151;font-size:1.125rem;font-weight:600;margin:0 0 16px;padding-bottom:8px}.info-grid[data-v-fbd763dc]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.info-item[data-v-fbd763dc]{display:flex;flex-direction:column;gap:4px}.info-item.full-width[data-v-fbd763dc]{grid-column:1/-1}.info-item label[data-v-fbd763dc]{color:#6b7280;font-size:.875rem;font-weight:500}.info-item span[data-v-fbd763dc]{color:#111827;font-size:.875rem;word-break:break-word}.amount[data-v-fbd763dc]{color:#059669;font-weight:600}.method[data-v-fbd763dc]{color:#3b82f6;font-weight:500}.status[data-v-fbd763dc]{border-radius:12px;font-size:.75rem;font-weight:500;letter-spacing:.05em;padding:2px 8px;text-transform:uppercase;width:-moz-fit-content;width:fit-content}.status.active[data-v-fbd763dc]{background-color:#d1fae5;color:#065f46}.status.inactive[data-v-fbd763dc]{background-color:#fee2e2;color:#991b1b}.status.approved[data-v-fbd763dc]{background-color:#dbeafe;color:#1e40af}.status.settled[data-v-fbd763dc]{background-color:#d1fae5;color:#065f46}.no-data[data-v-fbd763dc]{color:#6b7280;padding:40px 20px;text-align:center}.dialog-footer[data-v-fbd763dc]{border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;padding:20px 24px}.btn[data-v-fbd763dc]{border:none;border-radius:6px;cursor:pointer;font-size:.875rem;font-weight:500;padding:8px 16px;transition:all .2s}.btn-secondary[data-v-fbd763dc]{background-color:#f3f4f6;color:#374151}.btn-secondary[data-v-fbd763dc]:hover{background-color:#e5e7eb}@media (max-width:768px){.settlement-dialog-overlay[data-v-fbd763dc]{padding:10px}.settlement-dialog[data-v-fbd763dc]{max-height:95vh}.dialog-header[data-v-fbd763dc]{padding:16px 20px}.dialog-content[data-v-fbd763dc]{padding:0 20px}.info-grid[data-v-fbd763dc]{grid-template-columns:1fr}.dialog-title[data-v-fbd763dc]{font-size:1.25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d046673c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(532);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d046673c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d046673c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d046673c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d046673c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-d046673c]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-d046673c]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-d046673c]{align-items:center;border-bottom:1px solid #eee;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-d046673c]{color:#333;margin:0}.close-btn[data-v-d046673c]{background:none;border:none;color:#666;cursor:pointer;font-size:18px}.close-btn[data-v-d046673c]:hover{color:#333}.modal-body[data-v-d046673c]{padding:20px}.modal-footer[data-v-d046673c]{border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-d046673c]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-d046673c]{background:#007bff;color:#fff}.btn-primary[data-v-d046673c]:hover{background:#0056b3}.btn-secondary[data-v-d046673c]{background:#6c757d;color:#fff}.btn-secondary[data-v-d046673c]:hover{background:#545b62}.voucher-container[data-v-d046673c]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;line-height:1.4;margin:0 auto;max-width:700px;padding:20px;width:100%}.voucher-header[data-v-d046673c]{align-items:flex-start;border-bottom:1px solid #ccc;display:flex;justify-content:space-between;margin-bottom:20px;padding-bottom:10px}.company-info[data-v-d046673c]{flex:1;text-align:center}.company-name[data-v-d046673c]{font-size:16px;font-weight:700;margin-bottom:5px}.department[data-v-d046673c]{font-size:14px;margin-bottom:3px}.sub-department[data-v-d046673c]{font-size:12px;margin-bottom:10px}.amount-line[data-v-d046673c]{font-size:12px;letter-spacing:2px}.voucher-number[data-v-d046673c]{flex:0 0 auto;margin-left:20px}.number-box[data-v-d046673c]{background:#f9f9f9;border:2px solid #333;padding:8px 12px;text-align:center}.number-label[data-v-d046673c]{font-weight:700;margin-right:10px}.number-value[data-v-d046673c]{color:#d32f2f;font-weight:700}.voucher-title[data-v-d046673c]{font-size:18px;font-weight:700;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-details[data-v-d046673c]{margin-bottom:30px}.detail-row[data-v-d046673c]{align-items:center;display:flex;margin-bottom:12px;min-height:24px}.detail-row.description[data-v-d046673c]{align-items:flex-start;flex-direction:column}.label[data-v-d046673c]{font-weight:500;margin-right:10px;white-space:nowrap}.value[data-v-d046673c]{border-bottom:1px solid #333;margin-right:20px;min-width:40px;padding:2px 5px;text-align:center}.dotted-line[data-v-d046673c]{border-bottom:1px dotted #333;flex:1;margin:0 10px;min-height:20px;padding:2px 5px}.currency-options[data-v-d046673c]{display:flex;gap:20px;margin-left:10px}.currency-options label[data-v-d046673c]{align-items:center;display:flex;font-weight:400;gap:5px}.amount-number[data-v-d046673c]{border-bottom:1px solid #333;flex:1;font-weight:700;margin:0 10px;padding:2px 10px;text-align:right}.amount-display[data-v-d046673c]{color:#d32f2f;font-size:16px;font-weight:700;margin:0 10px}.description-content[data-v-d046673c]{background:#fafafa;border:1px solid #333;margin-top:5px;min-height:60px;padding:10px;width:100%}.amount-words[data-v-d046673c]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:10px;padding:2px 10px}.signature-section[data-v-d046673c]{display:flex;gap:10px;justify-content:space-between;margin-top:40px}.signature-box[data-v-d046673c]{flex:1;text-align:center}.signature-title[data-v-d046673c]{font-size:12px;font-weight:500;margin-bottom:30px}.signature-line[data-v-d046673c]{border-bottom:1px solid #333;height:1px;margin-top:20px}.signature-name[data-v-d046673c]{color:#666;font-size:10px;font-weight:400;margin-top:5px}@media print{body *[data-v-d046673c]{visibility:hidden}.print-only[data-v-d046673c],.print-only *[data-v-d046673c]{visibility:visible}.print-only[data-v-d046673c]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-d046673c]{border:2px solid #000!important;font-size:12px!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}.voucher-title[data-v-d046673c]{font-size:16px!important}.amount-display[data-v-d046673c],.company-name[data-v-d046673c]{font-size:14px!important}.signature-title[data-v-d046673c]{font-size:10px!important}.department[data-v-d046673c]{font-size:12px!important}.amount-line[data-v-d046673c],.sub-department[data-v-d046673c]{font-size:10px!important}.signature-name[data-v-d046673c]{font-size:9px!important}}.print-only[data-v-d046673c]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-d046673c]{left:auto;position:static;top:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(864);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c34c32f4", content, true, context)
};

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementViewDialog/index.vue?vue&type=template&id=fbd763dc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "settlement-dialog-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"settlement-dialog\" data-v-fbd763dc><div class=\"dialog-header\" data-v-fbd763dc><h2 class=\"dialog-title\" data-v-fbd763dc>Settlement Details</h2> <button class=\"close-button\" data-v-fbd763dc><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-fbd763dc><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\" data-v-fbd763dc></line> <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\" data-v-fbd763dc></line></svg></button></div> <div class=\"dialog-content\" data-v-fbd763dc>" + (_vm.settlement ? "<div class=\"settlement-details\" data-v-fbd763dc><div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Settlement Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Settlement ID:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.id)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Booking Date:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.settlement.bookingDate))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Amount:</label> <span class=\"amount\" data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.settlement.amount))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Method:</label> <span class=\"method\" data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatMethod(_vm.settlement.method))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Created At:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.settlement.createdAt))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Last Updated:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.settlement.updateTimestamp))) + "</span></div> " + (_vm.settlement.notes ? "<div class=\"info-item full-width\" data-v-fbd763dc><label data-v-fbd763dc>Notes:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.notes)) + "</span></div>" : "<!---->") + "</div></div> " + (_vm.settlement.proceeder ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Proceeder Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Customer ID:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.cus_id)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.cus_name)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Telephone:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.cus_tel)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Email:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.cus_email)) + "</span></div> " + (_vm.settlement.proceeder.village ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Village:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.village)) + "</span></div>" : "<!---->") + " " + (_vm.settlement.proceeder.district ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>District:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.district)) + "</span></div>" : "<!---->") + " " + (_vm.settlement.proceeder.province ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Province:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.province)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Status:</label> <span" + _vm._ssrClass(null, ['status', _vm.settlement.proceeder.cus_active ? 'active' : 'inactive']) + " data-v-fbd763dc>" + _vm._ssrEscape("\n                " + _vm._s(_vm.settlement.proceeder.cus_active ? 'Active' : 'Inactive') + "\n              ") + "</span></div></div></div>" : "<!---->") + " " + (_vm.settlement.moneyAdvance ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Money Advance Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Advance ID:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.moneyAdvance.id)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Amount:</label> <span class=\"amount\" data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.settlement.moneyAdvance.amount))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Purpose:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.moneyAdvance.purpose || 'N/A')) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Status:</label> <span" + _vm._ssrClass(null, ['status', _vm.settlement.moneyAdvance.status]) + " data-v-fbd763dc>" + _vm._ssrEscape("\n                " + _vm._s(_vm.settlement.moneyAdvance.status) + "\n              ") + "</span></div> " + (_vm.settlement.moneyAdvance.currency ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Currency:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.moneyAdvance.currency.code) + " - " + _vm._s(_vm.settlement.moneyAdvance.currency.name)) + "</span></div>" : "<!---->") + " " + (_vm.settlement.moneyAdvance.maker ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Maker:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.moneyAdvance.maker.cus_name)) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.settlement.bankAccount ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Bank Account Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Number:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.accountNumber)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.accountName)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Bank Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.bankName)) + "</span></div> " + (_vm.settlement.bankAccount.bankBranch ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Bank Branch:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.bankBranch)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Type:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.accountType)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Currency:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.currency)) + "</span></div></div></div>" : "<!---->") + " " + (_vm.settlement.ministry ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Ministry Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Ministry Code:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.ministry.ministryCode)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Ministry Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.ministry.ministryName)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Ministry Name (EN):</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.ministry.ministryNameEn)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Type:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.ministry.ministryType)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Status:</label> <span" + _vm._ssrClass(null, ['status', _vm.settlement.ministry.status.toLowerCase()]) + " data-v-fbd763dc>" + _vm._ssrEscape("\n                " + _vm._s(_vm.settlement.ministry.status) + "\n              ") + "</span></div> " + (_vm.settlement.ministry.establishedDate ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Established Date:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.settlement.ministry.establishedDate))) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.settlement.chartAccount ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Chart Account Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Number:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.chartAccount.accountNumber)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.chartAccount.accountName)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Type:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.chartAccount.accountType)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Status:</label> <span" + _vm._ssrClass(null, ['status', _vm.settlement.chartAccount.isActive ? 'active' : 'inactive']) + " data-v-fbd763dc>" + _vm._ssrEscape("\n                " + _vm._s(_vm.settlement.chartAccount.isActive ? 'Active' : 'Inactive') + "\n              ") + "</span></div></div></div>" : "<!---->") + "</div>" : "<div class=\"no-data\" data-v-fbd763dc><p data-v-fbd763dc>No settlement data available</p></div>") + "</div> <div class=\"dialog-footer\" data-v-fbd763dc><button class=\"btn btn-secondary\" data-v-fbd763dc>Close</button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementViewDialog/index.vue?vue&type=template&id=fbd763dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementViewDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settlementViewDialogvue_type_script_lang_js_ = ({
  name: 'SettlementViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    settlement: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    formatDate(dateString) {
      if (!dateString || dateString === '0000-00-00') return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatDateTime(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatAmount(amount) {
      if (!amount) return '0';
      return new Intl.NumberFormat('en-US').format(amount);
    },
    formatMethod(method) {
      if (!method) return 'N/A';
      return method.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementViewDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementViewDialogvue_type_script_lang_js_ = (settlementViewDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementViewDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(610)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementViewDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fbd763dc",
  "a7b8cbde"
  
)

/* harmony default export */ var settlementViewDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=template&id=d046673c&scoped=true&
var render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$check, _vm$voucherData$maker, _vm$voucherData$maker2, _vm$voucherData$curre6, _vm$voucherData$curre7, _vm$voucherData$curre8, _vm$voucherData$curre9, _vm$voucherData$maker3, _vm$voucherData$check2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.showPrintDialog ? "<div class=\"modal-overlay\" data-v-d046673c><div class=\"modal-content\" data-v-d046673c><div class=\"modal-header\" data-v-d046673c><h3 data-v-d046673c>ພິມໃບຮັບເງິນ</h3> <button class=\"close-btn\" data-v-d046673c><i class=\"fas fa-times\" data-v-d046673c></i></button></div> <div class=\"modal-body\" data-v-d046673c><div id=\"voucher-print\" class=\"voucher-container\" data-v-d046673c><div class=\"voucher-header\" data-v-d046673c><div class=\"company-info\" data-v-d046673c><div class=\"company-name\" data-v-d046673c>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-d046673c>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div> <div class=\"amount-line\" data-v-d046673c>.........(000)..........</div></div> <div class=\"voucher-number\" data-v-d046673c><div class=\"number-box\" data-v-d046673c><span class=\"number-label\" data-v-d046673c>No</span> <span class=\"number-value\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div></div></div> <div class=\"voucher-title\" data-v-d046673c>ໃບຮັບເງິນ</div> <div class=\"voucher-details\" data-v-d046673c><div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ອີງຕາມ</span> <span class=\"dotted-line\" data-v-d046673c></span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ສະບັບ ເລກທີ</span> <span class=\"dotted-line\" data-v-d046673c></span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ພະແນກຄັງເງິນສົດໄດ້ຮັບເງິນ </span> <label data-v-d046673c><input type=\"checkbox\" data-v-d046673c></label> <span class=\"label\" data-v-d046673c> ສົດ/ </span> <label data-v-d046673c><input type=\"checkbox\" data-v-d046673c></label> <span class=\"label\" data-v-d046673c> ແຊັກ/ </span> <label data-v-d046673c><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-d046673c></label> <span class=\"label\" data-v-d046673c> LAK/ </span> <label data-v-d046673c><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-d046673c></label> <span class=\"label\" data-v-d046673c> THB/ </span> <label data-v-d046673c><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-d046673c></label> <span class=\"label\" data-v-d046673c> USD </span> <span class=\"dotted-line\" data-v-d046673c></span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ຈຳນວນ</span> <span class=\"amount-display\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.name) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.code))) + "</span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ຈາກທ່ານ</span> <span class=\"dotted-line\" data-v-d046673c></span> <span class=\"label\" data-v-d046673c>ເຊິ່ງແມ່ນພະນັກງານສັງກັດຢູ່</span> <span class=\"dotted-line\" data-v-d046673c></span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"dotted-line\" data-v-d046673c></span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ເນື້ອໃນລາຍຮັບ</span> <span class=\"label\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.voucherData.notes)) + "</span> <span class=\"dotted-line\" data-v-d046673c></span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"dotted-line\" data-v-d046673c></span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"dotted-line\" data-v-d046673c></span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"dotted-line\" data-v-d046673c></span></div></div> <div class=\"voucher-title\" data-v-d046673c>ດັ່ງນັ້ນ ຈິ່ງໄດ້ພ້ອມກັນລົງລາຍເຊັນ ຢັ້ງຢືນໄວ້ເປັນຫຫຼັກຖານ</div> <div class=\"signature-section\" data-v-d046673c><div class=\"signature-box\" data-v-d046673c><div class=\"signature-title\" data-v-d046673c>ຫົວໜ້າພະແນກ</div> <div class=\"signature-line\" data-v-d046673c></div> <div class=\"signature-name\" data-v-d046673c></div></div> <div class=\"signature-box\" data-v-d046673c><div class=\"signature-title\" data-v-d046673c>ຜູ້ຮັບຄັງເງິນສົດ</div> <div class=\"signature-line\" data-v-d046673c></div></div> <div class=\"signature-box\" data-v-d046673c><div class=\"signature-title\" data-v-d046673c>ຜູ້ມອບ</div> <div class=\"signature-line\" data-v-d046673c></div> <div class=\"signature-name\" data-v-d046673c>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div></div></div></div> <div class=\"modal-footer\" data-v-d046673c><button class=\"btn btn-secondary\" data-v-d046673c><i class=\"fas fa-times\" data-v-d046673c></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-d046673c><i class=\"fas fa-print\" data-v-d046673c></i>\n          ພິມ\n        </button></div></div></div>" : "<!---->") + " <div class=\"print-only\"" + _vm._ssrStyle(null, null, {
    display: false ? undefined : 'none'
  }) + " data-v-d046673c><div class=\"voucher-container print-version\" data-v-d046673c><div class=\"voucher-header\" data-v-d046673c><div class=\"company-info\" data-v-d046673c><div class=\"company-name\" data-v-d046673c>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</div> <div class=\"department\" data-v-d046673c>ກົມການເງິນ ແລະ ສິນເຊື່ອ</div> <div class=\"sub-department\" data-v-d046673c>\n            ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ\n          </div> <div class=\"amount-line\" data-v-d046673c>.........(000)..........</div></div> <div class=\"voucher-number\" data-v-d046673c><div class=\"number-box\" data-v-d046673c><span class=\"number-label\" data-v-d046673c>No</span> <span class=\"number-value\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div></div></div> <div class=\"voucher-title\" data-v-d046673c>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-d046673c><div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ຈ່າຍໃຫ້ຫຼືຮັບເອົາ</span> <span class=\"dotted-line\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$maker = _vm.voucherData.maker) === null || _vm$voucherData$maker === void 0 ? void 0 : _vm$voucherData$maker.cus_name) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ເລກທີ</span> <span class=\"value\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$maker2 = _vm.voucherData.maker) === null || _vm$voucherData$maker2 === void 0 ? void 0 : _vm$voucherData$maker2.cus_id) || 'N/A')) + "</span> <span class=\"label\" data-v-d046673c>ວັນທີນີ້</span> <span class=\"value\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-d046673c>ເດືອນ</span> <span class=\"value\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-d046673c>ປີ</span> <span class=\"value\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span> <div class=\"currency-options\" data-v-d046673c><label data-v-d046673c><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre6 = _vm.voucherData.currency) === null || _vm$voucherData$curre6 === void 0 ? void 0 : _vm$voucherData$curre6.code) === 'LAK') + " data-v-d046673c>\n              LAK</label> <label data-v-d046673c><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre7 = _vm.voucherData.currency) === null || _vm$voucherData$curre7 === void 0 ? void 0 : _vm$voucherData$curre7.code) === 'THB') + " data-v-d046673c>\n              THB</label> <label data-v-d046673c><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre8 = _vm.voucherData.currency) === null || _vm$voucherData$curre8 === void 0 ? void 0 : _vm$voucherData$curre8.code) === 'USD') + " data-v-d046673c>\n              USD</label></div></div> <div class=\"detail-row\" data-v-d046673c><span class=\"label\" data-v-d046673c>ຈຳນວນ</span> <span class=\"amount-display\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-d046673c>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre9 = _vm.voucherData.currency) === null || _vm$voucherData$curre9 === void 0 ? void 0 : _vm$voucherData$curre9.name) || 'N/A')) + "</span></div> <div class=\"detail-row description\" data-v-d046673c><span class=\"label\" data-v-d046673c>ເນື້ອໃນລາຍການ</span> <div class=\"description-content\" data-v-d046673c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.note || 'ບໍ່ມີຫມາຍເຫດ') + "\n          ") + "</div></div></div> <div class=\"signature-section\" data-v-d046673c><div class=\"signature-box\" data-v-d046673c><div class=\"signature-title\" data-v-d046673c>ຜູ້ຮັບເງິນຂຶ້ນເຊັນ ຊື່ເຕັມ</div> <div class=\"signature-line\" data-v-d046673c></div> <div class=\"signature-name\" data-v-d046673c>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$maker3 = _vm.voucherData.maker) === null || _vm$voucherData$maker3 === void 0 ? void 0 : _vm$voucherData$maker3.cus_name) || '') + "\n          ") + "</div></div> <div class=\"signature-box\" data-v-d046673c><div class=\"signature-title\" data-v-d046673c>ຜູ້ສົ່ງເງິນ</div> <div class=\"signature-line\" data-v-d046673c></div></div> <div class=\"signature-box\" data-v-d046673c><div class=\"signature-title\" data-v-d046673c>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-line\" data-v-d046673c></div></div> <div class=\"signature-box\" data-v-d046673c><div class=\"signature-title\" data-v-d046673c>ນາຍຄົນຈັງ</div> <div class=\"signature-line\" data-v-d046673c></div> <div class=\"signature-name\" data-v-d046673c>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$check2 = _vm.voucherData.checker) === null || _vm$voucherData$check2 === void 0 ? void 0 : _vm$voucherData$check2.cus_name) || '') + "\n          ") + "</div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=template&id=d046673c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settlementVouchervue_type_script_lang_js_ = ({
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
        approvedAt: null,
        dueDate: '2025-07-24T00:00:00.000Z',
        createdAt: '2025-07-09T15:12:51.000Z',
        updateTimestamp: '2025-07-09T15:12:51.000Z',
        makerId: 2,
        checkerId: null,
        currencyId: 5,
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
    // Watch for changes to voucherData prop and reopen dialog if needed
    voucherData: {
      handler(newValue) {
        if (newValue && newValue.id) {
          this.showPrintDialog = true;
        }
      },
      deep: true,
      immediate: true // This ensures the watcher runs immediately when component is created
    }
  },

  methods: {
    openPrintDialog() {
      this.showPrintDialog = true;
    },
    closePrintDialog() {
      this.showPrintDialog = false;
      // Emit close event to parent
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
    convertToWords(amount, currencyCode) {
      if (!amount) return '';

      // This is a simplified number to words conversion
      // You might want to implement a more comprehensive function
      const numbers = ['', 'ໜຶ່ງ', 'ສອງ', 'ສາມ', 'ສີ່', 'ຫ້າ', 'ຫົກ', 'ເຈັດ', 'ແປດ', 'ເກົ້າ'];
      const units = ['', 'ສິບ', 'ຮ້ອຍ', 'ພັນ', 'ສິບພັນ', 'ແສນ', 'ລ້ານ'];

      // Simple conversion for demonstration
      // In production, you'd want a more robust implementation
      const amountStr = amount.toString();
      const length = amountStr.length;
      if (length <= 6) {
        // Simple case for amounts up to 999,999
        let result = '';
        for (let i = 0; i < length; i++) {
          const digit = parseInt(amountStr[i]);
          const position = length - i - 1;
          if (digit > 0) {
            result += numbers[digit] + units[position];
          }
        }

        // Add currency suffix
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
            result += currencyCode || '';
        }
        return result;
      }

      // For larger amounts, return formatted number with currency
      return this.formatAmount(amount) + ' ' + (currencyCode || '');
    },
    printVoucher() {
      const printContent = this.$refs.voucherContent.innerHTML;
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
              }
              .voucher-container { 
                border: 2px solid #000; 
                padding: 15px; 
                font-size: 12px; 
                line-height: 1.4; 
              }
              .voucher-header { 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start; 
                margin-bottom: 20px; 
                padding-bottom: 10px; 
                border-bottom: 1px solid #ccc; 
              }
              .company-info { 
                flex: 1; 
                text-align: center; 
              }
              .company-name { 
                font-weight: bold; 
                font-size: 14px; 
                margin-bottom: 5px; 
              }
              .department { 
                font-size: 12px; 
                margin-bottom: 3px; 
              }
              .sub-department { 
                font-size: 10px; 
                margin-bottom: 10px; 
              }
              .amount-line { 
                font-size: 10px; 
                letter-spacing: 2px; 
              }
              .voucher-number { 
                flex: 0 0 auto; 
                margin-left: 20px; 
              }
              .number-box { 
                border: 2px solid #000; 
                padding: 8px 12px; 
                text-align: center; 
                background: #f9f9f9; 
              }
              .number-label { 
                font-weight: bold; 
                margin-right: 10px; 
              }
              .number-value { 
                font-weight: bold; 
              }
              .voucher-title { 
                text-align: center; 
                font-size: 16px; 
                font-weight: bold; 
                margin: 20px 0; 
                text-decoration: underline; 
              }
              .voucher-details { 
                margin-bottom: 30px; 
              }
              .detail-row { 
                display: flex; 
                align-items: center; 
                margin-bottom: 12px; 
                min-height: 24px; 
              }
              .detail-row.description { 
                flex-direction: column; 
                align-items: flex-start; 
              }
              .label { 
                font-weight: 500; 
                margin-right: 10px; 
                white-space: nowrap; 
              }
              .value { 
                margin-right: 20px; 
                border-bottom: 1px solid #000; 
                min-width: 40px; 
                text-align: center; 
                padding: 2px 5px; 
              }
              .dotted-line { 
                flex: 1; 
                border-bottom: 1px dotted #000; 
                margin: 0 10px; 
                min-height: 20px; 
                padding: 2px 5px; 
              }
              .currency-options { 
                display: flex; 
                gap: 20px; 
                margin-left: 10px; 
              }
              .currency-options label { 
                display: flex; 
                align-items: center; 
                gap: 5px; 
                font-weight: normal; 
              }
              .amount-number { 
                flex: 1; 
                border-bottom: 1px solid #000; 
                margin: 0 10px; 
                padding: 2px 10px; 
                text-align: right; 
                font-weight: bold; 
              }
              .amount-display { 
                font-weight: bold; 
                font-size: 14px; 
                margin: 0 10px; 
              }
              .description-content { 
                width: 100%; 
                min-height: 60px; 
                border: 1px solid #000; 
                padding: 10px; 
                margin-top: 5px; 
                background: #fafafa; 
              }
              .amount-words { 
                flex: 1; 
                border-bottom: 1px solid #000; 
                margin-left: 10px; 
                padding: 2px 10px; 
                font-style: italic; 
              }
              .signature-section { 
                display: flex; 
                justify-content: space-between; 
                margin-top: 40px; 
                gap: 10px; 
              }
              .signature-box { 
                flex: 1; 
                text-align: center; 
              }
              .signature-title { 
                font-size: 10px; 
                margin-bottom: 30px; 
                font-weight: 500; 
              }
              .signature-line { 
                border-bottom: 1px solid #000; 
                height: 1px; 
                margin-top: 20px; 
              }
              .signature-name { 
                font-size: 9px; 
                margin-top: 5px; 
                font-weight: normal; 
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
      this.showPrintDialog = false;
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementVouchervue_type_script_lang_js_ = (settlementVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(612)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementVouchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d046673c",
  "42cd2c00"
  
)

/* harmony default export */ var settlementVoucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49e87fba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(690);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49e87fba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49e87fba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49e87fba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49e87fba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-summary-container[data-v-49e87fba]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-49e87fba]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-49e87fba]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-49e87fba]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-49e87fba]{display:flex;gap:12px}.filter-section[data-v-49e87fba]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-49e87fba]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-49e87fba]{display:flex;flex-direction:column;gap:8px}.filter-group label[data-v-49e87fba]{color:#555;font-size:14px;font-weight:500}.date-separator[data-v-49e87fba]{align-self:flex-end;color:#666;padding:8px}.filter-actions[data-v-49e87fba]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-49e87fba]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-49e87fba]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-49e87fba]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-lak[data-v-49e87fba]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.summary-card.total-lak .card-icon[data-v-49e87fba]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.total-lak .card-content h3[data-v-49e87fba]{color:#fff;font-size:28px;font-weight:700}.summary-card.total-lak .card-content p[data-v-49e87fba]{color:hsla(0,0%,100%,.9)}.summary-card.currency-card[data-v-49e87fba]{background:#fff;border-left:4px solid #28a745}.card-icon[data-v-49e87fba]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-49e87fba]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.currency[data-v-49e87fba]{background:#e8f5e8;color:#28a745}.card-content[data-v-49e87fba]{flex:1;min-width:0}.card-content h3[data-v-49e87fba]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-49e87fba]{font-size:14px;margin:0}.currency-name[data-v-49e87fba]{color:#495057;font-weight:600;margin-bottom:4px!important}.lak-equivalent[data-v-49e87fba]{color:#6c757d;font-size:13px!important;font-style:italic}@keyframes slideInUp-49e87fba{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.summary-card[data-v-49e87fba]{animation:slideInUp-49e87fba .5s ease-out}.currency-code[data-v-49e87fba]{color:#007bff;font-weight:600}.table-section[data-v-49e87fba]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-49e87fba]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-49e87fba]{color:#333;margin:0}.record-count[data-v-49e87fba]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-49e87fba]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-49e87fba]{overflow-x:auto}.data-table[data-v-49e87fba]{border-collapse:collapse;width:100%}.data-table td[data-v-49e87fba],.data-table th[data-v-49e87fba]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-49e87fba]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-49e87fba]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-49e87fba]:hover{background-color:#e9ecef}.data-table th i[data-v-49e87fba]{margin-left:8px;opacity:.5}.amount-cell[data-v-49e87fba]{color:#28a745;font-weight:600}.actions-cell[data-v-49e87fba]{display:flex;gap:8px}.method-badge[data-v-49e87fba]{border-radius:20px;font-size:12px;font-weight:500;padding:4px 12px;text-transform:capitalize}.method-badge.cash[data-v-49e87fba]{background-color:#d4edda;color:#155724}.method-badge.bank_transfer[data-v-49e87fba]{background-color:#d1ecf1;color:#0c5460}.method-badge.deduction[data-v-49e87fba]{background-color:#fce4ec;color:#880e4f}.ministry-tag[data-v-49e87fba]{background-color:#e7f3ff;color:#06c}.chart-account-tag[data-v-49e87fba],.ministry-tag[data-v-49e87fba]{border-radius:12px;font-size:11px;font-weight:500;padding:3px 8px}.chart-account-tag[data-v-49e87fba]{background-color:#fff3cd;color:#856404}.currency-tag[data-v-49e87fba]{background-color:#e8f5e8;border-radius:12px;color:#28a745;font-size:11px;font-weight:600;padding:3px 8px;text-transform:uppercase}.no-data[data-v-49e87fba]{color:#999;font-size:12px;font-style:italic}.pagination-container[data-v-49e87fba]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-49e87fba]{color:#666;font-size:14px}.pagination-controls[data-v-49e87fba]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-49e87fba]{color:#666;padding:6px 12px}.btn[data-v-49e87fba]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-49e87fba]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-49e87fba]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-49e87fba]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-49e87fba]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-49e87fba]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-49e87fba]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-49e87fba]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-49e87fba]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-49e87fba]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-49e87fba]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-49e87fba]:hover{background-color:#17a2b8;color:#fff}.btn-sm[data-v-49e87fba]{font-size:12px;padding:4px 8px}.form-control[data-v-49e87fba]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-49e87fba]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.loading-overlay[data-v-49e87fba]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-49e87fba]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-49e87fba]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:768px){.settlement-summary-container[data-v-49e87fba]{padding:10px}.header-content[data-v-49e87fba]{align-items:flex-start}.filter-row[data-v-49e87fba],.header-content[data-v-49e87fba]{flex-direction:column;gap:16px}.filter-group[data-v-49e87fba]{width:100%}.filter-actions[data-v-49e87fba]{flex-direction:row;width:100%}.summary-cards[data-v-49e87fba]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-49e87fba]{padding:20px}.card-icon[data-v-49e87fba]{height:50px;margin-right:16px;width:50px}.card-content h3[data-v-49e87fba],.card-icon[data-v-49e87fba]{font-size:20px}.pagination-container[data-v-49e87fba],.table-header[data-v-49e87fba]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-49e87fba]{flex-wrap:wrap}.actions-cell[data-v-49e87fba]{flex-direction:column;gap:4px}}@media (max-width:576px){.summary-card[data-v-49e87fba]{flex-direction:column;text-align:center}.card-icon[data-v-49e87fba]{margin:0 auto 16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map