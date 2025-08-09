exports.ids = [9];
exports.modules = {

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("28eba64e", content, true, context)
};

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_635eee10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-635eee10]{align-items:center;background-color:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.modal-container[data-v-635eee10]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1000px;overflow:hidden;width:100%}.modal-header[data-v-635eee10]{align-items:center;background:linear-gradient(135deg,#28a745,#20c997);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-header h2[data-v-635eee10]{color:#fff;font-size:24px;font-weight:600;margin:0}.close-btn[data-v-635eee10]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:24px;padding:4px;transition:all .2s}.close-btn[data-v-635eee10]:hover{background-color:hsla(0,0%,100%,.2)}.modal-body[data-v-635eee10]{flex:1;overflow-y:auto;padding:24px}.modal-footer[data-v-635eee10]{background-color:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.info-section[data-v-635eee10]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:32px;overflow:hidden}.info-section[data-v-635eee10]:last-child{margin-bottom:0}.section-header[data-v-635eee10]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:16px 20px}.section-header h3[data-v-635eee10]{align-items:center;color:#333;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header h3 i[data-v-635eee10]{color:#28a745}.item-count[data-v-635eee10]{background-color:#e9ecef;border-radius:12px;color:#666;font-size:12px;padding:4px 8px}.info-grid[data-v-635eee10]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));padding:20px}.info-item[data-v-635eee10]{display:flex;flex-direction:column;gap:4px}.info-item label[data-v-635eee10]{color:#666;font-size:12px;font-weight:500;letter-spacing:.5px;text-transform:uppercase}.info-item span[data-v-635eee10]{color:#333;font-size:14px;font-weight:500}.receipt-number[data-v-635eee10]{color:#28a745!important;font-family:monospace;font-size:16px!important;font-weight:600!important}.invoice-number[data-v-635eee10]{color:#007bff!important;font-family:monospace;font-size:15px!important;font-weight:600!important}.customer-name[data-v-635eee10]{color:#495057!important;font-weight:600!important}.amount-received[data-v-635eee10]{color:#28a745!important;font-size:18px!important;font-weight:700!important}.invoice-amount[data-v-635eee10]{color:#495057!important;font-size:16px!important;font-weight:600!important}.reference-number[data-v-635eee10]{color:#495057!important;font-family:monospace;font-size:14px!important}.payment-method-badge[data-v-635eee10]{border-radius:12px;font-size:12px;font-weight:600;padding:6px 12px;text-transform:uppercase}.payment-method-badge.cash[data-v-635eee10]{background-color:#d4edda;color:#155724}.payment-method-badge.bank_transfer[data-v-635eee10]{background-color:#cce5ff;color:#004085}.payment-method-badge.check[data-v-635eee10]{background-color:#fff3cd;color:#856404}.payment-method-badge.credit_card[data-v-635eee10]{background-color:#f8d7da;color:#721c24}.payment-method-badge.other[data-v-635eee10]{background-color:#e2e3e5;color:#383d41}.status-badge[data-v-635eee10]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.draft[data-v-635eee10]{background-color:#f8f9fa;color:#6c757d}.status-badge.sent[data-v-635eee10]{background-color:#d1ecf1;color:#0c5460}.status-badge.paid[data-v-635eee10]{background-color:#d4edda;color:#155724}.status-badge.overdue[data-v-635eee10]{background-color:#f8d7da;color:#721c24}.status-badge.cancelled[data-v-635eee10]{background-color:#e2e3e5;color:#383d41}.payment-summary[data-v-635eee10]{padding:20px}.summary-row[data-v-635eee10]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:12px 0}.summary-row[data-v-635eee10]:last-child{border-bottom:none}.summary-row.subtotal[data-v-635eee10]{border-top:2px solid #28a745;font-weight:600;margin-top:8px;padding-top:16px}.summary-row label[data-v-635eee10]{color:#495057;font-size:14px;font-weight:500}.summary-row .amount[data-v-635eee10]{font-family:monospace;font-size:16px;font-weight:600}.amount.invoice-total[data-v-635eee10]{color:#495057}.amount.current-payment[data-v-635eee10]{color:#28a745}.amount.total-received[data-v-635eee10]{color:#007bff}.amount.remaining[data-v-635eee10]{color:#dc3545;font-size:18px}.amount.remaining.fully-paid[data-v-635eee10]{color:#28a745}.paid-status[data-v-635eee10]{align-items:center;background:#d4edda;border-radius:6px;color:#155724;display:flex;font-weight:600;gap:8px;margin-top:16px;padding:12px 16px}.paid-status i[data-v-635eee10]{font-size:18px}.notes-content[data-v-635eee10]{background-color:#f8f9fa;border-radius:4px;color:#495057;font-size:14px;line-height:1.6;margin:20px;padding:20px}.table-container[data-v-635eee10]{overflow-x:auto}.data-table[data-v-635eee10]{border-collapse:collapse;width:100%}.data-table td[data-v-635eee10],.data-table th[data-v-635eee10]{border-bottom:1px solid #e9ecef;padding:12px;text-align:left}.data-table th[data-v-635eee10]{background-color:#f8f9fa;color:#495057;font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}.data-table td[data-v-635eee10]{color:#333;font-size:14px}.data-table tbody tr[data-v-635eee10]:hover{background-color:#f8f9fa}.line-number[data-v-635eee10]{color:#666;font-weight:600;text-align:center}.invoice-line-info .line-description[data-v-635eee10]{color:#333;font-weight:600;margin-bottom:4px}.invoice-line-info .line-details[data-v-635eee10]{color:#666;font-size:12px}.allocated-amount[data-v-635eee10]{color:#28a745;font-weight:600;text-align:right}.line-notes[data-v-635eee10]{color:#666;font-style:italic}.allocation-status[data-v-635eee10]{border-radius:8px;font-size:11px;font-weight:600;padding:3px 8px;text-transform:uppercase}.allocation-status.fully-allocated[data-v-635eee10]{background-color:#d4edda;color:#155724}.allocation-status.partially-allocated[data-v-635eee10]{background-color:#fff3cd;color:#856404}.allocation-status.not-allocated[data-v-635eee10]{background-color:#f8d7da;color:#721c24}.allocation-status.unknown[data-v-635eee10]{background-color:#e2e3e5;color:#383d41}.data-table tfoot td[data-v-635eee10]{background-color:#f8f9fa;border-bottom:none;border-top:2px solid #dee2e6;font-weight:600}.allocated-total[data-v-635eee10]{color:#28a745;text-align:right}.btn[data-v-635eee10]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;justify-content:center;min-width:120px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn-primary[data-v-635eee10]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-635eee10]:hover{background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-635eee10]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-635eee10]:hover{background-color:#5a6268;border-color:#5a6268}.btn-success[data-v-635eee10]{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success[data-v-635eee10]:hover{background-color:#218838;border-color:#218838}@media (max-width:768px){.modal-overlay[data-v-635eee10]{padding:10px}.modal-container[data-v-635eee10]{max-height:95vh;max-width:100%}.modal-header[data-v-635eee10]{padding:20px}.modal-header h2[data-v-635eee10]{font-size:20px}.modal-body[data-v-635eee10]{padding:20px}.modal-footer[data-v-635eee10]{flex-direction:column;padding:16px 20px}.info-grid[data-v-635eee10]{gap:12px;grid-template-columns:1fr;padding:16px}.section-header[data-v-635eee10]{align-items:flex-start;flex-direction:column;gap:8px;padding:12px 16px}.payment-summary[data-v-635eee10]{padding:16px}.notes-content[data-v-635eee10]{margin:16px;padding:16px}.data-table[data-v-635eee10]{font-size:12px}.data-table td[data-v-635eee10],.data-table th[data-v-635eee10]{padding:8px}.btn[data-v-635eee10]{width:100%}}@media (max-width:576px){.modal-header[data-v-635eee10]{align-items:flex-start;flex-direction:column;gap:12px}.close-btn[data-v-635eee10]{position:absolute;right:16px;top:16px}.data-table td[data-v-635eee10],.data-table th[data-v-635eee10]{font-size:11px;padding:6px}.invoice-line-info .line-description[data-v-635eee10]{font-size:12px}.invoice-line-info .line-details[data-v-635eee10]{font-size:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/view/index.vue?vue&type=template&id=635eee10&scoped=true&
var render = function render() {
  var _vm$receipt$invoiceHe;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-container\" data-v-635eee10><div class=\"modal-header\" data-v-635eee10><h2 data-v-635eee10>ລາຍລະອຽດການຮັບຊຳລະ</h2> <button class=\"close-btn\" data-v-635eee10><i class=\"fas fa-times\" data-v-635eee10></i></button></div> " + (_vm.receipt ? "<div class=\"modal-body\" data-v-635eee10><div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-receipt\" data-v-635eee10></i>\n            ຂໍ້ມູນການຮັບຊຳລະ\n          </h3> <span" + _vm._ssrClass(null, ['payment-method-badge', _vm.receipt.paymentMethod]) + " data-v-635eee10>" + _vm._ssrEscape("\n            " + _vm._s(_vm.formatPaymentMethod(_vm.receipt.paymentMethod)) + "\n          ") + "</span></div> <div class=\"info-grid\" data-v-635eee10><div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ເລກທີໃບຮັບ:</label> <span class=\"receipt-number\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.receiptNumber)) + "</span></div> <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີບັນທຶກ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.bookingDate))) + "</span></div> <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີຮັບເງິນ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.receivedDate))) + "</span></div> <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຍອດເງິນທີ່ຮັບ:</label> <span class=\"amount-received\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.totalReceivedAmount))) + "</span></div> " + (_vm.receipt.referenceNumber ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ເລກອ້າງອີງ:</label> <span class=\"reference-number\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.referenceNumber)) + "</span></div>" : "<!---->") + "</div></div> " + (_vm.receipt.invoiceHeader ? "<div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-file-invoice\" data-v-635eee10></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </h3></div> <div class=\"info-grid\" data-v-635eee10><div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ເລກທີໃບແຈ້ງໜີ້:</label> <span class=\"invoice-number\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.invoiceHeader.invoiceNumber)) + "</span></div> <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີໃບແຈ້ງໜີ້:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.invoiceHeader.invoiceDate))) + "</span></div> " + (_vm.receipt.invoiceHeader.dueDate ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີຄົບກຳນົດ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.invoiceHeader.dueDate))) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຍອດໃບແຈ້ງໜີ້:</label> <span class=\"invoice-amount\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.invoiceHeader.totalAmount))) + "</span></div> " + (_vm.receipt.invoiceHeader.customer ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ລູກຄ້າ:</label> <span class=\"customer-name\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.invoiceHeader.customer.name)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ສະຖານະໃບແຈ້ງໜີ້:</label> <span" + _vm._ssrClass(null, ['status-badge', _vm.receipt.invoiceHeader.status]) + " data-v-635eee10>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatInvoiceStatus(_vm.receipt.invoiceHeader.status)) + "\n            ") + "</span></div></div></div>" : "<!---->") + " <div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-calculator\" data-v-635eee10></i>\n            ສະຫຼຸບການຮັບຊຳລະ\n          </h3></div> <div class=\"payment-summary\" data-v-635eee10><div class=\"summary-row\" data-v-635eee10><label data-v-635eee10>ຍອດໃບແຈ້ງໜີ້:</label> <span class=\"amount invoice-total\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(((_vm$receipt$invoiceHe = _vm.receipt.invoiceHeader) === null || _vm$receipt$invoiceHe === void 0 ? void 0 : _vm$receipt$invoiceHe.totalAmount) || 0))) + "</span></div> <div class=\"summary-row\" data-v-635eee10><label data-v-635eee10>ຍອດທີ່ຮັບຄັ້ງນີ້:</label> <span class=\"amount current-payment\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.totalReceivedAmount))) + "</span></div> <div class=\"summary-row\" data-v-635eee10><label data-v-635eee10>ລວມທີ່ຮັບແລ້ວທັງໝົດ:</label> <span class=\"amount total-received\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculateTotalReceived()))) + "</span></div> <div class=\"summary-row subtotal\" data-v-635eee10><label data-v-635eee10>ຍອດຄົງເຫຼືອ:</label> <span" + _vm._ssrClass("amount remaining", {
    'fully-paid': _vm.getRemainingBalance() <= 0
  }) + " data-v-635eee10>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatCurrency(_vm.getRemainingBalance())) + "\n            ") + "</span></div> " + (_vm.getRemainingBalance() <= 0 ? "<div class=\"paid-status\" data-v-635eee10><i class=\"fas fa-check-circle\" data-v-635eee10></i> <span data-v-635eee10>ຈ່າຍຄົບແລ້ວ</span></div>" : "<!---->") + "</div></div> " + (_vm.receipt.receiveLines && _vm.receipt.receiveLines.length > 0 ? "<div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-list\" data-v-635eee10></i>\n            ລາຍລະອຽດການແບ່ງປັນ\n          </h3> <span class=\"item-count\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.receiveLines.length) + " ລາຍການ") + "</span></div> <div class=\"table-container\" data-v-635eee10><table class=\"data-table\" data-v-635eee10><thead data-v-635eee10><tr data-v-635eee10><th data-v-635eee10>ລຳດັບ</th> <th data-v-635eee10>ລາຍການໃບແຈ້ງໜີ້</th> <th data-v-635eee10>ຍອດແບ່ງປັນ</th> <th data-v-635eee10>ວັນທີແບ່ງປັນ</th> <th data-v-635eee10>ໝາຍເຫດ</th> <th data-v-635eee10>ສະຖານະ</th></tr></thead> <tbody data-v-635eee10>" + _vm._ssrList(_vm.receipt.receiveLines, function (line) {
    return "<tr data-v-635eee10><td class=\"line-number\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(line.lineNumber)) + "</td> <td data-v-635eee10><div class=\"invoice-line-info\" data-v-635eee10><div class=\"line-description\" data-v-635eee10><strong data-v-635eee10>" + _vm._ssrEscape(_vm._s(line.invoiceLine ? line.invoiceLine.description : 'N/A')) + "</strong></div> " + (line.invoiceLine ? "<div class=\"line-details\" data-v-635eee10>" + _vm._ssrEscape("\n                      ຈຳນວນ: " + _vm._s(_vm.formatNumber(line.invoiceLine.quantity)) + " × \n                      " + _vm._s(_vm.formatCurrency(line.invoiceLine.unitPrice)) + " = \n                      " + _vm._s(_vm.formatCurrency(line.invoiceLine.lineTotal)) + "\n                    ") + "</div>" : "<!---->") + "</div></td> <td class=\"allocated-amount\" data-v-635eee10>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(line.allocatedAmount)) + "\n                ") + "</td> <td data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDate(line.allocationDate))) + "</td> <td data-v-635eee10><span class=\"line-notes\" data-v-635eee10>" + _vm._ssrEscape(_vm._s(line.notes || '-')) + "</span></td> <td data-v-635eee10><span" + _vm._ssrClass("allocation-status", _vm.getAllocationStatusClass(line)) + " data-v-635eee10>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.getAllocationStatusText(line)) + "\n                  ") + "</span></td></tr>";
  }) + "</tbody> <tfoot data-v-635eee10><tr class=\"summary-row\" data-v-635eee10><td colspan=\"2\" data-v-635eee10><strong data-v-635eee10>ລວມການແບ່ງປັນ:</strong></td> <td class=\"allocated-total\" data-v-635eee10><strong data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculateTotalAllocations()))) + "</strong></td> <td colspan=\"3\" data-v-635eee10></td></tr></tfoot></table></div></div>" : "<!---->") + " " + (_vm.receipt.notes ? "<div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-comment-alt\" data-v-635eee10></i>\n            ໝາຍເຫດ\n          </h3></div> <div class=\"notes-content\" data-v-635eee10>" + _vm._ssrEscape("\n          " + _vm._s(_vm.receipt.notes) + "\n        ") + "</div></div>" : "<!---->") + " <div class=\"info-section\" data-v-635eee10><div class=\"section-header\" data-v-635eee10><h3 data-v-635eee10><i class=\"fas fa-info-circle\" data-v-635eee10></i>\n            ຂໍ້ມູນລະບົບ\n          </h3></div> <div class=\"info-grid\" data-v-635eee10>" + (_vm.receipt.inputter ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຜູ້ບັນທຶກ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.inputter.username)) + "</span></div>" : "<!---->") + " " + (_vm.receipt.maker ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຜູ້ສ້າງ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.maker.username)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີສ້າງ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.receipt.createdAt))) + "</span></div> " + (_vm.receipt.updateUser ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ຜູ້ແກ້ໄຂຫຼ້າສຸດ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.receipt.updateUser.username)) + "</span></div>" : "<!---->") + " " + (_vm.receipt.updateTimestamp ? "<div class=\"info-item\" data-v-635eee10><label data-v-635eee10>ວັນທີແກ້ໄຂຫຼ້າສຸດ:</label> <span data-v-635eee10>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.receipt.updateTimestamp))) + "</span></div>" : "<!---->") + "</div></div></div>" : "<!---->") + " <div class=\"modal-footer\" data-v-635eee10><button type=\"button\" class=\"btn btn-secondary\" data-v-635eee10><i class=\"fas fa-times\" data-v-635eee10></i>\n        ປິດ\n      </button> <button type=\"button\" class=\"btn btn-success\" data-v-635eee10><i class=\"fas fa-print\" data-v-635eee10></i>\n        ພິມໃບຮັບ\n      </button> <button type=\"button\" class=\"btn btn-primary\" data-v-635eee10><i class=\"fas fa-edit\" data-v-635eee10></i>\n        ແກ້ໄຂ\n      </button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue?vue&type=template&id=635eee10&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'ReceiveHeaderView',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receipt: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    editReceipt() {
      this.$emit('edit', this.receipt);
    },
    printReceipt() {
      // Implement print functionality
      window.print();
    },
    calculateTotalAllocations() {
      if (!this.receipt.receiveLines) return 0;
      return this.receipt.receiveLines.reduce((total, line) => {
        return total + parseFloat(line.allocatedAmount || 0);
      }, 0);
    },
    calculateTotalReceived() {
      // This would typically come from API call to get all receipts for this invoice
      // For now, just return current receipt amount
      return parseFloat(this.receipt.totalReceivedAmount || 0);
    },
    getRemainingBalance() {
      var _this$receipt$invoice;
      const invoiceTotal = parseFloat(((_this$receipt$invoice = this.receipt.invoiceHeader) === null || _this$receipt$invoice === void 0 ? void 0 : _this$receipt$invoice.totalAmount) || 0);
      const totalReceived = this.calculateTotalReceived();
      return invoiceTotal - totalReceived;
    },
    getAllocationStatusClass(line) {
      const invoiceLine = line.invoiceLine;
      if (!invoiceLine) return 'unknown';
      const lineTotal = parseFloat(invoiceLine.lineTotal || 0);
      const allocated = parseFloat(line.allocatedAmount || 0);
      if (allocated >= lineTotal) return 'fully-allocated';
      if (allocated > 0) return 'partially-allocated';
      return 'not-allocated';
    },
    getAllocationStatusText(line) {
      const statusClass = this.getAllocationStatusClass(line);
      const statusTexts = {
        'fully-allocated': 'ແບ່ງປັນຄົບ',
        'partially-allocated': 'ແບ່ງປັນບາງສ່ວນ',
        'not-allocated': 'ຍັງບໍ່ແບ່ງປັນ',
        'unknown': 'ບໍ່ຮູ້ສະຖານະ'
      };
      return statusTexts[statusClass] || statusClass;
    },
    // Utility methods
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatCurrency(amount) {
      if (!amount) return '0.00';
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatNumber(number) {
      if (!number) return '0';
      return parseFloat(number).toLocaleString('en-US');
    },
    formatPaymentMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        check: 'ເຊັກ',
        bank_transfer: 'ໂອນເງິນທະນາຄານ',
        credit_card: 'ບັດເຄຣດິດ',
        other: 'ອື່ນໆ'
      };
      return methods[method] || method;
    },
    formatInvoiceStatus(status) {
      const statusLabels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var receive_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(626)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "635eee10",
  "88681b2a"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-receive-view.js.map