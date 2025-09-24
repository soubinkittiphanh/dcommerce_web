exports.ids = [108];
exports.modules = {

/***/ 1271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/CateogoryList.vue?vue&type=template&id=16f44712&






var CateogoryListvue_type_template_id_16f44712_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "mx-auto pa-2",
    attrs: {
      "max-width": "300"
    }
  }, [_c(VList["a" /* default */], [_c('v-list-subheader', [_vm._v("REPORTS")]), _vm._v(" "), _vm._l(_vm.items, function (item, i) {
    return _c(VListItem["a" /* default */], {
      key: i,
      attrs: {
        "value": item,
        "color": "primary",
        "rounded": "shaped"
      },
      scopedSlots: _vm._u([{
        key: "prepend",
        fn: function () {
          return [_c(VIcon["a" /* default */], {
            attrs: {
              "icon": item.icon
            }
          })];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _c(components_VList["c" /* VListItemTitle */], {
      domProps: {
        "textContent": _vm._s(item.text)
      }
    })], 1);
  })], 2)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pos/CateogoryList.vue?vue&type=template&id=16f44712&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/CateogoryList.vue?vue&type=script&lang=js&
/* harmony default export */ var CateogoryListvue_type_script_lang_js_ = ({
  data: () => ({
    items: [{
      text: 'Real-Time',
      icon: 'mdi-clock'
    }, {
      text: 'Audience',
      icon: 'mdi-account'
    }, {
      text: 'Conversions',
      icon: 'mdi-flag'
    }]
  })
});
// CONCATENATED MODULE: ./components/pos/CateogoryList.vue?vue&type=script&lang=js&
 /* harmony default export */ var pos_CateogoryListvue_type_script_lang_js_ = (CateogoryListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/pos/CateogoryList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_CateogoryListvue_type_script_lang_js_,
  CateogoryListvue_type_template_id_16f44712_render,
  staticRenderFns,
  false,
  null,
  null,
  "a185b3a2"
  
)

/* harmony default export */ var CateogoryList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pos-cateogory-list.js.map