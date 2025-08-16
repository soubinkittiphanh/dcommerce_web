exports.ids = [85];
exports.modules = {

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(630);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("01868cb3", content, true, context)
};

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryViewDialog_vue_vue_type_style_index_0_id_826b5276_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 630:
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

/***/ 685:
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
  
  var style0 = __webpack_require__(629)
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

/***/ })

};;
//# sourceMappingURL=ministry-view-dialog.js.map