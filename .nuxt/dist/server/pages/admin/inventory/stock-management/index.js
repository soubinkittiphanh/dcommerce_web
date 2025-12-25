exports.ids = [210,44,45];
exports.modules = {

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(407);

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

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VAutocomplete/VAutocomplete.sass
var VAutocomplete_VAutocomplete = __webpack_require__(202);

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
var VDialog = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(424);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(461);

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
  
  var style0 = __webpack_require__(796)
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

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(407);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(461);

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
  
  var style0 = __webpack_require__(798)
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

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0932aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(944);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0932aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0932aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0932aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0932aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".stock-management[data-v-1d0932aa]{box-sizing:border-box;min-height:100vh;padding:20px}.page-header[data-v-1d0932aa]{align-items:center;display:flex;flex-wrap:nowrap;justify-content:space-between;margin-bottom:24px;min-height:120px}.header-content[data-v-1d0932aa]{color:#fff;flex:1;min-width:0}.page-title[data-v-1d0932aa]{align-items:center;display:flex;font-size:28px;font-weight:600;margin:0;overflow:visible;white-space:nowrap}.page-subtitle[data-v-1d0932aa]{font-size:16px;margin:8px 0 0;opacity:.9;white-space:nowrap}.header-actions[data-v-1d0932aa]{display:flex;flex-shrink:0;gap:12px}.stat-card[data-v-1d0932aa]{height:100%;transition:transform .2s ease}.stat-card[data-v-1d0932aa]:hover{transform:translateY(-2px)}.stat-value[data-v-1d0932aa]{font-size:28px;font-weight:700;line-height:1.2;margin:0}.stat-label[data-v-1d0932aa]{font-size:14px;line-height:1.3;margin:4px 0 0;opacity:.9}.filter-card[data-v-1d0932aa]{background:#f8f9fa}.filter-title[data-v-1d0932aa]{color:#fff;font-weight:600}.product-info[data-v-1d0932aa]{align-items:center;display:flex;min-height:60px}.stock-info[data-v-1d0932aa]{text-align:center}.stock-chip[data-v-1d0932aa]{font-weight:700;min-width:80px}.stock-details[data-v-1d0932aa]{margin-top:4px}.price-info[data-v-1d0932aa]{line-height:1.4;text-align:right}.date-info[data-v-1d0932aa]{line-height:1.4;text-align:center}.action-buttons[data-v-1d0932aa]{display:flex;flex-wrap:nowrap;gap:4px;justify-content:center}.dialog-title[data-v-1d0932aa]{color:#fff;font-weight:600}.bulk-stock-table[data-v-1d0932aa]{border:1px solid #e0e0e0;border-radius:4px}.bulk-summary[data-v-1d0932aa]{color:#666;font-size:14px}.history-table[data-v-1d0932aa]{max-height:500px}.notes-cell[data-v-1d0932aa]{max-width:200px;word-wrap:break-word}@media (max-width:960px){.page-header[data-v-1d0932aa]{flex-direction:column;gap:16px;min-height:auto;padding:20px;text-align:center}.page-title[data-v-1d0932aa]{font-size:24px;justify-content:center}.header-actions[data-v-1d0932aa]{flex-direction:row;flex-wrap:wrap;justify-content:center;width:100%}.stock-table .v-data-table__wrapper[data-v-1d0932aa]{overflow-x:auto}}@media (max-width:768px){.stock-management[data-v-1d0932aa]{padding:16px}.page-title[data-v-1d0932aa]{flex-direction:column;font-size:20px;gap:8px}.header-actions[data-v-1d0932aa]{flex-direction:column;width:100%}.action-buttons[data-v-1d0932aa]{flex-direction:column;gap:2px}.action-buttons .v-btn[data-v-1d0932aa]{height:36px;min-width:36px;width:36px}.stat-value[data-v-1d0932aa]{font-size:24px}.stat-label[data-v-1d0932aa]{font-size:12px}}@media (max-width:480px){.page-title[data-v-1d0932aa]{font-size:18px}.stat-value[data-v-1d0932aa]{font-size:20px}.headers[data-v-1d0932aa]{font-size:12px}.product-info[data-v-1d0932aa]{min-height:50px}.product-info .v-avatar[data-v-1d0932aa]{height:32px!important;width:32px!important}}.v-data-table[data-v-1d0932aa] .v-data-table__wrapper{border-radius:8px}.v-data-table[data-v-1d0932aa] thead>tr>th{color:#1976d2!important;font-weight:600!important}.v-data-table[data-v-1d0932aa] tbody>tr:hover{background-color:#f5f5f5!important}.v-overlay--absolute[data-v-1d0932aa]{border-radius:8px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(407);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(120);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(436);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(573);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/inventory/stock-management/index.vue?vue&type=template&id=1d0932aa&scoped=true























var stock_managementvue_type_template_id_1d0932aa_scoped_true_render = function render() {
  var _vm$selectedProduct;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stock-management"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-1d0932aa>", "</div>", [_vm._ssrNode("<div class=\"header-content primary rounded pa-4 mr-4\" data-v-1d0932aa>", "</div>", [_vm._ssrNode("<h1 class=\"page-title\" data-v-1d0932aa>", "</h1>", [_c(VIcon["a" /* default */], {
    staticClass: "mr-3",
    attrs: {
      "large": "",
      "color": "white"
    }
  }, [_vm._v("mdi-package-variant-plus")]), _vm._ssrNode("\n        Stock Management\n      ")], 2), _vm._ssrNode(" <p class=\"page-subtitle\" data-v-1d0932aa>Increase and maintain product inventory</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-actions\" data-v-1d0932aa>", "</div>", [_c(VBtn["a" /* default */], {
    staticClass: "mr-2 primary",
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.openBulkStockDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-playlist-plus")]), _vm._v("\n        Bulk Increase\n      ")], 1), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2 success",
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.exportStockReport
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-download")]), _vm._v("\n        Export\n      ")], 1), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    staticClass: "info",
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.viewStockSummary
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-chart-line")]), _vm._v("\n        Summary\n      ")], 1)], 2)], 2), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, _vm._l(_vm.stockStatistics, function (stat, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      attrs: {
        "cols": "12",
        "md": "3"
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "stat-card",
      attrs: {
        "elevation": "2",
        "color": stat.color,
        "dark": ""
      }
    }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
      staticClass: "d-flex align-center"
    }, [_c(VAvatar["a" /* default */], {
      staticClass: "mr-3",
      attrs: {
        "size": "60",
        "color": "white"
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "size": "30",
        "color": stat.color
      }
    }, [_vm._v(_vm._s(stat.icon))])], 1), _vm._v(" "), _c('div', [_c('h2', {
      staticClass: "stat-value"
    }, [_vm._v(_vm._s(_vm.formatNumber(stat.value)))]), _vm._v(" "), _c('p', {
      staticClass: "stat-label"
    }, [_vm._v(_vm._s(stat.label))])])], 1)])], 1)], 1);
  }), 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "filter-card mb-4",
    attrs: {
      "elevation": "1"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "filter-title primary"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-filter")]), _vm._v("\n      Filters & Actions\n    ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.categories,
      "item-text": "categ_name",
      "item-value": "categ_id",
      "label": "Filter by Category",
      "clearable": "",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-shape",
      "placeholder": "All categories..."
    },
    on: {
      "change": _vm.loadProducts
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.categ_name))])], 1)];
      }
    }]),
    model: {
      value: _vm.filters.categoryId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "categoryId", $$v);
      },
      expression: "filters.categoryId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.stockLevelOptions,
      "item-text": "text",
      "item-value": "value",
      "label": "Stock Level",
      "clearable": "",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-speedometer",
      "placeholder": "All levels..."
    },
    on: {
      "change": _vm.loadProducts
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.text))])], 1)];
      }
    }]),
    model: {
      value: _vm.filters.stockLevel,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "stockLevel", $$v);
      },
      expression: "filters.stockLevel"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Search products...",
      "outlined": "",
      "dense": "",
      "clearable": "",
      "append-icon": "mdi-magnify",
      "placeholder": "Type to search..."
    },
    on: {
      "input": _vm.debounceSearch
    },
    model: {
      value: _vm.filters.search,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "search", $$v);
      },
      expression: "filters.search"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "outlined": "",
      "block": "",
      "color": "warning"
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n            Reset\n          ")], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "title"
  }, [_vm._v("Product Inventory")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": _vm.loadProducts
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "stock-table",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.products,
      "loading": _vm.loading,
      "server-items-length": _vm.totalItems,
      "options": _vm.options
    },
    on: {
      "update:options": [function ($event) {
        _vm.options = $event;
      }, _vm.loadProducts]
    },
    scopedSlots: _vm._u([{
      key: "item.product",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "product-info"
        }, [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VAvatar["a" /* default */], {
          staticClass: "mr-3",
          attrs: {
            "size": "40",
            "color": "grey lighten-3"
          }
        }, [item.pro_image_path ? _c(VImg["a" /* default */], {
          attrs: {
            "src": item.pro_image_path,
            "alt": "Product Image"
          }
        }) : _c(VIcon["a" /* default */], {
          attrs: {
            "color": "grey darken-2"
          }
        }, [_vm._v("mdi-package-variant")])], 1), _vm._v(" "), _c('div', [_c('strong', [_vm._v(_vm._s(item.pro_name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-grey"
        }, [_vm._v(_vm._s(item.pro_desc || 'No description'))]), _vm._v(" "), _c('br'), _vm._v(" "), _c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": _vm.getCategoryColor(item._category),
            "outlined": ""
          }
        }, [_vm._v("\n                " + _vm._s(_vm.formatCategory(item._category)) + "\n              ")])], 1)], 1)])];
      }
    }, {
      key: "item.currentStock",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "stock-info"
        }, [_c(VChip["a" /* default */], {
          staticClass: "stock-chip",
          attrs: {
            "color": _vm.getStockLevelColor(item.stock_count, item.minStock),
            "dark": ""
          }
        }, [_c('strong', [_vm._v(_vm._s(_vm.formatNumber(item.stock_count || 0)))]), _vm._v(" "), item.stockUnit ? _c('span', {
          staticClass: "ml-1"
        }, [_vm._v(_vm._s(item.stockUnit.symbol))]) : _vm._e()]), _vm._v(" "), _c('div', {
          staticClass: "stock-details"
        }, [_c('small', {
          staticClass: "text-caption"
        }, [_vm._v("\n              Min: " + _vm._s(_vm.formatNumber(item.minStock || 0)) + "\n              "), item.stockUnit ? _c('span', [_vm._v(" " + _vm._s(item.stockUnit.symbol))]) : _vm._e()])])], 1)];
      }
    }, {
      key: "item.unitPrice",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "price-info"
        }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(item.pro_price || 0)))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-grey"
        }, [_vm._v("\n            Cost: " + _vm._s(_vm.formatCurrency(item.cost_price || 0)) + "\n          ")])])];
      }
    }, {
      key: "item.stockStatus",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getStockStatusColor(item.stock_count, item.minStock),
            "dark": "",
            "small": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "small": ""
          }
        }, [_vm._v(_vm._s(_vm.getStockStatusIcon(item.stock_count, item.minStock)))]), _vm._v("\n          " + _vm._s(_vm.getStockStatus(item.stock_count, item.minStock)) + "\n        ")], 1)];
      }
    }, {
      key: "item.lastUpdated",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "date-info"
        }, [_c('div', [_vm._v(_vm._s(_vm.formatDate(item.updateTimestamp || item.updatedAt)))]), _vm._v(" "), _c('small', {
          staticClass: "text-grey"
        }, [_vm._v(_vm._s(_vm.formatTimeAgo(item.updateTimestamp || item.updatedAt)))])])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "action-buttons"
        }, [_c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on
            }) {
              return [_c(VBtn["a" /* default */], _vm._g({
                attrs: {
                  "icon": "",
                  "small": "",
                  "color": "success"
                },
                on: {
                  "click": function ($event) {
                    return _vm.openStockIncreaseDialog(item);
                  }
                }
              }, on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-plus")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("Increase Stock")])]), _vm._v(" "), _c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on
            }) {
              return [_c(VBtn["a" /* default */], _vm._g({
                attrs: {
                  "icon": "",
                  "small": "",
                  "color": "warning"
                },
                on: {
                  "click": function ($event) {
                    return _vm.openStockAdjustDialog(item);
                  }
                }
              }, on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-pencil")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("Adjust Stock")])]), _vm._v(" "), _c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on
            }) {
              return [_c(VBtn["a" /* default */], _vm._g({
                attrs: {
                  "icon": "",
                  "small": "",
                  "color": "info"
                },
                on: {
                  "click": function ($event) {
                    return _vm.viewStockHistory(item);
                  }
                }
              }, on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-history")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("View History")])])], 1)];
      }
    }])
  })], 1), _vm._ssrNode(" "), _c('StockIncreaseDialog', {
    attrs: {
      "dialog": _vm.stockIncreaseDialog,
      "selected-product": _vm.selectedProduct,
      "saving": _vm.saving,
      "currency-symbol": _vm.currencySymbol
    },
    on: {
      "update:dialog": function ($event) {
        _vm.stockIncreaseDialog = $event;
      },
      "save": _vm.saveStockIncrease,
      "close": _vm.closeStockIncreaseDialog
    }
  }), _vm._ssrNode(" "), _c('StockAdjustmentDialog', {
    attrs: {
      "dialog": _vm.stockAdjustDialog,
      "selected-product": _vm.selectedProduct,
      "saving": _vm.saving
    },
    on: {
      "update:dialog": function ($event) {
        _vm.stockAdjustDialog = $event;
      },
      "save": _vm.saveStockAdjustment,
      "close": _vm.closeStockAdjustDialog
    }
  }), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px",
      "persistent": ""
    },
    model: {
      value: _vm.bulkStockDialog,
      callback: function ($$v) {
        _vm.bulkStockDialog = $$v;
      },
      expression: "bulkStockDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "dialog-title primary"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-playlist-plus")]), _vm._v(" "), _c('span', {
    staticClass: "white--text"
  }, [_vm._v("Bulk Stock Increase")])], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VDataTable["a" /* default */], {
    staticClass: "bulk-stock-table",
    attrs: {
      "headers": _vm.bulkHeaders,
      "items": _vm.bulkStockItems,
      "hide-default-footer": ""
    },
    scopedSlots: _vm._u([{
      key: "item.product",
      fn: function ({
        item,
        index
      }) {
        return [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.allProducts,
            "item-text": "pro_name",
            "item-value": "id",
            "label": "Select Product",
            "dense": "",
            "clearable": "",
            "placeholder": "Search products..."
          },
          on: {
            "change": function ($event) {
              return _vm.updateBulkProduct(index);
            }
          },
          scopedSlots: _vm._u([{
            key: "item",
            fn: function ({
              item: product
            }) {
              return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(product.pro_name))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(product.pro_desc))])], 1)];
            }
          }], null, true),
          model: {
            value: item.productId,
            callback: function ($$v) {
              _vm.$set(item, "productId", $$v);
            },
            expression: "item.productId"
          }
        })];
      }
    }, {
      key: "item.currentStock",
      fn: function ({
        item
      }) {
        return [_c('span', [_vm._v(_vm._s(_vm.formatNumber(item.currentStock || 0)))])];
      }
    }, {
      key: "item.quantity",
      fn: function ({
        item
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "min": "0.01",
            "step": "0.01",
            "dense": "",
            "hide-details": "",
            "placeholder": "0.00"
          },
          model: {
            value: item.quantity,
            callback: function ($$v) {
              _vm.$set(item, "quantity", _vm._n($$v));
            },
            expression: "item.quantity"
          }
        })];
      }
    }, {
      key: "item.costPerUnit",
      fn: function ({
        item
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "min": "0",
            "step": "0.01",
            "dense": "",
            "hide-details": "",
            "placeholder": "0.00"
          },
          model: {
            value: item.costPerUnit,
            callback: function ($$v) {
              _vm.$set(item, "costPerUnit", _vm._n($$v));
            },
            expression: "item.costPerUnit"
          }
        })];
      }
    }, {
      key: "item.totalCost",
      fn: function ({
        item
      }) {
        return [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency((item.quantity || 0) * (item.costPerUnit || 0))))])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        index
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "small": "",
            "color": "error"
          },
          on: {
            "click": function ($event) {
              return _vm.removeBulkItem(index);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-delete")])], 1)];
      }
    }])
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.addBulkItem
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n          Add Product\n        ")], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mt-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Supplier/Vendor",
      "outlined": "",
      "prepend-inner-icon": "mdi-truck",
      "placeholder": "Supplier name..."
    },
    model: {
      value: _vm.bulkStockData.supplier,
      callback: function ($$v) {
        _vm.$set(_vm.bulkStockData, "supplier", $$v);
      },
      expression: "bulkStockData.supplier"
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
      value: _vm.bulkStockData.referenceNumber,
      callback: function ($$v) {
        _vm.$set(_vm.bulkStockData, "referenceNumber", $$v);
      },
      expression: "bulkStockData.referenceNumber"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c('div', {
    staticClass: "bulk-summary mr-4"
  }, [_c('strong', [_vm._v("Total Items: " + _vm._s(_vm.bulkStockItems.length))]), _vm._v(" | \n          "), _c('strong', [_vm._v("Total Cost: " + _vm._s(_vm.formatCurrency(_vm.getBulkTotalCost())))])]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeBulkStockDialog
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.saving,
      "disabled": _vm.bulkStockItems.length === 0
    },
    on: {
      "click": _vm.saveBulkStockIncrease
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n          Update All Stock\n        ")], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "900px"
    },
    model: {
      value: _vm.stockHistoryDialog,
      callback: function ($$v) {
        _vm.stockHistoryDialog = $$v;
      },
      expression: "stockHistoryDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "dialog-title info"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-history")]), _vm._v(" "), _c('span', {
    staticClass: "white--text"
  }, [_vm._v("Stock History - " + _vm._s((_vm$selectedProduct = _vm.selectedProduct) === null || _vm$selectedProduct === void 0 ? void 0 : _vm$selectedProduct.pro_name))])], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VDataTable["a" /* default */], {
    staticClass: "history-table",
    attrs: {
      "headers": _vm.historyHeaders,
      "items": _vm.stockHistory,
      "loading": _vm.loadingHistory,
      "items-per-page": 10
    },
    scopedSlots: _vm._u([{
      key: "item.type",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getHistoryTypeColor(item.transactionType),
            "dark": "",
            "small": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "x-small": ""
          }
        }, [_vm._v(_vm._s(_vm.getHistoryTypeIcon(item.transactionType)))]), _vm._v("\n              " + _vm._s(item.transactionType.toUpperCase()) + "\n            ")], 1)];
      }
    }, {
      key: "item.change",
      fn: function ({
        item
      }) {
        return [_c('span', {
          class: item.baseQuantityChange > 0 ? 'success--text' : 'error--text'
        }, [_vm._v("\n              " + _vm._s(item.baseQuantityChange > 0 ? '+' : '') + _vm._s(_vm.formatNumber(item.baseQuantityChange)) + "\n            ")])];
      }
    }, {
      key: "item.newStock",
      fn: function ({
        item
      }) {
        return [_c('strong', [_vm._v(_vm._s(_vm.formatNumber(item.baseQuantityAfter)))])];
      }
    }, {
      key: "item.cost",
      fn: function ({
        item
      }) {
        return [item.totalCost ? _c('span', [_vm._v(_vm._s(_vm.formatCurrency(item.totalCost)))]) : _c('span', {
          staticClass: "text-grey"
        }, [_vm._v("-")])];
      }
    }, {
      key: "item.date",
      fn: function ({
        item
      }) {
        return [_c('div', [_vm._v("\n              " + _vm._s(_vm.formatDate(item.createdAt)) + "\n              "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-grey"
        }, [_vm._v(_vm._s(_vm.formatTime(item.createdAt)))])])];
      }
    }, {
      key: "item.notes",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "notes-cell"
        }, [item.notes && item.notes.length > 50 ? _c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on
            }) {
              return [_c('span', _vm._g({}, on), [_vm._v(_vm._s(item.notes.substring(0, 50)) + "...")])];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v(_vm._s(item.notes))])]) : _c('span', [_vm._v(_vm._s(item.notes || '-'))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.stockHistoryDialog = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": "",
      "loading": _vm.exportingHistory
    },
    on: {
      "click": _vm.exportProductHistory
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-download")]), _vm._v("\n          Export\n        ")], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VOverlay["a" /* default */], {
    attrs: {
      "value": _vm.loading && _vm.products.length === 0,
      "absolute": ""
    }
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "size": "64"
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/inventory/stock-management/index.vue?vue&type=template&id=1d0932aa&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(403);

// EXTERNAL MODULE: ./components/card/stockMaintenance.vue + 5 modules
var stockMaintenance = __webpack_require__(1006);

// EXTERNAL MODULE: ./components/card/stockAdjustMent.vue + 4 modules
var stockAdjustMent = __webpack_require__(1039);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/inventory/stock-management/index.vue?vue&type=script&lang=js



/* harmony default export */ var stock_managementvue_type_script_lang_js = ({
  name: 'StockManagement',
  components: {
    StockIncreaseDialog: stockMaintenance["default"],
    StockAdjustmentDialog: stockAdjustMent["default"]
  },
  data() {
    return {
      // Loading states
      loading: false,
      saving: false,
      deleting: false,
      loadingHistory: false,
      exportingHistory: false,
      // Data
      products: [],
      allProducts: [],
      categories: [],
      stockHistory: [],
      // Statistics
      stockStatistics: [{
        label: 'Total Products',
        value: 0,
        icon: 'mdi-package-variant',
        color: 'primary'
      }, {
        label: 'Low Stock Items',
        value: 0,
        icon: 'mdi-alert-circle',
        color: 'warning'
      }, {
        label: 'Out of Stock',
        value: 0,
        icon: 'mdi-close-circle',
        color: 'error'
      }, {
        label: 'Total Stock Value',
        value: 0,
        icon: 'mdi-currency-usd',
        color: 'success'
      }],
      // Pagination
      options: {},
      totalItems: 0,
      // Filters
      filters: {
        categoryId: null,
        stockLevel: null,
        search: ''
      },
      stockLevelOptions: [{
        text: 'Out of Stock',
        value: 'out'
      }, {
        text: 'Low Stock',
        value: 'low'
      }, {
        text: 'Normal Stock',
        value: 'normal'
      }, {
        text: 'Overstock',
        value: 'over'
      }],
      // Dialogs
      stockIncreaseDialog: false,
      stockAdjustDialog: false,
      bulkStockDialog: false,
      stockHistoryDialog: false,
      // Selected product
      selectedProduct: null,
      currencySymbol: '$',
      // Bulk stock operations
      bulkStockItems: [],
      bulkStockData: {
        supplier: '',
        referenceNumber: ''
      },
      // Table headers
      headers: [{
        text: 'Product',
        value: 'product',
        sortable: false,
        width: '280px'
      }, {
        text: 'Current Stock',
        value: 'currentStock',
        align: 'center',
        width: '130px'
      }, {
        text: 'Price/Cost',
        value: 'unitPrice',
        align: 'right',
        width: '120px'
      }, {
        text: 'Status',
        value: 'stockStatus',
        align: 'center',
        width: '120px'
      }, {
        text: 'Last Updated',
        value: 'lastUpdated',
        align: 'center',
        width: '140px'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        align: 'center',
        width: '150px'
      }],
      bulkHeaders: [{
        text: 'Product',
        value: 'product',
        width: '30%'
      }, {
        text: 'Current Stock',
        value: 'currentStock',
        align: 'center',
        width: '15%'
      }, {
        text: 'Quantity to Add',
        value: 'quantity',
        align: 'center',
        width: '15%'
      }, {
        text: 'Cost per Unit',
        value: 'costPerUnit',
        align: 'center',
        width: '15%'
      }, {
        text: 'Total Cost',
        value: 'totalCost',
        align: 'right',
        width: '15%'
      }, {
        text: '',
        value: 'actions',
        sortable: false,
        align: 'center',
        width: '10%'
      }],
      historyHeaders: [{
        text: 'Date',
        value: 'date',
        width: '140px'
      }, {
        text: 'Type',
        value: 'type',
        width: '120px'
      }, {
        text: 'Change',
        value: 'change',
        align: 'center',
        width: '100px'
      }, {
        text: 'New Stock',
        value: 'newStock',
        align: 'center',
        width: '100px'
      }, {
        text: 'Cost',
        value: 'cost',
        align: 'right',
        width: '100px'
      }, {
        text: 'Notes',
        value: 'notes',
        width: '200px'
      }],
      // Debounced search
      debounceSearch: null
    };
  },
  created() {
    this.debounceSearch = Object(external_lodash_["debounce"])(this.loadProducts, 500);
    this.loadInitialData();
  },
  methods: {
    async loadInitialData() {
      try {
        await Promise.all([this.loadProducts(), this.loadCategories(), this.loadStatistics()]);
      } catch (error) {
        this.$toast.error('Error loading initial data');
        console.error(error);
      }
    },
    async loadProducts() {
      this.loading = true;
      try {
        const {
          page = 1,
          itemsPerPage = 10,
          sortBy = [],
          sortDesc = []
        } = this.options;
        const params = {
          page,
          limit: itemsPerPage,
          ...(this.filters.categoryId && {
            categoryId: this.filters.categoryId
          }),
          ...(this.filters.stockLevel && {
            stockLevel: this.filters.stockLevel
          }),
          ...(this.filters.search && {
            search: this.filters.search
          }),
          ...(sortBy.length && {
            sortBy: sortBy[0]
          }),
          ...(sortDesc.length && {
            sortOrder: sortDesc[0] ? 'DESC' : 'ASC'
          })
        };
        const response = await this.$axios.get('/api/product/find', {
          params
        });
        if (response.data.success) {
          this.products = response.data.data.products;
          this.totalItems = response.data.data.pagination.totalItems;
        } else {
          this.products = response.data || response.data.data || [];
          this.totalItems = this.products.length;
        }

        // Load all products for bulk operations (only once)
        if (!this.allProducts.length) {
          var _allResponse$data$dat;
          const allResponse = await this.$axios.get('/api/product/find', {
            params: {
              limit: 1000,
              isActive: 1
            }
          });
          this.allProducts = ((_allResponse$data$dat = allResponse.data.data) === null || _allResponse$data$dat === void 0 ? void 0 : _allResponse$data$dat.products) || allResponse.data.data || allResponse.data || [];
        }
      } catch (error) {
        this.$toast.error('Error loading products');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async loadCategories() {
      try {
        const response = await this.$axios.get('/api/category/find', {
          params: {
            isActive: 1
          }
        });
        this.categories = response.data.data || response.data || [];
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    },
    async loadStatistics() {
      try {
        const response = await this.$axios.get('/api/stock-transactions/statistics');
        if (response.data.success) {
          const stats = response.data.data;
          this.stockStatistics[0].value = stats.totalProducts || 0;
          this.stockStatistics[1].value = stats.lowStockItems || 0;
          this.stockStatistics[2].value = stats.outOfStockItems || 0;
          this.stockStatistics[3].value = stats.totalStockValue || 0;
        }
      } catch (error) {
        console.error('Error loading statistics:', error);
      }
    },
    // Stock level and status methods
    getStockLevelColor(currentStock, minStock) {
      if (!currentStock || currentStock === 0) return 'error';
      if (currentStock <= minStock) return 'warning';
      return 'success';
    },
    getStockStatus(currentStock, minStock) {
      if (!currentStock || currentStock === 0) return 'OUT OF STOCK';
      if (currentStock <= minStock) return 'LOW STOCK';
      return 'NORMAL';
    },
    getStockStatusColor(currentStock, minStock) {
      if (!currentStock || currentStock === 0) return 'error';
      if (currentStock <= minStock) return 'warning';
      return 'success';
    },
    getStockStatusIcon(currentStock, minStock) {
      if (!currentStock || currentStock === 0) return 'mdi-close-circle';
      if (currentStock <= minStock) return 'mdi-alert-circle';
      return 'mdi-check-circle';
    },
    getCategoryColor(category) {
      const colors = {
        'food': 'green',
        'beverage': 'blue',
        'stock': 'orange',
        'product': 'purple',
        'service': 'indigo'
      };
      return colors[category === null || category === void 0 ? void 0 : category.toLowerCase()] || 'grey';
    },
    formatCategory(category) {
      if (!category) return 'No category';
      return category.charAt(0).toUpperCase() + category.slice(1);
    },
    // Stock increase operations
    openStockIncreaseDialog(product) {
      this.selectedProduct = product;
      this.stockIncreaseDialog = true;
    },
    closeStockIncreaseDialog() {
      this.stockIncreaseDialog = false;
      this.selectedProduct = null;
    },
    async saveStockIncrease(data) {
      this.saving = true;
      try {
        const response = await this.$axios.post('/api/stock-transactions/stock-increase', data);
        if (response.data.success) {
          this.$toast.success(`Stock increased successfully for ${this.selectedProduct.pro_name}`);
          await Promise.all([this.loadProducts(), this.loadStatistics()]);
          this.closeStockIncreaseDialog();
        } else {
          throw new Error(response.data.message || 'Failed to increase stock');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        const message = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || error.message || 'Error increasing stock';
        this.$toast.error(message);
        console.error(error);
      } finally {
        this.saving = false;
      }
    },
    // Stock adjustment operations
    openStockAdjustDialog(product) {
      this.selectedProduct = product;
      this.stockAdjustDialog = true;
    },
    closeStockAdjustDialog() {
      this.stockAdjustDialog = false;
      this.selectedProduct = null;
    },
    async saveStockAdjustment(data) {
      this.saving = true;
      try {
        const response = await this.$axios.post('/api/stock-transactions/stock-adjust', data);
        if (response.data.success) {
          this.$toast.success(`Stock adjusted successfully for ${this.selectedProduct.pro_name}`);
          await Promise.all([this.loadProducts(), this.loadStatistics()]);
          this.closeStockAdjustDialog();
        } else {
          throw new Error(response.data.message || 'Failed to adjust stock');
        }
      } catch (error) {
        var _error$response2, _error$response2$data;
        const message = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || error.message || 'Error adjusting stock';
        this.$toast.error(message);
        console.error(error);
      } finally {
        this.saving = false;
      }
    },
    // Bulk operations
    openBulkStockDialog() {
      this.bulkStockItems = [this.getEmptyBulkItem()];
      this.bulkStockData = {
        supplier: '',
        referenceNumber: ''
      };
      this.bulkStockDialog = true;
    },
    closeBulkStockDialog() {
      this.bulkStockDialog = false;
      this.bulkStockItems = [];
    },
    addBulkItem() {
      this.bulkStockItems.push(this.getEmptyBulkItem());
    },
    removeBulkItem(index) {
      if (this.bulkStockItems.length > 1) {
        this.bulkStockItems.splice(index, 1);
      }
    },
    updateBulkProduct(index) {
      const item = this.bulkStockItems[index];
      const product = this.allProducts.find(p => p.id === item.productId);
      if (product) {
        item.currentStock = product.stock_count || 0;
        item.costPerUnit = product.cost_price || product.pro_price || 0;
      }
    },
    getEmptyBulkItem() {
      return {
        productId: null,
        currentStock: 0,
        quantity: null,
        costPerUnit: null
      };
    },
    getBulkTotalCost() {
      return this.bulkStockItems.reduce((total, item) => {
        return total + (item.quantity || 0) * (item.costPerUnit || 0);
      }, 0);
    },
    async saveBulkStockIncrease() {
      const validItems = this.bulkStockItems.filter(item => item.productId && item.quantity > 0);
      if (validItems.length === 0) {
        this.$toast.warning('Please add at least one valid product with quantity');
        return;
      }
      this.saving = true;
      try {
        const data = {
          items: validItems.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            costPerUnit: item.costPerUnit || 0
          })),
          supplier: this.bulkStockData.supplier,
          referenceNumber: this.bulkStockData.referenceNumber
        };
        const response = await this.$axios.post('/api/stock-transactions/bulk-stock-increase', data);
        if (response.data.success) {
          this.$toast.success(`Bulk stock increase completed for ${validItems.length} products`);
          await Promise.all([this.loadProducts(), this.loadStatistics()]);
          this.closeBulkStockDialog();
        }
      } catch (error) {
        var _error$response3, _error$response3$data;
        const message = ((_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : (_error$response3$data = _error$response3.data) === null || _error$response3$data === void 0 ? void 0 : _error$response3$data.message) || 'Error with bulk stock increase';
        this.$toast.error(message);
        console.error(error);
      } finally {
        this.saving = false;
      }
    },
    // Stock history
    async viewStockHistory(product) {
      this.selectedProduct = product;
      this.stockHistoryDialog = true;
      this.loadingHistory = true;
      try {
        const response = await this.$axios.get(`/api/stock-transactions/product/${product.id}`);
        this.stockHistory = response.data.data || response.data || [];
      } catch (error) {
        this.$toast.error('Error loading stock history');
        console.error(error);
      } finally {
        this.loadingHistory = false;
      }
    },
    getHistoryTypeColor(type) {
      const colors = {
        'purchase': 'success',
        'sale': 'primary',
        'adjustment': 'warning',
        'recipe_deduction': 'info',
        'return': 'purple',
        'transfer': 'orange'
      };
      return colors[type === null || type === void 0 ? void 0 : type.toLowerCase()] || 'grey';
    },
    getHistoryTypeIcon(type) {
      const icons = {
        'purchase': 'mdi-plus-circle',
        'sale': 'mdi-cart',
        'adjustment': 'mdi-pencil-circle',
        'recipe_deduction': 'mdi-minus-circle',
        'return': 'mdi-undo',
        'transfer': 'mdi-swap-horizontal'
      };
      return icons[type === null || type === void 0 ? void 0 : type.toLowerCase()] || 'mdi-circle';
    },
    async exportProductHistory() {
      if (!this.selectedProduct) return;
      this.exportingHistory = true;
      try {
        const response = await this.$axios.get(`/api/stock-transactions/export?productIds=${this.selectedProduct.id}`, {
          responseType: 'blob'
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${this.selectedProduct.pro_name}-history-${new Date().toISOString().substr(0, 10)}.xlsx`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        this.$toast.success('Stock history exported successfully');
      } catch (error) {
        this.$toast.error('Error exporting stock history');
        console.error(error);
      } finally {
        this.exportingHistory = false;
      }
    },
    // Utility methods
    resetFilters() {
      this.filters = {
        categoryId: null,
        stockLevel: null,
        search: ''
      };
      this.loadProducts();
    },
    async exportStockReport() {
      try {
        const response = await this.$axios.get('/api/stock-transactions/export', {
          responseType: 'blob',
          params: this.filters
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `stock-report-${new Date().toISOString().substr(0, 10)}.xlsx`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        this.$toast.success('Stock report exported successfully');
      } catch (error) {
        this.$toast.error('Error exporting stock report');
        console.error(error);
      }
    },
    viewStockSummary() {
      this.$router.push('/inventory/summary');
    },
    formatNumber(amount) {
      const num = parseFloat(amount || 0);
      return num.toLocaleString('en-US', {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
      });
    },
    formatCurrency(amount) {
      return parseFloat(amount || 0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatTimeAgo(date) {
      if (!date) return '-';
      const now = new Date();
      const past = new Date(date);
      const diffInHours = (now - past) / (1000 * 60 * 60);
      if (diffInHours < 1) {
        return 'Just now';
      } else if (diffInHours < 24) {
        return `${Math.floor(diffInHours)} hours ago`;
      } else {
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} days ago`;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/inventory/stock-management/index.vue?vue&type=script&lang=js
 /* harmony default export */ var inventory_stock_managementvue_type_script_lang_js = (stock_managementvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/inventory/stock-management/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1238)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  inventory_stock_managementvue_type_script_lang_js,
  stock_managementvue_type_template_id_1d0932aa_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "1d0932aa",
  "a136db1e"
  
)

/* harmony default export */ var stock_management = __webpack_exports__["default"] = (component.exports);

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

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(511);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("53887fd2", content, true)

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);border-radius:4px;color:#fff;display:inline-block;font-size:14px;line-height:22px;opacity:0;padding:5px 16px;pointer-events:none;position:absolute;text-transform:none;width:auto}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(510);
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _mixins_menuable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(109);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
 // Mixins





 // Helpers




/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_menuable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;
      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }
      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },
    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;
      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }
      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      if (this.attach === false) top += this.pageYOffset;
      return `${this.calcYOverflow(top)}px`;
    },
    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },
    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },
    offsetY() {
      return this.top || this.bottom;
    },
    offsetX() {
      return this.left || this.right;
    },
    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "h"])(this.maxWidth),
        minWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "h"])(this.minWidth),
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },
  mounted() {
    if (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* getSlotType */ "t"])(this, 'activator', true) === 'v-slot') {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_7__[/* consoleError */ "b"])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },
  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },
    deactivate() {
      this.runDelay('close');
    },
    genActivatorListeners() {
      const listeners = _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genActivatorListeners.call(this);
      if (this.openOnFocus) {
        listeners.focus = e => {
          this.getActivator(e);
          this.runDelay('open');
        };
        listeners.blur = e => {
          this.getActivator(e);
          this.runDelay('close');
        };
      }
      listeners.keydown = e => {
        if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* keyCodes */ "y"].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };
      return listeners;
    },
    genActivatorAttributes() {
      return {
        'aria-haspopup': true,
        'aria-expanded': String(this.isActive)
      };
    },
    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },
    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }
  },
  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }
}));

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(797);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1cdc0b75", content, true, context)
};

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(799);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2f2da42c", content, true, context)
};

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockMaintenance_vue_vue_type_style_index_0_id_3c23116d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-title[data-v-3c23116d]{color:#fff;font-weight:600}.conversion-info[data-v-3c23116d]{background-color:#e3f2fd;border-radius:4px;font-size:.875rem;padding:8px}.text-caption[data-v-3c23116d]{font-size:.75rem!important}.v-dialog__content[data-v-3c23116d]{align-items:flex-start;padding-top:48px}@media (max-width:768px){.v-dialog[data-v-3c23116d]{margin:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockAdjustMent_vue_vue_type_style_index_0_id_4385b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-title[data-v-4385b358]{color:#fff;font-weight:600}.adjustment-summary[data-v-4385b358]{font-size:.875rem}.v-alert.v-alert--dense[data-v-4385b358]{padding-bottom:4px;padding-top:4px}.v-dialog__content[data-v-4385b358]{align-items:flex-start;padding-top:48px}@media (max-width:768px){.v-dialog[data-v-4385b358]{margin:16px}.adjustment-summary .d-flex[data-v-4385b358]{flex-direction:column;gap:8px}.adjustment-summary .d-flex>div[data-v-4385b358]{text-align:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1239);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("52e5d482", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map