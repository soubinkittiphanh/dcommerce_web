exports.ids = [262,43,56,57,131,132,135,136,172,335];
exports.modules = {

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(579);

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
var external_lodash_ = __webpack_require__(42);

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
  
  var style0 = __webpack_require__(812)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(814)
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

/***/ 1263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productlist_vue_vue_type_style_index_0_id_e9affa26_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(958);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productlist_vue_vue_type_style_index_0_id_e9affa26_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productlist_vue_vue_type_style_index_0_id_e9affa26_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productlist_vue_vue_type_style_index_0_id_e9affa26_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productlist_vue_vue_type_style_index_0_id_e9affa26_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1264:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ingredient-info[data-v-e9affa26]{min-width:200px}.quantity-display[data-v-e9affa26]{font-family:monospace;font-weight:600;text-align:center}.cost-display[data-v-e9affa26],.total-cost-display[data-v-e9affa26]{font-family:monospace;font-weight:600;text-align:right}.total-cost-display strong[data-v-e9affa26]{color:var(--v-primary-base)}.recipe-buttons[data-v-e9affa26]{align-items:center;display:flex;gap:4px;justify-content:center}.v-tabs[data-v-e9affa26]{margin-bottom:0}.v-tab[data-v-e9affa26]{font-weight:600;text-transform:none!important}.primary.white--text[data-v-e9affa26]{background:var(--v-primary-base)}@media (max-width:768px){.recipeHeaders[data-v-e9affa26]{font-size:12px}.ingredient-info[data-v-e9affa26]{min-width:150px}.recipe-buttons[data-v-e9affa26]{flex-direction:column;gap:2px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab = __webpack_require__(633);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js
var VTabItem = __webpack_require__(634);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 2 modules
var VTabs = __webpack_require__(647);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js
var VTabsItems = __webpack_require__(536);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(579);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/productlist.vue?vue&type=template&id=e9affa26&scoped=true
























var productlistvue_type_template_id_e9affa26_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-left"
  }, [_vm._ssrNode("<div data-v-e9affa26>", "</div>", [_c(VChip["a" /* default */], {
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
  }, [_vm._v("mdi-label")]), _vm._v(" "), _c('h3', [_vm._v("ລາຍການສິນຄ້າ")])], 1), _vm._ssrNode(" "), _c(VChip["a" /* default */], {
    staticClass: "pa-5",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    },
    on: {
      "click": function ($event) {
        _vm.guidelineDialog = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi mdi-lifebuoy")]), _vm._v(" "), _c('h3', [_vm._v("ຄູ່ມືການນຳໃຊ້")])], 1)], 2), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "mt-4"
  }, [_c(VTabs["a" /* default */], {
    attrs: {
      "background-color": "primary",
      "dark": ""
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
  }, [_vm._v("mdi-package")]), _vm._v("\n        ລາຍການສິນຄ້າ\n      ")], 1), _vm._v(" "), _c(VTab["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-book-open-variant")]), _vm._v("\n        ສູດອາຫານ / Recipes\n      ")], 1)], 1), _vm._v(" "), _c(VTabsItems["a" /* default */], {
    model: {
      value: _vm.activeTab,
      callback: function ($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c(VTabItem["a" /* default */], [_c(components_VCard["c" /* VCardText */], [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "6",
      "md": "6"
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
      "click": _vm.rebuildStock
    }
  }, [_c('span', {
    staticClass: "mdi mdi-update"
  }), _vm._v("\n                    Rebuild stock\n                  ")])], 1)], 1)], 1), _vm._v(" "), _vm.loaddata ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.loaddata,
      "items-per-page": _vm.pageLine
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VToolbar["a" /* default */], {
          attrs: {
            "flat": ""
          }
        }, [_c(components_VToolbar["b" /* VToolbarTitle */], [_vm._v("ສິນຄ້າທັງຫມົດ: " + _vm._s(_vm.loaddata.length))]), _vm._v(" "), _c(VDivider["a" /* default */], {
          staticClass: "mx-4",
          attrs: {
            "inset": "",
            "vertical": ""
          }
        }), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "primary",
          attrs: {
            "size": "large",
            "variant": "outlined",
            "rounded": ""
          },
          on: {
            "click": _vm.exportToExcel
          }
        }, [_c('span', {
          staticClass: "mdi mdi-microsoft-excel"
        }), _vm._v("Generate\n                    excel file\n                  ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "primary",
          attrs: {
            "size": "large",
            "variant": "outlined",
            "rounded": ""
          },
          on: {
            "click": function ($event) {
              _vm.productFormCreate = true;
            }
          }
        }, [_c('span', {
          staticClass: "mdi mdi-note-plus-outline"
        }), _vm._v("\n                    ສ້າງສິນຄ້າໃຫມ່\n                  ")])], 1)];
      },
      proxy: true
    }, {
      key: `item.functionEdit`,
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
              _vm.editItem(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa-regular fa-pen-to-square"
        })])];
      }
    }, {
      key: `item.functionStock`,
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
              _vm.triggerCardForm(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-cart-plus"
        })])];
      }
    }, {
      key: `item.pricing`,
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
              _vm.triggerPriceListForm(item);
              _vm.wallet = true;
            }
          }
        }, [_c(VIcon["a" /* default */], [_vm._v("mdi mdi-currency-usd")])], 1)];
      }
    }, {
      key: `item.functionStockView`,
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
              _vm.editStock(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-eye"
        })])];
      }
    }, {
      key: `item.functionRecipe`,
      fn: function ({
        item
      }) {
        return [(item._category = 'stock') ? _c('div', {
          staticClass: "recipe-buttons"
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
                  "color": "primary",
                  "icon": "",
                  "small": ""
                },
                on: {
                  "click": function ($event) {
                    return _vm.viewProductRecipes(item);
                  }
                }
              }, on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-book-open-variant")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("View Recipes")])]), _vm._v(" "), _c(VTooltip["a" /* default */], {
          attrs: {
            "bottom": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on
            }) {
              return [_c(VBtn["a" /* default */], _vm._g({
                staticClass: "ml-1",
                attrs: {
                  "color": "success",
                  "icon": "",
                  "small": ""
                },
                on: {
                  "click": function ($event) {
                    return _vm.createRecipeFromProductList(item);
                  }
                }
              }, on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-plus")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c('span', [_vm._v("Create Recipe")])])], 1) : _c('span', {
          staticClass: "text-grey"
        }, [_vm._v("N/A")])];
      }
    }, {
      key: `item.pro_cost_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.formatNumber(item.pro_cost_price)) + "\n              ")];
      }
    }, {
      key: `item.pro_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.formatNumber(item.pro_price)) + "\n              ")];
      }
    }, {
      key: `item.pro_card_count`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(item.pro_card_count) + "\n              ")];
      }
    }, {
      key: `item.minStock`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                " + _vm._s(_vm.formatNumber(item.minStock)) + "\n              ")];
      }
    }, {
      key: `item.status`,
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          staticClass: "ma-2",
          attrs: {
            "color": _vm.getStatusChipColor(item.minStock, item.pro_card_count),
            "text-color": "white"
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.verifyStockStatus(item.minStock, item.pro_card_count)) + "\n                ")])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c(VTabItem["a" /* default */], [_c(components_VCard["c" /* VCardText */], [_c('RecipeManagement', {
    ref: "recipeManagement"
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "scrollable": ""
    },
    model: {
      value: _vm.productRecipeDialog,
      callback: function ($$v) {
        _vm.productRecipeDialog = $$v;
      },
      expression: "productRecipeDialog"
    }
  }, [_vm.selectedProductForRecipe ? _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-book-open-variant")]), _vm._v("\n        ສູດອາຫານສຳລັບ: " + _vm._s(_vm.selectedProductForRecipe.pro_name) + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "white--text",
    attrs: {
      "icon": ""
    },
    on: {
      "click": _vm.closeProductRecipeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
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
  }, [_c('h4', [_vm._v(_vm._s(_vm.selectedProductForRecipe.pro_name))]), _vm._v(" "), _c('p', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.selectedProductForRecipe.pro_desc))]), _vm._v(" "), _c('small', [_vm._v("Category:\n                    " + _vm._s(_vm.selectedProductForRecipe.pro_category_desc))])]), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('div', [_c('strong', [_vm._v("ລາຄາ:")]), _vm._v("\n                    " + _vm._s(_vm.formatNumber(_vm.selectedProductForRecipe.pro_price)) + " LAK\n                  ")]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("ຕົ້ນທຶນ:")]), _vm._v("\n                    " + _vm._s(_vm.formatNumber(_vm.selectedProductForRecipe.pro_cost_price)) + "\n                    LAK\n                  ")])])])])], 1)], 1), _vm._v(" "), _vm.productRecipes.length > 0 ? _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "color": "primary",
      "dark": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "text-center"
  }, [_c('h3', [_vm._v(_vm._s(_vm.productRecipes.length))]), _vm._v(" "), _c('p', [_vm._v("ວັດຖຸດິບທັງໝົດ")])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticStyle: {
      "opacity": "0.8"
    },
    attrs: {
      "color": "primary",
      "dark": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "text-center"
  }, [_c('h3', [_vm._v(_vm._s(_vm.formatNumber(_vm.totalRecipeCost)))]), _vm._v(" "), _c('p', [_vm._v("ຕົ້ນທຶນລວມ (LAK)")])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticStyle: {
      "opacity": "0.6"
    },
    attrs: {
      "color": "primary",
      "dark": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "text-center"
  }, [_c('h3', [_vm._v(_vm._s(_vm.formatNumber(_vm.profitMargin)))]), _vm._v(" "), _c('p', [_vm._v("ກຳໄລ (LAK)")])])])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.productRecipes.length > 0 ? _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.recipeHeaders,
      "items": _vm.productRecipes,
      "loading": _vm.loadingRecipes,
      "hide-default-footer": ""
    },
    scopedSlots: _vm._u([{
      key: "item.ingredient",
      fn: function ({
        item
      }) {
        var _item$ingredient, _item$ingredient2;
        return [_c('div', {
          staticClass: "ingredient-info"
        }, [_c('strong', [_vm._v(_vm._s(((_item$ingredient = item.ingredient) === null || _item$ingredient === void 0 ? void 0 : _item$ingredient.pro_name) || 'N/A'))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-grey"
        }, [_vm._v(_vm._s((_item$ingredient2 = item.ingredient) === null || _item$ingredient2 === void 0 ? void 0 : _item$ingredient2.pro_desc))])])];
      }
    }, {
      key: "item.quantity",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "quantity-display"
        }, [_vm._v("\n              " + _vm._s(item.quantity) + "\n              "), item.unit ? _c('span', {
          staticClass: "text-grey ml-1"
        }, [_vm._v(_vm._s(item.unit.name))]) : _vm._e()])];
      }
    }, {
      key: "item.unitCost",
      fn: function ({
        item
      }) {
        var _item$ingredient3;
        return [_c('div', {
          staticClass: "cost-display"
        }, [_vm._v("\n              " + _vm._s(_vm.formatNumber(((_item$ingredient3 = item.ingredient) === null || _item$ingredient3 === void 0 ? void 0 : _item$ingredient3.pro_price) || 0)) + " LAK\n            ")])];
      }
    }, {
      key: "item.totalCost",
      fn: function ({
        item
      }) {
        var _item$ingredient4;
        return [_c('div', {
          staticClass: "total-cost-display"
        }, [_c('strong', [_vm._v(_vm._s(_vm.formatNumber((((_item$ingredient4 = item.ingredient) === null || _item$ingredient4 === void 0 ? void 0 : _item$ingredient4.pro_price) || 0) * item.quantity)) + "\n                LAK")])])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "small": "",
            "color": "primary"
          },
          on: {
            "click": function ($event) {
              return _vm.editRecipeFromProduct(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-pencil")]), _vm._v("\n              Edit\n            ")], 1)];
      }
    }], null, false, 4099304520)
  }) : !_vm.loadingRecipes ? _c(VAlert["a" /* default */], {
    attrs: {
      "type": "info",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "info"
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _c('h4', {
    staticClass: "mt-2"
  }, [_vm._v("ບໍ່ມີສູດອາຫານ")]), _vm._v(" "), _c('p', [_vm._v("\n              ສິນຄ້ານີ້ຍັງບໍ່ມີສູດອາຫານ. ກົດປຸ່ມຂ້າງລຸ່ມເພື່ອສ້າງສູດອາຫານໃຫມ່.\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    on: {
      "click": _vm.createRecipeForProduct
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n              ສ້າງສູດອາຫານ\n            ")], 1)], 1)]) : _vm._e(), _vm._v(" "), _vm.loadingRecipes ? _c('div', {
    staticClass: "text-center py-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("ກຳລັງໂຫລດສູດອາຫານ...")])], 1) : _vm._e()], 1), _vm._v(" "), _vm.productRecipes.length > 0 ? _c(components_VCard["a" /* VCardActions */], [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    on: {
      "click": _vm.createRecipeForProduct
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n          ເພີ່ມວັດຖຸດິບ\n        ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "outlined": ""
    },
    on: {
      "click": _vm.calculateProductionCost
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-calculator")]), _vm._v("\n          ຄິດໄລ່ຕົ້ນທຶນ\n        ")], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeProductRecipeDialog
    }
  }, [_vm._v("ປິດ")])], 1) : _vm._e()], 1) : _vm._e()], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "max-width": "700"
    },
    model: {
      value: _vm.guidelineDialog,
      callback: function ($$v) {
        _vm.guidelineDialog = $$v;
      },
      expression: "guidelineDialog"
    }
  }, [_c('youtube-player', {
    attrs: {
      "youtube-link": "5yMsQ6gRSkI"
    },
    on: {
      "close-dialog": function ($event) {
        _vm.guidelineDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
      "max-width": "300px"
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
    }
  }, [_c('dialog-classic-message', {
    attrs: {
      "message": _vm.message
    },
    on: {
      "closedialog": function ($event) {
        _vm.message = null;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.isstock,
      callback: function ($$v) {
        _vm.isstock = $$v;
      },
      expression: "isstock"
    }
  }, [_c('card-form', {
    key: _vm.stockFormKey,
    attrs: {
      "product-id": _vm.selectedProductId,
      "id": _vm.selectedId,
      "cost": _vm.selectedProductCost,
      "product-name": _vm.selectedProductName
    },
    on: {
      "close-dialog": function ($event) {
        _vm.isstock = false;
      },
      "reload": _vm.rebuildStock
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": "",
      "scrollable": "",
      "transition": "dialog-bottom-transition"
    },
    model: {
      value: _vm.editProductForm,
      callback: function ($$v) {
        _vm.editProductForm = $$v;
      },
      expression: "editProductForm"
    }
  }, [_c('product-form', {
    key: _vm.productFormKey,
    attrs: {
      "header-id": _vm.selectedProductId,
      "isEdit": _vm.editProductForm
    },
    on: {
      "close-dialog": function ($event) {
        _vm.editProductForm = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": "",
      "scrollable": "",
      "transition": "dialog-bottom-transition"
    },
    model: {
      value: _vm.productFormCreate,
      callback: function ($$v) {
        _vm.productFormCreate = $$v;
      },
      expression: "productFormCreate"
    }
  }, [_c('product-form-create', {
    on: {
      "close-dialog": function ($event) {
        _vm.productFormCreate = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/product/productlist.vue?vue&type=template&id=e9affa26&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(146);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(147);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(148);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(149);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(150);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(151);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(152);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(153);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(154);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(155);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(156);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(157);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(158);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(159);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(160);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(161);

// EXTERNAL MODULE: ./components/product/ProductForm.vue + 3 modules
var ProductForm = __webpack_require__(502);

// EXTERNAL MODULE: ./components/PriceListForm.vue + 4 modules
var PriceListForm = __webpack_require__(476);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./components/product/ProductFormCreate.vue + 3 modules
var ProductFormCreate = __webpack_require__(501);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(144);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./components/pos/recipe/index.vue + 4 modules
var recipe = __webpack_require__(1051);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/productlist.vue?vue&type=script&lang=js























/* harmony default export */ var productlistvue_type_script_lang_js = ({
  components: {
    ProductForm: ProductForm["default"],
    ProductFormCreate: ProductFormCreate["default"],
    PriceListForm: PriceListForm["default"],
    RecipeManagement: recipe["default"]
  },
  middleware: 'auths',
  data() {
    return {
      // Tab management
      activeTab: 0,
      // Recipe-related data
      productRecipeDialog: false,
      selectedProductForRecipe: null,
      productRecipes: [],
      loadingRecipes: false,
      totalRecipeCost: 0,
      profitMargin: 0,
      recipeHeaders: [{
        text: 'ວັດຖຸດິບ',
        value: 'ingredient',
        width: '30%'
      }, {
        text: 'ປະລິມານ',
        value: 'quantity',
        width: '15%',
        align: 'center'
      }, {
        text: 'ລາຄາຕໍ່ຫົວໜ່ວຍ',
        value: 'unitCost',
        width: '20%',
        align: 'right'
      }, {
        text: 'ຕົ້ນທຶນລວມ',
        value: 'totalCost',
        width: '20%',
        align: 'right'
      }, {
        text: 'ຈັດການ',
        value: 'actions',
        width: '15%',
        align: 'center',
        sortable: false
      }],
      // Existing data
      priceListDialog: false,
      priceListFormKey: 1,
      guidelineDialog: false,
      pricingRecordId: null,
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedId: 0,
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      timer: null,
      headers: [{
        text: 'RECID',
        align: 'center',
        value: 'id'
      }, {
        text: 'Company',
        align: 'center',
        value: 'co_name'
      }, {
        text: 'ຊື່ສິນຄ້າ',
        align: 'center',
        value: 'pro_name'
      }, {
        text: 'ຫມວດສິນຄ້າ',
        align: 'center',
        value: 'pro_category_desc'
      }, {
        text: 'ລາຄາ',
        align: 'center',
        value: 'pro_price'
      }, {
        text: 'minStock',
        align: 'center',
        value: 'minStock'
      }, {
        text: 'Stock',
        align: 'center',
        value: 'pro_card_count'
      }, {
        text: 'Status',
        align: 'center',
        value: 'status'
      }, {
        text: 'Vendor',
        align: 'center',
        value: 'vendorName'
      }, {
        text: 'cost',
        align: 'center',
        value: 'pro_cost_price'
      }, {
        text: 'ສູດອາຫານ',
        align: 'center',
        value: 'functionRecipe',
        sortable: false
      }, {
        text: 'ເພີ່ມສະຕັອກ',
        align: 'center',
        value: 'functionStock',
        sortable: false
      }, {
        text: 'ເບິ່ງສະຕັອກ',
        align: 'center',
        value: 'functionStockView',
        sortable: false
      }, {
        text: 'ຈັດການລາຄາ',
        align: 'center',
        value: 'pricing',
        sortable: false
      }, {
        text: 'ແກ້ໄຂ',
        align: 'center',
        value: 'functionEdit',
        sortable: false
      }]
    };
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true;
        return;
      }
      this.dialogMessage = false;
    }
  },
  async mounted() {
    await this.loadCardCategory();
    await this.fetchData();
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['currentSelectedLocation', 'findAllLocation'])
  },
  methods: {
    // Recipe-related methods
    async viewProductRecipes(product) {
      this.selectedProductForRecipe = product;
      this.productRecipeDialog = true;
      await this.loadProductRecipes(product.id);
    },
    async loadProductRecipes(productId) {
      this.loadingRecipes = true;
      try {
        const response = await this.$axios.get(`/api/recipes/product/${productId}`);
        if (response.data.success) {
          this.productRecipes = response.data.data.recipes || [];
          this.calculateRecipeTotals();
        }
      } catch (error) {
        console.error('Error loading product recipes:', error);
        this.$toast.error('Error loading recipes');
        this.productRecipes = [];
      } finally {
        this.loadingRecipes = false;
      }
    },
    calculateRecipeTotals() {
      var _this$selectedProduct;
      this.totalRecipeCost = this.productRecipes.reduce((total, recipe) => {
        var _recipe$ingredient;
        const ingredientCost = (((_recipe$ingredient = recipe.ingredient) === null || _recipe$ingredient === void 0 ? void 0 : _recipe$ingredient.pro_price) || 0) * recipe.quantity;
        return total + ingredientCost;
      }, 0);
      this.profitMargin = (((_this$selectedProduct = this.selectedProductForRecipe) === null || _this$selectedProduct === void 0 ? void 0 : _this$selectedProduct.pro_price) || 0) - this.totalRecipeCost;
    },
    createRecipeForProduct() {
      // Switch to recipe tab and trigger create with pre-selected product
      this.activeTab = 1;
      this.productRecipeDialog = false;
      this.$nextTick(() => {
        if (this.$refs.recipeManagement) {
          this.$refs.recipeManagement.openCreateDialogWithProduct(this.selectedProductForRecipe);
        }
      });
    },
    // NEW: Direct create recipe from product list
    createRecipeFromProductList(product) {
      // Switch to recipe tab
      this.activeTab = 1;

      // Wait for the RecipeManagement component to be rendered
      this.$nextTick(() => {
        if (this.$refs.recipeManagement) {
          this.$refs.recipeManagement.openCreateDialogWithProduct(product);
        }
      });
    },
    editRecipeFromProduct(recipe) {
      // Switch to recipe tab and trigger edit
      this.activeTab = 1;
      this.productRecipeDialog = false;
      this.$nextTick(() => {
        if (this.$refs.recipeManagement) {
          this.$refs.recipeManagement.openEditDialog(recipe);
        }
      });
    },
    async calculateProductionCost() {
      if (!this.selectedProductForRecipe) return;
      try {
        const response = await this.$axios.get(`/api/recipes/product/${this.selectedProductForRecipe.id}/cost`, {
          params: {
            quantity: 1
          }
        });
        if (response.data.success) {
          const costData = response.data.data;

          // Show detailed cost breakdown
          this.$toast.success(`Production Cost: ${this.formatNumber(costData.totalCost)} LAK`);

          // You could also show a detailed dialog here with the cost breakdown
          console.log('Cost breakdown:', costData.costBreakdown);
        }
      } catch (error) {
        console.error('Error calculating production cost:', error);
        this.$toast.error('Error calculating production cost');
      }
    },
    closeProductRecipeDialog() {
      this.productRecipeDialog = false;
      this.selectedProductForRecipe = null;
      this.productRecipes = [];
      this.totalRecipeCost = 0;
      this.profitMargin = 0;
    },
    // Existing methods (keeping all your original functionality)
    exportToExcel() {
      // Get all unique price list grades from the data
      const allGrades = new Set();
      this.loaddata.forEach(item => {
        console.info(`Additional product ${JSON.stringify(item)}`);
        if (item.priceLists && item.priceLists.length > 0) {
          item.priceLists.forEach(priceList => {
            if (priceList.grade) {
              allGrades.add(priceList.grade);
            }
          });
        }
      });

      // Convert to sorted array for consistent column order
      const sortedGrades = Array.from(allGrades).sort();

      // Base header map
      const headerMap = {
        id: 'ID',
        co_name: 'Company Name',
        pro_id: 'Product Code',
        pro_name: 'Product Name',
        barCode: 'Barcode',
        pro_cost_price: 'Cost Price',
        pro_price: 'Base Price',
        effectivePrice: 'Current Price',
        pro_desc: 'Product Description',
        categ_name: 'Category',
        card_count: 'Stock',
        minStock: 'Minimum Stock'
      };

      // Add dynamic price list columns
      sortedGrades.forEach(grade => {
        headerMap[`price_${grade}`] = `Price ${grade}`;
      });

      // Transform data with dynamic price list fields
      const transformedData = this.loaddata.map(item => {
        let newItem = {};

        // Map base fields
        Object.keys(headerMap).forEach(key => {
          if (key.startsWith('price_')) {
            var _item$priceLists;
            // Handle dynamic price list fields
            const grade = key.replace('price_', '');
            const priceList = (_item$priceLists = item.priceLists) === null || _item$priceLists === void 0 ? void 0 : _item$priceLists.find(pl => pl.grade === grade);
            newItem[headerMap[key]] = priceList ? priceList.amount : '';
          } else if (item.hasOwnProperty(key)) {
            newItem[headerMap[key]] = item[key];
          }
        });
        return newItem;
      });

      // Create Excel file
      const worksheet = this.$xlsx.utils.json_to_sheet(transformedData);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Products with Price Lists');

      // Generate filename with timestamp
      const timestamp = new Date().toISOString().slice(0, 10);
      this.$xlsx.writeFile(workbook, `products_with_pricelists_${timestamp}.xlsx`);
    },
    ...Object(external_vuex_["mapActions"])(['setSelectedTerminal', 'setSelectedLocation', 'initProduct']),
    triggerPriceListForm(item) {
      this.pricingRecordId = item.id;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    getStatusChipColor(minStock, curStock) {
      if (curStock == 0) {
        return 'error'; // Out of stock - use error theme color
      } else if (minStock < curStock) {
        return 'primary'; // In stock - use primary theme color
      } else {
        return 'warning'; // Low stock - use warning theme color
      }
    },
    verifyStockStatus(minStock, CurStock) {
      let statusStock = '';
      CurStock == 0 ? statusStock = 'Out of stock' : minStock < CurStock ? statusStock = 'In stock' : statusStock = 'Low stock';
      return statusStock;
    },
    triggerCardForm(payload) {
      this.stockFormKey += 1;
      this.selectedProductId = payload.pro_id;
      this.selectedId = payload.id;
      this.selectedProductCost = payload.pro_cost_price;
      this.selectedProductName = payload.pro_name;
      this.isstock = true;
    },
    async fetchData() {
      console.log(`PRODUCT LIST ===>`);
      this.isloading = true;
      await this.$axios.get(`product_f/${this.currentSelectedLocation['id']}`, {
        params: {
          include: 'priceList'
        }
      }).then(res => {
        this.initProduct(res.data.data);
        this.loaddata = res.data.data.map(el => {
          console.log(el.co_name);
          return {
            id: el.id,
            co_name: el.co_name,
            pro_id: el.pro_id,
            pro_name: el.pro_name,
            pro_price: el.pro_price,
            _category: el._category,
            pro_desc: el.pro_desc,
            pro_status: el.pro_status,
            pro_category: el.pro_category,
            pro_category_desc: el.pro_category + ' - ' + el.categ_name,
            pro_card_count: el.card_count,
            pro_cost_price: el.cost_price,
            pro_outlet: el.outlet,
            vendorName: el.vendorName,
            pro_outlet_name: el.outlet_name,
            barCode: el.barCode,
            minStock: el.minStock,
            functionEdit: el.pro_id,
            functionStock: el.pro_id,
            functionRecipe: el.pro_id,
            // Added recipe function
            pricing: el.pro_id,
            priceLists: el.priceLists,
            functionStockView: el.pro_id,
            status: el.pro_id
          };
        });
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
      this.isloading = false;
    },
    editItem(item) {
      this.productFormKey += 1;
      this.selectedProductId = item.pro_id;
      this.editProductForm = true;
    },
    editStock(idx) {
      console.log('ID ' + idx.pro_id);
      console.log('NAME ' + idx.pro_name);
      console.log('OBJ ' + Object.keys(idx));
      // this.$router.push(`/admin/stock/${idx.pro_id}`)
      // this.$router.push(`/admin/stock/${idx.pro_id}/${encodeURIComponent(idx.pro_name)}`)
      this.$router.push({
        path: `/admin/stock/${idx.pro_id}`,
        query: {
          name: idx.pro_name,
          // You can add more query params
          category: idx.category || '',
          price: idx.price || ''
        }
      });
    },
    loadCardCategory() {
      this.isloading = true;
      this.$axios.get('stockcate_f').then(res => {
        this.cardType = res.data.map(el => {
          return {
            card_type_code: el.card_type_code,
            card_type_name: el.card_type_name
          };
        });
        this.selectedCardType = this.cardType[0].card_type_code;
        console.log('CARD LEN: ' + this.cardType.length);
        console.log('CARD LEN: ' + this.cardType[0].card_type_code);
        this.isloading = false;
      }).catch(er => {
        console.log('Error: ' + er);
        this.isloading = false;
      });
    },
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true;
        await this.$axios.put('/api/product/stockcount').then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.fetchData();
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, 'Error', error.response.data);
        });
        this.isloading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/product/productlist.vue?vue&type=script&lang=js
 /* harmony default export */ var product_productlistvue_type_script_lang_js = (productlistvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/product/productlist.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1263)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_productlistvue_type_script_lang_js,
  productlistvue_type_template_id_e9affa26_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "e9affa26",
  "16a8b308"
  
)

/* harmony default export */ var productlist = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {YoutubePlayer: __webpack_require__(466).default,LoadingIndicator: __webpack_require__(67).default,DialogClassicMessage: __webpack_require__(465).default,CardForm: __webpack_require__(640).default,ProductForm: __webpack_require__(502).default,ProductFormCreate: __webpack_require__(501).default,PriceListForm: __webpack_require__(476).default})


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);


/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'localable',
  props: {
    locale: String
  },
  computed: {
    currentLocale() {
      return this.locale || this.$vuetify.lang.current;
    }
  }
}));

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLeapYear; });
function createUTCDate(year, month = 0, day = 1) {
  let date;
  if (year < 100 && year >= 0) {
    date = new Date(Date.UTC(year, month, day));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(year);
    }
  } else {
    date = new Date(Date.UTC(year, month, day));
  }
  return date;
}
function firstWeekOffset(year, firstDayOfWeek, firstDayOfYear) {
  const firstWeekDayInFirstWeek = 7 + firstDayOfWeek - firstDayOfYear;
  const firstWeekDayOfYear = (7 + createUTCDate(year, 0, firstWeekDayInFirstWeek).getUTCDay() - firstDayOfWeek) % 7;
  return -firstWeekDayOfYear + firstWeekDayInFirstWeek - 1;
}
function dayOfYear(year, month, day, firstDayOfWeek) {
  let dayOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month];
  if (month > 1 && isLeapYear(year)) {
    dayOfYear++;
  }
  return dayOfYear + day;
}
function weeksInYear(year, firstDayOfWeek, firstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, firstDayOfYear);
  const weekOffsetNext = firstWeekOffset(year + 1, firstDayOfWeek, firstDayOfYear);
  const daysInYear = isLeapYear(year) ? 366 : 365;
  return (daysInYear - weekOffset + weekOffsetNext) / 7;
}
function weekNumber(year, month, day, firstDayOfWeek, localeFirstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, localeFirstDayOfYear);
  const week = Math.ceil((dayOfYear(year, month, day, firstDayOfWeek) - weekOffset) / 7);
  if (week < 1) {
    return week + weeksInYear(year - 1, firstDayOfWeek, localeFirstDayOfYear);
  } else if (week > weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear)) {
    return week - weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear);
  } else {
    return week;
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(444);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 444:
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

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PARSE_REGEX */
/* unused harmony export PARSE_TIME */
/* unused harmony export DAYS_IN_MONTH */
/* unused harmony export DAYS_IN_MONTH_LEAP */
/* unused harmony export DAYS_IN_MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAYS_IN_MONTH_MAX; });
/* unused harmony export MONTH_MAX */
/* unused harmony export MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DAY_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DAYS_IN_WEEK; });
/* unused harmony export MINUTES_IN_HOUR */
/* unused harmony export MINUTE_MAX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINUTES_IN_DAY; });
/* unused harmony export HOURS_IN_DAY */
/* unused harmony export HOUR_MAX */
/* unused harmony export FIRST_HOUR */
/* unused harmony export OFFSET_YEAR */
/* unused harmony export OFFSET_MONTH */
/* unused harmony export OFFSET_HOUR */
/* unused harmony export OFFSET_TIME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getStartOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getEndOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getStartOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getEndOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return validateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return parseTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return validateTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return parseTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getDayIdentifier; });
/* unused harmony export getTimeIdentifier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getTimestampIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return updateRelative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isTimedless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return updateHasTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return updateMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return updateWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return updateFormatted; });
/* unused harmony export getWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return copyTimestamp; });
/* unused harmony export padNumber */
/* unused harmony export getDate */
/* unused harmony export getTime */
/* unused harmony export nextMinutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return nextDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return prevDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return relativeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return diffMinutes; });
/* unused harmony export findWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getWeekdaySkips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return timestampToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createDayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createIntervalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createNativeLocaleFormatter; });
/* harmony import */ var _util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);

const PARSE_REGEX = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/;
const PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/;
const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_MIN = 28;
const DAYS_IN_MONTH_MAX = 31;
const MONTH_MAX = 12;
const MONTH_MIN = 1;
const DAY_MIN = 1;
const DAYS_IN_WEEK = 7;
const MINUTES_IN_HOUR = 60;
const MINUTE_MAX = 59;
const MINUTES_IN_DAY = 24 * 60;
const HOURS_IN_DAY = 24;
const HOUR_MAX = 23;
const FIRST_HOUR = 0;
const OFFSET_YEAR = 10000;
const OFFSET_MONTH = 100;
const OFFSET_HOUR = 100;
const OFFSET_TIME = 10000;
function getStartOfWeek(timestamp, weekdays, today) {
  const start = copyTimestamp(timestamp);
  findWeekday(start, weekdays[0], prevDay);
  updateFormatted(start);
  if (today) {
    updateRelative(start, today, start.hasTime);
  }
  return start;
}
function getEndOfWeek(timestamp, weekdays, today) {
  const end = copyTimestamp(timestamp);
  findWeekday(end, weekdays[weekdays.length - 1]);
  updateFormatted(end);
  if (today) {
    updateRelative(end, today, end.hasTime);
  }
  return end;
}
function getStartOfMonth(timestamp) {
  const start = copyTimestamp(timestamp);
  start.day = DAY_MIN;
  updateWeekday(start);
  updateFormatted(start);
  return start;
}
function getEndOfMonth(timestamp) {
  const end = copyTimestamp(timestamp);
  end.day = daysInMonth(end.year, end.month);
  updateWeekday(end);
  updateFormatted(end);
  return end;
}
function validateTime(input) {
  return typeof input === 'number' && isFinite(input) || !!PARSE_TIME.exec(input) || typeof input === 'object' && isFinite(input.hour) && isFinite(input.minute);
}
function parseTime(input) {
  if (typeof input === 'number') {
    // when a number is given, it's minutes since 12:00am
    return input;
  } else if (typeof input === 'string') {
    // when a string is given, it's a hh:mm:ss format where seconds are optional
    const parts = PARSE_TIME.exec(input);
    if (!parts) {
      return false;
    }
    return parseInt(parts[1]) * 60 + parseInt(parts[3] || 0);
  } else if (typeof input === 'object') {
    // when an object is given, it must have hour and minute
    if (typeof input.hour !== 'number' || typeof input.minute !== 'number') {
      return false;
    }
    return input.hour * 60 + input.minute;
  } else {
    // unsupported type
    return false;
  }
}
function validateTimestamp(input) {
  return typeof input === 'number' && isFinite(input) || typeof input === 'string' && !!PARSE_REGEX.exec(input) || input instanceof Date;
}
function parseTimestamp(input, required = false, now) {
  if (typeof input === 'number' && isFinite(input)) {
    input = new Date(input);
  }
  if (input instanceof Date) {
    const date = parseDate(input);
    if (now) {
      updateRelative(date, now, date.hasTime);
    }
    return date;
  }
  if (typeof input !== 'string') {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  } // YYYY-MM-DD hh:mm:ss

  const parts = PARSE_REGEX.exec(input);
  if (!parts) {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  }
  const timestamp = {
    date: input,
    time: '',
    year: parseInt(parts[1]),
    month: parseInt(parts[2]),
    day: parseInt(parts[4]) || 1,
    hour: parseInt(parts[6]) || 0,
    minute: parseInt(parts[8]) || 0,
    weekday: 0,
    hasDay: !!parts[4],
    hasTime: !!(parts[6] && parts[8]),
    past: false,
    present: false,
    future: false
  };
  updateWeekday(timestamp);
  updateFormatted(timestamp);
  if (now) {
    updateRelative(timestamp, now, timestamp.hasTime);
  }
  return timestamp;
}
function parseDate(date) {
  return updateFormatted({
    date: '',
    time: '',
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    hasDay: true,
    hasTime: true,
    past: false,
    present: true,
    future: false
  });
}
function getDayIdentifier(timestamp) {
  return timestamp.year * OFFSET_YEAR + timestamp.month * OFFSET_MONTH + timestamp.day;
}
function getTimeIdentifier(timestamp) {
  return timestamp.hour * OFFSET_HOUR + timestamp.minute;
}
function getTimestampIdentifier(timestamp) {
  return getDayIdentifier(timestamp) * OFFSET_TIME + getTimeIdentifier(timestamp);
}
function updateRelative(timestamp, now, time = false) {
  let a = getDayIdentifier(now);
  let b = getDayIdentifier(timestamp);
  let present = a === b;
  if (timestamp.hasTime && time && present) {
    a = getTimeIdentifier(now);
    b = getTimeIdentifier(timestamp);
    present = a === b;
  }
  timestamp.past = b < a;
  timestamp.present = present;
  timestamp.future = b > a;
  return timestamp;
}
function isTimedless(input) {
  return input instanceof Date || typeof input === 'number' && isFinite(input);
}
function updateHasTime(timestamp, hasTime, now) {
  if (timestamp.hasTime !== hasTime) {
    timestamp.hasTime = hasTime;
    if (!hasTime) {
      timestamp.hour = HOUR_MAX;
      timestamp.minute = MINUTE_MAX;
      timestamp.time = getTime(timestamp);
    }
    if (now) {
      updateRelative(timestamp, now, timestamp.hasTime);
    }
  }
  return timestamp;
}
function updateMinutes(timestamp, minutes, now) {
  timestamp.hasTime = true;
  timestamp.hour = Math.floor(minutes / MINUTES_IN_HOUR);
  timestamp.minute = minutes % MINUTES_IN_HOUR;
  timestamp.time = getTime(timestamp);
  if (now) {
    updateRelative(timestamp, now, true);
  }
  return timestamp;
}
function updateWeekday(timestamp) {
  timestamp.weekday = getWeekday(timestamp);
  return timestamp;
}
function updateFormatted(timestamp) {
  timestamp.time = getTime(timestamp);
  timestamp.date = getDate(timestamp);
  return timestamp;
}
function getWeekday(timestamp) {
  if (timestamp.hasDay) {
    const _ = Math.floor;
    const k = timestamp.day;
    const m = (timestamp.month + 9) % MONTH_MAX + 1;
    const C = _(timestamp.year / 100);
    const Y = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
    return ((k + _(2.6 * m - 0.2) - 2 * C + Y + _(Y / 4) + _(C / 4)) % 7 + 7) % 7;
  }
  return timestamp.weekday;
}
function daysInMonth(year, month) {
  return Object(_util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__[/* isLeapYear */ "a"])(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
}
function copyTimestamp(timestamp) {
  const {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  } = timestamp;
  return {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  };
}
function padNumber(x, length) {
  let padded = String(x);
  while (padded.length < length) {
    padded = '0' + padded;
  }
  return padded;
}
function getDate(timestamp) {
  let str = `${padNumber(timestamp.year, 4)}-${padNumber(timestamp.month, 2)}`;
  if (timestamp.hasDay) str += `-${padNumber(timestamp.day, 2)}`;
  return str;
}
function getTime(timestamp) {
  if (!timestamp.hasTime) {
    return '';
  }
  return `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
}
function nextMinutes(timestamp, minutes) {
  timestamp.minute += minutes;
  while (timestamp.minute > MINUTES_IN_HOUR) {
    timestamp.minute -= MINUTES_IN_HOUR;
    timestamp.hour++;
    if (timestamp.hour >= HOURS_IN_DAY) {
      nextDay(timestamp);
      timestamp.hour = FIRST_HOUR;
    }
  }
  return timestamp;
}
function nextDay(timestamp) {
  timestamp.day++;
  timestamp.weekday = (timestamp.weekday + 1) % DAYS_IN_WEEK;
  if (timestamp.day > DAYS_IN_MONTH_MIN && timestamp.day > daysInMonth(timestamp.year, timestamp.month)) {
    timestamp.day = DAY_MIN;
    timestamp.month++;
    if (timestamp.month > MONTH_MAX) {
      timestamp.month = MONTH_MIN;
      timestamp.year++;
    }
  }
  return timestamp;
}
function prevDay(timestamp) {
  timestamp.day--;
  timestamp.weekday = (timestamp.weekday + 6) % DAYS_IN_WEEK;
  if (timestamp.day < DAY_MIN) {
    timestamp.month--;
    if (timestamp.month < MONTH_MIN) {
      timestamp.year--;
      timestamp.month = MONTH_MAX;
    }
    timestamp.day = daysInMonth(timestamp.year, timestamp.month);
  }
  return timestamp;
}
function relativeDays(timestamp, mover = nextDay, days = 1) {
  while (--days >= 0) mover(timestamp);
  return timestamp;
}
function diffMinutes(min, max) {
  const Y = (max.year - min.year) * 525600;
  const M = (max.month - min.month) * 43800;
  const D = (max.day - min.day) * 1440;
  const h = (max.hour - min.hour) * 60;
  const m = max.minute - min.minute;
  return Y + M + D + h + m;
}
function findWeekday(timestamp, weekday, mover = nextDay, maxDays = 6) {
  while (timestamp.weekday !== weekday && --maxDays >= 0) mover(timestamp);
  return timestamp;
}
function getWeekdaySkips(weekdays) {
  const skips = [1, 1, 1, 1, 1, 1, 1];
  const filled = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < weekdays.length; i++) {
    filled[weekdays[i]] = 1;
  }
  for (let k = 0; k < DAYS_IN_WEEK; k++) {
    let skip = 1;
    for (let j = 1; j < DAYS_IN_WEEK; j++) {
      const next = (k + j) % DAYS_IN_WEEK;
      if (filled[next]) {
        break;
      }
      skip++;
    }
    skips[k] = filled[k] * skip;
  }
  return skips;
}
function timestampToDate(timestamp) {
  const time = `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
  const date = timestamp.date;
  return new Date(`${date}T${time}:00+00:00`);
}
function createDayList(start, end, now, weekdaySkips, max = 42, min = 0) {
  const stop = getDayIdentifier(end);
  const days = [];
  let current = copyTimestamp(start);
  let currentIdentifier = 0;
  let stopped = currentIdentifier === stop;
  if (stop < getDayIdentifier(start)) {
    throw new Error('End date is earlier than start date.');
  }
  while ((!stopped || days.length < min) && days.length < max) {
    currentIdentifier = getDayIdentifier(current);
    stopped = stopped || currentIdentifier === stop;
    if (weekdaySkips[current.weekday] === 0) {
      current = nextDay(current);
      continue;
    }
    const day = copyTimestamp(current);
    updateFormatted(day);
    updateRelative(day, now);
    days.push(day);
    current = relativeDays(current, nextDay, weekdaySkips[current.weekday]);
  }
  if (!days.length) throw new Error('No dates found using specified start date, end date, and weekdays.');
  return days;
}
function createIntervalList(timestamp, first, minutes, count, now) {
  const intervals = [];
  for (let i = 0; i < count; i++) {
    const mins = first + i * minutes;
    const int = copyTimestamp(timestamp);
    intervals.push(updateMinutes(int, mins, now));
  }
  return intervals;
}
function createNativeLocaleFormatter(locale, getOptions) {
  const emptyFormatter = (_t, _s) => '';
  if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
    return emptyFormatter;
  }
  return (timestamp, short) => {
    try {
      const intlFormatter = new Intl.DateTimeFormat(locale || undefined, getOptions(timestamp, short));
      return intlFormatter.format(timestampToDate(timestamp));
    } catch (e) {
      return '';
    }
  };
}

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(448);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 448:
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

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(451);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("265ccd52", content, true)

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:4px;contain:layout style;display:inline-flex;flex-direction:column;font-size:1rem;position:relative;vertical-align:top}.v-picker--full-width{display:flex;width:100%}.v-picker--full-width>.v-picker__body{margin:initial}.v-picker__title{border-top-left-radius:4px;border-top-right-radius:4px;color:#fff;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){cursor:pointer;opacity:.6}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{align-items:center;display:flex;flex:1 0 auto;flex-direction:column;height:auto;margin:0 auto;overflow:hidden;position:relative;z-index:0}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-bottom-right-radius:0;border-top-right-radius:0;height:100%;position:absolute;top:0;width:170px;z-index:1}.v-application--is-ltr .v-picker--landscape .v-picker__title{left:0}.v-application--is-rtl .v-picker--landscape .v-picker__title{right:0}.v-application--is-ltr .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-ltr .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:170px;margin-right:0}.v-application--is-rtl .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-rtl .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:0;margin-right:170px}.v-picker--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(453);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ec842454", content, true)

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-title{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;line-height:1}.v-application--is-ltr .v-date-picker-title .v-picker__title__btn{text-align:left}.v-application--is-rtl .v-date-picker-title .v-picker__title__btn{text-align:right}.v-date-picker-title__year{align-items:center;display:inline-flex;font-size:14px;font-weight:500;margin-bottom:8px}.v-date-picker-title__date{font-size:34px;font-weight:500;margin-bottom:-8px;overflow:hidden;padding-bottom:8px;position:relative;text-align:left}.v-date-picker-title__date>div{position:relative}.v-date-picker-title--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(455);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("075924a4", content, true)

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:rgba(0,0,0,.87)}.theme--light.v-date-picker-header .v-date-picker-header__value--disabled button{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:#fff}.theme--dark.v-date-picker-header .v-date-picker-header__value--disabled button{color:hsla(0,0%,100%,.5)}.v-date-picker-header{align-items:center;display:flex;justify-content:space-between;padding:4px 16px;position:relative}.v-date-picker-header .v-btn{margin:0;z-index:auto}.v-date-picker-header .v-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-date-picker-header__value{flex:1;overflow:hidden;position:relative;text-align:center}.v-date-picker-header__value div{transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-header__value button{cursor:pointer;font-weight:700;outline:none;padding:.5rem;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-date-picker-header--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(457);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0f7d136a", content, true)

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-table .v-date-picker-table--date__week,.theme--light.v-date-picker-table th{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-table .v-date-picker-table--date__week,.theme--dark.v-date-picker-table th{color:hsla(0,0%,100%,.5)}.v-date-picker-table{height:242px;padding:0 12px;position:relative}.v-date-picker-table table{table-layout:fixed;top:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-table td,.v-date-picker-table th{position:relative;text-align:center}.v-date-picker-table th{font-size:12px}.v-date-picker-table--date .v-btn{height:32px;width:32px}.v-date-picker-table .v-btn{font-size:12px;margin:0;z-index:auto}.v-date-picker-table .v-btn.v-btn--active{color:#fff}.v-date-picker-table--month td{height:56px;text-align:center;vertical-align:middle;width:33.333333%}.v-date-picker-table--month td .v-btn{margin:0 auto;max-width:140px;min-width:40px;width:100%}.v-date-picker-table--date th{font-weight:600;padding:8px 0}.v-date-picker-table--date td{width:45px}.v-date-picker-table__events{height:8px;left:0;position:absolute;text-align:center;white-space:pre;width:100%}.v-date-picker-table__events>div{border-radius:50%;display:inline-block;height:8px;margin:0 1px;width:8px}.v-date-picker-table--date .v-date-picker-table__events{bottom:6px}.v-date-picker-table--month .v-date-picker-table__events{bottom:8px}.v-date-picker-table__current .v-date-picker-table__events{margin-bottom:-1px}.v-date-picker-table--disabled{pointer-events:none}", ""]);
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
__webpack_require__(5).default("4dc2915a", content, true)

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-years{font-size:16px;font-weight:400;height:290px;list-style-type:none;overflow:auto;text-align:center}.v-date-picker-years.v-date-picker-years{padding:0}.v-date-picker-years li{cursor:pointer;padding:8px 0;transition:none}.v-date-picker-years li.active{font-size:26px;font-weight:500;padding:10px 0}.v-date-picker-years li:hover{background:rgba(0,0,0,.12)}.v-picker--landscape .v-date-picker-years{height:290px;padding:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(462);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 462:
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(443);
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

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34








var DialogClassicMessagevue_type_template_id_3accbb34_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5 grey lighten-2"
  }, [_vm._v(" ຂໍ້ຄວາມ ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v(" ຕົກລົງ ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=script&lang=js
/* harmony default export */ var DialogClassicMessagevue_type_script_lang_js = ({
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleDialog() {
      this.$emit('closedialog');
    }
  }
});
// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DialogClassicMessagevue_type_script_lang_js = (DialogClassicMessagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DialogClassicMessagevue_type_script_lang_js,
  DialogClassicMessagevue_type_template_id_3accbb34_render,
  staticRenderFns,
  false,
  null,
  null,
  "cf974660"
  
)

/* harmony default export */ var DialogClassicMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/YoutubePlayer.vue?vue&type=template&id=ba62a84e






var YoutubePlayervue_type_template_id_ba62a84e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center"
  }, [_c('youtube', {
    attrs: {
      "video-id": _vm.youtubeLink
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "warning",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                Close\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/YoutubePlayer.vue?vue&type=template&id=ba62a84e

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/YoutubePlayer.vue?vue&type=script&lang=js

/* harmony default export */ var YoutubePlayervue_type_script_lang_js = ({
  props: {
    youtubeLink: {
      type: String,
      require: true
    }
  }
});
// CONCATENATED MODULE: ./components/YoutubePlayer.vue?vue&type=script&lang=js
 /* harmony default export */ var components_YoutubePlayervue_type_script_lang_js = (YoutubePlayervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/YoutubePlayer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_YoutubePlayervue_type_script_lang_js,
  YoutubePlayervue_type_template_id_ba62a84e_render,
  staticRenderFns,
  false,
  null,
  null,
  "9fefcabe"
  
)

/* harmony default export */ var YoutubePlayer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(447);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(196);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
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

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTitle.sass
var VDatePickerTitle = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker-button/index.js
// Mixins
 // Utilities



/* @vue/component */

/* harmony default export */ var picker_button = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  methods: {
    genPickerButton(prop, value, content, readonly = false, staticClass = '') {
      const active = this[prop] === value;
      const click = event => {
        event.stopPropagation();
        this.$emit(`update:${Object(helpers["x" /* kebabCase */])(prop)}`, value);
      };
      return this.$createElement('div', {
        staticClass: `v-picker__title__btn ${staticClass}`.trim(),
        class: {
          'v-picker__title__btn--active': active,
          'v-picker__title__btn--readonly': readonly
        },
        on: active || readonly ? undefined : {
          click
        }
      }, Array.isArray(content) ? content : [content]);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerTitle.js
 // Components

 // Mixins

 // Utils


/* harmony default export */ var VDatePicker_VDatePickerTitle = (Object(mixins["a" /* default */])(picker_button
/* @vue/component */).extend({
  name: 'v-date-picker-title',
  props: {
    date: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    readonly: Boolean,
    selectingYear: Boolean,
    value: {
      type: String
    },
    year: {
      type: [Number, String],
      default: ''
    },
    yearIcon: {
      type: String
    }
  },
  data: () => ({
    isReversing: false
  }),
  computed: {
    computedTransition() {
      return this.isReversing ? 'picker-reverse-transition' : 'picker-transition';
    }
  },
  watch: {
    value(val, prev) {
      this.isReversing = val < prev;
    }
  },
  methods: {
    genYearIcon() {
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          dark: true
        }
      }, this.yearIcon);
    },
    getYearBtn() {
      return this.genPickerButton('selectingYear', true, [String(this.year), this.yearIcon ? this.genYearIcon() : null], false, 'v-date-picker-title__year');
    },
    genTitleText() {
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('div', {
        domProps: {
          innerHTML: this.date || '&nbsp;'
        },
        key: this.value
      })]);
    },
    genTitleDate() {
      return this.genPickerButton('selectingYear', false, [this.genTitleText()], false, 'v-date-picker-title__date');
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-date-picker-title',
      class: {
        'v-date-picker-title--disabled': this.disabled
      }
    }, [this.getYearBtn(), this.genTitleDate()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerHeader.sass
var VDatePickerHeader = __webpack_require__(454);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/localable/index.js
var localable = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/pad.js
const padStart = (string, targetLength, padString) => {
  targetLength = targetLength >> 0;
  string = String(string);
  padString = String(padString);
  if (string.length > targetLength) {
    return String(string);
  }
  targetLength = targetLength - string.length;
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length);
  }
  return padString.slice(0, targetLength) + String(string);
};
/* harmony default export */ var pad = ((n, length = 2) => padStart(n, length, '0'));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/createNativeLocaleFormatter.js

function createNativeLocaleFormatter(locale, options, substrOptions = {
  start: 0,
  length: 0
}) {
  const makeIsoString = dateString => {
    const [year, month, date] = dateString.trim().split(' ')[0].split('-');
    return [pad(year, 4), pad(month || 1), pad(date || 1)].join('-');
  };
  try {
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);
    return dateString => intlFormatter.format(new Date(`${makeIsoString(dateString)}T00:00:00+00:00`));
  } catch (e) {
    return substrOptions.start || substrOptions.length ? dateString => makeIsoString(dateString).substr(substrOptions.start || 0, substrOptions.length) : undefined;
  }
}
/* harmony default export */ var util_createNativeLocaleFormatter = (createNativeLocaleFormatter);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/monthChange.js

/**
 * @param {String} value YYYY-MM format
 * @param {Number} sign -1 or +1
 */

/* harmony default export */ var monthChange = ((value, sign) => {
  const [year, month] = value.split('-').map(Number);
  if (month + sign === 0) {
    return `${year - 1}-12`;
  } else if (month + sign === 13) {
    return `${year + 1}-01`;
  } else {
    return `${year}-${pad(month + sign)}`;
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerHeader.js
 // Components


 // Mixins



 // Utils



/* harmony default export */ var VDatePicker_VDatePickerHeader = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-header',
  props: {
    disabled: Boolean,
    format: Function,
    min: String,
    max: String,
    nextAriaLabel: String,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevAriaLabel: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    readonly: Boolean,
    value: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isReversing: false
    };
  },
  computed: {
    formatter() {
      if (this.format) {
        return this.format;
      } else if (String(this.value).split('-')[1]) {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 7
        });
      } else {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        });
      }
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  methods: {
    genBtn(change) {
      const ariaLabelId = change > 0 ? this.nextAriaLabel : this.prevAriaLabel;
      const ariaLabel = ariaLabelId ? this.$vuetify.lang.t(ariaLabelId) : undefined;
      const disabled = this.disabled || change < 0 && this.min && this.calculateChange(change) < this.min || change > 0 && this.max && this.calculateChange(change) > this.max;
      return this.$createElement(VBtn["a" /* default */], {
        attrs: {
          'aria-label': ariaLabel
        },
        props: {
          dark: this.dark,
          disabled,
          icon: true,
          light: this.light
        },
        on: {
          click: e => {
            e.stopPropagation();
            this.$emit('input', this.calculateChange(change));
          }
        }
      }, [this.$createElement(VIcon["a" /* default */], change < 0 === !this.$vuetify.rtl ? this.prevIcon : this.nextIcon)]);
    },
    calculateChange(sign) {
      const [year, month] = String(this.value).split('-').map(Number);
      if (month == null) {
        return `${year + sign}`;
      } else {
        return monthChange(String(this.value), sign);
      }
    },
    genHeader() {
      const color = !this.disabled && (this.color || 'accent');
      const header = this.$createElement('div', this.setTextColor(color, {
        key: String(this.value)
      }), [this.$createElement('button', {
        attrs: {
          type: 'button'
        },
        on: {
          click: () => this.$emit('toggle')
        }
      }, [this.$slots.default || this.formatter(String(this.value))])]);
      const transition = this.$createElement('transition', {
        props: {
          name: this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition'
        }
      }, [header]);
      return this.$createElement('div', {
        staticClass: 'v-date-picker-header__value',
        class: {
          'v-date-picker-header__value--disabled': this.disabled
        }
      }, [transition]);
    }
  },
  render() {
    return this.$createElement('div', {
      staticClass: 'v-date-picker-header',
      class: {
        'v-date-picker-header--disabled': this.disabled,
        ...this.themeClasses
      }
    }, [this.genBtn(-1), this.genHeader(), this.genBtn(+1)]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTable.sass
var VDatePickerTable = __webpack_require__(456);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(139);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/eventHelpers.js
function createItemTypeNativeListeners(instance, itemTypeSuffix, value) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName.slice(0, -itemTypeSuffix.length)] = event => instance.$emit(eventName, value, event);
    }
    return on;
  }, {});
}
function createItemTypeListeners(instance, itemTypeSuffix) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName] = instance.$listeners[eventName];
    }
    return on;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/sanitizeDateString.js
// Adds leading zero to month/day if necessary, returns 'YYYY' if type = 'year',
// 'YYYY-MM' if 'month' and 'YYYY-MM-DD' if 'date'

/* harmony default export */ var sanitizeDateString = ((dateString, type) => {
  const [year, month = 1, date = 1] = dateString.split('-');
  return `${year}-${pad(month)}-${pad(date)}`.substr(0, {
    date: 10,
    month: 7,
    year: 4
  }[type]);
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/isDateAllowed.js
function isDateAllowed(date, min, max, allowedFn) {
  return (!allowedFn || allowedFn(date)) && (!min || date >= min.substr(0, 10)) && (!max || date <= max);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/mixins/date-picker-table.js
 // Directives

 // Mixins



 // Utils






/* harmony default export */ var date_picker_table = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    allowedDates: Function,
    current: String,
    disabled: Boolean,
    format: Function,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    min: String,
    max: String,
    range: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    tableDate: {
      type: String,
      required: true
    },
    value: [String, Array]
  },
  data: () => ({
    isReversing: false,
    wheelThrottle: null
  }),
  computed: {
    computedTransition() {
      return this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition';
    },
    displayedMonth() {
      return Number(this.tableDate.split('-')[1]) - 1;
    },
    displayedYear() {
      return Number(this.tableDate.split('-')[0]);
    }
  },
  watch: {
    tableDate(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  mounted() {
    this.wheelThrottle = Object(helpers["G" /* throttle */])(this.wheel, 250);
  },
  methods: {
    genButtonClasses(isAllowed, isFloating, isSelected, isCurrent, isFirst, isLast) {
      return {
        'v-size--default': !isFloating,
        'v-date-picker-table__current': isCurrent,
        'v-btn--active': isSelected,
        'v-btn--flat': !isAllowed || this.disabled,
        'v-btn--text': isSelected === isCurrent,
        'v-btn--rounded': isFloating,
        'v-btn--disabled': !isAllowed || this.disabled,
        'v-btn--outlined': isCurrent && !isSelected,
        'v-date-picker--first-in-range': isFirst,
        'v-date-picker--last-in-range': isLast,
        ...this.themeClasses
      };
    },
    genButtonEvents(value, isAllowed, mouseEventType) {
      if (this.disabled) return undefined;
      return Object(mergeData["c" /* mergeListeners */])({
        click: () => {
          if (isAllowed && !this.readonly) this.$emit('input', value);
        }
      }, createItemTypeNativeListeners(this, `:${mouseEventType}`, value));
    },
    genButton(value, isFloating, mouseEventType, formatter, isOtherMonth = false) {
      const isAllowed = isDateAllowed(value, this.min, this.max, this.allowedDates);
      const isSelected = this.isSelected(value) && isAllowed;
      const isCurrent = value === this.current;
      const setColor = isSelected ? this.setBackgroundColor : this.setTextColor;
      const color = (isSelected || isCurrent) && (this.color || 'accent');
      let isFirst = false;
      let isLast = false;
      if (this.range && !!this.value && Array.isArray(this.value)) {
        isFirst = value === this.value[0];
        isLast = value === this.value[this.value.length - 1];
      }
      return this.$createElement('button', setColor(color, {
        staticClass: 'v-btn',
        class: this.genButtonClasses(isAllowed && !isOtherMonth, isFloating, isSelected, isCurrent, isFirst, isLast),
        attrs: {
          type: 'button'
        },
        domProps: {
          disabled: this.disabled || !isAllowed || isOtherMonth
        },
        on: this.genButtonEvents(value, isAllowed, mouseEventType)
      }), [this.$createElement('div', {
        staticClass: 'v-btn__content'
      }, [formatter(value)]), this.genEvents(value)]);
    },
    getEventColors(date) {
      const arrayize = v => Array.isArray(v) ? v : [v];
      let eventData;
      let eventColors = [];
      if (Array.isArray(this.events)) {
        eventData = this.events.includes(date);
      } else if (this.events instanceof Function) {
        eventData = this.events(date) || false;
      } else if (this.events) {
        eventData = this.events[date] || false;
      } else {
        eventData = false;
      }
      if (!eventData) {
        return [];
      } else if (eventData !== true) {
        eventColors = arrayize(eventData);
      } else if (typeof this.eventColor === 'string') {
        eventColors = [this.eventColor];
      } else if (typeof this.eventColor === 'function') {
        eventColors = arrayize(this.eventColor(date));
      } else if (Array.isArray(this.eventColor)) {
        eventColors = this.eventColor;
      } else {
        eventColors = arrayize(this.eventColor[date]);
      }
      return eventColors.filter(v => v);
    },
    genEvents(date) {
      const eventColors = this.getEventColors(date);
      return eventColors.length ? this.$createElement('div', {
        staticClass: 'v-date-picker-table__events'
      }, eventColors.map(color => this.$createElement('div', this.setBackgroundColor(color)))) : null;
    },
    isValidScroll(value, calculateTableDate) {
      const tableDate = calculateTableDate(value); // tableDate is 'YYYY-MM' for DateTable and 'YYYY' for MonthTable

      const sanitizeType = tableDate.split('-').length === 1 ? 'year' : 'month';
      return value < 0 && (this.min ? tableDate >= sanitizeDateString(this.min, sanitizeType) : true) || value > 0 && (this.max ? tableDate <= sanitizeDateString(this.max, sanitizeType) : true);
    },
    wheel(e, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(e.deltaY));
    },
    touch(value, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(value));
    },
    genTable(staticClass, children, calculateTableDate) {
      const transition = this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('table', {
        key: this.tableDate
      }, children)]);
      const touchDirective = {
        name: 'touch',
        value: {
          left: e => e.offsetX < -15 && this.isValidScroll(1, calculateTableDate) && this.touch(1, calculateTableDate),
          right: e => e.offsetX > 15 && this.isValidScroll(-1, calculateTableDate) && this.touch(-1, calculateTableDate)
        }
      };
      return this.$createElement('div', {
        staticClass,
        class: {
          'v-date-picker-table--disabled': this.disabled,
          ...this.themeClasses
        },
        on: !this.disabled && this.scrollable ? {
          wheel: e => {
            e.preventDefault();
            if (this.isValidScroll(e.deltaY, calculateTableDate)) {
              this.wheelThrottle(e, calculateTableDate);
            }
          }
        } : undefined,
        directives: [touchDirective]
      }, [transition]);
    },
    isSelected(value) {
      if (Array.isArray(this.value)) {
        if (this.range && this.value.length === 2) {
          const [from, to] = [...this.value].sort();
          return from <= value && value <= to;
        } else {
          return this.value.indexOf(value) !== -1;
        }
      }
      return value === this.value;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dateTimeUtils.js
var dateTimeUtils = __webpack_require__(442);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerDateTable.js
// Mixins
 // Utils





/* harmony default export */ var VDatePickerDateTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-date-table',
  props: {
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    weekdayFormat: Function
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        day: 'numeric',
        timeZone: 'UTC'
      }, {
        start: 8,
        length: 2
      });
    },
    weekdayFormatter() {
      return this.weekdayFormat || util_createNativeLocaleFormatter(this.currentLocale, {
        weekday: 'narrow',
        timeZone: 'UTC'
      });
    },
    weekDays() {
      const first = parseInt(this.firstDayOfWeek, 10);
      return this.weekdayFormatter ? Object(helpers["i" /* createRange */])(7).map(i => this.weekdayFormatter(`2017-01-${first + i + 15}`)) // 2017-01-15 is Sunday
      : Object(helpers["i" /* createRange */])(7).map(i => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][(i + first) % 7]);
    }
  },
  methods: {
    calculateTableDate(delta) {
      return monthChange(this.tableDate, Math.sign(delta || 1));
    },
    genTHead() {
      const days = this.weekDays.map(day => this.$createElement('th', day));
      if (this.showWeek) {
        days.unshift(this.$createElement('th'));
      }
      return this.$createElement('thead', this.genTR(days));
    },
    // Returns number of the days from the firstDayOfWeek to the first day of the current month
    weekDaysBeforeFirstDayOfTheMonth() {
      const firstDayOfTheMonth = new Date(`${this.displayedYear}-${pad(this.displayedMonth + 1)}-01T00:00:00+00:00`);
      const weekDay = firstDayOfTheMonth.getUTCDay();
      return (weekDay - parseInt(this.firstDayOfWeek) + 7) % 7;
    },
    getWeekNumber(dayInMonth) {
      return Object(dateTimeUtils["b" /* weekNumber */])(this.displayedYear, this.displayedMonth, dayInMonth, parseInt(this.firstDayOfWeek), parseInt(this.localeFirstDayOfYear));
    },
    genWeekNumber(weekNumber) {
      return this.$createElement('td', [this.$createElement('small', {
        staticClass: 'v-date-picker-table--date__week'
      }, String(weekNumber).padStart(2, '0'))]);
    },
    // eslint-disable-next-line max-statements
    genTBody() {
      const children = [];
      const daysInMonth = new Date(this.displayedYear, this.displayedMonth + 1, 0).getDate();
      let rows = [];
      let day = this.weekDaysBeforeFirstDayOfTheMonth();
      if (this.showWeek) {
        rows.push(this.genWeekNumber(this.getWeekNumber(1)));
      }
      const prevMonthYear = this.displayedMonth ? this.displayedYear : this.displayedYear - 1;
      const prevMonth = (this.displayedMonth + 11) % 12;
      const firstDayFromPreviousMonth = new Date(this.displayedYear, this.displayedMonth, 0).getDate();
      const cellsInRow = this.showWeek ? 8 : 7;
      while (day--) {
        const date = `${prevMonthYear}-${pad(prevMonth + 1)}-${pad(firstDayFromPreviousMonth - day)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      for (day = 1; day <= daysInMonth; day++) {
        const date = `${this.displayedYear}-${pad(this.displayedMonth + 1)}-${pad(day)}`;
        rows.push(this.$createElement('td', [this.genButton(date, true, 'date', this.formatter)]));
        if (rows.length % cellsInRow === 0) {
          children.push(this.genTR(rows));
          rows = [];
          if (this.showWeek && (day < daysInMonth || this.showAdjacentMonths)) {
            rows.push(this.genWeekNumber(this.getWeekNumber(day + 7)));
          }
        }
      }
      const nextMonthYear = this.displayedMonth === 11 ? this.displayedYear + 1 : this.displayedYear;
      const nextMonth = (this.displayedMonth + 1) % 12;
      let nextMonthDay = 1;
      while (rows.length < cellsInRow) {
        const date = `${nextMonthYear}-${pad(nextMonth + 1)}-${pad(nextMonthDay++)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      if (rows.length) {
        children.push(this.genTR(rows));
      }
      return this.$createElement('tbody', children);
    },
    genTR(children) {
      return [this.$createElement('tr', children)];
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--date', [this.genTHead(), this.genTBody()], this.calculateTableDate);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerMonthTable.js
// Mixins
 // Utils



/* harmony default export */ var VDatePickerMonthTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-month-table',
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        month: 'short',
        timeZone: 'UTC'
      }, {
        start: 5,
        length: 2
      });
    }
  },
  methods: {
    calculateTableDate(delta) {
      return `${parseInt(this.tableDate, 10) + Math.sign(delta || 1)}`;
    },
    genTBody() {
      const children = [];
      const cols = Array(3).fill(null);
      const rows = 12 / cols.length;
      for (let row = 0; row < rows; row++) {
        const tds = cols.map((_, col) => {
          const month = row * cols.length + col;
          const date = `${this.displayedYear}-${pad(month + 1)}`;
          return this.$createElement('td', {
            key: month
          }, [this.genButton(date, false, 'month', this.formatter)]);
        });
        children.push(this.$createElement('tr', {
          key: row
        }, tds));
      }
      return this.$createElement('tbody', children);
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--month', [this.genTBody()], this.calculateTableDate);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerYears.sass
var VDatePickerYears = __webpack_require__(458);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerYears.js
 // Mixins


 // Utils




/* harmony default export */ var VDatePicker_VDatePickerYears = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-years',
  props: {
    format: Function,
    min: [Number, String],
    max: [Number, String],
    readonly: Boolean,
    value: [Number, String]
  },
  data() {
    return {
      defaultColor: 'primary'
    };
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        year: 'numeric',
        timeZone: 'UTC'
      }, {
        length: 4
      });
    }
  },
  mounted() {
    setTimeout(() => {
      const activeItem = this.$el.getElementsByClassName('active')[0];
      if (activeItem) {
        this.$el.scrollTop = activeItem.offsetTop - this.$el.offsetHeight / 2 + activeItem.offsetHeight / 2;
      } else if (this.min && !this.max) {
        this.$el.scrollTop = this.$el.scrollHeight;
      } else if (!this.min && this.max) {
        this.$el.scrollTop = 0;
      } else {
        this.$el.scrollTop = this.$el.scrollHeight / 2 - this.$el.offsetHeight / 2;
      }
    });
  },
  methods: {
    genYearItem(year) {
      const formatted = this.formatter(`${year}`);
      const active = parseInt(this.value, 10) === year;
      const color = active && (this.color || 'primary');
      return this.$createElement('li', this.setTextColor(color, {
        key: year,
        class: {
          active
        },
        on: Object(mergeData["c" /* mergeListeners */])({
          click: () => this.$emit('input', year)
        }, createItemTypeNativeListeners(this, ':year', year))
      }), formatted);
    },
    genYearItems() {
      const children = [];
      const selectedYear = this.value ? parseInt(this.value, 10) : new Date().getFullYear();
      const maxYear = this.max ? parseInt(this.max, 10) : selectedYear + 100;
      const minYear = Math.min(maxYear, this.min ? parseInt(this.min, 10) : selectedYear - 100);
      for (let year = maxYear; year >= minYear; year--) {
        children.push(this.genYearItem(year));
      }
      return children;
    }
  },
  render() {
    return this.$createElement('ul', {
      staticClass: 'v-date-picker-years',
      ref: 'years'
    }, this.genYearItems());
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VPicker/VPicker.sass
var VPicker = __webpack_require__(450);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCard/VCard.sass
var VCard = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/VPicker.js

 // Mixins



 // Helpers



/* @vue/component */

/* harmony default export */ var VPicker_VPicker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    landscape: Boolean,
    noTitle: Boolean,
    transition: {
      type: String,
      default: 'fade-transition'
    },
    width: {
      type: [Number, String],
      default: 290
    }
  },
  computed: {
    computedTitleColor() {
      const defaultTitleColor = this.isDark ? false : this.color || 'primary';
      return this.color || defaultTitleColor;
    }
  },
  methods: {
    genTitle() {
      return this.$createElement('div', this.setBackgroundColor(this.computedTitleColor, {
        staticClass: 'v-picker__title',
        class: {
          'v-picker__title--landscape': this.landscape
        }
      }), this.$slots.title);
    },
    genBodyTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, this.$slots.default);
    },
    genBody() {
      return this.$createElement('div', {
        staticClass: 'v-picker__body',
        class: {
          'v-picker__body--no-title': this.noTitle,
          ...this.themeClasses
        },
        style: this.fullWidth ? undefined : {
          width: Object(helpers["h" /* convertToUnit */])(this.width)
        }
      }, [this.genBodyTransition()]);
    },
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-picker__actions v-card__actions',
        class: {
          'v-picker__actions--no-title': this.noTitle
        }
      }, this.$slots.actions);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-picker v-card',
      class: {
        'v-picker--flat': this.flat,
        'v-picker--landscape': this.landscape,
        'v-picker--full-width': this.fullWidth,
        ...this.themeClasses,
        ...this.elevationClasses
      }
    }, [this.$slots.title ? this.genTitle() : null, this.genBody(), this.$slots.actions ? this.genActions() : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/index.js


/* harmony default export */ var components_VPicker = (VPicker_VPicker);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker/index.js
// Components
 // Mixins



 // Utils


/* harmony default export */ var picker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    headerColor: String,
    landscape: Boolean,
    noTitle: Boolean,
    width: {
      type: [Number, String],
      default: 290
    }
  },
  methods: {
    genPickerTitle() {
      return null;
    },
    genPickerBody() {
      return null;
    },
    genPickerActionsSlot() {
      return this.$scopedSlots.default ? this.$scopedSlots.default({
        save: this.save,
        cancel: this.cancel
      }) : this.$slots.default;
    },
    genPicker(staticClass) {
      const children = [];
      if (!this.noTitle) {
        const title = this.genPickerTitle();
        title && children.push(title);
      }
      const body = this.genPickerBody();
      body && children.push(body);
      children.push(this.$createElement('template', {
        slot: 'actions'
      }, [this.genPickerActionsSlot()]));
      return this.$createElement(components_VPicker, {
        staticClass,
        props: {
          color: this.headerColor || this.color,
          dark: this.dark,
          elevation: this.elevation,
          flat: this.flat,
          fullWidth: this.fullWidth,
          landscape: this.landscape,
          light: this.light,
          width: this.width,
          noTitle: this.noTitle
        }
      }, children);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/timestamp.js
var timestamp = __webpack_require__(445);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js
// Components




 // Mixins


 // Utils







/* harmony default export */ var VDatePicker = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(localable["a" /* default */], picker).extend({
  name: 'v-date-picker',
  props: {
    activePicker: String,
    allowedDates: Function,
    // Function formatting the day in date picker table
    dayFormat: Function,
    disabled: Boolean,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    // Function formatting the tableDate in the day/month table header
    headerDateFormat: Function,
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    max: String,
    min: String,
    // Function formatting month in the months table
    monthFormat: Function,
    multiple: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    nextMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextMonthAriaLabel'
    },
    nextYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextYearAriaLabel'
    },
    pickerDate: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    prevMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevMonthAriaLabel'
    },
    prevYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevYearAriaLabel'
    },
    range: Boolean,
    reactive: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    showCurrent: {
      type: [Boolean, String],
      default: true
    },
    selectedItemsText: {
      type: String,
      default: '$vuetify.datePicker.itemsSelected'
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    // Function formatting currently selected date in the picker title
    titleDateFormat: Function,
    type: {
      type: String,
      default: 'date',
      validator: type => ['date', 'month'].includes(type) // TODO: year
    },
    value: [Array, String],
    weekdayFormat: Function,
    // Function formatting the year in table header and pickup title
    yearFormat: Function,
    yearIcon: String
  },
  data() {
    const now = new Date();
    return {
      internalActivePicker: this.type.toUpperCase(),
      inputDay: null,
      inputMonth: null,
      inputYear: null,
      isReversing: false,
      now,
      // tableDate is a string in 'YYYY' / 'YYYY-M' format (leading zero for month is not required)
      tableDate: (() => {
        if (this.pickerDate) {
          return this.pickerDate;
        }
        const multipleValue = Object(helpers["I" /* wrapInArray */])(this.value);
        const date = multipleValue[multipleValue.length - 1] || (typeof this.showCurrent === 'string' ? this.showCurrent : `${now.getFullYear()}-${now.getMonth() + 1}`);
        return sanitizeDateString(date, this.type === 'date' ? 'month' : 'year');
      })()
    };
  },
  computed: {
    multipleValue() {
      return Object(helpers["I" /* wrapInArray */])(this.value);
    },
    isMultiple() {
      return this.multiple || this.range;
    },
    lastValue() {
      return this.isMultiple ? this.multipleValue[this.multipleValue.length - 1] : this.value;
    },
    selectedMonths() {
      if (!this.value || this.type === 'month') {
        return this.value;
      } else if (this.isMultiple) {
        return this.multipleValue.map(val => val.substr(0, 7));
      } else {
        return this.value.substr(0, 7);
      }
    },
    current() {
      if (this.showCurrent === true) {
        return sanitizeDateString(`${this.now.getFullYear()}-${this.now.getMonth() + 1}-${this.now.getDate()}`, this.type);
      }
      return this.showCurrent || null;
    },
    inputDate() {
      return this.type === 'date' ? `${this.inputYear}-${pad(this.inputMonth + 1)}-${pad(this.inputDay)}` : `${this.inputYear}-${pad(this.inputMonth + 1)}`;
    },
    tableMonth() {
      return Number((this.pickerDate || this.tableDate).split('-')[1]) - 1;
    },
    tableYear() {
      return Number((this.pickerDate || this.tableDate).split('-')[0]);
    },
    minMonth() {
      return this.min ? sanitizeDateString(this.min, 'month') : null;
    },
    maxMonth() {
      return this.max ? sanitizeDateString(this.max, 'month') : null;
    },
    minYear() {
      return this.min ? sanitizeDateString(this.min, 'year') : null;
    },
    maxYear() {
      return this.max ? sanitizeDateString(this.max, 'year') : null;
    },
    formatters() {
      return {
        year: this.yearFormat || util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        }),
        titleDate: this.titleDateFormat || (this.isMultiple ? this.defaultTitleMultipleDateFormatter : this.defaultTitleDateFormatter)
      };
    },
    defaultTitleMultipleDateFormatter() {
      return dates => {
        if (!dates.length) {
          return '-';
        }
        if (dates.length === 1) {
          return this.defaultTitleDateFormatter(dates[0]);
        }
        return this.$vuetify.lang.t(this.selectedItemsText, dates.length);
      };
    },
    defaultTitleDateFormatter() {
      const titleFormats = {
        year: {
          year: 'numeric',
          timeZone: 'UTC'
        },
        month: {
          month: 'long',
          timeZone: 'UTC'
        },
        date: {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          timeZone: 'UTC'
        }
      };
      const titleDateFormatter = util_createNativeLocaleFormatter(this.currentLocale, titleFormats[this.type], {
        start: 0,
        length: {
          date: 10,
          month: 7,
          year: 4
        }[this.type]
      });
      const landscapeFormatter = date => titleDateFormatter(date).replace(/([^\d\s])([\d])/g, (match, nonDigit, digit) => `${nonDigit} ${digit}`).replace(', ', ',<br>');
      return this.landscape ? landscapeFormatter : titleDateFormatter;
    }
  },
  watch: {
    internalActivePicker: {
      immediate: true,
      handler(val) {
        this.$emit('update:active-picker', val);
      }
    },
    activePicker(val) {
      this.internalActivePicker = val;
    },
    tableDate(val, prev) {
      // Make a ISO 8601 strings from val and prev for comparision, otherwise it will incorrectly
      // compare for example '2000-9' and '2000-10'
      const sanitizeType = this.type === 'month' ? 'year' : 'month';
      this.isReversing = sanitizeDateString(val, sanitizeType) < sanitizeDateString(prev, sanitizeType);
      this.$emit('update:picker-date', val);
    },
    pickerDate(val) {
      if (val) {
        this.tableDate = val;
      } else if (this.lastValue && this.type === 'date') {
        this.tableDate = sanitizeDateString(this.lastValue, 'month');
      } else if (this.lastValue && this.type === 'month') {
        this.tableDate = sanitizeDateString(this.lastValue, 'year');
      }
    },
    value(newValue, oldValue) {
      this.checkMultipleProp();
      this.setInputDate();
      if (!this.isMultiple && this.value && !this.pickerDate || this.isMultiple && this.multipleValue.length && (!oldValue || !oldValue.length) && !this.pickerDate) {
        this.tableDate = sanitizeDateString(this.inputDate, this.type === 'month' ? 'year' : 'month');
      }
    },
    type(type) {
      this.internalActivePicker = type.toUpperCase();
      if (this.value && this.value.length) {
        const output = this.multipleValue.map(val => sanitizeDateString(val, type)).filter(this.isDateAllowed);
        this.$emit('input', this.isMultiple ? output : output[0]);
      }
    }
  },
  created() {
    this.checkMultipleProp();
    if (this.pickerDate !== this.tableDate) {
      this.$emit('update:picker-date', this.tableDate);
    }
    this.setInputDate();
  },
  methods: {
    emitInput(newInput) {
      if (this.range) {
        if (this.multipleValue.length !== 1) {
          this.$emit('input', [newInput]);
        } else {
          const output = [this.multipleValue[0], newInput];
          this.$emit('input', output);
          this.$emit('change', output);
        }
        return;
      }
      const output = this.multiple ? this.multipleValue.indexOf(newInput) === -1 ? this.multipleValue.concat([newInput]) : this.multipleValue.filter(x => x !== newInput) : newInput;
      this.$emit('input', output);
      this.multiple || this.$emit('change', newInput);
    },
    checkMultipleProp() {
      if (this.value == null) return;
      const valueType = this.value.constructor.name;
      const expected = this.isMultiple ? 'Array' : 'String';
      if (valueType !== expected) {
        Object(console["c" /* consoleWarn */])(`Value must be ${this.isMultiple ? 'an' : 'a'} ${expected}, got ${valueType}`, this);
      }
    },
    isDateAllowed(value) {
      return isDateAllowed(value, this.min, this.max, this.allowedDates);
    },
    yearClick(value) {
      this.inputYear = value;
      if (this.type === 'month') {
        this.tableDate = `${value}`;
      } else {
        this.tableDate = `${value}-${pad((this.tableMonth || 0) + 1)}`;
      }
      this.internalActivePicker = 'MONTH';
      if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
        this.$emit('input', this.inputDate);
      }
    },
    monthClick(value) {
      const [year, month] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      if (this.type === 'date') {
        if (this.inputDay) {
          this.inputDay = Math.min(this.inputDay, Object(timestamp["i" /* daysInMonth */])(this.inputYear, this.inputMonth + 1));
        }
        this.tableDate = value;
        this.internalActivePicker = 'DATE';
        if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
          this.$emit('input', this.inputDate);
        }
      } else {
        this.emitInput(this.inputDate);
      }
    },
    dateClick(value) {
      const [year, month, day] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      this.inputDay = parseInt(day, 10);
      this.emitInput(this.inputDate);
    },
    genPickerTitle() {
      return this.$createElement(VDatePicker_VDatePickerTitle, {
        props: {
          date: this.value ? this.formatters.titleDate(this.isMultiple ? this.multipleValue : this.value) : '',
          disabled: this.disabled,
          readonly: this.readonly,
          selectingYear: this.internalActivePicker === 'YEAR',
          year: this.formatters.year(this.multipleValue.length ? `${this.inputYear}` : this.tableDate),
          yearIcon: this.yearIcon,
          value: this.multipleValue[0]
        },
        slot: 'title',
        on: {
          'update:selecting-year': value => this.internalActivePicker = value ? 'YEAR' : this.type.toUpperCase()
        }
      });
    },
    genTableHeader() {
      return this.$createElement(VDatePicker_VDatePickerHeader, {
        props: {
          nextIcon: this.nextIcon,
          color: this.color,
          dark: this.dark,
          disabled: this.disabled,
          format: this.headerDateFormat,
          light: this.light,
          locale: this.locale,
          min: this.internalActivePicker === 'DATE' ? this.minMonth : this.minYear,
          max: this.internalActivePicker === 'DATE' ? this.maxMonth : this.maxYear,
          nextAriaLabel: this.internalActivePicker === 'DATE' ? this.nextMonthAriaLabel : this.nextYearAriaLabel,
          prevAriaLabel: this.internalActivePicker === 'DATE' ? this.prevMonthAriaLabel : this.prevYearAriaLabel,
          prevIcon: this.prevIcon,
          readonly: this.readonly,
          value: this.internalActivePicker === 'DATE' ? `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}` : `${pad(this.tableYear, 4)}`
        },
        on: {
          toggle: () => this.internalActivePicker = this.internalActivePicker === 'DATE' ? 'MONTH' : 'YEAR',
          input: value => this.tableDate = value
        }
      });
    },
    genDateTable() {
      return this.$createElement(VDatePickerDateTable, {
        props: {
          allowedDates: this.allowedDates,
          color: this.color,
          current: this.current,
          dark: this.dark,
          disabled: this.disabled,
          events: this.events,
          eventColor: this.eventColor,
          firstDayOfWeek: this.firstDayOfWeek,
          format: this.dayFormat,
          light: this.light,
          locale: this.locale,
          localeFirstDayOfYear: this.localeFirstDayOfYear,
          min: this.min,
          max: this.max,
          range: this.range,
          readonly: this.readonly,
          scrollable: this.scrollable,
          showAdjacentMonths: this.showAdjacentMonths,
          showWeek: this.showWeek,
          tableDate: `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}`,
          value: this.value,
          weekdayFormat: this.weekdayFormat
        },
        ref: 'table',
        on: {
          input: this.dateClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':date')
        }
      });
    },
    genMonthTable() {
      return this.$createElement(VDatePickerMonthTable, {
        props: {
          allowedDates: this.type === 'month' ? this.allowedDates : null,
          color: this.color,
          current: this.current ? sanitizeDateString(this.current, 'month') : null,
          dark: this.dark,
          disabled: this.disabled,
          events: this.type === 'month' ? this.events : null,
          eventColor: this.type === 'month' ? this.eventColor : null,
          format: this.monthFormat,
          light: this.light,
          locale: this.locale,
          min: this.minMonth,
          max: this.maxMonth,
          range: this.range,
          readonly: this.readonly && this.type === 'month',
          scrollable: this.scrollable,
          value: this.selectedMonths,
          tableDate: `${pad(this.tableYear, 4)}`
        },
        ref: 'table',
        on: {
          input: this.monthClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':month')
        }
      });
    },
    genYears() {
      return this.$createElement(VDatePicker_VDatePickerYears, {
        props: {
          color: this.color,
          format: this.yearFormat,
          locale: this.locale,
          min: this.minYear,
          max: this.maxYear,
          value: this.tableYear
        },
        on: {
          input: this.yearClick,
          ...createItemTypeListeners(this, ':year')
        }
      });
    },
    genPickerBody() {
      const children = this.internalActivePicker === 'YEAR' ? [this.genYears()] : [this.genTableHeader(), this.internalActivePicker === 'DATE' ? this.genDateTable() : this.genMonthTable()];
      return this.$createElement('div', {
        key: this.internalActivePicker
      }, children);
    },
    setInputDate() {
      if (this.lastValue) {
        const array = this.lastValue.split('-');
        this.inputYear = parseInt(array[0], 10);
        this.inputMonth = parseInt(array[1], 10) - 1;
        if (this.type === 'date') {
          this.inputDay = parseInt(array[2], 10);
        }
      } else {
        this.inputYear = this.inputYear || this.now.getFullYear();
        this.inputMonth = this.inputMonth == null ? this.inputMonth : this.now.getMonth();
        this.inputDay = this.inputDay || this.now.getDate();
      }
    }
  },
  render() {
    return this.genPicker('v-picker--date');
  }
}));

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=template&id=5ba95cfe



















var PriceListFormvue_type_template_id_5ba95cfe_render = function render() {
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
    staticClass: "ma-0",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n        ຈັດການ ລາຍການລາຄາ\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລະຫັດສິນຄ້າ",
      "disabled": ""
    },
    model: {
      value: _vm.form.productId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "productId", $$v);
      },
      expression: "form.productId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* Name",
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
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.grades,
      "label": "Grade *"
    },
    model: {
      value: _vm.form.grade,
      callback: function ($$v) {
        _vm.$set(_vm.form, "grade", $$v);
      },
      expression: "form.grade"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລາຄາ"
    },
    model: {
      value: _vm.form.amount,
      callback: function ($$v) {
        _vm.$set(_vm.form, "amount", $$v);
      },
      expression: "form.amount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency*"
    },
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.type,
      "label": "ຮູບແບບລາຄາ",
      "required": ""
    },
    model: {
      value: _vm.form.type,
      callback: function ($$v) {
        _vm.$set(_vm.form, "type", $$v);
      },
      expression: "form.type"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VCheckbox["a" /* default */], {
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
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n              ເພີ່ມ\n            ")])], 1)], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.entries
    },
    scopedSlots: _vm._u([{
      key: `item.id`,
      fn: function ({
        item,
        index
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "warning",
            "text": ""
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item, index);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-trash"
        })])];
      }
    }, {
      key: `item.name`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(item.name) + " [ " + _vm._s(item.grade) + " ]\n        ")];
      }
    }, {
      key: `item.amount`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(_vm.formatNumber(item.amount)) + "\n        ")];
      }
    }], null, true)
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }, [_vm._v("\n        Close\n      ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=template&id=5ba95cfe

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=script&lang=js


/* harmony default export */ var PriceListFormvue_type_script_lang_js = ({
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
      grades: ['A', 'B', 'C', 'D', 'E', 'F'],
      search: '',
      form: {
        grade: '',
        productId: '',
        id: null,
        name: '',
        amount: 0,
        type: 'Price',
        currencyId: 1,
        isActive: true
      },
      type: ['Price', 'Percent'],
      entries: [],
      headers: [{
        text: 'Name',
        align: 'end',
        value: 'name',
        sortable: false
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'amount',
        sortable: false
      }, {
        text: 'ສູດຄິດໄລ່',
        align: 'end',
        value: 'type',
        sortable: false
      }, {
        text: 'ລົບ',
        align: 'end',
        value: 'id',
        sortable: false
      }],
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  async created() {
    this.form.productId = this.recordId;
    this.loadEntry();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['addProductPricesToCreate', 'deleteProductPricesToCreate']),
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        if (this.recordId == 0) {
          let localForm = {
            ...this.form
          };
          this.addProductPricesToCreate(localForm);
          console.log(`Item to create ${this.findAllProductPriceListToCreate.length}`);
          return;
        }
        this.isloading = true;
        let api = 'api/priceList/create';
        console.log('API => ', api);
        try {
          const response = await this.$axios.post(api, this.form);
          console.log(`Load data ${JSON.stringify(response)}`);
          await this.loadEntry();
          Object(common["l" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
        } catch (error) {
          return Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    async deleteItem(item, idx) {
      if (this.recordId == 0) {
        this.deleteProductPricesToCreate(idx);
        return;
      }
      if (!this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = `api/priceList/find/${item.id}`;
        console.log('API => ', api);
        try {
          const response = await this.$axios.delete(api);
          console.log(`Load data `);
          await this.loadEntry();
          Object(common["l" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction has been deleted');
        } catch (error) {
          return Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    async loadEntry() {
      console.log(`Loading data .... ${this.recordId}`);
      if (this.recordId == 0) {
        this.entries = this.findAllProductPriceListToCreate;
        return;
      }
      try {
        const response = await this.$axios.get(`api/priceList/findByProductId/${this.recordId}`);
        console.warn(`RESPONSE DATA ${JSON.stringify(response.data)}`);
        this.entries = response.data;
      } catch (error) {
        console.log('Cannot fetch data ' + error);
        return Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProductPriceListToCreate', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency'])
  }
});
// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PriceListFormvue_type_script_lang_js = (PriceListFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/PriceListForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PriceListFormvue_type_script_lang_js,
  PriceListFormvue_type_template_id_5ba95cfe_render,
  staticRenderFns,
  false,
  null,
  null,
  "23382228"
  
)

/* harmony default export */ var PriceListForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(67).default})


/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=template&id=5419c5a1






var DiaImagevue_type_template_id_5419c5a1_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.iUrl || 'No image'
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "variant": "text",
      "rounded": ""
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.$emit('closeDia');
      }
    }
  }, [_vm._v("\n      Close\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=template&id=5419c5a1

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=script&lang=js
/* harmony default export */ var DiaImagevue_type_script_lang_js = ({
  props: ['iUrl']
});
// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DiaImagevue_type_script_lang_js = (DiaImagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DiaImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiaImagevue_type_script_lang_js,
  DiaImagevue_type_template_id_5419c5a1_render,
  staticRenderFns,
  false,
  null,
  null,
  "f6f6a7dc"
  
)

/* harmony default export */ var DiaImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(479);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("735d40bc", content, true)

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(505);
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(404);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_4__);
// import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'





// import { Logger } from 'html2canvas/dist/types/core/logger'
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  middleware: 'auths',
  mixins: [_pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: {
    // ✅ ADD: Tax rate options for dropdown
    taxRateOptions() {
      return this.taxRates.map(tax => ({
        id: tax.id,
        name: tax.name,
        code: tax.code,
        rate: tax.rate,
        displayRate: (parseFloat(tax.rate) * 100).toFixed(2) + '%',
        displayText: `${tax.name} (${(parseFloat(tax.rate) * 100).toFixed(2)}%)`,
        description: tax.description,
        isDefault: tax.isDefault,
        isActive: tax.isActive
      }));
    },
    // ✅ ADD: Get selected tax rate details
    selectedTaxRate() {
      return this.taxRates.find(tax => tax.id === this.formData.taxId);
    },
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    host() {
      return Object(_common_api__WEBPACK_IMPORTED_MODULE_2__[/* hostName */ "a"])();
    },
    barcode2by2cm() {
      const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <style>
        @font-face {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
        * {
          font-family: 'DM Sans';
        }
      </style>
    </head>
    <body>
      <div style="text-align: center;">
        <table style="width: 200px; text-align: center;">
          <tr>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
      return html;
    },
    barcode3by2cm() {
      const html = `
      <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
      <table style="width: 200px; text-align: center;" >
  <tr>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
      <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
       
    </td>
  
  </tr>
</table>
</div>
</body>
            </html>
`;
      return html;
    },
    barcodeNormal() {
      const html = `
          <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
                <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `;
      return html;
    }
  },
  async mounted() {
    console.log('FORMDATA ID: ' + this.formData.pro_id);
    this.pro_id = this.headerId;
    this.formData.pro_id = this.headerId;
    console.log('Mounted: ');
    this.fetchProId(this.headerId);
    this.fetchCategory();
    this.fetchCompany();
    // ✅ ADD: Load tax rates
    await this.fetchTaxRates();
  },
  watch: {
    // ✅ ADD: Watch for tax rate changes
    'formData.taxId'(newTaxId) {
      this.onTaxRateChange();
    },
    // ✅ ADD: Watch for price changes to update tax calculations
    'formData.pro_price'() {
      // Tax calculations will automatically update due to computed properties
    }
  },
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id);
    console.log('PRO DEFUALT ID: ' + this.pro_id);
    return /^\d+$/.test(data.params.id);
  },
  data() {
    return {
      productType: ['product', 'service', 'stock'],
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      barcodeValue: '',
      imagesPreviewURL: [],
      files: null,
      IMG_URL: '',
      NAME: '',
      barcodeImage: '',
      rules: {
        taxRule: [v => !!v || 'ກະລຸນາເລືອກອັດຕາພາສີ (Please select tax rate)'],
        nameRule: [v => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ', v => v && v.length <= 150 || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ'],
        priceRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        minRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        // (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        costPrice: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        retailRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        imageRule: [files => {
          let fileSize = 0;
          let totalSize = 0;
          if (files) {
            files.forEach(el => {
              fileSize += el.size;
              console.log('Size: ' + el.size);
            });
            totalSize = fileSize / files.length;
            console.log('File size: aaa' + files.length + ' Each: ' + totalSize || false);
          } else {
            console.log('File: ' + files);
          }
          console.log('Total: ' + totalSize);
          return totalSize < 2000000 || 'ຂະຫນາດເກີນ';
        }]
      },
      preview: false,
      previewSrc: null,
      title: 'ຈັດການສິນຄ້າ',
      valid: false,
      category: [],
      // ✅ ADD: Tax-related data
      taxRates: [],
      loadingTaxRates: false,
      // ✅ UPDATE: Add taxId to formData
      formData: {
        productId: null,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        companyId: 2,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: true,
        validateStockOnSale: true,
        vendorName: '',
        taxId: null // ✅ NEW: Tax ID field
      },
      companyList: [],
      isLoading: false,
      validLocal: true,
      diaMessageTitle: 'ຄຳເຕືອນ',
      diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
      pro_id: null,
      dia_confirm: false,
      tempImgId: null
      // formData: {}
    };
  },
  methods: {
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.formData.productId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    formatNumber(val) {
      return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* getFormatNum */ "e"])(val);
    },
    generateBarcode() {
      // Generate a random 12-digit number as the barcode value
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000;
      // Use jsbarcode library to generate the barcode SVG image
      // Get the canvas element
      let canvas = document.createElement('canvas');
      // canvas.width = 20 // Approximation for 3cm at 96dpi
      // canvas.height = 20 // Approximation for 2cm at 96dpi
      jsbarcode__WEBPACK_IMPORTED_MODULE_4___default()(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 10
        // margin: 5,
        // width: 30, // Match canvas width
        // height: 20, // Match canvas height
      });
      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(barcodeValue);
    },
    generateBarcodeImage(barcodeValue) {
      // Get the canvas element using the ref attribute
      if (!barcodeValue) return;
      let canvas = this.$refs.barcodeCanvas;
      console.log(`.....Canvas logger.....`);
      console.log(canvas);
      console.log(canvas.width, canvas.height);
      // Set the canvas width and height to match the paper size
      // canvas.width = 20
      // canvas.height = 10
      // Generate the barcode image using JsBarcode
      jsbarcode__WEBPACK_IMPORTED_MODULE_4___default()(canvas, barcodeValue, {
        format: 'code128',
        displayValue: true,
        fontSize: 12,
        // margin: 10
        width: 1,
        // Match canvas width
        height: 13 // Match canvas height 35
      });

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL();
    },
    validateLocal() {
      console.log('VALIDATING...');
      this.$refs.formLocal.validate();
    },
    async fetchCategory() {
      this.isLoading = true;
      await this.$axios.get('category_f').then(res => {
        console.log('=>category' + res.data);
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    async fetchCompany() {
      this.isLoading = true;
      await this.$axios.get('api/company/find').then(res => {
        console.log('=>Company' + res.data);
        this.companyList = res.data.map(el => {
          return {
            id: el.id,
            name: el.name
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    previewImg(url) {
      console.warn(`image preview ${url}`);
      this.previewSrc = url;
      this.preview = true;
    },
    onFilesChange(payload) {
      const file = payload; // in case vuetify file input
      this.files = payload;
      if (file) {
        for (let i = 0; i < file.length; i++) {
          this.imagesPreviewURL.push({
            IMG_URL: URL.createObjectURL(file[i]),
            NAME: file[i].name,
            isvalid: this.sizeValidate(file[i].size)
          });
        }
        // URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null;
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1);
      this.files.splice(idx, 1);
      this.deleteFileFrServ(idx);
    },
    sizeValidate(z) {
      console.log('SIZE' + z);
      const maxSize = 20000000;
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`;
      }
    },
    async deleteFileFrServ(idx) {
      //   v && this.deleteFileFrServ'

      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* confirmSwal */ "a"])(this.$swal, 'warning', async () => {
        console.log('Delete record function');
        this.isLoading = true;
        await this.$axios.post('/unlink_file', {
          img_name: this.formData.pro_image[idx].name
        }).then(res => {
          res.data === 'Transaction completed' && this.formData.pro_image.splice(idx, 1);
          // this.message = res.data
          Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "l"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(er => {
          this.message = er.error;
        });
        this.isLoading = false;
      });
    },
    printBarcode() {
      const windowContent = this.threeColPaper ? this.barcode2by2cm : this.barcodeNormal;
      const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
      printWin.document.open();
      printWin.document.write(windowContent);
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
    },
    // ✅ ADD: Fetch tax rates from API
    async fetchTaxRates() {
      this.loadingTaxRates = true;
      try {
        const response = await this.$axios.get('/api/tax/active');
        this.taxRates = response.data.data || [];

        // Set default tax rate if no tax is selected and we have a default
        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
        console.log('Tax rates loaded:', this.taxRates);
      } catch (error) {
        var _this$$toast, _this$$toast$error;
        console.error('Error loading tax rates:', error);
        // Show user-friendly error message
        ((_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : (_this$$toast$error = _this$$toast.error) === null || _this$$toast$error === void 0 ? void 0 : _this$$toast$error.call(_this$$toast, 'Failed to load tax rates')) || console.error('Failed to load tax rates');
      } finally {
        this.loadingTaxRates = false;
      }
    },
    // ✅ ADD: Calculate tax amount
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) {
        return 0;
      }
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxRate = parseFloat(this.selectedTaxRate.rate) || 0;
      return basePrice * taxRate;
    },
    // ✅ ADD: Calculate total with tax
    calculateTotalWithTax() {
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxAmount = this.calculateTaxAmount();
      return basePrice + taxAmount;
    },
    // ✅ UPDATE: Modified fetchProId to include tax data
    async fetchProId(id) {
      this.isLoading = true;
      console.log('FECT ID:' + id);
      await this.$axios.post('/product_f_id', {
        proid: id
      }).then(res => {
        console.log('Product ID ' + res.data);
        const el = res.data[0];
        console.log('===> Min stock', el.minStock);
        const image = res.data[0].img_name == null ? [] : res.data.map(el => {
          return {
            name: el.img_name,
            path: el.img_path
          };
        });
        this.formData = {
          productId: el.id,
          pro_category: el.pro_category,
          pro_id: el.pro_id,
          pro_name: el.pro_name,
          _category: el._category,
          pro_price: el.pro_price,
          pro_desc: el.pro_desc,
          pro_status: el.pro_status === 1 || false,
          pro_retail_price: el.retail_cost_percent,
          pro_cost_price: el.cost_price,
          companyId: el.companyId,
          minStock: el.minStock,
          barCode: el.barCode,
          receiveUnitId: el.receiveUnitId,
          stockUnitId: el.stockUnitId,
          costCurrencyId: el.costCurrencyId,
          saleCurrencyId: el.saleCurrencyId,
          pro_image: image,
          isActive: el.isActive,
          validateStockOnSale: el.validateStockOnSale,
          vendorName: el.vendorName,
          taxId: el.taxId || null // ✅ ADD: Load existing tax ID
        };

        // Set default tax if none is assigned
        if (!this.formData.taxId && this.taxRates.length > 0) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
        if (!this.formData.barCode) {
          this.formData.barCode = '';
        }
        this.generateBarcodeImage(this.formData.barCode);
      }).catch(er => {
        console.log('Error: ' + er);
        this.message = er;
      });
      this.isLoading = false;
    },
    // ✅ UPDATE: Modified uploadFilesLocal to include tax data
    async uploadFilesLocal() {
      console.log('===> Upload data');
      if (!this.$refs.formLocal.validate()) {
        return;
      }

      // ✅ ADD: Validate tax selection
      // if (!this.formData.taxId) {
      //   this.$toast?.error?.('Please select a tax rate') ||
      //     console.error('Please select a tax rate')
      //   return
      // }

      this.isLoading = true;
      const formData = new FormData();

      // ✅ ADD: Include tax information in the form data
      const formDataWithTax = {
        ...this.formData,
        // Add tax calculation details for backend reference
        selectedTaxRate: this.selectedTaxRate ? {
          id: this.selectedTaxRate.id,
          name: this.selectedTaxRate.name,
          code: this.selectedTaxRate.code,
          rate: this.selectedTaxRate.rate
        } : null,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax()
      };
      formData.append('FORM', JSON.stringify(formDataWithTax));
      if (this.files) {
        this.files.forEach(element => {
          formData.append('files', element);
        });
      }
      await this.$axios.post('uploadmulti_update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.$emit('close-dialog');
        this.$emit('refresh');
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "l"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
      }).catch(er => {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalError2 */ "k"])(this.$swal, 'Error', er.response.data);
      });
      this.isLoading = false;
    },
    // ✅ ADD: Helper method to refresh tax rates
    async refreshTaxRates() {
      await this.fetchTaxRates();
    },
    // ✅ ADD: Method to handle tax rate changes
    onTaxRateChange() {
      // You can add additional logic here when tax rate changes
      // For example, recalculate prices, validate, etc.
      console.log('Tax rate changed to:', this.selectedTaxRate);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(402)["URL"]))

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(404);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_1__);

// Try different import approaches - uncomment the one that works in your project:

// Option 1: Relative path (if utils is in a specific folder)
// import { getFormatNum, swalSuccess, swalError2 } from '../utils'
// import { getFormatNum, swalSuccess, swalError2 } from '../../utils'

// Option 2: Nuxt alias
// import { getFormatNum, swalSuccess, swalError2 } from '~/utils'

// Option 3: Direct path from root
// import { getFormatNum, swalSuccess, swalError2 } from '@/utils/index.js'

// Option 4: If utils is in plugins or a different location
// import { getFormatNum, swalSuccess, swalError2 } from '~/plugins/utils'

// Option 5: Define inline if utils not available
const getFormatNum = val => {
  if (!val) return '0';
  return Number(val).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
};
const swalSuccess = (swal, title, message) => {
  if (swal) {
    swal.fire({
      icon: 'success',
      title: title,
      text: message,
      timer: 2000
    });
  } else {
    alert(`${title}: ${message}`);
  }
};
const swalError2 = (swal, title, error) => {
  if (swal) {
    swal.fire({
      icon: 'error',
      title: title,
      text: error.toString()
    });
  } else {
    alert(`${title}: ${error}`);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    title: {
      type: String,
      default: 'Create Product'
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      productType: ['product', 'service', 'stock'],
      valid: false,
      isloading: false,
      message: null,
      preview: false,
      previewSrc: '',
      priceListDialog: false,
      priceListFormKey: 0,
      pricingRecordId: null,
      barcodeImage: '',
      threeColPaper: false,
      // Tax-related data
      loadingTaxRates: false,
      taxRates: [],
      formData: {
        companyId: null,
        pro_category: null,
        pro_id: null,
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_cost_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        isActive: 1,
        validateStockOnSale: 1,
        minStock: 0,
        barCode: '',
        receiveUnitId: null,
        stockUnitId: null,
        saleCurrencyId: null,
        vendorName: '',
        taxId: null // Add tax field
      },
      rules: {
        nameRule: [v => !!v || 'ຊື່ສິນຄ້າຈຳເປັນ'],
        priceRule: [v => !!v || 'ລາຄາຈຳເປັນ'],
        currencyRule: [v => !!v || 'Currency is required']
      },
      category: [],
      companyList: [],
      // unitList: [],
      findAllCurrency: [],
      files: []
    };
  },
  computed: {
    // ...mapGetters(['findAllProductPriceListToCreate']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['findAllProductPriceListToCreate', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    dialogMessage() {
      return this.message !== null;
    },
    // Tax rate options for autocomplete
    taxRateOptions() {
      return this.taxRates.map(rate => ({
        id: rate.id,
        name: rate.name,
        code: rate.code,
        rate: rate.rate,
        isDefault: rate.isDefault,
        displayText: `${rate.name} (${rate.code})`,
        displayRate: `${(rate.rate * 100).toFixed(1)}%`
      }));
    },
    // Get selected tax rate details
    selectedTaxRate() {
      if (!this.formData.taxId || !this.taxRates.length) return null;
      return this.taxRates.find(rate => rate.id === this.formData.taxId);
    },
    barcode3by2cm() {
      const html = `
            <!DOCTYPE html>
            <html>
            <head>
            <title></title>
            <style>
            @font-face {
              font-family: 'DM Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
          }
            *{
              font-family: 'DM Sans';
            }
          </style>
              </head>
              <body>
                  <div style="text-align: center;">
                        <table style="width: 200px; text-align: center;" >
                            <tr>
                              <td style="width: 500px; height: 15px;font-size:8px;">
                                ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                                </br>
                                <img src="${this.barcodeImage}">
                              </td>               
                            </tr>
                          </table>
                    </div>
            </body>
            </html>
        `;
      return html;
    },
    barcodeNormal() {
      const html = `
            <!DOCTYPE html>
            <html>
            <head>
            <title></title>
            <style>
            @font-face {
              font-family: 'DM Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
          }
            *{
              font-family: 'DM Sans';
            }
          </style>
              </head>
              <body>
              <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `;
      return html;
    }
  },
  async mounted() {
    await Promise.all([this.fetchCategory(), this.fetchCompany(),
    // this.fetchUnit(),
    this.fetchCurrency(), this.fetchTaxRates() // Add tax rates fetching
    ]);
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['clearProductPricesToCreate', 'addProductPricesToCreate', 'deleteProductPricesToCreate']),
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.headerId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    validate() {
      this.$refs.form.validate();
    },
    formatNumber(val) {
      return getFormatNum(val);
    },
    // Tax calculation methods
    async fetchTaxRates() {
      this.loadingTaxRates = true;
      try {
        const response = await this.$axios.get('/api/tax/active');
        this.taxRates = response.data.data || [];

        // Set default tax rate if no tax is selected and we have a default
        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
        console.log('Tax rates loaded:', this.taxRates);
      } catch (error) {
        console.error('Error loading tax rates:', error);
        // Use console instead of toast if toast is not available
        console.error('Failed to load tax rates');
      } finally {
        this.loadingTaxRates = false;
      }
    },
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) {
        return 0;
      }
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxRate = parseFloat(this.selectedTaxRate.rate) || 0;
      return basePrice * taxRate;
    },
    calculateTotalWithTax() {
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxAmount = this.calculateTaxAmount();
      return basePrice + taxAmount;
    },
    onTaxRateChange() {
      console.log('Tax rate changed to:', this.selectedTaxRate);
    },
    generateBarcode() {
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 100000000000;
      const canvas = document.createElement('canvas');
      jsbarcode__WEBPACK_IMPORTED_MODULE_1___default()(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 20,
        margin: 10
      });
      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(barcodeValue);
    },
    generateBarcodeImage(barcode) {
      const canvas = this.$refs.barcodeCanvas;
      console.log(`.....Canvas logger.....`);
      console.log(canvas);
      if (canvas) {
        console.log(canvas.width, canvas.height);
        jsbarcode__WEBPACK_IMPORTED_MODULE_1___default()(canvas, barcode, {
          format: 'code128',
          displayValue: true,
          fontSize: 12,
          width: 1,
          height: 13
        });
        this.barcodeImage = canvas.toDataURL();
      }
    },
    printBarcode() {
      const windowContent = this.threeColPaper ? this.barcode3by2cm : this.barcodeNormal;
      const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
      printWin.document.open();
      printWin.document.write(windowContent);
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async fetchCategory() {
      this.isloading = true;
      try {
        const res = await this.$axios.get('category_f');
        console.log('=>category' + res.data);
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
        if (this.category.length > 0) {
          this.formData.pro_category = this.category[0]['categ_id'];
        }
      } catch (er) {
        var _er$response;
        console.log('error: ' + ((_er$response = er.response) === null || _er$response === void 0 ? void 0 : _er$response.data) || false);
      }
      this.isloading = false;
    },
    async fetchCompany() {
      this.isloading = true;
      try {
        const res = await this.$axios.get('api/company/find');
        console.log('=>Company' + res.data);
        this.companyList = res.data.map(el => {
          return {
            id: el.id,
            name: el.name
          };
        });
        if (this.companyList.length > 0) {
          this.formData.companyId = this.companyList[0]['id'];
        }
      } catch (er) {
        var _er$response2;
        console.log('error: ' + ((_er$response2 = er.response) === null || _er$response2 === void 0 ? void 0 : _er$response2.data) || false);
      }
      this.isloading = false;
    },
    // async fetchUnit() {
    //   try {
    //     const response = await this.$axios.get('/api/unit/find')
    //     this.unitList = response.data.map((el) => ({
    //       id: el.id,
    //       name: el.name,
    //     }))
    //   } catch (error) {
    //     console.error('Error fetching units:', error)
    //     // Fallback if API doesn't exist
    //     this.unitList = []
    //   }
    // },

    async fetchCurrency() {
      try {
        const response = await this.$axios.get('/api/currency/find');
        this.findAllCurrency = response.data.map(el => ({
          id: el.id,
          code: el.code
        }));
      } catch (error) {
        console.error('Error fetching currency:', error);
        // Fallback if API doesn't exist
        this.findAllCurrency = [];
      }
    },
    onFilesChange(files) {
      this.files = files || [];
    },
    // File preview helper
    getFilePreview(file) {
      if (file && file instanceof File) {
        return URL.createObjectURL(file);
      }
      return '';
    },
    // Remove file from preview
    removeFile(index) {
      this.files.splice(index, 1);
    },
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.isloading = true;
      const formData = new FormData();

      // Include tax information in the form data
      this.formData.baseUnitId = this.formData.stockUnitId;
      const formDataWithTax = {
        ...this.formData,
        selectedTaxRate: this.selectedTaxRate ? {
          id: this.selectedTaxRate.id,
          name: this.selectedTaxRate.name,
          code: this.selectedTaxRate.code,
          rate: this.selectedTaxRate.rate
        } : null,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax()
      };
      formData.append('FORM', JSON.stringify(formDataWithTax));
      if (this.files && this.files.length > 0) {
        this.files.forEach(element => {
          formData.append('files', element);
        });
      }
      try {
        const response = await this.$axios.post('uploadmulti', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const productIdCreated = response.data.split('|')[1];
        console.log(`Product ID created: ${productIdCreated}`);
        const commResponse = await this.commitPriceListRecord(productIdCreated);
        console.info(`Commit response ${commResponse}`);
        this.isloading = false;
        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        console.info(`Create product complete: response => ${JSON.stringify(response)}`);
        this.$emit('refresh');
        this.$emit('close-dialog');
      } catch (error) {
        this.isloading = false;
        swalError2(this.$swal, 'Error', error);
        console.error('Error response:', error.response);
      }
    },
    async commitPriceListRecord(productId) {
      this.isloading = true;
      let api = 'api/priceList/create';
      console.log(`API => ProductId='${productId}'`, api);
      try {
        const requests = this.findAllProductPriceListToCreate.map(item => {
          const newItem = {
            ...item,
            productId
          };
          return this.$axios.post(api, newItem);
        });
        const responses = await Promise.all(requests);
        responses.forEach(response => {
          console.log(`Load data: ${JSON.stringify(response)}`);
        });
        this.clearProductPricesToCreate();
        return responses;
      } catch (error) {
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ໃນການເພີ່ມ price list');
        console.error('Error during price list commit:', error);
        return null;
      }
    },
    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(402)["URL"]))

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(139);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(106);
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

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(504);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("011483c6", content, true, context)
};

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export calculateUpdatedOffset */
/* unused harmony export calculateCenteredOffset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSlideGroup; });
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(139);
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

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(489);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("d67becdc", content, true)

/***/ }),

/***/ 489:
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

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(508);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2fe1fa0f", content, true, context)
};

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(510);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6931c052", content, true, context)
};

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(493);
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);
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

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(494);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("3f874970", content, true)

/***/ }),

/***/ 494:
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

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(139);
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

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },
    onMouseLeave() {
      this.runDelay('close');
    }
  },
  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }
    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }
    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }
    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }
    if (!this.disabled) {
      element.data = element.data || {};
      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }
    return element;
  }
}));

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(500);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e8a466fa", content, true)

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var VBtnToggle = __webpack_require__(433);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(506);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(482);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(464);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=template&id=620c20a2&scoped=true




















var ProductFormCreatevue_type_template_id_620c20a2_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-overlay"
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-620c20a2>", "</div>", [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px",
      "persistent": ""
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
    }
  }, [_c('dialog-classic-message', {
    attrs: {
      "message": _vm.message
    },
    on: {
      "closedialog": function ($event) {
        _vm.message = null;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-content\" data-v-620c20a2>", "</div>", [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.companyList,
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.companyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "companyId", $$v);
      },
      expression: "formData.companyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "categ_name",
      "item-value": "categ_id",
      "items": _vm.category,
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "value": _vm.formData.pro_id || '1XXX',
      "label": "ໄອດີສິນຄ້າ",
      "disabled": "",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລາຄາ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຕົ້ນທຶນ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency*",
      "rules": _vm.rules.currencyRule,
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.saleCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "saleCurrencyId", $$v);
      },
      expression: "formData.saleCurrencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.productType,
      "label": "Product type",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                      " + _vm._s(item) + "\n                    ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item))])];
      }
    }]),
    model: {
      value: _vm.formData._category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "_category", $$v);
      },
      expression: "formData._category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.taxRateOptions,
      "label": "Tax Rate",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                      " + _vm._s(item.displayRate) + "\n                    ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item.name))])];
      }
    }]),
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ລາຄາສົ່ງ %",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ຮູບພາບ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2 mb-1",
    attrs: {
      "dense": "",
      "outlined": "",
      "color": "info"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between text-caption flex-wrap"
  }, [_c('span', [_vm._v("Base: " + _vm._s(_vm.formatNumber(_vm.formData.pro_price)))]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "):\n                      " + _vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))]), _vm._v(" "), _c('span', [_c('strong', [_vm._v("Total:\n                        " + _vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": function ($event) {
        return _vm.triggerPriceListForm();
      }
    }
  }, [_vm._v("\n                  ຈັດການລາຄາ\n                ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.vendorName,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "vendorName", $$v);
      },
      expression: "formData.vendorName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", _vm._n($$v));
      },
      expression: "formData.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "ກວດສຕັອກກ່ອນຂາຍ",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.validateStockOnSale,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "validateStockOnSale", _vm._n($$v));
      },
      expression: "formData.validateStockOnSale"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ",
      "rows": "2",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-center mb-2"
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%",
      "height": "auto"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-caption mt-1"
  }, [_vm._v("\n                      ລາຄາ: " + _vm._s(_vm.formatNumber(_vm.formData.pro_price)) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_c(VBtnToggle["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length > 0,
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("\n                        Generate\n                      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length == 0,
      "color": "success"
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("\n                        Print\n                      ")])], 1)], 1)])], 1), _vm._v(" "), _vm.files && _vm.files.length > 0 ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    staticStyle: {
      "max-height": "200px",
      "overflow-y": "auto"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-caption mb-2"
  }, [_vm._v("Image Preview")]), _vm._v(" "), _vm._l(_vm.files, function (file, index) {
    return _c('div', {
      key: index,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": _vm.getFilePreview(file)
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1"
    }, [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.removeFile(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  })], 2)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text-caption mt-2"
  }, [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ.")])], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-footer\" data-v-620c20a2>", "</div>", [_vm._ssrNode("<div class=\"footer-actions\" data-v-620c20a2>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "small": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n          ຍົກເລີກ\n        ")], 1), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.valid,
      "small": ""
    },
    on: {
      "click": _vm.uploadFiles
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n          ບັນທຶກ\n        ")], 1)], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=template&id=620c20a2&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=script&lang=js
var ProductFormCreatevue_type_script_lang_js = __webpack_require__(481);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductFormCreatevue_type_script_lang_js = (ProductFormCreatevue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(509)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormCreatevue_type_script_lang_js,
  ProductFormCreatevue_type_template_id_620c20a2_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "620c20a2",
  "45253468"
  
)

/* harmony default export */ var ProductFormCreate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(465).default,LoadingIndicator: __webpack_require__(67).default,DiaImage: __webpack_require__(477).default,PriceListForm: __webpack_require__(476).default})


/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var VBtnToggle = __webpack_require__(433);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(506);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(482);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(464);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=template&id=2a0c1bfa&scoped=true





















var ProductFormvue_type_template_id_2a0c1bfa_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-overlay"
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-2a0c1bfa>", "</div>", [_c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-content\" data-v-2a0c1bfa>", "</div>", [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VForm["a" /* default */], {
    ref: "formLocal",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.validLocal,
      callback: function ($$v) {
        _vm.validLocal = $$v;
      },
      expression: "validLocal"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.companyList,
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.companyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "companyId", $$v);
      },
      expression: "formData.companyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "categ_name",
      "item-value": "categ_id",
      "items": _vm.category,
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": !!_vm.formData.pro_id,
      "label": "ໄອດີສິນຄ້າ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_id,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_id", $$v);
      },
      expression: "formData.pro_id"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.priceRule,
      "label": "ຕົ້ນທຶນ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.saleCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "saleCurrencyId", $$v);
      },
      expression: "formData.saleCurrencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.productType,
      "label": "Product type",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                      " + _vm._s(item) + "\n                    ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item))])];
      }
    }]),
    model: {
      value: _vm.formData._category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "_category", $$v);
      },
      expression: "formData._category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.taxRateOptions,
      "label": "Tax Rate",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                      " + _vm._s(item.displayRate) + "\n                    ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item.name))])];
      }
    }]),
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ລາຄາສົ່ງ %",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ຮູບພາບ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2 mb-1",
    attrs: {
      "dense": "",
      "outlined": "",
      "color": "info"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between text-caption"
  }, [_c('span', [_vm._v("Base: " + _vm._s(_vm.formatNumber(_vm.formData.pro_price)))]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "):\n                      " + _vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))]), _vm._v(" "), _c('span', [_c('strong', [_vm._v("Total:\n                        " + _vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": function ($event) {
        return _vm.triggerPriceListForm();
      }
    }
  }, [_vm._v("\n                  ຈັດການລາຄາ\n                ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.vendorName,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "vendorName", $$v);
      },
      expression: "formData.vendorName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", _vm._n($$v));
      },
      expression: "formData.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "ກວດສຕັອກກ່ອນຂາຍ",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.validateStockOnSale,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "validateStockOnSale", _vm._n($$v));
      },
      expression: "formData.validateStockOnSale"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ",
      "rows": "2",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "outlined": ""
    }
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%",
      "height": "auto"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-center mt-1"
  }, [_c(VBtnToggle["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length > 0,
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("\n                        Generate\n                      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length == 0,
      "color": "success"
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("\n                        Print\n                      ")])], 1), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    staticClass: "mt-1",
    attrs: {
      "label": "3Col",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.threeColPaper,
      callback: function ($$v) {
        _vm.threeColPaper = _vm._n($$v);
      },
      expression: "threeColPaper"
    }
  })], 1)])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    staticStyle: {
      "max-height": "200px",
      "overflow-y": "auto"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-caption mb-2"
  }, [_vm._v("Image Preview")]), _vm._v(" "), _vm._l(_vm.formData.pro_image, function (img, idx) {
    return _c('div', {
      key: `existing-${idx}`,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(`${_vm.host}/uploads/${img.name}`);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": `${_vm.host}/uploads/${img.name}`
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1"
    }, [_vm._v(_vm._s(img.name))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFileFrServ(idx);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  }), _vm._v(" "), _vm._l(_vm.imagesPreviewURL, function (item, index) {
    return _c('div', {
      key: `new-${index}`,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(item.IMG_URL);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.IMG_URL
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1"
    }, [_vm._v(_vm._s(item.NAME))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFile(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text-caption mt-2"
  }, [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ.")])], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-footer\" data-v-2a0c1bfa>", "</div>", [_vm._ssrNode("<div class=\"footer-actions\" data-v-2a0c1bfa>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v(" Close ")]), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "small": ""
    },
    on: {
      "click": _vm.uploadFilesLocal
    }
  }, [_vm._v(" Save ")])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=template&id=2a0c1bfa&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=script&lang=js
var ProductFormvue_type_script_lang_js = __webpack_require__(480);

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductFormvue_type_script_lang_js = (ProductFormvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(507)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormvue_type_script_lang_js,
  ProductFormvue_type_template_id_2a0c1bfa_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2a0c1bfa",
  "51248ea0"
  
)

/* harmony default export */ var ProductForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(67).default,DiaImage: __webpack_require__(477).default,PriceListForm: __webpack_require__(476).default})


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".iframe-container{overflow:hidden;padding-top:56.25%;position:relative}.iframe-container iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(497);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
var VRating = __webpack_require__(533);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/index.vue?vue&type=template&id=1183dcac
















var productvue_type_template_id_1183dcac_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          class: {
            'on-hover': hover
          },
          attrs: {
            "elevation": hover ? 16 : 2
          }
        }, [_c('router-link', {
          attrs: {
            "to": `/movie/${_vm.movie.id}`
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "src": _vm.posterPath,
            "alt": ""
          }
        })], 1)], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "8"
    }
  }, [_c('h1', {
    staticClass: "grey--text text-darken-3 mt-5"
  }, [_vm._v(_vm._s(this.movie.title))]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "2"
    }
  }, [_c(VRating["a" /* default */], {
    attrs: {
      "value": _vm.movie.vote_average / 2,
      "color": "amber",
      "dense": "",
      "half-increments": "",
      "readonly": "",
      "size": "14"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "3"
    }
  }, [_c('span', {
    staticClass: "gray--text ml-n7"
  }, [_vm._v("\n                        " + _vm._s(_vm.movie.vote_average * 10) + "% | " + _vm._s(_vm.movie.release_date) + "\n                    ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "7"
    }
  }, [_c('div', {
    staticClass: "subtitle-2 grey--text ml-n16"
  }, _vm._l(_vm.movie.genres, function (item, index) {
    return _c('span', {
      key: index,
      staticClass: "ml-1"
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                            "), _vm.movie.genres.length - 1 != index ? _c('span', [_vm._v(",")]) : _vm._e()]);
  }), 0)])], 1), _vm._v(" "), _c('p', {
    staticClass: "mt-5 grey--text text--darken-3 subheader"
  }, [_vm._v(_vm._s(this.movie.overview))]), _vm._v(" "), _c('div', {
    staticClass: "mt-5"
  }, [_c('h2', {
    staticClass: "mt-5 grey--text text--darken-3"
  }, [_vm._v("Featured Cast")]), _vm._v(" "), _vm._l(_vm.movie.credits.crew, function (crew, index) {
    return _c('div', {
      key: index,
      staticClass: "mt-5"
    }, [index < 2 ? _c('div', {}, [_c('h3', [_vm._v(_vm._s(crew.name))]), _vm._v(" "), _c('span', {
      staticClass: "grey--text"
    }, [_vm._v(_vm._s(crew.job))])]) : _vm._e()]);
  })], 2), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "persistent": "",
      "max-width": "800px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "tile": "",
            "color": "error"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.openYouTubeModel.apply(null, arguments);
            }
          }
        }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
          attrs: {
            "left": ""
          }
        }, [_vm._v("mdi-play")]), _vm._v("Play\n                    ")], 1)];
      }
    }]),
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_vm._v(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(this.movie.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": ""
    }
  }, [_c('div', {
    staticClass: "iframe-container"
  }, [!_vm.isVideo ? _c('img', {
    attrs: {
      "src": _vm.mediaURL
    }
  }) : _vm._e(), _vm._v(" "), _vm.isVideo ? _c('iframe', {
    attrs: {
      "allowfullscreen": "",
      "src": _vm.mediaURL
    }
  }) : _vm._e()])])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialog = _vm.flase;
      }
    }
  }, [_vm._v("Close")])], 1)], 1)], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "tile": "",
      "color": "error"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-heart")]), _vm._v("Favorite\n            ")], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._ssrNode(" "), _c('Cast', {
    attrs: {
      "casts": _vm.movie.credits.cast
    }
  }), _vm._ssrNode(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._ssrNode(" "), _c('Images', {
    attrs: {
      "images": _vm.movie.images.backdrops
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/product/index.vue?vue&type=template&id=1183dcac

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/product/index.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(503)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  productvue_type_template_id_1183dcac_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "30570ffe"
  
)

/* harmony default export */ var product = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(478);
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
// Styles
 // Extensions

 // Components

 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-file-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    chips: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    counterSizeString: {
      type: String,
      default: '$vuetify.fileInput.counterSize'
    },
    counterString: {
      type: String,
      default: '$vuetify.fileInput.counter'
    },
    hideInput: Boolean,
    multiple: Boolean,
    placeholder: String,
    prependIcon: {
      type: String,
      default: '$file'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: [Boolean, Number],
      default: false,
      validator: v => {
        return typeof v === 'boolean' || [1000, 1024].includes(v);
      }
    },
    smallChips: Boolean,
    truncateLength: {
      type: [Number, String],
      default: 22
    },
    type: {
      type: String,
      default: 'file'
    },
    value: {
      default: undefined,
      validator: val => {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(val).every(v => v != null && typeof v === 'object');
      }
    }
  },
  computed: {
    classes() {
      return {
        ..._VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-file-input': true
      };
    },
    computedCounterValue() {
      const fileCount = this.multiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
      if (!this.showSize) return this.$vuetify.lang.t(this.counterString, fileCount);
      const bytes = this.internalArrayValue.reduce((bytes, {
        size = 0
      }) => {
        return bytes + size;
      }, 0);
      return this.$vuetify.lang.t(this.counterSizeString, fileCount, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(bytes, this.base === 1024));
    },
    internalArrayValue() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(this.internalValue);
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(val) {
        this.lazyValue = val;
        this.$emit('change', this.lazyValue);
      }
    },
    isDirty() {
      return this.internalArrayValue.length > 0;
    },
    isLabelActive() {
      return this.isDirty;
    },
    text() {
      if (!this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel)) return [this.placeholder];
      return this.internalArrayValue.map(file => {
        const {
          name = '',
          size = 0
        } = file;
        const truncatedText = this.truncateText(name);
        return !this.showSize ? truncatedText : `${truncatedText} (${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(size, this.base === 1024)})`;
      });
    },
    base() {
      return typeof this.showSize !== 'boolean' ? this.showSize : undefined;
    },
    hasChips() {
      return this.chips || this.smallChips;
    }
  },
  watch: {
    readonly: {
      handler(v) {
        if (v === true) Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* consoleError */ "b"])('readonly is not supported on <v-file-input>', this);
      },
      immediate: true
    },
    value(v) {
      const value = this.multiple ? v : v ? [v] : [];
      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* deepEqual */ "k"])(value, this.$refs.input.files)) {
        // When the input value is changed programatically, clear the
        // internal input's value so that the `onInput` handler
        // can be triggered again if the user re-selects the exact
        // same file(s). Ideally, `input.files` should be
        // manipulated directly but that property is readonly.
        this.$refs.input.value = '';
      }
    }
  },
  methods: {
    clearableCallback() {
      this.internalValue = this.multiple ? [] : null;
      this.$refs.input.value = '';
    },
    genChips() {
      if (!this.isDirty) return [];
      return this.text.map((text, index) => this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          small: this.smallChips
        },
        on: {
          'click:close': () => {
            const internalValue = this.internalValue;
            internalValue.splice(index, 1);
            this.internalValue = internalValue; // Trigger the watcher
          }
        }
      }, [text]));
    },
    genControl() {
      const render = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControl.call(this);
      if (this.hideInput) {
        render.data.style = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_5__[/* mergeStyles */ "d"])(render.data.style, {
          display: 'none'
        });
      }
      return render;
    },
    genInput() {
      const input = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.data.attrs.multiple = this.multiple; // We should not be setting value
      // programmatically on the input
      // when it is using type="file"

      delete input.data.domProps.value; // This solves an issue in Safari where
      // nothing happens when adding a file
      // due to the input event not firing
      // https://github.com/vuetifyjs/vuetify/issues/7941

      delete input.data.on.input;
      input.data.on.change = this.onInput;
      return [this.genSelections(), input];
    },
    genPrependSlot() {
      if (!this.prependIcon) return null;
      const icon = this.genIcon('prepend', () => {
        this.$refs.input.click();
      });
      return this.genSlot('prepend', 'outer', [icon]);
    },
    genSelectionText() {
      const length = this.text.length;
      if (length < 2) return this.text;
      if (this.showSize && !this.counter) return [this.computedCounterValue];
      return [this.$vuetify.lang.t(this.counterString, length)];
    },
    genSelections() {
      const children = [];
      if (this.isDirty && this.$scopedSlots.selection) {
        this.internalArrayValue.forEach((file, index) => {
          if (!this.$scopedSlots.selection) return;
          children.push(this.$scopedSlots.selection({
            text: this.text[index],
            file,
            index
          }));
        });
      } else {
        children.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText());
      }
      return this.$createElement('div', {
        staticClass: 'v-file-input__text',
        class: {
          'v-file-input__text--placeholder': this.placeholder && !this.isDirty,
          'v-file-input__text--chips': this.hasChips && !this.$scopedSlots.selection
        }
      }, children);
    },
    genTextFieldSlot() {
      const node = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genTextFieldSlot.call(this);
      node.data.on = {
        ...(node.data.on || {}),
        click: e => {
          // Clicking the label already delegates to input element, so we shouldn't click it twice
          if (e.target && e.target.nodeName === 'LABEL') return;
          this.$refs.input.click();
        }
      };
      return node;
    },
    onInput(e) {
      const files = [...(e.target.files || [])];
      this.internalValue = this.multiple ? files : files[0]; // Set initialValue here otherwise isFocused
      // watcher in VTextField will emit a change
      // event whenever the component is blurred

      this.initialValue = this.internalValue;
    },
    onKeyDown(e) {
      this.$emit('keydown', e);
    },
    truncateText(str) {
      if (str.length < Number(this.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(this.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }
  }
}));

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_2a0c1bfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-2a0c1bfa]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-2a0c1bfa],.modal-overlay[data-v-2a0c1bfa]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-2a0c1bfa]{background:#fff;flex-direction:column;overflow:hidden}.modal-content[data-v-2a0c1bfa]{flex:1;overflow-x:hidden;overflow-y:auto;padding-bottom:20px}.modal-footer[data-v-2a0c1bfa]{background:#f8f9fa;border-top:1px solid #e9ecef;bottom:0;box-shadow:0 -2px 4px rgba(0,0,0,.1);padding:12px 20px;position:sticky;z-index:10}.footer-actions[data-v-2a0c1bfa]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-2a0c1bfa]{height:100vh;width:100vw}.footer-actions[data-v-2a0c1bfa]{flex-direction:row;gap:8px}.footer-actions .v-btn[data-v-2a0c1bfa]{min-width:80px}.col-2[data-v-2a0c1bfa],.col-3[data-v-2a0c1bfa],.col-4[data-v-2a0c1bfa],.col-6[data-v-2a0c1bfa]{flex:0 0 100%;max-width:100%}}@media (max-width:600px){.modal-footer[data-v-2a0c1bfa]{padding:8px 16px}.footer-actions[data-v-2a0c1bfa]{width:100%}.footer-actions .v-btn[data-v-2a0c1bfa]{flex:1}}.modal-content[data-v-2a0c1bfa]::-webkit-scrollbar{width:8px}.modal-content[data-v-2a0c1bfa]::-webkit-scrollbar-track{background:#f1f1f1}.modal-content[data-v-2a0c1bfa]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.modal-content[data-v-2a0c1bfa]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.my-form[data-v-2a0c1bfa]{font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_620c20a2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(491);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_620c20a2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_620c20a2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_620c20a2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_620c20a2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-620c20a2]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-620c20a2],.modal-overlay[data-v-620c20a2]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-620c20a2]{background:#fff;flex-direction:column;overflow:hidden}.modal-content[data-v-620c20a2]{flex:1;overflow-x:hidden;overflow-y:auto;padding-bottom:20px}.modal-footer[data-v-620c20a2]{background:#f8f9fa;border-top:1px solid #e9ecef;bottom:0;box-shadow:0 -2px 4px rgba(0,0,0,.1);padding:12px 20px;position:sticky;z-index:10}.footer-actions[data-v-620c20a2]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-620c20a2]{height:100vh;width:100vw}.footer-actions[data-v-620c20a2]{flex-direction:row;gap:8px}.footer-actions .v-btn[data-v-620c20a2]{min-width:80px}}@media (max-width:600px){.modal-footer[data-v-620c20a2]{padding:8px 16px}.footer-actions[data-v-620c20a2]{width:100%}.footer-actions .v-btn[data-v-620c20a2]{flex:1}}.modal-content[data-v-620c20a2]::-webkit-scrollbar{width:8px}.modal-content[data-v-620c20a2]::-webkit-scrollbar-track{background:#f1f1f1}.modal-content[data-v-620c20a2]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.modal-content[data-v-620c20a2]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.grey[data-v-620c20a2],.text-h5[data-v-620c20a2]{font-family:\"Noto Sans Lao\"}.my-form[data-v-620c20a2]{font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(514);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("53887fd2", content, true)

/***/ }),

/***/ 514:
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

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
// Styles
 // Components

 // Mixins





 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-rating',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    color: {
      type: String,
      default: 'primary'
    },
    clearable: Boolean,
    dense: Boolean,
    emptyIcon: {
      type: String,
      default: '$ratingEmpty'
    },
    fullIcon: {
      type: String,
      default: '$ratingFull'
    },
    halfIcon: {
      type: String,
      default: '$ratingHalf'
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    size: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    iconLabel: {
      type: String,
      default: '$vuetify.rating.ariaLabel.icon'
    }
  },
  data() {
    return {
      hoverIndex: -1,
      internalValue: this.value
    };
  },
  computed: {
    directives() {
      if (this.readonly || !this.ripple) return [];
      return [{
        name: 'ripple',
        value: {
          circle: true
        }
      }];
    },
    iconProps() {
      const {
        dark,
        large,
        light,
        medium,
        small,
        size,
        xLarge,
        xSmall
      } = this.$props;
      return {
        dark,
        large,
        light,
        medium,
        size,
        small,
        xLarge,
        xSmall
      };
    },
    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    }
  },
  watch: {
    internalValue(val) {
      val !== this.value && this.$emit('input', val);
    },
    value(val) {
      this.internalValue = val;
    }
  },
  methods: {
    createClickFn(i) {
      return e => {
        if (this.readonly) return;
        const newValue = this.genHoverIndex(e, i);
        if (this.clearable && this.internalValue === newValue) {
          this.internalValue = 0;
        } else {
          this.internalValue = newValue;
        }
      };
    },
    createProps(i) {
      const props = {
        index: i,
        value: this.internalValue,
        click: this.createClickFn(i),
        isFilled: Math.floor(this.internalValue) > i,
        isHovered: Math.floor(this.hoverIndex) > i
      };
      if (this.halfIncrements) {
        props.isHalfHovered = !props.isHovered && (this.hoverIndex - i) % 1 > 0;
        props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
      }
      return props;
    },
    genHoverIndex(e, i) {
      let isHalf = this.isHalfEvent(e);
      if (this.halfIncrements && this.$vuetify.rtl) {
        isHalf = !isHalf;
      }
      return i + (isHalf ? 0.5 : 1);
    },
    getIconName(props) {
      const isFull = this.isHovering ? props.isHovered : props.isFilled;
      const isHalf = this.isHovering ? props.isHalfHovered : props.isHalfFilled;
      return isFull ? this.fullIcon : isHalf ? this.halfIcon : this.emptyIcon;
    },
    getColor(props) {
      if (this.isHovering) {
        if (props.isHovered || props.isHalfHovered) return this.color;
      } else {
        if (props.isFilled || props.isHalfFilled) return this.color;
      }
      return this.backgroundColor;
    },
    isHalfEvent(e) {
      if (this.halfIncrements) {
        const rect = e.target && e.target.getBoundingClientRect();
        if (rect && e.pageX - rect.left < rect.width / 2) return true;
      }
      return false;
    },
    onMouseEnter(e, i) {
      this.runDelay('open', () => {
        this.hoverIndex = this.genHoverIndex(e, i);
      });
    },
    onMouseLeave() {
      this.runDelay('close', () => this.hoverIndex = -1);
    },
    genItem(i) {
      const props = this.createProps(i);
      if (this.$scopedSlots.item) return this.$scopedSlots.item(props);
      const listeners = {
        click: props.click
      };
      if (this.hover) {
        listeners.mouseenter = e => this.onMouseEnter(e, i);
        listeners.mouseleave = this.onMouseLeave;
        if (this.halfIncrements) {
          listeners.mousemove = e => this.onMouseEnter(e, i);
        }
      }
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.setTextColor(this.getColor(props), {
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.iconLabel, i + 1, Number(this.length))
        },
        directives: this.directives,
        props: this.iconProps,
        on: listeners
      }), [this.getIconName(props)]);
    }
  },
  render(h) {
    const children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* createRange */ "i"])(Number(this.length)).map(i => this.genItem(i));
    return h('div', {
      staticClass: 'v-rating',
      class: {
        'v-rating--readonly': this.readonly,
        'v-rating--dense': this.dense
      }
    }, children);
  }
}));

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(535);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("410cae3c", content, true)

/***/ }),

/***/ 535:
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

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(492);
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

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(618);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0e858358", content, true, context)
};

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _mixins_menuable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(110);
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

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardForm_vue_vue_type_style_index_0_id_2ec0eab4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardForm_vue_vue_type_style_index_0_id_2ec0eab4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardForm_vue_vue_type_style_index_0_id_2ec0eab4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardForm_vue_vue_type_style_index_0_id_2ec0eab4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardForm_vue_vue_type_style_index_0_id_2ec0eab4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card[data-v-2ec0eab4]{border-radius:12px!important}.v-alert[data-v-2ec0eab4],.v-btn-toggle .v-btn[data-v-2ec0eab4],.v-text-field.v-text-field--outlined>.v-input__control>.v-input__slot[data-v-2ec0eab4]{border-radius:8px!important}.grey--text .v-input__slot[data-v-2ec0eab4]{background-color:#f5f5f5!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 633:
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

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
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

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var VBtnToggle = __webpack_require__(433);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js + 16 modules
var VDatePicker = __webpack_require__(474);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/cardForm.vue?vue&type=template&id=2ec0eab4&scoped=true





















var cardFormvue_type_template_id_2ec0eab4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isSubmitting,
      callback: function ($$v) {
        _vm.isSubmitting = $$v;
      },
      expression: "isSubmitting"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "mx-auto",
    attrs: {
      "max-width": "1200"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-4"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white",
      "size": "24"
    }
  }, [_vm._v("mdi-package-variant-plus")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6"
  }, [_vm._v("Add Stock")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["b" /* VCardSubtitle */], {
    staticClass: "pa-4 pb-2"
  }, [_c(VChip["a" /* default */], {
    staticClass: "ma-1",
    attrs: {
      "color": "primary",
      "label": "",
      "outlined": "",
      "prepend-icon": "mdi-tag"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.productName) + "\n            ")]), _vm._v(" "), _c(VChip["a" /* default */], {
    staticClass: "ma-1",
    attrs: {
      "color": "secondary",
      "label": "",
      "outlined": "",
      "prepend-icon": "mdi-identifier"
    }
  }, [_vm._v("\n                ID: " + _vm._s(_vm.productId) + "\n            ")])], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VContainer["a" /* default */], {
    attrs: {
      "fluid": ""
    }
  }, [_c(VForm["a" /* default */], {
    ref: "myform",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.locationList,
      "label": "Source Location",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-map-marker",
      "rules": [v => !!v || 'Please select a location']
    },
    model: {
      value: _vm.srcLocationId,
      callback: function ($$v) {
        _vm.srcLocationId = $$v;
      },
      expression: "srcLocationId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Quantity",
      "rules": _vm.quantityRules,
      "hide-details": "auto",
      "outlined": "",
      "dense": "",
      "type": "number",
      "min": "1",
      "prepend-inner-icon": "mdi-counter",
      "suffix": "units"
    },
    model: {
      value: _vm.stockQty,
      callback: function ($$v) {
        _vm.stockQty = $$v;
      },
      expression: "stockQty"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-currency-usd",
      "rules": [v => !!v || 'Please select currency']
    },
    model: {
      value: _vm.currencyId,
      callback: function ($$v) {
        _vm.currencyId = $$v;
      },
      expression: "currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Lot Number (Optional)",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-barcode",
      "placeholder": "e.g., LOT2024001",
      "hint": "Batch/Lot identification number",
      "persistent-hint": ""
    },
    model: {
      value: _vm.lotNumber,
      callback: function ($$v) {
        _vm.lotNumber = $$v;
      },
      expression: "lotNumber"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VMenu["a" /* default */], {
    attrs: {
      "close-on-content-click": false,
      "nudge-right": 40,
      "transition": "scale-transition",
      "offset-y": "",
      "min-width": "auto"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "label": "Expiry Date (Optional)",
            "prepend-inner-icon": "mdi-calendar-clock",
            "outlined": "",
            "dense": "",
            "readonly": "",
            "color": _vm.expiryStatus.color,
            "hint": _vm.expiryStatus.message,
            "persistent-hint": "",
            "clearable": ""
          },
          on: {
            "click:clear": _vm.clearExpiryDate
          },
          model: {
            value: _vm.expiryDateFormatted,
            callback: function ($$v) {
              _vm.expiryDateFormatted = $$v;
            },
            expression: "expiryDateFormatted"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }]),
    model: {
      value: _vm.expiryMenu,
      callback: function ($$v) {
        _vm.expiryMenu = $$v;
      },
      expression: "expiryMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "min": _vm.minDate,
      "color": "primary"
    },
    on: {
      "input": function ($event) {
        _vm.expiryMenu = false;
      }
    },
    model: {
      value: _vm.expiryDate,
      callback: function ($$v) {
        _vm.expiryDate = $$v;
      },
      expression: "expiryDate"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["b" /* VCardSubtitle */], {
    staticClass: "pa-0 mb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-calculator")]), _vm._v("\n                                    Cost Calculation\n                                ")], 1), _vm._v(" "), _c(VBtnToggle["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "exclusive": "",
      "dense": "",
      "color": "primary"
    },
    model: {
      value: _vm.costType,
      callback: function ($$v) {
        _vm.costType = $$v;
      },
      expression: "costType"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "value": "perUnit",
      "small": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-numeric-1-circle")]), _vm._v("\n                                        Per Unit\n                                    ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "value": "total",
      "small": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-sigma")]), _vm._v("\n                                        Total Cost\n                                    ")], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": _vm.costType === 'perUnit' ? 'Cost Per Unit' : 'Total Cost',
      "rules": _vm.numberRule,
      "hide-details": "auto",
      "outlined": "",
      "dense": "",
      "type": "number",
      "min": "0",
      "step": "0.01",
      "prepend-inner-icon": _vm.costType === 'perUnit' ? 'mdi-tag' : 'mdi-calculator',
      "suffix": _vm.selectedCurrencyCode
    },
    on: {
      "input": _vm.calculateCosts
    },
    model: {
      value: _vm.costInput,
      callback: function ($$v) {
        _vm.costInput = $$v;
      },
      expression: "costInput"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    staticClass: "grey--text",
    attrs: {
      "label": _vm.costType === 'perUnit' ? 'Total Cost' : 'Cost Per Unit',
      "value": _vm.calculatedCost,
      "outlined": "",
      "dense": "",
      "readonly": "",
      "prepend-inner-icon": _vm.costType === 'perUnit' ? 'mdi-calculator' : 'mdi-tag',
      "suffix": _vm.selectedCurrencyCode
    }
  })], 1)], 1), _vm._v(" "), _vm.stockQty && _vm.costInput ? _c(VAlert["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "color": "info",
      "dense": "",
      "outlined": ""
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], [_c('strong', [_vm._v("Cost Summary:")]), _vm._v(" \n                                            " + _vm._s(_vm.stockQty) + " units × " + _vm._s(_vm.formatPrice(_vm.costPerUnit)) + " " + _vm._s(_vm.selectedCurrencyCode) + " \n                                            = " + _vm._s(_vm.formatPrice(_vm.totalCost)) + " " + _vm._s(_vm.selectedCurrencyCode) + "\n                                        ")])], 1)], 1) : _vm._e(), _vm._v(" "), _vm.lotNumber || _vm.expiryDate ? _c(VAlert["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "color": _vm.expiryStatus.color || 'primary',
      "dense": "",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Stock Information:")]), _vm._v(" "), _vm.lotNumber ? _c('span', {
    staticClass: "ml-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": "secondary",
      "outlined": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "x-small": "",
      "left": ""
    }
  }, [_vm._v("mdi-barcode")]), _vm._v("\n                                                    " + _vm._s(_vm.lotNumber) + "\n                                                ")], 1)], 1) : _vm._e(), _vm._v(" "), _vm.expiryDate ? _c('span', {
    staticClass: "ml-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": _vm.expiryStatus.color,
      "outlined": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "x-small": "",
      "left": ""
    }
  }, [_vm._v("mdi-calendar")]), _vm._v("\n                                                    " + _vm._s(_vm.expiryDateFormatted) + "\n                                                ")], 1)], 1) : _vm._e()])], 1), _vm._v(" "), _vm.expiryDate ? _c('div', {
    staticClass: "caption mt-1"
  }, [_vm._v("\n                                        " + _vm._s(_vm.expiryStatus.message) + "\n                                    ")]) : _vm._e()]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _vm.currencyExchangeRate !== 1 ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    attrs: {
      "color": "warning",
      "dense": "",
      "outlined": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-swap-horizontal")]), _vm._v("\n                                Exchange Rate: 1 " + _vm._s(_vm.selectedCurrencyCode) + " = " + _vm._s(_vm.currencyExchangeRate) + " \n                                (Base Currency)\n                            ")], 1)], 1)], 1) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "outlined": "",
      "color": "grey",
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n                Cancel\n            ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.isSubmitting,
      "disabled": !_vm.isFormValid
    },
    on: {
      "click": _vm.stockSubmit
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n                Add Stock\n            ")], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/card/cardForm.vue?vue&type=template&id=2ec0eab4&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/cardForm.vue?vue&type=script&lang=js


/* harmony default export */ var cardFormvue_type_script_lang_js = ({
  props: {
    id: {
      type: Number,
      default: 0
    },
    productId: {
      type: Number,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    cost: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      stockQty: 1,
      costInput: 0,
      costType: 'perUnit',
      // 'perUnit' or 'total'
      isSubmitting: false,
      locationList: [],
      srcLocationId: null,
      currencyId: 1,
      lotNumber: '',
      expiryDate: null,
      expiryMenu: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllCurrency', 'findSelectedTerminal', 'findAllTerminal']),
    quantityRules() {
      return [v => !!v || 'Please enter quantity', v => /^[0-9]+$/.test(v) || 'Only numbers allowed', v => parseInt(v) > 0 || 'Quantity must be greater than 0'];
    },
    numberRule() {
      return [v => !!v || 'Please enter amount', v => /^[0-9]+\.?[0-9]*$/.test(v) || 'Invalid number format', v => parseFloat(v) >= 0 || 'Amount must be positive'];
    },
    user() {
      return this.$auth.user || '';
    },
    currencyExchangeRate() {
      const currency = this.findAllCurrency.find(el => el.id == this.currencyId);
      return currency ? currency.rate : 1;
    },
    selectedCurrencyCode() {
      const currency = this.findAllCurrency.find(el => el.id == this.currencyId);
      return currency ? currency.code : '';
    },
    costPerUnit() {
      if (this.costType === 'perUnit') {
        return parseFloat(this.costInput) || 0;
      } else {
        return this.stockQty > 0 ? (parseFloat(this.costInput) || 0) / this.stockQty : 0;
      }
    },
    totalCost() {
      if (this.costType === 'total') {
        return parseFloat(this.costInput) || 0;
      } else {
        return (parseFloat(this.costInput) || 0) * (this.stockQty || 0);
      }
    },
    calculatedCost() {
      if (this.costType === 'perUnit') {
        return this.formatPrice(this.totalCost);
      } else {
        return this.formatPrice(this.costPerUnit);
      }
    },
    isFormValid() {
      return this.stockQty > 0 && this.costInput >= 0 && this.srcLocationId && this.currencyId && !this.isSubmitting;
    },
    // Date handling
    minDate() {
      return new Date().toISOString().substr(0, 10);
    },
    expiryDateFormatted() {
      return this.expiryDate ? this.formatDate(this.expiryDate) : '';
    },
    expiryStatus() {
      if (!this.expiryDate) {
        return {
          color: '',
          message: 'No expiry date set'
        };
      }
      const today = new Date();
      const expiry = new Date(this.expiryDate);
      const diffTime = expiry.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays < 0) {
        return {
          color: 'error',
          message: 'Already expired!'
        };
      } else if (diffDays <= 30) {
        return {
          color: 'warning',
          message: `Expires in ${diffDays} days`
        };
      } else if (diffDays <= 90) {
        return {
          color: 'orange',
          message: `Expires in ${diffDays} days`
        };
      } else {
        return {
          color: 'success',
          message: `Expires in ${diffDays} days`
        };
      }
    }
  },
  watch: {
    cost: {
      immediate: true,
      handler(newVal) {
        if (newVal > 0) {
          this.costInput = newVal;
        }
      }
    },
    stockQty() {
      this.calculateCosts();
    }
  },
  created() {
    console.log(`Location in terminal ${this.findSelectedTerminal}`);
    const terminal = this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    if (terminal) {
      this.srcLocationId = terminal['locationId'];
    }
    this.loadLocation();
    this.loadProduct();
  },
  methods: {
    calculateCosts() {
      // This method is called when input changes to trigger reactivity
      // The actual calculations are handled by computed properties
    },
    formatPrice(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount || 0);
    },
    formatDate(date) {
      if (!date) return '';
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
    clearExpiryDate() {
      this.expiryDate = null;
    },
    validateExpiryDate() {
      if (this.expiryDate) {
        const today = new Date();
        const expiry = new Date(this.expiryDate);
        if (expiry < today) {
          this.$emit('show-message', 'Warning: Adding stock with expired date!', 'warning', 'mdi-calendar-alert');
        }
      }
    },
    async loadLocation() {
      try {
        const res = await this.$axios.get(`api/location/find`);
        this.locationList = res.data.map(el => el);
      } catch (error) {
        Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'Failed to load locations: ' + error.message);
      }
    },
    async loadProduct() {
      this.isSubmitting = true;
      try {
        const res = await this.$axios.get(`api/product/find/${this.id}`);
        if (res.data.costCurrency) {
          console.log(`Cost info available`);
          this.currencyId = res.data.costCurrency.id;
        } else {
          console.log(`Cost info not available`);
        }
      } catch (error) {
        Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'Failed to load product: ' + error.message);
      }
      this.isSubmitting = false;
    },
    async stockSubmit() {
      if (this.$refs.myform.validate() && !this.isSubmitting) {
        // Validate expiry date
        this.validateExpiryDate();
        this.isSubmitting = true;
        const stockData = {
          inputter: this.user.id,
          product_id: this.productId,
          stockCardQty: parseInt(this.stockQty),
          totalCost: this.totalCost,
          costPerUnit: this.costPerUnit,
          productId: this.id,
          srcLocationId: this.srcLocationId,
          currencyId: this.currencyId,
          exchangeRate: this.currencyExchangeRate,
          costType: this.costType,
          lotNumber: this.lotNumber || null,
          expiryDate: this.expiryDate || null,
          hasExpiry: !!this.expiryDate,
          hasLot: !!this.lotNumber
        };
        console.log("Stock data:", stockData);
        try {
          const res = await this.$axios.post('/api/card/bulkCreate', stockData);
          console.log(res.data);
          let successMessage = 'Stock added successfully!';
          if (this.lotNumber && this.expiryDate) {
            successMessage += ` (Lot: ${this.lotNumber}, Expires: ${this.expiryDateFormatted})`;
          } else if (this.lotNumber) {
            successMessage += ` (Lot: ${this.lotNumber})`;
          } else if (this.expiryDate) {
            successMessage += ` (Expires: ${this.expiryDateFormatted})`;
          }
          Object(common["l" /* swalSuccess */])(this.$swal, 'Success', successMessage);
          this.$emit('reload');
          this.$emit('close-dialog');
        } catch (error) {
          var _error$response;
          console.log(error);
          Object(common["k" /* swalError2 */])(this.$swal, "Error", ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data) || error.message);
        }
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/card/cardForm.vue?vue&type=script&lang=js
 /* harmony default export */ var card_cardFormvue_type_script_lang_js = (cardFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/card/cardForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(617)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_cardFormvue_type_script_lang_js,
  cardFormvue_type_template_id_2ec0eab4_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2ec0eab4",
  "9d562920"
  
)

/* harmony default export */ var cardForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(67).default})


/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTabs/VTabs.sass
var VTabs = __webpack_require__(534);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
var VSlideGroup = __webpack_require__(487);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js
var ssr_bootable = __webpack_require__(44);

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
var VTabsItems = __webpack_require__(536);

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
var proxyable = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(54);

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

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(813);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7c45559e", content, true, context)
};

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(815);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7d13d41f", content, true, context)
};

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(712);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 813:
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

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(713);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_7c805bba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".recipe-management[data-v-7c805bba]{box-sizing:border-box;min-height:100vh;padding:20px}.page-header[data-v-7c805bba]{align-items:center;background:var(--v-primary-base);border-radius:8px;color:#fff;display:flex;flex-wrap:nowrap;justify-content:space-between;margin-bottom:24px;min-height:120px;padding:24px}.header-content[data-v-7c805bba]{flex:1;min-width:0}.page-title[data-v-7c805bba]{align-items:center;display:flex;font-size:28px;font-weight:600;margin:0;overflow:visible;white-space:nowrap}.page-subtitle[data-v-7c805bba]{font-size:16px;margin:8px 0 0;opacity:.9;white-space:nowrap}.header-actions[data-v-7c805bba]{display:flex;flex-shrink:0;gap:12px}.stat-card[data-v-7c805bba]{height:100%;transition:transform .2s ease}.stat-card[data-v-7c805bba]:hover{transform:translateY(-2px)}.stat-value[data-v-7c805bba]{font-size:24px;font-weight:700;margin:0}.stat-label[data-v-7c805bba]{color:#666;font-size:14px;margin:4px 0 0}.filter-card[data-v-7c805bba]{background:#f8f9fa}.filter-title[data-v-7c805bba]{background:var(--v-primary-base);color:#fff;font-weight:600}.ingredient-info[data-v-7c805bba],.product-info[data-v-7c805bba]{min-height:40px}.quantity-info[data-v-7c805bba]{font-weight:600;text-align:center}.quantity-unit[data-v-7c805bba]{color:#666;font-size:12px;margin-left:4px}.cost-info[data-v-7c805bba]{text-align:right}.cost-value[data-v-7c805bba]{color:var(--v-primary-base);font-family:monospace}.action-buttons[data-v-7c805bba]{display:flex;gap:4px;justify-content:center}.dialog-title[data-v-7c805bba]{background:var(--v-primary-base);color:#fff;font-weight:600}.bulk-table[data-v-7c805bba],.ingredient-builder-table[data-v-7c805bba]{border:1px solid #e0e0e0;border-radius:4px}@media (max-width:960px){.page-header[data-v-7c805bba]{flex-direction:column;gap:16px;min-height:auto;padding:20px;text-align:center}.page-title[data-v-7c805bba]{font-size:24px;justify-content:center}.page-subtitle[data-v-7c805bba]{text-align:center}.header-actions[data-v-7c805bba]{flex-direction:row;justify-content:center;width:100%}}@media (max-width:768px){.page-header[data-v-7c805bba],.recipe-management[data-v-7c805bba]{padding:16px}.page-title[data-v-7c805bba]{flex-direction:column;font-size:20px;gap:8px}.header-actions[data-v-7c805bba]{width:100%}.action-buttons[data-v-7c805bba],.header-actions[data-v-7c805bba]{flex-direction:column}}@media (max-width:600px){.page-subtitle[data-v-7c805bba],.page-title[data-v-7c805bba]{white-space:normal}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1264);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("03deec28", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=productlist.js.map