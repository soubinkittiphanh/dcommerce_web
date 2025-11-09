exports.ids = [36];
exports.modules = {

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(528);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("54bce0ea", content, true, context)
};

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/printdialog/index.vue?vue&type=template&id=0dddd684&scoped=true
var render = function render() {
  var _vm$ticket$client, _vm$ticket$table, _vm$ticket$table2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"print-dialog-content\" data-v-0dddd684><div class=\"print-dialog-header\" data-v-0dddd684><h2 data-v-0dddd684>Print Ticket</h2> <button class=\"close-btn\" data-v-0dddd684>×</button></div> " + (_vm.ticket ? "<div class=\"print-preview\" data-v-0dddd684><div class=\"print-header\" data-v-0dddd684><div class=\"restaurant-info\" data-v-0dddd684><h1 class=\"restaurant-name\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.companyInfo.name)) + "</h1> <div class=\"restaurant-address\" data-v-0dddd684>" + _vm._s(_vm.companyInfo.address) + "</div> " + (_vm.companyInfo.tel || _vm.companyInfo.email ? "<div class=\"contact-line\" data-v-0dddd684>" + _vm._ssrEscape("\n              " + _vm._s(_vm.companyInfo.tel)) + (_vm.companyInfo.tel && _vm.companyInfo.email ? "<span data-v-0dddd684> | </span>" : "<!---->") + _vm._ssrEscape(_vm._s(_vm.companyInfo.email) + "\n            ") + "</div>" : "<!---->") + "</div></div> <div class=\"print-ticket-info\" data-v-0dddd684><div class=\"ticket-basic\" data-v-0dddd684><div class=\"detail-row\" data-v-0dddd684><span class=\"detail-label\" data-v-0dddd684>" + _vm._ssrEscape("Q" + _vm._s(_vm.getQueNo(_vm.ticket.ticketNumber)) + " #:") + "</span> <span class=\"detail-value\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.ticket.ticketNumber || _vm.ticket.id)) + "</span></div> <div class=\"detail-row\" data-v-0dddd684><span class=\"detail-label\" data-v-0dddd684>Date:</span> <span class=\"detail-value\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatPrintDate(_vm.ticket.createdAt))) + "</span></div> <div class=\"detail-row\" data-v-0dddd684><span class=\"detail-label\" data-v-0dddd684>Time:</span> <span class=\"detail-value\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatPrintTime(_vm.ticket.createdAt))) + "</span></div></div> <div class=\"customer-basic\" data-v-0dddd684><div class=\"detail-row\" data-v-0dddd684><span class=\"detail-label\" data-v-0dddd684>Customer:</span> <span class=\"detail-value\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(((_vm$ticket$client = _vm.ticket.client) === null || _vm$ticket$client === void 0 ? void 0 : _vm$ticket$client.name) || 'Walk-in')) + "</span></div> <div class=\"detail-row\" data-v-0dddd684><span class=\"detail-label\" data-v-0dddd684>Table:</span> <span class=\"detail-value\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(((_vm$ticket$table = _vm.ticket.table) === null || _vm$ticket$table === void 0 ? void 0 : _vm$ticket$table.number) || ((_vm$ticket$table2 = _vm.ticket.table) === null || _vm$ticket$table2 === void 0 ? void 0 : _vm$ticket$table2.name) || '-')) + "</span></div> <div class=\"detail-row\" data-v-0dddd684><span class=\"detail-label\" data-v-0dddd684>Status:</span> <span class=\"detail-value\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatStatus(_vm.ticket.status))) + "</span></div></div></div> <div class=\"print-divider\" data-v-0dddd684></div> <div class=\"print-items\" data-v-0dddd684><div class=\"section-title\" data-v-0dddd684>ITEMS</div> " + (_vm.ticket.ticketLines && _vm.ticket.ticketLines.length > 0 ? "<div data-v-0dddd684>" + _vm._ssrList(_vm.ticket.ticketLines, function (line) {
    return "<div class=\"print-item\" data-v-0dddd684><div class=\"item-main\" data-v-0dddd684><span class=\"item-name\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.getItemName(line))) + "</span> <span class=\"item-price\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.getItemTotal(line)))) + "</span></div> <div class=\"item-details\" data-v-0dddd684><span class=\"item-qty\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(line.quantity) + "x" + _vm._s(_vm.formatPrice(line.unitPrice || line.pro_price))) + "</span></div> " + (line.is_promotion_item && line.promotion_note ? "<div class=\"item-promotion\" data-v-0dddd684><span data-v-0dddd684>" + _vm._ssrEscape("🏷️" + _vm._s(line.promotion_note)) + "</span> " + (line.discount_amount > 0 ? "<span data-v-0dddd684>" + _vm._ssrEscape("-" + _vm._s(_vm.formatPrice(line.discount_amount))) + "</span>" : "<!---->") + "</div>" : "<!---->") + " " + (line.notes ? "<div class=\"item-notes\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(line.notes)) + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"no-items-print\" data-v-0dddd684><p data-v-0dddd684>No items in this order</p></div>") + "</div> <div class=\"print-divider\" data-v-0dddd684></div> <div class=\"print-summary\" data-v-0dddd684><div class=\"summary-line\" data-v-0dddd684><span data-v-0dddd684>Total (with tax):</span> <span data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.getTicketTotalWithTax()))) + "</span></div> " + (_vm.hasPromotionDiscount ? "<div class=\"summary-line promotion-line\" data-v-0dddd684><span data-v-0dddd684>Discount:</span> <span data-v-0dddd684>" + _vm._ssrEscape("-" + _vm._s(_vm.formatPrice(_vm.ticket.promotionDiscount || 0))) + "</span></div>" : "<!---->") + " " + (_vm.getTicketTaxBreakdown().length > 0 ? "<div data-v-0dddd684>" + _vm._ssrList(_vm.getTicketTaxBreakdown(), function (taxItem) {
    return "<div class=\"summary-line\" style=\"font-size: 9px;\" data-v-0dddd684><span data-v-0dddd684>" + _vm._ssrEscape(_vm._s(taxItem.name) + " (" + _vm._s((taxItem.rate * 100).toFixed(1)) + "% " + _vm._s(taxItem.type) + "):") + "</span> <span data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(taxItem.taxAmount))) + "</span></div>";
  }) + "</div>" : "<!---->") + " <div class=\"summary-line\" data-v-0dddd684><span data-v-0dddd684>Total Tax:</span> <span data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.tax || 0))) + "</span></div> <div class=\"summary-line total-line\" data-v-0dddd684><span data-v-0dddd684>FINAL TOTAL:</span> <span data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.total))) + "</span></div></div> " + (_vm.appliedPromotions.length > 0 ? "<div class=\"print-promotions\" data-v-0dddd684><div class=\"print-divider\" data-v-0dddd684></div> <h4 data-v-0dddd684>PROMOTIONS:</h4> " + _vm._ssrList(_vm.appliedPromotions, function (promo) {
    return "<div class=\"promotion-info\" data-v-0dddd684><div class=\"promotion-row\" data-v-0dddd684><span class=\"promotion-title\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(promo.promotionName)) + "</span> <span class=\"promotion-save\" data-v-0dddd684>" + _vm._ssrEscape("-" + _vm._s(_vm.formatPrice(promo.discountAmount))) + "</span></div></div>";
  }) + "</div>" : "<!---->") + " <div class=\"print-payment\" data-v-0dddd684><div class=\"payment-status\" data-v-0dddd684><span data-v-0dddd684>Payment:</span> <span" + _vm._ssrClass("payment-value", `payment-${_vm.ticket.paymentStatus}`) + " data-v-0dddd684>" + _vm._ssrEscape("\n            " + _vm._s(_vm.ticket.payment ? _vm.formatPaymentStatus(_vm.ticket.payment.payment_code) : 'unpaid') + "\n            ") + "</span></div></div> " + (_vm.ticket.notes ? "<div class=\"print-notes\" data-v-0dddd684><div class=\"print-divider\" data-v-0dddd684></div> <h4 data-v-0dddd684>NOTES:</h4> <p data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.ticket.notes)) + "</p></div>" : "<!---->") + " <div class=\"print-footer\" data-v-0dddd684><div class=\"print-divider\" data-v-0dddd684></div> <p class=\"thank-you\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.footerMessage)) + "</p> <p class=\"print-time\" data-v-0dddd684>" + _vm._ssrEscape(_vm._s(_vm.formatPrintDateTime(new Date()))) + "</p></div></div>" : "<!---->") + " <div class=\"print-dialog-actions\" data-v-0dddd684><button" + _vm._ssrAttr("disabled", _vm.printing) + " class=\"print-btn print-primary\" data-v-0dddd684>" + (_vm.printing ? "<span data-v-0dddd684>Printing...</span>" : "<span data-v-0dddd684>🖨️ Print</span>") + "</button> <button class=\"print-btn print-secondary\" data-v-0dddd684>\n          Cancel\n        </button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue?vue&type=template&id=0dddd684&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/printdialog/index.vue?vue&type=script&lang=js














/* harmony default export */ var printdialogvue_type_script_lang_js = ({
  name: 'PrintTicketDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ticket: {
      type: Object,
      default: null
    },
    footerMessage: {
      type: String,
      default: 'Thank you for your visit!'
    },
    customFooter: {
      type: String,
      default: null
    },
    printTitle: {
      type: String,
      default: 'Print Ticket'
    }
  },
  data() {
    return {
      printing: false
    };
  },
  computed: {
    hasPromotionDiscount() {
      return this.ticket && (this.ticket.promotionDiscount > 0 || this.appliedPromotions.length > 0);
    },
    appliedPromotions() {
      if (!this.ticket) return [];
      if (this.ticket.appliedPromotions) {
        try {
          if (typeof this.ticket.appliedPromotions === 'string') {
            return JSON.parse(this.ticket.appliedPromotions);
          }
          return this.ticket.appliedPromotions;
        } catch (error) {
          console.error('Error parsing applied promotions:', error);
        }
      }
      return [];
    },
    ...Object(external_vuex_["mapGetters"])({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findSelectedTerminal: 'findSelectedTerminal'
    }),
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    companyInfo() {
      var _this$currentTerminal, _this$currentTerminal2;
      const company = (_this$currentTerminal = this.currentTerminal) === null || _this$currentTerminal === void 0 ? void 0 : (_this$currentTerminal2 = _this$currentTerminal.location) === null || _this$currentTerminal2 === void 0 ? void 0 : _this$currentTerminal2.company;
      if (!company) {
        return {
          name: 'Restaurant Name',
          address: '123 Main Street<br>City, State 12345',
          tel: '',
          email: '',
          bank: '',
          accountName: '',
          accounts: '',
          remark: ''
        };
      }
      let formattedAddress = '';
      if (company.address) formattedAddress += company.address;
      if (company.village) formattedAddress += `<br>${company.village}`;
      if (company.district) formattedAddress += `, ${company.district}`;
      if (company.province) formattedAddress += `, ${company.province}`;
      return {
        name: company.name || 'Restaurant Name',
        address: formattedAddress || company.address || '',
        tel: company.tel || '',
        email: company.email || '',
        bank: company.bank || '',
        accountName: company.accountName || '',
        accounts: company.accounts || '',
        remark: company.remark || ''
      };
    }
  },
  mounted() {
    console.info(`TICKET DETAIL ${JSON.stringify(this.ticket)}`);
    this.printNow();
  },
  methods: {
    // ... existing methods ...
    getQueNo(ticketNumber) {
      var _ticketNumber$split$;
      const parts = ticketNumber === null || ticketNumber === void 0 ? void 0 : (_ticketNumber$split$ = ticketNumber.split('-')[0]) === null || _ticketNumber$split$ === void 0 ? void 0 : _ticketNumber$split$.split('/');
      return (parts === null || parts === void 0 ? void 0 : parts.length) === 2 ? (parseInt(parts[0]) * parseInt(parts[1])).toString() : '';
    },
    // ADDED: Methods for tax-inclusive print calculations
    getTicketTotalWithTax() {
      if (!this.ticket || !this.ticket.ticketLines) return 0;
      return this.ticket.ticketLines.reduce((total, line) => {
        return total + line.quantity * (line.unitPrice || line.pro_price || 0);
      }, 0);
    },
    getTicketBaseAmount() {
      if (!this.ticket || !this.ticket.ticketLines) return 0;
      return this.ticket.ticketLines.reduce((total, line) => {
        const itemTotal = line.quantity * (line.unitPrice || line.pro_price || 0);

        // If line has tax information and it's inclusive
        if (line.taxRate && line.taxType === 'INC') {
          // Extract base amount: base = total / (1 + tax_rate)
          return total + itemTotal / (1 + parseFloat(line.taxRate));
        } else {
          // For tax exclusive or no tax: base = total
          return total + itemTotal;
        }
      }, 0);
    },
    getTicketBaseAfterPromotions() {
      const baseAmount = this.getTicketBaseAmount();
      const promotionDiscount = this.ticket.promotionDiscount || 0;
      return Math.max(0, baseAmount - promotionDiscount);
    },
    getTicketTaxBreakdown() {
      if (!this.ticket || !this.ticket.ticketLines) return [];
      const taxGroups = new Map();
      const totalBaseAmount = this.getTicketBaseAmount();
      const promotionDiscount = this.ticket.promotionDiscount || 0;
      const discountRatio = totalBaseAmount > 0 ? promotionDiscount / totalBaseAmount : 0;
      this.ticket.ticketLines.forEach(line => {
        if (line.taxRate && line.taxRate > 0) {
          const taxKey = line.taxId || 'default';
          const itemTotal = line.quantity * (line.unitPrice || line.pro_price || 0);
          let itemBaseAmount;
          if (line.taxType === 'INC') {
            // For tax inclusive: extract base amount
            itemBaseAmount = itemTotal / (1 + parseFloat(line.taxRate));
          } else {
            // For tax exclusive: item total is the base amount
            itemBaseAmount = itemTotal;
          }
          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              name: `Tax ${(parseFloat(line.taxRate) * 100).toFixed(1)}%`,
              code: line.taxId || 'TAX',
              rate: parseFloat(line.taxRate),
              type: line.taxType || 'INC',
              baseAmount: 0
            });
          }
          const group = taxGroups.get(taxKey);
          group.baseAmount += itemBaseAmount;
        }
      });
      const breakdown = [];
      taxGroups.forEach(group => {
        // Apply proportional discount
        const adjustedBaseAmount = group.baseAmount * (1 - discountRatio);
        const taxAmount = adjustedBaseAmount * group.rate;
        breakdown.push({
          name: group.name,
          code: group.code,
          rate: group.rate,
          type: group.type,
          baseAmount: adjustedBaseAmount,
          taxAmount: taxAmount
        });
      });
      return breakdown;
    },
    getAfterPromotionsAmount() {
      if (!this.ticket) return 0;
      const subtotal = parseFloat(this.ticket.subtotal || 0);
      const discount = parseFloat(this.ticket.promotionDiscount || 0);
      return Math.max(0, subtotal - discount);
    },
    closeDialog() {
      this.$emit('close');
    },
    // Optimized for 54mm thermal printer - let printer handle width
    async printNow() {
      if (!this.ticket) return;
      this.printing = true;
      try {
        const printContent = document.querySelector('.print-preview').innerHTML;
        // Remove specific width constraints - let printer handle it
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Ticket #${this.ticket.id}</title>
            <meta charset="utf-8">
            <style>
              ${this.getPrintStyles()}
            </style>
          </head>
          <body>
            ${printContent}
          </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();

        // Standard printing delay
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
          this.printing = false;
          this.$emit('printed', this.ticket);
          this.closeDialog();
        }, 100);
      } catch (error) {
        console.error('Print error:', error);
        this.printing = false;
        this.$emit('print-error', error);
      }
    },
    // Compact date format for thermal printer
    formatPrintDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      });
    },
    // 24-hour time format for thermal printer
    formatPrintTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    },
    // Compact datetime for footer
    formatPrintDateTime(date) {
      if (!date) return 'N/A';
      const d = new Date(date);
      return `${d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit'
      })} ${d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })}`;
    },
    // Compact price formatting for thermal printer
    formatPrice(amount, includeCurrency = true) {
      const rounded = Math.round(amount || 0);
      const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(rounded);
      return includeCurrency ? `${formatted}₭` : formatted;
    },
    // Shorter status names for thermal printer
    formatStatus(status) {
      const statusMap = {
        pending: 'Pending',
        preparing: 'Prep',
        ready: 'Ready',
        served: 'Served',
        paid: 'Paid',
        cancel: 'Cancel'
      };
      return statusMap[status] || status;
    },
    // Shorter payment status for thermal printer
    formatPaymentStatus(status) {
      const statusMap = {
        pending: 'Unpaid',
        paid: 'Paid',
        refunded: 'Refund'
      };
      return statusMap[status] || status;
    },
    getItemTotal(line) {
      return line.totalPrice || line.total || line.subtotal || line.quantity * (line.unitPrice || line.pro_price || 0);
    },
    // Truncate item names for 54mm
    getItemName(line) {
      var _line$product, _line$product2;
      let name = line.pro_name || ((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.pro_name) || ((_line$product2 = line.product) === null || _line$product2 === void 0 ? void 0 : _line$product2.name) || line.pro_desc || 'Unknown Item';

      // Truncate for 54mm thermal printer
      if (name.length > 15) {
        name = name.substring(0, 12) + '...';
      }
      return name;
    },
    // 54mm thermal printer optimized styles - READABLE FONTS
    getPrintStyles() {
      return `
        body {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.2;
          margin: 0;
          padding: 4px;
          color: #000;
          overflow-wrap: break-word;
        }
        
        /* Header for 54mm */
        .print-header {
          text-align: center;
          margin-bottom: 8px;
        }
        .restaurant-name {
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 4px 0;
        }
        .restaurant-address {
          font-size: 10px;
          margin: 0 0 2px 0;
          line-height: 1.2;
        }
        .contact-line {
          font-size: 9px;
          margin: 2px 0;
          color: #666;
        }
        
        /* Ticket info for 54mm */
        .print-ticket-info {
          margin-bottom: 6px;
          font-size: 10px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
          font-size: 10px;
        }
        .detail-label {
          font-weight: bold;
        }
        .detail-value {
          text-align: right;
        }
        
        /* Divider */
        .print-divider {
          border-top: 1px dashed #000;
          margin: 6px 0;
        }
        
        /* Items section for 54mm */
        .section-title {
          font-size: 12px;
          font-weight: bold;
          margin: 0 0 6px 0;
          text-align: center;
        }
        .print-item {
          margin-bottom: 6px;
          font-size: 10px;
        }
        .item-main {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 2px;
        }
        .item-name {
          flex: 1;
          word-wrap: break-word;
        }
        .item-price {
          margin-left: 8px;
          text-align: right;
        }
        .item-details {
          display: flex;
          justify-content: flex-start;
          font-size: 9px;
          margin-left: 8px;
          color: #666;
        }
        
        /* Promotions for 54mm */
        .item-promotion {
          display: block;
          font-size: 9px;
          margin-left: 8px;
          color: #28a745;
          font-style: italic;
          margin-top: 2px;
        }
        .item-notes {
          font-size: 9px;
          font-style: italic;
          margin-left: 8px;
          color: #666;
          word-wrap: break-word;
          margin-top: 2px;
        }
        
        /* Summary for 54mm */
        .print-summary {
          margin: 8px 0;
          font-size: 10px;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        .promotion-line {
          color: #28a745;
          font-weight: bold;
        }
        .total-line {
          font-weight: bold;
          font-size: 12px;
          border-top: 1px solid #000;
          padding-top: 4px;
          margin-top: 4px;
        }
        
        /* Payment status */
        .print-payment {
          margin: 8px 0;
          font-size: 10px;
        }
        .payment-status {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        
        /* Notes section */
        .print-notes {
          margin: 8px 0;
          font-size: 9px;
        }
        .print-notes h4 {
          font-size: 10px;
          margin: 0 0 4px 0;
        }
        .print-notes p {
          margin: 0;
          word-wrap: break-word;
        }
        
        /* Promotions section */
        .print-promotions {
          margin: 8px 0;
          font-size: 9px;
        }
        .print-promotions h4 {
          font-size: 10px;
          margin: 0 0 4px 0;
          text-align: center;
          color: #28a745;
        }
        .promotion-info {
          margin-bottom: 4px;
        }
        .promotion-row {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          color: #28a745;
        }
        
        /* Footer */
        .print-footer {
          text-align: center;
          margin-top: 8px;
          font-size: 9px;
        }
        .thank-you {
          font-weight: bold;
          font-size: 10px;
          margin: 4px 0 2px 0;
        }
        .print-time {
          font-size: 8px;
          margin: 0;
          color: #666;
        }
        
        /* Status colors */
        .payment-pending { color: #856404; }
        .payment-paid { color: #155724; }
        .payment-refunded { color: #721c24; }
        
        .no-items-print {
          text-align: center;
          padding: 8px;
          color: #666;
          font-style: italic;
          font-size: 9px;
        }
        
        /* Print media query - let printer handle width */
        @media print {
          body { 
            margin: 0; 
            padding: 2px;
            font-size: 11px;
          }
          .print-divider {
            margin: 4px 0;
          }
          .restaurant-name {
            font-size: 13px;
          }
          .total-line {
            font-size: 11px;
          }
        }
        
        /* Let content flow naturally */
        * {
          box-sizing: border-box;
        }
      `;
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue?vue&type=script&lang=js
 /* harmony default export */ var CAFE_printdialogvue_type_script_lang_js = (printdialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(527)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_printdialogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0dddd684",
  "02b6a379"
  
)

/* harmony default export */ var printdialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dddd684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(493);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dddd684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dddd684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dddd684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dddd684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-0dddd684]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.print-dialog-content[data-v-0dddd684]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:600px;overflow-y:auto;width:100%}.print-dialog-header[data-v-0dddd684]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:20px 24px}.print-dialog-header h2[data-v-0dddd684]{color:#333;font-size:20px;margin:0}.close-btn[data-v-0dddd684]{align-items:center;background:none;border:none;border-radius:50%;color:#6c757d;cursor:pointer;display:flex;font-size:28px;height:32px;justify-content:center;padding:0;transition:all .2s;width:32px}.close-btn[data-v-0dddd684]:hover{background:#e9ecef;color:#333}.print-preview[data-v-0dddd684]{background:#fff;color:#000;font-family:\"Courier New\",monospace;font-size:13px;line-height:1.4;padding:24px}.print-header[data-v-0dddd684]{margin-bottom:20px;text-align:center}.restaurant-name[data-v-0dddd684]{color:#333;font-size:22px;font-weight:700;margin:0 0 8px}.restaurant-address[data-v-0dddd684]{color:#666;font-size:14px;line-height:1.3;margin:0 0 4px}.contact-line[data-v-0dddd684]{color:#666;font-size:12px;margin:4px 0}.print-ticket-info[data-v-0dddd684]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;gap:20px;margin-bottom:15px}.detail-row[data-v-0dddd684]{display:flex;font-size:13px;justify-content:space-between;margin-bottom:4px}.detail-label[data-v-0dddd684]{color:#333;font-weight:700}.detail-value[data-v-0dddd684]{color:#000}.print-divider[data-v-0dddd684]{border-top:2px dashed #333;margin:20px 0}.print-items[data-v-0dddd684]{margin-bottom:20px}.section-title[data-v-0dddd684]{color:#333;font-size:16px;font-weight:700;margin:0 0 15px;text-align:center}.print-item[data-v-0dddd684]{border-bottom:1px dotted #ccc;margin-bottom:12px;padding-bottom:8px}.print-item[data-v-0dddd684]:last-child{border-bottom:none}.item-main[data-v-0dddd684]{display:flex;font-weight:700;justify-content:space-between;margin-bottom:2px}.item-name[data-v-0dddd684]{color:#333}.item-price[data-v-0dddd684]{color:#000}.item-details[data-v-0dddd684]{color:#666;display:flex;font-size:12px;justify-content:space-between;margin-left:15px}.item-promotion[data-v-0dddd684]{color:#28a745;display:flex;justify-content:space-between}.item-notes[data-v-0dddd684],.item-promotion[data-v-0dddd684]{font-size:11px;font-style:italic;margin-left:15px;margin-top:4px}.item-notes[data-v-0dddd684]{color:#888}.no-items-print[data-v-0dddd684]{color:#666;font-style:italic;padding:20px;text-align:center}.print-summary[data-v-0dddd684]{margin:20px 0}.summary-line[data-v-0dddd684]{display:flex;font-size:14px;justify-content:space-between;margin-bottom:4px}.promotion-line[data-v-0dddd684]{color:#28a745!important;font-weight:700}.total-line[data-v-0dddd684]{border-top:2px solid #333;font-size:18px;font-weight:700;margin-top:12px;padding-top:8px}.print-promotions[data-v-0dddd684]{background:rgba(40,167,69,.05);border:1px dashed #28a745;border-radius:4px;margin:20px 0;padding:10px}.print-promotions h4[data-v-0dddd684]{color:#28a745;font-size:14px;font-weight:700;margin:0 0 10px;text-align:center}.promotion-info[data-v-0dddd684]{margin-bottom:8px}.promotion-row[data-v-0dddd684]{color:#28a745;display:flex;font-weight:700;justify-content:space-between;margin-bottom:2px}.print-payment[data-v-0dddd684]{margin:20px 0}.payment-status[data-v-0dddd684]{display:flex;font-size:14px;font-weight:700;justify-content:space-between;margin-bottom:8px}.payment-value.payment-pending[data-v-0dddd684]{color:#856404}.payment-value.payment-paid[data-v-0dddd684]{color:#155724}.payment-value.payment-refunded[data-v-0dddd684]{color:#721c24}.print-notes[data-v-0dddd684]{margin:20px 0}.print-notes h4[data-v-0dddd684]{color:#333;font-size:14px;font-weight:700;margin:0 0 8px}.print-notes p[data-v-0dddd684]{background:#f8f9fa;border-left:4px solid #ffc107;border-radius:4px;color:#000;font-size:13px;margin:0;padding:10px}.print-footer[data-v-0dddd684]{margin-top:30px;text-align:center}.thank-you[data-v-0dddd684]{color:#333;font-size:16px;font-weight:700;margin:15px 0 10px}.print-time[data-v-0dddd684]{color:#888;font-size:11px;margin:0}.print-dialog-actions[data-v-0dddd684]{background:#f8f9fa;border-radius:0 0 12px 12px;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.print-btn[data-v-0dddd684]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;padding:12px 24px;transition:all .2s}.print-primary[data-v-0dddd684]{background:#007bff;color:#fff}.print-primary[data-v-0dddd684]:disabled{background:#6c757d;cursor:not-allowed}.print-secondary[data-v-0dddd684]{background:#6c757d;color:#fff}.print-btn[data-v-0dddd684]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=c-a-f-e-printdialog.js.map