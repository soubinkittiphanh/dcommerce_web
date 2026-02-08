exports.ids = [179];
exports.modules = {

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1364);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d0d8194e", content, true, context)
};

/***/ }),

/***/ 1363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2868d218_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1018);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2868d218_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2868d218_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2868d218_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2868d218_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1364:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-2868d218]{box-sizing:border-box;font-family:\"Noto Sans Lao\",sans-serif}body[data-v-2868d218],html[data-v-2868d218]{height:100%!important;overflow:auto!important}body[data-v-2868d218]{margin:0!important;padding:0!important}#invoice-wrapper[data-v-2868d218]{background:#f0f0f0;bottom:0!important;height:auto!important;left:0!important;max-height:none!important;max-width:none!important;min-height:100vh!important;overflow:visible!important;padding:20px;position:relative!important;right:0!important;top:0!important;transform:none!important;width:100%!important;z-index:auto!important;clip:none!important}.invoice-container[data-v-2868d218]{background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.1);margin:0 auto;max-width:1200px;position:relative;z-index:1}.invoice-container[data-v-2868d218],.invoice-content[data-v-2868d218]{height:auto;overflow:visible!important;width:100%}.invoice-content[data-v-2868d218]{padding:30px}.company-header[data-v-2868d218]{border-bottom:3px solid #246ab2;margin-bottom:30px;padding-bottom:15px}.company-info[data-v-2868d218]{padding-right:20px}.company-name[data-v-2868d218]{color:#246ab2;font-size:24px;font-weight:700;line-height:1.2;margin:0 0 8px}.company-address[data-v-2868d218],.company-contact[data-v-2868d218]{color:#555;font-size:14px;line-height:1.4;margin:4px 0}.company-logo[data-v-2868d218]{border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);max-height:100px;max-width:180px}.invoice-title[data-v-2868d218]{margin:20px 0 30px;text-align:center}.invoice-title h1[data-v-2868d218]{color:#246ab2;font-size:28px;font-weight:700;letter-spacing:1px;margin:0}.invoice-info-section[data-v-2868d218]{margin-bottom:30px}.info-card[data-v-2868d218]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;height:100%;margin-bottom:15px;padding:20px}.info-header[data-v-2868d218]{border-bottom:2px solid #246ab2;color:#246ab2;font-size:16px;font-weight:700;margin:0 0 15px;padding-bottom:8px}.info-content[data-v-2868d218]{line-height:1.6}.info-row[data-v-2868d218]{align-items:flex-start;display:flex;flex-wrap:wrap;margin-bottom:8px}.label[data-v-2868d218]{color:#495057;flex-shrink:0;font-weight:600;margin-bottom:4px;min-width:120px}.value[data-v-2868d218]{color:#212529;flex:1;word-wrap:break-word;min-width:0}.invoice-number[data-v-2868d218]{color:#246ab2;font-size:16px;font-weight:700}.transaction-section[data-v-2868d218]{margin-bottom:30px}.section-header[data-v-2868d218]{border-bottom:2px solid #246ab2;color:#246ab2;font-size:18px;font-weight:700;margin:0 0 15px;padding:10px 0}.table-responsive[data-v-2868d218]{margin-bottom:20px;overflow-x:auto}.transaction-table[data-v-2868d218]{border-collapse:collapse;box-shadow:0 2px 4px rgba(0,0,0,.1);min-width:800px;width:100%}.transaction-table th[data-v-2868d218]{background:linear-gradient(135deg,#246ab2,#1a5490);border:1px solid #1a5490;color:#fff;font-size:11px;font-weight:600;line-height:1.3;padding:12px 8px;text-align:center;white-space:nowrap}.transaction-table td[data-v-2868d218]{border:1px solid #dee2e6;font-size:12px;padding:12px 8px;vertical-align:top}.transaction-row[data-v-2868d218]:hover{background-color:#f8f9fa}.row-alternate[data-v-2868d218]{background-color:#fafbfc}.col-no[data-v-2868d218]{min-width:50px}.col-description[data-v-2868d218]{min-width:200px}.col-qty[data-v-2868d218],.col-unit[data-v-2868d218]{min-width:80px}.col-price[data-v-2868d218]{min-width:100px}.col-discount[data-v-2868d218]{min-width:90px}.col-amount[data-v-2868d218]{min-width:110px}.product-info[data-v-2868d218]{line-height:1.4}.product-name[data-v-2868d218]{color:#212529;font-weight:600;margin-bottom:4px;word-wrap:break-word}.product-id[data-v-2868d218]{color:#6c757d;font-size:10px;margin-bottom:4px}.gift-badge[data-v-2868d218]{background:linear-gradient(135deg,#ff6b35,#f7931e);border-radius:12px;color:#fff;display:inline-block;font-size:10px;font-weight:700;padding:2px 6px}.text-center[data-v-2868d218]{text-align:center}.text-right[data-v-2868d218]{text-align:right}.amount-cell[data-v-2868d218]{color:#28a745;font-weight:600}.empty-state[data-v-2868d218]{color:#6c757d;font-style:italic;padding:40px!important}.empty-icon[data-v-2868d218]{font-size:24px;margin-bottom:8px}.spacer-row td[data-v-2868d218]{border:none!important;padding:8px!important}.summary-row .summary-label[data-v-2868d218]{color:#495057}.summary-row .summary-label[data-v-2868d218],.summary-row .summary-value[data-v-2868d218]{background-color:#f8f9fa;font-weight:600;padding:8px;text-align:right}.discount-amount[data-v-2868d218]{color:#dc3545}.total-row .total-label[data-v-2868d218]{background:linear-gradient(135deg,#246ab2,#1a5490);font-size:14px}.total-row .total-label[data-v-2868d218],.total-row .total-value[data-v-2868d218]{color:#fff;font-weight:700;padding:12px;text-align:right}.total-row .total-value[data-v-2868d218]{background:linear-gradient(135deg,#28a745,#20c997);font-size:16px}.payment-info-section[data-v-2868d218]{margin-bottom:30px}.payment-details[data-v-2868d218]{margin-top:15px}.payment-card[data-v-2868d218]{background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:20px}.payment-card h4[data-v-2868d218]{color:#246ab2;font-size:16px;font-weight:700;margin:0 0 15px}.bank-info[data-v-2868d218]{line-height:1.6}.bank-row[data-v-2868d218]{display:flex;flex-wrap:wrap;margin-bottom:8px}.bank-label[data-v-2868d218]{color:#495057;flex-shrink:0;font-weight:600;min-width:120px}.bank-value[data-v-2868d218]{color:#212529;flex:1;word-wrap:break-word}.account-list[data-v-2868d218]{margin-top:12px}.account-list ul[data-v-2868d218]{margin:8px 0 0;padding-left:20px}.account-item[data-v-2868d218]{color:#495057;font-family:monospace;font-weight:500;margin-bottom:4px;word-wrap:break-word}.footer-section[data-v-2868d218],.terms-section[data-v-2868d218]{margin-bottom:20px}.terms-section h4[data-v-2868d218]{color:#246ab2;font-size:14px;font-weight:700;margin:0 0 10px}.terms-list[data-v-2868d218]{font-size:11px;line-height:1.4;margin:0;padding-left:20px}.terms-list li[data-v-2868d218]{color:#495057;margin-bottom:4px}.signature-section[data-v-2868d218]{display:flex;flex-direction:column;gap:20px}.signature-box[data-v-2868d218]{background:#fff;border:1px solid #dee2e6;border-radius:8px;padding:15px}.signature-header[data-v-2868d218]{color:#246ab2;font-size:12px;font-weight:600;margin-bottom:10px}.signature-space[data-v-2868d218]{border-bottom:1px solid #dee2e6;height:60px;margin-bottom:8px}.signature-footer[data-v-2868d218]{color:#6c757d;font-size:10px;text-align:center}.invoice-footer[data-v-2868d218]{border-top:1px solid #dee2e6;margin-top:30px;padding-top:20px;text-align:center}.footer-text[data-v-2868d218]{color:#246ab2;font-size:14px;font-weight:600}@media (max-width:768px){#body[data-v-2868d218]{padding:10px}.invoice-content[data-v-2868d218]{padding:20px}.company-name[data-v-2868d218]{font-size:20px}.invoice-title h1[data-v-2868d218]{font-size:24px}.info-row[data-v-2868d218]{flex-direction:column}.label[data-v-2868d218]{margin-bottom:2px;min-width:auto}.transaction-table[data-v-2868d218]{font-size:10px;min-width:600px}.transaction-table td[data-v-2868d218],.transaction-table th[data-v-2868d218]{padding:6px 4px}.bank-row[data-v-2868d218]{flex-direction:column}.bank-label[data-v-2868d218]{margin-bottom:4px;min-width:auto}}@media print{#body[data-v-2868d218]{background:#fff;padding:0}.invoice-container[data-v-2868d218]{border-radius:0;box-shadow:none;max-width:none}.invoice-content[data-v-2868d218]{padding:20px}@page{margin:1cm;size:A4}.company-header[data-v-2868d218]{border-bottom:2px solid #246ab2}.transaction-table[data-v-2868d218]{box-shadow:none}.page-break[data-v-2868d218]{page-break-inside:avoid;page-break-after:auto}table[data-v-2868d218]{page-break-inside:auto}tr[data-v-2868d218]{page-break-inside:avoid;page-break-after:auto}thead[data-v-2868d218]{display:table-header-group}tfoot[data-v-2868d218]{display:table-footer-group}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/PDFInvoice/_id/index.vue?vue&type=template&id=2868d218&scoped=true



var _idvue_type_template_id_2868d218_scoped_true_render = function render() {
  var _vm$header$location, _vm$header$user, _vm$header$payment, _vm$header$currency, _vm$header$currency2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "invoice-wrapper"
    }
  }, [_vm._ssrNode("<div class=\"invoice-container\" data-v-2868d218>", "</div>", [_vm._ssrNode("<div class=\"invoice-content\" data-v-2868d218>", "</div>", [_vm._ssrNode("<div class=\"company-header\" data-v-2868d218>", "</div>", [_c(VRow["a" /* default */], {
    attrs: {
      "align": "center",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "company-info",
    attrs: {
      "cols": "8"
    }
  }, [_vm.findAllCompany.length > 0 ? _c('div', {
    staticClass: "company-details"
  }, [_c('h2', {
    staticClass: "company-name"
  }, [_vm._v(_vm._s(_vm.companyDataV1.name))]), _vm._v(" "), _c('p', {
    staticClass: "company-address"
  }, [_vm._v(_vm._s(_vm.companyDataV1.address))]), _vm._v(" "), _c('p', {
    staticClass: "company-contact"
  }, [_vm._v("Tel: " + _vm._s(_vm.companyDataV1.tel || ''))])]) : _vm._e()]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "4"
    }
  }, [_c('img', {
    staticClass: "company-logo",
    attrs: {
      "src": _vm.companyLogo
    }
  })])], 1)], 1), _vm._ssrNode(" <div class=\"invoice-title\" data-v-2868d218><h1 data-v-2868d218>ໃບແຈ້ງໜີ້ / INVOICE</h1></div> "), _vm.header ? _vm._ssrNode("<div class=\"invoice-info-section\" data-v-2868d218>", "</div>", [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-card customer-info"
  }, [_c('h3', {
    staticClass: "info-header"
  }, [_vm._v("ຂໍ້ມູນລູກຄ້າ / Customer Information")]), _vm._v(" "), _c('div', {
    staticClass: "info-content"
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Customer ID:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.header.client.id))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Customer Name:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.header.client.name))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Company:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.header.client.company))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("ເບີໂທ / Phone:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.header.client.telephone))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("ທີ່ຢູ່ / Address:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.header.client.address))])])])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-card invoice-details"
  }, [_c('h3', {
    staticClass: "info-header"
  }, [_vm._v("ລາຍລະອຽດໃບເກັບເງິນ / Invoice Details")]), _vm._v(" "), _c('div', {
    staticClass: "info-content"
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Invoice No:")]), _vm._v(" "), _c('span', {
    staticClass: "value invoice-number"
  }, [_vm._v(_vm._s(_vm.header.id))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.header.bookingDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Location:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(((_vm$header$location = _vm.header.location) === null || _vm$header$location === void 0 ? void 0 : _vm$header$location.name) || 'N/A'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Prepared By:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(((_vm$header$user = _vm.header.user) === null || _vm$header$user === void 0 ? void 0 : _vm$header$user.cus_name) || 'N/A'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Payment Method:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(((_vm$header$payment = _vm.header.payment) === null || _vm$header$payment === void 0 ? void 0 : _vm$header$payment.payment_name) || 'N/A'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Currency:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(((_vm$header$currency = _vm.header.currency) === null || _vm$header$currency === void 0 ? void 0 : _vm$header$currency.code) || 'LAK'))])])])])])], 1)], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.header ? "<div class=\"transaction-section\" data-v-2868d218><h3 class=\"section-header\" data-v-2868d218>ລາຍການສິນຄ້າ / Product Details</h3> <div class=\"table-responsive\" data-v-2868d218><table class=\"transaction-table\" data-v-2868d218><thead data-v-2868d218><tr data-v-2868d218><th class=\"col-no\" data-v-2868d218>ລດ<br data-v-2868d218>No.</th> <th class=\"col-description\" data-v-2868d218>ລາຍລະອຽດ / Description</th> <th class=\"col-qty\" data-v-2868d218>ຈຳນວນ<br data-v-2868d218>Qty</th> <th class=\"col-unit\" data-v-2868d218>ຫົວໜ່ວຍ<br data-v-2868d218>Unit</th> <th class=\"col-price\" data-v-2868d218>ລາຄາ/ຫົວໜ່ວຍ<br data-v-2868d218>Unit Price</th> <th class=\"col-discount\" data-v-2868d218>ສ່ວນຫຼຸດ<br data-v-2868d218>Discount</th> <th class=\"col-amount\" data-v-2868d218>ຈຳນວນເງິນ<br data-v-2868d218>Amount</th></tr></thead> <tbody data-v-2868d218>" + _vm._ssrList(_vm.header.lines, function (line, index) {
    var _line$product, _line$product2, _line$unit;
    return _vm.header.lines && _vm.header.lines.length > 0 ? "<tr" + _vm._ssrClass("transaction-row", {
      'row-alternate': index % 2 === 1
    }) + " data-v-2868d218><td class=\"text-center\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td class=\"product-info\" data-v-2868d218><div class=\"product-name\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.pro_name) || 'Unknown Product')) + "</div> <div class=\"product-id\" data-v-2868d218>" + _vm._ssrEscape("ID: " + _vm._s(((_line$product2 = line.product) === null || _line$product2 === void 0 ? void 0 : _line$product2.pro_id) || line.productId)) + "</div> " + (line.isGift ? "<div class=\"gift-badge\" data-v-2868d218>🎁 ຂອງຂວັນ / Gift</div>" : "<!---->") + "</td> <td class=\"text-center\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.quantity))) + "</td> <td class=\"text-center\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(((_line$unit = line.unit) === null || _line$unit === void 0 ? void 0 : _line$unit.name) || 'ຊີ້ນ')) + "</td> <td class=\"text-right\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.price))) + "</td> <td class=\"text-right\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.discount))) + "</td> <td class=\"text-right amount-cell\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.total))) + "</td></tr>" : "<!---->";
  }) + " " + (!_vm.header.lines || _vm.header.lines.length === 0 ? "<tr data-v-2868d218><td colspan=\"7\" class=\"text-center empty-state\" data-v-2868d218><div class=\"empty-icon\" data-v-2868d218>📦</div> <div data-v-2868d218>ບໍ່ມີຂໍ້ມູນສິນຄ້າ / No product data available</div></td></tr>" : "<!---->") + " <tr class=\"spacer-row\" data-v-2868d218><td colspan=\"7\" data-v-2868d218></td></tr> <tr class=\"summary-row\" data-v-2868d218><td colspan=\"6\" class=\"summary-label\" data-v-2868d218>ລວມຍ່ອຍ / Subtotal:</td> <td class=\"summary-value\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(_vm.header.total + _vm.totalDiscount))) + "</td></tr> <tr class=\"summary-row\" data-v-2868d218><td colspan=\"6\" class=\"summary-label\" data-v-2868d218>ສ່ວນຫຼຸດລວມ / Total Discount:</td> <td class=\"summary-value discount-amount\" data-v-2868d218>" + _vm._ssrEscape("-" + _vm._s(_vm.formatNumber(_vm.totalDiscount))) + "</td></tr> <tr class=\"total-row\" data-v-2868d218><td colspan=\"6\" class=\"total-label\" data-v-2868d218>ລວມທັງໝົດ / TOTAL:</td> <td class=\"total-value\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(_vm.header.total)) + " " + _vm._s(((_vm$header$currency2 = _vm.header.currency) === null || _vm$header$currency2 === void 0 ? void 0 : _vm$header$currency2.code) || 'LAK')) + "</td></tr></tbody></table></div></div>" : "<!---->") + " " + (_vm.companyDataV1.bank ? "<div class=\"payment-info-section\" data-v-2868d218><h3 class=\"section-header\" data-v-2868d218>ຂໍ້ມູນການຊຳລະເງິນ / Payment Information</h3> <div class=\"payment-details\" data-v-2868d218><div class=\"payment-card\" data-v-2868d218><h4 data-v-2868d218>ການໂອນເງິນ / Bank Transfer</h4> <div class=\"bank-info\" data-v-2868d218><div class=\"bank-row\" data-v-2868d218><span class=\"bank-label\" data-v-2868d218>Bank Name:</span> <span class=\"bank-value\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(_vm.companyDataV1.bank)) + "</span></div> <div class=\"bank-row\" data-v-2868d218><span class=\"bank-label\" data-v-2868d218>Account Name:</span> <span class=\"bank-value\" data-v-2868d218>" + _vm._ssrEscape(_vm._s(_vm.companyDataV1.accountName)) + "</span></div> " + (_vm.companyDataV1.accounts ? "<div class=\"account-list\" data-v-2868d218><div class=\"bank-label\" data-v-2868d218>Account Numbers:</div> <ul data-v-2868d218>" + _vm._ssrList((_vm.companyDataV1.accounts || '').split('|').filter(a => a), function (account, index) {
    return "<li class=\"account-item\" data-v-2868d218>" + _vm._ssrEscape("\n                    " + _vm._s(account) + "\n                  ") + "</li>";
  }) + "</ul></div>" : "<!---->") + "</div></div></div></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"footer-section\" data-v-2868d218>", "</div>", [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "terms-section"
  }, [_c('h4', [_vm._v("ເງື່ອນໄຂ / Terms & Conditions")]), _vm._v(" "), _c('ul', {
    staticClass: "terms-list"
  }, [_c('li', [_vm._v("ໃບແຈ້ງໜີ້ນີ້ມີໄວຍາວະ 30 ມື້")]), _vm._v(" "), _c('li', [_vm._v("This quotation is valid for 30 days")]), _vm._v(" "), _c('li', [_vm._v("ການສົ່ງສິນຄ້າໃນໄລຍະ 15 ມື້ຫຼັງຈາກການຢືນຢັນ")]), _vm._v(" "), _c('li', [_vm._v("Delivery within 15 days after order confirmation")])])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "signature-section"
  }, [_c('div', {
    staticClass: "signature-box customer-signature"
  }, [_c('div', {
    staticClass: "signature-header"
  }, [_vm._v("ລາຍເຊັນລູກຄ້າ / Customer Signature")]), _vm._v(" "), _c('div', {
    staticClass: "signature-space"
  }), _vm._v(" "), _c('div', {
    staticClass: "signature-footer"
  }, [_vm._v("Name/Date/Company Stamp")])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box authorized-signature"
  }, [_c('div', {
    staticClass: "signature-header"
  }, [_vm._v("ລາຍເຊັນຜູ້ອະນຸມັດ / Authorized By")]), _vm._v(" "), _c('div', {
    staticClass: "signature-space"
  }), _vm._v(" "), _c('div', {
    staticClass: "signature-footer"
  }, [_vm._v("Name/Date/Position")])])])])], 1)], 1), _vm._ssrNode(" <div class=\"invoice-footer\" data-v-2868d218><div class=\"footer-text\" data-v-2868d218>\n          ຂອບໃຈທີ່ເລືອກໃຊ້ບໍລິການຂອງພວກເຮົາ / Thank you for your business\n        </div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/PDFInvoice/_id/index.vue?vue&type=template&id=2868d218&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/PDFInvoice/_id/index.vue?vue&type=script&lang=js



/* harmony default export */ var _idvue_type_script_lang_js = ({
  name: 'EnhancedInvoice',
  layout: 'login',
  data() {
    return {
      id: null,
      header: null
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['cartOfProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findAllProduct', 'findAllCompany']),
    totalDiscount() {
      if (!this.header || !this.header.lines) return 0;
      let totalDiscount = 0;
      for (const line of this.header.lines) {
        totalDiscount += line.discount || 0;
      }
      totalDiscount += this.header.discount || 0;
      return totalDiscount;
    },
    companyData() {
      const company = Object(api["b" /* mainCompanyInfo */])();
      console.log('Company info:', company);
      return company;
    },
    companyDataV1() {
      let comV1 = Object(api["c" /* mainCompanyInfoV1 */])(this.$store);
      console.info('Company data fetch from api V1:', comV1);
      return comV1;
    },
    companyLogo() {
      const company = this.companyData;

      // 1. Try API logo first (highest priority)
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || '';
        const logoUrl = `${baseUrl}/${company.apiData.profile_image_path}`;
        console.log('Using API logo:', logoUrl);
        return logoUrl;
      }

      // 2. Try static logo from company data
      if (company.ticketLogo) {
        try {
          const staticLogo = __webpack_require__(201)(`./${company.ticketLogo}`);
          console.log('Using static logo:', company.ticketLogo);
          return staticLogo;
        } catch (error) {
          console.warn('Static logo not found:', company.ticketLogo, error);
        }
      }

      // 3. Try dcLogo fallback
      if (company.dcLogo) {
        try {
          const fallbackLogo = __webpack_require__(201)(`./${company.dcLogo}`);
          console.log('Using dcLogo fallback:', company.dcLogo);
          return fallbackLogo;
        } catch (error) {
          console.warn('dcLogo not found:', company.dcLogo, error);
        }
      }

      // 4. Final fallback
      console.log('Using final fallback logo');
      return '/static/images/default-logo.png';
    }
  },
  async mounted() {
    await this.initiateDataCompany(this.$axios);
  },
  async created() {
    await this.initiateDataCompany(this.$axios);
    this.id = this.$route.params.id;
    if (this.id) {
      try {
        const response = await this.$axios.get(`api/sale/find/${this.id}`);
        console.log('Sale data loaded:', response.data);
        this.header = response.data;
      } catch (error) {
        console.error('Error loading sale data:', error);
        this.message = error;
      }
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['initiateDataCompany', 'setSelectedTerminal', 'setSelectedLocation']),
    formatNumber(val) {
      return Object(common["e" /* getFormatNum */])(val);
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
      } catch (error) {
        console.error('Date formatting error:', error);
        return dateString;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/PDFInvoice/_id/index.vue?vue&type=script&lang=js
 /* harmony default export */ var PDFInvoice_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/PDFInvoice/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1363)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PDFInvoice_idvue_type_script_lang_js,
  _idvue_type_template_id_2868d218_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2868d218",
  "bcaff6ac"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map