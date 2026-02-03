exports.ids = [132];
exports.modules = {

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(123);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(447);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/recipe/index.vue?vue&type=template&id=7c805bba&scoped=true


























var recipevue_type_template_id_7c805bba_scoped_true_render = function render() {
  var _vm$selectedRecipe$pr, _vm$selectedRecipe$in, _vm$selectedRecipe$un, _vm$selectedRecipe$in2, _vm$recipeToDelete;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "recipe-management"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-7c805bba>", "</div>", [_vm._ssrNode("<div class=\"header-content primary rounded pa-4 mr-4\" data-v-7c805bba>", "</div>", [_vm._ssrNode("<h1 class=\"page-title\" data-v-7c805bba>", "</h1>", [_c(VIcon["a" /* default */], {
    staticClass: "mr-3",
    attrs: {
      "large": "",
      "color": "white"
    }
  }, [_vm._v("mdi-book-open-variant")]), _vm._ssrNode("\n        Recipe Management\n      ")], 2), _vm._ssrNode(" <p class=\"page-subtitle\" data-v-7c805bba>Manage product recipes and ingredients</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-actions\" data-v-7c805bba>", "</div>", [_c(VBtn["a" /* default */], {
    staticClass: "mr-2 primary",
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.openCreateDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n        Add Recipe\n      ")], 1), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.openBulkDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-upload")]), _vm._v("\n        Bulk Add\n      ")], 1)], 2)], 2), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, _vm._l(_vm.statistics, function (stat, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      attrs: {
        "cols": "12",
        "md": "3"
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "stat-card",
      attrs: {
        "elevation": "2"
      }
    }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
      staticClass: "d-flex align-center"
    }, [_c(VAvatar["a" /* default */], {
      staticClass: "mr-3",
      attrs: {
        "color": stat.color
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "color": "white"
      }
    }, [_vm._v(_vm._s(stat.icon))])], 1), _vm._v(" "), _c('div', [_c('h3', {
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
  }, [_vm._v("mdi-filter")]), _vm._v("\n      Filters\n    ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.finishedProducts,
      "item-text": "pro_name",
      "item-value": "id",
      "label": "Filter by Product",
      "clearable": "",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-magnify",
      "placeholder": "Search products..."
    },
    on: {
      "change": _vm.loadRecipes
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n              " + _vm._s(item.pro_name) + "\n            ")];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.pro_name))]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.pro_desc))])], 1)];
      }
    }]),
    model: {
      value: _vm.filters.productId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "productId", $$v);
      },
      expression: "filters.productId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.stockItems,
      "item-text": "pro_name",
      "item-value": "id",
      "label": "Filter by Ingredient",
      "clearable": "",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-magnify",
      "placeholder": "Search ingredients..."
    },
    on: {
      "change": _vm.loadRecipes
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n              " + _vm._s(item.pro_name) + "\n            ")];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.pro_name))]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.pro_desc))])], 1)];
      }
    }]),
    model: {
      value: _vm.filters.ingredientId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "ingredientId", $$v);
      },
      expression: "filters.ingredientId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Search recipes...",
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
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "title"
  }, [_vm._v("Recipes")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": _vm.loadRecipes
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-refresh")])], 1)], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "recipe-table",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.recipes,
      "loading": _vm.loading,
      "server-items-length": _vm.totalItems,
      "options": _vm.options
    },
    on: {
      "update:options": [function ($event) {
        _vm.options = $event;
      }, _vm.loadRecipes]
    },
    scopedSlots: _vm._u([{
      key: "item.product",
      fn: function ({
        item
      }) {
        var _item$product, _item$product2;
        return [_c('div', {
          staticClass: "product-info"
        }, [_c('strong', [_vm._v(_vm._s(((_item$product = item.product) === null || _item$product === void 0 ? void 0 : _item$product.pro_name) || 'N/A'))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-grey"
        }, [_vm._v(_vm._s((_item$product2 = item.product) === null || _item$product2 === void 0 ? void 0 : _item$product2.pro_desc))])])];
      }
    }, {
      key: "item.ingredient",
      fn: function ({
        item
      }) {
        var _item$ingredient, _item$ingredient2;
        return [_c('div', {
          staticClass: "ingredient-info"
        }, [_c('strong', [_vm._v(_vm._s(((_item$ingredient = item.ingredient) === null || _item$ingredient === void 0 ? void 0 : _item$ingredient.pro_name) || 'N/A'))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-grey"
        }, [_vm._v("Price: " + _vm._s(_vm.formatCurrency((_item$ingredient2 = item.ingredient) === null || _item$ingredient2 === void 0 ? void 0 : _item$ingredient2.pro_price)))])])];
      }
    }, {
      key: "item.quantity",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "quantity-info"
        }, [_c('span', {
          staticClass: "quantity-value"
        }, [_vm._v(_vm._s(_vm.formatNumber(item.quantity)))]), _vm._v(" "), item.unit ? _c('span', {
          staticClass: "quantity-unit"
        }, [_vm._v(_vm._s(item.unit.symbol))]) : _vm._e()])];
      }
    }, {
      key: "item.cost",
      fn: function ({
        item
      }) {
        var _item$ingredient3;
        return [_c('div', {
          staticClass: "cost-info"
        }, [_c('strong', {
          staticClass: "cost-value"
        }, [_vm._v("\n            " + _vm._s(_vm.formatCurrency((((_item$ingredient3 = item.ingredient) === null || _item$ingredient3 === void 0 ? void 0 : _item$ingredient3.pro_price) || 0) * item.quantity)) + "\n          ")])])];
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
                staticClass: "primary",
                attrs: {
                  "icon": "",
                  "small": ""
                },
                on: {
                  "click": function ($event) {
                    return _vm.editRecipe(item);
                  }
                }
              }, on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-pencil")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("Edit Recipe")])]), _vm._v(" "), _c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on
            }) {
              return [_c(VBtn["a" /* default */], _vm._g({
                staticClass: "primary",
                attrs: {
                  "icon": "",
                  "small": ""
                },
                on: {
                  "click": function ($event) {
                    return _vm.viewRecipe(item);
                  }
                }
              }, on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-eye")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("View Details")])]), _vm._v(" "), _c(VTooltip["a" /* default */], {
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
                  "color": "error"
                },
                on: {
                  "click": function ($event) {
                    return _vm.deleteRecipe(item);
                  }
                }
              }, on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-delete")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("Delete Recipe")])])], 1)];
      }
    }])
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": ""
    },
    model: {
      value: _vm.recipeDialog,
      callback: function ($$v) {
        _vm.recipeDialog = $$v;
      },
      expression: "recipeDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "dialog-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-book-open-variant")]), _vm._v("\n        " + _vm._s(_vm.isEditing ? 'Edit Product Recipe' : 'Create Product Recipe') + "\n      ")], 1), _vm._v(" "), _c(VForm["a" /* default */], {
    ref: "recipeForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.formValid,
      callback: function ($$v) {
        _vm.formValid = $$v;
      },
      expression: "formValid"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Recipe Name",
      "rules": [_vm.rules.required],
      "outlined": "",
      "required": "",
      "prepend-inner-icon": "mdi-tag",
      "placeholder": "Enter a name for this recipe...",
      "hint": "Give your recipe a descriptive name",
      "persistent-hint": ""
    },
    model: {
      value: _vm.currentRecipe.recipeName,
      callback: function ($$v) {
        _vm.$set(_vm.currentRecipe, "recipeName", $$v);
      },
      expression: "currentRecipe.recipeName"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.finishedProducts,
      "item-text": "pro_name",
      "item-value": "id",
      "label": "Select Product (What are you making?)",
      "rules": [_vm.rules.required],
      "outlined": "",
      "required": "",
      "clearable": "",
      "search-input": _vm.productSearch,
      "placeholder": "Type to search products...",
      "prepend-inner-icon": "mdi-magnify",
      "disabled": _vm.productPreSelected
    },
    on: {
      "update:searchInput": function ($event) {
        _vm.productSearch = $event;
      },
      "update:search-input": function ($event) {
        _vm.productSearch = $event;
      },
      "change": _vm.onProductChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VListItemAvatar["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-package-variant")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.pro_name))]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("\n                      " + _vm._s(item.pro_desc) + " - Category: " + _vm._s(item.pro_category || item._category) + "\n                    ")])], 1), _vm._v(" "), _c(VListItemAction["a" /* default */], [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": "primary",
            "outlined": ""
          }
        }, [_vm._v("\n                      " + _vm._s(_vm.formatCurrency(item.pro_price)) + "\n                    ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": "primary",
            "outlined": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "small": ""
          }
        }, [_vm._v("mdi-package-variant")]), _vm._v("\n                    " + _vm._s(item.pro_name) + "\n                  ")], 1)];
      }
    }, {
      key: "no-data",
      fn: function () {
        return [_c(VListItem["a" /* default */], [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("\n                        No products found matching \"" + _vm._s(_vm.productSearch) + "\"\n                      ")])], 1)], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.currentRecipe.productId,
      callback: function ($$v) {
        _vm.$set(_vm.currentRecipe, "productId", $$v);
      },
      expression: "currentRecipe.productId"
    }
  })], 1)], 1), _vm._v(" "), _vm.selectedProduct ? _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    attrs: {
      "type": "info",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c('div', {
    staticClass: "flex-grow-1"
  }, [_c('h4', [_vm._v(_vm._s(_vm.selectedProduct.pro_name))]), _vm._v(" "), _c('p', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.selectedProduct.pro_desc))])]), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('div', [_c('strong', [_vm._v("Selling Price:")]), _vm._v(" " + _vm._s(_vm.formatCurrency(_vm.selectedProduct.pro_price)))]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Current Cost:")]), _vm._v(" " + _vm._s(_vm.formatCurrency(_vm.selectedProduct.pro_cost_price || 0)))])])])])], 1)], 1) : _vm._e(), _vm._v(" "), _vm.currentRecipe.productId ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', [_vm._v("Recipe Ingredients")]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "ingredient-builder-table",
    attrs: {
      "headers": _vm.ingredientHeaders,
      "items": _vm.currentRecipe.ingredients,
      "hide-default-footer": ""
    },
    scopedSlots: _vm._u([{
      key: "item.name",
      fn: function ({
        item,
        index
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "dense": "",
            "outlined": "",
            "placeholder": "Custom ingredient name...",
            "prepend-inner-icon": "mdi-tag"
          },
          on: {
            "input": function ($event) {
              return _vm.generateIngredientName(index);
            }
          },
          model: {
            value: item.customName,
            callback: function ($$v) {
              _vm.$set(item, "customName", $$v);
            },
            expression: "item.customName"
          }
        })];
      }
    }, {
      key: "item.ingredientId",
      fn: function ({
        item,
        index
      }) {
        return [_c(VAutocomplete["a" /* default */], {
          key: `ingredient-${index}-${item.ingredientId}`,
          attrs: {
            "items": _vm.getAvailableIngredients(index),
            "item-text": "pro_name",
            "item-value": "id",
            "label": "Select Ingredient",
            "dense": "",
            "outlined": "",
            "clearable": "",
            "search-input": _vm.ingredientSearchInputs[index],
            "placeholder": "Search ingredients...",
            "prepend-inner-icon": "mdi-leaf"
          },
          on: {
            "update:searchInput": function ($event) {
              return _vm.$set(_vm.ingredientSearchInputs, index, $event);
            },
            "update:search-input": function ($event) {
              return _vm.$set(_vm.ingredientSearchInputs, index, $event);
            },
            "change": function ($event) {
              return _vm.updateIngredientName(index);
            }
          },
          scopedSlots: _vm._u([{
            key: "item",
            fn: function ({
              item: ingredient
            }) {
              return [_c(VListItemAvatar["a" /* default */], {
                attrs: {
                  "size": "32"
                }
              }, [_c(VIcon["a" /* default */], {
                attrs: {
                  "color": "success"
                }
              }, [_vm._v("mdi-leaf")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v(_vm._s(ingredient.pro_name))]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("\n                          Price: " + _vm._s(_vm.formatCurrency(ingredient.pro_price)) + " | \n                          Stock: " + _vm._s(_vm.formatNumber(ingredient.pro_card_count || 0)) + "\n                          "), _vm.getIngredientUnit(ingredient.id) ? _c('span', [_vm._v(" | Unit: " + _vm._s(_vm.getIngredientUnit(ingredient.id)))]) : _vm._e()])], 1), _vm._v(" "), _c(VListItemAction["a" /* default */], [_c(VChip["a" /* default */], {
                attrs: {
                  "x-small": "",
                  "color": "success",
                  "outlined": ""
                }
              }, [_vm._v("\n                          " + _vm._s(ingredient._category || 'STOCK') + "\n                        ")])], 1)];
            }
          }, {
            key: "selection",
            fn: function ({
              item: ingredient
            }) {
              return [_c(VChip["a" /* default */], {
                attrs: {
                  "small": "",
                  "color": "success",
                  "outlined": ""
                }
              }, [_c(VIcon["a" /* default */], {
                attrs: {
                  "left": "",
                  "x-small": ""
                }
              }, [_vm._v("mdi-leaf")]), _vm._v("\n                        " + _vm._s(ingredient.pro_name) + "\n                      ")], 1)];
            }
          }, {
            key: "no-data",
            fn: function () {
              return [_c(VListItem["a" /* default */], [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("\n                            No ingredients found matching \"" + _vm._s(_vm.ingredientSearchInputs[index] || '') + "\"\n                          ")])], 1)], 1)];
            },
            proxy: true
          }], null, true),
          model: {
            value: item.ingredientId,
            callback: function ($$v) {
              _vm.$set(item, "ingredientId", $$v);
            },
            expression: "item.ingredientId"
          }
        })];
      }
    }, {
      key: "item.quantity",
      fn: function ({
        item
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "step": "0.01",
            "min": "0",
            "dense": "",
            "outlined": "",
            "placeholder": "0.00"
          },
          on: {
            "input": _vm.calculateTotalCost
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
      key: "item.unitId",
      fn: function ({
        item,
        index
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "value": _vm.getAutoSelectedUnitName(item.ingredientId),
            "label": "Unit (Auto)",
            "dense": "",
            "outlined": "",
            "readonly": "",
            "disabled": "",
            "hint": item.ingredientId ? 'Auto-selected from ingredient' : 'Select ingredient first',
            "persistent-hint": "",
            "prepend-inner-icon": "mdi-scale"
          }
        })];
      }
    }, {
      key: "item.unitCost",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "font-weight-medium"
        }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.getIngredientPrice(item.ingredientId))))])];
      }
    }, {
      key: "item.totalCost",
      fn: function ({
        item
      }) {
        return [_c('strong', {
          staticClass: "primary--text"
        }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.getIngredientPrice(item.ingredientId) * (item.quantity || 0))))])];
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
              return _vm.removeIngredient(index);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-delete")])], 1)];
      }
    }], null, false, 1929589355)
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.addIngredient
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n                Add Ingredient\n              ")], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.currentRecipe.ingredients.length > 0 ? _c(VRow["a" /* default */], {
    staticClass: "mt-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    attrs: {
      "type": "success",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "cost-summary"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center"
  }, [_c('div', [_c('strong', [_vm._v("Total Recipe Cost:")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6 primary--text ml-2"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalRecipeCost)))])]), _vm._v(" "), _vm.selectedProduct ? _c('div', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v("Profit Margin:")]), _vm._v(" "), _c('span', {
    staticClass: "ml-2",
    class: _vm.profitMargin >= 0 ? 'success--text text-h6' : 'error--text text-h6'
  }, [_vm._v("\n                        " + _vm._s(_vm.formatCurrency(_vm.profitMargin)) + "\n                      ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
    staticClass: "text-caption"
  }, [_vm._v("\n                        (" + _vm._s(Math.round(_vm.profitMargin / (_vm.selectedProduct.pro_price || 1) * 100)) + "% margin)\n                      ")])]) : _vm._e()])])])], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.saving,
      "disabled": !_vm.formValid || _vm.currentRecipe.ingredients.length === 0
    },
    on: {
      "click": _vm.saveRecipe
    }
  }, [_vm._v("\n            " + _vm._s(_vm.isEditing ? 'Update Recipe' : 'Create Recipe') + "\n          ")])], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "900px",
      "persistent": ""
    },
    model: {
      value: _vm.bulkDialog,
      callback: function ($$v) {
        _vm.bulkDialog = $$v;
      },
      expression: "bulkDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "dialog-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-upload")]), _vm._v("\n        Bulk Add Recipes\n      ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Recipe Name",
      "rules": [_vm.rules.required],
      "outlined": "",
      "prepend-inner-icon": "mdi-tag",
      "placeholder": "Enter a name for this recipe...",
      "hint": "This name will be used as the base for all ingredients",
      "persistent-hint": ""
    },
    model: {
      value: _vm.bulkRecipes.recipeName,
      callback: function ($$v) {
        _vm.$set(_vm.bulkRecipes, "recipeName", $$v);
      },
      expression: "bulkRecipes.recipeName"
    }
  })], 1)], 1), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "items": _vm.finishedProducts,
      "item-text": "pro_name",
      "item-value": "id",
      "label": "Select Product",
      "rules": [_vm.rules.required],
      "outlined": "",
      "placeholder": "Search products...",
      "prepend-inner-icon": "mdi-magnify"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v(_vm._s(item.pro_name))]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(item.pro_desc))])], 1)];
      }
    }]),
    model: {
      value: _vm.bulkRecipes.productId,
      callback: function ($$v) {
        _vm.$set(_vm.bulkRecipes, "productId", $$v);
      },
      expression: "bulkRecipes.productId"
    }
  }), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "bulk-table",
    attrs: {
      "headers": _vm.bulkHeaders,
      "items": _vm.bulkRecipes.recipes,
      "hide-default-footer": ""
    },
    scopedSlots: _vm._u([{
      key: "item.name",
      fn: function ({
        item,
        index
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "dense": "",
            "outlined": "",
            "placeholder": "Custom ingredient name..."
          },
          on: {
            "input": function ($event) {
              return _vm.generateBulkIngredientName(index);
            }
          },
          model: {
            value: item.customName,
            callback: function ($$v) {
              _vm.$set(item, "customName", $$v);
            },
            expression: "item.customName"
          }
        })];
      }
    }, {
      key: "item.ingredientId",
      fn: function ({
        item,
        index
      }) {
        return [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.stockItems,
            "item-text": "pro_name",
            "item-value": "id",
            "dense": "",
            "placeholder": "Search ingredients..."
          },
          on: {
            "change": function ($event) {
              return _vm.updateBulkRecipe(index, 'ingredientId', item.ingredientId);
            }
          },
          scopedSlots: _vm._u([{
            key: "item",
            fn: function ({
              item: ingredient
            }) {
              return [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v(_vm._s(ingredient.pro_name))]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(ingredient.pro_desc))])], 1)];
            }
          }], null, true),
          model: {
            value: item.ingredientId,
            callback: function ($$v) {
              _vm.$set(item, "ingredientId", $$v);
            },
            expression: "item.ingredientId"
          }
        })];
      }
    }, {
      key: "item.quantity",
      fn: function ({
        item,
        index
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "step": "0.01",
            "dense": "",
            "placeholder": "0.00"
          },
          on: {
            "input": function ($event) {
              return _vm.updateBulkRecipe(index, 'quantity', item.quantity);
            }
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
      key: "item.unitId",
      fn: function ({
        item,
        index
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "value": _vm.getBulkAutoSelectedUnitName(item.ingredientId),
            "dense": "",
            "readonly": "",
            "disabled": "",
            "placeholder": "Auto unit"
          }
        })];
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
              return _vm.removeBulkRecipe(index);
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
      "click": _vm.addBulkRecipe
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n          Add Row\n        ")], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeBulkDialog
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.saving,
      "disabled": !_vm.bulkRecipes.productId || !_vm.bulkRecipes.recipeName || _vm.bulkRecipes.recipes.length === 0
    },
    on: {
      "click": _vm.saveBulkRecipes
    }
  }, [_vm._v("\n          Create Recipes\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "500px"
    },
    model: {
      value: _vm.viewDialog,
      callback: function ($$v) {
        _vm.viewDialog = $$v;
      },
      expression: "viewDialog"
    }
  }, [_vm.selectedRecipe ? _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "dialog-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-eye")]), _vm._v("\n        Recipe Details\n      ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VList["a" /* default */], [_c(VListItem["a" /* default */], [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("Name")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(_vm.selectedRecipe.name))])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("Product")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s((_vm$selectedRecipe$pr = _vm.selectedRecipe.product) === null || _vm$selectedRecipe$pr === void 0 ? void 0 : _vm$selectedRecipe$pr.pro_name))])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("Ingredient")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s((_vm$selectedRecipe$in = _vm.selectedRecipe.ingredient) === null || _vm$selectedRecipe$in === void 0 ? void 0 : _vm$selectedRecipe$in.pro_name))])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("Quantity")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("\n                " + _vm._s(_vm.formatNumber(_vm.selectedRecipe.quantity)) + "\n                " + _vm._s(((_vm$selectedRecipe$un = _vm.selectedRecipe.unit) === null || _vm$selectedRecipe$un === void 0 ? void 0 : _vm$selectedRecipe$un.symbol) || '') + "\n              ")])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("Cost per Unit")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("\n                " + _vm._s(_vm.formatCurrency((((_vm$selectedRecipe$in2 = _vm.selectedRecipe.ingredient) === null || _vm$selectedRecipe$in2 === void 0 ? void 0 : _vm$selectedRecipe$in2.pro_price) || 0) * _vm.selectedRecipe.quantity)) + "\n              ")])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("Created")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(_vm.formatDate(_vm.selectedRecipe.createdAt)))])], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.viewDialog = false;
      }
    }
  }, [_vm._v("Close")])], 1)], 1) : _vm._e()], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400px"
    },
    model: {
      value: _vm.deleteDialog,
      callback: function ($$v) {
        _vm.deleteDialog = $$v;
      },
      expression: "deleteDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "dialog-title error--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "error"
    }
  }, [_vm._v("mdi-delete")]), _vm._v("\n        Confirm Delete\n      ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n        Are you sure you want to delete this recipe?\n        "), _c('br'), _c('br'), _vm._v(" "), _c('strong', [_vm._v(_vm._s((_vm$recipeToDelete = _vm.recipeToDelete) === null || _vm$recipeToDelete === void 0 ? void 0 : _vm$recipeToDelete.name))])]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.deleteDialog = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "loading": _vm.deleting
    },
    on: {
      "click": _vm.confirmDelete
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pos/recipe/index.vue?vue&type=template&id=7c805bba&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/recipe/index.vue?vue&type=script&lang=js

/* harmony default export */ var recipevue_type_script_lang_js = ({
  name: 'RecipeManagement',
  data() {
    return {
      // Loading states
      loading: false,
      saving: false,
      deleting: false,
      // Search inputs
      productSearch: '',
      ingredientSearchInputs: [],
      // Pre-selection state
      productPreSelected: false,
      // Data
      recipes: [],
      products: [],
      finishedProducts: [],
      // Products that can have recipes (non-stock)
      stockItems: [],
      // Products that are ingredients (stock)
      units: [],
      statistics: [{
        label: 'Total Recipes',
        value: 0,
        icon: 'mdi-book-open',
        color: 'primary'
      }, {
        label: 'Products',
        value: 0,
        icon: 'mdi-package',
        color: 'primary'
      }, {
        label: 'Ingredients',
        value: 0,
        icon: 'mdi-leaf',
        color: 'primary'
      }, {
        label: 'Avg Ingredients',
        value: 0,
        icon: 'mdi-chart-line',
        color: 'primary'
      }],
      // Pagination
      options: {},
      totalItems: 0,
      // Filters
      filters: {
        productId: null,
        ingredientId: null,
        search: ''
      },
      // Dialogs
      recipeDialog: false,
      bulkDialog: false,
      viewDialog: false,
      deleteDialog: false,
      // Forms
      formValid: false,
      isEditing: false,
      currentRecipe: this.getEmptyRecipe(),
      selectedRecipe: null,
      recipeToDelete: null,
      selectedProduct: null,
      totalRecipeCost: 0,
      // Ingredient builder
      ingredientHeaders: [{
        text: 'Custom Name',
        value: 'name',
        width: '20%'
      }, {
        text: 'Ingredient',
        value: 'ingredientId',
        width: '25%'
      }, {
        text: 'Quantity',
        value: 'quantity',
        width: '15%'
      }, {
        text: 'Unit',
        value: 'unitId',
        width: '15%'
      }, {
        text: 'Unit Cost',
        value: 'unitCost',
        width: '15%'
      }, {
        text: 'Total Cost',
        value: 'totalCost',
        width: '15%'
      }, {
        text: 'Actions',
        value: 'actions',
        width: '10%',
        sortable: false
      }],
      // Bulk creation
      bulkRecipes: {
        recipeName: '',
        productId: null,
        recipes: []
      },
      // Table headers
      headers: [{
        text: 'Name',
        value: 'name',
        width: '200px'
      }, {
        text: 'Product',
        value: 'product',
        width: '200px',
        sortable: false
      }, {
        text: 'Ingredient',
        value: 'ingredient',
        width: '200px',
        sortable: false
      }, {
        text: 'Quantity',
        value: 'quantity',
        width: '120px',
        align: 'center'
      }, {
        text: 'Cost',
        value: 'cost',
        width: '120px',
        align: 'right',
        sortable: false
      }, {
        text: 'Actions',
        value: 'actions',
        width: '150px',
        sortable: false,
        align: 'center'
      }],
      bulkHeaders: [{
        text: 'Custom Name',
        value: 'name',
        width: '25%'
      }, {
        text: 'Ingredient',
        value: 'ingredientId',
        width: '30%'
      }, {
        text: 'Quantity',
        value: 'quantity',
        width: '15%'
      }, {
        text: 'Unit',
        value: 'unitId',
        width: '15%'
      }, {
        text: 'Actions',
        value: 'actions',
        width: '15%',
        sortable: false
      }],
      // Validation rules
      rules: {
        required: value => !!value || 'This field is required',
        positiveNumber: value => value > 0 || 'Must be greater than 0'
      },
      // Debounced search
      debounceSearch: null
    };
  },
  computed: {
    profitMargin() {
      if (!this.selectedProduct) return 0;
      return (this.selectedProduct.pro_price || 0) - this.totalRecipeCost;
    }
  },
  created() {
    this.debounceSearch = Object(external_lodash_["debounce"])(this.loadRecipes, 500);
    this.loadInitialData();
  },
  methods: {
    async loadInitialData() {
      try {
        await Promise.all([this.loadProducts(), this.loadUnits(), this.loadStatistics()]);
        await this.loadRecipes();
      } catch (error) {
        this.$toast.error('Error loading initial data');
        console.error(error);
      }
    },
    async loadProducts() {
      try {
        const response = await this.$axios.get('/api/product/find');
        this.products = response.data.data || response.data;
        // Separate products by category
        this.finishedProducts = this.products.filter(p => p._category != 'stock');
        this.stockItems = this.products.filter(p => p._category === 'stock');
      } catch (error) {
        console.error('Error loading products:', error);
      }
    },
    // NEW: Get ingredient unit information
    getIngredientUnit(ingredientId) {
      const ingredient = this.stockItems.find(item => item.id === ingredientId);
      if (!ingredient || !ingredient.stockUnitId) return null;
      const unit = this.units.find(u => u.id === ingredient.stockUnitId);
      return unit ? unit.symbol || unit.name : null;
    },
    // NEW: Get auto-selected unit name for display
    getAutoSelectedUnitName(ingredientId) {
      if (!ingredientId) return 'Select ingredient first';
      const ingredient = this.stockItems.find(item => item.id === ingredientId);
      if (!ingredient || !ingredient.stockUnitId) return 'No unit defined';
      const unit = this.units.find(u => u.id === ingredient.stockUnitId);
      return unit ? `${unit.name} (${unit.symbol || ''})` : 'Unknown unit';
    },
    // NEW: Get auto-selected unit for bulk operations
    getBulkAutoSelectedUnitName(ingredientId) {
      if (!ingredientId) return '';
      return this.getAutoSelectedUnitName(ingredientId);
    },
    // NEW: Auto-select unit based on ingredient
    autoSelectIngredientUnit(index) {
      const ingredient = this.currentRecipe.ingredients[index];
      if (!ingredient.ingredientId) {
        ingredient.unitId = null;
        return;
      }
      const stockItem = this.stockItems.find(item => item.id === ingredient.ingredientId);
      if (stockItem && stockItem.stockUnitId) {
        ingredient.unitId = stockItem.stockUnitId;
        console.log(`Auto-selected unit ${stockItem.stockUnitId} for ingredient ${stockItem.pro_name}`);
      } else {
        ingredient.unitId = null;
        console.log(`No unit defined for ingredient ${(stockItem === null || stockItem === void 0 ? void 0 : stockItem.pro_name) || 'unknown'}`);
      }
    },
    // NEW: Auto-select unit for bulk operations
    autoSelectBulkIngredientUnit(index) {
      const recipe = this.bulkRecipes.recipes[index];
      if (!recipe.ingredientId) {
        recipe.unitId = null;
        return;
      }
      const stockItem = this.stockItems.find(item => item.id === recipe.ingredientId);
      if (stockItem && stockItem.unitId) {
        recipe.unitId = stockItem.unitId;
      } else {
        recipe.unitId = null;
      }
    },
    onProductChange() {
      this.selectedProduct = this.finishedProducts.find(p => p.id === this.currentRecipe.productId);
      this.productSearch = ''; // Clear search after selection

      // Auto-generate recipe name if not manually set
      if (!this.currentRecipe.recipeName && this.selectedProduct) {
        this.currentRecipe.recipeName = `${this.selectedProduct.pro_name} Recipe`;
      }
      this.calculateTotalCost();
    },
    addIngredient() {
      const index = this.currentRecipe.ingredients.length;
      this.currentRecipe.ingredients.push({
        ingredientId: null,
        quantity: null,
        unitId: null,
        customName: '',
        name: ''
      });
      // Initialize search input for new ingredient
      this.$nextTick(() => {
        this.$set(this.ingredientSearchInputs, index, '');
      });
    },
    removeIngredient(index) {
      this.currentRecipe.ingredients.splice(index, 1);
      this.ingredientSearchInputs.splice(index, 1);
      this.calculateTotalCost();
    },
    updateIngredientName(index) {
      const ingredient = this.stockItems.find(item => item.id === this.currentRecipe.ingredients[index].ingredientId);
      if (ingredient) {
        // Auto-generate name if custom name is not provided
        if (!this.currentRecipe.ingredients[index].customName) {
          var _this$selectedProduct;
          this.currentRecipe.ingredients[index].name = `${(_this$selectedProduct = this.selectedProduct) === null || _this$selectedProduct === void 0 ? void 0 : _this$selectedProduct.pro_name} - ${ingredient.pro_name}`;
        }

        // NEW: Auto-select unit based on ingredient
        this.autoSelectIngredientUnit(index);
      }
      // Clear search input after selection using $nextTick for proper reactive update
      this.$nextTick(() => {
        this.$set(this.ingredientSearchInputs, index, '');
      });
      this.calculateTotalCost();
    },
    generateIngredientName(index) {
      const ingredient = this.currentRecipe.ingredients[index];
      const selectedIngredient = this.stockItems.find(item => item.id === ingredient.ingredientId);
      if (ingredient.customName) {
        // Use custom name if provided
        ingredient.name = ingredient.customName;
      } else if (selectedIngredient) {
        var _this$selectedProduct2;
        // Auto-generate name
        ingredient.name = `${(_this$selectedProduct2 = this.selectedProduct) === null || _this$selectedProduct2 === void 0 ? void 0 : _this$selectedProduct2.pro_name} - ${selectedIngredient.pro_name}`;
      }
    },
    // Fixed method to get available ingredients for each row
    getAvailableIngredients(currentIndex) {
      // Get all selected ingredient IDs except for the current row
      const selectedIds = this.currentRecipe.ingredients.map((ing, index) => index !== currentIndex ? ing.ingredientId : null).filter(id => id !== null);

      // Return all stock items that aren't selected in other rows
      return this.stockItems.filter(item => !selectedIds.includes(item.id));
    },
    clearSearchInput(index) {
      this.$set(this.ingredientSearchInputs, index, '');
    },
    getIngredientPrice(ingredientId) {
      const ingredient = this.stockItems.find(item => item.id === ingredientId);
      return ingredient ? ingredient.pro_price || 0 : 0;
    },
    calculateTotalCost() {
      this.totalRecipeCost = this.currentRecipe.ingredients.reduce((total, ingredient) => {
        const price = this.getIngredientPrice(ingredient.ingredientId);
        return total + price * (ingredient.quantity || 0);
      }, 0);
    },
    async loadUnits() {
      try {
        const response = await this.$axios.get('/api/unit/find');
        this.units = response.data.data || response.data;
      } catch (error) {
        console.error('Error loading units:', error);
      }
    },
    async loadRecipes() {
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
          ...(this.filters.productId && {
            productId: this.filters.productId
          }),
          ...(this.filters.ingredientId && {
            ingredientId: this.filters.ingredientId
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
        const response = await this.$axios.get('/api/recipes', {
          params
        });
        if (response.data.success) {
          this.recipes = response.data.data.recipes;
          this.totalItems = response.data.data.pagination.totalItems;
        }
      } catch (error) {
        this.$toast.error('Error loading recipes');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async loadStatistics() {
      try {
        const response = await this.$axios.get('/api/recipes/stats');
        if (response.data.success) {
          const stats = response.data.data;
          this.statistics[0].value = stats.totalRecipes;
          this.statistics[1].value = stats.totalProducts;
          this.statistics[2].value = stats.totalIngredients;
          this.statistics[3].value = stats.averageIngredientsPerProduct.toFixed(1);
        }
      } catch (error) {
        console.error('Error loading statistics:', error);
      }
    },
    openCreateDialog() {
      this.isEditing = false;
      this.currentRecipe = this.getEmptyRecipe();
      this.selectedProduct = null;
      this.totalRecipeCost = 0;
      this.productSearch = '';
      this.ingredientSearchInputs = [];
      this.productPreSelected = false;
      this.recipeDialog = true;
    },
    // NEW: Open create dialog with pre-selected product
    openCreateDialogWithProduct(product) {
      this.isEditing = false;
      this.selectedProduct = product;
      this.productPreSelected = true;

      // Set up the form with pre-selected product
      this.currentRecipe = {
        recipeName: `${product.pro_name} Recipe`,
        productId: product.id,
        ingredients: []
      };

      // Clear search inputs
      this.productSearch = '';
      this.ingredientSearchInputs = [];
      this.totalRecipeCost = 0;

      // Open the dialog
      this.recipeDialog = true;

      // Show success message
      this.$toast.info(`Creating recipe for ${product.pro_name}`);
    },
    // NEW: Open edit dialog for specific recipe
    openEditDialog(recipe) {
      this.editRecipe(recipe);
    },
    async editRecipe(recipe) {
      this.isEditing = true;
      this.selectedRecipe = recipe;
      this.productPreSelected = false;

      // Set the selected product
      this.selectedProduct = recipe.product;

      // Convert single recipe record to form structure
      this.currentRecipe = {
        recipeName: recipe.name,
        productId: recipe.productId,
        ingredients: [{
          ingredientId: recipe.ingredientId,
          quantity: recipe.quantity,
          unitId: recipe.unitId,
          // Keep original unit
          customName: recipe.name.includes(' - ') ? recipe.name.split(' - ').slice(1).join(' - ') : '',
          name: recipe.name
        }]
      };

      // Initialize search inputs
      this.ingredientSearchInputs = [''];
      this.productSearch = '';

      // Calculate costs
      this.calculateTotalCost();
      this.recipeDialog = true;
    },
    viewRecipe(recipe) {
      this.selectedRecipe = recipe;
      this.viewDialog = true;
    },
    deleteRecipe(recipe) {
      this.recipeToDelete = recipe;
      this.deleteDialog = true;
    },
    async confirmDelete() {
      this.deleting = true;
      try {
        const response = await this.$axios.delete(`/api/recipes/${this.recipeToDelete.id}`);
        if (response.data.success) {
          this.$toast.success('Recipe deleted successfully');
          await this.loadRecipes();
          await this.loadStatistics();
        }
      } catch (error) {
        this.$toast.error('Error deleting recipe');
        console.error(error);
      } finally {
        this.deleting = false;
        this.deleteDialog = false;
      }
    },
    async saveRecipe() {
      if (!this.$refs.recipeForm.validate()) return;
      if (this.currentRecipe.ingredients.length === 0) {
        this.$toast.warning('Please add at least one ingredient');
        return;
      }

      // Validate all ingredients have required fields
      const invalidIngredients = this.currentRecipe.ingredients.filter(ing => !ing.ingredientId || !ing.quantity || ing.quantity <= 0);
      if (invalidIngredients.length > 0) {
        this.$toast.warning('Please fill all ingredient details');
        return;
      }
      this.saving = true;
      try {
        if (this.isEditing) {
          await this.updateSingleRecipe();
        } else {
          // Create new recipe entries using bulk create
          const bulkData = {
            recipeName: this.currentRecipe.recipeName,
            productId: this.currentRecipe.productId,
            recipes: this.currentRecipe.ingredients.map(ingredient => {
              var _this$selectedProduct3;
              return {
                name: ingredient.name || ingredient.customName || `${(_this$selectedProduct3 = this.selectedProduct) === null || _this$selectedProduct3 === void 0 ? void 0 : _this$selectedProduct3.pro_name} - ${this.getIngredientName(ingredient.ingredientId)}`,
                ingredientId: ingredient.ingredientId,
                quantity: ingredient.quantity,
                unitId: ingredient.unitId // Use auto-selected unit
              };
            })
          };
          const response = await this.$axios.post('/api/recipes/bulk', bulkData);
          if (response.data.success) {
            this.$toast.success(`Recipe "${this.currentRecipe.recipeName}" with ${response.data.data.createdCount} ingredients created successfully`);
            await this.loadRecipes();
            await this.loadStatistics();
            this.closeDialog();
          }
        }
      } catch (error) {
        var _error$response, _error$response$data;
        const message = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Error saving recipe';
        this.$toast.error(message);
        console.error(error);
      } finally {
        this.saving = false;
      }
    },
    async updateSingleRecipe() {
      try {
        // Since we're editing a single recipe record, we only update the first ingredient
        const ingredient = this.currentRecipe.ingredients[0];
        const updateData = {
          name: ingredient.name || ingredient.customName || this.currentRecipe.recipeName,
          productId: this.currentRecipe.productId,
          ingredientId: ingredient.ingredientId,
          quantity: ingredient.quantity,
          unitId: ingredient.unitId // Use auto-selected or existing unit
        };
        const response = await this.$axios.put(`/api/recipes/${this.selectedRecipe.id}`, updateData);
        if (response.data.success) {
          this.$toast.success('Recipe updated successfully');
          await this.loadRecipes();
          await this.loadStatistics();
          this.closeDialog();
        }
      } catch (error) {
        var _error$response2, _error$response2$data;
        const message = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || 'Error updating recipe';
        this.$toast.error(message);
        console.error(error);
      }
    },
    getIngredientName(ingredientId) {
      const ingredient = this.stockItems.find(item => item.id === ingredientId);
      return ingredient ? ingredient.pro_name : 'Unknown';
    },
    closeDialog() {
      var _this$$refs$recipeFor;
      this.recipeDialog = false;
      (_this$$refs$recipeFor = this.$refs.recipeForm) === null || _this$$refs$recipeFor === void 0 ? void 0 : _this$$refs$recipeFor.reset();
      this.currentRecipe = this.getEmptyRecipe();
      this.selectedProduct = null;
      this.totalRecipeCost = 0;
      this.productSearch = '';
      this.ingredientSearchInputs = [];
      this.productPreSelected = false;
    },
    // Bulk operations
    openBulkDialog() {
      this.bulkRecipes = {
        recipeName: '',
        productId: null,
        recipes: [this.getEmptyBulkRecipe()]
      };
      this.bulkDialog = true;
    },
    addBulkRecipe() {
      this.bulkRecipes.recipes.push(this.getEmptyBulkRecipe());
    },
    removeBulkRecipe(index) {
      this.bulkRecipes.recipes.splice(index, 1);
    },
    updateBulkRecipe(index, field, value) {
      this.bulkRecipes.recipes[index][field] = value;

      // Auto-generate name if ingredient is selected and no custom name
      if (field === 'ingredientId' && value) {
        const ingredient = this.stockItems.find(ing => ing.id === value);
        const product = this.finishedProducts.find(prod => prod.id === this.bulkRecipes.productId);
        if (ingredient && product && !this.bulkRecipes.recipes[index].customName) {
          this.bulkRecipes.recipes[index].name = `${this.bulkRecipes.recipeName} - ${ingredient.pro_name}`;
        }

        // NEW: Auto-select unit for bulk operations
        this.autoSelectBulkIngredientUnit(index);
      }
    },
    generateBulkIngredientName(index) {
      const recipe = this.bulkRecipes.recipes[index];
      const selectedIngredient = this.stockItems.find(item => item.id === recipe.ingredientId);
      if (recipe.customName) {
        // Use custom name if provided
        recipe.name = recipe.customName;
      } else if (selectedIngredient && this.bulkRecipes.recipeName) {
        // Auto-generate name
        recipe.name = `${this.bulkRecipes.recipeName} - ${selectedIngredient.pro_name}`;
      }
    },
    async saveBulkRecipes() {
      this.saving = true;
      try {
        const response = await this.$axios.post('/api/recipes/bulk', this.bulkRecipes);
        if (response.data.success) {
          this.$toast.success(`Recipe "${this.bulkRecipes.recipeName}" with ${response.data.data.createdCount} ingredients created successfully`);
          await this.loadRecipes();
          await this.loadStatistics();
          this.closeBulkDialog();
        }
      } catch (error) {
        var _error$response3, _error$response3$data;
        const message = ((_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : (_error$response3$data = _error$response3.data) === null || _error$response3$data === void 0 ? void 0 : _error$response3$data.message) || 'Error creating bulk recipes';
        this.$toast.error(message);
        console.error(error);
      } finally {
        this.saving = false;
      }
    },
    closeBulkDialog() {
      this.bulkDialog = false;
      this.bulkRecipes = {
        recipeName: '',
        productId: null,
        recipes: []
      };
    },
    // Utility methods
    getEmptyRecipe() {
      return {
        recipeName: '',
        productId: null,
        ingredients: []
      };
    },
    getEmptyBulkRecipe() {
      return {
        name: '',
        customName: '',
        ingredientId: null,
        quantity: null,
        unitId: null
      };
    },
    // Updated formatting methods with thousand separators
    formatCurrency(amount) {
      return parseFloat(amount || 0).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatNumber(amount) {
      const num = parseFloat(amount || 0);
      return num.toLocaleString('en-US', {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
      });
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
});
// CONCATENATED MODULE: ./components/pos/recipe/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pos_recipevue_type_script_lang_js = (recipevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/pos/recipe/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(848)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(850)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_recipevue_type_script_lang_js,
  recipevue_type_template_id_7c805bba_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "7c805bba",
  "09ea151f"
  
)

/* harmony default export */ var recipe = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(849);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7c45559e", content, true, context)
};

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(851);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7d13d41f", content, true, context)
};

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(739);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".recipe-management[data-v-7c805bba]{box-sizing:border-box;min-height:100vh;padding:20px}.page-header[data-v-7c805bba]{align-items:center;display:flex;flex-wrap:nowrap;justify-content:space-between;margin-bottom:24px;min-height:120px}.header-content[data-v-7c805bba]{color:#fff;flex:1;min-width:0}.page-title[data-v-7c805bba]{align-items:center;display:flex;font-size:28px;font-weight:600;margin:0;overflow:visible;white-space:nowrap}.page-subtitle[data-v-7c805bba]{font-size:16px;margin:8px 0 0;opacity:.9;white-space:nowrap}.header-actions[data-v-7c805bba]{display:flex;flex-shrink:0;gap:12px}.stat-card[data-v-7c805bba]{height:100%;transition:transform .2s ease}.stat-card[data-v-7c805bba]:hover{transform:translateY(-2px)}.stat-value[data-v-7c805bba]{font-size:24px;font-weight:700;margin:0}.stat-label[data-v-7c805bba]{color:#666;font-size:14px;margin:4px 0 0}.filter-card[data-v-7c805bba]{background:#f8f9fa}.filter-title[data-v-7c805bba]{color:#fff;font-weight:600}.ingredient-info[data-v-7c805bba],.product-info[data-v-7c805bba]{min-height:40px}.quantity-info[data-v-7c805bba]{font-weight:600;text-align:center}.quantity-unit[data-v-7c805bba]{color:#666;font-size:12px;margin-left:4px}.cost-info[data-v-7c805bba]{text-align:right}.cost-value[data-v-7c805bba]{color:var(--v-primary-base);font-family:monospace}.action-buttons[data-v-7c805bba]{display:flex;gap:4px;justify-content:center}.dialog-title[data-v-7c805bba]{background:var(--v-primary-base);color:#fff;font-weight:600}.bulk-table[data-v-7c805bba],.ingredient-builder-table[data-v-7c805bba]{border:1px solid #e0e0e0;border-radius:4px}.v-text-field--outlined.v-text-field--disabled[data-v-7c805bba]{background-color:#f5f5f5}.v-text-field--outlined.v-text-field--disabled .v-label[data-v-7c805bba]{color:#757575!important}@media (max-width:960px){.page-header[data-v-7c805bba]{flex-direction:column;gap:16px;min-height:auto;padding:20px;text-align:center}.page-title[data-v-7c805bba]{font-size:24px;justify-content:center}.page-subtitle[data-v-7c805bba]{text-align:center}.header-actions[data-v-7c805bba]{flex-direction:row;justify-content:center;width:100%}}@media (max-width:768px){.recipe-management[data-v-7c805bba]{padding:16px}.page-title[data-v-7c805bba]{flex-direction:column;font-size:20px;gap:8px}.header-actions[data-v-7c805bba]{width:100%}.action-buttons[data-v-7c805bba],.header-actions[data-v-7c805bba]{flex-direction:column}}@media (max-width:600px){.page-subtitle[data-v-7c805bba],.page-title[data-v-7c805bba]{white-space:normal}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(740);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".recipe-management[data-v-7c805bba]{box-sizing:border-box;min-height:100vh;padding:20px}.page-header[data-v-7c805bba]{align-items:center;background:var(--v-primary-base);border-radius:8px;color:#fff;display:flex;flex-wrap:nowrap;justify-content:space-between;margin-bottom:24px;min-height:120px;padding:24px}.header-content[data-v-7c805bba]{flex:1;min-width:0}.page-title[data-v-7c805bba]{align-items:center;display:flex;font-size:28px;font-weight:600;margin:0;overflow:visible;white-space:nowrap}.page-subtitle[data-v-7c805bba]{font-size:16px;margin:8px 0 0;opacity:.9;white-space:nowrap}.header-actions[data-v-7c805bba]{display:flex;flex-shrink:0;gap:12px}.stat-card[data-v-7c805bba]{height:100%;transition:transform .2s ease}.stat-card[data-v-7c805bba]:hover{transform:translateY(-2px)}.stat-value[data-v-7c805bba]{font-size:24px;font-weight:700;margin:0}.stat-label[data-v-7c805bba]{color:#666;font-size:14px;margin:4px 0 0}.filter-card[data-v-7c805bba]{background:#f8f9fa}.filter-title[data-v-7c805bba]{background:var(--v-primary-base);color:#fff;font-weight:600}.ingredient-info[data-v-7c805bba],.product-info[data-v-7c805bba]{min-height:40px}.quantity-info[data-v-7c805bba]{font-weight:600;text-align:center}.quantity-unit[data-v-7c805bba]{color:#666;font-size:12px;margin-left:4px}.cost-info[data-v-7c805bba]{text-align:right}.cost-value[data-v-7c805bba]{color:var(--v-primary-base);font-family:monospace}.action-buttons[data-v-7c805bba]{display:flex;gap:4px;justify-content:center}.dialog-title[data-v-7c805bba]{background:var(--v-primary-base);color:#fff;font-weight:600}.bulk-table[data-v-7c805bba],.ingredient-builder-table[data-v-7c805bba]{border:1px solid #e0e0e0;border-radius:4px}@media (max-width:960px){.page-header[data-v-7c805bba]{flex-direction:column;gap:16px;min-height:auto;padding:20px;text-align:center}.page-title[data-v-7c805bba]{font-size:24px;justify-content:center}.page-subtitle[data-v-7c805bba]{text-align:center}.header-actions[data-v-7c805bba]{flex-direction:row;justify-content:center;width:100%}}@media (max-width:768px){.page-header[data-v-7c805bba],.recipe-management[data-v-7c805bba]{padding:16px}.page-title[data-v-7c805bba]{flex-direction:column;font-size:20px;gap:8px}.header-actions[data-v-7c805bba]{width:100%}.action-buttons[data-v-7c805bba],.header-actions[data-v-7c805bba]{flex-direction:column}}@media (max-width:600px){.page-subtitle[data-v-7c805bba],.page-title[data-v-7c805bba]{white-space:normal}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=pos-recipe.js.map