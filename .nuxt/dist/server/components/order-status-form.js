exports.ids = [116];
exports.modules = {

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(409);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(404);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(428);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderStatusForm.vue?vue&type=template&id=06313687
















var OrderStatusFormvue_type_template_id_06313687_render = function render() {
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
  }, [_vm._v("mdi-label")]), _vm._v("\n        ຮັບເຄື່ອງ " + _vm._s(_vm.confirmEntries.length) + " ລາຍການ\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_vm._l(_vm.confirmEntries, function (order, idx) {
    return _c(VCard["a" /* default */], {
      key: idx,
      staticClass: "mb-2 pa-0"
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-0"
    }, [_c(VRow["a" /* default */], {
      staticClass: "pa-0 ma-0"
    }, [_c(VRow["a" /* default */], {
      staticClass: "pa-2",
      attrs: {
        "align": "center"
      }
    }, [_c(VCol["a" /* default */], {
      attrs: {
        "cols": "12"
      }
    }, [_c(VTextField["a" /* default */], {
      attrs: {
        "label": "* ເບີໂທ"
      },
      on: {
        "input": function ($event) {
          return _vm.testMyTrigger(idx);
        }
      },
      model: {
        value: order.client.telephone,
        callback: function ($$v) {
          _vm.$set(order.client, "telephone", $$v);
        },
        expression: "order.client.telephone"
      }
    })], 1), _vm._v(" "), _vm.clientOption.length > 0 && _vm.customerOptionForOrderId == idx ? _c(VCol["a" /* default */], {
      attrs: {
        "cols": "12"
      }
    }, _vm._l(_vm.clientOption, function (client) {
      return _c(VCard["a" /* default */], {
        key: client['id']
      }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
        attrs: {
          "cols": "8"
        }
      }, [_vm._v("\n                          " + _vm._s(client['name'].concat(' - ').concat(client['telephone'])) + "\n                        ")]), _vm._v(" "), _c(VCol["a" /* default */], {
        attrs: {
          "cols": "2",
          "align-self": "center"
        }
      }, [_c(VBtn["a" /* default */], {
        attrs: {
          "color": "primary",
          "rounded": "",
          "variant": "text"
        },
        on: {
          "click": function ($event) {
            return _vm.selectedClientNew(client['id'], idx);
          }
        }
      }, [_c('i', {
        staticClass: "fa-regular fa-circle-check"
      })])], 1)], 1)], 1)], 1);
    }), 1) : _vm._e()], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "1"
      }
    }, [_c(VTextField["a" /* default */], {
      attrs: {
        "label": "* ຊື່ລູກຄ້າ"
      },
      model: {
        value: order.client.name,
        callback: function ($$v) {
          _vm.$set(order.client, "name", $$v);
        },
        expression: "order.client.name"
      }
    })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "2"
      }
    }, [_c(VTextField["a" /* default */], {
      attrs: {
        "disabled": "",
        "label": "* Tracking No."
      },
      model: {
        value: order.trackingNumber,
        callback: function ($$v) {
          _vm.$set(order, "trackingNumber", $$v);
        },
        expression: "order.trackingNumber"
      }
    })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "1"
      }
    }, [_c(VTextField["a" /* default */], {
      attrs: {
        "label": "* ຄ່າສົ່ງ"
      },
      model: {
        value: order.shippingFee,
        callback: function ($$v) {
          _vm.$set(order, "shippingFee", $$v);
        },
        expression: "order.shippingFee"
      }
    })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "1"
      }
    }, [_c(VAutocomplete["a" /* default */], {
      attrs: {
        "item-text": "code",
        "item-value": "id",
        "items": _vm.currencyList,
        "label": "ສະກຸນເງິນ*"
      },
      on: {
        "input": function ($event) {
          return _vm.currencyChange(order);
        }
      },
      model: {
        value: order.shippingFeeCurrencyId,
        callback: function ($$v) {
          _vm.$set(order, "shippingFeeCurrencyId", $$v);
        },
        expression: "order.shippingFeeCurrencyId"
      }
    })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "1"
      }
    }, [_c(VTextField["a" /* default */], {
      attrs: {
        "disabled": "",
        "label": "ອັດຕາແລກປ່ຽນ"
      },
      model: {
        value: order.shippingRate,
        callback: function ($$v) {
          _vm.$set(order, "shippingRate", $$v);
        },
        expression: "order.shippingRate"
      }
    })], 1), _vm._v(" "), _vm.orderStatus == 'INVOICED' ? _c(VCol["a" /* default */], {
      attrs: {
        "cols": "1"
      }
    }, [_c(VAutocomplete["a" /* default */], {
      attrs: {
        "item-text": "payment_code",
        "item-value": "id",
        "items": _vm.paymentList,
        "label": "ການຊຳລະ*"
      },
      model: {
        value: order.paymentId,
        callback: function ($$v) {
          _vm.$set(order, "paymentId", $$v);
        },
        expression: "order.paymentId"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "1",
        "align-self": "center"
      }
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "color": "warning",
        "rounded": "",
        "variant": "text"
      },
      on: {
        "click": function ($event) {
          return _vm.removeItemFromConfirmEntrie(order);
        }
      }
    }, [_c('i', {
      staticClass: "fa-solid fa-circle-xmark"
    })])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "1",
        "align-self": "center"
      }
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "color": "primary",
        "rounded": "",
        "variant": "text"
      },
      on: {
        "click": function ($event) {
          return _vm.confirmOrder(order);
        }
      }
    }, [_c('i', {
      staticClass: "fa-regular fa-circle-check"
    })])], 1), _vm._v(" "), _vm.orderStatus == 'INVOICED' ? _c(VCol["a" /* default */], {
      attrs: {
        "cols": "1",
        "align-self": "center"
      }
    }, [_c(VBtn["a" /* default */], {
      attrs: {
        "color": "primary",
        "rounded": "",
        "variant": "text"
      },
      on: {
        "click": function ($event) {
          _vm.confirmOrder(order);
          _vm.printTicket(order);
        }
      }
    }, [_c('i', {
      staticClass: "fa-regular fa-circle-check"
    }), _vm._v("\n                  &\n                  "), _c('i', {
      staticClass: "fa-solid fa-print"
    })])], 1) : _vm._e()], 1)], 1)], 1);
  }), _vm._v(" "), _c(VDivider["a" /* default */])], 2), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        _vm.orderStatus == 'RECEIVED' ? _vm.clearStockList() : _vm.clearPaymentList();
        _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        Close\n      ")]), _vm._v(" "), _vm.orderStatus == 'INVOICED' ? _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.merceEntryToPrint
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-clipboard-check"
  }), _vm._v("\n        ອອກບິນໃຫ້ລູກຄ້າ\n      ")]) : _vm._e(), _vm._v(" "), _c('canvas', {
    ref: "barcodeCanvas",
    style: {
      display: _vm.showCanvas ? 'block' : 'none'
    }
  })], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OrderStatusForm.vue?vue&type=template&id=06313687

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(42);

// EXTERNAL MODULE: ./common/api.js
var common_api = __webpack_require__(41);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderStatusForm.vue?vue&type=script&lang=js




/* harmony default export */ var OrderStatusFormvue_type_script_lang_js = ({
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
    },
    orderStatus: {
      type: String,
      default: 'RECEIVED'
    }
  },
  data() {
    return {
      showCanvas: false,
      barcodeImage: '',
      customerOptionForOrderId: null,
      timeoutId: null,
      customerTel: null,
      confirmEntries: [],
      lockSuggest: false,
      clientOption: [],
      status: ['ORDERED', 'RECEIVED', 'INVOICED'],
      isloading: false
    };
  },
  async mounted() {
    // ENHANCED: Preload company data for API logos
    try {
      await Object(common_api["d" /* preloadCompanyData */])(this.$axios);
      console.log('Company data preloaded for shipping confirmation');
    } catch (error) {
      console.warn('Company preload failed, using fallback:', error);
    }
    if (this.orderStatus == 'INVOICED') {
      // We cannot change client data comming from state,
      //we have to clone data from state to new variable
      this.confirmEntries = this.$store.state.listOfConfirmPaymentOrder.map(order => ({
        ...JSON.parse(JSON.stringify(order))
      }));
      console.log(`$$$$$$$$$  PAYMENT LIST [${this.confirmEntries.length}] $$$$$$$$$$`);
      for (const iterator of this.confirmEntries) {
        iterator['paymentId'] = this.paymentList[0]['id'];
      }
    } else {
      // We cannot change client data comming from state,
      // we have to clone data from state to new variable
      this.confirmEntries = this.$store.state.listOfConfirmStockInOrder.map(order => ({
        ...JSON.parse(JSON.stringify(order))
      }));
      console.log(`$$$$$$$$$ STOCK LIST [${this.confirmEntries.length}] $$$$$$$$$$`);
    }
    for (const iterator of this.confirmEntries) {
      iterator['status'] = this.orderStatus;
      iterator['custel'] = iterator['client']['telephone'];
      iterator['cusname'] = iterator['client']['name'];
      // this.confirmEntries1.push(iterator)
    }
  },
  // watch: {
  //     'order.client.telephone':(newVal)=>{
  //         console.log(`DATA CHANGE...`);
  //         this.handleTypingEvent()
  //         // this.debouncedGetSuggestions(newVal)
  //     },
  // },
  methods: {
    handleButtonClick() {
      console.log(`LIKE BUTTON CLICK`);
    },
    testMyTrigger(orderId) {
      console.log(`Typing on order id: ${orderId}`);
      this.customerOptionForOrderId = orderId;
      this.customerTel = this.confirmEntries[orderId]['client']['telephone'];
      if (this.clientList != undefined) {
        this.clientOption = this.clientList;
        console.log(`TIMER ${this.timeoutId}`);
        if (this.timeoutId == null) {
          this.timeoutId = setTimeout(() => {
            console.log(`******Reset auto suggest*******`);
            this.clientOption = [];
            this.timeoutId = null;
          }, 5000);
        }
      }
    },
    selectedClientNew(newVal, orderId) {
      console.log(`SELECT CLIENT CLICK`);
      const newClient = this.findAllClient.find(el => el.id == newVal);
      if (newClient != undefined) {
        this.lockSuggest = true;
        // this.confirmEntries[orderId]['client']['id'] = newClient['id']
        this.confirmEntries[orderId]['client']['name'] = newClient['name'];
        this.confirmEntries[orderId]['client']['telephone'] = newClient['telephone'];
        this.clientOption = [];
        this.timeoutId = setTimeout(() => {
          console.log(`******Reset auto suggest*******`);
          this.lockSuggest = false;
        }, 5000);
      }
    },
    ...Object(external_vuex_["mapActions"])(['removeOrderFromStockConfirm', 'removeOrderFromPaymentConfirm', 'clearPaymentList', 'clearStockList']),
    formatNumber(val) {
      return Object(common["e" /* getFormatNum */])(val);
    },
    async bulkUpdateStatus() {
      if (this.isloading) return;
      this.isloading = true;
      console.log(`order len==== ${this.confirmEntries.length}`);
      for (let index = 0; index < this.confirmEntries.length; index++) {
        console.log(`LOOP ####${index}`);
        const order = this.confirmEntries[index];
        let api = `api/order/update/${order.id}`;
        if (!order.id) api = `api/order/create`;
        order.userId = this.user.id;
        order.locationId = this.currentTerminal['locationId'];
        try {
          if (order.id) {
            const response = await this.$axios.put(api, order);
          } else {
            const response = await this.$axios.post(api, order);
          }
        } catch (error) {
          return Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
      }
      console.log(`START REMOVING ENTRY FROM STATE`);
      this.clearAllFromConfirmEntrie();
      this.$emit('close-dialog');
      this.refreshData();
      this.isloading = false;
      // return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
    },
    generateBarcodeImage(barcode) {
      // Generate a random 12-digit number as the barcode value
      // Get the canvas element using the ref attribute
      const canvas = this.$refs.barcodeCanvas;
      console.log(`.....Canvas logger.....`);
      console.log(canvas);
      console.log(canvas.width, canvas.height);
      // Set the canvas width and height to match the paper size
      canvas.width = 40;
      canvas.height = 20;
      // Generate the barcode image using JsBarcode
      JsBarcode(canvas, barcode, {
        format: 'code128',
        displayValue: true,
        fontSize: 20
        // margin: 10
      });

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL();
    },
    // ENHANCED: Bulk print with API logo support
    async merceEntryToPrint() {
      this.generateBarcodeImage(this.confirmEntries[0]['trackingNumber']);
      let txnListHtml = ``;
      for (const item of this.confirmEntries) {
        const price = item.shippingFee * item.shippingRate;
        txnListHtml += `<div class="ticket">
            <div class="product-name">${item.name}</div>
            <div class="price">  ${this.formatNumber(price)}</div>
        </div>
        <div class="product-name">${item.trackingNumber} X ${this.formatNumber(price)}</div>
        <br>
            `;
      }
      const today = new Date();
      let totalHtml = `
<div class="ticket">
            <div class="product-name"></div>
        <div class="price">THB ${this.formatNumber(this.ticketTotal)}</div>
    </div>`;

      // ENHANCED: Use dynamic company logo with API priority
      const logoHtml = this.getCompanyLogoHtml();
      const companyName = this.getCompanyName();
      const companyTel = this.getCompanyTelephone();
      const windowContent = `
 ${this.ticketCommon.header}
    <body>
        <div style="text-align: center;">
            ${logoHtml}
        </div>
        <h3>${companyName}</h3>
        <h3>ໃບຮັບເງິນ</h3>
        <h5>ວັນທີ ${today.toLocaleString()}</h5>
        <h5>Ticket ${this.confirmEntries[0].id}</h5>
        <h5>Tel ${companyTel}</h5>
        <h5>ຜູ້ຂາຍ: ${this.user.cus_name}</h5>
        <h5>ຜູ້ຮັບ: ${this.confirmEntries[0]['client']['name']}</h5>
        <hr style="margin-top: 50px;"></hr>
        ${txnListHtml}
        <hr></hr>
        ${totalHtml}
        <h2 style="text-align: center; margin-top: 50px;"><img src="${this.barcodeImage}"></h2>
        <h2 style="text-align: center; margin-top: 50px;">THANKYOU</h2>
        
    </body>
    </html>
`;
      const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
      printWin.document.open();
      printWin.document.write(windowContent);
      this.bulkUpdateStatus();
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
    },
    // ENHANCED: Single ticket print with API logo support
    printTicket(item) {
      console.log(`${JSON.stringify(item)}`);
      let txnListHtml = ``;
      const price = item.shippingFee * item.shippingRate;
      this.generateBarcodeImage(item['trackingNumber']);
      txnListHtml += `<div class="ticket">
                    <div class="product-name">${item.name}</div>
                    <div class="price">  ${this.formatNumber(price)}</div>
                </div>
                <div class="product-name">${item.trackingNumber} X ${this.formatNumber(price)}</div>
                <br>
                    `;
      const today = new Date();
      let totalHtml = `
      <div class="ticket">
                    <div class="product-name"></div>
                <div class="price">${this.findCurrencyById(item['shippingFeeCurrencyId'])} ${this.formatNumber(item['shippingFee'])}</div>
            </div>`;

      // ENHANCED: Use dynamic company logo with API priority
      const logoHtml = this.getCompanyLogoHtml();
      const companyName = this.getCompanyName();
      const companyTel = this.getCompanyTelephone();
      const windowContent = `
         ${this.ticketCommon.header}
            <body>
                <div style="text-align: center;">
                    ${logoHtml}
                </div>
                <h3>${companyName}</h3>
                <h3>ໃບຮັບເງິນ</h3>
                <h5>ວັນທີ ${today.toLocaleString()}</h5>
                <h5>Ticket ${item.id}</h5>
                <h5>Tel ${companyTel}</h5>
                <h5>ຜູ້ຂາຍ: ${this.user.cus_name}</h5>
                <h5>ຜູ້ຮັບ: ${item['client']['name']}</h5>
                <hr style="margin-top: 50px;"></hr>
                ${txnListHtml}
                <hr></hr>
                ${totalHtml}
                <h2 style="text-align: center; margin-top: 50px;"><img src="${this.barcodeImage}"></h2>
                <h2 style="text-align: center; margin-top: 50px;">THANKYOU</h2>
                
            </body>
            </html>
        `;
      const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
      printWin.document.open();
      printWin.document.write(windowContent);
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
    },
    // ENHANCED: Helper methods for company information
    getCompanyLogoHtml() {
      // Try to get the actual logo URL (API or static)
      const logoUrl = this.companyLogo;
      if (logoUrl && !logoUrl.includes('default-logo')) {
        return `<img src="${logoUrl}" alt="Company Logo" width="100" height="100" style="max-width: 100px; max-height: 100px; object-fit: contain;">`;
      } else {
        // Fallback: show company initials if no logo
        const companyName = this.getCompanyName();
        const initials = companyName.substring(0, 2).toUpperCase();
        return `<div style="width: 100px; height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 24px; font-weight: bold; color: #666; margin: 0 auto;">${initials}</div>`;
      }
    },
    getCompanyName() {
      var _this$currentTerminal, _this$currentTerminal2, _this$currentTerminal3;
      const company = this.companyData;

      // 1. Try API company name first
      if (company.apiData && company.apiData.name) {
        return company.apiData.name;
      }

      // 2. Try static company name
      if (company.name) {
        return company.name;
      }

      // 3. Try terminal company name
      if ((_this$currentTerminal = this.currentTerminal) !== null && _this$currentTerminal !== void 0 && (_this$currentTerminal2 = _this$currentTerminal.location) !== null && _this$currentTerminal2 !== void 0 && (_this$currentTerminal3 = _this$currentTerminal2.company) !== null && _this$currentTerminal3 !== void 0 && _this$currentTerminal3.name) {
        return this.currentTerminal.location.company.name;
      }

      // 4. Default fallback
      return 'ເຈ້ນ່ອງ ຂົນສົ່ງ ໄທ-ລາວ';
    },
    getCompanyTelephone() {
      var _this$currentTerminal4, _this$currentTerminal5, _this$currentTerminal6;
      const company = this.companyData;

      // 1. Try API company telephone first
      if (company.apiData && company.apiData.tel) {
        return company.apiData.tel;
      }

      // 2. Try static company telephone
      if (company.tel) {
        return company.tel;
      }

      // 3. Try terminal company telephone
      if ((_this$currentTerminal4 = this.currentTerminal) !== null && _this$currentTerminal4 !== void 0 && (_this$currentTerminal5 = _this$currentTerminal4.location) !== null && _this$currentTerminal5 !== void 0 && (_this$currentTerminal6 = _this$currentTerminal5.company) !== null && _this$currentTerminal6 !== void 0 && _this$currentTerminal6.tel) {
        return this.currentTerminal.location.company.tel;
      }

      // 4. Default fallback
      return 'N/A';
    },
    currencyChange(order) {
      const orderIdx = this.confirmEntries.indexOf(order);
      const currency = this.currencyList.find(el => el['id'] == this.confirmEntries[orderIdx].shippingFeeCurrencyId);
      if (!currency) return;
      this.confirmEntries[orderIdx].shippingRate = currency['rate'];
    },
    removeItemFromConfirmEntrie(entry) {
      const index = this.confirmEntries.indexOf(entry);
      this.confirmEntries.splice(index, 1);
      // ***** remove from state *****
      if (this.orderStatus == 'RECEIVED') {
        this.removeOrderFromStockConfirm(entry);
      } else {
        this.removeOrderFromPaymentConfirm(entry);
      }
    },
    clearAllFromConfirmEntrie() {
      this.confirmEntries = [];
      // ***** remove from state *****
      if (this.orderStatus == 'RECEIVED') {
        this.removeOrderFromStockConfirm(entry);
      } else {
        this.clearPaymentList();
      }
    },
    async confirmOrder(order) {
      // if(order['shippingFee']<=0 && this.orderStatus=='RECEIVED') return swalError2(this.$swal, "Error", 'ກະລຸນາໃສ່ຄ່າສົ່ງ');
      if (order['shippingFee'] <= 0) return Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ກະລຸນາໃສ່ຄ່າສົ່ງ');
      if (!this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        // IF ORDER ID IS NOT FOUND WE WILL CREATE
        let api = `api/order/update/${order.id}`;
        if (!order.id) {
          api = `api/order/create`;
        }
        order.userId = this.user.id;
        order.locationId = this.currentTerminal['locationId'];
        try {
          if (!order.id) {
            console.log(`CREATEING ORDER AND CHANGE DATA STATE`);
            const response = await this.$axios.post(api, order);
          } else {
            const response = await this.$axios.put(api, order);
          }
          // *** remove from state ****
          this.removeItemFromConfirmEntrie(order);
          this.refreshData();
          Object(common["l" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
        } catch (error) {
          console.log('Error: ', error);
          Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    refreshData() {
      this.$emit('reload-data');
    },
    findCurrencyById(id) {
      return this.findAllCurrency.find(el => el['id'] == id)['code'];
    }
  },
  computed: {
    // ENHANCED: Company data with API integration
    companyData() {
      console.log(`**********ENHANCED COMPANY DATA**********`);
      const company = Object(common_api["b" /* mainCompanyInfo */])();
      console.log('Company info:', company);
      return company;
    },
    // ENHANCED: Company logo with API priority and smart fallbacks
    companyLogo() {
      const company = this.companyData;

      // 1. Try API logo first (highest priority)
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || '';
        const logoUrl = `${baseUrl}/${company.apiData.profile_image_path}`;
        console.log('Using API logo for shipping:', logoUrl);
        return logoUrl;
      }

      // 2. Try static logo from company data
      if (company.ticketLogo) {
        try {
          const staticLogo = __webpack_require__(143)(`./${company.ticketLogo}`);
          console.log('Using static logo for shipping:', company.ticketLogo);
          return staticLogo;
        } catch (error) {
          console.warn('Static logo not found for shipping:', company.ticketLogo, error);
        }
      }

      // 3. Try dcLogo fallback
      if (company.dcLogo) {
        try {
          const fallbackLogo = __webpack_require__(143)(`./${company.dcLogo}`);
          console.log('Using dcLogo fallback for shipping:', company.dcLogo);
          return fallbackLogo;
        } catch (error) {
          console.warn('dcLogo not found for shipping:', company.dcLogo, error);
        }
      }

      // 4. Final fallback
      console.log('Using final fallback logo for shipping');
      return '/static/images/default-logo.png';
    },
    user() {
      return this.$auth.user || '';
    },
    clientList() {
      return this.findAllClient.filter(el => el.telephone.includes(this.customerTel));
    },
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    ticketCommon() {
      return Object(common["m" /* ticketHtml */])();
    },
    currencyList() {
      return this.findAllCurrency;
    },
    ticketTotal() {
      const totalAmount = this.confirmEntries.reduce((accumulator, currentItem) => {
        return accumulator + currentItem['shippingFee'] * currentItem['shippingRate'];
      }, 0);
      return totalAmount;
    },
    paymentList() {
      return this.findAllPayment;
    },
    ...Object(external_vuex_["mapGetters"])(['findAllListOfConfirmPayment', 'findAllListOfConfirmStockIn', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal'])
  }
});
// CONCATENATED MODULE: ./components/OrderStatusForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_OrderStatusFormvue_type_script_lang_js = (OrderStatusFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/OrderStatusForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OrderStatusFormvue_type_script_lang_js,
  OrderStatusFormvue_type_template_id_06313687_render,
  staticRenderFns,
  false,
  null,
  null,
  "3749cb41"
  
)

/* harmony default export */ var OrderStatusForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(67).default})


/***/ })

};;
//# sourceMappingURL=order-status-form.js.map