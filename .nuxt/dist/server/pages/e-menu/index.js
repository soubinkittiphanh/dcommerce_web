exports.ids = [285];
exports.modules = {

/***/ 1231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/e-menu/index.vue?vue&type=template&id=44e8f959&scoped=true


var e_menuvue_type_template_id_44e8f959_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "customer-menu"
  }, [_vm._ssrNode("<div class=\"welcome-banner\" data-v-44e8f959><div class=\"banner-content\" data-v-44e8f959><h1 class=\"welcome-title\" data-v-44e8f959><span class=\"emoji\" data-v-44e8f959>👋</span>\n        Welcome!\n      </h1> <p class=\"welcome-subtitle\" data-v-44e8f959>Browse our delicious menu</p></div></div> <div class=\"search-section\" data-v-44e8f959><div class=\"search-wrapper\" data-v-44e8f959><span class=\"search-icon\" data-v-44e8f959>🔍</span> <input type=\"text\" placeholder=\"Search dishes...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " class=\"search-input\" data-v-44e8f959> " + (_vm.searchQuery ? "<button class=\"clear-btn\" data-v-44e8f959>\n        ×\n      </button>" : "<!---->") + "</div></div> "), _c(VContainer["a" /* default */], {
    staticClass: "menu-container"
  }, [_vm.categories.length > 0 ? _c('div', {
    staticClass: "category-tabs"
  }, _vm._l(_vm.categories, function (category) {
    return _c('button', {
      key: category,
      staticClass: "category-tab",
      class: {
        'active': _vm.selectedCategory === category
      },
      on: {
        "click": function ($event) {
          _vm.selectedCategory = category;
        }
      }
    }, [_c('span', {
      staticClass: "tab-text"
    }, [_vm._v(_vm._s(category))]), _vm._v(" "), _c('span', {
      staticClass: "tab-count"
    }, [_vm._v(_vm._s(_vm.getCategoryCount(category)))])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.filteredProducts.length > 0 ? _c('div', {
    staticClass: "menu-grid"
  }, _vm._l(_vm.filteredProducts, function (product, index) {
    return _c('div', {
      key: product.id || product.productId,
      staticClass: "menu-card",
      style: {
        animationDelay: `${index * 0.05}s`
      },
      on: {
        "click": function ($event) {
          return _vm.showProductDetail(product);
        }
      }
    }, [_c('div', {
      staticClass: "card-image"
    }, [_c('img', {
      attrs: {
        "src": _vm.getProductImage(product),
        "alt": product.pro_name,
        "loading": "lazy"
      },
      on: {
        "error": _vm.handleImageError
      }
    }), _vm._v(" "), index < 5 ? _c('div', {
      staticClass: "image-badge"
    }, [_c('span', [_vm._v("⭐ Popular")])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "card-content"
    }, [product.categ_name ? _c('div', {
      staticClass: "category-badge"
    }, [_vm._v("\n            " + _vm._s(product.categ_name) + "\n          ")]) : _vm._e(), _vm._v(" "), _c('h3', {
      staticClass: "product-name"
    }, [_vm._v(_vm._s(product.pro_name))]), _vm._v(" "), _c('p', {
      staticClass: "product-description"
    }, [_vm._v("\n            " + _vm._s(_vm.truncateText(product.pro_desc || 'Delicious dish made with quality ingredients', 60)) + "\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "card-footer"
    }, [_c('div', {
      staticClass: "price-tag"
    }, [_c('span', {
      staticClass: "currency"
    }, [_vm._v("₭")]), _vm._v(" "), _c('span', {
      staticClass: "price"
    }, [_vm._v(_vm._s(_vm.formatPrice(product.pro_price)))])]), _vm._v(" "), _c('div', {
      staticClass: "rating-badge"
    }, [_c('span', {
      staticClass: "star"
    }, [_vm._v("⭐")]), _vm._v(" "), _c('span', {
      staticClass: "rating-value"
    }, [_vm._v("4." + _vm._s(Math.floor(Math.random() * 9) + 1))])])])])]);
  }), 0) : _c('div', {
    staticClass: "empty-state"
  }, [_c('div', {
    staticClass: "empty-icon"
  }, [_vm._v(_vm._s(_vm.searchQuery ? '🔍' : '🍽️'))]), _vm._v(" "), _c('h3', {
    staticClass: "empty-title"
  }, [_vm._v("\n        " + _vm._s(_vm.searchQuery ? 'No dishes found' : 'No menu items available') + "\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "empty-text"
  }, [_vm._v("\n        " + _vm._s(_vm.searchQuery ? 'Try searching for something else' : 'Please check back later') + "\n      ")]), _vm._v(" "), _vm.searchQuery ? _c('button', {
    staticClass: "reset-btn",
    on: {
      "click": function ($event) {
        _vm.searchQuery = '';
      }
    }
  }, [_vm._v("\n        Clear Search\n      ")]) : _vm._e()])]), _vm._ssrNode(" " + (_vm.selectedProduct ? "<div class=\"detail-modal\" data-v-44e8f959><div class=\"modal-content\" data-v-44e8f959><button class=\"modal-close\" data-v-44e8f959>×</button> <div class=\"modal-image\" data-v-44e8f959><img" + _vm._ssrAttr("src", _vm.getProductImage(_vm.selectedProduct)) + _vm._ssrAttr("alt", _vm.selectedProduct.pro_name) + " data-v-44e8f959></div> <div class=\"modal-body\" data-v-44e8f959><div class=\"modal-category\" data-v-44e8f959>" + _vm._ssrEscape(_vm._s(_vm.selectedProduct.categ_name)) + "</div> <h2 class=\"modal-title\" data-v-44e8f959>" + _vm._ssrEscape(_vm._s(_vm.selectedProduct.pro_name)) + "</h2> <p class=\"modal-description\" data-v-44e8f959>" + _vm._ssrEscape("\n          " + _vm._s(_vm.selectedProduct.pro_desc || 'A delicious dish made with quality ingredients and served with care.') + "\n        ") + "</p> <div class=\"modal-footer\" data-v-44e8f959><div class=\"modal-price\" data-v-44e8f959><span class=\"currency\" data-v-44e8f959>₭</span> <span class=\"amount\" data-v-44e8f959>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.selectedProduct.pro_price))) + "</span></div> <div class=\"modal-rating\" data-v-44e8f959><span class=\"stars\" data-v-44e8f959>⭐⭐⭐⭐⭐</span> <span class=\"rating-text\" data-v-44e8f959>" + _vm._ssrEscape("(" + _vm._s(Math.floor(Math.random() * 50) + 10) + " reviews)") + "</span></div></div> <div class=\"info-note\" data-v-44e8f959><span class=\"note-icon\" data-v-44e8f959>ℹ️</span> <span data-v-44e8f959>Scan QR code at your table to place an order</span></div></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/e-menu/index.vue?vue&type=template&id=44e8f959&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(352);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(353);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(354);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(355);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(356);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(357);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(358);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(359);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(360);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(361);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(362);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(363);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(364);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(365);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(366);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(367);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/e-menu/index.vue?vue&type=script&lang=js

















/* harmony default export */ var e_menuvue_type_script_lang_js = ({
  layout: 'menu',
  name: 'CustomerMenuScreen',
  data() {
    return {
      products: [],
      searchQuery: '',
      selectedCategory: 'All',
      selectedProduct: null
    };
  },
  computed: {
    host() {
      return Object(api["a" /* hostName */])();
    },
    activeProducts() {
      return this.products.filter(p => {
        const isActive = p.isActive || p.is_active || p.status === 'active' || p.pro_status === 1 || p.pro_status === true;
        return isActive;
      });
    },
    categories() {
      const cats = new Set(this.activeProducts.map(p => p.categ_name || 'Other'));
      return ['All', ...Array.from(cats).sort()];
    },
    filteredProducts() {
      let filtered = this.activeProducts;

      // Filter by category
      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(p => (p.categ_name || 'Other') === this.selectedCategory);
      }

      // Filter by search
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(p => {
          var _p$pro_name, _p$pro_desc, _p$categ_name;
          return ((_p$pro_name = p.pro_name) === null || _p$pro_name === void 0 ? void 0 : _p$pro_name.toLowerCase().includes(query)) || ((_p$pro_desc = p.pro_desc) === null || _p$pro_desc === void 0 ? void 0 : _p$pro_desc.toLowerCase().includes(query)) || ((_p$categ_name = p.categ_name) === null || _p$categ_name === void 0 ? void 0 : _p$categ_name.toLowerCase().includes(query));
        });
      }
      return filtered;
    }
  },
  async mounted() {
    await this.loadProducts();
  },
  methods: {
    async loadProducts() {
      try {
        var _response$data, _response$data2;
        const response = await this.$axios.get('/product_mobile_f');
        this.products = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.products) || response.data || [];
      } catch (err) {
        console.error('Error loading products:', err);
      }
    },
    getCategoryCount(category) {
      if (category === 'All') return this.activeProducts.length;
      return this.activeProducts.filter(p => (p.categ_name || 'Other') === category).length;
    },
    formatPrice(amount) {
      return new Intl.NumberFormat('en-US').format(amount || 0);
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    getProductImage(product) {
      const imageName = product.img_path;
      if (imageName) {
        return `${this.host}/${imageName}`;
      }
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
    },
    handleImageError(event) {
      event.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
    },
    showProductDetail(product) {
      this.selectedProduct = product;
      document.body.style.overflow = 'hidden';
    },
    closeDetail() {
      this.selectedProduct = null;
      document.body.style.overflow = 'auto';
    }
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto';
  }
});
// CONCATENATED MODULE: ./pages/e-menu/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_e_menuvue_type_script_lang_js = (e_menuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/e-menu/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(950)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_e_menuvue_type_script_lang_js,
  e_menuvue_type_template_id_44e8f959_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "44e8f959",
  "1a85b28b"
  
)

/* harmony default export */ var e_menu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(951);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("68523e8d", content, true, context)
};

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8f959_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(768);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8f959_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8f959_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8f959_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8f959_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".customer-menu[data-v-44e8f959]{min-height:100vh}.welcome-banner[data-v-44e8f959]{background:linear-gradient(135deg,#01532b,#337555);color:#fff;overflow:hidden;padding:3rem 1.5rem 2rem;position:relative;text-align:center}.welcome-banner[data-v-44e8f959]:before{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"rgba(255,255,255,0.05)\"/></svg>');bottom:0;content:\"\";left:0;opacity:.3;position:absolute;right:0;top:0}.banner-content[data-v-44e8f959]{animation:fadeInUp-44e8f959 .8s ease-out;position:relative;z-index:2}@keyframes fadeInUp-44e8f959{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.welcome-title[data-v-44e8f959]{align-items:center;display:flex;font-size:2.5rem;font-weight:700;gap:1rem;justify-content:center;margin:0 0 .5rem}.emoji[data-v-44e8f959]{animation:wave-44e8f959 2s infinite;font-size:2.5rem}@keyframes wave-44e8f959{0%,to{transform:rotate(0deg)}10%,30%{transform:rotate(14deg)}20%{transform:rotate(-8deg)}40%{transform:rotate(14deg)}50%{transform:rotate(0deg)}}.welcome-subtitle[data-v-44e8f959]{font-size:1.1rem;font-weight:400;margin:0;opacity:.95}.search-section[data-v-44e8f959]{backdrop-filter:blur(10px);background:#fff;border-bottom:1px solid rgba(0,0,0,.08);padding:1.5rem 1.5rem 1rem;position:sticky;top:80px;z-index:50}.search-wrapper[data-v-44e8f959]{align-items:center;background:#f8fafc;border-radius:50px;box-shadow:0 2px 10px rgba(0,0,0,.05);display:flex;margin:0 auto;max-width:600px;padding:.75rem 1.25rem;position:relative;transition:all .3s ease}.search-wrapper[data-v-44e8f959]:focus-within{background:#fff;box-shadow:0 4px 20px rgba(1,83,43,.15)}.search-icon[data-v-44e8f959]{font-size:1.2rem;margin-right:.75rem;opacity:.6}.search-input[data-v-44e8f959]{background:none;border:none;color:#1f2937;flex:1;font-size:1rem;outline:none}.search-input[data-v-44e8f959]::-moz-placeholder{color:#9ca3af}.search-input[data-v-44e8f959]::placeholder{color:#9ca3af}.clear-btn[data-v-44e8f959]{align-items:center;background:rgba(0,0,0,.1);border:none;border-radius:50%;color:#6b7280;cursor:pointer;display:flex;font-size:1.2rem;height:24px;justify-content:center;transition:all .2s ease;width:24px}.clear-btn[data-v-44e8f959]:hover{background:rgba(0,0,0,.15)}.menu-container[data-v-44e8f959]{max-width:1200px;padding-bottom:2rem;padding-top:1.5rem}.category-tabs[data-v-44e8f959]{display:flex;gap:.75rem;overflow-x:auto;padding:1rem 0 1.5rem;scrollbar-width:none;-ms-overflow-style:none}.category-tabs[data-v-44e8f959]::-webkit-scrollbar{display:none}.category-tab[data-v-44e8f959]{align-items:center;background:#fff;border:2px solid #e5e7eb;border-radius:50px;box-shadow:0 2px 8px rgba(0,0,0,.04);color:#4b5563;cursor:pointer;display:flex;font-weight:600;gap:.5rem;padding:.75rem 1.25rem;transition:all .3s ease;white-space:nowrap}.category-tab[data-v-44e8f959]:hover{border-color:#01532b;box-shadow:0 4px 12px rgba(1,83,43,.15);transform:translateY(-2px)}.category-tab.active[data-v-44e8f959]{background:linear-gradient(135deg,#01532b,#337555);border-color:transparent;box-shadow:0 4px 15px rgba(1,83,43,.3);color:#fff}.tab-count[data-v-44e8f959]{background:rgba(0,0,0,.1);border-radius:20px;font-size:.75rem;font-weight:700;padding:.15rem .5rem}.category-tab.active .tab-count[data-v-44e8f959]{background:hsla(0,0%,100%,.25)}.menu-grid[data-v-44e8f959]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));grid-gap:1.5rem;animation:fadeIn-44e8f959 .6s ease-out;gap:1.5rem}@keyframes fadeIn-44e8f959{0%{opacity:0}to{opacity:1}}.menu-card[data-v-44e8f959]{animation:slideInUp-44e8f959 .5s ease-out both;background:#fff;border-radius:20px;box-shadow:0 4px 15px rgba(0,0,0,.08);cursor:pointer;overflow:hidden;transition:all .3s cubic-bezier(.4,0,.2,1)}@keyframes slideInUp-44e8f959{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.menu-card[data-v-44e8f959]:hover{box-shadow:0 12px 30px rgba(0,0,0,.15);transform:translateY(-8px)}.card-image[data-v-44e8f959]{background:#f3f4f6;height:200px;overflow:hidden;position:relative}.card-image img[data-v-44e8f959]{height:100%;-o-object-fit:cover;object-fit:cover;transition:transform .4s ease;width:100%}.menu-card:hover .card-image img[data-v-44e8f959]{transform:scale(1.1)}.image-badge[data-v-44e8f959]{backdrop-filter:blur(10px);background:rgba(239,68,68,.95);border-radius:20px;box-shadow:0 4px 12px rgba(239,68,68,.3);color:#fff;font-size:.75rem;font-weight:700;padding:.4rem .8rem;position:absolute;right:12px;top:12px}.card-content[data-v-44e8f959]{padding:1.25rem}.category-badge[data-v-44e8f959]{background:linear-gradient(135deg,rgba(1,83,43,.1),rgba(51,117,85,.1));border-radius:20px;color:#01532b;display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.5px;margin-bottom:.75rem;padding:.35rem .75rem;text-transform:uppercase}.product-name[data-v-44e8f959]{color:#1f2937;font-size:1.15rem;font-weight:700;line-height:1.3;margin:0 0 .5rem}.product-description[data-v-44e8f959],.product-name[data-v-44e8f959]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.product-description[data-v-44e8f959]{color:#6b7280;font-size:.875rem;line-height:1.5;margin:0 0 1rem}.card-footer[data-v-44e8f959]{align-items:center;border-top:1px solid #f3f4f6;display:flex;justify-content:space-between;padding-top:.75rem}.price-tag[data-v-44e8f959]{align-items:baseline;display:flex;gap:.25rem}.currency[data-v-44e8f959]{color:#6b7280;font-size:.85rem;font-weight:600}.price[data-v-44e8f959]{color:#059669;font-size:1.5rem;font-weight:800}.rating-badge[data-v-44e8f959]{align-items:center;background:#fef3c7;border-radius:20px;display:flex;gap:.25rem;padding:.35rem .65rem}.star[data-v-44e8f959]{font-size:.9rem}.rating-value[data-v-44e8f959]{color:#92400e;font-size:.85rem;font-weight:700}.empty-state[data-v-44e8f959]{animation:fadeIn-44e8f959 .5s ease-out;padding:4rem 2rem;text-align:center}.empty-icon[data-v-44e8f959]{font-size:4rem;margin-bottom:1rem;opacity:.6}.empty-title[data-v-44e8f959]{color:#374151;font-size:1.5rem;font-weight:700;margin:0 0 .5rem}.empty-text[data-v-44e8f959]{color:#6b7280;font-size:1rem;margin:0 0 1.5rem}.reset-btn[data-v-44e8f959]{background:linear-gradient(135deg,#01532b,#337555);border:none;border-radius:50px;box-shadow:0 4px 15px rgba(1,83,43,.3);color:#fff;cursor:pointer;font-size:1rem;font-weight:600;padding:.875rem 2rem;transition:all .3s ease}.reset-btn[data-v-44e8f959]:hover{box-shadow:0 6px 20px rgba(1,83,43,.4);transform:translateY(-2px)}.detail-modal[data-v-44e8f959]{align-items:center;animation:fadeIn-44e8f959 .3s ease;backdrop-filter:blur(8px);background:rgba(0,0,0,.85);bottom:0;display:flex;justify-content:center;left:0;padding:1rem;position:fixed;right:0;top:0;z-index:1000}.modal-content[data-v-44e8f959]{animation:modalSlide-44e8f959 .4s cubic-bezier(.4,0,.2,1);background:#fff;border-radius:24px;max-height:90vh;max-width:600px;overflow-y:auto;position:relative;width:100%}@keyframes modalSlide-44e8f959{0%{opacity:0;transform:scale(.9) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}.modal-close[data-v-44e8f959]{backdrop-filter:blur(10px);background:rgba(0,0,0,.6);border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:1.5rem;height:40px;position:absolute;right:1rem;top:1rem;transition:all .2s ease;width:40px;z-index:10}.modal-close[data-v-44e8f959]:hover{background:rgba(0,0,0,.8);transform:scale(1.1)}.modal-image[data-v-44e8f959]{border-radius:24px 24px 0 0;height:300px;overflow:hidden}.modal-image img[data-v-44e8f959]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.modal-body[data-v-44e8f959]{padding:2rem}.modal-category[data-v-44e8f959]{background:linear-gradient(135deg,rgba(1,83,43,.1),rgba(51,117,85,.1));border-radius:20px;color:#01532b;display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.5px;margin-bottom:1rem;padding:.4rem 1rem;text-transform:uppercase}.modal-title[data-v-44e8f959]{color:#1f2937;font-size:2rem;font-weight:800;line-height:1.2;margin:0 0 1rem}.modal-description[data-v-44e8f959]{color:#4b5563;font-size:1rem;line-height:1.7;margin:0 0 1.5rem}.modal-footer[data-v-44e8f959]{align-items:center;border-top:2px solid #f3f4f6;display:flex;justify-content:space-between;margin-bottom:1rem;padding:1.5rem 0}.modal-price[data-v-44e8f959]{align-items:baseline;display:flex;gap:.5rem}.modal-price .currency[data-v-44e8f959]{color:#6b7280;font-size:1.1rem;font-weight:600}.modal-price .amount[data-v-44e8f959]{color:#059669;font-size:2.25rem;font-weight:900}.modal-rating[data-v-44e8f959]{text-align:right}.stars[data-v-44e8f959]{display:block;font-size:1.1rem;margin-bottom:.25rem}.rating-text[data-v-44e8f959]{color:#6b7280;font-size:.85rem}.info-note[data-v-44e8f959]{align-items:center;background:linear-gradient(135deg,#dbeafe,#e0e7ff);border:1px solid rgba(30,64,175,.2);border-radius:16px;color:#1e40af;display:flex;font-size:.9rem;font-weight:500;gap:.75rem;padding:1rem 1.25rem}.note-icon[data-v-44e8f959]{font-size:1.25rem}@media (max-width:768px){.welcome-title[data-v-44e8f959]{font-size:2rem}.menu-grid[data-v-44e8f959]{gap:1rem;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}.search-section[data-v-44e8f959]{top:70px}.category-tabs[data-v-44e8f959]{padding:.75rem 0 1rem}.modal-content[data-v-44e8f959]{border-radius:20px 20px 0 0;max-height:95vh}.modal-title[data-v-44e8f959]{font-size:1.5rem}.modal-price .amount[data-v-44e8f959]{font-size:1.75rem}}@media (max-width:480px){.welcome-banner[data-v-44e8f959]{padding:2rem 1rem 1.5rem}.welcome-title[data-v-44e8f959]{font-size:1.75rem}.menu-grid[data-v-44e8f959]{grid-template-columns:1fr}.modal-body[data-v-44e8f959]{padding:1.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map