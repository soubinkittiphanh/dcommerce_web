exports.ids = [129];
exports.modules = {

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(587);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("36b7b7e2", content, true, context)
};

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailsDialog_vue_vue_type_style_index_0_id_44db6252_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailsDialog_vue_vue_type_style_index_0_id_44db6252_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailsDialog_vue_vue_type_style_index_0_id_44db6252_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailsDialog_vue_vue_type_style_index_0_id_44db6252_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailsDialog_vue_vue_type_style_index_0_id_44db6252_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".info-row[data-v-44db6252]{margin-bottom:8px;padding:4px 0}.info-row strong[data-v-44db6252]{color:#424242;display:inline-block;min-width:120px}.v-card__title[data-v-44db6252]{font-weight:600;letter-spacing:.5px}.v-data-table[data-v-44db6252] .v-data-table__wrapper{border-radius:8px}.v-data-table[data-v-44db6252] th{background-color:#f8f9fa!important;color:#495057!important;font-size:.875rem!important;font-weight:600!important}.v-data-table[data-v-44db6252] td{font-size:.875rem}@media (max-width:600px){.v-dialog[data-v-44db6252]{margin:12px}.info-row strong[data-v-44db6252]{font-size:.875rem;min-width:100px}.v-data-table[data-v-44db6252] td,.v-data-table[data-v-44db6252] th{font-size:.75rem;padding:8px 4px!important}}.v-chip--small[data-v-44db6252]{font-size:.75rem;height:24px}.gift-quantity[data-v-44db6252]{animation:giftPulse-44db6252 2s infinite}.gift-price[data-v-44db6252],.gift-total[data-v-44db6252]{position:relative}.gift-price[data-v-44db6252]:before,.gift-total[data-v-44db6252]:before{animation:giftBounce-44db6252 3s infinite;content:\"🎁\";font-size:16px;left:-20px;position:absolute;top:50%;transform:translateY(-50%)}@keyframes giftPulse-44db6252{0%,to{box-shadow:0 0 0 0 rgba(233,30,99,.4)}50%{box-shadow:0 0 0 8px rgba(233,30,99,0)}}@keyframes giftBounce-44db6252{0%,20%,50%,80%,to{transform:translateY(-50%)}40%{transform:translateY(-60%)}60%{transform:translateY(-55%)}}.v-chip.pink[data-v-44db6252]{background:linear-gradient(45deg,#e91e63,#ff6ec7)!important}.v-chip.pink .v-icon[data-v-44db6252]{animation:giftSpin-44db6252 4s linear infinite}@keyframes giftSpin-44db6252{0%{transform:rotate(0deg)}25%{transform:rotate(0deg)}35%{transform:rotate(10deg)}45%{transform:rotate(-10deg)}55%{transform:rotate(5deg)}65%{transform:rotate(-5deg)}75%{transform:rotate(0deg)}to{transform:rotate(0deg)}}.gift-summary-card[data-v-44db6252]{animation:giftGlow-44db6252 3s infinite alternate;overflow:hidden;position:relative}.gift-summary-card[data-v-44db6252]:before{animation:shimmer-44db6252 4s infinite;background:linear-gradient(45deg,transparent,hsla(0,0%,100%,.1),transparent);content:\"\";height:200%;left:-50%;position:absolute;top:-50%;transform:rotate(45deg);width:200%}.gift-header-chip[data-v-44db6252]{animation:giftPulse-44db6252 2s infinite}@keyframes giftGlow-44db6252{0%{box-shadow:0 0 5px rgba(233,30,99,.3)}to{box-shadow:0 0 20px rgba(233,30,99,.6)}}@keyframes shimmer-44db6252{0%{transform:translateX(-100%) translateY(-100%) rotate(45deg)}to{transform:translateX(100%) translateY(100%) rotate(45deg)}}.v-progress-linear[data-v-44db6252]{border-radius:4px}.v-card--outlined[data-v-44db6252]{transition:box-shadow .2s ease-in-out}.v-card--outlined[data-v-44db6252]:hover{box-shadow:0 2px 8px rgba(0,0,0,.1)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(407);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(433);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/dialogs/TicketDetailsDialog.vue?vue&type=template&id=44db6252&scoped=true















var TicketDetailsDialogvue_type_template_id_44db6252_scoped_true_render = function render() {
  var _vm$ticketData, _vm$ticketData$client, _vm$ticketData$client2, _vm$ticketData$locati, _vm$ticketData$user, _vm$ticketData$curren, _vm$ticketData$curren2, _vm$ticketData$curren3, _vm$ticketData$curren4;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200",
      "persistent": "",
      "scrollable": ""
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-receipt")]), _vm._v("\n      ລາຍລະອຽດບິນ - ເລກທີ " + _vm._s((_vm$ticketData = _vm.ticketData) === null || _vm$ticketData === void 0 ? void 0 : _vm$ticketData.id) + "\n      "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white",
      "small": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _vm.ticketData ? _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3 mb-3",
    attrs: {
      "outlined": ""
    }
  }, [_c('h4', {
    staticClass: "mb-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n              ຂໍ້ມູນພື້ນຖານ\n            ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ວັນທີ:")]), _vm._v(" " + _vm._s(_vm.formatDate(_vm.ticketData.bookingDate)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ເວລາສ້າງ:")]), _vm._v(" " + _vm._s(_vm.formatDateTime(_vm.ticketData.createdAt)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ລູກຄ້າ:")]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": _vm.getClientColor()
    }
  }, [_vm._v("\n                " + _vm._s(((_vm$ticketData$client = _vm.ticketData.client) === null || _vm$ticketData$client === void 0 ? void 0 : _vm$ticketData$client.name) || 'Walk-in Customer') + "\n              ")])], 1), _vm._v(" "), (_vm$ticketData$client2 = _vm.ticketData.client) !== null && _vm$ticketData$client2 !== void 0 && _vm$ticketData$client2.telephone ? _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ເບີໂທ:")]), _vm._v(" " + _vm._s(_vm.ticketData.client.telephone) + "\n            ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ສາຂາ:")]), _vm._v(" " + _vm._s((_vm$ticketData$locati = _vm.ticketData.location) === null || _vm$ticketData$locati === void 0 ? void 0 : _vm$ticketData$locati.name) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ພະນັກງານ:")]), _vm._v(" " + _vm._s((_vm$ticketData$user = _vm.ticketData.user) === null || _vm$ticketData$user === void 0 ? void 0 : _vm$ticketData$user.cus_name) + "\n            ")])])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3 mb-3",
    attrs: {
      "outlined": ""
    }
  }, [_c('h4', {
    staticClass: "mb-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "success"
    }
  }, [_vm._v("mdi-cash")]), _vm._v("\n              ສະຫຼຸບການເງິນ\n            ")], 1), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ຍອດລວມ:")]), _vm._v(" "), _c('span', {
    staticClass: "success--text font-weight-bold"
  }, [_vm._v("\n                " + _vm._s(_vm.formatNumber(_vm.getSubTotal())) + " " + _vm._s(((_vm$ticketData$curren = _vm.ticketData.currency) === null || _vm$ticketData$curren === void 0 ? void 0 : _vm$ticketData$curren.code) || 'LAK') + "\n              ")])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ສ່ວນຫລຸດ:")]), _vm._v(" "), _c('span', {
    staticClass: "error--text"
  }, [_vm._v("\n                " + _vm._s(_vm.formatNumber(_vm.ticketData.discount)) + " " + _vm._s(((_vm$ticketData$curren2 = _vm.ticketData.currency) === null || _vm$ticketData$curren2 === void 0 ? void 0 : _vm$ticketData$curren2.code) || 'LAK') + "\n              ")])]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ຈຳນວນຊຳລະ:")]), _vm._v(" "), _c('span', {
    staticClass: "primary--text font-weight-bold text-h6"
  }, [_vm._v("\n                " + _vm._s(_vm.formatNumber(_vm.ticketData.total)) + " " + _vm._s(((_vm$ticketData$curren3 = _vm.ticketData.currency) === null || _vm$ticketData$curren3 === void 0 ? void 0 : _vm$ticketData$curren3.code) || 'LAK') + "\n              ")])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ອັດຕາແລກປ່ຽນ:")]), _vm._v(" " + _vm._s(_vm.ticketData.exchangeRate || 1) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ສະກຸນເງິນ:")]), _vm._v(" " + _vm._s((_vm$ticketData$curren4 = _vm.ticketData.currency) === null || _vm$ticketData$curren4 === void 0 ? void 0 : _vm$ticketData$curren4.name) + "\n            ")])], 1)], 1)], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-format-list-bulleted")]), _vm._v("\n          ລາຍການສິນຄ້າ\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VChip["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "info",
      "small": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.getTotalItems()) + " ລາຍການ | " + _vm._s(_vm.getTotalQuantity()) + " ຫົວໜ່ວຍ\n            ")]), _vm._v(" "), _vm.hasGiftItems() ? _c(VChip["a" /* default */], {
    staticClass: "gift-header-chip",
    attrs: {
      "color": "pink",
      "small": "",
      "dark": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-gift")]), _vm._v("\n              " + _vm._s(_vm.getGiftItems()) + " ຂອງຂວັນ\n              "), _c(VIcon["a" /* default */], {
    attrs: {
      "right": "",
      "small": ""
    }
  }, [_vm._v("mdi-heart")])], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.lineItemHeaders,
      "items": _vm.ticketData.lines || [],
      "hide-default-footer": "",
      "disable-pagination": "",
      "items-per-page": -1
    },
    scopedSlots: _vm._u([{
      key: "item.product",
      fn: function ({
        item
      }) {
        var _item$product, _item$product2, _item$product3;
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c('div', {
          staticClass: "flex-grow-1"
        }, [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c('div', {
          staticClass: "font-weight-medium"
        }, [_vm._v(_vm._s((_item$product = item.product) === null || _item$product === void 0 ? void 0 : _item$product.pro_name))]), _vm._v(" "), item.isGift ? _c(VChip["a" /* default */], {
          staticClass: "ml-2",
          attrs: {
            "color": "pink",
            "text-color": "white",
            "x-small": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "x-small": ""
          }
        }, [_vm._v("mdi-gift")]), _vm._v("\n                    ຂອງຂວັນ\n                  ")], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
          staticClass: "caption text--secondary"
        }, [_vm._v("ID: " + _vm._s((_item$product2 = item.product) === null || _item$product2 === void 0 ? void 0 : _item$product2.pro_id))]), _vm._v(" "), (_item$product3 = item.product) !== null && _item$product3 !== void 0 && _item$product3.pro_desc ? _c('div', {
          staticClass: "caption text--secondary"
        }, [_vm._v("\n                  " + _vm._s(item.product.pro_desc) + "\n                ")]) : _vm._e()]), _vm._v(" "), item.isGift ? _c('div', {
          staticClass: "ml-2"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "pink",
            "size": "24"
          }
        }, [_vm._v("mdi-gift-outline")])], 1) : _vm._e()])];
      }
    }, {
      key: "item.quantity",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-center"
        }, [_c(VChip["a" /* default */], {
          class: {
            'gift-quantity': item.isGift
          },
          attrs: {
            "small": "",
            "color": item.isGift ? 'pink' : 'blue',
            "dark": ""
          }
        }, [item.isGift ? _c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "left": ""
          }
        }, [_vm._v("mdi-gift")]) : _vm._e(), _vm._v("\n                " + _vm._s(item.quantity) + "\n              ")], 1), _vm._v(" "), item.isGift ? _c('div', {
          staticClass: "caption pink--text mt-1"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": "pink"
          }
        }, [_vm._v("mdi-heart")]), _vm._v("\n                ຟຣີ\n              ")], 1) : _vm._e()], 1)];
      }
    }, {
      key: "item.unitRate",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "text-center"
        }, [_vm._v(_vm._s(item.unitRate))])];
      }
    }, {
      key: "item.price",
      fn: function ({
        item
      }) {
        var _vm$ticketData$curren5, _vm$ticketData$curren6;
        return [_c('div', {
          staticClass: "text-right"
        }, [item.isGift ? _c('div', {
          staticClass: "gift-price"
        }, [_c('div', {
          staticClass: "text-decoration-line-through text--secondary caption"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(item.price)) + " " + _vm._s(((_vm$ticketData$curren5 = _vm.ticketData.currency) === null || _vm$ticketData$curren5 === void 0 ? void 0 : _vm$ticketData$curren5.code) || 'LAK') + "\n                ")]), _vm._v(" "), _c('div', {
          staticClass: "pink--text font-weight-bold"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "pink"
          }
        }, [_vm._v("mdi-gift")]), _vm._v("\n                  ຟຣີ\n                ")], 1)]) : _c('div', [_vm._v("\n                " + _vm._s(_vm.formatNumber(item.price)) + " " + _vm._s(((_vm$ticketData$curren6 = _vm.ticketData.currency) === null || _vm$ticketData$curren6 === void 0 ? void 0 : _vm$ticketData$curren6.code) || 'LAK') + "\n              ")])])];
      }
    }, {
      key: "item.discount",
      fn: function ({
        item
      }) {
        var _vm$ticketData$curren7;
        return [_c('div', {
          staticClass: "text-right"
        }, [item.discount > 0 ? _c('span', {
          staticClass: "error--text"
        }, [_vm._v("\n                -" + _vm._s(_vm.formatNumber(item.discount)) + " " + _vm._s(((_vm$ticketData$curren7 = _vm.ticketData.currency) === null || _vm$ticketData$curren7 === void 0 ? void 0 : _vm$ticketData$curren7.code) || 'LAK') + "\n              ")]) : _c('span', {
          staticClass: "text--secondary"
        }, [_vm._v("-")])])];
      }
    }, {
      key: "item.total",
      fn: function ({
        item
      }) {
        var _vm$ticketData$curren8, _vm$ticketData$curren9;
        return [_c('div', {
          staticClass: "text-right"
        }, [item.isGift ? _c('div', {
          staticClass: "gift-total"
        }, [_c('div', {
          staticClass: "text-decoration-line-through text--secondary caption"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(item.total)) + " " + _vm._s(((_vm$ticketData$curren8 = _vm.ticketData.currency) === null || _vm$ticketData$curren8 === void 0 ? void 0 : _vm$ticketData$curren8.code) || 'LAK') + "\n                ")]), _vm._v(" "), _c('div', {
          staticClass: "pink--text font-weight-bold"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "pink"
          }
        }, [_vm._v("mdi-heart")]), _vm._v("\n                  ຟຣີ (" + _vm._s(_vm.formatNumber(item.total)) + " ບາດ)\n                ")], 1)]) : _c('div', [_c('strong', {
          staticClass: "success--text"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(item.total)) + " " + _vm._s(((_vm$ticketData$curren9 = _vm.ticketData.currency) === null || _vm$ticketData$curren9 === void 0 ? void 0 : _vm$ticketData$curren9.code) || 'LAK') + "\n                ")])])])];
      }
    }], null, false, 2808888012)
  }), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "py-2"
  }, [_c(VRow["a" /* default */], {
    staticClass: "text-center"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "2"
    }
  }, [_c('div', {
    staticClass: "text-h6 primary--text"
  }, [_vm._v(_vm._s(_vm.getTotalItems()))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("ລາຍການທັງໝົດ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "2"
    }
  }, [_c('div', {
    staticClass: "text-h6 primary--text"
  }, [_vm._v(_vm._s(_vm.getTotalQuantity()))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("ຈຳນວນທັງໝົດ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "2"
    }
  }, [_c('div', {
    staticClass: "text-h6 pink--text"
  }, [_vm._v(_vm._s(_vm.getGiftItems()))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": "pink"
    }
  }, [_vm._v("mdi-gift")]), _vm._v("\n                ຂອງຂວັນ\n              ")], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "2"
    }
  }, [_c('div', {
    staticClass: "text-h6 pink--text"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.getGiftValue())))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": "pink"
    }
  }, [_vm._v("mdi-heart")]), _vm._v("\n                ມູນຄ່າຂອງຂວັນ\n              ")], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "2"
    }
  }, [_c('div', {
    staticClass: "text-h6 success--text"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.getSubTotal())))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("ຍອດລວມກ່ອນຫລຸດ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "2"
    }
  }, [_c('div', {
    staticClass: "text-h6",
    class: _vm.ticketData.discount > 0 ? 'error--text' : 'text--secondary'
  }, [_vm._v("\n                " + _vm._s(_vm.ticketData.discount > 0 ? `-${_vm.formatNumber(_vm.ticketData.discount)}` : '0') + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("ສ່ວນຫລຸດ")])])], 1)], 1)], 1), _vm._v(" "), _vm.hasGiftItems() ? _c(VCard["a" /* default */], {
    staticClass: "mb-4 gift-summary-card",
    staticStyle: {
      "background": "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)",
      "border": "2px solid #e91e63"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2 pink--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "pink"
    }
  }, [_vm._v("mdi-gift")]), _vm._v("\n          ສະຫຼຸບຂອງຂວັນ\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VIcon["a" /* default */], {
    attrs: {
      "color": "pink"
    }
  }, [_vm._v("mdi-heart")])], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "py-2"
  }, [_c(VRow["a" /* default */], {
    staticClass: "text-center"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "text-h5 pink--text"
  }, [_vm._v(_vm._s(_vm.getGiftItems()))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("ລາຍການຂອງຂວັນ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "text-h5 pink--text"
  }, [_vm._v(_vm._s(_vm.getGiftQuantity()))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("ຈຳນວນຂອງຂວັນ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "text-h5 pink--text"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.getGiftValue())))]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("ມູນຄ່າຂອງຂວັນ (LAK)")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "text-h5 pink--text"
  }, [_vm._v(_vm._s(_vm.getGiftPercentage().toFixed(1)) + "%")]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("ເປີເຊັນຂອງຂວັນ")])])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-center pink--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "pink"
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _c('strong', [_vm._v("ຂອງຂວັນບໍ່ຄິດລາຄາ - ມູນຄ່າສະແດງເພື່ອການອ້າງອີງເທົ່ານັ້ນ")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-credit-card-multiple")]), _vm._v("\n          ລາຍລະອຽດການຊຳລະ\n          "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.getPaymentTypeColor(),
      "small": "",
      "dark": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.getPaymentTypeLabel()) + "\n          ")])], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.paymentHeaders,
      "items": _vm.getPaymentDetails(),
      "hide-default-footer": "",
      "disable-pagination": "",
      "items-per-page": -1
    },
    scopedSlots: _vm._u([{
      key: "item.paymentMethod",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getPaymentMethodColor(item.code),
            "small": "",
            "dark": ""
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "small": ""
          }
        }, [_vm._v(_vm._s(_vm.getPaymentMethodIcon(item.code)))]), _vm._v("\n              " + _vm._s(item.name) + "\n            ")], 1)];
      }
    }, {
      key: "item.amount",
      fn: function ({
        item
      }) {
        var _vm$ticketData$curren0;
        return [_c('div', {
          staticClass: "text-right"
        }, [_c('strong', [_vm._v(_vm._s(_vm.formatNumber(item.amount)) + " " + _vm._s(((_vm$ticketData$curren0 = _vm.ticketData.currency) === null || _vm$ticketData$curren0 === void 0 ? void 0 : _vm$ticketData$curren0.code) || 'LAK'))])])];
      }
    }, {
      key: "item.percentage",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticStyle: {
            "min-width": "120px"
          }
        }, [_c(VProgressLinear["a" /* default */], {
          staticClass: "my-1",
          attrs: {
            "value": item.percentage,
            "height": "20",
            "color": _vm.getPaymentMethodColor(item.code),
            "rounded": ""
          }
        }, [_c('small', {
          staticClass: "white--text font-weight-bold"
        }, [_vm._v("\n                  " + _vm._s(item.percentage.toFixed(1)) + "%\n                ")])])], 1)];
      }
    }, {
      key: "item.createdAt",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "caption"
        }, [_vm._v(_vm._s(item.createdAt))])];
      }
    }], null, false, 1258330928)
  })], 1), _vm._v(" "), _vm.ticketData.remark || _vm.ticketData.referenceNo ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3",
    attrs: {
      "outlined": ""
    }
  }, [_c('h4', {
    staticClass: "mb-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-note-text")]), _vm._v("\n              ຂໍ້ມູນເພີ່ມເຕີມ\n            ")], 1), _vm._v(" "), _vm.ticketData.referenceNo ? _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ເລກອ້າງອີງ:")]), _vm._v(" " + _vm._s(_vm.ticketData.referenceNo) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.ticketData.remark ? _c('div', {
    staticClass: "info-row"
  }, [_c('strong', [_vm._v("ໝາຍເຫດ:")]), _vm._v(" " + _vm._s(_vm.ticketData.remark) + "\n            ")]) : _vm._e()])], 1)], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        ປິດ\n      ")], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _vm.showPrintButton ? _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.printTicket
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n        ພິມບິນ\n      ")], 1) : _vm._e(), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "outlined": ""
    },
    on: {
      "click": _vm.printPaymentDetails
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-receipt")]), _vm._v("\n        ພິມລາຍລະອຽດການຊຳລະ\n      ")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pos/dialogs/TicketDetailsDialog.vue?vue&type=template&id=44db6252&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pos/dialogs/TicketDetailsDialog.vue?vue&type=script&lang=js

/* harmony default export */ var TicketDetailsDialogvue_type_script_lang_js = ({
  name: 'TicketDetailsDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    ticketData: {
      type: Object,
      default: () => null
    },
    showPrintButton: {
      type: Boolean,
      default: true
    },
    companyLogo: {
      type: String,
      default: ''
    },
    ticketCommon: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      lineItemHeaders: [{
        text: 'ສິນຄ້າ',
        value: 'product',
        width: '35%',
        sortable: false
      }, {
        text: 'ຈຳນວນ',
        value: 'quantity',
        width: '10%',
        align: 'center'
      }, {
        text: 'ອັດຕາ',
        value: 'unitRate',
        width: '8%',
        align: 'center'
      }, {
        text: 'ລາຄາຕໍ່ຫົວໜ່ວຍ',
        value: 'price',
        width: '15%',
        align: 'right'
      }, {
        text: 'ສ່ວນຫລຸດ',
        value: 'discount',
        width: '12%',
        align: 'right'
      }, {
        text: 'ຍອດລວມ',
        value: 'total',
        width: '15%',
        align: 'right'
      }],
      paymentHeaders: [{
        text: 'ວິທີການຊຳລະ',
        align: 'left',
        value: 'paymentMethod',
        sortable: false,
        width: '30%'
      }, {
        text: 'ຈຳນວນເງິນ',
        align: 'right',
        value: 'amount',
        sortable: false,
        width: '25%'
      }, {
        text: 'ເປີເຊັນ',
        align: 'center',
        value: 'percentage',
        sortable: false,
        width: '25%'
      }, {
        text: 'ເວລາຊຳລະ',
        align: 'center',
        value: 'createdAt',
        sortable: false,
        width: '20%'
      }]
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
    ...Object(external_vuex_["mapGetters"])(['findAllPayment'])
  },
  methods: {
    closeDialog() {
      this.$emit('input', false);
      this.$emit('close');
    },
    // Line Items Calculations
    getTotalItems() {
      var _this$ticketData;
      if (!((_this$ticketData = this.ticketData) !== null && _this$ticketData !== void 0 && _this$ticketData.lines)) return 0;
      return this.ticketData.lines.length;
    },
    getTotalQuantity() {
      var _this$ticketData2;
      if (!((_this$ticketData2 = this.ticketData) !== null && _this$ticketData2 !== void 0 && _this$ticketData2.lines)) return 0;
      return this.ticketData.lines.reduce((sum, line) => sum + line.quantity, 0);
    },
    getSubTotal() {
      var _this$ticketData3;
      if (!((_this$ticketData3 = this.ticketData) !== null && _this$ticketData3 !== void 0 && _this$ticketData3.lines)) return 0;
      return this.ticketData.lines.reduce((sum, line) => sum + line.total, 0);
    },
    // NEW: Gift item statistics
    getGiftItems() {
      var _this$ticketData4;
      if (!((_this$ticketData4 = this.ticketData) !== null && _this$ticketData4 !== void 0 && _this$ticketData4.lines)) return 0;
      return this.ticketData.lines.filter(line => line.isGift).length;
    },
    getGiftQuantity() {
      var _this$ticketData5;
      if (!((_this$ticketData5 = this.ticketData) !== null && _this$ticketData5 !== void 0 && _this$ticketData5.lines)) return 0;
      return this.ticketData.lines.filter(line => line.isGift).reduce((sum, line) => sum + line.quantity, 0);
    },
    getGiftValue() {
      var _this$ticketData6;
      if (!((_this$ticketData6 = this.ticketData) !== null && _this$ticketData6 !== void 0 && _this$ticketData6.lines)) return 0;
      return this.ticketData.lines.filter(line => line.isGift).reduce((sum, line) => sum + line.total, 0);
    },
    hasGiftItems() {
      return this.getGiftItems() > 0;
    },
    getGiftPercentage() {
      const totalValue = this.getSubTotal();
      const giftValue = this.getGiftValue();
      return totalValue > 0 ? giftValue / totalValue * 100 : 0;
    },
    // Payment Analysis
    isMultiPayment() {
      var _this$ticketData7;
      return ((_this$ticketData7 = this.ticketData) === null || _this$ticketData7 === void 0 ? void 0 : _this$ticketData7.payments) && Array.isArray(this.ticketData.payments) && this.ticketData.payments.length > 1;
    },
    getPaymentTypeLabel() {
      var _this$ticketData8;
      if (this.isMultiPayment()) {
        return `ຊຳລະຫຼາຍວິທີ (${this.ticketData.payments.length} ວິທີ)`;
      } else if ((_this$ticketData8 = this.ticketData) !== null && _this$ticketData8 !== void 0 && _this$ticketData8.payment) {
        return 'ຊຳລະແບບດຽວ';
      }
      return 'ບໍ່ມີຂໍ້ມູນ';
    },
    getPaymentTypeColor() {
      var _this$ticketData9;
      if (this.isMultiPayment()) {
        return 'success';
      } else if ((_this$ticketData9 = this.ticketData) !== null && _this$ticketData9 !== void 0 && _this$ticketData9.payment) {
        return 'primary';
      }
      return 'grey';
    },
    getPaymentDetails() {
      var _this$ticketData0, _this$ticketData1;
      const details = [];
      const totalAmount = ((_this$ticketData0 = this.ticketData) === null || _this$ticketData0 === void 0 ? void 0 : _this$ticketData0.total) || 0;
      if (this.isMultiPayment()) {
        this.ticketData.payments.forEach(payment => {
          var _payment$paymentMetho, _payment$paymentMetho2;
          const percentage = totalAmount > 0 ? payment.amount / totalAmount * 100 : 0;
          details.push({
            code: ((_payment$paymentMetho = payment.paymentMethod) === null || _payment$paymentMetho === void 0 ? void 0 : _payment$paymentMetho.payment_code) || 'UNKNOWN',
            name: ((_payment$paymentMetho2 = payment.paymentMethod) === null || _payment$paymentMetho2 === void 0 ? void 0 : _payment$paymentMetho2.payment_name) || 'Unknown',
            amount: payment.amount || 0,
            percentage: percentage,
            createdAt: this.formatDateTime(payment.createdAt)
          });
        });
      } else if ((_this$ticketData1 = this.ticketData) !== null && _this$ticketData1 !== void 0 && _this$ticketData1.payment) {
        details.push({
          code: this.ticketData.payment.payment_code,
          name: this.ticketData.payment.payment_name,
          amount: totalAmount,
          percentage: 100,
          createdAt: this.formatDateTime(this.ticketData.createdAt)
        });
      }
      return details;
    },
    getPaymentMethodColor(paymentCode) {
      // Try to find the payment method in store first
      const paymentMethod = this.findAllPayment.find(p => p.payment_code === paymentCode);

      // If found in store, use a color based on payment type
      if (paymentMethod) {
        // Generate color based on payment code for consistency
        const colorMap = {
          'CASH': 'green',
          'QR': 'purple',
          'TRANSFER': 'blue',
          'TRANSFER_BCEL': 'blue',
          'BCEL': 'blue',
          'COD': 'orange',
          'CREDIT': 'red',
          'CARD': 'indigo',
          'BANK': 'teal',
          'MOBILE': 'pink'
        };

        // Check if exact match exists
        if (colorMap[paymentCode]) {
          return colorMap[paymentCode];
        }

        // For other payment codes, generate color based on common keywords
        const code = paymentCode.toUpperCase();
        if (code.includes('CASH') || code.includes('MONEY')) return 'green';
        if (code.includes('QR') || code.includes('SCAN')) return 'purple';
        if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue';
        if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo';
        if (code.includes('COD') || code.includes('DELIVERY')) return 'orange';
        if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink';

        // Default color for unknown payment types
        return 'primary';
      }

      // Fallback for unknown payment codes
      return 'grey';
    },
    getPaymentMethodIcon(paymentCode) {
      // Try to find the payment method in store first
      const paymentMethod = this.findAllPayment.find(p => p.payment_code === paymentCode);
      if (paymentMethod) {
        // Generate icon based on payment code
        const iconMap = {
          'CASH': 'mdi-cash',
          'QR': 'mdi-qrcode',
          'TRANSFER': 'mdi-bank-transfer',
          'TRANSFER_BCEL': 'mdi-bank-transfer',
          'BCEL': 'mdi-bank',
          'COD': 'mdi-truck-delivery',
          'CREDIT': 'mdi-credit-card-outline',
          'CARD': 'mdi-credit-card',
          'BANK': 'mdi-bank',
          'MOBILE': 'mdi-cellphone',
          'WALLET': 'mdi-wallet'
        };

        // Check if exact match exists
        if (iconMap[paymentCode]) {
          return iconMap[paymentCode];
        }

        // For other payment codes, generate icon based on common keywords
        const code = paymentCode.toUpperCase();
        if (code.includes('CASH') || code.includes('MONEY')) return 'mdi-cash';
        if (code.includes('QR') || code.includes('SCAN')) return 'mdi-qrcode';
        if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'mdi-bank-transfer';
        if (code.includes('CARD') || code.includes('CREDIT')) return 'mdi-credit-card';
        if (code.includes('COD') || code.includes('DELIVERY')) return 'mdi-truck-delivery';
        if (code.includes('MOBILE') || code.includes('PHONE')) return 'mdi-cellphone';
        if (code.includes('WALLET')) return 'mdi-wallet';

        // Default icon for unknown payment types
        return 'mdi-cash-multiple';
      }

      // Fallback for unknown payment codes
      return 'mdi-help-circle';
    },
    // Utility Methods
    getClientColor() {
      var _this$ticketData10;
      return (_this$ticketData10 = this.ticketData) !== null && _this$ticketData10 !== void 0 && _this$ticketData10.client ? 'success' : 'grey';
    },
    // NEW: Utility method to find payment method details from store
    getPaymentMethodDetails(paymentCode) {
      if (!paymentCode || !this.findAllPayment) return null;
      return this.findAllPayment.find(p => p.payment_code === paymentCode) || null;
    },
    formatNumber(val) {
      if (val === null || val === undefined) return '0';
      return new Intl.NumberFormat().format(val);
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatDateTime(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    // Print Methods
    printTicket() {
      this.$emit('print-ticket', this.ticketData);
    },
    printPaymentDetails() {
      var _this$ticketData$clie, _this$ticketData$user, _this$ticketData$loca, _this$ticketData$curr2, _this$ticketData$curr3, _this$ticketData$curr4;
      if (!this.ticketData) return;
      const paymentDetails = this.getPaymentDetails();
      let paymentListHtml = '';
      paymentDetails.forEach(payment => {
        var _this$ticketData$curr;
        paymentListHtml += `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${payment.name}</td>
            <td style="text-align: right; padding: 8px; border-bottom: 1px solid #ddd;">${this.formatNumber(payment.amount)} ${((_this$ticketData$curr = this.ticketData.currency) === null || _this$ticketData$curr === void 0 ? void 0 : _this$ticketData$curr.code) || 'LAK'}</td>
            <td style="text-align: center; padding: 8px; border-bottom: 1px solid #ddd;">${payment.percentage.toFixed(1)}%</td>
          </tr>
        `;
      });
      const windowContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>ລາຍລະອຽດການຊຳລະ</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { max-width: 100px; max-height: 100px; object-fit: contain; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; }
            .info-section { margin: 20px 0; }
            .divider { margin: 20px 0; border-top: 2px solid #333; }
            .footer { text-align: center; margin-top: 30px; font-size: 18px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            ${this.companyLogo ? `<img src="${this.companyLogo}" alt="Company Logo" class="logo">` : ''}
            <h2>ລາຍລະອຽດການຊຳລະ</h2>
          </div>
          
          <div class="info-section">
            <h3>ຂໍ້ມູນພື້ນຖານ</h3>
            <p><strong>ເລກບິນ:</strong> ${this.ticketData.id}</p>
            <p><strong>ວັນທີ:</strong> ${this.formatDate(this.ticketData.bookingDate)}</p>
            <p><strong>ລູກຄ້າ:</strong> ${((_this$ticketData$clie = this.ticketData.client) === null || _this$ticketData$clie === void 0 ? void 0 : _this$ticketData$clie.name) || 'Walk-in Customer'}</p>
            <p><strong>ພະນັກງານ:</strong> ${((_this$ticketData$user = this.ticketData.user) === null || _this$ticketData$user === void 0 ? void 0 : _this$ticketData$user.cus_name) || 'N/A'}</p>
            <p><strong>ສາຂາ:</strong> ${((_this$ticketData$loca = this.ticketData.location) === null || _this$ticketData$loca === void 0 ? void 0 : _this$ticketData$loca.name) || 'N/A'}</p>
          </div>

          <div class="divider"></div>

          <div class="info-section">
            <h3>ສະຫຼຸບການເງິນ</h3>
            <p><strong>ຍອດລວມກ່ອນຫລຸດ:</strong> ${this.formatNumber(this.getSubTotal())} ${((_this$ticketData$curr2 = this.ticketData.currency) === null || _this$ticketData$curr2 === void 0 ? void 0 : _this$ticketData$curr2.code) || 'LAK'}</p>
            <p><strong>ສ່ວນຫລຸດ:</strong> ${this.formatNumber(this.ticketData.discount)} ${((_this$ticketData$curr3 = this.ticketData.currency) === null || _this$ticketData$curr3 === void 0 ? void 0 : _this$ticketData$curr3.code) || 'LAK'}</p>
            <p><strong style="font-size: 18px;">ຈຳນວນຊຳລະ:</strong> <strong style="font-size: 18px;">${this.formatNumber(this.ticketData.total)} ${((_this$ticketData$curr4 = this.ticketData.currency) === null || _this$ticketData$curr4 === void 0 ? void 0 : _this$ticketData$curr4.code) || 'LAK'}</strong></p>
          </div>

          <div class="divider"></div>

          <div class="info-section">
            <h3>ວິທີການຊຳລະ</h3>
            <table style="border: 1px solid #ddd;">
              <thead>
                <tr style="background-color: #f2f2f2;">
                  <th style="padding: 12px; border: 1px solid #ddd;">ວິທີການ</th>
                  <th style="text-align: right; padding: 12px; border: 1px solid #ddd;">ຈຳນວນ</th>
                  <th style="text-align: center; padding: 12px; border: 1px solid #ddd;">ເປີເຊັນ</th>
                </tr>
              </thead>
              <tbody>
                ${paymentListHtml}
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>ຂອບໃຈສຳລັບການຊື້ເຮືອ!</p>
            <p>THANK YOU!</p>
          </div>
        </body>
        </html>
      `;
      const printWin = window.open('', '', 'width=800,height=600');
      printWin.document.open();
      printWin.document.write(windowContent);
      printWin.document.close();
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
      this.$emit('print-payment-details', this.ticketData);
    }
  }
});
// CONCATENATED MODULE: ./components/pos/dialogs/TicketDetailsDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var dialogs_TicketDetailsDialogvue_type_script_lang_js = (TicketDetailsDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/pos/dialogs/TicketDetailsDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(586)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_TicketDetailsDialogvue_type_script_lang_js,
  TicketDetailsDialogvue_type_template_id_44db6252_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "44db6252",
  "1eea6148"
  
)

/* harmony default export */ var TicketDetailsDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pos-dialogs-ticket-details-dialog.js.map