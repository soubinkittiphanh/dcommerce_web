exports.ids = [57];
exports.modules = {

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(602);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("fb73d6dc", content, true, context)
};

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(524);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ecff44_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-33ecff44]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-33ecff44]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-33ecff44]{align-items:center;border-bottom:1px solid #eee;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-33ecff44]{color:#333;margin:0}.close-btn[data-v-33ecff44]{background:none;border:none;color:#666;cursor:pointer;font-size:18px}.close-btn[data-v-33ecff44]:hover{color:#333}.modal-body[data-v-33ecff44]{padding:20px}.modal-footer[data-v-33ecff44]{border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-33ecff44]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-33ecff44]{background:#007bff;color:#fff}.btn-primary[data-v-33ecff44]:hover{background:#0056b3}.btn-secondary[data-v-33ecff44]{background:#6c757d;color:#fff}.btn-secondary[data-v-33ecff44]:hover{background:#545b62}.voucher-container[data-v-33ecff44]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;line-height:1.4;margin:0 auto;max-width:700px;padding:20px;width:100%}.voucher-header[data-v-33ecff44]{align-items:flex-start;border-bottom:1px solid #ccc;display:flex;justify-content:space-between;margin-bottom:20px;padding-bottom:10px}.company-info[data-v-33ecff44]{flex:1;text-align:center}.company-name[data-v-33ecff44]{font-size:16px;font-weight:700;margin-bottom:5px}.department[data-v-33ecff44]{font-size:14px;margin-bottom:3px}.sub-department[data-v-33ecff44]{font-size:12px;margin-bottom:10px}.amount-line[data-v-33ecff44]{font-size:12px;letter-spacing:2px}.voucher-number[data-v-33ecff44]{flex:0 0 auto;margin-left:20px}.number-box[data-v-33ecff44]{background:#f9f9f9;border:2px solid #333;padding:8px 12px;text-align:center}.number-label[data-v-33ecff44]{font-weight:700;margin-right:10px}.number-value[data-v-33ecff44]{color:#d32f2f;font-weight:700}.voucher-title[data-v-33ecff44]{font-size:18px;font-weight:700;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-details[data-v-33ecff44]{margin-bottom:30px}.detail-row[data-v-33ecff44]{align-items:center;display:flex;margin-bottom:12px;min-height:24px}.detail-row.description[data-v-33ecff44]{align-items:flex-start;flex-direction:column}.label[data-v-33ecff44]{font-weight:500;margin-right:10px;white-space:nowrap}.value[data-v-33ecff44]{border-bottom:1px solid #333;margin-right:20px;min-width:40px;padding:2px 5px;text-align:center}.dotted-line[data-v-33ecff44]{border-bottom:1px dotted #333;flex:1;margin:0 10px;min-height:20px;padding:2px 5px}.currency-options[data-v-33ecff44]{display:flex;gap:20px;margin-left:10px}.currency-options label[data-v-33ecff44]{align-items:center;display:flex;font-weight:400;gap:5px}.amount-number[data-v-33ecff44]{border-bottom:1px solid #333;flex:1;font-weight:700;margin:0 10px;padding:2px 10px;text-align:right}.amount-display[data-v-33ecff44]{color:#d32f2f;font-size:16px;font-weight:700;margin:0 10px}.description-content[data-v-33ecff44]{background:#fafafa;border:1px solid #333;margin-top:5px;min-height:60px;padding:10px;width:100%}.amount-words[data-v-33ecff44]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:10px;padding:2px 10px}.signature-section[data-v-33ecff44]{display:flex;gap:10px;justify-content:space-between;margin-top:40px}.signature-box[data-v-33ecff44]{flex:1;text-align:center}.signature-title[data-v-33ecff44]{font-size:12px;font-weight:500;margin-bottom:30px}.signature-line[data-v-33ecff44]{border-bottom:1px solid #333;height:1px;margin-top:20px}.signature-name[data-v-33ecff44]{color:#666;font-size:10px;font-weight:400;margin-top:5px}@media print{body *[data-v-33ecff44]{visibility:hidden}.print-only[data-v-33ecff44],.print-only *[data-v-33ecff44]{visibility:visible}.print-only[data-v-33ecff44]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-33ecff44]{border:2px solid #000!important;font-size:12px!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}.voucher-title[data-v-33ecff44]{font-size:16px!important}.amount-display[data-v-33ecff44],.company-name[data-v-33ecff44]{font-size:14px!important}.signature-title[data-v-33ecff44]{font-size:10px!important}.department[data-v-33ecff44]{font-size:12px!important}.amount-line[data-v-33ecff44],.sub-department[data-v-33ecff44]{font-size:10px!important}.signature-name[data-v-33ecff44]{font-size:9px!important}}.print-only[data-v-33ecff44]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-33ecff44]{left:auto;position:static;top:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentVoucher/index.vue?vue&type=template&id=33ecff44&scoped=true&
var render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$check, _vm$voucherData$maker, _vm$voucherData$maker2, _vm$voucherData$curre6, _vm$voucherData$curre7, _vm$voucherData$curre8, _vm$voucherData$curre9, _vm$voucherData$maker3, _vm$voucherData$check2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.showPrintDialog ? "<div class=\"modal-overlay\" data-v-33ecff44><div class=\"modal-content\" data-v-33ecff44><div class=\"modal-header\" data-v-33ecff44><h3 data-v-33ecff44>ພິມໃບຈ່າຍສົດອອກຄັງ</h3> <button class=\"close-btn\" data-v-33ecff44><i class=\"fas fa-times\" data-v-33ecff44></i></button></div> <div class=\"modal-body\" data-v-33ecff44><div id=\"voucher-print\" class=\"voucher-container\" data-v-33ecff44><div class=\"voucher-header\" data-v-33ecff44><div class=\"company-info\" data-v-33ecff44><div class=\"company-name\" data-v-33ecff44>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-33ecff44>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div> <div class=\"amount-line\" data-v-33ecff44>.........(000)..........</div></div> <div class=\"voucher-number\" data-v-33ecff44><div class=\"number-box\" data-v-33ecff44><span class=\"number-label\" data-v-33ecff44>No</span> <span class=\"number-value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div></div></div> <div class=\"voucher-title\" data-v-33ecff44>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-33ecff44><div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ອີງໃສ່ໃບ ຖອນ/ສະເຫນີ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເລກທີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.voucherData.id || 'N/A')) + "</span> <span class=\"label\" data-v-33ecff44>ລົງວັນທີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-33ecff44>ເດືອນ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-33ecff44>ປີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຄັງເງິນສົດ, ກະຊວງ ໂຍທາທິການ ແລະ ຂົນສົ່ງ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ໄດ້ຈ່າຍເງິນ </span> <label data-v-33ecff44><input type=\"checkbox\" data-v-33ecff44></label> <span class=\"label\" data-v-33ecff44> ສົດ </span> <label data-v-33ecff44><input type=\"checkbox\" data-v-33ecff44></label> <span class=\"label\" data-v-33ecff44> ແຊັກເລກທີ່ </span> <span class=\"dotted-line\" data-v-33ecff44></span> <div class=\"currency-options\" data-v-33ecff44><label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-33ecff44>\n                  LAK</label> <label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-33ecff44>\n                  THB</label> <label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-33ecff44>\n                  USD</label></div></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ໃຫ້ທ່ານ</span> <span class=\"dotted-line\" data-v-33ecff44></span> <span class=\"label\" data-v-33ecff44>ເລກບັດປະຈຳຕົວ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ສັງກັດຢູ່ພາກສ່ວນ ກົມ/ກອງ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເນື້ອໃນລາຍຈ່າຍ</span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44></span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44></span> <span class=\"dotted-line\" data-v-33ecff44></span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈຳນວນ</span> <span class=\"amount-display\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.name) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.code))) + "</span></div> <div class=\"detail-row description\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເນື້ອໃນລາຍການ</span> <div class=\"description-content\" data-v-33ecff44>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.note || 'ບໍ່ມີຫມາຍເຫດ') + "\n              ") + "</div></div></div> <div class=\"signature-section\" data-v-33ecff44><div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຫົວໜ້າພະແນກ ຄັງເງິນສົດ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44></div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ຮັບເງິນ</div> <div class=\"signature-line\" data-v-33ecff44></div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ນາຍບັນຊີ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44></div></div></div></div></div> <div class=\"modal-footer\" data-v-33ecff44><button class=\"btn btn-secondary\" data-v-33ecff44><i class=\"fas fa-times\" data-v-33ecff44></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-33ecff44><i class=\"fas fa-print\" data-v-33ecff44></i>\n          ພິມ\n        </button></div></div></div>" : "<!---->") + " <div class=\"print-only\"" + _vm._ssrStyle(null, null, {
    display: false ? undefined : 'none'
  }) + " data-v-33ecff44><div class=\"voucher-container print-version\" data-v-33ecff44><div class=\"voucher-header\" data-v-33ecff44><div class=\"company-info\" data-v-33ecff44><div class=\"company-name\" data-v-33ecff44>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</div> <div class=\"department\" data-v-33ecff44>ກົມການເງິນ ແລະ ສິນເຊື່ອ</div> <div class=\"sub-department\" data-v-33ecff44>\n            ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ\n          </div> <div class=\"amount-line\" data-v-33ecff44>.........(000)..........</div></div> <div class=\"voucher-number\" data-v-33ecff44><div class=\"number-box\" data-v-33ecff44><span class=\"number-label\" data-v-33ecff44>No</span> <span class=\"number-value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div></div></div> <div class=\"voucher-title\" data-v-33ecff44>ໃບຈ່າຍເງິນສົດອອກຄັງ</div> <div class=\"voucher-details\" data-v-33ecff44><div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈ່າຍໃຫ້ຫຼືຮັບເອົາ</span> <span class=\"dotted-line\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$maker = _vm.voucherData.maker) === null || _vm$voucherData$maker === void 0 ? void 0 : _vm$voucherData$maker.cus_name) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເລກທີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$maker2 = _vm.voucherData.maker) === null || _vm$voucherData$maker2 === void 0 ? void 0 : _vm$voucherData$maker2.cus_id) || 'N/A')) + "</span> <span class=\"label\" data-v-33ecff44>ວັນທີນີ້</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-33ecff44>ເດືອນ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-33ecff44>ປີ</span> <span class=\"value\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span> <div class=\"currency-options\" data-v-33ecff44><label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre6 = _vm.voucherData.currency) === null || _vm$voucherData$curre6 === void 0 ? void 0 : _vm$voucherData$curre6.code) === 'LAK') + " data-v-33ecff44>\n              LAK</label> <label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre7 = _vm.voucherData.currency) === null || _vm$voucherData$curre7 === void 0 ? void 0 : _vm$voucherData$curre7.code) === 'THB') + " data-v-33ecff44>\n              THB</label> <label data-v-33ecff44><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre8 = _vm.voucherData.currency) === null || _vm$voucherData$curre8 === void 0 ? void 0 : _vm$voucherData$curre8.code) === 'USD') + " data-v-33ecff44>\n              USD</label></div></div> <div class=\"detail-row\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ຈຳນວນ</span> <span class=\"amount-display\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-33ecff44>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre9 = _vm.voucherData.currency) === null || _vm$voucherData$curre9 === void 0 ? void 0 : _vm$voucherData$curre9.name) || 'N/A')) + "</span></div> <div class=\"detail-row description\" data-v-33ecff44><span class=\"label\" data-v-33ecff44>ເນື້ອໃນລາຍການ</span> <div class=\"description-content\" data-v-33ecff44>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.note || 'ບໍ່ມີຫມາຍເຫດ') + "\n          ") + "</div></div></div> <div class=\"signature-section\" data-v-33ecff44><div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ຮັບເງິນຂຶ້ນເຊັນ ຊື່ເຕັມ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$maker3 = _vm.voucherData.maker) === null || _vm$voucherData$maker3 === void 0 ? void 0 : _vm$voucherData$maker3.cus_name) || '') + "\n          ") + "</div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ສົ່ງເງິນ</div> <div class=\"signature-line\" data-v-33ecff44></div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ຜູ້ຈ່າຍເງິນ</div> <div class=\"signature-line\" data-v-33ecff44></div></div> <div class=\"signature-box\" data-v-33ecff44><div class=\"signature-title\" data-v-33ecff44>ນາຍຄົນຈັງ</div> <div class=\"signature-line\" data-v-33ecff44></div> <div class=\"signature-name\" data-v-33ecff44>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$check2 = _vm.voucherData.checker) === null || _vm$voucherData$check2 === void 0 ? void 0 : _vm$voucherData$check2.cus_name) || '') + "\n          ") + "</div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=template&id=33ecff44&scoped=true&

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
        approvedAt: null,
        dueDate: '2025-07-24T00:00:00.000Z',
        createdAt: '2025-07-09T15:12:51.000Z',
        updateTimestamp: '2025-07-09T15:12:51.000Z',
        makerId: 2,
        checkerId: null,
        currencyId: 5,
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
    // Watch for changes to voucherData prop and reopen dialog if needed
    voucherData: {
      handler(newValue) {
        if (newValue && newValue.id) {
          this.showPrintDialog = true;
        }
      },
      deep: true,
      immediate: true // This ensures the watcher runs immediately when component is created
    }
  },

  methods: {
    openPrintDialog() {
      this.showPrintDialog = true;
    },
    closePrintDialog() {
      this.showPrintDialog = false;
      // Emit close event to parent
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

      // This is a simplified number to words conversion
      // You might want to implement a more comprehensive function
      const numbers = ['', 'ໜຶ່ງ', 'ສອງ', 'ສາມ', 'ສີ່', 'ຫ້າ', 'ຫົກ', 'ເຈັດ', 'ແປດ', 'ເກົ້າ'];
      const units = ['', 'ສິບ', 'ຮ້ອຍ', 'ພັນ', 'ສິບພັນ', 'ແສນ', 'ລ້ານ'];

      // Simple conversion for demonstration
      // In production, you'd want a more robust implementation
      const amountStr = amount.toString();
      const length = amountStr.length;
      if (length <= 6) {
        // Simple case for amounts up to 999,999
        let result = '';
        for (let i = 0; i < length; i++) {
          const digit = parseInt(amountStr[i]);
          const position = length - i - 1;
          if (digit > 0) {
            result += numbers[digit] + units[position];
          }
        }

        // Add currency suffix
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
            result += currencyCode || '';
        }
        return result;
      }

      // For larger amounts, return formatted number with currency
      return this.formatAmount(amount) + ' ' + (currencyCode || '');
    },
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
              }
              .voucher-container { 
                border: 2px solid #000; 
                padding: 15px; 
                font-size: 12px; 
                line-height: 1.4; 
              }
              .voucher-header { 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start; 
                margin-bottom: 20px; 
                padding-bottom: 10px; 
                border-bottom: 1px solid #ccc; 
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
              }
              .number-box { 
                border: 2px solid #000; 
                padding: 8px 12px; 
                text-align: center; 
                background: #f9f9f9; 
              }
              .number-label { 
                font-weight: bold; 
                margin-right: 10px; 
              }
              .number-value { 
                font-weight: bold; 
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
              .amount-number { 
                flex: 1; 
                border-bottom: 1px solid #000; 
                margin: 0 10px; 
                padding: 2px 10px; 
                text-align: right; 
                font-weight: bold; 
              }
              .amount-display { 
                font-weight: bold; 
                font-size: 14px; 
                margin: 0 10px; 
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
      this.showPrintDialog = false;
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentVouchervue_type_script_lang_js_ = (paymentVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(601)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentVouchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33ecff44",
  "36e13303"
  
)

/* harmony default export */ var paymentVoucher = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-payment-voucher.js.map