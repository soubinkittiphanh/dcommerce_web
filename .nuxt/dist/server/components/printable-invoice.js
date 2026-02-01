exports.ids = [135];
exports.modules = {

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1387);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1238a492", content, true, context)
};

/***/ }),

/***/ 1386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintableInvoice_vue_vue_type_style_index_0_id_6931f00b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1033);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintableInvoice_vue_vue_type_style_index_0_id_6931f00b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintableInvoice_vue_vue_type_style_index_0_id_6931f00b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintableInvoice_vue_vue_type_style_index_0_id_6931f00b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintableInvoice_vue_vue_type_style_index_0_id_6931f00b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1387:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6931f00b]{font-family:\"Noto Sans Lao\",sans-serif}.print-invoice-container[data-v-6931f00b]{margin:0 auto;max-width:1000px;padding:20px}.print-header[data-v-6931f00b]{background:#f5f5f5;border-radius:8px;margin-bottom:30px;padding:20px;text-align:center}.invoice-print-content[data-v-6931f00b]{background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.1);padding:30px}.company-section[data-v-6931f00b]{align-items:flex-start;border-bottom:3px solid #246ab2;display:flex;justify-content:space-between;margin-bottom:30px;padding-bottom:20px}.company-info h2[data-v-6931f00b]{color:#246ab2;font-size:24px;font-weight:700;margin:0 0 10px}.company-info p[data-v-6931f00b]{color:#555;margin:5px 0}.company-logo[data-v-6931f00b]{border-radius:8px;max-height:80px;max-width:150px}.invoice-header[data-v-6931f00b]{margin:30px 0;text-align:center}.invoice-header h1[data-v-6931f00b]{color:#246ab2;font-size:32px;font-weight:700;margin:0}.info-section[data-v-6931f00b]{display:flex;gap:40px;margin-bottom:30px}.customer-info[data-v-6931f00b],.invoice-info[data-v-6931f00b]{background:#f8f9fa;border-radius:8px;flex:1;padding:20px}.customer-info h3[data-v-6931f00b],.invoice-info h3[data-v-6931f00b]{border-bottom:2px solid #246ab2;color:#246ab2;font-size:16px;font-weight:700;margin:0 0 15px;padding-bottom:5px}.customer-info p[data-v-6931f00b],.invoice-info p[data-v-6931f00b]{line-height:1.5;margin:8px 0}.products-section[data-v-6931f00b]{margin-bottom:30px}.products-section h3[data-v-6931f00b]{border-bottom:2px solid #246ab2;color:#246ab2;font-size:18px;font-weight:700;margin-bottom:15px;padding-bottom:8px}.products-table[data-v-6931f00b]{border-collapse:collapse;margin-bottom:20px;width:100%}.products-table th[data-v-6931f00b]{background:#246ab2;border:1px solid #246ab2;color:#fff;font-weight:700;padding:12px 8px;text-align:center}.products-table td[data-v-6931f00b]{border:1px solid #ddd;padding:10px 8px;vertical-align:top}.products-table tr[data-v-6931f00b]:nth-child(2n){background:#f9f9f9}.product-id[data-v-6931f00b]{color:#666}.gift-label[data-v-6931f00b],.product-id[data-v-6931f00b]{font-size:12px;margin-top:4px}.gift-label[data-v-6931f00b]{color:#ff6b35;font-weight:700}.summary-section[data-v-6931f00b]{background:#f8f9fa;border-radius:8px;margin-left:auto;padding:15px;width:300px}.summary-row[data-v-6931f00b]{border-bottom:1px solid #ddd;padding:8px 0}.summary-row[data-v-6931f00b],.total-row[data-v-6931f00b]{display:flex;justify-content:space-between}.total-row[data-v-6931f00b]{border-top:2px solid #246ab2;color:#246ab2;font-size:18px;margin-top:10px;padding:12px 0}.payment-section[data-v-6931f00b]{background:#f8f9fa;border-radius:8px;margin-bottom:30px;padding:20px}.payment-section h3[data-v-6931f00b]{color:#246ab2;font-weight:700;margin-bottom:15px}.payment-section ul[data-v-6931f00b]{margin:10px 0 0 20px}.footer-section[data-v-6931f00b]{display:flex;gap:40px;margin-bottom:30px}.terms[data-v-6931f00b]{flex:1}.terms h4[data-v-6931f00b]{color:#246ab2;margin-bottom:10px}.terms ul[data-v-6931f00b]{margin:0;padding-left:20px}.terms li[data-v-6931f00b]{font-size:12px;margin:5px 0}.signatures[data-v-6931f00b]{display:flex;flex:1;flex-direction:column;gap:30px}.signature-box[data-v-6931f00b]{border:1px solid #ddd;border-radius:8px;padding:15px;text-align:center}.signature-line[data-v-6931f00b]{border-bottom:1px solid #000;height:50px;margin:15px 0}.signature-box p[data-v-6931f00b]{font-size:12px;margin:5px 0}.thank-you[data-v-6931f00b]{border-top:1px solid #ddd;color:#246ab2;font-weight:700;margin-top:30px;padding-top:20px;text-align:center}@media print{.print-header[data-v-6931f00b]{display:none!important}.invoice-print-content[data-v-6931f00b]{box-shadow:none;margin:0;padding:0}.print-invoice-container[data-v-6931f00b]{max-width:none;padding:0}@page{margin:1cm;size:A4}.products-table[data-v-6931f00b]{page-break-inside:auto}.products-table tr[data-v-6931f00b]{page-break-inside:avoid}}@media (max-width:768px){.company-section[data-v-6931f00b]{flex-direction:column;text-align:center}.footer-section[data-v-6931f00b],.info-section[data-v-6931f00b]{flex-direction:column;gap:20px}.products-table[data-v-6931f00b]{font-size:12px}.products-table td[data-v-6931f00b],.products-table th[data-v-6931f00b]{padding:6px 4px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PrintableInvoice.vue?vue&type=template&id=6931f00b&scoped=true



var PrintableInvoicevue_type_template_id_6931f00b_scoped_true_render = function render() {
  var _vm$header$location, _vm$header$user, _vm$header$payment, _vm$header$currency, _vm$header$currency2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "print-invoice-container"
  }, [!_vm.isPrintMode ? _vm._ssrNode("<div class=\"print-header\" data-v-6931f00b>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "large": "",
      "loading": _vm.isLoading
    },
    on: {
      "click": _vm.printInvoice
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n      Print Invoice\n    ")], 1), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-3",
    attrs: {
      "color": "secondary",
      "large": "",
      "outlined": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n      Close\n    ")], 1)], 2) : _vm._e(), _vm._ssrNode(" <div" + _vm._ssrClass("invoice-print-content", {
    'print-mode': _vm.isPrintMode
  }) + " data-v-6931f00b><div class=\"company-section\" data-v-6931f00b><div class=\"company-info\" data-v-6931f00b>" + (_vm.companyDataV1.name ? "<h2 data-v-6931f00b>" + _vm._ssrEscape(_vm._s(_vm.companyDataV1.name)) + "</h2>" : "<!---->") + " " + (_vm.companyDataV1.address ? "<p data-v-6931f00b>" + _vm._ssrEscape(_vm._s(_vm.companyDataV1.address)) + "</p>" : "<!---->") + " " + (_vm.companyDataV1.tel ? "<p data-v-6931f00b>" + _vm._ssrEscape("Tel: " + _vm._s(_vm.companyDataV1.tel)) + "</p>" : "<!---->") + "</div> <div class=\"logo-section\" data-v-6931f00b>" + (_vm.companyLogo ? "<img" + _vm._ssrAttr("src", _vm.companyLogo) + " alt=\"Company Logo\" class=\"company-logo\" data-v-6931f00b>" : "<!---->") + "</div></div> <div class=\"invoice-header\" data-v-6931f00b><h1 data-v-6931f00b>ໃບແຈ້ງໜີ້ / INVOICE</h1></div> " + (_vm.header ? "<div class=\"info-section\" data-v-6931f00b><div class=\"customer-info\" data-v-6931f00b><h3 data-v-6931f00b>ຂໍ້ມູນລູກຄ້າ / Customer Information</h3> <p data-v-6931f00b><strong data-v-6931f00b>Customer ID:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.header.client.id)) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Name:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.header.client.name)) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Company:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.header.client.company)) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Phone:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.header.client.telephone)) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Address:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.header.client.address)) + "</p></div> <div class=\"invoice-info\" data-v-6931f00b><h3 data-v-6931f00b>ລາຍລະອຽດໃບເກັບເງິນ / Invoice Details</h3> <p data-v-6931f00b><strong data-v-6931f00b>Invoice No:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.header.id)) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Date:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formatDate(_vm.header.bookingDate))) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Location:</strong>" + _vm._ssrEscape(" " + _vm._s(((_vm$header$location = _vm.header.location) === null || _vm$header$location === void 0 ? void 0 : _vm$header$location.name) || 'N/A')) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Prepared By:</strong>" + _vm._ssrEscape(" " + _vm._s(((_vm$header$user = _vm.header.user) === null || _vm$header$user === void 0 ? void 0 : _vm$header$user.cus_name) || 'N/A')) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Payment Method:</strong>" + _vm._ssrEscape(" " + _vm._s(((_vm$header$payment = _vm.header.payment) === null || _vm$header$payment === void 0 ? void 0 : _vm$header$payment.payment_name) || 'N/A')) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Currency:</strong>" + _vm._ssrEscape(" " + _vm._s(((_vm$header$currency = _vm.header.currency) === null || _vm$header$currency === void 0 ? void 0 : _vm$header$currency.code) || 'LAK')) + "</p></div></div>" : "<!---->") + " " + (_vm.header && _vm.header.lines ? "<div class=\"products-section\" data-v-6931f00b><h3 data-v-6931f00b>ລາຍການສິນຄ້າ / Product Details</h3> <table class=\"products-table\" data-v-6931f00b><thead data-v-6931f00b><tr data-v-6931f00b><th data-v-6931f00b>ລດ / No.</th> <th data-v-6931f00b>ລາຍລະອຽດ / Description</th> <th data-v-6931f00b>ຈຳນວນ / Qty</th> <th data-v-6931f00b>ຫົວໜ່ວຍ / Unit</th> <th data-v-6931f00b>ລາຄາ / Unit Price</th> <th data-v-6931f00b>ສ່ວນຫຼຸດ / Discount</th> <th data-v-6931f00b>ຈຳນວນເງິນ / Amount</th></tr></thead> <tbody data-v-6931f00b>" + _vm._ssrList(_vm.header.lines, function (line, index) {
    var _line$product, _line$product2, _line$unit;
    return "<tr data-v-6931f00b><td data-v-6931f00b>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-6931f00b><div data-v-6931f00b><strong data-v-6931f00b>" + _vm._ssrEscape(_vm._s(((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.pro_name) || 'Unknown Product')) + "</strong></div> <div class=\"product-id\" data-v-6931f00b>" + _vm._ssrEscape("ID: " + _vm._s(((_line$product2 = line.product) === null || _line$product2 === void 0 ? void 0 : _line$product2.pro_id) || line.productId)) + "</div> " + (line.isGift ? "<div class=\"gift-label\" data-v-6931f00b>🎁 ຂອງຂວັນ / Gift</div>" : "<!---->") + "</td> <td data-v-6931f00b>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.quantity))) + "</td> <td data-v-6931f00b>" + _vm._ssrEscape(_vm._s(((_line$unit = line.unit) === null || _line$unit === void 0 ? void 0 : _line$unit.name) || 'ຊີ້ນ')) + "</td> <td data-v-6931f00b>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.price))) + "</td> <td data-v-6931f00b>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.discount))) + "</td> <td data-v-6931f00b><strong data-v-6931f00b>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(line.total))) + "</strong></td></tr>";
  }) + "</tbody></table> <div class=\"summary-section\" data-v-6931f00b><div class=\"summary-row\" data-v-6931f00b><span data-v-6931f00b>ລວມຍ່ອຍ / Subtotal:</span> <span data-v-6931f00b>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(_vm.header.total + _vm.totalDiscount))) + "</span></div> <div class=\"summary-row\" data-v-6931f00b><span data-v-6931f00b>ສ່ວນຫຼຸດລວມ / Total Discount:</span> <span data-v-6931f00b>" + _vm._ssrEscape("-" + _vm._s(_vm.formatNumber(_vm.totalDiscount))) + "</span></div> <div class=\"total-row\" data-v-6931f00b><span data-v-6931f00b><strong data-v-6931f00b>ລວມທັງໝົດ / TOTAL:</strong></span> <span data-v-6931f00b><strong data-v-6931f00b>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(_vm.header.total)) + " " + _vm._s(((_vm$header$currency2 = _vm.header.currency) === null || _vm$header$currency2 === void 0 ? void 0 : _vm$header$currency2.code) || 'LAK')) + "</strong></span></div></div></div>" : "<!---->") + " " + (_vm.companyDataV1.bank ? "<div class=\"payment-section\" data-v-6931f00b><h3 data-v-6931f00b>ຂໍ້ມູນການຊຳລະເງິນ / Payment Information</h3> <p data-v-6931f00b><strong data-v-6931f00b>Bank Name:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.companyDataV1.bank)) + "</p> <p data-v-6931f00b><strong data-v-6931f00b>Account Name:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.companyDataV1.accountName)) + "</p> " + (_vm.companyDataV1.accounts ? "<div data-v-6931f00b><p data-v-6931f00b><strong data-v-6931f00b>Account Numbers:</strong></p> <ul data-v-6931f00b>" + _vm._ssrList((_vm.companyDataV1.accounts || '').split('|').filter(a => a), function (account, index) {
    return "<li data-v-6931f00b>" + _vm._ssrEscape("\n            " + _vm._s(account) + "\n          ") + "</li>";
  }) + "</ul></div>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"footer-section\" data-v-6931f00b><div class=\"terms\" data-v-6931f00b><h4 data-v-6931f00b>ເງື່ອນໄຂ / Terms &amp; Conditions</h4> <ul data-v-6931f00b><li data-v-6931f00b>ໃບແຈ້ງໜີ້ນີ້ມີໄວຍາວະ 30 ມື້</li> <li data-v-6931f00b>This quotation is valid for 30 days</li> <li data-v-6931f00b>ການສົ່ງສິນຄ້າໃນໄລຍະ 15 ມື້ຫຼັງຈາກການຢືນຢັນ</li> <li data-v-6931f00b>Delivery within 15 days after order confirmation</li></ul></div> <div class=\"signatures\" data-v-6931f00b><div class=\"signature-box\" data-v-6931f00b><p data-v-6931f00b><strong data-v-6931f00b>ລາຍເຊັນລູກຄ້າ / Customer Signature</strong></p> <div class=\"signature-line\" data-v-6931f00b></div> <p data-v-6931f00b>Name/Date/Company Stamp</p></div> <div class=\"signature-box\" data-v-6931f00b><p data-v-6931f00b><strong data-v-6931f00b>ລາຍເຊັນຜູ້ອະນຸມັດ / Authorized By</strong></p> <div class=\"signature-line\" data-v-6931f00b></div> <p data-v-6931f00b>Name/Date/Position</p></div></div></div> <div class=\"thank-you\" data-v-6931f00b><p data-v-6931f00b>ຂອບໃຈທີ່ເລືອກໃຊ້ບໍລິການຂອງພວກເຮົາ / Thank you for your business</p></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PrintableInvoice.vue?vue&type=template&id=6931f00b&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PrintableInvoice.vue?vue&type=script&lang=js



/* harmony default export */ var PrintableInvoicevue_type_script_lang_js = ({
  name: 'PrintableInvoice',
  props: {
    invoiceId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      header: null,
      isLoading: false,
      isPrintMode: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllCompany']),
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
      return Object(api["b" /* mainCompanyInfo */])();
    },
    companyDataV1() {
      return Object(api["c" /* mainCompanyInfoV1 */])(this.$store);
    },
    companyLogo() {
      const company = this.companyData;
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || '';
        return `${baseUrl}/${company.apiData.profile_image_path}`;
      }
      if (company.ticketLogo) {
        try {
          return __webpack_require__(145)(`./${company.ticketLogo}`);
        } catch (error) {
          console.warn('Static logo not found:', error);
        }
      }
      return '/static/images/default-logo.png';
    }
  },
  async created() {
    await this.loadInvoiceData();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['initiateDataCompany']),
    async loadInvoiceData() {
      this.isLoading = true;
      try {
        await this.initiateDataCompany(this.$axios);
        const response = await this.$axios.get(`api/sale/find/${this.invoiceId}`);
        this.header = response.data;
        console.log('Invoice data loaded:', response.data);
      } catch (error) {
        console.error('Error loading invoice data:', error);
      } finally {
        this.isLoading = false;
      }
    },
    printInvoice() {
      this.isPrintMode = true;
      this.$nextTick(() => {
        window.print();
        this.isPrintMode = false;
      });
    },
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
        return dateString;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/PrintableInvoice.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PrintableInvoicevue_type_script_lang_js = (PrintableInvoicevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/PrintableInvoice.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1386)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PrintableInvoicevue_type_script_lang_js,
  PrintableInvoicevue_type_template_id_6931f00b_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "6931f00b",
  "63fc4ef9"
  
)

/* harmony default export */ var PrintableInvoice = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=printable-invoice.js.map