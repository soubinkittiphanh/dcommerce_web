exports.ids = [105];
exports.modules = {

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Settlement.vue?vue&type=template&id=6cc42d55&











var Settlementvue_type_template_id_6cc42d55_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("\n      ຊຳລະບິນ " + _vm._s(this.orderId || 'null') + " ຍອດ:\n      " + _vm._s(_vm.formatNum(this.amount)) + " ")]), _vm._v(" "), _c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
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
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "payment_code",
      "item-value": "id",
      "items": _vm.findAllPayment,
      "label": "ການຊຳລະ*"
    },
    model: {
      value: _vm.paymentId,
      callback: function ($$v) {
        _vm.paymentId = $$v;
      },
      expression: "paymentId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rule.amountRules,
      "label": `ຈຳນວນເງິນ: ` + _vm.formatNum(_vm.paymentAmount),
      "required": ""
    },
    model: {
      value: _vm.paymentAmount,
      callback: function ($$v) {
        _vm.paymentAmount = $$v;
      },
      expression: "paymentAmount"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.numberRule,
      "label": `ຄ່າທຳນຽມ COD: ` + _vm.formatNum(_vm.codFee),
      "required": ""
    },
    model: {
      value: _vm.codFee,
      callback: function ($$v) {
        _vm.codFee = _vm._n($$v);
      },
      expression: "codFee"
    }
  })], 1), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "warning",
    attrs: {
      "rounded": "",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        ປິດ\n      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "rounded": "",
      "text": ""
    },
    on: {
      "click": _vm.submitDatas
    }
  }, [_vm._v(" ບັນທຶກ ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Settlement.vue?vue&type=template&id=6cc42d55&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Settlement.vue?vue&type=script&lang=js&


/* harmony default export */ var Settlementvue_type_script_lang_js_ = ({
  //   There are several types available for Vue.js props:

  // 1. `String`: Expects a string value.
  // 2. `Number`: Expects a numeric value.
  // 3. `Boolean`: Expects a boolean value.
  // 4. `Array`: Expects an array value.
  // 5. `Object`: Expects an object value.
  // 6. `Function`: Expects a function value.
  // 7. `Symbol`: Expects a symbol value.
  // 8. `Date`: Expects a date value.
  // 9. `RegExp`: Expects a regular expression value.

  // You can also create custom types by passing a validator function to the `validator` property of the prop object.
  props: {
    amount: {
      type: Number,
      require: true,
      default: 0
    },
    orderId: {
      type: Number,
      require: true
    },
    dyCusId: {
      type: Number,
      require: true
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllPayment', 'findAllCurrency']),
    user() {
      return this.$auth.user || '';
    },
    numberRule() {
      return [value => value !== undefined && value !== null && value !== '' || 'Field is required', value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'];
    }
  },
  data() {
    return {
      loaddata: [],
      isloading: false,
      valid: true,
      message: null,
      dialogMessage: false,
      paymentAmount: this.amount,
      paymentId: 1,
      codFee: 0,
      rule: {
        idRules: [v => !!v || 'ໄອດີ is required'],
        amountRules: [v => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        amountCODRules: [v => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        txnRule: [v => !!v || 'ກະລຸນາເລືອກ ລາຍການທຸລະກຳ is required']
      }
    };
  },
  async created() {
    this.codFee = +0;
  },
  watch: {
    amount(newAmount) {
      console.log("New amount: ", newAmount);
      this.paymentAmount = newAmount;
    }
  },
  methods: {
    async submitDatas() {
      this.isloading = true;
      console.log("AMOUNT: ", this.amount);
      if (!this.$refs.form.validate()) {
        console.log("From validate is verified");
        this.isloading = false;
        return;
      }
      //  if (1===1) return ;
      const paymentPayload = {
        paymentId: this.paymentId,
        codFee: this.codFee,
        customerId: this.dyCusId,
        amount: this.paymentAmount
      };
      const urlpath = `api/sale/settle/${this.orderId}`;
      console.log(`PAYLOAD: ${JSON.stringify(paymentPayload)}`);
      await this.$axios.put(urlpath, paymentPayload).then(res => {
        console.log("this.message", res.status);
        if (res.status == 200) {
          // ******* reload data if transaction completed ********
          console.log("RELOAD DATA TRIGGER");
          this.refreshData(true);
          return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
        }
        return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
      }).catch(er => {
        return Object(common["j" /* swalError2 */])(this.$swal, "Error", `ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ${er}`);
      });
      this.isloading = false;

      // this.fetchData()  PAYLOAD: {"paymentId":1,"codFee":10000,"customerId":214,"amount":14000} //405
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
    },
    refreshData(v) {
      this.$emit('reload', v);
    }
  }
});
// CONCATENATED MODULE: ./components/Settlement.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Settlementvue_type_script_lang_js_ = (Settlementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/Settlement.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Settlementvue_type_script_lang_js_,
  Settlementvue_type_template_id_6cc42d55_render,
  staticRenderFns,
  false,
  null,
  null,
  "74c16988"
  
)

/* harmony default export */ var Settlement = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=settlement.js.map