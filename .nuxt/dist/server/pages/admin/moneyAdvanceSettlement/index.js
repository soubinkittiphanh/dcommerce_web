exports.ids = [173,65,66,67];
exports.modules = {

/***/ 1081:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvanceSettlement/index.vue?vue&type=template&id=6d511296&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settlement-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-6d511296><div class=\"header-content\" data-v-6d511296><h1 class=\"page-title\" data-v-6d511296>ສະຫລຸບບັນຊີ ລາຍຮັບ</h1> <div class=\"header-actions\" data-v-6d511296><button class=\"btn btn-primary\" data-v-6d511296><i class=\"fas fa-plus\" data-v-6d511296></i>\n          ລົງລາຍຮັບ ການຊຳລະ\n        </button> <button class=\"btn btn-secondary\" data-v-6d511296><i class=\"fas fa-download\" data-v-6d511296></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-6d511296>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-6d511296>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-6d511296><label data-v-6d511296>ເລືອກຕາມວັນທີ:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.startDate) + " class=\"form-control\" data-v-6d511296> <span class=\"date-separator\" data-v-6d511296>ຫາ</span> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.endDate) + " class=\"form-control\" data-v-6d511296></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-6d511296>", "</div>", [_vm._ssrNode("<label data-v-6d511296>ຊ່ອງທາງລາຍຮັບ:</label> "), _c('select', {
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
  }, [_vm._v("Deduction")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-6d511296>", "</div>", [_vm._ssrNode("<label data-v-6d511296>ເລືອກບັນຊີ:</label> "), _c('select', {
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
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-6d511296>", "</div>", [_vm._ssrNode("<label data-v-6d511296>ເລືອກກະຊວງ:</label> "), _c('select', {
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
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-6d511296>", "</div>", [_vm._ssrNode("<label data-v-6d511296>ເລືອກບັນຊີລວມ:</label> "), _c('select', {
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
  })], 2)], 2), _vm._ssrNode(" <div class=\"filter-actions\" data-v-6d511296><button class=\"btn btn-outline-primary\" data-v-6d511296><i class=\"fas fa-search\" data-v-6d511296></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-6d511296><i class=\"fas fa-undo\" data-v-6d511296></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-6d511296><div class=\"summary-card total-lak\" data-v-6d511296><div class=\"card-icon total\" data-v-6d511296><i class=\"fas fa-calculator\" data-v-6d511296></i></div> <div class=\"card-content\" data-v-6d511296><h3 data-v-6d511296>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.totalLAK.amount, 'LAK'))) + "</h3> <p data-v-6d511296>" + _vm._ssrEscape("ລວມຍອດທັງໝົດ (LAK) - " + _vm._s(_vm.summaryStats.totalLAK.count) + " ລາຍການ") + "</p></div></div> " + _vm._ssrList(_vm.summaryStats.currencies, function (currencyStat) {
    return "<div class=\"summary-card currency-card\" data-v-6d511296><div class=\"card-icon currency\" data-v-6d511296><i class=\"fas fa-coins\" data-v-6d511296></i></div> <div class=\"card-content\" data-v-6d511296><h3 data-v-6d511296>" + _vm._ssrEscape("\n          " + _vm._s(_vm.formatCurrencyAmount(currencyStat.originalAmount, currencyStat.currencyCode)) + "\n        ") + "</h3> <p class=\"currency-name\" data-v-6d511296>" + _vm._ssrEscape("\n          " + _vm._s(currencyStat.currencyName) + " (" + _vm._s(currencyStat.count) + " ລາຍການ)\n        ") + "</p> <p class=\"lak-equivalent\" data-v-6d511296>" + _vm._ssrEscape("\n          ≈ " + _vm._s(_vm.formatCurrency(currencyStat.lakEquivalent, 'LAK')) + "\n        ") + "</p></div></div>";
  }) + "</div> "), _vm._ssrNode("<div class=\"table-section\" data-v-6d511296>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-6d511296>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-6d511296><h3 data-v-6d511296>ລາຍການຮັບເງິນ</h3> <span class=\"record-count\" data-v-6d511296>" + _vm._ssrEscape(_vm._s(_vm.filteredSettlements.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-6d511296>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-6d511296>", "</div>", [_vm._ssrNode("<label data-v-6d511296>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-6d511296>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-6d511296><table class=\"data-table\" data-v-6d511296><thead data-v-6d511296><tr data-v-6d511296><th class=\"sortable\" data-v-6d511296>\n              ID\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('id')) + " data-v-6d511296></i></th> <th class=\"sortable\" data-v-6d511296>\n              ວັນທີລົງຊຳລະ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('settlementDate')) + " data-v-6d511296></i></th> <th class=\"sortable\" data-v-6d511296>\n              Payment Method\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('method')) + " data-v-6d511296></i></th> <th class=\"sortable\" data-v-6d511296>\n              ຜູ້ລົງບັນຊີ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('requester')) + " data-v-6d511296></i></th> <th class=\"sortable\" data-v-6d511296>\n              ຈຳນວນເງິນ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('amount')) + " data-v-6d511296></i></th> <th data-v-6d511296>ສະກຸນເງິນ</th> <th data-v-6d511296>Ministry</th> <th data-v-6d511296>Chart Account</th> <th data-v-6d511296>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-6d511296>" + _vm._ssrList(_vm.paginatedSettlements, function (settlement) {
    return "<tr data-v-6d511296><td data-v-6d511296>" + _vm._ssrEscape(_vm._s(settlement.id) + " " + _vm._s(settlement.moneyAdvanceId)) + "</td> <td data-v-6d511296>" + _vm._ssrEscape(_vm._s(_vm.formatDate(settlement.settlementDate))) + "</td> <td data-v-6d511296><span" + _vm._ssrClass(null, ['method-badge', settlement.method]) + " data-v-6d511296>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatMethod(settlement.method)) + "\n              ") + "</span></td> <td data-v-6d511296>" + _vm._ssrEscape(_vm._s(settlement.requester)) + "</td> <td class=\"amount-cell\" data-v-6d511296>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatSettlementAmount(settlement)) + "\n            ") + "</td> <td data-v-6d511296>" + (_vm.getSettlementCurrency(settlement) ? "<span class=\"currency-tag\" data-v-6d511296>" + _vm._ssrEscape("\n                " + _vm._s(_vm.getSettlementCurrency(settlement).code) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-6d511296>-</span>") + "</td> <td data-v-6d511296>" + (settlement.ministry ? "<span class=\"ministry-tag\" data-v-6d511296>" + _vm._ssrEscape("\n                " + _vm._s(settlement.ministry.ministryCode) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-6d511296>-</span>") + "</td> <td data-v-6d511296>" + (settlement.chartAccount ? "<span class=\"chart-account-tag\" data-v-6d511296>" + _vm._ssrEscape("\n                " + _vm._s(settlement.chartAccount.accountNumber) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-6d511296>-</span>") + "</td> <td class=\"actions-cell\" data-v-6d511296><button title=\"View Details\" class=\"btn btn-sm btn-outline-primary\" data-v-6d511296><i class=\"fas fa-eye\" data-v-6d511296></i></button> <button title=\"Edit\" class=\"btn btn-sm btn-outline-info\" data-v-6d511296><i class=\"fas fa-edit\" data-v-6d511296></i></button> <button title=\"Print\" class=\"btn btn-sm btn-outline-secondary\" data-v-6d511296><i class=\"fas fa-print\" data-v-6d511296></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-6d511296><div class=\"pagination-info\" data-v-6d511296>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-6d511296><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-6d511296>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-6d511296>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-6d511296>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-6d511296>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-6d511296>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('SettlementDialog', {
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
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-6d511296><div class=\"loading-spinner\" data-v-6d511296><i class=\"fas fa-spinner fa-spin\" data-v-6d511296></i> <p data-v-6d511296>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/moneyAdvanceSettlement/index.vue?vue&type=template&id=6d511296&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(104);

// EXTERNAL MODULE: ./components/MA/settlementDialog/index.vue + 4 modules
var settlementDialog = __webpack_require__(580);

// EXTERNAL MODULE: ./components/MA/settlementViewDialog/index.vue + 4 modules
var settlementViewDialog = __webpack_require__(813);

// EXTERNAL MODULE: ./components/MA/settlementVoucher/index.vue + 4 modules
var settlementVoucher = __webpack_require__(500);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvanceSettlement/index.vue?vue&type=script&lang=js&
















/* harmony default export */ var moneyAdvanceSettlementvue_type_script_lang_js_ = ({
  name: 'SettlementSummary',
  components: {
    SettlementDialog: settlementDialog["default"],
    SettlementViewDialog: settlementViewDialog["default"],
    VoucherPrintComponent: settlementVoucher["default"]
  },
  middleware: 'auths',
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
              externalRef: settlement.externalRef,
              externalRefNo: settlement.externalRefNo,
              chequeNo: settlement.chequeNo,
              fromPersonName: settlement.fromPersonName,
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
          // this.closeEditDialog()

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
  
  var style0 = __webpack_require__(887)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_moneyAdvanceSettlementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d511296",
  "fae257a2"
  
)

/* harmony default export */ var moneyAdvanceSettlement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(491);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d583ff5e", content, true, context)
};

/***/ }),

/***/ 481:
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
  add("25e11312", content, true, context)
};

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47ad4293_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(466);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47ad4293_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47ad4293_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47ad4293_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47ad4293_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-47ad4293]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-47ad4293]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow-y:auto;width:90%}.modal-header[data-v-47ad4293]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #eee;border-radius:8px 8px 0 0;color:#fff;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-47ad4293]{color:#fff;margin:0}.close-btn[data-v-47ad4293]{background:none;border:none;color:#fff;cursor:pointer;font-size:18px;opacity:.8;transition:opacity .2s}.close-btn[data-v-47ad4293]:hover{opacity:1}.modal-body[data-v-47ad4293]{padding:20px}.modal-footer[data-v-47ad4293]{background:#f8f9fa;border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-47ad4293]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-47ad4293]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-primary[data-v-47ad4293]:hover{background:linear-gradient(135deg,#5a67d8,#6b46c1);transform:translateY(-1px)}.btn-secondary[data-v-47ad4293]{background:#6c757d;color:#fff}.btn-secondary[data-v-47ad4293]:hover{background:#545b62;transform:translateY(-1px)}.voucher-container[data-v-47ad4293]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;line-height:1.4;margin:0 auto;max-width:700px;padding:20px;width:100%}.voucher-header[data-v-47ad4293]{border-bottom:1px solid #ccc;padding-bottom:10px}.ministry-voucher-section[data-v-47ad4293],.voucher-header[data-v-47ad4293]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:20px}.ministry-voucher-section[data-v-47ad4293]{padding:10px 0}.ministry-titles[data-v-47ad4293]{flex:1;text-align:left}.ministry-titles .voucher-title[data-v-47ad4293]{font-size:14px;font-weight:400;margin-bottom:5px;text-align:left;-webkit-text-decoration:none;text-decoration:none}.company-info[data-v-47ad4293]{flex:1;text-align:center}.company-name[data-v-47ad4293]{font-size:16px;font-weight:700;margin-bottom:5px}.department[data-v-47ad4293]{font-size:14px;margin-bottom:3px}.sub-department[data-v-47ad4293]{font-size:12px;margin-bottom:10px}.amount-line[data-v-47ad4293]{font-size:12px;letter-spacing:2px}.voucher-number[data-v-47ad4293]{flex:0 0 auto;margin-left:20px;text-align:right}.number-box[data-v-47ad4293]{background:#f9f9f9;border:2px solid #333;margin-bottom:8px;padding:8px 12px;text-align:center}.external-ref-box[data-v-47ad4293]{background:#f5f5f5;border:1px solid #666;font-size:10px;padding:4px 8px;text-align:center}.number-label[data-v-47ad4293],.ref-label[data-v-47ad4293]{font-weight:700;margin-right:10px}.number-value[data-v-47ad4293]{color:#d32f2f;font-weight:700}.ref-value[data-v-47ad4293]{color:#1976d2;font-weight:700}.voucher-title[data-v-47ad4293]{font-size:18px;font-weight:700;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-details[data-v-47ad4293]{margin-bottom:30px}.detail-row[data-v-47ad4293]{align-items:center;display:flex;margin-bottom:12px;min-height:24px}.detail-row.description[data-v-47ad4293]{align-items:flex-start;flex-direction:column}.label[data-v-47ad4293]{font-weight:500;margin-right:10px;white-space:nowrap}.value[data-v-47ad4293]{border-bottom:1px solid #333;font-weight:600;margin-right:20px;min-width:40px;padding:2px 5px;text-align:center}.dotted-line[data-v-47ad4293]{border-bottom:1px dotted #333;flex:1;margin:0 10px;min-height:20px;padding:2px 5px}.currency-options[data-v-47ad4293]{display:flex;gap:20px;margin-left:10px}.currency-options label[data-v-47ad4293]{align-items:center;display:flex;font-weight:400;gap:5px}.amount-display[data-v-47ad4293]{color:#d32f2f;font-size:16px;font-weight:700;margin:0 10px}.description-content[data-v-47ad4293]{background:#fafafa;border:1px solid #333;margin-top:5px;min-height:60px;padding:10px;width:100%}.amount-words[data-v-47ad4293]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:10px;padding:2px 10px}.signature-section[data-v-47ad4293]{display:flex;gap:10px;justify-content:space-between;margin-top:40px}.signature-box[data-v-47ad4293]{flex:1;text-align:center}.signature-title[data-v-47ad4293]{font-size:12px;font-weight:500;margin-bottom:30px}.signature-line[data-v-47ad4293]{border-bottom:1px solid #333;height:1px;margin-top:20px}.signature-name[data-v-47ad4293]{color:#666;font-size:10px;font-weight:400;margin-top:5px}.settlement-footer[data-v-47ad4293]{border-top:1px solid #ccc;color:#666;font-size:11px;margin-top:20px;padding-top:10px}.footer-row[data-v-47ad4293]{align-items:center;display:flex;margin-bottom:5px}.footer-label[data-v-47ad4293]{color:#333;font-weight:600;margin-right:8px}.footer-value[data-v-47ad4293]{color:#333;margin-right:20px}.footer-spacer[data-v-47ad4293]{flex:1}@media print{body *[data-v-47ad4293]{visibility:hidden}.print-only[data-v-47ad4293],.print-only *[data-v-47ad4293]{visibility:visible}.print-only[data-v-47ad4293]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-47ad4293]{border:2px solid #000!important;font-size:12px!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}.ministry-voucher-section[data-v-47ad4293]{align-items:flex-start!important;display:flex!important;justify-content:space-between!important}.external-ref-box[data-v-47ad4293],.footer-row[data-v-47ad4293],.settlement-footer[data-v-47ad4293]{font-size:9px!important}}.print-only[data-v-47ad4293]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-47ad4293]{left:auto;position:static;top:auto}}@media (max-width:768px){.ministry-voucher-section[data-v-47ad4293]{flex-direction:column;gap:16px}.voucher-number[data-v-47ad4293]{align-self:flex-end;margin-left:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=template&id=47ad4293&scoped=true&
var render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$curre6, _vm$voucherData$minis, _vm$voucherData$proce, _vm$voucherData$proce2, _vm$voucherData$check, _vm$voucherData$curre7, _vm$voucherData$curre8, _vm$voucherData$curre9, _vm$voucherData$curre10, _vm$voucherData$curre11, _vm$voucherData$curre12, _vm$voucherData$proce3, _vm$voucherData$proce4, _vm$voucherData$updat;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.showPrintDialog ? "<div class=\"modal-overlay\" data-v-47ad4293><div class=\"modal-content\" data-v-47ad4293><div class=\"modal-header\" data-v-47ad4293><h3 data-v-47ad4293>ພິມໃບຮັບເງິນ</h3> <button class=\"close-btn\" data-v-47ad4293><i class=\"fas fa-times\" data-v-47ad4293></i></button></div> <div class=\"modal-body\" data-v-47ad4293><div id=\"voucher-print\" class=\"voucher-container\" data-v-47ad4293><div class=\"voucher-header\" data-v-47ad4293><div class=\"company-info\" data-v-47ad4293><div class=\"company-name\" data-v-47ad4293>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-47ad4293>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div> <div class=\"amount-line\" data-v-47ad4293>.........(000)..........</div></div></div> <div class=\"ministry-voucher-section\" data-v-47ad4293><div class=\"ministry-titles\" data-v-47ad4293><div class=\"voucher-title\" data-v-47ad4293>ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.</div> <div class=\"voucher-title\" data-v-47ad4293>ກົມແຜນການ ແລະ ການເງິນ</div> <div class=\"voucher-title\" data-v-47ad4293>ພະແນກຄຸ້ມຄອງລາຍຮັບ</div></div> <div class=\"voucher-number\" data-v-47ad4293><div class=\"number-box\" data-v-47ad4293><span class=\"number-label\" data-v-47ad4293>No</span> <span class=\"number-value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ວັນທີ </span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatDateLao(_vm.voucherData.settlementDate))) + "</span></div></div></div> <div data-v-47ad4293><div class=\"voucher-title\" data-v-47ad4293>ໃບຮັບເງິນ</div></div> <div class=\"voucher-details\" data-v-47ad4293><div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ອີງຕາມ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRef || '')) + "</span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ສະບັບ ເລກທີ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRefNo || '')) + "</span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ພະແນກຄັງເງິນສົດໄດ້ຮັບເງິນ </span> <label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cash') + " data-v-47ad4293></label> <span class=\"label\" data-v-47ad4293> ສົດ/ </span> <label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cheque') + " data-v-47ad4293></label> <span class=\"label\" data-v-47ad4293> ເຊັກ/ </span> <label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'bank_transfer') + " data-v-47ad4293></label> <span class=\"label\" data-v-47ad4293> ໂອນທະນາຄານ/ </span> <label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-47ad4293></label> <span class=\"label\" data-v-47ad4293> LAK/ </span> <label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-47ad4293></label> <span class=\"label\" data-v-47ad4293> THB/ </span> <label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-47ad4293></label> <span class=\"label\" data-v-47ad4293> USD </span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ຈຳນວນເງິນ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.name) || ((_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.currencyName) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ຂຽນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre6 = _vm.voucherData.currency) === null || _vm$voucherData$curre6 === void 0 ? void 0 : _vm$voucherData$curre6.code))) + "</span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ຈາກທ່ານ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.fromPersonName || '')) + "</span> <span class=\"label\" data-v-47ad4293>ຊື່ງແມ່ນພະນັກງານສັງກັດຢູ່</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$minis = _vm.voucherData.ministry) === null || _vm$voucherData$minis === void 0 ? void 0 : _vm$voucherData$minis.ministryName) || '')) + "</span></div> " + (_vm.voucherData.method === 'bank_transfer' && _vm.voucherData.bankAccount ? "<div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ບັນຊີທະນາຄານ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.bankAccount.bankName)) + "</span> <span class=\"label\" data-v-47ad4293>ເລກບັນຊີ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.bankAccount.accountNumber)) + "</span></div>" : "<!---->") + " " + (_vm.voucherData.method === 'cheque' && _vm.voucherData.chequeNo ? "<div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ເລກເຊັກ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo)) + "</span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-47ad4293><span class=\"dotted-line\" data-v-47ad4293></span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ເນື້ອໃນລາຍຮັບ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.notes || _vm.voucherData.purpose || 'ບໍ່ມີຫມາຍເຫດ')) + "</span></div> " + (_vm.voucherData.moneyAdvance ? "<div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ</span> <span class=\"value\" data-v-47ad4293>" + _vm._ssrEscape("#" + _vm._s(_vm.voucherData.moneyAdvance.id)) + "</span> <span class=\"label\" data-v-47ad4293>ຈຳນວນ</span> <span class=\"value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.moneyAdvance.amount))) + "</span> <span class=\"dotted-line\" data-v-47ad4293></span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-47ad4293><span class=\"dotted-line\" data-v-47ad4293></span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"dotted-line\" data-v-47ad4293></span></div></div> <div class=\"voucher-title\" data-v-47ad4293>\n            ດັ່ງນັ້ນ ຈິ່ງໄດ້ພ້ອມກັນລົງລາຍເຊັນ ຢັ້ງຢືນໄວ້ເປັນຫຫຼັກຖານ\n          </div> <div class=\"signature-section\" data-v-47ad4293><div class=\"signature-box\" data-v-47ad4293><div class=\"signature-title\" data-v-47ad4293>ຫົວໜ້າພະແນກ</div> <div class=\"signature-line\" data-v-47ad4293></div> <div class=\"signature-name\" data-v-47ad4293></div></div> <div class=\"signature-box\" data-v-47ad4293><div class=\"signature-title\" data-v-47ad4293>ຜູ້ຮັບ</div> <div class=\"signature-line\" data-v-47ad4293></div> <div class=\"signature-name\" data-v-47ad4293>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$proce = _vm.voucherData.proceeder) === null || _vm$voucherData$proce === void 0 ? void 0 : _vm$voucherData$proce.cus_name) || ((_vm$voucherData$proce2 = _vm.voucherData.proceeder) === null || _vm$voucherData$proce2 === void 0 ? void 0 : _vm$voucherData$proce2.name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-47ad4293><div class=\"signature-title\" data-v-47ad4293>ຜູ້ມອບ</div> <div class=\"signature-line\" data-v-47ad4293></div> <div class=\"signature-name\" data-v-47ad4293>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.fromPersonName || ((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div></div></div></div> <div class=\"modal-footer\" data-v-47ad4293><button class=\"btn btn-secondary\" data-v-47ad4293><i class=\"fas fa-times\" data-v-47ad4293></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-47ad4293><i class=\"fas fa-print\" data-v-47ad4293></i>\n          ພິມ\n        </button></div></div></div>" : "<!---->") + " <div class=\"print-only\"" + _vm._ssrStyle(null, null, {
    display: false ? undefined : 'none'
  }) + " data-v-47ad4293><div class=\"voucher-container print-version\" data-v-47ad4293><div class=\"voucher-header\" data-v-47ad4293><div class=\"company-info\" data-v-47ad4293><div class=\"company-name\" data-v-47ad4293>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</div> <div class=\"company-name\" data-v-47ad4293>\n            ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n          </div> <div class=\"department\" data-v-47ad4293>ກົມການເງິນ ແລະ ສິນເຊື່ອ</div> <div class=\"sub-department\" data-v-47ad4293>\n            ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ\n          </div> <div class=\"amount-line\" data-v-47ad4293>.........(000)..........</div></div></div> <div class=\"ministry-voucher-section\" data-v-47ad4293><div class=\"ministry-titles\" data-v-47ad4293><div class=\"voucher-title\" data-v-47ad4293>ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.</div> <div class=\"voucher-title\" data-v-47ad4293>ກົມແຜນການ ແລະ ການເງິນ</div> <div class=\"voucher-title\" data-v-47ad4293>ພະແນກຄຸ້ມຄອງລາຍຮັບ</div></div> <div class=\"voucher-number\" data-v-47ad4293><div class=\"number-box\" data-v-47ad4293><span class=\"number-label\" data-v-47ad4293>No</span> <span class=\"number-value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div> " + (_vm.voucherData.externalRefNo ? "<div class=\"external-ref-box\" data-v-47ad4293><span class=\"ref-label\" data-v-47ad4293>Ref:</span> <span class=\"ref-value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRefNo)) + "</span></div>" : "<!---->") + "</div></div> <div class=\"voucher-title\" data-v-47ad4293>ໃບຮັບເງິນ</div> <div class=\"voucher-details\" data-v-47ad4293><div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ຈາກທ່ານ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.fromPersonName || 'N/A')) + "</span></div> " + (_vm.voucherData.method === 'cheque' && _vm.voucherData.chequeNo ? "<div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ເລກເຊັກ</span> <span class=\"dotted-line\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo)) + "</span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ເລກທີ</span> <span class=\"value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span> <span class=\"label\" data-v-47ad4293>ວັນທີນີ້</span> <span class=\"value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.bookingDate || _vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-47ad4293>ເດືອນ</span> <span class=\"value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.bookingDate || _vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-47ad4293>ປີ</span> <span class=\"value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.bookingDate || _vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span> <div class=\"currency-options\" data-v-47ad4293><label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre7 = _vm.voucherData.currency) === null || _vm$voucherData$curre7 === void 0 ? void 0 : _vm$voucherData$curre7.code) === 'LAK') + " data-v-47ad4293>\n              LAK</label> <label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre8 = _vm.voucherData.currency) === null || _vm$voucherData$curre8 === void 0 ? void 0 : _vm$voucherData$curre8.code) === 'THB') + " data-v-47ad4293>\n              THB</label> <label data-v-47ad4293><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre9 = _vm.voucherData.currency) === null || _vm$voucherData$curre9 === void 0 ? void 0 : _vm$voucherData$curre9.code) === 'USD') + " data-v-47ad4293>\n              USD</label></div></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ຈຳນວນ</span> <span class=\"amount-display\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre10 = _vm.voucherData.currency) === null || _vm$voucherData$curre10 === void 0 ? void 0 : _vm$voucherData$curre10.name) || ((_vm$voucherData$curre11 = _vm.voucherData.currency) === null || _vm$voucherData$curre11 === void 0 ? void 0 : _vm$voucherData$curre11.currencyName) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre12 = _vm.voucherData.currency) === null || _vm$voucherData$curre12 === void 0 ? void 0 : _vm$voucherData$curre12.code))) + "</span></div> <div class=\"detail-row description\" data-v-47ad4293><span class=\"label\" data-v-47ad4293>ເນື້ອໃນລາຍການ</span> <div class=\"description-content\" data-v-47ad4293>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.notes || _vm.voucherData.purpose || 'ບໍ່ມີຫມາຍເຫດ') + "\n          ") + "</div></div></div> <div class=\"signature-section\" data-v-47ad4293><div class=\"signature-box\" data-v-47ad4293><div class=\"signature-title\" data-v-47ad4293>ຫົວໜ້າພະແນກ</div> <div class=\"signature-line\" data-v-47ad4293></div> <div class=\"signature-name\" data-v-47ad4293></div></div> <div class=\"signature-box\" data-v-47ad4293><div class=\"signature-title\" data-v-47ad4293>ຜູ້ຮັບຄັງເງິນສົດ</div> <div class=\"signature-line\" data-v-47ad4293></div> <div class=\"signature-name\" data-v-47ad4293>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$proce3 = _vm.voucherData.proceeder) === null || _vm$voucherData$proce3 === void 0 ? void 0 : _vm$voucherData$proce3.cus_name) || ((_vm$voucherData$proce4 = _vm.voucherData.proceeder) === null || _vm$voucherData$proce4 === void 0 ? void 0 : _vm$voucherData$proce4.name) || '') + "\n          ") + "</div></div> <div class=\"signature-box\" data-v-47ad4293><div class=\"signature-title\" data-v-47ad4293>ຜູ້ມອບ</div> <div class=\"signature-line\" data-v-47ad4293></div> <div class=\"signature-name\" data-v-47ad4293>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.fromPersonName || '') + "\n          ") + "</div></div> <div class=\"signature-box\" data-v-47ad4293><div class=\"signature-title\" data-v-47ad4293>ຜູ້ກວດສອບ</div> <div class=\"signature-line\" data-v-47ad4293></div> <div class=\"signature-name\" data-v-47ad4293>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$updat = _vm.voucherData.updateUser) === null || _vm$voucherData$updat === void 0 ? void 0 : _vm$voucherData$updat.cus_name) || '') + "\n          ") + "</div></div></div> <div class=\"settlement-footer\" data-v-47ad4293><div class=\"footer-row\" data-v-47ad4293><span class=\"footer-label\" data-v-47ad4293>ວັນທີຊຳລະ:</span> <span class=\"footer-value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatDateLao(_vm.voucherData.bookingDate || _vm.voucherData.settlementDate))) + "</span> <span class=\"footer-label\" data-v-47ad4293>ເວລາ:</span> <span class=\"footer-value\" data-v-47ad4293>" + _vm._ssrEscape(_vm._s(_vm.formatTime(_vm.voucherData.createdAt))) + "</span></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=template&id=47ad4293&scoped=true&

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
        // ✅ NEW: Default method
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

        // Handle remainder (thousands and hundreds)
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
      } else if (length <= 10) {
        // 1,000,000,000 - 9,999,999,999 (billions)
        const billions = Math.floor(amount / 1000000000);
        const remainder = amount % 1000000000;

        // Handle billions part
        result = numbers[billions] + 'ພັນລ້ານ';

        // Handle remainder (millions, thousands, hundreds)
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
              if (millionRemainder >= 1000) {
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
    // ✅ FIXED: Single printVoucher method without auto-close
    printVoucher() {
      const printContent = this.$refs.voucherContent.innerHTML;
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
              }
              .voucher-container { 
                border: 2px solid #000; 
                padding: 15px; 
                font-size: 12px; 
                line-height: 1.4; 
                max-width: 210mm;
                margin: 0 auto;
              }
              .voucher-header { 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start; 
                margin-bottom: 20px; 
                padding-bottom: 10px; 
                border-bottom: 1px solid #ccc; 
              }
              .ministry-voucher-section {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 20px;
                padding: 10px 0;
              }
              .ministry-titles {
                flex: 1;
                text-align: left;
              }
              .ministry-titles .voucher-title {
                font-size: 12px;
                margin-bottom: 4px;
                text-align: left;
                text-decoration: none;
                font-weight: normal;
                color: #333;
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
                text-align: right;
              }
              .number-box { 
                border: 2px solid #000; 
                padding: 8px 12px; 
                text-align: center; 
                background: #f9f9f9; 
                margin-bottom: 8px;
              }
              .external-ref-box {
                border: 1px solid #666;
                padding: 4px 8px;
                text-align: center;
                background: #f5f5f5;
                font-size: 10px;
              }
              .number-label, .ref-label { 
                font-weight: bold; 
                margin-right: 10px; 
              }
              .number-value { 
                font-weight: bold; 
                color: #d32f2f;
              }
              .ref-value { 
                font-weight: bold; 
                color: #1976d2;
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
                font-weight: 600;
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
              .amount-display { 
                font-weight: bold; 
                font-size: 14px; 
                margin: 0 10px; 
                color: #d32f2f;
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
              .settlement-footer {
                margin-top: 20px;
                padding-top: 10px;
                border-top: 1px solid #ccc;
                font-size: 10px;
              }
              .footer-row {
                display: flex;
                align-items: center;
                margin-bottom: 5px;
              }
              .footer-label {
                font-weight: 600;
                margin-right: 8px;
              }
              .footer-value {
                margin-right: 20px;
              }
              .footer-spacer {
                flex: 1;
              }
              @media print {
                .ministry-voucher-section {
                  display: flex !important;
                  justify-content: space-between !important;
                  align-items: flex-start !important;
                  margin-bottom: 20px !important;
                  padding: 10px 0 !important;
                }
                .ministry-titles {
                  flex: 1 !important;
                  text-align: left !important;
                }
                .ministry-titles .voucher-title {
                  font-size: 11px !important;
                  margin-bottom: 3px !important;
                  text-align: left !important;
                  text-decoration: none !important;
                  font-weight: normal !important;
                }
                .voucher-number {
                  flex: 0 0 auto !important;
                  margin-left: 20px !important;
                  text-align: right !important;
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

      // ✅ REMOVED: Don't auto-close the dialog after printing
      // this.showPrintDialog = false
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementVouchervue_type_script_lang_js_ = (settlementVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(490)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementVouchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "47ad4293",
  "42cd2c00"
  
)

/* harmony default export */ var settlementVoucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8663d5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8663d5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8663d5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8663d5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8663d5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-header-right[data-v-b8663d5c]{align-items:center;display:flex;gap:15px}.voucher-number[data-v-b8663d5c]{color:#fff;font-size:14px;font-weight:600;opacity:.9}.modal-overlay[data-v-b8663d5c]{align-items:center;animation:fadeIn-b8663d5c .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.enhanced-dialog[data-v-b8663d5c]{animation:slideIn-b8663d5c .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);display:flex;flex-direction:column;height:95vh;margin:0 auto;max-height:95vh;max-width:95vw;overflow:hidden;width:95%}.modal-header[data-v-b8663d5c]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;flex-shrink:0;justify-content:space-between;padding:16px 24px}.modal-title-section[data-v-b8663d5c]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-b8663d5c]{font-size:18px;opacity:.9}.modal-title[data-v-b8663d5c]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-b8663d5c]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;opacity:.8;padding:6px;transition:opacity .2s}.close-btn[data-v-b8663d5c]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-b8663d5c]{flex:1;min-height:0;overflow-y:auto;padding:16px 24px}.form-loading[data-v-b8663d5c]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-b8663d5c]{animation:spin-b8663d5c 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-b8663d5c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid.compact[data-v-b8663d5c]{grid-gap:12px;align-content:start;display:grid;gap:12px;grid-template-columns:repeat(4,1fr);height:100%}.form-group[data-v-b8663d5c]{margin-bottom:0}.form-group.full-width[data-v-b8663d5c]{grid-column:1/-1}.form-label[data-v-b8663d5c]{align-items:center;color:#374151;display:flex;font-size:12px;font-weight:600;gap:6px;margin-bottom:4px}.form-label.required[data-v-b8663d5c]:after{color:#e74c3c;content:\"*\";margin-left:2px}.form-label i[data-v-b8663d5c]{color:#6b7280;font-size:10px}.form-control.compact[data-v-b8663d5c]{background:#fafafa;border:2px solid #e5e7eb;border-radius:6px;box-sizing:border-box;font-size:13px;padding:8px 12px;transition:all .2s ease;width:100%}.form-control.compact[data-v-b8663d5c]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}.form-control.compact[data-v-b8663d5c]:disabled{background-color:#f3f4f6;border-color:#d1d5db;color:#6b7280;cursor:not-allowed}.form-control.is-invalid[data-v-b8663d5c]{border-color:#e74c3c}.invalid-feedback[data-v-b8663d5c]{color:#e74c3c;display:block;font-size:10px;margin-top:2px}.input-group.compact[data-v-b8663d5c]{border-radius:6px;display:flex;overflow:hidden}.input-group.compact .form-control[data-v-b8663d5c]{border-radius:0;border-right:none}.input-group-append[data-v-b8663d5c]{display:flex}.input-group-text.compact[data-v-b8663d5c]{background:#f8f9fa;border:2px solid #e5e7eb;border-left:none;color:#6b7280;font-size:12px;font-weight:600;padding:8px 12px}.custom-select-wrapper[data-v-b8663d5c]{position:relative}.custom-select.compact[data-v-b8663d5c]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:30px}.select-icon[data-v-b8663d5c]{color:#6b7280;font-size:10px;pointer-events:none;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.link-advance-options.compact[data-v-b8663d5c]{display:flex;gap:12px;margin-top:4px}.radio-option[data-v-b8663d5c]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:12px;gap:4px}.radio-option input[type=radio][data-v-b8663d5c]{margin:0;transform:scale(.8)}.radio-label[data-v-b8663d5c]{font-weight:500}.compact-advance[data-v-b8663d5c]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:1px solid #e2e8f0;border-radius:8px;margin:8px 0;padding:12px}.advance-toggle[data-v-b8663d5c]{align-items:center;display:flex;justify-content:space-between;margin-bottom:8px}.advance-selection.compact[data-v-b8663d5c]{margin-top:8px}.advance-selection-container.compact[data-v-b8663d5c]{align-items:flex-start;display:flex;gap:8px;margin-bottom:8px}.flex-1[data-v-b8663d5c]{flex:1}.btn.compact[data-v-b8663d5c]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:6px 12px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-sm.compact[data-v-b8663d5c]{font-size:11px;padding:4px 8px}.advance-info.compact[data-v-b8663d5c]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:6px;margin-top:8px;padding:8px}.advance-summary[data-v-b8663d5c]{align-items:center;display:flex;flex-wrap:wrap;font-size:11px;gap:8px}.advance-id[data-v-b8663d5c]{background:#e2e8f0;color:#1e293b;font-family:\"Courier New\",monospace}.advance-amount[data-v-b8663d5c],.advance-id[data-v-b8663d5c]{border-radius:4px;font-size:10px;font-weight:700;padding:2px 6px}.advance-amount[data-v-b8663d5c]{background:#d1fae5;color:#059669}.advance-purpose[data-v-b8663d5c]{color:#6b7280;font-size:10px;font-style:italic}.status-badge[data-v-b8663d5c]{border-radius:8px;font-size:9px;font-weight:600;letter-spacing:.3px;padding:2px 6px;text-transform:uppercase}.status-badge.pending[data-v-b8663d5c]{background:#fef3c7;color:#92400e}.status-badge.approved[data-v-b8663d5c]{background:#d1fae5;color:#065f46}.status-badge.settled[data-v-b8663d5c]{background:#dbeafe;color:#1e40af}.field-hint[data-v-b8663d5c]{align-items:center;display:flex;font-size:10px;gap:4px;justify-content:space-between;margin-top:4px}.field-hint.error[data-v-b8663d5c]{color:#e74c3c}.field-hint.warning[data-v-b8663d5c]{color:#f39c12}.field-hint.info[data-v-b8663d5c]{color:#0ea5e9}.text-counter[data-v-b8663d5c]{color:#9ca3af;font-size:9px;margin-left:auto}.form-errors.compact[data-v-b8663d5c]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;margin-top:12px;padding:12px}.form-errors.compact h6[data-v-b8663d5c]{align-items:center;color:#dc2626;display:flex;font-size:12px;gap:4px;margin:0 0 6px}.form-errors.compact ul[data-v-b8663d5c]{color:#dc2626;font-size:11px;margin:0;padding-left:16px}.enhanced-footer.compact[data-v-b8663d5c],.modal-footer.compact[data-v-b8663d5c]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;flex-shrink:0;gap:8px;justify-content:flex-end;padding:12px 24px}.btn[data-v-b8663d5c]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:13px;font-weight:600;gap:6px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-b8663d5c]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-b8663d5c]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-b8663d5c]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-b8663d5c]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-b8663d5c]{background:transparent;border:2px solid #667eea;color:#667eea}.btn-outline-primary[data-v-b8663d5c]:hover{background:#667eea;color:#fff}.btn[data-v-b8663d5c]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-b8663d5c]{animation:spin-b8663d5c 1s linear infinite}.advance-filters.compact[data-v-b8663d5c]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:12px;padding:12px}.filter-row.compact[data-v-b8663d5c]{grid-gap:12px;align-items:center;display:grid;gap:12px;grid-template-columns:1fr auto}.advances-list.compact[data-v-b8663d5c]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;max-height:300px;overflow-y:auto}.advance-items.compact[data-v-b8663d5c]{display:flex;flex-direction:column;padding:8px}.advance-item.compact[data-v-b8663d5c]{background:#fff;border:1px solid #e5e7eb;border-radius:6px;cursor:pointer;margin-bottom:8px;padding:12px;transition:all .2s ease}.advance-item.compact[data-v-b8663d5c]:hover{background:#f0f9ff;border-color:#60a5fa}.advance-item.compact.selected[data-v-b8663d5c]{background:#dbeafe;border-color:#3b82f6}.advance-item-content.compact[data-v-b8663d5c]{display:flex;flex-direction:column;gap:8px}.advance-item-header.compact[data-v-b8663d5c]{align-items:center;display:flex;justify-content:space-between}.advance-item-body.compact[data-v-b8663d5c]{grid-gap:8px;display:grid;font-size:11px;gap:8px;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}@media (max-width:1200px){.form-grid.compact[data-v-b8663d5c]{grid-template-columns:repeat(3,1fr)}}@media (max-width:768px){.enhanced-dialog[data-v-b8663d5c]{height:98vh;margin:1vh auto;max-height:98vh;width:98%}.form-grid.compact[data-v-b8663d5c]{gap:8px;grid-template-columns:repeat(2,1fr)}.modal-body[data-v-b8663d5c],.modal-header[data-v-b8663d5c]{padding:12px 16px}.enhanced-footer.compact[data-v-b8663d5c],.modal-footer.compact[data-v-b8663d5c]{flex-direction:column-reverse;padding:12px 16px}.enhanced-footer.compact .btn[data-v-b8663d5c],.modal-footer.compact .btn[data-v-b8663d5c]{justify-content:center;width:100%}}@media (max-width:480px){.form-grid.compact[data-v-b8663d5c]{grid-template-columns:1fr}.advance-toggle[data-v-b8663d5c]{align-items:flex-start;gap:8px}.advance-selection-container.compact[data-v-b8663d5c],.advance-toggle[data-v-b8663d5c]{flex-direction:column}}@keyframes fadeIn-b8663d5c{0%{opacity:0}to{opacity:1}}@keyframes slideIn-b8663d5c{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(636);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6ba9f626", content, true, context)
};

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=template&id=b8663d5c&scoped=true&
var render = function render() {
  var _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.visible ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-b8663d5c><div class=\"modal-title-section\" data-v-b8663d5c><i class=\"fas fa-money-bill-wave modal-icon\" data-v-b8663d5c></i> <h5 class=\"modal-title\" data-v-b8663d5c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ລົງລາຍຮັບ ການຊຳລະ') + "\n          ") + "</h5></div> <div class=\"modal-header-right\" data-v-b8663d5c><span class=\"voucher-number\" data-v-b8663d5c>" + _vm._ssrEscape("\n            ເລກທີ:\n            " + _vm._s(_vm.formData.id ? _vm.formatVoucherNumber(_vm.formData.id) : '000000') + "\n          ") + "</span> <button class=\"close-btn\" data-v-b8663d5c><i class=\"fas fa-times\" data-v-b8663d5c></i></button></div></div> "), _vm._ssrNode("<form data-v-b8663d5c>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-b8663d5c>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"form-loading\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-b8663d5c></div> <p data-v-b8663d5c>Loading form data...</p>")], 2) : _vm._ssrNode("<div class=\"form-grid compact\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-b8663d5c><label class=\"form-label required\" data-v-b8663d5c><i class=\"fas fa-calendar\" data-v-b8663d5c></i>\n                ວັນທີລົງຊຳລະ\n              </label> <input type=\"date\"" + _vm._ssrAttr("max", _vm.today) + " required=\"required\"" + _vm._ssrAttr("value", _vm.formData.settlementDate) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.settlementDate
  }) + " data-v-b8663d5c> " + (_vm.errors.settlementDate ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.settlementDate) + "\n              ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-b8663d5c><i class=\"fas fa-credit-card\" data-v-b8663d5c></i>\n                ວິທີການຊຳລະ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-b8663d5c>", "</div>", [_c('select', {
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
  }, [_vm._v("ຫັກລົບ (Deduction)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-b8663d5c><i class=\"fas fa-chevron-down\" data-v-b8663d5c></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.method ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.method) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-b8663d5c><label class=\"form-label\" data-v-b8663d5c><i class=\"fas fa-hashtag\" data-v-b8663d5c></i>\n                ອີງຕາມ\n              </label> <input type=\"text\" placeholder=\"ອີງຕາມ ການຕົກລົງ ເຫັນດີ...\" maxlength=\"50\"" + _vm._ssrAttr("value", _vm.formData.externalRef) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.externalRef
  }) + " data-v-b8663d5c> " + (_vm.errors.externalRef ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.externalRef) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-b8663d5c><label class=\"form-label\" data-v-b8663d5c><i class=\"fas fa-hashtag\" data-v-b8663d5c></i>\n                ເລກອ້າງອິງພາຍນອກ\n              </label> <input type=\"text\" placeholder=\"REF-001, TXN-123...\" maxlength=\"50\"" + _vm._ssrAttr("value", _vm.formData.externalRefNo) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.externalRefNo
  }) + " data-v-b8663d5c> " + (_vm.errors.externalRefNo ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.externalRefNo) + "\n              ") + "</div>" : "<!---->") + "</div> " + (_vm.formData.method === 'cheque' ? "<div class=\"form-group\" data-v-b8663d5c><label class=\"form-label required\" data-v-b8663d5c><i class=\"fas fa-money-check\" data-v-b8663d5c></i>\n                ເລກເຊັກ\n              </label> <input type=\"text\" placeholder=\"ໃສ່ເລກເຊັກ...\" maxlength=\"20\"" + _vm._ssrAttr("required", _vm.formData.method === 'cheque') + _vm._ssrAttr("value", _vm.formData.chequeNo) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.chequeNo
  }) + " data-v-b8663d5c> " + (_vm.errors.chequeNo ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.chequeNo) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-group\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-b8663d5c><i class=\"fas fa-coins\" data-v-b8663d5c></i>\n                ສະກຸນເງິນ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-b8663d5c>", "</div>", [_c('select', {
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
    }, [_vm._v("\n                    " + _vm._s(currency.code || currency.currencyCode) + " -\n                    " + _vm._s(currency.name || currency.currencyName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-b8663d5c><i class=\"fas fa-chevron-down\" data-v-b8663d5c></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.currencyId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-b8663d5c><label class=\"form-label required\" data-v-b8663d5c><i class=\"fas fa-dollar-sign\" data-v-b8663d5c></i>\n                ຈຳນວນເງິນ\n              </label> <div class=\"input-group compact\" data-v-b8663d5c><input type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"0.00\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.amount) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.amount
  }) + " data-v-b8663d5c> <div class=\"input-group-append\" data-v-b8663d5c><span class=\"input-group-text compact\" data-v-b8663d5c>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.selectedCurrencyCode) + "\n                  ") + "</span></div></div> " + (_vm.errors.amount ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.amount) + "\n              ") + "</div>" : "<!---->") + "</div> " + (_vm.formData.method === 'cash' || _vm.formData.method === 'cheque' ? "<div class=\"form-group\" data-v-b8663d5c><label" + _vm._ssrClass("form-label", {
    required: _vm.formData.method === 'cash' || _vm.formData.method === 'cheque'
  }) + " data-v-b8663d5c><i class=\"fas fa-user-circle\" data-v-b8663d5c></i>\n                ຈາກທ່ານ (ຜູ້ຈ່າຍ)\n              </label> <input type=\"text\" placeholder=\"ຊື່ຜູ້ຈ່າຍເງິນ...\" maxlength=\"100\"" + _vm._ssrAttr("required", _vm.formData.method === 'cash' || _vm.formData.method === 'cheque') + _vm._ssrAttr("value", _vm.formData.fromPersonName) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.fromPersonName
  }) + " data-v-b8663d5c> " + (_vm.errors.fromPersonName ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.fromPersonName) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-group\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-b8663d5c><i class=\"fas fa-building\" data-v-b8663d5c></i>\n                ສັງກັດຢູ່ (ກະຊວງ)\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-b8663d5c>", "</div>", [_c('select', {
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
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-b8663d5c><i class=\"fas fa-chevron-down\" data-v-b8663d5c></i></div>")], 2)], 2), _vm._ssrNode(" "), _vm.formData.method === 'bank_transfer' ? _vm._ssrNode("<div class=\"form-group full-width\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-b8663d5c><i class=\"fas fa-university\" data-v-b8663d5c></i>\n                ບັນຊີທະນາຄານ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-b8663d5c>", "</div>", [_c('select', {
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
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-b8663d5c><i class=\"fas fa-chevron-down\" data-v-b8663d5c></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.bankAccountId ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.bankAccountId) + "\n              ") + "</div>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" <div class=\"form-group\" data-v-b8663d5c><label class=\"form-label\" data-v-b8663d5c><i class=\"fas fa-exchange-alt\" data-v-b8663d5c></i>\n                ອັດຕາແລກປ່ຽນ\n              </label> <div class=\"input-group compact\" data-v-b8663d5c><input type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.formData.exchangeRate) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-b8663d5c> <div class=\"input-group-append\" data-v-b8663d5c><span class=\"input-group-text compact\" data-v-b8663d5c><i class=\"fas fa-calculator\" data-v-b8663d5c></i></span></div></div> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.exchangeRate) + "\n              ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-b8663d5c><i class=\"fas fa-chart-line\" data-v-b8663d5c></i>\n                ບັນຊີລວມ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-b8663d5c>", "</div>", [_c('select', {
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
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-b8663d5c><i class=\"fas fa-chevron-down\" data-v-b8663d5c></i></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-b8663d5c><i class=\"fas fa-user\" data-v-b8663d5c></i>\n                ຜູ້ລົງບັນຊີ (ຜູ້ຮັບ)\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-b8663d5c>", "</div>", [_c('select', {
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
    }, [_vm._v("\n                    " + _vm._s(user.cus_name || user.name || user.username) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-b8663d5c><i class=\"fas fa-chevron-down\" data-v-b8663d5c></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.userId ? "<div class=\"invalid-feedback\" data-v-b8663d5c>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.userId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group full-width compact-advance\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"advance-toggle\" data-v-b8663d5c><label class=\"form-label\" data-v-b8663d5c><i class=\"fas fa-link\" data-v-b8663d5c></i>\n                  ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ\n                </label> <div class=\"link-advance-options compact\" data-v-b8663d5c><label class=\"radio-option\" data-v-b8663d5c><input type=\"radio\" value=\"false\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "false")) + " data-v-b8663d5c> <span class=\"radio-label\" data-v-b8663d5c>ບໍ່ເຊື່ອມຕໍ່</span></label> <label class=\"radio-option\" data-v-b8663d5c><input type=\"radio\" value=\"true\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "true")) + " data-v-b8663d5c> <span class=\"radio-label\" data-v-b8663d5c>ເຊື່ອມຕໍ່</span></label></div></div> "), _vm.formData.linkToAdvance === 'true' ? _vm._ssrNode("<div class=\"advance-selection compact\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"advance-selection-container compact\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"custom-select-wrapper flex-1\" data-v-b8663d5c>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.moneyAdvanceId,
      expression: "formData.moneyAdvanceId"
    }],
    staticClass: "form-control custom-select compact",
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
    }, [_vm._v("\n                        #" + _vm._s(advance.id) + " -\n                        " + _vm._s(_vm.formatCurrency(advance.amount, advance.currency.code)) + "\n                      ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-b8663d5c><i class=\"fas fa-chevron-down\" data-v-b8663d5c></i></div>")], 2), _vm._ssrNode(" <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loadingAdvances) + " class=\"btn btn-outline-primary btn-sm compact\" data-v-b8663d5c>" + (_vm.loadingAdvances ? "<i class=\"fas fa-spinner fa-spin\" data-v-b8663d5c></i>" : "<i class=\"fas fa-search\" data-v-b8663d5c></i>") + "</button>")], 2), _vm._ssrNode(" " + (_vm.selectedAdvance ? "<div class=\"advance-info compact\" data-v-b8663d5c><div class=\"advance-summary\" data-v-b8663d5c><span class=\"advance-id\" data-v-b8663d5c>" + _vm._ssrEscape("#" + _vm._s(_vm.selectedAdvance.id)) + "</span> <span class=\"advance-amount\" data-v-b8663d5c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.selectedAdvance.amount, _vm.selectedAdvance.currency.code))) + "</span> <span class=\"advance-purpose\" data-v-b8663d5c>" + _vm._ssrEscape(_vm._s(_vm.selectedAdvance.purpose || 'No purpose')) + "</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.selectedAdvance.status]) + " data-v-b8663d5c>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatStatus(_vm.selectedAdvance.status)) + "\n                    ") + "</span></div></div>" : "<!---->"))], 2) : _vm._e()], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-b8663d5c><label class=\"form-label\" data-v-b8663d5c><i class=\"fas fa-sticky-note\" data-v-b8663d5c></i>\n                ເນື້ອໃນລາຍຮັບ (ໝາຍເຫດ)\n              </label> <textarea rows=\"3\" placeholder=\"ເນື້ອໃນລາຍຮັບ / ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control compact\" data-v-b8663d5c>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-b8663d5c><span class=\"text-counter\" data-v-b8663d5c>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors compact\" data-v-b8663d5c><h6 data-v-b8663d5c><i class=\"fas fa-exclamation-circle\" data-v-b8663d5c></i>\n              ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດ:\n            </h6> <ul data-v-b8663d5c>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-b8663d5c>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer compact\" data-v-b8663d5c><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary compact\" data-v-b8663d5c><i class=\"fas fa-times\" data-v-b8663d5c></i>\n            ຍົກເລີກ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary compact\" data-v-b8663d5c>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-b8663d5c></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-b8663d5c></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button> <button title=\"Print\" class=\"btn btn-sm btn-outline-secondary\" data-v-b8663d5c><i class=\"fas fa-print\" data-v-b8663d5c></i></button></div>")], 2)], 2), _vm._ssrNode(" "), _vm.showAdvanceBrowser ? _vm._ssrNode("<div class=\"modal-overlay browser-overlay\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog advance-browser-dialog\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-b8663d5c><div class=\"modal-title-section\" data-v-b8663d5c><i class=\"fas fa-search modal-icon\" data-v-b8663d5c></i> <h5 class=\"modal-title\" data-v-b8663d5c>ເລືອກລາຍຈ່າຍລ່ວງໜ້າ</h5></div> <button class=\"close-btn\" data-v-b8663d5c><i class=\"fas fa-times\" data-v-b8663d5c></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"advance-filters compact\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"filter-row compact\" data-v-b8663d5c>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-b8663d5c><input type=\"text\" placeholder=\"ຄົ້ນຫາຕາມຈຸດປະສົງ, ໝາຍເຫດ...\"" + _vm._ssrAttr("value", _vm.advanceSearch.query) + " class=\"form-control compact\" data-v-b8663d5c></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-b8663d5c>", "</div>", [_c('select', {
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
  }, [_vm._v("ອະນຸມັດ")])])])], 2)]), _vm._ssrNode(" <div class=\"advances-list compact\" data-v-b8663d5c>" + (_vm.loadingAdvances ? "<div class=\"loading-state\" data-v-b8663d5c><div class=\"spinner-small\" data-v-b8663d5c></div> <p data-v-b8663d5c>ກຳລັງໂຫຼດ...</p></div>" : _vm.filteredAdvances.length === 0 ? "<div class=\"empty-state\" data-v-b8663d5c><i class=\"fas fa-inbox\" data-v-b8663d5c></i> <p data-v-b8663d5c>ບໍ່ພົບລາຍຈ່າຍລ່ວງໜ້າ</p></div>" : "<div class=\"advance-items compact\" data-v-b8663d5c>" + _vm._ssrList(_vm.filteredAdvances, function (advance) {
    var _vm$selectedAdvanceFo;
    return "<div" + _vm._ssrClass("advance-item compact", {
      selected: ((_vm$selectedAdvanceFo = _vm.selectedAdvanceForBrowser) === null || _vm$selectedAdvanceFo === void 0 ? void 0 : _vm$selectedAdvanceFo.id) === advance.id
    }) + " data-v-b8663d5c><div class=\"advance-item-content compact\" data-v-b8663d5c><div class=\"advance-item-header compact\" data-v-b8663d5c><span class=\"advance-id\" data-v-b8663d5c>" + _vm._ssrEscape("#" + _vm._s(advance.id)) + "</span> <span" + _vm._ssrClass(null, ['status-badge', advance.status]) + " data-v-b8663d5c>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatStatus(advance.status)) + "\n                    ") + "</span></div> <div class=\"advance-item-body compact\" data-v-b8663d5c><div class=\"advance-amount\" data-v-b8663d5c>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatCurrency(advance.amount, advance.currency.code)) + "\n                    ") + "</div> <div class=\"advance-date\" data-v-b8663d5c>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatDate(advance.bookingDate)) + "\n                    ") + "</div> " + (advance.purpose ? "<div class=\"advance-purpose\" data-v-b8663d5c>" + _vm._ssrEscape("\n                      " + _vm._s(advance.purpose) + "\n                    ") + "</div>" : "<!---->") + "</div></div></div>";
  }) + "</div>") + "</div>")], 2), _vm._ssrNode(" <div class=\"modal-footer compact\" data-v-b8663d5c><button type=\"button\" class=\"btn btn-secondary compact\" data-v-b8663d5c><i class=\"fas fa-times\" data-v-b8663d5c></i>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.selectedAdvanceForBrowser) + " class=\"btn btn-primary compact\" data-v-b8663d5c><i class=\"fas fa-check\" data-v-b8663d5c></i>\n            ເລືອກ\n          </button></div>")], 2)]) : _vm._e()], 2) : _vm._e(), _vm._ssrNode(" "), _vm.showPrintVoucher && _vm.settlementDetail ? _c('VoucherPrintComponent', {
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

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=template&id=b8663d5c&scoped=true&

// EXTERNAL MODULE: ./components/MA/settlementVoucher/index.vue + 4 modules
var settlementVoucher = __webpack_require__(500);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var settlementDialogvue_type_script_lang_js_ = ({
  name: 'SettlementDialog',
  components: {
    VoucherPrintComponent: settlementVoucher["default"]
  },
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
      showPrintVoucher: false,
      settlementDetail: null,
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
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        // NEW FIELDS ADDED
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
      return this.settlement && this.settlement.id;
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
        hasSettlementDate: !!this.formData.settlementDate,
        hasMethod: !!this.formData.method,
        hasUsers: this.users.length > 0,
        hasCurrencies: this.currencies.length > 0,
        bankAccountValid: this.formData.method !== 'bank_transfer' || !!this.formData.bankAccountId,
        exchangeRateValid: !this.formData.exchangeRate || this.formData.exchangeRate > 0,
        // NEW VALIDATIONS
        chequeNoValid: this.formData.method !== 'cheque' || !!this.formData.chequeNo,
        fromPersonNameValid: this.formData.method !== 'cash' && this.formData.method !== 'cheque' || !!this.formData.fromPersonName
      };
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
  beforeDestroy() {
    document.body.style.overflow = 'auto';
  },
  methods: {
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
      } catch (error) {
        this.showToast('Error fetching money advances', 'error');
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
      await this.fetchSettlementByid();
      this.showPrintVoucher = true;
    },
    initializeForm() {
      if (this.settlement && (this.settlement.id || this.settlement.moneyAdvanceId)) {
        const hasMoneyAdvance = this.settlement.moneyAdvanceId && this.settlement.moneyAdvanceId !== null && this.settlement.moneyAdvanceId !== '' && this.settlement.moneyAdvanceId !== '0' && this.settlement.moneyAdvanceId !== 0;
        this.formData = {
          id: this.settlement.id,
          settlementDate: this.settlement.settlementDate ? this.settlement.settlementDate.split('T')[0] : '',
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
          // INITIALIZE NEW FIELDS
          externalRef: this.settlement.externalRef || '',
          externalRefNo: this.settlement.externalRefNo || '',
          chequeNo: this.settlement.chequeNo || '',
          fromPersonName: this.settlement.fromPersonName || ''
        };
        this._isInitializing = true;
        if (this.formData.linkToAdvance === 'true') {
          this.$nextTick(() => {
            this.waitForAdvancesAndSync();
            this._isInitializing = false;
          });
        } else {
          this.$nextTick(() => {
            this._isInitializing = false;
          });
        }
      } else {
        this.formData = {
          settlementDate: this.today,
          method: '',
          amount: null,
          currencyId: '',
          exchangeRate: 1,
          bankAccountId: '',
          ministryId: '',
          chartAccountId: '',
          userId: this.user.id,
          notes: '',
          selectedInvoices: [],
          linkToAdvance: 'false',
          moneyAdvanceId: '',
          // INITIALIZE NEW FIELDS FOR CREATE MODE
          externalRef: '',
          externalRefNo: '',
          chequeNo: '',
          fromPersonName: ''
        };
        this._isInitializing = true;
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
    resetForm() {
      this.formData = {
        settlementDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: this.user.id,
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        // RESET NEW FIELDS
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: ''
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
      if (this.showAdvanceBrowser) {
        this.showAdvanceBrowser = false;
        this.selectedAdvanceForBrowser = null;
        document.body.style.overflow = 'auto';
      }
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
      // Clear method-specific fields
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

      // Required fields validation
      if (!this.formData.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີ';
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

      // NEW: Cheque number validation
      if (this.formData.method === 'cheque' && !this.formData.chequeNo) {
        this.errors.chequeNo = 'ກະລຸນາໃສ່ເລກເຊັກ';
        this.formErrors.push('ເລກເຊັກ ແມ່ນຈຳເປັນສຳລັບການຊຳລະດ້ວຍເຊັກ');
      }

      // NEW: From person name validation
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
        const submitData = {
          ...this.formData,
          selectedInvoices: this.formData.method === 'deduction' ? this.formData.selectedInvoices : [],
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
        if (!this.formData.id) {
          const response = await this.$axios.post('/api/settlements', submitData);
          console.info(`REPONSE DATA ${JSON.stringify(response.data)}`);
          this.formData.id = response.data.data.id;
          this.showToast('Money settlement created successfully', 'success');
          return;
        }

        // Emit save event to parent
        this.$emit('save', submitData);
      } catch (error) {
        console.error('Form submission error:', error);
        this.formErrors.push('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ. ກະລຸນາລອງໃໝ່.');
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
  
  var style0 = __webpack_require__(547)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b8663d5c",
  "6aebe1cc"
  
)

/* harmony default export */ var settlementDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 636:
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

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(888);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ed323870", content, true, context)
};

/***/ }),

/***/ 813:
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
  
  var style0 = __webpack_require__(635)
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

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d511296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(715);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d511296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d511296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d511296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d511296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-summary-container[data-v-6d511296]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-6d511296]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-6d511296]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-6d511296]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-6d511296]{display:flex;gap:12px}.filter-section[data-v-6d511296]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-6d511296]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-6d511296]{display:flex;flex-direction:column;gap:8px}.filter-group label[data-v-6d511296]{color:#555;font-size:14px;font-weight:500}.date-separator[data-v-6d511296]{align-self:flex-end;color:#666;padding:8px}.filter-actions[data-v-6d511296]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-6d511296]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-6d511296]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-6d511296]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-lak[data-v-6d511296]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.summary-card.total-lak .card-icon[data-v-6d511296]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.total-lak .card-content h3[data-v-6d511296]{color:#fff;font-size:28px;font-weight:700}.summary-card.total-lak .card-content p[data-v-6d511296]{color:hsla(0,0%,100%,.9)}.summary-card.currency-card[data-v-6d511296]{background:#fff;border-left:4px solid #28a745}.card-icon[data-v-6d511296]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-6d511296]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.currency[data-v-6d511296]{background:#e8f5e8;color:#28a745}.card-content[data-v-6d511296]{flex:1;min-width:0}.card-content h3[data-v-6d511296]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-6d511296]{font-size:14px;margin:0}.currency-name[data-v-6d511296]{color:#495057;font-weight:600;margin-bottom:4px!important}.lak-equivalent[data-v-6d511296]{color:#6c757d;font-size:13px!important;font-style:italic}@keyframes slideInUp-6d511296{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.summary-card[data-v-6d511296]{animation:slideInUp-6d511296 .5s ease-out}.currency-code[data-v-6d511296]{color:#007bff;font-weight:600}.table-section[data-v-6d511296]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-6d511296]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-6d511296]{color:#333;margin:0}.record-count[data-v-6d511296]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-6d511296]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-6d511296]{overflow-x:auto}.data-table[data-v-6d511296]{border-collapse:collapse;width:100%}.data-table td[data-v-6d511296],.data-table th[data-v-6d511296]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-6d511296]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-6d511296]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-6d511296]:hover{background-color:#e9ecef}.data-table th i[data-v-6d511296]{margin-left:8px;opacity:.5}.amount-cell[data-v-6d511296]{color:#28a745;font-weight:600}.actions-cell[data-v-6d511296]{display:flex;gap:8px}.method-badge[data-v-6d511296]{border-radius:20px;font-size:12px;font-weight:500;padding:4px 12px;text-transform:capitalize}.method-badge.cash[data-v-6d511296]{background-color:#d4edda;color:#155724}.method-badge.bank_transfer[data-v-6d511296]{background-color:#d1ecf1;color:#0c5460}.method-badge.deduction[data-v-6d511296]{background-color:#fce4ec;color:#880e4f}.ministry-tag[data-v-6d511296]{background-color:#e7f3ff;color:#06c}.chart-account-tag[data-v-6d511296],.ministry-tag[data-v-6d511296]{border-radius:12px;font-size:11px;font-weight:500;padding:3px 8px}.chart-account-tag[data-v-6d511296]{background-color:#fff3cd;color:#856404}.currency-tag[data-v-6d511296]{background-color:#e8f5e8;border-radius:12px;color:#28a745;font-size:11px;font-weight:600;padding:3px 8px;text-transform:uppercase}.no-data[data-v-6d511296]{color:#999;font-size:12px;font-style:italic}.pagination-container[data-v-6d511296]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-6d511296]{color:#666;font-size:14px}.pagination-controls[data-v-6d511296]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-6d511296]{color:#666;padding:6px 12px}.btn[data-v-6d511296]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-6d511296]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-6d511296]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-6d511296]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-6d511296]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-6d511296]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-6d511296]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-6d511296]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-6d511296]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-6d511296]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-6d511296]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-6d511296]:hover{background-color:#17a2b8;color:#fff}.btn-sm[data-v-6d511296]{font-size:12px;padding:4px 8px}.form-control[data-v-6d511296]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-6d511296]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.loading-overlay[data-v-6d511296]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-6d511296]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-6d511296]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:768px){.settlement-summary-container[data-v-6d511296]{padding:10px}.header-content[data-v-6d511296]{align-items:flex-start}.filter-row[data-v-6d511296],.header-content[data-v-6d511296]{flex-direction:column;gap:16px}.filter-group[data-v-6d511296]{width:100%}.filter-actions[data-v-6d511296]{flex-direction:row;width:100%}.summary-cards[data-v-6d511296]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-6d511296]{padding:20px}.card-icon[data-v-6d511296]{height:50px;margin-right:16px;width:50px}.card-content h3[data-v-6d511296],.card-icon[data-v-6d511296]{font-size:20px}.pagination-container[data-v-6d511296],.table-header[data-v-6d511296]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-6d511296]{flex-wrap:wrap}.actions-cell[data-v-6d511296]{flex-direction:column;gap:4px}}@media (max-width:576px){.summary-card[data-v-6d511296]{flex-direction:column;text-align:center}.card-icon[data-v-6d511296]{margin:0 auto 16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map