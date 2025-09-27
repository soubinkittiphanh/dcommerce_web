exports.ids = [181,53,54,55];
exports.modules = {

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/jobAdvertise/index.vue?vue&type=template&id=5c6d2dea&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "job-advertise-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-5c6d2dea><div class=\"header-content\" data-v-5c6d2dea><h1 class=\"page-title\" data-v-5c6d2dea>ລະບົບຈັດການການປະກາດຫາງານ</h1> <div class=\"header-actions\" data-v-5c6d2dea><button class=\"btn btn-primary\" data-v-5c6d2dea><i class=\"fas fa-plus\" data-v-5c6d2dea></i>\n          ເພີ່ມການປະກາດໃໝ່\n        </button> <button class=\"btn btn-secondary\" data-v-5c6d2dea><i class=\"fas fa-download\" data-v-5c6d2dea></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-5c6d2dea><label data-v-5c6d2dea>ຄົ້ນຫາ:</label> <input type=\"text\" placeholder=\"ຊື່ວຽກ, ປະເທດ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"form-control\" data-v-5c6d2dea></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<label data-v-5c6d2dea>ປະເທດ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.country,
      expression: "filters.country"
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
        _vm.$set(_vm.filters, "country", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Thailand"
    }
  }, [_vm._v("ປະເທດໄທ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "South Korea"
    }
  }, [_vm._v("ເກົາຫຼີໃຕ້")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Japan"
    }
  }, [_vm._v("ຍີ່ປຸ່ນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Taiwan"
    }
  }, [_vm._v("ໄຕ້ຫວັນ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<label data-v-5c6d2dea>ສະຖານະ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.status,
      expression: "filters.status"
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
        _vm.$set(_vm.filters, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "active"
    }
  }, [_vm._v("ເປີດຮັບສະໝັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "inactive"
    }
  }, [_vm._v("ປິດຊົ່ວຄາວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "closed"
    }
  }, [_vm._v("ປິດແລ້ວ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<label data-v-5c6d2dea>ຕ້ອງການໜັງສືເດີນທາງ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.requiresPassport,
      expression: "filters.requiresPassport"
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
        _vm.$set(_vm.filters, "requiresPassport", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_vm._v("ຕ້ອງການ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "false"
    }
  }, [_vm._v("ບໍ່ຕ້ອງການ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<label data-v-5c6d2dea>ລະດັບພາສາ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.requiresLanguage,
      expression: "filters.requiresLanguage"
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
        _vm.$set(_vm.filters, "requiresLanguage", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "none"
    }
  }, [_vm._v("ບໍ່ຕ້ອງການ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "basic"
    }
  }, [_vm._v("ພື້ນຖານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "intermediate"
    }
  }, [_vm._v("ປານກາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "advanced"
    }
  }, [_vm._v("ສູງ")])])], 2), _vm._ssrNode(" <div class=\"filter-actions\" data-v-5c6d2dea><button class=\"btn btn-outline-primary\" data-v-5c6d2dea><i class=\"fas fa-search\" data-v-5c6d2dea></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-5c6d2dea><i class=\"fas fa-undo\" data-v-5c6d2dea></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-5c6d2dea><div class=\"summary-card total-jobs\" data-v-5c6d2dea><div class=\"card-icon total\" data-v-5c6d2dea><i class=\"fas fa-briefcase\" data-v-5c6d2dea></i></div> <div class=\"card-content\" data-v-5c6d2dea><h3 data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.total.count)) + "</h3> <p data-v-5c6d2dea>ລວມການປະກາດທັງໝົດ</p></div></div> <div class=\"summary-card status-active\" data-v-5c6d2dea><div class=\"card-icon active\" data-v-5c6d2dea><i class=\"fas fa-play-circle\" data-v-5c6d2dea></i></div> <div class=\"card-content\" data-v-5c6d2dea><h3 data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.active.count)) + "</h3> <p data-v-5c6d2dea>" + _vm._ssrEscape("ເປີດຮັບສະໝັກ (" + _vm._s(_vm.summaryStats.active.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-inactive\" data-v-5c6d2dea><div class=\"card-icon inactive\" data-v-5c6d2dea><i class=\"fas fa-pause-circle\" data-v-5c6d2dea></i></div> <div class=\"card-content\" data-v-5c6d2dea><h3 data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.inactive.count)) + "</h3> <p data-v-5c6d2dea>" + _vm._ssrEscape("ປິດຊົ່ວຄາວ (" + _vm._s(_vm.summaryStats.inactive.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-closed\" data-v-5c6d2dea><div class=\"card-icon closed\" data-v-5c6d2dea><i class=\"fas fa-stop-circle\" data-v-5c6d2dea></i></div> <div class=\"card-content\" data-v-5c6d2dea><h3 data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.closed.count)) + "</h3> <p data-v-5c6d2dea>" + _vm._ssrEscape("ປິດແລ້ວ (" + _vm._s(_vm.summaryStats.closed.percentage) + "%)") + "</p></div></div> <div class=\"summary-card country-stats\" data-v-5c6d2dea><div class=\"card-icon country\" data-v-5c6d2dea><i class=\"fas fa-globe-asia\" data-v-5c6d2dea></i></div> <div class=\"card-content\" data-v-5c6d2dea><h3 data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.countries.count)) + "</h3> <p data-v-5c6d2dea>ປະເທດປາຍທາງ</p> <small class=\"country-info\" data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.countries.top)) + "</small></div></div> <div class=\"summary-card benefits-stats\" data-v-5c6d2dea><div class=\"card-icon benefits\" data-v-5c6d2dea><i class=\"fas fa-gift\" data-v-5c6d2dea></i></div> <div class=\"card-content\" data-v-5c6d2dea><h3 data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.withBenefits.count)) + "</h3> <p data-v-5c6d2dea>ມີສະຫວັດດີການ</p> <small class=\"benefits-rate\" data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.withBenefits.percentage) + "% ຂອງທັງໝົດ") + "</small></div></div></div> "), _vm._ssrNode("<div class=\"table-section\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-5c6d2dea><h3 data-v-5c6d2dea>ລາຍການການປະກາດຫາງານ</h3> <span class=\"record-count\" data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.filteredJobAdvertises.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-5c6d2dea>", "</div>", [_vm._ssrNode("<label data-v-5c6d2dea>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-5c6d2dea>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-5c6d2dea><table class=\"data-table\" data-v-5c6d2dea><thead data-v-5c6d2dea><tr data-v-5c6d2dea><th class=\"sortable\" data-v-5c6d2dea>\n              ID\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('id')) + " data-v-5c6d2dea></i></th> <th class=\"sortable\" data-v-5c6d2dea>\n              ຊື່ວຽກ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('title')) + " data-v-5c6d2dea></i></th> <th class=\"sortable\" data-v-5c6d2dea>\n              ປະເທດ/ເມືອງ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('country')) + " data-v-5c6d2dea></i></th> <th data-v-5c6d2dea>ເງື່ອນໄຂວຽກ</th> <th data-v-5c6d2dea>ຄຸນສົມບັດຕ້ອງການ</th> <th class=\"sortable\" data-v-5c6d2dea>\n              ສະຖານະ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('status')) + " data-v-5c6d2dea></i></th> <th data-v-5c6d2dea>ຜູ້ສະໝັກ</th> <th class=\"sortable\" data-v-5c6d2dea>\n              ວັນທີສ້າງ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('createdAt')) + " data-v-5c6d2dea></i></th> <th data-v-5c6d2dea>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-5c6d2dea>" + _vm._ssrList(_vm.paginatedJobAdvertises, function (job) {
    return "<tr data-v-5c6d2dea><td data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(job.id)) + "</td> <td data-v-5c6d2dea><div class=\"job-title\" data-v-5c6d2dea><strong data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(job.title)) + "</strong> <div class=\"job-description\" data-v-5c6d2dea>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.truncateText(job.jobDescription, 50)) + "\n                ") + "</div></div></td> <td data-v-5c6d2dea><div class=\"location-info\" data-v-5c6d2dea><div class=\"country\" data-v-5c6d2dea><i class=\"fas fa-map-marker-alt\" data-v-5c6d2dea></i>" + _vm._ssrEscape("\n                  " + _vm._s(job.country) + "\n                ") + "</div> " + (job.province ? "<div class=\"province\" data-v-5c6d2dea>" + _vm._ssrEscape("\n                  " + _vm._s(job.province) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-5c6d2dea><div class=\"work-conditions\" data-v-5c6d2dea><div class=\"work-hours\" data-v-5c6d2dea><i class=\"fas fa-clock\" data-v-5c6d2dea></i>" + _vm._ssrEscape("\n                  " + _vm._s(job.workingHours || '8 ຊົ່ວໂມງ/ວັນ') + "\n                ") + "</div> <div class=\"rest-days\" data-v-5c6d2dea><i class=\"fas fa-calendar-day\" data-v-5c6d2dea></i>" + _vm._ssrEscape("\n                  " + _vm._s(job.restDays || '1 ວັນ/ອາທິດ') + "\n                ") + "</div></div></td> <td data-v-5c6d2dea><div class=\"requirements\" data-v-5c6d2dea>" + (job.requiresPassport ? "<span title=\"ຕ້ອງມີໜັງສືເດີນທາງ\" class=\"requirement-item passport\" data-v-5c6d2dea><i class=\"fas fa-passport\" data-v-5c6d2dea></i></span>" : "<!---->") + " " + (job.requiresGoodEyesight ? "<span title=\"ຕ້ອງມີສາຍຕາດີ\" class=\"requirement-item eyesight\" data-v-5c6d2dea><i class=\"fas fa-eye\" data-v-5c6d2dea></i></span>" : "<!---->") + " " + (job.requiresLanguage && job.requiresLanguage !== 'none' ? "<span" + _vm._ssrAttr("title", `ຕ້ອງການພາສາ: ${_vm.formatLanguageLevel(job.requiresLanguage)}`) + " class=\"requirement-item language\" data-v-5c6d2dea><i class=\"fas fa-language\" data-v-5c6d2dea></i></span>" : "<!---->") + " " + (!job.allowsTattoos ? "<span title=\"ບໍ່ອະນຸຍາດລາຍສັກ\" class=\"requirement-item no-tattoo\" data-v-5c6d2dea><i class=\"fas fa-ban\" data-v-5c6d2dea></i></span>" : "<!---->") + "</div></td> <td data-v-5c6d2dea><span" + _vm._ssrClass(null, ['status-badge', job.status]) + " data-v-5c6d2dea>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(job.status)) + "\n              ") + "</span></td> <td class=\"applicants-cell\" data-v-5c6d2dea><div class=\"applicant-count\" data-v-5c6d2dea><i class=\"fas fa-users\" data-v-5c6d2dea></i>" + _vm._ssrEscape("\n                " + _vm._s(job.applicants ? job.applicants.length : 0) + "\n                ") + (job.maxApplicants ? "<span class=\"max-count\" data-v-5c6d2dea>" + _vm._ssrEscape("\n                  / " + _vm._s(job.maxApplicants) + "\n                ") + "</span>" : "<!---->") + "</div></td> <td data-v-5c6d2dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate(job.createdAt))) + "</td> <td class=\"actions-cell\" data-v-5c6d2dea><button title=\"ເບິ່ງລາຍລະອຽດ\" class=\"btn btn-sm btn-outline-primary\" data-v-5c6d2dea><i class=\"fas fa-eye\" data-v-5c6d2dea></i></button> <button title=\"ແກ້ໄຂ\" class=\"btn btn-sm btn-outline-info\" data-v-5c6d2dea><i class=\"fas fa-edit\" data-v-5c6d2dea></i></button> " + (job.status === 'active' ? "<button title=\"ຢຸດຊົ່ວຄາວ\" class=\"btn btn-sm btn-outline-warning\" data-v-5c6d2dea><i class=\"fas fa-pause\" data-v-5c6d2dea></i></button>" : "<!---->") + " " + (job.status === 'inactive' ? "<button title=\"ເປີດອີກຄັ້ງ\" class=\"btn btn-sm btn-outline-success\" data-v-5c6d2dea><i class=\"fas fa-play\" data-v-5c6d2dea></i></button>" : "<!---->") + " <button title=\"ປິດ\" class=\"btn btn-sm btn-outline-danger\" data-v-5c6d2dea><i class=\"fas fa-stop\" data-v-5c6d2dea></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-5c6d2dea><div class=\"pagination-info\" data-v-5c6d2dea>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-5c6d2dea><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-5c6d2dea>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-5c6d2dea>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-5c6d2dea>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-5c6d2dea>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-5c6d2dea>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('JobAdvertiseDialog', {
    attrs: {
      "visible": _vm.showEditDialog,
      "jobAdvertise": _vm.selectedJob
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onJobSave
    }
  })], 1), _vm._ssrNode(" "), _c('client-only', [_c('JobViewDialog', {
    attrs: {
      "visible": _vm.showViewDialog,
      "jobAdvertise": _vm.selectedJob
    },
    on: {
      "close": _vm.closeViewDialog
    }
  })], 1), _vm._ssrNode(" "), _c('client-only', [_c('StatusUpdateDialog', {
    attrs: {
      "visible": _vm.showStatusDialog,
      "jobAdvertise": _vm.selectedJob,
      "action": _vm.statusAction
    },
    on: {
      "close": _vm.closeStatusDialog,
      "confirm": _vm.onStatusUpdate
    }
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-5c6d2dea><div class=\"loading-spinner\" data-v-5c6d2dea><i class=\"fas fa-spinner fa-spin\" data-v-5c6d2dea></i> <p data-v-5c6d2dea>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/jobAdvertise/index.vue?vue&type=template&id=5c6d2dea&scoped=true&

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

// EXTERNAL MODULE: ./components/jobAdvertise/maintain/index.vue + 4 modules
var maintain = __webpack_require__(862);

// EXTERNAL MODULE: ./components/jobAdvertise/view/index.vue + 4 modules
var view = __webpack_require__(863);

// EXTERNAL MODULE: ./components/jobAdvertise/statusUpdate/index.vue + 4 modules
var statusUpdate = __webpack_require__(864);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/jobAdvertise/index.vue?vue&type=script&lang=js&



















/* harmony default export */ var jobAdvertisevue_type_script_lang_js_ = ({
  name: 'JobAdvertiseSummary',
  components: {
    JobAdvertiseDialog: maintain["default"],
    JobViewDialog: view["default"],
    StatusUpdateDialog: statusUpdate["default"]
  },
  middleware: 'auths',
  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      showStatusDialog: false,
      selectedJob: null,
      statusAction: '',
      // 'pause', 'activate', 'close'

      // Data arrays
      jobAdvertises: [],
      filteredJobAdvertises: [],
      // Loading states
      loading: false,
      // Filters
      filters: {
        search: '',
        country: '',
        status: '',
        requiresPassport: '',
        requiresLanguage: ''
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
        closed: {
          count: 0,
          percentage: 0
        },
        countries: {
          count: 0,
          top: ''
        },
        withBenefits: {
          count: 0,
          percentage: 0
        }
      }
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    paginatedJobAdvertises() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
      const end = start + this.pagination.perPage;
      return this.filteredJobAdvertises.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredJobAdvertises.length / this.pagination.perPage);
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      const end = Math.min(start + this.pagination.perPage - 1, this.filteredJobAdvertises.length);
      return {
        start,
        end,
        total: this.filteredJobAdvertises.length
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
    this.fetchJobAdvertises();
  },
  methods: {
    // Data Loading Methods
    async fetchJobAdvertises() {
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
        } = await this.$axios.get('/api/job-advertises', {
          params
        });
        if (data && data.success) {
          this.jobAdvertises = data.data || [];
        } else {
          this.jobAdvertises = [];
        }
        this.applyFilters();
        this.calculateSummaryStats();
      } catch (error) {
        console.error('Error fetching job advertisements:', error);
        this.showToast('Error loading job advertisement data', 'error');
        this.jobAdvertises = [];
      } finally {
        this.loading = false;
      }
    },
    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedJob = null;
      this.showEditDialog = true;
    },
    async editJob(job) {
      this.selectedJob = job;
      this.showEditDialog = true;
    },
    viewJob(job) {
      this.selectedJob = job;
      this.showViewDialog = true;
    },
    pauseJob(job) {
      this.selectedJob = job;
      this.statusAction = 'pause';
      this.showStatusDialog = true;
    },
    activateJob(job) {
      this.selectedJob = job;
      this.statusAction = 'activate';
      this.showStatusDialog = true;
    },
    closeJob(job) {
      this.selectedJob = job;
      this.statusAction = 'close';
      this.showStatusDialog = true;
    },
    closeEditDialog() {
      this.showEditDialog = false;
      this.selectedJob = null;
    },
    closeViewDialog() {
      this.showViewDialog = false;
      this.selectedJob = null;
    },
    closeStatusDialog() {
      this.showStatusDialog = false;
      this.selectedJob = null;
      this.statusAction = '';
    },
    // Save Handler
    async onJobSave(jobData) {
      try {
        this.loading = true;
        let response;
        if (this.selectedJob && this.selectedJob.id) {
          response = await this.$axios.put(`/api/job-advertises/${this.selectedJob.id}`, jobData);
        } else {
          response = await this.$axios.post('/api/job-advertises', jobData);
        }
        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success');
          this.closeEditDialog();
          await this.fetchJobAdvertises();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Save failed');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving job advertisement:', error);
        const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ';
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    // Status Update Handler
    async onStatusUpdate(statusData) {
      try {
        this.loading = true;
        const response = await this.$axios.patch(`/api/job-advertises/${this.selectedJob.id}/status`, statusData);
        if (response.data && response.data.success) {
          this.showToast('ອັບເດດສະຖານະສຳເລັດແລ້ວ', 'success');
          this.closeStatusDialog();
          await this.fetchJobAdvertises();
        } else {
          var _response$data2;
          throw new Error(((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Status update failed');
        }
      } catch (error) {
        var _error$response2, _error$response2$data;
        console.error('Error updating status:', error);
        const errorMessage = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || error.message || 'ອັບເດດສະຖານະບໍ່ສຳເລັດ';
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.jobAdvertises];

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase();
        filtered = filtered.filter(job => job.title.toLowerCase().includes(search) || job.country.toLowerCase().includes(search) || job.province && job.province.toLowerCase().includes(search) || job.jobDescription && job.jobDescription.toLowerCase().includes(search));
      }

      // Country filter
      if (this.filters.country) {
        filtered = filtered.filter(job => job.country === this.filters.country);
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(job => job.status === this.filters.status);
      }

      // Passport requirement filter
      if (this.filters.requiresPassport !== '') {
        const requiresPassport = this.filters.requiresPassport === 'true';
        filtered = filtered.filter(job => job.requiresPassport === requiresPassport);
      }

      // Language requirement filter
      if (this.filters.requiresLanguage) {
        filtered = filtered.filter(job => job.requiresLanguage === this.filters.requiresLanguage);
      }
      this.filteredJobAdvertises = filtered;
      this.sortData();
      this.pagination.currentPage = 1;
      this.calculateSummaryStats();
    },
    resetFilters() {
      this.filters = {
        search: '',
        country: '',
        status: '',
        requiresPassport: '',
        requiresLanguage: ''
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
      this.filteredJobAdvertises.sort((a, b) => {
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
      const total = this.filteredJobAdvertises.length;
      const active = this.filteredJobAdvertises.filter(j => j.status === 'active').length;
      const inactive = this.filteredJobAdvertises.filter(j => j.status === 'inactive').length;
      const closed = this.filteredJobAdvertises.filter(j => j.status === 'closed').length;

      // Count unique countries
      const countries = [...new Set(this.filteredJobAdvertises.map(j => j.country))];
      const countryCount = {};
      this.filteredJobAdvertises.forEach(j => {
        countryCount[j.country] = (countryCount[j.country] || 0) + 1;
      });
      const topCountry = Object.keys(countryCount).reduce((a, b) => countryCount[a] > countryCount[b] ? a : b, '');

      // Count jobs with benefits
      const withBenefits = this.filteredJobAdvertises.filter(j => j.benefits && j.benefits.length > 0).length;
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
        closed: {
          count: closed,
          percentage: total > 0 ? Math.round(closed / total * 100) : 0
        },
        countries: {
          count: countries.length,
          top: topCountry ? `${topCountry} (${countryCount[topCountry]})` : ''
        },
        withBenefits: {
          count: withBenefits,
          percentage: total > 0 ? Math.round(withBenefits / total * 100) : 0
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
      const csvData = this.convertToCSV(this.filteredJobAdvertises);
      this.downloadCSV(csvData, 'job-advertises-summary.csv');
    },
    convertToCSV(data) {
      const headers = ['ID', 'Title', 'Country', 'Province', 'Job Description', 'Working Hours', 'Rest Days', 'Requires Passport', 'Requires Good Eyesight', 'Language Requirement', 'Allows Tattoos', 'Status', 'Start Date', 'End Date', 'Max Applicants', 'Created Date'];
      const csvContent = [headers.join(','), ...data.map(row => [row.id, `"${row.title}"`, row.country, row.province || '', `"${(row.jobDescription || '').replace(/"/g, '""')}"`, row.workingHours || '', row.restDays || '', row.requiresPassport ? 'Yes' : 'No', row.requiresGoodEyesight ? 'Yes' : 'No', row.requiresLanguage || '', row.allowsTattoos ? 'Yes' : 'No', row.status, row.startDate || '', row.endDate || '', row.maxApplicants || '', this.formatDate(row.createdAt)].join(','))].join('\n');
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
    formatStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ'
      };
      return statusLabels[status] || status;
    },
    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ຕ້ອງການ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ'
      };
      return levelLabels[level] || level;
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
// CONCATENATED MODULE: ./pages/admin/jobAdvertise/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_jobAdvertisevue_type_script_lang_js_ = (jobAdvertisevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/jobAdvertise/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(926)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_jobAdvertisevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c6d2dea",
  "1b0fc72e"
  
)

/* harmony default export */ var jobAdvertise = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(658);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0ba0925a", content, true, context)
};

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(660);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ff869966", content, true, context)
};

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(662);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1c6bbbfe", content, true, context)
};

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(570);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-89608314]{align-items:center;animation:fadeIn-89608314 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-89608314{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-89608314]{animation:slideIn-89608314 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1000px;overflow:hidden;width:95%}@keyframes slideIn-89608314{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-89608314]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-89608314]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-89608314]{font-size:20px;opacity:.9}.modal-title[data-v-89608314]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-89608314]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-89608314]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-89608314]{max-height:60vh;overflow-y:auto;padding:24px}.form-grid[data-v-89608314]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-89608314]{margin-bottom:0}.form-group.full-width[data-v-89608314]{grid-column:1/-1}.section-header[data-v-89608314]{border-bottom:2px solid #e9ecef;margin:24px 0 16px;padding-bottom:12px}.section-header h4[data-v-89608314]{align-items:center;color:#495057;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header i[data-v-89608314]{color:#667eea}.form-label[data-v-89608314]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-89608314]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-89608314]{color:#6b7280;font-size:12px}.form-control[data-v-89608314]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-89608314]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-89608314]{border-color:#e74c3c}.invalid-feedback[data-v-89608314]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.custom-select-wrapper[data-v-89608314]{position:relative}.custom-select[data-v-89608314]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-89608314]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.checkbox-group[data-v-89608314]{margin-top:8px}.checkbox-option[data-v-89608314]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option input[type=checkbox][data-v-89608314]{margin:0}.checkbox-label[data-v-89608314]{font-weight:500}.field-hint[data-v-89608314]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.error[data-v-89608314]{color:#e74c3c}.field-hint.warning[data-v-89608314]{color:#f39c12}.field-hint.info[data-v-89608314]{color:#3b82f6}.field-hint.success[data-v-89608314]{color:#28a745}.text-counter[data-v-89608314]{color:#9ca3af;font-size:11px;margin-left:auto}.requirements-summary[data-v-89608314]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-top:16px;padding:20px}.requirements-summary h5[data-v-89608314]{align-items:center;color:#1e293b;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.requirements-summary h5 i[data-v-89608314]{color:#3b82f6}.requirements-grid[data-v-89608314]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:16px}.requirement-card[data-v-89608314]{align-items:center;background:hsla(0,0%,100%,.7);border:1px solid #e2e8f0;border-radius:8px;display:flex;gap:12px;padding:12px;transition:all .2s ease}.requirement-card.required[data-v-89608314]{background:rgba(34,197,94,.1);border-color:#22c55e}.requirement-card.allowed[data-v-89608314]{background:rgba(59,130,246,.1);border-color:#3b82f6}.requirement-icon[data-v-89608314]{align-items:center;background:#f1f5f9;border-radius:50%;color:#64748b;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.requirement-card.required .requirement-icon[data-v-89608314]{background:#dcfce7;color:#16a34a}.requirement-card.allowed .requirement-icon[data-v-89608314]{background:#dbeafe;color:#2563eb}.requirement-content[data-v-89608314]{flex:1;min-width:0}.requirement-content h6[data-v-89608314]{color:#374151;font-size:13px;font-weight:600;margin:0 0 4px}.requirement-content p[data-v-89608314]{color:#64748b;font-size:12px;margin:0}.requirement-card.required .requirement-content h6[data-v-89608314],.requirement-card.required .requirement-content p[data-v-89608314]{color:#15803d}.requirement-card.allowed .requirement-content h6[data-v-89608314],.requirement-card.allowed .requirement-content p[data-v-89608314]{color:#1d4ed8}.job-summary[data-v-89608314]{align-items:center;background:hsla(220,9%,46%,.1);border:2px solid #9ca3af;border-radius:8px;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;justify-content:center;padding:12px 16px;text-align:center}.job-summary.active[data-v-89608314]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.job-summary i[data-v-89608314]{font-size:16px}.form-errors[data-v-89608314]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-89608314]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-89608314]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-89608314]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-89608314]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-89608314]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-89608314]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-89608314]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-89608314]{background:#6c757d;color:#fff}.btn[data-v-89608314]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-89608314]{animation:spin-89608314 1s linear infinite}@keyframes spin-89608314{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.text-success[data-v-89608314]{color:#22c55e!important}.text-warning[data-v-89608314]{color:#f59e0b!important}.text-danger[data-v-89608314]{color:#ef4444!important}@media (max-width:768px){.enhanced-dialog[data-v-89608314]{margin:10px;width:98%}.form-grid[data-v-89608314],.requirements-grid[data-v-89608314]{grid-template-columns:1fr}.modal-body[data-v-89608314],.modal-header[data-v-89608314]{padding:16px}.enhanced-footer[data-v-89608314]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-89608314]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(571);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-e698b21c]{align-items:center;animation:fadeIn-e698b21c .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-e698b21c{0%{opacity:0}to{opacity:1}}.view-dialog[data-v-e698b21c]{animation:slideIn-e698b21c .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1200px;overflow:hidden;width:95%}@keyframes slideIn-e698b21c{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-e698b21c]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-e698b21c]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-e698b21c]{font-size:20px;opacity:.9}.modal-title[data-v-e698b21c]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-e698b21c]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-e698b21c]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-e698b21c]{max-height:70vh;overflow-y:auto;padding:24px}.job-header[data-v-e698b21c]{border-bottom:2px solid #e9ecef;margin-bottom:32px;padding-bottom:24px}.job-title-section[data-v-e698b21c]{align-items:flex-start;display:flex;gap:20px;justify-content:space-between;margin-bottom:16px}.job-title[data-v-e698b21c]{color:#1f2937;flex:1;font-size:24px;font-weight:700;margin:0}.status-badge[data-v-e698b21c]{align-items:center;border-radius:20px;display:inline-flex;flex-shrink:0;font-size:12px;font-weight:600;gap:6px;padding:6px 16px;text-transform:uppercase}.status-badge.large[data-v-e698b21c]{font-size:14px;padding:8px 20px}.status-badge.active[data-v-e698b21c]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-e698b21c]{background-color:#fef3c7;color:#d97706}.status-badge.closed[data-v-e698b21c]{background-color:#fee2e2;color:#dc2626}.job-meta[data-v-e698b21c]{display:flex;flex-wrap:wrap;gap:24px}.meta-item[data-v-e698b21c]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:8px}.meta-item i[data-v-e698b21c]{color:#9ca3af}.info-section[data-v-e698b21c]{border-bottom:1px solid #f3f4f6;margin-bottom:32px;padding-bottom:24px}.info-section[data-v-e698b21c]:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}.info-section h4[data-v-e698b21c]{align-items:center;color:#374151;display:flex;font-size:18px;font-weight:600;gap:10px;margin:0 0 16px}.info-section h4 i[data-v-e698b21c]{color:#667eea;font-size:16px}.location-details[data-v-e698b21c]{display:flex;flex-direction:column;gap:12px}.location-primary[data-v-e698b21c]{align-items:center;color:#1f2937;display:flex;font-size:18px;gap:12px}.location-primary i[data-v-e698b21c]{color:#667eea;font-size:16px}.location-secondary[data-v-e698b21c]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:12px;margin-left:28px}.location-secondary i[data-v-e698b21c]{color:#9ca3af;font-size:12px}.description-content[data-v-e698b21c]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;color:#374151;font-size:14px;line-height:1.6;padding:16px}.work-conditions-grid[data-v-e698b21c]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.condition-item[data-v-e698b21c]{align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;display:flex;gap:12px;padding:16px}.condition-icon[data-v-e698b21c]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.condition-content h6[data-v-e698b21c]{color:#6b7280;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase}.condition-content p[data-v-e698b21c]{color:#374151;font-size:14px;font-weight:600;margin:0}.requirements-grid[data-v-e698b21c]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.requirement-card[data-v-e698b21c]{align-items:center;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;display:flex;gap:12px;padding:16px;transition:all .2s ease}.requirement-card.required[data-v-e698b21c]{background:rgba(34,197,94,.05);border-color:#10b981}.requirement-card.allowed[data-v-e698b21c]{background:rgba(59,130,246,.05);border-color:#3b82f6}.requirement-icon[data-v-e698b21c]{align-items:center;background:#f3f4f6;border-radius:50%;color:#6b7280;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.requirement-card.required .requirement-icon[data-v-e698b21c]{background:#dcfce7;color:#16a34a}.requirement-card.allowed .requirement-icon[data-v-e698b21c]{background:#dbeafe;color:#2563eb}.requirement-content[data-v-e698b21c]{flex:1;min-width:0}.requirement-content h6[data-v-e698b21c]{color:#374151;font-size:14px;font-weight:600;margin:0 0 4px}.requirement-content p[data-v-e698b21c]{color:#6b7280;font-size:12px;margin:0}.requirement-status[data-v-e698b21c]{flex-shrink:0;font-size:18px}.text-success[data-v-e698b21c]{color:#10b981}.text-muted[data-v-e698b21c]{color:#9ca3af}.text-info[data-v-e698b21c]{color:#3b82f6}.text-warning[data-v-e698b21c]{color:#f59e0b}.date-range[data-v-e698b21c]{display:flex;flex-direction:column;gap:12px}.date-item[data-v-e698b21c]{align-items:center;background:#f8fafc;border-radius:6px;display:flex;gap:12px;padding:12px}.date-item.duration[data-v-e698b21c]{background:#ede9fe;color:#7c3aed;font-weight:600}.date-item i[data-v-e698b21c]{color:#667eea;width:16px}.date-label[data-v-e698b21c]{color:#374151;font-weight:500;min-width:120px}.date-value[data-v-e698b21c]{color:#1f2937;font-weight:600}.applicants-stats[data-v-e698b21c]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}.stat-card[data-v-e698b21c]{align-items:center;border:1px solid #e5e7eb;border-radius:8px;display:flex;gap:12px;padding:16px}.stat-card.total[data-v-e698b21c]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.stat-card.pending[data-v-e698b21c]{background:#fef3c7;border-color:#f59e0b}.stat-card.approved[data-v-e698b21c]{background:#d1fae5;border-color:#10b981}.stat-card.rejected[data-v-e698b21c]{background:#fee2e2;border-color:#ef4444}.stat-icon[data-v-e698b21c]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.stat-card.total .stat-icon[data-v-e698b21c]{background:hsla(0,0%,100%,.2);color:#fff}.stat-card.pending .stat-icon[data-v-e698b21c]{background:#fbbf24;color:#fff}.stat-card.approved .stat-icon[data-v-e698b21c]{background:#10b981;color:#fff}.stat-card.rejected .stat-icon[data-v-e698b21c]{background:#ef4444;color:#fff}.stat-content h5[data-v-e698b21c]{font-size:20px;font-weight:700;margin:0 0 4px}.stat-content p[data-v-e698b21c]{font-size:12px;margin:0;opacity:.9}.benefits-list[data-v-e698b21c]{display:flex;flex-direction:column;gap:12px}.benefit-item[data-v-e698b21c]{align-items:flex-start;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;display:flex;gap:12px;padding:16px}.benefit-icon[data-v-e698b21c]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.benefit-content[data-v-e698b21c]{flex:1;min-width:0}.benefit-content h6[data-v-e698b21c]{color:#374151;font-size:14px;font-weight:600;margin:0 0 4px}.benefit-content p[data-v-e698b21c]{color:#6b7280;font-size:12px;line-height:1.4;margin:0 0 8px}.benefit-value[data-v-e698b21c]{color:#059669;font-size:14px;font-weight:600}.benefit-type[data-v-e698b21c]{flex-shrink:0}.benefit-badge[data-v-e698b21c]{border-radius:12px;font-size:10px;font-weight:600;padding:4px 8px;text-transform:uppercase}.benefit-badge.salary[data-v-e698b21c]{background:#d1fae5;color:#065f46}.benefit-badge.allowance[data-v-e698b21c]{background:#fef3c7;color:#d97706}.benefit-badge.insurance[data-v-e698b21c]{background:#dbeafe;color:#1d4ed8}.benefit-badge.accommodation[data-v-e698b21c]{background:#ede9fe;color:#7c3aed}.benefit-badge.transportation[data-v-e698b21c]{background:#f3e8ff;color:#a21caf}.benefit-badge.other[data-v-e698b21c]{background:#f1f5f9;color:#475569}.notes-content[data-v-e698b21c]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;color:#374151;font-size:14px;line-height:1.6;padding:16px}.update-history[data-v-e698b21c]{display:flex;flex-direction:column;gap:8px}.update-item[data-v-e698b21c]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:8px}.update-item i[data-v-e698b21c]{color:#9ca3af;width:16px}.modal-footer[data-v-e698b21c]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-e698b21c]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-e698b21c]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-e698b21c]{background:#6c757d;color:#fff}.btn-info[data-v-e698b21c]{background:#17a2b8;color:#fff}.btn[data-v-e698b21c]:hover{box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}@media (max-width:768px){.view-dialog[data-v-e698b21c]{margin:10px;width:98%}.job-title-section[data-v-e698b21c]{align-items:flex-start;flex-direction:column;gap:12px}.job-title[data-v-e698b21c]{font-size:20px}.job-meta[data-v-e698b21c]{flex-direction:column;gap:8px}.applicants-stats[data-v-e698b21c],.requirements-grid[data-v-e698b21c],.work-conditions-grid[data-v-e698b21c]{grid-template-columns:1fr}.date-range[data-v-e698b21c]{gap:8px}.date-item[data-v-e698b21c]{align-items:flex-start;flex-direction:column;gap:8px}.date-label[data-v-e698b21c]{min-width:auto}.modal-body[data-v-e698b21c],.modal-header[data-v-e698b21c]{padding:16px}.modal-footer[data-v-e698b21c]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-e698b21c]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-34b685fa]{align-items:center;animation:fadeIn-34b685fa .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-34b685fa{0%{opacity:0}to{opacity:1}}.status-dialog[data-v-34b685fa]{animation:slideIn-34b685fa .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:600px;overflow:hidden;width:95%}@keyframes slideIn-34b685fa{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-34b685fa]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-header.header-warning[data-v-34b685fa]{background:linear-gradient(135deg,#f59e0b,#d97706)}.modal-header.header-success[data-v-34b685fa]{background:linear-gradient(135deg,#10b981,#059669)}.modal-header.header-danger[data-v-34b685fa]{background:linear-gradient(135deg,#ef4444,#dc2626)}.modal-title-section[data-v-34b685fa]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-34b685fa]{font-size:20px;opacity:.9}.modal-title[data-v-34b685fa]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-34b685fa]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-34b685fa]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-34b685fa]{max-height:60vh;overflow-y:auto;padding:24px}.job-info[data-v-34b685fa]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:24px;padding:16px}.job-title[data-v-34b685fa]{align-items:center;color:#1f2937;display:flex;font-size:16px;gap:8px;margin-bottom:8px}.job-title i[data-v-34b685fa]{color:#667eea}.job-location[data-v-34b685fa]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:8px;margin-bottom:12px}.job-location i[data-v-34b685fa]{color:#9ca3af}.current-status[data-v-34b685fa]{align-items:center;display:flex;font-size:14px;gap:8px}.status-label[data-v-34b685fa]{color:#374151;font-weight:500}.status-badge[data-v-34b685fa]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:4px 12px;text-transform:uppercase}.status-badge.active[data-v-34b685fa]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-34b685fa]{background-color:#fef3c7;color:#d97706}.status-badge.closed[data-v-34b685fa]{background-color:#fee2e2;color:#dc2626}.action-description[data-v-34b685fa]{align-items:flex-start;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:8px;display:flex;gap:16px;margin-bottom:24px;padding:20px}.action-description.description-warning[data-v-34b685fa]{background:#fef3c7;border-color:#fbbf24}.action-description.description-success[data-v-34b685fa]{background:#d1fae5;border-color:#34d399}.action-description.description-danger[data-v-34b685fa]{background:#fee2e2;border-color:#f87171}.action-icon[data-v-34b685fa]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:20px;height:48px;justify-content:center;width:48px}.description-warning .action-icon[data-v-34b685fa]{background:#f59e0b}.description-success .action-icon[data-v-34b685fa]{background:#10b981}.description-danger .action-icon[data-v-34b685fa]{background:#ef4444}.action-content h4[data-v-34b685fa]{color:#1f2937;font-size:16px;font-weight:600;margin:0 0 8px}.action-content p[data-v-34b685fa]{color:#4b5563;font-size:14px;line-height:1.5;margin:0 0 12px}.new-status[data-v-34b685fa]{align-items:center;display:flex;font-size:14px;gap:8px}.action-details[data-v-34b685fa]{background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:24px;padding:20px}.action-details h5[data-v-34b685fa]{align-items:center;color:#374151;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.pause-details h5 i[data-v-34b685fa]{color:#f59e0b}.close-details h5 i[data-v-34b685fa]{color:#ef4444}.reason-options[data-v-34b685fa]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.radio-option[data-v-34b685fa]{align-items:center;border-radius:4px;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px;transition:background-color .2s}.radio-option[data-v-34b685fa]:hover{background:rgba(0,0,0,.02)}.radio-option input[type=radio][data-v-34b685fa]{margin:0}.radio-label[data-v-34b685fa]{font-weight:500}.activation-info[data-v-34b685fa]{display:flex;flex-direction:column;gap:12px}.info-item[data-v-34b685fa]{align-items:center;color:#374151;display:flex;font-size:14px;gap:12px}.info-item i[data-v-34b685fa]{color:#10b981;width:16px}.form-group[data-v-34b685fa]{margin-bottom:20px}.form-label[data-v-34b685fa]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label i[data-v-34b685fa]{color:#6b7280;font-size:12px}.form-control[data-v-34b685fa]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;resize:vertical;transition:all .2s ease;width:100%}.form-control[data-v-34b685fa]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.field-hint[data-v-34b685fa]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.info[data-v-34b685fa]{color:#3b82f6}.field-hint.warning[data-v-34b685fa]{color:#f59e0b}.text-counter[data-v-34b685fa]{color:#9ca3af;font-size:11px;margin-left:auto}.confirmation-section[data-v-34b685fa]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-bottom:24px;padding:16px}.checkbox-group[data-v-34b685fa]{margin-top:8px}.checkbox-option[data-v-34b685fa]{align-items:flex-start;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option.danger[data-v-34b685fa]{color:#dc2626;font-weight:500}.checkbox-option input[type=checkbox][data-v-34b685fa]{margin:2px 0 0}.checkbox-label[data-v-34b685fa]{line-height:1.4}.impact-summary[data-v-34b685fa]{background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:20px;padding:16px}.impact-summary.impact-warning[data-v-34b685fa]{background:#fef3c7;border-color:#fbbf24}.impact-summary.impact-success[data-v-34b685fa]{background:#d1fae5;border-color:#34d399}.impact-summary.impact-danger[data-v-34b685fa]{background:#fee2e2;border-color:#f87171}.impact-summary h6[data-v-34b685fa]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin:0 0 12px}.impact-items[data-v-34b685fa]{display:flex;flex-direction:column;gap:8px}.impact-item[data-v-34b685fa]{align-items:center;color:#4b5563;display:flex;font-size:13px;gap:8px}.impact-item i[data-v-34b685fa]{color:#6b7280;width:14px}.form-errors[data-v-34b685fa]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-bottom:20px;padding:16px}.form-errors h6[data-v-34b685fa]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-34b685fa]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.modal-footer[data-v-34b685fa]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-34b685fa]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-34b685fa]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-34b685fa]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.btn-secondary[data-v-34b685fa]{background:#6c757d;color:#fff}.btn-warning[data-v-34b685fa]{background:#f59e0b;color:#fff}.btn-success[data-v-34b685fa]{background:#10b981;color:#fff}.btn-danger[data-v-34b685fa]{background:#ef4444;color:#fff}.fa-spin[data-v-34b685fa]{animation:spin-34b685fa 1s linear infinite}@keyframes spin-34b685fa{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.status-dialog[data-v-34b685fa]{margin:10px;width:98%}.action-description[data-v-34b685fa]{flex-direction:column;gap:12px;text-align:center}.modal-body[data-v-34b685fa],.modal-header[data-v-34b685fa]{padding:16px}.modal-footer[data-v-34b685fa]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-34b685fa]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(927);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("531a346e", content, true, context)
};

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/maintain/index.vue?vue&type=template&id=89608314&scoped=true&
var render = function render() {
  var _vm$formData$jobDescr, _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-89608314>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-89608314><div class=\"modal-title-section\" data-v-89608314><i class=\"fas fa-briefcase modal-icon\" data-v-89608314></i> <h5 class=\"modal-title\" data-v-89608314>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂການປະກາດຫາງານ' : 'ເພີ່ມການປະກາດຫາງານໃໝ່') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-89608314><i class=\"fas fa-times\" data-v-89608314></i></button></div> "), _vm._ssrNode("<form data-v-89608314>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-89608314>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-89608314>", "</div>", [_vm._ssrNode("<div class=\"section-header full-width\" data-v-89608314><h4 data-v-89608314><i class=\"fas fa-briefcase\" data-v-89608314></i>\n              ຂໍ້ມູນງານ\n            </h4></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label required\" data-v-89608314><i class=\"fas fa-tag\" data-v-89608314></i>\n              ຊື່ວຽກ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: ພະນັກງານໂຮງງານ - ເອເລັກໂທນິກ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.title) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.title
  }) + " data-v-89608314> " + (_vm.errors.title ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.title) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-89608314>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-89608314><i class=\"fas fa-globe\" data-v-89608314></i>\n              ປະເທດ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-89608314>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.country,
      expression: "formData.country"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.country
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
        _vm.$set(_vm.formData, "country", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປະເທດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Thailand"
    }
  }, [_vm._v("ປະເທດໄທ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "South Korea"
    }
  }, [_vm._v("ເກົາຫຼີໃຕ້")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Japan"
    }
  }, [_vm._v("ຍີ່ປຸ່ນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Taiwan"
    }
  }, [_vm._v("ໄຕ້ຫວັນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Malaysia"
    }
  }, [_vm._v("ມາເລເຊຍ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Singapore"
    }
  }, [_vm._v("ສິງກະໂປ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-89608314><i class=\"fas fa-chevron-down\" data-v-89608314></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.country ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.country) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-map-marker-alt\" data-v-89608314></i>\n              ແຂວງ/ເມືອງ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: ສະລະບູລີ, ບາງກອກ\"" + _vm._ssrAttr("value", _vm.formData.province) + " class=\"form-control\" data-v-89608314></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-clock\" data-v-89608314></i>\n              ຊົ່ວໂມງເຮັດວຽກ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: 8 ຊົ່ວໂມງ/ວັນ, 1 ກະ\"" + _vm._ssrAttr("value", _vm.formData.workingHours) + " class=\"form-control\" data-v-89608314> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ລະບຸຊົ່ວໂມງເຮັດວຽກຕໍ່ວັນ ແລະ ຈຳນວນກະ\n            </div></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-calendar-day\" data-v-89608314></i>\n              ວັນພັກ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: 1 ວັນ/ອາທິດ\"" + _vm._ssrAttr("value", _vm.formData.restDays) + " class=\"form-control\" data-v-89608314> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ລະບຸວັນພັກຕໍ່ອາທິດ ຫຼື ຕໍ່ເດືອນ\n            </div></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-users\" data-v-89608314></i>\n              ຈຳນວນຄົນຮັບສະໝັກ\n            </label> <input type=\"number\" min=\"1\" max=\"500\" placeholder=\"ເຊັ່ນ: 100\"" + _vm._ssrAttr("value", _vm.formData.maxApplicants) + " class=\"form-control\" data-v-89608314> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ຈຳນວນຄົນສູງສຸດທີ່ຮັບສະໝັກ\n            </div></div> <div class=\"form-group full-width\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-align-left\" data-v-89608314></i>\n              ລາຍລະອຽດວຽກ\n            </label> <textarea rows=\"4\" placeholder=\"ອະທິບາຍລາຍລະອຽດວຽກ, ສະພາບແວດລ້ອມການເຮັດວຽກ...\" maxlength=\"1000\" class=\"form-control\" data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.jobDescription)) + "</textarea> <div class=\"field-hint\" data-v-89608314><span class=\"text-counter\" data-v-89608314>" + _vm._ssrEscape(_vm._s(((_vm$formData$jobDescr = _vm.formData.jobDescription) === null || _vm$formData$jobDescr === void 0 ? void 0 : _vm$formData$jobDescr.length) || 0) + "/1000") + "</span></div></div> <div class=\"section-header full-width\" data-v-89608314><h4 data-v-89608314><i class=\"fas fa-clipboard-check\" data-v-89608314></i>\n              ຄຸນສົມບັດຜູ້ສະໝັກ\n            </h4></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-passport\" data-v-89608314></i>\n              ໜັງສືເດີນທາງ\n            </label> <div class=\"checkbox-group\" data-v-89608314><label class=\"checkbox-option\" data-v-89608314><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.requiresPassport) ? _vm._i(_vm.formData.requiresPassport, null) > -1 : _vm.formData.requiresPassport) + " data-v-89608314> <span class=\"checkbox-label\" data-v-89608314>ຕ້ອງມີໜັງສືເດີນທາງ</span></label></div> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ຈຳເປັນສຳລັບການເດີນທາງໄປເຮັດວຽກຕ່າງປະເທດ\n            </div></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-eye\" data-v-89608314></i>\n              ສາຍຕາ\n            </label> <div class=\"checkbox-group\" data-v-89608314><label class=\"checkbox-option\" data-v-89608314><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.requiresGoodEyesight) ? _vm._i(_vm.formData.requiresGoodEyesight, null) > -1 : _vm.formData.requiresGoodEyesight) + " data-v-89608314> <span class=\"checkbox-label\" data-v-89608314>ຕ້ອງມີສາຍຕາດີ</span></label></div> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ສຳລັບວຽກທີ່ຕ້ອງການຄວາມລະອຽດ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-89608314>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-89608314><i class=\"fas fa-language\" data-v-89608314></i>\n              ລະດັບພາສາທີ່ຕ້ອງການ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-89608314>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.requiresLanguage,
      expression: "formData.requiresLanguage"
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
        _vm.$set(_vm.formData, "requiresLanguage", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "none"
    }
  }, [_vm._v("ບໍ່ຕ້ອງການ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "basic"
    }
  }, [_vm._v("ພື້ນຖານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "intermediate"
    }
  }, [_vm._v("ປານກາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "advanced"
    }
  }, [_vm._v("ສູງ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-89608314><i class=\"fas fa-chevron-down\" data-v-89608314></i></div>")], 2), _vm._ssrNode(" <div class=\"field-hint success\" data-v-89608314><i class=\"fas fa-star\" data-v-89608314></i>\n              ພາສາທ້ອງຖິ່ນຂອງປະເທດປາຍທາງ\n            </div>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-paint-brush\" data-v-89608314></i>\n              ນະໂຍບາຍລາຍສັກ\n            </label> <div class=\"checkbox-group\" data-v-89608314><label class=\"checkbox-option\" data-v-89608314><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.allowsTattoos) ? _vm._i(_vm.formData.allowsTattoos, null) > -1 : _vm.formData.allowsTattoos) + " data-v-89608314> <span class=\"checkbox-label\" data-v-89608314>ອະນຸຍາດໃຫ້ມີລາຍສັກ</span></label></div> <div class=\"field-hint warning\" data-v-89608314><i class=\"fas fa-exclamation-triangle\" data-v-89608314></i>\n              ສ່ວນໃຫຍ່ບໍ່ອະນຸຍາດລາຍສັກນອກເສື້ອຜ້າ\n            </div></div> <div class=\"section-header full-width\" data-v-89608314><h4 data-v-89608314><i class=\"fas fa-cogs\" data-v-89608314></i>\n              ການຈັດການງານ\n            </h4></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-89608314>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-89608314><i class=\"fas fa-toggle-on\" data-v-89608314></i>\n              ສະຖານະ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-89608314>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.status,
      expression: "formData.status"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.status
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
        _vm.$set(_vm.formData, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະຖານະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "active"
    }
  }, [_vm._v("ເປີດຮັບສະໝັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "inactive"
    }
  }, [_vm._v("ປິດຊົ່ວຄາວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "closed"
    }
  }, [_vm._v("ປິດແລ້ວ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-89608314><i class=\"fas fa-chevron-down\" data-v-89608314></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.status ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.status) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-calendar-plus\" data-v-89608314></i>\n              ວັນເລີ່ມຮັບສະໝັກ\n            </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.todayDate) + _vm._ssrAttr("value", _vm.formData.startDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.startDate
  }) + " data-v-89608314> " + (_vm.errors.startDate ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.startDate) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-calendar-minus\" data-v-89608314></i>\n              ວັນສິ້ນສຸດຮັບສະໝັກ\n            </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.formData.startDate || _vm.todayDate) + _vm._ssrAttr("value", _vm.formData.endDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.endDate
  }) + " data-v-89608314> " + (_vm.errors.endDate ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.endDate) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.formData.startDate && _vm.formData.endDate ? "<div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>" + _vm._ssrEscape("\n              ໄລຍະເວລາ: " + _vm._s(_vm.calculateDuration()) + " ວັນ\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group full-width\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-sticky-note\" data-v-89608314></i>\n              ໝາຍເຫດ\n            </label> <textarea rows=\"3\" placeholder=\"ຂໍ້ມູນເພີ່ມເຕີມ, ເງື່ອນໄຂພິເສດ...\" maxlength=\"500\" class=\"form-control\" data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-89608314><span class=\"text-counter\" data-v-89608314>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> <div class=\"form-group full-width\" data-v-89608314><div class=\"requirements-summary\" data-v-89608314><h5 data-v-89608314><i class=\"fas fa-clipboard-list\" data-v-89608314></i>\n                ສະຫລຸບຄຸນສົມບັດຜູ້ສະໝັກ\n              </h5> <div class=\"requirements-grid\" data-v-89608314><div" + _vm._ssrClass("requirement-card", {
    'required': _vm.formData.requiresPassport
  }) + " data-v-89608314><div class=\"requirement-icon\" data-v-89608314><i class=\"fas fa-passport\" data-v-89608314></i></div> <div class=\"requirement-content\" data-v-89608314><h6 data-v-89608314>ໜັງສືເດີນທາງ</h6> <p data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.requiresPassport ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ')) + "</p></div></div> <div" + _vm._ssrClass("requirement-card", {
    'required': _vm.formData.requiresGoodEyesight
  }) + " data-v-89608314><div class=\"requirement-icon\" data-v-89608314><i class=\"fas fa-eye\" data-v-89608314></i></div> <div class=\"requirement-content\" data-v-89608314><h6 data-v-89608314>ສາຍຕາດີ</h6> <p data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.requiresGoodEyesight ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ')) + "</p></div></div> <div" + _vm._ssrClass("requirement-card", {
    'required': _vm.formData.requiresLanguage !== 'none'
  }) + " data-v-89608314><div class=\"requirement-icon\" data-v-89608314><i class=\"fas fa-language\" data-v-89608314></i></div> <div class=\"requirement-content\" data-v-89608314><h6 data-v-89608314>ພາສາ</h6> <p data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formatLanguageLevel(_vm.formData.requiresLanguage))) + "</p></div></div> <div" + _vm._ssrClass("requirement-card", {
    'allowed': _vm.formData.allowsTattoos
  }) + " data-v-89608314><div class=\"requirement-icon\" data-v-89608314><i class=\"fas fa-paint-brush\" data-v-89608314></i></div> <div class=\"requirement-content\" data-v-89608314><h6 data-v-89608314>ລາຍສັກ</h6> <p data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.allowsTattoos ? 'ອະນຸຍາດ' : 'ບໍ່ອະນຸຍາດ')) + "</p></div></div></div> <div" + _vm._ssrClass("job-summary", {
    'active': _vm.formData.status === 'active'
  }) + " data-v-89608314><i" + _vm._ssrClass(null, _vm.getStatusIcon()) + " data-v-89608314></i> <span data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.getJobSummaryText())) + "</span></div></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-89608314><h6 data-v-89608314><i class=\"fas fa-exclamation-circle\" data-v-89608314></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-89608314>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-89608314>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-89608314><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-89608314><i class=\"fas fa-times\" data-v-89608314></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-89608314>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-89608314></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-89608314></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'Saving...' : _vm.isEditMode ? 'ອັບເດດ' : 'ສ້າງການປະກາດ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/jobAdvertise/maintain/index.vue?vue&type=template&id=89608314&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'JobAdvertiseDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    jobAdvertise: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      formData: {
        title: '',
        country: '',
        province: '',
        jobDescription: '',
        workingHours: '8 ຊົ່ວໂມງ/ວັນ',
        restDays: '1 ວັນ/ອາທິດ',
        requiresPassport: true,
        requiresGoodEyesight: false,
        requiresLanguage: 'none',
        allowsTattoos: false,
        status: 'active',
        startDate: '',
        endDate: '',
        maxApplicants: null,
        notes: ''
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.jobAdvertise && this.jobAdvertise.id;
    },
    user() {
      return this.$auth.user || '';
    },
    todayDate() {
      return new Date().toISOString().split('T')[0];
    },
    // Form validation
    isFormValid() {
      return this.formData.title.trim() && this.formData.country && this.formData.status && this.formErrors.length === 0;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm();
      } else {
        this.resetForm();
      }
    },
    jobAdvertise: {
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
      if (this.jobAdvertise && this.jobAdvertise.id) {
        // Edit mode
        this.formData = {
          title: this.jobAdvertise.title || '',
          country: this.jobAdvertise.country || '',
          province: this.jobAdvertise.province || '',
          jobDescription: this.jobAdvertise.jobDescription || '',
          workingHours: this.jobAdvertise.workingHours || '8 ຊົ່ວໂມງ/ວັນ',
          restDays: this.jobAdvertise.restDays || '1 ວັນ/ອາທິດ',
          requiresPassport: this.jobAdvertise.requiresPassport || false,
          requiresGoodEyesight: this.jobAdvertise.requiresGoodEyesight || false,
          requiresLanguage: this.jobAdvertise.requiresLanguage || 'none',
          allowsTattoos: this.jobAdvertise.allowsTattoos || false,
          status: this.jobAdvertise.status || 'active',
          startDate: this.jobAdvertise.startDate ? this.jobAdvertise.startDate.split('T')[0] : '',
          endDate: this.jobAdvertise.endDate ? this.jobAdvertise.endDate.split('T')[0] : '',
          maxApplicants: this.jobAdvertise.maxApplicants || null,
          notes: this.jobAdvertise.notes || ''
        };
      } else {
        // Create mode - set defaults
        this.formData = {
          title: '',
          country: '',
          province: '',
          jobDescription: '',
          workingHours: '8 ຊົ່ວໂມງ/ວັນ',
          restDays: '1 ວັນ/ອາທິດ',
          requiresPassport: true,
          requiresGoodEyesight: false,
          requiresLanguage: 'none',
          allowsTattoos: false,
          status: 'active',
          startDate: '',
          endDate: '',
          maxApplicants: null,
          notes: ''
        };
      }
      this.errors = {};
      this.formErrors = [];
    },
    resetForm() {
      this.formData = {
        title: '',
        country: '',
        province: '',
        jobDescription: '',
        workingHours: '8 ຊົ່ວໂມງ/ວັນ',
        restDays: '1 ວັນ/ອາທິດ',
        requiresPassport: true,
        requiresGoodEyesight: false,
        requiresLanguage: 'none',
        allowsTattoos: false,
        status: 'active',
        startDate: '',
        endDate: '',
        maxApplicants: null,
        notes: ''
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];

      // Required fields validation
      if (!this.formData.title.trim()) {
        this.errors.title = 'ກະລຸນາໃສ່ຊື່ວຽກ';
        this.formErrors.push('Job title is required');
      }
      if (!this.formData.country) {
        this.errors.country = 'ກະລຸນາເລືອກປະເທດ';
        this.formErrors.push('Country selection is required');
      }
      if (!this.formData.status) {
        this.errors.status = 'ກະລຸນາເລືອກສະຖານະ';
        this.formErrors.push('Status selection is required');
      }

      // Date validation
      if (this.formData.startDate && this.formData.endDate) {
        const startDate = new Date(this.formData.startDate);
        const endDate = new Date(this.formData.endDate);
        if (startDate >= endDate) {
          this.errors.endDate = 'ວັນສິ້ນສຸດຕ້ອງຫຼັງຈາກວັນເລີ່ມຕົ້ນ';
          this.formErrors.push('End date must be after start date');
        }
      }

      // Max applicants validation
      if (this.formData.maxApplicants && (this.formData.maxApplicants < 1 || this.formData.maxApplicants > 500)) {
        this.formErrors.push('Maximum applicants must be between 1 and 500');
      }

      // Text length validation
      if (this.formData.jobDescription && this.formData.jobDescription.length > 1000) {
        this.formErrors.push('Job description must not exceed 1000 characters');
      }
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters');
      }
      return this.formErrors.length === 0;
    },
    async saveJobAdvertise() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData
        };
        console.log('📤 Submitting job advertise data:', submitData);

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
    calculateDuration() {
      if (!this.formData.startDate || !this.formData.endDate) return 0;
      const start = new Date(this.formData.startDate);
      const end = new Date(this.formData.endDate);
      const timeDiff = end.getTime() - start.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    },
    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ຕ້ອງການ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ'
      };
      return levelLabels[level] || level;
    },
    getStatusIcon() {
      const icons = {
        active: 'fas fa-play-circle text-success',
        inactive: 'fas fa-pause-circle text-warning',
        closed: 'fas fa-stop-circle text-danger'
      };
      return icons[this.formData.status] || 'fas fa-question-circle';
    },
    getJobSummaryText() {
      const summaries = {
        active: 'ພ້ອມເປີດຮັບສະໝັກ - ຜູ້ສະໝັກສາມາດສະໝັກໄດ້',
        inactive: 'ປິດຊົ່ວຄາວ - ຢຸດຮັບສະໝັກຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ - ບໍ່ຮັບສະໝັກອີກແລ້ວ'
      };
      return summaries[this.formData.status] || 'ສະຖານະບໍ່ຊັດເຈນ';
    }
  }
});
// CONCATENATED MODULE: ./components/jobAdvertise/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var jobAdvertise_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/jobAdvertise/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(657)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  jobAdvertise_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "89608314",
  "377511b0"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/view/index.vue?vue&type=template&id=e698b21c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog view-dialog\" data-v-e698b21c><div class=\"modal-header\" data-v-e698b21c><div class=\"modal-title-section\" data-v-e698b21c><i class=\"fas fa-eye modal-icon\" data-v-e698b21c></i> <h5 class=\"modal-title\" data-v-e698b21c>ລາຍລະອຽດການປະກາດຫາງານ</h5></div> <button class=\"close-btn\" data-v-e698b21c><i class=\"fas fa-times\" data-v-e698b21c></i></button></div> <div class=\"modal-body\" data-v-e698b21c>" + (_vm.jobAdvertise ? "<div class=\"job-details\" data-v-e698b21c><div class=\"job-header\" data-v-e698b21c><div class=\"job-title-section\" data-v-e698b21c><h2 class=\"job-title\" data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.title)) + "</h2> <span" + _vm._ssrClass(null, ['status-badge', 'large', _vm.jobAdvertise.status]) + " data-v-e698b21c><i" + _vm._ssrClass(null, _vm.getStatusIcon()) + " data-v-e698b21c></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatStatus(_vm.jobAdvertise.status)) + "\n            ") + "</span></div> <div class=\"job-meta\" data-v-e698b21c><div class=\"meta-item\" data-v-e698b21c><i class=\"fas fa-calendar-plus\" data-v-e698b21c></i> <span data-v-e698b21c>" + _vm._ssrEscape("ສ້າງເມື່ອ: " + _vm._s(_vm.formatDate(_vm.jobAdvertise.createdAt))) + "</span></div> " + (_vm.jobAdvertise.maker ? "<div class=\"meta-item\" data-v-e698b21c><i class=\"fas fa-user\" data-v-e698b21c></i> <span data-v-e698b21c>" + _vm._ssrEscape("ສ້າງໂດຍ: " + _vm._s(_vm.jobAdvertise.maker.firstName) + " " + _vm._s(_vm.jobAdvertise.maker.lastName)) + "</span></div>" : "<!---->") + "</div></div> <div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-map-marker-alt\" data-v-e698b21c></i>\n            ສະຖານທີ່ເຮັດວຽກ\n          </h4> <div class=\"location-details\" data-v-e698b21c><div class=\"location-primary\" data-v-e698b21c><i class=\"fas fa-globe\" data-v-e698b21c></i> <strong data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.country)) + "</strong></div> " + (_vm.jobAdvertise.province ? "<div class=\"location-secondary\" data-v-e698b21c><i class=\"fas fa-map-pin\" data-v-e698b21c></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.jobAdvertise.province) + "\n            ") + "</div>" : "<!---->") + "</div></div> " + (_vm.jobAdvertise.jobDescription ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-align-left\" data-v-e698b21c></i>\n            ລາຍລະອຽດວຽກ\n          </h4> <div class=\"description-content\" data-v-e698b21c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.jobAdvertise.jobDescription) + "\n          ") + "</div></div>" : "<!---->") + " <div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-briefcase\" data-v-e698b21c></i>\n            ເງື່ອນໄຂການເຮັດວຽກ\n          </h4> <div class=\"work-conditions-grid\" data-v-e698b21c><div class=\"condition-item\" data-v-e698b21c><div class=\"condition-icon\" data-v-e698b21c><i class=\"fas fa-clock\" data-v-e698b21c></i></div> <div class=\"condition-content\" data-v-e698b21c><h6 data-v-e698b21c>ຊົ່ວໂມງເຮັດວຽກ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.workingHours || '8 ຊົ່ວໂມງ/ວັນ')) + "</p></div></div> <div class=\"condition-item\" data-v-e698b21c><div class=\"condition-icon\" data-v-e698b21c><i class=\"fas fa-calendar-day\" data-v-e698b21c></i></div> <div class=\"condition-content\" data-v-e698b21c><h6 data-v-e698b21c>ວັນພັກ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.restDays || '1 ວັນ/ອາທິດ')) + "</p></div></div> " + (_vm.jobAdvertise.maxApplicants ? "<div class=\"condition-item\" data-v-e698b21c><div class=\"condition-icon\" data-v-e698b21c><i class=\"fas fa-users\" data-v-e698b21c></i></div> <div class=\"condition-content\" data-v-e698b21c><h6 data-v-e698b21c>ຈຳນວນຄົນຮັບ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.maxApplicants) + " ຄົນ") + "</p></div></div>" : "<!---->") + "</div></div> <div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-clipboard-check\" data-v-e698b21c></i>\n            ຄຸນສົມບັດຜູ້ສະໝັກ\n          </h4> <div class=\"requirements-grid\" data-v-e698b21c><div" + _vm._ssrClass("requirement-card", {
    'required': _vm.jobAdvertise.requiresPassport
  }) + " data-v-e698b21c><div class=\"requirement-icon\" data-v-e698b21c><i class=\"fas fa-passport\" data-v-e698b21c></i></div> <div class=\"requirement-content\" data-v-e698b21c><h6 data-v-e698b21c>ໜັງສືເດີນທາງ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.requiresPassport ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ')) + "</p></div> <div class=\"requirement-status\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.jobAdvertise.requiresPassport ? 'fas fa-check text-success' : 'fas fa-times text-muted') + " data-v-e698b21c></i></div></div> <div" + _vm._ssrClass("requirement-card", {
    'required': _vm.jobAdvertise.requiresGoodEyesight
  }) + " data-v-e698b21c><div class=\"requirement-icon\" data-v-e698b21c><i class=\"fas fa-eye\" data-v-e698b21c></i></div> <div class=\"requirement-content\" data-v-e698b21c><h6 data-v-e698b21c>ສາຍຕາດີ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.requiresGoodEyesight ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ')) + "</p></div> <div class=\"requirement-status\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.jobAdvertise.requiresGoodEyesight ? 'fas fa-check text-success' : 'fas fa-times text-muted') + " data-v-e698b21c></i></div></div> <div" + _vm._ssrClass("requirement-card", {
    'required': _vm.jobAdvertise.requiresLanguage && _vm.jobAdvertise.requiresLanguage !== 'none'
  }) + " data-v-e698b21c><div class=\"requirement-icon\" data-v-e698b21c><i class=\"fas fa-language\" data-v-e698b21c></i></div> <div class=\"requirement-content\" data-v-e698b21c><h6 data-v-e698b21c>ພາສາ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.formatLanguageLevel(_vm.jobAdvertise.requiresLanguage))) + "</p></div> <div class=\"requirement-status\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.jobAdvertise.requiresLanguage && _vm.jobAdvertise.requiresLanguage !== 'none' ? 'fas fa-check text-success' : 'fas fa-times text-muted') + " data-v-e698b21c></i></div></div> <div" + _vm._ssrClass("requirement-card", {
    'allowed': _vm.jobAdvertise.allowsTattoos
  }) + " data-v-e698b21c><div class=\"requirement-icon\" data-v-e698b21c><i class=\"fas fa-paint-brush\" data-v-e698b21c></i></div> <div class=\"requirement-content\" data-v-e698b21c><h6 data-v-e698b21c>ລາຍສັກ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.allowsTattoos ? 'ອະນຸຍາດ' : 'ບໍ່ອະນຸຍາດ')) + "</p></div> <div class=\"requirement-status\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.jobAdvertise.allowsTattoos ? 'fas fa-check text-info' : 'fas fa-ban text-warning') + " data-v-e698b21c></i></div></div></div></div> " + (_vm.jobAdvertise.startDate || _vm.jobAdvertise.endDate ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-calendar-alt\" data-v-e698b21c></i>\n            ໄລຍະເວລາຮັບສະໝັກ\n          </h4> <div class=\"date-range\" data-v-e698b21c>" + (_vm.jobAdvertise.startDate ? "<div class=\"date-item\" data-v-e698b21c><i class=\"fas fa-calendar-plus\" data-v-e698b21c></i> <span class=\"date-label\" data-v-e698b21c>ເລີ່ມຮັບສະໝັກ:</span> <span class=\"date-value\" data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.jobAdvertise.startDate))) + "</span></div>" : "<!---->") + " " + (_vm.jobAdvertise.endDate ? "<div class=\"date-item\" data-v-e698b21c><i class=\"fas fa-calendar-minus\" data-v-e698b21c></i> <span class=\"date-label\" data-v-e698b21c>ສິ້ນສຸດການຮັບສະໝັກ:</span> <span class=\"date-value\" data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.jobAdvertise.endDate))) + "</span></div>" : "<!---->") + " " + (_vm.jobAdvertise.startDate && _vm.jobAdvertise.endDate ? "<div class=\"date-item duration\" data-v-e698b21c><i class=\"fas fa-hourglass-half\" data-v-e698b21c></i> <span class=\"date-label\" data-v-e698b21c>ໄລຍະເວລາ:</span> <span class=\"date-value\" data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.calculateDuration()) + " ວັນ") + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.jobAdvertise.applicants ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-users\" data-v-e698b21c></i>\n            ສະຖິຕິຜູ້ສະໝັກ\n          </h4> <div class=\"applicants-stats\" data-v-e698b21c><div class=\"stat-card total\" data-v-e698b21c><div class=\"stat-icon\" data-v-e698b21c><i class=\"fas fa-users\" data-v-e698b21c></i></div> <div class=\"stat-content\" data-v-e698b21c><h5 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.applicants.length)) + "</h5> <p data-v-e698b21c>ລວມຜູ້ສະໝັກ</p></div></div> <div class=\"stat-card pending\" data-v-e698b21c><div class=\"stat-icon\" data-v-e698b21c><i class=\"fas fa-clock\" data-v-e698b21c></i></div> <div class=\"stat-content\" data-v-e698b21c><h5 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.getApplicantsByStatus('pending').length)) + "</h5> <p data-v-e698b21c>ລໍຖ້າອະນຸມັດ</p></div></div> <div class=\"stat-card approved\" data-v-e698b21c><div class=\"stat-icon\" data-v-e698b21c><i class=\"fas fa-check-circle\" data-v-e698b21c></i></div> <div class=\"stat-content\" data-v-e698b21c><h5 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.getApplicantsByStatus('approved').length)) + "</h5> <p data-v-e698b21c>ອະນຸມັດແລ້ວ</p></div></div> <div class=\"stat-card rejected\" data-v-e698b21c><div class=\"stat-icon\" data-v-e698b21c><i class=\"fas fa-times-circle\" data-v-e698b21c></i></div> <div class=\"stat-content\" data-v-e698b21c><h5 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.getApplicantsByStatus('rejected').length)) + "</h5> <p data-v-e698b21c>ປະຕິເສດ</p></div></div></div></div>" : "<!---->") + " " + (_vm.jobAdvertise.benefits && _vm.jobAdvertise.benefits.length > 0 ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-gift\" data-v-e698b21c></i>\n            ສະຫວັດດີການ\n          </h4> <div class=\"benefits-list\" data-v-e698b21c>" + _vm._ssrList(_vm.jobAdvertise.benefits, function (benefit) {
    return "<div class=\"benefit-item\" data-v-e698b21c><div class=\"benefit-icon\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.getBenefitIcon(benefit.type)) + " data-v-e698b21c></i></div> <div class=\"benefit-content\" data-v-e698b21c><h6 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(benefit.name)) + "</h6> " + (benefit.description ? "<p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(benefit.description)) + "</p>" : "<!---->") + " " + (benefit.value ? "<div class=\"benefit-value\" data-v-e698b21c>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(benefit.value, benefit.currency)) + "\n                ") + "</div>" : "<!---->") + "</div> <div class=\"benefit-type\" data-v-e698b21c><span" + _vm._ssrClass(null, ['benefit-badge', benefit.type]) + " data-v-e698b21c>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatBenefitType(benefit.type)) + "\n                ") + "</span></div></div>";
  }) + "</div></div>" : "<!---->") + " " + (_vm.jobAdvertise.notes ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-sticky-note\" data-v-e698b21c></i>\n            ໝາຍເຫດ\n          </h4> <div class=\"notes-content\" data-v-e698b21c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.jobAdvertise.notes) + "\n          ") + "</div></div>" : "<!---->") + " " + (_vm.jobAdvertise.updateUser || _vm.jobAdvertise.updateTimestamp ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-history\" data-v-e698b21c></i>\n            ປະຫວັດການອັບເດດ\n          </h4> <div class=\"update-history\" data-v-e698b21c>" + (_vm.jobAdvertise.updateUser ? "<div class=\"update-item\" data-v-e698b21c><i class=\"fas fa-user-edit\" data-v-e698b21c></i> <span data-v-e698b21c>" + _vm._ssrEscape("ອັບເດດໂດຍ: " + _vm._s(_vm.jobAdvertise.updateUser.firstName) + " " + _vm._s(_vm.jobAdvertise.updateUser.lastName)) + "</span></div>" : "<!---->") + " " + (_vm.jobAdvertise.updateTimestamp ? "<div class=\"update-item\" data-v-e698b21c><i class=\"fas fa-clock\" data-v-e698b21c></i> <span data-v-e698b21c>" + _vm._ssrEscape("ອັບເດດລ່າສຸດ: " + _vm._s(_vm.formatDate(_vm.jobAdvertise.updateTimestamp))) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div> <div class=\"modal-footer\" data-v-e698b21c><button class=\"btn btn-secondary\" data-v-e698b21c><i class=\"fas fa-times\" data-v-e698b21c></i>\n        ປິດ\n      </button> " + (_vm.canEdit ? "<button class=\"btn btn-primary\" data-v-e698b21c><i class=\"fas fa-edit\" data-v-e698b21c></i>\n        ແກ້ໄຂ\n      </button>" : "<!---->") + " " + (_vm.canViewApplicants ? "<button class=\"btn btn-info\" data-v-e698b21c><i class=\"fas fa-users\" data-v-e698b21c></i>\n        ເບິ່ງຜູ້ສະໝັກ\n      </button>" : "<!---->") + "</div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/jobAdvertise/view/index.vue?vue&type=template&id=e698b21c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'JobViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    jobAdvertise: {
      type: Object,
      default: null
    }
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    canEdit() {
      // Add your edit permission logic here
      return true;
    },
    canViewApplicants() {
      var _this$jobAdvertise;
      return ((_this$jobAdvertise = this.jobAdvertise) === null || _this$jobAdvertise === void 0 ? void 0 : _this$jobAdvertise.applicants) && this.jobAdvertise.applicants.length > 0;
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    editJob() {
      this.$emit('edit', this.jobAdvertise);
      this.closeDialog();
    },
    viewApplicants() {
      this.$emit('view-applicants', this.jobAdvertise);
      this.closeDialog();
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ'
      };
      return statusLabels[status] || status;
    },
    getStatusIcon() {
      var _this$jobAdvertise2;
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle'
      };
      return icons[(_this$jobAdvertise2 = this.jobAdvertise) === null || _this$jobAdvertise2 === void 0 ? void 0 : _this$jobAdvertise2.status] || 'fas fa-question-circle';
    },
    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ຕ້ອງການ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ'
      };
      return levelLabels[level] || level;
    },
    calculateDuration() {
      var _this$jobAdvertise3, _this$jobAdvertise4;
      if (!((_this$jobAdvertise3 = this.jobAdvertise) !== null && _this$jobAdvertise3 !== void 0 && _this$jobAdvertise3.startDate) || !((_this$jobAdvertise4 = this.jobAdvertise) !== null && _this$jobAdvertise4 !== void 0 && _this$jobAdvertise4.endDate)) return 0;
      const start = new Date(this.jobAdvertise.startDate);
      const end = new Date(this.jobAdvertise.endDate);
      const timeDiff = end.getTime() - start.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    },
    getApplicantsByStatus(status) {
      var _this$jobAdvertise5;
      if (!((_this$jobAdvertise5 = this.jobAdvertise) !== null && _this$jobAdvertise5 !== void 0 && _this$jobAdvertise5.applicants)) return [];
      return this.jobAdvertise.applicants.filter(applicant => applicant.status === status);
    },
    getBenefitIcon(type) {
      const icons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-coins',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-gift'
      };
      return icons[type] || 'fas fa-gift';
    },
    formatBenefitType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນຊ່ວຍເຫລືອ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ'
      };
      return typeLabels[type] || type;
    },
    formatCurrency(value, currency = 'LAK') {
      if (!value) return '';
      return new Intl.NumberFormat('lo-LA').format(value) + ' ' + currency;
    }
  }
});
// CONCATENATED MODULE: ./components/jobAdvertise/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var jobAdvertise_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/jobAdvertise/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(659)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  jobAdvertise_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e698b21c",
  "fec5196c"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/statusUpdate/index.vue?vue&type=template&id=34b685fa&scoped=true&
var render = function render() {
  var _vm$notes, _vm$jobAdvertise$appl;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog status-dialog\" data-v-34b685fa><div" + _vm._ssrClass("modal-header", _vm.getHeaderClass()) + " data-v-34b685fa><div class=\"modal-title-section\" data-v-34b685fa><i" + _vm._ssrClass("modal-icon", _vm.getActionIcon()) + " data-v-34b685fa></i> <h5 class=\"modal-title\" data-v-34b685fa>" + _vm._ssrEscape("\n          " + _vm._s(_vm.getActionTitle()) + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-34b685fa><i class=\"fas fa-times\" data-v-34b685fa></i></button></div> <form data-v-34b685fa><div class=\"modal-body\" data-v-34b685fa>" + (_vm.jobAdvertise ? "<div class=\"status-update-content\" data-v-34b685fa><div class=\"job-info\" data-v-34b685fa><div class=\"job-title\" data-v-34b685fa><i class=\"fas fa-briefcase\" data-v-34b685fa></i> <strong data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.title)) + "</strong></div> <div class=\"job-location\" data-v-34b685fa><i class=\"fas fa-map-marker-alt\" data-v-34b685fa></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.jobAdvertise.country) + _vm._s(_vm.jobAdvertise.province ? `, ${_vm.jobAdvertise.province}` : '') + "\n            ") + "</div> <div class=\"current-status\" data-v-34b685fa><span class=\"status-label\" data-v-34b685fa>ສະຖານະປັດຈຸບັນ:</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.jobAdvertise.status]) + " data-v-34b685fa><i" + _vm._ssrClass(null, _vm.getCurrentStatusIcon()) + " data-v-34b685fa></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(_vm.jobAdvertise.status)) + "\n              ") + "</span></div></div> <div" + _vm._ssrClass("action-description", _vm.getDescriptionClass()) + " data-v-34b685fa><div class=\"action-icon\" data-v-34b685fa><i" + _vm._ssrClass(null, _vm.getActionIcon()) + " data-v-34b685fa></i></div> <div class=\"action-content\" data-v-34b685fa><h4 data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.getActionTitle())) + "</h4> <p data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.getActionDescription())) + "</p> <div class=\"new-status\" data-v-34b685fa><span class=\"status-label\" data-v-34b685fa>ສະຖານະໃໝ່:</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.getNewStatus()]) + " data-v-34b685fa><i" + _vm._ssrClass(null, _vm.getNewStatusIcon()) + " data-v-34b685fa></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatStatus(_vm.getNewStatus())) + "\n                ") + "</span></div></div></div> " + (_vm.action === 'pause' ? "<div class=\"action-details pause-details\" data-v-34b685fa><h5 data-v-34b685fa><i class=\"fas fa-pause-circle\" data-v-34b685fa></i>\n              ເຫດຜົນການຢຸດຊົ່ວຄາວ\n            </h5> <div class=\"reason-options\" data-v-34b685fa><label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"quota_reached\"" + _vm._ssrAttr("checked", _vm._q(_vm.pauseReason, "quota_reached")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ຈຳນວນຜູ້ສະໝັກເຕັມແລ້ວ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"review_applications\"" + _vm._ssrAttr("checked", _vm._q(_vm.pauseReason, "review_applications")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ຕ້ອງການທົບທວນຄຳສະໝັກ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"internal_review\"" + _vm._ssrAttr("checked", _vm._q(_vm.pauseReason, "internal_review")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ກວດສອບພາຍໃນ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"other\"" + _vm._ssrAttr("checked", _vm._q(_vm.pauseReason, "other")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ອື່ນໆ</span></label></div> <div class=\"field-hint info\" data-v-34b685fa><i class=\"fas fa-info-circle\" data-v-34b685fa></i>\n              ການຢຸດຊົ່ວຄາວສາມາດເປີດໃໝ່ໄດ້ໃນພາຍຫຼັງ\n            </div></div>" : "<!---->") + " " + (_vm.action === 'close' ? "<div class=\"action-details close-details\" data-v-34b685fa><h5 data-v-34b685fa><i class=\"fas fa-stop-circle\" data-v-34b685fa></i>\n              ເຫດຜົນການປິດ\n            </h5> <div class=\"reason-options\" data-v-34b685fa><label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"position_filled\"" + _vm._ssrAttr("checked", _vm._q(_vm.closeReason, "position_filled")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ຕຳແໜ່ງເຕັມແລ້ວ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"deadline_passed\"" + _vm._ssrAttr("checked", _vm._q(_vm.closeReason, "deadline_passed")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ໝົດກຳນົດເວລາ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"project_cancelled\"" + _vm._ssrAttr("checked", _vm._q(_vm.closeReason, "project_cancelled")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ໂຄງການຖືກຍົກເລີກ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"other\"" + _vm._ssrAttr("checked", _vm._q(_vm.closeReason, "other")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ອື່ນໆ</span></label></div> <div class=\"field-hint warning\" data-v-34b685fa><i class=\"fas fa-exclamation-triangle\" data-v-34b685fa></i>\n              ການປິດແລ້ວບໍ່ສາມາດເປີດໃໝ່ໄດ້\n            </div></div>" : "<!---->") + " " + (_vm.action === 'activate' ? "<div class=\"action-details activate-details\" data-v-34b685fa><div class=\"activation-info\" data-v-34b685fa><div class=\"info-item\" data-v-34b685fa><i class=\"fas fa-play-circle\" data-v-34b685fa></i> <span data-v-34b685fa>ການປະກາດຈະເປີດຮັບສະໝັກໃໝ່</span></div> <div class=\"info-item\" data-v-34b685fa><i class=\"fas fa-users\" data-v-34b685fa></i> <span data-v-34b685fa>ຜູ້ສະໝັກສາມາດສະໝັກໄດ້ທັນທີ</span></div> <div class=\"info-item\" data-v-34b685fa><i class=\"fas fa-eye\" data-v-34b685fa></i> <span data-v-34b685fa>ການປະກາດຈະສະແດງໃນລາຍການ</span></div></div></div>" : "<!---->") + " <div class=\"form-group\" data-v-34b685fa><label class=\"form-label\" data-v-34b685fa><i class=\"fas fa-sticky-note\" data-v-34b685fa></i>\n              ໝາຍເຫດເພີ່ມເຕີມ\n            </label> <textarea rows=\"3\"" + _vm._ssrAttr("placeholder", _vm.getNotesPlaceholder()) + " maxlength=\"300\" class=\"form-control\" data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.notes)) + "</textarea> <div class=\"field-hint\" data-v-34b685fa><span class=\"text-counter\" data-v-34b685fa>" + _vm._ssrEscape(_vm._s(((_vm$notes = _vm.notes) === null || _vm$notes === void 0 ? void 0 : _vm$notes.length) || 0) + "/300") + "</span></div></div> " + (_vm.action === 'close' ? "<div class=\"confirmation-section\" data-v-34b685fa><div class=\"checkbox-group\" data-v-34b685fa><label class=\"checkbox-option danger\" data-v-34b685fa><input type=\"checkbox\" required=\"required\"" + _vm._ssrAttr("checked", Array.isArray(_vm.confirmAction) ? _vm._i(_vm.confirmAction, null) > -1 : _vm.confirmAction) + " data-v-34b685fa> <span class=\"checkbox-label\" data-v-34b685fa>\n                  ຂ້ອຍເຂົ້າໃຈວ່າການປິດການປະກາດນີ້ບໍ່ສາມາດຍົກເລີກໄດ້\n                </span></label></div></div>" : "<!---->") + " <div" + _vm._ssrClass("impact-summary", _vm.getImpactClass()) + " data-v-34b685fa><h6 data-v-34b685fa><i class=\"fas fa-chart-line\" data-v-34b685fa></i>\n              ຜົນກະທົບ\n            </h6> <div class=\"impact-items\" data-v-34b685fa><div class=\"impact-item\" data-v-34b685fa><i class=\"fas fa-users\" data-v-34b685fa></i> <span data-v-34b685fa>" + _vm._ssrEscape("ຜູ້ສະໝັກປັດຈຸບັນ: " + _vm._s(((_vm$jobAdvertise$appl = _vm.jobAdvertise.applicants) === null || _vm$jobAdvertise$appl === void 0 ? void 0 : _vm$jobAdvertise$appl.length) || 0) + " ຄົນ") + "</span></div> <div class=\"impact-item\" data-v-34b685fa><i class=\"fas fa-clock\" data-v-34b685fa></i> <span data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.getImpactDescription())) + "</span></div> " + (_vm.jobAdvertise.maxApplicants ? "<div class=\"impact-item\" data-v-34b685fa><i class=\"fas fa-target\" data-v-34b685fa></i> <span data-v-34b685fa>" + _vm._ssrEscape("ເປົ້າໝາຍ: " + _vm._s(_vm.jobAdvertise.maxApplicants) + " ຄົນ") + "</span></div>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-34b685fa><h6 data-v-34b685fa><i class=\"fas fa-exclamation-circle\" data-v-34b685fa></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-34b685fa>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-34b685fa>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->") + "</div> <div class=\"modal-footer\" data-v-34b685fa><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-34b685fa><i class=\"fas fa-times\" data-v-34b685fa></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + _vm._ssrClass(null, ['btn', _vm.getConfirmButtonClass()]) + " data-v-34b685fa>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-34b685fa></i>" : "<i" + _vm._ssrClass(null, _vm.getActionIcon()) + " data-v-34b685fa></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'ກຳລັງປະມວນຜົນ...' : _vm.getConfirmButtonText()) + "\n        ") + "</button></div></form></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/jobAdvertise/statusUpdate/index.vue?vue&type=template&id=34b685fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/statusUpdate/index.vue?vue&type=script&lang=js&
/* harmony default export */ var statusUpdatevue_type_script_lang_js_ = ({
  name: 'StatusUpdateDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    jobAdvertise: {
      type: Object,
      default: null
    },
    action: {
      type: String,
      default: '' // 'pause', 'activate', 'close'
    }
  },

  data() {
    return {
      loading: false,
      pauseReason: '',
      closeReason: '',
      notes: '',
      confirmAction: false,
      formErrors: []
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    isFormValid() {
      if (this.action === 'pause' && !this.pauseReason) {
        return false;
      }
      if (this.action === 'close' && (!this.closeReason || !this.confirmAction)) {
        return false;
      }
      return true;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.resetForm();
      }
    }
  },
  methods: {
    resetForm() {
      this.pauseReason = '';
      this.closeReason = '';
      this.notes = '';
      this.confirmAction = false;
      this.formErrors = [];
      this.loading = false;
    },
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    async confirmAction() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        const statusData = {
          status: this.getNewStatus(),
          reason: this.action === 'pause' ? this.pauseReason : this.closeReason,
          notes: this.notes,
          actionType: this.action
        };
        console.log('📤 Submitting status update:', statusData);
        this.$emit('confirm', statusData);
      } catch (error) {
        console.error('Status update error:', error);
        this.formErrors.push('เกิดข้อผิดพลาดในการอัปเดตสถานะ');
      } finally {
        this.loading = false;
      }
    },
    validateForm() {
      this.formErrors = [];
      if (this.action === 'pause' && !this.pauseReason) {
        this.formErrors.push('ກະລຸນາເລືອກເຫດຜົນການຢຸດຊົ່ວຄາວ');
      }
      if (this.action === 'close') {
        if (!this.closeReason) {
          this.formErrors.push('ກະລຸນາເລືອກເຫດຜົນການປິດ');
        }
        if (!this.confirmAction) {
          this.formErrors.push('ກະລຸນາຢືນຢັນການປິດການປະກາດ');
        }
      }
      return this.formErrors.length === 0;
    },
    // Status and Action Methods
    getNewStatus() {
      var _this$jobAdvertise;
      const statusMap = {
        pause: 'inactive',
        activate: 'active',
        close: 'closed'
      };
      return statusMap[this.action] || ((_this$jobAdvertise = this.jobAdvertise) === null || _this$jobAdvertise === void 0 ? void 0 : _this$jobAdvertise.status);
    },
    getCurrentStatusIcon() {
      var _this$jobAdvertise2;
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle'
      };
      return icons[(_this$jobAdvertise2 = this.jobAdvertise) === null || _this$jobAdvertise2 === void 0 ? void 0 : _this$jobAdvertise2.status] || 'fas fa-question-circle';
    },
    getNewStatusIcon() {
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle'
      };
      return icons[this.getNewStatus()] || 'fas fa-question-circle';
    },
    getActionIcon() {
      const icons = {
        pause: 'fas fa-pause-circle',
        activate: 'fas fa-play-circle',
        close: 'fas fa-stop-circle'
      };
      return icons[this.action] || 'fas fa-question-circle';
    },
    getActionTitle() {
      const titles = {
        pause: 'ຢຸດການປະກາດຊົ່ວຄາວ',
        activate: 'ເປີດການປະກາດໃໝ່',
        close: 'ປິດການປະກາດ'
      };
      return titles[this.action] || 'ອັບເດດສະຖານະ';
    },
    getActionDescription() {
      const descriptions = {
        pause: 'ການປະກາດຈະຖືກຢຸດຊົ່ວຄາວ ແລະ ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໄດ້ຊົ່ວຄາວ',
        activate: 'ການປະກາດຈະເປີດຮັບສະໝັກໃໝ່ ແລະ ຜູ້ສະໝັກສາມາດສະໝັກໄດ້',
        close: 'ການປະກາດຈະຖືກປິດຖາວອນ ແລະ ບໍ່ສາມາດເປີດໃໝ່ໄດ້'
      };
      return descriptions[this.action] || '';
    },
    getConfirmButtonText() {
      const texts = {
        pause: 'ຢຸດຊົ່ວຄາວ',
        activate: 'ເປີດໃໝ່',
        close: 'ປິດການປະກາດ'
      };
      return texts[this.action] || 'ອັບເດດ';
    },
    getConfirmButtonClass() {
      const classes = {
        pause: 'btn-warning',
        activate: 'btn-success',
        close: 'btn-danger'
      };
      return classes[this.action] || 'btn-primary';
    },
    getHeaderClass() {
      const classes = {
        pause: 'header-warning',
        activate: 'header-success',
        close: 'header-danger'
      };
      return classes[this.action] || '';
    },
    getDescriptionClass() {
      const classes = {
        pause: 'description-warning',
        activate: 'description-success',
        close: 'description-danger'
      };
      return classes[this.action] || '';
    },
    getImpactClass() {
      const classes = {
        pause: 'impact-warning',
        activate: 'impact-success',
        close: 'impact-danger'
      };
      return classes[this.action] || '';
    },
    getNotesPlaceholder() {
      const placeholders = {
        pause: 'ລາຍລະອຽດເພີ່ມເຕີມກ່ຽວກັບການຢຸດຊົ່ວຄາວ...',
        activate: 'ລາຍລະອຽດການເປີດໃໝ່...',
        close: 'ເຫດຜົນລາຍລະອຽດການປິດການປະກາດ...'
      };
      return placeholders[this.action] || 'ໝາຍເຫດ...';
    },
    getImpactDescription() {
      const descriptions = {
        pause: 'ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໃໝ່ໄດ້ຊົ່ວຄາວ',
        activate: 'ຜູ້ສະໝັກສາມາດສະໝັກໄດ້ທັນທີ',
        close: 'ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໄດ້ອີກ'
      };
      return descriptions[this.action] || '';
    },
    formatStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/jobAdvertise/statusUpdate/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var jobAdvertise_statusUpdatevue_type_script_lang_js_ = (statusUpdatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/jobAdvertise/statusUpdate/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(661)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  jobAdvertise_statusUpdatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "34b685fa",
  "c272cb00"
  
)

/* harmony default export */ var statusUpdate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c6d2dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(744);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c6d2dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c6d2dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c6d2dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c6d2dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".job-advertise-summary-container[data-v-5c6d2dea]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-5c6d2dea]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-5c6d2dea]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-5c6d2dea]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-5c6d2dea]{display:flex;gap:12px}.filter-section[data-v-5c6d2dea]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-5c6d2dea]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-5c6d2dea]{display:flex;flex-direction:column;gap:8px;min-width:150px}.filter-group label[data-v-5c6d2dea]{color:#555;font-size:14px;font-weight:500}.filter-actions[data-v-5c6d2dea]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-5c6d2dea]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-5c6d2dea]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-5c6d2dea]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-jobs[data-v-5c6d2dea]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.summary-card.total-jobs .card-icon[data-v-5c6d2dea]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.status-active[data-v-5c6d2dea]{border-left:4px solid #10b981}.summary-card.status-inactive[data-v-5c6d2dea]{border-left:4px solid #f59e0b}.summary-card.status-closed[data-v-5c6d2dea]{border-left:4px solid #ef4444}.summary-card.country-stats[data-v-5c6d2dea]{border-left:4px solid #3b82f6}.summary-card.benefits-stats[data-v-5c6d2dea]{border-left:4px solid #8b5cf6}.card-icon[data-v-5c6d2dea]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-5c6d2dea]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.active[data-v-5c6d2dea]{background:#d1fae5;color:#10b981}.card-icon.inactive[data-v-5c6d2dea]{background:#fef3c7;color:#f59e0b}.card-icon.closed[data-v-5c6d2dea]{background:#fee2e2;color:#ef4444}.card-icon.country[data-v-5c6d2dea]{background:#dbeafe;color:#3b82f6}.card-icon.benefits[data-v-5c6d2dea]{background:#ede9fe;color:#8b5cf6}.card-content[data-v-5c6d2dea]{flex:1;min-width:0}.card-content h3[data-v-5c6d2dea]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-5c6d2dea]{font-size:14px;margin:0}.benefits-rate[data-v-5c6d2dea],.country-info[data-v-5c6d2dea]{display:block;font-size:12px;margin-top:4px;opacity:.8}.table-section[data-v-5c6d2dea]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-5c6d2dea]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-5c6d2dea]{color:#333;margin:0}.record-count[data-v-5c6d2dea]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-5c6d2dea]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-5c6d2dea]{overflow-x:auto}.data-table[data-v-5c6d2dea]{border-collapse:collapse;width:100%}.data-table td[data-v-5c6d2dea],.data-table th[data-v-5c6d2dea]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-5c6d2dea]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-5c6d2dea]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-5c6d2dea]:hover{background-color:#e9ecef}.data-table th i[data-v-5c6d2dea]{margin-left:8px;opacity:.5}.job-title strong[data-v-5c6d2dea]{color:#333;display:block;font-size:14px;margin-bottom:4px}.job-description[data-v-5c6d2dea]{color:#666;font-size:12px}.location-info .country[data-v-5c6d2dea]{align-items:center;color:#495057;display:flex;font-weight:600;gap:4px;margin-bottom:2px}.location-info .province[data-v-5c6d2dea]{margin-left:16px}.location-info .province[data-v-5c6d2dea],.work-conditions[data-v-5c6d2dea]{color:#666;font-size:12px}.work-conditions .rest-days[data-v-5c6d2dea],.work-conditions .work-hours[data-v-5c6d2dea]{align-items:center;display:flex;gap:4px;margin-bottom:2px}.work-conditions i[data-v-5c6d2dea]{color:#999;width:12px}.requirements[data-v-5c6d2dea]{display:flex;flex-wrap:wrap;gap:6px}.requirement-item[data-v-5c6d2dea]{align-items:center;border-radius:50%;display:inline-flex;font-size:10px;height:20px;justify-content:center;width:20px}.requirement-item.passport[data-v-5c6d2dea]{background-color:#dbeafe;color:#3b82f6}.requirement-item.eyesight[data-v-5c6d2dea]{background-color:#fef3c7;color:#d97706}.requirement-item.language[data-v-5c6d2dea]{background-color:#dcfce7;color:#16a34a}.requirement-item.no-tattoo[data-v-5c6d2dea]{background-color:#fee2e2;color:#dc2626}.status-badge[data-v-5c6d2dea]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.active[data-v-5c6d2dea]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-5c6d2dea]{background-color:#fef3c7;color:#d97706}.status-badge.closed[data-v-5c6d2dea]{background-color:#fee2e2;color:#dc2626}.applicants-cell[data-v-5c6d2dea]{color:#495057;font-weight:600}.applicant-count[data-v-5c6d2dea]{align-items:center;display:flex;gap:4px}.max-count[data-v-5c6d2dea]{color:#666;font-weight:400}.actions-cell[data-v-5c6d2dea]{display:flex;flex-wrap:wrap;gap:4px}.pagination-container[data-v-5c6d2dea]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-5c6d2dea]{color:#666;font-size:14px}.pagination-controls[data-v-5c6d2dea]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-5c6d2dea]{color:#666;padding:6px 12px}.btn[data-v-5c6d2dea]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-5c6d2dea]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-5c6d2dea]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-5c6d2dea]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-5c6d2dea]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-5c6d2dea]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-5c6d2dea]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-5c6d2dea]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-5c6d2dea]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-5c6d2dea]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-5c6d2dea]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-5c6d2dea]:hover{background-color:#17a2b8;color:#fff}.btn-outline-success[data-v-5c6d2dea]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-5c6d2dea]:hover{background-color:#28a745;color:#fff}.btn-outline-warning[data-v-5c6d2dea]{background-color:transparent;border-color:#ffc107;color:#ffc107}.btn-outline-warning[data-v-5c6d2dea]:hover{background-color:#ffc107;color:#212529}.btn-outline-danger[data-v-5c6d2dea]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-5c6d2dea]:hover{background-color:#dc3545;color:#fff}.btn-sm[data-v-5c6d2dea]{font-size:12px;padding:4px 8px}.form-control[data-v-5c6d2dea]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-5c6d2dea]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.loading-overlay[data-v-5c6d2dea]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-5c6d2dea]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-5c6d2dea]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:768px){.job-advertise-summary-container[data-v-5c6d2dea]{padding:10px}.header-content[data-v-5c6d2dea]{align-items:flex-start}.filter-row[data-v-5c6d2dea],.header-content[data-v-5c6d2dea]{flex-direction:column;gap:16px}.filter-group[data-v-5c6d2dea]{min-width:auto;width:100%}.filter-actions[data-v-5c6d2dea]{flex-direction:row;width:100%}.summary-cards[data-v-5c6d2dea]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-5c6d2dea]{padding:20px}.card-icon[data-v-5c6d2dea]{height:50px;margin-right:16px;width:50px}.card-content h3[data-v-5c6d2dea],.card-icon[data-v-5c6d2dea]{font-size:20px}.pagination-container[data-v-5c6d2dea],.table-header[data-v-5c6d2dea]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-5c6d2dea]{flex-wrap:wrap}.actions-cell[data-v-5c6d2dea],.requirements[data-v-5c6d2dea]{flex-direction:column;gap:4px}}@media (max-width:576px){.summary-card[data-v-5c6d2dea]{flex-direction:column;text-align:center}.card-icon[data-v-5c6d2dea]{margin:0 auto 16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map