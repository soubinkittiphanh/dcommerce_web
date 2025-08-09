exports.ids = [67];
exports.modules = {

/***/ 477:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(336)["URL"]))

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(588);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5bf60468", content, true, context)
};

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(514);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryDialog_vue_vue_type_style_index_0_id_e38c8604_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 588:
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

/***/ 656:
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
var MinistryDialogvue_type_script_lang_js_ = __webpack_require__(477);

// CONCATENATED MODULE: ./components/ministry/MinistryDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var ministry_MinistryDialogvue_type_script_lang_js_ = (MinistryDialogvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ministry/MinistryDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(587)
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

/***/ })

};;
//# sourceMappingURL=ministry-dialog.js.map