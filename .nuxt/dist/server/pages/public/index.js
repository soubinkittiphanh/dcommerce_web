exports.ids = [312];
exports.modules = {

/***/ 1257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/public/index.vue?vue&type=template&id=14e82616&scoped=true


var publicvue_type_template_id_14e82616_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cafe-menu"
  }, [_vm._ssrNode("<div class=\"hero-section\" data-v-14e82616><div class=\"hero-overlay\" data-v-14e82616><div class=\"hero-content\" data-v-14e82616><h1 class=\"hero-title\" data-v-14e82616><span class=\"coffee-icon\" data-v-14e82616>☕</span>\n          Our Delicious Menu\n          <span class=\"sparkle\" data-v-14e82616>✨</span></h1> <p class=\"hero-subtitle\" data-v-14e82616>Crafted with love, served with passion</p></div></div></div> "), _c(VContainer["a" /* default */], {
    staticClass: "menu-container",
    attrs: {
      "fluid": ""
    }
  }, [_vm.activeProducts.length > 0 ? _c('div', {
    staticClass: "stats-bar"
  }, [_c('div', {
    staticClass: "stat-item"
  }, [_c('div', {
    staticClass: "stat-number"
  }, [_vm._v(_vm._s(_vm.activeProducts.length))]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Delicious Items")])]), _vm._v(" "), _c('div', {
    staticClass: "stat-item"
  }, [_c('div', {
    staticClass: "stat-number"
  }, [_vm._v("🔥")]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Fresh Daily")])]), _vm._v(" "), _c('div', {
    staticClass: "stat-item"
  }, [_c('div', {
    staticClass: "stat-number"
  }, [_vm._v("⭐")]), _vm._v(" "), _c('div', {
    staticClass: "stat-label"
  }, [_vm._v("Premium Quality")])])]) : _vm._e(), _vm._v(" "), _vm.activeProducts.length > 0 ? _c('div', {
    staticClass: "menu-grid"
  }, _vm._l(_vm.activeProducts, function (product, index) {
    return _c('div', {
      key: product.productId,
      staticClass: "menu-item",
      class: {
        'featured': index % 4 === 0
      },
      on: {
        "click": function ($event) {
          _vm.previewImg(_vm.getProductImage(product));
        }
      }
    }, [_c('div', {
      staticClass: "item-card"
    }, [index < 3 ? _c('div', {
      staticClass: "popular-badge"
    }, [_c('span', [_vm._v("🔥 Popular")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "image-container"
    }, [_c('div', {
      staticClass: "image-wrapper"
    }, [_c('img', {
      staticClass: "product-image",
      attrs: {
        "src": _vm.getProductImage(product),
        "alt": product.pro_name
      },
      on: {
        "error": _vm.handleImageError
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "image-overlay"
    }, [_c('div', {
      staticClass: "overlay-content"
    }, [_c('div', {
      staticClass: "zoom-icon"
    }, [_vm._v("🔍")]), _vm._v(" "), _c('span', [_vm._v("Click to view")])])])])]), _vm._v(" "), _c('div', {
      staticClass: "item-content"
    }, [_c('h3', {
      staticClass: "item-title"
    }, [_vm._v(_vm._s(product.pro_name))]), _vm._v(" "), _c('p', {
      staticClass: "item-description"
    }, [_vm._v("\n              " + _vm._s(product.pro_desc || 'A delightful treat crafted with premium ingredients') + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "price-section"
    }, [_c('div', {
      staticClass: "price-container"
    }, [_c('span', {
      staticClass: "currency"
    }, [_vm._v("LAK")]), _vm._v(" "), _c('span', {
      staticClass: "price"
    }, [_vm._v(_vm._s(_vm.formatPrice(product.pro_price)))])]), _vm._v(" "), _c('div', {
      staticClass: "action-buttons"
    }, [_c('div', {
      staticClass: "add-to-cart"
    }, [_c('button', {
      staticClass: "cart-btn",
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return _vm.addToCart(product);
        }
      }
    }, [_c('span', {
      staticClass: "cart-icon"
    }, [_vm._v("🛒")]), _vm._v("\n                    Add\n                  ")])]), _vm._v(" "), _c('div', {
      staticClass: "call-waiter-item"
    }, [_c('button', {
      staticClass: "waiter-btn",
      attrs: {
        "disabled": _vm.isCallingWaiter
      },
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return _vm.callWaiterForItem(product);
        }
      }
    }, [_c('span', {
      staticClass: "waiter-icon"
    }, [_vm._v("👨‍🍳")]), _vm._v("\n                    Order\n                  ")])])])]), _vm._v(" "), _c('div', {
      staticClass: "rating"
    }, [_c('span', {
      staticClass: "stars"
    }, [_vm._v("⭐⭐⭐⭐⭐")]), _vm._v(" "), _c('span', {
      staticClass: "rating-count"
    }, [_vm._v("(" + _vm._s(Math.floor(Math.random() * 50) + 10) + ")")])])])])]);
  }), 0) : _c('div', {
    staticClass: "empty-state"
  }, [_c('div', {
    staticClass: "empty-content"
  }, [_c('div', {
    staticClass: "empty-icon"
  }, [_vm._v("🍽️")]), _vm._v(" "), _c('h2', [_vm._v("Menu Coming Soon!")]), _vm._v(" "), _c('p', [_vm._v("We're preparing something amazing for you")]), _vm._v(" "), _c('div', {
    staticClass: "loading-dots"
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')])])])]), _vm._ssrNode(" " + (_vm.showTableDialog ? "<div class=\"table-dialog-overlay\" data-v-14e82616><div class=\"table-dialog\" data-v-14e82616><div class=\"dialog-header\" data-v-14e82616><div class=\"header-content\" data-v-14e82616><div class=\"header-icons\" data-v-14e82616><span class=\"table-icon\" data-v-14e82616>🏠</span> <span class=\"sparkle-icon\" data-v-14e82616>✨</span></div> <h3 class=\"header-title\" data-v-14e82616><span class=\"greeting\" data-v-14e82616>May I have your</span> <span class=\"highlight\" data-v-14e82616>Table Number</span> <span class=\"please\" data-v-14e82616>please?</span></h3> <p class=\"header-subtitle\" data-v-14e82616>We'll bring your order right to you! 🍽️</p></div> <button class=\"dialog-close\" data-v-14e82616>×</button></div> <div class=\"dialog-content\" data-v-14e82616><p class=\"dialog-subtitle\" data-v-14e82616>" + _vm._ssrEscape("\n          " + _vm._s(_vm.selectedProduct ? `Perfect! Which table for your "${_vm.selectedProduct.pro_name}"? 🎯` : 'Choose your table so we can serve you perfectly! 🌟') + "\n        ") + "</p> <div class=\"tables-grid\" data-v-14e82616>" + _vm._ssrList(_vm.tables, function (table) {
    return "<div" + _vm._ssrClass("table-card", {
      'selected': _vm.selectedTable === table.number
    }) + " data-v-14e82616><div class=\"table-number\" data-v-14e82616>" + _vm._ssrEscape(_vm._s(table.number)) + "</div> <div class=\"table-name\" data-v-14e82616>" + _vm._ssrEscape(_vm._s(table.name)) + "</div> <div class=\"table-zone\" data-v-14e82616>" + _vm._ssrEscape(_vm._s(table.zone)) + "</div> <div class=\"table-icon-small\" data-v-14e82616>🪑</div></div>";
  }) + "</div> <div class=\"dialog-actions\" data-v-14e82616><button class=\"cancel-btn\" data-v-14e82616>\n            Cancel\n          </button> <button" + _vm._ssrAttr("disabled", !_vm.selectedTable) + _vm._ssrClass("confirm-btn", {
    'disabled': !_vm.selectedTable
  }) + " data-v-14e82616><span class=\"btn-icon\" data-v-14e82616>🔔</span>\n            Call Waiter\n          </button></div></div></div></div>" : "<!---->") + " " + (_vm.imageDialog ? "<div class=\"image-modal\" data-v-14e82616><div class=\"modal-content\" data-v-14e82616><button class=\"close-btn\" data-v-14e82616>×</button> <div class=\"modal-image-container\" data-v-14e82616><img" + _vm._ssrAttr("src", _vm.previewImageUrl) + " alt=\"Product Preview\" class=\"modal-image\" data-v-14e82616></div></div></div>" : "<!---->") + " <div class=\"fab-container\" data-v-14e82616><button" + _vm._ssrClass("fab call-waiter-fab", {
    'calling': _vm.isCallingWaiter
  }) + " data-v-14e82616>" + (!_vm.isCallingWaiter ? "<span data-v-14e82616>🔔</span>" : "<span class=\"calling-icon\" data-v-14e82616>📞</span>") + "</button> <button class=\"fab scroll-fab\" data-v-14e82616><span data-v-14e82616>↑</span></button></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/public/index.vue?vue&type=template&id=14e82616&scoped=true

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/public/index.vue?vue&type=script&lang=js

/* harmony default export */ var publicvue_type_script_lang_js = ({
  layout: 'menu',
  name: 'RestaurantMenuScreen',
  data() {
    return {
      products: [],
      imageDialog: false,
      previewImageUrl: '',
      isCallingWaiter: false,
      waiterCallCount: 0,
      showTableDialog: false,
      selectedTable: '',
      selectedProduct: null,
      tables: [{
        number: 'T01',
        name: 'Table 1',
        zone: 'Window Side'
      }, {
        number: 'T02',
        name: 'Table 2',
        zone: 'Window Side'
      }, {
        number: 'T03',
        name: 'Table 3',
        zone: 'Center'
      }, {
        number: 'T04',
        name: 'Table 4',
        zone: 'Center'
      }, {
        number: 'T05',
        name: 'Table 5',
        zone: 'Corner'
      }, {
        number: 'T06',
        name: 'Table 6',
        zone: 'Corner'
      }, {
        number: 'T07',
        name: 'Table 7',
        zone: 'Outdoor'
      }, {
        number: 'T08',
        name: 'Table 8',
        zone: 'Outdoor'
      }, {
        number: 'T09',
        name: 'Table 9',
        zone: 'VIP'
      }, {
        number: 'T10',
        name: 'Table 10',
        zone: 'VIP'
      }, {
        number: 'BAR1',
        name: 'Bar Seat 1',
        zone: 'Bar Counter'
      }, {
        number: 'BAR2',
        name: 'Bar Seat 2',
        zone: 'Bar Counter'
      }]
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
    }
  },
  async mounted() {
    try {
      var _response$data, _response$data2;
      const response = await this.$axios.get('/product_mobile_f');
      this.products = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.products) || response.data || [];
    } catch (err) {
      console.error('Error loading products:', err);
    }
  },
  methods: {
    formatPrice(amount) {
      return new Intl.NumberFormat('en-US').format(amount || 0);
    },
    getProductImage(product) {
      const imageName = product.img_path;
      if (imageName) {
        return `${this.host}/${imageName}`;
      }
      return 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop';
    },
    previewImg(imageUrl) {
      this.previewImageUrl = imageUrl;
      this.imageDialog = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.imageDialog = false;
      document.body.style.overflow = 'auto';
    },
    addToCart(product) {
      // Add your cart functionality here
      console.log('Added to cart:', product.pro_name);
      // You can emit an event or call a store action
    },
    handleImageError(event) {
      event.target.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop';
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    callWaiter() {
      if (this.isCallingWaiter) return;
      this.selectedProduct = null;
      this.showTableDialog = true;
    },
    callWaiterForItem(product) {
      if (this.isCallingWaiter) return;
      this.selectedProduct = product;
      this.showTableDialog = true;
    },
    selectTable(tableNumber) {
      this.selectedTable = tableNumber;
    },
    closeTableDialog() {
      this.showTableDialog = false;
      this.selectedTable = '';
      this.selectedProduct = null;
    },
    confirmCallWaiter() {
      if (!this.selectedTable) return;
      const table = this.tables.find(t => t.number === this.selectedTable);
      const productName = this.selectedProduct ? this.selectedProduct.pro_name : '';
      this.isCallingWaiter = true;
      this.waiterCallCount++;
      this.showTableDialog = false;

      // Show notification with table info
      let message = `🔔 Waiter called to ${table.name} (${table.zone})!`;
      if (productName) {
        message += ` For "${productName}".`;
      }
      this.showNotification(message, 'success');

      // Simulate waiter response time
      setTimeout(() => {
        this.isCallingWaiter = false;
        this.showNotification(`👨‍🍳 Waiter is heading to ${table.name}!`, 'info');
      }, 3000);

      // Reset selections
      this.selectedTable = '';
      this.selectedProduct = null;

      // Here you would make an API call to notify the restaurant system
      // await this.$axios.post('/call-waiter', { 
      //   tableNumber: this.selectedTable,
      //   productId: this.selectedProduct?.productId,
      //   timestamp: new Date().toISOString()
      // });

      console.log('Waiter called:', {
        table: table,
        product: this.selectedProduct,
        timestamp: new Date().toISOString()
      });
    },
    showNotification(message, type = 'info') {
      // Create a simple notification system
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.innerHTML = `
        <div class="notification-content">
          <span>${message}</span>
          <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
      `;
      document.body.appendChild(notification);

      // Auto remove after 5 seconds
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 5000);
    }
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto';
  }
});
// CONCATENATED MODULE: ./pages/public/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_publicvue_type_script_lang_js = (publicvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/public/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(970)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_publicvue_type_script_lang_js,
  publicvue_type_template_id_14e82616_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "14e82616",
  "4400d4ad"
  
)

/* harmony default export */ var pages_public = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(971);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1176daba", content, true, context)
};

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14e82616_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(781);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14e82616_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14e82616_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14e82616_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14e82616_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cafe-menu[data-v-14e82616]{background:linear-gradient(135deg,#01532b,#337555);min-height:100vh;position:relative}.hero-section[data-v-14e82616]{align-items:center;background:linear-gradient(135deg,rgba(0,0,0,.7),rgba(0,0,0,.4)),url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=300&fit=crop) 50%/cover;display:flex;height:300px;justify-content:center;overflow:hidden;position:relative}.hero-section[data-v-14e82616]:before{animation:shimmer-14e82616 3s infinite;background:linear-gradient(45deg,transparent 30%,hsla(0,0%,100%,.1) 50%,transparent 70%);bottom:0;content:\"\";left:0;position:absolute;right:0;top:0}@keyframes shimmer-14e82616{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}.hero-content[data-v-14e82616]{color:#fff;text-align:center;z-index:2}.hero-title[data-v-14e82616]{animation:fadeInUp-14e82616 1s ease-out;font-size:3rem;font-weight:700;margin-bottom:1rem;text-shadow:2px 2px 4px rgba(0,0,0,.5)}.coffee-icon[data-v-14e82616],.sparkle[data-v-14e82616]{animation:bounce-14e82616 2s infinite;display:inline-block}.sparkle[data-v-14e82616]{animation-delay:.5s}.hero-subtitle[data-v-14e82616]{animation:fadeInUp-14e82616 1s ease-out .3s both;font-size:1.2rem;opacity:.9}@keyframes fadeInUp-14e82616{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes bounce-14e82616{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}.menu-container[data-v-14e82616]{margin:0 auto;max-width:1400px;padding:2rem 1rem}.stats-bar[data-v-14e82616]{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.95);border-radius:20px;box-shadow:0 8px 32px rgba(0,0,0,.1);display:flex;gap:2rem;justify-content:center;margin-bottom:3rem;padding:1.5rem}.stat-item[data-v-14e82616]{text-align:center}.stat-number[data-v-14e82616]{color:#6366f1;font-size:2rem;font-weight:700;margin-bottom:.5rem}.stat-label[data-v-14e82616]{color:#6b7280;font-size:.9rem;font-weight:500}.menu-grid[data-v-14e82616]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));grid-gap:2rem;gap:2rem;padding:1rem 0}.menu-item[data-v-14e82616]{animation:slideInUp-14e82616 .6s ease-out;animation-fill-mode:both;cursor:pointer;transition:all .4s cubic-bezier(.175,.885,.32,1.275)}.menu-item[data-v-14e82616]:first-child{animation-delay:.1s}.menu-item[data-v-14e82616]:nth-child(2){animation-delay:.2s}.menu-item[data-v-14e82616]:nth-child(3){animation-delay:.3s}.menu-item[data-v-14e82616]:nth-child(4){animation-delay:.4s}.menu-item[data-v-14e82616]:nth-child(5){animation-delay:.5s}.menu-item[data-v-14e82616]:nth-child(6){animation-delay:.6s}@keyframes slideInUp-14e82616{0%{opacity:0;transform:translateY(60px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.menu-item[data-v-14e82616]:hover{transform:translateY(-10px) scale(1.02)}.menu-item.featured[data-v-14e82616]{grid-column:span 2}.item-card[data-v-14e82616]{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.95);border-radius:24px;box-shadow:0 10px 40px rgba(0,0,0,.1);overflow:hidden;position:relative;transition:all .3s ease}.item-card[data-v-14e82616]:hover{box-shadow:0 20px 60px rgba(0,0,0,.15)}.popular-badge[data-v-14e82616]{animation:pulse-14e82616 2s infinite;background:linear-gradient(135deg,#ff6b6b,#ff8e8e);border-radius:20px;box-shadow:0 4px 12px hsla(0,100%,71%,.3);color:#fff;font-size:.8rem;font-weight:700;padding:.5rem 1rem;position:absolute;right:15px;top:15px;z-index:3}@keyframes pulse-14e82616{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}.image-container[data-v-14e82616]{height:250px}.image-container[data-v-14e82616],.image-wrapper[data-v-14e82616]{overflow:hidden;position:relative}.image-wrapper[data-v-14e82616],.product-image[data-v-14e82616]{height:100%;width:100%}.product-image[data-v-14e82616]{-o-object-fit:cover;object-fit:cover;transition:all .4s ease}.menu-item:hover .product-image[data-v-14e82616]{transform:scale(1.1)}.image-overlay[data-v-14e82616]{align-items:center;background:rgba(0,0,0,.7);bottom:0;display:flex;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transition:all .3s ease}.menu-item:hover .image-overlay[data-v-14e82616]{opacity:1}.overlay-content[data-v-14e82616]{color:#fff;text-align:center}.zoom-icon[data-v-14e82616]{animation:zoomPulse-14e82616 1.5s infinite;font-size:2rem;margin-bottom:.5rem}@keyframes zoomPulse-14e82616{0%,to{transform:scale(1)}50%{transform:scale(1.2)}}.item-content[data-v-14e82616]{padding:1.5rem}.item-title[data-v-14e82616]{color:#1f2937;font-size:1.4rem;font-weight:700;line-height:1.2;margin-bottom:.5rem}.item-description[data-v-14e82616]{color:#6b7280;font-size:.95rem;line-height:1.5;margin-bottom:1rem}.price-section[data-v-14e82616]{align-items:flex-end;display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;margin-bottom:1rem}.price-container[data-v-14e82616]{align-items:baseline;display:flex;gap:.5rem}.currency[data-v-14e82616]{color:#6b7280;font-size:.9rem;font-weight:500}.price[data-v-14e82616]{color:#059669;font-size:1.8rem;font-weight:700;text-shadow:0 2px 4px rgba(5,150,105,.2)}.add-to-cart[data-v-14e82616]{transition:all .3s ease}.add-to-cart[data-v-14e82616],.call-waiter-item[data-v-14e82616]{opacity:0;transform:translateX(20px)}.call-waiter-item[data-v-14e82616]{transition:all .3s ease .1s}.menu-item:hover .add-to-cart[data-v-14e82616],.menu-item:hover .call-waiter-item[data-v-14e82616]{opacity:1;transform:translateX(0)}.action-buttons[data-v-14e82616]{display:flex;flex-wrap:wrap;gap:.75rem}.cart-btn[data-v-14e82616],.waiter-btn[data-v-14e82616]{align-items:center;border:none;border-radius:50px;cursor:pointer;display:flex;font-size:.9rem;font-weight:700;gap:.5rem;padding:.75rem 1.5rem;transition:all .3s ease}.cart-btn[data-v-14e82616]{background:linear-gradient(135deg,#6366f1,#8b5cf6);box-shadow:0 4px 15px rgba(99,102,241,.3);color:#fff}.cart-btn[data-v-14e82616]:hover{box-shadow:0 6px 20px rgba(99,102,241,.4);transform:translateY(-2px)}.waiter-btn[data-v-14e82616]{background:linear-gradient(135deg,#f59e0b,#f97316);box-shadow:0 4px 15px rgba(245,158,11,.3);color:#fff}.waiter-btn[data-v-14e82616]:hover:not(:disabled){box-shadow:0 6px 20px rgba(245,158,11,.4);transform:translateY(-2px)}.waiter-btn[data-v-14e82616]:disabled{cursor:not-allowed;opacity:.6}.cart-icon[data-v-14e82616],.waiter-icon[data-v-14e82616]{font-size:1.1rem}.rating[data-v-14e82616]{align-items:center;display:flex;gap:.5rem}.stars[data-v-14e82616]{color:#fbbf24;font-size:.9rem}.rating-count[data-v-14e82616]{color:#6b7280;font-size:.8rem}.empty-state[data-v-14e82616]{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.95);border-radius:24px;padding:4rem 2rem;text-align:center}.empty-icon[data-v-14e82616]{animation:float-14e82616 3s ease-in-out infinite;font-size:4rem;margin-bottom:1rem}@keyframes float-14e82616{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.empty-content h2[data-v-14e82616]{color:#1f2937;margin-bottom:.5rem}.empty-content p[data-v-14e82616]{color:#6b7280;margin-bottom:2rem}.loading-dots[data-v-14e82616]{display:flex;gap:.5rem;justify-content:center}.loading-dots span[data-v-14e82616]{animation:dotBounce-14e82616 1.4s ease-in-out infinite;background:#6366f1;border-radius:50%;height:8px;width:8px}.loading-dots span[data-v-14e82616]:first-child{animation-delay:-.32s}.loading-dots span[data-v-14e82616]:nth-child(2){animation-delay:-.16s}@keyframes dotBounce-14e82616{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.table-dialog-overlay[data-v-14e82616]{align-items:center;animation:fadeIn-14e82616 .3s ease;backdrop-filter:blur(8px);background:rgba(0,0,0,.8);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:2000}.table-dialog[data-v-14e82616]{animation:dialogSlide-14e82616 .4s cubic-bezier(.175,.885,.32,1.275);backdrop-filter:blur(20px);background:hsla(0,0%,100%,.98);border-radius:24px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:80vh;max-width:600px;overflow:hidden;width:90%}@keyframes dialogSlide-14e82616{0%{opacity:0;transform:scale(.8) translateY(60px)}to{opacity:1;transform:scale(1) translateY(0)}}.dialog-header[data-v-14e82616]{align-items:center;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-bottom:1px solid rgba(0,0,0,.1);color:#fff;display:flex;justify-content:space-between;overflow:hidden;padding:2.5rem 2rem 1.5rem;position:relative}.dialog-header[data-v-14e82616]:before{animation:headerShimmer-14e82616 4s infinite;background:linear-gradient(45deg,transparent 30%,hsla(0,0%,100%,.1) 50%,transparent 70%);bottom:0;content:\"\";left:0;position:absolute;right:0;top:0}@keyframes headerShimmer-14e82616{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}.header-content[data-v-14e82616]{flex:1;text-align:center;z-index:2}.header-icons[data-v-14e82616]{display:flex;gap:1rem;justify-content:center;margin-bottom:1rem}.table-icon[data-v-14e82616]{animation:bounce-14e82616 2s infinite;filter:drop-shadow(0 4px 8px rgba(0,0,0,.3));font-size:2.5rem}.sparkle-icon[data-v-14e82616]{animation:sparkle-14e82616 2s ease-in-out infinite;animation-delay:.5s;font-size:1.8rem}@keyframes sparkle-14e82616{0%,to{opacity:.8;transform:scale(1) rotate(0deg)}50%{opacity:1;transform:scale(1.3) rotate(180deg)}}.header-title[data-v-14e82616]{animation:titleGlow-14e82616 3s ease-in-out infinite;display:flex;flex-direction:column;font-size:1.8rem;font-weight:700;gap:.5rem;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.3)}@keyframes titleGlow-14e82616{0%,to{text-shadow:2px 2px 4px rgba(0,0,0,.3)}50%{text-shadow:2px 2px 20px hsla(0,0%,100%,.4),0 0 30px hsla(0,0%,100%,.2)}}.greeting[data-v-14e82616]{animation:fadeInSlide-14e82616 1s ease-out;font-size:1.2rem;font-weight:400;opacity:.9}.highlight[data-v-14e82616]{background:linear-gradient(45deg,#fff,#fbbf24,#fff);-webkit-background-clip:text;background-size:200% 200%;font-size:2.2rem;font-weight:900;-webkit-text-fill-color:transparent;animation:gradientShift-14e82616 3s infinite,popIn-14e82616 1s ease-out .3s both;background-clip:text;letter-spacing:2px;text-transform:uppercase}@keyframes gradientShift-14e82616{0%,to{background-position:0 50%}50%{background-position:100% 50%}}@keyframes popIn-14e82616{0%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.please[data-v-14e82616]{animation:fadeInSlide-14e82616 1s ease-out .6s both;font-size:1.1rem;font-style:italic;font-weight:300;opacity:.95}@keyframes fadeInSlide-14e82616{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.header-subtitle[data-v-14e82616]{animation:fadeInSlide-14e82616 1s ease-out .9s both;font-size:1rem;font-weight:400;margin:1rem 0 0;opacity:.9;text-shadow:1px 1px 2px rgba(0,0,0,.3)}.dialog-close[data-v-14e82616]{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.2);border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:1.5rem;height:40px;transition:all .3s ease;width:40px}.dialog-close[data-v-14e82616]:hover{background:hsla(0,0%,100%,.3);transform:scale(1.1)}.dialog-content[data-v-14e82616]{max-height:60vh;overflow-y:auto;padding:2rem}.dialog-subtitle[data-v-14e82616]{color:#6b7280;font-size:1.1rem;line-height:1.5;margin-bottom:2rem;text-align:center}.tables-grid[data-v-14e82616]{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));grid-gap:1rem;gap:1rem;margin-bottom:2rem}.table-card[data-v-14e82616]{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.8);border:2px solid transparent;border-radius:16px;box-shadow:0 4px 15px rgba(0,0,0,.1);cursor:pointer;overflow:hidden;padding:1.5rem 1rem;position:relative;text-align:center;transition:all .3s ease}.table-card[data-v-14e82616]:before{background:linear-gradient(135deg,rgba(99,102,241,.1),rgba(139,92,246,.1));bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity .3s ease}.table-card[data-v-14e82616]:hover:before{opacity:1}.table-card[data-v-14e82616]:hover{border-color:rgba(99,102,241,.3);box-shadow:0 8px 25px rgba(0,0,0,.15);transform:translateY(-4px) scale(1.02)}.table-card.selected[data-v-14e82616]{background:linear-gradient(135deg,rgba(99,102,241,.1),rgba(139,92,246,.1));border-color:#6366f1;box-shadow:0 8px 25px rgba(99,102,241,.3);transform:scale(1.05)}.table-card.selected[data-v-14e82616]:before{opacity:1}.table-number[data-v-14e82616]{color:#1f2937;font-size:1.3rem;font-weight:700;margin-bottom:.5rem}.table-card.selected .table-number[data-v-14e82616]{color:#6366f1}.table-name[data-v-14e82616]{color:#4b5563;font-size:.95rem;font-weight:500;margin-bottom:.25rem}.table-zone[data-v-14e82616]{color:#9ca3af;font-size:.8rem;margin-bottom:.5rem}.table-icon-small[data-v-14e82616]{font-size:1.5rem;opacity:.6;transition:all .3s ease}.table-card.selected .table-icon-small[data-v-14e82616],.table-card:hover .table-icon-small[data-v-14e82616]{opacity:1;transform:scale(1.2)}.dialog-actions[data-v-14e82616]{align-items:center;display:flex;gap:1rem;justify-content:flex-end;margin-top:2rem}.cancel-btn[data-v-14e82616],.confirm-btn[data-v-14e82616]{align-items:center;border:none;border-radius:50px;cursor:pointer;display:flex;font-size:1rem;font-weight:700;gap:.5rem;padding:.875rem 2rem;transition:all .3s ease}.cancel-btn[data-v-14e82616]{background:hsla(220,9%,46%,.1);border:2px solid hsla(220,9%,46%,.2);color:#6b7280}.cancel-btn[data-v-14e82616]:hover{background:hsla(220,9%,46%,.2);transform:translateY(-2px)}.confirm-btn[data-v-14e82616]{background:linear-gradient(135deg,#10b981,#059669);box-shadow:0 4px 15px rgba(16,185,129,.3);color:#fff}.confirm-btn[data-v-14e82616]:hover:not(.disabled){box-shadow:0 6px 20px rgba(16,185,129,.4);transform:translateY(-2px)}.confirm-btn.disabled[data-v-14e82616]{box-shadow:0 4px 15px rgba(16,185,129,.2);cursor:not-allowed;opacity:.5;transform:none}.btn-icon[data-v-14e82616]{animation:ringBell-14e82616 2s infinite;font-size:1.1rem}@keyframes ringBell-14e82616{0%,90%,to{transform:rotate(0deg)}15%,5%{transform:rotate(15deg)}10%{transform:rotate(-15deg)}}.image-modal[data-v-14e82616]{align-items:center;animation:fadeIn-14e82616 .3s ease;background:rgba(0,0,0,.9);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}@keyframes fadeIn-14e82616{0%{opacity:0}to{opacity:1}}.modal-content[data-v-14e82616]{animation:zoomIn-14e82616 .3s ease;max-height:90%;max-width:90%;position:relative}@keyframes zoomIn-14e82616{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.close-btn[data-v-14e82616]{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.2);border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:1.5rem;height:40px;position:absolute;right:-10px;top:-50px;transition:all .3s ease;width:40px}.close-btn[data-v-14e82616]:hover{background:hsla(0,0%,100%,.3);transform:scale(1.1)}.modal-image[data-v-14e82616]{border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.5);max-height:100%;max-width:100%}.fab-container[data-v-14e82616]{bottom:2rem;display:flex;flex-direction:column;gap:1rem;position:fixed;right:2rem;z-index:100}.fab[data-v-14e82616]{border:none;border-radius:50%;box-shadow:0 8px 25px rgba(0,0,0,.2);color:#fff;cursor:pointer;font-size:1.5rem;height:60px;transition:all .3s ease;width:60px}.scroll-fab[data-v-14e82616]{background:linear-gradient(135deg,#6366f1,#8b5cf6);box-shadow:0 8px 25px rgba(99,102,241,.3)}.scroll-fab[data-v-14e82616]:hover{box-shadow:0 12px 35px rgba(99,102,241,.4);transform:translateY(-5px) scale(1.1)}.call-waiter-fab[data-v-14e82616]{background:linear-gradient(135deg,#10b981,#059669);box-shadow:0 8px 25px rgba(16,185,129,.3);overflow:hidden;position:relative}.call-waiter-fab[data-v-14e82616]:hover:not(.calling){box-shadow:0 12px 35px rgba(16,185,129,.4);transform:translateY(-5px) scale(1.1)}.call-waiter-fab.calling[data-v-14e82616]{animation:waiterPulse-14e82616 1s infinite;background:linear-gradient(135deg,#f59e0b,#f97316)}.calling-icon[data-v-14e82616]{animation:phoneRing-14e82616 .5s infinite}@keyframes waiterPulse-14e82616{0%,to{box-shadow:0 8px 25px rgba(245,158,11,.3);transform:scale(1)}50%{box-shadow:0 12px 35px rgba(245,158,11,.5);transform:scale(1.1)}}@keyframes phoneRing-14e82616{0%,to{transform:rotate(0deg)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}}.notification[data-v-14e82616]{animation:notificationSlide-14e82616 .3s ease;backdrop-filter:blur(10px);background:hsla(0,0%,100%,.95);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.1);max-width:400px;position:fixed;right:2rem;top:2rem;z-index:2000}.notification-success[data-v-14e82616]{border-left:4px solid #10b981}.notification-info[data-v-14e82616]{border-left:4px solid #3b82f6}.notification-content[data-v-14e82616]{align-items:center;display:flex;gap:1rem;justify-content:space-between;padding:1rem 1.5rem}.notification-close[data-v-14e82616]{align-items:center;background:none;border:none;border-radius:50%;color:#6b7280;cursor:pointer;display:flex;font-size:1.2rem;height:24px;justify-content:center;transition:all .2s ease;width:24px}.notification-close[data-v-14e82616]:hover{background:rgba(0,0,0,.1);color:#374151}@keyframes notificationSlide-14e82616{0%{opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}@media (max-width:768px){.hero-title[data-v-14e82616]{font-size:2rem}.menu-grid[data-v-14e82616]{grid-template-columns:1fr}.menu-item.featured[data-v-14e82616]{grid-column:span 1}.stats-bar[data-v-14e82616]{flex-wrap:wrap;gap:1rem}.price-section[data-v-14e82616]{align-items:flex-start;flex-direction:column;gap:1rem}.add-to-cart[data-v-14e82616],.call-waiter-item[data-v-14e82616]{opacity:1;transform:translateX(0)}.table-dialog[data-v-14e82616]{margin:1rem;width:95%}.dialog-header[data-v-14e82616]{padding:2rem 1.5rem 1.5rem}.header-title[data-v-14e82616]{font-size:1.5rem}.highlight[data-v-14e82616]{font-size:1.8rem}.header-icons[data-v-14e82616]{margin-bottom:.5rem}.table-icon[data-v-14e82616]{font-size:2rem}.dialog-content[data-v-14e82616]{padding:1.5rem}.tables-grid[data-v-14e82616]{gap:.75rem;grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.table-card[data-v-14e82616]{padding:1rem .75rem}.dialog-actions[data-v-14e82616]{flex-direction:column;gap:.75rem}.cancel-btn[data-v-14e82616],.confirm-btn[data-v-14e82616]{justify-content:center;padding:1rem 2rem;width:100%}.notification[data-v-14e82616]{left:1rem;max-width:none;right:1rem;top:1rem}}@media (max-width:480px){.menu-container[data-v-14e82616]{padding:1rem .5rem}.hero-section[data-v-14e82616],.image-container[data-v-14e82616]{height:200px}.fab-container[data-v-14e82616]{bottom:1rem;right:1rem}.fab[data-v-14e82616]{font-size:1.2rem;height:50px;width:50px}.action-buttons[data-v-14e82616]{justify-content:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map