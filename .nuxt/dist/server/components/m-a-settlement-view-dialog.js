exports.ids = [81];
exports.modules = {

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(585);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6ba9f626", content, true, context)
};

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(515);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fbd763dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-dialog-overlay[data-v-fbd763dc]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1000}.settlement-dialog[data-v-fbd763dc]{background:#fff;border-radius:8px;box-shadow:0 10px 25px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:900px;width:100%}.dialog-header[data-v-fbd763dc]{align-items:center;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;padding:20px 24px}.dialog-title[data-v-fbd763dc]{color:#111827;font-size:1.5rem;font-weight:600;margin:0}.close-button[data-v-fbd763dc]{background:none;border:none;border-radius:4px;color:#6b7280;cursor:pointer;padding:4px;transition:all .2s}.close-button[data-v-fbd763dc]:hover{background-color:#f3f4f6;color:#374151}.dialog-content[data-v-fbd763dc]{flex:1;overflow-y:auto;padding:0 24px}.settlement-details[data-v-fbd763dc]{padding:20px 0}.info-section[data-v-fbd763dc]{margin-bottom:32px}.info-section[data-v-fbd763dc]:last-child{margin-bottom:0}.section-title[data-v-fbd763dc]{border-bottom:2px solid #e5e7eb;color:#374151;font-size:1.125rem;font-weight:600;margin:0 0 16px;padding-bottom:8px}.info-grid[data-v-fbd763dc]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.info-item[data-v-fbd763dc]{display:flex;flex-direction:column;gap:4px}.info-item.full-width[data-v-fbd763dc]{grid-column:1/-1}.info-item label[data-v-fbd763dc]{color:#6b7280;font-size:.875rem;font-weight:500}.info-item span[data-v-fbd763dc]{color:#111827;font-size:.875rem;word-break:break-word}.amount[data-v-fbd763dc]{color:#059669;font-weight:600}.method[data-v-fbd763dc]{color:#3b82f6;font-weight:500}.status[data-v-fbd763dc]{border-radius:12px;font-size:.75rem;font-weight:500;letter-spacing:.05em;padding:2px 8px;text-transform:uppercase;width:-moz-fit-content;width:fit-content}.status.active[data-v-fbd763dc]{background-color:#d1fae5;color:#065f46}.status.inactive[data-v-fbd763dc]{background-color:#fee2e2;color:#991b1b}.status.approved[data-v-fbd763dc]{background-color:#dbeafe;color:#1e40af}.status.settled[data-v-fbd763dc]{background-color:#d1fae5;color:#065f46}.no-data[data-v-fbd763dc]{color:#6b7280;padding:40px 20px;text-align:center}.dialog-footer[data-v-fbd763dc]{border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;padding:20px 24px}.btn[data-v-fbd763dc]{border:none;border-radius:6px;cursor:pointer;font-size:.875rem;font-weight:500;padding:8px 16px;transition:all .2s}.btn-secondary[data-v-fbd763dc]{background-color:#f3f4f6;color:#374151}.btn-secondary[data-v-fbd763dc]:hover{background-color:#e5e7eb}@media (max-width:768px){.settlement-dialog-overlay[data-v-fbd763dc]{padding:10px}.settlement-dialog[data-v-fbd763dc]{max-height:95vh}.dialog-header[data-v-fbd763dc]{padding:16px 20px}.dialog-content[data-v-fbd763dc]{padding:0 20px}.info-grid[data-v-fbd763dc]{grid-template-columns:1fr}.dialog-title[data-v-fbd763dc]{font-size:1.25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementViewDialog/index.vue?vue&type=template&id=fbd763dc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "settlement-dialog-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"settlement-dialog\" data-v-fbd763dc><div class=\"dialog-header\" data-v-fbd763dc><h2 class=\"dialog-title\" data-v-fbd763dc>Settlement Details</h2> <button class=\"close-button\" data-v-fbd763dc><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-fbd763dc><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\" data-v-fbd763dc></line> <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\" data-v-fbd763dc></line></svg></button></div> <div class=\"dialog-content\" data-v-fbd763dc>" + (_vm.settlement ? "<div class=\"settlement-details\" data-v-fbd763dc><div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Settlement Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Settlement ID:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.id)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Booking Date:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.settlement.bookingDate))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Amount:</label> <span class=\"amount\" data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.settlement.amount))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Method:</label> <span class=\"method\" data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatMethod(_vm.settlement.method))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Created At:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.settlement.createdAt))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Last Updated:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.settlement.updateTimestamp))) + "</span></div> " + (_vm.settlement.notes ? "<div class=\"info-item full-width\" data-v-fbd763dc><label data-v-fbd763dc>Notes:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.notes)) + "</span></div>" : "<!---->") + "</div></div> " + (_vm.settlement.proceeder ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Proceeder Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Customer ID:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.cus_id)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.cus_name)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Telephone:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.cus_tel)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Email:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.cus_email)) + "</span></div> " + (_vm.settlement.proceeder.village ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Village:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.village)) + "</span></div>" : "<!---->") + " " + (_vm.settlement.proceeder.district ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>District:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.district)) + "</span></div>" : "<!---->") + " " + (_vm.settlement.proceeder.province ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Province:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.proceeder.province)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Status:</label> <span" + _vm._ssrClass(null, ['status', _vm.settlement.proceeder.cus_active ? 'active' : 'inactive']) + " data-v-fbd763dc>" + _vm._ssrEscape("\n                " + _vm._s(_vm.settlement.proceeder.cus_active ? 'Active' : 'Inactive') + "\n              ") + "</span></div></div></div>" : "<!---->") + " " + (_vm.settlement.moneyAdvance ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Money Advance Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Advance ID:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.moneyAdvance.id)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Amount:</label> <span class=\"amount\" data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.settlement.moneyAdvance.amount))) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Purpose:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.moneyAdvance.purpose || 'N/A')) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Status:</label> <span" + _vm._ssrClass(null, ['status', _vm.settlement.moneyAdvance.status]) + " data-v-fbd763dc>" + _vm._ssrEscape("\n                " + _vm._s(_vm.settlement.moneyAdvance.status) + "\n              ") + "</span></div> " + (_vm.settlement.moneyAdvance.currency ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Currency:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.moneyAdvance.currency.code) + " - " + _vm._s(_vm.settlement.moneyAdvance.currency.name)) + "</span></div>" : "<!---->") + " " + (_vm.settlement.moneyAdvance.maker ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Maker:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.moneyAdvance.maker.cus_name)) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.settlement.bankAccount ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Bank Account Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Number:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.accountNumber)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.accountName)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Bank Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.bankName)) + "</span></div> " + (_vm.settlement.bankAccount.bankBranch ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Bank Branch:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.bankBranch)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Type:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.accountType)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Currency:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.bankAccount.currency)) + "</span></div></div></div>" : "<!---->") + " " + (_vm.settlement.ministry ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Ministry Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Ministry Code:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.ministry.ministryCode)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Ministry Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.ministry.ministryName)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Ministry Name (EN):</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.ministry.ministryNameEn)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Type:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.ministry.ministryType)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Status:</label> <span" + _vm._ssrClass(null, ['status', _vm.settlement.ministry.status.toLowerCase()]) + " data-v-fbd763dc>" + _vm._ssrEscape("\n                " + _vm._s(_vm.settlement.ministry.status) + "\n              ") + "</span></div> " + (_vm.settlement.ministry.establishedDate ? "<div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Established Date:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.settlement.ministry.establishedDate))) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.settlement.chartAccount ? "<div class=\"info-section\" data-v-fbd763dc><h3 class=\"section-title\" data-v-fbd763dc>Chart Account Information</h3> <div class=\"info-grid\" data-v-fbd763dc><div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Number:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.chartAccount.accountNumber)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Name:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.chartAccount.accountName)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Account Type:</label> <span data-v-fbd763dc>" + _vm._ssrEscape(_vm._s(_vm.settlement.chartAccount.accountType)) + "</span></div> <div class=\"info-item\" data-v-fbd763dc><label data-v-fbd763dc>Status:</label> <span" + _vm._ssrClass(null, ['status', _vm.settlement.chartAccount.isActive ? 'active' : 'inactive']) + " data-v-fbd763dc>" + _vm._ssrEscape("\n                " + _vm._s(_vm.settlement.chartAccount.isActive ? 'Active' : 'Inactive') + "\n              ") + "</span></div></div></div>" : "<!---->") + "</div>" : "<div class=\"no-data\" data-v-fbd763dc><p data-v-fbd763dc>No settlement data available</p></div>") + "</div> <div class=\"dialog-footer\" data-v-fbd763dc><button class=\"btn btn-secondary\" data-v-fbd763dc>Close</button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementViewDialog/index.vue?vue&type=template&id=fbd763dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementViewDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settlementViewDialogvue_type_script_lang_js_ = ({
  name: 'SettlementViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    settlement: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    formatDate(dateString) {
      if (!dateString || dateString === '0000-00-00') return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatDateTime(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatAmount(amount) {
      if (!amount) return '0';
      return new Intl.NumberFormat('en-US').format(amount);
    },
    formatMethod(method) {
      if (!method) return 'N/A';
      return method.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementViewDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementViewDialogvue_type_script_lang_js_ = (settlementViewDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementViewDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(584)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementViewDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fbd763dc",
  "a7b8cbde"
  
)

/* harmony default export */ var settlementViewDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-settlement-view-dialog.js.map