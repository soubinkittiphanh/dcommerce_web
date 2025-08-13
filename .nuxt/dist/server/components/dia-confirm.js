exports.ids = [44];
exports.modules = {

/***/ 507:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaConfirm.vue?vue&type=template&id=287b5971&








var DiaConfirmvue_type_template_id_287b5971_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5 grey lighten-2"
  }, [_vm._v("\n      " + _vm._s(_vm.messageTitle || 'No title') + "\n    ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n      " + _vm._s(_vm.messageBody || 'No message') + "\n    ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.feedbackHandle(true);
      }
    }
  }, [_vm._v("\n        ຍອມຮັບ\n      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.feedbackHandle(false);
      }
    }
  }, [_vm._v("\n        ຍົກເລີກ\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DiaConfirm.vue?vue&type=template&id=287b5971&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaConfirm.vue?vue&type=script&lang=js&
/* harmony default export */ var DiaConfirmvue_type_script_lang_js_ = ({
  props: ['dia', 'messageTitle', 'messageBody'],
  methods: {
    feedbackHandle(v) {
      this.$emit('react', v);
    }
  }
});
// CONCATENATED MODULE: ./components/DiaConfirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiaConfirmvue_type_script_lang_js_ = (DiaConfirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DiaConfirm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiaConfirmvue_type_script_lang_js_,
  DiaConfirmvue_type_template_id_287b5971_render,
  staticRenderFns,
  false,
  null,
  null,
  "47dcc337"
  
)

/* harmony default export */ var DiaConfirm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dia-confirm.js.map