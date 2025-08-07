exports.ids = [122,5,6];
exports.modules = {

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/accounting/ar/invoice/index.vue?vue&type=template&id=18ed1e13&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "invoice-header-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-18ed1e13><div class=\"header-content\" data-v-18ed1e13><h1 class=\"page-title\" data-v-18ed1e13>ລະບົບຈັດການໃບແຈ້ງໜີ້</h1> <div class=\"header-actions\" data-v-18ed1e13><button class=\"btn btn-primary\" data-v-18ed1e13><i class=\"fas fa-plus\" data-v-18ed1e13></i>\n          ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່\n        </button> <button class=\"btn btn-secondary\" data-v-18ed1e13><i class=\"fas fa-download\" data-v-18ed1e13></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-18ed1e13>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-18ed1e13>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-18ed1e13><label data-v-18ed1e13>ຄົ້ນຫາ:</label> <input type=\"text\" placeholder=\"ເລກທີໃບແຈ້ງໜີ້, ລູກຄ້າ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"form-control\" data-v-18ed1e13></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-18ed1e13>", "</div>", [_vm._ssrNode("<label data-v-18ed1e13>ສະຖານະ:</label> "), _c('select', {
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
      "value": "draft"
    }
  }, [_vm._v("ແບບຮ່າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sent"
    }
  }, [_vm._v("ສົ່ງແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("ຈ່າຍແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "overdue"
    }
  }, [_vm._v("ເກີນກຳນົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("ຍົກເລີກ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-18ed1e13>", "</div>", [_vm._ssrNode("<label data-v-18ed1e13>ລູກຄ້າ:</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.customerId,
      expression: "filters.customerId"
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
        _vm.$set(_vm.filters, "customerId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _vm._l(_vm.customers, function (customer) {
    return _c('option', {
      key: customer.id,
      domProps: {
        "value": customer.id
      }
    }, [_vm._v("\n            " + _vm._s(customer.name) + "\n          ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"filter-group\" data-v-18ed1e13><label data-v-18ed1e13>ວັນທີແຈ້ງໜີ້ຈາກ:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"form-control\" data-v-18ed1e13></div> <div class=\"filter-group\" data-v-18ed1e13><label data-v-18ed1e13>ວັນທີແຈ້ງໜີ້ເຖິງ:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"form-control\" data-v-18ed1e13></div> <div class=\"filter-actions\" data-v-18ed1e13><button class=\"btn btn-outline-primary\" data-v-18ed1e13><i class=\"fas fa-search\" data-v-18ed1e13></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-18ed1e13><i class=\"fas fa-undo\" data-v-18ed1e13></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-18ed1e13><div class=\"summary-card total-invoices\" data-v-18ed1e13><div class=\"card-icon total\" data-v-18ed1e13><i class=\"fas fa-file-invoice\" data-v-18ed1e13></i></div> <div class=\"card-content\" data-v-18ed1e13><h3 data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.total.count)) + "</h3> <p data-v-18ed1e13>ລວມໃບແຈ້ງໜີ້ທັງໝົດ</p></div></div> <div class=\"summary-card status-draft\" data-v-18ed1e13><div class=\"card-icon draft\" data-v-18ed1e13><i class=\"fas fa-edit\" data-v-18ed1e13></i></div> <div class=\"card-content\" data-v-18ed1e13><h3 data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.draft.count)) + "</h3> <p data-v-18ed1e13>" + _vm._ssrEscape("ແບບຮ່າງ (" + _vm._s(_vm.summaryStats.draft.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-sent\" data-v-18ed1e13><div class=\"card-icon sent\" data-v-18ed1e13><i class=\"fas fa-paper-plane\" data-v-18ed1e13></i></div> <div class=\"card-content\" data-v-18ed1e13><h3 data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.sent.count)) + "</h3> <p data-v-18ed1e13>" + _vm._ssrEscape("ສົ່ງແລ້ວ (" + _vm._s(_vm.summaryStats.sent.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-paid\" data-v-18ed1e13><div class=\"card-icon paid\" data-v-18ed1e13><i class=\"fas fa-check-circle\" data-v-18ed1e13></i></div> <div class=\"card-content\" data-v-18ed1e13><h3 data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.paid.count)) + "</h3> <p data-v-18ed1e13>" + _vm._ssrEscape("ຈ່າຍແລ້ວ (" + _vm._s(_vm.summaryStats.paid.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-overdue\" data-v-18ed1e13><div class=\"card-icon overdue\" data-v-18ed1e13><i class=\"fas fa-exclamation-triangle\" data-v-18ed1e13></i></div> <div class=\"card-content\" data-v-18ed1e13><h3 data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.overdue.count)) + "</h3> <p data-v-18ed1e13>" + _vm._ssrEscape("ເກີນກຳນົດ (" + _vm._s(_vm.summaryStats.overdue.percentage) + "%)") + "</p></div></div> <div class=\"summary-card amount-stats\" data-v-18ed1e13><div class=\"card-icon amount\" data-v-18ed1e13><i class=\"fas fa-dollar-sign\" data-v-18ed1e13></i></div> <div class=\"card-content\" data-v-18ed1e13><h3 data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.totalAmount))) + "</h3> <p data-v-18ed1e13>ຍອດລວມທັງໝົດ</p> <small class=\"amount-info\" data-v-18ed1e13>" + _vm._ssrEscape("ຈ່າຍແລ້ວ: " + _vm._s(_vm.formatCurrency(_vm.summaryStats.paidAmount))) + "</small></div></div></div> "), _vm._ssrNode("<div class=\"table-section\" data-v-18ed1e13>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-18ed1e13>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-18ed1e13><h3 data-v-18ed1e13>ລາຍການໃບແຈ້ງໜີ້</h3> <span class=\"record-count\" data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.filteredInvoices.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-18ed1e13>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-18ed1e13>", "</div>", [_vm._ssrNode("<label data-v-18ed1e13>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-18ed1e13>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-18ed1e13><table class=\"data-table\" data-v-18ed1e13><thead data-v-18ed1e13><tr data-v-18ed1e13><th class=\"sortable\" data-v-18ed1e13>\n              ເລກທີໃບແຈ້ງໜີ້\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('invoiceNumber')) + " data-v-18ed1e13></i></th> <th class=\"sortable\" data-v-18ed1e13>\n              ວັນທີແຈ້ງໜີ້\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('invoiceDate')) + " data-v-18ed1e13></i></th> <th data-v-18ed1e13>ລູກຄ້າ</th> <th class=\"sortable\" data-v-18ed1e13>\n              ວັນທີຄົບກຳນົດ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('dueDate')) + " data-v-18ed1e13></i></th> <th class=\"sortable\" data-v-18ed1e13>\n              ຍອດລວມ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('totalAmount')) + " data-v-18ed1e13></i></th> <th class=\"sortable\" data-v-18ed1e13>\n              ສະຖານະ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('status')) + " data-v-18ed1e13></i></th> <th data-v-18ed1e13>ຜູ້ສ້າງ</th> <th data-v-18ed1e13>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-18ed1e13>" + _vm._ssrList(_vm.paginatedInvoices, function (invoice) {
    return "<tr data-v-18ed1e13><td data-v-18ed1e13><div class=\"invoice-number\" data-v-18ed1e13><strong data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</strong> " + (invoice.description ? "<div class=\"invoice-description\" data-v-18ed1e13>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.truncateText(invoice.description, 50)) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.invoiceDate))) + "</td> <td data-v-18ed1e13><div class=\"customer-info\" data-v-18ed1e13><div class=\"customer-name\" data-v-18ed1e13><i class=\"fas fa-user\" data-v-18ed1e13></i>" + _vm._ssrEscape("\n                  " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + "\n                ") + "</div> " + (invoice.customer && invoice.customer.email ? "<div class=\"customer-email\" data-v-18ed1e13>" + _vm._ssrEscape("\n                  " + _vm._s(invoice.customer.email) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-18ed1e13><span" + _vm._ssrClass(null, _vm.getDueDateClass(invoice.dueDate, invoice.status)) + " data-v-18ed1e13>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatDate(invoice.dueDate)) + "\n              ") + "</span></td> <td data-v-18ed1e13><div class=\"amount-details\" data-v-18ed1e13><div class=\"total-amount\" data-v-18ed1e13>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(invoice.totalAmount)) + "\n                ") + "</div> <div class=\"amount-breakdown\" data-v-18ed1e13><small data-v-18ed1e13>" + _vm._ssrEscape("Net: " + _vm._s(_vm.formatCurrency(invoice.netAmount))) + "</small> " + (invoice.taxAmount > 0 ? "<small data-v-18ed1e13>" + _vm._ssrEscape("Tax: " + _vm._s(_vm.formatCurrency(invoice.taxAmount))) + "</small>" : "<!---->") + "</div></div></td> <td data-v-18ed1e13><span" + _vm._ssrClass(null, ['status-badge', invoice.status]) + " data-v-18ed1e13>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(invoice.status)) + "\n              ") + "</span></td> <td data-v-18ed1e13><div class=\"maker-info\" data-v-18ed1e13>" + _vm._ssrEscape("\n                " + _vm._s(invoice.maker ? invoice.maker.username : 'N/A') + "\n                ") + (invoice.createdAt ? "<small data-v-18ed1e13>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.createdAt))) + "</small>" : "<!---->") + "</div></td> <td class=\"actions-cell\" data-v-18ed1e13><button title=\"ເບິ່ງລາຍລະອຽດ\" class=\"btn btn-sm btn-outline-primary\" data-v-18ed1e13><i class=\"fas fa-eye\" data-v-18ed1e13></i></button> <button title=\"ແກ້ໄຂ\"" + _vm._ssrAttr("disabled", invoice.status === 'paid') + " class=\"btn btn-sm btn-outline-info\" data-v-18ed1e13><i class=\"fas fa-edit\" data-v-18ed1e13></i></button> " + (invoice.status !== 'paid' && invoice.status !== 'cancelled' ? "<button title=\"ຈ່າຍແລ້ວ\" class=\"btn btn-sm btn-outline-success\" data-v-18ed1e13><i class=\"fas fa-check\" data-v-18ed1e13></i></button>" : "<!---->") + " " + (invoice.status === 'draft' ? "<button title=\"ສົ່ງໃບແຈ້ງໜີ້\" class=\"btn btn-sm btn-outline-warning\" data-v-18ed1e13><i class=\"fas fa-paper-plane\" data-v-18ed1e13></i></button>" : "<!---->") + " " + (invoice.status !== 'paid' && invoice.status !== 'cancelled' ? "<button title=\"ຍົກເລີກ\" class=\"btn btn-sm btn-outline-danger\" data-v-18ed1e13><i class=\"fas fa-times\" data-v-18ed1e13></i></button>" : "<!---->") + "</td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-18ed1e13><div class=\"pagination-info\" data-v-18ed1e13>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-18ed1e13><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-18ed1e13>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-18ed1e13>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-18ed1e13>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-18ed1e13>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-18ed1e13>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('InvoiceHeaderMaintain', {
    attrs: {
      "visible": _vm.showEditDialog,
      "invoice": _vm.selectedInvoice,
      "customers": _vm.customers,
      "currencies": _vm.currencies
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onInvoiceSave
    }
  })], 1), _vm._ssrNode(" "), _c('client-only', [_c('InvoiceHeaderView', {
    attrs: {
      "visible": _vm.showViewDialog,
      "invoice": _vm.selectedInvoice
    },
    on: {
      "close": _vm.closeViewDialog
    }
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-18ed1e13><div class=\"loading-spinner\" data-v-18ed1e13><i class=\"fas fa-spinner fa-spin\" data-v-18ed1e13></i> <p data-v-18ed1e13>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/accounting/ar/invoice/index.vue?vue&type=template&id=18ed1e13&scoped=true&

// EXTERNAL MODULE: ./components/accounting/ar/invoice/maintain/index.vue + 4 modules
var maintain = __webpack_require__(800);

// EXTERNAL MODULE: ./components/accounting/ar/invoice/view/index.vue + 4 modules
var view = __webpack_require__(801);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/accounting/ar/invoice/index.vue?vue&type=script&lang=js&


/* harmony default export */ var invoicevue_type_script_lang_js_ = ({
  name: 'InvoiceHeaderSummary',
  components: {
    InvoiceHeaderMaintain: maintain["default"],
    InvoiceHeaderView: view["default"]
  },
  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      selectedInvoice: null,
      // Data arrays
      invoices: [],
      filteredInvoices: [],
      customers: [],
      currencies: [],
      // Loading states
      loading: false,
      // Filters
      filters: {
        search: '',
        status: '',
        customerId: '',
        dateFrom: '',
        dateTo: ''
      },
      // Sorting
      sort: {
        field: 'invoiceDate',
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
        draft: {
          count: 0,
          percentage: 0
        },
        sent: {
          count: 0,
          percentage: 0
        },
        paid: {
          count: 0,
          percentage: 0
        },
        overdue: {
          count: 0,
          percentage: 0
        },
        cancelled: {
          count: 0,
          percentage: 0
        },
        totalAmount: 0,
        paidAmount: 0
      }
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    paginatedInvoices() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
      const end = start + this.pagination.perPage;
      return this.filteredInvoices.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredInvoices.length / this.pagination.perPage);
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      const end = Math.min(start + this.pagination.perPage - 1, this.filteredInvoices.length);
      return {
        start,
        end,
        total: this.filteredInvoices.length
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
    this.fetchInvoices();
    this.fetchCustomers();
    this.fetchCurrencies();
  },
  methods: {
    // Data Loading Methods
    async fetchInvoices() {
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
        } = await this.$axios.get('/api/ar-invoices', {
          params
        });
        if (data && data.success) {
          this.invoices = data.data.invoices || [];
        } else {
          this.invoices = [];
        }
        this.applyFilters();
        this.calculateSummaryStats();
      } catch (error) {
        console.error('Error fetching invoices:', error);
        this.showToast('Error loading invoice data', 'error');
        this.invoices = [];
      } finally {
        this.loading = false;
      }
    },
    async fetchCustomers() {
      try {
        const {
          data
        } = await this.$axios.get('/api/client/find');
        console.info(`Customer len ${JSON.stringify(data)}`);
        if (data) {
          this.customers = data || [];
        }
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    },
    async fetchCurrencies() {
      try {
        const {
          data
        } = await this.$axios.get('/api/currency/find');
        if (data) {
          this.currencies = data || [];
        }
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    },
    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedInvoice = null;
      this.showEditDialog = true;
    },
    async editInvoice(invoice) {
      this.selectedInvoice = invoice;
      this.showEditDialog = true;
    },
    viewInvoice(invoice) {
      this.selectedInvoice = invoice;
      this.showViewDialog = true;
    },
    closeEditDialog() {
      this.showEditDialog = false;
      this.selectedInvoice = null;
    },
    closeViewDialog() {
      this.showViewDialog = false;
      this.selectedInvoice = null;
    },
    // Save Handler
    async onInvoiceSave(invoiceData) {
      try {
        this.loading = true;
        let response;
        if (this.selectedInvoice && this.selectedInvoice.id) {
          response = await this.$axios.put(`/api/ar-invoices/${this.selectedInvoice.id}`, invoiceData);
        } else {
          response = await this.$axios.post('/api/ar-invoices', invoiceData);
        }
        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success');
          this.closeEditDialog();
          await this.fetchInvoices();
        } else {
          var _response$data;
          throw new Error(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Save failed');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving invoice:', error);
        const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ';
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    // Status Update Handler
    async updateStatus(invoice, newStatus) {
      try {
        this.loading = true;
        const response = await this.$axios.patch(`/api/ar-invoices/${invoice.id}/status`, {
          status: newStatus
        });
        if (response.data && response.data.success) {
          this.showToast('ອັບເດດສະຖານະສຳເລັດແລ້ວ', 'success');
          await this.fetchInvoices();
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
      let filtered = [...this.invoices];

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase();
        filtered = filtered.filter(invoice => invoice.invoiceNumber.toLowerCase().includes(search) || invoice.description && invoice.description.toLowerCase().includes(search) || invoice.customer && invoice.customer.name.toLowerCase().includes(search));
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(invoice => invoice.status === this.filters.status);
      }

      // Customer filter
      if (this.filters.customerId) {
        filtered = filtered.filter(invoice => invoice.customerId == this.filters.customerId);
      }

      // Date range filter
      if (this.filters.dateFrom || this.filters.dateTo) {
        filtered = filtered.filter(invoice => {
          const invoiceDate = new Date(invoice.invoiceDate);
          const dateFrom = this.filters.dateFrom ? new Date(this.filters.dateFrom) : null;
          const dateTo = this.filters.dateTo ? new Date(this.filters.dateTo) : null;
          if (dateFrom && invoiceDate < dateFrom) return false;
          if (dateTo && invoiceDate > dateTo) return false;
          return true;
        });
      }
      this.filteredInvoices = filtered;
      this.sortData();
      this.pagination.currentPage = 1;
      this.calculateSummaryStats();
    },
    resetFilters() {
      this.filters = {
        search: '',
        status: '',
        customerId: '',
        dateFrom: '',
        dateTo: ''
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
      this.filteredInvoices.sort((a, b) => {
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
      const total = this.filteredInvoices.length;
      const draft = this.filteredInvoices.filter(i => i.status === 'draft').length;
      const sent = this.filteredInvoices.filter(i => i.status === 'sent').length;
      const paid = this.filteredInvoices.filter(i => i.status === 'paid').length;
      const overdue = this.filteredInvoices.filter(i => i.status === 'overdue').length;
      const cancelled = this.filteredInvoices.filter(i => i.status === 'cancelled').length;
      const totalAmount = this.filteredInvoices.reduce((sum, inv) => sum + parseFloat(inv.totalAmount || 0), 0);
      const paidAmount = this.filteredInvoices.filter(i => i.status === 'paid').reduce((sum, inv) => sum + parseFloat(inv.totalAmount || 0), 0);
      this.summaryStats = {
        total: {
          count: total
        },
        draft: {
          count: draft,
          percentage: total > 0 ? Math.round(draft / total * 100) : 0
        },
        sent: {
          count: sent,
          percentage: total > 0 ? Math.round(sent / total * 100) : 0
        },
        paid: {
          count: paid,
          percentage: total > 0 ? Math.round(paid / total * 100) : 0
        },
        overdue: {
          count: overdue,
          percentage: total > 0 ? Math.round(overdue / total * 100) : 0
        },
        cancelled: {
          count: cancelled,
          percentage: total > 0 ? Math.round(cancelled / total * 100) : 0
        },
        totalAmount,
        paidAmount
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
      const csvData = this.convertToCSV(this.filteredInvoices);
      this.downloadCSV(csvData, 'invoices-summary.csv');
    },
    convertToCSV(data) {
      const headers = ['Invoice Number', 'Invoice Date', 'Due Date', 'Customer', 'Total Amount', 'Tax Amount', 'Net Amount', 'Status', 'Description', 'Created Date'];
      const csvContent = [headers.join(','), ...data.map(row => [`"${row.invoiceNumber}"`, row.invoiceDate, row.dueDate || '', `"${row.customer ? row.customer.name : ''}"`, row.totalAmount, row.taxAmount, row.netAmount, row.status, `"${(row.description || '').replace(/"/g, '""')}"`, this.formatDate(row.createdAt)].join(','))].join('\n');
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
    formatStatus(status) {
      const statusLabels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    },
    getDueDateClass(dueDate, status) {
      if (!dueDate || status === 'paid' || status === 'cancelled') return '';
      const today = new Date();
      const due = new Date(dueDate);
      if (due < today && status !== 'paid') return 'overdue-date';
      if (due <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) return 'due-soon';
      return '';
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
// CONCATENATED MODULE: ./pages/admin/accounting/ar/invoice/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ar_invoicevue_type_script_lang_js_ = (invoicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/accounting/ar/invoice/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(964)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ar_invoicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "18ed1e13",
  "5b43ed5b"
  
)

/* harmony default export */ var invoice = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(628);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3c5f953c", content, true, context)
};

/***/ }),

/***/ 542:
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
  add("753719de", content, true, context)
};

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-51576860]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1050}.enhanced-dialog[data-v-51576860]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1200px;overflow:hidden;width:100%}.modal-header[data-v-51576860]{background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;padding:20px}.modal-header[data-v-51576860],.modal-title[data-v-51576860]{align-items:center;display:flex}.modal-title[data-v-51576860]{font-size:18px;font-weight:600;gap:10px;margin:0}.close-button[data-v-51576860]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;padding:5px;transition:background .2s}.close-button[data-v-51576860]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-51576860]{flex:1;overflow:hidden}.loading-state[data-v-51576860],.modal-body[data-v-51576860]{display:flex;flex-direction:column}.loading-state[data-v-51576860]{align-items:center;color:#666;justify-content:center;padding:40px}.spinner[data-v-51576860]{animation:spin-51576860 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:40px;margin-bottom:15px;width:40px}@keyframes spin-51576860{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.invoice-form[data-v-51576860]{display:flex;flex:1;flex-direction:column;overflow:hidden}.tab-navigation[data-v-51576860]{background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex}.tab-btn[data-v-51576860]{align-items:center;background:none;border:none;color:#666;cursor:pointer;display:flex;flex:1;font-size:14px;font-weight:500;gap:8px;justify-content:center;padding:15px 20px;position:relative;transition:all .2s}.tab-btn[data-v-51576860]:hover{background:rgba(102,126,234,.1);color:#667eea}.tab-btn.active[data-v-51576860]{background:#fff;border-bottom:3px solid #667eea;color:#667eea}.line-count[data-v-51576860]{background:#667eea;border-radius:12px;color:#fff;font-size:12px;min-width:20px;padding:2px 8px;text-align:center}.tab-content[data-v-51576860]{flex:1;overflow-y:auto;padding:0}.form-section[data-v-51576860]{border-bottom:1px solid #f0f0f0;padding:25px}.form-section[data-v-51576860]:last-child{border-bottom:none}.section-title[data-v-51576860]{align-items:center;border-bottom:2px solid #e9ecef;color:#333;display:flex;font-size:16px;font-weight:600;gap:10px;margin-bottom:20px;padding-bottom:10px}.section-title i[data-v-51576860]{color:#667eea}.form-row[data-v-51576860]{display:flex;flex-wrap:wrap;margin:-10px}.form-group[data-v-51576860]{margin-bottom:20px;padding:10px}.col-md-6[data-v-51576860]{flex:0 0 50%;max-width:50%}.form-group label[data-v-51576860]{color:#333;display:block;font-size:14px;font-weight:500;margin-bottom:5px}.form-group label.required[data-v-51576860]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-51576860]{border:1px solid #ddd;border-radius:6px;font-size:14px;padding:10px 12px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-51576860]:focus{border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-51576860]{border-color:#e74c3c;box-shadow:0 0 0 3px rgba(231,76,60,.1)}.form-control-sm[data-v-51576860]{font-size:13px;padding:6px 8px}.invalid-feedback[data-v-51576860]{color:#e74c3c;display:block;font-size:12px;margin-top:5px;width:100%}.amount-summary[data-v-51576860]{background:#f8f9fa;border-left:4px solid #667eea;border-radius:8px;margin:20px 25px;padding:20px}.totals-grid[data-v-51576860]{grid-gap:15px;display:grid;gap:15px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.total-item[data-v-51576860]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:8px 0}.total-item[data-v-51576860]:last-child{border-bottom:none}.total-item.grand-total[data-v-51576860]{border-top:2px solid #667eea;font-size:16px;font-weight:600;grid-column:1/-1;margin-top:8px;padding-top:12px}.total-item .amount[data-v-51576860]{color:#333;font-weight:600}.line-items-section[data-v-51576860]{padding:25px}.add-line-header[data-v-51576860]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.add-line-actions[data-v-51576860]{align-items:center;display:flex;gap:15px}.btn[data-v-51576860]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-51576860]{background:#007bff;color:#fff}.btn-secondary[data-v-51576860]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-51576860]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline-secondary[data-v-51576860]{background:#fff;border:1px solid #6c757d;color:#6c757d}.btn-danger[data-v-51576860]{background:#dc3545;color:#fff}.btn[data-v-51576860]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-51576860]:disabled{cursor:not-allowed;opacity:.6;transform:none}.btn-add-line[data-v-51576860]{font-size:16px;font-weight:600;padding:12px 24px}.btn-lg[data-v-51576860]{font-size:16px;padding:12px 30px}.btn-sm[data-v-51576860]{align-items:center;border-radius:50%;display:flex;font-size:11px;height:28px;justify-content:center;padding:0;width:28px}.line-count-info[data-v-51576860]{background:#e9ecef;border-radius:20px;color:#666;font-size:12px;font-weight:500;padding:8px 12px}.empty-line-state[data-v-51576860]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:8px;padding:60px 20px;text-align:center}.empty-content i[data-v-51576860]{color:#dee2e6;font-size:64px;margin-bottom:20px}.empty-content h4[data-v-51576860]{color:#666;margin-bottom:10px}.empty-content p[data-v-51576860]{color:#999;margin-bottom:30px}.line-items-table-container[data-v-51576860]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:20px;overflow:hidden}.line-items-table .table[data-v-51576860]{border-collapse:collapse;margin:0;width:100%}.line-items-table .table th[data-v-51576860]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-size:13px;font-weight:600;padding:12px 8px;text-align:center}.line-items-table .table td[data-v-51576860]{border-top:1px solid #dee2e6;font-size:13px;padding:8px;vertical-align:middle}.line-number[data-v-51576860]{color:#666;font-weight:600;text-align:center}.line-total[data-v-51576860],.tax-amount[data-v-51576860]{color:#333;font-weight:600;text-align:right}.line-row[data-v-51576860]{transition:background-color .2s}.line-row[data-v-51576860]:hover{background-color:rgba(102,126,234,.05)}.add-more-lines[data-v-51576860]{border-top:1px solid #e9ecef;padding:20px 0;text-align:center}.btn-add-more[data-v-51576860]{margin-right:15px}.quick-add-buttons[data-v-51576860]{display:inline-flex;gap:10px;margin-left:15px}.line-totals-summary[data-v-51576860]{background:#f8f9fa;border-left:4px solid #667eea;border-radius:8px;margin-top:20px;padding:20px}.modal-footer[data-v-51576860]{background:#f8f9fa;border-top:1px solid #e9ecef;padding:20px}.footer-actions[data-v-51576860]{display:flex;gap:10px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-51576860]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.totals-grid[data-v-51576860]{grid-template-columns:1fr}.add-line-header[data-v-51576860]{flex-direction:column;gap:15px}.line-items-table-container[data-v-51576860]{overflow-x:auto}.line-items-table .table[data-v-51576860]{min-width:800px}.footer-actions[data-v-51576860]{flex-direction:column}.footer-actions .btn[data-v-51576860]{justify-content:center;width:100%}.tab-btn[data-v-51576860]{flex-direction:column;font-size:12px;gap:4px;padding:12px 8px}.quick-add-buttons[data-v-51576860]{margin-left:0;margin-top:10px}.form-row[data-v-51576860],.quick-add-buttons[data-v-51576860]{flex-direction:column}.col-md-6[data-v-51576860]{flex:1;max-width:100%}}@media (max-width:480px){.modal-header[data-v-51576860]{padding:15px}.modal-title[data-v-51576860]{font-size:16px}.form-section[data-v-51576860]{padding:20px 15px}.section-title[data-v-51576860]{font-size:14px}.modal-footer[data-v-51576860]{padding:15px}.line-items-section[data-v-51576860]{padding:20px 15px}.empty-line-state[data-v-51576860]{padding:40px 15px}.empty-content i[data-v-51576860]{font-size:48px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-2f7741ef]{align-items:center;background-color:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.modal-container[data-v-2f7741ef]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1000px;overflow:hidden;width:100%}.modal-header[data-v-2f7741ef]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:24px}.modal-header h2[data-v-2f7741ef]{color:#333;font-size:24px;font-weight:600;margin:0}.close-btn[data-v-2f7741ef]{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:24px;padding:4px;transition:all .2s}.close-btn[data-v-2f7741ef]:hover{background-color:#e9ecef;color:#333}.modal-body[data-v-2f7741ef]{flex:1;overflow-y:auto;padding:24px}.modal-footer[data-v-2f7741ef]{background-color:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.info-section[data-v-2f7741ef]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:32px;overflow:hidden}.info-section[data-v-2f7741ef]:last-child{margin-bottom:0}.section-header[data-v-2f7741ef]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:16px 20px}.section-header h3[data-v-2f7741ef]{align-items:center;color:#333;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header h3 i[data-v-2f7741ef]{color:#007bff}.item-count[data-v-2f7741ef]{background-color:#e9ecef;border-radius:12px;color:#666;font-size:12px;padding:4px 8px}.info-grid[data-v-2f7741ef]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));padding:20px}.info-item[data-v-2f7741ef]{display:flex;flex-direction:column;gap:4px}.info-item label[data-v-2f7741ef]{color:#666;font-size:12px;font-weight:500;letter-spacing:.5px;text-transform:uppercase}.info-item span[data-v-2f7741ef]{color:#333;font-size:14px;font-weight:500}.invoice-number[data-v-2f7741ef]{color:#007bff!important;font-family:monospace;font-size:16px!important;font-weight:600!important}.customer-name[data-v-2f7741ef]{color:#495057!important;font-weight:600!important}.status-badge[data-v-2f7741ef]{border-radius:12px;font-size:12px;font-weight:600;padding:6px 12px;text-transform:uppercase}.status-badge.draft[data-v-2f7741ef]{background-color:#f8f9fa;color:#6c757d}.status-badge.sent[data-v-2f7741ef]{background-color:#d1ecf1;color:#0c5460}.status-badge.paid[data-v-2f7741ef]{background-color:#d4edda;color:#155724}.status-badge.overdue[data-v-2f7741ef]{background-color:#f8d7da;color:#721c24}.status-badge.cancelled[data-v-2f7741ef]{background-color:#e2e3e5;color:#383d41}.overdue-date[data-v-2f7741ef]{color:#dc3545!important;font-weight:600!important}.due-soon[data-v-2f7741ef]{color:#ffc107!important;font-weight:500!important}.amount-summary[data-v-2f7741ef]{padding:20px}.amount-row[data-v-2f7741ef]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:12px 0}.amount-row[data-v-2f7741ef]:last-child{border-bottom:none}.amount-row.subtotal[data-v-2f7741ef]{border-top:2px solid #007bff;font-weight:600;margin-top:8px;padding-top:16px}.amount-row label[data-v-2f7741ef]{color:#495057;font-size:14px;font-weight:500}.amount[data-v-2f7741ef]{font-family:monospace;font-size:16px;font-weight:600}.total-amount[data-v-2f7741ef]{color:#495057}.tax-amount[data-v-2f7741ef]{color:#ffc107}.net-amount[data-v-2f7741ef]{color:#28a745;font-size:18px}.description-content[data-v-2f7741ef]{background-color:#f8f9fa;border-radius:4px;color:#495057;font-size:14px;line-height:1.6;margin:20px;padding:20px}.table-container[data-v-2f7741ef]{overflow-x:auto}.data-table[data-v-2f7741ef]{border-collapse:collapse;width:100%}.data-table td[data-v-2f7741ef],.data-table th[data-v-2f7741ef]{border-bottom:1px solid #e9ecef;padding:12px;text-align:left}.data-table th[data-v-2f7741ef]{background-color:#f8f9fa;color:#495057;font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}.data-table td[data-v-2f7741ef]{color:#333;font-size:14px}.data-table .text-right[data-v-2f7741ef]{text-align:right}.data-table tbody tr[data-v-2f7741ef]:hover{background-color:#f8f9fa}.line-description[data-v-2f7741ef]{word-wrap:break-word;max-width:200px}.total-cell[data-v-2f7741ef]{color:#495057;font-weight:600}.receipt-number[data-v-2f7741ef]{color:#007bff;font-family:monospace;font-weight:600}.payment-method[data-v-2f7741ef]{border-radius:4px;font-size:12px;font-weight:500;padding:4px 8px}.payment-method.cash[data-v-2f7741ef]{background-color:#d4edda;color:#155724}.payment-method.check[data-v-2f7741ef]{background-color:#d1ecf1;color:#0c5460}.payment-method.bank_transfer[data-v-2f7741ef]{background-color:#d6d8db;color:#383d41}.payment-method.credit_card[data-v-2f7741ef]{background-color:#fff3cd;color:#856404}.payment-method.other[data-v-2f7741ef]{background-color:#f8d7da;color:#721c24}.data-table tfoot td[data-v-2f7741ef]{background-color:#f8f9fa;border-bottom:none;font-weight:600}.summary-row td[data-v-2f7741ef]{border-top:2px solid #dee2e6;color:#495057}.balance-row td[data-v-2f7741ef]{border-top:1px solid #dee2e6}.balance-paid[data-v-2f7741ef]{color:#28a745!important}.balance-outstanding[data-v-2f7741ef]{color:#dc3545!important}.btn[data-v-2f7741ef]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;justify-content:center;min-width:120px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn-primary[data-v-2f7741ef]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-2f7741ef]:hover{background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-2f7741ef]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-2f7741ef]:hover{background-color:#5a6268;border-color:#5a6268}@media (max-width:768px){.modal-overlay[data-v-2f7741ef]{padding:10px}.modal-container[data-v-2f7741ef]{max-height:95vh;max-width:100%}.modal-header[data-v-2f7741ef]{padding:20px}.modal-header h2[data-v-2f7741ef]{font-size:20px}.modal-body[data-v-2f7741ef]{padding:20px}.modal-footer[data-v-2f7741ef]{flex-direction:column;padding:16px 20px}.info-grid[data-v-2f7741ef]{gap:12px;grid-template-columns:1fr;padding:16px}.section-header[data-v-2f7741ef]{align-items:flex-start;flex-direction:column;gap:8px;padding:12px 16px}.amount-summary[data-v-2f7741ef]{padding:16px}.description-content[data-v-2f7741ef]{margin:16px;padding:16px}.data-table[data-v-2f7741ef]{font-size:12px}.data-table td[data-v-2f7741ef],.data-table th[data-v-2f7741ef]{padding:8px}.btn[data-v-2f7741ef]{width:100%}}@media (max-width:576px){.modal-header[data-v-2f7741ef]{align-items:flex-start;flex-direction:column;gap:12px}.close-btn[data-v-2f7741ef]{position:absolute;right:16px;top:16px}.data-table td[data-v-2f7741ef],.data-table th[data-v-2f7741ef]{font-size:11px;padding:6px}.line-description[data-v-2f7741ef]{max-width:150px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(965);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("41e8b464", content, true, context)
};

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=51576860&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-51576860><h4 class=\"modal-title\" data-v-51576860><i class=\"fas fa-file-invoice\" data-v-51576860></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່') + "\n      ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-51576860><i class=\"fas fa-times\" data-v-51576860></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-51576860>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-51576860></div> <p data-v-51576860>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"invoice-form\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"tab-navigation\" data-v-51576860><button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'header'
  }]) + " data-v-51576860><i class=\"fas fa-file-alt\" data-v-51576860></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </button> <button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'lines'
  }]) + " data-v-51576860><i class=\"fas fa-list\" data-v-51576860></i>\n            ລາຍການສິນຄ້າ\n            " + (_vm.lineItems.length > 0 ? "<span class=\"line-count\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length)) + "</span>" : "<!---->") + "</button></div> "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'header' ? '' : 'none'
  }) + " data-v-51576860>", "</div>", [_vm._ssrNode("<form data-v-51576860>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-51576860>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-51576860><i class=\"fas fa-info-circle\" data-v-51576860></i>\n                ຂໍ້ມູນພື້ນຖານ\n              </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-51576860><label for=\"invoiceNumber\" class=\"required\" data-v-51576860>ເລກທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceNumber\" type=\"text\" placeholder=\"ເຊັ່ນ: INV-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.invoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceNumber
  }) + " data-v-51576860> " + (_vm.errors.invoiceNumber ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceNumber) + "\n                  ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-51576860>", "</div>", [_vm._ssrNode("<label for=\"customerId\" class=\"required\" data-v-51576860>ລູກຄ້າ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.customerId,
      expression: "form.customerId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.customerId
    },
    attrs: {
      "id": "customerId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "customerId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCustomerChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກລູກຄ້າ " + _vm._s(_vm.customers.length))]), _vm._v(" "), _vm._l(_vm.customers, function (customer) {
    return _c('option', {
      key: customer.id,
      domProps: {
        "value": customer.id
      }
    }, [_vm._v("\n                      " + _vm._s(customer.name) + " (" + _vm._s(customer.code || customer.email) + ")\n                    ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.customerId ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.customerId) + "\n                  ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-51576860>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" data-v-51576860>ສະກຸນເງິນ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currencyId,
      expression: "form.currencyId"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "currencyId"
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
    }, [_vm._v("\n                      " + _vm._s(currency.name) + " (" + _vm._s(currency.code) + ")\n                    ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group col-md-6\" data-v-51576860><label for=\"exchangeRate\" data-v-51576860>ອັດຕາແລກປ່ຽນ</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + " class=\"form-control\" data-v-51576860></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-51576860><h5 class=\"section-title\" data-v-51576860><i class=\"fas fa-calendar-alt\" data-v-51576860></i>\n                ວັນທີ\n              </h5> <div class=\"form-row\" data-v-51576860><div class=\"form-group col-md-6\" data-v-51576860><label for=\"invoiceDate\" class=\"required\" data-v-51576860>ວັນທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.invoiceDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceDate
  }) + " data-v-51576860> " + (_vm.errors.invoiceDate ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceDate) + "\n                  ") + "</div>" : "<!---->") + "</div> <div class=\"form-group col-md-6\" data-v-51576860><label for=\"dueDate\" data-v-51576860>ວັນທີຄົບກຳນົດ</label> <input id=\"dueDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.dueDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dueDate
  }) + " data-v-51576860> " + (_vm.errors.dueDate ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.dueDate) + "\n                  ") + "</div>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"form-section\" data-v-51576860>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-51576860><i class=\"fas fa-info\" data-v-51576860></i>\n                ສະຖານະ ແລະ ລາຍລະອຽດ\n              </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-51576860>", "</div>", [_vm._ssrNode("<label for=\"status\" data-v-51576860>ສະຖານະ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "status"
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
  }, [_vm._v("ແບບຮ່າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sent"
    }
  }, [_vm._v("ສົ່ງແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("ຈ່າຍແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "overdue"
    }
  }, [_vm._v("ເກີນກຳນົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("ຍົກເລີກ")])])], 2)]), _vm._ssrNode(" <div class=\"form-group\" data-v-51576860><label for=\"description\" data-v-51576860>ລາຍລະອຽດ</label> <textarea id=\"description\" rows=\"3\" placeholder=\"ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້...\" class=\"form-control\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div> " + (_vm.isEdit ? "<div class=\"form-group\" data-v-51576860><label for=\"reason\" class=\"required\" data-v-51576860>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-51576860> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.reason) + "\n                ") + "</div>" : "<!---->") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-51576860><div class=\"totals-grid\" data-v-51576860><div class=\"total-item\" data-v-51576860><label data-v-51576860>ລວມຍ່ອຍ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-51576860><label data-v-51576860>ພາສີລວມ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-51576860><label data-v-51576860>ຍອດສຸດທິ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-51576860><label data-v-51576860>ລວມທັງໝົດ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div>")], 2)]), _vm._ssrNode(" <div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'lines' ? '' : 'none'
  }) + " data-v-51576860><div class=\"line-items-section\" data-v-51576860><div class=\"add-line-header\" data-v-51576860><h5 class=\"section-title\" data-v-51576860><i class=\"fas fa-list\" data-v-51576860></i>\n                ລາຍການສິນຄ້າ / ການບໍລິການ\n              </h5> <div class=\"add-line-actions\" data-v-51576860><button type=\"button\" class=\"btn btn-primary btn-add-line\" data-v-51576860><i class=\"fas fa-plus-circle\" data-v-51576860></i>\n                  ເພີ່ມລາຍການສິນຄ້າ\n                </button> <span class=\"line-count-info\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length) + " ລາຍການ") + "</span></div></div> " + (_vm.lineItems.length === 0 ? "<div class=\"empty-line-state\" data-v-51576860><div class=\"empty-content\" data-v-51576860><i class=\"fas fa-shopping-cart\" data-v-51576860></i> <h4 data-v-51576860>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4> <p data-v-51576860>ກະລຸນາເພີ່ມສິນຄ້າຫຼືການບໍລິການເພື່ອສ້າງໃບແຈ້ງໜີ້</p> <button type=\"button\" class=\"btn btn-lg btn-primary\" data-v-51576860><i class=\"fas fa-plus-circle\" data-v-51576860></i>\n                  ເພີ່ມລາຍການທຳອິດ\n                </button></div></div>" : "<div class=\"line-items-table-container\" data-v-51576860><div class=\"line-items-table\" data-v-51576860><table class=\"table\" data-v-51576860><thead data-v-51576860><tr data-v-51576860><th style=\"width: 40px;\" data-v-51576860>#</th> <th style=\"width: 200px;\" data-v-51576860>ລາຍລະອຽດ *</th> <th style=\"width: 80px;\" data-v-51576860>ຈຳນວນ *</th> <th style=\"width: 100px;\" data-v-51576860>ລາຄາຕໍ່ຫົວ *</th> <th style=\"width: 80px;\" data-v-51576860>ພາສີ %</th> <th style=\"width: 100px;\" data-v-51576860>ຍອດພາສີ</th> <th style=\"width: 120px;\" data-v-51576860>ລວມຕໍ່ແຖວ</th> <th style=\"width: 60px;\" data-v-51576860>ລຶບ</th></tr></thead> <tbody data-v-51576860>" + _vm._ssrList(_vm.lineItems, function (line, index) {
    return "<tr class=\"line-row\" data-v-51576860><td class=\"line-number\" data-v-51576860>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-51576860><input type=\"text\" placeholder=\"ລາຍລະອຽດສິນຄ້າ/ການບໍລິການ...\"" + _vm._ssrAttr("value", line.description) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_description`]
    }) + " data-v-51576860></td> <td data-v-51576860><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.quantity) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_quantity`]
    }) + " data-v-51576860></td> <td data-v-51576860><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.unitPrice) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_unitPrice`]
    }) + " data-v-51576860></td> <td data-v-51576860><input type=\"number\" step=\"0.01\" min=\"0\" max=\"100\"" + _vm._ssrAttr("value", line.taxRate) + " class=\"form-control form-control-sm\" data-v-51576860></td> <td class=\"tax-amount\" data-v-51576860>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.taxAmount || 0)) + "\n                      ") + "</td> <td class=\"line-total\" data-v-51576860>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.lineTotal || 0)) + "\n                      ") + "</td> <td data-v-51576860><button type=\"button\" title=\"ລຶບລາຍການ\" class=\"btn btn-sm btn-danger\" data-v-51576860><i class=\"fas fa-trash\" data-v-51576860></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"add-more-lines\" data-v-51576860><button type=\"button\" class=\"btn btn-outline-primary btn-add-more\" data-v-51576860><i class=\"fas fa-plus\" data-v-51576860></i>\n                  ເພີ່ມລາຍການໃໝ່\n                </button> <div class=\"quick-add-buttons\" data-v-51576860><button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-v-51576860>\n                    ເພີ່ມ 3 ລາຍການ\n                  </button> <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-v-51576860>\n                    ເພີ່ມ 5 ລາຍການ\n                  </button></div></div> <div class=\"line-totals-summary\" data-v-51576860><div class=\"totals-grid\" data-v-51576860><div class=\"total-item\" data-v-51576860><label data-v-51576860>ລວມຍ່ອຍ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-51576860><label data-v-51576860>ພາສີລວມ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-51576860><label data-v-51576860>ຍອດສຸດທິ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-51576860><label data-v-51576860>ລວມທັງໝົດ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div></div>") + "</div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-51576860><div class=\"footer-actions\" data-v-51576860><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-51576860><i class=\"fas fa-times\" data-v-51576860></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-51576860>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-51576860></i>" : "<i class=\"fas fa-save\" data-v-51576860></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=51576860&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'InvoiceHeaderMaintain',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoice: {
      type: Object,
      default: null
    },
    customers: {
      type: Array,
      default: () => []
    },
    currencies: {
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
      lineItems: [],
      nextTempId: 1,
      selectedCustomer: null,
      selectedCurrency: null,
      form: {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        customerId: '',
        currencyId: '',
        exchangeRate: 1.0000,
        totalAmount: 0.00,
        taxAmount: 0.00,
        netAmount: 0.00,
        status: 'draft',
        description: '',
        reason: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!(this.invoice && this.invoice.id);
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal = (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0);
        return sum + subtotal;
      }, 0);
    },
    calculatedTax() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.taxAmount) || 0), 0);
    },
    calculatedNet() {
      return this.calculatedSubtotal;
    },
    calculatedTotal() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.lineTotal) || 0), 0);
    },
    isFormValid() {
      const hasValidHeader = this.form.invoiceNumber && this.form.invoiceDate && this.form.customerId && (!this.isEdit || this.form.reason);
      const hasValidLines = this.lineItems.length > 0 && this.lineItems.every(line => line.description && (parseFloat(line.quantity) || 0) > 0 && (parseFloat(line.unitPrice) || 0) >= 0);
      return hasValidHeader && hasValidLines;
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
    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    }
  },
  methods: {
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          invoiceDate: this.invoice.invoiceDate ? this.invoice.invoiceDate.split('T')[0] : '',
          dueDate: this.invoice.dueDate ? this.invoice.dueDate.split('T')[0] : '',
          customerId: this.invoice.customerId,
          currencyId: this.invoice.currencyId,
          exchangeRate: this.invoice.exchangeRate || 1.0000,
          totalAmount: this.invoice.totalAmount || 0.00,
          taxAmount: this.invoice.taxAmount || 0.00,
          netAmount: this.invoice.netAmount || 0.00,
          status: this.invoice.status || 'draft',
          description: this.invoice.description || '',
          reason: ''
        };
        await this.loadLineItems(this.invoice.id);
      } else {
        this.resetForm();

        // Set default date to today
        this.form.invoiceDate = new Date().toISOString().split('T')[0];
        // Set default due date to 30 days from today
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        this.form.dueDate = dueDate.toISOString().split('T')[0];

        // Initialize with default currency
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'USD') || this.currencies[0];
          this.form.currencyId = defaultCurrency.id;
          this.selectedCurrency = defaultCurrency;
        }

        // Initialize with one empty line item
        this.lineItems = [this.createEmptyLine()];
      }
      this.updateSelectedCustomer();
      this.updateSelectedCurrency();
    },
    resetDialog() {
      this.resetForm();
      this.lineItems = [];
      this.selectedCustomer = null;
      this.selectedCurrency = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
    },
    async loadLineItems(invoiceId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${invoiceId}`);
        this.lineItems = data.data || [this.createEmptyLine()];
        this.lineItems.forEach(line => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++;
          }
        });
      } catch (error) {
        console.error('Error loading line items:', error);
        this.lineItems = [this.createEmptyLine()];
      }
    },
    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0
      };
    },
    addNewLine() {
      this.lineItems.push(this.createEmptyLine());
    },
    addMultipleLines(count) {
      for (let i = 0; i < count; i++) {
        this.lineItems.push(this.createEmptyLine());
      }
    },
    removeLine(index) {
      if (this.lineItems.length > 1) {
        this.lineItems.splice(index, 1);
        this.updateLineNumbers();
      }
    },
    updateLineNumbers() {
      this.lineItems.forEach((line, index) => {
        line.lineNumber = index + 1;
      });
    },
    calculateLineTotal(line) {
      const quantity = parseFloat(line.quantity) || 0;
      const unitPrice = parseFloat(line.unitPrice) || 0;
      const taxRate = parseFloat(line.taxRate) || 0;
      const subtotal = quantity * unitPrice;
      const taxAmount = subtotal * (taxRate / 100);
      line.taxAmount = taxAmount;
      line.lineTotal = subtotal + taxAmount;
    },
    updateSelectedCustomer() {
      if (this.form.customerId && this.customers.length > 0) {
        this.selectedCustomer = this.customers.find(c => c.id === this.form.customerId);
      } else {
        this.selectedCustomer = null;
      }
    },
    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
      } else {
        this.selectedCurrency = null;
      }
    },
    onCustomerChange() {
      this.updateSelectedCustomer();
      this.calculateDueDate();
      this.clearFieldError('customerId');
    },
    onCurrencyChange() {
      this.updateSelectedCurrency();
      this.clearFieldError('currencyId');
    },
    calculateDueDate() {
      var _this$selectedCustome;
      if (this.form.invoiceDate && (_this$selectedCustome = this.selectedCustomer) !== null && _this$selectedCustome !== void 0 && _this$selectedCustome.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(invoiceDate);
        dueDate.setDate(dueDate.getDate() + parseInt(this.selectedCustomer.paymentTerms));
        this.form.dueDate = dueDate.toISOString().split('T')[0];
      }
    },
    validateForm() {
      this.errors = {};

      // Header validation
      if (!this.form.invoiceNumber) {
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້';
      }
      if (!this.form.customerId) {
        this.errors.customerId = 'ກະລຸນາເລືອກລູກຄ້າ';
      }
      if (!this.form.invoiceDate) {
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້';
      }

      // Date validation
      if (this.form.invoiceDate && this.form.dueDate) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(this.form.dueDate);
        if (dueDate <= invoiceDate) {
          this.errors.dueDate = 'ວັນທີຄົບກຳນົດຕ້ອງຫຼັງຈາກວັນທີໃບແຈ້ງໜີ້';
        }
      }

      // Line items validation
      if (this.lineItems.length === 0) {
        this.errors.lineItems = 'ກະລຸນາເພີ່ມລາຍການສິນຄ້າຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        for (let i = 0; i < this.lineItems.length; i++) {
          const line = this.lineItems[i];
          if (!line.description) {
            this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ';
          }
          if (!line.quantity || parseFloat(line.quantity) <= 0) {
            this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0';
          }
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0) {
            this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ';
          }
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
      if (!this.validateForm()) {
        // Switch to appropriate tab if there are errors
        if (Object.keys(this.errors).some(key => key.startsWith('line_'))) {
          this.activeTab = 'lines';
        } else {
          this.activeTab = 'header';
        }
        return;
      }
      this.saving = true;
      const formData = {
        ...this.form,
        totalAmount: this.calculatedTotal,
        taxAmount: this.calculatedTax,
        netAmount: this.calculatedNet,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0000,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxRate: parseFloat(line.taxRate) || 0
        }))
      };
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
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        customerId: '',
        currencyId: '',
        exchangeRate: 1.0000,
        totalAmount: 0.00,
        taxAmount: 0.00,
        netAmount: 0.00,
        status: 'draft',
        description: '',
        reason: ''
      };
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
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
// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(627)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51576860",
  "6adf3fc7"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/view/index.vue?vue&type=template&id=2f7741ef&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-container\" data-v-2f7741ef><div class=\"modal-header\" data-v-2f7741ef><h2 data-v-2f7741ef>ລາຍລະອຽດໃບແຈ້ງໜີ້</h2> <button class=\"close-btn\" data-v-2f7741ef><i class=\"fas fa-times\" data-v-2f7741ef></i></button></div> " + (_vm.invoice ? "<div class=\"modal-body\" data-v-2f7741ef><div class=\"info-section\" data-v-2f7741ef><div class=\"section-header\" data-v-2f7741ef><h3 data-v-2f7741ef><i class=\"fas fa-file-invoice\" data-v-2f7741ef></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </h3> <span" + _vm._ssrClass(null, ['status-badge', _vm.invoice.status]) + " data-v-2f7741ef>" + _vm._ssrEscape("\n            " + _vm._s(_vm.formatStatus(_vm.invoice.status)) + "\n          ") + "</span></div> <div class=\"info-grid\" data-v-2f7741ef><div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ເລກທີໃບແຈ້ງໜີ້:</label> <span class=\"invoice-number\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.invoiceNumber)) + "</span></div> <div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ວັນທີແຈ້ງໜີ້:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.invoice.invoiceDate))) + "</span></div> <div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ວັນທີຄົບກຳນົດ:</label> <span" + _vm._ssrClass(null, _vm.getDueDateClass(_vm.invoice.dueDate, _vm.invoice.status)) + " data-v-2f7741ef>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatDate(_vm.invoice.dueDate)) + "\n            ") + "</span></div> <div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ອັດຕາແລກປ່ຽນ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(_vm.invoice.exchangeRate))) + "</span></div></div></div> " + (_vm.invoice.customer ? "<div class=\"info-section\" data-v-2f7741ef><div class=\"section-header\" data-v-2f7741ef><h3 data-v-2f7741ef><i class=\"fas fa-user\" data-v-2f7741ef></i>\n            ຂໍ້ມູນລູກຄ້າ\n          </h3></div> <div class=\"info-grid\" data-v-2f7741ef><div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ຊື່ລູກຄ້າ:</label> <span class=\"customer-name\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.customer.name)) + "</span></div> " + (_vm.invoice.customer.email ? "<div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ອີເມວ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.customer.email)) + "</span></div>" : "<!---->") + " " + (_vm.invoice.customer.phone ? "<div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ເບີໂທ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.customer.phone)) + "</span></div>" : "<!---->") + " " + (_vm.invoice.customer.address ? "<div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ທີ່ຢູ່:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.customer.address)) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.invoice.currency ? "<div class=\"info-section\" data-v-2f7741ef><div class=\"section-header\" data-v-2f7741ef><h3 data-v-2f7741ef><i class=\"fas fa-coins\" data-v-2f7741ef></i>\n            ຂໍ້ມູນສະກຸນເງິນ\n          </h3></div> <div class=\"info-grid\" data-v-2f7741ef><div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ສະກຸນເງິນ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.currency.code) + " - " + _vm._s(_vm.invoice.currency.name)) + "</span></div> " + (_vm.invoice.currency.symbol ? "<div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ສັນຍາລັກ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.currency.symbol)) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"info-section\" data-v-2f7741ef><div class=\"section-header\" data-v-2f7741ef><h3 data-v-2f7741ef><i class=\"fas fa-calculator\" data-v-2f7741ef></i>\n            ຂໍ້ມູນຍອດເງິນ\n          </h3></div> <div class=\"amount-summary\" data-v-2f7741ef><div class=\"amount-row\" data-v-2f7741ef><label data-v-2f7741ef>ຍອດລວມ:</label> <span class=\"amount total-amount\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.invoice.totalAmount))) + "</span></div> <div class=\"amount-row\" data-v-2f7741ef><label data-v-2f7741ef>ຍອດພາສີ:</label> <span class=\"amount tax-amount\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.invoice.taxAmount))) + "</span></div> <div class=\"amount-row subtotal\" data-v-2f7741ef><label data-v-2f7741ef>ຍອດສຸດທິ:</label> <span class=\"amount net-amount\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.invoice.netAmount))) + "</span></div></div></div> " + (_vm.invoice.description ? "<div class=\"info-section\" data-v-2f7741ef><div class=\"section-header\" data-v-2f7741ef><h3 data-v-2f7741ef><i class=\"fas fa-comment-alt\" data-v-2f7741ef></i>\n            ລາຍລະອຽດ\n          </h3></div> <div class=\"description-content\" data-v-2f7741ef>" + _vm._ssrEscape("\n          " + _vm._s(_vm.invoice.description) + "\n        ") + "</div></div>" : "<!---->") + " " + (_vm.invoice.invoiceLines && _vm.invoice.invoiceLines.length > 0 ? "<div class=\"info-section\" data-v-2f7741ef><div class=\"section-header\" data-v-2f7741ef><h3 data-v-2f7741ef><i class=\"fas fa-list\" data-v-2f7741ef></i>\n            ລາຍການສິນຄ້າ/ບໍລິການ\n          </h3> <span class=\"item-count\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.invoiceLines.length) + " ລາຍການ") + "</span></div> <div class=\"table-container\" data-v-2f7741ef><table class=\"data-table\" data-v-2f7741ef><thead data-v-2f7741ef><tr data-v-2f7741ef><th data-v-2f7741ef>ລຳດັບ</th> <th data-v-2f7741ef>ລາຍການ</th> <th data-v-2f7741ef>ຈຳນວນ</th> <th data-v-2f7741ef>ລາຄາຕໍ່ຫົວ</th> <th data-v-2f7741ef>ອັດຕາພາສີ</th> <th data-v-2f7741ef>ຍອດພາສີ</th> <th data-v-2f7741ef>ຍອດລວມ</th></tr></thead> <tbody data-v-2f7741ef>" + _vm._ssrList(_vm.invoice.invoiceLines, function (line) {
    return "<tr data-v-2f7741ef><td data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(line.lineNumber)) + "</td> <td data-v-2f7741ef><div class=\"line-description\" data-v-2f7741ef>" + _vm._ssrEscape("\n                    " + _vm._s(line.description) + "\n                  ") + "</div></td> <td class=\"text-right\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.quantity))) + "</td> <td class=\"text-right\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(line.unitPrice))) + "</td> <td class=\"text-right\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatPercentage(line.taxRate))) + "</td> <td class=\"text-right\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(line.taxAmount))) + "</td> <td class=\"text-right total-cell\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(line.lineTotal))) + "</td></tr>";
  }) + "</tbody> <tfoot data-v-2f7741ef><tr class=\"summary-row\" data-v-2f7741ef><td colspan=\"6\" data-v-2f7741ef><strong data-v-2f7741ef>ລວມທັງໝົດ:</strong></td> <td class=\"text-right\" data-v-2f7741ef><strong data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculateLinesTotal()))) + "</strong></td></tr></tfoot></table></div></div>" : "<!---->") + " " + (_vm.invoice.receiveHeaders && _vm.invoice.receiveHeaders.length > 0 ? "<div class=\"info-section\" data-v-2f7741ef><div class=\"section-header\" data-v-2f7741ef><h3 data-v-2f7741ef><i class=\"fas fa-receipt\" data-v-2f7741ef></i>\n            ປະຫວັດການຮັບຊຳລະ\n          </h3> <span class=\"item-count\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.receiveHeaders.length) + " ຄັ້ງ") + "</span></div> <div class=\"table-container\" data-v-2f7741ef><table class=\"data-table\" data-v-2f7741ef><thead data-v-2f7741ef><tr data-v-2f7741ef><th data-v-2f7741ef>ເລກທີໃບຮັບ</th> <th data-v-2f7741ef>ວັນທີບັນທຶກ</th> <th data-v-2f7741ef>ວັນທີຮັບເງິນ</th> <th data-v-2f7741ef>ຍອດເງິນ</th> <th data-v-2f7741ef>ວິທີຈ່າຍ</th> <th data-v-2f7741ef>ເລກອ້າງອີງ</th></tr></thead> <tbody data-v-2f7741ef>" + _vm._ssrList(_vm.invoice.receiveHeaders, function (receive) {
    return "<tr data-v-2f7741ef><td data-v-2f7741ef><span class=\"receipt-number\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(receive.receiptNumber)) + "</span></td> <td data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatDate(receive.bookingDate))) + "</td> <td data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatDate(receive.receivedDate))) + "</td> <td class=\"text-right\" data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(receive.totalReceivedAmount))) + "</td> <td data-v-2f7741ef><span" + _vm._ssrClass(null, ['payment-method', receive.paymentMethod]) + " data-v-2f7741ef>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatPaymentMethod(receive.paymentMethod)) + "\n                  ") + "</span></td> <td data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(receive.referenceNumber || '-')) + "</td></tr>";
  }) + "</tbody> <tfoot data-v-2f7741ef><tr class=\"summary-row\" data-v-2f7741ef><td colspan=\"3\" data-v-2f7741ef><strong data-v-2f7741ef>ລວມຊຳລະແລ້ວ:</strong></td> <td class=\"text-right\" data-v-2f7741ef><strong data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatePaymentsTotal()))) + "</strong></td> <td colspan=\"2\" data-v-2f7741ef></td></tr> <tr class=\"balance-row\" data-v-2f7741ef><td colspan=\"3\" data-v-2f7741ef><strong data-v-2f7741ef>ຍອດຄ້າງຊຳລະ:</strong></td> <td class=\"text-right\" data-v-2f7741ef><strong" + _vm._ssrClass(null, _vm.getBalanceClass()) + " data-v-2f7741ef>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatCurrency(_vm.calculateBalance())) + "\n                  ") + "</strong></td> <td colspan=\"2\" data-v-2f7741ef></td></tr></tfoot></table></div></div>" : "<!---->") + " <div class=\"info-section\" data-v-2f7741ef><div class=\"section-header\" data-v-2f7741ef><h3 data-v-2f7741ef><i class=\"fas fa-info-circle\" data-v-2f7741ef></i>\n            ຂໍ້ມູນລະບົບ\n          </h3></div> <div class=\"info-grid\" data-v-2f7741ef>" + (_vm.invoice.maker ? "<div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ຜູ້ສ້າງ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.maker.username)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ວັນທີສ້າງ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.invoice.createdAt))) + "</span></div> " + (_vm.invoice.updateUser ? "<div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ຜູ້ແກ້ໄຂຫຼ້າສຸດ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.invoice.updateUser.username)) + "</span></div>" : "<!---->") + " " + (_vm.invoice.updateTimestamp ? "<div class=\"info-item\" data-v-2f7741ef><label data-v-2f7741ef>ວັນທີແກ້ໄຂຫຼ້າສຸດ:</label> <span data-v-2f7741ef>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.invoice.updateTimestamp))) + "</span></div>" : "<!---->") + "</div></div></div>" : "<!---->") + " <div class=\"modal-footer\" data-v-2f7741ef><button type=\"button\" class=\"btn btn-secondary\" data-v-2f7741ef><i class=\"fas fa-times\" data-v-2f7741ef></i>\n        ປິດ\n      </button> <button type=\"button\" class=\"btn btn-primary\" data-v-2f7741ef><i class=\"fas fa-print\" data-v-2f7741ef></i>\n        ພິມ\n      </button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/view/index.vue?vue&type=template&id=2f7741ef&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'InvoiceHeaderView',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoice: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    printInvoice() {
      // Implement print functionality
      window.print();
    },
    calculateLinesTotal() {
      if (!this.invoice.invoiceLines) return 0;
      return this.invoice.invoiceLines.reduce((total, line) => {
        return total + parseFloat(line.lineTotal || 0);
      }, 0);
    },
    calculatePaymentsTotal() {
      if (!this.invoice.receiveHeaders) return 0;
      return this.invoice.receiveHeaders.reduce((total, receive) => {
        return total + parseFloat(receive.totalReceivedAmount || 0);
      }, 0);
    },
    calculateBalance() {
      const totalAmount = parseFloat(this.invoice.totalAmount || 0);
      const paidAmount = this.calculatePaymentsTotal();
      return totalAmount - paidAmount;
    },
    getBalanceClass() {
      const balance = this.calculateBalance();
      if (balance <= 0) return 'balance-paid';
      if (balance > 0) return 'balance-outstanding';
      return '';
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
    formatPercentage(percentage) {
      if (!percentage) return '0%';
      return `${parseFloat(percentage)}%`;
    },
    formatStatus(status) {
      const statusLabels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
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
    getDueDateClass(dueDate, status) {
      if (!dueDate || status === 'paid' || status === 'cancelled') return '';
      const today = new Date();
      const due = new Date(dueDate);
      if (due < today && status !== 'paid') return 'overdue-date';
      if (due <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) return 'due-soon';
      return '';
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/invoice/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(629)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2f7741ef",
  "a0ef763e"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_18ed1e13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(737);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_18ed1e13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_18ed1e13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_18ed1e13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_18ed1e13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-header-summary-container[data-v-18ed1e13]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-18ed1e13]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-18ed1e13]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-18ed1e13]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-18ed1e13]{display:flex;gap:12px}.filter-section[data-v-18ed1e13]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-18ed1e13]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-18ed1e13]{display:flex;flex-direction:column;gap:8px;min-width:150px}.filter-group label[data-v-18ed1e13]{color:#555;font-size:14px;font-weight:500}.filter-actions[data-v-18ed1e13]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-18ed1e13]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-18ed1e13]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-18ed1e13]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-invoices[data-v-18ed1e13]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.summary-card.total-invoices .card-icon[data-v-18ed1e13]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.status-draft[data-v-18ed1e13]{border-left:4px solid #6c757d}.summary-card.status-sent[data-v-18ed1e13]{border-left:4px solid #17a2b8}.summary-card.status-paid[data-v-18ed1e13]{border-left:4px solid #28a745}.summary-card.status-overdue[data-v-18ed1e13]{border-left:4px solid #dc3545}.summary-card.amount-stats[data-v-18ed1e13]{border-left:4px solid #ffc107}.card-icon[data-v-18ed1e13]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-18ed1e13]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.draft[data-v-18ed1e13]{background:#f8f9fa;color:#6c757d}.card-icon.sent[data-v-18ed1e13]{background:#d1ecf1;color:#17a2b8}.card-icon.paid[data-v-18ed1e13]{background:#d4edda;color:#28a745}.card-icon.overdue[data-v-18ed1e13]{background:#f8d7da;color:#dc3545}.card-icon.amount[data-v-18ed1e13]{background:#fff3cd;color:#ffc107}.card-content[data-v-18ed1e13]{flex:1;min-width:0}.card-content h3[data-v-18ed1e13]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-18ed1e13]{font-size:14px;margin:0}.amount-info[data-v-18ed1e13]{display:block;font-size:12px;margin-top:4px;opacity:.8}.table-section[data-v-18ed1e13]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-18ed1e13]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-18ed1e13]{color:#333;margin:0}.record-count[data-v-18ed1e13]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-18ed1e13]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-18ed1e13]{overflow-x:auto}.data-table[data-v-18ed1e13]{border-collapse:collapse;width:100%}.data-table td[data-v-18ed1e13],.data-table th[data-v-18ed1e13]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-18ed1e13]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-18ed1e13]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-18ed1e13]:hover{background-color:#e9ecef}.data-table th i[data-v-18ed1e13]{margin-left:8px;opacity:.5}.invoice-number strong[data-v-18ed1e13]{color:#333;display:block;font-size:14px;margin-bottom:4px}.invoice-description[data-v-18ed1e13]{color:#666;font-size:12px}.customer-info .customer-name[data-v-18ed1e13]{align-items:center;color:#495057;display:flex;font-weight:600;gap:4px;margin-bottom:2px}.customer-info .customer-email[data-v-18ed1e13]{color:#666;font-size:12px;margin-left:16px}.amount-details .total-amount[data-v-18ed1e13]{color:#495057;font-weight:600;margin-bottom:2px}.amount-breakdown[data-v-18ed1e13]{color:#666;font-size:11px}.amount-breakdown small[data-v-18ed1e13]{display:block}.overdue-date[data-v-18ed1e13]{color:#dc3545;font-weight:600}.due-soon[data-v-18ed1e13]{color:#ffc107;font-weight:500}.status-badge[data-v-18ed1e13]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.draft[data-v-18ed1e13]{background-color:#f8f9fa;color:#6c757d}.status-badge.sent[data-v-18ed1e13]{background-color:#d1ecf1;color:#0c5460}.status-badge.paid[data-v-18ed1e13]{background-color:#d4edda;color:#155724}.status-badge.overdue[data-v-18ed1e13]{background-color:#f8d7da;color:#721c24}.status-badge.cancelled[data-v-18ed1e13]{background-color:#e2e3e5;color:#383d41}.maker-info[data-v-18ed1e13]{color:#495057;font-size:14px}.maker-info small[data-v-18ed1e13]{color:#666;display:block;font-size:12px;margin-top:2px}.actions-cell[data-v-18ed1e13]{display:flex;flex-wrap:wrap;gap:4px}.pagination-container[data-v-18ed1e13]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-18ed1e13]{color:#666;font-size:14px}.pagination-controls[data-v-18ed1e13]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-18ed1e13]{color:#666;padding:6px 12px}.btn[data-v-18ed1e13]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-18ed1e13]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-18ed1e13]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-18ed1e13]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-18ed1e13]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-18ed1e13]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-18ed1e13]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-18ed1e13]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-18ed1e13]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-18ed1e13]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-18ed1e13]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-18ed1e13]:hover{background-color:#17a2b8;color:#fff}.btn-outline-success[data-v-18ed1e13]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-18ed1e13]:hover{background-color:#28a745;color:#fff}.btn-outline-warning[data-v-18ed1e13]{background-color:transparent;border-color:#ffc107;color:#ffc107}.btn-outline-warning[data-v-18ed1e13]:hover{background-color:#ffc107;color:#212529}.btn-outline-danger[data-v-18ed1e13]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-18ed1e13]:hover{background-color:#dc3545;color:#fff}.btn-sm[data-v-18ed1e13]{font-size:12px;padding:4px 8px}.form-control[data-v-18ed1e13]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-18ed1e13]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.loading-overlay[data-v-18ed1e13]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-18ed1e13]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-18ed1e13]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:768px){.invoice-header-summary-container[data-v-18ed1e13]{padding:10px}.header-content[data-v-18ed1e13]{align-items:flex-start}.filter-row[data-v-18ed1e13],.header-content[data-v-18ed1e13]{flex-direction:column;gap:16px}.filter-group[data-v-18ed1e13]{min-width:auto;width:100%}.filter-actions[data-v-18ed1e13]{flex-direction:row;width:100%}.summary-cards[data-v-18ed1e13]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-18ed1e13]{padding:20px}.card-icon[data-v-18ed1e13]{height:50px;margin-right:16px;width:50px}.card-content h3[data-v-18ed1e13],.card-icon[data-v-18ed1e13]{font-size:20px}.pagination-container[data-v-18ed1e13],.table-header[data-v-18ed1e13]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-18ed1e13]{flex-wrap:wrap}.actions-cell[data-v-18ed1e13]{flex-direction:column;gap:4px}}@media (max-width:576px){.summary-card[data-v-18ed1e13]{flex-direction:column;text-align:center}.card-icon[data-v-18ed1e13]{margin:0 auto 16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map