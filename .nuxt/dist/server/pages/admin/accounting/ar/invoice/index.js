exports.ids = [128,9,10,11,12];
exports.modules = {

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/accounting/ar/invoice/index.vue?vue&type=template&id=6401f216&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "invoice-header-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-6401f216><div class=\"header-content\" data-v-6401f216><h1 class=\"page-title\" data-v-6401f216>ລະບົບຈັດການໃບທວງໜີ້</h1> <div class=\"header-actions\" data-v-6401f216><button class=\"btn btn-primary\" data-v-6401f216><i class=\"fas fa-plus\" data-v-6401f216></i>\n          ໃບທວງໜີ້ໃໝ່\n        </button> <button class=\"btn btn-secondary\" data-v-6401f216><i class=\"fas fa-download\" data-v-6401f216></i>\n          Export\n        </button></div></div></div> "), _vm._ssrNode("<div class=\"filter-section\" data-v-6401f216>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-6401f216>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-6401f216><label data-v-6401f216>ຄົ້ນຫາ:</label> <input type=\"text\" placeholder=\"ເລກທີໃບແຈ້ງໜີ້, ລູກຄ້າ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"form-control\" data-v-6401f216></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-6401f216>", "</div>", [_vm._ssrNode("<label data-v-6401f216>ສະຖານະ:</label> "), _c('select', {
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
  }, [_vm._v("ຍົກເລີກ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-6401f216>", "</div>", [_vm._ssrNode("<label data-v-6401f216>ລູກຄ້າ:</label> "), _c('select', {
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
  })], 2)], 2), _vm._ssrNode(" <div class=\"filter-group\" data-v-6401f216><label data-v-6401f216>ວັນທີແຈ້ງໜີ້ຈາກ:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"form-control\" data-v-6401f216></div> <div class=\"filter-group\" data-v-6401f216><label data-v-6401f216>ວັນທີແຈ້ງໜີ້ເຖິງ:</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"form-control\" data-v-6401f216></div> <div class=\"filter-actions\" data-v-6401f216><button class=\"btn btn-outline-primary\" data-v-6401f216><i class=\"fas fa-search\" data-v-6401f216></i>\n          ຄົ້ນຫາ\n        </button> <button class=\"btn btn-outline-secondary\" data-v-6401f216><i class=\"fas fa-undo\" data-v-6401f216></i>\n          Reset\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"summary-cards\" data-v-6401f216><div class=\"summary-card total-invoices\" data-v-6401f216><div class=\"card-icon total\" data-v-6401f216><i class=\"fas fa-file-invoice\" data-v-6401f216></i></div> <div class=\"card-content\" data-v-6401f216><h3 data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.total.count)) + "</h3> <p data-v-6401f216>ລວມໃບແຈ້ງໜີ້ທັງໝົດ</p></div></div> <div class=\"summary-card status-draft\" data-v-6401f216><div class=\"card-icon draft\" data-v-6401f216><i class=\"fas fa-edit\" data-v-6401f216></i></div> <div class=\"card-content\" data-v-6401f216><h3 data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.draft.count)) + "</h3> <p data-v-6401f216>" + _vm._ssrEscape("ແບບຮ່າງ (" + _vm._s(_vm.summaryStats.draft.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-sent\" data-v-6401f216><div class=\"card-icon sent\" data-v-6401f216><i class=\"fas fa-paper-plane\" data-v-6401f216></i></div> <div class=\"card-content\" data-v-6401f216><h3 data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.sent.count)) + "</h3> <p data-v-6401f216>" + _vm._ssrEscape("ສົ່ງແລ້ວ (" + _vm._s(_vm.summaryStats.sent.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-paid\" data-v-6401f216><div class=\"card-icon paid\" data-v-6401f216><i class=\"fas fa-check-circle\" data-v-6401f216></i></div> <div class=\"card-content\" data-v-6401f216><h3 data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.paid.count)) + "</h3> <p data-v-6401f216>" + _vm._ssrEscape("ຈ່າຍແລ້ວ (" + _vm._s(_vm.summaryStats.paid.percentage) + "%)") + "</p></div></div> <div class=\"summary-card status-overdue\" data-v-6401f216><div class=\"card-icon overdue\" data-v-6401f216><i class=\"fas fa-exclamation-triangle\" data-v-6401f216></i></div> <div class=\"card-content\" data-v-6401f216><h3 data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.summaryStats.overdue.count)) + "</h3> <p data-v-6401f216>" + _vm._ssrEscape("ເກີນກຳນົດ (" + _vm._s(_vm.summaryStats.overdue.percentage) + "%)") + "</p></div></div> <div class=\"summary-card amount-stats\" data-v-6401f216><div class=\"card-icon amount\" data-v-6401f216><i class=\"fas fa-dollar-sign\" data-v-6401f216></i></div> <div class=\"card-content\" data-v-6401f216><h3 data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.summaryStats.totalAmount))) + "</h3> <p data-v-6401f216>ຍອດລວມທັງໝົດ</p> <small class=\"amount-info\" data-v-6401f216>" + _vm._ssrEscape("ຈ່າຍແລ້ວ: " + _vm._s(_vm.formatCurrency(_vm.summaryStats.paidAmount))) + "</small></div></div></div> "), _vm._ssrNode("<div class=\"table-section\" data-v-6401f216>", "</div>", [_vm._ssrNode("<div class=\"table-header\" data-v-6401f216>", "</div>", [_vm._ssrNode("<div class=\"table-title\" data-v-6401f216><h3 data-v-6401f216>ລາຍການໃບແຈ້ງໜີ້</h3> <span class=\"record-count\" data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.filteredInvoices.length) + " ລາຍການ") + "</span></div> "), _vm._ssrNode("<div class=\"table-actions\" data-v-6401f216>", "</div>", [_vm._ssrNode("<div class=\"per-page-selector\" data-v-6401f216>", "</div>", [_vm._ssrNode("<label data-v-6401f216>Show:</label> "), _c('select', {
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
  }, [_vm._v("100")])]), _vm._ssrNode(" <span data-v-6401f216>per page</span>")], 2)])], 2), _vm._ssrNode(" <div class=\"table-container\" data-v-6401f216><table class=\"data-table\" data-v-6401f216><thead data-v-6401f216><tr data-v-6401f216><th class=\"sortable\" data-v-6401f216>\n              ເລກທີໃບແຈ້ງໜີ້\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('invoiceNumber')) + " data-v-6401f216></i></th> <th class=\"sortable\" data-v-6401f216>\n              ວັນທີແຈ້ງໜີ້\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('invoiceDate')) + " data-v-6401f216></i></th> <th data-v-6401f216>ລູກຄ້າ</th> <th class=\"sortable\" data-v-6401f216>\n              ວັນທີຄົບກຳນົດ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('dueDate')) + " data-v-6401f216></i></th> <th class=\"sortable\" data-v-6401f216>\n              ຍອດລວມ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('totalAmount')) + " data-v-6401f216></i></th> <th class=\"sortable\" data-v-6401f216>\n              ສະຖານະ\n              <i" + _vm._ssrClass(null, _vm.getSortIcon('status')) + " data-v-6401f216></i></th> <th data-v-6401f216>ຜູ້ສ້າງ</th> <th data-v-6401f216>ຟັງຊັ່ນ</th></tr></thead> <tbody data-v-6401f216>" + _vm._ssrList(_vm.paginatedInvoices, function (invoice) {
    return "<tr data-v-6401f216><td data-v-6401f216><div class=\"invoice-number\" data-v-6401f216><strong data-v-6401f216>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</strong> " + (invoice.description ? "<div class=\"invoice-description\" data-v-6401f216>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.truncateText(invoice.description, 50)) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.invoiceDate))) + "</td> <td data-v-6401f216><div class=\"customer-info\" data-v-6401f216><div class=\"customer-name\" data-v-6401f216><i class=\"fas fa-user\" data-v-6401f216></i>" + _vm._ssrEscape("\n                  " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + "\n                ") + "</div> " + (invoice.customer && invoice.customer.email ? "<div class=\"customer-email\" data-v-6401f216>" + _vm._ssrEscape("\n                  " + _vm._s(invoice.customer.email) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-6401f216><span" + _vm._ssrClass(null, _vm.getDueDateClass(invoice.dueDate, invoice.status)) + " data-v-6401f216>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatDate(invoice.dueDate)) + "\n              ") + "</span></td> <td data-v-6401f216><div class=\"amount-details\" data-v-6401f216><div class=\"total-amount\" data-v-6401f216>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(invoice.totalAmount)) + "\n                ") + "</div> <div class=\"amount-breakdown\" data-v-6401f216><small data-v-6401f216>" + _vm._ssrEscape("Net: " + _vm._s(_vm.formatCurrency(invoice.netAmount))) + "</small> " + (invoice.taxAmount > 0 ? "<small data-v-6401f216>" + _vm._ssrEscape("Tax: " + _vm._s(_vm.formatCurrency(invoice.taxAmount))) + "</small>" : "<!---->") + "</div></div></td> <td data-v-6401f216><span" + _vm._ssrClass(null, ['status-badge', invoice.status]) + " data-v-6401f216>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(invoice.status)) + "\n              ") + "</span></td> <td data-v-6401f216><div class=\"maker-info\" data-v-6401f216>" + _vm._ssrEscape("\n                " + _vm._s(invoice.maker ? invoice.maker.username : 'N/A') + "\n                ") + (invoice.createdAt ? "<small data-v-6401f216>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.createdAt))) + "</small>" : "<!---->") + "</div></td> <td class=\"actions-cell\" data-v-6401f216><button title=\"ເບິ່ງລາຍລະອຽດ\" class=\"btn btn-sm btn-outline-primary\" data-v-6401f216><i class=\"fas fa-eye\" data-v-6401f216></i></button> <button title=\"ແກ້ໄຂ\"" + _vm._ssrAttr("disabled", invoice.status === 'paid') + " class=\"btn btn-sm btn-outline-info\" data-v-6401f216><i class=\"fas fa-edit\" data-v-6401f216></i></button> " + (invoice.status !== 'paid' && invoice.status !== 'cancelled' ? "<button title=\"ຈ່າຍແລ້ວ\" class=\"btn btn-sm btn-outline-success\" data-v-6401f216><i class=\"fas fa-check\" data-v-6401f216></i></button>" : "<!---->") + " " + (invoice.status === 'draft' ? "<button title=\"ສົ່ງໃບແຈ້ງໜີ້\" class=\"btn btn-sm btn-outline-warning\" data-v-6401f216><i class=\"fas fa-paper-plane\" data-v-6401f216></i></button>" : "<!---->") + "</td></tr>";
  }) + "</tbody></table></div> <div class=\"pagination-container\" data-v-6401f216><div class=\"pagination-info\" data-v-6401f216>" + _vm._ssrEscape("\n        Showing " + _vm._s(_vm.paginationInfo.start) + " to " + _vm._s(_vm.paginationInfo.end) + " of\n        " + _vm._s(_vm.paginationInfo.total) + " entries\n      ") + "</div> <div class=\"pagination-controls\" data-v-6401f216><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"btn btn-sm btn-outline-secondary\" data-v-6401f216>\n          Previous\n        </button> " + _vm._ssrList(_vm.visiblePages, function (page) {
    return "<span data-v-6401f216>" + (page !== '...' ? "<button" + _vm._ssrClass("btn btn-sm", page === _vm.pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary') + " data-v-6401f216>" + _vm._ssrEscape("\n            " + _vm._s(page) + "\n          ") + "</button>" : "<span class=\"pagination-ellipsis\" data-v-6401f216>...</span>") + "</span>";
  }) + " <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.totalPages) + " class=\"btn btn-sm btn-outline-secondary\" data-v-6401f216>\n          Next\n        </button></div></div>")], 2), _vm._ssrNode(" "), _c('client-only', [_c('InvoiceHeaderMaintain', {
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
  })], 1), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading-overlay\" data-v-6401f216><div class=\"loading-spinner\" data-v-6401f216><i class=\"fas fa-spinner fa-spin\" data-v-6401f216></i> <p data-v-6401f216>Loading...</p></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/accounting/ar/invoice/index.vue?vue&type=template&id=6401f216&scoped=true&

// EXTERNAL MODULE: ./components/accounting/ar/invoice/maintain/index.vue + 4 modules
var maintain = __webpack_require__(826);

// EXTERNAL MODULE: ./components/accounting/ar/invoice/view/index.vue + 4 modules
var view = __webpack_require__(827);

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
  
  var style0 = __webpack_require__(992)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ar_invoicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6401f216",
  "5b43ed5b"
  
)

/* harmony default export */ var invoice = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ar_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(515);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'InvoiceAuditDialog',
  components: {
    InvoiceAuditViewer: _components_accounting_ar_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoiceId: {
      type: [Number, String],
      default: null
    },
    invoiceInfo: {
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
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້...');

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF();
        } catch (jsPDFError) {
          console.warn('jsPDF not available, using HTML print method:', jsPDFError);
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້ສຳເລັດ!');
      } catch (error) {
        var _this$$toast3;
        console.error('Error exporting invoice audit log:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້ໄດ້');
      } finally {
        this.isExporting = false;
      }
    },
    async exportWithJsPDF() {
      var _this$invoiceInfo;
      // Import jsPDF dynamically (requires: npm install jspdf)
      const {
        jsPDF
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 358, 7));

      // Create new PDF document
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້', 20, 20);

      // Add invoice info
      if (this.invoiceInfo) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`ເລກທີໃບແຈ້ງໜີ້: ${this.invoiceInfo.invoiceNumber}`, 20, 35);
        doc.text(`ຈຳນວນເງິນ: ${this.formatCurrency(this.invoiceInfo.totalAmount)}`, 20, 45);
        doc.text(`ວັນທີໃບແຈ້ງໜີ້: ${this.formatDate(this.invoiceInfo.invoiceDate)}`, 20, 55);
        if (this.invoiceInfo.status) {
          doc.text(`ສະຖານະ: ${this.getStatusText(this.invoiceInfo.status)}`, 20, 65);
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

        // Invoice data summary
        if (log.recordData) {
          yPosition += 8;
          doc.text(`ຈຳນວນເງິນລວມ: ${this.formatCurrency(log.recordData.totalAmount)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ວັນທີໃບແຈ້ງໜີ້: ${this.formatDate(log.recordData.invoiceDate)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ສະຖານະ: ${this.getStatusText(log.recordData.status)}`, 25, yPosition);
          if (log.recordData.description) {
            yPosition += 8;
            doc.text(`ລາຍລະອຽດ: ${log.recordData.description}`, 25, yPosition);
          }
        }
        yPosition += 15;
      });

      // Create filename
      const filename = `invoice-audit-log-${((_this$invoiceInfo = this.invoiceInfo) === null || _this$invoiceInfo === void 0 ? void 0 : _this$invoiceInfo.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.pdf`;

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
              <p style="margin: 3px 0;"><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${log.recordData.invoiceNumber || ''}</p>
              <p style="margin: 3px 0;"><strong>ຈຳນວນເງິນລວມ:</strong> ${this.formatCurrency(log.recordData.totalAmount)}</p>
              <p style="margin: 3px 0;"><strong>ວັນທີໃບແຈ້ງໜີ້:</strong> ${this.formatDate(log.recordData.invoiceDate)}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(log.recordData.status)}</p>
              ${log.recordData.description ? `<p style="margin: 3px 0;"><strong>ລາຍລະອຽດ:</strong> ${log.recordData.description}</p>` : ''}
            </div>
          ` : ''}
        </div>
      `).join('');
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້</title>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
            .invoice-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .timestamp { text-align: right; color: #666; font-size: 12px; margin-bottom: 20px; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້</h1>
          
          ${this.invoiceInfo ? `
            <div class="invoice-info">
              <p><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${this.invoiceInfo.invoiceNumber}</p>
              <p><strong>ຈຳນວນເງິນ:</strong> ${this.formatCurrency(this.invoiceInfo.totalAmount)}</p>
              <p><strong>ວັນທີໃບແຈ້ງໜີ້:</strong> ${this.formatDate(this.invoiceInfo.invoiceDate)}</p>
              ${this.invoiceInfo.status ? `<p><strong>ສະຖານະ:</strong> ${this.getStatusText(this.invoiceInfo.status)}</p>` : ''}
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
        var _this$invoiceInfo2, _this$$toast4;
        const exportData = {
          invoiceInfo: this.invoiceInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map(log => {
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11;
            return {
              id: log.id,
              action: this.getActionText(log.action),
              user: this.getUserName(log),
              email: this.getUserEmail(log),
              timestamp: log.auditDate,
              reason: log.reason,
              invoiceData: {
                invoiceId: log.invoiceId,
                invoiceNumber: (_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber,
                totalAmount: (_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount,
                taxAmount: (_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.taxAmount,
                netAmount: (_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.netAmount,
                invoiceDate: (_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.invoiceDate,
                dueDate: (_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.dueDate,
                status: this.getStatusText((_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.status),
                description: (_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.description,
                clientId: (_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.clientId,
                currencyId: (_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.currencyId,
                exchangeRate: (_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.exchangeRate
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
        link.download = `invoice-audit-log-${((_this$invoiceInfo2 = this.invoiceInfo) === null || _this$invoiceInfo2 === void 0 ? void 0 : _this$invoiceInfo2.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.json`;
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
        var _this$invoiceInfo3, _this$$toast6;
        const headers = ['ລຳດັບ', 'ການດຳເນີນງານ', 'ຜູ້ດຳເນີນການ', 'ອີເມວ', 'ເວລາ', 'ເຫດຜົນ', 'ເລກທີໃບແຈ້ງໜີ້', 'ຈຳນວນເງິນລວມ', 'ຈຳນວນເງິນພາສີ', 'ຈຳນວນເງິນສຸດທິ', 'ວັນທີໃບແຈ້ງໜີ້', 'ວັນທີຄົບກຳນົດ', 'ສະຖານະ', 'ລາຍລະອຽດ', 'ລູກຄ້າ ID', 'ສະກຸນເງິນ ID', 'ອັດຕາແລກປ່ຽນ'];
        const csvData = this.auditLogs.map((log, index) => {
          var _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData21, _log$recordData22;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', ((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.invoiceNumber) || '', ((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.totalAmount) || '', ((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.taxAmount) || '', ((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.netAmount) || '', this.formatDate((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.invoiceDate) || '', this.formatDate((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.dueDate) || '', this.getStatusText((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : _log$recordData18.status) || '', ((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : _log$recordData19.description) || '', ((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : _log$recordData20.clientId) || '', ((_log$recordData21 = log.recordData) === null || _log$recordData21 === void 0 ? void 0 : _log$recordData21.currencyId) || '', ((_log$recordData22 = log.recordData) === null || _log$recordData22 === void 0 ? void 0 : _log$recordData22.exchangeRate) || ''];
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
        link.download = `invoice-audit-log-${((_this$invoiceInfo3 = this.invoiceInfo) === null || _this$invoiceInfo3 === void 0 ? void 0 : _this$invoiceInfo3.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.csv`;
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
      var _log$recordData23, _log$recordData23$mak, _log$recordData24, _log$recordData24$che, _log$user;
      return ((_log$recordData23 = log.recordData) === null || _log$recordData23 === void 0 ? void 0 : (_log$recordData23$mak = _log$recordData23.maker) === null || _log$recordData23$mak === void 0 ? void 0 : _log$recordData23$mak.cus_email) || ((_log$recordData24 = log.recordData) === null || _log$recordData24 === void 0 ? void 0 : (_log$recordData24$che = _log$recordData24.checker) === null || _log$recordData24$che === void 0 ? void 0 : _log$recordData24$che.cus_email) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.email) || '';
    },
    // Helper methods for PDF generation
    getActionText(action) {
      const actionMap = {
        CREATE: 'ສ້າງໃບແຈ້ງໜີ້',
        UPDATE: 'ອັບເດດໃບແຈ້ງໜີ້',
        DELETE: 'ລຶບໃບແຈ້ງໜີ້',
        APPROVE: 'ອະນຸມັດໃບແຈ້ງໜີ້',
        REJECT: 'ປະຕິເສດໃບແຈ້ງໜີ້',
        SUBMIT: 'ສົ່ງໃບແຈ້ງໜີ້',
        CANCEL: 'ຍົກເລີກໃບແຈ້ງໜີ້'
      };
      return actionMap[action] || action;
    },
    getStatusText(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
        pending: 'ລໍຖ້າການອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        rejected: 'ປະຕິເສດ'
      };
      return statusMap[status] || status;
    },
    getUserName(log) {
      var _log$recordData25, _log$recordData25$mak, _log$recordData26, _log$recordData26$che, _log$user2;
      return ((_log$recordData25 = log.recordData) === null || _log$recordData25 === void 0 ? void 0 : (_log$recordData25$mak = _log$recordData25.maker) === null || _log$recordData25$mak === void 0 ? void 0 : _log$recordData25$mak.cus_name) || ((_log$recordData26 = log.recordData) === null || _log$recordData26 === void 0 ? void 0 : (_log$recordData26$che = _log$recordData26.checker) === null || _log$recordData26$che === void 0 ? void 0 : _log$recordData26$che.cus_name) || ((_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.name) || 'ບໍ່ຮູ້ຈັກ';
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(337)["URL"]))

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(504);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("11c73693", content, true, context)
};

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(567);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1f452959", content, true, context)
};

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-audit-viewer[data-v-6e17086e]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-6e17086e]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-6e17086e]{align-items:center;display:flex;gap:8px}.filter-input[data-v-6e17086e]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:120px;padding:8px 12px}.filter-input[data-v-6e17086e]:focus{border-color:#667eea;outline:none}.btn-clear[data-v-6e17086e],.btn-search[data-v-6e17086e]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-6e17086e]{background:#667eea;color:#fff}.btn-clear[data-v-6e17086e]{background:#6c757d;color:#fff}.loading[data-v-6e17086e]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-6e17086e]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-6e17086e]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-6e17086e]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-6e17086e]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-6e17086e]{background:#28a745}.dot-update[data-v-6e17086e]{background:#667eea}.dot-delete[data-v-6e17086e]{background:#dc3545}.dot-approve[data-v-6e17086e]{background:#28a745}.dot-reject[data-v-6e17086e]{background:#dc3545}.dot-submit[data-v-6e17086e]{background:#17a2b8}.dot-cancel[data-v-6e17086e]{background:#ffc107}.timeline-content[data-v-6e17086e]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-6e17086e]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-6e17086e]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-6e17086e]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-6e17086e],.content-header[data-v-6e17086e]{align-items:center;display:flex}.action-info[data-v-6e17086e]{gap:12px}.action-badge[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-6e17086e]{background:#d4edda;color:#155724}.badge-update[data-v-6e17086e]{background:#e6efff;color:#004085}.badge-delete[data-v-6e17086e]{background:#f8d7da;color:#721c24}.badge-approve[data-v-6e17086e]{background:#d4edda;color:#155724}.badge-reject[data-v-6e17086e]{background:#f8d7da;color:#721c24}.badge-submit[data-v-6e17086e]{background:#d1ecf1;color:#0c5460}.amount-change[data-v-6e17086e],.badge-cancel[data-v-6e17086e]{background:#fff3cd;color:#856404}.amount-change[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-6e17086e]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-6e17086e],.user-info[data-v-6e17086e]{align-items:center;display:flex}.user-info[data-v-6e17086e]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-6e17086e]{color:#666;font-size:12px}.invoice-info[data-v-6e17086e]{align-items:center;display:flex;font-size:14px;gap:12px}.invoice-number[data-v-6e17086e]{color:#667eea;font-size:15px;font-weight:600}.invoice-amount[data-v-6e17086e]{color:#28a745;font-size:15px;font-weight:600}.invoice-date[data-v-6e17086e]{color:#666;font-size:13px}.content-status[data-v-6e17086e]{justify-content:space-between;margin-bottom:8px}.content-status[data-v-6e17086e],.status-badge[data-v-6e17086e]{align-items:center;display:flex}.status-badge[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:500;gap:4px;padding:3px 8px}.status-badge i[data-v-6e17086e]{font-size:8px}.status-draft[data-v-6e17086e]{background:#e9ecef;color:#495057}.status-sent[data-v-6e17086e]{background:#d1ecf1;color:#0c5460}.status-paid[data-v-6e17086e]{background:#d4edda;color:#155724}.status-overdue[data-v-6e17086e]{background:#f8d7da;color:#721c24}.status-cancelled[data-v-6e17086e]{background:#e2e3e5;color:#383d41}.status-pending[data-v-6e17086e]{background:#fff3cd;color:#856404}.status-approved[data-v-6e17086e]{background:#d4edda;color:#155724}.status-rejected[data-v-6e17086e]{background:#f8d7da;color:#721c24}.line-items-count[data-v-6e17086e]{background:#f8f9fa;border-radius:3px;color:#666;font-size:12px;padding:2px 6px}.content-preview[data-v-6e17086e]{display:flex;font-size:13px;gap:12px;margin-bottom:8px}.description[data-v-6e17086e]{color:#666}.content-reason[data-v-6e17086e]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-6e17086e]{font-size:11px}.expand-indicator[data-v-6e17086e]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-6e17086e]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-6e17086e]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-bottom:16px}.detail-item[data-v-6e17086e]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-6e17086e]{color:#333;font-size:13px}.amount[data-v-6e17086e]{color:#28a745;font-weight:600}.status[data-v-6e17086e]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.description-section[data-v-6e17086e]{margin-bottom:16px}.description-section h4[data-v-6e17086e]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.description-section p[data-v-6e17086e]{color:#666;font-size:13px;line-height:1.4;margin:0}.line-items-section h4[data-v-6e17086e]{align-items:center;border-bottom:1px solid #e5e5e5;color:#333;display:flex;font-size:14px;justify-content:space-between;margin:0 0 12px;padding-bottom:4px}.total-amount[data-v-6e17086e]{color:#28a745;font-size:13px;font-weight:600}.line-items-list[data-v-6e17086e]{display:flex;flex-direction:column;gap:8px}.line-item[data-v-6e17086e]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:12px}.line-item-header[data-v-6e17086e]{align-items:center;display:flex;justify-content:space-between;margin-bottom:6px}.line-number[data-v-6e17086e]{color:#333;font-size:13px;font-weight:600}.line-total[data-v-6e17086e]{color:#28a745;font-size:14px;font-weight:600}.line-item-details[data-v-6e17086e]{display:flex;flex-direction:column;gap:6px}.line-description[data-v-6e17086e]{color:#333;font-size:13px;font-weight:500}.line-quantities[data-v-6e17086e]{color:#666;display:flex;font-size:12px;gap:12px}.quantity[data-v-6e17086e],.tax-rate[data-v-6e17086e],.unit-price[data-v-6e17086e]{background:#e9ecef;border-radius:3px;padding:2px 6px}.approval-section h4[data-v-6e17086e]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.approval-grid[data-v-6e17086e]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.approval-item[data-v-6e17086e]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.approval-item label[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.approval-item span[data-v-6e17086e]{color:#333;font-size:13px}.empty-state[data-v-6e17086e]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:48px 20px;text-align:center}.empty-state i[data-v-6e17086e]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-6e17086e]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-6e17086e]{font-size:14px;margin:0}.pagination[data-v-6e17086e]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-6e17086e],.pagination[data-v-6e17086e]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-6e17086e]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-6e17086e]:hover:not(:disabled){background:#f8f9fa;border-color:#667eea}.page-btn[data-v-6e17086e]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-6e17086e]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-6e17086e]{padding:16px}.content-main[data-v-6e17086e]{gap:8px}.content-main[data-v-6e17086e],.content-status[data-v-6e17086e]{align-items:flex-start;flex-direction:column}.content-status[data-v-6e17086e]{gap:6px}.approval-grid[data-v-6e17086e],.details-grid[data-v-6e17086e]{grid-template-columns:1fr}.expanded-details[data-v-6e17086e]{margin-left:0}.timeline-item[data-v-6e17086e]:not(:last-child):before{display:none}.filter-group[data-v-6e17086e]{flex-wrap:wrap}.line-item-header[data-v-6e17086e],.line-items-section h4[data-v-6e17086e]{align-items:flex-start;flex-direction:column;gap:4px}.line-quantities[data-v-6e17086e]{flex-wrap:wrap}}@media (max-width:480px){.invoice-info[data-v-6e17086e]{align-items:flex-start}.content-preview[data-v-6e17086e],.invoice-info[data-v-6e17086e]{flex-direction:column;gap:4px}.filter-input[data-v-6e17086e]{min-width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/view/index.vue?vue&type=template&id=6e17086e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "invoice-audit-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-6e17086e>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-6e17086e>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-6e17086e> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-6e17086e> "), _c('select', {
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
      "value": "sent"
    }
  }, [_vm._v("Sent")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "overdue"
    }
  }, [_vm._v("Overdue")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-6e17086e><i class=\"fas fa-search\" data-v-6e17086e></i></button> <button class=\"btn-clear\" data-v-6e17086e><i class=\"fas fa-times\" data-v-6e17086e></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-6e17086e><i class=\"fas fa-spinner fa-spin\" data-v-6e17086e></i>\n    Loading invoice history...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-6e17086e>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData6$line, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData21, _log$recordData22, _log$recordData22$lin, _log$recordData23, _log$recordData24;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-6e17086e><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-6e17086e><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-6e17086e></i></div> <div class=\"timeline-content\" data-v-6e17086e><div class=\"content-header\" data-v-6e17086e><div class=\"action-info\" data-v-6e17086e><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-6e17086e><div class=\"user-info\" data-v-6e17086e><i class=\"fas fa-user\" data-v-6e17086e></i> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"invoice-info\" data-v-6e17086e><span class=\"invoice-number\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber) || 'N/A')) + "</span> <span class=\"invoice-amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount))) + "</span> <span class=\"invoice-date\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.invoiceDate))) + "</span></div></div> <div class=\"content-status\" data-v-6e17086e><span" + _vm._ssrClass("status-badge", `status-${(_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status}`) + " data-v-6e17086e><i class=\"fas fa-circle\" data-v-6e17086e></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusText((_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.status)) + "\n          ") + "</span> " + ((_log$recordData6 = log.recordData) !== null && _log$recordData6 !== void 0 && (_log$recordData6$line = _log$recordData6.lineItems) !== null && _log$recordData6$line !== void 0 && _log$recordData6$line.length ? "<span class=\"line-items-count\" data-v-6e17086e>" + _vm._ssrEscape("\n            " + _vm._s(log.recordData.lineItems.length) + " line item" + _vm._s(log.recordData.lineItems.length > 1 ? 's' : '') + "\n          ") + "</span>" : "<!---->") + "</div> " + (log.reason ? "<div class=\"content-reason\" data-v-6e17086e><i class=\"fas fa-comment-alt\" data-v-6e17086e></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " " + ((_log$recordData7 = log.recordData) !== null && _log$recordData7 !== void 0 && _log$recordData7.description ? "<div class=\"content-preview\" data-v-6e17086e><span class=\"description\" data-v-6e17086e>" + _vm._ssrEscape("\n            " + _vm._s(_vm.truncateText(log.recordData.description, 50)) + "\n          ") + "</span></div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-6e17086e><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-6e17086e></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-6e17086e><div class=\"details-grid\" data-v-6e17086e><div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.invoiceId || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice Number:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.invoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice Date:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.invoiceDate))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Due Date:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.dueDate))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Total Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.totalAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Tax Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.taxAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Net Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.netAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.status}`) + " data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Client ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.clientId) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Currency ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.currencyId) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Exchange Rate:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : _log$recordData18.exchangeRate) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Created:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : _log$recordData19.createdAt))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Last Updated:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : _log$recordData20.updateTimestamp))) + "</span></div></div> " + ((_log$recordData21 = log.recordData) !== null && _log$recordData21 !== void 0 && _log$recordData21.description ? "<div class=\"description-section\" data-v-6e17086e><h4 data-v-6e17086e>Description</h4> <p data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.description)) + "</p></div>" : "<!---->") + " " + ((_log$recordData22 = log.recordData) !== null && _log$recordData22 !== void 0 && (_log$recordData22$lin = _log$recordData22.lineItems) !== null && _log$recordData22$lin !== void 0 && _log$recordData22$lin.length ? "<div class=\"line-items-section\" data-v-6e17086e><h4 data-v-6e17086e>" + _vm._ssrEscape("\n            Line Items (" + _vm._s(log.recordData.lineItems.length) + ")\n            ") + "<span class=\"total-amount\" data-v-6e17086e>" + _vm._ssrEscape("\n              Total: " + _vm._s(_vm.formatCurrency(_vm.getTotalLineItemsAmount(log.recordData.lineItems))) + "\n            ") + "</span></h4> <div class=\"line-items-list\" data-v-6e17086e>" + _vm._ssrList(log.recordData.lineItems, function (lineItem) {
      return "<div class=\"line-item\" data-v-6e17086e><div class=\"line-item-header\" data-v-6e17086e><span class=\"line-number\" data-v-6e17086e>" + _vm._ssrEscape("Line #" + _vm._s(lineItem.lineNumber)) + "</span> <span class=\"line-total\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(lineItem.lineTotal))) + "</span></div> <div class=\"line-item-details\" data-v-6e17086e><div class=\"line-description\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(lineItem.description || 'No description')) + "</div> <div class=\"line-quantities\" data-v-6e17086e><span class=\"quantity\" data-v-6e17086e>" + _vm._ssrEscape("Qty: " + _vm._s(lineItem.quantity)) + "</span> <span class=\"unit-price\" data-v-6e17086e>" + _vm._ssrEscape("Unit Price: " + _vm._s(_vm.formatCurrency(lineItem.unitPrice))) + "</span> <span class=\"tax-rate\" data-v-6e17086e>" + _vm._ssrEscape("Tax: " + _vm._s(lineItem.taxRate) + "%") + "</span></div></div></div>";
    }) + "</div></div>" : "<!---->") + " " + ((_log$recordData23 = log.recordData) !== null && _log$recordData23 !== void 0 && _log$recordData23.maker || (_log$recordData24 = log.recordData) !== null && _log$recordData24 !== void 0 && _log$recordData24.checker ? "<div class=\"approval-section\" data-v-6e17086e><h4 data-v-6e17086e>Approval Information</h4> <div class=\"approval-grid\" data-v-6e17086e>" + (log.recordData.maker ? "<div class=\"approval-item\" data-v-6e17086e><label data-v-6e17086e>Maker:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.maker.cus_name || log.recordData.maker.name || '-')) + "</span></div>" : "<!---->") + " " + (log.recordData.checker ? "<div class=\"approval-item\" data-v-6e17086e><label data-v-6e17086e>Checker:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.checker.cus_name || log.recordData.checker.name || '-')) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-6e17086e><i class=\"fas fa-history\" data-v-6e17086e></i> <h3 data-v-6e17086e>No invoice audit records found</h3> <p data-v-6e17086e>No changes have been recorded for this invoice yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-6e17086e><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-6e17086e><i class=\"fas fa-chevron-left\" data-v-6e17086e></i></button> <span class=\"page-info\" data-v-6e17086e>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-6e17086e><i class=\"fas fa-chevron-right\" data-v-6e17086e></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue?vue&type=template&id=6e17086e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'InvoiceAuditViewer',
  props: {
    invoiceId: {
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
    invoiceId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      try {
        // API call for invoice audit logs
        const response = await this.$axios.get(`/api/ar-invoices/audit/${this.invoiceId}`);
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
        console.error('Error loading invoice audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load invoice audit logs');
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
      if (!prevLog || !((_prevLog$recordData = prevLog.recordData) !== null && _prevLog$recordData !== void 0 && _prevLog$recordData.totalAmount) || !((_log$recordData = log.recordData) !== null && _log$recordData !== void 0 && _log$recordData.totalAmount)) return false;
      return prevLog.recordData.totalAmount !== log.recordData.totalAmount;
    },
    getAmountChange(log, index) {
      var _log$recordData2, _prevLog$recordData2;
      const prevLog = this.auditLogs[index + 1];
      const current = ((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount) || 0;
      const previous = (prevLog === null || prevLog === void 0 ? void 0 : (_prevLog$recordData2 = prevLog.recordData) === null || _prevLog$recordData2 === void 0 ? void 0 : _prevLog$recordData2.totalAmount) || 0;
      const diff = current - previous;
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    getTotalLineItemsAmount(lineItems) {
      return lineItems.reduce((total, item) => total + (item.lineTotal || 0), 0);
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
        'sent': 'Sent',
        'paid': 'Paid',
        'overdue': 'Overdue',
        'cancelled': 'Cancelled',
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected'
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
// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var audit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(503)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e17086e",
  "a70d6656"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-audit-dialog-overlay[data-v-bc54ccc6]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.invoice-audit-dialog[data-v-bc54ccc6]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.invoice-audit-dialog-header[data-v-bc54ccc6]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-bc54ccc6]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.invoice-subtitle[data-v-bc54ccc6]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-bc54ccc6]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-bc54ccc6]:hover{background:hsla(0,0%,100%,.2)}.invoice-audit-dialog-body[data-v-bc54ccc6]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.invoice-audit-dialog-body[data-v-bc54ccc6]::-webkit-scrollbar{width:8px}.invoice-audit-dialog-body[data-v-bc54ccc6]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.invoice-audit-dialog-body[data-v-bc54ccc6]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.invoice-audit-dialog-body[data-v-bc54ccc6]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.invoice-audit-dialog-footer[data-v-bc54ccc6]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.export-options[data-v-bc54ccc6]{align-items:center;display:flex;gap:0}.main-export-btn[data-v-bc54ccc6]{border-bottom-right-radius:0;border-top-right-radius:0}.export-dropdown[data-v-bc54ccc6]{position:relative}.dropdown-toggle[data-v-bc54ccc6]{border-bottom-left-radius:0;border-left:none;border-top-left-radius:0;padding:10px 8px}.dropdown-menu[data-v-bc54ccc6]{background:#fff;border:1px solid #ddd;border-radius:6px;bottom:100%;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:5px;min-width:160px;position:absolute;right:0;z-index:1000}.dropdown-item[data-v-bc54ccc6]{align-items:center;background:none;border:none;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px 12px;text-align:left;transition:background-color .2s;width:100%}.dropdown-item[data-v-bc54ccc6]:hover{background:#f8f9fa}.btn[data-v-bc54ccc6]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-bc54ccc6]{background:#667eea;color:#fff}.btn-primary[data-v-bc54ccc6]:hover{background:#5a67d8;transform:translateY(-1px)}.btn-outline-primary[data-v-bc54ccc6]{background:#fff;border:1px solid #667eea;color:#667eea}.btn-outline-primary[data-v-bc54ccc6]:hover{background:#667eea;color:#fff;transform:translateY(-1px)}.btn-secondary[data-v-bc54ccc6]{background:#6c757d;color:#fff}.btn-secondary[data-v-bc54ccc6]:hover{background:#5a6268;transform:translateY(-1px)}.btn[data-v-bc54ccc6]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.invoice-audit-dialog[data-v-bc54ccc6]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.invoice-audit-dialog-header[data-v-bc54ccc6]{padding:15px}.header-info h3[data-v-bc54ccc6]{font-size:18px}.invoice-audit-dialog-footer[data-v-bc54ccc6]{flex-direction:column;padding:15px}.btn[data-v-bc54ccc6],.export-options[data-v-bc54ccc6]{width:100%}.btn[data-v-bc54ccc6]{justify-content:center}.main-export-btn[data-v-bc54ccc6]{border-radius:6px;border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-toggle[data-v-bc54ccc6]{border-left:1px solid #667eea;border-radius:6px;border-top-left-radius:0;border-top-right-radius:0}.dropdown-menu[data-v-bc54ccc6]{border:none;box-shadow:none;margin-bottom:0;position:static;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(653);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c7379172", content, true, context)
};

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(655);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("753719de", content, true, context)
};

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/index.vue?vue&type=template&id=bc54ccc6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "invoice-audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"invoice-audit-dialog\" data-v-bc54ccc6>", "</div>", [_vm._ssrNode("<div class=\"invoice-audit-dialog-header\" data-v-bc54ccc6><div class=\"header-info\" data-v-bc54ccc6><h3 data-v-bc54ccc6><i class=\"fas fa-history\" data-v-bc54ccc6></i>\n          ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້\n        </h3> " + (_vm.invoiceInfo ? "<p class=\"invoice-subtitle\" data-v-bc54ccc6>" + _vm._ssrEscape("\n          ໃບແຈ້ງໜີ້: " + _vm._s(_vm.invoiceInfo.invoiceNumber) + " - \n          " + _vm._s(_vm.formatCurrency(_vm.invoiceInfo.totalAmount)) + " - \n          " + _vm._s(_vm.formatDate(_vm.invoiceInfo.invoiceDate)) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-bc54ccc6><i class=\"fas fa-times\" data-v-bc54ccc6></i></button></div> "), _vm._ssrNode("<div class=\"invoice-audit-dialog-body\" data-v-bc54ccc6>", "</div>", [_c('invoice-audit-viewer', {
    ref: "invoiceAuditViewer",
    attrs: {
      "invoice-id": _vm.invoiceId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"invoice-audit-dialog-footer\" data-v-bc54ccc6><button type=\"button\" class=\"btn btn-secondary\" data-v-bc54ccc6><i class=\"fas fa-times\" data-v-bc54ccc6></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-bc54ccc6><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-bc54ccc6>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-bc54ccc6></i>" : "<i class=\"fas fa-download\" data-v-bc54ccc6></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-bc54ccc6><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-bc54ccc6><i class=\"fas fa-caret-down\" data-v-bc54ccc6></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-bc54ccc6><button class=\"dropdown-item\" data-v-bc54ccc6><i class=\"fas fa-code\" data-v-bc54ccc6></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-bc54ccc6><i class=\"fas fa-table\" data-v-bc54ccc6></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-bc54ccc6><i class=\"fas fa-print\" data-v-bc54ccc6></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=template&id=bc54ccc6&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js&
var auditvue_type_script_lang_js_ = __webpack_require__(473);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_auditvue_type_script_lang_js_ = (auditvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(566)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_auditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc54ccc6",
  "807c2816"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbf9c31a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(568);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbf9c31a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbf9c31a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbf9c31a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbf9c31a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-fbf9c31a]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:10px;position:fixed;top:0;width:100%;z-index:1050}.enhanced-dialog[data-v-fbf9c31a]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;height:95vh;max-height:95vh;max-width:98vw;overflow:hidden;width:100%}.modal-header[data-v-fbf9c31a]{background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;min-height:50px;padding:10px 15px}.modal-header[data-v-fbf9c31a],.modal-title[data-v-fbf9c31a]{align-items:center;display:flex}.modal-title[data-v-fbf9c31a]{font-size:16px;font-weight:600;gap:8px;margin:0}.audit-btn[data-v-fbf9c31a]{align-items:center;background:hsla(0,0%,100%,.2);border:1px solid hsla(0,0%,100%,.3);border-radius:4px;color:#fff;cursor:pointer;display:flex;font-size:12px;gap:4px;padding:4px 8px}.audit-btn[data-v-fbf9c31a]:hover{background:hsla(0,0%,100%,.3)}.audit-text[data-v-fbf9c31a]{font-size:11px}.close-button[data-v-fbf9c31a]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;padding:4px;transition:background .2s}.close-button[data-v-fbf9c31a]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-fbf9c31a]{flex:1;overflow:hidden}.loading-state[data-v-fbf9c31a],.modal-body[data-v-fbf9c31a]{display:flex;flex-direction:column}.loading-state[data-v-fbf9c31a]{align-items:center;color:#666;justify-content:center;padding:30px}.spinner[data-v-fbf9c31a]{animation:spin-fbf9c31a 1s linear infinite;border:3px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:30px;margin-bottom:10px;width:30px}@keyframes spin-fbf9c31a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.invoice-form[data-v-fbf9c31a]{display:flex;flex:1;flex-direction:column;overflow:hidden}.tab-navigation[data-v-fbf9c31a]{background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;min-height:45px}.tab-btn[data-v-fbf9c31a]{align-items:center;background:none;border:none;color:#666;cursor:pointer;display:flex;flex:1;font-size:13px;font-weight:500;gap:6px;justify-content:center;padding:8px 15px;position:relative;transition:all .2s}.tab-btn[data-v-fbf9c31a]:hover{background:rgba(102,126,234,.1);color:#667eea}.tab-btn.active[data-v-fbf9c31a]{background:#fff;border-bottom:2px solid #667eea;color:#667eea}.line-count[data-v-fbf9c31a]{background:#667eea;border-radius:10px;color:#fff;font-size:11px;min-width:18px;padding:1px 6px;text-align:center}.tab-content[data-v-fbf9c31a]{flex:1;overflow-y:auto;padding:0}.form-container[data-v-fbf9c31a]{padding:15px}.form-row[data-v-fbf9c31a]{grid-gap:10px;display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:12px}.form-group[data-v-fbf9c31a]{margin-bottom:0}.form-group.full-width[data-v-fbf9c31a]{grid-column:1/-1}.form-group label[data-v-fbf9c31a]{color:#333;display:block;font-size:12px;font-weight:500;margin-bottom:3px}.form-group label.required[data-v-fbf9c31a]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-fbf9c31a]{border:1px solid #ddd;border-radius:4px;font-size:13px;line-height:1.2;padding:6px 8px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-fbf9c31a]:focus{border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-fbf9c31a]{border-color:#e74c3c;box-shadow:0 0 0 2px rgba(231,76,60,.1)}.form-control-xs[data-v-fbf9c31a]{font-size:12px;padding:4px 6px}.textarea-compact[data-v-fbf9c31a]{min-height:50px;resize:vertical}.invalid-feedback[data-v-fbf9c31a]{color:#e74c3c;display:block;font-size:11px;margin-top:3px;width:100%}.amount-summary[data-v-fbf9c31a]{background:#f8f9fa;border-left:3px solid #667eea;border-radius:6px;margin-top:15px;padding:12px}.totals-compact[data-v-fbf9c31a]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}.total-item[data-v-fbf9c31a]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.total-item.grand-total[data-v-fbf9c31a]{border-top:1px solid #667eea;font-size:13px;font-weight:600;grid-column:1/-1;margin-top:4px;padding-top:6px}.total-item .amount[data-v-fbf9c31a]{color:#333;font-weight:600}.line-items-section[data-v-fbf9c31a]{padding:15px}.add-line-header[data-v-fbf9c31a]{margin-bottom:15px}.add-line-actions[data-v-fbf9c31a]{align-items:center;display:flex;flex-wrap:wrap;gap:10px}.btn[data-v-fbf9c31a]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:12px;gap:4px;line-height:1.2;padding:6px 12px;transition:all .2s ease}.btn-compact[data-v-fbf9c31a]{font-size:12px;padding:5px 10px}.btn-primary[data-v-fbf9c31a]{background:#007bff;color:#fff}.btn-secondary[data-v-fbf9c31a]{background:#6c757d;color:#fff}.btn-outline-secondary[data-v-fbf9c31a]{background:#fff;border:1px solid #6c757d;color:#6c757d}.btn-danger[data-v-fbf9c31a]{background:#dc3545;color:#fff}.btn-xs[data-v-fbf9c31a]{align-items:center;border-radius:50%;display:flex;font-size:10px;height:24px;justify-content:center;padding:0;width:24px}.btn[data-v-fbf9c31a]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-fbf9c31a]:disabled{cursor:not-allowed;opacity:.6;transform:none}.line-count-info[data-v-fbf9c31a]{background:#e9ecef;border-radius:12px;color:#666;font-size:11px;font-weight:500;padding:4px 8px}.empty-line-state[data-v-fbf9c31a]{background:#f8f9fa;border:1px dashed #dee2e6;border-radius:6px;padding:30px 15px;text-align:center}.empty-content i[data-v-fbf9c31a]{color:#dee2e6;font-size:36px;margin-bottom:10px}.empty-content h4[data-v-fbf9c31a]{color:#666;font-size:16px;margin-bottom:8px}.line-items-table-container[data-v-fbf9c31a]{border:1px solid #e9ecef;border-radius:6px;margin-bottom:15px;overflow:hidden}.line-items-table .table[data-v-fbf9c31a]{border-collapse:collapse;margin:0;width:100%}.table-compact[data-v-fbf9c31a]{font-size:12px}.line-items-table .table th[data-v-fbf9c31a]{background:#f8f9fa;border-bottom:1px solid #dee2e6;font-size:11px;font-weight:600;padding:6px 4px;text-align:center}.line-items-table .table td[data-v-fbf9c31a]{border-top:1px solid #dee2e6;font-size:11px;padding:4px;vertical-align:middle}.line-number[data-v-fbf9c31a]{color:#666;font-weight:600;text-align:center}.line-total[data-v-fbf9c31a],.tax-amount[data-v-fbf9c31a]{color:#333;font-size:11px;font-weight:600;text-align:right}.line-row[data-v-fbf9c31a]{transition:background-color .2s}.line-row[data-v-fbf9c31a]:hover{background-color:rgba(102,126,234,.05)}.line-totals-summary[data-v-fbf9c31a]{background:#f8f9fa;border-left:3px solid #667eea;border-radius:6px;padding:12px}.modal-footer[data-v-fbf9c31a]{background:#f8f9fa;border-top:1px solid #e9ecef;min-height:50px;padding:10px 15px}.footer-actions[data-v-fbf9c31a]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-fbf9c31a]{border-radius:0;height:100vh;max-height:100vh;padding:0;width:100%}.modal-overlay[data-v-fbf9c31a]{padding:0}.form-row[data-v-fbf9c31a],.totals-compact[data-v-fbf9c31a]{grid-template-columns:1fr}.add-line-actions[data-v-fbf9c31a]{align-items:stretch}.add-line-actions[data-v-fbf9c31a],.footer-actions[data-v-fbf9c31a]{flex-direction:column}.footer-actions .btn[data-v-fbf9c31a]{justify-content:center;width:100%}.line-items-table-container[data-v-fbf9c31a]{overflow-x:auto}.line-items-table .table[data-v-fbf9c31a]{min-width:600px}}@media (max-width:480px){.modal-header[data-v-fbf9c31a]{padding:8px 10px}.modal-title[data-v-fbf9c31a]{font-size:14px}.form-container[data-v-fbf9c31a],.line-items-section[data-v-fbf9c31a]{padding:10px}.modal-footer[data-v-fbf9c31a]{padding:8px 10px}.tab-btn[data-v-fbf9c31a]{font-size:11px;padding:6px 8px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(569);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7741ef_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 655:
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

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(993);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2d54e34c", content, true, context)
};

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=fbf9c31a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-fbf9c31a><h4 class=\"modal-title\" data-v-fbf9c31a><i class=\"fas fa-file-invoice\" data-v-fbf9c31a></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່') + "\n      ") + "</h4> " + (_vm.isEdit ? "<button type=\"button\" title=\"ເບິ່ງປະຫວັດການດຳເນີນງານ\" class=\"audit-btn\" data-v-fbf9c31a><i class=\"fas fa-history\" data-v-fbf9c31a></i> <span class=\"audit-text\" data-v-fbf9c31a>ປະຫວັດ</span></button>" : "<!---->") + " <button type=\"button\" class=\"close-button\" data-v-fbf9c31a><i class=\"fas fa-times\" data-v-fbf9c31a></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-fbf9c31a>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-fbf9c31a></div> <p data-v-fbf9c31a>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"invoice-form\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<div class=\"tab-navigation\" data-v-fbf9c31a><button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'header'
  }]) + " data-v-fbf9c31a><i class=\"fas fa-file-alt\" data-v-fbf9c31a></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </button> <button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'lines'
  }]) + " data-v-fbf9c31a><i class=\"fas fa-list\" data-v-fbf9c31a></i>\n            ລາຍການສິນຄ້າ\n            " + (_vm.lineItems.length > 0 ? "<span class=\"line-count\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length)) + "</span>" : "<!---->") + "</button></div> "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'header' ? '' : 'none'
  }) + " data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<form data-v-fbf9c31a>", "</form>", [_vm._ssrNode("<div class=\"form-container\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<div class=\"form-row\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-fbf9c31a><label for=\"invoiceNumber\" class=\"required\" data-v-fbf9c31a>ເລກທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceNumber\" type=\"text\" placeholder=\"INV-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.invoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceNumber
  }) + " data-v-fbf9c31a> " + (_vm.errors.invoiceNumber ? "<div class=\"invalid-feedback\" data-v-fbf9c31a>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceNumber) + "\n                  ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<label for=\"clientId\" class=\"required\" data-v-fbf9c31a>ລູກຄ້າ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.clientId,
      expression: "form.clientId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.clientId
    },
    attrs: {
      "id": "clientId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "clientId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCustomerChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກລູກຄ້າ")]), _vm._v(" "), _vm._l(_vm.customers, function (customer) {
    return _c('option', {
      key: customer.id,
      domProps: {
        "value": customer.id
      }
    }, [_vm._v("\n                      " + _vm._s(customer.name) + " (" + _vm._s(customer.code || customer.email) + ")\n                    ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.clientId ? "<div class=\"invalid-feedback\" data-v-fbf9c31a>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.clientId) + "\n                  ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<label for=\"status\" data-v-fbf9c31a>ສະຖານະ</label> "), _c('select', {
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
  }, [_vm._v("ຍົກເລີກ")])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-fbf9c31a><label for=\"invoiceDate\" class=\"required\" data-v-fbf9c31a>ວັນທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.invoiceDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceDate
  }) + " data-v-fbf9c31a> " + (_vm.errors.invoiceDate ? "<div class=\"invalid-feedback\" data-v-fbf9c31a>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceDate) + "\n                  ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-fbf9c31a><label for=\"dueDate\" data-v-fbf9c31a>ວັນທີຄົບກຳນົດ</label> <input id=\"dueDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.dueDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dueDate
  }) + " data-v-fbf9c31a> " + (_vm.errors.dueDate ? "<div class=\"invalid-feedback\" data-v-fbf9c31a>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.dueDate) + "\n                  ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-fbf9c31a>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" data-v-fbf9c31a>ສະກຸນເງິນ</label> "), _c('select', {
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
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-fbf9c31a><label for=\"exchangeRate\" data-v-fbf9c31a>ອັດຕາແລກປ່ຽນ</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + " class=\"form-control\" data-v-fbf9c31a></div>")], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-fbf9c31a><div class=\"form-group full-width\" data-v-fbf9c31a><label for=\"description\" data-v-fbf9c31a>ລາຍລະອຽດ</label> <textarea id=\"description\" rows=\"2\" placeholder=\"ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້...\" class=\"form-control textarea-compact\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div></div> " + (_vm.isEdit ? "<div class=\"form-row\" data-v-fbf9c31a><div class=\"form-group full-width\" data-v-fbf9c31a><label for=\"reason\" class=\"required\" data-v-fbf9c31a>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-fbf9c31a> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-fbf9c31a>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.reason) + "\n                  ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"amount-summary\" data-v-fbf9c31a><div class=\"totals-compact\" data-v-fbf9c31a><div class=\"total-item\" data-v-fbf9c31a><span data-v-fbf9c31a>ລວມຍ່ອຍ:</span> <span class=\"amount\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-fbf9c31a><span data-v-fbf9c31a>ພາສີລວມ:</span> <span class=\"amount\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-fbf9c31a><span data-v-fbf9c31a>ຍອດສຸດທິ:</span> <span class=\"amount\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-fbf9c31a><span data-v-fbf9c31a>ລວມທັງໝົດ:</span> <span class=\"amount\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div>")], 2)])]), _vm._ssrNode(" <div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'lines' ? '' : 'none'
  }) + " data-v-fbf9c31a><div class=\"line-items-section\" data-v-fbf9c31a><div class=\"add-line-header\" data-v-fbf9c31a><div class=\"add-line-actions\" data-v-fbf9c31a><button type=\"button\" class=\"btn btn-primary btn-compact\" data-v-fbf9c31a><i class=\"fas fa-plus\" data-v-fbf9c31a></i>\n                  ເພີ່ມລາຍການ\n                </button> <button type=\"button\" class=\"btn btn-outline-secondary btn-compact\" data-v-fbf9c31a>\n                  ເພີ່ມ 5 ລາຍການ\n                </button> <span class=\"line-count-info\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length) + " ລາຍການ") + "</span></div></div> " + (_vm.lineItems.length === 0 ? "<div class=\"empty-line-state\" data-v-fbf9c31a><div class=\"empty-content\" data-v-fbf9c31a><i class=\"fas fa-shopping-cart\" data-v-fbf9c31a></i> <h4 data-v-fbf9c31a>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4> <button type=\"button\" class=\"btn btn-primary\" data-v-fbf9c31a><i class=\"fas fa-plus\" data-v-fbf9c31a></i>\n                  ເພີ່ມລາຍການທຳອິດ\n                </button></div></div>" : "<div class=\"line-items-table-container\" data-v-fbf9c31a><div class=\"line-items-table\" data-v-fbf9c31a><table class=\"table table-compact\" data-v-fbf9c31a><thead data-v-fbf9c31a><tr data-v-fbf9c31a><th style=\"width: 30px\" data-v-fbf9c31a>#</th> <th style=\"width: 250px\" data-v-fbf9c31a>ລາຍລະອຽດ *</th> <th style=\"width: 70px\" data-v-fbf9c31a>ຈຳນວນ *</th> <th style=\"width: 80px\" data-v-fbf9c31a>ລາຄາຕໍ່ຫົວ *</th> <th style=\"width: 60px\" data-v-fbf9c31a>ພາສີ %</th> <th style=\"width: 80px\" data-v-fbf9c31a>ຍອດພາສີ</th> <th style=\"width: 90px\" data-v-fbf9c31a>ລວມຕໍ່ແຖວ</th> <th style=\"width: 40px\" data-v-fbf9c31a>ລຶບ</th></tr></thead> <tbody data-v-fbf9c31a>" + _vm._ssrList(_vm.lineItems, function (line, index) {
    return "<tr class=\"line-row\" data-v-fbf9c31a><td class=\"line-number\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-fbf9c31a><input type=\"text\" placeholder=\"ລາຍລະອຽດສິນຄ້າ...\"" + _vm._ssrAttr("value", line.description) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_description`]
    }) + " data-v-fbf9c31a></td> <td data-v-fbf9c31a><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.quantity) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_quantity`]
    }) + " data-v-fbf9c31a></td> <td data-v-fbf9c31a><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.unitPrice) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_unitPrice`]
    }) + " data-v-fbf9c31a></td> <td data-v-fbf9c31a><input type=\"number\" step=\"0.01\" min=\"0\" max=\"100\"" + _vm._ssrAttr("value", line.taxRate) + " class=\"form-control form-control-xs\" data-v-fbf9c31a></td> <td class=\"tax-amount\" data-v-fbf9c31a>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.taxAmount || 0)) + "\n                      ") + "</td> <td class=\"line-total\" data-v-fbf9c31a>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.lineTotal || 0)) + "\n                      ") + "</td> <td data-v-fbf9c31a><button type=\"button\" title=\"ລຶບລາຍການ\" class=\"btn btn-xs btn-danger\" data-v-fbf9c31a><i class=\"fas fa-trash\" data-v-fbf9c31a></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"line-totals-summary\" data-v-fbf9c31a><div class=\"totals-compact\" data-v-fbf9c31a><div class=\"total-item\" data-v-fbf9c31a><span data-v-fbf9c31a>ລວມຍ່ອຍ:</span> <span class=\"amount\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-fbf9c31a><span data-v-fbf9c31a>ພາສີລວມ:</span> <span class=\"amount\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-fbf9c31a><span data-v-fbf9c31a>ຍອດສຸດທິ:</span> <span class=\"amount\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-fbf9c31a><span data-v-fbf9c31a>ລວມທັງໝົດ:</span> <span class=\"amount\" data-v-fbf9c31a>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div></div>") + "</div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-fbf9c31a><div class=\"footer-actions\" data-v-fbf9c31a><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary btn-compact\" data-v-fbf9c31a><i class=\"fas fa-times\" data-v-fbf9c31a></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary btn-compact\" data-v-fbf9c31a>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-fbf9c31a></i>" : "<i class=\"fas fa-save\" data-v-fbf9c31a></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div></div>")], 2), _vm._ssrNode(" "), _c('invoice-audit-dialog', {
    attrs: {
      "visible": _vm.showAuditDialog,
      "invoice-id": _vm.form.id,
      "invoice-info": _vm.invoiceInfoForAudit
    },
    on: {
      "close": _vm.closeAuditDialog
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=fbf9c31a&scoped=true&

// EXTERNAL MODULE: ./components/accounting/ar/invoice/audit/index.vue + 3 modules
var audit = __webpack_require__(590);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js&

/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'InvoiceHeaderMaintain',
  components: {
    InvoiceAuditDialog: audit["default"]
  },
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
      showAuditDialog: false,
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
        clientId: '',
        currencyId: '',
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
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
    user() {
      return this.$auth.user || '';
    },
    invoiceInfoForAudit() {
      if (!this.form.id) return null;
      return {
        invoiceNumber: this.form.invoiceNumber,
        totalAmount: this.calculatedTotal,
        invoiceDate: this.form.invoiceDate,
        status: this.form.status,
        clientId: this.form.clientId,
        currencyId: this.form.currencyId,
        description: this.form.description
      };
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
      const hasValidHeader = this.form.invoiceNumber && this.form.invoiceDate && this.form.clientId && (!this.isEdit || this.form.reason);
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
    openAuditDialog() {
      console.warn(`Opening dialog`);
      this.showAuditDialog = true;
    },
    closeAuditDialog() {
      this.showAuditDialog = false;
    },
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          invoiceDate: this.invoice.invoiceDate ? this.invoice.invoiceDate.split('T')[0] : '',
          dueDate: this.invoice.dueDate ? this.invoice.dueDate.split('T')[0] : '',
          clientId: this.invoice.clientId,
          currencyId: this.invoice.currencyId,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          totalAmount: this.invoice.totalAmount || 0.0,
          taxAmount: this.invoice.taxAmount || 0.0,
          netAmount: this.invoice.netAmount || 0.0,
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
      if (this.form.clientId && this.customers.length > 0) {
        this.selectedCustomer = this.customers.find(c => c.id === this.form.clientId);
      } else {
        this.selectedCustomer = null;
      }
    },
    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
        // Update the exchange rate based on
        console.info(`Currency structure ${JSON.stringify(this.currencies)}`);
        this.form.exchangeRate = this.currencies.find(c => c.id === this.form.currencyId).rate;
      } else {
        this.selectedCurrency = null;
      }
    },
    onCustomerChange() {
      this.updateSelectedCustomer();
      this.calculateDueDate();
      this.clearFieldError('clientId');
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
      if (!this.form.clientId) {
        this.errors.clientId = 'ກະລຸນາເລືອກລູກຄ້າ';
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
        updateUserId: this.user.id,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
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
        clientId: '',
        currencyId: '',
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
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
  
  var style0 = __webpack_require__(652)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fbf9c31a",
  "6adf3fc7"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 827:
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
  
  var style0 = __webpack_require__(654)
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

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6401f216_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(765);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6401f216_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6401f216_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6401f216_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6401f216_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-header-summary-container[data-v-6401f216]{background-color:#f5f5f5;min-height:100vh;padding:20px}.page-header[data-v-6401f216]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.header-content[data-v-6401f216]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-6401f216]{color:#333;font-size:28px;font-weight:600;margin:0}.header-actions[data-v-6401f216]{display:flex;gap:12px}.filter-section[data-v-6401f216]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:20px}.filter-row[data-v-6401f216]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:20px}.filter-group[data-v-6401f216]{display:flex;flex-direction:column;gap:8px;min-width:150px}.filter-group label[data-v-6401f216]{color:#555;font-size:14px;font-weight:500}.filter-actions[data-v-6401f216]{align-self:flex-end;display:flex;gap:8px}.summary-cards[data-v-6401f216]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:20px}.summary-card[data-v-6401f216]{align-items:flex-start;background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);display:flex;padding:24px;transition:all .3s ease}.summary-card[data-v-6401f216]:hover{box-shadow:0 8px 16px rgba(0,0,0,.15);transform:translateY(-4px)}.summary-card.total-invoices[data-v-6401f216]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.summary-card.total-invoices .card-icon[data-v-6401f216]{background:hsla(0,0%,100%,.2);color:#fff}.summary-card.status-draft[data-v-6401f216]{border-left:4px solid #6c757d}.summary-card.status-sent[data-v-6401f216]{border-left:4px solid #17a2b8}.summary-card.status-paid[data-v-6401f216]{border-left:4px solid #28a745}.summary-card.status-overdue[data-v-6401f216]{border-left:4px solid #dc3545}.summary-card.amount-stats[data-v-6401f216]{border-left:4px solid #ffc107}.card-icon[data-v-6401f216]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.card-icon.total[data-v-6401f216]{background:hsla(0,0%,100%,.2);color:#fff}.card-icon.draft[data-v-6401f216]{background:#f8f9fa;color:#6c757d}.card-icon.sent[data-v-6401f216]{background:#d1ecf1;color:#17a2b8}.card-icon.paid[data-v-6401f216]{background:#d4edda;color:#28a745}.card-icon.overdue[data-v-6401f216]{background:#f8d7da;color:#dc3545}.card-icon.amount[data-v-6401f216]{background:#fff3cd;color:#ffc107}.card-content[data-v-6401f216]{flex:1;min-width:0}.card-content h3[data-v-6401f216]{font-size:24px;font-weight:700;margin:0 0 8px;word-break:break-word}.card-content p[data-v-6401f216]{font-size:14px;margin:0}.amount-info[data-v-6401f216]{display:block;font-size:12px;margin-top:4px;opacity:.8}.table-section[data-v-6401f216]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-6401f216]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title h3[data-v-6401f216]{color:#333;margin:0}.record-count[data-v-6401f216]{color:#666;font-size:14px;margin-left:8px}.per-page-selector[data-v-6401f216]{align-items:center;display:flex;font-size:14px;gap:8px}.table-container[data-v-6401f216]{overflow-x:auto}.data-table[data-v-6401f216]{border-collapse:collapse;width:100%}.data-table td[data-v-6401f216],.data-table th[data-v-6401f216]{border-bottom:1px solid #e9ecef;padding:12px 16px;text-align:left}.data-table th[data-v-6401f216]{background-color:#f8f9fa;color:#495057;font-weight:600}.data-table th.sortable[data-v-6401f216]{cursor:pointer;transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.data-table th.sortable[data-v-6401f216]:hover{background-color:#e9ecef}.data-table th i[data-v-6401f216]{margin-left:8px;opacity:.5}.invoice-number strong[data-v-6401f216]{color:#333;display:block;font-size:14px;margin-bottom:4px}.invoice-description[data-v-6401f216]{color:#666;font-size:12px}.customer-info .customer-name[data-v-6401f216]{align-items:center;color:#495057;display:flex;font-weight:600;gap:4px;margin-bottom:2px}.customer-info .customer-email[data-v-6401f216]{color:#666;font-size:12px;margin-left:16px}.amount-details .total-amount[data-v-6401f216]{color:#495057;font-weight:600;margin-bottom:2px}.amount-breakdown[data-v-6401f216]{color:#666;font-size:11px}.amount-breakdown small[data-v-6401f216]{display:block}.overdue-date[data-v-6401f216]{color:#dc3545;font-weight:600}.due-soon[data-v-6401f216]{color:#ffc107;font-weight:500}.status-badge[data-v-6401f216]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.draft[data-v-6401f216]{background-color:#f8f9fa;color:#6c757d}.status-badge.sent[data-v-6401f216]{background-color:#d1ecf1;color:#0c5460}.status-badge.paid[data-v-6401f216]{background-color:#d4edda;color:#155724}.status-badge.overdue[data-v-6401f216]{background-color:#f8d7da;color:#721c24}.status-badge.cancelled[data-v-6401f216]{background-color:#e2e3e5;color:#383d41}.maker-info[data-v-6401f216]{color:#495057;font-size:14px}.maker-info small[data-v-6401f216]{color:#666;display:block;font-size:12px;margin-top:2px}.actions-cell[data-v-6401f216]{display:flex;flex-wrap:wrap;gap:4px}.pagination-container[data-v-6401f216]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-6401f216]{color:#666;font-size:14px}.pagination-controls[data-v-6401f216]{align-items:center;display:flex;gap:8px}.pagination-ellipsis[data-v-6401f216]{color:#666;padding:6px 12px}.btn[data-v-6401f216]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-6401f216]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-6401f216]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-6401f216]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-6401f216]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-6401f216]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}.btn-outline-primary[data-v-6401f216]{background-color:transparent;border-color:#007bff;color:#007bff}.btn-outline-primary[data-v-6401f216]:hover{background-color:#007bff;color:#fff}.btn-outline-secondary[data-v-6401f216]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-6401f216]:hover{background-color:#6c757d;color:#fff}.btn-outline-info[data-v-6401f216]{background-color:transparent;border-color:#17a2b8;color:#17a2b8}.btn-outline-info[data-v-6401f216]:hover{background-color:#17a2b8;color:#fff}.btn-outline-success[data-v-6401f216]{background-color:transparent;border-color:#28a745;color:#28a745}.btn-outline-success[data-v-6401f216]:hover{background-color:#28a745;color:#fff}.btn-outline-warning[data-v-6401f216]{background-color:transparent;border-color:#ffc107;color:#ffc107}.btn-outline-warning[data-v-6401f216]:hover{background-color:#ffc107;color:#212529}.btn-outline-danger[data-v-6401f216]{background-color:transparent;border-color:#dc3545;color:#dc3545}.btn-outline-danger[data-v-6401f216]:hover{background-color:#dc3545;color:#fff}.btn-sm[data-v-6401f216]{font-size:12px;padding:4px 8px}.form-control[data-v-6401f216]{border:1px solid #ced4da;border-radius:4px;font-size:14px;padding:8px 12px;transition:border-color .2s}.form-control[data-v-6401f216]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.loading-overlay[data-v-6401f216]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.loading-spinner[data-v-6401f216]{background:#fff;border-radius:8px;padding:40px;text-align:center}.loading-spinner i[data-v-6401f216]{color:#007bff;font-size:32px;margin-bottom:16px}@media (max-width:768px){.invoice-header-summary-container[data-v-6401f216]{padding:10px}.header-content[data-v-6401f216]{align-items:flex-start}.filter-row[data-v-6401f216],.header-content[data-v-6401f216]{flex-direction:column;gap:16px}.filter-group[data-v-6401f216]{min-width:auto;width:100%}.filter-actions[data-v-6401f216]{flex-direction:row;width:100%}.summary-cards[data-v-6401f216]{gap:16px;grid-template-columns:1fr}.summary-card[data-v-6401f216]{padding:20px}.card-icon[data-v-6401f216]{height:50px;margin-right:16px;width:50px}.card-content h3[data-v-6401f216],.card-icon[data-v-6401f216]{font-size:20px}.pagination-container[data-v-6401f216],.table-header[data-v-6401f216]{align-items:flex-start;flex-direction:column;gap:16px}.pagination-controls[data-v-6401f216]{flex-wrap:wrap}.actions-cell[data-v-6401f216]{flex-direction:column;gap:4px}}@media (max-width:576px){.summary-card[data-v-6401f216]{flex-direction:column;text-align:center}.card-icon[data-v-6401f216]{margin:0 auto 16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map