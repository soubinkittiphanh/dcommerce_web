exports.ids = [272];
exports.modules = {

/***/ 1210:
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
var VCol = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/lottery/index.vue?vue&type=template&id=3d77fd73&







var lotteryvue_type_template_id_3d77fd73_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VCard["a" /* default */], {
    directives: [{
      name: "scroll-y",
      rawName: "v-scroll-y",
      value: _vm.onScroll,
      expression: "onScroll"
    }],
    staticClass: "pa-4",
    staticStyle: {
      "height": "42vh",
      "overflow-y": "auto",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "right": "0",
      "z-index": "1"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, _vm._l(_vm.oddEvenList['evenIndexList'], function (txn, i) {
    return _c(VCard["a" /* default */], {
      key: i,
      attrs: {
        "height": "60",
        "image": "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "theme": "dark"
      }
    }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
      staticStyle: {
        "display": "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }
    }, [_c('div', [_c('h4', [_vm._v("\n                                    " + _vm._s(txn['luckyNumber']) + " " + _vm._s(txn['normal'] ? 'ລ່າງ' : 'ບົນ') + "\n                                ")]), _vm._v(_vm._s(_vm.thoundsandFormatter(txn['amount'])) + "\n                            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "color": "warning",
        "rounded": "",
        "variant": "text"
      },
      on: {
        "click": function ($event) {
          return _vm.removeTransaction(txn);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })])], 1)])], 1);
  }), 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, _vm._l(_vm.oddEvenList['oddIndexList'], function (txn, i) {
    return _c(VCard["a" /* default */], {
      key: i,
      attrs: {
        "height": "60",
        "image": "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "theme": "dark"
      }
    }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
      staticStyle: {
        "display": "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }
    }, [_c('div', [_c('h4', [_vm._v("\n                                    " + _vm._s(txn['luckyNumber']) + " " + _vm._s(txn['normal'] ? 'ລ່າງ' : 'ບົນ') + "\n                                ")]), _vm._v(_vm._s(_vm.thoundsandFormatter(txn['amount'])) + "\n                            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "color": "warning",
        "rounded": "",
        "variant": "text"
      },
      on: {
        "click": function ($event) {
          return _vm.removeTransaction(txn);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    })])], 1)])], 1);
  }), 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticStyle: {
      "height": "10vh",
      "position": "fixed",
      "left": "0",
      "right": "0",
      "z-index": "2",
      "margin-top": "40vh"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "ma-0"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticClass: "pa-0",
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "outlined": "",
      "label": "* ເລກສ່ຽງ"
    },
    on: {
      "input": _vm.luckyNumberTypingTrigger,
      "focus": _vm.luckyNumberTypingTrigger
    },
    model: {
      value: _vm.luckyNumber,
      callback: function ($$v) {
        _vm.luckyNumber = $$v;
      },
      expression: "luckyNumber"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pa-0",
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "outlined": "",
      "label": "* ຈຳນວນ ລ່າງ"
    },
    on: {
      "input": _vm.amountTypingTrigger
    },
    model: {
      value: _vm.amount,
      callback: function ($$v) {
        _vm.amount = $$v;
      },
      expression: "amount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pa-0",
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "outlined": "",
      "label": "* ຈຳນວນ ບົນ"
    },
    on: {
      "input": _vm.amountUpTypingTrigger
    },
    model: {
      value: _vm.amountUp,
      callback: function ($$v) {
        _vm.amountUp = $$v;
      },
      expression: "amountUp"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "width": "20",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.addTransaction
    }
  }, [_vm._v("\n                        ເພີ່ມ\n                    ")])], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticStyle: {
      "height": "20vh",
      "position": "fixed",
      "left": "0",
      "right": "0",
      "z-index": "2",
      "margin-top": "50vh"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_c('h2', [_vm._v("\n                        ຍອດລວມ: " + _vm._s(_vm.ticketTotal) + "\n                    ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "variant": "text"
    },
    on: {
      "click": _vm.generateTicket
    }
  }, [_c('h2', [_vm._v("\n                            ລວມບິນ\n                        ")])])], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm.luckyNumberOption ? _c(VCard["a" /* default */], {
    staticClass: "text-center transparent",
    staticStyle: {
      "width": "100%",
      "overflow-y": "auto",
      "position": "fixed",
      "left": "0",
      "z-index": "2",
      "bottom": "60vh"
    },
    on: {
      "scroll": _vm.onScrollLuckyNumber
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "ma-1",
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.selectLuckyNumber
    }
  }, [_vm._v("\n            " + _vm._s(_vm.luckyNumberOptionLable) + "\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ma-1",
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.showPrefixOption
    }
  }, [_vm._v("\n            ເພີ່ມຫລັກ\n        ")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.amountOption ? _c(VCard["a" /* default */], {
    staticClass: "text-center transparent",
    staticStyle: {
      "width": "100%",
      "overflow-x": "auto",
      "position": "fixed",
      "z-index": "2",
      "bottom": "60vh",
      "left": "0",
      "right": "0"
    },
    on: {
      "scroll": _vm.onScrollAmount
    }
  }, _vm._l(_vm.amountOptionForSelect, function (op, i) {
    return _c(VBtn["a" /* default */], {
      key: i,
      staticClass: "ma-1",
      attrs: {
        "color": "primary",
        "width": "20",
        "rounded": "",
        "variant": "text"
      },
      on: {
        "click": function ($event) {
          return _vm.selectAmount(op);
        }
      }
    }, [_vm._v("\n            " + _vm._s(_vm.thoundsandFormatter(op)) + "\n        ")]);
  }), 1) : _vm._e(), _vm._ssrNode(" "), _vm.amountOptionUp ? _c(VCard["a" /* default */], {
    staticClass: "text-center transparent",
    staticStyle: {
      "width": "100%",
      "overflow-x": "auto",
      "position": "fixed",
      "z-index": "2",
      "bottom": "60vh",
      "left": "0",
      "right": "0"
    },
    on: {
      "scroll": _vm.onScrollAmountUP
    }
  }, _vm._l(_vm.amountOptionForSelect, function (op, i) {
    return _c(VBtn["a" /* default */], {
      key: i,
      staticClass: "ma-1",
      attrs: {
        "color": "primary",
        "width": "20",
        "rounded": "",
        "variant": "text"
      },
      on: {
        "click": function ($event) {
          return _vm.selectAmountUP(op);
        }
      }
    }, [_vm._v("\n            " + _vm._s(_vm.thoundsandFormatter(op)) + "\n        ")]);
  }), 1) : _vm._e(), _vm._ssrNode(" "), _vm.prefixOption ? _c(VCard["a" /* default */], {
    staticClass: "text-center",
    staticStyle: {
      "width": "35%",
      "overflow-y": "auto",
      "position": "fixed",
      "margin-left": "40%",
      "z-index": "2",
      "bottom": "60%"
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "outlined": "",
      "label": "* ຫລັກ"
    },
    model: {
      value: _vm.prefixValue,
      callback: function ($$v) {
        _vm.prefixValue = $$v;
      },
      expression: "prefixValue"
    }
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ma-1",
    attrs: {
      "color": "primary",
      "width": "20",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.setPrefix(_vm.prefixValue);
      }
    }
  }, [_vm._v("\n                ຕົກລົງ\n            ")])], 1)], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pos/lottery/index.vue?vue&type=template&id=3d77fd73&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/lottery/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lotteryvue_type_script_lang_js_ = ({
  layout: "login",
  // middleware: 'auths',
  data() {
    return {
      prefixOption: false,
      prefixValue: "",
      timeoutId: null,
      amountUpTimeoutId: null,
      luckyNumberTimeoutId: null,
      amountOptionUp: false,
      amountOption: false,
      luckyNumberOption: false,
      luckyNumberOptionForSelect: [],
      amountOptionForSelect: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
      transactionList: [
        // { luckyNumber: '00', amount: 1000, normal: true, },
      ],
      maxLength: 3,
      luckyNumber: '',
      amount: 0,
      amountUp: 0,
      screenWidth: 0,
      screenHeight: 0,
      rules: {
        maxLength: v => v.length <= 5 || 'Maximum length is 5 characters'
      }
    };
  },
  mounted() {
    this.getScreenSize();
    // Listen for window resize events to update the screen size dynamically
    window.addEventListener('resize', this.getScreenSize);
  },
  beforeDestroy() {
    // Remove the resize event listener when the component is destroyed
    window.removeEventListener('resize', this.getScreenSize);
  },
  computed: {
    oddEvenList() {
      const oddIndexList = [];
      const evenIndexList = [];
      this.transactionList.forEach((item, index) => {
        if (index % 2 === 0) {
          evenIndexList.push(item);
        } else {
          oddIndexList.push(item);
        }
      });
      return {
        oddIndexList,
        evenIndexList
      };
    },
    ticketTotal() {
      const totalPrice = this.transactionList.reduce((total, item) => {
        return total + item['amount'];
      }, 0);
      return this.thoundsandFormatter(totalPrice);
    },
    luckyNumberOptionLable() {
      let label = "";
      const lastItemIndex = this.luckyNumberOptionForSelect.length - 1;
      for (let i = 0; i < this.luckyNumberOptionForSelect.length; i++) {
        label += this.luckyNumberOptionForSelect[i];
        if (i < lastItemIndex) {
          label += ",";
        }
      }
      return label;
    }
  },
  methods: {
    showPrefixOption() {
      this.prefixOption = true;
      this.luckyNumberTypingTrigger();
    },
    amountTypingTrigger() {
      console.log(`Amount is typing...`);
      this.amountOption = true;
      this.luckyNumberOption = false;
      // Clear existing timeout
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId);
      }

      // Set a new timeout using debounce
      this.timeoutId = setTimeout(() => {
        console.log(`******Reset auto suggest*******`);
        this.timeoutId = null;
        this.amountOption = false;
      }, 2500);
    },
    amountUpTypingTrigger() {
      console.log(`Amount up is typing...`);
      this.amountOptionUp = true;
      this.amountOption = false;
      // *********** close lucky number popup ***********
      this.luckyNumberOption = false;
      // *********** close lucky number popup ***********

      // Clear existing timeout
      if (this.amountUpTimeoutId !== null) {
        clearTimeout(this.amountUpTimeoutId);
      }

      // Set a new timeout using debounce
      this.amountUpTimeoutId = setTimeout(() => {
        console.log(`******Reset auto suggest*******`);
        this.amountUpTimeoutId = null;
        this.amountOptionUp = false;
      }, 2500);
    },
    luckyNumberTypingTrigger() {
      console.log(`LuckyNumber is typing...`);
      // this.luckyNumberOptionForSelect.length = 0;
      if (this.luckyNumber.includes(',')) {
        this.luckyNumberOption = true;
        return this.luckyNumberOptionForSelect = this.luckyNumber.split(',');
      }
      ;
      this.luckyNumberOption = true;
      this.amountOption = false;
      // Clear existing timeout
      if (this.luckyNumberTimeoutId !== null) {
        clearTimeout(this.luckyNumberTimeoutId);
      }
      this.luckyNumberTimeoutId = setTimeout(() => {
        console.log(`******Reset auto suggest*******`);
        this.luckyNumberTimeoutId = null;
        this.luckyNumberOption = false;
      }, 5000);

      // Logic to take related lucky number to option
      const foundLuckyNumberGroup = this.findLuckyNumberGrouping(this.luckyNumber.substring(this.luckyNumber.length - 2), this.luckyNumber.length);
      if (foundLuckyNumberGroup != undefined) {
        console.log(`GROUP INDEX FOUND ${foundLuckyNumberGroup.toString()}`);
        let prefix = "";
        if (this.luckyNumber.length > 2) {
          prefix = this.luckyNumber.substring(0, this.luckyNumber.length - 2);
          const listOptionWithPrefix = [];
          for (const iterator of foundLuckyNumberGroup) {
            listOptionWithPrefix.push(prefix + iterator);
          }
          this.luckyNumberOptionForSelect = listOptionWithPrefix;
        } else {
          this.luckyNumberOptionForSelect = foundLuckyNumberGroup;
        }
      }
    },
    selectAmount(amount) {
      console.log(`AMOUNT BELOW SELECTED ${amount}`);
      this.amountOption = false;
      this.amount = amount;
    },
    selectAmountUP(amount) {
      console.log(`AMOUNT UP SELECTED ${amount}`);
      this.amountOptionUp = false;
      this.amountUp = amount;
    },
    selectLuckyNumber() {
      // if (this.amount < 1000) return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາໃສ່ຈຳນວນເງິນ 1000 ຂັ້ນຕ່ຳ")
      // for (const iterator of this.luckyNumberOptionForSelect) {
      //     if (iterator.length > this.maxLength) return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ທາງເຮົາຂາຍສະເພາະເລກ 3 ຕົວ")
      //     const existTxn = this.transactionList.find(el => el['luckyNumber'] == iterator && el['normal'] == true)
      //     if (existTxn != undefined) {
      //         existTxn['amount'] += parseInt(this.amount, 10);
      //         continue
      //     }
      //     this.transactionList.push(
      //         { luckyNumber: iterator, amount: this.amount, normal: true },
      //     )
      // }
      // if (this.amountUp > 0) this.selectLuckyNumberUP()
      // this.luckyNumberOption = false
      console.log(`LUCKY NUMBER LIST ${this.luckyNumberOptionLable}`);
      const temp = this.luckyNumberOptionLable.split(',');

      // Remove any empty strings resulting from leading/trailing commas
      const filteredTemp = temp.filter(item => item.trim());
      console.log(`FILTER ${filteredTemp.join(',').toString()}`);
      this.luckyNumber = filteredTemp.join(',');
      // ********** Remove lucky number option after selected ***********
      this.luckyNumberOptionForSelect = [];
    },
    selectLuckyNumberUP() {
      if (this.amountUp < 1000) return Object(common["j" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາໃສ່ຈຳນວນເງິນ 1000 ຂັ້ນຕ່ຳ");
      for (const iterator of this.luckyNumberOptionForSelect) {
        if (iterator.length > this.maxLength) return Object(common["j" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ທາງເຮົາຂາຍສະເພາະເລກ 3 ຕົວ");
        const existTxn = this.transactionList.find(el => el['luckyNumber'] == iterator && el['normal'] == false);
        if (existTxn != undefined) {
          existTxn['amount'] += parseInt(this.amountUp, 10);
          continue;
        }
        this.transactionList.push({
          luckyNumber: iterator,
          amount: parseInt(this.amountUp, 10),
          normal: false
        });
      }
      this.luckyNumberOption = false;
    },
    getScreenSize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    },
    thoundsandFormatter(val) {
      return Object(common["e" /* getFormatNum */])(val);
    },
    setPrefix(prefixNumber) {
      const optionWithPrefix = [];
      for (const iterator of this.luckyNumberOptionForSelect) {
        optionWithPrefix.push(prefixNumber + iterator);
      }
      this.luckyNumberOptionForSelect = optionWithPrefix;
      console.log(`OPTION WITH PREFIX IS ${JSON.stringify(this.luckyNumberOptionForSelect)}`);
      // Clear existing timeout
      if (this.luckyNumberTimeoutId !== null) {
        clearTimeout(this.luckyNumberTimeoutId);
      }
      this.luckyNumberOption = true;
      this.luckyNumberTimeoutId = setTimeout(() => {
        console.log(`******Reset auto suggest*******`);
        this.luckyNumberTimeoutId = null;
        this.luckyNumberOption = false;
      }, 5000);
      this.prefixOption = false;
    },
    addTransaction() {
      if (this.luckyNumber.includes(",")) {
        for (const iterator of this.luckyNumber.split(',')) {
          if (this.amount > 0) {
            if (iterator.length > this.maxLength) return Object(common["j" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ທາງເຮົາຂາຍສະເພາະເລກ 3 ຕົວ");
            const existTxn = this.transactionList.find(el => el['luckyNumber'] == iterator && el['normal'] == true);
            if (existTxn != undefined) {
              existTxn['amount'] += parseInt(this.amount, 10);
            } else {
              this.transactionList.push({
                luckyNumber: iterator,
                amount: this.amount,
                normal: true
              });
            }
          }
          // // AMOUNT UPPER ADD
          if (this.amountUp > 0) {
            if (this.amountUp < 1000) return Object(common["j" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາໃສ່ຈຳນວນເງິນ 1000 ຂັ້ນຕ່ຳ");
            const existTxnUP = this.transactionList.find(el => el['luckyNumber'] == iterator && el['normal'] == false);
            if (existTxnUP != undefined) {
              return existTxnUP['amount'] += parseInt(this.amountUp, 10);
            }
            this.transactionList.push({
              luckyNumber: iterator,
              amount: parseInt(this.amountUp, 10),
              normal: false
            });
          }
        }
        this.luckyNumberOptionForSelect.length = 0;
      } else {
        // Dupplicate check
        if (this.amount > 0) {
          if (this.luckyNumber.length > this.maxLength) return Object(common["j" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ທາງເຮົາຂາຍສະເພາະເລກ 3 ຕົວ");
          const existTxn = this.transactionList.find(el => el['luckyNumber'] == this.luckyNumber && el['normal'] == true);
          if (existTxn != undefined) {
            existTxn['amount'] += parseInt(this.amount, 10);
          } else {
            this.transactionList.push({
              luckyNumber: this.luckyNumber,
              amount: this.amount,
              normal: true
            });
          }
        }
        // AMOUNT UPPER ADD
        if (this.amountUp > 0) {
          if (this.amountUp < 1000) return Object(common["j" /* swalError2 */])(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາໃສ່ຈຳນວນເງິນ 1000 ຂັ້ນຕ່ຳ");
          const existTxnUP = this.transactionList.find(el => el['luckyNumber'] == this.luckyNumber && el['normal'] == false);
          if (existTxnUP != undefined) {
            return existTxnUP['amount'] += parseInt(this.amountUp, 10);
          }
          this.transactionList.push({
            luckyNumber: this.luckyNumber,
            amount: parseInt(this.amountUp, 10),
            normal: false
          });
        }
        this.luckyNumberOptionForSelect.length = 0;
      }
    },
    removeTransaction(element) {
      const indexInOddList = this.transactionList.findIndex(item => item.luckyNumber === element['luckyNumber'] && item.normal == element['normal']);
      this.transactionList.splice(indexInOddList, 1);
    },
    onScrollAmount() {
      console.log(`Amount is scrolling ...`);
      this.amountTypingTrigger();
    },
    onScrollAmountUP() {
      console.log(`Amount is scrolling ...UP`);
      this.amountUpTypingTrigger();
    },
    onScrollLuckyNumber() {
      console.log(`Lucky number is scrolling ...`);
      this.luckyNumberTypingTrigger();
    },
    onScroll() {
      // this.amountTypingTrigger()
      console.log(`ON SCROLL TRIGGER`);
    },
    findLuckyNumberGrouping(groupOf) {
      const luckyNumberGroupList = [['01', '41', '81'], ['02', '42', '82'], ['03', '43', '83'], ['04', '44', '84'], ['05', '45', '85'], ['06', '46', '86'], ['07', '47', '87'], ['08', '48', '88'], ['09', '49', '89'], ['10', '50', '90'], ['11', '51', '91'], ['12', '52', '92'], ['13', '53', '93'], ['14', '54', '94'], ['15', '55', '95'], ['16', '56', '96'], ['17', '57', '97'], ['18', '58', '98'], ['19', '59', '99'], ['00', '20', '60'], ['21', '61'], ['22', '62'], ['23', '63'], ['24', '64'], ['25', '65'], ['26', '66'], ['27', '67'], ['28', '68'], ['29', '69'], ['30', '70'], ['31', '71'], ['32', '72'], ['33', '73'], ['34', '74'], ['35', '75'], ['36', '76'], ['37', '77'], ['38', '78'], ['39', '79'], ['40', '80']];
      return luckyNumberGroupList.find(group => group.includes(groupOf));
    },
    generateTicket() {
      this.$router.push({
        path: '/pos/ticket',
        query: {
          txn: this.transactionList
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/pos/lottery/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pos_lotteryvue_type_script_lang_js_ = (lotteryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/pos/lottery/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_lotteryvue_type_script_lang_js_,
  lotteryvue_type_template_id_3d77fd73_render,
  staticRenderFns,
  false,
  null,
  null,
  "6e086f60"
  
)

/* harmony default export */ var lottery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map