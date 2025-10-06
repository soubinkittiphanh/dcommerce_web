exports.ids = [147,15,16];
exports.modules = {

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(700);
/* harmony import */ var _src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _mixins_intersectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(143);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);

 // Directives

 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_mixins_intersectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({
  onVisible: ['init']
}), _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).extend({
  name: 'v-pagination',
  directives: {
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    circle: Boolean,
    disabled: Boolean,
    length: {
      type: Number,
      default: 0,
      validator: val => val % 1 === 0
    },
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    totalVisible: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    pageAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.page'
    },
    currentPageAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.currentPage'
    },
    previousAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.previous'
    },
    nextAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.next'
    },
    wrapperAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.wrapper'
    }
  },
  data() {
    return {
      maxButtons: 0,
      selected: null
    };
  },
  computed: {
    classes() {
      return {
        'v-pagination': true,
        'v-pagination--circle': this.circle,
        'v-pagination--disabled': this.disabled,
        ...this.themeClasses
      };
    },
    items() {
      const totalVisible = parseInt(this.totalVisible, 10);
      if (totalVisible === 0 || isNaN(this.length) || this.length > Number.MAX_SAFE_INTEGER) {
        return [];
      }
      const maxLength = Math.min(Math.max(0, totalVisible) || this.length, Math.max(0, this.maxButtons) || this.length, this.length);
      if (this.length <= maxLength) {
        return this.range(1, this.length);
      }
      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = this.length - left + 1 + even;
      if (this.value > left && this.value < right) {
        const firstItem = 1;
        const lastItem = this.length;
        const start = this.value - left + 2;
        const end = this.value + left - 2 - even;
        const secondItem = start - 1 === firstItem + 1 ? 2 : '...';
        const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : '...';
        return [1, secondItem, ...this.range(start, end), beforeLastItem, this.length];
      } else if (this.value === left) {
        const end = this.value + left - 1 - even;
        return [...this.range(1, end), '...', this.length];
      } else if (this.value === right) {
        const start = this.value - left + 1;
        return [1, '...', ...this.range(start, this.length)];
      } else {
        return [...this.range(1, left), '...', ...this.range(right, this.length)];
      }
    }
  },
  watch: {
    value() {
      this.init();
    }
  },
  beforeMount() {
    this.init();
  },
  methods: {
    init() {
      this.selected = null;
      this.onResize();
      this.$nextTick(this.onResize); // TODO: Change this (f75dee3a, cbdf7caa)

      setTimeout(() => this.selected = this.value, 100);
    },
    onResize() {
      const width = this.$el && this.$el.parentElement ? this.$el.parentElement.clientWidth : window.innerWidth;
      this.maxButtons = Math.floor((width - 96) / 42);
    },
    next(e) {
      e.preventDefault();
      this.$emit('input', this.value + 1);
      this.$emit('next');
    },
    previous(e) {
      e.preventDefault();
      this.$emit('input', this.value - 1);
      this.$emit('previous');
    },
    range(from, to) {
      const range = [];
      from = from > 0 ? from : 1;
      for (let i = from; i <= to; i++) {
        range.push(i);
      }
      return range;
    },
    genIcon(h, icon, disabled, fn, label) {
      return h('li', [h('button', {
        staticClass: 'v-pagination__navigation',
        class: {
          'v-pagination__navigation--disabled': disabled
        },
        attrs: {
          disabled,
          type: 'button',
          'aria-label': label
        },
        on: disabled ? {} : {
          click: fn
        }
      }, [h(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [icon])])]);
    },
    genItem(h, i) {
      const color = i === this.value && (this.color || 'primary');
      const isCurrentPage = i === this.value;
      const ariaLabel = isCurrentPage ? this.currentPageAriaLabel : this.pageAriaLabel;
      return h('button', this.setBackgroundColor(color, {
        staticClass: 'v-pagination__item',
        class: {
          'v-pagination__item--active': i === this.value
        },
        attrs: {
          type: 'button',
          'aria-current': isCurrentPage,
          'aria-label': this.$vuetify.lang.t(ariaLabel, i)
        },
        on: {
          click: () => this.$emit('input', i)
        }
      }), [i.toString()]);
    },
    genItems(h) {
      return this.items.map((i, index) => {
        return h('li', {
          key: index
        }, [isNaN(Number(i)) ? h('span', {
          class: 'v-pagination__more'
        }, [i.toString()]) : this.genItem(h, i)]);
      });
    },
    genList(h, children) {
      return h('ul', {
        directives: [{
          modifiers: {
            quiet: true
          },
          name: 'resize',
          value: this.onResize
        }],
        class: this.classes
      }, children);
    }
  },
  render(h) {
    const children = [this.genIcon(h, this.$vuetify.rtl ? this.nextIcon : this.prevIcon, this.value <= 1, this.previous, this.$vuetify.lang.t(this.previousAriaLabel)), this.genItems(h), this.genIcon(h, this.$vuetify.rtl ? this.prevIcon : this.nextIcon, this.value >= this.length, this.next, this.$vuetify.lang.t(this.nextAriaLabel))];
    return h('nav', {
      attrs: {
        role: 'navigation',
        'aria-label': this.$vuetify.lang.t(this.wrapperAriaLabel)
      }
    }, [this.genList(h, children)]);
  }
}));

/***/ }),

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cfa953c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(820);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cfa953c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cfa953c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cfa953c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cfa953c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".receive-summary-container[data-v-cfa953c4]{padding:20px}.v-card-title.primary[data-v-cfa953c4]{background:linear-gradient(45deg,#1976d2,#1565c0)}.text-caption[data-v-cfa953c4]{font-size:12px!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1269:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(399);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VPagination/VPagination.js
var VPagination = __webpack_require__(1073);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 2 modules
var VTextField = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/accounting/ar/receive/index.vue?vue&type=template&id=cfa953c4&scoped=true&




















var receivevue_type_template_id_cfa953c4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "receive-summary-container",
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-cash-register")]), _vm._v(" "), _c('span', [_vm._v("ລະບົບຈັດການການຮັບຊຳລະ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "white",
      "text": ""
    },
    on: {
      "click": _vm.openCreateDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n            ເພີ່ມໃໝ່\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "white",
      "text": ""
    },
    on: {
      "click": _vm.exportData
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-download")]), _vm._v("\n            Export\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄົ້ນຫາ",
      "placeholder": "ເລກທີໃບຮັບ, ເລກອ້າງອີງ...",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-magnify"
    },
    on: {
      "input": _vm.applyFilters
    },
    model: {
      value: _vm.filters.search,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "search", $$v);
      },
      expression: "filters.search"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.paymentMethodOptions,
      "label": "ວິທີຈ່າຍ",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-cash"
    },
    on: {
      "change": _vm.applyFilters
    },
    model: {
      value: _vm.filters.paymentMethod,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "paymentMethod", $$v);
      },
      expression: "filters.paymentMethod"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ວັນທີບັນທຶກຈາກ",
      "type": "date",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "prepend-inner-icon": "mdi-calendar-start"
    },
    on: {
      "change": _vm.applyFilters
    },
    model: {
      value: _vm.filters.bookingDateFrom,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "bookingDateFrom", $$v);
      },
      expression: "filters.bookingDateFrom"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ວັນທີບັນທຶກເຖິງ",
      "type": "date",
      "outlined": "",
      "dense": "",
      "hide-details": "",
      "prepend-inner-icon": "mdi-calendar-end"
    },
    on: {
      "change": _vm.applyFilters
    },
    model: {
      value: _vm.filters.bookingDateTo,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "bookingDateTo", $$v);
      },
      expression: "filters.bookingDateTo"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": _vm.resetFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n                Reset\n              ")], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mt-3"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-table")]), _vm._v(" "), _c('span', [_vm._v("ລາຍການການຮັບຊຳລະ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "outlined": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.filteredReceipts.length) + " ລາຍການ\n          ")])], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.paginatedReceipts,
      "loading": _vm.loading,
      "items-per-page": _vm.pagination.perPage,
      "page": _vm.pagination.currentPage,
      "server-items-length": _vm.filteredReceipts.length,
      "hide-default-footer": "",
      "loading-text": "ກຳລັງໂຫຼດຂໍ້ມູນ...",
      "no-data-text": "ບໍ່ມີຂໍ້ມູນ"
    },
    on: {
      "update:itemsPerPage": function ($event) {
        return _vm.$set(_vm.pagination, "perPage", $event);
      },
      "update:items-per-page": function ($event) {
        return _vm.$set(_vm.pagination, "perPage", $event);
      },
      "update:page": function ($event) {
        return _vm.$set(_vm.pagination, "currentPage", $event);
      }
    },
    scopedSlots: _vm._u([{
      key: "item.receiptNumber",
      fn: function ({
        item
      }) {
        return [_c('div', [_c('div', {
          staticClass: "font-weight-bold"
        }, [_vm._v(_vm._s(item.receiptNumber))]), _vm._v(" "), item.notes ? _c('div', {
          staticClass: "text-caption grey--text text-truncate",
          staticStyle: {
            "max-width": "150px"
          }
        }, [_vm._v("\n                " + _vm._s(item.notes) + "\n              ")]) : _vm._e()])];
      }
    }, {
      key: "item.bookingDate",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "text-caption"
        }, [_vm._v(_vm._s(_vm.formatDate(item.bookingDate)))])];
      }
    }, {
      key: "item.receivedDate",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "text-caption"
        }, [_vm._v(_vm._s(_vm.formatDate(item.receivedDate)))])];
      }
    }, {
      key: "item.invoice",
      fn: function ({
        item
      }) {
        return [item.invoiceHeader ? _c('div', [_c('div', {
          staticClass: "font-weight-medium"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": ""
          }
        }, [_vm._v("mdi-file-invoice")]), _vm._v("\n                " + _vm._s(item.invoiceHeader.invoiceNumber) + "\n              ")], 1), _vm._v(" "), item.invoiceHeader.customer ? _c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("\n                " + _vm._s(item.invoiceHeader.customer.name) + "\n              ")]) : _vm._e()]) : _c('span', {
          staticClass: "grey--text text-caption"
        }, [_vm._v("N/A")])];
      }
    }, {
      key: "item.totalReceivedAmount",
      fn: function ({
        item
      }) {
        var _item$receiveLines;
        return [_c('div', {
          staticClass: "text-right"
        }, [_c('div', {
          staticClass: "font-weight-bold"
        }, [_vm._v(_vm._s(_vm.formatCurrency(item.totalReceivedAmount)))]), _vm._v(" "), ((_item$receiveLines = item.receiveLines) === null || _item$receiveLines === void 0 ? void 0 : _item$receiveLines.length) > 0 ? _c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("\n                " + _vm._s(item.receiveLines.length) + " ການແບ່ງປັນ\n              ")]) : _vm._e()])];
      }
    }, {
      key: "item.paymentMethod",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": _vm.getPaymentMethodColor(item.paymentMethod),
            "text-color": "white"
          }
        }, [_vm._v("\n              " + _vm._s(_vm.formatPaymentMethod(item.paymentMethod)) + "\n            ")])];
      }
    }, {
      key: "item.referenceNumber",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "text-caption font-weight-medium",
          staticStyle: {
            "font-family": "monospace"
          }
        }, [_vm._v("\n              " + _vm._s(item.referenceNumber || '-') + "\n            ")])];
      }
    }, {
      key: "item.inputter",
      fn: function ({
        item
      }) {
        var _item$inputter, _item$maker;
        return [_c('div', {
          staticClass: "text-caption"
        }, [_c('div', [_vm._v(_vm._s(((_item$inputter = item.inputter) === null || _item$inputter === void 0 ? void 0 : _item$inputter.username) || ((_item$maker = item.maker) === null || _item$maker === void 0 ? void 0 : _item$maker.username) || 'N/A'))]), _vm._v(" "), item.createdAt ? _c('div', {
          staticClass: "grey--text"
        }, [_vm._v("\n                " + _vm._s(_vm.formatDate(item.createdAt)) + "\n              ")]) : _vm._e()])];
      }
    }, {
      key: "item.actions",
      fn: function ({
        item
      }) {
        return [_c(VMenu["a" /* default */], {
          attrs: {
            "bottom": "",
            "left": ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function ({
              on,
              attrs
            }) {
              return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
                attrs: {
                  "icon": "",
                  "small": ""
                }
              }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
                attrs: {
                  "small": ""
                }
              }, [_vm._v("mdi-dots-vertical")])], 1)];
            }
          }], null, true)
        }, [_vm._v(" "), _c(VList["a" /* default */], {
          attrs: {
            "dense": ""
          }
        }, [_c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.viewReceipt(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "info"
          }
        }, [_vm._v("mdi-eye")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ເບິ່ງລາຍລະອຽດ")])], 1), _vm._v(" "), _c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.editReceipt(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "warning"
          }
        }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ແກ້ໄຂ")])], 1), _vm._v(" "), _c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.printReceipt(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "success"
          }
        }, [_vm._v("mdi-printer")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ພິມໃບຮັບ")])], 1)], 1)], 1)];
      }
    }])
  }), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "align": "center",
      "justify": "space-between"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("\n                ສະແດງ " + _vm._s(_vm.paginationInfo.start) + " ເຖິງ " + _vm._s(_vm.paginationInfo.end) + " ຈາກ " + _vm._s(_vm.paginationInfo.total) + " ລາຍການ\n              ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex justify-end align-center",
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VSelect["a" /* default */], {
    staticClass: "mr-3",
    staticStyle: {
      "max-width": "100px"
    },
    attrs: {
      "items": [10, 25, 50, 100],
      "label": "ຈຳນວນຕໍ່ໜ້າ",
      "dense": "",
      "outlined": "",
      "hide-details": ""
    },
    on: {
      "change": _vm.updatePagination
    },
    model: {
      value: _vm.pagination.perPage,
      callback: function ($$v) {
        _vm.$set(_vm.pagination, "perPage", $$v);
      },
      expression: "pagination.perPage"
    }
  }), _vm._v(" "), _c(VPagination["a" /* default */], {
    attrs: {
      "length": _vm.totalPages,
      "total-visible": 7,
      "circle": ""
    },
    model: {
      value: _vm.pagination.currentPage,
      callback: function ($$v) {
        _vm.$set(_vm.pagination, "currentPage", $$v);
      },
      expression: "pagination.currentPage"
    }
  })], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('client-only', [_c('ReceiveHeaderMaintain', {
    attrs: {
      "visible": _vm.showEditDialog,
      "receipt": _vm.selectedReceipt,
      "invoices": _vm.invoices,
      "users": _vm.users
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onReceiptSave
    }
  })], 1), _vm._v(" "), _c('client-only', [_c('ReceiveHeaderView', {
    attrs: {
      "visible": _vm.showViewDialog,
      "receipt": _vm.selectedReceipt
    },
    on: {
      "close": _vm.closeViewDialog
    }
  })], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/accounting/ar/receive/index.vue?vue&type=template&id=cfa953c4&scoped=true&

// EXTERNAL MODULE: ./components/accounting/ar/receive/maintain/index.vue + 4 modules
var maintain = __webpack_require__(891);

// EXTERNAL MODULE: ./components/accounting/ar/receive/view/index.vue + 4 modules
var view = __webpack_require__(892);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/accounting/ar/receive/index.vue?vue&type=script&lang=js&


/* harmony default export */ var receivevue_type_script_lang_js_ = ({
  name: 'ReceiveHeaderSummary',
  components: {
    ReceiveHeaderMaintain: maintain["default"],
    ReceiveHeaderView: view["default"]
  },
  data() {
    return {
      showEditDialog: false,
      showViewDialog: false,
      selectedReceipt: null,
      receipts: [],
      filteredReceipts: [],
      invoices: [],
      users: [],
      loading: false,
      filters: {
        search: '',
        paymentMethod: '',
        bookingDateFrom: '',
        bookingDateTo: ''
      },
      sort: {
        field: 'bookingDate',
        direction: 'desc'
      },
      pagination: {
        currentPage: 1,
        perPage: 25
      },
      paymentMethodOptions: [{
        text: 'ເງິນສົດ',
        value: 'cash'
      }, {
        text: 'ເຊັກ',
        value: 'check'
      }, {
        text: 'ໂອນເງິນທະນາຄານ',
        value: 'bank_transfer'
      }, {
        text: 'ບັດເຄຣດິດ',
        value: 'credit_card'
      }, {
        text: 'ອື່ນໆ',
        value: 'other'
      }],
      headers: [{
        text: 'ເລກທີໃບຮັບ',
        value: 'receiptNumber',
        sortable: true,
        width: '180px'
      }, {
        text: 'ວັນທີບັນທຶກ',
        value: 'bookingDate',
        sortable: true,
        width: '120px'
      }, {
        text: 'ວັນທີຮັບເງິນ',
        value: 'receivedDate',
        sortable: true,
        width: '120px'
      }, {
        text: 'ໃບແຈ້ງໜີ້',
        value: 'invoice',
        sortable: false,
        width: '200px'
      }, {
        text: 'ຍອດເງິນ',
        value: 'totalReceivedAmount',
        sortable: true,
        align: 'end',
        width: '150px'
      }, {
        text: 'ວິທີຈ່າຍ',
        value: 'paymentMethod',
        sortable: true,
        width: '130px',
        align: 'center'
      }, {
        text: 'ເລກອ້າງອີງ',
        value: 'referenceNumber',
        sortable: false,
        width: '120px'
      }, {
        text: 'ຜູ້ບັນທຶກ',
        value: 'inputter',
        sortable: false,
        width: '150px'
      }, {
        text: 'ຟັງຊັ່ນ',
        value: 'actions',
        sortable: false,
        width: '80px',
        align: 'center'
      }]
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    paginatedReceipts() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
      const end = start + this.pagination.perPage;
      return this.filteredReceipts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredReceipts.length / this.pagination.perPage);
    },
    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      const end = Math.min(start + this.pagination.perPage - 1, this.filteredReceipts.length);
      return {
        start: this.filteredReceipts.length > 0 ? start : 0,
        end,
        total: this.filteredReceipts.length
      };
    }
  },
  mounted() {
    this.fetchReceipts();
    this.fetchInvoices();
    this.fetchUsers();
  },
  methods: {
    async fetchReceipts() {
      this.loading = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/ar-receive-headers', {
          params: {
            page: 1,
            limit: 1000
          }
        });
        if (data !== null && data !== void 0 && data.success) {
          this.receipts = data.data.receiveHeaders || [];
        } else {
          this.receipts = [];
        }
        this.applyFilters();
      } catch (error) {
        console.error(error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ');
      } finally {
        this.loading = false;
      }
    },
    async fetchInvoices() {
      try {
        const {
          data
        } = await this.$axios.get('/api/ar-invoices');
        if (data !== null && data !== void 0 && data.success) {
          this.invoices = data.data.invoices || [];
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUsers() {
      try {
        const {
          data
        } = await this.$axios.get('/api/user/find');
        this.users = Array.isArray(data) ? data : (data === null || data === void 0 ? void 0 : data.data) || [];
      } catch (error) {
        console.error(error);
      }
    },
    openCreateDialog() {
      this.selectedReceipt = null;
      this.showEditDialog = true;
    },
    editReceipt(receipt) {
      this.selectedReceipt = receipt;
      this.showEditDialog = true;
    },
    viewReceipt(receipt) {
      this.selectedReceipt = receipt;
      this.showViewDialog = true;
    },
    printReceipt(receipt) {
      this.$toast.info('ພິມໃບຮັບ: ' + receipt.receiptNumber);
    },
    closeEditDialog() {
      this.showEditDialog = false;
      this.selectedReceipt = null;
    },
    closeViewDialog() {
      this.showViewDialog = false;
      this.selectedReceipt = null;
    },
    async onReceiptSave(receiptData) {
      try {
        var _this$selectedReceipt, _response$data;
        this.loading = true;
        let response;
        if ((_this$selectedReceipt = this.selectedReceipt) !== null && _this$selectedReceipt !== void 0 && _this$selectedReceipt.id) {
          response = await this.$axios.put(`/api/ar-receive-headers/${this.selectedReceipt.id}`, receiptData);
        } else {
          response = await this.$axios.post('/api/ar-receive-headers', receiptData);
        }
        if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.success) {
          this.$toast.success('ບັນທຶກສຳເລັດ');
          this.closeEditDialog();
          await this.fetchReceipts();
        } else {
          var _response$data2;
          throw new Error(((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Save failed');
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error(error);
        this.$toast.error(((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ເກີດຂໍ້ຜິດພາດ');
      } finally {
        this.loading = false;
      }
    },
    applyFilters() {
      let filtered = [...this.receipts];
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase();
        filtered = filtered.filter(r => {
          var _r$referenceNumber, _r$notes;
          return r.receiptNumber.toLowerCase().includes(search) || ((_r$referenceNumber = r.referenceNumber) === null || _r$referenceNumber === void 0 ? void 0 : _r$referenceNumber.toLowerCase().includes(search)) || ((_r$notes = r.notes) === null || _r$notes === void 0 ? void 0 : _r$notes.toLowerCase().includes(search));
        });
      }
      if (this.filters.paymentMethod) {
        filtered = filtered.filter(r => r.paymentMethod === this.filters.paymentMethod);
      }
      if (this.filters.bookingDateFrom || this.filters.bookingDateTo) {
        filtered = filtered.filter(r => {
          const bookingDate = new Date(r.bookingDate);
          const dateFrom = this.filters.bookingDateFrom ? new Date(this.filters.bookingDateFrom) : null;
          const dateTo = this.filters.bookingDateTo ? new Date(this.filters.bookingDateTo) : null;
          if (dateFrom && bookingDate < dateFrom) return false;
          if (dateTo && bookingDate > dateTo) return false;
          return true;
        });
      }
      this.filteredReceipts = filtered;
      this.pagination.currentPage = 1;
    },
    resetFilters() {
      this.filters = {
        search: '',
        paymentMethod: '',
        bookingDateFrom: '',
        bookingDateTo: ''
      };
      this.applyFilters();
    },
    updatePagination() {
      this.pagination.currentPage = 1;
    },
    exportData() {
      const csvData = this.convertToCSV(this.filteredReceipts);
      this.downloadCSV(csvData, 'receipts-export.csv');
    },
    convertToCSV(data) {
      const headers = ['Receipt Number', 'Booking Date', 'Received Date', 'Invoice', 'Amount', 'Payment Method', 'Reference'];
      const csvContent = [headers.join(','), ...data.map(row => {
        var _row$invoiceHeader;
        return [`"${row.receiptNumber}"`, row.bookingDate, row.receivedDate, `"${((_row$invoiceHeader = row.invoiceHeader) === null || _row$invoiceHeader === void 0 ? void 0 : _row$invoiceHeader.invoiceNumber) || ''}"`, row.totalReceivedAmount, row.paymentMethod, `"${row.referenceNumber || ''}"`].join(',');
      })].join('\n');
      return csvContent;
    },
    downloadCSV(csvContent, filename) {
      const blob = new Blob([csvContent], {
        type: 'text/csv'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-GB');
    },
    formatCurrency(amount) {
      if (!amount) return '0.00';
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatPaymentMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        check: 'ເຊັກ',
        bank_transfer: 'ໂອນທະນາຄານ',
        credit_card: 'ບັດເຄຣດິດ',
        other: 'ອື່ນໆ'
      };
      return methods[method] || method;
    },
    getPaymentMethodColor(method) {
      const colors = {
        cash: 'success',
        bank_transfer: 'info',
        check: 'warning',
        credit_card: 'error',
        other: 'grey'
      };
      return colors[method] || 'grey';
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/accounting/ar/receive/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ar_receivevue_type_script_lang_js_ = (receivevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/accounting/ar/receive/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1076)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ar_receivevue_type_script_lang_js_,
  receivevue_type_template_id_cfa953c4_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "cfa953c4",
  "57587191"
  
)

/* harmony default export */ var receive = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(705);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("74727b96", content, true, context)
};

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(707);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("66df850a", content, true, context)
};

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(701);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5bec9846", content, true)

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;justify-content:center;list-style-type:none;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{opacity:.6;pointer-events:none}.v-pagination__item{background:transparent;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{align-items:center;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;height:32px;justify-content:center;margin:.3rem 10px;-webkit-text-decoration:none;text-decoration:none;width:32px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{align-items:flex-end;display:inline-flex;height:32px;justify-content:center;margin:.3rem;width:32px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3423b82d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(620);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3423b82d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3423b82d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3423b82d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3423b82d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-3423b82d]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:10px;position:fixed;top:0;width:100%;z-index:1050}.enhanced-dialog[data-v-3423b82d]{height:95vh;max-height:95vh;max-width:98vw}.enhanced-dialog[data-v-3423b82d],.invoice-browser-dialog[data-v-3423b82d]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;overflow:hidden;width:100%}.invoice-browser-dialog[data-v-3423b82d]{height:80vh;max-height:80vh;max-width:90vw}.modal-header[data-v-3423b82d]{background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;min-height:50px;padding:10px 15px}.modal-header[data-v-3423b82d],.modal-title[data-v-3423b82d]{align-items:center;display:flex}.modal-title[data-v-3423b82d]{font-size:16px;font-weight:600;gap:8px;margin:0}.close-button[data-v-3423b82d]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;padding:4px;transition:background .2s}.close-button[data-v-3423b82d]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-3423b82d]{flex:1;overflow:hidden}.loading-state[data-v-3423b82d],.modal-body[data-v-3423b82d]{display:flex;flex-direction:column}.loading-state[data-v-3423b82d]{align-items:center;color:#666;justify-content:center;padding:30px}.spinner[data-v-3423b82d]{animation:spin-3423b82d 1s linear infinite;border:3px solid #f3f3f3;border-radius:50%;border-top-color:#28a745;height:30px;margin-bottom:10px;width:30px}@keyframes spin-3423b82d{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.receipt-form[data-v-3423b82d]{display:flex;flex:1;flex-direction:column;overflow:hidden}.tab-navigation[data-v-3423b82d]{background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;min-height:45px}.tab-btn[data-v-3423b82d]{align-items:center;background:none;border:none;color:#666;cursor:pointer;display:flex;flex:1;font-size:13px;font-weight:500;gap:6px;justify-content:center;padding:8px 15px;position:relative;transition:all .2s}.tab-btn[data-v-3423b82d]:hover{background:rgba(40,167,69,.1);color:#28a745}.tab-btn.active[data-v-3423b82d]{background:#fff;border-bottom:2px solid #28a745;color:#28a745}.line-count[data-v-3423b82d]{background:#28a745;border-radius:10px;color:#fff;font-size:11px;min-width:18px;padding:1px 6px;text-align:center}.tab-content[data-v-3423b82d]{flex:1;overflow-y:auto;padding:0}.form-container[data-v-3423b82d]{padding:15px}.form-row[data-v-3423b82d]{grid-gap:10px;display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:12px}.form-group[data-v-3423b82d]{margin-bottom:0}.form-group.full-width[data-v-3423b82d]{grid-column:1/-1}.form-group label[data-v-3423b82d]{color:#333;display:block;font-size:12px;font-weight:500;margin-bottom:3px}.form-group label.required[data-v-3423b82d]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-3423b82d]{border:1px solid #ddd;border-radius:4px;font-size:13px;line-height:1.2;padding:6px 8px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-3423b82d]:focus{border-color:#28a745;box-shadow:0 0 0 2px rgba(40,167,69,.1);outline:none}.form-control.is-invalid[data-v-3423b82d]{border-color:#e74c3c;box-shadow:0 0 0 2px rgba(231,76,60,.1)}.form-control-xs[data-v-3423b82d]{font-size:12px;padding:4px 6px}.textarea-compact[data-v-3423b82d]{min-height:50px;resize:vertical}.invalid-feedback[data-v-3423b82d]{color:#e74c3c;display:block;font-size:11px;margin-top:3px;width:100%}.auto-calculated-field[data-v-3423b82d]{background-color:#f8f9fa!important;border-style:dashed!important;color:#495057!important;cursor:not-allowed;font-weight:600}.auto-calculated-field[data-v-3423b82d]:disabled{opacity:.8}.form-group label.auto-calculated[data-v-3423b82d]{align-items:center;color:#28a745;display:flex;font-weight:600;gap:6px}.form-text.text-muted[data-v-3423b82d]{align-items:center;color:#6c757d!important;display:flex;font-size:11px;gap:4px;margin-top:3px}.invoice-selector[data-v-3423b82d]{display:flex;gap:8px}.invoice-selector select[data-v-3423b82d]{flex:1}.allocation-summary[data-v-3423b82d],.amount-summary[data-v-3423b82d]{background:#f8f9fa;border-left:3px solid #28a745;border-radius:6px;margin-top:15px;padding:12px}.totals-compact[data-v-3423b82d]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}.total-item[data-v-3423b82d]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.total-item.success-balance[data-v-3423b82d]{background:#d4edda;border-radius:4px;grid-column:1/-1;padding:6px 8px}.total-item .amount[data-v-3423b82d]{color:#333;font-weight:600}.total-item .amount.received[data-v-3423b82d]{color:#28a745}.total-item .amount.allocated[data-v-3423b82d]{color:#007bff}.amount.balanced[data-v-3423b82d]{color:#155724!important;font-weight:600;gap:4px}.amount.balanced[data-v-3423b82d],.balance-info[data-v-3423b82d]{align-items:center;display:flex}.balance-info[data-v-3423b82d]{background:#e7f3ff;border:1px solid #bee5eb;border-radius:4px;color:#0c5460;font-size:12px;gap:6px;margin-top:10px;padding:8px}.allocation-section[data-v-3423b82d]{padding:15px}.allocation-header[data-v-3423b82d]{margin-bottom:15px}.allocation-info[data-v-3423b82d]{align-items:center;display:flex;flex-wrap:wrap;gap:10px}.invoice-info[data-v-3423b82d]{color:#666;font-size:13px}.allocation-count-info[data-v-3423b82d]{background:#e9ecef;border-radius:12px;color:#666;font-size:11px;font-weight:500;padding:4px 8px}.no-invoice-state[data-v-3423b82d],.no-lines-state[data-v-3423b82d],.no-results-state[data-v-3423b82d]{background:#f8f9fa;border:1px dashed #dee2e6;border-radius:6px;padding:40px 15px;text-align:center}.empty-content i[data-v-3423b82d]{color:#dee2e6;font-size:36px;margin-bottom:15px}.empty-content h4[data-v-3423b82d]{color:#666;font-size:16px;margin-bottom:8px}.empty-content p[data-v-3423b82d]{color:#999;font-size:14px;margin-bottom:20px}.allocation-notice[data-v-3423b82d]{background:#e7f3ff;border-left:3px solid #007bff;border-radius:4px;color:#495057;font-size:12px;gap:8px;padding:10px}.allocation-notice[data-v-3423b82d],.quick-allocation-actions[data-v-3423b82d]{align-items:center;display:flex;margin-bottom:15px}.quick-allocation-actions[data-v-3423b82d]{border-bottom:1px solid #e9ecef;justify-content:space-between;padding:10px 0}.quick-actions-left[data-v-3423b82d]{display:flex;flex-wrap:wrap;gap:8px}.allocation-helper[data-v-3423b82d]{align-items:center;color:#666;display:flex;font-size:11px;font-style:italic;gap:4px}.allocation-table-container[data-v-3423b82d],.invoice-table-container[data-v-3423b82d]{border:1px solid #e9ecef;border-radius:6px;margin-bottom:15px;overflow:hidden}.allocation-table .table[data-v-3423b82d],.invoice-table-container .table[data-v-3423b82d]{border-collapse:collapse;margin:0;width:100%}.table-compact[data-v-3423b82d]{font-size:12px}.allocation-table .table th[data-v-3423b82d],.invoice-table-container .table th[data-v-3423b82d]{background:#f8f9fa;border-bottom:1px solid #dee2e6;font-size:11px;font-weight:600;padding:6px 4px;text-align:center}.allocation-table .table td[data-v-3423b82d],.invoice-table-container .table td[data-v-3423b82d]{border-top:1px solid #dee2e6;font-size:11px;padding:4px;vertical-align:middle}.line-number[data-v-3423b82d]{color:#666;font-weight:600;text-align:center}.invoice-line-display[data-v-3423b82d]{line-height:1.3}.line-description[data-v-3423b82d]{color:#333;font-size:12px;font-weight:500;margin-bottom:2px}.line-details[data-v-3423b82d]{color:#666;font-size:10px}.invoice-line-total[data-v-3423b82d],.remaining-amount[data-v-3423b82d]{color:#28a745;font-size:11px;font-weight:600;text-align:right}.over-allocated[data-v-3423b82d]{color:#dc3545!important}.fully-allocated[data-v-3423b82d]{color:#6c757d!important}.allocation-row[data-v-3423b82d],.invoice-row[data-v-3423b82d]{transition:background-color .2s}.allocation-row[data-v-3423b82d]:hover,.invoice-row[data-v-3423b82d]:hover{background-color:rgba(40,167,69,.05)}.search-section[data-v-3423b82d]{background:#f8f9fa;border-bottom:1px solid #e9ecef;padding:15px}.search-input-group[data-v-3423b82d]{max-width:400px;position:relative}.search-icon[data-v-3423b82d]{color:#666;font-size:14px;left:10px;position:absolute;top:50%;transform:translateY(-50%)}.search-input[data-v-3423b82d]{border-radius:6px;font-size:14px;padding-left:35px}.invoice-list[data-v-3423b82d]{flex:1;max-height:400px;overflow-y:auto}.customer-info[data-v-3423b82d]{line-height:1.3}.customer-name[data-v-3423b82d]{color:#333;font-size:12px;font-weight:500}.customer-email[data-v-3423b82d]{color:#666;font-size:10px}.amount-cell[data-v-3423b82d]{color:#28a745;font-size:11px;font-weight:600;text-align:right}.status-badge[data-v-3423b82d]{border-radius:10px;font-size:9px;font-weight:500;padding:2px 6px;text-transform:uppercase}.status-draft[data-v-3423b82d]{background:#ffeaa7;color:#fdcb6e}.status-sent[data-v-3423b82d]{background:#74b9ff;color:#0984e3}.status-paid[data-v-3423b82d]{background:#00b894;color:#00a085}.status-overdue[data-v-3423b82d]{background:#ff7675;color:#d63031}.status-cancelled[data-v-3423b82d]{background:#636e72;color:#2d3436}.btn[data-v-3423b82d]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:12px;gap:4px;line-height:1.2;padding:6px 12px;transition:all .2s ease}.btn-compact[data-v-3423b82d]{font-size:12px;padding:5px 10px}.btn-xs[data-v-3423b82d]{font-size:10px;padding:3px 8px}.btn-primary[data-v-3423b82d]{background:#28a745;color:#fff}.btn-secondary[data-v-3423b82d]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-3423b82d]{background:#fff;border:1px solid #007bff;color:#007bff}.btn-outline-success[data-v-3423b82d]{background:#fff;border:1px solid #28a745;color:#28a745}.btn-outline-info[data-v-3423b82d]{background:#fff;border:1px solid #17a2b8;color:#17a2b8}.btn-outline-warning[data-v-3423b82d]{background:#fff;border:1px solid #ffc107;color:#ffc107}.btn[data-v-3423b82d]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-3423b82d]:disabled{cursor:not-allowed;opacity:.6;transform:none}.modal-footer[data-v-3423b82d]{background:#f8f9fa;border-top:1px solid #e9ecef;justify-content:space-between;min-height:50px;padding:10px 15px}.footer-info[data-v-3423b82d],.modal-footer[data-v-3423b82d]{align-items:center;display:flex}.result-count[data-v-3423b82d]{color:#666;font-size:12px}.footer-actions[data-v-3423b82d]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-3423b82d],.invoice-browser-dialog[data-v-3423b82d]{border-radius:0;height:100vh;max-height:100vh;width:100%}.modal-overlay[data-v-3423b82d]{padding:0}.form-row[data-v-3423b82d],.totals-compact[data-v-3423b82d]{grid-template-columns:1fr}.allocation-header[data-v-3423b82d]{flex-direction:column;gap:10px}.allocation-info[data-v-3423b82d]{flex-direction:column;gap:8px}.allocation-table-container[data-v-3423b82d],.invoice-table-container[data-v-3423b82d]{overflow-x:auto}.allocation-table .table[data-v-3423b82d],.invoice-table-container .table[data-v-3423b82d]{min-width:600px}.footer-actions[data-v-3423b82d]{flex-direction:column}.footer-actions .btn[data-v-3423b82d]{justify-content:center;width:100%}.invoice-selector[data-v-3423b82d]{flex-direction:column;gap:8px}.quick-allocation-actions[data-v-3423b82d]{flex-direction:column;gap:10px}.search-input-group[data-v-3423b82d]{max-width:100%}}@media (max-width:480px){.modal-header[data-v-3423b82d]{padding:8px 10px}.modal-title[data-v-3423b82d]{font-size:14px}.allocation-section[data-v-3423b82d],.form-container[data-v-3423b82d]{padding:10px}.modal-footer[data-v-3423b82d]{padding:8px 10px}.tab-btn[data-v-3423b82d]{font-size:11px;padding:6px 8px}.quick-actions-left[data-v-3423b82d]{flex-direction:column;gap:6px;width:100%}.quick-actions-left .btn[data-v-3423b82d]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6a6f1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(621);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6a6f1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6a6f1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6a6f1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6a6f1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-3e6a6f1c]{align-items:center;background-color:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.modal-container[data-v-3e6a6f1c]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1000px;overflow:hidden;width:100%}.modal-header[data-v-3e6a6f1c]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-header h2[data-v-3e6a6f1c]{color:#fff;font-size:24px;font-weight:600;margin:0}.close-btn[data-v-3e6a6f1c]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:24px;padding:4px;transition:all .2s}.close-btn[data-v-3e6a6f1c]:hover{background-color:hsla(0,0%,100%,.2)}.modal-body[data-v-3e6a6f1c]{flex:1;overflow-y:auto;padding:24px}.modal-footer[data-v-3e6a6f1c]{background-color:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.info-section[data-v-3e6a6f1c]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:32px;overflow:hidden}.info-section[data-v-3e6a6f1c]:last-child{margin-bottom:0}.section-header[data-v-3e6a6f1c]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:16px 20px}.section-header h3[data-v-3e6a6f1c]{align-items:center;color:#333;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header h3 i[data-v-3e6a6f1c]{color:#28a745}.item-count[data-v-3e6a6f1c]{background-color:#e9ecef;border-radius:12px;color:#666;font-size:12px;padding:4px 8px}.info-grid[data-v-3e6a6f1c]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));padding:20px}.info-item[data-v-3e6a6f1c]{display:flex;flex-direction:column;gap:4px}.info-item label[data-v-3e6a6f1c]{color:#666;font-size:12px;font-weight:500;letter-spacing:.5px;text-transform:uppercase}.info-item span[data-v-3e6a6f1c]{color:#333;font-size:14px;font-weight:500}.receipt-number[data-v-3e6a6f1c]{color:#28a745!important;font-family:monospace;font-size:16px!important;font-weight:600!important}.invoice-number[data-v-3e6a6f1c]{color:#007bff!important;font-family:monospace;font-size:15px!important;font-weight:600!important}.customer-name[data-v-3e6a6f1c]{color:#495057!important;font-weight:600!important}.amount-received[data-v-3e6a6f1c]{color:#28a745!important;font-size:18px!important;font-weight:700!important}.invoice-amount[data-v-3e6a6f1c]{color:#495057!important;font-size:16px!important;font-weight:600!important}.reference-number[data-v-3e6a6f1c]{color:#495057!important;font-family:monospace;font-size:14px!important}.payment-method-badge[data-v-3e6a6f1c]{border-radius:12px;font-size:12px;font-weight:600;padding:6px 12px;text-transform:uppercase}.payment-method-badge.cash[data-v-3e6a6f1c]{background-color:#d4edda;color:#155724}.payment-method-badge.bank_transfer[data-v-3e6a6f1c]{background-color:#cce5ff;color:#004085}.payment-method-badge.check[data-v-3e6a6f1c]{background-color:#fff3cd;color:#856404}.payment-method-badge.credit_card[data-v-3e6a6f1c]{background-color:#f8d7da;color:#721c24}.payment-method-badge.other[data-v-3e6a6f1c]{background-color:#e2e3e5;color:#383d41}.status-badge[data-v-3e6a6f1c]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.draft[data-v-3e6a6f1c]{background-color:#f8f9fa;color:#6c757d}.status-badge.sent[data-v-3e6a6f1c]{background-color:#d1ecf1;color:#0c5460}.status-badge.paid[data-v-3e6a6f1c]{background-color:#d4edda;color:#155724}.status-badge.overdue[data-v-3e6a6f1c]{background-color:#f8d7da;color:#721c24}.status-badge.cancelled[data-v-3e6a6f1c]{background-color:#e2e3e5;color:#383d41}.payment-summary[data-v-3e6a6f1c]{padding:20px}.summary-row[data-v-3e6a6f1c]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:12px 0}.summary-row[data-v-3e6a6f1c]:last-child{border-bottom:none}.summary-row.subtotal[data-v-3e6a6f1c]{border-top:2px solid #28a745;font-weight:600;margin-top:8px;padding-top:16px}.summary-row label[data-v-3e6a6f1c]{color:#495057;font-size:14px;font-weight:500}.summary-row .amount[data-v-3e6a6f1c]{font-family:monospace;font-size:16px;font-weight:600}.amount.invoice-total[data-v-3e6a6f1c]{color:#495057}.amount.current-payment[data-v-3e6a6f1c]{color:#28a745}.amount.total-received[data-v-3e6a6f1c]{color:#007bff}.amount.remaining[data-v-3e6a6f1c]{color:#dc3545;font-size:18px}.amount.remaining.fully-paid[data-v-3e6a6f1c]{color:#28a745}.paid-status[data-v-3e6a6f1c]{align-items:center;background:#d4edda;border-radius:6px;color:#155724;display:flex;font-weight:600;gap:8px;margin-top:16px;padding:12px 16px}.paid-status i[data-v-3e6a6f1c]{font-size:18px}.notes-content[data-v-3e6a6f1c]{background-color:#f8f9fa;border-radius:4px;color:#495057;font-size:14px;line-height:1.6;margin:20px;padding:20px}.table-container[data-v-3e6a6f1c]{overflow-x:auto}.data-table[data-v-3e6a6f1c]{border-collapse:collapse;width:100%}.data-table td[data-v-3e6a6f1c],.data-table th[data-v-3e6a6f1c]{border-bottom:1px solid #e9ecef;padding:12px;text-align:left}.data-table th[data-v-3e6a6f1c]{background-color:#f8f9fa;color:#495057;font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}.data-table td[data-v-3e6a6f1c]{color:#333;font-size:14px}.data-table tbody tr[data-v-3e6a6f1c]:hover{background-color:#f8f9fa}.line-number[data-v-3e6a6f1c]{color:#666;font-weight:600;text-align:center}.invoice-line-info .line-description[data-v-3e6a6f1c]{color:#333;font-weight:600;margin-bottom:4px}.invoice-line-info .line-details[data-v-3e6a6f1c]{color:#666;font-size:12px}.allocated-amount[data-v-3e6a6f1c]{color:#28a745;font-weight:600;text-align:right}.line-notes[data-v-3e6a6f1c]{color:#666;font-style:italic}.allocation-status[data-v-3e6a6f1c]{border-radius:8px;font-size:11px;font-weight:600;padding:3px 8px;text-transform:uppercase}.allocation-status.fully-allocated[data-v-3e6a6f1c]{background-color:#d4edda;color:#155724}.allocation-status.partially-allocated[data-v-3e6a6f1c]{background-color:#fff3cd;color:#856404}.allocation-status.not-allocated[data-v-3e6a6f1c]{background-color:#f8d7da;color:#721c24}.allocation-status.unknown[data-v-3e6a6f1c]{background-color:#e2e3e5;color:#383d41}.data-table tfoot td[data-v-3e6a6f1c]{background-color:#f8f9fa;border-bottom:none;border-top:2px solid #dee2e6;font-weight:600}.allocated-total[data-v-3e6a6f1c]{color:#28a745;text-align:right}.btn[data-v-3e6a6f1c]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;justify-content:center;min-width:120px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn-primary[data-v-3e6a6f1c]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-3e6a6f1c]:hover{background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-3e6a6f1c]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-3e6a6f1c]:hover{background-color:#5a6268;border-color:#5a6268}.btn-success[data-v-3e6a6f1c]{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success[data-v-3e6a6f1c]:hover{background-color:#218838;border-color:#218838}@media (max-width:768px){.modal-overlay[data-v-3e6a6f1c]{padding:10px}.modal-container[data-v-3e6a6f1c]{max-height:95vh;max-width:100%}.modal-header[data-v-3e6a6f1c]{padding:20px}.modal-header h2[data-v-3e6a6f1c]{font-size:20px}.modal-body[data-v-3e6a6f1c]{padding:20px}.modal-footer[data-v-3e6a6f1c]{flex-direction:column;padding:16px 20px}.info-grid[data-v-3e6a6f1c]{gap:12px;grid-template-columns:1fr;padding:16px}.section-header[data-v-3e6a6f1c]{align-items:flex-start;flex-direction:column;gap:8px;padding:12px 16px}.payment-summary[data-v-3e6a6f1c]{padding:16px}.notes-content[data-v-3e6a6f1c]{margin:16px;padding:16px}.data-table[data-v-3e6a6f1c]{font-size:12px}.data-table td[data-v-3e6a6f1c],.data-table th[data-v-3e6a6f1c]{padding:8px}.btn[data-v-3e6a6f1c]{width:100%}}@media (max-width:576px){.modal-header[data-v-3e6a6f1c]{align-items:flex-start;flex-direction:column;gap:12px}.close-btn[data-v-3e6a6f1c]{position:absolute;right:16px;top:16px}.data-table td[data-v-3e6a6f1c],.data-table th[data-v-3e6a6f1c]{font-size:11px;padding:6px}.invoice-line-info .line-description[data-v-3e6a6f1c]{font-size:12px}.invoice-line-info .line-details[data-v-3e6a6f1c]{font-size:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1077);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2e658654", content, true, context)
};

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/maintain/index.vue?vue&type=template&id=3423b82d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.visible ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-3423b82d><h4 class=\"modal-title\" data-v-3423b82d><i class=\"fas fa-receipt\" data-v-3423b82d></i>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂການຮັບຊຳລະ' : 'ເພີ່ມການຮັບຊຳລະໃໝ່') + "\n        ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-3423b82d><i class=\"fas fa-times\" data-v-3423b82d></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-3423b82d>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-3423b82d></div> <p data-v-3423b82d>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"receipt-form\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<div class=\"tab-navigation\" data-v-3423b82d><button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'header'
  }]) + " data-v-3423b82d><i class=\"fas fa-file-alt\" data-v-3423b82d></i>\n              ຂໍ້ມູນການຮັບຊຳລະ\n            </button> <button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'allocations'
  }]) + " data-v-3423b82d><i class=\"fas fa-list\" data-v-3423b82d></i>\n              ການແບ່ງປັນຊຳລະ\n              " + (_vm.allocationLines.length > 0 ? "<span class=\"line-count\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.allocationLines.length)) + "</span>" : "<!---->") + "</button></div> "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'header' ? '' : 'none'
  }) + " data-v-3423b82d>", "</div>", [_vm._ssrNode("<form data-v-3423b82d>", "</form>", [_vm._ssrNode("<div class=\"form-container\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<div class=\"form-row\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-3423b82d><label for=\"receiptNumber\" class=\"required\" data-v-3423b82d>ເລກທີໃບຮັບ</label> <input id=\"receiptNumber\" type=\"text\" placeholder=\"RCP-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.receiptNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.receiptNumber
  }) + " data-v-3423b82d> " + (_vm.errors.receiptNumber ? "<div class=\"invalid-feedback\" data-v-3423b82d>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.receiptNumber) + "\n                    ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<label for=\"paymentMethod\" class=\"required\" data-v-3423b82d>ວິທີຈ່າຍ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentMethod,
      expression: "form.paymentMethod"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.paymentMethod
    },
    attrs: {
      "id": "paymentMethod"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "paymentMethod", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "check"
    }
  }, [_vm._v("ເຊັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("ໂອນເງິນທະນາຄານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "credit_card"
    }
  }, [_vm._v("ບັດເຄຣດິດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "other"
    }
  }, [_vm._v("ອື່ນໆ")])]), _vm._ssrNode(" " + (_vm.errors.paymentMethod ? "<div class=\"invalid-feedback\" data-v-3423b82d>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.paymentMethod) + "\n                    ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-3423b82d><label for=\"referenceNumber\" data-v-3423b82d>ເລກອ້າງອີງ</label> <input id=\"referenceNumber\" type=\"text\" placeholder=\"ເລກອ້າງອີງ...\"" + _vm._ssrAttr("value", _vm.form.referenceNumber) + " class=\"form-control\" data-v-3423b82d></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<div class=\"form-group full-width\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<label for=\"invoiceHeaderId\" class=\"required\" data-v-3423b82d>ໃບແຈ້ງໜີ້</label> "), _vm._ssrNode("<div class=\"invoice-selector\" data-v-3423b82d>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceHeaderId,
      expression: "form.invoiceHeaderId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.invoiceHeaderId
    },
    attrs: {
      "id": "invoiceHeaderId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "invoiceHeaderId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onInvoiceChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກໃບແຈ້ງໜີ້")]), _vm._v(" "), _vm._l(_vm.invoices, function (invoice) {
    return _c('option', {
      key: invoice.id,
      domProps: {
        "value": invoice.id
      }
    }, [_vm._v("\n                          " + _vm._s(invoice.invoiceNumber) + " - " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + " (" + _vm._s(_vm.formatCurrency(invoice.totalAmount)) + ")\n                        ")]);
  })], 2), _vm._ssrNode(" <button type=\"button\" title=\"ເລືອກໃບແຈ້ງໜີ້\" class=\"btn btn-outline-primary btn-compact\" data-v-3423b82d><i class=\"fas fa-search\" data-v-3423b82d></i>\n                        ຄົ້ນຫາ\n                      </button>")], 2), _vm._ssrNode(" " + (_vm.errors.invoiceHeaderId ? "<div class=\"invalid-feedback\" data-v-3423b82d>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.invoiceHeaderId) + "\n                    ") + "</div>" : "<!---->"))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-3423b82d><label for=\"bookingDate\" class=\"required\" data-v-3423b82d>ວັນທີບັນທຶກ</label> <input id=\"bookingDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.bookingDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.bookingDate
  }) + " data-v-3423b82d> " + (_vm.errors.bookingDate ? "<div class=\"invalid-feedback\" data-v-3423b82d>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.bookingDate) + "\n                    ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-3423b82d><label for=\"receivedDate\" class=\"required\" data-v-3423b82d>ວັນທີຮັບເງິນ</label> <input id=\"receivedDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.receivedDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.receivedDate
  }) + " data-v-3423b82d> " + (_vm.errors.receivedDate ? "<div class=\"invalid-feedback\" data-v-3423b82d>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.receivedDate) + "\n                    ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-3423b82d><label for=\"totalReceivedAmount\" class=\"auto-calculated\" data-v-3423b82d><i class=\"fas fa-calculator\" data-v-3423b82d></i>\n                      ຍອດເງິນທີ່ຮັບ\n                    </label> <input id=\"totalReceivedAmount\" type=\"number\" step=\"0.01\" readonly=\"readonly\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.form.totalReceivedAmount) + _vm._ssrClass("form-control auto-calculated-field", {
    'is-invalid': _vm.errors.totalReceivedAmount
  }) + " data-v-3423b82d> <small class=\"form-text text-muted\" data-v-3423b82d><i class=\"fas fa-info-circle\" data-v-3423b82d></i>\n                      ຄຳນວນອັດຕະໂນມັດ\n                    </small></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-3423b82d>", "</div>", [_vm._ssrNode("<label for=\"inputterId\" data-v-3423b82d>ຜູ້ບັນທຶກ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.inputterId,
      expression: "form.inputterId"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "inputterId",
      "disabled": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "inputterId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ບັນທຶກ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                        " + _vm._s(user.cus_name) + " - " + _vm._s(user.cus_email) + "\n                      ")]);
  })], 2)], 2)], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-3423b82d><div class=\"form-group full-width\" data-v-3423b82d><label for=\"notes\" data-v-3423b82d>ໝາຍເຫດ</label> <textarea id=\"notes\" rows=\"2\" placeholder=\"ໝາຍເຫດກ່ຽວກັບການຮັບຊຳລະ...\" class=\"form-control textarea-compact\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.form.notes)) + "</textarea></div></div> " + (_vm.isEdit ? "<div class=\"form-row\" data-v-3423b82d><div class=\"form-group full-width\" data-v-3423b82d><label for=\"reason\" class=\"required\" data-v-3423b82d>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-3423b82d> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-3423b82d>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.reason) + "\n                    ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"amount-summary\" data-v-3423b82d><div class=\"totals-compact\" data-v-3423b82d><div class=\"total-item\" data-v-3423b82d><span data-v-3423b82d>ຍອດທີ່ຮັບ:</span> <span class=\"amount received\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.form.totalReceivedAmount))) + "</span></div> <div class=\"total-item\" data-v-3423b82d><span data-v-3423b82d>ລວມການແບ່ງປັນ:</span> <span class=\"amount allocated\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedAllocatedTotal))) + "</span></div> <div class=\"total-item success-balance\" data-v-3423b82d><span data-v-3423b82d>ສະຖານະ:</span> <span class=\"amount balance balanced\" data-v-3423b82d><i class=\"fas fa-check-circle\" data-v-3423b82d></i>\n                        ສົມດຸນ\n                      </span></div></div> <div class=\"balance-info\" data-v-3423b82d><i class=\"fas fa-lightbulb\" data-v-3423b82d></i> <span data-v-3423b82d>ກະລຸນາໄປທີ່ແຖບ &quot;ການແບ່ງປັນຊຳລະ&quot; ເພື່ອໃສ່ຍອດແບ່ງປັນ</span></div></div>")], 2)])]), _vm._ssrNode(" <div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'allocations' ? '' : 'none'
  }) + " data-v-3423b82d><div class=\"allocation-section\" data-v-3423b82d><div class=\"allocation-header\" data-v-3423b82d><div class=\"allocation-info\" data-v-3423b82d>" + (_vm.selectedInvoice ? "<span class=\"invoice-info\" data-v-3423b82d><strong data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.selectedInvoice.invoiceNumber)) + "</strong>" + _vm._ssrEscape(" -\n                    " + _vm._s(_vm.selectedInvoice.customer ? _vm.selectedInvoice.customer.name : 'N/A') + "\n                  ") + "</span>" : "<!---->") + " " + (_vm.allocationLines.length > 0 ? "<span class=\"allocation-count-info\" data-v-3423b82d>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.allocationLines.length) + " ລາຍການ\n                  ") + "</span>" : "<!---->") + "</div></div> " + (!_vm.selectedInvoice ? "<div class=\"no-invoice-state\" data-v-3423b82d><div class=\"empty-content\" data-v-3423b82d><i class=\"fas fa-file-invoice\" data-v-3423b82d></i> <h4 data-v-3423b82d>ກະລຸນາເລືອກໃບແຈ້ງໜີ້ກ່ອນ</h4> <p data-v-3423b82d>ເພື່ອເຮັດການແບ່ງປັນການຮັບຊຳລະ ກະລຸນາເລືອກໃບແຈ້ງໜີ້ໃນແຖບຂໍ້ມູນການຮັບຊຳລະກ່ອນ</p> <button type=\"button\" class=\"btn btn-primary\" data-v-3423b82d><i class=\"fas fa-arrow-left\" data-v-3423b82d></i>\n                    ກັບໄປເລືອກໃບແຈ້ງໜີ້\n                  </button></div></div>" : _vm.allocationLines.length > 0 ? "<div class=\"allocation-table-container\" data-v-3423b82d><div class=\"allocation-notice\" data-v-3423b82d><i class=\"fas fa-info-circle\" data-v-3423b82d></i> <span data-v-3423b82d>ລາຍການດ້ານລຸ່ມແມ່ນມາຈາກໃບແຈ້ງໜີ້ທີ່ເລືອກ - ກະລຸນາໃສ່ຍອດແບ່ງປັນ</span></div> <div class=\"quick-allocation-actions\" data-v-3423b82d><div class=\"quick-actions-left\" data-v-3423b82d><button type=\"button\" title=\"ແບ່ງປັນຍອດເຕັມ\" class=\"btn btn-outline-primary btn-compact\" data-v-3423b82d><i class=\"fas fa-file-invoice-dollar\" data-v-3423b82d></i>\n                      ຍອດເຕັມ\n                    </button> <button type=\"button\" title=\"ແບ່ງເທົ່າກັນ\" class=\"btn btn-outline-success btn-compact\" data-v-3423b82d><i class=\"fas fa-equals\" data-v-3423b82d></i>\n                      ແບ່ງເທົ່າກັນ\n                    </button> <button type=\"button\" title=\"ແບ່ງຕາມອັດຕາສ່ວນ\" class=\"btn btn-outline-info btn-compact\" data-v-3423b82d><i class=\"fas fa-percentage\" data-v-3423b82d></i>\n                      ຕາມອັດຕາສ່ວນ\n                    </button> <button type=\"button\" class=\"btn btn-outline-warning btn-compact\" data-v-3423b82d><i class=\"fas fa-eraser\" data-v-3423b82d></i>\n                      ລົບລ້າງ\n                    </button></div> <div class=\"quick-actions-right\" data-v-3423b82d><span class=\"allocation-helper\" data-v-3423b82d><i class=\"fas fa-lightbulb\" data-v-3423b82d></i>\n                      ໃຊ້ປຸ່ມດ້ານຊ້າຍເພື່ອແບ່ງປັນອັດຕະໂນມັດ\n                    </span></div></div> <div class=\"allocation-table\" data-v-3423b82d><table class=\"table table-compact\" data-v-3423b82d><thead data-v-3423b82d><tr data-v-3423b82d><th style=\"width: 30px\" data-v-3423b82d>#</th> <th style=\"width: 250px\" data-v-3423b82d>ລາຍການໃບແຈ້ງໜີ້</th> <th style=\"width: 80px\" data-v-3423b82d>ຍອດໃບແຈ້ງ</th> <th style=\"width: 90px\" data-v-3423b82d>ຍອດແບ່ງປັນ *</th> <th style=\"width: 90px\" data-v-3423b82d>ວັນທີແບ່ງປັນ *</th> <th style=\"width: 80px\" data-v-3423b82d>ຍອດຄົງເຫຼືອ</th> <th style=\"width: 120px\" data-v-3423b82d>ໝາຍເຫດ</th></tr></thead> <tbody data-v-3423b82d>" + _vm._ssrList(_vm.allocationLines, function (allocation, index) {
    return "<tr class=\"allocation-row\" data-v-3423b82d><td class=\"line-number\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(allocation.lineNumber)) + "</td> <td data-v-3423b82d><div class=\"invoice-line-display\" data-v-3423b82d><div class=\"line-description\" data-v-3423b82d><strong data-v-3423b82d>" + _vm._ssrEscape(_vm._s(allocation.invoiceLine.description)) + "</strong></div> <div class=\"line-details\" data-v-3423b82d>" + _vm._ssrEscape("\n                              ຈຳນວນ: " + _vm._s(_vm.formatNumber(allocation.invoiceLine.quantity)) + " ×\n                              " + _vm._s(_vm.formatCurrency(allocation.invoiceLine.unitPrice)) + "\n                              ") + (allocation.invoiceLine.taxRate > 0 ? "<span data-v-3423b82d>" + _vm._ssrEscape("\n                                + ພາສີ " + _vm._s(allocation.invoiceLine.taxRate) + "%\n                              ") + "</span>" : "<!---->") + "</div></div></td> <td class=\"invoice-line-total\" data-v-3423b82d>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.formatCurrency(allocation.invoiceLine.lineTotal)) + "\n                        ") + "</td> <td data-v-3423b82d><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("max", allocation.invoiceLine.lineTotal) + " placeholder=\"0.00\"" + _vm._ssrAttr("value", allocation.allocatedAmount) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`allocation_${index}_allocatedAmount`]
    }) + " data-v-3423b82d> " + (_vm.errors[`allocation_${index}_allocatedAmount`] ? "<div class=\"invalid-feedback\" data-v-3423b82d>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.errors[`allocation_${index}_allocatedAmount`]) + "\n                          ") + "</div>" : "<!---->") + "</td> <td data-v-3423b82d><input type=\"date\"" + _vm._ssrAttr("value", allocation.allocationDate) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`allocation_${index}_allocationDate`]
    }) + " data-v-3423b82d></td> <td class=\"remaining-amount\" data-v-3423b82d><span" + _vm._ssrClass(null, {
      'over-allocated': _vm.isOverAllocated(allocation),
      'fully-allocated': _vm.isFullyAllocated(allocation)
    }) + " data-v-3423b82d>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.formatCurrency(_vm.getRemainingAmount(allocation))) + "\n                          ") + "</span></td> <td data-v-3423b82d><input type=\"text\" placeholder=\"ໝາຍເຫດ...\"" + _vm._ssrAttr("value", allocation.notes) + " class=\"form-control form-control-xs\" data-v-3423b82d></td></tr>";
  }) + "</tbody></table></div> <div class=\"allocation-summary\" data-v-3423b82d><div class=\"totals-compact\" data-v-3423b82d><div class=\"total-item\" data-v-3423b82d><span data-v-3423b82d>ຍອດໃບແຈ້ງໜີ້:</span> <span class=\"amount\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.selectedInvoice.totalAmount))) + "</span></div> <div class=\"total-item\" data-v-3423b82d><span data-v-3423b82d>ຍອດທີ່ຮັບ:</span> <span class=\"amount received\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.form.totalReceivedAmount))) + "</span></div> <div class=\"total-item\" data-v-3423b82d><span data-v-3423b82d>ລວມການແບ່ງປັນ:</span> <span class=\"amount allocated\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedAllocatedTotal))) + "</span></div> <div class=\"total-item success-balance\" data-v-3423b82d><span data-v-3423b82d>ສະຖານະ:</span> <span class=\"amount balance balanced\" data-v-3423b82d><i class=\"fas fa-check-circle\" data-v-3423b82d></i>\n                        ສົມດຸນ\n                      </span></div></div> <div class=\"balance-info\" data-v-3423b82d><i class=\"fas fa-info-circle\" data-v-3423b82d></i> <span data-v-3423b82d>ຍອດທີ່ຮັບຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກລວມຍອດການແບ່ງປັນທັງໝົດ</span></div></div></div>" : "<div class=\"no-lines-state\" data-v-3423b82d><div class=\"empty-content\" data-v-3423b82d><i class=\"fas fa-list\" data-v-3423b82d></i> <h4 data-v-3423b82d>ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການ</h4> <p data-v-3423b82d>ໃບແຈ້ງໜີ້ທີ່ເລືອກບໍ່ມີລາຍການສິນຄ້າ/ການບໍລິການ</p></div></div>") + "</div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-3423b82d><div class=\"footer-actions\" data-v-3423b82d><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary btn-compact\" data-v-3423b82d><i class=\"fas fa-times\" data-v-3423b82d></i>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary btn-compact\" data-v-3423b82d>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-3423b82d></i>" : "<i class=\"fas fa-save\" data-v-3423b82d></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button></div></div>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.showInvoiceBrowser ? "<div class=\"modal-overlay\" data-v-3423b82d><div class=\"invoice-browser-dialog\" data-v-3423b82d><div class=\"modal-header\" data-v-3423b82d><h4 class=\"modal-title\" data-v-3423b82d><i class=\"fas fa-search\" data-v-3423b82d></i>\n          ເລືອກໃບແຈ້ງໜີ້\n        </h4> <button type=\"button\" class=\"close-button\" data-v-3423b82d><i class=\"fas fa-times\" data-v-3423b82d></i></button></div> <div class=\"modal-body\" data-v-3423b82d><div class=\"search-section\" data-v-3423b82d><div class=\"search-input-group\" data-v-3423b82d><i class=\"fas fa-search search-icon\" data-v-3423b82d></i> <input type=\"text\" placeholder=\"ຄົ້ນຫາເລກໃບແຈ້ງໜີ້, ຊື່ລູກຄ້າ, ຫຼື ລາຍລະອຽດ...\"" + _vm._ssrAttr("value", _vm.invoiceSearchQuery) + " class=\"form-control search-input\" data-v-3423b82d></div></div> " + (_vm.invoiceBrowserLoading ? "<div class=\"loading-state\" data-v-3423b82d><div class=\"spinner\" data-v-3423b82d></div> <p data-v-3423b82d>ກຳລັງໂຫຼດໃບແຈ້ງໜີ້...</p></div>" : _vm.searchFilteredInvoices.length > 0 ? "<div class=\"invoice-list\" data-v-3423b82d><div class=\"invoice-table-container\" data-v-3423b82d><table class=\"table table-compact\" data-v-3423b82d><thead data-v-3423b82d><tr data-v-3423b82d><th style=\"width: 120px\" data-v-3423b82d>ເລກໃບແຈ້ງໜີ້</th> <th style=\"width: 180px\" data-v-3423b82d>ລູກຄ້າ</th> <th style=\"width: 80px\" data-v-3423b82d>ວັນທີ</th> <th style=\"width: 80px\" data-v-3423b82d>ຄົບກຳໜົດ</th> <th style=\"width: 90px\" data-v-3423b82d>ຍອດເງິນ</th> <th style=\"width: 70px\" data-v-3423b82d>ສະຖານະ</th> <th style=\"width: 70px\" data-v-3423b82d>ເລືອກ</th></tr></thead> <tbody data-v-3423b82d>" + _vm._ssrList(_vm.searchFilteredInvoices, function (invoice) {
    return "<tr class=\"invoice-row\" data-v-3423b82d><td data-v-3423b82d><strong data-v-3423b82d>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</strong></td> <td data-v-3423b82d><div class=\"customer-info\" data-v-3423b82d><div class=\"customer-name\" data-v-3423b82d>" + _vm._ssrEscape("\n                        " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + "\n                      ") + "</div> " + (invoice.customer && invoice.customer.email ? "<div class=\"customer-email\" data-v-3423b82d>" + _vm._ssrEscape("\n                        " + _vm._s(invoice.customer.email) + "\n                      ") + "</div>" : "<!---->") + "</div></td> <td data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.invoiceDate))) + "</td> <td data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.dueDate))) + "</td> <td class=\"amount-cell\" data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(invoice.totalAmount))) + "</td> <td data-v-3423b82d><span" + _vm._ssrClass("status-badge", `status-${invoice.status}`) + " data-v-3423b82d>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getStatusLabel(invoice.status)) + "\n                    ") + "</span></td> <td data-v-3423b82d><button type=\"button\"" + _vm._ssrAttr("disabled", invoice.id === _vm.form.invoiceHeaderId) + " class=\"btn btn-primary btn-xs\" data-v-3423b82d><i class=\"fas fa-check\" data-v-3423b82d></i>" + _vm._ssrEscape("\n                      " + _vm._s(invoice.id === _vm.form.invoiceHeaderId ? 'ເລືອກແລ້ວ' : 'ເລືອກ') + "\n                    ") + "</button></td></tr>";
  }) + "</tbody></table></div></div>" : "<div class=\"no-results-state\" data-v-3423b82d><div class=\"empty-content\" data-v-3423b82d><i class=\"fas fa-file-invoice\" data-v-3423b82d></i> <h4 data-v-3423b82d>" + _vm._ssrEscape(_vm._s(_vm.invoiceSearchQuery ? 'ບໍ່ພົບໃບແຈ້ງໜີ້' : 'ບໍ່ມີໃບແຈ້ງໜີ້')) + "</h4> <p data-v-3423b82d>" + _vm._ssrEscape("\n              " + _vm._s(_vm.invoiceSearchQuery ? `ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບ "${_vm.invoiceSearchQuery}"` : 'ບໍ່ມີໃບແຈ້ງໜີ້ທີ່ສາມາດເລືອກໄດ້') + "\n            ") + "</p></div></div>") + "</div> <div class=\"modal-footer\" data-v-3423b82d><div class=\"footer-info\" data-v-3423b82d>" + (_vm.searchFilteredInvoices.length > 0 ? "<span class=\"result-count\" data-v-3423b82d>" + _vm._ssrEscape("\n            ພົບ " + _vm._s(_vm.searchFilteredInvoices.length) + " ໃບແຈ້ງໜີ້\n          ") + "</span>" : "<!---->") + "</div> <div class=\"footer-actions\" data-v-3423b82d><button type=\"button\" class=\"btn btn-secondary btn-compact\" data-v-3423b82d><i class=\"fas fa-times\" data-v-3423b82d></i>\n            ປິດ\n          </button></div></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue?vue&type=template&id=3423b82d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'ReceiveHeaderMaintain',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receipt: {
      type: Object,
      default: null
    },
    invoices: {
      type: Array,
      default: () => []
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      allocationLines: [],
      nextTempId: 1,
      selectedInvoice: null,
      // Invoice Browser
      showInvoiceBrowser: false,
      invoiceBrowserLoading: false,
      filteredInvoices: [],
      invoiceSearchQuery: '',
      form: {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentMethod: 'cash',
        referenceNumber: '',
        notes: '',
        inputterId: '',
        reason: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!(this.receipt && this.receipt.id);
    },
    user() {
      return this.$auth.user || {};
    },
    calculatedAllocatedTotal() {
      return this.allocationLines.reduce((sum, allocation) => {
        return sum + (parseFloat(allocation.allocatedAmount) || 0);
      }, 0);
    },
    allocationBalance() {
      return 0; // Always 0 since totalReceivedAmount = calculatedAllocatedTotal
    },

    autoCalculatedTotal() {
      return this.calculatedAllocatedTotal;
    },
    availableInvoiceLines() {
      return this.selectedInvoice ? this.selectedInvoice.invoiceLines || [] : [];
    },
    isFormValid() {
      const hasValidHeader = this.form.receiptNumber && this.form.bookingDate && this.form.receivedDate && this.form.invoiceHeaderId && this.form.paymentMethod && (!this.isEdit || this.form.reason);
      const hasValidAllocations = this.allocationLines.length > 0 && this.allocationLines.some(allocation => allocation.invoiceLineId && (parseFloat(allocation.allocatedAmount) || 0) > 0 && allocation.allocationDate) && (parseFloat(this.form.totalReceivedAmount) || 0) > 0;
      return hasValidHeader && hasValidAllocations;
    },
    searchFilteredInvoices() {
      if (!this.invoiceSearchQuery) {
        return this.filteredInvoices;
      }
      const query = this.invoiceSearchQuery.toLowerCase();
      return this.filteredInvoices.filter(invoice => invoice.invoiceNumber.toLowerCase().includes(query) || invoice.client && invoice.client.name.toLowerCase().includes(query) || invoice.description && invoice.description.toLowerCase().includes(query));
    }
  },
  watch: {
    visible: {
      handler(newVal) {
        if (newVal) {
          this.initializeDialog();
        } else {
          this.resetDialog();
        }
      },
      immediate: true
    },
    receipt: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    },
    // Auto-update totalReceivedAmount when allocation lines change
    calculatedAllocatedTotal: {
      handler(newTotal) {
        this.form.totalReceivedAmount = newTotal;
      },
      immediate: true
    },
    // Update allocation dates when received date changes
    'form.receivedDate': {
      handler(newDate) {
        if (newDate && this.allocationLines.length > 0) {
          this.allocationLines.forEach(allocation => {
            if (!allocation.allocationDate || allocation.allocationDate === '') {
              allocation.allocationDate = newDate;
            }
          });
        }
      }
    }
  },
  methods: {
    // Enhanced updateSelectedInvoice method with better debugging
    async updateSelectedInvoice() {
      var _this$selectedInvoice;
      console.log('🔍 updateSelectedInvoice called');
      console.log('📝 Current form.invoiceHeaderId:', this.form.invoiceHeaderId);
      console.log('📋 Available invoices:', this.invoices.length);

      // Clear previous selection
      this.selectedInvoice = null;
      if (!this.form.invoiceHeaderId) {
        console.log('❌ No invoice selected');
        if (!this.isEdit) {
          this.allocationLines = [];
        }
        return;
      }

      // Better ID comparison handling both string and number
      const invoiceId = parseInt(this.form.invoiceHeaderId);
      console.log('🔍 Looking for invoice ID:', invoiceId);

      // Find the selected invoice
      this.selectedInvoice = this.invoices.find(inv => {
        console.log('🔍 Comparing:', inv.id, 'with', invoiceId);
        return inv.id === invoiceId;
      });
      if (!this.selectedInvoice) {
        console.log('❌ Invoice not found in main invoices array, trying to load from API...');
        await this.loadInvoiceById(invoiceId);
      }
      if (!this.selectedInvoice) {
        console.log('❌ Could not find or load selected invoice');
        this.showToast('ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ເລືອກ', 'error');
        return;
      }
      console.log('✅ Selected invoice found:', this.selectedInvoice.invoiceNumber);
      console.log('📄 Invoice lines:', ((_this$selectedInvoice = this.selectedInvoice.invoiceLines) === null || _this$selectedInvoice === void 0 ? void 0 : _this$selectedInvoice.length) || 0);

      // Check if invoice lines exist and load if needed
      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('🔄 Loading invoice lines...');
        await this.loadSelectedInvoiceLines();
      }

      // Create allocation lines for new records only
      if (this.selectedInvoice.invoiceLines && this.selectedInvoice.invoiceLines.length > 0) {
        console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines');

        // Only auto-create allocation lines for new records
        if (!this.isEdit) {
          this.createAllocationLinesFromInvoice();
        } else {
          console.log('ℹ️ Edit mode - not auto-creating allocation lines');
        }
      } else {
        console.log('❌ No invoice lines available');
        this.showToast('ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການສິນຄ້າ', 'warning');
      }
      console.log('📊 Final allocation lines count:', this.allocationLines.length);
    },
    // Method to load invoice by ID if not found in main array
    async loadInvoiceById(invoiceId) {
      try {
        console.log('🔄 Loading invoice by ID:', invoiceId);
        const {
          data
        } = await this.$axios.get(`/api/ar-invoices/${invoiceId}`, {
          params: {
            include: ['client', 'currency', 'invoiceLines']
          }
        });
        console.log('📥 API response for single invoice:', data);
        if (data.success && data.data) {
          this.selectedInvoice = data.data;
          console.log('✅ Invoice loaded successfully:', this.selectedInvoice.invoiceNumber);
        } else if (data.invoiceNumber) {
          // Handle case where response structure is different
          this.selectedInvoice = data;
          console.log('✅ Invoice loaded (alt structure):', this.selectedInvoice.invoiceNumber);
        }
      } catch (error) {
        console.error('❌ Error loading invoice by ID:', error);
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error');
      }
    },
    // Better invoice lines loading with debugging
    async loadSelectedInvoiceLines() {
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice to load lines for');
        return;
      }
      try {
        console.log('🔄 Loading invoice lines for:', this.selectedInvoice.invoiceNumber);
        const {
          data
        } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${this.selectedInvoice.id}`);
        console.log('📥 Invoice lines API response:', data);

        // Handle different possible response structures
        if (data.success && data.data && Array.isArray(data.data)) {
          this.selectedInvoice.invoiceLines = data.data;
          console.log('✅ Invoice lines loaded:', data.data.length);
        } else if (Array.isArray(data)) {
          this.selectedInvoice.invoiceLines = data;
          console.log('✅ Invoice lines loaded (alt structure):', data.length);
        } else {
          console.warn('❓ Unexpected response structure:', data);
          this.selectedInvoice.invoiceLines = [];
        }
      } catch (error) {
        console.error('❌ Error loading invoice lines:', error);
        this.selectedInvoice.invoiceLines = [];
        this.showToast('ມີປັນຫາໃນການໂຫຼດລາຍການໃບແຈ້ງໜີ້', 'error');
      }
    },
    // Better allocation lines creation with debugging
    createAllocationLinesFromInvoice() {
      console.log('🔧 createAllocationLinesFromInvoice called');
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice');
        return;
      }
      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('❌ No invoice lines available');
        this.allocationLines = [];
        return;
      }
      console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines');
      this.allocationLines = this.selectedInvoice.invoiceLines.map((line, index) => {
        const allocation = {
          tempId: this.nextTempId++,
          lineNumber: index + 1,
          invoiceLineId: line.id,
          invoiceLine: line,
          // Store the full line object for display
          allocatedAmount: 0,
          // Default to 0, user will fill this
          allocationDate: this.form.receivedDate || new Date().toISOString().split('T')[0],
          notes: ''
        };
        console.log(`📝 Created allocation ${index + 1}:`, {
          lineNumber: allocation.lineNumber,
          invoiceLineId: allocation.invoiceLineId,
          description: line.description,
          lineTotal: line.lineTotal
        });
        return allocation;
      });
      console.log('🎉 Successfully created', this.allocationLines.length, 'allocation lines');

      // Force reactivity update
      this.$forceUpdate();
    },
    // Better invoice change handler
    async onInvoiceChange() {
      console.log('🔄 onInvoiceChange triggered');
      await this.updateSelectedInvoice();
      this.clearFieldError('invoiceHeaderId');

      // Switch to allocations tab if lines were created
      if (this.allocationLines.length > 0) {
        console.log('🔄 Switching to allocations tab');
        this.$nextTick(() => {
          this.activeTab = 'allocations';
        });
      }
    },
    // Better invoice browser with full data loading
    async openInvoiceBrowser() {
      console.log('🔄 Opening invoice browser');
      this.showInvoiceBrowser = true;
      this.invoiceBrowserLoading = true;
      this.invoiceSearchQuery = '';
      try {
        const {
          data
        } = await this.$axios.get('/api/ar-invoices', {
          params: {
            status: ['draft', 'sent'],
            include: ['client', 'currency', 'invoiceLines'],
            // Include all needed data
            limit: 100 // Increase limit to see more invoices
          }
        });

        console.log('📥 Invoice browser API response:', data);

        // Handle the nested structure in your data
        if (data.success && data.data && data.data.invoices && Array.isArray(data.data.invoices)) {
          this.filteredInvoices = data.data.invoices;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices for browser');
        } else if (data.success && data.data && Array.isArray(data.data)) {
          this.filteredInvoices = data.data;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (alt structure)');
        } else if (Array.isArray(data)) {
          this.filteredInvoices = data;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (direct array)');
        } else {
          console.warn('❓ Unexpected response structure:', data);
          this.filteredInvoices = [];
        }
      } catch (error) {
        console.error('❌ Error loading invoices for browser:', error);
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error');
        this.filteredInvoices = [];
      } finally {
        this.invoiceBrowserLoading = false;
      }
    },
    // Better invoice selection from browser
    async selectInvoiceFromBrowser(invoice) {
      console.log('🎯 Selecting invoice from browser:', invoice.invoiceNumber);

      // Set the form value
      this.form.invoiceHeaderId = invoice.id;

      // Add the invoice to main invoices array if not present
      const existingIndex = this.invoices.findIndex(inv => inv.id === invoice.id);
      if (existingIndex === -1) {
        console.log('➕ Adding invoice to main array');
        this.invoices.push(invoice);
      } else {
        console.log('🔄 Updating existing invoice in main array');
        this.invoices[existingIndex] = invoice;
      }

      // Close browser and trigger change
      this.closeInvoiceBrowser();
      await this.onInvoiceChange();
      this.clearFieldError('invoiceHeaderId');
    },
    // Rest of your existing methods remain the same...
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.receipt) {
        this.form = {
          id: this.receipt.id,
          receiptNumber: this.receipt.receiptNumber,
          bookingDate: this.receipt.bookingDate ? this.receipt.bookingDate.split('T')[0] : '',
          receivedDate: this.receipt.receivedDate ? this.receipt.receivedDate.split('T')[0] : '',
          invoiceHeaderId: this.receipt.invoiceHeaderId,
          totalReceivedAmount: this.receipt.totalReceivedAmount || 0.0,
          paymentMethod: this.receipt.paymentMethod || 'cash',
          referenceNumber: this.receipt.referenceNumber || '',
          notes: this.receipt.notes || '',
          inputterId: this.receipt.inputterId || '',
          reason: ''
        };
        await this.loadAllocationLines(this.receipt.id);
        await this.updateSelectedInvoice();
      } else {
        this.resetForm();

        // Set default dates to today
        const today = new Date().toISOString().split('T')[0];
        this.form.bookingDate = today;
        this.form.receivedDate = today;

        // Initialize with empty allocation lines
        this.allocationLines = [];

        // Set default user
        if (this.user && this.user.id) {
          this.form.inputterId = this.user.id;
        }
      }
    },
    resetDialog() {
      this.resetForm();
      this.allocationLines = [];
      this.selectedInvoice = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
      this.showInvoiceBrowser = false;
      this.filteredInvoices = [];
      this.invoiceSearchQuery = '';
    },
    async loadAllocationLines(receiptId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ar-receive-lines/by-header/${receiptId}`);
        this.allocationLines = data.data || [];
        this.allocationLines.forEach(allocation => {
          if (!allocation.tempId) {
            allocation.tempId = this.nextTempId++;
          }
          if (allocation.allocationDate) {
            allocation.allocationDate = allocation.allocationDate.split('T')[0];
          }
        });
      } catch (error) {
        console.error('Error loading allocation lines:', error);
        this.allocationLines = [];
      }
    },
    closeInvoiceBrowser() {
      this.showInvoiceBrowser = false;
      this.filteredInvoices = [];
      this.invoiceSearchQuery = '';
    },
    // Allocation Helper Methods
    allocateFullAmount() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      this.allocationLines.forEach(allocation => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
          allocation.allocatedAmount = lineTotal.toFixed(2);
        }
      });
    },
    allocateEqually() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      const totalInvoice = parseFloat(this.selectedInvoice.totalAmount) || 0;
      const amountPerLine = totalInvoice / this.allocationLines.length;
      this.allocationLines.forEach(allocation => {
        allocation.allocatedAmount = amountPerLine.toFixed(2);
      });
    },
    allocateProportionally() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      this.allocationLines.forEach(allocation => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
          allocation.allocatedAmount = lineTotal.toFixed(2);
        }
      });
    },
    clearAllAllocations() {
      this.allocationLines.forEach(allocation => {
        allocation.allocatedAmount = 0;
      });
    },
    getRemainingAmount(allocation) {
      if (!allocation.invoiceLine) return 0;
      const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
      const allocated = parseFloat(allocation.allocatedAmount) || 0;
      return lineTotal - allocated;
    },
    isFullyAllocated(allocation) {
      return this.getRemainingAmount(allocation) === 0;
    },
    isOverAllocated(allocation) {
      return this.getRemainingAmount(allocation) < 0;
    },
    validateAllocation(allocation, index) {
      const amount = parseFloat(allocation.allocatedAmount) || 0;
      const maxAllowed = parseFloat(allocation.invoiceLine.lineTotal) || 0;
      if (amount > maxAllowed) {
        this.errors[`allocation_${index}_allocatedAmount`] = `ຈຳນວນເກີນກວ່າທີ່ເຫຼືອ (ສູງສຸດ: ${this.formatCurrency(maxAllowed)})`;
      } else {
        this.clearFieldError(`allocation_${index}_allocatedAmount`);
      }
    },
    validateForm() {
      this.errors = {};

      // Header validation
      if (!this.form.receiptNumber) {
        this.errors.receiptNumber = 'ກະລຸນາໃສ່ເລກທີໃບຮັບ';
      }
      if (!this.form.invoiceHeaderId) {
        this.errors.invoiceHeaderId = 'ກະລຸນາເລືອກໃບແຈ້ງໜີ້';
      }
      if (!this.form.bookingDate) {
        this.errors.bookingDate = 'ກະລຸນາໃສ່ວັນທີບັນທຶກ';
      }
      if (!this.form.receivedDate) {
        this.errors.receivedDate = 'ກະລຸນາໃສ່ວັນທີຮັບເງິນ';
      }
      if (!this.form.paymentMethod) {
        this.errors.paymentMethod = 'ກະລຸນາເລືອກວິທີຈ່າຍ';
      }

      // Date validation
      if (this.form.bookingDate && this.form.receivedDate) {
        const bookingDate = new Date(this.form.bookingDate);
        const receivedDate = new Date(this.form.receivedDate);
        if (receivedDate < bookingDate) {
          this.errors.receivedDate = 'ວັນທີຮັບເງິນຕ້ອງບໍ່ກ່ອນວັນທີບັນທຶກ';
        }
      }

      // Allocation validation
      if (this.allocationLines.length === 0) {
        this.errors.allocations = 'ກະລຸນາເພີ່ມການແບ່ງປັນຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        let hasValidAllocation = false;
        let totalAllocated = 0;
        for (let i = 0; i < this.allocationLines.length; i++) {
          const allocation = this.allocationLines[i];
          if (!allocation.invoiceLineId) {
            this.errors[`allocation_${i}_invoiceLineId`] = 'ກະລຸນາເລືອກລາຍການໃບແຈ້ງໜີ້';
          }
          const allocatedAmount = parseFloat(allocation.allocatedAmount) || 0;
          if (allocatedAmount <= 0) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
          } else {
            hasValidAllocation = true;
            totalAllocated += allocatedAmount;
          }
          if (!allocation.allocationDate) {
            this.errors[`allocation_${i}_allocationDate`] = 'ກະລຸນາໃສ່ວັນທີແບ່ງປັນ';
          }
          if (this.isOverAllocated(allocation)) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນເກີນກວ່າທີ່ເຫຼືອ';
          }
        }
        if (!hasValidAllocation) {
          this.errors.allocations = 'ຢ່າງໜ້ອຍຕ້ອງມີ 1 ລາຍການທີ່ມີຍອດແບ່ງປັນ';
        }
        if (totalAllocated <= 0) {
          this.errors.totalReceivedAmount = 'ຍອດລວມການແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
        }
      }
      if (this.isEdit && !this.form.reason) {
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ';
      }
      return Object.keys(this.errors).length === 0;
    },
    clearErrors() {
      this.errors = {};
    },
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field);
      }
    },
    handleSubmit() {
      if (!this.validateForm()) {
        if (Object.keys(this.errors).some(key => key.startsWith('allocation_'))) {
          this.activeTab = 'allocations';
        } else {
          this.activeTab = 'header';
        }
        return;
      }
      this.saving = true;
      const validAllocationLines = this.allocationLines.filter(allocation => {
        const amount = parseFloat(allocation.allocatedAmount) || 0;
        return amount > 0 && allocation.invoiceLineId;
      });
      if (this.isEdit) {
        this.form.updateUserId = this.user.id;
      } else {
        this.form.inputterId = this.user.id;
      }
      const formData = {
        ...this.form,
        totalReceivedAmount: parseFloat(this.form.totalReceivedAmount) || 0,
        allocationLines: validAllocationLines.map((allocation, index) => ({
          tempId: allocation.tempId,
          lineNumber: index + 1,
          invoiceLineId: allocation.invoiceLineId,
          allocatedAmount: parseFloat(allocation.allocatedAmount) || 0,
          allocationDate: allocation.allocationDate,
          notes: allocation.notes || ''
        }))
      };
      this.$emit('save', formData);
    },
    handleOverlayClick() {
      if (!this.saving) {
        this.handleClose();
      }
    },
    handleClose() {
      this.$emit('close');
    },
    resetForm() {
      var _this$user;
      this.form = {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentMethod: 'cash',
        referenceNumber: '',
        notes: '',
        inputterId: ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id) || '',
        reason: ''
      };
    },
    // Utility Methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatNumber(number) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number || 0);
    },
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    getStatusLabel(status) {
      const statusLabels = {
        draft: 'ຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳໜົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        if (typeof this.$toast[type] === 'function') {
          this.$toast[type](message);
        } else {
          console.log(message);
        }
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var receive_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(704)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3423b82d",
  "2b1d1851"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/view/index.vue?vue&type=template&id=3e6a6f1c&scoped=true&
var render = function render() {
  var _vm$receipt$invoiceHe;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-container\" data-v-3e6a6f1c><div class=\"modal-header\" data-v-3e6a6f1c><h2 data-v-3e6a6f1c>ລາຍລະອຽດການຮັບຊຳລະ</h2> <button class=\"close-btn\" data-v-3e6a6f1c><i class=\"fas fa-times\" data-v-3e6a6f1c></i></button></div> " + (_vm.receipt ? "<div class=\"modal-body\" data-v-3e6a6f1c><div class=\"info-section\" data-v-3e6a6f1c><div class=\"section-header\" data-v-3e6a6f1c><h3 data-v-3e6a6f1c><i class=\"fas fa-receipt\" data-v-3e6a6f1c></i>\n            ຂໍ້ມູນການຮັບຊຳລະ\n          </h3> <span" + _vm._ssrClass(null, ['payment-method-badge', _vm.receipt.paymentMethod]) + " data-v-3e6a6f1c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.formatPaymentMethod(_vm.receipt.paymentMethod)) + "\n          ") + "</span></div> <div class=\"info-grid\" data-v-3e6a6f1c><div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ເລກທີໃບຮັບ:</label> <span class=\"receipt-number\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.receipt.receiptNumber)) + "</span></div> <div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ວັນທີບັນທຶກ:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.bookingDate))) + "</span></div> <div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ວັນທີຮັບເງິນ:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.receivedDate))) + "</span></div> <div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ຍອດເງິນທີ່ຮັບ:</label> <span class=\"amount-received\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.totalReceivedAmount))) + "</span></div> " + (_vm.receipt.referenceNumber ? "<div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ເລກອ້າງອີງ:</label> <span class=\"reference-number\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.receipt.referenceNumber)) + "</span></div>" : "<!---->") + "</div></div> " + (_vm.receipt.invoiceHeader ? "<div class=\"info-section\" data-v-3e6a6f1c><div class=\"section-header\" data-v-3e6a6f1c><h3 data-v-3e6a6f1c><i class=\"fas fa-file-invoice\" data-v-3e6a6f1c></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </h3></div> <div class=\"info-grid\" data-v-3e6a6f1c><div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ເລກທີໃບແຈ້ງໜີ້:</label> <span class=\"invoice-number\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.receipt.invoiceHeader.invoiceNumber)) + "</span></div> <div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ວັນທີໃບແຈ້ງໜີ້:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.invoiceHeader.invoiceDate))) + "</span></div> " + (_vm.receipt.invoiceHeader.dueDate ? "<div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ວັນທີຄົບກຳນົດ:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.receipt.invoiceHeader.dueDate))) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ຍອດໃບແຈ້ງໜີ້:</label> <span class=\"invoice-amount\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.invoiceHeader.totalAmount))) + "</span></div> " + (_vm.receipt.invoiceHeader.customer ? "<div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ລູກຄ້າ:</label> <span class=\"customer-name\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.receipt.invoiceHeader.customer.name)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ສະຖານະໃບແຈ້ງໜີ້:</label> <span" + _vm._ssrClass(null, ['status-badge', _vm.receipt.invoiceHeader.status]) + " data-v-3e6a6f1c>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatInvoiceStatus(_vm.receipt.invoiceHeader.status)) + "\n            ") + "</span></div></div></div>" : "<!---->") + " <div class=\"info-section\" data-v-3e6a6f1c><div class=\"section-header\" data-v-3e6a6f1c><h3 data-v-3e6a6f1c><i class=\"fas fa-calculator\" data-v-3e6a6f1c></i>\n            ສະຫຼຸບການຮັບຊຳລະ\n          </h3></div> <div class=\"payment-summary\" data-v-3e6a6f1c><div class=\"summary-row\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ຍອດໃບແຈ້ງໜີ້:</label> <span class=\"amount invoice-total\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(((_vm$receipt$invoiceHe = _vm.receipt.invoiceHeader) === null || _vm$receipt$invoiceHe === void 0 ? void 0 : _vm$receipt$invoiceHe.totalAmount) || 0))) + "</span></div> <div class=\"summary-row\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ຍອດທີ່ຮັບຄັ້ງນີ້:</label> <span class=\"amount current-payment\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.receipt.totalReceivedAmount))) + "</span></div> <div class=\"summary-row\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ລວມທີ່ຮັບແລ້ວທັງໝົດ:</label> <span class=\"amount total-received\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculateTotalReceived()))) + "</span></div> <div class=\"summary-row subtotal\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ຍອດຄົງເຫຼືອ:</label> <span" + _vm._ssrClass("amount remaining", {
    'fully-paid': _vm.getRemainingBalance() <= 0
  }) + " data-v-3e6a6f1c>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatCurrency(_vm.getRemainingBalance())) + "\n            ") + "</span></div> " + (_vm.getRemainingBalance() <= 0 ? "<div class=\"paid-status\" data-v-3e6a6f1c><i class=\"fas fa-check-circle\" data-v-3e6a6f1c></i> <span data-v-3e6a6f1c>ຈ່າຍຄົບແລ້ວ</span></div>" : "<!---->") + "</div></div> " + (_vm.receipt.receiveLines && _vm.receipt.receiveLines.length > 0 ? "<div class=\"info-section\" data-v-3e6a6f1c><div class=\"section-header\" data-v-3e6a6f1c><h3 data-v-3e6a6f1c><i class=\"fas fa-list\" data-v-3e6a6f1c></i>\n            ລາຍລະອຽດການແບ່ງປັນ\n          </h3> <span class=\"item-count\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.receipt.receiveLines.length) + " ລາຍການ") + "</span></div> <div class=\"table-container\" data-v-3e6a6f1c><table class=\"data-table\" data-v-3e6a6f1c><thead data-v-3e6a6f1c><tr data-v-3e6a6f1c><th data-v-3e6a6f1c>ລຳດັບ</th> <th data-v-3e6a6f1c>ລາຍການໃບແຈ້ງໜີ້</th> <th data-v-3e6a6f1c>ຍອດແບ່ງປັນ</th> <th data-v-3e6a6f1c>ວັນທີແບ່ງປັນ</th> <th data-v-3e6a6f1c>ໝາຍເຫດ</th> <th data-v-3e6a6f1c>ສະຖານະ</th></tr></thead> <tbody data-v-3e6a6f1c>" + _vm._ssrList(_vm.receipt.receiveLines, function (line) {
    return "<tr data-v-3e6a6f1c><td class=\"line-number\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(line.lineNumber)) + "</td> <td data-v-3e6a6f1c><div class=\"invoice-line-info\" data-v-3e6a6f1c><div class=\"line-description\" data-v-3e6a6f1c><strong data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(line.invoiceLine ? line.invoiceLine.description : 'N/A')) + "</strong></div> " + (line.invoiceLine ? "<div class=\"line-details\" data-v-3e6a6f1c>" + _vm._ssrEscape("\n                      ຈຳນວນ: " + _vm._s(_vm.formatNumber(line.invoiceLine.quantity)) + " × \n                      " + _vm._s(_vm.formatCurrency(line.invoiceLine.unitPrice)) + " = \n                      " + _vm._s(_vm.formatCurrency(line.invoiceLine.lineTotal)) + "\n                    ") + "</div>" : "<!---->") + "</div></td> <td class=\"allocated-amount\" data-v-3e6a6f1c>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(line.allocatedAmount)) + "\n                ") + "</td> <td data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(line.allocationDate))) + "</td> <td data-v-3e6a6f1c><span class=\"line-notes\" data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(line.notes || '-')) + "</span></td> <td data-v-3e6a6f1c><span" + _vm._ssrClass("allocation-status", _vm.getAllocationStatusClass(line)) + " data-v-3e6a6f1c>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.getAllocationStatusText(line)) + "\n                  ") + "</span></td></tr>";
  }) + "</tbody> <tfoot data-v-3e6a6f1c><tr class=\"summary-row\" data-v-3e6a6f1c><td colspan=\"2\" data-v-3e6a6f1c><strong data-v-3e6a6f1c>ລວມການແບ່ງປັນ:</strong></td> <td class=\"allocated-total\" data-v-3e6a6f1c><strong data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculateTotalAllocations()))) + "</strong></td> <td colspan=\"3\" data-v-3e6a6f1c></td></tr></tfoot></table></div></div>" : "<!---->") + " " + (_vm.receipt.notes ? "<div class=\"info-section\" data-v-3e6a6f1c><div class=\"section-header\" data-v-3e6a6f1c><h3 data-v-3e6a6f1c><i class=\"fas fa-comment-alt\" data-v-3e6a6f1c></i>\n            ໝາຍເຫດ\n          </h3></div> <div class=\"notes-content\" data-v-3e6a6f1c>" + _vm._ssrEscape("\n          " + _vm._s(_vm.receipt.notes) + "\n        ") + "</div></div>" : "<!---->") + " <div class=\"info-section\" data-v-3e6a6f1c><div class=\"section-header\" data-v-3e6a6f1c><h3 data-v-3e6a6f1c><i class=\"fas fa-info-circle\" data-v-3e6a6f1c></i>\n            ຂໍ້ມູນລະບົບ\n          </h3></div> <div class=\"info-grid\" data-v-3e6a6f1c>" + (_vm.receipt.inputter ? "<div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ຜູ້ບັນທຶກ:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.receipt.inputter.username)) + "</span></div>" : "<!---->") + " " + (_vm.receipt.maker ? "<div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ຜູ້ສ້າງ:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.receipt.maker.username)) + "</span></div>" : "<!---->") + " <div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ວັນທີສ້າງ:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.receipt.createdAt))) + "</span></div> " + (_vm.receipt.updateUser ? "<div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ຜູ້ແກ້ໄຂຫຼ້າສຸດ:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.receipt.updateUser.username)) + "</span></div>" : "<!---->") + " " + (_vm.receipt.updateTimestamp ? "<div class=\"info-item\" data-v-3e6a6f1c><label data-v-3e6a6f1c>ວັນທີແກ້ໄຂຫຼ້າສຸດ:</label> <span data-v-3e6a6f1c>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.receipt.updateTimestamp))) + "</span></div>" : "<!---->") + "</div></div></div>" : "<!---->") + " <div class=\"modal-footer\" data-v-3e6a6f1c><button type=\"button\" class=\"btn btn-secondary\" data-v-3e6a6f1c><i class=\"fas fa-times\" data-v-3e6a6f1c></i>\n        ປິດ\n      </button> <button type=\"button\" class=\"btn btn-success\" data-v-3e6a6f1c><i class=\"fas fa-print\" data-v-3e6a6f1c></i>\n        ພິມໃບຮັບ\n      </button> <button type=\"button\" class=\"btn btn-primary\" data-v-3e6a6f1c><i class=\"fas fa-edit\" data-v-3e6a6f1c></i>\n        ແກ້ໄຂ\n      </button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue?vue&type=template&id=3e6a6f1c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'ReceiveHeaderView',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receipt: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    editReceipt() {
      this.$emit('edit', this.receipt);
    },
    printReceipt() {
      // Implement print functionality
      window.print();
    },
    calculateTotalAllocations() {
      if (!this.receipt.receiveLines) return 0;
      return this.receipt.receiveLines.reduce((total, line) => {
        return total + parseFloat(line.allocatedAmount || 0);
      }, 0);
    },
    calculateTotalReceived() {
      // This would typically come from API call to get all receipts for this invoice
      // For now, just return current receipt amount
      return parseFloat(this.receipt.totalReceivedAmount || 0);
    },
    getRemainingBalance() {
      var _this$receipt$invoice;
      const invoiceTotal = parseFloat(((_this$receipt$invoice = this.receipt.invoiceHeader) === null || _this$receipt$invoice === void 0 ? void 0 : _this$receipt$invoice.totalAmount) || 0);
      const totalReceived = this.calculateTotalReceived();
      return invoiceTotal - totalReceived;
    },
    getAllocationStatusClass(line) {
      const invoiceLine = line.invoiceLine;
      if (!invoiceLine) return 'unknown';
      const lineTotal = parseFloat(invoiceLine.lineTotal || 0);
      const allocated = parseFloat(line.allocatedAmount || 0);
      if (allocated >= lineTotal) return 'fully-allocated';
      if (allocated > 0) return 'partially-allocated';
      return 'not-allocated';
    },
    getAllocationStatusText(line) {
      const statusClass = this.getAllocationStatusClass(line);
      const statusTexts = {
        'fully-allocated': 'ແບ່ງປັນຄົບ',
        'partially-allocated': 'ແບ່ງປັນບາງສ່ວນ',
        'not-allocated': 'ຍັງບໍ່ແບ່ງປັນ',
        'unknown': 'ບໍ່ຮູ້ສະຖານະ'
      };
      return statusTexts[statusClass] || statusClass;
    },
    // Utility methods
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatCurrency(amount) {
      if (!amount) return '0.00';
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatNumber(number) {
      if (!number) return '0';
      return parseFloat(number).toLocaleString('en-US');
    },
    formatPaymentMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        check: 'ເຊັກ',
        bank_transfer: 'ໂອນເງິນທະນາຄານ',
        credit_card: 'ບັດເຄຣດິດ',
        other: 'ອື່ນໆ'
      };
      return methods[method] || method;
    },
    formatInvoiceStatus(status) {
      const statusLabels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var receive_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(706)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e6a6f1c",
  "88681b2a"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map