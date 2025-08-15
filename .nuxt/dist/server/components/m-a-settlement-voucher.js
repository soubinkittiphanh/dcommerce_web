exports.ids = [67];
exports.modules = {

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(479);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ed0771a8", content, true, context)
};

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=template&id=b6f84870&scoped=true&
var render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$curre6, _vm$voucherData$minis, _vm$voucherData$proce, _vm$voucherData$proce2, _vm$voucherData$check, _vm$voucherData$curre7, _vm$voucherData$curre8, _vm$voucherData$curre9, _vm$voucherData$curre10, _vm$voucherData$curre11, _vm$voucherData$curre12, _vm$voucherData$proce3, _vm$voucherData$proce4, _vm$voucherData$updat;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.showPrintDialog ? "<div class=\"modal-overlay\" data-v-b6f84870><div class=\"modal-content\" data-v-b6f84870><div class=\"modal-header\" data-v-b6f84870><h3 data-v-b6f84870>ພິມໃບຮັບເງິນ</h3> <button class=\"close-btn\" data-v-b6f84870><i class=\"fas fa-times\" data-v-b6f84870></i></button></div> <div class=\"modal-body\" data-v-b6f84870><div id=\"voucher-print\" class=\"voucher-container\" data-v-b6f84870><div class=\"voucher-header\" data-v-b6f84870><div class=\"company-info\" data-v-b6f84870><div class=\"company-name\" data-v-b6f84870><img" + _vm._ssrAttr("src", __webpack_require__(166)) + " alt=\"Ministry Logo\" class=\"voucher-logo\" data-v-b6f84870></div> <div class=\"company-name\" data-v-b6f84870>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-b6f84870>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div> <div class=\"amount-line\" data-v-b6f84870>.........(000)..........</div></div></div> <div class=\"ministry-voucher-section\" data-v-b6f84870><div class=\"ministry-titles\" data-v-b6f84870><img" + _vm._ssrAttr("src", __webpack_require__(167)) + " alt=\"Ministry Logo\" class=\"voucher-logo\" data-v-b6f84870> <div class=\"voucher-title\" data-v-b6f84870>ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.</div> <div class=\"voucher-title\" data-v-b6f84870>ກົມແຜນການ ແລະ ການເງິນ</div> <div class=\"voucher-title\" data-v-b6f84870>ພະແນກຄຸ້ມຄອງລາຍຮັບ</div></div> <div class=\"voucher-number\" data-v-b6f84870><div class=\"number-box\" data-v-b6f84870><span class=\"number-label\" data-v-b6f84870>No</span> <span class=\"number-value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ວັນທີ </span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatDateLao(_vm.voucherData.settlementDate))) + "</span></div></div></div> <div data-v-b6f84870><div class=\"voucher-title\" data-v-b6f84870>ໃບຮັບເງິນ</div></div> <div class=\"voucher-details\" data-v-b6f84870><div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ອີງຕາມ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRef || '')) + "</span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ສະບັບ ເລກທີ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRefNo || '')) + "</span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ພະແນກຄັງເງິນສົດໄດ້ຮັບເງິນ </span> <label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cash') + " data-v-b6f84870></label> <span class=\"label\" data-v-b6f84870> ສົດ/ </span> <label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cheque') + " data-v-b6f84870></label> <span class=\"label\" data-v-b6f84870> ເຊັກ/ </span> <label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'bank_transfer') + " data-v-b6f84870></label> <span class=\"label\" data-v-b6f84870> ໂອນທະນາຄານ/ </span> <label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-b6f84870></label> <span class=\"label\" data-v-b6f84870> LAK/ </span> <label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-b6f84870></label> <span class=\"label\" data-v-b6f84870> THB/ </span> <label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-b6f84870></label> <span class=\"label\" data-v-b6f84870> USD </span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ຈຳນວນເງິນ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.name) || ((_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.currencyName) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ຂຽນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre6 = _vm.voucherData.currency) === null || _vm$voucherData$curre6 === void 0 ? void 0 : _vm$voucherData$curre6.code))) + "</span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ຈາກທ່ານ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.fromPersonName || '')) + "</span> <span class=\"label\" data-v-b6f84870>ຊື່ງແມ່ນພະນັກງານສັງກັດຢູ່</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$minis = _vm.voucherData.ministry) === null || _vm$voucherData$minis === void 0 ? void 0 : _vm$voucherData$minis.ministryName) || '')) + "</span></div> " + (_vm.voucherData.method === 'bank_transfer' && _vm.voucherData.bankAccount ? "<div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ບັນຊີທະນາຄານ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.bankAccount.bankName)) + "</span> <span class=\"label\" data-v-b6f84870>ເລກບັນຊີ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.bankAccount.accountNumber)) + "</span></div>" : "<!---->") + " " + (_vm.voucherData.method === 'cheque' && _vm.voucherData.chequeNo ? "<div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ເລກເຊັກ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo)) + "</span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-b6f84870><span class=\"dotted-line\" data-v-b6f84870></span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ເນື້ອໃນລາຍຮັບ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.notes || _vm.voucherData.purpose || 'ບໍ່ມີຫມາຍເຫດ')) + "</span></div> " + (_vm.voucherData.moneyAdvance ? "<div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ</span> <span class=\"value\" data-v-b6f84870>" + _vm._ssrEscape("#" + _vm._s(_vm.voucherData.moneyAdvance.id)) + "</span> <span class=\"label\" data-v-b6f84870>ຈຳນວນ</span> <span class=\"value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.moneyAdvance.amount))) + "</span> <span class=\"dotted-line\" data-v-b6f84870></span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-b6f84870><span class=\"dotted-line\" data-v-b6f84870></span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"dotted-line\" data-v-b6f84870></span></div></div> <div class=\"voucher-title\" data-v-b6f84870>\n            ດັ່ງນັ້ນ ຈິ່ງໄດ້ພ້ອມກັນລົງລາຍເຊັນ ຢັ້ງຢືນໄວ້ເປັນຫຫຼັກຖານ\n          </div> <div class=\"signature-section\" data-v-b6f84870><div class=\"signature-box\" data-v-b6f84870><div class=\"signature-title\" data-v-b6f84870>ຫົວໜ້າພະແນກ</div> <div class=\"signature-line\" data-v-b6f84870></div> <div class=\"signature-name\" data-v-b6f84870></div></div> <div class=\"signature-box\" data-v-b6f84870><div class=\"signature-title\" data-v-b6f84870>ຜູ້ຮັບ</div> <div class=\"signature-line\" data-v-b6f84870></div> <div class=\"signature-name\" data-v-b6f84870>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$proce = _vm.voucherData.proceeder) === null || _vm$voucherData$proce === void 0 ? void 0 : _vm$voucherData$proce.cus_name) || ((_vm$voucherData$proce2 = _vm.voucherData.proceeder) === null || _vm$voucherData$proce2 === void 0 ? void 0 : _vm$voucherData$proce2.name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-b6f84870><div class=\"signature-title\" data-v-b6f84870>ຜູ້ມອບ</div> <div class=\"signature-line\" data-v-b6f84870></div> <div class=\"signature-name\" data-v-b6f84870>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.fromPersonName || ((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div></div></div></div> <div class=\"modal-footer\" data-v-b6f84870><button class=\"btn btn-secondary\" data-v-b6f84870><i class=\"fas fa-times\" data-v-b6f84870></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-b6f84870><i class=\"fas fa-print\" data-v-b6f84870></i>\n          ພິມ\n        </button></div></div></div>" : "<!---->") + " <div class=\"print-only\"" + _vm._ssrStyle(null, null, {
    display: false ? undefined : 'none'
  }) + " data-v-b6f84870><div class=\"voucher-container print-version\" data-v-b6f84870><div class=\"voucher-header\" data-v-b6f84870><div class=\"company-info\" data-v-b6f84870><div class=\"company-name\" data-v-b6f84870>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</div> <div class=\"company-name\" data-v-b6f84870>\n            ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n          </div> <div class=\"department\" data-v-b6f84870>ກົມການເງິນ ແລະ ສິນເຊື່ອ</div> <div class=\"sub-department\" data-v-b6f84870>\n            ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ\n          </div> <div class=\"amount-line\" data-v-b6f84870>.........(000)..........</div></div></div> <div class=\"ministry-voucher-section\" data-v-b6f84870><div class=\"ministry-titles\" data-v-b6f84870><div class=\"voucher-title\" data-v-b6f84870>ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.</div> <div class=\"voucher-title\" data-v-b6f84870>ກົມແຜນການ ແລະ ການເງິນ</div> <div class=\"voucher-title\" data-v-b6f84870>ພະແນກຄຸ້ມຄອງລາຍຮັບ</div></div> <div class=\"voucher-number\" data-v-b6f84870><div class=\"number-box\" data-v-b6f84870><span class=\"number-label\" data-v-b6f84870>No</span> <span class=\"number-value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span></div> " + (_vm.voucherData.externalRefNo ? "<div class=\"external-ref-box\" data-v-b6f84870><span class=\"ref-label\" data-v-b6f84870>Ref:</span> <span class=\"ref-value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRefNo)) + "</span></div>" : "<!---->") + "</div></div> <div class=\"voucher-title\" data-v-b6f84870>ໃບຮັບເງິນ</div> <div class=\"voucher-details\" data-v-b6f84870><div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ຈາກທ່ານ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.fromPersonName || 'N/A')) + "</span></div> " + (_vm.voucherData.method === 'cheque' && _vm.voucherData.chequeNo ? "<div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ເລກເຊັກ</span> <span class=\"dotted-line\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo)) + "</span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ເລກທີ</span> <span class=\"value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatVoucherNumber(_vm.voucherData.id))) + "</span> <span class=\"label\" data-v-b6f84870>ວັນທີນີ້</span> <span class=\"value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.bookingDate || _vm.voucherData.createdAt).day)) + "</span> <span class=\"label\" data-v-b6f84870>ເດືອນ</span> <span class=\"value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.bookingDate || _vm.voucherData.createdAt).month)) + "</span> <span class=\"label\" data-v-b6f84870>ປີ</span> <span class=\"value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.voucherData.bookingDate || _vm.voucherData.createdAt).year)) + "</span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span> <div class=\"currency-options\" data-v-b6f84870><label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre7 = _vm.voucherData.currency) === null || _vm$voucherData$curre7 === void 0 ? void 0 : _vm$voucherData$curre7.code) === 'LAK') + " data-v-b6f84870>\n              LAK</label> <label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre8 = _vm.voucherData.currency) === null || _vm$voucherData$curre8 === void 0 ? void 0 : _vm$voucherData$curre8.code) === 'THB') + " data-v-b6f84870>\n              THB</label> <label data-v-b6f84870><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre9 = _vm.voucherData.currency) === null || _vm$voucherData$curre9 === void 0 ? void 0 : _vm$voucherData$curre9.code) === 'USD') + " data-v-b6f84870>\n              USD</label></div></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ຈຳນວນ</span> <span class=\"amount-display\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount))) + "</span> <span class=\"label\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$curre10 = _vm.voucherData.currency) === null || _vm$voucherData$curre10 === void 0 ? void 0 : _vm$voucherData$curre10.name) || ((_vm$voucherData$curre11 = _vm.voucherData.currency) === null || _vm$voucherData$curre11 === void 0 ? void 0 : _vm$voucherData$curre11.currencyName) || 'N/A')) + "</span></div> <div class=\"detail-row\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ຈຳນວນເງິນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre12 = _vm.voucherData.currency) === null || _vm$voucherData$curre12 === void 0 ? void 0 : _vm$voucherData$curre12.code))) + "</span></div> <div class=\"detail-row description\" data-v-b6f84870><span class=\"label\" data-v-b6f84870>ເນື້ອໃນລາຍການ</span> <div class=\"description-content\" data-v-b6f84870>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.notes || _vm.voucherData.purpose || 'ບໍ່ມີຫມາຍເຫດ') + "\n          ") + "</div></div></div> <div class=\"signature-section\" data-v-b6f84870><div class=\"signature-box\" data-v-b6f84870><div class=\"signature-title\" data-v-b6f84870>ຫົວໜ້າພະແນກ</div> <div class=\"signature-line\" data-v-b6f84870></div> <div class=\"signature-name\" data-v-b6f84870></div></div> <div class=\"signature-box\" data-v-b6f84870><div class=\"signature-title\" data-v-b6f84870>ຜູ້ຮັບຄັງເງິນສົດ</div> <div class=\"signature-line\" data-v-b6f84870></div> <div class=\"signature-name\" data-v-b6f84870>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$proce3 = _vm.voucherData.proceeder) === null || _vm$voucherData$proce3 === void 0 ? void 0 : _vm$voucherData$proce3.cus_name) || ((_vm$voucherData$proce4 = _vm.voucherData.proceeder) === null || _vm$voucherData$proce4 === void 0 ? void 0 : _vm$voucherData$proce4.name) || '') + "\n          ") + "</div></div> <div class=\"signature-box\" data-v-b6f84870><div class=\"signature-title\" data-v-b6f84870>ຜູ້ມອບ</div> <div class=\"signature-line\" data-v-b6f84870></div> <div class=\"signature-name\" data-v-b6f84870>" + _vm._ssrEscape("\n            " + _vm._s(_vm.voucherData.fromPersonName || '') + "\n          ") + "</div></div> <div class=\"signature-box\" data-v-b6f84870><div class=\"signature-title\" data-v-b6f84870>ຜູ້ກວດສອບ</div> <div class=\"signature-line\" data-v-b6f84870></div> <div class=\"signature-name\" data-v-b6f84870>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$voucherData$updat = _vm.voucherData.updateUser) === null || _vm$voucherData$updat === void 0 ? void 0 : _vm$voucherData$updat.cus_name) || '') + "\n          ") + "</div></div></div> <div class=\"settlement-footer\" data-v-b6f84870><div class=\"footer-row\" data-v-b6f84870><span class=\"footer-label\" data-v-b6f84870>ວັນທີຊຳລະ:</span> <span class=\"footer-value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatDateLao(_vm.voucherData.bookingDate || _vm.voucherData.settlementDate))) + "</span> <span class=\"footer-label\" data-v-b6f84870>ເວລາ:</span> <span class=\"footer-value\" data-v-b6f84870>" + _vm._ssrEscape(_vm._s(_vm.formatTime(_vm.voucherData.createdAt))) + "</span></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=template&id=b6f84870&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settlementVouchervue_type_script_lang_js_ = ({
  name: 'SettlementVoucherPrintComponent',
  props: {
    voucherData: {
      type: Object,
      default: () => ({
        id: 5,
        amount: 4000000,
        purpose: 'Settlement payment',
        notes: '',
        method: 'cash',
        // ✅ NEW: Default method
        status: 'completed',
        bookingDate: '2025-01-20T00:00:00.000Z',
        settlementDate: '2025-01-20T00:00:00.000Z',
        createdAt: '2025-01-20T15:12:51.000Z',
        updateTimestamp: '2025-01-20T15:12:51.000Z',
        exchangeRate: 1,
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: '',
        proceeder: {
          id: 2,
          cus_id: 1001,
          cus_name: 'CASHIER01',
          name: 'CASHIER01'
        },
        checker: null,
        updateUser: null,
        currency: {
          id: 5,
          code: 'USD',
          name: 'US Dollar',
          currencyName: 'US Dollar',
          rate: 1,
          isActive: true,
          isLocalCCY: false
        },
        bankAccount: null,
        ministry: null,
        chartAccount: null,
        moneyAdvance: null
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
    formatDateLao(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    formatTime(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    },
    formatAmount(amount) {
      if (!amount) return '0';
      return new Intl.NumberFormat('en-US').format(amount);
    },
    formatExchangeRate(rate) {
      if (!rate || rate === 1) return '1.0000';
      return parseFloat(rate).toFixed(4);
    },
    getPaymentMethodText(method) {
      const methodTexts = {
        cash: 'ເງິນສົດ',
        cheque: 'ເຊັກ',
        bank_transfer: 'ໂອນຜ່ານທະນາຄານ',
        deduction: 'ຫັກລົບ'
      };
      return methodTexts[method] || method || 'N/A';
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
            <title>ໃບຮັບເງິນ - Settlement Receipt</title>
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
              .external-ref-box {
                border: 1px solid #666;
                padding: 4px 8px;
                text-align: center;
                background: #f5f5f5;
                font-size: 10px;
              }
              .number-label, .ref-label { 
                font-weight: bold; 
                margin-right: 10px; 
              }
              .number-value { 
                font-weight: bold; 
                color: #d32f2f;
              }
              .ref-value { 
                font-weight: bold; 
                color: #1976d2;
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
              .settlement-footer {
                margin-top: 20px;
                padding-top: 10px;
                border-top: 1px solid #ccc;
                font-size: 10px;
              }
              .footer-row {
                display: flex;
                align-items: center;
                margin-bottom: 5px;
              }
              .footer-label {
                font-weight: 600;
                margin-right: 8px;
              }
              .footer-value {
                margin-right: 20px;
              }
              .footer-spacer {
                flex: 1;
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
// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementVouchervue_type_script_lang_js_ = (settlementVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(478)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementVouchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b6f84870",
  "42cd2c00"
  
)

/* harmony default export */ var settlementVoucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b6f84870_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b6f84870_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b6f84870_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b6f84870_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b6f84870_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".voucher-logo[data-v-b6f84870]{height:auto;max-height:80px;max-width:80px;-o-object-fit:contain;object-fit:contain;width:auto}.modal-overlay[data-v-b6f84870]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-b6f84870]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow-y:auto;width:90%}.modal-header[data-v-b6f84870]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #eee;border-radius:8px 8px 0 0;color:#fff;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-b6f84870]{color:#fff;margin:0}.close-btn[data-v-b6f84870]{background:none;border:none;color:#fff;cursor:pointer;font-size:18px;opacity:.8;transition:opacity .2s}.close-btn[data-v-b6f84870]:hover{opacity:1}.modal-body[data-v-b6f84870]{padding:20px}.modal-footer[data-v-b6f84870]{background:#f8f9fa;border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-b6f84870]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-b6f84870]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-primary[data-v-b6f84870]:hover{background:linear-gradient(135deg,#5a67d8,#6b46c1);transform:translateY(-1px)}.btn-secondary[data-v-b6f84870]{background:#6c757d;color:#fff}.btn-secondary[data-v-b6f84870]:hover{background:#545b62;transform:translateY(-1px)}.voucher-container[data-v-b6f84870]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;line-height:1.4;margin:0 auto;max-width:700px;padding:20px;width:100%}.voucher-header[data-v-b6f84870]{border-bottom:1px solid #ccc;padding-bottom:10px}.ministry-voucher-section[data-v-b6f84870],.voucher-header[data-v-b6f84870]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:20px}.ministry-voucher-section[data-v-b6f84870]{padding:10px 0}.ministry-titles[data-v-b6f84870]{flex:1;text-align:left}.ministry-titles .voucher-title[data-v-b6f84870]{font-size:14px;font-weight:400;margin-bottom:5px;text-align:left;-webkit-text-decoration:none;text-decoration:none}.company-info[data-v-b6f84870]{flex:1;text-align:center}.company-name[data-v-b6f84870]{font-size:16px;font-weight:700;margin-bottom:5px}.department[data-v-b6f84870]{font-size:14px;margin-bottom:3px}.sub-department[data-v-b6f84870]{font-size:12px;margin-bottom:10px}.amount-line[data-v-b6f84870]{font-size:12px;letter-spacing:2px}.voucher-number[data-v-b6f84870]{flex:0 0 auto;margin-left:20px;text-align:right}.number-box[data-v-b6f84870]{background:#f9f9f9;border:2px solid #333;margin-bottom:8px;padding:8px 12px;text-align:center}.external-ref-box[data-v-b6f84870]{background:#f5f5f5;border:1px solid #666;font-size:10px;padding:4px 8px;text-align:center}.number-label[data-v-b6f84870],.ref-label[data-v-b6f84870]{font-weight:700;margin-right:10px}.number-value[data-v-b6f84870]{color:#d32f2f;font-weight:700}.ref-value[data-v-b6f84870]{color:#1976d2;font-weight:700}.voucher-title[data-v-b6f84870]{font-size:18px;font-weight:700;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-details[data-v-b6f84870]{margin-bottom:30px}.detail-row[data-v-b6f84870]{align-items:center;display:flex;margin-bottom:12px;min-height:24px}.detail-row.description[data-v-b6f84870]{align-items:flex-start;flex-direction:column}.label[data-v-b6f84870]{font-weight:500;margin-right:10px;white-space:nowrap}.value[data-v-b6f84870]{border-bottom:1px solid #333;font-weight:600;margin-right:20px;min-width:40px;padding:2px 5px;text-align:center}.dotted-line[data-v-b6f84870]{border-bottom:1px dotted #333;flex:1;margin:0 10px;min-height:20px;padding:2px 5px}.currency-options[data-v-b6f84870]{display:flex;gap:20px;margin-left:10px}.currency-options label[data-v-b6f84870]{align-items:center;display:flex;font-weight:400;gap:5px}.amount-display[data-v-b6f84870]{color:#d32f2f;font-size:16px;font-weight:700;margin:0 10px}.description-content[data-v-b6f84870]{background:#fafafa;border:1px solid #333;margin-top:5px;min-height:60px;padding:10px;width:100%}.amount-words[data-v-b6f84870]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:10px;padding:2px 10px}.signature-section[data-v-b6f84870]{display:flex;gap:10px;justify-content:space-between;margin-top:40px}.signature-box[data-v-b6f84870]{flex:1;text-align:center}.signature-title[data-v-b6f84870]{font-size:12px;font-weight:500;margin-bottom:30px}.signature-line[data-v-b6f84870]{border-bottom:1px solid #333;height:1px;margin-top:20px}.signature-name[data-v-b6f84870]{color:#666;font-size:10px;font-weight:400;margin-top:5px}.settlement-footer[data-v-b6f84870]{border-top:1px solid #ccc;color:#666;font-size:11px;margin-top:20px;padding-top:10px}.footer-row[data-v-b6f84870]{align-items:center;display:flex;margin-bottom:5px}.footer-label[data-v-b6f84870]{color:#333;font-weight:600;margin-right:8px}.footer-value[data-v-b6f84870]{color:#333;margin-right:20px}.footer-spacer[data-v-b6f84870]{flex:1}@media print{body *[data-v-b6f84870]{visibility:hidden}.print-only[data-v-b6f84870],.print-only *[data-v-b6f84870]{visibility:visible}.print-only[data-v-b6f84870]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-b6f84870]{border:2px solid #000!important;font-size:12px!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}.ministry-voucher-section[data-v-b6f84870]{align-items:flex-start!important;display:flex!important;justify-content:space-between!important}.external-ref-box[data-v-b6f84870],.footer-row[data-v-b6f84870],.settlement-footer[data-v-b6f84870]{font-size:9px!important}}.print-only[data-v-b6f84870]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-b6f84870]{left:auto;position:static;top:auto}}@media (max-width:768px){.ministry-voucher-section[data-v-b6f84870]{flex-direction:column;gap:16px}.voucher-number[data-v-b6f84870]{align-self:flex-end;margin-left:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=m-a-settlement-voucher.js.map