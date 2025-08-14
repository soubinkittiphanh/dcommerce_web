exports.ids = [235,38,46,119,120,122];
exports.modules = {

/***/ 1128:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/web_category/index.vue?vue&type=template&id=c48bced6&scoped=true&
















var web_categoryvue_type_template_id_c48bced6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-left"
  }, [_vm._ssrNode("<div data-v-c48bced6>", "</div>", [_c(VChip["a" /* default */], {
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
  }, [_vm._v("mdi-label")]), _vm._v(" "), _c('h3', [_vm._v("ລາຍການ ປະເພດສິນຄ້າ")])], 1), _vm._ssrNode(" "), _c(VChip["a" /* default */], {
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
  }, [_vm._v("mdi mdi-lifebuoy")]), _vm._v(" "), _c('h3', [_vm._v("ຄູ່ມືການນຳໃຊ້ ")])], 1)], 2), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
      "youtube-link": "znnN7ZLdf3I"
    },
    on: {
      "close-dialog": function ($event) {
        _vm.guidelineDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.formDialog,
      callback: function ($$v) {
        _vm.formDialog = $$v;
      },
      expression: "formDialog"
    }
  }, [_c('category-form', {
    key: _vm.componentKey,
    attrs: {
      "is-create": _vm.isCreate,
      "record-id": _vm.entrySelectedId
    },
    on: {
      "close-dialog": _vm.handleEvent,
      "reload-data": _vm.loadData
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.categoryProduct,
      callback: function ($$v) {
        _vm.categoryProduct = $$v;
      },
      expression: "categoryProduct"
    }
  }, [_c('category-product-form', {
    key: _vm.componentKey,
    attrs: {
      "category": _vm.selectedCategory,
      "isCreate": false
    },
    on: {
      "close-dialog": function ($event) {
        _vm.categoryProduct = false;
      },
      "refresh-data": _vm.loadData
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "width": "500",
      "persistent": ""
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VTextField["a" /* default */], {
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "ຊອກຫາ",
      "single-line": "",
      "hide-details": ""
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _vm.entries ? _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.filterEntries,
      "items-per-page": 5,
      "search": _vm.search
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VToolbar["a" /* default */], {
          staticClass: "pa-4",
          attrs: {
            "flat": ""
          }
        }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
          attrs: {
            "cols": "8"
          }
        }, [_c(components_VToolbar["a" /* VToolbarTitle */], [_vm._v("ຈຳນວນ ປະເພດສິນຄ້າທັງຫມົດ: " + _vm._s(_vm.filterEntries.length))])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
          attrs: {
            "cols": "4",
            "jujustify": "end"
          }
        }, [_c(VRow["a" /* default */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "primary",
          attrs: {
            "size": "large",
            "variant": "outlined",
            "rounded": ""
          },
          on: {
            "click": _vm.createRecord
          }
        }, [_vm._v("\n                  ສ້າງໃຫມ່\n                ")])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VCheckbox["a" /* default */], {
          attrs: {
            "label": "ສະແດງລາຍການ inActive"
          },
          model: {
            value: _vm.showActive,
            callback: function ($$v) {
              _vm.showActive = _vm._n($$v);
            },
            expression: "showActive"
          }
        })], 1)], 1)], 1)], 1)];
      },
      proxy: true
    }, {
      key: `item.edit`,
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
              return _vm.editItem(item);
            }
          }
        }, [_c('i', {
          staticClass: "fa-regular fa-pen-to-square"
        })])];
      }
    }, {
      key: `item.addProduct`,
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
              return _vm.categoryProductFormAction(true, item);
            }
          }
        }, [_c('i', {
          staticClass: "fa-solid fa-plus"
        })])];
      }
    }], null, true)
  }) : _vm._e(), _vm._v(" "), _c(components_VCard["c" /* VCardText */])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/web_category/index.vue?vue&type=template&id=c48bced6&scoped=true&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(137);

// EXTERNAL MODULE: ./components/WebCategoryForm.vue + 4 modules
var WebCategoryForm = __webpack_require__(818);

// EXTERNAL MODULE: ./components/WebCategoryProductForm.vue + 4 modules
var WebCategoryProductForm = __webpack_require__(819);

// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__(361);
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/web_category/index.vue?vue&type=script&lang=js&




/* harmony default export */ var web_categoryvue_type_script_lang_js_ = ({
  middleware: 'auths',
  components: {
    CategoryForm: WebCategoryForm["default"],
    CategoryProductForm: WebCategoryProductForm["default"],
    Draggable: external_vuedraggable_default.a
  },
  data: () => ({
    guidelineDialog: false,
    isloading: false,
    selected: [],
    dialog: false,
    dialogForm: false,
    entrySelectedId: 0,
    componentKey: 1,
    isCreate: false,
    formDialog: false,
    categoryProduct: false,
    message: '',
    search: '',
    showActive: false,
    selectedCategory: null,
    headers: [{
      text: 'RECID',
      align: 'center',
      sortable: false,
      value: 'id'
    }, {
      text: 'ຊື່',
      align: 'center',
      value: 'name'
    }, {
      text: 'ຊື່ (ສາກົນ)',
      align: 'center',
      value: 'g_name'
    }, {
      text: 'ຫມາຍເຫດ',
      align: 'center',
      value: 'remark'
    }, {
      text: 'ແກ້ໄຂ',
      align: 'end',
      value: 'edit',
      sortable: false
    }, {
      text: 'ເພີ່ມສິນຄ້າ',
      align: 'end',
      value: 'addProduct',
      sortable: false
    }],
    entries: []
  }),
  created() {
    this.loadData();
  },
  computed: {
    filterEntries() {
      console.log(`Show inActive = ${this.showActive}`);
      if (this.showActive) return this.entries;
      return this.entries.filter(el => el['isActive'] == true) || [];
    }
  },
  methods: {
    onEnd(event) {
      console.log('Drag ended:', event);
    },
    handleEvent() {
      this.formDialog = false;
    },
    async loadData() {
      this.isloading = true;
      await this.$axios.get('/api/webproductgroup/findAll').then(response => {
        this.entries = response.data;
      }).catch(er => {
        // console.log('Data: ' + er)
        Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", er);
      });
      this.isloading = false;
    },
    createRecord() {
      console.log(`******CREATE RECORD******`);
      this.componentKey += 1;
      this.entrySelectedId = 0;
      this.isCreate = true;
      this.formDialog = true;
    },
    categoryProductFormAction(action, category) {
      this.componentKey += 1;
      this.selectedCategory = category;
      this.categoryProduct = action;
    },
    editItem(item) {
      console.log(`******UPDATE RECORD******`);
      this.componentKey += 1;
      this.entrySelectedId = item.id;
      this.formDialog = true;
      this.isCreate = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/web_category/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_web_categoryvue_type_script_lang_js_ = (web_categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/web_category/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(956)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_web_categoryvue_type_script_lang_js_,
  web_categoryvue_type_template_id_c48bced6_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "c48bced6",
  "ec8c45e6"
  
)

/* harmony default export */ var web_category = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {YoutubePlayer: __webpack_require__(398).default,CategoryForm: __webpack_require__(479).default,DialogClassicMessage: __webpack_require__(397).default,LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(391);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 391:
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

/***/ 397:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34&








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

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=script&lang=js&
/* harmony default export */ var DialogClassicMessagevue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DialogClassicMessagevue_type_script_lang_js_ = (DialogClassicMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DialogClassicMessagevue_type_script_lang_js_,
  DialogClassicMessagevue_type_template_id_3accbb34_render,
  staticRenderFns,
  false,
  null,
  null,
  "cf974660"
  
)

/* harmony default export */ var DialogClassicMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 398:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/YoutubePlayer.vue?vue&type=template&id=ba62a84e&






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

// CONCATENATED MODULE: ./components/YoutubePlayer.vue?vue&type=template&id=ba62a84e&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/YoutubePlayer.vue?vue&type=script&lang=js&

/* harmony default export */ var YoutubePlayervue_type_script_lang_js_ = ({
  props: {
    youtubeLink: {
      type: String,
      require: true
    }
  }
});
// CONCATENATED MODULE: ./components/YoutubePlayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_YoutubePlayervue_type_script_lang_js_ = (YoutubePlayervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/YoutubePlayer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_YoutubePlayervue_type_script_lang_js_,
  YoutubePlayervue_type_template_id_ba62a84e_render,
  staticRenderFns,
  false,
  null,
  null,
  "9fefcabe"
  
)

/* harmony default export */ var YoutubePlayer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
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

/***/ 479:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryForm.vue?vue&type=template&id=24f3e22a&













var CategoryFormvue_type_template_id_24f3e22a_render = function render() {
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
  }, [_vm._v("mdi-label")]), _vm._v("\n                ຈັດການໝວດສິນຄ້າ\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "* CODE"
    },
    model: {
      value: _vm.form.categ_id,
      callback: function ($$v) {
        _vm.$set(_vm.form, "categ_id", $$v);
      },
      expression: "form.categ_id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ຊື່",
      "required": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.categ_name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "categ_name", $$v);
      },
      expression: "form.categ_name"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ໝາຍເຫດ"
    },
    model: {
      value: _vm.form.categ_desc,
      callback: function ($$v) {
        _vm.$set(_vm.form, "categ_desc", $$v);
      },
      expression: "form.categ_desc"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
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
  })], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryForm.vue?vue&type=template&id=24f3e22a&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryForm.vue?vue&type=script&lang=js&

/* harmony default export */ var CategoryFormvue_type_script_lang_js_ = ({
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
      form: {
        categ_id: '1XXX',
        categ_name: '',
        categ_desc: '',
        isActive: true
      },
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  // mounted() {
  //     this.loadEntry();
  // },
  async created() {
    this.loadEntry();
  },
  methods: {
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = this.isCreate ? 'api/category/create' : `api/category/update/${this.recordId}`;
        console.log("API => ", api);
        if (this.isCreate) {
          await this.$axios.post(api, this.form).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
          await this.$axios.put(api, this.form).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        }
        this.isloading = false;
      }
    },
    async loadEntry() {
      console.log(`===> Update form record load`);
      if (this.recordId && !this.isCreate) {
        await this.$axios.get(`api/category/find/${this.recordId}`).then(response => {
          this.form = response.data;
        }).catch(error => {
          console.log("Cannot fetch data " + error);
        });
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    // Add any necessary computed properties here
  }
});
// CONCATENATED MODULE: ./components/CategoryForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryFormvue_type_script_lang_js_ = (CategoryFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CategoryForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryFormvue_type_script_lang_js_,
  CategoryFormvue_type_template_id_24f3e22a_render,
  staticRenderFns,
  false,
  null,
  null,
  "d4888c96"
  
)

/* harmony default export */ var CategoryForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(957);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("60fc442d", content, true, context)
};

/***/ }),

/***/ 818:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebCategoryForm.vue?vue&type=template&id=652e6d51&













var WebCategoryFormvue_type_template_id_652e6d51_render = function render() {
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
  }, [_vm._v("mdi-label")]), _vm._v("\n                ຈັດການໝວດສິນຄ້າ ສະແດງຫນ້າເວັບ\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "* RECID"
    },
    model: {
      value: _vm.form.id,
      callback: function ($$v) {
        _vm.$set(_vm.form, "id", $$v);
      },
      expression: "form.id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລຳດັບການສະແດງ"
    },
    model: {
      value: _vm.form.order_level,
      callback: function ($$v) {
        _vm.$set(_vm.form, "order_level", $$v);
      },
      expression: "form.order_level"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ຊື່",
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
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຊື່ພາສາລາວ"
    },
    model: {
      value: _vm.form.g_name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "g_name", $$v);
      },
      expression: "form.g_name"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ໝາຍເຫດ"
    },
    model: {
      value: _vm.form.remark,
      callback: function ($$v) {
        _vm.$set(_vm.form, "remark", $$v);
      },
      expression: "form.remark"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
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
  })], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/WebCategoryForm.vue?vue&type=template&id=652e6d51&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebCategoryForm.vue?vue&type=script&lang=js&

/* harmony default export */ var WebCategoryFormvue_type_script_lang_js_ = ({
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
      form: {
        id: null,
        name: '1XXX',
        g_name: '',
        remark: '',
        order_level: 1,
        isActive: true
      },
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  // mounted() {
  //     this.loadEntry();
  // },
  async created() {
    this.loadEntry();
  },
  methods: {
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = this.isCreate ? 'api/webproductgroup/create' : `api/webproductgroup/update/${this.recordId}`;
        console.log("API => ", api);
        if (this.isCreate) {
          await this.$axios.post(api, this.form).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
          await this.$axios.put(api, this.form).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        }
        this.isloading = false;
      }
    },
    async loadEntry() {
      console.log(`===> Update form record load`);
      if (this.recordId && !this.isCreate) {
        await this.$axios.get(`api/webproductgroup/find/${this.recordId}`).then(response => {
          this.form = response.data;
        }).catch(error => {
          console.log("Cannot fetch data " + error);
        });
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    // Add any necessary computed properties here
  }
});
// CONCATENATED MODULE: ./components/WebCategoryForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WebCategoryFormvue_type_script_lang_js_ = (WebCategoryFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/WebCategoryForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WebCategoryFormvue_type_script_lang_js_,
  WebCategoryFormvue_type_template_id_652e6d51_render,
  staticRenderFns,
  false,
  null,
  null,
  "214960d3"
  
)

/* harmony default export */ var WebCategoryForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(382);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(378);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebCategoryProductForm.vue?vue&type=template&id=06910bf6&















var WebCategoryProductFormvue_type_template_id_06910bf6_render = function render() {
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
  }, [_vm._v("mdi-label")]), _vm._v("\n                " + _vm._s(`ກຸ່ມສິນຄ້າຫນ້າເວັບ: ${_vm.category.name} `) + "\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "pro_name",
      "item-value": "id",
      "items": _vm.productList,
      "label": "ສິນຄ້າ*"
    },
    model: {
      value: _vm.selectProductId,
      callback: function ($$v) {
        _vm.selectProductId = $$v;
      },
      expression: "selectProductId"
    }
  })], 1), _vm._v(" "), _c('div', [_c(VRow["a" /* default */], {
    attrs: {
      "justify": "center",
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.addProductToGroup
    }
  }, [_c('span', {
    staticClass: "mdi mdi-note-plus-outline"
  }), _vm._v("\n                            ເພີ່ມສິນຄ້າເຂົ້າກຸ່ມ\n                        ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDivider["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "mx-2"
  }, [_vm._v("ສິນຄ້າ ທີ່ເລືອກ")]), _vm._v(" "), _c(VDivider["a" /* default */])], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, _vm._l(_vm.localCategory.products, function (product) {
    return _c(VChip["a" /* default */], {
      key: product.id,
      staticClass: "ma-2",
      attrs: {
        "color": "warning",
        "variant": "outlined"
      },
      on: {
        "click": function ($event) {
          return _vm.removeProductFromGroup(product);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(product.id) + " - " + _vm._s(product.pro_name) + "\n                    ")]);
  }), 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/WebCategoryProductForm.vue?vue&type=template&id=06910bf6&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebCategoryProductForm.vue?vue&type=script&lang=js&

/* harmony default export */ var WebCategoryProductFormvue_type_script_lang_js_ = ({
  props: {
    category: {
      type: Object,
      require: true
    },
    isCreate: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      productList: [],
      selectProductId: null,
      localCategory: this.category,
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  // mounted() {
  //     this.loadEntry();
  // },
  async created() {
    // this.
    this.loadEntry();
  },
  methods: {
    async commitRecord() {
      if (!this.isloading) {
        this.isloading = true;
        let api = this.isCreate ? 'api/webproductgroup/create' : `api/webproductgroup/update/${this.localCategory.id}`;
        if (this.isCreate) {
          await this.$axios.post(api, this.localCategory).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
          console.log(`update category product`);
          this.localCategory.productList = this.localCategory.products;
          await this.$axios.put(api, this.localCategory).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        }
        this.isloading = false;
      }
    },
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    addProductToGroup() {
      console.log(`Add product to group handler`);
      if (!this.selectProductId) return;
      const newGroup = this.productList.find(el => el.id == this.selectProductId);
      console.log(`Authority ${newGroup.id}`);
      if (this.localCategory.products.length == 0) {
        console.log(`TEHERE IS NO TERMINAL`);
        this.localCategory.products.push(newGroup);
      } else if (this.localCategory.products == 'undefined') {
        this.localCategory.products.push(newGroup);
      } else {
        const group = this.localCategory.products.find(el => el.id == this.selectProductId);
        console.log(`ADD TERMINAL ${group}`);
        if (!group) this.localCategory.products.push(newGroup);
      }
    },
    removeProductFromGroup(group) {
      console.log(`Remove product to group handler`);
      const idx = this.localCategory.products.indexOf(group);
      this.localCategory.products.splice(idx, 1);
    },
    async loadEntry() {
      console.log(`===> Update form record load`);
      await this.$axios.get(`api/product/find`).then(response => {
        this.productList = response.data;
        this.selectProductId = this.productList[0]['id'];
      }).catch(error => {
        console.log("Cannot fetch data " + error);
      });
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    // Add any necessary computed properties here
  }
});
// CONCATENATED MODULE: ./components/WebCategoryProductForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WebCategoryProductFormvue_type_script_lang_js_ = (WebCategoryProductFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/WebCategoryProductForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WebCategoryProductFormvue_type_script_lang_js_,
  WebCategoryProductFormvue_type_template_id_06910bf6_render,
  staticRenderFns,
  false,
  null,
  null,
  "6b4a6814"
  
)

/* harmony default export */ var WebCategoryProductForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c48bced6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c48bced6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c48bced6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c48bced6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c48bced6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".draggable-item[data-v-c48bced6]{cursor:move}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map