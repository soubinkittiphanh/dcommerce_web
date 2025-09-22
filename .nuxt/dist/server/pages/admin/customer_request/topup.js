exports.ids = [175,46];
exports.modules = {

/***/ 1234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(397);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(346);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/customer_request/topup.vue?vue&type=template&id=25485a6c&











var topupvue_type_template_id_25485a6c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<span class=\"text-h5\">Topup </span> "), _c(VDialog["a" /* default */], {
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
        }, [_c(components_VToolbar["a" /* VToolbarTitle */], [_vm._v("ແຈ້ງເຕີມເງິນ " + _vm._s(_vm.loadData.length))]), _vm._v(" "), _c(VDivider["a" /* default */], {
          staticClass: "mx-4",
          attrs: {
            "inset": "",
            "vertical": ""
          }
        }), _vm._v(" "), _c(VSpacer["a" /* default */])], 1)];
      },
      proxy: true
    }, {
      key: `item.chat_function`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "small": ""
          },
          on: {
            "click": function ($event) {
              return _vm.updateItem(item);
            }
          }
        }, [_vm._v("\n          ດຳເນີນການແລ້ວ\n        ")])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/customer_request/topup.vue?vue&type=template&id=25485a6c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/customer_request/topup.vue?vue&type=script&lang=js&
/* harmony default export */ var topupvue_type_script_lang_js_ = ({
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
    search: 'topup',
    rule: {
      cat_id: [v => !!v || 'Code ແມ່ນ ຕ້ອງໃສ່'],
      cat_name: [v => !!v || 'ຊື່ປະເພດຂໍ້ຄ້ວາມ ແມ່ນ ຕ້ອງໃສ່']
    },
    form_data: {
      chat_id: '',
      chat_code: '',
      chat_name: '',
      chat_remark: ''
    },
    headers: [{
      text: 'code',
      align: 'center',
      sortable: false,
      value: 'chat_msg_type'
    }, {
      text: 'ເນື້ອໃນ',
      align: 'center',
      value: 'chat_message'
    }, {
      text: 'ລູກຄ້າ',
      align: 'center',
      value: 'chat_user_id'
    }, {
      text: 'read',
      align: 'center',
      value: 'chat_chat_isread'
    }, {
      text: 'ເວລາ',
      align: 'center',
      value: 'chat_chat_date_time'
    }, {
      text: 'ເລກ ບຊ',
      align: 'center',
      value: 'chat_bank_acc_id'
    }, {
      text: 'ຊື່ ບຊ',
      align: 'center',
      value: 'chat_bank_acc_name'
    }, {
      text: 'ທນຄ',
      align: 'center',
      value: 'chat_bank_id'
    }, {
      text: 'ຊື່ ທນຄ',
      align: 'center',
      value: 'chat_bank_name'
    }, {
      text: 'ຊື່ ລູກຄ້າ',
      align: 'center',
      value: 'chat_cus_name'
    }, {
      text: 'ເບີໂທ',
      align: 'center',
      value: 'chat_cus_tel'
    }, {
      text: 'ຟັງຊັ່ນ',
      align: 'end',
      value: 'chat_function',
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
      this.form_data.chat_code = '';
      this.form_data.chat_name = '';
      this.form_data.chat_remark = '';
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
        chat_id: this.form_data.chat_id,
        chat_code: this.form_data.chat_code,
        chat_name: this.form_data.chat_name,
        chat_remark: this.form_data.chat_remark
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
      await this.$axios.get('/chat_f').then(res => {
        console.log('Data: ' + res.data);
        this.loadData = res.data.map(el => {
          console.log('EL: ' + el.id);
          return {
            chat_id: el.id,
            chat_msg_type: el.msg_type,
            chat_message: el.chat_message,
            chat_user_id: el.user_id,
            chat_chat_isread: el.chat_isread.toString().includes('0') ? 'ຍັງ' : 'ອ່ານແລ້ວ',
            chat_chat_date_time: el.chat_date_time.replaceAll('T', ' '),
            chat_bank_acc_id: el.bank_acc_id,
            chat_bank_acc_name: el.bank_acc_name,
            chat_bank_id: el.bank_id,
            chat_bank_name: el.bank_name,
            chat_cus_name: el.cus_name,
            chat_cus_tel: el.cus_tel,
            chat_function: el.id
          };
        });
        console.log('AFTER MAP: ' + this.loadData[0].chat_id);
      }).catch(er => {
        console.log('Data: ' + er);
      });
      this.isloading = false;
    },
    async updateItem(val) {
      this.isloading = true;
      console.log("val: " + val.chat_id);
      await this.$axios.post('chat_m', {
        "chat_id": val.chat_id
      }).then(res => {
        this.isloading = false;
        this.message = res.data;
        this.fetchData();
      }).catch(er => {
        this.isloading = false;
        this.message = er.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/customer_request/topup.vue?vue&type=script&lang=js&
 /* harmony default export */ var customer_request_topupvue_type_script_lang_js_ = (topupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/customer_request/topup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  customer_request_topupvue_type_script_lang_js_,
  topupvue_type_template_id_25485a6c_render,
  staticRenderFns,
  false,
  null,
  null,
  "377d16d0"
  
)

/* harmony default export */ var topup = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(420).default,LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(387);

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

/***/ })

};;
//# sourceMappingURL=topup.js.map