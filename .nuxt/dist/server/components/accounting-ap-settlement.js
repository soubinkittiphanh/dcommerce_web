exports.ids = [7,8,9,10,11];
exports.modules = {

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(412);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(360);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/index.vue?vue&type=template&id=2538d378&scoped=true

















var settlementvue_type_template_id_2538d378_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.handleOverlayClick.apply(null, arguments);
      }
    }
  }, [_vm._ssrNode("<div class=\"settlement-dialog\" data-v-2538d378>", "</div>", [_vm._ssrNode("<div class=\"dialog-header primary\" data-v-2538d378><h4 data-v-2538d378>" + _vm._ssrEscape(_vm._s(_vm.isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ສ້າງການຊຳລະໃໝ່')) + "</h4> <div class=\"header-actions\" data-v-2538d378>" + (_vm.isEditMode ? "<button type=\"button\" title=\"ເບິ່ງປະຫວັດການດຳເນີນງານ\" class=\"audit-btn\" data-v-2538d378><i class=\"fas fa-history\" data-v-2538d378></i> <span class=\"audit-text\" data-v-2538d378>ປະຫວັດ</span></button>" : "<!---->") + " <button class=\"close-btn\" data-v-2538d378><i class=\"fas fa-times\" data-v-2538d378></i></button></div></div> "), _vm._ssrNode("<div class=\"dialog-body\" data-v-2538d378>", "</div>", [_vm._ssrNode("<form data-v-2538d378>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-2538d378>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-2538d378><i class=\"fas fa-credit-card\" data-v-2538d378></i>\n            ຂໍ້ມູນການຊຳລະ\n          </h5> "), _vm._ssrNode("<div class=\"form-grid\" data-v-2538d378>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-2538d378><label data-v-2538d378>ວັນທີຊຳລະ <span class=\"required\" data-v-2538d378>*</span></label> <input type=\"date\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.settlementDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.settlementDate
  }) + " data-v-2538d378> " + (_vm.errors.settlementDate ? "<div class=\"invalid-feedback\" data-v-2538d378>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.settlementDate) + "\n              ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-2538d378>", "</div>", [_vm._ssrNode("<label for=\"paymentMethodId\" class=\"required\" data-v-2538d378>ວິທີການຊຳລະ</label> "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "id": "paymentMethodId",
      "items": _vm.paymentMethods,
      "item-value": "id",
      "item-text": "payment_name",
      "error": !!_vm.errors.paymentMethodId,
      "error-messages": _vm.errors.paymentMethodId,
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
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                      " + _vm._s(item.payment_name) + "\n                    ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                  " + _vm._s(item.payment_name) + "\n                ")];
      }
    }], null, false, 1116830248),
    model: {
      value: _vm.form.paymentMethodId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "paymentMethodId", $$v);
      },
      expression: "form.paymentMethodId"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-2538d378>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" class=\"required\" data-v-2538d378>ສະກຸນເງິນ</label> "), _c(VAutocomplete["a" /* default */], {
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
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                      " + _vm._s(item.name) + " (" + _vm._s(item.code) + ")\n                    ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                  " + _vm._s(item.name) + " (" + _vm._s(item.code) + ")\n                ")];
      }
    }], null, false, 4159868712),
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-2538d378><label for=\"exchangeRate\" class=\"required\" data-v-2538d378>\n                ອັດຕາແລກປ່ຽນ\n                " + (_vm.selectedCurrency ? "<span class=\"currency-info\" data-v-2538d378>" + _vm._ssrEscape("\n                  (" + _vm._s(_vm.selectedCurrency.code) + " ຕໍ່ LAK)\n                ") + "</span>" : "<!---->") + "</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-2538d378> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-2538d378>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.exchangeRate) + "\n              ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-2538d378>", "</div>", [_vm._ssrNode("<label for=\"bankAccountId\" data-v-2538d378>ບັນຊີທະນາຄານ</label> "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "id": "bankAccountId",
      "items": _vm.bankAccounts,
      "item-value": "id",
      "item-text": "accountNumber",
      "error": !!_vm.errors.bankAccountId,
      "error-messages": _vm.errors.bankAccountId,
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto",
      "placeholder": "ເລືອກບັນຊີທະນາຄານ"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                      " + _vm._s(item.accountNumber) + " - " + _vm._s(item.bankName) + "\n                    ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                  " + _vm._s(item.accountNumber) + " - " + _vm._s(item.bankName) + "\n                ")];
      }
    }], null, false, 3628226216),
    model: {
      value: _vm.form.bankAccountId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "bankAccountId", $$v);
      },
      expression: "form.bankAccountId"
    }
  })], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-2538d378><label data-v-2538d378>ອ້າງອີງ</label> <input type=\"text\" maxlength=\"100\" placeholder=\"ຫມາຍເລກອ້າງອີງ\"" + _vm._ssrAttr("value", _vm.form.reference) + " class=\"form-control\" data-v-2538d378></div> <div class=\"form-group span-2\" data-v-2538d378><label data-v-2538d378>ຄຳອະທິບາຍ</label> <textarea rows=\"2\" placeholder=\"ຄຳອະທິບາຍການຊຳລະ\" class=\"form-control\" data-v-2538d378>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-section\" data-v-2538d378>", "</div>", [_vm._ssrNode("<div class=\"section-header\" data-v-2538d378><h5 class=\"section-title\" data-v-2538d378><i class=\"fas fa-list\" data-v-2538d378></i>\n              ລາຍການຈັດສັນ\n            </h5> <div class=\"section-actions\" data-v-2538d378>" + (_vm.enableMOUbutton ? "<button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-info btn-sm\" data-v-2538d378><i class=\"fas fa-file-contract\" data-v-2538d378></i> ເພີ່ມຈາກ MOU\n              </button>" : "<!---->") + " <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-success btn-sm\" data-v-2538d378><i class=\"fas fa-plus\" data-v-2538d378></i> ເພີ່ມລາຍການ\n              </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-primary btn-sm\" data-v-2538d378><i class=\"fas fa-file-invoice\" data-v-2538d378></i> ເລືອກຈາກໃບແຈ້ງໜີ້\n              </button> <div class=\"allocation-info\" data-v-2538d378><span class=\"info-item\" data-v-2538d378>\n                  ຈັດສັນ:\n                  <strong data-v-2538d378>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.totalAllocated))) + "</strong></span></div></div></div> "), _vm.settlementLines.length === 0 ? _vm._ssrNode("<div class=\"no-invoices\" data-v-2538d378>", "</div>", [_vm._ssrNode("<i class=\"fas fa-clipboard-list\" data-v-2538d378></i> <p data-v-2538d378>ຍັງບໍ່ມີລາຍການຈັດສັນ</p> <div class=\"action-buttons\" data-v-2538d378>" + (_vm.enableMOUbutton ? "<button type=\"button\" class=\"btn btn-info btn-sm\" data-v-2538d378><i class=\"fas fa-file-contract\" data-v-2538d378></i> ເພີ່ມຈາກ MOU\n              </button>" : "<!---->") + " <button type=\"button\" class=\"btn btn-success btn-sm\" data-v-2538d378><i class=\"fas fa-plus-circle\" data-v-2538d378></i> ເພີ່ມລາຍການດ້ວຍມື\n              </button> <button type=\"button\" class=\"btn btn-primary btn-sm\" data-v-2538d378><i class=\"fas fa-file-invoice\" data-v-2538d378></i> ເລືອກຈາກໃບແຈ້ງໜີ້\n              </button></div>")], 2) : _vm._ssrNode("<div class=\"settlement-lines\" data-v-2538d378>", "</div>", [_vm._ssrNode("<div class=\"table-responsive\" data-v-2538d378>", "</div>", [_vm._ssrNode("<table class=\"table\" data-v-2538d378>", "</table>", [_vm._ssrNode("<thead data-v-2538d378><tr data-v-2538d378><th style=\"width: 20px\" data-v-2538d378>#</th> <th data-v-2538d378>ປະເພດ</th> <th data-v-2538d378>ເລກທີໃບແຈ້ງໜີ້</th> <th data-v-2538d378>" + _vm._ssrEscape(_vm._s(_vm.formLabel.vendor)) + "</th> <th data-v-2538d378>ລະຫັດການເງິນ <span class=\"required\" data-v-2538d378>*</span></th> <th data-v-2538d378>ຄຳອະທິບາຍ</th> <th class=\"text-right\" data-v-2538d378>ຈຳນວນເງິນ</th> <th class=\"text-center\" style=\"width: 40px\" data-v-2538d378>ລຶບ</th></tr></thead> "), _vm._ssrNode("<tbody data-v-2538d378>", "</tbody>", _vm._l(_vm.settlementLines, function (line, index) {
    var _line$agency, _line$agency2;
    return _vm._ssrNode("<tr data-v-2538d378>", "</tr>", [_vm._ssrNode("<td class=\"line-number\" data-v-2538d378>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-2538d378><span" + _vm._ssrClass(null, ['type-badge', line.type]) + " data-v-2538d378>" + _vm._ssrEscape("\n                        " + _vm._s(line.type === 'invoice' ? 'ໃບແຈ້ງໜີ້' : line.type === 'mou' ? 'MOU' : 'ດ້ວຍມື') + "\n                      ") + "</span></td> <td data-v-2538d378>" + (line.type === 'manual' ? "<input type=\"text\" placeholder=\"ເລກທີໃບແຈ້ງໜີ້\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + _vm._ssrAttr("value", line.invoiceNumber) + " class=\"form-control form-control-xs\" data-v-2538d378>" : "<span" + _vm._ssrAttr("title", line.invoiceNumber) + " class=\"text-truncate\" data-v-2538d378>" + _vm._ssrEscape("\n                        " + _vm._s(line.invoiceNumber || '-') + "\n                      ") + "</span>") + "</td> "), _vm._ssrNode("<td data-v-2538d378>", "</td>", [line.type === 'manual' ? _c(VAutocomplete["a" /* default */], {
      staticClass: "table-autocomplete",
      attrs: {
        "items": _vm.agencies,
        "item-value": "id",
        "item-text": "agencyName",
        "disabled": !_vm.canModifyAllocations,
        "dense": "",
        "outlined": "",
        "hide-details": "",
        "placeholder": _vm.formLabel.vendor
      },
      scopedSlots: _vm._u([{
        key: "item",
        fn: function ({
          item
        }) {
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                              " + _vm._s(item.agencyName) + " - " + _vm._s(item.agencyCode) + "\n                            ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                          " + _vm._s(item.agencyName) + " - " + _vm._s(item.agencyCode) + "\n                        ")];
        }
      }], null, true),
      model: {
        value: line.agencyId,
        callback: function ($$v) {
          _vm.$set(line, "agencyId", $$v);
        },
        expression: "line.agencyId"
      }
    }) : _c('span', {
      staticClass: "text-truncate",
      attrs: {
        "title": line.agencyName || ((_line$agency = line.agency) === null || _line$agency === void 0 ? void 0 : _line$agency.agencyName)
      }
    }, [_vm._v("\n                        " + _vm._s(line.agencyName || ((_line$agency2 = line.agency) === null || _line$agency2 === void 0 ? void 0 : _line$agency2.agencyName) || '-') + "\n                      ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<td data-v-2538d378>", "</td>", [_c(VAutocomplete["a" /* default */], {
      staticClass: "mt-0",
      attrs: {
        "items": _vm.transactionCodes.filter(t => (t.type === 'EXPENSE' || t.type != '1') && t.isActive),
        "item-value": "id",
        "item-text": "code",
        "label": _vm.loadingTransactionCodes ? 'ກຳລັງໂຫຼດ...' : 'ເລືອກລະຫັດການເງິນ',
        "loading": _vm.loadingTransactionCodes,
        "disabled": !_vm.canModifyAllocations || _vm.loadingTransactionCodes,
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
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                              " + _vm._s(item.code) + " - " + _vm._s(item.description) + "\n                            ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                          " + _vm._s(item.code) + " - " + _vm._s(item.description) + "\n                        ")];
        }
      }], null, true),
      model: {
        value: line.txnId,
        callback: function ($$v) {
          _vm.$set(line, "txnId", $$v);
        },
        expression: "line.txnId"
      }
    }), _vm._ssrNode(" " + (!line.txnId && _vm.errors.settlementLines ? "<small class=\"text-danger d-block mt-1\" data-v-2538d378>\n                        ກະລຸນາເລືອກລະຫັດການເງິນ\n                      </small>" : "<!---->"))], 2), _vm._ssrNode(" <td data-v-2538d378><input type=\"text\" placeholder=\"ຄຳອະທິບາຍ\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + _vm._ssrAttr("value", line.description) + " class=\"form-control form-control-xs\" data-v-2538d378></td> "), _vm.enableGL ? _vm._ssrNode("<td data-v-2538d378>", "</td>", [_c(VAutocomplete["a" /* default */], {
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
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                              " + _vm._s(item.accountNumber) + " -\n                              " + _vm._s(item.accountName) + "\n                            ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                          " + _vm._s(item.accountNumber) + " - " + _vm._s(item.accountName) + "\n                        ")];
        }
      }], null, true),
      model: {
        value: line.DRglAccountId,
        callback: function ($$v) {
          _vm.$set(line, "DRglAccountId", $$v);
        },
        expression: "line.DRglAccountId"
      }
    }), _vm._ssrNode(" " + (_vm.errors[`line_${index}_DRglAccountId`] ? "<small class=\"text-danger d-block mt-1\" data-v-2538d378>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.errors[`line_${index}_DRglAccountId`]) + "\n                      ") + "</small>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm.enableGL ? _vm._ssrNode("<td data-v-2538d378>", "</td>", [_c(VAutocomplete["a" /* default */], {
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
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                              " + _vm._s(item.accountNumber) + " -\n                              " + _vm._s(item.accountName) + "\n                            ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                          " + _vm._s(item.accountNumber) + " - " + _vm._s(item.accountName) + "\n                        ")];
        }
      }], null, true),
      model: {
        value: line.CRglAccountId,
        callback: function ($$v) {
          _vm.$set(line, "CRglAccountId", $$v);
        },
        expression: "line.CRglAccountId"
      }
    }), _vm._ssrNode(" " + (_vm.errors[`line_${index}_CRglAccountId`] ? "<small class=\"text-danger d-block mt-1\" data-v-2538d378>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.errors[`line_${index}_CRglAccountId`]) + "\n                      ") + "</small>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" <td data-v-2538d378><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + _vm._ssrAttr("value", line.amount) + " class=\"form-control form-control-xs text-right\" data-v-2538d378></td> <td class=\"text-center\" data-v-2538d378><button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " title=\"ລຶບລາຍການ\" class=\"btn btn-xs btn-danger\" data-v-2538d378><i class=\"fas fa-trash\" data-v-2538d378></i></button></td>")], 2);
  }), 0)], 2)]), _vm._ssrNode(" <div class=\"allocation-summary\" data-v-2538d378><div class=\"totals-inline\" data-v-2538d378><span class=\"total-item\" data-v-2538d378>\n                  ລວມຈຳນວນເງິນຊຳລະ:\n                  <strong data-v-2538d378>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.totalAllocated))) + "</strong></span></div></div>")], 2)], 2), _vm._ssrNode(" " + (_vm.showApprovalSection ? "<div class=\"form-section\" data-v-2538d378><h5 class=\"section-title\" data-v-2538d378><i class=\"fas fa-check-circle\" data-v-2538d378></i>\n            ການອະນຸມັດ\n          </h5> <div class=\"form-grid\" data-v-2538d378><div class=\"form-group\" data-v-2538d378><label data-v-2538d378>ຜູ້ອະນຸມັດ</label> <input type=\"text\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.checkerName) + " class=\"form-control\" data-v-2538d378></div> <div class=\"form-group\" data-v-2538d378><label data-v-2538d378>ໝາຍເຫດການອະນຸມັດ</label> <textarea rows=\"2\" placeholder=\"ໝາຍເຫດການອະນຸມັດ\"" + _vm._ssrAttr("disabled", !_vm.canApprove) + " class=\"form-control\" data-v-2538d378>" + _vm._ssrEscape(_vm._s(_vm.form.approvalNote)) + "</textarea></div></div></div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"dialog-footer\" data-v-2538d378><div class=\"footer-actions\" data-v-2538d378><button type=\"button\" class=\"btn btn-secondary\" data-v-2538d378><i class=\"fas fa-times\" data-v-2538d378></i> ຍົກເລີກ\n        </button> " + (_vm.canApprove && _vm.form.status === 'pending' ? "<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isSubmitting) + " class=\"btn btn-success\" data-v-2538d378><i class=\"fas fa-check\" data-v-2538d378></i> ອະນຸມັດ\n        </button>" : "<!---->") + " " + (_vm.canComplete && ['pending', 'approved'].includes(_vm.form.status) ? "<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isSubmitting) + " class=\"btn btn-info\" data-v-2538d378><i class=\"fas fa-check-circle\" data-v-2538d378></i> ສຳເລັດ\n        </button>" : "<!---->") + " <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.isSubmitting || !_vm.canModify) + " class=\"btn btn-primary\" data-v-2538d378><i class=\"fas fa-save\" data-v-2538d378></i>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isSubmitting ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button> " + (_vm.isEditMode ? "<button type=\"button\" class=\"btn btn-info\" data-v-2538d378><i class=\"fas fa-print\" data-v-2538d378></i> ພິມໃບສຳຄັນ\n        </button>" : "<!---->") + "</div></div>")], 2), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "900px",
      "persistent": "",
      "scrollable": ""
    },
    model: {
      value: _vm.showInvoiceSelector,
      callback: function ($$v) {
        _vm.showInvoiceSelector = $$v;
      },
      expression: "showInvoiceSelector"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', [_vm._v("ເລືອກໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": _vm.closeInvoiceSelector
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້",
      "outlined": "",
      "dense": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-magnify"
    },
    on: {
      "input": _vm.filterInvoices
    },
    model: {
      value: _vm.invoiceSearchTerm,
      callback: function ($$v) {
        _vm.invoiceSearchTerm = $$v;
      },
      expression: "invoiceSearchTerm"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.agencyFilterOptions,
      "item-text": "name",
      "item-value": "id",
      "label": "ຕົວແທນ",
      "outlined": "",
      "dense": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-account"
    },
    on: {
      "change": _vm.filterInvoices
    },
    model: {
      value: _vm.selectedAgencyFilter,
      callback: function ($$v) {
        _vm.selectedAgencyFilter = $$v;
      },
      expression: "selectedAgencyFilter"
    }
  })], 1)], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.invoiceTableHeaders,
      "items": _vm.filteredInvoices,
      "items-per-page": 10,
      "show-select": "",
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item.invoiceNumber",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "font-weight-medium"
        }, [_vm._v(_vm._s(item.invoiceNumber))])];
      }
    }, {
      key: "item.agency",
      fn: function ({
        item
      }) {
        return [_vm._v("\n            " + _vm._s(_vm.getAgencyName(item)) + "\n          ")];
      }
    }, {
      key: "item.dueDate",
      fn: function ({
        item
      }) {
        return [_vm._v("\n            " + _vm._s(_vm.formatDate(item.dueDate)) + "\n          ")];
      }
    }, {
      key: "item.outstandingAmount",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "font-weight-bold"
        }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(item.outstandingAmount)) + "\n            ")])];
      }
    }], null, false, 2481259708),
    model: {
      value: _vm.tempSelectedInvoices,
      callback: function ($$v) {
        _vm.tempSelectedInvoices = $$v;
      },
      expression: "tempSelectedInvoices"
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeInvoiceSelector
    }
  }, [_vm._v("ຍົກເລີກ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.confirmInvoiceSelection
    }
  }, [_vm._v("\n          ຢືນຢັນການເລືອກ (" + _vm._s(_vm.tempSelectedInvoices.length) + ")\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px",
      "persistent": "",
      "scrollable": ""
    },
    model: {
      value: _vm.showMOUDialog,
      callback: function ($$v) {
        _vm.showMOUDialog = $$v;
      },
      expression: "showMOUDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-file-contract")]), _vm._v(" "), _c('span', [_vm._v("Create Invoice from MOU")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": _vm.closeMOUDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pt-4"
  }, [_c('browse-mou-invoice-dialog', {
    attrs: {
      "visible": _vm.showMOUDialog
    },
    on: {
      "close": _vm.closeMOUDialog,
      "invoice-generated": _vm.onInvoiceGenerated
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c('settlement-audit-dialog', {
    attrs: {
      "visible": _vm.showAuditDialog,
      "settlement-id": _vm.form.id,
      "settlement-info": _vm.settlementInfoForAudit
    },
    on: {
      "close": _vm.closeAuditDialog
    }
  }), _vm._ssrNode(" "), _c('payment-voucher-printer', {
    attrs: {
      "visible": _vm.showVoucherPrinter,
      "voucher-data": _vm.selectedSettlement,
      "payment-methods": _vm.paymentMethods,
      "bank-accounts": _vm.bankAccounts,
      "transaction-codes": _vm.transactionCodes,
      "gl-accounts": _vm.glAccounts
    },
    on: {
      "close": function ($event) {
        _vm.showVoucherPrinter = false;
      }
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue?vue&type=template&id=2538d378&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(107);

// EXTERNAL MODULE: ./components/accounting/ap/settlement/audit/index.vue + 3 modules
var audit = __webpack_require__(718);

// EXTERNAL MODULE: ./components/accounting/ap/settlement/browsemou/index.vue + 4 modules
var browsemou = __webpack_require__(715);

// EXTERNAL MODULE: ./components/accounting/ap/settlement/voucher/index.vue + 4 modules
var voucher = __webpack_require__(716);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/index.vue?vue&type=script&lang=js
















/* harmony default export */ var settlementvue_type_script_lang_js = ({
  name: 'SettlementDialog',
  components: {
    SettlementAuditDialog: audit["default"],
    BrowseMouInvoiceDialog: browsemou["default"],
    PaymentVoucherPrinter: voucher["default"]
  },
  props: {
    glAccounts: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: false
    },
    settlement: {
      type: Object,
      default: null
    },
    outstandingInvoices: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showVoucherPrinter: false,
      selectedSettlement: null,
      transactionCodes: [],
      loadingTransactionCodes: false,
      form: {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        currencyId: null,
        paymentMethodId: '',
        exchangeRate: 1.0,
        bankAccountId: null,
        reference: '',
        description: '',
        status: 'draft',
        makerId: null,
        checkerId: null,
        approvalNote: ''
      },
      selectedCurrency: null,
      settlementLines: [],
      tempSelectedInvoices: [],
      paymentMethods: [],
      bankAccounts: [],
      agencies: [],
      errors: {},
      isSubmitting: false,
      showInvoiceSelector: false,
      showMOUDialog: false,
      showAuditDialog: false,
      invoiceSearchTerm: '',
      selectedAgencyFilter: '',
      filteredInvoices: [],
      lineIdCounter: 1,
      loadingAgencies: false,
      invoiceTableHeaders: [{
        text: 'ເລກທີໃບແຈ້ງໜີ້',
        value: 'invoiceNumber',
        sortable: true
      }, {
        text: 'ຕົວແທນ',
        value: 'agency',
        sortable: false
      }, {
        text: 'ວັນທີຄົບກຳນົດ',
        value: 'dueDate',
        sortable: true
      }, {
        text: 'ຍອດຄ້າງຈ່າຍ',
        value: 'outstandingAmount',
        sortable: true,
        align: 'end'
      }]
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
    enableMOUbutton() {
      const spf = this.getSPF.find(spf => spf.code === 'AC_AP_MOU_FETCH');
      return (spf === null || spf === void 0 ? void 0 : spf.value) === 'Y';
    },
    enableGL() {
      const spf = this.getSPF.find(spf => spf.code === 'AC_AP_GL_ENABLE');
      return (spf === null || spf === void 0 ? void 0 : spf.value) === 'Y';
    },
    getSPF() {
      return this.$store.getters.findSPF;
    },
    user() {
      return this.$auth.user || {};
    },
    isEditMode() {
      return !!(this.settlement && this.settlement.id);
    },
    canModify() {
      return ['draft', 'pending'].includes(this.form.status);
    },
    canModifyAllocations() {
      return this.canModify;
    },
    canApprove() {
      return this.user.canApproveSettlements && this.form.status === 'pending';
    },
    canComplete() {
      return this.user.canCompleteSettlements && ['pending', 'approved'].includes(this.form.status);
    },
    showApprovalSection() {
      return this.isEditMode && ['pending', 'approved', 'completed'].includes(this.form.status);
    },
    totalAllocated() {
      return this.settlementLines.reduce((sum, line) => sum + parseFloat(line.amount || 0), 0);
    },
    availableAgencies() {
      const agencyMap = new Map();
      this.outstandingInvoices.forEach(invoice => {
        const agency = invoice.agency || invoice.vendor;
        if (agency && !agencyMap.has(agency.id)) {
          agencyMap.set(agency.id, {
            id: agency.id,
            name: agency.name || agency.agencyName,
            code: agency.code || agency.agencyCode || agency.vendorCode
          });
        }
      });
      return Array.from(agencyMap.values());
    },
    agencyFilterOptions() {
      return [{
        id: '',
        name: 'ທຸກຕົວແທນ'
      }, ...this.availableAgencies];
    },
    makerName() {
      var _this$settlement;
      if (this.isEditMode && (_this$settlement = this.settlement) !== null && _this$settlement !== void 0 && _this$settlement.maker) {
        return this.settlement.maker.cus_name || this.settlement.maker.username;
      }
      return this.user.cus_name || this.user.username;
    },
    checkerName() {
      var _this$settlement2;
      if (this.isEditMode && (_this$settlement2 = this.settlement) !== null && _this$settlement2 !== void 0 && _this$settlement2.checker) {
        return this.settlement.checker.fullName || this.settlement.checker.username;
      }
      return '';
    },
    settlementInfoForAudit() {
      if (!this.isEditMode) return null;
      return {
        settlementId: this.form.id,
        paymentAmount: this.totalAllocated,
        settlementDate: this.form.settlementDate,
        status: this.form.status,
        reference: this.form.reference,
        description: this.form.description
      };
    },
    // New computed property for settlement summary
    settlementSummary() {
      return this.getSettlementSummary();
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) this.initializeDialog();
    },
    settlement: {
      handler(newVal) {
        if (newVal) this.loadSettlementData(newVal);
      },
      immediate: true
    },
    invoiceSearchTerm() {
      this.filterInvoices();
    },
    selectedAgencyFilter() {
      this.filterInvoices();
    }
  },
  async mounted() {
    await this.loadReferenceData();
    await this.loadTransactionCodes();
  },
  methods: {
    // =====================================================
    // PRINT AND VOUCHER METHODS
    // =====================================================
    printSettlement() {
      var _this$settlement3, _this$settlement4;
      if (!this.isEditMode) {
        var _this$$toast;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.warning('ກະລຸນາບັນທຶກການຊຳລະກ່ອນພິມ');
        return;
      }
      if (!this.settlementLines || this.settlementLines.length === 0) {
        var _this$$toast2;
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.warning('ບໍ່ມີລາຍການສຳລັບພິມ');
        return;
      }
      const settlementData = {
        id: this.form.id,
        settlementDate: this.form.settlementDate,
        paymentMethodId: this.form.paymentMethodId,
        currencyId: this.form.currencyId,
        exchangeRate: this.form.exchangeRate,
        bankAccountId: this.form.bankAccountId,
        reference: this.form.reference || '-',
        description: this.form.description || '',
        status: this.form.status,
        createdAt: ((_this$settlement3 = this.settlement) === null || _this$settlement3 === void 0 ? void 0 : _this$settlement3.createdAt) || new Date().toISOString(),
        approvedDate: ((_this$settlement4 = this.settlement) === null || _this$settlement4 === void 0 ? void 0 : _this$settlement4.approvedDate) || null,
        settlementLines: this.settlementLines.map(line => {
          var _line$agency;
          return {
            invoiceNumber: line.invoiceNumber || '-',
            lineNumber: line.lineNumber || null,
            agencyName: line.agencyName || ((_line$agency = line.agency) === null || _line$agency === void 0 ? void 0 : _line$agency.agencyName) || '-',
            description: line.description || '',
            amount: parseFloat(line.amount || 0),
            quantity: line.quantity || null,
            unitPrice: line.unitPrice || null,
            txnId: line.txnId,
            DRglAccountId: line.DRglAccountId,
            CRglAccountId: line.CRglAccountId,
            agency: line.agency || {
              agencyName: line.agencyName
            },
            lineItem: line.lineItem || null
          };
        }),
        maker: {
          cus_name: this.makerName
        },
        checker: {
          cus_name: this.checkerName
        }
      };
      this.selectedSettlement = settlementData;
      this.$nextTick(() => {
        this.showVoucherPrinter = true;
      });
    },
    // =====================================================
    // DATA LOADING METHODS
    // =====================================================
    async loadTransactionCodes() {
      this.loadingTransactionCodes = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/transaction-codes', {
          params: {
            includeInactive: false,
            type: 'EXPENSE'
          }
        });
        this.transactionCodes = data || [];
      } catch (error) {
        var _this$$toast3;
        console.error('Error loading transaction codes:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ໂຫລດລະຫັດການເງິນບໍ່ສຳເລັດ');
        this.transactionCodes = [];
      } finally {
        this.loadingTransactionCodes = false;
      }
    },
    async initializeDialog() {
      await this.loadReferenceData();
      if (this.settlement) {
        this.loadSettlementData(this.settlement);
      } else {
        this.resetForm();
      }
      this.filteredInvoices = [...this.outstandingInvoices];
    },
    async loadReferenceData() {
      try {
        await Promise.all([this.loadPaymentMethods(), this.loadBankAccounts(), this.fetchAgencies()]);
      } catch (error) {
        console.error('Error loading reference data:', error);
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
    async loadBankAccounts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/bank_account/find');
        this.bankAccounts = data || [];
      } catch (error) {
        console.error('Error loading bank accounts:', error);
        this.bankAccounts = [];
      }
    },
    async fetchAgencies() {
      this.loadingAgencies = true;
      try {
        var _response$data;
        const response = await this.$axios.$get('/api/agency');
        if (response.success && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.agencies) {
          this.agencies = response.data.agencies;
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data;
        }
      } catch (error) {
        var _this$$toast4;
        console.error('Error fetching agencies:', error);
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ');
      } finally {
        this.loadingAgencies = false;
      }
    },
    // =====================================================
    // FORM MANAGEMENT METHODS
    // =====================================================
    loadSettlementData(settlement) {
      this.form = {
        id: settlement.id,
        settlementDate: settlement.settlementDate || new Date().toISOString().split('T')[0],
        paymentMethodId: settlement.paymentMethodId ? Number(settlement.paymentMethodId) : '',
        currencyId: settlement.currencyId ? Number(settlement.currencyId) : '',
        exchangeRate: settlement.exchangeRate || 1.0,
        bankAccountId: settlement.bankAccountId ? Number(settlement.bankAccountId) : null,
        reference: settlement.reference || '',
        description: settlement.description || '',
        status: settlement.status || 'draft',
        makerId: settlement.makerId || this.user.id,
        checkerId: settlement.checkerId || null,
        approvalNote: settlement.approvalNote || ''
      };
      if (settlement.currencyId) {
        this.selectedCurrency = this.currencies.find(c => c.id === Number(settlement.currencyId));
      }
      if (settlement.invoiceSettlements) {
        this.settlementLines = settlement.invoiceSettlements.map(allocation => {
          var _lineItem, _lineItem2, _agency, _lineItem3, _lineItem4, _lineItem5, _lineItem6, _invoice;
          let invoice = null;
          let lineItem = null;
          let agency = null;
          let agencyName = '';
          let invoiceNumber = '';
          let invoiceId = null;

          // Check if this is an invoice line item settlement
          if (allocation.invoiceLineItem) {
            lineItem = allocation.invoiceLineItem;
            if (lineItem.invoice) {
              invoice = lineItem.invoice;
              invoiceId = invoice.id;
              invoiceNumber = invoice.invoiceNumber;
              agency = invoice.agency || invoice.vendor;
            }
          }

          // Get agency information
          if (allocation.agency) {
            agency = allocation.agency;
            agencyName = agency.agencyName || agency.name || '';
          } else if (allocation.applicant) {
            agencyName = allocation.applicant.name || '';
          } else if (agency) {
            agencyName = agency.agencyName || agency.name || '';
          }
          return {
            tempId: this.lineIdCounter++,
            type: allocation.type,
            agency,
            invoice,
            lineItem,
            invoiceId,
            lineItemId: ((_lineItem = lineItem) === null || _lineItem === void 0 ? void 0 : _lineItem.id) || null,
            invoiceNumber,
            lineNumber: ((_lineItem2 = lineItem) === null || _lineItem2 === void 0 ? void 0 : _lineItem2.lineNumber) || null,
            agencyId: allocation.agencyId || ((_agency = agency) === null || _agency === void 0 ? void 0 : _agency.id) || null,
            agencyName,
            applicantId: allocation.applicantId || null,
            DRglAccountId: allocation.DRglAccountId || null,
            CRglAccountId: allocation.CRglAccountId || null,
            description: allocation.description || '',
            amount: parseFloat(allocation.amount || 0),
            quantity: ((_lineItem3 = lineItem) === null || _lineItem3 === void 0 ? void 0 : _lineItem3.quantity) || null,
            unitPrice: ((_lineItem4 = lineItem) === null || _lineItem4 === void 0 ? void 0 : _lineItem4.unitPrice) || null,
            taxAmount: ((_lineItem5 = lineItem) === null || _lineItem5 === void 0 ? void 0 : _lineItem5.taxAmount) || 0,
            discountAmount: ((_lineItem6 = lineItem) === null || _lineItem6 === void 0 ? void 0 : _lineItem6.discountAmount) || 0,
            txnId: allocation.txnId || null,
            currencyId: ((_invoice = invoice) === null || _invoice === void 0 ? void 0 : _invoice.currencyId) || null
          };
        });
      }
    },
    resetForm() {
      this.form = {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        currencyId: '',
        paymentMethodId: '',
        exchangeRate: 1.0,
        bankAccountId: null,
        reference: '',
        description: '',
        status: 'draft',
        makerId: this.user.id,
        checkerId: null,
        approvalNote: ''
      };
      this.settlementLines = [];
      this.errors = {};
      this.lineIdCounter = 1;
      this.selectedCurrency = null;
    },
    // =====================================================
    // CURRENCY AND EXCHANGE RATE METHODS
    // =====================================================
    async onCurrencyChange() {
      console.info('Currency changing...');
      this.clearFieldError('currencyId');
      const selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
      if (selectedCurrency) {
        this.selectedCurrency = selectedCurrency;
        this.form.exchangeRate = selectedCurrency.rate || 1.0;
      }
      return Promise.resolve();
    },
    calculateExchangeAmounts() {
      this.clearFieldError('exchangeRate');
    },
    // =====================================================
    // SETTLEMENT LINES MANAGEMENT
    // =====================================================
    addManualLine() {
      this.settlementLines.push({
        tempId: this.lineIdCounter++,
        type: 'manual',
        invoiceId: null,
        lineItemId: null,
        invoiceNumber: '',
        lineNumber: null,
        agencyId: '',
        applicantId: null,
        DRglAccountId: null,
        CRglAccountId: null,
        agencyName: '',
        description: '',
        amount: 0,
        quantity: null,
        unitPrice: null,
        taxAmount: 0,
        discountAmount: 0,
        txnId: null,
        currencyId: this.form.currencyId
      });
    },
    removeLine(index) {
      this.settlementLines.splice(index, 1);
      this.calculateTotals();
    },
    removeSettlementLine(tempId) {
      const index = this.settlementLines.findIndex(line => line.tempId === tempId);
      if (index > -1) {
        var _this$$toast5;
        this.settlementLines.splice(index, 1);
        this.calculateTotals();
        (_this$$toast5 = this.$toast) === null || _this$$toast5 === void 0 ? void 0 : _this$$toast5.success('ລຶບລາຍການສຳເລັດ');
      }
    },
    calculateTotals() {
      // This will trigger the computed property recalculation
      this.$forceUpdate();
    },
    // =====================================================
    // INVOICE SELECTION AND PROCESSING
    // =====================================================
    async confirmInvoiceSelection() {
      if (this.tempSelectedInvoices.length === 0) {
        var _this$$toast6;
        (_this$$toast6 = this.$toast) === null || _this$$toast6 === void 0 ? void 0 : _this$$toast6.warning('ກະລຸນາເລືອກໃບແຈ້ງໜີ້');
        return;
      }
      try {
        var _this$$toast9;
        console.info(`SELECTED DATA ${JSON.stringify(this.tempSelectedInvoices)}`);

        // Populate header from first invoice if header is empty
        if (this.tempSelectedInvoices.length > 0 && !this.form.currencyId) {
          const firstInvoice = this.tempSelectedInvoices[0];
          if (firstInvoice.currencyId) {
            this.form.currencyId = Number(firstInvoice.currencyId);
            await this.onCurrencyChange();
          }
          if (firstInvoice.preferredPaymentMethodId) {
            this.form.paymentMethodId = Number(firstInvoice.preferredPaymentMethodId);
          }
        }

        // Process each selected invoice and its line items
        this.tempSelectedInvoices.forEach(invoice => {
          const agency = invoice.agency || invoice.vendor;

          // Check if invoice has line items
          if (invoice.lineItems && invoice.lineItems.length > 0) {
            // Create settlement lines for each invoice line item
            invoice.lineItems.forEach(lineItem => {
              // Check if this line item already exists
              const existingLine = this.settlementLines.find(line => line.invoiceId === invoice.id && line.lineItemId === lineItem.id);
              if (existingLine) {
                var _this$$toast7;
                (_this$$toast7 = this.$toast) === null || _this$$toast7 === void 0 ? void 0 : _this$$toast7.warning(`ໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ລາຍການ ${lineItem.lineNumber} ຖືກເພີ່ມແລ້ວ`);
                return;
              }

              // Create settlement line for each line item
              const newLine = {
                tempId: this.lineIdCounter++,
                type: 'invoice_line',
                invoiceId: invoice.id,
                lineItemId: lineItem.id,
                invoiceNumber: invoice.invoiceNumber,
                lineNumber: lineItem.lineNumber,
                agencyId: (agency === null || agency === void 0 ? void 0 : agency.id) || null,
                agencyName: (agency === null || agency === void 0 ? void 0 : agency.name) || (agency === null || agency === void 0 ? void 0 : agency.agencyName) || '',
                agency,
                description: `${invoice.invoiceNumber}-L${lineItem.lineNumber}: ${lineItem.description}`,
                amount: parseFloat(lineItem.lineTotal || 0),
                quantity: lineItem.quantity || 1,
                unitPrice: lineItem.unitPrice || 0,
                taxAmount: lineItem.taxAmount || 0,
                discountAmount: lineItem.discountAmount || 0,
                // GL Account Information from line item
                txnId: lineItem.txnId || invoice.defaultTxnId || null,
                DRglAccountId: lineItem.DRglAccountId || invoice.defaultDRglAccountId || null,
                CRglAccountId: lineItem.CRglAccountId || invoice.defaultCRglAccountId || null,
                // Additional line item details
                note: lineItem.note || null,
                taxRate: lineItem.taxRate || 0,
                discountRate: lineItem.discountRate || 0,
                // Store references for later use
                invoice,
                lineItem,
                // Currency information
                currencyId: invoice.currencyId,
                currency: invoice.currency
              };
              this.settlementLines.push(newLine);
            });
          } else {
            // Fallback: If no line items, create a single line for the invoice header
            const existingLine = this.settlementLines.find(line => line.invoiceId === invoice.id && !line.lineItemId);
            if (existingLine) {
              var _this$$toast8;
              (_this$$toast8 = this.$toast) === null || _this$$toast8 === void 0 ? void 0 : _this$$toast8.warning(`ໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ຖືກເພີ່ມແລ້ວ`);
              return;
            }
            const newLine = {
              tempId: this.lineIdCounter++,
              type: 'invoice_header',
              invoiceId: invoice.id,
              lineItemId: null,
              invoiceNumber: invoice.invoiceNumber,
              lineNumber: null,
              agencyId: (agency === null || agency === void 0 ? void 0 : agency.id) || null,
              agencyName: (agency === null || agency === void 0 ? void 0 : agency.name) || (agency === null || agency === void 0 ? void 0 : agency.agencyName) || '',
              agency,
              description: invoice.description || invoice.invoiceNumber,
              amount: parseFloat(invoice.outstandingAmount || 0),
              quantity: null,
              unitPrice: null,
              taxAmount: 0,
              discountAmount: 0,
              // GL Account Information from invoice
              txnId: invoice.defaultTxnId || null,
              DRglAccountId: invoice.defaultDRglAccountId || null,
              CRglAccountId: invoice.defaultCRglAccountId || null,
              // Store invoice reference
              invoice,
              lineItem: null,
              // Currency information
              currencyId: invoice.currencyId,
              currency: invoice.currency
            };
            this.settlementLines.push(newLine);
          }
        });

        // Calculate total lines added
        const totalLinesAdded = this.tempSelectedInvoices.reduce((total, invoice) => {
          var _invoice$lineItems;
          return total + (((_invoice$lineItems = invoice.lineItems) === null || _invoice$lineItems === void 0 ? void 0 : _invoice$lineItems.length) || 1);
        }, 0);

        // Show success message
        (_this$$toast9 = this.$toast) === null || _this$$toast9 === void 0 ? void 0 : _this$$toast9.success(`ເພີ່ມ ${totalLinesAdded} ລາຍການສຳເລັດ ຈາກ ${this.tempSelectedInvoices.length} ໃບແຈ້ງໜີ້`);

        // Auto-populate description if empty
        if (!this.form.description && this.tempSelectedInvoices.length > 0) {
          const invoiceNumbers = this.tempSelectedInvoices.map(inv => inv.invoiceNumber).join(', ');
          this.form.description = `ຊຳລະໃບແຈ້ງໜີ້: ${invoiceNumbers}`;
        }
        this.calculateTotals();
        this.closeInvoiceSelector();
      } catch (error) {
        var _this$$toast0;
        console.error('Error adding invoice line items:', error);
        (_this$$toast0 = this.$toast) === null || _this$$toast0 === void 0 ? void 0 : _this$$toast0.error('ເກີດຂໍ້ຜິດພາດໃນການເພີ່ມລາຍການໃບແຈ້ງໜີ້');
      }
    },
    // =====================================================
    // INVOICE FILTERING AND SEARCH
    // =====================================================
    filterInvoices() {
      let filtered = [...this.outstandingInvoices];
      if (this.invoiceSearchTerm) {
        const search = this.invoiceSearchTerm.toLowerCase();
        filtered = filtered.filter(invoice => {
          const agency = invoice.agency || invoice.vendor;
          const agencyName = (agency === null || agency === void 0 ? void 0 : agency.name) || (agency === null || agency === void 0 ? void 0 : agency.agencyName) || '';
          return invoice.invoiceNumber.toLowerCase().includes(search) || agencyName.toLowerCase().includes(search);
        });
      }
      if (this.selectedAgencyFilter) {
        filtered = filtered.filter(invoice => {
          const agency = invoice.agency || invoice.vendor;
          return (agency === null || agency === void 0 ? void 0 : agency.id) === this.selectedAgencyFilter;
        });
      }
      this.filteredInvoices = filtered;
    },
    closeInvoiceSelector() {
      this.showInvoiceSelector = false;
      this.tempSelectedInvoices = [];
      this.invoiceSearchTerm = '';
      this.selectedAgencyFilter = '';
      this.filteredInvoices = [...this.outstandingInvoices];
    },
    // =====================================================
    // DIALOG MANAGEMENT METHODS
    // =====================================================
    openAuditDialog() {
      if (!this.isEditMode) {
        var _this$$toast1;
        (_this$$toast1 = this.$toast) === null || _this$$toast1 === void 0 ? void 0 : _this$$toast1.warning('ບໍ່ສາມາດເບິ່ງປະຫວັດການດຳເນີນງານໄດ້ ເນື່ອງຈາກຍັງບໍ່ໄດ້ບັນທຶກການຊຳລະ');
        return;
      }
      this.showAuditDialog = true;
    },
    closeAuditDialog() {
      this.showAuditDialog = false;
    },
    openMOUDialog() {
      this.showMOUDialog = true;
    },
    closeMOUDialog() {
      this.showMOUDialog = false;
    },
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    // =====================================================
    // MOU INVOICE GENERATION
    // =====================================================
    onInvoiceGenerated(invoiceData) {
      var _invoiceData$lines, _this$$toast11;
      if (!(invoiceData !== null && invoiceData !== void 0 && (_invoiceData$lines = invoiceData.lines) !== null && _invoiceData$lines !== void 0 && _invoiceData$lines.length)) {
        var _this$$toast10;
        (_this$$toast10 = this.$toast) === null || _this$$toast10 === void 0 ? void 0 : _this$$toast10.error('No invoice lines received');
        return;
      }
      const mouInfo = invoiceData.mouInfo || {};
      const batchInfo = invoiceData.batchInfo || {};
      invoiceData.lines.forEach(line => {
        const description = `${mouInfo.jobCode || 'MOU'} | ${batchInfo.runningNo || 'Batch'} | ${invoiceData.agencyCode || 'Agency'} | ${line.applicantName} (${line.passportNo})`;
        this.settlementLines.push({
          tempId: this.lineIdCounter++,
          type: 'mou',
          invoiceId: null,
          lineItemId: null,
          invoiceNumber: invoiceData.invoiceNumber || '',
          lineNumber: null,
          agencyId: invoiceData.agencyId || null,
          applicantId: line.applicantId || null,
          DRglAccountId: null,
          CRglAccountId: null,
          agencyName: `${invoiceData.agencyName} (${invoiceData.agencyCode})`,
          description,
          amount: parseFloat(line.amount || 0),
          quantity: 1,
          unitPrice: parseFloat(line.amount || 0),
          taxAmount: 0,
          discountAmount: 0,
          txnId: null,
          currencyId: this.form.currencyId
        });
      });
      (_this$$toast11 = this.$toast) === null || _this$$toast11 === void 0 ? void 0 : _this$$toast11.success(`Added ${invoiceData.lines.length} MOU lines to settlement`);
      this.closeMOUDialog();
    },
    // =====================================================
    // VALIDATION AND FORM SUBMISSION
    // =====================================================
    validateForm() {
      var _this$form$reference;
      this.errors = {};

      // Basic validations
      if (!this.form.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີຊຳລະ';
      }
      if (this.totalAllocated <= 0) {
        this.errors.paymentAmount = 'ກະລຸນາເພີ່ມລາຍການຈັດສັນ';
      }
      if (!this.form.paymentMethodId) {
        this.errors.paymentMethodId = 'ກະລຸນາເລືອກວິທີການຊຳລະ';
      }
      if (!this.form.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
      }
      if (((_this$form$reference = this.form.reference) === null || _this$form$reference === void 0 ? void 0 : _this$form$reference.length) > 100) {
        this.errors.reference = 'ຫມາຍເລກອ້າງອີງຍາວເກີນ 100 ຕົວອັກສອນ';
      }

      // Validate settlement lines
      let hasLineErrors = false;
      this.settlementLines.forEach((line, index) => {
        if (!line.txnId) {
          var _this$$toast12;
          hasLineErrors = true;
          (_this$$toast12 = this.$toast) === null || _this$$toast12 === void 0 ? void 0 : _this$$toast12.error(`ລາຍການທີ ${index + 1}: ກະລຸນາເລືອກລະຫັດການເງິນ`);
        }
        if (!line.amount || line.amount <= 0) {
          var _this$$toast13;
          hasLineErrors = true;
          (_this$$toast13 = this.$toast) === null || _this$$toast13 === void 0 ? void 0 : _this$$toast13.error(`ລາຍການທີ ${index + 1}: ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ`);
        }
        if (line.type === 'manual' && !line.agencyId) {
          var _this$$toast14;
          hasLineErrors = true;
          (_this$$toast14 = this.$toast) === null || _this$$toast14 === void 0 ? void 0 : _this$$toast14.error(`ລາຍການທີ ${index + 1}: ກະລຸນາເລືອກ${this.formLabel.vendor}`);
        }
      });
      if (hasLineErrors) {
        this.errors.settlementLines = 'ກະລຸນາກວດສອບລາຍການຈັດສັນໃຫ້ຄົບຖ້ວນ';
      }
      return Object.keys(this.errors).length === 0 && !hasLineErrors;
    },
    async submitForm() {
      if (!this.validateForm()) return;
      this.isSubmitting = true;
      try {
        const formData = {
          ...this.form,
          paymentAmount: this.totalAllocated,
          baseAmount: this.totalAllocated,
          makerId: this.form.makerId || this.user.id,
          exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
          settlementLines: this.settlementLines.map(line => ({
            type: line.type,
            invoiceId: line.invoiceId,
            lineItemId: line.lineItemId,
            // Include line item ID
            invoiceNumber: line.invoiceNumber,
            lineNumber: line.lineNumber,
            // Include line number
            agencyId: line.agencyId,
            applicantId: line.applicantId,
            DRglAccountId: line.DRglAccountId || null,
            CRglAccountId: line.CRglAccountId || null,
            description: line.description,
            amount: parseFloat(line.amount || 0),
            quantity: line.quantity || null,
            unitPrice: line.unitPrice || null,
            taxAmount: line.taxAmount || 0,
            discountAmount: line.discountAmount || 0,
            txnId: line.txnId,
            currencyId: line.currencyId || this.form.currencyId
          }))
        };
        this.$emit('save', formData);
      } catch (error) {
        var _this$$toast15;
        console.error('Error submitting form:', error);
        (_this$$toast15 = this.$toast) === null || _this$$toast15 === void 0 ? void 0 : _this$$toast15.error('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ');
      } finally {
        this.isSubmitting = false;
      }
    },
    // =====================================================
    // APPROVAL WORKFLOW METHODS
    // =====================================================
    async approveSettlement() {
      if (!this.canApprove) return;
      this.isSubmitting = true;
      try {
        this.$emit('approve', {
          id: this.form.id,
          status: 'approved',
          checkerId: this.user.id,
          approvalNote: this.form.approvalNote
        });
      } catch (error) {
        var _this$$toast16;
        console.error('Error approving settlement:', error);
        (_this$$toast16 = this.$toast) === null || _this$$toast16 === void 0 ? void 0 : _this$$toast16.error('ເກີດຂໍ້ຜິດພາດໃນການອະນຸມັດ');
      } finally {
        this.isSubmitting = false;
      }
    },
    async completeSettlement() {
      if (!this.canComplete) return;
      this.isSubmitting = true;
      try {
        this.$emit('complete', {
          id: this.form.id,
          status: 'completed'
        });
      } catch (error) {
        var _this$$toast17;
        console.error('Error completing settlement:', error);
        (_this$$toast17 = this.$toast) === null || _this$$toast17 === void 0 ? void 0 : _this$$toast17.error('ເກີດຂໍ້ຜິດພາດໃນການປິດງານ');
      } finally {
        this.isSubmitting = false;
      }
    },
    // =====================================================
    // UTILITY AND HELPER METHODS
    // =====================================================
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field);
      }
    },
    getAgencyName(invoice) {
      const agency = invoice.agency || invoice.vendor;
      return (agency === null || agency === void 0 ? void 0 : agency.name) || (agency === null || agency === void 0 ? void 0 : agency.agencyName) || 'N/A';
    },
    getTransactionCodeLabel(txnId) {
      const txn = this.transactionCodes.find(t => t.id === txnId);
      return txn ? `${txn.code} - ${txn.description}` : '';
    },
    // Helper method to get settlement lines summary
    getSettlementSummary() {
      const summary = {
        totalLines: this.settlementLines.length,
        totalAmount: 0,
        byInvoice: {},
        byAgency: {},
        byTxnType: {},
        byType: {}
      };
      this.settlementLines.forEach(line => {
        summary.totalAmount += parseFloat(line.amount) || 0;

        // Group by invoice
        if (line.invoiceNumber) {
          const invoiceKey = line.invoiceNumber;
          if (!summary.byInvoice[invoiceKey]) {
            summary.byInvoice[invoiceKey] = {
              lines: 0,
              amount: 0
            };
          }
          summary.byInvoice[invoiceKey].lines++;
          summary.byInvoice[invoiceKey].amount += parseFloat(line.amount) || 0;
        }

        // Group by agency
        const agencyKey = line.agencyName || 'Unknown';
        if (!summary.byAgency[agencyKey]) {
          summary.byAgency[agencyKey] = {
            lines: 0,
            amount: 0
          };
        }
        summary.byAgency[agencyKey].lines++;
        summary.byAgency[agencyKey].amount += parseFloat(line.amount) || 0;

        // Group by transaction type
        const txnKey = line.txnId || 'No TxnId';
        if (!summary.byTxnType[txnKey]) {
          summary.byTxnType[txnKey] = {
            lines: 0,
            amount: 0
          };
        }
        summary.byTxnType[txnKey].lines++;
        summary.byTxnType[txnKey].amount += parseFloat(line.amount) || 0;

        // Group by settlement type
        const typeKey = line.type || 'unknown';
        if (!summary.byType[typeKey]) {
          summary.byType[typeKey] = {
            lines: 0,
            amount: 0
          };
        }
        summary.byType[typeKey].lines++;
        summary.byType[typeKey].amount += parseFloat(line.amount) || 0;
      });
      return summary;
    },
    // =====================================================
    // FORMATTING METHODS
    // =====================================================
    formatCurrency(amount) {
      if (!this.selectedCurrency) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(amount || 0);
      }
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.selectedCurrency.code || 'USD'
      }).format(amount || 0);
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('en-GB');
    },
    formatPrice(amount) {
      var _this$selectedCurrenc;
      return new Intl.NumberFormat('lo-LA', {
        style: 'currency',
        currency: ((_this$selectedCurrenc = this.selectedCurrency) === null || _this$selectedCurrenc === void 0 ? void 0 : _this$selectedCurrenc.code) || 'LAK'
      }).format(amount || 0);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue?vue&type=script&lang=js
 /* harmony default export */ var ap_settlementvue_type_script_lang_js = (settlementvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(774)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ap_settlementvue_type_script_lang_js,
  settlementvue_type_template_id_2538d378_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2538d378",
  "6a236dc5"
  
)

/* harmony default export */ var settlement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 511:
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
        return __webpack_require__(140);
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

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ap_settlement_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(615);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SettlementAuditDialog',
  components: {
    SettlementAuditViewer: _components_accounting_ap_settlement_audit_view__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    settlementId: {
      type: [Number, String],
      default: null
    },
    settlementInfo: {
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
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະ...');

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF();
        } catch (jsPDFError) {
          console.warn('jsPDF not available, using HTML print method:', jsPDFError);
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະສຳເລັດ!');
      } catch (error) {
        var _this$$toast3;
        console.error('Error exporting settlement audit log:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະໄດ້');
      } finally {
        this.isExporting = false;
      }
    },
    async exportWithJsPDF() {
      var _this$settlementInfo;
      // Import jsPDF dynamically (requires: npm install jspdf)
      const {
        jsPDF
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 380, 7));

      // Create new PDF document
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('ປະຫວັດການດຳເນີນງານການຊຳລະ', 20, 20);

      // Add settlement info
      if (this.settlementInfo) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`ເລກທີການຊຳລະ: ${this.settlementInfo.settlementId}`, 20, 35);
        doc.text(`ຈຳນວນເງິນ: ${this.formatCurrency(this.settlementInfo.paymentAmount)}`, 20, 45);
        doc.text(`ວັນທີຊຳລະ: ${this.formatDate(this.settlementInfo.settlementDate)}`, 20, 55);
        if (this.settlementInfo.status) {
          doc.text(`ສະຖານະ: ${this.getStatusText(this.settlementInfo.status)}`, 20, 65);
        }
      }

      // Add generation timestamp
      doc.setFontSize(10);
      doc.text(`ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}`, 20, 80);
      let yPosition = 95;

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

        // Settlement data summary
        if (log.recordData) {
          yPosition += 8;
          doc.text(`ຈຳນວນເງິນຊຳລະ: ${this.formatCurrency(log.recordData.paymentAmount)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ວັນທີຊຳລະ: ${this.formatDate(log.recordData.settlementDate)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ສະຖານະ: ${this.getStatusText(log.recordData.status)}`, 25, yPosition);
          if (log.recordData.reference) {
            yPosition += 8;
            doc.text(`ອ້າງອີງ: ${log.recordData.reference}`, 25, yPosition);
          }
        }
        yPosition += 15;
      });

      // Create filename
      const filename = `settlement-audit-log-${((_this$settlementInfo = this.settlementInfo) === null || _this$settlementInfo === void 0 ? void 0 : _this$settlementInfo.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.pdf`;

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
              <p style="margin: 3px 0;"><strong>ຈຳນວນເງິນຊຳລະ:</strong> ${this.formatCurrency(log.recordData.paymentAmount)}</p>
              <p style="margin: 3px 0;"><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(log.recordData.settlementDate)}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(log.recordData.status)}</p>
              ${log.recordData.reference ? `<p style="margin: 3px 0;"><strong>ອ້າງອີງ:</strong> ${log.recordData.reference}</p>` : ''}
              ${log.recordData.description ? `<p style="margin: 3px 0;"><strong>ລາຍລະອຽດ:</strong> ${log.recordData.description}</p>` : ''}
            </div>
          ` : ''}
        </div>
      `).join('');
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ປະຫວັດການດຳເນີນງານການຊຳລະ</title>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
            .settlement-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .timestamp { text-align: right; color: #666; font-size: 12px; margin-bottom: 20px; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>ປະຫວັດການດຳເນີນງານການຊຳລະ</h1>
          
          ${this.settlementInfo ? `
            <div class="settlement-info">
              <p><strong>ເລກທີການຊຳລະ:</strong> ${this.settlementInfo.settlementId}</p>
              <p><strong>ຈຳນວນເງິນ:</strong> ${this.formatCurrency(this.settlementInfo.paymentAmount)}</p>
              <p><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(this.settlementInfo.settlementDate)}</p>
              ${this.settlementInfo.status ? `<p><strong>ສະຖານະ:</strong> ${this.getStatusText(this.settlementInfo.status)}</p>` : ''}
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
        var _this$settlementInfo2, _this$$toast4;
        const exportData = {
          settlementInfo: this.settlementInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map(log => {
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData8$paym, _log$recordData9, _log$recordData9$bank, _log$recordData0, _log$recordData0$invo;
            return {
              id: log.id,
              action: this.getActionText(log.action),
              user: this.getUserName(log),
              email: this.getUserEmail(log),
              timestamp: log.auditDate,
              reason: log.reason,
              settlementData: {
                settlementId: log.settlementId,
                paymentAmount: (_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.paymentAmount,
                baseAmount: (_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.baseAmount,
                settlementDate: (_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.settlementDate,
                status: this.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status),
                reference: (_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.reference,
                description: (_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.description,
                note: (_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.note,
                paymentMethod: (_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : (_log$recordData8$paym = _log$recordData8.paymentMethod) === null || _log$recordData8$paym === void 0 ? void 0 : _log$recordData8$paym.name,
                bankAccount: (_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : (_log$recordData9$bank = _log$recordData9.bankAccount) === null || _log$recordData9$bank === void 0 ? void 0 : _log$recordData9$bank.accountName,
                invoiceSettlements: ((_log$recordData0 = log.recordData) === null || _log$recordData0 === void 0 ? void 0 : (_log$recordData0$invo = _log$recordData0.invoiceSettlements) === null || _log$recordData0$invo === void 0 ? void 0 : _log$recordData0$invo.length) || 0
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
        link.download = `settlement-audit-log-${((_this$settlementInfo2 = this.settlementInfo) === null || _this$settlementInfo2 === void 0 ? void 0 : _this$settlementInfo2.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.json`;
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
        var _this$settlementInfo3, _this$$toast6;
        const headers = ['ລຳດັບ', 'ການດຳເນີນງານ', 'ຜູ້ດຳເນີນການ', 'ອີເມວ', 'ເວລາ', 'ເຫດຜົນ', 'ເລກທີການຊຳລະ', 'ຈຳນວນເງິນຊຳລະ', 'ຈຳນວນເງິນພື້ນຖານ', 'ວັນທີຊຳລະ', 'ສະຖານະ', 'ອ້າງອີງ', 'ລາຍລະອຽດ', 'ໝາຍເຫດ', 'ວິທີການຊຳລະ', 'ບັນຊີທະນາຄານ', 'ຈຳນວນໃບແຈ້ງໜີ້'];
        const csvData = this.auditLogs.map((log, index) => {
          var _log$recordData1, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData16$pay, _log$recordData17, _log$recordData17$ban, _log$recordData18, _log$recordData18$inv;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', log.settlementId || '', ((_log$recordData1 = log.recordData) === null || _log$recordData1 === void 0 ? void 0 : _log$recordData1.paymentAmount) || '', ((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.baseAmount) || '', this.formatDate((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.settlementDate) || '', this.getStatusText((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.status) || '', ((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.reference) || '', ((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.description) || '', ((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.note) || '', ((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : (_log$recordData16$pay = _log$recordData16.paymentMethod) === null || _log$recordData16$pay === void 0 ? void 0 : _log$recordData16$pay.name) || '', ((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : (_log$recordData17$ban = _log$recordData17.bankAccount) === null || _log$recordData17$ban === void 0 ? void 0 : _log$recordData17$ban.accountName) || '', ((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : (_log$recordData18$inv = _log$recordData18.invoiceSettlements) === null || _log$recordData18$inv === void 0 ? void 0 : _log$recordData18$inv.length) || 0];
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
        link.download = `settlement-audit-log-${((_this$settlementInfo3 = this.settlementInfo) === null || _this$settlementInfo3 === void 0 ? void 0 : _this$settlementInfo3.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.csv`;
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
      var _log$recordData19, _log$recordData19$mak, _log$recordData20, _log$recordData20$che, _log$user;
      return ((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : (_log$recordData19$mak = _log$recordData19.maker) === null || _log$recordData19$mak === void 0 ? void 0 : _log$recordData19$mak.cus_email) || ((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : (_log$recordData20$che = _log$recordData20.checker) === null || _log$recordData20$che === void 0 ? void 0 : _log$recordData20$che.cus_email) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.email) || '';
    },
    // Helper methods for PDF generation
    getActionText(action) {
      const actionMap = {
        CREATE: 'ສ້າງການຊຳລະ',
        UPDATE: 'ອັບເດດການຊຳລະ',
        DELETE: 'ລຶບການຊຳລະ',
        APPROVE: 'ອະນຸມັດການຊຳລະ',
        REJECT: 'ປະຕິເສດການຊຳລະ',
        SUBMIT: 'ສົ່ງການຊຳລະ',
        CANCEL: 'ຍົກເລີກການຊຳລະ'
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
        cancelled: 'ຍົກເລີກ',
        active: 'ໃຊ້ງານ',
        inactive: 'ບໍ່ໃຊ້ງານ'
      };
      return statusMap[status] || status;
    },
    getUserName(log) {
      var _log$recordData21, _log$recordData21$mak, _log$recordData22, _log$recordData22$che, _log$user2;
      return ((_log$recordData21 = log.recordData) === null || _log$recordData21 === void 0 ? void 0 : (_log$recordData21$mak = _log$recordData21.maker) === null || _log$recordData21$mak === void 0 ? void 0 : _log$recordData21$mak.cus_name) || ((_log$recordData22 = log.recordData) === null || _log$recordData22 === void 0 ? void 0 : (_log$recordData22$che = _log$recordData22.checker) === null || _log$recordData22$che === void 0 ? void 0 : _log$recordData22$che.cus_name) || ((_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.name) || 'ບໍ່ຮູ້ຈັກ';
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
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(359)["URL"]))

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(597);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("44b84a76", content, true, context)
};

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(675);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3f406edb", content, true, context)
};

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(677);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d8ef9828", content, true, context)
};

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(679);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d9f5cdc0", content, true, context)
};

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(531);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-audit-viewer[data-v-749b7dea]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-749b7dea]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-749b7dea]{align-items:center;display:flex;gap:8px}.filter-input[data-v-749b7dea]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:120px;padding:8px 12px}.filter-input[data-v-749b7dea]:focus{border-color:#007bff;outline:none}.btn-clear[data-v-749b7dea],.btn-search[data-v-749b7dea]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-749b7dea]{background:#007bff;color:#fff}.btn-clear[data-v-749b7dea]{background:#6c757d;color:#fff}.loading[data-v-749b7dea]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-749b7dea]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-749b7dea]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-749b7dea]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-749b7dea]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-749b7dea]{background:#28a745}.dot-update[data-v-749b7dea]{background:#007bff}.dot-delete[data-v-749b7dea]{background:#dc3545}.dot-approve[data-v-749b7dea]{background:#28a745}.dot-reject[data-v-749b7dea]{background:#dc3545}.dot-submit[data-v-749b7dea]{background:#17a2b8}.dot-cancel[data-v-749b7dea]{background:#ffc107}.timeline-content[data-v-749b7dea]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-749b7dea]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-749b7dea]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-749b7dea]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-749b7dea],.content-header[data-v-749b7dea]{align-items:center;display:flex}.action-info[data-v-749b7dea]{gap:12px}.action-badge[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-749b7dea]{background:#d4edda;color:#155724}.badge-update[data-v-749b7dea]{background:#cce7ff;color:#004085}.badge-delete[data-v-749b7dea]{background:#f8d7da;color:#721c24}.badge-approve[data-v-749b7dea]{background:#d4edda;color:#155724}.badge-reject[data-v-749b7dea]{background:#f8d7da;color:#721c24}.badge-submit[data-v-749b7dea]{background:#d1ecf1;color:#0c5460}.amount-change[data-v-749b7dea],.badge-cancel[data-v-749b7dea]{background:#fff3cd;color:#856404}.amount-change[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-749b7dea]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-749b7dea],.user-info[data-v-749b7dea]{align-items:center;display:flex}.user-info[data-v-749b7dea]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-749b7dea]{color:#666;font-size:12px}.settlement-info[data-v-749b7dea]{align-items:center;display:flex;font-size:14px;gap:12px}.settlement-amount[data-v-749b7dea]{font-size:15px}.settlement-date[data-v-749b7dea]{color:#666;font-size:13px}.content-status[data-v-749b7dea]{justify-content:space-between;margin-bottom:8px}.content-status[data-v-749b7dea],.status-badge[data-v-749b7dea]{align-items:center;display:flex}.status-badge[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:500;gap:4px;padding:3px 8px}.status-badge i[data-v-749b7dea]{font-size:8px}.status-draft[data-v-749b7dea]{background:#e9ecef;color:#495057}.status-pending[data-v-749b7dea]{background:#fff3cd;color:#856404}.status-approved[data-v-749b7dea]{background:#d4edda;color:#155724}.status-rejected[data-v-749b7dea]{background:#f8d7da;color:#721c24}.status-paid[data-v-749b7dea]{background:#cce7ff;color:#004085}.status-active[data-v-749b7dea]{background:#d1ecf1;color:#0c5460}.settlements-count[data-v-749b7dea]{background:#f8f9fa;border-radius:3px;color:#666;font-size:12px;padding:2px 6px}.content-preview[data-v-749b7dea]{display:flex;font-size:13px;gap:12px;margin-bottom:8px}.reference[data-v-749b7dea]{color:#007bff;font-weight:500}.description[data-v-749b7dea]{color:#666}.content-reason[data-v-749b7dea]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-749b7dea]{font-size:11px}.expand-indicator[data-v-749b7dea]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-749b7dea]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-749b7dea]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));grid-gap:12px;gap:12px;margin-bottom:16px}.detail-item[data-v-749b7dea]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-749b7dea]{color:#333;font-size:13px}.amount[data-v-749b7dea]{color:#28a745;font-weight:600}.status[data-v-749b7dea]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.description-section[data-v-749b7dea],.note-section[data-v-749b7dea]{margin-bottom:16px}.description-section h4[data-v-749b7dea],.note-section h4[data-v-749b7dea]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.description-section p[data-v-749b7dea],.note-section p[data-v-749b7dea]{color:#666;font-size:13px;line-height:1.4;margin:0}.settlements-section h4[data-v-749b7dea]{align-items:center;border-bottom:1px solid #e5e5e5;color:#333;display:flex;font-size:14px;justify-content:space-between;margin:0 0 12px;padding-bottom:4px}.total-amount[data-v-749b7dea]{color:#28a745;font-size:13px;font-weight:600}.settlements-list[data-v-749b7dea]{display:flex;flex-direction:column;gap:8px}.settlement-item[data-v-749b7dea]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:12px}.settlement-header[data-v-749b7dea]{align-items:center;display:flex;justify-content:space-between;margin-bottom:6px}.settlement-id[data-v-749b7dea]{color:#333;font-size:13px;font-weight:600}.settlement-amount[data-v-749b7dea]{color:#28a745;font-size:14px;font-weight:600}.settlement-details[data-v-749b7dea]{align-items:center;display:flex;font-size:12px;gap:12px}.line-item[data-v-749b7dea]{color:#666}.settlement-status[data-v-749b7dea]{border-radius:3px;font-weight:500;padding:2px 6px}.settlement-date[data-v-749b7dea]{color:#999}.approval-section h4[data-v-749b7dea]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.approval-grid[data-v-749b7dea]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:12px;gap:12px}.approval-item[data-v-749b7dea]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.approval-item label[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.approval-item span[data-v-749b7dea]{color:#333;font-size:13px}.empty-state[data-v-749b7dea]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:48px 20px;text-align:center}.empty-state i[data-v-749b7dea]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-749b7dea]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-749b7dea]{font-size:14px;margin:0}.pagination[data-v-749b7dea]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-749b7dea],.pagination[data-v-749b7dea]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-749b7dea]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-749b7dea]:hover:not(:disabled){background:#f8f9fa;border-color:#007bff}.page-btn[data-v-749b7dea]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-749b7dea]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-749b7dea]{padding:16px}.content-main[data-v-749b7dea]{gap:8px}.content-main[data-v-749b7dea],.content-status[data-v-749b7dea]{align-items:flex-start;flex-direction:column}.content-status[data-v-749b7dea]{gap:6px}.approval-grid[data-v-749b7dea],.details-grid[data-v-749b7dea]{grid-template-columns:1fr}.expanded-details[data-v-749b7dea]{margin-left:0}.timeline-item[data-v-749b7dea]:not(:last-child):before{display:none}.filter-group[data-v-749b7dea]{flex-wrap:wrap}.settlement-header[data-v-749b7dea],.settlements-section h4[data-v-749b7dea]{align-items:flex-start;flex-direction:column;gap:4px}.settlement-details[data-v-749b7dea]{flex-wrap:wrap}}@media (max-width:480px){.settlement-info[data-v-749b7dea]{align-items:flex-start}.content-preview[data-v-749b7dea],.settlement-info[data-v-749b7dea]{flex-direction:column;gap:4px}.filter-input[data-v-749b7dea]{min-width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/view/index.vue?vue&type=template&id=749b7dea&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settlement-audit-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-749b7dea>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-749b7dea>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-749b7dea> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-749b7dea> "), _c('select', {
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
  }, [_vm._v("Rejected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SUBMIT"
    }
  }, [_vm._v("Submitted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CANCEL"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.status,
      expression: "filters.status"
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
        _vm.$set(_vm.filters, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("Draft")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("Pending")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rejected"
    }
  }, [_vm._v("Rejected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-749b7dea><i class=\"fas fa-search\" data-v-749b7dea></i></button> <button class=\"btn-clear\" data-v-749b7dea><i class=\"fas fa-times\" data-v-749b7dea></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-749b7dea><i class=\"fas fa-spinner fa-spin\" data-v-749b7dea></i>\n    Loading settlement history...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-749b7dea>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData5$invo, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData0, _log$recordData1, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData12$pay, _log$recordData13, _log$recordData13$ban, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData18$inv, _log$recordData19, _log$recordData20;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-749b7dea><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-749b7dea><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-749b7dea></i></div> <div class=\"timeline-content\" data-v-749b7dea><div class=\"content-header\" data-v-749b7dea><div class=\"action-info\" data-v-749b7dea><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-749b7dea><div class=\"user-info\" data-v-749b7dea><i class=\"fas fa-user\" data-v-749b7dea></i> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"settlement-info\" data-v-749b7dea><span class=\"settlement-amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.paymentAmount))) + "</span> <span class=\"settlement-date\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.settlementDate))) + "</span></div></div> <div class=\"content-status\" data-v-749b7dea><span" + _vm._ssrClass("status-badge", `status-${(_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.status}`) + " data-v-749b7dea><i class=\"fas fa-circle\" data-v-749b7dea></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status)) + "\n          ") + "</span> " + ((_log$recordData5 = log.recordData) !== null && _log$recordData5 !== void 0 && (_log$recordData5$invo = _log$recordData5.invoiceSettlements) !== null && _log$recordData5$invo !== void 0 && _log$recordData5$invo.length ? "<span class=\"settlements-count\" data-v-749b7dea>" + _vm._ssrEscape("\n            " + _vm._s(log.recordData.invoiceSettlements.length) + " invoice" + _vm._s(log.recordData.invoiceSettlements.length > 1 ? 's' : '') + "\n          ") + "</span>" : "<!---->") + "</div> " + (log.reason ? "<div class=\"content-reason\" data-v-749b7dea><i class=\"fas fa-comment-alt\" data-v-749b7dea></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " " + ((_log$recordData6 = log.recordData) !== null && _log$recordData6 !== void 0 && _log$recordData6.reference || (_log$recordData7 = log.recordData) !== null && _log$recordData7 !== void 0 && _log$recordData7.description ? "<div class=\"content-preview\" data-v-749b7dea>" + (log.recordData.reference ? "<span class=\"reference\" data-v-749b7dea>" + _vm._ssrEscape("\n            Ref: " + _vm._s(log.recordData.reference) + "\n          ") + "</span>" : "<!---->") + " " + (log.recordData.description ? "<span class=\"description\" data-v-749b7dea>" + _vm._ssrEscape("\n            " + _vm._s(_vm.truncateText(log.recordData.description, 50)) + "\n          ") + "</span>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-749b7dea><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-749b7dea></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-749b7dea><div class=\"details-grid\" data-v-749b7dea><div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Settlement ID:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.settlementId || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Settlement Date:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.settlementDate))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Payment Amount:</label> <span class=\"amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.paymentAmount))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Base Amount:</label> <span class=\"amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData0 = log.recordData) === null || _log$recordData0 === void 0 ? void 0 : _log$recordData0.baseAmount))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData1 = log.recordData) === null || _log$recordData1 === void 0 ? void 0 : _log$recordData1.status}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Reference:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.reference) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Payment Method:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : (_log$recordData12$pay = _log$recordData12.paymentMethod) === null || _log$recordData12$pay === void 0 ? void 0 : _log$recordData12$pay.name) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Bank Account:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : (_log$recordData13$ban = _log$recordData13.bankAccount) === null || _log$recordData13$ban === void 0 ? void 0 : _log$recordData13$ban.accountName) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Created:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.createdAt))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Last Updated:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.updateTimestamp))) + "</span></div></div> " + ((_log$recordData16 = log.recordData) !== null && _log$recordData16 !== void 0 && _log$recordData16.description ? "<div class=\"description-section\" data-v-749b7dea><h4 data-v-749b7dea>Description</h4> <p data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.description)) + "</p></div>" : "<!---->") + " " + ((_log$recordData17 = log.recordData) !== null && _log$recordData17 !== void 0 && _log$recordData17.note ? "<div class=\"note-section\" data-v-749b7dea><h4 data-v-749b7dea>Note</h4> <p data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.note)) + "</p></div>" : "<!---->") + " " + ((_log$recordData18 = log.recordData) !== null && _log$recordData18 !== void 0 && (_log$recordData18$inv = _log$recordData18.invoiceSettlements) !== null && _log$recordData18$inv !== void 0 && _log$recordData18$inv.length ? "<div class=\"settlements-section\" data-v-749b7dea><h4 data-v-749b7dea>" + _vm._ssrEscape("\n            Invoice Settlements (" + _vm._s(log.recordData.invoiceSettlements.length) + ")\n            ") + "<span class=\"total-amount\" data-v-749b7dea>" + _vm._ssrEscape("\n              Total: " + _vm._s(_vm.formatCurrency(_vm.getTotalSettlementAmount(log.recordData.invoiceSettlements))) + "\n            ") + "</span></h4> <div class=\"settlements-list\" data-v-749b7dea>" + _vm._ssrList(log.recordData.invoiceSettlements, function (settlement) {
      return "<div class=\"settlement-item\" data-v-749b7dea><div class=\"settlement-header\" data-v-749b7dea><span class=\"settlement-id\" data-v-749b7dea>" + _vm._ssrEscape("Settlement #" + _vm._s(settlement.id)) + "</span> <span class=\"settlement-amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(settlement.amount))) + "</span></div> <div class=\"settlement-details\" data-v-749b7dea><span class=\"line-item\" data-v-749b7dea>" + _vm._ssrEscape("Line Item #" + _vm._s(settlement.invoiceLineItemId)) + "</span> <span" + _vm._ssrClass("settlement-status", `status-${settlement.status}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getStatusText(settlement.status)) + "\n                ") + "</span> <span class=\"settlement-date\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(settlement.createdAt))) + "</span></div></div>";
    }) + "</div></div>" : "<!---->") + " " + ((_log$recordData19 = log.recordData) !== null && _log$recordData19 !== void 0 && _log$recordData19.maker || (_log$recordData20 = log.recordData) !== null && _log$recordData20 !== void 0 && _log$recordData20.checker ? "<div class=\"approval-section\" data-v-749b7dea><h4 data-v-749b7dea>Approval Information</h4> <div class=\"approval-grid\" data-v-749b7dea>" + (log.recordData.maker ? "<div class=\"approval-item\" data-v-749b7dea><label data-v-749b7dea>Maker:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.maker.cus_name || log.recordData.maker.name || '-')) + "</span></div>" : "<!---->") + " " + (log.recordData.checker ? "<div class=\"approval-item\" data-v-749b7dea><label data-v-749b7dea>Checker:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.checker.cus_name || log.recordData.checker.name || '-')) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-749b7dea><i class=\"fas fa-history\" data-v-749b7dea></i> <h3 data-v-749b7dea>No settlement audit records found</h3> <p data-v-749b7dea>No changes have been recorded for this settlement yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-749b7dea><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-749b7dea><i class=\"fas fa-chevron-left\" data-v-749b7dea></i></button> <span class=\"page-info\" data-v-749b7dea>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-749b7dea><i class=\"fas fa-chevron-right\" data-v-749b7dea></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue?vue&type=template&id=749b7dea&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/view/index.vue?vue&type=script&lang=js
/* harmony default export */ var viewvue_type_script_lang_js = ({
  name: 'SettlementAuditViewer',
  props: {
    settlementId: {
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
        action: '',
        status: ''
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
    settlementId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      try {
        // API call for settlement audit logs
        const response = await this.$axios.get(`/api/ap-invoices-settlement/audit/${this.settlementId}`, {
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
        console.error('Error loading settlement audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load settlement audit logs');
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
        action: '',
        status: ''
      };
      this.loadAuditLogs();
    },
    showAmountChange(log, index) {
      var _prevLog$recordData, _log$recordData;
      if (log.action !== 'UPDATE' || index === this.auditLogs.length - 1) return false;
      const prevLog = this.auditLogs[index + 1];
      if (!prevLog || !((_prevLog$recordData = prevLog.recordData) !== null && _prevLog$recordData !== void 0 && _prevLog$recordData.paymentAmount) || !((_log$recordData = log.recordData) !== null && _log$recordData !== void 0 && _log$recordData.paymentAmount)) return false;
      return prevLog.recordData.paymentAmount !== log.recordData.paymentAmount;
    },
    getAmountChange(log, index) {
      var _log$recordData2, _prevLog$recordData2;
      const prevLog = this.auditLogs[index + 1];
      const current = ((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.paymentAmount) || 0;
      const previous = (prevLog === null || prevLog === void 0 ? void 0 : (_prevLog$recordData2 = prevLog.recordData) === null || _prevLog$recordData2 === void 0 ? void 0 : _prevLog$recordData2.paymentAmount) || 0;
      const diff = current - previous;
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    getTotalSettlementAmount(settlements) {
      return settlements.reduce((total, settlement) => total + (settlement.amount || 0), 0);
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times',
        'SUBMIT': 'fas fa-paper-plane',
        'CANCEL': 'fas fa-ban'
      };
      return icons[action] || 'fas fa-circle';
    },
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected',
        'SUBMIT': 'Submitted',
        'CANCEL': 'Cancelled'
      };
      return actions[action] || action;
    },
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled',
        'active': 'Active',
        'inactive': 'Inactive'
      };
      return statuses[status] || status;
    },
    getUserName(log) {
      var _log$recordData3, _log$recordData3$make, _log$recordData4, _log$recordData4$chec, _log$user;
      return ((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : (_log$recordData3$make = _log$recordData3.maker) === null || _log$recordData3$make === void 0 ? void 0 : _log$recordData3$make.cus_name) || ((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : (_log$recordData4$chec = _log$recordData4.checker) === null || _log$recordData4$chec === void 0 ? void 0 : _log$recordData4$chec.cus_name) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name) || 'Unknown User';
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
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(amount);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue?vue&type=script&lang=js
 /* harmony default export */ var audit_viewvue_type_script_lang_js = (viewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(596)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "749b7dea",
  "a9386c0e"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4da37cd1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4da37cd1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4da37cd1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4da37cd1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4da37cd1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-audit-dialog-overlay[data-v-4da37cd1]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.settlement-audit-dialog[data-v-4da37cd1]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.settlement-audit-dialog-header[data-v-4da37cd1]{align-items:center;background:linear-gradient(135deg,primary,secondary);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-4da37cd1]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.settlement-subtitle[data-v-4da37cd1]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-4da37cd1]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-4da37cd1]:hover{background:hsla(0,0%,100%,.2)}.settlement-audit-dialog-body[data-v-4da37cd1]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.settlement-audit-dialog-body[data-v-4da37cd1]::-webkit-scrollbar{width:8px}.settlement-audit-dialog-body[data-v-4da37cd1]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.settlement-audit-dialog-body[data-v-4da37cd1]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.settlement-audit-dialog-body[data-v-4da37cd1]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.settlement-audit-dialog-footer[data-v-4da37cd1]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.export-options[data-v-4da37cd1]{align-items:center;display:flex;gap:0}.main-export-btn[data-v-4da37cd1]{border-bottom-right-radius:0;border-top-right-radius:0}.export-dropdown[data-v-4da37cd1]{position:relative}.dropdown-toggle[data-v-4da37cd1]{border-bottom-left-radius:0;border-left:none;border-top-left-radius:0;padding:10px 8px}.dropdown-menu[data-v-4da37cd1]{background:#fff;border:1px solid #ddd;border-radius:6px;bottom:100%;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:5px;min-width:160px;position:absolute;right:0;z-index:1000}.dropdown-item[data-v-4da37cd1]{align-items:center;background:none;border:none;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px 12px;text-align:left;transition:background-color .2s;width:100%}.dropdown-item[data-v-4da37cd1]:hover{background:#f8f9fa}.dropdown-item[data-v-4da37cd1]:first-child{border-top-left-radius:6px;border-top-right-radius:6px}.dropdown-item[data-v-4da37cd1]:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.btn[data-v-4da37cd1]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-4da37cd1]{background:#28a745;color:#fff}.btn-primary[data-v-4da37cd1]:hover{background:#218838;transform:translateY(-1px)}.btn-outline-primary[data-v-4da37cd1]{background:#fff;border:1px solid #28a745;color:#28a745}.btn-outline-primary[data-v-4da37cd1]:hover{background:#28a745;color:#fff;transform:translateY(-1px)}.btn-secondary[data-v-4da37cd1]{background:#6c757d;color:#fff}.btn-secondary[data-v-4da37cd1]:hover{background:#5a6268;transform:translateY(-1px)}.btn[data-v-4da37cd1]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.settlement-audit-dialog[data-v-4da37cd1]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.settlement-audit-dialog-header[data-v-4da37cd1]{padding:15px}.header-info h3[data-v-4da37cd1]{font-size:18px}.settlement-audit-dialog-footer[data-v-4da37cd1]{flex-direction:column;padding:15px}.btn[data-v-4da37cd1],.export-options[data-v-4da37cd1]{width:100%}.btn[data-v-4da37cd1]{justify-content:center}.main-export-btn[data-v-4da37cd1]{border-radius:6px;border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-toggle[data-v-4da37cd1]{border-left:1px solid #28a745;border-radius:6px;border-top-left-radius:0;border-top-right-radius:0}.dropdown-menu[data-v-4da37cd1]{border:none;box-shadow:none;margin-bottom:0;position:static;width:100%}}@media (max-width:480px){.settlement-audit-dialog-overlay[data-v-4da37cd1]{padding:0}.settlement-audit-dialog-header[data-v-4da37cd1]{align-items:flex-start;flex-direction:column;gap:10px;position:relative}.close-btn[data-v-4da37cd1]{position:absolute;right:15px;top:15px}.header-info h3[data-v-4da37cd1]{font-size:16px}.settlement-subtitle[data-v-4da37cd1]{font-size:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(567);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mou-content[data-v-4664dd31]{padding:0}.form-section[data-v-4664dd31]{background:#fafafa;border-radius:6px;margin-bottom:20px;padding:15px}.form-grid[data-v-4664dd31]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:15px;gap:15px}.form-group[data-v-4664dd31]{margin-bottom:0}.form-group label[data-v-4664dd31]{color:#333;display:block;font-size:13px;font-weight:500;margin-bottom:5px}.required[data-v-4664dd31]{color:#e74c3c}.form-control[data-v-4664dd31]{border:1px solid #ddd;border-radius:4px;font-size:13px;padding:8px 12px;width:100%}.form-control[data-v-4664dd31]:focus{border-color:#17a2b8;box-shadow:0 0 0 2px rgba(23,162,184,.1);outline:none}.form-control[data-v-4664dd31]:disabled{background-color:#f8f9fa;color:#6c757d}.form-control-sm[data-v-4664dd31]{font-size:12px;padding:4px 8px}.section-header[data-v-4664dd31]{flex-wrap:wrap;gap:10px;justify-content:space-between;margin-bottom:15px}.section-header[data-v-4664dd31],.section-title[data-v-4664dd31]{align-items:center;display:flex}.section-title[data-v-4664dd31]{color:#333;font-size:14px;font-weight:600;gap:8px;margin:0}.total-badge[data-v-4664dd31]{background:#17a2b8;border-radius:4px;color:#fff;font-size:12px;padding:6px 12px}.table-responsive[data-v-4664dd31]{background:#fff;border:1px solid #e9ecef;border-radius:6px;overflow-x:auto}.table[data-v-4664dd31]{border-collapse:collapse;font-size:12px;margin:0;width:100%}.table thead th[data-v-4664dd31]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-weight:600;padding:10px;text-align:left}.table tbody td[data-v-4664dd31]{border-top:1px solid #dee2e6;padding:8px 10px;vertical-align:middle}.applicant-info[data-v-4664dd31]{align-items:center;display:flex;gap:10px}.applicant-avatar[data-v-4664dd31]{align-items:center;background:#17a2b8;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:11px;font-weight:600;height:32px;justify-content:center;width:32px}.applicant-name[data-v-4664dd31]{color:#333;font-weight:500}.applicant-nationality[data-v-4664dd31]{color:#6c757d;font-size:11px}.passport-badge[data-v-4664dd31]{align-items:center;background:#e9ecef;border-radius:4px;display:inline-flex;font-size:11px;gap:4px;padding:4px 8px}.empty-state[data-v-4664dd31],.loading-state[data-v-4664dd31]{color:#6c757d;padding:40px 20px;text-align:center}.loading-state i[data-v-4664dd31]{color:#17a2b8;margin-bottom:15px}.empty-state i[data-v-4664dd31]{color:#dee2e6;margin-bottom:15px}.empty-title[data-v-4664dd31]{color:#333;font-size:16px;font-weight:600;margin:10px 0 5px}.empty-subtitle[data-v-4664dd31]{color:#6c757d;font-size:13px;margin:0}.mou-actions[data-v-4664dd31]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;margin-top:20px;padding:15px 20px}.btn[data-v-4664dd31]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:13px;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-4664dd31]{background:#007bff;color:#fff}.btn-secondary[data-v-4664dd31]{background:#6c757d;color:#fff}.btn[data-v-4664dd31]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-4664dd31]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.form-grid[data-v-4664dd31]{grid-template-columns:1fr}.section-header[data-v-4664dd31]{align-items:flex-start}.mou-actions[data-v-4664dd31],.section-header[data-v-4664dd31]{flex-direction:column}.mou-actions .btn[data-v-4664dd31]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50a443cc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(568);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50a443cc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50a443cc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50a443cc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50a443cc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".voucher-container[data-v-50a443cc]{background:#fff;margin:0 auto;max-width:900px;padding:40px}.voucher-header[data-v-50a443cc]{border-bottom:3px solid primary;margin-bottom:30px;padding-bottom:15px}.header-flex[data-v-50a443cc]{align-items:center;display:flex;gap:20px;justify-content:space-between}.header-left[data-v-50a443cc]{flex-shrink:0}.header-center[data-v-50a443cc]{flex:1;text-align:left}.header-right[data-v-50a443cc]{flex-shrink:0;text-align:right}.logo-placeholder[data-v-50a443cc]{align-items:center;border:2px dashed #ddd;border-radius:4px;display:flex;height:100px;justify-content:center;width:120px}.company-logo[data-v-50a443cc]{border-radius:4px;display:block;height:auto;max-height:100px;-o-object-fit:contain;object-fit:contain;width:120px}.company-name[data-v-50a443cc]{color:primary;font-size:24px;font-weight:700;margin:0 0 8px}.company-address[data-v-50a443cc],.company-contact[data-v-50a443cc]{color:#666;font-size:13px;margin:5px 0}.voucher-title h3[data-v-50a443cc]{color:#333;font-size:20px;margin:0 0 5px}.voucher-title h4[data-v-50a443cc]{color:#666;font-size:16px;margin:0}.voucher-info-grid[data-v-50a443cc]{display:grid;grid-template-columns:1fr 1fr;grid-gap:15px;background-color:#f9f9f9;border-radius:4px;gap:15px;margin:25px 0;padding:15px}.info-row[data-v-50a443cc]{display:flex;padding:5px 0}.label[data-v-50a443cc]{color:#333;font-weight:600;min-width:130px}.value[data-v-50a443cc]{color:#666}.voucher-table[data-v-50a443cc]{border-collapse:collapse;font-size:13px;margin:25px 0;width:100%}.voucher-table td[data-v-50a443cc],.voucher-table th[data-v-50a443cc]{border:1px solid #ddd;padding:10px}.voucher-table th[data-v-50a443cc]{background-color:primary;color:#fff;font-weight:600;text-align:left}.voucher-table tbody tr[data-v-50a443cc]:nth-child(2n){background-color:#f9f9f9}.voucher-table .text-center[data-v-50a443cc]{text-align:center}.voucher-table .text-right[data-v-50a443cc]{text-align:right}.total-row td[data-v-50a443cc]{background-color:#e8f5e9;font-size:14px;font-weight:700}.amount-words[data-v-50a443cc]{background-color:#f0f4ff;border-left:4px solid primary;font-size:14px;margin:20px 0;padding:15px}.voucher-description[data-v-50a443cc]{background-color:#fff9e6;border-radius:4px;font-size:13px;margin:20px 0;padding:15px}.signature-section[data-v-50a443cc]{display:flex;gap:40px;justify-content:space-between;margin-top:60px}.signature-box[data-v-50a443cc]{flex:1;text-align:center}.signature-line[data-v-50a443cc]{border-top:2px solid #333;margin:80px 10px 15px}.signature-label[data-v-50a443cc]{color:#333;font-size:13px;font-weight:600;margin:8px 0}.signature-name[data-v-50a443cc]{font-size:14px;font-weight:500;margin:5px 0}.signature-date[data-v-50a443cc]{color:#666;font-size:12px}@media print{.voucher-container[data-v-50a443cc]{padding:20px}.company-logo[data-v-50a443cc]{max-height:80px;width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(775);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4661e991", content, true, context)
};

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/browsemou/index.vue?vue&type=template&id=4664dd31&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mou-content"
  }, [_vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select MOU <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedMOU,
      expression: "selectedMOU"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": _vm.loadingMOU
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedMOU = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onMOUChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("-- Select MOU --")]), _vm._v(" "), _vm._l(_vm.mouList, function (mou) {
    return _c('option', {
      key: mou.id,
      domProps: {
        "value": mou
      }
    }, [_vm._v("\n          " + _vm._s(mou.jobCode) + " - " + _vm._s(mou.pmCharge) + " - " + _vm._s(mou.jobTitle) + " -\n          " + _vm._s(mou.employerCompany) + "\n        ")]);
  })], 2)], 2)]), _vm._ssrNode(" "), _vm.selectedMOU ? _vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select Batch <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedBatch,
      expression: "selectedBatch"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": !_vm.selectedMOU || _vm.loadingBatches
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedBatch = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onBatchChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("-- Select Batch --")]), _vm._v(" "), _vm._l(_vm.batchList, function (batch) {
    return _c('option', {
      key: batch.id,
      domProps: {
        "value": batch
      }
    }, [_vm._v("\n          " + _vm._s(batch.runningNo) + " - " + _vm._s(batch.totalPositions) + " positions (" + _vm._s(batch.applicants.length) + "\n          applicants)\n        ")]);
  })], 2)], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.selectedBatch ? _vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select Agency <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAgency,
      expression: "selectedAgency"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": !_vm.selectedBatch || _vm.agencyList.length === 0
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedAgency = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onAgencyChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("\n          " + _vm._s(_vm.agencyList.length === 0 ? '-- No agencies available --' : '-- Select Agency --') + "\n        ")]), _vm._v(" "), _vm._l(_vm.agencyList, function (agency) {
    return _c('option', {
      key: agency.id,
      domProps: {
        "value": agency
      }
    }, [_vm._v("\n          " + _vm._s(agency.agencyName) + " - " + _vm._s(agency.agencyCode) + " (" + _vm._s(_vm.getAgencyApplicantCount(agency.id)) + "\n          applicants)\n        ")]);
  })], 2), _vm._ssrNode(" " + (_vm.agencyList.length === 0 ? "<small class=\"text-muted\" data-v-4664dd31>\n        No applicants in this batch have agencies assigned\n      </small>" : "<!---->"))], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.selectedAgency && _vm.applicantsList.length > 0 ? "<div class=\"form-section\" data-v-4664dd31><div class=\"section-header\" data-v-4664dd31><h6 class=\"section-title\" data-v-4664dd31><i class=\"fas fa-users\" data-v-4664dd31></i>" + _vm._ssrEscape("\n        Invoice Line Items (" + _vm._s(_vm.applicantsList.length) + " applicants)\n      ") + "</h6> <div class=\"total-badge\" data-v-4664dd31>\n        Total: <strong data-v-4664dd31>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.totalAmount))) + "</strong></div></div> <div class=\"table-responsive\" data-v-4664dd31><table class=\"table table-bordered\" data-v-4664dd31><thead data-v-4664dd31><tr data-v-4664dd31><th style=\"width: 40px\" data-v-4664dd31>#</th> <th data-v-4664dd31>Applicant Name</th> <th style=\"width: 120px\" data-v-4664dd31>Passport No</th> <th style=\"width: 150px\" data-v-4664dd31>Amount</th> <th style=\"width: 200px\" data-v-4664dd31>Description</th></tr></thead> <tbody data-v-4664dd31>" + _vm._ssrList(_vm.applicantsList, function (applicant, index) {
    return "<tr data-v-4664dd31><td class=\"text-center\" data-v-4664dd31>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-4664dd31><div class=\"applicant-info\" data-v-4664dd31><div class=\"applicant-avatar\" data-v-4664dd31>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getInitials(applicant.applicantName)) + "\n                ") + "</div> <div data-v-4664dd31><div class=\"applicant-name\" data-v-4664dd31>" + _vm._ssrEscape("\n                    " + _vm._s(applicant.applicantName) + "\n                  ") + "</div> <div class=\"applicant-nationality\" data-v-4664dd31>" + _vm._ssrEscape("\n                    " + _vm._s(applicant.gender) + "\n                  ") + "</div></div></div></td> <td data-v-4664dd31><span class=\"passport-badge\" data-v-4664dd31><i class=\"fas fa-passport\" data-v-4664dd31></i>" + _vm._ssrEscape("\n                " + _vm._s(applicant.passportNo) + "\n              ") + "</span></td> <td data-v-4664dd31><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", applicant.amount) + " class=\"form-control form-control-sm\" data-v-4664dd31></td> <td data-v-4664dd31><input type=\"text\" placeholder=\"Description\"" + _vm._ssrAttr("value", applicant.description) + " class=\"form-control form-control-sm\" data-v-4664dd31></td></tr>";
  }) + "</tbody></table></div></div>" : "<!---->") + " " + (_vm.selectedAgency && _vm.applicantsList.length === 0 ? "<div class=\"empty-state\" data-v-4664dd31><i class=\"fas fa-inbox fa-4x\" data-v-4664dd31></i> <p class=\"empty-title\" data-v-4664dd31>No applicants available</p> <p class=\"empty-subtitle\" data-v-4664dd31>\n      No applicants found for the selected agency in this batch\n    </p></div>" : "<!---->") + " <div class=\"mou-actions\" data-v-4664dd31><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isGenerating) + " class=\"btn btn-secondary\" data-v-4664dd31><i class=\"fas fa-times\" data-v-4664dd31></i> Cancel\n    </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canGenerateInvoice) + " class=\"btn btn-primary\" data-v-4664dd31><i class=\"fas fa-file-check\" data-v-4664dd31></i> " + (_vm.isGenerating ? "<span data-v-4664dd31>Generating...</span>" : "<span data-v-4664dd31>Generate Invoice</span>") + "</button></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue?vue&type=template&id=4664dd31&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(107);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/browsemou/index.vue?vue&type=script&lang=js













/* harmony default export */ var browsemouvue_type_script_lang_js = ({
  name: 'BrowseMouInvoiceDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loadingMOU: false,
      loadingBatches: false,
      isGenerating: false,
      mouList: [],
      batchList: [],
      agencyList: [],
      applicantsList: [],
      selectedMOU: null,
      selectedBatch: null,
      selectedAgency: null,
      invoiceData: {
        invoiceNumber: '',
        invoiceDate: new Date().toISOString().substr(0, 10)
      }
    };
  },
  computed: {
    totalAmount() {
      return this.applicantsList.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
    },
    canGenerateInvoice() {
      return this.selectedMOU && this.selectedBatch && this.selectedAgency && this.applicantsList.length > 0 && !this.isGenerating;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.loadMOUList();
      } else {
        this.resetForm();
      }
    }
  },
  created() {
    this.loadMOUList();
  },
  methods: {
    calculateTotal() {
      this.$forceUpdate();
    },
    resetForm() {
      this.selectedMOU = null;
      this.selectedBatch = null;
      this.selectedAgency = null;
      this.batchList = [];
      this.agencyList = [];
      this.applicantsList = [];
      this.invoiceData = {
        invoiceNumber: '',
        invoiceDate: new Date().toISOString().substr(0, 10)
      };
    },
    async loadMOUList() {
      this.loadingMOU = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/mous');
        if (data.success) {
          this.mouList = data.data.mous;
        }
      } catch (error) {
        var _this$$toast;
        console.error('Error loading MOU list:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load MOU list');
      } finally {
        this.loadingMOU = false;
      }
    },
    async onMOUChange() {
      if (!this.selectedMOU) {
        this.batchList = [];
        this.selectedBatch = null;
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
        return;
      }
      this.loadingBatches = true;
      try {
        const {
          data
        } = await this.$axios.get(`/api/mous/${this.selectedMOU.id}/batch`);
        if (data.success) {
          this.batchList = data.data || [];
        }
        this.selectedBatch = null;
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
      } catch (error) {
        var _this$$toast2;
        console.error('Error loading batches:', error);
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.error('Failed to load batches');
        this.batchList = [];
      } finally {
        this.loadingBatches = false;
      }
    },
    onBatchChange() {
      var _this$selectedBatch$a;
      if (!this.selectedBatch) {
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
        return;
      }
      const agenciesMap = new Map();
      if (((_this$selectedBatch$a = this.selectedBatch.applicants) === null || _this$selectedBatch$a === void 0 ? void 0 : _this$selectedBatch$a.length) > 0) {
        this.selectedBatch.applicants.forEach(applicant => {
          if (applicant.agency && applicant.agencyId && !agenciesMap.has(applicant.agency.id)) {
            agenciesMap.set(applicant.agency.id, applicant.agency);
          }
        });
      }
      this.agencyList = Array.from(agenciesMap.values());
      this.selectedAgency = null;
      this.applicantsList = [];
    },
    onAgencyChange() {
      if (!this.selectedAgency || !this.selectedBatch) {
        this.applicantsList = [];
        return;
      }
      const agencyApplicants = this.selectedBatch.applicants.filter(applicant => applicant.agencyId === this.selectedAgency.id);
      this.applicantsList = agencyApplicants.map(applicant => ({
        id: applicant.id,
        applicantName: `${applicant.firstName} ${applicant.lastName}`,
        passportNo: applicant.passportNo,
        gender: applicant.gender,
        amount: applicant.depositAmount || 0,
        description: `Service fee for ${applicant.firstName} ${applicant.lastName}`
      }));
    },
    getAgencyApplicantCount(agencyId) {
      var _this$selectedBatch;
      if (!((_this$selectedBatch = this.selectedBatch) !== null && _this$selectedBatch !== void 0 && _this$selectedBatch.applicants)) return 0;
      return this.selectedBatch.applicants.filter(a => a.agencyId === agencyId).length;
    },
    async generateInvoice() {
      if (!this.canGenerateInvoice) return;
      this.isGenerating = true;
      try {
        var _this$$toast3;
        const payload = {
          mouId: this.selectedMOU.id,
          mouInfo: {
            jobCode: this.selectedMOU.jobCode,
            jobTitle: this.selectedMOU.jobTitle,
            employerCompany: this.selectedMOU.employerCompany,
            pmCharge: this.selectedMOU.pmCharge
          },
          batchId: this.selectedBatch.id,
          batchInfo: {
            runningNo: this.selectedBatch.runningNo,
            totalPositions: this.selectedBatch.totalPositions
          },
          agencyId: this.selectedAgency.id,
          agencyName: this.selectedAgency.agencyName,
          agencyCode: this.selectedAgency.agencyCode,
          invoiceNumber: this.invoiceData.invoiceNumber,
          invoiceDate: this.invoiceData.invoiceDate,
          lines: this.applicantsList.map(applicant => ({
            applicantId: applicant.id,
            applicantName: applicant.applicantName,
            passportNo: applicant.passportNo,
            gender: applicant.gender,
            amount: parseFloat(applicant.amount) || 0,
            description: applicant.description || ''
          })),
          totalAmount: this.totalAmount
        };
        this.$emit('invoice-generated', payload);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.success(`Generated ${this.applicantsList.length} invoice lines`);
      } catch (error) {
        var _this$$toast4;
        console.error('Error generating invoice:', error);
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.error('Failed to generate invoice');
      } finally {
        this.isGenerating = false;
      }
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    getInitials(name) {
      if (!name) return '?';
      const parts = name.split(' ');
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue?vue&type=script&lang=js
 /* harmony default export */ var settlement_browsemouvue_type_script_lang_js = (browsemouvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(676)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settlement_browsemouvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4664dd31",
  "40d5f1bf"
  
)

/* harmony default export */ var browsemou = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(360);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(405);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/voucher/index.vue?vue&type=template&id=50a443cc&scoped=true










var vouchervue_type_template_id_50a443cc_scoped_true_render = function render() {
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
  }, [_vm.hasValidData ? _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-printer")]), _vm._v(" "), _c('span', [_vm._v("ໃບຄຳສັ່ງຈ່າຍ - Payment Voucher")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
    staticClass: "pa-0"
  }, [_c('div', {
    staticClass: "voucher-container",
    attrs: {
      "id": "voucher-print-area"
    }
  }, [_c('div', {
    staticClass: "voucher-header"
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
    staticClass: "voucher-title"
  }, [_c('h3', [_vm._v("PAYMENT VOUCHER")]), _vm._v(" "), _c('h4', [_vm._v("ໃບຄຳສັ່ງຈ່າຍ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "voucher-info-grid"
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Voucher No:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.safeVoucherData.reference || '-'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeVoucherData.settlementDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Payment Method:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getPaymentMethodName(_vm.safeVoucherData.paymentMethodId)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Bank Account:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getBankAccountInfo(_vm.safeVoucherData.bankAccountId)))])])]), _vm._v(" "), _c('table', {
    staticClass: "voucher-table"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "5%"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Invoice No")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Agency")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("Txn Code")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "30%"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("DR")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("CR")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Amount")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.safeSettlementLines, function (line, index) {
    var _line$agency;
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.invoiceNumber || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.agencyName || ((_line$agency = line.agency) === null || _line$agency === void 0 ? void 0 : _line$agency.agencyName) || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTransactionCode(line.txnId)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.description || '-'))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v("\n                " + _vm._s(_vm.getGLAccount(line.DRglAccountId)) + "\n              ")]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v("\n                " + _vm._s(_vm.getGLAccount(line.CRglAccountId)) + "\n              ")]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.amount)))])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "total-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "7"
    }
  }, [_c('strong', [_vm._v("Total Amount:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalAmount)))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "amount-words"
  }, [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.amountInWords) + "\n        ")]), _vm._v(" "), _vm.safeVoucherData.description ? _c('div', {
    staticClass: "voucher-description"
  }, [_c('strong', [_vm._v("Description:")]), _vm._v(" " + _vm._s(_vm.safeVoucherData.description) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "signature-section"
  }, [_c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Prepared By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v(_vm._s(_vm.makerName))]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("\n              " + _vm._s(_vm.formatDate(_vm.safeVoucherData.createdAt)) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Approved By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v(_vm._s(_vm.checkerName))]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("\n              " + _vm._s(_vm.safeVoucherData.approvedDate ? _vm.formatDate(_vm.safeVoucherData.approvedDate) : '') + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Received By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v("_________________")]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("Date: ___________")])])])])]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
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
      "click": _vm.printVoucher
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n        ພິມ\n      ")], 1)], 1)], 1) : _c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], {
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

// CONCATENATED MODULE: ./components/accounting/ap/settlement/voucher/index.vue?vue&type=template&id=50a443cc&scoped=true

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

// EXTERNAL MODULE: ./mixins/companyLogoMixin.js
var companyLogoMixin = __webpack_require__(511);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/voucher/index.vue?vue&type=script&lang=js


/* harmony default export */ var vouchervue_type_script_lang_js = ({
  name: 'PaymentVoucherPrinterWithLogo',
  mixins: [companyLogoMixin["a" /* default */]],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    voucherData: {
      type: Object,
      required: false,
      default: null
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    bankAccounts: {
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
    }
  },
  computed: {
    companyDataV1() {
      console.log(`**********COMPANY DATA V1 PDFINVOICE ${api["b" /* mainCompanyInfo */]}**********`);
      let comV1 = Object(api["c" /* mainCompanyInfoV1 */])(this.$store);
      console.info(`Company data fetch from api V1 ${comV1}`);
      return comV1;
    },
    // Check if we have valid data
    hasValidData() {
      return this.voucherData && this.voucherData.id;
    },
    // Safe accessor for voucher data
    safeVoucherData() {
      return this.voucherData || {};
    },
    // Safe accessor for settlement lines
    safeSettlementLines() {
      return this.safeVoucherData.settlementLines || [];
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
    // Maker information
    makerName() {
      var _this$safeVoucherData;
      return ((_this$safeVoucherData = this.safeVoucherData.maker) === null || _this$safeVoucherData === void 0 ? void 0 : _this$safeVoucherData.cus_name) || '-';
    },
    // Checker information
    checkerName() {
      var _this$safeVoucherData2;
      return ((_this$safeVoucherData2 = this.safeVoucherData.checker) === null || _this$safeVoucherData2 === void 0 ? void 0 : _this$safeVoucherData2.cus_name) || '-';
    },
    // Calculate total amount
    totalAmount() {
      return this.safeSettlementLines.reduce((sum, line) => sum + (parseFloat(line.amount) || 0), 0);
    },
    // Amount in words
    amountInWords() {
      if (this.totalAmount === 0) return 'Zero Kip Only';
      return `${this.formatCurrency(this.totalAmount)} Kip Only`;
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
    // Format date
    formatDate(date) {
      if (!date) return '-';
      try {
        return new Date(date).toLocaleDateString('en-GB');
      } catch (e) {
        return '-';
      }
    },
    // Format currency
    formatCurrency(amount) {
      if (!amount && amount !== 0) return '0.00';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    },
    // Get payment method name
    getPaymentMethodName(id) {
      if (!id) return '-';
      const method = this.paymentMethods.find(m => m.id === id);
      return (method === null || method === void 0 ? void 0 : method.name) || (method === null || method === void 0 ? void 0 : method.methodName) || '-';
    },
    // Get bank account info
    getBankAccountInfo(id) {
      if (!id) return '-';
      const account = this.bankAccounts.find(a => a.id === id);
      if (!account) return '-';
      return `${account.bankName || ''} - ${account.accountNumber || ''}`;
    },
    // Get transaction code
    getTransactionCode(id) {
      if (!id) return '-';
      const txn = this.transactionCodes.find(t => t.id === id);
      return (txn === null || txn === void 0 ? void 0 : txn.code) || (txn === null || txn === void 0 ? void 0 : txn.transactionCode) || '-';
    },
    // Get GL account
    getGLAccount(id) {
      if (!id) return '-';
      const account = this.glAccounts.find(a => a.id === id);
      return (account === null || account === void 0 ? void 0 : account.code) || (account === null || account === void 0 ? void 0 : account.accountCode) || '-';
    },
    // Print voucher
    printVoucher() {
      const printContent = document.getElementById('voucher-print-area');
      if (!printContent) {
        this.$toast.error('Print content not found');
        return;
      }
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
        <head>
          <title>Payment Voucher - ${this.safeVoucherData.reference}</title>
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
            .voucher-container {
              background: white;
              padding: 20px;
              max-width: 900px;
              margin: 0 auto;
            }
            .voucher-header {
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
              max-height: 80px;
            }
            .company-name { 
              margin: 0 0 5px 0; 
              font-size: 22px; 
              font-weight: bold;
              color: primary;
            }
            .company-address, .company-contact { 
              margin: 3px 0; 
              font-size: 11px;
              color: #666;
            }
            .voucher-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px;
              color: #333;
            }
            .voucher-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .voucher-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 10px; 
              margin: 20px 0; 
            }
            .info-row { 
              padding: 5px 0; 
            }
            .label { 
              font-weight: bold; 
              margin-right: 10px; 
            }
            .voucher-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .voucher-table th, .voucher-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .voucher-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .voucher-table .text-center { 
              text-align: center; 
            }
            .voucher-table .text-right { 
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
            .voucher-description { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
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
// CONCATENATED MODULE: ./components/accounting/ap/settlement/voucher/index.vue?vue&type=script&lang=js
 /* harmony default export */ var settlement_vouchervue_type_script_lang_js = (vouchervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/voucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(678)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settlement_vouchervue_type_script_lang_js,
  vouchervue_type_template_id_50a443cc_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "50a443cc",
  "1d8f96b8"
  
)

/* harmony default export */ var voucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/index.vue?vue&type=template&id=4da37cd1&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "settlement-audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"settlement-audit-dialog\" data-v-4da37cd1>", "</div>", [_vm._ssrNode("<div class=\"settlement-audit-dialog-header\" data-v-4da37cd1><div class=\"header-info\" data-v-4da37cd1><h3 data-v-4da37cd1><i class=\"fas fa-history\" data-v-4da37cd1></i>\n          ປະຫວັດການດຳເນີນງານການຊຳລະ\n        </h3> " + (_vm.settlementInfo ? "<p class=\"settlement-subtitle\" data-v-4da37cd1>" + _vm._ssrEscape("\n          ການຊຳລະ: " + _vm._s(_vm.settlementInfo.settlementId) + " - \n          " + _vm._s(_vm.formatCurrency(_vm.settlementInfo.paymentAmount)) + " - \n          " + _vm._s(_vm.formatDate(_vm.settlementInfo.settlementDate)) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-4da37cd1><i class=\"fas fa-times\" data-v-4da37cd1></i></button></div> "), _vm._ssrNode("<div class=\"settlement-audit-dialog-body\" data-v-4da37cd1>", "</div>", [_c('settlement-audit-viewer', {
    ref: "settlementAuditViewer",
    attrs: {
      "settlement-id": _vm.settlementId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"settlement-audit-dialog-footer\" data-v-4da37cd1><button type=\"button\" class=\"btn btn-secondary\" data-v-4da37cd1><i class=\"fas fa-times\" data-v-4da37cd1></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-4da37cd1><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-4da37cd1>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-4da37cd1></i>" : "<i class=\"fas fa-download\" data-v-4da37cd1></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-4da37cd1><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-4da37cd1><i class=\"fas fa-caret-down\" data-v-4da37cd1></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-4da37cd1><button class=\"dropdown-item\" data-v-4da37cd1><i class=\"fas fa-code\" data-v-4da37cd1></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-4da37cd1><i class=\"fas fa-table\" data-v-4da37cd1></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-4da37cd1><i class=\"fas fa-print\" data-v-4da37cd1></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue?vue&type=template&id=4da37cd1&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/index.vue?vue&type=script&lang=js
var auditvue_type_script_lang_js = __webpack_require__(530);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue?vue&type=script&lang=js
 /* harmony default export */ var settlement_auditvue_type_script_lang_js = (auditvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(674)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settlement_auditvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4da37cd1",
  "05026f5e"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2538d378_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(680);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2538d378_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2538d378_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2538d378_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2538d378_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form-control[data-v-2538d378]{border:1px solid #ddd;border-radius:4px;font-size:12px;height:32px;padding:6px 8px;transition:border-color .2s ease;width:100%}.form-control[data-v-2538d378]:focus{border-color:#17a2b8;box-shadow:0 0 0 2px rgba(23,162,184,.1);outline:none}.form-control[data-v-2538d378]:disabled{background-color:#f8f9fa;color:#6c757d}.form-control.is-invalid[data-v-2538d378]{border-color:#e74c3c}.form-control-xs[data-v-2538d378]{font-size:11px;height:28px;padding:4px 6px}select.form-control[data-v-2538d378],select.form-control-xs[data-v-2538d378]{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto;background-color:#fff;cursor:pointer}select.form-control-xs[data-v-2538d378]:disabled,select.form-control[data-v-2538d378]:disabled{background-color:#e9ecef;cursor:not-allowed;opacity:.7}select.form-control-xs optgroup[data-v-2538d378]{background-color:#f8f9fa;color:#495057;font-style:normal;font-weight:600}select.form-control-xs option[data-v-2538d378]{font-size:11px;padding:4px 8px}.form-control-xs[data-v-2538d378]:focus,select.form-control-xs[data-v-2538d378]:focus{border-color:#17a2b8;box-shadow:0 0 0 2px rgba(23,162,184,.15);outline:none;z-index:2}.is-invalid[data-v-2538d378]{background-image:none}.is-invalid[data-v-2538d378],.is-invalid[data-v-2538d378]:focus{border-color:#dc3545!important}.is-invalid[data-v-2538d378]:focus{box-shadow:0 0 0 2px rgba(220,53,69,.25)}.invalid-feedback[data-v-2538d378]{color:#e74c3c;width:100%}.invalid-feedback[data-v-2538d378],.text-danger[data-v-2538d378]{display:block;font-size:10px;margin-top:2px}.text-danger[data-v-2538d378]{color:#dc3545!important}.text-truncate[data-v-2538d378]{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.text-right[data-v-2538d378]{text-align:right!important}.text-center[data-v-2538d378]{text-align:center!important}.required[data-v-2538d378]{color:#e74c3c;font-weight:700}.modal-overlay[data-v-2538d378]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1000}.modal-overlay[data-v-2538d378],.settlement-dialog[data-v-2538d378]{display:flex;height:100vh;width:100vw}.settlement-dialog[data-v-2538d378]{background:#fff;flex-direction:column;overflow:hidden}.dialog-header[data-v-2538d378]{align-items:center;background:linear-gradient(135deg,primary,secondary);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;min-height:50px;padding:12px 20px}.dialog-header h4[data-v-2538d378]{font-size:16px;font-weight:600;margin:0}.header-actions[data-v-2538d378]{gap:8px}.audit-btn[data-v-2538d378],.header-actions[data-v-2538d378]{align-items:center;display:flex}.audit-btn[data-v-2538d378]{background:hsla(0,0%,100%,.2);border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:12px;gap:4px;padding:6px 10px;transition:all .2s ease}.audit-btn[data-v-2538d378]:hover{background:hsla(0,0%,100%,.3)}.audit-text[data-v-2538d378]{font-size:11px}.close-btn[data-v-2538d378]{background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:16px;padding:4px;transition:all .2s ease}.close-btn[data-v-2538d378]:hover{background:hsla(0,0%,100%,.2)}.dialog-body[data-v-2538d378]{flex:1;overflow-y:auto;padding:0}.form-section[data-v-2538d378]{background:#fafafa;border-bottom:1px solid #e9ecef;margin:0;padding:15px}.section-title[data-v-2538d378]{align-items:center;border-bottom:1px solid #17a2b8;color:#333;display:flex;font-size:14px;font-weight:600;gap:6px;margin-bottom:12px;padding-bottom:4px}.section-title i[data-v-2538d378]{color:#17a2b8;font-size:13px}.section-header[data-v-2538d378]{gap:10px;justify-content:space-between;margin-bottom:12px}.section-actions[data-v-2538d378],.section-header[data-v-2538d378]{align-items:center;display:flex;flex-wrap:wrap}.section-actions[data-v-2538d378]{gap:8px}.allocation-info[data-v-2538d378]{display:flex;font-size:11px;gap:12px}.info-item[data-v-2538d378]{background:#fff;border:1px solid #ddd;border-radius:4px;padding:4px 8px}.form-grid[data-v-2538d378]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:10px;gap:10px}.span-2[data-v-2538d378]{grid-column:span 2}.form-group[data-v-2538d378]{margin-bottom:0}.form-group label[data-v-2538d378]{color:#333;display:block;font-size:12px;font-weight:500;margin-bottom:3px}.type-badge[data-v-2538d378]{border-radius:3px;display:inline-block;font-size:10px;font-weight:600;padding:3px 8px;text-transform:uppercase;white-space:nowrap}.type-badge.invoice[data-v-2538d378]{background:#e3f2fd;border:1px solid #90caf9;color:#1976d2}.type-badge.manual[data-v-2538d378]{background:#fff3e0;border:1px solid #ffb74d;color:#f57c00}.type-badge.mou[data-v-2538d378]{background:#e8f5e9;border:1px solid #81c784;color:#2e7d32}.no-invoices[data-v-2538d378]{background:#fff;border:2px dashed #ddd;border-radius:6px;color:#666;padding:30px 20px;text-align:center}.no-invoices i[data-v-2538d378]{font-size:32px;margin-bottom:10px;opacity:.5}.no-invoices p[data-v-2538d378]{font-size:14px;font-weight:600;margin:8px 0 15px}.action-buttons[data-v-2538d378]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.settlement-lines[data-v-2538d378]{background:#fff;border:1px solid #e9ecef;border-radius:6px;overflow:hidden}.table-responsive[data-v-2538d378]{overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table[data-v-2538d378]{border-collapse:collapse;font-size:11px;margin:0;width:100%}.table th[data-v-2538d378]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-size:11px;font-weight:600;padding:8px 4px;text-align:center;white-space:nowrap}.table td[data-v-2538d378],.table th[data-v-2538d378]{vertical-align:middle}.table td[data-v-2538d378]{border-top:1px solid #dee2e6;padding:6px 4px}.table td input.form-control-xs[data-v-2538d378],.table td select.form-control-xs[data-v-2538d378]{min-width:80px;width:100%}.table td[data-v-2538d378]:nth-child(5),.table th[data-v-2538d378]:nth-child(5){min-width:200px}.line-number[data-v-2538d378]{color:#666;font-size:10px;font-weight:600;text-align:center}.allocation-summary[data-v-2538d378]{background:#f8f9fa;border-top:2px solid #dee2e6;padding:10px 15px}.totals-inline[data-v-2538d378]{flex-wrap:wrap;font-size:12px;font-weight:600;gap:10px;justify-content:flex-end}.total-item[data-v-2538d378],.totals-inline[data-v-2538d378]{align-items:center;display:flex}.total-item[data-v-2538d378]{gap:6px}.total-item strong[data-v-2538d378]{color:#28a745;font-size:14px}.btn[data-v-2538d378]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:500;gap:4px;padding:6px 12px;transition:all .2s ease;white-space:nowrap}.btn-primary[data-v-2538d378]{background:#007bff;color:#fff}.btn-primary[data-v-2538d378]:hover:not(:disabled){background:#0056b3}.btn-secondary[data-v-2538d378]{background:#6c757d;color:#fff}.btn-secondary[data-v-2538d378]:hover:not(:disabled){background:#545b62}.btn-success[data-v-2538d378]{background:#28a745;color:#fff}.btn-success[data-v-2538d378]:hover:not(:disabled){background:#218838}.btn-info[data-v-2538d378]{background:#17a2b8;color:#fff}.btn-info[data-v-2538d378]:hover:not(:disabled){background:#138496}.btn-danger[data-v-2538d378]{background:#dc3545;color:#fff}.btn-danger[data-v-2538d378]:hover:not(:disabled){background:#c82333}.btn-sm[data-v-2538d378]{font-size:11px;padding:4px 8px}.btn-xs[data-v-2538d378]{align-items:center;border-radius:50%;display:flex;font-size:10px;height:24px;justify-content:center;padding:0;width:24px}.btn[data-v-2538d378]:hover:not(:disabled){box-shadow:0 2px 4px rgba(0,0,0,.1);opacity:.95;transform:translateY(-1px)}.btn[data-v-2538d378]:disabled{cursor:not-allowed;opacity:.6;transform:none}.dialog-footer[data-v-2538d378]{background:#f8f9fa;border-top:1px solid #e9ecef;min-height:56px;padding:12px 20px}.footer-actions[data-v-2538d378]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.form-grid[data-v-2538d378]{grid-template-columns:1fr}.span-2[data-v-2538d378]{grid-column:span 1}.section-header[data-v-2538d378]{align-items:flex-start;flex-direction:column}.section-actions[data-v-2538d378]{width:100%}.allocation-info[data-v-2538d378]{flex-direction:column;gap:6px;width:100%}.totals-inline[data-v-2538d378]{align-items:flex-start;gap:6px}.footer-actions[data-v-2538d378],.totals-inline[data-v-2538d378]{flex-direction:column}.footer-actions .btn[data-v-2538d378]{justify-content:center;width:100%}.action-buttons[data-v-2538d378]{flex-direction:column}.action-buttons .btn[data-v-2538d378]{width:100%}.table-responsive[data-v-2538d378]{border:1px solid #dee2e6;border-radius:4px}.table[data-v-2538d378]{min-width:900px}.table td[data-v-2538d378]:nth-child(5),.table th[data-v-2538d378]:nth-child(5){min-width:180px}}@media (max-width:480px){.dialog-header[data-v-2538d378]{padding:10px 15px}.dialog-header h4[data-v-2538d378]{font-size:14px}.header-actions[data-v-2538d378]{gap:6px}.audit-text[data-v-2538d378]{display:none}.form-section[data-v-2538d378]{padding:12px}.dialog-footer[data-v-2538d378]{padding:10px 15px}.table td[data-v-2538d378]:nth-child(5),.table th[data-v-2538d378]:nth-child(5){min-width:150px}select.form-control-xs option[data-v-2538d378]{font-size:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=accounting-ap-settlement.js.map