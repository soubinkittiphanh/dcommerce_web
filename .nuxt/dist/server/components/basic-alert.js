exports.ids = [28];
exports.modules = {

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(400);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BasicAlert.vue?vue&type=template&id=4fbdf3b6


var BasicAlertvue_type_template_id_4fbdf3b6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VAlert["a" /* default */], {
    attrs: {
      "type": this.statusType,
      "title": "Alert title",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BasicAlert.vue?vue&type=template&id=4fbdf3b6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BasicAlert.vue?vue&type=script&lang=js
/* harmony default export */ var BasicAlertvue_type_script_lang_js = ({
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    statusType: {
      type: String,
      require: true
    }
  },
  async created() {
    await this.fetchData();
  },
  data() {
    return {
      search: '',
      orderList: []
    };
  }
});
// CONCATENATED MODULE: ./components/BasicAlert.vue?vue&type=script&lang=js
 /* harmony default export */ var components_BasicAlertvue_type_script_lang_js = (BasicAlertvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/BasicAlert.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BasicAlertvue_type_script_lang_js,
  BasicAlertvue_type_template_id_4fbdf3b6_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "65ddcd3e"
  
)

/* harmony default export */ var BasicAlert = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=basic-alert.js.map