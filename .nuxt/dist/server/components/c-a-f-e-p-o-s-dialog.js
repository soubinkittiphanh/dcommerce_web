exports.ids = [33,32,34,36,37,96,150];
exports.modules = {

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(141);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/POSDialog.vue?vue&type=template&id=5b0376a2










var POSDialogvue_type_template_id_5b0376a2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": "",
      "transition": "dialog-bottom-transition",
      "retain-focus": false
    },
    model: {
      value: _vm.internalShow,
      callback: function ($$v) {
        _vm.internalShow = $$v;
      },
      expression: "internalShow"
    }
  }, [_c(VCard["a" /* default */], [_c(VToolbar["a" /* default */], {
    attrs: {
      "color": "primary",
      "dark": ""
    }
  }, [_c(components_VToolbar["b" /* VToolbarTitle */], [_vm._v("\n        " + _vm._s(_vm.toolbarTitle) + "\n      ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _vm.ticket ? _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white",
      "text-color": "primary"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-ticket")]), _vm._v("\n        Ticket #" + _vm._s(_vm.ticket.ticketNumber || _vm.ticket.id) + " \n      ")], 1) : _vm._e(), _vm._v(" "), _vm.hasTable ? _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "accent",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-table-furniture")]), _vm._v("\n        Table " + _vm._s(_vm.tableDisplay) + "\n      ")], 1) : _vm._e(), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": _vm.handleClose
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.internalShow ? _c('MenuPOSScreen', {
    attrs: {
      "table-id": _vm.effectiveTableId,
      "existing-ticket": _vm.ticket,
      "dialog-mode": true
    },
    on: {
      "ticket-updated": _vm.handleTicketUpdated,
      "close-dialog": _vm.handleClose,
      "reload-data": _vm.handleReloadData
    }
  }) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/POSDialog.vue?vue&type=template&id=5b0376a2

// EXTERNAL MODULE: ./components/CafePOSScreen/index.vue + 4 modules
var CafePOSScreen = __webpack_require__(630);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/POSDialog.vue?vue&type=script&lang=js

/* harmony default export */ var POSDialogvue_type_script_lang_js = ({
  name: 'POSDialog',
  components: {
    MenuPOSScreen: CafePOSScreen["default"]
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    tableId: {
      type: [String, Number],
      default: null
    },
    ticket: {
      type: Object,
      default: null
    }
  },
  computed: {
    internalShow: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.$emit('close');
        }
      }
    },
    hasTable() {
      return this.tableId && this.tableId !== 'walk-in';
    },
    tableDisplay() {
      var _this$ticket, _this$ticket$table;
      if (!this.tableId || this.tableId === 'walk-in') return 'Walk-in';
      return ((_this$ticket = this.ticket) === null || _this$ticket === void 0 ? void 0 : (_this$ticket$table = _this$ticket.table) === null || _this$ticket$table === void 0 ? void 0 : _this$ticket$table.number) || this.tableId;
    },
    effectiveTableId() {
      var _this$ticket2;
      return this.tableId || ((_this$ticket2 = this.ticket) === null || _this$ticket2 === void 0 ? void 0 : _this$ticket2.tableId) || 'walk-in';
    },
    toolbarTitle() {
      var _this$ticket$client;
      if (!this.ticket) return 'Add Items - New Order';
      const customer = ((_this$ticket$client = this.ticket.client) === null || _this$ticket$client === void 0 ? void 0 : _this$ticket$client.name) || 'Walk-in';
      const table = this.hasTable ? `Table ${this.tableDisplay}` : 'Walk-in';
      return `Add Items - ${table} - ${customer}`;
    }
  },
  mounted() {
    console.info(` from POS DIALOG ${JSON.stringify(this.ticket)}`);
  },
  methods: {
    handleClose() {
      console.log('POSDialog: Closing dialog');
      this.$emit('close');
    },
    handleTicketUpdated(ticket) {
      console.log('POSDialog: Ticket updated', ticket.id);
      this.$emit('ticket-updated', ticket);
      // ❌ DON'T close the dialog here - let user close it manually
      // this.$emit('close')
    },
    handleReloadData() {
      console.log('POSDialog: Reload data requested');
      this.$emit('reload-data');
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/POSDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var CAFE_POSDialogvue_type_script_lang_js = (POSDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/POSDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_POSDialogvue_type_script_lang_js,
  POSDialogvue_type_template_id_5b0376a2_render,
  staticRenderFns,
  false,
  null,
  null,
  "87b1b2c6"
  
)

/* harmony default export */ var POSDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(441);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 441:
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

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(459);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 459:
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(440);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
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

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(458);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92);
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export calculateUpdatedOffset */
/* unused harmony export calculateCenteredOffset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSlideGroup; });
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(138);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities



function bias(val) {
  const c = 0.501;
  const x = Math.abs(val);
  return Math.sign(val) * (x / ((1 / c - 2) * (1 - x) + 1));
}
function calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
  const clientWidth = selectedElement.clientWidth;
  const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;
  if (rtl) {
    currentScrollOffset = -currentScrollOffset;
  }
  const totalWidth = widths.wrapper + currentScrollOffset;
  const itemOffset = clientWidth + offsetLeft;
  const additionalOffset = clientWidth * 0.4;
  if (offsetLeft <= currentScrollOffset) {
    currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
  } else if (totalWidth <= itemOffset) {
    currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
  }
  return rtl ? -currentScrollOffset : currentScrollOffset;
}
function calculateCenteredOffset(selectedElement, widths, rtl) {
  const {
    offsetLeft,
    clientWidth
  } = selectedElement;
  if (rtl) {
    const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
    return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  } else {
    const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
    return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  }
}
const BaseSlideGroup = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__[/* BaseItemGroup */ "a"], _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    isSwipingHorizontal: false,
    isSwiping: false,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    canTouch() {
      return typeof window !== 'undefined';
    },
    __cachedNext() {
      return this.genTransition('next');
    },
    __cachedPrev() {
      return this.genTransition('prev');
    },
    classes() {
      return {
        ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__[/* BaseItemGroup */ "a"].options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },
    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);
      }
    },
    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },
    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }
  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',
    scrollOffset(val) {
      if (this.$vuetify.rtl) val = -val;
      let scroll = val <= 0 ? bias(-val) : val > this.widths.content - this.widths.wrapper ? -(this.widths.content - this.widths.wrapper) + bias(this.widths.content - this.widths.wrapper - val) : -val;
      if (this.$vuetify.rtl) scroll = -scroll;
      this.$refs.content.style.transform = `translateX(${scroll}px)`;
    }
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(() => {
        this.onResize();
      });
      obs.observe(this.$el);
      obs.observe(this.$refs.content);
      this.$on('hook:destroyed', () => {
        obs.disconnect();
      });
    } else {
      let itemsLength = 0;
      this.$on('hook:beforeUpdate', () => {
        var _a;
        itemsLength = (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length;
      });
      this.$on('hook:updated', () => {
        var _a;
        if (itemsLength === (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length) return;
        this.setWidths();
      });
    }
  },
  methods: {
    onScroll() {
      this.$refs.wrapper.scrollLeft = 0;
    },
    onFocusin(e) {
      if (!this.isOverflowing) return; // Focused element is likely to be the root of an item, so a
      // breadth-first search will probably find it in the first iteration

      for (const el of Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__[/* composedPath */ "g"])(e)) {
        for (const vm of this.items) {
          if (vm.$el === el) {
            this.scrollOffset = calculateUpdatedOffset(vm.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
            return;
          }
        }
      }
    },
    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content',
        on: {
          focusin: this.onFocusin
        }
      }, this.$slots.default);
    },
    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },
    genIcon(location) {
      let icon = location;
      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }
      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },
    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },
    genTransition(location) {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VFadeTransition */ "d"], [this.genIcon(location)]);
    },
    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper',
        on: {
          scroll: this.onScroll
        }
      }, [this.genContent()]);
    },
    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },
    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },
    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },
    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },
    onTouchMove(e) {
      if (!this.canTouch) return;
      if (!this.isSwiping) {
        // only calculate disableSwipeHorizontal during the first onTouchMove invoke
        // in order to ensure disableSwipeHorizontal value is consistent between onTouchStart and onTouchEnd
        const diffX = e.touchmoveX - e.touchstartX;
        const diffY = e.touchmoveY - e.touchstartY;
        this.isSwipingHorizontal = Math.abs(diffX) > Math.abs(diffY);
        this.isSwiping = true;
      }
      if (this.isSwipingHorizontal) {
        // sliding horizontally
        this.scrollOffset = this.startX - e.touchmoveX; // temporarily disable window vertical scrolling

        document.documentElement.style.overflowY = 'hidden';
      }
    },
    onTouchEnd() {
      if (!this.canTouch) return;
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);
      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }
      this.isSwiping = false; // rollback whole page scrolling to default

      document.documentElement.style.removeProperty('overflow-y');
    },
    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },
    scrollIntoView
    /* istanbul ignore next */() {
      if (!this.selectedItem && this.items.length) {
        const lastItemPosition = this.items[this.items.length - 1].$el.getBoundingClientRect();
        const wrapperPosition = this.$refs.wrapper.getBoundingClientRect();
        if (this.$vuetify.rtl && wrapperPosition.right < lastItemPosition.right || !this.$vuetify.rtl && wrapperPosition.left > lastItemPosition.left) {
          this.scrollTo('prev');
        }
      }
      if (!this.selectedItem) {
        return;
      }
      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },
    scrollTo
    /* istanbul ignore next */(location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },
    setWidths() {
      window.requestAnimationFrame(() => {
        if (this._isDestroyed) return;
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        }; // https://github.com/vuetifyjs/vuetify/issues/13212
        // We add +1 to the wrappers width to prevent an issue where the `clientWidth`
        // gets calculated wrongly by the browser if using a different zoom-level.

        this.isOverflowing = this.widths.wrapper + 1 < this.widths.content;
        this.scrollIntoView();
      });
    }
  },
  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }
});
/* harmony default export */ __webpack_exports__["b"] = (BaseSlideGroup.extend({
  name: 'v-slide-group',
  provide() {
    return {
      slideGroup: this
    };
  }
}));

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(486);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("d67becdc", content, true)

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__[/* BaseItemGroup */ "a"].extend({
  name: 'v-window',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  provide() {
    return {
      windowGroup: this
    };
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: Boolean,
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },
  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },
  computed: {
    isActive() {
      return this.transitionCount > 0;
    },
    classes() {
      return {
        ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__[/* BaseItemGroup */ "a"].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },
    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.internalReverse ? !this.isReverse : this.isReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },
    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },
    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },
    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },
    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },
    internalReverse() {
      return this.$vuetify.rtl ? !this.reverse : this.reverse;
    }
  },
  watch: {
    internalIndex(val, oldVal) {
      this.isReverse = this.updateReverse(val, oldVal);
    }
  },
  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },
    genContainer() {
      const children = [this.genDefaultSlot()];
      if (this.showArrows) {
        children.push(this.genControlIcons());
      }
      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },
    genIcon(direction, icon, click) {
      var _a, _b, _c;
      const on = {
        click: e => {
          e.stopPropagation();
          this.changedByDelimiters = true;
          click();
        }
      };
      const attrs = {
        'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
      };
      const children = (_c = (_b = (_a = this.$scopedSlots)[direction]) === null || _b === void 0 ? void 0 : _b.call(_a, {
        on,
        attrs
      })) !== null && _c !== void 0 ? _c : [this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          icon: true
        },
        attrs,
        on
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        props: {
          large: true
        }
      }, icon)])];
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, children);
    },
    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }
      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }
      return icons;
    },
    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },
    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },
    next() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },
    prev() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },
    updateReverse(val, oldVal) {
      const itemsLength = this.items.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) return val < oldVal;
      if (val === lastIndex && oldVal === 0) {
        return true;
      } else if (val === 0 && oldVal === lastIndex) {
        return false;
      } else {
        return val < oldVal;
      }
    }
  },
  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };
    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }
    return h('div', data, [this.genContainer()]);
  }
}));

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(491);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("3f874970", content, true)

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;margin:0 16px;position:absolute;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_1__[/* factory */ "a"])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },
  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },
  computed: {
    classes() {
      return this.groupClasses;
    },
    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }
      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }
  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },
    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },
    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.

      this.inTransition = false;
      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },
    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.

      this.inTransition = true;
      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "h"])(this.windowGroup.$el.clientHeight);
      }
      this.windowGroup.transitionCount++;
    },
    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },
    onEnter(el) {
      if (!this.inTransition) {
        return;
      }
      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.

        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "h"])(el.clientHeight);
      });
    }
  },
  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }
}));

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(509);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("44600667", content, true)

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{flex-wrap:wrap;max-width:100%;white-space:normal}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(543);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("56eb2497", content, true, context)
};

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(519);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2f6b6adb", content, true)

/***/ }),

/***/ 519:
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

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(563);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2c809a08", content, true, context)
};

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(566);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("49e755e5", content, true, context)
};

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(568);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3656ce8f", content, true, context)
};

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(570);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6cba6ba3", content, true, context)
};

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(531);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("410cae3c", content, true)

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-tabs>.v-tabs-bar{background-color:#fff}.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-tabs .v-tab:hover:before{opacity:.04}.theme--light.v-tabs .v-tab--active:before,.theme--light.v-tabs .v-tab--active:hover:before,.theme--light.v-tabs .v-tab:focus:before{opacity:.12}.theme--light.v-tabs .v-tab--active:focus:before{opacity:.16}.theme--dark.v-tabs>.v-tabs-bar{background-color:#1e1e1e}.theme--dark.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:hsla(0,0%,100%,.6)}.theme--dark.v-tabs .v-tab:hover:before{opacity:.08}.theme--dark.v-tabs .v-tab--active:before,.theme--dark.v-tabs .v-tab--active:hover:before,.theme--dark.v-tabs .v-tab:focus:before{opacity:.24}.theme--dark.v-tabs .v-tab--active:focus:before{opacity:.32}.theme--light.v-tabs-items{background-color:#fff}.theme--dark.v-tabs-items{background-color:#1e1e1e}.v-tabs-bar.accent .v-tab,.v-tabs-bar.accent .v-tabs-slider,.v-tabs-bar.error .v-tab,.v-tabs-bar.error .v-tabs-slider,.v-tabs-bar.info .v-tab,.v-tabs-bar.info .v-tabs-slider,.v-tabs-bar.primary .v-tab,.v-tabs-bar.primary .v-tabs-slider,.v-tabs-bar.secondary .v-tab,.v-tabs-bar.secondary .v-tabs-slider,.v-tabs-bar.success .v-tab,.v-tabs-bar.success .v-tabs-slider,.v-tabs-bar.warning .v-tab,.v-tabs-bar.warning .v-tabs-slider{color:#fff}.v-tabs{flex:1 1 auto;width:100%}.v-tabs .v-menu__activator{height:100%}.v-tabs.v.tabs--vertical.v-tabs--right{flex-direction:row-reverse}.v-tabs:not(.v-tabs--vertical) .v-tab{white-space:normal}.v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next,.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{display:inline;display:initial;visibility:hidden}.v-tabs-bar{border-radius:inherit;height:48px}.v-tabs-bar.v-item-group>*{cursor:auto}.v-tab{align-items:center;cursor:pointer;display:flex;flex:0 1 auto;font-size:.875rem;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:360px;min-width:90px;outline:none;padding:0 16px;position:relative;text-align:center;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;transition:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-tab.v-tab{color:inherit}.v-tab:before{bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-tab:before,.v-tabs-slider{background-color:currentColor}.v-tabs-slider{height:100%;width:100%}.v-tabs-slider-wrapper{bottom:0;margin:0!important;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-left:42px}.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-right:42px}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-right:auto}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-left:auto}.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*{margin-right:auto}.v-tabs--fixed-tabs>.v-tabs-bar .v-tab{flex:1 1 auto;width:100%}.v-tabs--grow>.v-tabs-bar .v-tab{flex:1 0 auto;max-width:none}.v-tabs--icons-and-text>.v-tabs-bar{height:72px}.v-tabs--icons-and-text>.v-tabs-bar .v-tab{flex-direction:column-reverse}.v-tabs--icons-and-text>.v-tabs-bar .v-tab>:first-child{margin-bottom:6px}.v-tabs--overflow>.v-tabs-bar .v-tab{flex:1 0 auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-left:auto}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-right:auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-right:0}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-left:0}.v-tabs--vertical{display:flex}.v-tabs--vertical>.v-tabs-bar{flex:1 0 auto;height:auto}.v-tabs--vertical>.v-tabs-bar .v-slide-group__next,.v-tabs--vertical>.v-tabs-bar .v-slide-group__prev{display:none}.v-tabs--vertical>.v-tabs-bar .v-tabs-bar__content{flex-direction:column}.v-tabs--vertical>.v-tabs-bar .v-tab{height:48px}.v-tabs--vertical>.v-tabs-bar .v-tabs-slider{height:100%}.v-tabs--vertical>.v-window{flex:0 1 100%}.v-tabs--vertical.v-tabs--icons-and-text>.v-tabs-bar .v-tab{height:72px}.v-tab--active{color:inherit}.v-tab--active.v-tab:not(:focus):before{opacity:0}.v-tab--active .v-btn.v-btn--flat,.v-tab--active .v-icon{color:inherit}.v-tab--disabled{opacity:.5}.v-tab--disabled,.v-tab--disabled *{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
// Extensions
 // Types & Components


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VWindow_VWindow__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
  name: 'v-tabs-items',
  props: {
    mandatory: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ..._VWindow_VWindow__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].options.computed.classes.call(this),
        'v-tabs-items': true
      };
    },
    isDark() {
      return this.rootIsDark;
    }
  },
  methods: {
    getValue(item, i) {
      return item.id || _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseItemGroup */ "a"].options.methods.getValue.call(this, item, i);
    }
  }
}));

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0539923e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(512);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0539923e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0539923e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0539923e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0539923e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".border-bottom[data-v-0539923e]{border-bottom:1px solid #e0e0e0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(606);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("697deb8d", content, true, context)
};

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/printdialog/index.vue?vue&type=template&id=3400df41&scoped=true
var render = function render() {
  var _vm$ticket$client, _vm$ticket$table, _vm$ticket$table2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"print-dialog-content\" data-v-3400df41><div class=\"print-dialog-header\" data-v-3400df41><h2 data-v-3400df41>Print Ticket</h2> <button class=\"close-btn\" data-v-3400df41>×</button></div> " + (_vm.ticket ? "<div class=\"print-preview\" data-v-3400df41><div class=\"print-header\" data-v-3400df41><div class=\"header-row\" data-v-3400df41><div class=\"queue-section\" data-v-3400df41><div class=\"queue-number\" data-v-3400df41>" + _vm._ssrEscape("\n                Q" + _vm._s(_vm.getQueNo(_vm.ticket.ticketNumber)) + "\n              ") + "</div> <div class=\"queue-label\" data-v-3400df41>Queue #</div></div> <div class=\"company-section\" data-v-3400df41><h1 class=\"restaurant-name\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.companyInfo.name)) + "</h1> <div class=\"restaurant-address\" data-v-3400df41>" + _vm._s(_vm.companyInfo.address) + "</div> " + (_vm.companyInfo.tel || _vm.companyInfo.email ? "<div class=\"contact-line\" data-v-3400df41>" + _vm._ssrEscape("\n                " + _vm._s(_vm.companyInfo.tel)) + (_vm.companyInfo.tel && _vm.companyInfo.email ? "<span data-v-3400df41> | </span>" : "<!---->") + _vm._ssrEscape(_vm._s(_vm.companyInfo.email) + "\n              ") + "</div>" : "<!---->") + "</div></div></div> <div class=\"print-ticket-info\" data-v-3400df41><div class=\"ticket-basic\" data-v-3400df41><div class=\"detail-row\" data-v-3400df41><span class=\"detail-label\" data-v-3400df41> #:</span> <span class=\"detail-value\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.ticket.ticketNumber || _vm.ticket.id)) + "</span></div> <div class=\"detail-row\" data-v-3400df41><span class=\"detail-label\" data-v-3400df41>Date:</span> <span class=\"detail-value\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatPrintDate(_vm.ticket.createdAt))) + "</span></div> <div class=\"detail-row\" data-v-3400df41><span class=\"detail-label\" data-v-3400df41>Time:</span> <span class=\"detail-value\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatPrintTime(_vm.ticket.createdAt))) + "</span></div></div> <div class=\"customer-basic\" data-v-3400df41><div class=\"detail-row\" data-v-3400df41><span class=\"detail-label\" data-v-3400df41>Customer:</span> <span class=\"detail-value\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(((_vm$ticket$client = _vm.ticket.client) === null || _vm$ticket$client === void 0 ? void 0 : _vm$ticket$client.name) || 'Walk-in')) + "</span></div> <div class=\"detail-row\" data-v-3400df41><span class=\"detail-label\" data-v-3400df41>Table:</span> <span class=\"detail-value\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(((_vm$ticket$table = _vm.ticket.table) === null || _vm$ticket$table === void 0 ? void 0 : _vm$ticket$table.number) || ((_vm$ticket$table2 = _vm.ticket.table) === null || _vm$ticket$table2 === void 0 ? void 0 : _vm$ticket$table2.name) || '-')) + "</span></div> <div class=\"detail-row\" data-v-3400df41><span class=\"detail-label\" data-v-3400df41>Status:</span> <span class=\"detail-value\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatStatus(_vm.ticket.status))) + "</span></div></div></div> <div class=\"print-divider\" data-v-3400df41></div> <div class=\"print-items\" data-v-3400df41><div class=\"section-title\" data-v-3400df41>ITEMS</div> " + (_vm.ticket.ticketLines && _vm.ticket.ticketLines.length > 0 ? "<div data-v-3400df41>" + _vm._ssrList(_vm.ticket.ticketLines, function (line) {
    return "<div class=\"print-item\" data-v-3400df41><div class=\"item-main\" data-v-3400df41><span class=\"item-name\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.getItemName(line))) + "</span> <span class=\"item-price\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.getItemTotal(line)))) + "</span></div> <div class=\"item-details\" data-v-3400df41><span class=\"item-qty\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(line.quantity) + "x" + _vm._s(_vm.formatPrice(line.unitPrice || line.pro_price))) + "</span></div> " + (line.is_promotion_item && line.promotion_note ? "<div class=\"item-promotion\" data-v-3400df41><span data-v-3400df41>" + _vm._ssrEscape("🏷️" + _vm._s(line.promotion_note)) + "</span> " + (line.discount_amount > 0 ? "<span data-v-3400df41>" + _vm._ssrEscape("-" + _vm._s(_vm.formatPrice(line.discount_amount))) + "</span>" : "<!---->") + "</div>" : "<!---->") + " " + (line.notes ? "<div class=\"item-notes\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(line.notes)) + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"no-items-print\" data-v-3400df41><p data-v-3400df41>No items in this order</p></div>") + "</div> <div class=\"print-divider\" data-v-3400df41></div> <div class=\"print-summary\" data-v-3400df41><div class=\"summary-line\" data-v-3400df41><span data-v-3400df41>Total (with tax):</span> <span data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.getTicketTotalWithTax()))) + "</span></div> " + (_vm.hasPromotionDiscount ? "<div class=\"summary-line promotion-line\" data-v-3400df41><span data-v-3400df41>Discount:</span> <span data-v-3400df41>" + _vm._ssrEscape("-" + _vm._s(_vm.formatPrice(_vm.ticket.promotionDiscount || 0))) + "</span></div>" : "<!---->") + " " + (_vm.getTicketTaxBreakdown().length > 0 ? "<div data-v-3400df41>" + _vm._ssrList(_vm.getTicketTaxBreakdown(), function (taxItem) {
    return "<div class=\"summary-line\" style=\"font-size: 9px;\" data-v-3400df41><span data-v-3400df41>" + _vm._ssrEscape(_vm._s(taxItem.name) + " (" + _vm._s((taxItem.rate * 100).toFixed(1)) + "% " + _vm._s(taxItem.type) + "):") + "</span> <span data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(taxItem.taxAmount))) + "</span></div>";
  }) + "</div>" : "<!---->") + " <div class=\"summary-line\" data-v-3400df41><span data-v-3400df41>Total Tax:</span> <span data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.tax || 0))) + "</span></div> <div class=\"summary-line total-line\" data-v-3400df41><span data-v-3400df41>FINAL TOTAL:</span> <span data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.total))) + "</span></div></div> " + (_vm.appliedPromotions.length > 0 ? "<div class=\"print-promotions\" data-v-3400df41><div class=\"print-divider\" data-v-3400df41></div> <h4 data-v-3400df41>PROMOTIONS:</h4> " + _vm._ssrList(_vm.appliedPromotions, function (promo) {
    return "<div class=\"promotion-info\" data-v-3400df41><div class=\"promotion-row\" data-v-3400df41><span class=\"promotion-title\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(promo.promotionName)) + "</span> <span class=\"promotion-save\" data-v-3400df41>" + _vm._ssrEscape("-" + _vm._s(_vm.formatPrice(promo.discountAmount))) + "</span></div></div>";
  }) + "</div>" : "<!---->") + " <div class=\"print-payment\" data-v-3400df41><div class=\"payment-status\" data-v-3400df41><span data-v-3400df41>Payment:</span> <span" + _vm._ssrClass("payment-value", `payment-${_vm.ticket.paymentStatus}`) + " data-v-3400df41>" + _vm._ssrEscape("\n            " + _vm._s(_vm.ticket.payment ? _vm.formatPaymentStatus(_vm.ticket.payment.payment_code) : 'unpaid') + "\n            ") + "</span></div></div> " + (_vm.ticket.notes ? "<div class=\"print-notes\" data-v-3400df41><div class=\"print-divider\" data-v-3400df41></div> <h4 data-v-3400df41>NOTES:</h4> <p data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.ticket.notes)) + "</p></div>" : "<!---->") + " <div class=\"print-footer\" data-v-3400df41><div class=\"print-divider\" data-v-3400df41></div> <p class=\"thank-you\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.footerMessage)) + "</p> <p class=\"print-time\" data-v-3400df41>" + _vm._ssrEscape(_vm._s(_vm.formatPrintDateTime(new Date()))) + "</p></div></div>" : "<!---->") + " <div class=\"print-dialog-actions\" data-v-3400df41><button" + _vm._ssrAttr("disabled", _vm.printing) + " class=\"print-btn print-primary\" data-v-3400df41>" + (_vm.printing ? "<span data-v-3400df41>Printing...</span>" : "<!---->") + " &quot;&gt;🖨️ Print</button> <button class=\"print-btn print-secondary\" data-v-3400df41>\n          Cancel\n        </button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue?vue&type=template&id=3400df41&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(107);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(108);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/printdialog/index.vue?vue&type=script&lang=js














/* harmony default export */ var printdialogvue_type_script_lang_js = ({
  name: 'PrintTicketDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ticket: {
      type: Object,
      default: null
    },
    footerMessage: {
      type: String,
      default: 'Thank you for your visit!'
    },
    customFooter: {
      type: String,
      default: null
    },
    printTitle: {
      type: String,
      default: 'Print Ticket'
    }
  },
  data() {
    return {
      printing: false
    };
  },
  computed: {
    hasPromotionDiscount() {
      return this.ticket && (this.ticket.promotionDiscount > 0 || this.appliedPromotions.length > 0);
    },
    appliedPromotions() {
      if (!this.ticket) return [];
      if (this.ticket.appliedPromotions) {
        try {
          if (typeof this.ticket.appliedPromotions === 'string') {
            return JSON.parse(this.ticket.appliedPromotions);
          }
          return this.ticket.appliedPromotions;
        } catch (error) {
          console.error('Error parsing applied promotions:', error);
        }
      }
      return [];
    },
    ...Object(external_vuex_["mapGetters"])({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findSelectedTerminal: 'findSelectedTerminal'
    }),
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    companyInfo() {
      var _this$currentTerminal, _this$currentTerminal2;
      const company = (_this$currentTerminal = this.currentTerminal) === null || _this$currentTerminal === void 0 ? void 0 : (_this$currentTerminal2 = _this$currentTerminal.location) === null || _this$currentTerminal2 === void 0 ? void 0 : _this$currentTerminal2.company;
      if (!company) {
        return {
          name: 'Restaurant Name',
          address: '123 Main Street<br>City, State 12345',
          tel: '',
          email: '',
          bank: '',
          accountName: '',
          accounts: '',
          remark: ''
        };
      }
      let formattedAddress = '';
      if (company.address) formattedAddress += company.address;
      if (company.village) formattedAddress += `<br>${company.village}`;
      if (company.district) formattedAddress += `, ${company.district}`;
      if (company.province) formattedAddress += `, ${company.province}`;
      return {
        name: company.name || 'Restaurant Name',
        address: formattedAddress || company.address || '',
        tel: company.tel || '',
        email: company.email || '',
        bank: company.bank || '',
        accountName: company.accountName || '',
        accounts: company.accounts || '',
        remark: company.remark || ''
      };
    }
  },
  mounted() {
    console.info(`TICKET DETAIL ${JSON.stringify(this.ticket)}`);
    this.printNow();
  },
  methods: {
    // ... existing methods ...
    getQueNo(ticketNumber) {
      var _ticketNumber$split$;
      const parts = ticketNumber === null || ticketNumber === void 0 ? void 0 : (_ticketNumber$split$ = ticketNumber.split('-')[0]) === null || _ticketNumber$split$ === void 0 ? void 0 : _ticketNumber$split$.split('/');
      return (parts === null || parts === void 0 ? void 0 : parts.length) === 2 ? (parseInt(parts[0]) * parseInt(parts[1])).toString() : '';
    },
    // ADDED: Methods for tax-inclusive print calculations
    getTicketTotalWithTax() {
      if (!this.ticket || !this.ticket.ticketLines) return 0;
      return this.ticket.ticketLines.reduce((total, line) => {
        return total + line.quantity * (line.unitPrice || line.pro_price || 0);
      }, 0);
    },
    getTicketBaseAmount() {
      if (!this.ticket || !this.ticket.ticketLines) return 0;
      return this.ticket.ticketLines.reduce((total, line) => {
        const itemTotal = line.quantity * (line.unitPrice || line.pro_price || 0);

        // If line has tax information and it's inclusive
        if (line.taxRate && line.taxType === 'INC') {
          // Extract base amount: base = total / (1 + tax_rate)
          return total + itemTotal / (1 + parseFloat(line.taxRate));
        } else {
          // For tax exclusive or no tax: base = total
          return total + itemTotal;
        }
      }, 0);
    },
    getTicketBaseAfterPromotions() {
      const baseAmount = this.getTicketBaseAmount();
      const promotionDiscount = this.ticket.promotionDiscount || 0;
      return Math.max(0, baseAmount - promotionDiscount);
    },
    getTicketTaxBreakdown() {
      if (!this.ticket || !this.ticket.ticketLines) return [];
      const taxGroups = new Map();
      const totalBaseAmount = this.getTicketBaseAmount();
      const promotionDiscount = this.ticket.promotionDiscount || 0;
      const discountRatio = totalBaseAmount > 0 ? promotionDiscount / totalBaseAmount : 0;
      this.ticket.ticketLines.forEach(line => {
        if (line.taxRate && line.taxRate > 0) {
          const taxKey = line.taxId || 'default';
          const itemTotal = line.quantity * (line.unitPrice || line.pro_price || 0);
          let itemBaseAmount;
          if (line.taxType === 'INC') {
            // For tax inclusive: extract base amount
            itemBaseAmount = itemTotal / (1 + parseFloat(line.taxRate));
          } else {
            // For tax exclusive: item total is the base amount
            itemBaseAmount = itemTotal;
          }
          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              name: `Tax ${(parseFloat(line.taxRate) * 100).toFixed(1)}%`,
              code: line.taxId || 'TAX',
              rate: parseFloat(line.taxRate),
              type: line.taxType || 'INC',
              baseAmount: 0
            });
          }
          const group = taxGroups.get(taxKey);
          group.baseAmount += itemBaseAmount;
        }
      });
      const breakdown = [];
      taxGroups.forEach(group => {
        // Apply proportional discount
        const adjustedBaseAmount = group.baseAmount * (1 - discountRatio);
        const taxAmount = adjustedBaseAmount * group.rate;
        breakdown.push({
          name: group.name,
          code: group.code,
          rate: group.rate,
          type: group.type,
          baseAmount: adjustedBaseAmount,
          taxAmount: taxAmount
        });
      });
      return breakdown;
    },
    getAfterPromotionsAmount() {
      if (!this.ticket) return 0;
      const subtotal = parseFloat(this.ticket.subtotal || 0);
      const discount = parseFloat(this.ticket.promotionDiscount || 0);
      return Math.max(0, subtotal - discount);
    },
    closeDialog() {
      this.$emit('close');
    },
    // Optimized for 54mm thermal printer - let printer handle width
    async printNow() {
      if (!this.ticket) return;
      this.printing = true;
      try {
        const printContent = document.querySelector('.print-preview').innerHTML;
        // Remove specific width constraints - let printer handle it
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Ticket #${this.ticket.id}</title>
            <meta charset="utf-8">
            <style>
              ${this.getPrintStyles()}
            </style>
          </head>
          <body>
            ${printContent}
          </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();

        // Standard printing delay
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
          this.printing = false;
          this.$emit('printed', this.ticket);
          this.closeDialog();
        }, 100);
      } catch (error) {
        console.error('Print error:', error);
        this.printing = false;
        this.$emit('print-error', error);
      }
    },
    // Compact date format for thermal printer
    formatPrintDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      });
    },
    // 24-hour time format for thermal printer
    formatPrintTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    },
    // Compact datetime for footer
    formatPrintDateTime(date) {
      if (!date) return 'N/A';
      const d = new Date(date);
      return `${d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit'
      })} ${d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })}`;
    },
    // Compact price formatting for thermal printer
    formatPrice(amount, includeCurrency = true) {
      const rounded = Math.round(amount || 0);
      const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(rounded);
      return includeCurrency ? `${formatted}₭` : formatted;
    },
    // Shorter status names for thermal printer
    formatStatus(status) {
      const statusMap = {
        pending: 'Pending',
        preparing: 'Prep',
        ready: 'Ready',
        served: 'Served',
        paid: 'Paid',
        cancel: 'Cancel'
      };
      return statusMap[status] || status;
    },
    // Shorter payment status for thermal printer
    formatPaymentStatus(status) {
      const statusMap = {
        pending: 'Unpaid',
        paid: 'Paid',
        refunded: 'Refund'
      };
      return statusMap[status] || status;
    },
    getItemTotal(line) {
      return line.totalPrice || line.total || line.subtotal || line.quantity * (line.unitPrice || line.pro_price || 0);
    },
    // Truncate item names for 54mm
    getItemName(line) {
      var _line$product, _line$product2;
      let name = line.pro_name || ((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.pro_name) || ((_line$product2 = line.product) === null || _line$product2 === void 0 ? void 0 : _line$product2.name) || line.pro_desc || 'Unknown Item';

      // Truncate for 54mm thermal printer
      if (name.length > 15) {
        name = name.substring(0, 12) + '...';
      }
      return name;
    },
    // 54mm thermal printer optimized styles with PROMINENT QUEUE NUMBER
    getPrintStyles() {
      return `
        body {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.2;
          margin: 0;
          padding: 4px;
          color: #000;
          overflow-wrap: break-word;
        }
        
        /* HEADER with 2-10 COLUMN SPLIT (Queue 2 cols, Company 10 cols centered) */
        .print-header {
          margin-bottom: 8px;
        }
        
        .header-row {
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }
        
        /* LEFT: Queue Number (2 columns - ~16.67% width) */
        .queue-section {
          flex: 0 0 16.67%;
          text-align: center;
          padding: 6px 4px;
          border: 2px solid #000;
          background: #000;
          color: #fff;
          border-radius: 3px;
        }
        
        .queue-number {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 1px;
          margin: 0;
          line-height: 1;
        }
        
        .queue-label {
          font-size: 7px;
          margin: 1px 0 0 0;
          letter-spacing: 0.5px;
          color: #ccc;
        }
        
        /* RIGHT: Centered Company Details (10 columns - ~83.33% width) */
        .company-section {
          flex: 1;
          text-align: center;
          padding: 2px 8px;
        }
        
        .restaurant-name {
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 2px 0;
          text-align: center;
        }
        .restaurant-address {
          font-size: 9px;
          margin: 0 0 1px 0;
          line-height: 1.1;
          text-align: center;
        }
        .contact-line {
          font-size: 8px;
          margin: 1px 0;
          color: #666;
          text-align: center;
        }
        
        /* Ticket info for 54mm */
        .print-ticket-info {
          margin-bottom: 6px;
          font-size: 10px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
          font-size: 10px;
        }
        .detail-label {
          font-weight: bold;
        }
        .detail-value {
          text-align: right;
        }
        
        /* Divider */
        .print-divider {
          border-top: 1px dashed #000;
          margin: 6px 0;
        }
        
        /* Items section for 54mm */
        .section-title {
          font-size: 12px;
          font-weight: bold;
          margin: 0 0 6px 0;
          text-align: center;
        }
        .print-item {
          margin-bottom: 6px;
          font-size: 10px;
        }
        .item-main {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 2px;
        }
        .item-name {
          flex: 1;
          word-wrap: break-word;
        }
        .item-price {
          margin-left: 8px;
          text-align: right;
        }
        .item-details {
          display: flex;
          justify-content: flex-start;
          font-size: 9px;
          margin-left: 8px;
          color: #666;
        }
        
        /* Promotions for 54mm */
        .item-promotion {
          display: block;
          font-size: 9px;
          margin-left: 8px;
          color: #28a745;
          font-style: italic;
          margin-top: 2px;
        }
        .item-notes {
          font-size: 9px;
          font-style: italic;
          margin-left: 8px;
          color: #666;
          word-wrap: break-word;
          margin-top: 2px;
        }
        
        /* Summary for 54mm */
        .print-summary {
          margin: 8px 0;
          font-size: 10px;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        .promotion-line {
          color: #28a745;
          font-weight: bold;
        }
        .total-line {
          font-weight: bold;
          font-size: 12px;
          border-top: 1px solid #000;
          padding-top: 4px;
          margin-top: 4px;
        }
        
        /* Payment status */
        .print-payment {
          margin: 8px 0;
          font-size: 10px;
        }
        .payment-status {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        
        /* Notes section */
        .print-notes {
          margin: 8px 0;
          font-size: 9px;
        }
        .print-notes h4 {
          font-size: 10px;
          margin: 0 0 4px 0;
        }
        .print-notes p {
          margin: 0;
          word-wrap: break-word;
        }
        
        /* Promotions section */
        .print-promotions {
          margin: 8px 0;
          font-size: 9px;
        }
        .print-promotions h4 {
          font-size: 10px;
          margin: 0 0 4px 0;
          text-align: center;
          color: #28a745;
        }
        .promotion-info {
          margin-bottom: 4px;
        }
        .promotion-row {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          color: #28a745;
        }
        
        /* Footer */
        .print-footer {
          text-align: center;
          margin-top: 8px;
          font-size: 9px;
        }
        .thank-you {
          font-weight: bold;
          font-size: 10px;
          margin: 4px 0 2px 0;
        }
        .print-time {
          font-size: 8px;
          margin: 0;
          color: #666;
        }
        
        /* Status colors */
        .payment-pending { color: #856404; }
        .payment-paid { color: #155724; }
        .payment-refunded { color: #721c24; }
        
        .no-items-print {
          text-align: center;
          padding: 8px;
          color: #666;
          font-style: italic;
          font-size: 9px;
        }
        
        /* Print media query - let printer handle width */
        @media print {
          body { 
            margin: 0; 
            padding: 2px;
            font-size: 11px;
          }
          .print-divider {
            margin: 4px 0;
          }
          .restaurant-name {
            font-size: 13px;
          }
          .total-line {
            font-size: 11px;
          }
          /* Make queue number even more prominent in print */
          .queue-number {
            font-size: 32px;
            font-weight: bold;
          }
          .queue-number-section {
            padding: 10px 0;
          }
        }
        
        /* Let content flow naturally */
        * {
          box-sizing: border-box;
        }
      `;
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue?vue&type=script&lang=js
 /* harmony default export */ var CAFE_printdialogvue_type_script_lang_js = (printdialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(562)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_printdialogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3400df41",
  "02b6a379"
  
)

/* harmony default export */ var printdialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(424);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(479);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab = __webpack_require__(626);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js
var VTabItem = __webpack_require__(627);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 2 modules
var VTabs = __webpack_require__(640);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js
var VTabsItems = __webpack_require__(532);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/member_offer/index.vue?vue&type=template&id=0539923e&scoped=true





























var member_offervue_type_template_id_0539923e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "900px",
      "persistent": "",
      "scrollable": ""
    },
    model: {
      value: _vm.dialogVisible,
      callback: function ($$v) {
        _vm.dialogVisible = $$v;
      },
      expression: "dialogVisible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-gift")]), _vm._v("\n        Member Offers Management\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_c(VTabs["a" /* default */], {
    attrs: {
      "background-color": "grey lighten-4"
    },
    model: {
      value: _vm.activeTab,
      callback: function ($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c(VTab["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-view-list")]), _vm._v("\n            Offers List\n          ")], 1), _vm._v(" "), _c(VTab["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n            Add New Offer\n          ")], 1)], 1), _vm._v(" "), _c(VTabsItems["a" /* default */], {
    model: {
      value: _vm.activeTab,
      callback: function ($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c(VTabItem["a" /* default */], [_c('div', {
    staticClass: "pa-4"
  }, [_vm.selectedMember ? _c(VCard["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center"
  }, [_c('div', [_c('h3', [_vm._v(_vm._s(_vm.selectedMember.name))]), _vm._v(" "), _c('p', {
    staticClass: "mb-0 grey--text"
  }, [_vm._v(_vm._s(_vm.selectedMember.company || 'No company'))])]), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.getClassColor(_vm.selectedMember.class),
      "text-color": "white",
      "small": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "x-small": ""
    }
  }, [_vm._v("mdi-star")]), _vm._v("\n                        " + _vm._s(_vm.selectedMember.class || 'BRONZE') + "\n                      ")], 1)], 1)])])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between align-center mb-3"
  }, [_c('h4', [_vm._v("Active Offers")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "small": ""
    },
    on: {
      "click": function ($event) {
        _vm.activeTab = 1;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n                  Add New Offer\n                ")], 1)], 1), _vm._v(" "), _vm.loadingOffers ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("Loading offers...")])], 1) : _vm.memberOffers.length > 0 ? _c('div', _vm._l(_vm.memberOffers, function (offer) {
    var _offer$category;
    return _c(VCard["a" /* default */], {
      key: offer.id,
      staticClass: "mb-3",
      attrs: {
        "outlined": "",
        "hover": ""
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-3"
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', {
      staticClass: "flex-grow-1"
    }, [_c('div', {
      staticClass: "d-flex align-center mb-2"
    }, [_c('h4', [_vm._v(_vm._s(offer.offerName))]), _vm._v(" "), _c(VChip["a" /* default */], {
      staticClass: "ml-2",
      attrs: {
        "color": offer.isActive ? 'success' : 'grey',
        "text-color": "white",
        "x-small": ""
      }
    }, [_vm._v("\n                            " + _vm._s(offer.isActive ? 'Active' : 'Inactive') + "\n                          ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "caption grey--text mb-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-tag")]), _vm._v("\n                          " + _vm._s(((_offer$category = offer.category) === null || _offer$category === void 0 ? void 0 : _offer$category.name) || 'Unknown Category') + "\n                        ")], 1), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-center"
    }, [_c('div', {
      staticClass: "mr-4"
    }, [_c('div', {
      staticClass: "caption grey--text"
    }, [_vm._v("Used / Allowed")]), _vm._v(" "), _c('div', {
      staticClass: "font-weight-bold"
    }, [_vm._v("\n                              " + _vm._s(offer.usedQty) + " / " + _vm._s(offer.allowedQty) + "\n                            ")])]), _vm._v(" "), _c('div', {
      staticClass: "mr-4"
    }, [_c('div', {
      staticClass: "caption grey--text"
    }, [_vm._v("Remaining")]), _vm._v(" "), _c('div', {
      staticClass: "font-weight-bold",
      class: _vm.getRemainingColor(offer)
    }, [_vm._v("\n                              " + _vm._s(offer.allowedQty - offer.usedQty) + "\n                            ")])]), _vm._v(" "), _c('div', [_c('div', {
      staticClass: "caption grey--text"
    }, [_vm._v("Valid Until")]), _vm._v(" "), _c('div', {
      staticClass: "font-weight-medium"
    }, [_vm._v("\n                              " + _vm._s(_vm.formatDate(offer.endDate)) + "\n                            ")])])]), _vm._v(" "), _c(VProgressLinear["a" /* default */], {
      staticClass: "mt-2",
      attrs: {
        "value": _vm.getUsagePercentage(offer),
        "color": _vm.getProgressColor(offer),
        "height": "6"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "ml-3"
    }, [_c(VMenu["a" /* default */], {
      attrs: {
        "bottom": "",
        "left": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function ({
          on,
          attrs
        }) {
          return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
            attrs: {
              "icon": "",
              "small": ""
            }
          }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
            attrs: {
              "small": ""
            }
          }, [_vm._v("mdi-dots-vertical")])], 1)];
        }
      }], null, true)
    }, [_vm._v(" "), _c(VList["a" /* default */], {
      attrs: {
        "dense": ""
      }
    }, [_c(VListItem["a" /* default */], {
      on: {
        "click": function ($event) {
          return _vm.editOffer(offer);
        }
      }
    }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "color": "warning"
      }
    }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("Edit")])], 1), _vm._v(" "), _c(VListItem["a" /* default */], {
      on: {
        "click": function ($event) {
          return _vm.toggleOfferStatus(offer);
        }
      }
    }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "color": offer.isActive ? 'grey' : 'success'
      }
    }, [_vm._v("\n                                  " + _vm._s(offer.isActive ? 'mdi-pause' : 'mdi-play') + "\n                                ")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("\n                                " + _vm._s(offer.isActive ? 'Deactivate' : 'Activate') + "\n                              ")])], 1), _vm._v(" "), _c(VListItem["a" /* default */], {
      on: {
        "click": function ($event) {
          return _vm.viewUsageHistory(offer);
        }
      }
    }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "color": "info"
      }
    }, [_vm._v("mdi-history")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("Usage History")])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VListItem["a" /* default */], {
      staticClass: "error--text",
      on: {
        "click": function ($event) {
          return _vm.deleteOffer(offer);
        }
      }
    }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "color": "error"
      }
    }, [_vm._v("mdi-delete")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("Delete")])], 1)], 1)], 1)], 1)])])], 1);
  }), 1) : _c('div', {
    staticClass: "text-center pa-6"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey"
    }
  }, [_vm._v("mdi-gift-outline")]), _vm._v(" "), _c('p', {
    staticClass: "mt-3 grey--text"
  }, [_vm._v("No offers found for this member")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": function ($event) {
        _vm.activeTab = 1;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n                  Create First Offer\n                ")], 1)], 1)], 1)]), _vm._v(" "), _c(VTabItem["a" /* default */], [_c('div', {
    staticClass: "pa-4"
  }, [_c('h3', {
    staticClass: "mb-4"
  }, [_vm._v(_vm._s(_vm.editingOffer ? 'Edit Offer' : 'Create New Offer'))]), _vm._v(" "), _c(VForm["a" /* default */], {
    ref: "offerForm",
    model: {
      value: _vm.offerFormValid,
      callback: function ($$v) {
        _vm.offerFormValid = $$v;
      },
      expression: "offerFormValid"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Offer Name *",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.required],
      "placeholder": "e.g. '10 Free Drinks'"
    },
    model: {
      value: _vm.offerForm.offerName,
      callback: function ($$v) {
        _vm.$set(_vm.offerForm, "offerName", $$v);
      },
      expression: "offerForm.offerName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.categories,
      "item-text": "categ_name",
      "item-value": "categ_id",
      "label": "Category *",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.required],
      "loading": _vm.loadingCategories
    },
    model: {
      value: _vm.offerForm.categoryId,
      callback: function ($$v) {
        _vm.$set(_vm.offerForm, "categoryId", $$v);
      },
      expression: "offerForm.categoryId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Allowed Quantity *",
      "type": "number",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.required, _vm.rules.positiveNumber],
      "min": "1"
    },
    model: {
      value: _vm.offerForm.allowedQty,
      callback: function ($$v) {
        _vm.$set(_vm.offerForm, "allowedQty", $$v);
      },
      expression: "offerForm.allowedQty"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Start Date *",
      "type": "date",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.required]
    },
    model: {
      value: _vm.offerForm.startDate,
      callback: function ($$v) {
        _vm.$set(_vm.offerForm, "startDate", $$v);
      },
      expression: "offerForm.startDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "End Date *",
      "type": "date",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.required, _vm.rules.endDateAfterStart]
    },
    model: {
      value: _vm.offerForm.endDate,
      callback: function ($$v) {
        _vm.$set(_vm.offerForm, "endDate", $$v);
      },
      expression: "offerForm.endDate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Offer is Active",
      "color": "success",
      "inset": ""
    },
    model: {
      value: _vm.offerForm.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.offerForm, "isActive", $$v);
      },
      expression: "offerForm.isActive"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-end mt-4"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.cancelOfferForm
    }
  }, [_vm._v("\n                  Cancel\n                ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "disabled": !_vm.offerFormValid,
      "loading": _vm.savingOffer
    },
    on: {
      "click": _vm.saveOffer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n                  " + _vm._s(_vm.editingOffer ? 'Update Offer' : 'Create Offer') + "\n                ")], 1)], 1)], 1)])], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "700px",
      "scrollable": ""
    },
    model: {
      value: _vm.showUsageHistory,
      callback: function ($$v) {
        _vm.showUsageHistory = $$v;
      },
      expression: "showUsageHistory"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "info white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-history")]), _vm._v("\n        Usage History\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": function ($event) {
        _vm.showUsageHistory = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.loadingUsageHistory ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("Loading usage history...")])], 1) : _vm.usageHistory.length > 0 ? _c('div', [_c(VList["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, _vm._l(_vm.usageHistory, function (usage) {
    var _usage$product;
    return _c(VListItem["a" /* default */], {
      key: usage.id,
      staticClass: "border-bottom"
    }, [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
      staticClass: "d-flex justify-space-between"
    }, [_c('span', [_vm._v(_vm._s(((_usage$product = usage.product) === null || _usage$product === void 0 ? void 0 : _usage$product.name) || 'Product N/A'))]), _vm._v(" "), _c('span', {
      staticClass: "success--text font-weight-bold"
    }, [_vm._v("\n                    -" + _vm._s(usage.qtyUsed) + " items\n                  ")])]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_c('div', {
      staticClass: "d-flex justify-space-between"
    }, [_c('span', [_vm._v(_vm._s(_vm.formatDateTime(usage.usedDate)))]), _vm._v(" "), usage.originalPrice ? _c('span', {
      staticClass: "orange--text"
    }, [_vm._v("\n                      Saved: $" + _vm._s(parseFloat(usage.originalPrice).toFixed(2)) + "\n                    ")]) : _vm._e()])])], 1)], 1);
  }), 1)], 1) : _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey"
    }
  }, [_vm._v("mdi-history")]), _vm._v(" "), _c('p', {
    staticClass: "mt-2 grey--text"
  }, [_vm._v("No usage history found")])], 1)])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/member_offer/index.vue?vue&type=template&id=0539923e&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/member_offer/index.vue?vue&type=script&lang=js
/* harmony default export */ var member_offervue_type_script_lang_js = ({
  name: 'MemberOfferDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    selectedMember: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      activeTab: 0,
      loadingOffers: false,
      loadingCategories: false,
      loadingUsageHistory: false,
      savingOffer: false,
      memberOffers: [],
      categories: [],
      usageHistory: [],
      showUsageHistory: false,
      selectedOfferForHistory: null,
      editingOffer: null,
      offerFormValid: false,
      offerForm: {
        offerName: '',
        categoryId: null,
        allowedQty: 1,
        startDate: '',
        endDate: '',
        isActive: true
      },
      rules: {
        required: value => !!value || 'This field is required',
        positiveNumber: value => value > 0 || 'Must be greater than 0',
        endDateAfterStart: value => {
          if (!this.offerForm.startDate || !value) return true;
          return new Date(value) > new Date(this.offerForm.startDate) || 'End date must be after start date';
        }
      }
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.closeDialog();
        }
      }
    }
  },
  watch: {
    show(newVal) {
      if (newVal && this.selectedMember) {
        this.loadMemberOffers();
        this.loadCategories();
        this.setDefaultDates();
      }
    }
  },
  methods: {
    async loadMemberOffers() {
      var _this$selectedMember;
      if (!((_this$selectedMember = this.selectedMember) !== null && _this$selectedMember !== void 0 && _this$selectedMember.id)) return;
      this.loadingOffers = true;
      try {
        const response = await this.$axios.get(`/api/member-offers/member/${this.selectedMember.id}/active`);
        this.memberOffers = response.data.data || [];
      } catch (error) {
        console.error('Error loading member offers:', error);
        this.$toast.error('Error loading member offers');
      } finally {
        this.loadingOffers = false;
      }
    },
    async loadCategories() {
      this.loadingCategories = true;
      try {
        // Adjust the endpoint based on your API
        const response = await this.$axios.get('/api/category/find');
        this.categories = response.data.data || response.data || [];
      } catch (error) {
        console.error('Error loading categories:', error);
        this.$toast.error('Error loading categories');
        this.categories = [];
      } finally {
        this.loadingCategories = false;
      }
    },
    async saveOffer() {
      if (!this.offerFormValid) return;
      this.savingOffer = true;
      try {
        const offerData = {
          memberId: this.selectedMember.id,
          ...this.offerForm,
          allowedQty: parseInt(this.offerForm.allowedQty)
        };
        let response;
        if (this.editingOffer) {
          response = await this.$axios.put(`/api/member-offers/${this.editingOffer.id}`, offerData);
          this.$toast.success('Offer updated successfully');
        } else {
          response = await this.$axios.post('/api/member-offers', offerData);
          this.$toast.success('Offer created successfully');
        }
        this.cancelOfferForm();
        this.loadMemberOffers();
        this.activeTab = 0;
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving offer:', error);
        this.$toast.error(((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Error saving offer');
      } finally {
        this.savingOffer = false;
      }
    },
    editOffer(offer) {
      this.editingOffer = offer;
      this.offerForm = {
        offerName: offer.offerName,
        categoryId: offer.categoryId,
        allowedQty: offer.allowedQty,
        startDate: offer.startDate,
        endDate: offer.endDate,
        isActive: offer.isActive
      };
      this.activeTab = 1;
    },
    async toggleOfferStatus(offer) {
      try {
        await this.$axios.patch(`/api/member-offers/${offer.id}/toggle-status`);
        this.$toast.success(`Offer ${offer.isActive ? 'deactivated' : 'activated'} successfully`);
        this.loadMemberOffers();
      } catch (error) {
        console.error('Error toggling offer status:', error);
        this.$toast.error('Error updating offer status');
      }
    },
    async deleteOffer(offer) {
      const confirmed = await this.$swal.fire({
        title: 'Delete Offer?',
        text: `Are you sure you want to delete "${offer.offerName}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      });
      if (confirmed.isConfirmed) {
        try {
          await this.$axios.delete(`/api/member-offers/${offer.id}`);
          this.$toast.success('Offer deleted successfully');
          this.loadMemberOffers();
        } catch (error) {
          console.error('Error deleting offer:', error);
          this.$toast.error('Error deleting offer');
        }
      }
    },
    async viewUsageHistory(offer) {
      this.selectedOfferForHistory = offer;
      this.showUsageHistory = true;
      this.loadingUsageHistory = true;
      try {
        const response = await this.$axios.get(`/api/member-offer-usage/offer/${offer.id}`);
        this.usageHistory = response.data.data || [];
      } catch (error) {
        console.error('Error loading usage history:', error);
        this.$toast.error('Error loading usage history');
        this.usageHistory = [];
      } finally {
        this.loadingUsageHistory = false;
      }
    },
    cancelOfferForm() {
      this.editingOffer = null;
      this.offerForm = {
        offerName: '',
        categoryId: null,
        allowedQty: 1,
        startDate: '',
        endDate: '',
        isActive: true
      };
      this.setDefaultDates();
      if (this.$refs.offerForm) {
        this.$refs.offerForm.resetValidation();
      }
    },
    setDefaultDates() {
      const today = new Date();
      const nextMonth = new Date(today);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      this.offerForm.startDate = today.toISOString().split('T')[0];
      this.offerForm.endDate = nextMonth.toISOString().split('T')[0];
    },
    closeDialog() {
      this.activeTab = 0;
      this.cancelOfferForm();
      this.showUsageHistory = false;
      this.$emit('close');
    },
    getClassColor(customerClass) {
      const colors = {
        BRONZE: 'brown',
        SILVER: 'grey',
        GOLD: 'amber',
        PLATINUM: 'blue-grey',
        DIAMOND: 'purple'
      };
      return colors[customerClass] || 'grey';
    },
    getRemainingColor(offer) {
      const remaining = offer.allowedQty - offer.usedQty;
      const percentage = remaining / offer.allowedQty;
      if (percentage <= 0.2) return 'red--text';
      if (percentage <= 0.5) return 'orange--text';
      return 'green--text';
    },
    getUsagePercentage(offer) {
      return offer.usedQty / offer.allowedQty * 100;
    },
    getProgressColor(offer) {
      const percentage = this.getUsagePercentage(offer);
      if (percentage >= 80) return 'red';
      if (percentage >= 50) return 'orange';
      return 'green';
    },
    formatDate(date) {
      if (!date) return '';
      try {
        return new Date(date).toLocaleDateString('en-GB');
      } catch (error) {
        return date;
      }
    },
    formatDateTime(date) {
      if (!date) return '';
      try {
        return new Date(date).toLocaleString('en-GB');
      } catch (error) {
        return date;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/member_offer/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_member_offervue_type_script_lang_js = (member_offervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/member_offer/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(542)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_member_offervue_type_script_lang_js,
  member_offervue_type_template_id_0539923e_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "0539923e",
  "04ce1fad"
  
)

/* harmony default export */ var member_offer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3400df41_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(522);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3400df41_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3400df41_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3400df41_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3400df41_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-3400df41]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.print-dialog-content[data-v-3400df41]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:600px;overflow-y:auto;width:100%}.print-dialog-header[data-v-3400df41]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:20px 24px}.print-dialog-header h2[data-v-3400df41]{color:#333;font-size:20px;margin:0}.close-btn[data-v-3400df41]{align-items:center;background:none;border:none;border-radius:50%;color:#6c757d;cursor:pointer;display:flex;font-size:28px;height:32px;justify-content:center;padding:0;transition:all .2s;width:32px}.close-btn[data-v-3400df41]:hover{background:#e9ecef;color:#333}.print-preview[data-v-3400df41]{background:#fff;color:#000;font-family:\"Courier New\",monospace;font-size:13px;line-height:1.4;padding:24px}.print-header[data-v-3400df41]{margin-bottom:20px}.header-row[data-v-3400df41]{align-items:flex-start;display:flex;gap:20px}.queue-section[data-v-3400df41]{background:linear-gradient(135deg,#000,#333);border:3px solid #333;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.3);color:#fff;flex:0 0 16.67%;padding:15px 10px;text-align:center}.queue-number[data-v-3400df41]{font-size:28px;font-weight:700;letter-spacing:2px;line-height:1;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.5)}.queue-label[data-v-3400df41]{color:#ccc;font-size:11px;letter-spacing:1px;margin:5px 0 0;text-transform:uppercase}.company-section[data-v-3400df41]{flex:1;padding:10px 20px;text-align:center}.restaurant-name[data-v-3400df41]{color:#333;font-size:22px;font-weight:700;margin:0 0 8px;text-align:center}.restaurant-address[data-v-3400df41]{color:#666;font-size:14px;line-height:1.3;margin:0 0 4px;text-align:center}.contact-line[data-v-3400df41]{color:#666;font-size:12px;margin:4px 0;text-align:center}.print-ticket-info[data-v-3400df41]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;gap:20px;margin-bottom:15px}.detail-row[data-v-3400df41]{display:flex;font-size:13px;justify-content:space-between;margin-bottom:4px}.detail-label[data-v-3400df41]{color:#333;font-weight:700}.detail-value[data-v-3400df41]{color:#000}.print-divider[data-v-3400df41]{border-top:2px dashed #333;margin:20px 0}.print-items[data-v-3400df41]{margin-bottom:20px}.section-title[data-v-3400df41]{color:#333;font-size:16px;font-weight:700;margin:0 0 15px;text-align:center}.print-item[data-v-3400df41]{border-bottom:1px dotted #ccc;margin-bottom:12px;padding-bottom:8px}.print-item[data-v-3400df41]:last-child{border-bottom:none}.item-main[data-v-3400df41]{display:flex;font-weight:700;justify-content:space-between;margin-bottom:2px}.item-name[data-v-3400df41]{color:#333}.item-price[data-v-3400df41]{color:#000}.item-details[data-v-3400df41]{color:#666;display:flex;font-size:12px;justify-content:space-between;margin-left:15px}.item-promotion[data-v-3400df41]{color:#28a745;display:flex;justify-content:space-between}.item-notes[data-v-3400df41],.item-promotion[data-v-3400df41]{font-size:11px;font-style:italic;margin-left:15px;margin-top:4px}.item-notes[data-v-3400df41]{color:#888}.no-items-print[data-v-3400df41]{color:#666;font-style:italic;padding:20px;text-align:center}.print-summary[data-v-3400df41]{margin:20px 0}.summary-line[data-v-3400df41]{display:flex;font-size:14px;justify-content:space-between;margin-bottom:4px}.promotion-line[data-v-3400df41]{color:#28a745!important;font-weight:700}.total-line[data-v-3400df41]{border-top:2px solid #333;font-size:18px;font-weight:700;margin-top:12px;padding-top:8px}.print-promotions[data-v-3400df41]{background:rgba(40,167,69,.05);border:1px dashed #28a745;border-radius:4px;margin:20px 0;padding:10px}.print-promotions h4[data-v-3400df41]{color:#28a745;font-size:14px;font-weight:700;margin:0 0 10px;text-align:center}.promotion-info[data-v-3400df41]{margin-bottom:8px}.promotion-row[data-v-3400df41]{color:#28a745;display:flex;font-weight:700;justify-content:space-between;margin-bottom:2px}.print-payment[data-v-3400df41]{margin:20px 0}.payment-status[data-v-3400df41]{display:flex;font-size:14px;font-weight:700;justify-content:space-between;margin-bottom:8px}.payment-value.payment-pending[data-v-3400df41]{color:#856404}.payment-value.payment-paid[data-v-3400df41]{color:#155724}.payment-value.payment-refunded[data-v-3400df41]{color:#721c24}.print-notes[data-v-3400df41]{margin:20px 0}.print-notes h4[data-v-3400df41]{color:#333;font-size:14px;font-weight:700;margin:0 0 8px}.print-notes p[data-v-3400df41]{background:#f8f9fa;border-left:4px solid #ffc107;border-radius:4px;color:#000;font-size:13px;margin:0;padding:10px}.print-footer[data-v-3400df41]{margin-top:30px;text-align:center}.thank-you[data-v-3400df41]{color:#333;font-size:16px;font-weight:700;margin:15px 0 10px}.print-time[data-v-3400df41]{color:#888;font-size:11px;margin:0}.print-dialog-actions[data-v-3400df41]{background:#f8f9fa;border-radius:0 0 12px 12px;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.print-btn[data-v-3400df41]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;padding:12px 24px;transition:all .2s}.print-primary[data-v-3400df41]{background:#007bff;color:#fff}.print-primary[data-v-3400df41]:disabled{background:#6c757d;cursor:not-allowed}.print-secondary[data-v-3400df41]{background:#6c757d;color:#fff}.print-btn[data-v-3400df41]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VChipGroup_VChipGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(508);
/* harmony import */ var _src_components_VChipGroup_VChipGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChipGroup_VChipGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSlideGroup_VSlideGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(484);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
// Styles
 // Extensions

 // Mixins

 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_VSlideGroup_VSlideGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseSlideGroup */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'v-chip-group',
  provide() {
    return {
      chipGroup: this
    };
  },
  props: {
    column: Boolean
  },
  computed: {
    classes() {
      return {
        ..._VSlideGroup_VSlideGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseSlideGroup */ "a"].options.computed.classes.call(this),
        'v-chip-group': true,
        'v-chip-group--column': this.column
      };
    }
  },
  watch: {
    column(val) {
      if (val) this.scrollOffset = 0;
      this.$nextTick(this.onResize);
    }
  },
  methods: {
    genData() {
      return this.setTextColor(this.color, {
        ..._VSlideGroup_VSlideGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseSlideGroup */ "a"].options.methods.genData.call(this)
      });
    }
  }
}));

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-301a3b30]{cursor:pointer}.payment-card[data-v-301a3b30]{transition:all .2s ease}.payment-card[data-v-301a3b30]:hover{transform:translateY(-1px)}.text-none[data-v-301a3b30]{text-transform:none!important}.quick-cash-chips .v-chip[data-v-301a3b30]{margin:2px!important}.quick-cash-chips .v-chip[data-v-301a3b30]:hover{transform:scale(1.05);transition:transform .2s ease}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_952c565a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(524);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_952c565a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_952c565a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_952c565a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_952c565a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-952c565a]{cursor:pointer}.customer-card[data-v-952c565a]{border:2px solid transparent;transition:all .3s ease}.customer-card[data-v-952c565a]:hover{border-color:rgba(25,118,210,.3);transform:translateY(-1px)}.selected-customer[data-v-952c565a]{background-color:rgba(25,118,210,.1);border-color:#1976d2!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesDialog_vue_vue_type_style_index_0_id_ccdaad86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(525);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesDialog_vue_vue_type_style_index_0_id_ccdaad86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesDialog_vue_vue_type_style_index_0_id_ccdaad86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesDialog_vue_vue_type_style_index_0_id_ccdaad86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesDialog_vue_vue_type_style_index_0_id_ccdaad86_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-ccdaad86]{cursor:pointer}.cursor-pointer[data-v-ccdaad86]:hover{opacity:.8}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChipGroup/VChipGroup.js
var VChipGroup = __webpack_require__(564);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/paymentDialogFront/index.vue?vue&type=template&id=301a3b30&scoped=true


















var paymentDialogFrontvue_type_template_id_301a3b30_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800",
      "persistent": ""
    },
    model: {
      value: _vm.showDialog,
      callback: function ($$v) {
        _vm.showDialog = $$v;
      },
      expression: "showDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white",
      "size": "20"
    }
  }, [_vm._v("mdi-credit-card")]), _vm._v("\n        Payment - Table " + _vm._s(_vm.tableNumber) + " Ticket - ID " + _vm._s(_vm.ticketId) + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "text-h6 font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.amount)))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "icon": "",
      "color": "white",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "20"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VRow["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "text-none",
    attrs: {
      "block": "",
      "color": _vm.isCustomerDisplayOpen() ? 'success' : 'primary'
    },
    on: {
      "click": function ($event) {
        return _vm.showQROnCustomerScreen('manual');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "20"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.isCustomerDisplayOpen() ? 'mdi-monitor-eye' : 'mdi-monitor-multiple') + "\n              ")]), _vm._v("\n              " + _vm._s(_vm.isCustomerDisplayOpen() ? 'Update Display' : 'Open Display') + "\n            ")], 1)], 1), _vm._v(" "),  false ? undefined : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "text-none",
    attrs: {
      "block": "",
      "disabled": !_vm.isCustomerDisplayOpen(),
      "color": "grey"
    },
    on: {
      "click": _vm.closeCustomerDisplayWindow
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "20"
    }
  }, [_vm._v("mdi-monitor-off")]), _vm._v("\n              Close Display\n            ")], 1)], 1)], 1), _vm._v(" "), _vm.paymentLoading ? _c('div', {
    staticClass: "text-center py-2"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "32",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "caption mt-1"
  }, [_vm._v("Loading...")])], 1) : _c('div', [_c('div', {
    staticClass: "subtitle-2 mb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "18"
    }
  }, [_vm._v("mdi-wallet")]), _vm._v("\n            Payment Method\n          ")], 1), _vm._v(" "), _vm.paymentMethods.length > 0 ? _c('div', [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, _vm._l(_vm.paymentMethods, function (payment) {
    var _vm$selectedPaymentMe, _vm$selectedPaymentMe2, _vm$selectedPaymentMe3;
    return _c(VCol["a" /* default */], {
      key: payment.id,
      staticClass: "pa-1",
      attrs: {
        "cols": "4"
      }
    }, [_c(VCard["a" /* default */], {
      class: ['payment-card cursor-pointer text-center', ((_vm$selectedPaymentMe = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe === void 0 ? void 0 : _vm$selectedPaymentMe.id) === payment.id ? 'white--text elevation-3' : 'elevation-1'],
      attrs: {
        "color": ((_vm$selectedPaymentMe2 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe2 === void 0 ? void 0 : _vm$selectedPaymentMe2.id) === payment.id ? _vm.getPaymentColor(payment.payment_code) : '',
        "hover": "",
        "height": "70"
      },
      on: {
        "click": function ($event) {
          return _vm.selectPaymentMethod(payment);
        }
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "color": ((_vm$selectedPaymentMe3 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe3 === void 0 ? void 0 : _vm$selectedPaymentMe3.id) === payment.id ? 'white' : _vm.getPaymentColor(payment.payment_code),
        "size": "24"
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.getPaymentIcon(payment.payment_code)) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "caption font-weight-medium mt-1"
    }, [_vm._v("\n                      " + _vm._s(payment.payment_name) + "\n                    ")])], 1)], 1)], 1);
  }), 1), _vm._v(" "), _c(transitions["a" /* VExpandTransition */], [_vm.isCashPayment ? _c('div', {
    staticClass: "mt-3"
  }, [_c(VDivider["a" /* default */], {
    staticClass: "mb-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "subtitle-2 mb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "18",
      "color": "green"
    }
  }, [_vm._v("mdi-cash")]), _vm._v("\n                  Cash Payment Details\n                ")], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Cash Received",
      "suffix": '₭',
      "outlined": "",
      "dense": "",
      "rules": _vm.cashRules,
      "prepend-inner-icon": "mdi-cash-plus",
      "hint": "Enter amount received from customer",
      "persistent-hint": "",
      "placeholder": "0"
    },
    on: {
      "input": _vm.onCashInput,
      "blur": _vm.formatCashDisplay
    },
    model: {
      value: _vm.cashReceivedFormatted,
      callback: function ($$v) {
        _vm.cashReceivedFormatted = $$v;
      },
      expression: "cashReceivedFormatted"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3 text-center white--text",
    attrs: {
      "color": _vm.changeAmount >= 0 ? 'success' : 'error',
      "elevation": _vm.changeAmount !== 0 ? 3 : 1
    }
  }, [_c('div', {
    staticClass: "caption"
  }, [_vm._v("CHANGE")]), _vm._v(" "), _c('div', {
    staticClass: "text-h6 font-weight-bold"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatPrice(Math.abs(_vm.changeAmount))) + "\n                      ")]), _vm._v(" "), _vm.changeAmount < 0 ? _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "color": "white"
    }
  }, [_vm._v("mdi-alert")]), _vm._v("\n                        Insufficient\n                      ")], 1) : _vm.changeAmount > 0 ? _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "color": "white"
    }
  }, [_vm._v("mdi-arrow-up")]), _vm._v("\n                        To Return\n                      ")], 1) : _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "color": "white"
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n                        Exact Amount\n                      ")], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mt-2"
  }, [_c('div', {
    staticClass: "caption mb-1 grey--text"
  }, [_vm._v("Quick amounts:")]), _vm._v(" "), _c(VChipGroup["a" /* default */], {
    staticClass: "quick-cash-chips"
  }, _vm._l(_vm.getQuickCashAmounts(), function (quickAmount) {
    return _c(VChip["a" /* default */], {
      key: quickAmount,
      staticClass: "ma-1",
      attrs: {
        "small": "",
        "outlined": "",
        "color": "success"
      },
      on: {
        "click": function ($event) {
          return _vm.setCashReceived(quickAmount);
        }
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.formatPrice(quickAmount, false)) + "₭\n                    ")]);
  }), 1)], 1)], 1) : _vm._e()])], 1) : _c('div', [_c(VAlert["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "type": "warning",
      "dense": ""
    }
  }, [_vm._v("\n              No payment methods available\n              "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "x-small": "",
      "color": "warning"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('reload-payment-methods');
      }
    }
  }, [_vm._v("\n                Retry\n              ")])], 1)], 1)])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-3"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "text-none",
    attrs: {
      "color": "success",
      "disabled": !_vm.isPaymentValid || _vm.actionLoading,
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.confirmPayment
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "18"
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n          Process Payment\n        ")], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400",
      "persistent": ""
    },
    model: {
      value: _vm.showQRDialog,
      callback: function ($$v) {
        _vm.showQRDialog = $$v;
      },
      expression: "showQRDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "white--text py-2",
    staticStyle: {
      "background-color": "primary !important"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white",
      "size": "20"
    }
  }, [_vm._v("mdi-qrcode")]), _vm._v("\n        QR Payment\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.amount)))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": function ($event) {
        _vm.showQRDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "20"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4 text-center"
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2 mb-3",
    staticStyle: {
      "border-color": "primary !important"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('img', {
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "display": "block",
      "margin": "0 auto"
    },
    attrs: {
      "src": _vm.qrCodeUrl,
      "alt": "QR Payment Code"
    },
    on: {
      "error": _vm.onQRError
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "caption grey--text mb-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n          Scan with mobile banking app\n        ")], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "primary !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.downloadQR
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-download")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "primary !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.shareQR
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-share")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "primary !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.copyQRString
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v(_vm._s(_vm.copied ? 'mdi-check' : 'mdi-content-copy'))])], 1)], 1)], 1)], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue?vue&type=template&id=301a3b30&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/paymentDialogFront/index.vue?vue&type=script&lang=js

/* harmony default export */ var paymentDialogFrontvue_type_script_lang_js = ({
  name: 'PaymentDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    amount: {
      type: Number,
      default: 0
    },
    ticketId: {
      type: Number,
      default: 0
    },
    tableNumber: {
      type: [String, Number],
      default: ''
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    paymentLoading: {
      type: Boolean,
      default: false
    },
    actionLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      qrRefreshInterval: null,
      // store interval id so we can clear later
      selectedPaymentMethod: null,
      showQRDialog: false,
      copied: false,
      qrString: '00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405100005802LA5907KHAMMAO6260011713a321asS321as2250302120713te rminal000010812test remarks63041c9f',
      // Cash payment fields
      cashReceived: 0,
      cashReceivedFormatted: '',
      changeAmount: 0,
      cashRules: [v => !!this.cashReceived || 'Cash received amount is required', v => this.cashReceived >= 0 || 'Amount must be positive', v => this.cashReceived >= this.amount || `Insufficient amount (minimum: ${this.formatPrice(this.amount)})`],
      // Customer display window reference
      customerDisplayWindow: null
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findSelectedTerminal: 'findSelectedTerminal'
    }),
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    companyInfo() {
      var _this$currentTerminal, _this$currentTerminal2;
      const company = (_this$currentTerminal = this.currentTerminal) === null || _this$currentTerminal === void 0 ? void 0 : (_this$currentTerminal2 = _this$currentTerminal.location) === null || _this$currentTerminal2 === void 0 ? void 0 : _this$currentTerminal2.company;
      if (!company) {
        return {
          name: 'Restaurant Name',
          address: '123 Main Street<br>City, State 12345',
          tel: '',
          email: '',
          bank: '',
          accountName: '',
          accounts: '',
          remark: ''
        };
      }
      let formattedAddress = '';
      if (company.address) formattedAddress += company.address;
      if (company.village) formattedAddress += `<br>${company.village}`;
      if (company.district) formattedAddress += `, ${company.district}`;
      if (company.province) formattedAddress += `, ${company.province}`;
      return {
        name: company.name || 'Restaurant Name',
        address: formattedAddress || company.address || '',
        tel: company.tel || '',
        email: company.email || '',
        bank: company.bank || '',
        accountName: company.accountName || '',
        accounts: company.accounts || '',
        remark: company.remark || ''
      };
    },
    showDialog: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) this.closeDialog();
      }
    },
    qrCodeUrl() {
      const encodedString = encodeURIComponent(this.currentQRString.replace(/\s/g, ''));
      return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedString}&format=png&margin=10&color=01532B&bgcolor=ffffff`;
    },
    currentQRString() {
      return this.generateQRString();
    },
    // Check if selected payment method is cash
    isCashPayment() {
      var _this$selectedPayment;
      return this.selectedPaymentMethod && (this.selectedPaymentMethod.payment_code === 'CASH' || ((_this$selectedPayment = this.selectedPaymentMethod.payment_name) === null || _this$selectedPayment === void 0 ? void 0 : _this$selectedPayment.toLowerCase().includes('cash')));
    },
    // Validate payment based on method type
    isPaymentValid() {
      if (!this.selectedPaymentMethod) return false;
      if (this.isCashPayment) {
        return this.cashReceived && this.cashReceived >= this.amount && this.changeAmount >= 0;
      }
      return true; // Non-cash payments are valid once method is selected
    }
  },
  watch: {
    // Watch for dialog opening/closing
    show: {
      handler(newVal, oldVal) {
        if (newVal && !oldVal) {
          // Dialog just opened
          this.onDialogOpened();
        } else if (!newVal && oldVal) {
          // Dialog just closed
          this.onDialogClosed();
        }
      },
      immediate: false
    },
    // Also watch for changes in amount, tableNumber, or ticketId while dialog is open
    amount: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
          this.calculateChange(); // Recalculate change when amount changes
        }
      }
    },
    tableNumber: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
        }
      }
    },
    ticketId: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
        }
      }
    },
    // Watch for payment method changes
    selectedPaymentMethod: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          // Reset cash fields when switching payment methods
          if (!this.isCashPayment) {
            this.cashReceived = 0;
            this.cashReceivedFormatted = '';
            this.changeAmount = 0;
          } else {
            // Auto-fill exact amount for cash payments
            this.setCashReceived(this.amount);
          }
        }
      }
    }
  },
  mounted() {
    // Only update customer screen if dialog is already open when component mounts
    if (this.show) {
      this.onDialogOpened();
    }
  },
  beforeDestroy() {
    // Clean up intervals and hide QR from customer screen
    this.cleanup();
  },
  methods: {
    onDialogOpened() {
      console.log('Payment dialog opened - updating customer screen');

      // Immediately show QR on customer screen
      this.showQROnCustomerScreen();

      // Optional: Set up auto-refresh interval
      this.startAutoRefresh();

      // Emit event for parent component if needed
      this.$emit('dialog-opened');
    },
    onDialogClosed() {
      console.log('Payment dialog closed - cleaning up');
      this.cleanup();
      this.resetComponent();
    },
    startAutoRefresh() {
      // Clear any existing interval
      if (this.qrRefreshInterval) {
        clearInterval(this.qrRefreshInterval);
      }

      // Set up auto-refresh every 30 seconds (adjust as needed)
      this.qrRefreshInterval = setInterval(() => {
        if (this.show) {
          console.log('Auto-refreshing customer screen QR');
          this.showQROnCustomerScreen();
        }
      }, 30000); // 30 seconds
    },
    cleanup() {
      // Clear auto-refresh interval
      if (this.qrRefreshInterval) {
        clearInterval(this.qrRefreshInterval);
        this.qrRefreshInterval = null;
      }

      // Hide QR from customer screen but keep window open
      this.hideQRFromCustomerScreen();

      // Note: We deliberately do NOT close the customer display window here
      // so it can be reused for subsequent payments
      console.log('Payment dialog cleanup - keeping customer display window open');
    },
    updateCustomerScreen() {
      // Debounced update to avoid too many rapid updates
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }
      this.updateTimeout = setTimeout(() => {
        if (this.show) {
          console.log('Updating customer screen due to data change');
          this.showQROnCustomerScreen();
        }
      }, 500); // 500ms debounce
    },
    // Updated method to handle payment method selection
    selectPaymentMethod(payment) {
      this.selectedPaymentMethod = payment;
    },
    // Calculate change amount
    calculateChange() {
      this.changeAmount = this.cashReceived - this.amount;
    },
    // Handle cash input with real-time formatting
    onCashInput(value) {
      // Remove all non-numeric characters except decimal point
      const numericValue = value.replace(/[^\d.]/g, '');

      // Convert to number and update the actual value
      this.cashReceived = parseFloat(numericValue) || 0;

      // Format for display with thousand separators
      this.cashReceivedFormatted = this.formatNumberWithCommas(numericValue);

      // Calculate change
      this.calculateChange();
    },
    // Format display when field loses focus
    formatCashDisplay() {
      if (this.cashReceived > 0) {
        this.cashReceivedFormatted = this.formatNumberWithCommas(this.cashReceived.toString());
      }
    },
    // Format number with thousand separators
    formatNumberWithCommas(value) {
      if (!value) return '';

      // Handle decimal numbers
      const parts = value.toString().split('.');
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      // Return with decimal part if it exists
      return parts[1] !== undefined ? `${integerPart}.${parts[1]}` : integerPart;
    },
    // Set cash received amount from quick buttons
    setCashReceived(amount) {
      this.cashReceived = amount;
      this.cashReceivedFormatted = this.formatNumberWithCommas(amount.toString());
      this.calculateChange();
    },
    // Generate quick cash amount suggestions
    getQuickCashAmounts() {
      const ticketAmount = this.amount;
      const amounts = [];

      // Add exact amount
      amounts.push(ticketAmount);

      // Add common bill denominations above the ticket amount
      const commonBills = [20000, 50000, 100000, 200000, 500000];
      commonBills.forEach(bill => {
        if (bill > ticketAmount && !amounts.includes(bill)) {
          amounts.push(bill);
        }
      });

      // Add rounded amounts
      const roundedUp = Math.ceil(ticketAmount / 10000) * 10000;
      if (roundedUp > ticketAmount && !amounts.includes(roundedUp)) {
        amounts.push(roundedUp);
      }
      return amounts.slice(0, 4); // Limit to 4 suggestions
    },
    showQROnCustomerScreen() {
      const qrData = {
        amount: this.amount,
        tableNumber: this.tableNumber,
        ticketId: this.ticketId,
        qrString: this.generateQRString(),
        timestamp: Date.now()
      };

      // Try to open customer display window on second monitor
      this.openCustomerDisplayWindow(qrData);

      // Fallback: Use localStorage for existing customer display windows
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'SHOW_QR_PAYMENT',
        data: qrData
      }));
      window.dispatchEvent(new Event('storage'));

      // Only show success message if manually clicked (not auto-update)
      if (arguments.length > 0 && arguments[0] === 'manual') {
        this.$emit('show-message', `QR displayed on customer screen`, 'success', 'mdi-qrcode');
      }
    },
    async openCustomerDisplayWindow(qrData) {
      try {
        // Check if customer display window already exists and is still open
        if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
          console.log('Customer display window already open, updating content');
          this.updateExistingCustomerWindow(qrData);
          return;
        }

        // Check if there's a global reference to the customer display window
        if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
          console.log('Using existing global customer display window');
          this.customerDisplayWindow = window.globalCustomerDisplayWindow;
          this.updateExistingCustomerWindow(qrData);
          return;
        }
        console.log('Opening new customer display window...');

        // Get available screens/monitors
        const screens = await this.getAvailableScreens();

        // Determine target screen (second monitor if available)
        const targetScreen = screens.length > 1 ? screens[1] : screens[0];

        // Calculate window position and size for target screen
        const windowFeatures = this.calculateWindowFeatures(targetScreen);

        // Open new customer display window
        this.customerDisplayWindow = window.open(this.getCustomerDisplayURL(), 'customerDisplay', windowFeatures);
        if (this.customerDisplayWindow) {
          // Store global reference so other components can reuse it
          window.globalCustomerDisplayWindow = this.customerDisplayWindow;

          // Set up window event handlers
          this.setupCustomerWindowHandlers();

          // Wait for window to load then send data
          this.customerDisplayWindow.addEventListener('load', () => {
            this.sendDataToCustomerWindow(qrData);
          });

          // Focus the new window
          this.customerDisplayWindow.focus();
          console.log('Customer display window opened successfully');
        } else {
          throw new Error('Failed to open customer display window - popup blocked?');
        }
      } catch (error) {
        console.warn('Failed to open customer display window:', error);
        this.$emit('show-message', 'Could not open customer display. Please check popup settings.', 'warning', 'mdi-alert');
      }
    },
    setupCustomerWindowHandlers() {
      if (!this.customerDisplayWindow) return;

      // Handle window close event
      this.customerDisplayWindow.addEventListener('beforeunload', () => {
        console.log('Customer display window is closing');
        // Clear global reference when window closes
        window.globalCustomerDisplayWindow = null;
        this.customerDisplayWindow = null;
      });

      // Handle window focus/blur for better UX
      this.customerDisplayWindow.addEventListener('blur', () => {
        // Window lost focus - could add logging here
      });
    },
    async getAvailableScreens() {
      try {
        // Use Screen Management API if available (Chrome 93+)
        if ('getScreenDetails' in window) {
          const screenDetails = await window.getScreenDetails();
          return screenDetails.screens;
        } else {
          // Fallback: Use basic screen info
          return [{
            left: 0,
            top: 0,
            width: window.screen.width,
            height: window.screen.height,
            availWidth: window.screen.availWidth,
            availHeight: window.screen.availHeight
          }];
        }
      } catch (error) {
        console.warn('Screen detection failed:', error);
        // Return primary screen info as fallback
        return [{
          left: 0,
          top: 0,
          width: window.screen.width,
          height: window.screen.height,
          availWidth: window.screen.availWidth,
          availHeight: window.screen.availHeight
        }];
      }
    },
    calculateWindowFeatures(screen) {
      // Make window fullscreen on target screen
      const windowWidth = screen.availWidth; // Use full available width
      const windowHeight = screen.availHeight; // Use full available height

      // Position at top-left of target screen
      const left = screen.left;
      const top = screen.top;
      return [`width=${windowWidth}`, `height=${windowHeight}`, `left=${left}`, `top=${top}`, 'toolbar=no', 'menubar=no', 'scrollbars=no',
      // No scrollbars for fullscreen
      'resizable=no',
      // Prevent resizing
      'location=no', 'directories=no', 'status=no', 'fullscreen=yes' // Request fullscreen if supported
      ].join(',');
    },
    //   getCustomerDisplayURL() {
    //     // You can customize this URL based on your setup
    //     const baseUrl = window.location.origin
    //     const customerDisplayPath = '/admin/cafeTable/customer' // Adjust this path as needed
    // return `${baseUrl}${customerDisplayPath}?tableId=${tableId}&orderId=${orderId}`
    //     // return `${baseUrl}${customerDisplayPath}`
    //   },
    getCustomerDisplayURL() {
      const baseUrl = window.location.origin;
      const customerDisplayPath = '/admin/cafeTable/customer';

      // Serialize company info
      const companyData = encodeURIComponent(JSON.stringify(this.companyInfo));
      return `${baseUrl}${customerDisplayPath}?company=${companyData}`;
    },
    updateExistingCustomerWindow(qrData) {
      try {
        // Send data to existing window
        this.sendDataToCustomerWindow(qrData);

        // Bring window to front
        this.customerDisplayWindow.focus();
      } catch (error) {
        console.warn('Failed to update existing customer window:', error);
        // Try to reopen window
        this.customerDisplayWindow = null;
        this.openCustomerDisplayWindow(qrData);
      }
    },
    sendDataToCustomerWindow(qrData) {
      console.info(`sendDataToCustomerWindow==> ${JSON.stringify(qrData)}`);
      console.info(`sendDataToCustomerWindow AAA==> ${JSON.stringify(this.customerDisplayWindow)}`);
      if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
        // Send data via postMessage
        this.customerDisplayWindow.postMessage({
          type: 'SHOW_QR_PAYMENT',
          data: qrData
        }, '*');

        // Also set localStorage in the new window for compatibility
        try {
          this.customerDisplayWindow.localStorage.setItem('customerDisplay', JSON.stringify({
            type: 'SHOW_QR_PAYMENT',
            data: qrData
          }));
        } catch (error) {
          console.warn('Could not access customer window localStorage:', error);
        }
      }
    },
    hideQRFromCustomerScreen() {
      const hideMessage = {
        type: 'HIDE_QR_PAYMENT',
        timestamp: Date.now()
      };

      // Send hide message to customer display window if it exists
      if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
        this.customerDisplayWindow.postMessage(hideMessage, '*');
      }

      // Also check global reference
      if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
        window.globalCustomerDisplayWindow.postMessage(hideMessage, '*');
      }

      // Fallback: use localStorage for compatibility
      localStorage.setItem('customerDisplay', JSON.stringify(hideMessage));
      window.dispatchEvent(new Event('storage'));
    },
    // Method to manually close customer display window if needed
    closeCustomerDisplayWindow() {
      try {
        if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
          this.customerDisplayWindow.close();
          console.log('Customer display window closed manually');
        }
        if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
          window.globalCustomerDisplayWindow.close();
          console.log('Global customer display window closed manually');
        }

        // Clear references
        this.customerDisplayWindow = null;
        window.globalCustomerDisplayWindow = null;
        this.$emit('show-message', 'Customer display window closed', 'info', 'mdi-monitor-off');
      } catch (error) {
        console.warn('Error closing customer display window:', error);
      }
    },
    // Method to check if customer display is available
    isCustomerDisplayOpen() {
      return this.customerDisplayWindow && !this.customerDisplayWindow.closed || window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed;
    },
    showPaymentSuccessOnCustomerScreen() {
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'PAYMENT_SUCCESS',
        data: {
          amount: this.amount,
          tableNumber: this.tableNumber
        },
        timestamp: Date.now()
      }));
      window.dispatchEvent(new Event('storage'));
    },
    generateQRString() {
      if (!this.amount || !this.tableNumber) return this.qrString;
      const amountStr = Math.round(this.amount).toString().padStart(6, '0');
      const tableStr = this.tableNumber.toString().padStart(6, '0');
      return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812Table ${this.tableNumber} payment63041c9f`;
    },
    closeDialog() {
      this.cleanup();
      this.resetComponent();
      this.$emit('close');
    },
    resetComponent() {
      this.selectedPaymentMethod = null;
      this.showQRDialog = false;
      this.copied = false;
      this.cashReceived = 0;
      this.cashReceivedFormatted = '';
      this.changeAmount = 0;

      // Clear any pending timeouts
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
      }
    },
    confirmPayment() {
      if (!this.selectedPaymentMethod) {
        this.$emit('show-message', 'Please select a payment method', 'warning', 'mdi-alert');
        return;
      }

      // Validate cash payment
      if (this.isCashPayment) {
        if (!this.cashReceived || this.cashReceived < this.amount) {
          this.$emit('show-message', 'Please enter a valid cash amount', 'warning', 'mdi-alert');
          return;
        }
      }
      this.showPaymentSuccessOnCustomerScreen();

      // Include cash details in payment data for cash payments
      const paymentData = {
        ...this.selectedPaymentMethod,
        ...(this.isCashPayment && {
          cashReceived: this.cashReceived,
          changeAmount: this.changeAmount
        })
      };
      this.$emit('confirm-payment', paymentData);
    },
    async copyQRString() {
      try {
        const stringToCopy = this.currentQRString;
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(stringToCopy);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = stringToCopy;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy QR string:', err);
      }
    },
    downloadQR() {
      const link = document.createElement('a');
      link.href = this.qrCodeUrl;
      link.download = `qr-payment-table-${this.tableNumber}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    shareQR() {
      if (navigator.share) {
        navigator.share({
          title: `Payment QR - Table ${this.tableNumber}`,
          text: `Payment QR Code for ${this.formatPrice(this.amount)}`,
          url: this.qrCodeUrl
        }).catch(err => console.log('Error sharing:', err));
      } else {
        this.copyQRString();
        this.$emit('show-message', 'QR code details copied!', 'success', 'mdi-check');
      }
    },
    onQRError() {
      this.$emit('show-message', 'Failed to load QR code', 'error', 'mdi-alert');
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    getPaymentIcon(paymentCode) {
      const icons = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        CREDIT: 'mdi-credit-card-outline',
        DEBIT: 'mdi-credit-card',
        MOBILE: 'mdi-cellphone',
        DIGITAL: 'mdi-wallet',
        BANK: 'mdi-bank',
        CHECK: 'mdi-checkbook'
      };
      return icons[paymentCode] || 'mdi-currency-usd';
    },
    getPaymentColor(paymentCode) {
      const colors = {
        CASH: 'green',
        CARD: 'blue',
        CREDIT: 'purple',
        DEBIT: 'indigo',
        MOBILE: 'orange',
        DIGITAL: 'teal',
        BANK: 'brown',
        CHECK: 'grey'
      };
      return colors[paymentCode] || 'primary';
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue?vue&type=script&lang=js
 /* harmony default export */ var CAFE_paymentDialogFrontvue_type_script_lang_js = (paymentDialogFrontvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(565)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_paymentDialogFrontvue_type_script_lang_js,
  paymentDialogFrontvue_type_template_id_301a3b30_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "301a3b30",
  "07a78cad"
  
)

/* harmony default export */ var paymentDialogFront = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChipGroup/VChipGroup.js
var VChipGroup = __webpack_require__(564);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(461);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tickets/NotesDialog.vue?vue&type=template&id=ccdaad86&scoped=true













var NotesDialogvue_type_template_id_ccdaad86_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600",
      "persistent": ""
    },
    model: {
      value: _vm.internalShow,
      callback: function ($$v) {
        _vm.internalShow = $$v;
      },
      expression: "internalShow"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "bg-primary text-white"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-note-text")]), _vm._v("\n      " + _vm._s(_vm.title) + "\n    ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pt-4"
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": _vm.label,
      "placeholder": _vm.placeholder,
      "variant": "outlined",
      "rows": "5",
      "counter": "",
      "maxlength": _vm.maxLength,
      "hint": _vm.hint,
      "persistent-hint": "",
      "auto-grow": ""
    },
    on: {
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        if (!$event.ctrlKey) return null;
        return _vm.saveNotes.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        if (!$event.metaKey) return null;
        return _vm.saveNotes.apply(null, arguments);
      }]
    },
    scopedSlots: _vm._u([{
      key: "prepend",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-pencil")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.internalNotes,
      callback: function ($$v) {
        _vm.internalNotes = $$v;
      },
      expression: "internalNotes"
    }
  }), _vm._v(" "), _vm.showQuickNotes ? _c('div', {
    staticClass: "mt-3"
  }, [_c('div', {
    staticClass: "text-subtitle-2 mb-2 font-weight-medium"
  }, [_vm._v("\n          Quick Notes:\n        ")]), _vm._v(" "), _c(VChipGroup["a" /* default */], {
    attrs: {
      "column": ""
    }
  }, _vm._l(_vm.quickNotesList, function (quickNote) {
    return _c(VChip["a" /* default */], {
      key: quickNote,
      staticClass: "cursor-pointer",
      attrs: {
        "color": "primary",
        "variant": "outlined",
        "size": "small"
      },
      on: {
        "click": function ($event) {
          return _vm.addQuickNote(quickNote);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      staticClass: "mr-1",
      attrs: {
        "size": "small"
      }
    }, [_vm._v("mdi-plus-circle-outline")]), _vm._v("\n            " + _vm._s(quickNote) + "\n          ")], 1);
  }), 1)], 1) : _vm._e(), _vm._v(" "), _vm.customQuickNotes && _vm.customQuickNotes.length > 0 ? _c('div', {
    staticClass: "mt-3"
  }, [_c('div', {
    staticClass: "text-subtitle-2 mb-2 font-weight-medium"
  }, [_vm._v("\n          Custom Notes:\n        ")]), _vm._v(" "), _c(VChipGroup["a" /* default */], {
    attrs: {
      "column": ""
    }
  }, _vm._l(_vm.customQuickNotes, function (note) {
    return _c(VChip["a" /* default */], {
      key: note,
      staticClass: "cursor-pointer",
      attrs: {
        "color": "secondary",
        "variant": "outlined",
        "size": "small"
      },
      on: {
        "click": function ($event) {
          return _vm.addQuickNote(note);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      staticClass: "mr-1",
      attrs: {
        "size": "small"
      }
    }, [_vm._v("mdi-star-outline")]), _vm._v("\n            " + _vm._s(note) + "\n          ")], 1);
  }), 1)], 1) : _vm._e(), _vm._v(" "), _vm.existingNotes && _vm.existingNotes !== _vm.internalNotes ? _c(VAlert["a" /* default */], {
    staticClass: "mt-3",
    attrs: {
      "type": "info",
      "variant": "tonal",
      "density": "compact"
    }
  }, [_c('div', {
    staticClass: "text-subtitle-2 font-weight-medium mb-1"
  }, [_vm._v("\n          Previous Notes:\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "text-body-2"
  }, [_vm._v(_vm._s(_vm.existingNotes))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "text-caption text-grey mt-2"
  }, [_vm._v("\n        " + _vm._s(_vm.internalNotes ? _vm.internalNotes.length : 0) + " / " + _vm._s(_vm.maxLength) + " characters\n        "), _vm.internalNotes && _vm.internalNotes.length > _vm.maxLength * 0.8 ? _c('span', {
    staticClass: "warning--text"
  }, [_vm._v("\n          (" + _vm._s(_vm.maxLength - _vm.internalNotes.length) + " remaining)\n        ")]) : _vm._e()])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "px-4 pb-4"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "variant": "text",
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _vm.internalNotes ? _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "variant": "text",
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.clearNotes
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "size": "small"
    }
  }, [_vm._v("mdi-delete")]), _vm._v("\n        Clear\n      ")], 1) : _vm._e(), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "variant": "elevated",
      "disabled": !_vm.internalNotes || _vm.internalNotes.trim() === '',
      "loading": _vm.loading
    },
    on: {
      "click": _vm.saveNotes
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "size": "small"
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n        Save Notes\n      ")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/tickets/NotesDialog.vue?vue&type=template&id=ccdaad86&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tickets/NotesDialog.vue?vue&type=script&lang=js
/* harmony default export */ var NotesDialogvue_type_script_lang_js = ({
  name: 'NotesDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    notes: {
      type: String,
      default: ''
    },
    existingNotes: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'Add Notes'
    },
    label: {
      type: String,
      default: 'Notes'
    },
    placeholder: {
      type: String,
      default: 'Enter notes here...'
    },
    hint: {
      type: String,
      default: 'These notes will be saved'
    },
    maxLength: {
      type: Number,
      default: 500
    },
    showQuickNotes: {
      type: Boolean,
      default: true
    },
    quickNotes: {
      type: Array,
      default: () => ['No ice', 'Extra spicy', 'Less sugar', 'Allergic to nuts', 'Take away', 'Urgent order', 'VIP customer', 'No MSG']
    },
    customQuickNotes: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      internalNotes: ''
    };
  },
  computed: {
    internalShow: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.$emit('close');
        }
      }
    },
    quickNotesList() {
      return this.quickNotes;
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        // Load notes when dialog opens
        this.internalNotes = this.notes || '';
      }
    },
    notes(newVal) {
      this.internalNotes = newVal || '';
    }
  },
  methods: {
    addQuickNote(note) {
      if (this.internalNotes && !this.internalNotes.includes(note)) {
        // Add with separator if there's existing content
        const separator = this.internalNotes.trim().endsWith('.') || this.internalNotes.trim().endsWith(';') ? ' ' : '; ';
        this.internalNotes = this.internalNotes.trim() + separator + note;
      } else if (!this.internalNotes) {
        this.internalNotes = note;
      }
    },
    clearNotes() {
      this.internalNotes = '';
      this.$emit('update:notes', '');
    },
    saveNotes() {
      const trimmedNotes = this.internalNotes.trim();
      if (!trimmedNotes) {
        this.$emit('show-message', 'Please enter some notes', 'warning', 'mdi-alert');
        return;
      }
      this.$emit('save', trimmedNotes);
      this.$emit('update:notes', trimmedNotes);
    },
    closeDialog() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/tickets/NotesDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var tickets_NotesDialogvue_type_script_lang_js = (NotesDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/tickets/NotesDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(569)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tickets_NotesDialogvue_type_script_lang_js,
  NotesDialogvue_type_template_id_ccdaad86_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "ccdaad86",
  "700d9cbe"
  
)

/* harmony default export */ var NotesDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(424);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(461);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/customerDialog/index.vue?vue&type=template&id=952c565a&scoped=true

















var customerDialogvue_type_template_id_952c565a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": ""
    },
    model: {
      value: _vm.dialogVisible,
      callback: function ($$v) {
        _vm.dialogVisible = $$v;
      },
      expression: "dialogVisible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-account-search")]), _vm._v("\n        Select Customer\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VTextField["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "prepend-inner-icon": "mdi-magnify",
      "label": "Search customers by name, company, phone...",
      "outlined": "",
      "dense": "",
      "clearable": ""
    },
    model: {
      value: _vm.customerSearchQuery,
      callback: function ($$v) {
        _vm.customerSearchQuery = $$v;
      },
      expression: "customerSearchQuery"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mb-3"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "small": ""
    },
    on: {
      "click": function ($event) {
        _vm.showAddCustomerForm = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-account-plus")]), _vm._v("\n            Add New Customer\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "info",
      "outlined": "",
      "small": ""
    },
    on: {
      "click": _vm.selectWalkInCustomer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-walk")]), _vm._v("\n            Walk-in Customer\n          ")], 1)], 1), _vm._v(" "), _vm.loadingCustomers ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("Loading customers...")])], 1) : _c('div', {
    staticStyle: {
      "max-height": "400px",
      "overflow-y": "auto"
    }
  }, [_vm._l(_vm.filteredCustomers, function (customer) {
    var _vm$tempSelectedCusto;
    return _c(VCard["a" /* default */], {
      key: customer.id,
      staticClass: "mb-2 cursor-pointer customer-card",
      class: {
        'selected-customer': ((_vm$tempSelectedCusto = _vm.tempSelectedCustomer) === null || _vm$tempSelectedCusto === void 0 ? void 0 : _vm$tempSelectedCusto.id) === customer.id
      },
      attrs: {
        "outlined": "",
        "hover": ""
      },
      on: {
        "click": function ($event) {
          return _vm.selectCustomer(customer);
        }
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-3"
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', [_c('div', {
      staticClass: "font-weight-bold text-subtitle-1"
    }, [_vm._v("\n                    " + _vm._s(customer.name) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "text-body-2 grey--text"
    }, [_vm._v("\n                    " + _vm._s(customer.company || 'No company') + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "caption mt-1"
    }, [customer.email ? _c('span', [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-email")]), _vm._v("\n                      " + _vm._s(customer.email) + "\n                    ")], 1) : _vm._e(), _vm._v(" "), customer.telephone ? _c('span', {
      staticClass: "ml-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-phone")]), _vm._v("\n                      " + _vm._s(customer.telephone) + "\n                    ")], 1) : _vm._e(), _vm._v(" "), customer.dob ? _c('span', {
      staticClass: "ml-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-cake")]), _vm._v("\n                      Born: " + _vm._s(_vm.formatDate(customer.dob)) + "\n                    ")], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "text-right"
    }, [_c(VChip["a" /* default */], {
      staticClass: "mb-1",
      attrs: {
        "color": _vm.getClassColor(customer.class),
        "text-color": "white",
        "small": ""
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "left": "",
        "x-small": ""
      }
    }, [_vm._v("mdi-star")]), _vm._v("\n                    " + _vm._s(customer.class || 'BRONZE') + "\n                  ")], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c(VChip["a" /* default */], {
      staticClass: "mb-1",
      attrs: {
        "color": _vm.getGradeColor(customer.grade),
        "text-color": "white",
        "small": ""
      }
    }, [_vm._v("\n                    Grade " + _vm._s(customer.grade) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "caption"
    }, [_vm._v("\n                    Credit: " + _vm._s(customer.credit) + " days\n                  ")]), _vm._v(" "), !customer.isActive ? _c(VChip["a" /* default */], {
      attrs: {
        "color": "error",
        "text-color": "white",
        "x-small": ""
      }
    }, [_vm._v("\n                    Inactive\n                  ")]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "mt-2"
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "color": "purple",
        "text": "",
        "x-small": ""
      },
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return _vm.manageOffers(customer);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "left": "",
        "x-small": ""
      }
    }, [_vm._v("mdi-gift")]), _vm._v("\n                      Manage Offers\n                    ")], 1)], 1)], 1)])])], 1);
  }), _vm._v(" "), _vm.filteredCustomers.length === 0 ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey"
    }
  }, [_vm._v("mdi-account-search")]), _vm._v(" "), _c('p', {
    staticClass: "mt-2 grey--text"
  }, [_vm._v("No customers found")])], 1) : _vm._e()], 2)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.tempSelectedCustomer
    },
    on: {
      "click": _vm.confirmCustomerSelection
    }
  }, [_vm._v("\n          Select Customer\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "700",
      "persistent": ""
    },
    model: {
      value: _vm.showAddCustomerForm,
      callback: function ($$v) {
        _vm.showAddCustomerForm = $$v;
      },
      expression: "showAddCustomerForm"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-account-plus")]), _vm._v("\n        Add New Customer\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": _vm.closeAddCustomerForm
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VForm["a" /* default */], {
    ref: "customerForm",
    model: {
      value: _vm.customerFormValid,
      callback: function ($$v) {
        _vm.customerFormValid = $$v;
      },
      expression: "customerFormValid"
    }
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
      "label": "Customer Name *",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.newCustomer.name,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "name", $$v);
      },
      expression: "newCustomer.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Company",
      "outlined": "",
      "dense": ""
    },
    model: {
      value: _vm.newCustomer.company,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "company", $$v);
      },
      expression: "newCustomer.company"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Email",
      "outlined": "",
      "dense": "",
      "rules": [_vm.rules.email]
    },
    model: {
      value: _vm.newCustomer.email,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "email", $$v);
      },
      expression: "newCustomer.email"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Phone",
      "outlined": "",
      "dense": ""
    },
    model: {
      value: _vm.newCustomer.telephone,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "telephone", $$v);
      },
      expression: "newCustomer.telephone"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Date of Birth",
      "type": "date",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-calendar"
    },
    model: {
      value: _vm.newCustomer.dob,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "dob", $$v);
      },
      expression: "newCustomer.dob"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.classOptions,
      "item-text": "title",
      "item-value": "value",
      "label": "Customer Class *",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-star",
      "rules": [_vm.rules.required]
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getClassColor(item.value),
            "text-color": "white",
            "small": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "x-small": ""
          }
        }, [_vm._v("mdi-star")]), _vm._v("\n                    " + _vm._s(item.title) + "\n                  ")], 1)];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          staticClass: "ma-1",
          attrs: {
            "color": _vm.getClassColor(item.value),
            "text-color": "white",
            "small": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "x-small": ""
          }
        }, [_vm._v("mdi-star")]), _vm._v("\n                    " + _vm._s(item.title) + "\n                  ")], 1)];
      }
    }]),
    model: {
      value: _vm.newCustomer.class,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "class", $$v);
      },
      expression: "newCustomer.class"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Address",
      "outlined": "",
      "dense": "",
      "rows": "2",
      "auto-grow": ""
    },
    model: {
      value: _vm.newCustomer.address,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "address", $$v);
      },
      expression: "newCustomer.address"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.gradeOptions,
      "label": "Grade",
      "outlined": "",
      "dense": ""
    },
    model: {
      value: _vm.newCustomer.grade,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "grade", $$v);
      },
      expression: "newCustomer.grade"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Credit Days",
      "type": "number",
      "outlined": "",
      "dense": ""
    },
    model: {
      value: _vm.newCustomer.credit,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "credit", $$v);
      },
      expression: "newCustomer.credit"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Late Charge %",
      "type": "number",
      "outlined": "",
      "dense": ""
    },
    model: {
      value: _vm.newCustomer.lateChargePercent,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "lateChargePercent", $$v);
      },
      expression: "newCustomer.lateChargePercent"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-3"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": "",
      "small": ""
    },
    on: {
      "click": _vm.closeAddCustomerForm
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "small": "",
      "disabled": !_vm.customerFormValid,
      "loading": _vm.savingCustomer
    },
    on: {
      "click": _vm.saveNewCustomer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n          Save Customer\n        ")], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c('MemberOfferDialog', {
    attrs: {
      "show": _vm.showMemberOfferDialog,
      "selected-member": _vm.selectedMemberForOffers
    },
    on: {
      "close": _vm.closeMemberOfferDialog
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue?vue&type=template&id=952c565a&scoped=true

// EXTERNAL MODULE: ./components/member_offer/index.vue + 4 modules
var member_offer = __webpack_require__(558);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/customerDialog/index.vue?vue&type=script&lang=js
 // NEW: Import member offer dialog

/* harmony default export */ var customerDialogvue_type_script_lang_js = ({
  name: 'CustomerDialog',
  components: {
    MemberOfferDialog: member_offer["default"] // NEW: Register component
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    customers: {
      type: Array,
      default: () => []
    },
    selectedCustomer: {
      type: Object,
      default: null
    },
    loadingCustomers: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tempSelectedCustomer: null,
      customerSearchQuery: '',
      showAddCustomerForm: false,
      savingCustomer: false,
      customerFormValid: false,
      showMemberOfferDialog: false,
      // NEW: Member offer dialog state
      selectedMemberForOffers: null,
      // NEW: Selected member for offer management
      newCustomer: {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        dob: null,
        // NEW FIELD
        class: 'BRONZE',
        // NEW FIELD with default value
        credit: 30,
        lateChargePercent: 0,
        grade: 'A',
        isActive: true
      },
      rules: {
        required: value => !!value || 'This field is required',
        email: value => {
          if (!value) return true;
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value) || 'Invalid email format';
        }
      },
      gradeOptions: ['A', 'B', 'C', 'D', 'E', 'F'],
      // NEW: Class options matching your Sequelize enum
      classOptions: [{
        title: 'Bronze',
        value: 'BRONZE'
      }, {
        title: 'Silver',
        value: 'SILVER'
      }, {
        title: 'Gold',
        value: 'GOLD'
      }, {
        title: 'Platinum',
        value: 'PLATINUM'
      }, {
        title: 'Diamond',
        value: 'DIAMOND'
      }]
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.closeDialog();
        }
      }
    },
    filteredCustomers() {
      if (!this.customerSearchQuery) {
        return this.customers.filter(customer => customer.isActive);
      }
      const searchTerm = this.customerSearchQuery.toLowerCase();
      return this.customers.filter(customer => {
        var _customer$company, _customer$email, _customer$telephone;
        return customer.isActive && (customer.name.toLowerCase().includes(searchTerm) || ((_customer$company = customer.company) === null || _customer$company === void 0 ? void 0 : _customer$company.toLowerCase().includes(searchTerm)) || ((_customer$email = customer.email) === null || _customer$email === void 0 ? void 0 : _customer$email.toLowerCase().includes(searchTerm)) || ((_customer$telephone = customer.telephone) === null || _customer$telephone === void 0 ? void 0 : _customer$telephone.includes(searchTerm)));
      });
    }
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.tempSelectedCustomer = null;
        this.customerSearchQuery = '';
      }
    }
  },
  methods: {
    selectCustomer(customer) {
      this.tempSelectedCustomer = customer;
    },
    confirmCustomerSelection() {
      this.$emit('customer-selected', this.tempSelectedCustomer);
      this.closeDialog();
    },
    selectWalkInCustomer() {
      this.$emit('walk-in-selected');
      this.closeDialog();
    },
    closeDialog() {
      this.tempSelectedCustomer = null;
      this.customerSearchQuery = '';
      this.$emit('close');
    },
    closeAddCustomerForm() {
      this.showAddCustomerForm = false;
      this.resetNewCustomerForm();
    },
    resetNewCustomerForm() {
      this.newCustomer = {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        dob: null,
        // Reset new field
        class: 'BRONZE',
        // Reset new field to default
        credit: 30,
        lateChargePercent: 0,
        grade: 'A',
        isActive: true
      };
      this.customerFormValid = false;
      if (this.$refs.customerForm) {
        this.$refs.customerForm.resetValidation();
      }
    },
    async saveNewCustomer() {
      var _this$newCustomer$com, _this$newCustomer$ema, _this$newCustomer$add, _this$newCustomer$tel;
      if (!this.customerFormValid) {
        this.$emit('show-message', 'Please fill in all required fields', 'warning', 'mdi-alert');
        return;
      }
      this.savingCustomer = true;
      const customerData = {
        name: this.newCustomer.name.trim(),
        company: ((_this$newCustomer$com = this.newCustomer.company) === null || _this$newCustomer$com === void 0 ? void 0 : _this$newCustomer$com.trim()) || null,
        email: ((_this$newCustomer$ema = this.newCustomer.email) === null || _this$newCustomer$ema === void 0 ? void 0 : _this$newCustomer$ema.trim()) || null,
        address: ((_this$newCustomer$add = this.newCustomer.address) === null || _this$newCustomer$add === void 0 ? void 0 : _this$newCustomer$add.trim()) || null,
        telephone: ((_this$newCustomer$tel = this.newCustomer.telephone) === null || _this$newCustomer$tel === void 0 ? void 0 : _this$newCustomer$tel.trim()) || null,
        dob: this.newCustomer.dob || null,
        // NEW FIELD
        class: this.newCustomer.class,
        // NEW FIELD
        credit: parseInt(this.newCustomer.credit) || 30,
        lateChargePercent: parseFloat(this.newCustomer.lateChargePercent) || 0,
        grade: this.newCustomer.grade,
        isActive: true
      };
      try {
        this.$emit('save-customer', customerData);
        this.closeAddCustomerForm();
      } finally {
        this.savingCustomer = false;
      }
    },
    onCustomerSaved() {
      this.closeAddCustomerForm();
      this.closeDialog();
    },
    getGradeColor(grade) {
      const colors = {
        A: 'success',
        B: 'info',
        C: 'warning',
        D: 'orange',
        E: 'deep-orange',
        F: 'error'
      };
      return colors[grade] || 'grey';
    },
    // NEW METHOD: Get color for customer class
    getClassColor(customerClass) {
      const colors = {
        BRONZE: 'brown',
        SILVER: 'grey',
        GOLD: 'amber',
        PLATINUM: 'blue-grey',
        DIAMOND: 'purple'
      };
      return colors[customerClass] || 'grey';
    },
    // NEW METHOD: Open member offer management dialog
    manageOffers(customer) {
      this.selectedMemberForOffers = customer;
      this.showMemberOfferDialog = true;
    },
    // NEW METHOD: Close member offer dialog
    closeMemberOfferDialog() {
      this.showMemberOfferDialog = false;
      this.selectedMemberForOffers = null;
    },
    // NEW METHOD: Format date for display
    formatDate(date) {
      if (!date) return '';
      try {
        return new Date(date).toLocaleDateString('en-GB');
      } catch (error) {
        return date;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue?vue&type=script&lang=js
 /* harmony default export */ var CAFE_customerDialogvue_type_script_lang_js = (customerDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(567)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_customerDialogvue_type_script_lang_js,
  customerDialogvue_type_template_id_952c565a_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "952c565a",
  "67afed58"
  
)

/* harmony default export */ var customerDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
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

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48eb5314_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(544);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48eb5314_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48eb5314_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48eb5314_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48eb5314_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".price-list-badge[data-v-48eb5314]{left:8px;position:absolute;top:8px;z-index:1}.promotion-badge[data-v-48eb5314]{z-index:1}.price-section[data-v-48eb5314]{border-bottom:1px solid #e0e0e0;padding-bottom:8px}.gap-1[data-v-48eb5314]{gap:4px}.pos-main-container[data-v-48eb5314]{height:100vh;max-height:100vh;overflow:hidden}.left-panel[data-v-48eb5314]{display:flex;flex-direction:column;height:100vh;overflow:hidden}.menu-header[data-v-48eb5314]{border-radius:0!important;flex-shrink:0;position:sticky;top:0;z-index:10}.menu-loading[data-v-48eb5314]{align-items:center;background:#fff;display:flex;flex-grow:1;justify-content:center}.menu-content[data-v-48eb5314]{background:#fff;flex-grow:1;overflow-x:hidden;overflow-y:auto;scroll-behavior:smooth}.menu-content[data-v-48eb5314]::-webkit-scrollbar{width:8px}.menu-content[data-v-48eb5314]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.menu-content[data-v-48eb5314]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.menu-content[data-v-48eb5314]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.right-panel[data-v-48eb5314]{height:100vh;overflow:hidden}.cart-container[data-v-48eb5314]{background:#fff;border-left:1px solid #e0e0e0;display:flex;flex-direction:column;height:100vh}.cart-header[data-v-48eb5314]{border-radius:0!important;flex-shrink:0;min-height:64px!important}.customer-section[data-v-48eb5314]{background-color:#f5f5f5;border-bottom:1px solid #e0e0e0;flex-shrink:0;padding:16px}.cart-items-section[data-v-48eb5314]{flex-grow:1;min-height:0;overflow-x:hidden;overflow-y:auto;scroll-behavior:smooth}.cart-empty-state[data-v-48eb5314]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;padding:48px 24px;text-align:center}.cart-items-list[data-v-48eb5314]{padding:16px}.cart-item[data-v-48eb5314]{margin-bottom:8px;padding:8px}.cart-items-section[data-v-48eb5314]::-webkit-scrollbar{width:6px}.cart-items-section[data-v-48eb5314]::-webkit-scrollbar-track{background:#f8f8f8}.cart-items-section[data-v-48eb5314]::-webkit-scrollbar-thumb{background:#d0d0d0;border-radius:3px}.cart-items-section[data-v-48eb5314]::-webkit-scrollbar-thumb:hover{background:#b0b0b0}.cart-footer[data-v-48eb5314]{background-color:#fafafa;border-top:1px solid #e0e0e0;flex-shrink:0}.cart-summary[data-v-48eb5314]{padding:16px}.cart-actions[data-v-48eb5314]{padding:0 16px 16px}.promotion-eligible[data-v-48eb5314]{border:2px solid #4caf50!important}.promotion-badge[data-v-48eb5314]{background:#4caf50;border-radius:50%;padding:4px;position:absolute;right:8px;top:8px}.cursor-pointer[data-v-48eb5314]{cursor:pointer}.w-100[data-v-48eb5314]{width:100%}.product-card[data-v-48eb5314]:hover:not(.product-disabled){box-shadow:0 4px 12px rgba(0,0,0,.15)!important;transform:translateY(-2px);transition:transform .2s ease}.product-disabled[data-v-48eb5314]{cursor:not-allowed!important;opacity:.6}.product-disabled[data-v-48eb5314]:hover{box-shadow:none!important;transform:none!important}.ticket-line-item[data-v-48eb5314]{background-color:rgba(33,150,243,.05);border-left:3px solid #2196f3}.line-clamp-1[data-v-48eb5314]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}@media (max-width:1024px){.left-panel[data-v-48eb5314]{flex:0 0 60%}.right-panel[data-v-48eb5314]{flex:0 0 40%}}@media (max-width:768px){.pos-main-container[data-v-48eb5314]{flex-direction:column}.left-panel[data-v-48eb5314],.right-panel[data-v-48eb5314]{height:50vh}}.v-expansion-panel-header[data-v-48eb5314]{min-height:36px!important;padding:8px 12px!important}.v-expansion-panel-content__wrap[data-v-48eb5314]{padding:8px 12px 12px!important}.cart-items-section[data-v-48eb5314],.menu-content[data-v-48eb5314]{transform:translateZ(0);will-change:scroll-position}.cart-item[data-v-48eb5314]{transition:all .2s ease}.cart-item[data-v-48eb5314]:hover{background-color:rgba(0,0,0,.02)}.product-card[data-v-48eb5314]:focus{outline:2px solid #1976d2;outline-offset:2px}@media (prefers-contrast:high){.cart-container[data-v-48eb5314]{border-left:2px solid #000}.customer-section[data-v-48eb5314]{border-bottom:2px solid #000}}@media (prefers-reduced-motion:reduce){.product-card[data-v-48eb5314]:hover:not(.product-disabled){transform:none}.cart-items-section[data-v-48eb5314],.menu-content[data-v-48eb5314]{scroll-behavior:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Mixins


 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_routable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
// Must be after routable
// to overwrite activeClass
Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_0__[/* factory */ "a"])('tabsBar'), _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend().extend({
  name: 'v-tab',
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  data: () => ({
    proxyClass: 'v-tab--active'
  }),
  computed: {
    classes() {
      return {
        'v-tab': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-tab--disabled': this.disabled,
        ...this.groupClasses
      };
    },
    value() {
      let to = this.to || this.href;
      if (to == null) return to;
      if (this.$router && this.to === Object(this.to)) {
        const resolve = this.$router.resolve(this.to, this.$route, this.append);
        to = resolve.href;
      }
      return to.replace('#', '');
    }
  },
  methods: {
    click(e) {
      // Prevent keyboard actions
      // from children elements
      // within disabled tabs
      if (this.disabled) {
        e.preventDefault();
        return;
      } // If user provides an
      // actual link, do not
      // prevent default

      if (this.href && this.href.indexOf('#') > -1) e.preventDefault();
      if (e.detail) this.$el.blur();
      this.$emit('click', e);
      this.to || this.toggle();
    },
    toggle() {
      // VItemGroup treats a change event as a click
      if (!this.isActive || !this.tabsBar.mandatory && !this.to) {
        this.$emit('change');
      }
    }
  },
  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = {
      ...data.attrs,
      'aria-selected': String(this.isActive),
      role: 'tab',
      tabindex: this.disabled ? -1 : 0
    };
    data.on = {
      ...data.on,
      keydown: e => {
        if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* keyCodes */ "y"].enter) this.click(e);
        this.$emit('keydown', e);
      }
    };
    return h(tag, data, this.$slots.default);
  }
}));

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(492);
// Extensions

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
  name: 'v-tab-item',
  props: {
    id: String
  },
  methods: {
    genWindowItem() {
      const item = _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].options.methods.genWindowItem.call(this);
      item.data.domProps = item.data.domProps || {};
      item.data.domProps.id = this.id || this.value;
      return item;
    }
  }
}));

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(604);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(461);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CafePOSScreen/index.vue?vue&type=template&id=48eb5314&scoped=true



























var CafePOSScreenvue_type_template_id_48eb5314_scoped_true_render = function render() {
  var _vm$currentTicket, _vm$existingTicket, _vm$currentTicket2, _vm$selectedProduct, _vm$selectedProduct2, _vm$selectedCustomer, _vm$selectedCustomer2, _vm$selectedCustomer3;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "pa-0 fill-height",
    attrs: {
      "fluid": ""
    }
  }, [_c('PrintTicketDialog', {
    key: _vm.printDialogKey,
    attrs: {
      "show": _vm.showCustomerPrint,
      "ticket": _vm.selectedTicket,
      "restaurant-info": _vm.restaurantConfig
    },
    on: {
      "close": _vm.closePrintDialog,
      "printed": _vm.onPrintSuccess
    }
  }), _vm._v(" "), _c('NotesDialog', {
    attrs: {
      "show": _vm.showNotesDialog,
      "notes": _vm.orderNotes,
      "existing-notes": (_vm$currentTicket = _vm.currentTicket) === null || _vm$currentTicket === void 0 ? void 0 : _vm$currentTicket.notes,
      "title": "Add Notes to Order",
      "label": "Order Notes",
      "placeholder": "Enter any special instructions or notes for this order...",
      "hint": "These notes will be saved with the ticket",
      "max-length": 500,
      "show-quick-notes": true,
      "quick-notes": _vm.quickNotes,
      "loading": _vm.savingNotes
    },
    on: {
      "close": _vm.closeNotesDialog,
      "save": _vm.handleSaveNotes,
      "show-message": _vm.showMessage
    }
  }), _vm._v(" "), _c('PaymentDialog', {
    attrs: {
      "show": _vm.showPaymentDialog,
      "table-number": _vm.tableId,
      "ticket-id": ((_vm$existingTicket = _vm.existingTicket) === null || _vm$existingTicket === void 0 ? void 0 : _vm$existingTicket.id) || ((_vm$currentTicket2 = _vm.currentTicket) === null || _vm$currentTicket2 === void 0 ? void 0 : _vm$currentTicket2.id) || null,
      "amount": _vm.paymentAmount,
      "payment-methods": _vm.paymentList,
      "payment-loading": _vm.paymentLoading,
      "action-loading": _vm.actionLoading,
      "enable-q-r": true,
      "show-q-r-details": false
    },
    on: {
      "close": _vm.closePaymentDialog,
      "confirm-payment": _vm.handlePaymentConfirm,
      "reload-payment-methods": _vm.loadPaymentMethods,
      "show-message": _vm.showMessage
    }
  }), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "500",
      "persistent": ""
    },
    model: {
      value: _vm.showPriceOverrideDialog,
      callback: function ($$v) {
        _vm.showPriceOverrideDialog = $$v;
      },
      expression: "showPriceOverrideDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-cash-edit")]), _vm._v("\n        Price Selection & Override\n      ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pt-4"
  }, [_c(VAlert["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "color": "info",
      "text": "",
      "dense": ""
    }
  }, [_c('div', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s((_vm$selectedProduct = _vm.selectedProduct) === null || _vm$selectedProduct === void 0 ? void 0 : _vm$selectedProduct.pro_name))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("\n            Base Price: " + _vm._s(_vm.formatPrice((_vm$selectedProduct2 = _vm.selectedProduct) === null || _vm$selectedProduct2 === void 0 ? void 0 : _vm$selectedProduct2.pro_price)) + "\n          ")]), _vm._v(" "), _vm.selectedCustomer && _vm.selectedCustomer.grade ? _c('div', {
    staticClass: "caption"
  }, [_vm._v("\n            Customer Grade: " + _vm._s(_vm.selectedCustomer.grade) + "\n          ")]) : _vm._e()]), _vm._v(" "), _vm.getCustomerGradePrice(_vm.selectedProduct) ? _c(VAlert["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "color": "success",
      "text": "",
      "dense": ""
    }
  }, [_c('div', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n            Grade " + _vm._s(_vm.selectedCustomer.grade) + " Price:\n            " + _vm._s(_vm.formatPrice(_vm.getCustomerGradePrice(_vm.selectedProduct))) + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("This price will be used automatically")])]) : _vm._e(), _vm._v(" "), _vm.getProductPriceLists(_vm.selectedProduct).length > 0 ? _c(VSelect["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "items": _vm.getPriceListOptions(_vm.selectedProduct),
      "item-text": "label",
      "item-value": "id",
      "label": "Select Price Grade",
      "outlined": "",
      "dense": "",
      "clearable": ""
    },
    on: {
      "change": _vm.onPriceListSelection
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-tag-multiple")])];
      },
      proxy: true
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex justify-space-between align-center",
          staticStyle: {
            "width": "100%"
          }
        }, [_c('span', [_c(VChip["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "x-small": "",
            "color": _vm.getGradeColor(item.grade)
          }
        }, [_vm._v("\n                  " + _vm._s(item.grade) + "\n                ")]), _vm._v("\n                " + _vm._s(item.label) + "\n              ")], 1), _vm._v(" "), _c('span', {
          staticClass: "font-weight-bold primary--text"
        }, [_vm._v("\n                " + _vm._s(_vm.formatPrice(item.price)) + "\n              ")])])];
      }
    }], null, false, 3886631269),
    model: {
      value: _vm.selectedPriceListId,
      callback: function ($$v) {
        _vm.selectedPriceListId = $$v;
      },
      expression: "selectedPriceListId"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "text-center mb-3 pa-3",
    staticStyle: {
      "background": "#f5f5f5",
      "border-radius": "8px"
    }
  }, [_c('div', {
    staticClass: "caption grey--text"
  }, [_vm._v("Current Price")]), _vm._v(" "), _c('div', {
    staticClass: "text-h5 primary--text font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.formatPrice(_vm.effectivePriceInDialog)) + "\n          ")]), _vm._v(" "), _vm.selectedPriceListId ? _c('div', {
    staticClass: "caption success--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": "success"
    }
  }, [_vm._v("mdi-tag")]), _vm._v("\n            Price list applied\n          ")], 1) : _vm.getCustomerGradePrice(_vm.selectedProduct) ? _c('div', {
    staticClass: "caption success--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": "success"
    }
  }, [_vm._v("mdi-account")]), _vm._v("\n            Customer grade price applied\n          ")], 1) : _vm._e()]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "mb-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-pencil")]), _vm._v("\n          Or Enter Custom Price\n        ")], 1), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Custom Price",
      "type": "number",
      "step": "100",
      "min": "0",
      "outlined": "",
      "dense": "",
      "suffix": "₭",
      "rules": [v => v === null || v === '' || v >= 0 || 'Price must be positive']
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-cash")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.customPriceInput,
      callback: function ($$v) {
        _vm.customPriceInput = _vm._n($$v);
      },
      expression: "customPriceInput"
    }
  }), _vm._v(" "), _vm.customPriceInput && _vm.customPriceInput !== _vm.getDefaultProductPrice(_vm.selectedProduct) ? _c(VAlert["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "type": "info",
      "dense": "",
      "text": ""
    }
  }, [_vm._v("\n          Difference from default:\n          "), _c('strong', [_vm._v(_vm._s(_vm.formatPriceDifference(_vm.customPriceInput - _vm.getDefaultProductPrice(_vm.selectedProduct))))])]) : _vm._e(), _vm._v(" "), _vm.customPriceInput || _vm.selectedPriceListId || !_vm.getCustomerGradePrice(_vm.selectedProduct) ? _c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Reason (optional)",
      "outlined": "",
      "dense": "",
      "rows": "2",
      "counter": "200",
      "placeholder": "Enter reason for price change..."
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-note-text")])];
      },
      proxy: true
    }], null, false, 3897466433),
    model: {
      value: _vm.priceOverrideReason,
      callback: function ($$v) {
        _vm.priceOverrideReason = $$v;
      },
      expression: "priceOverrideReason"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "px-4 pb-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closePriceOverrideDialog
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.isValidPriceSelection
    },
    on: {
      "click": _vm.applyPriceSelection
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n          Apply & Add to Cart\n        ")], 1)], 1)], 1)], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400",
      "persistent": ""
    },
    model: {
      value: _vm.showPrintConfirmDialog,
      callback: function ($$v) {
        _vm.showPrintConfirmDialog = $$v;
      },
      expression: "showPrintConfirmDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "headline d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    }
  }, [_vm._v("mdi-check-circle")]), _vm._v("\n        Payment Successful!\n      ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center py-4"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "size": "64",
      "color": "success"
    }
  }, [_vm._v("mdi-credit-card-check")]), _vm._v(" "), _c('div', {
    staticClass: "mb-2"
  }, [_vm._v("\n          Payment has been processed successfully\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-1 mb-4"
  }, [_vm._v("\n          Amount: "), _c('strong', [_vm._v(_vm._s(_vm.formatPrice(_vm.paymentAmount)))])]), _vm._v(" "), _c('div', {
    staticClass: "text-body-1"
  }, [_vm._v("\n          Would you like to print the receipt now?\n        ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "justify-center pb-4"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.handlePrintConfirmation(false);
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n          No, Skip\n        ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "color": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.handlePrintConfirmation(true);
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n          Yes, Print Receipt\n        ")], 1)], 1)], 1)], 1), _vm._v(" "), _c('CustomerDialog', {
    attrs: {
      "show": _vm.showCustomerDialog,
      "customers": _vm.customers,
      "selected-customer": _vm.selectedCustomer,
      "loading-customers": _vm.loadingCustomers
    },
    on: {
      "close": _vm.closeCustomerDialog,
      "customer-selected": _vm.handleCustomerSelected,
      "walk-in-selected": _vm.handleWalkInSelected,
      "save-customer": _vm.handleSaveCustomer,
      "show-message": _vm.showMessage
    }
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "fill-height pos-main-container",
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "category-panel",
    attrs: {
      "cols": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "fill-height",
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text pa-3"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-shape")]), _vm._v("\n          Categories\n        ")], 1), _vm._v(" "), _c('div', {
    staticClass: "category-content"
  }, [_c(VList["a" /* default */], {
    staticClass: "pa-0",
    attrs: {
      "dense": ""
    }
  }, [_c(VListItem["a" /* default */], {
    staticClass: "category-item",
    class: {
      'v-list-item--active primary--text': !_vm.categoryFilter
    },
    on: {
      "click": function ($event) {
        _vm.categoryFilter = null;
      }
    }
  }, [_c(VListItemIcon["a" /* default */], {
    staticClass: "mr-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": !_vm.categoryFilter ? 'primary' : 'grey'
    }
  }, [_vm._v("mdi-view-grid")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("All Products")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(_vm.products.length) + " items")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-1"
  }), _vm._v(" "), _vm._l(_vm.categoryOptions, function (category) {
    return _c(VListItem["a" /* default */], {
      key: category.categ_id,
      staticClass: "category-item",
      class: {
        'v-list-item--active primary--text': _vm.categoryFilter === category.categ_id
      },
      on: {
        "click": function ($event) {
          _vm.categoryFilter = category.categ_id;
        }
      }
    }, [_c(VListItemIcon["a" /* default */], {
      staticClass: "mr-3"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "color": _vm.getCategoryColor(category.categ_name)
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.getCategoryIcon(category.categ_name)) + "\n                ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v(_vm._s(category.categ_name))]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("\n                  " + _vm._s(_vm.getProductCountByCategory(category.categ_id)) + " items\n                ")])], 1), _vm._v(" "), _vm.categoryFilter === category.categ_id ? _c(VListItemAction["a" /* default */], [_c(VIcon["a" /* default */], {
      attrs: {
        "color": "primary",
        "small": ""
      }
    }, [_vm._v("mdi-check")])], 1) : _vm._e()], 1);
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "products-panel",
    attrs: {
      "cols": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "fill-height",
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "secondary white--text pa-3"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-package-variant")]), _vm._v("\n          Products\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _vm.tableId && _vm.tableId !== 'walk-in' ? _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "accent"
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-table-furniture")]), _vm._v("\n            Table " + _vm._s(_vm.displayTableId) + "\n          ")], 1) : _vm.isWalkIn ? _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "orange"
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-walk")]), _vm._v("\n            Walk-in\n          ")], 1) : _vm._e(), _vm._v(" "), _vm.selectedCustomer && _vm.selectedCustomer.grade ? _c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": _vm.getGradeColor(_vm.selectedCustomer.grade)
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-account-star")]), _vm._v("\n            Grade " + _vm._s(_vm.selectedCustomer.grade) + "\n          ")], 1) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3 pb-1"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "prepend-inner-icon": "mdi-magnify",
      "label": "Search products...",
      "outlined": "",
      "dense": "",
      "clearable": "",
      "hide-details": ""
    },
    model: {
      value: _vm.searchQuery,
      callback: function ($$v) {
        _vm.searchQuery = $$v;
      },
      expression: "searchQuery"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "loading": _vm.loading,
      "color": "primary",
      "block": ""
    },
    on: {
      "click": _vm.fetchProducts
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-refresh")]), _vm._v("\n                Refresh\n              ")], 1)], 1)], 1), _vm._v(" "), _vm.categoryFilter ? _c('div', {
    staticClass: "mt-2"
  }, [_c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": _vm.getCategoryColor(_vm.getSelectedCategoryName())
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v(_vm._s(_vm.getCategoryIcon(_vm.getSelectedCategoryName())))]), _vm._v("\n              " + _vm._s(_vm.getSelectedCategoryName()) + "\n            ")], 1), _vm._v(" "), _c('span', {
    staticClass: "caption grey--text"
  }, [_vm._v("\n              " + _vm._s(_vm.filteredProducts.length) + " products\n            ")])], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "products-content"
  }, [_vm.loading ? _c('div', {
    staticClass: "products-loading"
  }, [_c('div', {
    staticClass: "text-center pa-8"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-4"
  }, [_vm._v("Loading products...")])], 1)]) : _c('div', {
    staticClass: "pa-3"
  }, [_vm.filteredProducts.length > 0 ? _c(VRow["a" /* default */], _vm._l(_vm.filteredProducts, function (product) {
    return _c(VCol["a" /* default */], {
      key: product.id,
      staticClass: "pa-1",
      attrs: {
        "cols": "4"
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "text-center pa-3 cursor-pointer product-card",
      class: {
        'product-disabled': (!product.isActive || product.stock_count <= 0) && product.validateStockOnSale,
        'promotion-eligible': _vm.isProductInPromotion(product),
        'customer-grade-pricing': _vm.getCustomerGradePrice(product)
      },
      attrs: {
        "elevation": "2",
        "hover": "",
        "height": "auto",
        "min-height": "160",
        "disabled": (!product.isActive || product.stock_count <= 0) && product.validateStockOnSale
      }
    }, [_vm.isProductInPromotion(product) ? _c(VIcon["a" /* default */], {
      staticClass: "promotion-badge",
      attrs: {
        "color": "success",
        "small": ""
      }
    }, [_vm._v("\n                    mdi-tag\n                  ")]) : _vm._e(), _vm._v(" "), _vm.getCustomerGradePrice(product) ? _c(VChip["a" /* default */], {
      staticClass: "grade-price-badge",
      attrs: {
        "x-small": "",
        "color": _vm.getGradeColor(_vm.selectedCustomer.grade),
        "text-color": "white"
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "left": ""
      }
    }, [_vm._v("mdi-account-star")]), _vm._v("\n                    Grade " + _vm._s(_vm.selectedCustomer.grade) + "\n                  ")], 1) : _vm.hasAvailablePriceLists(product) ? _c(VChip["a" /* default */], {
      staticClass: "price-list-badge",
      attrs: {
        "x-small": "",
        "color": "purple",
        "text-color": "white"
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "left": ""
      }
    }, [_vm._v("mdi-tag-multiple")]), _vm._v("\n                    " + _vm._s(_vm.getProductPriceLists(product).length) + " prices\n                  ")], 1) : _vm._e(), _vm._v(" "), _c(components_VCard["d" /* VCardTitle */], {
      staticClass: "justify-center pa-1",
      staticStyle: {
        "line-height": "1.2",
        "font-size": "0.875rem"
      }
    }, [_vm._v("\n                    " + _vm._s(product.pro_name) + "\n                  ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-1"
    }, [_c('div', {
      staticClass: "price-section mb-2"
    }, [_vm.getCustomerGradePrice(product) ? _c('div', {
      staticClass: "text-center"
    }, [_c('div', {
      staticClass: "caption grey--text text-decoration-line-through"
    }, [_vm._v("\n                          " + _vm._s(_vm.formatPrice(product.pro_price)) + "\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "primary--text font-weight-bold"
    }, [_vm._v("\n                          " + _vm._s(_vm.formatPrice(_vm.getCustomerGradePrice(product))) + "\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "caption success--text"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "color": "success"
      }
    }, [_vm._v("mdi-account-check")]), _vm._v("\n                          Grade Price\n                        ")], 1)]) : _c('div', [_c('div', {
      staticClass: "primary--text font-weight-bold"
    }, [_vm._v("\n                          " + _vm._s(_vm.formatPrice(product.pro_price)) + "\n                        ")]), _vm._v(" "), _vm.hasAvailablePriceLists(product) ? _c('div', {
      staticClass: "caption grey--text"
    }, [_vm._v("\n                          " + _vm._s(_vm.getPriceRangeText(product)) + "\n                        ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "d-flex justify-space-between align-center mb-2"
    }, [_c(VChip["a" /* default */], {
      attrs: {
        "color": _vm.getStockColor(product.stock_count),
        "text-color": "white",
        "x-small": ""
      }
    }, [_vm._v("\n                        " + _vm._s(product.stock_count) + " left\n                      ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "d-flex gap-1"
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "color": "primary",
        "x-small": "",
        "block": "",
        "disabled": (!product.isActive || product.stock_count <= 0) && product.validateStockOnSale
      },
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return _vm.addToCart(product);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "left": ""
      }
    }, [_vm._v("mdi-cart-plus")]), _vm._v("\n                        " + _vm._s(_vm.getCustomerGradePrice(product) ? 'Add (Grade)' : 'Add') + "\n                      ")], 1), _vm._v(" "), _vm.hasAvailablePriceLists(product) || !_vm.getCustomerGradePrice(product) ? _c(VBtn["a" /* default */], {
      attrs: {
        "color": "purple",
        "x-small": "",
        "icon": "",
        "disabled": (!product.isActive || product.stock_count <= 0) && product.validateStockOnSale
      },
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return _vm.openPriceSelector(product);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-tag-multiple")])], 1) : _vm._e()], 1), _vm._v(" "), !product.isActive ? _c('div', {
      staticClass: "caption mt-1 error--text font-weight-bold"
    }, [_vm._v("\n                      INACTIVE\n                    ")]) : _vm._e()])], 1)], 1);
  }), 1) : _c('div', {
    staticClass: "text-center pa-8"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey"
    }
  }, [_vm._v("mdi-package-variant-closed")]), _vm._v(" "), _c('p', {
    staticClass: "mt-4 grey--text"
  }, [_vm._v("No products found")]), _vm._v(" "), _c('p', {
    staticClass: "grey--text"
  }, [_vm._v("\n                Try adjusting your search or category filter\n              ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.fetchProducts
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n                Refresh Products\n              ")], 1)], 1)], 1)])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "cart-panel",
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "cart-container"
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "cart-header white--text primary"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-receipt")]), _vm._v("\n          Ticket Details\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    staticClass: "accent--text",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.cart.length) + " items\n          ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "customer-section"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": "",
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-account")]), _vm._v(" "), _c('div', {
    staticClass: "flex-grow-1"
  }, [_c('div', {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                    " + _vm._s(((_vm$selectedCustomer = _vm.selectedCustomer) === null || _vm$selectedCustomer === void 0 ? void 0 : _vm$selectedCustomer.name) || 'Walk-in Customer') + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "caption grey--text"
  }, [(_vm$selectedCustomer2 = _vm.selectedCustomer) !== null && _vm$selectedCustomer2 !== void 0 && _vm$selectedCustomer2.phone ? _c('span', [_vm._v(_vm._s(_vm.selectedCustomer.phone))]) : _vm._e(), _vm._v(" "), (_vm$selectedCustomer3 = _vm.selectedCustomer) !== null && _vm$selectedCustomer3 !== void 0 && _vm$selectedCustomer3.grade ? _c('span', {
    staticClass: "ml-2"
  }, [_vm._v("\n                      • Grade " + _vm._s(_vm.selectedCustomer.grade) + "\n                    ")]) : _vm._e()])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "color": "primary"
    },
    on: {
      "click": _vm.openCustomerDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v(_vm._s(_vm.selectedCustomer ? 'mdi-account-edit' : 'mdi-account-plus'))])], 1)], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "cart-items-section"
  }, [_vm.cart.length === 0 ? _c('div', {
    staticClass: "cart-empty-state"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-1"
    }
  }, [_vm._v("mdi-cart-outline")]), _vm._v(" "), _c('p', {
    staticClass: "grey--text caption mt-2"
  }, [_vm._v("No items in cart")]), _vm._v(" "), _c('p', {
    staticClass: "grey--text caption"
  }, [_vm._v("Add items from the menu")])], 1) : _c('div', {
    staticClass: "cart-items-list"
  }, _vm._l(_vm.cart, function (item) {
    var _vm$selectedCustomer4;
    return _c(VCard["a" /* default */], {
      key: item.id,
      staticClass: "cart-item",
      class: {
        'ticket-line-item': item.isFromTicketLine
      },
      attrs: {
        "outlined": "",
        "elevation": "0"
      }
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center mb-1"
    }, [_c('div', {
      staticClass: "flex-grow-1 mr-2"
    }, [_c('div', {
      staticClass: "font-weight-medium line-clamp-1"
    }, [_vm._v("\n                    " + _vm._s(_vm.getProductName(item.pro_id)) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "caption grey--text"
    }, [_vm._v("\n                    " + _vm._s(item.categ_name) + " •\n                    " + _vm._s(_vm.formatPrice(item.pro_price)) + "/each\n                    "), _vm._v(" "), item.isCustomerGradePrice ? _c('span', {
      staticClass: "success--text"
    }, [_vm._v("\n                      • Grade " + _vm._s((_vm$selectedCustomer4 = _vm.selectedCustomer) === null || _vm$selectedCustomer4 === void 0 ? void 0 : _vm$selectedCustomer4.grade) + "\n                    ")]) : item.priceOverridden ? _c('span', {
      staticClass: "warning--text"
    }, [_vm._v("\n                      • Modified\n                    ")]) : _vm._e()]), _vm._v(" "), item.isFromTicketLine ? _c('div', {
      staticClass: "caption info--text"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "color": "info"
      }
    }, [_vm._v("mdi-history")]), _vm._v("\n                    Saved item\n                  ")], 1) : _vm._e()]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.removeFromCart(item.id);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', {
      staticClass: "d-flex align-center"
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "grey"
      },
      on: {
        "click": function ($event) {
          return _vm.updateQuantity(item.id, -1);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-minus")])], 1), _vm._v(" "), _c('span', {
      staticClass: "mx-2 font-weight-bold"
    }, [_vm._v(_vm._s(item.quantity))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "grey",
        "disabled": item.quantity >= item.stock_count && item.validateStockOnSale
      },
      on: {
        "click": function ($event) {
          return _vm.updateQuantity(item.id, 1);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-plus")])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "font-weight-bold primary--text"
    }, [_vm._v("\n                  " + _vm._s(_vm.formatPrice(item.pro_price * item.quantity)) + "\n                ")])]), _vm._v(" "), item.quantity >= item.stock_count && item.validateStockOnSale ? _c('div', {
      staticClass: "caption error--text mt-1"
    }, [_vm._v("\n                Max stock reached\n              ")]) : _vm._e(), _vm._v(" "), item.isFromTicketLine && !item.isActive ? _c('div', {
      staticClass: "caption warning--text mt-1"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": "",
        "color": "warning"
      }
    }, [_vm._v("mdi-alert")]), _vm._v("\n                Product is currently inactive\n              ")], 1) : _vm._e()]);
  }), 1)]), _vm._v(" "), _c('div', {
    staticClass: "cart-footer"
  }, [_c('div', {
    staticClass: "cart-summary"
  }, [_vm.cart.length > 0 ? _c(VCard["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "outlined": "",
      "elevation": "0"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between caption mb-1"
  }, [_c('span', [_vm._v("Total (with tax):")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatPrice(_vm.getTotalPrice())))])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between caption mb-1 text--secondary"
  }, [_c('span', [_vm._v("Base amount:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatPrice(_vm.getBaseAmount)))])]), _vm._v(" "), _vm.appliedPromotions.length > 0 ? _c('div', _vm._l(_vm.appliedPromotions, function (applied, index) {
    return _c('div', {
      key: index,
      staticClass: "d-flex justify-space-between caption success--text"
    }, [_c('span', [_vm._v(_vm._s(applied.promotion.name) + ":")]), _vm._v(" "), _c('span', [_vm._v("-" + _vm._s(_vm.formatPrice(applied.discount.amount)))])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.getTaxBreakdown().length > 0 ? _c('div', _vm._l(_vm.getTaxBreakdown(), function (taxItem) {
    return _c('div', {
      key: taxItem.code,
      staticClass: "d-flex justify-space-between caption mb-1"
    }, [_c('span', [_vm._v(_vm._s(taxItem.name) + " (" + _vm._s((taxItem.rate * 100).toFixed(2)) + "% " + _vm._s(taxItem.type) + "):")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatPrice(taxItem.taxAmount)))])]);
  }), 0) : _vm._e(), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between text-subtitle-1 font-weight-bold"
  }, [_c('span', [_vm._v("Final Total:")]), _vm._v(" "), _c('span', {
    staticClass: "primary--text"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.getFinalTotal)))])])], 1) : _vm._e()], 1), _vm._v(" "), _vm.cart.length > 0 ? _c('div', {
    staticClass: "cart-actions"
  }, [_c(VRow["a" /* default */], {
    staticClass: "mb-1",
    attrs: {
      "dense": "",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "pr-1",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "orange",
      "block": "",
      "small": "",
      "outlined": ""
    },
    on: {
      "click": _vm.openNotesDialog
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-note-plus")]), _vm._v("\n                  Notes\n                ")], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pl-1",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "block": "",
      "small": "",
      "loading": _vm.savingTicket
    },
    on: {
      "click": _vm.saveTicket
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n                  Save\n                ")], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-1",
    attrs: {
      "dense": "",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "pr-1",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "block": ""
    },
    on: {
      "click": _vm.processPayment
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-credit-card")]), _vm._v("\n                  Payment\n                ")], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pl-1",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "block": "",
      "disabled": !_vm.currentTicket
    },
    on: {
      "click": _vm.printCustomerReceipt
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n                  Print\n                ")], 1)], 1)], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "block": "",
      "small": ""
    },
    on: {
      "click": _vm.clearCart
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-cart-remove")]), _vm._v("\n              Clear Cart\n            ")], 1)], 1) : _vm._e()])], 1)])], 1), _vm._v(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "color": _vm.snackbar.color,
      "timeout": _vm.snackbar.timeout,
      "top": "",
      "right": ""
    },
    scopedSlots: _vm._u([{
      key: "action",
      fn: function ({
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._b({
          attrs: {
            "color": "white",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.snackbar.show = false;
            }
          }
        }, 'v-btn', attrs, false), [_vm._v("\n        Close\n      ")])];
      }
    }]),
    model: {
      value: _vm.snackbar.show,
      callback: function ($$v) {
        _vm.$set(_vm.snackbar, "show", $$v);
      },
      expression: "snackbar.show"
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v(_vm._s(_vm.snackbar.icon))]), _vm._v("\n      " + _vm._s(_vm.snackbar.message) + "\n    ")], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CafePOSScreen/index.vue?vue&type=template&id=48eb5314&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(107);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(108);

// EXTERNAL MODULE: ./components/CAFE/printdialog/index.vue + 4 modules
var printdialog = __webpack_require__(557);

// EXTERNAL MODULE: ./components/CAFE/paymentDialogFront/index.vue + 4 modules
var paymentDialogFront = __webpack_require__(574);

// EXTERNAL MODULE: ./components/CAFE/customerDialog/index.vue + 4 modules
var customerDialog = __webpack_require__(592);

// EXTERNAL MODULE: ./components/tickets/NotesDialog.vue + 4 modules
var NotesDialog = __webpack_require__(575);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CafePOSScreen/index.vue?vue&type=script&lang=js


















/* harmony default export */ var CafePOSScreenvue_type_script_lang_js = ({
  components: {
    NotesDialog: NotesDialog["default"],
    PrintTicketDialog: printdialog["default"],
    PaymentDialog: paymentDialogFront["default"],
    CustomerDialog: customerDialog["default"]
  },
  name: 'MenuPOSScreen',
  props: {
    tableId: {
      type: [String, Number],
      required: false,
      default: null
    },
    existingTicket: {
      type: Object,
      default: null
    },
    dialogMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      printDialogKey: 1,
      showPriceOverrideDialog: false,
      selectedProduct: null,
      selectedPriceListId: null,
      customPriceInput: null,
      priceOverrideReason: '',
      taxes: [],
      // Add taxes array to store tax configurations
      defaultTax: null,
      // Store default tax configuration
      promotions: [],
      appliedPromotions: [],
      loadingPromotions: false,
      // Notes related data
      showNotesDialog: false,
      orderNotes: '',
      savingNotes: false,
      quickNotes: ['No ice', 'Extra spicy', 'Less sugar', 'Allergic to nuts', 'Take away', 'Urgent order', 'VIP customer', 'No MSG'],
      // Restaurant configuration
      restaurantConfig: {
        name: 'Your Restaurant Name',
        address: '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567'
      },
      // Print related
      showCustomerPrint: false,
      selectedTicket: null,
      showPrintConfirmDialog: false,
      // Cart and products
      cart: [],
      products: [],
      currentTicket: null,
      loading: false,
      savingTicket: false,
      // Search and filters
      searchQuery: '',
      categoryFilter: null,
      // Changed from '' to null for better filtering
      categoryOptions: [],
      // Payment dialog
      showPaymentDialog: false,
      paymentAmount: 0,
      actionLoading: false,
      paymentLoading: false,
      paymentList: [],
      // Customer management
      customers: [],
      selectedCustomer: null,
      showCustomerDialog: false,
      loadingCustomers: false,
      // Snackbar
      snackbar: {
        show: false,
        message: '',
        color: 'success',
        icon: 'mdi-check-circle',
        timeout: 4000
      },
      // Auto-save timeout
      autoSaveTimeout: null
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllTerminal', 'findSelectedTerminal', 'currentSelectedLocation', 'findAllLocation']),
    currentTerminal() {
      console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    user() {
      return this.$auth.user || null;
    },
    getFinalTotal() {
      const baseAfterPromotions = this.getBaseAfterPromotions;
      const tax = this.calculatedTax;
      return baseAfterPromotions + tax;
    },
    // ✅ NEW: Effective price in dialog with customer grade consideration
    effectivePriceInDialog() {
      if (!this.selectedProduct) return 0;

      // Custom price takes precedence
      if (this.customPriceInput !== null && this.customPriceInput !== '') {
        return this.customPriceInput;
      }

      // Price list selected
      if (this.selectedPriceListId) {
        const priceList = this.getProductPriceLists(this.selectedProduct).find(pl => pl.id === this.selectedPriceListId);
        if (priceList) {
          return this.calculatePriceListAmount(priceList, this.selectedProduct.pro_price);
        }
      }

      // ✅ If customer has grade and product has matching price list, use it
      const customerGradePrice = this.getCustomerGradePrice(this.selectedProduct);
      if (customerGradePrice) {
        return customerGradePrice;
      }

      // Default to base price
      return this.selectedProduct.pro_price;
    },
    // ✅ NEW: Check if price selection is valid
    isValidPriceSelection() {
      if (!this.selectedProduct) return false;

      // Always allow if there's a customer grade price available (auto-applied)
      if (this.getCustomerGradePrice(this.selectedProduct)) {
        return true;
      }

      // Allow if price list is selected or custom price is entered
      if (this.selectedPriceListId || this.customPriceInput !== null && this.customPriceInput !== '' && this.customPriceInput >= 0) {
        return true;
      }
      return false;
    },
    getBaseAmount() {
      if (!this.cart.length || !this.taxes.length) {
        return this.getTotalPrice();
      }
      let totalBaseAmount = 0;
      this.cart.forEach(item => {
        const product = this.products.find(p => p.id === item.id);
        const tax = this.getProductTax(product);
        const itemTotal = item.pro_price * item.quantity;
        if (tax && tax.isActive && tax.taxType === 'INC') {
          // For tax inclusive: base = total / (1 + tax_rate)
          const baseAmount = itemTotal / (1 + parseFloat(tax.rate));
          totalBaseAmount += baseAmount;
        } else {
          // For tax exclusive or no tax: base = total
          totalBaseAmount += itemTotal;
        }
      });
      return totalBaseAmount;
    },
    getBaseAfterPromotions() {
      const baseAmount = this.getBaseAmount;
      const promotionDiscount = this.getTotalPromotionDiscount();
      return Math.max(0, baseAmount - promotionDiscount);
    },
    calculatedTax() {
      if (!this.cart.length || !this.taxes.length) return 0;
      const baseAfterPromotions = this.getBaseAfterPromotions;
      let totalTax = 0;

      // Group items by their tax configuration
      const taxGroups = new Map();
      this.cart.forEach(item => {
        const product = this.products.find(p => p.id === item.id);
        const tax = this.getProductTax(product);
        if (tax && tax.isActive) {
          const taxKey = tax.id;
          const itemTotal = item.pro_price * item.quantity;
          let itemBaseAmount;
          if (tax.taxType === 'INC') {
            // For tax inclusive: extract base amount
            itemBaseAmount = itemTotal / (1 + parseFloat(tax.rate));
          } else {
            // For tax exclusive: item total is the base amount
            itemBaseAmount = itemTotal;
          }
          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              tax: tax,
              baseAmount: 0,
              items: []
            });
          }
          const group = taxGroups.get(taxKey);
          group.baseAmount += itemBaseAmount;
          group.items.push(item);
        }
      });

      // Calculate tax for each group based on base amounts
      taxGroups.forEach(group => {
        const {
          tax,
          baseAmount
        } = group;

        // Apply proportional discount to this tax group's base amount
        const totalBaseAmount = this.getBaseAmount;
        const promotionDiscount = this.getTotalPromotionDiscount();
        const discountRatio = promotionDiscount / totalBaseAmount;
        const adjustedBaseAmount = baseAmount * (1 - discountRatio);

        // Calculate tax on the adjusted base amount
        const taxAmount = adjustedBaseAmount * parseFloat(tax.rate);
        totalTax += taxAmount;
      });
      return totalTax;
    },
    isWalkIn() {
      return !this.tableId || this.tableId === 'walk-in';
    },
    displayTableId() {
      return this.isWalkIn ? 'Walk-in' : this.tableId;
    },
    filteredProducts() {
      let filtered = this.products;

      // Search filter
      if (this.searchQuery) {
        const searchTerm = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product => {
          var _product$pro_desc, _product$barCode;
          return product.pro_name.toLowerCase().includes(searchTerm) || ((_product$pro_desc = product.pro_desc) === null || _product$pro_desc === void 0 ? void 0 : _product$pro_desc.toLowerCase().includes(searchTerm)) || product.pro_id.toString().includes(searchTerm) || ((_product$barCode = product.barCode) === null || _product$barCode === void 0 ? void 0 : _product$barCode.toLowerCase().includes(searchTerm));
        });
      }

      // Category filter
      if (this.categoryFilter) {
        filtered = filtered.filter(product => product.pro_category === this.categoryFilter);
      }

      // Sort by name
      return filtered.sort((a, b) => a.pro_name.localeCompare(b.pro_name));
    }
  },
  async mounted() {
    await this.fetchProducts();
    await this.loadCategory();
    await this.fetchCustomers();
    await this.fetchPromotions();
    await this.fetchTaxes(); // Add tax fetching

    // Load existing or provided ticket after all data is loaded
    if (this.existingTicket) {
      console.info(`LOAD PROVIDEDTICKETD ${JSON.stringify(this.existingTicket)}`);
      await this.loadProvidedTicket();
    } else {
      await this.loadExistingTicket();
    }
  },
  watch: {
    cart: {
      handler() {
        // Apply promotions whenever cart changes
        this.applyPromotions();

        // Auto-save logic
        if (!this.dialogMode && this.currentTicket && this.cart.length > 0) {
          clearTimeout(this.autoSaveTimeout);
          this.autoSaveTimeout = setTimeout(() => {
            this.saveTicket(true);
          }, 2000);
        }
      },
      deep: true
    },
    // ✅ NEW: Watch for customer changes and update cart pricing
    selectedCustomer: {
      handler(newCustomer, oldCustomer) {
        // If customer grade changed, update existing cart items
        if ((newCustomer === null || newCustomer === void 0 ? void 0 : newCustomer.grade) !== (oldCustomer === null || oldCustomer === void 0 ? void 0 : oldCustomer.grade)) {
          this.updateCartPricesForCustomerGrade();
        }
      },
      deep: true
    }
  },
  methods: {
    // ✅ NEW METHODS FOR ENHANCED LAYOUT
    getProductCountByCategory(categoryId) {
      return this.products.filter(p => p.pro_category === categoryId).length;
    },
    getCategoryIcon(categoryName) {
      // Return appropriate icons based on category
      const icons = {
        'Food': 'mdi-food',
        'Drinks': 'mdi-cup',
        'Dessert': 'mdi-cake',
        'Appetizer': 'mdi-food-fork-drink',
        'Main Course': 'mdi-silverware-fork-knife',
        'Beverage': 'mdi-glass-mug',
        'Snacks': 'mdi-cookie',
        'Salad': 'mdi-carrot',
        'Pizza': 'mdi-pizza',
        'Pasta': 'mdi-pasta',
        'Soup': 'mdi-bowl',
        'Seafood': 'mdi-fish',
        'Meat': 'mdi-cow',
        'Vegetarian': 'mdi-leaf',
        'Coffee': 'mdi-coffee',
        'Tea': 'mdi-tea',
        'Alcohol': 'mdi-glass-wine',
        'Juice': 'mdi-glass-cocktail'
        // Add more mappings as needed
      };
      return icons[categoryName] || 'mdi-circle';
    },
    getSelectedCategoryName() {
      if (!this.categoryFilter) return 'All Products';
      const category = this.categoryOptions.find(c => c.categ_id === this.categoryFilter);
      return category ? category.categ_name : 'Unknown Category';
    },
    // ✅ NEW: Get customer grade specific price for a product
    getCustomerGradePrice(product) {
      var _this$selectedCustome;
      if (!((_this$selectedCustome = this.selectedCustomer) !== null && _this$selectedCustome !== void 0 && _this$selectedCustome.grade) || !product) {
        return null;
      }
      const priceLists = this.getProductPriceLists(product);
      const matchingPriceList = priceLists.find(pl => pl.grade === this.selectedCustomer.grade);
      if (matchingPriceList) {
        return this.calculatePriceListAmount(matchingPriceList, product.pro_price);
      }
      return null;
    },
    // ✅ NEW: Get default product price (considering customer grade)
    getDefaultProductPrice(product) {
      const customerGradePrice = this.getCustomerGradePrice(product);
      return customerGradePrice || product.pro_price;
    },
    // ✅ NEW: Update cart prices when customer grade changes
    updateCartPricesForCustomerGrade() {
      var _this$selectedCustome2;
      this.cart.forEach(item => {
        // Only update if item wasn't manually overridden
        if (!item.priceOverridden && !item.isFromTicketLine) {
          const product = this.products.find(p => p.id === item.id);
          if (product) {
            const customerGradePrice = this.getCustomerGradePrice(product);
            if (customerGradePrice) {
              item.pro_price = customerGradePrice;
              item.isCustomerGradePrice = true;
            } else {
              item.pro_price = product.pro_price;
              item.isCustomerGradePrice = false;
            }
          }
        }
      });

      // Show message about price updates
      if ((_this$selectedCustome2 = this.selectedCustomer) !== null && _this$selectedCustome2 !== void 0 && _this$selectedCustome2.grade) {
        this.showMessage(`Prices updated for Grade ${this.selectedCustomer.grade} customer`, 'info', 'mdi-account-star');
      }
    },
    formatPriceDifference(diff) {
      const sign = diff >= 0 ? '+' : '';
      return sign + this.formatPrice(Math.abs(diff));
    },
    openCustomerDialog() {
      this.showCustomerDialog = true;
    },
    async fetchTaxes() {
      try {
        var _this$defaultTax;
        const response = await this.$axios.get('/api/tax/active');
        console.log('Taxes response:', response.data);
        const taxData = response.data.data || response.data;
        this.taxes = taxData.filter(tax => {
          const now = new Date();
          const effectiveFrom = new Date(tax.effectiveFrom);
          const effectiveTo = tax.effectiveTo ? new Date(tax.effectiveTo) : null;
          return tax.isActive && effectiveFrom <= now && (!effectiveTo || effectiveTo >= now);
        });
        this.defaultTax = this.taxes.find(tax => tax.isDefault) || this.taxes[0] || null;
        console.log(`Loaded ${this.taxes.length} active taxes, default:`, (_this$defaultTax = this.defaultTax) === null || _this$defaultTax === void 0 ? void 0 : _this$defaultTax.name);
      } catch (error) {
        console.error('Error fetching taxes:', error);
        this.showMessage('Failed to load tax configurations', 'error', 'mdi-alert');
        this.taxes = [];
        this.defaultTax = null;
      }
    },
    getProductTax(product) {
      if (!product || !this.taxes.length) {
        return this.defaultTax;
      }
      if (product.taxId) {
        const productTax = this.taxes.find(tax => tax.id === product.taxId);
        if (productTax) {
          return productTax;
        }
      }
      return this.defaultTax;
    },
    calculateTaxAmount(subtotal, tax) {
      if (!tax || !tax.isActive) {
        return 0;
      }
      const taxRate = parseFloat(tax.rate);
      if (tax.taxType === 'INC') {
        return subtotal * taxRate / (1 + taxRate);
      } else {
        return subtotal * taxRate;
      }
    },
    getTaxBreakdown() {
      if (!this.cart.length || !this.taxes.length) return [];
      const breakdown = [];
      const taxGroups = new Map();
      const totalBaseAmount = this.getBaseAmount;
      const promotionDiscount = this.getTotalPromotionDiscount();
      const discountRatio = promotionDiscount / totalBaseAmount;
      this.cart.forEach(item => {
        const product = this.products.find(p => p.id === item.id);
        const tax = this.getProductTax(product);
        if (tax && tax.isActive) {
          const taxKey = tax.id;
          const itemTotal = item.pro_price * item.quantity;
          let itemBaseAmount;
          if (tax.taxType === 'INC') {
            itemBaseAmount = itemTotal / (1 + parseFloat(tax.rate));
          } else {
            itemBaseAmount = itemTotal;
          }
          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              tax: tax,
              baseAmount: 0,
              items: []
            });
          }
          const group = taxGroups.get(taxKey);
          group.baseAmount += itemBaseAmount;
          group.items.push(item);
        }
      });
      taxGroups.forEach(group => {
        const {
          tax,
          baseAmount
        } = group;
        const adjustedBaseAmount = baseAmount * (1 - discountRatio);
        const taxAmount = adjustedBaseAmount * parseFloat(tax.rate);
        breakdown.push({
          name: tax.name,
          code: tax.code,
          rate: tax.rate,
          type: tax.taxType,
          baseAmount: adjustedBaseAmount,
          taxAmount: taxAmount,
          itemCount: group.items.length
        });
      });
      return breakdown;
    },
    async loadCategory() {
      this.loading = true;
      this.categoryOptions = [];
      try {
        const response = await this.$axios.get('/api/category/find');
        this.categoryOptions = response.data || [];
        console.log(`Loaded ${this.categoryOptions.length} categories`);
      } catch (error) {
        console.error('Error loading categories:', error);
        this.showMessage('Failed to load categories', 'error', 'mdi-alert');
      } finally {
        this.loading = false;
      }
    },
    isProductInPromotion(product) {
      return this.promotions.some(promotion => {
        var _conditions$applicabl, _conditions$applicabl2, _conditions$applicabl3, _conditions$applicabl4;
        if (!promotion.is_active) return false;
        const conditions = promotion.conditions;
        if (!conditions) return false;
        const inCategories = (_conditions$applicabl = conditions.applicable_categories) === null || _conditions$applicabl === void 0 ? void 0 : _conditions$applicabl.includes(product.pro_category);
        const inProducts = (_conditions$applicabl2 = conditions.applicable_products) === null || _conditions$applicabl2 === void 0 ? void 0 : _conditions$applicabl2.includes(product.id);
        const noRestrictions = !((_conditions$applicabl3 = conditions.applicable_categories) !== null && _conditions$applicabl3 !== void 0 && _conditions$applicabl3.length) && !((_conditions$applicabl4 = conditions.applicable_products) !== null && _conditions$applicabl4 !== void 0 && _conditions$applicabl4.length);
        return inCategories || inProducts || noRestrictions;
      });
    },
    getTotalAfterPromotions() {
      const subtotal = this.getTotalPrice();
      const totalDiscount = this.appliedPromotions.reduce((sum, applied) => sum + applied.discount.amount, 0);
      return Math.max(0, subtotal - totalDiscount);
    },
    getTotalPromotionDiscount() {
      return this.appliedPromotions.reduce((sum, applied) => sum + applied.discount.amount, 0);
    },
    calculateApplicablePromotions() {
      const applicablePromotions = [];
      const now = new Date();
      for (const promotion of this.promotions) {
        if (!promotion.is_active) continue;
        if (new Date(promotion.start_date) > now) continue;
        if (new Date(promotion.end_date) < now) continue;
        if (promotion.max_uses && promotion.current_uses >= promotion.max_uses) continue;
        if (this.isPromotionApplicable(promotion)) {
          applicablePromotions.push(promotion);
        }
      }
      return applicablePromotions.sort((a, b) => (b.priority || 1) - (a.priority || 1));
    },
    isPromotionApplicable(promotion) {
      const conditions = promotion.conditions;
      if (!conditions) return false;
      const applicableItems = this.cart.filter(item => {
        if (conditions.applicable_categories && conditions.applicable_categories.length > 0) {
          const product = this.products.find(p => p.id === item.id);
          if (product && conditions.applicable_categories.includes(product.pro_category)) {
            return true;
          }
        }
        if (conditions.applicable_products && conditions.applicable_products.length > 0) {
          if (conditions.applicable_products.includes(item.id)) {
            return true;
          }
        }
        if ((!conditions.applicable_categories || conditions.applicable_categories.length === 0) && (!conditions.applicable_products || conditions.applicable_products.length === 0)) {
          return true;
        }
        return false;
      });
      if (applicableItems.length === 0) return false;
      switch (promotion.type) {
        case 'buy_x_get_y':
          const totalQuantity = applicableItems.reduce((sum, item) => sum + item.quantity, 0);
          return totalQuantity >= (conditions.buy_quantity || 0);
        case 'percentage':
        case 'fixed_amount':
          if (conditions.minimum_order) {
            const applicableTotal = applicableItems.reduce((sum, item) => sum + item.pro_price * item.quantity, 0);
            return applicableTotal >= conditions.minimum_order;
          }
          return true;
        default:
          return true;
      }
    },
    applyPromotions() {
      const applicablePromotions = this.calculateApplicablePromotions();
      this.appliedPromotions = [];
      for (const promotion of applicablePromotions) {
        const discount = this.calculatePromotionDiscount(promotion);
        if (discount.amount > 0) {
          this.appliedPromotions.push({
            promotion: promotion,
            discount: discount
          });
        }
      }
    },
    calculatePromotionDiscount(promotion) {
      const applicableItems = this.getApplicableItems(promotion);
      switch (promotion.type) {
        case 'buy_x_get_y':
          return this.calculateBuyXGetYDiscount(promotion, applicableItems);
        case 'percentage':
          return this.calculatePercentageDiscount(promotion, applicableItems);
        case 'fixed_amount':
          return this.calculateFixedAmountDiscount(promotion, applicableItems);
        default:
          return {
            amount: 0,
            description: '',
            items: []
          };
      }
    },
    getApplicableItems(promotion) {
      const conditions = promotion.conditions;
      return this.cart.filter(item => {
        if (conditions.applicable_categories && conditions.applicable_categories.length > 0) {
          const product = this.products.find(p => p.id === item.id);
          if (product && conditions.applicable_categories.includes(product.pro_category)) {
            return true;
          }
        }
        if (conditions.applicable_products && conditions.applicable_products.length > 0) {
          if (conditions.applicable_products.includes(item.id)) {
            return true;
          }
        }
        if ((!conditions.applicable_categories || conditions.applicable_categories.length === 0) && (!conditions.applicable_products || conditions.applicable_products.length === 0)) {
          return true;
        }
        return false;
      });
    },
    calculateBuyXGetYDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions;
      const buyQty = conditions.buy_quantity || 0;
      const getQty = conditions.get_quantity || 0;
      const totalQuantity = applicableItems.reduce((sum, item) => sum + item.quantity, 0);
      const eligibleSets = Math.floor(totalQuantity / buyQty);
      if (eligibleSets === 0) return {
        amount: 0,
        description: '',
        items: []
      };
      let freeItems = eligibleSets * getQty;
      if (conditions.max_free_items && freeItems > conditions.max_free_items) {
        freeItems = conditions.max_free_items;
      }
      const itemPrices = applicableItems.flatMap(item => Array(item.quantity).fill(item.pro_price)).sort((a, b) => a - b);
      const discountAmount = itemPrices.slice(0, freeItems).reduce((sum, price) => sum + price, 0);
      return {
        amount: discountAmount,
        description: `Buy ${buyQty} Get ${getQty} Free`,
        items: applicableItems,
        freeItems: freeItems
      };
    },
    calculatePercentageDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions;
      const percentage = (conditions.discount_percentage || 0) / 100;
      const subtotal = applicableItems.reduce((sum, item) => sum + item.pro_price * item.quantity, 0);
      let discountAmount = subtotal * percentage;
      if (conditions.max_discount_amount && discountAmount > conditions.max_discount_amount) {
        discountAmount = conditions.max_discount_amount;
      }
      return {
        amount: discountAmount,
        description: `${conditions.discount_percentage}% off`,
        items: applicableItems
      };
    },
    calculateFixedAmountDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions;
      const discountAmount = conditions.discount_amount || 0;
      return {
        amount: discountAmount,
        description: `${discountAmount} ₭ off`,
        items: applicableItems
      };
    },
    async fetchPromotions() {
      this.loadingPromotions = true;
      try {
        const response = await this.$axios.get('/api/promotions');
        const allPromotions = response.data.data || response.data || [];
        this.promotions = allPromotions.filter(promotion => {
          const now = new Date();
          return promotion.is_active && new Date(promotion.start_date) <= now && new Date(promotion.end_date) >= now;
        });
        console.log('Active promotions loaded:', this.promotions.length);
      } catch (error) {
        console.error('Error fetching promotions:', error);
        this.promotions = [];
      } finally {
        this.loadingPromotions = false;
      }
    },
    openNotesDialog() {
      var _this$currentTicket;
      this.orderNotes = ((_this$currentTicket = this.currentTicket) === null || _this$currentTicket === void 0 ? void 0 : _this$currentTicket.notes) || this.orderNotes || '';
      this.showNotesDialog = true;
    },
    closeNotesDialog() {
      this.showNotesDialog = false;
    },
    async handleSaveNotes(notes) {
      this.orderNotes = notes;
      if (this.currentTicket) {
        this.savingNotes = true;
        try {
          await this.saveTicket(false);
          this.closeNotesDialog();
        } catch (error) {
          console.error('Error saving notes:', error);
        } finally {
          this.savingNotes = false;
        }
      } else {
        this.closeNotesDialog();
        this.showMessage('Notes will be saved with the ticket', 'info', 'mdi-information');
      }
    },
    async loadProvidedTicket() {
      try {
        console.log('Loading provided ticket:', this.existingTicket);
        this.currentTicket = this.existingTicket;
        this.orderNotes = this.currentTicket.notes || '';
        if (this.currentTicket.clientId) {
          await this.loadTicketCustomer(this.currentTicket.clientId);
        }
        await this.loadTicketLines();
        this.showMessage('Ticket loaded successfully', 'success', 'mdi-check');
      } catch (error) {
        console.error('Error loading provided ticket:', error);
        this.showMessage('Failed to load ticket', 'error', 'mdi-alert');
      }
    },
    getProductName(productId) {
      try {
        const product = this.products.find(el => el.id === parseInt(productId));
        return (product === null || product === void 0 ? void 0 : product.pro_name) || `Product ${productId}`;
      } catch (error) {
        console.error('Error getting product name:', error);
        return `Product ${productId}`;
      }
    },
    // ✅ FIXED: Include price lists in query
    async fetchProducts() {
      this.loading = true;
      try {
        const locationId = this.currentSelectedLocation['id'] || 1;
        const companyId = this.currentSelectedLocation['companyId'];

        // ✅ Include priceList in query
        let queryString = '?include=tax,priceList';
        if (companyId) {
          queryString += `&companyId=${companyId}`;
        }
        const response = await this.$axios.get(`product_f/${locationId}${queryString}`);
        console.log('Products response:', response.data);
        const productData = response.data.data || response.data;
        this.products = productData.map(product => ({
          id: product.id,
          pro_id: product.pro_id,
          pro_name: product.pro_name,
          pro_price: product.pro_price,
          duration_minutes: product.duration_minutes || 0,
          pro_desc: product.pro_desc || '',
          pro_status: product.pro_status,
          pro_image_path: product.img_path,
          retail_cost_percent: product.retail_cost_percent || 0,
          cost_price: product.cost_price,
          stock_count: product.card_count || 0,
          minStock: product.minStock || 0,
          locking_session_id: product.locking_session_id,
          barCode: product.barCode,
          vendorName: product.vendorName,
          isActive: product.isActive === 1,
          _category: 'product',
          categ_name: product.categ_name,
          co_name: product.co_name,
          companyId: product.companyId,
          img_name: product.img_name,
          receiveUnitId: product.receiveUnitId,
          stockUnitId: product.stockUnitId,
          pro_category: product.pro_category,
          validateStockOnSale: product.validateStockOnSale === 1,
          saleCurrencyId: product.saleCurrencyId,
          costCurrencyId: product.costCurrencyId,
          taxId: product.taxId,
          tax: product.tax,
          // ✅ ADD: Price list data
          priceLists: Array.isArray(product.priceLists) ? product.priceLists : [],
          priceList: product.priceList || null,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt
        }));
        console.log(`✅ Loaded ${this.products.length} products with price lists`);
        this.showMessage(`Loaded ${this.products.length} products successfully!`);
      } catch (error) {
        console.error('Error fetching products:', error);
        this.showMessage('Failed to load products. Please try again.', 'error', 'mdi-alert');
      } finally {
        this.loading = false;
      }
    },
    async fetchCustomers() {
      this.loadingCustomers = true;
      try {
        const response = await this.$axios.get('api/client/find');
        console.log('Customers response:', response.data);
        const customerData = response.data.data || response.data;
        this.customers = customerData.map(customer => ({
          id: customer.id,
          name: customer.name,
          company: customer.company,
          email: customer.email,
          address: customer.address,
          telephone: customer.telephone,
          credit: customer.credit,
          lateChargePercent: customer.lateChargePercent,
          grade: customer.grade,
          isActive: customer.isActive,
          createdAt: customer.createdAt,
          updatedAt: customer.updatedAt
        }));
        console.log(`Loaded ${this.customers.length} customers`);
      } catch (error) {
        console.error('Error fetching customers:', error);
        this.showMessage('Failed to load customers', 'error', 'mdi-alert');
      } finally {
        this.loadingCustomers = false;
      }
    },
    async loadExistingTicket() {
      if (this.isWalkIn) {
        console.log('Walk-in mode - no existing ticket to load');
        return;
      }
      try {
        const response = await this.$axios.get(`api/ticket/table/${this.tableId}/pending`);
        if (response.data && response.data.length > 0) {
          this.currentTicket = response.data[0];
          if (this.currentTicket.clientId) {
            await this.loadTicketCustomer(this.currentTicket.clientId);
          }
          await this.loadTicketLines();
        }
      } catch (error) {
        console.log('No existing ticket found or error:', error);
      }
    },
    async loadTicketCustomer(clientId) {
      try {
        const response = await this.$axios.get(`api/client/find/${clientId}`);
        this.selectedCustomer = response.data.data || response.data;
        console.log('Loaded ticket customer:', this.selectedCustomer.name);
      } catch (error) {
        console.error('Error loading ticket customer:', error);
      }
    },
    async loadTicketLines() {
      if (!this.currentTicket) return;
      try {
        const response = await this.$axios.get(`api/ticketLine/ticket/${this.currentTicket.id}`);
        const ticketLines = response.data.data || response.data;
        this.cart = ticketLines.map(line => {
          var _line$product;
          const product = this.products.find(p => p.id === line.productId);
          return {
            id: line.productId,
            pro_id: line.productId,
            pro_name: ((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.name) || (product === null || product === void 0 ? void 0 : product.pro_name) || `Product ${line.productId}`,
            categ_name: (product === null || product === void 0 ? void 0 : product.categ_name) || 'Unknown Category',
            stock_count: (product === null || product === void 0 ? void 0 : product.stock_count) || 0,
            isActive: (product === null || product === void 0 ? void 0 : product.isActive) || false,
            pro_price: line.unitPrice,
            quantity: line.quantity,
            ticketLineId: line.id,
            totalPrice: line.totalPrice || line.unitPrice * line.quantity,
            isFromTicketLine: true,
            originalTicketLinePrice: line.unitPrice
          };
        }).filter(item => item.pro_name);
        console.info(`Loaded ${this.cart.length} items from ticket lines`);
        this.applyPromotions();
      } catch (error) {
        console.error('Error loading ticket lines:', error);
        this.showMessage('Failed to load saved ticket items', 'error', 'mdi-alert');
      }
    },
    async saveTicket(silent = false) {
      if (this.cart.length === 0) {
        if (!silent) this.showMessage('Cart is empty', 'warning', 'mdi-alert');
        return;
      }
      this.savingTicket = true;
      try {
        var _this$defaultTax2;
        const subtotal = this.getTotalPrice();
        const promotionDiscount = this.getTotalPromotionDiscount();
        const afterPromotions = subtotal - promotionDiscount;
        const tax = this.calculatedTax;
        const total = afterPromotions;
        const taxBreakdown = this.getTaxBreakdown();
        const promotionItemsMap = new Map();
        this.appliedPromotions.forEach(applied => {
          const promotion = applied.promotion;
          const discount = applied.discount;
          const affectedItems = this.getApplicableItems(promotion);
          if (promotion.type === 'buy_x_get_y' && discount.freeItems > 0) {
            const sortedItems = affectedItems.flatMap(item => Array(item.quantity).fill({
              id: item.id,
              price: item.pro_price
            })).sort((a, b) => a.price - b.price);
            for (let i = 0; i < discount.freeItems && i < sortedItems.length; i++) {
              const itemId = sortedItems[i].id;
              const currentData = promotionItemsMap.get(itemId) || {
                promotionId: promotion.id,
                is_promotion_item: false,
                discount_amount: 0,
                promotion_note: ''
              };
              currentData.is_promotion_item = true;
              currentData.discount_amount += sortedItems[i].price;
              currentData.promotion_note = discount.description;
              promotionItemsMap.set(itemId, currentData);
            }
          } else {
            affectedItems.forEach(item => {
              const itemSubtotal = item.pro_price * item.quantity;
              const itemDiscountRatio = itemSubtotal / this.getApplicableItemsTotal(promotion);
              const itemDiscount = discount.amount * itemDiscountRatio;
              const currentData = promotionItemsMap.get(item.id) || {
                promotionId: promotion.id,
                is_promotion_item: false,
                discount_amount: 0,
                promotion_note: ''
              };
              if (itemDiscount > 0) {
                currentData.is_promotion_item = true;
                currentData.discount_amount += itemDiscount;
                currentData.promotion_note = discount.description;
              }
              promotionItemsMap.set(item.id, currentData);
            });
          }
        });
        let ticketData = {
          tableId: this.tableId && this.tableId !== 'walk-in' ? parseInt(this.tableId) : null,
          clientId: this.selectedCustomer ? this.selectedCustomer.id : null,
          locationId: this.currentSelectedLocation['id'] || 1,
          status: 'pending',
          subtotal: parseFloat(subtotal.toFixed(2) - tax.toFixed(2)),
          promotionDiscount: parseFloat(promotionDiscount.toFixed(2)),
          tax: parseFloat(tax.toFixed(2)),
          taxType: ((_this$defaultTax2 = this.defaultTax) === null || _this$defaultTax2 === void 0 ? void 0 : _this$defaultTax2.taxType) || null,
          total: parseFloat(total.toFixed(2)),
          paymentStatus: 'pending',
          notes: this.orderNotes || (this.selectedCustomer ? `Customer: ${this.selectedCustomer.name}` : 'Walk-in customer'),
          taxBreakdown: taxBreakdown,
          appliedPromotions: this.appliedPromotions.map(applied => ({
            promotionId: applied.promotion.id,
            promotionName: applied.promotion.name,
            discountAmount: applied.discount.amount,
            description: applied.discount.description
          })),
          ticketLines: this.cart.map(item => {
            var _this$selectedCustome3;
            const promotionData = promotionItemsMap.get(item.id);
            const product = this.products.find(p => p.id === item.id);
            const productTax = this.getProductTax(product);
            return {
              id: item.ticketLineId || undefined,
              productId: item.id,
              quantity: item.quantity,
              unitPrice: parseFloat(item.pro_price),
              totalPrice: parseFloat((item.pro_price * item.quantity).toFixed(2)),
              status: 'ordered',
              taxId: (productTax === null || productTax === void 0 ? void 0 : productTax.id) || null,
              taxRate: (productTax === null || productTax === void 0 ? void 0 : productTax.rate) || 0,
              taxType: (productTax === null || productTax === void 0 ? void 0 : productTax.taxType) || 'INC',
              promotionId: (promotionData === null || promotionData === void 0 ? void 0 : promotionData.promotionId) || null,
              is_promotion_item: (promotionData === null || promotionData === void 0 ? void 0 : promotionData.is_promotion_item) || false,
              original_price: promotionData !== null && promotionData !== void 0 && promotionData.is_promotion_item ? item.pro_price : null,
              discount_amount: (promotionData === null || promotionData === void 0 ? void 0 : promotionData.discount_amount) || 0,
              promotion_note: (promotionData === null || promotionData === void 0 ? void 0 : promotionData.promotion_note) || null,
              // ✅ ADD: Price override fields
              priceListId: item.priceListId || null,
              priceOverridden: item.priceOverridden || item.isCustomerGradePrice || false,
              priceOverrideReason: item.priceOverrideReason || (item.isCustomerGradePrice ? `Customer Grade ${(_this$selectedCustome3 = this.selectedCustomer) === null || _this$selectedCustome3 === void 0 ? void 0 : _this$selectedCustome3.grade} pricing` : null)
            };
          })
        };
        let response;
        if (this.currentTicket) {
          ticketData.updateUserId = this.user.id;
          response = await this.$axios.put(`api/ticket/${this.currentTicket.id}`, ticketData);
          this.currentTicket = response.data.data || response.data;
          this.$emit('ticket-updated', this.currentTicket);
          if (!this.dialogMode) {
            this.$emit('reload-data');
          }
          if (!silent) {
            this.showMessage('Ticket updated successfully!', 'success', 'mdi-content-save');
            if (this.$toast) {
              this.$toast.success('Ticket saved successfully');
            }
          }
        } else {
          ticketData.createUserId = this.user.id;
          response = await this.$axios.post('api/ticket/', ticketData);
          this.currentTicket = response.data.data || response.data;
          this.$emit('ticket-updated', this.currentTicket);
          if (!this.dialogMode) {
            this.$emit('reload-data');
          }
          if (!silent) {
            this.showMessage('Ticket saved successfully!', 'success', 'mdi-content-save');
          }
        }
      } catch (error) {
        console.error('Error saving ticket:', error);
        if (!silent) {
          this.showMessage('Failed to save ticket. Please try again.', 'error', 'mdi-alert');
        }
      } finally {
        this.savingTicket = false;
      }
    },
    getApplicableItemsTotal(promotion) {
      const applicableItems = this.getApplicableItems(promotion);
      return applicableItems.reduce((sum, item) => sum + item.pro_price * item.quantity, 0);
    },
    // ✅ ENHANCED: Add to cart with customer grade pricing
    addToCart(product) {
      console.log('Adding product to cart:', product);
      if (!product.isActive) {
        this.showMessage('Product is not active', 'warning', 'mdi-alert');
        return;
      }
      if (product.stock_count <= 0 && product.validateStockOnSale) {
        this.showMessage('Product is out of stock', 'warning', 'mdi-alert');
        return;
      }

      // ✅ Get customer grade price if available
      const customerGradePrice = this.getCustomerGradePrice(product);
      const priceToUse = customerGradePrice || product.pro_price;
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        const canAddMore = !product.validateStockOnSale || existingItem.quantity < product.stock_count;
        if (canAddMore) {
          existingItem.quantity += 1;
          // Only update price if not from ticket line and not manually overridden
          if (!existingItem.isFromTicketLine && !existingItem.priceOverridden) {
            existingItem.pro_price = parseFloat(priceToUse);
            existingItem.isCustomerGradePrice = !!customerGradePrice;
          }
        } else {
          this.showMessage('Maximum stock reached', 'warning', 'mdi-alert');
        }
      } else {
        this.cart.push({
          id: product.id,
          pro_id: product.id,
          pro_name: product.pro_name,
          pro_price: parseFloat(priceToUse),
          categ_name: product.categ_name,
          stock_count: product.stock_count,
          isActive: product.isActive,
          validateStockOnSale: product.validateStockOnSale,
          quantity: 1,
          isFromTicketLine: false,
          priceOverridden: false,
          originalPrice: parseFloat(product.pro_price),
          isCustomerGradePrice: !!customerGradePrice
        });
      }

      // Show appropriate message
      const priceMessage = customerGradePrice ? `with Grade ${this.selectedCustomer.grade} price (${this.formatPrice(priceToUse)})` : `(${this.formatPrice(priceToUse)})`;
      this.showMessage(`${product.pro_name} added ${priceMessage}`, 'success', 'mdi-cart-plus');
    },
    // ✅ Enhanced price selection with customer grade consideration
    applyPriceSelection() {
      if (!this.selectedProduct) return;
      const effectivePrice = this.effectivePriceInDialog;
      if (!this.selectedProduct.isActive) {
        this.showMessage('Product is not active', 'warning', 'mdi-alert');
        return;
      }
      if (this.selectedProduct.stock_count <= 0 && this.selectedProduct.validateStockOnSale) {
        this.showMessage('Product is out of stock', 'warning', 'mdi-alert');
        return;
      }
      const existingItem = this.cart.find(item => item.id === this.selectedProduct.id);
      const isCustomerGrade = this.getCustomerGradePrice(this.selectedProduct) && !this.customPriceInput && !this.selectedPriceListId;
      if (existingItem) {
        const canAddMore = !this.selectedProduct.validateStockOnSale || existingItem.quantity < this.selectedProduct.stock_count;
        if (canAddMore) {
          existingItem.quantity += 1;
          // Update price details
          existingItem.pro_price = effectivePrice;
          existingItem.priceOverridden = !!(this.customPriceInput || this.selectedPriceListId);
          existingItem.priceListId = this.selectedPriceListId;
          existingItem.priceOverrideReason = this.priceOverrideReason || null;
          existingItem.isCustomerGradePrice = isCustomerGrade;
        } else {
          this.showMessage('Maximum stock reached', 'warning', 'mdi-alert');
          return;
        }
      } else {
        this.cart.push({
          id: this.selectedProduct.id,
          pro_id: this.selectedProduct.id,
          pro_name: this.selectedProduct.pro_name,
          pro_price: effectivePrice,
          categ_name: this.selectedProduct.categ_name,
          stock_count: this.selectedProduct.stock_count,
          isActive: this.selectedProduct.isActive,
          validateStockOnSale: this.selectedProduct.validateStockOnSale,
          quantity: 1,
          isFromTicketLine: false,
          priceOverridden: !!(this.customPriceInput || this.selectedPriceListId),
          priceListId: this.selectedPriceListId,
          originalPrice: this.selectedProduct.pro_price,
          priceOverrideReason: this.priceOverrideReason || null,
          isCustomerGradePrice: isCustomerGrade
        });
      }
      let message = `${this.selectedProduct.pro_name} added with ${this.formatPrice(effectivePrice)}`;
      if (isCustomerGrade) {
        message += ` (Grade ${this.selectedCustomer.grade})`;
      } else if (this.selectedPriceListId) {
        message += ` (Price List Applied)`;
      } else if (this.customPriceInput) {
        message += ` (Custom Price)`;
      }
      this.showMessage(message, 'success', 'mdi-cart-plus');
      this.closePriceOverrideDialog();
    },
    onPriceListSelection() {
      this.customPriceInput = null;
    },
    closePriceOverrideDialog() {
      this.showPriceOverrideDialog = false;
      this.selectedProduct = null;
      this.selectedPriceListId = null;
      this.customPriceInput = null;
      this.priceOverrideReason = '';
    },
    hasAvailablePriceLists(product) {
      return this.getProductPriceLists(product).length > 0;
    },
    getProductPriceLists(product) {
      if (!product) return [];
      if (Array.isArray(product.priceLists)) {
        return product.priceLists.filter(pl => pl.isActive);
      }
      if (product.priceList && product.priceList.isActive) {
        return [product.priceList];
      }
      return [];
    },
    // ✅ FIXED: Include base price option
    getPriceListOptions(product) {
      if (!product) return [];
      const options = [];
      const priceLists = this.getProductPriceLists(product);

      // Always show base price as first option
      options.push({
        id: null,
        label: 'Base Price',
        grade: 'BASE',
        price: product.pro_price,
        type: 'Price',
        amount: product.pro_price
      });

      // Add all price list options
      priceLists.forEach(pl => {
        options.push({
          id: pl.id,
          label: `${pl.grade} - ${pl.name}`,
          grade: pl.grade,
          price: this.calculatePriceListAmount(pl, product.pro_price),
          type: pl.type,
          amount: pl.amount
        });
      });
      return options;
    },
    calculatePriceListAmount(priceList, basePrice) {
      if (!priceList) return basePrice;
      if (priceList.type === 'Price') {
        return priceList.amount;
      } else if (priceList.type === 'Percent') {
        return basePrice * (1 + priceList.amount / 100);
      }
      return basePrice;
    },
    getPriceRangeText(product) {
      const priceLists = this.getProductPriceLists(product);
      if (priceLists.length === 0) return '';
      const prices = priceLists.map(pl => this.calculatePriceListAmount(pl, product.pro_price));
      const minPrice = Math.min(...prices, product.pro_price);
      const maxPrice = Math.max(...prices, product.pro_price);
      if (minPrice === maxPrice) return '';
      return `${this.formatPrice(minPrice)} - ${this.formatPrice(maxPrice)}`;
    },
    openPriceSelector(product) {
      this.selectedProduct = product;
      this.selectedPriceListId = null;
      this.customPriceInput = null;
      this.priceOverrideReason = '';
      this.showPriceOverrideDialog = true;
    },
    updateQuantity(itemId, change) {
      const item = this.cart.find(i => i.id === itemId);
      if (!item) return;
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        this.removeFromCart(itemId);
        return;
      }
      if (newQuantity > item.stock_count && item.validateStockOnSale) {
        this.showMessage('Maximum stock reached', 'warning', 'mdi-alert');
        return;
      }
      item.quantity = newQuantity;
    },
    removeFromCart(itemId) {
      const itemIndex = this.cart.findIndex(item => item.id === itemId);
      if (itemIndex > -1) {
        const item = this.cart[itemIndex];
        this.cart.splice(itemIndex, 1);
        this.showMessage(`${item.pro_name} removed from cart`, 'info', 'mdi-information');
      }
    },
    clearCart() {
      if (this.cart.length === 0) {
        this.showMessage('Cart is already empty', 'info', 'mdi-information');
        return;
      }
      const itemCount = this.getTotalItems();
      const totalAmount = this.getTotalPrice();
      this.cart = [];
      this.currentTicket = null;
      this.selectedCustomer = null;
      this.appliedPromotions = [];
      this.showMessage(`Cart cleared - ${itemCount} items (${this.formatPrice(totalAmount)}) removed`, 'info', 'mdi-cart-remove');
    },
    async loadPaymentMethods() {
      this.paymentLoading = true;
      this.paymentList = [];
      try {
        const response = await this.$axios.get('/api/paymentMethod/find');
        this.paymentList = response.data.filter(payment => payment.isActive);
        console.log('Payment methods loaded:', this.paymentList);
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.showMessage('Failed to load payment methods', 'error', 'mdi-alert');
      } finally {
        this.paymentLoading = false;
      }
    },
    async processPayment() {
      if (!this.currentTicket) {
        await this.saveTicket();
      }
      const total = this.getFinalTotal || 0;
      if (total <= 0) {
        this.showMessage('No amount to process', 'warning', 'mdi-alert');
        return;
      }
      this.paymentAmount = total;
      await this.loadPaymentMethods();
      this.showPaymentDialog = true;
    },
    async handlePaymentConfirm(selectedPaymentMethod) {
      this.actionLoading = true;
      try {
        var _this$currentTicket2;
        if ((_this$currentTicket2 = this.currentTicket) !== null && _this$currentTicket2 !== void 0 && _this$currentTicket2.id) {
          await this.$axios.patch(`/api/ticket/${this.currentTicket.id}/payment-status`, {
            paymentStatus: 'paid',
            paymentId: selectedPaymentMethod.id
          });
        }
        this.closePaymentDialog();
        // this.showPrintConfirmDialog = true
        this.handlePrintConfirmation(true);
        if (!this.isWalkIn) {
          await this.updateTableStatus('cleaning');
        }
        this.$emit('ticket-updated', this.currentTicket);
        this.$emit('reload-data');
      } catch (error) {
        console.error('Payment processing error:', error);
        this.showMessage('Failed to process payment', 'error', 'mdi-alert');
      } finally {
        this.actionLoading = false;
      }
    },
    handlePrintConfirmation(shouldPrint) {
      this.showPrintConfirmDialog = false;
      if (shouldPrint) {
        this.printCustomerReceipt();
      } else {
        this.showMessage(`Payment of ${this.formatPrice(this.paymentAmount)} processed successfully`, 'success', 'mdi-check-circle');
      }
      this.paymentAmount = 0;
    },
    closePaymentDialog() {
      this.showPaymentDialog = false;
      this.paymentAmount = 0;
    },
    async updateTableStatus(status) {
      if (this.isWalkIn) {
        console.log('Walk-in ticket - skipping table status update');
        return;
      }
      try {
        var _this$currentTicket3;
        const payload = {
          status,
          timeOccupied: status === 'occupied' ? new Date() : null,
          currentOrderId: status === 'occupied' ? (_this$currentTicket3 = this.currentTicket) === null || _this$currentTicket3 === void 0 ? void 0 : _this$currentTicket3.id : null
        };
        await this.$axios.patch(`api/tables/${this.tableId}/status`, payload);
        await this.loadExistingTicket();
        this.$emit('reload-data');
        this.$emit('reload-table');
      } catch (error) {
        console.error('Error updating table status:', error);
      }
    },
    handleCustomerSelected(customer) {
      this.selectedCustomer = customer;
      this.showMessage(`Customer ${customer.name} selected`, 'success', 'mdi-account-check');
    },
    handleWalkInSelected() {
      this.selectedCustomer = null;
      this.showMessage('Walk-in customer selected', 'info', 'mdi-walk');
    },
    async handleSaveCustomer(customerData) {
      try {
        console.log('Saving customer:', customerData);
        const response = await this.$axios.post('api/client/create', customerData);
        const savedCustomer = response.data.data || response.data;
        this.customers.unshift(savedCustomer);
        this.selectedCustomer = savedCustomer;
        this.showMessage(`Customer ${savedCustomer.name} created successfully!`, 'success', 'mdi-account-plus');
      } catch (error) {
        var _error$response;
        console.error('Error saving customer:', error);
        if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400) {
          this.showMessage('Invalid customer data. Please check all fields.', 'error', 'mdi-alert');
        } else {
          this.showMessage('Failed to save customer. Please try again.', 'error', 'mdi-alert');
        }
      }
    },
    closeCustomerDialog() {
      this.showCustomerDialog = false;
    },
    async printCustomerReceipt() {
      console.log('Print button clicked');
      if (!this.currentTicket) {
        this.showMessage('Please save the ticket first before printing', 'warning', 'mdi-alert');
        return;
      }
      try {
        this.loading = true;
        const ticketResponse = await this.$axios.get(`api/ticket/${this.currentTicket.id}`);
        const latestTicket = ticketResponse.data.data || ticketResponse.data;
        let customerData = null;
        if (latestTicket.clientId) {
          try {
            const customerResponse = await this.$axios.get(`api/client/find/${latestTicket.clientId}`);
            customerData = customerResponse.data.data || customerResponse.data;
          } catch (error) {
            console.warn('Could not fetch customer data:', error);
            customerData = this.selectedCustomer;
          }
        }
        const ticketLinesResponse = await this.$axios.get(`api/ticketLine/ticket/${latestTicket.id}`);
        const ticketLines = ticketLinesResponse.data.data || ticketLinesResponse.data;
        const mappedTicketLines = ticketLines.map(line => {
          var _line$product2;
          const product = this.products.find(p => p.id === line.productId);
          return {
            id: line.productId,
            pro_id: line.productId,
            pro_name: ((_line$product2 = line.product) === null || _line$product2 === void 0 ? void 0 : _line$product2.name) || (product === null || product === void 0 ? void 0 : product.pro_name) || `Product ${line.productId}`,
            categ_name: (product === null || product === void 0 ? void 0 : product.categ_name) || 'Unknown Category',
            stock_count: (product === null || product === void 0 ? void 0 : product.stock_count) || 0,
            isActive: (product === null || product === void 0 ? void 0 : product.isActive) || false,
            pro_price: line.unitPrice,
            quantity: line.quantity,
            ticketLineId: line.id,
            totalPrice: line.totalPrice || line.unitPrice * line.quantity,
            isFromTicketLine: true,
            originalTicketLinePrice: line.unitPrice
          };
        }).filter(item => item.pro_name);
        const ticketForPrint = {
          ...latestTicket,
          client: customerData,
          table: this.isWalkIn ? {
            id: null,
            number: null,
            name: 'Walk-in'
          } : {
            id: this.tableId,
            number: this.tableId,
            name: `Table ${this.tableId}`
          },
          ticketLines: mappedTicketLines
        };
        if (!ticketForPrint.subtotal || !ticketForPrint.promotionDiscount) {
          const subtotal = mappedTicketLines.reduce((total, item) => {
            return total + parseFloat(item.pro_price) * item.quantity;
          }, 0);
          if (!ticketForPrint.promotionDiscount) {
            const promotionDiscount = this.getTotalPromotionDiscount();
            ticketForPrint.promotionDiscount = promotionDiscount;
            ticketForPrint.subtotal = subtotal;
          }
        }
        console.log('Updated ticket for print:', ticketForPrint);
        this.currentTicket = latestTicket;
        this.selectedTicket = ticketForPrint;
        this.printDialogKey++;
        this.showCustomerPrint = true;
        // this.onPrintSuccess()
      } catch (error) {
        console.error('Error fetching latest ticket data for printing:', error);
        this.showMessage('Failed to load latest ticket data. Using current data for printing.', 'warning', 'mdi-alert');
        const ticketForPrint = {
          ...this.currentTicket,
          client: this.selectedCustomer || null,
          table: this.isWalkIn ? {
            id: null,
            number: null,
            name: 'Walk-in'
          } : {
            id: this.tableId,
            number: this.tableId,
            name: `Table ${this.tableId}`
          },
          ticketLines: this.cart,
          subtotal: this.getTotalPrice(),
          promotionDiscount: this.getTotalPromotionDiscount(),
          tax: this.getTotalAfterPromotions() * 0.085,
          total: this.getFinalTotal
        };
        this.selectedTicket = ticketForPrint;
        this.printDialogKey++;
        this.showCustomerPrint = true;
      } finally {
        this.loading = false;
      }
    },
    closePrintDialog() {
      this.showCustomerPrint = false;
      this.selectedTicket = null;
    },
    onPrintSuccess(ticket) {
      console.log('Ticket printed successfully:', ticket.id);
      this.showMessage('Ticket printed successfully!', 'success', 'mdi-printer');
    },
    showMessage(message, color = 'success', icon = 'mdi-check-circle') {
      this.snackbar = {
        show: true,
        message,
        color,
        icon,
        timeout: 4000
      };
    },
    getCurrentProductPrice(productId) {
      const product = this.products.find(p => p.id === productId);
      return product ? parseFloat(product.pro_price) : 0;
    },
    getTotalPrice() {
      return this.cart.reduce((total, item) => {
        return total + parseFloat(item.pro_price) * item.quantity;
      }, 0);
    },
    getTotalItems() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    formatTaxDisplay(tax) {
      if (!tax) return 'No Tax';
      const percentage = (parseFloat(tax.rate) * 100).toFixed(2);
      return `${tax.name} (${percentage}% ${tax.taxType})`;
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    formatDateTime(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleString();
    },
    getCategoryColor(categoryName) {
      const colors = {
        'Food': 'success',
        'Drinks': 'info',
        'Dessert': 'pink',
        'Appetizer': 'orange',
        'Main Course': 'red',
        'Beverage': 'blue',
        'Snacks': 'yellow',
        'Salad': 'green',
        'Pizza': 'deep-orange',
        'Pasta': 'amber',
        'Soup': 'teal',
        'Seafood': 'cyan',
        'Meat': 'brown',
        'Vegetarian': 'light-green',
        'Coffee': 'deep-purple',
        'Tea': 'green',
        'Alcohol': 'purple',
        'Juice': 'orange'
      };
      return colors[categoryName] || 'grey';
    },
    getStockColor(stockCount) {
      if (stockCount <= 0) return 'error';
      if (stockCount <= 5) return 'warning';
      return 'success';
    },
    getTicketStatusColor(status) {
      const colors = {
        pending: 'orange',
        preparing: 'blue',
        ready: 'green',
        served: 'purple',
        paid: 'success'
      };
      return colors[status] || 'grey';
    },
    getGradeColor(grade) {
      const colors = {
        A: 'success',
        B: 'info',
        C: 'warning',
        D: 'orange',
        E: 'deep-orange',
        F: 'error',
        BASE: 'grey'
      };
      return colors[grade] || 'grey';
    }
  },
  beforeDestroy() {
    if (this.autoSaveTimeout) {
      clearTimeout(this.autoSaveTimeout);
    }
  }
});
// CONCATENATED MODULE: ./components/CafePOSScreen/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CafePOSScreenvue_type_script_lang_js = (CafePOSScreenvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CafePOSScreen/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(605)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CafePOSScreenvue_type_script_lang_js,
  CafePOSScreenvue_type_template_id_48eb5314_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "48eb5314",
  "79b8fefa"
  
)

/* harmony default export */ var CafePOSScreen = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTabs/VTabs.sass
var VTabs = __webpack_require__(530);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
var VSlideGroup = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js
var ssr_bootable = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsBar.js
// Extensions
 // Mixins


 // Utilities


/* harmony default export */ var VTabsBar = (Object(mixins["a" /* default */])(VSlideGroup["a" /* BaseSlideGroup */], ssr_bootable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-tabs-bar',
  provide() {
    return {
      tabsBar: this
    };
  },
  computed: {
    classes() {
      return {
        ...VSlideGroup["a" /* BaseSlideGroup */].options.computed.classes.call(this),
        'v-tabs-bar': true,
        'v-tabs-bar--is-mobile': this.isMobile,
        // TODO: Remove this and move to v-slide-group
        'v-tabs-bar--show-arrows': this.showArrows,
        ...this.themeClasses
      };
    }
  },
  watch: {
    items: 'callSlider',
    internalValue: 'callSlider',
    $route: 'onRouteChange'
  },
  methods: {
    callSlider() {
      if (!this.isBooted) return;
      this.$emit('call:slider');
    },
    genContent() {
      const render = VSlideGroup["a" /* BaseSlideGroup */].options.methods.genContent.call(this);
      render.data = render.data || {};
      render.data.staticClass += ' v-tabs-bar__content';
      return render;
    },
    onRouteChange(val, oldVal) {
      /* istanbul ignore next */
      if (this.mandatory) return;
      const items = this.items;
      const newPath = val.path;
      const oldPath = oldVal.path;
      let hasNew = false;
      let hasOld = false;
      for (const item of items) {
        if (item.to === oldPath) hasOld = true;else if (item.to === newPath) hasNew = true;
        if (hasNew && hasOld) break;
      } // If we have an old item and not a new one
      // it's assumed that the user navigated to
      // a path that is not present in the items

      if (!hasNew && hasOld) this.internalValue = undefined;
    }
  },
  render(h) {
    const render = VSlideGroup["a" /* BaseSlideGroup */].options.render.call(this, h);
    render.data.attrs = {
      role: 'tablist'
    };
    return render;
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js
var VTabsItems = __webpack_require__(532);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
// Mixins
 // Utilities


/* @vue/component */

/* harmony default export */ var VTabsSlider = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  name: 'v-tabs-slider',
  render(h) {
    return h('div', this.setBackgroundColor(this.color, {
      staticClass: 'v-tabs-slider'
    }));
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js
// Styles
 // Components



 // Mixins



 // Directives

 // Utilities



const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], proxyable["a" /* default */], themeable["a" /* default */]);
/* harmony default export */ var VTabs_VTabs = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-tabs',
  directives: {
    Resize: resize["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: ''
    },
    alignWithTitle: Boolean,
    backgroundColor: String,
    centerActive: Boolean,
    centered: Boolean,
    fixedTabs: Boolean,
    grow: Boolean,
    height: {
      type: [Number, String],
      default: undefined
    },
    hideSlider: Boolean,
    iconsAndText: Boolean,
    mobileBreakpoint: [String, Number],
    nextIcon: {
      type: String,
      default: '$next'
    },
    optional: Boolean,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    right: Boolean,
    showArrows: [Boolean, String],
    sliderColor: String,
    sliderSize: {
      type: [Number, String],
      default: 2
    },
    vertical: Boolean
  },
  data() {
    return {
      resizeTimeout: 0,
      slider: {
        height: null,
        left: null,
        right: null,
        top: null,
        width: null
      },
      transitionTime: 300
    };
  },
  computed: {
    classes() {
      return {
        'v-tabs--align-with-title': this.alignWithTitle,
        'v-tabs--centered': this.centered,
        'v-tabs--fixed-tabs': this.fixedTabs,
        'v-tabs--grow': this.grow,
        'v-tabs--icons-and-text': this.iconsAndText,
        'v-tabs--right': this.right,
        'v-tabs--vertical': this.vertical,
        ...this.themeClasses
      };
    },
    isReversed() {
      return this.$vuetify.rtl && this.vertical;
    },
    sliderStyles() {
      return {
        height: Object(helpers["h" /* convertToUnit */])(this.slider.height),
        left: this.isReversed ? undefined : Object(helpers["h" /* convertToUnit */])(this.slider.left),
        right: this.isReversed ? Object(helpers["h" /* convertToUnit */])(this.slider.right) : undefined,
        top: this.vertical ? Object(helpers["h" /* convertToUnit */])(this.slider.top) : undefined,
        transition: this.slider.left != null ? null : 'none',
        width: Object(helpers["h" /* convertToUnit */])(this.slider.width)
      };
    },
    computedColor() {
      if (this.color) return this.color;else if (this.isDark && !this.appIsDark) return 'white';else return 'primary';
    }
  },
  watch: {
    alignWithTitle: 'callSlider',
    centered: 'callSlider',
    centerActive: 'callSlider',
    fixedTabs: 'callSlider',
    grow: 'callSlider',
    iconsAndText: 'callSlider',
    right: 'callSlider',
    showArrows: 'callSlider',
    vertical: 'callSlider',
    '$vuetify.application.left': 'onResize',
    '$vuetify.application.right': 'onResize',
    '$vuetify.rtl': 'onResize'
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(() => {
        this.onResize();
      });
      obs.observe(this.$el);
      this.$on('hook:destroyed', () => {
        obs.disconnect();
      });
    }
    this.$nextTick(() => {
      window.setTimeout(this.callSlider, 30);
    });
  },
  methods: {
    callSlider() {
      if (this.hideSlider || !this.$refs.items || !this.$refs.items.selectedItems.length) {
        this.slider.width = 0;
        return false;
      }
      this.$nextTick(() => {
        // Give screen time to paint
        const activeTab = this.$refs.items.selectedItems[0];
        /* istanbul ignore if */

        if (!activeTab || !activeTab.$el) {
          this.slider.width = 0;
          this.slider.left = 0;
          return;
        }
        const el = activeTab.$el;
        this.slider = {
          height: !this.vertical ? Number(this.sliderSize) : el.scrollHeight,
          left: this.vertical ? 0 : el.offsetLeft,
          right: this.vertical ? 0 : el.offsetLeft + el.offsetWidth,
          top: el.offsetTop,
          width: this.vertical ? Number(this.sliderSize) : el.scrollWidth
        };
      });
      return true;
    },
    genBar(items, slider) {
      const data = {
        style: {
          height: Object(helpers["h" /* convertToUnit */])(this.height)
        },
        props: {
          activeClass: this.activeClass,
          centerActive: this.centerActive,
          dark: this.dark,
          light: this.light,
          mandatory: !this.optional,
          mobileBreakpoint: this.mobileBreakpoint,
          nextIcon: this.nextIcon,
          prevIcon: this.prevIcon,
          showArrows: this.showArrows,
          value: this.internalValue
        },
        on: {
          'call:slider': this.callSlider,
          change: val => {
            this.internalValue = val;
          }
        },
        ref: 'items'
      };
      this.setTextColor(this.computedColor, data);
      this.setBackgroundColor(this.backgroundColor, data);
      return this.$createElement(VTabsBar, data, [this.genSlider(slider), items]);
    },
    genItems(items, item) {
      // If user provides items
      // opt to use theirs
      if (items) return items; // If no tabs are provided
      // render nothing

      if (!item.length) return null;
      return this.$createElement(VTabsItems["a" /* default */], {
        props: {
          value: this.internalValue
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, item);
    },
    genSlider(slider) {
      if (this.hideSlider) return null;
      if (!slider) {
        slider = this.$createElement(VTabsSlider, {
          props: {
            color: this.sliderColor
          }
        });
      }
      return this.$createElement('div', {
        staticClass: 'v-tabs-slider-wrapper',
        style: this.sliderStyles
      }, [slider]);
    },
    onResize() {
      if (this._isDestroyed) return;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.callSlider, 0);
    },
    parseNodes() {
      let items = null;
      let slider = null;
      const item = [];
      const tab = [];
      const slot = this.$slots.default || [];
      const length = slot.length;
      for (let i = 0; i < length; i++) {
        const vnode = slot[i];
        if (vnode.componentOptions) {
          switch (vnode.componentOptions.Ctor.options.name) {
            case 'v-tabs-slider':
              slider = vnode;
              break;
            case 'v-tabs-items':
              items = vnode;
              break;
            case 'v-tab-item':
              item.push(vnode);
              break;
            // case 'v-tab' - intentionally omitted

            default:
              tab.push(vnode);
          }
        } else {
          tab.push(vnode);
        }
      }
      /**
       * tab: array of `v-tab`
       * slider: single `v-tabs-slider`
       * items: single `v-tabs-items`
       * item: array of `v-tab-item`
       */

      return {
        tab,
        slider,
        items,
        item
      };
    }
  },
  render(h) {
    const {
      tab,
      slider,
      items,
      item
    } = this.parseNodes();
    return h('div', {
      staticClass: 'v-tabs',
      class: this.classes,
      directives: [{
        name: 'resize',
        modifiers: {
          quiet: true
        },
        value: this.onResize
      }]
    }, [this.genBar(tab, slider), this.genItems(items, item)]);
  }
}));

/***/ })

};;
//# sourceMappingURL=c-a-f-e-p-o-s-dialog.js.map