exports.ids = [247,122,129];
exports.modules = {

/***/ 1185:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(375);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user/index.vue?vue&type=template&id=cdf5fb56&scoped=true&
















var uservue_type_template_id_cdf5fb56_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-left"
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
  }, [_vm._v("mdi-label")]), _vm._v(" "), _c('h3', [_vm._v("ລາຍການ ຜູ້ໃຊ້ງານລະບົບ")])], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
      value: _vm.entryForm,
      callback: function ($$v) {
        _vm.entryForm = $$v;
      },
      expression: "entryForm"
    }
  }, [_c('user-form', {
    key: _vm.componentKey,
    attrs: {
      "isUpdate": !_vm.isCreate,
      "reserveUserId": _vm.preNewUserId,
      "recordId": _vm.entrySelected
    },
    on: {
      "reload": function ($event) {
        _vm.loadData();
        _vm.entryForm = false;
      },
      "close-dialog": function ($event) {
        _vm.entryForm = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VLayout["a" /* default */], {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
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
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-left",
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
      "click": _vm.createRecord
    }
  }, [_c('span', {
    staticClass: "mdi mdi-plus"
  }), _vm._v("Create\n            ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
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
      "click": _vm.loadData
    }
  }, [_c('span', {
    staticClass: "mdi mdi-cloud-download"
  }), _vm._v("\n              ໂຫຼດຂໍ້ມູນ\n            ")])], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _vm.recordList ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.filterEntries
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VToolbar["a" /* default */], {
          staticClass: "pa-4",
          attrs: {
            "flat": ""
          }
        }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
          attrs: {
            "cols": "8"
          }
        }), _vm._v(" "), _c(VCol["a" /* default */], {
          attrs: {
            "cols": "4",
            "jujustify": "end"
          }
        }, [_c(VRow["a" /* default */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VCheckbox["a" /* default */], {
          attrs: {
            "label": "ສະແດງລາຍການ inActive"
          },
          model: {
            value: _vm.showActive,
            callback: function ($$v) {
              _vm.showActive = _vm._n($$v);
            },
            expression: "showActive"
          }
        })], 1)], 1)], 1)], 1)];
      },
      proxy: true
    }, {
      key: `item.rate`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(_vm.getFormatNum(item.rate)) + "\n        ")];
      }
    }, {
      key: `item.id`,
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
              _vm.viewRecord(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa-regular fa-pen-to-square"
        })])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/user/index.vue?vue&type=template&id=cdf5fb56&scoped=true&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./components/TerminalForm.vue + 4 modules
var TerminalForm = __webpack_require__(588);

// EXTERNAL MODULE: ./components/UserForm.vue + 4 modules
var UserForm = __webpack_require__(705);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user/index.vue?vue&type=script&lang=js&



/* harmony default export */ var uservue_type_script_lang_js_ = ({
  components: {
    TerminalForm: TerminalForm["default"],
    UserForm: UserForm["default"]
  },
  middleware: 'auths',
  data() {
    return {
      componentKey: 0,
      entryForm: false,
      isCreate: true,
      dialog: false,
      isloading: false,
      search: '',
      showActive: false,
      recordList: [],
      entrySelected: '',
      headers: [{
        text: '#',
        align: 'center',
        value: 'pk',
        sortable: true
      }, {
        text: 'ລະຫັດ',
        align: 'center',
        value: 'cus_id',
        sortable: true
      }, {
        text: 'ຊື່',
        align: 'center',
        value: 'cus_name',
        sortable: true
      }, {
        text: 'Tel',
        align: 'center',
        value: 'cus_tel',
        sortable: true
      }, {
        text: 'View/Update',
        align: 'end',
        value: 'id',
        sortable: false
      }]
    };
  },
  async created() {
    await this.loadData();
  },
  computed: {
    preNewUserId() {
      const maxUserId = Math.max(...this.recordList.map(user => user.cus_id));
      return maxUserId + 1;
    },
    filterEntries() {
      console.log(`Show inActive = ${this.showActive}`);
      if (this.showActive) return this.recordList;
      return this.recordList.filter(el => el['cus_active'] == true) || [];
    }
  },
  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val);
    },
    viewRecord(item) {
      this.componentKey += 1;
      this.entrySelected = item.id;
      this.isCreate = false;
      this.entryForm = true;
    },
    createRecord() {
      this.componentKey += 1;
      this.entrySelected = 0;
      this.isCreate = true;
      this.entryForm = true;
    },
    async loadData() {
      if (this.isloading) return;
      this.isloading = true;
      await this.$axios.get(`api/user/find`).then(res => {
        // ****** Clear Old Data
        this.recordList = [];
        for (const iterator of res.data) {
          iterator.pk = iterator['id'];
          this.recordList.push(iterator);
        }
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + er.Error);
        console.log('Error ===>: ' + er);
      });
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/user/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_uservue_type_script_lang_js_ = (uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/user/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(990)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_uservue_type_script_lang_js_,
  uservue_type_template_id_cdf5fb56_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "cdf5fb56",
  "473575cf"
  
)

/* harmony default export */ var user = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,UserForm: __webpack_require__(705).default})


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(396);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 396:
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

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
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

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(425);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 425:
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

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(424);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(135);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90);
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

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TerminalForm.vue?vue&type=template&id=47853d50&














var TerminalFormvue_type_template_id_47853d50_render = function render() {
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
  }, [_vm._v("mdi-label")]), _vm._v("\n                Terminal\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* code",
      "required": "",
      "disabled": !this.isCreate
    },
    model: {
      value: _vm.form.code,
      callback: function ($$v) {
        _vm.$set(_vm.form, "code", _vm._n($$v));
      },
      expression: "form.code"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ຊື່",
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
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Remark"
    },
    model: {
      value: _vm.form.description,
      callback: function ($$v) {
        _vm.$set(_vm.form, "description", $$v);
      },
      expression: "form.description"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "* SaleRate",
      "required": ""
    },
    model: {
      value: _vm.form.saleRate,
      callback: function ($$v) {
        _vm.$set(_vm.form, "saleRate", _vm._n($$v));
      },
      expression: "form.saleRate"
    }
  }), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.locationList,
      "label": "Stock take location*"
    },
    model: {
      value: _vm.form.locationId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "locationId", $$v);
      },
      expression: "form.locationId"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "Is Active"
    },
    model: {
      value: _vm.form.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isActive", _vm._n($$v));
      },
      expression: "form.isActive"
    }
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
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TerminalForm.vue?vue&type=template&id=47853d50&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TerminalForm.vue?vue&type=script&lang=js&

/* harmony default export */ var TerminalFormvue_type_script_lang_js_ = ({
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
      locationList: [],
      form: {
        description: '',
        name: '',
        code: 1001,
        saleRate: 0,
        isActive: true,
        locationId: 1
      },
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 20 || 'Name must be less than 20 characters']
    };
  },
  // mounted() {
  //     this.loadEntry();
  // },
  async created() {
    this.loadEntry();
    this.loadLocation();
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
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = this.isCreate ? 'api/terminal/create' : `api/terminal/update/${this.recordId}`;
        console.log("API => ", api);
        if (this.isCreate) {
          await this.$axios.post(api, this.form).then(response => {
            this.refreshData();
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
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
    async loadEntry() {
      console.log(`===> Update form record load`);
      if (this.recordId && !this.isCreate) {
        await this.$axios.get(`api/terminal/find/${this.recordId}`).then(response => {
          this.form.code = response.data["code"];
          this.form.name = response.data["name"];
          this.form.description = response.data["description"];
          this.form.saleRate = response.data["saleRate"];
          this.form.locationId = response.data["locationId"];
          this.form.isActive = response.data["isActive"];
        }).catch(error => {
          console.log("Cannot fetch data " + error);
        });
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    // Add any necessary computed properties here
  }
});
// CONCATENATED MODULE: ./components/TerminalForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TerminalFormvue_type_script_lang_js_ = (TerminalFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/TerminalForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TerminalFormvue_type_script_lang_js_,
  TerminalFormvue_type_template_id_47853d50_render,
  staticRenderFns,
  false,
  null,
  null,
  "625a3133"
  
)

/* harmony default export */ var TerminalForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(447);

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


/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(991);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3ceee1a6", content, true, context)
};

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cdf5fb56_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(768);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cdf5fb56_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cdf5fb56_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cdf5fb56_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cdf5fb56_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grey[data-v-cdf5fb56],.text-h5[data-v-cdf5fb56]{font-family:\"Noto Sans Lao\"}table[data-v-cdf5fb56]{border:1px solid #000}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map