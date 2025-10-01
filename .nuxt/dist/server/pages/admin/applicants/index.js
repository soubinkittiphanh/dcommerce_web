exports.ids = [152,18];
exports.modules = {

/***/ 1145:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(347);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/applicants/index.vue?vue&type=template&id=02868df3&scoped=true&












var applicantsvue_type_template_id_02868df3_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "applicant-summary-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-02868df3>", "</div>", [_vm._ssrNode("<div class=\"header-content\" data-v-02868df3>", "</div>", [_vm._ssrNode("<h1 class=\"page-title\" data-v-02868df3>ລະບົບຈັດການຜູ້ສະໝັກງານ</h1> "), _vm._ssrNode("<div class=\"header-actions\" data-v-02868df3>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.openCreateDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n          ເພີ່ມຜູ້ສະໝັກໃໝ່\n        ")], 1), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary"
    },
    on: {
      "click": _vm.exportData
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-download")]), _vm._v("\n          Export\n        ")], 1)], 2)], 2)]), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "filter-section"
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄົ້ນຫາ",
      "placeholder": "ຊື່, ເບີໂທ, ໜັງສືເດີນທາງ...",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "prepend-inner-icon": "mdi-magnify"
    },
    model: {
      value: _vm.filters.search,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "search", $$v);
      },
      expression: "filters.search"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.jobBatchOptions,
      "label": "Job Batch",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "clearable": ""
    },
    model: {
      value: _vm.filters.jobBatchId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "jobBatchId", $$v);
      },
      expression: "filters.jobBatchId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.genderOptions,
      "label": "ເພດ",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "clearable": ""
    },
    model: {
      value: _vm.filters.gender,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "gender", $$v);
      },
      expression: "filters.gender"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "ສະຖານະ",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "clearable": ""
    },
    model: {
      value: _vm.filters.status,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "status", $$v);
      },
      expression: "filters.status"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "block": ""
    },
    on: {
      "click": _vm.applyFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-magnify")]), _vm._v("\n            ຄົ້ນຫາ\n          ")], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "mt-4"
  }, [_c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.filteredApplicants,
      "loading": _vm.loading,
      "items-per-page": 25,
      "footer-props": {
        'items-per-page-options': [10, 25, 50, 100]
      }
    },
    scopedSlots: _vm._u([{
      key: "item.id",
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(item.id) + "\n      ")];
      }
    }, {
      key: "item.name",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "applicant-name"
        }, [_c('strong', [_vm._v(_vm._s(_vm.getFullName(item)))]), _vm._v(" "), _c('div', {
          staticClass: "contact-info"
        }, [_c('span', {
          staticClass: "phone"
        }, [_vm._v(_vm._s(item.phone))])])])];
      }
    }, {
      key: "item.gender",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": item.gender === 'male' ? 'blue' : 'pink',
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.formatGender(item.gender)) + "\n        ")])];
      }
    }, {
      key: "item.age",
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(item.age || '-') + " ປີ\n      ")];
      }
    }, {
      key: "item.phone",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "contact-details"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "left": ""
          }
        }, [_vm._v("mdi-phone")]), _vm._v("\n          " + _vm._s(item.phone) + "\n        ")], 1)];
      }
    }, {
      key: "item.contractStartDate",
      fn: function ({
        item
      }) {
        var _item$jobBatch;
        return [_c('div', {
          staticClass: "contact-details"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "left": ""
          }
        }, [_vm._v("mdi-calendar-start")]), _vm._v("\n          " + _vm._s(((_item$jobBatch = item.jobBatch) === null || _item$jobBatch === void 0 ? void 0 : _item$jobBatch.batchStartDate) || '-') + "\n        ")], 1)];
      }
    }, {
      key: "item.contractEndDate",
      fn: function ({
        item
      }) {
        var _item$jobBatch2;
        return [_c('div', {
          staticClass: "contact-details"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "left": ""
          }
        }, [_vm._v("mdi-calendar-end")]), _vm._v("\n          " + _vm._s(((_item$jobBatch2 = item.jobBatch) === null || _item$jobBatch2 === void 0 ? void 0 : _item$jobBatch2.batchEndDate) || '-') + "\n        ")], 1)];
      }
    }, {
      key: "item.agency",
      fn: function ({
        item
      }) {
        var _item$agency;
        return [_c('div', {
          staticClass: "contact-details"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "left": ""
          }
        }, [_vm._v("mdi-office-building")]), _vm._v("\n          " + _vm._s(((_item$agency = item.agency) === null || _item$agency === void 0 ? void 0 : _item$agency.agencyName) || '-') + "\n        ")], 1)];
      }
    }, {
      key: "item.address",
      fn: function ({
        item
      }) {
        return [item.address ? _c('div', [_vm._v("\n          " + _vm._s(_vm.truncateText(item.address, 20)) + "\n        ")]) : _vm._e()];
      }
    }, {
      key: "item.passportAvailability",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": item.passportAvailability ? 'success' : 'error',
            "text-color": "white"
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "small": ""
          }
        }, [_vm._v("\n            " + _vm._s(item.passportAvailability ? 'mdi-check-circle' : 'mdi-close-circle') + "\n          ")]), _vm._v("\n          " + _vm._s(item.passportAvailability ? 'ມີ' : 'ບໍ່ມີ') + "\n        ")], 1)];
      }
    }, {
      key: "item.status",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": _vm.getStatusColor(item.status),
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.formatStatus(item.status)) + "\n        ")])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "small": "",
            "color": "info"
          },
          on: {
            "click": function ($event) {
              return _vm.editApplicant(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-pencil")])], 1)];
      }
    }])
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": ""
    },
    model: {
      value: _vm.showEditDialog,
      callback: function ($$v) {
        _vm.showEditDialog = $$v;
      },
      expression: "showEditDialog"
    }
  }, [_c(VCard["a" /* default */], [_c('ApplicantForm', {
    key: _vm.dialogKey,
    attrs: {
      "applicant": _vm.selectedApplicant,
      "job-batches": _vm.jobBatches
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onApplicantSave,
      "load-job-batches": _vm.loadJobBatches
    }
  })], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/applicants/index.vue?vue&type=template&id=02868df3&scoped=true&

// EXTERNAL MODULE: ./components/applicants/ApplicantDialog/index.vue + 4 modules
var ApplicantDialog = __webpack_require__(852);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/applicants/index.vue?vue&type=script&lang=js&

/* harmony default export */ var applicantsvue_type_script_lang_js_ = ({
  name: 'ApplicantSummary',
  components: {
    ApplicantForm: ApplicantDialog["default"]
  },
  middleware: 'auths',
  data() {
    return {
      showEditDialog: false,
      selectedApplicant: null,
      dialogKey: 0,
      // Add this
      applicants: [],
      filteredApplicants: [],
      jobBatches: [],
      loading: false,
      filters: {
        search: '',
        gender: '',
        status: '',
        jobBatchId: ''
      },
      headers: [{
        text: 'ID',
        value: 'id',
        sortable: true
      }, {
        text: 'ຊື່ຜູ້ສະໝັກ',
        value: 'name',
        sortable: true
      },
      // { text: 'Job Batch', value: 'jobBatch', sortable: false },
      {
        text: 'ເພດ',
        value: 'gender',
        sortable: true
      }, {
        text: 'ອາຍຸ',
        value: 'age',
        sortable: true
      }, {
        text: 'ຕິດຕໍ່',
        value: 'phone',
        sortable: false
      }, {
        text: 'ທີ່ຢູ່',
        value: 'address',
        sortable: false
      }, {
        text: 'ວັນທີ່ເລີມຕົ້ນສັນຍາ',
        value: 'contractStartDate',
        sortable: false
      }, {
        text: 'ວັນທີ່ສິນສຸດສັນຍາ',
        value: 'contractEndDate',
        sortable: false
      }, {
        text: 'ຕົວແທນສັນຫາ',
        value: 'agency',
        sortable: false
      }, {
        text: 'ໜັງສືເດີນທາງ',
        value: 'passportAvailability',
        sortable: true
      }, {
        text: 'ສະຖານະ',
        value: 'status',
        sortable: true
      }, {
        text: 'ຟັງຊັ່ນ',
        value: 'actions',
        sortable: false,
        align: 'center'
      }],
      genderOptions: [{
        text: 'ທັງໝົດ',
        value: ''
      }, {
        text: 'ຊາຍ',
        value: 'male'
      }, {
        text: 'ຍິງ',
        value: 'female'
      }],
      statusOptions: [{
        text: 'ທັງໝົດ',
        value: ''
      }, {
        text: 'ສໍາພາດ',
        value: 'INTERVIEW'
      }, {
        text: 'ລົງທະບຽນ',
        value: 'REGISTER'
      }, {
        text: 'ປະຕິເສດ',
        value: 'rejected'
      }]
    };
  },
  computed: {
    jobBatchOptions() {
      const batches = this.jobBatches.filter(b => b.id).map(b => ({
        text: `${b.mou.jobCode} ${b.runningNo}${b.workPlace ? ` - ${b.workPlace}` : ''}`,
        value: b.id
      }));
      return [{
        text: 'ທັງໝົດ',
        value: ''
      }, ...batches];
    }
  },
  mounted() {
    this.fetchApplicants();
    this.loadJobBatches();
  },
  methods: {
    async loadJobBatches() {
      try {
        const {
          data
        } = await this.$axios.get('/api/batch-job');
        this.jobBatches = data !== null && data !== void 0 && data.success ? data.data.jobBatches || [] : [];
      } catch (error) {
        console.error('Error loading job batches:', error);
        this.jobBatches = [];
      }
    },
    async fetchApplicants() {
      this.loading = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/applicants', {
          params: {
            page: 1,
            limit: 1000,
            isActive: true
          }
        });
        this.applicants = data !== null && data !== void 0 && data.success ? data.data.applicants || [] : [];
        this.applyFilters();
      } catch (error) {
        console.error('Error fetching applicants:', error);
        this.applicants = [];
      } finally {
        this.loading = false;
      }
    },
    openCreateDialog() {
      this.selectedApplicant = null;
      this.dialogKey++; // Increment key to force re-render
      this.showEditDialog = true;
    },
    editApplicant(applicant) {
      this.selectedApplicant = applicant;
      this.dialogKey++; // Increment key to force re-render
      this.showEditDialog = true;
    },
    closeEditDialog() {
      this.showEditDialog = false;
      this.selectedApplicant = null;
    },
    async onApplicantSave(applicantData) {
      try {
        var _this$selectedApplica, _this$selectedApplica2, _response$data;
        this.loading = true;
        const url = (_this$selectedApplica = this.selectedApplicant) !== null && _this$selectedApplica !== void 0 && _this$selectedApplica.id ? `/api/applicants/${this.selectedApplicant.id}` : '/api/applicants';
        const method = (_this$selectedApplica2 = this.selectedApplicant) !== null && _this$selectedApplica2 !== void 0 && _this$selectedApplica2.id ? 'put' : 'post';
        const response = await this.$axios[method](url, applicantData);
        if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.success) {
          var _this$$toast;
          (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.success('ການບັນທຶກສຳເລັດແລ້ວ');
          this.closeEditDialog();
          await this.fetchApplicants();
        }
      } catch (error) {
        var _this$$toast2, _error$response, _error$response$data;
        console.error('Error saving applicant:', error);
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.error(((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ການບັນທຶກບໍ່ສຳເລັດ');
      } finally {
        this.loading = false;
      }
    },
    applyFilters() {
      let filtered = [...this.applicants];
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase();
        filtered = filtered.filter(a => a.firstName.toLowerCase().includes(search) || a.lastName.toLowerCase().includes(search) || a.phone.includes(search));
      }
      if (this.filters.gender) {
        filtered = filtered.filter(a => a.gender === this.filters.gender);
      }
      if (this.filters.status) {
        filtered = filtered.filter(a => a.status === this.filters.status);
      }
      if (this.filters.jobBatchId) {
        filtered = filtered.filter(a => {
          var _a$jobBatchId;
          return ((_a$jobBatchId = a.jobBatchId) === null || _a$jobBatchId === void 0 ? void 0 : _a$jobBatchId.toString()) === this.filters.jobBatchId.toString();
        });
      }
      this.filteredApplicants = filtered;
    },
    exportData() {
      const csvData = this.convertToCSV(this.filteredApplicants);
      this.downloadCSV(csvData, 'applicants.csv');
    },
    convertToCSV(data) {
      const headers = ['ID', 'First Name', 'Last Name', 'Gender', 'Phone', 'Status'];
      const rows = data.map(r => [r.id, r.firstName, r.lastName, r.gender, r.phone, r.status].join(','));
      return [headers.join(','), ...rows].join('\n');
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
    getFullName(applicant) {
      return `${applicant.firstName} ${applicant.lastName}`;
    },
    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ';
    },
    formatStatus(status) {
      const labels = {
        INTERVIEW: 'ສໍາພາດ',
        REGISTER: 'ລົງທະບຽນ',
        rejected: 'ປະຕິເສດ'
      };
      return labels[status] || status;
    },
    getStatusColor(status) {
      const colors = {
        INTERVIEW: 'warning',
        REGISTER: 'success',
        rejected: 'error'
      };
      return colors[status] || 'grey';
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/applicants/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_applicantsvue_type_script_lang_js_ = (applicantsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/applicants/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(899)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_applicantsvue_type_script_lang_js_,
  applicantsvue_type_template_id_02868df3_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "02868df3",
  "624c7d16"
  
)

/* harmony default export */ var applicants = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(643);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("18a518e5", content, true, context)
};

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_542a8ad9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(548);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_542a8ad9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_542a8ad9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_542a8ad9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_542a8ad9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".applicant-form[data-v-542a8ad9]{background:#fff;display:flex;flex-direction:column;height:100vh}.form-header[data-v-542a8ad9]{background:#01532b;color:#fff;padding:16px 20px}.form-header[data-v-542a8ad9],.stepper[data-v-542a8ad9]{border-bottom:1px solid #e5e7eb;flex-shrink:0}.stepper[data-v-542a8ad9]{align-items:center;background:#f9fafb;display:flex;justify-content:center;padding:16px}.form-content[data-v-542a8ad9]{background:#fafafa;flex:1;overflow-y:auto;padding:20px}.form-footer[data-v-542a8ad9]{background:#fff;border-top:1px solid #e5e7eb;flex-shrink:0;padding:40px 20px}.form-title[data-v-542a8ad9]{font-size:18px;font-weight:600;gap:10px;margin:0}.form-title[data-v-542a8ad9],.step[data-v-542a8ad9]{align-items:center;display:flex}.step[data-v-542a8ad9]{border-radius:8px;cursor:pointer;gap:8px;padding:8px 16px;transition:all .2s}.step.active[data-v-542a8ad9]{background:rgba(1,83,43,.1);color:#01532b}.step.completed[data-v-542a8ad9]{color:#059669}.step[data-v-542a8ad9]:not(.available){cursor:not-allowed;opacity:.5}.step-number[data-v-542a8ad9]{align-items:center;background:#e5e7eb;border-radius:50%;display:flex;font-size:13px;font-weight:600;height:28px;justify-content:center;width:28px}.step.active .step-number[data-v-542a8ad9]{background:#01532b;color:#fff}.step.completed .step-number[data-v-542a8ad9]{background:#059669;color:#fff}.step-label[data-v-542a8ad9]{font-size:15px;font-weight:500}.step-line[data-v-542a8ad9]{background:#e5e7eb;height:2px;margin:0 16px;width:60px}.step-line.completed[data-v-542a8ad9]{background:#059669}.split-layout[data-v-542a8ad9]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 380px}.left-section[data-v-542a8ad9],.right-section[data-v-542a8ad9]{background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:20px}.photo-section[data-v-542a8ad9]{display:flex;flex-direction:column;gap:10px}.photo-section label[data-v-542a8ad9]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px}.photo-upload[data-v-542a8ad9]{align-items:center;background:#f9fafb;border:2px dashed #d1d5db;border-radius:8px;cursor:pointer;display:flex;height:240px;justify-content:center;overflow:hidden;transition:all .3s;width:100%}.photo-upload[data-v-542a8ad9]:hover{background:#f0fdf4;border-color:#01532b}.photo-upload img[data-v-542a8ad9]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.photo-placeholder[data-v-542a8ad9]{align-items:center;color:#6b7280;display:flex;flex-direction:column;font-size:14px;gap:10px}.photo-placeholder i[data-v-542a8ad9]{color:#9ca3af;font-size:40px}.btn-remove[data-v-542a8ad9]{align-items:center;background:#ef4444;border:none;border-radius:6px;color:#fff;cursor:pointer;display:flex;font-size:13px;gap:6px;justify-content:center;padding:8px 16px;transition:background .2s}.btn-remove[data-v-542a8ad9]:hover{background:#dc2626}.passport-photo-section[data-v-542a8ad9]{align-items:center;display:flex;gap:12px}.photo-upload-small[data-v-542a8ad9]{align-items:center;background:#f9fafb;border:2px dashed #d1d5db;border-radius:8px;cursor:pointer;display:flex;height:150px;justify-content:center;overflow:hidden;transition:all .3s;width:150px}.photo-upload-small[data-v-542a8ad9]:hover{background:#f0fdf4;border-color:#01532b}.photo-upload-small img[data-v-542a8ad9]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.photo-placeholder-small[data-v-542a8ad9]{align-items:center;color:#6b7280;display:flex;flex-direction:column;font-size:13px;gap:8px}.photo-placeholder-small i[data-v-542a8ad9]{color:#9ca3af;font-size:32px}.btn-remove-small[data-v-542a8ad9]{align-items:center;background:#ef4444;border:none;border-radius:6px;color:#fff;cursor:pointer;display:flex;font-size:12px;gap:4px;padding:8px 12px;transition:background .2s}.btn-remove-small[data-v-542a8ad9]:hover{background:#dc2626}.batch-summary-card[data-v-542a8ad9]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);grid-column:1/-1;margin-bottom:20px;overflow:hidden}.summary-header[data-v-542a8ad9]{align-items:center;background:hsla(0,0%,100%,.2);color:#fff;display:flex;font-size:15px;font-weight:600;gap:8px;padding:12px 16px}.summary-header i[data-v-542a8ad9]{font-size:18px}.summary-content[data-v-542a8ad9]{grid-gap:12px;background:#fff;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));padding:16px}.summary-row[data-v-542a8ad9]{display:flex;flex-direction:column;gap:4px}.summary-row strong[data-v-542a8ad9]{color:#6b7280;font-size:12px;font-weight:600}.summary-row span[data-v-542a8ad9]{color:#1f2937;font-size:14px;font-weight:500}.priority-low[data-v-542a8ad9]{color:#10b981;font-weight:600}.priority-medium[data-v-542a8ad9]{color:#f59e0b;font-weight:600}.priority-high[data-v-542a8ad9]{color:#ef4444;font-weight:600}.priority-urgent[data-v-542a8ad9]{animation:pulse-542a8ad9 2s infinite;color:#dc2626;font-weight:700}.status-draft[data-v-542a8ad9]{color:#6b7280;font-weight:600}.status-active[data-v-542a8ad9]{color:#10b981;font-weight:600}.status-completed[data-v-542a8ad9]{color:#3b82f6;font-weight:600}.status-cancelled[data-v-542a8ad9]{color:#ef4444;font-weight:600}@keyframes pulse-542a8ad9{0%,to{opacity:1}50%{opacity:.7}}.form-grid[data-v-542a8ad9]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(2,1fr)}.form-grid-step2[data-v-542a8ad9]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(3,1fr)}.form-group[data-v-542a8ad9]{display:flex;flex-direction:column}.form-group.full-width[data-v-542a8ad9],.form-group.passport-photo-group[data-v-542a8ad9]{grid-column:1/-1}.form-group label[data-v-542a8ad9]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin-bottom:6px}.form-group label.required[data-v-542a8ad9]:after{color:#ef4444;content:\"*\";margin-left:2px}.form-group input[data-v-542a8ad9],.form-group select[data-v-542a8ad9],.form-group textarea[data-v-542a8ad9]{background:#fff;border:1px solid #d1d5db;border-radius:6px;font-size:14px;padding:10px 12px;transition:all .2s}.form-group input[data-v-542a8ad9]:focus,.form-group select[data-v-542a8ad9]:focus,.form-group textarea[data-v-542a8ad9]:focus{border-color:#01532b;box-shadow:0 0 0 3px rgba(1,83,43,.1);outline:none}.form-group input.error[data-v-542a8ad9],.form-group select.error[data-v-542a8ad9]{border-color:#ef4444}.form-group textarea[data-v-542a8ad9]{min-height:60px;resize:vertical}.radio-group[data-v-542a8ad9]{display:flex;gap:16px;margin-top:4px}.radio-group label[data-v-542a8ad9]{align-items:center;cursor:pointer;display:flex;font-weight:500;gap:6px;margin-bottom:0}.form-errors[data-v-542a8ad9]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;color:#dc2626;font-size:13px;margin-top:16px;padding:10px 14px}.actions[data-v-542a8ad9]{display:flex;gap:12px;justify-content:space-between}.btn[data-v-542a8ad9]{border:none;border-radius:6px;cursor:pointer;font-size:14px;font-weight:500;padding:10px 20px;transition:all .2s}.btn[data-v-542a8ad9]:disabled{cursor:not-allowed;opacity:.6}.btn.primary[data-v-542a8ad9]{background:#01532b;color:#fff}.btn.primary[data-v-542a8ad9]:hover:not(:disabled){background:#064e3b}.btn.secondary[data-v-542a8ad9]{background:#6b7280;color:#fff}.btn.secondary[data-v-542a8ad9]:hover:not(:disabled){background:#4b5563}.btn.outline[data-v-542a8ad9]{background:transparent;border:2px solid #01532b;color:#01532b}.btn.outline[data-v-542a8ad9]:hover:not(:disabled){background:#01532b;color:#fff}@media (max-width:1024px){.split-layout[data-v-542a8ad9]{grid-template-columns:1fr}.right-section[data-v-542a8ad9]{order:-1}.photo-upload[data-v-542a8ad9]{height:200px}.form-grid-step2[data-v-542a8ad9],.summary-content[data-v-542a8ad9]{grid-template-columns:repeat(2,1fr)}}@media (max-width:768px){.form-content[data-v-542a8ad9],.left-section[data-v-542a8ad9],.right-section[data-v-542a8ad9]{padding:16px}.form-grid[data-v-542a8ad9],.form-grid-step2[data-v-542a8ad9]{gap:12px;grid-template-columns:1fr}.stepper[data-v-542a8ad9]{padding:12px}.step-line[data-v-542a8ad9]{margin:0 12px;width:40px}.actions[data-v-542a8ad9]{flex-wrap:wrap}.btn[data-v-542a8ad9]{flex:1;min-width:120px}.photo-upload[data-v-542a8ad9]{height:180px}.summary-content[data-v-542a8ad9]{grid-template-columns:1fr}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(900);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6444ed7f", content, true, context)
};

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=542a8ad9&scoped=true&


var ApplicantDialogvue_type_template_id_542a8ad9_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "applicant-form"
  }, [_vm._ssrNode("<div class=\"form-header\" data-v-542a8ad9><h5 class=\"form-title\" data-v-542a8ad9><i class=\"fas fa-user-plus\" data-v-542a8ad9></i>" + _vm._ssrEscape("\n      " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກ') + "\n    ") + "</h5></div> <div class=\"stepper\" data-v-542a8ad9><div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 1,
    completed: _vm.currentStep > 1
  }) + " data-v-542a8ad9><span class=\"step-number\" data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.currentStep > 1 ? '✓' : '1')) + "</span> <span class=\"step-label\" data-v-542a8ad9>ຮັບສະໝັກ</span></div> <div" + _vm._ssrClass("step-line", {
    completed: _vm.currentStep > 1
  }) + " data-v-542a8ad9></div> <div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 2,
    available: _vm.step1Valid
  }) + " data-v-542a8ad9><span class=\"step-number\" data-v-542a8ad9>2</span> <span class=\"step-label\" data-v-542a8ad9> ລົງທະບຽນ</span></div></div> "), _vm._ssrNode("<div class=\"form-content\" data-v-542a8ad9>", "</div>", [_vm._ssrNode("<form data-v-542a8ad9>", "</form>", [_vm._ssrNode("<div class=\"split-layout\"" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 1 ? '' : 'none'
  }) + " data-v-542a8ad9>", "</div>", [_vm._ssrNode("<div class=\"left-section\" data-v-542a8ad9>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-542a8ad9>", "</div>", [_vm._ssrNode("<div class=\"form-group full-width\" data-v-542a8ad9>", "</div>", [_vm._ssrNode("<label data-v-542a8ad9><i class=\"fas fa-briefcase\" data-v-542a8ad9></i> Job Batch</label> "), _c('select', {
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
    }, [_vm._v("\n                  " + _vm._s(batch.mou.jobCode) + " - " + _vm._s(batch.mou.jobTitle) + " -\n                  " + _vm._s(batch.mou.workLocation) + " -\n                  " + _vm._s(`ຮອບ ${batch.runningNo}`) + " -\n                  " + _vm._s(`ເປີດຮັບ ຈຳນວນ ${batch.totalPositions} ຄົນ`) + "\n                ")]);
  })], 2)], 2), _vm._ssrNode(" " + (_vm.selectedBatch ? "<div class=\"batch-summary-card\" data-v-542a8ad9><div class=\"summary-header\" data-v-542a8ad9><i class=\"fas fa-info-circle\" data-v-542a8ad9></i> <span data-v-542a8ad9>ຂໍ້ມູນ Job Batch ທີ່ເລືອກ</span></div> <div class=\"summary-content\" data-v-542a8ad9><div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ຮອບ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.runningNo || _vm.selectedBatch.batchName)) + "</span></div> " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>Job Code:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.jobCode)) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ບໍລິສັດ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.employerCompany || '-')) + "</span></div>" : "<!---->") + " <div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ວຽກທີ່ສະໝັກ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.jobTitle || 0) + " ຄົນ") + "</span></div> " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ສະຖານທີ່ເຮັດວຽກ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.workLocation || '-')) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.batchStartDate ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ວັນທີ່ເລີມຕົ້ນສັນຍາ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedBatch.batchStartDate))) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.batchEndDate ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ວັນທີ່ສິນສຸດສັນຍາ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedBatch.batchEndDate))) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"form-group\" data-v-542a8ad9><label class=\"required\" data-v-542a8ad9><i class=\"fas fa-user\" data-v-542a8ad9></i> ຊື່</label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass(null, {
    error: _vm.errors.firstName
  }) + " data-v-542a8ad9></div> <div class=\"form-group\" data-v-542a8ad9><label class=\"required\" data-v-542a8ad9><i class=\"fas fa-user\" data-v-542a8ad9></i> ນາມສະກຸນ</label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass(null, {
    error: _vm.errors.lastName
  }) + " data-v-542a8ad9></div> <div class=\"form-group\" data-v-542a8ad9><label class=\"required\" data-v-542a8ad9><i class=\"fas fa-graduation-cap\" data-v-542a8ad9></i> ລະດັບການສຶກສາ\n              </label> <input type=\"text\" placeholder=\"ລະດັບການສຶກສາ\"" + _vm._ssrAttr("value", _vm.formData.education) + " data-v-542a8ad9></div> <div class=\"form-group\" data-v-542a8ad9><label class=\"required\" data-v-542a8ad9><i class=\"fas fa-venus-mars\" data-v-542a8ad9></i> ເພດ</label> <div class=\"radio-group\" data-v-542a8ad9><label data-v-542a8ad9><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-542a8ad9>\n                  ຊາຍ</label> <label data-v-542a8ad9><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-542a8ad9>\n                  ຍິງ</label></div></div> <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-calendar\" data-v-542a8ad9></i> ອາຍຸ</label> <input type=\"number\" min=\"18\" max=\"32\" placeholder=\"ອາຍຸ\"" + _vm._ssrAttr("value", _vm.formData.age) + " data-v-542a8ad9></div> <div class=\"form-group full-width\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-home\" data-v-542a8ad9></i> ທີ່ຢູ່</label> <textarea rows=\"2\" placeholder=\"ທີ່ຢູ່ລະອຽດ...\" data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.passportAvailability) ? _vm._i(_vm.formData.passportAvailability, null) > -1 : _vm.formData.passportAvailability) + " data-v-542a8ad9> <i class=\"fas fa-passport\" data-v-542a8ad9></i> ມີໜັງສືເດີນທາງ\n              </label></div>")], 2)]), _vm._ssrNode(" <div class=\"right-section\" data-v-542a8ad9><div class=\"photo-section\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-camera\" data-v-542a8ad9></i> ຮູບຜູ້ສະໝັກ</label> <div class=\"photo-upload\" data-v-542a8ad9>" + (_vm.applicantPhotoPreview || _vm.formData.applicantPhoto ? "<img" + _vm._ssrAttr("src", _vm.applicantPhotoPreview || _vm.getImageUrl(_vm.formData.applicantPhoto)) + " alt=\"Applicant\" data-v-542a8ad9>" : "<div class=\"photo-placeholder\" data-v-542a8ad9><i class=\"fas fa-camera\" data-v-542a8ad9></i> <span data-v-542a8ad9>ເພີ່ມຮູບຜູ້ສະໝັກ</span></div>") + "</div> " + (_vm.applicantPhotoFile || _vm.formData.applicantPhoto ? "<button type=\"button\" class=\"btn-remove\" data-v-542a8ad9><i class=\"fas fa-trash\" data-v-542a8ad9></i> ລຶບຮູບ\n            </button>" : "<!---->") + " <input type=\"file\" accept=\"image/*\" hidden=\"hidden\" data-v-542a8ad9></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 2 ? '' : 'none'
  }) + " data-v-542a8ad9>", "</div>", [_vm._ssrNode((_vm.selectedBatch ? "<div class=\"batch-summary-card\" data-v-542a8ad9><div class=\"summary-header\" data-v-542a8ad9><i class=\"fas fa-info-circle\" data-v-542a8ad9></i> <span data-v-542a8ad9>ຂໍ້ມູນ Job Batch ທີ່ເລືອກ</span></div> <div class=\"summary-content\" data-v-542a8ad9><div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ຮອບ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.runningNo || _vm.selectedBatch.batchName)) + "</span></div> " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>Job Code:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.jobCode)) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ບໍລິສັດ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.employerCompany || '-')) + "</span></div>" : "<!---->") + " <div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ວຽກທີ່ສະໝັກ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.jobTitle || 0) + " ຄົນ") + "</span></div> " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ສະຖານທີ່ເຮັດວຽກ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.workLocation || '-')) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.batchStartDate ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ວັນທີ່ເລີມຕົ້ນສັນຍາ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedBatch.batchStartDate))) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.batchEndDate ? "<div class=\"summary-row\" data-v-542a8ad9><strong data-v-542a8ad9>ວັນທີ່ສິນສຸດສັນຍາ:</strong> <span data-v-542a8ad9>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedBatch.batchEndDate))) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-grid-step2\" data-v-542a8ad9>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-542a8ad9>", "</div>", [_vm._ssrNode("<label data-v-542a8ad9><i class=\"fas fa-flag\" data-v-542a8ad9></i> ສະຖານະ</label> "), _c('select', {
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
  }, [_vm._v("ສະໝັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REGISTER"
    }
  }, [_vm._v("ລົງທະບຽນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CONFIRM"
    }
  }, [_vm._v("ພ້ອມເດີນທາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SUBMITED"
    }
  }, [_vm._v("ເດີນທາງແລ້ວ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-542a8ad9><label class=\"required\" data-v-542a8ad9><i class=\"fas fa-phone\" data-v-542a8ad9></i> ເບີໂທ</label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass(null, {
    error: _vm.errors.phone
  }) + " data-v-542a8ad9></div> <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-exclamation-triangle\" data-v-542a8ad9></i> ເບີສຸກເສີນ</label> <input type=\"tel\" placeholder=\"+856 20 87654321\"" + _vm._ssrAttr("value", _vm.formData.emergencyContactNo) + " data-v-542a8ad9></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-542a8ad9>", "</div>", [_vm._ssrNode("<label data-v-542a8ad9><i class=\"fas fa-heart\" data-v-542a8ad9></i> ສະຖານະການແຕ່ງງານ</label> "), _c('select', {
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
  }, [_vm._v("ເປັນເມ່າຍ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-map-marker-alt\" data-v-542a8ad9></i> ບ້ານ</label> <input type=\"text\" placeholder=\"ບ້ານ\"" + _vm._ssrAttr("value", _vm.formData.village) + " data-v-542a8ad9></div> <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-map-marker-alt\" data-v-542a8ad9></i> ເມືອງ</label> <input type=\"text\" placeholder=\"ເມືອງ\"" + _vm._ssrAttr("value", _vm.formData.city) + " data-v-542a8ad9></div> <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-map-marker-alt\" data-v-542a8ad9></i> ແຂວງ</label> <input type=\"text\" placeholder=\"ແຂວງ\"" + _vm._ssrAttr("value", _vm.formData.district) + " data-v-542a8ad9></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-542a8ad9>", "</div>", [_vm._ssrNode("<label data-v-542a8ad9><i class=\"fas fa-building\" data-v-542a8ad9></i> ຕົວແທນສັນຫາ</label> "), _c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.agencies,
      "item-text": "agencyName",
      "item-value": "id",
      "label": "ຕົວແທນ",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-domain",
      "loading": _vm.loadingAgencies,
      "clearable": ""
    },
    model: {
      value: _vm.formData.agencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "agencyId", $$v);
      },
      expression: "formData.agencyId"
    }
  })], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-calendar-check\" data-v-542a8ad9></i> ວັນທີ່ເລີ່ມສັນຍາ</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.formData.contactStartDate) + " data-v-542a8ad9></div> <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-calendar-times\" data-v-542a8ad9></i> ວັນທີ່ສິ້ນສຸດສັນຍາ</label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.formData.contactStartDate) + _vm._ssrAttr("value", _vm.formData.contactEndDate) + " data-v-542a8ad9></div> <div class=\"form-group\" data-v-542a8ad9><label data-v-542a8ad9><i class=\"fas fa-money-bill-wave\" data-v-542a8ad9></i> ຈຳນວນເງິນມັດຈຳ</label> <input type=\"number\" min=\"0\" step=\"0.01\" placeholder=\"0.00\"" + _vm._ssrAttr("value", _vm.formData.depositAmount) + " data-v-542a8ad9></div>")], 2)], 2), _vm._ssrNode(" " + (_vm.formErrors.length ? "<div class=\"form-errors\" data-v-542a8ad9><strong data-v-542a8ad9>ແກ້ໄຂ:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formErrors.join(', ')) + "\n      ") + "</div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"form-footer\" data-v-542a8ad9>" + (_vm.currentStep === 1 ? "<div class=\"actions\" data-v-542a8ad9><button type=\"button\" class=\"btn secondary\" data-v-542a8ad9>\n        ຍົກເລີກ\n      </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid || _vm.loading) + " class=\"btn outline\" data-v-542a8ad9>" + _vm._ssrEscape("\n        " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : 'ບັນທຶກ') + "\n      ") + "</button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid) + " class=\"btn primary\" data-v-542a8ad9>\n        ລົງທະບຽນ\n      </button></div>" : "<!---->") + " " + (_vm.currentStep === 2 ? "<div class=\"actions\" data-v-542a8ad9><button type=\"button\" class=\"btn secondary\" data-v-542a8ad9>\n        ກັບຄືນ\n      </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.isFormValid || _vm.loading) + " class=\"btn primary\" data-v-542a8ad9>" + _vm._ssrEscape("\n        " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n      ") + "</button></div>" : "<!---->") + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=542a8ad9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantForm',
  props: {
    applicant: Object,
    jobBatches: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      loading: false,
      currentStep: 1,
      agencies: [],
      loadingAgencies: false,
      applicantPhotoPreview: null,
      passportPhotoPreview: null,
      applicantPhotoFile: null,
      passportPhotoFile: null,
      formData: {
        firstName: '',
        lastName: '',
        education: '',
        gender: '',
        age: null,
        maritalStatus: '',
        phone: '',
        emergencyContactNo: '',
        depositAmount: '',
        address: '',
        village: '',
        city: '',
        district: '',
        passportAvailability: false,
        passportNo: '',
        passportExpiredDate: '',
        passportIssueDate: '',
        workPlace: '',
        contactStartDate: '',
        contactEndDate: '',
        registertDate: '',
        interviewExamDate: '',
        passportPhoto: '',
        applicantPhoto: '',
        jobBatchId: null,
        agencyId: null,
        status: 'INTERVIEW'
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      var _this$applicant;
      return (_this$applicant = this.applicant) === null || _this$applicant === void 0 ? void 0 : _this$applicant.id;
    },
    selectedBatch() {
      if (!this.formData.jobBatchId) return null;
      return this.jobBatches.find(batch => batch.id === this.formData.jobBatchId);
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    step1Valid() {
      return this.formData.firstName.trim() && this.formData.lastName.trim() && this.formData.gender;
    },
    isFormValid() {
      var _this$formData$phone;
      const step2Valid = this.currentStep === 2 ? (_this$formData$phone = this.formData.phone) === null || _this$formData$phone === void 0 ? void 0 : _this$formData$phone.trim() : true;
      return this.step1Valid && step2Valid && !this.formErrors.length;
    }
  },
  watch: {
    applicant: {
      handler() {
        this.initializeForm();
      },
      immediate: true,
      deep: true
    },
    'formData.passportAvailability'(val) {
      if (!val) {
        this.formData.passportNo = this.formData.passportExpiredDate = this.formData.passportIssueDate = this.formData.passportPhoto = '';
        this.passportPhotoPreview = this.passportPhotoFile = null;
      }
    }
  },
  mounted() {
    var _this$jobBatches;
    if (!((_this$jobBatches = this.jobBatches) !== null && _this$jobBatches !== void 0 && _this$jobBatches.length)) this.$emit('load-job-batches');
    this.fetchAgencies();
  },
  methods: {
    async fetchAgencies() {
      this.loadingAgencies = true;
      try {
        const response = await this.$axios.$get('/api/agency');
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies;
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data;
        }

        // Set first agency as default if not in edit mode and no agency selected
        if (this.agencies.length > 0 && !this.isEditMode && !this.formData.agencyId) {
          this.formData.agencyId = this.agencies[0].id;
        }
      } catch (error) {
        console.error('Error fetching agencies:', error);
        this.$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ');
      } finally {
        this.loadingAgencies = false;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatCurrency(amount, currency) {
      if (!amount) return '-';
      const currencySymbol = (currency === null || currency === void 0 ? void 0 : currency.symbol) || (currency === null || currency === void 0 ? void 0 : currency.code) || '';
      return `${amount.toLocaleString()} ${currencySymbol}`;
    },
    getPriorityText(priority) {
      const priorities = {
        low: 'ຕໍ່າ',
        medium: 'ປານກາງ',
        high: 'ສູງ',
        urgent: 'ຮີບດ່ວນ'
      };
      return priorities[priority] || priority;
    },
    getStatusText(status) {
      const statuses = {
        draft: 'ຮ່າງ',
        active: 'ເປີດໃຊ້ງານ',
        completed: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statuses[status] || status;
    },
    goToStep(step) {
      if (step === 1 || step === 2 && this.step1Valid) {
        this.currentStep = step;
        this.errors = {};
        this.formErrors = [];
      }
    },
    continueToStep2() {
      if (this.step1Valid) this.currentStep = 2;
    },
    async saveStep1Only() {
      if (!this.step1Valid) return;
      this.loading = true;
      try {
        this.$emit('save', this.createFormData(true), true);
      } catch (error) {
        this.formErrors.push('An error occurred');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    initializeForm() {
      var _this$applicant2;
      if ((_this$applicant2 = this.applicant) !== null && _this$applicant2 !== void 0 && _this$applicant2.id) {
        var _a$passportExpiredDat, _a$passportIssueDate, _a$contactStartDate, _a$contactEndDate, _a$registertDate, _a$interviewExamDate;
        const a = this.applicant;
        this.formData = {
          firstName: a.firstName || '',
          lastName: a.lastName || '',
          gender: a.gender || '',
          education: a.education || '',
          age: a.age || null,
          maritalStatus: a.maritalStatus || '',
          phone: a.phone || '',
          emergencyContactNo: a.emergencyContactNo || '',
          address: a.address || '',
          village: a.village || '',
          city: a.city || '',
          district: a.district || '',
          depositAmount: a.depositAmount || 0,
          passportAvailability: a.passportAvailability || false,
          passportNo: a.passportNo || '',
          passportExpiredDate: ((_a$passportExpiredDat = a.passportExpiredDate) === null || _a$passportExpiredDat === void 0 ? void 0 : _a$passportExpiredDat.split('T')[0]) || '',
          passportIssueDate: ((_a$passportIssueDate = a.passportIssueDate) === null || _a$passportIssueDate === void 0 ? void 0 : _a$passportIssueDate.split('T')[0]) || '',
          workPlace: a.workPlace || '',
          contactStartDate: ((_a$contactStartDate = a.contactStartDate) === null || _a$contactStartDate === void 0 ? void 0 : _a$contactStartDate.split('T')[0]) || '',
          contactEndDate: ((_a$contactEndDate = a.contactEndDate) === null || _a$contactEndDate === void 0 ? void 0 : _a$contactEndDate.split('T')[0]) || '',
          registertDate: ((_a$registertDate = a.registertDate) === null || _a$registertDate === void 0 ? void 0 : _a$registertDate.slice(0, 16)) || '',
          interviewExamDate: ((_a$interviewExamDate = a.interviewExamDate) === null || _a$interviewExamDate === void 0 ? void 0 : _a$interviewExamDate.slice(0, 16)) || '',
          passportPhoto: a.passportPhoto || '',
          applicantPhoto: a.applicantPhoto || '',
          jobBatchId: a.jobBatchId || null,
          agencyId: a.agencyId || null,
          status: a.status || 'INTERVIEW'
        };
        this.applicantPhotoPreview = this.passportPhotoPreview = this.applicantPhotoFile = this.passportPhotoFile = null;
        if (a.phone) this.currentStep = 2;
      }
      this.errors = {};
      this.formErrors = [];
    },
    createFormData(isPartial = false) {
      const fd = new FormData();
      const fields = isPartial ? ['firstName', 'lastName', 'gender', 'age', 'address', 'passportAvailability', 'jobBatchId', 'status'] : Object.keys(this.formData);
      fields.forEach(key => {
        if (key !== 'passportPhoto' && key !== 'applicantPhoto') {
          const val = this.formData[key];
          if (val !== '' && val !== null) fd.append(key, val);
        }
      });
      fd.append('applicantPhoto', this.applicantPhotoFile || this.formData.applicantPhoto || '');
      if (this.formData.passportAvailability) {
        fd.append('passportPhoto', this.passportPhotoFile || this.formData.passportPhoto || '');
      }
      return fd;
    },
    async saveApplicant() {
      if (!this.isFormValid) return;
      this.loading = true;
      try {
        this.$emit('save', this.createFormData(), false);
      } catch (error) {
        this.formErrors.push('Error saving');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    triggerFileInput(type) {
      this.$refs[`${type}FileInput`].click();
    },
    handleFileSelect(event, type) {
      const file = event.target.files[0];
      if (!file) return;
      this.formErrors = this.formErrors.filter(e => !e.includes('ຮູບ'));
      if (!file.type.startsWith('image/')) {
        this.formErrors.push('ເລືອກຮູບພາບເທົ່ານັ້ນ');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.formErrors.push('ຮູບໃຫຍ່ເກີນ 5MB');
        return;
      }
      if (type === 'applicant') this.applicantPhotoFile = file;else this.passportPhotoFile = file;
      const reader = new FileReader();
      reader.onload = e => {
        if (type === 'applicant') this.applicantPhotoPreview = e.target.result;else this.passportPhotoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removePhoto(type) {
      if (type === 'applicant') {
        this.applicantPhotoFile = this.applicantPhotoPreview = this.formData.applicantPhoto = null;
        if (this.$refs.applicantFileInput) this.$refs.applicantFileInput.value = '';
      } else {
        this.passportPhotoFile = this.passportPhotoPreview = this.formData.passportPhoto = null;
        if (this.$refs.passportFileInput) this.$refs.passportFileInput.value = '';
      }
    },
    getImageUrl(path) {
      if (!path) return null;
      if (path.startsWith('http')) return path;
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
  
  var style0 = __webpack_require__(642)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantDialogvue_type_script_lang_js_,
  ApplicantDialogvue_type_template_id_542a8ad9_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "542a8ad9",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02868df3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(730);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02868df3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02868df3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02868df3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02868df3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".applicant-summary-container[data-v-02868df3]{padding:20px}.page-header[data-v-02868df3]{margin-bottom:20px}.header-content[data-v-02868df3]{align-items:center;display:flex;justify-content:space-between}.page-title[data-v-02868df3]{font-size:28px;font-weight:600;margin:0}.header-actions[data-v-02868df3]{display:flex;gap:12px}.filter-section[data-v-02868df3]{margin-bottom:20px}.applicant-name[data-v-02868df3]{display:flex;flex-direction:column}.contact-info[data-v-02868df3]{color:#666;font-size:12px}.contact-details[data-v-02868df3]{align-items:center;display:flex}@media (max-width:768px){.header-content[data-v-02868df3]{align-items:flex-start;flex-direction:column;gap:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map