exports.ids = [96];
exports.modules = {

/***/ 531:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(399);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderDetail.vue?vue&type=template&id=4e790339&







var OrderDetailvue_type_template_id_4e790339_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VCard["a" /* default */], [_c(components_VCard["b" /* VCardSubtitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("Order item")])]), _vm._v(" "), _vm.orderList ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.orderList
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
    }], null, true)
  }) : _vm._e(), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v("\n                Close\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OrderDetail.vue?vue&type=template&id=4e790339&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderDetail.vue?vue&type=script&lang=js&
/* harmony default export */ var OrderDetailvue_type_script_lang_js_ = ({
  props: {
    orderId: {
      type: String,
      default: ''
    }
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val);
    },
    toggleDialog() {
      this.$emit('close-dialog', 'false');
    },
    async fetchData() {
      this.isloading = true;
      await this.$axios.get('api/findOrderById/?orderId=' + this.orderId).then(res => {
        this.orderList = res.data.row.map(el => {
          return {
            "id": el.id,
            "order_id": el.order_id,
            "user_id": el.user_id,
            "product_id": el.product_id + ' ' + el.pro_name,
            "product_amount": el.product_amount,
            "product_price": this.getFormatNum(el.product_price),
            "order_price_total": this.getFormatNum(el.order_price_total),
            "product_discount": el.product_discount,
            "locking_session_id": el.locking_session_id,
            "cod_fee": el.cod_fee,
            "rider_fee": el.rider_fee,
            "record_status": el.record_status,
            "cancel_reason": el.cancel_reason,
            "txn_date": el.txn_date.split('T')[0],
            "recordStatusText": el.record_status === 1 ? 'Effeced' : el.record_status === 2 ? 'Cancel' : 'Return'
          };
        });
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
      this.isloading = false;
    }
  },
  data() {
    return {
      search: '',
      orderList: [],
      headers: [{
        text: 'ວັນທີ',
        align: 'center',
        value: 'txn_date',
        sortable: true
      }, {
        text: 'ລະຫັດສິນຄ້າ',
        align: 'center',
        value: 'product_id'
      }, {
        text: 'ຈຳນວນ',
        align: 'center',
        value: 'product_amount'
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'product_price',
        sortable: true
      }, {
        text: 'ລວມ',
        align: 'end',
        value: 'order_price_total',
        sortable: false
      }, {
        text: 'ສະຖານະ',
        align: 'end',
        value: 'recordStatusText',
        sortable: false
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/OrderDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OrderDetailvue_type_script_lang_js_ = (OrderDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/OrderDetail.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OrderDetailvue_type_script_lang_js_,
  OrderDetailvue_type_template_id_4e790339_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "584c07bc"
  
)

/* harmony default export */ var OrderDetail = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=order-detail.js.map