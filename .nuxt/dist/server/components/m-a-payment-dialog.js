exports.ids = [62,63];
exports.modules = {

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(545);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("49aac785", content, true, context)
};

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5b9a2372_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(484);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5b9a2372_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5b9a2372_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5b9a2372_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5b9a2372_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".voucher-logo[data-v-5b9a2372]{height:auto;max-height:80px;max-width:80px;-o-object-fit:contain;object-fit:contain;width:auto}.ministry-titles[data-v-5b9a2372]{flex:1;text-align:left}.ministry-titles .voucher-title[data-v-5b9a2372]{font-size:14px!important;font-weight:400;margin-bottom:5px;text-align:left;-webkit-text-decoration:none;text-decoration:none}.ministry-voucher-section[data-v-5b9a2372]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:20px;padding:10px 0}.modal-overlay[data-v-5b9a2372]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-5b9a2372]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-5b9a2372]{align-items:center;border-bottom:1px solid #eee;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-5b9a2372]{color:#333;margin:0}.close-btn[data-v-5b9a2372]{background:none;border:none;color:#666;cursor:pointer;font-size:18px}.close-btn[data-v-5b9a2372]:hover{color:#333}.modal-body[data-v-5b9a2372]{padding:20px}.modal-footer[data-v-5b9a2372]{border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-5b9a2372]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-5b9a2372]{background:#007bff;color:#fff}.btn-primary[data-v-5b9a2372]:hover{background:#0056b3}.btn-secondary[data-v-5b9a2372]{background:#6c757d;color:#fff}.btn-secondary[data-v-5b9a2372]:hover{background:#545b62}.voucher-container[data-v-5b9a2372]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;line-height:1.4;margin:0 auto;max-width:700px;padding:20px;width:100%}.voucher-header[data-v-5b9a2372]{align-items:flex-start;border-bottom:1px solid #ccc;display:flex;justify-content:space-between;margin-bottom:20px;padding-bottom:10px}.company-info[data-v-5b9a2372]{flex:1;text-align:center}.company-name[data-v-5b9a2372]{font-size:16px;font-weight:700;margin-bottom:5px}.department[data-v-5b9a2372]{font-size:14px;margin-bottom:3px}.sub-department[data-v-5b9a2372]{font-size:12px;margin-bottom:10px}.amount-line[data-v-5b9a2372]{font-size:12px;letter-spacing:2px}.voucher-number[data-v-5b9a2372]{flex:0 0 auto;margin-left:20px}.number-box[data-v-5b9a2372]{background:#f9f9f9;border:2px solid #333;padding:8px 12px;text-align:center}.number-label[data-v-5b9a2372]{font-weight:700;margin-right:10px}.number-value[data-v-5b9a2372]{color:#d32f2f;font-weight:700}.voucher-title[data-v-5b9a2372]{font-size:18px;font-weight:700;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-details[data-v-5b9a2372]{margin-bottom:30px}.detail-row[data-v-5b9a2372]{align-items:center;display:flex;margin-bottom:12px;min-height:24px}.detail-row.description[data-v-5b9a2372]{align-items:flex-start;flex-direction:column}.label[data-v-5b9a2372]{font-weight:500;margin-right:10px;white-space:nowrap}.value[data-v-5b9a2372]{border-bottom:1px solid #333;margin-right:20px;min-width:40px;padding:2px 5px;text-align:center}.dotted-line[data-v-5b9a2372]{border-bottom:1px dotted #333;flex:1;margin:0 10px;min-height:20px;padding:2px 5px}.currency-options[data-v-5b9a2372]{display:flex;gap:20px;margin-left:10px}.currency-options label[data-v-5b9a2372]{align-items:center;display:flex;font-weight:400;gap:5px}.amount-display[data-v-5b9a2372]{color:#d32f2f;font-size:16px;font-weight:700;margin:0 10px}.description-content[data-v-5b9a2372]{background:#fafafa;border:1px solid #333;margin-top:5px;min-height:60px;padding:10px;width:100%}.amount-words[data-v-5b9a2372]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:10px;padding:2px 10px}.signature-section[data-v-5b9a2372]{display:flex;gap:10px;justify-content:space-between;margin-top:40px}.signature-box[data-v-5b9a2372]{flex:1;text-align:center}.signature-title[data-v-5b9a2372]{font-size:12px;font-weight:500;margin-bottom:30px}.signature-line[data-v-5b9a2372]{border-bottom:1px solid #333;height:1px;margin-top:20px}.signature-name[data-v-5b9a2372]{color:#666;font-size:10px;font-weight:400;margin-top:5px}@media print{body *[data-v-5b9a2372]{visibility:hidden}.print-only[data-v-5b9a2372],.print-only *[data-v-5b9a2372]{visibility:visible}.print-only[data-v-5b9a2372]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-5b9a2372]{border:2px solid #000!important;font-size:12px!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}.ministry-voucher-section[data-v-5b9a2372]{align-items:flex-start!important;display:flex!important;justify-content:space-between!important}.amount-display[data-v-5b9a2372],.company-name[data-v-5b9a2372],.voucher-title[data-v-5b9a2372]{font-size:14px!important}.signature-title[data-v-5b9a2372]{font-size:10px!important}.department[data-v-5b9a2372]{font-size:12px!important}.amount-line[data-v-5b9a2372],.sub-department[data-v-5b9a2372]{font-size:10px!important}.signature-name[data-v-5b9a2372]{font-size:9px!important}}.print-only[data-v-5b9a2372]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-5b9a2372]{left:auto;position:static;top:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(629);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("519172b5", content, true, context)
};

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentVoucher/index.vue?vue&type=template&id=5b9a2372&scoped=true&
var render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$maker, _vm$voucherData$minis, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$maker2, _vm$voucherData$check, _vm$voucherData$maker3, _vm$voucherData$minis2, _vm$voucherData$curre6, _vm$voucherData$curre7, _vm$voucherData$curre8, _vm$voucherData$curre9, _vm$voucherData$curre10, _vm$voucherData$maker4, _vm$voucherData$check2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.showPrintDialog ? "<div class=\"modal-overlay\" data-v-5b9a2372><div class=\"modal-content\" data-v-5b9a2372><div class=\"modal-header\" data-v-5b9a2372><h3 data-v-5b9a2372>ພິມໃບຈ່າຍສົດອອກຄັງ</h3> <button class=\"close-btn\" data-v-5b9a2372><i class=\"fas fa-times\" data-v-5b9a2372></i></button></div> <div class=\"modal-body\" data-v-5b9a2372><div id=\"voucher-print\" class=\"voucher-container\" data-v-5b9a2372><div class=\"voucher-header\" data-v-5b9a2372><div class=\"company-info\" data-v-5b9a2372><div class=\"company-name\" data-v-5b9a2372>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-5b9a2372>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div> <div class=\"amount-line\" data-v-5b9a2372>.........(000)..........</div></div></div> <div class=\"ministry-voucher-section\" data-v-5b9a2372><div class=\"ministry-titles\" data-v-5b9a2372><img" + _vm._ssrAttr("src", __webpack_require__(166)) + " alt=\"Ministry Logo\" class=\"voucher-logo\" data-v-5b9a2372> <div class=\"voucher-title\" data-v-5b9a2372>ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.</div> <div class=\"voucher-title\" data-v-5b9a2372>ກົມແຜນການ ແລະ ການເງິນ</div> <div class=\"voucher-title\" data-v-5b9a2372>ພະແນກຄຸ້ມຄອງລາຍຮັບ</div></div> <div class=\"voucher-number\" data-v-5b9a2372><div class=\"number-box\" data-v-5b9a2372><span class=\"number-label\" data-v-5b9a2372>No</span> <span class=\"number-value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" style=\"font-size: 14px !important\" data-v-5b9a2372>ວັນທີ\n                </span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatDateLao(_vm.voucherData.bookingDate))) + "</span></div></div></div> <div class=\"voucher-title\" data-v-5b9a2372>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-5b9a2372><div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ອີງໃສ່ໃບ ຖອນ/ສະເຫນີ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRef || '')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ເລກທີ</span> <span class=\"value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRefNo || _vm.formatVoucherNumber(_vm.voucherData.id) || 'N/A')) + "</span> <span class=\"label\" data-v-5b9a2372>ລົງວັນທີ</span> <span class=\"value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-5b9a2372>ເດືອນ</span> <span class=\"value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-5b9a2372>ປີ</span> <span class=\"value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ຄັງເງິນສົດ, ກະຊວງ ໂຍທາທິການ ແລະ ຂົນສົ່ງ.</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ໄດ້ຈ່າຍເງິນ </span> <label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cash') + " data-v-5b9a2372></label> <span class=\"label\" data-v-5b9a2372> ສົດ </span> <label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cheque') + " data-v-5b9a2372></label> <span class=\"label\" data-v-5b9a2372> ແຊັກເລກທີ່ </span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo || '')) + "</span> <div class=\"currency-options\" data-v-5b9a2372><label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-5b9a2372>\n                  LAK</label> <label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-5b9a2372>\n                  THB</label> <label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-5b9a2372>\n                  USD</label></div></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ໃຫ້ທ່ານ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.receiveName || ((_vm$voucherData$maker = _vm.voucherData.maker) === null || _vm$voucherData$maker === void 0 ? void 0 : _vm$voucherData$maker.cus_name) || '')) + "</span> <span class=\"label\" data-v-5b9a2372>ເລກບັດປະຈຳຕົວ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.receiveIDNO || '')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ສັງກັດຢູ່ພາກສ່ວນ ກົມ/ກອງ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$minis = _vm.voucherData.ministry) === null || _vm$voucherData$minis === void 0 ? void 0 : _vm$voucherData$minis.ministryName) || '')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ເນື້ອໃນລາຍຈ່າຍ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.purpose || '')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372></span> <span class=\"dotted-line\" data-v-5b9a2372></span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372></span> <span class=\"dotted-line\" data-v-5b9a2372></span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ຈຳນວນ</span> <span class=\"amount-display\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.name) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.code))) + "</span></div></div> <div class=\"signature-section\" data-v-5b9a2372><div class=\"signature-box\" data-v-5b9a2372><div class=\"signature-title\" data-v-5b9a2372>ຫົວໜ້າພະແນກ ຄັງເງິນສົດ</div> <div class=\"signature-line\" data-v-5b9a2372></div> <div class=\"signature-name\" data-v-5b9a2372></div></div> <div class=\"signature-box\" data-v-5b9a2372><div class=\"signature-title\" data-v-5b9a2372>ຜູ້ຮັບເງິນ</div> <div class=\"signature-line\" data-v-5b9a2372></div> <div class=\"signature-name\" data-v-5b9a2372>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.receiveName || ((_vm$voucherData$maker2 = _vm.voucherData.maker) === null || _vm$voucherData$maker2 === void 0 ? void 0 : _vm$voucherData$maker2.cus_name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-5b9a2372><div class=\"signature-title\" data-v-5b9a2372>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-line\" data-v-5b9a2372></div> <div class=\"signature-name\" data-v-5b9a2372>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div></div></div></div> <div class=\"modal-footer\" data-v-5b9a2372><button class=\"btn btn-secondary\" data-v-5b9a2372><i class=\"fas fa-times\" data-v-5b9a2372></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-5b9a2372><i class=\"fas fa-print\" data-v-5b9a2372></i>\n          ພິມ\n        </button></div></div></div>" : "<!---->") + " <div class=\"print-only\"" + _vm._ssrStyle(null, null, {
    display: false ? undefined : 'none'
  }) + " data-v-5b9a2372><div class=\"voucher-container print-version\" data-v-5b9a2372><div class=\"voucher-header\" data-v-5b9a2372><div class=\"company-info\" data-v-5b9a2372><div class=\"company-name\" data-v-5b9a2372>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</div> <div class=\"department\" data-v-5b9a2372>ກົມການເງິນ ແລະ ສິນເຊື່ອ</div> <div class=\"sub-department\" data-v-5b9a2372>\n            ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ\n          </div> <div class=\"amount-line\" data-v-5b9a2372>.........(000)..........</div></div> <div class=\"voucher-number\" data-v-5b9a2372><div class=\"number-box\" data-v-5b9a2372><span class=\"number-label\" data-v-5b9a2372>No</span> <span class=\"number-value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div></div></div> <div class=\"voucher-title\" data-v-5b9a2372>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-5b9a2372><div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ອີງໃສ່ໃບ ຖອນ/ສະເຫນີ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRef || '')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ເລກທີ</span> <span class=\"value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRefNo || _vm.voucherData.id || 'N/A')) + "</span> <span class=\"label\" data-v-5b9a2372>ວັນທີນີ້</span> <span class=\"value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-5b9a2372>ເດືອນ</span> <span class=\"value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-5b9a2372>ປີ</span> <span class=\"value\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ໄດ້ຈ່າຍເງິນ </span> <label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cash') + " data-v-5b9a2372></label> <span class=\"label\" data-v-5b9a2372> ສົດ </span> <label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cheque') + " data-v-5b9a2372></label> <span class=\"label\" data-v-5b9a2372> ແຊັກເລກທີ່ </span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo || '')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ໃຫ້ທ່ານ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.receiveName || ((_vm$voucherData$maker3 = _vm.voucherData.maker) === null || _vm$voucherData$maker3 === void 0 ? void 0 : _vm$voucherData$maker3.cus_name) || '')) + "</span> <span class=\"label\" data-v-5b9a2372>ເລກບັດປະຈຳຕົວ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.receiveIDNO || '')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ສັງກັດຢູ່ພາກສ່ວນ ກົມ/ກອງ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$minis2 = _vm.voucherData.ministry) === null || _vm$voucherData$minis2 === void 0 ? void 0 : _vm$voucherData$minis2.ministryName) || '')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span> <div class=\"currency-options\" data-v-5b9a2372><label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre6 = _vm.voucherData.currency) === null || _vm$voucherData$curre6 === void 0 ? void 0 : _vm$voucherData$curre6.code) === 'LAK') + " data-v-5b9a2372>\n              LAK</label> <label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre7 = _vm.voucherData.currency) === null || _vm$voucherData$curre7 === void 0 ? void 0 : _vm$voucherData$curre7.code) === 'THB') + " data-v-5b9a2372>\n              THB</label> <label data-v-5b9a2372><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre8 = _vm.voucherData.currency) === null || _vm$voucherData$curre8 === void 0 ? void 0 : _vm$voucherData$curre8.code) === 'USD') + " data-v-5b9a2372>\n              USD</label></div></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ຈຳນວນ</span> <span class=\"amount-display\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre9 = _vm.voucherData.currency) === null || _vm$voucherData$curre9 === void 0 ? void 0 : _vm$voucherData$curre9.name) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre10 = _vm.voucherData.currency) === null || _vm$voucherData$curre10 === void 0 ? void 0 : _vm$voucherData$curre10.code))) + "</span></div> <div class=\"detail-row\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ເນື້ອໃນລາຍຈ່າຍ</span> <span class=\"dotted-line\" data-v-5b9a2372>" + _vm._ssrEscape(_vm._s(_vm.voucherData.purpose || '')) + "</span></div> <div class=\"detail-row description\" data-v-5b9a2372><span class=\"label\" data-v-5b9a2372>ເນື້ອໃນລາຍການ</span> <div class=\"description-content\" data-v-5b9a2372>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.note || 'ບໍ່ມີຫມາຍເຫດ') + "\n          ") + "</div></div></div> <div class=\"signature-section\" data-v-5b9a2372><div class=\"signature-box\" data-v-5b9a2372><div class=\"signature-title\" data-v-5b9a2372>ຜູ້ຮັບເງິນຂຶ້ນເຊັນ ຊື່ເຕັມ</div> <div class=\"signature-line\" data-v-5b9a2372></div> <div class=\"signature-name\" data-v-5b9a2372>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.receiveName || ((_vm$voucherData$maker4 = _vm.voucherData.maker) === null || _vm$voucherData$maker4 === void 0 ? void 0 : _vm$voucherData$maker4.cus_name) || '') + "\n          ") + "</div></div> <div class=\"signature-box\" data-v-5b9a2372><div class=\"signature-title\" data-v-5b9a2372>ຜູ້ສົ່ງເງິນ</div> <div class=\"signature-line\" data-v-5b9a2372></div></div> <div class=\"signature-box\" data-v-5b9a2372><div class=\"signature-title\" data-v-5b9a2372>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-line\" data-v-5b9a2372></div></div> <div class=\"signature-box\" data-v-5b9a2372><div class=\"signature-title\" data-v-5b9a2372>ນາຍຄົນຈັງ</div> <div class=\"signature-line\" data-v-5b9a2372></div> <div class=\"signature-name\" data-v-5b9a2372>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$check2 = _vm.voucherData.checker) === null || _vm$voucherData$check2 === void 0 ? void 0 : _vm$voucherData$check2.cus_name) || '') + "\n          ") + "</div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=template&id=5b9a2372&scoped=true&

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
        // ✅ NEW: Default method
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

        // Handle remainder (thousands and hundreds)
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
      } else if (length <= 10) {
        // 1,000,000,000 - 9,999,999,999 (billions)
        const billions = Math.floor(amount / 1000000000);
        const remainder = amount % 1000000000;

        // Handle billions part
        result = numbers[billions] + 'ພັນລ້ານ';

        // Handle remainder (millions, thousands, hundreds)
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
              if (millionRemainder >= 1000) {
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
    // ✅ FIXED: Single printVoucher method without auto-close
    printVoucher() {
      const printContent = this.$refs.voucherContent.innerHTML;
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
              }

              .voucher-logo {
                max-width: 80px;
                max-height: 80px;
                width: auto;
                height: auto;
                object-fit: contain;
              }
              .voucher-container { 
                border: 2px solid #000; 
                padding: 15px; 
                font-size: 12px; 
                line-height: 1.4; 
                max-width: 210mm;
                margin: 0 auto;
              }
              .voucher-header { 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start; 
                margin-bottom: 20px; 
                padding-bottom: 10px; 
                border-bottom: 1px solid #ccc; 
              }
              .ministry-voucher-section {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 20px;
                padding: 10px 0;
              }
              .ministry-titles {
                flex: 1;
                text-align: left;
              }
              .ministry-titles .voucher-title {
                font-size: 12px;
                margin-bottom: 4px;
                text-align: left;
                text-decoration: none;
                font-weight: normal;
                color: #333;
              }
              .company-info { 
                flex: 1; 
                text-align: center; 
              }
              .company-name { 
                font-weight: bold; 
                font-size: 14px; 
                margin-bottom: 5px; 
              }
              .department { 
                font-size: 12px; 
                margin-bottom: 3px; 
              }
              .sub-department { 
                font-size: 10px; 
                margin-bottom: 10px; 
              }
              .amount-line { 
                font-size: 10px; 
                letter-spacing: 2px; 
              }
              .voucher-number { 
                flex: 0 0 auto; 
                margin-left: 20px; 
                text-align: right;
              }
              .number-box { 
                border: 2px solid #000; 
                padding: 8px 12px; 
                text-align: center; 
                background: #f9f9f9; 
                margin-bottom: 8px;
              }
              .number-label { 
                font-weight: bold; 
                margin-right: 10px; 
              }
              .number-value { 
                font-weight: bold; 
                color: #d32f2f;
              }
              .voucher-title { 
                text-align: center; 
                font-size: 16px; 
                font-weight: bold; 
                margin: 20px 0; 
                text-decoration: underline; 
              }
              .voucher-details { 
                margin-bottom: 30px; 
              }
              .detail-row { 
                display: flex; 
                align-items: center; 
                margin-bottom: 12px; 
                min-height: 24px; 
              }
              .detail-row.description { 
                flex-direction: column; 
                align-items: flex-start; 
              }
              .label { 
                font-weight: 500; 
                margin-right: 10px; 
                white-space: nowrap; 
              }
              .value { 
                margin-right: 20px; 
                border-bottom: 1px solid #000; 
                min-width: 40px; 
                text-align: center; 
                padding: 2px 5px; 
                font-weight: 600;
              }
              .dotted-line { 
                flex: 1; 
                border-bottom: 1px dotted #000; 
                margin: 0 10px; 
                min-height: 20px; 
                padding: 2px 5px; 
              }
              .currency-options { 
                display: flex; 
                gap: 20px; 
                margin-left: 10px; 
              }
              .currency-options label { 
                display: flex; 
                align-items: center; 
                gap: 5px; 
                font-weight: normal; 
              }
              .amount-display { 
                font-weight: bold; 
                font-size: 14px; 
                margin: 0 10px; 
                color: #d32f2f;
              }
              .description-content { 
                width: 100%; 
                min-height: 60px; 
                border: 1px solid #000; 
                padding: 10px; 
                margin-top: 5px; 
                background: #fafafa; 
              }
              .amount-words { 
                flex: 1; 
                border-bottom: 1px solid #000; 
                margin-left: 10px; 
                padding: 2px 10px; 
                font-style: italic; 
              }
              .signature-section { 
                display: flex; 
                justify-content: space-between; 
                margin-top: 40px; 
                gap: 10px; 
              }
              .signature-box { 
                flex: 1; 
                text-align: center; 
              }
              .signature-title { 
                font-size: 10px; 
                margin-bottom: 30px; 
                font-weight: 500; 
              }
              .signature-line { 
                border-bottom: 1px solid #000; 
                height: 1px; 
                margin-top: 20px; 
              }
              .signature-name { 
                font-size: 9px; 
                margin-top: 5px; 
                font-weight: normal; 
              }
              @media print {
                .ministry-voucher-section {
                  display: flex !important;
                  justify-content: space-between !important;
                  align-items: flex-start !important;
                  margin-bottom: 20px !important;
                  padding: 10px 0 !important;
                }
                .ministry-titles {
                  flex: 1 !important;
                  text-align: left !important;
                }
                .ministry-titles .voucher-title {
                  font-size: 11px !important;
                  margin-bottom: 3px !important;
                  text-align: left !important;
                  text-decoration: none !important;
                  font-weight: normal !important;
                }
                .voucher-number {
                  flex: 0 0 auto !important;
                  margin-left: 20px !important;
                  text-align: right !important;
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

      // ✅ REMOVED: Don't auto-close the dialog after printing
      // this.showPrintDialog = false
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentVouchervue_type_script_lang_js_ = (paymentVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(544)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentVouchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5b9a2372",
  "36e13303"
  
)

/* harmony default export */ var paymentVoucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b535260_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b535260_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b535260_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b535260_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b535260_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-header-right[data-v-4b535260]{align-items:center;display:flex;gap:15px}.voucher-number[data-v-4b535260]{color:#fff;font-size:14px;font-weight:600;opacity:.9}.modal-overlay[data-v-4b535260]{align-items:center;animation:fadeIn-4b535260 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-4b535260{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-4b535260]{animation:slideIn-4b535260 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:98vh;max-width:95vw;overflow:hidden;width:95%}@keyframes slideIn-4b535260{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-4b535260]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:16px 18px}.modal-title-section[data-v-4b535260]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-4b535260]{font-size:18px;opacity:.9}.modal-title[data-v-4b535260]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-4b535260]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;opacity:.8;padding:6px;transition:opacity .2s}.close-btn[data-v-4b535260]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-4b535260]{max-height:calc(98vh - 120px);overflow-y:auto;padding:16px 18px}.form-loading[data-v-4b535260]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-4b535260]{animation:spin-4b535260 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-4b535260{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid[data-v-4b535260]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(3,1fr)}.form-group[data-v-4b535260]{margin-bottom:0}.form-group.full-width[data-v-4b535260]{grid-column:1/-1}.form-group.span-2[data-v-4b535260]{grid-column:span 2}.form-group.span-3[data-v-4b535260]{grid-column:span 3}.form-label[data-v-4b535260]{align-items:center;color:#374151;display:flex;font-size:11px;font-weight:600;gap:6px;margin-bottom:4px}.form-label.required[data-v-4b535260]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-4b535260]{color:#6b7280;font-size:11px}.form-control[data-v-4b535260]{background:#fafafa;border:1px solid #e5e7eb;border-radius:4px;box-sizing:border-box;font-size:12px;height:32px;padding:6px 8px;transition:all .2s ease;width:100%}.form-control[data-v-4b535260]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}textarea.form-control[data-v-4b535260]{height:auto;min-height:60px;resize:vertical}.custom-select-wrapper[data-v-4b535260]{position:relative}.custom-select[data-v-4b535260]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:32px}.select-icon[data-v-4b535260]{color:#6b7280;font-size:12px;pointer-events:none;position:absolute;right:8px;top:50%;transform:translateY(-50%)}.ministry-info[data-v-4b535260]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:4px;margin-top:6px;padding:6px}.ministry-details[data-v-4b535260]{grid-gap:3px;display:grid;gap:3px;grid-template-columns:1fr}.ministry-detail-item[data-v-4b535260]{align-items:center;color:#075985;display:flex;font-size:10px;gap:4px}.ministry-detail-item i[data-v-4b535260]{color:#0ea5e9;flex-shrink:0;width:12px}.ministry-name[data-v-4b535260]{font-weight:600}.ministry-code[data-v-4b535260]{background:#e0f2fe;border-radius:2px;font-family:monospace;padding:1px 4px}.bank-account-info[data-v-4b535260]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:4px;margin-top:6px;padding:6px}.bank-details[data-v-4b535260]{grid-gap:3px;display:grid;gap:3px;grid-template-columns:1fr}.bank-detail-item[data-v-4b535260]{align-items:center;color:#6b7280;display:flex;font-size:10px;gap:4px}.bank-detail-item i[data-v-4b535260]{color:#667eea;width:12px}.form-errors[data-v-4b535260]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;margin-top:16px;padding:12px}.form-errors h6[data-v-4b535260]{align-items:center;color:#dc2626;display:flex;font-size:12px;gap:6px;margin:0 0 8px}.form-errors ul[data-v-4b535260]{color:#dc2626;font-size:11px;margin:0;padding-left:16px}.enhanced-footer[data-v-4b535260]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:12px 18px}.btn[data-v-4b535260]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-4b535260]:hover:not(:disabled){box-shadow:0 3px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-4b535260]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-4b535260]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-4b535260]{background:#6c757d;color:#fff}.btn[data-v-4b535260]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-4b535260]{animation:spin-4b535260 1s linear infinite}@media (max-width:1024px){.form-grid[data-v-4b535260]{grid-template-columns:repeat(2,1fr)}.form-group.span-2[data-v-4b535260],.form-group.span-3[data-v-4b535260]{grid-column:1/-1}}@media (max-width:768px){.enhanced-dialog[data-v-4b535260]{margin:10px;width:98%}.form-grid[data-v-4b535260]{grid-template-columns:1fr}.form-group.span-2[data-v-4b535260],.form-group.span-3[data-v-4b535260]{grid-column:1}.enhanced-footer[data-v-4b535260],.modal-body[data-v-4b535260],.modal-header[data-v-4b535260]{padding:14px 16px}.enhanced-footer[data-v-4b535260]{flex-direction:column-reverse}.enhanced-footer .btn[data-v-4b535260]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDialog/index.vue?vue&type=template&id=4b535260&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.show ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-4b535260>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-4b535260>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-4b535260><div class=\"modal-title-section\" data-v-4b535260><i class=\"fas fa-money-bill-wave modal-icon\" data-v-4b535260></i> <h5 class=\"modal-title\" data-v-4b535260>" + _vm._ssrEscape("\n            " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂລາຍຈ່າຍ' : 'ລົງບັນຊີລາຍຈ່າຍ') + "\n          ") + "</h5></div> <div class=\"modal-header-right\" data-v-4b535260><span class=\"voucher-number\" data-v-4b535260>" + _vm._ssrEscape("\n            ເລກທີ:\n            " + _vm._s(_vm.formData.id ? _vm.formatVoucherNumber(_vm.localForm.id) : '000000') + "\n          ") + "</span> <button class=\"close-btn\" data-v-4b535260><i class=\"fas fa-times\" data-v-4b535260></i></button></div></div> "), _vm._ssrNode("<form data-v-4b535260>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-4b535260>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"form-loading\" data-v-4b535260>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-4b535260></div> <p data-v-4b535260>Loading form data...</p>")], 2) : _vm._ssrNode("<div class=\"form-grid\" data-v-4b535260>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4b535260><label class=\"form-label required\" data-v-4b535260><i class=\"fas fa-calendar\" data-v-4b535260></i>\n                ວັນທີ\n              </label> <input type=\"date\"" + _vm._ssrAttr("max", _vm.today) + " required=\"required\" title=\"ເລືອກວັນທີ (Select Date)\"" + _vm._ssrAttr("value", _vm.localForm.bookingDate) + " class=\"form-control\" data-v-4b535260> <small class=\"text-muted\" style=\"\\n                  font-size: 10px;\\n                  color: #6b7280;\\n                  margin-top: 2px;\\n                  display: block;\\n                \" data-v-4b535260>\n                ຮູບແບບຈະສະແດງຕາມການຕັ້ງຄ່າຂອງ Browser\n              </small></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-4b535260>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-4b535260><i class=\"fas fa-credit-card\" data-v-4b535260></i>\n                ວິທີການຈ່າຍເງິນ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-4b535260>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.method,
      expression: "localForm.method"
    }],
    staticClass: "form-control custom-select",
    attrs: {
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "method", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleMethodChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກວິທີການຊຳລະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ (Cash)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cheque"
    }
  }, [_vm._v("ເຊັກ (Cheque)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("\n                    ໂອນທະນາຄານ (Bank Transfer)\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "deduction"
    }
  }, [_vm._v("ຫັກລົບ (Deduction)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-4b535260><i class=\"fas fa-chevron-down\" data-v-4b535260></i></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-4b535260>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-4b535260><i class=\"fas fa-coins\" data-v-4b535260></i>\n                ສະກຸນເງິນ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-4b535260>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.currencyId,
      expression: "localForm.currencyId"
    }],
    staticClass: "form-control custom-select",
    attrs: {
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedCurrency]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n                    " + _vm._s(currency.code) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-4b535260><i class=\"fas fa-chevron-down\" data-v-4b535260></i></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-4b535260><label class=\"form-label\" data-v-4b535260><i class=\"fas fa-exchange-alt\" data-v-4b535260></i>\n                ອັດຕາແລກປ່ຽນ\n              </label> <input type=\"number\" step=\"0.000001\" min=\"0\" placeholder=\"ອັດຕາແລກປ່ຽນ\"" + _vm._ssrAttr("value", _vm.localForm.exchangeRate) + " class=\"form-control\" data-v-4b535260></div> <div class=\"form-group\" data-v-4b535260><label class=\"form-label required\" data-v-4b535260><i class=\"fas fa-dollar-sign\" data-v-4b535260></i>\n                ຈຳນວນເງິນ\n              </label> <input type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"Enter amount\" required=\"required\"" + _vm._ssrAttr("value", _vm.localForm.amount) + " class=\"form-control\" data-v-4b535260></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-4b535260>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-4b535260><i class=\"fas fa-user\" data-v-4b535260></i>\n                ຜູ້ໃຊ້\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-4b535260>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.makerId,
      expression: "localForm.makerId"
    }],
    staticClass: "form-control custom-select",
    attrs: {
      "required": "",
      "disabled": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "makerId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ລົງ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                    " + _vm._s(user.cus_name) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-4b535260><i class=\"fas fa-chevron-down\" data-v-4b535260></i></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-4b535260><label class=\"form-label\" data-v-4b535260><i class=\"fas fa-external-link-alt\" data-v-4b535260></i>\n                ການອ້າງອີງພາຍນອກ\n              </label> <input type=\"text\" placeholder=\"ການອ້າງອີງພາຍນອກ\" maxlength=\"100\"" + _vm._ssrAttr("value", _vm.localForm.externalRef) + " class=\"form-control\" data-v-4b535260></div> <div class=\"form-group\" data-v-4b535260><label class=\"form-label\" data-v-4b535260><i class=\"fas fa-hashtag\" data-v-4b535260></i>\n                ເລກອ້າງອີງພາຍນອກ\n              </label> <input type=\"text\" placeholder=\"ເລກອ້າງອີງພາຍນອກ\" maxlength=\"50\"" + _vm._ssrAttr("value", _vm.localForm.externalRefNo) + " class=\"form-control\" data-v-4b535260></div> <div class=\"form-group\"" + _vm._ssrStyle(null, null, {
    display: _vm.localForm.method === 'cheque' ? '' : 'none'
  }) + " data-v-4b535260><label" + _vm._ssrClass("form-label", {
    required: _vm.localForm.method === 'cheque'
  }) + " data-v-4b535260><i class=\"fas fa-money-check\" data-v-4b535260></i>\n                ເລກເຊັກ\n              </label> <input type=\"text\" placeholder=\"ເລກເຊັກ\" maxlength=\"50\"" + _vm._ssrAttr("required", _vm.localForm.method === 'cheque') + _vm._ssrAttr("value", _vm.localForm.chequeNo) + " class=\"form-control\" data-v-4b535260></div> <div class=\"form-group\" data-v-4b535260><label class=\"form-label\" data-v-4b535260><i class=\"fas fa-user-circle\" data-v-4b535260></i>\n                ຊື່ຜູ້ຮັບ\n              </label> <input type=\"text\" placeholder=\"ຊື່ຜູ້ຮັບເງິນ\" maxlength=\"100\"" + _vm._ssrAttr("value", _vm.localForm.receiveName) + " class=\"form-control\" data-v-4b535260></div> <div class=\"form-group\" data-v-4b535260><label class=\"form-label\" data-v-4b535260><i class=\"fas fa-id-card\" data-v-4b535260></i>\n                ເລກບັດປະຈຳຕົວຜູ້ຮັບ\n              </label> <input type=\"text\" placeholder=\"ເລກບັດປະຈຳຕົວ\" maxlength=\"20\"" + _vm._ssrAttr("value", _vm.localForm.receiveIDNO) + " class=\"form-control\" data-v-4b535260></div> <div class=\"form-group\" data-v-4b535260><label class=\"form-label\" data-v-4b535260><i class=\"fas fa-calendar-alt\" data-v-4b535260></i>\n                ວັນຄົບຮອບຄວນຊຳລະ\n              </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.localForm.dueDate) + " class=\"form-control\" data-v-4b535260></div> "), _vm._ssrNode("<div class=\"form-group span-2\" data-v-4b535260>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-4b535260><i class=\"fas fa-building\" data-v-4b535260></i>\n                ກົມ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-4b535260>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.ministryId,
      expression: "localForm.ministryId"
    }],
    staticClass: "form-control custom-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedMinistry]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກົມ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                    " + _vm._s(ministry.ministryCode + ' ' + ministry.ministryName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-4b535260><i class=\"fas fa-chevron-down\" data-v-4b535260></i></div>")], 2), _vm._ssrNode(" " + (_vm.selectedMinistry ? "<div class=\"ministry-info\" data-v-4b535260><div class=\"ministry-details\" data-v-4b535260><div class=\"ministry-detail-item\" data-v-4b535260><i class=\"fas fa-building\" data-v-4b535260></i> <span class=\"ministry-name\" data-v-4b535260>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryName)) + "</span></div> " + (_vm.selectedMinistry.ministryCode ? "<div class=\"ministry-detail-item\" data-v-4b535260><i class=\"fas fa-tag\" data-v-4b535260></i> <span class=\"ministry-code\" data-v-4b535260>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryCode)) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\"" + _vm._ssrStyle(null, null, {
    display: _vm.localForm.method === 'bank_transfer' ? '' : 'none'
  }) + " data-v-4b535260>", "</div>", [_vm._ssrNode("<label" + _vm._ssrClass("form-label", {
    required: _vm.localForm.method === 'bank_transfer'
  }) + " data-v-4b535260><i class=\"fas fa-university\" data-v-4b535260></i>\n                ບັນຊີທະນາຄານ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-4b535260>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.bankAccountId,
      expression: "localForm.bankAccountId"
    }],
    staticClass: "form-control custom-select",
    attrs: {
      "required": _vm.localForm.method === 'bank_transfer'
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.localForm, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedBankAccount]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີ")]), _vm._v(" "), _vm._l(_vm.filteredBankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                    " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-4b535260><i class=\"fas fa-chevron-down\" data-v-4b535260></i></div>")], 2), _vm._ssrNode(" " + (_vm.selectedBankAccount ? "<div class=\"bank-account-info\" data-v-4b535260><div class=\"bank-details\" data-v-4b535260><div class=\"bank-detail-item\" data-v-4b535260><i class=\"fas fa-building\" data-v-4b535260></i> <span data-v-4b535260>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.bankName)) + "</span></div> <div class=\"bank-detail-item\" data-v-4b535260><i class=\"fas fa-credit-card\" data-v-4b535260></i> <span data-v-4b535260>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountNumber)) + "</span></div></div></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-4b535260><label class=\"form-label\" data-v-4b535260><i class=\"fas fa-tag\" data-v-4b535260></i>\n                ຈຸດປະສົງ\n              </label> <input type=\"text\" placeholder=\"ເນື້ອໃນ ການອອກລາຍຈ່າຍ\" maxlength=\"255\"" + _vm._ssrAttr("value", _vm.localForm.purpose) + " class=\"form-control\" data-v-4b535260></div> <div class=\"form-group full-width\" data-v-4b535260><label class=\"form-label\" data-v-4b535260><i class=\"fas fa-sticky-note\" data-v-4b535260></i>\n                ໂນ໊ດ\n              </label> <textarea rows=\"2\" placeholder=\"ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control\" data-v-4b535260>" + _vm._ssrEscape(_vm._s(_vm.localForm.note)) + "</textarea></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-4b535260><h6 data-v-4b535260><i class=\"fas fa-exclamation-circle\" data-v-4b535260></i>\n              Please fix the following errors:\n            </h6> <ul data-v-4b535260>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-4b535260>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-4b535260><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-4b535260><i class=\"fas fa-times\" data-v-4b535260></i>\n            ອອກ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.saving || _vm.formLoading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-4b535260>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-4b535260></i>" : "<i" + _vm._ssrClass("fas", _vm.isEdit ? 'fa-save' : 'fa-plus') + " data-v-4b535260></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.saving ? 'Saving...' : _vm.isEdit ? 'ບັນທຶກ ການແກ້ໄຂ' : 'ບັນທຶກ') + "\n          ") + "</button> <button title=\"Print\" class=\"btn btn-sm btn-danger\" data-v-4b535260><i class=\"fas fa-print\" data-v-4b535260></i></button></div>")], 2)], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.showPrintVoucher && _vm.advanceDetails ? _c('VoucherPrintComponent', {
    key: _vm.advanceDetails.id,
    attrs: {
      "voucher-data": _vm.advanceDetails
    },
    on: {
      "close": _vm.closePrintVoucher
    }
  }) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue?vue&type=template&id=4b535260&scoped=true&

// EXTERNAL MODULE: ./components/MA/paymentVoucher/index.vue + 4 modules
var paymentVoucher = __webpack_require__(574);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDialog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var paymentDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceDialog',
  components: {
    VoucherPrintComponent: paymentVoucher["default"]
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default: () => ({
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        exchangeRate: '',
        method: 'cash',
        // ✅ NEW: Default method
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: ''
      })
    },
    users: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    bankAccounts: {
      type: Array,
      default: () => []
    },
    ministries: {
      type: Array,
      default: () => []
    },
    formLoading: {
      type: Boolean,
      default: false
    },
    saving: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.initForm();
  },
  data() {
    return {
      advanceDetails: null,
      showPrintVoucher: false,
      localForm: {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        exchangeRate: '',
        method: 'cash',
        // ✅ NEW: Default method
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: ''
      },
      formErrors: []
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    selectedCurrencyCode() {
      if (!this.localForm.currencyId) return 'USD';
      const currency = this.currencies.find(c => c.id == this.localForm.currencyId);
      return currency ? currency.code : 'USD';
    },
    selectedBankAccount() {
      if (!this.localForm.bankAccountId) return null;
      return this.bankAccounts.find(account => account.id == this.localForm.bankAccountId);
    },
    selectedMinistry() {
      if (!this.localForm.ministryId) return null;
      return this.ministries.find(ministry => ministry.id == this.localForm.ministryId);
    },
    selectedCurrency() {
      if (!this.localForm.currencyId) return null;
      return this.currencies.find(currency => currency.id == this.localForm.currencyId);
    },
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts;
      }
      const currencyCode = this.selectedCurrency.code;
      const filtered = this.bankAccounts.filter(account => account.currency === currencyCode || !account.currency);
      return filtered.length > 0 ? filtered : this.bankAccounts;
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    isFormValid() {
      const validations = {
        'amount exists': !!this.localForm.amount,
        'amount > 0': this.localForm.amount && parseFloat(this.localForm.amount) > 0,
        'makerId exists': !!this.localForm.makerId,
        'currencyId exists': !!this.localForm.currencyId,
        'bookingDate exists': !!this.localForm.bookingDate,
        'method exists': !!this.localForm.method,
        // ✅ NEW: Method validation
        'users available': this.users.length > 0,
        'currencies available': this.currencies.length > 0,
        'exchange rate valid': !this.localForm.exchangeRate || this.localForm.exchangeRate && !isNaN(parseFloat(this.localForm.exchangeRate)) && parseFloat(this.localForm.exchangeRate) > 0,
        'externalRef valid': !this.localForm.externalRef || this.localForm.externalRef.length <= 100,
        'externalRefNo valid': !this.localForm.externalRefNo || this.localForm.externalRefNo.length <= 50,
        'chequeNo valid': !this.localForm.chequeNo || this.localForm.chequeNo.length <= 50,
        'receiveName valid': !this.localForm.receiveName || this.localForm.receiveName.length <= 100,
        'receiveIDNO valid': !this.localForm.receiveIDNO || this.localForm.receiveIDNO.length <= 20,
        // ✅ NEW: Conditional validations based on method
        'cheque number required': this.localForm.method !== 'cheque' || this.localForm.method === 'cheque' && !!this.localForm.chequeNo,
        'bank account required': this.localForm.method !== 'bank_transfer' || this.localForm.method === 'bank_transfer' && !!this.localForm.bankAccountId
      };
      return Object.values(validations).every(Boolean);
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initForm();
      }
    },
    formData: {
      handler(newVal) {
        console.info(`Form data is changing...`);
        if (newVal) {
          this.localForm = {
            ...newVal
          };
          if (!this.isEdit && !this.localForm.bookingDate) {
            this.localForm.bookingDate = this.today;
          }
        }
      },
      deep: true,
      immediate: true
    },
    // ✅ NEW: Watch method changes to clear conditional fields
    'localForm.method'(newMethod, oldMethod) {
      if (oldMethod && newMethod !== oldMethod) {
        this.handleMethodChange();
      }
    }
  },
  methods: {
    formatDisplayDate(dateString) {
      if (!dateString) return '';
      try {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        // Lao months names (optional)
        const laoMonths = ['ມັງກອນ', 'ກຸມພາ', 'ມີນາ', 'ເມສາ', 'ພຶດສະພາ', 'ມິຖຸນາ', 'ກໍລະກົດ', 'ສິງຫາ', 'ກັນຍາ', 'ຕຸລາ', 'ພະຈິກ', 'ທັນວາ'];

        // Return format: DD/MM/YYYY
        return `${day}/${month}/${year}`;

        // Or with Lao month name: DD ເດືອນ MM ປີ YYYY
        // return `${day} ${laoMonths[date.getMonth()]} ${year}`
      } catch (error) {
        return dateString;
      }
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0');
    },
    async fetchAdvanceByid() {
      if (!this.localForm.id) return this.showToast('ກະລຸນາບັນທຶກຂໍ້ມູນກ່ອນ', 'error');
      this.loading = true;
      try {
        const {
          data
        } = await this.$axios.get(`/api/money-advances/${this.localForm.id}`);
        this.advanceDetails = data.data;
      } catch (error) {
        this.showToast('Error fetching money advances', 'error');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async printAdvanceDetails() {
      await this.fetchAdvanceByid();
      this.showPrintVoucher = true;
    },
    closePrintVoucher() {
      this.showPrintVoucher = false;
      setTimeout(() => {
        this.advanceDetails = null;
      }, 100);
    },
    initForm() {
      this.formErrors = [];
      console.info(`initiate form data called...${JSON.stringify(this.formData)}`);
      if (this.isEdit && this.formData) {
        console.info(`formData is available...`);
        this.localForm = {
          ...this.formData
        };
      } else {
        this.resetForm();
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'LAK') || this.currencies[0];
          this.localForm.currencyId = defaultCurrency.id;
        }
      }
      if (!this.isEdit) {
        this.localForm.makerId = this.user.id;
        this.localForm.bookingDate = this.today;
      }
    },
    resetForm() {
      this.localForm = {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: this.today,
        exchangeRate: '',
        method: 'cash',
        // ✅ NEW: Default method
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: ''
      };
    },
    validateForm() {
      this.formErrors = [];
      if (!this.localForm.amount || parseFloat(this.localForm.amount) <= 0) {
        this.formErrors.push('Amount is required and must be greater than 0');
      }
      if (!this.localForm.makerId) {
        this.formErrors.push('User selection is required');
      }
      if (!this.localForm.currencyId) {
        this.formErrors.push('Currency selection is required');
      }
      if (!this.localForm.bookingDate) {
        this.formErrors.push('Booking date is required');
      }

      // ✅ NEW: Method validation
      if (!this.localForm.method) {
        this.formErrors.push('Payment method is required');
      }

      // ✅ NEW: Conditional validations based on method
      if (this.localForm.method === 'cheque' && !this.localForm.chequeNo) {
        this.formErrors.push('Cheque number is required when payment method is cheque');
      }
      if (this.localForm.method === 'bank_transfer' && !this.localForm.bankAccountId) {
        this.formErrors.push('Bank account is required when payment method is bank transfer');
      }
      if (this.localForm.purpose && this.localForm.purpose.length > 255) {
        this.formErrors.push('Purpose must not exceed 255 characters');
      }
      if (this.localForm.note && this.localForm.note.length > 500) {
        this.formErrors.push('Note must not exceed 500 characters');
      }
      if (this.localForm.exchangeRate && parseFloat(this.localForm.exchangeRate) <= 0) {
        this.formErrors.push('Exchange rate must be greater than 0 if provided');
      }
      if (this.localForm.externalRef && this.localForm.externalRef.length > 100) {
        this.formErrors.push('External reference must not exceed 100 characters');
      }
      if (this.localForm.externalRefNo && this.localForm.externalRefNo.length > 50) {
        this.formErrors.push('External reference number must not exceed 50 characters');
      }
      if (this.localForm.chequeNo && this.localForm.chequeNo.length > 50) {
        this.formErrors.push('Cheque number must not exceed 50 characters');
      }
      if (this.localForm.receiveName && this.localForm.receiveName.length > 100) {
        this.formErrors.push('Receiver name must not exceed 100 characters');
      }
      if (this.localForm.receiveIDNO && this.localForm.receiveIDNO.length > 20) {
        this.formErrors.push('Receiver ID number must not exceed 20 characters');
      }
      if (this.localForm.chequeNo && !/^[a-zA-Z0-9\-\/]*$/.test(this.localForm.chequeNo)) {
        this.formErrors.push('Cheque number can only contain letters, numbers, hyphens, and forward slashes');
      }
      if (this.localForm.receiveIDNO && !/^[a-zA-Z0-9]*$/.test(this.localForm.receiveIDNO)) {
        this.formErrors.push('Receiver ID number can only contain letters and numbers');
      }
      if (this.users.length === 0) {
        this.formErrors.push('No users available. Please contact administrator.');
      }
      if (this.currencies.length === 0) {
        this.formErrors.push('No currencies available. Please contact administrator.');
      }
      return this.formErrors.length === 0;
    },
    updateSelectedCurrency() {
      console.info(`select currency: ${this.selectedCurrency.code} currency list ${JSON.stringify(this.currencies)}`);
      this.localForm.exchangeRate = this.currencies.find(currency => currency.code === this.selectedCurrency.code).rate || 1;
      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency;
        const selectedCurrency = this.selectedCurrency.code;
        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.localForm.bankAccountId = '';
        }
      }
      this.$emit('currency-changed', this.localForm.currencyId);
    },
    updateSelectedBankAccount() {
      this.$emit('bank-account-changed', this.localForm.bankAccountId);
    },
    updateSelectedMinistry() {
      this.$emit('ministry-changed', this.localForm.ministryId);
    },
    // ✅ NEW: Handle payment method changes
    handleMethodChange() {
      const method = this.localForm.method;

      // Clear conditional fields when method changes
      if (method !== 'cheque') {
        this.localForm.chequeNo = '';
      }
      if (method !== 'bank_transfer') {
        this.localForm.bankAccountId = '';
      }

      // Emit method change event if needed
      this.$emit('method-changed', method);
    },
    closeDialog() {
      this.$emit('close');
    },
    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message);
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'Error' : 'Success',
          message: message,
          type: type === 'error' ? 'error' : 'success'
        });
      } else {
        alert(`${type.toUpperCase()}: ${message}`);
      }
    },
    async saveAdvance() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'Please fix the form errors');
        return;
      }
      console.info(`FORM DATA ${JSON.stringify(this.localForm)}`);
      // return
      const formData = {
        ...this.localForm
      };
      if (!formData.ministryId) delete formData.ministryId;
      if (!formData.bankAccountId) delete formData.bankAccountId;
      if (!formData.dueDate) delete formData.dueDate;
      if (!formData.purpose) delete formData.purpose;
      if (!formData.note) delete formData.note;
      if (!formData.exchangeRate) delete formData.exchangeRate;
      if (!formData.externalRef) delete formData.externalRef;
      if (!formData.externalRefNo) delete formData.externalRefNo;
      if (!formData.chequeNo) delete formData.chequeNo;
      if (!formData.receiveName) delete formData.receiveName;
      if (!formData.receiveIDNO) delete formData.receiveIDNO;
      console.info(`FORM DATA ${JSON.stringify(formData)}`);
      if (!this.localForm.id) {
        const response = await this.$axios.post('/api/money-advances', {
          ...formData
        });
        console.info(`REPONSE DATA ${JSON.stringify(response.data)}`);
        this.localForm.id = response.data.data.id;
        this.showToast('Money advance created successfully', 'success');
        return;
      }
      this.$emit('save', formData);
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentDialogvue_type_script_lang_js_ = (paymentDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(628)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b535260",
  "a055272e"
  
)

/* harmony default export */ var paymentDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-payment-dialog.js.map