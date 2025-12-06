exports.ids = [204,57];
exports.modules = {

/***/ 1386:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(427);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(434);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(141);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/customer_request/index.vue?vue&type=template&id=10d1eef6

















var customer_requestvue_type_template_id_10d1eef6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<span class=\"text-h5\">Message type </span> "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.dialogForm,
      callback: function ($$v) {
        _vm.dialogForm = $$v;
      },
      expression: "dialogForm"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("ປະເພດຂໍ້ຄວາມ")])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VForm["a" /* default */], {
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
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": _vm.isedit,
      "rules": _vm.rule['cat_id'],
      "label": "Code",
      "required": ""
    },
    model: {
      value: _vm.form_data.chat_type_code,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "chat_type_code", $$v);
      },
      expression: "form_data.chat_type_code"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rule['cat_name'],
      "label": "ຊື່ປະເພດ ຂໍ້ຄວາມ",
      "required": ""
    },
    model: {
      value: _vm.form_data.chat_type_name,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "chat_type_name", $$v);
      },
      expression: "form_data.chat_type_name"
    }
  }), _vm._v(" "), _c(VTextarea["a" /* default */], {
    attrs: {
      "outlined": "",
      "name": "input-7-4",
      "counter": "5",
      "label": "ໝາຍເຫດ"
    },
    model: {
      value: _vm.form_data.chat_type_remark,
      callback: function ($$v) {
        _vm.$set(_vm.form_data, "chat_type_remark", $$v);
      },
      expression: "form_data.chat_type_remark"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-4",
    attrs: {
      "color": "error"
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v(" ລ້າງຂໍ້ມູນ ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialogForm = false;
      }
    }
  }, [_vm._v("\n          ປິດ\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue darken-1",
      "text": ""
    },
    on: {
      "click": _vm.submitDatas
    }
  }, [_vm._v("\n          ບັນທຶກ\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
  })], 1), _vm._v(" "), _vm.loadData ? _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.loadData,
      "items-per-page": 5,
      "search": _vm.search
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VToolbar["a" /* default */], {
          attrs: {
            "flat": ""
          }
        }, [_c(components_VToolbar["b" /* VToolbarTitle */], [_vm._v("ປະເພດຂໍ້ຄວາມ: " + _vm._s(_vm.loadData.length))]), _vm._v(" "), _c(VDivider["a" /* default */], {
          staticClass: "mx-4",
          attrs: {
            "inset": "",
            "vertical": ""
          }
        }), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "mb-2",
          attrs: {
            "color": "primary",
            "dark": ""
          },
          on: {
            "click": function ($event) {
              _vm.dialogForm = true;
              _vm.isedit = false;
              _vm.reset();
            }
          }
        }, [_vm._v("\n            ສ້າງໃຫມ່\n          ")])], 1)];
      },
      proxy: true
    }, {
      key: `item.chat_type_function`,
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
              _vm.editItem(item);
              _vm.isedit = true;
            }
          }
        }, [_vm._v("\n          mdi-pencil\n        ")])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/customer_request/index.vue?vue&type=template&id=10d1eef6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/customer_request/index.vue?vue&type=script&lang=js
/* harmony default export */ var customer_requestvue_type_script_lang_js = ({
  middleware: 'auths',
  data: () => ({
    isloading: false,
    isedit: false,
    singleSelect: false,
    selected: [],
    dialog: false,
    dialogForm: false,
    message: '',
    valid: true,
    search: '',
    rule: {
      cat_id: [v => !!v || 'Code ແມ່ນ ຕ້ອງໃສ່'],
      cat_name: [v => !!v || 'ຊື່ປະເພດຂໍ້ຄ້ວາມ ແມ່ນ ຕ້ອງໃສ່']
    },
    form_data: {
      chat_type_id: '',
      chat_type_code: '',
      chat_type_name: '',
      chat_type_remark: ''
    },
    headers: [{
      text: 'code',
      align: 'center',
      sortable: false,
      value: 'chat_type_code'
    }, {
      text: 'ຊື່ປະເພດຂໍ້ຄວາມ',
      align: 'center',
      value: 'chat_type_name'
    }, {
      text: 'ຫມາຍເຫດ',
      align: 'center',
      value: 'chat_type_remark'
    }, {
      text: 'ຟັງຊັ່ນ',
      align: 'end',
      value: 'chat_type_function',
      sortable: false
    }],
    loadData: []
  }),
  watch: {
    message(val) {
      if (val != null) {
        this.dialog = true;
        return;
      }
      this.dialog = false;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      //   this.$refs.form.reset()
      this.form_data.chat_type_code = '';
      this.form_data.chat_type_name = '';
      this.form_data.chat_type_remark = '';
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async submitDatas() {
      this.isloading = true;
      console.log('submitOut');
      if (!this.$refs.form.validate()) {
        this.isloading = false;
        return;
      }
      console.log('submitIn');
      const submitData = {
        chat_type_id: this.form_data.chat_type_id,
        chat_type_code: this.form_data.chat_type_code,
        chat_type_name: this.form_data.chat_type_name,
        chat_type_remark: this.form_data.chat_type_remark
      };
      const urlpath = '/chattype_';
      if (this.isedit) {
        await this.$axios.post(urlpath + 'u', submitData).then(res => {
          this.message = res.data;
          // this.reset()
        }).catch(er => {
          this.message = 'Error: ' + er;
        });
        this.isloading = false;
      } else {
        await this.$axios.post(urlpath + 'c', submitData).then(res => {
          this.message = res.data;
          // this.reset()
        }).catch(er => {
          this.message = 'Error: ' + er;
        });
        this.isloading = false;
      }
      this.fetchData();
    },
    async fetchData() {
      this.isloading = true;
      await this.$axios.get('/chattype_f').then(res => {
        console.log('Data: ' + res.data);
        this.loadData = res.data.map(el => {
          console.log('EL: ' + el.id);
          return {
            chat_type_id: el.id,
            chat_type_code: el.code,
            chat_type_name: el.name,
            chat_type_remark: el.remark,
            chat_type_function: el.id
          };
        });
        console.log('AFTER MAP: ' + this.loadData[0].chat_type_id);
      }).catch(er => {
        console.log('Data: ' + er);
      });
      this.isloading = false;
    },
    editItem(val) {
      console.log('SHOULD BE ID: ' + val.chat_type_function);
      const filtData = this.loadData.find(el => el.chat_type_id === val.chat_type_function);
      console.log("fomr: " + filtData.chat_type_code);
      this.form_data = filtData;
      this.dialogForm = true;
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/customer_request/index.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_customer_requestvue_type_script_lang_js = (customer_requestvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/customer_request/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_customer_requestvue_type_script_lang_js,
  customer_requestvue_type_template_id_10d1eef6_render,
  staticRenderFns,
  false,
  null,
  null,
  "49f8e01c"
  
)

/* harmony default export */ var customer_request = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(461).default,LoadingIndicator: __webpack_require__(67).default})


/***/ }),

/***/ 461:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(431);

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

/***/ })

};;
//# sourceMappingURL=index.js.map