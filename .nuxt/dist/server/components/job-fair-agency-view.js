exports.ids = [57];
exports.modules = {

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(671);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6d88f5ba", content, true, context)
};

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e5f56fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(575);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e5f56fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e5f56fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e5f56fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e5f56fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".section-header[data-v-0e5f56fb]{align-items:center;display:flex;margin-bottom:8px}.section-header .text-h6[data-v-0e5f56fb]{color:#1976d2;font-weight:600}.v-card-title.primary[data-v-0e5f56fb]{background:linear-gradient(45deg,#1976d2,#1565c0)}.info-item[data-v-0e5f56fb]{margin-bottom:16px}.info-label[data-v-0e5f56fb]{align-items:center;color:rgba(0,0,0,.6);display:flex;font-size:14px;font-weight:500;margin-bottom:4px}.info-value[data-v-0e5f56fb]{color:rgba(0,0,0,.87);font-size:16px;line-height:1.4}.info-value.caption[data-v-0e5f56fb]{color:rgba(0,0,0,.6);font-size:12px}.info-value a[data-v-0e5f56fb]{color:#1976d2}.info-value a[data-v-0e5f56fb]:hover{-webkit-text-decoration:underline!important;text-decoration:underline!important}.text--disabled[data-v-0e5f56fb]{color:rgba(0,0,0,.38)!important}.grey--text[data-v-0e5f56fb]{color:rgba(0,0,0,.6)!important}.v-chip[data-v-0e5f56fb]{margin:2px}.v-card.grey.lighten-5[data-v-0e5f56fb]{border-left:4px solid #1976d2}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 862:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(381);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/agency/view/index.vue?vue&type=template&id=0e5f56fb&scoped=true&














var viewvue_type_template_id_0e5f56fb_scoped_true_render = function render() {
  var _vm$agency$maker, _vm$agency$updateUser;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "700px"
    },
    model: {
      value: _vm.visible,
      callback: function ($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-eye")]), _vm._v(" "), _c('span', [_vm._v("ລາຍລະອຽດບໍລິສັດ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _vm.agency ? _c(components_VCard["c" /* VCardText */], {
    staticClass: "pt-6"
  }, [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "8"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-office-building")]), _vm._v("\n                ຊື່ບໍລິສັດ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value primary--text font-weight-bold"
  }, [_vm._v("\n                " + _vm._s(_vm.agency.agencyName) + "\n              ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-identifier")]), _vm._v("\n                ລະຫັດບໍລິສັດ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm.agency.agencyCode ? _c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "outlined": ""
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.agency.agencyCode) + "\n                ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])], 1)])])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-file-document")]), _vm._v("\n                ເລກທະບຽນບໍລິສັດ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm._v("\n                " + _vm._s(_vm.agency.registrationNumber || '-') + "\n              ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-calendar")]), _vm._v("\n                ວັນທີລົງທະບຽນ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm._v("\n                " + _vm._s(_vm.agency.registrationDate ? _vm.formatDate(_vm.agency.registrationDate) : '-') + "\n              ")])])])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header mt-6"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-phone")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6"
  }, [_vm._v("ຂໍ້ມູນຕິດຕໍ່")])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-phone")]), _vm._v("\n                ເບີໂທລະສັບ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_c('a', {
    staticClass: "text-decoration-none",
    attrs: {
      "href": `tel:${_vm.agency.phone}`
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.agency.phone) + "\n                ")])])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-email")]), _vm._v("\n                ອີເມວ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm.agency.email ? _c('a', {
    staticClass: "text-decoration-none",
    attrs: {
      "href": `mailto:${_vm.agency.email}`
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.agency.email) + "\n                ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])])])])], 1), _vm._v(" "), _vm.agency.address ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-map-marker")]), _vm._v("\n                ທີ່ຢູ່\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm._v("\n                " + _vm._s(_vm.agency.address) + "\n              ")])])])], 1) : _vm._e(), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-city")]), _vm._v("\n                ເມືອງ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm.agency.city ? _c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "info",
      "outlined": ""
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.agency.city) + "\n                ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])], 1)])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-map")]), _vm._v("\n                ແຂວງ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm.agency.district ? _c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "secondary",
      "outlined": ""
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.agency.district) + "\n                ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])], 1)])])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header mt-6"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-certificate")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6"
  }, [_vm._v("ຂໍ້ມູນທຸລະກິດ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-certificate")]), _vm._v("\n                ເລກໃບອະນຸຍາດ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm.agency.licenseNumber ? _c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "success",
      "outlined": ""
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.agency.licenseNumber) + "\n                ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("ບໍ່ມີ")])], 1)])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-calendar-clock")]), _vm._v("\n                ວັນໝົດອາຍຸໃບອະນຸຍາດ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm.agency.licenseExpiryDate ? _c('div', [_c('div', {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.agency.licenseExpiryDate)))]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": _vm.isLicenseExpired ? 'error' : 'success',
      "dark": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v(_vm._s(_vm.isLicenseExpired ? 'mdi-alert-circle' : 'mdi-check-circle'))]), _vm._v("\n                    " + _vm._s(_vm.isLicenseExpired ? 'ໝົດອາຍຸແລ້ວ' : 'ຍັງໃຊ້ໄດ້') + "\n                  ")], 1)], 1) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])])])])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header mt-6"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-account-tie")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6"
  }, [_vm._v("ຜູ້ຕິດຕໍ່")])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-account")]), _vm._v("\n                ຊື່ຜູ້ຕິດຕໍ່\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value font-weight-medium"
  }, [_vm._v("\n                " + _vm._s(_vm.agency.contactPersonName || '-') + "\n              ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-briefcase")]), _vm._v("\n                ຕຳແໜ່ງ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm._v("\n                " + _vm._s(_vm.agency.contactPersonPosition || '-') + "\n              ")])])])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-phone")]), _vm._v("\n                ເບີໂທຜູ້ຕິດຕໍ່\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_vm.agency.contactPersonPhone ? _c('a', {
    staticClass: "text-decoration-none",
    attrs: {
      "href": `tel:${_vm.agency.contactPersonPhone}`
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.agency.contactPersonPhone) + "\n                ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-check-circle")]), _vm._v("\n                ສະຖານະ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": _vm.getStatusColor(_vm.agency.status),
      "dark": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v(_vm._s(_vm.getStatusIcon(_vm.agency.status)))]), _vm._v("\n                  " + _vm._s(_vm.formatStatus(_vm.agency.status)) + "\n                ")], 1)], 1)])])], 1), _vm._v(" "), _vm.agency.notes ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header mt-6"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-note-text")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6"
  }, [_vm._v("ໝາຍເຫດ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  })], 1)], 1) : _vm._e(), _vm._v(" "), _vm.agency.notes ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "color": "grey lighten-5",
      "flat": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "info-value"
  }, [_vm._v("\n                  " + _vm._s(_vm.agency.notes) + "\n                ")])])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header mt-6"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "grey"
    }
  }, [_vm._v("mdi-information-outline")]), _vm._v(" "), _c('span', {
    staticClass: "text-h6 grey--text"
  }, [_vm._v("ຂໍ້ມູນລະບົບ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-calendar-plus")]), _vm._v("\n                ວັນທີສ້າງ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value caption"
  }, [_vm._v("\n                " + _vm._s(_vm.formatDateTime(_vm.agency.createdAt)) + "\n              ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-calendar-edit")]), _vm._v("\n                ວັນທີອັບເດດ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value caption"
  }, [_vm._v("\n                " + _vm._s(_vm.formatDateTime(_vm.agency.updateTimestamp)) + "\n              ")])])])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-account-plus")]), _vm._v("\n                ຜູ້ສ້າງ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value caption"
  }, [_vm._v("\n                " + _vm._s(((_vm$agency$maker = _vm.agency.maker) === null || _vm$agency$maker === void 0 ? void 0 : _vm$agency$maker.name) || '-') + "\n              ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', {
    staticClass: "info-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-account-edit")]), _vm._v("\n                ຜູ້ອັບເດດ\n              ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-value caption"
  }, [_vm._v("\n                " + _vm._s(((_vm$agency$updateUser = _vm.agency.updateUser) === null || _vm$agency$updateUser === void 0 ? void 0 : _vm$agency$updateUser.name) || '-') + "\n              ")])])])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.editAgency
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-pencil")]), _vm._v("\n        ແກ້ໄຂ\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        ປິດ\n      ")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/job_fair/agency/view/index.vue?vue&type=template&id=0e5f56fb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/agency/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'AgencyViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    agency: {
      type: Object,
      default: null
    }
  },
  computed: {
    isLicenseExpired() {
      if (!this.agency || !this.agency.licenseExpiryDate) return false;
      return new Date(this.agency.licenseExpiryDate) <= new Date();
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    editAgency() {
      this.$emit('edit', this.agency);
      this.closeDialog();
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatStatus(status) {
      const statusMap = {
        active: 'ກຳລັງດຳເນີນງານ',
        inactive: 'ບໍ່ດຳເນີນງານ',
        suspended: 'ຖືກຢຸດ'
      };
      return statusMap[status] || status;
    },
    getStatusColor(status) {
      const colorMap = {
        active: 'success',
        inactive: 'grey',
        suspended: 'error'
      };
      return colorMap[status] || 'grey';
    },
    getStatusIcon(status) {
      const iconMap = {
        active: 'mdi-check-circle',
        inactive: 'mdi-pause-circle',
        suspended: 'mdi-alert-circle'
      };
      return iconMap[status] || 'mdi-help-circle';
    }
  }
});
// CONCATENATED MODULE: ./components/job_fair/agency/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var agency_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/job_fair/agency/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(670)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  agency_viewvue_type_script_lang_js_,
  viewvue_type_template_id_0e5f56fb_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "0e5f56fb",
  "2924dc88"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-fair-agency-view.js.map