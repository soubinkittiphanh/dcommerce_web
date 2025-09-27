exports.ids = [196,79];
exports.modules = {

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvanceTarget/index.vue?vue&type=template&id=107afb10&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "revenue-target-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-107afb10><div class=\"header-content\" data-v-107afb10><h1 class=\"page-title\" data-v-107afb10>ສະຫລຸບເປົ້າໝາຍລາຍຮັບ</h1> <div class=\"header-actions\" data-v-107afb10><button class=\"btn btn-primary\" data-v-107afb10><i class=\"fas fa-plus\" data-v-107afb10></i>\n          ສ້າງເປົ້າໝາຍລາຍຮັບ\n        </button> <button class=\"btn btn-secondary\" data-v-107afb10><i class=\"fas fa-download\" data-v-107afb10></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-107afb10>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-107afb10>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-107afb10>", "</div>", [_vm._ssrNode("<label data-v-107afb10>ເລືອກປີ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.year,
      expression: "filters.year"
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
        _vm.$set(_vm.filters, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Years")]), _vm._v(" "), _vm._l(_vm.availableYears, function (year) {
    return _c('option', {
      key: year,
      domProps: {
        "value": year
      }
    }, [_vm._v("\n            " + _vm._s(year) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"filter-group\" data-v-107afb10><label data-v-107afb10>ຊື່ເປົ້າໝາຍ:</label> <input type=\"text\" placeholder=\"ຄົ້ນຫາຊື່ເປົ້າໝາຍ...\"" + _vm._ssrAttr("value", _vm.filters.name) + " class=\"form-control\" data-v-107afb10></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-107afb10>", "</div>", [_vm._ssrNode("<label data-v-107afb10>ສະກຸນເງິນ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.currencyId,
      expression: "filters.currencyId"
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
        _vm.$set(_vm.filters, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Currencies")]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n            " + _vm._s(currency.code) + " - " + _vm._s(currency.name) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-107afb10>", "</div>", [_vm._ssrNode("<label data-v-107afb10>ກະຊວງ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.parentMinistryId,
      expression: "filters.parentMinistryId"
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
        _vm.$set(_vm.filters, "parentMinistryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
    }, [_vm._v("\n            " + _vm._s(ministry.ministryNameLao) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-107afb10>", "</div>", [_vm._ssrNode("<label data-v-107afb10>ບັນຊີບັນຊີ:</label> "), _c('select', {
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
  }, [_vm._v("All Chart Accounts")]), _vm._v(" "), _vm._l(_vm.chartAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n            " + _vm._s(account.accountCode) + " - " + _vm._s(account.accountName) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-107afb10>", "</div>", [_vm._ssrNode("<label data-v-107afb10>ສະຖານະ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.isActive,
      expression: "filters.isActive"
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
        _vm.$set(_vm.filters, "isActive", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "true"
    }
  }, [_vm._v("ເປີດໃຊ້ງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "false"
    }
  }, [_vm._v("ປິດໃຊ້ງານ")])])], 2), _vm._ssrNode(" <div class=\"filter-actions\" data-v-107afb10><button class=\"btn btn-outline-primary\" data-v-107afb10><i class=\"fas fa-search\" data-v-107afb10></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-107afb10><i class=\"fas fa-undo\" data-v-107afb10></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-107afb10><div class=\"summary-card\" data-v-107afb10><div class=\"card-icon total\" data-v-107afb10><i class=\"fas fa-bullseye\" data-v-107afb10></i></div> <div class=\"card-content\" data-v-107afb10><h3 data-v-107afb10>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.total.count)) + "</h3> <p data-v-107afb10>ລວມເປົ້າໝາຍທັງໝົດ</p></div></div> <div class=\"summary-card\" data-v-107afb10><div class=\"card-icon active\" data-v-107afb10><i class=\"fas fa-check-circle\" data-v-107afb10></i></div> <div class=\"card-content\" data-v-107afb10><h3 data-v-107afb10>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.active.count)) + "</h3> <p data-v-107afb10>ເປົ້າໝາຍທີ່ເປີດໃຊ້ງານ</p></div></div> <div class=\"summary-card\" data-v-107afb10><div class=\"card-icon amount\" data-v-107afb10><i class=\"fas fa-dollar-sign\" data-v-107afb10></i></div> <div class=\"card-content\" data-v-107afb10><h3 data-v-107afb10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.total.amount))) + "</h3> <p data-v-107afb10>ລວມຍອດເປົ້າໝາຍ</p></div></div> <div class=\"summary-card\" data-v-107afb10><div class=\"card-icon yearly\" data-v-107afb10><i class=\"fas fa-calendar-alt\" data-v-107afb10></i></div> <div class=\"card-content\" data-v-107afb10><h3 data-v-107afb10>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.currentYear.count)) + "</h3> <p data-v-107afb10>" + _vm._ssrEscape("ເປົ້າໝາຍປີ " + _vm._s(_vm.currentYear)) + "</p></div></div></div> "), _vm._ssrNode("<div class=\"table-section\" data-v-107afb10>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-107afb10>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-107afb10><h3 data-v-107afb10>ລາຍການເປົ້າໝາຍລາຍຮັບ</h3> <span class=\"record-count\" data-v-107afb10>" + _vm._ssrEscape(_vm._s(_vm.filteredTargets.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-107afb10>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-107afb10>", "</div>", [_vm._ssrNode("<label data-v-107afb10>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-107afb10>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-107afb10><table class=\"data-table\" data-v-107afb10><thead data-v-107afb10><tr data-v-107afb10><th class=\"sortable\" data-v-107afb10>\n              ID\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('id')) + " data-v-107afb10></i></th> <th class=\"sortable\" data-v-107afb10>\n              ຊື່ເປົ້າໝາຍ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('name')) + " data-v-107afb10></i></th> <th class=\"sortable\" data-v-107afb10>\n              ປີ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('year')) + " data-v-107afb10></i></th> <th class=\"sortable\" data-v-107afb10>\n              ຈຳນວນເປົ້າໝາຍ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('targetAmount')) + " data-v-107afb10></i></th> <th class=\"sortable\" data-v-107afb10>\n              ອັດຕາແລກປ່ຽນ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('exchangeRate')) + " data-v-107afb10></i></th> <th data-v-107afb10>ສະກຸນເງິນ</th> <th data-v-107afb10>ກະຊວງ</th> <th data-v-107afb10>ບັນຊີບັນຊີ</th> <th data-v-107afb10>ສະຖານະ</th> <th data-v-107afb10>ຫມາຍເຫດ</th> <th data-v-107afb10>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-107afb10>" + _vm._ssrList(_vm.paginatedTargets, function (target) {
    return "<tr data-v-107afb10><td data-v-107afb10>" + _vm._ssrEscape(_vm._s(target.id)) + "</td> <td class=\"name-cell\" data-v-107afb10>" + _vm._ssrEscape(_vm._s(target.name)) + "</td> <td data-v-107afb10><span class=\"year-badge\" data-v-107afb10>" + _vm._ssrEscape(_vm._s(target.year)) + "</span></td> <td class=\"amount-cell\" data-v-107afb10>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatCurrency(target.targetAmount)) + "\n            ") + "</td> <td class=\"exchange-rate-cell\" data-v-107afb10>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatNumber(target.exchangeRate)) + "\n            ") + "</td> <td data-v-107afb10>" + (target.currency ? "<span class=\"currency-tag\" data-v-107afb10>" + _vm._ssrEscape("\n                " + _vm._s(target.currency.code) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-107afb10>-</span>") + "</td> <td class=\"ministry-cell\" data-v-107afb10>" + (target.subMinistries ? "<span class=\"ministry-tag\" data-v-107afb10>" + _vm._ssrEscape("\n                " + _vm._s(target.subMinistries.ministryName) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-107afb10>-</span>") + "</td> <td class=\"chart-account-cell\" data-v-107afb10>" + (target.chartAccount ? "<span class=\"account-tag\" data-v-107afb10>" + _vm._ssrEscape("\n                " + _vm._s(target.chartAccount.accountName) + "\n              ") + "</span>" : "<span class=\"no-data\" data-v-107afb10>-</span>") + "</td> <td data-v-107afb10><span" + _vm._ssrClass(null, ['status-badge', target.isActive ? 'active' : 'inactive']) + " data-v-107afb10>" + _vm._ssrEscape("\n                " + _vm._s(target.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n              ") + "</span></td> <td class=\"remark-cell\" data-v-107afb10>" + _vm._ssrEscape("\n              " + _vm._s(target.remark || '-') + "\n            ") + "</td> <td class=\"actions-cell\" data-v-107afb10><button title=\"View Details\" class=\"btn btn-sm btn-outline-primary\" data-v-107afb10><i class=\"fas fa-eye\" data-v-107afb10></i></button> <button title=\"Edit\" class=\"btn btn-sm btn-outline-info\" data-v-107afb10><i class=\"fas fa-edit\" data-v-107afb10></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-107afb10><div class=\"pagination-info\" data-v-107afb10>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-107afb10><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-107afb10>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-107afb10>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-107afb10>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-107afb10>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-107afb10>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('RevenueTargetDialog', {
    attrs: {
      "show": _vm.showDialog,
      "target": _vm.selectedTarget,
      "currencies": _vm.currencies,
      "form-loading": _vm.formLoading,
      "ministries": _vm.ministries,
      "chartAccounts": _vm.chartAccounts
    },
    on: {
      "close": _vm.closeDialog,
      "save": _vm.onTargetSave,
      "validation-error": _vm.handleValidationError
    }
  }), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-107afb10><div class=\"loading-spinner\" data-v-107afb10><i class=\"fas fa-spinner fa-spin\" data-v-107afb10></i> <p data-v-107afb10>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/moneyAdvanceTarget/index.vue?vue&type=template&id=107afb10&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(350);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(351);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(352);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(353);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(354);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(355);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(356);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(357);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(358);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(359);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(360);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(361);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(362);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(363);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(364);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(365);

// EXTERNAL MODULE: ./components/MA/revenueTargetDialog/index.vue + 4 modules
var revenueTargetDialog = __webpack_require__(864);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvanceTarget/index.vue?vue&type=script&lang=js&

















/* harmony default export */ var moneyAdvanceTargetvue_type_script_lang_js_ = ({
  name: 'RevenueTargetSummary',
  components: {
    RevenueTargetDialog: revenueTargetDialog["default"]
  },
  middleware: 'auths',
  data() {
    return {
      currencies: [],
      ministries: [],
      chartAccounts: [],
      loading: false,
      formLoading: false,
      showDialog: false,
      selectedTarget: null,
      revenueTargets: [],
      filteredTargets: [],
      // Enhanced Filters
      filters: {
        year: '',
        name: '',
        currencyId: '',
        parentMinistryId: '',
        chartAccountId: '',
        isActive: ''
      },
      // Sorting
      sort: {
        field: 'year',
        direction: 'desc'
      },
      // Pagination
      pagination: {
        currentPage: 1,
        perPage: 25
      },
      // Summary statistics
      summaryStats: {
        total: {
          amount: 0,
          count: 0
        },
        active: {
          amount: 0,
          count: 0
        },
        currentYear: {
          amount: 0,
          count: 0
        }
      },
      currentYear: new Date().getFullYear()
    };
  },
  computed: {
    paginatedTargets() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
      const end = start + this.pagination.perPage;
      return this.filteredTargets.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredTargets.length / this.pagination.perPage);
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      const end = Math.min(start + this.pagination.perPage - 1, this.filteredTargets.length);
      return {
        start,
        end,
        total: this.filteredTargets.length
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
    },
    availableYears() {
      const years = new Set();
      this.revenueTargets.forEach(target => {
        years.add(target.year);
      });

      // Add current year and next few years for new targets
      for (let i = 0; i < 5; i++) {
        years.add(this.currentYear + i);
      }
      return Array.from(years).sort((a, b) => b - a);
    }
  },
  mounted() {
    this.initializeData();
  },
  methods: {
    async initializeData() {
      await Promise.all([this.fetchCurrencies(), this.fetchMinistries(), this.fetchChartAccounts(), this.fetchRevenueTargets()]);
      this.applyFilters();
      this.calculateSummaryStats();
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
        console.log('Fetched currencies:', this.currencies.length);
      } catch (error) {
        console.error('Error fetching currencies:', error);
        this.currencies = [];
        this.showToast('Failed to load currencies', 'error');
      }
    },
    async fetchMinistries() {
      try {
        const response = await this.$axios.get('/api/ministries');
        this.ministries = response.data.data || [];
        console.log('Fetched ministries:', this.ministries.length);
      } catch (error) {
        console.error('Error fetching ministries:', error);
        this.ministries = [];
        this.showToast('Failed to load ministries', 'error');
      }
    },
    async fetchChartAccounts() {
      try {
        const response = await this.$axios.get('/api/accountChart/find');
        this.chartAccounts = response.data || [];
        console.log('Fetched chart accounts:', this.chartAccounts.length);
      } catch (error) {
        console.error('Error fetching chart accounts:', error);
        this.chartAccounts = [];
        this.showToast('Failed to load chart accounts', 'error');
      }
    },
    async fetchRevenueTargets() {
      this.loading = true;
      try {
        // Include related models in the request
        const response = await this.$axios.get('/api/revenue-targets?include=currency,subMinistries,chartAccount');
        if (Array.isArray(response.data)) {
          this.revenueTargets = response.data.map(target => ({
            id: target.id,
            name: target.name,
            year: target.year,
            targetAmount: parseFloat(target.targetAmount) || 0,
            exchangeRate: parseFloat(target.exchangeRate) || 0,
            currencyId: target.currencyId,
            parentMinistryId: target.parentMinistryId,
            chartAccountId: target.chartAccountId,
            currency: target.currency,
            subMinistries: target.subMinistries,
            chartAccount: target.chartAccount,
            remark: target.remark,
            isActive: target.isActive,
            createdAt: target.createdAt,
            updateTimestamp: target.updateTimestamp
          }));
        } else {
          console.error('Unexpected response structure:', response.data);
          this.revenueTargets = [];
        }
      } catch (error) {
        console.error('Error fetching revenue targets:', error);
        this.showToast('Error loading revenue targets', 'error');
        this.revenueTargets = [];
      } finally {
        this.loading = false;
      }
    },
    applyFilters() {
      let filtered = [...this.revenueTargets];
      if (this.filters.year) {
        filtered = filtered.filter(t => t.year === parseInt(this.filters.year));
      }
      if (this.filters.name) {
        filtered = filtered.filter(t => t.name.toLowerCase().includes(this.filters.name.toLowerCase()));
      }
      if (this.filters.currencyId) {
        filtered = filtered.filter(t => t.currencyId === parseInt(this.filters.currencyId));
      }
      if (this.filters.parentMinistryId) {
        filtered = filtered.filter(t => t.parentMinistryId === parseInt(this.filters.parentMinistryId));
      }
      if (this.filters.chartAccountId) {
        filtered = filtered.filter(t => t.chartAccountId === parseInt(this.filters.chartAccountId));
      }
      if (this.filters.isActive !== '') {
        filtered = filtered.filter(t => t.isActive === (this.filters.isActive === 'true'));
      }
      this.filteredTargets = filtered;
      this.sortData();
      this.pagination.currentPage = 1;
      this.calculateSummaryStats();
    },
    resetFilters() {
      this.filters = {
        year: '',
        name: '',
        currencyId: '',
        parentMinistryId: '',
        chartAccountId: '',
        isActive: ''
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
      this.filteredTargets.sort((a, b) => {
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
      const stats = {
        total: {
          amount: 0,
          count: 0
        },
        active: {
          amount: 0,
          count: 0
        },
        currentYear: {
          amount: 0,
          count: 0
        }
      };
      this.filteredTargets.forEach(target => {
        const amount = parseFloat(target.targetAmount) || 0;
        stats.total.amount += amount;
        stats.total.count++;
        if (target.isActive) {
          stats.active.amount += amount;
          stats.active.count++;
        }
        if (target.year === this.currentYear) {
          stats.currentYear.amount += amount;
          stats.currentYear.count++;
        }
      });
      this.summaryStats = stats;
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
    // Dialog methods
    async openCreateDialog() {
      this.selectedTarget = null;
      this.formLoading = true;
      this.showDialog = true;
      try {
        await this.ensureRelatedDataLoaded();
      } catch (error) {
        console.error('Error loading form data:', error);
        this.showToast('Failed to load form data', 'error');
      } finally {
        this.formLoading = false;
      }
    },
    async editTarget(target) {
      this.selectedTarget = target;
      this.formLoading = true;
      this.showDialog = true;
      try {
        // Load full target details if needed
        const response = await this.$axios.get(`/api/revenue-targets/${target.id}?include=currency,subMinistries,chartAccount`);
        if (response.data) {
          this.selectedTarget = response.data;
        }
        await this.ensureRelatedDataLoaded();
      } catch (error) {
        console.error('Error loading target details:', error);
        this.showToast('Failed to load target details', 'error');
      } finally {
        this.formLoading = false;
      }
    },
    async onTargetSave(targetData) {
      try {
        this.formLoading = true;
        let response;
        if (this.selectedTarget && this.selectedTarget.id) {
          response = await this.$axios.put(`/api/revenue-targets/${this.selectedTarget.id}`, targetData);
        } else {
          response = await this.$axios.post('/api/revenue-targets', targetData);
        }
        if (response.data) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success');
          this.closeDialog();
          await this.fetchRevenueTargets();
          this.applyFilters();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Save failed');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving target:', error);
        const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ';
        this.showToast(errorMessage, 'error');
      } finally {
        this.formLoading = false;
      }
    },
    handleValidationError(message) {
      this.showToast(message, 'error');
    },
    closeDialog() {
      this.showDialog = false;
      this.selectedTarget = null;
      this.formLoading = false;
    },
    // Helper methods
    async ensureRelatedDataLoaded() {
      const promises = [];
      if (this.currencies.length === 0) {
        promises.push(this.fetchCurrencies());
      }
      if (this.ministries.length === 0) {
        promises.push(this.fetchMinistries());
      }
      if (this.chartAccounts.length === 0) {
        promises.push(this.fetchChartAccounts());
      }
      if (promises.length > 0) {
        await Promise.all(promises);
      }
    },
    // Action methods
    viewDetails(target) {
      this.$router.push(`/revenue-targets/${target.id}`);
    },
    async deactivateTarget(target) {
      if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການປິດໃຊ້ງານເປົ້າໝາຍນີ້?')) {
        try {
          await this.$axios.patch(`/api/revenue-targets/${target.id}/deactivate`);
          this.showToast('ປິດໃຊ້ງານສຳເລັດແລ້ວ', 'success');
          await this.fetchRevenueTargets();
          this.applyFilters();
        } catch (error) {
          console.error('Error deactivating target:', error);
          this.showToast('ການປິດໃຊ້ງານບໍ່ສຳເລັດ', 'error');
        }
      }
    },
    async restoreTarget(target) {
      if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການເປີດໃຊ້ງານເປົ້າໝາຍນີ້?')) {
        try {
          await this.$axios.patch(`/api/revenue-targets/${target.id}/restore`);
          this.showToast('ເປີດໃຊ້ງານສຳເລັດແລ້ວ', 'success');
          await this.fetchRevenueTargets();
          this.applyFilters();
        } catch (error) {
          console.error('Error restoring target:', error);
          this.showToast('ການເປີດໃຊ້ງານບໍ່ສຳເລັດ', 'error');
        }
      }
    },
    async deleteTarget(target) {
      if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລົບເປົ້າໝາຍນີ້? ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້!')) {
        try {
          await this.$axios.delete(`/api/revenue-targets/${target.id}`);
          this.showToast('ລົບສຳເລັດແລ້ວ', 'success');
          await this.fetchRevenueTargets();
          this.applyFilters();
        } catch (error) {
          console.error('Error deleting target:', error);
          this.showToast('ການລົບບໍ່ສຳເລັດ', 'error');
        }
      }
    },
    exportData() {
      const csvData = this.convertToCSV(this.filteredTargets);
      this.downloadCSV(csvData, 'revenue-targets-summary.csv');
    },
    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LAK'
      }).format(amount || 0);
    },
    formatNumber(number) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number || 0);
    },
    convertToCSV(data) {
      const headers = ['ID', 'Name', 'Year', 'Target Amount', 'Exchange Rate', 'Currency', 'Ministry', 'Chart Account', 'Status', 'Remark'];
      const csvContent = [headers.join(','), ...data.map(row => {
        var _row$currency, _row$subMinistries, _row$chartAccount;
        return [row.id, `"${row.name}"`, row.year, row.targetAmount, row.exchangeRate, ((_row$currency = row.currency) === null || _row$currency === void 0 ? void 0 : _row$currency.code) || '', `"${((_row$subMinistries = row.subMinistries) === null || _row$subMinistries === void 0 ? void 0 : _row$subMinistries.ministryNameLao) || ''}"`, `"${((_row$chartAccount = row.chartAccount) === null || _row$chartAccount === void 0 ? void 0 : _row$chartAccount.accountCode) || ''}"`, row.isActive ? 'Active' : 'Inactive', `"${row.remark || ''}"`].join(',');
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
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/moneyAdvanceTarget/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_moneyAdvanceTargetvue_type_script_lang_js_ = (moneyAdvanceTargetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/moneyAdvanceTarget/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(947)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_moneyAdvanceTargetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "107afb10",
  "9de8afd2"
  
)

/* harmony default export */ var moneyAdvanceTarget = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(663);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f87d6c4e", content, true, context)
};

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(576);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-1861f3a8]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.dialog-container[data-v-1861f3a8]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow-y:auto;width:100%}.dialog-header[data-v-1861f3a8]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:20px 24px}.dialog-title[data-v-1861f3a8]{color:#333;font-size:20px;font-weight:600;margin:0}.dialog-close[data-v-1861f3a8]{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:20px;padding:8px;transition:all .2s}.dialog-close[data-v-1861f3a8]:hover{background-color:#e9ecef;color:#333}.dialog-body[data-v-1861f3a8]{padding:24px}.form-row[data-v-1861f3a8]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr;margin-bottom:20px}.form-group[data-v-1861f3a8]{display:flex;flex-direction:column;gap:6px}.form-group label[data-v-1861f3a8]{color:#495057;font-size:14px;font-weight:500}.form-group label.required[data-v-1861f3a8]:after{color:#dc3545;content:\" *\"}.exchange-rate-info[data-v-1861f3a8]{color:#6c757d;font-size:12px;font-weight:400}.exchange-rate-wrapper[data-v-1861f3a8]{align-items:center;display:flex;gap:8px;position:relative}.btn-refresh-rate[data-v-1861f3a8]{align-items:center;background:#17a2b8;border:none;border-radius:4px;color:#fff;cursor:pointer;display:flex;justify-content:center;min-width:40px;padding:8px 12px;transition:all .2s}.btn-refresh-rate[data-v-1861f3a8]:hover:not(:disabled){background:#138496}.btn-refresh-rate[data-v-1861f3a8]:disabled{cursor:not-allowed;opacity:.6}.exchange-rate-updated[data-v-1861f3a8]{align-items:center;color:#28a745;display:flex;font-size:12px;gap:4px;margin-top:4px}.currency-rate[data-v-1861f3a8]{color:#6c757d;font-size:12px}.form-control[data-v-1861f3a8]{background-color:#fff;border:1px solid #ced4da;border-radius:6px;flex:1;font-size:14px;padding:10px 12px;transition:all .2s}.form-control[data-v-1861f3a8]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.form-control.is-invalid[data-v-1861f3a8]{border-color:#dc3545}.form-control.is-invalid[data-v-1861f3a8]:focus{box-shadow:0 0 0 2px rgba(220,53,69,.25)}.form-control[data-v-1861f3a8]:readonly{background-color:#e9ecef;opacity:1}.invalid-feedback[data-v-1861f3a8]{color:#dc3545;font-size:12px;margin-top:4px}.checkbox-wrapper[data-v-1861f3a8]{align-items:center;display:flex;gap:8px;margin-top:8px}.form-checkbox[data-v-1861f3a8]{cursor:pointer;height:18px;width:18px}.checkbox-label[data-v-1861f3a8]{cursor:pointer;font-weight:400;margin:0}.calculation-section[data-v-1861f3a8]{background-color:#f8f9fa;border-radius:8px;margin:20px 0;padding:16px}.calculation-section h4[data-v-1861f3a8]{color:#495057;font-size:16px;margin:0 0 12px}.calculation-grid[data-v-1861f3a8]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:1fr 1fr}.calculation-item[data-v-1861f3a8]{align-items:center;background-color:#fff;border:1px solid #e9ecef;border-radius:6px;display:flex;justify-content:space-between;padding:8px 12px}.calculation-item label[data-v-1861f3a8]{color:#666;font-size:13px;margin:0}.calculation-value[data-v-1861f3a8]{color:#28a745;font-size:14px;font-weight:600}.selected-info-section[data-v-1861f3a8]{background-color:#e7f3ff;border-left:4px solid #007bff;border-radius:8px;margin:20px 0;padding:16px}.selected-info-section h4[data-v-1861f3a8]{color:#0056b3;font-size:16px;margin:0 0 12px}.info-grid[data-v-1861f3a8]{display:flex;flex-direction:column;gap:12px}.info-item[data-v-1861f3a8]{align-items:center;background-color:#fff;border:1px solid #b3d7ff;border-radius:6px;display:flex;justify-content:space-between;padding:8px 12px}.info-item label[data-v-1861f3a8]{color:#0056b3;font-size:13px;font-weight:500;margin:0}.info-value[data-v-1861f3a8]{color:#333;font-size:14px;font-weight:600}.dialog-footer[data-v-1861f3a8]{background-color:#f8f9fa;border-radius:0 0 12px 12px;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-1861f3a8]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;transition:all .2s}.btn[data-v-1861f3a8]:disabled{cursor:not-allowed;opacity:.6}.btn-primary[data-v-1861f3a8]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-1861f3a8]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-1861f3a8]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-1861f3a8]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}@media (max-width:768px){.dialog-overlay[data-v-1861f3a8]{padding:10px}.dialog-container[data-v-1861f3a8]{max-width:100%}.dialog-body[data-v-1861f3a8],.dialog-footer[data-v-1861f3a8],.dialog-header[data-v-1861f3a8]{padding:16px}.form-row[data-v-1861f3a8]{gap:16px;grid-template-columns:1fr}.calculation-grid[data-v-1861f3a8]{gap:12px;grid-template-columns:1fr}.calculation-item[data-v-1861f3a8],.info-item[data-v-1861f3a8]{align-items:flex-start;flex-direction:column;gap:4px}.dialog-footer[data-v-1861f3a8]{flex-direction:column-reverse;gap:8px}.btn[data-v-1861f3a8]{justify-content:center;width:100%}.exchange-rate-wrapper[data-v-1861f3a8]{align-items:stretch;flex-direction:column;gap:8px}.btn-refresh-rate[data-v-1861f3a8]{align-self:flex-end;width:auto}}@media (max-width:480px){.dialog-title[data-v-1861f3a8]{font-size:18px}.form-control[data-v-1861f3a8]{font-size:16px;padding:8px 10px}.calculation-section[data-v-1861f3a8],.selected-info-section[data-v-1861f3a8]{padding:12px}.calculation-item[data-v-1861f3a8],.info-item[data-v-1861f3a8]{padding:6px 8px}}.dialog-overlay[data-v-1861f3a8]{animation:fadeIn-1861f3a8 .3s ease}.dialog-container[data-v-1861f3a8]{animation:slideIn-1861f3a8 .3s ease}@keyframes fadeIn-1861f3a8{0%{opacity:0}to{opacity:1}}@keyframes slideIn-1861f3a8{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(948);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2fa94bec", content, true, context)
};

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/revenueTargetDialog/index.vue?vue&type=template&id=1861f3a8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"dialog-container\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<div class=\"dialog-header\" data-v-1861f3a8><h2 class=\"dialog-title\" data-v-1861f3a8>" + _vm._ssrEscape("\n        " + _vm._s(_vm.target ? 'ແກ້ໄຂເປົ້າໝາຍລາຍຮັບ' : 'ສ້າງເປົ້າໝາຍລາຍຮັບ') + "\n      ") + "</h2> <button class=\"dialog-close\" data-v-1861f3a8><i class=\"fas fa-times\" data-v-1861f3a8></i></button></div> "), _vm._ssrNode("<div class=\"dialog-body\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<form data-v-1861f3a8>", "</form>", [_vm._ssrNode("<div class=\"form-row\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8><label for=\"name\" class=\"required\" data-v-1861f3a8>ຊື່ເປົ້າໝາຍລາຍຮັບ</label> <input id=\"name\" type=\"text\" placeholder=\"ກະລຸນາໃສ່ຊື່ເປົ້າໝາຍ\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.name) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.name
  }) + " data-v-1861f3a8> " + (_vm.errors.name ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.name) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<label for=\"year\" class=\"required\" data-v-1861f3a8>ປີ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.year,
      expression: "form.year"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.year
    },
    attrs: {
      "id": "year",
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
        _vm.$set(_vm.form, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປີ")]), _vm._v(" "), _vm._l(_vm.availableYears, function (year) {
    return _c('option', {
      key: year,
      domProps: {
        "value": year
      }
    }, [_vm._v("\n                " + _vm._s(year) + "\n              ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.year ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.year) + "\n            ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<label for=\"parentMinistryId\" class=\"required\" data-v-1861f3a8>ກະຊວງ/ຫົວໜ່ວຍງານ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.parentMinistryId,
      expression: "form.parentMinistryId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.parentMinistryId
    },
    attrs: {
      "id": "parentMinistryId",
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
        _vm.$set(_vm.form, "parentMinistryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກະຊວງ/ຫົວໜ່ວຍງານ")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                " + _vm._s(ministry.ministryCode) + " (" + _vm._s(ministry.ministryName) + ")\n              ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.parentMinistryId ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.parentMinistryId) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<label for=\"chartAccountId\" class=\"required\" data-v-1861f3a8>ບັນຊີລາຍຮັບ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.chartAccountId,
      expression: "form.chartAccountId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.chartAccountId
    },
    attrs: {
      "id": "chartAccountId",
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
        _vm.$set(_vm.form, "chartAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີລາຍຮັບ ")]), _vm._v(" "), _vm._l(_vm.chartAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                " + _vm._s(account.accountNumber) + " - " + _vm._s(account.accountName) + "\n              ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.chartAccountId ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.chartAccountId) + "\n            ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" class=\"required\" data-v-1861f3a8>ສະກຸນເງິນ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currencyId,
      expression: "form.currencyId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.currencyId
    },
    attrs: {
      "id": "currencyId",
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
        _vm.$set(_vm.form, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCurrencyChange]
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
    }, [_vm._v("\n                " + _vm._s(currency.code) + " - " + _vm._s(currency.name) + "\n              ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.currencyId) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-1861f3a8><label for=\"exchangeRate\" class=\"required\" data-v-1861f3a8>\n              ອັດຕາແລກປ່ຽນ\n              " + (_vm.selectedCurrency ? "<span class=\"exchange-rate-info\" data-v-1861f3a8>" + _vm._ssrEscape("\n                (" + _vm._s(_vm.selectedCurrency.code) + " to LAK)\n              ") + "</span>" : "<!---->") + "</label> <div class=\"exchange-rate-wrapper\" data-v-1861f3a8><input id=\"exchangeRate\" type=\"number\" step=\"0.01\" min=\"1\"" + _vm._ssrAttr("placeholder", _vm.selectedCurrency ? `Rate for ${_vm.selectedCurrency.code}` : '1.00') + _vm._ssrAttr("readonly", _vm.isExchangeRateReadonly) + " required=\"required\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-1861f3a8> " + (_vm.selectedCurrency && _vm.selectedCurrency.code !== 'LAK' ? "<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.refreshingRate) + _vm._ssrAttr("title", 'ອັບເດດອັດຕາແລກປ່ຽນ ' + _vm.selectedCurrency.code) + " class=\"btn-refresh-rate\" data-v-1861f3a8><i" + _vm._ssrClass(null, ['fas', _vm.refreshingRate ? 'fa-spinner fa-spin' : 'fa-sync-alt']) + " data-v-1861f3a8></i></button>" : "<!---->") + "</div> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.exchangeRate) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.exchangeRateUpdated ? "<div class=\"exchange-rate-updated\" data-v-1861f3a8><i class=\"fas fa-check-circle\" data-v-1861f3a8></i>\n              ອັດຕາແລກປ່ຽນໄດ້ຮັບການອັບເດດ\n            </div>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-1861f3a8><div class=\"form-group\" data-v-1861f3a8><label for=\"targetAmount\" class=\"required\" data-v-1861f3a8>ຈຳນວນເປົ້າໝາຍ</label> <input id=\"targetAmount\" type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"0.00\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.targetAmount) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.targetAmount
  }) + " data-v-1861f3a8> " + (_vm.errors.targetAmount ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.targetAmount) + "\n            ") + "</div>" : "<!---->") + "</div></div> <div class=\"form-group\" data-v-1861f3a8><label for=\"remark\" data-v-1861f3a8>ຫມາຍເຫດ</label> <textarea id=\"remark\" rows=\"3\" placeholder=\"ໃສ່ຫມາຍເຫດ (ຖ້າມີ)...\" class=\"form-control\" data-v-1861f3a8>" + _vm._ssrEscape(_vm._s(_vm.form.remark)) + "</textarea></div> " + (_vm.form.targetAmount && _vm.form.exchangeRate ? "<div class=\"calculation-section\" data-v-1861f3a8><h4 data-v-1861f3a8>ການຄິດໄລ່</h4> <div class=\"calculation-grid\" data-v-1861f3a8><div class=\"calculation-item\" data-v-1861f3a8><label data-v-1861f3a8>ຍອດເປົ້າໝາຍເປັນ LAK:</label> <span class=\"calculation-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatCurrency(_vm.calculateLAKAmount())) + "\n              ") + "</span></div> <div class=\"calculation-item\" data-v-1861f3a8><label data-v-1861f3a8>ຍອດເປົ້າໝາຍເປັນ USD:</label> <span class=\"calculation-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatUSD(_vm.calculateUSDAmount())) + "\n              ") + "</span></div></div></div>" : "<!---->") + " " + (_vm.selectedMinistry || _vm.selectedChartAccount || _vm.selectedCurrency ? "<div class=\"selected-info-section\" data-v-1861f3a8><h4 data-v-1861f3a8>ຂໍ້ມູນທີ່ເລືອກ</h4> <div class=\"info-grid\" data-v-1861f3a8>" + (_vm.selectedMinistry ? "<div class=\"info-item\" data-v-1861f3a8><label data-v-1861f3a8>ກະຊວງ/ຫົວໜ່ວຍງານ:</label> <span class=\"info-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.selectedMinistry.ministryCode) + " (" + _vm._s(_vm.selectedMinistry.ministryName) + ")\n              ") + "</span></div>" : "<!---->") + " " + (_vm.selectedChartAccount ? "<div class=\"info-item\" data-v-1861f3a8><label data-v-1861f3a8>ບັນຊີລາຍຮັບ:</label> <span class=\"info-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.selectedChartAccount.accountNumber) + " - " + _vm._s(_vm.selectedChartAccount.accountName) + "\n              ") + "</span></div>" : "<!---->") + " " + (_vm.selectedCurrency ? "<div class=\"info-item\" data-v-1861f3a8><label data-v-1861f3a8>ສະກຸນເງິນ:</label> <span class=\"info-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.selectedCurrency.code) + " - " + _vm._s(_vm.selectedCurrency.name) + "\n                ") + (_vm.selectedCurrency.rate ? "<span class=\"currency-rate\" data-v-1861f3a8>" + _vm._ssrEscape("\n                  (Rate: " + _vm._s(_vm.selectedCurrency.rate) + ")\n                ") + "</span>" : "<!---->") + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"dialog-footer\" data-v-1861f3a8><button type=\"button\" class=\"btn btn-secondary\" data-v-1861f3a8>\n            ຍົກເລີກ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.formLoading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-1861f3a8>" + (_vm.formLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-1861f3a8></i>" : "<!---->") + _vm._ssrEscape("\n            " + _vm._s(_vm.target ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button></div>")], 2)])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/revenueTargetDialog/index.vue?vue&type=template&id=1861f3a8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/revenueTargetDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var revenueTargetDialogvue_type_script_lang_js_ = ({
  name: 'RevenueTargetDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    target: {
      type: Object,
      default: null
    },
    currencies: {
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
    formLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        name: '',
        year: '',
        targetAmount: '',
        exchangeRate: '',
        currencyId: '',
        parentMinistryId: '',
        chartAccountId: '',
        remark: '',
        isActive: true
      },
      errors: {},
      currentYear: new Date().getFullYear(),
      refreshingRate: false,
      exchangeRateUpdated: false,
      manualRateChange: false
    };
  },
  computed: {
    availableYears() {
      const years = [];
      for (let i = 0; i < 10; i++) {
        years.push(this.currentYear + i);
      }
      return years;
    },
    isFormValid() {
      return this.form.name && this.form.year && this.form.targetAmount && this.form.exchangeRate && this.form.currencyId && this.form.parentMinistryId && this.form.chartAccountId && parseFloat(this.form.targetAmount) >= 0 && parseFloat(this.form.exchangeRate) >= 1;
    },
    selectedMinistry() {
      return this.ministries.find(m => m.id === parseInt(this.form.parentMinistryId));
    },
    selectedChartAccount() {
      return this.chartAccounts.find(a => a.id === parseInt(this.form.chartAccountId));
    },
    selectedCurrency() {
      return this.currencies.find(c => c.id === parseInt(this.form.currencyId));
    },
    isExchangeRateReadonly() {
      // Make exchange rate readonly for LAK currency since it should always be 1
      return this.selectedCurrency && this.selectedCurrency.code === 'LAK';
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeForm();
      }
    },
    target: {
      handler() {
        if (this.show) {
          this.initializeForm();
        }
      },
      deep: true
    },
    'form.exchangeRate'() {
      // Reset the update indicator when user manually changes the rate
      if (!this.refreshingRate) {
        this.exchangeRateUpdated = false;
      }
    }
  },
  methods: {
    initializeForm() {
      if (this.target) {
        // Edit mode
        this.form = {
          name: this.target.name || '',
          year: this.target.year || '',
          targetAmount: this.target.targetAmount || '',
          exchangeRate: this.target.exchangeRate || '',
          currencyId: this.target.currencyId || '',
          parentMinistryId: this.target.parentMinistryId || '',
          chartAccountId: this.target.chartAccountId || '',
          remark: this.target.remark || '',
          isActive: this.target.isActive !== false
        };
        // Set initial exchange rate if currency is already selected
        this.$nextTick(() => {
          if (this.form.currencyId) {
            this.updateExchangeRateFromCurrency();
          }
        });
      } else {
        // Create mode
        this.form = {
          name: '',
          year: this.currentYear,
          targetAmount: '',
          exchangeRate: '',
          currencyId: '',
          parentMinistryId: '',
          chartAccountId: '',
          remark: '',
          isActive: true
        };
      }
      this.errors = {};
      this.exchangeRateUpdated = false;
      this.manualRateChange = false;
    },
    onCurrencyChange() {
      this.updateExchangeRateFromCurrency();
    },
    updateExchangeRateFromCurrency() {
      const currency = this.selectedCurrency;
      console.log(`currency ${JSON.stringify(this.currencies)}`);
      console.log(`Exchange rate ${currency.rate}`);
      if (currency) {
        if (currency.code === 'LAK') {
          // LAK to LAK rate is always 1
          this.form.exchangeRate = '1';
        } else if (currency.rate) {
          // Use the rate from currency object
          this.form.exchangeRate = currency.rate.toString();
        } else if (currency.exchangeRate) {
          // Alternative property name for exchange rate
          this.form.exchangeRate = currency.exchangeRate.toString();
        } else {
          // Default rates for common currencies if no rate is provided
          const defaultRates = {
            'USD': '21000',
            'EUR': '23000',
            'THB': '600',
            'CNY': '2900',
            'VND': '0.85'
          };
          this.form.exchangeRate = defaultRates[currency.code] || '1';
        }

        // Clear validation errors for exchange rate
        if (this.errors.exchangeRate) {
          delete this.errors.exchangeRate;
        }
      }
    },
    async refreshExchangeRate() {
      if (!this.selectedCurrency || this.selectedCurrency.code === 'LAK') return;
      this.refreshingRate = true;
      this.exchangeRateUpdated = false;
      try {
        // Emit event to parent to fetch latest exchange rate
        this.$emit('refresh-exchange-rate', {
          currencyId: this.selectedCurrency.id,
          currencyCode: this.selectedCurrency.code,
          callback: this.handleExchangeRateUpdate
        });
      } catch (error) {
        console.error('Error refreshing exchange rate:', error);
        this.$emit('show-error', 'ບໍ່ສາມາດອັບເດດອັດຕາແລກປ່ຽນໄດ້');
      } finally {
        this.refreshingRate = false;
      }
    },
    handleExchangeRateUpdate(newRate) {
      if (newRate && newRate > 0) {
        this.form.exchangeRate = newRate.toString();
        this.exchangeRateUpdated = true;

        // Hide the update indicator after 3 seconds
        setTimeout(() => {
          this.exchangeRateUpdated = false;
        }, 3000);
      }
      this.refreshingRate = false;
    },
    validateForm() {
      this.errors = {};
      if (!this.form.name || this.form.name.trim().length < 2) {
        this.errors.name = 'ຊື່ເປົ້າໝາຍຕ້ອງມີຢ່າງນ້ອຍ 2 ຕົວອັກສອນ';
      }
      if (!this.form.year) {
        this.errors.year = 'ກະລຸນາເລືອກປີ';
      }
      if (!this.form.targetAmount || parseFloat(this.form.targetAmount) < 0) {
        this.errors.targetAmount = 'ຈຳນວນເປົ້າໝາຍຕ້ອງເປັນຕົວເລກບວກ';
      }
      if (!this.form.exchangeRate || parseFloat(this.form.exchangeRate) < 1) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງເປັນຕົວເລກທີ່ມາກກວ່າ 1';
      }
      if (!this.form.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
      }
      if (!this.form.parentMinistryId) {
        this.errors.parentMinistryId = 'ກະລຸນາເລືອກກະຊວງ/ຫົວໜ່ວຍງານ';
      }
      if (!this.form.chartAccountId) {
        this.errors.chartAccountId = 'ກະລຸນາເລືອກບັນຊີລາຍຮັບ';
      }
      return Object.keys(this.errors).length === 0;
    },
    async handleSubmit() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດ');
        return;
      }
      const formData = {
        name: this.form.name.trim(),
        year: parseInt(this.form.year),
        targetAmount: parseFloat(this.form.targetAmount),
        exchangeRate: parseFloat(this.form.exchangeRate),
        currencyId: parseInt(this.form.currencyId),
        parentMinistryId: parseInt(this.form.parentMinistryId),
        chartAccountId: parseInt(this.form.chartAccountId),
        remark: this.form.remark.trim(),
        isActive: this.form.isActive
      };
      this.$emit('save', formData);
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    closeDialog() {
      this.$emit('close');
    },
    calculateLAKAmount() {
      const amount = parseFloat(this.form.targetAmount) || 0;
      const rate = parseFloat(this.form.exchangeRate) || 1;
      return amount * rate;
    },
    calculateUSDAmount() {
      const amount = parseFloat(this.form.targetAmount) || 0;
      const rate = parseFloat(this.form.exchangeRate) || 1;

      // If the selected currency is USD, return the original amount
      if (this.selectedCurrency && this.selectedCurrency.code === 'USD') {
        return amount;
      }

      // Convert to USD (assuming USD rate is around 21000 LAK)
      const usdRate = 21000;
      const lakAmount = amount * rate;
      return lakAmount / usdRate;
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('lo-LA', {
        style: 'currency',
        currency: 'LAK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount || 0);
    },
    formatUSD(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    }
  }
});
// CONCATENATED MODULE: ./components/MA/revenueTargetDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_revenueTargetDialogvue_type_script_lang_js_ = (revenueTargetDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/revenueTargetDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(662)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_revenueTargetDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1861f3a8",
  "3c76fda0"
  
)

/* harmony default export */ var revenueTargetDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_107afb10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_107afb10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_107afb10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_107afb10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_107afb10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".revenue-target-container[data-v-107afb10]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-107afb10]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-107afb10]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-107afb10]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-107afb10]{display:flex;gap:12px}.filter-section[data-v-107afb10]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-107afb10]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-107afb10]{display:flex;flex-direction:column;gap:8px;min-width:150px}.filter-group label[data-v-107afb10]{color:#555;font-size:14px;font-weight:500}.filter-actions[data-v-107afb10]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-107afb10]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin-bottom:20px}.summary-card[data-v-107afb10]{align-items:center;background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);display:flex;padding:20px;transition:transform .2s}.summary-card[data-v-107afb10]:hover{transform:translateY(-2px)}.card-icon[data-v-107afb10]{align-items:center;border-radius:50%;display:flex;font-size:24px;height:60px;justify-content:center;margin-right:16px;width:60px}.card-icon.total[data-v-107afb10]{background:#e2e3e5;color:#383d41}.card-icon.active[data-v-107afb10]{background:#d4edda;color:#155724}.card-icon.amount[data-v-107afb10]{background:#d1ecf1;color:#0c5460}.card-icon.yearly[data-v-107afb10]{background:#f8d7da;color:#721c24}.card-content h3[data-v-107afb10]{font-size:24px;font-weight:700;margin:0 0 4px}.card-content p[data-v-107afb10]{color:#666;font-size:14px;margin:0}.table-section[data-v-107afb10]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-107afb10]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-107afb10]{color:#333;margin:0}.record-count[data-v-107afb10]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-107afb10]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-107afb10]{overflow-x:auto}.data-table[data-v-107afb10]{border-collapse:collapse;min-width:1200px;width:100%}.data-table td[data-v-107afb10],.data-table th[data-v-107afb10]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left;white-space:nowrap}.data-table th[data-v-107afb10]{background-color:#f8f9fa;color:#495057;font-weight:600;position:sticky;top:0;z-index:10}.data-table th.sortable[data-v-107afb10]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-107afb10]:hover{background-color:#e9ecef}.data-table th i[data-v-107afb10]{margin-left:8px;opacity:.5}.name-cell[data-v-107afb10]{color:#495057;font-weight:600;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amount-cell[data-v-107afb10]{color:#28a745;font-weight:600;text-align:right}.exchange-rate-cell[data-v-107afb10]{color:#6c757d;font-weight:500;text-align:right}.ministry-cell[data-v-107afb10]{max-width:180px}.chart-account-cell[data-v-107afb10],.ministry-cell[data-v-107afb10]{overflow:hidden;text-overflow:ellipsis}.chart-account-cell[data-v-107afb10]{max-width:120px}.remark-cell[data-v-107afb10]{color:#6c757d;font-size:13px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.actions-cell[data-v-107afb10]{display:flex;gap:4px;min-width:200px}.status-badge[data-v-107afb10]{border-radius:20px;font-size:12px;font-weight:500;padding:4px 12px;white-space:nowrap}.status-badge.active[data-v-107afb10]{background-color:#d4edda;color:#155724}.status-badge.inactive[data-v-107afb10]{background-color:#f8d7da;color:#721c24}.year-badge[data-v-107afb10]{background-color:#e7f3ff;border-radius:12px;color:#06c;font-size:12px;font-weight:600;padding:4px 8px}.currency-tag[data-v-107afb10]{background-color:#fff3cd;color:#856404}.currency-tag[data-v-107afb10],.ministry-tag[data-v-107afb10]{border-radius:12px;font-size:11px;font-weight:500;padding:3px 8px}.ministry-tag[data-v-107afb10]{background-color:#e2e3e5;color:#383d41;display:inline-block;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.account-tag[data-v-107afb10]{background-color:#d1ecf1;border-radius:12px;color:#0c5460;font-size:11px;font-weight:500;padding:3px 8px}.no-data[data-v-107afb10]{color:#999;font-size:12px;font-style:italic}.pagination-container[data-v-107afb10]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-107afb10]{color:#666;font-size:14px}.pagination-controls[data-v-107afb10]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-107afb10]{color:#666;padding:6px 12px}.btn[data-v-107afb10]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-107afb10]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-107afb10]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-107afb10]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-107afb10]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-107afb10]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-107afb10]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-107afb10]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-107afb10]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-107afb10]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-107afb10]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-107afb10]:hover{background-color:#17a2b8;color:#fff}.btn-outline-warning[data-v-107afb10]{background-color:transparent;border-color:#ffc107;color:#ffc107}.btn-outline-warning[data-v-107afb10]:hover{background-color:#ffc107;color:#212529}.btn-outline-success[data-v-107afb10]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-107afb10]:hover{background-color:#28a745;color:#fff}.btn-outline-danger[data-v-107afb10]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-107afb10]:hover{background-color:#dc3545;color:#fff}.btn-sm[data-v-107afb10]{font-size:12px;padding:4px 8px}.form-control[data-v-107afb10]{background-color:#fff;border:1px solid #ced4da;border-radius:4px;font-size:14px;min-width:150px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-107afb10]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.form-control[data-v-107afb10]:disabled{background-color:#e9ecef;opacity:1}.loading-overlay[data-v-107afb10]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-107afb10]{background:#fff;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.15);padding:40px;text-align:center}.loading-spinner i[data-v-107afb10]{color:#007bff;display:block;font-size:32px;margin-bottom:16px}.loading-spinner p[data-v-107afb10]{color:#666;font-size:14px;margin:0}@media (max-width:1200px){.filter-row[data-v-107afb10]{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.data-table[data-v-107afb10]{min-width:1000px}}@media (max-width:768px){.revenue-target-container[data-v-107afb10]{padding:10px}.header-content[data-v-107afb10]{align-items:flex-start}.filter-row[data-v-107afb10],.header-content[data-v-107afb10]{flex-direction:column;gap:16px}.filter-group[data-v-107afb10]{min-width:auto;width:100%}.filter-actions[data-v-107afb10]{flex-direction:row;width:100%}.summary-cards[data-v-107afb10]{grid-template-columns:1fr}.pagination-container[data-v-107afb10],.table-header[data-v-107afb10]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-107afb10]{flex-wrap:wrap}.actions-cell[data-v-107afb10]{flex-direction:column;gap:4px;min-width:auto}.data-table td[data-v-107afb10],.data-table th[data-v-107afb10]{font-size:13px;padding:8px 12px}.name-cell[data-v-107afb10]{max-width:120px}.ministry-cell[data-v-107afb10]{max-width:100px}.chart-account-cell[data-v-107afb10]{max-width:80px}.remark-cell[data-v-107afb10]{max-width:100px}}@media (max-width:480px){.summary-card[data-v-107afb10]{padding:16px}.card-icon[data-v-107afb10]{height:50px;margin-right:12px;width:50px}.card-content h3[data-v-107afb10],.card-icon[data-v-107afb10]{font-size:20px}.btn[data-v-107afb10],.card-content p[data-v-107afb10]{font-size:12px}.btn[data-v-107afb10]{padding:6px 12px}.btn-sm[data-v-107afb10]{font-size:11px;padding:3px 6px}.data-table[data-v-107afb10]{min-width:800px}}.text-center[data-v-107afb10]{text-align:center}.text-right[data-v-107afb10]{text-align:right}.text-left[data-v-107afb10]{text-align:left}.d-flex[data-v-107afb10]{display:flex}.justify-content-between[data-v-107afb10]{justify-content:space-between}.align-items-center[data-v-107afb10]{align-items:center}.mb-3[data-v-107afb10]{margin-bottom:1rem}.mt-3[data-v-107afb10]{margin-top:1rem}.p-3[data-v-107afb10]{padding:1rem}.data-table tbody tr[data-v-107afb10]:hover{background-color:#f8f9fa}.btn[data-v-107afb10]:focus{box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.btn[data-v-107afb10],.form-control[data-v-107afb10],.summary-card[data-v-107afb10]{transition:all .2s ease-in-out}@media print{.actions-cell[data-v-107afb10],.filter-section[data-v-107afb10],.header-actions[data-v-107afb10],.pagination-container[data-v-107afb10]{display:none!important}.revenue-target-container[data-v-107afb10]{background-color:#fff;padding:0}.page-header[data-v-107afb10],.table-section[data-v-107afb10]{border:1px solid #dee2e6;box-shadow:none}.data-table[data-v-107afb10]{min-width:auto}.data-table td[data-v-107afb10],.data-table th[data-v-107afb10]{font-size:12px;padding:6px 8px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map