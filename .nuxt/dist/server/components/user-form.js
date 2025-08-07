exports.ids = [109];
exports.modules = {

/***/ 398:
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

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(443);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 443:
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

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(442);
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

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(469);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserForm.vue?vue&type=template&id=0e2ef116&















var UserFormvue_type_template_id_0e2ef116_render = function render() {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], [_c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "Login ID*"
    },
    model: {
      value: _vm.record.cus_id,
      callback: function ($$v) {
        _vm.$set(_vm.record, "cus_id", $$v);
      },
      expression: "record.cus_id"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [!_vm.isUpdate ? _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລະຫັດຜ່ານ*"
    },
    model: {
      value: _vm.record.cus_pass,
      callback: function ($$v) {
        _vm.$set(_vm.record, "cus_pass", $$v);
      },
      expression: "record.cus_pass"
    }
  }) : _vm._e(), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຊື່ຜູ້ໃຊ້"
    },
    model: {
      value: _vm.record.cus_name,
      callback: function ($$v) {
        _vm.$set(_vm.record, "cus_name", $$v);
      },
      expression: "record.cus_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "true-value": true,
      "false-value": false
    },
    model: {
      value: _vm.record.cus_active,
      callback: function ($$v) {
        _vm.$set(_vm.record, "cus_active", $$v);
      },
      expression: "record.cus_active"
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
      "label": "ອີເມວ"
    },
    model: {
      value: _vm.record.cus_email,
      callback: function ($$v) {
        _vm.$set(_vm.record, "cus_email", $$v);
      },
      expression: "record.cus_email"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.groupList,
      "label": "ກຸ່ມຜູ້ໃຊ້*"
    },
    model: {
      value: _vm.record.groupId,
      callback: function ($$v) {
        _vm.$set(_vm.record, "groupId", $$v);
      },
      expression: "record.groupId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
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
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເບີໂທ"
    },
    model: {
      value: _vm.record.cus_tel,
      callback: function ($$v) {
        _vm.$set(_vm.record, "cus_tel", $$v);
      },
      expression: "record.cus_tel"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.terminalList,
      "label": "Terminal*"
    },
    model: {
      value: _vm.terminalSelected,
      callback: function ($$v) {
        _vm.terminalSelected = $$v;
      },
      expression: "terminalSelected"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.addTerminal
    }
  }, [_c('span', {
    staticClass: "mdi mdi-note-plus-outline"
  }), _vm._v("\n                                            ເພີ່ມ Terminal\n                                        ")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', [_c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, _vm._l(_vm.record.terminals, function (terminal) {
    return _c(VChip["a" /* default */], {
      key: terminal.id,
      staticClass: "ma-2",
      attrs: {
        "color": "warning",
        "variant": "outlined"
      },
      on: {
        "click": function ($event) {
          return _vm.removeTerminal(terminal);
        }
      }
    }, [_vm._v("\n                                " + _vm._s(terminal.name) + " - " + _vm._s(terminal.description) + "\n                            ")]);
  }), 1)], 1)])], 1), _vm._v(" "), _c(VDivider["a" /* default */])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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

// CONCATENATED MODULE: ./components/UserForm.vue?vue&type=template&id=0e2ef116&

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(398);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UserForm.vue?vue&type=script&lang=js&



/* harmony default export */ var UserFormvue_type_script_lang_js_ = ({
  props: {
    recordId: {
      type: Number,
      default: 0
    },
    reserveUserId: {
      type: Number,
      default: 0
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
    await this.loadTerminal();
    await this.loadGroup();
    if (this.isUpdate) {
      console.log("View old record");
      this.isloading = true;
      await this.loadTransaction();
      this.isloading = false;
    } else {
      const today = new Date().toISOString().substr(0, 10);
      this.record.bookingDate = today;
      this.record.srcLocationId = 1;
      this.record.desLocationId = 1;
      this.record.terminals = [];
      this.record.cus_id = this.reserveUserId;
    }
  },
  methods: {
    removeTerminal(terminal) {
      const idx = this.record.terminals.indexOf(terminal);
      this.record.terminals.splice(idx, 1);
    },
    addTerminal() {
      const newTerminal = this.terminalList.find(el => el.id == this.terminalSelected);
      console.log(`terminal ${newTerminal}`);
      if (this.record.terminals.length == 0) {
        console.log(`TEHERE IS NO TERMINAL`);
        this.record.terminals.push(newTerminal);
      } else if (this.record.terminals == 'undefined') {
        this.record.terminals.push(newTerminal);
      } else {
        const terminal = this.record.terminals.find(el => el.id == this.terminalSelected);
        console.log(`ADD TERMINAL ${terminal}`);
        if (!terminal) this.record.terminals.push(newTerminal);
      }

      // this.record.terminals.splice(idx, 1);
    },

    async loadTransaction() {
      await this.$axios.get(`api/user/find/${this.recordId}`).then(res => {
        this.record = res.data;
        console.log("User ===> ", res.data);
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + er.Error);
      });
    },
    async loadTerminal() {
      await this.$axios.get(`api/terminal/find`).then(res => {
        this.terminalList = res.data;
        console.log("TERMINAL => ", res.data);
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + er.Error);
      });
    },
    async loadGroup() {
      await this.$axios.get(`api/group/find`).then(res => {
        this.groupList = res.data;
        console.log("Group count => ", res.data.length);
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + er.Error);
      });
    },
    toggleDialog() {
      this.$emit('close-dialog');
    },
    async commitRecord() {
      // ********** If header has data, that means we go for update API ********** //
      if (this.isloading) return;
      this.isloading = true;
      if (this.isUpdate) {
        await this.$axios.put(`api/user/update/${this.recordId}`, this.record).then(res => {
          this.$emit('reload');
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(er => {
          console.error(er);
          Object(common["j" /* swalError2 */])(this.$swal, 'Error', er.response.data);
        });
      } else {
        await this.$axios.post(`api/user/create`, this.record).then(res => {
          this.$emit('reload');
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(er => {
          console.error(er);
          Object(common["j" /* swalError2 */])(this.$swal, 'Error', er.response.data);
        });
      }
      this.isloading = false;
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllCurrency'])
  },
  data() {
    return {
      search: '',
      numberCommaRule: value => {
        const regex = /^[0-9,]*$/;
        return regex.test(value) || 'Only numbers and commas are allowed';
      },
      terminalList: [],
      groupList: [],
      isloading: false,
      record: {
        "id": null,
        "cus_id": 100,
        "cus_pass": "1111",
        "cus_name": "USER NAME",
        "cus_tel": "TELEPHONE",
        "cus_email": "EMAIL",
        "cus_active": true,
        'terminals': [],
        groupId: 1
      },
      terminalSelected: 1
    };
  }
});
// CONCATENATED MODULE: ./components/UserForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserFormvue_type_script_lang_js_ = (UserFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/UserForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserFormvue_type_script_lang_js_,
  UserFormvue_type_template_id_0e2ef116_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e64abdfc"
  
)

/* harmony default export */ var UserForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=user-form.js.map