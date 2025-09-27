exports.ids = [190,88,89];
exports.modules = {

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/ministry/index.vue?vue&type=template&id=68498262&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ministry-page"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-68498262><div class=\"header-content\" data-v-68498262><h1 class=\"page-title\" data-v-68498262><i class=\"fas fa-building\" data-v-68498262></i>\n        ຈັດການກະຊວງ ແລະ ຫົວໜ່ວຍງານ\n      </h1> <p class=\"page-subtitle\" data-v-68498262>ຈັດການຂໍ້ມູນກະຊວງ ແລະ ຫົວໜ່ວຍງານລັດຖະບານ</p></div> <div class=\"header-actions\" data-v-68498262><button" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-68498262><i" + _vm._ssrClass(null, _vm.showHierarchy ? 'fas fa-list' : 'fas fa-sitemap') + " data-v-68498262></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.showHierarchy ? 'ມຸມມອງລາຍການ' : 'ມຸມມອງໂຄງສ້າງ') + "\n      ") + "</button> <button" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-primary\" data-v-68498262><i class=\"fas fa-plus\" data-v-68498262></i>\n        ເພີ່ມກະຊວງໃໝ່\n      </button></div></div> "), _vm._ssrNode("<div class=\"filters-section\" data-v-68498262>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-68498262>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-68498262><label class=\"filter-label\" data-v-68498262>ຄົ້ນຫາ</label> <div class=\"search-input-wrapper\" data-v-68498262><i class=\"fas fa-search search-icon\" data-v-68498262></i> <input type=\"text\" placeholder=\"ຄົ້ນຫາລະຫັດ, ຊື່ກະຊວງ, ຊື່ລັດຖະມົນຕີ...\"" + _vm._ssrAttr("value", _vm.filters.search) + " class=\"search-input\" data-v-68498262></div></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-68498262>", "</div>", [_vm._ssrNode("<label class=\"filter-label\" data-v-68498262>ປະເພດ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.ministryType,
      expression: "filters.ministryType"
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
        _vm.$set(_vm.filters, "ministryType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Ministry"
    }
  }, [_vm._v("Ministry")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Department"
    }
  }, [_vm._v("Department")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Agency"
    }
  }, [_vm._v("Agency")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Commission"
    }
  }, [_vm._v("Commission")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-68498262>", "</div>", [_vm._ssrNode("<label class=\"filter-label\" data-v-68498262>ສະຖານະ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.status,
      expression: "filters.status"
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
        _vm.$set(_vm.filters, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Active"
    }
  }, [_vm._v("ໃຊ້ງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Inactive"
    }
  }, [_vm._v("ປິດໃຊ້ງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Restructured"
    }
  }, [_vm._v("ປັບໂຄງສ້າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Merged"
    }
  }, [_vm._v("ລວມເຂົ້າກັນ")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter-group\" data-v-68498262>", "</div>", [_vm._ssrNode("<label class=\"filter-label\" data-v-68498262>ແຂວງ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.province,
      expression: "filters.province"
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
        _vm.$set(_vm.filters, "province", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.applyFilters]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທັງໝົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ວຽງຈັນ"
    }
  }, [_vm._v("ວຽງຈັນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ລວງພະບາງ"
    }
  }, [_vm._v("ລວງພະບາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ສະຫວັນນະເຂດ"
    }
  }, [_vm._v("ສະຫວັນນະເຂດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ຈຳປາສັກ"
    }
  }, [_vm._v("ຈຳປາສັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ອື່ນໆ"
    }
  }, [_vm._v("ອື່ນໆ")])])], 2), _vm._ssrNode(" <div class=\"filter-actions\" data-v-68498262><button class=\"btn btn-outline-secondary\" data-v-68498262><i class=\"fas fa-refresh\" data-v-68498262></i>\n          ລ້າງ\n        </button></div>")], 2)]), _vm._ssrNode(" <div class=\"stats-section\" data-v-68498262><div class=\"stat-card\" data-v-68498262><div class=\"stat-icon stat-icon-primary\" data-v-68498262><i class=\"fas fa-building\" data-v-68498262></i></div> <div class=\"stat-content\" data-v-68498262><h3 class=\"stat-number\" data-v-68498262>" + _vm._ssrEscape(_vm._s(_vm.statistics.total)) + "</h3> <p class=\"stat-label\" data-v-68498262>ທັງໝົດ</p></div></div> <div class=\"stat-card\" data-v-68498262><div class=\"stat-icon stat-icon-success\" data-v-68498262><i class=\"fas fa-check-circle\" data-v-68498262></i></div> <div class=\"stat-content\" data-v-68498262><h3 class=\"stat-number\" data-v-68498262>" + _vm._ssrEscape(_vm._s(_vm.statistics.active)) + "</h3> <p class=\"stat-label\" data-v-68498262>ໃຊ້ງານ</p></div></div> <div class=\"stat-card\" data-v-68498262><div class=\"stat-icon stat-icon-info\" data-v-68498262><i class=\"fas fa-sitemap\" data-v-68498262></i></div> <div class=\"stat-content\" data-v-68498262><h3 class=\"stat-number\" data-v-68498262>" + _vm._ssrEscape(_vm._s(_vm.statistics.ministries)) + "</h3> <p class=\"stat-label\" data-v-68498262>ກະຊວງ</p></div></div> <div class=\"stat-card\" data-v-68498262><div class=\"stat-icon stat-icon-warning\" data-v-68498262><i class=\"fas fa-university\" data-v-68498262></i></div> <div class=\"stat-content\" data-v-68498262><h3 class=\"stat-number\" data-v-68498262>" + _vm._ssrEscape(_vm._s(_vm.statistics.departments)) + "</h3> <p class=\"stat-label\" data-v-68498262>ກົມ</p></div></div></div> " + (_vm.showHierarchy ? "<div class=\"hierarchy-section\" data-v-68498262><div class=\"section-header\" data-v-68498262><h3 class=\"section-title\" data-v-68498262>ໂຄງສ້າງລຳດັບຊັ້ນກະຊວງ</h3></div> <div class=\"hierarchy-wrapper\" data-v-68498262>" + (_vm.loading ? "<div class=\"loading-state\" data-v-68498262><i class=\"fas fa-spinner fa-spin\" data-v-68498262></i> <p data-v-68498262>ກຳລັງໂຫຼດຂໍ້ມູນ...</p></div>" : _vm.hierarchyData.length === 0 ? "<div class=\"empty-state\" data-v-68498262><i class=\"fas fa-building\" data-v-68498262></i> <h3 data-v-68498262>ບໍ່ມີຂໍ້ມູນກະຊວງ</h3> <p data-v-68498262>ກົດປຸ່ມ &quot;ເພີ່ມກະຊວງໃໝ່&quot; ເພື່ອເພີ່ມກະຊວງ</p></div>" : "<div class=\"hierarchy-tree\" data-v-68498262>" + _vm._ssrList(_vm.hierarchyData, function (ministry) {
    return "<div class=\"ministry-node\" data-v-68498262><div" + _vm._ssrClass("ministry-card", _vm.getMinistryTypeClass(ministry.ministryType)) + " data-v-68498262><div class=\"ministry-info\" data-v-68498262><div class=\"ministry-header\" data-v-68498262><h4 class=\"ministry-name\" data-v-68498262>" + _vm._ssrEscape(_vm._s(ministry.ministryName)) + "</h4> <span class=\"ministry-code\" data-v-68498262>" + _vm._ssrEscape(_vm._s(ministry.ministryCode)) + "</span></div> <div class=\"ministry-details\" data-v-68498262>" + (ministry.ministerName ? "<p class=\"minister-name\" data-v-68498262><i class=\"fas fa-user\" data-v-68498262></i>" + _vm._ssrEscape("\n                  " + _vm._s(ministry.ministerName) + "\n                ") + "</p>" : "<!---->") + " " + (ministry.province ? "<p class=\"ministry-location\" data-v-68498262><i class=\"fas fa-map-marker-alt\" data-v-68498262></i>" + _vm._ssrEscape("\n                  " + _vm._s(ministry.province) + _vm._s(ministry.district ? `, ${ministry.district}` : '') + "\n                ") + "</p>" : "<!---->") + "</div> <div class=\"ministry-meta\" data-v-68498262><span" + _vm._ssrClass("ministry-type-badge", _vm.getMinistryTypeClass(ministry.ministryType)) + " data-v-68498262>" + _vm._ssrEscape("\n                  " + _vm._s(ministry.ministryType) + "\n                ") + "</span> <span" + _vm._ssrClass("status-badge", _vm.getStatusClass(ministry.status)) + " data-v-68498262>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getStatusText(ministry.status)) + "\n                ") + "</span></div></div> <div class=\"ministry-actions\" data-v-68498262><button title=\"ແກ້ໄຂ\" class=\"btn-icon btn-icon-primary\" data-v-68498262><i class=\"fas fa-edit\" data-v-68498262></i></button> <button" + _vm._ssrAttr("title", ministry.isActive ? 'ປິດໃຊ້ງານ' : 'ເປີດໃຊ້ງານ') + " class=\"btn-icon btn-icon-warning\" data-v-68498262><i" + _vm._ssrClass(null, ministry.isActive ? 'fas fa-pause' : 'fas fa-play') + " data-v-68498262></i></button> <button title=\"ລຶບ\" class=\"btn-icon btn-icon-danger\" data-v-68498262><i class=\"fas fa-trash\" data-v-68498262></i></button></div></div> " + (ministry.subMinistries && ministry.subMinistries.length > 0 ? "<div class=\"sub-ministries\" data-v-68498262>" + _vm._ssrList(ministry.subMinistries, function (subMinistry) {
      return "<div class=\"sub-ministry-card\" data-v-68498262><div class=\"sub-ministry-info\" data-v-68498262><div class=\"sub-ministry-header\" data-v-68498262><h5 class=\"sub-ministry-name\" data-v-68498262>" + _vm._ssrEscape(_vm._s(subMinistry.ministryName)) + "</h5> <span class=\"sub-ministry-code\" data-v-68498262>" + _vm._ssrEscape(_vm._s(subMinistry.ministryCode)) + "</span></div> <span" + _vm._ssrClass("ministry-type-badge", _vm.getMinistryTypeClass(subMinistry.ministryType)) + " data-v-68498262>" + _vm._ssrEscape("\n                  " + _vm._s(subMinistry.ministryType) + "\n                ") + "</span></div> <div class=\"sub-ministry-actions\" data-v-68498262><button title=\"ແກ້ໄຂ\" class=\"btn-icon btn-icon-sm btn-icon-primary\" data-v-68498262><i class=\"fas fa-edit\" data-v-68498262></i></button> <button title=\"ລຶບ\" class=\"btn-icon btn-icon-sm btn-icon-danger\" data-v-68498262><i class=\"fas fa-trash\" data-v-68498262></i></button></div></div>";
    }) + "</div>" : "<!---->") + "</div>";
  }) + "</div>") + "</div></div>" : "<div class=\"table-section\" data-v-68498262><div class=\"table-header\" data-v-68498262><h3 class=\"table-title\" data-v-68498262>ລາຍການກະຊວງ ແລະ ຫົວໜ່ວຍງານ</h3> <div class=\"table-info\" data-v-68498262>" + _vm._ssrEscape("\n        ທັງໝົດ " + _vm._s(_vm.filteredMinistries.length) + " ລາຍການ\n      ") + "</div></div> <div class=\"table-wrapper\" data-v-68498262>" + (_vm.loading ? "<div class=\"loading-state\" data-v-68498262><i class=\"fas fa-spinner fa-spin\" data-v-68498262></i> <p data-v-68498262>ກຳລັງໂຫຼດຂໍ້ມູນ...</p></div>" : _vm.filteredMinistries.length === 0 ? "<div class=\"empty-state\" data-v-68498262><i class=\"fas fa-building\" data-v-68498262></i> <h3 data-v-68498262>ບໍ່ມີຂໍ້ມູນກະຊວງ</h3> <p data-v-68498262>ກົດປຸ່ມ &quot;ເພີ່ມກະຊວງໃໝ່&quot; ເພື່ອເພີ່ມກະຊວງ</p></div>" : "<table class=\"data-table\" data-v-68498262><thead data-v-68498262><tr data-v-68498262><th data-v-68498262>ລະຫັດ</th> <th data-v-68498262>ຊື່ກະຊວງ</th> <th data-v-68498262>ປະເພດ</th> <th data-v-68498262>ລັດຖະມົນຕີ</th> <th data-v-68498262>ແຂວງ/ເມືອງ</th> <th data-v-68498262>ຕິດຕໍ່</th> <th data-v-68498262>ສະຖານະ</th> <th data-v-68498262>ວັນທີສ້າງ</th> <th data-v-68498262>ຈັດການ</th></tr></thead> <tbody data-v-68498262>" + _vm._ssrList(_vm.paginatedMinistries, function (ministry) {
    return "<tr data-v-68498262><td data-v-68498262><div class=\"ministry-code\" data-v-68498262><i class=\"fas fa-barcode\" data-v-68498262></i>" + _vm._ssrEscape("\n                " + _vm._s(ministry.ministryCode) + "\n              ") + "</div></td> <td data-v-68498262><div class=\"ministry-info-cell\" data-v-68498262><div class=\"ministry-name-primary\" data-v-68498262>" + _vm._ssrEscape(_vm._s(ministry.ministryName)) + "</div> " + (ministry.ministryNameEn ? "<div class=\"ministry-name-en\" data-v-68498262>" + _vm._ssrEscape(_vm._s(ministry.ministryNameEn)) + "</div>" : "<!---->") + " " + (ministry.parentMinistry ? "<div class=\"parent-ministry\" data-v-68498262><i class=\"fas fa-link\" data-v-68498262></i>" + _vm._ssrEscape("\n                  " + _vm._s(ministry.parentMinistry.ministryName) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-68498262><span" + _vm._ssrClass("ministry-type-badge", _vm.getMinistryTypeClass(ministry.ministryType)) + " data-v-68498262>" + _vm._ssrEscape("\n                " + _vm._s(ministry.ministryType) + "\n              ") + "</span></td> <td data-v-68498262>" + _vm._ssrEscape(_vm._s(ministry.ministerName || '-')) + "</td> <td data-v-68498262>" + (ministry.province || ministry.district ? "<div class=\"location-info\" data-v-68498262>" + (ministry.province ? "<div data-v-68498262>" + _vm._ssrEscape(_vm._s(ministry.province)) + "</div>" : "<!---->") + " " + (ministry.district ? "<div class=\"district\" data-v-68498262>" + _vm._ssrEscape(_vm._s(ministry.district)) + "</div>" : "<!---->") + "</div>" : "<span data-v-68498262>-</span>") + "</td> <td data-v-68498262><div class=\"contact-info\" data-v-68498262>" + (ministry.phoneNumber ? "<div class=\"contact-item\" data-v-68498262><i class=\"fas fa-phone\" data-v-68498262></i>" + _vm._ssrEscape("\n                  " + _vm._s(ministry.phoneNumber) + "\n                ") + "</div>" : "<!---->") + " " + (ministry.email ? "<div class=\"contact-item\" data-v-68498262><i class=\"fas fa-envelope\" data-v-68498262></i>" + _vm._ssrEscape("\n                  " + _vm._s(ministry.email) + "\n                ") + "</div>" : "<!---->") + "</div></td> <td data-v-68498262><span" + _vm._ssrClass("status-badge", _vm.getStatusClass(ministry.status)) + " data-v-68498262><i" + _vm._ssrClass(null, _vm.getStatusIcon(ministry.status)) + " data-v-68498262></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.getStatusText(ministry.status)) + "\n              ") + "</span></td> <td data-v-68498262>" + _vm._ssrEscape(_vm._s(_vm.formatDate(ministry.createdAt))) + "</td> <td data-v-68498262><div class=\"action-buttons\" data-v-68498262><button title=\"ລາຍລະອຽດ\" class=\"btn-icon btn-icon-info\" data-v-68498262><i class=\"fas fa-eye\" data-v-68498262></i></button> <button" + _vm._ssrAttr("disabled", _vm.loading) + " title=\"ແກ້ໄຂ\" class=\"btn-icon btn-icon-primary\" data-v-68498262><i class=\"fas fa-edit\" data-v-68498262></i></button></div></td></tr>";
  }) + "</tbody></table>") + "</div> " + (_vm.totalPages > 1 ? "<div class=\"pagination-section\" data-v-68498262><div class=\"pagination-info\" data-v-68498262>" + _vm._ssrEscape("\n        ສະແດງ " + _vm._s((_vm.currentPage - 1) * _vm.pageSize + 1) + " - " + _vm._s(Math.min(_vm.currentPage * _vm.pageSize, _vm.filteredMinistries.length)) + " \n        ຈາກ " + _vm._s(_vm.filteredMinistries.length) + " ລາຍການ\n      ") + "</div> <div class=\"pagination-controls\" data-v-68498262><button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"btn btn-outline-secondary\" data-v-68498262><i class=\"fas fa-angle-double-left\" data-v-68498262></i></button> <button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"btn btn-outline-secondary\" data-v-68498262><i class=\"fas fa-angle-left\" data-v-68498262></i></button> <span class=\"page-info\" data-v-68498262>" + _vm._ssrEscape("\n          ໜ້າ " + _vm._s(_vm.currentPage) + " ຈາກ " + _vm._s(_vm.totalPages) + "\n        ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"btn btn-outline-secondary\" data-v-68498262><i class=\"fas fa-angle-right\" data-v-68498262></i></button> <button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"btn btn-outline-secondary\" data-v-68498262><i class=\"fas fa-angle-double-right\" data-v-68498262></i></button></div></div>" : "<!---->") + "</div>") + " "), _c('MinistryDialog', {
    attrs: {
      "show": _vm.showDialog,
      "ministry": _vm.selectedMinistry,
      "ministries": _vm.ministries
    },
    on: {
      "close": _vm.closeDialog,
      "saved": _vm.onMinistrySaved
    }
  }), _vm._ssrNode(" "), _c('MinistryViewDialog', {
    attrs: {
      "show": _vm.showViewDialog,
      "ministry": _vm.selectedMinistry
    },
    on: {
      "close": _vm.closeViewDialog
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/ministry/index.vue?vue&type=template&id=68498262&scoped=true&

// EXTERNAL MODULE: ./components/ministry/MinistryDialog.vue + 3 modules
var MinistryDialog = __webpack_require__(724);

// EXTERNAL MODULE: ./components/ministry/MinistryViewDialog.vue + 4 modules
var MinistryViewDialog = __webpack_require__(719);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/ministry/index.vue?vue&type=script&lang=js&


/* harmony default export */ var ministryvue_type_script_lang_js_ = ({
  name: 'MinistryPage',
  components: {
    MinistryDialog: MinistryDialog["default"],
    MinistryViewDialog: MinistryViewDialog["default"]
  },
  middleware: 'auths',
  data() {
    return {
      loading: false,
      showDialog: false,
      showViewDialog: false,
      selectedMinistry: null,
      showHierarchy: false,
      ministries: [],
      hierarchyData: [],
      filteredMinistries: [],
      // Pagination
      currentPage: 1,
      pageSize: 10,
      // Filters
      filters: {
        search: '',
        ministryType: '',
        status: '',
        province: ''
      },
      // Statistics
      statistics: {
        total: 0,
        active: 0,
        ministries: 0,
        departments: 0
      }
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredMinistries.length / this.pageSize);
    },
    paginatedMinistries() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredMinistries.slice(start, end);
    }
  },
  async mounted() {
    await this.fetchMinistries();
    await this.fetchHierarchy();
  },
  methods: {
    async fetchMinistries() {
      try {
        this.loading = true;
        const response = await this.$axios.get('/api/ministries');
        if (response.data && response.data.success) {
          this.ministries = response.data.data || [];
        } else {
          this.ministries = [];
        }
        this.applyFilters();
        this.calculateStatistics();
      } catch (error) {
        console.error('Error fetching ministries:', error);
        this.showToast('ມີຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ', 'error');
        this.ministries = [];
      } finally {
        this.loading = false;
      }
    },
    async fetchHierarchy() {
      try {
        const response = await this.$axios.get('/api/ministries/hierarchy');
        if (response.data && response.data.success) {
          this.hierarchyData = response.data.data || [];
        } else {
          this.hierarchyData = [];
        }
      } catch (error) {
        console.error('Error fetching hierarchy:', error);
        this.hierarchyData = [];
      }
    },
    applyFilters() {
      let filtered = [...this.ministries];

      // Search filter
      if (this.filters.search) {
        const searchLower = this.filters.search.toLowerCase();
        filtered = filtered.filter(ministry => ministry.ministryCode.toLowerCase().includes(searchLower) || ministry.ministryName.toLowerCase().includes(searchLower) || ministry.ministryNameEn && ministry.ministryNameEn.toLowerCase().includes(searchLower) || ministry.ministerName && ministry.ministerName.toLowerCase().includes(searchLower) || ministry.description && ministry.description.toLowerCase().includes(searchLower));
      }

      // Ministry type filter
      if (this.filters.ministryType) {
        filtered = filtered.filter(ministry => ministry.ministryType === this.filters.ministryType);
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(ministry => ministry.status === this.filters.status);
      }

      // Province filter
      if (this.filters.province) {
        filtered = filtered.filter(ministry => ministry.province === this.filters.province);
      }
      this.filteredMinistries = filtered;
      this.currentPage = 1; // Reset to first page
    },

    resetFilters() {
      this.filters = {
        search: '',
        ministryType: '',
        status: '',
        province: ''
      };
      this.applyFilters();
    },
    calculateStatistics() {
      this.statistics.total = this.ministries.length;
      this.statistics.active = this.ministries.filter(ministry => ministry.status === 'Active').length;
      this.statistics.ministries = this.ministries.filter(ministry => ministry.ministryType === 'Ministry').length;
      this.statistics.departments = this.ministries.filter(ministry => ministry.ministryType === 'Department').length;
    },
    openCreateDialog() {
      this.selectedMinistry = null;
      this.showDialog = true;
    },
    openEditDialog(ministry) {
      this.selectedMinistry = ministry;
      this.showDialog = true;
    },
    openViewDialog(ministry) {
      this.selectedMinistry = ministry;
      this.showViewDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.selectedMinistry = null;
    },
    closeViewDialog() {
      this.showViewDialog = false;
      this.selectedMinistry = null;
    },
    async onMinistrySaved(response) {
      try {
        if (response && response.success !== false) {
          this.showToast('ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ', 'success');
          await this.fetchMinistries();
          await this.fetchHierarchy();
        } else {
          const errorMessage = (response === null || response === void 0 ? void 0 : response.message) || 'ການບັນທຶກບໍ່ສຳເລັດ';
          this.showToast(errorMessage, 'error');
        }
      } catch (error) {
        console.error('Error in onMinistrySaved:', error);
        this.showToast('ມີຂໍ້ຜິດພາດຢ່າງບໍ່ຄາດຄິດ', 'error');
      }
    },
    async toggleStatus(ministry) {
      try {
        const response = await this.$axios.put(`/api/ministries/${ministry.id}/toggle-status`);
        if (response.data && response.data.success) {
          const status = ministry.isActive ? 'ປິດໃຊ້ງານ' : 'ເປີດໃຊ້ງານ';
          this.showToast(`${status}ສຳເລັດແລ້ວ`, 'success');
          await this.fetchMinistries();
          await this.fetchHierarchy();
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການປ່ຽນສະຖານະ', 'error');
        }
      } catch (error) {
        console.error('Error toggling status:', error);
        this.showToast('ມີຂໍ້ຜິດພາດໃນການປ່ຽນສະຖານະ', 'error');
      }
    },
    confirmDelete(ministry) {
      if (this.$swal) {
        this.$swal.fire({
          title: 'ຢືນຢັນການລຶບ',
          text: `ທ່ານຕ້ອງການລຶບ "${ministry.ministryName}" ແມ່ນບໍ?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ລຶບ',
          cancelButtonText: 'ຍົກເລີກ'
        }).then(result => {
          if (result.isConfirmed) {
            this.deleteMinistry(ministry);
          }
        });
      } else {
        if (confirm(`ທ່ານຕ້ອງການລຶບ "${ministry.ministryName}" ແມ່ນບໍ?`)) {
          this.deleteMinistry(ministry);
        }
      }
    },
    async deleteMinistry(ministry) {
      try {
        const response = await this.$axios.delete(`/api/ministries/${ministry.id}`);
        if (response.data && response.data.success) {
          this.showToast('ລຶບຂໍ້ມູນສຳເລັດແລ້ວ', 'success');
          await this.fetchMinistries();
          await this.fetchHierarchy();
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການລຶບຂໍ້ມູນ', 'error');
        }
      } catch (error) {
        console.error('Error deleting ministry:', error);
        this.showToast('ມີຂໍ້ຜິດພາດໃນການລຶບຂໍ້ມູນ', 'error');
      }
    },
    getMinistryTypeClass(type) {
      const classes = {
        'Ministry': 'type-ministry',
        'Department': 'type-department',
        'Agency': 'type-agency',
        'Commission': 'type-commission'
      };
      return classes[type] || 'type-default';
    },
    getStatusClass(status) {
      const classes = {
        'Active': 'status-active',
        'Inactive': 'status-inactive',
        'Restructured': 'status-restructured',
        'Merged': 'status-merged'
      };
      return classes[status] || 'status-default';
    },
    getStatusIcon(status) {
      const icons = {
        'Active': 'fas fa-check-circle',
        'Inactive': 'fas fa-times-circle',
        'Restructured': 'fas fa-sync-alt',
        'Merged': 'fas fa-merge'
      };
      return icons[status] || 'fas fa-question-circle';
    },
    getStatusText(status) {
      const texts = {
        'Active': 'ໃຊ້ງານ',
        'Inactive': 'ປິດໃຊ້ງານ',
        'Restructured': 'ປັບໂຄງສ້າງ',
        'Merged': 'ລວມເຂົ້າກັນ'
      };
      return texts[status] || status;
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
// CONCATENATED MODULE: ./pages/admin/ministry/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_ministryvue_type_script_lang_js_ = (ministryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/ministry/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(938)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_ministryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "68498262",
  "1d93f5c3"
  
)

/* harmony default export */ var ministry = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MinistryDialog: __webpack_require__(724).default,MinistryViewDialog: __webpack_require__(719).default})


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'MinistryDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ministry: {
      type: Object,
      default: null
    },
    ministries: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      loading: false,
      errors: {},
      formData: {
        ministryCode: '',
        ministryName: '',
        ministryNameEn: '',
        description: '',
        ministryType: 'Ministry',
        parentMinistryId: null,
        ministerName: '',
        establishedDate: '',
        address: '',
        phoneNumber: '',
        email: '',
        website: '',
        province: '',
        district: '',
        status: 'Active',
        priority: 0,
        isActive: true
      }
    };
  },
  computed: {
    isEdit() {
      return this.ministry && this.ministry.id;
    },
    availableParentMinistries() {
      return this.ministries.filter(m => {
        // Exclude current ministry (when editing) and its children
        if (this.isEdit && m.id === this.ministry.id) {
          return false;
        }
        // Only show Ministry and Department types as potential parents
        return ['Ministry', 'Department'].includes(m.ministryType);
      });
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeForm();
        this.clearErrors();
      }
    },
    ministry: {
      handler() {
        if (this.show) {
          this.initializeForm();
        }
      },
      deep: true
    }
  },
  methods: {
    initializeForm() {
      if (this.isEdit) {
        // Edit mode - populate form with existing data
        this.formData = {
          ministryCode: this.ministry.ministryCode || '',
          ministryName: this.ministry.ministryName || '',
          ministryNameEn: this.ministry.ministryNameEn || '',
          description: this.ministry.description || '',
          ministryType: this.ministry.ministryType || 'Ministry',
          parentMinistryId: this.ministry.parentMinistryId || null,
          ministerName: this.ministry.ministerName || '',
          establishedDate: this.ministry.establishedDate ? this.ministry.establishedDate.split('T')[0] : '',
          address: this.ministry.address || '',
          phoneNumber: this.ministry.phoneNumber || '',
          email: this.ministry.email || '',
          website: this.ministry.website || '',
          province: this.ministry.province || '',
          district: this.ministry.district || '',
          status: this.ministry.status || 'Active',
          priority: this.ministry.priority || 0,
          isActive: this.ministry.isActive !== false
        };
      } else {
        // Create mode - reset form
        this.formData = {
          ministryCode: '',
          ministryName: '',
          ministryNameEn: '',
          description: '',
          ministryType: 'Ministry',
          parentMinistryId: null,
          ministerName: '',
          establishedDate: '',
          address: '',
          phoneNumber: '',
          email: '',
          website: '',
          province: '',
          district: '',
          status: 'Active',
          priority: 0,
          isActive: true
        };
      }
    },
    validateForm() {
      this.errors = {};

      // Required fields
      if (!this.formData.ministryCode) {
        this.errors.ministryCode = 'ກະລຸນາປ້ອນລະຫັດກະຊວງ';
      }
      if (!this.formData.ministryName) {
        this.errors.ministryName = 'ກະລຸນາປ້ອນຊື່ກະຊວງ';
      }
      if (!this.formData.ministryType) {
        this.errors.ministryType = 'ກະລຸນາເລືອກປະເພດກະຊວງ';
      }

      // Email validation
      if (this.formData.email && !this.isValidEmail(this.formData.email)) {
        this.errors.email = 'ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ';
      }

      // Website validation
      if (this.formData.website && !this.isValidUrl(this.formData.website)) {
        this.errors.website = 'ຮູບແບບເວັບໄຊຕ໌ບໍ່ຖືກຕ້ອງ';
      }
      return Object.keys(this.errors).length === 0;
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isValidUrl(url) {
      try {
        new URL(url);
        return true;
      } catch (e) {
        return false;
      }
    },
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      try {
        this.loading = true;

        // Clean up form data
        const submitData = {
          ...this.formData
        };

        // Convert empty strings to null for optional fields
        Object.keys(submitData).forEach(key => {
          if (submitData[key] === '') {
            submitData[key] = null;
          }
        });

        // Convert parentMinistryId to number or null
        if (submitData.parentMinistryId) {
          submitData.parentMinistryId = parseInt(submitData.parentMinistryId);
        }
        let response;
        if (this.isEdit) {
          // Update existing ministry
          response = await this.$axios.put(`/api/ministries/${this.ministry.id}`, submitData);
        } else {
          // Create new ministry
          response = await this.$axios.post('/api/ministries', submitData);
        }
        this.$emit('saved', response.data);
        this.closeDialog();
      } catch (error) {
        console.error('Error saving ministry:', error);
        if (error.response && error.response.data) {
          if (error.response.data.errors) {
            // Handle validation errors from server
            this.errors = error.response.data.errors;
          } else {
            // Handle other server errors
            this.showToast(error.response.data.message || 'ມີຂໍ້ຜິດພາດໃນການບັນທຶກ', 'error');
          }
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການບັນທຶກ', 'error');
        }
      } finally {
        this.loading = false;
      }
    },
    closeDialog() {
      this.$emit('close');
    },
    clearErrors() {
      this.errors = {};
    },
    onProvinceChange() {
      // Clear district when province changes
      this.formData.district = '';
    },
    showToast(message, type = 'info') {
      // Use parent's toast method or fallback
      if (this.$parent && this.$parent.showToast) {
        this.$parent.showToast(message, type);
      } else {
        console.log(`${type}: ${message}`);
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(347)["URL"]))

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(664);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5bf60468", content, true, context)
};

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(666);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("01868cb3", content, true, context)
};

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(573);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-e38c8604]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.dialog-container[data-v-e38c8604]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.2);display:flex;flex-direction:column;max-height:90vh;max-width:900px;overflow:hidden;width:100%}.dialog-header[data-v-e38c8604]{background:#f8f9fa;border-bottom:1px solid #e9ecef;justify-content:space-between;padding:20px 24px}.dialog-header[data-v-e38c8604],.dialog-title[data-v-e38c8604]{align-items:center;display:flex}.dialog-title[data-v-e38c8604]{color:#333;font-size:20px;font-weight:600;gap:12px;margin:0}.dialog-close[data-v-e38c8604]{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:20px;padding:8px;transition:all .2s}.dialog-close[data-v-e38c8604]:hover{background-color:#e9ecef;color:#333}.dialog-body[data-v-e38c8604]{flex:1;overflow-y:auto;padding:24px}.dialog-footer[data-v-e38c8604]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:16px 24px}.form-section[data-v-e38c8604]{margin-bottom:32px}.form-section[data-v-e38c8604]:last-child{margin-bottom:0}.section-title[data-v-e38c8604]{align-items:center;border-bottom:2px solid #e9ecef;color:#333;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 20px;padding-bottom:8px}.form-grid[data-v-e38c8604]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-e38c8604]{display:flex;flex-direction:column;gap:6px}.form-group.full-width[data-v-e38c8604]{grid-column:1/-1}.form-label[data-v-e38c8604]{color:#555;font-size:14px;font-weight:500}.form-label.required[data-v-e38c8604]:after{color:#dc3545;content:\" *\"}.form-input[data-v-e38c8604],.form-select[data-v-e38c8604],.form-textarea[data-v-e38c8604]{border:1px solid #ced4da;border-radius:6px;font-size:14px;padding:10px 12px;transition:border-color .2s,box-shadow .2s}.form-input[data-v-e38c8604]:focus,.form-select[data-v-e38c8604]:focus,.form-textarea[data-v-e38c8604]:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0,123,255,.1);outline:none}.form-input.error[data-v-e38c8604],.form-select.error[data-v-e38c8604],.form-textarea.error[data-v-e38c8604]{border-color:#dc3545}.form-textarea[data-v-e38c8604]{min-height:80px;resize:vertical}.form-checkbox[data-v-e38c8604]{align-items:center;color:#555;cursor:pointer;display:flex;font-weight:500;gap:8px}.form-checkbox input[type=checkbox][data-v-e38c8604]{display:none}.checkbox-mark[data-v-e38c8604]{align-items:center;border:2px solid #ced4da;border-radius:4px;display:flex;height:20px;justify-content:center;transition:all .2s;width:20px}.form-checkbox input[type=checkbox]:checked+.checkbox-mark[data-v-e38c8604]{background-color:#007bff;border-color:#007bff}.form-checkbox input[type=checkbox]:checked+.checkbox-mark[data-v-e38c8604]:after{color:#fff;content:\"✓\";font-size:12px;font-weight:700}.error-message[data-v-e38c8604]{color:#dc3545;font-size:12px;margin-top:4px}.btn[data-v-e38c8604]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-e38c8604]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-e38c8604]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-e38c8604]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-outline-secondary[data-v-e38c8604]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-e38c8604]:hover:not(:disabled){background-color:#6c757d;color:#fff}@media (max-width:768px){.dialog-overlay[data-v-e38c8604]{padding:10px}.dialog-container[data-v-e38c8604]{max-width:100%}.form-grid[data-v-e38c8604]{gap:16px;grid-template-columns:1fr}.form-group.full-width[data-v-e38c8604]{grid-column:1}.dialog-header[data-v-e38c8604]{padding:16px 20px}.dialog-body[data-v-e38c8604]{padding:20px}.dialog-footer[data-v-e38c8604]{flex-direction:column-reverse;padding:12px 20px}.btn[data-v-e38c8604]{justify-content:center;width:100%}}@media (max-width:480px){.dialog-title[data-v-e38c8604]{font-size:18px}.section-title[data-v-e38c8604]{font-size:14px}.form-section[data-v-e38c8604]{margin-bottom:24px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(574);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-826b5276]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.dialog-container[data-v-826b5276]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.2);display:flex;flex-direction:column;max-height:90vh;max-width:800px;overflow:hidden;width:100%}.dialog-header[data-v-826b5276]{background:#f8f9fa;border-bottom:1px solid #e9ecef;justify-content:space-between;padding:20px 24px}.dialog-header[data-v-826b5276],.dialog-title[data-v-826b5276]{align-items:center;display:flex}.dialog-title[data-v-826b5276]{color:#333;font-size:20px;font-weight:600;gap:12px;margin:0}.dialog-close[data-v-826b5276]{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:20px;padding:8px;transition:all .2s}.dialog-close[data-v-826b5276]:hover{background-color:#e9ecef;color:#333}.dialog-body[data-v-826b5276]{flex:1;overflow-y:auto;padding:24px}.dialog-footer[data-v-826b5276]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:16px 24px}.ministry-header[data-v-826b5276]{background:linear-gradient(135deg,#f8f9fa,#e9ecef);border:1px solid #e9ecef;border-radius:8px;margin-bottom:32px;padding:24px}.ministry-main-info[data-v-826b5276]{display:flex;flex-direction:column;gap:16px}.ministry-name-section[data-v-826b5276]{display:flex;flex-direction:column;gap:8px}.ministry-name[data-v-826b5276]{color:#333;font-size:24px;font-weight:700;margin:0}.ministry-name-en[data-v-826b5276]{color:#666;font-size:16px;font-style:italic;margin:0}.ministry-badges[data-v-826b5276]{display:flex;flex-wrap:wrap;gap:8px}.ministry-code-badge[data-v-826b5276]{align-items:center;background:#6c757d;color:#fff;display:flex;font-family:monospace;gap:6px}.ministry-code-badge[data-v-826b5276],.ministry-type-badge[data-v-826b5276]{border-radius:4px;font-size:12px;font-weight:500;padding:4px 12px}.ministry-type-badge[data-v-826b5276]{text-transform:uppercase}.type-ministry[data-v-826b5276]{background-color:#e7f3ff;color:#0056b3}.type-department[data-v-826b5276]{background-color:#d4edda;color:#155724}.type-agency[data-v-826b5276]{background-color:#fff3cd;color:#856404}.type-commission[data-v-826b5276]{background-color:#d1ecf1;color:#0c5460}.status-badge[data-v-826b5276]{align-items:center;border-radius:4px;display:flex;font-size:12px;font-weight:500;gap:4px;padding:4px 12px}.status-active[data-v-826b5276]{background-color:#d4edda;color:#155724}.status-inactive[data-v-826b5276]{background-color:#f8d7da;color:#721c24}.status-restructured[data-v-826b5276]{background-color:#fff3cd;color:#856404}.status-merged[data-v-826b5276]{background-color:#d1ecf1;color:#0c5460}.ministry-description[data-v-826b5276]{background:#fff;border:1px solid #e9ecef;border-radius:6px;padding:16px}.ministry-description p[data-v-826b5276]{color:#555;line-height:1.6;margin:0}.info-sections[data-v-826b5276]{display:flex;flex-direction:column;gap:24px}.info-section[data-v-826b5276]{background:#fff;border:1px solid #e9ecef;border-radius:8px;overflow:hidden}.section-title[data-v-826b5276]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;color:#333;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0;padding:16px 20px}.info-grid[data-v-826b5276]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr;padding:20px}.info-item[data-v-826b5276]{display:flex;flex-direction:column;gap:6px}.info-item.full-width[data-v-826b5276]{grid-column:1/-1}.info-label[data-v-826b5276]{color:#666;font-size:14px;font-weight:500}.info-value[data-v-826b5276]{color:#333;font-size:15px}.hierarchy-item[data-v-826b5276]{border-bottom:1px solid #e9ecef;padding:20px}.hierarchy-item[data-v-826b5276]:last-child{border-bottom:none}.parent-ministry[data-v-826b5276]{align-items:center;background:#e7f3ff;border:1px solid #b3d7ff;border-radius:6px;display:flex;gap:8px;margin-top:8px;padding:12px 16px}.parent-name[data-v-826b5276]{color:#0056b3;font-weight:500}.parent-code[data-v-826b5276]{color:#666;font-family:monospace;font-size:14px}.sub-ministries-list[data-v-826b5276]{display:flex;flex-direction:column;gap:8px;margin-top:8px}.sub-ministry-item[data-v-826b5276]{align-items:center;background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;display:flex;justify-content:space-between;padding:12px 16px}.sub-ministry-info[data-v-826b5276]{display:flex;flex-direction:column;gap:4px}.sub-ministry-name[data-v-826b5276]{color:#333;font-weight:500}.sub-ministry-code[data-v-826b5276]{color:#666;font-family:monospace;font-size:12px}.sub-ministry-type[data-v-826b5276]{border-radius:3px;font-size:11px;font-weight:500;padding:2px 8px;text-transform:uppercase}.minister-info[data-v-826b5276]{align-items:center;color:#333;display:flex;gap:8px}.contact-grid[data-v-826b5276]{display:flex;flex-direction:column;gap:16px;padding:20px}.contact-item[data-v-826b5276]{align-items:flex-start;background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;display:flex;gap:16px;padding:16px}.contact-icon[data-v-826b5276]{align-items:center;background:#007bff;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.contact-content[data-v-826b5276]{display:flex;flex:1;flex-direction:column;gap:4px}.contact-label[data-v-826b5276]{color:#666;font-size:14px;font-weight:500}.contact-value[data-v-826b5276]{align-items:center;color:#007bff;display:flex;font-size:15px;gap:6px;-webkit-text-decoration:none;text-decoration:none}.contact-value[data-v-826b5276]:hover{-webkit-text-decoration:underline;text-decoration:underline}.location-info[data-v-826b5276]{display:flex;flex-direction:column;gap:16px;padding:20px}.location-item[data-v-826b5276]{align-items:flex-start;background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;display:flex;gap:16px;padding:16px}.location-icon[data-v-826b5276]{align-items:center;background:#28a745;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.location-content[data-v-826b5276]{display:flex;flex:1;flex-direction:column;gap:4px}.location-label[data-v-826b5276]{color:#666;font-size:14px;font-weight:500}.location-value[data-v-826b5276]{color:#333;font-size:15px;line-height:1.5}.status-indicator[data-v-826b5276]{align-items:center;display:flex;font-weight:500;gap:6px}.status-indicator.active[data-v-826b5276]{color:#28a745}.status-indicator.inactive[data-v-826b5276]{color:#dc3545}.no-data[data-v-826b5276]{color:#666;padding:60px 20px;text-align:center}.no-data i[data-v-826b5276]{color:#ccc;font-size:48px;margin-bottom:16px}.no-data p[data-v-826b5276]{font-size:16px;margin:0}.btn[data-v-826b5276]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn-primary[data-v-826b5276]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-826b5276]:hover{background-color:#0056b3;border-color:#0056b3}.btn-outline-secondary[data-v-826b5276]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-826b5276]:hover{background-color:#6c757d;color:#fff}@media (max-width:768px){.dialog-overlay[data-v-826b5276]{padding:10px}.dialog-container[data-v-826b5276]{max-width:100%}.ministry-name[data-v-826b5276]{font-size:20px}.ministry-badges[data-v-826b5276]{align-items:flex-start;flex-direction:column}.info-grid[data-v-826b5276]{gap:16px;grid-template-columns:1fr}.info-item.full-width[data-v-826b5276]{grid-column:1}.sub-ministry-item[data-v-826b5276]{align-items:flex-start;flex-direction:column;gap:8px}.dialog-footer[data-v-826b5276]{flex-direction:column-reverse}.btn[data-v-826b5276]{justify-content:center;width:100%}}@media (max-width:480px){.dialog-header[data-v-826b5276]{padding:16px 20px}.dialog-body[data-v-826b5276]{padding:20px}.ministry-header[data-v-826b5276]{padding:16px}.ministry-name[data-v-826b5276]{font-size:18px}.contact-item[data-v-826b5276],.location-item[data-v-826b5276]{align-items:center;flex-direction:column;gap:12px;text-align:center}.contact-content[data-v-826b5276],.location-content[data-v-826b5276]{align-items:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ministry/MinistryViewDialog.vue?vue&type=template&id=826b5276&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeDialog.apply(null, arguments);
      }
    }
  }, [_vm._ssrNode("<div class=\"dialog-container\" data-v-826b5276><div class=\"dialog-header\" data-v-826b5276><h3 class=\"dialog-title\" data-v-826b5276><i class=\"fas fa-eye\" data-v-826b5276></i>\n        ລາຍລະອຽດກະຊວງ\n      </h3> <button class=\"dialog-close\" data-v-826b5276><i class=\"fas fa-times\" data-v-826b5276></i></button></div> <div class=\"dialog-body\" data-v-826b5276>" + (_vm.ministry ? "<div class=\"ministry-details\" data-v-826b5276><div class=\"ministry-header\" data-v-826b5276><div class=\"ministry-main-info\" data-v-826b5276><div class=\"ministry-name-section\" data-v-826b5276><h2 class=\"ministry-name\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.ministryName)) + "</h2> " + (_vm.ministry.ministryNameEn ? "<p class=\"ministry-name-en\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.ministryNameEn)) + "</p>" : "<!---->") + " <div class=\"ministry-badges\" data-v-826b5276><span class=\"ministry-code-badge\" data-v-826b5276><i class=\"fas fa-barcode\" data-v-826b5276></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.ministry.ministryCode) + "\n                ") + "</span> <span" + _vm._ssrClass("ministry-type-badge", _vm.getMinistryTypeClass(_vm.ministry.ministryType)) + " data-v-826b5276>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.ministry.ministryType) + "\n                ") + "</span> <span" + _vm._ssrClass("status-badge", _vm.getStatusClass(_vm.ministry.status)) + " data-v-826b5276><i" + _vm._ssrClass(null, _vm.getStatusIcon(_vm.ministry.status)) + " data-v-826b5276></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getStatusText(_vm.ministry.status)) + "\n                ") + "</span></div></div> " + (_vm.ministry.description ? "<div class=\"ministry-description\" data-v-826b5276><p data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.description)) + "</p></div>" : "<!---->") + "</div></div> <div class=\"info-sections\" data-v-826b5276><div class=\"info-section\" data-v-826b5276><h4 class=\"section-title\" data-v-826b5276><i class=\"fas fa-info-circle\" data-v-826b5276></i>\n              ຂໍ້ມູນພື້ນຖານ\n            </h4> <div class=\"info-grid\" data-v-826b5276><div class=\"info-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ລະຫັດກະຊວງ</label> <span class=\"info-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.ministryCode)) + "</span></div> <div class=\"info-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ປະເພດ</label> <span class=\"info-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.ministryType)) + "</span></div> <div class=\"info-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ສະຖານະ</label> <span class=\"info-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.getStatusText(_vm.ministry.status))) + "</span></div> <div class=\"info-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ລຳດັບຄວາມສຳຄັນ</label> <span class=\"info-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.priority || 0)) + "</span></div> " + (_vm.ministry.establishedDate ? "<div class=\"info-item full-width\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ວັນທີ່ສ້າງຕັ້ງ</label> <span class=\"info-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.ministry.establishedDate))) + "</span></div>" : "<!---->") + "</div></div> " + (_vm.ministry.parentMinistry || _vm.ministry.subMinistries && _vm.ministry.subMinistries.length > 0 ? "<div class=\"info-section\" data-v-826b5276><h4 class=\"section-title\" data-v-826b5276><i class=\"fas fa-sitemap\" data-v-826b5276></i>\n              ໂຄງສ້າງລຳດັບຊັ້ນ\n            </h4> " + (_vm.ministry.parentMinistry ? "<div class=\"hierarchy-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ກະຊວງແມ່</label> <div class=\"parent-ministry\" data-v-826b5276><i class=\"fas fa-level-up-alt\" data-v-826b5276></i> <span class=\"parent-name\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.parentMinistry.ministryName)) + "</span> <span class=\"parent-code\" data-v-826b5276>" + _vm._ssrEscape("(" + _vm._s(_vm.ministry.parentMinistry.ministryCode) + ")") + "</span></div></div>" : "<!---->") + " " + (_vm.ministry.subMinistries && _vm.ministry.subMinistries.length > 0 ? "<div class=\"hierarchy-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>" + _vm._ssrEscape("ຫົວໜ່ວຍງານຂ້າງລຸ່ມ (" + _vm._s(_vm.ministry.subMinistries.length) + ")") + "</label> <div class=\"sub-ministries-list\" data-v-826b5276>" + _vm._ssrList(_vm.ministry.subMinistries, function (subMinistry) {
    return "<div class=\"sub-ministry-item\" data-v-826b5276><div class=\"sub-ministry-info\" data-v-826b5276><span class=\"sub-ministry-name\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(subMinistry.ministryName)) + "</span> <span class=\"sub-ministry-code\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(subMinistry.ministryCode)) + "</span></div> <span" + _vm._ssrClass("sub-ministry-type", _vm.getMinistryTypeClass(subMinistry.ministryType)) + " data-v-826b5276>" + _vm._ssrEscape("\n                    " + _vm._s(subMinistry.ministryType) + "\n                  ") + "</span></div>";
  }) + "</div></div>" : "<!---->") + "</div>" : "<!---->") + " " + (_vm.ministry.ministerName ? "<div class=\"info-section\" data-v-826b5276><h4 class=\"section-title\" data-v-826b5276><i class=\"fas fa-user-tie\" data-v-826b5276></i>\n              ຂໍ້ມູນບຸກຄະລາກອນ\n            </h4> <div class=\"info-grid\" data-v-826b5276><div class=\"info-item full-width\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ລັດຖະມົນຕີ</label> <div class=\"minister-info\" data-v-826b5276><i class=\"fas fa-user\" data-v-826b5276></i> <span class=\"info-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.ministerName)) + "</span></div></div></div></div>" : "<!---->") + " " + (_vm.ministry.phoneNumber || _vm.ministry.email || _vm.ministry.website ? "<div class=\"info-section\" data-v-826b5276><h4 class=\"section-title\" data-v-826b5276><i class=\"fas fa-address-book\" data-v-826b5276></i>\n              ຂໍ້ມູນຕິດຕໍ່\n            </h4> <div class=\"contact-grid\" data-v-826b5276>" + (_vm.ministry.phoneNumber ? "<div class=\"contact-item\" data-v-826b5276><div class=\"contact-icon\" data-v-826b5276><i class=\"fas fa-phone\" data-v-826b5276></i></div> <div class=\"contact-content\" data-v-826b5276><label class=\"contact-label\" data-v-826b5276>ເບີໂທລະສັບ</label> <a" + _vm._ssrAttr("href", `tel:${_vm.ministry.phoneNumber}`) + " class=\"contact-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.phoneNumber)) + "</a></div></div>" : "<!---->") + " " + (_vm.ministry.email ? "<div class=\"contact-item\" data-v-826b5276><div class=\"contact-icon\" data-v-826b5276><i class=\"fas fa-envelope\" data-v-826b5276></i></div> <div class=\"contact-content\" data-v-826b5276><label class=\"contact-label\" data-v-826b5276>ອີເມວ</label> <a" + _vm._ssrAttr("href", `mailto:${_vm.ministry.email}`) + " class=\"contact-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.email)) + "</a></div></div>" : "<!---->") + " " + (_vm.ministry.website ? "<div class=\"contact-item\" data-v-826b5276><div class=\"contact-icon\" data-v-826b5276><i class=\"fas fa-globe\" data-v-826b5276></i></div> <div class=\"contact-content\" data-v-826b5276><label class=\"contact-label\" data-v-826b5276>ເວັບໄຊຕ໌</label> <a" + _vm._ssrAttr("href", _vm.ministry.website) + " target=\"_blank\" class=\"contact-value\" data-v-826b5276>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.ministry.website) + "\n                    ") + "<i class=\"fas fa-external-link-alt\" data-v-826b5276></i></a></div></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.ministry.province || _vm.ministry.district || _vm.ministry.address ? "<div class=\"info-section\" data-v-826b5276><h4 class=\"section-title\" data-v-826b5276><i class=\"fas fa-map-marker-alt\" data-v-826b5276></i>\n              ຂໍ້ມູນທີ່ຕັ້ງ\n            </h4> <div class=\"location-info\" data-v-826b5276>" + (_vm.ministry.province || _vm.ministry.district ? "<div class=\"location-item\" data-v-826b5276><div class=\"location-icon\" data-v-826b5276><i class=\"fas fa-map-pin\" data-v-826b5276></i></div> <div class=\"location-content\" data-v-826b5276><label class=\"location-label\" data-v-826b5276>ທີ່ຕັ້ງ</label> <div class=\"location-value\" data-v-826b5276>" + (_vm.ministry.province ? "<span data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.province)) + "</span>" : "<!---->") + " " + (_vm.ministry.district && _vm.ministry.province ? "<span data-v-826b5276>, </span>" : "<!---->") + " " + (_vm.ministry.district ? "<span data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.district)) + "</span>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (_vm.ministry.address ? "<div class=\"location-item\" data-v-826b5276><div class=\"location-icon\" data-v-826b5276><i class=\"fas fa-building\" data-v-826b5276></i></div> <div class=\"location-content\" data-v-826b5276><label class=\"location-label\" data-v-826b5276>ທີ່ຢູ່ລາຍລະອຽດ</label> <div class=\"location-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.ministry.address)) + "</div></div></div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"info-section\" data-v-826b5276><h4 class=\"section-title\" data-v-826b5276><i class=\"fas fa-clock\" data-v-826b5276></i>\n              ຂໍ້ມູນລະບົບ\n            </h4> <div class=\"info-grid\" data-v-826b5276><div class=\"info-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ວັນທີ່ສ້າງ</label> <span class=\"info-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.ministry.createdAt))) + "</span></div> <div class=\"info-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ອັບເດດຄັ້ງສຸດທ້າຍ</label> <span class=\"info-value\" data-v-826b5276>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.ministry.updateTimestamp || _vm.ministry.updatedAt))) + "</span></div> <div class=\"info-item\" data-v-826b5276><label class=\"info-label\" data-v-826b5276>ສະຖານະການໃຊ້ງານ</label> <span" + _vm._ssrClass("status-indicator", _vm.ministry.isActive ? 'active' : 'inactive') + " data-v-826b5276><i" + _vm._ssrClass(null, _vm.ministry.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-826b5276></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.ministry.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n                ") + "</span></div></div></div></div></div>" : "<div class=\"no-data\" data-v-826b5276><i class=\"fas fa-exclamation-triangle\" data-v-826b5276></i> <p data-v-826b5276>ບໍ່ພົບຂໍ້ມູນກະຊວງ</p></div>") + "</div> <div class=\"dialog-footer\" data-v-826b5276><button type=\"button\" class=\"btn btn-outline-secondary\" data-v-826b5276><i class=\"fas fa-times\" data-v-826b5276></i>\n        ປິດ\n      </button> " + (_vm.ministry ? "<button type=\"button\" class=\"btn btn-primary\" data-v-826b5276><i class=\"fas fa-edit\" data-v-826b5276></i>\n        ແກ້ໄຂ\n      </button>" : "<!---->") + "</div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ministry/MinistryViewDialog.vue?vue&type=template&id=826b5276&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ministry/MinistryViewDialog.vue?vue&type=script&lang=js&
/* harmony default export */ var MinistryViewDialogvue_type_script_lang_js_ = ({
  name: 'MinistryViewDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ministry: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    editMinistry() {
      this.closeDialog();
      // Emit event to parent to open edit dialog
      this.$emit('edit', this.ministry);
    },
    getMinistryTypeClass(type) {
      const classes = {
        'Ministry': 'type-ministry',
        'Department': 'type-department',
        'Agency': 'type-agency',
        'Commission': 'type-commission'
      };
      return classes[type] || 'type-default';
    },
    getStatusClass(status) {
      const classes = {
        'Active': 'status-active',
        'Inactive': 'status-inactive',
        'Restructured': 'status-restructured',
        'Merged': 'status-merged'
      };
      return classes[status] || 'status-default';
    },
    getStatusIcon(status) {
      const icons = {
        'Active': 'fas fa-check-circle',
        'Inactive': 'fas fa-times-circle',
        'Restructured': 'fas fa-sync-alt',
        'Merged': 'fas fa-merge'
      };
      return icons[status] || 'fas fa-question-circle';
    },
    getStatusText(status) {
      const texts = {
        'Active': 'ໃຊ້ງານ',
        'Inactive': 'ປິດໃຊ້ງານ',
        'Restructured': 'ປັບໂຄງສ້າງ',
        'Merged': 'ລວມເຂົ້າກັນ'
      };
      return texts[status] || status;
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
    formatDateTime(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
});
// CONCATENATED MODULE: ./components/ministry/MinistryViewDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var ministry_MinistryViewDialogvue_type_script_lang_js_ = (MinistryViewDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ministry/MinistryViewDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(665)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ministry_MinistryViewDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "826b5276",
  "7546f3f9"
  
)

/* harmony default export */ var MinistryViewDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ministry/MinistryDialog.vue?vue&type=template&id=e38c8604&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeDialog.apply(null, arguments);
      }
    }
  }, [_vm._ssrNode("<div class=\"dialog-container\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<div class=\"dialog-header\" data-v-e38c8604><h3 class=\"dialog-title\" data-v-e38c8604><i class=\"fas fa-building\" data-v-e38c8604></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂຂໍ້ມູນກະຊວງ' : 'ເພີ່ມກະຊວງໃໝ່') + "\n      ") + "</h3> <button class=\"dialog-close\" data-v-e38c8604><i class=\"fas fa-times\" data-v-e38c8604></i></button></div> "), _vm._ssrNode("<div class=\"dialog-body\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<form data-v-e38c8604>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<h4 class=\"section-title\" data-v-e38c8604><i class=\"fas fa-info-circle\" data-v-e38c8604></i>\n            ຂໍ້ມູນພື້ນຖານ\n          </h4> "), _vm._ssrNode("<div class=\"form-grid\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-e38c8604><label class=\"form-label required\" data-v-e38c8604>ລະຫັດກະຊວງ</label> <input type=\"text\" placeholder=\"ປ້ອນລະຫັດກະຊວງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.ministryCode) + _vm._ssrClass("form-input", {
    'error': _vm.errors.ministryCode
  }) + " data-v-e38c8604> " + (_vm.errors.ministryCode ? "<span class=\"error-message\" data-v-e38c8604>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.ministryCode) + "\n              ") + "</span>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-e38c8604>ປະເພດກະຊວງ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ministryType,
      expression: "formData.ministryType"
    }],
    staticClass: "form-select",
    class: {
      'error': _vm.errors.ministryType
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
        _vm.$set(_vm.formData, "ministryType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປະເພດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Ministry"
    }
  }, [_vm._v("Ministry")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Department"
    }
  }, [_vm._v("Department")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Agency"
    }
  }, [_vm._v("Agency")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Commission"
    }
  }, [_vm._v("Commission")])]), _vm._ssrNode(" " + (_vm.errors.ministryType ? "<span class=\"error-message\" data-v-e38c8604>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.ministryType) + "\n              ") + "</span>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-e38c8604><label class=\"form-label required\" data-v-e38c8604>ຊື່ກະຊວງ (ລາວ)</label> <input type=\"text\" placeholder=\"ປ້ອນຊື່ກະຊວງເປັນພາສາລາວ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.ministryName) + _vm._ssrClass("form-input", {
    'error': _vm.errors.ministryName
  }) + " data-v-e38c8604> " + (_vm.errors.ministryName ? "<span class=\"error-message\" data-v-e38c8604>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.ministryName) + "\n              ") + "</span>" : "<!---->") + "</div> <div class=\"form-group full-width\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ຊື່ກະຊວງ (ອັງກິດ)</label> <input type=\"text\" placeholder=\"Enter ministry name in English\"" + _vm._ssrAttr("value", _vm.formData.ministryNameEn) + " class=\"form-input\" data-v-e38c8604></div> <div class=\"form-group full-width\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ຄຳອະທິບາຍ</label> <textarea rows=\"3\" placeholder=\"ປ້ອນຄຳອະທິບາຍກ່ຽວກັບກະຊວງ\" class=\"form-textarea\" data-v-e38c8604>" + _vm._ssrEscape(_vm._s(_vm.formData.description)) + "</textarea></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-section\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<h4 class=\"section-title\" data-v-e38c8604><i class=\"fas fa-sitemap\" data-v-e38c8604></i>\n            ຂໍ້ມູນລຳດັບຊັ້ນ\n          </h4> "), _vm._ssrNode("<div class=\"form-grid\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-e38c8604>ກະຊວງແມ່</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.parentMinistryId,
      expression: "formData.parentMinistryId"
    }],
    staticClass: "form-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "parentMinistryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ບໍ່ມີກະຊວງແມ່")]), _vm._v(" "), _vm._l(_vm.availableParentMinistries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                  " + _vm._s(ministry.ministryName) + " (" + _vm._s(ministry.ministryCode) + ")\n                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ລຳດັບຄວາມສຳຄັນ</label> <input type=\"number\" placeholder=\"0\" min=\"0\"" + _vm._ssrAttr("value", _vm.formData.priority) + " class=\"form-input\" data-v-e38c8604></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-e38c8604>ສະຖານະ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.status,
      expression: "formData.status"
    }],
    staticClass: "form-select",
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
      "value": "Active"
    }
  }, [_vm._v("ໃຊ້ງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Inactive"
    }
  }, [_vm._v("ປິດໃຊ້ງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Restructured"
    }
  }, [_vm._v("ປັບໂຄງສ້າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Merged"
    }
  }, [_vm._v("ລວມເຂົ້າກັນ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ວັນທີ່ສ້າງຕັ້ງ</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.formData.establishedDate) + " class=\"form-input\" data-v-e38c8604></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-e38c8604><h4 class=\"section-title\" data-v-e38c8604><i class=\"fas fa-user-tie\" data-v-e38c8604></i>\n            ຂໍ້ມູນບຸກຄະລາກອນ\n          </h4> <div class=\"form-grid\" data-v-e38c8604><div class=\"form-group full-width\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ຊື່ລັດຖະມົນຕີ</label> <input type=\"text\" placeholder=\"ປ້ອນຊື່ລັດຖະມົນຕີ\"" + _vm._ssrAttr("value", _vm.formData.ministerName) + " class=\"form-input\" data-v-e38c8604></div></div></div> <div class=\"form-section\" data-v-e38c8604><h4 class=\"section-title\" data-v-e38c8604><i class=\"fas fa-address-book\" data-v-e38c8604></i>\n            ຂໍ້ມູນຕິດຕໍ່\n          </h4> <div class=\"form-grid\" data-v-e38c8604><div class=\"form-group\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ເບີໂທລະສັບ</label> <input type=\"tel\" placeholder=\"020 xxxxxxxx\"" + _vm._ssrAttr("value", _vm.formData.phoneNumber) + " class=\"form-input\" data-v-e38c8604></div> <div class=\"form-group\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ອີເມວ</label> <input type=\"email\" placeholder=\"example@gov.la\"" + _vm._ssrAttr("value", _vm.formData.email) + _vm._ssrClass("form-input", {
    'error': _vm.errors.email
  }) + " data-v-e38c8604> " + (_vm.errors.email ? "<span class=\"error-message\" data-v-e38c8604>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.email) + "\n              ") + "</span>" : "<!---->") + "</div> <div class=\"form-group full-width\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ເວັບໄຊຕ໌</label> <input type=\"url\" placeholder=\"https://example.gov.la\"" + _vm._ssrAttr("value", _vm.formData.website) + _vm._ssrClass("form-input", {
    'error': _vm.errors.website
  }) + " data-v-e38c8604> " + (_vm.errors.website ? "<span class=\"error-message\" data-v-e38c8604>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.website) + "\n              ") + "</span>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"form-section\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<h4 class=\"section-title\" data-v-e38c8604><i class=\"fas fa-map-marker-alt\" data-v-e38c8604></i>\n            ຂໍ້ມູນທີ່ຕັ້ງ\n          </h4> "), _vm._ssrNode("<div class=\"form-grid\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-e38c8604>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-e38c8604>ແຂວງ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.province,
      expression: "formData.province"
    }],
    staticClass: "form-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "province", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onProvinceChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກແຂວງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ວຽງຈັນ"
    }
  }, [_vm._v("ວຽງຈັນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ລວງພະບາງ"
    }
  }, [_vm._v("ລວງພະບາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ສະຫວັນນະເຂດ"
    }
  }, [_vm._v("ສະຫວັນນະເຂດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ຈຳປາສັກ"
    }
  }, [_vm._v("ຈຳປາສັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ອັດຕະປື"
    }
  }, [_vm._v("ອັດຕະປື")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ບໍລິຄຳໄຊ"
    }
  }, [_vm._v("ບໍລິຄຳໄຊ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ຄຳມ່ວນ"
    }
  }, [_vm._v("ຄຳມ່ວນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ຜົ້ງສາລີ"
    }
  }, [_vm._v("ຜົ້ງສາລີ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ສາລະວັນ"
    }
  }, [_vm._v("ສາລະວັນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ເຊກອງ"
    }
  }, [_vm._v("ເຊກອງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ຫົວພັນ"
    }
  }, [_vm._v("ຫົວພັນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ອຸດົມໄຊ"
    }
  }, [_vm._v("ອຸດົມໄຊ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ບໍ່ແກ້ວ"
    }
  }, [_vm._v("ບໍ່ແກ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ຫຼວງນ້ຳທາ"
    }
  }, [_vm._v("ຫຼວງນ້ຳທາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ຫຼວງພະບາງ"
    }
  }, [_vm._v("ຫຼວງພະບາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ໄຊຍະບູລີ"
    }
  }, [_vm._v("ໄຊຍະບູລີ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ວຽງຈັນ"
    }
  }, [_vm._v("ວຽງຈັນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ໄຊສົມບູນ"
    }
  }, [_vm._v("ໄຊສົມບູນ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ເມືອງ</label> <input type=\"text\" placeholder=\"ປ້ອນຊື່ເມືອງ\"" + _vm._ssrAttr("value", _vm.formData.district) + " class=\"form-input\" data-v-e38c8604></div> <div class=\"form-group full-width\" data-v-e38c8604><label class=\"form-label\" data-v-e38c8604>ທີ່ຢູ່</label> <textarea rows=\"3\" placeholder=\"ປ້ອນທີ່ຢູ່ລາຍລະອຽດ\" class=\"form-textarea\" data-v-e38c8604>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-e38c8604><div class=\"form-group\" data-v-e38c8604><label class=\"form-checkbox\" data-v-e38c8604><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.isActive) ? _vm._i(_vm.formData.isActive, null) > -1 : _vm.formData.isActive) + " data-v-e38c8604> <span class=\"checkbox-mark\" data-v-e38c8604></span>\n              ເປີດໃຊ້ງານ\n            </label></div></div>")], 2)]), _vm._ssrNode(" <div class=\"dialog-footer\" data-v-e38c8604><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-outline-secondary\" data-v-e38c8604>\n        ຍົກເລີກ\n      </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-primary\" data-v-e38c8604>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-e38c8604></i>" : "<i class=\"fas fa-save\" data-v-e38c8604></i>") + _vm._ssrEscape("\n        " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n      ") + "</button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ministry/MinistryDialog.vue?vue&type=template&id=e38c8604&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ministry/MinistryDialog.vue?vue&type=script&lang=js&
var MinistryDialogvue_type_script_lang_js_ = __webpack_require__(526);

// CONCATENATED MODULE: ./components/ministry/MinistryDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var ministry_MinistryDialogvue_type_script_lang_js_ = (MinistryDialogvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ministry/MinistryDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(663)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ministry_MinistryDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e38c8604",
  "5fc7dd18"
  
)

/* harmony default export */ var MinistryDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(939);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("55d50f91", content, true, context)
};

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68498262_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68498262_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68498262_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68498262_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_68498262_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ministry-page[data-v-68498262]{background-color:#f8f9fa;min-height:100vh;padding:24px}.page-header[data-v-68498262]{align-items:center;background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);display:flex;justify-content:space-between;margin-bottom:24px;padding:24px}.header-content[data-v-68498262]{flex:1}.page-title[data-v-68498262]{align-items:center;color:#333;display:flex;font-size:28px;font-weight:600;gap:12px;margin:0 0 8px}.page-subtitle[data-v-68498262]{color:#666;font-size:16px;margin:0}.header-actions[data-v-68498262]{display:flex;gap:12px}.filters-section[data-v-68498262]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:24px;padding:20px}.filter-row[data-v-68498262]{align-items:end;display:flex;flex-wrap:wrap;gap:16px}.filter-group[data-v-68498262]{display:flex;flex-direction:column;gap:8px;min-width:200px}.filter-label[data-v-68498262]{color:#555;font-size:14px;font-weight:500}.search-input-wrapper[data-v-68498262]{position:relative}.search-icon[data-v-68498262]{color:#666;font-size:14px;left:12px;position:absolute;top:50%;transform:translateY(-50%)}.search-input[data-v-68498262]{border:1px solid #ced4da;border-radius:6px;font-size:14px;padding:10px 12px 10px 36px;transition:border-color .2s;width:100%}.search-input[data-v-68498262]:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0,123,255,.1);outline:none}.filter-select[data-v-68498262]{background:#fff;border:1px solid #ced4da;border-radius:6px;cursor:pointer;font-size:14px;padding:10px 12px;transition:border-color .2s}.filter-select[data-v-68498262]:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0,123,255,.1);outline:none}.filter-actions[data-v-68498262]{align-items:end;display:flex}.stats-section[data-v-68498262]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin-bottom:24px}.stat-card[data-v-68498262]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);gap:16px;padding:24px}.stat-card[data-v-68498262],.stat-icon[data-v-68498262]{align-items:center;display:flex}.stat-icon[data-v-68498262]{border-radius:50%;color:#fff;font-size:20px;height:48px;justify-content:center;width:48px}.stat-icon-primary[data-v-68498262]{background-color:#007bff}.stat-icon-success[data-v-68498262]{background-color:#28a745}.stat-icon-warning[data-v-68498262]{background-color:#ffc107}.stat-icon-info[data-v-68498262]{background-color:#17a2b8}.stat-content[data-v-68498262]{flex:1}.stat-number[data-v-68498262]{color:#333;font-size:24px;font-weight:600;margin:0 0 4px}.stat-label[data-v-68498262]{color:#666;font-size:14px;margin:0}.hierarchy-section[data-v-68498262]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:24px;overflow:hidden}.section-header[data-v-68498262]{border-bottom:1px solid #e9ecef;padding:20px}.section-title[data-v-68498262]{color:#333;font-size:18px;font-weight:600;margin:0}.hierarchy-wrapper[data-v-68498262]{padding:20px}.hierarchy-tree[data-v-68498262]{display:flex;flex-direction:column;gap:20px}.ministry-node[data-v-68498262]{border:1px solid #e9ecef;border-radius:8px;overflow:hidden}.ministry-card[data-v-68498262]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.ministry-card.type-ministry[data-v-68498262]{border-left:4px solid #007bff}.ministry-card.type-department[data-v-68498262]{border-left:4px solid #28a745}.ministry-card.type-agency[data-v-68498262]{border-left:4px solid #ffc107}.ministry-card.type-commission[data-v-68498262]{border-left:4px solid #17a2b8}.ministry-info[data-v-68498262]{flex:1}.ministry-header[data-v-68498262]{align-items:center;display:flex;gap:12px;margin-bottom:8px}.ministry-name[data-v-68498262]{color:#333;font-size:18px;font-weight:600;margin:0}.ministry-code[data-v-68498262]{background:#6c757d;border-radius:4px;color:#fff;font-size:12px;padding:2px 8px}.ministry-details[data-v-68498262]{margin-bottom:12px}.minister-name[data-v-68498262],.ministry-location[data-v-68498262]{color:#666;font-size:14px;margin:4px 0}.minister-name[data-v-68498262],.ministry-location[data-v-68498262],.ministry-meta[data-v-68498262]{align-items:center;display:flex;gap:8px}.ministry-actions[data-v-68498262]{display:flex;gap:8px}.sub-ministries[data-v-68498262]{background:#fff;padding:16px}.sub-ministry-card[data-v-68498262]{align-items:center;background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;display:flex;justify-content:space-between;margin-bottom:8px;padding:12px 16px}.sub-ministry-card[data-v-68498262]:last-child{margin-bottom:0}.sub-ministry-info[data-v-68498262]{flex:1}.sub-ministry-header[data-v-68498262]{align-items:center;display:flex;gap:8px;margin-bottom:4px}.sub-ministry-name[data-v-68498262]{color:#333;font-size:14px;font-weight:500;margin:0}.sub-ministry-code[data-v-68498262]{background:#6c757d;border-radius:3px;color:#fff;font-family:monospace;font-size:10px;padding:1px 6px}.sub-ministry-actions[data-v-68498262]{display:flex;gap:4px}.table-section[data-v-68498262]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.table-header[data-v-68498262]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.table-title[data-v-68498262]{color:#333;font-size:18px;font-weight:600;margin:0}.table-info[data-v-68498262]{color:#666;font-size:14px}.table-wrapper[data-v-68498262]{overflow-x:auto}.data-table[data-v-68498262]{border-collapse:collapse;width:100%}.data-table td[data-v-68498262],.data-table th[data-v-68498262]{border-bottom:1px solid #e9ecef;padding:12px;text-align:left}.data-table th[data-v-68498262]{background-color:#f8f9fa;color:#333;font-size:14px;font-weight:600}.data-table td[data-v-68498262]{color:#555;font-size:14px}.ministry-code[data-v-68498262]{align-items:center;display:flex;font-family:monospace;font-weight:500;gap:8px}.ministry-info-cell[data-v-68498262]{max-width:250px}.ministry-name-primary[data-v-68498262]{color:#333;font-weight:600;margin-bottom:4px}.ministry-name-en[data-v-68498262]{color:#666;font-size:13px;font-style:italic;margin-bottom:4px}.parent-ministry[data-v-68498262]{align-items:center;color:#007bff;display:flex;font-size:12px;gap:4px}.location-info .district[data-v-68498262]{color:#666;font-size:13px}.contact-info[data-v-68498262]{max-width:200px}.contact-item[data-v-68498262]{align-items:center;color:#666;display:flex;font-size:12px;gap:6px;margin-bottom:2px}.contact-item[data-v-68498262]:last-child{margin-bottom:0}.ministry-type-badge[data-v-68498262]{border-radius:4px;font-size:12px;font-weight:500;padding:4px 8px;text-transform:uppercase}.type-ministry[data-v-68498262]{background-color:#e7f3ff;color:#0056b3}.type-department[data-v-68498262]{background-color:#d4edda;color:#155724}.type-agency[data-v-68498262]{background-color:#fff3cd;color:#856404}.type-commission[data-v-68498262]{background-color:#d1ecf1;color:#0c5460}.status-badge[data-v-68498262]{align-items:center;border-radius:4px;display:flex;font-size:12px;font-weight:500;gap:4px;padding:4px 8px}.status-active[data-v-68498262]{background-color:#d4edda;color:#155724}.status-inactive[data-v-68498262]{background-color:#f8d7da;color:#721c24}.status-restructured[data-v-68498262]{background-color:#fff3cd;color:#856404}.status-merged[data-v-68498262]{background-color:#d1ecf1;color:#0c5460}.action-buttons[data-v-68498262]{display:flex;gap:6px}.btn-icon[data-v-68498262]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:flex;font-size:12px;height:32px;justify-content:center;transition:all .2s;width:32px}.btn-icon-sm[data-v-68498262]{font-size:10px;height:24px;width:24px}.btn-icon[data-v-68498262]:hover{transform:translateY(-1px)}.btn-icon[data-v-68498262]:disabled{cursor:not-allowed;opacity:.5}.btn-icon-primary[data-v-68498262]{background-color:#007bff;color:#fff}.btn-icon-primary[data-v-68498262]:hover:not(:disabled){background-color:#0056b3}.btn-icon-info[data-v-68498262]{background-color:#17a2b8;color:#fff}.btn-icon-info[data-v-68498262]:hover:not(:disabled){background-color:#138496}.btn-icon-warning[data-v-68498262]{background-color:#ffc107;color:#333}.btn-icon-warning[data-v-68498262]:hover:not(:disabled){background-color:#e0a800}.btn-icon-danger[data-v-68498262]{background-color:#dc3545;color:#fff}.btn-icon-danger[data-v-68498262]:hover:not(:disabled){background-color:#c82333}.empty-state[data-v-68498262],.loading-state[data-v-68498262]{color:#666;padding:60px 20px;text-align:center}.loading-state i[data-v-68498262]{color:#007bff;font-size:32px;margin-bottom:16px}.empty-state i[data-v-68498262]{color:#ccc;font-size:64px;margin-bottom:16px}.empty-state h3[data-v-68498262]{color:#333;font-size:20px;margin:0 0 8px}.empty-state p[data-v-68498262]{font-size:16px;margin:0}.pagination-section[data-v-68498262]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px}.pagination-info[data-v-68498262]{color:#666;font-size:14px}.pagination-controls[data-v-68498262]{align-items:center;display:flex;gap:8px}.page-info[data-v-68498262]{color:#666;font-size:14px;padding:0 16px}.btn[data-v-68498262]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-68498262]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-68498262]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-68498262]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-68498262]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-68498262]:hover:not(:disabled){background-color:#545b62;border-color:#545b62}.btn-outline-secondary[data-v-68498262]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-68498262]:hover:not(:disabled){background-color:#6c757d;color:#fff}@media (max-width:768px){.ministry-page[data-v-68498262]{padding:16px}.page-header[data-v-68498262]{align-items:stretch;flex-direction:column;gap:16px}.filter-row[data-v-68498262]{flex-direction:column;gap:12px}.filter-group[data-v-68498262]{min-width:auto}.stats-section[data-v-68498262]{grid-template-columns:1fr}.ministry-card[data-v-68498262]{align-items:stretch;flex-direction:column;gap:16px}.ministry-actions[data-v-68498262]{justify-content:center}.sub-ministry-card[data-v-68498262]{align-items:stretch;flex-direction:column;gap:12px}.sub-ministry-actions[data-v-68498262]{justify-content:center}.table-wrapper[data-v-68498262]{overflow-x:scroll}.data-table[data-v-68498262]{min-width:1000px}.pagination-section[data-v-68498262]{flex-direction:column;gap:16px}}@media (max-width:480px){.page-title[data-v-68498262]{font-size:24px}.stat-card[data-v-68498262]{padding:16px}.stat-number[data-v-68498262]{font-size:20px}.ministry-card[data-v-68498262]{padding:16px}.ministry-name[data-v-68498262]{font-size:16px}.action-buttons[data-v-68498262]{flex-direction:column;gap:4px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map