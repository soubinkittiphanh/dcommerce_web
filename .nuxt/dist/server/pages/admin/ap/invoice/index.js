exports.ids = [183,3,4,5];
exports.modules = {

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/index.vue?vue&type=template&id=7625c714&scoped=true




var invoicevue_type_template_id_7625c714_scoped_true_render = function render() {
  var _vm$selectedCurrency, _vm$selectedCurrency3, _vm$selectedCurrency4, _vm$selectedCurrency5, _vm$selectedCurrency6;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-7625c714>", "</div>", [_vm._ssrNode("<div class=\"modal-header primary\" data-v-7625c714><h4 class=\"modal-title\" data-v-7625c714><i class=\"fas fa-file-invoice\" data-v-7625c714></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່') + "\n      ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-7625c714><i class=\"fas fa-times\" data-v-7625c714></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-7625c714>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-7625c714>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-7625c714></div> <p data-v-7625c714>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"invoice-form\" data-v-7625c714>", "</div>", [_vm._ssrNode("<form data-v-7625c714>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-7625c714>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-7625c714><i class=\"fas fa-info-circle\" data-v-7625c714></i>\n              ຂໍ້ມູນພື້ນຖານ\n            </h5> "), _vm._ssrNode("<div class=\"form-grid\" data-v-7625c714>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-7625c714><label for=\"invoiceDate\" class=\"required\" data-v-7625c714>ວັນທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.invoiceDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceDate
  }) + " data-v-7625c714> " + (_vm.errors.invoiceDate ? "<div class=\"invalid-feedback\" data-v-7625c714>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.invoiceDate) + "\n                ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-7625c714><label for=\"invoiceNumber\" class=\"required\" data-v-7625c714>ເລກທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceNumber\" type=\"text\" placeholder=\"ເຊັ່ນ: INV-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.invoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceNumber
  }) + " data-v-7625c714> " + (_vm.errors.invoiceNumber ? "<div class=\"invalid-feedback\" data-v-7625c714>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.invoiceNumber) + "\n                ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-7625c714>", "</div>", [_vm._ssrNode("<label for=\"agencyId\" class=\"required\" data-v-7625c714>" + _vm._ssrEscape(_vm._s(_vm.clientLabel)) + "</label> "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "id": "agencyId",
      "items": _vm.agencies,
      "item-value": "id",
      "item-text": "agencyName",
      "error": !!_vm.errors.agencyId,
      "error-messages": _vm.errors.agencyId,
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto",
      "placeholder": _vm.formLabel.vendor
    },
    on: {
      "change": _vm.onVendorChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                        " + _vm._s(item.name || item.agencyName) + " - (" + _vm._s(item.code || item.agencyCode) + ")\n                      ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                    " + _vm._s(item.name || item.agencyName) + " (" + _vm._s(item.code || item.agencyCode) + ")\n                  ")];
      }
    }], null, false, 1554401541),
    model: {
      value: _vm.form.agencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "agencyId", $$v);
      },
      expression: "form.agencyId"
    }
  })], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-7625c714><label for=\"vendorInvoiceNumber\" data-v-7625c714>ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ</label> <input id=\"vendorInvoiceNumber\" type=\"text\" placeholder=\"ເລກທີໃບແຈ້ງໜີ້ຂອງຜູ້ຂາຍ\"" + _vm._ssrAttr("value", _vm.form.vendorInvoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.vendorInvoiceNumber
  }) + " data-v-7625c714> " + (_vm.errors.vendorInvoiceNumber ? "<div class=\"invalid-feedback\" data-v-7625c714>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.vendorInvoiceNumber) + "\n                ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-7625c714>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" class=\"required\" data-v-7625c714>ສະກຸນເງິນ</label> "), _c(VAutocomplete["a" /* default */], {
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
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                        " + _vm._s(item.name) + " (" + _vm._s(item.code) + ")\n                      ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                    " + _vm._s(item.name) + " (" + _vm._s(item.code) + ")\n                  ")];
      }
    }], null, false, 2423314344),
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-7625c714><label for=\"exchangeRate\" class=\"required\" data-v-7625c714>\n                  ອັດຕາແລກປ່ຽນ\n                  " + (_vm.selectedCurrency ? "<span class=\"currency-info\" data-v-7625c714>" + _vm._ssrEscape("\n                    (" + _vm._s(_vm.selectedCurrency.code) + " ຕໍ່ LAK)\n                  ") + "</span>" : "<!---->") + "</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-7625c714> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-7625c714>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.exchangeRate) + "\n                ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-7625c714><label for=\"dueDate\" data-v-7625c714>ວັນທີຄົບກຳນົດ</label> <input id=\"dueDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.dueDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dueDate
  }) + " data-v-7625c714> " + (_vm.errors.dueDate ? "<div class=\"invalid-feedback\" data-v-7625c714>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.dueDate) + "\n                ") + "</div>" : "<!---->") + "</div> <div class=\"form-group span-2\" data-v-7625c714><label for=\"description\" data-v-7625c714>ຄຳອະທິບາຍ</label> <textarea id=\"description\" rows=\"2\" placeholder=\"ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້...\" class=\"form-control\" data-v-7625c714>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div>")], 2), _vm._ssrNode(" " + (_vm.selectedCurrency && _vm.form.exchangeRate ? "<div class=\"exchange-display\" data-v-7625c714><div class=\"exchange-amount\" data-v-7625c714><span class=\"foreign-amount\" data-v-7625c714>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(_vm.calculatedTotal, ((_vm$selectedCurrency = _vm.selectedCurrency) === null || _vm$selectedCurrency === void 0 ? void 0 : _vm$selectedCurrency.code) || 'USD')) + "\n                ") + "</span> <i class=\"fas fa-arrow-right exchange-arrow\" data-v-7625c714></i> <span class=\"local-amount\" data-v-7625c714>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(_vm.calculatedTotal * parseFloat(_vm.form.exchangeRate || 1), 'LAK')) + "\n                ") + "</span></div></div>" : "<!---->") + " " + (_vm.isEdit ? "<div class=\"form-group\" data-v-7625c714><label for=\"reason\" class=\"required\" data-v-7625c714>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-7625c714> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-7625c714>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.reason) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-section\" data-v-7625c714>", "</div>", [_vm._ssrNode("<div class=\"section-header\" data-v-7625c714><h5 class=\"section-title\" data-v-7625c714><i class=\"fas fa-list\" data-v-7625c714></i>\n                ລາຍການສິນຄ້າ\n                " + (_vm.lineItems.length > 0 ? "<span class=\"line-count\" data-v-7625c714>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length)) + "</span>" : "<!---->") + "</h5> <div class=\"add-line-actions\" data-v-7625c714><button type=\"button\" class=\"btn btn-primary btn-sm\" data-v-7625c714><i class=\"fas fa-plus\" data-v-7625c714></i>\n                  ເພີ່ມລາຍການ\n                </button> <button type=\"button\" class=\"btn btn-secondary btn-xs\" data-v-7625c714>\n                  +3\n                </button> <button type=\"button\" class=\"btn btn-secondary btn-xs\" data-v-7625c714>\n                  +5\n                </button></div></div> "), _vm.lineItems.length === 0 ? _vm._ssrNode("<div class=\"empty-line-state\" data-v-7625c714>", "</div>", [_vm._ssrNode("<div class=\"empty-content\" data-v-7625c714><i class=\"fas fa-shopping-cart\" data-v-7625c714></i> <h4 data-v-7625c714>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4> <button type=\"button\" class=\"btn btn-primary\" data-v-7625c714><i class=\"fas fa-plus-circle\" data-v-7625c714></i>\n                  ເພີ່ມລາຍການທຳອິດ\n                </button></div>")], 2) : _vm._ssrNode("<div class=\"line-items-table-container\" data-v-7625c714>", "</div>", [_vm._ssrNode("<div class=\"line-items-table\" data-v-7625c714>", "</div>", [_vm._ssrNode("<table class=\"table\" data-v-7625c714>", "</table>", [_vm._ssrNode("<thead data-v-7625c714><tr data-v-7625c714><th style=\"width: 30px\" data-v-7625c714>#</th> <th style=\"width: 140px\" data-v-7625c714>ລາຍລະອຽດ *</th> <th style=\"width: 140px\" data-v-7625c714>ລະຫັດການເງິນ</th> <th style=\"width: 60px\" data-v-7625c714>ຈຳນວນ *</th> <th style=\"width: 70px\" data-v-7625c714>ລາຄາ *</th> <th style=\"width: 80px\" data-v-7625c714>ລວມ</th> <th style=\"width: 40px\" data-v-7625c714>ລຶບ</th></tr></thead> "), _vm._ssrNode("<tbody data-v-7625c714>", "</tbody>", _vm._l(_vm.lineItems, function (line, index) {
    var _vm$selectedCurrency2;
    return _vm._ssrNode("<tr class=\"line-row\" data-v-7625c714>", "</tr>", [_vm._ssrNode("<td class=\"line-number\" data-v-7625c714>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-7625c714><input type=\"text\" placeholder=\"ລາຍລະອຽດ...\"" + _vm._ssrAttr("value", line.description) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_description`]
    }) + " data-v-7625c714></td> "), _vm._ssrNode("<td data-v-7625c714>", "</td>", [_c(VAutocomplete["a" /* default */], {
      staticClass: "mt-0",
      attrs: {
        "items": _vm.transactionCodes.filter(t => t.type !== 'ALL' && t.isActive),
        "item-value": "id",
        "item-text": "code",
        "label": _vm.loadingTransactionCodes ? 'ກຳລັງໂຫຼດ...' : 'ເລືອກລະຫັດການເງິນ',
        "loading": _vm.loadingTransactionCodes,
        "disabled": _vm.loadingTransactionCodes,
        "error": !line.txnId && _vm.errors.settlementLines,
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
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                                " + _vm._s(item.code) + " - " + _vm._s(item.description) + "\n                              ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                            " + _vm._s(item.code) + " - " + _vm._s(item.description) + "\n                          ")];
        }
      }], null, true),
      model: {
        value: line.txnId,
        callback: function ($$v) {
          _vm.$set(line, "txnId", $$v);
        },
        expression: "line.txnId"
      }
    }), _vm._ssrNode(" " + (!line.txnId && _vm.errors.settlementLines ? "<small class=\"text-danger d-block mt-1\" data-v-7625c714>\n                          ກະລຸນາເລືອກລະຫັດການເງິນ\n                        </small>" : "<!---->"))], 2), _vm._ssrNode(" <td data-v-7625c714><input type=\"number\" step=\"0.001\" min=\"0\"" + _vm._ssrAttr("value", line.quantity) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_quantity`]
    }) + " data-v-7625c714></td> <td data-v-7625c714><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.unitPrice) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_unitPrice`]
    }) + " data-v-7625c714></td> <td class=\"line-total\" data-v-7625c714>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.lineTotal || 0, (_vm$selectedCurrency2 = _vm.selectedCurrency) === null || _vm$selectedCurrency2 === void 0 ? void 0 : _vm$selectedCurrency2.code)) + "\n                      ") + "</td> <td data-v-7625c714><button type=\"button\" title=\"ລຶບ\" class=\"btn btn-xs btn-danger\" data-v-7625c714><i class=\"fas fa-trash\" data-v-7625c714></i></button></td>")], 2);
  }), 0)], 2)])])], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-7625c714><div class=\"totals-grid\" data-v-7625c714><div class=\"total-item\" data-v-7625c714><span data-v-7625c714>ລວມຍ່ອຍ:</span> <span class=\"amount\" data-v-7625c714>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal, (_vm$selectedCurrency3 = _vm.selectedCurrency) === null || _vm$selectedCurrency3 === void 0 ? void 0 : _vm$selectedCurrency3.code))) + "</span></div> <div class=\"total-item\" data-v-7625c714><span data-v-7625c714>ສ່ວນຫຼຸດ:</span> <span class=\"amount discount\" data-v-7625c714>" + _vm._ssrEscape("-" + _vm._s(_vm.formatCurrency(_vm.calculatedDiscount, (_vm$selectedCurrency4 = _vm.selectedCurrency) === null || _vm$selectedCurrency4 === void 0 ? void 0 : _vm$selectedCurrency4.code))) + "</span></div> <div class=\"total-item\" data-v-7625c714><span data-v-7625c714>ພາສີ:</span> <span class=\"amount\" data-v-7625c714>" + _vm._ssrEscape("+" + _vm._s(_vm.formatCurrency(_vm.calculatedTax, (_vm$selectedCurrency5 = _vm.selectedCurrency) === null || _vm$selectedCurrency5 === void 0 ? void 0 : _vm$selectedCurrency5.code))) + "</span></div> <div class=\"total-item grand-total\" data-v-7625c714><span data-v-7625c714>ລວມທັງໝົດ:</span> <span class=\"amount\" data-v-7625c714>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal, (_vm$selectedCurrency6 = _vm.selectedCurrency) === null || _vm$selectedCurrency6 === void 0 ? void 0 : _vm$selectedCurrency6.code))) + "</span></div> " + (_vm.selectedCurrency && _vm.selectedCurrency.code !== 'LAK' && _vm.form.exchangeRate ? "<div class=\"total-item local-currency\" data-v-7625c714><span data-v-7625c714>ລວມເປັນ LAK:</span> <span class=\"amount local\" data-v-7625c714>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal * parseFloat(_vm.form.exchangeRate || 1), 'LAK'))) + "</span></div>" : "<!---->") + "</div></div> " + (_vm.isEdit ? "<div class=\"audit-trail-compact\" data-v-7625c714><div class=\"audit-header\" data-v-7625c714><h5 data-v-7625c714>ປະຫວັດການດຳເນີນງານ</h5> <button type=\"button\" class=\"btn-view-audit\" data-v-7625c714><i class=\"fas fa-external-link-alt\" data-v-7625c714></i>\n                ເບິ່ງລະອຽດ\n              </button></div> <div class=\"audit-summary\" data-v-7625c714><div class=\"audit-item\" data-v-7625c714><i class=\"fas fa-user-edit\" data-v-7625c714></i> <span data-v-7625c714>" + _vm._ssrEscape("ສ້າງໂດຍ: " + _vm._s(_vm.auditTrail.makerName) + " (" + _vm._s(_vm.auditTrail.createdDate) + ")") + "</span></div> <div class=\"audit-item\" data-v-7625c714><i class=\"fas fa-user-check\" data-v-7625c714></i> <span data-v-7625c714>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.isChecked ? `ອະນຸມັດໂດຍ: ${_vm.auditTrail.checkerName}` : 'ລໍຖ້າການອະນຸມັດ')) + "</span></div> <div class=\"status-badge-container\" data-v-7625c714><span" + _vm._ssrClass(null, ['status-badge', `status-${_vm.auditTrail.status}`]) + " data-v-7625c714>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getStatusText(_vm.auditTrail.status)) + "\n                ") + "</span></div></div></div>" : "<!---->"))], 2)])]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-7625c714><div class=\"footer-actions\" data-v-7625c714><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-7625c714><i class=\"fas fa-times\" data-v-7625c714></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-7625c714>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-7625c714></i>" : "<i class=\"fas fa-save\" data-v-7625c714></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div></div>")], 2), _vm._ssrNode(" "), _c('audit-log-dialog', {
    attrs: {
      "visible": _vm.auditDialogVisible,
      "invoice-id": _vm.form.id,
      "invoice-info": _vm.getInvoiceInfo()
    },
    on: {
      "close": _vm.closeAuditDialog
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/invoice/index.vue?vue&type=template&id=7625c714&scoped=true

// EXTERNAL MODULE: ./components/accounting/ap/invoice/audit/index.vue + 3 modules
var audit = __webpack_require__(744);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/index.vue?vue&type=script&lang=js

/* harmony default export */ var invoicevue_type_script_lang_js = ({
  name: 'APInvoiceDialog',
  components: {
    AuditLogDialog: audit["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoice: {
      type: Object,
      default: null
    },
    agencies: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    glAccounts: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default: null
    }
  },
  emits: ['close', 'save'],
  async mounted() {
    await this.loadTransactionCodes(); // Add this
  },
  data() {
    return {
      transactionCodes: [],
      loadingTransactionCodes: false,
      // Add this
      // formLabel: {
      //   vendor: `ເລືອກ ${clientLabel}`, //'ເລືອກຕົວແທນ',
      //   model: '',
      // },
      formLoading: false,
      saving: false,
      errors: {},
      lineItems: [],
      nextTempId: 1,
      selectedVendor: null,
      selectedCurrency: null,
      auditDialogVisible: false,
      form: {
        id: null,
        invoiceNumber: '',
        vendorInvoiceNumber: '',
        vendorId: null,
        agencyId: '',
        invoiceDate: new Date().toISOString().split('T')[0],
        // Set today's date
        dueDate: '',
        description: '',
        totalAmount: '',
        exchangeRate: 1.0,
        currencyId: '',
        makerId: '',
        note: '',
        reason: ''
      }
    };
  },
  computed: {
    formLabel() {
      return {
        vendor: `ເລືອກ ${this.clientLabel}`,
        model: ''
      };
    },
    clientLabel() {
      const item = this.getSPF.find(spf => spf.code == 'LABEL_AC_CUS');
      return (item === null || item === void 0 ? void 0 : item.value) || 'ກະຊວງ';
    },
    getSPF() {
      return this.$store.getters.findSPF;
    },
    isEdit() {
      return !!this.invoice;
    },
    auditTrail() {
      if (!this.invoice) {
        var _this$user, _this$user2;
        return {
          makerName: ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.cus_name) || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.name) || 'ຜູ້ໃຊ້ປະຈຸບັນ',
          createdDate: new Date().toISOString().split('T')[0],
          isChecked: false,
          checkerName: null,
          status: 'draft'
        };
      }
      const maker = this.invoice.maker || {};
      const checker = this.invoice.checker || null;
      const createdAt = new Date(this.invoice.createdAt);
      return {
        makerName: maker.cus_name || 'ບໍ່ມີຂໍ້ມູນ',
        createdDate: createdAt.toISOString().split('T')[0],
        checkerName: (checker === null || checker === void 0 ? void 0 : checker.cus_name) || null,
        isChecked: !!this.invoice.checkerId && !!this.invoice.approvedAt,
        status: this.invoice.status || 'draft'
      };
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal = (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0);
        return sum + subtotal;
      }, 0);
    },
    calculatedDiscount() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.discountAmount) || 0), 0);
    },
    calculatedTax() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.taxAmount) || 0), 0);
    },
    calculatedTotal() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.lineTotal) || 0), 0);
    },
    isFormValid() {
      const hasValidHeader = this.form.invoiceNumber && this.form.agencyId && this.form.invoiceDate && this.form.dueDate && this.form.currencyId && this.form.exchangeRate && parseFloat(this.form.exchangeRate) > 0 && (!this.isEdit || this.form.reason);
      const hasValidLines = this.lineItems.length > 0 && this.lineItems.every(line => line.description && (parseFloat(line.quantity) || 0) > 0 && (parseFloat(line.unitPrice) || 0) >= 0);
      return hasValidHeader && hasValidLines;
    }
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
    }
  },
  methods: {
    async loadTransactionCodes() {
      this.loadingTransactionCodes = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/transaction-codes', {
          params: {
            includeInactive: false,
            // type: 'EXPENSE', // Filter only EXPENSE types for payments
            type: 'EXPENSE' // Filter only EXPENSE types for payments
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
    getTransactionCodeLabel(txnId) {
      const txn = this.transactionCodes.find(t => t.id === txnId);
      return txn ? `${txn.code} - ${txn.description}` : '';
    },
    async requestSequence() {
      try {
        const {
          data
        } = await this.$axios.get('/api/ap-invoices/sequence');
        if (data.success) {
          // Assign the generated invoice number to your form
          this.form.invoiceNumber = data.data.invoiceNumber;

          // Optional: Show success message
          this.$message.success(`Invoice number generated: ${data.data.invoiceNumber}`);
          return data.data.invoiceNumber;
        }
      } catch (error) {
        console.error('Error getting invoice sequence:', error);
        this.$message.error('Failed to generate invoice number');
        throw error;
      }
    },
    async initializeDialog() {
      this.clearErrors();
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          vendorInvoiceNumber: this.invoice.vendorInvoiceNumber,
          vendorId: this.invoice.vendorId,
          agencyId: this.invoice.agencyId,
          invoiceDate: this.invoice.invoiceDate ? this.invoice.invoiceDate.split('T')[0] : '',
          dueDate: this.invoice.dueDate ? this.invoice.dueDate.split('T')[0] : new Date().toISOString().split('T')[0],
          description: this.invoice.description || '',
          totalAmount: this.invoice.totalAmount,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          currencyId: this.invoice.currencyId,
          makerId: this.invoice.makerId,
          note: this.invoice.note || '',
          reason: ''
        };
        await this.loadLineItems(this.invoice.id);
      } else {
        this.resetForm();
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'LAK') || this.currencies.find(c => c.code === 'USD') || this.currencies[0];
          this.form.currencyId = defaultCurrency.id;
          this.selectedCurrency = defaultCurrency;
          this.form.exchangeRate = defaultCurrency.code === 'LAK' ? 1.0 : 1.0;
        }
        this.lineItems = [this.createEmptyLine()];
        this.requestSequence();
        this.loadTransactionCodes();
      }
      this.updateSelectedVendor();
      this.updateSelectedCurrency();
    },
    resetDialog() {
      this.resetForm();
      this.lineItems = [];
      this.selectedVendor = null;
      this.selectedCurrency = null;
      this.clearErrors();
      this.formLoading = false;
      this.saving = false;
      this.auditDialogVisible = false;
    },
    async loadLineItems(invoiceId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ap-invoices-lines/invoice/${invoiceId}`);
        this.lineItems = data.data || [this.createEmptyLine()];
        this.lineItems.forEach(line => {
          if (!line.tempId) line.tempId = this.nextTempId++;
          this.calculateLineTotal(line);
        });
      } catch (error) {
        console.error('Error loading line items:', error);
        this.lineItems = [this.createEmptyLine()];
      }
    },
    openAuditDialog() {
      if (this.form.id) this.auditDialogVisible = true;
    },
    closeAuditDialog() {
      this.auditDialogVisible = false;
    },
    getInvoiceInfo() {
      if (!this.invoice) return null;
      return {
        invoiceNumber: this.form.invoiceNumber,
        vendorInvoiceNumber: this.form.vendorInvoiceNumber,
        totalAmount: this.calculatedTotal,
        status: this.invoice.status
      };
    },
    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        DRglAccountId: null,
        CRglAccountId: null,
        txnId: null,
        discountRate: 0,
        discountAmount: 0,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0,
        note: ''
      };
    },
    addNewLine() {
      this.lineItems.push(this.createEmptyLine());
    },
    addMultipleLines(count) {
      for (let i = 0; i < count; i++) {
        this.lineItems.push(this.createEmptyLine());
      }
    },
    removeLine(index) {
      if (this.lineItems.length > 1) {
        this.lineItems.splice(index, 1);
        this.updateLineNumbers();
      }
    },
    updateLineNumbers() {
      this.lineItems.forEach((line, index) => {
        line.lineNumber = index + 1;
      });
    },
    calculateLineTotal(line) {
      const quantity = parseFloat(line.quantity) || 0;
      const unitPrice = parseFloat(line.unitPrice) || 0;
      const discountRate = parseFloat(line.discountRate) || 0;
      const taxRate = parseFloat(line.taxRate) || 0;
      const subtotal = quantity * unitPrice;
      const discountAmount = subtotal * (discountRate / 100);
      line.discountAmount = discountAmount;
      const afterDiscount = subtotal - discountAmount;
      const taxAmount = afterDiscount * (taxRate / 100);
      line.taxAmount = taxAmount;
      line.lineTotal = afterDiscount + taxAmount;
      this.calculateExchangeAmounts();
    },
    calculateExchangeAmounts() {
      this.clearFieldError('exchangeRate');
    },
    updateSelectedVendor() {
      if (this.form.agencyId && this.agencies.length > 0) {
        this.selectedVendor = this.agencies.find(v => v.id === this.form.agencyId);
      } else {
        this.selectedVendor = null;
      }
    },
    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
        if (this.selectedCurrency && this.selectedCurrency.code === 'LAK') {
          this.form.exchangeRate = 1.0;
        }
      } else {
        this.selectedCurrency = null;
      }
    },
    onVendorChange() {
      this.updateSelectedVendor();
      this.calculateDueDate();
      this.clearFieldError('agencyId');
    },
    onCurrencyChange() {
      this.updateSelectedCurrency();
      this.clearFieldError('currencyId');
      const selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
      if (selectedCurrency) {
        this.form.exchangeRate = selectedCurrency.rate || 1.0;
        this.calculateExchangeAmounts();
      }
    },
    calculateDueDate() {
      if (this.form.invoiceDate && this.selectedVendor) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(invoiceDate);
        const paymentTerms = this.selectedVendor.paymentTerms || this.selectedVendor.payment_terms || 30;
        dueDate.setDate(dueDate.getDate() + parseInt(paymentTerms));
        this.form.dueDate = dueDate.toISOString().split('T')[0];
      }
    },
    validateForm() {
      this.errors = {};
      if (!this.form.invoiceNumber) this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້';
      // if (!this.form.vendorInvoiceNumber)
      //   this.errors.vendorInvoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ'
      if (!this.form.agencyId) this.errors.agencyId = `ກະລຸນາເລືອກ${this.formLabel.vendor}`;
      if (!this.form.currencyId) this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
      if (!this.form.exchangeRate) this.errors.exchangeRate = 'ກະລຸນາໃສ່ອັດຕາແລກປ່ຽນ';else if (parseFloat(this.form.exchangeRate) <= 0) this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0';
      if (!this.form.invoiceDate) this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້';
      // if (!this.form.dueDate) this.errors.dueDate = 'ກະລຸນາໃສ່ວັນທີຄົບກຳນົດ'
      if (this.form.invoiceDate && this.form.dueDate) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(this.form.dueDate);
        if (dueDate <= invoiceDate) {
          this.errors.dueDate = 'ວັນທີຄົບກຳນົດຕ້ອງຫຼັງຈາກວັນທີໃບແຈ້ງໜີ້';
        }
      }
      if (this.lineItems.length === 0) {
        this.errors.lineItems = 'ກະລຸນາເພີ່ມລາຍການສິນຄ້າຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        for (let i = 0; i < this.lineItems.length; i++) {
          const line = this.lineItems[i];
          if (!line.description) this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ';
          if (!line.quantity || parseFloat(line.quantity) <= 0) this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0';
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0) this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ';
          // if (!line.DRglAccountId)
          //   this.errors[`line_${i}_DRglAccountId`] = 'ກະລຸນາເລືອກ DR Account'
          // if (!line.CRglAccountId)
          //   this.errors[`line_${i}_CRglAccountId`] = 'ກະລຸນາເລືອກ CR Account'
        }
      }
      if (this.isEdit && !this.form.reason) this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ';
      return Object.keys(this.errors).length === 0;
    },
    clearErrors() {
      this.errors = {};
    },
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field);
      }
    },
    handleSubmit() {
      var _this$user3;
      if (!this.validateForm()) return;
      this.saving = true;
      const formData = {
        ...this.form,
        makerId: this.form.makerId || ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.id),
        totalAmount: this.calculatedTotal,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          discountRate: parseFloat(line.discountRate) || 0,
          taxRate: parseFloat(line.taxRate) || 0
        }))
      };
      this.$emit('save', formData);
      this.saving = false;
    },
    handleOverlayClick() {
      if (!this.saving) this.handleClose();
    },
    handleClose() {
      this.$emit('close');
    },
    resetForm() {
      this.form = {
        id: null,
        invoiceNumber: '',
        vendorInvoiceNumber: '',
        vendorId: null,
        agencyId: '',
        invoiceDate: new Date().toISOString().split('T')[0],
        // Add this
        dueDate: '',
        description: '',
        totalAmount: '',
        exchangeRate: 1.0,
        currencyId: '',
        makerId: '',
        note: '',
        reason: ''
      };
    },
    formatCurrency(amount, currencyCode = 'USD') {
      const currency = currencyCode || 'USD';
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency === 'LAK' ? 'USD' : currency,
        minimumFractionDigits: currency === 'LAK' ? 0 : 2,
        maximumFractionDigits: currency === 'LAK' ? 0 : 2
      });
      if (currency === 'LAK') {
        return `₭${new Intl.NumberFormat('en-US').format(amount || 0)}`;
      }
      return formatter.format(amount || 0);
    },
    getStatusText(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        pending: 'ລໍຖ້າການອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        rejected: 'ປະຕິເສດ',
        paid: 'ຈ່າຍແລ້ວ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusMap[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/invoice/index.vue?vue&type=script&lang=js
 /* harmony default export */ var ap_invoicevue_type_script_lang_js = (invoicevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(797)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ap_invoicevue_type_script_lang_js,
  invoicevue_type_template_id_7625c714_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "7625c714",
  "86e34e32"
  
)

/* harmony default export */ var invoice = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54cfbc93_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(946);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54cfbc93_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54cfbc93_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54cfbc93_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54cfbc93_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ap-invoice-container[data-v-54cfbc93]{padding:20px}.v-card-title.primary[data-v-54cfbc93]{background:linear-gradient(45deg,#1976d2,#1565c0)}.text-caption[data-v-54cfbc93]{font-size:12px!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1502:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js
var VSimpleTable = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/ap/invoice/index.vue?vue&type=template&id=54cfbc93&scoped=true






















var invoicevue_type_template_id_54cfbc93_scoped_true_render = function render() {
  var _vm$invoiceDetails$ag, _vm$invoiceDetails$ag2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-file-invoice")]), _vm._v(" "), _c('span', [_vm._v("ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ (AP Invoice)")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "white",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.openDialog();
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n            ເພີ່ມໃໝ່\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "ສະຖານະ",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-flag"
    },
    on: {
      "change": _vm.onFilterChange
    },
    model: {
      value: _vm.statusFilter,
      callback: function ($$v) {
        _vm.statusFilter = $$v;
      },
      expression: "statusFilter"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.agencies,
      "item-text": "name",
      "item-value": "id",
      "label": "ຜູ້ຂາຍ",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-account"
    },
    on: {
      "change": _vm.fetchData
    },
    model: {
      value: _vm.filters.vendorId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "vendorId", $$v);
      },
      expression: "filters.vendorId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ວັນທີເລີ່ມຕົ້ນ",
      "type": "date",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "prepend-inner-icon": "mdi-calendar-start"
    },
    on: {
      "change": _vm.fetchData
    },
    model: {
      value: _vm.filters.startDate,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "startDate", $$v);
      },
      expression: "filters.startDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ວັນທີສິ້ນສຸດ",
      "type": "date",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "prepend-inner-icon": "mdi-calendar-end"
    },
    on: {
      "change": _vm.fetchData
    },
    model: {
      value: _vm.filters.endDate,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "endDate", $$v);
      },
      expression: "filters.endDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄົ້ນຫາ",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-magnify"
    },
    on: {
      "input": _vm.debounceSearch
    },
    model: {
      value: _vm.searchTerm,
      callback: function ($$v) {
        _vm.searchTerm = $$v;
      },
      expression: "searchTerm"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "1"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-refresh")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "mt-3"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-table")]), _vm._v(" "), _c('span', [_vm._v("ລາຍການໃບແຈ້ງໜີ້")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "outlined": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.pagination.totalItems) + " ລາຍການ\n          ")])], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.invoices,
      "loading": _vm.loading,
      "options": _vm.tableOptions,
      "server-items-length": _vm.pagination.totalItems,
      "footer-props": {
        'items-per-page-options': [10, 25, 50, 100]
      },
      "loading-text": "ກຳລັງໂຫຼດຂໍ້ມູນ...",
      "no-data-text": "ບໍ່ມີຂໍ້ມູນ"
    },
    on: {
      "update:options": function ($event) {
        _vm.tableOptions = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "item.invoiceNumber",
      fn: function ({
        item
      }) {
        return [_c('div', [_c('div', {
          staticClass: "font-weight-bold"
        }, [_vm._v(_vm._s(item.invoiceNumber))]), _vm._v(" "), _vm.isOverdue(item.dueDate) && item.status !== 'paid' ? _c(VChip["a" /* default */], {
          staticClass: "mt-1",
          attrs: {
            "x-small": "",
            "color": "error",
            "text-color": "white"
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "x-small": "",
            "left": ""
          }
        }, [_vm._v("mdi-alert")]), _vm._v("\n                ເກີນກຳນົດ\n              ")], 1) : _vm._e()], 1)];
      }
    }, {
      key: "item.vendorInvoiceNumber",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "text-caption"
        }, [_vm._v(_vm._s(item.vendorInvoiceNumber))])];
      }
    }, {
      key: "item.vendor",
      fn: function ({
        item
      }) {
        var _item$agency, _item$agency2;
        return [item.agency ? _c('div', [_c('div', {
          staticClass: "font-weight-medium"
        }, [_vm._v("\n                " + _vm._s(item.agency.agencyName) + "\n              ")]), _vm._v(" "), item.agency.agencyCode ? _c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("\n                " + _vm._s((_item$agency = item.agency) === null || _item$agency === void 0 ? void 0 : _item$agency.agencyType) + " -\n                " + _vm._s(((_item$agency2 = item.agency) === null || _item$agency2 === void 0 ? void 0 : _item$agency2.agencyName) || 'N/A') + "\n              ")]) : _vm._e()]) : _c('span', {
          staticClass: "grey--text text-caption"
        }, [_vm._v("ບໍ່ໄດ້ລະບຸ")])];
      }
    }, {
      key: "item.invoiceDate",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "text-caption"
        }, [_vm._v(_vm._s(_vm.formatDate(item.invoiceDate)))])];
      }
    }, {
      key: "item.dueDate",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "text-caption",
          class: {
            'error--text font-weight-bold': _vm.isOverdue(item.dueDate) && item.status !== 'paid'
          }
        }, [_vm._v("\n              " + _vm._s(_vm.formatDate(item.dueDate)) + "\n            ")])];
      }
    }, {
      key: "item.totalAmount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-right"
        }, [_c('div', {
          staticClass: "font-weight-bold"
        }, [_vm._v("\n                " + _vm._s(_vm.formatCurrency(item.totalAmount)) + "\n              ")]), _vm._v(" "), item.currency ? _c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("\n                " + _vm._s(item.currency.code) + "\n              ")]) : _vm._e()])];
      }
    }, {
      key: "item.paidAmount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-right success--text font-weight-medium"
        }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(item.paidAmount)) + "\n            ")])];
      }
    }, {
      key: "item.outstandingAmount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-right warning--text font-weight-bold"
        }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(_vm.getOutstandingAmount(item))) + "\n            ")])];
      }
    }, {
      key: "item.status",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": _vm.getStatusColor(item.status),
            "text-color": "white"
          }
        }, [_vm._v("\n              " + _vm._s(_vm.getStatusInLao(item.status)) + "\n            ")])];
      }
    }, {
      key: "item.maker",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "text-caption"
        }, [_vm._v("\n              " + _vm._s(item.maker ? item.maker.cus_name : 'N/A') + "\n            ")])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c(VMenu["a" /* default */], {
          attrs: {
            "bottom": "",
            "left": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on,
              attrs
            }) {
              return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
                attrs: {
                  "icon": "",
                  "small": ""
                }
              }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-dots-vertical")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c(VList["a" /* default */], {
          attrs: {
            "dense": ""
          }
        }, [_c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.viewDetails(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "info"
          }
        }, [_vm._v("mdi-eye")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ເບິ່ງລາຍລະອຽດ")])], 1), _vm._v(" "), ['draft', 'pending'].includes(item.status) ? _c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.openDialog(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "warning"
          }
        }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ແກ້ໄຂ")])], 1) : _vm._e(), _vm._v(" "), item.status === 'pending' ? _c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.approveInvoice(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "success"
          }
        }, [_vm._v("mdi-check")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ອະນຸມັດ")])], 1) : _vm._e(), _vm._v(" "), item.status !== 'cancelled' ? _c(VDivider["a" /* default */]) : _vm._e(), _vm._v(" "), item.status !== 'cancelled' ? _c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.cancelInvoice(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "error"
          }
        }, [_vm._v("mdi-close")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ຍົກເລີກ")])], 1) : _vm._e()], 1)], 1)];
      }
    }])
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c('APInvoiceDialog', {
    attrs: {
      "visible": _vm.showDialog,
      "invoice": _vm.selectedInvoice,
      "agencies": _vm.agencies,
      "currencies": _vm.currencies,
      "gl-accounts": _vm.glAccounts,
      "user": _vm.user
    },
    on: {
      "close": _vm.closeDialog,
      "save": _vm.saveInvoice
    }
  }), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.showDetailModal,
      callback: function ($$v) {
        _vm.showDetailModal = $$v;
      },
      expression: "showDetailModal"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n        ລາຍລະອຽດໃບແຈ້ງໜີ້\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": _vm.closeDetailModal
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_vm.detailLoading ? _c(VProgressLinear["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary"
    }
  }) : _vm.invoiceDetails ? _c('div', [_c(VSimpleTable["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c('tbody', [_c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ເລກທີໃບແຈ້ງໜີ້:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.invoiceDetails.invoiceNumber))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ເລກທີຜູ້ຂາຍ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.invoiceDetails.vendorInvoiceNumber))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຜູ້ຂາຍ:")]), _vm._v(" "), _c('td', [_vm._v("\n                  " + _vm._s((_vm$invoiceDetails$ag = _vm.invoiceDetails.agency) === null || _vm$invoiceDetails$ag === void 0 ? void 0 : _vm$invoiceDetails$ag.agencyType) + " -\n                  " + _vm._s(((_vm$invoiceDetails$ag2 = _vm.invoiceDetails.agency) === null || _vm$invoiceDetails$ag2 === void 0 ? void 0 : _vm$invoiceDetails$ag2.agencyName) || 'N/A') + "\n                ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ວັນທີໃບແຈ້ງໜີ້:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(_vm.invoiceDetails.invoiceDate)))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ວັນທີຄົບກຳນົດ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatDate(_vm.invoiceDetails.dueDate)))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຈຳນວນເງິນລວມ:")]), _vm._v(" "), _c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatCurrency(_vm.invoiceDetails.totalAmount)) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ສະຖານະ:")]), _vm._v(" "), _c('td', [_c(VChip["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": _vm.getStatusColor(_vm.invoiceDetails.status),
      "text-color": "white"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.getStatusInLao(_vm.invoiceDetails.status)) + "\n                  ")])], 1)]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຄຳອະທິບາຍ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.invoiceDetails.description || 'N/A'))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ໝາຍເຫດ:")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.invoiceDetails.note || 'N/A'))])])])])], 1) : _vm._e()], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/ap/invoice/index.vue?vue&type=template&id=54cfbc93&scoped=true

// EXTERNAL MODULE: ./components/accounting/ap/invoice/index.vue + 4 modules
var ap_invoice = __webpack_require__(1046);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/ap/invoice/index.vue?vue&type=script&lang=js


/* harmony default export */ var invoicevue_type_script_lang_js = ({
  name: 'APInvoiceManagement',
  components: {
    APInvoiceDialog: ap_invoice["default"]
  },
  data() {
    return {
      statusFilter: '',
      statusOptions: [{
        text: 'ຮ່າງ',
        value: 'draft'
      }, {
        text: 'ຄ້າງອະນຸມັດ',
        value: 'pending'
      }, {
        text: 'ອະນຸມັດແລ້ວ',
        value: 'approved'
      }, {
        text: 'ຊຳລະບາງສ່ວນ',
        value: 'partially_paid'
      }, {
        text: 'ຊຳລະແລ້ວ',
        value: 'paid'
      }, {
        text: 'ເກີນກຳນົດ',
        value: 'overdue'
      }, {
        text: 'ຍົກເລີກ',
        value: 'cancelled'
      }],
      statusLabels: {
        draft: 'ຮ່າງ',
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        partially_paid: 'ຊຳລະບາງສ່ວນ',
        paid: 'ຊຳລະແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ'
      },
      invoices: [],
      agencies: [],
      glAccounts: [],
      currencies: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 25,
        sortBy: [],
        sortDesc: []
      },
      filters: {
        status: '',
        vendorId: '',
        startDate: '',
        endDate: ''
      },
      searchTerm: '',
      loading: false,
      detailLoading: false,
      showDialog: false,
      showDetailModal: false,
      selectedInvoice: null,
      invoiceDetails: null,
      searchTimeout: null,
      headers: [{
        text: 'ເລກທີໃບແຈ້ງໜີ້',
        value: 'invoiceNumber',
        sortable: true,
        width: '150px'
      }, {
        text: 'ເລກທີຜູ້ຂາຍ',
        value: 'vendorInvoiceNumber',
        sortable: false,
        width: '120px'
      }, {
        text: 'ຜູ້ຂາຍ / Agency',
        value: 'vendor',
        sortable: false,
        width: '180px'
      }, {
        text: 'ວັນທີໃບແຈ້ງໜີ້',
        value: 'invoiceDate',
        sortable: true,
        width: '120px'
      }, {
        text: 'ວັນທີຄົບກຳນົດ',
        value: 'dueDate',
        sortable: true,
        width: '120px'
      }, {
        text: 'ຈຳນວນເງິນລວມ',
        value: 'totalAmount',
        sortable: true,
        align: 'end',
        width: '130px'
      }, {
        text: 'ຈຳນວນທີ່ຈ່າຍແລ້ວ',
        value: 'paidAmount',
        sortable: true,
        align: 'end',
        width: '130px'
      }, {
        text: 'ຍອດຄ້າງຈ່າຍ',
        value: 'outstandingAmount',
        sortable: false,
        align: 'end',
        width: '130px'
      }, {
        text: 'ສະຖານະ',
        value: 'status',
        sortable: true,
        width: '120px',
        align: 'center'
      }, {
        text: 'ຜູ້ລົງບັນຊີ',
        value: 'maker',
        sortable: false,
        width: '120px'
      }, {
        text: 'ຟັງຊັ່ນ',
        value: 'actions',
        sortable: false,
        width: '80px',
        align: 'center'
      }]
    };
  },
  computed: {
    user() {
      return this.$auth.user || null;
    }
  },
  watch: {
    tableOptions: {
      handler() {
        this.fetchData();
      },
      deep: true
    }
  },
  async mounted() {
    // Set default dates before loading data
    this.setDefaultDates();
    await this.loadInitialData();
  },
  methods: {
    // NEW METHOD: Get current month's first day
    getCurrentMonthStart() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      return new Date(year, month, 1).toISOString().split('T')[0];
    },
    // NEW METHOD: Get current month's last day
    getCurrentMonthEnd() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      return new Date(year, month + 1, 0).toISOString().split('T')[0];
    },
    // NEW METHOD: Set default dates for current month
    setDefaultDates() {
      this.filters.startDate = this.getCurrentMonthStart();
      this.filters.endDate = this.getCurrentMonthEnd();
    },
    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase();
    },
    getStatusColor(status) {
      const colors = {
        draft: 'grey',
        pending: 'orange',
        approved: 'green',
        partially_paid: 'blue',
        paid: 'teal',
        overdue: 'red',
        cancelled: 'grey darken-2'
      };
      return colors[status] || 'grey';
    },
    getOutstandingAmount(invoice) {
      return parseFloat(invoice.totalAmount || 0) - parseFloat(invoice.paidAmount || 0);
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    },
    async loadInitialData() {
      await Promise.all([
      // this.fetchVendors(),
      this.fetchAgencies(), this.fetchCurrencies(), this.fetchAccountCharts()]);
    },
    async fetchData() {
      this.loading = true;
      try {
        const params = {
          page: this.tableOptions.page,
          limit: this.tableOptions.itemsPerPage,
          ...this.filters
        };
        if (this.statusFilter) params.status = this.statusFilter;
        if (this.searchTerm) params.search = this.searchTerm;
        const {
          data
        } = await this.$axios.get('/api/ap-invoices', {
          params
        });
        this.invoices = data.data.invoices;
        this.pagination = data.data.pagination;
      } catch (error) {
        console.error(error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ');
      } finally {
        this.loading = false;
      }
    },
    // async fetchVendors() {
    //   try {
    //     const { data } = await this.$axios.get('/api/vendor/find')
    //     this.vendors = data || []
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    async fetchAgencies() {
      this.loadingAgencies = true;
      try {
        const response = await this.$axios.$get('/api/agency');
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies;
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data;
        }
      } catch (error) {
        console.error('Error fetching agencies:', error);
        this.$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ');
      } finally {
        this.loadingAgencies = false;
      }
    },
    async fetchCurrencies() {
      try {
        const {
          data
        } = await this.$axios.get('/api/currency/find');
        this.currencies = data || [];
      } catch (error) {
        console.error(error);
      }
    },
    async fetchAccountCharts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/accountChart/find');
        this.glAccounts = data || [];
      } catch (error) {
        console.error(error);
      }
    },
    openDialog(invoice = null) {
      this.selectedInvoice = invoice;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.selectedInvoice = null;
    },
    async viewDetails(invoice) {
      this.selectedInvoice = invoice;
      this.showDetailModal = true;
      this.detailLoading = true;
      try {
        const {
          data
        } = await this.$axios.get(`/api/ap-invoices/${invoice.id}`);
        this.invoiceDetails = data.data;
      } catch (error) {
        console.error(error);
        this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍລະອຽດໄດ້');
      } finally {
        this.detailLoading = false;
      }
    },
    closeDetailModal() {
      this.showDetailModal = false;
      this.invoiceDetails = null;
    },
    async saveInvoice(formData) {
      try {
        var _this$user;
        const auditContext = {
          reason: formData.reason || (formData.id ? 'Updated invoice' : 'Created new invoice'),
          userId: (_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id
        };
        if (formData.id) {
          await this.$axios.put(`/api/ap-invoices/${formData.id}`, {
            ...formData,
            ...auditContext
          });
          this.$toast.success('ອັບເດດສຳເລັດ');
        } else {
          await this.$axios.post('/api/ap-invoices', {
            ...formData,
            ...auditContext
          });
          this.$toast.success('ສ້າງສຳເລັດ');
        }
        this.closeDialog();
        await this.fetchData();
      } catch (error) {
        var _error$response, _error$response$data;
        console.error(error);
        this.$toast.error(((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ເກີດຂໍ້ຜິດພາດ');
      }
    },
    async approveInvoice(invoice) {
      try {
        const result = await Object(common["j" /* swalConfirm */])(this.$swal, 'ຢືນຢັນການອະນຸມັດ', `ທ່ານຕ້ອງການອະນຸມັດໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ແມ່ນບໍ່?`, 'question');
        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices/${invoice.id}/approve`, {
            checkerId: this.user.id,
            reason: 'Approved by manager'
          });
          this.$toast.success('ອະນຸມັດສຳເລັດ');
          await this.fetchData();
        }
      } catch (error) {
        console.error(error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ');
      }
    },
    async cancelInvoice(invoice) {
      try {
        const result = await Object(common["j" /* swalConfirm */])(this.$swal, 'ຢືນຢັນການຍົກເລີກ', `ທ່ານຕ້ອງການຍົກເລີກໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ແມ່ນບໍ່?`, 'warning');
        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices/${invoice.id}/cancel`, {
            reason: 'Cancelled by user'
          });
          this.$toast.success('ຍົກເລີກສຳເລັດ');
          await this.fetchData();
        }
      } catch (error) {
        console.error(error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ');
      }
    },
    onFilterChange() {
      this.filters.status = this.statusFilter;
      this.tableOptions.page = 1;
      this.fetchData();
    },
    resetFilters() {
      this.filters = {
        status: '',
        vendorId: '',
        startDate: this.getCurrentMonthStart(),
        endDate: this.getCurrentMonthEnd()
      };
      this.searchTerm = '';
      this.statusFilter = '';
      this.tableOptions.page = 1;
      this.fetchData();
    },
    debounceSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.tableOptions.page = 1;
        this.fetchData();
      }, 500);
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount || 0);
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('en-GB');
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/ap/invoice/index.vue?vue&type=script&lang=js
 /* harmony default export */ var ap_invoicevue_type_script_lang_js = (invoicevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/ap/invoice/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1237)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ap_invoicevue_type_script_lang_js,
  invoicevue_type_template_id_54cfbc93_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "54cfbc93",
  "11381a11"
  
)

/* harmony default export */ var admin_ap_invoice = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ap_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'AuditLogDialog',
  components: {
    AuditLogViewer: _components_accounting_ap_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoiceId: {
      type: [Number, String],
      default: null
    },
    invoiceInfo: {
      type: Object,
      default: null
    }
  },
  emits: ['close'],
  data() {
    return {
      auditLogs: [],
      isExporting: false,
      showExportOptions: false
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.handleClose();
    },
    onLogsLoaded(logs) {
      this.auditLogs = logs;
    },
    // Hide dropdown when clicking outside
    hideExportOptions() {
      this.showExportOptions = false;
    },
    handleOutsideClick(event) {
      var _this$$el;
      const exportDropdown = (_this$$el = this.$el) === null || _this$$el === void 0 ? void 0 : _this$$el.querySelector('.export-dropdown');
      if (exportDropdown && !exportDropdown.contains(event.target)) {
        this.showExportOptions = false;
      }
    },
    async exportAuditLog() {
      if (this.isExporting) return;
      try {
        var _this$$toast, _this$$toast2;
        this.isExporting = true;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານ...');

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF();
        } catch (jsPDFError) {
          console.warn('jsPDF not available, using HTML print method:', jsPDFError);
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານສຳເລັດ!');
      } catch (error) {
        var _this$$toast3;
        console.error('Error exporting audit log:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານໄດ້');
      } finally {
        this.isExporting = false;
      }
    },
    async exportWithJsPDF() {
      var _this$invoiceInfo;
      // Import jsPDF dynamically (requires: npm install jspdf)
      const {
        jsPDF
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 405, 7));

      // Create new PDF document
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້', 20, 20);

      // Add invoice info
      if (this.invoiceInfo) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`ເລກທີໃບແຈ້ງໜີ້: ${this.invoiceInfo.invoiceNumber}`, 20, 35);
        doc.text(`ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ: ${this.invoiceInfo.vendorInvoiceNumber}`, 20, 45);
        if (this.invoiceInfo.totalAmount) {
          doc.text(`ຍອດລວມ: ${this.formatCurrency(this.invoiceInfo.totalAmount)}`, 20, 55);
        }
      }

      // Add generation timestamp
      doc.setFontSize(10);
      doc.text(`ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}`, 20, 65);
      let yPosition = 80;

      // Add audit logs
      this.auditLogs.forEach((log, index) => {
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }

        // Log header
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}. ${this.getActionText(log.action)}`, 20, yPosition);

        // User and timestamp
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        yPosition += 10;
        doc.text(`ຜູ້ດຳເນີນການ: ${this.getUserName(log)}`, 25, yPosition);
        yPosition += 8;
        doc.text(`ເວລາ: ${this.formatDateTime(log.auditDate)}`, 25, yPosition);

        // Reason if exists
        if (log.reason) {
          yPosition += 8;
          doc.text(`ເຫດຜົນ: ${log.reason}`, 25, yPosition);
        }

        // Invoice data summary
        if (log.recordData) {
          yPosition += 8;
          doc.text(`ເລກທີໃບແຈ້ງໜີ້: ${log.recordData.invoiceNumber || '-'}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ຍອດເງິນ: ${this.formatCurrency(log.recordData.totalAmount)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ສະຖານະ: ${this.getStatusText(log.recordData.status)}`, 25, yPosition);
        }
        yPosition += 15;
      });

      // Create filename
      const filename = `audit-log-${((_this$invoiceInfo = this.invoiceInfo) === null || _this$invoiceInfo === void 0 ? void 0 : _this$invoiceInfo.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.pdf`;

      // Download PDF
      doc.save(filename);
    },
    exportWithPrintJS() {
      // Create HTML content for export
      const htmlContent = this.generateHTMLContent();

      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    },
    generateHTMLContent() {
      const logs = this.auditLogs.map((log, index) => `
        <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
          <h4 style="margin: 0 0 10px 0; color: #333;">${index + 1}. ${this.getActionText(log.action)}</h4>
          <p style="margin: 5px 0;"><strong>ຜູ້ດຳເນີນການ:</strong> ${this.getUserName(log)}</p>
          <p style="margin: 5px 0;"><strong>ເວລາ:</strong> ${this.formatDateTime(log.auditDate)}</p>
          ${log.reason ? `<p style="margin: 5px 0;"><strong>ເຫດຜົນ:</strong> ${log.reason}</p>` : ''}
          ${log.recordData ? `
            <div style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 3px;">
              <p style="margin: 3px 0;"><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${log.recordData.invoiceNumber || '-'}</p>
              <p style="margin: 3px 0;"><strong>ຍອດເງິນ:</strong> ${this.formatCurrency(log.recordData.totalAmount)}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(log.recordData.status)}</p>
            </div>
          ` : ''}
        </div>
      `).join('');
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້</title>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
            .invoice-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .timestamp { text-align: right; color: #666; font-size: 12px; margin-bottom: 20px; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້</h1>
          
          ${this.invoiceInfo ? `
            <div class="invoice-info">
              <p><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${this.invoiceInfo.invoiceNumber}</p>
              <p><strong>ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ:</strong> ${this.invoiceInfo.vendorInvoiceNumber}</p>
              ${this.invoiceInfo.totalAmount ? `<p><strong>ຍອດລວມ:</strong> ${this.formatCurrency(this.invoiceInfo.totalAmount)}</p>` : ''}
            </div>
          ` : ''}
          
          <div class="timestamp">ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}</div>
          
          <div class="audit-logs">
            ${logs}
          </div>
        </body>
        </html>
      `;
    },
    exportAsJSON() {
      this.showExportOptions = false;
      try {
        var _this$invoiceInfo2, _this$$toast4;
        const exportData = {
          invoiceInfo: this.invoiceInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map(log => {
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData5$vend, _log$recordData6, _log$recordData6$curr;
            return {
              id: log.id,
              action: this.getActionText(log.action),
              user: this.getUserName(log),
              email: this.getUserEmail(log),
              timestamp: log.auditDate,
              reason: log.reason,
              invoiceData: {
                invoiceNumber: (_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber,
                vendorInvoiceNumber: (_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.vendorInvoiceNumber,
                totalAmount: (_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.totalAmount,
                status: this.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status),
                vendor: (_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : (_log$recordData5$vend = _log$recordData5.vendor) === null || _log$recordData5$vend === void 0 ? void 0 : _log$recordData5$vend.name,
                currency: (_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : (_log$recordData6$curr = _log$recordData6.currency) === null || _log$recordData6$curr === void 0 ? void 0 : _log$recordData6$curr.code
              }
            };
          })
        };
        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], {
          type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `audit-log-${((_this$invoiceInfo2 = this.invoiceInfo) === null || _this$invoiceInfo2 === void 0 ? void 0 : _this$invoiceInfo2.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.success('ສົ່ງອອກ JSON ສຳເລັດ!');
      } catch (error) {
        var _this$$toast5;
        console.error('Error exporting JSON:', error);
        (_this$$toast5 = this.$toast) === null || _this$$toast5 === void 0 ? void 0 : _this$$toast5.error('ບໍ່ສາມາດສົ່ງອອກ JSON ໄດ້');
      }
    },
    exportAsCSV() {
      this.showExportOptions = false;
      try {
        var _this$invoiceInfo3, _this$$toast6;
        const headers = ['ລຳດັບ', 'ການດຳເນີນງານ', 'ຜູ້ດຳເນີນການ', 'ອີເມວ', 'ເວລາ', 'ເຫດຜົນ', 'ເລກທີໃບແຈ້ງໜີ້', 'ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ', 'ຍອດເງິນ', 'ສະຖານະ', 'ຜູ້ຂາຍ', 'ສະກຸນເງິນ'];
        const csvData = this.auditLogs.map((log, index) => {
          var _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData0, _log$recordData1, _log$recordData1$vend, _log$recordData10, _log$recordData10$cur;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', ((_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.invoiceNumber) || '', ((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.vendorInvoiceNumber) || '', ((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.totalAmount) || '', this.getStatusText((_log$recordData0 = log.recordData) === null || _log$recordData0 === void 0 ? void 0 : _log$recordData0.status) || '', ((_log$recordData1 = log.recordData) === null || _log$recordData1 === void 0 ? void 0 : (_log$recordData1$vend = _log$recordData1.vendor) === null || _log$recordData1$vend === void 0 ? void 0 : _log$recordData1$vend.name) || '', ((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : (_log$recordData10$cur = _log$recordData10.currency) === null || _log$recordData10$cur === void 0 ? void 0 : _log$recordData10$cur.code) || ''];
        });
        const csvContent = [headers, ...csvData].map(row => row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')).join('\n');

        // Add BOM for proper UTF-8 encoding
        const bom = '\uFEFF';
        const blob = new Blob([bom + csvContent], {
          type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `audit-log-${((_this$invoiceInfo3 = this.invoiceInfo) === null || _this$invoiceInfo3 === void 0 ? void 0 : _this$invoiceInfo3.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        (_this$$toast6 = this.$toast) === null || _this$$toast6 === void 0 ? void 0 : _this$$toast6.success('ສົ່ງອອກ CSV ສຳເລັດ!');
      } catch (error) {
        var _this$$toast7;
        console.error('Error exporting CSV:', error);
        (_this$$toast7 = this.$toast) === null || _this$$toast7 === void 0 ? void 0 : _this$$toast7.error('ບໍ່ສາມາດສົ່ງອອກ CSV ໄດ້');
      }
    },
    getUserEmail(log) {
      var _log$recordData11, _log$recordData11$mak, _log$user;
      return ((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : (_log$recordData11$mak = _log$recordData11.maker) === null || _log$recordData11$mak === void 0 ? void 0 : _log$recordData11$mak.cus_email) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.email) || '';
    },
    // Helper methods for PDF generation
    getActionText(action) {
      const actionMap = {
        CREATE: 'ສ້າງໃບແຈ້ງໜີ້',
        UPDATE: 'ອັບເດດໃບແຈ້ງໜີ້',
        DELETE: 'ລຶບໃບແຈ້ງໜີ້',
        APPROVE: 'ອະນຸມັດໃບແຈ້ງໜີ້',
        REJECT: 'ປະຕິເສດໃບແຈ້ງໜີ້'
      };
      return actionMap[action] || action;
    },
    getStatusText(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        pending: 'ລໍຖ້າການອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        rejected: 'ປະຕິເສດ',
        paid: 'ຈ່າຍແລ້ວ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusMap[status] || status;
    },
    getUserName(log) {
      var _log$recordData12, _log$recordData12$mak, _log$user2;
      return ((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : (_log$recordData12$mak = _log$recordData12.maker) === null || _log$recordData12$mak === void 0 ? void 0 : _log$recordData12$mak.cus_name) || ((_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.name) || 'ບໍ່ຮູ້ຈັກ';
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(402)["URL"]))

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(623);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("fedc07b4", content, true, context)
};

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(699);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4d4f5c3f", content, true, context)
};

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-log-viewer[data-v-074f3214]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-074f3214]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-074f3214]{align-items:center;display:flex;gap:8px}.filter-input[data-v-074f3214]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;padding:8px 12px}.filter-input[data-v-074f3214]:focus{border-color:#007bff;outline:none}.btn-clear[data-v-074f3214],.btn-search[data-v-074f3214]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-074f3214]{background:#007bff;color:#fff}.btn-clear[data-v-074f3214]{background:#6c757d;color:#fff}.loading[data-v-074f3214]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-074f3214]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-074f3214]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-074f3214]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-074f3214]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-074f3214]{background:#28a745}.dot-update[data-v-074f3214]{background:#007bff}.dot-delete[data-v-074f3214]{background:#dc3545}.dot-approve[data-v-074f3214]{background:#28a745}.dot-reject[data-v-074f3214]{background:#dc3545}.timeline-content[data-v-074f3214]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-074f3214]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-074f3214]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-074f3214]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-074f3214],.content-header[data-v-074f3214]{align-items:center;display:flex}.action-info[data-v-074f3214]{gap:12px}.action-badge[data-v-074f3214]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-074f3214]{background:#d4edda;color:#155724}.badge-update[data-v-074f3214]{background:#cce7ff;color:#004085}.badge-delete[data-v-074f3214]{background:#f8d7da;color:#721c24}.badge-approve[data-v-074f3214]{background:#d4edda;color:#155724}.badge-reject[data-v-074f3214]{background:#f8d7da;color:#721c24}.amount-change[data-v-074f3214]{background:#fff3cd;border-radius:4px;color:#856404;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-074f3214]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-074f3214]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-074f3214],.user-info[data-v-074f3214]{align-items:center;display:flex}.user-info[data-v-074f3214]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-074f3214]{color:#666;font-size:12px}.invoice-info[data-v-074f3214]{align-items:center;display:flex;font-size:14px;gap:12px}.invoice-number[data-v-074f3214]{color:#007bff;font-weight:600}.vendor-name[data-v-074f3214]{color:#666}.content-reason[data-v-074f3214]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-074f3214]{font-size:11px}.expand-indicator[data-v-074f3214]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-074f3214]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-074f3214]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:12px;gap:12px;margin-bottom:16px}.detail-item[data-v-074f3214]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-074f3214]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-074f3214]{color:#333;font-size:13px}.amount[data-v-074f3214]{color:#28a745;font-weight:600}.status[data-v-074f3214]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.status-draft[data-v-074f3214]{background:#e9ecef;color:#495057}.status-pending[data-v-074f3214]{background:#fff3cd;color:#856404}.status-approved[data-v-074f3214]{background:#d4edda;color:#155724}.status-paid[data-v-074f3214]{background:#cce7ff;color:#004085}.line-items-summary h4[data-v-074f3214]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.line-items[data-v-074f3214]{display:flex;flex-direction:column;gap:4px}.line-item[data-v-074f3214]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.item-desc[data-v-074f3214]{color:#333}.item-amount[data-v-074f3214]{color:#666;font-weight:500}.more-items[data-v-074f3214]{background:#f8f9fa;border-radius:4px;font-size:11px;padding:4px}.empty-state[data-v-074f3214],.more-items[data-v-074f3214]{color:#666;text-align:center}.empty-state[data-v-074f3214]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:48px 20px}.empty-state i[data-v-074f3214]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-074f3214]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-074f3214]{font-size:14px;margin:0}.pagination[data-v-074f3214]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-074f3214],.pagination[data-v-074f3214]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-074f3214]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-074f3214]:hover:not(:disabled){background:#f8f9fa;border-color:#007bff}.page-btn[data-v-074f3214]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-074f3214]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-074f3214]{padding:16px}.content-main[data-v-074f3214]{align-items:flex-start;flex-direction:column;gap:8px}.details-grid[data-v-074f3214]{grid-template-columns:1fr}.expanded-details[data-v-074f3214]{margin-left:0}.timeline-item[data-v-074f3214]:not(:last-child):before{display:none}.filter-group[data-v-074f3214]{flex-wrap:wrap}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/view/index.vue?vue&type=template&id=074f3214&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "audit-log-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-074f3214>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-074f3214>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-074f3214> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-074f3214> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.action,
      expression: "filters.action"
    }],
    staticClass: "filter-input",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "action", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Actions")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREATE"
    }
  }, [_vm._v("Created")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UPDATE"
    }
  }, [_vm._v("Updated")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DELETE"
    }
  }, [_vm._v("Deleted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "APPROVE"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REJECT"
    }
  }, [_vm._v("Rejected")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-074f3214><i class=\"fas fa-search\" data-v-074f3214></i></button> <button class=\"btn-clear\" data-v-074f3214><i class=\"fas fa-times\" data-v-074f3214></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-074f3214><i class=\"fas fa-spinner fa-spin\" data-v-074f3214></i>\n    Loading...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-074f3214>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData2$vend, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData9$curr, _log$recordData0, _log$recordData0$line;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-074f3214><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-074f3214><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-074f3214></i></div> <div class=\"timeline-content\" data-v-074f3214><div class=\"content-header\" data-v-074f3214><div class=\"action-info\" data-v-074f3214><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-074f3214><div class=\"user-info\" data-v-074f3214><i class=\"fas fa-user\" data-v-074f3214></i> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"invoice-info\" data-v-074f3214><span class=\"invoice-number\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber) || '-')) + "</span> <span class=\"vendor-name\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : (_log$recordData2$vend = _log$recordData2.vendor) === null || _log$recordData2$vend === void 0 ? void 0 : _log$recordData2$vend.name) || '-')) + "</span></div></div> " + (log.reason ? "<div class=\"content-reason\" data-v-074f3214><i class=\"fas fa-comment-alt\" data-v-074f3214></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-074f3214><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-074f3214></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-074f3214><div class=\"details-grid\" data-v-074f3214><div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Invoice #:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.invoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Vendor Invoice #:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.vendorInvoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Amount:</label> <span class=\"amount\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.totalAmount))) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.status}`) + " data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Due Date:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.dueDate))) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Currency:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : (_log$recordData9$curr = _log$recordData9.currency) === null || _log$recordData9$curr === void 0 ? void 0 : _log$recordData9$curr.code) || '-')) + "</span></div></div> " + ((_log$recordData0 = log.recordData) !== null && _log$recordData0 !== void 0 && (_log$recordData0$line = _log$recordData0.lineItems) !== null && _log$recordData0$line !== void 0 && _log$recordData0$line.length ? "<div class=\"line-items-summary\" data-v-074f3214><h4 data-v-074f3214>" + _vm._ssrEscape("Line Items (" + _vm._s(log.recordData.lineItems.length) + ")") + "</h4> <div class=\"line-items\" data-v-074f3214>" + _vm._ssrList(log.recordData.lineItems.slice(0, 3), function (item) {
      return "<div class=\"line-item\" data-v-074f3214><span class=\"item-desc\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(item.description)) + "</span> <span class=\"item-amount\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(item.lineTotal))) + "</span></div>";
    }) + " " + (log.recordData.lineItems.length > 3 ? "<div class=\"more-items\" data-v-074f3214>" + _vm._ssrEscape("\n              +" + _vm._s(log.recordData.lineItems.length - 3) + " more items\n            ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-074f3214><i class=\"fas fa-history\" data-v-074f3214></i> <h3 data-v-074f3214>No audit records found</h3> <p data-v-074f3214>No changes have been recorded for this invoice yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-074f3214><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-074f3214><i class=\"fas fa-chevron-left\" data-v-074f3214></i></button> <span class=\"page-info\" data-v-074f3214>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-074f3214><i class=\"fas fa-chevron-right\" data-v-074f3214></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue?vue&type=template&id=074f3214&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/view/index.vue?vue&type=script&lang=js
/* harmony default export */ var viewvue_type_script_lang_js = ({
  name: 'AuditLogViewer',
  props: {
    invoiceId: {
      type: [Number, String],
      default: null
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    showFilters: {
      type: Boolean,
      default: true
    }
  },
  emits: ['logs-loaded'],
  data() {
    return {
      loading: false,
      auditLogs: [],
      expandedId: null,
      filters: {
        dateFrom: '',
        dateTo: '',
        action: ''
      },
      pagination: {
        page: 1,
        limit: 10,
        total: 0,
        pages: 0
      }
    };
  },
  mounted() {
    if (this.autoLoad) {
      this.loadAuditLogs();
    }
  },
  watch: {
    invoiceId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      try {
        // Simulate API call - replace with actual endpoint
        const response = await this.$axios.get(`/api/ap-invoices/audit/${this.invoiceId}`, {
          params: {
            page,
            limit: this.pagination.limit,
            ...this.filters
          }
        });
        if (response.data.success) {
          this.auditLogs = this.processAuditLogs(response.data.data);
          this.pagination = response.data.pagination || {
            page: 1,
            limit: 10,
            total: this.auditLogs.length,
            pages: Math.ceil(this.auditLogs.length / 10)
          };
          this.$emit('logs-loaded', this.auditLogs);
        }
      } catch (error) {
        var _this$$toast;
        console.error('Error loading audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load audit logs');
      } finally {
        this.loading = false;
      }
    },
    processAuditLogs(logs) {
      return logs.map(log => {
        if (typeof log.recordData === 'string') {
          try {
            log.recordData = JSON.parse(log.recordData);
          } catch (e) {
            console.warn('Failed to parse recordData:', e);
          }
        }
        return log;
      }).sort((a, b) => new Date(b.auditDate) - new Date(a.auditDate));
    },
    toggleExpand(logId) {
      this.expandedId = this.expandedId === logId ? null : logId;
    },
    changePage(page) {
      if (page >= 1 && page <= this.pagination.pages) {
        this.loadAuditLogs(page);
      }
    },
    clearFilters() {
      this.filters = {
        dateFrom: '',
        dateTo: '',
        action: ''
      };
      this.loadAuditLogs();
    },
    showAmountChange(log, index) {
      var _prevLog$recordData, _log$recordData;
      if (log.action !== 'UPDATE' || index === this.auditLogs.length - 1) return false;
      const prevLog = this.auditLogs[index + 1];
      if (!prevLog || !((_prevLog$recordData = prevLog.recordData) !== null && _prevLog$recordData !== void 0 && _prevLog$recordData.totalAmount) || !((_log$recordData = log.recordData) !== null && _log$recordData !== void 0 && _log$recordData.totalAmount)) return false;
      return prevLog.recordData.totalAmount !== log.recordData.totalAmount;
    },
    getAmountChange(log, index) {
      var _log$recordData2, _prevLog$recordData2;
      const prevLog = this.auditLogs[index + 1];
      const current = ((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount) || 0;
      const previous = (prevLog === null || prevLog === void 0 ? void 0 : (_prevLog$recordData2 = prevLog.recordData) === null || _prevLog$recordData2 === void 0 ? void 0 : _prevLog$recordData2.totalAmount) || 0;
      const diff = current - previous;
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times'
      };
      return icons[action] || 'fas fa-circle';
    },
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected'
      };
      return actions[action] || action;
    },
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'pending': 'Pending',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled'
      };
      return statuses[status] || status;
    },
    getUserName(log) {
      var _log$recordData3, _log$recordData3$make, _log$user;
      return ((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : (_log$recordData3$make = _log$recordData3.maker) === null || _log$recordData3$make === void 0 ? void 0 : _log$recordData3$make.cus_name) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name) || 'Unknown';
    },
    formatTime(date) {
      if (!date) return '-';
      const now = new Date();
      const logDate = new Date(date);
      const diffHours = Math.abs(now - logDate) / (1000 * 60 * 60);
      if (diffHours < 24) {
        return logDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        });
      } else {
        return logDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });
      }
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US');
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue?vue&type=script&lang=js
 /* harmony default export */ var audit_viewvue_type_script_lang_js = (viewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(622)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "074f3214",
  "a9c014d2"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01076a4f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(592);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01076a4f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01076a4f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01076a4f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01076a4f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-dialog-overlay[data-v-01076a4f]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.audit-dialog[data-v-01076a4f]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.audit-dialog-header[data-v-01076a4f]{align-items:center;background:linear-gradient(135deg,primary,secondary);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-01076a4f]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.invoice-subtitle[data-v-01076a4f]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-01076a4f]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-01076a4f]:hover{background:hsla(0,0%,100%,.2)}.audit-dialog-body[data-v-01076a4f]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.audit-dialog-body[data-v-01076a4f]::-webkit-scrollbar{width:8px}.audit-dialog-body[data-v-01076a4f]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.audit-dialog-body[data-v-01076a4f]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.audit-dialog-body[data-v-01076a4f]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.audit-dialog-footer[data-v-01076a4f]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-01076a4f]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-01076a4f]{background:#667eea;color:#fff}.btn-primary[data-v-01076a4f]:hover{background:#5a6fd8;transform:translateY(-1px)}.btn-secondary[data-v-01076a4f]{background:#6c757d;color:#fff}.btn-secondary[data-v-01076a4f]:hover{background:#5a6268;transform:translateY(-1px)}@media (max-width:768px){.audit-dialog[data-v-01076a4f]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.audit-dialog-header[data-v-01076a4f]{padding:15px}.header-info h3[data-v-01076a4f]{font-size:18px}.audit-dialog-footer[data-v-01076a4f]{flex-direction:column;padding:15px}.btn[data-v-01076a4f]{justify-content:center;width:100%}}@media (max-width:480px){.audit-dialog-overlay[data-v-01076a4f]{padding:0}.audit-dialog-header[data-v-01076a4f]{align-items:flex-start;flex-direction:column;gap:10px;position:relative}.close-btn[data-v-01076a4f]{position:absolute;right:15px;top:15px}.header-info h3[data-v-01076a4f]{font-size:16px}.invoice-subtitle[data-v-01076a4f]{font-size:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(798);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7707a8cc", content, true, context)
};

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/index.vue?vue&type=template&id=01076a4f&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"audit-dialog\" data-v-01076a4f>", "</div>", [_vm._ssrNode("<div class=\"audit-dialog-header\" data-v-01076a4f><div class=\"header-info\" data-v-01076a4f><h3 data-v-01076a4f><i class=\"fas fa-history\" data-v-01076a4f></i>\n          ປະຫວັດການດຳເນີນງານ\n        </h3> " + (_vm.invoiceInfo ? "<p class=\"invoice-subtitle\" data-v-01076a4f>" + _vm._ssrEscape("\n          ໃບແຈ້ງໜີ້: " + _vm._s(_vm.invoiceInfo.invoiceNumber) + " -\n          " + _vm._s(_vm.invoiceInfo.vendorInvoiceNumber) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-01076a4f><i class=\"fas fa-times\" data-v-01076a4f></i></button></div> "), _vm._ssrNode("<div class=\"audit-dialog-body\" data-v-01076a4f>", "</div>", [_c('audit-log-viewer', {
    ref: "auditLogViewer",
    attrs: {
      "invoice-id": _vm.invoiceId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"audit-dialog-footer\" data-v-01076a4f><button type=\"button\" class=\"btn btn-secondary\" data-v-01076a4f><i class=\"fas fa-times\" data-v-01076a4f></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-01076a4f><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-01076a4f>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-01076a4f></i>" : "<i class=\"fas fa-download\" data-v-01076a4f></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-01076a4f><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-01076a4f><i class=\"fas fa-caret-down\" data-v-01076a4f></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-01076a4f><button class=\"dropdown-item\" data-v-01076a4f><i class=\"fas fa-code\" data-v-01076a4f></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-01076a4f><i class=\"fas fa-table\" data-v-01076a4f></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-01076a4f><i class=\"fas fa-print\" data-v-01076a4f></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue?vue&type=template&id=01076a4f&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/index.vue?vue&type=script&lang=js
var auditvue_type_script_lang_js = __webpack_require__(553);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue?vue&type=script&lang=js
 /* harmony default export */ var invoice_auditvue_type_script_lang_js = (auditvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(698)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_auditvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "01076a4f",
  "913d5c1a"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7625c714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(700);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7625c714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7625c714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7625c714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7625c714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-7625c714]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-7625c714],.modal-overlay[data-v-7625c714]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-7625c714]{background:#fff;flex-direction:column;overflow:hidden}.modal-header[data-v-7625c714]{background:linear-gradient(135deg,primary,secondary);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;min-height:50px;padding:12px 20px}.modal-header[data-v-7625c714],.modal-title[data-v-7625c714]{align-items:center;display:flex}.modal-title[data-v-7625c714]{font-size:16px;font-weight:600;gap:8px;margin:0}.close-button[data-v-7625c714]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;padding:4px;transition:background .2s}.close-button[data-v-7625c714]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-7625c714]{flex:1;overflow-y:auto}.loading-state[data-v-7625c714],.modal-body[data-v-7625c714]{display:flex;flex-direction:column}.loading-state[data-v-7625c714]{align-items:center;color:#666;justify-content:center;padding:30px}.spinner[data-v-7625c714]{animation:spin-7625c714 1s linear infinite;border:3px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:30px;margin-bottom:10px;width:30px}@keyframes spin-7625c714{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.invoice-form[data-v-7625c714]{display:flex;flex:1;flex-direction:column}.form-section[data-v-7625c714]{border-bottom:1px solid #f0f0f0;padding:15px 20px}.section-header[data-v-7625c714]{justify-content:space-between;margin-bottom:12px}.section-header[data-v-7625c714],.section-title[data-v-7625c714]{align-items:center;display:flex}.section-title[data-v-7625c714]{color:#333;font-size:14px;font-weight:600;gap:8px;margin:0}.section-title i[data-v-7625c714]{color:#667eea;font-size:13px}.line-count[data-v-7625c714]{background:#667eea;border-radius:10px;color:#fff;font-size:11px;margin-left:4px;min-width:20px;padding:2px 8px;text-align:center}.add-line-actions[data-v-7625c714]{align-items:center;display:flex;gap:6px}.form-grid[data-v-7625c714]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:12px;gap:12px;margin-top:12px}.span-2[data-v-7625c714]{grid-column:span 2}.form-group[data-v-7625c714]{margin-bottom:0}.form-group label[data-v-7625c714]{color:#333;display:block;font-size:12px;font-weight:500;margin-bottom:3px}.form-group label.required[data-v-7625c714]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-7625c714]{border:1px solid #ddd;border-radius:4px;font-size:12px;height:32px;padding:6px 8px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-7625c714]:focus{border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-7625c714]{border-color:#e74c3c;box-shadow:0 0 0 2px rgba(231,76,60,.1)}.form-control-xs[data-v-7625c714]{font-size:11px;height:28px;padding:4px 6px}.invalid-feedback[data-v-7625c714]{color:#e74c3c;display:block;font-size:10px;margin-top:2px;width:100%}.currency-info[data-v-7625c714]{color:#666;font-size:10px;font-weight:400}.exchange-display[data-v-7625c714]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:4px;margin-top:10px;padding:8px}.exchange-amount[data-v-7625c714]{align-items:center;display:flex;font-size:12px;font-weight:600;gap:8px;justify-content:center}.foreign-amount[data-v-7625c714]{color:#667eea}.exchange-arrow[data-v-7625c714]{color:#28a745;font-size:10px}.local-amount[data-v-7625c714]{color:#28a745}.empty-line-state[data-v-7625c714]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:6px;margin-top:12px;padding:30px 20px;text-align:center}.empty-content i[data-v-7625c714]{color:#dee2e6;font-size:40px;margin-bottom:12px}.empty-content h4[data-v-7625c714]{color:#666;font-size:15px;margin-bottom:8px}.line-items-table-container[data-v-7625c714]{border:1px solid #e9ecef;border-radius:6px;margin-top:12px;max-height:400px;overflow:hidden;overflow-y:auto}.line-items-table .table[data-v-7625c714]{border-collapse:collapse;font-size:11px;margin:0;width:100%}.line-items-table .table th[data-v-7625c714]{background:#f8f9fa;border-bottom:1px solid #dee2e6;font-size:10px;font-weight:600;padding:6px 4px;position:sticky;text-align:center;top:0;white-space:nowrap;z-index:10}.line-items-table .table td[data-v-7625c714]{border-top:1px solid #dee2e6;padding:4px;vertical-align:middle}.line-number[data-v-7625c714]{color:#666;text-align:center}.line-number[data-v-7625c714],.line-total[data-v-7625c714]{font-size:10px;font-weight:600}.line-total[data-v-7625c714]{color:#333;text-align:right}.line-row[data-v-7625c714]{transition:background-color .2s}.line-row[data-v-7625c714]:hover{background-color:rgba(102,126,234,.05)}.amount-summary[data-v-7625c714]{background:#f8f9fa;border-bottom:1px solid #f0f0f0;border-radius:0;border-top:2px solid #667eea;padding:12px 20px}.totals-grid[data-v-7625c714]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-gap:8px;gap:8px}.total-item[data-v-7625c714]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.total-item.grand-total[data-v-7625c714]{border-top:1px solid #667eea;font-size:13px;font-weight:600;grid-column:1/-1;margin-top:4px;padding-top:6px}.total-item .amount[data-v-7625c714]{color:#333;font-weight:600}.total-item .amount.discount[data-v-7625c714]{color:#e67e22}.total-item .amount.local[data-v-7625c714]{color:#28a745}.audit-trail-compact[data-v-7625c714]{background:#f8f9fa;border-bottom:1px solid #f0f0f0;border-radius:0;padding:12px 20px}.audit-header[data-v-7625c714]{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.audit-header h5[data-v-7625c714]{color:#333;font-size:13px;font-weight:600;margin:0}.btn-view-audit[data-v-7625c714]{align-items:center;background:#667eea;border:none;border-radius:4px;color:#fff;cursor:pointer;display:flex;font-size:11px;gap:4px;padding:4px 8px}.btn-view-audit[data-v-7625c714]:hover{background:#5a6fd8}.audit-summary[data-v-7625c714]{display:flex;flex-direction:column;gap:6px}.audit-item[data-v-7625c714]{align-items:center;color:#666;display:flex;font-size:11px;gap:6px}.audit-item i[data-v-7625c714]{color:#667eea;width:12px}.status-badge-container[data-v-7625c714]{text-align:right}.status-badge[data-v-7625c714]{border-radius:10px;font-size:10px;font-weight:600;padding:2px 6px;text-transform:uppercase}.status-badge.status-draft[data-v-7625c714]{background:#e9ecef;color:#6c757d}.status-badge.status-pending[data-v-7625c714]{background:#fff3cd;color:#856404}.status-badge.status-approved[data-v-7625c714]{background:#d1ecf1;color:#0c5460}.btn[data-v-7625c714]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:500;gap:4px;padding:6px 12px;transition:all .2s ease}.btn-primary[data-v-7625c714]{background:#007bff;color:#fff}.btn-secondary[data-v-7625c714]{background:#6c757d;color:#fff}.btn-danger[data-v-7625c714]{background:#dc3545;color:#fff}.btn[data-v-7625c714]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-7625c714]:disabled{cursor:not-allowed;opacity:.6;transform:none}.btn-sm[data-v-7625c714]{font-size:11px;padding:5px 10px}.btn-xs[data-v-7625c714]{align-items:center;border-radius:50%;display:flex;font-size:10px;height:24px;justify-content:center;padding:0;width:24px}.modal-footer[data-v-7625c714]{background:#f8f9fa;border-top:1px solid #e9ecef;min-height:56px;padding:12px 20px}.footer-actions[data-v-7625c714]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.form-grid[data-v-7625c714]{grid-template-columns:1fr}.span-2[data-v-7625c714]{grid-column:span 1}.totals-grid[data-v-7625c714]{grid-template-columns:1fr}.section-header[data-v-7625c714]{align-items:flex-start;flex-direction:column;gap:8px}.add-line-actions[data-v-7625c714]{justify-content:flex-start;width:100%}.line-items-table-container[data-v-7625c714]{overflow-x:auto}.line-items-table .table[data-v-7625c714]{min-width:700px}.footer-actions[data-v-7625c714]{flex-direction:column}.footer-actions .btn[data-v-7625c714]{justify-content:center;width:100%}}@media (max-width:480px){.modal-header[data-v-7625c714]{padding:10px 15px}.modal-title[data-v-7625c714]{font-size:14px}.form-section[data-v-7625c714]{padding:12px 15px}.amount-summary[data-v-7625c714],.audit-trail-compact[data-v-7625c714],.modal-footer[data-v-7625c714]{padding:10px 15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1238);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("288ddd60", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map