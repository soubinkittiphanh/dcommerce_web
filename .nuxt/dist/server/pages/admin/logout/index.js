exports.ids = [165];
exports.modules = {

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/logout/index.vue?vue&type=template&id=21a8fe01&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<span>Login out...</span>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/logout/index.vue?vue&type=template&id=21a8fe01&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/logout/index.vue?vue&type=script&lang=js&
/* harmony default export */ var logoutvue_type_script_lang_js_ = ({
  middleware: 'auths',
  mounted() {
    this.logout();
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/admin/login");
      // this.$store.dispatch('logout');
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/logout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_logoutvue_type_script_lang_js_ = (logoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/logout/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_logoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1cc2368e"
  
)

/* harmony default export */ var logout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map