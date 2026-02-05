exports.ids = [321,47,56,57,58,134,138,139,177,178,322,345];
exports.modules = {

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/web_product/index.vue?vue&type=template&id=e862bc1c















var web_productvue_type_template_id_e862bc1c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-left"
  }, [_vm._ssrNode("<div>", "</div>", [_c(VChip["a" /* default */], {
    staticClass: "pa-5",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v(" "), _c('h3', [_vm._v("ລາຍການສິນຄ້າ")])], 1), _vm._ssrNode(" "), _c(VChip["a" /* default */], {
    staticClass: "pa-5",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    },
    on: {
      "click": function ($event) {
        _vm.guidelineDialog = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi mdi-lifebuoy")]), _vm._v(" "), _c('h3', [_vm._v("ຄູ່ມືການນຳໃຊ້ ")])], 1)], 2), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "max-width": "700"
    },
    model: {
      value: _vm.guidelineDialog,
      callback: function ($$v) {
        _vm.guidelineDialog = $$v;
      },
      expression: "guidelineDialog"
    }
  }, [_c('youtube-player', {
    attrs: {
      "youtube-link": "5yMsQ6gRSkI"
    },
    on: {
      "close-dialog": function ($event) {
        _vm.guidelineDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px"
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
    }
  }, [_c('dialog-classic-message', {
    attrs: {
      "message": _vm.message
    },
    on: {
      "closedialog": function ($event) {
        _vm.message = null;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px"
    },
    model: {
      value: _vm.editProductForm,
      callback: function ($$v) {
        _vm.editProductForm = $$v;
      },
      expression: "editProductForm"
    }
  }, [_c('CategoryForm', {
    key: _vm.productFormKey,
    attrs: {
      "product": _vm.selectedProduct
    },
    on: {
      "close-dialog": function ($event) {
        _vm.editProductForm = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px"
    },
    model: {
      value: _vm.productFormCreate,
      callback: function ($$v) {
        _vm.productFormCreate = $$v;
      },
      expression: "productFormCreate"
    }
  }, [_c('product-form-create', {
    on: {
      "close-dialog": function ($event) {
        _vm.productFormCreate = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "6",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "append-icon": "mdi-magnify",
      "label": "ຊອກຫາ",
      "single-line": "",
      "hide-detailsx": ""
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.rebuildStock
    }
  }, [_c('span', {
    staticClass: "mdi mdi-update"
  }), _vm._v("\n            Rebuild stock\n          ")])], 1)], 1)], 1), _vm._v(" "), _vm.loaddata ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.loaddata,
      "items-per-page": _vm.pageLine
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function () {
        return [_c(VToolbar["a" /* default */], {
          attrs: {
            "flat": ""
          }
        }, [_c(components_VToolbar["b" /* VToolbarTitle */], [_vm._v("ສິນຄ້າທັງຫມົດ: " + _vm._s(_vm.loaddata.length))]), _vm._v(" "), _c(VDivider["a" /* default */], {
          staticClass: "mx-4",
          attrs: {
            "inset": "",
            "vertical": ""
          }
        }), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
          staticClass: "primary",
          attrs: {
            "size": "large",
            "variant": "outlined",
            "rounded": ""
          },
          on: {
            "click": function ($event) {
              _vm.productFormCreate = true;
            }
          }
        }, [_c('span', {
          staticClass: "mdi mdi-note-plus-outline"
        }), _vm._v("\n            ສ້າງສິນຄ້າໃຫມ່\n          ")])], 1)];
      },
      proxy: true
    }, {
      key: `item.functionEdit`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "primary",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.editItem(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fa-regular fa-pen-to-square"
        })])];
      }
    }, {
      key: `item.webProductGroups`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(item.webProductGroups.length > 0 ? item.webProductGroups[0]['name'] : '') + "\n      ")];
      }
    }, {
      key: `item.cost_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.cost_price)) + "\n      ")];
      }
    }, {
      key: `item.pro_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_price)) + "\n      ")];
      }
    }, {
      key: `item.pro_card_count`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(item.pro_card_count) + "\n      ")];
      }
    }], null, true)
  }) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/web_product/index.vue?vue&type=template&id=e862bc1c

// EXTERNAL MODULE: ./components/product/ProductForm.vue + 3 modules
var ProductForm = __webpack_require__(520);

// EXTERNAL MODULE: ./components/PriceListForm.vue + 4 modules
var PriceListForm = __webpack_require__(501);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(163);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./components/WebProductCategoryForm.vue + 4 modules
var WebProductCategoryForm = __webpack_require__(765);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/web_product/index.vue?vue&type=script&lang=js






/* harmony default export */ var web_productvue_type_script_lang_js = ({
  components: {
    ProductForm: ProductForm["default"],
    CategoryForm: WebProductCategoryForm["default"],
    PriceListForm: PriceListForm["default"]
  },
  middleware: 'auths',
  data() {
    return {
      priceListDialog: false,
      priceListFormKey: 1,
      guidelineDialog: false,
      pricingRecordId: null,
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedId: 0,
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProduct: null,
      stockFormKey: 1,
      timer: null,
      headers: [{
        text: 'RECID',
        align: 'center',
        value: 'id'
      }, {
        text: 'Company',
        align: 'center',
        value: 'company.mnemonic'
      }, {
        text: 'CODE',
        align: 'center',
        value: 'pro_id'
      }, {
        text: 'ຊື່ສິນຄ້າ',
        align: 'center',
        value: 'pro_name'
      },
      // { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
      {
        text: 'ຫມວດສິນຄ້າ',
        align: 'center',
        value: 'category.categ_name'
      }, {
        text: 'ຫມວດສິນຄ້າ ໜ້າເວັບ',
        align: 'center',
        value: 'webProductGroups'
      }, {
        text: 'ລາຄາ',
        align: 'center',
        value: 'pro_price'
      },
      // { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
      // { text: 'minStock', align: 'center', value: 'minStock' },
      // { text: 'Stock', align: 'center', value: 'pro_card_count' },
      // { text: 'Status', align: 'center', value: 'status' },
      {
        text: 'cost',
        align: 'center',
        value: 'cost_price'
      },
      // {
      //   text: 'ເພີ່ມສະຕັອກ',
      //   align: 'center',
      //   value: 'functionStock',
      //   sortable: false,
      // },
      // {
      //   text: 'ເບິ່ງສະຕັອກ',
      //   align: 'center',
      //   value: 'functionStockView',
      //   sortable: false,
      // },
      // {
      //   text: 'ຈັດການລາຄາ',
      //   align: 'center',
      //   value: 'pricing',
      //   sortable: false,
      // },
      {
        text: 'ແກ້ໄຂ',
        align: 'center',
        value: 'functionEdit',
        sortable: false
      }]
    };
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true;
        return;
      }
      this.dialogMessage = false;
    }
  },
  async mounted() {
    await this.loadCardCategory();
    await this.fetchData();
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['currentSelectedLocation', 'findAllLocation'])
  },
  methods: {
    async importStock() {
      const stockImportList = [{
        'inputter': 1000,
        'product_id': 1001,
        'stockCardQty': 4,
        'totalCost': 320000,
        'productId': 1,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1002,
        'stockCardQty': 1,
        'totalCost': 230000,
        'productId': 2,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1003,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 3,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1004,
        'stockCardQty': 1,
        'totalCost': 457000,
        'productId': 4,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1005,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 5,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1006,
        'stockCardQty': 2,
        'totalCost': 358000,
        'productId': 6,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1007,
        'stockCardQty': 2,
        'totalCost': 348000,
        'productId': 7,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1008,
        'stockCardQty': 2,
        'totalCost': 400000,
        'productId': 8,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1009,
        'stockCardQty': 2,
        'totalCost': 380000,
        'productId': 9,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1010,
        'stockCardQty': 2,
        'totalCost': 577000,
        'productId': 10,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1011,
        'stockCardQty': 2,
        'totalCost': 636000,
        'productId': 11,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1012,
        'stockCardQty': 2,
        'totalCost': 636000,
        'productId': 12,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1013,
        'stockCardQty': 6,
        'totalCost': 307000,
        'productId': 13,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1014,
        'stockCardQty': 6,
        'totalCost': 307000,
        'productId': 14,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1015,
        'stockCardQty': 9,
        'totalCost': 307000,
        'productId': 15,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1016,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 16,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1017,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 17,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1018,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 18,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1019,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 19,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1020,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 20,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1021,
        'stockCardQty': 2,
        'totalCost': 250000,
        'productId': 21,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1022,
        'stockCardQty': 4,
        'totalCost': 655000,
        'productId': 22,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1023,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 23,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1024,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 24,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1025,
        'stockCardQty': 3,
        'totalCost': 0,
        'productId': 25,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1026,
        'stockCardQty': 9,
        'totalCost': 0,
        'productId': 26,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1027,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 27,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1028,
        'stockCardQty': 2,
        'totalCost': 240000,
        'productId': 28,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1029,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 29,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1030,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 30,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1031,
        'stockCardQty': 1,
        'totalCost': 520000,
        'productId': 31,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1032,
        'stockCardQty': 4,
        'totalCost': 355000,
        'productId': 32,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1033,
        'stockCardQty': 1,
        'totalCost': 587000,
        'productId': 33,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1034,
        'stockCardQty': 18,
        'totalCost': 0,
        'productId': 34,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1035,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 35,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1036,
        'stockCardQty': 2,
        'totalCost': 447000,
        'productId': 36,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1037,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 37,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1038,
        'stockCardQty': 2,
        'totalCost': 385000,
        'productId': 38,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1039,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 39,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1040,
        'stockCardQty': 36,
        'totalCost': 0,
        'productId': 40,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1041,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 41,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1042,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 42,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1043,
        'stockCardQty': 6,
        'totalCost': 254000,
        'productId': 43,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1044,
        'stockCardQty': 24,
        'totalCost': 0,
        'productId': 44,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1045,
        'stockCardQty': 36,
        'totalCost': 283000,
        'productId': 45,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1046,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 46,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1047,
        'stockCardQty': 1,
        'totalCost': 925000,
        'productId': 47,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1048,
        'stockCardQty': 1,
        'totalCost': 925000,
        'productId': 48,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1049,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 49,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1050,
        'stockCardQty': 2,
        'totalCost': 450000,
        'productId': 50,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1051,
        'stockCardQty': 1,
        'totalCost': 475000,
        'productId': 51,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1052,
        'stockCardQty': 1,
        'totalCost': 400000,
        'productId': 52,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1053,
        'stockCardQty': 1,
        'totalCost': 400000,
        'productId': 53,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1054,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 54,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1055,
        'stockCardQty': 2,
        'totalCost': 705000,
        'productId': 55,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1056,
        'stockCardQty': 10,
        'totalCost': 0,
        'productId': 56,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1057,
        'stockCardQty': 1,
        'totalCost': 741000,
        'productId': 57,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1058,
        'stockCardQty': 1,
        'totalCost': 705000,
        'productId': 58,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1059,
        'stockCardQty': 1,
        'totalCost': 708000,
        'productId': 59,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1060,
        'stockCardQty': 4,
        'totalCost': 567000,
        'productId': 60,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1061,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 61,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1062,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 62,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1063,
        'stockCardQty': 2,
        'totalCost': 735000,
        'productId': 63,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1064,
        'stockCardQty': 1,
        'totalCost': 512000,
        'productId': 64,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1065,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 65,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1066,
        'stockCardQty': 1,
        'totalCost': 320000,
        'productId': 66,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1067,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 67,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1068,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 68,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1069,
        'stockCardQty': 2,
        'totalCost': 795000,
        'productId': 69,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1070,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 70,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1071,
        'stockCardQty': 10,
        'totalCost': 0,
        'productId': 71,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1072,
        'stockCardQty': 1,
        'totalCost': 225000,
        'productId': 72,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1073,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 73,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1074,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 74,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1075,
        'stockCardQty': 4,
        'totalCost': 300000,
        'productId': 75,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1076,
        'stockCardQty': 2,
        'totalCost': 362000,
        'productId': 76,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1077,
        'stockCardQty': 1,
        'totalCost': 358000,
        'productId': 77,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1078,
        'stockCardQty': 1,
        'totalCost': 358000,
        'productId': 78,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1079,
        'stockCardQty': 6,
        'totalCost': 414000,
        'productId': 79,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1080,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 80,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1081,
        'stockCardQty': 8,
        'totalCost': 0,
        'productId': 81,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1082,
        'stockCardQty': 20,
        'totalCost': 0,
        'productId': 82,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1083,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 83,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1084,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 84,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1085,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 85,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1086,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 86,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1087,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 87,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1088,
        'stockCardQty': 2,
        'totalCost': 342000,
        'productId': 88,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1089,
        'stockCardQty': 2,
        'totalCost': 400000,
        'productId': 89,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1090,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 90,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1091,
        'stockCardQty': 1,
        'totalCost': 335000,
        'productId': 91,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1092,
        'stockCardQty': 4,
        'totalCost': 328000,
        'productId': 92,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1093,
        'stockCardQty': 0,
        'totalCost': 285000,
        'productId': 93,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1094,
        'stockCardQty': 2,
        'totalCost': 580000,
        'productId': 94,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1095,
        'stockCardQty': 6,
        'totalCost': 263000,
        'productId': 95,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1096,
        'stockCardQty': 18,
        'totalCost': 330000,
        'productId': 96,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1097,
        'stockCardQty': 4,
        'totalCost': 320000,
        'productId': 97,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1098,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 98,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1099,
        'stockCardQty': 60,
        'totalCost': 0,
        'productId': 99,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1100,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 100,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1101,
        'stockCardQty': 20,
        'totalCost': 0,
        'productId': 101,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1102,
        'stockCardQty': 6,
        'totalCost': 290000,
        'productId': 102,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1103,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 103,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1104,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 104,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1105,
        'stockCardQty': 2,
        'totalCost': 307000,
        'productId': 105,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1106,
        'stockCardQty': 2,
        'totalCost': 533000,
        'productId': 106,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1107,
        'stockCardQty': 4,
        'totalCost': 360000,
        'productId': 107,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1108,
        'stockCardQty': 6,
        'totalCost': 240000,
        'productId': 108,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1109,
        'stockCardQty': 4,
        'totalCost': 240000,
        'productId': 109,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1110,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 110,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1111,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 111,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1112,
        'stockCardQty': 2,
        'totalCost': 725000,
        'productId': 112,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1113,
        'stockCardQty': 10,
        'totalCost': 370000,
        'productId': 113,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1114,
        'stockCardQty': 36,
        'totalCost': 125000,
        'productId': 114,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1115,
        'stockCardQty': 36,
        'totalCost': 0,
        'productId': 115,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1116,
        'stockCardQty': 4,
        'totalCost': 537000,
        'productId': 116,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1117,
        'stockCardQty': 2,
        'totalCost': 480000,
        'productId': 117,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1118,
        'stockCardQty': 4,
        'totalCost': 219000,
        'productId': 118,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1119,
        'stockCardQty': 2,
        'totalCost': 239000,
        'productId': 119,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1120,
        'stockCardQty': 1,
        'totalCost': 1231000,
        'productId': 120,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1121,
        'stockCardQty': 1,
        'totalCost': 934000,
        'productId': 121,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1122,
        'stockCardQty': 1,
        'totalCost': 900000,
        'productId': 122,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1123,
        'stockCardQty': 1,
        'totalCost': 600000,
        'productId': 123,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1124,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 124,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1125,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 125,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1126,
        'stockCardQty': 1,
        'totalCost': 785000,
        'productId': 126,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1127,
        'stockCardQty': 1,
        'totalCost': 985000,
        'productId': 127,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1128,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 128,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1129,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 129,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1130,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 130,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1131,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 131,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1132,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 132,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1133,
        'stockCardQty': 1,
        'totalCost': 507000,
        'productId': 133,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1134,
        'stockCardQty': 1,
        'totalCost': 616000,
        'productId': 134,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1135,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 135,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1136,
        'stockCardQty': 1,
        'totalCost': 400000,
        'productId': 136,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1137,
        'stockCardQty': 2,
        'totalCost': 374000,
        'productId': 137,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1138,
        'stockCardQty': 2,
        'totalCost': 374000,
        'productId': 138,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1139,
        'stockCardQty': 2,
        'totalCost': 374000,
        'productId': 139,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1140,
        'stockCardQty': 2,
        'totalCost': 384000,
        'productId': 140,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1141,
        'stockCardQty': 2,
        'totalCost': 420000,
        'productId': 141,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1142,
        'stockCardQty': 2,
        'totalCost': 390000,
        'productId': 142,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1143,
        'stockCardQty': 2,
        'totalCost': 383000,
        'productId': 143,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1144,
        'stockCardQty': 2,
        'totalCost': 440000,
        'productId': 144,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1145,
        'stockCardQty': 2,
        'totalCost': 715000,
        'productId': 145,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1146,
        'stockCardQty': 2,
        'totalCost': 527000,
        'productId': 146,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1147,
        'stockCardQty': 2,
        'totalCost': 710000,
        'productId': 147,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1148,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 148,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1149,
        'stockCardQty': 2,
        'totalCost': 378000,
        'productId': 149,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1150,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 150,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1151,
        'stockCardQty': 2,
        'totalCost': 307000,
        'productId': 151,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1152,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 152,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1153,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 153,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1154,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 154,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1155,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 155,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1156,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 156,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1157,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 157,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1158,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 158,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1159,
        'stockCardQty': 2,
        'totalCost': 396000,
        'productId': 159,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1160,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 160,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1161,
        'stockCardQty': 20,
        'totalCost': 0,
        'productId': 161,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1162,
        'stockCardQty': 12,
        'totalCost': 0,
        'productId': 162,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1163,
        'stockCardQty': 48,
        'totalCost': 0,
        'productId': 163,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1164,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 164,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1165,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 165,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1166,
        'stockCardQty': 18,
        'totalCost': 0,
        'productId': 166,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1167,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 167,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1168,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 168,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1169,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 169,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1170,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 170,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1171,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 171,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1172,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 172,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1173,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 173,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1174,
        'stockCardQty': 24,
        'totalCost': 0,
        'productId': 174,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1175,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 175,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1176,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 176,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1177,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 177,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1178,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 178,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1179,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 179,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1180,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 180,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1181,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 181,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1182,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 182,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1183,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 183,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1184,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 184,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1185,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 185,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1186,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 186,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1187,
        'stockCardQty': 4,
        'totalCost': 0,
        'productId': 187,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1188,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 188,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1189,
        'stockCardQty': 2,
        'totalCost': 525000,
        'productId': 189,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1190,
        'stockCardQty': 2,
        'totalCost': 959000,
        'productId': 190,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1191,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 191,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1192,
        'stockCardQty': 2,
        'totalCost': 238500,
        'productId': 192,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1193,
        'stockCardQty': 4,
        'totalCost': 250000,
        'productId': 193,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1194,
        'stockCardQty': 6,
        'totalCost': 0,
        'productId': 194,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1195,
        'stockCardQty': 2,
        'totalCost': 0,
        'productId': 195,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1196,
        'stockCardQty': 1,
        'totalCost': 636000,
        'productId': 196,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1197,
        'stockCardQty': 1,
        'totalCost': 636000,
        'productId': 197,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1198,
        'stockCardQty': 1,
        'totalCost': 700000,
        'productId': 198,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1199,
        'stockCardQty': 1,
        'totalCost': 800000,
        'productId': 199,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1200,
        'stockCardQty': 1,
        'totalCost': 775000,
        'productId': 200,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1201,
        'stockCardQty': 1,
        'totalCost': 850000,
        'productId': 201,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1202,
        'stockCardQty': 1,
        'totalCost': 795000,
        'productId': 202,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1203,
        'stockCardQty': 1,
        'totalCost': 1300000,
        'productId': 203,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1204,
        'stockCardQty': 6,
        'totalCost': 1700000,
        'productId': 204,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1205,
        'stockCardQty': 1,
        'totalCost': 1150000,
        'productId': 205,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1206,
        'stockCardQty': 2,
        'totalCost': 1100000,
        'productId': 206,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1207,
        'stockCardQty': 2,
        'totalCost': 1092500,
        'productId': 207,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1208,
        'stockCardQty': 2,
        'totalCost': 2345000,
        'productId': 208,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1209,
        'stockCardQty': 1,
        'totalCost': 845000,
        'productId': 209,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1210,
        'stockCardQty': 1,
        'totalCost': 993000,
        'productId': 210,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1211,
        'stockCardQty': 1,
        'totalCost': 1033000,
        'productId': 211,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1212,
        'stockCardQty': 1,
        'totalCost': 954000,
        'productId': 212,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1213,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 213,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1214,
        'stockCardQty': 1,
        'totalCost': 965000,
        'productId': 214,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1215,
        'stockCardQty': 1,
        'totalCost': 834000,
        'productId': 215,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1216,
        'stockCardQty': 1,
        'totalCost': 1172300,
        'productId': 216,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1217,
        'stockCardQty': 1,
        'totalCost': 577000,
        'productId': 217,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1218,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 218,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1219,
        'stockCardQty': 1,
        'totalCost': 616000,
        'productId': 219,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1220,
        'stockCardQty': 1,
        'totalCost': 487500,
        'productId': 220,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1221,
        'stockCardQty': 1,
        'totalCost': 948000,
        'productId': 221,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1222,
        'stockCardQty': 0,
        'totalCost': 620500,
        'productId': 222,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1223,
        'stockCardQty': 4,
        'totalCost': 600000,
        'productId': 223,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1224,
        'stockCardQty': 10,
        'totalCost': 616000,
        'productId': 224,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1225,
        'stockCardQty': 36,
        'totalCost': 530000,
        'productId': 225,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1226,
        'stockCardQty': 1,
        'totalCost': 420000,
        'productId': 226,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1227,
        'stockCardQty': 1,
        'totalCost': 557000,
        'productId': 227,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1228,
        'stockCardQty': 1,
        'totalCost': 497000,
        'productId': 228,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1229,
        'stockCardQty': 1,
        'totalCost': 378100,
        'productId': 229,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1230,
        'stockCardQty': 8,
        'totalCost': 270000,
        'productId': 230,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1231,
        'stockCardQty': 8,
        'totalCost': 338200,
        'productId': 231,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1232,
        'stockCardQty': 4,
        'totalCost': 497000,
        'productId': 232,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1233,
        'stockCardQty': 2,
        'totalCost': 290000,
        'productId': 233,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1234,
        'stockCardQty': 2,
        'totalCost': 457000,
        'productId': 234,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1235,
        'stockCardQty': 2,
        'totalCost': 457000,
        'productId': 235,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1236,
        'stockCardQty': 2,
        'totalCost': 440000,
        'productId': 236,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1237,
        'stockCardQty': 2,
        'totalCost': 330000,
        'productId': 237,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1238,
        'stockCardQty': 2,
        'totalCost': 513000,
        'productId': 238,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1239,
        'stockCardQty': 1,
        'totalCost': 446000,
        'productId': 239,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1240,
        'stockCardQty': 1,
        'totalCost': 417000,
        'productId': 240,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1241,
        'stockCardQty': 2,
        'totalCost': 397000,
        'productId': 241,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1242,
        'stockCardQty': 12,
        'totalCost': 490000,
        'productId': 242,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1243,
        'stockCardQty': 1,
        'totalCost': 642000,
        'productId': 243,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1244,
        'stockCardQty': 1,
        'totalCost': 0,
        'productId': 244,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1245,
        'stockCardQty': 1,
        'totalCost': 450000,
        'productId': 245,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1246,
        'stockCardQty': 1,
        'totalCost': 650000,
        'productId': 246,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1247,
        'stockCardQty': 2,
        'totalCost': 315000,
        'productId': 247,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1248,
        'stockCardQty': 6,
        'totalCost': 200000,
        'productId': 248,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1249,
        'stockCardQty': 12,
        'totalCost': 185000,
        'productId': 249,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1250,
        'stockCardQty': 12,
        'totalCost': 185000,
        'productId': 250,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1251,
        'stockCardQty': 8,
        'totalCost': 540000,
        'productId': 251,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1252,
        'stockCardQty': 4,
        'totalCost': 540000,
        'productId': 252,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1253,
        'stockCardQty': 8,
        'totalCost': 500000,
        'productId': 253,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1254,
        'stockCardQty': 2,
        'totalCost': 500000,
        'productId': 254,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1255,
        'stockCardQty': 6,
        'totalCost': 420000,
        'productId': 255,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1256,
        'stockCardQty': 1,
        'totalCost': 540000,
        'productId': 256,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1257,
        'stockCardQty': 1,
        'totalCost': 610000,
        'productId': 257,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1258,
        'stockCardQty': 8,
        'totalCost': 470000,
        'productId': 258,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1259,
        'stockCardQty': 8,
        'totalCost': 410000,
        'productId': 259,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1260,
        'stockCardQty': 4,
        'totalCost': 325000,
        'productId': 260,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1261,
        'stockCardQty': 2,
        'totalCost': 360000,
        'productId': 261,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1262,
        'stockCardQty': 2,
        'totalCost': 340000,
        'productId': 262,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1263,
        'stockCardQty': 2,
        'totalCost': 220000,
        'productId': 263,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1264,
        'stockCardQty': 6,
        'totalCost': 210000,
        'productId': 264,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1265,
        'stockCardQty': 6,
        'totalCost': 130000,
        'productId': 265,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1266,
        'stockCardQty': 6,
        'totalCost': 130000,
        'productId': 266,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1267,
        'stockCardQty': 6,
        'totalCost': 130000,
        'productId': 267,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1268,
        'stockCardQty': 6,
        'totalCost': 130000,
        'productId': 268,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1269,
        'stockCardQty': 6,
        'totalCost': 140000,
        'productId': 269,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1270,
        'stockCardQty': 6,
        'totalCost': 140000,
        'productId': 270,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1271,
        'stockCardQty': 6,
        'totalCost': 140000,
        'productId': 271,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1272,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 272,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1273,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 273,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1274,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 274,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1275,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 275,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1276,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 276,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1277,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 277,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1278,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 278,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1279,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 279,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1280,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 280,
        'srcLocation': 1
      }, {
        'inputter': 1000,
        'product_id': 1281,
        'stockCardQty': 0,
        'totalCost': 0,
        'productId': 281,
        'srcLocation': 1
      }];
      this.isloading = true;
      for (const iterator of stockImportList) {
        let isError = false;
        await this.$axios.post('/api/card/bulkCreate', iterator).then(res => {
          console.log(res.data);
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(error => {
          console.log(error);
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
          isError = true;
          this.isloading = false;
        });
        if (isError) break;
        this.isloading = false;
      }
    },
    triggerPriceListForm(item) {
      this.pricingRecordId = item.id;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    verifyStockStatus(minStock, CurStock) {
      let statusStock = '';
      CurStock == 0 ? statusStock = 'Out of stock' : minStock < CurStock ? statusStock = 'In stock' : statusStock = 'Low stock';
      return statusStock;
    },
    async fetchData() {
      console.log(`PRODUCT LIST ===>`);
      this.isloading = true;
      // https://nodejsclusters-124154-0.cloudclusters.net/product_f
      await this.$axios.get(`/api/product/find`).then(res => {
        this.loaddata = res.data;
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
      this.isloading = false;
    },
    editItem(item) {
      this.productFormKey += 1;
      this.selectedProduct = item;
      this.editProductForm = true;
      // const obj=JSON.stringify(idx)
      // this.$router.push(`/admin/product/${idx.pro_id}`)
    },
    editStock(idx) {
      console.log('ID ' + idx.pro_id);
      console.log('NAME ' + idx.pro_name);
      console.log('OBJ ' + Object.keys(idx));
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.pro_id}`);
    },
    attachFile(payload) {
      this.carddata.length = 0;
      const file = payload; // in case vuetify file input
      // this.files = payload
      const reader = new FileReader();
      if (file) {
        console.log('FILE LEN: ' + file);
        reader.onload = res => {
          this.content = res.target.result;
          console.log('Data content => : ' + this.content);
          const arr = this.content.replace(/\r\n/g, '\n').split('\n'); // filter text line by line
          const tempCardData = arr.filter(el => el !== '' && el.length >= 10); // filter only useable value and trim out null line
          let i = 0;
          tempCardData.forEach(element => {
            // loop and push to real datacart
            i++;
            console.log(`Data loop ${i} ${element}`);
            this.carddata.push(element.replace('	', '|').replace('	', '|').split("'").pop()); // filter only valid number after ' and push to cartdata
            console.log(element.split("'").pop());
          });
          console.log('CARD DATA: ' + this.carddata);
        };
        reader.onerror = err => console.log(err);
        reader.readAsText(file);
        // URL.revokeObjectURL(file) // free memory
      }
      // var file = FileReader.FileReader()
    },
    loadCardCategory() {
      this.isloading = true;
      this.$axios.get('stockcate_f').then(res => {
        this.cardType = res.data.map(el => {
          return {
            card_type_code: el.card_type_code,
            card_type_name: el.card_type_name
          };
        });
        this.selectedCardType = this.cardType[0].card_type_code;
        console.log('CARD LEN: ' + this.cardType.length);
        console.log('CARD LEN: ' + this.cardType[0].card_type_code);
        this.isloading = false;
      }).catch(er => {
        console.log('Error: ' + er);
        this.isloading = false;
      });
    },
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true;
        await this.$axios.put("/api/product/stockcount").then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.fetchData();
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
        this.isloading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/web_product/index.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_web_productvue_type_script_lang_js = (web_productvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/web_product/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_web_productvue_type_script_lang_js,
  web_productvue_type_template_id_e862bc1c_render,
  staticRenderFns,
  false,
  null,
  null,
  "ea49cf54"
  
)

/* harmony default export */ var web_product = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {YoutubePlayer: __webpack_require__(480).default,LoadingIndicator: __webpack_require__(70).default,DialogClassicMessage: __webpack_require__(483).default,CategoryForm: __webpack_require__(602).default,ProductFormCreate: __webpack_require__(519).default,PriceListForm: __webpack_require__(501).default})


/***/ }),

/***/ 1607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(481);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/web_product/_id/index.vue?vue&type=template&id=c520b150



















var _idvue_type_template_id_c520b150_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<h1>ແກ້ໄຂສິນຄ້າ</h1> "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px",
      "persistent": ""
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
    }
  }, [_c('dialog-classic-message', {
    attrs: {
      "message": _vm.message
    },
    on: {
      "closedialog": function ($event) {
        _vm.message = null;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "width": "500",
      "persistent": ""
    },
    model: {
      value: _vm.dia_confirm,
      callback: function ($$v) {
        _vm.dia_confirm = $$v;
      },
      expression: "dia_confirm"
    }
  }, [_c('dia-confirm', {
    attrs: {
      "message-title": _vm.diaMessageTitle,
      "message-body": _vm.diaMessageBody
    },
    on: {
      "react": _vm.reactDiaConfirm
    }
  })], 1), _vm._ssrNode(" "), _c(VForm["a" /* default */], {
    ref: "formLocal",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.validLocal,
      callback: function ($$v) {
        _vm.validLocal = $$v;
      },
      expression: "validLocal"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.outlet,
      "item-value": item => item.outlet_id,
      "item-text": item => item.outlet_id + ' - ' + item.outlet_name,
      "rules": [v => !!v || 'ກະລຸນາເລືອກຮ້ານ'],
      "label": "ຮ້ານ",
      "required": ""
    },
    model: {
      value: _vm.formData.outlet,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "outlet", $$v);
      },
      expression: "formData.outlet"
    }
  }), _vm._v(" "), _c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.category,
      "item-value": item => item.categ_id,
      "item-text": item => item.categ_id + ' - ' + item.categ_name,
      "rules": [v => !!v || 'ກະລຸນາເລືອກ ປະເພດສິນຄ້າ'],
      "label": "ປະເພດສິນຄ້າ",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "disabled": !!_vm.formData.pro_id,
      "label": "ໄອດີສິນຄ້າ",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_id,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_id", $$v);
      },
      expression: "formData.pro_id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາ",
      "type": "number",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "type": "numbser",
      "rules": _vm.rules.priceRule,
      "label": "ຕົ້ນທຶນ",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "counter": 10,
      "type": "numbser",
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາສົ່ງ %",
      "required": ""
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  }), _vm._v(" "), _c(VTextarea["a" /* default */], {
    attrs: {
      "outlined": "",
      "name": "input-7-4",
      "counter": "5",
      "label": "ຄຳອະທິບາຍ",
      "value": "abc"
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  }), _vm._v(" "), _c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "rules": _vm.rules.imageRule,
      "multiple": "",
      "accept": "image/png, image/jpeg, image/bmp",
      "placeholder": "Pick an avatar",
      "prepend-icon": "mdi-camera",
      "label": "ຮູບພາບຫລາຍພາບ"
    },
    on: {
      "change": _vm.onFilesChange
    }
  }), _vm._v(" "), _c('div', _vm._l(_vm.formData.pro_image, function (img, idx) {
    return _c(VCard["a" /* default */], {
      key: idx,
      staticClass: "pa-md-6 mx-lg-auto"
    }, [_c(VRow["a" /* default */], {
      attrs: {
        "justify": "space-around"
      }
    }, [_c(VListItemAvatar["a" /* default */], {
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.previewImg(`https://nodejsclusters-99563-0.cloudclusters.net/${img.name}`);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": `https://nodejsclusters-99563-0.cloudclusters.net/${img.name}`
      }
    })], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "text": "",
        "color": "blue darken-1"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.deleteFileFrServ(idx);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt"
    })])], 1)], 1);
  }), 1), _vm._v(" "), _c('div', [_c(VList["a" /* default */], {
    attrs: {
      "three-line": ""
    }
  }, [_vm._l(_vm.imagesPreviewURL, function (item, index) {
    return [_c(VListItem["a" /* default */], {
      key: index
    }, [_c(VListItemAvatar["a" /* default */], {
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.previewImg(item.IMG_URL);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.IMG_URL
      }
    })], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
      domProps: {
        "innerHTML": _vm._s(item.NAME)
      }
    }), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], {
      domProps: {
        "innerHTML": _vm._s(item.isvalid)
      }
    })], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "text": "",
        "color": "blue darken-1"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.deleteFile(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt"
    })])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
      key: index + item.NAME
    })];
  })], 2)], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-4",
    attrs: {
      "color": "error"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.hello.apply(null, arguments);
      }
    }
  }, [_vm._v("\n      ລ້າງຂໍ້ມູນ\n    ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "color": "primary",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.uploadFilesLocal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n      ບັນທຶກ\n    ")])], 1), _vm._ssrNode(" "), _c('nuxt-child')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/web_product/_id/index.vue?vue&type=template&id=c520b150

// EXTERNAL MODULE: ./pages/admin/web_product/index.vue + 4 modules
var web_product = __webpack_require__(1068);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/web_product/_id/index.vue?vue&type=script&lang=js
// import ImagePreviewMixin from '../mixins/ImagePreviewMixin.vue'

/* harmony default export */ var _idvue_type_script_lang_js = ({
  middleware: 'auths',
  mixins: [web_product["default"]],
  mounted() {
    console.log('FORMDATA ID: ' + this.formData.pro_id);
    this.pro_id = this.$route.params.id;
    this.formData.pro_id = this.$route.params.id;
    console.log('Mounted: ');
    this.$route.params.id && this.fetchProId(this.$route.params.id);
  },
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id);
    console.log('PRO DEFUALT ID: ' + this.pro_id);
    return /^\d+$/.test(data.params.id);
  },
  data() {
    return {
      validLocal: true,
      diaMessageTitle: 'ຄຳເຕືອນ',
      diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
      pro_id: null,
      dia_confirm: false,
      tempImgId: null
    };
  },
  methods: {
    validateLocal() {
      console.log('VALIDATING...');
      this.$refs.formLocal.validate();
    },
    updateData() {
      this.isloading = true;
      this.$axios.put('/uploadmulti_update', this.formData).then(res => {
        this.message = res.data;
      }).catch(er => {
        this.message = er;
      });
      this.isloading = false;
    },
    async fetchProId(id) {
      this.isloading = true;
      console.log('FECT ID:' + id);
      await this.$axios.post('/product_f_id', {
        proid: id
      }).then(res => {
        console.log('Product ID ' + res.data);
        const el = res.data[0];
        const image = res.data[0].img_name == null ? [] : res.data.map(el => {
          return {
            name: el.img_name,
            path: el.img_path
          };
        });
        this.formData = {
          pro_category: el.pro_category,
          pro_id: el.pro_id,
          pro_name: el.pro_name,
          pro_price: el.pro_price,
          pro_desc: el.pro_desc,
          pro_status: el.pro_status === 1 || false,
          pro_retail_price: el.retail_cost_percent,
          pro_cost_price: el.cost_price,
          outlet: el.outlet,
          pro_image: image
        };
        console.log('IMAGE COUNT: ' + this.formData.pro_image.length);
      }).catch(er => {
        console.log('Error: ' + er);
        this.message = er;
      });
      this.isloading = false;
    },
    deleteFileFrServ(idx) {
      console.log('IDX: ' + idx);
      this.tempImgId = idx;
      this.dia_confirm = true;
    },
    async reactDiaConfirm(v) {
      //   v && this.deleteFileFrServ'
      this.dia_confirm = false;
      this.isloading = true;
      v && (await this.$axios.post('/unlink_file', {
        img_name: this.formData.pro_image[this.tempImgId].name
      }).then(res => {
        res.data === 'Transaction completed' && this.formData.pro_image.splice(this.tempImgId, 1);
        this.message = res.data;
      }).catch(er => {
        this.message = er.error;
      }));
      this.isloading = false;
    },
    hello() {
      if (!this.$refs.formLocal.validate()) {
        console.log('VALIDATE...' + false);
      } else {
        console.log('VALIDATE...' + true);
      }

      // console.log('VALIDATE...')
    },
    async uploadFilesLocal() {
      if (!this.$refs.formLocal.validate()) {
        return;
      }
      console.log('Files length: ' + this.files.length);
      this.isloading = true;
      const formData = new FormData();
      formData.append('FORM', JSON.stringify(this.formData));
      this.files.forEach(element => {
        formData.append('files', element);
      });
      await this.$axios.post('uploadmulti_update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.isloading = false;
        this.message = res.data;
      }).catch(er => {
        this.isloading = false;
        this.message = er.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/web_product/_id/index.vue?vue&type=script&lang=js
 /* harmony default export */ var web_product_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/web_product/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  web_product_idvue_type_script_lang_js,
  _idvue_type_template_id_c520b150_render,
  staticRenderFns,
  false,
  null,
  null,
  "73241841"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(483).default,LoadingIndicator: __webpack_require__(70).default,DiaImage: __webpack_require__(509).default,DiaConfirm: __webpack_require__(661).default})


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(461);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(476);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/YoutubePlayer.vue?vue&type=template&id=ba62a84e






var YoutubePlayervue_type_template_id_ba62a84e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center"
  }, [_c('youtube', {
    attrs: {
      "video-id": _vm.youtubeLink
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "warning",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                Close\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/YoutubePlayer.vue?vue&type=template&id=ba62a84e

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/YoutubePlayer.vue?vue&type=script&lang=js

/* harmony default export */ var YoutubePlayervue_type_script_lang_js = ({
  props: {
    youtubeLink: {
      type: String,
      require: true
    }
  }
});
// CONCATENATED MODULE: ./components/YoutubePlayer.vue?vue&type=script&lang=js
 /* harmony default export */ var components_YoutubePlayervue_type_script_lang_js = (YoutubePlayervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/YoutubePlayer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_YoutubePlayervue_type_script_lang_js,
  YoutubePlayervue_type_template_id_ba62a84e_render,
  staticRenderFns,
  false,
  null,
  null,
  "9fefcabe"
  
)

/* harmony default export */ var YoutubePlayer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }
  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _a;
        val ? this.calculateInputHeight() : (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
      });
    },
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },
    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },
  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },
    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },
    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },
    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }
      this.$emit('keydown', e);
    }
  }
}));

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34








var DialogClassicMessagevue_type_template_id_3accbb34_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5 grey lighten-2"
  }, [_vm._v(" ຂໍ້ຄວາມ ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v(" ຕົກລົງ ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=script&lang=js
/* harmony default export */ var DialogClassicMessagevue_type_script_lang_js = ({
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleDialog() {
      this.$emit('closedialog');
    }
  }
});
// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DialogClassicMessagevue_type_script_lang_js = (DialogClassicMessagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DialogClassicMessagevue_type_script_lang_js,
  DialogClassicMessagevue_type_template_id_3accbb34_render,
  staticRenderFns,
  false,
  null,
  null,
  "cf974660"
  
)

/* harmony default export */ var DialogClassicMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(460);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(200);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },
  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },
    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }
  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },
    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },
    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }
  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', {
        ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },
    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }
  }
}));

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(414);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_barcodePrinter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);






/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  middleware: 'auths',
  mixins: [_pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data() {
    return {
      productType: ['product', 'service', 'stock'],
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      imagesPreviewURL: [],
      files: null,
      barcodeImage: '',
      preview: false,
      previewSrc: null,
      title: 'ຈັດການສິນຄ້າ',
      validLocal: true,
      isLoading: false,
      taxRates: [],
      loadingTaxRates: false,
      // ✅ FIX: Initialize these so Vue sees them on render
      category: [],
      companyList: [],
      formData: {
        productId: null,
        pro_category: null,
        pro_id: null,
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: 1,
        companyId: null,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: null,
        stockUnitId: null,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: 1,
        validateStockOnSale: 1,
        vendorName: '',
        taxId: null,
        pro_image: []
      },
      rules: {
        nameRule: [v => !!v || 'ກະລຸນາໃສ່ຊື່ສິນຄ້າ'],
        priceRule: [v => !!/^\d+$/.test(v) || 'ກະລຸນາໃສ່ຕົວເລກເທົ່ານັ້ນ']
      }
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    host() {
      return Object(_common_api__WEBPACK_IMPORTED_MODULE_2__[/* hostName */ "a"])();
    },
    taxRateOptions() {
      return this.taxRates.map(tax => ({
        id: tax.id,
        name: tax.name,
        displayRate: (parseFloat(tax.rate) * 100).toFixed(2) + '%',
        displayText: `${tax.name} (${(parseFloat(tax.rate) * 100).toFixed(2)}%)`,
        rate: tax.rate
      }));
    },
    selectedTaxRate() {
      return this.taxRates.find(tax => tax.id === this.formData.taxId);
    }
  },
  async mounted() {
    this.isLoading = true;
    await Promise.all([this.fetchCategory(), this.fetchCompany(), this.fetchTaxRates()]);
    if (this.headerId) {
      await this.fetchProId(this.headerId);
    }
    this.isLoading = false;
  },
  methods: {
    // ✅ FIX: Define fetchData so the warning disappears
    fetchData() {
      console.log("Price list refreshed");
      if (this.headerId) {
        this.fetchProId(this.headerId);
      }
    },
    formatNumber(val) {
      return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* getFormatNum */ "e"])(val);
    },
    printBarcode() {
      const formattedPrice = this.formatNumber(this.formData.pro_price);
      let windowContent = this.threeColPaper ? Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_5__[/* getBarcode2by2cmHtml */ "b"])(formattedPrice, this.barcodeImage) : Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_5__[/* getBarcodeNormalHtml */ "c"])(formattedPrice, this.barcodeImage);
      Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_5__[/* executePrintWindow */ "a"])(windowContent);
    },
    generateBarcode() {
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000;
      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(this.formData.barCode);
    },
    generateBarcodeImage(barcodeValue) {
      if (!barcodeValue) return;
      this.$nextTick(() => {
        const canvas = this.$refs.barcodeCanvas;
        if (canvas) {
          jsbarcode__WEBPACK_IMPORTED_MODULE_4___default()(canvas, barcodeValue, {
            format: 'code128',
            displayValue: true,
            fontSize: 12,
            width: 1,
            height: 13
          });
          this.barcodeImage = canvas.toDataURL();
        }
      });
    },
    async uploadFilesLocal() {
      if (!this.$refs.formLocal.validate()) return;
      this.isLoading = true;
      const fData = new FormData();
      const payload = {
        ...this.formData,
        pro_status: this.formData.isActive ? 1 : 0,
        selectedTaxRate: this.selectedTaxRate,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax()
      };
      fData.append('FORM', JSON.stringify(payload));
      if (this.files) {
        this.files.forEach(file => fData.append('files', file));
      }
      await this.$axios.post('uploadmulti_update', fData).then(() => {
        this.$emit('close-dialog');
        this.$emit('refresh');
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "m"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
      }).catch(er => {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalError2 */ "l"])(this.$swal, 'Error', er.response.data);
      });
      this.isLoading = false;
    },
    async fetchProId(id) {
      await this.$axios.post('/product_f_id', {
        proid: id
      }).then(res => {
        const el = res.data[0];
        const images = el.img_name ? res.data.map(i => ({
          name: i.img_name,
          path: i.img_path
        })) : [];
        this.formData = {
          productId: el.id,
          pro_category: el.pro_category,
          pro_id: el.pro_id,
          pro_name: el.pro_name,
          _category: el._category || 'product',
          pro_price: el.pro_price,
          pro_desc: el.pro_desc,
          pro_status: el.pro_status,
          pro_retail_price: el.retail_cost_percent,
          pro_cost_price: el.cost_price,
          companyId: el.companyId,
          minStock: el.minStock,
          barCode: el.barCode || '',
          receiveUnitId: el.receiveUnitId,
          stockUnitId: el.stockUnitId,
          costCurrencyId: el.costCurrencyId || 1,
          saleCurrencyId: el.saleCurrencyId || 1,
          pro_image: images,
          isActive: el.isActive == 1,
          validateStockOnSale: el.validateStockOnSale == 1,
          vendorName: el.vendorName,
          taxId: el.taxId || null
        };
        this.generateBarcodeImage(this.formData.barCode);
      });
    },
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) return 0;
      return parseFloat(this.formData.pro_price) * parseFloat(this.selectedTaxRate.rate);
    },
    calculateTotalWithTax() {
      return parseFloat(this.formData.pro_price || 0) + this.calculateTaxAmount();
    },
    async fetchTaxRates() {
      const res = await this.$axios.get('/api/tax/active');
      this.taxRates = res.data.data || [];
    },
    async fetchCategory() {
      const res = await this.$axios.get('category_f');
      this.category = res.data.map(el => ({
        categ_id: el.categ_id,
        categ_name: el.categ_name
      }));
    },
    async fetchCompany() {
      const res = await this.$axios.get('api/company/find');
      this.companyList = res.data.map(el => ({
        id: el.id,
        name: el.name
      }));
    },
    onFilesChange(payload) {
      this.files = payload;
      if (payload) {
        this.imagesPreviewURL = Array.from(payload).map(file => ({
          IMG_URL: URL.createObjectURL(file),
          NAME: file.name
        }));
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1);
      this.files.splice(idx, 1);
    },
    async deleteFileFrServ(idx) {
      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* confirmSwal */ "a"])(this.$swal, 'warning', async () => {
        this.isLoading = true;
        await this.$axios.post('/unlink_file', {
          img_name: this.formData.pro_image[idx].name
        }).then(() => {
          this.formData.pro_image.splice(idx, 1);
          Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "m"])(this.$swal, 'Succeed', 'ລຶບສຳເລັດ');
        });
        this.isLoading = false;
      });
    },
    triggerPriceListForm() {
      this.pricingRecordId = this.formData.productId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(413)["URL"]))

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_barcodePrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(503);



// ✅ IMPORT: Import the barcode logic (Adjust path to where you saved the file)


// Utils definition (kept from your original code)
const getFormatNum = val => {
  if (!val) return '0';
  return Number(val).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
};
const swalSuccess = (swal, title, message) => {
  if (swal) {
    swal.fire({
      icon: 'success',
      title: title,
      text: message,
      timer: 2000
    });
  } else {
    alert(`${title}: ${message}`);
  }
};
const swalError2 = (swal, title, error) => {
  if (swal) {
    swal.fire({
      icon: 'error',
      title: title,
      text: error.toString()
    });
  } else {
    alert(`${title}: ${error}`);
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    title: {
      type: String,
      default: 'Create Product'
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      productType: ['product', 'service', 'stock'],
      valid: false,
      isloading: false,
      message: null,
      preview: false,
      previewSrc: '',
      priceListDialog: false,
      priceListFormKey: 0,
      pricingRecordId: null,
      barcodeImage: '',
      threeColPaper: false,
      // This toggles the print size

      // Tax-related data
      loadingTaxRates: false,
      taxRates: [],
      formData: {
        companyId: null,
        pro_category: null,
        pro_id: null,
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_cost_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        isActive: 1,
        validateStockOnSale: 1,
        minStock: 0,
        barCode: '',
        receiveUnitId: null,
        stockUnitId: null,
        saleCurrencyId: null,
        vendorName: '',
        taxId: null,
        baseUnitId: null
      },
      rules: {
        nameRule: [v => !!v || 'ຊື່ສິນຄ້າຈຳເປັນ'],
        priceRule: [v => !!v || 'ລາຄາຈຳເປັນ'],
        currencyRule: [v => !!v || 'Currency is required']
      },
      category: [],
      companyList: [],
      findAllCurrency: [],
      files: []
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['findAllProductPriceListToCreate', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    dialogMessage() {
      return this.message !== null;
    },
    // Tax rate options for autocomplete
    taxRateOptions() {
      return this.taxRates.map(rate => ({
        id: rate.id,
        name: rate.name,
        code: rate.code,
        rate: rate.rate,
        isDefault: rate.isDefault,
        displayText: `${rate.name} (${rate.code})`,
        displayRate: `${(rate.rate * 100).toFixed(1)}%`
      }));
    },
    // Get selected tax rate details
    selectedTaxRate() {
      if (!this.formData.taxId || !this.taxRates.length) return null;
      return this.taxRates.find(rate => rate.id === this.formData.taxId);
    }

    // ✅ NOTE: barcode3by2cm and barcodeNormal are REMOVED from computed
    // They are now handled by the imported functions.
  },
  async mounted() {
    await Promise.all([this.fetchCategory(), this.fetchCompany(), this.fetchCurrency(), this.fetchTaxRates()]);
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['clearProductPricesToCreate', 'addProductPricesToCreate', 'deleteProductPricesToCreate']),
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.headerId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    validate() {
      this.$refs.form.validate();
    },
    formatNumber(val) {
      return getFormatNum(val);
    },
    // Tax calculation methods
    async fetchTaxRates() {
      this.loadingTaxRates = true;
      try {
        const response = await this.$axios.get('/api/tax/active');
        this.taxRates = response.data.data || [];
        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
      } catch (error) {
        console.error('Error loading tax rates:', error);
      } finally {
        this.loadingTaxRates = false;
      }
    },
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) {
        return 0;
      }
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxRate = parseFloat(this.selectedTaxRate.rate) || 0;
      return basePrice * taxRate;
    },
    calculateTotalWithTax() {
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxAmount = this.calculateTaxAmount();
      return basePrice + taxAmount;
    },
    onTaxRateChange() {
      console.log('Tax rate changed to:', this.selectedTaxRate);
    },
    generateBarcode() {
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 100000000000;
      const canvas = document.createElement('canvas');
      jsbarcode__WEBPACK_IMPORTED_MODULE_1___default()(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 20,
        margin: 10
      });
      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(barcodeValue);
    },
    generateBarcodeImage(barcode) {
      const canvas = this.$refs.barcodeCanvas;
      if (canvas) {
        jsbarcode__WEBPACK_IMPORTED_MODULE_1___default()(canvas, barcode, {
          format: 'code128',
          displayValue: true,
          fontSize: 12,
          width: 1,
          height: 13
        });
        this.barcodeImage = canvas.toDataURL();
      }
    },
    // ✅ REFACTORED: Printing logic using external helper
    printBarcode() {
      // 1. Get formatted price
      const formattedPrice = this.formatNumber(this.formData.pro_price);

      // 2. Select HTML template based on "threeColPaper" toggle
      let windowContent = '';
      if (this.threeColPaper) {
        // Calls the imported function for small paper
        windowContent = Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_2__[/* getBarcode2by2cmHtml */ "b"])(formattedPrice, this.barcodeImage);
      } else {
        // Calls the imported function for normal paper
        windowContent = Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_2__[/* getBarcodeNormalHtml */ "c"])(formattedPrice, this.barcodeImage);
      }

      // 3. Execute print
      Object(_common_barcodePrinter__WEBPACK_IMPORTED_MODULE_2__[/* executePrintWindow */ "a"])(windowContent);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async fetchCategory() {
      this.isloading = true;
      try {
        const res = await this.$axios.get('category_f');
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
        if (this.category.length > 0) {
          this.formData.pro_category = this.category[0]['categ_id'];
        }
      } catch (er) {
        var _er$response;
        console.log('error: ' + ((_er$response = er.response) === null || _er$response === void 0 ? void 0 : _er$response.data) || false);
      }
      this.isloading = false;
    },
    async fetchCompany() {
      this.isloading = true;
      try {
        const res = await this.$axios.get('api/company/find');
        this.companyList = res.data.map(el => {
          return {
            id: el.id,
            name: el.name
          };
        });
        if (this.companyList.length > 0) {
          this.formData.companyId = this.companyList[0]['id'];
        }
      } catch (er) {
        var _er$response2;
        console.log('error: ' + ((_er$response2 = er.response) === null || _er$response2 === void 0 ? void 0 : _er$response2.data) || false);
      }
      this.isloading = false;
    },
    async fetchCurrency() {
      try {
        const response = await this.$axios.get('/api/currency/findAll');
        this.findAllCurrency = response.data.map(el => ({
          id: el.id,
          code: el.code
        }));
      } catch (error) {
        console.error('Error fetching currency:', error);
        this.findAllCurrency = [];
      }
    },
    onFilesChange(files) {
      this.files = files || [];
    },
    getFilePreview(file) {
      if (file && file instanceof File) {
        return URL.createObjectURL(file);
      }
      return '';
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.isloading = true;
      const formData = new FormData();
      this.formData.baseUnitId = this.formData.stockUnitId;
      const formDataWithTax = {
        ...this.formData,
        selectedTaxRate: this.selectedTaxRate ? {
          id: this.selectedTaxRate.id,
          name: this.selectedTaxRate.name,
          code: this.selectedTaxRate.code,
          rate: this.selectedTaxRate.rate
        } : null,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax()
      };
      formData.append('FORM', JSON.stringify(formDataWithTax));
      if (this.files && this.files.length > 0) {
        this.files.forEach(element => {
          formData.append('files', element);
        });
      }
      try {
        const response = await this.$axios.post('uploadmulti', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const productIdCreated = response.data.split('|')[1];
        console.log(`Product ID created: ${productIdCreated}`);
        const commResponse = await this.commitPriceListRecord(productIdCreated);
        console.info(`Commit response ${commResponse}`);
        this.isloading = false;
        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        this.$emit('refresh');
        this.$emit('close-dialog');
      } catch (error) {
        this.isloading = false;
        swalError2(this.$swal, 'Error', error);
        console.error('Error response:', error.response);
      }
    },
    async commitPriceListRecord(productId) {
      this.isloading = true;
      let api = 'api/priceList/create';
      try {
        const requests = this.findAllProductPriceListToCreate.map(item => {
          const newItem = {
            ...item,
            productId
          };
          return this.$axios.post(api, newItem);
        });
        const responses = await Promise.all(requests);
        this.clearProductPricesToCreate();
        return responses;
      } catch (error) {
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ໃນການເພີ່ມ price list');
        return null;
      }
    },
    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(413)["URL"]))

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(475);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(142);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },
    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.isDisabled),
        role: 'switch'
      };
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },
    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }
  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },
    genSwitch() {
      const {
        title,
        ...switchAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', {
        ...this.attrs,
        ...switchAttrs
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },
    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__[/* VFabTransition */ "c"], {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },
    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },
    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },
    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].right && !this.isActive) this.onChange();
    }
  }
}));

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(496);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("735d40bc", content, true)

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("011483c6", content, true, context)
};

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=template&id=c7a1474c



















var PriceListFormvue_type_template_id_c7a1474c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_c(VChip["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n        ຈັດການ ລາຍການລາຄາ\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລະຫັດສິນຄ້າ",
      "disabled": ""
    },
    model: {
      value: _vm.form.productId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "productId", $$v);
      },
      expression: "form.productId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* Name",
      "required": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.grades,
      "label": "Grade *"
    },
    model: {
      value: _vm.form.grade,
      callback: function ($$v) {
        _vm.$set(_vm.form, "grade", $$v);
      },
      expression: "form.grade"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລາຄາ"
    },
    model: {
      value: _vm.form.amount,
      callback: function ($$v) {
        _vm.$set(_vm.form, "amount", $$v);
      },
      expression: "form.amount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency*"
    },
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.type,
      "label": "ຮູບແບບລາຄາ",
      "required": ""
    },
    model: {
      value: _vm.form.type,
      callback: function ($$v) {
        _vm.$set(_vm.form, "type", $$v);
      },
      expression: "form.type"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "Is Active"
    },
    model: {
      value: _vm.form.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isActive", _vm._n($$v));
      },
      expression: "form.isActive"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n              ເພີ່ມ\n            ")])], 1)], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.entries
    },
    scopedSlots: _vm._u([{
      key: `item.id`,
      fn: function ({
        item,
        index
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "warning",
            "text": ""
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item, index);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-trash"
        })])];
      }
    }, {
      key: `item.name`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(item.name) + " [ " + _vm._s(item.grade) + " ]\n        ")];
      }
    }, {
      key: `item.amount`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(_vm.formatNumber(item.amount)) + "\n        ")];
      }
    }], null, true)
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        Close\n      ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=template&id=c7a1474c

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=script&lang=js


/* harmony default export */ var PriceListFormvue_type_script_lang_js = ({
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true
    },
    recordId: {
      type: Number,
      require: false,
      default: 0
    }
  },
  data() {
    return {
      // grades: ['A', 'B', 'C', 'D', 'E', 'F'],
      grades: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      search: '',
      form: {
        grade: '',
        productId: '',
        id: null,
        name: '',
        amount: 0,
        type: 'Price',
        currencyId: 1,
        isActive: true
      },
      type: ['Price', 'Percent'],
      entries: [],
      headers: [{
        text: 'Name',
        align: 'end',
        value: 'name',
        sortable: false
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'amount',
        sortable: false
      }, {
        text: 'ສູດຄິດໄລ່',
        align: 'end',
        value: 'type',
        sortable: false
      }, {
        text: 'ລົບ',
        align: 'end',
        value: 'id',
        sortable: false
      }],
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  async created() {
    this.form.productId = this.recordId;
    this.loadEntry();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['addProductPricesToCreate', 'deleteProductPricesToCreate']),
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        if (this.recordId == 0) {
          let localForm = {
            ...this.form
          };
          this.addProductPricesToCreate(localForm);
          console.log(`Item to create ${this.findAllProductPriceListToCreate.length}`);
          return;
        }
        this.isloading = true;
        let api = 'api/priceList/create';
        console.log('API => ', api);
        try {
          const response = await this.$axios.post(api, this.form);
          console.log(`Load data ${JSON.stringify(response)}`);
          await this.loadEntry();
          Object(common["m" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
        } catch (error) {
          return Object(common["l" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    async deleteItem(item, idx) {
      if (this.recordId == 0) {
        this.deleteProductPricesToCreate(idx);
        return;
      }
      if (!this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = `api/priceList/find/${item.id}`;
        console.log('API => ', api);
        try {
          const response = await this.$axios.delete(api);
          console.log(`Load data `);
          await this.loadEntry();
          Object(common["m" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction has been deleted');
        } catch (error) {
          return Object(common["l" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    async loadEntry() {
      console.log(`Loading data .... ${this.recordId}`);
      if (this.recordId == 0) {
        this.entries = this.findAllProductPriceListToCreate;
        return;
      }
      try {
        const response = await this.$axios.get(`api/priceList/findByProductId/${this.recordId}`);
        console.warn(`RESPONSE DATA ${JSON.stringify(response.data)}`);
        this.entries = response.data;
      } catch (error) {
        console.log('Cannot fetch data ' + error);
        return Object(common["l" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProductPriceListToCreate', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency'])
  }
});
// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PriceListFormvue_type_script_lang_js = (PriceListFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/PriceListForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PriceListFormvue_type_script_lang_js,
  PriceListFormvue_type_template_id_c7a1474c_render,
  staticRenderFns,
  false,
  null,
  null,
  "23382228"
  
)

/* harmony default export */ var PriceListForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default})


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBarcode2by2cmHtml; });
/* unused harmony export getBarcode3by2cmHtml */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBarcodeNormalHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return executePrintWindow; });
// ~/util/barcodePrinter.js

/**
 * Generates HTML for 2x2cm barcode
 */
const getBarcode2by2cmHtml = (formattedPrice, barcodeImage) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <style>
        @font-face {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
        * {
          font-family: 'DM Sans';
        }
      </style>
    </head>
    <body>
      <div style="text-align: center;">
        <table style="width: 200px; text-align: center;">
          <tr>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${formattedPrice}
              <img src="${barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${formattedPrice}
              <img src="${barcodeImage}">
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
};

/**
 * Generates HTML for 3x2cm barcode
 * (Note: Your original code defined this but didn't use it in the print function, 
 * but I have included it here just in case)
 */
const getBarcode3by2cmHtml = (formattedPrice, barcodeImage) => {
  return `
      <!DOCTYPE html>
          <html>
          <head>
          <title></title>
          <style>
          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
      <table style="width: 200px; text-align: center;" >
  <tr>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${formattedPrice}
      <img src="${barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${formattedPrice}
        <img src="${barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${formattedPrice}
        <img src="${barcodeImage}">
    </td>
  </tr>
</table>
</div>
</body>
</html>
`;
};

/**
 * Generates HTML for Normal barcode
 */
const getBarcodeNormalHtml = (formattedPrice, barcodeImage) => {
  return `
          <!DOCTYPE html>
          <html>
          <head>
          <title></title>
          <style>
          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
                <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${formattedPrice}
                            </br>
                            <img src="${barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `;
};

/**
 * Handles opening the window and printing
 */
const executePrintWindow = htmlContent => {
  const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
  printWin.document.open();
  printWin.document.write(htmlContent);
  setTimeout(() => {
    printWin.print();
    printWin.close();
  }, 1000);
};

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(525);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7c292d8c", content, true, context)
};

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(527);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53c7c341", content, true, context)
};

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=template&id=5419c5a1






var DiaImagevue_type_template_id_5419c5a1_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.iUrl || 'No image'
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "variant": "text",
      "rounded": ""
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.$emit('closeDia');
      }
    }
  }, [_vm._v("\n      Close\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=template&id=5419c5a1

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=script&lang=js
/* harmony default export */ var DiaImagevue_type_script_lang_js = ({
  props: ['iUrl']
});
// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DiaImagevue_type_script_lang_js = (DiaImagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DiaImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiaImagevue_type_script_lang_js,
  DiaImagevue_type_template_id_5419c5a1_render,
  staticRenderFns,
  false,
  null,
  null,
  "f6f6a7dc"
  
)

/* harmony default export */ var DiaImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },
    onMouseLeave() {
      this.runDelay('close');
    }
  },
  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }
    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }
    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }
    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }
    if (!this.disabled) {
      element.data = element.data || {};
      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }
    return element;
  }
}));

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(513);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e8a466fa", content, true)

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(494);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(481);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=template&id=d3712508&scoped=true


















var ProductFormCreatevue_type_template_id_d3712508_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-overlay"
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-d3712508>", "</div>", [_vm._ssrNode("<div class=\"modal-content\" data-v-d3712508>", "</div>", [_c(VCard["a" /* default */], {
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "grey lighten-4 py-2 mb-4"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "label": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-package-variant-closed")]), _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c('div', {
    staticClass: "text-subtitle-2 primary--text mb-2"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ (General Information)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.companyList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.companyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "companyId", $$v);
      },
      expression: "formData.companyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.category,
      "item-text": "categ_name",
      "item-value": "categ_id",
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "value": _vm.formData.pro_id || 'AUTO',
      "label": "ໄອດີສິນຄ້າ",
      "disabled": "",
      "dense": "",
      "outlined": ""
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "8"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "append-icon": "mdi-barcode-scan"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2 orange--text text--darken-3 mb-2"
  }, [_vm._v("ການກຳນົດລາຄາ ແລະ ພາສີ (Pricing & Tax)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຕົ້ນທຶນ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "color": "error"
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລາຄາຂາຍ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.findAllCurrency,
      "item-text": "code",
      "item-value": "id",
      "label": "ສະກຸນເງິນ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.saleCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "saleCurrencyId", $$v);
      },
      expression: "formData.saleCurrencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.taxRateOptions,
      "item-text": "displayText",
      "item-value": "id",
      "label": "ອາກອນ (Tax)",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "dense": "",
      "color": "blue-grey lighten-5"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-around text-caption blue-grey--text text--darken-3"
  }, [_c('span', [_vm._v("Base: "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.formData.pro_price)))])]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "): "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))])]), _vm._v(" "), _c('span', {
    staticClass: "primary--text"
  }, [_vm._v("Total: "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "mt-n2 mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "text": "",
      "color": "primary"
    },
    on: {
      "click": _vm.triggerPriceListForm
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-layers-plus")]), _vm._v(" ຈັດການລາຄາຫຼາຍລະດັບ (Multi-level Price)\n                ")], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2 green--text text--darken-3 mb-2"
  }, [_vm._v("ສາງ ແລະ ການຈັດຊື້ (Inventory)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.unitList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.unitList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.vendorName,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "vendorName", $$v);
      },
      expression: "formData.vendorName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", _vm._n($$v));
      },
      expression: "formData.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "ກວດສຕັອກກ່ອນຂາຍ",
      "dense": "",
      "color": "warning"
    },
    model: {
      value: _vm.formData.validateStockOnSale,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "validateStockOnSale", _vm._n($$v));
      },
      expression: "formData.validateStockOnSale"
    }
  })], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ (Description)",
      "rows": "3",
      "dense": "",
      "outlined": "",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  }), _vm._v(" "), _c(VFileInput["a" /* default */], {
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ຮູບພາບສິນຄ້າ",
      "dense": "",
      "outlined": "",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3 d-flex flex-column align-center",
    attrs: {
      "outlined": ""
    }
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "3 Column (Small Paper)",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.threeColPaper,
      callback: function ($$v) {
        _vm.threeColPaper = $$v;
      },
      expression: "threeColPaper"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("ສ້າງ Barcode")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "success",
      "disabled": !_vm.formData.barCode
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("ພິມ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-footer\" data-v-d3712508>", "</div>", [_vm._ssrNode("<div class=\"footer-actions\" data-v-d3712508>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "depressed": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("ຍົກເລີກ")]), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.valid,
      "depressed": ""
    },
    on: {
      "click": _vm.uploadFiles
    }
  }, [_vm._v("ບັນທຶກສິນຄ້າ")])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=template&id=d3712508&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=script&lang=js
var ProductFormCreatevue_type_script_lang_js = __webpack_require__(493);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductFormCreatevue_type_script_lang_js = (ProductFormCreatevue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(526)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormCreatevue_type_script_lang_js,
  ProductFormCreatevue_type_template_id_d3712508_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "d3712508",
  "45253468"
  
)

/* harmony default export */ var ProductFormCreate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(494);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(481);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=template&id=5dce2c23&scoped=true





















var ProductFormvue_type_template_id_5dce2c23_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-overlay"
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-5dce2c23>", "</div>", [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isLoading,
      callback: function ($$v) {
        _vm.isLoading = $$v;
      },
      expression: "isLoading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-content\" data-v-5dce2c23>", "</div>", [_c(VCard["a" /* default */], {
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "grey lighten-4 py-2 mb-4"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "label": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-update")]), _vm._v("\n            " + _vm._s(_vm.title) + "\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VForm["a" /* default */], {
    ref: "formLocal",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.validLocal,
      callback: function ($$v) {
        _vm.validLocal = $$v;
      },
      expression: "validLocal"
    }
  }, [_c('div', {
    staticClass: "text-subtitle-2 primary--text mb-2"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ (General Information)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.companyList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.companyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "companyId", $$v);
      },
      expression: "formData.companyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.category,
      "item-text": "categ_name",
      "item-value": "categ_id",
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "ໄອດີສິນຄ້າ",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.pro_id,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_id", $$v);
      },
      expression: "formData.pro_id"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "8"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "append-icon": "mdi-barcode-scan"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2 orange--text text--darken-3 mb-2"
  }, [_vm._v("ການກຳນົດລາຄາ ແລະ ພາສີ (Pricing & Tax)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຕົ້ນທຶນ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "color": "error"
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລາຄາຂາຍ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.findAllCurrency,
      "item-text": "code",
      "item-value": "id",
      "label": "ສະກຸນເງິນ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.saleCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "saleCurrencyId", $$v);
      },
      expression: "formData.saleCurrencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.taxRateOptions,
      "item-text": "displayText",
      "item-value": "id",
      "label": "ອາກອນ (Tax)",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "dense": "",
      "color": "blue-grey lighten-5"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-around text-caption blue-grey--text text--darken-3"
  }, [_c('span', [_vm._v("Base: "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.formData.pro_price)))])]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "): "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))])]), _vm._v(" "), _c('span', {
    staticClass: "primary--text"
  }, [_vm._v("Total: "), _c('strong', [_vm._v(_vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "mt-n2 mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "text": "",
      "color": "primary"
    },
    on: {
      "click": _vm.triggerPriceListForm
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-layers-plus")]), _vm._v(" ຈັດການລາຄາຫຼາຍລະດັບ\n                ")], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2 green--text text--darken-3 mb-2"
  }, [_vm._v("ສາງ ແລະ ການຈັດຊື້ (Inventory)")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.unitList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.unitList,
      "item-text": "name",
      "item-value": "id",
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": ""
    },
    model: {
      value: _vm.formData.vendorName,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "vendorName", $$v);
      },
      expression: "formData.vendorName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", _vm._n($$v));
      },
      expression: "formData.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "ກວດສຕັອກກ່ອນຂາຍ",
      "dense": "",
      "color": "warning"
    },
    model: {
      value: _vm.formData.validateStockOnSale,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "validateStockOnSale", _vm._n($$v));
      },
      expression: "formData.validateStockOnSale"
    }
  })], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "mb-4"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ",
      "rows": "3",
      "dense": "",
      "outlined": "",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  }), _vm._v(" "), _c(VFileInput["a" /* default */], {
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ເພີ່ມຮູບພາບສິນຄ້າ",
      "dense": "",
      "outlined": "",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  }), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-2 mt-2",
    staticStyle: {
      "max-height": "200px",
      "overflow-y": "auto"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-caption font-weight-bold mb-2"
  }, [_vm._v("Image Management")]), _vm._v(" "), _vm._l(_vm.formData.pro_image, function (img, idx) {
    return _c('div', {
      key: `ex-${idx}`,
      staticClass: "d-flex align-center mb-1 grey lighten-5 pa-1 rounded"
    }, [_c(VAvatar["a" /* default */], {
      staticClass: "cursor-pointer",
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(`${_vm.host}/uploads/${img.name}`);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": `${_vm.host}/uploads/${img.name}`
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1 text-truncate"
    }, [_vm._v(_vm._s(img.name))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFileFrServ(idx);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  }), _vm._v(" "), _vm._l(_vm.imagesPreviewURL, function (item, index) {
    return _c('div', {
      key: `new-${index}`,
      staticClass: "d-flex align-center mb-1 blue lighten-5 pa-1 rounded"
    }, [_c(VAvatar["a" /* default */], {
      staticClass: "cursor-pointer",
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(item.IMG_URL);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.IMG_URL
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1 text-truncate"
    }, [_vm._v(_vm._s(item.NAME))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFile(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-close-circle")])], 1)], 1);
  })], 2)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3 d-flex flex-column align-center",
    attrs: {
      "outlined": ""
    }
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "3 Column (Small Paper)",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.threeColPaper,
      callback: function ($$v) {
        _vm.threeColPaper = $$v;
      },
      expression: "threeColPaper"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("Generate")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "success",
      "disabled": !_vm.formData.barCode
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("Print")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-footer\" data-v-5dce2c23>", "</div>", [_vm._ssrNode("<div class=\"footer-actions\" data-v-5dce2c23>", "</div>", [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "depressed": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("Close")]), _vm._ssrNode(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.validLocal,
      "depressed": ""
    },
    on: {
      "click": _vm.uploadFilesLocal
    }
  }, [_vm._v("Update Product")])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=template&id=5dce2c23&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=script&lang=js
var ProductFormvue_type_script_lang_js = __webpack_require__(492);

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductFormvue_type_script_lang_js = (ProductFormvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(524)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormvue_type_script_lang_js,
  ProductFormvue_type_template_id_5dce2c23_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "5dce2c23",
  "51248ea0"
  
)

/* harmony default export */ var ProductForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default,DiaImage: __webpack_require__(509).default,PriceListForm: __webpack_require__(501).default})


/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(500);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".iframe-container{overflow:hidden;padding-top:56.25%;position:relative}.iframe-container iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(511);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
var VRating = __webpack_require__(542);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/index.vue?vue&type=template&id=1183dcac
















var productvue_type_template_id_1183dcac_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          class: {
            'on-hover': hover
          },
          attrs: {
            "elevation": hover ? 16 : 2
          }
        }, [_c('router-link', {
          attrs: {
            "to": `/movie/${_vm.movie.id}`
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "src": _vm.posterPath,
            "alt": ""
          }
        })], 1)], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "8"
    }
  }, [_c('h1', {
    staticClass: "grey--text text-darken-3 mt-5"
  }, [_vm._v(_vm._s(this.movie.title))]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "2"
    }
  }, [_c(VRating["a" /* default */], {
    attrs: {
      "value": _vm.movie.vote_average / 2,
      "color": "amber",
      "dense": "",
      "half-increments": "",
      "readonly": "",
      "size": "14"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "3"
    }
  }, [_c('span', {
    staticClass: "gray--text ml-n7"
  }, [_vm._v("\n                        " + _vm._s(_vm.movie.vote_average * 10) + "% | " + _vm._s(_vm.movie.release_date) + "\n                    ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "7"
    }
  }, [_c('div', {
    staticClass: "subtitle-2 grey--text ml-n16"
  }, _vm._l(_vm.movie.genres, function (item, index) {
    return _c('span', {
      key: index,
      staticClass: "ml-1"
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                            "), _vm.movie.genres.length - 1 != index ? _c('span', [_vm._v(",")]) : _vm._e()]);
  }), 0)])], 1), _vm._v(" "), _c('p', {
    staticClass: "mt-5 grey--text text--darken-3 subheader"
  }, [_vm._v(_vm._s(this.movie.overview))]), _vm._v(" "), _c('div', {
    staticClass: "mt-5"
  }, [_c('h2', {
    staticClass: "mt-5 grey--text text--darken-3"
  }, [_vm._v("Featured Cast")]), _vm._v(" "), _vm._l(_vm.movie.credits.crew, function (crew, index) {
    return _c('div', {
      key: index,
      staticClass: "mt-5"
    }, [index < 2 ? _c('div', {}, [_c('h3', [_vm._v(_vm._s(crew.name))]), _vm._v(" "), _c('span', {
      staticClass: "grey--text"
    }, [_vm._v(_vm._s(crew.job))])]) : _vm._e()]);
  })], 2), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "persistent": "",
      "max-width": "800px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "tile": "",
            "color": "error"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.openYouTubeModel.apply(null, arguments);
            }
          }
        }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
          attrs: {
            "left": ""
          }
        }, [_vm._v("mdi-play")]), _vm._v("Play\n                    ")], 1)];
      }
    }]),
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_vm._v(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(this.movie.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": ""
    }
  }, [_c('div', {
    staticClass: "iframe-container"
  }, [!_vm.isVideo ? _c('img', {
    attrs: {
      "src": _vm.mediaURL
    }
  }) : _vm._e(), _vm._v(" "), _vm.isVideo ? _c('iframe', {
    attrs: {
      "allowfullscreen": "",
      "src": _vm.mediaURL
    }
  }) : _vm._e()])])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialog = _vm.flase;
      }
    }
  }, [_vm._v("Close")])], 1)], 1)], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "tile": "",
      "color": "error"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-heart")]), _vm._v("Favorite\n            ")], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._ssrNode(" "), _c('Cast', {
    attrs: {
      "casts": _vm.movie.credits.cast
    }
  }), _vm._ssrNode(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._ssrNode(" "), _c('Images', {
    attrs: {
      "images": _vm.movie.images.backdrops
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/product/index.vue?vue&type=template&id=1183dcac

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/product/index.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(521)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  productvue_type_template_id_1183dcac_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "30570ffe"
  
)

/* harmony default export */ var product = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5dce2c23_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(504);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5dce2c23_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5dce2c23_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5dce2c23_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_5dce2c23_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".enhanced-dialog[data-v-5dce2c23],.enhanced-dialog *[data-v-5dce2c23],.v-application .enhanced-dialog[data-v-5dce2c23]{font-family:\"Noto Sans Lao\",sans-serif!important}.enhanced-dialog[data-v-5dce2c23] .text-subtitle-2,.enhanced-dialog[data-v-5dce2c23] .v-btn__content,.enhanced-dialog[data-v-5dce2c23] .v-input,.enhanced-dialog[data-v-5dce2c23] .v-label{font-family:\"Noto Sans Lao\",sans-serif!important}.modal-overlay[data-v-5dce2c23]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-5dce2c23],.modal-overlay[data-v-5dce2c23]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-5dce2c23]{background:#fff;flex-direction:column;overflow:hidden}.modal-content[data-v-5dce2c23]{flex:1;overflow-y:auto;padding-bottom:20px}.modal-footer[data-v-5dce2c23]{background:#f8f9fa;border-top:1px solid #e9ecef;bottom:0;padding:12px 20px;position:sticky;z-index:10}.footer-actions[data-v-5dce2c23]{display:flex;gap:8px;justify-content:flex-end}.modal-content[data-v-5dce2c23]::-webkit-scrollbar{width:6px}.modal-content[data-v-5dce2c23]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_d3712508_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".enhanced-dialog[data-v-d3712508],.enhanced-dialog *[data-v-d3712508]{font-family:\"Noto Sans Lao\",sans-serif!important}.enhanced-dialog[data-v-d3712508] .text-caption,.enhanced-dialog[data-v-d3712508] .text-subtitle-2,.enhanced-dialog[data-v-d3712508] .v-alert__content,.enhanced-dialog[data-v-d3712508] .v-btn__content,.enhanced-dialog[data-v-d3712508] .v-chip__content,.enhanced-dialog[data-v-d3712508] .v-input,.enhanced-dialog[data-v-d3712508] .v-label,.enhanced-dialog[data-v-d3712508] .v-messages{font-family:\"Noto Sans Lao\",sans-serif!important}.modal-overlay[data-v-d3712508]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-d3712508],.modal-overlay[data-v-d3712508]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-d3712508]{background:#fff;flex-direction:column;overflow:hidden}.modal-content[data-v-d3712508]{flex:1;overflow-x:hidden;overflow-y:auto;padding-bottom:20px}.modal-footer[data-v-d3712508]{background:#f8f9fa;border-top:1px solid #e9ecef;bottom:0;box-shadow:0 -2px 4px rgba(0,0,0,.1);padding:12px 20px;position:sticky;z-index:10}.footer-actions[data-v-d3712508]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-d3712508]{height:100vh;width:100vw}.footer-actions[data-v-d3712508]{flex-direction:row;gap:8px}}@media (max-width:600px){.modal-footer[data-v-d3712508]{padding:8px 16px}.footer-actions[data-v-d3712508]{width:100%}.footer-actions .v-btn[data-v-d3712508]{flex:1}}.modal-content[data-v-d3712508]::-webkit-scrollbar{width:6px}.modal-content[data-v-d3712508]::-webkit-scrollbar-track{background:#f1f1f1}.modal-content[data-v-d3712508]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:10px}.modal-content[data-v-d3712508]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(130);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
// Styles
 // Extensions

 // Components

 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-file-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    chips: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    counterSizeString: {
      type: String,
      default: '$vuetify.fileInput.counterSize'
    },
    counterString: {
      type: String,
      default: '$vuetify.fileInput.counter'
    },
    hideInput: Boolean,
    multiple: Boolean,
    placeholder: String,
    prependIcon: {
      type: String,
      default: '$file'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: [Boolean, Number],
      default: false,
      validator: v => {
        return typeof v === 'boolean' || [1000, 1024].includes(v);
      }
    },
    smallChips: Boolean,
    truncateLength: {
      type: [Number, String],
      default: 22
    },
    type: {
      type: String,
      default: 'file'
    },
    value: {
      default: undefined,
      validator: val => {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(val).every(v => v != null && typeof v === 'object');
      }
    }
  },
  computed: {
    classes() {
      return {
        ..._VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-file-input': true
      };
    },
    computedCounterValue() {
      const fileCount = this.multiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
      if (!this.showSize) return this.$vuetify.lang.t(this.counterString, fileCount);
      const bytes = this.internalArrayValue.reduce((bytes, {
        size = 0
      }) => {
        return bytes + size;
      }, 0);
      return this.$vuetify.lang.t(this.counterSizeString, fileCount, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(bytes, this.base === 1024));
    },
    internalArrayValue() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(this.internalValue);
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(val) {
        this.lazyValue = val;
        this.$emit('change', this.lazyValue);
      }
    },
    isDirty() {
      return this.internalArrayValue.length > 0;
    },
    isLabelActive() {
      return this.isDirty;
    },
    text() {
      if (!this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel)) return [this.placeholder];
      return this.internalArrayValue.map(file => {
        const {
          name = '',
          size = 0
        } = file;
        const truncatedText = this.truncateText(name);
        return !this.showSize ? truncatedText : `${truncatedText} (${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(size, this.base === 1024)})`;
      });
    },
    base() {
      return typeof this.showSize !== 'boolean' ? this.showSize : undefined;
    },
    hasChips() {
      return this.chips || this.smallChips;
    }
  },
  watch: {
    readonly: {
      handler(v) {
        if (v === true) Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* consoleError */ "b"])('readonly is not supported on <v-file-input>', this);
      },
      immediate: true
    },
    value(v) {
      const value = this.multiple ? v : v ? [v] : [];
      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* deepEqual */ "k"])(value, this.$refs.input.files)) {
        // When the input value is changed programatically, clear the
        // internal input's value so that the `onInput` handler
        // can be triggered again if the user re-selects the exact
        // same file(s). Ideally, `input.files` should be
        // manipulated directly but that property is readonly.
        this.$refs.input.value = '';
      }
    }
  },
  methods: {
    clearableCallback() {
      this.internalValue = this.multiple ? [] : null;
      this.$refs.input.value = '';
    },
    genChips() {
      if (!this.isDirty) return [];
      return this.text.map((text, index) => this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          small: this.smallChips
        },
        on: {
          'click:close': () => {
            const internalValue = this.internalValue;
            internalValue.splice(index, 1);
            this.internalValue = internalValue; // Trigger the watcher
          }
        }
      }, [text]));
    },
    genControl() {
      const render = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControl.call(this);
      if (this.hideInput) {
        render.data.style = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_5__[/* mergeStyles */ "d"])(render.data.style, {
          display: 'none'
        });
      }
      return render;
    },
    genInput() {
      const input = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.data.attrs.multiple = this.multiple; // We should not be setting value
      // programmatically on the input
      // when it is using type="file"

      delete input.data.domProps.value; // This solves an issue in Safari where
      // nothing happens when adding a file
      // due to the input event not firing
      // https://github.com/vuetifyjs/vuetify/issues/7941

      delete input.data.on.input;
      input.data.on.change = this.onInput;
      return [this.genSelections(), input];
    },
    genPrependSlot() {
      if (!this.prependIcon) return null;
      const icon = this.genIcon('prepend', () => {
        this.$refs.input.click();
      });
      return this.genSlot('prepend', 'outer', [icon]);
    },
    genSelectionText() {
      const length = this.text.length;
      if (length < 2) return this.text;
      if (this.showSize && !this.counter) return [this.computedCounterValue];
      return [this.$vuetify.lang.t(this.counterString, length)];
    },
    genSelections() {
      const children = [];
      if (this.isDirty && this.$scopedSlots.selection) {
        this.internalArrayValue.forEach((file, index) => {
          if (!this.$scopedSlots.selection) return;
          children.push(this.$scopedSlots.selection({
            text: this.text[index],
            file,
            index
          }));
        });
      } else {
        children.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText());
      }
      return this.$createElement('div', {
        staticClass: 'v-file-input__text',
        class: {
          'v-file-input__text--placeholder': this.placeholder && !this.isDirty,
          'v-file-input__text--chips': this.hasChips && !this.$scopedSlots.selection
        }
      }, children);
    },
    genTextFieldSlot() {
      const node = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genTextFieldSlot.call(this);
      node.data.on = {
        ...(node.data.on || {}),
        click: e => {
          // Clicking the label already delegates to input element, so we shouldn't click it twice
          if (e.target && e.target.nodeName === 'LABEL') return;
          this.$refs.input.click();
        }
      };
      return node;
    },
    onInput(e) {
      const files = [...(e.target.files || [])];
      this.internalValue = this.multiple ? files : files[0]; // Set initialValue here otherwise isFocused
      // watcher in VTextField will emit a change
      // event whenever the component is blurred

      this.initialValue = this.internalValue;
    },
    onKeyDown(e) {
      this.$emit('keydown', e);
    },
    truncateText(str) {
      if (str.length < Number(this.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(this.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }
  }
}));

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(512);
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58);
/* harmony import */ var _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
// Styles
 // Components

 // Mixins





 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-rating',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    color: {
      type: String,
      default: 'primary'
    },
    clearable: Boolean,
    dense: Boolean,
    emptyIcon: {
      type: String,
      default: '$ratingEmpty'
    },
    fullIcon: {
      type: String,
      default: '$ratingFull'
    },
    halfIcon: {
      type: String,
      default: '$ratingHalf'
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    size: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    iconLabel: {
      type: String,
      default: '$vuetify.rating.ariaLabel.icon'
    }
  },
  data() {
    return {
      hoverIndex: -1,
      internalValue: this.value
    };
  },
  computed: {
    directives() {
      if (this.readonly || !this.ripple) return [];
      return [{
        name: 'ripple',
        value: {
          circle: true
        }
      }];
    },
    iconProps() {
      const {
        dark,
        large,
        light,
        medium,
        small,
        size,
        xLarge,
        xSmall
      } = this.$props;
      return {
        dark,
        large,
        light,
        medium,
        size,
        small,
        xLarge,
        xSmall
      };
    },
    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    }
  },
  watch: {
    internalValue(val) {
      val !== this.value && this.$emit('input', val);
    },
    value(val) {
      this.internalValue = val;
    }
  },
  methods: {
    createClickFn(i) {
      return e => {
        if (this.readonly) return;
        const newValue = this.genHoverIndex(e, i);
        if (this.clearable && this.internalValue === newValue) {
          this.internalValue = 0;
        } else {
          this.internalValue = newValue;
        }
      };
    },
    createProps(i) {
      const props = {
        index: i,
        value: this.internalValue,
        click: this.createClickFn(i),
        isFilled: Math.floor(this.internalValue) > i,
        isHovered: Math.floor(this.hoverIndex) > i
      };
      if (this.halfIncrements) {
        props.isHalfHovered = !props.isHovered && (this.hoverIndex - i) % 1 > 0;
        props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
      }
      return props;
    },
    genHoverIndex(e, i) {
      let isHalf = this.isHalfEvent(e);
      if (this.halfIncrements && this.$vuetify.rtl) {
        isHalf = !isHalf;
      }
      return i + (isHalf ? 0.5 : 1);
    },
    getIconName(props) {
      const isFull = this.isHovering ? props.isHovered : props.isFilled;
      const isHalf = this.isHovering ? props.isHalfHovered : props.isHalfFilled;
      return isFull ? this.fullIcon : isHalf ? this.halfIcon : this.emptyIcon;
    },
    getColor(props) {
      if (this.isHovering) {
        if (props.isHovered || props.isHalfHovered) return this.color;
      } else {
        if (props.isFilled || props.isHalfFilled) return this.color;
      }
      return this.backgroundColor;
    },
    isHalfEvent(e) {
      if (this.halfIncrements) {
        const rect = e.target && e.target.getBoundingClientRect();
        if (rect && e.pageX - rect.left < rect.width / 2) return true;
      }
      return false;
    },
    onMouseEnter(e, i) {
      this.runDelay('open', () => {
        this.hoverIndex = this.genHoverIndex(e, i);
      });
    },
    onMouseLeave() {
      this.runDelay('close', () => this.hoverIndex = -1);
    },
    genItem(i) {
      const props = this.createProps(i);
      if (this.$scopedSlots.item) return this.$scopedSlots.item(props);
      const listeners = {
        click: props.click
      };
      if (this.hover) {
        listeners.mouseenter = e => this.onMouseEnter(e, i);
        listeners.mouseleave = this.onMouseLeave;
        if (this.halfIncrements) {
          listeners.mousemove = e => this.onMouseEnter(e, i);
        }
      }
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.setTextColor(this.getColor(props), {
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.iconLabel, i + 1, Number(this.length))
        },
        directives: this.directives,
        props: this.iconProps,
        on: listeners
      }), [this.getIconName(props)]);
    }
  },
  render(h) {
    const children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* createRange */ "i"])(Number(this.length)).map(i => this.genItem(i));
    return h('div', {
      staticClass: 'v-rating',
      class: {
        'v-rating--readonly': this.readonly,
        'v-rating--dense': this.dense
      }
    }, children);
  }
}));

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryForm.vue?vue&type=template&id=24f3e22a













var CategoryFormvue_type_template_id_24f3e22a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_c(VChip["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n                ຈັດການໝວດສິນຄ້າ\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": "",
      "label": "* CODE"
    },
    model: {
      value: _vm.form.categ_id,
      callback: function ($$v) {
        _vm.$set(_vm.form, "categ_id", $$v);
      },
      expression: "form.categ_id"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ຊື່",
      "required": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.categ_name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "categ_name", $$v);
      },
      expression: "form.categ_name"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "ໝາຍເຫດ"
    },
    model: {
      value: _vm.form.categ_desc,
      callback: function ($$v) {
        _vm.$set(_vm.form, "categ_desc", $$v);
      },
      expression: "form.categ_desc"
    }
  }), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "Is Active"
    },
    model: {
      value: _vm.form.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isActive", _vm._n($$v));
      },
      expression: "form.isActive"
    }
  })], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryForm.vue?vue&type=template&id=24f3e22a

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryForm.vue?vue&type=script&lang=js

/* harmony default export */ var CategoryFormvue_type_script_lang_js = ({
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true
    },
    recordId: {
      type: Number,
      require: false,
      default: 0
    }
  },
  data() {
    return {
      form: {
        categ_id: '1XXX',
        categ_name: '',
        categ_desc: '',
        isActive: true
      },
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  // mounted() {
  //     this.loadEntry();
  // },
  async created() {
    this.loadEntry();
  },
  methods: {
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = this.isCreate ? 'api/category/create' : `api/category/update/${this.recordId}`;
        console.log("API => ", api);
        if (this.isCreate) {
          await this.$axios.post(api, this.form).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["m" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["l" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
          await this.$axios.put(api, this.form).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["m" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["l" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        }
        this.isloading = false;
      }
    },
    async loadEntry() {
      console.log(`===> Update form record load`);
      if (this.recordId && !this.isCreate) {
        await this.$axios.get(`api/category/find/${this.recordId}`).then(response => {
          this.form = response.data;
        }).catch(error => {
          console.log("Cannot fetch data " + error);
        });
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    // Add any necessary computed properties here
  }
});
// CONCATENATED MODULE: ./components/CategoryForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CategoryFormvue_type_script_lang_js = (CategoryFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CategoryForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryFormvue_type_script_lang_js,
  CategoryFormvue_type_template_id_24f3e22a_render,
  staticRenderFns,
  false,
  null,
  null,
  "d4888c96"
  
)

/* harmony default export */ var CategoryForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default})


/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaConfirm.vue?vue&type=template&id=287b5971








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

// CONCATENATED MODULE: ./components/DiaConfirm.vue?vue&type=template&id=287b5971

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaConfirm.vue?vue&type=script&lang=js
/* harmony default export */ var DiaConfirmvue_type_script_lang_js = ({
  props: ['dia', 'messageTitle', 'messageBody'],
  methods: {
    feedbackHandle(v) {
      this.$emit('react', v);
    }
  }
});
// CONCATENATED MODULE: ./components/DiaConfirm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DiaConfirmvue_type_script_lang_js = (DiaConfirmvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DiaConfirm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiaConfirmvue_type_script_lang_js,
  DiaConfirmvue_type_template_id_287b5971_render,
  staticRenderFns,
  false,
  null,
  null,
  "47dcc337"
  
)

/* harmony default export */ var DiaConfirm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebProductCategoryForm.vue?vue&type=template&id=52a61343















var WebProductCategoryFormvue_type_template_id_52a61343_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_c(VChip["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n                " + _vm._s(`ສິນຄ້າ: ${_vm.product.pro_name} ລາຄາ: ${_vm.formatNumber(_vm.product.pro_price)}`) + "\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.categoryList,
      "label": "ໝວດສິນຄ້າຫນ້າເວັບ*"
    },
    model: {
      value: _vm.selectCategoryId,
      callback: function ($$v) {
        _vm.selectCategoryId = $$v;
      },
      expression: "selectCategoryId"
    }
  })], 1), _vm._v(" "), _c('div', [_c(VRow["a" /* default */], {
    attrs: {
      "justify": "center",
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.addProductToGroup
    }
  }, [_c('span', {
    staticClass: "mdi mdi-note-plus-outline"
  }), _vm._v("\n                            ເພີ່ມກຸ່ມ\n                        ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDivider["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "mx-2"
  }, [_vm._v("ກຸ່ມສິນຄ້າຫນ້າເວັບ ທີ່ເລືອກ")]), _vm._v(" "), _c(VDivider["a" /* default */])], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, _vm._l(_vm.localProduct.webProductGroups, function (group) {
    return _c(VChip["a" /* default */], {
      key: group.id,
      staticClass: "ma-2",
      attrs: {
        "color": "warning",
        "variant": "outlined"
      },
      on: {
        "click": function ($event) {
          return _vm.removeProductFromGroup(group);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(group.id) + " - " + _vm._s(group.name) + "\n                    ")]);
  }), 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/WebProductCategoryForm.vue?vue&type=template&id=52a61343

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebProductCategoryForm.vue?vue&type=script&lang=js

/* harmony default export */ var WebProductCategoryFormvue_type_script_lang_js = ({
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      categoryList: [],
      selectCategoryId: null,
      localProduct: this.product,
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  // mounted() {
  //     this.loadEntry();
  // },
  async created() {
    // this.
    this.loadEntry();
  },
  methods: {
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = this.isCreate ? 'api/webproductgroup/create' : `api/webproductgroup/product_set_groups/${this.product.id}`;
        console.log("API => ", api);
        if (this.isCreate) {
          await this.$axios.post(api, this.localProduct).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["m" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["l" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
          this.localProduct.groupList = this.localProduct.webProductGroups;
          await this.$axios.put(api, this.localProduct).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["m" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["l" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        }
        this.isloading = false;
      }
    },
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    addProductToGroup() {
      console.log(`Add product to group handler`);
      if (!this.selectCategoryId) return;
      const newGroup = this.categoryList.find(el => el.id == this.selectCategoryId);
      console.log(`Authority ${newGroup.id}`);
      if (this.localProduct.webProductGroups.length == 0) {
        console.log(`TEHERE IS NO TERMINAL`);
        this.localProduct.webProductGroups.push(newGroup);
      } else if (this.localProduct.webProductGroups == 'undefined') {
        this.localProduct.webProductGroups.push(newGroup);
      } else {
        const group = this.localProduct.webProductGroups.find(el => el.id == this.selectCategoryId);
        console.log(`ADD TERMINAL ${group}`);
        if (!group) this.localProduct.webProductGroups.push(newGroup);
      }
    },
    removeProductFromGroup(group) {
      console.log(`Remove product to group handler`);
      const idx = this.localProduct.webProductGroups.indexOf(group);
      this.localProduct.webProductGroups.splice(idx, 1);
    },
    async loadEntry() {
      console.log(`===> Update form record load`);
      await this.$axios.get(`api/webproductgroup/find`).then(response => {
        this.categoryList = response.data;
        this.selectCategoryId = this.categoryList[0]['id'];
      }).catch(error => {
        console.log("Cannot fetch data " + error);
      });
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    // Add any necessary computed properties here
  }
});
// CONCATENATED MODULE: ./components/WebProductCategoryForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_WebProductCategoryFormvue_type_script_lang_js = (WebProductCategoryFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/WebProductCategoryForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WebProductCategoryFormvue_type_script_lang_js,
  WebProductCategoryFormvue_type_template_id_52a61343_render,
  staticRenderFns,
  false,
  null,
  null,
  "46a78d10"
  
)

/* harmony default export */ var WebProductCategoryForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default})


/***/ })

};;
//# sourceMappingURL=index.js.map