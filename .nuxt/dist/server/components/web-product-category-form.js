exports.ids = [137];
exports.modules = {

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebProductCategoryForm.vue?vue&type=template&id=52a61343&















var WebProductCategoryFormvue_type_template_id_52a61343_render = function render() {
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
  }, [_vm._v("mdi-label")]), _vm._v("\n                " + _vm._s(`ສິນຄ້າ: ${_vm.product.pro_name} ລາຄາ: ${_vm.formatNumber(_vm.product.pro_price)}`) + "\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.categoryList,
      "label": "ໝວດສິນຄ້າຫນ້າເວັບ*"
    },
    model: {
      value: _vm.selectCategoryId,
      callback: function ($$v) {
        _vm.selectCategoryId = $$v;
      },
      expression: "selectCategoryId"
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
  }), _vm._v("\n                            ເພີ່ມກຸ່ມ\n                        ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDivider["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "mx-2"
  }, [_vm._v("ກຸ່ມສິນຄ້າຫນ້າເວັບ ທີ່ເລືອກ")]), _vm._v(" "), _c(VDivider["a" /* default */])], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, _vm._l(_vm.localProduct.webProductGroups, function (group) {
    return _c(VChip["a" /* default */], {
      key: group.id,
      staticClass: "ma-2",
      attrs: {
        "color": "warning",
        "variant": "outlined"
      },
      on: {
        "click": function ($event) {
          return _vm.removeProductFromGroup(group);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(group.id) + " - " + _vm._s(group.name) + "\n                    ")]);
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

// CONCATENATED MODULE: ./components/WebProductCategoryForm.vue?vue&type=template&id=52a61343&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WebProductCategoryForm.vue?vue&type=script&lang=js&

/* harmony default export */ var WebProductCategoryFormvue_type_script_lang_js_ = ({
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      categoryList: [],
      selectCategoryId: null,
      localProduct: this.product,
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
      if (this.$refs.form.validate() && !this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = this.isCreate ? 'api/webproductgroup/create' : `api/webproductgroup/product_set_groups/${this.product.id}`;
        console.log("API => ", api);
        if (this.isCreate) {
          await this.$axios.post(api, this.localProduct).then(response => {
            this.refreshData();
            this.$emit('close-dialog');
            return Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
          }).catch(error => {
            console.log("Error: ", error);
            return Object(common["j" /* swalError2 */])(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
          });
        } else {
          this.localProduct.groupList = this.localProduct.webProductGroups;
          await this.$axios.put(api, this.localProduct).then(response => {
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
      if (!this.selectCategoryId) return;
      const newGroup = this.categoryList.find(el => el.id == this.selectCategoryId);
      console.log(`Authority ${newGroup.id}`);
      if (this.localProduct.webProductGroups.length == 0) {
        console.log(`TEHERE IS NO TERMINAL`);
        this.localProduct.webProductGroups.push(newGroup);
      } else if (this.localProduct.webProductGroups == 'undefined') {
        this.localProduct.webProductGroups.push(newGroup);
      } else {
        const group = this.localProduct.webProductGroups.find(el => el.id == this.selectCategoryId);
        console.log(`ADD TERMINAL ${group}`);
        if (!group) this.localProduct.webProductGroups.push(newGroup);
      }
    },
    removeProductFromGroup(group) {
      console.log(`Remove product to group handler`);
      const idx = this.localProduct.webProductGroups.indexOf(group);
      this.localProduct.webProductGroups.splice(idx, 1);
    },
    async loadEntry() {
      console.log(`===> Update form record load`);
      await this.$axios.get(`api/webproductgroup/find`).then(response => {
        this.categoryList = response.data;
        this.selectCategoryId = this.categoryList[0]['id'];
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
// CONCATENATED MODULE: ./components/WebProductCategoryForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WebProductCategoryFormvue_type_script_lang_js_ = (WebProductCategoryFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/WebProductCategoryForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WebProductCategoryFormvue_type_script_lang_js_,
  WebProductCategoryFormvue_type_template_id_52a61343_render,
  staticRenderFns,
  false,
  null,
  null,
  "46a78d10"
  
)

/* harmony default export */ var WebProductCategoryForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ })

};;
//# sourceMappingURL=web-product-category-form.js.map