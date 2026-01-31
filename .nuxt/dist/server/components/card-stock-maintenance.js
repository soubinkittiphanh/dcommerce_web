exports.ids = [45];
exports.modules = {

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VAutocomplete/VAutocomplete.sass
var VAutocomplete_VAutocomplete = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCombobox/VCombobox.js
// Styles
 // Extensions


 // Utils


/* @vue/component */

/* harmony default export */ var VCombobox = (VAutocomplete["a" /* default */].extend({
  name: 'v-combobox',
  props: {
    delimiters: {
      type: Array,
      default: () => []
    },
    returnObject: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    editingIndex: -1
  }),
  computed: {
    computedCounterValue() {
      return this.multiple ? this.selectedItems.length : (this.internalSearch || '').toString().length;
    },
    hasSlot() {
      return VSelect["a" /* default */].options.computed.hasSlot.call(this) || this.multiple;
    },
    isAnyValueAllowed() {
      return true;
    },
    menuCanShow() {
      if (!this.isFocused) return false;
      return this.hasDisplayedItems || !!this.$slots['no-data'] && !this.hideNoData;
    },
    searchIsDirty() {
      return this.internalSearch != null;
    }
  },
  methods: {
    onInternalSearchChanged(val) {
      if (val && this.multiple && this.delimiters.length) {
        const delimiter = this.delimiters.find(d => val.endsWith(d));
        if (delimiter != null) {
          this.internalSearch = val.slice(0, val.length - delimiter.length);
          this.updateTags();
        }
      }
      this.updateMenuDimensions();
    },
    genInput() {
      const input = VAutocomplete["a" /* default */].options.methods.genInput.call(this);
      delete input.data.attrs.name;
      input.data.on.paste = this.onPaste;
      return input;
    },
    genChipSelection(item, index) {
      const chip = VSelect["a" /* default */].options.methods.genChipSelection.call(this, item, index); // Allow user to update an existing value

      if (this.multiple) {
        chip.componentOptions.listeners = {
          ...chip.componentOptions.listeners,
          dblclick: () => {
            this.editingIndex = index;
            this.internalSearch = this.getText(item);
            this.selectedIndex = -1;
          }
        };
      }
      return chip;
    },
    onChipInput(item) {
      VSelect["a" /* default */].options.methods.onChipInput.call(this, item);
      this.editingIndex = -1;
    },
    // Requires a manual definition
    // to overwrite removal in v-autocomplete
    onEnterDown(e) {
      e.preventDefault(); // If has menu index, let v-select-list handle

      if (this.getMenuIndex() > -1) return;
      this.$nextTick(this.updateSelf);
    },
    onKeyDown(e) {
      const keyCode = e.keyCode;
      if (e.ctrlKey || ![helpers["y" /* keyCodes */].home, helpers["y" /* keyCodes */].end].includes(keyCode)) {
        VSelect["a" /* default */].options.methods.onKeyDown.call(this, e);
      } // If user is at selection index of 0
      // create a new tag

      if (this.multiple && keyCode === helpers["y" /* keyCodes */].left && this.$refs.input.selectionStart === 0) {
        this.updateSelf();
      } else if (keyCode === helpers["y" /* keyCodes */].enter) {
        this.onEnterDown(e);
      } // The ordering is important here
      // allows new value to be updated
      // and then moves the index to the
      // proper location

      this.changeSelectedIndex(keyCode);
    },
    onTabDown(e) {
      // When adding tags, if searching and
      // there is not a filtered options,
      // add the value to the tags list
      if (this.multiple && this.internalSearch && this.getMenuIndex() === -1) {
        e.preventDefault();
        e.stopPropagation();
        return this.updateTags();
      }
      VAutocomplete["a" /* default */].options.methods.onTabDown.call(this, e);
    },
    selectItem(item) {
      // Currently only supports items:<string[]>
      if (this.editingIndex > -1) {
        this.updateEditing();
      } else {
        VAutocomplete["a" /* default */].options.methods.selectItem.call(this, item); // if selected item contains search value,
        // remove the search string

        if (this.internalSearch && this.multiple && this.getText(item).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())) {
          this.internalSearch = null;
        }
      }
    },
    setSelectedItems() {
      if (this.internalValue == null || this.internalValue === '') {
        this.selectedItems = [];
      } else {
        this.selectedItems = this.multiple ? this.internalValue : [this.internalValue];
      }
    },
    setValue(value) {
      VSelect["a" /* default */].options.methods.setValue.call(this, value === undefined ? this.internalSearch : value);
    },
    updateEditing() {
      const value = this.internalValue.slice();
      const index = this.selectedItems.findIndex(item => this.getText(item) === this.internalSearch); // If user enters a duplicate text on chip edit,
      // don't add it, move it to the end of the list

      if (index > -1) {
        const item = typeof value[index] === 'object' ? Object.assign({}, value[index]) : value[index];
        value.splice(index, 1);
        value.push(item);
      } else {
        value[this.editingIndex] = this.internalSearch;
      }
      this.setValue(value);
      this.editingIndex = -1;
      this.internalSearch = null;
    },
    updateCombobox() {
      // If search is not dirty, do nothing
      if (!this.searchIsDirty) return; // The internal search is not matching
      // the internal value, update the input

      if (this.internalSearch !== this.getText(this.internalValue)) this.setValue(); // Reset search if using slot to avoid a double input

      const isUsingSlot = Boolean(this.$scopedSlots.selection) || this.hasChips;
      if (isUsingSlot) this.internalSearch = null;
    },
    updateSelf() {
      this.multiple ? this.updateTags() : this.updateCombobox();
    },
    updateTags() {
      const menuIndex = this.getMenuIndex(); // If the user is not searching
      // and no menu item is selected
      // or if the search is empty
      // do nothing

      if (menuIndex < 0 && !this.searchIsDirty || !this.internalSearch) return;
      if (this.editingIndex > -1) {
        return this.updateEditing();
      }
      const index = this.selectedItems.findIndex(item => this.internalSearch === this.getText(item)); // If the duplicate item is an object,
      // copy it, so that it can be added again later

      const itemToSelect = index > -1 && typeof this.selectedItems[index] === 'object' ? Object.assign({}, this.selectedItems[index]) : this.internalSearch; // If it already exists, do nothing
      // this might need to change to bring
      // the duplicated item to the last entered

      if (index > -1) {
        const internalValue = this.internalValue.slice();
        internalValue.splice(index, 1);
        this.setValue(internalValue);
      } // If menu index is greater than 1
      // the selection is handled elsewhere
      // TODO: find out where

      if (menuIndex > -1) return this.internalSearch = null;
      this.selectItem(itemToSelect);
      this.internalSearch = null;
    },
    onPaste(event) {
      var _a;
      this.$emit('paste', event);
      if (!this.multiple || this.searchIsDirty) return;
      const pastedItemText = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text/vnd.vuetify.autocomplete.item+plain');
      if (pastedItemText && this.findExistingIndex(pastedItemText) === -1) {
        event.preventDefault();
        VSelect["a" /* default */].options.methods.selectItem.call(this, pastedItemText);
      }
    },
    clearableCallback() {
      this.editingIndex = -1;
      VAutocomplete["a" /* default */].options.methods.clearableCallback.call(this);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(480);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/stockMaintenance.vue?vue&type=template&id=3c23116d&scoped=true





















var stockMaintenancevue_type_template_id_3c23116d_scoped_true_render = function render() {
  var _vm$selectedProduct, _vm$selectedUnit, _vm$selectedUnit2, _vm$selectedUnit3, _vm$baseUnit, _vm$selectedProduct3, _vm$baseUnit2, _vm$selectedProduct4, _vm$baseUnit3, _vm$selectedUnit4, _vm$baseUnit4, _vm$selectedProduct5, _vm$selectedProduct6, _vm$selectedProduct7, _vm$selectedProduct8, _vm$selectedProduct9, _vm$selectedProduct0;
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
    staticClass: "dialog-title success"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-plus-circle")]), _vm._v(" "), _c('span', {
    staticClass: "white--text"
  }, [_vm._v("Increase Stock - " + _vm._s((_vm$selectedProduct = _vm.selectedProduct) === null || _vm$selectedProduct === void 0 ? void 0 : _vm$selectedProduct.pro_name))])], 1), _vm._v(" "), _c(VForm["a" /* default */], {
    ref: "increaseForm",
    model: {
      value: _vm.formValid,
      callback: function ($$v) {
        _vm.formValid = $$v;
      },
      expression: "formValid"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Quantity to Add*",
      "type": "number",
      "min": "0.01",
      "step": "0.01",
      "rules": [_vm.rules.required, _vm.rules.positiveNumber],
      "outlined": "",
      "prepend-inner-icon": "mdi-plus",
      "suffix": ((_vm$selectedUnit = _vm.selectedUnit) === null || _vm$selectedUnit === void 0 ? void 0 : _vm$selectedUnit.symbol) || 'units'
    },
    model: {
      value: _vm.formData.quantity,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "quantity", _vm._n($$v));
      },
      expression: "formData.quantity"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.availableUnits,
      "item-text": "displayText",
      "item-value": "id",
      "label": "Unit*",
      "rules": [_vm.rules.required],
      "outlined": "",
      "prepend-inner-icon": "mdi-scale-balance",
      "placeholder": "Select unit..."
    },
    on: {
      "change": _vm.onUnitChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        var _vm$selectedProduct2, _item$baseUnit;
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                    " + _vm._s(item.name) + "\n                    "), item.id === ((_vm$selectedProduct2 = _vm.selectedProduct) === null || _vm$selectedProduct2 === void 0 ? void 0 : _vm$selectedProduct2.receiveUnitId) ? _c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": "primary"
          }
        }, [_vm._v("\n                      RECEIVE\n                    ")]) : _vm._e()], 1), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v("\n                    " + _vm._s(item.symbol) + " \n                    "), item.conversionRate !== 1 ? _c('span', [_vm._v("\n                      (1 " + _vm._s(item.symbol) + " = " + _vm._s(item.conversionRate) + " " + _vm._s((_item$baseUnit = item.baseUnit) === null || _item$baseUnit === void 0 ? void 0 : _item$baseUnit.symbol) + ")\n                    ")]) : _vm._e()])], 1)];
      }
    }]),
    model: {
      value: _vm.formData.unitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "unitId", $$v);
      },
      expression: "formData.unitId"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Cost per Unit",
      "type": "number",
      "min": "0",
      "step": "0.01",
      "outlined": "",
      "prepend-inner-icon": "mdi-currency-usd",
      "prefix": _vm.currencySymbol,
      "hint": `Cost per ${((_vm$selectedUnit2 = _vm.selectedUnit) === null || _vm$selectedUnit2 === void 0 ? void 0 : _vm$selectedUnit2.symbol) || 'unit'}`,
      "persistent-hint": ""
    },
    model: {
      value: _vm.formData.costPerUnit,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "costPerUnit", _vm._n($$v));
      },
      expression: "formData.costPerUnit"
    }
  })], 1), _vm._v(" "), _vm.showConversionInfo ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "type": "info",
      "dense": "",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-caption"
  }, [_c('strong', [_vm._v("Base Unit Conversion:")]), _c('br'), _vm._v("\n                " + _vm._s(_vm.formData.quantity || 0) + " " + _vm._s((_vm$selectedUnit3 = _vm.selectedUnit) === null || _vm$selectedUnit3 === void 0 ? void 0 : _vm$selectedUnit3.symbol) + " = \n                " + _vm._s(_vm.formatNumber(_vm.baseQuantityChange)) + " " + _vm._s((_vm$baseUnit = _vm.baseUnit) === null || _vm$baseUnit === void 0 ? void 0 : _vm$baseUnit.symbol) + "\n              ")])])], 1) : _vm._e()], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCombobox, {
    attrs: {
      "items": _vm.recentSuppliers,
      "label": "Supplier/Vendor",
      "outlined": "",
      "prepend-inner-icon": "mdi-truck",
      "placeholder": "Supplier name...",
      "clearable": ""
    },
    model: {
      value: _vm.formData.supplier,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "supplier", $$v);
      },
      expression: "formData.supplier"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Reference/Invoice Number",
      "outlined": "",
      "prepend-inner-icon": "mdi-receipt",
      "placeholder": "Invoice or PO number..."
    },
    model: {
      value: _vm.formData.referenceNumber,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "referenceNumber", $$v);
      },
      expression: "formData.referenceNumber"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Notes (Optional)",
      "outlined": "",
      "rows": "3",
      "prepend-inner-icon": "mdi-note-text",
      "placeholder": "Additional notes about this stock increase..."
    },
    model: {
      value: _vm.formData.notes,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "notes", $$v);
      },
      expression: "formData.notes"
    }
  })], 1)], 1), _vm._v(" "), _vm.formData.quantity && _vm.formData.costPerUnit ? _c(VAlert["a" /* default */], {
    attrs: {
      "type": "info",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c('div', [_c('strong', [_vm._v("Current Stock:")]), _vm._v(" \n              " + _vm._s(_vm.formatNumber(((_vm$selectedProduct3 = _vm.selectedProduct) === null || _vm$selectedProduct3 === void 0 ? void 0 : _vm$selectedProduct3.stock_count) || 0)) + " " + _vm._s((_vm$baseUnit2 = _vm.baseUnit) === null || _vm$baseUnit2 === void 0 ? void 0 : _vm$baseUnit2.symbol) + "\n            ")]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("After Increase:")]), _vm._v(" \n              " + _vm._s(_vm.formatNumber((((_vm$selectedProduct4 = _vm.selectedProduct) === null || _vm$selectedProduct4 === void 0 ? void 0 : _vm$selectedProduct4.stock_count) || 0) + _vm.baseQuantityChange)) + " " + _vm._s((_vm$baseUnit3 = _vm.baseUnit) === null || _vm$baseUnit3 === void 0 ? void 0 : _vm$baseUnit3.symbol) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between"
  }, [_c('div', [_c('strong', [_vm._v("Unit Cost:")]), _vm._v(" \n              " + _vm._s(_vm.formatCurrency(_vm.formData.costPerUnit)) + " per " + _vm._s((_vm$selectedUnit4 = _vm.selectedUnit) === null || _vm$selectedUnit4 === void 0 ? void 0 : _vm$selectedUnit4.symbol) + "\n            ")]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Total Cost:")]), _vm._v(" \n              " + _vm._s(_vm.formatCurrency(_vm.totalCost)) + "\n            ")])]), _vm._v(" "), _vm.baseQuantityChange !== _vm.formData.quantity ? _c('div', {
    staticClass: "d-flex justify-space-between mt-2"
  }, [_c('div', [_c('strong', [_vm._v("Base Unit Cost:")]), _vm._v(" \n              " + _vm._s(_vm.formatCurrency(_vm.baseUnitCost)) + " per " + _vm._s((_vm$baseUnit4 = _vm.baseUnit) === null || _vm$baseUnit4 === void 0 ? void 0 : _vm$baseUnit4.symbol) + "\n            ")]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Stock Value Increase:")]), _vm._v(" \n              " + _vm._s(_vm.formatCurrency(_vm.stockValueIncrease)) + "\n            ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.selectedUnit ? _c(VAlert["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "type": "info",
      "dense": "",
      "text": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _vm.selectedUnit.id === ((_vm$selectedProduct5 = _vm.selectedProduct) === null || _vm$selectedProduct5 === void 0 ? void 0 : _vm$selectedProduct5.receiveUnitId) ? _c('span', [_c('strong', [_vm._v("Receive Unit:")]), _vm._v(" This is the standard unit for receiving " + _vm._s((_vm$selectedProduct6 = _vm.selectedProduct) === null || _vm$selectedProduct6 === void 0 ? void 0 : _vm$selectedProduct6.pro_name) + ".\n          ")]) : _vm.selectedUnit.id === ((_vm$selectedProduct7 = _vm.selectedProduct) === null || _vm$selectedProduct7 === void 0 ? void 0 : _vm$selectedProduct7.stockUnitId) ? _c('span', [_c('strong', [_vm._v("Stock Unit:")]), _vm._v(" This is the primary stock unit for " + _vm._s((_vm$selectedProduct8 = _vm.selectedProduct) === null || _vm$selectedProduct8 === void 0 ? void 0 : _vm$selectedProduct8.pro_name) + ".\n          ")]) : _vm.selectedUnit.id === ((_vm$selectedProduct9 = _vm.selectedProduct) === null || _vm$selectedProduct9 === void 0 ? void 0 : _vm$selectedProduct9.baseUnitId) ? _c('span', [_c('strong', [_vm._v("Base Unit:")]), _vm._v(" This is the base measurement unit for " + _vm._s((_vm$selectedProduct0 = _vm.selectedProduct) === null || _vm$selectedProduct0 === void 0 ? void 0 : _vm$selectedProduct0.pro_name) + ".\n          ")]) : _c('span', [_c('strong', [_vm._v("Custom Unit:")]), _vm._v(" Using alternative unit for stock increase.\n          ")])], 1) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "loading": _vm.saving,
      "disabled": !_vm.formValid
    },
    on: {
      "click": _vm.saveStockIncrease
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n          Increase Stock\n        ")], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/card/stockMaintenance.vue?vue&type=template&id=3c23116d&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/stockMaintenance.vue?vue&type=script&lang=js
/* harmony default export */ var stockMaintenancevue_type_script_lang_js = ({
  name: 'StockIncreaseDialog',
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
    },
    currencySymbol: {
      type: String,
      default: '$'
    }
  },
  data() {
    return {
      formValid: false,
      availableUnits: [],
      recentSuppliers: [],
      formData: {
        quantity: null,
        unitId: null,
        costPerUnit: null,
        supplier: '',
        referenceNumber: '',
        notes: ''
      },
      rules: {
        required: value => !!value || 'This field is required',
        positiveNumber: value => value > 0 || 'Must be greater than 0',
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
    selectedUnit() {
      return this.availableUnits.find(unit => unit.id === this.formData.unitId);
    },
    baseUnit() {
      return this.availableUnits.find(unit => {
        var _this$selectedProduct, _this$selectedProduct2;
        return unit.id === ((_this$selectedProduct = this.selectedProduct) === null || _this$selectedProduct === void 0 ? void 0 : _this$selectedProduct.baseUnitId) || unit.id === ((_this$selectedProduct2 = this.selectedProduct) === null || _this$selectedProduct2 === void 0 ? void 0 : _this$selectedProduct2.stockUnitId);
      });
    },
    showConversionInfo() {
      return this.selectedUnit && this.baseUnit && this.selectedUnit.id !== this.baseUnit.id;
    },
    baseQuantityChange() {
      if (!this.formData.quantity || !this.selectedUnit) return 0;
      return this.formData.quantity * (this.selectedUnit.conversionRate || 1);
    },
    totalCost() {
      return (this.formData.quantity || 0) * (this.formData.costPerUnit || 0);
    },
    baseUnitCost() {
      if (!this.selectedUnit || !this.formData.costPerUnit) return 0;
      return this.formData.costPerUnit / (this.selectedUnit.conversionRate || 1);
    },
    stockValueIncrease() {
      return this.baseQuantityChange * this.baseUnitCost;
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
    async initializeForm() {
      if (!this.selectedProduct) return;
      console.info(`PRODUCT SELECTED ${JSON.stringify(this.selectedProduct)}`);
      // Reset form - PRIORITIZE receiveUnitId for stock increases
      this.formData = {
        quantity: null,
        // Priority order: receiveUnitId → stockUnitId → baseUnitId
        unitId: this.selectedProduct.unit.id || this.selectedProduct.stockUnit.id || this.selectedProduct.baseUnit.id,
        costPerUnit: this.selectedProduct.cost_price || this.selectedProduct.pro_price || null,
        supplier: '',
        referenceNumber: '',
        notes: ''
      };

      // Load units and suppliers
      await Promise.all([this.loadAvailableUnits(), this.loadRecentSuppliers()]);

      // Reset form validation
      this.$nextTick(() => {
        if (this.$refs.increaseForm) {
          this.$refs.increaseForm.resetValidation();
        }
      });
    },
    async loadAvailableUnits() {
      try {
        // Get units related to this product
        const response = await this.$axios.get(`/api/unit/find`, {
          params: {
            productId: this.selectedProduct.id,
            includeConversions: true
          }
        });
        const units = response.data.data || response.data || [];

        // Format units with display text and conversion info
        this.availableUnits = units.map(unit => ({
          ...unit,
          displayText: `${unit.name} (${unit.symbol})`,
          conversionRate: unit.conversionRate || 1
        }));

        // Ensure all product units are included with proper labeling
        const productUnits = [{
          id: this.selectedProduct.unit.id,
          type: 'receive'
        }, {
          id: this.selectedProduct.stockUnitId,
          type: 'stock'
        }, {
          id: this.selectedProduct.baseUnitId,
          type: 'base'
        }].filter(u => u.id); // Remove null/undefined ids

        for (const productUnit of productUnits) {
          if (!this.availableUnits.find(u => u.id === productUnit.id)) {
            // Add missing product units with appropriate labels
            const unitName = productUnit.type.charAt(0).toUpperCase() + productUnit.type.slice(1) + ' Unit';
            this.availableUnits.push({
              id: productUnit.id,
              name: unitName,
              symbol: 'units',
              displayText: `${unitName} (units)`,
              conversionRate: 1,
              isProductUnit: true,
              unitType: productUnit.type
            });
          }
        }

        // Sort units to prioritize receiveUnit first
        this.availableUnits.sort((a, b) => {
          if (a.id === this.selectedProduct.unit.id) return -1;
          if (b.id === this.selectedProduct.unit.id) return 1;
          if (a.id === this.selectedProduct.stockUnitId) return -1;
          if (b.id === this.selectedProduct.stockUnitId) return 1;
          if (a.id === this.selectedProduct.baseUnitId) return -1;
          if (b.id === this.selectedProduct.baseUnitId) return 1;
          return 0;
        });
      } catch (error) {
        console.error('Error loading units:', error);

        // Fallback to product's units with proper priority
        this.availableUnits = [];

        // Add receiveUnit first if it exists
        if (this.selectedProduct.unit.id) {
          var _this$selectedProduct3, _this$selectedProduct4;
          this.availableUnits.push({
            id: this.selectedProduct.unit.id,
            name: 'Receive Unit',
            symbol: ((_this$selectedProduct3 = this.selectedProduct.receiveUnit) === null || _this$selectedProduct3 === void 0 ? void 0 : _this$selectedProduct3.symbol) || 'units',
            displayText: `Receive Unit (${((_this$selectedProduct4 = this.selectedProduct.receiveUnit) === null || _this$selectedProduct4 === void 0 ? void 0 : _this$selectedProduct4.symbol) || 'units'})`,
            conversionRate: 1,
            isProductUnit: true,
            unitType: 'receive'
          });
        }

        // Add other units as fallback
        if (this.selectedProduct.stockUnitId && this.selectedProduct.stockUnitId !== this.selectedProduct.unit.id) {
          var _this$selectedProduct5, _this$selectedProduct6;
          this.availableUnits.push({
            id: this.selectedProduct.stockUnitId,
            name: 'Stock Unit',
            symbol: ((_this$selectedProduct5 = this.selectedProduct.stockUnit) === null || _this$selectedProduct5 === void 0 ? void 0 : _this$selectedProduct5.symbol) || 'units',
            displayText: `Stock Unit (${((_this$selectedProduct6 = this.selectedProduct.stockUnit) === null || _this$selectedProduct6 === void 0 ? void 0 : _this$selectedProduct6.symbol) || 'units'})`,
            conversionRate: 1,
            isProductUnit: true,
            unitType: 'stock'
          });
        }
      }
    },
    async loadRecentSuppliers() {
      try {
        const response = await this.$axios.get('/api/stock-transactions/recent-suppliers', {
          params: {
            limit: 10
          }
        });
        this.recentSuppliers = response.data.data || response.data || [];
      } catch (error) {
        console.error('Error loading recent suppliers:', error);
        this.recentSuppliers = [];
      }
    },
    onUnitChange() {
      // Recalculate cost if needed
      if (this.showConversionInfo && this.formData.costPerUnit) {
        // Keep the cost per selected unit, system will handle conversion
      }
    },
    async saveStockIncrease() {
      var _this$selectedUnit;
      if (!this.$refs.increaseForm.validate()) return;
      const data = {
        productId: this.selectedProduct.id,
        quantity: this.formData.quantity,
        unitId: this.formData.unitId,
        costPerUnit: this.formData.costPerUnit,
        supplier: this.formData.supplier,
        referenceNumber: this.formData.referenceNumber,
        notes: this.formData.notes,
        // Additional data for backend calculation
        transactionUnitId: this.formData.unitId,
        baseUnitId: this.selectedProduct.baseUnitId || this.selectedProduct.stockUnitId,
        transactionRate: ((_this$selectedUnit = this.selectedUnit) === null || _this$selectedUnit === void 0 ? void 0 : _this$selectedUnit.conversionRate) || 1,
        baseQuantityChange: this.baseQuantityChange
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
    },
    formatCurrency(amount) {
      return parseFloat(amount || 0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
});
// CONCATENATED MODULE: ./components/card/stockMaintenance.vue?vue&type=script&lang=js
 /* harmony default export */ var card_stockMaintenancevue_type_script_lang_js = (stockMaintenancevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/card/stockMaintenance.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(838)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_stockMaintenancevue_type_script_lang_js,
  stockMaintenancevue_type_template_id_3c23116d_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "3c23116d",
  "57fe1119"
  
)

/* harmony default export */ var stockMaintenance = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 458:
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

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
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

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(839);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1cdc0b75", content, true, context)
};

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(735);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-title[data-v-3c23116d]{color:#fff;font-weight:600}.conversion-info[data-v-3c23116d]{background-color:#e3f2fd;border-radius:4px;font-size:.875rem;padding:8px}.text-caption[data-v-3c23116d]{font-size:.75rem!important}.v-dialog__content[data-v-3c23116d]{align-items:flex-start;padding-top:48px}@media (max-width:768px){.v-dialog[data-v-3c23116d]{margin:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=card-stock-maintenance.js.map