exports.ids = [52];
exports.modules = {

/***/ 1233:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(381);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageDialog.vue?vue&type=template&id=ccbaf1e6&








var ImageDialogvue_type_template_id_ccbaf1e6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<h2>" + _vm._ssrEscape("imagePreviewURL" + _vm._s(_vm.dialog)) + "</h2> "), _c(VDialog["a" /* default */], {
    attrs: {
      "width": "500"
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c(VCard["a" /* default */], [_vm.imagePreviewURL ? _c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.imagePreviewURL,
      "max-height": "100%",
      "max-width": "100%"
    }
  }) : _vm._e(), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialog = false;
      }
    }
  }, [_vm._v(" ຍອມຮັບ ")])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ImageDialog.vue?vue&type=template&id=ccbaf1e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageDialog.vue?vue&type=script&lang=js&
/* harmony default export */ var ImageDialogvue_type_script_lang_js_ = ({
  props: ['imagePreviewURL', 'pdialog'],
  data() {
    return {
      dialog: this.pdialog
    };
  }
});
// CONCATENATED MODULE: ./components/ImageDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageDialogvue_type_script_lang_js_ = (ImageDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ImageDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageDialogvue_type_script_lang_js_,
  ImageDialogvue_type_template_id_ccbaf1e6_render,
  staticRenderFns,
  false,
  null,
  null,
  "73464f00"
  
)

/* harmony default export */ var ImageDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=image-dialog.js.map