exports.ids = [78];
exports.modules = {

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(559);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("08dd24f8", content, true, context)
};

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d1eb6e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".voucher-logo[data-v-3d1eb6e0]{height:110px;line-height:1!important;margin-bottom:1px!important;-o-object-fit:contain;object-fit:contain;width:110px}.voucher-logo-gov[data-v-3d1eb6e0]{height:auto;line-height:1!important;margin-bottom:4px!important;margin-top:30px!important;max-height:80px;max-width:80px;-o-object-fit:contain;object-fit:contain;width:auto}.modal-overlay[data-v-3d1eb6e0]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-3d1eb6e0]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-3d1eb6e0]{align-items:center;border-bottom:1px solid #eee;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-3d1eb6e0]{color:#333;margin:0}.close-btn[data-v-3d1eb6e0]{background:none;border:none;color:#666;cursor:pointer;font-size:18px}.close-btn[data-v-3d1eb6e0]:hover{color:#333}.modal-body[data-v-3d1eb6e0]{padding:20px}.modal-footer[data-v-3d1eb6e0]{border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-3d1eb6e0]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-3d1eb6e0]{background:#007bff;color:#fff}.btn-primary[data-v-3d1eb6e0]:hover{background:#0056b3}.btn-secondary[data-v-3d1eb6e0]{background:#6c757d;color:#fff}.btn-secondary[data-v-3d1eb6e0]:hover{background:#545b62}.voucher-container[data-v-3d1eb6e0]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;font-weight:700;line-height:1.3;margin:0 auto;max-width:700px;padding:15px;width:100%}.voucher-container *[data-v-3d1eb6e0]{font-weight:700!important}.voucher-header[data-v-3d1eb6e0]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:15;padding-bottom:5px}.ministry-voucher-section[data-v-3d1eb6e0]{margin:0 0 10px!important;padding:0!important}.ministry-voucher-section .col[data-v-3d1eb6e0],.ministry-voucher-section .v-col[data-v-3d1eb6e0]{margin:0!important;padding:0!important}.row[data-v-3d1eb6e0]{margin:0!important}.col[data-v-3d1eb6e0]{padding:0!important}.company-info[data-v-3d1eb6e0]{flex:1;text-align:center}.company-name[data-v-3d1eb6e0]{font-size:16px;margin-bottom:3px}.company-name[data-v-3d1eb6e0],.department[data-v-3d1eb6e0]{font-weight:700!important}.department[data-v-3d1eb6e0]{font-size:14px;margin-bottom:3px}.sub-department[data-v-3d1eb6e0]{font-size:12px;margin-bottom:8px}.amount-line[data-v-3d1eb6e0],.sub-department[data-v-3d1eb6e0]{font-weight:700!important}.amount-line[data-v-3d1eb6e0]{font-size:12px;letter-spacing:2px}.number-box[data-v-3d1eb6e0]{background:#f9f9f9;border:2px solid #333;margin-bottom:5px;padding:6px 10px;text-align:center}.number-label[data-v-3d1eb6e0]{margin-right:8px}.number-label[data-v-3d1eb6e0],.number-value[data-v-3d1eb6e0]{font-weight:700!important}.number-value[data-v-3d1eb6e0]{color:#d32f2f}.voucher-title[data-v-3d1eb6e0]{font-size:18px;font-weight:700!important;margin:15px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-title[data-v-3d1eb6e0]:not(.voucher-container>.voucher-title){font-size:16px!important;font-weight:700!important;line-height:1.2!important;margin:0 0 2px!important;text-align:left!important;-webkit-text-decoration:none!important;text-decoration:none!important}.voucher-details[data-v-3d1eb6e0]{margin-bottom:25px}.detail-row[data-v-3d1eb6e0]{align-items:center;display:flex;margin-bottom:10px;min-height:22px}.detail-row.description[data-v-3d1eb6e0]{align-items:flex-start;flex-direction:column}.label[data-v-3d1eb6e0]{margin-right:8px;white-space:nowrap}.label[data-v-3d1eb6e0],.value[data-v-3d1eb6e0]{font-weight:700!important}.value[data-v-3d1eb6e0]{border-bottom:1px solid #333;margin-right:15px;min-width:35px;padding:2px 4px;text-align:center}.dotted-line[data-v-3d1eb6e0]{border-bottom:1px dotted #333;flex:1;font-weight:700!important;margin:0 8px;min-height:18px;padding:2px 4px}.currency-options[data-v-3d1eb6e0]{display:flex;gap:15px;margin-left:8px}.currency-options label[data-v-3d1eb6e0]{align-items:center;display:flex;gap:4px}.amount-display[data-v-3d1eb6e0],.currency-options label[data-v-3d1eb6e0]{font-weight:700!important}.amount-display[data-v-3d1eb6e0]{font-size:16px;margin:0 8px}.description-content[data-v-3d1eb6e0]{background:#fafafa;border:1px solid #333;margin-top:4px;min-height:50px;padding:8px;width:100%}.amount-words[data-v-3d1eb6e0],.description-content[data-v-3d1eb6e0]{font-weight:700!important}.amount-words[data-v-3d1eb6e0]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:8px;padding:2px 8px}.signature-section[data-v-3d1eb6e0]{display:flex;gap:8px;justify-content:space-between;margin-top:30px}.signature-box[data-v-3d1eb6e0]{flex:1;text-align:center}.signature-title[data-v-3d1eb6e0]{font-size:14px;font-weight:700!important;margin-bottom:100px}.signature-line[data-v-3d1eb6e0]{border-bottom:1px solid #333;height:1px;margin-top:15px}.signature-name[data-v-3d1eb6e0]{color:#666;font-size:14px;font-weight:700!important;margin-top:4px}.voucher-title-main[data-v-3d1eb6e0]{font-size:18px;font-weight:700;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}@media print{*[data-v-3d1eb6e0],.print-only[data-v-3d1eb6e0],.print-only *[data-v-3d1eb6e0],body *[data-v-3d1eb6e0]{font-weight:700!important}.print-only[data-v-3d1eb6e0],.print-only *[data-v-3d1eb6e0]{visibility:visible}.print-only[data-v-3d1eb6e0]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-3d1eb6e0]{border:2px solid #000!important;font-size:12px!important;font-weight:700!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}}.print-only[data-v-3d1eb6e0]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-3d1eb6e0]{left:auto;position:static;top:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentVoucher/index.vue?vue&type=template&id=3d1eb6e0&scoped=true&



var paymentVouchervue_type_template_id_3d1eb6e0_scoped_true_render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$maker, _vm$voucherData$minis, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$maker2, _vm$voucherData$check;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showPrintDialog ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-3d1eb6e0>", "</div>", [_vm._ssrNode("<div class=\"modal-content\" data-v-3d1eb6e0>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-3d1eb6e0><h3 data-v-3d1eb6e0>ພິມໃບຈ່າຍສົດອອກຄັງ</h3> <button class=\"close-btn\" data-v-3d1eb6e0><i class=\"fas fa-times\" data-v-3d1eb6e0></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-3d1eb6e0>", "</div>", [_vm._ssrNode("<div id=\"voucher-print\" class=\"voucher-container\" data-v-3d1eb6e0>", "</div>", [_vm._ssrNode("<div class=\"voucher-header\" data-v-3d1eb6e0><div class=\"company-info\" data-v-3d1eb6e0><div class=\"company-name\" data-v-3d1eb6e0><img" + _vm._ssrAttr("src", __webpack_require__(167)) + " alt=\"Ministry Logo\" class=\"voucher-logo-gov\" data-v-3d1eb6e0></div> <div class=\"company-name\" data-v-3d1eb6e0>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-3d1eb6e0>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div></div></div> "), _c(VRow["a" /* default */], {
    staticClass: "ministry-voucher-section",
    attrs: {
      "align": "end",
      "justify": "space-between",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-start pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('img', {
    staticClass: "voucher-logo",
    attrs: {
      "src": __webpack_require__(166),
      "alt": "Ministry Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ກົມແຜນການ ແລະ ການເງິນ")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ພະແນກຄຸ້ມຄອງລາຍຮັບ")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  })]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-end pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "number-box"
  }, [_c('span', {
    staticClass: "number-label"
  }, [_vm._v("No")]), _vm._v(" "), _c('span', {
    staticClass: "number-value"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatVoucherNumber(_vm.voucherData.id)) + "\n                ")])])])], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "ministry-voucher-section",
    attrs: {
      "align": "end",
      "justify": "space-between",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-start pa-0",
    attrs: {
      "cols": "6"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-end pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "voucher-title"
  }, [_c('span', {
    staticClass: "label",
    staticStyle: {
      "font-size": "14px !important"
    }
  }, [_vm._v("ນະຄອນຫຼວງວຽງຈັນ ວັນທີ")]), _vm._v(" "), _c('span', {
    staticClass: "dotted-line"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatDateLao(_vm.voucherData.bookingDate)) + "\n                ")])])])], 1), _vm._ssrNode(" <div class=\"voucher-title-main\" data-v-3d1eb6e0>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-3d1eb6e0><div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ອີງໃສ່ໃບສັ່ງຈ່າຍ ເລກທີ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.externalRef || '')) + "</span> <span class=\"label\" data-v-3d1eb6e0>ລົງວັນທີ</span> <span class=\"value\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.externalBookingDate).day)) + "</span> <span class=\"label\" data-v-3d1eb6e0>ເດືອນ</span> <span class=\"value\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.externalBookingDate).month)) + "</span> <span class=\"label\" data-v-3d1eb6e0>ປີ</span> <span class=\"value\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.externalBookingDate).year)) + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ພະແນກຄຸ້ມຄອງລາຍຮັບ, ກະຊວງ ໂຍທາທິການ ແລະ ຂົນສົ່ງ.</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ໄດ້ຈ່າຍເງິນ </span> <label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cash') + " data-v-3d1eb6e0></label> <span class=\"label\" data-v-3d1eb6e0> ສົດ </span> <label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cheque') + " data-v-3d1eb6e0></label> <span class=\"label\" data-v-3d1eb6e0> ແຊັກເລກທີ່ </span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo || '')) + "</span> <div class=\"currency-options\" data-v-3d1eb6e0><label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-3d1eb6e0>\n                  ກີບ</label> <label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-3d1eb6e0>\n                  ບາດ</label> <label data-v-3d1eb6e0><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-3d1eb6e0>\n                  ໂດລາ</label></div></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ໃຫ້ທ່ານ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.voucherData.receiveName || ((_vm$voucherData$maker = _vm.voucherData.maker) === null || _vm$voucherData$maker === void 0 ? void 0 : _vm$voucherData$maker.cus_name) || '')) + "</span> <span class=\"label\" data-v-3d1eb6e0>ເລກບັດປະຈຳຕົວ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.voucherData.receiveIDNO || '')) + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ສັງກັດຢູ່ພາກສ່ວນ ກົມ/ກອງ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$minis = _vm.voucherData.ministry) === null || _vm$voucherData$minis === void 0 ? void 0 : _vm$voucherData$minis.ministryName) || '')) + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ເນື້ອໃນລາຍຈ່າຍ</span> <span class=\"dotted-line\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.voucherData.purpose || '')) + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0></span> <span class=\"dotted-line\" data-v-3d1eb6e0></span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0></span> <span class=\"dotted-line\" data-v-3d1eb6e0></span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ຈຳນວນ</span> <span class=\"amount-display\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount)) + "\n                " + _vm._s(_vm.getCurrencyWord((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.code)) + "\n              ") + "</span></div> <div class=\"detail-row\" data-v-3d1eb6e0><span class=\"label\" data-v-3d1eb6e0>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-3d1eb6e0>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.code))) + "</span></div></div> <div class=\"signature-section\" data-v-3d1eb6e0><div class=\"signature-box\" data-v-3d1eb6e0><div class=\"signature-title\" data-v-3d1eb6e0>ຫົວໜ້າພະແນກ ຄຸ້ມຄອງລາຍຮັບ</div> <div class=\"signature-name\" data-v-3d1eb6e0></div></div> <div class=\"signature-box\" data-v-3d1eb6e0><div class=\"signature-title\" data-v-3d1eb6e0>ຜູ້ຮັບເງິນ</div> <div class=\"signature-name\" data-v-3d1eb6e0>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.receiveName || ((_vm$voucherData$maker2 = _vm.voucherData.maker) === null || _vm$voucherData$maker2 === void 0 ? void 0 : _vm$voucherData$maker2.cus_name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-3d1eb6e0><div class=\"signature-title\" data-v-3d1eb6e0>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-name\" data-v-3d1eb6e0>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-3d1eb6e0><button class=\"btn btn-secondary\" data-v-3d1eb6e0><i class=\"fas fa-times\" data-v-3d1eb6e0></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-3d1eb6e0><i class=\"fas fa-print\" data-v-3d1eb6e0></i>\n          ພິມ\n        </button></div>")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=template&id=3d1eb6e0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentVoucher/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentVouchervue_type_script_lang_js_ = ({
  name: 'VoucherPrintComponent',
  props: {
    voucherData: {
      type: Object,
      default: () => ({
        id: 5,
        amount: 4000000,
        purpose: 'test',
        note: '',
        status: 'pending',
        method: 'cash',
        approvedAt: null,
        dueDate: '2025-07-24T00:00:00.000Z',
        createdAt: '2025-07-09T15:12:51.000Z',
        updateTimestamp: '2025-07-09T15:12:51.000Z',
        makerId: 2,
        checkerId: null,
        currencyId: 5,
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
        maker: {
          id: 2,
          cus_id: 1001,
          cus_pass: '1111',
          cus_name: 'USER01',
          cus_tel: 'TELEPHONE',
          cus_email: 'EMAIL',
          cus_active: true,
          village: null,
          district: null,
          province: null,
          remark: null,
          isActive: true,
          createdAt: '2025-01-24T19:54:20.000Z',
          updateTimestamp: '2025-01-24T19:54:20.000Z',
          groupId: 1
        },
        checker: null,
        currency: {
          id: 5,
          code: 'USD',
          name: 'US Dollar',
          rate: 1,
          isActive: true,
          isLocalCCY: false,
          createdAt: '2023-09-17T06:52:15.000Z',
          updateTimestamp: '2025-03-03T01:11:36.000Z'
        },
        ministry: null,
        settlementLine: []
      })
    }
  },
  data() {
    return {
      showPrintDialog: false
    };
  },
  watch: {
    voucherData: {
      handler(newValue) {
        if (newValue && newValue.id) {
          this.showPrintDialog = true;
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    formatDateLao(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    openPrintDialog() {
      this.showPrintDialog = true;
    },
    closePrintDialog() {
      this.showPrintDialog = false;
      this.$emit('close');
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0');
    },
    formatDate(dateString) {
      if (!dateString) return {
        day: '',
        month: '',
        year: ''
      };
      const date = new Date(dateString);
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      };
    },
    formatAmount(amount) {
      if (!amount) return '0';
      return new Intl.NumberFormat('en-US').format(amount);
    },
    getCurrencyWord(currencyCode) {
      let result = '';
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ';
          break;
        case 'USD':
          result += ' ໂດລາ';
          break;
        case 'THB':
          result += ' ບາດ';
          break;
        default:
          result += 'ກີບ';
      }
      return result;
    },
    convertToWords(amount, currencyCode) {
      if (!amount) return '';
      const numbers = ['', 'ໜຶ່ງ', 'ສອງ', 'ສາມ', 'ສີ່', 'ຫ້າ', 'ຫົກ', 'ເຈັດ', 'ແປດ', 'ເກົ້າ'];

      // Convert number to string and process
      const amountStr = amount.toString();
      const length = amountStr.length;
      if (length > 10) {
        // For very large numbers (over 10 billion), just return formatted number
        return this.formatAmount(amount) + ' ' + (currencyCode || '');
      }
      let result = '';

      // Helper function to convert a 3-digit group
      const convertThreeDigits = num => {
        let text = '';
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;
        const tens = Math.floor(remainder / 10);
        const ones = remainder % 10;

        // Hundreds place
        if (hundreds > 0) {
          text += numbers[hundreds] + 'ຮ້ອຍ';
        }

        // Tens and ones place
        if (remainder === 20) {
          // Special case: 20 = ຊາວ
          text += 'ຊາວ';
        } else if (tens >= 2) {
          // 30, 40, 50, etc.
          text += numbers[tens] + 'ສິບ';
          if (ones > 0) {
            text += numbers[ones];
          }
        } else if (tens === 1) {
          // 10-19
          text += 'ສິບ';
          if (ones > 0) {
            text += numbers[ones];
          }
        } else if (ones > 0) {
          // 1-9
          text += numbers[ones];
        }
        return text;
      };

      // Convert based on number size
      if (length <= 3) {
        // 1 - 999
        result = convertThreeDigits(amount);
      } else if (length <= 6) {
        // 1,000 - 999,999
        if (amount >= 100000) {
          // Handle ແສນ (100,000) unit for 100,000 - 999,999
          const saen = Math.floor(amount / 100000);
          const remainder = amount % 100000;
          if (saen === 10) {
            // Special case: 1,000,000 should be handled in millions section
            // This shouldn't happen in this range, but keeping for safety
            result = 'ສິບແສນ';
          } else {
            result = numbers[saen] + 'ແສນ';
          }
          if (remainder > 0) {
            if (remainder >= 1000) {
              const thousands = Math.floor(remainder / 1000);
              const finalRemainder = remainder % 1000;
              if (thousands === 10) {
                result += 'ສິບພັນ';
              } else if (thousands === 20) {
                result += 'ຊາວພັນ';
              } else {
                result += convertThreeDigits(thousands) + 'ພັນ';
              }
              if (finalRemainder > 0) {
                result += convertThreeDigits(finalRemainder);
              }
            } else {
              result += convertThreeDigits(remainder);
            }
          }
        } else {
          // Handle ພັນ (1,000) unit for 1,000 - 99,999
          const thousands = Math.floor(amount / 1000);
          const remainder = amount % 1000;
          if (thousands === 10) {
            // Special case: 10,000 = ສິບພັນ
            result = 'ສິບພັນ';
          } else if (thousands === 20) {
            // Special case: 20,000 = ຊາວພັນ
            result = 'ຊາວພັນ';
          } else {
            result = convertThreeDigits(thousands) + 'ພັນ';
          }
          if (remainder > 0) {
            result += convertThreeDigits(remainder);
          }
        }
      } else if (length <= 9) {
        // 1,000,000 - 999,999,999 (millions)
        const millions = Math.floor(amount / 1000000);
        const remainder = amount % 1000000;

        // Handle millions part
        if (millions === 10) {
          result = 'ສິບລ້ານ';
        } else if (millions === 20) {
          result = 'ຊາວລ້ານ';
        } else {
          result = convertThreeDigits(millions) + 'ລ້ານ';
        }

        // Handle remainder (saen, thousands and hundreds)
        if (remainder > 0) {
          if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000);
            const saenRemainder = remainder % 100000;
            result += numbers[saen] + 'ແສນ';
            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000);
                const finalRemainder = saenRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(saenRemainder);
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000);
            const finalRemainder = remainder % 1000;
            if (thousands === 10) {
              result += 'ສິບພັນ';
            } else if (thousands === 20) {
              result += 'ຊາວພັນ';
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ';
            }
            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder);
            }
          } else {
            result += convertThreeDigits(remainder);
          }
        }
      } else if (length <= 10) {
        // 1,000,000,000 - 9,999,999,999 (billions)
        const billions = Math.floor(amount / 1000000000);
        const remainder = amount % 1000000000;

        // Handle billions part
        result = numbers[billions] + 'ພັນລ້ານ';

        // Handle remainder (millions, saen, thousands, hundreds)
        if (remainder > 0) {
          if (remainder >= 1000000) {
            const millions = Math.floor(remainder / 1000000);
            const millionRemainder = remainder % 1000000;
            if (millions === 10) {
              result += 'ສິບລ້ານ';
            } else if (millions === 20) {
              result += 'ຊາວລ້ານ';
            } else {
              result += convertThreeDigits(millions) + 'ລ້ານ';
            }
            if (millionRemainder > 0) {
              if (millionRemainder >= 100000) {
                // Handle ແສນ unit in remainder
                const saen = Math.floor(millionRemainder / 100000);
                const saenRemainder = millionRemainder % 100000;
                result += numbers[saen] + 'ແສນ';
                if (saenRemainder > 0) {
                  if (saenRemainder >= 1000) {
                    const thousands = Math.floor(saenRemainder / 1000);
                    const finalRemainder = saenRemainder % 1000;
                    if (thousands === 10) {
                      result += 'ສິບພັນ';
                    } else if (thousands === 20) {
                      result += 'ຊາວພັນ';
                    } else {
                      result += convertThreeDigits(thousands) + 'ພັນ';
                    }
                    if (finalRemainder > 0) {
                      result += convertThreeDigits(finalRemainder);
                    }
                  } else {
                    result += convertThreeDigits(saenRemainder);
                  }
                }
              } else if (millionRemainder >= 1000) {
                const thousands = Math.floor(millionRemainder / 1000);
                const finalRemainder = millionRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(millionRemainder);
              }
            }
          } else if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000);
            const saenRemainder = remainder % 100000;
            result += numbers[saen] + 'ແສນ';
            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000);
                const finalRemainder = saenRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(saenRemainder);
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000);
            const finalRemainder = remainder % 1000;
            if (thousands === 10) {
              result += 'ສິບພັນ';
            } else if (thousands === 20) {
              result += 'ຊາວພັນ';
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ';
            }
            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder);
            }
          } else {
            result += convertThreeDigits(remainder);
          }
        }
      }

      // Add currency
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ';
          break;
        case 'USD':
          result += ' ໂດລາ';
          break;
        case 'THB':
          result += ' ບາດ';
          break;
        default:
          result += currencyCode ? ' ' + currencyCode : '';
      }
      return result;
    },
    printVoucher() {
      // Clone the voucher content to avoid modifying the original
      const voucherElement = this.$refs.voucherContent.cloneNode(true);

      // Get all checkboxes in the cloned element
      const checkboxes = voucherElement.querySelectorAll('input[type="checkbox"]');

      // Manually set the checked state based on data
      checkboxes.forEach((checkbox, index) => {
        let shouldBeChecked = false;

        // Method 1: Use index-based approach (more reliable)
        // The checkboxes appear in this order: cash, cheque, LAK, THB, USD
        if (index === 0) {
          // First checkbox - Cash
          shouldBeChecked = this.voucherData.method === 'cash';
        } else if (index === 1) {
          // Second checkbox - Cheque
          shouldBeChecked = this.voucherData.method === 'cheque';
        } else if (index === 2) {
          var _this$voucherData$cur;
          // Third checkbox - LAK (ກີບ)
          shouldBeChecked = ((_this$voucherData$cur = this.voucherData.currency) === null || _this$voucherData$cur === void 0 ? void 0 : _this$voucherData$cur.code) === 'LAK';
        } else if (index === 3) {
          var _this$voucherData$cur2;
          // Fourth checkbox - THB (ບາດ)
          shouldBeChecked = ((_this$voucherData$cur2 = this.voucherData.currency) === null || _this$voucherData$cur2 === void 0 ? void 0 : _this$voucherData$cur2.code) === 'THB';
        } else if (index === 4) {
          var _this$voucherData$cur3;
          // Fifth checkbox - USD (ໂດລາ)
          shouldBeChecked = ((_this$voucherData$cur3 = this.voucherData.currency) === null || _this$voucherData$cur3 === void 0 ? void 0 : _this$voucherData$cur3.code) === 'USD';
        }

        // Fallback method: Check by parent label text for currency checkboxes
        if (index >= 2) {
          const parentLabel = checkbox.closest('label');
          const parentText = parentLabel ? parentLabel.textContent.trim() : '';
          if (parentText.includes('ກີບ')) {
            var _this$voucherData$cur4;
            shouldBeChecked = ((_this$voucherData$cur4 = this.voucherData.currency) === null || _this$voucherData$cur4 === void 0 ? void 0 : _this$voucherData$cur4.code) === 'LAK';
          } else if (parentText.includes('ບາດ')) {
            var _this$voucherData$cur5;
            shouldBeChecked = ((_this$voucherData$cur5 = this.voucherData.currency) === null || _this$voucherData$cur5 === void 0 ? void 0 : _this$voucherData$cur5.code) === 'THB';
          } else if (parentText.includes('ໂດລາ')) {
            var _this$voucherData$cur6;
            shouldBeChecked = ((_this$voucherData$cur6 = this.voucherData.currency) === null || _this$voucherData$cur6 === void 0 ? void 0 : _this$voucherData$cur6.code) === 'USD';
          }
        }

        // Set the checked attribute
        if (shouldBeChecked) {
          checkbox.setAttribute('checked', 'checked');
          checkbox.checked = true;
        } else {
          checkbox.removeAttribute('checked');
          checkbox.checked = false;
        }
      });

      // Get the processed HTML content
      const printContent = voucherElement.innerHTML;
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      printWindow.document.write(`
    <html>
      <head>
        <title>ໃບຈ່າຍເງິນສົດອອກຄັງ</title>
        <style>
          body { 
            font-family: 'Phetsarath OT', 'Noto Sans Lao', Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            line-height: 1.4;
            font-weight: bold !important;
          }

          * {
            font-weight: bold !important;
          }

          .voucher-logo {
            width: 110px;
            height: 110px;
            object-fit: contain;
            margin-bottom: 1px !important;
            line-height: 1 !important;
          }
          
          .voucher-logo-gov {
            max-width: 90px;
            max-height: 90px;
            width: auto;
            height: auto;
            object-fit: contain;
            margin-top: 30px !important;
            margin-bottom: 4px !important;
            line-height: 1 !important;
          }
          
          .voucher-container { 
            border: 2px solid #000; 
            padding: 15px; 
            font-size: 12px; 
            line-height: 1.4; 
            max-width: 210mm;
            margin: 0 auto;
            font-weight: bold;
          }
          
          .voucher-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: flex-start; 
            margin-bottom: 15px; 
            padding-bottom: 5px; 
          }
          
          .ministry-voucher-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 0 !important;
            padding: 0 !important;
            margin-bottom: 10px !important;
          }
          
          .ministry-voucher-section .col,
          .ministry-voucher-section > div {
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .voucher-title {
            font-size: 16px !important;
            margin: 0 !important;
            margin-bottom: 2px !important;
            line-height: 1.2 !important;
            text-align: left;
            text-decoration: none;
            font-weight: bold !important;
          }
          
          .voucher-title-main {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin: 20px 0;
            text-decoration: underline;
          }
          
          .company-info { 
            flex: 1; 
            text-align: center; 
          }
          
          .company-name { 
            font-weight: bold !important; 
            font-size: 14px; 
            margin-bottom: 3px; 
          }
          
          .department { 
            font-size: 12px; 
            margin-bottom: 3px; 
            font-weight: bold !important;
          }
          
          .sub-department { 
            font-size: 10px; 
            margin-bottom: 10px; 
            font-weight: bold !important;
          }
          
          .amount-line { 
            font-size: 10px; 
            letter-spacing: 2px; 
            font-weight: bold !important;
          }
          
          .number-box { 
            border: 2px solid #000; 
            padding: 5px 8px; 
            text-align: center; 
            background: #f9f9f9; 
            margin-bottom: 5px;
          }
          
          .number-label { 
            font-weight: bold !important; 
            margin-right: 10px; 
          }
          
          .number-value { 
            font-weight: bold !important; 
          }
          
          .detail-row { 
            display: flex; 
            align-items: center; 
            margin-bottom: 8px; 
            min-height: 20px; 
          }
          
          .label { 
            font-weight: bold !important; 
            margin-right: 8px; 
            white-space: nowrap; 
          }
          
          .value { 
            margin-right: 15px; 
            border-bottom: 1px solid #000; 
            min-width: 35px; 
            text-align: center; 
            padding: 1px 3px; 
            font-weight: bold !important;
          }
          
          .dotted-line { 
            flex: 1; 
            border-bottom: 1px dotted #000; 
            margin: 0 8px; 
            min-height: 18px; 
            padding: 1px 3px; 
            font-weight: bold !important;
          }
          
          .currency-options { 
            display: flex; 
            gap: 15px; 
            margin-left: 8px; 
          }
          
          .currency-options label { 
            display: flex; 
            align-items: center; 
            gap: 3px; 
            font-weight: bold !important; 
          }
          
          .amount-display { 
            font-weight: bold !important; 
            font-size: 16px; 
            margin: 0 8px; 
          }
          
          .amount-words { 
            flex: 1; 
            border-bottom: 1px solid #000; 
            margin-left: 8px; 
            padding: 1px 8px; 
            font-style: italic; 
            font-weight: bold !important;
          }
          
          .signature-section { 
            display: flex; 
            justify-content: space-between; 
            margin-top: 30px; 
            gap: 8px; 
          }
          
          .signature-box { 
            flex: 1; 
            text-align: center; 
          }
          
          .signature-title { 
            font-size: 14px; 
            margin-bottom: 25px;
            margin-bottom: 100px; 
            font-weight: bold !important; 
          }
          
          .signature-name { 
            font-size: 14px; 
            margin-top: 5px; 
            font-weight: bold !important; 
          }

          /* Ensure checkboxes are visible and properly styled */
          input[type="checkbox"] {
            width: 14px;
            height: 14px;
            margin-right: 4px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Force checkbox states to be visible in print */
          input[type="checkbox"]:checked {
            accent-color: black;
          }

          @media print {
            input[type="checkbox"] {
              -webkit-appearance: checkbox;
              appearance: checkbox;
            }
          }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentVouchervue_type_script_lang_js_ = (paymentVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(558)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentVouchervue_type_script_lang_js_,
  paymentVouchervue_type_template_id_3d1eb6e0_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "3d1eb6e0",
  "36e13303"
  
)

/* harmony default export */ var paymentVoucher = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-payment-voucher.js.map