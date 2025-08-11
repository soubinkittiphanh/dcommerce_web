exports.ids = [101,33];
exports.modules = {

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(423);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(413);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ReservationForm.vue?vue&type=template&id=20c1874e&



















var ReservationFormvue_type_template_id_20c1874e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1024"
    },
    model: {
      value: _vm.customerDialog,
      callback: function ($$v) {
        _vm.customerDialog = $$v;
      },
      expression: "customerDialog"
    }
  }, [_c('customer-list', {
    on: {
      "close-dialog": function ($event) {
        _vm.customerDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1024"
    },
    model: {
      value: _vm.cancelConfirmDialog,
      callback: function ($$v) {
        _vm.cancelConfirmDialog = $$v;
      },
      expression: "cancelConfirmDialog"
    }
  }, [_c('cancel-ticket-form', {
    attrs: {
      "id": _vm.headerId
    },
    on: {
      "refresh": function ($event) {
        return _vm.$emit('reload');
      },
      "close-dialog": function ($event) {
        _vm.cancelConfirmDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1024"
    },
    model: {
      value: _vm.pricingDialog,
      callback: function ($$v) {
        _vm.pricingDialog = $$v;
      },
      expression: "pricingDialog"
    }
  }, [_c('pricing-option', {
    key: _vm.pricingDialogKey,
    attrs: {
      "isBackend": true,
      "record-id": _vm.productPricingSelected
    },
    on: {
      "new-price-update": _vm.updatePricing,
      "close-dialog": function ($event) {
        _vm.pricingDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VBottomSheet["a" /* default */], {
    attrs: {
      "inset": ""
    },
    model: {
      value: _vm.sheet,
      callback: function ($$v) {
        _vm.sheet = $$v;
      },
      expression: "sheet"
    }
  }, [_c(VSheet["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "height": "200px"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mt-6",
    attrs: {
      "text": "",
      "color": "error"
    },
    on: {
      "click": function ($event) {
        _vm.sheet = !_vm.sheet;
      }
    }
  }, [_vm._v("\n                   close\n               ")]), _vm._v(" "), _c('div', {
    staticClass: "my-3"
  }, [_vm._v("\n                   " + _vm._s(_vm.validateErrorMessage) + "\n               ")])], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VChip["a" /* default */], {
    staticClass: "pa-5",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v(" "), _c('h3', [_vm._v("RESERVATION")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "cols": "6"
    }
  }, [_vm.isQuotation ? _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.postToInvoice
    }
  }, [_c('span', {
    staticClass: "mdi mdi-cancel"
  }), _vm._v("Make to invoice\n                       ")]) : _vm._e(), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "warning",
    attrs: {
      "disabled": !_vm.isUpdate || !_vm.transaction.isActive,
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.cancelOrder
    }
  }, [_c('span', {
    staticClass: "mdi mdi-printer-outline"
  }), _vm._v("ຍົກເລີກບິນ\n                       ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.quotationPreview
    }
  }, [_c('span', {
    staticClass: "mdi mdi-printer-outline"
  }), _vm._v("Print\n                       ")])], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-1"
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-1",
    style: _vm.headerError ? `outline:1px solid red` : ``
  }, [_vm._v("\n                   " + _vm._s(`ເລກທີຈອງ #`) + "\n                   " + _vm._s(_vm.transaction.id) + "\n                   "), _c(components_VCard["c" /* VCardText */], [_c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີ*",
      "hint": "ເດຶອນ/ວັນ/ປີ 12/31/2023"
    },
    model: {
      value: _vm.transaction.checkin_date,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "checkin_date", $$v);
      },
      expression: "transaction.checkin_date"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີສົ່ງ*",
      "hint": "ເດຶອນ/ວັນ/ປີ 12/31/2023"
    },
    model: {
      value: _vm.transaction.checkout_date,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "checkout_date", $$v);
      },
      expression: "transaction.checkout_date"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "payment_code",
      "item-value": "id",
      "items": _vm.paymentList,
      "label": "ການຊຳລະ*"
    },
    model: {
      value: _vm.transaction.paymentId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "paymentId", $$v);
      },
      expression: "transaction.paymentId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ສ່ວນຫລຸດ*",
      "required": ""
    },
    model: {
      value: _vm.transaction.discount,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "discount", $$v);
      },
      expression: "transaction.discount"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຊື່ລູກຄ້າ"
    },
    model: {
      value: _vm.transaction.customer_name,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "customer_name", $$v);
      },
      expression: "transaction.customer_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເບິໂທ"
    },
    model: {
      value: _vm.transaction.customer_telephone,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "customer_telephone", $$v);
      },
      expression: "transaction.customer_telephone"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ທີ່ຢູ່"
    },
    model: {
      value: _vm.transaction.customer_address,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "customer_address", $$v);
      },
      expression: "transaction.customer_address"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.currencyList,
      "label": "ສະກຸນເງິນ*"
    },
    on: {
      "input": _vm.currencyChange
    },
    model: {
      value: _vm.transaction.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "currencyId", $$v);
      },
      expression: "transaction.currencyId"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "end"
    },
    attrs: {
      "cols": "4"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Notes"
    },
    model: {
      value: _vm.transaction.remark,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "remark", $$v);
      },
      expression: "transaction.remark"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": ""
    },
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        return [_c('span', {
          staticStyle: {
            "color": "black",
            "font-weight": "bold"
          }
        }, [_vm._v(_vm._s(`Total Amount:
                                                       ${_vm.getFormatNum(_vm.grandTotal)}`))])];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "ອັດຕາແລກປ່ຽນ*"
    },
    model: {
      value: _vm.transaction.exchangeRate,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "exchangeRate", $$v);
      },
      expression: "transaction.exchangeRate"
    }
  })], 1)], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _vm.transaction.lines ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.transaction.lines
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('tr', {
          style: _vm.errorLineNumber == _vm.transaction.lines.indexOf(item) ? `outline: 1px solid red` : ``
        }, [_c('td', {
          class: _vm.errorLineNumber == _vm.transaction.lines.indexOf(item) ? `error` : ``
        }, [_vm._v("\n                               " + _vm._s(_vm.transaction.lines.indexOf(item) + 1) + "\n                           ")]), _vm._v(" "), _c('td', [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "item-text": "pro_name",
            "item-value": "id",
            "items": _vm.productList,
            "label": "ສິນຄ້າ*"
          },
          on: {
            "input": function ($event) {
              return _vm.productChange(item);
            }
          },
          model: {
            value: item.productId,
            callback: function ($$v) {
              _vm.$set(item, "productId", $$v);
            },
            expression: "item.productId"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "label": "ຈຳນວນ",
            "rules": [_vm.numberCommaRule]
          },
          on: {
            "input": function ($event) {
              return _vm.quantityChange(item);
            }
          },
          model: {
            value: item.qty,
            callback: function ($$v) {
              _vm.$set(item, "qty", $$v);
            },
            expression: "item.qty"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "item-text": "name",
            "item-value": "id",
            "items": _vm.unitList,
            "label": "ຫົວຫນ່ວຍ*"
          },
          on: {
            "input": function ($event) {
              return _vm.unitChange(item);
            }
          },
          model: {
            value: item.unitId,
            callback: function ($$v) {
              _vm.$set(item, "unitId", $$v);
            },
            expression: "item.unitId"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "label": "ຈນ ຕໍ່ ຫົວຫນ່ວຍ",
            "rules": [_vm.numberCommaRule]
          },
          on: {
            "input": function ($event) {
              return _vm.unitRateChange(item);
            }
          },
          model: {
            value: item.rate,
            callback: function ($$v) {
              _vm.$set(item, "rate", $$v);
            },
            expression: "item.rate"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "text-align": "right"
          }
        }, [_c(VChip["a" /* default */], {
          staticClass: "ml-0",
          attrs: {
            "color": "warning",
            "variant": "outlined"
          },
          on: {
            "click": function ($event) {
              return _vm.pricingLogig(item);
            }
          }
        }, [_vm._v("\n                                   " + _vm._s(_vm.getFormatNum(item.price)) + "\n                               ")])], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "text-align": "right"
          }
        }, [_vm._v("\n                               " + _vm._s(_vm.getFormatNum(item.total)) + "\n                           ")]), _vm._v(" "), _c('td', [_c(VBtn["a" /* default */], {
          attrs: {
            "disabled": !_vm.transaction.isActive || !_vm.updateAllow,
            "color": "error",
            "text": ""
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item);
            },
            "keydown": _vm.handleKeyDown
          }
        }, [_c('i', {
          staticClass: "fas fa-trash"
        })])], 1)])];
      }
    }], null, false, 1442914688)
  }) : _vm._e(), _vm._v(" "), _vm.transaction.lines.length == 0 ? _c('tr', [_c('td', [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.newRow
    }
  }, [_c('span', {
    staticClass: "mdi mdi-plus"
  })])], 1)]) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v("\n                   Close\n               ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "disabled": !_vm.transaction.isActive || !_vm.updateAllow,
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.postTransaction
    }
  }, [_vm._v("\n                   Save\n               ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ReservationForm.vue?vue&type=template&id=20c1874e&

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(395);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/PricingOption.vue + 4 modules
var PricingOption = __webpack_require__(87);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./components/CancelTicketForm.vue + 4 modules
var CancelTicketForm = __webpack_require__(387);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ReservationForm.vue?vue&type=script&lang=js&





/* harmony default export */ var ReservationFormvue_type_script_lang_js_ = ({
  components: {
    PricingOption: PricingOption["default"],
    CancelTicketForm: CancelTicketForm["default"]
  },
  props: {
    headerId: {
      type: Number,
      default: 0
    },
    isQuotation: {
      type: Boolean,
      default: false
    },
    isUpdate: {
      type: Boolean,
      default: false
    },
    updateAllow: {
      type: Boolean,
      default: true
    }
  },
  directives: {
    commaThousand: comma_thousand["a" /* default */]
  },
  async created() {
    if (this.isUpdate) {
      console.log("View old record");
      this.isloading = true;
      await this.loadTransaction();
      this.isloading = false;
    } else {
      const today = new Date().toISOString().substr(0, 10);
      this.transaction.checkin_date = today;
      this.transaction.checkout_date = today;
      this.transaction.clientId = 1;
      this.transaction.paymentId = 1;
      this.transaction.currencyId = 1;
      this.transaction.discount = 0;
      this.newRow();
    }

    // TODO: Add pricing option here
  },

  methods: {
    cancelOrder() {
      this.cancelConfirmDialog = true;
    },
    updatePricing(priceInfo) {
      let newPrice = priceInfo['amount'];
      console.log(`New pricing ${newPrice}`);
      console.log(`New pricing ${JSON.stringify(this.transaction.lines[0])}`);
      const idx = this.transaction.lines.findIndex(el => el['productId'] == this.productPricingSelected);
      if (idx < 0) return;
      const qty = this.transaction.lines[idx]["qty"];
      const rate = this.transaction.lines[idx]["rate"];
      const discount = 0; // this.transaction.lines[idx]["discount"]
      if (priceInfo['type'] != 'Price') {
        // ************ Increase price by percentage ************ //
        let currentPrice = this.transaction.lines[idx]['price'];
        const updatedPrice = currentPrice * newPrice / 100 + currentPrice;
        this.transaction.lines[idx]['total'] = qty * rate * updatedPrice - discount;
        this.transaction.lines[idx]['price'] = updatedPrice;
      } else {
        this.transaction.lines[idx]['total'] = qty * rate * newPrice - discount;
        this.transaction.lines[idx]['price'] = newPrice;
      }
    },
    pricingLogig(item) {
      console.log(`PRINCING CLICK....${JSON.stringify(item)}`);
      this.productPricingSelected = item['productId'];
      this.pricingDialogKey += 1;
      this.pricingDialog = true;
    },
    findCurrency(currencyId) {
      return this.findAllCurrency.find(el => el.id == currencyId);
    },
    quotationPreview() {
      const path = this.isQuotation ? 'PDFQuotation' : 'PDFInvoice';
      window.open(`/admin/${path}/${this.headerId}`, '_blank');
    },
    handleKeyDown(event) {
      if (event.key === 'Tab') {
        // Handle tab key press
        console.log('Tab key pressed');
        this.newRow();
      }
    },
    currencyChange() {
      const currency = this.currencyList.find(el => el['id'] == this.transaction.currencyId);
      if (!currency) return;
      this.transaction.exchangeRate = currency['rate'];
      console.log(`Rate exchange ${currency['rate']} real value ${this.transaction.exchangeRate}`);
    },
    async deleteItem(item) {
      if (item.id) {
        console.log("Line has id");
        this.isloading = true;
        await this.$axios.delete(`api/${this.apiLine}Line/find/${item.id}`).then(res => {
          this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1);
        }).catch(er => {
          Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Operation fail ' + er.Error);
        });
        this.isloading = false;
      } else {
        this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1);
        console.log("Line has no id");
      }
    },
    quantityChange(data) {
      console.log("Qty change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      const discount = 0; // replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price - discount;
    },
    unitRateChange(data) {
      console.log("Unit rate change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      const discount = 0; //replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price - discount;
    },
    discountChange(data) {
      console.log("Discount change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      const discount = 0; // replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price - discount;
    },
    unitChange(data) {
      console.log("Unit change");
      const unit = this.unitList.find(el => el['id'] == data['unitId']);
      if (unit == undefined) return;
      let index = this.transaction.lines.indexOf(data);
      this.transaction.lines[index]['rate'] = unit['rate'];
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const discount = 0; // replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = unit['rate'] * qty * price - discount;
    },
    productChange(data) {
      console.log("Product change");
      const product = this.productList.find(el => el['id'] == data['productId']);
      if (product == undefined) {
        console.log("Product is not define");
        return;
      }
      let index = this.transaction.lines.indexOf(data);
      const currency = this.findCurrency(product['saleCurrencyId']);
      console.log(`$$$$$$ ${currency.id} $$$$$$`);
      const localPrice = product['pro_price'] * currency['rate'];
      // this.transaction.lines[index]['price'] = product['pro_price'] // *** Price original  ***
      this.transaction.lines[index]['price'] = localPrice; //  *** Price base on exchange rate  ***
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const discount = 0; // replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price - discount;
    },
    newRow() {
      const defaultLine = {
        // "id":null,
        "qty": 0,
        "rate": 1,
        "price": 0,
        "discount": 0,
        "total": 0,
        "isActive": true,
        "productId": 0,
        "unitId": 1
      };
      this.transaction.lines.push(defaultLine);
    },
    openCustomerDialog() {
      this.customerDialog = true;
    },
    async loadTransaction() {
      await this.$axios.get(`api/${this.apiLine}/find/${this.headerId}`).then(res => {
        this.transaction = res.data;
        console.log("Data ", res.data);
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + er.Error);
      });
    },
    post() {
      this.errorLineNumber = null;
      for (const iterator of this.transaction.lines) {
        this.errorLineNumber = this.transaction.lines.indexOf(iterator);
        if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
          this.sheet = true;
          return;
        }
        iterator['total'] = iterator['qty'] * iterator['rate'] * iterator['price'] - iterator['discount'];
      }
      console.log("******** No error found process posting ********");
      this.errorLineNumber = null;
      //  ********** Enable below line to confirm before clear ***********//
      // confirmSwal(this.$swal, 'You are posting to invoice ?', this.postToInvoice)
      // this.clearCart()
    },

    validateLine(obj, errorLineNumber) {
      // Check if the object has all required properties
      let {
        qty,
        rate,
        price,
        discount,
        total,
        productId,
        unitId
      } = obj;
      discount = 0; // parseInt(discount)
      rate = parseInt(rate);
      qty = parseInt(qty);
      if (!Number.isFinite(qty) || Number(qty) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຈຳນວນ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${qty}********`;
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(rate) || Number(rate) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ອັດຕາຫົວຫນ່ວຍ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${rate}********`;
        return false; // Reach must be a positive number
      }

      console.log("Type of price ", typeof price, ' [price] ', price);
      if (!Number.isFinite(price) || Number(price) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ລາຄາ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${price}********`;
        return false; // Reach must be a positive number
      }

      console.log("Type of discount1 ", typeof discount);
      if (!Number.isFinite(discount)) {
        console.log("Type of discount2 ", typeof discount);
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສ່ວນລົດ ຕ້ອງເປັນຕົວເລກ  current value is ${discount}********`;
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(total) || Number(total) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຍອດລວມ ຕ້ອງໃຫຍ່ກ່ອນ 0 current value is ${total}********`;
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(productId)) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສິນຄ້າບໍ່ຖືກຕ້ອງ  current value is ${productId}********`;
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(unitId)) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຫົວຫນ່ວຍບໍ່ຖືກຕ້ອງ  current value is ${unitId}********`;
        return false; // Reach must be a positive number
      }

      return true;
    },
    validateHeader() {
      this.headerError = true;
      this.sheet = true;
      console.log('=== currency id ', this.transaction.currencyId);
      if (!this.transaction.currencyId) {
        this.validateErrorMessage = `******** Error Currency in Header #${this.transaction.currencyId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`;
        return false; // Reach must be a positive number
      }

      if (!this.transaction.paymentId) {
        this.validateErrorMessage = `******** Error Payment in Header #${this.transaction.paymentId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`;
        return false; // Reach must be a positive number
      }
      // if (!this.transaction.clientId) {
      //     this.validateErrorMessage = `******** Error Customer in Header #${this.transaction.clientId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
      //     return false; // Reach must be a positive number
      // }
      if (this.transaction.lines.length == 0) {
        this.validateErrorMessage = `******** Error Header ບໍ່ມີລາຍການສິນຄ້າ ********`;
        return false; // Reach must be a positive number
      }

      this.sheet = false;
      this.headerError = false;
      return true;
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val);
    },
    toggleDialog() {
      this.$emit('close-dialog');
    },
    async postToInvoice() {
      if (this.isloading || !this.validateHeader()) return;
      this.isloading = true;
      this.errorLineNumber = null;
      const draftInvoiceLine = [];
      for (const iterator of this.transaction.lines) {
        this.errorLineNumber = this.transaction.lines.indexOf(iterator);
        if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
          this.sheet = true;
          this.isloading = false;
          return;
        }
        // iterator.id = null
        iterator.discount = 0; // parseInt(replaceAll(iterator.discount, ',', ''))
        iterator.qty = parseInt(Object(common["h" /* replaceAll */])(iterator.qty, ',', ''));
        iterator.rate = parseInt(Object(common["h" /* replaceAll */])(iterator.rate, ',', ''));
        draftInvoiceLine.push(iterator);
        // iterator['total'] = ((iterator['quantity'] * iterator['unitRate']) * iterator['price']) - iterator['discount']
      }
      // Remove Line id for insert as new in Invoice //
      for (const iterator of draftInvoiceLine) {
        iterator.id = null;
      }
      console.log("******** No error found process posting ********");
      this.errorLineNumber = null;
      this.transaction.userId = this.user.id;
      this.transaction.total = this.grandTotal;
      this.transaction.referenceNo = this.headerId;
      this.transaction.lines = draftInvoiceLine;
      this.transaction.discount = Object(common["h" /* replaceAll */])(this.transaction.discount, ',', '');
      this.transaction.locationId = this.currentTerminal['locationId'];
      console.log(`Amount total ${this.transaction.total}`);
      // ********** If header has data, that means we go for update API ********** //
      await this.$axios.post(`api/sale/create`, this.transaction).then(res => {
        this.$emit('reload');
        Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
      }).catch(er => {
        console.error(er);
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', er.response.data);
        const outOfStockProductId = er.response.data.split("#")[1];
        if (outOfStockProductId != undefined) {
          this.validateErrorMessage = `********  ສິນຄ້າໃນສ້າງບໍ່ພຽງພໍ ********`;
          this.errorLineNumber = this.transaction.lines.indexOf(this.transaction.lines.find(el => el.productId == outOfStockProductId));
          this.sheet = true;
        }
        console.log('Error ===>: ' + er);
      });
      this.isloading = false;
    },
    async postTransaction() {
      if (this.isloading || !this.validateHeader()) return;
      this.isloading = true;
      this.errorLineNumber = null;
      for (const iterator of this.transaction.lines) {
        this.errorLineNumber = this.transaction.lines.indexOf(iterator);
        if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
          this.sheet = true;
          this.isloading = false;
          return;
        }
        iterator.discount = 0; // parseInt(replaceAll(iterator.discount, ',', ''))
        iterator.qty = parseInt(Object(common["h" /* replaceAll */])(iterator.qty, ',', ''));
        iterator.rate = parseInt(Object(common["h" /* replaceAll */])(iterator.rate, ',', ''));
        // iterator['total'] = ((iterator['quantity'] * iterator['unitRate']) * iterator['price']) - iterator['discount']
      }

      console.log("******** No error found process posting ********");
      this.errorLineNumber = null;
      this.transaction.userId = this.user.id;
      this.transaction.total = this.grandTotal;
      this.transaction.discount = Object(common["h" /* replaceAll */])(this.transaction.discount, ',', '');
      // this.transaction.locationId = this.currentTerminal['locationId'] // it is no need for reservation module
      console.log(`Amount total ${this.transaction.total}`);
      if (this.isUpdate) {
        // ********** If header has data, that means we go for update API ********** //
        await this.$axios.put(`api/${this.apiLine}/update/${this.headerId}`, this.transaction).then(res => {
          this.$emit('reload');
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(er => {
          console.error(er);
          Object(common["j" /* swalError2 */])(this.$swal, 'Error', er.response.data);
          const outOfStockProductId = er.response.data.split("#")[1];
          if (outOfStockProductId != undefined) {
            const pronductOutStock = this.productList.find(el => el.id == outOfStockProductId);
            this.validateErrorMessage = `********  ສິນຄ້າ ${pronductOutStock['pro_name']} ໃນສ້າງບໍ່ພຽງພໍ ********`;
            this.errorLineNumber = this.transaction.lines.indexOf(this.transaction.lines.find(el => el.productId == outOfStockProductId));
            this.sheet = true;
          }
          console.log('Error ===>: ' + er);
        });
      } else {
        // ********** Go for create API ********** //
        await this.$axios.post(`api/${this.apiLine}/create`, this.transaction).then(res => {
          this.$emit('reload');
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(er => {
          console.error(er);
          Object(common["j" /* swalError2 */])(this.$swal, 'Error', er.response.data);
          const outOfStockProductId = er.response.data.split("#")[1];
          if (outOfStockProductId != undefined) {
            this.validateErrorMessage = `********  ສິນຄ້າໃນສ້າງບໍ່ພຽງພໍ ********`;
            this.errorLineNumber = this.transaction.lines.indexOf(this.transaction.lines.find(el => el.productId == outOfStockProductId));
            this.sheet = true;
          }
          console.log('Error ===>: ' + er);
        });
      }
      this.isloading = false;
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
    clientList() {
      return this.findAllClient;
    },
    currentTerminal() {
      console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    user() {
      return this.$auth.user || '';
    },
    apiLine() {
      return 'reservation';
    },
    productList() {
      return this.findAllProduct;
    },
    paymentList() {
      return this.findAllPayment;
    },
    unitList() {
      return this.findAllUnit;
    },
    currencyList() {
      return this.findAllCurrency;
    },
    numberRule() {
      return [value => value !== undefined && value !== null && value !== '' || 'Field is required', value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'];
    },
    grandTotal() {
      let total = this.transaction.lines.reduce((total, item) => {
        return total + item.total;
      }, 0);
      const discount = Object(common["h" /* replaceAll */])(this.transaction.discount, ',', '');
      return total - discount;
      // return total;
    }
  },

  data() {
    return {
      cancelConfirmDialog: false,
      productPricingSelected: null,
      pricingDialogKey: 1,
      pricingDialog: false,
      search: '',
      numberCommaRule: value => {
        const regex = /^[0-9,]*$/;
        return regex.test(value) || 'Only numbers and commas are allowed';
      },
      headerError: false,
      customerDialog: false,
      validateErrorMessage: '',
      sheet: false,
      errorLineNumber: null,
      isloading: false,
      transaction: {
        customer_name: '',
        customer_telephone: '',
        customer_address: '',
        isActive: true,
        exchangeRate: 1,
        lines: []
      },
      headers: [{
        text: '#',
        align: 'start',
        value: ''
      }, {
        text: 'ສິນຄ້າ',
        align: 'start',
        value: 'product.pro_name'
      }, {
        text: 'ຈຳນວນ',
        align: 'end',
        value: 'qty'
      }, {
        text: 'ຫົວຫນ່ວຍ',
        align: 'end',
        value: 'unitId',
        sortable: true
      }, {
        text: 'unit rate',
        align: 'end',
        value: 'rate',
        sortable: true
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'price',
        sortable: true
      },
      // {
      //     text: 'ສ່ວນຫລຸດ',
      //     align: 'end',
      //     value: 'discount',
      //     sortable: true,
      // },

      {
        text: 'ລວມ',
        align: 'end',
        value: 'total',
        sortable: false
      }, {
        text: 'delete',
        align: 'end',
        value: 'id',
        sortable: false
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/ReservationForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ReservationFormvue_type_script_lang_js_ = (ReservationFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ReservationForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ReservationFormvue_type_script_lang_js_,
  ReservationFormvue_type_template_id_20c1874e_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "19ba522d"
  
)

/* harmony default export */ var ReservationForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,CustomerList: __webpack_require__(88).default,CancelTicketForm: __webpack_require__(387).default,PricingOption: __webpack_require__(87).default})


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CancelTicketForm.vue?vue&type=template&id=1b356803&








var CancelTicketFormvue_type_template_id_1b356803_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isLoading,
      callback: function ($$v) {
        _vm.isLoading = $$v;
      },
      expression: "isLoading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_vm._v("\n        ຍົກເລີກບິນ\n        "), _c(VForm["a" /* default */], {
    ref: "myform",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "ເລກທີອໍເດີ "
    },
    model: {
      value: _vm.id,
      callback: function ($$v) {
        _vm.id = $$v;
      },
      expression: "id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເຫດຜົນການຍົກເລີກ",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.remark,
      callback: function ($$v) {
        _vm.$set(_vm.form, "remark", $$v);
      },
      expression: "form.remark"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄ່າທຳນຽມ"
    },
    model: {
      value: _vm.form.cancel_fee,
      callback: function ($$v) {
        _vm.$set(_vm.form, "cancel_fee", $$v);
      },
      expression: "form.cancel_fee"
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "warning",
    attrs: {
      "text": "",
      "rounded": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                ປິດ\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "text": "",
      "rounded": ""
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_vm._v("\n                ຢືນຢັນ\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CancelTicketForm.vue?vue&type=template&id=1b356803&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CancelTicketForm.vue?vue&type=script&lang=js&

/* harmony default export */ var CancelTicketFormvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: Number,
      require: false
    },
    customerId: {
      type: Number,
      require: false,
      default: null
    }
  },
  data() {
    return {
      isLoading: false,
      form: {
        isActive: false,
        remark: '',
        cancel_fee: 0
      },
      nameRules: [value => !!value || 'ກະລຸນາ ໃສ່ເຫດຜົນ', value => value.toString().length <= 100 || 'Reason must be less than 100 characters']
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    }
  },
  methods: {
    async submitForm() {
      if (this.$refs.myform.validate() && !this.isLoading) {
        this.isLoading = true;
        try {
          this.form.customerId = this.customerId;
          console.log(`${JSON.stringify(this.form)}`);
          const response = await this.$axios.put(`api/sale/reverse/${this.id}`, this.form);
          if (response.status = 200) {
            this.refreshData();
            Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          }
        } catch (error) {
          Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Something went wrong ' + error);
        }
        this.isLoading = false;
      } else {
        // Form is invalid, do not submit
        return;
      }
      this.isLoading = false;
    },
    refreshData() {
      this.$emit('reload-data');
    }
  }
});
// CONCATENATED MODULE: ./components/CancelTicketForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CancelTicketFormvue_type_script_lang_js_ = (CancelTicketFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CancelTicketForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CancelTicketFormvue_type_script_lang_js_,
  CancelTicketFormvue_type_template_id_1b356803_render,
  staticRenderFns,
  false,
  null,
  null,
  "f914fd46"
  
)

/* harmony default export */ var CancelTicketForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(389);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bind(el, binding, vnode) {
    el.addEventListener("input", function (event) {
      // Remove any non-numeric characters
      let value = event.target.value.replace(/[^0-9]/g, "");
      // Format the value with comma-separated thousands
      value = parseInt(value, 10).toLocaleString("en-US");
      // Update the input value
      if (value === 'NaN') value = '0';
      vnode.componentInstance.$emit("input", value);
    });
  }
});

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(400);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("73bba828", content, true)

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{transform:translateY(100%)}.v-bottom-sheet.v-dialog{align-self:flex-end;border-radius:0;flex:0 1 auto;margin:0;overflow:visible}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%}@media only screen and (max-width:599.98px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }
  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _a;
        val ? this.calculateInputHeight() : (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
      });
    },
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },
    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },
  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },
    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },
    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },
    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }
      this.$emit('keydown', e);
    }
  }
}));

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var _src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(337);
 // Extensions


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-bottom-sheet',
  props: {
    inset: Boolean,
    maxWidth: [String, Number],
    transition: {
      type: String,
      default: 'bottom-sheet-transition'
    }
  },
  computed: {
    classes() {
      return {
        ..._VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-bottom-sheet': true,
        'v-bottom-sheet--inset': this.inset
      };
    }
  }
}));

/***/ })

};;
//# sourceMappingURL=reservation-form.js.map