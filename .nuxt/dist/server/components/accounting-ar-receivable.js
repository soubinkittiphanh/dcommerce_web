exports.ids = [7];
exports.modules = {

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

/***/ 770:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(374);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ArReceivable.vue?vue&type=template&id=7da3b898&















var ArReceivablevue_type_template_id_7da3b898_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    attrs: {
      "justify": "center"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        props
      }) {
        return [_c(VBtn["a" /* default */], _vm._b({
          attrs: {
            "color": "primary"
          }
        }, 'v-btn', props, false), [_vm._v("\n            Open Dialog\n        ")])];
      }
    }])
  }, [_vm._v(" "), _c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_c(VChip["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n                ລາຍຮັບ " + _vm._s(_vm.today) + "\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເລກເອກະສານອ້າງອີງ*",
      "required": ""
    },
    model: {
      value: _vm.form.header.receiveNumber,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "receiveNumber", $$v);
      },
      expression: "form.header.receiveNumber"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີ*",
      "hint": "ເດຶອນ/ວັນ/ປີ 12/31/2023"
    },
    model: {
      value: _vm.form.header.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "bookingDate", $$v);
      },
      expression: "form.header.bookingDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຊຶ ບໍ່ລິສັດ ຫລື ຜູ້ຮັບ ການຊຳລະ*",
      "hint": "ຊື່ບຸກຄົນ,ບໍລິສັດ ຫລື ຜູ້ຮັບການຊຳລະ",
      "persistent-hint": "",
      "required": ""
    },
    model: {
      value: _vm.form.header.payee,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "payee", $$v);
      },
      expression: "form.header.payee"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເນື້ອໃນລາຍການ*",
      "required": ""
    },
    model: {
      value: _vm.form.header.notes,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "notes", $$v);
      },
      expression: "form.header.notes"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ຈຳນວນເງິນ*",
      "required": ""
    },
    model: {
      value: _vm.form.header.totalAmount,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "totalAmount", $$v);
      },
      expression: "form.header.totalAmount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.currencyList,
      "label": "ສະກຸນເງິນ*",
      "item-text": "code",
      "item-value": "id"
    },
    on: {
      "input": _vm.currencyChange
    },
    model: {
      value: _vm.form.header.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "currencyId", $$v);
      },
      expression: "form.header.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ອັດຕາແລກປ່ຽນ*",
      "required": ""
    },
    model: {
      value: _vm.form.header.rate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "rate", $$v);
      },
      expression: "form.header.rate"
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
      "label": "ປະເພດການຊຳລະ *"
    },
    model: {
      value: _vm.form.header.paymentId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "paymentId", $$v);
      },
      expression: "form.header.paymentId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "desc",
      "item-value": "id",
      "items": _vm.account,
      "label": "ບັນຊີແຍກປະເພດ DR ACCOUNT*"
    },
    model: {
      value: _vm.form.header.drAccountId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "drAccountId", $$v);
      },
      expression: "form.header.drAccountId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "desc",
      "item-value": "id",
      "items": _vm.account,
      "label": "ບັນຊີແຍກປະເພດ CR ACCOUNT*"
    },
    model: {
      value: _vm.form.header.crAccountId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "crAccountId", $$v);
      },
      expression: "form.header.crAccountId"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
      "click": _vm.submitData
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue?vue&type=template&id=7da3b898&

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(397);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(137);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ArReceivable.vue?vue&type=script&lang=js&



/* harmony default export */ var ArReceivablevue_type_script_lang_js_ = ({
  props: {
    receiveHeaderId: {
      type: Number,
      default: ''
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    commaThousand: comma_thousand["a" /* default */]
  },
  data() {
    return {
      account: [],
      drAccount: "",
      crAccount: "",
      amount: '',
      isloading: false,
      bookingDate: '',
      paymentDescription: '',
      postingReference: '',
      paymentType: ['Cash', 'Check', 'Credit Card', 'Bank transfer'],
      paymentList: [],
      form: {
        header: {
          bookingDate: '',
          receiveNumber: 'DEFAULT',
          payee: 'ຮ້ານຄ້າທົ່ວໄປ',
          paymentId: 1,
          currencyId: 1,
          rate: 1,
          totalAmount: '1,000',
          notes: '',
          // locking_session_id: 'abc123',
          update_user: 1,
          drAccountId: 1,
          crAccountId: 13,
          isActive: true
        },
        line: {}
      }
    };
  },
  mounted() {
    this.loadAccount();
    this.loadPayment();
    const today = new Date().toISOString().substr(0, 10);
    // const today = new Date().toISOString().substr(0, 10);
    // const today = new Date().toLocaleDateString();
    this.bookingDate = today;
    this.form.header.bookingDate = today;
    this.form.header.currencyId = this.currencyList[0]['id'];
    if (this.isEdit) {
      console.log("Load payment header");
      this.loadReceiveById();
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
    today() {
      const today = new Date().toLocaleDateString();
      console.log(today);
      return today;
    },
    currencyList() {
      return this.findAllCurrency;
    }
  },
  methods: {
    currencyChange() {
      const currency = this.currencyList.find(el => el['id'] == this.form.header.currencyId);
      if (!currency) return;
      this.form.header.rate = currency['rate'];
    },
    async loadPayment() {
      this.isloading = true;
      this.paymentList = [];
      await this.$axios.get('/api/paymentMethod/find').then(res => {
        this.paymentList = res.data;
        this.form.header.paymentId = this.paymentList[0]['id'];
      }).catch(er => {
        Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", er);
      });
      this.isloading = false;
    },
    async loadAccount() {
      this.isloading = true;
      const response = await this.$axios.get('/api/account/find');
      response.data.forEach(element => {
        this.account.push({
          id: element["id"],
          desc: element["accountName"] + " - " + element["accountNumber"]
        });
      });
      this.isloading = false;
    },
    async loadReceiveById() {
      this.isloading = true;
      await this.$axios.get(`/api/finanicial/ar/header/find/${this.receiveHeaderId}`).then(response => {
        this.form.header = response.data;
        this.form.header.bookingDate = response.data['bookingDate'].split('T')[0];
        this.form.header.totalAmount = this.getFormatNum(this.form.header.totalAmount);
      }).catch(error => {
        Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
      });
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val);
    },
    async submitData() {
      if (this.isloading) return;
      this.isloading = true;
      if (this.isEdit) {
        await this.$axios.put(`/api/finanicial/ar/header/update/${this.receiveHeaderId}`, this.form.header).then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.$emit('reload');
          this.$emit('close-dialog');
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
      } else {
        await this.$axios.post("/api/finanicial/ar/header/create", this.form.header).then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.$emit('reload');
          this.$emit('close-dialog');
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data.errors[0].msg);
        });
      }
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue?vue&type=script&lang=js&
 /* harmony default export */ var accounting_ArReceivablevue_type_script_lang_js_ = (ArReceivablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  accounting_ArReceivablevue_type_script_lang_js_,
  ArReceivablevue_type_template_id_7da3b898_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "83a9ccb8"
  
)

/* harmony default export */ var ArReceivable = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=accounting-ar-receivable.js.map