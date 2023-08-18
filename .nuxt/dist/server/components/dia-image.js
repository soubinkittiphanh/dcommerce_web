exports.ids = [16];
exports.modules = {

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(271);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=template&id=7fa244e4&







var DiaImagevue_type_template_id_7fa244e4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v(" Image preview ")]), _vm._v(" "), _c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.iUrl || 'No image'
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "color": "blue darken-1"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.$emit('closeDia');
      }
    }
  }, [_vm._v("\n      ປິດ\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=template&id=7fa244e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=script&lang=js&
/* harmony default export */ var DiaImagevue_type_script_lang_js_ = ({
  props: ['iUrl']
});
// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiaImagevue_type_script_lang_js_ = (DiaImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/DiaImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiaImagevue_type_script_lang_js_,
  DiaImagevue_type_template_id_7fa244e4_render,
  staticRenderFns,
  false,
  null,
  null,
  "2d8e45e3"
  
)

/* harmony default export */ var DiaImage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dia-image.js.map