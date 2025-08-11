exports.ids = [84];
exports.modules = {

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(391);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 391:
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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
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

/***/ 460:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderForm.vue?vue&type=template&id=5a3fa7ee&

















var OrderFormvue_type_template_id_5a3fa7ee_render = function render() {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
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
  }, [_vm._v("mdi-label")]), _vm._v("\n                ຈັດການອໍເດີ\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "justify": "center",
      "align": "center"
    }
  }, [_c(VDivider["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "mx-2"
  }, [_c('h3', [_vm._v("\n                            ຂໍ້ມູນລູກຄ້າ\n                        ")])]), _vm._v(" "), _c(VDivider["a" /* default */])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ເບີໂທລູກຄ້າ"
    },
    on: {
      "input": _vm.clientTelephoneTypingHandler
    },
    model: {
      value: _vm.form.client.telephone,
      callback: function ($$v) {
        _vm.$set(_vm.form.client, "telephone", $$v);
      },
      expression: "form.client.telephone"
    }
  }), _vm._v(" "), !_vm.isSenderTyping ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, _vm._l(_vm.clientOption, function (client) {
    return _c(VCard["a" /* default */], {
      key: client['id']
    }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
      attrs: {
        "cols": "8"
      }
    }, [_vm._v("\n                                                " + _vm._s(client['name'].concat(' - ').concat(client['telephone'])) + "\n                                            ")]), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "2",
        "align-self": "center"
      }
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "color": "primary",
        "rounded": "",
        "variant": "text"
      },
      on: {
        "click": function ($event) {
          return _vm.selectedClientNew(client['id'], false);
        }
      }
    }, [_c('i', {
      staticClass: "fa-regular fa-circle-check"
    })])], 1)], 1)], 1)], 1);
  }), 1)], 1) : _vm._e()], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ຊື່ລູກຄ້າ"
    },
    model: {
      value: _vm.form.client.name,
      callback: function ($$v) {
        _vm.$set(_vm.form.client, "name", $$v);
      },
      expression: "form.client.name"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີ*",
      "hint": "ເດຶອນ/ວັນ/ປີ 12/31/2023"
    },
    model: {
      value: _vm.form.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.form, "bookingDate", $$v);
      },
      expression: "form.bookingDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລາຍການເຄື່ອງ",
      "required": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ"
    },
    model: {
      value: _vm.form.note,
      callback: function ($$v) {
        _vm.$set(_vm.form, "note", $$v);
      },
      expression: "form.note"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.vendorList,
      "label": "ຜູ້ສະໜອງສິນຄ້າ"
    },
    model: {
      value: _vm.form.vendorId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "vendorId", $$v);
      },
      expression: "form.vendorId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Order No."
    },
    model: {
      value: _vm.form.refNumber,
      callback: function ($$v) {
        _vm.$set(_vm.form, "refNumber", $$v);
      },
      expression: "form.refNumber"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Tracking No."
    },
    model: {
      value: _vm.form.trackingNumber,
      callback: function ($$v) {
        _vm.$set(_vm.form, "trackingNumber", $$v);
      },
      expression: "form.trackingNumber"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "ໂ"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລິ້ງສິນຄ້າ"
    },
    model: {
      value: _vm.form.link,
      callback: function ($$v) {
        _vm.$set(_vm.form, "link", $$v);
      },
      expression: "form.link"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລາຄາສິນຄ້າ"
    },
    model: {
      value: _vm.form.price,
      callback: function ($$v) {
        _vm.$set(_vm.form, "price", $$v);
      },
      expression: "form.price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.currencyList,
      "label": "ສະກຸນເງິນ*"
    },
    on: {
      "input": function ($event) {
        return _vm.currencyChange(true);
      }
    },
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "ອັດຕາແລກປ່ຽນ"
    },
    model: {
      value: _vm.form.priceRate,
      callback: function ($$v) {
        _vm.$set(_vm.form, "priceRate", $$v);
      },
      expression: "form.priceRate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "code",
      "items": _vm.status,
      "label": "ສະຖານະເຄື່ອງ*"
    },
    model: {
      value: _vm.form.status,
      callback: function ($$v) {
        _vm.$set(_vm.form, "status", $$v);
      },
      expression: "form.status"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [!_vm.isStatusOrdered ? _c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ຄ່າຂົນສົ່ງ"
    },
    model: {
      value: _vm.form.shippingFee,
      callback: function ($$v) {
        _vm.$set(_vm.form, "shippingFee", $$v);
      },
      expression: "form.shippingFee"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [!_vm.isStatusOrdered ? _c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.currencyList,
      "label": "ສະກຸນເງິນ*"
    },
    on: {
      "input": function ($event) {
        return _vm.currencyChange(false);
      }
    },
    model: {
      value: _vm.form.shippingFeeCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "shippingFeeCurrencyId", $$v);
      },
      expression: "form.shippingFeeCurrencyId"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [!_vm.isStatusOrdered ? _c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "*ອັດຕາແລກປ່ຽນ"
    },
    model: {
      value: _vm.form.shippingRate,
      callback: function ($$v) {
        _vm.$set(_vm.form, "shippingRate", $$v);
      },
      expression: "form.shippingRate"
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "ໃຊ້ງານຢູ່"
    },
    model: {
      value: _vm.form.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isActive", _vm._n($$v));
      },
      expression: "form.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "10"
    }
  })], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OrderForm.vue?vue&type=template&id=5a3fa7ee&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(356);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderForm.vue?vue&type=script&lang=js&



/* harmony default export */ var OrderFormvue_type_script_lang_js_ = ({
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
      timeoutId: null,
      isSenderTyping: true,
      clientOption: [],
      vendorList: [],
      locationList: [],
      barcode: '',
      form: {
        bookingDate: '',
        currencyId: 1,
        vendorId: 1,
        priceRate: 1,
        endLocationId: 1,
        shippingFeeCurrencyId: 1,
        shippingRate: 1,
        shippingFee: 0,
        note: '',
        name: '',
        refNumber: '',
        trackingNumber: '',
        link: '',
        price: 0,
        isActive: true,
        status: 'ORDERED',
        client: {
          id: null,
          name: '',
          telephone: ''
        },
        sender: {
          id: null,
          name: '',
          telephone: ''
        }
      },
      // status: [
      //     'ORDERED',
      //     'RECEIVED',
      //     'INVOICED',
      // ],
      status: [{
        'name': 'ຍັງບໍ່ເຂົ້າສາງ',
        'code': 'ORDERED'
      }, {
        'name': 'ເຄື່ອງເຂົ້າສາງ',
        'code': 'RECEIVED'
      }, {
        'name': 'ຮັບແລ້ວ',
        'code': 'INVOICED'
      }],
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 20 || 'Name must be less than 20 characters'],
      masterRules: {
        imageRule: [files => {
          let fileSize = 0;
          let totalSize = 0;
          if (files) {
            files.forEach(el => {
              fileSize += el.size;
              console.log('Size: ' + el.size);
            });
            totalSize = fileSize / files.length;
            console.log('File size: aaa' + files.length + " Each: " + totalSize || false);
          } else {
            console.log('File: ' + files);
          }
          console.log('Total: ' + totalSize);
          return totalSize < 2000000 || "ຂະຫນາດເກີນ";
        }]
      }
    };
  },
  watch: {},
  async mounted() {
    if (this.isCreate) {
      const today = new Date().toISOString().substr(0, 10);
      this.form.bookingDate = today;
      console.log(`******** DEFAULT CURRENCY ${this.currencyList[0]['id']}*******`);
      this.form.currencyId = this.currencyList[0]['id'];
      this.form.shippingFeeCurrencyId = this.currencyList[0]['id'];
    }
    await this.loadEntry();
    await this.loadLocation();
    this.loadVendor();
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    handleKeyDown(event) {
      console.log(`BACORD SCANING....`);
      if (this.timer) {
        clearInterval(this.timer);
      }
      if (event.key == 'Enter') {
        if (this.barcode) {
          // ************ Find product from this barcode and add to cart ************ //
          // this.findProductFromBarcode(this.barcode)
          // Handle barcode [Receiving, Invoicing]
          console.log(`BACORD SCAN RESULT: ${this.barcode}`);
          // if(this.isCreate) return
          this.form.trackingNumber = this.barcode.toUpperCase();
          // this.findOrderByTrackingNumber(this.barcode)
        }

        this.barcode = '';
        return;
      }
      if (event.key != 'Shift') {
        this.barcode += event.key;
      }
      this.timer = setInterval(() => this.barcode = '', 20);
    },
    selectedClientNew(newVal, isSender) {
      const newClient = this.findAllClient.find(el => el.id == newVal);
      if (newClient != undefined) {
        if (!isSender) {
          this.form.client.id = newClient['id'];
          this.form.client.name = newClient['name'];
          this.form.client.telephone = newClient['telephone'];
        } else {
          this.form.sender.id = newClient['id'];
          this.form.sender.name = newClient['name'];
          this.form.sender.telephone = newClient['telephone'];
        }
        this.clientOption = [];
        this.timeoutId = setTimeout(() => {
          console.log(`******Reset auto suggest*******`);
        }, 2000);
      }
    },
    async loadVendor() {
      await this.$axios.get("api/vendor/find").then(response => {
        this.isloading = true;
        this.vendorList = response.data;
      }).catch(error => {
        console.log("Error ", error);
      });
      this.isloading = false;
    },
    async onFilesChange() {
      // await this.$axios.get("api/vendor/find").then(response => {
      //     this.isloading = true
      //     this.vendorList = response.data
      // }).catch(error => {
      //     console.log("Error ", error);
      // })
      // this.isloading = false
    },
    currencyChange(isPrice) {
      if (isPrice) {
        const currency = this.currencyList.find(el => el['id'] == this.form.currencyId);
        if (!currency) return;
        this.form.priceRate = currency['rate'];
      } else {
        const currency = this.currencyList.find(el => el['id'] == this.form.shippingFeeCurrencyId);
        if (!currency) return;
        this.form.shippingRate = currency['rate'];
      }
    },
    clientList(custTel) {
      return this.findAllClient.filter(el => el.telephone.includes(custTel));
    },
    senderTelephoneTypingHandler(telephone) {
      console.log('User finished typing! Input value: ' + telephone);
      // If using manual typing and not select from auto suggest 
      // we will remove sender id, so api will create new customer auto
      this.form.sender.id = null;
      if (this.clientList(telephone) != undefined) {
        this.isSenderTyping = true;
        this.clientOption = this.clientList(telephone);
        console.log(`*****${this.clientOption.length}*****`);
        if (this.timeoutId == null) {
          this.timeoutId = setTimeout(() => {
            console.log(`******Reset auto suggest*******`);
            this.clientOption = [];
            this.isSenderTyping = false;
          }, 5000);
        }
      }
    },
    clientTelephoneTypingHandler(telephone) {
      // If using manual typing and not select from auto suggest 
      // we will remove client id, so api will create new customer auto
      this.form.client.id = null;
      console.log('User finished typing! Input value: ' + telephone);
      if (this.clientList(telephone) != undefined) {
        this.isSenderTyping = false;
        this.clientOption = this.clientList(telephone);
        console.log(`*****${this.clientOption.length}*****`);
        if (this.timeoutId == null) {
          this.timeoutId = setTimeout(() => {
            console.log(`******Reset auto suggest*******`);
            this.clientOption = [];
            this.isSenderTyping = false;
          }, 5000);
        }
      }
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = this.isCreate ? 'api/order/create' : `api/order/update/${this.recordId}`;
        console.log("API => ", api);
        if (this.isCreate) {
          // this.form.client = this.customerObject()
          this.form.userId = this.user.id;
          this.form.locationId = this.currentTerminal['locationId'];
          await this.$axios.post(api, this.form).then(response => {
            this.refreshData();
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
          this.form.userId = this.user.id;
          this.form.locationId = this.currentTerminal['locationId'];
          await this.$axios.put(api, this.form).then(response => {
            this.refreshData();
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        }
        this.isloading = false;
      }
    },
    async loadLocation() {
      if (this.isloading) return;
      this.isloading = true;
      try {
        const response = await this.$axios.get(`api/location/find`);
        this.locationList = response.data;
      } catch (error) {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + error);
        console.log('Error ===>: ' + error);
      }
      this.isloading = false;
    },
    async loadEntry() {
      console.log(`===> Update form record load`);
      if (this.recordId && !this.isCreate) {
        this.isloading = true;
        try {
          const response = await this.$axios.get(`api/order/find/${this.recordId}`);
          this.form = response.data;
          if (!response.data.sender) {
            console.log(`SENDER IS NULL ${response.data.sender}`);
            this.form.sender = {
              id: null,
              name: '',
              telephone: ''
            };
          }
        } catch (error) {
          console.log("Cannot fetch data " + error);
          return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    isStatusOrdered() {
      return this.form.status == 'ORDERED' ? true : false;
    },
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    user() {
      return this.$auth.user || '';
    },
    currencyList() {
      return this.findAllCurrency;
    },
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal'])
  }
});
// CONCATENATED MODULE: ./components/OrderForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OrderFormvue_type_script_lang_js_ = (OrderFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/OrderForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OrderFormvue_type_script_lang_js_,
  OrderFormvue_type_template_id_5a3fa7ee_render,
  staticRenderFns,
  false,
  null,
  null,
  "8e147922"
  
)

/* harmony default export */ var OrderForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=order-form.js.map