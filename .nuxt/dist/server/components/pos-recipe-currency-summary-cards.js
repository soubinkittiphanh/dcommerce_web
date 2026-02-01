exports.ids = [133];
exports.modules = {

/***/ 1655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/recipe/CurrencySummaryCards.vue?vue&type=template&id=64042f0a





var CurrencySummaryCardsvue_type_template_id_64042f0a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, _vm._l(_vm.stats, function (currency) {
    return _c(VCol["a" /* default */], {
      key: currency.code,
      attrs: {
        "cols": "6",
        "md": "3"
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "pa-3 text-center elevation-2",
      attrs: {
        "outlined": ""
      },
      on: {
        "click": function ($event) {
          return _vm.$emit('details', currency);
        }
      }
    }, [_c(VAvatar["a" /* default */], {
      staticClass: "mb-2",
      attrs: {
        "color": currency.isLocal ? 'green' : 'blue',
        "size": "40"
      }
    }, [_c('span', {
      staticClass: "white--text font-weight-bold"
    }, [_vm._v(_vm._s(currency.code[0]))])]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(currency.code))]), _vm._v(" "), _c('h3', {
      class: currency.isLocal ? 'green--text' : 'blue--text'
    }, [_vm._v("\n        " + _vm._s(_vm.format(currency.totalAmount, currency.code)) + "\n      ")]), _vm._v(" "), !currency.isLocal ? _c('div', {
      staticClass: "text--secondary"
    }, [_c('small', [_vm._v("≈ " + _vm._s(_vm.format(currency.localEquivalent, _vm.localCode)))])]) : _vm._e()], 1)], 1);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pos/recipe/CurrencySummaryCards.vue?vue&type=template&id=64042f0a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/recipe/CurrencySummaryCards.vue?vue&type=script&lang=js
/* harmony default export */ var CurrencySummaryCardsvue_type_script_lang_js = ({
  props: ['stats', 'localCode', 'format']
});
// CONCATENATED MODULE: ./components/pos/recipe/CurrencySummaryCards.vue?vue&type=script&lang=js
 /* harmony default export */ var recipe_CurrencySummaryCardsvue_type_script_lang_js = (CurrencySummaryCardsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/pos/recipe/CurrencySummaryCards.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  recipe_CurrencySummaryCardsvue_type_script_lang_js,
  CurrencySummaryCardsvue_type_template_id_64042f0a_render,
  staticRenderFns,
  false,
  null,
  null,
  "773ea671"
  
)

/* harmony default export */ var CurrencySummaryCards = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pos-recipe-currency-summary-cards.js.map