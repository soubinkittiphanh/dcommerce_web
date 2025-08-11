exports.ids = [129,14,15];
exports.modules = {

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/accounting/ar/receive/index.vue?vue&type=template&id=62505c1b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "receive-header-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-62505c1b><div class=\"header-content\" data-v-62505c1b><h1 class=\"page-title\" data-v-62505c1b>ລະບົບຈັດການການຮັບຊຳລະ</h1> <div class=\"header-actions\" data-v-62505c1b><button class=\"btn btn-primary\" data-v-62505c1b><i class=\"fas fa-plus\" data-v-62505c1b></i>\n          ເພີ່ມການຮັບຊຳລະໃໝ່\n        </button> <button class=\"btn btn-secondary\" data-v-62505c1b><i class=\"fas fa-download\" data-v-62505c1b></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-62505c1b>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-62505c1b>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-62505c1b><label data-v-62505c1b>ຄົ້ນຫາ:</label> <input type=\"text\" placeholder=\"ເລກທີໃບຮັບ, ເລກອ້າງອີງ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"form-control\" data-v-62505c1b></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-62505c1b>", "</div>", [_vm._ssrNode("<label data-v-62505c1b>ວິທີຈ່າຍ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.paymentMethod,
      expression: "filters.paymentMethod"
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
        _vm.$set(_vm.filters, "paymentMethod", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "check"
    }
  }, [_vm._v("ເຊັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("ໂອນເງິນທະນາຄານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "credit_card"
    }
  }, [_vm._v("ບັດເຄຣດິດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "other"
    }
  }, [_vm._v("ອື່ນໆ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-62505c1b>", "</div>", [_vm._ssrNode("<label data-v-62505c1b>ໃບແຈ້ງໜີ້:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.invoiceHeaderId,
      expression: "filters.invoiceHeaderId"
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
        _vm.$set(_vm.filters, "invoiceHeaderId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _vm._l(_vm.invoices, function (invoice) {
    return _c('option', {
      key: invoice.id,
      domProps: {
        "value": invoice.id
      }
    }, [_vm._v("\n            " + _vm._s(invoice.invoiceNumber) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"filter-group\" data-v-62505c1b><label data-v-62505c1b>ວັນທີບັນທຶກຈາກ:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.bookingDateFrom) + " class=\"form-control\" data-v-62505c1b></div> <div class=\"filter-group\" data-v-62505c1b><label data-v-62505c1b>ວັນທີບັນທຶກເຖິງ:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.bookingDateTo) + " class=\"form-control\" data-v-62505c1b></div> <div class=\"filter-actions\" data-v-62505c1b><button class=\"btn btn-outline-primary\" data-v-62505c1b><i class=\"fas fa-search\" data-v-62505c1b></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-62505c1b><i class=\"fas fa-undo\" data-v-62505c1b></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-62505c1b><div class=\"summary-card total-receipts\" data-v-62505c1b><div class=\"card-icon total\" data-v-62505c1b><i class=\"fas fa-receipt\" data-v-62505c1b></i></div> <div class=\"card-content\" data-v-62505c1b><h3 data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.total.count)) + "</h3> <p data-v-62505c1b>ລວມການຮັບຊຳລະທັງໝົດ</p></div></div> <div class=\"summary-card payment-cash\" data-v-62505c1b><div class=\"card-icon cash\" data-v-62505c1b><i class=\"fas fa-money-bill-wave\" data-v-62505c1b></i></div> <div class=\"card-content\" data-v-62505c1b><h3 data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.cash.count)) + "</h3> <p data-v-62505c1b>" + _vm._ssrEscape("ເງິນສົດ (" + _vm._s(_vm.summaryStats.cash.percentage) + "%)") + "</p> <small class=\"amount-info\" data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.cash.amount))) + "</small></div></div> <div class=\"summary-card payment-transfer\" data-v-62505c1b><div class=\"card-icon transfer\" data-v-62505c1b><i class=\"fas fa-university\" data-v-62505c1b></i></div> <div class=\"card-content\" data-v-62505c1b><h3 data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.bankTransfer.count)) + "</h3> <p data-v-62505c1b>" + _vm._ssrEscape("ໂອນເງິນທະນາຄານ (" + _vm._s(_vm.summaryStats.bankTransfer.percentage) + "%)") + "</p> <small class=\"amount-info\" data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.bankTransfer.amount))) + "</small></div></div> <div class=\"summary-card payment-check\" data-v-62505c1b><div class=\"card-icon check\" data-v-62505c1b><i class=\"fas fa-money-check\" data-v-62505c1b></i></div> <div class=\"card-content\" data-v-62505c1b><h3 data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.check.count)) + "</h3> <p data-v-62505c1b>" + _vm._ssrEscape("ເຊັກ (" + _vm._s(_vm.summaryStats.check.percentage) + "%)") + "</p> <small class=\"amount-info\" data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.check.amount))) + "</small></div></div> <div class=\"summary-card amount-stats\" data-v-62505c1b><div class=\"card-icon amount\" data-v-62505c1b><i class=\"fas fa-dollar-sign\" data-v-62505c1b></i></div> <div class=\"card-content\" data-v-62505c1b><h3 data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.totalAmount))) + "</h3> <p data-v-62505c1b>ຍອດຮັບຊຳລະລວມ</p> <small class=\"amount-info\" data-v-62505c1b>" + _vm._ssrEscape("ສະເລ່ຍ: " + _vm._s(_vm.formatCurrency(_vm.summaryStats.averageAmount))) + "</small></div></div></div> "), _vm._ssrNode("<div class=\"table-section\" data-v-62505c1b>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-62505c1b>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-62505c1b><h3 data-v-62505c1b>ລາຍການການຮັບຊຳລະ</h3> <span class=\"record-count\" data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.filteredReceipts.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-62505c1b>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-62505c1b>", "</div>", [_vm._ssrNode("<label data-v-62505c1b>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-62505c1b>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-62505c1b><table class=\"data-table\" data-v-62505c1b><thead data-v-62505c1b><tr data-v-62505c1b><th class=\"sortable\" data-v-62505c1b>\n              ເລກທີໃບຮັບ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('receiptNumber')) + " data-v-62505c1b></i></th> <th class=\"sortable\" data-v-62505c1b>\n              ວັນທີບັນທຶກ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('bookingDate')) + " data-v-62505c1b></i></th> <th class=\"sortable\" data-v-62505c1b>\n              ວັນທີຮັບເງິນ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('receivedDate')) + " data-v-62505c1b></i></th> <th data-v-62505c1b>ໃບແຈ້ງໜີ້</th> <th class=\"sortable\" data-v-62505c1b>\n              ຍອດເງິນ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('totalReceivedAmount')) + " data-v-62505c1b></i></th> <th class=\"sortable\" data-v-62505c1b>\n              ວິທີຈ່າຍ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('paymentMethod')) + " data-v-62505c1b></i></th> <th data-v-62505c1b>ເລກອ້າງອີງ</th> <th data-v-62505c1b>ຜູ້ບັນທຶກ</th> <th data-v-62505c1b>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-62505c1b>" + _vm._ssrList(_vm.paginatedReceipts, function (receipt) {
    return "<tr data-v-62505c1b><td data-v-62505c1b><div class=\"receipt-number\" data-v-62505c1b><strong data-v-62505c1b>" + _vm._ssrEscape(_vm._s(receipt.receiptNumber)) + "</strong> " + (receipt.notes ? "<div class=\"receipt-notes\" data-v-62505c1b>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.truncateText(receipt.notes, 50)) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(receipt.bookingDate))) + "</td> <td data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(receipt.receivedDate))) + "</td> <td data-v-62505c1b><div class=\"invoice-info\" data-v-62505c1b><div class=\"invoice-number\" data-v-62505c1b><i class=\"fas fa-file-invoice\" data-v-62505c1b></i>" + _vm._ssrEscape("\n                  " + _vm._s(receipt.invoiceHeader ? receipt.invoiceHeader.invoiceNumber : 'N/A') + "\n                ") + "</div> " + (receipt.invoiceHeader && receipt.invoiceHeader.customer ? "<div class=\"customer-name\" data-v-62505c1b>" + _vm._ssrEscape("\n                  " + _vm._s(receipt.invoiceHeader.customer.name) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-62505c1b><div class=\"amount-details\" data-v-62505c1b><div class=\"received-amount\" data-v-62505c1b>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(receipt.totalReceivedAmount)) + "\n                ") + "</div> " + (receipt.receiveLines && receipt.receiveLines.length > 0 ? "<div class=\"allocation-info\" data-v-62505c1b><small data-v-62505c1b>" + _vm._ssrEscape(_vm._s(receipt.receiveLines.length) + " ການແບ່ງປັນ") + "</small></div>" : "<!---->") + "</div></td> <td data-v-62505c1b><span" + _vm._ssrClass(null, ['payment-method-badge', receipt.paymentMethod]) + " data-v-62505c1b>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatPaymentMethod(receipt.paymentMethod)) + "\n              ") + "</span></td> <td data-v-62505c1b><span class=\"reference-number\" data-v-62505c1b>" + _vm._ssrEscape("\n                " + _vm._s(receipt.referenceNumber || '-') + "\n              ") + "</span></td> <td data-v-62505c1b><div class=\"inputter-info\" data-v-62505c1b>" + _vm._ssrEscape("\n                " + _vm._s(receipt.inputter ? receipt.inputter.username : receipt.maker ? receipt.maker.username : 'N/A') + "\n                ") + (receipt.createdAt ? "<small data-v-62505c1b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(receipt.createdAt))) + "</small>" : "<!---->") + "</div></td> <td class=\"actions-cell\" data-v-62505c1b><button title=\"ເບິ່ງລາຍລະອຽດ\" class=\"btn btn-sm btn-outline-primary\" data-v-62505c1b><i class=\"fas fa-eye\" data-v-62505c1b></i></button> <button title=\"ແກ້ໄຂ\" class=\"btn btn-sm btn-outline-info\" data-v-62505c1b><i class=\"fas fa-edit\" data-v-62505c1b></i></button> <button title=\"ພິມໃບຮັບ\" class=\"btn btn-sm btn-outline-success\" data-v-62505c1b><i class=\"fas fa-print\" data-v-62505c1b></i></button> <button title=\"ລຶບ\" class=\"btn btn-sm btn-outline-danger\" data-v-62505c1b><i class=\"fas fa-trash\" data-v-62505c1b></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-62505c1b><div class=\"pagination-info\" data-v-62505c1b>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-62505c1b><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-62505c1b>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-62505c1b>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-62505c1b>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-62505c1b>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-62505c1b>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('ReceiveHeaderMaintain', {
    attrs: {
      "visible": _vm.showEditDialog,
      "receipt": _vm.selectedReceipt,
      "invoices": _vm.invoices,
      "users": _vm.users
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onReceiptSave
    }
  })], 1), _vm._ssrNode(" "), _c('client-only', [_c('ReceiveHeaderView', {
    attrs: {
      "visible": _vm.showViewDialog,
      "receipt": _vm.selectedReceipt
    },
    on: {
      "close": _vm.closeViewDialog
    }
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-62505c1b><div class=\"loading-spinner\" data-v-62505c1b><i class=\"fas fa-spinner fa-spin\" data-v-62505c1b></i> <p data-v-62505c1b>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/accounting/ar/receive/index.vue?vue&type=template&id=62505c1b&scoped=true&

// EXTERNAL MODULE: ./components/accounting/ar/receive/maintain/index.vue + 4 modules
var maintain = __webpack_require__(823);

// EXTERNAL MODULE: ./components/accounting/ar/receive/view/index.vue + 4 modules
var view = __webpack_require__(824);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/accounting/ar/receive/index.vue?vue&type=script&lang=js&


/* harmony default export */ var receivevue_type_script_lang_js_ = ({
  name: 'ReceiveHeaderSummary',
  components: {
    ReceiveHeaderMaintain: maintain["default"],
    ReceiveHeaderView: view["default"]
  },
  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      selectedReceipt: null,
      // Data arrays
      receipts: [],
      filteredReceipts: [],
      invoices: [],
      users: [],
      // Loading states
      loading: false,
      // Filters
      filters: {
        search: '',
        paymentMethod: '',
        invoiceHeaderId: '',
        bookingDateFrom: '',
        bookingDateTo: ''
      },
      // Sorting
      sort: {
        field: 'bookingDate',
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
        cash: {
          count: 0,
          percentage: 0,
          amount: 0
        },
        bankTransfer: {
          count: 0,
          percentage: 0,
          amount: 0
        },
        check: {
          count: 0,
          percentage: 0,
          amount: 0
        },
        creditCard: {
          count: 0,
          percentage: 0,
          amount: 0
        },
        other: {
          count: 0,
          percentage: 0,
          amount: 0
        },
        totalAmount: 0,
        averageAmount: 0
      }
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    paginatedReceipts() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
      const end = start + this.pagination.perPage;
      return this.filteredReceipts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredReceipts.length / this.pagination.perPage);
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      const end = Math.min(start + this.pagination.perPage - 1, this.filteredReceipts.length);
      return {
        start,
        end,
        total: this.filteredReceipts.length
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
    this.fetchReceipts();
    this.fetchInvoices();
    this.fetchUsers();
  },
  methods: {
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
    // Data Loading Methods
    async fetchReceipts() {
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
        } = await this.$axios.get('/api/ar-receive-headers', {
          params
        });
        if (data && data.success) {
          this.receipts = data.data.receiveHeaders || [];
        } else {
          this.receipts = [];
        }
        this.applyFilters();
        this.calculateSummaryStats();
      } catch (error) {
        console.error('Error fetching receipts:', error);
        this.showToast('Error loading receipt data', 'error');
        this.receipts = [];
      } finally {
        this.loading = false;
      }
    },
    async fetchInvoices() {
      try {
        const {
          data
        } = await this.$axios.get('/api/ar-invoices');
        if (data && data.success) {
          this.invoices = data.data.invoices || [];
        }
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    },
    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedReceipt = null;
      this.showEditDialog = true;
    },
    async editReceipt(receipt) {
      this.selectedReceipt = receipt;
      this.showEditDialog = true;
    },
    viewReceipt(receipt) {
      this.selectedReceipt = receipt;
      this.showViewDialog = true;
    },
    printReceipt(receipt) {
      // Implement print functionality
      this.showToast('ພິມໃບຮັບ: ' + receipt.receiptNumber, 'info');
    },
    async deleteReceipt(receipt) {
      if (confirm(`ທ່ານຕ້ອງການລຶບໃບຮັບເງິນ ${receipt.receiptNumber} ແມ່ນບໍ?`)) {
        try {
          this.loading = true;
          const {
            data
          } = await this.$axios.delete(`/api/ar-receive-headers/${receipt.id}`);
          if (data && data.success) {
            this.showToast('ລຶບໃບຮັບເງິນສຳເລັດແລ້ວ', 'success');
            await this.fetchReceipts();
          } else {
            throw new Error((data === null || data === void 0 ? void 0 : data.message) || 'Delete failed');
          }
        } catch (error) {
          var _error$response, _error$response$data;
          console.error('Error deleting receipt:', error);
          const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message || 'ລຶບບໍ່ສຳເລັດ';
          this.showToast(errorMessage, 'error');
        } finally {
          this.loading = false;
        }
      }
    },
    closeEditDialog() {
      this.showEditDialog = false;
      this.selectedReceipt = null;
    },
    closeViewDialog() {
      this.showViewDialog = false;
      this.selectedReceipt = null;
    },
    // Save Handler
    async onReceiptSave(receiptData) {
      console.info(`DATA  MAIN ${JSON.stringify(receiptData)}`);
      try {
        this.loading = true;
        let response;
        if (this.selectedReceipt && this.selectedReceipt.id) {
          response = await this.$axios.put(`/api/ar-receive-headers/${this.selectedReceipt.id}`, receiptData);
        } else {
          response = await this.$axios.post('/api/ar-receive-headers', receiptData);
        }
        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success');
          this.closeEditDialog();
          await this.fetchReceipts();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Save failed');
        }
      } catch (error) {
        var _error$response2, _error$response2$data;
        console.error('Error saving receipt:', error);
        const errorMessage = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ';
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.receipts];

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase();
        filtered = filtered.filter(receipt => receipt.receiptNumber.toLowerCase().includes(search) || receipt.referenceNumber && receipt.referenceNumber.toLowerCase().includes(search) || receipt.notes && receipt.notes.toLowerCase().includes(search));
      }

      // Payment method filter
      if (this.filters.paymentMethod) {
        filtered = filtered.filter(receipt => receipt.paymentMethod === this.filters.paymentMethod);
      }

      // Invoice filter
      if (this.filters.invoiceHeaderId) {
        filtered = filtered.filter(receipt => receipt.invoiceHeaderId == this.filters.invoiceHeaderId);
      }

      // Booking date range filter
      if (this.filters.bookingDateFrom || this.filters.bookingDateTo) {
        filtered = filtered.filter(receipt => {
          const bookingDate = new Date(receipt.bookingDate);
          const dateFrom = this.filters.bookingDateFrom ? new Date(this.filters.bookingDateFrom) : null;
          const dateTo = this.filters.bookingDateTo ? new Date(this.filters.bookingDateTo) : null;
          if (dateFrom && bookingDate < dateFrom) return false;
          if (dateTo && bookingDate > dateTo) return false;
          return true;
        });
      }
      this.filteredReceipts = filtered;
      this.sortData();
      this.pagination.currentPage = 1;
      this.calculateSummaryStats();
    },
    resetFilters() {
      this.filters = {
        search: '',
        paymentMethod: '',
        invoiceHeaderId: '',
        bookingDateFrom: '',
        bookingDateTo: ''
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
      this.filteredReceipts.sort((a, b) => {
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
      const total = this.filteredReceipts.length;
      const cash = this.filteredReceipts.filter(r => r.paymentMethod === 'cash').length;
      const bankTransfer = this.filteredReceipts.filter(r => r.paymentMethod === 'bank_transfer').length;
      const check = this.filteredReceipts.filter(r => r.paymentMethod === 'check').length;
      const creditCard = this.filteredReceipts.filter(r => r.paymentMethod === 'credit_card').length;
      const other = this.filteredReceipts.filter(r => r.paymentMethod === 'other').length;
      const totalAmount = this.filteredReceipts.reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0);
      const cashAmount = this.filteredReceipts.filter(r => r.paymentMethod === 'cash').reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0);
      const bankTransferAmount = this.filteredReceipts.filter(r => r.paymentMethod === 'bank_transfer').reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0);
      const checkAmount = this.filteredReceipts.filter(r => r.paymentMethod === 'check').reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0);
      const creditCardAmount = this.filteredReceipts.filter(r => r.paymentMethod === 'credit_card').reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0);
      this.summaryStats = {
        total: {
          count: total
        },
        cash: {
          count: cash,
          percentage: total > 0 ? Math.round(cash / total * 100) : 0,
          amount: cashAmount
        },
        bankTransfer: {
          count: bankTransfer,
          percentage: total > 0 ? Math.round(bankTransfer / total * 100) : 0,
          amount: bankTransferAmount
        },
        check: {
          count: check,
          percentage: total > 0 ? Math.round(check / total * 100) : 0,
          amount: checkAmount
        },
        creditCard: {
          count: creditCard,
          percentage: total > 0 ? Math.round(creditCard / total * 100) : 0,
          amount: creditCardAmount
        },
        other: {
          count: other,
          percentage: total > 0 ? Math.round(other / total * 100) : 0,
          amount: 0
        },
        totalAmount,
        averageAmount: total > 0 ? totalAmount / total : 0
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
      const csvData = this.convertToCSV(this.filteredReceipts);
      this.downloadCSV(csvData, 'receipts-summary.csv');
    },
    convertToCSV(data) {
      const headers = ['Receipt Number', 'Booking Date', 'Received Date', 'Invoice Number', 'Total Amount', 'Payment Method', 'Reference Number', 'Notes', 'Created Date'];
      const csvContent = [headers.join(','), ...data.map(row => [`"${row.receiptNumber}"`, row.bookingDate, row.receivedDate, `"${row.invoiceHeader ? row.invoiceHeader.invoiceNumber : ''}"`, row.totalReceivedAmount, row.paymentMethod, `"${row.referenceNumber || ''}"`, `"${(row.notes || '').replace(/"/g, '""')}"`, this.formatDate(row.createdAt)].join(','))].join('\n');
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
    formatCurrency(amount) {
      if (!amount) return '0.00';
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatPaymentMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        check: 'ເຊັກ',
        bank_transfer: 'ໂອນເງິນທະນາຄານ',
        credit_card: 'ບັດເຄຣດິດ',
        other: 'ອື່ນໆ'
      };
      return methods[method] || method;
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
// CONCATENATED MODULE: ./pages/admin/accounting/ar/receive/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ar_receivevue_type_script_lang_js_ = (receivevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/accounting/ar/receive/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(987)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ar_receivevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62505c1b",
  "57587191"
  
)

/* harmony default export */ var receive = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(649);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("29b780be", content, true, context)
};

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(651);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("28eba64e", content, true, context)
};

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a8d2800_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(557);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a8d2800_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a8d2800_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a8d2800_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a8d2800_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-1a8d2800]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1050}.enhanced-dialog[data-v-1a8d2800]{max-height:90vh;max-width:1200px}.enhanced-dialog[data-v-1a8d2800],.invoice-browser-dialog[data-v-1a8d2800]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;overflow:hidden;width:100%}.invoice-browser-dialog[data-v-1a8d2800]{max-height:80vh;max-width:1000px}.modal-header[data-v-1a8d2800]{background:linear-gradient(135deg,#28a745,#20c997);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;padding:20px}.modal-header[data-v-1a8d2800],.modal-title[data-v-1a8d2800]{align-items:center;display:flex}.modal-title[data-v-1a8d2800]{font-size:18px;font-weight:600;gap:10px;margin:0}.close-button[data-v-1a8d2800]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;padding:5px;transition:background .2s}.close-button[data-v-1a8d2800]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-1a8d2800]{flex:1;overflow:hidden}.loading-state[data-v-1a8d2800],.modal-body[data-v-1a8d2800]{display:flex;flex-direction:column}.loading-state[data-v-1a8d2800]{align-items:center;color:#666;justify-content:center;padding:40px}.spinner[data-v-1a8d2800]{animation:spin-1a8d2800 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#28a745;height:40px;margin-bottom:15px;width:40px}@keyframes spin-1a8d2800{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.receipt-form[data-v-1a8d2800]{display:flex;flex:1;flex-direction:column;overflow:hidden}.tab-navigation[data-v-1a8d2800]{background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex}.tab-btn[data-v-1a8d2800]{align-items:center;background:none;border:none;color:#666;cursor:pointer;display:flex;flex:1;font-size:14px;font-weight:500;gap:8px;justify-content:center;padding:15px 20px;position:relative;transition:all .2s}.tab-btn[data-v-1a8d2800]:hover{background:rgba(40,167,69,.1);color:#28a745}.tab-btn.active[data-v-1a8d2800]{background:#fff;border-bottom:3px solid #28a745;color:#28a745}.line-count[data-v-1a8d2800]{background:#28a745;border-radius:12px;color:#fff;font-size:12px;min-width:20px;padding:2px 8px;text-align:center}.tab-content[data-v-1a8d2800]{flex:1;overflow-y:auto;padding:0}.form-section[data-v-1a8d2800]{border-bottom:1px solid #f0f0f0;padding:25px}.form-section[data-v-1a8d2800]:last-child{border-bottom:none}.section-title[data-v-1a8d2800]{align-items:center;border-bottom:2px solid #e9ecef;color:#333;display:flex;font-size:16px;font-weight:600;gap:10px;margin-bottom:20px;padding-bottom:10px}.section-title i[data-v-1a8d2800]{color:#28a745}.form-row[data-v-1a8d2800]{display:flex;flex-wrap:wrap;margin:-10px}.form-group[data-v-1a8d2800]{margin-bottom:20px;padding:10px}.col-md-6[data-v-1a8d2800]{flex:0 0 50%;max-width:50%}.form-group label[data-v-1a8d2800]{color:#333;display:block;font-size:14px;font-weight:500;margin-bottom:5px}.form-group label.required[data-v-1a8d2800]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-1a8d2800]{border:1px solid #ddd;border-radius:6px;font-size:14px;padding:10px 12px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-1a8d2800]:focus{border-color:#28a745;box-shadow:0 0 0 3px rgba(40,167,69,.1);outline:none}.form-control.is-invalid[data-v-1a8d2800]{border-color:#e74c3c;box-shadow:0 0 0 3px rgba(231,76,60,.1)}.form-control-sm[data-v-1a8d2800]{font-size:13px;padding:6px 8px}.invalid-feedback[data-v-1a8d2800]{color:#e74c3c;display:block;font-size:12px;margin-top:5px;width:100%}.auto-calculated-field[data-v-1a8d2800]{background-color:#f8f9fa!important;border-style:dashed!important;color:#495057!important;cursor:not-allowed;font-weight:600}.auto-calculated-field[data-v-1a8d2800]:disabled{opacity:.8}.form-group label.auto-calculated[data-v-1a8d2800]{align-items:center;color:#28a745;display:flex;font-weight:600;gap:8px}.form-text.text-muted[data-v-1a8d2800]{align-items:center;color:#6c757d!important;display:flex;font-size:12px;gap:5px;margin-top:5px}.invoice-selector[data-v-1a8d2800]{display:flex;gap:10px}.invoice-selector select[data-v-1a8d2800]{flex:1}.btn-browse-invoice[data-v-1a8d2800]{padding:10px 16px;white-space:nowrap}.allocation-summary[data-v-1a8d2800],.amount-summary[data-v-1a8d2800]{background:#f8f9fa;border-left:4px solid #28a745;border-radius:8px;margin:20px 25px;padding:20px}.totals-grid[data-v-1a8d2800]{grid-gap:15px;display:grid;gap:15px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.total-item[data-v-1a8d2800]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:8px 0}.total-item[data-v-1a8d2800]:last-child{border-bottom:none}.total-item.balance-warning[data-v-1a8d2800]{background:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;display:none;padding:12px}.total-item .amount[data-v-1a8d2800]{color:#333;font-weight:600}.total-item .amount.received[data-v-1a8d2800]{color:#28a745}.total-item .amount.allocated[data-v-1a8d2800]{color:#007bff}.total-item .amount.balance.negative[data-v-1a8d2800]{color:#dc3545}.total-item .amount.balance.positive[data-v-1a8d2800]{color:#ffc107}.success-balance[data-v-1a8d2800]{background:#d4edda;border-radius:6px;padding:8px 12px}.amount.balanced[data-v-1a8d2800]{color:#155724!important;font-weight:600;gap:5px}.amount.balanced[data-v-1a8d2800],.balance-info[data-v-1a8d2800]{align-items:center;display:flex}.balance-info[data-v-1a8d2800]{background:#e7f3ff;border:1px solid #bee5eb;border-radius:6px;color:#0c5460;font-size:14px;gap:8px;margin-top:15px;padding:12px}.balance-message[data-v-1a8d2800]{display:none}.allocation-section[data-v-1a8d2800]{padding:25px}.allocation-header[data-v-1a8d2800]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.allocation-info[data-v-1a8d2800]{align-items:center;display:flex;gap:15px}.invoice-info[data-v-1a8d2800]{color:#666;font-size:14px}.allocation-count-info[data-v-1a8d2800]{background:#e9ecef;border-radius:20px;color:#666;font-size:12px;font-weight:500;padding:8px 12px}.no-invoice-state[data-v-1a8d2800],.no-lines-state[data-v-1a8d2800],.no-results-state[data-v-1a8d2800]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:8px;padding:60px 20px;text-align:center}.empty-content i[data-v-1a8d2800]{color:#dee2e6;font-size:64px;margin-bottom:20px}.empty-content h4[data-v-1a8d2800]{color:#666;margin-bottom:10px}.empty-content p[data-v-1a8d2800]{color:#999;margin-bottom:30px}.allocation-notice[data-v-1a8d2800]{align-items:center;background:#e7f3ff;border-left:4px solid #007bff;border-radius:6px;color:#495057;display:flex;font-size:14px;gap:10px;margin-bottom:20px;padding:15px}.allocation-table-container[data-v-1a8d2800]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:20px;overflow:hidden}.allocation-table .table[data-v-1a8d2800],.invoice-table-container .table[data-v-1a8d2800]{border-collapse:collapse;margin:0;width:100%}.allocation-table .table th[data-v-1a8d2800],.invoice-table-container .table th[data-v-1a8d2800]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-size:13px;font-weight:600;padding:12px 8px;text-align:center}.allocation-table .table td[data-v-1a8d2800],.invoice-table-container .table td[data-v-1a8d2800]{border-top:1px solid #dee2e6;font-size:13px;padding:8px;vertical-align:middle}.line-number[data-v-1a8d2800]{color:#666;font-weight:600;text-align:center}.invoice-line-display[data-v-1a8d2800]{line-height:1.4}.line-description[data-v-1a8d2800]{color:#333;font-weight:500;margin-bottom:4px}.line-details[data-v-1a8d2800]{color:#666;font-size:12px}.invoice-line-total[data-v-1a8d2800],.remaining-amount[data-v-1a8d2800]{color:#28a745;font-weight:600;text-align:right}.over-allocated[data-v-1a8d2800]{color:#dc3545!important}.fully-allocated[data-v-1a8d2800]{color:#6c757d!important}.allocation-row[data-v-1a8d2800],.invoice-row[data-v-1a8d2800]{transition:background-color .2s}.allocation-row[data-v-1a8d2800]:hover,.invoice-row[data-v-1a8d2800]:hover{background-color:rgba(40,167,69,.05)}.quick-allocation-actions[data-v-1a8d2800]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;margin-top:10px;padding:15px 0}.quick-actions-left[data-v-1a8d2800]{display:flex;gap:10px}.allocation-helper[data-v-1a8d2800]{align-items:center;color:#666;display:flex;font-size:12px;font-style:italic;gap:5px}.search-section[data-v-1a8d2800]{background:#f8f9fa;border-bottom:1px solid #e9ecef;padding:20px}.search-input-group[data-v-1a8d2800]{max-width:400px;position:relative}.search-icon[data-v-1a8d2800]{color:#666;font-size:16px;left:12px;position:absolute;top:50%;transform:translateY(-50%)}.search-input[data-v-1a8d2800]{border-radius:8px;font-size:16px;padding-left:40px}.invoice-list[data-v-1a8d2800]{flex:1;max-height:500px;overflow-y:auto}.customer-info[data-v-1a8d2800]{line-height:1.4}.customer-name[data-v-1a8d2800]{color:#333;font-weight:500}.customer-email[data-v-1a8d2800]{color:#666;font-size:12px}.amount-cell[data-v-1a8d2800]{color:#28a745;font-weight:600;text-align:right}.status-badge[data-v-1a8d2800]{border-radius:12px;font-size:11px;font-weight:500;padding:4px 8px;text-transform:uppercase}.status-draft[data-v-1a8d2800]{background:#ffeaa7;color:#fdcb6e}.status-sent[data-v-1a8d2800]{background:#74b9ff;color:#0984e3}.status-paid[data-v-1a8d2800]{background:#00b894;color:#00a085}.status-overdue[data-v-1a8d2800]{background:#ff7675;color:#d63031}.status-cancelled[data-v-1a8d2800]{background:#636e72;color:#2d3436}.btn[data-v-1a8d2800]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-1a8d2800]{background:#28a745;color:#fff}.btn-secondary[data-v-1a8d2800]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-1a8d2800]{background:#fff;border:2px solid #007bff;color:#007bff}.btn-outline-primary[data-v-1a8d2800]:hover{background:#007bff;color:#fff}.btn-outline-success[data-v-1a8d2800]{background:#fff;border:2px solid #28a745;color:#28a745}.btn-outline-info[data-v-1a8d2800]{background:#fff;border:2px solid #17a2b8;color:#17a2b8}.btn-outline-warning[data-v-1a8d2800]{background:#fff;border:2px solid #ffc107;color:#ffc107}.btn-danger[data-v-1a8d2800]{background:#dc3545;color:#fff}.btn[data-v-1a8d2800]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-1a8d2800]:disabled{cursor:not-allowed;opacity:.6;transform:none}.btn-sm[data-v-1a8d2800]{font-size:12px;padding:6px 12px}.btn-lg[data-v-1a8d2800]{font-size:16px;padding:12px 30px}.modal-footer[data-v-1a8d2800]{background:#f8f9fa;border-top:1px solid #e9ecef;justify-content:space-between;padding:20px}.footer-info[data-v-1a8d2800],.modal-footer[data-v-1a8d2800]{align-items:center;display:flex}.result-count[data-v-1a8d2800]{color:#666;font-size:14px}.footer-actions[data-v-1a8d2800]{display:flex;gap:10px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-1a8d2800],.invoice-browser-dialog[data-v-1a8d2800]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.totals-grid[data-v-1a8d2800]{grid-template-columns:1fr}.allocation-header[data-v-1a8d2800]{flex-direction:column;gap:15px}.allocation-info[data-v-1a8d2800]{flex-direction:column;gap:10px}.allocation-table-container[data-v-1a8d2800],.invoice-table-container[data-v-1a8d2800]{overflow-x:auto}.allocation-table .table[data-v-1a8d2800],.invoice-table-container .table[data-v-1a8d2800]{min-width:900px}.footer-actions[data-v-1a8d2800]{flex-direction:column}.footer-actions .btn[data-v-1a8d2800]{justify-content:center;width:100%}.tab-btn[data-v-1a8d2800]{font-size:12px;gap:4px;padding:12px 8px}.form-row[data-v-1a8d2800],.tab-btn[data-v-1a8d2800]{flex-direction:column}.col-md-6[data-v-1a8d2800]{flex:1;max-width:100%}.invoice-selector[data-v-1a8d2800]{flex-direction:column;gap:10px}.quick-allocation-actions[data-v-1a8d2800]{flex-direction:column;gap:15px}.search-input-group[data-v-1a8d2800]{max-width:100%}}@media (max-width:480px){.modal-header[data-v-1a8d2800]{padding:15px}.modal-title[data-v-1a8d2800]{font-size:16px}.form-section[data-v-1a8d2800]{padding:20px 15px}.section-title[data-v-1a8d2800]{font-size:14px}.modal-footer[data-v-1a8d2800]{padding:15px}.allocation-section[data-v-1a8d2800]{padding:20px 15px}.no-invoice-state[data-v-1a8d2800],.no-lines-state[data-v-1a8d2800],.no-results-state[data-v-1a8d2800]{padding:40px 15px}.empty-content i[data-v-1a8d2800]{font-size:48px}.allocation-summary[data-v-1a8d2800],.amount-summary[data-v-1a8d2800]{margin:20px 15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(558);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-635eee10]{align-items:center;background-color:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.modal-container[data-v-635eee10]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1000px;overflow:hidden;width:100%}.modal-header[data-v-635eee10]{align-items:center;background:linear-gradient(135deg,#28a745,#20c997);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-header h2[data-v-635eee10]{color:#fff;font-size:24px;font-weight:600;margin:0}.close-btn[data-v-635eee10]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:24px;padding:4px;transition:all .2s}.close-btn[data-v-635eee10]:hover{background-color:hsla(0,0%,100%,.2)}.modal-body[data-v-635eee10]{flex:1;overflow-y:auto;padding:24px}.modal-footer[data-v-635eee10]{background-color:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.info-section[data-v-635eee10]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:32px;overflow:hidden}.info-section[data-v-635eee10]:last-child{margin-bottom:0}.section-header[data-v-635eee10]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:16px 20px}.section-header h3[data-v-635eee10]{align-items:center;color:#333;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header h3 i[data-v-635eee10]{color:#28a745}.item-count[data-v-635eee10]{background-color:#e9ecef;border-radius:12px;color:#666;font-size:12px;padding:4px 8px}.info-grid[data-v-635eee10]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));padding:20px}.info-item[data-v-635eee10]{display:flex;flex-direction:column;gap:4px}.info-item label[data-v-635eee10]{color:#666;font-size:12px;font-weight:500;letter-spacing:.5px;text-transform:uppercase}.info-item span[data-v-635eee10]{color:#333;font-size:14px;font-weight:500}.receipt-number[data-v-635eee10]{color:#28a745!important;font-family:monospace;font-size:16px!important;font-weight:600!important}.invoice-number[data-v-635eee10]{color:#007bff!important;font-family:monospace;font-size:15px!important;font-weight:600!important}.customer-name[data-v-635eee10]{color:#495057!important;font-weight:600!important}.amount-received[data-v-635eee10]{color:#28a745!important;font-size:18px!important;font-weight:700!important}.invoice-amount[data-v-635eee10]{color:#495057!important;font-size:16px!important;font-weight:600!important}.reference-number[data-v-635eee10]{color:#495057!important;font-family:monospace;font-size:14px!important}.payment-method-badge[data-v-635eee10]{border-radius:12px;font-size:12px;font-weight:600;padding:6px 12px;text-transform:uppercase}.payment-method-badge.cash[data-v-635eee10]{background-color:#d4edda;color:#155724}.payment-method-badge.bank_transfer[data-v-635eee10]{background-color:#cce5ff;color:#004085}.payment-method-badge.check[data-v-635eee10]{background-color:#fff3cd;color:#856404}.payment-method-badge.credit_card[data-v-635eee10]{background-color:#f8d7da;color:#721c24}.payment-method-badge.other[data-v-635eee10]{background-color:#e2e3e5;color:#383d41}.status-badge[data-v-635eee10]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.draft[data-v-635eee10]{background-color:#f8f9fa;color:#6c757d}.status-badge.sent[data-v-635eee10]{background-color:#d1ecf1;color:#0c5460}.status-badge.paid[data-v-635eee10]{background-color:#d4edda;color:#155724}.status-badge.overdue[data-v-635eee10]{background-color:#f8d7da;color:#721c24}.status-badge.cancelled[data-v-635eee10]{background-color:#e2e3e5;color:#383d41}.payment-summary[data-v-635eee10]{padding:20px}.summary-row[data-v-635eee10]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:12px 0}.summary-row[data-v-635eee10]:last-child{border-bottom:none}.summary-row.subtotal[data-v-635eee10]{border-top:2px solid #28a745;font-weight:600;margin-top:8px;padding-top:16px}.summary-row label[data-v-635eee10]{color:#495057;font-size:14px;font-weight:500}.summary-row .amount[data-v-635eee10]{font-family:monospace;font-size:16px;font-weight:600}.amount.invoice-total[data-v-635eee10]{color:#495057}.amount.current-payment[data-v-635eee10]{color:#28a745}.amount.total-received[data-v-635eee10]{color:#007bff}.amount.remaining[data-v-635eee10]{color:#dc3545;font-size:18px}.amount.remaining.fully-paid[data-v-635eee10]{color:#28a745}.paid-status[data-v-635eee10]{align-items:center;background:#d4edda;border-radius:6px;color:#155724;display:flex;font-weight:600;gap:8px;margin-top:16px;padding:12px 16px}.paid-status i[data-v-635eee10]{font-size:18px}.notes-content[data-v-635eee10]{background-color:#f8f9fa;border-radius:4px;color:#495057;font-size:14px;line-height:1.6;margin:20px;padding:20px}.table-container[data-v-635eee10]{overflow-x:auto}.data-table[data-v-635eee10]{border-collapse:collapse;width:100%}.data-table td[data-v-635eee10],.data-table th[data-v-635eee10]{border-bottom:1px solid #e9ecef;padding:12px;text-align:left}.data-table th[data-v-635eee10]{background-color:#f8f9fa;color:#495057;font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}.data-table td[data-v-635eee10]{color:#333;font-size:14px}.data-table tbody tr[data-v-635eee10]:hover{background-color:#f8f9fa}.line-number[data-v-635eee10]{color:#666;font-weight:600;text-align:center}.invoice-line-info .line-description[data-v-635eee10]{color:#333;font-weight:600;margin-bottom:4px}.invoice-line-info .line-details[data-v-635eee10]{color:#666;font-size:12px}.allocated-amount[data-v-635eee10]{color:#28a745;font-weight:600;text-align:right}.line-notes[data-v-635eee10]{color:#666;font-style:italic}.allocation-status[data-v-635eee10]{border-radius:8px;font-size:11px;font-weight:600;padding:3px 8px;text-transform:uppercase}.allocation-status.fully-allocated[data-v-635eee10]{background-color:#d4edda;color:#155724}.allocation-status.partially-allocated[data-v-635eee10]{background-color:#fff3cd;color:#856404}.allocation-status.not-allocated[data-v-635eee10]{background-color:#f8d7da;color:#721c24}.allocation-status.unknown[data-v-635eee10]{background-color:#e2e3e5;color:#383d41}.data-table tfoot td[data-v-635eee10]{background-color:#f8f9fa;border-bottom:none;border-top:2px solid #dee2e6;font-weight:600}.allocated-total[data-v-635eee10]{color:#28a745;text-align:right}.btn[data-v-635eee10]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;justify-content:center;min-width:120px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn-primary[data-v-635eee10]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-635eee10]:hover{background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-635eee10]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-635eee10]:hover{background-color:#5a6268;border-color:#5a6268}.btn-success[data-v-635eee10]{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success[data-v-635eee10]:hover{background-color:#218838;border-color:#218838}@media (max-width:768px){.modal-overlay[data-v-635eee10]{padding:10px}.modal-container[data-v-635eee10]{max-height:95vh;max-width:100%}.modal-header[data-v-635eee10]{padding:20px}.modal-header h2[data-v-635eee10]{font-size:20px}.modal-body[data-v-635eee10]{padding:20px}.modal-footer[data-v-635eee10]{flex-direction:column;padding:16px 20px}.info-grid[data-v-635eee10]{gap:12px;grid-template-columns:1fr;padding:16px}.section-header[data-v-635eee10]{align-items:flex-start;flex-direction:column;gap:8px;padding:12px 16px}.payment-summary[data-v-635eee10]{padding:16px}.notes-content[data-v-635eee10]{margin:16px;padding:16px}.data-table[data-v-635eee10]{font-size:12px}.data-table td[data-v-635eee10],.data-table th[data-v-635eee10]{padding:8px}.btn[data-v-635eee10]{width:100%}}@media (max-width:576px){.modal-header[data-v-635eee10]{align-items:flex-start;flex-direction:column;gap:12px}.close-btn[data-v-635eee10]{position:absolute;right:16px;top:16px}.data-table td[data-v-635eee10],.data-table th[data-v-635eee10]{font-size:11px;padding:6px}.invoice-line-info .line-description[data-v-635eee10]{font-size:12px}.invoice-line-info .line-details[data-v-635eee10]{font-size:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(988);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3cbc3d4a", content, true, context)
};

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/maintain/index.vue?vue&type=template&id=1a8d2800&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.visible ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-1a8d2800><h4 class=\"modal-title\" data-v-1a8d2800><i class=\"fas fa-receipt\" data-v-1a8d2800></i>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂການຮັບຊຳລະ' : 'ເພີ່ມການຮັບຊຳລະໃໝ່') + "\n        ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-1a8d2800><i class=\"fas fa-times\" data-v-1a8d2800></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-1a8d2800>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-1a8d2800></div> <p data-v-1a8d2800>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"receipt-form\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<div class=\"tab-navigation\" data-v-1a8d2800><button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'header'
  }]) + " data-v-1a8d2800><i class=\"fas fa-file-alt\" data-v-1a8d2800></i>\n              ຂໍ້ມູນການຮັບຊຳລະ\n            </button> <button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'allocations'
  }]) + " data-v-1a8d2800><i class=\"fas fa-list\" data-v-1a8d2800></i>\n              ການແບ່ງປັນຊຳລະ\n              " + (_vm.allocationLines.length > 0 ? "<span class=\"line-count\" data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.allocationLines.length)) + "</span>" : "<!---->") + "</button></div> "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'header' ? '' : 'none'
  }) + " data-v-1a8d2800>", "</div>", [_vm._ssrNode("<form data-v-1a8d2800>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-1a8d2800><i class=\"fas fa-info-circle\" data-v-1a8d2800></i>\n                  ຂໍ້ມູນພື້ນຖານ\n                </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1a8d2800><label for=\"receiptNumber\" class=\"required\" data-v-1a8d2800>ເລກທີໃບຮັບ</label> <input id=\"receiptNumber\" type=\"text\" placeholder=\"ເຊັ່ນ: RCP-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.receiptNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.receiptNumber
  }) + " data-v-1a8d2800> " + (_vm.errors.receiptNumber ? "<div class=\"invalid-feedback\" data-v-1a8d2800>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.receiptNumber) + "\n                    ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<label for=\"invoiceHeaderId\" class=\"required\" data-v-1a8d2800>ໃບແຈ້ງໜີ້</label> "), _vm._ssrNode("<div class=\"invoice-selector\" data-v-1a8d2800>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceHeaderId,
      expression: "form.invoiceHeaderId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.invoiceHeaderId
    },
    attrs: {
      "id": "invoiceHeaderId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "invoiceHeaderId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onInvoiceChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກໃບແຈ້ງໜີ້")]), _vm._v(" "), _vm._l(_vm.invoices, function (invoice) {
    return _c('option', {
      key: invoice.id,
      domProps: {
        "value": invoice.id
      }
    }, [_vm._v("\n                          " + _vm._s(invoice.invoiceNumber) + " -\n                          " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + "\n                          (" + _vm._s(_vm.formatCurrency(invoice.totalAmount)) + ")\n                        ")]);
  })], 2), _vm._ssrNode(" <button type=\"button\" title=\"ເລືອກໃບແຈ້ງໜີ້\" class=\"btn btn-outline-primary btn-browse-invoice\" data-v-1a8d2800><i class=\"fas fa-search\" data-v-1a8d2800></i>\n                        ຄົ້ນຫາ\n                      </button>")], 2), _vm._ssrNode(" " + (_vm.errors.invoiceHeaderId ? "<div class=\"invalid-feedback\" data-v-1a8d2800>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.invoiceHeaderId) + "\n                    ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1a8d2800><label for=\"totalReceivedAmount\" class=\"auto-calculated\" data-v-1a8d2800><i class=\"fas fa-calculator\" data-v-1a8d2800></i>\n                      ຍອດເງິນທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ)\n                    </label> <input id=\"totalReceivedAmount\" type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"0.00\" readonly=\"readonly\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.form.totalReceivedAmount) + _vm._ssrClass("form-control auto-calculated-field", {
    'is-invalid': _vm.errors.totalReceivedAmount
  }) + " data-v-1a8d2800> <small class=\"form-text text-muted\" data-v-1a8d2800><i class=\"fas fa-info-circle\" data-v-1a8d2800></i>\n                      ຍອດນີ້ຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກການແບ່ງປັນ\n                    </small> " + (_vm.errors.totalReceivedAmount ? "<div class=\"invalid-feedback\" data-v-1a8d2800>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.totalReceivedAmount) + "\n                    ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<label for=\"paymentMethod\" class=\"required\" data-v-1a8d2800>ວິທີຈ່າຍ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentMethod,
      expression: "form.paymentMethod"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.paymentMethod
    },
    attrs: {
      "id": "paymentMethod"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "paymentMethod", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "check"
    }
  }, [_vm._v("ເຊັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("ໂອນເງິນທະນາຄານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "credit_card"
    }
  }, [_vm._v("ບັດເຄຣດິດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "other"
    }
  }, [_vm._v("ອື່ນໆ")])]), _vm._ssrNode(" " + (_vm.errors.paymentMethod ? "<div class=\"invalid-feedback\" data-v-1a8d2800>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.paymentMethod) + "\n                    ") + "</div>" : "<!---->"))], 2)], 2)], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-1a8d2800><h5 class=\"section-title\" data-v-1a8d2800><i class=\"fas fa-calendar-alt\" data-v-1a8d2800></i>\n                  ວັນທີ\n                </h5> <div class=\"form-row\" data-v-1a8d2800><div class=\"form-group col-md-6\" data-v-1a8d2800><label for=\"bookingDate\" class=\"required\" data-v-1a8d2800>ວັນທີບັນທຶກ</label> <input id=\"bookingDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.bookingDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.bookingDate
  }) + " data-v-1a8d2800> " + (_vm.errors.bookingDate ? "<div class=\"invalid-feedback\" data-v-1a8d2800>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.bookingDate) + "\n                    ") + "</div>" : "<!---->") + "</div> <div class=\"form-group col-md-6\" data-v-1a8d2800><label for=\"receivedDate\" class=\"required\" data-v-1a8d2800>ວັນທີຮັບເງິນ</label> <input id=\"receivedDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.receivedDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.receivedDate
  }) + " data-v-1a8d2800> " + (_vm.errors.receivedDate ? "<div class=\"invalid-feedback\" data-v-1a8d2800>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.receivedDate) + "\n                    ") + "</div>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"form-section\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-1a8d2800><i class=\"fas fa-clipboard-list\" data-v-1a8d2800></i>\n                  ຂໍ້ມູນເພີ່ມເຕີມ\n                </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1a8d2800><label for=\"referenceNumber\" data-v-1a8d2800>ເລກອ້າງອີງ</label> <input id=\"referenceNumber\" type=\"text\" placeholder=\"ເລກອ້າງອີງ (ຖ້າມີ)...\"" + _vm._ssrAttr("value", _vm.form.referenceNumber) + " class=\"form-control\" data-v-1a8d2800></div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1a8d2800>", "</div>", [_vm._ssrNode("<label for=\"inputterId\" data-v-1a8d2800>ຜູ້ບັນທຶກ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.inputterId,
      expression: "form.inputterId"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "inputterId",
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
        _vm.$set(_vm.form, "inputterId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ບັນທຶກ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                        " + _vm._s(user.cus_name) + " - " + _vm._s(user.cus_email) + "\n                      ")]);
  })], 2)], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-1a8d2800><label for=\"notes\" data-v-1a8d2800>ໝາຍເຫດ</label> <textarea id=\"notes\" rows=\"3\" placeholder=\"ໝາຍເຫດກ່ຽວກັບການຮັບຊຳລະ...\" class=\"form-control\" data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.form.notes)) + "</textarea></div> " + (_vm.isEdit ? "<div class=\"form-group\" data-v-1a8d2800><label for=\"reason\" class=\"required\" data-v-1a8d2800>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-1a8d2800> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-1a8d2800>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.reason) + "\n                  ") + "</div>" : "<!---->") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-1a8d2800><div class=\"totals-grid\" data-v-1a8d2800><div class=\"total-item\" data-v-1a8d2800><label data-v-1a8d2800>ຍອດທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ):</label> <span class=\"amount received\" data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.form.totalReceivedAmount))) + "</span></div> <div class=\"total-item\" data-v-1a8d2800><label data-v-1a8d2800>ລວມການແບ່ງປັນ:</label> <span class=\"amount allocated\" data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedAllocatedTotal))) + "</span></div> <div class=\"total-item success-balance\" data-v-1a8d2800><label data-v-1a8d2800>ສະຖານະ:</label> <span class=\"amount balance balanced\" data-v-1a8d2800><i class=\"fas fa-check-circle\" data-v-1a8d2800></i>\n                      ສົມດຸນ\n                    </span></div></div> <div class=\"balance-info\" data-v-1a8d2800><i class=\"fas fa-lightbulb\" data-v-1a8d2800></i> <span data-v-1a8d2800>\n                    ກະລຸນາໄປທີ່ແຖບ &quot;ການແບ່ງປັນຊຳລະ&quot;\n                    ເພື່ອໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ\n                  </span></div></div>")], 2)]), _vm._ssrNode(" <div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'allocations' ? '' : 'none'
  }) + " data-v-1a8d2800><div class=\"allocation-section\" data-v-1a8d2800><div class=\"allocation-header\" data-v-1a8d2800><h5 class=\"section-title\" data-v-1a8d2800><i class=\"fas fa-list\" data-v-1a8d2800></i>\n                  ການແບ່ງປັນການຮັບຊຳລະ\n                </h5> <div class=\"allocation-info\" data-v-1a8d2800>" + (_vm.selectedInvoice ? "<span class=\"invoice-info\" data-v-1a8d2800><strong data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.selectedInvoice.invoiceNumber)) + "</strong>" + _vm._ssrEscape(" -\n                    " + _vm._s(_vm.selectedInvoice.customer ? _vm.selectedInvoice.customer.name : 'N/A') + "\n                  ") + "</span>" : "<!---->") + " " + (_vm.allocationLines.length > 0 ? "<span class=\"allocation-count-info\" data-v-1a8d2800>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.allocationLines.length) + " ລາຍການ\n                  ") + "</span>" : "<!---->") + "</div></div> " + (!_vm.selectedInvoice ? "<div class=\"no-invoice-state\" data-v-1a8d2800><div class=\"empty-content\" data-v-1a8d2800><i class=\"fas fa-file-invoice\" data-v-1a8d2800></i> <h4 data-v-1a8d2800>ກະລຸນາເລືອກໃບແຈ້ງໜີ້ກ່ອນ</h4> <p data-v-1a8d2800>\n                    ເພື່ອເຮັດການແບ່ງປັນການຮັບຊຳລະ\n                    ກະລຸນາເລືອກໃບແຈ້ງໜີ້ໃນແຖບຂໍ້ມູນການຮັບຊຳລະກ່ອນ\n                  </p> <button type=\"button\" class=\"btn btn-primary\" data-v-1a8d2800><i class=\"fas fa-arrow-left\" data-v-1a8d2800></i>\n                    ກັບໄປເລືອກໃບແຈ້ງໜີ້\n                  </button></div></div>" : _vm.allocationLines.length > 0 ? "<div class=\"allocation-table-container\" data-v-1a8d2800><div class=\"allocation-notice\" data-v-1a8d2800><i class=\"fas fa-info-circle\" data-v-1a8d2800></i> <span data-v-1a8d2800>ລາຍການດ້ານລຸ່ມແມ່ນມາຈາກໃບແຈ້ງໜີ້ທີ່ເລືອກ -\n                    ກະລຸນາໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ</span></div> <div class=\"allocation-table\" data-v-1a8d2800><table class=\"table\" data-v-1a8d2800><thead data-v-1a8d2800><tr data-v-1a8d2800><th style=\"width: 40px\" data-v-1a8d2800>#</th> <th style=\"width: 250px\" data-v-1a8d2800>ລາຍການໃບແຈ້ງໜີ້</th> <th style=\"width: 100px\" data-v-1a8d2800>ຍອດໃບແຈ້ງໜີ້</th> <th style=\"width: 120px\" data-v-1a8d2800>ຍອດແບ່ງປັນ *</th> <th style=\"width: 100px\" data-v-1a8d2800>ວັນທີແບ່ງປັນ *</th> <th style=\"width: 120px\" data-v-1a8d2800>ຍອດຄົງເຫຼືອ</th> <th style=\"width: 150px\" data-v-1a8d2800>ໝາຍເຫດ</th></tr></thead> <tbody data-v-1a8d2800>" + _vm._ssrList(_vm.allocationLines, function (allocation, index) {
    return "<tr class=\"allocation-row\" data-v-1a8d2800><td class=\"line-number\" data-v-1a8d2800>" + _vm._ssrEscape("\n                          " + _vm._s(allocation.lineNumber) + "\n                        ") + "</td> <td data-v-1a8d2800><div class=\"invoice-line-display\" data-v-1a8d2800><div class=\"line-description\" data-v-1a8d2800><strong data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(allocation.invoiceLine.description)) + "</strong></div> <div class=\"line-details\" data-v-1a8d2800>" + _vm._ssrEscape("\n                              ຈຳນວນ:\n                              " + _vm._s(_vm.formatNumber(allocation.invoiceLine.quantity)) + "\n                              ×\n                              " + _vm._s(_vm.formatCurrency(allocation.invoiceLine.unitPrice)) + "\n                              ") + (allocation.invoiceLine.taxRate > 0 ? "<span data-v-1a8d2800>" + _vm._ssrEscape("\n                                + ພາສີ " + _vm._s(allocation.invoiceLine.taxRate) + "%\n                              ") + "</span>" : "<!---->") + "</div></div></td> <td class=\"invoice-line-total\" data-v-1a8d2800>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.formatCurrency(allocation.invoiceLine.lineTotal)) + "\n                        ") + "</td> <td data-v-1a8d2800><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("max", allocation.invoiceLine.lineTotal) + " placeholder=\"0.00\"" + _vm._ssrAttr("value", allocation.allocatedAmount) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`allocation_${index}_allocatedAmount`]
    }) + " data-v-1a8d2800> " + (_vm.errors[`allocation_${index}_allocatedAmount`] ? "<div class=\"invalid-feedback\" data-v-1a8d2800>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.errors[`allocation_${index}_allocatedAmount`]) + "\n                          ") + "</div>" : "<!---->") + "</td> <td data-v-1a8d2800><input type=\"date\"" + _vm._ssrAttr("value", allocation.allocationDate) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`allocation_${index}_allocationDate`]
    }) + " data-v-1a8d2800></td> <td class=\"remaining-amount\" data-v-1a8d2800><span" + _vm._ssrClass(null, {
      'over-allocated': _vm.isOverAllocated(allocation),
      'fully-allocated': _vm.isFullyAllocated(allocation)
    }) + " data-v-1a8d2800>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.formatCurrency(_vm.getRemainingAmount(allocation))) + "\n                          ") + "</span></td> <td data-v-1a8d2800><input type=\"text\" placeholder=\"ໝາຍເຫດ...\"" + _vm._ssrAttr("value", allocation.notes) + " class=\"form-control form-control-sm\" data-v-1a8d2800></td></tr>";
  }) + "</tbody></table></div> <div class=\"quick-allocation-actions\" data-v-1a8d2800><div class=\"quick-actions-left\" data-v-1a8d2800><button type=\"button\" title=\"ແບ່ງປັນຍອດເຕັມຂອງໃບແຈ້ງໜີ້\" class=\"btn btn-outline-primary btn-sm\" data-v-1a8d2800><i class=\"fas fa-file-invoice-dollar\" data-v-1a8d2800></i>\n                      ຍອດເຕັມ\n                    </button> <button type=\"button\" title=\"ແບ່ງຍອດໃບແຈ້ງໜີ້ເທົ່າກັນ\" class=\"btn btn-outline-success btn-sm\" data-v-1a8d2800><i class=\"fas fa-equals\" data-v-1a8d2800></i>\n                      ແບ່ງເທົ່າກັນ\n                    </button> <button type=\"button\" title=\"ແບ່ງຕາມອັດຕາສ່ວນຂອງແຕ່ລະລາຍການ\" class=\"btn btn-outline-info btn-sm\" data-v-1a8d2800><i class=\"fas fa-percentage\" data-v-1a8d2800></i>\n                      ແບ່ງຕາມອັດຕາສ່ວນ\n                    </button> <button type=\"button\" class=\"btn btn-outline-warning btn-sm\" data-v-1a8d2800><i class=\"fas fa-eraser\" data-v-1a8d2800></i>\n                      ລົບລ້າງທັງໝົດ\n                    </button></div> <div class=\"quick-actions-right\" data-v-1a8d2800><span class=\"allocation-helper\" data-v-1a8d2800><i class=\"fas fa-lightbulb\" data-v-1a8d2800></i>\n                      ໃຊ້ປຸ່ມດ້ານຊ້າຍເພື່ອແບ່ງປັນອັດຕະໂນມັດ\n                    </span></div></div> <div class=\"allocation-summary\" data-v-1a8d2800><div class=\"totals-grid\" data-v-1a8d2800><div class=\"total-item\" data-v-1a8d2800><label data-v-1a8d2800>ຍອດໃບແຈ້ງໜີ້:</label> <span class=\"amount\" data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.selectedInvoice.totalAmount))) + "</span></div> <div class=\"total-item\" data-v-1a8d2800><label data-v-1a8d2800>ຍອດທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ):</label> <span class=\"amount received\" data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.form.totalReceivedAmount))) + "</span></div> <div class=\"total-item\" data-v-1a8d2800><label data-v-1a8d2800>ລວມການແບ່ງປັນ:</label> <span class=\"amount allocated\" data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedAllocatedTotal))) + "</span></div> <div class=\"total-item success-balance\" data-v-1a8d2800><label data-v-1a8d2800>ສະຖານະ:</label> <span class=\"amount balance balanced\" data-v-1a8d2800><i class=\"fas fa-check-circle\" data-v-1a8d2800></i>\n                        ສົມດຸນ\n                      </span></div></div> <div class=\"balance-info\" data-v-1a8d2800><i class=\"fas fa-info-circle\" data-v-1a8d2800></i> <span data-v-1a8d2800>\n                      ຍອດທີ່ຮັບຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກລວມຍອດການແບ່ງປັນທັງໝົດ\n                    </span></div></div></div>" : "<div class=\"no-lines-state\" data-v-1a8d2800><div class=\"empty-content\" data-v-1a8d2800><i class=\"fas fa-list\" data-v-1a8d2800></i> <h4 data-v-1a8d2800>ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການ</h4> <p data-v-1a8d2800>ໃບແຈ້ງໜີ້ທີ່ເລືອກບໍ່ມີລາຍການສິນຄ້າ/ການບໍລິການ</p></div></div>") + "</div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-1a8d2800><div class=\"footer-actions\" data-v-1a8d2800><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-1a8d2800><i class=\"fas fa-times\" data-v-1a8d2800></i>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-1a8d2800>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-1a8d2800></i>" : "<i class=\"fas fa-save\" data-v-1a8d2800></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button></div></div>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.showInvoiceBrowser ? "<div class=\"modal-overlay\" data-v-1a8d2800><div class=\"invoice-browser-dialog\" data-v-1a8d2800><div class=\"modal-header\" data-v-1a8d2800><h4 class=\"modal-title\" data-v-1a8d2800><i class=\"fas fa-search\" data-v-1a8d2800></i>\n          ເລືອກໃບແຈ້ງໜີ້\n        </h4> <button type=\"button\" class=\"close-button\" data-v-1a8d2800><i class=\"fas fa-times\" data-v-1a8d2800></i></button></div> <div class=\"modal-body\" data-v-1a8d2800><div class=\"search-section\" data-v-1a8d2800><div class=\"search-input-group\" data-v-1a8d2800><i class=\"fas fa-search search-icon\" data-v-1a8d2800></i> <input type=\"text\" placeholder=\"ຄົ້ນຫາເລກໃບແຈ້ງໜີ້, ຊື່ລູກຄ້າ, ຫຼື ລາຍລະອຽດ...\"" + _vm._ssrAttr("value", _vm.invoiceSearchQuery) + " class=\"form-control search-input\" data-v-1a8d2800></div></div> " + (_vm.invoiceBrowserLoading ? "<div class=\"loading-state\" data-v-1a8d2800><div class=\"spinner\" data-v-1a8d2800></div> <p data-v-1a8d2800>ກຳລັງໂຫຼດໃບແຈ້ງໜີ້...</p></div>" : _vm.searchFilteredInvoices.length > 0 ? "<div class=\"invoice-list\" data-v-1a8d2800><div class=\"invoice-table-container\" data-v-1a8d2800><table class=\"table\" data-v-1a8d2800><thead data-v-1a8d2800><tr data-v-1a8d2800><th style=\"width: 120px\" data-v-1a8d2800>ເລກໃບແຈ້ງໜີ້</th> <th style=\"width: 200px\" data-v-1a8d2800>ລູກຄ້າ</th> <th style=\"width: 100px\" data-v-1a8d2800>ວັນທີ</th> <th style=\"width: 100px\" data-v-1a8d2800>ຄົບກຳໜົດ</th> <th style=\"width: 100px\" data-v-1a8d2800>ຍອດເງິນ</th> <th style=\"width: 80px\" data-v-1a8d2800>ສະຖານະ</th> <th style=\"width: 80px\" data-v-1a8d2800>ເລືອກ</th></tr></thead> <tbody data-v-1a8d2800>" + _vm._ssrList(_vm.searchFilteredInvoices, function (invoice) {
    return "<tr class=\"invoice-row\" data-v-1a8d2800><td data-v-1a8d2800><strong data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</strong></td> <td data-v-1a8d2800><div class=\"customer-info\" data-v-1a8d2800><div class=\"customer-name\" data-v-1a8d2800>" + _vm._ssrEscape("\n                        " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + "\n                      ") + "</div> " + (invoice.customer && invoice.customer.email ? "<div class=\"customer-email\" data-v-1a8d2800>" + _vm._ssrEscape("\n                        " + _vm._s(invoice.customer.email) + "\n                      ") + "</div>" : "<!---->") + "</div></td> <td data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.invoiceDate))) + "</td> <td data-v-1a8d2800>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.dueDate))) + "</td> <td class=\"amount-cell\" data-v-1a8d2800>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatCurrency(invoice.totalAmount)) + "\n                  ") + "</td> <td data-v-1a8d2800><span" + _vm._ssrClass("status-badge", `status-${invoice.status}`) + " data-v-1a8d2800>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getStatusLabel(invoice.status)) + "\n                    ") + "</span></td> <td data-v-1a8d2800><button type=\"button\"" + _vm._ssrAttr("disabled", invoice.id === _vm.form.invoiceHeaderId) + " class=\"btn btn-primary btn-sm\" data-v-1a8d2800><i class=\"fas fa-check\" data-v-1a8d2800></i>" + _vm._ssrEscape("\n                      " + _vm._s(invoice.id === _vm.form.invoiceHeaderId ? 'ເລືອກແລ້ວ' : 'ເລືອກ') + "\n                    ") + "</button></td></tr>";
  }) + "</tbody></table></div></div>" : "<div class=\"no-results-state\" data-v-1a8d2800><div class=\"empty-content\" data-v-1a8d2800><i class=\"fas fa-file-invoice\" data-v-1a8d2800></i> <h4 data-v-1a8d2800>" + _vm._ssrEscape("\n              " + _vm._s(_vm.invoiceSearchQuery ? 'ບໍ່ພົບໃບແຈ້ງໜີ້' : 'ບໍ່ມີໃບແຈ້ງໜີ້') + "\n            ") + "</h4> <p data-v-1a8d2800>" + _vm._ssrEscape("\n              " + _vm._s(_vm.invoiceSearchQuery ? `ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບ "${_vm.invoiceSearchQuery}"` : 'ບໍ່ມີໃບແຈ້ງໜີ້ທີ່ສາມາດເລືອກໄດ້') + "\n            ") + "</p></div></div>") + "</div> <div class=\"modal-footer\" data-v-1a8d2800><div class=\"footer-info\" data-v-1a8d2800>" + (_vm.searchFilteredInvoices.length > 0 ? "<span class=\"result-count\" data-v-1a8d2800>" + _vm._ssrEscape("\n            ພົບ " + _vm._s(_vm.searchFilteredInvoices.length) + " ໃບແຈ້ງໜີ້\n          ") + "</span>" : "<!---->") + "</div> <div class=\"footer-actions\" data-v-1a8d2800><button type=\"button\" class=\"btn btn-secondary\" data-v-1a8d2800><i class=\"fas fa-times\" data-v-1a8d2800></i>\n            ປິດ\n          </button></div></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue?vue&type=template&id=1a8d2800&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'ReceiveHeaderMaintain',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receipt: {
      type: Object,
      default: null
    },
    invoices: {
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
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      allocationLines: [],
      nextTempId: 1,
      selectedInvoice: null,
      // Invoice Browser
      showInvoiceBrowser: false,
      invoiceBrowserLoading: false,
      filteredInvoices: [],
      invoiceSearchQuery: '',
      form: {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentMethod: 'cash',
        referenceNumber: '',
        notes: '',
        inputterId: '',
        reason: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!(this.receipt && this.receipt.id);
    },
    user() {
      return this.$auth.user || '';
    },
    calculatedAllocatedTotal() {
      return this.allocationLines.reduce((sum, allocation) => {
        return sum + (parseFloat(allocation.allocatedAmount) || 0);
      }, 0);
    },
    // Override allocationBalance to always be 0 since total is auto-calculated
    allocationBalance() {
      return 0; // Always 0 since totalReceivedAmount = calculatedAllocatedTotal
    },

    // Auto-calculated total received amount
    autoCalculatedTotal() {
      return this.calculatedAllocatedTotal;
    },
    availableInvoiceLines() {
      return this.selectedInvoice ? this.selectedInvoice.invoiceLines || [] : [];
    },
    isFormValid() {
      const hasValidHeader = this.form.receiptNumber && this.form.bookingDate && this.form.receivedDate && this.form.invoiceHeaderId && this.form.paymentMethod && (!this.isEdit || this.form.reason);
      const hasValidAllocations = this.allocationLines.length > 0 && this.allocationLines.some(allocation => allocation.invoiceLineId && (parseFloat(allocation.allocatedAmount) || 0) > 0 && allocation.allocationDate) && (parseFloat(this.form.totalReceivedAmount) || 0) > 0;
      return hasValidHeader && hasValidAllocations;
    },
    searchFilteredInvoices() {
      if (!this.invoiceSearchQuery) {
        return this.filteredInvoices;
      }
      const query = this.invoiceSearchQuery.toLowerCase();
      return this.filteredInvoices.filter(invoice => invoice.invoiceNumber.toLowerCase().includes(query) || invoice.customer && invoice.customer.name.toLowerCase().includes(query) || invoice.description && invoice.description.toLowerCase().includes(query));
    }
  },
  watch: {
    visible: {
      handler(newVal) {
        if (newVal) {
          this.initializeDialog();
        } else {
          this.resetDialog();
        }
      },
      immediate: true
    },
    receipt: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    },
    // Auto-update totalReceivedAmount when allocation lines change
    calculatedAllocatedTotal: {
      handler(newTotal) {
        this.form.totalReceivedAmount = newTotal;
      },
      immediate: true
    },
    // Update allocation dates when received date changes
    'form.receivedDate': {
      handler(newDate) {
        if (newDate && this.allocationLines.length > 0) {
          this.allocationLines.forEach(allocation => {
            if (!allocation.allocationDate || allocation.allocationDate === '') {
              allocation.allocationDate = newDate;
            }
          });
        }
      }
    }
  },
  methods: {
    // Add a method to manually create allocation lines for testing
    forceCreateAllocations() {
      if (!this.selectedInvoice || !this.selectedInvoice.invoiceLines) {
        this.showToast('Please select an invoice first', 'warning');
        return;
      }
      this.createAllocationLinesFromInvoice();
      this.showToast(`Created ${this.allocationLines.length} allocation lines`, 'success');
    },
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.receipt) {
        this.form = {
          id: this.receipt.id,
          receiptNumber: this.receipt.receiptNumber,
          bookingDate: this.receipt.bookingDate ? this.receipt.bookingDate.split('T')[0] : '',
          receivedDate: this.receipt.receivedDate ? this.receipt.receivedDate.split('T')[0] : '',
          invoiceHeaderId: this.receipt.invoiceHeaderId,
          totalReceivedAmount: this.receipt.totalReceivedAmount || 0.0,
          paymentMethod: this.receipt.paymentMethod || 'cash',
          referenceNumber: this.receipt.referenceNumber || '',
          notes: this.receipt.notes || '',
          inputterId: this.receipt.inputterId || '',
          reason: ''
        };
        await this.loadAllocationLines(this.receipt.id);
        await this.updateSelectedInvoice();
      } else {
        this.resetForm();

        // Set default dates to today
        const today = new Date().toISOString().split('T')[0];
        this.form.bookingDate = today;
        this.form.receivedDate = today;

        // Initialize with empty allocation lines
        this.allocationLines = [];
      }
    },
    resetDialog() {
      this.resetForm();
      this.allocationLines = [];
      this.selectedInvoice = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
      this.showInvoiceBrowser = false;
      this.filteredInvoices = [];
      this.invoiceSearchQuery = '';
    },
    async loadAllocationLines(receiptId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ar-receive-lines/by-header/${receiptId}`);
        this.allocationLines = data.data || [];
        this.allocationLines.forEach(allocation => {
          if (!allocation.tempId) {
            allocation.tempId = this.nextTempId++;
          }
          if (allocation.allocationDate) {
            allocation.allocationDate = allocation.allocationDate.split('T')[0];
          }
        });
      } catch (error) {
        console.error('Error loading allocation lines:', error);
        this.allocationLines = [];
      }
    },
    createEmptyAllocation() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.allocationLines.length + 1,
        invoiceLineId: '',
        allocatedAmount: 0,
        allocationDate: new Date().toISOString().split('T')[0],
        notes: ''
      };
    },
    async updateSelectedInvoice() {
      console.log('updateSelectedInvoice called with invoiceHeaderId:', this.form.invoiceHeaderId);
      if (this.form.invoiceHeaderId && this.invoices.length > 0) {
        this.selectedInvoice = this.invoices.find(inv => inv.id === parseInt(this.form.invoiceHeaderId) // Ensure ID comparison is correct
        );

        console.log('Selected invoice found:', this.selectedInvoice);

        // If we found the invoice but it doesn't have invoice lines, load them
        if (this.selectedInvoice && (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0)) {
          await this.loadSelectedInvoiceLines();
        }

        // Update allocation lines based on invoice lines
        if (this.selectedInvoice && this.selectedInvoice.invoiceLines && this.selectedInvoice.invoiceLines.length > 0 && !this.isEdit // Only auto-create for new records
        ) {
          console.log('Creating allocation lines from invoice lines:', this.selectedInvoice.invoiceLines);
          this.createAllocationLinesFromInvoice();
        }
      } else {
        this.selectedInvoice = null;
        if (!this.isEdit) {
          this.allocationLines = [];
        }
      }
      console.log('Final allocation lines:', this.allocationLines);
    },
    async loadSelectedInvoiceLines() {
      if (!this.selectedInvoice) return;
      try {
        console.log('Loading invoice lines for invoice:', this.selectedInvoice.id);
        const {
          data
        } = await this.$axios.get(`/api/ar-invoices/${this.selectedInvoice.id}`, {
          params: {
            include: ['invoiceLines']
          }
        });
        console.log('API response for invoice lines:', data);

        // Handle different possible response structures
        if (data.success && data.data && data.data.invoiceLines) {
          this.selectedInvoice.invoiceLines = data.data.invoiceLines;
        } else if (data.data && Array.isArray(data.data)) {
          // In case the response structure is different
          this.selectedInvoice.invoiceLines = data.data;
        } else if (data.invoiceLines) {
          this.selectedInvoice.invoiceLines = data.invoiceLines;
        } else {
          console.warn('No invoice lines found in response:', data);
          this.selectedInvoice.invoiceLines = [];
        }
        console.log('Loaded invoice lines:', this.selectedInvoice.invoiceLines);
      } catch (error) {
        console.error('Error loading invoice lines:', error);
        this.selectedInvoice.invoiceLines = [];
        this.showToast('ມີປັນຫາໃນການໂຫຼດລາຍການໃບແຈ້ງໜີ້', 'error');
      }
    },
    createAllocationLinesFromInvoice() {
      var _this$selectedInvoice;
      console.log('createAllocationLinesFromInvoice called');
      console.log('Selected invoice:', this.selectedInvoice);
      console.log('Invoice lines:', (_this$selectedInvoice = this.selectedInvoice) === null || _this$selectedInvoice === void 0 ? void 0 : _this$selectedInvoice.invoiceLines);
      if (!this.selectedInvoice || !this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.warn('No invoice lines available to create allocations');
        this.allocationLines = [];
        return;
      }
      this.allocationLines = this.selectedInvoice.invoiceLines.map((line, index) => {
        const allocation = {
          tempId: this.nextTempId++,
          lineNumber: index + 1,
          invoiceLineId: line.id,
          invoiceLine: line,
          allocatedAmount: 0,
          // Default to 0, user will fill this
          allocationDate: this.form.receivedDate || new Date().toISOString().split('T')[0],
          notes: ''
        };
        console.log('Created allocation:', allocation);
        return allocation;
      });
      console.log('Final allocation lines created:', this.allocationLines);
    },
    async onInvoiceChange() {
      console.log('onInvoiceChange called');
      await this.updateSelectedInvoice();
      this.clearFieldError('invoiceHeaderId');
    },
    onInvoiceLineChange(allocation) {
      // Set default allocation date if not set
      if (!allocation.allocationDate) {
        allocation.allocationDate = new Date().toISOString().split('T')[0];
      }
    },
    async openInvoiceBrowser() {
      this.showInvoiceBrowser = true;
      this.invoiceBrowserLoading = true;
      this.invoiceSearchQuery = '';
      try {
        // Load all invoices for browsing - make sure to include invoice lines
        const {
          data
        } = await this.$axios.get('/api/ar-invoices', {
          params: {
            status: ['draft', 'sent'],
            // Only show unpaid or partially paid invoices
            include: ['customer', 'invoiceLines'] // Make sure to include invoiceLines
          }
        });

        console.log('Invoice browser API response:', data);

        // Handle different response structures
        if (data.success && data.data && Array.isArray(data.data)) {
          this.filteredInvoices = data.data;
        } else if (data.data && data.data.invoices && Array.isArray(data.data.invoices)) {
          this.filteredInvoices = data.data.invoices;
        } else if (Array.isArray(data)) {
          this.filteredInvoices = data;
        } else {
          console.warn('Unexpected response structure:', data);
          this.filteredInvoices = [];
        }
        console.log('Filtered invoices loaded:', this.filteredInvoices);
      } catch (error) {
        console.error('Error loading invoices:', error);
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error');
        this.filteredInvoices = [];
      } finally {
        this.invoiceBrowserLoading = false;
      }
    },
    closeInvoiceBrowser() {
      this.showInvoiceBrowser = false;
      this.filteredInvoices = [];
      this.invoiceSearchQuery = '';
    },
    async selectInvoiceFromBrowser(invoice) {
      console.log('Selecting invoice from browser:', invoice);
      this.form.invoiceHeaderId = invoice.id;

      // Ensure the selected invoice has its lines loaded
      if (!invoice.invoiceLines || invoice.invoiceLines.length === 0) {
        // Add the invoice to our main invoices array if it's not there
        const existingInvoice = this.invoices.find(inv => inv.id === invoice.id);
        if (!existingInvoice) {
          this.invoices.push(invoice);
        }
      }
      await this.onInvoiceChange();
      this.closeInvoiceBrowser();
      this.clearFieldError('invoiceHeaderId');
    },
    // Allocation Helper Methods
    allocateFullAmount() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      this.allocationLines.forEach(allocation => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
          allocation.allocatedAmount = lineTotal.toFixed(2);
        }
      });
    },
    allocateEqually() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      const totalInvoice = parseFloat(this.selectedInvoice.totalAmount) || 0;
      const amountPerLine = totalInvoice / this.allocationLines.length;
      this.allocationLines.forEach(allocation => {
        allocation.allocatedAmount = amountPerLine.toFixed(2);
      });

      // Total will be auto-calculated via watcher
    },

    allocateProportionally() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      const totalInvoice = parseFloat(this.selectedInvoice.totalAmount) || 0;
      if (totalInvoice === 0) return;
      this.allocationLines.forEach(allocation => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
          allocation.allocatedAmount = lineTotal.toFixed(2);
        }
      });

      // Total will be auto-calculated via watcher
    },

    clearAllAllocations() {
      this.allocationLines.forEach(allocation => {
        allocation.allocatedAmount = 0;
      });
      this.validateAllocationTotal();
    },
    getRemainingAmount(allocation) {
      if (!allocation.invoiceLine) return 0;
      const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
      const allocated = parseFloat(allocation.allocatedAmount) || 0;
      return lineTotal - allocated;
    },
    isFullyAllocated(allocation) {
      return this.getRemainingAmount(allocation) === 0;
    },
    isOverAllocated(allocation) {
      return this.getRemainingAmount(allocation) < 0;
    },
    validateAllocation(allocation, index) {
      const amount = parseFloat(allocation.allocatedAmount) || 0;
      const maxAllowed = parseFloat(allocation.invoiceLine.lineTotal) || 0;
      if (amount > maxAllowed) {
        this.errors[`allocation_${index}_allocatedAmount`] = `ຈຳນວນເກີນກວ່າທີ່ເຫຼືອ (ສູງສຸດ: ${this.formatCurrency(maxAllowed)})`;
      } else {
        this.clearFieldError(`allocation_${index}_allocatedAmount`);
      }
    },
    validateAllocationTotal() {
      // No need to validate balance since it's always 0
    },
    validateForm() {
      this.errors = {};

      // Header validation
      if (!this.form.receiptNumber) {
        this.errors.receiptNumber = 'ກະລຸນາໃສ່ເລກທີໃບຮັບ';
      }
      if (!this.form.invoiceHeaderId) {
        this.errors.invoiceHeaderId = 'ກະລຸນາເລືອກໃບແຈ້ງໜີ້';
      }
      if (!this.form.bookingDate) {
        this.errors.bookingDate = 'ກະລຸນາໃສ່ວັນທີບັນທຶກ';
      }
      if (!this.form.receivedDate) {
        this.errors.receivedDate = 'ກະລຸນາໃສ່ວັນທີຮັບເງິນ';
      }
      if (!this.form.paymentMethod) {
        this.errors.paymentMethod = 'ກະລຸນາເລືອກວິທີຈ່າຍ';
      }

      // Date validation
      if (this.form.bookingDate && this.form.receivedDate) {
        const bookingDate = new Date(this.form.bookingDate);
        const receivedDate = new Date(this.form.receivedDate);
        if (receivedDate < bookingDate) {
          this.errors.receivedDate = 'ວັນທີຮັບເງິນຕ້ອງບໍ່ກ່ອນວັນທີບັນທຶກ';
        }
      }

      // Allocation validation
      if (this.allocationLines.length === 0) {
        this.errors.allocations = 'ກະລຸນາເພີ່ມການແບ່ງປັນຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        let hasValidAllocation = false;
        let totalAllocated = 0;
        for (let i = 0; i < this.allocationLines.length; i++) {
          const allocation = this.allocationLines[i];
          if (!allocation.invoiceLineId) {
            this.errors[`allocation_${i}_invoiceLineId`] = 'ກະລຸນາເລືອກລາຍການໃບແຈ້ງໜີ້';
          }
          const allocatedAmount = parseFloat(allocation.allocatedAmount) || 0;
          if (allocatedAmount <= 0) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
          } else {
            hasValidAllocation = true;
            totalAllocated += allocatedAmount;
          }
          if (!allocation.allocationDate) {
            this.errors[`allocation_${i}_allocationDate`] = 'ກະລຸນາໃສ່ວັນທີແບ່ງປັນ';
          }

          // Check over-allocation
          if (this.isOverAllocated(allocation)) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນເກີນກວ່າທີ່ເຫຼືອ';
          }
        }

        // Check if at least one allocation has amount > 0
        if (!hasValidAllocation) {
          this.errors.allocations = 'ຢ່າງໜ້ອຍຕ້ອງມີ 1 ລາຍການທີ່ມີຍອດແບ່ງປັນ';
        }

        // Validate that total allocated amount is greater than 0
        if (totalAllocated <= 0) {
          this.errors.totalReceivedAmount = 'ຍອດລວມການແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
        }
      }
      if (this.isEdit && !this.form.reason) {
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ';
      }
      return Object.keys(this.errors).length === 0;
    },
    clearErrors() {
      this.errors = {};
    },
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field);
      }
    },
    handleSubmit() {
      console.log('handleSubmit called');
      console.log('Form data before validation:', JSON.stringify(this.form, null, 2));
      console.log('Allocation lines before validation:', JSON.stringify(this.allocationLines, null, 2));
      if (!this.validateForm()) {
        console.log('Validation failed. Errors:', this.errors);
        // Switch to appropriate tab if there are errors
        if (Object.keys(this.errors).some(key => key.startsWith('allocation_'))) {
          this.activeTab = 'allocations';
        } else {
          this.activeTab = 'header';
        }
        return;
      }
      this.saving = true;

      // Filter out allocations with zero amounts before sending
      const validAllocationLines = this.allocationLines.filter(allocation => {
        const amount = parseFloat(allocation.allocatedAmount) || 0;
        return amount > 0 && allocation.invoiceLineId;
      });
      if (this.isEdit) {
        // Assign updater
        this.form.updateUserId = this.user.id;
      } else {
        // Assign inputter
        this.form.inputterId = this.user.id;
      }
      const formData = {
        ...this.form,
        totalReceivedAmount: parseFloat(this.form.totalReceivedAmount) || 0,
        allocationLines: validAllocationLines.map((allocation, index) => ({
          tempId: allocation.tempId,
          lineNumber: index + 1,
          invoiceLineId: allocation.invoiceLineId,
          allocatedAmount: parseFloat(allocation.allocatedAmount) || 0,
          allocationDate: allocation.allocationDate,
          notes: allocation.notes || ''
        }))
      };
      console.log('Final form data being sent:', JSON.stringify(formData, null, 2));
      this.$emit('save', formData);
    },
    handleOverlayClick() {
      if (!this.saving) {
        this.handleClose();
      }
    },
    handleClose() {
      this.$emit('close');
    },
    resetForm() {
      this.form = {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentMethod: 'cash',
        referenceNumber: '',
        notes: '',
        inputterId: this.user.id,
        reason: ''
      };
    },
    // Utility Methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatNumber(number) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number || 0);
    },
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    getStatusLabel(status) {
      const statusLabels = {
        draft: 'ຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳໜົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        this.$toast[type](message);
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var receive_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(648)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1a8d2800",
  "2b1d1851"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/view/index.vue?vue&type=template&id=635eee10&scoped=true&
var render = function render() {
  var _vm$receipt$invoiceHe;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-container\" data-v-635eee10><div class=\"modal-header\" data-v-635eee10><h2 data-v-635eee10>ລາຍລະອຽດການຮັບຊຳລະ</h2> <button class=\"close-btn\" data-v-635eee10><i class=\"fas fa-times\" data-v-635eee10></i></button></div> " + (_vm.receipt ? "<div class=\"modal-body\" data-v-635eee10><div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-receipt\" data-v-635eee10></i>\n            ຂໍ້ມູນການຮັບຊຳລະ\n          </h3> <span" + _vm._ssrClass(null, ['payment-method-badge', _vm.receipt.paymentMethod]) + " data-v-635eee10>" + _vm._ssrEscape("\n            " + _vm._s(_vm.formatPaymentMethod(_vm.receipt.paymentMethod)) + "\n          ") + "</span></div> <div class=\"info-grid\" data-v-635eee10><div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ເລກທີໃບຮັບ:</label> <span class=\"receipt-number\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.receiptNumber)) + "</span></div> <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີບັນທຶກ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.bookingDate))) + "</span></div> <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີຮັບເງິນ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.receivedDate))) + "</span></div> <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຍອດເງິນທີ່ຮັບ:</label> <span class=\"amount-received\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.totalReceivedAmount))) + "</span></div> " + (_vm.receipt.referenceNumber ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ເລກອ້າງອີງ:</label> <span class=\"reference-number\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.referenceNumber)) + "</span></div>" : "<!---->") + "</div></div> " + (_vm.receipt.invoiceHeader ? "<div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-file-invoice\" data-v-635eee10></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </h3></div> <div class=\"info-grid\" data-v-635eee10><div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ເລກທີໃບແຈ້ງໜີ້:</label> <span class=\"invoice-number\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.invoiceHeader.invoiceNumber)) + "</span></div> <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີໃບແຈ້ງໜີ້:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.invoiceHeader.invoiceDate))) + "</span></div> " + (_vm.receipt.invoiceHeader.dueDate ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີຄົບກຳນົດ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.invoiceHeader.dueDate))) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຍອດໃບແຈ້ງໜີ້:</label> <span class=\"invoice-amount\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.invoiceHeader.totalAmount))) + "</span></div> " + (_vm.receipt.invoiceHeader.customer ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ລູກຄ້າ:</label> <span class=\"customer-name\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.invoiceHeader.customer.name)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ສະຖານະໃບແຈ້ງໜີ້:</label> <span" + _vm._ssrClass(null, ['status-badge', _vm.receipt.invoiceHeader.status]) + " data-v-635eee10>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatInvoiceStatus(_vm.receipt.invoiceHeader.status)) + "\n            ") + "</span></div></div></div>" : "<!---->") + " <div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-calculator\" data-v-635eee10></i>\n            ສະຫຼຸບການຮັບຊຳລະ\n          </h3></div> <div class=\"payment-summary\" data-v-635eee10><div class=\"summary-row\" data-v-635eee10><label data-v-635eee10>ຍອດໃບແຈ້ງໜີ້:</label> <span class=\"amount invoice-total\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(((_vm$receipt$invoiceHe = _vm.receipt.invoiceHeader) === null || _vm$receipt$invoiceHe === void 0 ? void 0 : _vm$receipt$invoiceHe.totalAmount) || 0))) + "</span></div> <div class=\"summary-row\" data-v-635eee10><label data-v-635eee10>ຍອດທີ່ຮັບຄັ້ງນີ້:</label> <span class=\"amount current-payment\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.totalReceivedAmount))) + "</span></div> <div class=\"summary-row\" data-v-635eee10><label data-v-635eee10>ລວມທີ່ຮັບແລ້ວທັງໝົດ:</label> <span class=\"amount total-received\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculateTotalReceived()))) + "</span></div> <div class=\"summary-row subtotal\" data-v-635eee10><label data-v-635eee10>ຍອດຄົງເຫຼືອ:</label> <span" + _vm._ssrClass("amount remaining", {
    'fully-paid': _vm.getRemainingBalance() <= 0
  }) + " data-v-635eee10>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatCurrency(_vm.getRemainingBalance())) + "\n            ") + "</span></div> " + (_vm.getRemainingBalance() <= 0 ? "<div class=\"paid-status\" data-v-635eee10><i class=\"fas fa-check-circle\" data-v-635eee10></i> <span data-v-635eee10>ຈ່າຍຄົບແລ້ວ</span></div>" : "<!---->") + "</div></div> " + (_vm.receipt.receiveLines && _vm.receipt.receiveLines.length > 0 ? "<div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-list\" data-v-635eee10></i>\n            ລາຍລະອຽດການແບ່ງປັນ\n          </h3> <span class=\"item-count\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.receiveLines.length) + " ລາຍການ") + "</span></div> <div class=\"table-container\" data-v-635eee10><table class=\"data-table\" data-v-635eee10><thead data-v-635eee10><tr data-v-635eee10><th data-v-635eee10>ລຳດັບ</th> <th data-v-635eee10>ລາຍການໃບແຈ້ງໜີ້</th> <th data-v-635eee10>ຍອດແບ່ງປັນ</th> <th data-v-635eee10>ວັນທີແບ່ງປັນ</th> <th data-v-635eee10>ໝາຍເຫດ</th> <th data-v-635eee10>ສະຖານະ</th></tr></thead> <tbody data-v-635eee10>" + _vm._ssrList(_vm.receipt.receiveLines, function (line) {
    return "<tr data-v-635eee10><td class=\"line-number\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(line.lineNumber)) + "</td> <td data-v-635eee10><div class=\"invoice-line-info\" data-v-635eee10><div class=\"line-description\" data-v-635eee10><strong data-v-635eee10>" + _vm._ssrEscape(_vm._s(line.invoiceLine ? line.invoiceLine.description : 'N/A')) + "</strong></div> " + (line.invoiceLine ? "<div class=\"line-details\" data-v-635eee10>" + _vm._ssrEscape("\n                      ຈຳນວນ: " + _vm._s(_vm.formatNumber(line.invoiceLine.quantity)) + " × \n                      " + _vm._s(_vm.formatCurrency(line.invoiceLine.unitPrice)) + " = \n                      " + _vm._s(_vm.formatCurrency(line.invoiceLine.lineTotal)) + "\n                    ") + "</div>" : "<!---->") + "</div></td> <td class=\"allocated-amount\" data-v-635eee10>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(line.allocatedAmount)) + "\n                ") + "</td> <td data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(line.allocationDate))) + "</td> <td data-v-635eee10><span class=\"line-notes\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(line.notes || '-')) + "</span></td> <td data-v-635eee10><span" + _vm._ssrClass("allocation-status", _vm.getAllocationStatusClass(line)) + " data-v-635eee10>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.getAllocationStatusText(line)) + "\n                  ") + "</span></td></tr>";
  }) + "</tbody> <tfoot data-v-635eee10><tr class=\"summary-row\" data-v-635eee10><td colspan=\"2\" data-v-635eee10><strong data-v-635eee10>ລວມການແບ່ງປັນ:</strong></td> <td class=\"allocated-total\" data-v-635eee10><strong data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculateTotalAllocations()))) + "</strong></td> <td colspan=\"3\" data-v-635eee10></td></tr></tfoot></table></div></div>" : "<!---->") + " " + (_vm.receipt.notes ? "<div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-comment-alt\" data-v-635eee10></i>\n            ໝາຍເຫດ\n          </h3></div> <div class=\"notes-content\" data-v-635eee10>" + _vm._ssrEscape("\n          " + _vm._s(_vm.receipt.notes) + "\n        ") + "</div></div>" : "<!---->") + " <div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-info-circle\" data-v-635eee10></i>\n            ຂໍ້ມູນລະບົບ\n          </h3></div> <div class=\"info-grid\" data-v-635eee10>" + (_vm.receipt.inputter ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຜູ້ບັນທຶກ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.inputter.username)) + "</span></div>" : "<!---->") + " " + (_vm.receipt.maker ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຜູ້ສ້າງ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.maker.username)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີສ້າງ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.receipt.createdAt))) + "</span></div> " + (_vm.receipt.updateUser ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຜູ້ແກ້ໄຂຫຼ້າສຸດ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.updateUser.username)) + "</span></div>" : "<!---->") + " " + (_vm.receipt.updateTimestamp ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີແກ້ໄຂຫຼ້າສຸດ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.receipt.updateTimestamp))) + "</span></div>" : "<!---->") + "</div></div></div>" : "<!---->") + " <div class=\"modal-footer\" data-v-635eee10><button type=\"button\" class=\"btn btn-secondary\" data-v-635eee10><i class=\"fas fa-times\" data-v-635eee10></i>\n        ປິດ\n      </button> <button type=\"button\" class=\"btn btn-success\" data-v-635eee10><i class=\"fas fa-print\" data-v-635eee10></i>\n        ພິມໃບຮັບ\n      </button> <button type=\"button\" class=\"btn btn-primary\" data-v-635eee10><i class=\"fas fa-edit\" data-v-635eee10></i>\n        ແກ້ໄຂ\n      </button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue?vue&type=template&id=635eee10&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'ReceiveHeaderView',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receipt: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    editReceipt() {
      this.$emit('edit', this.receipt);
    },
    printReceipt() {
      // Implement print functionality
      window.print();
    },
    calculateTotalAllocations() {
      if (!this.receipt.receiveLines) return 0;
      return this.receipt.receiveLines.reduce((total, line) => {
        return total + parseFloat(line.allocatedAmount || 0);
      }, 0);
    },
    calculateTotalReceived() {
      // This would typically come from API call to get all receipts for this invoice
      // For now, just return current receipt amount
      return parseFloat(this.receipt.totalReceivedAmount || 0);
    },
    getRemainingBalance() {
      var _this$receipt$invoice;
      const invoiceTotal = parseFloat(((_this$receipt$invoice = this.receipt.invoiceHeader) === null || _this$receipt$invoice === void 0 ? void 0 : _this$receipt$invoice.totalAmount) || 0);
      const totalReceived = this.calculateTotalReceived();
      return invoiceTotal - totalReceived;
    },
    getAllocationStatusClass(line) {
      const invoiceLine = line.invoiceLine;
      if (!invoiceLine) return 'unknown';
      const lineTotal = parseFloat(invoiceLine.lineTotal || 0);
      const allocated = parseFloat(line.allocatedAmount || 0);
      if (allocated >= lineTotal) return 'fully-allocated';
      if (allocated > 0) return 'partially-allocated';
      return 'not-allocated';
    },
    getAllocationStatusText(line) {
      const statusClass = this.getAllocationStatusClass(line);
      const statusTexts = {
        'fully-allocated': 'ແບ່ງປັນຄົບ',
        'partially-allocated': 'ແບ່ງປັນບາງສ່ວນ',
        'not-allocated': 'ຍັງບໍ່ແບ່ງປັນ',
        'unknown': 'ບໍ່ຮູ້ສະຖານະ'
      };
      return statusTexts[statusClass] || statusClass;
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
      if (!amount) return '0.00';
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatNumber(number) {
      if (!number) return '0';
      return parseFloat(number).toLocaleString('en-US');
    },
    formatPaymentMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        check: 'ເຊັກ',
        bank_transfer: 'ໂອນເງິນທະນາຄານ',
        credit_card: 'ບັດເຄຣດິດ',
        other: 'ອື່ນໆ'
      };
      return methods[method] || method;
    },
    formatInvoiceStatus(status) {
      const statusLabels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var receive_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(650)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "635eee10",
  "88681b2a"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62505c1b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(757);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62505c1b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62505c1b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62505c1b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62505c1b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".receive-header-summary-container[data-v-62505c1b]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-62505c1b]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-62505c1b]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-62505c1b]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-62505c1b]{display:flex;gap:12px}.filter-section[data-v-62505c1b]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-62505c1b]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-62505c1b]{display:flex;flex-direction:column;gap:8px;min-width:150px}.filter-group label[data-v-62505c1b]{color:#555;font-size:14px;font-weight:500}.filter-actions[data-v-62505c1b]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-62505c1b]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-62505c1b]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-62505c1b]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-receipts[data-v-62505c1b]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.summary-card.total-receipts .card-icon[data-v-62505c1b]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.payment-cash[data-v-62505c1b]{border-left:4px solid #28a745}.summary-card.payment-transfer[data-v-62505c1b]{border-left:4px solid #007bff}.summary-card.payment-check[data-v-62505c1b]{border-left:4px solid #ffc107}.summary-card.payment-card[data-v-62505c1b]{border-left:4px solid #dc3545}.summary-card.amount-stats[data-v-62505c1b]{border-left:4px solid #6f42c1}.card-icon[data-v-62505c1b]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-62505c1b]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.cash[data-v-62505c1b]{background:#d4edda;color:#28a745}.card-icon.transfer[data-v-62505c1b]{background:#cce5ff;color:#007bff}.card-icon.check[data-v-62505c1b]{background:#fff3cd;color:#ffc107}.card-icon.card[data-v-62505c1b]{background:#f8d7da;color:#dc3545}.card-icon.amount[data-v-62505c1b]{background:#e2d9ff;color:#6f42c1}.card-content[data-v-62505c1b]{flex:1;min-width:0}.card-content h3[data-v-62505c1b]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-62505c1b]{font-size:14px;margin:0}.amount-info[data-v-62505c1b]{display:block;font-size:12px;margin-top:4px;opacity:.8}.table-section[data-v-62505c1b]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-62505c1b]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-62505c1b]{color:#333;margin:0}.record-count[data-v-62505c1b]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-62505c1b]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-62505c1b]{overflow-x:auto}.data-table[data-v-62505c1b]{border-collapse:collapse;width:100%}.data-table td[data-v-62505c1b],.data-table th[data-v-62505c1b]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-62505c1b]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-62505c1b]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-62505c1b]:hover{background-color:#e9ecef}.data-table th i[data-v-62505c1b]{margin-left:8px;opacity:.5}.receipt-number strong[data-v-62505c1b]{color:#333;display:block;font-size:14px;margin-bottom:4px}.receipt-notes[data-v-62505c1b]{color:#666;font-size:12px}.invoice-info .invoice-number[data-v-62505c1b]{align-items:center;color:#495057;display:flex;font-weight:600;gap:4px;margin-bottom:2px}.invoice-info .customer-name[data-v-62505c1b]{color:#666;font-size:12px;margin-left:16px}.amount-details .received-amount[data-v-62505c1b]{color:#495057;font-weight:600;margin-bottom:2px}.allocation-info[data-v-62505c1b]{color:#666;font-size:11px}.payment-method-badge[data-v-62505c1b]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.payment-method-badge.cash[data-v-62505c1b]{background-color:#d4edda;color:#155724}.payment-method-badge.bank_transfer[data-v-62505c1b]{background-color:#cce5ff;color:#004085}.payment-method-badge.check[data-v-62505c1b]{background-color:#fff3cd;color:#856404}.payment-method-badge.credit_card[data-v-62505c1b]{background-color:#f8d7da;color:#721c24}.payment-method-badge.other[data-v-62505c1b]{background-color:#e2e3e5;color:#383d41}.reference-number[data-v-62505c1b]{color:#495057;font-family:monospace;font-size:13px}.inputter-info[data-v-62505c1b]{color:#495057;font-size:14px}.inputter-info small[data-v-62505c1b]{color:#666;display:block;font-size:12px;margin-top:2px}.actions-cell[data-v-62505c1b]{display:flex;flex-wrap:wrap;gap:4px}.btn[data-v-62505c1b]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-62505c1b]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-62505c1b]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-62505c1b]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-62505c1b]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-62505c1b]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-62505c1b]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-62505c1b]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-62505c1b]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-62505c1b]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-62505c1b]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-62505c1b]:hover{background-color:#17a2b8;color:#fff}.btn-outline-success[data-v-62505c1b]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-62505c1b]:hover{background-color:#28a745;color:#fff}.btn-outline-danger[data-v-62505c1b]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-62505c1b]:hover{background-color:#dc3545;color:#fff}.btn-sm[data-v-62505c1b]{font-size:12px;padding:4px 8px}.form-control[data-v-62505c1b]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-62505c1b]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.pagination-container[data-v-62505c1b]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-62505c1b]{color:#666;font-size:14px}.pagination-controls[data-v-62505c1b]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-62505c1b]{color:#666;padding:6px 12px}.loading-overlay[data-v-62505c1b]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-62505c1b]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-62505c1b]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:768px){.receive-header-summary-container[data-v-62505c1b]{padding:10px}.header-content[data-v-62505c1b]{align-items:flex-start}.filter-row[data-v-62505c1b],.header-content[data-v-62505c1b]{flex-direction:column;gap:16px}.filter-group[data-v-62505c1b]{min-width:auto;width:100%}.filter-actions[data-v-62505c1b]{flex-direction:row;width:100%}.summary-cards[data-v-62505c1b]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-62505c1b]{padding:20px}.card-icon[data-v-62505c1b]{height:50px;margin-right:16px;width:50px}.card-content h3[data-v-62505c1b],.card-icon[data-v-62505c1b]{font-size:20px}.pagination-container[data-v-62505c1b],.table-header[data-v-62505c1b]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-62505c1b]{flex-wrap:wrap}.actions-cell[data-v-62505c1b]{flex-direction:column;gap:4px}}@media (max-width:576px){.summary-card[data-v-62505c1b]{flex-direction:column;text-align:center}.card-icon[data-v-62505c1b]{margin:0 auto 16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map