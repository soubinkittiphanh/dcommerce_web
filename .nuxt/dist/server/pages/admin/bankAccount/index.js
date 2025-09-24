exports.ids = [156,22];
exports.modules = {

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/bankAccount/index.vue?vue&type=template&id=b9c5925e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bank-account-page"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-b9c5925e><div class=\"header-content\" data-v-b9c5925e><h1 class=\"page-title\" data-v-b9c5925e><i class=\"fas fa-university\" data-v-b9c5925e></i>\n        ຈັດການບັນຊີທະນາຄານ\n      </h1> <p class=\"page-subtitle\" data-v-b9c5925e>ຈັດການຂໍ້ມູນບັນຊີທະນາຄານທັງໝົດ</p></div> <div class=\"header-actions\" data-v-b9c5925e><button" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-primary\" data-v-b9c5925e><i class=\"fas fa-plus\" data-v-b9c5925e></i>\n        ເພີ່ມບັນຊີໃໝ່\n      </button></div></div> "), _vm._ssrNode("<div class=\"filters-section\" data-v-b9c5925e>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-b9c5925e>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-b9c5925e><label class=\"filter-label\" data-v-b9c5925e>ຄົ້ນຫາ</label> <div class=\"search-input-wrapper\" data-v-b9c5925e><i class=\"fas fa-search search-icon\" data-v-b9c5925e></i> <input type=\"text\" placeholder=\"ຄົ້ນຫາເລກບັນຊີ, ຊື່ບັນຊີ, ທະນາຄານ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"search-input\" data-v-b9c5925e></div></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-b9c5925e>", "</div>", [_vm._ssrNode("<label class=\"filter-label\" data-v-b9c5925e>ສະກຸນເງິນ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.currency,
      expression: "filters.currency"
    }],
    staticClass: "filter-select",
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
  }, [_vm._v("LAK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "USD"
    }
  }, [_vm._v("USD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "THB"
    }
  }, [_vm._v("THB")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CNY"
    }
  }, [_vm._v("CNY")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-b9c5925e>", "</div>", [_vm._ssrNode("<label class=\"filter-label\" data-v-b9c5925e>ປະເພດບັນຊີ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.accountType,
      expression: "filters.accountType"
    }],
    staticClass: "filter-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "accountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Saving"
    }
  }, [_vm._v("Saving")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Current"
    }
  }, [_vm._v("Current")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Fixed Deposit"
    }
  }, [_vm._v("Fixed Deposit")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-b9c5925e>", "</div>", [_vm._ssrNode("<label class=\"filter-label\" data-v-b9c5925e>ສະຖານະ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.isActive,
      expression: "filters.isActive"
    }],
    staticClass: "filter-select",
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
  }, [_vm._v("ໃຊ້ງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "false"
    }
  }, [_vm._v("ປິດໃຊ້ງານ")])])], 2), _vm._ssrNode(" <div class=\"filter-actions\" data-v-b9c5925e><button class=\"btn btn-outline-secondary\" data-v-b9c5925e><i class=\"fas fa-refresh\" data-v-b9c5925e></i>\n          ລ້າງ\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"stats-section\" data-v-b9c5925e><div class=\"stat-card\" data-v-b9c5925e><div class=\"stat-icon stat-icon-primary\" data-v-b9c5925e><i class=\"fas fa-university\" data-v-b9c5925e></i></div> <div class=\"stat-content\" data-v-b9c5925e><h3 class=\"stat-number\" data-v-b9c5925e>" + _vm._ssrEscape(_vm._s(_vm.statistics.total)) + "</h3> <p class=\"stat-label\" data-v-b9c5925e>ທັງໝົດ</p></div></div> <div class=\"stat-card\" data-v-b9c5925e><div class=\"stat-icon stat-icon-success\" data-v-b9c5925e><i class=\"fas fa-check-circle\" data-v-b9c5925e></i></div> <div class=\"stat-content\" data-v-b9c5925e><h3 class=\"stat-number\" data-v-b9c5925e>" + _vm._ssrEscape(_vm._s(_vm.statistics.active)) + "</h3> <p class=\"stat-label\" data-v-b9c5925e>ໃຊ້ງານ</p></div></div> <div class=\"stat-card\" data-v-b9c5925e><div class=\"stat-icon stat-icon-warning\" data-v-b9c5925e><i class=\"fas fa-pause-circle\" data-v-b9c5925e></i></div> <div class=\"stat-content\" data-v-b9c5925e><h3 class=\"stat-number\" data-v-b9c5925e>" + _vm._ssrEscape(_vm._s(_vm.statistics.inactive)) + "</h3> <p class=\"stat-label\" data-v-b9c5925e>ປິດໃຊ້ງານ</p></div></div> <div class=\"stat-card\" data-v-b9c5925e><div class=\"stat-icon stat-icon-info\" data-v-b9c5925e><i class=\"fas fa-dollar-sign\" data-v-b9c5925e></i></div> <div class=\"stat-content\" data-v-b9c5925e><h3 class=\"stat-number\" data-v-b9c5925e>" + _vm._ssrEscape(_vm._s(_vm.statistics.currencies)) + "</h3> <p class=\"stat-label\" data-v-b9c5925e>ສະກຸນເງິນ</p></div></div></div> <div class=\"table-section\" data-v-b9c5925e><div class=\"table-header\" data-v-b9c5925e><h3 class=\"table-title\" data-v-b9c5925e>ລາຍການບັນຊີທະນາຄານ</h3> <div class=\"table-info\" data-v-b9c5925e>" + _vm._ssrEscape("\n        ທັງໝົດ " + _vm._s(_vm.filteredAccounts.length) + " ລາຍການ\n      ") + "</div></div> <div class=\"table-wrapper\" data-v-b9c5925e>" + (_vm.loading ? "<div class=\"loading-state\" data-v-b9c5925e><i class=\"fas fa-spinner fa-spin\" data-v-b9c5925e></i> <p data-v-b9c5925e>ກຳລັງໂຫຼດຂໍ້ມູນ...</p></div>" : _vm.filteredAccounts.length === 0 ? "<div class=\"empty-state\" data-v-b9c5925e><i class=\"fas fa-university\" data-v-b9c5925e></i> <h3 data-v-b9c5925e>ບໍ່ມີຂໍ້ມູນບັນຊີທະນາຄານ</h3> <p data-v-b9c5925e>ກົດປຸ່ມ &quot;ເພີ່ມບັນຊີໃໝ່&quot; ເພື່ອເພີ່ມບັນຊີທະນາຄານ</p></div>" : "<table class=\"data-table\" data-v-b9c5925e><thead data-v-b9c5925e><tr data-v-b9c5925e><th data-v-b9c5925e>ເລກບັນຊີ</th> <th data-v-b9c5925e>ຊື່ບັນຊີ</th> <th data-v-b9c5925e>ທະນາຄານ</th> <th data-v-b9c5925e>ສາຂາ</th> <th data-v-b9c5925e>ປະເພດ</th> <th data-v-b9c5925e>ສະກຸນເງິນ</th> <th data-v-b9c5925e>ສະຖານະ</th> <th data-v-b9c5925e>ວັນທີສ້າງ</th> <th data-v-b9c5925e>ຈັດການ</th></tr></thead> <tbody data-v-b9c5925e>" + _vm._ssrList(_vm.paginatedAccounts, function (account) {
    return "<tr data-v-b9c5925e><td data-v-b9c5925e><div class=\"account-number\" data-v-b9c5925e><i class=\"fas fa-credit-card\" data-v-b9c5925e></i>" + _vm._ssrEscape("\n                " + _vm._s(account.accountNumber) + "\n              ") + "</div></td> <td data-v-b9c5925e><div class=\"account-name\" data-v-b9c5925e>" + _vm._ssrEscape("\n                " + _vm._s(account.accountName) + "\n              ") + "</div></td> <td data-v-b9c5925e><div class=\"bank-info\" data-v-b9c5925e><i class=\"fas fa-university\" data-v-b9c5925e></i>" + _vm._ssrEscape("\n                " + _vm._s(account.bankName) + "\n              ") + "</div></td> <td data-v-b9c5925e>" + _vm._ssrEscape(_vm._s(account.bankBranch || '-')) + "</td> <td data-v-b9c5925e><span" + _vm._ssrClass("account-type-badge", _vm.getAccountTypeClass(account.accountType)) + " data-v-b9c5925e>" + _vm._ssrEscape("\n                " + _vm._s(account.accountType) + "\n              ") + "</span></td> <td data-v-b9c5925e><span" + _vm._ssrClass("currency-badge", _vm.getCurrencyClass(account.currency)) + " data-v-b9c5925e>" + _vm._ssrEscape("\n                " + _vm._s(account.currency) + "\n              ") + "</span></td> <td data-v-b9c5925e><span" + _vm._ssrClass("status-badge", account.isActive ? 'status-active' : 'status-inactive') + " data-v-b9c5925e><i" + _vm._ssrClass(null, account.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-b9c5925e></i>" + _vm._ssrEscape("\n                " + _vm._s(account.isActive ? 'ໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n              ") + "</span></td> <td data-v-b9c5925e>" + _vm._ssrEscape(_vm._s(_vm.formatDate(account.createdAt))) + "</td> <td data-v-b9c5925e><div class=\"action-buttons\" data-v-b9c5925e><button" + _vm._ssrAttr("disabled", _vm.loading) + " title=\"ແກ້ໄຂ\" class=\"btn-icon btn-icon-primary\" data-v-b9c5925e><i class=\"fas fa-edit\" data-v-b9c5925e></i></button></div></td></tr>";
  }) + "</tbody></table>") + "</div> " + (_vm.totalPages > 1 ? "<div class=\"pagination-section\" data-v-b9c5925e><div class=\"pagination-info\" data-v-b9c5925e>" + _vm._ssrEscape("\n        ສະແດງ " + _vm._s((_vm.currentPage - 1) * _vm.pageSize + 1) + " - " + _vm._s(Math.min(_vm.currentPage * _vm.pageSize, _vm.filteredAccounts.length)) + " \n        ຈາກ " + _vm._s(_vm.filteredAccounts.length) + " ລາຍການ\n      ") + "</div> <div class=\"pagination-controls\" data-v-b9c5925e><button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"btn btn-outline-secondary\" data-v-b9c5925e><i class=\"fas fa-angle-double-left\" data-v-b9c5925e></i></button> <button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"btn btn-outline-secondary\" data-v-b9c5925e><i class=\"fas fa-angle-left\" data-v-b9c5925e></i></button> <span class=\"page-info\" data-v-b9c5925e>" + _vm._ssrEscape("\n          ໜ້າ " + _vm._s(_vm.currentPage) + " ຈາກ " + _vm._s(_vm.totalPages) + "\n        ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"btn btn-outline-secondary\" data-v-b9c5925e><i class=\"fas fa-angle-right\" data-v-b9c5925e></i></button> <button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"btn btn-outline-secondary\" data-v-b9c5925e><i class=\"fas fa-angle-double-right\" data-v-b9c5925e></i></button></div></div>" : "<!---->") + "</div> "), _c('BankAccountDialog', {
    attrs: {
      "show": _vm.showDialog,
      "account": _vm.selectedAccount
    },
    on: {
      "close": _vm.closeDialog,
      "saved": _vm.onAccountSaved
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/bankAccount/index.vue?vue&type=template&id=b9c5925e&scoped=true&

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

// EXTERNAL MODULE: ./components/bank/bankAccount/index.vue + 4 modules
var bankAccount = __webpack_require__(853);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/bankAccount/index.vue?vue&type=script&lang=js&

















/* harmony default export */ var bankAccountvue_type_script_lang_js_ = ({
  name: 'BankAccountPage',
  components: {
    BankAccountDialog: bankAccount["default"]
  },
  middleware: 'auths',
  data() {
    return {
      loading: false,
      showDialog: false,
      selectedAccount: null,
      accounts: [],
      filteredAccounts: [],
      // Pagination
      currentPage: 1,
      pageSize: 10,
      // Filters
      filters: {
        search: '',
        currency: '',
        accountType: '',
        isActive: ''
      },
      // Statistics
      statistics: {
        total: 0,
        active: 0,
        inactive: 0,
        currencies: 0
      }
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredAccounts.length / this.pageSize);
    },
    paginatedAccounts() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredAccounts.slice(start, end);
    }
  },
  async mounted() {
    await this.fetchAccounts();
  },
  methods: {
    async fetchAccounts() {
      try {
        this.loading = true;
        const response = await this.$axios.get('/api/bank_account/findAll');
        if (response.data) {
          this.accounts = response.data || [];
        } else {
          this.accounts = [];
        }
        this.applyFilters();
        this.calculateStatistics();
      } catch (error) {
        console.error('Error fetching bank accounts:', error);
        this.showToast('ມີຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ', 'error');
        this.accounts = [];
      } finally {
        this.loading = false;
      }
    },
    applyFilters() {
      let filtered = [...this.accounts];

      // Search filter
      if (this.filters.search) {
        const searchLower = this.filters.search.toLowerCase();
        filtered = filtered.filter(account => account.accountNumber.toLowerCase().includes(searchLower) || account.accountName.toLowerCase().includes(searchLower) || account.bankName.toLowerCase().includes(searchLower) || account.bankBranch && account.bankBranch.toLowerCase().includes(searchLower));
      }

      // Currency filter
      if (this.filters.currency) {
        filtered = filtered.filter(account => account.currency === this.filters.currency);
      }

      // Account type filter
      if (this.filters.accountType) {
        filtered = filtered.filter(account => account.accountType === this.filters.accountType);
      }

      // Status filter
      if (this.filters.isActive !== '') {
        const isActive = this.filters.isActive === 'true';
        filtered = filtered.filter(account => account.isActive === isActive);
      }
      this.filteredAccounts = filtered;
      this.currentPage = 1; // Reset to first page
    },

    resetFilters() {
      this.filters = {
        search: '',
        currency: '',
        accountType: '',
        isActive: ''
      };
      this.applyFilters();
    },
    calculateStatistics() {
      this.statistics.total = this.accounts.length;
      this.statistics.active = this.accounts.filter(account => account.isActive).length;
      this.statistics.inactive = this.accounts.filter(account => !account.isActive).length;
      const uniqueCurrencies = [...new Set(this.accounts.map(account => account.currency))];
      this.statistics.currencies = uniqueCurrencies.length;
    },
    openCreateDialog() {
      this.selectedAccount = null;
      this.showDialog = true;
    },
    openEditDialog(account) {
      this.selectedAccount = account;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.selectedAccount = null;
    },
    async onAccountSaved(response) {
      try {
        if (response && response.success !== false) {
          this.showToast('ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ', 'success');
          await this.fetchAccounts();
        } else {
          const errorMessage = (response === null || response === void 0 ? void 0 : response.message) || 'ການບັນທຶກບໍ່ສຳເລັດ';
          this.showToast(errorMessage, 'error');
        }
      } catch (error) {
        console.error('Error in onAccountSaved:', error);
        this.showToast('ມີຂໍ້ຜິດພາດຢ່າງບໍ່ຄາດຄິດ', 'error');
      }
    },
    async toggleStatus(account) {
      try {
        const response = await this.$axios.put(`/api/bank_account/${account.id}/toggle-status`);
        if (response.data && response.data.success) {
          const status = account.isActive ? 'ປິດໃຊ້ງານ' : 'ເປີດໃຊ້ງານ';
          this.showToast(`${status}ສຳເລັດແລ້ວ`, 'success');
          await this.fetchAccounts();
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການປ່ຽນສະຖານະ', 'error');
        }
      } catch (error) {
        console.error('Error toggling status:', error);
        this.showToast('ມີຂໍ້ຜິດພາດໃນການປ່ຽນສະຖານະ', 'error');
      }
    },
    confirmDelete(account) {
      if (this.$swal) {
        this.$swal.fire({
          title: 'ຢືນຢັນການລຶບ',
          text: `ທ່ານຕ້ອງການລຶບບັນຊີ "${account.accountNumber}" ແມ່ນບໍ?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ລຶບ',
          cancelButtonText: 'ຍົກເລີກ'
        }).then(result => {
          if (result.isConfirmed) {
            this.deleteAccount(account);
          }
        });
      } else {
        if (confirm(`ທ່ານຕ້ອງການລຶບບັນຊີ "${account.accountNumber}" ແມ່ນບໍ?`)) {
          this.deleteAccount(account);
        }
      }
    },
    async deleteAccount(account) {
      try {
        const response = await this.$axios.delete(`/api/bank_account/${account.id}`);
        if (response.data && response.data.success) {
          this.showToast('ລຶບຂໍ້ມູນສຳເລັດແລ້ວ', 'success');
          await this.fetchAccounts();
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການລຶບຂໍ້ມູນ', 'error');
        }
      } catch (error) {
        console.error('Error deleting account:', error);
        this.showToast('ມີຂໍ້ຜິດພາດໃນການລຶບຂໍ້ມູນ', 'error');
      }
    },
    getAccountTypeClass(type) {
      const classes = {
        'Saving': 'type-saving',
        'Current': 'type-current',
        'Fixed Deposit': 'type-fixed'
      };
      return classes[type] || 'type-default';
    },
    getCurrencyClass(currency) {
      const classes = {
        'LAK': 'currency-lak',
        'USD': 'currency-usd',
        'THB': 'currency-thb',
        'CNY': 'currency-cny'
      };
      return classes[currency] || 'currency-default';
    },
    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    showToast(message, type = 'info') {
      if (this.$swal) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: type === 'error' ? 5000 : 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer);
            toast.addEventListener('mouseleave', this.$swal.resumeTimer);
          }
        });
        const iconMap = {
          success: 'success',
          error: 'error',
          warning: 'warning',
          info: 'info'
        };
        Toast.fire({
          icon: iconMap[type] || 'info',
          title: message
        });
      } else {
        console.log(`${type}: ${message}`);
        alert(`${type.toUpperCase()}: ${message}`);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/bankAccount/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_bankAccountvue_type_script_lang_js_ = (bankAccountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/bankAccount/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(906)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_bankAccountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b9c5925e",
  "ea805d3a"
  
)

/* harmony default export */ var admin_bankAccount = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(636);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("760257fe", content, true, context)
};

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(543);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-5f6eb4c3]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.modal-container[data-v-5f6eb4c3]{animation:modalSlideIn-5f6eb4c3 .3s ease-out;background:#fff;border-radius:8px;box-shadow:0 10px 25px rgba(0,0,0,.2);max-height:90vh;max-width:700px;overflow-y:auto;width:100%}@keyframes modalSlideIn-5f6eb4c3{0%{opacity:0;transform:translateY(-30px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-5f6eb4c3]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:8px 8px 0 0;display:flex;justify-content:space-between;padding:20px 20px 16px}.modal-title[data-v-5f6eb4c3]{color:#333;font-size:20px;font-weight:600;margin:0}.modal-close-btn[data-v-5f6eb4c3]{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:18px;padding:4px 8px;transition:background-color .2s}.modal-close-btn[data-v-5f6eb4c3]:hover{background-color:#e9ecef;color:#333}.modal-body[data-v-5f6eb4c3]{padding:24px}.account-form[data-v-5f6eb4c3]{display:flex;flex-direction:column;gap:20px}.form-row[data-v-5f6eb4c3]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-5f6eb4c3]{display:flex;flex-direction:column;gap:8px}.form-label[data-v-5f6eb4c3]{color:#555;font-size:14px;font-weight:500}.form-label.required[data-v-5f6eb4c3]:after{color:#dc3545;content:\" *\"}.input-with-icon[data-v-5f6eb4c3]{position:relative}.input-icon[data-v-5f6eb4c3]{color:#666;font-size:14px;left:12px;position:absolute;top:50%;transform:translateY(-50%);z-index:1}.form-control[data-v-5f6eb4c3]{background-color:#fff;border:1px solid #ced4da;border-radius:6px;font-size:14px;padding:10px 12px 10px 40px;transition:all .2s}.form-control[data-v-5f6eb4c3]:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0,123,255,.1);outline:none}.form-control.is-invalid[data-v-5f6eb4c3]{border-color:#dc3545}.invalid-feedback[data-v-5f6eb4c3]{color:#dc3545;font-size:12px;margin-top:4px}.status-toggle[data-v-5f6eb4c3]{align-items:center;display:flex;gap:12px}.toggle-switch[data-v-5f6eb4c3]{display:inline-block;height:24px;position:relative;width:48px}.toggle-input[data-v-5f6eb4c3]{height:0;opacity:0;width:0}.toggle-slider[data-v-5f6eb4c3]{background-color:#ccc;border-radius:24px;bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;transition:.4s}.toggle-slider[data-v-5f6eb4c3]:before{background-color:#fff;border-radius:50%;bottom:3px;content:\"\";height:18px;left:3px;position:absolute;transition:.4s;width:18px}.toggle-input:checked+.toggle-slider[data-v-5f6eb4c3]{background-color:#28a745}.toggle-input:checked+.toggle-slider[data-v-5f6eb4c3]:before{transform:translateX(24px)}.toggle-label[data-v-5f6eb4c3]{color:#555;font-weight:500}.modal-footer[data-v-5f6eb4c3]{display:flex;gap:12px;justify-content:flex-end;padding:16px 24px 24px}.btn[data-v-5f6eb4c3]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-5f6eb4c3]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-5f6eb4c3]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-5f6eb4c3]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-outline-secondary[data-v-5f6eb4c3]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-5f6eb4c3]:hover:not(:disabled){background-color:#6c757d;color:#fff}@media (max-width:768px){.modal-overlay[data-v-5f6eb4c3]{padding:10px}.modal-container[data-v-5f6eb4c3]{max-height:95vh}.modal-header[data-v-5f6eb4c3]{padding:16px}.modal-body[data-v-5f6eb4c3]{padding:20px 16px}.modal-footer[data-v-5f6eb4c3]{flex-direction:column-reverse;padding:12px 16px 16px}.form-row[data-v-5f6eb4c3]{gap:16px;grid-template-columns:1fr}.btn[data-v-5f6eb4c3]{justify-content:center;width:100%}}@media (max-width:480px){.modal-title[data-v-5f6eb4c3]{font-size:18px}.account-form[data-v-5f6eb4c3]{gap:16px}.form-group[data-v-5f6eb4c3]{gap:6px}.toggle-switch[data-v-5f6eb4c3]{height:20px;width:40px}.toggle-slider[data-v-5f6eb4c3]:before{bottom:2px;height:16px;left:2px;width:16px}.toggle-input:checked+.toggle-slider[data-v-5f6eb4c3]:before{transform:translateX(20px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(907);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f67be100", content, true, context)
};

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bank/bankAccount/index.vue?vue&type=template&id=5f6eb4c3&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showModal ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<div class=\"modal-container\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-5f6eb4c3><h3 class=\"modal-title\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂບັນຊີທະນາຄານ' : 'ເພີ່ມບັນຊີທະນາຄານໃໝ່') + "\n        ") + "</h3> <button class=\"modal-close-btn\" data-v-5f6eb4c3><i class=\"fas fa-times\" data-v-5f6eb4c3></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<form class=\"account-form\" data-v-5f6eb4c3>", "</form>", [_vm._ssrNode("<div class=\"form-row\" data-v-5f6eb4c3><div class=\"form-group\" data-v-5f6eb4c3><label class=\"form-label required\" data-v-5f6eb4c3>ເລກບັນຊີ *</label> <div class=\"input-with-icon\" data-v-5f6eb4c3><i class=\"fas fa-credit-card input-icon\" data-v-5f6eb4c3></i> <input type=\"text\" placeholder=\"ໃສ່ເລກບັນຊີ\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.accountNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.accountNumber
  }) + " data-v-5f6eb4c3></div> " + (_vm.errors.accountNumber ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.accountNumber) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-5f6eb4c3><label class=\"form-label required\" data-v-5f6eb4c3>ຊື່ບັນຊີ *</label> <div class=\"input-with-icon\" data-v-5f6eb4c3><i class=\"fas fa-user input-icon\" data-v-5f6eb4c3></i> <input type=\"text\" placeholder=\"ໃສ່ຊື່ບັນຊີ\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.accountName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.accountName
  }) + " data-v-5f6eb4c3></div> " + (_vm.errors.accountName ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.accountName) + "\n              ") + "</div>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"form-row\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-5f6eb4c3>ຊື່ທະນາຄານ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<i class=\"fas fa-university input-icon\" data-v-5f6eb4c3></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankName,
      expression: "form.bankName"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.bankName
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
        _vm.$set(_vm.form, "bankName", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກທະນາຄານ")]), _vm._v(" "), _vm._l(_vm.bankList, function (bank) {
    return _c('option', {
      key: bank.code,
      domProps: {
        "value": bank.name
      }
    }, [_vm._v("\n                    " + _vm._s(bank.name) + "\n                  ")]);
  })], 2)], 2), _vm._ssrNode(" " + (_vm.errors.bankName ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.bankName) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-5f6eb4c3><label class=\"form-label\" data-v-5f6eb4c3>ສາຂາ</label> <div class=\"input-with-icon\" data-v-5f6eb4c3><i class=\"fas fa-map-marker-alt input-icon\" data-v-5f6eb4c3></i> <input type=\"text\" placeholder=\"ໃສ່ຊື່ສາຂາ (ທາງເລືອກ)\"" + _vm._ssrAttr("value", _vm.form.bankBranch) + " class=\"form-control\" data-v-5f6eb4c3></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-5f6eb4c3>ປະເພດບັນຊີ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<i class=\"fas fa-list input-icon\" data-v-5f6eb4c3></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.accountType,
      expression: "form.accountType"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.accountType
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
        _vm.$set(_vm.form, "accountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປະເພດບັນຊີ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Saving"
    }
  }, [_vm._v("Saving Account")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Current"
    }
  }, [_vm._v("Current Account")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Fixed Deposit"
    }
  }, [_vm._v("Fixed Deposit")])])], 2), _vm._ssrNode(" " + (_vm.errors.accountType ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.accountType) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-5f6eb4c3>ສະກຸນເງິນ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<i class=\"fas fa-dollar-sign input-icon\" data-v-5f6eb4c3></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currency,
      expression: "form.currency"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.currency
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
        _vm.$set(_vm.form, "currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LAK"
    }
  }, [_vm._v("LAK - ກີບ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "USD"
    }
  }, [_vm._v("USD - ໂດລາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "THB"
    }
  }, [_vm._v("THB - ບາດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CNY"
    }
  }, [_vm._v("CNY - ຢວນ")])])], 2), _vm._ssrNode(" " + (_vm.errors.currency ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.currency) + "\n              ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-5f6eb4c3><label class=\"form-label\" data-v-5f6eb4c3>ສະຖານະ</label> <div class=\"status-toggle\" data-v-5f6eb4c3><label class=\"toggle-switch\" data-v-5f6eb4c3><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.form.isActive) ? _vm._i(_vm.form.isActive, null) > -1 : _vm.form.isActive) + " class=\"toggle-input\" data-v-5f6eb4c3> <span class=\"toggle-slider\" data-v-5f6eb4c3></span></label> <span class=\"toggle-label\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.form.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n              ") + "</span></div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-5f6eb4c3><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-outline-secondary\" data-v-5f6eb4c3><i class=\"fas fa-times\" data-v-5f6eb4c3></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-5f6eb4c3>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-5f6eb4c3></i>" : "<i class=\"fas fa-save\" data-v-5f6eb4c3></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue?vue&type=template&id=5f6eb4c3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bank/bankAccount/index.vue?vue&type=script&lang=js&
/* harmony default export */ var bankAccountvue_type_script_lang_js_ = ({
  name: 'BankAccountDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    account: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showModal: false,
      loading: false,
      form: {
        accountNumber: '',
        accountName: '',
        bankName: '',
        bankBranch: '',
        accountType: '',
        currency: 'LAK',
        isActive: true
      },
      errors: {},
      // Bank list for dropdown
      bankList: [{
        code: 'BCEL',
        name: 'ທະນາຄານການຄ້າຕ່າງປະເທດລາວ (BCEL)'
      }, {
        code: 'LDB',
        name: 'ທະນາຄານພັດທະນາລາວ (LDB)'
      }, {
        code: 'APB',
        name: 'ທະນາຄານກະເສດຊາວກະສິກອນ (APB)'
      }, {
        code: 'JDB',
        name: 'ທະນາຄານຮ່ວມພັດທະນາລາວ-ຫວຽດ (JDB)'
      }, {
        code: 'LVB',
        name: 'ທະນາຄານລາວ-ຫວຽດ (LVB)'
      }, {
        code: 'IBL',
        name: 'ທະນາຄານອຸດສາຫະກຳ (IBL)'
      }, {
        code: 'STB',
        name: 'ທະນາຄານເສດຖະກິດລາວ (STB)'
      }, {
        code: 'MPB',
        name: 'ທະນາຄານມະຫາຊົນ (MPB)'
      }, {
        code: 'LXB',
        name: 'ທະນາຄານລາວ-ຈີນ (LXB)'
      }, {
        code: 'BMB',
        name: 'ທະນາຄານເມືອງເຮືອງ (BMB)'
      }, {
        code: 'KKB',
        name: 'ທະນາຄານຂົງໄຂ (KKB)'
      }, {
        code: 'SACOM',
        name: 'ທະນາຄານສະຫະກອນ (SACOM)'
      }, {
        code: 'OTHER',
        name: 'ອື່ນໆ'
      }]
    };
  },
  computed: {
    isEdit() {
      return !!this.account && !!this.account.id;
    },
    isFormValid() {
      return this.form.accountNumber && this.form.accountName && this.form.bankName && this.form.accountType && this.form.currency && Object.keys(this.errors).length === 0;
    }
  },
  watch: {
    show(newVal) {
      this.showModal = newVal;
      if (newVal) {
        this.initializeForm();
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
      } else {
        // Restore body scroll when modal is closed
        document.body.style.overflow = '';
      }
    },
    // Watch form fields for validation
    'form.accountNumber'() {
      this.validateAccountNumber();
    },
    'form.accountName'() {
      this.validateAccountName();
    },
    'form.bankName'() {
      this.validateBankName();
    },
    'form.accountType'() {
      this.validateAccountType();
    },
    'form.currency'() {
      this.validateCurrency();
    }
  },
  beforeDestroy() {
    // Ensure body scroll is restored when component is destroyed
    document.body.style.overflow = '';
  },
  methods: {
    initializeForm() {
      this.errors = {};
      if (this.isEdit) {
        // Pre-populate form with existing account data
        this.form = {
          accountNumber: this.account.accountNumber || '',
          accountName: this.account.accountName || '',
          bankName: this.account.bankName || '',
          bankBranch: this.account.bankBranch || '',
          accountType: this.account.accountType || '',
          currency: this.account.currency || 'LAK',
          isActive: this.account.isActive !== undefined ? this.account.isActive : true
        };
      } else {
        // Reset form for new account
        this.form = {
          accountNumber: '',
          accountName: '',
          bankName: '',
          bankBranch: '',
          accountType: '',
          currency: 'LAK',
          isActive: true
        };
      }
    },
    // Validation methods
    validateAccountNumber() {
      if (!this.form.accountNumber) {
        this.$set(this.errors, 'accountNumber', 'ກະລຸນາໃສ່ເລກບັນຊີ');
      } else if (this.form.accountNumber.length < 5) {
        this.$set(this.errors, 'accountNumber', 'ເລກບັນຊີຕ້ອງມີຢ່າງນ້ອຍ 5 ຫຼັກ');
      } else if (!/^[0-9\-]+$/.test(this.form.accountNumber)) {
        this.$set(this.errors, 'accountNumber', 'ເລກບັນຊີຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ');
      } else {
        this.$delete(this.errors, 'accountNumber');
      }
    },
    validateAccountName() {
      if (!this.form.accountName) {
        this.$set(this.errors, 'accountName', 'ກະລຸນາໃສ່ຊື່ບັນຊີ');
      } else if (this.form.accountName.length < 2) {
        this.$set(this.errors, 'accountName', 'ຊື່ບັນຊີຕ້ອງມີຢ່າງນ້ອຍ 2 ຕົວອັກສອນ');
      } else {
        this.$delete(this.errors, 'accountName');
      }
    },
    validateBankName() {
      if (!this.form.bankName) {
        this.$set(this.errors, 'bankName', 'ກະລຸນາເລືອກທະນາຄານ');
      } else {
        this.$delete(this.errors, 'bankName');
      }
    },
    validateAccountType() {
      if (!this.form.accountType) {
        this.$set(this.errors, 'accountType', 'ກະລຸນາເລືອກປະເພດບັນຊີ');
      } else {
        this.$delete(this.errors, 'accountType');
      }
    },
    validateCurrency() {
      if (!this.form.currency) {
        this.$set(this.errors, 'currency', 'ກະລຸນາເລືອກສະກຸນເງິນ');
      } else {
        this.$delete(this.errors, 'currency');
      }
    },
    validateForm() {
      this.validateAccountNumber();
      this.validateAccountName();
      this.validateBankName();
      this.validateAccountType();
      this.validateCurrency();
      return Object.keys(this.errors).length === 0;
    },
    async saveAccount() {
      if (!this.validateForm()) {
        this.showToast('ກະລຸນາກວດສອບຂໍ້ມູນທີ່ໃສ່ອີກຄັ້ງ', 'error');
        return;
      }
      try {
        this.loading = true;
        const accountData = {
          accountNumber: this.form.accountNumber.trim(),
          accountName: this.form.accountName.trim(),
          bankName: this.form.bankName,
          bankBranch: this.form.bankBranch ? this.form.bankBranch.trim() : null,
          accountType: this.form.accountType,
          currency: this.form.currency,
          isActive: this.form.isActive
        };
        let response;
        if (this.isEdit) {
          // Update existing account
          response = await this.$axios.put(`/api/bank_account/update/${this.account.id}`, accountData);
        } else {
          // Create new account
          response = await this.$axios.post('/api/bank_account/create', accountData);
        }

        // Check if response indicates success
        if (response.data && response.data.success !== false) {
          // Success case
          const successMessage = this.isEdit ? 'ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ' : 'ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ';
          this.showToast(successMessage, 'success');

          // Emit saved event and close modal
          this.$emit('saved', response.data);
          this.closeModal();
        } else {
          // Handle API error response (when success: false)
          const errorMessage = response.data.message || 'ມີຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ';
          this.showToast(errorMessage, 'error');
        }
      } catch (error) {
        console.error('Error saving bank account:', error);

        // Handle different types of errors
        let errorMessage = 'ມີຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ';
        if (error.response) {
          // Server responded with error status
          if (error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
          } else if (error.response.status === 404) {
            errorMessage = 'ບໍ່ພົບຂໍ້ມູນທີ່ຕ້ອງການ';
          } else if (error.response.status === 403) {
            errorMessage = 'ບໍ່ມີສິດໃນການດຳເນີນການນີ້';
          } else if (error.response.status === 500) {
            errorMessage = 'ມີຂໍ້ຜິດພາດຈາກເຊີເວີ ກະລຸນາລອງໃໝ່ໃນພາຍຫຼັງ';
          } else if (error.response.status === 409) {
            errorMessage = 'ເລກບັນຊີນີ້ມີໃນລະບົບແລ້ວ';
          }
        } else if (error.request) {
          // Network error
          errorMessage = 'ບໍ່ສາມາດເຊື່ອມຕໍ່ກັບເຊີເວີໄດ້ ກະລຸນາກວດສອບການເຊື່ອມຕໍ່ອິນເຕີເນັດ';
        }
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    closeModal() {
      this.showModal = false;
      this.$emit('close');

      // Reset form after modal closes
      setTimeout(() => {
        this.initializeForm();
      }, 300);
    },
    showToast(message, type = 'info') {
      if (this.$swal) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: type === 'error' ? 5000 : 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer);
            toast.addEventListener('mouseleave', this.$swal.resumeTimer);
          }
        });
        const iconMap = {
          success: 'success',
          error: 'error',
          warning: 'warning',
          info: 'info'
        };
        Toast.fire({
          icon: iconMap[type] || 'info',
          title: message
        });
      } else {
        console.log(`${type}: ${message}`);
        alert(`${type.toUpperCase()}: ${message}`);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var bank_bankAccountvue_type_script_lang_js_ = (bankAccountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(635)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bank_bankAccountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f6eb4c3",
  "004819f4"
  
)

/* harmony default export */ var bankAccount = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9c5925e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(732);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9c5925e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9c5925e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9c5925e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b9c5925e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bank-account-page[data-v-b9c5925e]{background-color:#f8f9fa;min-height:100vh;padding:24px}.page-header[data-v-b9c5925e]{align-items:center;background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);display:flex;justify-content:space-between;margin-bottom:24px;padding:24px}.header-content[data-v-b9c5925e]{flex:1}.page-title[data-v-b9c5925e]{align-items:center;color:#333;display:flex;font-size:28px;font-weight:600;gap:12px;margin:0 0 8px}.page-subtitle[data-v-b9c5925e]{color:#666;font-size:16px;margin:0}.header-actions[data-v-b9c5925e]{display:flex;gap:12px}.filters-section[data-v-b9c5925e]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:24px;padding:20px}.filter-row[data-v-b9c5925e]{align-items:end;display:flex;flex-wrap:wrap;gap:16px}.filter-group[data-v-b9c5925e]{display:flex;flex-direction:column;gap:8px;min-width:200px}.filter-label[data-v-b9c5925e]{color:#555;font-size:14px;font-weight:500}.search-input-wrapper[data-v-b9c5925e]{position:relative}.search-icon[data-v-b9c5925e]{color:#666;font-size:14px;left:12px;position:absolute;top:50%;transform:translateY(-50%)}.search-input[data-v-b9c5925e]{border:1px solid #ced4da;border-radius:6px;font-size:14px;padding:10px 12px 10px 36px;transition:border-color .2s;width:100%}.search-input[data-v-b9c5925e]:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0,123,255,.1);outline:none}.filter-select[data-v-b9c5925e]{background:#fff;border:1px solid #ced4da;border-radius:6px;cursor:pointer;font-size:14px;padding:10px 12px;transition:border-color .2s}.filter-select[data-v-b9c5925e]:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0,123,255,.1);outline:none}.filter-actions[data-v-b9c5925e]{align-items:end;display:flex}.stats-section[data-v-b9c5925e]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin-bottom:24px}.stat-card[data-v-b9c5925e]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);gap:16px;padding:24px}.stat-card[data-v-b9c5925e],.stat-icon[data-v-b9c5925e]{align-items:center;display:flex}.stat-icon[data-v-b9c5925e]{border-radius:50%;color:#fff;font-size:20px;height:48px;justify-content:center;width:48px}.stat-icon-primary[data-v-b9c5925e]{background-color:#007bff}.stat-icon-success[data-v-b9c5925e]{background-color:#28a745}.stat-icon-warning[data-v-b9c5925e]{background-color:#ffc107}.stat-icon-info[data-v-b9c5925e]{background-color:#17a2b8}.stat-content[data-v-b9c5925e]{flex:1}.stat-number[data-v-b9c5925e]{color:#333;font-size:24px;font-weight:600;margin:0 0 4px}.stat-label[data-v-b9c5925e]{color:#666;font-size:14px;margin:0}.table-section[data-v-b9c5925e]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-b9c5925e]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title[data-v-b9c5925e]{color:#333;font-size:18px;font-weight:600;margin:0}.table-info[data-v-b9c5925e]{color:#666;font-size:14px}.table-wrapper[data-v-b9c5925e]{overflow-x:auto}.data-table[data-v-b9c5925e]{border-collapse:collapse;width:100%}.data-table td[data-v-b9c5925e],.data-table th[data-v-b9c5925e]{border-bottom:1px solid #e9ecef;padding:12px;text-align:left}.data-table th[data-v-b9c5925e]{background-color:#f8f9fa;color:#333;font-size:14px;font-weight:600}.data-table td[data-v-b9c5925e]{color:#555;font-size:14px}.account-number[data-v-b9c5925e]{align-items:center;display:flex;font-family:monospace;font-weight:500;gap:8px}.account-name[data-v-b9c5925e]{font-weight:500}.bank-info[data-v-b9c5925e]{align-items:center;display:flex;gap:8px}.account-type-badge[data-v-b9c5925e],.currency-badge[data-v-b9c5925e]{border-radius:4px;font-size:12px;font-weight:500;padding:4px 8px;text-transform:uppercase}.type-saving[data-v-b9c5925e]{background-color:#d4edda;color:#155724}.type-current[data-v-b9c5925e]{background-color:#d1ecf1;color:#0c5460}.type-fixed[data-v-b9c5925e]{background-color:#fff3cd;color:#856404}.currency-lak[data-v-b9c5925e]{background-color:#e7f3ff;color:#0056b3}.currency-usd[data-v-b9c5925e]{background-color:#d4edda;color:#155724}.currency-thb[data-v-b9c5925e]{background-color:#fff3cd;color:#856404}.currency-cny[data-v-b9c5925e]{background-color:#f8d7da;color:#721c24}.status-badge[data-v-b9c5925e]{align-items:center;border-radius:4px;display:flex;font-size:12px;font-weight:500;gap:4px;padding:4px 8px}.status-active[data-v-b9c5925e]{background-color:#d4edda;color:#155724}.status-inactive[data-v-b9c5925e]{background-color:#f8d7da;color:#721c24}.action-buttons[data-v-b9c5925e]{display:flex;gap:8px}.btn-icon[data-v-b9c5925e]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:flex;font-size:12px;height:32px;justify-content:center;transition:all .2s;width:32px}.btn-icon[data-v-b9c5925e]:hover{transform:translateY(-1px)}.btn-icon[data-v-b9c5925e]:disabled{cursor:not-allowed;opacity:.5}.btn-icon-primary[data-v-b9c5925e]{background-color:#007bff;color:#fff}.btn-icon-primary[data-v-b9c5925e]:hover:not(:disabled){background-color:#0056b3}.btn-icon-warning[data-v-b9c5925e]{background-color:#ffc107;color:#333}.btn-icon-warning[data-v-b9c5925e]:hover:not(:disabled){background-color:#e0a800}.btn-icon-danger[data-v-b9c5925e]{background-color:#dc3545;color:#fff}.btn-icon-danger[data-v-b9c5925e]:hover:not(:disabled){background-color:#c82333}.empty-state[data-v-b9c5925e],.loading-state[data-v-b9c5925e]{color:#666;padding:60px 20px;text-align:center}.loading-state i[data-v-b9c5925e]{color:#007bff;font-size:32px;margin-bottom:16px}.empty-state i[data-v-b9c5925e]{color:#ccc;font-size:64px;margin-bottom:16px}.empty-state h3[data-v-b9c5925e]{color:#333;font-size:20px;margin:0 0 8px}.empty-state p[data-v-b9c5925e]{font-size:16px;margin:0}.pagination-section[data-v-b9c5925e]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-b9c5925e]{color:#666;font-size:14px}.pagination-controls[data-v-b9c5925e]{align-items:center;display:flex;gap:8px}.page-info[data-v-b9c5925e]{color:#666;font-size:14px;padding:0 16px}.btn[data-v-b9c5925e]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-b9c5925e]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-b9c5925e]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-b9c5925e]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-outline-secondary[data-v-b9c5925e]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-b9c5925e]:hover:not(:disabled){background-color:#6c757d;color:#fff}@media (max-width:768px){.bank-account-page[data-v-b9c5925e]{padding:16px}.page-header[data-v-b9c5925e]{align-items:stretch;flex-direction:column;gap:16px}.filter-row[data-v-b9c5925e]{flex-direction:column;gap:12px}.filter-group[data-v-b9c5925e]{min-width:auto}.stats-section[data-v-b9c5925e]{grid-template-columns:1fr}.table-wrapper[data-v-b9c5925e]{overflow-x:scroll}.data-table[data-v-b9c5925e]{min-width:800px}.pagination-section[data-v-b9c5925e]{flex-direction:column;gap:16px}}@media (max-width:480px){.page-title[data-v-b9c5925e]{font-size:24px}.stat-card[data-v-b9c5925e]{padding:16px}.stat-number[data-v-b9c5925e]{font-size:20px}.action-buttons[data-v-b9c5925e]{flex-direction:column;gap:4px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map