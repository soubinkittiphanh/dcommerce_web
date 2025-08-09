exports.ids = [129,12,13,14];
exports.modules = {

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/applicants/index.vue?vue&type=template&id=34eb0fc4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "applicant-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-34eb0fc4><div class=\"header-content\" data-v-34eb0fc4><h1 class=\"page-title\" data-v-34eb0fc4>ລະບົບຈັດການຜູ້ສະໝັກງານ</h1> <div class=\"header-actions\" data-v-34eb0fc4><button class=\"btn btn-primary\" data-v-34eb0fc4><i class=\"fas fa-plus\" data-v-34eb0fc4></i>\n          ເພີ່ມຜູ້ສະໝັກໃໝ່\n        </button> <button class=\"btn btn-secondary\" data-v-34eb0fc4><i class=\"fas fa-download\" data-v-34eb0fc4></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-34eb0fc4><label data-v-34eb0fc4>ຄົ້ນຫາ:</label> <input type=\"text\" placeholder=\"ຊື່, ເບີໂທ, ອີເມວ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"form-control\" data-v-34eb0fc4></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<label data-v-34eb0fc4>ເພດ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.gender,
      expression: "filters.gender"
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
        _vm.$set(_vm.filters, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "male"
    }
  }, [_vm._v("ຊາຍ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "female"
    }
  }, [_vm._v("ຍິງ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<label data-v-34eb0fc4>ສະຖານະ:</label> "), _c('select', {
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
      "value": "pending"
    }
  }, [_vm._v("ລໍຖ້າ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("ອະນຸມັດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rejected"
    }
  }, [_vm._v("ປະຕິເສດ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<label data-v-34eb0fc4>ມີໜັງສືເດີນທາງ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.hasPassport,
      expression: "filters.hasPassport"
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
        _vm.$set(_vm.filters, "hasPassport", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_vm._v("ມີ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "false"
    }
  }, [_vm._v("ບໍ່ມີ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<label data-v-34eb0fc4>ລະດັບພາສາຈີນ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.chineseLanguageLevel,
      expression: "filters.chineseLanguageLevel"
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
        _vm.$set(_vm.filters, "chineseLanguageLevel", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_vm._v("ບໍ່ມີ")]), _vm._v(" "), _c('option', {
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
  }, [_vm._v("ສູງ")])])], 2), _vm._ssrNode(" <div class=\"filter-group\" data-v-34eb0fc4><label data-v-34eb0fc4>ຊ່ວງອາຍຸ:</label> <div class=\"age-range\" data-v-34eb0fc4><input type=\"number\" placeholder=\"18\" min=\"18\" max=\"32\"" + _vm._ssrAttr("value", _vm.filters.minAge) + " class=\"form-control age-input\" data-v-34eb0fc4> <span class=\"age-separator\" data-v-34eb0fc4>-</span> <input type=\"number\" placeholder=\"32\" min=\"18\" max=\"32\"" + _vm._ssrAttr("value", _vm.filters.maxAge) + " class=\"form-control age-input\" data-v-34eb0fc4></div></div> <div class=\"filter-actions\" data-v-34eb0fc4><button class=\"btn btn-outline-primary\" data-v-34eb0fc4><i class=\"fas fa-search\" data-v-34eb0fc4></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-34eb0fc4><i class=\"fas fa-undo\" data-v-34eb0fc4></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-34eb0fc4><div class=\"summary-card total-applicants\" data-v-34eb0fc4><div class=\"card-icon total\" data-v-34eb0fc4><i class=\"fas fa-users\" data-v-34eb0fc4></i></div> <div class=\"card-content\" data-v-34eb0fc4><h3 data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.total.count)) + "</h3> <p data-v-34eb0fc4>ລວມຜູ້ສະໝັກທັງໝົດ</p></div></div> <div class=\"summary-card gender-male\" data-v-34eb0fc4><div class=\"card-icon male\" data-v-34eb0fc4><i class=\"fas fa-male\" data-v-34eb0fc4></i></div> <div class=\"card-content\" data-v-34eb0fc4><h3 data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.male.count)) + "</h3> <p data-v-34eb0fc4>" + _vm._ssrEscape("ຊາຍ (" + _vm._s(_vm.summaryStats.male.percentage) + "%)") + "</p> <small class=\"quota-info\" data-v-34eb0fc4>" + _vm._ssrEscape("ໂຄຕ້າ: " + _vm._s(_vm.summaryStats.male.quota) + "/30") + "</small></div></div> <div class=\"summary-card gender-female\" data-v-34eb0fc4><div class=\"card-icon female\" data-v-34eb0fc4><i class=\"fas fa-female\" data-v-34eb0fc4></i></div> <div class=\"card-content\" data-v-34eb0fc4><h3 data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.female.count)) + "</h3> <p data-v-34eb0fc4>" + _vm._ssrEscape("ຍິງ (" + _vm._s(_vm.summaryStats.female.percentage) + "%)") + "</p> <small class=\"quota-info\" data-v-34eb0fc4>" + _vm._ssrEscape("ໂຄຕ້າ: " + _vm._s(_vm.summaryStats.female.quota) + "/70") + "</small></div></div> <div class=\"summary-card status-pending\" data-v-34eb0fc4><div class=\"card-icon pending\" data-v-34eb0fc4><i class=\"fas fa-clock\" data-v-34eb0fc4></i></div> <div class=\"card-content\" data-v-34eb0fc4><h3 data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.pending.count)) + "</h3> <p data-v-34eb0fc4>ລໍຖ້າການພິຈາລະນາ</p></div></div> <div class=\"summary-card status-approved\" data-v-34eb0fc4><div class=\"card-icon approved\" data-v-34eb0fc4><i class=\"fas fa-check-circle\" data-v-34eb0fc4></i></div> <div class=\"card-content\" data-v-34eb0fc4><h3 data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.approved.count)) + "</h3> <p data-v-34eb0fc4>ອະນຸມັດແລ້ວ</p></div></div> <div class=\"summary-card eligibility\" data-v-34eb0fc4><div class=\"card-icon eligible\" data-v-34eb0fc4><i class=\"fas fa-star\" data-v-34eb0fc4></i></div> <div class=\"card-content\" data-v-34eb0fc4><h3 data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.eligible.count)) + "</h3> <p data-v-34eb0fc4>ຜູ້ມີຄຸນສົມບັດ</p> <small class=\"eligibility-rate\" data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.eligible.percentage) + "% ຂອງທັງໝົດ") + "</small></div></div></div> "), _vm._ssrNode("<div class=\"table-section\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-34eb0fc4><h3 data-v-34eb0fc4>ລາຍຊື່ຜູ້ສະໝັກ</h3> <span class=\"record-count\" data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.filteredApplicants.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-34eb0fc4>", "</div>", [_vm._ssrNode("<label data-v-34eb0fc4>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-34eb0fc4>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-34eb0fc4><table class=\"data-table\" data-v-34eb0fc4><thead data-v-34eb0fc4><tr data-v-34eb0fc4><th class=\"sortable\" data-v-34eb0fc4>\n              ID\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('id')) + " data-v-34eb0fc4></i></th> <th class=\"sortable\" data-v-34eb0fc4>\n              ຊື່ຜູ້ສະໝັກ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('firstName')) + " data-v-34eb0fc4></i></th> <th class=\"sortable\" data-v-34eb0fc4>\n              ເພດ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('gender')) + " data-v-34eb0fc4></i></th> <th class=\"sortable\" data-v-34eb0fc4>\n              ອາຍຸ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('dateOfBirth')) + " data-v-34eb0fc4></i></th> <th data-v-34eb0fc4>ຕິດຕໍ່</th> <th data-v-34eb0fc4>ພາສາຈີນ</th> <th data-v-34eb0fc4>ຄຸນສົມບັດ</th> <th class=\"sortable\" data-v-34eb0fc4>\n              ສະຖານະ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('status')) + " data-v-34eb0fc4></i></th> <th class=\"sortable\" data-v-34eb0fc4>\n              ວັນທີສະໝັກ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('applicationDate')) + " data-v-34eb0fc4></i></th> <th data-v-34eb0fc4>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-34eb0fc4>" + _vm._ssrList(_vm.paginatedApplicants, function (applicant) {
    return "<tr data-v-34eb0fc4><td data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(applicant.id)) + "</td> <td data-v-34eb0fc4><div class=\"applicant-name\" data-v-34eb0fc4><strong data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.getFullName(applicant))) + "</strong> <div class=\"contact-info\" data-v-34eb0fc4><span class=\"phone\" data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(applicant.phone)) + "</span></div></div></td> <td data-v-34eb0fc4><span" + _vm._ssrClass(null, ['gender-badge', applicant.gender]) + " data-v-34eb0fc4>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatGender(applicant.gender)) + "\n              ") + "</span></td> <td class=\"age-cell\" data-v-34eb0fc4>" + _vm._ssrEscape("\n              " + _vm._s(_vm.calculateAge(applicant.dateOfBirth)) + " ປີ\n            ") + "</td> <td data-v-34eb0fc4><div class=\"contact-details\" data-v-34eb0fc4>" + (applicant.email ? "<div class=\"email\" data-v-34eb0fc4><i class=\"fas fa-envelope\" data-v-34eb0fc4></i>" + _vm._ssrEscape("\n                  " + _vm._s(applicant.email) + "\n                ") + "</div>" : "<!---->") + " " + (applicant.address ? "<div class=\"address\" data-v-34eb0fc4><i class=\"fas fa-map-marker-alt\" data-v-34eb0fc4></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.truncateText(applicant.address, 30)) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-34eb0fc4><span" + _vm._ssrClass(null, ['language-badge', applicant.chineseLanguageLevel]) + " data-v-34eb0fc4>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatLanguageLevel(applicant.chineseLanguageLevel)) + "\n              ") + "</span></td> <td data-v-34eb0fc4><div class=\"qualifications\" data-v-34eb0fc4>" + (applicant.hasPassport ? "<span title=\"ມີໜັງສືເດີນທາງ\" class=\"qualification-item passport\" data-v-34eb0fc4><i class=\"fas fa-passport\" data-v-34eb0fc4></i></span>" : "<!---->") + " " + (applicant.healthStatus === 'good' ? "<span title=\"ສຸຂະພາບດີ\" class=\"qualification-item health\" data-v-34eb0fc4><i class=\"fas fa-heart\" data-v-34eb0fc4></i></span>" : "<!---->") + " " + (applicant.eyesightGood ? "<span title=\"ສາຍຕາດີ\" class=\"qualification-item eyesight\" data-v-34eb0fc4><i class=\"fas fa-eye\" data-v-34eb0fc4></i></span>" : "<!---->") + " " + (!applicant.hasVisibleTattoos ? "<span title=\"ບໍ່ມີລາຍສັກ\" class=\"qualification-item no-tattoo\" data-v-34eb0fc4><i class=\"fas fa-check-circle\" data-v-34eb0fc4></i></span>" : "<!---->") + "</div></td> <td data-v-34eb0fc4><span" + _vm._ssrClass(null, ['status-badge', applicant.status]) + " data-v-34eb0fc4>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(applicant.status)) + "\n              ") + "</span></td> <td data-v-34eb0fc4>" + _vm._ssrEscape(_vm._s(_vm.formatDate(applicant.applicationDate))) + "</td> <td class=\"actions-cell\" data-v-34eb0fc4><button title=\"ເບິ່ງລາຍລະອຽດ\" class=\"btn btn-sm btn-outline-primary\" data-v-34eb0fc4><i class=\"fas fa-eye\" data-v-34eb0fc4></i></button> <button title=\"ແກ້ໄຂ\" class=\"btn btn-sm btn-outline-info\" data-v-34eb0fc4><i class=\"fas fa-edit\" data-v-34eb0fc4></i></button> " + (applicant.status === 'pending' ? "<button title=\"ອະນຸມັດ\" class=\"btn btn-sm btn-outline-success\" data-v-34eb0fc4><i class=\"fas fa-check\" data-v-34eb0fc4></i></button>" : "<!---->") + " " + (applicant.status === 'pending' ? "<button title=\"ປະຕິເສດ\" class=\"btn btn-sm btn-outline-danger\" data-v-34eb0fc4><i class=\"fas fa-times\" data-v-34eb0fc4></i></button>" : "<!---->") + "</td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-34eb0fc4><div class=\"pagination-info\" data-v-34eb0fc4>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-34eb0fc4><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-34eb0fc4>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-34eb0fc4>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-34eb0fc4>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-34eb0fc4>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-34eb0fc4>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('ApplicantDialog', {
    attrs: {
      "visible": _vm.showEditDialog,
      "applicant": _vm.selectedApplicant
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onApplicantSave
    }
  })], 1), _vm._ssrNode(" "), _c('client-only', [_c('ApplicantViewDialog', {
    attrs: {
      "visible": _vm.showViewDialog,
      "applicant": _vm.selectedApplicant
    },
    on: {
      "close": _vm.closeViewDialog
    }
  })], 1), _vm._ssrNode(" "), _c('client-only', [_c('StatusUpdateDialog', {
    attrs: {
      "visible": _vm.showStatusDialog,
      "applicant": _vm.selectedApplicant,
      "action": _vm.statusAction
    },
    on: {
      "close": _vm.closeStatusDialog,
      "confirm": _vm.onStatusUpdate
    }
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-34eb0fc4><div class=\"loading-spinner\" data-v-34eb0fc4><i class=\"fas fa-spinner fa-spin\" data-v-34eb0fc4></i> <p data-v-34eb0fc4>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/applicants/index.vue?vue&type=template&id=34eb0fc4&scoped=true&

// EXTERNAL MODULE: ./components/applicants/ApplicantDialog/index.vue + 4 modules
var ApplicantDialog = __webpack_require__(765);

// EXTERNAL MODULE: ./components/applicants/ApplicantViewDialog/index.vue + 4 modules
var ApplicantViewDialog = __webpack_require__(766);

// EXTERNAL MODULE: ./components/applicants/StatusUpdateDialog/index.vue + 4 modules
var StatusUpdateDialog = __webpack_require__(767);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/applicants/index.vue?vue&type=script&lang=js&



/* harmony default export */ var applicantsvue_type_script_lang_js_ = ({
  name: 'ApplicantSummary',
  components: {
    ApplicantDialog: ApplicantDialog["default"],
    ApplicantViewDialog: ApplicantViewDialog["default"],
    StatusUpdateDialog: StatusUpdateDialog["default"]
  },
  middleware: 'auths',
  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      showStatusDialog: false,
      selectedApplicant: null,
      statusAction: '',
      // 'approve' or 'reject'

      // Data arrays
      applicants: [],
      filteredApplicants: [],
      // Loading states
      loading: false,
      // Filters
      filters: {
        search: '',
        gender: '',
        status: '',
        hasPassport: '',
        chineseLanguageLevel: '',
        minAge: '',
        maxAge: ''
      },
      // Sorting
      sort: {
        field: 'applicationDate',
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
        male: {
          count: 0,
          percentage: 0,
          quota: 0
        },
        female: {
          count: 0,
          percentage: 0,
          quota: 0
        },
        pending: {
          count: 0
        },
        approved: {
          count: 0
        },
        rejected: {
          count: 0
        },
        eligible: {
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
    paginatedApplicants() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
      const end = start + this.pagination.perPage;
      return this.filteredApplicants.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredApplicants.length / this.pagination.perPage);
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      const end = Math.min(start + this.pagination.perPage - 1, this.filteredApplicants.length);
      return {
        start,
        end,
        total: this.filteredApplicants.length
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
    this.fetchApplicants();
  },
  methods: {
    // Data Loading Methods
    async fetchApplicants() {
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
        } = await this.$axios.get('/api/applicants', {
          params
        });
        if (data && data.success) {
          this.applicants = data.data.applicants || [];
        } else {
          this.applicants = [];
        }
        this.applyFilters();
        this.calculateSummaryStats();
      } catch (error) {
        console.error('Error fetching applicants:', error);
        this.showToast('Error loading applicant data', 'error');
        this.applicants = [];
      } finally {
        this.loading = false;
      }
    },
    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedApplicant = null;
      this.showEditDialog = true;
    },
    async editApplicant(applicant) {
      this.selectedApplicant = applicant;
      this.showEditDialog = true;
    },
    viewApplicant(applicant) {
      this.selectedApplicant = applicant;
      this.showViewDialog = true;
    },
    approveApplicant(applicant) {
      this.selectedApplicant = applicant;
      this.statusAction = 'approve';
      this.showStatusDialog = true;
    },
    rejectApplicant(applicant) {
      this.selectedApplicant = applicant;
      this.statusAction = 'reject';
      this.showStatusDialog = true;
    },
    closeEditDialog() {
      this.showEditDialog = false;
      this.selectedApplicant = null;
    },
    closeViewDialog() {
      this.showViewDialog = false;
      this.selectedApplicant = null;
    },
    closeStatusDialog() {
      this.showStatusDialog = false;
      this.selectedApplicant = null;
      this.statusAction = '';
    },
    // Save Handler
    async onApplicantSave(applicantData) {
      try {
        this.loading = true;
        let response;
        if (this.selectedApplicant && this.selectedApplicant.id) {
          response = await this.$axios.put(`/api/applicants/${this.selectedApplicant.id}`, applicantData);
        } else {
          response = await this.$axios.post('/api/applicants', applicantData);
        }
        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success');
          this.closeEditDialog();
          await this.fetchApplicants();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Save failed');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving applicant:', error);
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
        const response = await this.$axios.patch(`/api/applicants/${this.selectedApplicant.id}/status`, statusData);
        if (response.data && response.data.success) {
          this.showToast('ອັບເດດສະຖານະສຳເລັດແລ້ວ', 'success');
          this.closeStatusDialog();
          await this.fetchApplicants();
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
      let filtered = [...this.applicants];

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase();
        filtered = filtered.filter(applicant => applicant.firstName.toLowerCase().includes(search) || applicant.lastName.toLowerCase().includes(search) || applicant.phone.includes(search) || applicant.email && applicant.email.toLowerCase().includes(search));
      }

      // Gender filter
      if (this.filters.gender) {
        filtered = filtered.filter(applicant => applicant.gender === this.filters.gender);
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(applicant => applicant.status === this.filters.status);
      }

      // Passport filter
      if (this.filters.hasPassport !== '') {
        const hasPassport = this.filters.hasPassport === 'true';
        filtered = filtered.filter(applicant => applicant.hasPassport === hasPassport);
      }

      // Chinese language filter
      if (this.filters.chineseLanguageLevel) {
        filtered = filtered.filter(applicant => applicant.chineseLanguageLevel === this.filters.chineseLanguageLevel);
      }

      // Age range filter
      if (this.filters.minAge || this.filters.maxAge) {
        filtered = filtered.filter(applicant => {
          const age = this.calculateAge(applicant.dateOfBirth);
          const minAge = this.filters.minAge || 0;
          const maxAge = this.filters.maxAge || 100;
          return age >= minAge && age <= maxAge;
        });
      }
      this.filteredApplicants = filtered;
      this.sortData();
      this.pagination.currentPage = 1;
      this.calculateSummaryStats();
    },
    resetFilters() {
      this.filters = {
        search: '',
        gender: '',
        status: '',
        hasPassport: '',
        chineseLanguageLevel: '',
        minAge: '',
        maxAge: ''
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
      this.filteredApplicants.sort((a, b) => {
        let aVal = a[this.sort.field];
        let bVal = b[this.sort.field];

        // Special handling for calculated age
        if (this.sort.field === 'dateOfBirth') {
          aVal = this.calculateAge(a.dateOfBirth);
          bVal = this.calculateAge(b.dateOfBirth);
        }
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
      const total = this.filteredApplicants.length;
      const male = this.filteredApplicants.filter(a => a.gender === 'male').length;
      const female = this.filteredApplicants.filter(a => a.gender === 'female').length;
      const pending = this.filteredApplicants.filter(a => a.status === 'pending').length;
      const approved = this.filteredApplicants.filter(a => a.status === 'approved').length;
      const rejected = this.filteredApplicants.filter(a => a.status === 'rejected').length;

      // Calculate eligible applicants (based on requirements)
      const eligible = this.filteredApplicants.filter(applicant => {
        const age = this.calculateAge(applicant.dateOfBirth);
        return age >= 18 && age <= 32 && applicant.hasPassport && applicant.healthStatus === 'good' && applicant.eyesightGood && !applicant.hasVisibleTattoos;
      }).length;
      this.summaryStats = {
        total: {
          count: total
        },
        male: {
          count: male,
          percentage: total > 0 ? Math.round(male / total * 100) : 0,
          quota: Math.min(male, 30)
        },
        female: {
          count: female,
          percentage: total > 0 ? Math.round(female / total * 100) : 0,
          quota: Math.min(female, 70)
        },
        pending: {
          count: pending
        },
        approved: {
          count: approved
        },
        rejected: {
          count: rejected
        },
        eligible: {
          count: eligible,
          percentage: total > 0 ? Math.round(eligible / total * 100) : 0
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
      const csvData = this.convertToCSV(this.filteredApplicants);
      this.downloadCSV(csvData, 'applicants-summary.csv');
    },
    convertToCSV(data) {
      const headers = ['ID', 'First Name', 'Last Name', 'Gender', 'Date of Birth', 'Age', 'Phone', 'Email', 'Has Passport', 'Health Status', 'Eyesight Good', 'Chinese Language', 'Has Tattoos', 'Status', 'Application Date'];
      const csvContent = [headers.join(','), ...data.map(row => [row.id, row.firstName, row.lastName, row.gender, row.dateOfBirth, this.calculateAge(row.dateOfBirth), row.phone, row.email || '', row.hasPassport ? 'Yes' : 'No', row.healthStatus, row.eyesightGood ? 'Yes' : 'No', row.chineseLanguageLevel, row.hasVisibleTattoos ? 'Yes' : 'No', row.status, row.applicationDate].join(','))].join('\n');
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
    getFullName(applicant) {
      return `${applicant.firstName} ${applicant.lastName}`;
    },
    calculateAge(dateOfBirth) {
      if (!dateOfBirth) return 0;
      const today = new Date();
      const birthDate = new Date(dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ';
    },
    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        rejected: 'ປະຕິເສດ'
      };
      return statusLabels[status] || status;
    },
    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ມີ',
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
// CONCATENATED MODULE: ./pages/admin/applicants/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_applicantsvue_type_script_lang_js_ = (applicantsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/applicants/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(817)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_applicantsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "34eb0fc4",
  "624c7d16"
  
)

/* harmony default export */ var applicants = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(566);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("703fe354", content, true, context)
};

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(568);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1e35c214", content, true, context)
};

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(570);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a1b77eb6", content, true, context)
};

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-239655dc]{align-items:center;animation:fadeIn-239655dc .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-239655dc{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-239655dc]{animation:slideIn-239655dc .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow:hidden;width:95%}@keyframes slideIn-239655dc{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-239655dc]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-239655dc]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-239655dc]{font-size:20px;opacity:.9}.modal-title[data-v-239655dc]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-239655dc]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-239655dc]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-239655dc]{max-height:60vh;overflow-y:auto;padding:24px}.form-grid[data-v-239655dc]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-239655dc]{margin-bottom:0}.form-group.full-width[data-v-239655dc]{grid-column:1/-1}.section-header[data-v-239655dc]{border-bottom:2px solid #e9ecef;margin:24px 0 16px;padding-bottom:12px}.section-header h4[data-v-239655dc]{align-items:center;color:#495057;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header i[data-v-239655dc]{color:#667eea}.form-label[data-v-239655dc]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-239655dc]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-239655dc]{color:#6b7280;font-size:12px}.form-control[data-v-239655dc]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-239655dc]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-239655dc]{border-color:#e74c3c}.invalid-feedback[data-v-239655dc]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.custom-select-wrapper[data-v-239655dc]{position:relative}.custom-select[data-v-239655dc]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-239655dc]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.gender-options[data-v-239655dc]{display:flex;gap:20px;margin-top:8px}.checkbox-option[data-v-239655dc],.radio-option[data-v-239655dc]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option input[type=checkbox][data-v-239655dc],.radio-option input[type=radio][data-v-239655dc]{margin:0}.checkbox-label[data-v-239655dc],.radio-label[data-v-239655dc]{font-weight:500}.checkbox-group[data-v-239655dc]{margin-top:8px}.field-hint[data-v-239655dc]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.error[data-v-239655dc]{color:#e74c3c}.field-hint.warning[data-v-239655dc]{color:#f39c12}.field-hint.info[data-v-239655dc]{color:#3b82f6}.field-hint.success[data-v-239655dc]{color:#28a745}.text-counter[data-v-239655dc]{color:#9ca3af;font-size:11px;margin-left:auto}.eligibility-summary[data-v-239655dc]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-top:16px;padding:20px}.eligibility-summary h5[data-v-239655dc]{align-items:center;color:#1e293b;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.eligibility-summary h5 i[data-v-239655dc]{color:#3b82f6}.eligibility-items[data-v-239655dc]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:16px}.eligibility-item[data-v-239655dc]{align-items:center;background:hsla(0,0%,100%,.7);border:1px solid #e2e8f0;border-radius:6px;color:#64748b;display:flex;font-size:13px;gap:8px;padding:8px 12px;transition:all .2s ease}.eligibility-item.valid[data-v-239655dc]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.eligibility-item.valid i[data-v-239655dc]{color:#22c55e}.eligibility-item:not(.valid) i[data-v-239655dc]{color:#ef4444}.eligibility-item.bonus[data-v-239655dc]{background:rgba(251,191,36,.1);border-color:#fbbf24;color:#d97706}.eligibility-item.bonus i[data-v-239655dc]{color:#fbbf24}.eligibility-result[data-v-239655dc]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:8px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;justify-content:center;padding:12px 16px;text-align:center}.eligibility-result.eligible[data-v-239655dc]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.eligibility-result i[data-v-239655dc]{font-size:16px}.form-errors[data-v-239655dc]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-239655dc]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-239655dc]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-239655dc]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-239655dc]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-239655dc]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-239655dc]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-239655dc]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-239655dc]{background:#6c757d;color:#fff}.btn[data-v-239655dc]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-239655dc]{animation:spin-239655dc 1s linear infinite}@keyframes spin-239655dc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.enhanced-dialog[data-v-239655dc]{margin:10px;width:98%}.form-grid[data-v-239655dc]{grid-template-columns:1fr}.gender-options[data-v-239655dc]{flex-direction:column;gap:12px}.eligibility-items[data-v-239655dc]{grid-template-columns:1fr}.modal-body[data-v-239655dc],.modal-header[data-v-239655dc]{padding:16px}.enhanced-footer[data-v-239655dc]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-239655dc]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-13345444]{align-items:center;animation:fadeIn-13345444 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-13345444{0%{opacity:0}to{opacity:1}}.view-dialog[data-v-13345444]{animation:slideIn-13345444 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1000px;overflow:hidden;width:95%}@keyframes slideIn-13345444{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-13345444]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-13345444]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-13345444]{font-size:20px;opacity:.9}.modal-title[data-v-13345444]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-13345444]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-13345444]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-13345444]{max-height:70vh;overflow-y:auto;padding:24px}.empty-state[data-v-13345444]{align-items:center;color:#6b7280;display:flex;flex-direction:column;justify-content:center;padding:60px 40px}.empty-state i[data-v-13345444]{color:#d1d5db;font-size:48px;margin-bottom:16px}.empty-state p[data-v-13345444]{font-size:16px;margin:0}.applicant-header[data-v-13345444]{align-items:center;background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;display:flex;margin-bottom:24px;padding:24px}.applicant-avatar[data-v-13345444]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:40px;height:80px;justify-content:center;margin-right:24px;width:80px}.applicant-basic-info[data-v-13345444]{flex:1}.applicant-name[data-v-13345444]{color:#1e293b;font-size:24px;font-weight:700;margin:0 0 8px}.applicant-meta[data-v-13345444]{align-items:center;display:flex;gap:16px;margin-bottom:12px}.application-date[data-v-13345444]{color:#64748b;font-size:14px}.eligibility-status[data-v-13345444]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:20px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;padding:8px 16px}.eligibility-status.eligible[data-v-13345444]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.detail-sections[data-v-13345444]{display:flex;flex-direction:column;gap:24px}.detail-section[data-v-13345444]{background:#fff;border:2px solid #f1f5f9;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:20px}.detail-section.eligibility-summary[data-v-13345444]{background:linear-gradient(135deg,#fef3c7,#fde68a);border-color:#f59e0b}.section-title[data-v-13345444]{align-items:center;border-bottom:2px solid #e5e7eb;color:#374151;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px;padding-bottom:8px}.section-title i[data-v-13345444]{color:#667eea}.detail-grid[data-v-13345444]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.detail-item[data-v-13345444]{display:flex;flex-direction:column;gap:6px}.detail-item.full-width[data-v-13345444]{grid-column:1/-1}.detail-label[data-v-13345444]{align-items:center;color:#6b7280;display:flex;font-size:12px;font-weight:600;gap:6px;letter-spacing:.5px;text-transform:uppercase}.detail-label i[data-v-13345444]{color:#9ca3af;width:12px}.detail-value[data-v-13345444]{color:#374151;font-size:14px;font-weight:500}.age-info[data-v-13345444]{color:#6b7280;font-size:13px}.email-link[data-v-13345444],.phone-link[data-v-13345444]{color:#3b82f6;-webkit-text-decoration:none;text-decoration:none;transition:color .2s}.email-link[data-v-13345444]:hover,.phone-link[data-v-13345444]:hover{color:#1d4ed8;-webkit-text-decoration:underline;text-decoration:underline}.qualifications-grid[data-v-13345444]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}.qualification-card[data-v-13345444]{align-items:center;background:rgba(239,68,68,.05);border:2px solid #fecaca;border-radius:10px;display:flex;padding:16px;transition:all .3s ease}.qualification-card.valid[data-v-13345444]{background:rgba(34,197,94,.05);border-color:#bbf7d0}.qualification-card.bonus[data-v-13345444]{background:rgba(251,191,36,.05);border-color:#fde68a}.qualification-icon[data-v-13345444]{align-items:center;background:rgba(239,68,68,.1);border-radius:50%;color:#dc2626;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;margin-right:12px;width:40px}.qualification-card.valid .qualification-icon[data-v-13345444]{background:rgba(34,197,94,.1);color:#15803d}.qualification-card.bonus .qualification-icon[data-v-13345444]{background:rgba(251,191,36,.1);color:#d97706}.qualification-content[data-v-13345444]{flex:1}.qualification-title[data-v-13345444]{color:#374151;font-size:14px;font-weight:600;margin-bottom:2px}.qualification-status[data-v-13345444]{color:#6b7280;font-size:12px}.qualification-check[data-v-13345444]{align-items:center;background:rgba(239,68,68,.1);border-radius:50%;color:#dc2626;display:flex;font-size:12px;height:24px;justify-content:center;width:24px}.qualification-card.valid .qualification-check[data-v-13345444]{background:rgba(34,197,94,.1);color:#15803d}.qualification-card.bonus .qualification-check[data-v-13345444]{background:rgba(251,191,36,.1);color:#d97706}.overall-eligibility[data-v-13345444]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:12px;display:flex;padding:20px}.overall-eligibility.eligible[data-v-13345444]{background:rgba(34,197,94,.1);border-color:#22c55e}.eligibility-icon[data-v-13345444]{align-items:center;background:rgba(239,68,68,.2);border-radius:50%;color:#dc2626;display:flex;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.overall-eligibility.eligible .eligibility-icon[data-v-13345444]{background:rgba(34,197,94,.2);color:#15803d}.eligibility-content[data-v-13345444]{flex:1}.eligibility-title[data-v-13345444]{color:#dc2626;font-size:18px;font-weight:700;margin-bottom:4px}.overall-eligibility.eligible .eligibility-title[data-v-13345444]{color:#15803d}.eligibility-description[data-v-13345444]{color:#6b7280;font-size:14px;line-height:1.5}.bonus-note[data-v-13345444]{color:#d97706;font-weight:600}.status-badge[data-v-13345444]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.pending[data-v-13345444]{background-color:#fef3c7;color:#d97706}.status-badge.approved[data-v-13345444]{background-color:#d1fae5;color:#065f46}.status-badge.rejected[data-v-13345444]{background-color:#fee2e2;color:#dc2626}.gender-badge[data-v-13345444]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 8px;text-transform:uppercase}.gender-badge.male[data-v-13345444]{background-color:#dbeafe;color:#3b82f6}.gender-badge.female[data-v-13345444]{background-color:#fce7f3;color:#ec4899}.modal-footer[data-v-13345444]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-13345444]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-13345444]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-primary[data-v-13345444]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-13345444]{background:#6c757d;color:#fff}@media (max-width:768px){.view-dialog[data-v-13345444]{margin:10px;width:98%}.applicant-header[data-v-13345444]{flex-direction:column;gap:16px;text-align:center}.applicant-avatar[data-v-13345444]{margin-right:0}.applicant-meta[data-v-13345444]{flex-wrap:wrap;justify-content:center}.detail-grid[data-v-13345444],.qualifications-grid[data-v-13345444]{grid-template-columns:1fr}.overall-eligibility[data-v-13345444]{flex-direction:column;gap:16px;text-align:center}.eligibility-icon[data-v-13345444]{margin-right:0}.modal-body[data-v-13345444],.modal-header[data-v-13345444]{padding:16px}.modal-footer[data-v-13345444]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-13345444]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_566d4aa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(491);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_566d4aa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_566d4aa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_566d4aa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_566d4aa8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-566d4aa8]{align-items:center;animation:fadeIn-566d4aa8 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-566d4aa8{0%{opacity:0}to{opacity:1}}.status-dialog[data-v-566d4aa8]{animation:slideIn-566d4aa8 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:700px;overflow:hidden;width:95%}@keyframes slideIn-566d4aa8{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-566d4aa8]{align-items:center;border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-header.approve-header[data-v-566d4aa8]{background:linear-gradient(135deg,#10b981,#059669)}.modal-header.reject-header[data-v-566d4aa8]{background:linear-gradient(135deg,#ef4444,#dc2626)}.modal-title-section[data-v-566d4aa8]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-566d4aa8]{font-size:20px;opacity:.9}.modal-title[data-v-566d4aa8]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-566d4aa8]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-566d4aa8]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-566d4aa8]{max-height:60vh;overflow-y:auto;padding:24px}.empty-state[data-v-566d4aa8]{align-items:center;color:#6b7280;display:flex;flex-direction:column;justify-content:center;padding:60px 40px}.empty-state i[data-v-566d4aa8]{color:#d1d5db;font-size:48px;margin-bottom:16px}.empty-state p[data-v-566d4aa8]{font-size:16px;margin:0}.applicant-summary[data-v-566d4aa8]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-bottom:24px;padding:20px}.applicant-info[data-v-566d4aa8]{align-items:center;display:flex;gap:16px}.applicant-avatar[data-v-566d4aa8]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:30px;height:60px;justify-content:center;width:60px}.applicant-details[data-v-566d4aa8]{flex:1}.applicant-name[data-v-566d4aa8]{color:#1e293b;font-size:18px;font-weight:700;margin:0 0 8px}.applicant-meta[data-v-566d4aa8]{display:flex;flex-wrap:wrap;gap:16px;margin-bottom:8px}.meta-item[data-v-566d4aa8]{align-items:center;color:#64748b;display:flex;font-size:13px;gap:4px}.meta-item i[data-v-566d4aa8]{color:#94a3b8;width:12px}.current-status[data-v-566d4aa8]{color:#475569;font-size:14px;font-weight:500}.action-description[data-v-566d4aa8]{align-items:center;border:2px solid;border-radius:12px;display:flex;margin-bottom:24px;padding:20px}.action-description.approve-action[data-v-566d4aa8]{background:rgba(16,185,129,.1);border-color:#10b981}.action-description.reject-action[data-v-566d4aa8]{background:rgba(239,68,68,.1);border-color:#ef4444}.action-icon[data-v-566d4aa8]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:20px;height:50px;justify-content:center;margin-right:16px;width:50px}.approve-action .action-icon[data-v-566d4aa8]{background:rgba(16,185,129,.2);color:#059669}.reject-action .action-icon[data-v-566d4aa8]{background:rgba(239,68,68,.2);color:#dc2626}.action-content[data-v-566d4aa8]{flex:1}.action-title[data-v-566d4aa8]{color:#374151;font-size:16px;font-weight:600;margin:0 0 4px}.action-message[data-v-566d4aa8]{color:#6b7280;font-size:14px;line-height:1.4;margin:0}.eligibility-check[data-v-566d4aa8]{background:#fff;border:2px solid #e5e7eb;border-radius:12px;margin-bottom:24px;padding:20px}.eligibility-title[data-v-566d4aa8]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin:0 0 16px}.eligibility-title i[data-v-566d4aa8]{color:#3b82f6}.eligibility-items[data-v-566d4aa8]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin-bottom:16px}.eligibility-item[data-v-566d4aa8]{align-items:center;background:rgba(239,68,68,.05);border:1px solid #fecaca;border-radius:6px;color:#374151;display:flex;font-size:13px;gap:8px;padding:8px 12px}.eligibility-item.valid[data-v-566d4aa8]{background:rgba(34,197,94,.05);border-color:#bbf7d0}.eligibility-item.bonus[data-v-566d4aa8]{background:rgba(251,191,36,.05);border-color:#fde68a}.eligibility-item i[data-v-566d4aa8]{color:#ef4444;flex-shrink:0;width:16px}.eligibility-item.valid i[data-v-566d4aa8]{color:#22c55e}.eligibility-item.bonus i[data-v-566d4aa8]{color:#f59e0b}.eligibility-result[data-v-566d4aa8]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:8px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;justify-content:center;padding:12px 16px;text-align:center}.eligibility-result.eligible[data-v-566d4aa8]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.quota-check[data-v-566d4aa8]{background:#fff;border:2px solid #e5e7eb;border-radius:12px;margin-bottom:24px;padding:20px}.quota-title[data-v-566d4aa8]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin:0 0 16px}.quota-title i[data-v-566d4aa8]{color:#8b5cf6}.quota-item[data-v-566d4aa8]{align-items:center;background:rgba(139,92,246,.05);border:2px solid #ede9fe;border-radius:10px;display:flex;padding:16px}.quota-item.quota-full[data-v-566d4aa8]{background:rgba(239,68,68,.05);border-color:#fecaca}.quota-icon[data-v-566d4aa8]{align-items:center;background:rgba(139,92,246,.1);border-radius:50%;color:#8b5cf6;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;margin-right:16px;width:40px}.quota-item.quota-full .quota-icon[data-v-566d4aa8]{background:rgba(239,68,68,.1);color:#dc2626}.quota-content[data-v-566d4aa8]{flex:1}.quota-text[data-v-566d4aa8]{color:#374151;font-size:14px;font-weight:600;margin-bottom:4px}.quota-numbers[data-v-566d4aa8]{color:#8b5cf6;font-family:monospace}.quota-item.quota-full .quota-numbers[data-v-566d4aa8]{color:#dc2626}.quota-status[data-v-566d4aa8]{font-size:12px;font-weight:500}.quota-status.quota-ok[data-v-566d4aa8]{color:#059669}.quota-status.quota-exceeded[data-v-566d4aa8]{color:#dc2626}.notes-section[data-v-566d4aa8]{margin-bottom:24px}.form-label[data-v-566d4aa8]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-566d4aa8]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-566d4aa8]{color:#6b7280;font-size:12px}.required-note[data-v-566d4aa8]{color:#dc2626;font-size:12px;font-style:italic;font-weight:400}.form-control[data-v-566d4aa8]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;resize:vertical;transition:all .2s ease;width:100%}.form-control[data-v-566d4aa8]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-566d4aa8]{border-color:#e74c3c}.invalid-feedback[data-v-566d4aa8]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.field-hint[data-v-566d4aa8]{display:flex;font-size:12px;justify-content:flex-end;margin-top:6px}.text-counter[data-v-566d4aa8]{color:#9ca3af;font-size:11px}.warning-section[data-v-566d4aa8]{background:rgba(251,191,36,.1);border:2px solid #fbbf24;border-radius:12px;margin-bottom:24px;padding:16px}.warning-content[data-v-566d4aa8]{align-items:flex-start;color:#92400e;display:flex;gap:12px}.warning-content i[data-v-566d4aa8]{color:#f59e0b;flex-shrink:0;font-size:18px;margin-top:2px}.confirmation-section[data-v-566d4aa8]{background:rgba(239,68,68,.05);border:2px solid #fecaca;border-radius:12px;margin-bottom:24px;padding:16px}.confirmation-checkbox[data-v-566d4aa8]{align-items:flex-start;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:12px;line-height:1.4}.confirmation-checkbox input[type=checkbox][data-v-566d4aa8]{flex-shrink:0;margin:2px 0 0}.checkbox-label[data-v-566d4aa8]{font-weight:500}.status-badge[data-v-566d4aa8]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.pending[data-v-566d4aa8]{background-color:#fef3c7;color:#d97706}.status-badge.approved[data-v-566d4aa8]{background-color:#d1fae5;color:#065f46}.status-badge.rejected[data-v-566d4aa8]{background-color:#fee2e2;color:#dc2626}.form-errors[data-v-566d4aa8]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-566d4aa8]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-566d4aa8]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.modal-footer[data-v-566d4aa8]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-566d4aa8]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-566d4aa8]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-secondary[data-v-566d4aa8]{background:#6c757d;color:#fff}.btn-success[data-v-566d4aa8]{background:linear-gradient(135deg,#10b981,#059669);color:#fff}.btn-danger[data-v-566d4aa8]{background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff}.btn[data-v-566d4aa8]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-566d4aa8]{animation:spin-566d4aa8 1s linear infinite}@keyframes spin-566d4aa8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.status-dialog[data-v-566d4aa8]{margin:10px;width:98%}.applicant-info[data-v-566d4aa8]{flex-direction:column;gap:12px;text-align:center}.applicant-meta[data-v-566d4aa8]{flex-wrap:wrap;justify-content:center}.action-description[data-v-566d4aa8]{flex-direction:column;gap:16px;text-align:center}.action-icon[data-v-566d4aa8]{margin-right:0}.eligibility-items[data-v-566d4aa8]{grid-template-columns:1fr}.modal-body[data-v-566d4aa8],.modal-header[data-v-566d4aa8]{padding:16px}.modal-footer[data-v-566d4aa8]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-566d4aa8]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(818);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("566be1eb", content, true, context)
};

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=239655dc&scoped=true&
var render = function render() {
  var _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-239655dc>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-239655dc><div class=\"modal-title-section\" data-v-239655dc><i class=\"fas fa-user-plus modal-icon\" data-v-239655dc></i> <h5 class=\"modal-title\" data-v-239655dc>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຂໍ້ມູນຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກໃໝ່') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-239655dc><i class=\"fas fa-times\" data-v-239655dc></i></button></div> "), _vm._ssrNode("<form data-v-239655dc>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-239655dc>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-239655dc>", "</div>", [_vm._ssrNode("<div class=\"section-header full-width\" data-v-239655dc><h4 data-v-239655dc><i class=\"fas fa-user\" data-v-239655dc></i>\n              ຂໍ້ມູນສ່ວນຕົວ\n            </h4></div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-user\" data-v-239655dc></i>\n              ຊື່\n            </label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.firstName
  }) + " data-v-239655dc> " + (_vm.errors.firstName ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.firstName) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-user\" data-v-239655dc></i>\n              ນາມສະກຸນ\n            </label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.lastName
  }) + " data-v-239655dc> " + (_vm.errors.lastName ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.lastName) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-venus-mars\" data-v-239655dc></i>\n              ເພດ\n            </label> <div class=\"gender-options\" data-v-239655dc><label class=\"radio-option\" data-v-239655dc><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-239655dc> <span class=\"radio-label\" data-v-239655dc>ຊາຍ</span></label> <label class=\"radio-option\" data-v-239655dc><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-239655dc> <span class=\"radio-label\" data-v-239655dc>ຍິງ</span></label></div> " + (_vm.errors.gender ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.gender) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>\n              ໂຄຕ້າ: ຊາຍ 30 ຄົນ, ຍິງ 70 ຄົນ\n            </div></div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-calendar\" data-v-239655dc></i>\n              ວັນເດືອນປີເກີດ\n            </label> <input type=\"date\"" + _vm._ssrAttr("max", _vm.maxBirthDate) + _vm._ssrAttr("min", _vm.minBirthDate) + " required=\"required\"" + _vm._ssrAttr("value", _vm.formData.dateOfBirth) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dateOfBirth
  }) + " data-v-239655dc> " + (_vm.errors.dateOfBirth ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.dateOfBirth) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.formData.dateOfBirth ? "<div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>" + _vm._ssrEscape("\n              ອາຍຸ: " + _vm._s(_vm.calculatedAge) + " ປີ\n              " + _vm._s(_vm.calculatedAge >= 18 && _vm.calculatedAge <= 32 ? '✓ ອາຍຸເໝາະສົມ' : '⚠️ ອາຍຸບໍ່ຖືກຕ້ອງ (18-32 ປີ)') + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"section-header full-width\" data-v-239655dc><h4 data-v-239655dc><i class=\"fas fa-address-book\" data-v-239655dc></i>\n              ຂໍ້ມູນການຕິດຕໍ່\n            </h4></div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-phone\" data-v-239655dc></i>\n              ເບີໂທລະສັບ\n            </label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.phone
  }) + " data-v-239655dc> " + (_vm.errors.phone ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.phone) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label\" data-v-239655dc><i class=\"fas fa-envelope\" data-v-239655dc></i>\n              ອີເມວ\n            </label> <input type=\"email\" placeholder=\"example@email.com\"" + _vm._ssrAttr("value", _vm.formData.email) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.email
  }) + " data-v-239655dc> " + (_vm.errors.email ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.email) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group full-width\" data-v-239655dc><label class=\"form-label\" data-v-239655dc><i class=\"fas fa-map-marker-alt\" data-v-239655dc></i>\n              ທີ່ຢູ່\n            </label> <textarea rows=\"2\" placeholder=\"ບ້ານ, ເມືອງ, ແຂວງ...\" class=\"form-control\" data-v-239655dc>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"section-header full-width\" data-v-239655dc><h4 data-v-239655dc><i class=\"fas fa-clipboard-check\" data-v-239655dc></i>\n              ເງື່ອນໄຂຄຸນສົມບັດ\n            </h4></div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-passport\" data-v-239655dc></i>\n              ມີໜັງສືເດີນທາງ\n            </label> <div class=\"checkbox-group\" data-v-239655dc><label class=\"checkbox-option\" data-v-239655dc><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.hasPassport) ? _vm._i(_vm.formData.hasPassport, null) > -1 : _vm.formData.hasPassport) + " data-v-239655dc> <span class=\"checkbox-label\" data-v-239655dc>ມີໜັງສືເດີນທາງ</span></label></div> <div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>\n              ຈຳເປັນຕ້ອງມີໜັງສືເດີນທາງ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-239655dc>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-heartbeat\" data-v-239655dc></i>\n              ສະຖານະສຸຂະພາບ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-239655dc>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.healthStatus,
      expression: "formData.healthStatus"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.healthStatus
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
        _vm.$set(_vm.formData, "healthStatus", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະຖານະສຸຂະພາບ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "good"
    }
  }, [_vm._v("ດີ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fair"
    }
  }, [_vm._v("ປານກາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "poor"
    }
  }, [_vm._v("ບໍ່ດີ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-239655dc><i class=\"fas fa-chevron-down\" data-v-239655dc></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.healthStatus ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.healthStatus) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>\n              ສຸຂະພາບແຂງແຮງ ບໍ່ຕຸຍເກີນໄປ\n            </div>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-eye\" data-v-239655dc></i>\n              ສາຍຕາ\n            </label> <div class=\"checkbox-group\" data-v-239655dc><label class=\"checkbox-option\" data-v-239655dc><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.eyesightGood) ? _vm._i(_vm.formData.eyesightGood, null) > -1 : _vm.formData.eyesightGood) + " data-v-239655dc> <span class=\"checkbox-label\" data-v-239655dc>ສາຍຕາດີ</span></label></div> <div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>\n              ຈະມີການກວດສາຍຕາກ່ອນ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-239655dc>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-239655dc><i class=\"fas fa-language\" data-v-239655dc></i>\n              ລະດັບພາສາຈີນ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-239655dc>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.chineseLanguageLevel,
      expression: "formData.chineseLanguageLevel"
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
        _vm.$set(_vm.formData, "chineseLanguageLevel", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "none"
    }
  }, [_vm._v("ບໍ່ມີ")]), _vm._v(" "), _c('option', {
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
  }, [_vm._v("ສູງ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-239655dc><i class=\"fas fa-chevron-down\" data-v-239655dc></i></div>")], 2), _vm._ssrNode(" <div class=\"field-hint success\" data-v-239655dc><i class=\"fas fa-star\" data-v-239655dc></i>\n              ຖ້າສາມາດສື່ສານພາສາຈີນໄດ້ພິຈາລະນາພິເສດ\n            </div>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-paint-brush\" data-v-239655dc></i>\n              ລາຍສັກ\n            </label> <div class=\"checkbox-group\" data-v-239655dc><label class=\"checkbox-option\" data-v-239655dc><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.hasVisibleTattoos) ? _vm._i(_vm.formData.hasVisibleTattoos, null) > -1 : _vm.formData.hasVisibleTattoos) + " data-v-239655dc> <span class=\"checkbox-label\" data-v-239655dc>ມີລາຍສັກນອກເສື້ອຜ້າ</span></label></div> <div class=\"field-hint warning\" data-v-239655dc><i class=\"fas fa-exclamation-triangle\" data-v-239655dc></i>\n              ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ\n            </div></div> <div class=\"form-group full-width\" data-v-239655dc><label class=\"form-label\" data-v-239655dc><i class=\"fas fa-sticky-note\" data-v-239655dc></i>\n              ໝາຍເຫດ\n            </label> <textarea rows=\"3\" placeholder=\"ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control\" data-v-239655dc>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-239655dc><span class=\"text-counter\" data-v-239655dc>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> <div class=\"form-group full-width\" data-v-239655dc><div class=\"eligibility-summary\" data-v-239655dc><h5 data-v-239655dc><i class=\"fas fa-clipboard-check\" data-v-239655dc></i>\n                ສະຫລຸບຄຸນສົມບັດ\n              </h5> <div class=\"eligibility-items\" data-v-239655dc><div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.isAgeValid
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.isAgeValid ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ອາຍຸ 18-32 ປີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.formData.hasPassport
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.formData.hasPassport ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ມີໜັງສືເດີນທາງ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.formData.healthStatus === 'good'
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.formData.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ສຸຂະພາບດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.formData.eyesightGood
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.formData.eyesightGood ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ສາຍຕາດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': !_vm.formData.hasVisibleTattoos
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, !_vm.formData.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ</span></div> " + (_vm.hasChineseLanguageBonus ? "<div class=\"eligibility-item bonus\" data-v-239655dc><i class=\"fas fa-star\" data-v-239655dc></i> <span data-v-239655dc>ໂບນັສພາສາຈີນ</span></div>" : "<!---->") + "</div> <div" + _vm._ssrClass("eligibility-result", {
    'eligible': _vm.isEligible
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down') + " data-v-239655dc></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.isEligible ? 'ມີຄຸນສົມບັດເໝາະສົມ' : 'ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ') + "\n              ") + "</div></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-239655dc><h6 data-v-239655dc><i class=\"fas fa-exclamation-circle\" data-v-239655dc></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-239655dc>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-239655dc>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-239655dc><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-239655dc><i class=\"fas fa-times\" data-v-239655dc></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-239655dc>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-239655dc></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-239655dc></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'Saving...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=239655dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    applicant: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      formData: {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        hasPassport: false,
        healthStatus: 'good',
        eyesightGood: true,
        chineseLanguageLevel: 'none',
        hasVisibleTattoos: false,
        notes: ''
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.applicant && this.applicant.id;
    },
    user() {
      return this.$auth.user || '';
    },
    // Age validation
    calculatedAge() {
      if (!this.formData.dateOfBirth) return 0;
      const today = new Date();
      const birthDate = new Date(this.formData.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    },
    isAgeValid() {
      return this.calculatedAge >= 18 && this.calculatedAge <= 32;
    },
    // Date range for age validation
    maxBirthDate() {
      // 18 years ago
      const date = new Date();
      date.setFullYear(date.getFullYear() - 18);
      return date.toISOString().split('T')[0];
    },
    minBirthDate() {
      // 32 years ago
      const date = new Date();
      date.setFullYear(date.getFullYear() - 32);
      return date.toISOString().split('T')[0];
    },
    // Eligibility checks
    hasChineseLanguageBonus() {
      return this.formData.chineseLanguageLevel && !['none', 'basic'].includes(this.formData.chineseLanguageLevel);
    },
    isEligible() {
      return this.isAgeValid && this.formData.hasPassport && this.formData.healthStatus === 'good' && this.formData.eyesightGood && !this.formData.hasVisibleTattoos;
    },
    // Form validation
    isFormValid() {
      return this.formData.firstName.trim() && this.formData.lastName.trim() && this.formData.gender && this.formData.dateOfBirth && this.isAgeValid && this.formData.phone.trim() && this.formData.healthStatus && this.formErrors.length === 0;
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
    applicant: {
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
      if (this.applicant && this.applicant.id) {
        // Edit mode
        this.formData = {
          firstName: this.applicant.firstName || '',
          lastName: this.applicant.lastName || '',
          gender: this.applicant.gender || '',
          dateOfBirth: this.applicant.dateOfBirth ? this.applicant.dateOfBirth.split('T')[0] : '',
          phone: this.applicant.phone || '',
          email: this.applicant.email || '',
          address: this.applicant.address || '',
          hasPassport: this.applicant.hasPassport || false,
          healthStatus: this.applicant.healthStatus || 'good',
          eyesightGood: this.applicant.eyesightGood || false,
          chineseLanguageLevel: this.applicant.chineseLanguageLevel || 'none',
          hasVisibleTattoos: this.applicant.hasVisibleTattoos || false,
          notes: this.applicant.notes || ''
        };
      } else {
        // Create mode - set defaults
        this.formData = {
          firstName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          phone: '',
          email: '',
          address: '',
          hasPassport: false,
          healthStatus: 'good',
          eyesightGood: true,
          chineseLanguageLevel: 'none',
          hasVisibleTattoos: false,
          notes: ''
        };
      }
      this.errors = {};
      this.formErrors = [];
    },
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        hasPassport: false,
        healthStatus: 'good',
        eyesightGood: true,
        chineseLanguageLevel: 'none',
        hasVisibleTattoos: false,
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
      if (!this.formData.firstName.trim()) {
        this.errors.firstName = 'ກະລຸນາໃສ່ຊື່';
        this.formErrors.push('First name is required');
      }
      if (!this.formData.lastName.trim()) {
        this.errors.lastName = 'ກະລຸນາໃສ່ນາມສະກຸນ';
        this.formErrors.push('Last name is required');
      }
      if (!this.formData.gender) {
        this.errors.gender = 'ກະລຸນາເລືອກເພດ';
        this.formErrors.push('Gender selection is required');
      }
      if (!this.formData.dateOfBirth) {
        this.errors.dateOfBirth = 'ກະລຸນາເລືອກວັນເກີດ';
        this.formErrors.push('Date of birth is required');
      } else if (!this.isAgeValid) {
        this.errors.dateOfBirth = 'ອາຍຸຕ້ອງຢູ່ລະຫວ່າງ 18-32 ປີ';
        this.formErrors.push('Age must be between 18-32 years');
      }
      if (!this.formData.phone.trim()) {
        this.errors.phone = 'ກະລຸນາໃສ່ເບີໂທລະສັບ';
        this.formErrors.push('Phone number is required');
      }
      if (this.formData.email && !this.isValidEmail(this.formData.email)) {
        this.errors.email = 'ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ';
        this.formErrors.push('Invalid email format');
      }
      if (!this.formData.healthStatus) {
        this.errors.healthStatus = 'ກະລຸນາເລືອກສະຖານະສຸຂະພາບ';
        this.formErrors.push('Health status is required');
      }
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters');
      }
      return this.formErrors.length === 0;
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    async saveApplicant() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          applicationDate: this.isEditMode ? this.applicant.applicationDate : new Date().toISOString().split('T')[0]
        };
        console.log('📤 Submitting applicant data:', submitData);

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
    }
  }
});
// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var applicants_ApplicantDialogvue_type_script_lang_js_ = (ApplicantDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(565)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "239655dc",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantViewDialog/index.vue?vue&type=template&id=13345444&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog view-dialog\" data-v-13345444><div class=\"modal-header\" data-v-13345444><div class=\"modal-title-section\" data-v-13345444><i class=\"fas fa-user-circle modal-icon\" data-v-13345444></i> <h5 class=\"modal-title\" data-v-13345444>ລາຍລະອຽດຜູ້ສະໝັກ</h5></div> <button class=\"close-btn\" data-v-13345444><i class=\"fas fa-times\" data-v-13345444></i></button></div> <div class=\"modal-body\" data-v-13345444>" + (!_vm.applicant ? "<div class=\"empty-state\" data-v-13345444><i class=\"fas fa-user-slash\" data-v-13345444></i> <p data-v-13345444>ບໍ່ພົບຂໍ້ມູນຜູ້ສະໝັກ</p></div>" : "<div class=\"applicant-details\" data-v-13345444><div class=\"applicant-header\" data-v-13345444><div class=\"applicant-avatar\" data-v-13345444><i class=\"fas fa-user-circle\" data-v-13345444></i></div> <div class=\"applicant-basic-info\" data-v-13345444><h3 class=\"applicant-name\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</h3> <div class=\"applicant-meta\" data-v-13345444><span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-13345444>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n              ") + "</span> <span class=\"application-date\" data-v-13345444>" + _vm._ssrEscape("\n                ສະໝັກເມື່ອ " + _vm._s(_vm.formatDate(_vm.applicant.applicationDate)) + "\n              ") + "</span></div> <div" + _vm._ssrClass("eligibility-status", {
    'eligible': _vm.isEligible
  }) + " data-v-13345444><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-13345444></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.isEligible ? 'ມີຄຸນສົມບັດເໝາະສົມ' : 'ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ') + "\n            ") + "</div></div></div> <div class=\"detail-sections\" data-v-13345444><div class=\"detail-section\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-user\" data-v-13345444></i>\n              ຂໍ້ມູນສ່ວນຕົວ\n            </h4> <div class=\"detail-grid\" data-v-13345444><div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-user\" data-v-13345444></i>\n                  ຊື່ເຕັມ\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</div></div> <div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-venus-mars\" data-v-13345444></i>\n                  ເພດ\n                </div> <div class=\"detail-value\" data-v-13345444><span" + _vm._ssrClass(null, ['gender-badge', _vm.applicant.gender]) + " data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatGender(_vm.applicant.gender)) + "\n                  ") + "</span></div></div> <div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-birthday-cake\" data-v-13345444></i>\n                  ວັນເກີດ / ອາຍຸ\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatDate(_vm.applicant.dateOfBirth)) + "\n                  ") + "<span class=\"age-info\" data-v-13345444>" + _vm._ssrEscape("(" + _vm._s(_vm.calculateAge()) + " ປີ)") + "</span></div></div></div></div> <div class=\"detail-section\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-address-book\" data-v-13345444></i>\n              ຂໍ້ມູນການຕິດຕໍ່\n            </h4> <div class=\"detail-grid\" data-v-13345444><div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-phone\" data-v-13345444></i>\n                  ເບີໂທລະສັບ\n                </div> <div class=\"detail-value\" data-v-13345444><a" + _vm._ssrAttr("href", `tel:${_vm.applicant.phone}`) + " class=\"phone-link\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.phone) + "\n                  ") + "</a></div></div> " + (_vm.applicant.email ? "<div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-envelope\" data-v-13345444></i>\n                  ອີເມວ\n                </div> <div class=\"detail-value\" data-v-13345444><a" + _vm._ssrAttr("href", `mailto:${_vm.applicant.email}`) + " class=\"email-link\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.email) + "\n                  ") + "</a></div></div>" : "<!---->") + " " + (_vm.applicant.address ? "<div class=\"detail-item full-width\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-map-marker-alt\" data-v-13345444></i>\n                  ທີ່ຢູ່\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.applicant.address)) + "</div></div>" : "<!---->") + "</div></div> <div class=\"detail-section\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-clipboard-check\" data-v-13345444></i>\n              ຄຸນສົມບັດ &amp; ເງື່ອນໄຂ\n            </h4> <div class=\"qualifications-grid\" data-v-13345444><div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.hasPassport
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-passport\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ໜັງສືເດີນທາງ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.hasPassport ? 'ມີ' : 'ບໍ່ມີ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, _vm.applicant.hasPassport ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.healthStatus === 'good'
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-heartbeat\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ສຸຂະພາບ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatHealthStatus(_vm.applicant.healthStatus)) + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, _vm.applicant.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.eyesightGood
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-eye\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ສາຍຕາ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.eyesightGood ? 'ດີ' : 'ບໍ່ດີ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, _vm.applicant.eyesightGood ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div> " + (_vm.hasChineseLanguageBonus ? "<div class=\"qualification-card bonus\" data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-language\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ພາສາຈີນ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatLanguageLevel(_vm.applicant.chineseLanguageLevel)) + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i class=\"fas fa-star\" data-v-13345444></i></div></div>" : "<!---->") + " <div" + _vm._ssrClass("qualification-card", {
    'valid': !_vm.applicant.hasVisibleTattoos
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-paint-brush\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ລາຍສັກ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.hasVisibleTattoos ? 'ມີລາຍສັກນອກເສື້ອຜ້າ' : 'ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, !_vm.applicant.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.isAgeValid
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-calendar\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ອາຍຸ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.calculateAge()) + " ປີ (" + _vm._s(_vm.isAgeValid ? 'ເໝາະສົມ' : 'ບໍ່ເໝາະສົມ') + ")\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, _vm.isAgeValid ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div></div></div> <div class=\"detail-section\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-file-alt\" data-v-13345444></i>\n              ຂໍ້ມູນການສະໝັກ\n            </h4> <div class=\"detail-grid\" data-v-13345444><div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-hashtag\" data-v-13345444></i>\n                  ID\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.applicant.id)) + "</div></div> <div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-calendar-plus\" data-v-13345444></i>\n                  ວັນທີສະໝັກ\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.applicant.applicationDate))) + "</div></div> <div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-info-circle\" data-v-13345444></i>\n                  ສະຖານະ\n                </div> <div class=\"detail-value\" data-v-13345444><span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n                  ") + "</span></div></div> " + (_vm.applicant.notes ? "<div class=\"detail-item full-width\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-sticky-note\" data-v-13345444></i>\n                  ໝາຍເຫດ\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.applicant.notes)) + "</div></div>" : "<!---->") + "</div></div> <div class=\"detail-section eligibility-summary\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-award\" data-v-13345444></i>\n              ສະຫລຸບຄຸນສົມບັດລວມ\n            </h4> <div" + _vm._ssrClass("overall-eligibility", {
    'eligible': _vm.isEligible
  }) + " data-v-13345444><div class=\"eligibility-icon\" data-v-13345444><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down') + " data-v-13345444></i></div> <div class=\"eligibility-content\" data-v-13345444><div class=\"eligibility-title\" data-v-13345444>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.isEligible ? 'ຜ່ານເງື່ອນໄຂທັງໝົດ' : 'ຍັງບໍ່ຜ່ານເງື່ອນໄຂ') + "\n                ") + "</div> <div class=\"eligibility-description\" data-v-13345444>" + (_vm.isEligible ? "<span data-v-13345444>\n                    ຜູ້ສະໝັກຄົນນີ້ມີຄຸນສົມບັດຄົບຖ້ວນຕາມທີ່ກຳນົດ\n                    " + (_vm.hasChineseLanguageBonus ? "<span class=\"bonus-note\" data-v-13345444>\n                      + ໂບນັສພາສາຈີນ\n                    </span>" : "<!---->") + "</span>" : "<span data-v-13345444>\n                    ຜູ້ສະໝັກຄົນນີ້ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ ກະລຸນາກວດສອບເງື່ອນໄຂຂ້າງເທິງ\n                  </span>") + "</div></div></div></div></div></div>") + "</div> <div class=\"modal-footer\" data-v-13345444><button type=\"button\" class=\"btn btn-secondary\" data-v-13345444><i class=\"fas fa-times\" data-v-13345444></i>\n        ປິດ\n      </button> " + (_vm.applicant && _vm.applicant.status === 'pending' ? "<button type=\"button\" class=\"btn btn-primary\" data-v-13345444><i class=\"fas fa-edit\" data-v-13345444></i>\n        ແກ້ໄຂ\n      </button>" : "<!---->") + "</div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantViewDialog/index.vue?vue&type=template&id=13345444&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantViewDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantViewDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    applicant: {
      type: Object,
      default: null
    }
  },
  computed: {
    // Age validation
    isAgeValid() {
      const age = this.calculateAge();
      return age >= 18 && age <= 32;
    },
    // Chinese language bonus
    hasChineseLanguageBonus() {
      return this.applicant && this.applicant.chineseLanguageLevel && !['none', 'basic'].includes(this.applicant.chineseLanguageLevel);
    },
    // Overall eligibility
    isEligible() {
      if (!this.applicant) return false;
      return this.isAgeValid && this.applicant.hasPassport && this.applicant.healthStatus === 'good' && this.applicant.eyesightGood && !this.applicant.hasVisibleTattoos;
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    editApplicant() {
      this.$emit('edit', this.applicant);
      this.closeDialog();
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    getFullName() {
      if (!this.applicant) return '';
      return `${this.applicant.firstName} ${this.applicant.lastName}`;
    },
    calculateAge() {
      if (!this.applicant || !this.applicant.dateOfBirth) return 0;
      const today = new Date();
      const birthDate = new Date(this.applicant.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ';
    },
    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        rejected: 'ປະຕິເສດ'
      };
      return statusLabels[status] || status;
    },
    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ມີ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ'
      };
      return levelLabels[level] || level;
    },
    formatHealthStatus(status) {
      const statusLabels = {
        good: 'ດີ',
        fair: 'ປານກາງ',
        poor: 'ບໍ່ດີ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/applicants/ApplicantViewDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var applicants_ApplicantViewDialogvue_type_script_lang_js_ = (ApplicantViewDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/applicants/ApplicantViewDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(567)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantViewDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13345444",
  "43263967"
  
)

/* harmony default export */ var ApplicantViewDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/StatusUpdateDialog/index.vue?vue&type=template&id=566d4aa8&scoped=true&
var render = function render() {
  var _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog status-dialog\" data-v-566d4aa8><div" + _vm._ssrClass("modal-header", _vm.headerClass) + " data-v-566d4aa8><div class=\"modal-title-section\" data-v-566d4aa8><i" + _vm._ssrClass("modal-icon", _vm.headerIcon) + " data-v-566d4aa8></i> <h5 class=\"modal-title\" data-v-566d4aa8>" + _vm._ssrEscape(_vm._s(_vm.modalTitle)) + "</h5></div> <button class=\"close-btn\" data-v-566d4aa8><i class=\"fas fa-times\" data-v-566d4aa8></i></button></div> <form data-v-566d4aa8><div class=\"modal-body\" data-v-566d4aa8>" + (!_vm.applicant ? "<div class=\"empty-state\" data-v-566d4aa8><i class=\"fas fa-user-slash\" data-v-566d4aa8></i> <p data-v-566d4aa8>ບໍ່ພົບຂໍ້ມູນຜູ້ສະໝັກ</p></div>" : "<div class=\"status-update-content\" data-v-566d4aa8><div class=\"applicant-summary\" data-v-566d4aa8><div class=\"applicant-info\" data-v-566d4aa8><div class=\"applicant-avatar\" data-v-566d4aa8><i class=\"fas fa-user-circle\" data-v-566d4aa8></i></div> <div class=\"applicant-details\" data-v-566d4aa8><h4 class=\"applicant-name\" data-v-566d4aa8>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</h4> <div class=\"applicant-meta\" data-v-566d4aa8><span class=\"meta-item\" data-v-566d4aa8><i class=\"fas fa-venus-mars\" data-v-566d4aa8></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatGender(_vm.applicant.gender)) + "\n                  ") + "</span> <span class=\"meta-item\" data-v-566d4aa8><i class=\"fas fa-birthday-cake\" data-v-566d4aa8></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.calculateAge()) + " ປີ\n                  ") + "</span> <span class=\"meta-item\" data-v-566d4aa8><i class=\"fas fa-phone\" data-v-566d4aa8></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.phone) + "\n                  ") + "</span></div> <div class=\"current-status\" data-v-566d4aa8>\n                  ສະຖານະປັດຈຸບັນ: \n                  <span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-566d4aa8>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n                  ") + "</span></div></div></div></div> <div" + _vm._ssrClass("action-description", _vm.actionClass) + " data-v-566d4aa8><div class=\"action-icon\" data-v-566d4aa8><i" + _vm._ssrClass(null, _vm.actionIcon) + " data-v-566d4aa8></i></div> <div class=\"action-content\" data-v-566d4aa8><h5 class=\"action-title\" data-v-566d4aa8>" + _vm._ssrEscape(_vm._s(_vm.actionTitle)) + "</h5> <p class=\"action-message\" data-v-566d4aa8>" + _vm._ssrEscape(_vm._s(_vm.actionMessage)) + "</p></div></div> " + (_vm.action === 'approve' ? "<div class=\"eligibility-check\" data-v-566d4aa8><h6 class=\"eligibility-title\" data-v-566d4aa8><i class=\"fas fa-clipboard-check\" data-v-566d4aa8></i>\n              ການກວດສອບຄຸນສົມບັດ\n            </h6> <div class=\"eligibility-items\" data-v-566d4aa8><div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.isAgeValid
  }) + " data-v-566d4aa8><i" + _vm._ssrClass(null, _vm.isAgeValid ? 'fas fa-check' : 'fas fa-times') + " data-v-566d4aa8></i> <span data-v-566d4aa8>" + _vm._ssrEscape("ອາຍຸ 18-32 ປີ (" + _vm._s(_vm.calculateAge()) + " ປີ)") + "</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.hasPassport
  }) + " data-v-566d4aa8><i" + _vm._ssrClass(null, _vm.applicant.hasPassport ? 'fas fa-check' : 'fas fa-times') + " data-v-566d4aa8></i> <span data-v-566d4aa8>ມີໜັງສືເດີນທາງ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.healthStatus === 'good'
  }) + " data-v-566d4aa8><i" + _vm._ssrClass(null, _vm.applicant.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times') + " data-v-566d4aa8></i> <span data-v-566d4aa8>ສຸຂະພາບດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.eyesightGood
  }) + " data-v-566d4aa8><i" + _vm._ssrClass(null, _vm.applicant.eyesightGood ? 'fas fa-check' : 'fas fa-times') + " data-v-566d4aa8></i> <span data-v-566d4aa8>ສາຍຕາດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': !_vm.applicant.hasVisibleTattoos
  }) + " data-v-566d4aa8><i" + _vm._ssrClass(null, !_vm.applicant.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times') + " data-v-566d4aa8></i> <span data-v-566d4aa8>ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ</span></div> " + (_vm.hasChineseLanguageBonus ? "<div class=\"eligibility-item bonus\" data-v-566d4aa8><i class=\"fas fa-star\" data-v-566d4aa8></i> <span data-v-566d4aa8>" + _vm._ssrEscape("ໂບນັສພາສາຈີນ (" + _vm._s(_vm.formatLanguageLevel(_vm.applicant.chineseLanguageLevel)) + ")") + "</span></div>" : "<!---->") + "</div> <div" + _vm._ssrClass("eligibility-result", {
    'eligible': _vm.isEligible
  }) + " data-v-566d4aa8><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-thumbs-up' : 'fas fa-exclamation-triangle') + " data-v-566d4aa8></i> " + (_vm.isEligible ? "<span data-v-566d4aa8>\n                ຜູ້ສະໝັກມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span>" : "<span data-v-566d4aa8>\n                ⚠️ ຜູ້ສະໝັກຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span>") + "</div></div>" : "<!---->") + " " + (_vm.action === 'approve' ? "<div class=\"quota-check\" data-v-566d4aa8><h6 class=\"quota-title\" data-v-566d4aa8><i class=\"fas fa-users\" data-v-566d4aa8></i>\n              ການກວດສອບໂຄຕ້າ\n            </h6> <div class=\"quota-info\" data-v-566d4aa8><div" + _vm._ssrClass("quota-item", _vm.genderQuotaClass) + " data-v-566d4aa8><div class=\"quota-icon\" data-v-566d4aa8><i" + _vm._ssrClass(null, _vm.applicant.gender === 'male' ? 'fas fa-male' : 'fas fa-female') + " data-v-566d4aa8></i></div> <div class=\"quota-content\" data-v-566d4aa8><div class=\"quota-text\" data-v-566d4aa8>" + _vm._ssrEscape("\n                    ໂຄຕ້າ" + _vm._s(_vm.formatGender(_vm.applicant.gender)) + ": \n                    ") + "<span class=\"quota-numbers\" data-v-566d4aa8>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getCurrentGenderCount()) + "/" + _vm._s(_vm.getMaxGenderQuota()) + "\n                    ") + "</span></div> <div" + _vm._ssrClass("quota-status", _vm.quotaStatusClass) + " data-v-566d4aa8>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.quotaStatusMessage) + "\n                  ") + "</div></div></div></div></div>" : "<!---->") + " <div class=\"notes-section\" data-v-566d4aa8><label" + _vm._ssrClass("form-label", {
    'required': _vm.action === 'reject'
  }) + " data-v-566d4aa8><i class=\"fas fa-sticky-note\" data-v-566d4aa8></i>\n              ໝາຍເຫດ\n              " + (_vm.action === 'reject' ? "<span class=\"required-note\" data-v-566d4aa8>(ຈຳເປັນສຳລັບການປະຕິເສດ)</span>" : "<!---->") + "</label> <textarea rows=\"4\"" + _vm._ssrAttr("placeholder", _vm.notesPlaceholder) + " maxlength=\"500\"" + _vm._ssrAttr("required", _vm.action === 'reject') + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.notes
  }) + " data-v-566d4aa8>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> " + (_vm.errors.notes ? "<div class=\"invalid-feedback\" data-v-566d4aa8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.notes) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint\" data-v-566d4aa8><span class=\"text-counter\" data-v-566d4aa8>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> " + (_vm.action === 'reject' ? "<div class=\"warning-section\" data-v-566d4aa8><div class=\"warning-content\" data-v-566d4aa8><i class=\"fas fa-exclamation-triangle\" data-v-566d4aa8></i> <div data-v-566d4aa8><strong data-v-566d4aa8>ຄຳເຕືອນ:</strong> \n                ການປະຕິເສດຜູ້ສະໝັກບໍ່ສາມາດຍົກເລີກໄດ້. \n                ກະລຸນາໃສ່ເຫດຜົນທີ່ຊັດເຈນໃນໝາຍເຫດ.\n              </div></div></div>" : "<!---->") + " " + (_vm.action === 'approve' && !_vm.isEligible ? "<div class=\"confirmation-section\" data-v-566d4aa8><label class=\"confirmation-checkbox\" data-v-566d4aa8><input type=\"checkbox\"" + _vm._ssrAttr("required", _vm.action === 'approve' && !_vm.isEligible) + _vm._ssrAttr("checked", Array.isArray(_vm.formData.forceApprove) ? _vm._i(_vm.formData.forceApprove, null) > -1 : _vm.formData.forceApprove) + " data-v-566d4aa8> <span class=\"checkbox-label\" data-v-566d4aa8>\n                ຂ້ອຍຢືນຢັນວ່າຕ້ອງການອະນຸມັດຜູ້ສະໝັກຄົນນີ້ ເຖິງແມ່ນວ່າຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span></label></div>" : "<!---->") + "</div>") + " " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-566d4aa8><h6 data-v-566d4aa8><i class=\"fas fa-exclamation-circle\" data-v-566d4aa8></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-566d4aa8>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-566d4aa8>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->") + "</div> <div class=\"modal-footer\" data-v-566d4aa8><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-566d4aa8><i class=\"fas fa-times\" data-v-566d4aa8></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + _vm._ssrClass(null, ['btn', _vm.confirmButtonClass]) + " data-v-566d4aa8>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-566d4aa8></i>" : "<i" + _vm._ssrClass(null, _vm.confirmButtonIcon) + " data-v-566d4aa8></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'ກຳລັງດຳເນີນການ...' : _vm.confirmButtonText) + "\n        ") + "</button></div></form></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/StatusUpdateDialog/index.vue?vue&type=template&id=566d4aa8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/StatusUpdateDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var StatusUpdateDialogvue_type_script_lang_js_ = ({
  name: 'StatusUpdateDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    applicant: {
      type: Object,
      default: null
    },
    action: {
      type: String,
      default: '' // 'approve' or 'reject'
    }
  },

  data() {
    return {
      loading: false,
      formData: {
        notes: '',
        forceApprove: false
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    // Modal styling based on action
    headerClass() {
      return this.action === 'approve' ? 'approve-header' : 'reject-header';
    },
    headerIcon() {
      return this.action === 'approve' ? 'fas fa-check-circle' : 'fas fa-times-circle';
    },
    modalTitle() {
      return this.action === 'approve' ? 'ອະນຸມັດຜູ້ສະໝັກ' : 'ປະຕິເສດຜູ້ສະໝັກ';
    },
    actionClass() {
      return this.action === 'approve' ? 'approve-action' : 'reject-action';
    },
    actionIcon() {
      return this.action === 'approve' ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down';
    },
    actionTitle() {
      return this.action === 'approve' ? 'ອະນຸມັດການສະໝັກ' : 'ປະຕິເສດການສະໝັກ';
    },
    actionMessage() {
      if (this.action === 'approve') {
        return 'ທ່ານກຳລັງຈະອະນຸມັດຜູ້ສະໝັກຄົນນີ້. ກະລຸນາກວດສອບຄຸນສົມບັດກ່ອນດຳເນີນການ.';
      } else {
        return 'ທ່ານກຳລັງຈະປະຕິເສດຜູ້ສະໝັກຄົນນີ້. ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້.';
      }
    },
    notesPlaceholder() {
      if (this.action === 'approve') {
        return 'ໝາຍເຫດສຳລັບການອະນຸມັດ (ທາງເລືອກ)...';
      } else {
        return 'ເຫດຜົນໃນການປະຕິເສດ (ຈຳເປັນ)...';
      }
    },
    confirmButtonClass() {
      return this.action === 'approve' ? 'btn-success' : 'btn-danger';
    },
    confirmButtonIcon() {
      return this.action === 'approve' ? 'fas fa-check' : 'fas fa-times';
    },
    confirmButtonText() {
      return this.action === 'approve' ? 'ອະນຸມັດ' : 'ປະຕິເສດ';
    },
    // Eligibility checks
    isAgeValid() {
      const age = this.calculateAge();
      return age >= 18 && age <= 32;
    },
    hasChineseLanguageBonus() {
      return this.applicant && this.applicant.chineseLanguageLevel && !['none', 'basic'].includes(this.applicant.chineseLanguageLevel);
    },
    isEligible() {
      if (!this.applicant) return false;
      return this.isAgeValid && this.applicant.hasPassport && this.applicant.healthStatus === 'good' && this.applicant.eyesightGood && !this.applicant.hasVisibleTattoos;
    },
    // Gender quota checks
    genderQuotaClass() {
      const currentCount = this.getCurrentGenderCount();
      const maxQuota = this.getMaxGenderQuota();
      return currentCount >= maxQuota ? 'quota-full' : 'quota-available';
    },
    quotaStatusClass() {
      const currentCount = this.getCurrentGenderCount();
      const maxQuota = this.getMaxGenderQuota();
      return currentCount >= maxQuota ? 'quota-exceeded' : 'quota-ok';
    },
    quotaStatusMessage() {
      const currentCount = this.getCurrentGenderCount();
      const maxQuota = this.getMaxGenderQuota();
      if (currentCount >= maxQuota) {
        return '⚠️ ໂຄຕ້າເຕັມແລ້ວ';
      } else {
        return `✓ ຍັງມີບ່ອນວ່າງ ${maxQuota - currentCount} ບ່ອນ`;
      }
    },
    // Form validation
    isFormValid() {
      if (this.action === 'reject' && !this.formData.notes.trim()) {
        return false;
      }
      if (this.action === 'approve' && !this.isEligible && !this.formData.forceApprove) {
        return false;
      }
      return this.formErrors.length === 0;
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
    applicant: {
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
      this.formData = {
        notes: '',
        forceApprove: false
      };
      this.errors = {};
      this.formErrors = [];
    },
    resetForm() {
      this.formData = {
        notes: '',
        forceApprove: false
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];

      // Notes validation for rejection
      if (this.action === 'reject' && !this.formData.notes.trim()) {
        this.errors.notes = 'ກະລຸນາໃສ່ເຫດຜົນໃນການປະຕິເສດ';
        this.formErrors.push('Rejection reason is required');
      }

      // Notes length validation
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.errors.notes = 'ໝາຍເຫດບໍ່ຄວນເກີນ 500 ຕົວອັກສອນ';
        this.formErrors.push('Notes must not exceed 500 characters');
      }

      // Force approve validation
      if (this.action === 'approve' && !this.isEligible && !this.formData.forceApprove) {
        this.formErrors.push('Please confirm approval for applicant without full qualifications');
      }
      return this.formErrors.length === 0;
    },
    async confirmAction() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        const statusData = {
          status: this.action === 'approve' ? 'approved' : 'rejected',
          notes: this.formData.notes.trim()
        };
        console.log('📤 Updating status:', statusData);

        // Emit confirm event to parent
        this.$emit('confirm', statusData);
      } catch (error) {
        console.error('Status update error:', error);
        this.formErrors.push('An error occurred while updating status. Please try again.');
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
    getFullName() {
      if (!this.applicant) return '';
      return `${this.applicant.firstName} ${this.applicant.lastName}`;
    },
    calculateAge() {
      if (!this.applicant || !this.applicant.dateOfBirth) return 0;
      const today = new Date();
      const birthDate = new Date(this.applicant.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    },
    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ';
    },
    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        rejected: 'ປະຕິເສດ'
      };
      return statusLabels[status] || status;
    },
    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ມີ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ'
      };
      return levelLabels[level] || level;
    },
    // Mock gender quota methods - replace with actual data
    getCurrentGenderCount() {
      var _this$applicant;
      // This should come from props or API call in real implementation
      return ((_this$applicant = this.applicant) === null || _this$applicant === void 0 ? void 0 : _this$applicant.gender) === 'male' ? 15 : 45;
    },
    getMaxGenderQuota() {
      var _this$applicant2;
      return ((_this$applicant2 = this.applicant) === null || _this$applicant2 === void 0 ? void 0 : _this$applicant2.gender) === 'male' ? 30 : 70;
    }
  }
});
// CONCATENATED MODULE: ./components/applicants/StatusUpdateDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var applicants_StatusUpdateDialogvue_type_script_lang_js_ = (StatusUpdateDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/applicants/StatusUpdateDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(569)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_StatusUpdateDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "566d4aa8",
  "429f5c21"
  
)

/* harmony default export */ var StatusUpdateDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34eb0fc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34eb0fc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34eb0fc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34eb0fc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34eb0fc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".applicant-summary-container[data-v-34eb0fc4]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-34eb0fc4]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-34eb0fc4]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-34eb0fc4]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-34eb0fc4]{display:flex;gap:12px}.filter-section[data-v-34eb0fc4]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-34eb0fc4]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-34eb0fc4]{display:flex;flex-direction:column;gap:8px;min-width:150px}.filter-group label[data-v-34eb0fc4]{color:#555;font-size:14px;font-weight:500}.age-range[data-v-34eb0fc4]{align-items:center;display:flex;gap:8px}.age-input[data-v-34eb0fc4]{width:80px}.age-separator[data-v-34eb0fc4]{color:#666;font-weight:700}.filter-actions[data-v-34eb0fc4]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-34eb0fc4]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-34eb0fc4]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-34eb0fc4]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-applicants[data-v-34eb0fc4]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.summary-card.total-applicants .card-icon[data-v-34eb0fc4]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.gender-male[data-v-34eb0fc4]{border-left:4px solid #3b82f6}.summary-card.gender-female[data-v-34eb0fc4]{border-left:4px solid #ec4899}.summary-card.status-pending[data-v-34eb0fc4]{border-left:4px solid #f59e0b}.summary-card.status-approved[data-v-34eb0fc4]{border-left:4px solid #10b981}.summary-card.eligibility[data-v-34eb0fc4]{border-left:4px solid #8b5cf6}.card-icon[data-v-34eb0fc4]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-34eb0fc4]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.male[data-v-34eb0fc4]{background:#dbeafe;color:#3b82f6}.card-icon.female[data-v-34eb0fc4]{background:#fce7f3;color:#ec4899}.card-icon.pending[data-v-34eb0fc4]{background:#fef3c7;color:#f59e0b}.card-icon.approved[data-v-34eb0fc4]{background:#d1fae5;color:#10b981}.card-icon.eligible[data-v-34eb0fc4]{background:#ede9fe;color:#8b5cf6}.card-content[data-v-34eb0fc4]{flex:1;min-width:0}.card-content h3[data-v-34eb0fc4]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-34eb0fc4]{font-size:14px;margin:0}.eligibility-rate[data-v-34eb0fc4],.quota-info[data-v-34eb0fc4]{display:block;font-size:12px;margin-top:4px;opacity:.8}.table-section[data-v-34eb0fc4]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-34eb0fc4]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-34eb0fc4]{color:#333;margin:0}.record-count[data-v-34eb0fc4]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-34eb0fc4]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-34eb0fc4]{overflow-x:auto}.data-table[data-v-34eb0fc4]{border-collapse:collapse;width:100%}.data-table td[data-v-34eb0fc4],.data-table th[data-v-34eb0fc4]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-34eb0fc4]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-34eb0fc4]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-34eb0fc4]:hover{background-color:#e9ecef}.data-table th i[data-v-34eb0fc4]{margin-left:8px;opacity:.5}.applicant-name strong[data-v-34eb0fc4]{color:#333;display:block;font-size:14px}.contact-info[data-v-34eb0fc4]{color:#666;font-size:12px;margin-top:2px}.phone[data-v-34eb0fc4]{font-family:monospace}.contact-details[data-v-34eb0fc4]{color:#666;font-size:12px}.contact-details .address[data-v-34eb0fc4],.contact-details .email[data-v-34eb0fc4]{align-items:center;display:flex;gap:4px;margin-bottom:2px}.contact-details i[data-v-34eb0fc4]{color:#999;width:12px}.age-cell[data-v-34eb0fc4]{color:#495057;font-weight:600}.gender-badge[data-v-34eb0fc4]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 8px;text-transform:uppercase}.gender-badge.male[data-v-34eb0fc4]{background-color:#dbeafe;color:#3b82f6}.gender-badge.female[data-v-34eb0fc4]{background-color:#fce7f3;color:#ec4899}.language-badge[data-v-34eb0fc4]{border-radius:12px;font-size:11px;font-weight:600;padding:4px 8px}.language-badge.none[data-v-34eb0fc4]{background-color:#f3f4f6;color:#6b7280}.language-badge.basic[data-v-34eb0fc4]{background-color:#fef3c7;color:#d97706}.language-badge.intermediate[data-v-34eb0fc4]{background-color:#dbeafe;color:#2563eb}.language-badge.advanced[data-v-34eb0fc4]{background-color:#d1fae5;color:#065f46}.status-badge[data-v-34eb0fc4]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.pending[data-v-34eb0fc4]{background-color:#fef3c7;color:#d97706}.status-badge.approved[data-v-34eb0fc4]{background-color:#d1fae5;color:#065f46}.status-badge.rejected[data-v-34eb0fc4]{background-color:#fee2e2;color:#dc2626}.qualifications[data-v-34eb0fc4]{display:flex;flex-wrap:wrap;gap:6px}.qualification-item[data-v-34eb0fc4]{align-items:center;border-radius:50%;display:inline-flex;font-size:10px;height:20px;justify-content:center;width:20px}.qualification-item.passport[data-v-34eb0fc4]{background-color:#dbeafe;color:#3b82f6}.qualification-item.health[data-v-34eb0fc4]{background-color:#dcfce7;color:#16a34a}.qualification-item.eyesight[data-v-34eb0fc4]{background-color:#fef3c7;color:#d97706}.qualification-item.no-tattoo[data-v-34eb0fc4]{background-color:#d1fae5;color:#059669}.actions-cell[data-v-34eb0fc4]{display:flex;flex-wrap:wrap;gap:4px}.pagination-container[data-v-34eb0fc4]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-34eb0fc4]{color:#666;font-size:14px}.pagination-controls[data-v-34eb0fc4]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-34eb0fc4]{color:#666;padding:6px 12px}.btn[data-v-34eb0fc4]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-34eb0fc4]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-34eb0fc4]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-34eb0fc4]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-34eb0fc4]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-34eb0fc4]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-34eb0fc4]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-34eb0fc4]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-34eb0fc4]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-34eb0fc4]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-34eb0fc4]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-34eb0fc4]:hover{background-color:#17a2b8;color:#fff}.btn-outline-success[data-v-34eb0fc4]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-34eb0fc4]:hover{background-color:#28a745;color:#fff}.btn-outline-danger[data-v-34eb0fc4]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-34eb0fc4]:hover{background-color:#dc3545;color:#fff}.btn-sm[data-v-34eb0fc4]{font-size:12px;padding:4px 8px}.form-control[data-v-34eb0fc4]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-34eb0fc4]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.loading-overlay[data-v-34eb0fc4]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-34eb0fc4]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-34eb0fc4]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:768px){.applicant-summary-container[data-v-34eb0fc4]{padding:10px}.header-content[data-v-34eb0fc4]{align-items:flex-start}.filter-row[data-v-34eb0fc4],.header-content[data-v-34eb0fc4]{flex-direction:column;gap:16px}.filter-group[data-v-34eb0fc4]{min-width:auto;width:100%}.filter-actions[data-v-34eb0fc4]{flex-direction:row;width:100%}.summary-cards[data-v-34eb0fc4]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-34eb0fc4]{padding:20px}.card-icon[data-v-34eb0fc4]{height:50px;margin-right:16px;width:50px}.card-content h3[data-v-34eb0fc4],.card-icon[data-v-34eb0fc4]{font-size:20px}.pagination-container[data-v-34eb0fc4],.table-header[data-v-34eb0fc4]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-34eb0fc4]{flex-wrap:wrap}.actions-cell[data-v-34eb0fc4],.qualifications[data-v-34eb0fc4]{flex-direction:column;gap:4px}.age-range[data-v-34eb0fc4]{flex-direction:column;gap:8px}.age-input[data-v-34eb0fc4]{width:100%}}@media (max-width:576px){.summary-card[data-v-34eb0fc4]{flex-direction:column;text-align:center}.card-icon[data-v-34eb0fc4]{margin:0 auto 16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map