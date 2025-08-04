exports.ids = [166];
exports.modules = {

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvanceDashboard/index.vue?vue&type=template&id=23bbd891&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settlement-report-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-23bbd891><div class=\"header-content\" data-v-23bbd891><h1 class=\"page-title\" data-v-23bbd891>Settlement Report &amp; Analytics</h1> <div class=\"header-actions\" data-v-23bbd891><button class=\"btn btn-secondary\" data-v-23bbd891><i class=\"fas fa-sync-alt\" data-v-23bbd891></i>\n          Refresh\n        </button> <button class=\"btn btn-success\" data-v-23bbd891><i class=\"fas fa-file-excel\" data-v-23bbd891></i>\n          Export Report\n        </button> <button class=\"btn btn-primary\" data-v-23bbd891><i class=\"fas fa-print\" data-v-23bbd891></i>\n          Print Report\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-23bbd891>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-23bbd891>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-23bbd891>", "</div>", [_vm._ssrNode("<label data-v-23bbd891>Report Period:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reportPeriod,
      expression: "reportPeriod"
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
        _vm.reportPeriod = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.updateDateRange]
    }
  }, [_c('option', {
    attrs: {
      "value": "today"
    }
  }, [_vm._v("Today")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "week"
    }
  }, [_vm._v("This Week")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "month"
    }
  }, [_vm._v("This Month")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "quarter"
    }
  }, [_vm._v("This Quarter")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "year"
    }
  }, [_vm._v("This Year")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "custom"
    }
  }, [_vm._v("Custom Range")])])], 2), _vm._ssrNode(" " + (_vm.reportPeriod === 'custom' ? "<div class=\"filter-group\" data-v-23bbd891><label data-v-23bbd891>From Date:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.customDateRange.start) + " class=\"form-control\" data-v-23bbd891></div>" : "<!---->") + " " + (_vm.reportPeriod === 'custom' ? "<div class=\"filter-group\" data-v-23bbd891><label data-v-23bbd891>To Date:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.customDateRange.end) + " class=\"form-control\" data-v-23bbd891></div>" : "<!---->") + " <div class=\"filter-actions\" data-v-23bbd891><button class=\"btn btn-outline-primary\" data-v-23bbd891><i class=\"fas fa-chart-bar\" data-v-23bbd891></i>\n          Generate Report\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"metrics-dashboard\" data-v-23bbd891><div class=\"metric-card outstanding\" data-v-23bbd891><div class=\"metric-icon\" data-v-23bbd891><i class=\"fas fa-exclamation-triangle\" data-v-23bbd891></i></div> <div class=\"metric-content\" data-v-23bbd891><h3 data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.metrics.totalOutstanding))) + "</h3> <p data-v-23bbd891>Total Outstanding</p> <span class=\"metric-subtitle\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.metrics.outstandingCount) + " advances") + "</span></div> <div" + _vm._ssrClass("metric-trend", _vm.metrics.outstandingTrend.direction) + " data-v-23bbd891><i" + _vm._ssrClass(null, _vm.getTrendIcon(_vm.metrics.outstandingTrend.direction)) + " data-v-23bbd891></i> <span data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.metrics.outstandingTrend.percentage) + "%") + "</span></div></div> <div class=\"metric-card advances\" data-v-23bbd891><div class=\"metric-icon\" data-v-23bbd891><i class=\"fas fa-hand-holding-usd\" data-v-23bbd891></i></div> <div class=\"metric-content\" data-v-23bbd891><h3 data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.metrics.totalAdvances))) + "</h3> <p data-v-23bbd891>Total Advances</p> <span class=\"metric-subtitle\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.metrics.advancesCount) + " requests") + "</span></div> <div" + _vm._ssrClass("metric-trend", _vm.metrics.advancesTrend.direction) + " data-v-23bbd891><i" + _vm._ssrClass(null, _vm.getTrendIcon(_vm.metrics.advancesTrend.direction)) + " data-v-23bbd891></i> <span data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.metrics.advancesTrend.percentage) + "%") + "</span></div></div> <div class=\"metric-card settled\" data-v-23bbd891><div class=\"metric-icon\" data-v-23bbd891><i class=\"fas fa-check-double\" data-v-23bbd891></i></div> <div class=\"metric-content\" data-v-23bbd891><h3 data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.metrics.totalSettled))) + "</h3> <p data-v-23bbd891>Total Settled</p> <span class=\"metric-subtitle\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.metrics.settledCount) + " completed") + "</span></div> <div" + _vm._ssrClass("metric-trend", _vm.metrics.settledTrend.direction) + " data-v-23bbd891><i" + _vm._ssrClass(null, _vm.getTrendIcon(_vm.metrics.settledTrend.direction)) + " data-v-23bbd891></i> <span data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.metrics.settledTrend.percentage) + "%") + "</span></div></div> <div class=\"metric-card efficiency\" data-v-23bbd891><div class=\"metric-icon\" data-v-23bbd891><i class=\"fas fa-tachometer-alt\" data-v-23bbd891></i></div> <div class=\"metric-content\" data-v-23bbd891><h3 data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.metrics.averageSettlementDays)) + "</h3> <p data-v-23bbd891>Avg Settlement Days</p> <span class=\"metric-subtitle\" data-v-23bbd891>Processing time</span></div> <div" + _vm._ssrClass("metric-trend", _vm.metrics.efficiencyTrend.direction) + " data-v-23bbd891><i" + _vm._ssrClass(null, _vm.getTrendIcon(_vm.metrics.efficiencyTrend.direction)) + " data-v-23bbd891></i> <span data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.metrics.efficiencyTrend.percentage) + "%") + "</span></div></div></div> <div class=\"charts-section\" data-v-23bbd891><div class=\"chart-container\" data-v-23bbd891><div class=\"chart-header\" data-v-23bbd891><h3 data-v-23bbd891>Settlement Trend Analysis</h3> <div class=\"chart-controls\" data-v-23bbd891>" + _vm._ssrList(['7d', '30d', '90d'], function (period) {
    return "<button" + _vm._ssrClass("btn btn-sm", _vm.chartPeriod === period ? 'btn-primary' : 'btn-outline-secondary') + " data-v-23bbd891>" + _vm._ssrEscape("\n            " + _vm._s(period) + "\n          ") + "</button>";
  }) + "</div></div> <div class=\"chart-content\" data-v-23bbd891><div class=\"chart-placeholder\" data-v-23bbd891><i class=\"fas fa-chart-line\" data-v-23bbd891></i> <p data-v-23bbd891>" + _vm._ssrEscape("Settlement trends over " + _vm._s(_vm.chartPeriod)) + "</p></div></div></div> <div class=\"chart-container\" data-v-23bbd891><div class=\"chart-header\" data-v-23bbd891><h3 data-v-23bbd891>Monthly Trend Analysis</h3></div> <div class=\"chart-content\" data-v-23bbd891><div class=\"trend-summary\" data-v-23bbd891><div class=\"trend-item\" data-v-23bbd891><span class=\"trend-label\" data-v-23bbd891>This Month:</span> <span class=\"trend-value\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.metrics.totalAdvances))) + "</span></div> <div class=\"trend-item\" data-v-23bbd891><span class=\"trend-label\" data-v-23bbd891>Outstanding:</span> <span class=\"trend-value outstanding\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.metrics.totalOutstanding))) + "</span></div> <div class=\"trend-item\" data-v-23bbd891><span class=\"trend-label\" data-v-23bbd891>Settled:</span> <span class=\"trend-value settled\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.metrics.totalSettled))) + "</span></div> <div class=\"trend-item\" data-v-23bbd891><span class=\"trend-label\" data-v-23bbd891>Settlement Rate:</span> <span class=\"trend-value\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.statistics.settlementRate) + "%") + "</span></div></div></div></div></div> "), _vm._ssrNode("<div class=\"detailed-listing\" data-v-23bbd891>", "</div>", [_vm._ssrNode("<div class=\"listing-header\" data-v-23bbd891>", "</div>", [_vm._ssrNode("<h3 data-v-23bbd891>Detailed Advance Listing</h3> "), _vm._ssrNode("<div class=\"listing-controls\" data-v-23bbd891>", "</div>", [_vm._ssrNode("<div class=\"search-box\" data-v-23bbd891><i class=\"fas fa-search\" data-v-23bbd891></i> <input type=\"text\" placeholder=\"Search advances...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " class=\"form-control\" data-v-23bbd891></div> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.statusFilter,
      expression: "statusFilter"
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
        _vm.statusFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("Pending")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "outstanding"
    }
  }, [_vm._v("Outstanding")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settled"
    }
  }, [_vm._v("Settled")])])], 2)], 2), _vm._ssrNode(" " + (_vm.overdueAdvances.length > 0 ? "<div class=\"alert-section\" data-v-23bbd891><div class=\"alert alert-warning\" data-v-23bbd891><i class=\"fas fa-exclamation-triangle\" data-v-23bbd891></i> <strong data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.overdueAdvances.length) + " Overdue Advances") + "</strong>" + _vm._ssrEscape(" - \n        Total amount: " + _vm._s(_vm.formatCurrency(_vm.overdueTotal)) + "\n        ") + "<button class=\"btn btn-sm btn-outline-warning ml-2\" data-v-23bbd891>" + _vm._ssrEscape("\n          " + _vm._s(_vm.showOverdueDetails ? 'Hide' : 'Show') + " Details\n        ") + "</button></div> " + (_vm.showOverdueDetails ? "<div class=\"overdue-details\" data-v-23bbd891>" + _vm._ssrList(_vm.overdueAdvances, function (advance) {
    return "<div class=\"overdue-item\" data-v-23bbd891><span class=\"employee-name\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(advance.employeeName)) + "</span> <span class=\"advance-amount\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(advance.amount))) + "</span> <span class=\"days-overdue\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(advance.daysOverdue) + " days overdue") + "</span> <button class=\"btn btn-sm btn-warning\" data-v-23bbd891>\n            Send Reminder\n          </button></div>";
  }) + "</div>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"table-container\" data-v-23bbd891><table class=\"advances-table\" data-v-23bbd891><thead data-v-23bbd891><tr data-v-23bbd891><th class=\"sortable\" data-v-23bbd891>\n              Advance ID\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('id')) + " data-v-23bbd891></i></th> <th class=\"sortable\" data-v-23bbd891>\n              Employee\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('employeeName')) + " data-v-23bbd891></i></th> <th class=\"sortable\" data-v-23bbd891>\n              Request Date\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('requestDate')) + " data-v-23bbd891></i></th> <th class=\"sortable\" data-v-23bbd891>\n              Amount\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('amount')) + " data-v-23bbd891></i></th> <th class=\"sortable\" data-v-23bbd891>\n              Outstanding\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('outstanding')) + " data-v-23bbd891></i></th> <th class=\"sortable\" data-v-23bbd891>\n              Status\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('status')) + " data-v-23bbd891></i></th> <th data-v-23bbd891>Days Pending</th> <th data-v-23bbd891>Actions</th></tr></thead> <tbody data-v-23bbd891>" + _vm._ssrList(_vm.paginatedAdvances, function (advance) {
    return "<tr data-v-23bbd891><td data-v-23bbd891>" + _vm._ssrEscape(_vm._s(advance.id)) + "</td> <td data-v-23bbd891><div class=\"employee-info\" data-v-23bbd891><strong data-v-23bbd891>" + _vm._ssrEscape(_vm._s(advance.employeeName)) + "</strong> <small data-v-23bbd891>" + _vm._ssrEscape(_vm._s(advance.employeeId)) + "</small></div></td> <td data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatDate(advance.requestDate))) + "</td> <td class=\"amount-cell\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(advance.amount))) + "</td> <td" + _vm._ssrClass("outstanding-cell", advance.outstanding > 0 ? 'has-outstanding' : '') + " data-v-23bbd891>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatCurrency(advance.outstanding)) + "\n            ") + "</td> <td data-v-23bbd891><span" + _vm._ssrClass(null, ['status-badge', advance.status]) + " data-v-23bbd891>" + _vm._ssrEscape("\n                " + _vm._s(advance.status) + "\n              ") + "</span></td> <td" + _vm._ssrClass("days-cell", _vm.getDaysClass(advance.daysPending)) + " data-v-23bbd891>" + _vm._ssrEscape("\n              " + _vm._s(advance.daysPending) + " days\n            ") + "</td> <td class=\"actions-cell\" data-v-23bbd891><button title=\"View Details\" class=\"btn btn-sm btn-outline-primary\" data-v-23bbd891><i class=\"fas fa-eye\" data-v-23bbd891></i></button> " + (advance.status === 'outstanding' ? "<button title=\"Send Reminder\" class=\"btn btn-sm btn-outline-warning\" data-v-23bbd891><i class=\"fas fa-bell\" data-v-23bbd891></i></button>" : "<!---->") + " " + (advance.status === 'approved' ? "<button title=\"Mark as Settled\" class=\"btn btn-sm btn-outline-success\" data-v-23bbd891><i class=\"fas fa-check\" data-v-23bbd891></i></button>" : "<!---->") + "</td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-23bbd891><div class=\"pagination-info\" data-v-23bbd891>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of " + _vm._s(_vm.filteredAdvances.length) + " advances\n      ") + "</div> <div class=\"pagination-controls\" data-v-23bbd891><button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-23bbd891>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-23bbd891>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-23bbd891>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-23bbd891>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-23bbd891>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" <div class=\"summary-statistics\" data-v-23bbd891><div class=\"stat-group\" data-v-23bbd891><h4 data-v-23bbd891>Payment Statistics</h4> <div class=\"stat-items\" data-v-23bbd891><div class=\"stat-item\" data-v-23bbd891><span class=\"stat-label\" data-v-23bbd891>Average Advance Amount:</span> <span class=\"stat-value\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.statistics.avgAdvanceAmount))) + "</span></div> <div class=\"stat-item\" data-v-23bbd891><span class=\"stat-label\" data-v-23bbd891>Largest Outstanding:</span> <span class=\"stat-value\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.statistics.largestOutstanding))) + "</span></div> <div class=\"stat-item\" data-v-23bbd891><span class=\"stat-label\" data-v-23bbd891>Settlement Rate:</span> <span class=\"stat-value\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.statistics.settlementRate) + "%") + "</span></div></div></div> <div class=\"stat-group\" data-v-23bbd891><h4 data-v-23bbd891>Performance Metrics</h4> <div class=\"stat-items\" data-v-23bbd891><div class=\"stat-item\" data-v-23bbd891><span class=\"stat-label\" data-v-23bbd891>Average Processing Time:</span> <span class=\"stat-value\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.statistics.avgProcessingTime) + " days") + "</span></div> <div class=\"stat-item\" data-v-23bbd891><span class=\"stat-label\" data-v-23bbd891>On-time Settlement Rate:</span> <span class=\"stat-value\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.statistics.onTimeRate) + "%") + "</span></div> <div class=\"stat-item\" data-v-23bbd891><span class=\"stat-label\" data-v-23bbd891>Total Employees with Advances:</span> <span class=\"stat-value\" data-v-23bbd891>" + _vm._ssrEscape(_vm._s(_vm.statistics.totalEmployees)) + "</span></div></div></div></div> " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-23bbd891><div class=\"loading-spinner\" data-v-23bbd891><i class=\"fas fa-spinner fa-spin\" data-v-23bbd891></i> <p data-v-23bbd891>Generating Report...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/moneyAdvanceDashboard/index.vue?vue&type=template&id=23bbd891&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvanceDashboard/index.vue?vue&type=script&lang=js&
















/* harmony default export */ var moneyAdvanceDashboardvue_type_script_lang_js_ = ({
  name: 'SettlementReport',
  data() {
    return {
      loading: false,
      reportPeriod: 'month',
      customDateRange: {
        start: '',
        end: ''
      },
      selectedDepartment: '',
      searchQuery: '',
      statusFilter: '',
      chartPeriod: '30d',
      showOverdueDetails: false,
      currentPage: 1,
      itemsPerPage: 25,
      // Sorting
      sort: {
        field: 'requestDate',
        direction: 'desc'
      },
      // Data
      advances: [],
      // Metrics
      metrics: {
        totalOutstanding: 0,
        outstandingCount: 0,
        totalAdvances: 0,
        advancesCount: 0,
        totalSettled: 0,
        settledCount: 0,
        averageSettlementDays: 0,
        outstandingTrend: {
          direction: 'up',
          percentage: 12
        },
        advancesTrend: {
          direction: 'up',
          percentage: 8
        },
        settledTrend: {
          direction: 'down',
          percentage: 5
        },
        efficiencyTrend: {
          direction: 'down',
          percentage: 3
        }
      },
      // Statistics
      statistics: {
        avgAdvanceAmount: 0,
        largestOutstanding: 0,
        settlementRate: 0,
        avgProcessingTime: 0,
        onTimeRate: 0,
        totalEmployees: 0
      }

      // Department breakdown - removed since no department grouping
      // departmentStats: []
    };
  },

  computed: {
    filteredAdvances() {
      let filtered = [...this.advances];

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(advance => advance.employeeName.toLowerCase().includes(query) || advance.id.toString().includes(query));
      }

      // Status filter
      if (this.statusFilter) {
        filtered = filtered.filter(advance => advance.status === this.statusFilter);
      }
      return this.sortAdvances(filtered);
    },
    paginatedAdvances() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredAdvances.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredAdvances.length / this.itemsPerPage);
    },
    paginationInfo() {
      const start = (this.currentPage - 1) * this.itemsPerPage + 1;
      const end = Math.min(start + this.itemsPerPage - 1, this.filteredAdvances.length);
      return {
        start,
        end,
        total: this.filteredAdvances.length
      };
    },
    visiblePages() {
      const pages = [];
      const current = this.currentPage;
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
    overdueAdvances() {
      return this.advances.filter(advance => advance.status === 'outstanding' && advance.daysPending > 30);
    },
    overdueTotal() {
      return this.overdueAdvances.reduce((sum, advance) => sum + advance.outstanding, 0);
    }
  },
  mounted() {
    this.initializeReport();
  },
  methods: {
    async initializeReport() {
      this.loading = true;
      try {
        await Promise.all([this.fetchAdvances(), this.calculateMetrics(), this.calculateStatistics()]);
      } catch (error) {
        console.error('Error initializing report:', error);
        this.showToast('Error loading report data', 'error');
      } finally {
        this.loading = false;
      }
    },
    async fetchAdvances() {
      try {
        const response = await this.$axios.get('/api/money-advances/report', {
          params: {
            period: this.reportPeriod,
            startDate: this.customDateRange.start,
            endDate: this.customDateRange.end
          }
        });
        this.advances = Array.isArray(response.data.data) ? response.data.data : [];
      } catch (error) {
        console.error('Error fetching advances:', error);
        this.advances = [];
      }
    },
    calculateMetrics() {
      if (!Array.isArray(this.advances)) return;
      const metrics = {
        totalOutstanding: 0,
        outstandingCount: 0,
        totalAdvances: 0,
        advancesCount: this.advances.length,
        totalSettled: 0,
        settledCount: 0,
        averageSettlementDays: 0
      };
      let totalDays = 0;
      let settledCount = 0;
      this.advances.forEach(advance => {
        metrics.totalAdvances += advance.amount;
        if (advance.status === 'outstanding') {
          metrics.totalOutstanding += advance.outstanding;
          metrics.outstandingCount++;
        }
        if (advance.status === 'settled') {
          metrics.totalSettled += advance.amount;
          metrics.settledCount++;
          totalDays += advance.settlementDays || 0;
          settledCount++;
        }
      });
      if (settledCount > 0) {
        metrics.averageSettlementDays = Math.round(totalDays / settledCount);
      }
      this.metrics = {
        ...this.metrics,
        ...metrics
      };
    },
    calculateStatistics() {
      if (!Array.isArray(this.advances) || this.advances.length === 0) return;
      const stats = {
        avgAdvanceAmount: this.advances.reduce((sum, a) => sum + a.amount, 0) / this.advances.length,
        largestOutstanding: Math.max(...this.advances.map(a => a.outstanding || 0)),
        settlementRate: this.advances.filter(a => a.status === 'settled').length / this.advances.length * 100,
        avgProcessingTime: this.advances.reduce((sum, a) => sum + (a.daysPending || 0), 0) / this.advances.length,
        onTimeRate: this.advances.filter(a => (a.daysPending || 0) <= 30).length / this.advances.length * 100,
        totalEmployees: new Set(this.advances.map(a => a.employeeId)).size
      };
      this.statistics = {
        avgAdvanceAmount: Math.round(stats.avgAdvanceAmount),
        largestOutstanding: stats.largestOutstanding,
        settlementRate: Math.round(stats.settlementRate),
        avgProcessingTime: Math.round(stats.avgProcessingTime),
        onTimeRate: Math.round(stats.onTimeRate),
        totalEmployees: stats.totalEmployees
      };
    },
    sortAdvances(advances) {
      return advances.sort((a, b) => {
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
    // Event handlers
    updateDateRange() {
      const today = new Date();
      const ranges = {
        today: {
          start: today,
          end: today
        },
        week: {
          start: new Date(today.setDate(today.getDate() - 7)),
          end: new Date()
        },
        month: {
          start: new Date(today.getFullYear(), today.getMonth(), 1),
          end: new Date()
        },
        quarter: {
          start: new Date(today.getFullYear(), Math.floor(today.getMonth() / 3) * 3, 1),
          end: new Date()
        },
        year: {
          start: new Date(today.getFullYear(), 0, 1),
          end: new Date()
        }
      };
      if (ranges[this.reportPeriod]) {
        this.customDateRange.start = this.formatDateForInput(ranges[this.reportPeriod].start);
        this.customDateRange.end = this.formatDateForInput(ranges[this.reportPeriod].end);
      }
    },
    async generateReport() {
      await this.initializeReport();
    },
    async refreshData() {
      await this.initializeReport();
      this.showToast('Report data refreshed', 'success');
    },
    updateChartPeriod(period) {
      this.chartPeriod = period;
      // Update chart data based on period
    },

    sortBy(field) {
      if (this.sort.field === field) {
        this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        this.sort.field = field;
        this.sort.direction = 'asc';
      }
    },
    getSortIcon(field) {
      if (this.sort.field !== field) return 'fas fa-sort';
      return this.sort.direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
    },
    getTrendIcon(direction) {
      return direction === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down';
    },
    getDaysClass(days) {
      if (days > 60) return 'critical';
      if (days > 30) return 'warning';
      if (days > 14) return 'caution';
      return 'normal';
    },
    // Navigation methods
    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    goToPage(page) {
      this.currentPage = page;
    },
    // Action methods
    viewAdvanceDetails(advance) {
      this.$router.push(`/advances/${advance.id}`);
    },
    async sendReminder(advance) {
      try {
        await this.$axios.post(`/api/advances/${advance.id}/reminder`);
        this.showToast('Reminder sent successfully', 'success');
      } catch (error) {
        console.error('Error sending reminder:', error);
        this.showToast('Error sending reminder', 'error');
      }
    },
    async markAsSettled(advance) {
      const result = await this.swalConfirm(Swal, 'Mark as Settled', `Mark advance ${advance.id} as settled?`, 'question', 'ບໍ່', 'ຕົກລົງ');
      if (result.isConfirmed) {
        try {
          await this.$axios.put(`/api/advances/${advance.id}/settle`);
          this.showToast('Advance marked as settled', 'success');
          await this.fetchAdvances();
          this.calculateMetrics();
          this.calculateStatistics();
        } catch (error) {
          console.error('Error settling advance:', error);
          this.showToast('Error settling advance', 'error');
        }
      }
    },
    exportReport() {
      const csvData = this.convertReportToCSV();
      this.downloadCSV(csvData, `settlement-report-${new Date().toISOString().split('T')[0]}.csv`);
    },
    printReport() {
      window.print();
    },
    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LAK'
      }).format(amount || 0);
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatDateForInput(date) {
      return date.toISOString().split('T')[0];
    },
    convertReportToCSV() {
      const headers = ['Advance ID', 'Employee', 'Request Date', 'Amount', 'Outstanding', 'Status', 'Days Pending'];
      const csvContent = [headers.join(','), ...this.filteredAdvances.map(advance => [advance.id, advance.employeeName, advance.requestDate, advance.amount, advance.outstanding, advance.status, advance.daysPending].join(','))].join('\n');
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
      // Implementation depends on your toast library
      console.log(`${type}: ${message}`);
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/moneyAdvanceDashboard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_moneyAdvanceDashboardvue_type_script_lang_js_ = (moneyAdvanceDashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/moneyAdvanceDashboard/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(859)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_moneyAdvanceDashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23bbd891",
  "be73d7b8"
  
)

/* harmony default export */ var moneyAdvanceDashboard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(860);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1352eb66", content, true, context)
};

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23bbd891_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(688);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23bbd891_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23bbd891_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23bbd891_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23bbd891_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-report-container[data-v-23bbd891]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-23bbd891]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-23bbd891]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-23bbd891]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-23bbd891]{display:flex;gap:12px}.filter-section[data-v-23bbd891]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-23bbd891]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-23bbd891]{display:flex;flex-direction:column;gap:8px}.filter-group label[data-v-23bbd891]{color:#555;font-size:14px;font-weight:500}.filter-actions[data-v-23bbd891]{align-self:flex-end;display:flex;gap:8px}.metrics-dashboard[data-v-23bbd891]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:30px}.metric-card[data-v-23bbd891]{align-items:center;background:#fff;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.07);display:flex;overflow:hidden;padding:24px;position:relative;transition:transform .2s,box-shadow .2s}.metric-card[data-v-23bbd891]:hover{box-shadow:0 8px 15px rgba(0,0,0,.1);transform:translateY(-2px)}.metric-card[data-v-23bbd891]:before{background:linear-gradient(90deg,#007bff,#0056b3);content:\"\";height:4px;left:0;position:absolute;right:0;top:0}.metric-card.outstanding[data-v-23bbd891]:before{background:linear-gradient(90deg,#dc3545,#c82333)}.metric-card.advances[data-v-23bbd891]:before{background:linear-gradient(90deg,#28a745,#1e7e34)}.metric-card.settled[data-v-23bbd891]:before{background:linear-gradient(90deg,#17a2b8,#138496)}.metric-card.efficiency[data-v-23bbd891]:before{background:linear-gradient(90deg,#ffc107,#e0a800)}.metric-icon[data-v-23bbd891]{align-items:center;background:linear-gradient(135deg,#f8f9fa,#e9ecef);border-radius:50%;color:#495057;display:flex;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.metric-content[data-v-23bbd891]{flex:1}.metric-content h3[data-v-23bbd891]{color:#333;font-size:28px;font-weight:700;margin:0 0 4px}.metric-content p[data-v-23bbd891]{color:#666;font-size:16px;font-weight:500;margin:0 0 4px}.metric-subtitle[data-v-23bbd891]{color:#999;font-size:12px}.metric-trend[data-v-23bbd891]{align-items:center;border-radius:6px;display:flex;flex-direction:column;font-size:12px;font-weight:600;padding:8px}.metric-trend.up[data-v-23bbd891]{background:#d4edda;color:#155724}.metric-trend.down[data-v-23bbd891]{background:#f8d7da;color:#721c24}.metric-trend i[data-v-23bbd891]{margin-bottom:2px}.charts-section[data-v-23bbd891]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:2fr 1fr;margin-bottom:30px}.chart-container[data-v-23bbd891]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);padding:20px}.chart-header[data-v-23bbd891]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;margin-bottom:20px;padding-bottom:15px}.chart-header h3[data-v-23bbd891]{color:#333;font-size:18px;margin:0}.chart-controls[data-v-23bbd891]{display:flex;gap:8px}.chart-content[data-v-23bbd891]{height:300px}.chart-placeholder[data-v-23bbd891]{align-items:center;background:#f8f9fa;border:2px dashed #dee2e6;border-radius:6px;color:#666;display:flex;flex-direction:column;height:100%;justify-content:center}.chart-placeholder i[data-v-23bbd891]{font-size:48px;margin-bottom:15px;opacity:.5}.trend-summary[data-v-23bbd891]{display:flex;flex-direction:column;gap:20px;height:100%;justify-content:center}.trend-item[data-v-23bbd891]{align-items:center;background:#f8f9fa;border-left:4px solid #007bff;border-radius:6px;display:flex;justify-content:space-between;padding:15px 20px}.trend-label[data-v-23bbd891]{color:#666;font-weight:500}.trend-value[data-v-23bbd891]{color:#333;font-size:16px;font-weight:600}.trend-value.outstanding[data-v-23bbd891]{color:#dc3545}.trend-value.settled[data-v-23bbd891]{color:#28a745}.detailed-listing[data-v-23bbd891]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:30px}.listing-header[data-v-23bbd891]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.listing-header h3[data-v-23bbd891]{color:#333;margin:0}.listing-controls[data-v-23bbd891]{gap:15px}.listing-controls[data-v-23bbd891],.search-box[data-v-23bbd891]{align-items:center;display:flex}.search-box[data-v-23bbd891]{position:relative}.search-box i[data-v-23bbd891]{color:#666;left:12px;position:absolute;z-index:1}.search-box input[data-v-23bbd891]{min-width:250px;padding-left:35px}.alert-section[data-v-23bbd891]{margin:20px}.alert[data-v-23bbd891]{align-items:center;border-radius:6px;display:flex;gap:10px;padding:15px 20px}.alert-warning[data-v-23bbd891]{background:#fff3cd;border:1px solid #ffeaa7;color:#856404}.alert i[data-v-23bbd891]{font-size:18px}.overdue-details[data-v-23bbd891]{background:#f8f9fa;border-radius:6px;margin-top:15px;padding:15px}.overdue-item[data-v-23bbd891]{align-items:center;border-bottom:1px solid #dee2e6;display:flex;justify-content:space-between;padding:10px 0}.overdue-item[data-v-23bbd891]:last-child{border-bottom:none}.employee-name[data-v-23bbd891]{color:#333;font-weight:500}.advance-amount[data-v-23bbd891]{color:#dc3545;font-weight:600}.days-overdue[data-v-23bbd891]{color:#856404;font-size:14px}.table-container[data-v-23bbd891]{overflow-x:auto}.advances-table[data-v-23bbd891]{border-collapse:collapse;width:100%}.advances-table td[data-v-23bbd891],.advances-table th[data-v-23bbd891]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.advances-table th[data-v-23bbd891]{background-color:#f8f9fa;color:#495057;font-weight:600;position:sticky;top:0;z-index:10}.advances-table th.sortable[data-v-23bbd891]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.advances-table th.sortable[data-v-23bbd891]:hover{background-color:#e9ecef}.advances-table th i[data-v-23bbd891]{margin-left:8px;opacity:.5}.employee-info[data-v-23bbd891]{display:flex;flex-direction:column}.employee-info strong[data-v-23bbd891]{color:#333;font-size:14px}.employee-info small[data-v-23bbd891]{color:#666;font-size:12px}.amount-cell[data-v-23bbd891]{color:#28a745}.amount-cell[data-v-23bbd891],.outstanding-cell[data-v-23bbd891]{font-weight:600}.outstanding-cell.has-outstanding[data-v-23bbd891]{color:#dc3545}.days-cell[data-v-23bbd891]{font-weight:500}.days-cell.normal[data-v-23bbd891]{color:#28a745}.days-cell.caution[data-v-23bbd891]{color:#ffc107}.days-cell.warning[data-v-23bbd891]{color:#fd7e14}.days-cell.critical[data-v-23bbd891]{background:#f8d7da;border-radius:4px;color:#dc3545;padding:4px 8px}.actions-cell[data-v-23bbd891]{display:flex;gap:8px}.status-badge[data-v-23bbd891]{border-radius:20px;font-size:12px;font-weight:500;padding:4px 12px;text-transform:capitalize}.status-badge.pending[data-v-23bbd891]{background-color:#fff3cd;color:#856404}.status-badge.approved[data-v-23bbd891]{background-color:#d1ecf1;color:#0c5460}.status-badge.outstanding[data-v-23bbd891]{background-color:#f8d7da;color:#721c24}.status-badge.settled[data-v-23bbd891]{background-color:#d4edda;color:#155724}.pagination-container[data-v-23bbd891]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-23bbd891]{color:#666;font-size:14px}.pagination-controls[data-v-23bbd891]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-23bbd891]{color:#666;padding:6px 12px}.summary-statistics[data-v-23bbd891]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));margin-bottom:30px}.stat-group[data-v-23bbd891]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);padding:20px}.stat-group h4[data-v-23bbd891]{border-bottom:2px solid #007bff;color:#333;font-size:18px;margin:0 0 20px;padding-bottom:10px}.stat-items[data-v-23bbd891]{display:flex;flex-direction:column;gap:15px}.stat-item[data-v-23bbd891]{align-items:center;border-bottom:1px solid #f1f1f1;display:flex;justify-content:space-between;padding:12px 0}.stat-item[data-v-23bbd891]:last-child{border-bottom:none}.stat-label[data-v-23bbd891]{color:#666;font-weight:500}.stat-value[data-v-23bbd891]{color:#333;font-size:16px;font-weight:600}.btn[data-v-23bbd891]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-23bbd891]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-23bbd891]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-23bbd891]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-23bbd891]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-success[data-v-23bbd891]{background-color:#28a745;border-color:#28a745;color:#fff}.btn-outline-primary[data-v-23bbd891]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-23bbd891]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-23bbd891]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-23bbd891]:hover{background-color:#6c757d;color:#fff}.btn-outline-success[data-v-23bbd891]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-23bbd891]:hover{background-color:#28a745;color:#fff}.btn-outline-warning[data-v-23bbd891]{background-color:transparent;border-color:#ffc107;color:#ffc107}.btn-outline-warning[data-v-23bbd891]:hover,.btn-warning[data-v-23bbd891]{background-color:#ffc107;color:#212529}.btn-warning[data-v-23bbd891]{border-color:#ffc107}.btn-sm[data-v-23bbd891]{font-size:12px;padding:4px 8px}.form-control[data-v-23bbd891]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-23bbd891]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.loading-overlay[data-v-23bbd891]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-23bbd891]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-23bbd891]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:1200px){.charts-section[data-v-23bbd891]{grid-template-columns:1fr}}@media (max-width:768px){.settlement-report-container[data-v-23bbd891]{padding:10px}.header-content[data-v-23bbd891]{align-items:flex-start}.filter-row[data-v-23bbd891],.header-content[data-v-23bbd891]{flex-direction:column;gap:16px}.filter-group[data-v-23bbd891]{width:100%}.metrics-dashboard[data-v-23bbd891]{grid-template-columns:1fr}.listing-header[data-v-23bbd891]{align-items:flex-start;flex-direction:column;gap:16px}.listing-controls[data-v-23bbd891]{flex-direction:column;gap:12px;width:100%}.search-box input[data-v-23bbd891]{min-width:100%}.summary-statistics[data-v-23bbd891]{grid-template-columns:1fr}.actions-cell[data-v-23bbd891]{flex-direction:column;gap:4px}}@media (max-width:480px){.metric-card[data-v-23bbd891]{flex-direction:column;text-align:center}.metric-icon[data-v-23bbd891]{margin-bottom:12px;margin-right:0}.advances-table[data-v-23bbd891]{font-size:12px}.advances-table td[data-v-23bbd891],.advances-table th[data-v-23bbd891]{padding:8px 4px}}@media print{.actions-cell[data-v-23bbd891],.chart-controls[data-v-23bbd891],.filter-section[data-v-23bbd891],.header-actions[data-v-23bbd891],.pagination-container[data-v-23bbd891]{display:none!important}.settlement-report-container[data-v-23bbd891]{background:#fff;padding:0}.detailed-listing[data-v-23bbd891],.page-header[data-v-23bbd891],.summary-statistics[data-v-23bbd891]{box-shadow:none;margin-bottom:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map