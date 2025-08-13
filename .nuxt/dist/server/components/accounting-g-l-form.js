exports.ids = [16,33];
exports.modules = {

/***/ 387:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CancelTicketForm.vue?vue&type=template&id=1b356803&








var CancelTicketFormvue_type_template_id_1b356803_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_vm._v("\n        ຍົກເລີກບິນ\n        "), _c(VForm["a" /* default */], {
    ref: "myform",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "ເລກທີອໍເດີ "
    },
    model: {
      value: _vm.id,
      callback: function ($$v) {
        _vm.id = $$v;
      },
      expression: "id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເຫດຜົນການຍົກເລີກ",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.remark,
      callback: function ($$v) {
        _vm.$set(_vm.form, "remark", $$v);
      },
      expression: "form.remark"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄ່າທຳນຽມ"
    },
    model: {
      value: _vm.form.cancel_fee,
      callback: function ($$v) {
        _vm.$set(_vm.form, "cancel_fee", $$v);
      },
      expression: "form.cancel_fee"
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "warning",
    attrs: {
      "text": "",
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
      "text": "",
      "rounded": ""
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_vm._v("\n                ຢືນຢັນ\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CancelTicketForm.vue?vue&type=template&id=1b356803&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CancelTicketForm.vue?vue&type=script&lang=js&

/* harmony default export */ var CancelTicketFormvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: Number,
      require: false
    },
    customerId: {
      type: Number,
      require: false,
      default: null
    }
  },
  data() {
    return {
      isLoading: false,
      form: {
        isActive: false,
        remark: '',
        cancel_fee: 0
      },
      nameRules: [value => !!value || 'ກະລຸນາ ໃສ່ເຫດຜົນ', value => value.toString().length <= 100 || 'Reason must be less than 100 characters']
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    }
  },
  methods: {
    async submitForm() {
      if (this.$refs.myform.validate() && !this.isLoading) {
        this.isLoading = true;
        try {
          this.form.customerId = this.customerId;
          console.log(`${JSON.stringify(this.form)}`);
          const response = await this.$axios.put(`api/sale/reverse/${this.id}`, this.form);
          if (response.status = 200) {
            this.refreshData();
            Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          }
        } catch (error) {
          Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Something went wrong ' + error);
        }
        this.isLoading = false;
      } else {
        // Form is invalid, do not submit
        return;
      }
      this.isLoading = false;
    },
    refreshData() {
      this.$emit('reload-data');
    }
  }
});
// CONCATENATED MODULE: ./components/CancelTicketForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CancelTicketFormvue_type_script_lang_js_ = (CancelTicketFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CancelTicketForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CancelTicketFormvue_type_script_lang_js_,
  CancelTicketFormvue_type_template_id_1b356803_render,
  staticRenderFns,
  false,
  null,
  null,
  "f914fd46"
  
)

/* harmony default export */ var CancelTicketForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(389);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 395:
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

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(400);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("73bba828", content, true)

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{transform:translateY(100%)}.v-bottom-sheet.v-dialog{align-self:flex-end;border-radius:0;flex:0 1 auto;margin:0;overflow:visible}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%}@media only screen and (max-width:599.98px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }
  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _a;
        val ? this.calculateInputHeight() : (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
      });
    },
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },
    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },
  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },
    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },
    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },
    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }
      this.$emit('keydown', e);
    }
  }
}));

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var _src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VBottomSheet_VBottomSheet_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(337);
 // Extensions


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-bottom-sheet',
  props: {
    inset: Boolean,
    maxWidth: [String, Number],
    transition: {
      type: String,
      default: 'bottom-sheet-transition'
    }
  },
  computed: {
    classes() {
      return {
        ..._VDialog_VDialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-bottom-sheet': true,
        'v-bottom-sheet--inset': this.inset
      };
    }
  }
}));

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(464);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2f6b6adb", content, true)

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(463);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },
    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },
    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },
    styles() {
      if (this.absolute || !this.app) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application;
      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(bottom + footer + insetFooter),
        paddingLeft: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(left),
        paddingRight: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(bar + top)
      };
    }
  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },
  mounted() {
    if (this.isActive) this.setTimeout();
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq

    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },
  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "s"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "s"])(this)]);
    },
    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        style: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          pointerenter: () => window.clearTimeout(this.activeTimeout),
          pointerleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },
    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },
    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);
      if (!this.isActive ||
      // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }
      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }
}));

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(614);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("de5ee156", content, true, context)
};

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(534);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GLForm_vue_vue_type_style_index_0_id_f09cae02_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error-border[data-v-f09cae02]{border:2px solid #f44336!important}.error-row[data-v-f09cae02]{background-color:#ffebee!important}.error-row td[data-v-f09cae02]{border-bottom:1px solid #f44336!important}.v-data-table tbody tr[data-v-f09cae02]:hover{background-color:#f5f5f5!important}.v-card[data-v-f09cae02]{transition:box-shadow .3s ease}.v-card[data-v-f09cae02]:hover{box-shadow:0 4px 8px rgba(0,0,0,.12)!important}.v-text-field--outlined .v-input__control .v-input__slot[data-v-f09cae02]{min-height:40px}.v-autocomplete--is-dirty .v-select__selection[data-v-f09cae02]{color:rgba(0,0,0,.87)}.loading-overlay[data-v-f09cae02]{align-items:center;background:hsla(0,0%,100%,.8);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:1000}.v-data-table th[data-v-f09cae02]{background-color:#f8f9fa;font-weight:600}.v-data-table .v-data-table__wrapper[data-v-f09cae02]{border-radius:8px;overflow:hidden}.success--text[data-v-f09cae02]{color:#4caf50!important}.error--text[data-v-f09cae02]{color:#f44336!important}@media (max-width:768px){.v-data-table[data-v-f09cae02]{font-size:.875rem}.v-btn[data-v-f09cae02]{min-width:auto;padding:0 12px}}@media print{.v-btn[data-v-f09cae02],.v-card-actions[data-v-f09cae02]{display:none!important}.v-card[data-v-f09cae02]{border:1px solid #ddd;box-shadow:none!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(423);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(526);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(413);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/GLForm.vue?vue&type=template&id=f09cae02&scoped=true&
























var GLFormvue_type_template_id_f09cae02_scoped_true_render = function render() {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1024"
    },
    model: {
      value: _vm.customerDialog,
      callback: function ($$v) {
        _vm.customerDialog = $$v;
      },
      expression: "customerDialog"
    }
  }, [_c('customer-list', {
    on: {
      "close-dialog": function ($event) {
        _vm.customerDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1024"
    },
    model: {
      value: _vm.cancelConfirmDialog,
      callback: function ($$v) {
        _vm.cancelConfirmDialog = $$v;
      },
      expression: "cancelConfirmDialog"
    }
  }, [_c('cancel-ticket-form', {
    attrs: {
      "id": _vm.headerId,
      "customerId": _vm.onlineCustomerId
    },
    on: {
      "refresh": function ($event) {
        return _vm.$emit('reload');
      },
      "close-dialog": function ($event) {
        _vm.cancelConfirmDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VBottomSheet["a" /* default */], {
    attrs: {
      "inset": ""
    },
    model: {
      value: _vm.sheet,
      callback: function ($$v) {
        _vm.sheet = $$v;
      },
      expression: "sheet"
    }
  }, [_c(VSheet["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "height": "200px"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mt-6",
    attrs: {
      "text": "",
      "color": "error"
    },
    on: {
      "click": function ($event) {
        _vm.sheet = false;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        Close\n      ")], 1), _vm._v(" "), _c('div', {
    staticClass: "my-3 error--text"
  }, [_vm._v("\n        " + _vm._s(_vm.validateErrorMessage) + "\n      ")])], 1)], 1), _vm._ssrNode(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "color": "success",
      "timeout": "3000"
    },
    scopedSlots: _vm._u([{
      key: "action",
      fn: function ({
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._b({
          attrs: {
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.successSnackbar = false;
            }
          }
        }, 'v-btn', attrs, false), [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)];
      }
    }]),
    model: {
      value: _vm.successSnackbar,
      callback: function ($$v) {
        _vm.successSnackbar = $$v;
      },
      expression: "successSnackbar"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.successMessage) + "\n    ")]), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
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
  }, [_vm._v("mdi-book-open-variant")]), _vm._v(" "), _c('h3', [_vm._v("General Ledger")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary mr-2",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": "",
      "disabled": !_vm.transaction.id
    },
    on: {
      "click": _vm.printTransaction
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n            Print\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "size": "large",
      "variant": "outlined",
      "color": "secondary",
      "rounded": "",
      "disabled": _vm.isloading
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n            Reset\n          ")], 1)], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VCard["a" /* default */], {
    staticClass: "mb-4 pa-4",
    class: {
      'error-border': _vm.headerError
    },
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n          Transaction Details\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _vm.transaction.id ? _c(VChip["a" /* default */], {
    attrs: {
      "color": "info",
      "small": ""
    }
  }, [_vm._v("\n            RECID: " + _vm._s(_vm.transaction.id) + "\n          ")]) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "Booking Date *",
      "error-messages": _vm.getFieldError('bookingDate'),
      "outlined": "",
      "dense": "",
      "required": ""
    },
    on: {
      "blur": function ($event) {
        return _vm.validateField('bookingDate');
      }
    },
    model: {
      value: _vm.transaction.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "bookingDate", $$v);
      },
      expression: "transaction.bookingDate"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "PO Reference Number",
      "outlined": "",
      "dense": "",
      "disabled": ""
    },
    model: {
      value: _vm.transaction.poHeaderId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "poHeaderId", $$v);
      },
      expression: "transaction.poHeaderId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Reference",
      "outlined": "",
      "dense": "",
      "error-messages": _vm.getFieldError('reference'),
      "maxlength": "50"
    },
    on: {
      "blur": function ($event) {
        return _vm.validateField('reference');
      }
    },
    model: {
      value: _vm.transaction.reference,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "reference", $$v);
      },
      expression: "transaction.reference"
    }
  }), _vm._v(" "), _c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Transaction Description",
      "outlined": "",
      "dense": "",
      "rows": "2",
      "maxlength": "255"
    },
    model: {
      value: _vm.transaction.description,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "description", $$v);
      },
      expression: "transaction.description"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_vm.transaction.user ? _c('div', {
    staticClass: "mb-2"
  }, [_c('strong', [_vm._v("Created by:")]), _vm._v(" " + _vm._s(_vm.transaction.user.cus_id)), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Name:")]), _vm._v(" " + _vm._s(_vm.transaction.user.cus_name) + "\n              ")]) : _vm._e(), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-3",
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-h6 primary--text"
  }, [_vm._v("\n                  Total Amount (LCY)\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "text-h5 font-weight-bold"
  }, [_vm._v("\n                  " + _vm._s(_vm.getFormatNum(_vm.grandTotal)) + "\n                ")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-format-list-bulleted")]), _vm._v("\n          Transaction Lines\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": _vm.isUpdate || _vm.isloading,
      "small": ""
    },
    on: {
      "click": _vm.newRow
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n            Add Line\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm.transaction.lines && _vm.transaction.lines.length > 0 ? _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.transaction.lines,
      "search": _vm.search,
      "item-key": "tempId"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VTextField["a" /* default */], {
          staticClass: "mb-3",
          attrs: {
            "label": "Search lines...",
            "prepend-inner-icon": "mdi-magnify",
            "single-line": "",
            "hide-details": "",
            "clearable": ""
          },
          model: {
            value: _vm.search,
            callback: function ($$v) {
              _vm.search = $$v;
            },
            expression: "search"
          }
        })];
      },
      proxy: true
    }, {
      key: "item",
      fn: function ({
        item,
        index
      }) {
        return [_c('tr', {
          class: {
            'error-row': _vm.errorLineNumber === index
          }
        }, [_c('td', {
          staticClass: "text-center"
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": _vm.errorLineNumber === index ? 'error' : 'primary'
          }
        }, [_vm._v("\n                    " + _vm._s(index + 1) + "\n                  ")])], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "150px"
          }
        }, [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.currencyList,
            "item-text": "code",
            "item-value": "id",
            "label": "Currency *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'currencyId'),
            "required": ""
          },
          on: {
            "change": function ($event) {
              return _vm.currencyChange(item, index);
            },
            "blur": function ($event) {
              return _vm.validateLineField(index, 'currencyId');
            }
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function ({
              item
            }) {
              return [_vm._v("\n                      " + _vm._s(item.code) + " - " + _vm._s(item.name) + "\n                    ")];
            }
          }, {
            key: "item",
            fn: function ({
              item
            }) {
              return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.code))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.name))])], 1)];
            }
          }], null, true),
          model: {
            value: item.currencyId,
            callback: function ($$v) {
              _vm.$set(item, "currencyId", $$v);
            },
            expression: "item.currencyId"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "120px"
          }
        }, [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "label": "Amount *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'amount'),
            "required": ""
          },
          on: {
            "input": function ($event) {
              return _vm.amountChange(item, index);
            },
            "blur": function ($event) {
              return _vm.validateLineField(index, 'amount');
            }
          },
          model: {
            value: item.amount,
            callback: function ($$v) {
              _vm.$set(item, "amount", $$v);
            },
            expression: "item.amount"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "120px"
          }
        }, [_c(VTextField["a" /* default */], {
          directives: [{
            name: "comma-thousand",
            rawName: "v-comma-thousand"
          }],
          attrs: {
            "label": "Exchange Rate *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'rate'),
            "required": ""
          },
          on: {
            "input": function ($event) {
              return _vm.rateChange(item, index);
            },
            "blur": function ($event) {
              return _vm.validateLineField(index, 'rate');
            }
          },
          model: {
            value: item.rate,
            callback: function ($$v) {
              _vm.$set(item, "rate", $$v);
            },
            expression: "item.rate"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "200px"
          }
        }, [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.accountList,
            "item-text": "accountNumber",
            "item-value": "id",
            "label": "Debit Account *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'drAccountId'),
            "required": ""
          },
          on: {
            "blur": function ($event) {
              return _vm.validateLineField(index, 'drAccountId');
            }
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function ({
              item
            }) {
              return [_vm._v("\n                      " + _vm._s(item.accountNumber) + " - " + _vm._s(item.accountName) + "\n                    ")];
            }
          }, {
            key: "item",
            fn: function ({
              item
            }) {
              return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.accountNumber))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.accountName))])], 1)];
            }
          }], null, true),
          model: {
            value: item.drAccountId,
            callback: function ($$v) {
              _vm.$set(item, "drAccountId", $$v);
            },
            expression: "item.drAccountId"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "200px"
          }
        }, [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.accountList,
            "item-text": "accountNumber",
            "item-value": "id",
            "label": "Credit Account *",
            "outlined": "",
            "dense": "",
            "error-messages": _vm.getLineError(index, 'crAccountId'),
            "required": ""
          },
          on: {
            "blur": function ($event) {
              return _vm.validateLineField(index, 'crAccountId');
            }
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function ({
              item
            }) {
              return [_vm._v("\n                      " + _vm._s(item.accountNumber) + " - " + _vm._s(item.accountName) + "\n                    ")];
            }
          }, {
            key: "item",
            fn: function ({
              item
            }) {
              return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.accountNumber))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.accountName))])], 1)];
            }
          }], null, true),
          model: {
            value: item.crAccountId,
            callback: function ($$v) {
              _vm.$set(item, "crAccountId", $$v);
            },
            expression: "item.crAccountId"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticStyle: {
            "min-width": "150px"
          }
        }, [_c(VTextField["a" /* default */], {
          attrs: {
            "label": "Description",
            "outlined": "",
            "dense": "",
            "maxlength": "100"
          },
          model: {
            value: item.description,
            callback: function ($$v) {
              _vm.$set(item, "description", $$v);
            },
            expression: "item.description"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticClass: "text-right font-weight-bold"
        }, [_vm._v("\n                  " + _vm._s(_vm.getFormatNum(item.localAmount)) + "\n                ")]), _vm._v(" "), _c('td', {
          staticClass: "text-center"
        }, [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "error",
            "icon": "",
            "small": "",
            "disabled": _vm.isloading
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item, index);
            }
          }
        }, [_c(VIcon["a" /* default */], [_vm._v("mdi-delete")])], 1)], 1)])];
      }
    }], null, false, 1715049908)
  }) : _c(VCard["a" /* default */], {
    staticClass: "pa-8 text-center",
    staticStyle: {
      "border": "2px dashed #ccc"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey"
    }
  }, [_vm._v("mdi-format-list-bulleted")]), _vm._v(" "), _c('h3', {
    staticClass: "mt-4 mb-2"
  }, [_vm._v("No transaction lines")]), _vm._v(" "), _c('p', {
    staticClass: "mb-4"
  }, [_vm._v("Add your first transaction line to get started")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": _vm.isUpdate || _vm.isloading
    },
    on: {
      "click": _vm.newRow
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n              Add First Line\n            ")], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_vm.transaction.lines.length > 0 ? _c(VChip["a" /* default */], {
    attrs: {
      "color": "info",
      "outlined": ""
    }
  }, [_vm._v("\n        " + _vm._s(_vm.transaction.lines.length) + " line(s)\n      ")]) : _vm._e(), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": "",
      "disabled": _vm.isloading
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        Cancel\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": _vm.isloading || !_vm.canSave,
      "loading": _vm.isloading
    },
    on: {
      "click": _vm.postTransaction
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n        " + _vm._s(_vm.isUpdate ? 'Update' : 'Save') + "\n      ")], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/GLForm.vue?vue&type=template&id=f09cae02&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(339);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(340);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(341);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(342);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(343);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(344);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(345);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(346);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(347);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(348);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(349);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(350);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(351);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(352);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(353);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(354);

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(395);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/GLForm.vue?vue&type=script&lang=js&



















/* harmony default export */ var GLFormvue_type_script_lang_js_ = ({
  name: 'gl-form',
  props: {
    GLId: {
      type: Number,
      default: null
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
    await this.initializeForm();
  },
  data() {
    return {
      // UI State
      isloading: false,
      customerDialog: false,
      cancelConfirmDialog: false,
      sheet: false,
      successSnackbar: false,
      successMessage: '',
      search: '',
      // Error tracking
      headerError: false,
      errorLineNumber: null,
      validateErrorMessage: '',
      validationErrors: {
        header: {},
        lines: {}
      },
      // Data
      accountList: [],
      transaction: {
        id: null,
        bookingDate: null,
        reference: '',
        description: '',
        vendorId: null,
        status: 'PENDING',
        isActive: true,
        exchangeRate: 1,
        total: 0,
        poHeaderId: null,
        locationId: null,
        user: null,
        lines: []
      },
      // Table configuration
      headers: [{
        text: '#',
        value: 'index',
        align: 'center',
        sortable: false,
        width: '60px'
      }, {
        text: 'Currency',
        value: 'currencyId',
        align: 'start',
        sortable: false,
        width: '150px'
      }, {
        text: 'Amount',
        value: 'amount',
        align: 'end',
        sortable: false,
        width: '120px'
      }, {
        text: 'Rate',
        value: 'rate',
        align: 'end',
        sortable: false,
        width: '120px'
      }, {
        text: 'Debit Account',
        value: 'drAccountId',
        align: 'start',
        sortable: false,
        width: '200px'
      }, {
        text: 'Credit Account',
        value: 'crAccountId',
        align: 'start',
        sortable: false,
        width: '200px'
      }, {
        text: 'Description',
        value: 'description',
        align: 'start',
        sortable: false,
        width: '150px'
      }, {
        text: 'Local Amount',
        value: 'localAmount',
        align: 'end',
        sortable: false,
        width: '120px'
      }, {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        sortable: false,
        width: '80px'
      }],
      // Validation rules
      validationRules: {
        required: value => !!value || 'This field is required',
        number: value => !isNaN(parseFloat(value)) && isFinite(value) || 'Must be a valid number',
        positiveNumber: value => parseFloat(value) > 0 || 'Must be greater than 0',
        date: value => {
          if (!value) return 'Date is required';
          const date = new Date(value);
          return !isNaN(date.getTime()) || 'Must be a valid date';
        },
        maxLength: max => value => !value || value.length <= max || `Maximum ${max} characters allowed`,
        numberComma: value => {
          if (!value) return true;
          const regex = /^[0-9,]*$/;
          return regex.test(value) || 'Only numbers and commas are allowed';
        }
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal', 'findAllLocation']),
    currencyList() {
      return this.findAllCurrency || [];
    },
    grandTotal() {
      return this.transaction.lines.reduce((total, item) => {
        return total + (item.localAmount || 0);
      }, 0);
    },
    canSave() {
      return this.transaction.lines.length > 0 && this.transaction.bookingDate && !this.hasValidationErrors;
    },
    hasValidationErrors() {
      const hasHeaderErrors = Object.keys(this.validationErrors.header).length > 0;
      const hasLineErrors = Object.keys(this.validationErrors.lines).some(lineIndex => Object.keys(this.validationErrors.lines[lineIndex]).length > 0);
      return hasHeaderErrors || hasLineErrors;
    },
    user() {
      return this.$auth.user || null;
    }
  },
  methods: {
    // Initialization
    async initializeForm() {
      try {
        this.isloading = true;
        await this.loadChartOfAccount();
        const today = new Date().toISOString().substr(0, 10);
        this.transaction.bookingDate = today;
        this.transaction.user = this.user;
        if (this.isUpdate && this.GLId) {
          await this.loadTransaction();
        } else {
          this.newRow();
        }
      } catch (error) {
        this.showError('Failed to initialize form');
        console.error('Initialization error:', error);
      } finally {
        this.isloading = false;
      }
    },
    // Data loading
    async loadChartOfAccount() {
      try {
        const response = await this.$axios.get("api/account/findAll");
        this.accountList = response.data;
      } catch (error) {
        this.showError('Failed to load chart of accounts');
        console.error('Chart of accounts error:', error);
      }
    },
    async loadTransaction() {
      try {
        const response = await this.$axios.get(`api/gl/find/${this.GLId}`);
        const data = response.data;

        // Populate header
        this.transaction.bookingDate = data.bookingDate;
        this.transaction.reference = data.reference || '';
        this.transaction.description = data.description || '';
        this.transaction.id = data.id;

        // Populate lines
        if (data.lines && data.lines.length > 0) {
          this.transaction.lines = data.lines.map((line, index) => ({
            ...line,
            tempId: `line_${index}_${Date.now()}`
          }));
        } else {
          this.transaction.lines = [data];
        }
      } catch (error) {
        this.showError('Failed to load transaction');
        console.error('Load transaction error:', error);
      }
    },
    // Line management
    newRow() {
      if (this.isUpdate) {
        this.showError('Cannot add new lines in update mode');
        return;
      }
      const newLine = {
        tempId: `line_${this.transaction.lines.length}_${Date.now()}`,
        postingReference: 'DUMMY',
        bookingDate: this.transaction.bookingDate,
        amount: '',
        currencyId: null,
        rate: '1',
        drAccountId: null,
        crAccountId: null,
        description: '',
        localAmount: 0,
        source: 'GL',
        isActive: true
      };
      this.transaction.lines.push(newLine);
      this.clearLineErrors(this.transaction.lines.length - 1);
    },
    async deleteItem(item, index) {
      try {
        if (this.transaction.poHeaderId) {
          this.showError('Cannot delete lines from PO transactions');
          return;
        }
        const confirmed = await Object(common["a" /* confirmSwal */])(this.$swal, 'Delete Line', 'Are you sure you want to delete this line?');
        if (!confirmed) return;
        if (item.id) {
          this.isloading = true;
          await this.$axios.delete(`api/gl/line/find/${item.id}`);
        }
        this.transaction.lines.splice(index, 1);
        this.clearLineErrors(index);
        this.reindexLineErrors(index);
      } catch (error) {
        this.showError('Failed to delete line');
        console.error('Delete line error:', error);
      } finally {
        this.isloading = false;
      }
    },
    // Calculations
    currencyChange(item, index) {
      const currency = this.currencyList.find(el => el.id === item.currencyId);
      if (!currency) return;
      item.rate = currency.rate || 1;
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'currencyId');
    },
    amountChange(item, index) {
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'amount');
    },
    rateChange(item, index) {
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'rate');
    },
    calculateLocalAmount(item, index) {
      const amount = parseFloat(Object(common["h" /* replaceAll */])(item.amount || '0', ',', ''));
      const rate = parseFloat(Object(common["h" /* replaceAll */])(item.rate || '1', ',', ''));
      if (!isNaN(amount) && !isNaN(rate)) {
        item.localAmount = amount * rate;
      } else {
        item.localAmount = 0;
      }
    },
    // Validation
    validateField(fieldName) {
      const value = this.transaction[fieldName];
      const errors = [];
      switch (fieldName) {
        case 'bookingDate':
          if (!value) errors.push('Booking date is required');else if (new Date(value) > new Date()) errors.push('Booking date cannot be in the future');
          break;
        case 'reference':
          if (value && value.length > 50) errors.push('Reference must be 50 characters or less');
          break;
      }
      if (errors.length > 0) {
        this.validationErrors.header[fieldName] = errors;
      } else {
        delete this.validationErrors.header[fieldName];
      }
    },
    validateLineField(lineIndex, fieldName) {
      const line = this.transaction.lines[lineIndex];
      const errors = [];
      if (!this.validationErrors.lines[lineIndex]) {
        this.validationErrors.lines[lineIndex] = {};
      }
      switch (fieldName) {
        case 'currencyId':
          if (!line.currencyId) errors.push('Currency is required');
          break;
        case 'amount':
          if (!line.amount) errors.push('Amount is required');else {
            const amount = parseFloat(Object(common["h" /* replaceAll */])(line.amount, ',', ''));
            if (isNaN(amount) || amount <= 0) errors.push('Amount must be greater than 0');
          }
          break;
        case 'rate':
          if (!line.rate) errors.push('Rate is required');else {
            const rate = parseFloat(Object(common["h" /* replaceAll */])(line.rate, ',', ''));
            if (isNaN(rate) || rate <= 0) errors.push('Rate must be greater than 0');
          }
          break;
        case 'drAccountId':
          if (!line.drAccountId) errors.push('Debit account is required');
          break;
        case 'crAccountId':
          if (!line.crAccountId) errors.push('Credit account is required');
          break;
      }
      if (errors.length > 0) {
        this.validationErrors.lines[lineIndex][fieldName] = errors;
      } else {
        delete this.validationErrors.lines[lineIndex][fieldName];
      }
    },
    validateAllFields() {
      // Validate header
      this.validateField('bookingDate');
      this.validateField('reference');

      // Validate lines
      this.transaction.lines.forEach((line, index) => {
        this.validateLineField(index, 'currencyId');
        this.validateLineField(index, 'amount');
        this.validateLineField(index, 'rate');
        this.validateLineField(index, 'drAccountId');
        this.validateLineField(index, 'crAccountId');
      });

      // Check for duplicate debit/credit accounts in same line
      this.transaction.lines.forEach((line, index) => {
        if (line.drAccountId && line.crAccountId && line.drAccountId === line.crAccountId) {
          if (!this.validationErrors.lines[index]) {
            this.validationErrors.lines[index] = {};
          }
          this.validationErrors.lines[index]['drAccountId'] = ['Debit and Credit accounts cannot be the same'];
          this.validationErrors.lines[index]['crAccountId'] = ['Debit and Credit accounts cannot be the same'];
        }
      });
      return !this.hasValidationErrors;
    },
    // Error handling
    getFieldError(fieldName) {
      return this.validationErrors.header[fieldName] || [];
    },
    getLineError(lineIndex, fieldName) {
      var _this$validationError;
      return ((_this$validationError = this.validationErrors.lines[lineIndex]) === null || _this$validationError === void 0 ? void 0 : _this$validationError[fieldName]) || [];
    },
    clearLineErrors(lineIndex) {
      delete this.validationErrors.lines[lineIndex];
    },
    reindexLineErrors(deletedIndex) {
      const newLineErrors = {};
      Object.keys(this.validationErrors.lines).forEach(index => {
        const numIndex = parseInt(index);
        if (numIndex > deletedIndex) {
          newLineErrors[numIndex - 1] = this.validationErrors.lines[index];
        } else if (numIndex < deletedIndex) {
          newLineErrors[numIndex] = this.validationErrors.lines[index];
        }
      });
      this.validationErrors.lines = newLineErrors;
    },
    showError(message) {
      this.validateErrorMessage = message;
      this.sheet = true;
    },
    showSuccess(message) {
      this.successMessage = message;
      this.successSnackbar = true;
    },
    // Form actions
    resetForm() {
      this.transaction = {
        id: null,
        bookingDate: new Date().toISOString().substr(0, 10),
        reference: '',
        description: '',
        vendorId: null,
        status: 'PENDING',
        isActive: true,
        exchangeRate: 1,
        total: 0,
        poHeaderId: null,
        locationId: null,
        user: this.user,
        lines: []
      };
      this.validationErrors = {
        header: {},
        lines: {}
      };
      this.newRow();
    },
    printTransaction() {
      if (!this.transaction.id) {
        this.showError('Cannot print unsaved transaction');
        return;
      }
      // Implement print functionality
      console.log('Printing transaction:', this.transaction.id);
    },
    toggleDialog() {
      this.$emit('close-dialog');
    },
    // Save transaction
    async postTransaction() {
      if (this.isloading) return;
      if (!this.validateAllFields()) {
        this.showError('Please fix validation errors before saving');
        return;
      }
      try {
        this.isloading = true;

        // Prepare data
        const transactionData = {
          ...this.transaction
        };
        transactionData.lines = transactionData.lines.map(line => ({
          ...line,
          amount: parseFloat(Object(common["h" /* replaceAll */])(line.amount.toString(), ',', '')),
          rate: parseFloat(Object(common["h" /* replaceAll */])(line.rate.toString(), ',', '')),
          localAmount: parseFloat(line.localAmount || 0),
          bookingDate: transactionData.bookingDate
        }));
        if (this.isUpdate) {
          await this.updateTransaction(transactionData);
        } else {
          await this.createTransaction(transactionData);
        }
        this.showSuccess('Transaction saved successfully');
        this.$emit('reload');
        this.$emit('close-dialog');
      } catch (error) {
        this.handleSaveError(error);
      } finally {
        this.isloading = false;
      }
    },
    async createTransaction(transactionData) {
      // Clear line IDs for creation
      transactionData.lines.forEach(line => {
        delete line.id;
        delete line.tempId;
      });
      const response = await this.$axios.post('api/gl/createMulti', transactionData);
      return response.data;
    },
    async updateTransaction(transactionData) {
      if (transactionData.lines.length === 1) {
        const line = transactionData.lines[0];
        line.bookingDate = transactionData.bookingDate;
        const response = await this.$axios.put(`api/gl/update/${this.GLId}`, line);
        return response.data;
      } else {
        throw new Error('Multiple lines update not supported');
      }
    },
    handleSaveError(error) {
      var _error$response;
      console.error('Save error:', error);
      if ((_error$response = error.response) !== null && _error$response !== void 0 && _error$response.data) {
        const errorMessage = error.response.data;

        // Handle specific error types
        if (errorMessage.includes('#')) {
          const parts = errorMessage.split('#');
          if (parts.length > 1) {
            const productId = parts[1];
            const lineIndex = this.transaction.lines.findIndex(line => line.productId == productId);
            if (lineIndex >= 0) {
              this.errorLineNumber = lineIndex;
            }
          }
        }
        this.showError(errorMessage);
      } else {
        this.showError('Failed to save transaction. Please try again.');
      }
    },
    // Utility methods
    getFormatNum(value) {
      if (value === null || value === undefined || isNaN(value)) return '0';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(value);
    },
    findCurrency(currencyId) {
      return this.currencyList.find(el => el.id === currencyId);
    },
    // Advanced validation methods
    validateBusinessRules() {
      const errors = [];

      // Check if transaction balances (total debits = total credits)
      const totalDebits = this.transaction.lines.reduce((sum, line) => {
        return sum + (line.localAmount || 0);
      }, 0);
      const totalCredits = this.transaction.lines.reduce((sum, line) => {
        return sum + (line.localAmount || 0);
      }, 0);

      // In a proper GL system, you'd check actual debit vs credit amounts
      // This is simplified for demonstration

      // Check for duplicate account combinations
      const accountCombinations = new Set();
      this.transaction.lines.forEach((line, index) => {
        if (line.drAccountId && line.crAccountId) {
          const combination = `${line.drAccountId}-${line.crAccountId}`;
          if (accountCombinations.has(combination)) {
            errors.push({
              lineIndex: index,
              field: 'drAccountId',
              message: 'Duplicate account combination found'
            });
          }
          accountCombinations.add(combination);
        }
      });

      // Check for circular references (A->B, B->A in same transaction)
      const accountPairs = this.transaction.lines.map(line => line.drAccountId && line.crAccountId ? [line.drAccountId, line.crAccountId].sort().join('-') : null).filter(Boolean);
      const duplicatePairs = accountPairs.filter((pair, index) => accountPairs.indexOf(pair) !== index);
      if (duplicatePairs.length > 0) {
        errors.push({
          lineIndex: -1,
          field: 'general',
          message: 'Circular account references detected'
        });
      }
      return errors;
    },
    validateAccountingPeriod() {
      const bookingDate = new Date(this.transaction.bookingDate);
      const currentDate = new Date();

      // Check if booking date is not too far in the past (configurable)
      const maxPastDays = 365; // 1 year
      const minDate = new Date();
      minDate.setDate(currentDate.getDate() - maxPastDays);
      if (bookingDate < minDate) {
        return 'Booking date is too far in the past';
      }

      // Check if booking date is not in the future
      if (bookingDate > currentDate) {
        return 'Booking date cannot be in the future';
      }
      return null;
    },
    // Enhanced search and filtering
    filterAccountsByType(accountType) {
      return this.accountList.filter(account => account.accountType === accountType);
    },
    getDebitAccounts() {
      // In a real system, you might filter by account types that can be debited
      return this.accountList.filter(account => ['ASSET', 'EXPENSE'].includes(account.accountType));
    },
    getCreditAccounts() {
      // In a real system, you might filter by account types that can be credited
      return this.accountList.filter(account => ['LIABILITY', 'EQUITY', 'REVENUE'].includes(account.accountType));
    },
    // Keyboard shortcuts
    handleKeyboardShortcuts(event) {
      // Ctrl+S to save
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        this.postTransaction();
      }

      // Ctrl+N to add new line
      if (event.ctrlKey && event.key === 'n') {
        event.preventDefault();
        this.newRow();
      }

      // Escape to close
      if (event.key === 'Escape') {
        this.toggleDialog();
      }
    },
    // Data export/import helpers
    exportToCSV() {
      const headers = ['Line#', 'Currency', 'Amount', 'Rate', 'Debit Account', 'Credit Account', 'Description', 'Local Amount'];
      const rows = this.transaction.lines.map((line, index) => {
        var _this$currencyList$fi, _this$accountList$fin, _this$accountList$fin2;
        return [index + 1, ((_this$currencyList$fi = this.currencyList.find(c => c.id === line.currencyId)) === null || _this$currencyList$fi === void 0 ? void 0 : _this$currencyList$fi.code) || '', line.amount, line.rate, ((_this$accountList$fin = this.accountList.find(a => a.id === line.drAccountId)) === null || _this$accountList$fin === void 0 ? void 0 : _this$accountList$fin.accountNumber) || '', ((_this$accountList$fin2 = this.accountList.find(a => a.id === line.crAccountId)) === null || _this$accountList$fin2 === void 0 ? void 0 : _this$accountList$fin2.accountNumber) || '', line.description, line.localAmount];
      });
      const csvContent = [headers, ...rows].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
      const blob = new Blob([csvContent], {
        type: 'text/csv'
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `GL_Transaction_${this.transaction.id || 'New'}.csv`;
      link.click();
      window.URL.revokeObjectURL(url);
    },
    // Auto-save functionality
    setupAutoSave() {
      this.autoSaveInterval = setInterval(() => {
        if (this.transaction.lines.length > 0 && !this.hasValidationErrors && !this.isloading) {
          this.autoSave();
        }
      }, 30000); // Auto-save every 30 seconds
    },

    async autoSave() {
      try {
        // Save as draft
        const draftData = {
          ...this.transaction,
          status: 'DRAFT'
        };

        // Implementation would depend on your backend API
        console.log('Auto-saving draft...', draftData);
      } catch (error) {
        console.error('Auto-save failed:', error);
      }
    }
  },
  mounted() {
    // Add keyboard event listeners
    document.addEventListener('keydown', this.handleKeyboardShortcuts);

    // Setup auto-save if needed
    if (this.$route.query.autosave === 'true') {
      this.setupAutoSave();
    }
  },
  beforeDestroy() {
    // Clean up event listeners
    document.removeEventListener('keydown', this.handleKeyboardShortcuts);

    // Clear auto-save interval
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }
  },
  watch: {
    // Watch for changes in transaction data
    'transaction.bookingDate'(newVal) {
      if (newVal) {
        // Update all line booking dates
        this.transaction.lines.forEach(line => {
          line.bookingDate = newVal;
        });
      }
    },
    // Watch for changes in lines to update totals
    'transaction.lines': {
      handler() {
        // Recalculate totals when lines change
        this.$nextTick(() => {
          // Any additional calculations can go here
        });
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/GLForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var accounting_GLFormvue_type_script_lang_js_ = (GLFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/GLForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(613)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  accounting_GLFormvue_type_script_lang_js_,
  GLFormvue_type_template_id_f09cae02_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "f09cae02",
  "acecee40"
  
)

/* harmony default export */ var GLForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,CustomerList: __webpack_require__(88).default,CancelTicketForm: __webpack_require__(387).default})


/***/ })

};;
//# sourceMappingURL=accounting-g-l-form.js.map