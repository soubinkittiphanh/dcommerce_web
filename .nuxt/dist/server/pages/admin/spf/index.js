exports.ids = [284,148];
exports.modules = {

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(414);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(413);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(469);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(449);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SpfDialog.vue?vue&type=template&id=3c678208















var SpfDialogvue_type_template_id_3c678208_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px",
      "persistent": ""
    },
    model: {
      value: _vm.show,
      callback: function ($$v) {
        _vm.show = $$v;
      },
      expression: "show"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v(_vm._s(_vm.isEdit ? 'Edit SPF' : 'Add SPF'))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
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
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.codeRules,
      "label": "Code *",
      "required": "",
      "outlined": "",
      "disabled": _vm.isEdit,
      "hint": "Code cannot be changed after creation",
      "persistent-hint": ""
    },
    model: {
      value: _vm.formData.code,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "code", $$v);
      },
      expression: "formData.code"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Value",
      "outlined": ""
    },
    model: {
      value: _vm.formData.value,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "value", $$v);
      },
      expression: "formData.value"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Remark",
      "outlined": "",
      "rows": "3"
    },
    model: {
      value: _vm.formData.remark,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "remark", $$v);
      },
      expression: "formData.remark"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", $$v);
      },
      expression: "formData.isActive"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": "",
      "loading": _vm.saving,
      "disabled": !_vm.valid
    },
    on: {
      "click": _vm.save
    }
  }, [_vm._v("\n        Save\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SpfDialog.vue?vue&type=template&id=3c678208

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SpfDialog.vue?vue&type=script&lang=js
/* harmony default export */ var SpfDialogvue_type_script_lang_js = ({
  name: 'SpfDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      valid: false,
      saving: false,
      formData: {
        code: '',
        value: '',
        remark: '',
        isActive: true
      },
      codeRules: [v => !!v || 'Code is required', v => v && v.length >= 2 || 'Code must be at least 2 characters', v => /^[A-Za-z0-9_-]+$/.test(v) || 'Code can only contain letters, numbers, underscores, and hyphens']
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
    isEdit() {
      return !!(this.item && this.item.id);
    }
  },
  watch: {
    item: {
      handler(newItem) {
        if (newItem) {
          this.formData = {
            id: newItem.id || null,
            code: newItem.code || '',
            value: newItem.value || '',
            remark: newItem.remark || '',
            isActive: newItem.isActive !== undefined ? newItem.isActive : true
          };
        } else {
          this.resetForm();
        }
      },
      immediate: true
    },
    show(newVal) {
      if (!newVal) {
        this.resetForm();
      }
    }
  },
  methods: {
    resetForm() {
      this.formData = {
        code: '',
        value: '',
        remark: '',
        isActive: true
      };
      if (this.$refs.form) {
        this.$refs.form.resetValidation();
      }
    },
    close() {
      this.$emit('close');
    },
    async save() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.saving = true;
      try {
        this.$emit('save', {
          ...this.formData
        });
      } catch (error) {
        console.error('Save error:', error);
      } finally {
        this.saving = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/SpfDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SpfDialogvue_type_script_lang_js = (SpfDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/SpfDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SpfDialogvue_type_script_lang_js,
  SpfDialogvue_type_template_id_3c678208_render,
  staticRenderFns,
  false,
  null,
  null,
  "2a226f0e"
  
)

/* harmony default export */ var SpfDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_67d3297c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(910);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_67d3297c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_67d3297c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_67d3297c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_67d3297c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".spf-container[data-v-67d3297c]{padding:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(424);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/spf/index.vue?vue&type=template&id=67d3297c&scoped=true















var spfvue_type_template_id_67d3297c_scoped_true_render = function render() {
  var _vm$itemToDelete;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "spf-container"
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("SPF Management")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.openDialog();
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n        Add SPF\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "Search by code, value, or remark",
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
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "Status",
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
  })], 1)], 1)], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.filteredItems,
      "loading": _vm.loading,
      "search": _vm.search,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item.isActive",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": item.isActive ? 'success' : 'error',
            "text-color": "white",
            "small": ""
          }
        }, [_vm._v("\n          " + _vm._s(item.isActive ? 'Active' : 'Inactive') + "\n        ")])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "small": ""
          },
          on: {
            "click": function ($event) {
              return _vm.openDialog(item);
            }
          }
        }, [_vm._v("\n          mdi-pencil\n        ")]), _vm._v(" "), _c(VIcon["a" /* default */], {
          attrs: {
            "small": ""
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item);
            }
          }
        }, [_vm._v("\n          mdi-delete\n        ")])];
      }
    }, {
      key: "item.createdAt",
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatDate(item.createdAt)) + "\n      ")];
      }
    }, {
      key: "item.updateTimestamp",
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatDate(item.updateTimestamp)) + "\n      ")];
      }
    }])
  })], 1), _vm._ssrNode(" "), _c('spf-dialog', {
    attrs: {
      "item": _vm.selectedItem
    },
    on: {
      "save": _vm.handleSave,
      "close": _vm.closeDialog
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "500px"
    },
    model: {
      value: _vm.deleteDialog,
      callback: function ($$v) {
        _vm.deleteDialog = $$v;
      },
      expression: "deleteDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5"
  }, [_vm._v("Confirm Delete")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n        Are you sure you want to delete SPF \"" + _vm._s((_vm$itemToDelete = _vm.itemToDelete) === null || _vm$itemToDelete === void 0 ? void 0 : _vm$itemToDelete.code) + "\"?\n      ")]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.deleteDialog = false;
      }
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "red darken-1",
      "text": ""
    },
    on: {
      "click": _vm.confirmDelete
    }
  }, [_vm._v("\n          Delete\n        ")])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/spf/index.vue?vue&type=template&id=67d3297c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/spf/index.vue?vue&type=script&lang=js
/* harmony default export */ var spfvue_type_script_lang_js = ({
  name: 'SPFIndex',
  components: {
    SpfDialog: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 1015))
  },
  data() {
    return {
      loading: false,
      search: '',
      statusFilter: null,
      dialog: false,
      deleteDialog: false,
      selectedItem: null,
      itemToDelete: null,
      items: [],
      headers: [{
        text: 'Code',
        value: 'code',
        sortable: true
      }, {
        text: 'Value',
        value: 'value',
        sortable: true
      }, {
        text: 'Remark',
        value: 'remark',
        sortable: true
      }, {
        text: 'Status',
        value: 'isActive',
        sortable: true
      }, {
        text: 'Created',
        value: 'createdAt',
        sortable: true
      }, {
        text: 'Updated',
        value: 'updateTimestamp',
        sortable: true
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        width: '120px'
      }],
      statusOptions: [{
        text: 'Active',
        value: true
      }, {
        text: 'Inactive',
        value: false
      }]
    };
  },
  computed: {
    filteredItems() {
      let filtered = this.items;
      if (this.statusFilter !== null) {
        filtered = filtered.filter(item => item.isActive === this.statusFilter);
      }
      return filtered;
    }
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        this.loading = true;
        const response = await this.$axios.get('/api/spf/find');
        console.info(`SPF RES ${JSON.stringify(response)}`);
        this.items = response.data.data;
      } catch (error) {
        this.$toast.error('Error fetching SPF data: ' + error.message);
      } finally {
        this.loading = false;
      }
    },
    openDialog(item = null) {
      this.selectedItem = item ? {
        ...item
      } : null;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.selectedItem = null;
    },
    async handleSave(item) {
      try {
        if (item.id) {
          // Update existing item
          await this.$axios.put(`/api/spf/update/${item.id}`, item);
          this.$toast.success('SPF updated successfully');
        } else {
          // Create new item
          await this.$axios.post('/api/spf/create', item);
          this.$toast.success('SPF created successfully');
        }
        await this.fetchItems();
        this.closeDialog();
      } catch (error) {
        this.$toast.error('Error saving SPF: ' + error.message);
      }
    },
    deleteItem(item) {
      this.itemToDelete = item;
      this.deleteDialog = true;
    },
    async confirmDelete() {
      try {
        await this.$axios.delete(`/api/spf/${this.itemToDelete.id}`);
        this.$toast.success('SPF deleted successfully');
        await this.fetchItems();
      } catch (error) {
        this.$toast.error('Error deleting SPF: ' + error.message);
      } finally {
        this.deleteDialog = false;
        this.itemToDelete = null;
      }
    },
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString() + ' ' + new Date(date).toLocaleTimeString();
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/spf/index.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_spfvue_type_script_lang_js = (spfvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/spf/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_spfvue_type_script_lang_js,
  spfvue_type_template_id_67d3297c_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "67d3297c",
  "4de9f08a"
  
)

/* harmony default export */ var spf = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SpfDialog: __webpack_require__(1015).default})


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 429:
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

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(448);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 448:
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
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

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(190);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(447);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(137);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
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

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5f046166", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map