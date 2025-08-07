exports.ids = [28];
exports.modules = {

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(387);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/campaignCard.vue?vue&type=template&id=4ffc897b&





var campaignCardvue_type_template_id_4ffc897b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("\n            Campaign\n        ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm.campaignList ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.campaignList
    }
  }) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/card/campaignCard.vue?vue&type=template&id=4ffc897b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/campaignCard.vue?vue&type=script&lang=js&
/* harmony default export */ var campaignCardvue_type_script_lang_js_ = ({
  data() {
    return {
      campaignList: [],
      search: '',
      headers: [{
        text: 'ຊື່ Campaign',
        align: 'center',
        value: 'title',
        sortable: true
      }, {
        text: 'ສິນຄ້າ',
        align: 'center',
        value: 'pro_name'
      }, {
        text: 'ວັນທີເລີ່ມ',
        align: 'center',
        value: 'start'
      }, {
        text: 'ວັນທີສິ້ນສຸດ',
        align: 'center',
        value: 'end'
      }, {
        text: 'ເຂົ້າເຖິງ',
        align: 'center',
        value: 'reach'
      }, {
        text: 'ຄອມເມັ້ນ',
        align: 'center',
        value: 'comments'
      }, {
        text: 'Result',
        align: 'center',
        value: 'results'
      }, {
        text: 'ປິດການຂາຍ',
        align: 'center',
        value: 'closed'
      }, {
        text: 'ຍອດທີ່ຈ່າຍໄປ',
        align: 'center',
        value: 'budgetSpend'
      }]
    };
  },
  async mounted() {
    await this.loadCampaignData();
  },
  methods: {
    async loadCampaignData() {
      this.isloading = true;
      await this.$axios.get("/api/campaign/find_summary").then(response => {
        this.campaignList = response.data.rows.map(el => {
          return el;
        });
        for (const iterator of this.campaignList) {
          iterator.start = iterator.start.split('T')[0];
          iterator.end = iterator.end.split('T')[0];
        }
        this.headers.length = 0;
        // for (const iterator of response.data.fieldList) {
        //     this.headers.push(
        //         {
        //             text: iterator,
        //             align: 'end',
        //             value: iterator,
        //             sortable: true,
        //         },
        //     )
        // }
      }).catch(error => {
        console.log("Error ", error);
      });
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/card/campaignCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_campaignCardvue_type_script_lang_js_ = (campaignCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/card/campaignCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_campaignCardvue_type_script_lang_js_,
  campaignCardvue_type_template_id_4ffc897b_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "32ddc7bc"
  
)

/* harmony default export */ var campaignCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=card-campaign-card.js.map