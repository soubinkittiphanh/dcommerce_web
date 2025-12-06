exports.ids = [297];
exports.modules = {

/***/ 1448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(434);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/walletin/index.vue?vue&type=template&id=44fbc0de






var walletinvue_type_template_id_44fbc0de_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<h1>ເຕີມເຄດິດ Wallet In</h1> "), _c(VForm["a" /* default */], {
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
      "counter": 10,
      "rules": _vm.nameRules,
      "label": "ລະຫັດອ້າງອີງ",
      "required": ""
    },
    model: {
      value: _vm.name,
      callback: function ($$v) {
        _vm.name = $$v;
      },
      expression: "name"
    }
  }), _vm._v(" "), _c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.items,
      "rules": [v => !!v || 'Item is required'],
      "label": "ໄອດີລູກຄ້າ",
      "required": ""
    },
    model: {
      value: _vm.select,
      callback: function ($$v) {
        _vm.select = $$v;
      },
      expression: "select"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.nameRules,
      "label": "ຈຳວນເງິນ",
      "required": ""
    },
    model: {
      value: _vm.name,
      callback: function ($$v) {
        _vm.name = $$v;
      },
      expression: "name"
    }
  }), _vm._v(" "), _c(VTextarea["a" /* default */], {
    attrs: {
      "outlined": "",
      "name": "input-7-4",
      "counter": "5",
      "label": "ໝາຍເຫດ",
      "value": "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    }
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-4",
    attrs: {
      "disabled": !_vm.valid,
      "color": "success"
    },
    on: {
      "click": _vm.validate
    }
  }, [_vm._v("\n      ກວດສອບຂໍ້ມູນ\n    ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-4",
    attrs: {
      "color": "error"
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v(" ລ້າງຂໍ້ມູນ ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning"
    },
    on: {
      "click": _vm.resetValidation
    }
  }, [_vm._v(" ບັນທຶກ ")])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/walletin/index.vue?vue&type=template&id=44fbc0de

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/walletin/index.vue?vue&type=script&lang=js
/* harmony default export */ var walletinvue_type_script_lang_js = ({
  middleware: 'auths',
  data() {
    return {
      dialog: false,
      valid: true,
      name: '',
      nameRules: [v => !!v || 'Name is required', v => v && v.length <= 10 || 'Name must be less than 10 characters'],
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      rules: [value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!'],
      select: null,
      items: ['ບັດເກມ GARINA FREEFIRE', 'ບັດເກມ PUBG', 'ເຄື່ອງໃຊ້ທົ່ວໄປ', 'ເຄື່ອງດື່ມ'],
      checkbox: false
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/walletin/index.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_walletinvue_type_script_lang_js = (walletinvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/walletin/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_walletinvue_type_script_lang_js,
  walletinvue_type_template_id_44fbc0de_render,
  staticRenderFns,
  false,
  null,
  null,
  "e99a4ebc"
  
)

/* harmony default export */ var walletin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map