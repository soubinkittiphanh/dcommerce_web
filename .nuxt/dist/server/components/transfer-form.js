exports.ids = [155];
exports.modules = {

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(409);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(482);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(434);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TransferForm.vue?vue&type=template&id=1288710a

















var TransferFormvue_type_template_id_1288710a_render = function render() {
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
  }, [_vm._v("\n                close\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "my-3"
  }, [_vm._v("\n                " + _vm._s(_vm.validateErrorMessage) + "\n            ")])], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.preview
    }
  }, [_c('span', {
    staticClass: "mdi mdi-printer-outline"
  }), _vm._v("Print\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VCard["a" /* default */], {
    style: _vm.headerError ? `outline:1px solid red` : ``
  }, [_vm._v("\n                " + _vm._s(_vm.isQuotation ? `Quotation #` : `Invoice #`) + "\n                " + _vm._s(_vm.transaction.id) + "\n                "), _c(components_VCard["c" /* VCardText */], [_c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
      value: _vm.transaction.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "bookingDate", $$v);
      },
      expression: "transaction.bookingDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ReferenceNo"
    },
    model: {
      value: _vm.transaction.referenceNo,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "referenceNo", $$v);
      },
      expression: "transaction.referenceNo"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.locationList,
      "label": "Source location*"
    },
    model: {
      value: _vm.transaction.srcLocationId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "srcLocationId", $$v);
      },
      expression: "transaction.srcLocationId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.locationList,
      "label": "Dest location*"
    },
    model: {
      value: _vm.transaction.desLocationId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "desLocationId", $$v);
      },
      expression: "transaction.desLocationId"
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
  })], 1), _vm._v(" "), _vm.transaction.user ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ຜູ້ລົງ: " + _vm._s(_vm.transaction.user.cus_id) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _vm.transaction.user ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ຊື່: " + _vm._s(_vm.transaction.user.cus_name))]) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
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
        }, [_vm._v("\n                            " + _vm._s(_vm.transaction.lines.indexOf(item) + 1) + "\n                        ")]), _vm._v(" "), _c('td', [_c(VAutocomplete["a" /* default */], {
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
            value: item.quantity,
            callback: function ($$v) {
              _vm.$set(item, "quantity", $$v);
            },
            expression: "item.quantity"
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
            value: item.unitRate,
            callback: function ($$v) {
              _vm.$set(item, "unitRate", $$v);
            },
            expression: "item.unitRate"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "text-align": "right"
          }
        }, [_vm._v("\n                            " + _vm._s(_vm.getFormatNum(item.price)) + "\n                        ")]), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "rules": [_vm.numberCommaRule],
            "label": "ສ່ວນຫລຸດ"
          },
          on: {
            "input": function ($event) {
              return _vm.discountChange(item);
            }
          },
          model: {
            value: item.discount,
            callback: function ($$v) {
              _vm.$set(item, "discount", $$v);
            },
            expression: "item.discount"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "text-align": "right"
          }
        }, [_vm._v("\n                            " + _vm._s(_vm.getFormatNum(item.total)) + "\n                        ")]), _vm._v(" "), _c('td', [_c(VBtn["a" /* default */], {
          attrs: {
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
    }], null, false, 2946179411)
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
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), !_vm.isUpdate ? _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.postTransaction
    }
  }, [_vm._v("\n                Save\n            ")]) : _vm._e()], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TransferForm.vue?vue&type=template&id=1288710a

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(457);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TransferForm.vue?vue&type=script&lang=js



/* harmony default export */ var TransferFormvue_type_script_lang_js = ({
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
    }
  },
  directives: {
    commaThousand: comma_thousand["a" /* default */]
  },
  async created() {
    await this.loadLocation();
    if (this.isUpdate) {
      console.log("View old record");
      this.isloading = true;
      await this.loadTransaction();
      this.isloading = false;
    } else {
      const today = new Date().toISOString().substr(0, 10);
      this.transaction.bookingDate = today;
      this.transaction.srcLocationId = 1;
      this.transaction.desLocationId = 1;
      this.newRow();
    }
  },
  methods: {
    preview() {
      const path = this.isQuotation ? 'PDFQuotation' : 'PDFInvoice';
      window.open(`/admin/PDFTransfer/${this.headerId}`, '_blank');
    },
    handleKeyDown(event) {
      if (event.key === 'Tab') {
        // Handle tab key press
        console.log('Tab key pressed');
        this.newRow();
      }
    },
    async deleteItem(item) {
      // if (item.id) {
      //     console.log("Line has id");
      //     this.isloading = true
      //     await this.$axios
      //         .delete(`api/${this.apiLine}Line/find/${item.id}`)
      //         .then((res) => {
      //             this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
      //         })
      //         .catch((er) => {
      //             swalError2(this.$swal, 'Error', 'Operation fail ' + er.Error)
      //         })
      //     this.isloading = false
      // } else {
      //     this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
      //     console.log("Line has no id");
      // }
      this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1);
      console.log("Line has no id");
    },
    async loadLocation(item) {
      this.isloading = true;
      await this.$axios.get(`api/location/find`).then(res => {
        this.locationList = res.data.map(el => el);
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Operation fail ' + er.Error);
      });
      this.isloading = false;
    },
    quantityChange(data) {
      console.log("Qty change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['quantity'], ',', '');
      const unitRate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['unitRate'], ',', '');
      const discount = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = unitRate * qty * price - discount;
    },
    unitRateChange(data) {
      console.log("Unit rate change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['quantity'], ',', '');
      const unitRate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['unitRate'], ',', '');
      const discount = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = unitRate * qty * price - discount;
    },
    discountChange(data) {
      console.log("Discount change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['quantity'], ',', '');
      const unitRate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['unitRate'], ',', '');
      const discount = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = unitRate * qty * price - discount;
    },
    unitChange(data) {
      console.log("Unit change");
      const unit = this.unitList.find(el => el['id'] == data['unitId']);
      if (unit == undefined) return;
      let index = this.transaction.lines.indexOf(data);
      this.transaction.lines[index]['unitRate'] = unit['unitRate'];
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['quantity'], ',', '');
      const discount = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = unit['unitRate'] * qty * price - discount;
    },
    productChange(data) {
      console.log("Product change");
      const product = this.productList.find(el => el['id'] == data['productId']);
      if (product == undefined) {
        console.log("Product is not define");
        return;
      }
      let index = this.transaction.lines.indexOf(data);
      this.transaction.lines[index]['price'] = product['pro_price'];
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['quantity'], ',', '');
      const discount = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      const unitRate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['unitRate'], ',', '');
      this.transaction.lines[index]['total'] = unitRate * qty * price - discount;
    },
    newRow() {
      const defaultLine = {
        // "id":null,
        "quantity": 0,
        "unitRate": 1,
        "price": 0,
        "discount": 0,
        "total": 0,
        "isActive": true,
        "productId": 0,
        "unitId": 1
      };
      this.transaction.lines.push(defaultLine);
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
        iterator['total'] = iterator['quantity'] * iterator['unitRate'] * iterator['price'] - iterator['discount'];
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
        quantity,
        unitRate,
        price,
        discount,
        total,
        productId,
        unitId
      } = obj;
      discount = parseInt(discount);
      unitRate = parseInt(unitRate);
      quantity = parseInt(quantity);
      if (!Number.isFinite(quantity) || Number(quantity) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຈຳນວນ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${quantity}********`;
        return false; // Reach must be a positive number
      }
      if (!Number.isFinite(unitRate) || Number(unitRate) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ອັດຕາຫົວຫນ່ວຍ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${unitRate}********`;
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
        iterator.discount = parseInt(Object(common["h" /* replaceAll */])(iterator.discount, ',', ''));
        iterator.quantity = parseInt(Object(common["h" /* replaceAll */])(iterator.quantity, ',', ''));
        iterator.unitRate = parseInt(Object(common["h" /* replaceAll */])(iterator.unitRate, ',', ''));
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
      if (this.transaction.srcLocationId == this.transaction.desLocationId) {
        return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Source and destination location must be different');
      }
      this.isloading = true;
      this.errorLineNumber = null;
      for (const iterator of this.transaction.lines) {
        this.errorLineNumber = this.transaction.lines.indexOf(iterator);
        if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
          this.sheet = true;
          this.isloading = false;
          return;
        }
        iterator.discount = parseInt(Object(common["h" /* replaceAll */])(iterator.discount, ',', ''));
        iterator.quantity = parseInt(Object(common["h" /* replaceAll */])(iterator.quantity, ',', ''));
        iterator.unitRate = parseInt(Object(common["h" /* replaceAll */])(iterator.unitRate, ',', ''));
        // iterator['total'] = ((iterator['quantity'] * iterator['unitRate']) * iterator['price']) - iterator['discount']
      }
      console.log("******** No error found process posting ********");
      this.errorLineNumber = null;
      this.transaction.userId = this.user.id;
      this.transaction.total = this.grandTotal;
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
        // ********** If header has data, that means we go for update API ********** //
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
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    clientList() {
      return this.findAllClient;
    },
    user() {
      return this.$auth.user || '';
    },
    apiLine() {
      // return this.isQuotation ? 'quotation' : 'sale'
      return 'transfer';
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
    }
  },
  data() {
    return {
      search: '',
      numberCommaRule: value => {
        const regex = /^[0-9,]*$/;
        return regex.test(value) || 'Only numbers and commas are allowed';
      },
      locationList: [],
      headerError: false,
      customerDialog: false,
      validateErrorMessage: '',
      sheet: false,
      errorLineNumber: null,
      isloading: false,
      transaction: {
        srcLocationId: 1,
        desLocationId: 1,
        referenceNo: '',
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
        value: 'quantity'
      }, {
        text: 'ຫົວຫນ່ວຍ',
        align: 'end',
        value: 'unitId',
        sortable: true
      }, {
        text: 'unit rate',
        align: 'end',
        value: 'unitRate',
        sortable: true
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'price',
        sortable: true
      }, {
        text: 'ສ່ວນຫລຸດ',
        align: 'end',
        value: 'discount',
        sortable: true
      }, {
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
// CONCATENATED MODULE: ./components/TransferForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TransferFormvue_type_script_lang_js = (TransferFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/TransferForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TransferFormvue_type_script_lang_js,
  TransferFormvue_type_template_id_1288710a_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c5b10bc"
  
)

/* harmony default export */ var TransferForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(67).default,CustomerList: __webpack_require__(94).default})


/***/ }),

/***/ 457:
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

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(464);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("73bba828", content, true)

/***/ }),

/***/ 464:
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

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(463);
/* harmony import */ var _src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(402);
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
//# sourceMappingURL=transfer-form.js.map