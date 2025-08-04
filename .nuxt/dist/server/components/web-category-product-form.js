exports.ids = [114];
exports.modules = {

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(376);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebCategoryProductForm.vue?vue&type=template&id=06910bf6&















var WebCategoryProductFormvue_type_template_id_06910bf6_render = function render() {
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
  }, [_vm._v("mdi-label")]), _vm._v("\n                " + _vm._s(`ກຸ່ມສິນຄ້າຫນ້າເວັບ: ${_vm.category.name} `) + "\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "pro_name",
      "item-value": "id",
      "items": _vm.productList,
      "label": "ສິນຄ້າ*"
    },
    model: {
      value: _vm.selectProductId,
      callback: function ($$v) {
        _vm.selectProductId = $$v;
      },
      expression: "selectProductId"
    }
  })], 1), _vm._v(" "), _c('div', [_c(VRow["a" /* default */], {
    attrs: {
      "justify": "center",
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "size": "large",
      "variant": "outlined",
      "rounded": ""
    },
    on: {
      "click": _vm.addProductToGroup
    }
  }, [_c('span', {
    staticClass: "mdi mdi-note-plus-outline"
  }), _vm._v("\n                            ເພີ່ມສິນຄ້າເຂົ້າກຸ່ມ\n                        ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDivider["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "mx-2"
  }, [_vm._v("ສິນຄ້າ ທີ່ເລືອກ")]), _vm._v(" "), _c(VDivider["a" /* default */])], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, _vm._l(_vm.localCategory.products, function (product) {
    return _c(VChip["a" /* default */], {
      key: product.id,
      staticClass: "ma-2",
      attrs: {
        "color": "warning",
        "variant": "outlined"
      },
      on: {
        "click": function ($event) {
          return _vm.removeProductFromGroup(product);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(product.id) + " - " + _vm._s(product.pro_name) + "\n                    ")]);
  }), 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/WebCategoryProductForm.vue?vue&type=template&id=06910bf6&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebCategoryProductForm.vue?vue&type=script&lang=js&

/* harmony default export */ var WebCategoryProductFormvue_type_script_lang_js_ = ({
  props: {
    category: {
      type: Object,
      require: true
    },
    isCreate: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      productList: [],
      selectProductId: null,
      localCategory: this.category,
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  // mounted() {
  //     this.loadEntry();
  // },
  async created() {
    // this.
    this.loadEntry();
  },
  methods: {
    async commitRecord() {
      if (!this.isloading) {
        this.isloading = true;
        let api = this.isCreate ? 'api/webproductgroup/create' : `api/webproductgroup/update/${this.localCategory.id}`;
        if (this.isCreate) {
          await this.$axios.post(api, this.localCategory).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
          console.log(`update category product`);
          this.localCategory.productList = this.localCategory.products;
          await this.$axios.put(api, this.localCategory).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        }
        this.isloading = false;
      }
    },
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    addProductToGroup() {
      console.log(`Add product to group handler`);
      if (!this.selectProductId) return;
      const newGroup = this.productList.find(el => el.id == this.selectProductId);
      console.log(`Authority ${newGroup.id}`);
      if (this.localCategory.products.length == 0) {
        console.log(`TEHERE IS NO TERMINAL`);
        this.localCategory.products.push(newGroup);
      } else if (this.localCategory.products == 'undefined') {
        this.localCategory.products.push(newGroup);
      } else {
        const group = this.localCategory.products.find(el => el.id == this.selectProductId);
        console.log(`ADD TERMINAL ${group}`);
        if (!group) this.localCategory.products.push(newGroup);
      }
    },
    removeProductFromGroup(group) {
      console.log(`Remove product to group handler`);
      const idx = this.localCategory.products.indexOf(group);
      this.localCategory.products.splice(idx, 1);
    },
    async loadEntry() {
      console.log(`===> Update form record load`);
      await this.$axios.get(`api/product/find`).then(response => {
        this.productList = response.data;
        this.selectProductId = this.productList[0]['id'];
      }).catch(error => {
        console.log("Cannot fetch data " + error);
      });
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    // Add any necessary computed properties here
  }
});
// CONCATENATED MODULE: ./components/WebCategoryProductForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WebCategoryProductFormvue_type_script_lang_js_ = (WebCategoryProductFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/WebCategoryProductForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WebCategoryProductFormvue_type_script_lang_js_,
  WebCategoryProductFormvue_type_template_id_06910bf6_render,
  staticRenderFns,
  false,
  null,
  null,
  "6b4a6814"
  
)

/* harmony default export */ var WebCategoryProductForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=web-category-product-form.js.map