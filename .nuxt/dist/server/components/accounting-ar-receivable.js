exports.ids = [17];
exports.modules = {

/***/ 1072:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ArReceivable.vue?vue&type=template&id=1d22deb8&scoped=true





















var ArReceivablevue_type_template_id_1d22deb8_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "mx-auto"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "280"
    },
    model: {
      value: _vm.isLoading,
      callback: function ($$v) {
        _vm.isLoading = $$v;
      },
      expression: "isLoading"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center py-6"
  }, [_c(VProgressCircular["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "indeterminate": "",
      "color": "primary"
    }
  }), _vm._v(" "), _c('div', [_vm._v("Processing...")])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["d" /* VCardTitle */], {
    staticClass: "d-flex align-center success white--text"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-trending-up")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.isEdit ? 'ແກ້ໄຂ' : 'ເພີ່ມ') + "ລາຍຮັບ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "outlined": "",
      "color": "white",
      "small": ""
    }
  }, [_vm._v("\n      " + _vm._s(_vm.formattedDate) + "\n    ")])], 1), _vm._v(" "), _c(VForm["a" /* default */], {
    ref: "form",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitData.apply(null, arguments);
      }
    },
    model: {
      value: _vm.isFormValid,
      callback: function ($$v) {
        _vm.isFormValid = $$v;
      },
      expression: "isFormValid"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VContainer["a" /* default */], {
    staticClass: "pa-0",
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "8"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເລກເອກະສານອ້າງອີງ",
      "outlined": "",
      "dense": "",
      "rules": _vm.requiredRules,
      "prepend-inner-icon": "mdi-file-document-outline"
    },
    model: {
      value: _vm.form.header.receiveNumber,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "receiveNumber", $$v);
      },
      expression: "form.header.receiveNumber"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "ວັນທີ",
      "outlined": "",
      "dense": "",
      "rules": _vm.requiredRules
    },
    model: {
      value: _vm.form.header.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "bookingDate", $$v);
      },
      expression: "form.header.bookingDate"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຜູ້ຊຳລະເງິນ/ລູກຄ້າ",
      "outlined": "",
      "dense": "",
      "rules": _vm.requiredRules,
      "prepend-inner-icon": "mdi-account-cash-outline"
    },
    model: {
      value: _vm.form.header.payee,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "payee", $$v);
      },
      expression: "form.header.payee"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເນື້ອໃນລາຍການ",
      "outlined": "",
      "dense": "",
      "rules": _vm.requiredRules,
      "prepend-inner-icon": "mdi-note-text-outline"
    },
    model: {
      value: _vm.form.header.notes,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "notes", $$v);
      },
      expression: "form.header.notes"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ຈຳນວນເງິນ",
      "outlined": "",
      "dense": "",
      "rules": [..._vm.requiredRules, ..._vm.numberRules],
      "prepend-inner-icon": "mdi-cash-plus"
    },
    model: {
      value: _vm.form.header.totalAmount,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "totalAmount", $$v);
      },
      expression: "form.header.totalAmount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.currencyList,
      "label": "ສະກຸນເງິນ",
      "item-text": "code",
      "item-value": "id",
      "outlined": "",
      "dense": "",
      "rules": _vm.requiredRules,
      "prepend-inner-icon": "mdi-currency-usd"
    },
    on: {
      "input": _vm.currencyChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function (data) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(data.item.code) + " - " + _vm._s(data.item.name))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v("Rate: " + _vm._s(data.item.rate))])], 1)];
      }
    }]),
    model: {
      value: _vm.form.header.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "currencyId", $$v);
      },
      expression: "form.header.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ອັດຕາແລກປ່ຽນ",
      "outlined": "",
      "dense": "",
      "rules": [..._vm.requiredRules, ..._vm.numberRules],
      "prepend-inner-icon": "mdi-calculator"
    },
    model: {
      value: _vm.form.header.rate,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "rate", $$v);
      },
      expression: "form.header.rate"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.paymentList,
      "label": "ປະເພດການຊຳລະ",
      "item-text": "payment_name",
      "item-value": "id",
      "outlined": "",
      "dense": "",
      "rules": _vm.requiredRules,
      "prepend-inner-icon": "mdi-credit-card-outline"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function (data) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(data.item.payment_name))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(data.item.payment_code))])], 1)];
      }
    }]),
    model: {
      value: _vm.form.header.paymentId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "paymentId", $$v);
      },
      expression: "form.header.paymentId"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.accountList,
      "label": "DR Account (ບັນຊີເດບິດ)",
      "item-text": "displayName",
      "item-value": "id",
      "outlined": "",
      "dense": "",
      "rules": _vm.requiredRules,
      "prepend-inner-icon": "mdi-bank-plus",
      "hint": "ບັນຊີທີ່ຮັບເງິນເຂົ້າ"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function (data) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(data.item.accountName))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(data.item.accountNumber) + " - " + _vm._s(data.item.accountType))])], 1)];
      }
    }]),
    model: {
      value: _vm.form.header.drAccountId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "drAccountId", $$v);
      },
      expression: "form.header.drAccountId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.accountList,
      "label": "CR Account (ບັນຊີເຄຣດິດ)",
      "item-text": "displayName",
      "item-value": "id",
      "outlined": "",
      "dense": "",
      "rules": _vm.requiredRules,
      "prepend-inner-icon": "mdi-bank-minus",
      "hint": "ບັນຊີລາຍຮັບ"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function (data) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v(_vm._s(data.item.accountName))]), _vm._v(" "), _c(VList["b" /* VListItemSubtitle */], [_vm._v(_vm._s(data.item.accountNumber) + " - " + _vm._s(data.item.accountType))])], 1)];
      }
    }]),
    model: {
      value: _vm.form.header.crAccountId,
      callback: function ($$v) {
        _vm.$set(_vm.form.header, "crAccountId", $$v);
      },
      expression: "form.header.crAccountId"
    }
  })], 1)], 1), _vm._v(" "), _vm.calculatedTotal || _vm.selectedCurrency ? _c(VCard["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "py-3"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center mb-2"
  }, [_c('div', [_c('div', {
    staticClass: "caption grey--text"
  }, [_vm._v("ຈຳນວນເງິນລາວ")]), _vm._v(" "), _c('div', {
    staticClass: "title font-weight-bold success--text"
  }, [_vm._v(_vm._s(_vm.calculatedTotal || '0') + " LAK")])]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.selectedCurrency && _vm.selectedCurrency.code === 'LAK' ? 'success' : 'primary',
      "small": ""
    }
  }, [_vm._v("\n                " + _vm._s(_vm.selectedCurrency ? _vm.selectedCurrency.code : 'LAK') + "\n              ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-space-between caption grey--text"
  }, [_c('span', [_vm._v("ອັດຕາແລກປ່ຽນ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatNumber(_vm.form.header.rate || 1)))])]), _vm._v(" "), _vm.selectedPaymentMethod ? _c('div', {
    staticClass: "d-flex justify-space-between caption grey--text"
  }, [_c('span', [_vm._v("ວິທີການຮັບເງິນ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedPaymentMethod.payment_name))])]) : _vm._e(), _vm._v(" "), _vm.selectedDrAccount ? _c('div', {
    staticClass: "d-flex justify-space-between caption grey--text"
  }, [_c('span', [_vm._v("ບັນຊີຮັບເງິນ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedDrAccount.accountName))])]) : _vm._e()], 1)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "px-4 pb-4"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "outlined": "",
      "color": "grey",
      "disabled": _vm.isLoading
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        ຍົກເລີກ\n      ")], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "type": "submit",
      "color": "success",
      "loading": _vm.isLoading,
      "disabled": !_vm.isFormValid
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n        " + _vm._s(_vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n      ")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue?vue&type=template&id=1d22deb8&scoped=true

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(477);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(163);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ArReceivable.vue?vue&type=script&lang=js



/* harmony default export */ var ArReceivablevue_type_script_lang_js = ({
  props: {
    receiveHeaderId: {
      type: Number,
      default: null
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    commaThousand: comma_thousand["a" /* default */]
  },
  data() {
    return {
      isLoading: false,
      isFormValid: false,
      accountList: [],
      paymentList: [],
      // Validation rules
      requiredRules: [v => !!v || 'ຕ້ອງໃສ່ຂໍ້ມູນ'],
      numberRules: [v => !v || !isNaN(parseFloat(v.toString().replace(/,/g, ''))) || 'ຕ້ອງເປັນຕົວເລກ', v => !v || parseFloat(v.toString().replace(/,/g, '')) > 0 || 'ຕ້ອງຫຼາຍກວ່າ 0'],
      form: {
        header: {
          bookingDate: new Date().toISOString().substr(0, 10),
          receiveNumber: this.generateReceiveNumber(),
          payee: '',
          paymentId: null,
          currencyId: null,
          rate: 1,
          totalAmount: '',
          notes: '',
          update_user: 1,
          drAccountId: null,
          // Cash/Bank account (receives money)
          crAccountId: null,
          // Revenue account (credits revenue)
          isActive: true
        }
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllCurrency']),
    currencyList() {
      return this.findAllCurrency || [];
    },
    // Filter accounts for revenue (typically Revenue type accounts for CR)
    revenueAccountList() {
      return this.accountList.filter(account => account.accountType === 'Revenue' || account.accountType === 'Liability');
    },
    selectedCurrency() {
      return this.currencyList.find(c => c.id === this.form.header.currencyId);
    },
    selectedPaymentMethod() {
      return this.paymentList.find(p => p.id === this.form.header.paymentId);
    },
    selectedDrAccount() {
      return this.accountList.find(a => a.id === this.form.header.drAccountId);
    },
    selectedCrAccount() {
      return this.accountList.find(a => a.id === this.form.header.crAccountId);
    },
    formattedDate() {
      return new Date().toLocaleDateString('lo-LA');
    },
    calculatedTotal() {
      var _this$form$header$tot, _this$form$header$rat;
      const amount = parseFloat(((_this$form$header$tot = this.form.header.totalAmount) === null || _this$form$header$tot === void 0 ? void 0 : _this$form$header$tot.toString().replace(/,/g, '')) || '0');
      const rate = parseFloat(((_this$form$header$rat = this.form.header.rate) === null || _this$form$header$rat === void 0 ? void 0 : _this$form$header$rat.toString().replace(/,/g, '')) || '1');
      if (amount && rate) {
        return new Intl.NumberFormat('lo-LA').format(amount * rate);
      }
      return null;
    }
  },
  async mounted() {
    await this.initializeForm();
  },
  methods: {
    generateReceiveNumber() {
      const now = new Date();
      const year = now.getFullYear().toString().slice(-2);
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const time = now.getTime().toString().slice(-4);
      return `REC${year}${month}${day}${time}`;
    },
    async initializeForm() {
      this.isLoading = true;
      try {
        await Promise.all([this.loadAccounts(), this.loadPaymentMethods()]);

        // Set default currency if available
        if (this.currencyList.length > 0) {
          this.form.header.currencyId = this.currencyList[0].id;
          this.currencyChange();
        }

        // Set default payment method
        if (this.paymentList.length > 0) {
          this.form.header.paymentId = this.paymentList[0].id;
        }

        // Set default accounts for AR (opposite of AP)
        this.setDefaultAccounts();
        if (this.isEdit && this.receiveHeaderId) {
          await this.loadReceiveById();
        }
      } catch (error) {
        this.handleError('ການໂຫຼດຂໍ້ມູນລົ້ມເຫລວ', error);
      } finally {
        this.isLoading = false;
      }
    },
    setDefaultAccounts() {
      if (this.accountList.length > 0) {
        var _this$accountList$;
        // For AR: DR = Cash/Bank account (id: 1), CR = Revenue account (id: 13)
        const cashAccount = this.accountList.find(a => a.id === 1 || a.accountType === 'Asset');
        const revenueAccount = this.accountList.find(a => a.id === 13 || a.accountType === 'Revenue');
        this.form.header.drAccountId = (cashAccount === null || cashAccount === void 0 ? void 0 : cashAccount.id) || this.accountList[0].id;
        this.form.header.crAccountId = (revenueAccount === null || revenueAccount === void 0 ? void 0 : revenueAccount.id) || ((_this$accountList$ = this.accountList[0]) === null || _this$accountList$ === void 0 ? void 0 : _this$accountList$.id);
      }
    },
    async loadAccounts() {
      try {
        const response = await this.$axios.get('/api/account/find');
        this.accountList = response.data.map(account => ({
          id: account.id,
          accountNumber: account.accountNumber,
          accountName: account.accountName,
          accountLLName: account.accountLLName,
          accountType: account.accountType,
          displayName: `${account.accountName} (${account.accountNumber})`,
          isActive: account.isActive
        }));
      } catch (error) {
        throw new Error('Failed to load accounts');
      }
    },
    async loadPaymentMethods() {
      try {
        const response = await this.$axios.get('/api/paymentMethod/find');
        this.paymentList = response.data;
      } catch (error) {
        throw new Error('Failed to load payment methods');
      }
    },
    currencyChange() {
      const currency = this.currencyList.find(c => c.id === this.form.header.currencyId);
      if (currency && currency.rate) {
        this.form.header.rate = currency.rate;
      }
    },
    async loadReceiveById() {
      try {
        const response = await this.$axios.get(`/api/finanicial/ar/header/find/${this.receiveHeaderId}`);
        const data = response.data;
        this.form.header = {
          ...data,
          bookingDate: data.bookingDate.split('T')[0],
          totalAmount: this.formatNumber(data.totalAmount)
        };
      } catch (error) {
        throw new Error('Failed to load receive data');
      }
    },
    formatNumber(value) {
      return new Intl.NumberFormat('lo-LA').format(value);
    },
    parseNumber(value) {
      return parseFloat((value === null || value === void 0 ? void 0 : value.toString().replace(/,/g, '')) || '0');
    },
    async submitData() {
      if (!this.$refs.form.validate() || this.isLoading) return;
      this.isLoading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.form.header,
          totalAmount: this.parseNumber(this.form.header.totalAmount),
          rate: this.parseNumber(this.form.header.rate)
        };
        let response;
        if (this.isEdit) {
          response = await this.$axios.put(`/api/finanicial/ar/header/update/${this.receiveHeaderId}`, submitData);
        } else {
          response = await this.$axios.post('/api/finanicial/ar/header/create', submitData);
        }
        Object(myUtil["c" /* swalSuccess */])(this.$swal, 'ສຳເລັດ', 'ດຳເນີນການສຳເລັດແລ້ວ');
        this.$emit('reload');
        this.$emit('close-dialog');
      } catch (error) {
        this.handleError('ການບັນທຶກລົ້ມເຫລວ', error);
      } finally {
        this.isLoading = false;
      }
    },
    handleError(title, error) {
      var _error$response, _error$response$data, _error$response$data$, _error$response$data$2, _error$response2, _error$response2$data;
      console.error(title, error);
      const message = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : (_error$response$data$ = _error$response$data.errors) === null || _error$response$data$ === void 0 ? void 0 : (_error$response$data$2 = _error$response$data$[0]) === null || _error$response$data$2 === void 0 ? void 0 : _error$response$data$2.msg) || ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || error.message || 'ມີຂໍ້ຜິດພາດເກີດຂຶ້ນ';
      Object(myUtil["b" /* swalError2 */])(this.$swal, title, message);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue?vue&type=script&lang=js
 /* harmony default export */ var accounting_ArReceivablevue_type_script_lang_js = (ArReceivablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ArReceivable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(784)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  accounting_ArReceivablevue_type_script_lang_js,
  ArReceivablevue_type_template_id_1d22deb8_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "1d22deb8",
  "83a9ccb8"
  
)

/* harmony default export */ var ArReceivable = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bind(el, binding, vnode) {
    el.addEventListener("input", function (event) {
      // Remove any non-numeric characters
      let value = event.target.value.replace(/[^0-9]/g, "");
      // Format the value with comma-separated thousands
      value = parseInt(value, 10).toLocaleString("en-US");
      // Update the input value
      if (value === 'NaN') value = '0';
      vnode.componentInstance.$emit("input", value);
    });
  }
});

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(785);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2fb35cf6", content, true, context)
};

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArReceivable_vue_vue_type_style_index_0_id_1d22deb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArReceivable_vue_vue_type_style_index_0_id_1d22deb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArReceivable_vue_vue_type_style_index_0_id_1d22deb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArReceivable_vue_vue_type_style_index_0_id_1d22deb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArReceivable_vue_vue_type_style_index_0_id_1d22deb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card-title[data-v-1d22deb8]{position:sticky;top:0;z-index:1}.v-form[data-v-1d22deb8]{min-height:0}.v-card-text[data-v-1d22deb8]{max-height:70vh;overflow-y:auto}.v-card-text[data-v-1d22deb8]::-webkit-scrollbar{width:6px}.v-card-text[data-v-1d22deb8]::-webkit-scrollbar-track{background:#f1f1f1}.v-card-text[data-v-1d22deb8]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:3px}.v-card-text[data-v-1d22deb8]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=accounting-ar-receivable.js.map