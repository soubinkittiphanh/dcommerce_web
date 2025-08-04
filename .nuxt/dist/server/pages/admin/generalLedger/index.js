exports.ids = [152,10,27,85,93,94];
exports.modules = {

/***/ 1039:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js + 16 modules
var VDatePicker = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(370);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/generalLedger/index.vue?vue&type=template&id=a243b318&












var generalLedgervue_type_template_id_a243b318_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<div>", "</div>", [_c(VDialog["a" /* default */], {
    attrs: {
      "width": "90%"
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c('GLForm', {
    key: _vm.apFormKey,
    attrs: {
      "isUpdate": _vm.isEdit,
      "GLId": _vm.selectedId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.dialog = false;
      },
      "reload": _vm.loadTxn
    }
  })], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VLayout["a" /* default */], {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VMenu["a" /* default */], {
    ref: "menu1",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "label": "ຈາກວັນທີ:",
            "hint": "MM/DD/YYYY format",
            "persistent-hint": "",
            "prepend-icon": "mdi-calendar"
          },
          on: {
            "blur": function ($event) {
              _vm.date = _vm.parseDate(_vm.dateFormatted);
            }
          },
          model: {
            value: _vm.dateFormatted,
            callback: function ($$v) {
              _vm.dateFormatted = $$v;
            },
            expression: "dateFormatted"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }]),
    model: {
      value: _vm.menu1,
      callback: function ($$v) {
        _vm.menu1 = $$v;
      },
      expression: "menu1"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": ""
    },
    on: {
      "input": function ($event) {
        _vm.menu1 = false;
      }
    },
    model: {
      value: _vm.date,
      callback: function ($$v) {
        _vm.date = $$v;
      },
      expression: "date"
    }
  })], 1), _vm._v(" "), _c(VMenu["a" /* default */], {
    ref: "menu2",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "label": "ຫາວັນທີ:",
            "hint": "MM/DD/YYYY format",
            "persistent-hint": "",
            "prepend-icon": "mdi-calendar"
          },
          on: {
            "blur": function ($event) {
              _vm.date2 = _vm.parseDate(_vm.dateFormatted2);
            }
          },
          model: {
            value: _vm.dateFormatted2,
            callback: function ($$v) {
              _vm.dateFormatted2 = $$v;
            },
            expression: "dateFormatted2"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }]),
    model: {
      value: _vm.menu2,
      callback: function ($$v) {
        _vm.menu2 = $$v;
      },
      expression: "menu2"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": ""
    },
    on: {
      "input": function ($event) {
        _vm.menu2 = false;
      }
    },
    model: {
      value: _vm.date2,
      callback: function ($$v) {
        _vm.date2 = $$v;
      },
      expression: "date2"
    }
  })], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "rounded": ""
    },
    on: {
      "click": _vm.triggerDialog
    }
  }, [_vm._v(" ເພີ່ມລາຍການ GL ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "ຊອກຫາ",
      "single-line": "",
      "hide-detailsx": ""
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "ລະຫັດຜູ້ຂາຍ",
      "single-line": "",
      "hide-detailsx": ""
    },
    model: {
      value: _vm.userId,
      callback: function ($$v) {
        _vm.userId = $$v;
      },
      expression: "userId"
    }
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.loadTxn
    }
  }, [_vm._v(" ດຶງລາຍງານ\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm.GLCurrencyGrouping.length > 0 ? _c('table', {
    attrs: {
      "border": "1"
    }
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("ສະກຸນເງິນ")]), _vm._v(" "), _c('th', [_vm._v("ລວມຍອດ")])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.GLCurrencyGrouping, function (txn) {
    return _c('tr', {
      key: txn['currency']
    }, [_c('td', [_vm._v(_vm._s(txn.currency))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v(_vm._s(_vm.numberWithCommas(txn.amount)))])]);
  }), _vm._v(" "), _c('tr', [_c('td', [_vm._v("ຍອດລວມສະກຸນ LCY")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.numberWithCommas(_vm.totalLCYAmount)))])])], 2)]) : _vm._e()]), _vm._v(" "), _vm.txnList ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.txnList
    },
    scopedSlots: _vm._u([{
      key: `item.function`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "text": ""
          },
          on: {
            "click": function ($event) {
              return _vm.editItem(item);
            }
          }
        }, [_c('i', {
          staticClass: "fa-regular fa-pen-to-square"
        })])];
      }
    }, {
      key: `item.POST`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "text": ""
          },
          on: {
            "click": function ($event) {
              return _vm.postToPayment(item);
            }
          }
        }, [_c('i', {
          staticClass: "fa-solid fa-file-invoice-dollar"
        })])];
      }
    }, {
      key: `item.amount`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.numberWithCommas(item.amount)) + "\n            ")];
      }
    }, {
      key: `item.localAmount`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.numberWithCommas(item.localAmount)) + "\n            ")];
      }
    }, {
      key: `item.rate`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.numberWithCommas(item.rate)) + "\n            ")];
      }
    }, {
      key: `item.createdAt`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(item.createdAt.split('.')[0]) + "\n            ")];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/generalLedger/index.vue?vue&type=template&id=a243b318&

// EXTERNAL MODULE: ./components/po/PoForm.vue + 4 modules
var PoForm = __webpack_require__(479);

// EXTERNAL MODULE: ./components/PurchasingFormCRUD.vue + 4 modules
var PurchasingFormCRUD = __webpack_require__(470);

// EXTERNAL MODULE: ./components/ReceivingFormCRUD.vue + 4 modules
var ReceivingFormCRUD = __webpack_require__(469);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./components/accounting/GLForm.vue + 4 modules
var GLForm = __webpack_require__(776);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/generalLedger/index.vue?vue&type=script&lang=js&





/* harmony default export */ var generalLedgervue_type_script_lang_js_ = ({
  components: {
    PoForm: PoForm["default"],
    PurchasingFormCRUD: PurchasingFormCRUD["default"],
    ReceivingFormCRUD: ReceivingFormCRUD["default"],
    GLForm: GLForm["default"]
  },
  mounted() {
    this.loadTxn();
  },
  data() {
    return {
      userId: "",
      search: "",
      isEdit: false,
      dialog: false,
      apFormKey: 1,
      isloading: false,
      menu1: false,
      menu2: false,
      txnList: [],
      selectedId: '',
      headers: [{
        text: 'RECID',
        align: 'center',
        value: 'id',
        sortable: true
      }, {
        text: 'ວັນທີ',
        align: 'center',
        value: 'bookingDate',
        sortable: true
      }, {
        text: 'SRC APP REF.',
        align: 'center',
        value: 'source',
        sortable: true
      }, {
        text: 'ຈຳນວນ',
        align: 'center',
        value: 'amount'
      }, {
        text: 'ສະກຸນ',
        align: 'center',
        value: 'currency.code'
      }, {
        text: 'ອັດຕາແລກປ່ຽນ',
        align: 'right',
        value: 'rate'
      }, {
        text: 'DR',
        align: 'center',
        value: 'drAccount.accountNumber'
      }, {
        text: 'CR',
        align: 'center',
        value: 'crAccount.accountNumber'
      }, {
        text: 'Local amount',
        align: 'right',
        value: 'localAmount'
      }, {
        text: 'ເນື້ອໃນ',
        align: 'center',
        value: 'description'
      }, {
        text: 'ເວລາສ້າງ',
        align: 'center',
        value: 'createdAt'
      }, {
        text: 'ແກ້ໄຂ',
        align: 'end',
        value: 'function',
        sortable: false
      }],
      date: Object(common["d" /* getFirstDayOfMonth */])(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      dateFormatted: this.formatDate(Object(common["d" /* getFirstDayOfMonth */])()),
      dateFormatted2: this.formatDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10))
    };
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
      this.loadTxn();
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2);
      this.loadTxn();
    }
  },
  methods: {
    numberWithCommas(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    triggerDialog() {
      this.apFormKey += 1;
      this.selectedId = null;
      this.isEdit = false;
      this.dialog = true;
    },
    editItem(item) {
      console.log(`PO HEADER ID ${item.id}`);
      this.selectedId = item.id;
      this.isEdit = true;
      this.apFormKey += 1;
      this.dialog = true;
    },
    formatDate(date) {
      if (!date) return null;
      console.log("DATE FORMAT METHOD1: " + date);
      const formattedDate = this.formatDateToISO(date);
      const [year, month, day] = formattedDate.split('-');
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      console.log("DATE PARSE METHOD1: " + date);
      if (!date) return null;
      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    async loadTxn() {
      this.isloading = true;
      const date = {
        startDate: this.date,
        endDate: this.date2
      };
      try {
        const response = await this.$axios.get("/api/gl/findByDate", {
          params: {
            date
          }
        });
        this.txnList = response.data;
      } catch (error) {
        Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ' + error);
      }
      this.isloading = false;
    },
    async postToPayment(recTxn) {
      const transaction = {
        receivingId: recTxn.id,
        bookingDate: recTxn.bookingDate,
        paymentNumber: `POST FROM REC: ${recTxn.id}`,
        payee: recTxn.vendor.name,
        paymentId: null,
        currencyId: recTxn.currencyId,
        rate: recTxn.exchangeRate,
        totalAmount: recTxn.total,
        notes: recTxn.notes,
        update_user: 1,
        drAccount: null,
        crAccount: 1,
        isActive: true
      };
      Object(common["a" /* confirmSwal */])(this.$swal, 'You are posting to Payment ?', async () => {
        this.isloading = true;
        try {
          const response = await this.$axios.post(`/api/finanicial/ap/header/api/create`, transaction);
          console.log(`Transaction complete ${JSON.stringify(response.data)}`);
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
        } catch (error) {
          console.error(`Something went wrong ${error}`);
          Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ' + error);
        }
        this.isloading = false;
      });
    }
  },
  computed: {
    GLCurrencyGrouping() {
      // Object to store the sum of transactions for each currency code
      const sumByCurrency = {};

      // Loop through each transaction
      this.txnList.forEach(transaction => {
        const {
          amount,
          currency
        } = transaction;
        // If the currency code doesn't exist in the sumByCurrency object, initialize it to 0
        if (!sumByCurrency[currency['code']]) {
          sumByCurrency[currency['code']] = 0;
        }
        // Accumulate the total amount for the currency code
        sumByCurrency[currency['code']] += amount;
      });

      // Display the sum for each currency code
      const listOfCurrency = [];
      for (const currencyCode in sumByCurrency) {
        console.log(`Total for ${currencyCode}: ${sumByCurrency[currencyCode]}`);
        listOfCurrency.push({
          'currency': currencyCode,
          'amount': sumByCurrency[currencyCode]
        });
      }
      return listOfCurrency;
    },
    totalLCYAmount() {
      // Loop through each transaction
      let total = this.txnList.reduce((total, item) => {
        return total + item.localAmount;
      }, 0);
      return total;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/generalLedger/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_generalLedgervue_type_script_lang_js_ = (generalLedgervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/generalLedger/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_generalLedgervue_type_script_lang_js_,
  generalLedgervue_type_template_id_a243b318_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "754ea87a"
  
)

/* harmony default export */ var generalLedger = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'localable',
  props: {
    locale: String
  },
  computed: {
    currentLocale() {
      return this.locale || this.$vuetify.lang.current;
    }
  }
}));

/***/ }),

/***/ 389:
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
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(376);

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

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLeapYear; });
function createUTCDate(year, month = 0, day = 1) {
  let date;
  if (year < 100 && year >= 0) {
    date = new Date(Date.UTC(year, month, day));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(year);
    }
  } else {
    date = new Date(Date.UTC(year, month, day));
  }
  return date;
}
function firstWeekOffset(year, firstDayOfWeek, firstDayOfYear) {
  const firstWeekDayInFirstWeek = 7 + firstDayOfWeek - firstDayOfYear;
  const firstWeekDayOfYear = (7 + createUTCDate(year, 0, firstWeekDayInFirstWeek).getUTCDay() - firstDayOfWeek) % 7;
  return -firstWeekDayOfYear + firstWeekDayInFirstWeek - 1;
}
function dayOfYear(year, month, day, firstDayOfWeek) {
  let dayOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month];
  if (month > 1 && isLeapYear(year)) {
    dayOfYear++;
  }
  return dayOfYear + day;
}
function weeksInYear(year, firstDayOfWeek, firstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, firstDayOfYear);
  const weekOffsetNext = firstWeekOffset(year + 1, firstDayOfWeek, firstDayOfYear);
  const daysInYear = isLeapYear(year) ? 366 : 365;
  return (daysInYear - weekOffset + weekOffsetNext) / 7;
}
function weekNumber(year, month, day, firstDayOfWeek, localeFirstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, localeFirstDayOfYear);
  const week = Math.ceil((dayOfYear(year, month, day, firstDayOfWeek) - weekOffset) / 7);
  if (week < 1) {
    return week + weeksInYear(year - 1, firstDayOfWeek, localeFirstDayOfYear);
  } else if (week > weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear)) {
    return week - weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear);
  } else {
    return week;
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 392:
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
/* unused harmony export PARSE_REGEX */
/* unused harmony export PARSE_TIME */
/* unused harmony export DAYS_IN_MONTH */
/* unused harmony export DAYS_IN_MONTH_LEAP */
/* unused harmony export DAYS_IN_MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAYS_IN_MONTH_MAX; });
/* unused harmony export MONTH_MAX */
/* unused harmony export MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DAY_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DAYS_IN_WEEK; });
/* unused harmony export MINUTES_IN_HOUR */
/* unused harmony export MINUTE_MAX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINUTES_IN_DAY; });
/* unused harmony export HOURS_IN_DAY */
/* unused harmony export HOUR_MAX */
/* unused harmony export FIRST_HOUR */
/* unused harmony export OFFSET_YEAR */
/* unused harmony export OFFSET_MONTH */
/* unused harmony export OFFSET_HOUR */
/* unused harmony export OFFSET_TIME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getStartOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getEndOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getStartOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getEndOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return validateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return parseTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return validateTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return parseTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getDayIdentifier; });
/* unused harmony export getTimeIdentifier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getTimestampIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return updateRelative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isTimedless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return updateHasTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return updateMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return updateWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return updateFormatted; });
/* unused harmony export getWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return copyTimestamp; });
/* unused harmony export padNumber */
/* unused harmony export getDate */
/* unused harmony export getTime */
/* unused harmony export nextMinutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return nextDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return prevDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return relativeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return diffMinutes; });
/* unused harmony export findWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getWeekdaySkips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return timestampToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createDayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createIntervalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createNativeLocaleFormatter; });
/* harmony import */ var _util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);

const PARSE_REGEX = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/;
const PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/;
const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_MIN = 28;
const DAYS_IN_MONTH_MAX = 31;
const MONTH_MAX = 12;
const MONTH_MIN = 1;
const DAY_MIN = 1;
const DAYS_IN_WEEK = 7;
const MINUTES_IN_HOUR = 60;
const MINUTE_MAX = 59;
const MINUTES_IN_DAY = 24 * 60;
const HOURS_IN_DAY = 24;
const HOUR_MAX = 23;
const FIRST_HOUR = 0;
const OFFSET_YEAR = 10000;
const OFFSET_MONTH = 100;
const OFFSET_HOUR = 100;
const OFFSET_TIME = 10000;
function getStartOfWeek(timestamp, weekdays, today) {
  const start = copyTimestamp(timestamp);
  findWeekday(start, weekdays[0], prevDay);
  updateFormatted(start);
  if (today) {
    updateRelative(start, today, start.hasTime);
  }
  return start;
}
function getEndOfWeek(timestamp, weekdays, today) {
  const end = copyTimestamp(timestamp);
  findWeekday(end, weekdays[weekdays.length - 1]);
  updateFormatted(end);
  if (today) {
    updateRelative(end, today, end.hasTime);
  }
  return end;
}
function getStartOfMonth(timestamp) {
  const start = copyTimestamp(timestamp);
  start.day = DAY_MIN;
  updateWeekday(start);
  updateFormatted(start);
  return start;
}
function getEndOfMonth(timestamp) {
  const end = copyTimestamp(timestamp);
  end.day = daysInMonth(end.year, end.month);
  updateWeekday(end);
  updateFormatted(end);
  return end;
}
function validateTime(input) {
  return typeof input === 'number' && isFinite(input) || !!PARSE_TIME.exec(input) || typeof input === 'object' && isFinite(input.hour) && isFinite(input.minute);
}
function parseTime(input) {
  if (typeof input === 'number') {
    // when a number is given, it's minutes since 12:00am
    return input;
  } else if (typeof input === 'string') {
    // when a string is given, it's a hh:mm:ss format where seconds are optional
    const parts = PARSE_TIME.exec(input);
    if (!parts) {
      return false;
    }
    return parseInt(parts[1]) * 60 + parseInt(parts[3] || 0);
  } else if (typeof input === 'object') {
    // when an object is given, it must have hour and minute
    if (typeof input.hour !== 'number' || typeof input.minute !== 'number') {
      return false;
    }
    return input.hour * 60 + input.minute;
  } else {
    // unsupported type
    return false;
  }
}
function validateTimestamp(input) {
  return typeof input === 'number' && isFinite(input) || typeof input === 'string' && !!PARSE_REGEX.exec(input) || input instanceof Date;
}
function parseTimestamp(input, required = false, now) {
  if (typeof input === 'number' && isFinite(input)) {
    input = new Date(input);
  }
  if (input instanceof Date) {
    const date = parseDate(input);
    if (now) {
      updateRelative(date, now, date.hasTime);
    }
    return date;
  }
  if (typeof input !== 'string') {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  } // YYYY-MM-DD hh:mm:ss

  const parts = PARSE_REGEX.exec(input);
  if (!parts) {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  }
  const timestamp = {
    date: input,
    time: '',
    year: parseInt(parts[1]),
    month: parseInt(parts[2]),
    day: parseInt(parts[4]) || 1,
    hour: parseInt(parts[6]) || 0,
    minute: parseInt(parts[8]) || 0,
    weekday: 0,
    hasDay: !!parts[4],
    hasTime: !!(parts[6] && parts[8]),
    past: false,
    present: false,
    future: false
  };
  updateWeekday(timestamp);
  updateFormatted(timestamp);
  if (now) {
    updateRelative(timestamp, now, timestamp.hasTime);
  }
  return timestamp;
}
function parseDate(date) {
  return updateFormatted({
    date: '',
    time: '',
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    hasDay: true,
    hasTime: true,
    past: false,
    present: true,
    future: false
  });
}
function getDayIdentifier(timestamp) {
  return timestamp.year * OFFSET_YEAR + timestamp.month * OFFSET_MONTH + timestamp.day;
}
function getTimeIdentifier(timestamp) {
  return timestamp.hour * OFFSET_HOUR + timestamp.minute;
}
function getTimestampIdentifier(timestamp) {
  return getDayIdentifier(timestamp) * OFFSET_TIME + getTimeIdentifier(timestamp);
}
function updateRelative(timestamp, now, time = false) {
  let a = getDayIdentifier(now);
  let b = getDayIdentifier(timestamp);
  let present = a === b;
  if (timestamp.hasTime && time && present) {
    a = getTimeIdentifier(now);
    b = getTimeIdentifier(timestamp);
    present = a === b;
  }
  timestamp.past = b < a;
  timestamp.present = present;
  timestamp.future = b > a;
  return timestamp;
}
function isTimedless(input) {
  return input instanceof Date || typeof input === 'number' && isFinite(input);
}
function updateHasTime(timestamp, hasTime, now) {
  if (timestamp.hasTime !== hasTime) {
    timestamp.hasTime = hasTime;
    if (!hasTime) {
      timestamp.hour = HOUR_MAX;
      timestamp.minute = MINUTE_MAX;
      timestamp.time = getTime(timestamp);
    }
    if (now) {
      updateRelative(timestamp, now, timestamp.hasTime);
    }
  }
  return timestamp;
}
function updateMinutes(timestamp, minutes, now) {
  timestamp.hasTime = true;
  timestamp.hour = Math.floor(minutes / MINUTES_IN_HOUR);
  timestamp.minute = minutes % MINUTES_IN_HOUR;
  timestamp.time = getTime(timestamp);
  if (now) {
    updateRelative(timestamp, now, true);
  }
  return timestamp;
}
function updateWeekday(timestamp) {
  timestamp.weekday = getWeekday(timestamp);
  return timestamp;
}
function updateFormatted(timestamp) {
  timestamp.time = getTime(timestamp);
  timestamp.date = getDate(timestamp);
  return timestamp;
}
function getWeekday(timestamp) {
  if (timestamp.hasDay) {
    const _ = Math.floor;
    const k = timestamp.day;
    const m = (timestamp.month + 9) % MONTH_MAX + 1;
    const C = _(timestamp.year / 100);
    const Y = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
    return ((k + _(2.6 * m - 0.2) - 2 * C + Y + _(Y / 4) + _(C / 4)) % 7 + 7) % 7;
  }
  return timestamp.weekday;
}
function daysInMonth(year, month) {
  return Object(_util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__[/* isLeapYear */ "a"])(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
}
function copyTimestamp(timestamp) {
  const {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  } = timestamp;
  return {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  };
}
function padNumber(x, length) {
  let padded = String(x);
  while (padded.length < length) {
    padded = '0' + padded;
  }
  return padded;
}
function getDate(timestamp) {
  let str = `${padNumber(timestamp.year, 4)}-${padNumber(timestamp.month, 2)}`;
  if (timestamp.hasDay) str += `-${padNumber(timestamp.day, 2)}`;
  return str;
}
function getTime(timestamp) {
  if (!timestamp.hasTime) {
    return '';
  }
  return `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
}
function nextMinutes(timestamp, minutes) {
  timestamp.minute += minutes;
  while (timestamp.minute > MINUTES_IN_HOUR) {
    timestamp.minute -= MINUTES_IN_HOUR;
    timestamp.hour++;
    if (timestamp.hour >= HOURS_IN_DAY) {
      nextDay(timestamp);
      timestamp.hour = FIRST_HOUR;
    }
  }
  return timestamp;
}
function nextDay(timestamp) {
  timestamp.day++;
  timestamp.weekday = (timestamp.weekday + 1) % DAYS_IN_WEEK;
  if (timestamp.day > DAYS_IN_MONTH_MIN && timestamp.day > daysInMonth(timestamp.year, timestamp.month)) {
    timestamp.day = DAY_MIN;
    timestamp.month++;
    if (timestamp.month > MONTH_MAX) {
      timestamp.month = MONTH_MIN;
      timestamp.year++;
    }
  }
  return timestamp;
}
function prevDay(timestamp) {
  timestamp.day--;
  timestamp.weekday = (timestamp.weekday + 6) % DAYS_IN_WEEK;
  if (timestamp.day < DAY_MIN) {
    timestamp.month--;
    if (timestamp.month < MONTH_MIN) {
      timestamp.year--;
      timestamp.month = MONTH_MAX;
    }
    timestamp.day = daysInMonth(timestamp.year, timestamp.month);
  }
  return timestamp;
}
function relativeDays(timestamp, mover = nextDay, days = 1) {
  while (--days >= 0) mover(timestamp);
  return timestamp;
}
function diffMinutes(min, max) {
  const Y = (max.year - min.year) * 525600;
  const M = (max.month - min.month) * 43800;
  const D = (max.day - min.day) * 1440;
  const h = (max.hour - min.hour) * 60;
  const m = max.minute - min.minute;
  return Y + M + D + h + m;
}
function findWeekday(timestamp, weekday, mover = nextDay, maxDays = 6) {
  while (timestamp.weekday !== weekday && --maxDays >= 0) mover(timestamp);
  return timestamp;
}
function getWeekdaySkips(weekdays) {
  const skips = [1, 1, 1, 1, 1, 1, 1];
  const filled = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < weekdays.length; i++) {
    filled[weekdays[i]] = 1;
  }
  for (let k = 0; k < DAYS_IN_WEEK; k++) {
    let skip = 1;
    for (let j = 1; j < DAYS_IN_WEEK; j++) {
      const next = (k + j) % DAYS_IN_WEEK;
      if (filled[next]) {
        break;
      }
      skip++;
    }
    skips[k] = filled[k] * skip;
  }
  return skips;
}
function timestampToDate(timestamp) {
  const time = `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
  const date = timestamp.date;
  return new Date(`${date}T${time}:00+00:00`);
}
function createDayList(start, end, now, weekdaySkips, max = 42, min = 0) {
  const stop = getDayIdentifier(end);
  const days = [];
  let current = copyTimestamp(start);
  let currentIdentifier = 0;
  let stopped = currentIdentifier === stop;
  if (stop < getDayIdentifier(start)) {
    throw new Error('End date is earlier than start date.');
  }
  while ((!stopped || days.length < min) && days.length < max) {
    currentIdentifier = getDayIdentifier(current);
    stopped = stopped || currentIdentifier === stop;
    if (weekdaySkips[current.weekday] === 0) {
      current = nextDay(current);
      continue;
    }
    const day = copyTimestamp(current);
    updateFormatted(day);
    updateRelative(day, now);
    days.push(day);
    current = relativeDays(current, nextDay, weekdaySkips[current.weekday]);
  }
  if (!days.length) throw new Error('No dates found using specified start date, end date, and weekdays.');
  return days;
}
function createIntervalList(timestamp, first, minutes, count, now) {
  const intervals = [];
  for (let i = 0; i < count; i++) {
    const mins = first + i * minutes;
    const int = copyTimestamp(timestamp);
    intervals.push(updateMinutes(int, mins, now));
  }
  return intervals;
}
function createNativeLocaleFormatter(locale, getOptions) {
  const emptyFormatter = (_t, _s) => '';
  if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
    return emptyFormatter;
  }
  return (timestamp, short) => {
    try {
      const intlFormatter = new Intl.DateTimeFormat(locale || undefined, getOptions(timestamp, short));
      return intlFormatter.format(timestampToDate(timestamp));
    } catch (e) {
      return '';
    }
  };
}

/***/ }),

/***/ 397:
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
__webpack_require__(5).default("265ccd52", content, true)

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:4px;contain:layout style;display:inline-flex;flex-direction:column;font-size:1rem;position:relative;vertical-align:top}.v-picker--full-width{display:flex;width:100%}.v-picker--full-width>.v-picker__body{margin:initial}.v-picker__title{border-top-left-radius:4px;border-top-right-radius:4px;color:#fff;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){cursor:pointer;opacity:.6}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{align-items:center;display:flex;flex:1 0 auto;flex-direction:column;height:auto;margin:0 auto;overflow:hidden;position:relative;z-index:0}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-bottom-right-radius:0;border-top-right-radius:0;height:100%;position:absolute;top:0;width:170px;z-index:1}.v-application--is-ltr .v-picker--landscape .v-picker__title{left:0}.v-application--is-rtl .v-picker--landscape .v-picker__title{right:0}.v-application--is-ltr .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-ltr .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:170px;margin-right:0}.v-application--is-rtl .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-rtl .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:0;margin-right:170px}.v-picker--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(402);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ec842454", content, true)

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-title{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;line-height:1}.v-application--is-ltr .v-date-picker-title .v-picker__title__btn{text-align:left}.v-application--is-rtl .v-date-picker-title .v-picker__title__btn{text-align:right}.v-date-picker-title__year{align-items:center;display:inline-flex;font-size:14px;font-weight:500;margin-bottom:8px}.v-date-picker-title__date{font-size:34px;font-weight:500;margin-bottom:-8px;overflow:hidden;padding-bottom:8px;position:relative;text-align:left}.v-date-picker-title__date>div{position:relative}.v-date-picker-title--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("075924a4", content, true)

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:rgba(0,0,0,.87)}.theme--light.v-date-picker-header .v-date-picker-header__value--disabled button{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:#fff}.theme--dark.v-date-picker-header .v-date-picker-header__value--disabled button{color:hsla(0,0%,100%,.5)}.v-date-picker-header{align-items:center;display:flex;justify-content:space-between;padding:4px 16px;position:relative}.v-date-picker-header .v-btn{margin:0;z-index:auto}.v-date-picker-header .v-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-date-picker-header__value{flex:1;overflow:hidden;position:relative;text-align:center}.v-date-picker-header__value div{transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-header__value button{cursor:pointer;font-weight:700;outline:none;padding:.5rem;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-date-picker-header--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(406);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0f7d136a", content, true)

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-table .v-date-picker-table--date__week,.theme--light.v-date-picker-table th{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-table .v-date-picker-table--date__week,.theme--dark.v-date-picker-table th{color:hsla(0,0%,100%,.5)}.v-date-picker-table{height:242px;padding:0 12px;position:relative}.v-date-picker-table table{table-layout:fixed;top:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-table td,.v-date-picker-table th{position:relative;text-align:center}.v-date-picker-table th{font-size:12px}.v-date-picker-table--date .v-btn{height:32px;width:32px}.v-date-picker-table .v-btn{font-size:12px;margin:0;z-index:auto}.v-date-picker-table .v-btn.v-btn--active{color:#fff}.v-date-picker-table--month td{height:56px;text-align:center;vertical-align:middle;width:33.333333%}.v-date-picker-table--month td .v-btn{margin:0 auto;max-width:140px;min-width:40px;width:100%}.v-date-picker-table--date th{font-weight:600;padding:8px 0}.v-date-picker-table--date td{width:45px}.v-date-picker-table__events{height:8px;left:0;position:absolute;text-align:center;white-space:pre;width:100%}.v-date-picker-table__events>div{border-radius:50%;display:inline-block;height:8px;margin:0 1px;width:8px}.v-date-picker-table--date .v-date-picker-table__events{bottom:6px}.v-date-picker-table--month .v-date-picker-table__events{bottom:8px}.v-date-picker-table__current .v-date-picker-table__events{margin-bottom:-1px}.v-date-picker-table--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("4dc2915a", content, true)

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-years{font-size:16px;font-weight:400;height:290px;list-style-type:none;overflow:auto;text-align:center}.v-date-picker-years.v-date-picker-years{padding:0}.v-date-picker-years li{cursor:pointer;padding:8px 0;transition:none}.v-date-picker-years li.active{font-size:26px;font-weight:500;padding:10px 0}.v-date-picker-years li:hover{background:rgba(0,0,0,.12)}.v-picker--landscape .v-date-picker-years{height:290px;padding:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(412);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("73bba828", content, true)

/***/ }),

/***/ 412:
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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
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

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTitle.sass
var VDatePickerTitle = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker-button/index.js
// Mixins
 // Utilities



/* @vue/component */

/* harmony default export */ var picker_button = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  methods: {
    genPickerButton(prop, value, content, readonly = false, staticClass = '') {
      const active = this[prop] === value;
      const click = event => {
        event.stopPropagation();
        this.$emit(`update:${Object(helpers["x" /* kebabCase */])(prop)}`, value);
      };
      return this.$createElement('div', {
        staticClass: `v-picker__title__btn ${staticClass}`.trim(),
        class: {
          'v-picker__title__btn--active': active,
          'v-picker__title__btn--readonly': readonly
        },
        on: active || readonly ? undefined : {
          click
        }
      }, Array.isArray(content) ? content : [content]);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerTitle.js
 // Components

 // Mixins

 // Utils


/* harmony default export */ var VDatePicker_VDatePickerTitle = (Object(mixins["a" /* default */])(picker_button
/* @vue/component */).extend({
  name: 'v-date-picker-title',
  props: {
    date: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    readonly: Boolean,
    selectingYear: Boolean,
    value: {
      type: String
    },
    year: {
      type: [Number, String],
      default: ''
    },
    yearIcon: {
      type: String
    }
  },
  data: () => ({
    isReversing: false
  }),
  computed: {
    computedTransition() {
      return this.isReversing ? 'picker-reverse-transition' : 'picker-transition';
    }
  },
  watch: {
    value(val, prev) {
      this.isReversing = val < prev;
    }
  },
  methods: {
    genYearIcon() {
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          dark: true
        }
      }, this.yearIcon);
    },
    getYearBtn() {
      return this.genPickerButton('selectingYear', true, [String(this.year), this.yearIcon ? this.genYearIcon() : null], false, 'v-date-picker-title__year');
    },
    genTitleText() {
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('div', {
        domProps: {
          innerHTML: this.date || '&nbsp;'
        },
        key: this.value
      })]);
    },
    genTitleDate() {
      return this.genPickerButton('selectingYear', false, [this.genTitleText()], false, 'v-date-picker-title__date');
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-date-picker-title',
      class: {
        'v-date-picker-title--disabled': this.disabled
      }
    }, [this.getYearBtn(), this.genTitleDate()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerHeader.sass
var VDatePickerHeader = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/localable/index.js
var localable = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/pad.js
const padStart = (string, targetLength, padString) => {
  targetLength = targetLength >> 0;
  string = String(string);
  padString = String(padString);
  if (string.length > targetLength) {
    return String(string);
  }
  targetLength = targetLength - string.length;
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length);
  }
  return padString.slice(0, targetLength) + String(string);
};
/* harmony default export */ var pad = ((n, length = 2) => padStart(n, length, '0'));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/createNativeLocaleFormatter.js

function createNativeLocaleFormatter(locale, options, substrOptions = {
  start: 0,
  length: 0
}) {
  const makeIsoString = dateString => {
    const [year, month, date] = dateString.trim().split(' ')[0].split('-');
    return [pad(year, 4), pad(month || 1), pad(date || 1)].join('-');
  };
  try {
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);
    return dateString => intlFormatter.format(new Date(`${makeIsoString(dateString)}T00:00:00+00:00`));
  } catch (e) {
    return substrOptions.start || substrOptions.length ? dateString => makeIsoString(dateString).substr(substrOptions.start || 0, substrOptions.length) : undefined;
  }
}
/* harmony default export */ var util_createNativeLocaleFormatter = (createNativeLocaleFormatter);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/monthChange.js

/**
 * @param {String} value YYYY-MM format
 * @param {Number} sign -1 or +1
 */

/* harmony default export */ var monthChange = ((value, sign) => {
  const [year, month] = value.split('-').map(Number);
  if (month + sign === 0) {
    return `${year - 1}-12`;
  } else if (month + sign === 13) {
    return `${year + 1}-01`;
  } else {
    return `${year}-${pad(month + sign)}`;
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerHeader.js
 // Components


 // Mixins



 // Utils



/* harmony default export */ var VDatePicker_VDatePickerHeader = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-header',
  props: {
    disabled: Boolean,
    format: Function,
    min: String,
    max: String,
    nextAriaLabel: String,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevAriaLabel: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    readonly: Boolean,
    value: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isReversing: false
    };
  },
  computed: {
    formatter() {
      if (this.format) {
        return this.format;
      } else if (String(this.value).split('-')[1]) {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 7
        });
      } else {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        });
      }
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  methods: {
    genBtn(change) {
      const ariaLabelId = change > 0 ? this.nextAriaLabel : this.prevAriaLabel;
      const ariaLabel = ariaLabelId ? this.$vuetify.lang.t(ariaLabelId) : undefined;
      const disabled = this.disabled || change < 0 && this.min && this.calculateChange(change) < this.min || change > 0 && this.max && this.calculateChange(change) > this.max;
      return this.$createElement(VBtn["a" /* default */], {
        attrs: {
          'aria-label': ariaLabel
        },
        props: {
          dark: this.dark,
          disabled,
          icon: true,
          light: this.light
        },
        on: {
          click: e => {
            e.stopPropagation();
            this.$emit('input', this.calculateChange(change));
          }
        }
      }, [this.$createElement(VIcon["a" /* default */], change < 0 === !this.$vuetify.rtl ? this.prevIcon : this.nextIcon)]);
    },
    calculateChange(sign) {
      const [year, month] = String(this.value).split('-').map(Number);
      if (month == null) {
        return `${year + sign}`;
      } else {
        return monthChange(String(this.value), sign);
      }
    },
    genHeader() {
      const color = !this.disabled && (this.color || 'accent');
      const header = this.$createElement('div', this.setTextColor(color, {
        key: String(this.value)
      }), [this.$createElement('button', {
        attrs: {
          type: 'button'
        },
        on: {
          click: () => this.$emit('toggle')
        }
      }, [this.$slots.default || this.formatter(String(this.value))])]);
      const transition = this.$createElement('transition', {
        props: {
          name: this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition'
        }
      }, [header]);
      return this.$createElement('div', {
        staticClass: 'v-date-picker-header__value',
        class: {
          'v-date-picker-header__value--disabled': this.disabled
        }
      }, [transition]);
    }
  },
  render() {
    return this.$createElement('div', {
      staticClass: 'v-date-picker-header',
      class: {
        'v-date-picker-header--disabled': this.disabled,
        ...this.themeClasses
      }
    }, [this.genBtn(-1), this.genHeader(), this.genBtn(+1)]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTable.sass
var VDatePickerTable = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/eventHelpers.js
function createItemTypeNativeListeners(instance, itemTypeSuffix, value) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName.slice(0, -itemTypeSuffix.length)] = event => instance.$emit(eventName, value, event);
    }
    return on;
  }, {});
}
function createItemTypeListeners(instance, itemTypeSuffix) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName] = instance.$listeners[eventName];
    }
    return on;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/sanitizeDateString.js
// Adds leading zero to month/day if necessary, returns 'YYYY' if type = 'year',
// 'YYYY-MM' if 'month' and 'YYYY-MM-DD' if 'date'

/* harmony default export */ var sanitizeDateString = ((dateString, type) => {
  const [year, month = 1, date = 1] = dateString.split('-');
  return `${year}-${pad(month)}-${pad(date)}`.substr(0, {
    date: 10,
    month: 7,
    year: 4
  }[type]);
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/isDateAllowed.js
function isDateAllowed(date, min, max, allowedFn) {
  return (!allowedFn || allowedFn(date)) && (!min || date >= min.substr(0, 10)) && (!max || date <= max);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/mixins/date-picker-table.js
 // Directives

 // Mixins



 // Utils






/* harmony default export */ var date_picker_table = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    allowedDates: Function,
    current: String,
    disabled: Boolean,
    format: Function,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    min: String,
    max: String,
    range: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    tableDate: {
      type: String,
      required: true
    },
    value: [String, Array]
  },
  data: () => ({
    isReversing: false,
    wheelThrottle: null
  }),
  computed: {
    computedTransition() {
      return this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition';
    },
    displayedMonth() {
      return Number(this.tableDate.split('-')[1]) - 1;
    },
    displayedYear() {
      return Number(this.tableDate.split('-')[0]);
    }
  },
  watch: {
    tableDate(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  mounted() {
    this.wheelThrottle = Object(helpers["G" /* throttle */])(this.wheel, 250);
  },
  methods: {
    genButtonClasses(isAllowed, isFloating, isSelected, isCurrent, isFirst, isLast) {
      return {
        'v-size--default': !isFloating,
        'v-date-picker-table__current': isCurrent,
        'v-btn--active': isSelected,
        'v-btn--flat': !isAllowed || this.disabled,
        'v-btn--text': isSelected === isCurrent,
        'v-btn--rounded': isFloating,
        'v-btn--disabled': !isAllowed || this.disabled,
        'v-btn--outlined': isCurrent && !isSelected,
        'v-date-picker--first-in-range': isFirst,
        'v-date-picker--last-in-range': isLast,
        ...this.themeClasses
      };
    },
    genButtonEvents(value, isAllowed, mouseEventType) {
      if (this.disabled) return undefined;
      return Object(mergeData["c" /* mergeListeners */])({
        click: () => {
          if (isAllowed && !this.readonly) this.$emit('input', value);
        }
      }, createItemTypeNativeListeners(this, `:${mouseEventType}`, value));
    },
    genButton(value, isFloating, mouseEventType, formatter, isOtherMonth = false) {
      const isAllowed = isDateAllowed(value, this.min, this.max, this.allowedDates);
      const isSelected = this.isSelected(value) && isAllowed;
      const isCurrent = value === this.current;
      const setColor = isSelected ? this.setBackgroundColor : this.setTextColor;
      const color = (isSelected || isCurrent) && (this.color || 'accent');
      let isFirst = false;
      let isLast = false;
      if (this.range && !!this.value && Array.isArray(this.value)) {
        isFirst = value === this.value[0];
        isLast = value === this.value[this.value.length - 1];
      }
      return this.$createElement('button', setColor(color, {
        staticClass: 'v-btn',
        class: this.genButtonClasses(isAllowed && !isOtherMonth, isFloating, isSelected, isCurrent, isFirst, isLast),
        attrs: {
          type: 'button'
        },
        domProps: {
          disabled: this.disabled || !isAllowed || isOtherMonth
        },
        on: this.genButtonEvents(value, isAllowed, mouseEventType)
      }), [this.$createElement('div', {
        staticClass: 'v-btn__content'
      }, [formatter(value)]), this.genEvents(value)]);
    },
    getEventColors(date) {
      const arrayize = v => Array.isArray(v) ? v : [v];
      let eventData;
      let eventColors = [];
      if (Array.isArray(this.events)) {
        eventData = this.events.includes(date);
      } else if (this.events instanceof Function) {
        eventData = this.events(date) || false;
      } else if (this.events) {
        eventData = this.events[date] || false;
      } else {
        eventData = false;
      }
      if (!eventData) {
        return [];
      } else if (eventData !== true) {
        eventColors = arrayize(eventData);
      } else if (typeof this.eventColor === 'string') {
        eventColors = [this.eventColor];
      } else if (typeof this.eventColor === 'function') {
        eventColors = arrayize(this.eventColor(date));
      } else if (Array.isArray(this.eventColor)) {
        eventColors = this.eventColor;
      } else {
        eventColors = arrayize(this.eventColor[date]);
      }
      return eventColors.filter(v => v);
    },
    genEvents(date) {
      const eventColors = this.getEventColors(date);
      return eventColors.length ? this.$createElement('div', {
        staticClass: 'v-date-picker-table__events'
      }, eventColors.map(color => this.$createElement('div', this.setBackgroundColor(color)))) : null;
    },
    isValidScroll(value, calculateTableDate) {
      const tableDate = calculateTableDate(value); // tableDate is 'YYYY-MM' for DateTable and 'YYYY' for MonthTable

      const sanitizeType = tableDate.split('-').length === 1 ? 'year' : 'month';
      return value < 0 && (this.min ? tableDate >= sanitizeDateString(this.min, sanitizeType) : true) || value > 0 && (this.max ? tableDate <= sanitizeDateString(this.max, sanitizeType) : true);
    },
    wheel(e, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(e.deltaY));
    },
    touch(value, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(value));
    },
    genTable(staticClass, children, calculateTableDate) {
      const transition = this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('table', {
        key: this.tableDate
      }, children)]);
      const touchDirective = {
        name: 'touch',
        value: {
          left: e => e.offsetX < -15 && this.isValidScroll(1, calculateTableDate) && this.touch(1, calculateTableDate),
          right: e => e.offsetX > 15 && this.isValidScroll(-1, calculateTableDate) && this.touch(-1, calculateTableDate)
        }
      };
      return this.$createElement('div', {
        staticClass,
        class: {
          'v-date-picker-table--disabled': this.disabled,
          ...this.themeClasses
        },
        on: !this.disabled && this.scrollable ? {
          wheel: e => {
            e.preventDefault();
            if (this.isValidScroll(e.deltaY, calculateTableDate)) {
              this.wheelThrottle(e, calculateTableDate);
            }
          }
        } : undefined,
        directives: [touchDirective]
      }, [transition]);
    },
    isSelected(value) {
      if (Array.isArray(this.value)) {
        if (this.range && this.value.length === 2) {
          const [from, to] = [...this.value].sort();
          return from <= value && value <= to;
        } else {
          return this.value.indexOf(value) !== -1;
        }
      }
      return value === this.value;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dateTimeUtils.js
var dateTimeUtils = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerDateTable.js
// Mixins
 // Utils





/* harmony default export */ var VDatePickerDateTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-date-table',
  props: {
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    weekdayFormat: Function
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        day: 'numeric',
        timeZone: 'UTC'
      }, {
        start: 8,
        length: 2
      });
    },
    weekdayFormatter() {
      return this.weekdayFormat || util_createNativeLocaleFormatter(this.currentLocale, {
        weekday: 'narrow',
        timeZone: 'UTC'
      });
    },
    weekDays() {
      const first = parseInt(this.firstDayOfWeek, 10);
      return this.weekdayFormatter ? Object(helpers["i" /* createRange */])(7).map(i => this.weekdayFormatter(`2017-01-${first + i + 15}`)) // 2017-01-15 is Sunday
      : Object(helpers["i" /* createRange */])(7).map(i => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][(i + first) % 7]);
    }
  },
  methods: {
    calculateTableDate(delta) {
      return monthChange(this.tableDate, Math.sign(delta || 1));
    },
    genTHead() {
      const days = this.weekDays.map(day => this.$createElement('th', day));
      if (this.showWeek) {
        days.unshift(this.$createElement('th'));
      }
      return this.$createElement('thead', this.genTR(days));
    },
    // Returns number of the days from the firstDayOfWeek to the first day of the current month
    weekDaysBeforeFirstDayOfTheMonth() {
      const firstDayOfTheMonth = new Date(`${this.displayedYear}-${pad(this.displayedMonth + 1)}-01T00:00:00+00:00`);
      const weekDay = firstDayOfTheMonth.getUTCDay();
      return (weekDay - parseInt(this.firstDayOfWeek) + 7) % 7;
    },
    getWeekNumber(dayInMonth) {
      return Object(dateTimeUtils["b" /* weekNumber */])(this.displayedYear, this.displayedMonth, dayInMonth, parseInt(this.firstDayOfWeek), parseInt(this.localeFirstDayOfYear));
    },
    genWeekNumber(weekNumber) {
      return this.$createElement('td', [this.$createElement('small', {
        staticClass: 'v-date-picker-table--date__week'
      }, String(weekNumber).padStart(2, '0'))]);
    },
    // eslint-disable-next-line max-statements
    genTBody() {
      const children = [];
      const daysInMonth = new Date(this.displayedYear, this.displayedMonth + 1, 0).getDate();
      let rows = [];
      let day = this.weekDaysBeforeFirstDayOfTheMonth();
      if (this.showWeek) {
        rows.push(this.genWeekNumber(this.getWeekNumber(1)));
      }
      const prevMonthYear = this.displayedMonth ? this.displayedYear : this.displayedYear - 1;
      const prevMonth = (this.displayedMonth + 11) % 12;
      const firstDayFromPreviousMonth = new Date(this.displayedYear, this.displayedMonth, 0).getDate();
      const cellsInRow = this.showWeek ? 8 : 7;
      while (day--) {
        const date = `${prevMonthYear}-${pad(prevMonth + 1)}-${pad(firstDayFromPreviousMonth - day)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      for (day = 1; day <= daysInMonth; day++) {
        const date = `${this.displayedYear}-${pad(this.displayedMonth + 1)}-${pad(day)}`;
        rows.push(this.$createElement('td', [this.genButton(date, true, 'date', this.formatter)]));
        if (rows.length % cellsInRow === 0) {
          children.push(this.genTR(rows));
          rows = [];
          if (this.showWeek && (day < daysInMonth || this.showAdjacentMonths)) {
            rows.push(this.genWeekNumber(this.getWeekNumber(day + 7)));
          }
        }
      }
      const nextMonthYear = this.displayedMonth === 11 ? this.displayedYear + 1 : this.displayedYear;
      const nextMonth = (this.displayedMonth + 1) % 12;
      let nextMonthDay = 1;
      while (rows.length < cellsInRow) {
        const date = `${nextMonthYear}-${pad(nextMonth + 1)}-${pad(nextMonthDay++)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      if (rows.length) {
        children.push(this.genTR(rows));
      }
      return this.$createElement('tbody', children);
    },
    genTR(children) {
      return [this.$createElement('tr', children)];
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--date', [this.genTHead(), this.genTBody()], this.calculateTableDate);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerMonthTable.js
// Mixins
 // Utils



/* harmony default export */ var VDatePickerMonthTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-month-table',
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        month: 'short',
        timeZone: 'UTC'
      }, {
        start: 5,
        length: 2
      });
    }
  },
  methods: {
    calculateTableDate(delta) {
      return `${parseInt(this.tableDate, 10) + Math.sign(delta || 1)}`;
    },
    genTBody() {
      const children = [];
      const cols = Array(3).fill(null);
      const rows = 12 / cols.length;
      for (let row = 0; row < rows; row++) {
        const tds = cols.map((_, col) => {
          const month = row * cols.length + col;
          const date = `${this.displayedYear}-${pad(month + 1)}`;
          return this.$createElement('td', {
            key: month
          }, [this.genButton(date, false, 'month', this.formatter)]);
        });
        children.push(this.$createElement('tr', {
          key: row
        }, tds));
      }
      return this.$createElement('tbody', children);
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--month', [this.genTBody()], this.calculateTableDate);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerYears.sass
var VDatePickerYears = __webpack_require__(407);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerYears.js
 // Mixins


 // Utils




/* harmony default export */ var VDatePicker_VDatePickerYears = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-years',
  props: {
    format: Function,
    min: [Number, String],
    max: [Number, String],
    readonly: Boolean,
    value: [Number, String]
  },
  data() {
    return {
      defaultColor: 'primary'
    };
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        year: 'numeric',
        timeZone: 'UTC'
      }, {
        length: 4
      });
    }
  },
  mounted() {
    setTimeout(() => {
      const activeItem = this.$el.getElementsByClassName('active')[0];
      if (activeItem) {
        this.$el.scrollTop = activeItem.offsetTop - this.$el.offsetHeight / 2 + activeItem.offsetHeight / 2;
      } else if (this.min && !this.max) {
        this.$el.scrollTop = this.$el.scrollHeight;
      } else if (!this.min && this.max) {
        this.$el.scrollTop = 0;
      } else {
        this.$el.scrollTop = this.$el.scrollHeight / 2 - this.$el.offsetHeight / 2;
      }
    });
  },
  methods: {
    genYearItem(year) {
      const formatted = this.formatter(`${year}`);
      const active = parseInt(this.value, 10) === year;
      const color = active && (this.color || 'primary');
      return this.$createElement('li', this.setTextColor(color, {
        key: year,
        class: {
          active
        },
        on: Object(mergeData["c" /* mergeListeners */])({
          click: () => this.$emit('input', year)
        }, createItemTypeNativeListeners(this, ':year', year))
      }), formatted);
    },
    genYearItems() {
      const children = [];
      const selectedYear = this.value ? parseInt(this.value, 10) : new Date().getFullYear();
      const maxYear = this.max ? parseInt(this.max, 10) : selectedYear + 100;
      const minYear = Math.min(maxYear, this.min ? parseInt(this.min, 10) : selectedYear - 100);
      for (let year = maxYear; year >= minYear; year--) {
        children.push(this.genYearItem(year));
      }
      return children;
    }
  },
  render() {
    return this.$createElement('ul', {
      staticClass: 'v-date-picker-years',
      ref: 'years'
    }, this.genYearItems());
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VPicker/VPicker.sass
var VPicker = __webpack_require__(399);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCard/VCard.sass
var VCard = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/VPicker.js

 // Mixins



 // Helpers



/* @vue/component */

/* harmony default export */ var VPicker_VPicker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    landscape: Boolean,
    noTitle: Boolean,
    transition: {
      type: String,
      default: 'fade-transition'
    },
    width: {
      type: [Number, String],
      default: 290
    }
  },
  computed: {
    computedTitleColor() {
      const defaultTitleColor = this.isDark ? false : this.color || 'primary';
      return this.color || defaultTitleColor;
    }
  },
  methods: {
    genTitle() {
      return this.$createElement('div', this.setBackgroundColor(this.computedTitleColor, {
        staticClass: 'v-picker__title',
        class: {
          'v-picker__title--landscape': this.landscape
        }
      }), this.$slots.title);
    },
    genBodyTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, this.$slots.default);
    },
    genBody() {
      return this.$createElement('div', {
        staticClass: 'v-picker__body',
        class: {
          'v-picker__body--no-title': this.noTitle,
          ...this.themeClasses
        },
        style: this.fullWidth ? undefined : {
          width: Object(helpers["h" /* convertToUnit */])(this.width)
        }
      }, [this.genBodyTransition()]);
    },
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-picker__actions v-card__actions',
        class: {
          'v-picker__actions--no-title': this.noTitle
        }
      }, this.$slots.actions);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-picker v-card',
      class: {
        'v-picker--flat': this.flat,
        'v-picker--landscape': this.landscape,
        'v-picker--full-width': this.fullWidth,
        ...this.themeClasses,
        ...this.elevationClasses
      }
    }, [this.$slots.title ? this.genTitle() : null, this.genBody(), this.$slots.actions ? this.genActions() : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/index.js


/* harmony default export */ var components_VPicker = (VPicker_VPicker);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker/index.js
// Components
 // Mixins



 // Utils


/* harmony default export */ var picker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    headerColor: String,
    landscape: Boolean,
    noTitle: Boolean,
    width: {
      type: [Number, String],
      default: 290
    }
  },
  methods: {
    genPickerTitle() {
      return null;
    },
    genPickerBody() {
      return null;
    },
    genPickerActionsSlot() {
      return this.$scopedSlots.default ? this.$scopedSlots.default({
        save: this.save,
        cancel: this.cancel
      }) : this.$slots.default;
    },
    genPicker(staticClass) {
      const children = [];
      if (!this.noTitle) {
        const title = this.genPickerTitle();
        title && children.push(title);
      }
      const body = this.genPickerBody();
      body && children.push(body);
      children.push(this.$createElement('template', {
        slot: 'actions'
      }, [this.genPickerActionsSlot()]));
      return this.$createElement(components_VPicker, {
        staticClass,
        props: {
          color: this.headerColor || this.color,
          dark: this.dark,
          elevation: this.elevation,
          flat: this.flat,
          fullWidth: this.fullWidth,
          landscape: this.landscape,
          light: this.light,
          width: this.width,
          noTitle: this.noTitle
        }
      }, children);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/timestamp.js
var timestamp = __webpack_require__(395);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js
// Components




 // Mixins


 // Utils







/* harmony default export */ var VDatePicker = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(localable["a" /* default */], picker).extend({
  name: 'v-date-picker',
  props: {
    activePicker: String,
    allowedDates: Function,
    // Function formatting the day in date picker table
    dayFormat: Function,
    disabled: Boolean,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    // Function formatting the tableDate in the day/month table header
    headerDateFormat: Function,
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    max: String,
    min: String,
    // Function formatting month in the months table
    monthFormat: Function,
    multiple: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    nextMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextMonthAriaLabel'
    },
    nextYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextYearAriaLabel'
    },
    pickerDate: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    prevMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevMonthAriaLabel'
    },
    prevYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevYearAriaLabel'
    },
    range: Boolean,
    reactive: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    showCurrent: {
      type: [Boolean, String],
      default: true
    },
    selectedItemsText: {
      type: String,
      default: '$vuetify.datePicker.itemsSelected'
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    // Function formatting currently selected date in the picker title
    titleDateFormat: Function,
    type: {
      type: String,
      default: 'date',
      validator: type => ['date', 'month'].includes(type) // TODO: year
    },

    value: [Array, String],
    weekdayFormat: Function,
    // Function formatting the year in table header and pickup title
    yearFormat: Function,
    yearIcon: String
  },
  data() {
    const now = new Date();
    return {
      internalActivePicker: this.type.toUpperCase(),
      inputDay: null,
      inputMonth: null,
      inputYear: null,
      isReversing: false,
      now,
      // tableDate is a string in 'YYYY' / 'YYYY-M' format (leading zero for month is not required)
      tableDate: (() => {
        if (this.pickerDate) {
          return this.pickerDate;
        }
        const multipleValue = Object(helpers["I" /* wrapInArray */])(this.value);
        const date = multipleValue[multipleValue.length - 1] || (typeof this.showCurrent === 'string' ? this.showCurrent : `${now.getFullYear()}-${now.getMonth() + 1}`);
        return sanitizeDateString(date, this.type === 'date' ? 'month' : 'year');
      })()
    };
  },
  computed: {
    multipleValue() {
      return Object(helpers["I" /* wrapInArray */])(this.value);
    },
    isMultiple() {
      return this.multiple || this.range;
    },
    lastValue() {
      return this.isMultiple ? this.multipleValue[this.multipleValue.length - 1] : this.value;
    },
    selectedMonths() {
      if (!this.value || this.type === 'month') {
        return this.value;
      } else if (this.isMultiple) {
        return this.multipleValue.map(val => val.substr(0, 7));
      } else {
        return this.value.substr(0, 7);
      }
    },
    current() {
      if (this.showCurrent === true) {
        return sanitizeDateString(`${this.now.getFullYear()}-${this.now.getMonth() + 1}-${this.now.getDate()}`, this.type);
      }
      return this.showCurrent || null;
    },
    inputDate() {
      return this.type === 'date' ? `${this.inputYear}-${pad(this.inputMonth + 1)}-${pad(this.inputDay)}` : `${this.inputYear}-${pad(this.inputMonth + 1)}`;
    },
    tableMonth() {
      return Number((this.pickerDate || this.tableDate).split('-')[1]) - 1;
    },
    tableYear() {
      return Number((this.pickerDate || this.tableDate).split('-')[0]);
    },
    minMonth() {
      return this.min ? sanitizeDateString(this.min, 'month') : null;
    },
    maxMonth() {
      return this.max ? sanitizeDateString(this.max, 'month') : null;
    },
    minYear() {
      return this.min ? sanitizeDateString(this.min, 'year') : null;
    },
    maxYear() {
      return this.max ? sanitizeDateString(this.max, 'year') : null;
    },
    formatters() {
      return {
        year: this.yearFormat || util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        }),
        titleDate: this.titleDateFormat || (this.isMultiple ? this.defaultTitleMultipleDateFormatter : this.defaultTitleDateFormatter)
      };
    },
    defaultTitleMultipleDateFormatter() {
      return dates => {
        if (!dates.length) {
          return '-';
        }
        if (dates.length === 1) {
          return this.defaultTitleDateFormatter(dates[0]);
        }
        return this.$vuetify.lang.t(this.selectedItemsText, dates.length);
      };
    },
    defaultTitleDateFormatter() {
      const titleFormats = {
        year: {
          year: 'numeric',
          timeZone: 'UTC'
        },
        month: {
          month: 'long',
          timeZone: 'UTC'
        },
        date: {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          timeZone: 'UTC'
        }
      };
      const titleDateFormatter = util_createNativeLocaleFormatter(this.currentLocale, titleFormats[this.type], {
        start: 0,
        length: {
          date: 10,
          month: 7,
          year: 4
        }[this.type]
      });
      const landscapeFormatter = date => titleDateFormatter(date).replace(/([^\d\s])([\d])/g, (match, nonDigit, digit) => `${nonDigit} ${digit}`).replace(', ', ',<br>');
      return this.landscape ? landscapeFormatter : titleDateFormatter;
    }
  },
  watch: {
    internalActivePicker: {
      immediate: true,
      handler(val) {
        this.$emit('update:active-picker', val);
      }
    },
    activePicker(val) {
      this.internalActivePicker = val;
    },
    tableDate(val, prev) {
      // Make a ISO 8601 strings from val and prev for comparision, otherwise it will incorrectly
      // compare for example '2000-9' and '2000-10'
      const sanitizeType = this.type === 'month' ? 'year' : 'month';
      this.isReversing = sanitizeDateString(val, sanitizeType) < sanitizeDateString(prev, sanitizeType);
      this.$emit('update:picker-date', val);
    },
    pickerDate(val) {
      if (val) {
        this.tableDate = val;
      } else if (this.lastValue && this.type === 'date') {
        this.tableDate = sanitizeDateString(this.lastValue, 'month');
      } else if (this.lastValue && this.type === 'month') {
        this.tableDate = sanitizeDateString(this.lastValue, 'year');
      }
    },
    value(newValue, oldValue) {
      this.checkMultipleProp();
      this.setInputDate();
      if (!this.isMultiple && this.value && !this.pickerDate || this.isMultiple && this.multipleValue.length && (!oldValue || !oldValue.length) && !this.pickerDate) {
        this.tableDate = sanitizeDateString(this.inputDate, this.type === 'month' ? 'year' : 'month');
      }
    },
    type(type) {
      this.internalActivePicker = type.toUpperCase();
      if (this.value && this.value.length) {
        const output = this.multipleValue.map(val => sanitizeDateString(val, type)).filter(this.isDateAllowed);
        this.$emit('input', this.isMultiple ? output : output[0]);
      }
    }
  },
  created() {
    this.checkMultipleProp();
    if (this.pickerDate !== this.tableDate) {
      this.$emit('update:picker-date', this.tableDate);
    }
    this.setInputDate();
  },
  methods: {
    emitInput(newInput) {
      if (this.range) {
        if (this.multipleValue.length !== 1) {
          this.$emit('input', [newInput]);
        } else {
          const output = [this.multipleValue[0], newInput];
          this.$emit('input', output);
          this.$emit('change', output);
        }
        return;
      }
      const output = this.multiple ? this.multipleValue.indexOf(newInput) === -1 ? this.multipleValue.concat([newInput]) : this.multipleValue.filter(x => x !== newInput) : newInput;
      this.$emit('input', output);
      this.multiple || this.$emit('change', newInput);
    },
    checkMultipleProp() {
      if (this.value == null) return;
      const valueType = this.value.constructor.name;
      const expected = this.isMultiple ? 'Array' : 'String';
      if (valueType !== expected) {
        Object(console["c" /* consoleWarn */])(`Value must be ${this.isMultiple ? 'an' : 'a'} ${expected}, got ${valueType}`, this);
      }
    },
    isDateAllowed(value) {
      return isDateAllowed(value, this.min, this.max, this.allowedDates);
    },
    yearClick(value) {
      this.inputYear = value;
      if (this.type === 'month') {
        this.tableDate = `${value}`;
      } else {
        this.tableDate = `${value}-${pad((this.tableMonth || 0) + 1)}`;
      }
      this.internalActivePicker = 'MONTH';
      if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
        this.$emit('input', this.inputDate);
      }
    },
    monthClick(value) {
      const [year, month] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      if (this.type === 'date') {
        if (this.inputDay) {
          this.inputDay = Math.min(this.inputDay, Object(timestamp["i" /* daysInMonth */])(this.inputYear, this.inputMonth + 1));
        }
        this.tableDate = value;
        this.internalActivePicker = 'DATE';
        if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
          this.$emit('input', this.inputDate);
        }
      } else {
        this.emitInput(this.inputDate);
      }
    },
    dateClick(value) {
      const [year, month, day] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      this.inputDay = parseInt(day, 10);
      this.emitInput(this.inputDate);
    },
    genPickerTitle() {
      return this.$createElement(VDatePicker_VDatePickerTitle, {
        props: {
          date: this.value ? this.formatters.titleDate(this.isMultiple ? this.multipleValue : this.value) : '',
          disabled: this.disabled,
          readonly: this.readonly,
          selectingYear: this.internalActivePicker === 'YEAR',
          year: this.formatters.year(this.multipleValue.length ? `${this.inputYear}` : this.tableDate),
          yearIcon: this.yearIcon,
          value: this.multipleValue[0]
        },
        slot: 'title',
        on: {
          'update:selecting-year': value => this.internalActivePicker = value ? 'YEAR' : this.type.toUpperCase()
        }
      });
    },
    genTableHeader() {
      return this.$createElement(VDatePicker_VDatePickerHeader, {
        props: {
          nextIcon: this.nextIcon,
          color: this.color,
          dark: this.dark,
          disabled: this.disabled,
          format: this.headerDateFormat,
          light: this.light,
          locale: this.locale,
          min: this.internalActivePicker === 'DATE' ? this.minMonth : this.minYear,
          max: this.internalActivePicker === 'DATE' ? this.maxMonth : this.maxYear,
          nextAriaLabel: this.internalActivePicker === 'DATE' ? this.nextMonthAriaLabel : this.nextYearAriaLabel,
          prevAriaLabel: this.internalActivePicker === 'DATE' ? this.prevMonthAriaLabel : this.prevYearAriaLabel,
          prevIcon: this.prevIcon,
          readonly: this.readonly,
          value: this.internalActivePicker === 'DATE' ? `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}` : `${pad(this.tableYear, 4)}`
        },
        on: {
          toggle: () => this.internalActivePicker = this.internalActivePicker === 'DATE' ? 'MONTH' : 'YEAR',
          input: value => this.tableDate = value
        }
      });
    },
    genDateTable() {
      return this.$createElement(VDatePickerDateTable, {
        props: {
          allowedDates: this.allowedDates,
          color: this.color,
          current: this.current,
          dark: this.dark,
          disabled: this.disabled,
          events: this.events,
          eventColor: this.eventColor,
          firstDayOfWeek: this.firstDayOfWeek,
          format: this.dayFormat,
          light: this.light,
          locale: this.locale,
          localeFirstDayOfYear: this.localeFirstDayOfYear,
          min: this.min,
          max: this.max,
          range: this.range,
          readonly: this.readonly,
          scrollable: this.scrollable,
          showAdjacentMonths: this.showAdjacentMonths,
          showWeek: this.showWeek,
          tableDate: `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}`,
          value: this.value,
          weekdayFormat: this.weekdayFormat
        },
        ref: 'table',
        on: {
          input: this.dateClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':date')
        }
      });
    },
    genMonthTable() {
      return this.$createElement(VDatePickerMonthTable, {
        props: {
          allowedDates: this.type === 'month' ? this.allowedDates : null,
          color: this.color,
          current: this.current ? sanitizeDateString(this.current, 'month') : null,
          dark: this.dark,
          disabled: this.disabled,
          events: this.type === 'month' ? this.events : null,
          eventColor: this.type === 'month' ? this.eventColor : null,
          format: this.monthFormat,
          light: this.light,
          locale: this.locale,
          min: this.minMonth,
          max: this.maxMonth,
          range: this.range,
          readonly: this.readonly && this.type === 'month',
          scrollable: this.scrollable,
          value: this.selectedMonths,
          tableDate: `${pad(this.tableYear, 4)}`
        },
        ref: 'table',
        on: {
          input: this.monthClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':month')
        }
      });
    },
    genYears() {
      return this.$createElement(VDatePicker_VDatePickerYears, {
        props: {
          color: this.color,
          format: this.yearFormat,
          locale: this.locale,
          min: this.minYear,
          max: this.maxYear,
          value: this.tableYear
        },
        on: {
          input: this.yearClick,
          ...createItemTypeListeners(this, ':year')
        }
      });
    },
    genPickerBody() {
      const children = this.internalActivePicker === 'YEAR' ? [this.genYears()] : [this.genTableHeader(), this.internalActivePicker === 'DATE' ? this.genDateTable() : this.genMonthTable()];
      return this.$createElement('div', {
        key: this.internalActivePicker
      }, children);
    },
    setInputDate() {
      if (this.lastValue) {
        const array = this.lastValue.split('-');
        this.inputYear = parseInt(array[0], 10);
        this.inputMonth = parseInt(array[1], 10) - 1;
        if (this.type === 'date') {
          this.inputDay = parseInt(array[2], 10);
        }
      } else {
        this.inputYear = this.inputYear || this.now.getFullYear();
        this.inputMonth = this.inputMonth == null ? this.inputMonth : this.now.getMonth();
        this.inputDay = this.inputDay || this.now.getDate();
      }
    }
  },
  render() {
    return this.genPicker('v-picker--date');
  }
}));

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var _src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(336);
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

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(442);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(467);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2f6b6adb", content, true)

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(441);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(135);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },
    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.isDisabled),
        role: 'switch'
      };
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },
    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }
  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },
    genSwitch() {
      const {
        title,
        ...switchAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', {
        ...this.attrs,
        ...switchAttrs
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },
    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__[/* VFabTransition */ "c"], {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },
    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },
    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },
    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].right && !this.isActive) this.onChange();
    }
  }
}));

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(415);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ReceivingFormCRUD.vue?vue&type=template&id=6fcd6913&



















var ReceivingFormCRUDvue_type_template_id_6fcd6913_render = function render() {
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
      "id": _vm.headerId,
      "customerId": _vm.onlineCustomerId
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
  }, [_vm._v("\n                close\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "my-3"
  }, [_vm._v("\n                " + _vm._s(_vm.validateErrorMessage) + "\n            ")])], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
  }, [_vm._v("mdi-label")]), _vm._v(" "), _c('h3', [_vm._v("RECEIVING ")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
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
  }), _vm._v("Make to invoice\n                    ")]) : _vm._e(), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }), _vm._v("ຍົກເລີກບິນ\n                    ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }), _vm._v("Print\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-1"
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-1",
    style: _vm.headerError ? `outline:1px solid red` : ``
  }, [_vm._v("\n                RECID: " + _vm._s(_vm.transaction.id) + "\n                "), _c(components_VCard["c" /* VCardText */], [_c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.findAllLocation,
      "label": "ສາງ*"
    },
    model: {
      value: _vm.transaction.locationId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "locationId", $$v);
      },
      expression: "transaction.locationId"
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
      "label": "PO REFNO.",
      "disabled": ""
    },
    model: {
      value: _vm.transaction.poHeaderId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "poHeaderId", $$v);
      },
      expression: "transaction.poHeaderId"
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
      "items": _vm.vendorList,
      "label": "ຮ້ານຄ້າ*"
    },
    model: {
      value: _vm.transaction.vendorId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "vendorId", $$v);
      },
      expression: "transaction.vendorId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
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
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_vm._v("ອັດຕາແລກປ່ຽນ: " + _vm._s(_vm.getFormatNum(_vm.transaction.exchangeRate)))])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
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
      value: _vm.transaction.notes,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "notes", $$v);
      },
      expression: "transaction.notes"
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
            "disabled": _vm.sourceAPLID == 'PO' || _vm.transaction.poHeaderId || item.id != null,
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
        }, [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "label": "ລາຄາ",
            "rules": [_vm.numberCommaRule]
          },
          on: {
            "input": function ($event) {
              return _vm.priceChange(item);
            }
          },
          model: {
            value: item.price,
            callback: function ($$v) {
              _vm.$set(item, "price", $$v);
            },
            expression: "item.price"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "text-align": "right"
          }
        }, [_vm._v("\n                            " + _vm._s(_vm.getFormatNum(item.total)) + "\n                        ")]), _vm._v(" "), _c('td', [_c(VBtn["a" /* default */], {
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
    }], null, false, 3157968098)
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
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "disabled": !_vm.transaction.isActive || !_vm.updateAllow,
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.postTransaction
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ReceivingFormCRUD.vue?vue&type=template&id=6fcd6913&

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(397);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/PricingOption.vue + 4 modules
var PricingOption = __webpack_require__(87);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./components/CancelTicketForm.vue + 4 modules
var CancelTicketForm = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ReceivingFormCRUD.vue?vue&type=script&lang=js&





/* harmony default export */ var ReceivingFormCRUDvue_type_script_lang_js_ = ({
  components: {
    PricingOption: PricingOption["default"],
    CancelTicketForm: CancelTicketForm["default"]
  },
  props: {
    POTransaction: {
      type: Object,
      default: null
    },
    sourceAPLID: {
      type: String,
      default: null
    },
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
    await this.loadVendor();
    const today = new Date().toISOString().substr(0, 10);
    console.log(`PO Transaction: ${JSON.stringify(this.POTransaction)}`);
    if (this.sourceAPLID == 'PO') {
      // 
      // ********* We need to check if PO already receive be4, we need to load that RECEIVE  *******//
      // await this.loadTransactionFromPoID(this.POTransaction.id)
      // ********* CHECK IF THIS PO HAS ALREADY RECEIVING ID CREATED *******//
      this.transaction.lines = this.POTransaction.lines;
      this.transaction.poHeaderId = this.POTransaction.id;
      this.transaction.bookingDate = today;
      this.transaction.vendorId = this.POTransaction.vendorId;
      this.transaction.paymentId = 1;
      this.transaction.locationId = this.currentTerminal['locationId'];
      this.transaction.currencyId = this.POTransaction.currencyId;
      return await this.loadTransactionFromPoID(this.POTransaction.id);
    }
    if (this.isUpdate) {
      console.log("View old record");
      this.isloading = true;
      await this.loadTransaction();
      this.isloading = false;
    } else {
      this.transaction.bookingDate = today;
      this.transaction.deliveryDate = today;
      this.transaction.clientId = 1;
      this.transaction.paymentId = 1;
      this.transaction.currencyId = 1;
      this.newRow();
    }

    // TODO: Add pricing option here
  },

  methods: {
    async loadVendor() {
      await this.$axios.get("api/vendor/find").then(response => {
        this.isloading = true;
        this.vendorList = response.data;
      }).catch(error => {
        console.log("Error ", error);
      });
      this.isloading = false;
    },
    cancelOrder() {
      this.onlineCustomerId = this.transaction.dynamic_customer.id;
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
      const discount = this.transaction.lines[idx]["discount"];
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
      // TODO: Delete line not reduct card 
      if (this.transaction.poHeaderId != null) return Object(common["j" /* swalError2 */])(this.$swal, 'Error', `ບໍ່ສາມາດລົບໄດ້ ການຮັບເຄື່ອງຈາກ PO ຕ້ອງອີງຕາມລາຍການຢູ່ໃນ PO ເທົ່ານັ້ນ`);
      if (item.id) {
        console.log("Line has id");
        this.isloading = true;
        await this.$axios.delete(`api/${this.apiLine}/line/find/${item.id}`).then(res => {
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
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    unitRateChange(data) {
      console.log("Unit rate change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    priceChange(data) {
      console.log("Price change...");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    discountChange(data) {
      console.log("Discount change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    unitChange(data) {
      console.log("Unit change");
      const unit = this.unitList.find(el => el['id'] == data['unitId']);
      if (unit == undefined) return;
      let index = this.transaction.lines.indexOf(data);
      this.transaction.lines[index]['rate'] = unit['rate'];
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = unit['rate'] * qty * price;
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
      const localPrice = product['cost_price'] * currency['rate'];
      // this.transaction.lines[index]['price'] = product['pro_price'] // *** Price original  ***
      this.transaction.lines[index]['price'] = localPrice; //  *** Price base on exchange rate  ***
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    newRow() {
      const defaultLine = {
        // "id":null,
        "qty": 0,
        "rate": 1,
        "price": 0,
        "total": 0,
        "isActive": true,
        "productId": 0,
        "unitId": 1
      };
      if (this.transaction.poHeaderId) return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ເນື່ອງຈາກ ໃບຮັບເຄື່ອງຜູ້ກັບໃບສັ່ງຊື້, ບໍ່ມາດເພີ່ມ ລາຍການອື່ນ ທີ່ບໍ່ມີໃນໃບສັ່ງຊື້ໄດ້');
      this.transaction.lines.push(defaultLine);
    },
    openCustomerDialog() {
      this.customerDialog = true;
    },
    clearLineIdForCreateFunction() {
      let linesWithNoId = [];
      for (const iterator of this.transaction.lines) {
        if (this.sourceAPLID == 'PO') {
          iterator['poLineId'] = iterator.id;
        }
        iterator.id = null;
        linesWithNoId.push(iterator);
      }
      this.transaction.lines = linesWithNoId;
    },
    async loadTransaction() {
      await this.$axios.get(`api/${this.apiLine}/find/${this.headerId}`).then(res => {
        this.transaction = res.data;
        console.log("Data ", res.data);
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + er.Error);
      });
    },
    async loadTransactionFromPoID(poHeaderId) {
      console.warn(`Check if this PO already has receiving `);
      try {
        const response = await this.$axios.get(`api/receiving/find/poId/${poHeaderId}`);
        this.transaction = response.data;
        console.log("Data ", response.data);
        this.isUpdate = true;
        this.headerId = this.transaction.id;
      } catch (error) {
        console.error(`this poId is not yet recevieved`);
        // this.transaction.lines = this.POTransaction.lines
        // this.transaction.poHeaderId = this.POTransaction.id
        // this.transaction.bookingDate = today;
        // this.transaction.vendorId = this.POTransaction.vendorId;
        // this.transaction.paymentId = 1;
        // this.transaction.locationId = this.currentTerminal['locationId']
        // this.transaction.currencyId = this.POTransaction.currencyId;
        // await this.loadTransactionFromPoID(this.POTransaction.id)
      }
      // await this.$axios
      //     .get(`api/receiving/find/poId/${poHeaderId}`)
      //     .then((res) => {
      //         this.transaction = res.data;
      //         console.log("Data ", res.data);
      //         this.isUpdate = true;
      //         this.headerId = this.transaction.id
      //     })
      //     .catch((er) => {
      //         this.isUpdate = false;
      //         // swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
      //     })
    },

    // post() {
    //     this.errorLineNumber = null
    //     for (const iterator of this.transaction.lines) {
    //         this.errorLineNumber = this.transaction.lines.indexOf(iterator)
    //         if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
    //             this.sheet = true
    //             return
    //         }

    //         iterator['total'] = ((iterator['qty'] * iterator['rate']) * iterator['price']) - iterator['discount']
    //     }
    //     console.log("******** No error found process posting ********");
    //     this.errorLineNumber = null
    //     //  ********** Enable below line to confirm before clear ***********//
    //     // confirmSwal(this.$swal, 'You are posting to invoice ?', this.postToInvoice)
    //     // this.clearCart()
    // },
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
      discount = parseInt(discount);
      rate = parseInt(rate);
      qty = parseInt(qty);
      if (!Number.isFinite(qty) || Number(qty) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຈຳນວນ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${qty}********`;
        if (this.sourceAPLID = 'PO' || false) return true;
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(rate) || Number(rate) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ອັດຕາຫົວຫນ່ວຍ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${rate}********`;
        return false; // Reach must be a positive number
      }
      // Assuming price is a string that may contain commas
      if (typeof price === 'string') {
        // Remove commas from the price string
        price = price.replace(/,/g, '');
      }

      // Convert the cleaned price string to a number
      price = Number(price);
      console.log("Type of price ", typeof price, ' [price] ', price);
      if (!Number.isFinite(price) || Number(price) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ລາຄາ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${price}********`;
        return false; // Reach must be a positive number
      }

      console.log("Type of discount1 ", typeof discount);
      // if (!Number.isFinite(discount)) {
      //     console.log("Type of discount2 ", typeof (discount));
      //     this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສ່ວນລົດ ຕ້ອງເປັນຕົວເລກ  current value is ${discount}********`
      //     return false; // Reach must be a positive number
      // }
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
      // if (!this.transaction.paymentId) {
      //     this.validateErrorMessage = `******** Error Payment in Header #${this.transaction.paymentId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
      //     return false; // Reach must be a positive number
      // }
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
        iterator.discount = parseInt(Object(common["h" /* replaceAll */])(iterator.discount, ',', ''));
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
      // this.transaction.poId = this.headerId
      this.transaction.lines = draftInvoiceLine;
      // this.transaction.discount = replaceAll(this.transaction.discount, ',', '')
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
        iterator.discount = parseInt(Object(common["h" /* replaceAll */])(iterator.discount, ',', ''));
        iterator.qty = parseInt(Object(common["h" /* replaceAll */])(iterator.qty, ',', ''));
        iterator.rate = parseInt(Object(common["h" /* replaceAll */])(iterator.rate, ',', ''));
        // iterator['total'] = ((iterator['quantity'] * iterator['unitRate']) * iterator['price']) - iterator['discount']
      }

      console.log("******** No error found process posting ********");
      this.errorLineNumber = null;
      this.transaction.userId = this.user.id;
      this.transaction.total = this.grandTotal;
      // this.transaction.discount = replaceAll(this.transaction.discount, ',', '')
      // this.transaction.locationId = this.currentTerminal['locationId']
      console.log(`Amount total ${this.transaction.total}`);
      if (this.isUpdate) {
        // ********** If header has data, that means we go for update API ********** //
        await this.$axios.put(`api/${this.apiLine}/update/${this.headerId}`, this.transaction).then(res => {
          this.$emit('reload');
          this.$emit('close-dialog');
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
        this.clearLineIdForCreateFunction();
        await this.$axios.post(`api/${this.apiLine}/create`, this.transaction).then(res => {
          this.$emit('reload');
          this.$emit('close-dialog');
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
    // ...mapGetters(['currentSelectedLocation', 'cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal', 'findAllLocation']),
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
      return 'receiving';
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
      return total;
      // return total;
    }
  },

  data() {
    return {
      poStatus: [{
        name: 'PENDING'
      }, {
        name: 'PARTIAL'
      }, {
        name: 'COMPLETED'
      }],
      cancelConfirmDialog: false,
      productPricingSelected: null,
      pricingDialogKey: 1,
      pricingDialog: false,
      search: '',
      vendorList: [],
      numberCommaRule: value => {
        const regex = /^[0-9,]*$/;
        return regex.test(value) || 'Only numbers and commas are allowed';
      },
      headerError: false,
      customerDialog: false,
      validateErrorMessage: '',
      sheet: false,
      errorLineNumber: null,
      onlineCustomerId: null,
      isloading: false,
      transaction: {
        vendorId: null,
        status: 'PENDING',
        isActive: true,
        exchangeRate: 1,
        total: 0,
        poHeaderId: null,
        locationId: null,
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
// CONCATENATED MODULE: ./components/ReceivingFormCRUD.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ReceivingFormCRUDvue_type_script_lang_js_ = (ReceivingFormCRUDvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ReceivingFormCRUD.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ReceivingFormCRUDvue_type_script_lang_js_,
  ReceivingFormCRUDvue_type_template_id_6fcd6913_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5106da3f"
  
)

/* harmony default export */ var ReceivingFormCRUD = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,CustomerList: __webpack_require__(89).default,CancelTicketForm: __webpack_require__(389).default,PricingOption: __webpack_require__(87).default})


/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(415);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PurchasingFormCRUD.vue?vue&type=template&id=06577fa2&



















var PurchasingFormCRUDvue_type_template_id_06577fa2_render = function render() {
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
      "id": _vm.headerId,
      "customerId": _vm.onlineCustomerId
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
  }, [_vm._v("\n                close\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "my-3"
  }, [_vm._v("\n                " + _vm._s(_vm.validateErrorMessage) + "\n            ")])], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
  }, [_vm._v("mdi-label")]), _vm._v(" "), _c('h3', [_vm._v("PURCHASING")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
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
  }), _vm._v("Make to invoice\n                    ")]) : _vm._e(), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }), _vm._v("ຍົກເລີກບິນ\n                    ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }), _vm._v("Print\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-1"
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-1",
    style: _vm.headerError ? `outline:1px solid red` : ``
  }, [_vm._v("\n                RECID: " + _vm._s(_vm.transaction.id) + "\n                "), _c(components_VCard["c" /* VCardText */], [_c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "name",
      "items": _vm.poStatus,
      "label": "ສະຖານະ*"
    },
    model: {
      value: _vm.transaction.status,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "status", $$v);
      },
      expression: "transaction.status"
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
      "label": "Q-ReferenceNo",
      "disabled": ""
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
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີຮັບເຄື່ອງ*",
      "hint": "ເດຶອນ/ວັນ/ປີ 12/31/2023"
    },
    model: {
      value: _vm.transaction.deliveryDate,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "deliveryDate", $$v);
      },
      expression: "transaction.deliveryDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.vendorList,
      "label": "ຮ້ານຄ້າ*"
    },
    model: {
      value: _vm.transaction.vendorId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "vendorId", $$v);
      },
      expression: "transaction.vendorId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
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
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_vm._v("ອັດຕາແລກປ່ຽນ: " + _vm._s(_vm.getFormatNum(_vm.transaction.exchangeRate)))])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
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
        }, [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "label": "ລາຄາ",
            "rules": [_vm.numberCommaRule]
          },
          on: {
            "input": function ($event) {
              return _vm.priceChange(item);
            }
          },
          model: {
            value: item.price,
            callback: function ($$v) {
              _vm.$set(item, "price", $$v);
            },
            expression: "item.price"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "text-align": "right"
          }
        }, [_vm._v("\n                            " + _vm._s(_vm.getFormatNum(item.total)) + "\n                        ")]), _vm._v(" "), _c('td', [_c(VBtn["a" /* default */], {
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
    }], null, false, 378898369)
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
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "disabled": !_vm.transaction.isActive || !_vm.updateAllow,
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.postTransaction
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PurchasingFormCRUD.vue?vue&type=template&id=06577fa2&

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(397);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/PricingOption.vue + 4 modules
var PricingOption = __webpack_require__(87);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./components/CancelTicketForm.vue + 4 modules
var CancelTicketForm = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PurchasingFormCRUD.vue?vue&type=script&lang=js&





/* harmony default export */ var PurchasingFormCRUDvue_type_script_lang_js_ = ({
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
      this.transaction.bookingDate = today;
      this.transaction.deliveryDate = today;
      this.transaction.clientId = 1;
      this.transaction.paymentId = 1;
      this.transaction.currencyId = 1;
      // this.transaction.discount = 0;
      this.newRow();
    }
    await this.loadVendor();
    // TODO: Add pricing option here
  },

  methods: {
    async loadVendor() {
      await this.$axios.get("api/vendor/find").then(response => {
        this.isloading = true;
        this.vendorList = response.data;
      }).catch(error => {
        console.log("Error ", error);
      });
      this.isloading = false;
    },
    cancelOrder() {
      this.onlineCustomerId = this.transaction.dynamic_customer.id;
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
      const discount = this.transaction.lines[idx]["discount"];
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
        await this.$axios.delete(`api/${this.apiLine}/line/find/${item.id}`).then(res => {
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
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    unitRateChange(data) {
      console.log("Unit rate change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    priceChange(data) {
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      console.log("Price change...", price);
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    discountChange(data) {
      console.log("Discount change");
      let index = this.transaction.lines.indexOf(data);
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    unitChange(data) {
      console.log("Unit change");
      const unit = this.unitList.find(el => el['id'] == data['unitId']);
      if (unit == undefined) return;
      let index = this.transaction.lines.indexOf(data);
      this.transaction.lines[index]['rate'] = unit['rate'];
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      this.transaction.lines[index]['total'] = unit['rate'] * qty * price;
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
      const localPrice = product['cost_price'] * currency['rate'];
      // this.transaction.lines[index]['price'] = product['pro_price'] // *** Price original  ***
      this.transaction.lines[index]['price'] = localPrice; //  *** Price base on exchange rate  ***
      const qty = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['qty'], ',', '');
      // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
      const price = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['price'], ',', '');
      const rate = Object(common["h" /* replaceAll */])(this.transaction.lines[index]['rate'], ',', '');
      this.transaction.lines[index]['total'] = rate * qty * price;
    },
    newRow() {
      const defaultLine = {
        // "id":null,
        "qty": 0,
        "rate": 1,
        "price": 0,
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
      discount = parseInt(discount);
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
      // Assuming price is a string that may contain commas
      if (typeof price === 'string') {
        // Remove commas from the price string
        price = price.replace(/,/g, '');
      }

      // Convert the cleaned price string to a number
      price = Number(price);
      console.log("Type of price ", typeof price, ' [price] ', price);
      if (!Number.isFinite(price) || Number(price) <= 0) {
        this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ລາຄາ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${price}********`;
        return false; // Reach must be a positive number
      }

      console.log("Type of discount1 ", typeof discount);
      // if (!Number.isFinite(discount)) {
      //     console.log("Type of discount2 ", typeof (discount));
      //     this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສ່ວນລົດ ຕ້ອງເປັນຕົວເລກ  current value is ${discount}********`
      //     return false; // Reach must be a positive number
      // }
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
      // if (!this.transaction.paymentId) {
      //     this.validateErrorMessage = `******** Error Payment in Header #${this.transaction.paymentId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
      //     return false; // Reach must be a positive number
      // }
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
        iterator.discount = parseInt(Object(common["h" /* replaceAll */])(iterator.discount, ',', ''));
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
      // this.transaction.discount = replaceAll(this.transaction.discount, ',', '')
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
        iterator.discount = parseInt(Object(common["h" /* replaceAll */])(iterator.discount, ',', ''));
        iterator.qty = parseInt(Object(common["h" /* replaceAll */])(iterator.qty, ',', ''));
        iterator.rate = parseInt(Object(common["h" /* replaceAll */])(iterator.rate, ',', ''));
        iterator.price = parseInt(Object(common["h" /* replaceAll */])(iterator.price, ',', ''));
        // iterator['total'] = ((iterator['quantity'] * iterator['unitRate']) * iterator['price']) - iterator['discount']
      }

      console.log("******** No error found process posting ********");
      this.errorLineNumber = null;
      this.transaction.userId = this.user.id;
      this.transaction.total = this.grandTotal;
      // this.transaction.discount = replaceAll(this.transaction.discount, ',', '')
      this.transaction.locationId = this.currentTerminal['locationId'];
      console.log(`Amount total ${this.transaction.total}`);
      if (this.isUpdate) {
        // ********** If header has data, that means we go for update API ********** //
        await this.$axios.put(`api/${this.apiLine}/update/${this.headerId}`, this.transaction).then(res => {
          this.$emit('reload');
          this.$emit('close-dialog');
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
          this.$emit('close-dialog');
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
      return 'purchasing';
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
      return total;
      // return total;
    }
  },

  data() {
    return {
      poStatus: [{
        name: 'PENDING'
      }, {
        name: 'PARTIAL'
      }, {
        name: 'COMPLETED'
      }],
      cancelConfirmDialog: false,
      productPricingSelected: null,
      pricingDialogKey: 1,
      pricingDialog: false,
      search: '',
      vendorList: [],
      numberCommaRule: value => {
        const regex = /^[0-9,]*$/;
        return regex.test(value) || 'Only numbers and commas are allowed';
      },
      headerError: false,
      customerDialog: false,
      validateErrorMessage: '',
      sheet: false,
      errorLineNumber: null,
      onlineCustomerId: null,
      isloading: false,
      transaction: {
        vendorId: null,
        status: 'PENDING',
        isActive: true,
        exchangeRate: 1,
        total: 0,
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
// CONCATENATED MODULE: ./components/PurchasingFormCRUD.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PurchasingFormCRUDvue_type_script_lang_js_ = (PurchasingFormCRUDvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/PurchasingFormCRUD.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PurchasingFormCRUDvue_type_script_lang_js_,
  PurchasingFormCRUDvue_type_template_id_06577fa2_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b9d1a59a"
  
)

/* harmony default export */ var PurchasingFormCRUD = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,CustomerList: __webpack_require__(89).default,CancelTicketForm: __webpack_require__(389).default,PricingOption: __webpack_require__(87).default})


/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(374);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(468);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/po/PoForm.vue?vue&type=template&id=1a9381f0&

















var PoFormvue_type_template_id_1a9381f0_render = function render() {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800"
    },
    model: {
      value: _vm.showAddRowDialog,
      callback: function ($$v) {
        _vm.showAddRowDialog = $$v;
      },
      expression: "showAddRowDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("ເພີ່ມລາຍການໃຫມ່")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "addRowForm"
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "pro_name",
      "item-value": "id",
      "items": _vm.productList,
      "label": "ເລືອກສິນຄ້າ *",
      "rules": _vm.productIdRules
    },
    model: {
      value: _vm.newRow.productId,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "productId", $$v);
      },
      expression: "newRow.productId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "step": "0.01",
      "min": "0",
      "label": "ລາຄາຕໍ່ຫນ່ວຍ",
      "required": "",
      "rules": _vm.priceRules
    },
    model: {
      value: _vm.newRow.price,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "price", _vm._n($$v));
      },
      expression: "newRow.price"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ຈຳນວນ",
      "required": "",
      "rules": _vm.qtyRules
    },
    model: {
      value: _vm.newRow.qty,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "qty", _vm._n($$v));
      },
      expression: "newRow.qty"
    }
  }), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.currencyList,
      "label": "ສະກຸນ *",
      "rules": _vm.currencyIdRules
    },
    model: {
      value: _vm.newRow.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "currencyId", $$v);
      },
      expression: "newRow.currencyId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "step": "0.01",
      "min": "0",
      "label": "ອັດຕາແລກປ່ຽນ",
      "rules": _vm.rateRules,
      "required": ""
    },
    model: {
      value: _vm.newRow.rate,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "rate", _vm._n($$v));
      },
      expression: "newRow.rate"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "step": "0.01",
      "min": "0",
      "label": "ລວມ",
      "rules": _vm.totalRules,
      "required": ""
    },
    model: {
      value: _vm.newRow.total,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "total", _vm._n($$v));
      },
      expression: "newRow.total"
    }
  })], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.addRow
    }
  }, [_vm._v("ເພີ່ມ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary"
    },
    on: {
      "click": function ($event) {
        _vm.showAddRowDialog = false;
      }
    }
  }, [_vm._v("ປິດ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.form.header.vendor,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "vendor", $$v);
      },
      expression: "form.header.vendor"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Remark",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.form.header.notes,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "notes", $$v);
      },
      expression: "form.header.notes"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີສັ່ງ*",
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.form.header.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "bookingDate", $$v);
      },
      expression: "form.header.bookingDate"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີຮັບເຄື່ອງ*",
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.form.header.deliveryDate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "deliveryDate", $$v);
      },
      expression: "form.header.deliveryDate"
    }
  }), _vm._v(" "), _c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "true-value": true,
      "false-value": false
    },
    model: {
      value: _vm.form.header.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "isActive", $$v);
      },
      expression: "form.header.isActive"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": function ($event) {
        _vm.showAddRowDialog = true;
      }
    }
  }, [_vm._v("ເພີ່ມລາຍການ")]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "items": _vm.lines
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('tr', [_c('td', [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "item-text": "pro_name",
            "item-value": "id",
            "items": _vm.productList,
            "rules": _vm.productIdRules,
            "label": "ເລືອກສິນຄ້າ *"
          },
          model: {
            value: item.productId,
            callback: function ($$v) {
              _vm.$set(item, "productId", $$v);
            },
            expression: "item.productId"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "label": "ລາຄາ",
            "rules": _vm.priceRules
          },
          model: {
            value: item.price,
            callback: function ($$v) {
              _vm.$set(item, "price", _vm._n($$v));
            },
            expression: "item.price"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "label": "ຈຳນວນ",
            "rules": _vm.qtyRules
          },
          model: {
            value: item.qty,
            callback: function ($$v) {
              _vm.$set(item, "qty", _vm._n($$v));
            },
            expression: "item.qty"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "item-text": "code",
            "item-value": "id",
            "items": _vm.currencyList,
            "label": "ສະກຸນ *",
            "rules": _vm.currencyIdRules
          },
          model: {
            value: item.currencyId,
            callback: function ($$v) {
              _vm.$set(item, "currencyId", $$v);
            },
            expression: "item.currencyId"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "step": "0.01",
            "min": "0",
            "label": "ອັດຕາແລກປ່ຽນ",
            "rules": _vm.rateRules
          },
          model: {
            value: item.rate,
            callback: function ($$v) {
              _vm.$set(item, "rate", _vm._n($$v));
            },
            expression: "item.rate"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "step": "0.01",
            "min": "0",
            "label": "ລວມ",
            "rules": _vm.totalRules
          },
          model: {
            value: item.total,
            callback: function ($$v) {
              _vm.$set(item, "total", _vm._n($$v));
            },
            expression: "item.total"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "warning",
            "variant": "text"
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item);
            }
          }
        }, [_vm._v("\n                                    ລົບ\n                                ")])], 1)])];
      }
    }])
  })], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/po/PoForm.vue?vue&type=template&id=1a9381f0&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(137);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/po/PoForm.vue?vue&type=script&lang=js&


/* harmony default export */ var PoFormvue_type_script_lang_js_ = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      productList: [],
      currencyList: [],
      showAddRowDialog: false,
      dialog: false,
      title: 'ສ້າງ ໃບສັ່ງຊື້',
      valid: false,
      isLoading: false,
      form: {
        header: {
          bookingDate: '',
          deliveryDate: '',
          vendor: 'Acme Inc.',
          notes: 'Please deliver to loading dock B.',
          isActive: true,
          locking_session_id: ''
        }
      },
      rules: {
        required: v => !!v || "This field is required",
        dateAfter: date => v => date ? new Date(v) >= new Date(date) || "Date must be after start date" : true,
        dateAfterToday: v => new Date(v) >= new Date() || "Date must be after today",
        number: v => !isNaN(parseFloat(v)) && isFinite(v) || "Value must be a number"
      },
      headers: [{
        text: "ສິນຄ້າ",
        value: "date"
      }, {
        text: "ລາຄາຕໍ່ຫນ່ວຍ",
        value: "reach"
      }, {
        text: "ຈຳນວນ",
        value: "results"
      }, {
        text: "ສະກຸນ",
        value: "reach"
      }, {
        text: "ອັດຕາແລກປ່ຽນ",
        value: "comments"
      }, {
        text: "ລວມ",
        value: "purchaseQty"
      }
      // { text: "Cost Per Customer", value: "costPerCustomer" },
      // { text: "Budget Spend", value: "budgetSpend" }
      ],

      lines: [],
      lineError: [],
      newRow: {
        rate: 1,
        qty: 1,
        price: 25.0,
        total: 250.0,
        isActive: true,
        currencyId: 1,
        productId: 2,
        locking_session_id: ''
      }
    };
  },
  mounted() {
    // this.loadAccount()

    const today = new Date().toISOString().substr(0, 10);
    this.form.header.bookingDate = today;
    this.form.header.deliveryDate = today;
    this.loadPurchaseOrder();
    this.loadProduct();
    this.loadCurrency();
  },
  computed: {
    dateRules() {
      return [value => !!value || 'Field is required', value => /^(\d{4})-(\d{2})-(\d{2})$/.test(value) || 'Invalid date format (YYYY-MM-DD)'];
    },
    rateRules() {
      return [value => !!value || 'Rate is required', value => /^[0-9]+(\.[0-9]{1,2})?$/.test(value) || 'Rate must be a number with up to 2 decimal places'];
    },
    qtyRules() {
      return [value => !!value || 'Quantity is required', value => /^\d+$/.test(value) || 'Quantity must be a whole number'];
    },
    priceRules() {
      return [value => !!value || 'Price is required', value => /^\d+(\.\d{1,2})?$/.test(value) || 'Price must be a number with up to 2 decimal places'];
    },
    totalRules() {
      return [value => !!value || 'Total is required', value => /^\d+(\.\d{1,2})?$/.test(value) || 'Total must be a number with up to 2 decimal places'];
    },
    currencyIdRules() {
      return [value => !!value || 'Currency ID is required', value => /^\d+$/.test(value) || 'Currency ID must be a whole number'];
    },
    productIdRules() {
      return [value => !!value || 'Product ID is required', value => /^\d+$/.test(value) || 'Product ID must be a whole number'];
    }
  },
  methods: {
    deleteItem(item) {
      const index = this.lines.indexOf(item);
      if (index > -1) {
        if (this.isEdit && item.id) {
          Object(myUtil["a" /* confirmSwal */])(this.$swal, 'warning', async () => {
            console.log("Delete record function");
            this.isLoading = true;
            await this.$axios.delete(`/api/purchasing/line/find/${item.id}`).then(response => {
              console.log("response=>", response.data);
              if (response.data.includes('successfully')) {
                this.lines.splice(index, 1);
              }
            }).catch(error => {
              Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data);
            });
            this.isLoading = false;
          });
        } else {
          this.lines.splice(index, 1);
        }
      }
    },
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    validateLine() {
      this.lines.forEach((item, index) => {
        const {
          rate,
          qty,
          price,
          total,
          isActive,
          currencyId,
          productId
        } = item;
        console.log("===>Rate ", rate);
        if (!rate || !Number.isFinite(rate)) {
          this.lineError.push(` Rate must be a number`);
        }
        if (!qty || !Number.isInteger(qty)) {
          this.lineError.push(` Quantity must be an integer`);
        }
        if (!price || !Number.isFinite(price)) {
          this.lineError.push(` Price must be a number`);
        }
        if (!total || !Number.isFinite(total)) {
          this.lineError.push(` Total must be a number`);
        }
        if (typeof isActive !== 'boolean') {
          this.lineError.push(` isActive must be a boolean`);
        }
        if (!currencyId || !Number.isInteger(currencyId)) {
          this.lineError.push(` Currency ID must be an integer`);
        }
        if (!productId || !Number.isInteger(productId)) {
          this.lineError.push(` Product ID must be an integer`);
        }
      });
    },
    async loadPurchaseOrder() {
      this.isLoading = true;
      if (this.isEdit) {
        await this.$axios.get(`/api/purchasing/find/${this.campaignId}`).then(response => {
          this.form.header = response.data;
          this.form.header.start = response.data['start'].split('T')[0];
          this.form.header.end = response.data['end'].split('T')[0];
          this.campaignEntry.length = 0;
          for (const iterator of response.data.entries) {
            let entry = iterator;
            entry['date'] = iterator['date'].split('T')[0];
            this.campaignEntry.push(entry);
          }
        }).catch(error => {
          console.log("Load cammpaign error", error);
        });
      }
      this.isLoading = false;
    },
    async submit() {
      // handle form submission here
      if (!this.isLoading) {
        this.isLoading = true;
        if (this.lines.length == 0) {
          this.isLoading = false;
          return Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ບໍ່ມີລາຍການ ກະລຸນາເພີ່ມຢ່າງນ້ອຍ 1 ລາຍການ");
        }
        this.validateLine();
        if (this.lineError.length > 0) {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", `ກະລຸນາ ກວດຂໍ້ມູນຄືນໃຫ້ຖືກຕ້ອງ ${this.lineError} `);
          this.isLoading = false;
          return this.lineError.length = 0;
        }
        this.form.header.lines = this.lines;
        // ********* update entry *********
        if (this.isEdit && this.headerId) {
          console.log("====> update campaign");
          await this.$axios.put(`/api/purchasing/update/${this.headerId}`, this.form.header).then(res => {
            if (res.status == 200) {
              Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
            } else {
              Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data);
            }
          }).catch(error => {
            Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data);
          });
          // ********* create entry *********
        } else {
          // this.isLoading = false;
          // return console.log("Form ===> ", this.form.header);
          await this.$axios.post("/api/purchasing/create", this.form.header).then(res => {
            if (res.status == 200) {
              Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
            } else {
              Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data);
            }
          }).catch(error => {
            // swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data.errors[0]['msg'])
            Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data);
          });
        }
        this.isLoading = false;
      }
      this.close();
    },
    addRow() {
      if (this.$refs.addRowForm.validate()) {
        this.lines.push(this.newRow);
        this.newRow = {
          rate: 2.5,
          qty: 10,
          price: 25.0,
          total: 250.0,
          isActive: true
          //   locking_session_id: 'abc123'
        };

        this.showAddRowDialog = false;
      }
    },
    async loadProduct() {
      this.isLoading = true;
      await this.$axios.get('product_mobile_f').then(res => {
        this.productList = res.data.map(el => {
          return el;
        });
        console.log("all data1: ", this.productList[0].img_path);
      }).catch(er => {
        console.log('Data: ' + er);
      });
      this.isLoading = false;
    },
    async loadCurrency() {
      this.isLoading = true;
      await this.$axios.get('api/currency/find').then(res => {
        this.currencyList = res.data.map(el => {
          return el;
        });
      }).catch(er => {
        console.log('Data: ' + er);
      });
      this.isLoading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/po/PoForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var po_PoFormvue_type_script_lang_js_ = (PoFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/po/PoForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  po_PoFormvue_type_script_lang_js_,
  PoFormvue_type_template_id_1a9381f0_render,
  staticRenderFns,
  false,
  null,
  null,
  "72cfd920"
  
)

/* harmony default export */ var PoForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(466);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },
    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },
    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },
    styles() {
      if (this.absolute || !this.app) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application;
      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(bottom + footer + insetFooter),
        paddingLeft: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(left),
        paddingRight: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(bar + top)
      };
    }
  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },
  mounted() {
    if (this.isActive) this.setTimeout();
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq

    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },
  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "s"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "s"])(this)]);
    },
    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        style: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          pointerenter: () => window.clearTimeout(this.activeTimeout),
          pointerleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },
    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },
    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);
      if (!this.isActive ||
      // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }
      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }
}));

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(586);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("de5ee156", content, true, context)
};

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(516);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error-border[data-v-f09cae02]{border:2px solid #f44336!important}.error-row[data-v-f09cae02]{background-color:#ffebee!important}.error-row td[data-v-f09cae02]{border-bottom:1px solid #f44336!important}.v-data-table tbody tr[data-v-f09cae02]:hover{background-color:#f5f5f5!important}.v-card[data-v-f09cae02]{transition:box-shadow .3s ease}.v-card[data-v-f09cae02]:hover{box-shadow:0 4px 8px rgba(0,0,0,.12)!important}.v-text-field--outlined .v-input__control .v-input__slot[data-v-f09cae02]{min-height:40px}.v-autocomplete--is-dirty .v-select__selection[data-v-f09cae02]{color:rgba(0,0,0,.87)}.loading-overlay[data-v-f09cae02]{align-items:center;background:hsla(0,0%,100%,.8);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:1000}.v-data-table th[data-v-f09cae02]{background-color:#f8f9fa;font-weight:600}.v-data-table .v-data-table__wrapper[data-v-f09cae02]{border-radius:8px;overflow:hidden}.success--text[data-v-f09cae02]{color:#4caf50!important}.error--text[data-v-f09cae02]{color:#f44336!important}@media (max-width:768px){.v-data-table[data-v-f09cae02]{font-size:.875rem}.v-btn[data-v-f09cae02]{min-width:auto;padding:0 12px}}@media print{.v-btn[data-v-f09cae02],.v-card-actions[data-v-f09cae02]{display:none!important}.v-card[data-v-f09cae02]{border:1px solid #ddd;box-shadow:none!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(508);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(415);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/GLForm.vue?vue&type=template&id=f09cae02&scoped=true&
























var GLFormvue_type_template_id_f09cae02_scoped_true_render = function render() {
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
      "id": _vm.headerId,
      "customerId": _vm.onlineCustomerId
    },
    on: {
      "refresh": function ($event) {
        return _vm.$emit('reload');
      },
      "close-dialog": function ($event) {
        _vm.cancelConfirmDialog = false;
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
        _vm.sheet = false;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        Close\n      ")], 1), _vm._v(" "), _c('div', {
    staticClass: "my-3 error--text"
  }, [_vm._v("\n        " + _vm._s(_vm.validateErrorMessage) + "\n      ")])], 1)], 1), _vm._ssrNode(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "color": "success",
      "timeout": "3000"
    },
    scopedSlots: _vm._u([{
      key: "action",
      fn: function ({
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._b({
          attrs: {
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.successSnackbar = false;
            }
          }
        }, 'v-btn', attrs, false), [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)];
      }
    }]),
    model: {
      value: _vm.successSnackbar,
      callback: function ($$v) {
        _vm.successSnackbar = $$v;
      },
      expression: "successSnackbar"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.successMessage) + "\n    ")]), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
  }, [_vm._v("mdi-book-open-variant")]), _vm._v(" "), _c('h3', [_vm._v("General Ledger")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary mr-2",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": "",
      "disabled": !_vm.transaction.id
    },
    on: {
      "click": _vm.printTransaction
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n            Print\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "size": "large",
      "variant": "outlined",
      "color": "secondary",
      "rounded": "",
      "disabled": _vm.isloading
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n            Reset\n          ")], 1)], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VCard["a" /* default */], {
    staticClass: "mb-4 pa-4",
    class: {
      'error-border': _vm.headerError
    },
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n          Transaction Details\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _vm.transaction.id ? _c(VChip["a" /* default */], {
    attrs: {
      "color": "info",
      "small": ""
    }
  }, [_vm._v("\n            RECID: " + _vm._s(_vm.transaction.id) + "\n          ")]) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "Booking Date *",
      "error-messages": _vm.getFieldError('bookingDate'),
      "outlined": "",
      "dense": "",
      "required": ""
    },
    on: {
      "blur": function ($event) {
        return _vm.validateField('bookingDate');
      }
    },
    model: {
      value: _vm.transaction.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "bookingDate", $$v);
      },
      expression: "transaction.bookingDate"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "PO Reference Number",
      "outlined": "",
      "dense": "",
      "disabled": ""
    },
    model: {
      value: _vm.transaction.poHeaderId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "poHeaderId", $$v);
      },
      expression: "transaction.poHeaderId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Reference",
      "outlined": "",
      "dense": "",
      "error-messages": _vm.getFieldError('reference'),
      "maxlength": "50"
    },
    on: {
      "blur": function ($event) {
        return _vm.validateField('reference');
      }
    },
    model: {
      value: _vm.transaction.reference,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "reference", $$v);
      },
      expression: "transaction.reference"
    }
  }), _vm._v(" "), _c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Transaction Description",
      "outlined": "",
      "dense": "",
      "rows": "2",
      "maxlength": "255"
    },
    model: {
      value: _vm.transaction.description,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "description", $$v);
      },
      expression: "transaction.description"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_vm.transaction.user ? _c('div', {
    staticClass: "mb-2"
  }, [_c('strong', [_vm._v("Created by:")]), _vm._v(" " + _vm._s(_vm.transaction.user.cus_id)), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Name:")]), _vm._v(" " + _vm._s(_vm.transaction.user.cus_name) + "\n              ")]) : _vm._e(), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-3",
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-h6 primary--text"
  }, [_vm._v("\n                  Total Amount (LCY)\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "text-h5 font-weight-bold"
  }, [_vm._v("\n                  " + _vm._s(_vm.getFormatNum(_vm.grandTotal)) + "\n                ")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-format-list-bulleted")]), _vm._v("\n          Transaction Lines\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": _vm.isUpdate || _vm.isloading,
      "small": ""
    },
    on: {
      "click": _vm.newRow
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n            Add Line\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm.transaction.lines && _vm.transaction.lines.length > 0 ? _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.transaction.lines,
      "search": _vm.search,
      "item-key": "tempId"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VTextField["a" /* default */], {
          staticClass: "mb-3",
          attrs: {
            "label": "Search lines...",
            "prepend-inner-icon": "mdi-magnify",
            "single-line": "",
            "hide-details": "",
            "clearable": ""
          },
          model: {
            value: _vm.search,
            callback: function ($$v) {
              _vm.search = $$v;
            },
            expression: "search"
          }
        })];
      },
      proxy: true
    }, {
      key: "item",
      fn: function ({
        item,
        index
      }) {
        return [_c('tr', {
          class: {
            'error-row': _vm.errorLineNumber === index
          }
        }, [_c('td', {
          staticClass: "text-center"
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": _vm.errorLineNumber === index ? 'error' : 'primary'
          }
        }, [_vm._v("\n                    " + _vm._s(index + 1) + "\n                  ")])], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "150px"
          }
        }, [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.currencyList,
            "item-text": "code",
            "item-value": "id",
            "label": "Currency *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'currencyId'),
            "required": ""
          },
          on: {
            "change": function ($event) {
              return _vm.currencyChange(item, index);
            },
            "blur": function ($event) {
              return _vm.validateLineField(index, 'currencyId');
            }
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function ({
              item
            }) {
              return [_vm._v("\n                      " + _vm._s(item.code) + " - " + _vm._s(item.name) + "\n                    ")];
            }
          }, {
            key: "item",
            fn: function ({
              item
            }) {
              return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.code))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.name))])], 1)];
            }
          }], null, true),
          model: {
            value: item.currencyId,
            callback: function ($$v) {
              _vm.$set(item, "currencyId", $$v);
            },
            expression: "item.currencyId"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "120px"
          }
        }, [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "label": "Amount *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'amount'),
            "required": ""
          },
          on: {
            "input": function ($event) {
              return _vm.amountChange(item, index);
            },
            "blur": function ($event) {
              return _vm.validateLineField(index, 'amount');
            }
          },
          model: {
            value: item.amount,
            callback: function ($$v) {
              _vm.$set(item, "amount", $$v);
            },
            expression: "item.amount"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "120px"
          }
        }, [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "label": "Exchange Rate *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'rate'),
            "required": ""
          },
          on: {
            "input": function ($event) {
              return _vm.rateChange(item, index);
            },
            "blur": function ($event) {
              return _vm.validateLineField(index, 'rate');
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
            "min-width": "200px"
          }
        }, [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.accountList,
            "item-text": "accountNumber",
            "item-value": "id",
            "label": "Debit Account *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'drAccountId'),
            "required": ""
          },
          on: {
            "blur": function ($event) {
              return _vm.validateLineField(index, 'drAccountId');
            }
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function ({
              item
            }) {
              return [_vm._v("\n                      " + _vm._s(item.accountNumber) + " - " + _vm._s(item.accountName) + "\n                    ")];
            }
          }, {
            key: "item",
            fn: function ({
              item
            }) {
              return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.accountNumber))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.accountName))])], 1)];
            }
          }], null, true),
          model: {
            value: item.drAccountId,
            callback: function ($$v) {
              _vm.$set(item, "drAccountId", $$v);
            },
            expression: "item.drAccountId"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "200px"
          }
        }, [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.accountList,
            "item-text": "accountNumber",
            "item-value": "id",
            "label": "Credit Account *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'crAccountId'),
            "required": ""
          },
          on: {
            "blur": function ($event) {
              return _vm.validateLineField(index, 'crAccountId');
            }
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function ({
              item
            }) {
              return [_vm._v("\n                      " + _vm._s(item.accountNumber) + " - " + _vm._s(item.accountName) + "\n                    ")];
            }
          }, {
            key: "item",
            fn: function ({
              item
            }) {
              return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.accountNumber))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.accountName))])], 1)];
            }
          }], null, true),
          model: {
            value: item.crAccountId,
            callback: function ($$v) {
              _vm.$set(item, "crAccountId", $$v);
            },
            expression: "item.crAccountId"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "150px"
          }
        }, [_c(VTextField["a" /* default */], {
          attrs: {
            "label": "Description",
            "outlined": "",
            "dense": "",
            "maxlength": "100"
          },
          model: {
            value: item.description,
            callback: function ($$v) {
              _vm.$set(item, "description", $$v);
            },
            expression: "item.description"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold"
        }, [_vm._v("\n                  " + _vm._s(_vm.getFormatNum(item.localAmount)) + "\n                ")]), _vm._v(" "), _c('td', {
          staticClass: "text-center"
        }, [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "error",
            "icon": "",
            "small": "",
            "disabled": _vm.isloading
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item, index);
            }
          }
        }, [_c(VIcon["a" /* default */], [_vm._v("mdi-delete")])], 1)], 1)])];
      }
    }], null, false, 1715049908)
  }) : _c(VCard["a" /* default */], {
    staticClass: "pa-8 text-center",
    staticStyle: {
      "border": "2px dashed #ccc"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey"
    }
  }, [_vm._v("mdi-format-list-bulleted")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-4 mb-2"
  }, [_vm._v("No transaction lines")]), _vm._v(" "), _c('p', {
    staticClass: "mb-4"
  }, [_vm._v("Add your first transaction line to get started")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": _vm.isUpdate || _vm.isloading
    },
    on: {
      "click": _vm.newRow
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n              Add First Line\n            ")], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_vm.transaction.lines.length > 0 ? _c(VChip["a" /* default */], {
    attrs: {
      "color": "info",
      "outlined": ""
    }
  }, [_vm._v("\n        " + _vm._s(_vm.transaction.lines.length) + " line(s)\n      ")]) : _vm._e(), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": "",
      "disabled": _vm.isloading
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        Cancel\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": _vm.isloading || !_vm.canSave,
      "loading": _vm.isloading
    },
    on: {
      "click": _vm.postTransaction
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n        " + _vm._s(_vm.isUpdate ? 'Update' : 'Save') + "\n      ")], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/GLForm.vue?vue&type=template&id=f09cae02&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(338);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(339);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(340);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(341);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(342);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(343);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(344);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(345);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(346);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(347);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(348);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(349);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(350);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(351);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(352);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(353);

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(397);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/GLForm.vue?vue&type=script&lang=js&



















/* harmony default export */ var GLFormvue_type_script_lang_js_ = ({
  name: 'gl-form',
  props: {
    GLId: {
      type: Number,
      default: null
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
    await this.initializeForm();
  },
  data() {
    return {
      // UI State
      isloading: false,
      customerDialog: false,
      cancelConfirmDialog: false,
      sheet: false,
      successSnackbar: false,
      successMessage: '',
      search: '',
      // Error tracking
      headerError: false,
      errorLineNumber: null,
      validateErrorMessage: '',
      validationErrors: {
        header: {},
        lines: {}
      },
      // Data
      accountList: [],
      transaction: {
        id: null,
        bookingDate: null,
        reference: '',
        description: '',
        vendorId: null,
        status: 'PENDING',
        isActive: true,
        exchangeRate: 1,
        total: 0,
        poHeaderId: null,
        locationId: null,
        user: null,
        lines: []
      },
      // Table configuration
      headers: [{
        text: '#',
        value: 'index',
        align: 'center',
        sortable: false,
        width: '60px'
      }, {
        text: 'Currency',
        value: 'currencyId',
        align: 'start',
        sortable: false,
        width: '150px'
      }, {
        text: 'Amount',
        value: 'amount',
        align: 'end',
        sortable: false,
        width: '120px'
      }, {
        text: 'Rate',
        value: 'rate',
        align: 'end',
        sortable: false,
        width: '120px'
      }, {
        text: 'Debit Account',
        value: 'drAccountId',
        align: 'start',
        sortable: false,
        width: '200px'
      }, {
        text: 'Credit Account',
        value: 'crAccountId',
        align: 'start',
        sortable: false,
        width: '200px'
      }, {
        text: 'Description',
        value: 'description',
        align: 'start',
        sortable: false,
        width: '150px'
      }, {
        text: 'Local Amount',
        value: 'localAmount',
        align: 'end',
        sortable: false,
        width: '120px'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        sortable: false,
        width: '80px'
      }],
      // Validation rules
      validationRules: {
        required: value => !!value || 'This field is required',
        number: value => !isNaN(parseFloat(value)) && isFinite(value) || 'Must be a valid number',
        positiveNumber: value => parseFloat(value) > 0 || 'Must be greater than 0',
        date: value => {
          if (!value) return 'Date is required';
          const date = new Date(value);
          return !isNaN(date.getTime()) || 'Must be a valid date';
        },
        maxLength: max => value => !value || value.length <= max || `Maximum ${max} characters allowed`,
        numberComma: value => {
          if (!value) return true;
          const regex = /^[0-9,]*$/;
          return regex.test(value) || 'Only numbers and commas are allowed';
        }
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal', 'findAllLocation']),
    currencyList() {
      return this.findAllCurrency || [];
    },
    grandTotal() {
      return this.transaction.lines.reduce((total, item) => {
        return total + (item.localAmount || 0);
      }, 0);
    },
    canSave() {
      return this.transaction.lines.length > 0 && this.transaction.bookingDate && !this.hasValidationErrors;
    },
    hasValidationErrors() {
      const hasHeaderErrors = Object.keys(this.validationErrors.header).length > 0;
      const hasLineErrors = Object.keys(this.validationErrors.lines).some(lineIndex => Object.keys(this.validationErrors.lines[lineIndex]).length > 0);
      return hasHeaderErrors || hasLineErrors;
    },
    user() {
      return this.$auth.user || null;
    }
  },
  methods: {
    // Initialization
    async initializeForm() {
      try {
        this.isloading = true;
        await this.loadChartOfAccount();
        const today = new Date().toISOString().substr(0, 10);
        this.transaction.bookingDate = today;
        this.transaction.user = this.user;
        if (this.isUpdate && this.GLId) {
          await this.loadTransaction();
        } else {
          this.newRow();
        }
      } catch (error) {
        this.showError('Failed to initialize form');
        console.error('Initialization error:', error);
      } finally {
        this.isloading = false;
      }
    },
    // Data loading
    async loadChartOfAccount() {
      try {
        const response = await this.$axios.get("api/account/findAll");
        this.accountList = response.data;
      } catch (error) {
        this.showError('Failed to load chart of accounts');
        console.error('Chart of accounts error:', error);
      }
    },
    async loadTransaction() {
      try {
        const response = await this.$axios.get(`api/gl/find/${this.GLId}`);
        const data = response.data;

        // Populate header
        this.transaction.bookingDate = data.bookingDate;
        this.transaction.reference = data.reference || '';
        this.transaction.description = data.description || '';
        this.transaction.id = data.id;

        // Populate lines
        if (data.lines && data.lines.length > 0) {
          this.transaction.lines = data.lines.map((line, index) => ({
            ...line,
            tempId: `line_${index}_${Date.now()}`
          }));
        } else {
          this.transaction.lines = [data];
        }
      } catch (error) {
        this.showError('Failed to load transaction');
        console.error('Load transaction error:', error);
      }
    },
    // Line management
    newRow() {
      if (this.isUpdate) {
        this.showError('Cannot add new lines in update mode');
        return;
      }
      const newLine = {
        tempId: `line_${this.transaction.lines.length}_${Date.now()}`,
        postingReference: 'DUMMY',
        bookingDate: this.transaction.bookingDate,
        amount: '',
        currencyId: null,
        rate: '1',
        drAccountId: null,
        crAccountId: null,
        description: '',
        localAmount: 0,
        source: 'GL',
        isActive: true
      };
      this.transaction.lines.push(newLine);
      this.clearLineErrors(this.transaction.lines.length - 1);
    },
    async deleteItem(item, index) {
      try {
        if (this.transaction.poHeaderId) {
          this.showError('Cannot delete lines from PO transactions');
          return;
        }
        const confirmed = await Object(common["a" /* confirmSwal */])(this.$swal, 'Delete Line', 'Are you sure you want to delete this line?');
        if (!confirmed) return;
        if (item.id) {
          this.isloading = true;
          await this.$axios.delete(`api/gl/line/find/${item.id}`);
        }
        this.transaction.lines.splice(index, 1);
        this.clearLineErrors(index);
        this.reindexLineErrors(index);
      } catch (error) {
        this.showError('Failed to delete line');
        console.error('Delete line error:', error);
      } finally {
        this.isloading = false;
      }
    },
    // Calculations
    currencyChange(item, index) {
      const currency = this.currencyList.find(el => el.id === item.currencyId);
      if (!currency) return;
      item.rate = currency.rate || 1;
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'currencyId');
    },
    amountChange(item, index) {
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'amount');
    },
    rateChange(item, index) {
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'rate');
    },
    calculateLocalAmount(item, index) {
      const amount = parseFloat(Object(common["h" /* replaceAll */])(item.amount || '0', ',', ''));
      const rate = parseFloat(Object(common["h" /* replaceAll */])(item.rate || '1', ',', ''));
      if (!isNaN(amount) && !isNaN(rate)) {
        item.localAmount = amount * rate;
      } else {
        item.localAmount = 0;
      }
    },
    // Validation
    validateField(fieldName) {
      const value = this.transaction[fieldName];
      const errors = [];
      switch (fieldName) {
        case 'bookingDate':
          if (!value) errors.push('Booking date is required');else if (new Date(value) > new Date()) errors.push('Booking date cannot be in the future');
          break;
        case 'reference':
          if (value && value.length > 50) errors.push('Reference must be 50 characters or less');
          break;
      }
      if (errors.length > 0) {
        this.validationErrors.header[fieldName] = errors;
      } else {
        delete this.validationErrors.header[fieldName];
      }
    },
    validateLineField(lineIndex, fieldName) {
      const line = this.transaction.lines[lineIndex];
      const errors = [];
      if (!this.validationErrors.lines[lineIndex]) {
        this.validationErrors.lines[lineIndex] = {};
      }
      switch (fieldName) {
        case 'currencyId':
          if (!line.currencyId) errors.push('Currency is required');
          break;
        case 'amount':
          if (!line.amount) errors.push('Amount is required');else {
            const amount = parseFloat(Object(common["h" /* replaceAll */])(line.amount, ',', ''));
            if (isNaN(amount) || amount <= 0) errors.push('Amount must be greater than 0');
          }
          break;
        case 'rate':
          if (!line.rate) errors.push('Rate is required');else {
            const rate = parseFloat(Object(common["h" /* replaceAll */])(line.rate, ',', ''));
            if (isNaN(rate) || rate <= 0) errors.push('Rate must be greater than 0');
          }
          break;
        case 'drAccountId':
          if (!line.drAccountId) errors.push('Debit account is required');
          break;
        case 'crAccountId':
          if (!line.crAccountId) errors.push('Credit account is required');
          break;
      }
      if (errors.length > 0) {
        this.validationErrors.lines[lineIndex][fieldName] = errors;
      } else {
        delete this.validationErrors.lines[lineIndex][fieldName];
      }
    },
    validateAllFields() {
      // Validate header
      this.validateField('bookingDate');
      this.validateField('reference');

      // Validate lines
      this.transaction.lines.forEach((line, index) => {
        this.validateLineField(index, 'currencyId');
        this.validateLineField(index, 'amount');
        this.validateLineField(index, 'rate');
        this.validateLineField(index, 'drAccountId');
        this.validateLineField(index, 'crAccountId');
      });

      // Check for duplicate debit/credit accounts in same line
      this.transaction.lines.forEach((line, index) => {
        if (line.drAccountId && line.crAccountId && line.drAccountId === line.crAccountId) {
          if (!this.validationErrors.lines[index]) {
            this.validationErrors.lines[index] = {};
          }
          this.validationErrors.lines[index]['drAccountId'] = ['Debit and Credit accounts cannot be the same'];
          this.validationErrors.lines[index]['crAccountId'] = ['Debit and Credit accounts cannot be the same'];
        }
      });
      return !this.hasValidationErrors;
    },
    // Error handling
    getFieldError(fieldName) {
      return this.validationErrors.header[fieldName] || [];
    },
    getLineError(lineIndex, fieldName) {
      var _this$validationError;
      return ((_this$validationError = this.validationErrors.lines[lineIndex]) === null || _this$validationError === void 0 ? void 0 : _this$validationError[fieldName]) || [];
    },
    clearLineErrors(lineIndex) {
      delete this.validationErrors.lines[lineIndex];
    },
    reindexLineErrors(deletedIndex) {
      const newLineErrors = {};
      Object.keys(this.validationErrors.lines).forEach(index => {
        const numIndex = parseInt(index);
        if (numIndex > deletedIndex) {
          newLineErrors[numIndex - 1] = this.validationErrors.lines[index];
        } else if (numIndex < deletedIndex) {
          newLineErrors[numIndex] = this.validationErrors.lines[index];
        }
      });
      this.validationErrors.lines = newLineErrors;
    },
    showError(message) {
      this.validateErrorMessage = message;
      this.sheet = true;
    },
    showSuccess(message) {
      this.successMessage = message;
      this.successSnackbar = true;
    },
    // Form actions
    resetForm() {
      this.transaction = {
        id: null,
        bookingDate: new Date().toISOString().substr(0, 10),
        reference: '',
        description: '',
        vendorId: null,
        status: 'PENDING',
        isActive: true,
        exchangeRate: 1,
        total: 0,
        poHeaderId: null,
        locationId: null,
        user: this.user,
        lines: []
      };
      this.validationErrors = {
        header: {},
        lines: {}
      };
      this.newRow();
    },
    printTransaction() {
      if (!this.transaction.id) {
        this.showError('Cannot print unsaved transaction');
        return;
      }
      // Implement print functionality
      console.log('Printing transaction:', this.transaction.id);
    },
    toggleDialog() {
      this.$emit('close-dialog');
    },
    // Save transaction
    async postTransaction() {
      if (this.isloading) return;
      if (!this.validateAllFields()) {
        this.showError('Please fix validation errors before saving');
        return;
      }
      try {
        this.isloading = true;

        // Prepare data
        const transactionData = {
          ...this.transaction
        };
        transactionData.lines = transactionData.lines.map(line => ({
          ...line,
          amount: parseFloat(Object(common["h" /* replaceAll */])(line.amount.toString(), ',', '')),
          rate: parseFloat(Object(common["h" /* replaceAll */])(line.rate.toString(), ',', '')),
          localAmount: parseFloat(line.localAmount || 0),
          bookingDate: transactionData.bookingDate
        }));
        if (this.isUpdate) {
          await this.updateTransaction(transactionData);
        } else {
          await this.createTransaction(transactionData);
        }
        this.showSuccess('Transaction saved successfully');
        this.$emit('reload');
        this.$emit('close-dialog');
      } catch (error) {
        this.handleSaveError(error);
      } finally {
        this.isloading = false;
      }
    },
    async createTransaction(transactionData) {
      // Clear line IDs for creation
      transactionData.lines.forEach(line => {
        delete line.id;
        delete line.tempId;
      });
      const response = await this.$axios.post('api/gl/createMulti', transactionData);
      return response.data;
    },
    async updateTransaction(transactionData) {
      if (transactionData.lines.length === 1) {
        const line = transactionData.lines[0];
        line.bookingDate = transactionData.bookingDate;
        const response = await this.$axios.put(`api/gl/update/${this.GLId}`, line);
        return response.data;
      } else {
        throw new Error('Multiple lines update not supported');
      }
    },
    handleSaveError(error) {
      var _error$response;
      console.error('Save error:', error);
      if ((_error$response = error.response) !== null && _error$response !== void 0 && _error$response.data) {
        const errorMessage = error.response.data;

        // Handle specific error types
        if (errorMessage.includes('#')) {
          const parts = errorMessage.split('#');
          if (parts.length > 1) {
            const productId = parts[1];
            const lineIndex = this.transaction.lines.findIndex(line => line.productId == productId);
            if (lineIndex >= 0) {
              this.errorLineNumber = lineIndex;
            }
          }
        }
        this.showError(errorMessage);
      } else {
        this.showError('Failed to save transaction. Please try again.');
      }
    },
    // Utility methods
    getFormatNum(value) {
      if (value === null || value === undefined || isNaN(value)) return '0';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(value);
    },
    findCurrency(currencyId) {
      return this.currencyList.find(el => el.id === currencyId);
    },
    // Advanced validation methods
    validateBusinessRules() {
      const errors = [];

      // Check if transaction balances (total debits = total credits)
      const totalDebits = this.transaction.lines.reduce((sum, line) => {
        return sum + (line.localAmount || 0);
      }, 0);
      const totalCredits = this.transaction.lines.reduce((sum, line) => {
        return sum + (line.localAmount || 0);
      }, 0);

      // In a proper GL system, you'd check actual debit vs credit amounts
      // This is simplified for demonstration

      // Check for duplicate account combinations
      const accountCombinations = new Set();
      this.transaction.lines.forEach((line, index) => {
        if (line.drAccountId && line.crAccountId) {
          const combination = `${line.drAccountId}-${line.crAccountId}`;
          if (accountCombinations.has(combination)) {
            errors.push({
              lineIndex: index,
              field: 'drAccountId',
              message: 'Duplicate account combination found'
            });
          }
          accountCombinations.add(combination);
        }
      });

      // Check for circular references (A->B, B->A in same transaction)
      const accountPairs = this.transaction.lines.map(line => line.drAccountId && line.crAccountId ? [line.drAccountId, line.crAccountId].sort().join('-') : null).filter(Boolean);
      const duplicatePairs = accountPairs.filter((pair, index) => accountPairs.indexOf(pair) !== index);
      if (duplicatePairs.length > 0) {
        errors.push({
          lineIndex: -1,
          field: 'general',
          message: 'Circular account references detected'
        });
      }
      return errors;
    },
    validateAccountingPeriod() {
      const bookingDate = new Date(this.transaction.bookingDate);
      const currentDate = new Date();

      // Check if booking date is not too far in the past (configurable)
      const maxPastDays = 365; // 1 year
      const minDate = new Date();
      minDate.setDate(currentDate.getDate() - maxPastDays);
      if (bookingDate < minDate) {
        return 'Booking date is too far in the past';
      }

      // Check if booking date is not in the future
      if (bookingDate > currentDate) {
        return 'Booking date cannot be in the future';
      }
      return null;
    },
    // Enhanced search and filtering
    filterAccountsByType(accountType) {
      return this.accountList.filter(account => account.accountType === accountType);
    },
    getDebitAccounts() {
      // In a real system, you might filter by account types that can be debited
      return this.accountList.filter(account => ['ASSET', 'EXPENSE'].includes(account.accountType));
    },
    getCreditAccounts() {
      // In a real system, you might filter by account types that can be credited
      return this.accountList.filter(account => ['LIABILITY', 'EQUITY', 'REVENUE'].includes(account.accountType));
    },
    // Keyboard shortcuts
    handleKeyboardShortcuts(event) {
      // Ctrl+S to save
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        this.postTransaction();
      }

      // Ctrl+N to add new line
      if (event.ctrlKey && event.key === 'n') {
        event.preventDefault();
        this.newRow();
      }

      // Escape to close
      if (event.key === 'Escape') {
        this.toggleDialog();
      }
    },
    // Data export/import helpers
    exportToCSV() {
      const headers = ['Line#', 'Currency', 'Amount', 'Rate', 'Debit Account', 'Credit Account', 'Description', 'Local Amount'];
      const rows = this.transaction.lines.map((line, index) => {
        var _this$currencyList$fi, _this$accountList$fin, _this$accountList$fin2;
        return [index + 1, ((_this$currencyList$fi = this.currencyList.find(c => c.id === line.currencyId)) === null || _this$currencyList$fi === void 0 ? void 0 : _this$currencyList$fi.code) || '', line.amount, line.rate, ((_this$accountList$fin = this.accountList.find(a => a.id === line.drAccountId)) === null || _this$accountList$fin === void 0 ? void 0 : _this$accountList$fin.accountNumber) || '', ((_this$accountList$fin2 = this.accountList.find(a => a.id === line.crAccountId)) === null || _this$accountList$fin2 === void 0 ? void 0 : _this$accountList$fin2.accountNumber) || '', line.description, line.localAmount];
      });
      const csvContent = [headers, ...rows].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
      const blob = new Blob([csvContent], {
        type: 'text/csv'
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `GL_Transaction_${this.transaction.id || 'New'}.csv`;
      link.click();
      window.URL.revokeObjectURL(url);
    },
    // Auto-save functionality
    setupAutoSave() {
      this.autoSaveInterval = setInterval(() => {
        if (this.transaction.lines.length > 0 && !this.hasValidationErrors && !this.isloading) {
          this.autoSave();
        }
      }, 30000); // Auto-save every 30 seconds
    },

    async autoSave() {
      try {
        // Save as draft
        const draftData = {
          ...this.transaction,
          status: 'DRAFT'
        };

        // Implementation would depend on your backend API
        console.log('Auto-saving draft...', draftData);
      } catch (error) {
        console.error('Auto-save failed:', error);
      }
    }
  },
  mounted() {
    // Add keyboard event listeners
    document.addEventListener('keydown', this.handleKeyboardShortcuts);

    // Setup auto-save if needed
    if (this.$route.query.autosave === 'true') {
      this.setupAutoSave();
    }
  },
  beforeDestroy() {
    // Clean up event listeners
    document.removeEventListener('keydown', this.handleKeyboardShortcuts);

    // Clear auto-save interval
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }
  },
  watch: {
    // Watch for changes in transaction data
    'transaction.bookingDate'(newVal) {
      if (newVal) {
        // Update all line booking dates
        this.transaction.lines.forEach(line => {
          line.bookingDate = newVal;
        });
      }
    },
    // Watch for changes in lines to update totals
    'transaction.lines': {
      handler() {
        // Recalculate totals when lines change
        this.$nextTick(() => {
          // Any additional calculations can go here
        });
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/GLForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var accounting_GLFormvue_type_script_lang_js_ = (GLFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/GLForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(585)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  accounting_GLFormvue_type_script_lang_js_,
  GLFormvue_type_template_id_f09cae02_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "f09cae02",
  "acecee40"
  
)

/* harmony default export */ var GLForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,CustomerList: __webpack_require__(89).default,CancelTicketForm: __webpack_require__(389).default})


/***/ })

};;
//# sourceMappingURL=index.js.map