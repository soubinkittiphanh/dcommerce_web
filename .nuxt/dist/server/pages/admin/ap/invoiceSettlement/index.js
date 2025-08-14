exports.ids = [134,6,7,8];
exports.modules = {

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/ap/invoiceSettlement/index.vue?vue&type=template&id=723a8a9c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ap-settlement-container"
  }, [_vm._ssrNode("<div class=\"header-section\" data-v-723a8a9c><h1 class=\"page-title\" data-v-723a8a9c>ການຊຳລະໜີ້ (AP Settlement)</h1> <div class=\"header-actions\" data-v-723a8a9c><button class=\"btn btn-primary\" data-v-723a8a9c><i class=\"fas fa-plus\" data-v-723a8a9c></i> ເພີ່ມການຊຳລະໃໝ່\n      </button></div></div> <div class=\"summary-cards\" data-v-723a8a9c><div class=\"card summary-card\" data-v-723a8a9c><div class=\"card-body\" data-v-723a8a9c><h5 class=\"card-title\" data-v-723a8a9c>ຈຳນວນການຊຳລະທັງໝົດ</h5> <p class=\"card-value\" data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.safeDashboard.counts.total)) + "</p></div></div> <div class=\"card summary-card\" data-v-723a8a9c><div class=\"card-body\" data-v-723a8a9c><h5 class=\"card-title\" data-v-723a8a9c>ຄ້າງອະນຸມັດ</h5> <p class=\"card-value pending\" data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.safeDashboard.counts.pending)) + "</p></div></div> <div class=\"card summary-card\" data-v-723a8a9c><div class=\"card-body\" data-v-723a8a9c><h5 class=\"card-title\" data-v-723a8a9c>ອະນຸມັດແລ້ວ</h5> <p class=\"card-value approved\" data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.safeDashboard.counts.approved)) + "</p></div></div> <div class=\"card summary-card\" data-v-723a8a9c><div class=\"card-body\" data-v-723a8a9c><h5 class=\"card-title\" data-v-723a8a9c>ສຳເລັດແລ້ວ</h5> <p class=\"card-value completed\" data-v-723a8a9c>" + _vm._ssrEscape("\n          " + _vm._s(_vm.safeDashboard.counts.completed) + "\n        ") + "</p></div></div> <div class=\"card summary-card\" data-v-723a8a9c><div class=\"card-body\" data-v-723a8a9c><h5 class=\"card-title\" data-v-723a8a9c>ຍົກເລີກ</h5> <p class=\"card-value cancelled\" data-v-723a8a9c>" + _vm._ssrEscape("\n          " + _vm._s(_vm.safeDashboard.counts.cancelled) + "\n        ") + "</p></div></div> <div class=\"card summary-card\" data-v-723a8a9c><div class=\"card-body\" data-v-723a8a9c><h5 class=\"card-title\" data-v-723a8a9c>ລວມຍອດທັງໝົດ</h5> <p class=\"card-value\" data-v-723a8a9c>" + _vm._ssrEscape("\n          " + _vm._s(_vm.formatCurrency(_vm.safeDashboard.amounts.total)) + "\n        ") + "</p></div></div> <div class=\"card summary-card\" data-v-723a8a9c><div class=\"card-body\" data-v-723a8a9c><h5 class=\"card-title\" data-v-723a8a9c>ຍອດທີ່ຈັດສັນແລ້ວ</h5> <p class=\"card-value allocated\" data-v-723a8a9c>" + _vm._ssrEscape("\n          " + _vm._s(_vm.formatCurrency(_vm.safeDashboard.amounts.allocated)) + "\n        ") + "</p></div></div></div> "), _vm._ssrNode("<div class=\"filters-section\" data-v-723a8a9c>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-723a8a9c>", "</div>", [_vm._ssrNode("<div class=\"col-md-2\" data-v-723a8a9c>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.statusFilter,
      expression: "statusFilter"
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
        _vm.statusFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onFilterChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກສະຖານະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("ຮ່າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("ຄ້າງອະນຸມັດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("ອະນຸມັດແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "completed"
    }
  }, [_vm._v("ສຳເລັດແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("ຍົກເລີກ")])])]), _vm._ssrNode(" <div class=\"col-md-2\" data-v-723a8a9c><input type=\"date\" placeholder=\"ວັນທີເລີ່ມຕົ້ນ\"" + _vm._ssrAttr("value", _vm.filters.startDate) + " class=\"form-control\" data-v-723a8a9c></div> <div class=\"col-md-2\" data-v-723a8a9c><input type=\"date\" placeholder=\"ວັນທີສິ້ນສຸດ\"" + _vm._ssrAttr("value", _vm.filters.endDate) + " class=\"form-control\" data-v-723a8a9c></div> <div class=\"col-md-3\" data-v-723a8a9c><input type=\"text\" placeholder=\"ຄົ້ນຫາເລກອ້າງອີງ...\"" + _vm._ssrAttr("value", _vm.searchTerm) + " class=\"form-control\" data-v-723a8a9c></div> <div class=\"col-md-2\" data-v-723a8a9c><button class=\"btn btn-info btn-block\" data-v-723a8a9c><i class=\"fas fa-file-invoice\" data-v-723a8a9c></i> ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ\n        </button></div> <div class=\"col-md-1\" data-v-723a8a9c><button class=\"btn btn-secondary btn-block\" data-v-723a8a9c><i class=\"fas fa-undo\" data-v-723a8a9c></i> ຄ່າເລີ່ມຕົ້ນ\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"table-container\" data-v-723a8a9c>" + (_vm.loading ? "<div class=\"loading-overlay\" data-v-723a8a9c><div class=\"spinner\" data-v-723a8a9c></div></div>" : "<!---->") + " <table class=\"table table-striped\" data-v-723a8a9c><thead data-v-723a8a9c><tr data-v-723a8a9c><th data-v-723a8a9c>ID</th> <th data-v-723a8a9c>ວັນທີຊຳລະ</th> <th data-v-723a8a9c>ຈຳນວນເງິນຊຳລະ</th> <th data-v-723a8a9c>ຈຳນວນເງິນພື້ນຖານ</th> <th data-v-723a8a9c>ສະຖານະ</th> <th data-v-723a8a9c>ອ້າງອີງ</th> <th data-v-723a8a9c>ຄຳອະທິບາຍ</th> <th data-v-723a8a9c>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-723a8a9c>" + _vm._ssrList(_vm.settlements, function (settlement) {
    return "<tr data-v-723a8a9c><td data-v-723a8a9c><div class=\"settlement-id\" data-v-723a8a9c>" + _vm._ssrEscape("\n              #" + _vm._s(settlement.id) + "\n            ") + "</div></td> <td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(settlement.settlementDate))) + "</td> <td data-v-723a8a9c><span class=\"amount\" data-v-723a8a9c>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatCurrency(settlement.paymentAmount)) + "\n            ") + "</span></td> <td data-v-723a8a9c><span class=\"amount\" data-v-723a8a9c>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatCurrency(settlement.baseAmount)) + "\n            ") + "</span></td> <td data-v-723a8a9c><span" + _vm._ssrClass(null, ['status-badge', settlement.status || 'unknown']) + " data-v-723a8a9c>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusInLao(settlement.status)) + "\n            ") + "</span></td> <td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(settlement.reference || 'N/A')) + "</td> <td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(settlement.description || 'N/A')) + "</td> <td data-v-723a8a9c><div class=\"action-buttons\" data-v-723a8a9c><button title=\"ເບິ່ງລາຍລະອຽດ\" class=\"btn btn-sm btn-info\" data-v-723a8a9c><i class=\"fas fa-eye\" data-v-723a8a9c></i></button> " + (['draft', 'pending'].includes(settlement.status) ? "<button title=\"ແກ້ໄຂ\" class=\"btn btn-sm btn-warning\" data-v-723a8a9c><i class=\"fas fa-edit\" data-v-723a8a9c></i></button>" : "<!---->") + " " + (settlement.status === 'pending' ? "<button title=\"ອະນຸມັດ\" class=\"btn btn-sm btn-success\" data-v-723a8a9c><i class=\"fas fa-check\" data-v-723a8a9c></i></button>" : "<!---->") + " " + (settlement.status === 'approved' ? "<button title=\"ສຳເລັດ\" class=\"btn btn-sm btn-primary\" data-v-723a8a9c><i class=\"fas fa-check-double\" data-v-723a8a9c></i></button>" : "<!---->") + " " + (['draft', 'pending', 'approved'].includes(settlement.status) ? "<button title=\"ຍົກເລີກ\" class=\"btn btn-sm btn-dark\" data-v-723a8a9c><i class=\"fas fa-times\" data-v-723a8a9c></i></button>" : "<!---->") + "</div></td></tr>";
  }) + "</tbody></table> " + (!_vm.loading && _vm.settlements.length === 0 ? "<div class=\"no-data\" data-v-723a8a9c><i class=\"fas fa-money-check-alt\" data-v-723a8a9c></i> <p data-v-723a8a9c>ບໍ່ພົບຂໍ້ມູນການຊຳລະ</p></div>" : "<!---->") + "</div> " + (_vm.pagination.totalPages > 1 ? "<nav class=\"pagination-nav\" data-v-723a8a9c><ul class=\"pagination\" data-v-723a8a9c><li" + _vm._ssrClass("page-item", {
    disabled: _vm.pagination.currentPage === 1
  }) + " data-v-723a8a9c><button class=\"page-link\" data-v-723a8a9c>\n          ກ່ອນໜ້າ\n        </button></li> " + _vm._ssrList(_vm.paginationPages, function (page) {
    return "<li" + _vm._ssrClass("page-item", {
      active: page === _vm.pagination.currentPage
    }) + " data-v-723a8a9c><button class=\"page-link\" data-v-723a8a9c>" + _vm._ssrEscape("\n          " + _vm._s(page) + "\n        ") + "</button></li>";
  }) + " <li" + _vm._ssrClass("page-item", {
    disabled: _vm.pagination.currentPage === _vm.pagination.totalPages
  }) + " data-v-723a8a9c><button class=\"page-link\" data-v-723a8a9c>\n          ຕໍ່ໄປ\n        </button></li></ul></nav>" : "<!---->") + " "), _c('SettlementDialog', {
    attrs: {
      "visible": _vm.showDialog,
      "settlement": _vm.selectedSettlement,
      "outstanding-invoices": _vm.outstandingInvoices,
      "user": _vm.user
    },
    on: {
      "close": _vm.closeDialog,
      "save": _vm.saveSettlement
    }
  }), _vm._ssrNode(" "), _vm.showOutstandingModal ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-723a8a9c>", "</div>", [_vm._ssrNode("<div class=\"outstanding-modal\" data-v-723a8a9c>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-723a8a9c><h4 data-v-723a8a9c>ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</h4> <button class=\"close-btn\" data-v-723a8a9c><i class=\"fas fa-times\" data-v-723a8a9c></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-723a8a9c>", "</div>", [_vm.outstandingLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-723a8a9c>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-723a8a9c></div> <p data-v-723a8a9c>ກຳລັງໂຫຼດ...</p>")], 2) : _vm._ssrNode("<div data-v-723a8a9c>", "</div>", [_vm._ssrNode("<div class=\"outstanding-filters\" data-v-723a8a9c>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-723a8a9c>", "</div>", [_vm._ssrNode("<div class=\"col-md-6\" data-v-723a8a9c>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.outstandingFilters.vendorId,
      expression: "outstandingFilters.vendorId"
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
        _vm.$set(_vm.outstandingFilters, "vendorId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.getOutstandingInvoices]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກຜູ້ຂາຍ")]), _vm._v(" "), _vm._l(_vm.vendors, function (vendor) {
    return _c('option', {
      key: vendor.id,
      domProps: {
        "value": vendor.id
      }
    }, [_vm._v("\n                    " + _vm._s(vendor.name) + "\n                  ")]);
  })], 2)]), _vm._ssrNode(" <div class=\"col-md-6\" data-v-723a8a9c><input type=\"text\" placeholder=\"ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້...\"" + _vm._ssrAttr("value", _vm.outstandingSearch) + " class=\"form-control\" data-v-723a8a9c></div>")], 2)]), _vm._ssrNode(" <div class=\"outstanding-table\" data-v-723a8a9c><table class=\"table table-sm\" data-v-723a8a9c><thead data-v-723a8a9c><tr data-v-723a8a9c><th data-v-723a8a9c>ເລກທີໃບແຈ້ງໜີ້</th> <th data-v-723a8a9c>ຜູ້ຂາຍ</th> <th data-v-723a8a9c>ວັນທີຄົບກຳນົດ</th> <th data-v-723a8a9c>ຍອດຄ້າງຈ່າຍ</th> <th data-v-723a8a9c>ເລືອກ</th></tr></thead> <tbody data-v-723a8a9c>" + _vm._ssrList(_vm.filteredOutstandingInvoices, function (invoice) {
    var _invoice$vendor;
    return "<tr data-v-723a8a9c><td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</td> <td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(((_invoice$vendor = invoice.vendor) === null || _invoice$vendor === void 0 ? void 0 : _invoice$vendor.name) || 'N/A')) + "</td> <td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.dueDate))) + "</td> <td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(invoice.outstandingAmount))) + "</td> <td data-v-723a8a9c><button class=\"btn btn-sm btn-primary\" data-v-723a8a9c><i class=\"fas fa-plus\" data-v-723a8a9c></i> ເລືອກ\n                    </button></td></tr>";
  }) + "</tbody></table> " + (_vm.filteredOutstandingInvoices.length === 0 ? "<div class=\"no-data\" data-v-723a8a9c><p data-v-723a8a9c>ບໍ່ພົບໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</p></div>" : "<!---->") + "</div>")], 2)])], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.showDetailModal ? "<div class=\"modal-overlay\" data-v-723a8a9c><div class=\"detail-modal\" data-v-723a8a9c><div class=\"modal-header\" data-v-723a8a9c><h4 data-v-723a8a9c>ລາຍລະອຽດການຊຳລະ</h4> <button class=\"close-btn\" data-v-723a8a9c><i class=\"fas fa-times\" data-v-723a8a9c></i></button></div> <div class=\"modal-body\" data-v-723a8a9c>" + (_vm.detailLoading ? "<div class=\"loading-state\" data-v-723a8a9c><div class=\"spinner\" data-v-723a8a9c></div> <p data-v-723a8a9c>ກຳລັງໂຫຼດ...</p></div>" : _vm.settlementDetails ? "<div class=\"detail-content\" data-v-723a8a9c><div class=\"detail-row\" data-v-723a8a9c><label data-v-723a8a9c>ID ການຊຳລະ:</label> <span data-v-723a8a9c>" + _vm._ssrEscape("#" + _vm._s(_vm.settlementDetails.id)) + "</span></div> <div class=\"detail-row\" data-v-723a8a9c><label data-v-723a8a9c>ວັນທີຊຳລະ:</label> <span data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.settlementDetails.settlementDate))) + "</span></div> <div class=\"detail-row\" data-v-723a8a9c><label data-v-723a8a9c>ຈຳນວນເງິນຊຳລະ:</label> <span data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.settlementDetails.paymentAmount))) + "</span></div> <div class=\"detail-row\" data-v-723a8a9c><label data-v-723a8a9c>ຈຳນວນເງິນພື້ນຖານ:</label> <span data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.settlementDetails.baseAmount))) + "</span></div> <div class=\"detail-row\" data-v-723a8a9c><label data-v-723a8a9c>ສະຖານະ:</label> <span" + _vm._ssrClass(null, ['status-badge', _vm.settlementDetails.status]) + " data-v-723a8a9c>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusInLao(_vm.settlementDetails.status)) + "\n            ") + "</span></div> <div class=\"detail-row\" data-v-723a8a9c><label data-v-723a8a9c>ອ້າງອີງ:</label> <span data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.settlementDetails.reference || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-723a8a9c><label data-v-723a8a9c>ຄຳອະທິບາຍ:</label> <span data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.settlementDetails.description || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-723a8a9c><label data-v-723a8a9c>ໝາຍເຫດ:</label> <span data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.settlementDetails.note || 'N/A')) + "</span></div> " + (_vm.settlementDetails.invoiceSettlements && _vm.settlementDetails.invoiceSettlements.length > 0 ? "<div class=\"allocations-section\" data-v-723a8a9c><h5 data-v-723a8a9c>ການຈັດສັນໃບແຈ້ງໜີ້</h5> <table class=\"table table-sm\" data-v-723a8a9c><thead data-v-723a8a9c><tr data-v-723a8a9c><th data-v-723a8a9c>ເລກທີໃບແຈ້ງໜີ້</th> <th data-v-723a8a9c>ຈຳນວນທີ່ຈັດສັນ</th></tr></thead> <tbody data-v-723a8a9c>" + _vm._ssrList(_vm.settlementDetails.invoiceSettlements, function (allocation) {
    return "<tr data-v-723a8a9c><td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.getInvoiceNumber(allocation))) + "</td> <td data-v-723a8a9c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(allocation.amount))) + "</td></tr>";
  }) + "</tbody></table></div>" : "<!---->") + "</div>" : "<!---->") + "</div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/ap/invoiceSettlement/index.vue?vue&type=template&id=723a8a9c&scoped=true&

// EXTERNAL MODULE: ./components/accounting/ap/settlement/index.vue + 4 modules
var ap_settlement = __webpack_require__(823);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/ap/invoiceSettlement/index.vue?vue&type=script&lang=js&


/* harmony default export */ var invoiceSettlementvue_type_script_lang_js_ = ({
  name: 'SettlementManagement',
  components: {
    SettlementDialog: ap_settlement["default"]
  },
  data() {
    return {
      statusFilter: '',
      statusLabels: {
        draft: 'ຮ່າງ',
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        completed: 'ສຳເລັດແລ້ວ',
        cancelled: 'ຍົກເລີກ'
      },
      settlements: [],
      vendors: [],
      outstandingInvoices: [],
      filteredOutstandingInvoices: [],
      dashboard: null,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10
      },
      filters: {
        status: '',
        startDate: '',
        endDate: ''
      },
      outstandingFilters: {
        vendorId: ''
      },
      searchTerm: '',
      outstandingSearch: '',
      loading: false,
      detailLoading: false,
      outstandingLoading: false,
      showDialog: false,
      showDetailModal: false,
      showOutstandingModal: false,
      selectedSettlement: null,
      settlementDetails: null,
      searchTimeout: null
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    safeDashboard() {
      var _this$dashboard, _this$dashboard2;
      return {
        counts: ((_this$dashboard = this.dashboard) === null || _this$dashboard === void 0 ? void 0 : _this$dashboard.counts) || {
          total: 0,
          draft: 0,
          pending: 0,
          approved: 0,
          completed: 0,
          cancelled: 0
        },
        amounts: ((_this$dashboard2 = this.dashboard) === null || _this$dashboard2 === void 0 ? void 0 : _this$dashboard2.amounts) || {
          total: 0,
          allocated: 0
        }
      };
    },
    paginationPages() {
      const pages = [];
      const start = Math.max(1, this.pagination.currentPage - 2);
      const end = Math.min(this.pagination.totalPages, this.pagination.currentPage + 2);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  async mounted() {
    await this.loadInitialData();
  },
  methods: {
    getStatusInLao(status) {
      if (!status) return 'N/A';
      return this.statusLabels[status] || status.toUpperCase();
    },
    // Helper method to get invoice number from settlement line
    getInvoiceNumber(allocation) {
      var _allocation$invoiceLi, _allocation$invoiceLi2;
      // Based on the relationship: settlementLine -> invoiceLineItem -> invoice
      return ((_allocation$invoiceLi = allocation.invoiceLineItem) === null || _allocation$invoiceLi === void 0 ? void 0 : (_allocation$invoiceLi2 = _allocation$invoiceLi.invoice) === null || _allocation$invoiceLi2 === void 0 ? void 0 : _allocation$invoiceLi2.invoiceNumber) || 'N/A';
    },
    async loadInitialData() {
      await Promise.all([this.fetchData(), this.fetchDashboard(), this.fetchVendors()]);
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
        } = await this.$axios.get('/api/ap-invoices-settlement', {
          params
        });
        this.settlements = data.data.settlements;
        this.pagination = data.data.pagination;
      } catch (error) {
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນການຊຳລະ', 'error');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async fetchDashboard() {
      try {
        // For now, we'll calculate from current data
        // You can create a dedicated dashboard endpoint later
        const totalSettlements = this.settlements.length;
        const statusCounts = this.settlements.reduce((acc, settlement) => {
          acc[settlement.status] = (acc[settlement.status] || 0) + 1;
          return acc;
        }, {});
        const totalAmount = this.settlements.reduce((sum, settlement) => {
          return sum + parseFloat(settlement.baseAmount || 0);
        }, 0);
        this.dashboard = {
          counts: {
            total: totalSettlements,
            draft: statusCounts.draft || 0,
            pending: statusCounts.pending || 0,
            approved: statusCounts.approved || 0,
            completed: statusCounts.completed || 0,
            cancelled: statusCounts.cancelled || 0
          },
          amounts: {
            total: totalAmount,
            allocated: totalAmount // Simplified for now
          }
        };
      } catch (error) {
        console.error('Error calculating dashboard:', error);
      }
    },
    async fetchVendors() {
      try {
        const {
          data
        } = await this.$axios.get('/api/vendor/find');
        this.vendors = data || [];
      } catch (error) {
        console.error('Error fetching vendors:', error);
        this.vendors = [];
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນຜູ້ຂາຍໄດ້', 'error');
      }
    },
    async getOutstandingInvoices() {
      this.outstandingLoading = true;
      this.showOutstandingModal = true;
      try {
        const params = {};
        if (this.outstandingFilters.vendorId) {
          params.vendorId = this.outstandingFilters.vendorId;
        }
        const {
          data
        } = await this.$axios.get('/api/ap-invoices-settlement/invoices/outstanding', {
          params
        });
        this.outstandingInvoices = data.data || [];
        this.filteredOutstandingInvoices = [...this.outstandingInvoices];
      } catch (error) {
        console.error('Error fetching outstanding invoices:', error);
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນໃບແຈ້ງໜີ້ຄ້າງຈ່າຍໄດ້', 'error');
        this.outstandingInvoices = [];
        this.filteredOutstandingInvoices = [];
      } finally {
        this.outstandingLoading = false;
      }
    },
    filterOutstandingInvoices() {
      if (!this.outstandingSearch) {
        this.filteredOutstandingInvoices = [...this.outstandingInvoices];
        return;
      }
      const search = this.outstandingSearch.toLowerCase();
      this.filteredOutstandingInvoices = this.outstandingInvoices.filter(invoice => {
        var _invoice$vendorInvoic, _invoice$vendor, _invoice$vendor$name;
        return invoice.invoiceNumber.toLowerCase().includes(search) || ((_invoice$vendorInvoic = invoice.vendorInvoiceNumber) === null || _invoice$vendorInvoic === void 0 ? void 0 : _invoice$vendorInvoic.toLowerCase().includes(search)) || ((_invoice$vendor = invoice.vendor) === null || _invoice$vendor === void 0 ? void 0 : (_invoice$vendor$name = _invoice$vendor.name) === null || _invoice$vendor$name === void 0 ? void 0 : _invoice$vendor$name.toLowerCase().includes(search));
      });
    },
    selectInvoiceForSettlement(invoice) {
      // Open settlement dialog with this invoice pre-selected
      this.closeOutstandingModal();
      this.openDialog(null, [invoice]);
    },
    // Dialog Methods
    openDialog(settlement = null, preSelectedInvoices = []) {
      this.selectedSettlement = settlement;
      this.showDialog = true;

      // If we have pre-selected invoices, pass them to the dialog
      if (preSelectedInvoices.length > 0) {
        this.$nextTick(() => {
          // This would be handled by the dialog component
          // We'll implement this in the SettlementDialog component
        });
      }
    },
    closeDialog() {
      this.showDialog = false;
      this.selectedSettlement = null;
    },
    closeOutstandingModal() {
      this.showOutstandingModal = false;
      this.outstandingFilters.vendorId = '';
      this.outstandingSearch = '';
    },
    // Detail Modal Methods
    async viewDetails(settlement) {
      this.selectedSettlement = settlement;
      this.showDetailModal = true;
      try {
        this.detailLoading = true;
        const {
          data
        } = await this.$axios.get(`/api/ap-invoices-settlement/${settlement.id}`);
        this.settlementDetails = data.data;
      } catch (error) {
        console.error('Error fetching settlement details:', error);
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນລາຍລະອຽດໄດ້', 'error');
      } finally {
        this.detailLoading = false;
      }
    },
    closeDetailModal() {
      this.showDetailModal = false;
      this.selectedSettlement = null;
      this.settlementDetails = null;
    },
    // CRUD Operations
    async saveSettlement(formData) {
      try {
        var _this$user;
        const auditContext = {
          reason: formData.reason || (formData.id ? 'Updated settlement' : 'Created new settlement'),
          userId: (_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id
        };
        let response;
        if (formData.id) {
          response = await this.$axios.put(`/api/ap-invoices-settlement/${formData.id}`, {
            ...formData,
            ...auditContext
          });
          this.showToast('ອັບເດດການຊຳລະສຳເລັດ', 'success');
        } else {
          var _response$data;
          response = await this.$axios.post('/api/ap-invoices-settlement', {
            ...formData,
            ...auditContext
          });

          // Show success with ID since no settlementNumber
          const createdSettlement = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data;
          if (createdSettlement !== null && createdSettlement !== void 0 && createdSettlement.id) {
            this.showToast(`ສ້າງການຊຳລະສຳເລັດ: #${createdSettlement.id}`, 'success');
          } else {
            this.showToast('ສ້າງການຊຳລະສຳເລັດ', 'success');
          }
        }
        this.closeDialog();
        await this.fetchData();
        await this.fetchDashboard();
      } catch (error) {
        var _error$response, _error$response$data;
        const message = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ';
        this.showToast(message, 'error');
        console.error('Save error:', error);
      }
    },
    async approveSettlement(settlement) {
      try {
        const result = await Object(common["i" /* swalConfirm */])(this.$swal, 'ຢືນຢັນການອະນຸມັດ', `ທ່ານແນ່ໃຈທີ່ຈະອະນຸມັດການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`, 'question', 'ບໍ່', 'ຕົກລົງ');
        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices-settlement/${settlement.id}/approve`);
          this.showToast('ອະນຸມັດການຊຳລະສຳເລັດ', 'success');
          await this.fetchData();
          await this.fetchDashboard();
        }
      } catch (error) {
        console.error('Error approving settlement:', error);
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການອະນຸມັດ', 'error');
      }
    },
    async completeSettlement(settlement) {
      try {
        const result = await Object(common["i" /* swalConfirm */])(this.$swal, 'ຢືນຢັນການສຳເລັດ', `ທ່ານແນ່ໃຈທີ່ຈະສຳເລັດການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`, 'question', 'ບໍ່', 'ຕົກລົງ');
        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices-settlement/${settlement.id}/complete`);
          this.showToast('ສຳເລັດການຊຳລະສຳເລັດ', 'success');
          await this.fetchData();
          await this.fetchDashboard();
        }
      } catch (error) {
        console.error('Error completing settlement:', error);
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການສຳເລັດ', 'error');
      }
    },
    async cancelSettlement(settlement) {
      try {
        const result = await Object(common["i" /* swalConfirm */])(this.$swal, 'ຢືນຢັນການຍົກເລີກ', `ທ່ານແນ່ໃຈທີ່ຈະຍົກເລີກການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`, 'warning', 'ບໍ່', 'ຍົກເລີກ');
        if (result.isConfirmed) {
          await this.$axios.delete(`/api/ap-invoices-settlement/${settlement.id}`);
          this.showToast('ຍົກເລີກການຊຳລະສຳເລັດ', 'success');
          await this.fetchData();
          await this.fetchDashboard();
        }
      } catch (error) {
        console.error('Error cancelling settlement:', error);
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການຍົກເລີກ', 'error');
      }
    },
    // Event Handlers
    onFilterChange() {
      this.filters.status = this.statusFilter;
      this.pagination.currentPage = 1;
      this.fetchData();
      this.fetchDashboard();
    },
    changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page;
        this.fetchData();
      }
    },
    resetFilters() {
      this.filters = {
        status: '',
        startDate: '',
        endDate: ''
      };
      this.searchTerm = '';
      this.statusFilter = '';
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
    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('en-GB');
    },
    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message);
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'ຂໍ້ຜິດພາດ' : 'ສຳເລັດ',
          message: message,
          type: type === 'error' ? 'error' : 'success'
        });
      } else {
        alert(`${type.toUpperCase()}: ${message}`);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/ap/invoiceSettlement/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ap_invoiceSettlementvue_type_script_lang_js_ = (invoiceSettlementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/ap/invoiceSettlement/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(983)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ap_invoiceSettlementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "723a8a9c",
  "761a7c9a"
  
)

/* harmony default export */ var invoiceSettlement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ap_settlement_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SettlementAuditDialog',
  components: {
    SettlementAuditViewer: _components_accounting_ap_settlement_audit_view__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    settlementId: {
      type: [Number, String],
      default: null
    },
    settlementInfo: {
      type: Object,
      default: null
    }
  },
  emits: ['close'],
  data() {
    return {
      auditLogs: [],
      isExporting: false,
      showExportOptions: false
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.handleClose();
    },
    onLogsLoaded(logs) {
      this.auditLogs = logs;
    },
    // Hide dropdown when clicking outside
    hideExportOptions() {
      this.showExportOptions = false;
    },
    handleOutsideClick(event) {
      var _this$$el;
      const exportDropdown = (_this$$el = this.$el) === null || _this$$el === void 0 ? void 0 : _this$$el.querySelector('.export-dropdown');
      if (exportDropdown && !exportDropdown.contains(event.target)) {
        this.showExportOptions = false;
      }
    },
    async exportAuditLog() {
      if (this.isExporting) return;
      try {
        var _this$$toast, _this$$toast2;
        this.isExporting = true;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະ...');

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF();
        } catch (jsPDFError) {
          console.warn('jsPDF not available, using HTML print method:', jsPDFError);
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະສຳເລັດ!');
      } catch (error) {
        var _this$$toast3;
        console.error('Error exporting settlement audit log:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະໄດ້');
      } finally {
        this.isExporting = false;
      }
    },
    async exportWithJsPDF() {
      var _this$settlementInfo;
      // Import jsPDF dynamically (requires: npm install jspdf)
      const {
        jsPDF
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 357, 7));

      // Create new PDF document
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('ປະຫວັດການດຳເນີນງານການຊຳລະ', 20, 20);

      // Add settlement info
      if (this.settlementInfo) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`ເລກທີການຊຳລະ: ${this.settlementInfo.settlementId}`, 20, 35);
        doc.text(`ຈຳນວນເງິນ: ${this.formatCurrency(this.settlementInfo.paymentAmount)}`, 20, 45);
        doc.text(`ວັນທີຊຳລະ: ${this.formatDate(this.settlementInfo.settlementDate)}`, 20, 55);
        if (this.settlementInfo.status) {
          doc.text(`ສະຖານະ: ${this.getStatusText(this.settlementInfo.status)}`, 20, 65);
        }
      }

      // Add generation timestamp
      doc.setFontSize(10);
      doc.text(`ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}`, 20, 80);
      let yPosition = 95;

      // Add audit logs
      this.auditLogs.forEach((log, index) => {
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }

        // Log header
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}. ${this.getActionText(log.action)}`, 20, yPosition);

        // User and timestamp
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        yPosition += 10;
        doc.text(`ຜູ້ດຳເນີນການ: ${this.getUserName(log)}`, 25, yPosition);
        yPosition += 8;
        doc.text(`ເວລາ: ${this.formatDateTime(log.auditDate)}`, 25, yPosition);

        // Reason if exists
        if (log.reason) {
          yPosition += 8;
          doc.text(`ເຫດຜົນ: ${log.reason}`, 25, yPosition);
        }

        // Settlement data summary
        if (log.recordData) {
          yPosition += 8;
          doc.text(`ຈຳນວນເງິນຊຳລະ: ${this.formatCurrency(log.recordData.paymentAmount)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ວັນທີຊຳລະ: ${this.formatDate(log.recordData.settlementDate)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ສະຖານະ: ${this.getStatusText(log.recordData.status)}`, 25, yPosition);
          if (log.recordData.reference) {
            yPosition += 8;
            doc.text(`ອ້າງອີງ: ${log.recordData.reference}`, 25, yPosition);
          }
        }
        yPosition += 15;
      });

      // Create filename
      const filename = `settlement-audit-log-${((_this$settlementInfo = this.settlementInfo) === null || _this$settlementInfo === void 0 ? void 0 : _this$settlementInfo.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.pdf`;

      // Download PDF
      doc.save(filename);
    },
    exportWithPrintJS() {
      // Create HTML content for export
      const htmlContent = this.generateHTMLContent();

      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    },
    generateHTMLContent() {
      const logs = this.auditLogs.map((log, index) => `
        <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
          <h4 style="margin: 0 0 10px 0; color: #333;">${index + 1}. ${this.getActionText(log.action)}</h4>
          <p style="margin: 5px 0;"><strong>ຜູ້ດຳເນີນການ:</strong> ${this.getUserName(log)}</p>
          <p style="margin: 5px 0;"><strong>ເວລາ:</strong> ${this.formatDateTime(log.auditDate)}</p>
          ${log.reason ? `<p style="margin: 5px 0;"><strong>ເຫດຜົນ:</strong> ${log.reason}</p>` : ''}
          ${log.recordData ? `
            <div style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 3px;">
              <p style="margin: 3px 0;"><strong>ຈຳນວນເງິນຊຳລະ:</strong> ${this.formatCurrency(log.recordData.paymentAmount)}</p>
              <p style="margin: 3px 0;"><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(log.recordData.settlementDate)}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(log.recordData.status)}</p>
              ${log.recordData.reference ? `<p style="margin: 3px 0;"><strong>ອ້າງອີງ:</strong> ${log.recordData.reference}</p>` : ''}
              ${log.recordData.description ? `<p style="margin: 3px 0;"><strong>ລາຍລະອຽດ:</strong> ${log.recordData.description}</p>` : ''}
            </div>
          ` : ''}
        </div>
      `).join('');
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ປະຫວັດການດຳເນີນງານການຊຳລະ</title>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
            .settlement-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .timestamp { text-align: right; color: #666; font-size: 12px; margin-bottom: 20px; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>ປະຫວັດການດຳເນີນງານການຊຳລະ</h1>
          
          ${this.settlementInfo ? `
            <div class="settlement-info">
              <p><strong>ເລກທີການຊຳລະ:</strong> ${this.settlementInfo.settlementId}</p>
              <p><strong>ຈຳນວນເງິນ:</strong> ${this.formatCurrency(this.settlementInfo.paymentAmount)}</p>
              <p><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(this.settlementInfo.settlementDate)}</p>
              ${this.settlementInfo.status ? `<p><strong>ສະຖານະ:</strong> ${this.getStatusText(this.settlementInfo.status)}</p>` : ''}
            </div>
          ` : ''}
          
          <div class="timestamp">ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}</div>
          
          <div class="audit-logs">
            ${logs}
          </div>
        </body>
        </html>
      `;
    },
    exportAsJSON() {
      this.showExportOptions = false;
      try {
        var _this$settlementInfo2, _this$$toast4;
        const exportData = {
          settlementInfo: this.settlementInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map(log => {
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData8$paym, _log$recordData9, _log$recordData9$bank, _log$recordData10, _log$recordData10$inv;
            return {
              id: log.id,
              action: this.getActionText(log.action),
              user: this.getUserName(log),
              email: this.getUserEmail(log),
              timestamp: log.auditDate,
              reason: log.reason,
              settlementData: {
                settlementId: log.settlementId,
                paymentAmount: (_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.paymentAmount,
                baseAmount: (_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.baseAmount,
                settlementDate: (_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.settlementDate,
                status: this.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status),
                reference: (_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.reference,
                description: (_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.description,
                note: (_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.note,
                paymentMethod: (_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : (_log$recordData8$paym = _log$recordData8.paymentMethod) === null || _log$recordData8$paym === void 0 ? void 0 : _log$recordData8$paym.name,
                bankAccount: (_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : (_log$recordData9$bank = _log$recordData9.bankAccount) === null || _log$recordData9$bank === void 0 ? void 0 : _log$recordData9$bank.accountName,
                invoiceSettlements: ((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : (_log$recordData10$inv = _log$recordData10.invoiceSettlements) === null || _log$recordData10$inv === void 0 ? void 0 : _log$recordData10$inv.length) || 0
              }
            };
          })
        };
        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], {
          type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `settlement-audit-log-${((_this$settlementInfo2 = this.settlementInfo) === null || _this$settlementInfo2 === void 0 ? void 0 : _this$settlementInfo2.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.success('ສົ່ງອອກ JSON ສຳເລັດ!');
      } catch (error) {
        var _this$$toast5;
        console.error('Error exporting JSON:', error);
        (_this$$toast5 = this.$toast) === null || _this$$toast5 === void 0 ? void 0 : _this$$toast5.error('ບໍ່ສາມາດສົ່ງອອກ JSON ໄດ້');
      }
    },
    exportAsCSV() {
      this.showExportOptions = false;
      try {
        var _this$settlementInfo3, _this$$toast6;
        const headers = ['ລຳດັບ', 'ການດຳເນີນງານ', 'ຜູ້ດຳເນີນການ', 'ອີເມວ', 'ເວລາ', 'ເຫດຜົນ', 'ເລກທີການຊຳລະ', 'ຈຳນວນເງິນຊຳລະ', 'ຈຳນວນເງິນພື້ນຖານ', 'ວັນທີຊຳລະ', 'ສະຖານະ', 'ອ້າງອີງ', 'ລາຍລະອຽດ', 'ໝາຍເຫດ', 'ວິທີການຊຳລະ', 'ບັນຊີທະນາຄານ', 'ຈຳນວນໃບແຈ້ງໜີ້'];
        const csvData = this.auditLogs.map((log, index) => {
          var _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData18$pay, _log$recordData19, _log$recordData19$ban, _log$recordData20, _log$recordData20$inv;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', log.settlementId || '', ((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.paymentAmount) || '', ((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.baseAmount) || '', this.formatDate((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.settlementDate) || '', this.getStatusText((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.status) || '', ((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.reference) || '', ((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.description) || '', ((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.note) || '', ((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : (_log$recordData18$pay = _log$recordData18.paymentMethod) === null || _log$recordData18$pay === void 0 ? void 0 : _log$recordData18$pay.name) || '', ((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : (_log$recordData19$ban = _log$recordData19.bankAccount) === null || _log$recordData19$ban === void 0 ? void 0 : _log$recordData19$ban.accountName) || '', ((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : (_log$recordData20$inv = _log$recordData20.invoiceSettlements) === null || _log$recordData20$inv === void 0 ? void 0 : _log$recordData20$inv.length) || 0];
        });
        const csvContent = [headers, ...csvData].map(row => row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')).join('\n');

        // Add BOM for proper UTF-8 encoding
        const bom = '\uFEFF';
        const blob = new Blob([bom + csvContent], {
          type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `settlement-audit-log-${((_this$settlementInfo3 = this.settlementInfo) === null || _this$settlementInfo3 === void 0 ? void 0 : _this$settlementInfo3.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        (_this$$toast6 = this.$toast) === null || _this$$toast6 === void 0 ? void 0 : _this$$toast6.success('ສົ່ງອອກ CSV ສຳເລັດ!');
      } catch (error) {
        var _this$$toast7;
        console.error('Error exporting CSV:', error);
        (_this$$toast7 = this.$toast) === null || _this$$toast7 === void 0 ? void 0 : _this$$toast7.error('ບໍ່ສາມາດສົ່ງອອກ CSV ໄດ້');
      }
    },
    getUserEmail(log) {
      var _log$recordData21, _log$recordData21$mak, _log$recordData22, _log$recordData22$che, _log$user;
      return ((_log$recordData21 = log.recordData) === null || _log$recordData21 === void 0 ? void 0 : (_log$recordData21$mak = _log$recordData21.maker) === null || _log$recordData21$mak === void 0 ? void 0 : _log$recordData21$mak.cus_email) || ((_log$recordData22 = log.recordData) === null || _log$recordData22 === void 0 ? void 0 : (_log$recordData22$che = _log$recordData22.checker) === null || _log$recordData22$che === void 0 ? void 0 : _log$recordData22$che.cus_email) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.email) || '';
    },
    // Helper methods for PDF generation
    getActionText(action) {
      const actionMap = {
        CREATE: 'ສ້າງການຊຳລະ',
        UPDATE: 'ອັບເດດການຊຳລະ',
        DELETE: 'ລຶບການຊຳລະ',
        APPROVE: 'ອະນຸມັດການຊຳລະ',
        REJECT: 'ປະຕິເສດການຊຳລະ',
        SUBMIT: 'ສົ່ງການຊຳລະ',
        CANCEL: 'ຍົກເລີກການຊຳລະ'
      };
      return actionMap[action] || action;
    },
    getStatusText(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        pending: 'ລໍຖ້າການອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        rejected: 'ປະຕິເສດ',
        paid: 'ຈ່າຍແລ້ວ',
        cancelled: 'ຍົກເລີກ',
        active: 'ໃຊ້ງານ',
        inactive: 'ບໍ່ໃຊ້ງານ'
      };
      return statusMap[status] || status;
    },
    getUserName(log) {
      var _log$recordData23, _log$recordData23$mak, _log$recordData24, _log$recordData24$che, _log$user2;
      return ((_log$recordData23 = log.recordData) === null || _log$recordData23 === void 0 ? void 0 : (_log$recordData23$mak = _log$recordData23.maker) === null || _log$recordData23$mak === void 0 ? void 0 : _log$recordData23$mak.cus_name) || ((_log$recordData24 = log.recordData) === null || _log$recordData24 === void 0 ? void 0 : (_log$recordData24$che = _log$recordData24.checker) === null || _log$recordData24$che === void 0 ? void 0 : _log$recordData24$che.cus_name) || ((_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.name) || 'ບໍ່ຮູ້ຈັກ';
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(336)["URL"]))

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(501);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("355eff84", content, true, context)
};

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(563);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("094fe88e", content, true, context)
};

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(471);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-audit-viewer[data-v-749b7dea]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-749b7dea]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-749b7dea]{align-items:center;display:flex;gap:8px}.filter-input[data-v-749b7dea]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:120px;padding:8px 12px}.filter-input[data-v-749b7dea]:focus{border-color:#007bff;outline:none}.btn-clear[data-v-749b7dea],.btn-search[data-v-749b7dea]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-749b7dea]{background:#007bff;color:#fff}.btn-clear[data-v-749b7dea]{background:#6c757d;color:#fff}.loading[data-v-749b7dea]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-749b7dea]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-749b7dea]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-749b7dea]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-749b7dea]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-749b7dea]{background:#28a745}.dot-update[data-v-749b7dea]{background:#007bff}.dot-delete[data-v-749b7dea]{background:#dc3545}.dot-approve[data-v-749b7dea]{background:#28a745}.dot-reject[data-v-749b7dea]{background:#dc3545}.dot-submit[data-v-749b7dea]{background:#17a2b8}.dot-cancel[data-v-749b7dea]{background:#ffc107}.timeline-content[data-v-749b7dea]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-749b7dea]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-749b7dea]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-749b7dea]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-749b7dea],.content-header[data-v-749b7dea]{align-items:center;display:flex}.action-info[data-v-749b7dea]{gap:12px}.action-badge[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-749b7dea]{background:#d4edda;color:#155724}.badge-update[data-v-749b7dea]{background:#cce7ff;color:#004085}.badge-delete[data-v-749b7dea]{background:#f8d7da;color:#721c24}.badge-approve[data-v-749b7dea]{background:#d4edda;color:#155724}.badge-reject[data-v-749b7dea]{background:#f8d7da;color:#721c24}.badge-submit[data-v-749b7dea]{background:#d1ecf1;color:#0c5460}.amount-change[data-v-749b7dea],.badge-cancel[data-v-749b7dea]{background:#fff3cd;color:#856404}.amount-change[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-749b7dea]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-749b7dea],.user-info[data-v-749b7dea]{align-items:center;display:flex}.user-info[data-v-749b7dea]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-749b7dea]{color:#666;font-size:12px}.settlement-info[data-v-749b7dea]{align-items:center;display:flex;font-size:14px;gap:12px}.settlement-amount[data-v-749b7dea]{font-size:15px}.settlement-date[data-v-749b7dea]{color:#666;font-size:13px}.content-status[data-v-749b7dea]{justify-content:space-between;margin-bottom:8px}.content-status[data-v-749b7dea],.status-badge[data-v-749b7dea]{align-items:center;display:flex}.status-badge[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:500;gap:4px;padding:3px 8px}.status-badge i[data-v-749b7dea]{font-size:8px}.status-draft[data-v-749b7dea]{background:#e9ecef;color:#495057}.status-pending[data-v-749b7dea]{background:#fff3cd;color:#856404}.status-approved[data-v-749b7dea]{background:#d4edda;color:#155724}.status-rejected[data-v-749b7dea]{background:#f8d7da;color:#721c24}.status-paid[data-v-749b7dea]{background:#cce7ff;color:#004085}.status-active[data-v-749b7dea]{background:#d1ecf1;color:#0c5460}.settlements-count[data-v-749b7dea]{background:#f8f9fa;border-radius:3px;color:#666;font-size:12px;padding:2px 6px}.content-preview[data-v-749b7dea]{display:flex;font-size:13px;gap:12px;margin-bottom:8px}.reference[data-v-749b7dea]{color:#007bff;font-weight:500}.description[data-v-749b7dea]{color:#666}.content-reason[data-v-749b7dea]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-749b7dea]{font-size:11px}.expand-indicator[data-v-749b7dea]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-749b7dea]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-749b7dea]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-bottom:16px}.detail-item[data-v-749b7dea]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-749b7dea]{color:#333;font-size:13px}.amount[data-v-749b7dea]{color:#28a745;font-weight:600}.status[data-v-749b7dea]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.description-section[data-v-749b7dea],.note-section[data-v-749b7dea]{margin-bottom:16px}.description-section h4[data-v-749b7dea],.note-section h4[data-v-749b7dea]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.description-section p[data-v-749b7dea],.note-section p[data-v-749b7dea]{color:#666;font-size:13px;line-height:1.4;margin:0}.settlements-section h4[data-v-749b7dea]{align-items:center;border-bottom:1px solid #e5e5e5;color:#333;display:flex;font-size:14px;justify-content:space-between;margin:0 0 12px;padding-bottom:4px}.total-amount[data-v-749b7dea]{color:#28a745;font-size:13px;font-weight:600}.settlements-list[data-v-749b7dea]{display:flex;flex-direction:column;gap:8px}.settlement-item[data-v-749b7dea]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:12px}.settlement-header[data-v-749b7dea]{align-items:center;display:flex;justify-content:space-between;margin-bottom:6px}.settlement-id[data-v-749b7dea]{color:#333;font-size:13px;font-weight:600}.settlement-amount[data-v-749b7dea]{color:#28a745;font-size:14px;font-weight:600}.settlement-details[data-v-749b7dea]{align-items:center;display:flex;font-size:12px;gap:12px}.line-item[data-v-749b7dea]{color:#666}.settlement-status[data-v-749b7dea]{border-radius:3px;font-weight:500;padding:2px 6px}.settlement-date[data-v-749b7dea]{color:#999}.approval-section h4[data-v-749b7dea]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.approval-grid[data-v-749b7dea]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.approval-item[data-v-749b7dea]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.approval-item label[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.approval-item span[data-v-749b7dea]{color:#333;font-size:13px}.empty-state[data-v-749b7dea]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:48px 20px;text-align:center}.empty-state i[data-v-749b7dea]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-749b7dea]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-749b7dea]{font-size:14px;margin:0}.pagination[data-v-749b7dea]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-749b7dea],.pagination[data-v-749b7dea]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-749b7dea]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-749b7dea]:hover:not(:disabled){background:#f8f9fa;border-color:#007bff}.page-btn[data-v-749b7dea]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-749b7dea]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-749b7dea]{padding:16px}.content-main[data-v-749b7dea]{gap:8px}.content-main[data-v-749b7dea],.content-status[data-v-749b7dea]{align-items:flex-start;flex-direction:column}.content-status[data-v-749b7dea]{gap:6px}.approval-grid[data-v-749b7dea],.details-grid[data-v-749b7dea]{grid-template-columns:1fr}.expanded-details[data-v-749b7dea]{margin-left:0}.timeline-item[data-v-749b7dea]:not(:last-child):before{display:none}.filter-group[data-v-749b7dea]{flex-wrap:wrap}.settlement-header[data-v-749b7dea],.settlements-section h4[data-v-749b7dea]{align-items:flex-start;flex-direction:column;gap:4px}.settlement-details[data-v-749b7dea]{flex-wrap:wrap}}@media (max-width:480px){.settlement-info[data-v-749b7dea]{align-items:flex-start}.content-preview[data-v-749b7dea],.settlement-info[data-v-749b7dea]{flex-direction:column;gap:4px}.filter-input[data-v-749b7dea]{min-width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/view/index.vue?vue&type=template&id=749b7dea&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settlement-audit-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-749b7dea>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-749b7dea>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-749b7dea> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-749b7dea> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.action,
      expression: "filters.action"
    }],
    staticClass: "filter-input",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "action", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Actions")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREATE"
    }
  }, [_vm._v("Created")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UPDATE"
    }
  }, [_vm._v("Updated")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DELETE"
    }
  }, [_vm._v("Deleted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "APPROVE"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REJECT"
    }
  }, [_vm._v("Rejected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SUBMIT"
    }
  }, [_vm._v("Submitted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CANCEL"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.status,
      expression: "filters.status"
    }],
    staticClass: "filter-input",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("Draft")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("Pending")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rejected"
    }
  }, [_vm._v("Rejected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-749b7dea><i class=\"fas fa-search\" data-v-749b7dea></i></button> <button class=\"btn-clear\" data-v-749b7dea><i class=\"fas fa-times\" data-v-749b7dea></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-749b7dea><i class=\"fas fa-spinner fa-spin\" data-v-749b7dea></i>\n    Loading settlement history...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-749b7dea>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData5$invo, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData14$pay, _log$recordData15, _log$recordData15$ban, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData20$inv, _log$recordData21, _log$recordData22;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-749b7dea><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-749b7dea><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-749b7dea></i></div> <div class=\"timeline-content\" data-v-749b7dea><div class=\"content-header\" data-v-749b7dea><div class=\"action-info\" data-v-749b7dea><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-749b7dea><div class=\"user-info\" data-v-749b7dea><i class=\"fas fa-user\" data-v-749b7dea></i> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"settlement-info\" data-v-749b7dea><span class=\"settlement-amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.paymentAmount))) + "</span> <span class=\"settlement-date\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.settlementDate))) + "</span></div></div> <div class=\"content-status\" data-v-749b7dea><span" + _vm._ssrClass("status-badge", `status-${(_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.status}`) + " data-v-749b7dea><i class=\"fas fa-circle\" data-v-749b7dea></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status)) + "\n          ") + "</span> " + ((_log$recordData5 = log.recordData) !== null && _log$recordData5 !== void 0 && (_log$recordData5$invo = _log$recordData5.invoiceSettlements) !== null && _log$recordData5$invo !== void 0 && _log$recordData5$invo.length ? "<span class=\"settlements-count\" data-v-749b7dea>" + _vm._ssrEscape("\n            " + _vm._s(log.recordData.invoiceSettlements.length) + " invoice" + _vm._s(log.recordData.invoiceSettlements.length > 1 ? 's' : '') + "\n          ") + "</span>" : "<!---->") + "</div> " + (log.reason ? "<div class=\"content-reason\" data-v-749b7dea><i class=\"fas fa-comment-alt\" data-v-749b7dea></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " " + ((_log$recordData6 = log.recordData) !== null && _log$recordData6 !== void 0 && _log$recordData6.reference || (_log$recordData7 = log.recordData) !== null && _log$recordData7 !== void 0 && _log$recordData7.description ? "<div class=\"content-preview\" data-v-749b7dea>" + (log.recordData.reference ? "<span class=\"reference\" data-v-749b7dea>" + _vm._ssrEscape("\n            Ref: " + _vm._s(log.recordData.reference) + "\n          ") + "</span>" : "<!---->") + " " + (log.recordData.description ? "<span class=\"description\" data-v-749b7dea>" + _vm._ssrEscape("\n            " + _vm._s(_vm.truncateText(log.recordData.description, 50)) + "\n          ") + "</span>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-749b7dea><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-749b7dea></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-749b7dea><div class=\"details-grid\" data-v-749b7dea><div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Settlement ID:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.settlementId || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Settlement Date:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.settlementDate))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Payment Amount:</label> <span class=\"amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.paymentAmount))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Base Amount:</label> <span class=\"amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.baseAmount))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.status}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Reference:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.reference) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Payment Method:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : (_log$recordData14$pay = _log$recordData14.paymentMethod) === null || _log$recordData14$pay === void 0 ? void 0 : _log$recordData14$pay.name) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Bank Account:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : (_log$recordData15$ban = _log$recordData15.bankAccount) === null || _log$recordData15$ban === void 0 ? void 0 : _log$recordData15$ban.accountName) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Created:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.createdAt))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Last Updated:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.updateTimestamp))) + "</span></div></div> " + ((_log$recordData18 = log.recordData) !== null && _log$recordData18 !== void 0 && _log$recordData18.description ? "<div class=\"description-section\" data-v-749b7dea><h4 data-v-749b7dea>Description</h4> <p data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.description)) + "</p></div>" : "<!---->") + " " + ((_log$recordData19 = log.recordData) !== null && _log$recordData19 !== void 0 && _log$recordData19.note ? "<div class=\"note-section\" data-v-749b7dea><h4 data-v-749b7dea>Note</h4> <p data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.note)) + "</p></div>" : "<!---->") + " " + ((_log$recordData20 = log.recordData) !== null && _log$recordData20 !== void 0 && (_log$recordData20$inv = _log$recordData20.invoiceSettlements) !== null && _log$recordData20$inv !== void 0 && _log$recordData20$inv.length ? "<div class=\"settlements-section\" data-v-749b7dea><h4 data-v-749b7dea>" + _vm._ssrEscape("\n            Invoice Settlements (" + _vm._s(log.recordData.invoiceSettlements.length) + ")\n            ") + "<span class=\"total-amount\" data-v-749b7dea>" + _vm._ssrEscape("\n              Total: " + _vm._s(_vm.formatCurrency(_vm.getTotalSettlementAmount(log.recordData.invoiceSettlements))) + "\n            ") + "</span></h4> <div class=\"settlements-list\" data-v-749b7dea>" + _vm._ssrList(log.recordData.invoiceSettlements, function (settlement) {
      return "<div class=\"settlement-item\" data-v-749b7dea><div class=\"settlement-header\" data-v-749b7dea><span class=\"settlement-id\" data-v-749b7dea>" + _vm._ssrEscape("Settlement #" + _vm._s(settlement.id)) + "</span> <span class=\"settlement-amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(settlement.amount))) + "</span></div> <div class=\"settlement-details\" data-v-749b7dea><span class=\"line-item\" data-v-749b7dea>" + _vm._ssrEscape("Line Item #" + _vm._s(settlement.invoiceLineItemId)) + "</span> <span" + _vm._ssrClass("settlement-status", `status-${settlement.status}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getStatusText(settlement.status)) + "\n                ") + "</span> <span class=\"settlement-date\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(settlement.createdAt))) + "</span></div></div>";
    }) + "</div></div>" : "<!---->") + " " + ((_log$recordData21 = log.recordData) !== null && _log$recordData21 !== void 0 && _log$recordData21.maker || (_log$recordData22 = log.recordData) !== null && _log$recordData22 !== void 0 && _log$recordData22.checker ? "<div class=\"approval-section\" data-v-749b7dea><h4 data-v-749b7dea>Approval Information</h4> <div class=\"approval-grid\" data-v-749b7dea>" + (log.recordData.maker ? "<div class=\"approval-item\" data-v-749b7dea><label data-v-749b7dea>Maker:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.maker.cus_name || log.recordData.maker.name || '-')) + "</span></div>" : "<!---->") + " " + (log.recordData.checker ? "<div class=\"approval-item\" data-v-749b7dea><label data-v-749b7dea>Checker:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.checker.cus_name || log.recordData.checker.name || '-')) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-749b7dea><i class=\"fas fa-history\" data-v-749b7dea></i> <h3 data-v-749b7dea>No settlement audit records found</h3> <p data-v-749b7dea>No changes have been recorded for this settlement yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-749b7dea><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-749b7dea><i class=\"fas fa-chevron-left\" data-v-749b7dea></i></button> <span class=\"page-info\" data-v-749b7dea>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-749b7dea><i class=\"fas fa-chevron-right\" data-v-749b7dea></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue?vue&type=template&id=749b7dea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'SettlementAuditViewer',
  props: {
    settlementId: {
      type: [Number, String],
      default: null
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    showFilters: {
      type: Boolean,
      default: true
    }
  },
  emits: ['logs-loaded'],
  data() {
    return {
      loading: false,
      auditLogs: [],
      expandedId: null,
      filters: {
        dateFrom: '',
        dateTo: '',
        action: '',
        status: ''
      },
      pagination: {
        page: 1,
        limit: 10,
        total: 0,
        pages: 0
      }
    };
  },
  mounted() {
    if (this.autoLoad) {
      this.loadAuditLogs();
    }
  },
  watch: {
    settlementId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      try {
        // API call for settlement audit logs
        const response = await this.$axios.get(`/api/ap-invoices-settlement/audit/${this.settlementId}`, {
          params: {
            page,
            limit: this.pagination.limit,
            ...this.filters
          }
        });
        if (response.data.success) {
          this.auditLogs = this.processAuditLogs(response.data.data);
          this.pagination = response.data.pagination || {
            page: 1,
            limit: 10,
            total: this.auditLogs.length,
            pages: Math.ceil(this.auditLogs.length / 10)
          };
          this.$emit('logs-loaded', this.auditLogs);
        }
      } catch (error) {
        var _this$$toast;
        console.error('Error loading settlement audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load settlement audit logs');
      } finally {
        this.loading = false;
      }
    },
    processAuditLogs(logs) {
      return logs.map(log => {
        if (typeof log.recordData === 'string') {
          try {
            log.recordData = JSON.parse(log.recordData);
          } catch (e) {
            console.warn('Failed to parse recordData:', e);
          }
        }
        return log;
      }).sort((a, b) => new Date(b.auditDate) - new Date(a.auditDate));
    },
    toggleExpand(logId) {
      this.expandedId = this.expandedId === logId ? null : logId;
    },
    changePage(page) {
      if (page >= 1 && page <= this.pagination.pages) {
        this.loadAuditLogs(page);
      }
    },
    clearFilters() {
      this.filters = {
        dateFrom: '',
        dateTo: '',
        action: '',
        status: ''
      };
      this.loadAuditLogs();
    },
    showAmountChange(log, index) {
      var _prevLog$recordData, _log$recordData;
      if (log.action !== 'UPDATE' || index === this.auditLogs.length - 1) return false;
      const prevLog = this.auditLogs[index + 1];
      if (!prevLog || !((_prevLog$recordData = prevLog.recordData) !== null && _prevLog$recordData !== void 0 && _prevLog$recordData.paymentAmount) || !((_log$recordData = log.recordData) !== null && _log$recordData !== void 0 && _log$recordData.paymentAmount)) return false;
      return prevLog.recordData.paymentAmount !== log.recordData.paymentAmount;
    },
    getAmountChange(log, index) {
      var _log$recordData2, _prevLog$recordData2;
      const prevLog = this.auditLogs[index + 1];
      const current = ((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.paymentAmount) || 0;
      const previous = (prevLog === null || prevLog === void 0 ? void 0 : (_prevLog$recordData2 = prevLog.recordData) === null || _prevLog$recordData2 === void 0 ? void 0 : _prevLog$recordData2.paymentAmount) || 0;
      const diff = current - previous;
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    getTotalSettlementAmount(settlements) {
      return settlements.reduce((total, settlement) => total + (settlement.amount || 0), 0);
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times',
        'SUBMIT': 'fas fa-paper-plane',
        'CANCEL': 'fas fa-ban'
      };
      return icons[action] || 'fas fa-circle';
    },
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected',
        'SUBMIT': 'Submitted',
        'CANCEL': 'Cancelled'
      };
      return actions[action] || action;
    },
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled',
        'active': 'Active',
        'inactive': 'Inactive'
      };
      return statuses[status] || status;
    },
    getUserName(log) {
      var _log$recordData3, _log$recordData3$make, _log$recordData4, _log$recordData4$chec, _log$user;
      return ((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : (_log$recordData3$make = _log$recordData3.maker) === null || _log$recordData3$make === void 0 ? void 0 : _log$recordData3$make.cus_name) || ((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : (_log$recordData4$chec = _log$recordData4.checker) === null || _log$recordData4$chec === void 0 ? void 0 : _log$recordData4$chec.cus_name) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name) || 'Unknown User';
    },
    formatTime(date) {
      if (!date) return '-';
      const now = new Date();
      const logDate = new Date(date);
      const diffHours = Math.abs(now - logDate) / (1000 * 60 * 60);
      if (diffHours < 24) {
        return logDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        });
      } else {
        return logDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });
      }
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(amount);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var audit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(500)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "749b7dea",
  "a9386c0e"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29240812_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29240812_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29240812_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29240812_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29240812_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-audit-dialog-overlay[data-v-29240812]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.settlement-audit-dialog[data-v-29240812]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.settlement-audit-dialog-header[data-v-29240812]{align-items:center;background:linear-gradient(135deg,#28a745,#20c997);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-29240812]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.settlement-subtitle[data-v-29240812]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-29240812]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-29240812]:hover{background:hsla(0,0%,100%,.2)}.settlement-audit-dialog-body[data-v-29240812]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.settlement-audit-dialog-body[data-v-29240812]::-webkit-scrollbar{width:8px}.settlement-audit-dialog-body[data-v-29240812]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.settlement-audit-dialog-body[data-v-29240812]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.settlement-audit-dialog-body[data-v-29240812]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.settlement-audit-dialog-footer[data-v-29240812]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.export-options[data-v-29240812]{align-items:center;display:flex;gap:0}.main-export-btn[data-v-29240812]{border-bottom-right-radius:0;border-top-right-radius:0}.export-dropdown[data-v-29240812]{position:relative}.dropdown-toggle[data-v-29240812]{border-bottom-left-radius:0;border-left:none;border-top-left-radius:0;padding:10px 8px}.dropdown-menu[data-v-29240812]{background:#fff;border:1px solid #ddd;border-radius:6px;bottom:100%;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:5px;min-width:160px;position:absolute;right:0;z-index:1000}.dropdown-item[data-v-29240812]{align-items:center;background:none;border:none;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px 12px;text-align:left;transition:background-color .2s;width:100%}.dropdown-item[data-v-29240812]:hover{background:#f8f9fa}.dropdown-item[data-v-29240812]:first-child{border-top-left-radius:6px;border-top-right-radius:6px}.dropdown-item[data-v-29240812]:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.btn[data-v-29240812]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-29240812]{background:#28a745;color:#fff}.btn-primary[data-v-29240812]:hover{background:#218838;transform:translateY(-1px)}.btn-outline-primary[data-v-29240812]{background:#fff;border:1px solid #28a745;color:#28a745}.btn-outline-primary[data-v-29240812]:hover{background:#28a745;color:#fff;transform:translateY(-1px)}.btn-secondary[data-v-29240812]{background:#6c757d;color:#fff}.btn-secondary[data-v-29240812]:hover{background:#5a6268;transform:translateY(-1px)}.btn[data-v-29240812]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.settlement-audit-dialog[data-v-29240812]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.settlement-audit-dialog-header[data-v-29240812]{padding:15px}.header-info h3[data-v-29240812]{font-size:18px}.settlement-audit-dialog-footer[data-v-29240812]{flex-direction:column;padding:15px}.btn[data-v-29240812],.export-options[data-v-29240812]{width:100%}.btn[data-v-29240812]{justify-content:center}.main-export-btn[data-v-29240812]{border-radius:6px;border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-toggle[data-v-29240812]{border-left:1px solid #28a745;border-radius:6px;border-top-left-radius:0;border-top-right-radius:0}.dropdown-menu[data-v-29240812]{border:none;box-shadow:none;margin-bottom:0;position:static;width:100%}}@media (max-width:480px){.settlement-audit-dialog-overlay[data-v-29240812]{padding:0}.settlement-audit-dialog-header[data-v-29240812]{align-items:flex-start;flex-direction:column;gap:10px;position:relative}.close-btn[data-v-29240812]{position:absolute;right:15px;top:15px}.header-info h3[data-v-29240812]{font-size:16px}.settlement-subtitle[data-v-29240812]{font-size:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 564:
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
  add("5ea202a4", content, true, context)
};

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/index.vue?vue&type=template&id=29240812&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "settlement-audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"settlement-audit-dialog\" data-v-29240812>", "</div>", [_vm._ssrNode("<div class=\"settlement-audit-dialog-header\" data-v-29240812><div class=\"header-info\" data-v-29240812><h3 data-v-29240812><i class=\"fas fa-history\" data-v-29240812></i>\n          ປະຫວັດການດຳເນີນງານການຊຳລະ\n        </h3> " + (_vm.settlementInfo ? "<p class=\"settlement-subtitle\" data-v-29240812>" + _vm._ssrEscape("\n          ການຊຳລະ: " + _vm._s(_vm.settlementInfo.settlementId) + " - \n          " + _vm._s(_vm.formatCurrency(_vm.settlementInfo.paymentAmount)) + " - \n          " + _vm._s(_vm.formatDate(_vm.settlementInfo.settlementDate)) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-29240812><i class=\"fas fa-times\" data-v-29240812></i></button></div> "), _vm._ssrNode("<div class=\"settlement-audit-dialog-body\" data-v-29240812>", "</div>", [_c('settlement-audit-viewer', {
    ref: "settlementAuditViewer",
    attrs: {
      "settlement-id": _vm.settlementId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"settlement-audit-dialog-footer\" data-v-29240812><button type=\"button\" class=\"btn btn-secondary\" data-v-29240812><i class=\"fas fa-times\" data-v-29240812></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-29240812><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-29240812>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-29240812></i>" : "<i class=\"fas fa-download\" data-v-29240812></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-29240812><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-29240812><i class=\"fas fa-caret-down\" data-v-29240812></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-29240812><button class=\"dropdown-item\" data-v-29240812><i class=\"fas fa-code\" data-v-29240812></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-29240812><i class=\"fas fa-table\" data-v-29240812></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-29240812><i class=\"fas fa-print\" data-v-29240812></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue?vue&type=template&id=29240812&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/index.vue?vue&type=script&lang=js&
var auditvue_type_script_lang_js_ = __webpack_require__(470);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var settlement_auditvue_type_script_lang_js_ = (auditvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(562)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settlement_auditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29240812",
  "05026f5e"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_454718a7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(564);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_454718a7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_454718a7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_454718a7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_454718a7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-454718a7]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1000}.settlement-dialog[data-v-454718a7]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1000px;overflow:hidden;width:100%}.dialog-header[data-v-454718a7]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.dialog-header h4[data-v-454718a7]{color:#333;font-weight:600;margin:0}.header-actions[data-v-454718a7]{gap:12px}.audit-btn[data-v-454718a7],.header-actions[data-v-454718a7]{align-items:center;display:flex}.audit-btn[data-v-454718a7]{background:#17a2b8;border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:14px;font-weight:500;gap:6px;padding:8px 12px;transition:all .2s ease}.audit-btn[data-v-454718a7]:hover{background:#138496;box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-1px)}.audit-btn[data-v-454718a7]:active{transform:translateY(0)}.audit-text[data-v-454718a7]{font-size:13px}.close-btn[data-v-454718a7]{background:none;border:none;border-radius:50%;color:#666;cursor:pointer;font-size:18px;padding:5px;transition:all .2s ease}.close-btn[data-v-454718a7]:hover{background:rgba(0,0,0,.1);color:#333}.dialog-body[data-v-454718a7]{flex:1;overflow-y:auto;padding:20px}.form-section[data-v-454718a7]{background:#fafafa;border:1px solid #e9ecef;border-radius:8px;margin-bottom:30px;padding:20px}.section-title[data-v-454718a7]{border-bottom:2px solid #007bff;color:#333;font-size:16px;font-weight:600;margin-bottom:20px;padding-bottom:8px}.section-header[data-v-454718a7]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.form-row[data-v-454718a7]{display:flex;flex-wrap:wrap;margin:0 -10px}.form-group[data-v-454718a7]{margin-bottom:20px;padding:0 10px}.col-md-4[data-v-454718a7]{flex:0 0 33.333%;max-width:33.333%}.form-group label[data-v-454718a7]{color:#333;display:block;font-size:14px;font-weight:600;margin-bottom:5px}.required[data-v-454718a7]{color:#e74c3c}.form-control[data-v-454718a7]{border:1px solid #ddd;border-radius:4px;font-size:14px;padding:10px 12px;transition:border-color .2s ease;width:100%}.form-control[data-v-454718a7]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}.form-control[data-v-454718a7]:disabled{background-color:#f8f9fa;color:#6c757d}.form-control.is-invalid[data-v-454718a7]{border-color:#e74c3c}.invalid-feedback[data-v-454718a7]{color:#e74c3c;display:block;font-size:12px;margin-top:5px;width:100%}.no-invoices[data-v-454718a7]{background:#fff;border:2px dashed #ddd;border-radius:8px;color:#666;padding:40px 20px;text-align:center}.no-invoices i[data-v-454718a7]{font-size:36px;margin-bottom:15px;opacity:.5}.no-invoices p[data-v-454718a7]{font-weight:600;margin:10px 0 5px}.no-invoices small[data-v-454718a7]{color:#999}.invoice-allocations[data-v-454718a7]{background:#fff;border-radius:8px;overflow:hidden}.table[data-v-454718a7]{border-collapse:collapse;margin:0}.table th[data-v-454718a7]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-size:12px;font-weight:600;padding:12px 10px;white-space:nowrap}.table td[data-v-454718a7]{border-top:1px solid #dee2e6;font-size:12px;padding:10px;vertical-align:middle}.table-sm td[data-v-454718a7],.table-sm th[data-v-454718a7]{padding:8px}.form-control-sm[data-v-454718a7]{font-size:12px;padding:4px 8px}.allocation-summary[data-v-454718a7]{background:#f8f9fa;border-top:1px solid #dee2e6;display:flex;font-size:14px;justify-content:space-between;padding:15px}.form-actions[data-v-454718a7]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px}.btn[data-v-454718a7]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:10px 20px;transition:all .2s ease}.btn-primary[data-v-454718a7]{background:#007bff;color:#fff}.btn-secondary[data-v-454718a7]{background:#6c757d;color:#fff}.btn-success[data-v-454718a7]{background:#28a745;color:#fff}.btn-info[data-v-454718a7]{background:#17a2b8;color:#fff}.btn-danger[data-v-454718a7]{background:#dc3545;color:#fff}.btn-sm[data-v-454718a7]{font-size:12px;padding:4px 8px}.btn[data-v-454718a7]:hover{box-shadow:0 2px 4px rgba(0,0,0,.1);opacity:.9;transform:translateY(-1px)}.btn[data-v-454718a7]:disabled{cursor:not-allowed;opacity:.6;transform:none}.invoice-selector-overlay[data-v-454718a7]{align-items:center;background-color:rgba(0,0,0,.7);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1100}.invoice-selector-modal[data-v-454718a7]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:80vh;max-width:800px;overflow:hidden;width:100%}.modal-header[data-v-454718a7]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:15px 20px}.modal-header h5[data-v-454718a7]{color:#333;font-weight:600;margin:0}.modal-body[data-v-454718a7]{flex:1;overflow-y:auto;padding:20px}.invoice-filters[data-v-454718a7]{background:#f8f9fa;border-radius:6px;margin-bottom:20px;padding:15px}.row[data-v-454718a7]{display:flex;flex-wrap:wrap;margin:0 -10px}.col-md-6[data-v-454718a7]{flex:0 0 50%;max-width:50%;padding:0 10px}.invoice-list[data-v-454718a7]{border:1px solid #e9ecef;border-radius:6px;max-height:400px;overflow-y:auto}.table-hover tbody tr[data-v-454718a7]:hover{background-color:rgba(0,0,0,.075)}.selected-row[data-v-454718a7]{background-color:rgba(0,123,255,.1)!important}.no-data[data-v-454718a7]{color:#666;padding:40px 20px;text-align:center}.modal-actions[data-v-454718a7]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:15px 20px}@media (max-width:768px){.settlement-dialog[data-v-454718a7]{max-height:95vh;max-width:95vw}.header-actions[data-v-454718a7]{flex-direction:column;gap:8px}.audit-btn[data-v-454718a7]{font-size:12px;padding:6px 10px}.audit-text[data-v-454718a7]{display:none}.form-row[data-v-454718a7]{flex-direction:column}.col-md-4[data-v-454718a7],.col-md-6[data-v-454718a7]{flex:1;margin-bottom:15px;max-width:100%}.dialog-body[data-v-454718a7],.form-section[data-v-454718a7]{padding:15px}.allocation-summary[data-v-454718a7]{flex-direction:column;gap:10px}.form-actions[data-v-454718a7]{flex-direction:column-reverse}.form-actions .btn[data-v-454718a7]{justify-content:center;width:100%}.invoice-selector-modal[data-v-454718a7]{max-width:95vw}.col-md-6[data-v-454718a7]{flex:1;margin-bottom:10px;max-width:100%}}@media (max-width:480px){.dialog-header[data-v-454718a7]{align-items:flex-start;flex-direction:column;gap:10px;padding-right:60px;position:relative}.header-actions[data-v-454718a7]{flex-direction:row;gap:8px;position:absolute;right:15px;top:15px}.audit-btn[data-v-454718a7]{padding:6px 8px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(984);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d43801e8", content, true, context)
};

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/index.vue?vue&type=template&id=454718a7&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"settlement-dialog\" data-v-454718a7>", "</div>", [_vm._ssrNode("<div class=\"dialog-header\" data-v-454718a7><h4 data-v-454718a7>" + _vm._ssrEscape(_vm._s(_vm.isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ສ້າງການຊຳລະໃໝ່')) + "</h4> <div class=\"header-actions\" data-v-454718a7>" + (_vm.isEditMode ? "<button type=\"button\" title=\"ເບິ່ງປະຫວັດການດຳເນີນງານ\" class=\"audit-btn\" data-v-454718a7><i class=\"fas fa-history\" data-v-454718a7></i> <span class=\"audit-text\" data-v-454718a7>ປະຫວັດ</span></button>" : "<!---->") + " <button class=\"close-btn\" data-v-454718a7><i class=\"fas fa-times\" data-v-454718a7></i></button></div></div> "), _vm._ssrNode("<div class=\"dialog-body\" data-v-454718a7>", "</div>", [_vm._ssrNode("<form data-v-454718a7>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-454718a7>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-454718a7>ຂໍ້ມູນການຊຳລະ</h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-454718a7>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ວັນທີຊຳລະ <span class=\"required\" data-v-454718a7>*</span></label> <input type=\"date\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.settlementDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.settlementDate
  }) + " data-v-454718a7> " + (_vm.errors.settlementDate ? "<div class=\"invalid-feedback\" data-v-454718a7>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.settlementDate) + "\n              ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-454718a7>", "</div>", [_vm._ssrNode("<label data-v-454718a7>ສະຖານະ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": !_vm.canModifyStatus
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("ຮ່າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("ລໍຖ້າການອະນຸມັດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("ອະນຸມັດແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "completed"
    }
  }, [_vm._v("ສຳເລັດແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("ຍົກເລີກ")])])], 2)], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-454718a7><div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ຈຳນວນເງິນຊຳລະ <span class=\"required\" data-v-454718a7>*</span></label> <input type=\"number\" step=\"0.01\" min=\"0\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.paymentAmount) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.paymentAmount
  }) + " data-v-454718a7> " + (_vm.errors.paymentAmount ? "<div class=\"invalid-feedback\" data-v-454718a7>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.paymentAmount) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ຈຳນວນເງິນພື້ນຖານ <span class=\"required\" data-v-454718a7>*</span></label> <input type=\"number\" step=\"0.01\" min=\"0\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.baseAmount) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.baseAmount
  }) + " data-v-454718a7> " + (_vm.errors.baseAmount ? "<div class=\"invalid-feedback\" data-v-454718a7>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.baseAmount) + "\n              ") + "</div>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"form-row\" data-v-454718a7>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-454718a7>", "</div>", [_vm._ssrNode("<label data-v-454718a7>ວິທີການຊຳລະ <span class=\"required\" data-v-454718a7>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentMethodId,
      expression: "form.paymentMethodId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.paymentMethodId
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
        _vm.$set(_vm.form, "paymentMethodId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກວິທີການຊຳລະ")]), _vm._v(" "), _vm._l(_vm.paymentMethods, function (method) {
    return _c('option', {
      key: method.id,
      domProps: {
        "value": method.id
      }
    }, [_vm._v("\n                  " + _vm._s(method.payment_name) + "\n                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.paymentMethodId ? "<div class=\"invalid-feedback\" data-v-454718a7>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.paymentMethodId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-454718a7>", "</div>", [_vm._ssrNode("<label data-v-454718a7>ບັນຊີທະນາຄານ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankAccountId,
      expression: "form.bankAccountId"
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
        _vm.$set(_vm.form, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີທະນາຄານ")]), _vm._v(" "), _vm._l(_vm.bankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                  " + _vm._s(account.accountNumber) + " - " + _vm._s(account.bankName) + "\n                ")]);
  })], 2)], 2)], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-454718a7><div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ອ້າງອີງ</label> <input type=\"text\" maxlength=\"100\" placeholder=\"ຫມາຍເລກອ້າງອີງ\"" + _vm._ssrAttr("value", _vm.form.reference) + " class=\"form-control\" data-v-454718a7></div> <div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ຜູ້ສ້າງ</label> <input type=\"text\"" + _vm._ssrAttr("disabled", true) + _vm._ssrAttr("value", _vm.makerName) + " class=\"form-control\" data-v-454718a7></div></div> <div class=\"form-row\" data-v-454718a7><div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ຄຳອະທິບາຍ</label> <textarea rows=\"3\" placeholder=\"ຄຳອະທິບາຍການຊຳລະ\" class=\"form-control\" data-v-454718a7>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div> <div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ໝາຍເຫດ</label> <textarea rows=\"3\" placeholder=\"ໝາຍເຫດເພີ່ມເຕີມ\" class=\"form-control\" data-v-454718a7>" + _vm._ssrEscape(_vm._s(_vm.form.note)) + "</textarea></div></div>")], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-454718a7><div class=\"section-header\" data-v-454718a7><h5 class=\"section-title\" data-v-454718a7>ການຈັດສັນໃບແຈ້ງໜີ້</h5> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-sm btn-primary\" data-v-454718a7><i class=\"fas fa-plus\" data-v-454718a7></i> ເພີ່ມໃບແຈ້ງໜີ້\n            </button></div> " + (_vm.selectedInvoices.length === 0 ? "<div class=\"no-invoices\" data-v-454718a7><i class=\"fas fa-file-invoice\" data-v-454718a7></i> <p data-v-454718a7>ຍັງບໍ່ໄດ້ເລືອກໃບແຈ້ງໜີ້</p> <small data-v-454718a7>ກົດປຸ່ມ &quot;ເພີ່ມໃບແຈ້ງໜີ້&quot;\n              ເພື່ອເລືອກໃບແຈ້ງໜີ້ທີ່ຕ້ອງການຊຳລະ</small></div>" : "<div class=\"invoice-allocations\" data-v-454718a7><table class=\"table table-sm\" data-v-454718a7><thead data-v-454718a7><tr data-v-454718a7><th data-v-454718a7>ເລກທີໃບແຈ້ງໜີ້</th> <th data-v-454718a7>ຜູ້ຂາຍ</th> <th data-v-454718a7>ຍອດຄ້າງຈ່າຍ</th> <th data-v-454718a7>ຈຳນວນຈັດສັນ</th> <th data-v-454718a7>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-454718a7>" + _vm._ssrList(_vm.selectedInvoices, function (invoice, index) {
    var _invoice$vendor;
    return "<tr data-v-454718a7><td data-v-454718a7>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</td> <td data-v-454718a7>" + _vm._ssrEscape(_vm._s(((_invoice$vendor = invoice.vendor) === null || _invoice$vendor === void 0 ? void 0 : _invoice$vendor.name) || 'N/A')) + "</td> <td data-v-454718a7>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(invoice.outstandingAmount))) + "</td> <td data-v-454718a7><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("max", invoice.outstandingAmount) + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + _vm._ssrAttr("value", invoice.settledAmount) + " class=\"form-control form-control-sm\" data-v-454718a7></td> <td data-v-454718a7><button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-sm btn-danger\" data-v-454718a7><i class=\"fas fa-trash\" data-v-454718a7></i></button></td></tr>";
  }) + "</tbody></table> <div class=\"allocation-summary\" data-v-454718a7><div class=\"summary-item\" data-v-454718a7><strong data-v-454718a7>" + _vm._ssrEscape("ລວມຈັດສັນ: " + _vm._s(_vm.formatCurrency(_vm.totalAllocated))) + "</strong></div> <div class=\"summary-item\" data-v-454718a7><strong data-v-454718a7>" + _vm._ssrEscape("ຍອດເຫຼືອ: " + _vm._s(_vm.formatCurrency(_vm.unallocatedAmount))) + "</strong></div></div></div>") + "</div> " + (_vm.showApprovalSection ? "<div class=\"form-section\" data-v-454718a7><h5 class=\"section-title\" data-v-454718a7>ການອະນຸມັດ</h5> <div class=\"form-row\" data-v-454718a7><div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ຜູ້ອະນຸມັດ</label> <input type=\"text\"" + _vm._ssrAttr("disabled", true) + _vm._ssrAttr("value", _vm.checkerName) + " class=\"form-control\" data-v-454718a7></div> <div class=\"form-group col-md-6\" data-v-454718a7><label data-v-454718a7>ໝາຍເຫດການອະນຸມັດ</label> <textarea rows=\"2\" placeholder=\"ໝາຍເຫດການອະນຸມັດ\"" + _vm._ssrAttr("disabled", !_vm.canApprove) + " class=\"form-control\" data-v-454718a7>" + _vm._ssrEscape(_vm._s(_vm.form.approvalNote)) + "</textarea></div></div></div>" : "<!---->") + " <div class=\"form-actions\" data-v-454718a7><button type=\"button\" class=\"btn btn-secondary\" data-v-454718a7><i class=\"fas fa-times\" data-v-454718a7></i> ຍົກເລີກ\n          </button> " + (_vm.canApprove && _vm.form.status === 'pending' ? "<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isSubmitting) + " class=\"btn btn-success\" data-v-454718a7><i class=\"fas fa-check\" data-v-454718a7></i> ອະນຸມັດ\n          </button>" : "<!---->") + " " + (_vm.canComplete && ['pending', 'approved'].includes(_vm.form.status) ? "<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isSubmitting) + " class=\"btn btn-info\" data-v-454718a7><i class=\"fas fa-check-circle\" data-v-454718a7></i> ສຳເລັດ\n          </button>" : "<!---->") + " <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.isSubmitting || !_vm.canModify) + " class=\"btn btn-primary\" data-v-454718a7><i class=\"fas fa-save\" data-v-454718a7></i> " + (_vm.isSubmitting ? "<span data-v-454718a7>ກຳລັງບັນທຶກ...</span>" : "<span data-v-454718a7>" + _vm._ssrEscape(_vm._s(_vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ')) + "</span>") + "</button></div>")], 2)])], 2), _vm._ssrNode(" "), _vm.showInvoiceSelector ? _vm._ssrNode("<div class=\"invoice-selector-overlay\" data-v-454718a7>", "</div>", [_vm._ssrNode("<div class=\"invoice-selector-modal\" data-v-454718a7>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-454718a7><h5 data-v-454718a7>ເລືອກໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</h5> <button class=\"close-btn\" data-v-454718a7><i class=\"fas fa-times\" data-v-454718a7></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-454718a7>", "</div>", [_vm._ssrNode("<div class=\"invoice-filters\" data-v-454718a7>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-454718a7>", "</div>", [_vm._ssrNode("<div class=\"col-md-6\" data-v-454718a7><input type=\"text\" placeholder=\"ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້...\"" + _vm._ssrAttr("value", _vm.invoiceSearchTerm) + " class=\"form-control\" data-v-454718a7></div> "), _vm._ssrNode("<div class=\"col-md-6\" data-v-454718a7>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedVendorFilter,
      expression: "selectedVendorFilter"
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
        _vm.selectedVendorFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.filterInvoices]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກຜູ້ຂາຍ")]), _vm._v(" "), _vm._l(_vm.availableVendors, function (vendor) {
    return _c('option', {
      key: vendor.id,
      domProps: {
        "value": vendor.id
      }
    }, [_vm._v("\n                  " + _vm._s(vendor.name) + "\n                ")]);
  })], 2)])], 2)]), _vm._ssrNode(" <div class=\"invoice-list\" data-v-454718a7><table class=\"table table-sm table-hover\" data-v-454718a7><thead data-v-454718a7><tr data-v-454718a7><th data-v-454718a7>ເລືອກ</th> <th data-v-454718a7>ເລກທີໃບແຈ້ງໜີ້</th> <th data-v-454718a7>ຜູ້ຂາຍ</th> <th data-v-454718a7>ວັນທີຄົບກຳນົດ</th> <th data-v-454718a7>ຍອດຄ້າງຈ່າຍ</th></tr></thead> <tbody data-v-454718a7>" + _vm._ssrList(_vm.filteredInvoices, function (invoice) {
    var _invoice$vendor2;
    return "<tr" + _vm._ssrClass(null, {
      'selected-row': _vm.isInvoiceSelected(invoice.id)
    }) + " data-v-454718a7><td data-v-454718a7><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.isInvoiceSelected(invoice.id)) + " data-v-454718a7></td> <td data-v-454718a7>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</td> <td data-v-454718a7>" + _vm._ssrEscape(_vm._s(((_invoice$vendor2 = invoice.vendor) === null || _invoice$vendor2 === void 0 ? void 0 : _invoice$vendor2.name) || 'N/A')) + "</td> <td data-v-454718a7>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.dueDate))) + "</td> <td data-v-454718a7>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(invoice.outstandingAmount))) + "</td></tr>";
  }) + "</tbody></table> " + (_vm.filteredInvoices.length === 0 ? "<div class=\"no-data\" data-v-454718a7><p data-v-454718a7>ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບເງື່ອນໄຂ</p></div>" : "<!---->") + "</div> <div class=\"modal-actions\" data-v-454718a7><button type=\"button\" class=\"btn btn-secondary\" data-v-454718a7>\n            ຍົກເລີກ\n          </button> <button type=\"button\" class=\"btn btn-primary\" data-v-454718a7>" + _vm._ssrEscape("\n            ຢືນຢັນການເລືອກ (" + _vm._s(_vm.tempSelectedInvoices.length) + ")\n          ") + "</button></div>")], 2)], 2)]) : _vm._e(), _vm._ssrNode(" "), _c('settlement-audit-dialog', {
    attrs: {
      "visible": _vm.showAuditDialog,
      "settlement-id": _vm.form.id,
      "settlement-info": _vm.settlementInfoForAudit
    },
    on: {
      "close": _vm.closeAuditDialog
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue?vue&type=template&id=454718a7&scoped=true&

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

// EXTERNAL MODULE: ./components/accounting/ap/settlement/audit/index.vue + 3 modules
var audit = __webpack_require__(588);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/index.vue?vue&type=script&lang=js&














/* harmony default export */ var settlementvue_type_script_lang_js_ = ({
  name: 'SettlementDialog',
  components: {
    SettlementAuditDialog: audit["default"]
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
    }
  },
  data() {
    return {
      form: {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        paymentAmount: 0,
        baseAmount: 0,
        paymentMethodId: '',
        bankAccountId: '',
        reference: '',
        description: '',
        note: '',
        status: 'draft',
        makerId: null,
        checkerId: null,
        approvalNote: ''
      },
      selectedInvoices: [],
      tempSelectedInvoices: [],
      paymentMethods: [],
      bankAccounts: [],
      errors: {},
      isSubmitting: false,
      showInvoiceSelector: false,
      showAuditDialog: false,
      // Add audit dialog visibility state
      invoiceSearchTerm: '',
      selectedVendorFilter: '',
      filteredInvoices: []
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    isEditMode() {
      return !!(this.settlement && this.settlement.id);
    },
    canModify() {
      return ['draft', 'pending'].includes(this.form.status);
    },
    canModifyStatus() {
      // Only allow status changes if user has appropriate permissions
      return this.user.canManageSettlements || this.form.makerId === this.user.id;
    },
    canModifyAllocations() {
      return this.canModify;
    },
    canApprove() {
      return this.user.canApproveSettlements && this.form.status === 'pending';
    },
    canComplete() {
      return this.user.canCompleteSettlements && ['pending', 'approved'].includes(this.form.status);
    },
    showApprovalSection() {
      return this.isEditMode && ['pending', 'approved', 'completed'].includes(this.form.status);
    },
    totalAllocated() {
      return this.selectedInvoices.reduce((sum, invoice) => {
        return sum + parseFloat(invoice.settledAmount || 0);
      }, 0);
    },
    unallocatedAmount() {
      return parseFloat(this.form.baseAmount) - this.totalAllocated;
    },
    availableVendors() {
      const vendors = [];
      const vendorMap = new Map();
      this.outstandingInvoices.forEach(invoice => {
        if (invoice.vendor && !vendorMap.has(invoice.vendor.id)) {
          vendorMap.set(invoice.vendor.id, invoice.vendor);
          vendors.push(invoice.vendor);
        }
      });
      return vendors;
    },
    makerName() {
      var _this$settlement;
      if (this.isEditMode && (_this$settlement = this.settlement) !== null && _this$settlement !== void 0 && _this$settlement.maker) {
        console.info(`user ${JSON.stringify(this.settlement.maker)}`);
        return this.settlement.maker.cus_name || this.settlement.maker.username;
      }
      return this.user.cus_name || this.user.username;
    },
    checkerName() {
      var _this$settlement2;
      if (this.isEditMode && (_this$settlement2 = this.settlement) !== null && _this$settlement2 !== void 0 && _this$settlement2.checker) {
        return this.settlement.checker.fullName || this.settlement.checker.username;
      }
      return '';
    },
    // Settlement info formatted for audit dialog
    settlementInfoForAudit() {
      if (!this.isEditMode) return null;
      return {
        settlementId: this.form.id,
        paymentAmount: this.form.paymentAmount,
        baseAmount: this.form.baseAmount,
        settlementDate: this.form.settlementDate,
        status: this.form.status,
        reference: this.form.reference,
        description: this.form.description,
        note: this.form.note
      };
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeDialog();
      }
    },
    settlement: {
      handler(newVal) {
        if (newVal) {
          this.loadSettlementData(newVal);
        }
      },
      immediate: true
    }
  },
  async mounted() {
    await this.loadReferenceData();
  },
  methods: {
    async initializeDialog() {
      await this.loadReferenceData();
      if (this.settlement) {
        this.loadSettlementData(this.settlement);
      } else {
        this.resetForm();
      }
      this.filteredInvoices = [...this.outstandingInvoices];
    },
    async loadReferenceData() {
      try {
        await Promise.all([this.loadPaymentMethods(), this.loadBankAccounts()]);
      } catch (error) {
        console.error('Error loading reference data:', error);
      }
    },
    async loadPaymentMethods() {
      try {
        const {
          data
        } = await this.$axios.get('/api/paymentMethod/find');
        this.paymentMethods = data || [];
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.paymentMethods = [];
      }
    },
    async loadBankAccounts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/bank_account/find');
        this.bankAccounts = data || [];
      } catch (error) {
        console.error('Error loading bank accounts:', error);
        this.bankAccounts = [];
      }
    },
    loadSettlementData(settlement) {
      this.form = {
        id: settlement.id,
        settlementDate: settlement.settlementDate || new Date().toISOString().split('T')[0],
        paymentAmount: parseFloat(settlement.paymentAmount || 0),
        baseAmount: parseFloat(settlement.baseAmount || 0),
        paymentMethodId: settlement.paymentMethodId || '',
        bankAccountId: settlement.bankAccountId || '',
        reference: settlement.reference || '',
        description: settlement.description || '',
        note: settlement.note || '',
        status: settlement.status || 'draft',
        makerId: settlement.makerId || this.user.id,
        checkerId: settlement.checkerId || null,
        approvalNote: settlement.approvalNote || ''
      };

      // Load existing invoice allocations
      if (settlement.invoiceSettlements) {
        this.selectedInvoices = settlement.invoiceSettlements.map(allocation => ({
          id: allocation.invoice.id,
          invoiceNumber: allocation.invoice.invoiceNumber,
          vendor: allocation.invoice.vendor,
          outstandingAmount: parseFloat(allocation.invoice.outstandingAmount || 0),
          settledAmount: parseFloat(allocation.amount || 0) // Using 'amount' from InvoiceSettlementLine model
        }));
      }
    },

    resetForm() {
      this.form = {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        paymentAmount: 0,
        baseAmount: 0,
        paymentMethodId: '',
        bankAccountId: '',
        reference: '',
        description: '',
        note: '',
        status: 'draft',
        makerId: this.user.id,
        checkerId: null,
        approvalNote: ''
      };
      this.selectedInvoices = [];
      this.errors = {};
    },
    calculateBaseAmount() {
      // If payment amount changes, update base amount
      // This is a simplified calculation - you may want to add currency conversion logic
      if (this.form.paymentAmount) {
        this.form.baseAmount = this.form.paymentAmount;
      }
    },
    calculateUnallocatedAmount() {
      // Trigger reactive updates
      this.$forceUpdate();
    },
    calculateTotals() {
      // This will trigger the computed properties to recalculate
      this.$forceUpdate();
    },
    // Audit Dialog Methods
    openAuditDialog() {
      if (!this.isEditMode) {
        var _this$$toast;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.warning('ບໍ່ສາມາດເບິ່ງປະຫວັດການດຳເນີນງານໄດ້ ເນື່ອງຈາກຍັງບໍ່ໄດ້ບັນທຶກການຊຳລະ');
        return;
      }
      this.showAuditDialog = true;
    },
    closeAuditDialog() {
      this.showAuditDialog = false;
    },
    // Invoice Selection Methods
    filterInvoices() {
      let filtered = [...this.outstandingInvoices];

      // Filter by search term
      if (this.invoiceSearchTerm) {
        const search = this.invoiceSearchTerm.toLowerCase();
        filtered = filtered.filter(invoice => {
          var _invoice$vendor, _invoice$vendor$name;
          return invoice.invoiceNumber.toLowerCase().includes(search) || ((_invoice$vendor = invoice.vendor) === null || _invoice$vendor === void 0 ? void 0 : (_invoice$vendor$name = _invoice$vendor.name) === null || _invoice$vendor$name === void 0 ? void 0 : _invoice$vendor$name.toLowerCase().includes(search));
        });
      }

      // Filter by vendor
      if (this.selectedVendorFilter) {
        filtered = filtered.filter(invoice => {
          var _invoice$vendor2;
          return ((_invoice$vendor2 = invoice.vendor) === null || _invoice$vendor2 === void 0 ? void 0 : _invoice$vendor2.id) === this.selectedVendorFilter;
        });
      }
      this.filteredInvoices = filtered;
    },
    toggleInvoiceSelection(invoice, event) {
      const isChecked = event.target.checked;
      if (isChecked) {
        if (!this.tempSelectedInvoices.find(inv => inv.id === invoice.id)) {
          this.tempSelectedInvoices.push({
            ...invoice,
            settledAmount: parseFloat(invoice.outstandingAmount || 0)
          });
        }
      } else {
        this.tempSelectedInvoices = this.tempSelectedInvoices.filter(inv => inv.id !== invoice.id);
      }
    },
    isInvoiceSelected(invoiceId) {
      return this.tempSelectedInvoices.some(inv => inv.id === invoiceId);
    },
    confirmInvoiceSelection() {
      try {
        // Add new selections to existing ones (avoid duplicates)
        this.tempSelectedInvoices.forEach(tempInvoice => {
          if (!this.selectedInvoices.find(inv => inv.id === tempInvoice.id)) {
            this.selectedInvoices.push(tempInvoice);
          }
        });
        this.closeInvoiceSelector();
        this.calculateTotals();
      } catch (error) {
        console.error('Error in confirmInvoiceSelection:', error);
      }
    },
    removeInvoice(index) {
      this.selectedInvoices.splice(index, 1);
      this.calculateTotals();
    },
    closeInvoiceSelector() {
      this.showInvoiceSelector = false;
      this.tempSelectedInvoices = [];
      this.invoiceSearchTerm = '';
      this.selectedVendorFilter = '';
      this.filteredInvoices = [...this.outstandingInvoices];
    },
    // Form Validation
    validateForm() {
      this.errors = {};
      if (!this.form.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີຊຳລະ';
      }
      if (!this.form.paymentAmount || this.form.paymentAmount <= 0) {
        this.errors.paymentAmount = 'ກະລຸນາໃສ່ຈຳນວນເງິນຊຳລະທີ່ຖືກຕ້ອງ';
      }
      if (!this.form.baseAmount || this.form.baseAmount <= 0) {
        this.errors.baseAmount = 'ກະລຸນາໃສ່ຈຳນວນເງິນພື້ນຖານທີ່ຖືກຕ້ອງ';
      }
      if (!this.form.paymentMethodId) {
        this.errors.paymentMethodId = 'ກະລຸນາເລືອກວິທີການຊຳລະ';
      }

      // Validate reference length
      if (this.form.reference && this.form.reference.length > 100) {
        this.errors.reference = 'ຫມາຍເລກອ້າງອີງຍາວເກີນ 100 ຕົວອັກສອນ';
      }

      // Validate allocations don't exceed payment amount
      if (this.totalAllocated > this.form.baseAmount) {
        this.errors.allocation = 'ຈຳນວນຈັດສັນເກີນຈຳນວນເງິນຊຳລະ';
      }
      return Object.keys(this.errors).length === 0;
    },
    // Form Submission
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      this.isSubmitting = true;
      try {
        const formData = {
          ...this.form,
          makerId: this.form.makerId || this.user.id,
          invoiceAllocations: this.selectedInvoices.map(invoice => ({
            invoiceId: invoice.id,
            amount: parseFloat(invoice.settledAmount || 0) // Using 'amount' field from model
          }))
        };

        this.$emit('save', formData);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        this.isSubmitting = false;
      }
    },
    // Settlement Actions
    async approveSettlement() {
      if (!this.canApprove) return;
      this.isSubmitting = true;
      try {
        const approvalData = {
          id: this.form.id,
          status: 'approved',
          checkerId: this.user.id,
          approvalNote: this.form.approvalNote
        };
        this.$emit('approve', approvalData);
      } catch (error) {
        console.error('Error approving settlement:', error);
      } finally {
        this.isSubmitting = false;
      }
    },
    async completeSettlement() {
      if (!this.canComplete) return;
      this.isSubmitting = true;
      try {
        const completionData = {
          id: this.form.id,
          status: 'completed'
        };
        this.$emit('complete', completionData);
      } catch (error) {
        console.error('Error completing settlement:', error);
      } finally {
        this.isSubmitting = false;
      }
    },
    // Dialog Controls
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    // Utility Methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('en-GB');
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ap_settlementvue_type_script_lang_js_ = (settlementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(649)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ap_settlementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "454718a7",
  "6a236dc5"
  
)

/* harmony default export */ var settlement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_723a8a9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(761);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_723a8a9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_723a8a9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_723a8a9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_723a8a9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-id[data-v-723a8a9c]{color:#333;font-family:monospace;font-weight:600}.ap-settlement-container[data-v-723a8a9c]{margin:0 auto;max-width:1400px;padding:20px}.header-section[data-v-723a8a9c]{align-items:center;display:flex;justify-content:space-between;margin-bottom:30px}.header-actions[data-v-723a8a9c]{align-items:center;display:flex;gap:12px}.page-title[data-v-723a8a9c]{color:#333;font-size:28px;font-weight:600;margin:0}.summary-cards[data-v-723a8a9c]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:30px}.summary-card[data-v-723a8a9c]{border:1px solid #e3e6f0;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1)}.card-body[data-v-723a8a9c]{padding:20px;text-align:center}.card-title[data-v-723a8a9c]{color:#666;font-size:14px;font-weight:600;margin-bottom:10px;text-transform:uppercase}.card-value[data-v-723a8a9c]{color:#333;font-size:24px;font-weight:700;margin:0}.card-value.pending[data-v-723a8a9c]{color:#f39c12}.card-value.approved[data-v-723a8a9c]{color:#27ae60}.card-value.completed[data-v-723a8a9c]{color:#3498db}.card-value.cancelled[data-v-723a8a9c]{color:#e74c3c}.card-value.allocated[data-v-723a8a9c]{color:#9b59b6}.filters-section[data-v-723a8a9c]{background:#f8f9fa;border-radius:8px;margin-bottom:20px;padding:20px}.row[data-v-723a8a9c]{display:flex;flex-wrap:wrap;margin:-10px}.col-md-1[data-v-723a8a9c]{flex:0 0 8.333%;max-width:8.333%;padding:10px}.col-md-2[data-v-723a8a9c]{flex:0 0 16.666%;max-width:16.666%;padding:10px}.col-md-3[data-v-723a8a9c]{flex:0 0 25%;max-width:25%;padding:10px}.col-md-6[data-v-723a8a9c]{flex:0 0 50%;max-width:50%;padding:10px}.form-control[data-v-723a8a9c]{border:1px solid #ddd;border-radius:4px;font-size:14px;padding:8px 12px;width:100%}.btn[data-v-723a8a9c]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-723a8a9c]{background:#007bff;color:#fff}.btn-secondary[data-v-723a8a9c]{background:#6c757d;color:#fff}.btn-info[data-v-723a8a9c]{background:#17a2b8;color:#fff}.btn-block[data-v-723a8a9c]{justify-content:center;width:100%}.btn[data-v-723a8a9c]:hover{opacity:.9;transform:translateY(-1px)}.table-container[data-v-723a8a9c]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden;position:relative}.loading-overlay[data-v-723a8a9c]{align-items:center;background:hsla(0,0%,100%,.8);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:10}.spinner[data-v-723a8a9c]{animation:spin-723a8a9c 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:40px;width:40px}@keyframes spin-723a8a9c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.table[data-v-723a8a9c]{border-collapse:collapse;margin:0;width:100%}.table th[data-v-723a8a9c]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-weight:600;white-space:nowrap}.table td[data-v-723a8a9c],.table th[data-v-723a8a9c]{font-size:13px;padding:15px 10px}.table td[data-v-723a8a9c]{border-top:1px solid #dee2e6;vertical-align:middle}.table-striped tbody tr[data-v-723a8a9c]:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.amount[data-v-723a8a9c]{color:#333;font-weight:600}.status-badge[data-v-723a8a9c]{align-items:center;border:1px solid transparent;border-radius:20px;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:6px 12px;text-transform:uppercase}.status-badge.draft[data-v-723a8a9c]{background:#f8f9fa;border-color:#dee2e6;color:#6c757d}.status-badge.pending[data-v-723a8a9c]{background:#fff3cd;border-color:#ffeaa7;color:#856404}.status-badge.approved[data-v-723a8a9c]{background:#d4edda;border-color:#c3e6cb;color:#155724}.status-badge.completed[data-v-723a8a9c]{background:#d1ecf1;border-color:#bee5eb;color:#0c5460}.status-badge.cancelled[data-v-723a8a9c]{background:#f8d7da;border-color:#f5c6cb;color:#721c24}.action-buttons[data-v-723a8a9c]{flex-wrap:wrap;gap:4px}.action-buttons[data-v-723a8a9c],.btn-sm[data-v-723a8a9c]{display:flex;justify-content:center}.btn-sm[data-v-723a8a9c]{align-items:center;border:none;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;font-size:11px;height:28px;padding:0;transition:all .2s ease;width:28px}.btn-sm[data-v-723a8a9c]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-2px)}.btn-sm.btn-info[data-v-723a8a9c]{background:#17a2b8;color:#fff}.btn-sm.btn-warning[data-v-723a8a9c]{background:#ffc107;color:#212529}.btn-sm.btn-success[data-v-723a8a9c]{background:#28a745;color:#fff}.btn-sm.btn-primary[data-v-723a8a9c]{background:#007bff;color:#fff}.btn-sm.btn-dark[data-v-723a8a9c]{background:#343a40;color:#fff}.no-data[data-v-723a8a9c]{color:#666;padding:60px 20px;text-align:center}.no-data i[data-v-723a8a9c]{font-size:48px;margin-bottom:15px;opacity:.5}.pagination-nav[data-v-723a8a9c]{display:flex;justify-content:center;margin-top:20px}.pagination[data-v-723a8a9c]{display:flex;list-style:none;margin:0;padding:0}.page-item[data-v-723a8a9c]{margin:0 2px}.page-link[data-v-723a8a9c]{background:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;padding:8px 12px;-webkit-text-decoration:none;text-decoration:none}.page-link[data-v-723a8a9c]:hover{background:#e9ecef}.page-item.active .page-link[data-v-723a8a9c]{background:#007bff;border-color:#007bff;color:#fff}.page-item.disabled .page-link[data-v-723a8a9c]{background:#fff;color:#6c757d;cursor:not-allowed}.modal-overlay[data-v-723a8a9c]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1050}.detail-modal[data-v-723a8a9c],.outstanding-modal[data-v-723a8a9c]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:80vh;overflow:hidden;width:100%}.detail-modal[data-v-723a8a9c]{max-width:600px}.outstanding-modal[data-v-723a8a9c]{max-width:900px}.modal-header[data-v-723a8a9c]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.modal-header h4[data-v-723a8a9c]{color:#333;margin:0}.close-btn[data-v-723a8a9c]{background:none;border:none;color:#666;cursor:pointer;font-size:18px;padding:5px}.close-btn[data-v-723a8a9c]:hover{color:#333}.modal-body[data-v-723a8a9c]{flex:1;overflow-y:auto;padding:20px}.loading-state[data-v-723a8a9c]{align-items:center;color:#666;justify-content:center;padding:40px}.detail-content[data-v-723a8a9c],.loading-state[data-v-723a8a9c]{display:flex;flex-direction:column}.detail-content[data-v-723a8a9c]{gap:15px}.detail-row[data-v-723a8a9c]{align-items:flex-start;border-bottom:1px solid #f0f0f0;display:flex;padding:10px 0}.detail-row[data-v-723a8a9c]:last-child{border-bottom:none}.detail-row label[data-v-723a8a9c]{color:#333;font-size:14px;font-weight:600;margin-right:15px;min-width:140px}.detail-row span[data-v-723a8a9c]{color:#666;flex:1;font-size:14px}.allocations-section[data-v-723a8a9c]{border-top:2px solid #e9ecef;margin-top:20px;padding-top:20px}.allocations-section h5[data-v-723a8a9c]{color:#333;margin-bottom:15px}.outstanding-filters[data-v-723a8a9c]{background:#f8f9fa;border-radius:6px;margin-bottom:20px;padding:15px}.outstanding-table[data-v-723a8a9c]{max-height:400px;overflow-y:auto}.table-sm td[data-v-723a8a9c],.table-sm th[data-v-723a8a9c]{font-size:12px;padding:8px}@media (max-width:768px){.summary-cards[data-v-723a8a9c]{grid-template-columns:repeat(2,1fr)}.table-container[data-v-723a8a9c]{overflow-x:auto}.table[data-v-723a8a9c]{min-width:900px}.row[data-v-723a8a9c]{flex-direction:column}.col-md-1[data-v-723a8a9c],.col-md-2[data-v-723a8a9c],.col-md-3[data-v-723a8a9c],.col-md-6[data-v-723a8a9c]{flex:1;margin-bottom:10px;max-width:100%}.detail-row[data-v-723a8a9c]{flex-direction:column;gap:5px}.detail-row label[data-v-723a8a9c]{margin-right:0;min-width:auto}}@media (max-width:480px){.summary-cards[data-v-723a8a9c]{grid-template-columns:1fr}.header-section[data-v-723a8a9c]{flex-direction:column;gap:15px;text-align:center}.action-buttons[data-v-723a8a9c]{justify-content:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map