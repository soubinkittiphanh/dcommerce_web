exports.ids = [152,18,19,20];
exports.modules = {

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/applicants/index.vue?vue&type=template&id=0d96dcd4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "applicant-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-0d96dcd4><div class=\"header-content\" data-v-0d96dcd4><h1 class=\"page-title\" data-v-0d96dcd4>ລະບົບຈັດການຜູ້ສະໝັກງານ</h1> <div class=\"header-actions\" data-v-0d96dcd4><button class=\"btn btn-primary\" data-v-0d96dcd4><i class=\"fas fa-plus\" data-v-0d96dcd4></i>\n          ເພີ່ມຜູ້ສະໝັກໃໝ່\n        </button> <button class=\"btn btn-secondary\" data-v-0d96dcd4><i class=\"fas fa-download\" data-v-0d96dcd4></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-0d96dcd4><label data-v-0d96dcd4>ຄົ້ນຫາ:</label> <input type=\"text\" placeholder=\"ຊື່, ເບີໂທ, ໜັງສືເດີນທາງ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"form-control\" data-v-0d96dcd4></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<label data-v-0d96dcd4>Job Batch:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.jobBatchId,
      expression: "filters.jobBatchId"
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
        _vm.$set(_vm.filters, "jobBatchId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _vm._l(_vm.availableJobBatches, function (batch) {
    return _c('option', {
      key: batch.id,
      domProps: {
        "value": batch.id
      }
    }, [_vm._v("\n            " + _vm._s(batch.batchName) + _vm._s(batch.workPlace ? ` - ${batch.workPlace}` : '') + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<label data-v-0d96dcd4>ເພດ:</label> "), _c('select', {
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
  }, [_vm._v("ຍິງ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<label data-v-0d96dcd4>ສະຖານະ:</label> "), _c('select', {
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
      "value": "INTERVIEW"
    }
  }, [_vm._v("ສໍາພາດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REGISTER"
    }
  }, [_vm._v("ລົງທະບຽນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rejected"
    }
  }, [_vm._v("ປະຕິເສດ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<label data-v-0d96dcd4>ມີໜັງສືເດີນທາງ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.passportAvailability,
      expression: "filters.passportAvailability"
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
        _vm.$set(_vm.filters, "passportAvailability", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_vm._v("ບໍ່ມີ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<label data-v-0d96dcd4>ເມືອງ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.city,
      expression: "filters.city"
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
        _vm.$set(_vm.filters, "city", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _vm._l(_vm.availableCities, function (city) {
    return _c('option', {
      key: city,
      domProps: {
        "value": city
      }
    }, [_vm._v("\n            " + _vm._s(city) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"filter-actions\" data-v-0d96dcd4><button class=\"btn btn-outline-primary\" data-v-0d96dcd4><i class=\"fas fa-search\" data-v-0d96dcd4></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-0d96dcd4><i class=\"fas fa-undo\" data-v-0d96dcd4></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-0d96dcd4><div class=\"summary-card total-applicants\" data-v-0d96dcd4><div class=\"card-icon total\" data-v-0d96dcd4><i class=\"fas fa-users\" data-v-0d96dcd4></i></div> <div class=\"card-content\" data-v-0d96dcd4><h3 data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.total.count)) + "</h3> <p data-v-0d96dcd4>ລວມຜູ້ສະໝັກທັງໝົດ</p></div></div> <div class=\"summary-card gender-male\" data-v-0d96dcd4><div class=\"card-icon male\" data-v-0d96dcd4><i class=\"fas fa-male\" data-v-0d96dcd4></i></div> <div class=\"card-content\" data-v-0d96dcd4><h3 data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.male.count)) + "</h3> <p data-v-0d96dcd4>" + _vm._ssrEscape("ຊາຍ (" + _vm._s(_vm.summaryStats.male.percentage) + "%)") + "</p></div></div> <div class=\"summary-card gender-female\" data-v-0d96dcd4><div class=\"card-icon female\" data-v-0d96dcd4><i class=\"fas fa-female\" data-v-0d96dcd4></i></div> <div class=\"card-content\" data-v-0d96dcd4><h3 data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.female.count)) + "</h3> <p data-v-0d96dcd4>" + _vm._ssrEscape("ຍິງ (" + _vm._s(_vm.summaryStats.female.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-interview\" data-v-0d96dcd4><div class=\"card-icon interview\" data-v-0d96dcd4><i class=\"fas fa-comments\" data-v-0d96dcd4></i></div> <div class=\"card-content\" data-v-0d96dcd4><h3 data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.interview.count)) + "</h3> <p data-v-0d96dcd4>ລໍຖ້າສໍາພາດ</p></div></div> <div class=\"summary-card status-register\" data-v-0d96dcd4><div class=\"card-icon register\" data-v-0d96dcd4><i class=\"fas fa-check-circle\" data-v-0d96dcd4></i></div> <div class=\"card-content\" data-v-0d96dcd4><h3 data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.register.count)) + "</h3> <p data-v-0d96dcd4>ລົງທະບຽນແລ້ວ</p></div></div> <div class=\"summary-card job-batch-assigned\" data-v-0d96dcd4><div class=\"card-icon job-batch\" data-v-0d96dcd4><i class=\"fas fa-briefcase-medical\" data-v-0d96dcd4></i></div> <div class=\"card-content\" data-v-0d96dcd4><h3 data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.withJobBatch.count)) + "</h3> <p data-v-0d96dcd4>ມີ Job Batch</p> <small class=\"job-batch-rate\" data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.withJobBatch.percentage) + "% ຂອງທັງໝົດ") + "</small></div></div> <div class=\"summary-card passport-available\" data-v-0d96dcd4><div class=\"card-icon passport\" data-v-0d96dcd4><i class=\"fas fa-passport\" data-v-0d96dcd4></i></div> <div class=\"card-content\" data-v-0d96dcd4><h3 data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.withPassport.count)) + "</h3> <p data-v-0d96dcd4>ມີໜັງສືເດີນທາງ</p> <small class=\"passport-rate\" data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.withPassport.percentage) + "% ຂອງທັງໝົດ") + "</small></div></div></div> "), _vm._ssrNode("<div class=\"table-section\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-0d96dcd4><h3 data-v-0d96dcd4>ລາຍຊື່ຜູ້ສະໝັກ</h3> <span class=\"record-count\" data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.filteredApplicants.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-0d96dcd4>", "</div>", [_vm._ssrNode("<label data-v-0d96dcd4>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-0d96dcd4>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-0d96dcd4><table class=\"data-table\" data-v-0d96dcd4><thead data-v-0d96dcd4><tr data-v-0d96dcd4><th class=\"sortable\" data-v-0d96dcd4>\n              ID\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('id')) + " data-v-0d96dcd4></i></th> <th class=\"sortable\" data-v-0d96dcd4>\n              ຊື່ຜູ້ສະໝັກ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('firstName')) + " data-v-0d96dcd4></i></th> <th data-v-0d96dcd4>Job Batch</th> <th class=\"sortable\" data-v-0d96dcd4>\n              ເພດ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('gender')) + " data-v-0d96dcd4></i></th> <th class=\"sortable\" data-v-0d96dcd4>\n              ອາຍຸ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('age')) + " data-v-0d96dcd4></i></th> <th data-v-0d96dcd4>ຕິດຕໍ່</th> <th data-v-0d96dcd4>ທີ່ຢູ່</th> <th data-v-0d96dcd4>ໜັງສືເດີນທາງ</th> <th class=\"sortable\" data-v-0d96dcd4>\n              ສະຖານະ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('status')) + " data-v-0d96dcd4></i></th> <th class=\"sortable\" data-v-0d96dcd4>\n              ວັນທີລົງທະບຽນ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('registertDate')) + " data-v-0d96dcd4></i></th> <th data-v-0d96dcd4>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-0d96dcd4>" + _vm._ssrList(_vm.paginatedApplicants, function (applicant) {
    return "<tr data-v-0d96dcd4><td data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(applicant.id)) + "</td> <td data-v-0d96dcd4><div class=\"applicant-name\" data-v-0d96dcd4><strong data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(_vm.getFullName(applicant))) + "</strong> <div class=\"contact-info\" data-v-0d96dcd4><span class=\"phone\" data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(applicant.phone)) + "</span> " + (applicant.emergencyContactNo ? "<span class=\"emergency-phone\" data-v-0d96dcd4>" + _vm._ssrEscape("\n                    (ຕິດຕໍ່ສຸກເສີນ: " + _vm._s(applicant.emergencyContactNo) + ")\n                  ") + "</span>" : "<!---->") + "</div></div></td> <td data-v-0d96dcd4><div class=\"job-batch-info\" data-v-0d96dcd4>" + (applicant.jobBatch ? "<div class=\"job-batch-assigned\" data-v-0d96dcd4><div class=\"batch-name\" data-v-0d96dcd4><i class=\"fas fa-briefcase\" data-v-0d96dcd4></i>" + _vm._ssrEscape("\n                    " + _vm._s(applicant.jobBatch.batchName) + "\n                  ") + "</div> " + (applicant.jobBatch.workPlace ? "<div class=\"batch-workplace\" data-v-0d96dcd4><i class=\"fas fa-building\" data-v-0d96dcd4></i>" + _vm._ssrEscape("\n                    " + _vm._s(applicant.jobBatch.workPlace) + "\n                  ") + "</div>" : "<!---->") + " " + (applicant.jobBatch.status ? "<div class=\"batch-status\" data-v-0d96dcd4><span" + _vm._ssrClass(null, ['batch-status-badge', applicant.jobBatch.status]) + " data-v-0d96dcd4>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatJobBatchStatus(applicant.jobBatch.status)) + "\n                    ") + "</span></div>" : "<!---->") + "</div>" : "<div class=\"no-job-batch\" data-v-0d96dcd4><i class=\"fas fa-minus-circle\" data-v-0d96dcd4></i> <span data-v-0d96dcd4>ບໍ່ມີ Job Batch</span></div>") + "</div></td> <td data-v-0d96dcd4><span" + _vm._ssrClass(null, ['gender-badge', applicant.gender]) + " data-v-0d96dcd4>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatGender(applicant.gender)) + "\n              ") + "</span></td> <td class=\"age-cell\" data-v-0d96dcd4>" + _vm._ssrEscape("\n              " + _vm._s(applicant.age || '-') + " ປີ\n              ") + (applicant.maritalStatus ? "<div class=\"marital-status\" data-v-0d96dcd4>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatMaritalStatus(applicant.maritalStatus)) + "\n              ") + "</div>" : "<!---->") + "</td> <td data-v-0d96dcd4><div class=\"contact-details\" data-v-0d96dcd4><div class=\"phone\" data-v-0d96dcd4><i class=\"fas fa-phone\" data-v-0d96dcd4></i>" + _vm._ssrEscape("\n                  " + _vm._s(applicant.phone) + "\n                ") + "</div> " + (applicant.emergencyContactNo ? "<div class=\"emergency\" data-v-0d96dcd4><i class=\"fas fa-exclamation-triangle\" data-v-0d96dcd4></i>" + _vm._ssrEscape("\n                  " + _vm._s(applicant.emergencyContactNo) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-0d96dcd4><div class=\"address-details\" data-v-0d96dcd4>" + (applicant.address ? "<div class=\"address\" data-v-0d96dcd4>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.truncateText(applicant.address, 20)) + "\n                ") + "</div>" : "<!---->") + " <div class=\"location-parts\" data-v-0d96dcd4>" + (applicant.village ? "<span data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(applicant.village)) + "</span>" : "<!---->") + " " + (applicant.city ? "<span data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(applicant.city)) + "</span>" : "<!---->") + " " + (applicant.district ? "<span data-v-0d96dcd4>" + _vm._ssrEscape(_vm._s(applicant.district)) + "</span>" : "<!---->") + "</div></div></td> <td data-v-0d96dcd4><div class=\"passport-info\" data-v-0d96dcd4><span" + _vm._ssrClass(null, ['passport-status', applicant.passportAvailability ? 'has-passport' : 'no-passport']) + " data-v-0d96dcd4><i" + _vm._ssrClass(null, applicant.passportAvailability ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-0d96dcd4></i>" + _vm._ssrEscape("\n                  " + _vm._s(applicant.passportAvailability ? 'ມີ' : 'ບໍ່ມີ') + "\n                ") + "</span> " + (applicant.passportNo ? "<div class=\"passport-number\" data-v-0d96dcd4>" + _vm._ssrEscape("\n                  " + _vm._s(applicant.passportNo) + "\n                ") + "</div>" : "<!---->") + " " + (applicant.passportExpiredDate ? "<div class=\"passport-expiry\" data-v-0d96dcd4>" + _vm._ssrEscape("\n                  ໝົດອາຍຸ: " + _vm._s(_vm.formatDate(applicant.passportExpiredDate)) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-0d96dcd4><span" + _vm._ssrClass(null, ['status-badge', applicant.status]) + " data-v-0d96dcd4>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(applicant.status)) + "\n              ") + "</span></td> <td data-v-0d96dcd4><div class=\"date-info\" data-v-0d96dcd4>" + (applicant.registertDate ? "<div data-v-0d96dcd4>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatDate(applicant.registertDate)) + "\n                ") + "</div>" : "<!---->") + " " + (applicant.interviewExamDate ? "<div class=\"interview-date\" data-v-0d96dcd4>" + _vm._ssrEscape("\n                  ສໍາພາດ: " + _vm._s(_vm.formatDate(applicant.interviewExamDate)) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td class=\"actions-cell\" data-v-0d96dcd4><button title=\"ເບິ່ງລາຍລະອຽດ\" class=\"btn btn-sm btn-outline-primary\" data-v-0d96dcd4><i class=\"fas fa-eye\" data-v-0d96dcd4></i></button> <button title=\"ແກ້ໄຂ\" class=\"btn btn-sm btn-outline-info\" data-v-0d96dcd4><i class=\"fas fa-edit\" data-v-0d96dcd4></i></button> " + (applicant.status === 'INTERVIEW' ? "<button title=\"ຍ້າຍໄປລົງທະບຽນ\" class=\"btn btn-sm btn-outline-success\" data-v-0d96dcd4><i class=\"fas fa-check\" data-v-0d96dcd4></i></button>" : "<!---->") + " " + (applicant.status !== 'rejected' ? "<button title=\"ປະຕິເສດ\" class=\"btn btn-sm btn-outline-danger\" data-v-0d96dcd4><i class=\"fas fa-times\" data-v-0d96dcd4></i></button>" : "<!---->") + "</td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-0d96dcd4><div class=\"pagination-info\" data-v-0d96dcd4>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-0d96dcd4><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-0d96dcd4>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-0d96dcd4>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-0d96dcd4>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-0d96dcd4>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-0d96dcd4>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('ApplicantDialog', {
    attrs: {
      "visible": _vm.showEditDialog,
      "applicant": _vm.selectedApplicant,
      "job-batches": _vm.jobBatches,
      "fullscreen": true
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onApplicantSave,
      "load-job-batches": _vm.loadJobBatches
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
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-0d96dcd4><div class=\"loading-spinner\" data-v-0d96dcd4><i class=\"fas fa-spinner fa-spin\" data-v-0d96dcd4></i> <p data-v-0d96dcd4>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/applicants/index.vue?vue&type=template&id=0d96dcd4&scoped=true&

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

// EXTERNAL MODULE: ./components/applicants/ApplicantDialog/index.vue + 4 modules
var ApplicantDialog = __webpack_require__(849);

// EXTERNAL MODULE: ./components/applicants/ApplicantViewDialog/index.vue + 4 modules
var ApplicantViewDialog = __webpack_require__(850);

// EXTERNAL MODULE: ./components/applicants/StatusUpdateDialog/index.vue + 4 modules
var StatusUpdateDialog = __webpack_require__(851);

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
      // 'register' or 'reject'

      // Data arrays
      applicants: [],
      filteredApplicants: [],
      jobBatches: [],
      // NEW: Job batches data

      // Loading states
      loading: false,
      // Enhanced Filters with JobBatch
      filters: {
        search: '',
        gender: '',
        status: '',
        passportAvailability: '',
        city: '',
        jobBatchId: '' // NEW: Job batch filter
      },

      // Sorting
      sort: {
        field: 'registertDate',
        direction: 'desc'
      },
      // Pagination
      pagination: {
        currentPage: 1,
        perPage: 25
      },
      // Enhanced Summary statistics with JobBatch
      summaryStats: {
        total: {
          count: 0
        },
        male: {
          count: 0,
          percentage: 0
        },
        female: {
          count: 0,
          percentage: 0
        },
        interview: {
          count: 0
        },
        register: {
          count: 0
        },
        rejected: {
          count: 0
        },
        withPassport: {
          count: 0,
          percentage: 0
        },
        withJobBatch: {
          count: 0,
          percentage: 0
        } // NEW
      }
    };
  },

  computed: {
    user() {
      return this.$auth.user || '';
    },
    availableCities() {
      const cities = [...new Set(this.applicants.map(a => a.city).filter(Boolean))];
      return cities.sort();
    },
    // NEW: Available job batches for filtering
    availableJobBatches() {
      return this.jobBatches.filter(batch => batch.id).map(batch => ({
        id: batch.id,
        batchName: batch.batchName,
        workPlace: batch.workPlace
      })).sort((a, b) => a.batchName.localeCompare(b.batchName));
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
    this.loadJobBatches(); // NEW: Load job batches on mount
  },

  methods: {
    // NEW: Load job batches
    async loadJobBatches() {
      try {
        const {
          data
        } = await this.$axios.get('/api/batch-job');
        if (data && data.success) {
          this.jobBatches = data.data.jobBatches || [];
        } else {
          this.jobBatches = [];
        }
      } catch (error) {
        console.error('Error loading job batches:', error);
        this.jobBatches = [];
      }
    },
    // Enhanced Data Loading with JobBatch support
    async fetchApplicants() {
      this.loading = true;
      try {
        const params = {
          page: 1,
          limit: 1000,
          // Get all for client-side filtering
          isActive: true,
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
    updateToRegister(applicant) {
      this.selectedApplicant = applicant;
      this.statusAction = 'register';
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
    // Enhanced Save Handler with JobBatch support
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
    // Enhanced Filter and Search Methods with JobBatch
    applyFilters() {
      let filtered = [...this.applicants];

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase();
        filtered = filtered.filter(applicant => applicant.firstName.toLowerCase().includes(search) || applicant.lastName.toLowerCase().includes(search) || applicant.phone.includes(search) || applicant.passportNo && applicant.passportNo.toLowerCase().includes(search) || applicant.jobBatch && applicant.jobBatch.batchName.toLowerCase().includes(search));
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
      if (this.filters.passportAvailability !== '') {
        const hasPassport = this.filters.passportAvailability === 'true';
        filtered = filtered.filter(applicant => applicant.passportAvailability === hasPassport);
      }

      // City filter
      if (this.filters.city) {
        filtered = filtered.filter(applicant => applicant.city === this.filters.city);
      }

      // NEW: Job Batch filter
      if (this.filters.jobBatchId) {
        filtered = filtered.filter(applicant => applicant.jobBatchId && applicant.jobBatchId.toString() === this.filters.jobBatchId.toString());
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
        passportAvailability: '',
        city: '',
        jobBatchId: '' // NEW: Reset job batch filter
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
    // Enhanced Statistics Calculation with JobBatch
    calculateSummaryStats() {
      const total = this.filteredApplicants.length;
      const male = this.filteredApplicants.filter(a => a.gender === 'male').length;
      const female = this.filteredApplicants.filter(a => a.gender === 'female').length;
      const interview = this.filteredApplicants.filter(a => a.status === 'INTERVIEW').length;
      const register = this.filteredApplicants.filter(a => a.status === 'REGISTER').length;
      const rejected = this.filteredApplicants.filter(a => a.status === 'rejected').length;
      const withPassport = this.filteredApplicants.filter(a => a.passportAvailability).length;
      // NEW: Job batch statistics
      const withJobBatch = this.filteredApplicants.filter(a => a.jobBatch && a.jobBatch.id).length;
      this.summaryStats = {
        total: {
          count: total
        },
        male: {
          count: male,
          percentage: total > 0 ? Math.round(male / total * 100) : 0
        },
        female: {
          count: female,
          percentage: total > 0 ? Math.round(female / total * 100) : 0
        },
        interview: {
          count: interview
        },
        register: {
          count: register
        },
        rejected: {
          count: rejected
        },
        withPassport: {
          count: withPassport,
          percentage: total > 0 ? Math.round(withPassport / total * 100) : 0
        },
        // NEW: Job batch statistics
        withJobBatch: {
          count: withJobBatch,
          percentage: total > 0 ? Math.round(withJobBatch / total * 100) : 0
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
    // Enhanced Export with JobBatch data
    exportData() {
      const csvData = this.convertToCSV(this.filteredApplicants);
      this.downloadCSV(csvData, 'applicants-summary.csv');
    },
    convertToCSV(data) {
      const headers = ['ID', 'First Name', 'Last Name', 'Gender', 'Age', 'Marital Status', 'Phone', 'Emergency Contact', 'Address', 'Village', 'City', 'District', 'Passport Available', 'Passport No', 'Passport Expiry', 'Job Batch Name',
      // NEW
      'Job Batch Workplace',
      // NEW
      'Work Place', 'Contract Start', 'Contract End', 'Status', 'Register Date', 'Interview Date'];
      const csvContent = [headers.join(','), ...data.map(row => {
        var _row$jobBatch, _row$jobBatch2;
        return [row.id, row.firstName, row.lastName, row.gender, row.age || '', row.maritalStatus || '', row.phone, row.emergencyContactNo || '', row.address || '', row.village || '', row.city || '', row.district || '', row.passportAvailability ? 'Yes' : 'No', row.passportNo || '', row.passportExpiredDate || '', ((_row$jobBatch = row.jobBatch) === null || _row$jobBatch === void 0 ? void 0 : _row$jobBatch.batchName) || '',
        // NEW
        ((_row$jobBatch2 = row.jobBatch) === null || _row$jobBatch2 === void 0 ? void 0 : _row$jobBatch2.workPlace) || '',
        // NEW
        row.workPlace || '', row.contactStartDate || '', row.contactEndDate || '', row.status, row.registertDate || '', row.interviewExamDate || ''].join(',');
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
    // Utility methods
    getFullName(applicant) {
      return `${applicant.firstName} ${applicant.lastName}`;
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
    formatMaritalStatus(status) {
      const statusLabels = {
        single: 'ໂສດ',
        married: 'ແຕ່ງງານ',
        divorced: 'ຢ່າຮ້າງ',
        widowed: 'ເປັນເມ່າຍ'
      };
      return statusLabels[status] || status;
    },
    formatStatus(status) {
      const statusLabels = {
        INTERVIEW: 'ສໍາພາດ',
        REGISTER: 'ລົງທະບຽນ',
        rejected: 'ປະຕິເສດ'
      };
      return statusLabels[status] || status;
    },
    // NEW: Format job batch status
    formatJobBatchStatus(status) {
      const statusLabels = {
        draft: 'ຮ່າງ',
        active: 'ເປີດໃຊ້',
        completed: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ',
        on_hold: 'ລໍຖ້າ'
      };
      return statusLabels[status] || status;
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
  
  var style0 = __webpack_require__(902)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_applicantsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0d96dcd4",
  "624c7d16"
  
)

/* harmony default export */ var applicants = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(630);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6e64637f", content, true, context)
};

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(632);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("26f8a99b", content, true, context)
};

/***/ }),

/***/ 542:
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
  add("6760c6ae", content, true, context)
};

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".full-modal[data-v-3688e510]{background:#fff;height:100vh;margin:0;padding:0;width:100vw;z-index:9999}.full-modal[data-v-3688e510],.modal-overlay[data-v-3688e510]{left:0;position:fixed;top:0}.modal-overlay[data-v-3688e510]{align-items:center;background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;right:0;z-index:1000}.modal-dialog[data-v-3688e510]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:800px;overflow:hidden;width:95%}.modal-header[data-v-3688e510]{background:#01532b;border-bottom:1px solid #e5e7eb;color:#fff;justify-content:space-between;padding:16px 20px}.modal-header[data-v-3688e510],.modal-title[data-v-3688e510]{align-items:center;display:flex}.modal-title[data-v-3688e510]{font-size:16px;font-weight:600;gap:8px;margin:0}.close-btn[data-v-3688e510]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;opacity:.8;padding:4px}.close-btn[data-v-3688e510]:hover{background:hsla(0,0%,100%,.1);opacity:1}.stepper[data-v-3688e510]{background:#f9fafb;border-bottom:1px solid #e5e7eb;justify-content:center;padding:16px}.step[data-v-3688e510],.stepper[data-v-3688e510]{align-items:center;display:flex}.step[data-v-3688e510]{border-radius:6px;cursor:pointer;gap:8px;padding:8px 12px;transition:all .2s}.step.active[data-v-3688e510]{background:rgba(1,83,43,.1);color:#01532b}.step.completed[data-v-3688e510]{color:#059669}.step[data-v-3688e510]:not(.available){cursor:not-allowed;opacity:.5}.step-number[data-v-3688e510]{align-items:center;background:#e5e7eb;border-radius:50%;display:flex;font-size:12px;font-weight:600;height:24px;justify-content:center;width:24px}.step.active .step-number[data-v-3688e510]{background:#01532b;color:#fff}.step.completed .step-number[data-v-3688e510]{background:#059669;color:#fff}.step-label[data-v-3688e510]{font-size:14px;font-weight:500}.step-line[data-v-3688e510]{background:#e5e7eb;height:2px;margin:0 16px;width:60px}.step-line.completed[data-v-3688e510]{background:#059669}.modal-body[data-v-3688e510]{flex:1;max-height:60vh;overflow-y:auto;padding:20px}.form-grid[data-v-3688e510]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.form-group[data-v-3688e510]{display:flex;flex-direction:column}.form-group.full-width[data-v-3688e510]{grid-column:1/-1}.form-group label[data-v-3688e510]{align-items:center;color:#374151;display:flex;font-size:13px;font-weight:600;gap:6px;margin-bottom:6px}.form-group label.required[data-v-3688e510]:after{color:#ef4444;content:\"*\"}.form-group input[data-v-3688e510],.form-group select[data-v-3688e510],.form-group textarea[data-v-3688e510]{background:#fafafa;border:1px solid #d1d5db;border-radius:6px;font-size:14px;padding:8px 12px;transition:all .2s}.form-group input[data-v-3688e510]:focus,.form-group select[data-v-3688e510]:focus,.form-group textarea[data-v-3688e510]:focus{background:#fff;border-color:#01532b;box-shadow:0 0 0 2px rgba(1,83,43,.1);outline:none}.form-group input.error[data-v-3688e510],.form-group select.error[data-v-3688e510]{border-color:#ef4444}.form-group textarea[data-v-3688e510]{min-height:60px;resize:vertical}.radio-group[data-v-3688e510]{display:flex;gap:16px;margin-top:4px}.radio-group label[data-v-3688e510]{align-items:center;cursor:pointer;display:flex;font-weight:500;gap:6px;margin-bottom:0}.date-group[data-v-3688e510],.location-group[data-v-3688e510],.passport-group[data-v-3688e510]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(100px,1fr))}.photo-upload-container[data-v-3688e510]{align-items:flex-start;display:flex;gap:8px}.photo-upload[data-v-3688e510]{align-items:center;border:2px dashed #d1d5db;border-radius:8px;cursor:pointer;display:flex;height:80px;justify-content:center;overflow:hidden;position:relative;transition:border-color .2s;width:80px}.photo-upload[data-v-3688e510]:hover{border-color:#01532b}.photo-upload img[data-v-3688e510]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.photo-placeholder[data-v-3688e510]{align-items:center;color:#6b7280;display:flex;flex-direction:column;font-size:12px;gap:4px}.photo-placeholder i[data-v-3688e510]{font-size:18px}.photo-actions[data-v-3688e510]{display:flex;flex-direction:column;gap:4px}.btn-remove-photo[data-v-3688e510]{background:#ef4444;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:12px;padding:6px 8px;transition:background .2s}.btn-remove-photo[data-v-3688e510]:hover{background:#dc2626}.form-errors[data-v-3688e510]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;color:#dc2626;font-size:13px;margin-top:16px;padding:8px 12px}.modal-footer[data-v-3688e510]{background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 20px}.actions[data-v-3688e510]{display:flex;gap:12px;justify-content:space-between}.btn[data-v-3688e510]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s}.btn[data-v-3688e510]:disabled{cursor:not-allowed;opacity:.6}.btn.primary[data-v-3688e510]{background:#01532b;color:#fff}.btn.primary[data-v-3688e510]:hover:not(:disabled){background:#064e3b}.btn.secondary[data-v-3688e510]{background:#6b7280;color:#fff}.btn.secondary[data-v-3688e510]:hover:not(:disabled){background:#4b5563}.btn.outline[data-v-3688e510]{background:transparent;border:1px solid #01532b;color:#01532b}.btn.outline[data-v-3688e510]:hover:not(:disabled){background:#01532b;color:#fff}@media (max-width:768px){.modal-dialog[data-v-3688e510]{max-height:95vh;width:98%}.form-grid[data-v-3688e510]{gap:12px;grid-template-columns:1fr}.stepper[data-v-3688e510]{padding:12px}.step-line[data-v-3688e510]{margin:0 12px;width:40px}.modal-body[data-v-3688e510]{padding:16px}.date-group[data-v-3688e510],.location-group[data-v-3688e510],.passport-group[data-v-3688e510]{grid-template-columns:1fr}.actions[data-v-3688e510]{flex-wrap:wrap}.btn[data-v-3688e510]{flex:1;min-width:120px}.photo-upload-container[data-v-3688e510]{align-items:flex-start;flex-direction:column}.photo-actions[data-v-3688e510]{flex-direction:row}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03428464_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03428464_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03428464_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03428464_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03428464_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-03428464]{align-items:center;animation:fadeIn-03428464 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-03428464{0%{opacity:0}to{opacity:1}}.view-dialog[data-v-03428464]{animation:slideIn-03428464 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1000px;overflow:hidden;width:95%}@keyframes slideIn-03428464{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-03428464]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-03428464]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-03428464]{font-size:20px;opacity:.9}.modal-title[data-v-03428464]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-03428464]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-03428464]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-03428464]{max-height:70vh;overflow-y:auto;padding:24px}.empty-state[data-v-03428464]{align-items:center;color:#6b7280;display:flex;flex-direction:column;justify-content:center;padding:60px 40px}.empty-state i[data-v-03428464]{color:#d1d5db;font-size:48px;margin-bottom:16px}.empty-state p[data-v-03428464]{font-size:16px;margin:0}.applicant-header[data-v-03428464]{align-items:center;background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;display:flex;margin-bottom:24px;padding:24px}.applicant-avatar[data-v-03428464]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:40px;height:80px;justify-content:center;margin-right:24px;width:80px}.applicant-basic-info[data-v-03428464]{flex:1}.applicant-name[data-v-03428464]{color:#1e293b;font-size:24px;font-weight:700;margin:0 0 8px}.applicant-meta[data-v-03428464]{align-items:center;display:flex;gap:16px;margin-bottom:12px}.application-date[data-v-03428464]{color:#64748b;font-size:14px}.eligibility-status[data-v-03428464]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:20px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;padding:8px 16px}.eligibility-status.eligible[data-v-03428464]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.detail-sections[data-v-03428464]{display:flex;flex-direction:column;gap:24px}.detail-section[data-v-03428464]{background:#fff;border:2px solid #f1f5f9;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:20px}.detail-section.eligibility-summary[data-v-03428464]{background:linear-gradient(135deg,#fef3c7,#fde68a);border-color:#f59e0b}.section-title[data-v-03428464]{align-items:center;border-bottom:2px solid #e5e7eb;color:#374151;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px;padding-bottom:8px}.section-title i[data-v-03428464]{color:#667eea}.detail-grid[data-v-03428464]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.detail-item[data-v-03428464]{display:flex;flex-direction:column;gap:6px}.detail-item.full-width[data-v-03428464]{grid-column:1/-1}.detail-label[data-v-03428464]{align-items:center;color:#6b7280;display:flex;font-size:12px;font-weight:600;gap:6px;letter-spacing:.5px;text-transform:uppercase}.detail-label i[data-v-03428464]{color:#9ca3af;width:12px}.detail-value[data-v-03428464]{color:#374151;font-size:14px;font-weight:500}.age-info[data-v-03428464]{color:#6b7280;font-size:13px}.email-link[data-v-03428464],.phone-link[data-v-03428464]{color:#3b82f6;-webkit-text-decoration:none;text-decoration:none;transition:color .2s}.email-link[data-v-03428464]:hover,.phone-link[data-v-03428464]:hover{color:#1d4ed8;-webkit-text-decoration:underline;text-decoration:underline}.qualifications-grid[data-v-03428464]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}.qualification-card[data-v-03428464]{align-items:center;background:rgba(239,68,68,.05);border:2px solid #fecaca;border-radius:10px;display:flex;padding:16px;transition:all .3s ease}.qualification-card.valid[data-v-03428464]{background:rgba(34,197,94,.05);border-color:#bbf7d0}.qualification-card.bonus[data-v-03428464]{background:rgba(251,191,36,.05);border-color:#fde68a}.qualification-icon[data-v-03428464]{align-items:center;background:rgba(239,68,68,.1);border-radius:50%;color:#dc2626;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;margin-right:12px;width:40px}.qualification-card.valid .qualification-icon[data-v-03428464]{background:rgba(34,197,94,.1);color:#15803d}.qualification-card.bonus .qualification-icon[data-v-03428464]{background:rgba(251,191,36,.1);color:#d97706}.qualification-content[data-v-03428464]{flex:1}.qualification-title[data-v-03428464]{color:#374151;font-size:14px;font-weight:600;margin-bottom:2px}.qualification-status[data-v-03428464]{color:#6b7280;font-size:12px}.qualification-check[data-v-03428464]{align-items:center;background:rgba(239,68,68,.1);border-radius:50%;color:#dc2626;display:flex;font-size:12px;height:24px;justify-content:center;width:24px}.qualification-card.valid .qualification-check[data-v-03428464]{background:rgba(34,197,94,.1);color:#15803d}.qualification-card.bonus .qualification-check[data-v-03428464]{background:rgba(251,191,36,.1);color:#d97706}.overall-eligibility[data-v-03428464]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:12px;display:flex;padding:20px}.overall-eligibility.eligible[data-v-03428464]{background:rgba(34,197,94,.1);border-color:#22c55e}.eligibility-icon[data-v-03428464]{align-items:center;background:rgba(239,68,68,.2);border-radius:50%;color:#dc2626;display:flex;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.overall-eligibility.eligible .eligibility-icon[data-v-03428464]{background:rgba(34,197,94,.2);color:#15803d}.eligibility-content[data-v-03428464]{flex:1}.eligibility-title[data-v-03428464]{color:#dc2626;font-size:18px;font-weight:700;margin-bottom:4px}.overall-eligibility.eligible .eligibility-title[data-v-03428464]{color:#15803d}.eligibility-description[data-v-03428464]{color:#6b7280;font-size:14px;line-height:1.5}.bonus-note[data-v-03428464]{color:#d97706;font-weight:600}.status-badge[data-v-03428464]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.pending[data-v-03428464]{background-color:#fef3c7;color:#d97706}.status-badge.approved[data-v-03428464]{background-color:#d1fae5;color:#065f46}.status-badge.rejected[data-v-03428464]{background-color:#fee2e2;color:#dc2626}.gender-badge[data-v-03428464]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 8px;text-transform:uppercase}.gender-badge.male[data-v-03428464]{background-color:#dbeafe;color:#3b82f6}.gender-badge.female[data-v-03428464]{background-color:#fce7f3;color:#ec4899}.modal-footer[data-v-03428464]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-03428464]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-03428464]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-primary[data-v-03428464]{background:linear-gradient(135deg,#01532b,#337555);color:#fff}.btn-secondary[data-v-03428464]{background:#6c757d;color:#fff}@media (max-width:768px){.view-dialog[data-v-03428464]{margin:10px;width:98%}.applicant-header[data-v-03428464]{flex-direction:column;gap:16px;text-align:center}.applicant-avatar[data-v-03428464]{margin-right:0}.applicant-meta[data-v-03428464]{flex-wrap:wrap;justify-content:center}.detail-grid[data-v-03428464],.qualifications-grid[data-v-03428464]{grid-template-columns:1fr}.overall-eligibility[data-v-03428464]{flex-direction:column;gap:16px;text-align:center}.eligibility-icon[data-v-03428464]{margin-right:0}.modal-body[data-v-03428464],.modal-header[data-v-03428464]{padding:16px}.modal-footer[data-v-03428464]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-03428464]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-f6bdd0ec]{align-items:center;animation:fadeIn-f6bdd0ec .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-f6bdd0ec{0%{opacity:0}to{opacity:1}}.status-dialog[data-v-f6bdd0ec]{animation:slideIn-f6bdd0ec .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:700px;overflow:hidden;width:95%}@keyframes slideIn-f6bdd0ec{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-f6bdd0ec]{align-items:center;border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-header.approve-header[data-v-f6bdd0ec]{background:linear-gradient(135deg,#01532b,#337555)}.modal-header.reject-header[data-v-f6bdd0ec]{background:linear-gradient(135deg,#ef4444,#dc2626)}.modal-title-section[data-v-f6bdd0ec]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-f6bdd0ec]{font-size:20px;opacity:.9}.modal-title[data-v-f6bdd0ec]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-f6bdd0ec]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-f6bdd0ec]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-f6bdd0ec]{max-height:60vh;overflow-y:auto;padding:24px}.empty-state[data-v-f6bdd0ec]{align-items:center;color:#6b7280;display:flex;flex-direction:column;justify-content:center;padding:60px 40px}.empty-state i[data-v-f6bdd0ec]{color:#d1d5db;font-size:48px;margin-bottom:16px}.empty-state p[data-v-f6bdd0ec]{font-size:16px;margin:0}.applicant-summary[data-v-f6bdd0ec]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-bottom:24px;padding:20px}.applicant-info[data-v-f6bdd0ec]{align-items:center;display:flex;gap:16px}.applicant-avatar[data-v-f6bdd0ec]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:30px;height:60px;justify-content:center;width:60px}.applicant-details[data-v-f6bdd0ec]{flex:1}.applicant-name[data-v-f6bdd0ec]{color:#1e293b;font-size:18px;font-weight:700;margin:0 0 8px}.applicant-meta[data-v-f6bdd0ec]{display:flex;flex-wrap:wrap;gap:16px;margin-bottom:8px}.meta-item[data-v-f6bdd0ec]{align-items:center;color:#64748b;display:flex;font-size:13px;gap:4px}.meta-item i[data-v-f6bdd0ec]{color:#94a3b8;width:12px}.current-status[data-v-f6bdd0ec]{color:#475569;font-size:14px;font-weight:500}.action-description[data-v-f6bdd0ec]{align-items:center;border:2px solid;border-radius:12px;display:flex;margin-bottom:24px;padding:20px}.action-description.approve-action[data-v-f6bdd0ec]{background:rgba(16,185,129,.1);border-color:#10b981}.action-description.reject-action[data-v-f6bdd0ec]{background:rgba(239,68,68,.1);border-color:#ef4444}.action-icon[data-v-f6bdd0ec]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:20px;height:50px;justify-content:center;margin-right:16px;width:50px}.approve-action .action-icon[data-v-f6bdd0ec]{background:rgba(16,185,129,.2);color:#059669}.reject-action .action-icon[data-v-f6bdd0ec]{background:rgba(239,68,68,.2);color:#dc2626}.action-content[data-v-f6bdd0ec]{flex:1}.action-title[data-v-f6bdd0ec]{color:#374151;font-size:16px;font-weight:600;margin:0 0 4px}.action-message[data-v-f6bdd0ec]{color:#6b7280;font-size:14px;line-height:1.4;margin:0}.eligibility-check[data-v-f6bdd0ec]{background:#fff;border:2px solid #e5e7eb;border-radius:12px;margin-bottom:24px;padding:20px}.eligibility-title[data-v-f6bdd0ec]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin:0 0 16px}.eligibility-title i[data-v-f6bdd0ec]{color:#3b82f6}.eligibility-items[data-v-f6bdd0ec]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin-bottom:16px}.eligibility-item[data-v-f6bdd0ec]{align-items:center;background:rgba(239,68,68,.05);border:1px solid #fecaca;border-radius:6px;color:#374151;display:flex;font-size:13px;gap:8px;padding:8px 12px}.eligibility-item.valid[data-v-f6bdd0ec]{background:rgba(34,197,94,.05);border-color:#bbf7d0}.eligibility-item.bonus[data-v-f6bdd0ec]{background:rgba(251,191,36,.05);border-color:#fde68a}.eligibility-item i[data-v-f6bdd0ec]{color:#ef4444;flex-shrink:0;width:16px}.eligibility-item.valid i[data-v-f6bdd0ec]{color:#22c55e}.eligibility-item.bonus i[data-v-f6bdd0ec]{color:#f59e0b}.eligibility-result[data-v-f6bdd0ec]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:8px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;justify-content:center;padding:12px 16px;text-align:center}.eligibility-result.eligible[data-v-f6bdd0ec]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.quota-check[data-v-f6bdd0ec]{background:#fff;border:2px solid #e5e7eb;border-radius:12px;margin-bottom:24px;padding:20px}.quota-title[data-v-f6bdd0ec]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin:0 0 16px}.quota-title i[data-v-f6bdd0ec]{color:#8b5cf6}.quota-item[data-v-f6bdd0ec]{align-items:center;background:rgba(139,92,246,.05);border:2px solid #ede9fe;border-radius:10px;display:flex;padding:16px}.quota-item.quota-full[data-v-f6bdd0ec]{background:rgba(239,68,68,.05);border-color:#fecaca}.quota-icon[data-v-f6bdd0ec]{align-items:center;background:rgba(139,92,246,.1);border-radius:50%;color:#8b5cf6;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;margin-right:16px;width:40px}.quota-item.quota-full .quota-icon[data-v-f6bdd0ec]{background:rgba(239,68,68,.1);color:#dc2626}.quota-content[data-v-f6bdd0ec]{flex:1}.quota-text[data-v-f6bdd0ec]{color:#374151;font-size:14px;font-weight:600;margin-bottom:4px}.quota-numbers[data-v-f6bdd0ec]{color:#8b5cf6;font-family:monospace}.quota-item.quota-full .quota-numbers[data-v-f6bdd0ec]{color:#dc2626}.quota-status[data-v-f6bdd0ec]{font-size:12px;font-weight:500}.quota-status.quota-ok[data-v-f6bdd0ec]{color:#059669}.quota-status.quota-exceeded[data-v-f6bdd0ec]{color:#dc2626}.notes-section[data-v-f6bdd0ec]{margin-bottom:24px}.form-label[data-v-f6bdd0ec]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-f6bdd0ec]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-f6bdd0ec]{color:#6b7280;font-size:12px}.required-note[data-v-f6bdd0ec]{color:#dc2626;font-size:12px;font-style:italic;font-weight:400}.form-control[data-v-f6bdd0ec]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;resize:vertical;transition:all .2s ease;width:100%}.form-control[data-v-f6bdd0ec]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-f6bdd0ec]{border-color:#e74c3c}.invalid-feedback[data-v-f6bdd0ec]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.field-hint[data-v-f6bdd0ec]{display:flex;font-size:12px;justify-content:flex-end;margin-top:6px}.text-counter[data-v-f6bdd0ec]{color:#9ca3af;font-size:11px}.warning-section[data-v-f6bdd0ec]{background:rgba(251,191,36,.1);border:2px solid #fbbf24;border-radius:12px;margin-bottom:24px;padding:16px}.warning-content[data-v-f6bdd0ec]{align-items:flex-start;color:#92400e;display:flex;gap:12px}.warning-content i[data-v-f6bdd0ec]{color:#f59e0b;flex-shrink:0;font-size:18px;margin-top:2px}.confirmation-section[data-v-f6bdd0ec]{background:rgba(239,68,68,.05);border:2px solid #fecaca;border-radius:12px;margin-bottom:24px;padding:16px}.confirmation-checkbox[data-v-f6bdd0ec]{align-items:flex-start;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:12px;line-height:1.4}.confirmation-checkbox input[type=checkbox][data-v-f6bdd0ec]{flex-shrink:0;margin:2px 0 0}.checkbox-label[data-v-f6bdd0ec]{font-weight:500}.status-badge[data-v-f6bdd0ec]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.pending[data-v-f6bdd0ec]{background-color:#fef3c7;color:#d97706}.status-badge.approved[data-v-f6bdd0ec]{background-color:#d1fae5;color:#065f46}.status-badge.rejected[data-v-f6bdd0ec]{background-color:#fee2e2;color:#dc2626}.form-errors[data-v-f6bdd0ec]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-f6bdd0ec]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-f6bdd0ec]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.modal-footer[data-v-f6bdd0ec]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-f6bdd0ec]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-f6bdd0ec]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-secondary[data-v-f6bdd0ec]{background:#6c757d;color:#fff}.btn-success[data-v-f6bdd0ec]{background:linear-gradient(135deg,#10b981,#059669);color:#fff}.btn-danger[data-v-f6bdd0ec]{background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff}.btn[data-v-f6bdd0ec]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-f6bdd0ec]{animation:spin-f6bdd0ec 1s linear infinite}@keyframes spin-f6bdd0ec{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.status-dialog[data-v-f6bdd0ec]{margin:10px;width:98%}.applicant-info[data-v-f6bdd0ec]{flex-direction:column;gap:12px;text-align:center}.applicant-meta[data-v-f6bdd0ec]{flex-wrap:wrap;justify-content:center}.action-description[data-v-f6bdd0ec]{flex-direction:column;gap:16px;text-align:center}.action-icon[data-v-f6bdd0ec]{margin-right:0}.eligibility-items[data-v-f6bdd0ec]{grid-template-columns:1fr}.modal-body[data-v-f6bdd0ec],.modal-header[data-v-f6bdd0ec]{padding:16px}.modal-footer[data-v-f6bdd0ec]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-f6bdd0ec]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(903);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3f074f66", content, true, context)
};

/***/ }),

/***/ 849:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(348);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=3688e510&scoped=true&









var ApplicantDialogvue_type_template_id_3688e510_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.previewDialog.visible,
      callback: function ($$v) {
        _vm.$set(_vm.previewDialog, "visible", $$v);
      },
      expression: "previewDialog.visible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "headline"
  }, [_vm._v("\n        " + _vm._s(_vm.previewDialog.title) + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": function ($event) {
        _vm.previewDialog.visible = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "d-flex justify-center"
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.previewDialog.image,
      "max-height": "500",
      "contain": ""
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-dialog\" data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-3688e510><h5 class=\"modal-title\" data-v-3688e510><i class=\"fas fa-user-plus\" data-v-3688e510></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກ') + "\n      ") + "</h5> <button class=\"close-btn\" data-v-3688e510><i class=\"fas fa-times\" data-v-3688e510></i></button></div> <div class=\"stepper\" data-v-3688e510><div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 1,
    completed: _vm.currentStep > 1
  }) + " data-v-3688e510><span class=\"step-number\" data-v-3688e510>" + _vm._ssrEscape(_vm._s(_vm.currentStep > 1 ? '✓' : '1')) + "</span> <span class=\"step-label\" data-v-3688e510>ພື້ນຖານ</span></div> <div" + _vm._ssrClass("step-line", {
    completed: _vm.currentStep > 1
  }) + " data-v-3688e510></div> <div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 2,
    available: _vm.step1Valid
  }) + " data-v-3688e510><span class=\"step-number\" data-v-3688e510>2</span> <span class=\"step-label\" data-v-3688e510>ລາຍລະອຽດ</span></div></div> "), _vm._ssrNode("<form data-v-3688e510>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-3688e510>", "</div>", [_vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 1 ? '' : 'none'
  }) + " data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-3688e510>", "</div>", [_vm._ssrNode("<label data-v-3688e510><i class=\"fas fa-briefcase\" data-v-3688e510></i>\n                Job Batch\n              </label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.jobBatchId,
      expression: "formData.jobBatchId"
    }],
    class: {
      error: _vm.errors.jobBatchId
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "jobBatchId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກ Job Batch")]), _vm._v(" "), _vm._l(_vm.jobBatches, function (batch) {
    return _c('option', {
      key: batch.id,
      domProps: {
        "value": batch.id
      }
    }, [_vm._v("\n                  " + _vm._s(batch.batchName) + _vm._s(batch.workPlace ? ` - ${batch.workPlace}` : '') + "\n                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-3688e510><label class=\"required\" data-v-3688e510><i class=\"fas fa-user\" data-v-3688e510></i>\n                ຊື່\n              </label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass(null, {
    error: _vm.errors.firstName
  }) + " data-v-3688e510></div> <div class=\"form-group\" data-v-3688e510><label class=\"required\" data-v-3688e510><i class=\"fas fa-user\" data-v-3688e510></i>\n                ນາມສະກຸນ\n              </label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass(null, {
    error: _vm.errors.lastName
  }) + " data-v-3688e510></div> <div class=\"form-group\" data-v-3688e510><label class=\"required\" data-v-3688e510><i class=\"fas fa-venus-mars\" data-v-3688e510></i>\n                ເພດ\n              </label> <div class=\"radio-group\" data-v-3688e510><label data-v-3688e510><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-3688e510>\n                  ຊາຍ</label> <label data-v-3688e510><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-3688e510>\n                  ຍິງ</label></div></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-calendar\" data-v-3688e510></i>\n                ອາຍຸ\n              </label> <input type=\"number\" min=\"18\" max=\"32\" placeholder=\"ອາຍຸ\"" + _vm._ssrAttr("value", _vm.formData.age) + " data-v-3688e510></div> <div class=\"form-group full-width\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-home\" data-v-3688e510></i>\n                ທີ່ຢູ່\n              </label> <textarea rows=\"2\" placeholder=\"ທີ່ຢູ່ລະອຽດ...\" data-v-3688e510>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-passport\" data-v-3688e510></i> <input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.passportAvailability) ? _vm._i(_vm.formData.passportAvailability, null) > -1 : _vm.formData.passportAvailability) + " data-v-3688e510>\n                ມີໜັງສືເດີນທາງ\n              </label></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-camera\" data-v-3688e510></i>\n                ຮູບຜູ້ສະໝັກ\n              </label> <div class=\"photo-upload-container\" data-v-3688e510><div class=\"photo-upload\" data-v-3688e510>" + (_vm.applicantPhotoPreview || _vm.formData.applicantPhoto ? "<img" + _vm._ssrAttr("src", _vm.applicantPhotoPreview || _vm.getImageUrl(_vm.formData.applicantPhoto)) + " alt=\"Applicant\" style=\"cursor: pointer\" data-v-3688e510>" : "<div class=\"photo-placeholder\" data-v-3688e510><i class=\"fas fa-plus\" data-v-3688e510></i> <span data-v-3688e510>ເພີ່ມຮູບ</span></div>") + "</div> " + (_vm.applicantPhotoFile || _vm.formData.applicantPhoto ? "<div class=\"photo-actions\" data-v-3688e510><button type=\"button\" title=\"ລຶບຮູບ\" class=\"btn-remove-photo\" data-v-3688e510><i class=\"fas fa-trash\" data-v-3688e510></i></button></div>" : "<!---->") + "</div> <input type=\"file\" accept=\"image/*\" style=\"display: none\" data-v-3688e510></div> " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-id-badge\" data-v-3688e510></i>\n                ຮູບໜັງສື\n              </label> <div class=\"photo-upload-container\" data-v-3688e510><div class=\"photo-upload\" data-v-3688e510>" + (_vm.passportPhotoPreview || _vm.formData.passportPhoto ? "<img" + _vm._ssrAttr("src", _vm.passportPhotoPreview || _vm.getImageUrl(_vm.formData.passportPhoto)) + " alt=\"Passport\" style=\"cursor: pointer\" data-v-3688e510>" : "<div class=\"photo-placeholder\" data-v-3688e510><i class=\"fas fa-plus\" data-v-3688e510></i> <span data-v-3688e510>ເພີ່ມຮູບ</span></div>") + "</div> " + (_vm.passportPhotoFile || _vm.formData.passportPhoto ? "<div class=\"photo-actions\" data-v-3688e510><button type=\"button\" title=\"ລຶບຮູບ\" class=\"btn-remove-photo\" data-v-3688e510><i class=\"fas fa-trash\" data-v-3688e510></i></button></div>" : "<!---->") + "</div> <input type=\"file\" accept=\"image/*\" style=\"display: none\" data-v-3688e510></div>" : "<!---->"))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 2 ? '' : 'none'
  }) + " data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-3688e510>", "</div>", [_vm._ssrNode("<label data-v-3688e510><i class=\"fas fa-flag\" data-v-3688e510></i>\n                ສະຖານະ\n              </label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.status,
      expression: "formData.status"
    }],
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
      "value": "INTERVIEW"
    }
  }, [_vm._v("Apply")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REGISTER"
    }
  }, [_vm._v("Register")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rejected"
    }
  }, [_vm._v("Rejected")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-3688e510><label class=\"required\" data-v-3688e510><i class=\"fas fa-phone\" data-v-3688e510></i>\n                ເບີໂທ\n              </label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass(null, {
    error: _vm.errors.phone
  }) + " data-v-3688e510></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-exclamation-triangle\" data-v-3688e510></i>\n                ເບີສຸກເສີນ\n              </label> <input type=\"tel\" placeholder=\"+856 20 87654321\"" + _vm._ssrAttr("value", _vm.formData.emergencyContactNo) + " data-v-3688e510></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-3688e510>", "</div>", [_vm._ssrNode("<label data-v-3688e510><i class=\"fas fa-heart\" data-v-3688e510></i>\n                ສະຖານະການແຕ່ງງານ\n              </label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.maritalStatus,
      expression: "formData.maritalStatus"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "maritalStatus", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "single"
    }
  }, [_vm._v("ໂສດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "married"
    }
  }, [_vm._v("ແຕ່ງງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "divorced"
    }
  }, [_vm._v("ຢ່າຮ້າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "widowed"
    }
  }, [_vm._v("ເປັນເມ່າຍ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-building\" data-v-3688e510></i>\n                ສະຖານທີ່ເຮັດວຽກ\n              </label> <input type=\"text\" placeholder=\"ບໍລິສັດ / ໂຮງງານ\"" + _vm._ssrAttr("value", _vm.formData.workPlace) + " data-v-3688e510></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-map-marker-alt\" data-v-3688e510></i>\n                ບ້ານ/ເມືອງ/ແຂວງ\n              </label> <div class=\"location-group\" data-v-3688e510><input type=\"text\" placeholder=\"ບ້ານ\"" + _vm._ssrAttr("value", _vm.formData.village) + " data-v-3688e510> <input type=\"text\" placeholder=\"ເມືອງ\"" + _vm._ssrAttr("value", _vm.formData.city) + " data-v-3688e510> <input type=\"text\" placeholder=\"ແຂວງ\"" + _vm._ssrAttr("value", _vm.formData.district) + " data-v-3688e510></div></div> " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-id-card\" data-v-3688e510></i>\n                ເລກ/ໝົດອາຍຸ\n              </label> <div class=\"passport-group\" data-v-3688e510><input type=\"text\" placeholder=\"PA1234567\"" + _vm._ssrAttr("value", _vm.formData.passportNo) + " data-v-3688e510> <input type=\"date\"" + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.formData.passportExpiredDate) + " data-v-3688e510></div></div>" : "<!---->") + " <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-calendar\" data-v-3688e510></i>\n                ວັນທີສໍາຄັນ\n              </label> <div class=\"date-group\" data-v-3688e510><input type=\"date\" placeholder=\"ເລີ່ມສັນຍາ\"" + _vm._ssrAttr("value", _vm.formData.contactStartDate) + " data-v-3688e510> <input type=\"date\" placeholder=\"ສິ້ນສຸດສັນຍາ\"" + _vm._ssrAttr("value", _vm.formData.contactEndDate) + " data-v-3688e510></div></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-clock\" data-v-3688e510></i>\n                ເວລາ\n              </label> <div class=\"date-group\" data-v-3688e510><input type=\"datetime-local\" placeholder=\"ລົງທະບຽນ\"" + _vm._ssrAttr("value", _vm.formData.registertDate) + " data-v-3688e510> <input type=\"datetime-local\" placeholder=\"ສໍາພາດ\"" + _vm._ssrAttr("value", _vm.formData.interviewExamDate) + " data-v-3688e510></div></div>")], 2)]), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-3688e510><strong data-v-3688e510>ແກ້ໄຂ:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formErrors.join(', ')) + "\n        ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer\" data-v-3688e510>" + (_vm.currentStep === 1 ? "<div class=\"actions\" data-v-3688e510><button type=\"button\" class=\"btn secondary\" data-v-3688e510>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid || _vm.loading) + " class=\"btn outline\" data-v-3688e510>" + _vm._ssrEscape("\n            " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : 'ບັນທຶກ') + "\n          ") + "</button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid) + " class=\"btn primary\" data-v-3688e510>\n            ສືບຕໍ່\n          </button></div>" : "<!---->") + " " + (_vm.currentStep === 2 ? "<div class=\"actions\" data-v-3688e510><button type=\"button\" class=\"btn secondary\" data-v-3688e510>\n            ກັບຄືນ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", !_vm.isFormValid || _vm.loading) + " class=\"btn primary\" data-v-3688e510>" + _vm._ssrEscape("\n            " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button></div>" : "<!---->") + "</div>")], 2)], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=3688e510&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantDialog',
  props: {
    visible: Boolean,
    applicant: Object,
    jobBatches: {
      type: Array,
      default: () => []
    }
    // apiBaseUrl: {
    //   type: String,
    //   default: this.$axios.defaults.baseURL || '',
    // },
  },

  data() {
    return {
      previewDialog: {
        visible: false,
        title: '',
        image: ''
      },
      loading: false,
      currentStep: 1,
      applicantPhotoPreview: null,
      passportPhotoPreview: null,
      applicantPhotoFile: null,
      passportPhotoFile: null,
      formData: {
        firstName: '',
        lastName: '',
        gender: '',
        age: null,
        maritalStatus: '',
        phone: '',
        emergencyContactNo: '',
        address: '',
        village: '',
        city: '',
        district: '',
        passportAvailability: false,
        passportNo: '',
        passportExpiredDate: '',
        workPlace: '',
        contactStartDate: '',
        contactEndDate: '',
        registertDate: '',
        interviewExamDate: '',
        passportPhoto: '',
        applicantPhoto: '',
        jobBatchId: null,
        status: 'INTERVIEW'
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.applicant && this.applicant.id;
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    step1Valid() {
      return this.formData.firstName.trim() && this.formData.lastName.trim() && this.formData.gender;
    },
    isFormValid() {
      const step2Valid = this.currentStep === 2 ? this.formData.phone && this.formData.phone.trim() : true;
      return this.step1Valid && step2Valid && this.formErrors.length === 0;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm();
        this.loadJobBatches();
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
    },
    'formData.passportAvailability'(newVal) {
      if (!newVal) {
        this.formData.passportNo = '';
        this.formData.passportExpiredDate = '';
        this.formData.passportPhoto = '';
        this.passportPhotoPreview = null;
        this.passportPhotoFile = null;
      }
    }
  },
  methods: {
    openPreview(title, image) {
      this.previewDialog.title = title;
      this.previewDialog.image = image;
      this.previewDialog.visible = true;
    },
    async loadJobBatches() {
      if (!this.jobBatches || this.jobBatches.length === 0) {
        this.$emit('load-job-batches');
      }
    },
    goToStep(step) {
      if (step === 1 || step === 2 && this.step1Valid) {
        this.currentStep = step;
        this.errors = {};
        this.formErrors = [];
      }
    },
    continueToStep2() {
      if (this.step1Valid) {
        this.currentStep = 2;
      }
    },
    async saveStep1Only() {
      if (!this.validateStep1()) return;
      this.loading = true;
      try {
        const formData = this.createFormData(true); // partial save flag
        this.$emit('save', formData, true); // emit with partial flag
      } catch (error) {
        this.formErrors.push('An error occurred while saving');
        console.error('Save error:', error);
      } finally {
        this.loading = false;
      }
    },
    initializeForm() {
      if (this.applicant && this.applicant.id) {
        this.formData = {
          firstName: this.applicant.firstName || '',
          lastName: this.applicant.lastName || '',
          gender: this.applicant.gender || '',
          age: this.applicant.age || null,
          maritalStatus: this.applicant.maritalStatus || '',
          phone: this.applicant.phone || '',
          emergencyContactNo: this.applicant.emergencyContactNo || '',
          address: this.applicant.address || '',
          village: this.applicant.village || '',
          city: this.applicant.city || '',
          district: this.applicant.district || '',
          passportAvailability: this.applicant.passportAvailability || false,
          passportNo: this.applicant.passportNo || '',
          passportExpiredDate: this.applicant.passportExpiredDate ? this.applicant.passportExpiredDate.split('T')[0] : '',
          workPlace: this.applicant.workPlace || '',
          contactStartDate: this.applicant.contactStartDate ? this.applicant.contactStartDate.split('T')[0] : '',
          contactEndDate: this.applicant.contactEndDate ? this.applicant.contactEndDate.split('T')[0] : '',
          registertDate: this.applicant.registertDate ? this.applicant.registertDate.slice(0, 16) : '',
          interviewExamDate: this.applicant.interviewExamDate ? this.applicant.interviewExamDate.slice(0, 16) : '',
          passportPhoto: this.applicant.passportPhoto || '',
          applicantPhoto: this.applicant.applicantPhoto || '',
          jobBatchId: this.applicant.jobBatchId || null,
          status: this.applicant.status || 'INTERVIEW'
        };

        // Reset file previews when editing
        this.applicantPhotoPreview = null;
        this.passportPhotoPreview = null;
        this.applicantPhotoFile = null;
        this.passportPhotoFile = null;
        if (this.applicant.phone) {
          this.currentStep = 2;
        }
      } else {
        this.resetFormData();
      }
      this.errors = {};
      this.formErrors = [];
    },
    resetFormData() {
      this.formData = {
        firstName: '',
        lastName: '',
        gender: '',
        age: null,
        maritalStatus: '',
        phone: '',
        emergencyContactNo: '',
        address: '',
        village: '',
        city: '',
        district: '',
        passportAvailability: false,
        passportNo: '',
        passportExpiredDate: '',
        workPlace: '',
        contactStartDate: '',
        contactEndDate: '',
        registertDate: '',
        interviewExamDate: '',
        passportPhoto: '',
        applicantPhoto: '',
        jobBatchId: null,
        status: 'INTERVIEW'
      };
      this.applicantPhotoPreview = null;
      this.passportPhotoPreview = null;
      this.applicantPhotoFile = null;
      this.passportPhotoFile = null;
    },
    resetForm() {
      this.resetFormData();
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
      this.currentStep = 1;
    },
    validateStep1() {
      this.errors = {};
      this.formErrors = [];
      if (!this.formData.firstName.trim()) {
        this.errors.firstName = true;
        this.formErrors.push('ຊື່ຈຳເປັນ');
      }
      if (!this.formData.lastName.trim()) {
        this.errors.lastName = true;
        this.formErrors.push('ນາມສະກຸນຈຳເປັນ');
      }
      if (!this.formData.gender) {
        this.errors.gender = true;
        this.formErrors.push('ເລືອກເພດ');
      }
      if (this.formData.age && (this.formData.age < 18 || this.formData.age > 32)) {
        this.formErrors.push('ອາຍຸ 18-32 ປີ');
      }
      return this.formErrors.length === 0;
    },
    validateForm() {
      if (!this.validateStep1()) return false;
      if (this.currentStep === 2) {
        if (!this.formData.phone.trim()) {
          this.errors.phone = true;
          this.formErrors.push('ເບີໂທຈຳເປັນ');
        }
      }
      return this.formErrors.length === 0;
    },
    createFormData(isPartial = false) {
      const formData = new FormData();

      // Add text fields
      const fieldsToInclude = isPartial ? ['firstName', 'lastName', 'gender', 'age', 'address', 'passportAvailability', 'jobBatchId', 'status'] : Object.keys(this.formData);
      fieldsToInclude.forEach(key => {
        const value = this.formData[key];
        // Skip photo path fields as we'll handle files separately
        if (key !== 'passportPhoto' && key !== 'applicantPhoto') {
          if (value !== '' && value !== null) {
            formData.append(key, value);
          }
        }
      });

      // ✅ Applicant Photo: file → path → empty
      if (this.applicantPhotoFile) {
        formData.append('applicantPhoto', this.applicantPhotoFile);
      } else if (this.formData.applicantPhoto) {
        formData.append('applicantPhoto', this.formData.applicantPhoto);
      } else {
        formData.append('applicantPhoto', '');
      }

      // ✅ Passport Photo: only if passport is available
      if (this.formData.passportAvailability) {
        if (this.passportPhotoFile) {
          formData.append('passportPhoto', this.passportPhotoFile);
        } else if (this.formData.passportPhoto) {
          formData.append('passportPhoto', this.formData.passportPhoto);
        } else {
          formData.append('passportPhoto', '');
        }
      }
      return formData;
    },
    async saveApplicant() {
      if (!this.validateForm()) return;
      this.loading = true;
      try {
        const formData = this.createFormData();
        this.$emit('save', formData, false);
      } catch (error) {
        this.formErrors.push('Error saving');
        console.error('Save error:', error);
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
    triggerFileInput(type) {
      if (type === 'applicant') {
        this.$refs.applicantFileInput.click();
      } else if (type === 'passport') {
        this.$refs.passportFileInput.click();
      }
    },
    handleFileSelect(event, type) {
      const file = event.target.files[0];
      if (!file) return;

      // Clear previous errors
      this.formErrors = this.formErrors.filter(err => !err.includes('ຮູບ'));
      if (!file.type.startsWith('image/')) {
        this.formErrors.push('ເລືອກຮູບພາບເທົ່ານັ້ນ');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.formErrors.push('ຮູບໃຫຍ່ເກີນ 5MB');
        return;
      }

      // Store the file
      if (type === 'applicant') {
        this.applicantPhotoFile = file;
      } else if (type === 'passport') {
        this.passportPhotoFile = file;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = e => {
        if (type === 'applicant') {
          this.applicantPhotoPreview = e.target.result;
        } else if (type === 'passport') {
          this.passportPhotoPreview = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    removePhoto(type) {
      if (type === 'applicant') {
        this.applicantPhotoFile = null;
        this.applicantPhotoPreview = null;
        this.formData.applicantPhoto = '';
        if (this.$refs.applicantFileInput) {
          this.$refs.applicantFileInput.value = '';
        }
      } else if (type === 'passport') {
        this.passportPhotoFile = null;
        this.passportPhotoPreview = null;
        this.formData.passportPhoto = '';
        if (this.$refs.passportFileInput) {
          this.$refs.passportFileInput.value = '';
        }
      }
    },
    getImageUrl(path) {
      if (!path) return null;
      // If path is already a full URL, return it
      if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
      }
      // Otherwise, prepend the API base URL
      return `${this.$axios.defaults.baseURL}${path}`;
    }
  }
});
// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var applicants_ApplicantDialogvue_type_script_lang_js_ = (ApplicantDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(629)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantDialogvue_type_script_lang_js_,
  ApplicantDialogvue_type_template_id_3688e510_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "3688e510",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantViewDialog/index.vue?vue&type=template&id=03428464&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog view-dialog\" data-v-03428464><div class=\"modal-header\" data-v-03428464><div class=\"modal-title-section\" data-v-03428464><i class=\"fas fa-user-circle modal-icon\" data-v-03428464></i> <h5 class=\"modal-title\" data-v-03428464>ລາຍລະອຽດຜູ້ສະໝັກ</h5></div> <button class=\"close-btn\" data-v-03428464><i class=\"fas fa-times\" data-v-03428464></i></button></div> <div class=\"modal-body\" data-v-03428464>" + (!_vm.applicant ? "<div class=\"empty-state\" data-v-03428464><i class=\"fas fa-user-slash\" data-v-03428464></i> <p data-v-03428464>ບໍ່ພົບຂໍ້ມູນຜູ້ສະໝັກ</p></div>" : "<div class=\"applicant-details\" data-v-03428464><div class=\"applicant-header\" data-v-03428464><div class=\"applicant-avatar\" data-v-03428464><i class=\"fas fa-user-circle\" data-v-03428464></i></div> <div class=\"applicant-basic-info\" data-v-03428464><h3 class=\"applicant-name\" data-v-03428464>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</h3> <div class=\"applicant-meta\" data-v-03428464><span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-03428464>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n              ") + "</span> <span class=\"application-date\" data-v-03428464>" + _vm._ssrEscape("\n                ສະໝັກເມື່ອ " + _vm._s(_vm.formatDate(_vm.applicant.applicationDate)) + "\n              ") + "</span></div> <div" + _vm._ssrClass("eligibility-status", {
    'eligible': _vm.isEligible
  }) + " data-v-03428464><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-03428464></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.isEligible ? 'ມີຄຸນສົມບັດເໝາະສົມ' : 'ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ') + "\n            ") + "</div></div></div> <div class=\"detail-sections\" data-v-03428464><div class=\"detail-section\" data-v-03428464><h4 class=\"section-title\" data-v-03428464><i class=\"fas fa-user\" data-v-03428464></i>\n              ຂໍ້ມູນສ່ວນຕົວ\n            </h4> <div class=\"detail-grid\" data-v-03428464><div class=\"detail-item\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-user\" data-v-03428464></i>\n                  ຊື່ເຕັມ\n                </div> <div class=\"detail-value\" data-v-03428464>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</div></div> <div class=\"detail-item\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-venus-mars\" data-v-03428464></i>\n                  ເພດ\n                </div> <div class=\"detail-value\" data-v-03428464><span" + _vm._ssrClass(null, ['gender-badge', _vm.applicant.gender]) + " data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatGender(_vm.applicant.gender)) + "\n                  ") + "</span></div></div> <div class=\"detail-item\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-birthday-cake\" data-v-03428464></i>\n                  ວັນເກີດ / ອາຍຸ\n                </div> <div class=\"detail-value\" data-v-03428464>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatDate(_vm.applicant.dateOfBirth)) + "\n                  ") + "<span class=\"age-info\" data-v-03428464>" + _vm._ssrEscape("(" + _vm._s(_vm.calculateAge()) + " ປີ)") + "</span></div></div></div></div> <div class=\"detail-section\" data-v-03428464><h4 class=\"section-title\" data-v-03428464><i class=\"fas fa-address-book\" data-v-03428464></i>\n              ຂໍ້ມູນການຕິດຕໍ່\n            </h4> <div class=\"detail-grid\" data-v-03428464><div class=\"detail-item\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-phone\" data-v-03428464></i>\n                  ເບີໂທລະສັບ\n                </div> <div class=\"detail-value\" data-v-03428464><a" + _vm._ssrAttr("href", `tel:${_vm.applicant.phone}`) + " class=\"phone-link\" data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.phone) + "\n                  ") + "</a></div></div> " + (_vm.applicant.email ? "<div class=\"detail-item\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-envelope\" data-v-03428464></i>\n                  ອີເມວ\n                </div> <div class=\"detail-value\" data-v-03428464><a" + _vm._ssrAttr("href", `mailto:${_vm.applicant.email}`) + " class=\"email-link\" data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.email) + "\n                  ") + "</a></div></div>" : "<!---->") + " " + (_vm.applicant.address ? "<div class=\"detail-item full-width\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-map-marker-alt\" data-v-03428464></i>\n                  ທີ່ຢູ່\n                </div> <div class=\"detail-value\" data-v-03428464>" + _vm._ssrEscape(_vm._s(_vm.applicant.address)) + "</div></div>" : "<!---->") + "</div></div> <div class=\"detail-section\" data-v-03428464><h4 class=\"section-title\" data-v-03428464><i class=\"fas fa-clipboard-check\" data-v-03428464></i>\n              ຄຸນສົມບັດ &amp; ເງື່ອນໄຂ\n            </h4> <div class=\"qualifications-grid\" data-v-03428464><div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.hasPassport
  }) + " data-v-03428464><div class=\"qualification-icon\" data-v-03428464><i class=\"fas fa-passport\" data-v-03428464></i></div> <div class=\"qualification-content\" data-v-03428464><div class=\"qualification-title\" data-v-03428464>ໜັງສືເດີນທາງ</div> <div class=\"qualification-status\" data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.hasPassport ? 'ມີ' : 'ບໍ່ມີ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-03428464><i" + _vm._ssrClass(null, _vm.applicant.hasPassport ? 'fas fa-check' : 'fas fa-times') + " data-v-03428464></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.healthStatus === 'good'
  }) + " data-v-03428464><div class=\"qualification-icon\" data-v-03428464><i class=\"fas fa-heartbeat\" data-v-03428464></i></div> <div class=\"qualification-content\" data-v-03428464><div class=\"qualification-title\" data-v-03428464>ສຸຂະພາບ</div> <div class=\"qualification-status\" data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatHealthStatus(_vm.applicant.healthStatus)) + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-03428464><i" + _vm._ssrClass(null, _vm.applicant.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times') + " data-v-03428464></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.eyesightGood
  }) + " data-v-03428464><div class=\"qualification-icon\" data-v-03428464><i class=\"fas fa-eye\" data-v-03428464></i></div> <div class=\"qualification-content\" data-v-03428464><div class=\"qualification-title\" data-v-03428464>ສາຍຕາ</div> <div class=\"qualification-status\" data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.eyesightGood ? 'ດີ' : 'ບໍ່ດີ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-03428464><i" + _vm._ssrClass(null, _vm.applicant.eyesightGood ? 'fas fa-check' : 'fas fa-times') + " data-v-03428464></i></div></div> " + (_vm.hasChineseLanguageBonus ? "<div class=\"qualification-card bonus\" data-v-03428464><div class=\"qualification-icon\" data-v-03428464><i class=\"fas fa-language\" data-v-03428464></i></div> <div class=\"qualification-content\" data-v-03428464><div class=\"qualification-title\" data-v-03428464>ພາສາຈີນ</div> <div class=\"qualification-status\" data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatLanguageLevel(_vm.applicant.chineseLanguageLevel)) + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-03428464><i class=\"fas fa-star\" data-v-03428464></i></div></div>" : "<!---->") + " <div" + _vm._ssrClass("qualification-card", {
    'valid': !_vm.applicant.hasVisibleTattoos
  }) + " data-v-03428464><div class=\"qualification-icon\" data-v-03428464><i class=\"fas fa-paint-brush\" data-v-03428464></i></div> <div class=\"qualification-content\" data-v-03428464><div class=\"qualification-title\" data-v-03428464>ລາຍສັກ</div> <div class=\"qualification-status\" data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.hasVisibleTattoos ? 'ມີລາຍສັກນອກເສື້ອຜ້າ' : 'ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-03428464><i" + _vm._ssrClass(null, !_vm.applicant.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times') + " data-v-03428464></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.isAgeValid
  }) + " data-v-03428464><div class=\"qualification-icon\" data-v-03428464><i class=\"fas fa-calendar\" data-v-03428464></i></div> <div class=\"qualification-content\" data-v-03428464><div class=\"qualification-title\" data-v-03428464>ອາຍຸ</div> <div class=\"qualification-status\" data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.calculateAge()) + " ປີ (" + _vm._s(_vm.isAgeValid ? 'ເໝາະສົມ' : 'ບໍ່ເໝາະສົມ') + ")\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-03428464><i" + _vm._ssrClass(null, _vm.isAgeValid ? 'fas fa-check' : 'fas fa-times') + " data-v-03428464></i></div></div></div></div> <div class=\"detail-section\" data-v-03428464><h4 class=\"section-title\" data-v-03428464><i class=\"fas fa-file-alt\" data-v-03428464></i>\n              ຂໍ້ມູນການສະໝັກ\n            </h4> <div class=\"detail-grid\" data-v-03428464><div class=\"detail-item\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-hashtag\" data-v-03428464></i>\n                  ID\n                </div> <div class=\"detail-value\" data-v-03428464>" + _vm._ssrEscape(_vm._s(_vm.applicant.id)) + "</div></div> <div class=\"detail-item\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-calendar-plus\" data-v-03428464></i>\n                  ວັນທີສະໝັກ\n                </div> <div class=\"detail-value\" data-v-03428464>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.applicant.applicationDate))) + "</div></div> <div class=\"detail-item\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-info-circle\" data-v-03428464></i>\n                  ສະຖານະ\n                </div> <div class=\"detail-value\" data-v-03428464><span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-03428464>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n                  ") + "</span></div></div> " + (_vm.applicant.notes ? "<div class=\"detail-item full-width\" data-v-03428464><div class=\"detail-label\" data-v-03428464><i class=\"fas fa-sticky-note\" data-v-03428464></i>\n                  ໝາຍເຫດ\n                </div> <div class=\"detail-value\" data-v-03428464>" + _vm._ssrEscape(_vm._s(_vm.applicant.notes)) + "</div></div>" : "<!---->") + "</div></div> <div class=\"detail-section eligibility-summary\" data-v-03428464><h4 class=\"section-title\" data-v-03428464><i class=\"fas fa-award\" data-v-03428464></i>\n              ສະຫລຸບຄຸນສົມບັດລວມ\n            </h4> <div" + _vm._ssrClass("overall-eligibility", {
    'eligible': _vm.isEligible
  }) + " data-v-03428464><div class=\"eligibility-icon\" data-v-03428464><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down') + " data-v-03428464></i></div> <div class=\"eligibility-content\" data-v-03428464><div class=\"eligibility-title\" data-v-03428464>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.isEligible ? 'ຜ່ານເງື່ອນໄຂທັງໝົດ' : 'ຍັງບໍ່ຜ່ານເງື່ອນໄຂ') + "\n                ") + "</div> <div class=\"eligibility-description\" data-v-03428464>" + (_vm.isEligible ? "<span data-v-03428464>\n                    ຜູ້ສະໝັກຄົນນີ້ມີຄຸນສົມບັດຄົບຖ້ວນຕາມທີ່ກຳນົດ\n                    " + (_vm.hasChineseLanguageBonus ? "<span class=\"bonus-note\" data-v-03428464>\n                      + ໂບນັສພາສາຈີນ\n                    </span>" : "<!---->") + "</span>" : "<span data-v-03428464>\n                    ຜູ້ສະໝັກຄົນນີ້ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ ກະລຸນາກວດສອບເງື່ອນໄຂຂ້າງເທິງ\n                  </span>") + "</div></div></div></div></div></div>") + "</div> <div class=\"modal-footer\" data-v-03428464><button type=\"button\" class=\"btn btn-secondary\" data-v-03428464><i class=\"fas fa-times\" data-v-03428464></i>\n        ປິດ\n      </button> " + (_vm.applicant && _vm.applicant.status === 'pending' ? "<button type=\"button\" class=\"btn btn-primary\" data-v-03428464><i class=\"fas fa-edit\" data-v-03428464></i>\n        ແກ້ໄຂ\n      </button>" : "<!---->") + "</div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantViewDialog/index.vue?vue&type=template&id=03428464&scoped=true&

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
  
  var style0 = __webpack_require__(631)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantViewDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "03428464",
  "43263967"
  
)

/* harmony default export */ var ApplicantViewDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/StatusUpdateDialog/index.vue?vue&type=template&id=f6bdd0ec&scoped=true&
var render = function render() {
  var _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog status-dialog\" data-v-f6bdd0ec><div" + _vm._ssrClass("modal-header", _vm.headerClass) + " data-v-f6bdd0ec><div class=\"modal-title-section\" data-v-f6bdd0ec><i" + _vm._ssrClass("modal-icon", _vm.headerIcon) + " data-v-f6bdd0ec></i> <h5 class=\"modal-title\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.modalTitle)) + "</h5></div> <button class=\"close-btn\" data-v-f6bdd0ec><i class=\"fas fa-times\" data-v-f6bdd0ec></i></button></div> <form data-v-f6bdd0ec><div class=\"modal-body\" data-v-f6bdd0ec>" + (!_vm.applicant ? "<div class=\"empty-state\" data-v-f6bdd0ec><i class=\"fas fa-user-slash\" data-v-f6bdd0ec></i> <p data-v-f6bdd0ec>ບໍ່ພົບຂໍ້ມູນຜູ້ສະໝັກ</p></div>" : "<div class=\"status-update-content\" data-v-f6bdd0ec><div class=\"applicant-summary\" data-v-f6bdd0ec><div class=\"applicant-info\" data-v-f6bdd0ec><div class=\"applicant-avatar\" data-v-f6bdd0ec><i class=\"fas fa-user-circle\" data-v-f6bdd0ec></i></div> <div class=\"applicant-details\" data-v-f6bdd0ec><h4 class=\"applicant-name\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</h4> <div class=\"applicant-meta\" data-v-f6bdd0ec><span class=\"meta-item\" data-v-f6bdd0ec><i class=\"fas fa-venus-mars\" data-v-f6bdd0ec></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatGender(_vm.applicant.gender)) + "\n                  ") + "</span> <span class=\"meta-item\" data-v-f6bdd0ec><i class=\"fas fa-birthday-cake\" data-v-f6bdd0ec></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.calculateAge()) + " ປີ\n                  ") + "</span> <span class=\"meta-item\" data-v-f6bdd0ec><i class=\"fas fa-phone\" data-v-f6bdd0ec></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.phone) + "\n                  ") + "</span></div> <div class=\"current-status\" data-v-f6bdd0ec>\n                  ສະຖານະປັດຈຸບັນ: \n                  <span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-f6bdd0ec>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n                  ") + "</span></div></div></div></div> <div" + _vm._ssrClass("action-description", _vm.actionClass) + " data-v-f6bdd0ec><div class=\"action-icon\" data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.actionIcon) + " data-v-f6bdd0ec></i></div> <div class=\"action-content\" data-v-f6bdd0ec><h5 class=\"action-title\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.actionTitle)) + "</h5> <p class=\"action-message\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.actionMessage)) + "</p></div></div> " + (_vm.action === 'approve' ? "<div class=\"eligibility-check\" data-v-f6bdd0ec><h6 class=\"eligibility-title\" data-v-f6bdd0ec><i class=\"fas fa-clipboard-check\" data-v-f6bdd0ec></i>\n              ການກວດສອບຄຸນສົມບັດ\n            </h6> <div class=\"eligibility-items\" data-v-f6bdd0ec><div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.isAgeValid
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.isAgeValid ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>" + _vm._ssrEscape("ອາຍຸ 18-32 ປີ (" + _vm._s(_vm.calculateAge()) + " ປີ)") + "</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.hasPassport
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.applicant.hasPassport ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>ມີໜັງສືເດີນທາງ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.healthStatus === 'good'
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.applicant.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>ສຸຂະພາບດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.eyesightGood
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.applicant.eyesightGood ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>ສາຍຕາດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': !_vm.applicant.hasVisibleTattoos
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, !_vm.applicant.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ</span></div> " + (_vm.hasChineseLanguageBonus ? "<div class=\"eligibility-item bonus\" data-v-f6bdd0ec><i class=\"fas fa-star\" data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>" + _vm._ssrEscape("ໂບນັສພາສາຈີນ (" + _vm._s(_vm.formatLanguageLevel(_vm.applicant.chineseLanguageLevel)) + ")") + "</span></div>" : "<!---->") + "</div> <div" + _vm._ssrClass("eligibility-result", {
    'eligible': _vm.isEligible
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-thumbs-up' : 'fas fa-exclamation-triangle') + " data-v-f6bdd0ec></i> " + (_vm.isEligible ? "<span data-v-f6bdd0ec>\n                ຜູ້ສະໝັກມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span>" : "<span data-v-f6bdd0ec>\n                ⚠️ ຜູ້ສະໝັກຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span>") + "</div></div>" : "<!---->") + " " + (_vm.action === 'approve' ? "<div class=\"quota-check\" data-v-f6bdd0ec><h6 class=\"quota-title\" data-v-f6bdd0ec><i class=\"fas fa-users\" data-v-f6bdd0ec></i>\n              ການກວດສອບໂຄຕ້າ\n            </h6> <div class=\"quota-info\" data-v-f6bdd0ec><div" + _vm._ssrClass("quota-item", _vm.genderQuotaClass) + " data-v-f6bdd0ec><div class=\"quota-icon\" data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.applicant.gender === 'male' ? 'fas fa-male' : 'fas fa-female') + " data-v-f6bdd0ec></i></div> <div class=\"quota-content\" data-v-f6bdd0ec><div class=\"quota-text\" data-v-f6bdd0ec>" + _vm._ssrEscape("\n                    ໂຄຕ້າ" + _vm._s(_vm.formatGender(_vm.applicant.gender)) + ": \n                    ") + "<span class=\"quota-numbers\" data-v-f6bdd0ec>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getCurrentGenderCount()) + "/" + _vm._s(_vm.getMaxGenderQuota()) + "\n                    ") + "</span></div> <div" + _vm._ssrClass("quota-status", _vm.quotaStatusClass) + " data-v-f6bdd0ec>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.quotaStatusMessage) + "\n                  ") + "</div></div></div></div></div>" : "<!---->") + " <div class=\"notes-section\" data-v-f6bdd0ec><label" + _vm._ssrClass("form-label", {
    'required': _vm.action === 'reject'
  }) + " data-v-f6bdd0ec><i class=\"fas fa-sticky-note\" data-v-f6bdd0ec></i>\n              ໝາຍເຫດ\n              " + (_vm.action === 'reject' ? "<span class=\"required-note\" data-v-f6bdd0ec>(ຈຳເປັນສຳລັບການປະຕິເສດ)</span>" : "<!---->") + "</label> <textarea rows=\"4\"" + _vm._ssrAttr("placeholder", _vm.notesPlaceholder) + " maxlength=\"500\"" + _vm._ssrAttr("required", _vm.action === 'reject') + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.notes
  }) + " data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> " + (_vm.errors.notes ? "<div class=\"invalid-feedback\" data-v-f6bdd0ec>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.notes) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint\" data-v-f6bdd0ec><span class=\"text-counter\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> " + (_vm.action === 'reject' ? "<div class=\"warning-section\" data-v-f6bdd0ec><div class=\"warning-content\" data-v-f6bdd0ec><i class=\"fas fa-exclamation-triangle\" data-v-f6bdd0ec></i> <div data-v-f6bdd0ec><strong data-v-f6bdd0ec>ຄຳເຕືອນ:</strong> \n                ການປະຕິເສດຜູ້ສະໝັກບໍ່ສາມາດຍົກເລີກໄດ້. \n                ກະລຸນາໃສ່ເຫດຜົນທີ່ຊັດເຈນໃນໝາຍເຫດ.\n              </div></div></div>" : "<!---->") + " " + (_vm.action === 'approve' && !_vm.isEligible ? "<div class=\"confirmation-section\" data-v-f6bdd0ec><label class=\"confirmation-checkbox\" data-v-f6bdd0ec><input type=\"checkbox\"" + _vm._ssrAttr("required", _vm.action === 'approve' && !_vm.isEligible) + _vm._ssrAttr("checked", Array.isArray(_vm.formData.forceApprove) ? _vm._i(_vm.formData.forceApprove, null) > -1 : _vm.formData.forceApprove) + " data-v-f6bdd0ec> <span class=\"checkbox-label\" data-v-f6bdd0ec>\n                ຂ້ອຍຢືນຢັນວ່າຕ້ອງການອະນຸມັດຜູ້ສະໝັກຄົນນີ້ ເຖິງແມ່ນວ່າຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span></label></div>" : "<!---->") + "</div>") + " " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-f6bdd0ec><h6 data-v-f6bdd0ec><i class=\"fas fa-exclamation-circle\" data-v-f6bdd0ec></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-f6bdd0ec>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->") + "</div> <div class=\"modal-footer\" data-v-f6bdd0ec><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-f6bdd0ec><i class=\"fas fa-times\" data-v-f6bdd0ec></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + _vm._ssrClass(null, ['btn', _vm.confirmButtonClass]) + " data-v-f6bdd0ec>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-f6bdd0ec></i>" : "<i" + _vm._ssrClass(null, _vm.confirmButtonIcon) + " data-v-f6bdd0ec></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'ກຳລັງດຳເນີນການ...' : _vm.confirmButtonText) + "\n        ") + "</button></div></form></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/StatusUpdateDialog/index.vue?vue&type=template&id=f6bdd0ec&scoped=true&

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
  
  var style0 = __webpack_require__(633)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_StatusUpdateDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f6bdd0ec",
  "429f5c21"
  
)

/* harmony default export */ var StatusUpdateDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0d96dcd4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(730);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0d96dcd4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0d96dcd4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0d96dcd4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0d96dcd4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".job-batch-info[data-v-0d96dcd4]{font-size:12px;min-width:120px}.job-batch-assigned[data-v-0d96dcd4]{color:#059669}.batch-name[data-v-0d96dcd4]{font-weight:600}.batch-name[data-v-0d96dcd4],.batch-workplace[data-v-0d96dcd4]{align-items:center;display:flex;gap:4px;margin-bottom:2px}.batch-workplace[data-v-0d96dcd4]{color:#6b7280}.batch-status[data-v-0d96dcd4]{margin-top:4px}.batch-status-badge[data-v-0d96dcd4]{border-radius:8px;font-size:10px;font-weight:500;padding:2px 6px;text-transform:uppercase}.batch-status-badge.draft[data-v-0d96dcd4]{background-color:#fef3c7;color:#d97706}.batch-status-badge.active[data-v-0d96dcd4]{background-color:#d1fae5;color:#065f46}.batch-status-badge.completed[data-v-0d96dcd4]{background-color:#dbeafe;color:#1d4ed8}.batch-status-badge.cancelled[data-v-0d96dcd4]{background-color:#fee2e2;color:#dc2626}.batch-status-badge.on_hold[data-v-0d96dcd4]{background-color:#f3f4f6;color:#6b7280}.no-job-batch[data-v-0d96dcd4]{align-items:center;color:#9ca3af;display:flex;font-style:italic;gap:4px}.summary-card.job-batch-assigned[data-v-0d96dcd4]{border-left:4px solid #059669}.summary-card.job-batch-assigned .card-icon.job-batch[data-v-0d96dcd4]{background:#d1fae5;color:#059669}.job-batch-rate[data-v-0d96dcd4]{display:block;font-size:12px;margin-top:4px;opacity:.8}.passport-status.has-passport[data-v-0d96dcd4]{color:#10b981}.passport-status.no-passport[data-v-0d96dcd4]{color:#dc2626}.passport-number[data-v-0d96dcd4]{font-family:monospace}.passport-expiry[data-v-0d96dcd4],.passport-number[data-v-0d96dcd4]{color:#666;font-size:11px}.address-details .address[data-v-0d96dcd4]{font-size:12px;margin-bottom:2px}.location-parts[data-v-0d96dcd4]{color:#666;font-size:11px}.location-parts span[data-v-0d96dcd4]{margin-right:8px}.location-parts span[data-v-0d96dcd4]:not(:last-child):after{color:#ccc;content:\"•\";margin-left:8px}.marital-status[data-v-0d96dcd4]{color:#666;font-size:11px;margin-top:2px}.emergency-phone[data-v-0d96dcd4]{color:#666;font-size:11px;margin-left:8px}.contact-details .emergency[data-v-0d96dcd4]{align-items:center;color:#f59e0b;display:flex;font-size:11px;gap:4px}.date-info .interview-date[data-v-0d96dcd4]{color:#666;font-size:11px;margin-top:2px}.status-badge.INTERVIEW[data-v-0d96dcd4]{background-color:#fef3c7;color:#d97706}.status-badge.REGISTER[data-v-0d96dcd4]{background-color:#d1fae5;color:#065f46}.summary-card.status-interview .card-icon.interview[data-v-0d96dcd4]{background:#fef3c7;color:#d97706}.summary-card.status-register .card-icon.register[data-v-0d96dcd4]{background:#d1fae5;color:#065f46}.summary-card.passport-available .card-icon.passport[data-v-0d96dcd4]{background:#dbeafe;color:#3b82f6}.passport-rate[data-v-0d96dcd4]{display:block;font-size:12px;margin-top:4px;opacity:.8}.applicant-summary-container[data-v-0d96dcd4]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-0d96dcd4]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-0d96dcd4]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-0d96dcd4]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-0d96dcd4]{display:flex;gap:12px}.filter-section[data-v-0d96dcd4]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-0d96dcd4]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-0d96dcd4]{display:flex;flex-direction:column;gap:8px;min-width:150px}.filter-group label[data-v-0d96dcd4]{color:#555;font-size:14px;font-weight:500}.filter-actions[data-v-0d96dcd4]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-0d96dcd4]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-0d96dcd4]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-0d96dcd4]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-applicants[data-v-0d96dcd4]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.summary-card.total-applicants .card-icon[data-v-0d96dcd4]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.gender-male[data-v-0d96dcd4]{border-left:4px solid #3b82f6}.summary-card.gender-female[data-v-0d96dcd4]{border-left:4px solid #ec4899}.card-icon[data-v-0d96dcd4]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-0d96dcd4]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.male[data-v-0d96dcd4]{background:#dbeafe;color:#3b82f6}.card-icon.female[data-v-0d96dcd4]{background:#fce7f3;color:#ec4899}.card-content[data-v-0d96dcd4]{flex:1;min-width:0}.card-content h3[data-v-0d96dcd4]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-0d96dcd4]{font-size:14px;margin:0}.table-section[data-v-0d96dcd4]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-0d96dcd4]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-0d96dcd4]{color:#333;margin:0}.record-count[data-v-0d96dcd4]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-0d96dcd4]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-0d96dcd4]{overflow-x:auto}.data-table[data-v-0d96dcd4]{border-collapse:collapse;width:100%}.data-table td[data-v-0d96dcd4],.data-table th[data-v-0d96dcd4]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-0d96dcd4]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-0d96dcd4]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-0d96dcd4]:hover{background-color:#e9ecef}.data-table th i[data-v-0d96dcd4]{margin-left:8px;opacity:.5}.applicant-name strong[data-v-0d96dcd4]{color:#333;display:block;font-size:14px}.contact-info[data-v-0d96dcd4]{color:#666;font-size:12px;margin-top:2px}.phone[data-v-0d96dcd4]{font-family:monospace}.contact-details[data-v-0d96dcd4]{color:#666;font-size:12px}.contact-details .phone[data-v-0d96dcd4]{align-items:center;display:flex;gap:4px;margin-bottom:2px}.contact-details i[data-v-0d96dcd4]{color:#999;width:12px}.age-cell[data-v-0d96dcd4]{color:#495057;font-weight:600}.gender-badge[data-v-0d96dcd4]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 8px;text-transform:uppercase}.gender-badge.male[data-v-0d96dcd4]{background-color:#dbeafe;color:#3b82f6}.gender-badge.female[data-v-0d96dcd4]{background-color:#fce7f3;color:#ec4899}.status-badge[data-v-0d96dcd4]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.rejected[data-v-0d96dcd4]{background-color:#fee2e2;color:#dc2626}.actions-cell[data-v-0d96dcd4]{display:flex;flex-wrap:wrap;gap:4px}.pagination-container[data-v-0d96dcd4]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-0d96dcd4]{color:#666;font-size:14px}.pagination-controls[data-v-0d96dcd4]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-0d96dcd4]{color:#666;padding:6px 12px}.btn[data-v-0d96dcd4]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-0d96dcd4]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-0d96dcd4]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-0d96dcd4]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-0d96dcd4]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-0d96dcd4]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-0d96dcd4]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-0d96dcd4]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-0d96dcd4]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-0d96dcd4]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-0d96dcd4]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-0d96dcd4]:hover{background-color:#17a2b8;color:#fff}.btn-outline-success[data-v-0d96dcd4]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-0d96dcd4]:hover{background-color:#28a745;color:#fff}.btn-outline-danger[data-v-0d96dcd4]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-0d96dcd4]:hover{background-color:#dc3545;color:#fff}.btn-sm[data-v-0d96dcd4]{font-size:12px;padding:4px 8px}.form-control[data-v-0d96dcd4]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-0d96dcd4]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.loading-overlay[data-v-0d96dcd4]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-0d96dcd4]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-0d96dcd4]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:768px){.applicant-summary-container[data-v-0d96dcd4]{padding:10px}.header-content[data-v-0d96dcd4]{align-items:flex-start}.filter-row[data-v-0d96dcd4],.header-content[data-v-0d96dcd4]{flex-direction:column;gap:16px}.filter-group[data-v-0d96dcd4]{min-width:auto;width:100%}.summary-cards[data-v-0d96dcd4]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-0d96dcd4]{padding:20px}.card-icon[data-v-0d96dcd4]{font-size:20px;height:50px;margin-right:16px;width:50px}.pagination-container[data-v-0d96dcd4],.table-header[data-v-0d96dcd4]{align-items:flex-start;flex-direction:column;gap:16px}.actions-cell[data-v-0d96dcd4]{flex-direction:column;gap:4px}.data-table td[data-v-0d96dcd4]:nth-child(3),.data-table th[data-v-0d96dcd4]:nth-child(3){display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map