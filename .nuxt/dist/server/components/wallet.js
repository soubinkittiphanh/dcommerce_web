exports.ids = [112,40];
exports.modules = {

/***/ 396:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(377);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34&








var DialogClassicMessagevue_type_template_id_3accbb34_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5 grey lighten-2"
  }, [_vm._v(" ຂໍ້ຄວາມ ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v(" ຕົກລົງ ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=script&lang=js&
/* harmony default export */ var DialogClassicMessagevue_type_script_lang_js_ = ({
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleDialog() {
      this.$emit('closedialog');
    }
  }
});
// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DialogClassicMessagevue_type_script_lang_js_ = (DialogClassicMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DialogClassicMessagevue_type_script_lang_js_,
  DialogClassicMessagevue_type_template_id_3accbb34_render,
  staticRenderFns,
  false,
  null,
  null,
  "cf974660"
  
)

/* harmony default export */ var DialogClassicMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 773:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(375);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Wallet.vue?vue&type=template&id=131a45a3&











var Walletvue_type_template_id_131a45a3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px",
      "persistent": ""
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
    }
  }, [_c('dialog-classic-message', {
    attrs: {
      "message": _vm.message
    },
    on: {
      "closedialog": function ($event) {
        _vm.message = null;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("\n      ຈັດການ Wallet " + _vm._s(_vm.form_data.user_id || 'null') + " balance:\n      " + _vm._s(_vm.form_data.user_balance))]), _vm._v(" "), _c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
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
      "counter": 10,
      "rules": _vm.rule.idRules,
      "label": "ໄອດີ",
      "required": "",
      "disabled": ""
    },
    model: {
      value: _vm.form_data.user_id,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "user_id", $$v);
      },
      expression: "form_data.user_id"
    }
  }), _vm._v(" "), _c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.loaddata,
      "item-value": item => item.txn_id,
      "item-text": item => item.txn_id + ' - ' + item.txn_name,
      "append-outer-icon": "mdi-map",
      "menu-props": "auto",
      "hide-details": "",
      "label": "ເລືອກທຸລະກຳ",
      "single-line": "",
      "rules": _vm.rule.txnRule
    },
    on: {
      "change": _vm.selectChange
    },
    model: {
      value: _vm.form_data.txn_type,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "txn_type", $$v);
      },
      expression: "form_data.txn_type"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rule.amountRules,
      "label": `ຈຳນວນເງິນ: ` + _vm.formatNum(_vm.form_data.txn_his_amount),
      "required": ""
    },
    model: {
      value: _vm.form_data.txn_his_amount,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "txn_his_amount", $$v);
      },
      expression: "form_data.txn_his_amount"
    }
  })], 1), _vm._v("\n      " + _vm._s(_vm.userId) + "\n      "), _vm._t("default")], 2), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-4",
    attrs: {
      "color": "error"
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v(" ລ້າງຂໍ້ມູນ ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('closewallet');
      }
    }
  }, [_vm._v("\n        ປິດ\n      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": _vm.submitDatas
    }
  }, [_vm._v(" ບັນທຶກ ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Wallet.vue?vue&type=template&id=131a45a3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Wallet.vue?vue&type=script&lang=js&
/* harmony default export */ var Walletvue_type_script_lang_js_ = ({
  props: {
    userId: {
      type: Number,
      requiret: true,
      default: 0
    },
    cusBalance: {
      type: Number,
      requiret: true,
      default: 0
    }
  },
  //   props: ['userId'],
  data() {
    return {
      loaddata: [],
      isloading: false,
      valid: true,
      message: null,
      dialogMessage: false,
      form_data: {
        txn_his_id: 1000,
        txn_id: 1000,
        txn_type: 1004,
        txn_his_amount: 10000,
        user_id: this.userId,
        user_balance: this.cusBalance,
        txn_his_inputter: this.$store.getters.loggedInUser.id,
        txn_his_date: '2021-09-25 00:00:00'
      },
      rule: {
        idRules: [v => !!v || 'ໄອດີ is required'],
        nameRules: [v => !!v || 'ຊຶ່ is required'],
        amountRules: [v => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        passRules: [v => !!v || 'ລະຫັດຜ່ານ is required', v => v.length <= 10 || 'ລະຫັດຜ່ານ ຈຳກັດແຕ່ 10'],
        walletRules: [v => !!v || 'ວົງເງິນ is required'],
        txnRule: [v => !!v || 'ກະລຸນາເລືອກ ລາຍການທຸລະກຳ is required']
      }
    };
  },
  async created() {
    await this.fetchData();
  },
  watch: {
    userId(v) {
      this.form_data.user_id = v;
    },
    message(val) {
      if (val != null) {
        this.dialogMessage = true;
        return;
      }
      this.dialogMessage = false;
    }
  },
  methods: {
    selectChange(v) {
      console.log('SELECT: ' + v);
      this.form_data.txn_id = v;
    },
    async submitDatas() {
      this.isloading = true;
      console.log('submitOut');
      if (!this.$refs.form.validate()) {
        this.isloading = false;
        return;
      }
      console.log('submitIn');
      const balance = this.form_data.user_balance;
      const txnAmount = this.form_data.txn_his_amount;
      const token = this.$store.getters.loggedInUser.token;
      if (this.form_data.txn_id === 1006) {
        if (txnAmount > balance) {
          this.isloading = false;
          this.message = 'ຍອດເງິນໃນບັນຊີ ບໍ່ພຽງພໍ';
          console.log('Biger');
          return;
        }
      }
      // return;
      const urlpath = '/txn_his_';
      const header = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      };
      if (this.isedit) {
        await this.$axios.put(urlpath + 'e', this.form_data, header).then(res => {
          this.message = res.data;
          // this.reset()
        }).catch(er => {
          this.message = 'Error: ' + er;
        });
        this.isloading = false;
      } else {
        await this.$axios.post(urlpath + 'i', this.form_data, header).then(res => {
          this.message = res.data;
          // this.reset()
        }).catch(er => {
          this.message = 'Error: ' + er;
        });
        this.isloading = false;
      }
      this.fetchData();
    },
    async fetchData() {
      await this.$axios.get('txn_f').then(res => {
        this.loaddata = res.data.map(el => {
          console.log(el.txn_id);
          return {
            txn_id: el.txn_id,
            txn_type: el.txn_type,
            txn_name: el.txn_name,
            txn_amount: el.txn_amount,
            txn_user_id: el.txn_user_id,
            txn_inputter: el.txn_inputter,
            txn_date: el.txn_date,
            function: el.txn_id
          };
        });
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    formatNum(v) {
      return new Intl.NumberFormat().format(v);
    }
  }
});
// CONCATENATED MODULE: ./components/Wallet.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Walletvue_type_script_lang_js_ = (Walletvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/Wallet.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Walletvue_type_script_lang_js_,
  Walletvue_type_template_id_131a45a3_render,
  staticRenderFns,
  false,
  null,
  null,
  "0d74638c"
  
)

/* harmony default export */ var Wallet = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(396).default,LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=wallet.js.map