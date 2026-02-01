exports.ids = [203,142];
exports.modules = {

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(495);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(480);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/promotions/PromotionDialog.vue?vue&type=template&id=26ea7e55&scoped=true

















var PromotionDialogvue_type_template_id_26ea7e55_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "d-flex align-center justify-space-between"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-tag-plus")]), _vm._v("\n      " + _vm._s(_vm.mode === 'create' ? 'Create New Promotion' : 'Edit Promotion') + "\n    ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.handleClose
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-6"
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.handleSave.apply(null, arguments);
      }
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n        Basic Information\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Promotion Name *",
      "rules": _vm.nameRules,
      "outlined": "",
      "placeholder": "e.g., Buy 2 Get 1 Free Coffee"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('name', _vm.formData.name);
      }
    },
    model: {
      value: _vm.formData.name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "name", $$v);
      },
      expression: "formData.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Promotion Code *",
      "rules": _vm.codeRules,
      "outlined": "",
      "placeholder": "e.g., B2G1COFFEE"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('code', _vm.formData.code);
      }
    },
    model: {
      value: _vm.formData.code,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "code", $$v);
      },
      expression: "formData.code"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Description",
      "outlined": "",
      "rows": "3",
      "placeholder": "Describe the promotion details..."
    },
    model: {
      value: _vm.formData.description,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "description", $$v);
      },
      expression: "formData.description"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-tag")]), _vm._v("\n        Promotion Type\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "label": "Promotion Type *",
      "items": _vm.promotionTypes,
      "item-text": "title",
      "item-value": "value",
      "rules": _vm.typeRules,
      "outlined": "",
      "clearable": ""
    },
    on: {
      "input": _vm.onTypeChange,
      "blur": function ($event) {
        return _vm.debugFieldValidation('type', _vm.formData.type);
      }
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "color": item.color
          }
        }, [_vm._v(_vm._s(item.icon))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.title))])], 1)];
      }
    }]),
    model: {
      value: _vm.formData.type,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "type", $$v);
      },
      expression: "formData.type"
    }
  })], 1)], 1), _vm._v(" "), _vm.formData.type ? _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-cog")]), _vm._v("\n        Configuration\n      ")], 1) : _vm._e(), _vm._v(" "), _vm.formData.type === 'buy_x_get_y' ? _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Buy Quantity *",
      "type": "number",
      "rules": _vm.buyQuantityRules,
      "outlined": "",
      "min": "1"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('buy_quantity', _vm.formData.conditions.buy_quantity);
      }
    },
    model: {
      value: _vm.formData.conditions.buy_quantity,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "buy_quantity", _vm._n($$v));
      },
      expression: "formData.conditions.buy_quantity"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Get Quantity *",
      "type": "number",
      "rules": _vm.getQuantityRules,
      "outlined": "",
      "min": "1"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('get_quantity', _vm.formData.conditions.get_quantity);
      }
    },
    model: {
      value: _vm.formData.conditions.get_quantity,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "get_quantity", _vm._n($$v));
      },
      expression: "formData.conditions.get_quantity"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Max Free Items",
      "type": "number",
      "outlined": "",
      "min": "0",
      "placeholder": "Unlimited"
    },
    model: {
      value: _vm.formData.conditions.max_free_items,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "max_free_items", _vm._n($$v));
      },
      expression: "formData.conditions.max_free_items"
    }
  })], 1)], 1)], 1) : _vm.formData.type === 'percentage' ? _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Discount Percentage *",
      "type": "number",
      "rules": _vm.discountPercentageRules,
      "outlined": "",
      "min": "1",
      "max": "100",
      "suffix": "%"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('discount_percentage', _vm.formData.conditions.discount_percentage);
      }
    },
    model: {
      value: _vm.formData.conditions.discount_percentage,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "discount_percentage", _vm._n($$v));
      },
      expression: "formData.conditions.discount_percentage"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Max Discount Amount",
      "type": "number",
      "outlined": "",
      "min": "0",
      "prefix": "$",
      "placeholder": "No limit"
    },
    model: {
      value: _vm.formData.conditions.max_discount_amount,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "max_discount_amount", _vm._n($$v));
      },
      expression: "formData.conditions.max_discount_amount"
    }
  })], 1)], 1)], 1) : _vm.formData.type === 'fixed_amount' ? _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Discount Amount *",
      "type": "number",
      "rules": _vm.discountAmountRules,
      "outlined": "",
      "min": "0.01",
      "step": "0.01",
      "prefix": "$"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('discount_amount', _vm.formData.conditions.discount_amount);
      }
    },
    model: {
      value: _vm.formData.conditions.discount_amount,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "discount_amount", _vm._n($$v));
      },
      expression: "formData.conditions.discount_amount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Minimum Order Amount",
      "type": "number",
      "outlined": "",
      "min": "0",
      "step": "0.01",
      "prefix": "$",
      "placeholder": "No minimum"
    },
    model: {
      value: _vm.formData.conditions.minimum_order,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "minimum_order", _vm._n($$v));
      },
      expression: "formData.conditions.minimum_order"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.formData.type ? _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-package-variant")]), _vm._v("\n        Applicable Items\n      ")], 1) : _vm._e(), _vm._v(" "), _vm.formData.type ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "label": "Categories",
      "items": _vm.categories,
      "item-text": "categ_name",
      "item-value": "categ_id",
      "outlined": "",
      "multiple": "",
      "chips": "",
      "deletable-chips": "",
      "placeholder": "Select categories...",
      "loading": _vm.loadingCategories
    },
    model: {
      value: _vm.formData.conditions.applicable_categories,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "applicable_categories", $$v);
      },
      expression: "formData.conditions.applicable_categories"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "label": "Specific Products",
      "items": _vm.products,
      "item-text": "pro_name",
      "item-value": "id",
      "outlined": "",
      "multiple": "",
      "chips": "",
      "deletable-chips": "",
      "placeholder": "Select products...",
      "loading": _vm.loadingProducts
    },
    model: {
      value: _vm.formData.conditions.applicable_products,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "applicable_products", $$v);
      },
      expression: "formData.conditions.applicable_products"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-calendar-range")]), _vm._v("\n        Validity Period\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Start Date *",
      "type": "datetime-local",
      "rules": _vm.startDateRules,
      "outlined": ""
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('start_date', _vm.formData.start_date);
      }
    },
    model: {
      value: _vm.formData.start_date,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "start_date", $$v);
      },
      expression: "formData.start_date"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "End Date *",
      "type": "datetime-local",
      "rules": _vm.endDateRules,
      "outlined": ""
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('end_date', _vm.formData.end_date);
      }
    },
    model: {
      value: _vm.formData.end_date,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "end_date", $$v);
      },
      expression: "formData.end_date"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-counter")]), _vm._v("\n        Usage Limits\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Maximum Uses",
      "type": "number",
      "outlined": "",
      "min": "1",
      "placeholder": "Unlimited"
    },
    model: {
      value: _vm.formData.max_uses,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "max_uses", _vm._n($$v));
      },
      expression: "formData.max_uses"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Priority",
      "type": "number",
      "rules": _vm.priorityRules,
      "outlined": "",
      "min": "1",
      "max": "100",
      "hint": "Higher priority promotions are applied first"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('priority', _vm.formData.priority);
      }
    },
    model: {
      value: _vm.formData.priority,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "priority", _vm._n($$v));
      },
      expression: "formData.priority"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-tune")]), _vm._v("\n        Additional Settings\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "color": "primary",
      "hide-details": ""
    },
    model: {
      value: _vm.formData.is_active,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "is_active", $$v);
      },
      expression: "formData.is_active"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-caption text--secondary mt-1"
  }, [_vm._v("\n            Only active promotions can be applied to orders\n          ")])], 1)], 1), _vm._v(" "), _vm.formData.type ? _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-eye")]), _vm._v("\n        Preview\n      ")], 1) : _vm._e(), _vm._v(" "), _vm.formData.type ? _c(VCard["a" /* default */], {
    staticClass: "promotion-preview",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "d-flex align-center mb-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": _vm.getTypeColor(_vm.formData.type)
    }
  }, [_vm._v("\n              " + _vm._s(_vm.getTypeIcon(_vm.formData.type)) + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.formData.name || 'Promotion Name'))]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.formData.is_active ? 'success' : 'error',
      "small": "",
      "label": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.formData.is_active ? 'Active' : 'Inactive') + "\n            ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "body-2 mb-2"
  }, [_vm._v(_vm._s(_vm.getPromotionDescription()))]), _vm._v(" "), _c('div', {
    staticClass: "caption text--secondary"
  }, [_vm._v("\n            Valid: " + _vm._s(_vm.formatDate(_vm.formData.start_date)) + " -\n            " + _vm._s(_vm.formatDate(_vm.formData.end_date)) + "\n          ")]), _vm._v(" "), _vm.selectedCategoriesNames.length > 0 ? _c('div', {
    staticClass: "mt-2"
  }, [_c('div', {
    staticClass: "caption font-weight-medium"
  }, [_vm._v("Categories:")]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("\n              " + _vm._s(_vm.selectedCategoriesNames.join(', ')) + "\n            ")])]) : _vm._e(), _vm._v(" "), _vm.selectedProductsNames.length > 0 ? _c('div', {
    staticClass: "mt-2"
  }, [_c('div', {
    staticClass: "caption font-weight-medium"
  }, [_vm._v("Products:")]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v(_vm._s(_vm.selectedProductsNames.join(', ')))])]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h6"
  }, [_vm._v("Debug Information")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c('div', [_c('strong', [_vm._v("Form Valid:")]), _vm._v(" " + _vm._s(_vm.valid))]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Form Data:")])]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(JSON.stringify(_vm.formData, null, 2)))]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Validation Errors:")])]), _vm._v(" "), _vm._l(_vm.validationErrors, function (error) {
    return _c('div', {
      key: error.field
    }, [_vm._v("\n            " + _vm._s(error.field) + ": " + _vm._s(error.message) + "\n          ")]);
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.saving,
      "disabled": !_vm.valid
    },
    on: {
      "click": _vm.handleSave
    }
  }, [_vm._v("\n      " + _vm._s(_vm.mode === 'create' ? 'Create Promotion' : 'Save Changes') + "\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/promotions/PromotionDialog.vue?vue&type=template&id=26ea7e55&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/promotions/PromotionDialog.vue?vue&type=script&lang=js
/* harmony default export */ var PromotionDialogvue_type_script_lang_js = ({
  name: 'PromotionDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    promotion: {
      type: Object,
      default: null
    },
    mode: {
      type: String,
      default: 'create'
    }
  },
  data() {
    return {
      valid: false,
      saving: false,
      categories: [],
      products: [],
      loadingCategories: false,
      loadingProducts: false,
      validationErrors: [],
      formData: {
        name: '',
        code: '',
        type: '',
        description: '',
        start_date: '',
        end_date: '',
        is_active: true,
        priority: 1,
        max_uses: null,
        conditions: {}
      },
      promotionTypes: [{
        title: 'Buy X Get Y',
        value: 'buy_x_get_y',
        description: 'Customer gets free items when buying specified quantity',
        icon: 'mdi-gift',
        color: 'success'
      }, {
        title: 'Percentage Discount',
        value: 'percentage',
        description: 'Percentage discount on applicable items',
        icon: 'mdi-percent',
        color: 'primary'
      }, {
        title: 'Fixed Amount',
        value: 'fixed_amount',
        description: 'Fixed dollar amount discount',
        icon: 'mdi-currency-usd',
        color: 'warning'
      }, {
        title: 'Combo Deal',
        value: 'combo_deal',
        description: 'Special price for item combinations',
        icon: 'mdi-package-variant',
        color: 'info'
      }],
      nameRules: [v => !!v || 'Promotion name is required', v => v && v.length <= 255 || 'Name must be less than 255 characters'],
      codeRules: [v => !!v || 'Promotion code is required', v => v && v.length <= 50 || 'Code must be less than 50 characters', v => /^[A-Z0-9_-]+$/.test(v) || 'Code can only contain uppercase letters, numbers, underscores, and hyphens'],
      typeRules: [v => !!v || 'Promotion type is required'],
      startDateRules: [v => !!v || 'Start date is required'],
      priorityRules: [v => v >= 1 || 'Priority must be at least 1'],
      buyQuantityRules: [v => v > 0 || 'Must be greater than 0'],
      getQuantityRules: [v => v > 0 || 'Must be greater than 0'],
      discountPercentageRules: [v => v > 0 && v <= 100 || 'Must be between 1-100'],
      discountAmountRules: [v => v > 0 || 'Must be greater than 0']
    };
  },
  computed: {
    endDateRules() {
      return [v => !!v || 'End date is required', v => !this.formData.start_date || new Date(v) > new Date(this.formData.start_date) || 'End date must be after start date'];
    },
    selectedCategoriesNames() {
      var _this$formData$condit;
      if (!((_this$formData$condit = this.formData.conditions) !== null && _this$formData$condit !== void 0 && _this$formData$condit.applicable_categories) || !this.categories.length) return [];
      return this.categories.filter(cat => this.formData.conditions.applicable_categories.includes(cat.categ_id)).map(cat => cat.categ_name);
    },
    selectedProductsNames() {
      var _this$formData$condit2;
      if (!((_this$formData$condit2 = this.formData.conditions) !== null && _this$formData$condit2 !== void 0 && _this$formData$condit2.applicable_products) || !this.products.length) return [];
      return this.products.filter(prod => this.formData.conditions.applicable_products.includes(prod.id)).map(prod => prod.pro_name);
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        console.log('Dialog is showing, initializing form...');
        this.initializeForm();
        this.loadData();
      }
    },
    'formData.code'(newVal) {
      if (newVal) {
        this.formData.code = newVal.toUpperCase();
      }
    },
    valid(newVal) {
      console.log('Form validation changed:', newVal);
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    debugFieldValidation(fieldName, value) {
      console.log(`Field ${fieldName} validation:`, {
        value,
        valid: this.valid,
        formData: this.formData
      });
    },
    initializeForm() {
      console.log('Initializing form with mode:', this.mode);
      console.log('Promotion data:', this.promotion);
      if (this.mode === 'edit' && this.promotion) {
        this.formData = {
          ...this.promotion,
          start_date: this.formatDateTimeLocal(this.promotion.start_date),
          end_date: this.formatDateTimeLocal(this.promotion.end_date),
          conditions: {
            ...this.promotion.conditions
          }
        };
      } else {
        this.formData = {
          name: '',
          code: '',
          type: '',
          description: '',
          start_date: this.getDefaultStartDate(),
          end_date: this.getDefaultEndDate(),
          is_active: true,
          priority: 1,
          max_uses: null,
          conditions: {}
        };
      }
      console.log('Form initialized with data:', this.formData);
    },
    getDefaultStartDate() {
      const now = new Date();
      return now.toISOString().slice(0, 16);
    },
    getDefaultEndDate() {
      const future = new Date();
      future.setMonth(future.getMonth() + 1);
      return future.toISOString().slice(0, 16);
    },
    async loadData() {
      await Promise.all([this.loadCategories(), this.loadProducts()]);
    },
    async loadCategories() {
      this.loadingCategories = true;
      try {
        const response = await this.$axios.get('/api/category/find');
        this.categories = (response.data || []).filter(cat => cat.isActive);
        console.log('Categories loaded for promotion:', this.categories.length);
      } catch (error) {
        console.warn('Could not fetch categories for promotion:', error);
        this.categories = [];
      } finally {
        this.loadingCategories = false;
      }
    },
    async loadProducts() {
      this.loadingProducts = true;
      try {
        const response = await this.$axios.get('/api/product/find');
        const productData = response.data.data || response.data;
        this.products = productData.filter(product => product.isActive).map(product => ({
          ...product,
          id: product.id
        }));
        console.log('Products loaded for promotion:', this.products.length);
      } catch (error) {
        console.warn('Could not fetch products for promotion:', error);
        this.products = [];
      } finally {
        this.loadingProducts = false;
      }
    },
    onTypeChange(type) {
      console.log('Type changed to:', type);
      if (type === 'buy_x_get_y') {
        this.formData.conditions = {
          buy_quantity: 2,
          get_quantity: 1,
          applicable_categories: [],
          applicable_products: [],
          max_free_items: null
        };
      } else if (type === 'percentage') {
        this.formData.conditions = {
          discount_percentage: 10,
          max_discount_amount: null,
          minimum_order: null,
          applicable_categories: [],
          applicable_products: []
        };
      } else if (type === 'fixed_amount') {
        this.formData.conditions = {
          discount_amount: 5,
          minimum_order: null,
          applicable_categories: [],
          applicable_products: []
        };
      } else if (type === 'combo_deal') {
        this.formData.conditions = {
          required_items: [],
          combo_price: null,
          applicable_categories: [],
          applicable_products: []
        };
      }
      console.log('Conditions set to:', this.formData.conditions);
    },
    getPromotionDescription() {
      if (!this.formData.type || !this.formData.conditions) return '';
      const conditions = this.formData.conditions;
      switch (this.formData.type) {
        case 'buy_x_get_y':
          return `Buy ${conditions.buy_quantity || 0}, get ${conditions.get_quantity || 0} free`;
        case 'percentage':
          return `${conditions.discount_percentage || 0}% discount${conditions.max_discount_amount ? ` (max $${conditions.max_discount_amount})` : ''}`;
        case 'fixed_amount':
          return `${conditions.discount_amount || 0} off${conditions.minimum_order ? ` on orders over $${conditions.minimum_order}` : ''}`;
        case 'combo_deal':
          return 'Special combo pricing';
        default:
          return '';
      }
    },
    getTypeIcon(type) {
      const typeObj = this.promotionTypes.find(t => t.value === type);
      return typeObj ? typeObj.icon : 'mdi-tag';
    },
    getTypeColor(type) {
      const typeObj = this.promotionTypes.find(t => t.value === type);
      return typeObj ? typeObj.color : 'grey';
    },
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString();
    },
    formatDateTimeLocal(date) {
      if (!date) return '';
      const d = new Date(date);
      return d.toISOString().slice(0, 16);
    },
    async handleSave() {
      console.log('=== SAVE BUTTON CLICKED ===');
      console.log('Current form valid state:', this.valid);
      console.log('Current form data:', JSON.stringify(this.formData, null, 2));

      // Manual validation check
      console.log('Running manual validation...');
      const validationResults = await this.validateForm();
      console.log('Manual validation results:', validationResults);

      // Try the form validation
      console.log('Running form.validate()...');
      try {
        if (this.$refs.form && this.$refs.form.validate) {
          const formValidation = await this.$refs.form.validate();
          console.log('Form validation result:', formValidation);

          // Fix: Check the validation result properly
          // In Vuetify 2, validate() returns a boolean
          // In Vuetify 3, validate() returns an object with { valid: boolean }
          let isValid = false;
          if (typeof formValidation === 'boolean') {
            isValid = formValidation;
          } else if (formValidation && typeof formValidation.valid === 'boolean') {
            isValid = formValidation.valid;
          }
          console.log('Processed validation result:', isValid);
          if (!isValid) {
            console.log('Form is not valid, stopping save');
            return;
          }
        } else {
          console.warn('Form ref not available or validate method missing');
          // Fallback to manual validation
          if (!validationResults.valid) {
            console.log('Manual validation failed, stopping save');
            return;
          }
        }
      } catch (error) {
        console.error('Error during form validation:', error);
        return;
      }
      this.saving = true;
      console.log('Proceeding with save...');
      try {
        const saveData = {
          ...this.formData,
          start_date: new Date(this.formData.start_date).toISOString(),
          end_date: new Date(this.formData.end_date).toISOString()
        };
        console.log('Save data prepared:', JSON.stringify(saveData, null, 2));
        this.$emit('save', saveData);
      } catch (error) {
        console.error('Error saving promotion:', error);
      } finally {
        this.saving = false;
      }
    },
    async validateForm() {
      const errors = [];

      // Check required fields
      if (!this.formData.name) {
        errors.push({
          field: 'name',
          message: 'Name is required'
        });
      }
      if (!this.formData.code) {
        errors.push({
          field: 'code',
          message: 'Code is required'
        });
      }
      if (!this.formData.type) {
        errors.push({
          field: 'type',
          message: 'Type is required'
        });
      }
      if (!this.formData.start_date) {
        errors.push({
          field: 'start_date',
          message: 'Start date is required'
        });
      }
      if (!this.formData.end_date) {
        errors.push({
          field: 'end_date',
          message: 'End date is required'
        });
      }

      // Type-specific validation
      if (this.formData.type === 'buy_x_get_y') {
        if (!this.formData.conditions.buy_quantity || this.formData.conditions.buy_quantity <= 0) {
          errors.push({
            field: 'buy_quantity',
            message: 'Buy quantity must be greater than 0'
          });
        }
        if (!this.formData.conditions.get_quantity || this.formData.conditions.get_quantity <= 0) {
          errors.push({
            field: 'get_quantity',
            message: 'Get quantity must be greater than 0'
          });
        }
      }
      if (this.formData.type === 'percentage') {
        if (!this.formData.conditions.discount_percentage || this.formData.conditions.discount_percentage <= 0 || this.formData.conditions.discount_percentage > 100) {
          errors.push({
            field: 'discount_percentage',
            message: 'Discount percentage must be between 1-100'
          });
        }
      }
      if (this.formData.type === 'fixed_amount') {
        if (!this.formData.conditions.discount_amount || this.formData.conditions.discount_amount <= 0) {
          errors.push({
            field: 'discount_amount',
            message: 'Discount amount must be greater than 0'
          });
        }
      }
      this.validationErrors = errors;
      return {
        valid: errors.length === 0,
        errors
      };
    },
    handleClose() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/promotions/PromotionDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var promotions_PromotionDialogvue_type_script_lang_js = (PromotionDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/promotions/PromotionDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(837)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  promotions_PromotionDialogvue_type_script_lang_js,
  PromotionDialogvue_type_template_id_26ea7e55_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "26ea7e55",
  "788bbb82"
  
)

/* harmony default export */ var PromotionDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1307);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("37bc1ea0", content, true)

/***/ }),

/***/ 1307:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0))}.theme--light.v-skeleton-loader .v-skeleton-loader__avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__button,.theme--light.v-skeleton-loader .v-skeleton-loader__chip,.theme--light.v-skeleton-loader .v-skeleton-loader__divider,.theme--light.v-skeleton-loader .v-skeleton-loader__heading,.theme--light.v-skeleton-loader .v-skeleton-loader__image,.theme--light.v-skeleton-loader .v-skeleton-loader__text{background:rgba(0,0,0,.12)}.theme--light.v-skeleton-loader .v-skeleton-loader__actions,.theme--light.v-skeleton-loader .v-skeleton-loader__article,.theme--light.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__card-text,.theme--light.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--light.v-skeleton-loader .v-skeleton-loader__table-thead{background:#fff}.theme--dark.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))}.theme--dark.v-skeleton-loader .v-skeleton-loader__avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__button,.theme--dark.v-skeleton-loader .v-skeleton-loader__chip,.theme--dark.v-skeleton-loader .v-skeleton-loader__divider,.theme--dark.v-skeleton-loader .v-skeleton-loader__heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__image,.theme--dark.v-skeleton-loader .v-skeleton-loader__text{background:hsla(0,0%,100%,.12)}.theme--dark.v-skeleton-loader .v-skeleton-loader__actions,.theme--dark.v-skeleton-loader .v-skeleton-loader__article,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-thead{background:#1e1e1e}.v-skeleton-loader{border-radius:4px;position:relative;vertical-align:top}.v-skeleton-loader__actions{padding:16px 16px 8px;text-align:right}.v-skeleton-loader__actions .v-skeleton-loader__button{display:inline-block}.v-application--is-ltr .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-right:12px}.v-application--is-rtl .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-left:12px}.v-skeleton-loader .v-skeleton-loader__list-item,.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader .v-skeleton-loader__list-item-text,.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-two-line{border-radius:4px}.v-skeleton-loader .v-skeleton-loader__actions:after,.v-skeleton-loader .v-skeleton-loader__article:after,.v-skeleton-loader .v-skeleton-loader__card-avatar:after,.v-skeleton-loader .v-skeleton-loader__card-heading:after,.v-skeleton-loader .v-skeleton-loader__card-text:after,.v-skeleton-loader .v-skeleton-loader__card:after,.v-skeleton-loader .v-skeleton-loader__date-picker-days:after,.v-skeleton-loader .v-skeleton-loader__date-picker-options:after,.v-skeleton-loader .v-skeleton-loader__date-picker:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar:after,.v-skeleton-loader .v-skeleton-loader__list-item-text:after,.v-skeleton-loader .v-skeleton-loader__list-item-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item:after,.v-skeleton-loader .v-skeleton-loader__paragraph:after,.v-skeleton-loader .v-skeleton-loader__sentences:after,.v-skeleton-loader .v-skeleton-loader__table-cell:after,.v-skeleton-loader .v-skeleton-loader__table-heading:after,.v-skeleton-loader .v-skeleton-loader__table-row-divider:after,.v-skeleton-loader .v-skeleton-loader__table-row:after,.v-skeleton-loader .v-skeleton-loader__table-tbody:after,.v-skeleton-loader .v-skeleton-loader__table-tfoot:after,.v-skeleton-loader .v-skeleton-loader__table-thead:after,.v-skeleton-loader .v-skeleton-loader__table:after{display:none}.v-application--is-ltr .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 0 16px 16px}.v-application--is-rtl .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 16px 0}.v-skeleton-loader__article .v-skeleton-loader__paragraph{padding:16px}.v-skeleton-loader__bone{border-radius:inherit;overflow:hidden;position:relative}.v-skeleton-loader__bone:after{animation:loading 1.5s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.v-skeleton-loader__avatar{border-radius:50%;height:48px;width:48px}.v-skeleton-loader__button{border-radius:4px;height:36px;width:64px}.v-skeleton-loader__card .v-skeleton-loader__image{border-radius:0}.v-skeleton-loader__card-heading .v-skeleton-loader__heading{margin:16px}.v-skeleton-loader__card-text{padding:16px}.v-skeleton-loader__chip{border-radius:16px;height:32px;width:96px}.v-skeleton-loader__date-picker{border-radius:inherit}.v-skeleton-loader__date-picker .v-skeleton-loader__list-item:first-child .v-skeleton-loader__text{max-width:88px;width:20%}.v-skeleton-loader__date-picker .v-skeleton-loader__heading{max-width:256px;width:40%}.v-skeleton-loader__date-picker-days{display:flex;flex-wrap:wrap;margin:0 auto;padding:0 12px}.v-skeleton-loader__date-picker-days .v-skeleton-loader__avatar{border-radius:4px;flex:1 1 auto;height:40px;margin:4px;width:40px}.v-skeleton-loader__date-picker-options{align-items:center;display:flex;padding:16px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:auto}.v-application--is-ltr .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-right:8px}.v-application--is-rtl .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:8px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__text.v-skeleton-loader__bone:first-child{margin-bottom:0;max-width:50%;width:456px}.v-skeleton-loader__divider{border-radius:1px;height:2px}.v-skeleton-loader__heading{border-radius:12px;height:24px;width:45%}.v-skeleton-loader__image{border-radius:0;height:200px}.v-skeleton-loader__image~.v-skeleton-loader__card-heading{border-radius:0}.v-skeleton-loader__image:first-child,.v-skeleton-loader__image:last-child{border-radius:inherit}.v-skeleton-loader__list-item{height:48px}.v-skeleton-loader__list-item-three-line{flex-wrap:wrap}.v-skeleton-loader__list-item-three-line>*{flex:1 0 100%;width:100%}.v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__list-item-avatar{height:48px}.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-two-line{height:72px}.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-three-line{height:88px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar{align-self:flex-start}.v-skeleton-loader__list-item,.v-skeleton-loader__list-item-avatar,.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-three-line,.v-skeleton-loader__list-item-two-line{align-content:center;align-items:center;display:flex;flex-wrap:wrap;padding:0 16px}.v-application--is-ltr .v-skeleton-loader__list-item .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar{margin-right:16px}.v-application--is-rtl .v-skeleton-loader__list-item .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar{margin-left:16px}.v-skeleton-loader__list-item .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:only-child{margin-bottom:0}.v-skeleton-loader__paragraph,.v-skeleton-loader__sentences{flex:1 0 auto}.v-skeleton-loader__paragraph:not(:last-child){margin-bottom:6px}.v-skeleton-loader__paragraph .v-skeleton-loader__text:first-child{max-width:100%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(2){max-width:50%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(3),.v-skeleton-loader__sentences .v-skeleton-loader__text:nth-child(2){max-width:70%}.v-skeleton-loader__sentences:not(:last-child){margin-bottom:6px}.v-skeleton-loader__table-heading{align-items:center;display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-heading .v-skeleton-loader__heading{max-width:15%}.v-skeleton-loader__table-heading .v-skeleton-loader__text{max-width:40%}.v-skeleton-loader__table-thead{display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-thead .v-skeleton-loader__heading{max-width:5%}.v-skeleton-loader__table-tbody{padding:16px 16px 0}.v-skeleton-loader__table-tfoot{align-items:center;display:flex;justify-content:flex-end;padding:16px}.v-application--is-ltr .v-skeleton-loader__table-tfoot>*{margin-left:8px}.v-application--is-rtl .v-skeleton-loader__table-tfoot>*{margin-right:8px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:first-child{max-width:128px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:nth-child(2){max-width:64px}.v-skeleton-loader__table-row{display:flex;justify-content:space-between}.v-skeleton-loader__table-cell{align-items:center;display:flex;height:48px;width:88px}.v-skeleton-loader__table-cell .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__text{border-radius:6px;flex:1 0 auto;height:12px;margin-bottom:6px}.v-skeleton-loader--boilerplate .v-skeleton-loader__bone:after{display:none}.v-skeleton-loader--is-loading{overflow:hidden}.v-skeleton-loader--tile,.v-skeleton-loader--tile .v-skeleton-loader__bone{border-radius:0}@keyframes loading{to{transform:translateX(100%)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62b7b36a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(994);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62b7b36a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62b7b36a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62b7b36a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_62b7b36a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".promotions-page[data-v-62b7b36a]{margin:0 auto;max-width:1400px;padding:24px}.page-header[data-v-62b7b36a]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:32px}.page-title[data-v-62b7b36a]{align-items:center;color:#1a202c;display:flex;font-size:28px;font-weight:700;margin:0 0 8px}.page-subtitle[data-v-62b7b36a]{color:#718096;font-size:14px;margin:0}.header-actions[data-v-62b7b36a]{display:flex;gap:12px}.stat-card[data-v-62b7b36a]{height:100%}.stat-icon-wrapper[data-v-62b7b36a]{align-items:center;border-radius:12px;display:flex;height:56px;justify-content:center;width:56px}.stat-icon-wrapper.primary[data-v-62b7b36a]{background:#1976d2}.stat-icon-wrapper.success[data-v-62b7b36a]{background:#4caf50}.stat-icon-wrapper.warning[data-v-62b7b36a]{background:#ff9800}.stat-icon-wrapper.info[data-v-62b7b36a]{background:#2196f3}.stat-icon-wrapper.error[data-v-62b7b36a]{background:#f44336}.stat-icon-wrapper.purple[data-v-62b7b36a]{background:#9c27b0}.stat-value[data-v-62b7b36a]{font-size:20px;font-weight:700;line-height:1}.stat-label[data-v-62b7b36a]{color:#718096;font-size:11px;font-weight:500;letter-spacing:.5px;text-transform:uppercase}.promotion-table[data-v-62b7b36a]{background:#fff}.action-buttons[data-v-62b7b36a]{display:flex;gap:2px}.usage-progress[data-v-62b7b36a]{min-width:100px}.debug-info[data-v-62b7b36a]{color:#666;font-size:12px}@media (max-width:968px){.stat-card .stat-icon-wrapper[data-v-62b7b36a]{height:48px;width:48px}.stat-card .stat-value[data-v-62b7b36a]{font-size:18px}}@media (max-width:768px){.promotions-page[data-v-62b7b36a]{padding:16px}.page-header[data-v-62b7b36a]{flex-direction:column;gap:16px}.header-actions[data-v-62b7b36a]{flex-direction:column;width:100%}.stat-card .d-flex[data-v-62b7b36a]{flex-direction:column;text-align:center}.stat-card .ml-3[data-v-62b7b36a]{margin-left:0;margin-top:8px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSkeletonLoader/VSkeletonLoader.sass
var VSkeletonLoader = __webpack_require__(1306);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/measurable/index.js
var measurable = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
// Styles
 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ var VSkeletonLoader_VSkeletonLoader = (Object(mixins["a" /* default */])(elevatable["a" /* default */], measurable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'VSkeletonLoader',
  props: {
    boilerplate: Boolean,
    loading: Boolean,
    tile: Boolean,
    transition: String,
    type: String,
    types: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    attrs() {
      if (!this.isLoading) return this.$attrs;
      return !this.boilerplate ? {
        'aria-busy': true,
        'aria-live': 'polite',
        role: 'alert',
        ...this.$attrs
      } : {};
    },
    classes() {
      return {
        'v-skeleton-loader--boilerplate': this.boilerplate,
        'v-skeleton-loader--is-loading': this.isLoading,
        'v-skeleton-loader--tile': this.tile,
        ...this.themeClasses,
        ...this.elevationClasses
      };
    },
    isLoading() {
      return !('default' in this.$scopedSlots) || this.loading;
    },
    rootTypes() {
      return {
        actions: 'button@2',
        article: 'heading, paragraph',
        avatar: 'avatar',
        button: 'button',
        card: 'image, card-heading',
        'card-avatar': 'image, list-item-avatar',
        'card-heading': 'heading',
        chip: 'chip',
        'date-picker': 'list-item, card-heading, divider, date-picker-options, date-picker-days, actions',
        'date-picker-options': 'text, avatar@2',
        'date-picker-days': 'avatar@28',
        heading: 'heading',
        image: 'image',
        'list-item': 'text',
        'list-item-avatar': 'avatar, text',
        'list-item-two-line': 'sentences',
        'list-item-avatar-two-line': 'avatar, sentences',
        'list-item-three-line': 'paragraph',
        'list-item-avatar-three-line': 'avatar, paragraph',
        paragraph: 'text@3',
        sentences: 'text@2',
        table: 'table-heading, table-thead, table-tbody, table-tfoot',
        'table-heading': 'heading, text',
        'table-thead': 'heading@6',
        'table-tbody': 'table-row-divider@6',
        'table-row-divider': 'table-row, divider',
        'table-row': 'table-cell@6',
        'table-cell': 'text',
        'table-tfoot': 'text@2, avatar@2',
        text: 'text',
        ...this.types
      };
    }
  },
  methods: {
    genBone(text, children) {
      return this.$createElement('div', {
        staticClass: `v-skeleton-loader__${text} v-skeleton-loader__bone`
      }, children);
    },
    genBones(bone) {
      // e.g. 'text@3'
      const [type, length] = bone.split('@');
      const generator = () => this.genStructure(type); // Generate a length array based upon
      // value after @ in the bone string

      return Array.from({
        length
      }).map(generator);
    },
    // Fix type when this is merged
    // https://github.com/microsoft/TypeScript/pull/33050
    genStructure(type) {
      let children = [];
      type = type || this.type || '';
      const bone = this.rootTypes[type] || ''; // End of recursion, do nothing

      /* eslint-disable-next-line no-empty, brace-style */

      if (type === bone) {} // Array of values - e.g. 'heading, paragraph, text@2'
      else if (type.indexOf(',') > -1) return this.mapBones(type); // Array of values - e.g. 'paragraph@4'
      else if (type.indexOf('@') > -1) return this.genBones(type); // Array of values - e.g. 'card@2'
      else if (bone.indexOf(',') > -1) children = this.mapBones(bone); // Array of values - e.g. 'list-item@2'
      else if (bone.indexOf('@') > -1) children = this.genBones(bone); // Single value - e.g. 'card-heading'
      else if (bone) children.push(this.genStructure(bone));
      return [this.genBone(type, children)];
    },
    genSkeleton() {
      const children = [];
      if (!this.isLoading) children.push(Object(helpers["s" /* getSlot */])(this));else children.push(this.genStructure());
      /* istanbul ignore else */

      if (!this.transition) return children;
      /* istanbul ignore next */

      return this.$createElement('transition', {
        props: {
          name: this.transition
        },
        // Only show transition when
        // content has been loaded
        on: {
          afterEnter: this.resetStyles,
          beforeEnter: this.onBeforeEnter,
          beforeLeave: this.onBeforeLeave,
          leaveCancelled: this.resetStyles
        }
      }, children);
    },
    mapBones(bones) {
      // Remove spaces and return array of structures
      return bones.replace(/\s/g, '').split(',').map(this.genStructure);
    },
    onBeforeEnter(el) {
      this.resetStyles(el);
      if (!this.isLoading) return;
      el._initialStyle = {
        display: el.style.display,
        transition: el.style.transition
      };
      el.style.setProperty('transition', 'none', 'important');
    },
    onBeforeLeave(el) {
      el.style.setProperty('display', 'none', 'important');
    },
    resetStyles(el) {
      if (!el._initialStyle) return;
      el.style.display = el._initialStyle.display || '';
      el.style.transition = el._initialStyle.transition;
      delete el._initialStyle;
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-skeleton-loader',
      attrs: this.attrs,
      on: this.$listeners,
      class: this.classes,
      style: this.isLoading ? this.measurableStyles : undefined
    }, [this.genSkeleton()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/cafe/promotion/index.vue?vue&type=template&id=62b7b36a&scoped=true


















var promotionvue_type_template_id_62b7b36a_scoped_true_render = function render() {
  var _vm$promotionToDelete, _vm$promotionToDelete2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "promotions-page"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-62b7b36a>", "</div>", [_vm._ssrNode("<div class=\"header-content\" data-v-62b7b36a>", "</div>", [_vm._ssrNode("<h1 class=\"page-title\" data-v-62b7b36a>", "</h1>", [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-tag-multiple")]), _vm._ssrNode("\n        Promotion Management\n      ")], 2), _vm._ssrNode(" <p class=\"page-subtitle\" data-v-62b7b36a>Create and manage promotional offers</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-actions\" data-v-62b7b36a>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "outlined": "",
      "loading": _vm.loading
    },
    on: {
      "click": _vm.refreshPromotions
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n        Refresh\n      ")], 1), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.openCreateDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n        New Promotion\n      ")], 1)], 2)], 2), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-6"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stat-card"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "d-flex align-center"
  }, [_c('div', {
    staticClass: "stat-icon-wrapper primary"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "28",
      "color": "white"
    }
  }, [_vm._v("mdi-tag-multiple")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ml-3"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.stats.totalPromotions))]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Total")])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stat-card"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "d-flex align-center"
  }, [_c('div', {
    staticClass: "stat-icon-wrapper success"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "28",
      "color": "white"
    }
  }, [_vm._v("mdi-check-circle")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ml-3"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.stats.activePromotions))]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Active")])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stat-card"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "d-flex align-center"
  }, [_c('div', {
    staticClass: "stat-icon-wrapper warning"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "28",
      "color": "white"
    }
  }, [_vm._v("mdi-clock")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ml-3"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.stats.expiringSoon))]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Expiring")])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stat-card"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "d-flex align-center"
  }, [_c('div', {
    staticClass: "stat-icon-wrapper error"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "28",
      "color": "white"
    }
  }, [_vm._v("mdi-calendar-remove")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ml-3"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.stats.expired))]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Expired")])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stat-card"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "d-flex align-center"
  }, [_c('div', {
    staticClass: "stat-icon-wrapper info"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "28",
      "color": "white"
    }
  }, [_vm._v("mdi-chart-line")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ml-3"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.stats.totalUsage))]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Usage")])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "stat-card"
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "d-flex align-center"
  }, [_c('div', {
    staticClass: "stat-icon-wrapper purple"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "28",
      "color": "white"
    }
  }, [_vm._v("mdi-currency-usd")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ml-3"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v("$" + _vm._s(_vm.formatMoney(_vm.stats.totalDiscount)))]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Saved")])])])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "mb-6"
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Search promotions...",
      "prepend-inner-icon": "mdi-magnify",
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
      "cols": "12",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "label": "Type",
      "items": _vm.typeOptions,
      "item-text": "title",
      "item-value": "value",
      "outlined": "",
      "dense": "",
      "clearable": "",
      "hide-details": ""
    },
    model: {
      value: _vm.typeFilter,
      callback: function ($$v) {
        _vm.typeFilter = $$v;
      },
      expression: "typeFilter"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "label": "Status",
      "items": _vm.statusOptions,
      "item-text": "title",
      "item-value": "value",
      "outlined": "",
      "dense": "",
      "clearable": "",
      "hide-details": ""
    },
    model: {
      value: _vm.statusFilter,
      callback: function ($$v) {
        _vm.statusFilter = $$v;
      },
      expression: "statusFilter"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": _vm.clearFilters
    }
  }, [_vm._v("\n            Clear Filters\n          ")])], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(VDataTable["a" /* default */], {
    staticClass: "promotion-table",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.filteredPromotions,
      "loading": _vm.loading,
      "items-per-page": _vm.itemsPerPage,
      "page": _vm.currentPage,
      "footer-props": {
        'items-per-page-options': [5, 10, 25, 50]
      }
    },
    on: {
      "update:page": function ($event) {
        _vm.currentPage = $event;
      },
      "update:items-per-page": function ($event) {
        _vm.itemsPerPage = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "item.name",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "color": _vm.getPromotionTypeColor(item.type)
          }
        }, [_vm._v("\n            " + _vm._s(_vm.getPromotionTypeIcon(item.type)) + "\n          ")]), _vm._v(" "), _c('div', [_c('div', {
          staticClass: "font-weight-medium"
        }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
          staticClass: "caption grey--text"
        }, [_vm._v(_vm._s(item.code))]), _vm._v(" "), item.description ? _c('div', {
          staticClass: "caption grey--text text--darken-1 mt-1"
        }, [_vm._v("\n              " + _vm._s(_vm.truncateDescription(item.description)) + "\n            ")]) : _vm._e()])], 1)];
      }
    }, {
      key: "item.type",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getPromotionTypeColor(item.type),
            "small": "",
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.formatPromotionType(item.type)) + "\n        ")])];
      }
    }, {
      key: "item.discount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "body-2 font-weight-medium"
        }, [_vm._v("\n          " + _vm._s(_vm.getDiscountDisplay(item)) + "\n        ")])];
      }
    }, {
      key: "item.is_active",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getStatusColor(item),
            "small": "",
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.getStatusText(item)) + "\n        ")])];
      }
    }, {
      key: "item.dateRange",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "caption"
        }, [_c('div', [_vm._v("Start: " + _vm._s(_vm.formatDate(item.start_date)))]), _vm._v(" "), _c('div', [_vm._v("End: " + _vm._s(_vm.formatDate(item.end_date)))]), _vm._v(" "), _vm.getDaysUntilExpiry(item) !== null ? _c('div', {
          staticClass: "mt-1"
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getDaysUntilExpiry(item) <= 7 ? 'warning' : 'info',
            "x-small": "",
            "text-color": "white"
          }
        }, [_vm._v("\n              " + _vm._s(_vm.getDaysUntilExpiry(item) > 0 ? `${_vm.getDaysUntilExpiry(item)} days left` : 'Expired') + "\n            ")])], 1) : _vm._e()])];
      }
    }, {
      key: "item.usage",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "usage-progress"
        }, [_c('div', {
          staticClass: "caption mb-1"
        }, [_vm._v("\n            " + _vm._s(item.current_uses || 0) + "/" + _vm._s(item.max_uses || '∞') + "\n          ")]), _vm._v(" "), item.max_uses ? _c(VProgressLinear["a" /* default */], {
          attrs: {
            "value": (item.current_uses || 0) / item.max_uses * 100,
            "height": "4",
            "color": _vm.getUsageColor(item.current_uses || 0, item.max_uses)
          }
        }) : _vm._e(), _vm._v(" "), !item.max_uses ? _c('div', {
          staticClass: "caption success--text"
        }, [_vm._v("\n            Unlimited\n          ")]) : _vm._e()], 1)];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "action-buttons"
        }, [_c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "small": "",
            "title": "View Details"
          },
          on: {
            "click": function ($event) {
              return _vm.viewPromotion(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-eye")])], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "small": "",
            "title": "Edit"
          },
          on: {
            "click": function ($event) {
              return _vm.editPromotion(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "small": "",
            "title": "Duplicate"
          },
          on: {
            "click": function ($event) {
              return _vm.duplicatePromotion(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-content-copy")])], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "small": "",
            "title": item.is_active ? 'Deactivate' : 'Activate'
          },
          on: {
            "click": function ($event) {
              return _vm.togglePromotionStatus(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v(_vm._s(item.is_active ? 'mdi-pause' : 'mdi-play'))])], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "small": "",
            "color": "error",
            "title": "Delete"
          },
          on: {
            "click": function ($event) {
              return _vm.confirmDelete(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-delete")])], 1)], 1)];
      }
    }, {
      key: "loading",
      fn: function () {
        return [_c(VSkeletonLoader_VSkeletonLoader, {
          attrs: {
            "type": "table-row@6"
          }
        })];
      },
      proxy: true
    }, {
      key: "no-data",
      fn: function () {
        return [_c('div', {
          staticClass: "text-center pa-8"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "size": "64",
            "color": "grey lighten-1"
          }
        }, [_vm._v("mdi-tag-off")]), _vm._v(" "), _c('div', {
          staticClass: "headline mt-4 mb-2"
        }, [_vm._v("No promotions found")]), _vm._v(" "), _c('div', {
          staticClass: "body-2 grey--text mb-4"
        }, [_vm._v("\n            " + _vm._s(_vm.searchQuery || _vm.typeFilter || _vm.statusFilter ? 'Try adjusting your filters' : 'Create your first promotion to get started') + "\n          ")]), _vm._v(" "), !_vm.searchQuery && !_vm.typeFilter && !_vm.statusFilter ? _c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary"
          },
          on: {
            "click": _vm.openCreateDialog
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": ""
          }
        }, [_vm._v("mdi-plus")]), _vm._v("\n            Create Promotion\n          ")], 1) : _c(VBtn["a" /* default */], {
          attrs: {
            "color": "secondary",
            "outlined": ""
          },
          on: {
            "click": _vm.clearFilters
          }
        }, [_vm._v("\n            Clear Filters\n          ")])], 1)];
      },
      proxy: true
    }])
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px",
      "persistent": "",
      "scrollable": "",
      "fullscreen": ""
    },
    model: {
      value: _vm.showDialog,
      callback: function ($$v) {
        _vm.showDialog = $$v;
      },
      expression: "showDialog"
    }
  }, [_c('PromotionDialog', {
    attrs: {
      "show": _vm.showDialog,
      "promotion": _vm.selectedPromotion,
      "mode": _vm.dialogMode
    },
    on: {
      "close": _vm.closeDialog,
      "save": _vm.handleSavePromotion
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400px"
    },
    model: {
      value: _vm.showDeleteDialog,
      callback: function ($$v) {
        _vm.showDeleteDialog = $$v;
      },
      expression: "showDeleteDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "headline"
  }, [_vm._v("Delete Promotion: " + _vm._s(((_vm$promotionToDelete = _vm.promotionToDelete) === null || _vm$promotionToDelete === void 0 ? void 0 : _vm$promotionToDelete.name) || ''))]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c('p', [_vm._v("Are you sure you want to delete this promotion? This action cannot be undone.")]), _vm._v(" "), ((_vm$promotionToDelete2 = _vm.promotionToDelete) === null || _vm$promotionToDelete2 === void 0 ? void 0 : _vm$promotionToDelete2.current_uses) > 0 ? _c(VAlert["a" /* default */], {
    staticClass: "mt-3",
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("\n          Warning: This promotion has been used " + _vm._s(_vm.promotionToDelete.current_uses) + " times.\n        ")]) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.showDeleteDialog = false;
      }
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error"
    },
    on: {
      "click": _vm.deletePromotion
    }
  }, [_vm._v("\n          Delete\n        ")])], 1)], 1)], 1), _vm._ssrNode(" <div class=\"debug-info mt-4\" style=\"background: #f5f5f5; padding: 10px; border-radius: 4px;\" data-v-62b7b36a><strong data-v-62b7b36a>Debug:</strong>" + _vm._ssrEscape("\n    showDialog: " + _vm._s(_vm.showDialog) + ", \n    dialogMode: " + _vm._s(_vm.dialogMode) + ", \n    selectedPromotion: " + _vm._s(_vm.selectedPromotion ? 'Has Data' : 'null') + ",\n    promotions count: " + _vm._s(_vm.promotions.length) + ",\n    filtered count: " + _vm._s(_vm.filteredPromotions.length) + "\n  ") + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/cafe/promotion/index.vue?vue&type=template&id=62b7b36a&scoped=true

// EXTERNAL MODULE: ./components/promotions/PromotionDialog.vue + 4 modules
var PromotionDialog = __webpack_require__(1098);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/cafe/promotion/index.vue?vue&type=script&lang=js

/* harmony default export */ var promotionvue_type_script_lang_js = ({
  name: 'PromotionsPage',
  components: {
    PromotionDialog: PromotionDialog["default"]
  },
  data() {
    return {
      promotions: [],
      loading: false,
      searchQuery: '',
      typeFilter: '',
      statusFilter: '',
      showDialog: false,
      showDeleteDialog: false,
      dialogMode: 'create',
      selectedPromotion: null,
      promotionToDelete: null,
      currentPage: 1,
      itemsPerPage: 10,
      headers: [{
        text: 'Promotion',
        align: 'start',
        value: 'name',
        sortable: true,
        width: '250px'
      }, {
        text: 'Type',
        value: 'type',
        sortable: true
      }, {
        text: 'Discount',
        value: 'discount',
        sortable: false
      }, {
        text: 'Status',
        value: 'is_active',
        sortable: true
      }, {
        text: 'Date Range',
        value: 'dateRange',
        sortable: false
      }, {
        text: 'Usage',
        value: 'usage',
        sortable: false
      }, {
        text: 'Priority',
        value: 'priority',
        sortable: true
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        width: '180px'
      }],
      typeOptions: [{
        title: 'All Types',
        value: ''
      }, {
        title: 'Buy X Get Y',
        value: 'buy_x_get_y'
      }, {
        title: 'Percentage Discount',
        value: 'percentage'
      }, {
        title: 'Fixed Amount',
        value: 'fixed_amount'
      }, {
        title: 'Combo Deal',
        value: 'combo_deal'
      }],
      statusOptions: [{
        title: 'All Status',
        value: ''
      }, {
        title: 'Active',
        value: 'active'
      }, {
        title: 'Inactive',
        value: 'inactive'
      }, {
        title: 'Expired',
        value: 'expired'
      }, {
        title: 'Expiring Soon',
        value: 'expiring'
      }]
    };
  },
  computed: {
    filteredPromotions() {
      let filtered = this.promotions;
      const now = new Date();
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(promotion => {
          var _promotion$name, _promotion$code, _promotion$descriptio;
          return ((_promotion$name = promotion.name) === null || _promotion$name === void 0 ? void 0 : _promotion$name.toLowerCase().includes(query)) || ((_promotion$code = promotion.code) === null || _promotion$code === void 0 ? void 0 : _promotion$code.toLowerCase().includes(query)) || ((_promotion$descriptio = promotion.description) === null || _promotion$descriptio === void 0 ? void 0 : _promotion$descriptio.toLowerCase().includes(query));
        });
      }
      if (this.typeFilter) {
        filtered = filtered.filter(promotion => promotion.type === this.typeFilter);
      }
      if (this.statusFilter) {
        if (this.statusFilter === 'expired') {
          filtered = filtered.filter(promotion => new Date(promotion.end_date) < now);
        } else if (this.statusFilter === 'expiring') {
          const sevenDaysFromNow = new Date();
          sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
          filtered = filtered.filter(promotion => {
            const endDate = new Date(promotion.end_date);
            return promotion.is_active && endDate <= sevenDaysFromNow && endDate > now;
          });
        } else if (this.statusFilter === 'active') {
          filtered = filtered.filter(promotion => promotion.is_active === true && new Date(promotion.end_date) >= now);
        } else if (this.statusFilter === 'inactive') {
          filtered = filtered.filter(promotion => promotion.is_active === false);
        }
      }
      return filtered;
    },
    stats() {
      const now = new Date();
      const active = this.promotions.filter(p => p.is_active && new Date(p.end_date) >= now).length;
      const expiringSoon = this.promotions.filter(p => {
        if (!p.is_active) return false;
        const endDate = new Date(p.end_date);
        const sevenDaysFromNow = new Date();
        sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
        return endDate <= sevenDaysFromNow && endDate > now;
      }).length;
      const expired = this.promotions.filter(p => {
        const endDate = new Date(p.end_date);
        return endDate < now;
      }).length;
      const totalUsage = this.promotions.reduce((sum, p) => sum + (p.current_uses || 0), 0);
      const totalDiscount = this.promotions.reduce((sum, p) => {
        if (p.conditions && p.conditions.discount_amount) {
          return sum + p.conditions.discount_amount * (p.current_uses || 0);
        }
        return sum;
      }, 0);
      return {
        totalPromotions: this.promotions.length,
        activePromotions: active,
        expiringSoon: expiringSoon,
        expired: expired,
        totalUsage: totalUsage,
        totalDiscount: totalDiscount
      };
    }
  },
  async mounted() {
    await this.fetchPromotions();
  },
  methods: {
    async fetchPromotions() {
      this.loading = true;
      try {
        const response = await this.$axios.get('/api/promotions');
        this.promotions = response.data.data || response.data || [];
        console.log('Fetched promotions:', this.promotions);
      } catch (error) {
        console.error('Error fetching promotions:', error);
        this.promotions = [];
      } finally {
        this.loading = false;
      }
    },
    async refreshPromotions() {
      await this.fetchPromotions();
    },
    openCreateDialog() {
      console.log('Opening create dialog...');
      this.dialogMode = 'create';
      this.selectedPromotion = null;
      this.showDialog = true;
      console.log('Dialog state:', this.showDialog);
    },
    editPromotion(promotion) {
      this.dialogMode = 'edit';
      this.selectedPromotion = {
        ...promotion
      };
      this.showDialog = true;
    },
    viewPromotion(promotion) {
      this.$router.push(`/admin/cafe/promotion/${promotion.id}`);
    },
    duplicatePromotion(promotion) {
      this.dialogMode = 'create';
      this.selectedPromotion = {
        ...promotion,
        id: null,
        code: `${promotion.code}-COPY`,
        name: `${promotion.name} (Copy)`,
        current_uses: 0
      };
      this.showDialog = true;
    },
    closeDialog() {
      console.log('Closing dialog...');
      this.showDialog = false;
      this.selectedPromotion = null;
    },
    async handleSavePromotion(promotionData) {
      console.info(`CREATE PROMOTION ${JSON.stringify(promotionData)}`);
      try {
        if (this.dialogMode === 'create') {
          const response = await this.$axios.post('/api/promotions', promotionData);
          console.log('Create response:', response);
        } else {
          const response = await this.$axios.put(`/api/promotions/${promotionData.id}`, promotionData);
          console.log('Update response:', response);
        }
        this.closeDialog();
        await this.fetchPromotions();
      } catch (error) {
        console.error('Error saving promotion:', error);
      }
    },
    confirmDelete(promotion) {
      this.promotionToDelete = promotion;
      this.showDeleteDialog = true;
    },
    async deletePromotion() {
      if (!this.promotionToDelete) return;
      try {
        await this.$axios.delete(`/api/promotions/${this.promotionToDelete.id}`);
        this.showDeleteDialog = false;
        this.promotionToDelete = null;
        await this.fetchPromotions();
      } catch (error) {
        console.error('Error deleting promotion:', error);
      }
    },
    async togglePromotionStatus(promotion) {
      try {
        await this.$axios.put(`/api/promotions/${promotion.id}`, {
          is_active: !promotion.is_active
        });
        await this.fetchPromotions();
      } catch (error) {
        console.error('Error toggling promotion status:', error);
      }
    },
    clearFilters() {
      this.searchQuery = '';
      this.typeFilter = '';
      this.statusFilter = '';
    },
    truncateDescription(description) {
      if (!description) return '';
      return description.length > 50 ? description.substring(0, 50) + '...' : description;
    },
    getDiscountDisplay(promotion) {
      if (!promotion.conditions) return 'N/A';
      const conditions = promotion.conditions;
      switch (promotion.type) {
        case 'buy_x_get_y':
          return `Buy ${conditions.buy_quantity || 0}, Get ${conditions.get_quantity || 0}`;
        case 'percentage':
          return `${conditions.discount_percentage || 0}%${conditions.max_discount_amount ? ` (max $${conditions.max_discount_amount})` : ''}`;
        case 'fixed_amount':
          return `${conditions.discount_amount || 0} off`;
        case 'combo_deal':
          return 'Combo Deal';
        default:
          return 'N/A';
      }
    },
    getStatusColor(promotion) {
      const now = new Date();
      const endDate = new Date(promotion.end_date);
      if (endDate < now) return 'error';
      if (!promotion.is_active) return 'grey';
      const sevenDaysFromNow = new Date();
      sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
      if (endDate <= sevenDaysFromNow) return 'warning';
      return 'success';
    },
    getStatusText(promotion) {
      const now = new Date();
      const endDate = new Date(promotion.end_date);
      if (endDate < now) return 'Expired';
      if (!promotion.is_active) return 'Inactive';
      const sevenDaysFromNow = new Date();
      sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
      if (endDate <= sevenDaysFromNow) return 'Expiring';
      return 'Active';
    },
    getDaysUntilExpiry(promotion) {
      const now = new Date();
      const endDate = new Date(promotion.end_date);
      const diffTime = endDate - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    },
    getPromotionTypeIcon(type) {
      const icons = {
        'buy_x_get_y': 'mdi-gift',
        'percentage': 'mdi-percent',
        'fixed_amount': 'mdi-currency-usd',
        'combo_deal': 'mdi-package-variant'
      };
      return icons[type] || 'mdi-tag';
    },
    getPromotionTypeColor(type) {
      const colors = {
        'buy_x_get_y': 'success',
        'percentage': 'primary',
        'fixed_amount': 'warning',
        'combo_deal': 'info'
      };
      return colors[type] || 'grey';
    },
    formatPromotionType(type) {
      const labels = {
        'buy_x_get_y': 'Buy X Get Y',
        'percentage': 'Percentage',
        'fixed_amount': 'Fixed Amount',
        'combo_deal': 'Combo Deal'
      };
      return labels[type] || type;
    },
    getUsageColor(currentUses, maxUses) {
      if (!maxUses) return 'primary';
      const percentage = currentUses / maxUses * 100;
      if (percentage >= 90) return 'error';
      if (percentage >= 70) return 'warning';
      return 'success';
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString();
    },
    formatMoney(amount) {
      if (!amount || amount === 0) return '0';
      return amount.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/cafe/promotion/index.vue?vue&type=script&lang=js
 /* harmony default export */ var cafe_promotionvue_type_script_lang_js = (promotionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/cafe/promotion/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1308)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cafe_promotionvue_type_script_lang_js,
  promotionvue_type_template_id_62b7b36a_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "62b7b36a",
  "5e0f8416"
  
)

/* harmony default export */ var promotion = __webpack_exports__["default"] = (component.exports);

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

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(476);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 476:
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

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(475);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(142);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110);
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

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(838);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("453f79e8", content, true, context)
};

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_26ea7e55_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(735);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_26ea7e55_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_26ea7e55_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_26ea7e55_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_26ea7e55_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".section-header[data-v-26ea7e55]{align-items:center;color:#2d3748;display:flex;font-size:16px;font-weight:600;margin:24px 0 16px}.section-header[data-v-26ea7e55]:first-child{margin-top:0}.promotion-preview[data-v-26ea7e55]{margin-top:16px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1309);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f5e351d8", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map