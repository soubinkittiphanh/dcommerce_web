exports.ids = [141];
exports.modules = {

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1386);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("66555895", content, true, context)
};

/***/ }),

/***/ 1385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPriceManager_vue_vue_type_style_index_0_id_ae4a51ee_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1029);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPriceManager_vue_vue_type_style_index_0_id_ae4a51ee_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPriceManager_vue_vue_type_style_index_0_id_ae4a51ee_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPriceManager_vue_vue_type_style_index_0_id_ae4a51ee_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPriceManager_vue_vue_type_style_index_0_id_ae4a51ee_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1386:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-price-manager[data-v-ae4a51ee]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",sans-serif;margin:0 auto;max-width:1400px;padding:20px}.page-header[data-v-ae4a51ee]{margin-bottom:30px;text-align:center}.page-header h1[data-v-ae4a51ee]{color:#2c3e50;font-size:2.5rem;font-weight:600;margin-bottom:8px}.page-header p[data-v-ae4a51ee]{color:#7f8c8d;font-size:1.1rem;margin:0}.notification[data-v-ae4a51ee]{animation:slideInRight-ae4a51ee .3s ease-out;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.15);color:#fff;font-weight:500;padding:12px 24px;position:fixed;right:20px;top:20px;z-index:1000}.notification-success[data-v-ae4a51ee]{background-color:#27ae60}.notification-error[data-v-ae4a51ee]{background-color:#e74c3c}.notification-warning[data-v-ae4a51ee]{background-color:#f39c12}.notification-info[data-v-ae4a51ee]{background-color:#3498db}@keyframes slideInRight-ae4a51ee{0%{opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}.controls-section[data-v-ae4a51ee]{align-items:center;display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between;margin-bottom:20px}.search-container[data-v-ae4a51ee]{flex:1;min-width:300px}.search-input[data-v-ae4a51ee]{border:2px solid #e0e6ed;border-radius:8px;font-size:16px;padding:12px 16px;transition:border-color .2s ease;width:100%}.search-input[data-v-ae4a51ee]:focus{border-color:#3498db;outline:none}.action-buttons[data-v-ae4a51ee]{display:flex;flex-wrap:wrap;gap:12px}.btn[data-v-ae4a51ee]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;justify-content:center;min-width:120px;padding:12px 24px;transition:all .2s ease}.btn[data-v-ae4a51ee]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-ae4a51ee]{background-color:#3498db;color:#fff}.btn-primary[data-v-ae4a51ee]:hover:not(:disabled){background-color:#2980b9;transform:translateY(-1px)}.btn-secondary[data-v-ae4a51ee]{background-color:#95a5a6;color:#fff}.btn-secondary[data-v-ae4a51ee]:hover:not(:disabled){background-color:#7f8c8d}.btn-clear-row[data-v-ae4a51ee]{background:#e74c3c;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:12px;padding:4px 8px;transition:background-color .2s ease}.btn-clear-row[data-v-ae4a51ee]:hover{background:#c0392b}.summary-info[data-v-ae4a51ee]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px;color:#fff;margin-bottom:20px;padding:12px 20px;text-align:center}.pending-changes[data-v-ae4a51ee]{font-size:14px;font-weight:500}.table-container[data-v-ae4a51ee]{background:#fff;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.07);margin-bottom:20px;overflow:hidden}.products-table[data-v-ae4a51ee]{border-collapse:collapse;font-size:14px;width:100%}.products-table thead[data-v-ae4a51ee]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.products-table th[data-v-ae4a51ee]{font-size:13px;font-weight:600;letter-spacing:.5px;padding:16px 12px;text-align:left;text-transform:uppercase}.products-table td[data-v-ae4a51ee]{border-bottom:1px solid #f1f3f4;padding:16px 12px;vertical-align:top}.products-table tbody tr[data-v-ae4a51ee]{transition:background-color .2s ease}.products-table tbody tr[data-v-ae4a51ee]:hover{background-color:#f8f9fa}.products-table tbody tr.row-changed[data-v-ae4a51ee]{background-color:#fff3cd;border-left:4px solid #ffc107}.products-table tbody tr.row-changed[data-v-ae4a51ee]:hover{background-color:#fff0b3}.product-name[data-v-ae4a51ee]{min-width:200px}.product-name strong[data-v-ae4a51ee]{color:#2c3e50;display:block;font-weight:600;margin-bottom:4px}.product-desc[data-v-ae4a51ee]{color:#7f8c8d;font-size:12px;font-style:italic}.barcode[data-v-ae4a51ee]{color:#555;font-size:13px}.barcode[data-v-ae4a51ee],.current-price[data-v-ae4a51ee]{font-family:\"Courier New\",monospace}.current-price[data-v-ae4a51ee]{color:#27ae60;font-weight:600}.price-input[data-v-ae4a51ee]{border:2px solid #e0e6ed;border-radius:6px;font-family:\"Courier New\",monospace;font-size:14px;max-width:120px;padding:8px 12px;transition:border-color .2s ease;width:100%}.price-input[data-v-ae4a51ee]:focus{border-color:#3498db;outline:none}.price-input[data-v-ae4a51ee]:not([value=\"\"]):not(:-moz-placeholder){background-color:#fffaf0;border-color:#f39c12}.price-input[data-v-ae4a51ee]:not([value=\"\"]):not(:placeholder-shown){background-color:#fffaf0;border-color:#f39c12}.pagination[data-v-ae4a51ee]{align-items:center;display:flex;gap:16px;justify-content:center;margin:20px 0}.page-info[data-v-ae4a51ee]{color:#555;font-size:14px;font-weight:500}.loading-container[data-v-ae4a51ee]{padding:60px 20px;text-align:center}.loading-spinner[data-v-ae4a51ee]{animation:spin-ae4a51ee 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:40px;margin:0 auto 20px;width:40px}@keyframes spin-ae4a51ee{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.empty-state[data-v-ae4a51ee]{color:#7f8c8d;padding:60px 20px;text-align:center}.empty-state p[data-v-ae4a51ee]{font-size:18px;margin-bottom:20px}@media (max-width:1200px){.products-table[data-v-ae4a51ee]{font-size:12px}.products-table td[data-v-ae4a51ee],.products-table th[data-v-ae4a51ee]{padding:12px 8px}.price-input[data-v-ae4a51ee]{max-width:100px}}@media (max-width:768px){.product-price-manager[data-v-ae4a51ee]{padding:15px}.page-header h1[data-v-ae4a51ee]{font-size:2rem}.controls-section[data-v-ae4a51ee]{align-items:stretch;flex-direction:column}.search-container[data-v-ae4a51ee]{min-width:auto}.action-buttons[data-v-ae4a51ee]{justify-content:center}.table-container[data-v-ae4a51ee]{overflow-x:auto}.products-table[data-v-ae4a51ee]{min-width:800px}.notification[data-v-ae4a51ee]{left:10px;max-width:none;position:fixed;right:10px;top:10px}}input[type=checkbox][data-v-ae4a51ee]{cursor:pointer;height:16px;width:16px}.btn[data-v-ae4a51ee]:focus,.price-input[data-v-ae4a51ee]:focus,.search-input[data-v-ae4a51ee]:focus,input[type=checkbox][data-v-ae4a51ee]:focus{outline:2px solid #3498db;outline-offset:2px}@media print{.action-buttons[data-v-ae4a51ee],.controls-section[data-v-ae4a51ee],.notification[data-v-ae4a51ee],.pagination[data-v-ae4a51ee]{display:none}.products-table[data-v-ae4a51ee]{font-size:10px}.table-container[data-v-ae4a51ee]{box-shadow:none}}.slide-right-enter-active[data-v-ae4a51ee],.slide-right-leave-active[data-v-ae4a51ee]{transition:all .3s ease}.slide-right-enter[data-v-ae4a51ee],.slide-right-leave-to[data-v-ae4a51ee]{opacity:0;transform:translateX(100%)}.fade-enter-active[data-v-ae4a51ee],.fade-leave-active[data-v-ae4a51ee]{transition:opacity .3s ease}.fade-enter[data-v-ae4a51ee],.fade-leave-to[data-v-ae4a51ee]{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductPriceManager.vue?vue&type=template&id=ae4a51ee&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-price-manager"
  }, [_c('transition', {
    attrs: {
      "name": "slide-right"
    }
  }, [_vm.notification.show ? _c('div', {
    class: `notification notification-${_vm.notification.type}`
  }, [_vm._v("\n      " + _vm._s(_vm.notification.message) + "\n    ")]) : _vm._e()]), _vm._ssrNode(" <div class=\"page-header\" data-v-ae4a51ee><h1 data-v-ae4a51ee>Product Price Management</h1> <p data-v-ae4a51ee>Update cost prices and sale prices for multiple products</p></div> <div class=\"controls-section\" data-v-ae4a51ee><div class=\"search-container\" data-v-ae4a51ee><input type=\"text\" placeholder=\"Search by product name or barcode...\"" + _vm._ssrAttr("value", _vm.searchTerm) + " class=\"search-input\" data-v-ae4a51ee></div> <div class=\"action-buttons\" data-v-ae4a51ee><button" + _vm._ssrAttr("disabled", !_vm.hasAnyChanges) + " class=\"btn btn-secondary\" data-v-ae4a51ee>\n        Clear Changes\n      </button> <button" + _vm._ssrAttr("disabled", !_vm.canSave) + " class=\"btn btn-primary\" data-v-ae4a51ee>" + _vm._ssrEscape("\n        " + _vm._s(_vm.saving ? 'Saving...' : `Save Changes (${_vm.pendingChanges})`) + "\n      ") + "</button></div></div> "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.pendingChanges > 0 ? _c('div', {
    staticClass: "summary-info"
  }, [_c('span', {
    staticClass: "pending-changes"
  }, [_vm._v("\n        " + _vm._s(_vm.pendingChanges) + " pending changes • " + _vm._s(_vm.selectedProducts.size) + " products selected\n      ")])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.loading && _vm.products.length === 0 ? "<div class=\"loading-container\" data-v-ae4a51ee><div class=\"loading-spinner\" data-v-ae4a51ee></div> <p data-v-ae4a51ee>Loading products...</p></div>" : "<div class=\"table-container\" data-v-ae4a51ee><table class=\"products-table\" data-v-ae4a51ee><thead data-v-ae4a51ee><tr data-v-ae4a51ee><th data-v-ae4a51ee><input type=\"checkbox\"" + _vm._ssrAttr("disabled", _vm.products.length === 0) + _vm._ssrAttr("checked", _vm.selectAll) + " data-v-ae4a51ee></th> <th data-v-ae4a51ee>Product Name</th> <th data-v-ae4a51ee>Barcode</th> <th data-v-ae4a51ee>Current Cost Price</th> <th data-v-ae4a51ee>New Cost Price</th> <th data-v-ae4a51ee>Current Sale Price</th> <th data-v-ae4a51ee>New Sale Price</th> <th data-v-ae4a51ee>Actions</th></tr></thead> <tbody data-v-ae4a51ee>" + _vm._ssrList(_vm.products, function (product) {
    return "<tr" + _vm._ssrClass(null, {
      'row-changed': _vm.hasProductChanges(product.id)
    }) + " data-v-ae4a51ee><td data-v-ae4a51ee><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.selectedProducts.has(product.id)) + " data-v-ae4a51ee></td> <td class=\"product-name\" data-v-ae4a51ee><strong data-v-ae4a51ee>" + _vm._ssrEscape(_vm._s(product.pro_name)) + "</strong> " + (product.pro_desc ? "<div class=\"product-desc\" data-v-ae4a51ee>" + _vm._ssrEscape("\n              " + _vm._s(product.pro_desc) + "\n            ") + "</div>" : "<!---->") + "</td> <td class=\"barcode\" data-v-ae4a51ee>" + _vm._ssrEscape(_vm._s(product.barCode || 'N/A')) + "</td> <td class=\"current-price\" data-v-ae4a51ee>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(product.cost_price))) + "</td> <td data-v-ae4a51ee><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("placeholder", _vm.formatCurrency(product.cost_price)) + _vm._ssrAttr("value", _vm.getPriceChange(product.id, 'cost_price')) + " class=\"price-input\" data-v-ae4a51ee></td> <td class=\"current-price\" data-v-ae4a51ee>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(product.pro_price))) + "</td> <td data-v-ae4a51ee><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("placeholder", _vm.formatCurrency(product.pro_price)) + _vm._ssrAttr("value", _vm.getPriceChange(product.id, 'sale_price')) + " class=\"price-input\" data-v-ae4a51ee></td> <td data-v-ae4a51ee>" + (_vm.hasProductChanges(product.id) ? "<button title=\"Clear changes for this product\" class=\"btn-clear-row\" data-v-ae4a51ee>\n              ✕\n            </button>" : "<!---->") + "</td></tr>";
  }) + "</tbody></table></div>") + " " + (_vm.totalPages > 1 ? "<div class=\"pagination\" data-v-ae4a51ee><button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"btn btn-secondary\" data-v-ae4a51ee>\n      Previous\n    </button> <span class=\"page-info\" data-v-ae4a51ee>" + _vm._ssrEscape("\n      Page " + _vm._s(_vm.currentPage) + " of " + _vm._s(_vm.totalPages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"btn btn-secondary\" data-v-ae4a51ee>\n      Next\n    </button></div>" : "<!---->") + " " + (!_vm.loading && _vm.products.length === 0 ? "<div class=\"empty-state\" data-v-ae4a51ee><p data-v-ae4a51ee>No products found</p> " + (_vm.searchTerm ? "<button class=\"btn btn-primary\" data-v-ae4a51ee>\n      Clear Search\n    </button>" : "<!---->") + "</div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ProductPriceManager.vue?vue&type=template&id=ae4a51ee&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(146);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(147);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(148);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(149);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(150);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(151);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(152);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(153);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(154);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(155);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(156);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(157);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(158);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(159);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(160);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(161);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductPriceManager.vue?vue&type=script&lang=js
















/* harmony default export */ var ProductPriceManagervue_type_script_lang_js = ({
  name: 'ProductPriceManager',
  data() {
    return {
      products: [],
      loading: true,
      saving: false,
      searchTerm: '',
      currentPage: 1,
      totalPages: 1,
      priceChanges: {},
      selectAll: false,
      selectedProducts: new Set(),
      notification: {
        message: '',
        type: '',
        show: false
      },
      searchDebounce: null
    };
  },
  computed: {
    pendingChanges() {
      return this.getSelectedChanges().length;
    },
    hasAnyChanges() {
      return Object.keys(this.priceChanges).length > 0;
    },
    canSave() {
      return !this.saving && this.pendingChanges > 0 && this.selectedProducts.size > 0;
    }
  },
  watch: {
    searchTerm(newVal) {
      clearTimeout(this.searchDebounce);
      this.searchDebounce = setTimeout(() => {
        if (this.currentPage === 1) {
          this.fetchProducts(1, newVal);
        } else {
          this.currentPage = 1;
        }
      }, 500);
    },
    currentPage(newVal) {
      this.fetchProducts(newVal, this.searchTerm);
    },
    selectedProducts: {
      handler(newVal) {
        this.selectAll = newVal.size === this.products.length && this.products.length > 0;
      },
      deep: true
    }
  },
  async mounted() {
    await this.fetchProducts(1, this.searchTerm);
  },
  beforeDestroy() {
    if (this.searchDebounce) {
      clearTimeout(this.searchDebounce);
    }
  },
  methods: {
    // Fetch products from API
    async fetchProducts(page = 1, search = '') {
      this.loading = true;
      try {
        const response = await this.$axios.get('/api/product-temps', {
          params: {
            page,
            limit: 50,
            search
          }
        });
        if (response.data.success) {
          this.products = response.data.data;
          this.totalPages = response.data.pagination.totalPages;
          this.currentPage = response.data.pagination.currentPage;
        } else {
          this.showNotification('Failed to load products', 'error');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        this.showNotification('Error loading products', 'error');
      } finally {
        this.loading = false;
      }
    },
    // Show notification
    showNotification(message, type = 'info') {
      this.notification = {
        message,
        type,
        show: true
      };
      setTimeout(() => {
        this.notification.show = false;
      }, 4000);
    },
    // Handle price change input
    handlePriceChange(productId, field, value) {
      if (!this.priceChanges[productId]) {
        this.$set(this.priceChanges, productId, {
          id: productId
        });
      }
      this.$set(this.priceChanges[productId], field, value);
    },
    // Validate price input
    validatePrice(event) {
      const value = event.target.value;
      if (value && (isNaN(value) || parseFloat(value) < 0)) {
        this.showNotification('Please enter a valid price (0 or greater)', 'warning');
        event.target.focus();
      }
    },
    // Get price change value
    getPriceChange(productId, field) {
      var _this$priceChanges$pr;
      return ((_this$priceChanges$pr = this.priceChanges[productId]) === null || _this$priceChanges$pr === void 0 ? void 0 : _this$priceChanges$pr[field]) || '';
    },
    // Check if product has changes
    hasProductChanges(productId) {
      const changes = this.priceChanges[productId];
      return changes && (changes.cost_price !== undefined && changes.cost_price !== '' || changes.sale_price !== undefined && changes.sale_price !== '');
    },
    // Clear changes for specific product
    clearProductChanges(productId) {
      this.$delete(this.priceChanges, productId);

      // Remove from selected if no changes
      const newSelected = new Set(this.selectedProducts);
      newSelected.delete(productId);
      this.selectedProducts = newSelected;
    },
    // Handle individual product selection
    handleProductSelect(productId, isSelected) {
      const newSet = new Set(this.selectedProducts);
      if (isSelected) {
        newSet.add(productId);
      } else {
        newSet.delete(productId);
      }
      this.selectedProducts = newSet;
    },
    // Handle select all
    handleSelectAll() {
      if (this.selectAll) {
        this.selectedProducts = new Set();
      } else {
        this.selectedProducts = new Set(this.products.map(p => p.id));
      }
    },
    // Handle page change
    handlePageChange(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.currentPage = newPage;
      }
    },
    // Get changes for selected products only
    getSelectedChanges() {
      return Object.values(this.priceChanges).filter(change => {
        return this.selectedProducts.has(change.id) && (change.cost_price !== undefined && change.cost_price !== '' || change.sale_price !== undefined && change.sale_price !== '');
      });
    },
    // Handle bulk save
    async handleBulkSave() {
      const changes = this.getSelectedChanges();
      if (changes.length === 0) {
        this.showNotification('No price changes to save', 'warning');
        return;
      }
      if (this.selectedProducts.size === 0) {
        this.showNotification('Please select products to update', 'warning');
        return;
      }
      this.saving = true;
      try {
        const response = await this.$axios.patch('/api/product-temps/bulk-update-prices', {
          updates: changes
        });
        if (response.data.success) {
          this.showNotification(`Successfully updated ${response.data.summary.successful} products`, 'success');
          if (response.data.summary.failed > 0) {
            this.showNotification(`${response.data.summary.failed} updates failed`, 'warning');
          }

          // Clear changes for successful updates
          const successfulIds = response.data.results.filter(r => r.success).map(r => r.id);
          successfulIds.forEach(id => {
            this.$delete(this.priceChanges, id);
          });

          // Update products with new values
          this.products = this.products.map(product => {
            const update = response.data.results.find(r => r.id === product.id && r.success);
            return update ? {
              ...product,
              ...update.product
            } : product;
          });
          this.selectedProducts = new Set();
        } else {
          this.showNotification(response.data.message || 'Failed to update prices', 'error');
        }
      } catch (error) {
        console.error('Error saving prices:', error);
        this.showNotification('Error saving prices', 'error');
      } finally {
        this.saving = false;
      }
    },
    // Clear all changes
    handleClearChanges() {
      this.priceChanges = {};
      this.selectedProducts = new Set();
      this.showNotification('All changes cleared', 'info');
    },
    // Clear search
    clearSearch() {
      this.searchTerm = '';
    },
    // Format currency
    formatCurrency(value) {
      return value ? `$${parseFloat(value).toFixed(2)}` : '$0.00';
    }
  }
});
// CONCATENATED MODULE: ./components/ProductPriceManager.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ProductPriceManagervue_type_script_lang_js = (ProductPriceManagervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ProductPriceManager.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1385)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductPriceManagervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ae4a51ee",
  "0ea97430"
  
)

/* harmony default export */ var ProductPriceManager = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-price-manager.js.map