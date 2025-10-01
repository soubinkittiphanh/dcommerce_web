exports.ids = [185,94];
exports.modules = {

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(347);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
var VRadio = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
var VRadioGroup = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/login/index.vue?vue&type=template&id=b3847f4c&scoped=true&
















var loginvue_type_template_id_b3847f4c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VApp["a" /* default */], [_c('div', {
    staticClass: "container"
  }, [_c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "scrollable": "",
      "max-width": "1200",
      "persistent": ""
    },
    model: {
      value: _vm.terminalDialog,
      callback: function ($$v) {
        _vm.terminalDialog = $$v;
      },
      expression: "terminalDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("ເລືອກ Terminal ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticStyle: {
      "height": "300px"
    }
  }, [_c(VRadioGroup["a" /* default */], {
    attrs: {
      "column": ""
    },
    model: {
      value: _vm.terminalSelected,
      callback: function ($$v) {
        _vm.terminalSelected = $$v;
      },
      expression: "terminalSelected"
    }
  }, _vm._l(_vm.findAllTerminal, function (terminal) {
    return _c(VRadio["a" /* default */], {
      key: terminal.id,
      attrs: {
        "label": terminal.name + ' - ' + terminal.description,
        "value": terminal.id
      }
    });
  }), 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.switchTerminal
    }
  }, [_vm._v("\n            ເລືອກ\n          ")])], 1)], 1)], 1), _vm._v(" "), _c(VCard["a" /* default */], [_c('div', {
    staticClass: "pa-16"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('p', {
    staticClass: "text-center",
    staticStyle: {
      "color": "#01532B",
      "font-weight": "900",
      "font-family": "Arial, Helvetica, sans-serif",
      "font-size": "xx-large"
    }
  }, [_vm._v("\n              DCOMMERCE ")]), _vm._v(" "), _c('h2', {
    staticClass: "text-center",
    staticStyle: {
      "color": "#01532B"
    }
  }, [_vm._v("ຍິນດີຕ້ອນຮັບ ເຂົ້າສູ່ລະບົບການຂາຍ ")])])], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm.errorMessage ? _c('notification', {
    attrs: {
      "message": _vm.errorMessage
    }
  }) : _vm._e(), _vm._v(" "), _c(components_VCard["d" /* VCardTitle */], {
    staticClass: "my-text-center"
  }, [_vm._v("\n            ເຂົ້າສູ່ລະບົບ\n          ")]), _vm._v(" "), _c(VForm["a" /* default */], [_c(VTextField["a" /* default */], {
    staticClass: "rounded-10 my-text-center",
    attrs: {
      "label": "ກະລຸນາ ໃສ່ໄອດີ",
      "name": "email",
      "prepend-inner-icon": "mdi-account-tie-hat",
      "outlined": ""
    },
    model: {
      value: _vm.login.mem_id,
      callback: function ($$v) {
        _vm.$set(_vm.login, "mem_id", $$v);
      },
      expression: "login.mem_id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    staticClass: "rounded-10 my-text-center",
    attrs: {
      "label": "ລະຫັດຜ່ານ",
      "type": "password",
      "name": "password",
      "prepend-inner-icon": "mdi-lock",
      "outlined": ""
    },
    model: {
      value: _vm.login.mem_pwd,
      callback: function ($$v) {
        _vm.$set(_vm.login, "mem_pwd", $$v);
      },
      expression: "login.mem_pwd"
    }
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "rounded-0 my-text-center",
    attrs: {
      "color": "#01532B",
      "x-large": "",
      "block": "",
      "dark": "",
      "type": "submit"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.userLogin.apply(null, arguments);
      }
    }
  }, [_vm._v("\n              ເຂົ້າສູ່ລະບົບ\n              "), _c(VIcon["a" /* default */], [_vm._v(" mdi mdi-login")])], 1)], 1)], 1)], 1)])], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/login/index.vue?vue&type=template&id=b3847f4c&scoped=true&

// EXTERNAL MODULE: ./components/Notification.vue + 4 modules
var Notification = __webpack_require__(715);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/login/index.vue?vue&type=script&lang=js&



/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  layout: "login",
  data() {
    return {
      terminalDialog: false,
      email: '',
      password: '',
      errorMessage: '',
      terminalSelected: 1,
      isLoading: false,
      barcode: '',
      timer: null,
      login: {
        mem_id: '',
        mem_pwd: ''
      }
    };
  },
  components: {
    Notification: Notification["default"]
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findSelectedTerminal', 'findAllTerminal', 'findAllLocation'])
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['initiateData', 'setSelectedTerminal', 'setSelectedLocation']),
    switchTerminal() {
      this.setSelectedTerminal(this.terminalSelected);
      const location = this.findAllLocation.find(el => el.id == this.findAllTerminal.find(el => el.id == this.terminalSelected)['locationId']);
      this.setSelectedLocation(location);
      //********** refresh component so the data will be update fresh **********//
      this.$router.push('/admin'); // Main screen for minimart business
      // this.$router.push('/admin/moneyAdvance') // Main screen for YOTHA 
      // this.$router.push('/admin/orders') // Main screen for shipping bussiness
      this.terminalDialog = false;
    },
    async userLogin() {
      if (this.isLoading) return;
      try {
        this.isLoading = true;
        this.errorMessage = '';
        const response = await this.$auth.loginWith('local', {
          data: this.login
        });
        if (response.status !== 200) {
          this.isLoading = false;
          return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ບໍ່ສາມາດ ລັອກອິນ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        if (response.data.accessToken) {
          console.log(`LOGIN COMPLETED`);
          this.initData();
          this.terminalDialog = true; // Disable for THIS PROJECT  | POS: True, MWT: False
          // this.switchTerminal() // Auto select for this project only // Comment this line for POS
        } else {
          console.log('No token');
          Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ');
        }
        console.log(response);
      } catch (err) {
        console.log(err);
      }
      this.isLoading = false;
    },
    initData() {
      // Call the method directly
      this.initiateData(this.$axios);
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/login/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(929)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_loginvue_type_script_lang_js_,
  loginvue_type_template_id_b3847f4c_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "b3847f4c",
  "aa67508a"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,Notification: __webpack_require__(715).default})


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(434);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("1c8f4490", content, true)

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:\"\";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-bottom-right-radius:inherit;border-top-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-bottom:8px;padding-top:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:\"\";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433);
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(139);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
// Styles
 // Extensions

 // Components


 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-alert',
  props: {
    border: {
      type: String,
      validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    coloredBorder: Boolean,
    dense: Boolean,
    dismissible: Boolean,
    closeIcon: {
      type: String,
      default: '$cancel'
    },
    icon: {
      default: '',
      type: [Boolean, String],
      validator(val) {
        return typeof val === 'string' || val === false;
      }
    },
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,
    type: {
      type: String,
      validator(val) {
        return ['info', 'error', 'success', 'warning'].includes(val);
      }
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    __cachedBorder() {
      if (!this.border) return null;
      let data = {
        staticClass: 'v-alert__border',
        class: {
          [`v-alert__border--${this.border}`]: true
        }
      };
      if (this.coloredBorder) {
        data = this.setBackgroundColor(this.computedColor, data);
        data.class['v-alert__border--has-color'] = true;
      }
      return this.$createElement('div', data);
    },
    __cachedDismissible() {
      if (!this.dismissible) return null;
      const color = this.iconColor;
      return this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        staticClass: 'v-alert__dismissible',
        props: {
          color,
          icon: true,
          small: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: () => this.isActive = false
        }
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        props: {
          color
        }
      }, this.closeIcon)]);
    },
    __cachedIcon() {
      if (!this.computedIcon) return null;
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-alert__icon',
        props: {
          color: this.iconColor
        }
      }, this.computedIcon);
    },
    classes() {
      const classes = {
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-alert--border': Boolean(this.border),
        'v-alert--dense': this.dense,
        'v-alert--outlined': this.outlined,
        'v-alert--prominent': this.prominent,
        'v-alert--text': this.text
      };
      if (this.border) {
        classes[`v-alert--border-${this.border}`] = true;
      }
      return classes;
    },
    computedColor() {
      return this.color || this.type;
    },
    computedIcon() {
      if (this.icon === false) return false;
      if (typeof this.icon === 'string' && this.icon) return this.icon;
      if (!['error', 'info', 'success', 'warning'].includes(this.type)) return false;
      return `$${this.type}`;
    },
    hasColoredIcon() {
      return this.hasText || Boolean(this.border) && this.coloredBorder;
    },
    hasText() {
      return this.text || this.outlined;
    },
    iconColor() {
      return this.hasColoredIcon ? this.computedColor : undefined;
    },
    isDark() {
      if (this.type && !this.coloredBorder && !this.outlined) return true;
      return _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].options.computed.isDark.call(this);
    }
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('outline')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* breaking */ "a"])('outline', 'outlined', this);
    }
  },
  methods: {
    genWrapper() {
      const children = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
        toggle: this.toggle
      }) : this.__cachedDismissible];
      const data = {
        staticClass: 'v-alert__wrapper'
      };
      return this.$createElement('div', data, children);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-alert__content'
      }, this.$slots.default);
    },
    genAlert() {
      let data = {
        staticClass: 'v-alert',
        attrs: {
          role: 'alert'
        },
        on: this.listeners$,
        class: this.classes,
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      };
      if (!this.coloredBorder) {
        const setColor = this.hasText ? this.setTextColor : this.setBackgroundColor;
        data = setColor(this.computedColor, data);
      }
      return this.$createElement('div', data, [this.genWrapper()]);
    },
    /** @public */
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  render(h) {
    const render = this.genAlert();
    if (!this.transition) return render;
    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [render]);
  }
}));

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(459);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification.vue?vue&type=template&id=35851136&


var Notificationvue_type_template_id_35851136_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "notification is-danger"
  }, [_c(VAlert["a" /* default */], {
    attrs: {
      "border": "bottom",
      "color": "pink darken-1",
      "dark": ""
    }
  }, [_vm._v("\n  " + _vm._s(_vm.message) + "\n  ")])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Notification.vue?vue&type=template&id=35851136&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification.vue?vue&type=script&lang=js&
/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  name: 'Notification',
  props: ['message']
});
// CONCATENATED MODULE: ./components/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/Notification.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Notificationvue_type_script_lang_js_,
  Notificationvue_type_template_id_35851136_render,
  staticRenderFns,
  false,
  null,
  null,
  "d172f184"
  
)

/* harmony default export */ var Notification = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(930);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6050e99f", content, true, context)
};

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3847f4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3847f4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3847f4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3847f4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3847f4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".my-text-center[data-v-b3847f4c],h2[data-v-b3847f4c]{font-family:\"noto sans lao\";text-align:center}.container[data-v-b3847f4c]{align-items:center;background:#ccddd5;display:flex;flex-direction:column;height:100vh;justify-content:center;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map