exports.ids = [136,18,19];
exports.modules = {

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/benefit/index.vue?vue&type=template&id=13b76f54&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "benefit-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-13b76f54><div class=\"header-content\" data-v-13b76f54><h1 class=\"page-title\" data-v-13b76f54>ລະບົບຈັດການສະຫວັດດີການ</h1> <div class=\"header-actions\" data-v-13b76f54><button class=\"btn btn-primary\" data-v-13b76f54><i class=\"fas fa-plus\" data-v-13b76f54></i>\n          ເພີ່ມສະຫວັດດີການໃໝ່\n        </button> <button class=\"btn btn-secondary\" data-v-13b76f54><i class=\"fas fa-download\" data-v-13b76f54></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-13b76f54><label data-v-13b76f54>ຄົ້ນຫາ:</label> <input type=\"text\" placeholder=\"ຊື່ສະຫວັດດີການ, ຄຳອະທິບາຍ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"form-control\" data-v-13b76f54></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<label data-v-13b76f54>ປະເພດ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.type,
      expression: "filters.type"
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
        _vm.$set(_vm.filters, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "salary"
    }
  }, [_vm._v("ເງິນເດືອນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "allowance"
    }
  }, [_vm._v("ເງິນອຸດໜູນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insurance"
    }
  }, [_vm._v("ປະກັນໄພ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "accommodation"
    }
  }, [_vm._v("ທີ່ພັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "transportation"
    }
  }, [_vm._v("ການເດີນທາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "other"
    }
  }, [_vm._v("ອື່ນໆ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<label data-v-13b76f54>ສະຖານະ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.isActive,
      expression: "filters.isActive"
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
        _vm.$set(_vm.filters, "isActive", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "true"
    }
  }, [_vm._v("ເປີດໃຊ້ງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "false"
    }
  }, [_vm._v("ປິດໃຊ້ງານ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<label data-v-13b76f54>ສະກຸນເງິນ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.currency,
      expression: "filters.currency"
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
        _vm.$set(_vm.filters, "currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LAK"
    }
  }, [_vm._v("ກີບ (LAK)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "THB"
    }
  }, [_vm._v("ບາດ (THB)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "USD"
    }
  }, [_vm._v("ໂດລາ (USD)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KRW"
    }
  }, [_vm._v("ວອນ (KRW)")])])], 2), _vm._ssrNode(" <div class=\"filter-actions\" data-v-13b76f54><button class=\"btn btn-outline-primary\" data-v-13b76f54><i class=\"fas fa-search\" data-v-13b76f54></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-13b76f54><i class=\"fas fa-undo\" data-v-13b76f54></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-13b76f54><div class=\"summary-card total-benefits\" data-v-13b76f54><div class=\"card-icon total\" data-v-13b76f54><i class=\"fas fa-gift\" data-v-13b76f54></i></div> <div class=\"card-content\" data-v-13b76f54><h3 data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.total.count)) + "</h3> <p data-v-13b76f54>ລວມສະຫວັດດີການທັງໝົດ</p></div></div> <div class=\"summary-card status-active\" data-v-13b76f54><div class=\"card-icon active\" data-v-13b76f54><i class=\"fas fa-check-circle\" data-v-13b76f54></i></div> <div class=\"card-content\" data-v-13b76f54><h3 data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.active.count)) + "</h3> <p data-v-13b76f54>" + _vm._ssrEscape("ເປີດໃຊ້ງານ (" + _vm._s(_vm.summaryStats.active.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-inactive\" data-v-13b76f54><div class=\"card-icon inactive\" data-v-13b76f54><i class=\"fas fa-times-circle\" data-v-13b76f54></i></div> <div class=\"card-content\" data-v-13b76f54><h3 data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.inactive.count)) + "</h3> <p data-v-13b76f54>" + _vm._ssrEscape("ປິດໃຊ້ງານ (" + _vm._s(_vm.summaryStats.inactive.percentage) + "%)") + "</p></div></div> <div class=\"summary-card type-stats\" data-v-13b76f54><div class=\"card-icon types\" data-v-13b76f54><i class=\"fas fa-layer-group\" data-v-13b76f54></i></div> <div class=\"card-content\" data-v-13b76f54><h3 data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.types.count)) + "</h3> <p data-v-13b76f54>ປະເພດສະຫວັດດີການ</p> <small class=\"type-info\" data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.types.top)) + "</small></div></div> <div class=\"summary-card value-stats\" data-v-13b76f54><div class=\"card-icon value\" data-v-13b76f54><i class=\"fas fa-coins\" data-v-13b76f54></i></div> <div class=\"card-content\" data-v-13b76f54><h3 data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.totalValue.amount, _vm.summaryStats.totalValue.currency))) + "</h3> <p data-v-13b76f54>ມູນຄ່າລວມ</p> <small class=\"value-info\" data-v-13b76f54>ອີງຕາມສະກຸນເງິນຕ່າງໆ</small></div></div> <div class=\"summary-card job-stats\" data-v-13b76f54><div class=\"card-icon jobs\" data-v-13b76f54><i class=\"fas fa-briefcase\" data-v-13b76f54></i></div> <div class=\"card-content\" data-v-13b76f54><h3 data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.jobAdvertises.count)) + "</h3> <p data-v-13b76f54>ການປະກາດຫາງານ</p> <small class=\"job-info\" data-v-13b76f54>ທີ່ມີສະຫວັດດີການ</small></div></div></div> "), _vm._ssrNode("<div class=\"table-section\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-13b76f54><h3 data-v-13b76f54>ລາຍການສະຫວັດດີການ</h3> <span class=\"record-count\" data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.filteredBenefits.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-13b76f54>", "</div>", [_vm._ssrNode("<label data-v-13b76f54>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-13b76f54>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-13b76f54><table class=\"data-table\" data-v-13b76f54><thead data-v-13b76f54><tr data-v-13b76f54><th class=\"sortable\" data-v-13b76f54>\n              ID\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('id')) + " data-v-13b76f54></i></th> <th class=\"sortable\" data-v-13b76f54>\n              ຊື່ສະຫວັດດີການ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('name')) + " data-v-13b76f54></i></th> <th class=\"sortable\" data-v-13b76f54>\n              ປະເພດ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('type')) + " data-v-13b76f54></i></th> <th data-v-13b76f54>ຄຳອະທິບາຍ</th> <th class=\"sortable\" data-v-13b76f54>\n              ມູນຄ່າ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('value')) + " data-v-13b76f54></i></th> <th data-v-13b76f54>ການປະກາດຫາງານ</th> <th class=\"sortable\" data-v-13b76f54>\n              ສະຖານະ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('isActive')) + " data-v-13b76f54></i></th> <th class=\"sortable\" data-v-13b76f54>\n              ວັນທີສ້າງ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('createdAt')) + " data-v-13b76f54></i></th> <th data-v-13b76f54>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-13b76f54>" + _vm._ssrList(_vm.paginatedBenefits, function (benefit) {
    return "<tr data-v-13b76f54><td data-v-13b76f54>" + _vm._ssrEscape(_vm._s(benefit.id)) + "</td> <td data-v-13b76f54><div class=\"benefit-name\" data-v-13b76f54><strong data-v-13b76f54>" + _vm._ssrEscape(_vm._s(benefit.name)) + "</strong> " + (benefit.notes ? "<div class=\"benefit-notes\" data-v-13b76f54><i class=\"fas fa-sticky-note\" data-v-13b76f54></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.truncateText(benefit.notes, 30)) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-13b76f54><span" + _vm._ssrClass(null, ['type-badge', benefit.type]) + " data-v-13b76f54><i" + _vm._ssrClass(null, _vm.getTypeIcon(benefit.type)) + " data-v-13b76f54></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatType(benefit.type)) + "\n              ") + "</span></td> <td data-v-13b76f54><div class=\"description-cell\" data-v-13b76f54>" + _vm._ssrEscape("\n                " + _vm._s(_vm.truncateText(benefit.description, 60)) + "\n              ") + "</div></td> <td data-v-13b76f54><div class=\"value-cell\" data-v-13b76f54>" + (benefit.value ? "<div class=\"value-amount\" data-v-13b76f54><strong data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(benefit.value, benefit.currency))) + "</strong></div>" : "<div class=\"no-value\" data-v-13b76f54><i class=\"fas fa-minus\" data-v-13b76f54></i>\n                  ບໍ່ລະບຸ\n                </div>") + "</div></td> <td data-v-13b76f54><div class=\"job-info\" data-v-13b76f54>" + (benefit.jobAdvertise ? "<div class=\"job-link\" data-v-13b76f54><i class=\"fas fa-briefcase\" data-v-13b76f54></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.truncateText(benefit.jobAdvertise.title, 25)) + "\n                ") + "</div>" : "<div class=\"no-job\" data-v-13b76f54><i class=\"fas fa-minus\" data-v-13b76f54></i>\n                  ບໍ່ໄດ້ກຳນົດ\n                </div>") + "</div></td> <td data-v-13b76f54><span" + _vm._ssrClass(null, ['status-badge', benefit.isActive ? 'active' : 'inactive']) + " data-v-13b76f54><i" + _vm._ssrClass(null, benefit.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-13b76f54></i>" + _vm._ssrEscape("\n                " + _vm._s(benefit.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n              ") + "</span></td> <td data-v-13b76f54>" + _vm._ssrEscape(_vm._s(_vm.formatDate(benefit.createdAt))) + "</td> <td class=\"actions-cell\" data-v-13b76f54><button title=\"ເບິ່ງລາຍລະອຽດ\" class=\"btn btn-sm btn-outline-primary\" data-v-13b76f54><i class=\"fas fa-eye\" data-v-13b76f54></i></button> <button title=\"ແກ້ໄຂ\" class=\"btn btn-sm btn-outline-info\" data-v-13b76f54><i class=\"fas fa-edit\" data-v-13b76f54></i></button> " + (benefit.isActive ? "<button title=\"ປິດໃຊ້ງານ\" class=\"btn btn-sm btn-outline-warning\" data-v-13b76f54><i class=\"fas fa-pause\" data-v-13b76f54></i></button>" : "<button title=\"ເປີດໃຊ້ງານ\" class=\"btn btn-sm btn-outline-success\" data-v-13b76f54><i class=\"fas fa-play\" data-v-13b76f54></i></button>") + " <button title=\"ລຶບ\" class=\"btn btn-sm btn-outline-danger\" data-v-13b76f54><i class=\"fas fa-trash\" data-v-13b76f54></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-13b76f54><div class=\"pagination-info\" data-v-13b76f54>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-13b76f54><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-13b76f54>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-13b76f54>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-13b76f54>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-13b76f54>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-13b76f54>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('BenefitDialog', {
    attrs: {
      "visible": _vm.showEditDialog,
      "benefit": _vm.selectedBenefit
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onBenefitSave
    }
  })], 1), _vm._ssrNode(" "), _c('client-only', [_c('BenefitViewDialog', {
    attrs: {
      "visible": _vm.showViewDialog,
      "benefit": _vm.selectedBenefit
    },
    on: {
      "close": _vm.closeViewDialog
    }
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-13b76f54><div class=\"loading-spinner\" data-v-13b76f54><i class=\"fas fa-spinner fa-spin\" data-v-13b76f54></i> <p data-v-13b76f54>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/benefit/index.vue?vue&type=template&id=13b76f54&scoped=true&

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

// EXTERNAL MODULE: ./components/benefit/maintain/index.vue + 4 modules
var maintain = __webpack_require__(772);

// EXTERNAL MODULE: ./components/benefit/view/index.vue + 4 modules
var view = __webpack_require__(773);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/benefit/index.vue?vue&type=script&lang=js&


















/* harmony default export */ var benefitvue_type_script_lang_js_ = ({
  name: 'BenefitSummary',
  components: {
    BenefitDialog: maintain["default"],
    BenefitViewDialog: view["default"]
  },
  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      showStatusDialog: false,
      selectedBenefit: null,
      statusAction: '',
      // 'activate', 'deactivate', 'delete'

      // Data arrays
      benefits: [],
      filteredBenefits: [],
      // Loading states
      loading: false,
      // Filters
      filters: {
        search: '',
        type: '',
        isActive: '',
        currency: ''
      },
      // Sorting
      sort: {
        field: 'createdAt',
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
          count: 0
        },
        active: {
          count: 0,
          percentage: 0
        },
        inactive: {
          count: 0,
          percentage: 0
        },
        types: {
          count: 0,
          top: ''
        },
        totalValue: {
          amount: 0,
          currency: 'LAK'
        },
        jobAdvertises: {
          count: 0
        }
      }
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    paginatedBenefits() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
      const end = start + this.pagination.perPage;
      return this.filteredBenefits.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredBenefits.length / this.pagination.perPage);
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      const end = Math.min(start + this.pagination.perPage - 1, this.filteredBenefits.length);
      return {
        start,
        end,
        total: this.filteredBenefits.length
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
    this.fetchBenefits();
  },
  methods: {
    // Data Loading Methods
    async fetchBenefits() {
      this.loading = true;
      try {
        const params = {
          page: 1,
          limit: 1000,
          // Get all for client-side filtering
          ...this.filters
        };
        const {
          data
        } = await this.$axios.get('/api/benefits', {
          params
        });
        if (data && data.success) {
          this.benefits = data.data || [];
        } else {
          this.benefits = [];
        }
        this.applyFilters();
        this.calculateSummaryStats();
      } catch (error) {
        console.error('Error fetching benefits:', error);
        this.showToast('Error loading benefit data', 'error');
        this.benefits = [];
      } finally {
        this.loading = false;
      }
    },
    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedBenefit = null;
      this.showEditDialog = true;
    },
    async editBenefit(benefit) {
      this.selectedBenefit = benefit;
      this.showEditDialog = true;
    },
    viewBenefit(benefit) {
      this.selectedBenefit = benefit;
      this.showViewDialog = true;
    },
    activateBenefit(benefit) {
      this.selectedBenefit = benefit;
      this.statusAction = 'activate';
      this.showStatusDialog = true;
    },
    deactivateBenefit(benefit) {
      this.selectedBenefit = benefit;
      this.statusAction = 'deactivate';
      this.showStatusDialog = true;
    },
    deleteBenefit(benefit) {
      this.selectedBenefit = benefit;
      this.statusAction = 'delete';
      this.showStatusDialog = true;
    },
    closeEditDialog() {
      this.showEditDialog = false;
      this.selectedBenefit = null;
    },
    closeViewDialog() {
      this.showViewDialog = false;
      this.selectedBenefit = null;
    },
    closeStatusDialog() {
      this.showStatusDialog = false;
      this.selectedBenefit = null;
      this.statusAction = '';
    },
    // Save Handler
    async onBenefitSave(benefitData) {
      try {
        this.loading = true;
        let response;
        if (this.selectedBenefit && this.selectedBenefit.id) {
          response = await this.$axios.put(`/api/benefits/${this.selectedBenefit.id}`, benefitData);
        } else {
          response = await this.$axios.post('/api/benefits', benefitData);
        }
        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success');
          this.closeEditDialog();
          await this.fetchBenefits();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Save failed');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving benefit:', error);
        const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ';
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    // Status Update Handler
    async onStatusUpdate(updateData) {
      try {
        this.loading = true;
        let response;
        if (this.statusAction === 'delete') {
          response = await this.$axios.delete(`/api/benefits/${this.selectedBenefit.id}`);
        } else {
          response = await this.$axios.patch(`/api/benefits/${this.selectedBenefit.id}/status`, updateData);
        }
        if (response.data && response.data.success) {
          this.showToast('ອັບເດດສຳເລັດແລ້ວ', 'success');
          this.closeStatusDialog();
          await this.fetchBenefits();
        } else {
          var _response$data2;
          throw new Error(((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Update failed');
        }
      } catch (error) {
        var _error$response2, _error$response2$data;
        console.error('Error updating benefit:', error);
        const errorMessage = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || error.message || 'ອັບເດດບໍ່ສຳເລັດ';
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.benefits];

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase();
        filtered = filtered.filter(benefit => benefit.name.toLowerCase().includes(search) || benefit.description && benefit.description.toLowerCase().includes(search) || benefit.notes && benefit.notes.toLowerCase().includes(search));
      }

      // Type filter
      if (this.filters.type) {
        filtered = filtered.filter(benefit => benefit.type === this.filters.type);
      }

      // Status filter
      if (this.filters.isActive !== '') {
        const isActive = this.filters.isActive === 'true';
        filtered = filtered.filter(benefit => benefit.isActive === isActive);
      }

      // Currency filter
      if (this.filters.currency) {
        filtered = filtered.filter(benefit => benefit.currency === this.filters.currency);
      }
      this.filteredBenefits = filtered;
      this.sortData();
      this.pagination.currentPage = 1;
      this.calculateSummaryStats();
    },
    resetFilters() {
      this.filters = {
        search: '',
        type: '',
        isActive: '',
        currency: ''
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
      this.filteredBenefits.sort((a, b) => {
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
      const total = this.filteredBenefits.length;
      const active = this.filteredBenefits.filter(b => b.isActive).length;
      const inactive = this.filteredBenefits.filter(b => !b.isActive).length;

      // Count types
      const types = [...new Set(this.filteredBenefits.map(b => b.type))];
      const typeCount = {};
      this.filteredBenefits.forEach(b => {
        typeCount[b.type] = (typeCount[b.type] || 0) + 1;
      });
      const topType = Object.keys(typeCount).reduce((a, b) => typeCount[a] > typeCount[b] ? a : b, '');

      // Calculate total value (grouped by currency)
      const totalValue = this.filteredBenefits.filter(b => b.value).reduce((sum, b) => sum + parseFloat(b.value || 0), 0);

      // Count unique job advertisements
      const jobAdvertises = [...new Set(this.filteredBenefits.filter(b => b.jobAdvertiseId).map(b => b.jobAdvertiseId))];
      this.summaryStats = {
        total: {
          count: total
        },
        active: {
          count: active,
          percentage: total > 0 ? Math.round(active / total * 100) : 0
        },
        inactive: {
          count: inactive,
          percentage: total > 0 ? Math.round(inactive / total * 100) : 0
        },
        types: {
          count: types.length,
          top: topType ? `${this.formatType(topType)} (${typeCount[topType]})` : ''
        },
        totalValue: {
          amount: totalValue,
          currency: 'LAK'
        },
        jobAdvertises: {
          count: jobAdvertises.length
        }
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
    // Export
    exportData() {
      const csvData = this.convertToCSV(this.filteredBenefits);
      this.downloadCSV(csvData, 'benefits-summary.csv');
    },
    convertToCSV(data) {
      const headers = ['ID', 'Name', 'Type', 'Description', 'Value', 'Currency', 'Status', 'Job Advertisement', 'Notes', 'Created Date'];
      const csvContent = [headers.join(','), ...data.map(row => [row.id, `"${row.name}"`, row.type, `"${(row.description || '').replace(/"/g, '""')}"`, row.value || '', row.currency || '', row.isActive ? 'Active' : 'Inactive', row.jobAdvertise ? `"${row.jobAdvertise.title}"` : '', `"${(row.notes || '').replace(/"/g, '""')}"`, this.formatDate(row.createdAt)].join(','))].join('\n');
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
    // Utility methods
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນອຸດໜູນ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ'
      };
      return typeLabels[type] || type;
    },
    getTypeIcon(type) {
      const typeIcons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-hand-holding-usd',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-ellipsis-h'
      };
      return typeIcons[type] || 'fas fa-gift';
    },
    formatCurrency(value, currency = 'LAK') {
      if (!value) return '-';
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
      try {
        return formatter.format(value);
      } catch (e) {
        return `${Number(value).toLocaleString()} ${currency}`;
      }
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        this.$toast[type](message);
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`);
        } else if (type === 'success') {
          console.log(`✅ ${message}`);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/benefit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_benefitvue_type_script_lang_js_ = (benefitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/benefit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(825)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_benefitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13b76f54",
  "7a4bb9a9"
  
)

/* harmony default export */ var benefit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("70c4c236", content, true, context)
};

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(582);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("443288a6", content, true, context)
};

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-207cf086]{align-items:center;animation:fadeIn-207cf086 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-207cf086{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-207cf086]{animation:slideIn-207cf086 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow:hidden;width:95%}@keyframes slideIn-207cf086{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-207cf086]{align-items:center;background:linear-gradient(135deg,#8b5cf6,#a855f7);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-207cf086]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-207cf086]{font-size:20px;opacity:.9}.modal-title[data-v-207cf086]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-207cf086]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-207cf086]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-207cf086]{max-height:60vh;overflow-y:auto;padding:24px}.form-grid[data-v-207cf086]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-207cf086]{margin-bottom:0}.form-group.full-width[data-v-207cf086]{grid-column:1/-1}.section-header[data-v-207cf086]{border-bottom:2px solid #e9ecef;margin:24px 0 16px;padding-bottom:12px}.section-header h4[data-v-207cf086]{align-items:center;color:#495057;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header i[data-v-207cf086]{color:#8b5cf6}.form-label[data-v-207cf086]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-207cf086]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-207cf086]{color:#6b7280;font-size:12px}.form-control[data-v-207cf086]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-207cf086]:focus{background:#fff;border-color:#8b5cf6;box-shadow:0 0 0 3px rgba(139,92,246,.1);outline:none}.form-control.is-invalid[data-v-207cf086]{border-color:#e74c3c}.invalid-feedback[data-v-207cf086]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.custom-select-wrapper[data-v-207cf086]{position:relative}.custom-select[data-v-207cf086]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-207cf086]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.checkbox-group[data-v-207cf086]{margin-top:8px}.checkbox-option[data-v-207cf086]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option input[type=checkbox][data-v-207cf086]{height:18px;margin:0;width:18px}.checkbox-label[data-v-207cf086]{font-weight:500}.field-hint[data-v-207cf086]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.error[data-v-207cf086]{color:#e74c3c}.field-hint.warning[data-v-207cf086]{color:#f39c12}.field-hint.info[data-v-207cf086]{color:#3b82f6}.field-hint.success[data-v-207cf086]{color:#28a745}.text-counter[data-v-207cf086]{color:#9ca3af;font-size:11px;margin-left:auto}.benefit-preview[data-v-207cf086]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-top:16px;padding:20px}.benefit-preview h5[data-v-207cf086]{align-items:center;color:#1e293b;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.benefit-preview h5 i[data-v-207cf086]{color:#3b82f6}.preview-card[data-v-207cf086]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);padding:16px}.preview-header[data-v-207cf086]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:12px}.preview-name[data-v-207cf086]{align-items:center;color:#374151;display:flex;font-size:16px;gap:8px}.preview-name strong[data-v-207cf086]{color:#111827}.preview-content[data-v-207cf086]{display:flex;flex-direction:column;gap:8px}.preview-description[data-v-207cf086],.preview-job[data-v-207cf086],.preview-type[data-v-207cf086],.preview-value[data-v-207cf086]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:8px}.preview-value .value-amount[data-v-207cf086]{color:#059669;font-weight:600}.type-badge[data-v-207cf086]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:4px 12px}.type-badge.salary[data-v-207cf086]{background-color:#dcfce7;color:#16a34a}.type-badge.allowance[data-v-207cf086]{background-color:#dbeafe;color:#2563eb}.type-badge.insurance[data-v-207cf086]{background-color:#f3e8ff;color:#9333ea}.type-badge.accommodation[data-v-207cf086]{background-color:#fef3c7;color:#d97706}.type-badge.transportation[data-v-207cf086]{background-color:#e0f2fe;color:#0891b2}.type-badge.other[data-v-207cf086]{background-color:#f1f5f9;color:#64748b}.status-badge[data-v-207cf086]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:4px 12px}.status-badge.active[data-v-207cf086]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-207cf086]{background-color:#fee2e2;color:#dc2626}.form-errors[data-v-207cf086]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-207cf086]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-207cf086]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-207cf086]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-207cf086]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-207cf086]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-207cf086]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-207cf086]{background:linear-gradient(135deg,#8b5cf6,#a855f7);color:#fff}.btn-secondary[data-v-207cf086]{background:#6c757d;color:#fff}.btn[data-v-207cf086]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-207cf086]{animation:spin-207cf086 1s linear infinite}@keyframes spin-207cf086{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.enhanced-dialog[data-v-207cf086]{margin:10px;width:98%}.form-grid[data-v-207cf086]{grid-template-columns:1fr}.preview-header[data-v-207cf086]{align-items:flex-start;flex-direction:column;gap:12px}.modal-body[data-v-207cf086],.modal-header[data-v-207cf086]{padding:16px}.enhanced-footer[data-v-207cf086]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-207cf086]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(500);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-24889058]{align-items:center;animation:fadeIn-24889058 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-24889058{0%{opacity:0}to{opacity:1}}.view-dialog[data-v-24889058]{animation:slideIn-24889058 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow:hidden;width:95%}@keyframes slideIn-24889058{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-24889058]{align-items:center;background:linear-gradient(135deg,#8b5cf6,#a855f7);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-24889058]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-24889058]{font-size:20px;opacity:.9}.modal-title[data-v-24889058]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-24889058]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-24889058]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-24889058]{max-height:60vh;overflow-y:auto;padding:24px}.status-header[data-v-24889058]{align-items:center;background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;display:flex;justify-content:space-between;margin-bottom:24px;padding:16px 20px}.status-info[data-v-24889058]{flex:1}.benefit-id[data-v-24889058]{align-items:center;color:#64748b;display:flex;font-weight:600;gap:8px}.id-label[data-v-24889058]{font-size:14px}.id-value[data-v-24889058]{background:#fff;border:1px solid #e2e8f0;border-radius:6px;color:#334155;font-size:16px;padding:4px 12px}.status-badge[data-v-24889058]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:6px 16px}.status-badge.large[data-v-24889058]{font-size:14px;padding:8px 20px}.status-badge.small[data-v-24889058]{font-size:11px;padding:3px 8px}.status-badge.inactive[data-v-24889058]{background-color:#fee2e2;color:#dc2626}.info-section[data-v-24889058]{margin-bottom:32px}.section-header[data-v-24889058]{border-bottom:2px solid #e9ecef;margin-bottom:20px;padding-bottom:12px}.section-header h4[data-v-24889058]{align-items:center;color:#374151;display:flex;font-size:18px;font-weight:600;gap:10px;margin:0}.section-header i[data-v-24889058]{color:#8b5cf6;font-size:16px}.info-grid[data-v-24889058]{grid-gap:24px;display:grid;gap:24px;grid-template-columns:1fr 1fr}.info-item[data-v-24889058]{margin-bottom:0}.info-item.full-width[data-v-24889058]{grid-column:1/-1}.info-label[data-v-24889058]{align-items:center;color:#4b5563;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:10px}.info-label i[data-v-24889058]{color:#9ca3af;font-size:12px;width:14px}.info-value[data-v-24889058]{background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;min-height:20px;padding:12px 16px}.benefit-name[data-v-24889058]{color:#111827;font-size:24px;font-weight:700;line-height:1.2;margin:0}.type-badge[data-v-24889058]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:6px 16px}.type-badge.large[data-v-24889058]{font-size:14px;padding:8px 20px}.type-badge.salary[data-v-24889058]{background-color:#dcfce7;color:#16a34a}.type-badge.allowance[data-v-24889058]{background-color:#dbeafe;color:#2563eb}.type-badge.insurance[data-v-24889058]{background-color:#f3e8ff;color:#9333ea}.type-badge.accommodation[data-v-24889058]{background-color:#fef3c7;color:#d97706}.type-badge.transportation[data-v-24889058]{background-color:#e0f2fe;color:#0891b2}.type-badge.other[data-v-24889058]{background-color:#f1f5f9;color:#64748b}.value-display[data-v-24889058]{text-align:center}.value-amount[data-v-24889058]{color:#059669;display:block;font-size:20px;font-weight:700}.no-value[data-v-24889058]{align-items:center;color:#9ca3af;display:flex;font-style:italic;gap:8px;justify-content:center}.currency-display[data-v-24889058]{color:#374151;display:block;font-weight:600;text-align:center}.description-text[data-v-24889058],.notes-text[data-v-24889058]{color:#374151;line-height:1.6;white-space:pre-wrap;word-break:break-word}.notes-text[data-v-24889058]{background:#fffbeb;border-left:4px solid #f59e0b;border-radius:4px;margin:-12px -16px;padding:12px 16px}.job-info-card[data-v-24889058]{background:#fafafa;border:2px solid #e5e7eb;border-radius:12px;padding:20px}.job-header[data-v-24889058]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:16px}.job-title[data-v-24889058]{align-items:center;color:#374151;display:flex;font-size:16px;gap:8px}.job-title i[data-v-24889058]{color:#3b82f6}.job-details[data-v-24889058]{display:flex;flex-direction:column;gap:12px}.job-description[data-v-24889058],.job-location[data-v-24889058]{align-items:flex-start;color:#6b7280;display:flex;font-size:14px;gap:8px;line-height:1.5}.job-description i[data-v-24889058],.job-location i[data-v-24889058]{color:#9ca3af;flex-shrink:0;margin-top:2px}.date-info[data-v-24889058],.user-info[data-v-24889058]{align-items:center;color:#374151;display:flex;gap:8px}.date-info i[data-v-24889058],.user-info i[data-v-24889058]{color:#9ca3af;font-size:12px}.no-user[data-v-24889058]{align-items:center;color:#9ca3af;display:flex;font-style:italic;gap:8px}.benefit-summary[data-v-24889058]{background:linear-gradient(135deg,#f0f9ff,#ecfdf5);border:2px solid #bfdbfe;border-radius:12px;margin-top:24px;padding:20px}.summary-header[data-v-24889058]{align-items:center;color:#1e40af;display:flex;gap:10px;margin-bottom:16px}.summary-header i[data-v-24889058]{font-size:18px}.summary-header h5[data-v-24889058]{font-size:16px;font-weight:600;margin:0}.summary-content[data-v-24889058]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.summary-item[data-v-24889058]{align-items:center;background:hsla(0,0%,100%,.8);border-radius:6px;display:flex;font-size:14px;justify-content:space-between;padding:8px 12px}.summary-label[data-v-24889058]{color:#374151;font-weight:500}.summary-value[data-v-24889058]{color:#111827;font-weight:600}.summary-value.active[data-v-24889058]{color:#059669}.summary-value.inactive[data-v-24889058]{color:#dc2626}.no-data[data-v-24889058]{color:#9ca3af;padding:60px 20px;text-align:center}.no-data i[data-v-24889058]{color:#d1d5db;font-size:48px;margin-bottom:16px}.no-data p[data-v-24889058]{font-size:16px;margin:0}.modal-footer[data-v-24889058]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-24889058]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-24889058]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-24889058]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-24889058]{background:linear-gradient(135deg,#8b5cf6,#a855f7);color:#fff}.btn-secondary[data-v-24889058]{background:#6c757d;color:#fff}.status-badge.active[data-v-24889058]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-24889058]{background-color:#fef3c7;color:#d97706}.status-badge.closed[data-v-24889058]{background-color:#fee2e2;color:#dc2626}@media (max-width:768px){.view-dialog[data-v-24889058]{margin:10px;width:98%}.info-grid[data-v-24889058]{gap:20px;grid-template-columns:1fr}.status-header[data-v-24889058]{gap:16px}.job-header[data-v-24889058],.status-header[data-v-24889058]{align-items:flex-start;flex-direction:column}.job-header[data-v-24889058]{gap:12px}.summary-content[data-v-24889058]{grid-template-columns:1fr}.summary-item[data-v-24889058]{align-items:flex-start;flex-direction:column;gap:4px}.modal-body[data-v-24889058],.modal-header[data-v-24889058]{padding:16px}.modal-footer[data-v-24889058]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-24889058]{justify-content:center;width:100%}}@media (max-width:576px){.benefit-name[data-v-24889058]{font-size:20px}.value-amount[data-v-24889058]{font-size:18px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 671:
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
  add("106fd9b2", content, true, context)
};

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/benefit/maintain/index.vue?vue&type=template&id=207cf086&scoped=true&
var render = function render() {
  var _vm$formData$descript, _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-207cf086>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-207cf086><div class=\"modal-title-section\" data-v-207cf086><i class=\"fas fa-gift modal-icon\" data-v-207cf086></i> <h5 class=\"modal-title\" data-v-207cf086>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂສະຫວັດດີການ' : 'ເພີ່ມສະຫວັດດີການໃໝ່') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-207cf086><i class=\"fas fa-times\" data-v-207cf086></i></button></div> "), _vm._ssrNode("<form data-v-207cf086>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-207cf086>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-207cf086>", "</div>", [_vm._ssrNode("<div class=\"section-header full-width\" data-v-207cf086><h4 data-v-207cf086><i class=\"fas fa-info-circle\" data-v-207cf086></i>\n              ຂໍ້ມູນພື້ນຖານ\n            </h4></div> <div class=\"form-group full-width\" data-v-207cf086><label class=\"form-label required\" data-v-207cf086><i class=\"fas fa-tag\" data-v-207cf086></i>\n              ຊື່ສະຫວັດດີການ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: ເງິນເດືອນພື້ນຖານ, ເງິນເດີນທາງ, ປະກັນສຸຂະພາບ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.name) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.name
  }) + " data-v-207cf086> " + (_vm.errors.name ? "<div class=\"invalid-feedback\" data-v-207cf086>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.name) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-207cf086>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-207cf086><i class=\"fas fa-layer-group\" data-v-207cf086></i>\n              ປະເພດສະຫວັດດີການ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-207cf086>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.type,
      expression: "formData.type"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.type
    },
    attrs: {
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
        _vm.$set(_vm.formData, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປະເພດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "salary"
    }
  }, [_vm._v("ເງິນເດືອນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "allowance"
    }
  }, [_vm._v("ເງິນອຸດໜູນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insurance"
    }
  }, [_vm._v("ປະກັນໄພ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "accommodation"
    }
  }, [_vm._v("ທີ່ພັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "transportation"
    }
  }, [_vm._v("ການເດີນທາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "other"
    }
  }, [_vm._v("ອື່ນໆ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-207cf086><i class=\"fas fa-chevron-down\" data-v-207cf086></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.type ? "<div class=\"invalid-feedback\" data-v-207cf086>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.type) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-207cf086><i class=\"fas fa-info-circle\" data-v-207cf086></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getTypeDescription(_vm.formData.type)) + "\n            ") + "</div>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-207cf086><label class=\"form-label required\" data-v-207cf086><i class=\"fas fa-toggle-on\" data-v-207cf086></i>\n              ສະຖານະ\n            </label> <div class=\"checkbox-group\" data-v-207cf086><label class=\"checkbox-option\" data-v-207cf086><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.isActive) ? _vm._i(_vm.formData.isActive, null) > -1 : _vm.formData.isActive) + " data-v-207cf086> <span class=\"checkbox-label\" data-v-207cf086>ເປີດໃຊ້ງານ</span></label></div> <div" + _vm._ssrClass("field-hint", _vm.formData.isActive ? 'success' : 'warning') + " data-v-207cf086><i" + _vm._ssrClass(null, _vm.formData.isActive ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle') + " data-v-207cf086></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formData.isActive ? 'ສະຫວັດດີການນີ້ສາມາດໃຊ້ໄດ້' : 'ສະຫວັດດີການນີ້ຖືກປິດໃຊ້ງານ') + "\n            ") + "</div></div> <div class=\"section-header full-width\" data-v-207cf086><h4 data-v-207cf086><i class=\"fas fa-coins\" data-v-207cf086></i>\n              ຂໍ້ມູນການເງິນ\n            </h4></div> <div class=\"form-group\" data-v-207cf086><label class=\"form-label\" data-v-207cf086><i class=\"fas fa-money-bill-wave\" data-v-207cf086></i>\n              ມູນຄ່າ/ຈຳນວນເງິນ\n            </label> <input type=\"number\" step=\"0.01\" min=\"0\" max=\"999999999.99\" placeholder=\"0.00\"" + _vm._ssrAttr("value", _vm.formData.value) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.value
  }) + " data-v-207cf086> " + (_vm.errors.value ? "<div class=\"invalid-feedback\" data-v-207cf086>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.value) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-207cf086><i class=\"fas fa-info-circle\" data-v-207cf086></i>\n              ໃສ່ຈຳນວນເງິນ ຫຼື ບໍ່ໃສ່ກໍໄດ້ຖ້າບໍ່ມີມູນຄ່າທີ່ແນ່ນອນ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-207cf086>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-207cf086><i class=\"fas fa-dollar-sign\" data-v-207cf086></i>\n              ສະກຸນເງິນ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-207cf086>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.currency,
      expression: "formData.currency"
    }],
    staticClass: "form-control custom-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "LAK"
    }
  }, [_vm._v("ກີບ ລາວ (LAK)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "THB"
    }
  }, [_vm._v("ບາດ ໄທ (THB)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "USD"
    }
  }, [_vm._v("ໂດລາ ສະຫະລັດ (USD)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KRW"
    }
  }, [_vm._v("ວອນ ເກົາຫຼີ (KRW)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "JPY"
    }
  }, [_vm._v("ເຢນ ຍີ່ປຸ່ນ (JPY)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MYR"
    }
  }, [_vm._v("ຣິງກິດ ມາເລເຊຍ (MYR)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SGD"
    }
  }, [_vm._v("ໂດລາ ສິງກະໂປ (SGD)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-207cf086><i class=\"fas fa-chevron-down\" data-v-207cf086></i></div>")], 2), _vm._ssrNode(" <div class=\"field-hint success\" data-v-207cf086><i class=\"fas fa-star\" data-v-207cf086></i>\n              ເລືອກສະກຸນເງິນທີ່ກ່ຽວຂ້ອງກັບປະເທດປາຍທາງ\n            </div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group full-width\" data-v-207cf086>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-207cf086><i class=\"fas fa-briefcase\" data-v-207cf086></i>\n              ການປະກາດຫາງານທີ່ກ່ຽວຂ້ອງ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-207cf086>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.jobAdvertiseId,
      expression: "formData.jobAdvertiseId"
    }],
    staticClass: "form-control custom-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "jobAdvertiseId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ບໍ່ກ່ຽວຂ້ອງກັບການປະກາດໃດ")]), _vm._v(" "), _vm._l(_vm.availableJobs, function (job) {
    return _c('option', {
      key: job.id,
      domProps: {
        "value": job.id
      }
    }, [_vm._v("\n                  " + _vm._s(job.title) + " - " + _vm._s(job.country) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-207cf086><i class=\"fas fa-chevron-down\" data-v-207cf086></i></div>")], 2), _vm._ssrNode(" <div class=\"field-hint info\" data-v-207cf086><i class=\"fas fa-info-circle\" data-v-207cf086></i>\n              ເລືອກການປະກາດຫາງານທີ່ສະຫວັດດີການນີ້ຈະຖືກນຳໃຊ້\n            </div>")], 2), _vm._ssrNode(" <div class=\"section-header full-width\" data-v-207cf086><h4 data-v-207cf086><i class=\"fas fa-align-left\" data-v-207cf086></i>\n              ລາຍລະອຽດ\n            </h4></div> <div class=\"form-group full-width\" data-v-207cf086><label class=\"form-label\" data-v-207cf086><i class=\"fas fa-file-text\" data-v-207cf086></i>\n              ຄຳອະທິບາຍສະຫວັດດີການ\n            </label> <textarea rows=\"4\" placeholder=\"ອະທິບາຍລາຍລະອຽດຂອງສະຫວັດດີການນີ້...\" maxlength=\"1000\" class=\"form-control\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.formData.description)) + "</textarea> <div class=\"field-hint\" data-v-207cf086><span class=\"text-counter\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(((_vm$formData$descript = _vm.formData.description) === null || _vm$formData$descript === void 0 ? void 0 : _vm$formData$descript.length) || 0) + "/1000") + "</span></div></div> <div class=\"form-group full-width\" data-v-207cf086><label class=\"form-label\" data-v-207cf086><i class=\"fas fa-sticky-note\" data-v-207cf086></i>\n              ໝາຍເຫດ\n            </label> <textarea rows=\"3\" placeholder=\"ໝາຍເຫດເພີ່ມເຕີມ, ເງື່ອນໄຂພິເສດ...\" maxlength=\"500\" class=\"form-control\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-207cf086><span class=\"text-counter\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> <div class=\"form-group full-width\" data-v-207cf086><div class=\"benefit-preview\" data-v-207cf086><h5 data-v-207cf086><i class=\"fas fa-eye\" data-v-207cf086></i>\n                ຕົວຢ່າງສະຫວັດດີການ\n              </h5> <div class=\"preview-card\" data-v-207cf086><div class=\"preview-header\" data-v-207cf086><div class=\"preview-name\" data-v-207cf086><i" + _vm._ssrClass(null, _vm.getTypeIcon(_vm.formData.type)) + " data-v-207cf086></i> <strong data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.formData.name || 'ຊື່ສະຫວັດດີການ')) + "</strong></div> <div class=\"preview-status\" data-v-207cf086><span" + _vm._ssrClass(null, ['status-badge', _vm.formData.isActive ? 'active' : 'inactive']) + " data-v-207cf086><i" + _vm._ssrClass(null, _vm.formData.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-207cf086></i>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formData.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n                    ") + "</span></div></div> <div class=\"preview-content\" data-v-207cf086><div class=\"preview-type\" data-v-207cf086><span" + _vm._ssrClass(null, ['type-badge', _vm.formData.type]) + " data-v-207cf086><i" + _vm._ssrClass(null, _vm.getTypeIcon(_vm.formData.type)) + " data-v-207cf086></i>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatType(_vm.formData.type) || 'ເລືອກປະເພດ') + "\n                    ") + "</span></div> " + (_vm.formData.value ? "<div class=\"preview-value\" data-v-207cf086><i class=\"fas fa-coins\" data-v-207cf086></i> <span class=\"value-amount\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.formData.value, _vm.formData.currency))) + "</span></div>" : "<!---->") + " " + (_vm.formData.description ? "<div class=\"preview-description\" data-v-207cf086><i class=\"fas fa-file-text\" data-v-207cf086></i> <span data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.truncateText(_vm.formData.description, 100))) + "</span></div>" : "<!---->") + " " + (_vm.selectedJobTitle ? "<div class=\"preview-job\" data-v-207cf086><i class=\"fas fa-briefcase\" data-v-207cf086></i> <span data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.selectedJobTitle)) + "</span></div>" : "<!---->") + "</div></div></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-207cf086><h6 data-v-207cf086><i class=\"fas fa-exclamation-circle\" data-v-207cf086></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-207cf086>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-207cf086>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-207cf086><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-207cf086><i class=\"fas fa-times\" data-v-207cf086></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-207cf086>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-207cf086></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-207cf086></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'Saving...' : _vm.isEditMode ? 'ອັບເດດ' : 'ສ້າງສະຫວັດດີການ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/benefit/maintain/index.vue?vue&type=template&id=207cf086&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/benefit/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'BenefitDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    benefit: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      availableJobs: [],
      // This would be fetched from API
      formData: {
        name: '',
        type: '',
        description: '',
        value: null,
        currency: 'LAK',
        isActive: true,
        notes: '',
        jobAdvertiseId: null
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.benefit && this.benefit.id;
    },
    user() {
      return this.$auth.user || '';
    },
    // Form validation
    isFormValid() {
      return this.formData.name.trim() && this.formData.type && this.formErrors.length === 0;
    },
    selectedJobTitle() {
      if (!this.formData.jobAdvertiseId) return null;
      const job = this.availableJobs.find(j => j.id == this.formData.jobAdvertiseId);
      return job ? `${job.title} - ${job.country}` : null;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm();
        this.fetchAvailableJobs();
      } else {
        this.resetForm();
      }
    },
    benefit: {
      handler(newVal, oldVal) {
        if (this.visible && newVal !== oldVal) {
          this.$nextTick(() => {
            this.initializeForm();
          });
        }
      },
      deep: true
    }
  },
  methods: {
    initializeForm() {
      if (this.benefit && this.benefit.id) {
        // Edit mode
        this.formData = {
          name: this.benefit.name || '',
          type: this.benefit.type || '',
          description: this.benefit.description || '',
          value: this.benefit.value || null,
          currency: this.benefit.currency || 'LAK',
          isActive: this.benefit.isActive !== undefined ? this.benefit.isActive : true,
          notes: this.benefit.notes || '',
          jobAdvertiseId: this.benefit.jobAdvertiseId || null
        };
      } else {
        // Create mode - set defaults
        this.formData = {
          name: '',
          type: '',
          description: '',
          value: null,
          currency: 'LAK',
          isActive: true,
          notes: '',
          jobAdvertiseId: null
        };
      }
      this.errors = {};
      this.formErrors = [];
    },
    resetForm() {
      this.formData = {
        name: '',
        type: '',
        description: '',
        value: null,
        currency: 'LAK',
        isActive: true,
        notes: '',
        jobAdvertiseId: null
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
    },
    async fetchAvailableJobs() {
      try {
        const {
          data
        } = await this.$axios.get('/api/job-advertises', {
          params: {
            status: 'active',
            limit: 100
          }
        });
        if (data && data.success) {
          this.availableJobs = data.data || [];
        }
      } catch (error) {
        console.error('Error fetching job advertisements:', error);
        this.availableJobs = [];
      }
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];

      // Required fields validation
      if (!this.formData.name.trim()) {
        this.errors.name = 'ກະລຸນາໃສ່ຊື່ສະຫວັດດີການ';
        this.formErrors.push('Benefit name is required');
      }
      if (!this.formData.type) {
        this.errors.type = 'ກະລຸນາເລືອກປະເພດສະຫວັດດີການ';
        this.formErrors.push('Benefit type selection is required');
      }

      // Value validation
      if (this.formData.value !== null && this.formData.value !== undefined) {
        if (this.formData.value < 0) {
          this.errors.value = 'ມູນຄ່າຕ້ອງເປັນຈຳນວນບວກ';
          this.formErrors.push('Value must be a positive number');
        }
        if (this.formData.value > 999999999.99) {
          this.errors.value = 'ມູນຄ່າສູງເກີນໄປ';
          this.formErrors.push('Value is too large');
        }
      }

      // Text length validation
      if (this.formData.description && this.formData.description.length > 1000) {
        this.formErrors.push('Description must not exceed 1000 characters');
      }
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters');
      }
      return this.formErrors.length === 0;
    },
    async saveBenefit() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          // Convert empty strings to null for optional fields
          value: this.formData.value || null,
          jobAdvertiseId: this.formData.jobAdvertiseId || null
        };
        console.log('📤 Submitting benefit data:', submitData);

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
    formatType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນອຸດໜູນ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ'
      };
      return typeLabels[type] || type;
    },
    getTypeIcon(type) {
      const typeIcons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-hand-holding-usd',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-ellipsis-h'
      };
      return typeIcons[type] || 'fas fa-gift';
    },
    getTypeDescription(type) {
      const descriptions = {
        salary: 'ເງິນເດືອນປົກກະຕິ ຫຼື ເງິນພື້ນຖານ',
        allowance: 'ເງິນອຸດໜູນພິເສດ ເຊັ່ນ: ເງິນອາຫານ, ເງິນເດີນທາງ',
        insurance: 'ປະກັນສຸຂະພາບ, ປະກັນອຸບັດເຫດ',
        accommodation: 'ທີ່ພັກ, ຫ້ອງພັກ, ຄ່າເຊົ່າ',
        transportation: 'ຄ່າເດີນທາງ, ລົດຮັບສົ່ງ',
        other: 'ສະຫວັດດີການອື່ນໆ ທີ່ບໍ່ຢູ່ໃນປະເພດຂ້າງເທິງ'
      };
      return descriptions[type] || 'ເລືອກປະເພດເພື່ອເບິ່ງຄຳອະທິບາຍ';
    },
    formatCurrency(value, currency = 'LAK') {
      if (!value) return '-';
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
      try {
        return formatter.format(value);
      } catch (e) {
        return `${Number(value).toLocaleString()} ${currency}`;
      }
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  }
});
// CONCATENATED MODULE: ./components/benefit/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var benefit_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/benefit/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(579)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  benefit_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "207cf086",
  "0e5aaab9"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/benefit/view/index.vue?vue&type=template&id=24889058&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog view-dialog\" data-v-24889058><div class=\"modal-header\" data-v-24889058><div class=\"modal-title-section\" data-v-24889058><i class=\"fas fa-gift modal-icon\" data-v-24889058></i> <h5 class=\"modal-title\" data-v-24889058>ລາຍລະອຽດສະຫວັດດີການ</h5></div> <button class=\"close-btn\" data-v-24889058><i class=\"fas fa-times\" data-v-24889058></i></button></div> <div class=\"modal-body\" data-v-24889058>" + (_vm.benefit ? "<div class=\"benefit-details\" data-v-24889058><div class=\"status-header\" data-v-24889058><div class=\"status-info\" data-v-24889058><span" + _vm._ssrClass(null, ['status-badge', 'large', _vm.benefit.isActive ? 'active' : 'inactive']) + " data-v-24889058><i" + _vm._ssrClass(null, _vm.benefit.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-24889058></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.benefit.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n            ") + "</span></div> <div class=\"benefit-id\" data-v-24889058><span class=\"id-label\" data-v-24889058>ID:</span> <span class=\"id-value\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.id)) + "</span></div></div> <div class=\"info-section\" data-v-24889058><div class=\"section-header\" data-v-24889058><h4 data-v-24889058><i class=\"fas fa-info-circle\" data-v-24889058></i>\n              ຂໍ້ມູນພື້ນຖານ\n            </h4></div> <div class=\"info-grid\" data-v-24889058><div class=\"info-item full-width\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-tag\" data-v-24889058></i>\n                ຊື່ສະຫວັດດີການ\n              </label> <div class=\"info-value\" data-v-24889058><h3 class=\"benefit-name\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.name)) + "</h3></div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-layer-group\" data-v-24889058></i>\n                ປະເພດ\n              </label> <div class=\"info-value\" data-v-24889058><span" + _vm._ssrClass(null, ['type-badge', 'large', _vm.benefit.type]) + " data-v-24889058><i" + _vm._ssrClass(null, _vm.getTypeIcon(_vm.benefit.type)) + " data-v-24889058></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatType(_vm.benefit.type)) + "\n                ") + "</span></div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-coins\" data-v-24889058></i>\n                ມູນຄ່າ\n              </label> <div class=\"info-value\" data-v-24889058>" + (_vm.benefit.value ? "<div class=\"value-display\" data-v-24889058><span class=\"value-amount\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.benefit.value, _vm.benefit.currency))) + "</span></div>" : "<div class=\"no-value\" data-v-24889058><i class=\"fas fa-minus\" data-v-24889058></i>\n                  ບໍ່ລະບຸມູນຄ່າ\n                </div>") + "</div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-money-bill-wave\" data-v-24889058></i>\n                ສະກຸນເງິນ\n              </label> <div class=\"info-value\" data-v-24889058><span class=\"currency-display\" data-v-24889058>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrencyName(_vm.benefit.currency)) + "\n                ") + "</span></div></div> " + (_vm.benefit.description ? "<div class=\"info-item full-width\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-align-left\" data-v-24889058></i>\n                ຄຳອະທິບາຍ\n              </label> <div class=\"info-value\" data-v-24889058><div class=\"description-text\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.description)) + "</div></div></div>" : "<!---->") + " " + (_vm.benefit.notes ? "<div class=\"info-item full-width\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-sticky-note\" data-v-24889058></i>\n                ໝາຍເຫດ\n              </label> <div class=\"info-value\" data-v-24889058><div class=\"notes-text\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.notes)) + "</div></div></div>" : "<!---->") + "</div></div> " + (_vm.benefit.jobAdvertise ? "<div class=\"info-section\" data-v-24889058><div class=\"section-header\" data-v-24889058><h4 data-v-24889058><i class=\"fas fa-briefcase\" data-v-24889058></i>\n              ການປະກາດຫາງານທີ່ກ່ຽວຂ້ອງ\n            </h4></div> <div class=\"job-info-card\" data-v-24889058><div class=\"job-header\" data-v-24889058><div class=\"job-title\" data-v-24889058><i class=\"fas fa-briefcase\" data-v-24889058></i> <strong data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.jobAdvertise.title)) + "</strong></div> <div class=\"job-status\" data-v-24889058><span" + _vm._ssrClass(null, ['status-badge', 'small', _vm.benefit.jobAdvertise.status]) + " data-v-24889058>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatJobStatus(_vm.benefit.jobAdvertise.status)) + "\n                ") + "</span></div></div> <div class=\"job-details\" data-v-24889058><div class=\"job-location\" data-v-24889058><i class=\"fas fa-map-marker-alt\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.jobAdvertise.country)) + "</span> " + (_vm.benefit.jobAdvertise.province ? "<span data-v-24889058>" + _vm._ssrEscape("\n                  - " + _vm._s(_vm.benefit.jobAdvertise.province) + "\n                ") + "</span>" : "<!---->") + "</div> " + (_vm.benefit.jobAdvertise.jobDescription ? "<div class=\"job-description\" data-v-24889058><i class=\"fas fa-file-text\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.truncateText(_vm.benefit.jobAdvertise.jobDescription, 150))) + "</span></div>" : "<!---->") + "</div></div></div>" : "<!---->") + " <div class=\"info-section\" data-v-24889058><div class=\"section-header\" data-v-24889058><h4 data-v-24889058><i class=\"fas fa-cog\" data-v-24889058></i>\n              ຂໍ້ມູນລະບົບ\n            </h4></div> <div class=\"info-grid\" data-v-24889058><div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-user-plus\" data-v-24889058></i>\n                ຜູ້ສ້າງ\n              </label> <div class=\"info-value\" data-v-24889058>" + (_vm.benefit.maker ? "<div class=\"user-info\" data-v-24889058><i class=\"fas fa-user\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.maker.firstName) + " " + _vm._s(_vm.benefit.maker.lastName)) + "</span></div>" : "<div class=\"no-user\" data-v-24889058><i class=\"fas fa-minus\" data-v-24889058></i>\n                  ບໍ່ລະບຸ\n                </div>") + "</div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-user-edit\" data-v-24889058></i>\n                ຜູ້ອັບເດດ\n              </label> <div class=\"info-value\" data-v-24889058>" + (_vm.benefit.updateUser ? "<div class=\"user-info\" data-v-24889058><i class=\"fas fa-user\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.updateUser.firstName) + " " + _vm._s(_vm.benefit.updateUser.lastName)) + "</span></div>" : "<div class=\"no-user\" data-v-24889058><i class=\"fas fa-minus\" data-v-24889058></i>\n                  ຍັງບໍ່ມີການອັບເດດ\n                </div>") + "</div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-calendar-plus\" data-v-24889058></i>\n                ວັນທີສ້າງ\n              </label> <div class=\"info-value\" data-v-24889058><div class=\"date-info\" data-v-24889058><i class=\"fas fa-clock\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.benefit.createdAt))) + "</span></div></div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-calendar-edit\" data-v-24889058></i>\n                ວັນທີອັບເດດ\n              </label> <div class=\"info-value\" data-v-24889058><div class=\"date-info\" data-v-24889058><i class=\"fas fa-clock\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.benefit.updateTimestamp))) + "</span></div></div></div></div></div> <div class=\"benefit-summary\" data-v-24889058><div class=\"summary-header\" data-v-24889058><i class=\"fas fa-clipboard-list\" data-v-24889058></i> <h5 data-v-24889058>ສະຫລຸບສະຫວັດດີການ</h5></div> <div class=\"summary-content\" data-v-24889058><div class=\"summary-item\" data-v-24889058><span class=\"summary-label\" data-v-24889058>ປະເພດ:</span> <span class=\"summary-value\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatType(_vm.benefit.type))) + "</span></div> " + (_vm.benefit.value ? "<div class=\"summary-item\" data-v-24889058><span class=\"summary-label\" data-v-24889058>ມູນຄ່າ:</span> <span class=\"summary-value\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.benefit.value, _vm.benefit.currency))) + "</span></div>" : "<!---->") + " <div class=\"summary-item\" data-v-24889058><span class=\"summary-label\" data-v-24889058>ສະຖານະ:</span> <span" + _vm._ssrClass(null, ['summary-value', _vm.benefit.isActive ? 'active' : 'inactive']) + " data-v-24889058>" + _vm._ssrEscape("\n                " + _vm._s(_vm.benefit.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n              ") + "</span></div> " + (_vm.benefit.jobAdvertise ? "<div class=\"summary-item\" data-v-24889058><span class=\"summary-label\" data-v-24889058>ການປະກາດຫາງານ:</span> <span class=\"summary-value\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.jobAdvertise.title)) + "</span></div>" : "<!---->") + "</div></div></div>" : "<div class=\"no-data\" data-v-24889058><i class=\"fas fa-exclamation-triangle\" data-v-24889058></i> <p data-v-24889058>ບໍ່ພົບຂໍ້ມູນສະຫວັດດີການ</p></div>") + "</div> <div class=\"modal-footer\" data-v-24889058><button class=\"btn btn-secondary\" data-v-24889058><i class=\"fas fa-times\" data-v-24889058></i>\n        ປິດ\n      </button> " + (_vm.benefit ? "<button class=\"btn btn-primary\" data-v-24889058><i class=\"fas fa-edit\" data-v-24889058></i>\n        ແກ້ໄຂ\n      </button>" : "<!---->") + "</div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/benefit/view/index.vue?vue&type=template&id=24889058&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/benefit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'BenefitViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    benefit: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    editBenefit() {
      this.$emit('edit', this.benefit);
      this.closeDialog();
    },
    // Utility methods
    formatType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນອຸດໜູນ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ'
      };
      return typeLabels[type] || type;
    },
    getTypeIcon(type) {
      const typeIcons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-hand-holding-usd',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-ellipsis-h'
      };
      return typeIcons[type] || 'fas fa-gift';
    },
    formatCurrency(value, currency = 'LAK') {
      if (!value) return '-';
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
      try {
        return formatter.format(value);
      } catch (e) {
        return `${Number(value).toLocaleString()} ${currency}`;
      }
    },
    formatCurrencyName(currency) {
      const currencyNames = {
        LAK: 'ກີບ ລາວ (LAK)',
        THB: 'ບາດ ໄທ (THB)',
        USD: 'ໂດລາ ສະຫະລັດ (USD)',
        KRW: 'ວອນ ເກົາຫຼີ (KRW)',
        JPY: 'ເຢນ ຍີ່ປຸ່ນ (JPY)',
        MYR: 'ຣິງກິດ ມາເລເຊຍ (MYR)',
        SGD: 'ໂດລາ ສິງກະໂປ (SGD)'
      };
      return currencyNames[currency] || currency;
    },
    formatJobStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ'
      };
      return statusLabels[status] || status;
    },
    formatDateTime(dateTime) {
      if (!dateTime) return '-';
      return new Date(dateTime).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  }
});
// CONCATENATED MODULE: ./components/benefit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var benefit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/benefit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(581)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  benefit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24889058",
  "5842f8d3"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13b76f54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(671);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13b76f54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13b76f54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13b76f54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13b76f54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".benefit-summary-container[data-v-13b76f54]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-13b76f54]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-13b76f54]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-13b76f54]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-13b76f54]{display:flex;gap:12px}.filter-section[data-v-13b76f54]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-13b76f54]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-13b76f54]{display:flex;flex-direction:column;gap:8px;min-width:150px}.filter-group label[data-v-13b76f54]{color:#555;font-size:14px;font-weight:500}.filter-actions[data-v-13b76f54]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-13b76f54]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-13b76f54]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-13b76f54]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-benefits[data-v-13b76f54]{background:linear-gradient(135deg,#8b5cf6,#a855f7);border:none;color:#fff}.summary-card.total-benefits .card-icon[data-v-13b76f54]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.status-active[data-v-13b76f54]{border-left:4px solid #10b981}.summary-card.status-inactive[data-v-13b76f54]{border-left:4px solid #ef4444}.summary-card.type-stats[data-v-13b76f54]{border-left:4px solid #f59e0b}.summary-card.value-stats[data-v-13b76f54]{border-left:4px solid #3b82f6}.summary-card.job-stats[data-v-13b76f54]{border-left:4px solid #6366f1}.card-icon[data-v-13b76f54]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-13b76f54]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.active[data-v-13b76f54]{background:#d1fae5;color:#10b981}.card-icon.inactive[data-v-13b76f54]{background:#fee2e2;color:#ef4444}.card-icon.types[data-v-13b76f54]{background:#fef3c7;color:#f59e0b}.card-icon.value[data-v-13b76f54]{background:#dbeafe;color:#3b82f6}.card-icon.jobs[data-v-13b76f54]{background:#e0e7ff;color:#6366f1}.card-content[data-v-13b76f54]{flex:1;min-width:0}.card-content h3[data-v-13b76f54]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-13b76f54]{font-size:14px;margin:0}.job-info[data-v-13b76f54],.type-info[data-v-13b76f54],.value-info[data-v-13b76f54]{display:block;font-size:12px;margin-top:4px;opacity:.8}.table-section[data-v-13b76f54]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-13b76f54]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-13b76f54]{color:#333;margin:0}.record-count[data-v-13b76f54]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-13b76f54]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-13b76f54]{overflow-x:auto}.data-table[data-v-13b76f54]{border-collapse:collapse;width:100%}.data-table td[data-v-13b76f54],.data-table th[data-v-13b76f54]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-13b76f54]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-13b76f54]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-13b76f54]:hover{background-color:#e9ecef}.data-table th i[data-v-13b76f54]{margin-left:8px;opacity:.5}.benefit-name strong[data-v-13b76f54]{color:#333;display:block;font-size:14px;margin-bottom:4px}.benefit-notes[data-v-13b76f54]{align-items:center;color:#666;display:flex;font-size:12px;gap:4px}.benefit-notes i[data-v-13b76f54]{color:#fbbf24}.type-badge[data-v-13b76f54]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:4px 12px}.type-badge.salary[data-v-13b76f54]{background-color:#dcfce7;color:#16a34a}.type-badge.allowance[data-v-13b76f54]{background-color:#dbeafe;color:#2563eb}.type-badge.insurance[data-v-13b76f54]{background-color:#f3e8ff;color:#9333ea}.type-badge.accommodation[data-v-13b76f54]{background-color:#fef3c7;color:#d97706}.type-badge.transportation[data-v-13b76f54]{background-color:#e0f2fe;color:#0891b2}.type-badge.other[data-v-13b76f54]{background-color:#f1f5f9;color:#64748b}.description-cell[data-v-13b76f54]{color:#666;font-size:12px;line-height:1.4;max-width:200px}.value-cell[data-v-13b76f54]{text-align:right}.value-amount strong[data-v-13b76f54]{color:#059669;font-size:14px}.no-value[data-v-13b76f54]{color:#9ca3af;justify-content:flex-end}.job-link[data-v-13b76f54],.no-value[data-v-13b76f54]{align-items:center;display:flex;font-size:12px;gap:4px}.job-link[data-v-13b76f54]{color:#3b82f6;cursor:pointer}.job-link[data-v-13b76f54]:hover{-webkit-text-decoration:underline;text-decoration:underline}.no-job[data-v-13b76f54]{color:#9ca3af;display:flex}.no-job[data-v-13b76f54],.status-badge[data-v-13b76f54]{align-items:center;font-size:12px;gap:4px}.status-badge[data-v-13b76f54]{border-radius:12px;display:inline-flex;font-weight:600;padding:4px 12px}.status-badge.active[data-v-13b76f54]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-13b76f54]{background-color:#fee2e2;color:#dc2626}.actions-cell[data-v-13b76f54]{display:flex;flex-wrap:wrap;gap:4px}.pagination-container[data-v-13b76f54]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-13b76f54]{color:#666;font-size:14px}.pagination-controls[data-v-13b76f54]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-13b76f54]{color:#666;padding:6px 12px}.btn[data-v-13b76f54]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-13b76f54]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-13b76f54]{background-color:#8b5cf6;border-color:#8b5cf6;color:#fff}.btn-primary[data-v-13b76f54]:hover:not(:disabled){background-color:#7c3aed;border-color:#7c3aed}.btn-secondary[data-v-13b76f54]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-13b76f54]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-13b76f54]{background-color:transparent;border-color:#8b5cf6;color:#8b5cf6}.btn-outline-primary[data-v-13b76f54]:hover{background-color:#8b5cf6;color:#fff}.btn-outline-secondary[data-v-13b76f54]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-13b76f54]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-13b76f54]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-13b76f54]:hover{background-color:#17a2b8;color:#fff}.btn-outline-success[data-v-13b76f54]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-13b76f54]:hover{background-color:#28a745;color:#fff}.btn-outline-warning[data-v-13b76f54]{background-color:transparent;border-color:#ffc107;color:#ffc107}.btn-outline-warning[data-v-13b76f54]:hover{background-color:#ffc107;color:#212529}.btn-outline-danger[data-v-13b76f54]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-13b76f54]:hover{background-color:#dc3545;color:#fff}.btn-sm[data-v-13b76f54]{font-size:12px;padding:4px 8px}.form-control[data-v-13b76f54]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-13b76f54]:focus{border-color:#8b5cf6;box-shadow:0 0 0 2px rgba(139,92,246,.25);outline:none}.loading-overlay[data-v-13b76f54]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-13b76f54]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-13b76f54]{color:#8b5cf6;font-size:32px;margin-bottom:16px}@media (max-width:768px){.benefit-summary-container[data-v-13b76f54]{padding:10px}.header-content[data-v-13b76f54]{align-items:flex-start}.filter-row[data-v-13b76f54],.header-content[data-v-13b76f54]{flex-direction:column;gap:16px}.filter-group[data-v-13b76f54]{min-width:auto;width:100%}.filter-actions[data-v-13b76f54]{flex-direction:row;width:100%}.summary-cards[data-v-13b76f54]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-13b76f54]{padding:20px}.card-icon[data-v-13b76f54]{height:50px;margin-right:16px;width:50px}.card-content h3[data-v-13b76f54],.card-icon[data-v-13b76f54]{font-size:20px}.pagination-container[data-v-13b76f54],.table-header[data-v-13b76f54]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-13b76f54]{flex-wrap:wrap}.actions-cell[data-v-13b76f54]{flex-direction:column;gap:4px}}@media (max-width:576px){.summary-card[data-v-13b76f54]{flex-direction:column;text-align:center}.card-icon[data-v-13b76f54]{margin:0 auto 16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map