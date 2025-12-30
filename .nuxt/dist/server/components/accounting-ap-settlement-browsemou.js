exports.ids = [10];
exports.modules = {

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(704);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d8ef9828", content, true, context)
};

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(594);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mou-content[data-v-4664dd31]{padding:0}.form-section[data-v-4664dd31]{background:#fafafa;border-radius:6px;margin-bottom:20px;padding:15px}.form-grid[data-v-4664dd31]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:15px;gap:15px}.form-group[data-v-4664dd31]{margin-bottom:0}.form-group label[data-v-4664dd31]{color:#333;display:block;font-size:13px;font-weight:500;margin-bottom:5px}.required[data-v-4664dd31]{color:#e74c3c}.form-control[data-v-4664dd31]{border:1px solid #ddd;border-radius:4px;font-size:13px;padding:8px 12px;width:100%}.form-control[data-v-4664dd31]:focus{border-color:#17a2b8;box-shadow:0 0 0 2px rgba(23,162,184,.1);outline:none}.form-control[data-v-4664dd31]:disabled{background-color:#f8f9fa;color:#6c757d}.form-control-sm[data-v-4664dd31]{font-size:12px;padding:4px 8px}.section-header[data-v-4664dd31]{flex-wrap:wrap;gap:10px;justify-content:space-between;margin-bottom:15px}.section-header[data-v-4664dd31],.section-title[data-v-4664dd31]{align-items:center;display:flex}.section-title[data-v-4664dd31]{color:#333;font-size:14px;font-weight:600;gap:8px;margin:0}.total-badge[data-v-4664dd31]{background:#17a2b8;border-radius:4px;color:#fff;font-size:12px;padding:6px 12px}.table-responsive[data-v-4664dd31]{background:#fff;border:1px solid #e9ecef;border-radius:6px;overflow-x:auto}.table[data-v-4664dd31]{border-collapse:collapse;font-size:12px;margin:0;width:100%}.table thead th[data-v-4664dd31]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-weight:600;padding:10px;text-align:left}.table tbody td[data-v-4664dd31]{border-top:1px solid #dee2e6;padding:8px 10px;vertical-align:middle}.applicant-info[data-v-4664dd31]{align-items:center;display:flex;gap:10px}.applicant-avatar[data-v-4664dd31]{align-items:center;background:#17a2b8;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:11px;font-weight:600;height:32px;justify-content:center;width:32px}.applicant-name[data-v-4664dd31]{color:#333;font-weight:500}.applicant-nationality[data-v-4664dd31]{color:#6c757d;font-size:11px}.passport-badge[data-v-4664dd31]{align-items:center;background:#e9ecef;border-radius:4px;display:inline-flex;font-size:11px;gap:4px;padding:4px 8px}.empty-state[data-v-4664dd31],.loading-state[data-v-4664dd31]{color:#6c757d;padding:40px 20px;text-align:center}.loading-state i[data-v-4664dd31]{color:#17a2b8;margin-bottom:15px}.empty-state i[data-v-4664dd31]{color:#dee2e6;margin-bottom:15px}.empty-title[data-v-4664dd31]{color:#333;font-size:16px;font-weight:600;margin:10px 0 5px}.empty-subtitle[data-v-4664dd31]{color:#6c757d;font-size:13px;margin:0}.mou-actions[data-v-4664dd31]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;margin-top:20px;padding:15px 20px}.btn[data-v-4664dd31]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:13px;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-4664dd31]{background:#007bff;color:#fff}.btn-secondary[data-v-4664dd31]{background:#6c757d;color:#fff}.btn[data-v-4664dd31]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-4664dd31]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.form-grid[data-v-4664dd31]{grid-template-columns:1fr}.section-header[data-v-4664dd31]{align-items:flex-start}.mou-actions[data-v-4664dd31],.section-header[data-v-4664dd31]{flex-direction:column}.mou-actions .btn[data-v-4664dd31]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/browsemou/index.vue?vue&type=template&id=4664dd31&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mou-content"
  }, [_vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select MOU <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedMOU,
      expression: "selectedMOU"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": _vm.loadingMOU
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedMOU = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onMOUChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("-- Select MOU --")]), _vm._v(" "), _vm._l(_vm.mouList, function (mou) {
    return _c('option', {
      key: mou.id,
      domProps: {
        "value": mou
      }
    }, [_vm._v("\n          " + _vm._s(mou.jobCode) + " - " + _vm._s(mou.pmCharge) + " - " + _vm._s(mou.jobTitle) + " -\n          " + _vm._s(mou.employerCompany) + "\n        ")]);
  })], 2)], 2)]), _vm._ssrNode(" "), _vm.selectedMOU ? _vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select Batch <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedBatch,
      expression: "selectedBatch"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": !_vm.selectedMOU || _vm.loadingBatches
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedBatch = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onBatchChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("-- Select Batch --")]), _vm._v(" "), _vm._l(_vm.batchList, function (batch) {
    return _c('option', {
      key: batch.id,
      domProps: {
        "value": batch
      }
    }, [_vm._v("\n          " + _vm._s(batch.runningNo) + " - " + _vm._s(batch.totalPositions) + " positions (" + _vm._s(batch.applicants.length) + "\n          applicants)\n        ")]);
  })], 2)], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.selectedBatch ? _vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select Agency <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAgency,
      expression: "selectedAgency"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": !_vm.selectedBatch || _vm.agencyList.length === 0
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedAgency = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onAgencyChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("\n          " + _vm._s(_vm.agencyList.length === 0 ? '-- No agencies available --' : '-- Select Agency --') + "\n        ")]), _vm._v(" "), _vm._l(_vm.agencyList, function (agency) {
    return _c('option', {
      key: agency.id,
      domProps: {
        "value": agency
      }
    }, [_vm._v("\n          " + _vm._s(agency.agencyName) + " - " + _vm._s(agency.agencyCode) + " (" + _vm._s(_vm.getAgencyApplicantCount(agency.id)) + "\n          applicants)\n        ")]);
  })], 2), _vm._ssrNode(" " + (_vm.agencyList.length === 0 ? "<small class=\"text-muted\" data-v-4664dd31>\n        No applicants in this batch have agencies assigned\n      </small>" : "<!---->"))], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.selectedAgency && _vm.applicantsList.length > 0 ? "<div class=\"form-section\" data-v-4664dd31><div class=\"section-header\" data-v-4664dd31><h6 class=\"section-title\" data-v-4664dd31><i class=\"fas fa-users\" data-v-4664dd31></i>" + _vm._ssrEscape("\n        Invoice Line Items (" + _vm._s(_vm.applicantsList.length) + " applicants)\n      ") + "</h6> <div class=\"total-badge\" data-v-4664dd31>\n        Total: <strong data-v-4664dd31>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.totalAmount))) + "</strong></div></div> <div class=\"table-responsive\" data-v-4664dd31><table class=\"table table-bordered\" data-v-4664dd31><thead data-v-4664dd31><tr data-v-4664dd31><th style=\"width: 40px\" data-v-4664dd31>#</th> <th data-v-4664dd31>Applicant Name</th> <th style=\"width: 120px\" data-v-4664dd31>Passport No</th> <th style=\"width: 150px\" data-v-4664dd31>Amount</th> <th style=\"width: 200px\" data-v-4664dd31>Description</th></tr></thead> <tbody data-v-4664dd31>" + _vm._ssrList(_vm.applicantsList, function (applicant, index) {
    return "<tr data-v-4664dd31><td class=\"text-center\" data-v-4664dd31>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-4664dd31><div class=\"applicant-info\" data-v-4664dd31><div class=\"applicant-avatar\" data-v-4664dd31>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getInitials(applicant.applicantName)) + "\n                ") + "</div> <div data-v-4664dd31><div class=\"applicant-name\" data-v-4664dd31>" + _vm._ssrEscape("\n                    " + _vm._s(applicant.applicantName) + "\n                  ") + "</div> <div class=\"applicant-nationality\" data-v-4664dd31>" + _vm._ssrEscape("\n                    " + _vm._s(applicant.gender) + "\n                  ") + "</div></div></div></td> <td data-v-4664dd31><span class=\"passport-badge\" data-v-4664dd31><i class=\"fas fa-passport\" data-v-4664dd31></i>" + _vm._ssrEscape("\n                " + _vm._s(applicant.passportNo) + "\n              ") + "</span></td> <td data-v-4664dd31><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", applicant.amount) + " class=\"form-control form-control-sm\" data-v-4664dd31></td> <td data-v-4664dd31><input type=\"text\" placeholder=\"Description\"" + _vm._ssrAttr("value", applicant.description) + " class=\"form-control form-control-sm\" data-v-4664dd31></td></tr>";
  }) + "</tbody></table></div></div>" : "<!---->") + " " + (_vm.selectedAgency && _vm.applicantsList.length === 0 ? "<div class=\"empty-state\" data-v-4664dd31><i class=\"fas fa-inbox fa-4x\" data-v-4664dd31></i> <p class=\"empty-title\" data-v-4664dd31>No applicants available</p> <p class=\"empty-subtitle\" data-v-4664dd31>\n      No applicants found for the selected agency in this batch\n    </p></div>" : "<!---->") + " <div class=\"mou-actions\" data-v-4664dd31><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isGenerating) + " class=\"btn btn-secondary\" data-v-4664dd31><i class=\"fas fa-times\" data-v-4664dd31></i> Cancel\n    </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canGenerateInvoice) + " class=\"btn btn-primary\" data-v-4664dd31><i class=\"fas fa-file-check\" data-v-4664dd31></i> " + (_vm.isGenerating ? "<span data-v-4664dd31>Generating...</span>" : "<span data-v-4664dd31>Generate Invoice</span>") + "</button></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue?vue&type=template&id=4664dd31&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(107);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/browsemou/index.vue?vue&type=script&lang=js













/* harmony default export */ var browsemouvue_type_script_lang_js = ({
  name: 'BrowseMouInvoiceDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loadingMOU: false,
      loadingBatches: false,
      isGenerating: false,
      mouList: [],
      batchList: [],
      agencyList: [],
      applicantsList: [],
      selectedMOU: null,
      selectedBatch: null,
      selectedAgency: null,
      invoiceData: {
        invoiceNumber: '',
        invoiceDate: new Date().toISOString().substr(0, 10)
      }
    };
  },
  computed: {
    totalAmount() {
      return this.applicantsList.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
    },
    canGenerateInvoice() {
      return this.selectedMOU && this.selectedBatch && this.selectedAgency && this.applicantsList.length > 0 && !this.isGenerating;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.loadMOUList();
      } else {
        this.resetForm();
      }
    }
  },
  created() {
    this.loadMOUList();
  },
  methods: {
    calculateTotal() {
      this.$forceUpdate();
    },
    resetForm() {
      this.selectedMOU = null;
      this.selectedBatch = null;
      this.selectedAgency = null;
      this.batchList = [];
      this.agencyList = [];
      this.applicantsList = [];
      this.invoiceData = {
        invoiceNumber: '',
        invoiceDate: new Date().toISOString().substr(0, 10)
      };
    },
    async loadMOUList() {
      this.loadingMOU = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/mous');
        if (data.success) {
          this.mouList = data.data.mous;
        }
      } catch (error) {
        var _this$$toast;
        console.error('Error loading MOU list:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load MOU list');
      } finally {
        this.loadingMOU = false;
      }
    },
    async onMOUChange() {
      if (!this.selectedMOU) {
        this.batchList = [];
        this.selectedBatch = null;
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
        return;
      }
      this.loadingBatches = true;
      try {
        const {
          data
        } = await this.$axios.get(`/api/mous/${this.selectedMOU.id}/batch`);
        if (data.success) {
          this.batchList = data.data || [];
        }
        this.selectedBatch = null;
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
      } catch (error) {
        var _this$$toast2;
        console.error('Error loading batches:', error);
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.error('Failed to load batches');
        this.batchList = [];
      } finally {
        this.loadingBatches = false;
      }
    },
    onBatchChange() {
      var _this$selectedBatch$a;
      if (!this.selectedBatch) {
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
        return;
      }
      const agenciesMap = new Map();
      if (((_this$selectedBatch$a = this.selectedBatch.applicants) === null || _this$selectedBatch$a === void 0 ? void 0 : _this$selectedBatch$a.length) > 0) {
        this.selectedBatch.applicants.forEach(applicant => {
          if (applicant.agency && applicant.agencyId && !agenciesMap.has(applicant.agency.id)) {
            agenciesMap.set(applicant.agency.id, applicant.agency);
          }
        });
      }
      this.agencyList = Array.from(agenciesMap.values());
      this.selectedAgency = null;
      this.applicantsList = [];
    },
    onAgencyChange() {
      if (!this.selectedAgency || !this.selectedBatch) {
        this.applicantsList = [];
        return;
      }
      const agencyApplicants = this.selectedBatch.applicants.filter(applicant => applicant.agencyId === this.selectedAgency.id);
      this.applicantsList = agencyApplicants.map(applicant => ({
        id: applicant.id,
        applicantName: `${applicant.firstName} ${applicant.lastName}`,
        passportNo: applicant.passportNo,
        gender: applicant.gender,
        amount: applicant.depositAmount || 0,
        description: `Service fee for ${applicant.firstName} ${applicant.lastName}`
      }));
    },
    getAgencyApplicantCount(agencyId) {
      var _this$selectedBatch;
      if (!((_this$selectedBatch = this.selectedBatch) !== null && _this$selectedBatch !== void 0 && _this$selectedBatch.applicants)) return 0;
      return this.selectedBatch.applicants.filter(a => a.agencyId === agencyId).length;
    },
    async generateInvoice() {
      if (!this.canGenerateInvoice) return;
      this.isGenerating = true;
      try {
        var _this$$toast3;
        const payload = {
          mouId: this.selectedMOU.id,
          mouInfo: {
            jobCode: this.selectedMOU.jobCode,
            jobTitle: this.selectedMOU.jobTitle,
            employerCompany: this.selectedMOU.employerCompany,
            pmCharge: this.selectedMOU.pmCharge
          },
          batchId: this.selectedBatch.id,
          batchInfo: {
            runningNo: this.selectedBatch.runningNo,
            totalPositions: this.selectedBatch.totalPositions
          },
          agencyId: this.selectedAgency.id,
          agencyName: this.selectedAgency.agencyName,
          agencyCode: this.selectedAgency.agencyCode,
          invoiceNumber: this.invoiceData.invoiceNumber,
          invoiceDate: this.invoiceData.invoiceDate,
          lines: this.applicantsList.map(applicant => ({
            applicantId: applicant.id,
            applicantName: applicant.applicantName,
            passportNo: applicant.passportNo,
            gender: applicant.gender,
            amount: parseFloat(applicant.amount) || 0,
            description: applicant.description || ''
          })),
          totalAmount: this.totalAmount
        };
        this.$emit('invoice-generated', payload);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.success(`Generated ${this.applicantsList.length} invoice lines`);
      } catch (error) {
        var _this$$toast4;
        console.error('Error generating invoice:', error);
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.error('Failed to generate invoice');
      } finally {
        this.isGenerating = false;
      }
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    getInitials(name) {
      if (!name) return '?';
      const parts = name.split(' ');
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue?vue&type=script&lang=js
 /* harmony default export */ var settlement_browsemouvue_type_script_lang_js = (browsemouvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(703)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settlement_browsemouvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4664dd31",
  "40d5f1bf"
  
)

/* harmony default export */ var browsemou = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ap-settlement-browsemou.js.map