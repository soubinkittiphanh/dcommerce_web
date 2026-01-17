exports.ids = [18,20];
exports.modules = {

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(411);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/maintain/index.vue?vue&type=template&id=5396ad5b&scoped=true





var maintainvue_type_template_id_5396ad5b_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.visible ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-5396ad5b>", "</div>", [_c('client-only', [_c('ARReceivePrinter', {
    attrs: {
      "visible": _vm.showPrintDialog,
      "receipt-data": _vm.selectedReceiptForPrint,
      "payment-methods": _vm.paymentMethods,
      "currencies": _vm.currencies,
      "transaction-codes": _vm.transactionCodes,
      "gl-accounts": _vm.glAccounts,
      "invoices": _vm.invoices
    },
    on: {
      "close": _vm.closePrintDialog
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"enhanced-dialog\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<div class=\"modal-header primary\" data-v-5396ad5b><h4 class=\"modal-title\" data-v-5396ad5b><i class=\"fas fa-receipt\" data-v-5396ad5b></i>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂການຮັບຊຳລະ' : 'ເພີ່ມການຮັບຊຳລະໃໝ່') + "\n        ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-5396ad5b><i class=\"fas fa-times\" data-v-5396ad5b></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-5396ad5b>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-5396ad5b></div> <p data-v-5396ad5b>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"receipt-form\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<form data-v-5396ad5b>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-5396ad5b><i class=\"fas fa-info-circle\" data-v-5396ad5b></i>\n                ຂໍ້ມູນການຮັບຊຳລະ\n              </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-5396ad5b><label for=\"bookingDate\" class=\"required\" data-v-5396ad5b>ວັນທີບັນທຶກ</label> <input id=\"bookingDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.bookingDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.bookingDate
  }) + " data-v-5396ad5b> " + (_vm.errors.bookingDate ? "<div class=\"invalid-feedback\" data-v-5396ad5b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.bookingDate) + "\n                  ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-5396ad5b><label for=\"receiptNumber\" class=\"required\" data-v-5396ad5b>ເລກທີໃບຮັບ</label> <input id=\"receiptNumber\" type=\"text\" placeholder=\"RCP-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.receiptNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.receiptNumber
  }) + " data-v-5396ad5b> " + (_vm.errors.receiptNumber ? "<div class=\"invalid-feedback\" data-v-5396ad5b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.receiptNumber) + "\n                  ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<label for=\"paymentId\" class=\"required\" data-v-5396ad5b>ວິທີການຊຳລະ</label> "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "id": "paymentId",
      "items": _vm.paymentMethods,
      "item-value": "id",
      "item-text": "payment_name",
      "error": !!_vm.errors.paymentId,
      "error-messages": _vm.errors.paymentId,
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto",
      "placeholder": "ເລືອກວິທີການຊຳລະ"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                          " + _vm._s(item.payment_name) + "\n                        ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                      " + _vm._s(item.payment_name) + "\n                    ")];
      }
    }], null, false, 410206760),
    model: {
      value: _vm.form.paymentId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "paymentId", $$v);
      },
      expression: "form.paymentId"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" data-v-5396ad5b>ສະກຸນເງິນ</label> "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "id": "currencyId",
      "items": _vm.currencies,
      "item-value": "id",
      "item-text": "name",
      "error": !!_vm.errors.currencyId,
      "error-messages": _vm.errors.currencyId,
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto",
      "placeholder": "ເລືອກສະກຸນເງິນ"
    },
    on: {
      "change": _vm.onCurrencyChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                          " + _vm._s(item.name) + " (" + _vm._s(item.code) + ")\n                        ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                      " + _vm._s(item.name) + " (" + _vm._s(item.code) + ")\n                    ")];
      }
    }], null, false, 3557883944),
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-5396ad5b><label for=\"exchangeRate\" data-v-5396ad5b>ອັດຕາແລກປ່ຽນ</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + " class=\"form-control\" data-v-5396ad5b></div> <div class=\"form-group\" data-v-5396ad5b><label for=\"referenceNumber\" data-v-5396ad5b>ເລກອ້າງອີງ</label> <input id=\"referenceNumber\" type=\"text\" placeholder=\"ເລກອ້າງອີງ...\"" + _vm._ssrAttr("value", _vm.form.referenceNumber) + " class=\"form-control\" data-v-5396ad5b></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-5396ad5b><label for=\"receivedDate\" class=\"required\" data-v-5396ad5b>ວັນທີຮັບເງິນ</label> <input id=\"receivedDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.receivedDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.receivedDate
  }) + " data-v-5396ad5b> " + (_vm.errors.receivedDate ? "<div class=\"invalid-feedback\" data-v-5396ad5b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.receivedDate) + "\n                  ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<label for=\"invoiceHeaderId\" data-v-5396ad5b>ໃບແຈ້ງໜີ້ (ທາງເລືອກ)</label> "), _vm._ssrNode("<div class=\"d-flex align-items-start invoice-selector\" data-v-5396ad5b>", "</div>", [_c(VAutocomplete["a" /* default */], {
    staticClass: "flex-grow-1",
    attrs: {
      "id": "invoiceHeaderId",
      "items": _vm.invoices,
      "item-value": "id",
      "item-text": "invoiceNumber",
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "",
      "placeholder": "ເລືອກໃບແຈ້ງໜີ້ (ຖ້າມີ)"
    },
    on: {
      "change": _vm.onInvoiceChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                            " + _vm._s(item.invoiceNumber) + " -\n                            " + _vm._s(item.customer ? item.customer.name : 'N/A') + "\n                          ")]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v("\n                            " + _vm._s(_vm.formatCurrency(item.totalAmount)) + "\n                          ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                        " + _vm._s(item.invoiceNumber) + " -\n                        " + _vm._s(item.customer ? item.customer.name : 'N/A') + "\n                        (" + _vm._s(_vm.formatCurrency(item.totalAmount)) + ")\n                      ")];
      }
    }], null, false, 3598591972),
    model: {
      value: _vm.form.invoiceHeaderId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "invoiceHeaderId", $$v);
      },
      expression: "form.invoiceHeaderId"
    }
  }), _vm._ssrNode(" <button type=\"button\" title=\"ເລືອກໃບແຈ້ງໜີ້\" class=\"btn btn-outline-primary btn-sm ml-2\" style=\"height: 40px; margin-top: 0\" data-v-5396ad5b><i class=\"fas fa-search\" data-v-5396ad5b></i>\n                      ຄົ້ນຫາ\n                    </button>")], 2), _vm._ssrNode(" <small class=\"form-text text-muted mt-2\" data-v-5396ad5b><i class=\"fas fa-info-circle\" data-v-5396ad5b></i>\n                    ເລືອກໃບແຈ້ງໜີ້ເພື່ອໂຫຼດລາຍການອັດຕະໂນມັດ\n                  </small>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-5396ad5b><label for=\"notes\" data-v-5396ad5b>ໝາຍເຫດ</label> <textarea id=\"notes\" rows=\"2\" placeholder=\"ໝາຍເຫດກ່ຽວກັບການຮັບຊຳລະ...\" class=\"form-control textarea-compact\" data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(_vm.form.notes)) + "</textarea></div> " + (_vm.isEdit ? "<div class=\"form-group\" data-v-5396ad5b><label for=\"reason\" class=\"required\" data-v-5396ad5b>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-5396ad5b> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-5396ad5b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.reason) + "\n                  ") + "</div>" : "<!---->") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-section\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<div class=\"section-header\" data-v-5396ad5b><h5 class=\"section-title\" data-v-5396ad5b><i class=\"fas fa-list\" data-v-5396ad5b></i>\n                  ການແບ່ງປັນຊຳລະ\n                  " + (_vm.allocationLines.length > 0 ? "<span class=\"line-count\" data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(_vm.allocationLines.length)) + "</span>" : "<!---->") + "</h5> <div class=\"action-buttons\" data-v-5396ad5b><button type=\"button\" class=\"btn btn-primary btn-sm\" data-v-5396ad5b><i class=\"fas fa-plus\" data-v-5396ad5b></i>\n                    ເພີ່ມລາຍການ\n                  </button> " + (_vm.selectedInvoice && _vm.hasInvoiceLines ? "<div class=\"quick-allocation-actions\" data-v-5396ad5b><button type=\"button\" title=\"ແບ່ງປັນຍອດເຕັມ\" class=\"btn btn-outline-primary btn-xs\" data-v-5396ad5b><i class=\"fas fa-file-invoice-dollar\" data-v-5396ad5b></i>\n                      ຍອດເຕັມ\n                    </button> <button type=\"button\" title=\"ແບ່ງເທົ່າກັນ\" class=\"btn btn-outline-success btn-xs\" data-v-5396ad5b><i class=\"fas fa-equals\" data-v-5396ad5b></i>\n                      ແບ່ງເທົ່າກັນ\n                    </button> <button type=\"button\" title=\"ແບ່ງຕາມອັດຕາສ່ວນ\" class=\"btn btn-outline-info btn-xs\" data-v-5396ad5b><i class=\"fas fa-percentage\" data-v-5396ad5b></i>\n                      ຕາມອັດຕາສ່ວນ\n                    </button> <button type=\"button\" class=\"btn btn-outline-warning btn-xs\" data-v-5396ad5b><i class=\"fas fa-eraser\" data-v-5396ad5b></i>\n                      ລົບລ້າງ\n                    </button></div>" : "<!---->") + "</div></div> "), _vm.allocationLines.length === 0 ? _vm._ssrNode("<div class=\"no-invoice-state\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<div class=\"empty-content\" data-v-5396ad5b><i class=\"fas fa-list\" data-v-5396ad5b></i> <h4 data-v-5396ad5b>ຍັງບໍ່ມີລາຍການແບ່ງປັນ</h4> <p data-v-5396ad5b>\n                    ເລືອກໃບແຈ້ງໜີ້ເພື່ອໂຫຼດລາຍການອັດຕະໂນມັດ ຫຼື\n                    ເພີ່ມລາຍການດ້ວຍຕົນເອງ\n                  </p> <button type=\"button\" class=\"btn btn-primary\" data-v-5396ad5b><i class=\"fas fa-plus-circle\" data-v-5396ad5b></i>\n                    ເພີ່ມລາຍການທຳອິດ\n                  </button></div>")], 2) : _vm._ssrNode("<div class=\"allocation-table-container\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<div class=\"allocation-notice\" data-v-5396ad5b><i class=\"fas fa-info-circle\" data-v-5396ad5b></i> <span data-v-5396ad5b>ໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ (ລາຍການຈາກໃບແຈ້ງໜີ້ ຫຼື\n                    ລາຍການທີ່ເພີ່ມເອງ)</span></div> "), _vm._ssrNode("<div class=\"allocation-table\" data-v-5396ad5b>", "</div>", [_vm._ssrNode("<table class=\"table table-compact\" data-v-5396ad5b>", "</table>", [_vm._ssrNode("<thead data-v-5396ad5b><tr data-v-5396ad5b><th style=\"width: 30px\" data-v-5396ad5b>#</th> <th style=\"width: 200px\" data-v-5396ad5b>ລາຍລະອຽດ *</th> <th data-v-5396ad5b>ຍອດອ້າງອີງ</th> <th data-v-5396ad5b>ຍອດຊຳລະ *</th> <th data-v-5396ad5b>ລະຫັດການເງິນ <span class=\"required\" data-v-5396ad5b>*</span></th> <th style=\"width: 50px\" data-v-5396ad5b>ລຶບ</th></tr></thead> "), _vm._ssrNode("<tbody data-v-5396ad5b>", "</tbody>", _vm._l(_vm.allocationLines, function (allocation, index) {
    return _vm._ssrNode("<tr class=\"allocation-row\" data-v-5396ad5b>", "</tr>", [_vm._ssrNode("<td class=\"line-number\" data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-5396ad5b>" + (allocation.invoiceLine ? "<div class=\"invoice-line-display\" data-v-5396ad5b><div class=\"line-description\" data-v-5396ad5b><strong data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(allocation.invoiceLine.description || 'N/A')) + "</strong></div> <div class=\"line-details\" data-v-5396ad5b>" + _vm._ssrEscape("\n                              ຈຳນວນ:\n                              " + _vm._s(_vm.formatNumber(allocation.invoiceLine.quantity || 0)) + "\n                              ×\n                              " + _vm._s(_vm.formatCurrency(allocation.invoiceLine.unitPrice || 0)) + "\n                              ") + ((allocation.invoiceLine.taxRate || 0) > 0 ? "<span data-v-5396ad5b>" + _vm._ssrEscape("\n                                + ພາສີ " + _vm._s(allocation.invoiceLine.taxRate) + "%\n                              ") + "</span>" : "<!---->") + "</div></div>" : "<div data-v-5396ad5b><input type=\"text\" placeholder=\"ລາຍລະອຽດການແບ່ງປັນ...\"" + _vm._ssrAttr("value", allocation.description) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`allocation_${index}_description`]
    }) + " data-v-5396ad5b> " + (_vm.errors[`allocation_${index}_description`] ? "<div class=\"invalid-feedback\" data-v-5396ad5b>" + _vm._ssrEscape("\n                              " + _vm._s(_vm.errors[`allocation_${index}_description`]) + "\n                            ") + "</div>" : "<!---->") + "</div>") + "</td> <td class=\"invoice-line-total\" data-v-5396ad5b>" + (allocation.invoiceLine ? "<span data-v-5396ad5b>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.formatCurrency(allocation.invoiceLine.lineTotal)) + "\n                          ") + "</span>" : "<span class=\"text-muted\" data-v-5396ad5b>-</span>") + "</td> <td data-v-5396ad5b><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("max", allocation.invoiceLine && allocation.invoiceLine.lineTotal ? allocation.invoiceLine.lineTotal : '') + " placeholder=\"0.00\"" + _vm._ssrAttr("value", allocation.allocatedAmount) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`allocation_${index}_allocatedAmount`]
    }) + " data-v-5396ad5b> " + (_vm.errors[`allocation_${index}_allocatedAmount`] ? "<div class=\"invalid-feedback\" data-v-5396ad5b>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.errors[`allocation_${index}_allocatedAmount`]) + "\n                          ") + "</div>" : "<!---->") + "</td> "), _vm._ssrNode("<td data-v-5396ad5b>", "</td>", [_c(VAutocomplete["a" /* default */], {
      staticClass: "mt-0",
      attrs: {
        "items": _vm.transactionCodes.filter(t => t.type === 'INCOME' && t.isActive),
        "item-value": "id",
        "item-text": "code",
        "label": _vm.loadingTransactionCodes ? 'ກຳລັງໂຫຼດ...' : 'ເລືອກລະຫັດການເງິນ',
        "loading": _vm.loadingTransactionCodes,
        "disabled": _vm.loadingTransactionCodes,
        "error": !allocation.txnId && _vm.errors.settlementLines,
        "dense": "",
        "outlined": "",
        "clearable": "",
        "hide-details": "auto"
      },
      scopedSlots: _vm._u([{
        key: "item",
        fn: function ({
          item
        }) {
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                                  " + _vm._s(item.code) + " - " + _vm._s(item.description) + "\n                                ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                              " + _vm._s(item.code) + " - " + _vm._s(item.description) + "\n                            ")];
        }
      }], null, true),
      model: {
        value: allocation.txnId,
        callback: function ($$v) {
          _vm.$set(allocation, "txnId", $$v);
        },
        expression: "allocation.txnId"
      }
    }), _vm._ssrNode(" " + (!allocation.txnId && _vm.errors.settlementLines ? "<small class=\"text-danger d-block\" data-v-5396ad5b>\n                            ກະລຸນາເລືອກລະຫັດການເງິນ\n                          </small>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm.enableGL ? _vm._ssrNode("<td data-v-5396ad5b>", "</td>", [_c(VAutocomplete["a" /* default */], {
      staticClass: "mt-0",
      attrs: {
        "items": _vm.glAccounts,
        "item-value": "id",
        "item-text": "accountNumber",
        "label": "DR Account",
        "error": !!_vm.errors[`line_${index}_DRglAccountId`],
        "dense": "",
        "outlined": "",
        "clearable": "",
        "hide-details": "auto"
      },
      scopedSlots: _vm._u([{
        key: "item",
        fn: function ({
          item
        }) {
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                                  " + _vm._s(item.accountNumber) + " -\n                                  " + _vm._s(item.accountName) + "\n                                ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                              " + _vm._s(item.accountNumber) + " -\n                              " + _vm._s(item.accountName) + "\n                            ")];
        }
      }], null, true),
      model: {
        value: allocation.DRglAccountId,
        callback: function ($$v) {
          _vm.$set(allocation, "DRglAccountId", $$v);
        },
        expression: "allocation.DRglAccountId"
      }
    })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.enableGL ? _vm._ssrNode("<td data-v-5396ad5b>", "</td>", [_c(VAutocomplete["a" /* default */], {
      staticClass: "mt-0",
      attrs: {
        "items": _vm.glAccounts,
        "item-value": "id",
        "item-text": "accountNumber",
        "label": "CR Account",
        "error": !!_vm.errors[`line_${index}_CRglAccountId`],
        "dense": "",
        "outlined": "",
        "clearable": "",
        "hide-details": "auto"
      },
      scopedSlots: _vm._u([{
        key: "item",
        fn: function ({
          item
        }) {
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                                  " + _vm._s(item.accountNumber) + " -\n                                  " + _vm._s(item.accountName) + "\n                                ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                              " + _vm._s(item.accountNumber) + " -\n                              " + _vm._s(item.accountName) + "\n                            ")];
        }
      }], null, true),
      model: {
        value: allocation.CRglAccountId,
        callback: function ($$v) {
          _vm.$set(allocation, "CRglAccountId", $$v);
        },
        expression: "allocation.CRglAccountId"
      }
    })], 1) : _vm._e(), _vm._ssrNode(" <td data-v-5396ad5b><button type=\"button\" title=\"ລຶບລາຍການ\" class=\"btn btn-xs btn-danger\" data-v-5396ad5b><i class=\"fas fa-trash\" data-v-5396ad5b></i></button></td>")], 2);
  }), 0)], 2)])], 2)], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-5396ad5b><div class=\"totals-compact\" data-v-5396ad5b><div class=\"total-item\" data-v-5396ad5b><span data-v-5396ad5b>ຍອດທີ່ຮັບ:</span> <span class=\"amount received\" data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.form.totalReceivedAmount))) + "</span></div> <div class=\"total-item\" data-v-5396ad5b><span data-v-5396ad5b>ລວມການແບ່ງປັນ:</span> <span class=\"amount allocated\" data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedAllocatedTotal))) + "</span></div> <div class=\"total-item success-balance\" data-v-5396ad5b><span data-v-5396ad5b>ສະຖານະ:</span> <span class=\"amount balance balanced\" data-v-5396ad5b><i class=\"fas fa-check-circle\" data-v-5396ad5b></i>\n                    ສົມດຸນ\n                  </span></div></div> <div class=\"balance-info\" data-v-5396ad5b><i class=\"fas fa-info-circle\" data-v-5396ad5b></i> <span data-v-5396ad5b>ຍອດທີ່ຮັບຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກລວມຍອດການແບ່ງປັນທັງໝົດ</span></div></div>")], 2)])]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-5396ad5b><div class=\"footer-actions\" data-v-5396ad5b><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary btn-compact\" data-v-5396ad5b><i class=\"fas fa-times\" data-v-5396ad5b></i>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary btn-compact\" data-v-5396ad5b>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-5396ad5b></i>" : "<i class=\"fas fa-save\" data-v-5396ad5b></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button> " + (_vm.isEdit ? "<button type=\"button\" title=\"ພິມໃບຮັບເງິນ\" class=\"audit-btn\" data-v-5396ad5b><i class=\"fas fa-print\" data-v-5396ad5b></i> <span class=\"audit-text\" data-v-5396ad5b>ພິມ</span></button>" : "<!---->") + "</div></div>")], 2)], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.showInvoiceBrowser ? "<div class=\"modal-overlay\" data-v-5396ad5b><div class=\"invoice-browser-dialog\" data-v-5396ad5b><div class=\"modal-header\" data-v-5396ad5b><h4 class=\"modal-title\" data-v-5396ad5b><i class=\"fas fa-search\" data-v-5396ad5b></i>\n          ເລືອກໃບແຈ້ງໜີ້\n        </h4> <button type=\"button\" class=\"close-button\" data-v-5396ad5b><i class=\"fas fa-times\" data-v-5396ad5b></i></button></div> <div class=\"modal-body\" data-v-5396ad5b><div class=\"search-section\" data-v-5396ad5b><div class=\"search-input-group\" data-v-5396ad5b><i class=\"fas fa-search search-icon\" data-v-5396ad5b></i> <input type=\"text\" placeholder=\"ຄົ້ນຫາເລກໃບແຈ້ງໜີ້, ຊື່ລູກຄ້າ, ຫຼື ລາຍລະອຽດ...\"" + _vm._ssrAttr("value", _vm.invoiceSearchQuery) + " class=\"form-control search-input\" data-v-5396ad5b></div></div> " + (_vm.invoiceBrowserLoading ? "<div class=\"loading-state\" data-v-5396ad5b><div class=\"spinner\" data-v-5396ad5b></div> <p data-v-5396ad5b>ກຳລັງໂຫຼດໃບແຈ້ງໜີ້...</p></div>" : _vm.searchFilteredInvoices.length > 0 ? "<div class=\"invoice-list\" data-v-5396ad5b><div class=\"invoice-table-container\" data-v-5396ad5b><table class=\"table table-compact\" data-v-5396ad5b><thead data-v-5396ad5b><tr data-v-5396ad5b><th style=\"width: 120px\" data-v-5396ad5b>ເລກໃບແຈ້ງໜີ້</th> <th style=\"width: 180px\" data-v-5396ad5b>ລູກຄ້າ</th> <th style=\"width: 80px\" data-v-5396ad5b>ວັນທີ</th> <th style=\"width: 80px\" data-v-5396ad5b>ຄົບກຳໜົດ</th> <th style=\"width: 90px\" data-v-5396ad5b>ຍອດເງິນ</th> <th style=\"width: 70px\" data-v-5396ad5b>ສະຖານະ</th> <th style=\"width: 70px\" data-v-5396ad5b>ເລືອກ</th></tr></thead> <tbody data-v-5396ad5b>" + _vm._ssrList(_vm.searchFilteredInvoices, function (invoice) {
    return "<tr class=\"invoice-row\" data-v-5396ad5b><td data-v-5396ad5b><strong data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</strong></td> <td data-v-5396ad5b><div class=\"customer-info\" data-v-5396ad5b><div class=\"customer-name\" data-v-5396ad5b>" + _vm._ssrEscape("\n                        " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + "\n                      ") + "</div> " + (invoice.customer && invoice.customer.email ? "<div class=\"customer-email\" data-v-5396ad5b>" + _vm._ssrEscape("\n                        " + _vm._s(invoice.customer.email) + "\n                      ") + "</div>" : "<!---->") + "</div></td> <td data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.invoiceDate))) + "</td> <td data-v-5396ad5b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.dueDate))) + "</td> <td class=\"amount-cell\" data-v-5396ad5b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatCurrency(invoice.totalAmount)) + "\n                  ") + "</td> <td data-v-5396ad5b><span" + _vm._ssrClass("status-badge", `status-${invoice.status}`) + " data-v-5396ad5b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getStatusLabel(invoice.status)) + "\n                    ") + "</span></td> <td data-v-5396ad5b><button type=\"button\"" + _vm._ssrAttr("disabled", invoice.id === _vm.form.invoiceHeaderId) + " class=\"btn btn-primary btn-xs\" data-v-5396ad5b><i class=\"fas fa-check\" data-v-5396ad5b></i>" + _vm._ssrEscape("\n                      " + _vm._s(invoice.id === _vm.form.invoiceHeaderId ? 'ເລືອກແລ້ວ' : 'ເລືອກ') + "\n                    ") + "</button></td></tr>";
  }) + "</tbody></table></div></div>" : "<div class=\"no-results-state\" data-v-5396ad5b><div class=\"empty-content\" data-v-5396ad5b><i class=\"fas fa-file-invoice\" data-v-5396ad5b></i> <h4 data-v-5396ad5b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.invoiceSearchQuery ? 'ບໍ່ພົບໃບແຈ້ງໜີ້' : 'ບໍ່ມີໃບແຈ້ງໜີ້') + "\n            ") + "</h4> <p data-v-5396ad5b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.invoiceSearchQuery ? `ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບ "${_vm.invoiceSearchQuery}"` : 'ບໍ່ມີໃບແຈ້ງໜີ້ທີ່ສາມາດເລືອກໄດ້') + "\n            ") + "</p></div></div>") + "</div> <div class=\"modal-footer\" data-v-5396ad5b><div class=\"footer-info\" data-v-5396ad5b>" + (_vm.searchFilteredInvoices.length > 0 ? "<span class=\"result-count\" data-v-5396ad5b>" + _vm._ssrEscape("\n            ພົບ " + _vm._s(_vm.searchFilteredInvoices.length) + " ໃບແຈ້ງໜີ້\n          ") + "</span>" : "<!---->") + "</div> <div class=\"footer-actions\" data-v-5396ad5b><button type=\"button\" class=\"btn btn-secondary btn-compact\" data-v-5396ad5b><i class=\"fas fa-times\" data-v-5396ad5b></i>\n            ປິດ\n          </button></div></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue?vue&type=template&id=5396ad5b&scoped=true

// EXTERNAL MODULE: ./components/accounting/ar/receive/voucher/index.vue + 4 modules
var voucher = __webpack_require__(740);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/maintain/index.vue?vue&type=script&lang=js

/* harmony default export */ var maintainvue_type_script_lang_js = ({
  name: 'ReceiveHeaderMaintain',
  components: {
    ARReceivePrinter: voucher["default"]
  },
  props: {
    glAccounts: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: false
    },
    receipt: {
      type: Object,
      default: null
    },
    currencies: {
      type: Array,
      default: () => []
    },
    invoices: {
      type: Array,
      default: () => []
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showPrintDialog: false,
      selectedReceiptForPrint: null,
      selectedCurrency: null,
      paymentMethods: [],
      transactionCodes: [],
      loadingTransactionCodes: false,
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      allocationLines: [],
      nextTempId: 1,
      selectedInvoice: null,
      // Invoice Browser
      showInvoiceBrowser: false,
      invoiceBrowserLoading: false,
      filteredInvoices: [],
      invoiceSearchQuery: '',
      form: {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        currencyId: '',
        exchangeRate: 1.0,
        totalReceivedAmount: 0.0,
        paymentId: null,
        referenceNumber: '',
        notes: '',
        inputterId: '',
        reason: ''
      }
    };
  },
  computed: {
    enableGL() {
      const spf = this.getSPF.find(spf => spf.code === 'AC_AR_GL_ENABLE');
      return (spf === null || spf === void 0 ? void 0 : spf.value) === 'Y';
    },
    getSPF() {
      return this.$store.getters.findSPF;
    },
    isEdit() {
      return !!(this.receipt && this.receipt.id);
    },
    user() {
      return this.$auth.user || {};
    },
    calculatedAllocatedTotal() {
      return this.allocationLines.reduce((sum, allocation) => {
        return sum + (parseFloat(allocation.allocatedAmount) || 0);
      }, 0);
    },
    allocationBalance() {
      return 0; // Always 0 since totalReceivedAmount = calculatedAllocatedTotal
    },
    autoCalculatedTotal() {
      return this.calculatedAllocatedTotal;
    },
    availableInvoiceLines() {
      return this.selectedInvoice ? this.selectedInvoice.invoiceLines || [] : [];
    },
    hasInvoiceLines() {
      return this.allocationLines.some(line => line.invoiceLine !== null);
    },
    isFormValid() {
      const hasValidHeader = this.form.receiptNumber && this.form.bookingDate && this.form.receivedDate && this.form.paymentId && (!this.isEdit || this.form.reason);
      const hasValidAllocations = this.allocationLines.length > 0 && this.allocationLines.some(allocation => {
        const hasDescription = allocation.invoiceLine || allocation.description;
        const hasValidAmount = (parseFloat(allocation.allocatedAmount) || 0) > 0;
        const hasDate = allocation.allocationDate;
        return hasDescription && hasValidAmount && hasDate;
      }) && (parseFloat(this.form.totalReceivedAmount) || 0) > 0;
      return hasValidHeader && hasValidAllocations;
    },
    searchFilteredInvoices() {
      if (!this.invoiceSearchQuery) {
        return this.filteredInvoices;
      }
      const query = this.invoiceSearchQuery.toLowerCase();
      return this.filteredInvoices.filter(invoice => invoice.invoiceNumber.toLowerCase().includes(query) || invoice.client && invoice.client.name.toLowerCase().includes(query) || invoice.agency && invoice.agency.agencyName.toLowerCase().includes(query) || invoice.description && invoice.description.toLowerCase().includes(query));
    },
    // NEW: Get allocation summary
    allocationSummary() {
      return this.getAllocationSummary();
    }
  },
  async mounted() {
    await this.loadTransactionCodes();
    await this.loadPaymentMethods();
  },
  watch: {
    visible: {
      handler(newVal) {
        if (newVal) {
          this.initializeDialog();
        } else {
          this.resetDialog();
        }
      },
      immediate: true
    },
    receipt: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    },
    // Auto-update totalReceivedAmount when allocation lines change
    calculatedAllocatedTotal: {
      handler(newTotal) {
        this.form.totalReceivedAmount = newTotal;
      },
      immediate: true
    },
    // Update allocation dates when received date changes
    'form.receivedDate': {
      handler(newDate) {
        if (newDate && this.allocationLines.length > 0) {
          this.allocationLines.forEach(allocation => {
            if (!allocation.allocationDate || allocation.allocationDate === '') {
              allocation.allocationDate = newDate;
            }
          });
        }
      }
    }
  },
  methods: {
    // =====================================================
    // PRINT AND VOUCHER METHODS
    // =====================================================
    closePrintDialog() {
      this.showPrintDialog = false;
      this.selectedReceiptForPrint = null;
    },
    printReceipt() {
      var _this$user, _this$user2;
      console.log('🖨️ Print button clicked');
      if (!this.isEdit) {
        this.showToast('ກະລຸນາບັນທຶກການຮັບຊຳລະກ່ອນພິມ', 'warning');
        return;
      }
      if (this.allocationLines.length === 0) {
        this.showToast('ບໍ່ມີລາຍການສຳລັບພິມ', 'warning');
        return;
      }
      console.log('📝 Preparing receipt data...');
      const receiptData = {
        id: this.form.id,
        receiptNumber: this.form.receiptNumber,
        bookingDate: this.form.bookingDate,
        receivedDate: this.form.receivedDate,
        invoiceHeaderId: this.form.invoiceHeaderId,
        paymentId: this.form.paymentId,
        currencyId: this.form.currencyId,
        exchangeRate: this.form.exchangeRate,
        totalReceivedAmount: this.form.totalReceivedAmount,
        referenceNumber: this.form.referenceNumber || '',
        notes: this.form.notes || '',
        allocationLines: this.allocationLines.map(line => {
          var _line$invoiceLine, _line$invoiceLine2;
          return {
            description: line.description || ((_line$invoiceLine = line.invoiceLine) === null || _line$invoiceLine === void 0 ? void 0 : _line$invoiceLine.description) || '-',
            allocatedAmount: parseFloat(line.allocatedAmount) || 0,
            allocationDate: line.allocationDate,
            quantity: line.quantity || null,
            unitPrice: line.unitPrice || null,
            lineTotal: line.lineTotal || null,
            txnId: line.txnId,
            DRglAccountId: line.DRglAccountId,
            CRglAccountId: line.CRglAccountId,
            notes: line.notes || '',
            isFromInvoice: line.isFromInvoice || false,
            invoiceLineNumber: ((_line$invoiceLine2 = line.invoiceLine) === null || _line$invoiceLine2 === void 0 ? void 0 : _line$invoiceLine2.lineNumber) || null
          };
        }),
        selectedInvoice: this.selectedInvoice,
        inputter: {
          cus_name: ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.cus_name) || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.username) || '-'
        }
      };
      console.log('📊 Receipt data prepared:', receiptData);
      this.selectedReceiptForPrint = receiptData;
      this.$nextTick(() => {
        console.log('🚀 Opening print dialog...');
        this.showPrintDialog = true;
      });
    },
    // =====================================================
    // SEQUENCE AND REFERENCE DATA LOADING
    // =====================================================
    async requestSequence() {
      try {
        const {
          data
        } = await this.$axios.get('/api/ar-receive-headers/sequence');
        if (data.success) {
          var _this$$message;
          this.form.receiptNumber = data.data.invoiceNumber;
          (_this$$message = this.$message) === null || _this$$message === void 0 ? void 0 : _this$$message.success(`Receipt number generated: ${data.data.invoiceNumber}`);
          return data.data.invoiceNumber;
        }
      } catch (error) {
        var _this$$message2;
        console.error('Error getting receipt sequence:', error);
        (_this$$message2 = this.$message) === null || _this$$message2 === void 0 ? void 0 : _this$$message2.error('Failed to generate receipt number');
        throw error;
      }
    },
    async loadPaymentMethods() {
      try {
        const {
          data
        } = await this.$axios.get('/api/paymentMethod/find');
        this.paymentMethods = data || [];
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.paymentMethods = [];
      }
    },
    async loadTransactionCodes() {
      this.loadingTransactionCodes = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/transaction-codes', {
          params: {
            includeInactive: false,
            type: 'INCOME' // Changed to INCOME for AR receive
          }
        });
        this.transactionCodes = data || [];
      } catch (error) {
        var _this$$toast;
        console.error('Error loading transaction codes:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('ໂຫລດລະຫັດການເງິນບໍ່ສຳເລັດ');
        this.transactionCodes = [];
      } finally {
        this.loadingTransactionCodes = false;
      }
    },
    // =====================================================
    // CURRENCY HANDLING
    // =====================================================
    onCurrencyChange() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
        console.info(`Currency structure ${JSON.stringify(this.currencies)}`);
        if (this.selectedCurrency) {
          this.form.exchangeRate = this.selectedCurrency.rate || 1.0;
          console.log('✅ Currency updated:', this.selectedCurrency.code, 'Rate:', this.form.exchangeRate);
        }
      } else {
        this.selectedCurrency = null;
        this.form.exchangeRate = 1.0;
      }
    },
    // =====================================================
    // ENHANCED INVOICE SELECTION AND POPULATION
    // =====================================================
    async updateSelectedInvoice() {
      var _this$selectedInvoice;
      console.info('🔍 updateSelectedInvoice called');
      console.log('📝 Current form.invoiceHeaderId:', this.form.invoiceHeaderId);
      console.log('📋 Available invoices:', this.invoices.length);

      // Clear previous selection
      this.selectedInvoice = null;
      if (!this.form.invoiceHeaderId) {
        console.log('❌ No invoice selected');
        if (!this.isEdit) {
          this.allocationLines = [];
          this.clearInvoiceRelatedFields();
        }
        return;
      }

      // Better ID comparison handling both string and number
      const invoiceId = parseInt(this.form.invoiceHeaderId);
      console.log('🔍 Looking for invoice ID:', invoiceId);

      // Find the selected invoice
      this.selectedInvoice = this.invoices.find(inv => {
        console.log('🔍 Comparing:', inv.id, 'with', invoiceId);
        return inv.id === invoiceId;
      });
      if (!this.selectedInvoice) {
        console.log('❌ Invoice not found in main invoices array, trying to load from API...');
        await this.loadInvoiceById(invoiceId);
      }
      if (!this.selectedInvoice) {
        console.log('❌ Could not find or load selected invoice');
        this.showToast('ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ເລືອກ', 'error');
        return;
      }
      console.log('✅ Selected invoice found:', this.selectedInvoice.invoiceNumber);
      console.log('📄 Invoice details:', {
        id: this.selectedInvoice.id,
        invoiceNumber: this.selectedInvoice.invoiceNumber,
        totalAmount: this.selectedInvoice.totalAmount,
        currencyId: this.selectedInvoice.currencyId,
        agencyId: this.selectedInvoice.agencyId,
        lineCount: ((_this$selectedInvoice = this.selectedInvoice.invoiceLines) === null || _this$selectedInvoice === void 0 ? void 0 : _this$selectedInvoice.length) || 0
      });

      // POPULATE HEADER DETAILS FROM SELECTED INVOICE
      await this.populateHeaderFromInvoice();

      // Check if invoice lines exist and load if needed
      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('🔄 Loading invoice lines...');
        await this.loadSelectedInvoiceLines();
      }

      // CREATE ALLOCATION LINES FROM INVOICE LINES
      if (this.selectedInvoice.invoiceLines && this.selectedInvoice.invoiceLines.length > 0) {
        console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines');
        console.info(`SELECTED INVOICE DETAILS: ${JSON.stringify(this.selectedInvoice)}`);

        // Only auto-create allocation lines for new records
        if (!this.isEdit) {
          this.createAllocationLinesFromInvoice();
        } else {
          console.log('ℹ️ Edit mode - not auto-creating allocation lines');
        }
      } else {
        console.log('❌ No invoice lines available');
        this.showToast('ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການສິນຄ້າ', 'warning');
      }
      console.log('📊 Final allocation lines count:', this.allocationLines.length);
    },
    // NEW METHOD: Populate header details from selected invoice
    async populateHeaderFromInvoice() {
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice to populate header from');
        return;
      }
      console.log('🔄 Populating header details from invoice...');
      try {
        // Set currency from invoice
        if (this.selectedInvoice.currencyId) {
          console.log('💱 Setting currency from invoice:', this.selectedInvoice.currencyId);
          this.form.currencyId = this.selectedInvoice.currencyId;

          // Find and set the selected currency
          this.selectedCurrency = this.currencies.find(c => c.id === this.selectedInvoice.currencyId);
          if (this.selectedCurrency) {
            console.log('✅ Currency found:', this.selectedCurrency.code, 'Rate:', this.selectedCurrency.rate);
            this.form.exchangeRate = this.selectedCurrency.rate || 1.0;
          } else {
            console.log('⚠️ Currency not found in currencies list');
            // Try to use rate from invoice if available
            this.form.exchangeRate = this.selectedInvoice.exchangeRate || 1.0;
          }
        }

        // Set reference number based on invoice number
        if (!this.form.referenceNumber && this.selectedInvoice.invoiceNumber) {
          this.form.referenceNumber = `REF-${this.selectedInvoice.invoiceNumber}`;
        }

        // Set notes with invoice details
        if (!this.form.notes) {
          const agency = this.selectedInvoice.agency;
          const client = this.selectedInvoice.client;
          const customerInfo = agency ? `${agency.agencyName} (${agency.agencyCode})` : client ? `${client.name}` : 'Unknown Customer';
          this.form.notes = `Payment for ${this.selectedInvoice.invoiceNumber} - ${customerInfo}`;
          if (this.selectedInvoice.description) {
            this.form.notes += ` - ${this.selectedInvoice.description}`;
          }
        }
        console.log('✅ Header populated successfully:', {
          currencyId: this.form.currencyId,
          exchangeRate: this.form.exchangeRate,
          referenceNumber: this.form.referenceNumber,
          notes: this.form.notes
        });

        // Trigger currency change event to update related fields
        this.onCurrencyChange();
      } catch (error) {
        console.error('❌ Error populating header from invoice:', error);
        this.showToast('ມີປັນຫາໃນການໂຫຼດຂໍ້ມູນຈາກໃບແຈ້ງໜີ້', 'error');
      }
    },
    // ENHANCED: Better allocation lines creation with full invoice line data
    createAllocationLinesFromInvoice() {
      console.log('🔧 createAllocationLinesFromInvoice called');
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice');
        return;
      }
      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('❌ No invoice lines available');
        this.allocationLines = [];
        return;
      }
      console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines');
      this.allocationLines = this.selectedInvoice.invoiceLines.map((line, index) => {
        const allocation = {
          tempId: this.nextTempId++,
          lineNumber: index + 1,
          invoiceLineId: line.id,
          invoiceLine: line,
          // Store the full line object for display

          // Enhanced line details
          description: line.description || `Line ${line.lineNumber}`,
          quantity: line.quantity || 1,
          unitPrice: line.unitPrice || 0,
          lineTotal: line.lineTotal || 0,
          // Start with the full line amount as suggested allocation
          allocatedAmount: line.lineTotal || 0,
          // GL Account information from invoice line
          DRglAccountId: line.DRglAccountId || null,
          CRglAccountId: line.CRglAccountId || null,
          txnId: line.txnId || null,
          // Tax information
          taxRate: line.taxRate || 0,
          taxAmount: line.taxAmount || 0,
          // Dates
          allocationDate: this.form.receivedDate || new Date().toISOString().split('T')[0],
          // Notes with line details
          notes: `Invoice Line ${line.lineNumber}: ${line.description}${line.quantity > 1 ? ` (${line.quantity} × ${line.unitPrice})` : ''}`,
          // Additional flags
          isManual: false,
          isFromInvoice: true,
          // Store invoice reference for context
          invoiceNumber: this.selectedInvoice.invoiceNumber,
          invoiceId: this.selectedInvoice.id
        };
        console.log(`📝 Created allocation ${index + 1}:`, {
          lineNumber: allocation.lineNumber,
          invoiceLineId: allocation.invoiceLineId,
          description: allocation.description,
          lineTotal: allocation.lineTotal,
          allocatedAmount: allocation.allocatedAmount,
          txnId: allocation.txnId
        });
        return allocation;
      });
      console.log('🎉 Successfully created', this.allocationLines.length, 'allocation lines');
      console.log('💰 Total suggested allocation:', this.calculatedAllocatedTotal);

      // Force reactivity update
      this.$forceUpdate();
    },
    // ENHANCED: Better invoice loading with complete data
    async loadInvoiceById(invoiceId) {
      try {
        console.log('🔄 Loading invoice by ID:', invoiceId);
        const {
          data
        } = await this.$axios.get(`/api/ar-invoices/${invoiceId}`, {
          params: {
            include: ['client', 'agency', 'currency', 'invoiceLines', 'maker', 'updateUser']
          }
        });
        console.log('📥 API response for single invoice:', data);
        if (data.success && data.data) {
          this.selectedInvoice = data.data;
          console.log('✅ Invoice loaded successfully:', this.selectedInvoice.invoiceNumber);
        } else if (data.invoiceNumber) {
          this.selectedInvoice = data;
          console.log('✅ Invoice loaded (alt structure):', this.selectedInvoice.invoiceNumber);
        }

        // Ensure invoice lines are properly structured
        if (this.selectedInvoice && (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0)) {
          console.log('🔄 Invoice lines missing, loading separately...');
          await this.loadSelectedInvoiceLines();
        }
      } catch (error) {
        console.error('❌ Error loading invoice by ID:', error);
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error');
      }
    },
    // ENHANCED: Better invoice lines loading with validation
    async loadSelectedInvoiceLines() {
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice to load lines for');
        return;
      }
      try {
        console.log('🔄 Loading invoice lines for:', this.selectedInvoice.invoiceNumber);
        const {
          data
        } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${this.selectedInvoice.id}`);
        console.log('📥 Invoice lines API response:', data);

        // Handle different possible response structures
        if (data.success && data.data && Array.isArray(data.data)) {
          this.selectedInvoice.invoiceLines = data.data;
          console.log('✅ Invoice lines loaded:', data.data.length);
        } else if (Array.isArray(data)) {
          this.selectedInvoice.invoiceLines = data;
          console.log('✅ Invoice lines loaded (alt structure):', data.length);
        } else {
          console.warn('❓ Unexpected response structure:', data);
          this.selectedInvoice.invoiceLines = [];
        }

        // Log detailed line information
        if (this.selectedInvoice.invoiceLines && this.selectedInvoice.invoiceLines.length > 0) {
          console.log('📄 Invoice lines details:');
          this.selectedInvoice.invoiceLines.forEach((line, index) => {
            console.log(`  Line ${index + 1}:`, {
              id: line.id,
              lineNumber: line.lineNumber,
              description: line.description,
              quantity: line.quantity,
              unitPrice: line.unitPrice,
              lineTotal: line.lineTotal,
              txnId: line.txnId,
              DRglAccountId: line.DRglAccountId,
              CRglAccountId: line.CRglAccountId
            });
          });
        }
      } catch (error) {
        console.error('❌ Error loading invoice lines:', error);
        this.selectedInvoice.invoiceLines = [];
        this.showToast('ມີປັນຫາໃນການໂຫຼດລາຍການໃບແຈ້ງໜີ້', 'error');
      }
    },
    // NEW METHOD: Clear invoice-related fields when no invoice selected
    clearInvoiceRelatedFields() {
      console.log('🧹 Clearing invoice-related fields');
      this.form.referenceNumber = '';
      this.form.notes = '';
      console.log('✅ Invoice-related fields cleared');
    },
    // ENHANCED: Better invoice change handler with error handling
    async onInvoiceChange() {
      console.log('🔄 onInvoiceChange triggered');
      try {
        await this.updateSelectedInvoice();
        this.clearFieldError('invoiceHeaderId');

        // Switch to allocations tab if lines were created
        if (this.allocationLines.length > 0) {
          console.log('🔄 Switching to allocations tab');
          this.$nextTick(() => {
            this.activeTab = 'allocations';
          });
        }
      } catch (error) {
        console.error('❌ Error in onInvoiceChange:', error);
        this.showToast('ມີປັນຫາໃນການປ່ຽນໃບແຈ້ງໜີ້', 'error');
      }
    },
    // =====================================================
    // LINE MANAGEMENT METHODS
    // =====================================================
    addManualLine() {
      const newLine = {
        tempId: this.nextTempId++,
        lineNumber: this.allocationLines.length + 1,
        invoiceLineId: null,
        invoiceLine: null,
        description: '',
        allocatedAmount: 0,
        quantity: null,
        unitPrice: null,
        lineTotal: null,
        DRglAccountId: null,
        CRglAccountId: null,
        txnId: null,
        allocationDate: this.form.receivedDate || new Date().toISOString().split('T')[0],
        notes: '',
        isManual: true,
        isFromInvoice: false
      };
      this.allocationLines.push(newLine);
      console.log('✅ Added manual line:', newLine);
    },
    removeLine(index) {
      if (confirm('ທ່ານຕ້ອງການລຶບລາຍການນີ້ບໍ່?')) {
        this.allocationLines.splice(index, 1);

        // Renumber lines
        this.allocationLines.forEach((line, idx) => {
          line.lineNumber = idx + 1;
        });

        // Clear errors for this line
        this.clearFieldError(`allocation_${index}_description`);
        this.clearFieldError(`allocation_${index}_allocatedAmount`);
        this.clearFieldError(`allocation_${index}_allocationDate`);
        console.log('🗑️ Removed line at index:', index);
      }
    },
    // =====================================================
    // ALLOCATION HELPER METHODS
    // =====================================================
    allocateFullAmount() {
      this.allocateFullAmountFromInvoice();
    },
    allocateFullAmountFromInvoice() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      console.log('💰 Allocating full amounts from invoice lines');
      this.allocationLines.forEach(allocation => {
        if (allocation.invoiceLine && allocation.invoiceLine.lineTotal) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
          allocation.allocatedAmount = lineTotal;
          console.log(`  Line ${allocation.lineNumber}: ${lineTotal}`);
        }
      });
      console.log('✅ Full allocation completed. Total:', this.calculatedAllocatedTotal);
    },
    allocateEqually() {
      if (this.allocationLines.length === 0) return;
      const totalToAllocate = this.selectedInvoice ? parseFloat(this.selectedInvoice.totalAmount) || 0 : this.calculatedAllocatedTotal || 1000; // Default amount if no invoice

      const amountPerLine = totalToAllocate / this.allocationLines.length;
      this.allocationLines.forEach(allocation => {
        allocation.allocatedAmount = amountPerLine.toFixed(2);
      });
    },
    allocateProportionally() {
      this.allocateFullAmountFromInvoice(); // Same as full allocation for AR
    },
    clearAllAllocations() {
      this.allocationLines.forEach(allocation => {
        allocation.allocatedAmount = 0;
      });
    },
    // =====================================================
    // VALIDATION METHODS
    // =====================================================
    getRemainingAmount(allocation) {
      if (!allocation.invoiceLine) return 0;
      const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
      const allocated = parseFloat(allocation.allocatedAmount) || 0;
      return lineTotal - allocated;
    },
    isFullyAllocated(allocation) {
      if (!allocation.invoiceLine) return false;
      return this.getRemainingAmount(allocation) === 0;
    },
    isOverAllocated(allocation) {
      if (!allocation.invoiceLine) return false;
      return this.getRemainingAmount(allocation) < 0;
    },
    validateAllocation(allocation, index) {
      this.validateAllocationAgainstInvoice(allocation, index);
    },
    validateAllocationAgainstInvoice(allocation, index) {
      if (!allocation.invoiceLine) {
        // For manual lines, just ensure amount is positive
        const amount = parseFloat(allocation.allocatedAmount) || 0;
        if (amount <= 0) {
          this.errors[`allocation_${index}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
        } else {
          this.clearFieldError(`allocation_${index}_allocatedAmount`);
        }
        return;
      }

      // For invoice lines, validate against line total
      const amount = parseFloat(allocation.allocatedAmount) || 0;
      const maxAllowed = parseFloat(allocation.invoiceLine.lineTotal) || 0;
      if (amount > maxAllowed) {
        this.errors[`allocation_${index}_allocatedAmount`] = `ຈຳນວນເກີນກວ່າທີ່ເຫຼືອ (ສູງສຸດ: ${this.formatCurrency(maxAllowed)})`;
      } else if (amount <= 0) {
        this.errors[`allocation_${index}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
      } else {
        this.clearFieldError(`allocation_${index}_allocatedAmount`);
      }
    },
    // =====================================================
    // INVOICE BROWSER METHODS
    // =====================================================
    async openInvoiceBrowser() {
      console.log('🔄 Opening invoice browser');
      this.showInvoiceBrowser = true;
      this.invoiceBrowserLoading = true;
      this.invoiceSearchQuery = '';
      try {
        const {
          data
        } = await this.$axios.get('/api/ar-invoices', {
          params: {
            status: ['draft', 'sent'],
            include: ['client', 'agency', 'currency', 'invoiceLines'],
            limit: 100
          }
        });
        console.log('📥 Invoice browser API response:', data);
        if (data.success && data.data && data.data.invoices && Array.isArray(data.data.invoices)) {
          this.filteredInvoices = data.data.invoices;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices for browser');
        } else if (data.success && data.data && Array.isArray(data.data)) {
          this.filteredInvoices = data.data;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (alt structure)');
        } else if (Array.isArray(data)) {
          this.filteredInvoices = data;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (direct array)');
        } else {
          console.warn('❓ Unexpected response structure:', data);
          this.filteredInvoices = [];
        }
      } catch (error) {
        console.error('❌ Error loading invoices for browser:', error);
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error');
        this.filteredInvoices = [];
      } finally {
        this.invoiceBrowserLoading = false;
      }
    },
    async selectInvoiceFromBrowser(invoice) {
      console.log('🎯 Selecting invoice from browser:', invoice.invoiceNumber);
      this.form.invoiceHeaderId = invoice.id;
      const existingIndex = this.invoices.findIndex(inv => inv.id === invoice.id);
      if (existingIndex === -1) {
        console.log('➕ Adding invoice to main array');
        this.invoices.push(invoice);
      } else {
        console.log('🔄 Updating existing invoice in main array');
        this.invoices[existingIndex] = invoice;
      }
      this.closeInvoiceBrowser();
      await this.onInvoiceChange();
      this.clearFieldError('invoiceHeaderId');
    },
    closeInvoiceBrowser() {
      this.showInvoiceBrowser = false;
      this.filteredInvoices = [];
      this.invoiceSearchQuery = '';
    },
    // =====================================================
    // FORM LIFECYCLE METHODS
    // =====================================================
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.receipt) {
        this.form = {
          id: this.receipt.id,
          receiptNumber: this.receipt.receiptNumber,
          bookingDate: this.receipt.bookingDate ? this.receipt.bookingDate.split('T')[0] : '',
          receivedDate: this.receipt.receivedDate ? this.receipt.receivedDate.split('T')[0] : '',
          invoiceHeaderId: this.receipt.invoiceHeaderId,
          totalReceivedAmount: this.receipt.totalReceivedAmount || 0.0,
          paymentId: this.receipt.paymentId || null,
          currencyId: this.receipt.currencyId || null,
          exchangeRate: this.receipt.exchangeRate || 1,
          referenceNumber: this.receipt.referenceNumber || '',
          notes: this.receipt.notes || '',
          inputterId: this.receipt.inputterId || '',
          reason: ''
        };
        await this.loadAllocationLines(this.receipt.id);
        await this.updateSelectedInvoice();
      } else {
        this.resetForm();
        const today = new Date().toISOString().split('T')[0];
        this.form.bookingDate = today;
        this.form.receivedDate = today;
        this.allocationLines = [];
        if (this.user && this.user.id) {
          this.form.inputterId = this.user.id;
        }
        this.requestSequence();
      }
    },
    resetDialog() {
      this.resetForm();
      this.allocationLines = [];
      this.selectedInvoice = null;
      this.selectedReceiptForPrint = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
      this.showInvoiceBrowser = false;
      this.showPrintDialog = false;
      this.filteredInvoices = [];
      this.invoiceSearchQuery = '';
    },
    async loadAllocationLines(receiptId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ar-receive-lines/by-header/${receiptId}`);
        this.allocationLines = data.data || [];
        this.allocationLines.forEach(allocation => {
          if (!allocation.tempId) {
            allocation.tempId = this.nextTempId++;
          }
          if (allocation.allocationDate) {
            allocation.allocationDate = allocation.allocationDate.split('T')[0];
          }
        });
      } catch (error) {
        console.error('Error loading allocation lines:', error);
        this.allocationLines = [];
      }
    },
    // =====================================================
    // VALIDATION AND SUBMISSION
    // =====================================================
    validateForm() {
      this.errors = {};

      // Header validation
      if (!this.form.receiptNumber) {
        this.errors.receiptNumber = 'ກະລຸນາໃສ່ເລກທີໃບຮັບ';
      }
      if (!this.form.bookingDate) {
        this.errors.bookingDate = 'ກະລຸນາໃສ່ວັນທີບັນທຶກ';
      }
      if (!this.form.receivedDate) {
        this.errors.receivedDate = 'ກະລຸນາໃສ່ວັນທີຮັບເງິນ';
      }
      if (!this.form.paymentId) {
        this.errors.paymentId = 'ກະລຸນາເລືອກວິທີຈ່າຍ';
      }

      // Date validation
      if (this.form.bookingDate && this.form.receivedDate) {
        const bookingDate = new Date(this.form.bookingDate);
        const receivedDate = new Date(this.form.receivedDate);
        if (receivedDate < bookingDate) {
          this.errors.receivedDate = 'ວັນທີຮັບເງິນຕ້ອງບໍ່ກ່ອນວັນທີບັນທຶກ';
        }
      }

      // Allocation validation
      if (this.allocationLines.length === 0) {
        this.errors.allocations = 'ກະລຸນາເພີ່ມການແບ່ງປັນຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        let hasValidAllocation = false;
        let totalAllocated = 0;
        for (let i = 0; i < this.allocationLines.length; i++) {
          const allocation = this.allocationLines[i];
          if (!allocation.invoiceLine && !allocation.description) {
            this.errors[`allocation_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດ';
          }
          const allocatedAmount = parseFloat(allocation.allocatedAmount) || 0;
          if (allocatedAmount <= 0) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
          } else {
            hasValidAllocation = true;
            totalAllocated += allocatedAmount;
          }
          if (!allocation.allocationDate) {
            this.errors[`allocation_${i}_allocationDate`] = 'ກະລຸນາໃສ່ວັນທີແບ່ງປັນ';
          }
          if (allocation.invoiceLine && this.isOverAllocated(allocation)) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນເກີນກວ່າທີ່ເຫຼືອ';
          }
        }
        if (!hasValidAllocation) {
          this.errors.allocations = 'ຢ່າງໜ້ອຍຕ້ອງມີ 1 ລາຍການທີ່ມີຍອດແບ່ງປັນ';
        }
        if (totalAllocated <= 0) {
          this.errors.totalReceivedAmount = 'ຍອດລວມການແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
        }
      }
      if (this.isEdit && !this.form.reason) {
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ';
      }
      return Object.keys(this.errors).length === 0;
    },
    handleSubmit() {
      if (!this.validateForm()) {
        this.showToast('ກະລຸນາກວດສອບຂໍ້ມູນທີ່ໃສ່', 'error');
        return;
      }
      this.saving = true;
      const validAllocationLines = this.allocationLines.filter(allocation => {
        const amount = parseFloat(allocation.allocatedAmount) || 0;
        return amount > 0;
      });
      if (this.isEdit) {
        this.form.updateUserId = this.user.id;
      } else {
        this.form.inputterId = this.user.id;
      }
      const formData = {
        ...this.form,
        totalReceivedAmount: parseFloat(this.form.totalReceivedAmount) || 0,
        allocationLines: validAllocationLines.map((allocation, index) => ({
          id: allocation.id || null,
          tempId: allocation.tempId,
          lineNumber: index + 1,
          invoiceLineId: allocation.invoiceLineId || null,
          description: allocation.invoiceLine ? allocation.invoiceLine.description : allocation.description,
          allocatedAmount: parseFloat(allocation.allocatedAmount) || 0,
          allocationDate: allocation.allocationDate,
          quantity: allocation.quantity || null,
          unitPrice: allocation.unitPrice || null,
          lineTotal: allocation.lineTotal || null,
          DRglAccountId: allocation.DRglAccountId || null,
          CRglAccountId: allocation.CRglAccountId || null,
          txnId: allocation.txnId || null,
          notes: allocation.notes || '',
          isManual: !allocation.invoiceLineId,
          isFromInvoice: allocation.isFromInvoice || false
        }))
      };
      console.log('💾 Submitting form data:', formData);
      this.$emit('save', formData);
    },
    // =====================================================
    // UTILITY METHODS
    // =====================================================
    getTransactionCodeLabel(txnId) {
      const txn = this.transactionCodes.find(t => t.id === txnId);
      return txn ? `${txn.code} - ${txn.description}` : '';
    },
    getAllocationSummary() {
      const summary = {
        totalLines: this.allocationLines.length,
        invoiceLines: 0,
        manualLines: 0,
        totalAllocated: 0,
        totalInvoiceAmount: 0,
        allocationPercentage: 0
      };
      this.allocationLines.forEach(allocation => {
        const amount = parseFloat(allocation.allocatedAmount) || 0;
        summary.totalAllocated += amount;
        if (allocation.invoiceLine) {
          summary.invoiceLines++;
          summary.totalInvoiceAmount += parseFloat(allocation.invoiceLine.lineTotal) || 0;
        } else {
          summary.manualLines++;
        }
      });
      if (summary.totalInvoiceAmount > 0) {
        summary.allocationPercentage = summary.totalAllocated / summary.totalInvoiceAmount * 100;
      }
      return summary;
    },
    clearErrors() {
      this.errors = {};
    },
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field);
      }
    },
    handleOverlayClick() {
      if (!this.saving) {
        this.handleClose();
      }
    },
    handleClose() {
      this.$emit('close');
    },
    resetForm() {
      var _this$user3;
      this.form = {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentId: null,
        currencyId: null,
        exchangeRate: 1,
        referenceNumber: '',
        notes: '',
        inputterId: ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.id) || '',
        reason: ''
      };
    },
    // =====================================================
    // FORMATTING METHODS
    // =====================================================
    formatCurrency(amount) {
      var _this$selectedCurrenc;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: ((_this$selectedCurrenc = this.selectedCurrency) === null || _this$selectedCurrenc === void 0 ? void 0 : _this$selectedCurrenc.code) || 'USD'
      }).format(amount || 0);
    },
    formatNumber(number) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number || 0);
    },
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    getStatusLabel(status) {
      const statusLabels = {
        draft: 'ຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳໜົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        if (typeof this.$toast[type] === 'function') {
          this.$toast[type](message);
        } else {
          console.log(message);
        }
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue?vue&type=script&lang=js
 /* harmony default export */ var receive_maintainvue_type_script_lang_js = (maintainvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(842)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_maintainvue_type_script_lang_js,
  maintainvue_type_template_id_5396ad5b_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "5396ad5b",
  "2b1d1851"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// mixins/companyLogoMixin.js
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      companyLogo: {
        url: null,
        company: null,
        loading: false,
        error: null,
        fallbackUrl: null
      }
    };
  },
  computed: {
    // Get the final logo URL (with fallback)
    finalLogoUrl() {
      return this.companyLogo.url || this.companyLogo.fallbackUrl || this.getDefaultLogo();
    },
    // Check if logo is available
    hasCompanyLogo() {
      return !!this.companyLogo.url;
    },
    // Get company name from logo data
    logoCompanyName() {
      var _this$companyLogo$com;
      return ((_this$companyLogo$com = this.companyLogo.company) === null || _this$companyLogo$com === void 0 ? void 0 : _this$companyLogo$com.name) || 'Company Name';
    }
  },
  methods: {
    // Load first company logo
    async loadFirstCompanyLogo() {
      this.companyLogo.loading = true;
      this.companyLogo.error = null;
      try {
        const response = await this.$axios.get('/api/company/findAll', {
          params: {
            isActive: true
          }
        });
        const companies = Array.isArray(response.data) ? response.data : [];
        const companyWithImage = companies.find(company => company.profile_image_path && company.isActive);
        if (companyWithImage) {
          this.companyLogo.company = companyWithImage;
          this.companyLogo.url = this.buildImageUrl(companyWithImage.profile_image_path);
        }
        this.companyLogo.fallbackUrl = this.getDefaultLogo();
      } catch (error) {
        console.error('Error loading company logo:', error);
        this.companyLogo.error = error.message;
        this.companyLogo.fallbackUrl = this.getDefaultLogo();
      } finally {
        this.companyLogo.loading = false;
      }
    },
    // Load specific company logo
    async loadCompanyLogo(companyId) {
      this.companyLogo.loading = true;
      this.companyLogo.error = null;
      try {
        const response = await this.$axios.get(`/api/company/find/${companyId}`);
        const company = response.data;
        this.companyLogo.company = company;
        if (company.profile_image_path) {
          this.companyLogo.url = this.buildImageUrl(company.profile_image_path);
        } else {
          this.companyLogo.url = null;
        }
        this.companyLogo.fallbackUrl = this.getDefaultLogo();
      } catch (error) {
        console.error('Error loading specific company logo:', error);
        this.companyLogo.error = error.message;
        this.companyLogo.fallbackUrl = this.getDefaultLogo();
      } finally {
        this.companyLogo.loading = false;
      }
    },
    // Build image URL
    buildImageUrl(imagePath) {
      if (!imagePath) return null;
      const baseUrl = this.$axios.defaults.baseURL || '';
      return `${baseUrl}/${imagePath}`;
    },
    // Get default/fallback logo
    getDefaultLogo() {
      try {
        return __webpack_require__(161);
      } catch {
        return '/static/images/default-logo.png';
      }
    },
    // Handle logo load error
    onLogoError() {
      console.warn('Company logo failed to load');
      this.companyLogo.url = null;
    },
    // Reset logo data
    resetCompanyLogo() {
      this.companyLogo = {
        url: null,
        company: null,
        loading: false,
        error: null,
        fallbackUrl: null
      };
    }
  }
});

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(731);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("73a24bb5", content, true, context)
};

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_26e7ba38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(604);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_26e7ba38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_26e7ba38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_26e7ba38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_26e7ba38_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".receipt-container[data-v-26e7ba38]{background:#fff;margin:0 auto;max-width:900px;padding:40px}.receipt-header[data-v-26e7ba38]{border-bottom:3px solid primary;margin-bottom:30px;padding-bottom:15px}.header-flex[data-v-26e7ba38]{align-items:center;display:flex;gap:20px;justify-content:space-between}.header-left[data-v-26e7ba38]{flex-shrink:0}.header-center[data-v-26e7ba38]{flex:1;text-align:left}.header-right[data-v-26e7ba38]{flex-shrink:0;text-align:right}.logo-placeholder[data-v-26e7ba38]{align-items:center;border:2px dashed #ddd;border-radius:4px;display:flex;height:100px;justify-content:center;width:120px}.company-logo[data-v-26e7ba38]{border-radius:4px;display:block;height:auto;max-height:100px;-o-object-fit:contain;object-fit:contain;width:120px}.company-name[data-v-26e7ba38]{color:primary;font-size:24px;font-weight:700;margin:0 0 8px}.company-address[data-v-26e7ba38],.company-contact[data-v-26e7ba38]{color:#666;font-size:13px;margin:5px 0}.receipt-title h3[data-v-26e7ba38]{color:#333;font-size:20px;margin:0 0 5px}.receipt-title h4[data-v-26e7ba38]{color:#666;font-size:16px;margin:0}.receipt-info-grid[data-v-26e7ba38]{display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;background-color:#f9f9f9;border-radius:4px;gap:30px;margin:25px 0;padding:20px}.info-section h5[data-v-26e7ba38]{border-bottom:1px solid #ddd;color:#333;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:5px}.info-row[data-v-26e7ba38]{display:flex;font-size:12px;padding:5px 0}.label[data-v-26e7ba38]{color:#333;font-weight:600;min-width:120px}.value[data-v-26e7ba38]{color:#666}.receipt-table[data-v-26e7ba38]{border-collapse:collapse;font-size:13px;margin:25px 0;width:100%}.receipt-table td[data-v-26e7ba38],.receipt-table th[data-v-26e7ba38]{border:1px solid #ddd;padding:10px}.receipt-table th[data-v-26e7ba38]{background-color:primary;color:#fff;font-weight:600;text-align:left}.receipt-table tbody tr[data-v-26e7ba38]:nth-child(2n){background-color:#f9f9f9}.receipt-table .text-center[data-v-26e7ba38]{text-align:center}.receipt-table .text-right[data-v-26e7ba38]{text-align:right}.total-row td[data-v-26e7ba38]{background-color:#e8f5e9;font-size:14px;font-weight:700}.amount-words[data-v-26e7ba38]{background-color:#f0f4ff;border-left:4px solid primary;font-size:14px;margin:20px 0;padding:15px}.receipt-notes[data-v-26e7ba38]{background-color:#fff9e6;border-radius:4px;font-size:13px;margin:20px 0;padding:15px}.signature-section[data-v-26e7ba38]{display:flex;gap:40px;justify-content:space-between;margin-top:60px}.signature-box[data-v-26e7ba38]{flex:1;text-align:center}.signature-line[data-v-26e7ba38]{border-top:2px solid #333;margin:80px 10px 15px}.signature-label[data-v-26e7ba38]{color:#333;font-size:13px;font-weight:600;margin:8px 0}.signature-name[data-v-26e7ba38]{font-size:14px;font-weight:500;margin:5px 0}.signature-date[data-v-26e7ba38]{color:#666;font-size:12px}@media print{.receipt-container[data-v-26e7ba38]{padding:20px}.company-logo[data-v-26e7ba38]{max-height:80px;width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(843);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7874bfcb", content, true, context)
};

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(407);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(433);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/voucher/index.vue?vue&type=template&id=26e7ba38&scoped=true










var vouchervue_type_template_id_26e7ba38_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": "",
      "scrollable": "",
      "transition": "dialog-bottom-transition"
    },
    model: {
      value: _vm.visible,
      callback: function ($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_vm.hasValidData ? _c(VCard["a" /* default */], {
    staticClass: "d-flex flex-column",
    staticStyle: {
      "height": "100vh"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3 flex-shrink-0"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-printer")]), _vm._v(" "), _c('span', [_vm._v("ໃບຮັບເງິນ - Payment Receipt")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0 flex-grow-1 overflow-y-auto"
  }, [_c('div', {
    staticClass: "receipt-container",
    attrs: {
      "id": "receipt-print-area"
    }
  }, [_c('div', {
    staticClass: "receipt-header"
  }, [_c('div', {
    staticClass: "header-flex"
  }, [_c('div', {
    staticClass: "header-left"
  }, [_vm.companyLogo.loading ? _c('div', {
    staticClass: "logo-placeholder"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "size": "24",
      "color": "primary"
    }
  })], 1) : _c('img', {
    staticClass: "company-logo",
    attrs: {
      "src": _vm.finalLogoUrl,
      "alt": "Company Logo"
    },
    on: {
      "error": _vm.onLogoError
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "header-center"
  }, [_c('h2', {
    staticClass: "company-name"
  }, [_vm._v(_vm._s(_vm.companyName))]), _vm._v(" "), _c('p', {
    staticClass: "company-address"
  }, [_vm._v(_vm._s(_vm.companyAddress))]), _vm._v(" "), _c('p', {
    staticClass: "company-contact"
  }, [_vm._v(_vm._s(_vm.companyContact))])]), _vm._v(" "), _c('div', {
    staticClass: "header-right"
  }, [_c('div', {
    staticClass: "receipt-title"
  }, [_c('h3', [_vm._v("PAYMENT RECEIPT")]), _vm._v(" "), _c('h4', [_vm._v("ໃບຮັບເງິນ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "receipt-info-grid"
  }, [_c('div', {
    staticClass: "info-section"
  }, [_c('h5', [_vm._v("Receipt Details:")]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Receipt No:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.safeReceiptData.receiptNumber || '-'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Booking Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeReceiptData.bookingDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Received Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeReceiptData.receivedDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Reference No:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.safeReceiptData.referenceNumber || '-'))])])]), _vm._v(" "), _c('div', {
    staticClass: "info-section"
  }, [_c('h5', [_vm._v("Payment Information:")]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Payment Method:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getPaymentMethodName(_vm.safeReceiptData.paymentId)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Currency:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getCurrencyInfo))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Exchange Rate:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.safeReceiptData.exchangeRate)))])]), _vm._v(" "), _vm.safeReceiptData.invoiceHeaderId ? _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Invoice Ref:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getInvoiceNumber))])]) : _vm._e()])]), _vm._v(" "), _c('table', {
    staticClass: "receipt-table"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "5%"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "35%"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Transaction Code")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("DR Account")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("CR Account")]), _vm._v(" "), _c('th', {
    staticClass: "text-center",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Amount")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.safeAllocationLines, function (line, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.description || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTransactionCode(line.txnId)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.getGLAccount(line.DRglAccountId)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.getGLAccount(line.CRglAccountId)))]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm.formatDate(line.allocationDate)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.allocatedAmount)))])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "total-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "6"
    }
  }, [_c('strong', [_vm._v("Total Amount Received:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalAmount)))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "amount-words"
  }, [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.amountInWords) + "\n        ")]), _vm._v(" "), _vm.safeReceiptData.notes ? _c('div', {
    staticClass: "receipt-notes"
  }, [_c('strong', [_vm._v("Notes:")]), _vm._v(" " + _vm._s(_vm.safeReceiptData.notes) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "signature-section"
  }, [_c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Received By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v(_vm._s(_vm.receivedBy))]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeReceiptData.receivedDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Prepared By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v(_vm._s(_vm.preparedBy))]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeReceiptData.bookingDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Authorized By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v("_________________")]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("Date: ___________")])])])])]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4 flex-shrink-0"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
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
  }, [_vm._v("mdi-close")]), _vm._v("\n        ປິດ\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.printReceipt
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n        ພິມ\n      ")], 1)], 1)], 1) : _c(VCard["a" /* default */], {
    staticClass: "d-flex flex-column",
    staticStyle: {
      "height": "100vh"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center pa-8"
  }, [_vm.visible ? _c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary",
      "size": "64"
    }
  }) : _c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey lighten-1"
    }
  }, [_vm._v("\n        mdi-file-document-outline\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "mt-4 grey--text"
  }, [_vm._v("\n        " + _vm._s(_vm.visible ? 'ກຳລັງໂຫຼດຂໍ້ມູນ...' : 'ບໍ່ມີຂໍ້ມູນສຳລັບພິມ') + "\n      ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_vm._v("ປິດ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue?vue&type=template&id=26e7ba38&scoped=true

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(41);

// EXTERNAL MODULE: ./mixins/companyLogoMixin.js
var companyLogoMixin = __webpack_require__(547);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/voucher/index.vue?vue&type=script&lang=js


/* harmony default export */ var vouchervue_type_script_lang_js = ({
  name: 'ARReceivePrinterWithLogo',
  mixins: [companyLogoMixin["a" /* default */]],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receiptData: {
      type: Object,
      required: false,
      default: null
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    transactionCodes: {
      type: Array,
      default: () => []
    },
    glAccounts: {
      type: Array,
      default: () => []
    },
    invoices: {
      type: Array,
      default: () => []
    },
    companyDataV1: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    companyDataV1() {
      console.log(`**********COMPANY DATA V1 PDFINVOICE ${api["b" /* mainCompanyInfo */]}**********`);
      let comV1 = Object(api["c" /* mainCompanyInfoV1 */])(this.$store);
      console.info(`Company data fetch from api V1 ${comV1}`);
      return comV1;
    },
    hasValidData() {
      return this.receiptData && this.receiptData.id;
    },
    safeReceiptData() {
      return this.receiptData || {};
    },
    safeAllocationLines() {
      return this.safeReceiptData.allocationLines || this.safeReceiptData.receiveLines || [];
    },
    // Company information
    companyName() {
      return this.companyDataV1.name;
    },
    companyAddress() {
      return this.companyDataV1.address;
    },
    companyContact() {
      var _this$companyDataV, _this$companyDataV2;
      const tel = ((_this$companyDataV = this.companyDataV1) === null || _this$companyDataV === void 0 ? void 0 : _this$companyDataV.tel) || '+856 20 XXXX XXXX';
      const email = ((_this$companyDataV2 = this.companyDataV1) === null || _this$companyDataV2 === void 0 ? void 0 : _this$companyDataV2.email) || 'info@company.com';
      return `Tel: ${tel} | Email: ${email}`;
    },
    receivedBy() {
      var _this$safeReceiptData, _this$safeReceiptData2;
      return ((_this$safeReceiptData = this.safeReceiptData.receivedBy) === null || _this$safeReceiptData === void 0 ? void 0 : _this$safeReceiptData.cus_name) || ((_this$safeReceiptData2 = this.safeReceiptData.inputter) === null || _this$safeReceiptData2 === void 0 ? void 0 : _this$safeReceiptData2.cus_name) || '-';
    },
    preparedBy() {
      var _this$safeReceiptData3, _this$safeReceiptData4;
      return ((_this$safeReceiptData3 = this.safeReceiptData.inputter) === null || _this$safeReceiptData3 === void 0 ? void 0 : _this$safeReceiptData3.cus_name) || ((_this$safeReceiptData4 = this.safeReceiptData.preparedBy) === null || _this$safeReceiptData4 === void 0 ? void 0 : _this$safeReceiptData4.cus_name) || '-';
    },
    getCurrencyInfo() {
      const currencyId = this.safeReceiptData.currencyId;
      if (!currencyId) return 'USD';
      const currency = this.currencies.find(c => c.id === currencyId);
      return currency ? `${currency.name} (${currency.code})` : 'USD';
    },
    getInvoiceNumber() {
      const invoiceId = this.safeReceiptData.invoiceHeaderId;
      if (!invoiceId) return '-';
      const invoice = this.invoices.find(inv => inv.id === invoiceId);
      return (invoice === null || invoice === void 0 ? void 0 : invoice.invoiceNumber) || '-';
    },
    totalAmount() {
      return this.safeAllocationLines.reduce((sum, line) => {
        return sum + (parseFloat(line.allocatedAmount) || 0);
      }, 0);
    },
    amountInWords() {
      return this.numberToWords(this.totalAmount) + ' Only';
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        // Load the first company logo when dialog opens
        this.loadFirstCompanyLogo();
      }
    }
  },
  methods: {
    getPaymentMethodName(paymentId) {
      if (!paymentId) return '-';
      const method = this.paymentMethods.find(m => m.id === paymentId);
      return (method === null || method === void 0 ? void 0 : method.name) || (method === null || method === void 0 ? void 0 : method.methodName) || '-';
    },
    getTransactionCode(txnId) {
      if (!txnId) return '-';
      const txn = this.transactionCodes.find(t => t.id === txnId);
      return (txn === null || txn === void 0 ? void 0 : txn.code) || (txn === null || txn === void 0 ? void 0 : txn.transactionCode) || '-';
    },
    getGLAccount(accountId) {
      if (!accountId) return '-';
      const account = this.glAccounts.find(a => a.id === accountId);
      return (account === null || account === void 0 ? void 0 : account.accountCode) || (account === null || account === void 0 ? void 0 : account.code) || '-';
    },
    formatDate(date) {
      if (!date) return '-';
      try {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      } catch {
        return '-';
      }
    },
    formatNumber(value) {
      if (!value && value !== 0) return '0';
      return parseFloat(value).toLocaleString();
    },
    formatCurrency(value) {
      if (!value && value !== 0) return '$0.00';
      return `${parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    },
    numberToWords(num) {
      // Simplified number to words conversion
      if (num === 0) return 'Zero';
      if (num < 1000) return `${Math.floor(num)} ${this.getCurrencyInfo}`;
      if (num < 1000000) return `${Math.floor(num / 1000)} Thousand ${this.getCurrencyInfo}`;
      return `${Math.floor(num / 1000000)} Million ${this.getCurrencyInfo}`;
    },
    printReceipt() {
      const printContent = document.getElementById('receipt-print-area');
      if (!printContent) {
        this.$toast.error('Print content not found');
        return;
      }
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
        <head>
          <title>Payment Receipt - ${this.safeReceiptData.receiptNumber}</title>
          <style>
            * { 
              margin: 0; 
              padding: 0; 
              box-sizing: border-box; 
            }
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.4; 
              color: #333; 
            }
            .receipt-container { 
              background: white; 
              padding: 20px; 
              max-width: 900px; 
              margin: 0 auto; 
            }
            .receipt-header { 
              margin-bottom: 20px; 
              border-bottom: 3px solid primary; 
              padding-bottom: 15px; 
            }
            .header-flex { 
              display: flex; 
              align-items: center; 
              justify-content: space-between; 
              gap: 20px; 
            }
            .header-left { 
              flex-shrink: 0; 
            }
            .header-center { 
              flex: 1; 
              text-align: left; 
            }
            .header-right { 
              flex-shrink: 0; 
              text-align: right; 
            }
            .company-logo { 
              width: 100px; 
              height: auto; 
              object-fit: contain; 
              display: block; 
              max-height: 80px; 
            }
            .company-name { 
              margin: 0 0 8px 0; 
              font-size: 20px; 
              font-weight: bold; 
              color: primary; 
            }
            .company-address, .company-contact { 
              margin: 3px 0; 
              font-size: 11px; 
              color: #666; 
            }
            .receipt-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px; 
              color: #333; 
            }
            .receipt-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .receipt-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              margin: 20px 0; 
            }
            .info-section h5 { 
              margin: 0 0 10px; 
              font-size: 14px; 
              font-weight: bold; 
              border-bottom: 1px solid #ddd; 
              padding-bottom: 5px; 
            }
            .info-row { 
              padding: 3px 0; 
              font-size: 12px; 
            }
            .label { 
              font-weight: bold; 
              margin-right: 10px; 
            }
            .receipt-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .receipt-table th, .receipt-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .receipt-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .receipt-table .text-center { 
              text-align: center; 
            }
            .receipt-table .text-right { 
              text-align: right; 
            }
            .total-row td { 
              background-color: #f9f9f9; 
              font-size: 12px; 
            }
            .amount-words { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
              border-left: 3px solid primary; 
            }
            .receipt-notes { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #fff9e6; 
            }
            .signature-section { 
              display: flex; 
              justify-content: space-between; 
              margin-top: 40px; 
              page-break-inside: avoid; 
            }
            .signature-box { 
              text-align: center; 
              flex: 1; 
            }
            .signature-line { 
              border-top: 1px solid #000; 
              margin: 60px 20px 10px; 
            }
            .signature-label { 
              font-weight: bold; 
              margin: 5px 0; 
            }
            .signature-name { 
              margin: 5px 0; 
            }
            .signature-date { 
              font-size: 11px; 
              color: #666; 
            }
          }
        </style>
      `);
      printWindow.document.write('</head><body>');
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue?vue&type=script&lang=js
 /* harmony default export */ var receive_vouchervue_type_script_lang_js = (vouchervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(730)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_vouchervue_type_script_lang_js,
  vouchervue_type_template_id_26e7ba38_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "26e7ba38",
  "6700ed7e"
  
)

/* harmony default export */ var voucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5396ad5b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(732);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5396ad5b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5396ad5b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5396ad5b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5396ad5b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-5396ad5b]{align-items:center;background-color:rgba(0,0,0,.7);display:flex;height:100vh;justify-content:center;left:0;padding:0;position:fixed;top:0;width:100vw;z-index:1050}.enhanced-dialog[data-v-5396ad5b]{height:100vh;width:100vw}.enhanced-dialog[data-v-5396ad5b],.invoice-browser-dialog[data-v-5396ad5b]{background:#fff;display:flex;flex-direction:column;overflow:hidden}.invoice-browser-dialog[data-v-5396ad5b]{border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);height:80vh;max-height:80vh;max-width:90vw;width:100%}.modal-header[data-v-5396ad5b]{background:linear-gradient(135deg,primary,secondary);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;min-height:50px;padding:10px 15px}.modal-header[data-v-5396ad5b],.modal-title[data-v-5396ad5b]{align-items:center;display:flex}.modal-title[data-v-5396ad5b]{font-size:16px;font-weight:600;gap:8px;margin:0}.close-button[data-v-5396ad5b]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;padding:4px;transition:background .2s}.close-button[data-v-5396ad5b]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-5396ad5b]{flex:1;overflow-y:auto}.loading-state[data-v-5396ad5b],.modal-body[data-v-5396ad5b]{display:flex;flex-direction:column}.loading-state[data-v-5396ad5b]{align-items:center;color:#666;justify-content:center;padding:30px}.spinner[data-v-5396ad5b]{animation:spin-5396ad5b 1s linear infinite;border:3px solid #f3f3f3;border-radius:50%;border-top-color:#28a745;height:30px;margin-bottom:10px;width:30px}@keyframes spin-5396ad5b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.receipt-form[data-v-5396ad5b]{display:flex;flex:1;flex-direction:column}.form-section[data-v-5396ad5b]{border-bottom:1px solid #f0f0f0;padding:15px 20px}.section-header[data-v-5396ad5b]{flex-wrap:wrap;gap:10px;justify-content:space-between;margin-bottom:12px}.section-header[data-v-5396ad5b],.section-title[data-v-5396ad5b]{align-items:center;display:flex}.section-title[data-v-5396ad5b]{border-bottom:1px solid #e9ecef;color:#333;font-size:14px;font-weight:600;gap:8px;margin:0 0 12px;padding-bottom:6px}.section-title i[data-v-5396ad5b]{color:#28a745;font-size:13px}.line-count[data-v-5396ad5b]{background:#28a745;border-radius:10px;color:#fff;font-size:11px;margin-left:4px;min-width:20px;padding:2px 8px;text-align:center}.form-row[data-v-5396ad5b]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:10px;gap:10px;margin-bottom:12px}.form-group[data-v-5396ad5b]{margin-bottom:0}.form-group.full-width[data-v-5396ad5b]{grid-column:1/-1}.form-group label[data-v-5396ad5b]{color:#333;display:block;font-size:12px;font-weight:500;margin-bottom:3px}.form-group label.required[data-v-5396ad5b]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-5396ad5b]{border:1px solid #ddd;border-radius:4px;font-size:13px;line-height:1.2;padding:6px 8px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-5396ad5b]:focus{border-color:#28a745;box-shadow:0 0 0 2px rgba(40,167,69,.1);outline:none}.form-control.is-invalid[data-v-5396ad5b]{border-color:#e74c3c;box-shadow:0 0 0 2px rgba(231,76,60,.1)}.form-control-xs[data-v-5396ad5b]{font-size:12px;padding:4px 6px}.textarea-compact[data-v-5396ad5b]{min-height:50px;resize:vertical}.invalid-feedback[data-v-5396ad5b]{color:#e74c3c;display:block;font-size:11px;margin-top:3px;width:100%}.auto-calculated-field[data-v-5396ad5b]{background-color:#f8f9fa!important;border-style:dashed!important;color:#495057!important;cursor:not-allowed;font-weight:600}.auto-calculated-field[data-v-5396ad5b]:disabled{opacity:.8}.form-group label.auto-calculated[data-v-5396ad5b]{align-items:center;color:#28a745;display:flex;font-weight:600;gap:6px}.form-text.text-muted[data-v-5396ad5b]{align-items:center;color:#6c757d!important;display:flex;font-size:11px;gap:4px;margin-top:3px}.invoice-selector[data-v-5396ad5b]{display:flex;gap:8px}.invoice-selector select[data-v-5396ad5b]{flex:1}.quick-allocation-actions[data-v-5396ad5b]{display:flex;flex-wrap:wrap;gap:6px}.no-invoice-state[data-v-5396ad5b],.no-lines-state[data-v-5396ad5b],.no-results-state[data-v-5396ad5b]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:6px;margin-top:12px;padding:30px 20px;text-align:center}.empty-content i[data-v-5396ad5b]{color:#dee2e6;font-size:40px;margin-bottom:12px}.empty-content h4[data-v-5396ad5b]{color:#666;font-size:15px;margin-bottom:8px}.empty-content p[data-v-5396ad5b]{color:#999;font-size:13px;margin-bottom:15px}.allocation-notice[data-v-5396ad5b]{align-items:center;background:#e7f3ff;border-left:3px solid #007bff;border-radius:4px;color:#495057;display:flex;font-size:12px;gap:8px;margin-bottom:15px;padding:10px}.allocation-table-container[data-v-5396ad5b],.invoice-table-container[data-v-5396ad5b]{border:1px solid #e9ecef;border-radius:6px;margin-top:12px;max-height:400px;overflow:hidden;overflow-y:auto}.allocation-table .table[data-v-5396ad5b],.invoice-table-container .table[data-v-5396ad5b]{border-collapse:collapse;margin:0;width:100%}.table-compact[data-v-5396ad5b]{font-size:12px}.allocation-table .table th[data-v-5396ad5b],.invoice-table-container .table th[data-v-5396ad5b]{background:#f8f9fa;border-bottom:1px solid #dee2e6;font-size:11px;font-weight:600;padding:6px 4px;position:sticky;text-align:center;top:0;z-index:10}.allocation-table .table td[data-v-5396ad5b],.invoice-table-container .table td[data-v-5396ad5b]{border-top:1px solid #dee2e6;font-size:11px;padding:4px;vertical-align:middle}.line-number[data-v-5396ad5b]{color:#666;font-weight:600;text-align:center}.invoice-line-display[data-v-5396ad5b]{line-height:1.3}.line-description[data-v-5396ad5b]{color:#333;font-size:12px;font-weight:500;margin-bottom:2px}.line-details[data-v-5396ad5b]{color:#666;font-size:10px}.invoice-line-total[data-v-5396ad5b],.remaining-amount[data-v-5396ad5b]{color:#28a745;font-size:11px;font-weight:600;text-align:right}.over-allocated[data-v-5396ad5b]{color:#dc3545!important}.fully-allocated[data-v-5396ad5b]{color:#6c757d!important}.allocation-row[data-v-5396ad5b],.invoice-row[data-v-5396ad5b]{transition:background-color .2s}.allocation-row[data-v-5396ad5b]:hover,.invoice-row[data-v-5396ad5b]:hover{background-color:rgba(40,167,69,.05)}.amount-summary[data-v-5396ad5b]{background:#f8f9fa;border-bottom:1px solid #f0f0f0;border-radius:0;border-top:2px solid #28a745;padding:12px 20px}.totals-compact[data-v-5396ad5b]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-gap:8px;gap:8px}.total-item[data-v-5396ad5b]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.total-item.success-balance[data-v-5396ad5b]{background:#d4edda;border-radius:4px;grid-column:1/-1;padding:6px 8px}.total-item .amount[data-v-5396ad5b]{color:#333;font-weight:600}.total-item .amount.received[data-v-5396ad5b]{color:#28a745}.total-item .amount.allocated[data-v-5396ad5b]{color:#007bff}.amount.balanced[data-v-5396ad5b]{color:#155724!important;font-weight:600;gap:4px}.amount.balanced[data-v-5396ad5b],.balance-info[data-v-5396ad5b]{align-items:center;display:flex}.balance-info[data-v-5396ad5b]{background:#e7f3ff;border:1px solid #bee5eb;border-radius:4px;color:#0c5460;font-size:12px;gap:6px;margin-top:10px;padding:8px}.search-section[data-v-5396ad5b]{background:#f8f9fa;border-bottom:1px solid #e9ecef;padding:15px}.search-input-group[data-v-5396ad5b]{max-width:400px;position:relative}.search-icon[data-v-5396ad5b]{color:#666;font-size:14px;left:10px;position:absolute;top:50%;transform:translateY(-50%)}.search-input[data-v-5396ad5b]{border-radius:6px;font-size:14px;padding-left:35px}.invoice-list[data-v-5396ad5b]{flex:1;overflow-y:auto;padding:15px}.customer-info[data-v-5396ad5b]{line-height:1.3}.customer-name[data-v-5396ad5b]{color:#333;font-size:12px;font-weight:500}.customer-email[data-v-5396ad5b]{color:#666;font-size:10px}.amount-cell[data-v-5396ad5b]{color:#28a745;font-size:11px;font-weight:600;text-align:right}.status-badge[data-v-5396ad5b]{border-radius:10px;font-size:9px;font-weight:500;padding:2px 6px;text-transform:uppercase}.status-draft[data-v-5396ad5b]{background:#ffeaa7;color:#fdcb6e}.status-sent[data-v-5396ad5b]{background:#74b9ff;color:#0984e3}.status-paid[data-v-5396ad5b]{background:#00b894;color:#00a085}.status-overdue[data-v-5396ad5b]{background:#ff7675;color:#d63031}.status-cancelled[data-v-5396ad5b]{background:#636e72;color:#2d3436}.btn[data-v-5396ad5b]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:12px;gap:4px;line-height:1.2;padding:6px 12px;transition:all .2s ease}.btn-compact[data-v-5396ad5b]{font-size:12px;padding:5px 10px}.btn-sm[data-v-5396ad5b]{font-size:11px;padding:5px 10px}.btn-xs[data-v-5396ad5b]{font-size:10px;padding:3px 8px}.btn-primary[data-v-5396ad5b]{background:#28a745;color:#fff}.btn-secondary[data-v-5396ad5b]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-5396ad5b]{background:#fff;border:1px solid #007bff;color:#007bff}.btn-outline-success[data-v-5396ad5b]{background:#fff;border:1px solid #28a745;color:#28a745}.btn-outline-info[data-v-5396ad5b]{background:#fff;border:1px solid #17a2b8;color:#17a2b8}.btn-outline-warning[data-v-5396ad5b]{background:#fff;border:1px solid #ffc107;color:#ffc107}.btn[data-v-5396ad5b]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-5396ad5b]:disabled{cursor:not-allowed;opacity:.6;transform:none}.modal-footer[data-v-5396ad5b]{background:#f8f9fa;border-top:1px solid #e9ecef;justify-content:space-between;min-height:50px;padding:10px 15px}.footer-info[data-v-5396ad5b],.modal-footer[data-v-5396ad5b]{align-items:center;display:flex}.result-count[data-v-5396ad5b]{color:#666;font-size:12px}.footer-actions[data-v-5396ad5b]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.invoice-browser-dialog[data-v-5396ad5b]{border-radius:0;height:100vh;max-height:100vh;width:100%}.form-row[data-v-5396ad5b],.totals-compact[data-v-5396ad5b]{grid-template-columns:1fr}.section-header[data-v-5396ad5b]{align-items:flex-start;flex-direction:column;gap:8px}.quick-allocation-actions[data-v-5396ad5b]{justify-content:flex-start;width:100%}.allocation-table-container[data-v-5396ad5b],.invoice-table-container[data-v-5396ad5b]{overflow-x:auto}.allocation-table .table[data-v-5396ad5b],.invoice-table-container .table[data-v-5396ad5b]{min-width:600px}.footer-actions[data-v-5396ad5b]{flex-direction:column}.footer-actions .btn[data-v-5396ad5b]{justify-content:center;width:100%}.invoice-selector[data-v-5396ad5b]{flex-direction:column;gap:8px}.search-input-group[data-v-5396ad5b]{max-width:100%}}@media (max-width:480px){.modal-header[data-v-5396ad5b]{padding:8px 10px}.modal-title[data-v-5396ad5b]{font-size:14px}.form-section[data-v-5396ad5b]{padding:12px 15px}.amount-summary[data-v-5396ad5b]{padding:10px 15px}.modal-footer[data-v-5396ad5b]{padding:8px 10px}.quick-allocation-actions[data-v-5396ad5b]{flex-direction:column;gap:6px;width:100%}.quick-allocation-actions .btn[data-v-5396ad5b]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=accounting-ar-receive-maintain.js.map