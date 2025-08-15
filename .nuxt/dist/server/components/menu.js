exports.ids = [68];
exports.modules = {

/***/ 795:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
var VRadio = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
var VRadioGroup = __webpack_require__(375);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menu/index.vue?vue&type=template&id=8df4f1be&












var menuvue_type_template_id_8df4f1be_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "scrollable": "",
      "max-width": "1200",
      "persistent": ""
    },
    model: {
      value: _vm.terminalDialog,
      callback: function ($$v) {
        _vm.terminalDialog = $$v;
      },
      expression: "terminalDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("ເລືອກ Terminal")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticStyle: {
      "height": "300px"
    }
  }, [_c(VRadioGroup["a" /* default */], {
    attrs: {
      "column": ""
    },
    model: {
      value: _vm.terminalSelected,
      callback: function ($$v) {
        _vm.terminalSelected = $$v;
      },
      expression: "terminalSelected"
    }
  }, _vm._l(_vm.findAllTerminal, function (terminal) {
    return _c(VRadio["a" /* default */], {
      key: terminal.id,
      attrs: {
        "label": terminal.name + ' - ' + terminal.description,
        "value": terminal.id
      }
    });
  }), 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.takeToPOS
    }
  }, [_vm._v("\n                    ເລືອກ\n                ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          attrs: {
            "elevation": hover ? 16 : 0,
            "outlined": ""
          },
          on: {
            "click": _vm.takeMeTo
          }
        }, [_c(components_VCard["c" /* VCardText */], {
          staticClass: "text-center"
        }, [_c('div', [_vm._t("iconSlot")], 2), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim primary--text"
        }, [_c(VChip["a" /* default */], {
          staticClass: "ma-2",
          staticStyle: {
            "background-color": "transparent",
            "outline": "1px solid gray"
          },
          attrs: {
            "variant": "outlined"
          }
        }, [_vm._v("\n                        " + _vm._s(_vm.title) + "\n                    ")])], 1)])], 1)];
      }
    }], null, true)
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/menu/index.vue?vue&type=template&id=8df4f1be&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menu/index.vue?vue&type=script&lang=js&

/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  name: 'menu-card',
  components: {
    // MySvgIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imageSvg: __webpack_require__(169),
      imageSrc: __webpack_require__(141),
      terminalDialog: false,
      terminalSelected: this.findSelectedTerminal || 1
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllTerminal', 'findSelectedTerminal'])
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['setSelectedTerminal']),
    takeMeTo() {
      if (this.path.includes('/pos') && !this.findSelectedTerminal) {
        this.terminalDialog = true;
        console.log(`PATH ${this.path}`);
      } else {
        this.$router.push(this.path);
      }
    },
    takeToPOS() {
      this.setSelectedTerminal(this.terminalSelected);
      this.terminalDialog = false;
      this.$router.push(this.path);
    }
  }
});
// CONCATENATED MODULE: ./components/menu/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/menu/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_menuvue_type_script_lang_js_,
  menuvue_type_template_id_8df4f1be_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c4a1195"
  
)

/* harmony default export */ var menu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=menu.js.map