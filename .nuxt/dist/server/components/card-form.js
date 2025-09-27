exports.ids = [36];
exports.modules = {

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(393);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(348);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(392);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/cardForm.vue?vue&type=template&id=0f4f351c&














var cardFormvue_type_template_id_0f4f351c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isSubmitting,
      callback: function ($$v) {
        _vm.isSubmitting = $$v;
      },
      expression: "isSubmitting"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VChip["a" /* default */], {
    staticClass: "ma-2",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n                " + _vm._s(_vm.productName) + "\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
    ref: "myform",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.locationList,
      "label": "Source location*"
    },
    model: {
      value: _vm.srcLocationId,
      callback: function ($$v) {
        _vm.srcLocationId = $$v;
      },
      expression: "srcLocationId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຈຳນວນ",
      "rules": _vm.numberRule,
      "hide-details": "auto"
    },
    model: {
      value: _vm.stockQty,
      callback: function ($$v) {
        _vm.stockQty = $$v;
      },
      expression: "stockQty"
    }
  }), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency*"
    },
    model: {
      value: _vm.currencyId,
      callback: function ($$v) {
        _vm.currencyId = $$v;
      },
      expression: "currencyId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຕົ້ນທຶນທັງຫໝົດ",
      "rules": _vm.numberRule,
      "hide-details": "auto"
    },
    model: {
      value: _vm.stockCost,
      callback: function ($$v) {
        _vm.stockCost = $$v;
      },
      expression: "stockCost"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "warning",
    attrs: {
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
      "rounded": ""
    },
    on: {
      "click": _vm.stockSubmit
    }
  }, [_vm._v("\n                ບັນທຶກ\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/card/cardForm.vue?vue&type=template&id=0f4f351c&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/cardForm.vue?vue&type=script&lang=js&


/* harmony default export */ var cardFormvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: Number,
      default: 0
    },
    productId: {
      type: Number,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    cost: {
      type: Number,
      default: 0
    }
    // product:{
    //     type: Object,
    //     default: null,
    // }
  },

  data() {
    return {
      stockQty: 1,
      stockCost: this.cost,
      isSubmitting: false,
      locationList: [],
      srcLocationId: 1,
      currencyId: 1,
      exchangeRate: 1
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllCurrency', 'findSelectedTerminal', 'findAllTerminal']),
    numberRule() {
      return [v => !!v || 'ກະລຸນາ ໃສ່ຈຳນວນ ', v => /^[0-9]+$/.test(v) || 'ໃສ່ໄດ້ສະເພາະ ຕົວເລກ'];
    },
    user() {
      return this.$auth.user || '';
    },
    currencyExchangeRate() {
      return this.findAllCurrency.find(el => el.id == this.currencyId)["rate"];
    }
  },
  created() {
    console.log(`Location in terminal ${this.findSelectedTerminal}`);
    const locationIdFromCurrentTerminal = this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)['locationId'];
    this.srcLocationId = locationIdFromCurrentTerminal;
    this.loadLocation();
    this.loadProduct();
  },
  methods: {
    async loadLocation(item) {
      this.isloading = true;
      await this.$axios.get(`api/location/find`).then(res => {
        this.locationList = res.data.map(el => el);
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Operation fail ' + er.Error);
      });
      this.isloading = false;
    },
    async loadProduct() {
      this.isSubmitting = true;
      await this.$axios.get(`api/product/find/${this.id}`).then(res => {
        // this.locationList = res.data.map(el => el)
        if (res.data.costCurrency) {
          console.log(`Cost info available`);
          this.currencyId = res.data.costCurrency.id;
        } else {
          console.log(`Cost info not available`);
        }
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Operation fail ' + er.Error);
      });
      this.isSubmitting = false;
    },
    async stockSubmit() {
      if (this.$refs.myform.validate() && !this.isSubmitting) {
        this.isSubmitting = true;
        const stockData = {
          inputter: this.user.id,
          product_id: this.productId,
          stockCardQty: this.stockQty,
          totalCost: this.stockCost,
          productId: this.id,
          srcLocationId: this.srcLocationId,
          currencyId: this.currencyId,
          exchangeRate: this.currencyExchangeRate
        };
        console.log("Pre fly ", stockData);
        // return
        await this.$axios.post('/api/card/bulkCreate', stockData).then(res => {
          console.log(res.data);
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          // this.fetchData() // UPDATE PRODUCT UI
          this.$emit('reload');
          this.$emit('close-dialog');
        }).catch(error => {
          console.log(error);
          Object(common["j" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/card/cardForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_cardFormvue_type_script_lang_js_ = (cardFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/card/cardForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_cardFormvue_type_script_lang_js_,
  cardFormvue_type_template_id_0f4f351c_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9d562920"
  
)

/* harmony default export */ var cardForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=card-form.js.map