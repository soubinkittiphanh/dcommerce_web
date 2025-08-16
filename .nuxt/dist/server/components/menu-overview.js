exports.ids = [82];
exports.modules = {

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(382);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menuOverview/index.vue?vue&type=template&id=1c25764e&








var menuOverviewvue_type_template_id_1c25764e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "cols": "3"
    }
  }, [_c(VAvatar["a" /* default */], {
    attrs: {
      "color": "primary",
      "size": "50"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "dark": "",
      "size": "30"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.icon) + "\n          ")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pt-0",
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "cols": "9"
    }
  }, [_c(VRow["a" /* default */], {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "font-size": "larger",
      "font-weight": "bold",
      "font-family": "Arial, Helvetica, sans-serif"
    },
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.total) + "\n          ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, _vm._l(_vm.groupedSales, function (details, paymentCode) {
    return _c(VCard["a" /* default */], {
      key: paymentCode,
      staticClass: "mx-auto",
      attrs: {
        "max-width": "344",
        "outlined": ""
      }
    }, [_c(components_VCard["c" /* VCardText */], [_vm._v("\n                " + _vm._s(paymentCode)), _c('br'), _vm._v(" "), _c(VChip["a" /* default */], {
      attrs: {
        "color": "grey",
        "text-color": "white"
      }
    }, [_vm._v("\n                  " + _vm._s(details.totalSales.toLocaleString()) + " /\n                  " + _vm._s(details.count) + "\n                  "), _c(VIcon["a" /* default */], {
      attrs: {
        "size": "14"
      }
    }, [_vm._v("mdi-invoice-list-outline")])], 1)], 1)], 1);
  }), 1)], 1), _vm._v(" "), _c(VRow["a" /* default */])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/menuOverview/index.vue?vue&type=template&id=1c25764e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menuOverview/index.vue?vue&type=script&lang=js&
/* harmony default export */ var menuOverviewvue_type_script_lang_js_ = ({
  name: 'menu-card',
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
    },
    total: {
      type: String,
      default: ''
    },
    groupedSales: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      imageSrc: __webpack_require__(141)
    };
  },
  methods: {
    takeMeTo() {
      this.$router.push(this.path);
    }
  }
});
// CONCATENATED MODULE: ./components/menuOverview/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_menuOverviewvue_type_script_lang_js_ = (menuOverviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/menuOverview/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_menuOverviewvue_type_script_lang_js_,
  menuOverviewvue_type_template_id_1c25764e_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "91e44424"
  
)

/* harmony default export */ var menuOverview = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=menu-overview.js.map