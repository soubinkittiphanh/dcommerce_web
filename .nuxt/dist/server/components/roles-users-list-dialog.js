exports.ids = [135];
exports.modules = {

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(767);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2628666c", content, true, context)
};

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListDialog_vue_vue_type_style_index_0_id_783f0bc4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListDialog_vue_vue_type_style_index_0_id_783f0bc4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListDialog_vue_vue_type_style_index_0_id_783f0bc4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListDialog_vue_vue_type_style_index_0_id_783f0bc4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListDialog_vue_vue_type_style_index_0_id_783f0bc4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-783f0bc4]{align-items:center;animation:fadeIn-783f0bc4 .2s ease;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-783f0bc4{0%{opacity:0}to{opacity:1}}.modal-container[data-v-783f0bc4]{animation:slideUp-783f0bc4 .3s ease;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:700px;width:100%}@keyframes slideUp-783f0bc4{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.modal-header[data-v-783f0bc4]{border-bottom:1px solid #e2e8f0;justify-content:space-between;padding:24px}.header-info[data-v-783f0bc4],.modal-header[data-v-783f0bc4]{align-items:center;display:flex}.header-info[data-v-783f0bc4]{flex-wrap:wrap;gap:12px}.modal-title[data-v-783f0bc4]{color:#1a202c;font-size:20px;font-weight:700;margin:0;text-transform:capitalize}.user-count-badge[data-v-783f0bc4]{background:#4299e1;border-radius:16px;color:#fff;font-size:12px;font-weight:600;padding:4px 12px}.modal-close[data-v-783f0bc4]{align-items:center;background:none;border:none;border-radius:4px;color:#718096;cursor:pointer;display:flex;flex-shrink:0;font-size:32px;height:32px;justify-content:center;padding:0;transition:all .2s;width:32px}.modal-close[data-v-783f0bc4]:hover{background:#f7fafc;color:#2d3748}.modal-body[data-v-783f0bc4]{flex:1;overflow-y:auto;padding:24px}.search-section[data-v-783f0bc4]{margin-bottom:20px}.search-input[data-v-783f0bc4]{border:1px solid #e2e8f0;border-radius:8px;font-size:14px;padding:10px 14px;transition:all .2s;width:100%}.search-input[data-v-783f0bc4]:focus{border-color:#4299e1;box-shadow:0 0 0 3px rgba(66,153,225,.1);outline:none}.empty-state[data-v-783f0bc4]{padding:60px 20px;text-align:center}.empty-icon[data-v-783f0bc4]{font-size:64px;margin-bottom:16px;opacity:.5}.empty-state h3[data-v-783f0bc4]{color:#2d3748;font-size:18px;margin:0 0 8px}.empty-state p[data-v-783f0bc4]{color:#718096;font-size:14px;margin:0}.users-list[data-v-783f0bc4]{display:flex;flex-direction:column;gap:12px}.user-item[data-v-783f0bc4]{align-items:center;background:#f7fafc;border:1px solid #e2e8f0;border-radius:8px;display:flex;gap:16px;padding:16px;transition:all .2s}.user-item[data-v-783f0bc4]:hover{background:#fff;border-color:#cbd5e0;box-shadow:0 2px 8px rgba(0,0,0,.08)}.user-item.inactive[data-v-783f0bc4]{opacity:.6}.user-avatar[data-v-783f0bc4]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:50%;display:flex;flex-shrink:0;height:48px;justify-content:center;width:48px}.avatar-text[data-v-783f0bc4]{color:#fff;font-size:16px;font-weight:700}.user-info[data-v-783f0bc4]{flex:1;min-width:0}.user-name[data-v-783f0bc4]{align-items:center;color:#1a202c;display:flex;font-size:15px;font-weight:600;gap:8px;margin-bottom:6px}.inactive-badge[data-v-783f0bc4]{background:#fc8181;border-radius:12px;color:#fff;font-size:10px;font-weight:600;padding:2px 8px}.user-details[data-v-783f0bc4]{display:flex;flex-direction:column;gap:4px;margin-bottom:6px}.detail-item[data-v-783f0bc4]{align-items:center;color:#4a5568;display:flex;font-size:13px;gap:6px}.detail-icon[data-v-783f0bc4]{font-size:14px}.user-meta[data-v-783f0bc4]{color:#718096;font-size:12px;font-style:italic}.user-actions[data-v-783f0bc4]{display:flex;flex-shrink:0;gap:8px}.action-btn[data-v-783f0bc4]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:16px;height:36px;justify-content:center;transition:all .2s;width:36px}.btn-view[data-v-783f0bc4]{background:#e2e8f0}.btn-view[data-v-783f0bc4]:hover{background:#cbd5e0}.btn-edit[data-v-783f0bc4]{background:#bee3f8}.btn-edit[data-v-783f0bc4]:hover{background:#90cdf4}.modal-footer[data-v-783f0bc4]{align-items:center;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;padding:16px 24px}.footer-info[data-v-783f0bc4]{flex:1}.info-text[data-v-783f0bc4]{color:#718096;font-size:13px;font-weight:500}.btn-close[data-v-783f0bc4]{background:#4299e1;border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:14px;font-weight:500;padding:10px 24px;transition:all .2s}.btn-close[data-v-783f0bc4]:hover{background:#3182ce}@media (max-width:768px){.modal-container[data-v-783f0bc4]{border-radius:0;max-height:100vh;max-width:100%}.modal-header[data-v-783f0bc4]{padding:16px}.header-info[data-v-783f0bc4]{align-items:flex-start;flex-direction:column;gap:8px}.modal-title[data-v-783f0bc4]{font-size:18px}.modal-body[data-v-783f0bc4]{padding:16px}.user-item[data-v-783f0bc4]{align-items:flex-start;flex-direction:column;gap:12px}.user-actions[data-v-783f0bc4]{justify-content:flex-end;width:100%}.modal-footer[data-v-783f0bc4]{flex-direction:column-reverse;gap:12px;padding:16px}.btn-close[data-v-783f0bc4]{width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/roles/UsersListDialog.vue?vue&type=template&id=783f0bc4&scoped=true
var render = function render() {
  var _vm$role;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_vm._ssrNode("<div class=\"modal-container\" data-v-783f0bc4><div class=\"modal-header\" data-v-783f0bc4><div class=\"header-info\" data-v-783f0bc4><h2 class=\"modal-title\" data-v-783f0bc4>" + _vm._ssrEscape("Users with Role: " + _vm._s(((_vm$role = _vm.role) === null || _vm$role === void 0 ? void 0 : _vm$role.name) || 'N/A')) + "</h2> <span class=\"user-count-badge\" data-v-783f0bc4>" + _vm._ssrEscape(_vm._s(_vm.users.length) + " user(s)") + "</span></div> <button class=\"modal-close\" data-v-783f0bc4>×</button></div> <div class=\"modal-body\" data-v-783f0bc4><div class=\"search-section\" data-v-783f0bc4><input type=\"text\" placeholder=\"Search users...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " class=\"search-input\" data-v-783f0bc4></div> " + (_vm.filteredUsers.length === 0 ? "<div class=\"empty-state\" data-v-783f0bc4><div class=\"empty-icon\" data-v-783f0bc4>👥</div> <h3 data-v-783f0bc4>No users found</h3> " + (_vm.searchQuery ? "<p data-v-783f0bc4>Try adjusting your search</p>" : "<p data-v-783f0bc4>No users are assigned to this role yet</p>") + "</div>" : "<div class=\"users-list\" data-v-783f0bc4>" + _vm._ssrList(_vm.filteredUsers, function (user) {
    return "<div" + _vm._ssrClass("user-item", {
      inactive: !user.isActive
    }) + " data-v-783f0bc4><div class=\"user-avatar\" data-v-783f0bc4><span class=\"avatar-text\" data-v-783f0bc4>" + _vm._ssrEscape(_vm._s(_vm.getUserInitials(user))) + "</span></div> <div class=\"user-info\" data-v-783f0bc4><div class=\"user-name\" data-v-783f0bc4>" + _vm._ssrEscape("\n              " + _vm._s(user.firstName || user.username) + "\n              " + _vm._s(user.lastName || '') + "\n              ") + (!user.isActive ? "<span class=\"inactive-badge\" data-v-783f0bc4>Inactive</span>" : "<!---->") + "</div> <div class=\"user-details\" data-v-783f0bc4><span class=\"detail-item\" data-v-783f0bc4><span class=\"detail-icon\" data-v-783f0bc4>📧</span>" + _vm._ssrEscape("\n                " + _vm._s(user.email) + "\n              ") + "</span> " + (user.phone ? "<span class=\"detail-item\" data-v-783f0bc4><span class=\"detail-icon\" data-v-783f0bc4>📱</span>" + _vm._ssrEscape("\n                " + _vm._s(user.phone) + "\n              ") + "</span>" : "<!---->") + "</div> " + (user.lastLogin ? "<div class=\"user-meta\" data-v-783f0bc4>" + _vm._ssrEscape("\n              Last login: " + _vm._s(_vm.formatDate(user.lastLogin)) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"user-actions\" data-v-783f0bc4><button title=\"View User\" class=\"action-btn btn-view\" data-v-783f0bc4>\n              👁️\n            </button> <button title=\"Edit User\" class=\"action-btn btn-edit\" data-v-783f0bc4>\n              ✏️\n            </button></div></div>";
  }) + "</div>") + "</div> <div class=\"modal-footer\" data-v-783f0bc4><div class=\"footer-info\" data-v-783f0bc4><span class=\"info-text\" data-v-783f0bc4>" + _vm._ssrEscape("\n          Showing " + _vm._s(_vm.filteredUsers.length) + " of " + _vm._s(_vm.users.length) + " user(s)\n        ") + "</span></div> <button class=\"btn-close\" data-v-783f0bc4>Close</button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/roles/UsersListDialog.vue?vue&type=template&id=783f0bc4&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/roles/UsersListDialog.vue?vue&type=script&lang=js
/* harmony default export */ var UsersListDialogvue_type_script_lang_js = ({
  name: 'UsersListDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    role: {
      type: Object,
      default: null
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) {
        return this.users;
      }
      const query = this.searchQuery.toLowerCase();
      return this.users.filter(user => {
        var _user$username, _user$email, _user$firstName, _user$lastName, _user$phone;
        return ((_user$username = user.username) === null || _user$username === void 0 ? void 0 : _user$username.toLowerCase().includes(query)) || ((_user$email = user.email) === null || _user$email === void 0 ? void 0 : _user$email.toLowerCase().includes(query)) || ((_user$firstName = user.firstName) === null || _user$firstName === void 0 ? void 0 : _user$firstName.toLowerCase().includes(query)) || ((_user$lastName = user.lastName) === null || _user$lastName === void 0 ? void 0 : _user$lastName.toLowerCase().includes(query)) || ((_user$phone = user.phone) === null || _user$phone === void 0 ? void 0 : _user$phone.includes(query));
      });
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.searchQuery = '';
      }
    }
  },
  methods: {
    getUserInitials(user) {
      if (user.firstName && user.lastName) {
        return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
      }
      if (user.username) {
        return user.username.substring(0, 2).toUpperCase();
      }
      return '??';
    },
    formatDate(date) {
      if (!date) return 'Never';
      const d = new Date(date);
      const now = new Date();
      const diffMs = now - d;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHours / 24);
      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
      if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
      if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    viewUser(user) {
      // Navigate to user detail page or open user detail dialog
      this.$router.push(`/admin/users/${user.id}`);
      this.$emit('close');
    },
    editUser(user) {
      // Navigate to user edit page or open user edit dialog
      this.$router.push(`/admin/users/${user.id}/edit`);
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/roles/UsersListDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var roles_UsersListDialogvue_type_script_lang_js = (UsersListDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/roles/UsersListDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(766)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  roles_UsersListDialogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "783f0bc4",
  "a2983bce"
  
)

/* harmony default export */ var UsersListDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=roles-users-list-dialog.js.map