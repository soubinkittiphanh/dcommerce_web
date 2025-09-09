exports.ids = [97];
exports.modules = {

/***/ 424:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderDetailPos.vue?vue&type=template&id=5d931e66&












var OrderDetailPosvue_type_template_id_5d931e66_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.isQuotation ? `Quotation #` : `Invoice #`) + "\n                    " + _vm._s(_vm.header.id) + "\n                ")]), _vm._v(" "), _vm.isQuotation ? _c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined"
    },
    on: {
      "click": _vm.post
    }
  }, [_vm._v("\n                        Post to invoice"), _c('span', {
    staticClass: "mdi mdi-cloud-download"
  })])], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], [_c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ວັນທີ: " + _vm._s(_vm.header.bookingDate) + " ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ຊື່ລູກຄ້າ: " + _vm._s(_vm.header.client.name))]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ເບີໂທ: " + _vm._s(_vm.header.client.telephone))]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ບໍລິສັດ: " + _vm._s(_vm.header.client.company))]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ການຊຳລະ: " + _vm._s(_vm.header.payment.payment_code) + " ")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ສະກຸນ: " + _vm._s(_vm.header.currency.code))]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ອັດຕາແລກປ່ຽນ: " + _vm._s(_vm.header.exchangeRate))]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ສ່ວນຫລຸດ: " + _vm._s(_vm.header.discount))]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ຍອດລວມທັງໝົດ: " + _vm._s(_vm.getFormatNum(_vm.header.total)))])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "end"
    },
    attrs: {
      "cols": "4"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ຜູ້ລົງ: " + _vm._s(_vm.header.user.cus_id) + " ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("ຊື່: " + _vm._s(_vm.header.user.cus_name))])], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _vm.header.lines ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.header.lines
    },
    scopedSlots: _vm._u([{
      key: `item.function`,
      fn: function ({
        item
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "blue darken-1",
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.editItem(item);
              _vm.wallet = true;
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-wallet"
        })])];
      }
    }, {
      key: `item.price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                    " + _vm._s(_vm.getFormatNum(item.price)) + "\n                ")];
      }
    }, {
      key: `item.discount`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                    " + _vm._s(_vm.getFormatNum(item.discount)) + "\n                ")];
      }
    }, {
      key: `item.total`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n                    " + _vm._s(_vm.getFormatNum(item.total)) + "\n                ")];
      }
    }], null, true)
  }) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v("\n                Close\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OrderDetailPos.vue?vue&type=template&id=5d931e66&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderDetailPos.vue?vue&type=script&lang=js&

/* harmony default export */ var OrderDetailPosvue_type_script_lang_js_ = ({
  props: {
    // entry: {
    //     type: Object,
    //     default: '',
    // },
    header: {
      type: Object,
      default: null
    },
    isQuotation: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    post() {
      //  ********** Enable below line to confirm before clear ***********//
      Object(common["a" /* confirmSwal */])(this.$swal, 'You are posting to invoice ?', this.postToInvoice);
      // this.clearCart()
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val);
    },
    toggleDialog() {
      this.$emit('close-dialog');
    },
    async postToInvoice() {
      if (this.isloading) return;
      this.isloading = true;
      // TODO: How to split data between cod order[not yet paid] and all order
      const date = {
        startDate: this.date,
        endDate: this.date2
      };
      await this.$axios.put(`api/sale/postToInvoice/${this.header.id}`).then(res => {
        this.$emit('reload');
        Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + er.Error);
        console.log('Error ===>: ' + er);
      });
      this.isloading = false;
    }
  },
  data() {
    return {
      search: '',
      isloading: false,
      headers: [{
        text: 'ສິນຄ້າ',
        align: 'start',
        value: 'product.pro_name'
      }, {
        text: 'ຈຳນວນ',
        align: 'end',
        value: 'quantity'
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'price',
        sortable: true
      }, {
        text: 'ສ່ວນຫລຸດ',
        align: 'end',
        value: 'discount',
        sortable: true
      }, {
        text: 'ລວມ',
        align: 'end',
        value: 'total',
        sortable: false
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/OrderDetailPos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OrderDetailPosvue_type_script_lang_js_ = (OrderDetailPosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/OrderDetailPos.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OrderDetailPosvue_type_script_lang_js_,
  OrderDetailPosvue_type_template_id_5d931e66_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "32269b28"
  
)

/* harmony default export */ var OrderDetailPos = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=order-detail-pos.js.map