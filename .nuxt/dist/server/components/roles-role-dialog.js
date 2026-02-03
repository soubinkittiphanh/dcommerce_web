exports.ids = [150];
exports.modules = {

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/roles/RoleDialog.vue?vue&type=template&id=57cd2fff&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._ssrNode("<div class=\"modal-container\" data-v-57cd2fff><div class=\"modal-header\" data-v-57cd2fff><h2 class=\"modal-title\" data-v-57cd2fff>" + _vm._ssrEscape("\n        " + _vm._s(_vm.mode === 'create' ? 'Create New Role' : 'Edit Role') + "\n      ") + "</h2> <button class=\"modal-close\" data-v-57cd2fff>×</button></div> <div class=\"modal-body\" data-v-57cd2fff><div class=\"form-group\" data-v-57cd2fff><label class=\"form-label\" data-v-57cd2fff>\n          Role Name <span class=\"required\" data-v-57cd2fff>*</span></label> <input type=\"text\" placeholder=\"e.g., cashier, supervisor\"" + _vm._ssrAttr("value", _vm.formData.name) + _vm._ssrClass("form-input", {
    error: _vm.errors.name
  }) + " data-v-57cd2fff> " + (_vm.errors.name ? "<span class=\"error-message\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(_vm.errors.name)) + "</span>" : "<!---->") + " <span class=\"form-hint\" data-v-57cd2fff>Lowercase, no spaces. Use hyphens or underscores.</span></div> <div class=\"form-group\" data-v-57cd2fff><label class=\"form-label\" data-v-57cd2fff>\n          Permission Level <span class=\"required\" data-v-57cd2fff>*</span></label> <div class=\"level-input-group\" data-v-57cd2fff><input type=\"number\" min=\"0\" max=\"100\"" + _vm._ssrAttr("value", _vm.formData.level) + _vm._ssrClass("form-input level-input", {
    error: _vm.errors.level
  }) + " data-v-57cd2fff> <div" + _vm._ssrClass("level-indicator", _vm.getLevelClass(_vm.formData.level)) + " data-v-57cd2fff>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getLevelLabel(_vm.formData.level)) + "\n          ") + "</div></div> " + (_vm.errors.level ? "<span class=\"error-message\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(_vm.errors.level)) + "</span>" : "<!---->") + " <div class=\"level-guide\" data-v-57cd2fff><div class=\"guide-item\" data-v-57cd2fff><span class=\"guide-badge level-admin\" data-v-57cd2fff>100</span> <span class=\"guide-text\" data-v-57cd2fff>Admin</span></div> <div class=\"guide-item\" data-v-57cd2fff><span class=\"guide-badge level-manager\" data-v-57cd2fff>50</span> <span class=\"guide-text\" data-v-57cd2fff>Manager</span></div> <div class=\"guide-item\" data-v-57cd2fff><span class=\"guide-badge level-supervisor\" data-v-57cd2fff>30</span> <span class=\"guide-text\" data-v-57cd2fff>Supervisor</span></div> <div class=\"guide-item\" data-v-57cd2fff><span class=\"guide-badge level-staff\" data-v-57cd2fff>10</span> <span class=\"guide-text\" data-v-57cd2fff>Staff</span></div></div></div> <div class=\"form-group\" data-v-57cd2fff><label class=\"form-label\" data-v-57cd2fff>Description</label> <textarea rows=\"3\" placeholder=\"Describe this role and its responsibilities...\"" + _vm._ssrClass("form-textarea", {
    error: _vm.errors.description
  }) + " data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(_vm.formData.description)) + "</textarea> " + (_vm.errors.description ? "<span class=\"error-message\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(_vm.errors.description)) + "</span>" : "<!---->") + "</div> <div class=\"form-group permissions-group\" data-v-57cd2fff><div class=\"permissions-header\" data-v-57cd2fff><label class=\"form-label\" data-v-57cd2fff>Permissions</label> <div class=\"permissions-actions\" data-v-57cd2fff><button class=\"link-btn\" data-v-57cd2fff>\n              Select All\n            </button> <span class=\"separator\" data-v-57cd2fff>|</span> <button class=\"link-btn\" data-v-57cd2fff>\n              Clear All\n            </button></div></div> <div class=\"permissions-container\" data-v-57cd2fff>" + _vm._ssrList(_vm.groupedPermissions, function (categoryPerms, category) {
    return "<div class=\"permission-category\" data-v-57cd2fff><div class=\"category-header\" data-v-57cd2fff><span class=\"category-icon\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(_vm.expandedCategories.includes(category) ? '▼' : '▶')) + "</span> <span class=\"category-name\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(_vm.formatCategoryName(category))) + "</span> <span class=\"category-count\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(categoryPerms.length)) + "</span></div> <div class=\"category-permissions\"" + _vm._ssrStyle(null, null, {
      display: _vm.expandedCategories.includes(category) ? '' : 'none'
    }) + " data-v-57cd2fff>" + _vm._ssrList(categoryPerms, function (permission) {
      return "<label class=\"permission-item\" data-v-57cd2fff><input type=\"checkbox\"" + _vm._ssrAttr("value", permission.key) + _vm._ssrAttr("checked", Array.isArray(_vm.formData.permissions) ? _vm._i(_vm.formData.permissions, permission.key) > -1 : _vm.formData.permissions) + " class=\"permission-checkbox\" data-v-57cd2fff> <div class=\"permission-info\" data-v-57cd2fff><span class=\"permission-label\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(permission.label)) + "</span> <span class=\"permission-description\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(permission.description)) + "</span></div></label>";
    }) + "</div></div>";
  }) + "</div> <div class=\"selected-summary\" data-v-57cd2fff><span class=\"summary-label\" data-v-57cd2fff>Selected:</span> <span class=\"summary-count\" data-v-57cd2fff>" + _vm._ssrEscape(_vm._s(_vm.formData.permissions.length)) + "</span> <span class=\"summary-text\" data-v-57cd2fff>permission(s)</span></div></div> <div class=\"form-group\" data-v-57cd2fff><label class=\"form-label checkbox-label\" data-v-57cd2fff><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.isActive) ? _vm._i(_vm.formData.isActive, null) > -1 : _vm.formData.isActive) + " class=\"form-checkbox\" data-v-57cd2fff> <span data-v-57cd2fff>Active Role</span></label> <span class=\"form-hint\" data-v-57cd2fff>Inactive roles cannot be assigned to users</span></div></div> <div class=\"modal-footer\" data-v-57cd2fff><button class=\"btn-secondary\" data-v-57cd2fff>Cancel</button> <button" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn-primary\" data-v-57cd2fff>" + _vm._ssrEscape("\n        " + _vm._s(_vm.saving ? 'Saving...' : _vm.mode === 'create' ? 'Create Role' : 'Save Changes') + "\n      ") + "</button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/roles/RoleDialog.vue?vue&type=template&id=57cd2fff&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/roles/RoleDialog.vue?vue&type=script&lang=js
/* harmony default export */ var RoleDialogvue_type_script_lang_js = ({
  name: 'RoleDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    role: {
      type: Object,
      default: null
    },
    permissions: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: 'create' // 'create' or 'edit'
    }
  },
  data() {
    return {
      formData: {
        name: '',
        level: 10,
        permissions: [],
        description: '',
        isActive: true
      },
      errors: {},
      saving: false,
      expandedCategories: []
    };
  },
  computed: {
    groupedPermissions() {
      const groups = {};
      this.permissions.forEach(permission => {
        const category = permission.key.split('.')[0];
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(permission);
      });
      return groups;
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeForm();
        // Expand all categories by default
        this.expandedCategories = Object.keys(this.groupedPermissions);
      }
    }
  },
  methods: {
    initializeForm() {
      if (this.mode === 'edit' && this.role) {
        this.formData = {
          id: this.role.id,
          name: this.role.name,
          level: this.role.level || 10,
          permissions: Array.isArray(this.role.permissions) ? [...this.role.permissions] : [],
          description: this.role.description || '',
          isActive: this.role.isActive !== false
        };
      } else {
        this.formData = {
          name: '',
          level: 10,
          permissions: [],
          description: '',
          isActive: true
        };
      }
      this.errors = {};
    },
    validateForm() {
      this.errors = {};

      // Validate name
      if (!this.formData.name || this.formData.name.trim() === '') {
        this.errors.name = 'Role name is required';
      } else if (!/^[a-z0-9_-]+$/.test(this.formData.name)) {
        this.errors.name = 'Role name can only contain lowercase letters, numbers, underscores, and hyphens';
      }

      // Validate level
      if (this.formData.level === null || this.formData.level === undefined) {
        this.errors.level = 'Permission level is required';
      } else if (this.formData.level < 0 || this.formData.level > 100) {
        this.errors.level = 'Level must be between 0 and 100';
      }

      // Validate description length
      if (this.formData.description && this.formData.description.length > 500) {
        this.errors.description = 'Description cannot exceed 500 characters';
      }
      return Object.keys(this.errors).length === 0;
    },
    clearError(field) {
      if (this.errors[field]) {
        delete this.errors[field];
      }
    },
    handleSave() {
      var _this$formData$descri;
      if (!this.validateForm()) {
        this.$toast.error('Please fix validation errors');
        return;
      }

      // Trim name and convert to lowercase
      const saveData = {
        ...this.formData,
        name: this.formData.name.toLowerCase().trim(),
        description: ((_this$formData$descri = this.formData.description) === null || _this$formData$descri === void 0 ? void 0 : _this$formData$descri.trim()) || null
      };
      this.$emit('save', saveData);
    },
    handleClose() {
      this.$emit('close');
    },
    getLevelClass(level) {
      if (level >= 100) return 'level-admin';
      if (level >= 50) return 'level-manager';
      if (level >= 30) return 'level-supervisor';
      return 'level-staff';
    },
    getLevelLabel(level) {
      if (level >= 100) return 'Admin Level';
      if (level >= 50) return 'Manager Level';
      if (level >= 30) return 'Supervisor Level';
      return 'Staff Level';
    },
    formatCategoryName(category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    },
    toggleCategory(category) {
      const index = this.expandedCategories.indexOf(category);
      if (index > -1) {
        this.expandedCategories.splice(index, 1);
      } else {
        this.expandedCategories.push(category);
      }
    },
    selectAllPermissions() {
      this.formData.permissions = this.permissions.map(p => p.key);
    },
    clearAllPermissions() {
      this.formData.permissions = [];
    }
  }
});
// CONCATENATED MODULE: ./components/roles/RoleDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var roles_RoleDialogvue_type_script_lang_js = (RoleDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/roles/RoleDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(854)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  roles_RoleDialogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57cd2fff",
  "5dc9ca43"
  
)

/* harmony default export */ var RoleDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(855);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b738b784", content, true, context)
};

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleDialog_vue_vue_type_style_index_0_id_57cd2fff_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(742);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleDialog_vue_vue_type_style_index_0_id_57cd2fff_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleDialog_vue_vue_type_style_index_0_id_57cd2fff_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleDialog_vue_vue_type_style_index_0_id_57cd2fff_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleDialog_vue_vue_type_style_index_0_id_57cd2fff_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-57cd2fff]{align-items:center;animation:fadeIn-57cd2fff .2s ease;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-57cd2fff{0%{opacity:0}to{opacity:1}}.modal-container[data-v-57cd2fff]{animation:slideUp-57cd2fff .3s ease;background:#fff;border-radius:0;box-shadow:none;display:flex;flex-direction:column;height:100vh;max-height:none;max-width:none;width:100vw}@keyframes slideUp-57cd2fff{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.modal-header[data-v-57cd2fff]{align-items:center;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;padding:24px}.modal-title[data-v-57cd2fff]{color:#1a202c;font-size:20px;font-weight:700;margin:0}.modal-close[data-v-57cd2fff]{align-items:center;background:none;border:none;border-radius:4px;color:#718096;cursor:pointer;display:flex;font-size:32px;height:32px;justify-content:center;padding:0;transition:all .2s;width:32px}.modal-close[data-v-57cd2fff]:hover{background:#f7fafc;color:#2d3748}.modal-body[data-v-57cd2fff]{flex:1;overflow-y:auto;padding:24px}.form-group[data-v-57cd2fff]{margin-bottom:24px}.form-label[data-v-57cd2fff]{color:#2d3748;display:block;font-size:14px;font-weight:600;margin-bottom:8px}.required[data-v-57cd2fff]{color:#e53e3e}.form-input[data-v-57cd2fff],.form-textarea[data-v-57cd2fff]{border:1px solid #e2e8f0;border-radius:8px;font-family:inherit;font-size:14px;padding:10px 14px;transition:all .2s;width:100%}.form-input[data-v-57cd2fff]:focus,.form-textarea[data-v-57cd2fff]:focus{border-color:#4299e1;box-shadow:0 0 0 3px rgba(66,153,225,.1);outline:none}.form-input.error[data-v-57cd2fff],.form-textarea.error[data-v-57cd2fff]{border-color:#fc8181}.form-textarea[data-v-57cd2fff]{min-height:80px;resize:vertical}.error-message[data-v-57cd2fff]{color:#e53e3e;font-weight:500}.error-message[data-v-57cd2fff],.form-hint[data-v-57cd2fff]{display:block;font-size:12px;margin-top:6px}.form-hint[data-v-57cd2fff]{color:#718096;font-style:italic}.level-input-group[data-v-57cd2fff]{align-items:center;display:flex;gap:12px}.level-input[data-v-57cd2fff]{flex:0 0 120px}.level-indicator[data-v-57cd2fff]{border-radius:8px;flex:1;font-size:13px;font-weight:600;padding:8px 16px;text-align:center}.level-indicator.level-admin[data-v-57cd2fff]{background:#fed7d7;color:#c53030}.level-indicator.level-manager[data-v-57cd2fff]{background:#feebc8;color:#c05621}.level-indicator.level-supervisor[data-v-57cd2fff]{background:#bee3f8;color:#2c5282}.level-indicator.level-staff[data-v-57cd2fff]{background:#e2e8f0;color:#2d3748}.level-guide[data-v-57cd2fff]{display:flex;flex-wrap:wrap;gap:12px;margin-top:12px}.guide-item[data-v-57cd2fff]{align-items:center;display:flex;gap:6px}.guide-badge[data-v-57cd2fff]{border-radius:12px;font-size:11px;font-weight:700;padding:4px 10px}.guide-badge.level-admin[data-v-57cd2fff]{background:#fed7d7;color:#c53030}.guide-badge.level-manager[data-v-57cd2fff]{background:#feebc8;color:#c05621}.guide-badge.level-supervisor[data-v-57cd2fff]{background:#bee3f8;color:#2c5282}.guide-badge.level-staff[data-v-57cd2fff]{background:#e2e8f0;color:#2d3748}.guide-text[data-v-57cd2fff]{color:#4a5568;font-size:12px;font-weight:500}.checkbox-label[data-v-57cd2fff]{align-items:center;cursor:pointer;display:flex!important;font-weight:400!important;gap:8px}.form-checkbox[data-v-57cd2fff]{cursor:pointer;height:18px;width:18px}.permissions-group[data-v-57cd2fff]{margin-top:32px}.permissions-header[data-v-57cd2fff]{align-items:center;display:flex;justify-content:space-between;margin-bottom:16px}.permissions-actions[data-v-57cd2fff]{align-items:center;display:flex;gap:8px}.link-btn[data-v-57cd2fff]{background:none;border:none;border-radius:4px;color:#4299e1;cursor:pointer;font-size:13px;font-weight:500;padding:4px 8px;transition:all .2s}.link-btn[data-v-57cd2fff]:hover{background:#ebf8ff;color:#2c5282}.separator[data-v-57cd2fff]{color:#cbd5e0}.permissions-container[data-v-57cd2fff]{border:1px solid #e2e8f0;border-radius:8px;overflow:hidden}.permission-category[data-v-57cd2fff]{border-bottom:1px solid #e2e8f0}.permission-category[data-v-57cd2fff]:last-child{border-bottom:none}.category-header[data-v-57cd2fff]{align-items:center;background:#f7fafc;cursor:pointer;display:flex;gap:12px;padding:12px 16px;transition:all .2s}.category-header[data-v-57cd2fff]:hover{background:#edf2f7}.category-icon[data-v-57cd2fff]{color:#718096;font-size:12px;width:16px}.category-name[data-v-57cd2fff]{color:#2d3748;flex:1;font-size:14px;font-weight:600}.category-count[data-v-57cd2fff]{background:#e2e8f0;border-radius:12px;color:#4a5568;font-size:11px;font-weight:600;padding:2px 8px}.category-permissions[data-v-57cd2fff]{padding:8px}.permission-item[data-v-57cd2fff]{align-items:flex-start;border-radius:6px;cursor:pointer;display:flex;gap:12px;padding:12px;transition:all .2s}.permission-item[data-v-57cd2fff]:hover{background:#f7fafc}.permission-checkbox[data-v-57cd2fff]{cursor:pointer;flex-shrink:0;margin-top:2px}.permission-info[data-v-57cd2fff]{display:flex;flex:1;flex-direction:column;gap:4px}.permission-label[data-v-57cd2fff]{color:#2d3748;font-size:14px;font-weight:500}.permission-description[data-v-57cd2fff]{color:#718096;font-size:12px}.selected-summary[data-v-57cd2fff]{align-items:center;background:#ebf8ff;border-radius:6px;display:flex;gap:6px;margin-top:12px;padding:12px}.summary-label[data-v-57cd2fff]{color:#2c5282;font-size:13px;font-weight:600}.summary-count[data-v-57cd2fff]{background:#4299e1;border-radius:12px;color:#fff;font-size:12px;font-weight:700;padding:2px 10px}.summary-text[data-v-57cd2fff]{color:#2c5282;font-size:13px}.modal-footer[data-v-57cd2fff]{border-top:1px solid #e2e8f0;display:flex;gap:12px;justify-content:flex-end;padding:16px 24px}.btn-primary[data-v-57cd2fff],.btn-secondary[data-v-57cd2fff]{border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:500;padding:10px 24px;transition:all .2s}.btn-primary[data-v-57cd2fff]{background:#4299e1;color:#fff}.btn-primary[data-v-57cd2fff]:hover:not(:disabled){background:#3182ce}.btn-primary[data-v-57cd2fff]:disabled{background:#cbd5e0;cursor:not-allowed}.btn-secondary[data-v-57cd2fff]{background:#e2e8f0;color:#2d3748}.btn-secondary[data-v-57cd2fff]:hover{background:#cbd5e0}@media (max-width:768px){.modal-container[data-v-57cd2fff]{border-radius:0;max-height:100vh;max-width:100%}.modal-body[data-v-57cd2fff]{padding:16px}.level-input-group[data-v-57cd2fff]{align-items:stretch;flex-direction:column}.level-input[data-v-57cd2fff]{flex:1}.permissions-header[data-v-57cd2fff]{align-items:flex-start;flex-direction:column;gap:12px}.modal-footer[data-v-57cd2fff]{flex-direction:column-reverse}.btn-primary[data-v-57cd2fff],.btn-secondary[data-v-57cd2fff]{width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=roles-role-dialog.js.map