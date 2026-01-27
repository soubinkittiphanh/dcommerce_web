exports.ids = [50];
exports.modules = {

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(456);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },
  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },
    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }
  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },
    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },
    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }
  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', {
        ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },
    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }
  }
}));

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(482);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(436);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(411);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(433);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
var VRadio = __webpack_require__(432);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
var VRadioGroup = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(435);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(442);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CurrencyForm.vue?vue&type=template&id=44c7a0dd

















var CurrencyFormvue_type_template_id_44c7a0dd_render = function render() {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["d" /* VCardTitle */], {
    staticClass: "pb-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "size": "small",
      "label": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": "",
      "size": "small"
    }
  }, [_vm._v("mdi-currency-usd")]), _vm._v("\n      " + _vm._s(_vm.isCreate ? 'Add Currency' : 'Edit Currency') + "\n    ")], 1)], 1), _vm._ssrNode(" "), _c(VCard["c" /* VCardText */], {
    staticClass: "pt-2"
  }, [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": !_vm.isCreate,
      "label": "* Code",
      "variant": "outlined",
      "density": "compact",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.code,
      callback: function ($$v) {
        _vm.$set(_vm.form, "code", $$v);
      },
      expression: "form.code"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* Name",
      "variant": "outlined",
      "density": "compact",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1)], 1), _vm._v(" "), _vm.localCurrency ? _c('div', {
    staticClass: "mb-3"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "size": "small",
      "color": "info",
      "variant": "tonal"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": "",
      "size": "small"
    }
  }, [_vm._v("mdi-home")]), _vm._v("\n          Current Local: " + _vm._s(_vm.localCurrency.code) + "\n        ")], 1)], 1) : _vm._e(), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "Active",
      "density": "compact",
      "hide-details": ""
    },
    model: {
      value: _vm.form.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isActive", $$v);
      },
      expression: "form.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_c(VCheckbox["a" /* default */], {
    attrs: {
      "disabled": _vm.hasExistingLocalCurrency && !_vm.form.isLocalCCY,
      "density": "compact",
      "hide-details": ""
    },
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        var _vm$localCurrency;
        return [_c('span', {
          staticClass: "text-body-2"
        }, [_vm._v("\n                Set as Local Currency\n                "), _c(VTooltip["a" /* default */], {
          attrs: {
            "activator": "parent",
            "location": "top"
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.hasExistingLocalCurrency && !_vm.form.isLocalCCY ? `${(_vm$localCurrency = _vm.localCurrency) === null || _vm$localCurrency === void 0 ? void 0 : _vm$localCurrency.name} is currently local` : 'Make this the base currency') + "\n                ")])], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.isLocalCCY,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isLocalCCY", $$v);
      },
      expression: "form.isLocalCCY"
    }
  })], 1)], 1), _vm._v(" "), _c(VRadioGroup["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "inline": "",
      "density": "compact"
    },
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        return [_c('span', {
          staticClass: "text-body-2 font-weight-medium"
        }, [_vm._v("Rate Direction:")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.exchangeDirection,
      callback: function ($$v) {
        _vm.exchangeDirection = $$v;
      },
      expression: "exchangeDirection"
    }
  }, [_vm._v(" "), _c(VRadio["a" /* default */], {
    attrs: {
      "label": `${_vm.currentLocalCurrency} → ${_vm.form.code || 'Foreign'}`,
      "value": "local_to_foreign",
      "density": "compact"
    }
  }), _vm._v(" "), _c(VRadio["a" /* default */], {
    attrs: {
      "label": `${_vm.form.code || 'Foreign'} → ${_vm.currentLocalCurrency}`,
      "value": "foreign_to_local",
      "density": "compact"
    }
  })], 1), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": _vm.rateLabel,
      "variant": "outlined",
      "density": "compact",
      "type": "number",
      "step": "any",
      "rules": _vm.rateRules,
      "hint": _vm.form.rate && _vm.form.code ? _vm.conversionPreview : '',
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.rate,
      callback: function ($$v) {
        _vm.$set(_vm.form, "rate", $$v);
      },
      expression: "form.rate"
    }
  })], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* VCardActions */], {
    staticClass: "pt-0"
  }, [_c('small', {
    staticClass: "text-caption text-grey"
  }, [_vm._v("* Required fields")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n      Cancel\n    ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "variant": "flat",
      "loading": _vm.isloading
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n      Save\n    ")])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CurrencyForm.vue?vue&type=template&id=44c7a0dd

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CurrencyForm.vue?vue&type=script&lang=js


/* harmony default export */ var CurrencyFormvue_type_script_lang_js = ({
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true
    },
    recordId: {
      type: Number,
      require: false,
      default: 0
    }
  },
  data() {
    return {
      form: {
        code: '',
        name: '',
        rate: 1,
        isActive: true,
        isLocalCCY: false,
        exchangeDirection: 'local_to_foreign'
      },
      exchangeDirection: 'local_to_foreign',
      localCurrency: null,
      isloading: false,
      nameRules: [value => !!value || 'Required', value => value && value.length <= 20 || 'Max 20 characters'],
      rateRules: [value => !!value || 'Required', value => value && parseFloat(value) > 0 || 'Must be positive']
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['currentSelectedCustomer', 'cartOfProduct', 'findAllCurrency']),
    currentLocalCurrency() {
      var _this$localCurrency;
      if (this.form.isLocalCCY && this.form.code) {
        return this.form.code;
      }
      return ((_this$localCurrency = this.localCurrency) === null || _this$localCurrency === void 0 ? void 0 : _this$localCurrency.code) || 'LAK';
    },
    hasExistingLocalCurrency() {
      return this.localCurrency && this.localCurrency.id;
    },
    rateLabel() {
      if (this.exchangeDirection === 'local_to_foreign') {
        return `* Rate (1 ${this.currentLocalCurrency} = ? ${this.form.code || 'XXX'})`;
      } else {
        return `* Rate (1 ${this.form.code || 'XXX'} = ? ${this.currentLocalCurrency})`;
      }
    },
    conversionPreview() {
      if (!this.form.rate || !this.form.code) return '';
      const rate = parseFloat(this.form.rate);
      if (this.exchangeDirection === 'local_to_foreign') {
        return `1 ${this.currentLocalCurrency} = ${rate.toFixed(4)} ${this.form.code} | 1 ${this.form.code} = ${(1 / rate).toFixed(4)} ${this.currentLocalCurrency}`;
      } else {
        return `1 ${this.form.code} = ${rate.toFixed(4)} ${this.currentLocalCurrency} | 1 ${this.currentLocalCurrency} = ${(1 / rate).toFixed(6)} ${this.form.code}`;
      }
    }
  },
  watch: {
    exchangeDirection(newVal) {
      this.form.exchangeDirection = newVal;
    }
  },
  async created() {
    await this.loadLocalCurrency();
    await this.loadCurrency();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['initiateData', 'setSelectedTerminal', 'setSelectedLocation']),
    initData() {
      this.initiateData(this.$axios);
    },
    async loadLocalCurrency() {
      try {
        const response = await this.$axios.get('api/currency/findLocalCurrency');
        this.localCurrency = response.data;
      } catch (error) {
        console.log('No local currency found:', error);
        this.localCurrency = null;
      }
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        this.isloading = true;
        const formData = {
          ...this.form,
          exchangeDirection: this.exchangeDirection
        };
        let api = this.isCreate ? 'api/currency/create' : `api/currency/update/${this.recordId}`;
        try {
          if (this.isCreate) {
            await this.$axios.post(api, formData);
          } else {
            await this.$axios.put(api, formData);
          }
          this.refreshData();
          Object(common["l" /* swalSuccess */])(this.$swal, 'Success', 'Currency saved successfully');
        } catch (error) {
          var _error$response, _error$response$data, _error$response$data$;
          console.log('Error: ', error);
          if ((_error$response = error.response) !== null && _error$response !== void 0 && (_error$response$data = _error$response.data) !== null && _error$response$data !== void 0 && (_error$response$data$ = _error$response$data.error) !== null && _error$response$data$ !== void 0 && _error$response$data$.includes('local currency already exists')) {
            Object(common["k" /* swalError2 */])(this.$swal, 'Error', error.response.data.error);
          } else {
            Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'Failed to save currency');
          }
        }
        this.isloading = false;
      }
    },
    async loadCurrency() {
      if (this.recordId && !this.isCreate) {
        try {
          const response = await this.$axios.get(`api/currency/find/${this.recordId}`);
          const data = response.data;
          this.form.name = data.name;
          this.form.code = data.code;
          this.form.rate = data.rate;
          this.form.isActive = data.isActive;
          this.form.isLocalCCY = data.isLocalCCY;
          this.exchangeDirection = data.exchangeDirection || 'local_to_foreign';
          this.form.exchangeDirection = this.exchangeDirection;
        } catch (error) {
          console.log('Cannot fetch data:', error);
        }
      }
    },
    refreshData() {
      this.initData();
      this.$emit('reload-data');
    }
  }
});
// CONCATENATED MODULE: ./components/CurrencyForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CurrencyFormvue_type_script_lang_js = (CurrencyFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CurrencyForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CurrencyFormvue_type_script_lang_js,
  CurrencyFormvue_type_template_id_44c7a0dd_render,
  staticRenderFns,
  false,
  null,
  null,
  "0193ac70"
  
)

/* harmony default export */ var CurrencyForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default})


/***/ })

};;
//# sourceMappingURL=currency-form.js.map