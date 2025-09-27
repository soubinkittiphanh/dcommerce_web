exports.ids = [64];
exports.modules = {

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(582);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3bcd7bf8", content, true, context)
};

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(514);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6a23e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-e6a23e30]{align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.comparison-dialog[data-v-e6a23e30]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1000px;overflow:hidden;width:95%}.modal-header[data-v-e6a23e30]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-e6a23e30]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-e6a23e30]{font-size:20px}.modal-title[data-v-e6a23e30]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-e6a23e30]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-e6a23e30]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-e6a23e30]{max-height:70vh;overflow-y:auto;padding:0}.error-state[data-v-e6a23e30],.loading-state[data-v-e6a23e30],.no-differences[data-v-e6a23e30],.select-versions-prompt[data-v-e6a23e30]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:60px 20px;text-align:center}.spinner[data-v-e6a23e30]{animation:spin-e6a23e30 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#667eea;height:40px;margin-bottom:20px;width:40px}@keyframes spin-e6a23e30{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.error-icon[data-v-e6a23e30],.no-diff-icon[data-v-e6a23e30],.prompt-icon[data-v-e6a23e30]{font-size:48px;margin-bottom:20px;opacity:.6}.error-icon[data-v-e6a23e30]{color:#e74c3c}.prompt-icon[data-v-e6a23e30]{color:#3498db}.no-diff-icon[data-v-e6a23e30]{color:#27ae60}.version-selector[data-v-e6a23e30]{grid-gap:20px;align-items:end;background:#f8f9fa;border-bottom:1px solid #e9ecef;display:grid;gap:20px;grid-template-columns:1fr auto 1fr;padding:24px}.selector-group[data-v-e6a23e30]{display:flex;flex-direction:column;gap:8px}.selector-group label[data-v-e6a23e30]{color:#2c3e50;font-size:14px;font-weight:600}.form-control[data-v-e6a23e30]{background:#fff;border:2px solid #e5e7eb;border-radius:8px;font-size:14px;padding:12px 16px;transition:border-color .2s ease}.form-control[data-v-e6a23e30]:focus{border-color:#667eea;outline:none}.comparison-arrow[data-v-e6a23e30]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;font-size:16px;height:40px;justify-content:center;margin-top:24px;width:40px}.comparison-results[data-v-e6a23e30]{padding:24px}.comparison-summary[data-v-e6a23e30]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:24px}.summary-card[data-v-e6a23e30]{background:#fff;border:1px solid #e9ecef;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);gap:12px;padding:16px}.summary-card[data-v-e6a23e30],.summary-icon[data-v-e6a23e30]{align-items:center;display:flex}.summary-icon[data-v-e6a23e30]{background:#667eea;border-radius:50%;color:#fff;font-size:16px;height:40px;justify-content:center;width:40px}.summary-number[data-v-e6a23e30]{color:#2c3e50;font-size:20px;font-weight:700}.summary-text[data-v-e6a23e30]{color:#2c3e50;font-size:12px;font-weight:600;word-break:break-word}.summary-label[data-v-e6a23e30]{color:#7f8c8d;font-size:11px;margin-top:4px}.differences-table h6[data-v-e6a23e30]{align-items:center;color:#2c3e50;display:flex;font-size:16px;font-weight:600;gap:8px;margin-bottom:16px}.table-container[data-v-e6a23e30]{border:1px solid #e9ecef;border-radius:8px;overflow:hidden}.comparison-table[data-v-e6a23e30]{background:#fff;border-collapse:collapse;width:100%}.comparison-table th[data-v-e6a23e30]{background:#f8f9fa;border-bottom:2px solid #e9ecef;font-size:13px;font-weight:600;padding:16px 12px;text-align:left}.field-header[data-v-e6a23e30]{color:#495057;width:200px}.version-header[data-v-e6a23e30]{position:relative}.version-header.version1[data-v-e6a23e30]{background:linear-gradient(135deg,#ffe6e6,#fcc)}.version-header.version2[data-v-e6a23e30]{background:linear-gradient(135deg,#e6ffe6,#cfc)}.version-info[data-v-e6a23e30]{text-align:center}.version-label[data-v-e6a23e30]{color:#2c3e50;font-weight:700}.version-date[data-v-e6a23e30]{color:#7f8c8d;font-size:11px;margin-top:2px}.comparison-table td[data-v-e6a23e30]{border-bottom:1px solid #f1f3f4;padding:16px 12px;vertical-align:top}.diff-row[data-v-e6a23e30]:hover{background:#f8f9fa}.field-cell[data-v-e6a23e30]{background:#fafbfc;border-right:1px solid #e9ecef}.field-info[data-v-e6a23e30]{align-items:center;display:flex;gap:8px}.field-info i[data-v-e6a23e30]{color:#6c757d;text-align:center;width:16px}.field-name[data-v-e6a23e30]{color:#495057;font-size:13px;font-weight:600}.value-cell[data-v-e6a23e30]{position:relative}.value-cell.version1[data-v-e6a23e30]{background:#fff8f8}.value-cell.version2[data-v-e6a23e30]{background:#f8fff8}.value-content[data-v-e6a23e30]{align-items:center;display:flex;justify-content:space-between;min-height:24px;position:relative}.value-text[data-v-e6a23e30]{background:hsla(0,0%,100%,.8);border:1px solid transparent;border-radius:4px;flex:1;font-family:\"Monaco\",\"Menlo\",\"Ubuntu Mono\",monospace;font-size:12px;padding:6px 10px}.old-value .value-text[data-v-e6a23e30]{background:#fef2f2;border-color:#fecaca;color:#dc2626}.new-value .value-text[data-v-e6a23e30]{background:#f0fdf4;border-color:#bbf7d0;color:#059669}.change-indicator[data-v-e6a23e30]{color:#3b82f6;font-size:12px;margin-left:8px;opacity:.7}.comparison-actions[data-v-e6a23e30]{gap:12px;justify-content:center;margin-top:24px;padding-top:24px}.comparison-actions[data-v-e6a23e30],.modal-footer[data-v-e6a23e30]{border-top:1px solid #e9ecef;display:flex}.modal-footer[data-v-e6a23e30]{align-items:center;background:#f8f9fa;justify-content:space-between;padding:20px 24px}.btn[data-v-e6a23e30]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-e6a23e30]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-e6a23e30]:disabled{cursor:not-allowed;opacity:.6;transform:none!important}.btn-primary[data-v-e6a23e30]{background:#667eea;color:#fff}.btn-secondary[data-v-e6a23e30]{background:#6c757d;color:#fff}.btn-warning[data-v-e6a23e30]{background:#f39c12;color:#fff}.btn-outline[data-v-e6a23e30]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline[data-v-e6a23e30]:hover:not(:disabled){background:#667eea;color:#fff}.btn-sm[data-v-e6a23e30]{font-size:12px;padding:8px 16px}@media (max-width:768px){.comparison-dialog[data-v-e6a23e30]{margin:10px;width:98%}.version-selector[data-v-e6a23e30]{gap:16px;grid-template-columns:1fr}.comparison-arrow[data-v-e6a23e30]{margin:0 auto;transform:rotate(90deg)}.comparison-summary[data-v-e6a23e30]{grid-template-columns:1fr}.comparison-table[data-v-e6a23e30]{font-size:12px}.comparison-table td[data-v-e6a23e30],.comparison-table th[data-v-e6a23e30]{padding:12px 8px}.field-header[data-v-e6a23e30]{width:auto}.modal-footer[data-v-e6a23e30]{gap:12px}.comparison-actions[data-v-e6a23e30],.modal-footer[data-v-e6a23e30]{flex-direction:column}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentCompareDialog/index.vue?vue&type=template&id=e6a23e30&scoped=true&
var render = function render() {
  var _vm$recordData;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog comparison-dialog\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-e6a23e30><div class=\"modal-title-section\" data-v-e6a23e30><i class=\"fas fa-code-compare modal-icon\" data-v-e6a23e30></i> <h5 class=\"modal-title\" data-v-e6a23e30>" + _vm._ssrEscape("\n          ປຽບທຽບເວີຊັ່ນ - " + _vm._s(((_vm$recordData = _vm.recordData) === null || _vm$recordData === void 0 ? void 0 : _vm$recordData.purpose) || `Record #${_vm.recordId}`) + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-e6a23e30><i class=\"fas fa-times\" data-v-e6a23e30></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-e6a23e30>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-state\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-e6a23e30></div> <p data-v-e6a23e30>ກຳລັງໂຫຼດຂໍ້ມູນສຳລັບປຽບທຽບ...</p>")], 2) : _vm.error ? _vm._ssrNode("<div class=\"error-state\" data-v-e6a23e30><div class=\"error-icon\" data-v-e6a23e30><i class=\"fas fa-exclamation-triangle\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ</h6> <p data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p> <button class=\"btn btn-primary btn-sm\" data-v-e6a23e30><i class=\"fas fa-redo\" data-v-e6a23e30></i>\n          ລອງໃໝ່\n        </button></div>") : _vm._ssrNode("<div class=\"comparison-content\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"version-selector\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<div class=\"selector-group\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<label data-v-e6a23e30>ເວີຊັ່ນທີ່ 1 (ເກົ່າ):</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedVersion1,
      expression: "selectedVersion1"
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
        _vm.selectedVersion1 = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.loadComparison]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກເວີຊັ່ນ...")]), _vm._v(" "), _vm._l(_vm.availableVersions, function (version) {
    return _c('option', {
      key: version.id,
      attrs: {
        "disabled": version.id === _vm.selectedVersion2
      },
      domProps: {
        "value": version.id
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getVersionLabel(version)) + "\n              ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"comparison-arrow\" data-v-e6a23e30><i class=\"fas fa-exchange-alt\" data-v-e6a23e30></i></div> "), _vm._ssrNode("<div class=\"selector-group\" data-v-e6a23e30>", "</div>", [_vm._ssrNode("<label data-v-e6a23e30>ເວີຊັ່ນທີ່ 2 (ໃໝ່):</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedVersion2,
      expression: "selectedVersion2"
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
        _vm.selectedVersion2 = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.loadComparison]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກເວີຊັ່ນ...")]), _vm._v(" "), _vm._l(_vm.availableVersions, function (version) {
    return _c('option', {
      key: version.id,
      attrs: {
        "disabled": version.id === _vm.selectedVersion1
      },
      domProps: {
        "value": version.id
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getVersionLabel(version)) + "\n              ")]);
  })], 2)], 2)], 2), _vm._ssrNode(" " + (_vm.comparisonData ? "<div class=\"comparison-results\" data-v-e6a23e30><div class=\"comparison-summary\" data-v-e6a23e30><div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-edit\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-number\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(Object.keys(_vm.comparisonData.differences || {}).length)) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ການປ່ຽນແປງ</div></div></div> <div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-calendar\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-number\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getTimeDifference())) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ວັນຫ່າງກັນ</div></div></div> <div class=\"summary-card\" data-v-e6a23e30><div class=\"summary-icon\" data-v-e6a23e30><i class=\"fas fa-user\" data-v-e6a23e30></i></div> <div class=\"summary-info\" data-v-e6a23e30><div class=\"summary-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getDifferentUsers())) + "</div> <div class=\"summary-label\" data-v-e6a23e30>ຜູ້ປ່ຽນແປງ</div></div></div></div> " + (Object.keys(_vm.comparisonData.differences || {}).length === 0 ? "<div class=\"no-differences\" data-v-e6a23e30><div class=\"no-diff-icon\" data-v-e6a23e30><i class=\"fas fa-equals\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ບໍ່ມີການປ່ຽນແປງ</h6> <p data-v-e6a23e30>ເວີຊັ່ນທັງສອງມີຂໍ້ມູນຄືກັນ</p></div>" : "<div class=\"differences-table\" data-v-e6a23e30><h6 data-v-e6a23e30><i class=\"fas fa-list\" data-v-e6a23e30></i>\n              ລາຍລະອຽດການປ່ຽນແປງ\n            </h6> <div class=\"table-container\" data-v-e6a23e30><table class=\"comparison-table\" data-v-e6a23e30><thead data-v-e6a23e30><tr data-v-e6a23e30><th class=\"field-header\" data-v-e6a23e30>ຟິວ</th> <th class=\"version-header version1\" data-v-e6a23e30><div class=\"version-info\" data-v-e6a23e30><div class=\"version-label\" data-v-e6a23e30>" + _vm._ssrEscape("ເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion1))) + "</div> <div class=\"version-date\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getVersionDate(_vm.selectedVersion1))) + "</div></div></th> <th class=\"version-header version2\" data-v-e6a23e30><div class=\"version-info\" data-v-e6a23e30><div class=\"version-label\" data-v-e6a23e30>" + _vm._ssrEscape("ເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion2))) + "</div> <div class=\"version-date\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getVersionDate(_vm.selectedVersion2))) + "</div></div></th></tr></thead> <tbody data-v-e6a23e30>" + _vm._ssrList(_vm.comparisonData.differences, function (diff, field) {
    return "<tr class=\"diff-row\" data-v-e6a23e30><td class=\"field-cell\" data-v-e6a23e30><div class=\"field-info\" data-v-e6a23e30><i" + _vm._ssrClass(null, _vm.getFieldIcon(field)) + " data-v-e6a23e30></i> <span class=\"field-name\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.getFieldLabel(field))) + "</span></div></td> <td class=\"value-cell version1\" data-v-e6a23e30><div class=\"value-content old-value\" data-v-e6a23e30><div class=\"value-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.formatValue(diff.current))) + "</div></div></td> <td class=\"value-cell version2\" data-v-e6a23e30><div class=\"value-content new-value\" data-v-e6a23e30><div class=\"value-text\" data-v-e6a23e30>" + _vm._ssrEscape(_vm._s(_vm.formatValue(diff.version))) + "</div> <div class=\"change-indicator\" data-v-e6a23e30><i class=\"fas fa-arrow-left\" data-v-e6a23e30></i></div></div></td></tr>";
  }) + "</tbody></table></div></div>") + " " + (Object.keys(_vm.comparisonData.differences || {}).length > 0 ? "<div class=\"comparison-actions\" data-v-e6a23e30>" + (_vm.canRestore ? "<button class=\"btn btn-warning\" data-v-e6a23e30><i class=\"fas fa-undo\" data-v-e6a23e30></i>" + _vm._ssrEscape("\n              ກັບຄືນໄປເວີຊັ່ນ " + _vm._s(_vm.getVersionNumber(_vm.selectedVersion1)) + "\n            ") + "</button>" : "<!---->") + " <button class=\"btn btn-secondary\" data-v-e6a23e30><i class=\"fas fa-download\" data-v-e6a23e30></i>\n              ສົ່ງອອກການປຽບທຽບ\n            </button></div>" : "<!---->") + "</div>" : "<div class=\"select-versions-prompt\" data-v-e6a23e30><div class=\"prompt-icon\" data-v-e6a23e30><i class=\"fas fa-hand-pointer\" data-v-e6a23e30></i></div> <h6 data-v-e6a23e30>ເລືອກເວີຊັ່ນເພື່ອປຽບທຽບ</h6> <p data-v-e6a23e30>ກະລຸນາເລືອກສອງເວີຊັ່ນທີ່ທ່ານຕ້ອງການປຽບທຽບ</p></div>"))], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-e6a23e30><button" + _vm._ssrAttr("disabled", !_vm.selectedVersion1 || !_vm.selectedVersion2) + " class=\"btn btn-outline\" data-v-e6a23e30><i class=\"fas fa-exchange-alt\" data-v-e6a23e30></i>\n        ສະຫຼັບເວີຊັ່ນ\n      </button> <button class=\"btn btn-primary\" data-v-e6a23e30><i class=\"fas fa-times\" data-v-e6a23e30></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue?vue&type=template&id=e6a23e30&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentCompareDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentCompareDialogvue_type_script_lang_js_ = ({
  name: 'VersionComparisonDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    recordId: {
      type: [Number, String],
      required: true
    },
    recordData: {
      type: Object,
      default: null
    },
    initialComparison: {
      type: Object,
      default: null
    },
    canRestore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      error: null,
      availableVersions: [],
      selectedVersion1: null,
      selectedVersion2: null,
      comparisonData: null,
      fieldLabels: {
        amount: 'ຈຳນວນເງິນ',
        purpose: 'ຈຸດປະສົງ',
        status: 'ສະຖານະ',
        dueDate: 'ວັນຄົບກຳນົດ',
        note: 'ໝາຍເຫດ',
        ministryId: 'ກະຊວງ',
        bankAccountId: 'ບັນຊີທະນາຄານ',
        currencyId: 'ສະກຸນເງິນ',
        bookingDate: 'ວັນທີ່ລົງບັນຊີ',
        exchangeRate: 'ອັດຕາແລກປ່ຽນ',
        makerId: 'ຜູ້ລົງບັນຊີ',
        checkerId: 'ຜູ້ອະນຸມັດ',
        approvedAt: 'ວັນທີ່ອະນຸມັດ'
      }
    };
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeDialog();
      }
    },
    initialComparison: {
      handler(newVal) {
        if (newVal && this.show) {
          this.setupInitialComparison();
        }
      },
      immediate: true
    }
  },
  methods: {
    async initializeDialog() {
      if (this.initialComparison) {
        this.setupInitialComparison();
      } else {
        await this.fetchAvailableVersions();
      }
    },
    setupInitialComparison() {
      if (this.initialComparison.current && this.initialComparison.previous) {
        this.selectedVersion1 = this.initialComparison.previous.id;
        this.selectedVersion2 = this.initialComparison.current.id;

        // Mock the comparison data structure
        this.comparisonData = {
          currentVersion: this.initialComparison.current.version || 1,
          compareVersion: this.initialComparison.previous.version || 1,
          differences: this.calculateDifferences(this.initialComparison.previous, this.initialComparison.current)
        };
      }
    },
    calculateDifferences(version1, version2) {
      const differences = {};
      const fieldsToCompare = Object.keys(this.fieldLabels);
      fieldsToCompare.forEach(field => {
        var _version1$data, _version2$data;
        const val1 = ((_version1$data = version1.data) === null || _version1$data === void 0 ? void 0 : _version1$data[field]) || version1[field];
        const val2 = ((_version2$data = version2.data) === null || _version2$data === void 0 ? void 0 : _version2$data[field]) || version2[field];
        if (val1 !== val2) {
          differences[field] = {
            current: val2,
            version: val1
          };
        }
      });
      return differences;
    },
    async fetchAvailableVersions() {
      if (!this.recordId) return;
      this.loading = true;
      this.error = null;
      try {
        const {
          data
        } = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`);
        if (data.success) {
          this.availableVersions = data.data.map(entry => ({
            id: entry.id,
            version: entry.version || 1,
            action: entry.action,
            changedAt: entry.changedAt,
            changedBy: entry.changedBy,
            data: entry.newData || entry.oldData || {}
          }));
        } else {
          throw new Error(data.message || 'Failed to fetch versions');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error fetching versions:', error);
        this.error = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message;
      } finally {
        this.loading = false;
      }
    },
    async loadComparison() {
      if (!this.selectedVersion1 || !this.selectedVersion2) {
        this.comparisonData = null;
        return;
      }
      try {
        // For now, calculate differences locally
        // In a real implementation, you might want to call an API endpoint
        const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
        const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
        if (version1 && version2) {
          this.comparisonData = {
            currentVersion: version2.version,
            compareVersion: version1.version,
            differences: this.calculateDifferences(version1, version2)
          };
        }
      } catch (error) {
        console.error('Error loading comparison:', error);
        this.error = 'ເກີດຂໍ້ຜິດພາດໃນການປຽບທຽບ';
      }
    },
    getVersionLabel(version) {
      const actionLabel = {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      };
      const date = new Date(version.changedAt).toLocaleDateString('lo-LA');
      const action = actionLabel[version.action] || version.action;
      return `v${version.version} - ${action} (${date})`;
    },
    getVersionNumber(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      return (version === null || version === void 0 ? void 0 : version.version) || '?';
    },
    getVersionDate(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      return version ? new Date(version.changedAt).toLocaleDateString('lo-LA') : '';
    },
    getTimeDifference() {
      if (!this.selectedVersion1 || !this.selectedVersion2) return 0;
      const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
      const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
      if (version1 && version2) {
        const date1 = new Date(version1.changedAt);
        const date2 = new Date(version2.changedAt);
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }
      return 0;
    },
    getDifferentUsers() {
      if (!this.selectedVersion1 || !this.selectedVersion2) return 'N/A';
      const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1);
      const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2);
      if (version1 && version2) {
        if (version1.changedBy === version2.changedBy) {
          return version1.changedBy || 'ບໍ່ຮູ້';
        } else {
          return `${version1.changedBy || 'ບໍ່ຮູ້'} → ${version2.changedBy || 'ບໍ່ຮູ້'}`;
        }
      }
      return 'N/A';
    },
    getFieldIcon(field) {
      const icons = {
        amount: 'fas fa-dollar-sign',
        purpose: 'fas fa-tag',
        status: 'fas fa-flag',
        dueDate: 'fas fa-calendar',
        note: 'fas fa-sticky-note',
        ministryId: 'fas fa-building',
        bankAccountId: 'fas fa-university',
        currencyId: 'fas fa-coins',
        bookingDate: 'fas fa-calendar-day',
        exchangeRate: 'fas fa-exchange-alt',
        makerId: 'fas fa-user',
        checkerId: 'fas fa-user-check',
        approvedAt: 'fas fa-calendar-check'
      };
      return icons[field] || 'fas fa-info-circle';
    },
    getFieldLabel(field) {
      return this.fieldLabels[field] || field;
    },
    formatValue(value) {
      if (value === null || value === undefined) return 'N/A';
      if (typeof value === 'boolean') return value ? 'ແມ່ນ' : 'ບໍ່';
      if (typeof value === 'number') return value.toLocaleString();
      if (typeof value === 'string' && value.includes('T')) {
        // Likely a date
        try {
          return new Date(value).toLocaleDateString('lo-LA');
        } catch {
          return value;
        }
      }
      return String(value);
    },
    swapVersions() {
      const temp = this.selectedVersion1;
      this.selectedVersion1 = this.selectedVersion2;
      this.selectedVersion2 = temp;
      this.loadComparison();
    },
    restoreToVersion(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId);
      if (version) {
        this.$emit('restore', version);
      }
    },
    async exportComparison() {
      if (!this.comparisonData) return;
      try {
        const csvContent = this.generateComparisonCSV();
        const blob = new Blob([csvContent], {
          type: 'text/csv;charset=utf-8;'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `comparison-${this.recordId}-v${this.getVersionNumber(this.selectedVersion1)}-v${this.getVersionNumber(this.selectedVersion2)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.$emit('success', 'ສົ່ງອອກການປຽບທຽບສຳເລັດ');
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ');
      }
    },
    generateComparisonCSV() {
      const headers = ['Field', 'Version 1 Value', 'Version 2 Value'];
      const rows = [headers];
      Object.entries(this.comparisonData.differences).forEach(([field, diff]) => {
        rows.push([this.getFieldLabel(field), this.formatValue(diff.version), this.formatValue(diff.current)]);
      });
      return rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    },
    closeDialog() {
      this.selectedVersion1 = null;
      this.selectedVersion2 = null;
      this.comparisonData = null;
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentCompareDialogvue_type_script_lang_js_ = (paymentCompareDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentCompareDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(581)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentCompareDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e6a23e30",
  "60dc4ca2"
  
)

/* harmony default export */ var paymentCompareDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-payment-compare-dialog.js.map