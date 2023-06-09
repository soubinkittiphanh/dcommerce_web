exports.ids = [38];
exports.modules = {

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      imagesPreviewURL: [],
      files: null,
      IMG_URL: '',
      NAME: ''
    };
  },
  methods: {
    onFilesChange(payload) {
      const file = payload; // in case vuetify file input

      this.files = payload;
      if (file) {
        this.IMG_URL = URL.createObjectURL(file);
        this.NAME = file.name;
        URL.revokeObjectURL(file); // free memory
      } else {
        this.imagesPreviewURL = null;
        this.files = null;
      }
    },
    deleteFile(idx) {
      this.files = null;
    },
    sizeValidate(z) {
      console.log('SIZE' + z);
      const maxSize = 200000;
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`;
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(219)["URL"]))

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/advertise/mixins/ImagePreviewMixin.vue?vue&type=script&lang=js&
var ImagePreviewMixinvue_type_script_lang_js_ = __webpack_require__(297);

// CONCATENATED MODULE: ./pages/admin/advertise/mixins/ImagePreviewMixin.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_ImagePreviewMixinvue_type_script_lang_js_ = (ImagePreviewMixinvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./pages/admin/advertise/mixins/ImagePreviewMixin.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_ImagePreviewMixinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "28c77eef"
  
)

/* harmony default export */ var ImagePreviewMixin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ImagePreviewMixin.js.map