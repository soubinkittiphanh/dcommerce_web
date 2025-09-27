exports.ids = [57];
exports.modules = {

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(678);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("14c22605", content, true, context)
};

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a51cf2e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(587);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a51cf2e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a51cf2e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a51cf2e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a51cf2e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card-title.primary[data-v-a51cf2e4]{background:linear-gradient(45deg,#1976d2,#1565c0)}.section-title[data-v-a51cf2e4]{color:#1976d2;font-size:14px}.info-row[data-v-a51cf2e4],.section-title[data-v-a51cf2e4]{align-items:center;display:flex;margin-bottom:8px}.info-row[data-v-a51cf2e4]{font-size:13px;gap:4px}.info-row-small[data-v-a51cf2e4]{align-items:center;display:flex;font-size:11px;gap:4px}.info-label[data-v-a51cf2e4]{color:rgba(0,0,0,.6);font-weight:500;min-width:80px}.info-value[data-v-a51cf2e4]{color:rgba(0,0,0,.87)}.link[data-v-a51cf2e4]{color:#1976d2;-webkit-text-decoration:none;text-decoration:none}.link[data-v-a51cf2e4]:hover{-webkit-text-decoration:underline;text-decoration:underline}.notes-box[data-v-a51cf2e4]{background:#f5f5f5;border-left:3px solid #1976d2;border-radius:4px;font-size:13px;padding:8px 12px}.v-chip.x-small[data-v-a51cf2e4]{font-size:11px!important;height:20px!important}.row.dense[data-v-a51cf2e4]{margin-bottom:0;margin-top:0}.row.dense>.col[data-v-a51cf2e4]{padding-bottom:4px;padding-top:4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(348);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/agency/view/index.vue?vue&type=template&id=a51cf2e4&scoped=true&













var viewvue_type_template_id_a51cf2e4_scoped_true_render = function render() {
  var _vm$agency$maker, _vm$agency$updateUser;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px",
      "scrollable": ""
    },
    model: {
      value: _vm.visible,
      callback: function ($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3"
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
    staticClass: "pa-4"
  }, [_c(VRow["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ")])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "8"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-office-building")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ຊື່ບໍລິສັດ:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value primary--text font-weight-bold"
  }, [_vm._v(_vm._s(_vm.agency.agencyName))])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-barcode")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ລະຫັດ:")]), _vm._v(" "), _vm.agency.agencyCode ? _c(VChip["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": "primary",
      "outlined": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.agency.agencyCode) + "\n            ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-file-document")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ເລກທະບຽນ:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.agency.registrationNumber || '-'))])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-calendar-check")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ວັນທີລົງທະບຽນ:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.agency.registrationDate)))])], 1)])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-phone")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຂໍ້ມູນຕິດຕໍ່")])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": "success"
    }
  }, [_vm._v("mdi-phone")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ເບີໂທ:")]), _vm._v(" "), _c('a', {
    staticClass: "info-value link",
    attrs: {
      "href": `tel:${_vm.agency.phone}`
    }
  }, [_vm._v(_vm._s(_vm.agency.phone))])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": "info"
    }
  }, [_vm._v("mdi-email")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ອີເມວ:")]), _vm._v(" "), _vm.agency.email ? _c('a', {
    staticClass: "info-value link",
    attrs: {
      "href": `mailto:${_vm.agency.email}`
    }
  }, [_vm._v("\n              " + _vm._s(_vm.agency.email) + "\n            ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])], 1)])], 1), _vm._v(" "), _vm.agency.address ? _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-map-marker")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ທີ່ຢູ່:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.agency.address))])], 1)])], 1) : _vm._e(), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": "orange"
    }
  }, [_vm._v("mdi-home-group")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ບ້ານ:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.agency.village || '-'))])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": "purple"
    }
  }, [_vm._v("mdi-map-marker")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ເມືອງ:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.agency.district || '-'))])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": "blue"
    }
  }, [_vm._v("mdi-city")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ແຂວງ:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.agency.city || '-'))])], 1)])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-certificate")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຂໍ້ມູນທຸລະກິດ")])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": "success"
    }
  }, [_vm._v("mdi-certificate")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ເລກໃບອະນຸຍາດ:")]), _vm._v(" "), _vm.agency.licenseNumber ? _c(VChip["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": "success",
      "outlined": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.agency.licenseNumber) + "\n            ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("ບໍ່ມີ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": _vm.isLicenseExpired ? 'error' : 'success'
    }
  }, [_vm._v("\n              mdi-calendar-end\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ວັນໝົດອາຍຸ:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.agency.licenseExpiryDate)))]), _vm._v(" "), _vm.agency.licenseExpiryDate ? _c(VChip["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "x-small": "",
      "color": _vm.isLicenseExpired ? 'error' : 'success'
    }
  }, [_vm._v("\n              " + _vm._s(_vm.isLicenseExpired ? 'ໝົດອາຍຸ' : 'ໃຊ້ໄດ້') + "\n            ")]) : _vm._e()], 1)])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-account-tie")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ຜູ້ຕິດຕໍ່")])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-account")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ຊື່:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value font-weight-medium"
  }, [_vm._v(_vm._s(_vm.agency.contactPersonName || '-'))])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-briefcase")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ຕຳແໜ່ງ:")]), _vm._v(" "), _c('span', {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.agency.contactPersonPosition || '-'))])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": "",
      "color": "success"
    }
  }, [_vm._v("mdi-phone")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ເບີໂທ:")]), _vm._v(" "), _vm.agency.contactPersonPhone ? _c('a', {
    staticClass: "info-value link",
    attrs: {
      "href": `tel:${_vm.agency.contactPersonPhone}`
    }
  }, [_vm._v("\n              " + _vm._s(_vm.agency.contactPersonPhone) + "\n            ")]) : _c('span', {
    staticClass: "text--disabled"
  }, [_vm._v("-")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-check-circle")]), _vm._v(" "), _c('span', {
    staticClass: "info-label"
  }, [_vm._v("ສະຖານະ:")]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": _vm.getStatusColor(_vm.agency.status),
      "dark": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.formatStatus(_vm.agency.status)) + "\n            ")])], 1)])], 1), _vm._v(" "), _vm.agency.notes ? [_c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-note-text")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("ໝາຍເຫດ")])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "notes-box"
  }, [_vm._v(_vm._s(_vm.agency.notes))])])], 1)] : _vm._e(), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": "",
      "color": "grey"
    }
  }, [_vm._v("mdi-cog")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-bold grey--text text--darken-1"
  }, [_vm._v("ຂໍ້ມູນລະບົບ")])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "caption grey--text text--darken-1",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row-small"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-calendar-plus")]), _vm._v(" "), _c('span', [_vm._v("ສ້າງ: " + _vm._s(_vm.formatDateTime(_vm.agency.createdAt)) + " (" + _vm._s(((_vm$agency$maker = _vm.agency.maker) === null || _vm$agency$maker === void 0 ? void 0 : _vm$agency$maker.name) || '-') + ")")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "info-row-small"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "x-small": ""
    }
  }, [_vm._v("mdi-calendar-edit")]), _vm._v(" "), _c('span', [_vm._v("ອັບເດດ: " + _vm._s(_vm.formatDateTime(_vm.agency.updateTimestamp)) + " (" + _vm._s(((_vm$agency$updateUser = _vm.agency.updateUser) === null || _vm$agency$updateUser === void 0 ? void 0 : _vm$agency$updateUser.name) || '-') + ")")])], 1)])], 1)], 2) : _vm._e(), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-3"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        ປິດ\n      ")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/job_fair/agency/view/index.vue?vue&type=template&id=a51cf2e4&scoped=true&

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
      var _this$agency;
      if (!((_this$agency = this.agency) !== null && _this$agency !== void 0 && _this$agency.licenseExpiryDate)) return false;
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
        month: 'short',
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
    }
  }
});
// CONCATENATED MODULE: ./components/job_fair/agency/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var agency_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/job_fair/agency/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(677)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  agency_viewvue_type_script_lang_js_,
  viewvue_type_template_id_a51cf2e4_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "a51cf2e4",
  "2924dc88"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-fair-agency-view.js.map