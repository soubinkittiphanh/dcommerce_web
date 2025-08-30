exports.ids = [125];
exports.modules = {

/***/ 1230:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(381);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TransferViewForm.vue?vue&type=template&id=c56513de&












var TransferViewFormvue_type_template_id_c56513de_render = function render() {
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

// CONCATENATED MODULE: ./components/TransferViewForm.vue?vue&type=template&id=c56513de&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TransferViewForm.vue?vue&type=script&lang=js&

/* harmony default export */ var TransferViewFormvue_type_script_lang_js_ = ({
  props: {
    headerId: {
      type: Number,
      default: 0
    },
    isQuotation: {
      type: Boolean,
      default: false
    },
    isUpdate: {
      type: Boolean,
      default: false
    }
  },
  async created() {
    await this.loadLocation();
    this.isloading = true;
    await this.loadTransaction();
    this.isloading = false;
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
    async loadLocation(item) {
      this.isloading = true;
      await this.$axios.get(`api/location/find`).then(res => {
        this.locationList = res.data.map(el => el);
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Operation fail ' + er.Error);
      });
      this.isloading = false;
    },
    async loadTransaction() {
      await this.$axios.get(`api/transfer/find/${this.headerId}`).then(res => {
        this.transaction = res.data;
        console.log("Data ", res.data);
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'Could no load data ' + er.Error);
      });
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
// CONCATENATED MODULE: ./components/TransferViewForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TransferViewFormvue_type_script_lang_js_ = (TransferViewFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/TransferViewForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TransferViewFormvue_type_script_lang_js_,
  TransferViewFormvue_type_template_id_c56513de_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "54d9e332"
  
)

/* harmony default export */ var TransferViewForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=transfer-view-form.js.map