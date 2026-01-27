exports.ids = [147];
exports.modules = {

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/roles/RoleCard.vue?vue&type=template&id=8669effa&scoped=true
var render = function render() {
  var _vm$role$users, _vm$role$users2, _vm$role$users3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "role-card",
    class: {
      inactive: !_vm.role.isActive
    }
  }, [_vm._ssrNode("<div class=\"card-header\" data-v-8669effa><div class=\"role-info\" data-v-8669effa><div class=\"role-name\" data-v-8669effa><span class=\"name-text\" data-v-8669effa>" + _vm._ssrEscape(_vm._s(_vm.role.name)) + "</span> " + (!_vm.role.isActive ? "<span class=\"inactive-badge\" data-v-8669effa>Inactive</span>" : "<!---->") + "</div> <div class=\"role-level\" data-v-8669effa><span" + _vm._ssrClass("level-badge", _vm.getLevelClass(_vm.role.level)) + " data-v-8669effa>" + _vm._ssrEscape("\n          Level " + _vm._s(_vm.role.level) + "\n        ") + "</span></div></div> <div class=\"card-actions\" data-v-8669effa><button title=\"Edit\" class=\"action-icon\" data-v-8669effa>\n        ✏️\n      </button> <button title=\"More\" class=\"action-icon\" data-v-8669effa>\n        ⋮\n      </button> " + (_vm.showMenu ? "<div class=\"dropdown-menu\" data-v-8669effa><button class=\"menu-item\" data-v-8669effa><span class=\"menu-icon\" data-v-8669effa>📋</span> <span data-v-8669effa>Clone Role</span></button> <button class=\"menu-item\" data-v-8669effa><span class=\"menu-icon\" data-v-8669effa>👥</span> <span data-v-8669effa>" + _vm._ssrEscape("View Users (" + _vm._s(((_vm$role$users = _vm.role.users) === null || _vm$role$users === void 0 ? void 0 : _vm$role$users.length) || 0) + ")") + "</span></button> <button class=\"menu-item\" data-v-8669effa><span class=\"menu-icon\" data-v-8669effa>" + _vm._ssrEscape(_vm._s(_vm.role.isActive ? '🔒' : '✓')) + "</span> <span data-v-8669effa>" + _vm._ssrEscape(_vm._s(_vm.role.isActive ? 'Deactivate' : 'Activate')) + "</span></button> " + (!_vm.isSystemRole ? "<button class=\"menu-item danger\" data-v-8669effa><span class=\"menu-icon\" data-v-8669effa>🗑️</span> <span data-v-8669effa>Delete</span></button>" : "<!---->") + "</div>" : "<!---->") + "</div></div> <div class=\"card-body\" data-v-8669effa>" + (_vm.role.description ? "<p class=\"role-description\" data-v-8669effa>" + _vm._ssrEscape("\n      " + _vm._s(_vm.role.description) + "\n    ") + "</p>" : "<p class=\"role-description empty\" data-v-8669effa>No description available</p>") + " <div class=\"permissions-section\" data-v-8669effa><h4 class=\"section-title\" data-v-8669effa>Permissions</h4> " + (_vm.role.permissions && _vm.role.permissions.length > 0 ? "<div class=\"permissions-list\" data-v-8669effa>" + _vm._ssrList(_vm.displayPermissions, function (permission, index) {
    return "<span class=\"permission-tag\" data-v-8669effa>" + _vm._ssrEscape("\n          " + _vm._s(_vm.formatPermission(permission)) + "\n        ") + "</span>";
  }) + " " + (_vm.role.permissions.length > _vm.maxDisplayPermissions ? "<span class=\"permission-tag more\" data-v-8669effa>" + _vm._ssrEscape("\n          +" + _vm._s(_vm.role.permissions.length - _vm.maxDisplayPermissions) + " more\n        ") + "</span>" : "<!---->") + "</div>" : "<p class=\"no-permissions\" data-v-8669effa>No permissions assigned</p>") + "</div> <div class=\"users-section\" data-v-8669effa><div class=\"users-info\" data-v-8669effa><span class=\"users-icon\" data-v-8669effa>👥</span> <span class=\"users-count\" data-v-8669effa>" + _vm._ssrEscape("\n          " + _vm._s(((_vm$role$users2 = _vm.role.users) === null || _vm$role$users2 === void 0 ? void 0 : _vm$role$users2.length) || 0) + " " + _vm._s(((_vm$role$users3 = _vm.role.users) === null || _vm$role$users3 === void 0 ? void 0 : _vm$role$users3.length) === 1 ? 'user' : 'users') + "\n        ") + "</span></div></div></div> <div class=\"card-footer\" data-v-8669effa><button class=\"footer-btn btn-edit\" data-v-8669effa>\n      Edit Role\n    </button> <button class=\"footer-btn btn-users\" data-v-8669effa>\n      View Users\n    </button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/roles/RoleCard.vue?vue&type=template&id=8669effa&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/roles/RoleCard.vue?vue&type=script&lang=js
/* harmony default export */ var RoleCardvue_type_script_lang_js = ({
  name: 'RoleCard',
  props: {
    role: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showMenu: false,
      maxDisplayPermissions: 5
    };
  },
  computed: {
    isSystemRole() {
      const systemRoles = ['admin', 'superadmin', 'manager', 'staff'];
      return systemRoles.includes(this.role.name);
    },
    displayPermissions() {
      if (!this.role.permissions) return [];
      return this.role.permissions.slice(0, this.maxDisplayPermissions);
    }
  },
  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', this.closeMenu);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  },
  methods: {
    closeMenu() {
      this.showMenu = false;
    },
    getLevelClass(level) {
      if (level >= 100) return 'level-admin';
      if (level >= 50) return 'level-manager';
      if (level >= 30) return 'level-supervisor';
      return 'level-staff';
    },
    formatPermission(permission) {
      // Convert 'ticket.create' to 'Create Tickets'
      const parts = permission.split('.');
      if (parts.length === 2) {
        const action = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
        const resource = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        return `${action} ${resource}`;
      }
      return permission;
    },
    handleClone() {
      this.showMenu = false;
      this.$emit('clone', this.role);
    },
    handleViewUsers() {
      this.showMenu = false;
      this.$emit('view-users', this.role);
    },
    handleToggleStatus() {
      this.showMenu = false;
      this.$emit('toggle-status', this.role);
    },
    handleDelete() {
      this.showMenu = false;
      this.$emit('delete', this.role);
    }
  }
});
// CONCATENATED MODULE: ./components/roles/RoleCard.vue?vue&type=script&lang=js
 /* harmony default export */ var roles_RoleCardvue_type_script_lang_js = (RoleCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/roles/RoleCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(837)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  roles_RoleCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8669effa",
  "15bc60cb"
  
)

/* harmony default export */ var RoleCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(838);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("953a6038", content, true, context)
};

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCard_vue_vue_type_style_index_0_id_8669effa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(730);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCard_vue_vue_type_style_index_0_id_8669effa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCard_vue_vue_type_style_index_0_id_8669effa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCard_vue_vue_type_style_index_0_id_8669effa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCard_vue_vue_type_style_index_0_id_8669effa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".role-card[data-v-8669effa]{background:#fff;border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.1);display:flex;flex-direction:column;position:relative;transition:all .3s ease}.role-card[data-v-8669effa]:hover{border-color:#4299e1;box-shadow:0 8px 24px rgba(0,0,0,.15);transform:translateY(-4px)}.role-card.inactive[data-v-8669effa]{border-color:#cbd5e0;opacity:.7}.card-header[data-v-8669effa]{align-items:flex-start;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;padding:20px}.role-info[data-v-8669effa]{flex:1}.role-name[data-v-8669effa]{align-items:center;display:flex;gap:8px;margin-bottom:8px}.name-text[data-v-8669effa]{color:#1a202c;font-size:20px;font-weight:700;text-transform:capitalize}.inactive-badge[data-v-8669effa]{background:#fc8181;border-radius:12px;color:#fff;font-size:11px;font-weight:600;padding:2px 8px}.role-level[data-v-8669effa]{align-items:center;display:flex}.level-badge[data-v-8669effa]{border-radius:16px;font-size:12px;font-weight:600;letter-spacing:.5px;padding:4px 12px;text-transform:uppercase}.level-admin[data-v-8669effa]{background:#fed7d7;color:#c53030}.level-manager[data-v-8669effa]{background:#feebc8;color:#c05621}.level-supervisor[data-v-8669effa]{background:#bee3f8;color:#2c5282}.level-staff[data-v-8669effa]{background:#e2e8f0;color:#2d3748}.card-actions[data-v-8669effa]{display:flex;gap:8px;position:relative}.action-icon[data-v-8669effa]{background:transparent;border:none;border-radius:4px;cursor:pointer;font-size:18px;padding:4px 8px;transition:all .2s}.action-icon[data-v-8669effa]:hover{background:#f7fafc}.dropdown-menu[data-v-8669effa]{background:#fff;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.15);margin-top:4px;min-width:180px;padding:8px 0;position:absolute;right:0;top:100%;z-index:10}.menu-item[data-v-8669effa]{align-items:center;background:transparent;border:none;color:#2d3748;cursor:pointer;display:flex;font-size:14px;gap:12px;padding:10px 16px;text-align:left;transition:all .2s;width:100%}.menu-item[data-v-8669effa]:hover{background:#f7fafc}.menu-item.danger[data-v-8669effa]{color:#e53e3e}.menu-item.danger[data-v-8669effa]:hover{background:#fff5f5}.menu-icon[data-v-8669effa]{font-size:16px}.card-body[data-v-8669effa]{flex:1;padding:20px}.role-description[data-v-8669effa]{color:#4a5568;font-size:14px;line-height:1.6;margin:0 0 16px}.role-description.empty[data-v-8669effa]{color:#a0aec0;font-style:italic}.permissions-section[data-v-8669effa]{margin-bottom:16px}.section-title[data-v-8669effa]{color:#718096;font-size:13px;font-weight:600;letter-spacing:.5px;margin:0 0 12px;text-transform:uppercase}.permissions-list[data-v-8669effa]{display:flex;flex-wrap:wrap;gap:6px}.permission-tag[data-v-8669effa]{background:#ebf8ff;border-radius:12px;color:#2c5282;font-size:11px;font-weight:600;padding:4px 10px}.permission-tag.more[data-v-8669effa]{background:#e2e8f0;color:#4a5568}.no-permissions[data-v-8669effa]{color:#a0aec0;font-size:13px;font-style:italic;margin:0}.users-section[data-v-8669effa]{border-top:1px solid #e2e8f0;padding-top:16px}.users-info[data-v-8669effa]{align-items:center;display:flex;gap:8px}.users-icon[data-v-8669effa]{font-size:18px}.users-count[data-v-8669effa]{color:#4a5568;font-size:14px;font-weight:600}.card-footer[data-v-8669effa]{border-top:1px solid #e2e8f0;display:flex;gap:8px;padding:16px 20px}.footer-btn[data-v-8669effa]{border:none;border-radius:6px;cursor:pointer;flex:1;font-size:13px;font-weight:600;padding:8px 16px;transition:all .2s}.btn-edit[data-v-8669effa]{background:#4299e1;color:#fff}.btn-edit[data-v-8669effa]:hover{background:#3182ce}.btn-users[data-v-8669effa]{background:#e2e8f0;color:#2d3748}.btn-users[data-v-8669effa]:hover{background:#cbd5e0}@media (max-width:768px){.role-card[data-v-8669effa]{margin-bottom:16px}.card-footer[data-v-8669effa]{flex-direction:column}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=roles-role-card.js.map