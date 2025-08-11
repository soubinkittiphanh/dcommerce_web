exports.ids = [171,58,59,60,61,62,63,65];
exports.modules = {

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvance/index.vue?vue&type=template&id=e13c068e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "money-advance-container"
  }, [_vm._ssrNode("<div class=\"header-section\" data-v-e13c068e><h1 class=\"page-title\" data-v-e13c068e>ອອກລາຍຈ່າຍ</h1> <div class=\"header-actions\" data-v-e13c068e><button class=\"btn btn-outline\" data-v-e13c068e><i class=\"fas fa-chart-line\" data-v-e13c068e></i> ລາຍງານປະຫວັດ\n      </button> <button class=\"btn btn-primary\" data-v-e13c068e><i class=\"fas fa-plus\" data-v-e13c068e></i> ລົງບັນຊີລາຍຈ່າຍ\n      </button></div></div> <div class=\"summary-cards\" data-v-e13c068e><div class=\"card summary-card\" data-v-e13c068e><div class=\"card-body\" data-v-e13c068e><h5 class=\"card-title\" data-v-e13c068e>ຈນ ລາຍຈ່າຍ</h5> <p class=\"card-value\" data-v-e13c068e>" + _vm._ssrEscape(_vm._s(_vm.dashboard.counts.total)) + "</p></div></div> <div class=\"card summary-card\" data-v-e13c068e><div class=\"card-body\" data-v-e13c068e><h5 class=\"card-title\" data-v-e13c068e>ຄ້າງອະນຸມັດ</h5> <p class=\"card-value pending\" data-v-e13c068e>" + _vm._ssrEscape(_vm._s(_vm.dashboard.counts.pending)) + "</p></div></div> <div class=\"card summary-card\" data-v-e13c068e><div class=\"card-body\" data-v-e13c068e><h5 class=\"card-title\" data-v-e13c068e>ອະນຸມັດແລ້ວ</h5> <p class=\"card-value approved\" data-v-e13c068e>" + _vm._ssrEscape(_vm._s(_vm.dashboard.counts.approved)) + "</p></div></div> <div class=\"card summary-card\" data-v-e13c068e><div class=\"card-body\" data-v-e13c068e><h5 class=\"card-title\" data-v-e13c068e>ຊຳລະແລ້ວ</h5> <p class=\"card-value settled\" data-v-e13c068e>" + _vm._ssrEscape(_vm._s(_vm.dashboard.counts.settled)) + "</p></div></div> <div class=\"card summary-card\" data-v-e13c068e><div class=\"card-body\" data-v-e13c068e><h5 class=\"card-title\" data-v-e13c068e>ລວມຍອດທັງໝົດ</h5> <p class=\"card-value\" data-v-e13c068e>" + _vm._ssrEscape("\n          " + _vm._s(_vm.formatCurrency(_vm.dashboard.amounts.total)) + "\n        ") + "</p></div></div></div> "), _vm._ssrNode("<div class=\"filters-section\" data-v-e13c068e>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-e13c068e>", "</div>", [_vm._ssrNode("<div class=\"col-md-2\" data-v-e13c068e>", "</div>", [_c('select', {
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
      "value": "pending"
    }
  }, [_vm._v("ຄ້າງອະນຸມັດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("ອະນຸມັດແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settled"
    }
  }, [_vm._v("ຊຳລະແລ້ວ")])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3\" data-v-e13c068e>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.makerId,
      expression: "filters.makerId"
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
        _vm.$set(_vm.filters, "makerId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.fetchData]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ຈາກຜູ້ໃຊ້ງານທັງໝົດ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n            " + _vm._s(user.cus_name) + "\n          ")]);
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3\" data-v-e13c068e>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.ministryId,
      expression: "filters.ministryId"
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
        _vm.$set(_vm.filters, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.fetchData]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ຈາກກະຊວງທັງໝົດ")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n            " + _vm._s(ministry.name) + "\n          ")]);
  })], 2)]), _vm._ssrNode(" <div class=\"col-md-2\" data-v-e13c068e><input type=\"text\" placeholder=\"ຄົ້ນຫາ ດ້ວຍຈຸດປະສົງ...\"" + _vm._ssrAttr("value", _vm.searchTerm) + " class=\"form-control\" data-v-e13c068e></div> <div class=\"col-md-2\" data-v-e13c068e><button class=\"btn btn-secondary btn-block\" data-v-e13c068e><i class=\"fas fa-undo\" data-v-e13c068e></i> ຄ່າເລີ່ມຕົ້ນ\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"table-container\" data-v-e13c068e>" + (_vm.loading ? "<div class=\"loading-overlay\" data-v-e13c068e><div class=\"spinner\" data-v-e13c068e></div></div>" : "<!---->") + " <table class=\"table table-striped\" data-v-e13c068e><thead data-v-e13c068e><tr data-v-e13c068e><th data-v-e13c068e>ID</th> <th data-v-e13c068e>ຜູ້ລົງບັນຊີ</th> <th data-v-e13c068e>ກະຊວງ</th> <th data-v-e13c068e>ຈຳນວນເງິນ</th> <th data-v-e13c068e>ຈຸດປະສົງ</th> <th data-v-e13c068e>ບັນຊີທະນາຄານ</th> <th data-v-e13c068e>ສະຖານະ</th> <th data-v-e13c068e>ວັນຄົບຮອບຄວນຊຳລະ</th> <th data-v-e13c068e>ວັນທີລົງຊຳລະ</th> <th data-v-e13c068e>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-e13c068e>" + _vm._ssrList(_vm.advances, function (advance) {
    return "<tr data-v-e13c068e><td data-v-e13c068e>" + _vm._ssrEscape(_vm._s(advance.id)) + "</td> <td data-v-e13c068e>" + _vm._ssrEscape(_vm._s(advance.maker ? advance.maker.cus_name : 'N/A')) + "</td> <td data-v-e13c068e>" + (advance.ministry ? "<div class=\"ministry-info\" data-v-e13c068e><div class=\"ministry-name\" data-v-e13c068e>" + _vm._ssrEscape(_vm._s(advance.ministry.name)) + "</div> " + (advance.ministry.ministryCode ? "<div class=\"ministry-code\" data-v-e13c068e>" + _vm._ssrEscape("\n                " + _vm._s(advance.ministry.ministryCode + ' ' + advance.ministry.ministryName) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<span class=\"no-ministry\" data-v-e13c068e>ບໍ່ໄດ້ລະບຸກະຊວງ</span>") + "</td> <td data-v-e13c068e><span class=\"amount\" data-v-e13c068e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatCurrency(advance.amount)) + "\n              ") + (advance.currency ? "<small data-v-e13c068e>" + _vm._ssrEscape(_vm._s(advance.currency.code)) + "</small>" : "<!---->") + "</span></td> <td data-v-e13c068e>" + _vm._ssrEscape(_vm._s(advance.purpose || 'N/A')) + "</td> <td data-v-e13c068e>" + (advance.bankAccount ? "<div class=\"bank-account-info\" data-v-e13c068e><div class=\"bank-name\" data-v-e13c068e>" + _vm._ssrEscape(_vm._s(advance.bankAccount.bankName)) + "</div> <div class=\"account-number\" data-v-e13c068e>" + _vm._ssrEscape("\n                " + _vm._s(advance.bankAccount.accountNumber) + "\n              ") + "</div></div>" : "<span class=\"no-bank-account\" data-v-e13c068e>No Bank Account</span>") + "</td> <td data-v-e13c068e><span" + _vm._ssrClass(null, ['status-badge', advance.status]) + " data-v-e13c068e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusInLao(advance.status)) + "\n            ") + "</span></td> <td data-v-e13c068e>" + _vm._ssrEscape(_vm._s(_vm.formatDate(advance.dueDate))) + "</td> <td data-v-e13c068e>" + _vm._ssrEscape(_vm._s(_vm.formatDate(advance.bookingDate))) + "</td> <td data-v-e13c068e><div class=\"action-buttons\" data-v-e13c068e><button title=\"View Details\" class=\"btn btn-sm btn-info\" data-v-e13c068e><i class=\"fas fa-eye\" data-v-e13c068e></i></button> <button title=\"Edit\" class=\"btn btn-sm btn-warning\" data-v-e13c068e><i class=\"fas fa-edit\" data-v-e13c068e></i></button> " + (advance.status === 'pending' ? "<button title=\"Approve\" class=\"btn btn-sm btn-success\" data-v-e13c068e><i class=\"fas fa-check\" data-v-e13c068e></i></button>" : "<!---->") + " " + (advance.status === 'approved' ? "<button title=\"Create Settlement\" class=\"btn btn-sm btn-success\" data-v-e13c068e><i class=\"fas fa-file-invoice-dollar\" data-v-e13c068e></i></button>" : "<!---->") + " <button title=\"Print\" class=\"btn btn-sm btn-danger\" data-v-e13c068e><i class=\"fas fa-print\" data-v-e13c068e></i></button></div></td></tr>";
  }) + "</tbody></table> " + (!_vm.loading && _vm.advances.length === 0 ? "<div class=\"no-data\" data-v-e13c068e><i class=\"fas fa-inbox\" data-v-e13c068e></i> <p data-v-e13c068e>No money advances found</p></div>" : "<!---->") + "</div> " + (_vm.pagination.totalPages > 1 ? "<nav class=\"pagination-nav\" data-v-e13c068e><ul class=\"pagination\" data-v-e13c068e><li" + _vm._ssrClass("page-item", {
    disabled: _vm.pagination.currentPage === 1
  }) + " data-v-e13c068e><button class=\"page-link\" data-v-e13c068e>\n          Previous\n        </button></li> " + _vm._ssrList(_vm.paginationPages, function (page) {
    return "<li" + _vm._ssrClass("page-item", {
      active: page === _vm.pagination.currentPage
    }) + " data-v-e13c068e><button class=\"page-link\" data-v-e13c068e>" + _vm._ssrEscape("\n          " + _vm._s(page) + "\n        ") + "</button></li>";
  }) + " <li" + _vm._ssrClass("page-item", {
    disabled: _vm.pagination.currentPage === _vm.pagination.totalPages
  }) + " data-v-e13c068e><button class=\"page-link\" data-v-e13c068e>\n          Next\n        </button></li></ul></nav>" : "<!---->") + " "), _c('money-advance-dialog', {
    key: _vm.radnomKeyMaintenanceDialog,
    attrs: {
      "show": _vm.showDialog,
      "is-edit": _vm.isEdit,
      "form-data": _vm.form,
      "users": _vm.users,
      "currencies": _vm.currencies,
      "bank-accounts": _vm.bankAccounts,
      "ministries": _vm.ministries,
      "form-loading": _vm.formLoading,
      "saving": _vm.saving
    },
    on: {
      "close": _vm.closeDialog,
      "save": _vm.saveAdvance,
      "currency-changed": _vm.updateSelectedCurrency,
      "bank-account-changed": _vm.updateSelectedBankAccount,
      "ministry-changed": _vm.updateSelectedMinistry,
      "validation-error": _vm.showToast
    }
  }), _vm._ssrNode(" "), _c('money-advance-detail-dialog', {
    attrs: {
      "show": _vm.showDetailDialog,
      "details": _vm.advanceDetails,
      "loading": _vm.detailLoading,
      "status-labels": _vm.statusLabels
    },
    on: {
      "close": _vm.closeDetailDialog,
      "print": _vm.printAdvanceDetails,
      "download": _vm.downloadAdvanceDetails,
      "retry-load": _vm.retryLoadDetails,
      "edit": _vm.handleEditFromDetail,
      "approve": _vm.handleApproveFromDetail,
      "create-settlement": _vm.handleCreateSettlement
    }
  }), _vm._ssrNode(" "), _vm.selectedRecordForAudit && _vm.selectedRecordForAudit.id ? _c('audit-trail-dialog', {
    attrs: {
      "show": _vm.showAuditDialog,
      "record-id": _vm.selectedRecordForAudit.id,
      "record-data": _vm.selectedRecordForAudit,
      "can-restore": _vm.canRestoreRecord
    },
    on: {
      "close": _vm.closeAuditDialog,
      "compare": _vm.handleVersionComparison,
      "restore": _vm.handleVersionRestore,
      "view-full-changes": _vm.handleViewFullChanges,
      "success": _vm.showToast,
      "error": msg => _vm.showToast(msg, 'error')
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.selectedRecordForComparison && _vm.selectedRecordForComparison.id ? _c('version-comparison-dialog', {
    attrs: {
      "show": _vm.showComparisonDialog,
      "record-id": _vm.selectedRecordForComparison.id,
      "record-data": _vm.selectedRecordForComparison,
      "initial-comparison": _vm.comparisonData,
      "can-restore": _vm.canRestoreRecord
    },
    on: {
      "close": _vm.closeComparisonDialog,
      "restore": _vm.handleVersionRestore,
      "success": _vm.showToast,
      "error": msg => _vm.showToast(msg, 'error')
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('audit-reports-dialog', {
    attrs: {
      "show": _vm.showAuditReportsDialog
    },
    on: {
      "close": _vm.closeAuditReportsDialog,
      "success": _vm.showToast,
      "error": msg => _vm.showToast(msg, 'error')
    }
  }), _vm._ssrNode(" "), _vm.showPrintVoucher && _vm.advanceDetails ? _c('VoucherPrintComponent', {
    key: _vm.advanceDetails.id,
    attrs: {
      "voucher-data": _vm.advanceDetails
    },
    on: {
      "close": _vm.closePrintVoucher
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('SettlementDialog', {
    attrs: {
      "visible": _vm.showSettlementDialog,
      "settlement": _vm.settlementData,
      "outstanding-invoices": [],
      "currencies": _vm.currencies,
      "bank-accounts": _vm.bankAccounts,
      "ministries": _vm.ministries,
      "chart-accounts": _vm.chartAccounts,
      "users": _vm.users
    },
    on: {
      "close": _vm.closeSettlementDialog,
      "save": _vm.saveSettlement
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/moneyAdvance/index.vue?vue&type=template&id=e13c068e&scoped=true&

// EXTERNAL MODULE: ./components/MA/paymentDialog/index.vue + 4 modules
var paymentDialog = __webpack_require__(803);

// EXTERNAL MODULE: ./components/MA/paymentDetailDialog/index.vue + 4 modules
var paymentDetailDialog = __webpack_require__(804);

// EXTERNAL MODULE: ./components/MA/paymentVoucher/index.vue + 4 modules
var paymentVoucher = __webpack_require__(805);

// EXTERNAL MODULE: ./components/MA/paymentAuditDialog/index.vue + 4 modules
var paymentAuditDialog = __webpack_require__(806);

// EXTERNAL MODULE: ./components/MA/paymentCompareDialog/index.vue + 4 modules
var paymentCompareDialog = __webpack_require__(807);

// EXTERNAL MODULE: ./components/MA/paymentAuditReportDialog/index.vue + 4 modules
var paymentAuditReportDialog = __webpack_require__(808);

// EXTERNAL MODULE: ./components/MA/settlementDialog/index.vue + 4 modules
var settlementDialog = __webpack_require__(570);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/moneyAdvance/index.vue?vue&type=script&lang=js&
// Import the components



// 🆕 NEW: Import audit components



// 🆕 NEW: Import Settlement Dialog


/* harmony default export */ var moneyAdvancevue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceManagement',
  components: {
    MoneyAdvanceDialog: paymentDialog["default"],
    MoneyAdvanceDetailDialog: paymentDetailDialog["default"],
    VoucherPrintComponent: paymentVoucher["default"],
    // 🆕 NEW: Register audit components
    AuditTrailDialog: paymentAuditDialog["default"],
    VersionComparisonDialog: paymentCompareDialog["default"],
    AuditReportsDialog: paymentAuditReportDialog["default"],
    // 🆕 NEW: Register Settlement Dialog
    SettlementDialog: settlementDialog["default"]
  },
  middleware: 'auths',
  data() {
    return {
      statusFilter: '',
      statusLabels: {
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ',
        cancelled: 'ຍົກເລີກ'
      },
      advances: [],
      dashboard: {
        counts: {
          total: 0,
          pending: 0,
          approved: 0,
          settled: 0
        },
        amounts: {
          total: 0,
          pending: 0
        }
      },
      users: [],
      currencies: [],
      ministries: [],
      bankAccounts: [],
      chartAccounts: [],
      // 🆕 NEW: Chart accounts for settlement
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10
      },
      filters: {
        status: '',
        makerId: '',
        ministryId: ''
      },
      searchTerm: '',
      loading: false,
      saving: false,
      formLoading: false,
      showDialog: false,
      radnomKeyMaintenanceDialog: 1,
      showDetailDialog: false,
      showPrintVoucher: false,
      // 🆕 NEW: Settlement dialog states
      showSettlementDialog: false,
      settlementData: null,
      selectedAdvanceForSettlement: null,
      // 🆕 NEW: Audit dialog states
      showAuditDialog: false,
      showComparisonDialog: false,
      showAuditReportsDialog: false,
      selectedRecordForAudit: null,
      selectedRecordForComparison: null,
      comparisonData: null,
      canRestoreRecord: false,
      isEdit: false,
      selectedAdvance: null,
      advanceDetails: null,
      detailLoading: false,
      form: {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        // 🆕 NEW: Add reason field for audit trail
        reason: ''
      },
      searchTimeout: null
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
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
    // Check user permissions for restore functionality
    this.canRestoreRecord = this.checkRestorePermissions();
  },
  methods: {
    // 🆕 NEW: Check if user can restore records
    checkRestorePermissions() {
      var _this$user, _this$user2, _this$user2$permissio;
      // Add your permission logic here
      return ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.role) === 'admin' || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : (_this$user2$permissio = _this$user2.permissions) === null || _this$user2$permissio === void 0 ? void 0 : _this$user2$permissio.includes('restore_records'));
    },
    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase();
    },
    getStatusOptions() {
      return [{
        value: '',
        label: 'ທຸກສະຖານະ'
      }, {
        value: 'pending',
        label: 'ຄ້າງອະນຸມັດ'
      }, {
        value: 'approved',
        label: 'ອະນຸມັດແລ້ວ'
      }, {
        value: 'settled',
        label: 'ຊຳລະແລ້ວ'
      }];
    },
    async loadInitialData() {
      await Promise.all([this.fetchData(), this.fetchDashboard(), this.fetchUsers(), this.fetchCurrencies(), this.fetchMinistry(), this.fetchBankAccounts(), this.fetchChartAccounts() // 🆕 NEW: Load chart accounts
      ]);
    },

    // [Keep all your existing methods for data fetching, CRUD operations, etc.]
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
        } = await this.$axios.get('/api/money-advances', {
          params
        });
        this.advances = data.data.advances;
        this.pagination = data.data.pagination;
      } catch (error) {
        this.showToast('Error fetching money advances', 'error');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async fetchDashboard() {
      try {
        const params = {};
        if (this.filters.makerId) params.makerId = this.filters.makerId;
        if (this.filters.ministryId) params.ministryId = this.filters.ministryId;
        const {
          data
        } = await this.$axios.get('/api/money-advances/dashboard', {
          params
        });
        this.dashboard = data.data;
      } catch (error) {
        console.error('Error fetching dashboard:', error);
      }
    },
    async fetchUsers() {
      try {
        const {
          data
        } = await this.$axios.get('/api/user/find');
        if (data && data.data) {
          this.users = Array.isArray(data.data) ? data.data : [];
        } else if (Array.isArray(data)) {
          this.users = data;
        } else {
          this.users = [];
        }
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
          this.currencies = Array.isArray(data.data) ? data.data : [];
        } else if (Array.isArray(data)) {
          this.currencies = data;
        } else {
          this.currencies = [];
        }
      } catch (error) {
        console.error('Error fetching currencies:', error);
        this.currencies = [];
        this.showToast('Failed to load currencies', 'error');
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
      } catch (error) {
        console.error('Error fetching ministries:', error);
        this.ministries = [];
        this.showToast('Failed to load ministries', 'error');
      }
    },
    async fetchBankAccounts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/bank_account/find');
        if (data && data.data) {
          this.bankAccounts = Array.isArray(data.data) ? data.data : [];
        } else if (Array.isArray(data)) {
          this.bankAccounts = data;
        } else {
          this.bankAccounts = [];
        }
        this.bankAccounts = this.bankAccounts.filter(account => account.isActive);
      } catch (error) {
        console.error('Error fetching bank accounts:', error);
        this.bankAccounts = [];
      }
    },
    // 🆕 NEW: Fetch chart accounts for settlement
    async fetchChartAccounts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/accountChart/find');
        if (data && data.data) {
          this.chartAccounts = Array.isArray(data.data) ? data.data : [];
        } else if (Array.isArray(data)) {
          this.chartAccounts = data;
        } else {
          this.chartAccounts = [];
        }
      } catch (error) {
        console.error('Error fetching chart accounts:', error);
        this.chartAccounts = [];
        // Chart accounts are optional, so don't show error to user
      }
    },

    // 🆕 NEW: Audit Trail Methods
    viewAuditTrail(advance) {
      this.selectedRecordForAudit = advance;
      this.showAuditDialog = true;
      console.warn(`DATA ${JSON.stringify(this.selectedRecordForAudit)} `);
      console.info(`DATA ${JSON.stringify(this.showAuditDialog)} `);
    },
    closeAuditDialog() {
      this.showAuditDialog = false;
      // Add a small delay to ensure dialog closes before clearing data
      setTimeout(() => {
        this.selectedRecordForAudit = null;
      }, 300);
    },
    handleVersionComparison(comparisonData) {
      this.selectedRecordForComparison = this.selectedRecordForAudit;
      this.comparisonData = comparisonData;
      this.showAuditDialog = false;
      this.showComparisonDialog = true;
    },
    closeComparisonDialog() {
      this.showComparisonDialog = false;
      // Add a small delay to ensure dialog closes before clearing data
      setTimeout(() => {
        this.selectedRecordForComparison = null;
        this.comparisonData = null;
      }, 300);
    },
    async handleVersionRestore(versionData) {
      try {
        const result = await Object(common["i" /* swalConfirm */])(this.$swal, 'ຢືນຢັນການກັບຄືນ', `ທ່ານແນ່ໃຈທີ່ຈະກັບຄືນໄປຫາເວີຊັ່ນນີ້ບໍ່?`, 'question', 'ຍົກເລີກ', 'ກັບຄືນ');
        if (result.isConfirmed) {
          var _this$selectedRecordF, _this$selectedRecordF2;
          const recordId = ((_this$selectedRecordF = this.selectedRecordForAudit) === null || _this$selectedRecordF === void 0 ? void 0 : _this$selectedRecordF.id) || ((_this$selectedRecordF2 = this.selectedRecordForComparison) === null || _this$selectedRecordF2 === void 0 ? void 0 : _this$selectedRecordF2.id);

          // Call restore API endpoint here
          const {
            data
          } = await this.$axios.post(`/api/money-advances/${recordId}/restore`, {
            targetVersion: versionData.version,
            reason: 'Restored via audit trail'
          });
          if (data.success) {
            this.showToast('ກັບຄືນເວີຊັ່ນສຳເລັດ', 'success');
            this.closeAuditDialog();
            this.closeComparisonDialog();
            await this.fetchData(); // Refresh the main list
          } else {
            throw new Error(data.message || 'Restore failed');
          }
        }
      } catch (error) {
        console.error('Error restoring version:', error);
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການກັບຄືນ', 'error');
      }
    },
    handleViewFullChanges(auditEntry) {
      // You can implement a detailed changes view here
      console.log('View full changes for:', auditEntry);
      this.showToast('ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ', 'info');
    },
    openAuditReports() {
      this.showAuditReportsDialog = true;
    },
    closeAuditReportsDialog() {
      this.showAuditReportsDialog = false;
    },
    // 🆕 NEW: Settlement Methods
    async createSettlement(advance) {
      try {
        this.selectedAdvanceForSettlement = advance;
        const settlementDate = new Date().toISOString().split('T')[0]; // Today's date

        // Prepare settlement data with money advance information
        this.settlementData = {
          id: null,
          // New settlement
          amount: advance.amount,
          currencyId: advance.currencyId,
          userId: advance.makerId,
          // Use the advance maker as default user
          ministryId: advance.ministryId || '',
          bankAccountId: advance.bankAccountId || '',
          chartAccountId: '',
          // Leave empty for user to choose
          method: '',
          // Leave empty for user to choose
          settlementDate: settlementDate,
          // 🆕 FIX: Add bookingDate field using settlementDate
          bookingDate: settlementDate,
          notes: `ຊຳລະຄືນ ຈາກ ລາຍຈ່າຍເລກທີ #${advance.id} - ${advance.purpose || 'ບໍ່ໄດ້ລະບຸເນື້ອໃນ'}`,
          moneyAdvanceId: advance.id,
          // 🆕 FIX: Ensure the settlement shows as linked to the money advance
          linkToAdvance: 'true' // This will ensure the radio button shows "ເຊື່ອມຕໍ່ກັບລາຍຈ່າຍລ່ວງໜ້າ"
        };

        console.log('🔗 Creating settlement with money advance link:', {
          advanceId: advance.id,
          linkToAdvance: this.settlementData.linkToAdvance,
          moneyAdvanceId: this.settlementData.moneyAdvanceId,
          settlementDate: this.settlementData.settlementDate,
          bookingDate: this.settlementData.bookingDate
        });

        // Open the settlement dialog
        this.showSettlementDialog = true;
      } catch (error) {
        console.error('Error preparing settlement:', error);
        this.showToast('Error preparing settlement', 'error');
      }
    },
    closeSettlementDialog() {
      this.showSettlementDialog = false;
      this.settlementData = null;
      this.selectedAdvanceForSettlement = null;
    },
    async saveSettlement(settlementData) {
      try {
        var _this$selectedAdvance, _this$user3;
        // Add audit context
        const auditContext = {
          reason: `Settlement created for Money Advance #${(_this$selectedAdvance = this.selectedAdvanceForSettlement) === null || _this$selectedAdvance === void 0 ? void 0 : _this$selectedAdvance.id}`,
          userId: (_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.id
        };

        // 🆕 FIX: Ensure bookingDate is included (use settlementDate if not provided)
        const completeSettlementData = {
          ...settlementData,
          bookingDate: settlementData.bookingDate || settlementData.settlementDate,
          ...auditContext
        };
        console.log('📤 Sending settlement to API:', completeSettlementData);
        const response = await this.$axios.post('/api/settlements', completeSettlementData);
        if (response.data && response.data.success) {
          this.showToast('Settlement created successfully', 'success');
          this.closeSettlementDialog();

          // Refresh the money advances list to update status
          await this.fetchData();
          await this.fetchDashboard();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Failed to create settlement');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving settlement:', error);
        const message = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Error creating settlement';
        this.showToast(message, 'error');
      }
    },
    // Enhanced save method with audit context
    async saveAdvance(formData) {
      this.saving = true;
      try {
        var _this$user4;
        // 🆕 NEW: Add audit context
        const auditContext = {
          reason: formData.reason || (this.isEdit ? 'Updated record' : 'Created new record'),
          userId: (_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.id
        };
        if (this.isEdit) {
          formData.updateUserId = this.user.id;
          await this.$axios.put(`/api/money-advances/${formData.id}`, {
            ...formData,
            ...auditContext
          });
          this.showToast('Money advance updated successfully', 'success');
        } else {
          await this.$axios.post('/api/money-advances', {
            ...formData,
            ...auditContext
          });
          this.showToast('Money advance created successfully', 'success');
        }
        this.closeDialog();
        await this.fetchData();
        await this.fetchDashboard();
      } catch (error) {
        var _error$response2, _error$response2$data;
        const message = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || 'Error saving money advance';
        this.showToast(message, 'error');
        console.error('Save error:', error);
      } finally {
        this.saving = false;
      }
    },
    // Enhanced approve method with audit context
    async approveAdvance(advance) {
      try {
        const result = await Object(common["i" /* swalConfirm */])(this.$swal, 'ຢືນຢັນ ການອະນຸມັດ', `ທ່ານແນ່ໃຈທີ່ຈະອະນຸມັດລາຍການນີ້ແມ່ນບໍ່ ${this.formatCurrency(advance.amount)}?`, 'question', 'ບໍ່', 'ຕົກລົງ');
        if (result.isConfirmed) {
          // 🆕 NEW: Add audit context
          await this.$axios.put(`/api/money-advances/${advance.id}/approve`, {
            checkerId: this.user.id,
            reason: 'Approved by manager'
          });
          this.showToast('Money advance approved successfully', 'success');
          await this.fetchData();
          await this.fetchDashboard();
        }
      } catch (error) {
        console.error('Error approving:', error);
        this.showToast('Error approving money advance', 'error');
      }
    },
    // [Keep all your other existing methods...]
    async openDialog(advance = null) {
      this.isEdit = !!advance;
      this.showDialog = true;
      this.randomKeyMaintenanceDialog = `dialog-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      if (this.users.length === 0 || this.currencies.length === 0 || this.ministries.length === 0) {
        this.formLoading = true;
        await Promise.all([this.users.length === 0 ? this.fetchUsers() : Promise.resolve(), this.currencies.length === 0 ? this.fetchCurrencies() : Promise.resolve(), this.ministries.length === 0 ? this.fetchMinistry() : Promise.resolve(), this.bankAccounts.length === 0 ? this.fetchBankAccounts() : Promise.resolve()]);
        this.formLoading = false;
      }
      if (advance) {
        this.form = {
          id: advance.id,
          amount: advance.amount,
          purpose: advance.purpose || '',
          note: advance.note || '',
          makerId: advance.makerId,
          currencyId: advance.currencyId,
          dueDate: advance.dueDate ? advance.dueDate.split('T')[0] : '',
          bankAccountId: advance.bankAccountId || '',
          ministryId: advance.ministryId || '',
          bookingDate: advance.bookingDate || '',
          exchangeRate: advance.exchangeRate || '',
          reason: '' // Reset reason for each edit
        };
      } else {
        this.resetForm();
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'USD') || this.currencies[0];
          this.form.currencyId = defaultCurrency.id;
        }
      }
    },
    closeDialog() {
      this.showDialog = false;
      this.resetForm();
    },
    resetForm() {
      const today = new Date().toISOString().split('T')[0]; // Get today's date

      this.form = {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: this.user.id,
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        exchangeRate: 1,
        ministryId: '',
        bookingDate: today,
        // ✅ Set to today's date
        reason: ''
      };
    },
    updateSelectedCurrency(currencyId) {
      console.log('Currency changed to:', currencyId);
    },
    updateSelectedBankAccount(bankAccountId) {
      console.log('Bank account changed to:', bankAccountId);
    },
    updateSelectedMinistry(ministryId) {
      console.log('Ministry changed to:', ministryId);
    },
    onFilterChange() {
      this.filters.status = this.statusFilter;
      this.pagination.currentPage = 1;
      this.fetchData();
      this.fetchDashboard();
    },
    async settleAdvance(advance) {
      if (confirm('Mark money advance as settled?')) {
        try {
          await this.$axios.put(`/api/money-advances/${advance.id}/settle`, {
            reason: 'Marked as settled'
          });
          this.showToast('Money advance settled successfully', 'success');
          await this.fetchData();
          await this.fetchDashboard();
        } catch (error) {
          this.showToast('Error settling money advance', 'error');
        }
      }
    },
    async deleteAdvance(advance) {
      if (confirm(`Delete money advance for ${this.formatCurrency(advance.amount)}?`)) {
        try {
          await this.$axios.delete(`/api/money-advances/${advance.id}`, {
            data: {
              reason: 'Deleted by user'
            }
          });
          this.showToast('Money advance deleted successfully', 'success');
          await this.fetchData();
          await this.fetchDashboard();
        } catch (error) {
          this.showToast('Error deleting money advance', 'error');
        }
      }
    },
    async viewDetails(advance) {
      this.selectedAdvance = advance;
      this.showDetailDialog = true;
      try {
        this.detailLoading = true;
        const {
          data
        } = await this.$axios.get(`/api/money-advances/${advance.id}`);
        this.advanceDetails = data.data;
      } catch (error) {
        console.error('Error fetching advance details:', error);
        this.showToast('Error loading advance details', 'error');
      } finally {
        this.detailLoading = false;
      }
    },
    closeDetailDialog() {
      this.showDetailDialog = false;
      this.selectedAdvance = null;
      this.advanceDetails = null;
    },
    closePrintVoucher() {
      this.showPrintVoucher = false;
      setTimeout(() => {
        this.advanceDetails = null;
      }, 100);
    },
    printAdvanceDetails(payment) {
      this.showPrintVoucher = false;
      this.$nextTick(() => {
        this.advanceDetails = payment;
        this.showPrintVoucher = true;
      });
    },
    downloadAdvanceDetails() {
      const details = this.formatAdvanceForDownload();
      const blob = new Blob([details], {
        type: 'text/plain'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `money-advance-${this.advanceDetails.id}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    },
    retryLoadDetails() {
      if (this.selectedAdvance) {
        this.viewDetails(this.selectedAdvance);
      }
    },
    handleEditFromDetail(advance) {
      this.closeDetailDialog();
      this.openDialog(advance);
    },
    handleApproveFromDetail(advance) {
      this.closeDetailDialog();
      this.approveAdvance(advance);
    },
    handleCreateSettlement(advance) {
      this.closeDetailDialog();
      this.createSettlement(advance); // 🆕 UPDATED: Call the new createSettlement method
    },

    formatAdvanceForDownload() {
      var _advance$maker, _advance$ministry, _advance$currency;
      const advance = this.advanceDetails;
      return `
MONEY ADVANCE DETAILS
=====================

ID: ${advance.id}
Maker: ${((_advance$maker = advance.maker) === null || _advance$maker === void 0 ? void 0 : _advance$maker.cus_name) || 'N/A'}
Ministry: ${((_advance$ministry = advance.ministry) === null || _advance$ministry === void 0 ? void 0 : _advance$ministry.name) || 'N/A'}
Amount: ${this.formatCurrency(advance.amount)} ${((_advance$currency = advance.currency) === null || _advance$currency === void 0 ? void 0 : _advance$currency.code) || ''}
Purpose: ${advance.purpose || 'N/A'}
Status: ${advance.status.toUpperCase()}
Due Date: ${this.formatDate(advance.dueDate)}
Created Date: ${this.formatDate(advance.createdAt)}
Updated Date: ${this.formatDate(advance.updatedAt)}

${advance.bankAccount ? `Bank Account: ${advance.bankAccount.bankName} - ${advance.bankAccount.accountNumber}` : 'No Bank Account'}

Notes: ${advance.note || 'No notes provided'}

${advance.checker ? `Checker: ${advance.checker.cus_name}` : ''}
${advance.approvedAt ? `Approved At: ${this.formatDate(advance.approvedAt)}` : ''}
${advance.settledAt ? `Settled At: ${this.formatDate(advance.settledAt)}` : ''}

Generated on: ${new Date().toLocaleString()}
      `.trim();
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
        makerId: '',
        ministryId: ''
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
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString();
    },
    getStatusClass(status) {
      const classes = {
        pending: 'warning',
        approved: 'success',
        settled: 'primary'
      };
      return classes[status] || 'secondary';
    },
    getStatusIcon(status) {
      const icons = {
        pending: 'fa-clock',
        approved: 'fa-check-circle',
        settled: 'fa-money-bill-wave'
      };
      return icons[status] || 'fa-question-circle';
    },
    getHistoryIcon(action) {
      const icons = {
        created: 'fa-plus',
        updated: 'fa-edit',
        approved: 'fa-check',
        settled: 'fa-money-bill',
        deleted: 'fa-trash'
      };
      return icons[action] || 'fa-history';
    },
    formatDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
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
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/moneyAdvance/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_moneyAdvancevue_type_script_lang_js_ = (moneyAdvancevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/moneyAdvance/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(880)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_moneyAdvancevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e13c068e",
  "5a581034"
  
)

/* harmony default export */ var moneyAdvance = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(538);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0f3044aa", content, true, context)
};

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(616);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1716ccc8", content, true, context)
};

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(618);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5422c78c", content, true, context)
};

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(620);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("fb73d6dc", content, true, context)
};

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(622);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("683701e4", content, true, context)
};

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(624);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3bcd7bf8", content, true, context)
};

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(626);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("9673ac5e", content, true, context)
};

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 538:
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

/***/ 570:
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
  
  var style0 = __webpack_require__(537)
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

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(531);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-51177b14]{align-items:center;animation:fadeIn-51177b14 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-51177b14{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-51177b14]{animation:slideIn-51177b14 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:700px;overflow:hidden;width:95%}@keyframes slideIn-51177b14{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-51177b14]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-51177b14]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-51177b14]{font-size:20px;opacity:.9}.modal-title[data-v-51177b14]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-51177b14]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-51177b14]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-51177b14]{max-height:60vh;overflow-y:auto;padding:24px}.form-loading[data-v-51177b14]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-51177b14]{animation:spin-51177b14 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-51177b14{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid[data-v-51177b14]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-51177b14]{margin-bottom:0}.form-group.full-width[data-v-51177b14]{grid-column:1/-1}.form-label[data-v-51177b14]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-51177b14]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-51177b14]{color:#6b7280;font-size:12px}.form-control[data-v-51177b14]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-51177b14]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.input-group[data-v-51177b14]{border-radius:8px;display:flex;overflow:hidden}.input-group .form-control[data-v-51177b14]{border-radius:0;border-right:none}.input-group-append[data-v-51177b14]{display:flex}.input-group-text[data-v-51177b14]{background:#f8f9fa;border:2px solid #e5e7eb;border-left:none;color:#6b7280;font-size:14px;font-weight:600;padding:12px 16px}.custom-select-wrapper[data-v-51177b14]{position:relative}.custom-select[data-v-51177b14]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-51177b14]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.field-hint[data-v-51177b14]{align-items:center;display:flex;font-size:12px;gap:6px;justify-content:space-between;margin-top:6px}.field-hint.error[data-v-51177b14]{color:#e74c3c}.field-hint.warning[data-v-51177b14]{color:#f39c12}.exchange-rate-info[data-v-51177b14]{align-items:center;color:#8e44ad;display:flex;font-size:11px;gap:4px}.exchange-rate-info i[data-v-51177b14]{color:#9b59b6}.text-counter[data-v-51177b14]{color:#9ca3af;font-size:11px;margin-left:auto}.ministry-info[data-v-51177b14]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;margin-top:12px;padding:12px}.ministry-details[data-v-51177b14]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr}.ministry-detail-item[data-v-51177b14]{align-items:center;color:#075985;display:flex;font-size:12px;gap:8px}.ministry-detail-item i[data-v-51177b14]{color:#0ea5e9;flex-shrink:0;width:14px}.ministry-name[data-v-51177b14]{font-weight:600}.ministry-code[data-v-51177b14]{background:#e0f2fe;border-radius:4px;font-family:monospace;padding:2px 6px}.ministry-description[data-v-51177b14]{color:#0369a1;font-style:italic}.ministry-contact[data-v-51177b14]{font-family:monospace}.bank-account-info[data-v-51177b14]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;margin-top:12px;padding:12px}.bank-details[data-v-51177b14]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr 1fr}.bank-detail-item[data-v-51177b14]{align-items:center;color:#6b7280;display:flex;font-size:12px;gap:6px}.bank-detail-item i[data-v-51177b14]{color:#667eea;width:12px}.bank-detail-item .branch[data-v-51177b14]{color:#9ca3af;font-style:italic}.form-errors[data-v-51177b14]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-51177b14]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-51177b14]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-51177b14]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-51177b14]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-51177b14]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-51177b14]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-51177b14]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-51177b14]{background:#6c757d;color:#fff}.btn[data-v-51177b14]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-51177b14]{animation:spin-51177b14 1s linear infinite}@media (max-width:768px){.enhanced-dialog[data-v-51177b14]{margin:10px;width:98%}.bank-details[data-v-51177b14],.form-grid[data-v-51177b14],.ministry-details[data-v-51177b14]{grid-template-columns:1fr}.modal-body[data-v-51177b14],.modal-header[data-v-51177b14]{padding:16px}.enhanced-footer[data-v-51177b14]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-51177b14]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(532);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-0bf00b78]{align-items:center;animation:fadeIn-0bf00b78 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-0bf00b78{0%{opacity:0}to{opacity:1}}.detail-dialog[data-v-0bf00b78]{animation:slideIn-0bf00b78 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:850px;overflow:hidden;width:95%}@keyframes slideIn-0bf00b78{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-0bf00b78]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-0bf00b78]{font-size:20px;opacity:.9}.modal-title[data-v-0bf00b78]{font-size:20px;font-weight:600;margin:0}.header-actions[data-v-0bf00b78]{align-items:center;display:flex;gap:8px}.btn-icon[data-v-0bf00b78]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;opacity:.8;padding:8px;transition:all .2s}.btn-icon[data-v-0bf00b78]:hover{background:hsla(0,0%,100%,.1);opacity:1}.close-btn[data-v-0bf00b78]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-0bf00b78]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-0bf00b78]{max-height:70vh;overflow-y:auto;padding:0}.detail-body[data-v-0bf00b78]{background:#f8f9fa}.detail-loading[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #e9ecef;border-radius:8px;color:#666;display:flex;justify-content:center;margin:20px;padding:60px}.spinner-small[data-v-0bf00b78]{animation:spin-0bf00b78 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-0bf00b78{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.detail-content[data-v-0bf00b78]{display:flex;flex-direction:column;gap:20px;padding:24px}.detail-status[data-v-0bf00b78]{background:#fff;border:2px solid #e9ecef;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:0;padding:20px;text-align:center}.status-badge[data-v-0bf00b78]{align-items:center;border:2px solid transparent;border-radius:25px;display:inline-flex;font-size:16px;font-weight:600;gap:8px;letter-spacing:.5px;padding:12px 24px;text-transform:uppercase}.status-badge.status-pending[data-v-0bf00b78]{background:linear-gradient(135deg,#f39c12,#e67e22);border-color:#d68910;color:#fff}.status-badge.status-approved[data-v-0bf00b78]{background:linear-gradient(135deg,#27ae60,#229954);border-color:#1e8449;color:#fff}.status-badge.status-settled[data-v-0bf00b78]{background:linear-gradient(135deg,#3498db,#2980b9);border-color:#2471a3;color:#fff}.status-badge.status-rejected[data-v-0bf00b78]{background:linear-gradient(135deg,#e74c3c,#c0392b);border-color:#a93226;color:#fff}.status-badge.status-cancelled[data-v-0bf00b78]{background:linear-gradient(135deg,#95a5a6,#7f8c8d);border-color:#6c7b7d;color:#fff}.detail-section[data-v-0bf00b78]{background:#fff;border:2px solid #e9ecef;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:20px;padding:24px;transition:all .2s ease}.detail-section[data-v-0bf00b78]:hover{border-color:#dee2e6;box-shadow:0 4px 12px rgba(0,0,0,.12)}.detail-section[data-v-0bf00b78]:last-child{margin-bottom:0}.section-title[data-v-0bf00b78]{align-items:center;border-bottom:3px solid #ecf0f1;color:#2c3e50;display:flex;font-size:18px;font-weight:700;gap:12px;margin-bottom:20px;padding-bottom:12px}.section-title i[data-v-0bf00b78]{color:#3498db;font-size:16px}.detail-grid[data-v-0bf00b78]{grid-gap:24px;display:grid;gap:24px;grid-template-columns:1fr 1fr}.detail-item[data-v-0bf00b78]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;display:flex;flex-direction:column;gap:8px;padding:16px;transition:all .2s ease}.detail-item[data-v-0bf00b78]:hover{background:#e8f4fd;border-color:#3498db}.detail-item.full-width[data-v-0bf00b78]{grid-column:1/-1}.detail-item label[data-v-0bf00b78]{color:#6c757d;font-size:12px;font-weight:700;letter-spacing:.8px;margin-bottom:4px;text-transform:uppercase}.detail-value[data-v-0bf00b78]{color:#2c3e50;font-size:16px;font-weight:600;word-break:break-word}.amount-display[data-v-0bf00b78]{background:linear-gradient(135deg,#d5f4e6,#fafafa);border:2px solid #a9dfbf;border-radius:8px;color:#27ae60;font-size:28px;font-weight:800;padding:8px;text-align:center}.amount-display small[data-v-0bf00b78]{color:#6c757d;font-size:16px;font-weight:500;margin-left:8px}.exchange-rate-display[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#f4ecf7,#fafafa);border:2px solid #d7bde2;border-radius:8px;color:#8e44ad;display:flex;font-size:18px;font-weight:700;gap:8px;justify-content:center;padding:12px;text-align:center}.exchange-rate-display i[data-v-0bf00b78]{color:#9b59b6;font-size:16px}.user-info[data-v-0bf00b78]{align-items:center;background:#e8f4fd;border:1px solid #85c1e9;border-radius:6px;display:flex;gap:10px;padding:8px 12px}.user-info i[data-v-0bf00b78]{color:#3498db;font-size:14px}.timeline[data-v-0bf00b78]{background:#fafafa;border:2px solid #e9ecef;border-radius:8px;padding:20px;position:relative}.timeline[data-v-0bf00b78]:before{background:linear-gradient(180deg,#3498db,#ecf0f1);border-radius:2px;bottom:20px;content:\"\";left:35px;position:absolute;top:20px;width:3px}.timeline-item[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #ecf0f1;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);display:flex;margin-bottom:24px;margin-left:20px;padding:16px;position:relative}.timeline-item[data-v-0bf00b78]:last-child{margin-bottom:0}.timeline-icon[data-v-0bf00b78]{align-items:center;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.2);color:#fff;display:flex;font-size:16px;height:40px;justify-content:center;left:-36px;margin-right:20px;position:absolute;width:40px;z-index:1}.timeline-icon.created[data-v-0bf00b78]{background:linear-gradient(135deg,#3498db,#2980b9)}.timeline-icon.approved[data-v-0bf00b78]{background:linear-gradient(135deg,#27ae60,#229954)}.timeline-icon.due[data-v-0bf00b78]{background:linear-gradient(135deg,#f39c12,#e67e22)}.timeline-icon.due.overdue[data-v-0bf00b78]{animation:pulse-0bf00b78 2s infinite;background:linear-gradient(135deg,#e74c3c,#c0392b)}.timeline-icon.settled[data-v-0bf00b78]{background:linear-gradient(135deg,#9b59b6,#8e44ad)}@keyframes pulse-0bf00b78{0%{box-shadow:0 0 0 0 rgba(231,76,60,.7),0 2px 8px rgba(0,0,0,.2)}70%{box-shadow:0 0 0 12px rgba(231,76,60,0),0 2px 8px rgba(0,0,0,.2)}to{box-shadow:0 0 0 0 rgba(231,76,60,0),0 2px 8px rgba(0,0,0,.2)}}.timeline-content[data-v-0bf00b78]{flex:1;margin-left:20px}.timeline-content label[data-v-0bf00b78]{color:#6c757d;display:block;font-size:12px;font-weight:700;letter-spacing:.5px;margin-bottom:4px;text-transform:uppercase}.timeline-date[data-v-0bf00b78]{color:#2c3e50;font-size:15px;font-weight:600}.timeline-date.overdue[data-v-0bf00b78]{color:#e74c3c;font-weight:700}.overdue-badge[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#e74c3c,#c0392b);border:1px solid #a93226;border-radius:12px;color:#fff;display:inline-flex;font-size:11px;font-weight:600;gap:4px;margin-left:8px;padding:4px 8px}.notes-content[data-v-0bf00b78]{background:#fff9e6;border:2px solid #f7dc6f;border-left:6px solid #f1c40f;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);color:#2c3e50;font-size:15px;font-style:italic;line-height:1.8;padding:20px}.history-list[data-v-0bf00b78]{display:flex;flex-direction:column;gap:12px}.history-item[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #ecf0f1;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.05);display:flex;gap:16px;padding:16px;transition:all .2s ease}.history-item[data-v-0bf00b78]:hover{background:#f8fcff;border-color:#3498db}.history-icon[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#3498db,#2980b9);border:2px solid #85c1e9;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:12px;height:32px;justify-content:center;width:32px}.history-content[data-v-0bf00b78]{display:flex;flex:1;flex-direction:column;gap:4px}.history-action[data-v-0bf00b78]{color:#2c3e50;font-size:15px;font-weight:700;text-transform:capitalize}.history-user[data-v-0bf00b78]{color:#6c757d;font-size:13px;font-weight:500}.history-date[data-v-0bf00b78]{color:#95a5a6;font-size:12px;font-weight:400}.detail-error[data-v-0bf00b78]{background:#fff;border:2px solid #fadbd8;border-radius:12px;color:#e74c3c;margin:20px;padding:60px 20px;text-align:center}.detail-error i[data-v-0bf00b78]{font-size:48px;margin-bottom:15px;opacity:.7}.detail-footer[data-v-0bf00b78]{align-items:center;background:#f8f9fa;border-top:2px solid #e9ecef;display:flex;justify-content:space-between;padding:16px 24px}.close-detail-btn[data-v-0bf00b78]{align-items:center;background:#6c757d;border:none;border-radius:6px;color:#fff;cursor:pointer;display:flex;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s ease}.close-detail-btn[data-v-0bf00b78]:hover{background:#5a6268;transform:translateY(-1px)}.detail-actions[data-v-0bf00b78]{align-items:center;display:flex;gap:8px}.detail-actions .action-btn[data-v-0bf00b78]{align-items:center;border:none;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;display:flex;font-size:14px;height:36px;justify-content:center;padding:0;position:relative;transition:all .2s ease;width:36px}.detail-actions .action-btn[data-v-0bf00b78]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-2px)}.detail-actions .action-btn[data-v-0bf00b78]:active{box-shadow:0 1px 2px rgba(0,0,0,.1);transform:translateY(0)}.detail-actions .btn-warning[data-v-0bf00b78]{background:#ffc107;color:#212529}.detail-actions .btn-warning[data-v-0bf00b78]:hover{background:#e0a800}.detail-actions .btn-success[data-v-0bf00b78]{background:#28a745;color:#fff}.detail-actions .btn-success[data-v-0bf00b78]:hover{background:#218838}.detail-actions .btn-primary[data-v-0bf00b78]{background:#007bff;color:#fff}.detail-actions .btn-primary[data-v-0bf00b78]:hover{background:#0056b3}.btn[data-v-0bf00b78]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:6px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-0bf00b78]{background:#007bff;color:#fff}.btn-primary[data-v-0bf00b78]:hover{background:#0056b3}.btn-secondary[data-v-0bf00b78]{background:#6c757d;color:#fff}.btn-secondary[data-v-0bf00b78]:hover{background:#5a6268}.btn-sm[data-v-0bf00b78]{font-size:12px;padding:4px 8px}.detail-actions .action-btn[data-v-0bf00b78]:before{background:rgba(0,0,0,.8);border-radius:4px;bottom:-32px;color:#fff;content:attr(title);font-size:11px;left:50%;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;transform:translateX(-50%);transition:opacity .2s ease;white-space:nowrap;z-index:10}.detail-actions .action-btn[data-v-0bf00b78]:hover:before{opacity:1}@media (max-width:768px){.detail-dialog[data-v-0bf00b78]{margin:10px;width:98%}.detail-grid[data-v-0bf00b78]{gap:16px;grid-template-columns:1fr}.detail-footer[data-v-0bf00b78]{align-items:center;flex-direction:row;justify-content:space-between;padding:12px 16px}.close-detail-btn[data-v-0bf00b78]{font-size:14px;padding:6px 12px}.detail-actions[data-v-0bf00b78]{gap:6px}.detail-actions .action-btn[data-v-0bf00b78]{font-size:12px;height:32px;width:32px}.detail-actions .action-btn[data-v-0bf00b78]:before{bottom:-28px;font-size:10px}.timeline[data-v-0bf00b78]{padding:16px}.timeline[data-v-0bf00b78]:before{left:25px}.timeline-item[data-v-0bf00b78]{margin-left:10px;padding:12px}.timeline-icon[data-v-0bf00b78]{font-size:12px;height:32px;left:-26px;width:32px}.amount-display[data-v-0bf00b78]{font-size:24px}.exchange-rate-display[data-v-0bf00b78]{font-size:16px}.detail-content[data-v-0bf00b78],.detail-section[data-v-0bf00b78],.modal-header[data-v-0bf00b78]{padding:16px}.section-title[data-v-0bf00b78]{font-size:16px}}@media (max-width:480px){.detail-content[data-v-0bf00b78],.detail-section[data-v-0bf00b78]{padding:12px}.section-title[data-v-0bf00b78]{font-size:14px}.amount-display[data-v-0bf00b78]{font-size:20px}.exchange-rate-display[data-v-0bf00b78]{font-size:14px}.timeline-content[data-v-0bf00b78]{margin-left:10px}}@media print{.modal-overlay[data-v-0bf00b78]{-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background:none!important;position:static!important}.detail-dialog[data-v-0bf00b78]{box-shadow:none!important;margin:0!important;max-width:none!important;width:100%!important}.modal-footer[data-v-0bf00b78],.modal-header[data-v-0bf00b78]{display:none!important}.detail-body[data-v-0bf00b78]{background:#fff!important;max-height:none!important}.btn[data-v-0bf00b78],.header-actions[data-v-0bf00b78]{display:none!important}.detail-section[data-v-0bf00b78]{-moz-column-break-inside:avoid;border:2px solid #333!important;break-inside:avoid;margin-bottom:20px!important;page-break-inside:avoid}.section-title[data-v-0bf00b78]{border-bottom:2px solid #333!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(533);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-33ecff44]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-33ecff44]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-33ecff44]{align-items:center;border-bottom:1px solid #eee;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-33ecff44]{color:#333;margin:0}.close-btn[data-v-33ecff44]{background:none;border:none;color:#666;cursor:pointer;font-size:18px}.close-btn[data-v-33ecff44]:hover{color:#333}.modal-body[data-v-33ecff44]{padding:20px}.modal-footer[data-v-33ecff44]{border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-33ecff44]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-33ecff44]{background:#007bff;color:#fff}.btn-primary[data-v-33ecff44]:hover{background:#0056b3}.btn-secondary[data-v-33ecff44]{background:#6c757d;color:#fff}.btn-secondary[data-v-33ecff44]:hover{background:#545b62}.voucher-container[data-v-33ecff44]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;line-height:1.4;margin:0 auto;max-width:700px;padding:20px;width:100%}.voucher-header[data-v-33ecff44]{align-items:flex-start;border-bottom:1px solid #ccc;display:flex;justify-content:space-between;margin-bottom:20px;padding-bottom:10px}.company-info[data-v-33ecff44]{flex:1;text-align:center}.company-name[data-v-33ecff44]{font-size:16px;font-weight:700;margin-bottom:5px}.department[data-v-33ecff44]{font-size:14px;margin-bottom:3px}.sub-department[data-v-33ecff44]{font-size:12px;margin-bottom:10px}.amount-line[data-v-33ecff44]{font-size:12px;letter-spacing:2px}.voucher-number[data-v-33ecff44]{flex:0 0 auto;margin-left:20px}.number-box[data-v-33ecff44]{background:#f9f9f9;border:2px solid #333;padding:8px 12px;text-align:center}.number-label[data-v-33ecff44]{font-weight:700;margin-right:10px}.number-value[data-v-33ecff44]{color:#d32f2f;font-weight:700}.voucher-title[data-v-33ecff44]{font-size:18px;font-weight:700;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-details[data-v-33ecff44]{margin-bottom:30px}.detail-row[data-v-33ecff44]{align-items:center;display:flex;margin-bottom:12px;min-height:24px}.detail-row.description[data-v-33ecff44]{align-items:flex-start;flex-direction:column}.label[data-v-33ecff44]{font-weight:500;margin-right:10px;white-space:nowrap}.value[data-v-33ecff44]{border-bottom:1px solid #333;margin-right:20px;min-width:40px;padding:2px 5px;text-align:center}.dotted-line[data-v-33ecff44]{border-bottom:1px dotted #333;flex:1;margin:0 10px;min-height:20px;padding:2px 5px}.currency-options[data-v-33ecff44]{display:flex;gap:20px;margin-left:10px}.currency-options label[data-v-33ecff44]{align-items:center;display:flex;font-weight:400;gap:5px}.amount-number[data-v-33ecff44]{border-bottom:1px solid #333;flex:1;font-weight:700;margin:0 10px;padding:2px 10px;text-align:right}.amount-display[data-v-33ecff44]{color:#d32f2f;font-size:16px;font-weight:700;margin:0 10px}.description-content[data-v-33ecff44]{background:#fafafa;border:1px solid #333;margin-top:5px;min-height:60px;padding:10px;width:100%}.amount-words[data-v-33ecff44]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:10px;padding:2px 10px}.signature-section[data-v-33ecff44]{display:flex;gap:10px;justify-content:space-between;margin-top:40px}.signature-box[data-v-33ecff44]{flex:1;text-align:center}.signature-title[data-v-33ecff44]{font-size:12px;font-weight:500;margin-bottom:30px}.signature-line[data-v-33ecff44]{border-bottom:1px solid #333;height:1px;margin-top:20px}.signature-name[data-v-33ecff44]{color:#666;font-size:10px;font-weight:400;margin-top:5px}@media print{body *[data-v-33ecff44]{visibility:hidden}.print-only[data-v-33ecff44],.print-only *[data-v-33ecff44]{visibility:visible}.print-only[data-v-33ecff44]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-33ecff44]{border:2px solid #000!important;font-size:12px!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}.voucher-title[data-v-33ecff44]{font-size:16px!important}.amount-display[data-v-33ecff44],.company-name[data-v-33ecff44]{font-size:14px!important}.signature-title[data-v-33ecff44]{font-size:10px!important}.department[data-v-33ecff44]{font-size:12px!important}.amount-line[data-v-33ecff44],.sub-department[data-v-33ecff44]{font-size:10px!important}.signature-name[data-v-33ecff44]{font-size:9px!important}}.print-only[data-v-33ecff44]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-33ecff44]{left:auto;position:static;top:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(534);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-dialog[data-v-5c476a8a]{max-height:90vh;max-width:900px;width:95%}.audit-header[data-v-5c476a8a]{background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff}.audit-content[data-v-5c476a8a]{max-height:70vh;overflow-y:auto}.error-container[data-v-5c476a8a],.loading-container[data-v-5c476a8a],.no-data-container[data-v-5c476a8a]{color:#666;padding:40px 20px;text-align:center}.spinner[data-v-5c476a8a]{animation:spin-5c476a8a 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#4f46e5;height:40px;margin:0 auto 20px;width:40px}@keyframes spin-5c476a8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.error-icon[data-v-5c476a8a],.no-data-icon[data-v-5c476a8a]{font-size:48px;margin-bottom:15px;opacity:.5}.audit-summary[data-v-5c476a8a]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:24px}.summary-card[data-v-5c476a8a]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;gap:12px;padding:16px}.summary-card[data-v-5c476a8a],.summary-icon[data-v-5c476a8a]{align-items:center;display:flex}.summary-icon[data-v-5c476a8a]{background:#4f46e5;border-radius:50%;color:#fff;font-size:18px;height:40px;justify-content:center;width:40px}.summary-info[data-v-5c476a8a]{flex:1}.summary-label[data-v-5c476a8a]{color:#64748b;font-size:12px;margin-bottom:4px}.summary-value[data-v-5c476a8a]{color:#1e293b;font-size:16px;font-weight:600}.audit-controls[data-v-5c476a8a]{margin-bottom:24px}.filter-controls[data-v-5c476a8a]{align-items:center;display:flex;gap:12px}.filter-select[data-v-5c476a8a]{border:1px solid #d1d5db;border-radius:6px;font-size:14px;max-width:200px;padding:8px 12px}.audit-timeline[data-v-5c476a8a]{position:relative}.audit-timeline[data-v-5c476a8a]:before{background:#e2e8f0;bottom:0;content:\"\";left:20px;position:absolute;top:0;width:2px}.timeline-item[data-v-5c476a8a]{margin-bottom:24px;margin-left:40px;position:relative}.timeline-item.expandable .timeline-header[data-v-5c476a8a]{cursor:pointer}.timeline-item.expandable .timeline-header[data-v-5c476a8a]:hover{background:#f8fafc}.timeline-marker[data-v-5c476a8a]{align-items:center;background:#fff;border:2px solid #e2e8f0;border-radius:50%;display:flex;font-size:16px;height:40px;justify-content:center;left:-60px;position:absolute;top:8px;width:40px}.timeline-content[data-v-5c476a8a]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden}.timeline-header[data-v-5c476a8a]{align-items:center;border-radius:8px;display:flex;justify-content:space-between;padding:16px;transition:background-color .2s}.timeline-main-info[data-v-5c476a8a]{flex:1}.timeline-action[data-v-5c476a8a]{align-items:center;display:flex;gap:12px;margin-bottom:4px}.action-badge[data-v-5c476a8a]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 8px;text-transform:uppercase}.action-badge.create[data-v-5c476a8a]{background:#dcfce7;color:#166534}.action-badge.update[data-v-5c476a8a]{background:#fef3c7;color:#92400e}.action-badge.approve[data-v-5c476a8a]{background:#dcfce7;color:#166534}.action-badge.settle[data-v-5c476a8a]{background:#dbeafe;color:#1e40af}.action-badge.delete[data-v-5c476a8a]{background:#fee2e2;color:#dc2626}.timeline-time[data-v-5c476a8a]{color:#64748b;font-size:12px}.timeline-user[data-v-5c476a8a]{align-items:center;color:#475569;display:flex;font-size:14px;gap:6px}.timeline-toggle[data-v-5c476a8a]{align-items:center;color:#64748b;display:flex;gap:8px}.changes-count[data-v-5c476a8a],.toggle-icon[data-v-5c476a8a]{font-size:12px}.toggle-icon[data-v-5c476a8a]{transition:transform .2s}.timeline-reason[data-v-5c476a8a]{align-items:center;background:#f1f5f9;border-top:1px solid #e2e8f0;color:#475569;display:flex;font-size:14px;font-style:italic;gap:8px;padding:8px 16px}.timeline-details[data-v-5c476a8a]{background:#fafbfc;border-top:1px solid #e2e8f0;padding:16px}.changes-list h6[data-v-5c476a8a]{color:#374151;font-size:14px;margin:0 0 12px}.change-item[data-v-5c476a8a]{background:#fff;border:1px solid #e2e8f0;border-radius:6px;margin-bottom:12px;padding:12px}.change-field[data-v-5c476a8a]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.change-values[data-v-5c476a8a]{grid-gap:12px;align-items:center;display:grid;gap:12px;grid-template-columns:1fr auto 1fr}.new-value[data-v-5c476a8a],.old-value[data-v-5c476a8a]{display:flex;flex-direction:column;gap:4px}.value-label[data-v-5c476a8a]{color:#64748b;font-size:12px;font-weight:500}.value[data-v-5c476a8a]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;color:#1e293b;font-size:14px;padding:6px 8px}.old-value .value[data-v-5c476a8a]{background:#fef2f2;border-color:#fecaca;color:#991b1b}.new-value .value[data-v-5c476a8a]{background:#f0fdf4;border-color:#bbf7d0;color:#166534}.arrow[data-v-5c476a8a]{color:#64748b;font-size:14px}.view-full-details[data-v-5c476a8a]{margin-top:12px;text-align:center}.load-more-container[data-v-5c476a8a]{border-top:1px solid #e2e8f0;margin-top:24px;padding-top:24px;text-align:center}.btn[data-v-5c476a8a]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;transition:all .2s}.btn[data-v-5c476a8a]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-primary[data-v-5c476a8a]{background:#4f46e5;color:#fff}.btn-secondary[data-v-5c476a8a]{background:#6b7280;color:#fff}.btn-info[data-v-5c476a8a]{background:#0ea5e9;color:#fff}.btn-link[data-v-5c476a8a]{background:none;border:1px solid transparent;color:#4f46e5;-webkit-text-decoration:none;text-decoration:none}.btn-link[data-v-5c476a8a]:hover{background:#f0f9ff;border-color:#bae6fd}.btn-sm[data-v-5c476a8a]{font-size:12px;padding:6px 12px}.btn[data-v-5c476a8a]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.audit-footer[data-v-5c476a8a]{background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;gap:12px;justify-content:flex-end}@media (max-width:768px){.audit-dialog[data-v-5c476a8a]{margin:10px;width:98%}.audit-summary[data-v-5c476a8a]{grid-template-columns:1fr}.filter-controls[data-v-5c476a8a]{align-items:stretch;flex-direction:column}.filter-select[data-v-5c476a8a]{max-width:none}.timeline-item[data-v-5c476a8a]{margin-left:20px}.timeline-marker[data-v-5c476a8a]{font-size:14px;height:30px;left:-40px;width:30px}.change-values[data-v-5c476a8a]{gap:8px;grid-template-columns:1fr}.arrow[data-v-5c476a8a]{text-align:center;transform:rotate(90deg)}.audit-footer[data-v-5c476a8a]{flex-direction:column-reverse}.audit-footer .btn[data-v-5c476a8a]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(535);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-e6a23e30]{align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.comparison-dialog[data-v-e6a23e30]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1000px;overflow:hidden;width:95%}.modal-header[data-v-e6a23e30]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-e6a23e30]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-e6a23e30]{font-size:20px}.modal-title[data-v-e6a23e30]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-e6a23e30]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-e6a23e30]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-e6a23e30]{max-height:70vh;overflow-y:auto;padding:0}.error-state[data-v-e6a23e30],.loading-state[data-v-e6a23e30],.no-differences[data-v-e6a23e30],.select-versions-prompt[data-v-e6a23e30]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:60px 20px;text-align:center}.spinner[data-v-e6a23e30]{animation:spin-e6a23e30 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#667eea;height:40px;margin-bottom:20px;width:40px}@keyframes spin-e6a23e30{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.error-icon[data-v-e6a23e30],.no-diff-icon[data-v-e6a23e30],.prompt-icon[data-v-e6a23e30]{font-size:48px;margin-bottom:20px;opacity:.6}.error-icon[data-v-e6a23e30]{color:#e74c3c}.prompt-icon[data-v-e6a23e30]{color:#3498db}.no-diff-icon[data-v-e6a23e30]{color:#27ae60}.version-selector[data-v-e6a23e30]{grid-gap:20px;align-items:end;background:#f8f9fa;border-bottom:1px solid #e9ecef;display:grid;gap:20px;grid-template-columns:1fr auto 1fr;padding:24px}.selector-group[data-v-e6a23e30]{display:flex;flex-direction:column;gap:8px}.selector-group label[data-v-e6a23e30]{color:#2c3e50;font-size:14px;font-weight:600}.form-control[data-v-e6a23e30]{background:#fff;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;padding:12px 16px;transition:border-color .2s ease}.form-control[data-v-e6a23e30]:focus{border-color:#667eea;outline:none}.comparison-arrow[data-v-e6a23e30]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;font-size:16px;height:40px;justify-content:center;margin-top:24px;width:40px}.comparison-results[data-v-e6a23e30]{padding:24px}.comparison-summary[data-v-e6a23e30]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:24px}.summary-card[data-v-e6a23e30]{background:#fff;border:1px solid #e9ecef;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);gap:12px;padding:16px}.summary-card[data-v-e6a23e30],.summary-icon[data-v-e6a23e30]{align-items:center;display:flex}.summary-icon[data-v-e6a23e30]{background:#667eea;border-radius:50%;color:#fff;font-size:16px;height:40px;justify-content:center;width:40px}.summary-number[data-v-e6a23e30]{color:#2c3e50;font-size:20px;font-weight:700}.summary-text[data-v-e6a23e30]{color:#2c3e50;font-size:12px;font-weight:600;word-break:break-word}.summary-label[data-v-e6a23e30]{color:#7f8c8d;font-size:11px;margin-top:4px}.differences-table h6[data-v-e6a23e30]{align-items:center;color:#2c3e50;display:flex;font-size:16px;font-weight:600;gap:8px;margin-bottom:16px}.table-container[data-v-e6a23e30]{border:1px solid #e9ecef;border-radius:8px;overflow:hidden}.comparison-table[data-v-e6a23e30]{background:#fff;border-collapse:collapse;width:100%}.comparison-table th[data-v-e6a23e30]{background:#f8f9fa;border-bottom:2px solid #e9ecef;font-size:13px;font-weight:600;padding:16px 12px;text-align:left}.field-header[data-v-e6a23e30]{color:#495057;width:200px}.version-header[data-v-e6a23e30]{position:relative}.version-header.version1[data-v-e6a23e30]{background:linear-gradient(135deg,#ffe6e6,#fcc)}.version-header.version2[data-v-e6a23e30]{background:linear-gradient(135deg,#e6ffe6,#cfc)}.version-info[data-v-e6a23e30]{text-align:center}.version-label[data-v-e6a23e30]{color:#2c3e50;font-weight:700}.version-date[data-v-e6a23e30]{color:#7f8c8d;font-size:11px;margin-top:2px}.comparison-table td[data-v-e6a23e30]{border-bottom:1px solid #f1f3f4;padding:16px 12px;vertical-align:top}.diff-row[data-v-e6a23e30]:hover{background:#f8f9fa}.field-cell[data-v-e6a23e30]{background:#fafbfc;border-right:1px solid #e9ecef}.field-info[data-v-e6a23e30]{align-items:center;display:flex;gap:8px}.field-info i[data-v-e6a23e30]{color:#6c757d;text-align:center;width:16px}.field-name[data-v-e6a23e30]{color:#495057;font-size:13px;font-weight:600}.value-cell[data-v-e6a23e30]{position:relative}.value-cell.version1[data-v-e6a23e30]{background:#fff8f8}.value-cell.version2[data-v-e6a23e30]{background:#f8fff8}.value-content[data-v-e6a23e30]{align-items:center;display:flex;justify-content:space-between;min-height:24px;position:relative}.value-text[data-v-e6a23e30]{background:hsla(0,0%,100%,.8);border:1px solid transparent;border-radius:4px;flex:1;font-family:\"Monaco\",\"Menlo\",\"Ubuntu Mono\",monospace;font-size:12px;padding:6px 10px}.old-value .value-text[data-v-e6a23e30]{background:#fef2f2;border-color:#fecaca;color:#dc2626}.new-value .value-text[data-v-e6a23e30]{background:#f0fdf4;border-color:#bbf7d0;color:#059669}.change-indicator[data-v-e6a23e30]{color:#3b82f6;font-size:12px;margin-left:8px;opacity:.7}.comparison-actions[data-v-e6a23e30]{gap:12px;justify-content:center;margin-top:24px;padding-top:24px}.comparison-actions[data-v-e6a23e30],.modal-footer[data-v-e6a23e30]{border-top:1px solid #e9ecef;display:flex}.modal-footer[data-v-e6a23e30]{align-items:center;background:#f8f9fa;justify-content:space-between;padding:20px 24px}.btn[data-v-e6a23e30]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-e6a23e30]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-e6a23e30]:disabled{cursor:not-allowed;opacity:.6;transform:none!important}.btn-primary[data-v-e6a23e30]{background:#667eea;color:#fff}.btn-secondary[data-v-e6a23e30]{background:#6c757d;color:#fff}.btn-warning[data-v-e6a23e30]{background:#f39c12;color:#fff}.btn-outline[data-v-e6a23e30]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline[data-v-e6a23e30]:hover:not(:disabled){background:#667eea;color:#fff}.btn-sm[data-v-e6a23e30]{font-size:12px;padding:8px 16px}@media (max-width:768px){.comparison-dialog[data-v-e6a23e30]{margin:10px;width:98%}.version-selector[data-v-e6a23e30]{gap:16px;grid-template-columns:1fr}.comparison-arrow[data-v-e6a23e30]{margin:0 auto;transform:rotate(90deg)}.comparison-summary[data-v-e6a23e30]{grid-template-columns:1fr}.comparison-table[data-v-e6a23e30]{font-size:12px}.comparison-table td[data-v-e6a23e30],.comparison-table th[data-v-e6a23e30]{padding:12px 8px}.field-header[data-v-e6a23e30]{width:auto}.modal-footer[data-v-e6a23e30]{gap:12px}.comparison-actions[data-v-e6a23e30],.modal-footer[data-v-e6a23e30]{flex-direction:column}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(536);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-7e1ed358]{align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.reports-dialog[data-v-7e1ed358]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1200px;overflow:hidden;width:95%}.modal-header[data-v-7e1ed358]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-7e1ed358]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-7e1ed358]{font-size:20px}.modal-title[data-v-7e1ed358]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-7e1ed358]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-7e1ed358]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-7e1ed358]{max-height:70vh;overflow-y:auto;padding:0}.tabs-container[data-v-7e1ed358]{background:#f8f9fa;border-bottom:1px solid #e9ecef}.tabs[data-v-7e1ed358]{display:flex;padding:0 24px}.tab-btn[data-v-7e1ed358]{align-items:center;background:none;border:none;border-bottom:3px solid transparent;color:#6c757d;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;padding:16px 24px;transition:all .2s ease}.tab-btn[data-v-7e1ed358]:hover{background:hsla(0,0%,100%,.5);color:#495057}.tab-btn.active[data-v-7e1ed358]{background:#fff;border-bottom-color:#667eea;color:#667eea}.report-content[data-v-7e1ed358]{padding:24px}.report-header[data-v-7e1ed358]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;margin-bottom:24px;padding-bottom:16px}.report-header h6[data-v-7e1ed358]{color:#2c3e50;font-size:16px;gap:8px;margin:0}.date-filter[data-v-7e1ed358],.report-header h6[data-v-7e1ed358]{align-items:center;display:flex}.date-filter[data-v-7e1ed358]{gap:12px}.date-filter span[data-v-7e1ed358]{color:#6c757d;font-size:14px}.form-control[data-v-7e1ed358]{border:1px solid #ddd;border-radius:4px;font-size:14px;padding:8px 12px}.loading-state[data-v-7e1ed358]{align-items:center;color:#6c757d;display:flex;gap:12px;justify-content:center;padding:60px}.spinner-sm[data-v-7e1ed358]{animation:spin-7e1ed358 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#667eea;height:20px;width:20px}.activity-summary[data-v-7e1ed358]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:24px}.summary-card[data-v-7e1ed358]{background:#fff;border:1px solid #e9ecef;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);gap:12px;padding:16px}.summary-card[data-v-7e1ed358],.summary-icon[data-v-7e1ed358]{align-items:center;display:flex}.summary-icon[data-v-7e1ed358]{background:#667eea;border-radius:50%;color:#fff;font-size:16px;height:40px;justify-content:center;width:40px}.summary-number[data-v-7e1ed358]{color:#2c3e50;font-size:20px;font-weight:700}.summary-text[data-v-7e1ed358]{color:#2c3e50;font-size:14px;font-weight:600}.summary-label[data-v-7e1ed358]{color:#7f8c8d;font-size:11px;margin-top:4px}.activity-table[data-v-7e1ed358]{border:1px solid #e9ecef;border-radius:8px;overflow:hidden}.table[data-v-7e1ed358]{border-collapse:collapse;margin:0;width:100%}.table th[data-v-7e1ed358]{background:#f8f9fa;border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;text-align:left}.table td[data-v-7e1ed358],.table th[data-v-7e1ed358]{font-size:13px;padding:12px}.table td[data-v-7e1ed358]{border-bottom:1px solid #f1f3f4}.user-info[data-v-7e1ed358]{display:flex;flex-direction:column;gap:2px}.user-name[data-v-7e1ed358]{color:#2c3e50;font-weight:600}.user-id[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.activity-count[data-v-7e1ed358]{border-radius:12px;display:inline-block;font-size:11px;font-weight:600;min-width:24px;padding:4px 8px;text-align:center}.activity-count.create[data-v-7e1ed358]{background:#d4edda;color:#155724}.activity-count.update[data-v-7e1ed358]{background:#fff3cd;color:#856404}.activity-count.approve[data-v-7e1ed358]{background:#cce5ff;color:#004085}.activity-count.settle[data-v-7e1ed358]{background:#e2e3e5;color:#495057}.activity-count.delete[data-v-7e1ed358]{background:#f8d7da;color:#721c24}.total-count[data-v-7e1ed358]{color:#2c3e50;font-weight:700}.chart-container[data-v-7e1ed358]{margin-bottom:32px}.chart-container h6[data-v-7e1ed358]{color:#2c3e50;margin-bottom:16px}.chart-placeholder[data-v-7e1ed358]{background:#f8f9fa;border-radius:8px;min-height:200px;padding:20px}.chart-bars[data-v-7e1ed358]{align-items:end;display:flex;gap:4px;height:150px;margin-bottom:8px}.chart-bar[data-v-7e1ed358]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:4px 4px 0 0;cursor:pointer;flex:1;min-height:8px;position:relative;transition:all .2s ease}.chart-bar[data-v-7e1ed358]:hover{opacity:.8}.bar-value[data-v-7e1ed358]{color:#495057;font-size:10px;font-weight:600;left:50%;position:absolute;top:-20px;transform:translateX(-50%)}.chart-labels[data-v-7e1ed358]{display:flex;gap:4px}.chart-label[data-v-7e1ed358]{color:#6c757d;flex:1;font-size:10px;text-align:center}.breakdown-grid[data-v-7e1ed358]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:32px}.breakdown-item[data-v-7e1ed358]{align-items:center;background:#f8f9fa;border-radius:8px;display:flex;gap:12px;padding:16px}.breakdown-icon[data-v-7e1ed358]{align-items:center;border-radius:50%;color:#fff;display:flex;font-size:14px;height:32px;justify-content:center;width:32px}.breakdown-icon.create[data-v-7e1ed358]{background:#28a745}.breakdown-icon.update[data-v-7e1ed358]{background:#ffc107;color:#212529}.breakdown-icon.approve[data-v-7e1ed358]{background:#17a2b8}.breakdown-icon.settle[data-v-7e1ed358]{background:#6c757d}.breakdown-icon.delete[data-v-7e1ed358]{background:#dc3545}.breakdown-label[data-v-7e1ed358]{color:#2c3e50;font-size:12px;font-weight:600}.breakdown-count[data-v-7e1ed358]{color:#495057;font-size:18px;font-weight:700}.breakdown-percentage[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.changes-timeline[data-v-7e1ed358]{display:flex;flex-direction:column;gap:12px}.change-item[data-v-7e1ed358]{background:#f8f9fa;border-radius:6px;gap:12px;padding:12px}.change-icon[data-v-7e1ed358],.change-item[data-v-7e1ed358]{align-items:center;display:flex}.change-icon[data-v-7e1ed358]{border-radius:50%;color:#fff;font-size:10px;height:24px;justify-content:center;width:24px}.change-content[data-v-7e1ed358]{flex:1}.change-text[data-v-7e1ed358]{color:#495057;font-size:13px;margin-bottom:2px}.change-time[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.export-options[data-v-7e1ed358]{display:flex;flex-direction:column;gap:24px}.export-option[data-v-7e1ed358]{border:1px solid #e9ecef;border-radius:8px;padding:20px}.option-header[data-v-7e1ed358]{align-items:center;display:flex;gap:12px;margin-bottom:12px}.option-header i[data-v-7e1ed358]{color:#667eea;font-size:18px}.option-header h6[data-v-7e1ed358]{color:#2c3e50;margin:0}.export-controls[data-v-7e1ed358]{gap:12px;margin-top:16px}.date-range[data-v-7e1ed358],.export-controls[data-v-7e1ed358]{align-items:center;display:flex}.date-range[data-v-7e1ed358]{gap:8px}.backup-info[data-v-7e1ed358]{color:#6c757d}.btn[data-v-7e1ed358]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;transition:all .2s ease}.btn[data-v-7e1ed358]:hover:not(:disabled){transform:translateY(-1px)}.btn[data-v-7e1ed358]:disabled{cursor:not-allowed;opacity:.6;transform:none!important}.btn-primary[data-v-7e1ed358]{background:#667eea;color:#fff}.btn-secondary[data-v-7e1ed358]{background:#6c757d;color:#fff}.btn-warning[data-v-7e1ed358]{background:#ffc107;color:#212529}.btn-outline[data-v-7e1ed358]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline[data-v-7e1ed358]:hover:not(:disabled){background:#667eea;color:#fff}.btn-sm[data-v-7e1ed358]{font-size:12px;padding:6px 12px}.modal-footer[data-v-7e1ed358]{align-items:center;background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px 24px}.no-data[data-v-7e1ed358]{color:#6c757d;padding:60px 20px;text-align:center}.no-data i[data-v-7e1ed358]{font-size:48px;margin-bottom:16px;opacity:.5}@media (max-width:768px){.reports-dialog[data-v-7e1ed358]{margin:10px;width:98%}.tabs[data-v-7e1ed358]{overflow-x:auto;padding:0 16px}.tab-btn[data-v-7e1ed358]{padding:12px 16px;white-space:nowrap}.report-content[data-v-7e1ed358]{padding:16px}.report-header[data-v-7e1ed358]{align-items:stretch;flex-direction:column;gap:16px}.date-filter[data-v-7e1ed358]{flex-wrap:wrap}.activity-summary[data-v-7e1ed358],.breakdown-grid[data-v-7e1ed358]{grid-template-columns:1fr}.export-controls[data-v-7e1ed358]{align-items:stretch;flex-direction:column}.date-range[data-v-7e1ed358]{justify-content:center}}@keyframes spin-7e1ed358{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(881);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("98dbe234", content, true, context)
};

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDialog/index.vue?vue&type=template&id=51177b14&scoped=true&
var render = function render() {
  var _vm$localForm$purpose, _vm$localForm$note;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-51177b14>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-51177b14><div class=\"modal-title-section\" data-v-51177b14><i class=\"fas fa-money-bill-wave modal-icon\" data-v-51177b14></i> <h5 class=\"modal-title\" data-v-51177b14>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂລາຍຈ່າຍ' : 'ລົງບັນຊີລາຍຈ່າຍ') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-51177b14><i class=\"fas fa-times\" data-v-51177b14></i></button></div> "), _vm._ssrNode("<form data-v-51177b14>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-51177b14>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"form-loading\" data-v-51177b14>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-51177b14></div> <p data-v-51177b14>Loading form data...</p>")], 2) : _vm._ssrNode("<div class=\"form-grid\" data-v-51177b14>", "</div>", [_vm._ssrNode("<div class=\"form-group full-width\" data-v-51177b14><label class=\"form-label required\" data-v-51177b14><i class=\"fas fa-dollar-sign\" data-v-51177b14></i>\n              ຈຳນວນເງິນ\n            </label> <div class=\"input-group\" data-v-51177b14><input type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"Enter amount\" required=\"required\"" + _vm._ssrAttr("value", _vm.localForm.amount) + " class=\"form-control\" data-v-51177b14> <div class=\"input-group-append\" data-v-51177b14><span class=\"input-group-text\" data-v-51177b14>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.selectedCurrencyCode) + "\n                ") + "</span></div></div></div> <div class=\"form-group\" data-v-51177b14><label class=\"form-label\" data-v-51177b14><i class=\"fas fa-exchange-alt\" data-v-51177b14></i>\n              ອັດຕາແລກປ່ຽນ\n            </label> <input type=\"number\" step=\"0.000001\" min=\"0\" placeholder=\"ອັດຕາແລກປ່ຽນ (ທາງເລືອກ)\"" + _vm._ssrAttr("value", _vm.localForm.exchangeRate) + " class=\"form-control\" data-v-51177b14> <div class=\"field-hint\" data-v-51177b14><span class=\"exchange-rate-info\" data-v-51177b14><i class=\"fas fa-info-circle\" data-v-51177b14></i>\n                ອັດຕາແລກປ່ຽນປະຈຳວັນ\n              </span></div></div> <div class=\"form-group\" data-v-51177b14><label class=\"form-label required\" data-v-51177b14><i class=\"fas fa-calendar\" data-v-51177b14></i>\n              Booking date\n            </label> <input type=\"date\"" + _vm._ssrAttr("max", _vm.today) + " required=\"required\"" + _vm._ssrAttr("value", _vm.localForm.bookingDate) + " class=\"form-control\" data-v-51177b14></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-51177b14>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-51177b14><i class=\"fas fa-user\" data-v-51177b14></i>\n              ຜູ້ໃຊ້\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-51177b14>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.makerId,
      expression: "localForm.makerId"
    }],
    staticClass: "form-control custom-select",
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
        _vm.$set(_vm.localForm, "makerId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ລົງ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                  " + _vm._s(user.cus_name) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-51177b14><i class=\"fas fa-chevron-down\" data-v-51177b14></i></div>")], 2), _vm._ssrNode(" " + (_vm.users.length === 0 ? "<div class=\"field-hint error\" data-v-51177b14><i class=\"fas fa-exclamation-triangle\" data-v-51177b14></i>\n              No users available. Please contact administrator.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-51177b14>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-51177b14><i class=\"fas fa-building\" data-v-51177b14></i>\n              ກົມ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-51177b14>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.ministryId,
      expression: "localForm.ministryId"
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
        _vm.$set(_vm.localForm, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedMinistry]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກົມ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                  " + _vm._s(ministry.ministryCode + ' ' + ministry.ministryName) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-51177b14><i class=\"fas fa-chevron-down\" data-v-51177b14></i></div>")], 2), _vm._ssrNode(" " + (_vm.selectedMinistry ? "<div class=\"ministry-info\" data-v-51177b14><div class=\"ministry-details\" data-v-51177b14><div class=\"ministry-detail-item\" data-v-51177b14><i class=\"fas fa-building\" data-v-51177b14></i> <span class=\"ministry-name\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryName)) + "</span></div> " + (_vm.selectedMinistry.ministryCode ? "<div class=\"ministry-detail-item\" data-v-51177b14><i class=\"fas fa-tag\" data-v-51177b14></i> <span class=\"ministry-code\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryCode)) + "</span></div>" : "<!---->") + " " + (_vm.selectedMinistry.description ? "<div class=\"ministry-detail-item\" data-v-51177b14><i class=\"fas fa-info-circle\" data-v-51177b14></i> <span class=\"ministry-description\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.description)) + "</span></div>" : "<!---->") + " " + (_vm.selectedMinistry.email ? "<div class=\"ministry-detail-item\" data-v-51177b14><i class=\"fas fa-phone\" data-v-51177b14></i> <span class=\"ministry-contact\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.email)) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.ministries.length === 0 ? "<div class=\"field-hint warning\" data-v-51177b14><i class=\"fas fa-info-circle\" data-v-51177b14></i>\n              No ministries available. You can still create the advance\n              without selecting a ministry.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-51177b14>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-51177b14><i class=\"fas fa-coins\" data-v-51177b14></i>\n              ສະກຸນເງິນ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-51177b14>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.currencyId,
      expression: "localForm.currencyId"
    }],
    staticClass: "form-control custom-select",
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
        _vm.$set(_vm.localForm, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
    }, [_vm._v("\n                  " + _vm._s(currency.code) + " - " + _vm._s(currency.name) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-51177b14><i class=\"fas fa-chevron-down\" data-v-51177b14></i></div>")], 2), _vm._ssrNode(" " + (_vm.currencies.length === 0 ? "<div class=\"field-hint error\" data-v-51177b14><i class=\"fas fa-exclamation-triangle\" data-v-51177b14></i>\n              No currencies available. Please contact administrator.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group full-width\" data-v-51177b14>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-51177b14><i class=\"fas fa-university\" data-v-51177b14></i>\n              ບັນຊີທະນາຄານ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-51177b14>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.bankAccountId,
      expression: "localForm.bankAccountId"
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
        _vm.$set(_vm.localForm, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedBankAccount]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີທະນາຄານ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.filteredBankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                  " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + " (" + _vm._s(account.accountName) + ")\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-51177b14><i class=\"fas fa-chevron-down\" data-v-51177b14></i></div>")], 2), _vm._ssrNode(" " + (_vm.selectedBankAccount ? "<div class=\"bank-account-info\" data-v-51177b14><div class=\"bank-details\" data-v-51177b14><div class=\"bank-detail-item\" data-v-51177b14><i class=\"fas fa-building\" data-v-51177b14></i> <span data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.bankName)) + "</span> " + (_vm.selectedBankAccount.bankBranch ? "<span class=\"branch\" data-v-51177b14>" + _vm._ssrEscape("\n                    (" + _vm._s(_vm.selectedBankAccount.bankBranch) + ")\n                  ") + "</span>" : "<!---->") + "</div> <div class=\"bank-detail-item\" data-v-51177b14><i class=\"fas fa-credit-card\" data-v-51177b14></i> <span data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountNumber)) + "</span></div> <div class=\"bank-detail-item\" data-v-51177b14><i class=\"fas fa-tag\" data-v-51177b14></i> <span data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountType)) + "</span></div> <div class=\"bank-detail-item\" data-v-51177b14><i class=\"fas fa-coins\" data-v-51177b14></i> <span data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.currency)) + "</span></div></div></div>" : "<!---->") + " " + (_vm.bankAccounts.length === 0 ? "<div class=\"field-hint warning\" data-v-51177b14><i class=\"fas fa-info-circle\" data-v-51177b14></i>\n              No bank accounts available. You can still create the advance\n              without selecting a bank account.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-51177b14><label class=\"form-label\" data-v-51177b14><i class=\"fas fa-tag\" data-v-51177b14></i>\n              ຈຸດປະສົງ\n            </label> <input type=\"text\" placeholder=\"ເນື້ອໃນ ການອອກລາຍຈ່າຍ\" maxlength=\"255\"" + _vm._ssrAttr("value", _vm.localForm.purpose) + " class=\"form-control\" data-v-51177b14> <div class=\"field-hint\" data-v-51177b14><span class=\"text-counter\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(((_vm$localForm$purpose = _vm.localForm.purpose) === null || _vm$localForm$purpose === void 0 ? void 0 : _vm$localForm$purpose.length) || 0) + "/255") + "</span></div></div> <div class=\"form-group\" data-v-51177b14><label class=\"form-label\" data-v-51177b14><i class=\"fas fa-calendar-alt\" data-v-51177b14></i>\n              ວັນຄົບຮອບຄວນຊຳລະ\n            </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.localForm.dueDate) + " class=\"form-control\" data-v-51177b14></div> <div class=\"form-group full-width\" data-v-51177b14><label class=\"form-label\" data-v-51177b14><i class=\"fas fa-sticky-note\" data-v-51177b14></i>\n              ໂນ໊ດ\n            </label> <textarea rows=\"3\" placeholder=\"ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.localForm.note)) + "</textarea> <div class=\"field-hint\" data-v-51177b14><span class=\"text-counter\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(((_vm$localForm$note = _vm.localForm.note) === null || _vm$localForm$note === void 0 ? void 0 : _vm$localForm$note.length) || 0) + "/500") + "</span></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-51177b14><h6 data-v-51177b14><i class=\"fas fa-exclamation-circle\" data-v-51177b14></i>\n            Please fix the following errors:\n          </h6> <ul data-v-51177b14>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-51177b14>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-51177b14><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-51177b14><i class=\"fas fa-times\" data-v-51177b14></i>\n          ອອກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.saving || _vm.formLoading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-51177b14>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-51177b14></i>" : "<i" + _vm._ssrClass("fas", _vm.isEdit ? 'fa-save' : 'fa-plus') + " data-v-51177b14></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'Saving...' : _vm.isEdit ? 'ບັນທຶກ ການແກ້ໄຂ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue?vue&type=template&id=51177b14&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default: () => ({
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        exchangeRate: ''
      })
    },
    users: {
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
    formLoading: {
      type: Boolean,
      default: false
    },
    saving: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.initForm();
  },
  data() {
    return {
      localForm: {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        exchangeRate: ''
      },
      formErrors: []
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    selectedCurrencyCode() {
      if (!this.localForm.currencyId) return 'USD';
      const currency = this.currencies.find(c => c.id == this.localForm.currencyId);
      return currency ? currency.code : 'USD';
    },
    selectedBankAccount() {
      if (!this.localForm.bankAccountId) return null;
      return this.bankAccounts.find(account => account.id == this.localForm.bankAccountId);
    },
    selectedMinistry() {
      if (!this.localForm.ministryId) return null;
      return this.ministries.find(ministry => ministry.id == this.localForm.ministryId);
    },
    selectedCurrency() {
      if (!this.localForm.currencyId) return null;
      return this.currencies.find(currency => currency.id == this.localForm.currencyId);
    },
    // Filter bank accounts by selected currency if possible
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts;
      }
      const currencyCode = this.selectedCurrency.code;
      const filtered = this.bankAccounts.filter(account => account.currency === currencyCode || !account.currency);

      // If no accounts match the currency, return all accounts
      return filtered.length > 0 ? filtered : this.bankAccounts;
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    isFormValid() {
      // Debug each validation condition
      const validations = {
        'amount exists': !!this.localForm.amount,
        'amount > 0': this.localForm.amount && parseFloat(this.localForm.amount) > 0,
        'makerId exists': !!this.localForm.makerId,
        'currencyId exists': !!this.localForm.currencyId,
        'bookingDate exists': !!this.localForm.bookingDate,
        'users available': this.users.length > 0,
        'currencies available': this.currencies.length > 0,
        // ✅ NEW: Exchange rate validation (optional but must be valid if provided)
        'exchange rate valid': !this.localForm.exchangeRate || this.localForm.exchangeRate && !isNaN(parseFloat(this.localForm.exchangeRate)) && parseFloat(this.localForm.exchangeRate) > 0
      };

      // Log current form values for debugging
      console.group('🔍 Form Validation Debug');
      console.log('📋 Form Data:', {
        amount: this.localForm.amount,
        makerId: this.localForm.makerId,
        currencyId: this.localForm.currencyId,
        bookingDate: this.localForm.bookingDate,
        exchangeRate: this.localForm.exchangeRate,
        // ✅ NEW: Include exchange rate in debug
        usersCount: this.users.length,
        currenciesCount: this.currencies.length
      });

      // Check each validation and log failures
      const failedValidations = [];
      const passedValidations = [];
      Object.entries(validations).forEach(([key, isValid]) => {
        if (isValid) {
          passedValidations.push(key);
        } else {
          failedValidations.push(key);
        }
      });
      console.log('✅ Passed validations:', passedValidations);
      if (failedValidations.length > 0) {
        console.log('❌ Failed validations:', failedValidations);

        // ✅ NEW: Additional debug info for exchange rate
        if (failedValidations.includes('exchange rate valid')) {
          console.log('💱 Exchange Rate Debug:', {
            value: this.localForm.exchangeRate,
            type: typeof this.localForm.exchangeRate,
            parsed: parseFloat(this.localForm.exchangeRate),
            isNaN: isNaN(parseFloat(this.localForm.exchangeRate)),
            isPositive: parseFloat(this.localForm.exchangeRate) > 0
          });
        }
      }
      const isFormValid = Object.values(validations).every(Boolean);
      console.log(`📊 Overall form valid: ${isFormValid}`);
      console.groupEnd();
      return isFormValid;
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initForm();
      }
    },
    formData: {
      handler(newVal) {
        console.info(`Form data is changing...`);
        if (newVal) {
          this.localForm = {
            ...newVal
          };

          // ✅ Set booking date to today if it's empty and not in edit mode
          if (!this.isEdit && !this.localForm.bookingDate) {
            this.localForm.bookingDate = this.today;
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    initForm() {
      this.formErrors = [];
      console.info(`initiate form data called...`);
      if (this.isEdit && this.formData) {
        console.info(`formData is available...`);
        this.localForm = {
          ...this.formData
        };
      } else {
        this.resetForm();

        // Set default currency if available
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'LAK') || this.currencies[0];
          this.localForm.currencyId = defaultCurrency.id;
        }
      }
      if (!this.isEdit) {
        // Set default booking date to today for create mode
        this.localForm.makerId = this.user.id;
        this.localForm.bookingDate = this.today;
      }
    },
    resetForm() {
      this.localForm = {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: this.today,
        exchangeRate: ''
      };
    },
    validateForm() {
      this.formErrors = [];
      if (!this.localForm.amount || parseFloat(this.localForm.amount) <= 0) {
        this.formErrors.push('Amount is required and must be greater than 0');
      }
      if (!this.localForm.makerId) {
        this.formErrors.push('User selection is required');
      }
      if (!this.localForm.currencyId) {
        this.formErrors.push('Currency selection is required');
      }
      if (!this.localForm.bookingDate) {
        this.formErrors.push('Booking date is required');
      }
      if (this.localForm.purpose && this.localForm.purpose.length > 255) {
        this.formErrors.push('Purpose must not exceed 255 characters');
      }
      if (this.localForm.note && this.localForm.note.length > 500) {
        this.formErrors.push('Note must not exceed 500 characters');
      }
      if (this.localForm.exchangeRate && parseFloat(this.localForm.exchangeRate) <= 0) {
        this.formErrors.push('Exchange rate must be greater than 0 if provided');
      }
      if (this.users.length === 0) {
        this.formErrors.push('No users available. Please contact administrator.');
      }
      if (this.currencies.length === 0) {
        this.formErrors.push('No currencies available. Please contact administrator.');
      }
      return this.formErrors.length === 0;
    },
    updateSelectedCurrency() {
      // Reset bank account if currency changes and current bank account doesn't match
      console.info(`select currency: ${this.selectedCurrency.code} currency list ${JSON.stringify(this.currencies)}`);
      // reflect exchange rate in form (( update only it is in create mode))
      // if (!this.isEdit) {
      this.localForm.exchangeRate = this.currencies.find(currency => currency.code === this.selectedCurrency.code).rate || 1;
      // }

      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency;
        const selectedCurrency = this.selectedCurrency.code;
        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.localForm.bankAccountId = '';
        }
      }
      this.$emit('currency-changed', this.localForm.currencyId);
    },
    updateSelectedBankAccount() {
      this.$emit('bank-account-changed', this.localForm.bankAccountId);
    },
    updateSelectedMinistry() {
      this.$emit('ministry-changed', this.localForm.ministryId);
    },
    closeDialog() {
      this.$emit('close');
    },
    saveAdvance() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'Please fix the form errors');
        return;
      }

      // Clean up empty values
      const formData = {
        ...this.localForm
      };
      if (!formData.ministryId) delete formData.ministryId;
      if (!formData.bankAccountId) delete formData.bankAccountId;
      if (!formData.dueDate) delete formData.dueDate;
      if (!formData.purpose) delete formData.purpose;
      if (!formData.note) delete formData.note;
      if (!formData.exchangeRate) delete formData.exchangeRate;
      this.$emit('save', formData);
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentDialogvue_type_script_lang_js_ = (paymentDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(615)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51177b14",
  "a055272e"
  
)

/* harmony default export */ var paymentDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDetailDialog/index.vue?vue&type=template&id=0bf00b78&scoped=true&
var render = function render() {
  var _vm$details$currency, _vm$details$maker, _vm$details$checker;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog detail-dialog\" data-v-0bf00b78><div class=\"modal-header\" data-v-0bf00b78><div class=\"modal-title-section\" data-v-0bf00b78><i class=\"fas fa-file-invoice-dollar modal-icon\" data-v-0bf00b78></i> <h5 class=\"modal-title\" data-v-0bf00b78>ລາຍລະອຽດການອອກລາຍຈ່າຍ</h5></div> <div class=\"header-actions\" data-v-0bf00b78><button title=\"Print\" class=\"btn-icon\" data-v-0bf00b78><i class=\"fas fa-print\" data-v-0bf00b78></i></button> <button title=\"Download\" class=\"btn-icon\" data-v-0bf00b78><i class=\"fas fa-download\" data-v-0bf00b78></i></button> <button class=\"close-btn\" data-v-0bf00b78><i class=\"fas fa-times\" data-v-0bf00b78></i></button></div></div> <div class=\"modal-body detail-body\" data-v-0bf00b78>" + (_vm.loading ? "<div class=\"detail-loading\" data-v-0bf00b78><div class=\"spinner-small\" data-v-0bf00b78></div> <p data-v-0bf00b78>Loading details...</p></div>" : _vm.details ? "<div class=\"detail-content\" data-v-0bf00b78><div class=\"detail-status\" data-v-0bf00b78><span" + _vm._ssrClass(null, ['status-badge', 'status-' + _vm.details.status]) + " data-v-0bf00b78><i" + _vm._ssrClass("fas", _vm.getStatusIcon(_vm.details.status)) + " data-v-0bf00b78></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusInLao(_vm.details.status)) + "\n          ") + "</span></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-info-circle\" data-v-0bf00b78></i>\n            ຂໍ້ມູນເບື້ອງຕົ້ນ\n          </h6> <div class=\"detail-grid\" data-v-0bf00b78><div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ID</label> <span class=\"detail-value\" data-v-0bf00b78>" + _vm._ssrEscape("#" + _vm._s(_vm.details.id)) + "</span></div> <div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຈຳນວນເງິນ</label> <span class=\"detail-value amount-display\" data-v-0bf00b78>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatCurrency(_vm.details.amount)) + "\n                ") + "<small data-v-0bf00b78>" + _vm._ssrEscape(_vm._s((_vm$details$currency = _vm.details.currency) === null || _vm$details$currency === void 0 ? void 0 : _vm$details$currency.code)) + "</small></span></div> " + (_vm.details.exchangeRate ? "<div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ອັດຕາແລກປ່ຽນ</label> <span class=\"detail-value exchange-rate-display\" data-v-0bf00b78><i class=\"fas fa-exchange-alt\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatExchangeRate(_vm.details.exchangeRate)) + "\n              ") + "</span></div>" : "<!---->") + " <div class=\"detail-item full-width\" data-v-0bf00b78><label data-v-0bf00b78>ຈຸດປະສົງ</label> <span class=\"detail-value\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.details.purpose || 'No purpose specified')) + "</span></div></div></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-users\" data-v-0bf00b78></i>\n            ຜູ້ໃຊ້ ທີ່ກ່ຽວຂ້ອງ\n          </h6> <div class=\"detail-grid\" data-v-0bf00b78><div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຜູ້ລົງບັນຊີ</label> <span class=\"detail-value user-info\" data-v-0bf00b78><i class=\"fas fa-user\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$details$maker = _vm.details.maker) === null || _vm$details$maker === void 0 ? void 0 : _vm$details$maker.cus_name) || 'N/A') + "\n              ") + "</span></div> <div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຜູ້ອະນຸມັດ</label> <span class=\"detail-value user-info\" data-v-0bf00b78><i class=\"fas fa-user-check\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$details$checker = _vm.details.checker) === null || _vm$details$checker === void 0 ? void 0 : _vm$details$checker.cus_name) || 'Not yet approved') + "\n              ") + "</span></div></div></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-calendar\" data-v-0bf00b78></i>\n            ການເຄື່ອນໄຫວລາຍການ\n          </h6> <div class=\"timeline\" data-v-0bf00b78><div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon created\" data-v-0bf00b78><i class=\"fas fa-plus\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ລົງບັນຊີລາຍຈ່າຍ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.createdAt))) + "</span></div></div> " + (_vm.details.approvedAt ? "<div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon approved\" data-v-0bf00b78><i class=\"fas fa-check\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ອະນຸມັດແລ້ວ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.approvedAt))) + "</span></div></div>" : "<!---->") + " " + (_vm.details.dueDate ? "<div class=\"timeline-item\" data-v-0bf00b78><div" + _vm._ssrClass("timeline-icon due", {
    overdue: _vm.isOverdue(_vm.details.dueDate)
  }) + " data-v-0bf00b78><i class=\"fas fa-clock\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ວັນຄົບຮອບຄວນຊຳລະ</label> <span" + _vm._ssrClass("timeline-date", {
    overdue: _vm.isOverdue(_vm.details.dueDate)
  }) + " data-v-0bf00b78>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatDateTime(_vm.details.dueDate)) + "\n                  ") + (_vm.isOverdue(_vm.details.dueDate) ? "<span class=\"overdue-badge\" data-v-0bf00b78><i class=\"fas fa-exclamation-triangle\" data-v-0bf00b78></i> Overdue\n                  </span>" : "<!---->") + "</span></div></div>" : "<!---->") + " " + (_vm.details.settledAt ? "<div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon settled\" data-v-0bf00b78><i class=\"fas fa-money-bill\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ຮັບຊຳລະ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.settledAt))) + "</span></div></div>" : "<!---->") + "</div></div> " + (_vm.details.note ? "<div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-sticky-note\" data-v-0bf00b78></i>\n            Notes\n          </h6> <div class=\"notes-content\" data-v-0bf00b78>" + _vm._ssrEscape("\n            " + _vm._s(_vm.details.note) + "\n          ") + "</div></div>" : "<!---->") + " " + (_vm.details.history && _vm.details.history.length > 0 ? "<div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-history\" data-v-0bf00b78></i>\n            Action History\n          </h6> <div class=\"history-list\" data-v-0bf00b78>" + _vm._ssrList(_vm.details.history, function (history, index) {
    return "<div class=\"history-item\" data-v-0bf00b78><div class=\"history-icon\" data-v-0bf00b78><i" + _vm._ssrClass("fas", _vm.getHistoryIcon(history.action)) + " data-v-0bf00b78></i></div> <div class=\"history-content\" data-v-0bf00b78><span class=\"history-action\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(history.action)) + "</span> <span class=\"history-user\" data-v-0bf00b78>" + _vm._ssrEscape("by " + _vm._s(history.user)) + "</span> <span class=\"history-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(history.createdAt))) + "</span></div></div>";
  }) + "</div></div>" : "<!---->") + "</div>" : "<div class=\"detail-error\" data-v-0bf00b78><i class=\"fas fa-exclamation-triangle\" data-v-0bf00b78></i> <p data-v-0bf00b78>Failed to load advance details</p> <button class=\"btn btn-primary btn-sm\" data-v-0bf00b78><i class=\"fas fa-redo\" data-v-0bf00b78></i> Try Again\n        </button></div>") + "</div> <div class=\"modal-footer detail-footer\" data-v-0bf00b78><button class=\"btn btn-secondary close-detail-btn\" data-v-0bf00b78><i class=\"fas fa-times\" data-v-0bf00b78></i>\n        Close\n      </button> <div class=\"detail-actions\" data-v-0bf00b78>" + (_vm.details && _vm.details.status === 'pending' ? "<button title=\"Edit\" class=\"btn btn-warning action-btn\" data-v-0bf00b78><i class=\"fas fa-edit\" data-v-0bf00b78></i></button>" : "<!---->") + " " + (_vm.details && _vm.details.status === 'pending' ? "<button title=\"Approve\" class=\"btn btn-success action-btn\" data-v-0bf00b78><i class=\"fas fa-check\" data-v-0bf00b78></i></button>" : "<!---->") + " " + (_vm.details && _vm.details.status === 'approved' ? "<button title=\"Create Settlement\" class=\"btn btn-success action-btn\" data-v-0bf00b78><i class=\"fas fa-file-invoice-dollar\" data-v-0bf00b78></i></button>" : "<!---->") + "</div></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue?vue&type=template&id=0bf00b78&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDetailDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentDetailDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceDetailDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    details: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    statusLabels: {
      type: Object,
      default: () => ({
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ',
        cancelled: 'ຍົກເລີກ'
      })
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    printDetails() {
      this.$emit('print');
    },
    downloadDetails() {
      this.$emit('download');
    },
    retryLoad() {
      this.$emit('retry-load');
    },
    editAdvance() {
      this.$emit('edit', this.details);
    },
    approveAdvance() {
      this.$emit('approve', this.details);
    },
    createSettlement() {
      this.$emit('create-settlement', this.details);
    },
    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase();
    },
    getStatusIcon(status) {
      const icons = {
        pending: 'fa-clock',
        approved: 'fa-check-circle',
        settled: 'fa-money-bill-wave',
        rejected: 'fa-times-circle',
        cancelled: 'fa-ban'
      };
      return icons[status] || 'fa-question-circle';
    },
    getHistoryIcon(action) {
      const icons = {
        created: 'fa-plus',
        updated: 'fa-edit',
        approved: 'fa-check',
        settled: 'fa-money-bill',
        deleted: 'fa-trash',
        rejected: 'fa-times',
        cancelled: 'fa-ban'
      };
      return icons[action] || 'fa-history';
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatExchangeRate(rate) {
      if (!rate) return 'N/A';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 6
      }).format(rate);
    },
    formatDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentDetailDialogvue_type_script_lang_js_ = (paymentDetailDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(617)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentDetailDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0bf00b78",
  "abe22b4c"
  
)

/* harmony default export */ var paymentDetailDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentVoucher/index.vue?vue&type=template&id=33ecff44&scoped=true&
var render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$check, _vm$voucherData$maker, _vm$voucherData$maker2, _vm$voucherData$curre6, _vm$voucherData$curre7, _vm$voucherData$curre8, _vm$voucherData$curre9, _vm$voucherData$maker3, _vm$voucherData$check2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.showPrintDialog ? "<div class=\"modal-overlay\" data-v-33ecff44><div class=\"modal-content\" data-v-33ecff44><div class=\"modal-header\" data-v-33ecff44><h3 data-v-33ecff44>ພິມໃບຈ່າຍສົດອອກຄັງ</h3> <button class=\"close-btn\" data-v-33ecff44><i class=\"fas fa-times\" data-v-33ecff44></i></button></div> <div class=\"modal-body\" data-v-33ecff44><div id=\"voucher-print\" class=\"voucher-container\" data-v-33ecff44><div class=\"voucher-header\" data-v-33ecff44><div class=\"company-info\" data-v-33ecff44><div class=\"company-name\" data-v-33ecff44>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-33ecff44>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div> <div class=\"amount-line\" data-v-33ecff44>.........(000)..........</div></div> <div class=\"voucher-number\" data-v-33ecff44><div class=\"number-box\" data-v-33ecff44><span class=\"number-label\" data-v-33ecff44>No</span> <span class=\"number-value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div></div></div> <div class=\"voucher-title\" data-v-33ecff44>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-33ecff44><div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ອີງໃສ່ໃບ ຖອນ/ສະເຫນີ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເລກທີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.voucherData.id || 'N/A')) + "</span> <span class=\"label\" data-v-33ecff44>ລົງວັນທີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-33ecff44>ເດືອນ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-33ecff44>ປີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຄັງເງິນສົດ, ກະຊວງ ໂຍທາທິການ ແລະ ຂົນສົ່ງ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ໄດ້ຈ່າຍເງິນ </span> <label data-v-33ecff44><input type=\"checkbox\" data-v-33ecff44></label> <span class=\"label\" data-v-33ecff44> ສົດ </span> <label data-v-33ecff44><input type=\"checkbox\" data-v-33ecff44></label> <span class=\"label\" data-v-33ecff44> ແຊັກເລກທີ່ </span> <span class=\"dotted-line\" data-v-33ecff44></span> <div class=\"currency-options\" data-v-33ecff44><label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-33ecff44>\n                  LAK</label> <label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-33ecff44>\n                  THB</label> <label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-33ecff44>\n                  USD</label></div></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ໃຫ້ທ່ານ</span> <span class=\"dotted-line\" data-v-33ecff44></span> <span class=\"label\" data-v-33ecff44>ເລກບັດປະຈຳຕົວ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ສັງກັດຢູ່ພາກສ່ວນ ກົມ/ກອງ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເນື້ອໃນລາຍຈ່າຍ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44></span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44></span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈຳນວນ</span> <span class=\"amount-display\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.name) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.code))) + "</span></div> <div class=\"detail-row description\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເນື້ອໃນລາຍການ</span> <div class=\"description-content\" data-v-33ecff44>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.note || 'ບໍ່ມີຫມາຍເຫດ') + "\n              ") + "</div></div></div> <div class=\"signature-section\" data-v-33ecff44><div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຫົວໜ້າພະແນກ ຄັງເງິນສົດ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44></div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ຮັບເງິນ</div> <div class=\"signature-line\" data-v-33ecff44></div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ນາຍບັນຊີ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44></div></div></div></div></div> <div class=\"modal-footer\" data-v-33ecff44><button class=\"btn btn-secondary\" data-v-33ecff44><i class=\"fas fa-times\" data-v-33ecff44></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-33ecff44><i class=\"fas fa-print\" data-v-33ecff44></i>\n          ພິມ\n        </button></div></div></div>" : "<!---->") + " <div class=\"print-only\"" + _vm._ssrStyle(null, null, {
    display: false ? undefined : 'none'
  }) + " data-v-33ecff44><div class=\"voucher-container print-version\" data-v-33ecff44><div class=\"voucher-header\" data-v-33ecff44><div class=\"company-info\" data-v-33ecff44><div class=\"company-name\" data-v-33ecff44>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</div> <div class=\"department\" data-v-33ecff44>ກົມການເງິນ ແລະ ສິນເຊື່ອ</div> <div class=\"sub-department\" data-v-33ecff44>\n            ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ\n          </div> <div class=\"amount-line\" data-v-33ecff44>.........(000)..........</div></div> <div class=\"voucher-number\" data-v-33ecff44><div class=\"number-box\" data-v-33ecff44><span class=\"number-label\" data-v-33ecff44>No</span> <span class=\"number-value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div></div></div> <div class=\"voucher-title\" data-v-33ecff44>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-33ecff44><div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈ່າຍໃຫ້ຫຼືຮັບເອົາ</span> <span class=\"dotted-line\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$maker = _vm.voucherData.maker) === null || _vm$voucherData$maker === void 0 ? void 0 : _vm$voucherData$maker.cus_name) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເລກທີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$maker2 = _vm.voucherData.maker) === null || _vm$voucherData$maker2 === void 0 ? void 0 : _vm$voucherData$maker2.cus_id) || 'N/A')) + "</span> <span class=\"label\" data-v-33ecff44>ວັນທີນີ້</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-33ecff44>ເດືອນ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-33ecff44>ປີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span> <div class=\"currency-options\" data-v-33ecff44><label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre6 = _vm.voucherData.currency) === null || _vm$voucherData$curre6 === void 0 ? void 0 : _vm$voucherData$curre6.code) === 'LAK') + " data-v-33ecff44>\n              LAK</label> <label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre7 = _vm.voucherData.currency) === null || _vm$voucherData$curre7 === void 0 ? void 0 : _vm$voucherData$curre7.code) === 'THB') + " data-v-33ecff44>\n              THB</label> <label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre8 = _vm.voucherData.currency) === null || _vm$voucherData$curre8 === void 0 ? void 0 : _vm$voucherData$curre8.code) === 'USD') + " data-v-33ecff44>\n              USD</label></div></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈຳນວນ</span> <span class=\"amount-display\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre9 = _vm.voucherData.currency) === null || _vm$voucherData$curre9 === void 0 ? void 0 : _vm$voucherData$curre9.name) || 'N/A')) + "</span></div> <div class=\"detail-row description\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເນື້ອໃນລາຍການ</span> <div class=\"description-content\" data-v-33ecff44>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.note || 'ບໍ່ມີຫມາຍເຫດ') + "\n          ") + "</div></div></div> <div class=\"signature-section\" data-v-33ecff44><div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ຮັບເງິນຂຶ້ນເຊັນ ຊື່ເຕັມ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$maker3 = _vm.voucherData.maker) === null || _vm$voucherData$maker3 === void 0 ? void 0 : _vm$voucherData$maker3.cus_name) || '') + "\n          ") + "</div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ສົ່ງເງິນ</div> <div class=\"signature-line\" data-v-33ecff44></div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-line\" data-v-33ecff44></div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ນາຍຄົນຈັງ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$check2 = _vm.voucherData.checker) === null || _vm$voucherData$check2 === void 0 ? void 0 : _vm$voucherData$check2.cus_name) || '') + "\n          ") + "</div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=template&id=33ecff44&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentVoucher/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentVouchervue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentVouchervue_type_script_lang_js_ = (paymentVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(619)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentVouchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33ecff44",
  "36e13303"
  
)

/* harmony default export */ var paymentVoucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditDialog/index.vue?vue&type=template&id=5c476a8a&scoped=true&
var render = function render() {
  var _vm$auditTrail$, _vm$auditTrail$2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog audit-dialog\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"modal-header audit-header\" data-v-5c476a8a><div class=\"modal-title-section\" data-v-5c476a8a><i class=\"fas fa-history modal-icon\" data-v-5c476a8a></i> <h5 class=\"modal-title\" data-v-5c476a8a>" + _vm._ssrEscape("\n          ປະຫວັດການປ່ຽນແປງ - " + _vm._s(_vm.recordTitle) + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-5c476a8a><i class=\"fas fa-times\" data-v-5c476a8a></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-5c476a8a>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-container\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-5c476a8a></div> <p data-v-5c476a8a>ກຳລັງໂຫຼດປະຫວັດການປ່ຽນແປງ...</p>")], 2) : _vm.error ? _vm._ssrNode("<div class=\"error-container\" data-v-5c476a8a><div class=\"error-icon\" data-v-5c476a8a><i class=\"fas fa-exclamation-triangle\" data-v-5c476a8a></i></div> <h4 data-v-5c476a8a>ເກີດຂໍ້ຜິດພາດ</h4> <p data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p> <button class=\"btn btn-primary btn-sm\" data-v-5c476a8a><i class=\"fas fa-redo\" data-v-5c476a8a></i>\n          ລອງໃໝ່\n        </button></div>") : _vm.auditTrail.length === 0 ? _vm._ssrNode("<div class=\"no-data-container\" data-v-5c476a8a><div class=\"no-data-icon\" data-v-5c476a8a><i class=\"fas fa-history\" data-v-5c476a8a></i></div> <h4 data-v-5c476a8a>ບໍ່ມີປະຫວັດການປ່ຽນແປງ</h4> <p data-v-5c476a8a>ບໍ່ພົບປະຫວັດການປ່ຽນແປງສຳລັບບັນຊີນີ້</p></div>") : _vm._ssrNode("<div class=\"audit-content\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"audit-summary\" data-v-5c476a8a><div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-list\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ລວມການປ່ຽນແປງ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.length)) + "</div></div></div> <div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-clock\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ການປ່ຽນແປງລ່າສຸດ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_vm$auditTrail$ = _vm.auditTrail[0]) === null || _vm$auditTrail$ === void 0 ? void 0 : _vm$auditTrail$.changedAt))) + "</div></div></div> <div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-user\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ຜູ້ປ່ຽນແປງລ່າສຸດ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(((_vm$auditTrail$2 = _vm.auditTrail[0]) === null || _vm$auditTrail$2 === void 0 ? void 0 : _vm$auditTrail$2.changedBy) || 'ລະບົບ')) + "</div></div></div></div> "), _vm._ssrNode("<div class=\"audit-controls\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"filter-controls\" data-v-5c476a8a>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionFilter,
      expression: "actionFilter"
    }],
    staticClass: "form-control filter-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.actionFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.filterAuditTrail]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກການດຳເນີນການ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREATE"
    }
  }, [_vm._v("ສ້າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UPDATE"
    }
  }, [_vm._v("ແກ້ໄຂ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "APPROVE"
    }
  }, [_vm._v("ອະນຸມັດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SETTLE"
    }
  }, [_vm._v("ຊຳລະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DELETE"
    }
  }, [_vm._v("ລົບ")])]), _vm._ssrNode(" <button class=\"btn btn-secondary btn-sm\" data-v-5c476a8a><i class=\"fas fa-download\" data-v-5c476a8a></i>\n              ສົ່ງອອກ\n            </button>")], 2)]), _vm._ssrNode(" <div class=\"audit-timeline\" data-v-5c476a8a>" + _vm._ssrList(_vm.filteredAuditTrail, function (item, index) {
    return "<div" + _vm._ssrClass("timeline-item", {
      'expandable': item.totalChanges > 0
    }) + " data-v-5c476a8a><div class=\"timeline-marker\" data-v-5c476a8a><i" + _vm._ssrClass(null, _vm.getActionIcon(item.action)) + " data-v-5c476a8a></i></div> <div class=\"timeline-content\" data-v-5c476a8a><div class=\"timeline-header\" data-v-5c476a8a><div class=\"timeline-main-info\" data-v-5c476a8a><div class=\"timeline-action\" data-v-5c476a8a><span" + _vm._ssrClass(null, ['action-badge', item.action.toLowerCase()]) + " data-v-5c476a8a>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getActionInLao(item.action)) + "\n                    ") + "</span> <span class=\"timeline-time\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(item.changedAt))) + "</span></div> <div class=\"timeline-user\" data-v-5c476a8a><i class=\"fas fa-user-circle\" data-v-5c476a8a></i>" + _vm._ssrEscape("\n                    " + _vm._s(item.changedBy || 'ລະບົບ') + "\n                  ") + "</div></div> " + (item.totalChanges > 0 ? "<div class=\"timeline-toggle\" data-v-5c476a8a><span class=\"changes-count\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(item.totalChanges) + " ການປ່ຽນແປງ") + "</span> <i" + _vm._ssrClass("toggle-icon", ['fas', item.expanded ? 'fa-chevron-up' : 'fa-chevron-down']) + " data-v-5c476a8a></i></div>" : "<!---->") + "</div> " + (item.reason ? "<div class=\"timeline-reason\" data-v-5c476a8a><i class=\"fas fa-comment\" data-v-5c476a8a></i> <span data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(item.reason)) + "</span></div>" : "<!---->") + " " + (item.expanded && item.keyChanges && item.keyChanges.length > 0 ? "<div class=\"timeline-details\" data-v-5c476a8a><div class=\"changes-list\" data-v-5c476a8a><h6 data-v-5c476a8a>ລາຍລະອຽດການປ່ຽນແປງ:</h6> " + _vm._ssrList(item.keyChanges, function (change) {
      return "<div class=\"change-item\" data-v-5c476a8a><div class=\"change-field\" data-v-5c476a8a><i" + _vm._ssrClass(null, _vm.getFieldIcon(change.field)) + " data-v-5c476a8a></i>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getFieldNameInLao(change.field)) + "\n                    ") + "</div> <div class=\"change-values\" data-v-5c476a8a><div class=\"old-value\" data-v-5c476a8a><span class=\"value-label\" data-v-5c476a8a>ເກົ່າ:</span> <span class=\"value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatValue(change.field, change.oldValue))) + "</span></div> <div class=\"arrow\" data-v-5c476a8a><i class=\"fas fa-arrow-right\" data-v-5c476a8a></i></div> <div class=\"new-value\" data-v-5c476a8a><span class=\"value-label\" data-v-5c476a8a>ໃໝ່:</span> <span class=\"value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatValue(change.field, change.newValue))) + "</span></div></div></div>";
    }) + "</div></div>" : "<!---->") + " " + (item.totalChanges > 3 && item.expanded ? "<div class=\"view-full-details\" data-v-5c476a8a><button class=\"btn btn-link btn-sm\" data-v-5c476a8a><i class=\"fas fa-eye\" data-v-5c476a8a></i>" + _vm._ssrEscape("\n                  ເບິ່ງລາຍລະອຽດທັງໝົດ (" + _vm._s(item.totalChanges) + " ການປ່ຽນແປງ)\n                ") + "</button></div>" : "<!---->") + "</div></div>";
  }) + "</div> " + (_vm.hasMoreData ? "<div class=\"load-more-container\" data-v-5c476a8a><button" + _vm._ssrAttr("disabled", _vm.loadingMore) + " class=\"btn btn-secondary\" data-v-5c476a8a>" + (_vm.loadingMore ? "<i class=\"fas fa-spinner fa-spin\" data-v-5c476a8a></i>" : "<i class=\"fas fa-plus\" data-v-5c476a8a></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.loadingMore ? 'ກຳລັງໂຫຼດ...' : 'ໂຫຼດເພີ່ມ') + "\n          ") + "</button></div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"modal-footer audit-footer\" data-v-5c476a8a><button" + _vm._ssrAttr("disabled", _vm.auditTrail.length < 2) + " class=\"btn btn-info\" data-v-5c476a8a><i class=\"fas fa-balance-scale\" data-v-5c476a8a></i>\n        ປຽບທຽບເວີຊັ່ນ\n      </button> <button class=\"btn btn-secondary\" data-v-5c476a8a><i class=\"fas fa-times\" data-v-5c476a8a></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue?vue&type=template&id=5c476a8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentAuditDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceAuditDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    recordId: {
      type: [Number, String],
      required: true
    },
    recordTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      auditTrail: [],
      filteredAuditTrail: [],
      loading: false,
      loadingMore: false,
      error: null,
      actionFilter: '',
      currentPage: 1,
      hasMoreData: false,
      // Lao translations
      actionLabels: {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      },
      fieldLabels: {
        amount: 'ຈຳນວນເງິນ',
        purpose: 'ຈຸດປະສົງ',
        status: 'ສະຖານະ',
        note: 'ໂນ໊ດ',
        dueDate: 'ວັນຄົບຮອບ',
        bookingDate: 'ວັນທີບັນຊີ',
        makerId: 'ຜູ້ລົງບັນຊີ',
        checkerId: 'ຜູ້ກວດ',
        currencyId: 'ສະກຸນເງິນ',
        bankAccountId: 'ບັນຊີທະນາຄານ',
        ministryId: 'ກະຊວງ',
        exchangeRate: 'ອັດຕາແລກປ່ຽນ',
        approvedAt: 'ວັນທີອະນຸມັດ'
      }
    };
  },
  watch: {
    show(newVal) {
      if (newVal && this.recordId) {
        this.loadAuditTrail();
      }
    },
    recordId(newVal) {
      if (newVal && this.show) {
        this.loadAuditTrail();
      }
    }
  },
  methods: {
    async loadAuditTrail() {
      this.loading = true;
      this.error = null;
      this.currentPage = 1;
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 20,
            offset: 0
          }
        });
        this.auditTrail = response.data.data.map(item => ({
          ...item,
          expanded: false
        }));
        this.hasMoreData = response.data.data.length === 20;
        this.filterAuditTrail();
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error loading audit trail:', error);
        this.error = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ';
      } finally {
        this.loading = false;
      }
    },
    async loadMoreAuditTrail() {
      this.loadingMore = true;
      this.currentPage++;
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 20,
            offset: (this.currentPage - 1) * 20
          }
        });
        const newItems = response.data.data.map(item => ({
          ...item,
          expanded: false
        }));
        this.auditTrail.push(...newItems);
        this.hasMoreData = newItems.length === 20;
        this.filterAuditTrail();
      } catch (error) {
        console.error('Error loading more audit trail:', error);
        this.currentPage--; // Revert page increment on error
      } finally {
        this.loadingMore = false;
      }
    },
    filterAuditTrail() {
      if (this.actionFilter) {
        this.filteredAuditTrail = this.auditTrail.filter(item => item.action === this.actionFilter);
      } else {
        this.filteredAuditTrail = [...this.auditTrail];
      }
    },
    toggleExpand(item) {
      if (item.totalChanges > 0) {
        this.$set(item, 'expanded', !item.expanded);
      }
    },
    getActionInLao(action) {
      return this.actionLabels[action] || action;
    },
    getFieldNameInLao(field) {
      return this.fieldLabels[field] || field;
    },
    getActionIcon(action) {
      const icons = {
        CREATE: 'fas fa-plus text-success',
        UPDATE: 'fas fa-edit text-warning',
        APPROVE: 'fas fa-check text-success',
        SETTLE: 'fas fa-money-bill text-info',
        DELETE: 'fas fa-trash text-danger'
      };
      return icons[action] || 'fas fa-circle';
    },
    getFieldIcon(field) {
      const icons = {
        amount: 'fas fa-dollar-sign',
        purpose: 'fas fa-tag',
        status: 'fas fa-flag',
        note: 'fas fa-sticky-note',
        dueDate: 'fas fa-calendar',
        bookingDate: 'fas fa-calendar-alt',
        makerId: 'fas fa-user',
        checkerId: 'fas fa-user-check',
        currencyId: 'fas fa-coins',
        bankAccountId: 'fas fa-university',
        ministryId: 'fas fa-building',
        exchangeRate: 'fas fa-exchange-alt',
        approvedAt: 'fas fa-check-circle'
      };
      return icons[field] || 'fas fa-info-circle';
    },
    formatValue(field, value) {
      if (value === null || value === undefined) {
        return 'ບໍ່ມີ';
      }
      if (field === 'amount') {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value);
      }
      if (field.includes('Date') || field.includes('At')) {
        return this.formatDate(value);
      }
      if (field === 'status') {
        const statusLabels = {
          pending: 'ຄ້າງອະນຸມັດ',
          approved: 'ອະນຸມັດແລ້ວ',
          settled: 'ຊຳລະແລ້ວ'
        };
        return statusLabels[value] || value;
      }
      return value.toString();
    },
    formatDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('lo-LA');
    },
    async exportAuditTrail() {
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 1000,
            offset: 0,
            format: 'csv'
          },
          responseType: 'blob'
        });
        const blob = new Blob([response.data], {
          type: 'text/csv'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `audit-trail-${this.recordId}-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('show-toast', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກຂໍ້ມູນ', 'error');
      }
    },
    compareVersions() {
      this.$emit('compare-versions', this.recordId);
    },
    viewFullDetails(item) {
      this.$emit('view-full-details', item);
    },
    closeDialog() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentAuditDialogvue_type_script_lang_js_ = (paymentAuditDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(621)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentAuditDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c476a8a",
  "2eaf8618"
  
)

/* harmony default export */ var paymentAuditDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentCompareDialog/index.vue?vue&type=template&id=e6a23e30&scoped=true&
var render = function render() {
  var _vm$recordData;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog comparison-dialog\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-e6a23e30><div class=\"modal-title-section\" data-v-e6a23e30><i class=\"fas fa-code-compare modal-icon\" data-v-e6a23e30></i> <h5 class=\"modal-title\" data-v-e6a23e30>" + _vm._ssrEscape("\n          ປຽບທຽບເວີຊັ່ນ - " + _vm._s(((_vm$recordData = _vm.recordData) === null || _vm$recordData === void 0 ? void 0 : _vm$recordData.purpose) || `Record #${_vm.recordId}`) + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-e6a23e30><i class=\"fas fa-times\" data-v-e6a23e30></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-e6a23e30>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-state\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-e6a23e30></div> <p data-v-e6a23e30>ກຳລັງໂຫຼດຂໍ້ມູນສຳລັບປຽບທຽບ...</p>")], 2) : _vm.error ? _vm._ssrNode("<div class=\"error-state\" data-v-e6a23e30><div class=\"error-icon\" data-v-e6a23e30><i class=\"fas fa-exclamation-triangle\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ</h6> <p data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p> <button class=\"btn btn-primary btn-sm\" data-v-e6a23e30><i class=\"fas fa-redo\" data-v-e6a23e30></i>\n          ລອງໃໝ່\n        </button></div>") : _vm._ssrNode("<div class=\"comparison-content\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"version-selector\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"selector-group\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<label data-v-e6a23e30>ເວີຊັ່ນທີ່ 1 (ເກົ່າ):</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedVersion1,
      expression: "selectedVersion1"
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
        _vm.selectedVersion1 = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.loadComparison]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກເວີຊັ່ນ...")]), _vm._v(" "), _vm._l(_vm.availableVersions, function (version) {
    return _c('option', {
      key: version.id,
      attrs: {
        "disabled": version.id === _vm.selectedVersion2
      },
      domProps: {
        "value": version.id
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getVersionLabel(version)) + "\n              ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"comparison-arrow\" data-v-e6a23e30><i class=\"fas fa-exchange-alt\" data-v-e6a23e30></i></div> "), _vm._ssrNode("<div class=\"selector-group\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<label data-v-e6a23e30>ເວີຊັ່ນທີ່ 2 (ໃໝ່):</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedVersion2,
      expression: "selectedVersion2"
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
        _vm.selectedVersion2 = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.loadComparison]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກເວີຊັ່ນ...")]), _vm._v(" "), _vm._l(_vm.availableVersions, function (version) {
    return _c('option', {
      key: version.id,
      attrs: {
        "disabled": version.id === _vm.selectedVersion1
      },
      domProps: {
        "value": version.id
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getVersionLabel(version)) + "\n              ")]);
  })], 2)], 2)], 2), _vm._ssrNode(" " + (_vm.comparisonData ? "<div class=\"comparison-results\" data-v-e6a23e30><div class=\"comparison-summary\" data-v-e6a23e30><div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-edit\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-number\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(Object.keys(_vm.comparisonData.differences || {}).length)) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ການປ່ຽນແປງ</div></div></div> <div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-calendar\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-number\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getTimeDifference())) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ວັນຫ່າງກັນ</div></div></div> <div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-user\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getDifferentUsers())) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ຜູ້ປ່ຽນແປງ</div></div></div></div> " + (Object.keys(_vm.comparisonData.differences || {}).length === 0 ? "<div class=\"no-differences\" data-v-e6a23e30><div class=\"no-diff-icon\" data-v-e6a23e30><i class=\"fas fa-equals\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ບໍ່ມີການປ່ຽນແປງ</h6> <p data-v-e6a23e30>ເວີຊັ່ນທັງສອງມີຂໍ້ມູນຄືກັນ</p></div>" : "<div class=\"differences-table\" data-v-e6a23e30><h6 data-v-e6a23e30><i class=\"fas fa-list\" data-v-e6a23e30></i>\n              ລາຍລະອຽດການປ່ຽນແປງ\n            </h6> <div class=\"table-container\" data-v-e6a23e30><table class=\"comparison-table\" data-v-e6a23e30><thead data-v-e6a23e30><tr data-v-e6a23e30><th class=\"field-header\" data-v-e6a23e30>ຟິວ</th> <th class=\"version-header version1\" data-v-e6a23e30><div class=\"version-info\" data-v-e6a23e30><div class=\"version-label\" data-v-e6a23e30>" + _vm._ssrEscape("ເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion1))) + "</div> <div class=\"version-date\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getVersionDate(_vm.selectedVersion1))) + "</div></div></th> <th class=\"version-header version2\" data-v-e6a23e30><div class=\"version-info\" data-v-e6a23e30><div class=\"version-label\" data-v-e6a23e30>" + _vm._ssrEscape("ເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion2))) + "</div> <div class=\"version-date\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getVersionDate(_vm.selectedVersion2))) + "</div></div></th></tr></thead> <tbody data-v-e6a23e30>" + _vm._ssrList(_vm.comparisonData.differences, function (diff, field) {
    return "<tr class=\"diff-row\" data-v-e6a23e30><td class=\"field-cell\" data-v-e6a23e30><div class=\"field-info\" data-v-e6a23e30><i" + _vm._ssrClass(null, _vm.getFieldIcon(field)) + " data-v-e6a23e30></i> <span class=\"field-name\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getFieldLabel(field))) + "</span></div></td> <td class=\"value-cell version1\" data-v-e6a23e30><div class=\"value-content old-value\" data-v-e6a23e30><div class=\"value-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.formatValue(diff.current))) + "</div></div></td> <td class=\"value-cell version2\" data-v-e6a23e30><div class=\"value-content new-value\" data-v-e6a23e30><div class=\"value-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.formatValue(diff.version))) + "</div> <div class=\"change-indicator\" data-v-e6a23e30><i class=\"fas fa-arrow-left\" data-v-e6a23e30></i></div></div></td></tr>";
  }) + "</tbody></table></div></div>") + " " + (Object.keys(_vm.comparisonData.differences || {}).length > 0 ? "<div class=\"comparison-actions\" data-v-e6a23e30>" + (_vm.canRestore ? "<button class=\"btn btn-warning\" data-v-e6a23e30><i class=\"fas fa-undo\" data-v-e6a23e30></i>" + _vm._ssrEscape("\n              ກັບຄືນໄປເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion1)) + "\n            ") + "</button>" : "<!---->") + " <button class=\"btn btn-secondary\" data-v-e6a23e30><i class=\"fas fa-download\" data-v-e6a23e30></i>\n              ສົ່ງອອກການປຽບທຽບ\n            </button></div>" : "<!---->") + "</div>" : "<div class=\"select-versions-prompt\" data-v-e6a23e30><div class=\"prompt-icon\" data-v-e6a23e30><i class=\"fas fa-hand-pointer\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ເລືອກເວີຊັ່ນເພື່ອປຽບທຽບ</h6> <p data-v-e6a23e30>ກະລຸນາເລືອກສອງເວີຊັ່ນທີ່ທ່ານຕ້ອງການປຽບທຽບ</p></div>"))], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-e6a23e30><button" + _vm._ssrAttr("disabled", !_vm.selectedVersion1 || !_vm.selectedVersion2) + " class=\"btn btn-outline\" data-v-e6a23e30><i class=\"fas fa-exchange-alt\" data-v-e6a23e30></i>\n        ສະຫຼັບເວີຊັ່ນ\n      </button> <button class=\"btn btn-primary\" data-v-e6a23e30><i class=\"fas fa-times\" data-v-e6a23e30></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue?vue&type=template&id=e6a23e30&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentCompareDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentCompareDialogvue_type_script_lang_js_ = ({
  name: 'VersionComparisonDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    recordId: {
      type: [Number, String],
      required: true
    },
    recordData: {
      type: Object,
      default: null
    },
    initialComparison: {
      type: Object,
      default: null
    },
    canRestore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      error: null,
      availableVersions: [],
      selectedVersion1: null,
      selectedVersion2: null,
      comparisonData: null,
      fieldLabels: {
        amount: 'ຈຳນວນເງິນ',
        purpose: 'ຈຸດປະສົງ',
        status: 'ສະຖານະ',
        dueDate: 'ວັນຄົບກຳນົດ',
        note: 'ໝາຍເຫດ',
        ministryId: 'ກະຊວງ',
        bankAccountId: 'ບັນຊີທະນາຄານ',
        currencyId: 'ສະກຸນເງິນ',
        bookingDate: 'ວັນທີ່ລົງບັນຊີ',
        exchangeRate: 'ອັດຕາແລກປ່ຽນ',
        makerId: 'ຜູ້ລົງບັນຊີ',
        checkerId: 'ຜູ້ອະນຸມັດ',
        approvedAt: 'ວັນທີ່ອະນຸມັດ'
      }
    };
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeDialog();
      }
    },
    initialComparison: {
      handler(newVal) {
        if (newVal && this.show) {
          this.setupInitialComparison();
        }
      },
      immediate: true
    }
  },
  methods: {
    async initializeDialog() {
      if (this.initialComparison) {
        this.setupInitialComparison();
      } else {
        await this.fetchAvailableVersions();
      }
    },
    setupInitialComparison() {
      if (this.initialComparison.current && this.initialComparison.previous) {
        this.selectedVersion1 = this.initialComparison.previous.id;
        this.selectedVersion2 = this.initialComparison.current.id;

        // Mock the comparison data structure
        this.comparisonData = {
          currentVersion: this.initialComparison.current.version || 1,
          compareVersion: this.initialComparison.previous.version || 1,
          differences: this.calculateDifferences(this.initialComparison.previous, this.initialComparison.current)
        };
      }
    },
    calculateDifferences(version1, version2) {
      const differences = {};
      const fieldsToCompare = Object.keys(this.fieldLabels);
      fieldsToCompare.forEach(field => {
        var _version1$data, _version2$data;
        const val1 = ((_version1$data = version1.data) === null || _version1$data === void 0 ? void 0 : _version1$data[field]) || version1[field];
        const val2 = ((_version2$data = version2.data) === null || _version2$data === void 0 ? void 0 : _version2$data[field]) || version2[field];
        if (val1 !== val2) {
          differences[field] = {
            current: val2,
            version: val1
          };
        }
      });
      return differences;
    },
    async fetchAvailableVersions() {
      if (!this.recordId) return;
      this.loading = true;
      this.error = null;
      try {
        const {
          data
        } = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`);
        if (data.success) {
          this.availableVersions = data.data.map(entry => ({
            id: entry.id,
            version: entry.version || 1,
            action: entry.action,
            changedAt: entry.changedAt,
            changedBy: entry.changedBy,
            data: entry.newData || entry.oldData || {}
          }));
        } else {
          throw new Error(data.message || 'Failed to fetch versions');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error fetching versions:', error);
        this.error = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message;
      } finally {
        this.loading = false;
      }
    },
    async loadComparison() {
      if (!this.selectedVersion1 || !this.selectedVersion2) {
        this.comparisonData = null;
        return;
      }
      try {
        // For now, calculate differences locally
        // In a real implementation, you might want to call an API endpoint
        const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
        const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
        if (version1 && version2) {
          this.comparisonData = {
            currentVersion: version2.version,
            compareVersion: version1.version,
            differences: this.calculateDifferences(version1, version2)
          };
        }
      } catch (error) {
        console.error('Error loading comparison:', error);
        this.error = 'ເກີດຂໍ້ຜິດພາດໃນການປຽບທຽບ';
      }
    },
    getVersionLabel(version) {
      const actionLabel = {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      };
      const date = new Date(version.changedAt).toLocaleDateString('lo-LA');
      const action = actionLabel[version.action] || version.action;
      return `v${version.version} - ${action} (${date})`;
    },
    getVersionNumber(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      return (version === null || version === void 0 ? void 0 : version.version) || '?';
    },
    getVersionDate(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      return version ? new Date(version.changedAt).toLocaleDateString('lo-LA') : '';
    },
    getTimeDifference() {
      if (!this.selectedVersion1 || !this.selectedVersion2) return 0;
      const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
      const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
      if (version1 && version2) {
        const date1 = new Date(version1.changedAt);
        const date2 = new Date(version2.changedAt);
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }
      return 0;
    },
    getDifferentUsers() {
      if (!this.selectedVersion1 || !this.selectedVersion2) return 'N/A';
      const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
      const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
      if (version1 && version2) {
        if (version1.changedBy === version2.changedBy) {
          return version1.changedBy || 'ບໍ່ຮູ້';
        } else {
          return `${version1.changedBy || 'ບໍ່ຮູ້'} → ${version2.changedBy || 'ບໍ່ຮູ້'}`;
        }
      }
      return 'N/A';
    },
    getFieldIcon(field) {
      const icons = {
        amount: 'fas fa-dollar-sign',
        purpose: 'fas fa-tag',
        status: 'fas fa-flag',
        dueDate: 'fas fa-calendar',
        note: 'fas fa-sticky-note',
        ministryId: 'fas fa-building',
        bankAccountId: 'fas fa-university',
        currencyId: 'fas fa-coins',
        bookingDate: 'fas fa-calendar-day',
        exchangeRate: 'fas fa-exchange-alt',
        makerId: 'fas fa-user',
        checkerId: 'fas fa-user-check',
        approvedAt: 'fas fa-calendar-check'
      };
      return icons[field] || 'fas fa-info-circle';
    },
    getFieldLabel(field) {
      return this.fieldLabels[field] || field;
    },
    formatValue(value) {
      if (value === null || value === undefined) return 'N/A';
      if (typeof value === 'boolean') return value ? 'ແມ່ນ' : 'ບໍ່';
      if (typeof value === 'number') return value.toLocaleString();
      if (typeof value === 'string' && value.includes('T')) {
        // Likely a date
        try {
          return new Date(value).toLocaleDateString('lo-LA');
        } catch {
          return value;
        }
      }
      return String(value);
    },
    swapVersions() {
      const temp = this.selectedVersion1;
      this.selectedVersion1 = this.selectedVersion2;
      this.selectedVersion2 = temp;
      this.loadComparison();
    },
    restoreToVersion(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      if (version) {
        this.$emit('restore', version);
      }
    },
    async exportComparison() {
      if (!this.comparisonData) return;
      try {
        const csvContent = this.generateComparisonCSV();
        const blob = new Blob([csvContent], {
          type: 'text/csv;charset=utf-8;'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `comparison-${this.recordId}-v${this.getVersionNumber(this.selectedVersion1)}-v${this.getVersionNumber(this.selectedVersion2)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.$emit('success', 'ສົ່ງອອກການປຽບທຽບສຳເລັດ');
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ');
      }
    },
    generateComparisonCSV() {
      const headers = ['Field', 'Version 1 Value', 'Version 2 Value'];
      const rows = [headers];
      Object.entries(this.comparisonData.differences).forEach(([field, diff]) => {
        rows.push([this.getFieldLabel(field), this.formatValue(diff.version), this.formatValue(diff.current)]);
      });
      return rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    },
    closeDialog() {
      this.selectedVersion1 = null;
      this.selectedVersion2 = null;
      this.comparisonData = null;
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentCompareDialogvue_type_script_lang_js_ = (paymentCompareDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(623)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentCompareDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e6a23e30",
  "60dc4ca2"
  
)

/* harmony default export */ var paymentCompareDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditReportDialog/index.vue?vue&type=template&id=7e1ed358&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog reports-dialog\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-7e1ed358><div class=\"modal-title-section\" data-v-7e1ed358><i class=\"fas fa-chart-line modal-icon\" data-v-7e1ed358></i> <h5 class=\"modal-title\" data-v-7e1ed358>ລາຍງານປະຫວັດການປ່ຽນແປງ</h5></div> <button class=\"close-btn\" data-v-7e1ed358><i class=\"fas fa-times\" data-v-7e1ed358></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"tabs-container\" data-v-7e1ed358><div class=\"tabs\" data-v-7e1ed358>" + _vm._ssrList(_vm.reportTabs, function (tab) {
    return "<button" + _vm._ssrClass(null, ['tab-btn', {
      active: _vm.activeTab === tab.id
    }]) + " data-v-7e1ed358><i" + _vm._ssrClass(null, tab.icon) + " data-v-7e1ed358></i>" + _vm._ssrEscape("\n            " + _vm._s(tab.label) + "\n          ") + "</button>";
  }) + "</div></div> " + (_vm.activeTab === 'user-activity' ? "<div class=\"report-content\" data-v-7e1ed358><div class=\"report-header\" data-v-7e1ed358><h6 data-v-7e1ed358><i class=\"fas fa-users\" data-v-7e1ed358></i>\n            ລາຍງານກິດຈະກຳຜູ້ໃຊ້\n          </h6> <div class=\"date-filter\" data-v-7e1ed358><input type=\"date\"" + _vm._ssrAttr("value", _vm.userActivityFilter.startDate) + " class=\"form-control\" data-v-7e1ed358> <span data-v-7e1ed358>ຫາ</span> <input type=\"date\"" + _vm._ssrAttr("value", _vm.userActivityFilter.endDate) + " class=\"form-control\" data-v-7e1ed358> <button class=\"btn btn-primary btn-sm\" data-v-7e1ed358><i class=\"fas fa-search\" data-v-7e1ed358></i>\n              ຄົ້ນຫາ\n            </button></div></div> " + (_vm.userActivityLoading ? "<div class=\"loading-state\" data-v-7e1ed358><div class=\"spinner-sm\" data-v-7e1ed358></div> <span data-v-7e1ed358>ກຳລັງໂຫຼດຂໍ້ມູນ...</span></div>" : _vm.userActivityData.length > 0 ? "<div class=\"user-activity-content\" data-v-7e1ed358><div class=\"activity-summary\" data-v-7e1ed358><div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-user-friends\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-number\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.uniqueActiveUsers)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ຜູ້ໃຊ້ທີ່ມີກິດຈະກຳ</div></div></div> <div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-edit\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-number\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.totalActivities)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ລວມກິດຈະກຳ</div></div></div> <div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-crown\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-text\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.mostActiveUser)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ຜູ້ໃຊ້ທີ່ມີກິດຈະກຳສູງສຸດ</div></div></div></div> <div class=\"activity-table\" data-v-7e1ed358><table class=\"table\" data-v-7e1ed358><thead data-v-7e1ed358><tr data-v-7e1ed358><th data-v-7e1ed358>ຜູ້ໃຊ້</th> <th data-v-7e1ed358>ສ້າງ</th> <th data-v-7e1ed358>ແກ້ໄຂ</th> <th data-v-7e1ed358>ອະນຸມັດ</th> <th data-v-7e1ed358>ຊຳລະ</th> <th data-v-7e1ed358>ລົບ</th> <th data-v-7e1ed358>ລວມ</th> <th data-v-7e1ed358>ກິດຈະກຳຫຼ້າສຸດ</th></tr></thead> <tbody data-v-7e1ed358>" + _vm._ssrList(_vm.userActivityData, function (user) {
    return "<tr data-v-7e1ed358><td data-v-7e1ed358><div class=\"user-info\" data-v-7e1ed358><div class=\"user-name\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.userName)) + "</div> <div class=\"user-id\" data-v-7e1ed358>" + _vm._ssrEscape("ID: " + _vm._s(user.userId)) + "</div></div></td> <td data-v-7e1ed358><span class=\"activity-count create\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.CREATE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count update\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.UPDATE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count approve\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.APPROVE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count settle\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.SETTLE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count delete\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.DELETE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"total-count\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.totalActivities)) + "</span></td> <td data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(user.lastActivity))) + "</td></tr>";
  }) + "</tbody></table></div></div>" : "<div class=\"no-data\" data-v-7e1ed358><i class=\"fas fa-chart-bar\" data-v-7e1ed358></i> <p data-v-7e1ed358>ບໍ່ມີຂໍ້ມູນກິດຈະກຳໃນຊ່ວງເວລານີ້</p></div>") + "</div>" : "<!---->") + " "), _vm.activeTab === 'system-activity' ? _vm._ssrNode("<div class=\"report-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"report-header\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<h6 data-v-7e1ed358><i class=\"fas fa-server\" data-v-7e1ed358></i>\n            ລາຍງານກິດຈະກຳລະບົບ\n          </h6> "), _vm._ssrNode("<div class=\"date-filter\" data-v-7e1ed358>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.systemActivityFilter.period,
      expression: "systemActivityFilter.period"
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
        _vm.$set(_vm.systemActivityFilter, "period", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.fetchSystemActivity]
    }
  }, [_c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("7 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "30"
    }
  }, [_vm._v("30 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "90"
    }
  }, [_vm._v("90 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "365"
    }
  }, [_vm._v("1 ປີຜ່ານມາ")])]), _vm._ssrNode(" <button class=\"btn btn-primary btn-sm\" data-v-7e1ed358><i class=\"fas fa-sync\" data-v-7e1ed358></i>\n              ອັບເດດ\n            </button>")], 2)], 2), _vm._ssrNode(" " + (_vm.systemActivityLoading ? "<div class=\"loading-state\" data-v-7e1ed358><div class=\"spinner-sm\" data-v-7e1ed358></div> <span data-v-7e1ed358>ກຳລັງໂຫຼດຂໍ້ມູນ...</span></div>" : _vm.systemActivityData ? "<div class=\"system-activity-content\" data-v-7e1ed358><div class=\"chart-container\" data-v-7e1ed358><h6 data-v-7e1ed358>ກິດຈະກຳລາຍວັນ</h6> <div class=\"chart-placeholder\" data-v-7e1ed358><div class=\"chart-bars\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.dailyStats, function (day, index) {
    return "<div" + _vm._ssrAttr("title", `${day.date}: ${day.count} ກິດຈະກຳ`) + " class=\"chart-bar\"" + _vm._ssrStyle(null, {
      height: day.count / _vm.maxDailyActivity * 100 + '%'
    }, null) + " data-v-7e1ed358><div class=\"bar-value\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(day.count)) + "</div></div>";
  }) + "</div> <div class=\"chart-labels\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.dailyStats, function (day, index) {
    return "<span class=\"chart-label\" data-v-7e1ed358>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatShortDate(day.date)) + "\n                ") + "</span>";
  }) + "</div></div></div> <div class=\"activity-breakdown\" data-v-7e1ed358><h6 data-v-7e1ed358>ການແບ່ງປະເພດກິດຈະກຳ</h6> <div class=\"breakdown-grid\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.activityBreakdown, function (activity) {
    return "<div class=\"breakdown-item\" data-v-7e1ed358><div" + _vm._ssrClass("breakdown-icon", activity.action.toLowerCase()) + " data-v-7e1ed358><i" + _vm._ssrClass(null, _vm.getActivityIcon(activity.action)) + " data-v-7e1ed358></i></div> <div class=\"breakdown-info\" data-v-7e1ed358><div class=\"breakdown-label\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.getActivityLabel(activity.action))) + "</div> <div class=\"breakdown-count\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(activity.count)) + "</div> <div class=\"breakdown-percentage\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(activity.percentage) + "%") + "</div></div></div>";
  }) + "</div></div> <div class=\"recent-changes\" data-v-7e1ed358><h6 data-v-7e1ed358>ການປ່ຽນແປງຫຼ້າສຸດ</h6> <div class=\"changes-timeline\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.recentChanges, function (change) {
    return "<div class=\"change-item\" data-v-7e1ed358><div" + _vm._ssrClass("change-icon", change.action.toLowerCase()) + " data-v-7e1ed358><i" + _vm._ssrClass(null, _vm.getActivityIcon(change.action)) + " data-v-7e1ed358></i></div> <div class=\"change-content\" data-v-7e1ed358><div class=\"change-text\" data-v-7e1ed358><strong data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(change.user)) + "</strong>" + _vm._ssrEscape(" \n                    " + _vm._s(_vm.getActivityLabel(change.action)) + " \n                    ") + "<em data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(change.recordPurpose || `Record #${change.recordId}`)) + "</em></div> <div class=\"change-time\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.formatRelativeTime(change.changedAt))) + "</div></div></div>";
  }) + "</div></div></div>" : "<div class=\"no-data\" data-v-7e1ed358><i class=\"fas fa-server\" data-v-7e1ed358></i> <p data-v-7e1ed358>ບໍ່ມີຂໍ້ມູນກິດຈະກຳລະບົບ</p></div>"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm.activeTab === 'export' ? _vm._ssrNode("<div class=\"report-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"export-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<h6 data-v-7e1ed358><i class=\"fas fa-download\" data-v-7e1ed358></i>\n            ສົ່ງອອກລາຍງານ\n          </h6> "), _vm._ssrNode("<div class=\"export-options\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"export-option\" data-v-7e1ed358><div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-file-csv\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ສົ່ງອອກຂໍ້ມູນ CSV</h6></div> <p data-v-7e1ed358>ສົ່ງອອກຂໍ້ມູນປະຫວັດການປ່ຽນແປງໃນຮູບແບບ CSV ສຳລັບການວິເຄາະ</p> <div class=\"export-controls\" data-v-7e1ed358><div class=\"date-range\" data-v-7e1ed358><input type=\"date\"" + _vm._ssrAttr("value", _vm.exportFilter.startDate) + " class=\"form-control\" data-v-7e1ed358> <span data-v-7e1ed358>ຫາ</span> <input type=\"date\"" + _vm._ssrAttr("value", _vm.exportFilter.endDate) + " class=\"form-control\" data-v-7e1ed358></div> <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-secondary\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-download\" data-v-7e1ed358></i>") + "\n                  ສົ່ງອອກ CSV\n                </button></div></div> "), _vm._ssrNode("<div class=\"export-option\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-chart-pie\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ລາຍງານສະຫຼຸບ</h6></div> <p data-v-7e1ed358>ສົ່ງອອກລາຍງານສະຫຼຸບດ້ວຍກາຟິກແລະການວິເຄາະ</p> "), _vm._ssrNode("<div class=\"export-controls\" data-v-7e1ed358>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.exportFilter.reportType,
      expression: "exportFilter.reportType"
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
        _vm.$set(_vm.exportFilter, "reportType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "summary"
    }
  }, [_vm._v("ສະຫຼຸບທົ່ວໄປ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "user-activity"
    }
  }, [_vm._v("ກິດຈະກຳຜູ້ໃຊ້")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "trend-analysis"
    }
  }, [_vm._v("ການວິເຄາະແນວໂນ້ມ")])]), _vm._ssrNode(" <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-primary\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-file-pdf\" data-v-7e1ed358></i>") + "\n                  ສ້າງລາຍງານ\n                </button>")], 2)], 2), _vm._ssrNode(" <div class=\"export-option\" data-v-7e1ed358><div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-database\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ສໍາລອງຂໍ້ມູນ</h6></div> <p data-v-7e1ed358>ສໍາລອງຂໍ້ມູນປະຫວັດການປ່ຽນແປງທັງໝົດ</p> <div class=\"export-controls\" data-v-7e1ed358><div class=\"backup-info\" data-v-7e1ed358><small data-v-7e1ed358>ຂໍ້ມູນທັງໝົດຈະຖືກສໍາລອງໃນຮູບແບບ JSON</small></div> <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-warning\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-archive\" data-v-7e1ed358></i>") + "\n                  ສໍາລອງຂໍ້ມູນ\n                </button></div></div>")], 2)], 2)]) : _vm._e()], 2), _vm._ssrNode(" <div class=\"modal-footer\" data-v-7e1ed358><button" + _vm._ssrAttr("disabled", _vm.isLoading) + " class=\"btn btn-outline\" data-v-7e1ed358><i class=\"fas fa-sync\" data-v-7e1ed358></i>\n        ອັບເດດ\n      </button> <button class=\"btn btn-primary\" data-v-7e1ed358><i class=\"fas fa-times\" data-v-7e1ed358></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue?vue&type=template&id=7e1ed358&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditReportDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentAuditReportDialogvue_type_script_lang_js_ = ({
  name: 'AuditReportsDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeTab: 'user-activity',
      reportTabs: [{
        id: 'user-activity',
        label: 'ກິດຈະກຳຜູ້ໃຊ້',
        icon: 'fas fa-users'
      }, {
        id: 'system-activity',
        label: 'ກິດຈະກຳລະບົບ',
        icon: 'fas fa-server'
      }, {
        id: 'export',
        label: 'ສົ່ງອອກ',
        icon: 'fas fa-download'
      }],
      // User Activity
      userActivityLoading: false,
      userActivityData: [],
      userActivityFilter: {
        startDate: this.getDateDaysAgo(30),
        endDate: this.getTodayDate()
      },
      // System Activity
      systemActivityLoading: false,
      systemActivityData: null,
      systemActivityFilter: {
        period: '30'
      },
      // Export
      exportLoading: false,
      exportFilter: {
        startDate: this.getDateDaysAgo(30),
        endDate: this.getTodayDate(),
        reportType: 'summary'
      },
      actionLabels: {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      }
    };
  },
  computed: {
    isLoading() {
      return this.userActivityLoading || this.systemActivityLoading || this.exportLoading;
    },
    uniqueActiveUsers() {
      return this.userActivityData.length;
    },
    totalActivities() {
      return this.userActivityData.reduce((sum, user) => sum + user.totalActivities, 0);
    },
    mostActiveUser() {
      if (this.userActivityData.length === 0) return 'N/A';
      const topUser = this.userActivityData.reduce((max, user) => user.totalActivities > max.totalActivities ? user : max);
      return topUser.userName;
    },
    maxDailyActivity() {
      var _this$systemActivityD;
      if (!((_this$systemActivityD = this.systemActivityData) !== null && _this$systemActivityD !== void 0 && _this$systemActivityD.dailyStats)) return 1;
      return Math.max(...this.systemActivityData.dailyStats.map(day => day.count));
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeReports();
      }
    }
  },
  methods: {
    async initializeReports() {
      await this.fetchUserActivity();
      await this.fetchSystemActivity();
    },
    async fetchUserActivity() {
      this.userActivityLoading = true;
      try {
        const params = {
          startDate: this.userActivityFilter.startDate,
          endDate: this.userActivityFilter.endDate
        };
        const {
          data
        } = await this.$axios.get('/api/money-advances/audit/date-range', {
          params
        });

        // Process the audit data to group by user
        const userActivities = {};
        data.data.forEach(auditEntry => {
          var _auditEntry$changedBy;
          const userId = auditEntry.changedBy;
          const userName = ((_auditEntry$changedBy = auditEntry.changedByUser) === null || _auditEntry$changedBy === void 0 ? void 0 : _auditEntry$changedBy.cus_name) || 'Unknown User';
          if (!userActivities[userId]) {
            userActivities[userId] = {
              userId,
              userName,
              activities: {},
              totalActivities: 0,
              lastActivity: auditEntry.changedAt
            };
          }
          if (!userActivities[userId].activities[auditEntry.action]) {
            userActivities[userId].activities[auditEntry.action] = 0;
          }
          userActivities[userId].activities[auditEntry.action]++;
          userActivities[userId].totalActivities++;
          if (new Date(auditEntry.changedAt) > new Date(userActivities[userId].lastActivity)) {
            userActivities[userId].lastActivity = auditEntry.changedAt;
          }
        });
        this.userActivityData = Object.values(userActivities).sort((a, b) => b.totalActivities - a.totalActivities);
      } catch (error) {
        console.error('Error fetching user activity:', error);
        this.userActivityData = [];
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກິດຈະກຳຜູ້ໃຊ້');
      } finally {
        this.userActivityLoading = false;
      }
    },
    async fetchSystemActivity() {
      this.systemActivityLoading = true;
      try {
        const days = parseInt(this.systemActivityFilter.period);
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const params = {
          startDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
          limit: 500
        };
        const {
          data
        } = await this.$axios.get('/api/money-advances/audit/date-range', {
          params
        });

        // Process daily statistics
        const dailyStats = {};
        const activityBreakdown = {};
        let totalActivities = 0;
        data.data.forEach(auditEntry => {
          const date = auditEntry.changedAt.split('T')[0];

          // Daily stats
          if (!dailyStats[date]) {
            dailyStats[date] = {
              date,
              count: 0
            };
          }
          dailyStats[date].count++;

          // Activity breakdown
          if (!activityBreakdown[auditEntry.action]) {
            activityBreakdown[auditEntry.action] = 0;
          }
          activityBreakdown[auditEntry.action]++;
          totalActivities++;
        });

        // Fill missing dates with 0
        for (let i = 0; i < days; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          if (!dailyStats[dateStr]) {
            dailyStats[dateStr] = {
              date: dateStr,
              count: 0
            };
          }
        }
        this.systemActivityData = {
          dailyStats: Object.values(dailyStats).sort((a, b) => new Date(a.date) - new Date(b.date)),
          activityBreakdown: Object.entries(activityBreakdown).map(([action, count]) => ({
            action,
            count,
            percentage: (count / totalActivities * 100).toFixed(1)
          })).sort((a, b) => b.count - a.count),
          recentChanges: data.data.sort((a, b) => new Date(b.changedAt) - new Date(a.changedAt)).slice(0, 10).map(entry => {
            var _entry$changedByUser, _entry$record;
            return {
              id: entry.id,
              action: entry.action,
              user: ((_entry$changedByUser = entry.changedByUser) === null || _entry$changedByUser === void 0 ? void 0 : _entry$changedByUser.cus_name) || 'Unknown',
              recordId: entry.recordId,
              recordPurpose: (_entry$record = entry.record) === null || _entry$record === void 0 ? void 0 : _entry$record.purpose,
              changedAt: entry.changedAt
            };
          })
        };
      } catch (error) {
        console.error('Error fetching system activity:', error);
        this.systemActivityData = null;
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກິດຈະກຳລະບົບ');
      } finally {
        this.systemActivityLoading = false;
      }
    },
    async exportCSV() {
      this.exportLoading = true;
      try {
        const params = {
          startDate: this.exportFilter.startDate,
          endDate: this.exportFilter.endDate,
          format: 'csv'
        };
        const response = await this.$axios.get('/api/money-advances/audit/export', {
          params,
          responseType: 'blob'
        });
        const blob = new Blob([response.data], {
          type: 'text/csv'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `audit-report-${params.startDate}-to-${params.endDate}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.$emit('success', 'ສົ່ງອອກ CSV ສຳເລັດ');
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ CSV');
      } finally {
        this.exportLoading = false;
      }
    },
    async generateReport() {
      this.exportLoading = true;
      try {
        // This would generate a PDF report
        this.$emit('success', 'ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ');
      } catch (error) {
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສ້າງລາຍງານ');
      } finally {
        this.exportLoading = false;
      }
    },
    async backupData() {
      this.exportLoading = true;
      try {
        // This would create a full backup
        this.$emit('success', 'ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ');
      } catch (error) {
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສໍາລອງຂໍ້ມູນ');
      } finally {
        this.exportLoading = false;
      }
    },
    refreshCurrentReport() {
      if (this.activeTab === 'user-activity') {
        this.fetchUserActivity();
      } else if (this.activeTab === 'system-activity') {
        this.fetchSystemActivity();
      }
    },
    getActivityIcon(action) {
      const icons = {
        CREATE: 'fas fa-plus-circle',
        UPDATE: 'fas fa-edit',
        APPROVE: 'fas fa-check-circle',
        SETTLE: 'fas fa-money-bill-wave',
        DELETE: 'fas fa-trash-alt'
      };
      return icons[action] || 'fas fa-question-circle';
    },
    getActivityLabel(action) {
      return this.actionLabels[action] || action;
    },
    formatDateTime(dateTime) {
      if (!dateTime) return 'N/A';
      return new Date(dateTime).toLocaleString('lo-LA');
    },
    formatShortDate(date) {
      return new Date(date).toLocaleDateString('lo-LA', {
        month: 'short',
        day: 'numeric'
      });
    },
    formatRelativeTime(dateTime) {
      const now = new Date();
      const date = new Date(dateTime);
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      if (diffMins < 1) return 'ຫຼ້າສຸດ';
      if (diffMins < 60) return `${diffMins} ນາທີຜ່ານມາ`;
      if (diffHours < 24) return `${diffHours} ຊົ່ວໂມງຜ່ານມາ`;
      return `${diffDays} ມື້ຜ່ານມາ`;
    },
    getDateDaysAgo(days) {
      const date = new Date();
      date.setDate(date.getDate() - days);
      return date.toISOString().split('T')[0];
    },
    getTodayDate() {
      return new Date().toISOString().split('T')[0];
    },
    closeDialog() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentAuditReportDialogvue_type_script_lang_js_ = (paymentAuditReportDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(625)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentAuditReportDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e1ed358",
  "2d1edbac"
  
)

/* harmony default export */ var paymentAuditReportDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e13c068e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(707);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e13c068e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e13c068e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e13c068e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e13c068e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-outline[data-v-e13c068e]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline[data-v-e13c068e]:hover{background:#667eea;color:#fff}.btn-audit[data-v-e13c068e]{background:#9b59b6;color:#fff}.btn-audit[data-v-e13c068e]:hover{background:#8e44ad;box-shadow:0 4px 8px rgba(155,89,182,.3);transform:translateY(-2px)}.money-advance-container[data-v-e13c068e]{margin:0 auto;max-width:1400px;padding:20px}.header-section[data-v-e13c068e]{align-items:center;display:flex;justify-content:space-between;margin-bottom:30px}.header-actions[data-v-e13c068e]{align-items:center;display:flex;gap:12px}.page-title[data-v-e13c068e]{color:#333;font-size:28px;font-weight:600;margin:0}.summary-cards[data-v-e13c068e]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:30px}.summary-card[data-v-e13c068e]{border:1px solid #e3e6f0;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1)}.card-body[data-v-e13c068e]{padding:20px;text-align:center}.card-title[data-v-e13c068e]{color:#666;font-size:14px;font-weight:600;margin-bottom:10px;text-transform:uppercase}.card-value[data-v-e13c068e]{color:#333;font-size:24px;font-weight:700;margin:0}.card-value.pending[data-v-e13c068e]{color:#f39c12}.card-value.approved[data-v-e13c068e]{color:#27ae60}.card-value.settled[data-v-e13c068e]{color:#3498db}.filters-section[data-v-e13c068e]{background:#f8f9fa;border-radius:8px;margin-bottom:20px;padding:20px}.row[data-v-e13c068e]{display:flex;flex-wrap:wrap;margin:-10px}.col-md-2[data-v-e13c068e]{flex:0 0 16.666%;max-width:16.666%;padding:10px}.col-md-3[data-v-e13c068e]{flex:0 0 25%;max-width:25%;padding:10px}.form-control[data-v-e13c068e]{border:1px solid #ddd;border-radius:4px;font-size:14px;padding:8px 12px;width:100%}.btn[data-v-e13c068e]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-e13c068e]{background:#007bff;color:#fff}.btn-secondary[data-v-e13c068e]{background:#6c757d;color:#fff}.btn-block[data-v-e13c068e]{justify-content:center;width:100%}.btn[data-v-e13c068e]:hover{opacity:.9;transform:translateY(-1px)}.table-container[data-v-e13c068e]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden;position:relative}.loading-overlay[data-v-e13c068e]{align-items:center;background:hsla(0,0%,100%,.8);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:10}.spinner[data-v-e13c068e]{animation:spin-e13c068e 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:40px;width:40px}@keyframes spin-e13c068e{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.table[data-v-e13c068e]{border-collapse:collapse;margin:0;width:100%}.table th[data-v-e13c068e]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-weight:600;white-space:nowrap}.table td[data-v-e13c068e],.table th[data-v-e13c068e]{font-size:13px;padding:15px 10px}.table td[data-v-e13c068e]{border-top:1px solid #dee2e6;vertical-align:middle}.table-striped tbody tr[data-v-e13c068e]:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.amount[data-v-e13c068e]{color:#27ae60;font-weight:600}.ministry-info[data-v-e13c068e]{font-size:12px}.ministry-name[data-v-e13c068e]{color:#333;font-weight:600;margin-bottom:2px}.ministry-code[data-v-e13c068e]{background:#e3f2fd;border-radius:3px;color:#666;font-family:monospace;font-size:10px;padding:1px 4px}.no-ministry[data-v-e13c068e]{color:#999;font-size:11px;font-style:italic}.bank-account-info[data-v-e13c068e]{font-size:12px}.bank-name[data-v-e13c068e]{color:#333;font-weight:600}.account-number[data-v-e13c068e]{color:#666;font-family:monospace}.no-bank-account[data-v-e13c068e]{color:#999;font-size:12px;font-style:italic}.status-badge[data-v-e13c068e]{align-items:center;border:1px solid transparent;border-radius:20px;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:6px 12px;text-transform:uppercase}.status-badge.pending[data-v-e13c068e]{background:#fff3cd;border-color:#ffeaa7;color:#856404}.status-badge.approved[data-v-e13c068e]{background:#d4edda;border-color:#c3e6cb;color:#155724}.status-badge.settled[data-v-e13c068e]{background:#cce5ff;border-color:#b3d7ff;color:#004085}.action-buttons[data-v-e13c068e]{flex-wrap:wrap;gap:4px}.action-buttons[data-v-e13c068e],.btn-sm[data-v-e13c068e]{display:flex;justify-content:center}.btn-sm[data-v-e13c068e]{align-items:center;border:none;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;font-size:11px;height:28px;padding:0;transition:all .2s ease;width:28px}.btn-sm[data-v-e13c068e]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-2px)}.btn-sm.btn-info[data-v-e13c068e]{background:#17a2b8;color:#fff}.btn-sm.btn-warning[data-v-e13c068e]{background:#ffc107;color:#212529}.btn-sm.btn-success[data-v-e13c068e]{background:#28a745;color:#fff}.btn-sm.btn-danger[data-v-e13c068e]{background:#dc3545;color:#fff}.no-data[data-v-e13c068e]{color:#666;padding:60px 20px;text-align:center}.no-data i[data-v-e13c068e]{font-size:48px;margin-bottom:15px;opacity:.5}.pagination-nav[data-v-e13c068e]{display:flex;justify-content:center;margin-top:20px}.pagination[data-v-e13c068e]{display:flex;list-style:none;margin:0;padding:0}.page-item[data-v-e13c068e]{margin:0 2px}.page-link[data-v-e13c068e]{background:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;padding:8px 12px;-webkit-text-decoration:none;text-decoration:none}.page-link[data-v-e13c068e]:hover{background:#e9ecef}.page-item.active .page-link[data-v-e13c068e]{background:#007bff;border-color:#007bff;color:#fff}.page-item.disabled .page-link[data-v-e13c068e]{background:#fff;color:#6c757d;cursor:not-allowed}@media (max-width:1200px){.table td[data-v-e13c068e],.table th[data-v-e13c068e]{font-size:12px;padding:10px 6px}.btn-sm[data-v-e13c068e]{font-size:10px;height:24px;width:24px}}@media (max-width:768px){.summary-cards[data-v-e13c068e]{grid-template-columns:repeat(2,1fr)}.table-container[data-v-e13c068e]{overflow-x:auto}.table[data-v-e13c068e]{min-width:800px}.action-buttons[data-v-e13c068e]{flex-direction:row;gap:3px}.row[data-v-e13c068e]{flex-direction:column}.col-md-2[data-v-e13c068e],.col-md-3[data-v-e13c068e]{flex:1;margin-bottom:10px;max-width:100%}}@media (max-width:480px){.summary-cards[data-v-e13c068e]{grid-template-columns:1fr}.header-section[data-v-e13c068e]{flex-direction:column;gap:15px;text-align:center}.action-buttons[data-v-e13c068e]{justify-content:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map