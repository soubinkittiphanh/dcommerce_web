exports.ids = [161,32];
exports.modules = {

/***/ 1129:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(341);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(448);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/campaign/index.vue?vue&type=template&id=1618c87d&












var campaignvue_type_template_id_1618c87d_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200"
    },
    model: {
      value: _vm.campaignFormDialog,
      callback: function ($$v) {
        _vm.campaignFormDialog = $$v;
      },
      expression: "campaignFormDialog"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c('campaign-form', {
    key: _vm.campaignFormKey,
    attrs: {
      "isEdit": _vm.isEdit,
      "campaignId": _vm.selectedCampaignId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.campaignFormDialog = false;
      }
    }
  })], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VLayout["a" /* default */], {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີເລີ່ມ*",
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.startDate,
      callback: function ($$v) {
        _vm.startDate = $$v;
      },
      expression: "startDate"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີເລີ່ມ*",
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.endDate,
      callback: function ($$v) {
        _vm.endDate = $$v;
      },
      expression: "endDate"
    }
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.openCampaignForm
    }
  }, [_vm._v(" ເພີ່ມແຄມເປນ ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
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
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "ລະຫັດຜູ້ຂາຍ",
      "single-line": "",
      "hide-detailsx": ""
    },
    model: {
      value: _vm.userId,
      callback: function ($$v) {
        _vm.userId = $$v;
      },
      expression: "userId"
    }
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.loadData
    }
  }, [_vm._v(" ດຶງລາຍງານ ")])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VLayout["a" /* default */], {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "lg": "6"
    }
  })], 1)], 1)], 1), _vm._v(" "), _vm.campaignList ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.campaignList
    },
    scopedSlots: _vm._u([{
      key: `item.function`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "blue darken-1",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.editItem(item.id);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa-regular fa-pen-to-square"
        })])];
      }
    }, {
      key: `item.id`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "blue darken-1",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.editItem(item.id);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-eye"
        })])];
      }
    }, {
      key: `item.isActive`,
      fn: function ({
        item
      }) {
        return [_c(VSwitch["a" /* default */], {
          attrs: {
            "disabled": "",
            "label": "Active",
            "true-value": true,
            "false-value": false
          },
          model: {
            value: item.isActive,
            callback: function ($$v) {
              _vm.$set(item, "isActive", $$v);
            },
            expression: "item.isActive"
          }
        })];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/campaign/index.vue?vue&type=template&id=1618c87d&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./components/campaign/CampaignForm.vue + 4 modules
var CampaignForm = __webpack_require__(698);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/campaign/index.vue?vue&type=script&lang=js&


/* harmony default export */ var campaignvue_type_script_lang_js_ = ({
  components: {
    CampaignForm: CampaignForm["default"]
  },
  data() {
    return {
      campaignList: [],
      selectedCampaignId: '',
      startDate: null,
      endDate: null,
      isEdit: false,
      campaignFormKey: 1,
      headers: [{
        text: 'ຊື່ Campaign',
        align: 'center',
        value: 'name',
        sortable: true
      }, {
        text: 'ສິນຄ້າ',
        align: 'center',
        value: 'product'
      }, {
        text: 'ວັນທີເລີ່ມ',
        align: 'center',
        value: 'start'
      }, {
        text: 'ວັນທີສິ້ນສຸດ',
        align: 'center',
        value: 'end'
      }, {
        text: 'ສະຖານະ',
        align: 'center',
        value: 'isActive'
      }, {
        text: 'ລາຍລະອຽດ',
        align: 'end',
        value: 'id',
        sortable: false
      }, {
        text: '',
        align: 'end',
        value: 'function',
        sortable: false
      }],
      isloading: false,
      campaignFormDialog: false,
      search: '',
      userId: '',
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      // dateFormatted: this.formatDate(
      //     getFirstDayOfMonth(new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //         .toISOString()
      //         .substr(0, 10))

      // ),
      dateFormatted2: this.formatDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false
    };
  },
  mounted() {
    this.loadData();
    const today = new Date().toISOString().substr(0, 10);
    this.endDate = today;
    this.startDate = Object(common["d" /* getFirstDayOfMonth */])();
  },
  watch: {
    startDate(val) {
      this.loadData();
    },
    endDate(val) {
      this.loadData();
    }
  },
  methods: {
    openCampaignForm() {
      this.isEdit = false;
      this.selectedCampaignId = null;
      this.campaignFormKey += 1;
      this.campaignFormDialog = true;
    },
    editItem(campaignId) {
      this.campaignFormKey += 1;
      this.selectedCampaignId = campaignId;
      this.isEdit = true;
      this.campaignFormDialog = true;
    },
    async loadData() {
      this.isloading = true;
      await this.$axios.get("/api/campaign/find").then(response => {
        this.campaignList = response.data.map(el => {
          return {
            id: el["id"],
            name: el["title"],
            start: el["start"].split("T")[0],
            end: el["end"].split("T")[0],
            product: el["product"],
            budget: el["budget"],
            isActive: el["isActive"],
            entries: el["entries"],
            function: el["id"]
          };
        });
      }).catch(error => {
        console.log("Error ", error);
      });
      this.isloading = false;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/campaign/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_campaignvue_type_script_lang_js_ = (campaignvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/campaign/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_campaignvue_type_script_lang_js_,
  campaignvue_type_template_id_1618c87d_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bb5e0758"
  
)

/* harmony default export */ var campaign = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CampaignForm: __webpack_require__(698).default,LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(426);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 426:
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

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(425);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(135);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90);
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

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(341);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(448);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/campaign/CampaignForm.vue?vue&type=template&id=5967c57e&

















var CampaignFormvue_type_template_id_5967c57e_render = function render() {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800"
    },
    model: {
      value: _vm.showAddRowDialog,
      callback: function ($$v) {
        _vm.showAddRowDialog = $$v;
      },
      expression: "showAddRowDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("ເພີ່ມລາຍການໃຫມ່")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "addRowForm"
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີ*",
      "required": "",
      "hint": "date"
    },
    model: {
      value: _vm.newRow.date,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "date", $$v);
      },
      expression: "newRow.date"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Reach",
      "required": "",
      "rules": _vm.numberRule
    },
    model: {
      value: _vm.newRow.reach,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "reach", _vm._n($$v));
      },
      expression: "newRow.reach"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Comments",
      "required": "",
      "rules": _vm.numberRule
    },
    model: {
      value: _vm.newRow.comments,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "comments", _vm._n($$v));
      },
      expression: "newRow.comments"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Results",
      "required": "",
      "rules": _vm.numberRule
    },
    model: {
      value: _vm.newRow.results,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "results", _vm._n($$v));
      },
      expression: "newRow.results"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    directives: [{
      name: "mode",
      rawName: "v-mode.number",
      value: _vm.newRow.purchaseQty,
      expression: "newRow.purchaseQty",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "label": "Purchase Qty",
      "rules": _vm.numberRule,
      "required": ""
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Cost Per Customer",
      "rules": _vm.numberRule,
      "required": ""
    },
    model: {
      value: _vm.newRow.costPerCustomer,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "costPerCustomer", _vm._n($$v));
      },
      expression: "newRow.costPerCustomer"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Budget Spend",
      "rules": _vm.numberRule,
      "required": ""
    },
    model: {
      value: _vm.newRow.budgetSpend,
      callback: function ($$v) {
        _vm.$set(_vm.newRow, "budgetSpend", _vm._n($$v));
      },
      expression: "newRow.budgetSpend"
    }
  })], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.addRow
    }
  }, [_vm._v("ເພີ່ມ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary"
    },
    on: {
      "click": function ($event) {
        _vm.showAddRowDialog = false;
      }
    }
  }, [_vm._v("ປິດ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Title",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.form.header.title,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "title", $$v);
      },
      expression: "form.header.title"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Remark",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.form.header.product,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "product", $$v);
      },
      expression: "form.header.product"
    }
  }), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "pro_name",
      "item-value": "pro_id",
      "items": _vm.productList,
      "label": "ເລືອກສິນຄ້າ *"
    },
    model: {
      value: _vm.form.header.productId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "productId", $$v);
      },
      expression: "form.header.productId"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີເລີ່ມ*",
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.form.header.start,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "start", $$v);
      },
      expression: "form.header.start"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Budget",
      "type": "number",
      "rules": _vm.numberRule,
      "required": ""
    },
    model: {
      value: _vm.form.header.budget,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "budget", $$v);
      },
      expression: "form.header.budget"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "4"
    }
  }, [_c(VForm["a" /* default */], {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີສິ້ນສຸດ*",
      "hint": "example of helper text only on focus"
    },
    model: {
      value: _vm.form.header.end,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "end", $$v);
      },
      expression: "form.header.end"
    }
  }), _vm._v(" "), _c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "true-value": true,
      "false-value": false
    },
    model: {
      value: _vm.form.header.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "isActive", $$v);
      },
      expression: "form.header.isActive"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": function ($event) {
        _vm.showAddRowDialog = true;
      }
    }
  }, [_vm._v("ເພີ່ມລາຍການ")]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "items": _vm.campaignEntry
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('tr', [_c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "date",
            "label": "ວັນທີ*",
            "hint": "example of helper text only on focus"
          },
          model: {
            value: item.date,
            callback: function ($$v) {
              _vm.$set(item, "date", $$v);
            },
            expression: "item.date"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "label": "Reach",
            "rules": _vm.numberRule
          },
          model: {
            value: item.reach,
            callback: function ($$v) {
              _vm.$set(item, "reach", _vm._n($$v));
            },
            expression: "item.reach"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "label": "Comments",
            "rules": _vm.numberRule
          },
          model: {
            value: item.comments,
            callback: function ($$v) {
              _vm.$set(item, "comments", _vm._n($$v));
            },
            expression: "item.comments"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "label": "Results",
            "rules": _vm.numberRule
          },
          model: {
            value: item.results,
            callback: function ($$v) {
              _vm.$set(item, "results", _vm._n($$v));
            },
            expression: "item.results"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "label": "Purchase Quantity",
            "rules": _vm.numberRule
          },
          model: {
            value: item.purchaseQty,
            callback: function ($$v) {
              _vm.$set(item, "purchaseQty", _vm._n($$v));
            },
            expression: "item.purchaseQty"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "label": "Cost Per Customer",
            "rules": _vm.numberRule
          },
          model: {
            value: item.costPerCustomer,
            callback: function ($$v) {
              _vm.$set(item, "costPerCustomer", _vm._n($$v));
            },
            expression: "item.costPerCustomer"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VTextField["a" /* default */], {
          attrs: {
            "label": "Budget Spend",
            "rules": _vm.numberRule
          },
          model: {
            value: item.budgetSpend,
            callback: function ($$v) {
              _vm.$set(item, "budgetSpend", _vm._n($$v));
            },
            expression: "item.budgetSpend"
          }
        })], 1), _vm._v(" "), _c('td', [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "variant": "text"
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item);
            }
          }
        }, [_vm._v("\n                                    ລົບ\n                                ")])], 1)])];
      }
    }])
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
      "click": _vm.submit
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/campaign/CampaignForm.vue?vue&type=template&id=5967c57e&

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(137);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/campaign/CampaignForm.vue?vue&type=script&lang=js&


/* harmony default export */ var CampaignFormvue_type_script_lang_js_ = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    campaignId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      productList: [],
      showAddRowDialog: false,
      dialog: false,
      title: 'ສ້າງ Campaign',
      valid: false,
      isLoading: false,
      form: {
        header: {
          title: "Summer Sale",
          start: "",
          end: "",
          product: "T-shirts",
          productId: 1000,
          budget: 5000.00,
          isActive: true
        }
      },
      bookingDate: '',
      rules: {
        required: v => !!v || "This field is required",
        dateAfter: date => v => date ? new Date(v) >= new Date(date) || "Date must be after start date" : true,
        dateAfterToday: v => new Date(v) >= new Date() || "Date must be after today",
        number: v => !isNaN(parseFloat(v)) && isFinite(v) || "Value must be a number"
      },
      headers: [{
        text: "Date",
        value: "date"
      }, {
        text: "Reach",
        value: "reach"
      }, {
        text: "Comments",
        value: "comments"
      }, {
        text: "Results",
        value: "results"
      }, {
        text: "Purchase Qty",
        value: "purchaseQty"
      }, {
        text: "Cost Per Customer",
        value: "costPerCustomer"
      }, {
        text: "Budget Spend",
        value: "budgetSpend"
      }],
      campaignEntry: [],
      newRow: {
        date: "",
        reach: 0.01,
        comments: 0,
        results: 0,
        purchaseQty: 7,
        costPerCustomer: 0,
        budgetSpend: 0
      }
    };
  },
  mounted() {
    // this.loadAccount()
    const today = new Date().toISOString().substr(0, 10);
    this.form.header.start = today;
    this.form.header.end = today;
    this.newRow.date = today;
    this.loadCampaign();
    this.loadProduct();
  },
  computed: {
    dateRules() {
      return [value => !!value || 'Field is required', value => /^(\d{4})-(\d{2})-(\d{2})$/.test(value) || 'Invalid date format (YYYY-MM-DD)'];
    },
    numberRule() {
      return [value => value !== undefined && value !== null && value !== '' || 'Field is required', value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'];
    }
  },
  methods: {
    deleteItem(item) {
      const index = this.campaignEntry.indexOf(item);
      if (index > -1) {
        if (this.isEdit && item.id) {
          Object(myUtil["a" /* confirmSwal */])(this.$swal, 'warning', async () => {
            console.log("Delete record function");
            this.isLoading = true;
            await this.$axios.delete(`/api/campaignEntry/delete/${item.id}`).then(response => {
              console.log("response=>", response.data);
              if (response.data.includes('successfully')) {
                this.campaignEntry.splice(index, 1);
              }
            }).catch(error => {
              Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data);
            });
            this.isLoading = false;
          });
        } else {
          this.campaignEntry.splice(index, 1);
        }
      }
    },
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    validateObject(obj) {
      const {
        date,
        reach,
        comments,
        results,
        purchaseQty,
        costPerCustomer,
        budgetSpend
      } = obj;
      console.log("Result ===> ", results, ' ', Number.isInteger(Number('0')), ' val ', !!results);

      // if (!date || !reach || !comments || !results || !purchaseQty || !costPerCustomer || !budgetSpend) {
      //     console.log("all checked false");
      //     return false; // All required properties must be present
      // }

      if (!Number.isFinite(reach) || Number(reach) < 0) {
        console.log("Reach", reach, ' IS NUMBER FINITE ', Number.isFinite(reach));
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(comments) || Number(comments) < 0) {
        console.log("Comments");
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(results) || Number(results) < 0) {
        console.log("Results");
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(purchaseQty) || Number(purchaseQty) < 0) {
        console.log("Purchase");
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(costPerCustomer) || Number(costPerCustomer) < 0) {
        console.log("CostCustomer");
        return false; // Reach must be a positive number
      }

      if (!Number.isFinite(budgetSpend) || Number(budgetSpend) < 0) {
        console.log("Budgets");
        return false; // Reach must be a positive number
      }

      return true;
    },
    validateCampaignEntry() {
      for (const iterator of this.campaignEntry) {
        if (!this.validateObject(iterator)) {
          return false;
        }
      }
      return true;
    },
    async loadCampaign() {
      this.isLoading = true;
      if (this.isEdit) {
        await this.$axios.get(`/api/campaign/find/${this.campaignId}`).then(response => {
          this.form.header = response.data;
          this.form.header.start = response.data['start'].split('T')[0];
          this.form.header.end = response.data['end'].split('T')[0];
          this.campaignEntry.length = 0;
          for (const iterator of response.data.entries) {
            let entry = iterator;
            entry['date'] = iterator['date'].split('T')[0];
            // entry.purchaseQty = +iterator.purchaseQty
            // entry.costPerCustomer = +iterator.costPerCustomer
            // entry.budgetSpend = +iterator.budgetSpend
            this.campaignEntry.push(entry);
          }
        }).catch(error => {
          console.log("Load cammpaign error", error);
        });
      }
      this.isLoading = false;
    },
    async submit() {
      // handle form submission here
      if (!this.isLoading) {
        this.isLoading = true;
        if (this.campaignEntry.length == 0) {
          this.isLoading = false;
          return Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ບໍ່ມີລາຍການກະລຸນາເພີ່ມຢ່າງນ້ອຍ 1 ລາຍການ");
        }
        if (!this.validateCampaignEntry()) {
          this.isLoading = false;
          return Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາກວດຂໍ້ມູນຄືນໃຫ້ຖືກຕ້ອງ");
        }
        this.form.header.entry = this.campaignEntry;
        // ********* update entry *********
        if (this.isEdit && this.campaignId) {
          console.log("====> update campaign");
          await this.$axios.put(`/api/campaign/update/${this.campaignId}`, this.form.header).then(res => {
            if (res.status == 200) {
              Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
            } else {
              Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data);
            }
          }).catch(error => {
            Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data);
          });
          // ********* create entry *********
        } else {
          await this.$axios.post("/api/campaign/create", this.form.header).then(res => {
            if (res.status == 200) {
              Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
            } else {
              Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data);
            }
          }).catch(error => {
            Object(myUtil["b" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data.errors[0]['msg']);
          });
        }
        this.isLoading = false;
      }
      this.close();
    },
    addRow() {
      if (this.$refs.addRowForm.validate()) {
        this.campaignEntry.push(this.newRow);
        this.newRow = {
          date: "",
          reach: 0,
          comments: 0,
          results: 0,
          purchaseQty: 0,
          costPerCustomer: 0,
          budgetSpend: 0
        };
        this.showAddRowDialog = false;
      }
    },
    async loadProduct() {
      this.isLoading = true;
      await this.$axios.get('product_mobile_f').then(res => {
        this.productList = res.data.map(el => {
          return el;
          // {
          //     card_count: el.card_count,
          //     categ_name: el.categ_name,
          //     cost_price: el.cost_price,
          //     id: el.id,
          //     img_name: el.img_name,
          //     outlet: el.outlet,
          //     outlet_name: el.outlet_name,
          //     pro_category: el.pro_category,
          //     pro_desc: el.pro_desc,
          //     pro_id: el.pro_id,
          //     pro_image_path: el.pro_image_path,
          //     pro_name: el.pro_name,
          //     pro_price: el.pro_price,
          //     pro_status: el.pro_status,
          //     retail_cost_percent: el.retail_cost_percent,
          //     sale_count: el.sale_count,
          //     stock_count: el.stock_count,
          // }
        });

        console.log("all data1: ", this.productList[0].img_path);
      }).catch(er => {
        console.log('Data: ' + er);
      });
      this.isLoading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/campaign/CampaignForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var campaign_CampaignFormvue_type_script_lang_js_ = (CampaignFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/campaign/CampaignForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  campaign_CampaignFormvue_type_script_lang_js_,
  CampaignFormvue_type_template_id_5967c57e_render,
  staticRenderFns,
  false,
  null,
  null,
  "5f5c7310"
  
)

/* harmony default export */ var CampaignForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=index.js.map