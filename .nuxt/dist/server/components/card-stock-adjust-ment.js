exports.ids = [44];
exports.modules = {

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(432);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(411);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(407);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(433);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(467);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/stockAdjustMent.vue?vue&type=template&id=4385b358&scoped=true



















var stockAdjustMentvue_type_template_id_4385b358_scoped_true_render = function render() {
  var _vm$selectedProduct, _vm$baseUnit, _vm$selectedProduct2, _vm$baseUnit2, _vm$baseUnit3;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": ""
    },
    model: {
      value: _vm.localDialog,
      callback: function ($$v) {
        _vm.localDialog = $$v;
      },
      expression: "localDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "dialog-title warning"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-pencil")]), _vm._v(" "), _c('span', {
    staticClass: "white--text"
  }, [_vm._v("Adjust Stock - " + _vm._s((_vm$selectedProduct = _vm.selectedProduct) === null || _vm$selectedProduct === void 0 ? void 0 : _vm$selectedProduct.pro_name))])], 1), _vm._v(" "), _c(VForm["a" /* default */], {
    ref: "adjustForm",
    model: {
      value: _vm.formValid,
      callback: function ($$v) {
        _vm.formValid = $$v;
      },
      expression: "formValid"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "New Stock Quantity*",
      "type": "number",
      "min": "0",
      "step": "0.01",
      "rules": [_vm.rules.required, _vm.rules.nonNegative],
      "outlined": "",
      "prepend-inner-icon": "mdi-package",
      "suffix": ((_vm$baseUnit = _vm.baseUnit) === null || _vm$baseUnit === void 0 ? void 0 : _vm$baseUnit.symbol) || 'units',
      "hint": "Enter the corrected stock quantity",
      "persistent-hint": ""
    },
    model: {
      value: _vm.formData.newQuantity,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "newQuantity", _vm._n($$v));
      },
      expression: "formData.newQuantity"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.adjustmentReasons,
      "label": "Adjustment Reason*",
      "rules": [_vm.rules.required],
      "outlined": "",
      "prepend-inner-icon": "mdi-help-circle",
      "clearable": "",
      "placeholder": "Select reason for adjustment..."
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item))])], 1)];
      }
    }]),
    model: {
      value: _vm.formData.reason,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "reason", $$v);
      },
      expression: "formData.reason"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Notes*",
      "rules": [_vm.rules.required],
      "outlined": "",
      "rows": "3",
      "prepend-inner-icon": "mdi-note-text",
      "placeholder": "Explain the reason for this adjustment...",
      "hint": "Detailed explanation is required for audit purposes",
      "persistent-hint": ""
    },
    model: {
      value: _vm.formData.notes,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "notes", $$v);
      },
      expression: "formData.notes"
    }
  })], 1)], 1), _vm._v(" "), _vm.selectedProduct && _vm.formData.newQuantity !== null ? _c(VAlert["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "type": _vm.getAdjustmentType(),
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "adjustment-summary"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c('div', [_c('strong', [_vm._v("Current Stock:")]), _vm._v(" \n                " + _vm._s(_vm.formatNumber(((_vm$selectedProduct2 = _vm.selectedProduct) === null || _vm$selectedProduct2 === void 0 ? void 0 : _vm$selectedProduct2.stock_count) || 0)) + " " + _vm._s((_vm$baseUnit2 = _vm.baseUnit) === null || _vm$baseUnit2 === void 0 ? void 0 : _vm$baseUnit2.symbol) + "\n              ")]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("New Stock:")]), _vm._v(" \n                " + _vm._s(_vm.formatNumber(_vm.formData.newQuantity)) + " " + _vm._s((_vm$baseUnit3 = _vm.baseUnit) === null || _vm$baseUnit3 === void 0 ? void 0 : _vm$baseUnit3.symbol) + "\n              ")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between"
  }, [_c('div', [_c('strong', [_vm._v("Adjustment:")]), _vm._v(" "), _c('span', {
    class: _vm.getDifferenceClass()
  }, [_vm._v("\n                  " + _vm._s(_vm.formatDifference()) + "\n                ")])]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Adjustment Type:")]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": _vm.getAdjustmentType(),
      "dark": ""
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.getAdjustmentDirection()) + "\n                ")])], 1)]), _vm._v(" "), _vm.showStockWarning() ? _c(VAlert["a" /* default */], {
    staticClass: "mt-2 mb-0",
    attrs: {
      "type": "warning",
      "dense": "",
      "text": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-alert")]), _vm._v("\n              " + _vm._s(_vm.getStockWarningMessage()) + "\n            ")], 1) : _vm._e()], 1)]) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "loading": _vm.saving,
      "disabled": !_vm.formValid
    },
    on: {
      "click": _vm.saveStockAdjustment
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n          Adjust Stock\n        ")], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/card/stockAdjustMent.vue?vue&type=template&id=4385b358&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/stockAdjustMent.vue?vue&type=script&lang=js
/* harmony default export */ var stockAdjustMentvue_type_script_lang_js = ({
  name: 'StockAdjustmentDialog',
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    selectedProduct: {
      type: Object,
      default: null
    },
    saving: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formValid: false,
      formData: {
        newQuantity: null,
        reason: null,
        notes: ''
      },
      adjustmentReasons: ['Physical Count Correction', 'Damaged/Expired Products', 'Theft/Loss', 'Return to Supplier', 'Transfer to Another Location', 'Spoilage/Waste', 'System Error Correction', 'Opening Stock Adjustment', 'Other'],
      rules: {
        required: value => !!value || 'This field is required',
        nonNegative: value => value >= 0 || 'Must be 0 or greater'
      }
    };
  },
  computed: {
    localDialog: {
      get() {
        return this.dialog;
      },
      set(value) {
        this.$emit('update:dialog', value);
      }
    },
    baseUnit() {
      var _this$selectedProduct, _this$selectedProduct2;
      return ((_this$selectedProduct = this.selectedProduct) === null || _this$selectedProduct === void 0 ? void 0 : _this$selectedProduct.baseUnit) || ((_this$selectedProduct2 = this.selectedProduct) === null || _this$selectedProduct2 === void 0 ? void 0 : _this$selectedProduct2.stockUnit) || {
        symbol: 'units',
        name: 'Units'
      };
    },
    stockDifference() {
      if (!this.selectedProduct || this.formData.newQuantity === null) return 0;
      return this.formData.newQuantity - (this.selectedProduct.stock_count || 0);
    },
    adjustmentPercentage() {
      if (!this.selectedProduct || this.selectedProduct.stock_count === 0) return 0;
      return Math.abs(this.stockDifference / this.selectedProduct.stock_count * 100);
    }
  },
  watch: {
    dialog: {
      handler(newVal) {
        if (newVal && this.selectedProduct) {
          this.initializeForm();
        }
      },
      immediate: true
    },
    selectedProduct: {
      handler(newVal) {
        if (newVal && this.dialog) {
          this.initializeForm();
        }
      },
      immediate: true
    }
  },
  methods: {
    initializeForm() {
      if (!this.selectedProduct) return;
      this.formData = {
        newQuantity: this.selectedProduct.stock_count || 0,
        reason: null,
        notes: ''
      };

      // Reset form validation
      this.$nextTick(() => {
        if (this.$refs.adjustForm) {
          this.$refs.adjustForm.resetValidation();
        }
      });
    },
    getAdjustmentType() {
      if (this.stockDifference > 0) {
        return 'success';
      } else if (this.stockDifference < 0) {
        return 'error';
      }
      return 'info';
    },
    getAdjustmentDirection() {
      if (this.stockDifference > 0) {
        return 'INCREASE';
      } else if (this.stockDifference < 0) {
        return 'DECREASE';
      }
      return 'NO CHANGE';
    },
    getDifferenceClass() {
      if (this.stockDifference > 0) {
        return 'success--text';
      } else if (this.stockDifference < 0) {
        return 'error--text';
      }
      return 'text--primary';
    },
    formatDifference() {
      var _this$baseUnit;
      const diff = this.stockDifference;
      const sign = diff > 0 ? '+' : '';
      return `${sign}${this.formatNumber(diff)} ${(_this$baseUnit = this.baseUnit) === null || _this$baseUnit === void 0 ? void 0 : _this$baseUnit.symbol}`;
    },
    showStockWarning() {
      if (!this.selectedProduct || this.formData.newQuantity === null) return false;

      // Show warning for large adjustments (>20%) or when going below minimum stock
      return this.adjustmentPercentage > 20 || this.formData.newQuantity < (this.selectedProduct.minStock || 0);
    },
    getStockWarningMessage() {
      if (this.adjustmentPercentage > 20) {
        return `Large adjustment detected: ${this.adjustmentPercentage.toFixed(1)}% change. Please verify the new quantity.`;
      }
      if (this.formData.newQuantity < (this.selectedProduct.minStock || 0)) {
        return `New quantity is below minimum stock level (${this.selectedProduct.minStock || 0}).`;
      }
      return '';
    },
    async saveStockAdjustment() {
      if (!this.$refs.adjustForm.validate()) return;
      const data = {
        productId: this.selectedProduct.id,
        newQuantity: this.formData.newQuantity,
        reason: this.formData.reason,
        notes: this.formData.notes,
        // Additional data for backend
        currentQuantity: this.selectedProduct.stock_count || 0,
        adjustment: this.stockDifference,
        adjustmentType: this.getAdjustmentDirection(),
        baseUnitId: this.selectedProduct.baseUnitId || this.selectedProduct.stockUnitId
      };
      this.$emit('save', data);
    },
    closeDialog() {
      this.$emit('close');
      this.$emit('update:dialog', false);
    },
    formatNumber(amount) {
      const num = parseFloat(amount || 0);
      return num.toLocaleString('en-US', {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 4
      });
    }
  }
});
// CONCATENATED MODULE: ./components/card/stockAdjustMent.vue?vue&type=script&lang=js
 /* harmony default export */ var card_stockAdjustMentvue_type_script_lang_js = (stockAdjustMentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/card/stockAdjustMent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(815)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_stockAdjustMentvue_type_script_lang_js,
  stockAdjustMentvue_type_template_id_4385b358_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "4385b358",
  "a0c7fa12"
  
)

/* harmony default export */ var stockAdjustMent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(447);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 447:
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

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(446);
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

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(816);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2f2da42c", content, true, context)
};

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(719);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-title[data-v-4385b358]{color:#fff;font-weight:600}.adjustment-summary[data-v-4385b358]{font-size:.875rem}.v-alert.v-alert--dense[data-v-4385b358]{padding-bottom:4px;padding-top:4px}.v-dialog__content[data-v-4385b358]{align-items:flex-start;padding-top:48px}@media (max-width:768px){.v-dialog[data-v-4385b358]{margin:16px}.adjustment-summary .d-flex[data-v-4385b358]{flex-direction:column;gap:8px}.adjustment-summary .d-flex>div[data-v-4385b358]{text-align:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=card-stock-adjust-ment.js.map