exports.ids = [171,46,134];
exports.modules = {

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(421);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/customer/index.vue?vue&type=template&id=523df5d4&scoped=true&

















var customervue_type_template_id_523df5d4_scoped_true_render = function render() {
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
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
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
  })], 1), _vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.form_data.cus_id) + "\nbalance:  " + _vm._s(_vm.form_data.cus_balance) + "\n  ")), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px"
    },
    model: {
      value: _vm.wallet,
      callback: function ($$v) {
        _vm.wallet = $$v;
      },
      expression: "wallet"
    }
  }, [_c('wallet', {
    attrs: {
      "user-id": _vm.form_data.cus_id,
      "cus-balance": _vm.form_data.cus_balance
    },
    on: {
      "closewallet": function ($event) {
        _vm.wallet = false;
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.dialogForm,
      callback: function ($$v) {
        _vm.dialogForm = $$v;
      },
      expression: "dialogForm"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
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
      "label": "ໄອດີລູກຄ້າ",
      "required": "",
      "disabled": ""
    },
    model: {
      value: _vm.form_data.cus_id,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "cus_id", $$v);
      },
      expression: "form_data.cus_id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rule.nameRules,
      "label": "ຊື່ລູກຄ້າ",
      "required": ""
    },
    model: {
      value: _vm.form_data.cus_name,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "cus_name", $$v);
      },
      expression: "form_data.cus_name"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rule.passRules,
      "label": "ລະຫັດຜ່ານ",
      "required": "",
      "type": !_vm.isedit ? '' : 'password'
    },
    model: {
      value: _vm.form_data.cus_pass,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "cus_pass", $$v);
      },
      expression: "form_data.cus_pass"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rule.nameRules,
      "label": "ເບີໂທ",
      "required": ""
    },
    model: {
      value: _vm.form_data.cus_tel,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "cus_tel", _vm._n($$v));
      },
      expression: "form_data.cus_tel"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rule.nameRules,
      "label": "ອີເມວ",
      "required": ""
    },
    model: {
      value: _vm.form_data.cus_email,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "cus_email", _vm._n($$v));
      },
      expression: "form_data.cus_email"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    attrs: {
      "label": `ເປິດໃຊ້ງານທັນທີ`
    },
    model: {
      value: _vm.form_data.cus_active,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "cus_active", $$v);
      },
      expression: "form_data.cus_active"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
        _vm.dialogForm = false;
      }
    }
  }, [_vm._v("\n          ປິດ\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": _vm.submitDatas
    }
  }, [_vm._v("\n          ບັນທຶກ\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VTextField["a" /* default */], {
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
  })], 1), _vm._v(" "), _vm.loaddata ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.loaddata
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VToolbar["a" /* default */], {
          attrs: {
            "flat": ""
          }
        }, [_c(components_VToolbar["a" /* VToolbarTitle */], [_vm._v("ລູກຄ້າ: " + _vm._s(_vm.loaddata.length))]), _vm._v(" "), _c(VDivider["a" /* default */], {
          staticClass: "mx-4",
          attrs: {
            "inset": "",
            "vertical": ""
          }
        }), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "mb-2",
          attrs: {
            "color": "primary",
            "dark": ""
          },
          on: {
            "click": function ($event) {
              _vm.dialogForm = true;
              _vm.isedit = false;
            }
          }
        }, [_vm._v("\n            ສ້າງໃຫມ່\n          ")])], 1)];
      },
      proxy: true
    }, {
      key: `item.cus_active`,
      fn: function ({
        item
      }) {
        return [_c(VCheckbox["a" /* default */], {
          attrs: {
            "disabled": ""
          },
          model: {
            value: item.cus_active,
            callback: function ($$v) {
              _vm.$set(item, "cus_active", $$v);
            },
            expression: "item.cus_active"
          }
        })];
      }
    }, {
      key: `item.function`,
      fn: function ({
        item
      }) {
        return [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "small": ""
          },
          on: {
            "click": function ($event) {
              _vm.editItem(item);
              _vm.isedit = true;
            }
          }
        }, [_vm._v("\n          mdi-pencil\n        ")])];
      }
    }, {
      key: `item.wallet`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "blue darken-1",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.walletAction(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-wallet"
        })])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/customer/index.vue?vue&type=template&id=523df5d4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/customer/index.vue?vue&type=script&lang=js&
/* harmony default export */ var customervue_type_script_lang_js_ = ({
  middleware: 'auths',
  data() {
    return {
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      dialogForm: false,
      message: '',
      valid: true,
      name: '',
      search: '',
      form_data: {
        cus_id: '1XXX',
        cus_pass: 'pasw1ss1',
        cus_name: 'cmeedit',
        cus_tel: '99884dd',
        cus_email: '@email.com',
        cus_balance: 0,
        cus_active: false
      },
      loaddata: [],
      headers: [{
        text: 'ໄອດີ',
        align: 'center',
        value: 'cus_id'
      }, {
        text: 'ຊື່ສະມາຊິກ',
        align: 'center',
        value: 'cus_name'
      }, {
        text: 'ເບີໂທ',
        align: 'center',
        value: 'cus_tel'
      }, {
        text: 'email',
        align: 'center',
        value: 'cus_email'
      }, {
        text: 'ຍອດເງິນ',
        align: 'center',
        value: 'cus_balance'
      }, {
        text: 'active',
        align: 'end',
        value: 'cus_active',
        sortable: false
      }, {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'function',
        sortable: false
      }, {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'wallet',
        sortable: false
      }],
      rule: {
        idRules: [v => !!v || 'ໄອດີ is required'],
        nameRules: [v => !!v || 'ຊຶ່ is required'],
        passRules: [v => !!v || 'ລະຫັດຜ່ານ is required', v => v.length <= 10 || 'ລະຫັດຜ່ານ ຈຳກັດແຕ່ 10'],
        walletRules: [v => !!v || 'ວົງເງິນ is required']
      }
    };
  },
  async created() {
    await this.fetchData();
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialog = true;
        return;
      }
      this.dialog = false;
    },
    isedit(v) {
      if (!v) this.form_data.cus_id = '1XXX';
    }
  },
  methods: {
    walletAction(v) {
      console.log('Wallet: ' + v.cus_id);
      console.log('Bal: ' + v.cus_balance);
      this.form_data.cus_id = v.cus_id;
      this.form_data.cus_balance = parseInt(v.cus_balance.replaceAll(",", ""));
      console.log("Int: " + parseInt(v.cus_balance.replaceAll(",", "")).toString());
    },
    editItem(val) {
      console.log(val.cus_id);
      this.form_data = this.loaddata.find(el => el.cus_id === val.cus_id);
      this.dialogForm = true;
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
    async submitDatas() {
      this.isloading = true;
      console.log('submitOut');
      if (!this.$refs.form.validate()) {
        this.isloading = false;
        return;
      }
      console.log('submitIn');
      const urlpath = '/customer_';
      if (this.isedit) {
        await this.$axios.put(urlpath + 'e', this.form_data).then(res => {
          this.message = res.data;
          // this.reset()
        }).catch(er => {
          this.message = 'Error: ' + er;
        });
        this.isloading = false;
      } else {
        await this.$axios.post(urlpath + 'i', this.form_data).then(res => {
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
      this.isloading = true;
      await this.$axios.get('customer_f').then(res => {
        this.loaddata = res.data.map(el => {
          console.log(el.cus_id);
          return {
            cus_id: el.cus_id,
            cus_pass: el.cus_pass,
            cus_name: el.cus_name,
            cus_tel: el.cus_tel,
            cus_email: el.cus_email,
            cus_balance: Intl.NumberFormat().format(el.CREDIT - (el.ORDER_DEBIT + el.DEBIT)),
            cus_active: el.cus_active,
            function: el.cus_id,
            wallet: el.cus_id
          };
        });
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/customer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_customervue_type_script_lang_js_ = (customervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/customer/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(911)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_customervue_type_script_lang_js_,
  customervue_type_template_id_523df5d4_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "523df5d4",
  "0e685cbc"
  
)

/* harmony default export */ var customer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(412).default,Wallet: __webpack_require__(845).default,LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 398:
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

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(397);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
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

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(912);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0a9fef00", content, true, context)
};

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

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
installComponents(component, {DialogClassicMessage: __webpack_require__(412).default,LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_523df5d4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(731);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_523df5d4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_523df5d4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_523df5d4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_523df5d4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grey[data-v-523df5d4],.text-h5[data-v-523df5d4]{font-family:\"Noto Sans Lao\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map