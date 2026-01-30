exports.ids = [72];
exports.modules = {

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(436);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(434);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(411);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(433);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(435);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(475);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(143);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/job_batch/index.vue?vue&type=template&id=490a57d4&scoped=true



















var job_batchvue_type_template_id_490a57d4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "value": _vm.value,
      "fullscreen": "",
      "persistent": "",
      "scrollable": ""
    },
    on: {
      "input": function ($event) {
        return _vm.$emit('input', $event);
      }
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "maintenance-dialog"
  }, [_c(VToolbar["a" /* default */], {
    attrs: {
      "color": "primary",
      "dark": "",
      "flat": "",
      "dense": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v(_vm._s(_vm.isEdit ? 'mdi-pencil' : 'mdi-plus'))]), _vm._v(" "), _c(components_VToolbar["b" /* VToolbarTitle */], {
    staticClass: "text-subtitle-1"
  }, [_vm._v("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂ Job Batch' : 'ເພີ່ມ Job Batch') + "\n      ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "small": "",
      "disabled": _vm.saving
    },
    on: {
      "click": _vm.handleCancel
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "dialog-content pa-0"
  }, [_c(VContainer["a" /* default */], {
    staticClass: "form-container",
    attrs: {
      "fluid": ""
    }
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.formValid,
      callback: function ($$v) {
        _vm.formValid = $$v;
      },
      expression: "formValid"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "pb-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _c('span', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ (Basic Information)")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.mouOptions,
      "loading": _vm.loadingMous,
      "label": "ເລືອກລະຫັດ Job / MOU*",
      "rules": _vm.rules.mouId,
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "item-text": "jobCode",
      "item-value": "id",
      "clearable": ""
    },
    on: {
      "change": _vm.onMouChange
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "small": "",
            "color": "primary"
          }
        }, [_vm._v("mdi-file-document-outline")]), _vm._v(" "), _c('div', [_c('span', {
          staticClass: "text-body-2"
        }, [_vm._v(_vm._s(item.jobCode))]), _vm._v(" "), _c('span', {
          staticClass: "text-caption grey--text ml-2"
        }, [_vm._v(_vm._s(item.mouNumber))])])], 1)];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center py-1 flex-grow-1"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "small": "",
            "color": "primary"
          }
        }, [_vm._v("mdi-file-document-outline")]), _vm._v(" "), _c('div', {
          staticClass: "flex-grow-1"
        }, [_c('div', {
          staticClass: "text-body-2"
        }, [_vm._v(_vm._s(item.jobCode))]), _vm._v(" "), _c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("\n                        " + _vm._s(item.jobTitle) + " • " + _vm._s(item.employerCompany) + "\n                      ")])]), _vm._v(" "), _c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": _vm.getMouStatusColor(item.status)
          }
        }, [_vm._v(_vm._s(item.status))])], 1)];
      }
    }, {
      key: "no-data",
      fn: function () {
        return [_c('div', {
          staticClass: "pa-2 text-center"
        }, [_c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("No MOUs found")]), _vm._v(" "), _c(VBtn["a" /* default */], {
          attrs: {
            "x-small": "",
            "text": "",
            "color": "primary"
          },
          on: {
            "click": _vm.fetchMous
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "x-small": "",
            "left": ""
          }
        }, [_vm._v("mdi-refresh")]), _vm._v("Refresh\n                    ")], 1)], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.formData.mouId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "mouId", $$v);
      },
      expression: "formData.mouId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຮອບການຈັດສົ່ງ",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "disabled": "",
      "placeholder": _vm.isEdit ? _vm.formData.runningNo : _vm.nextRunningNo || 'ເລືອກ MOU ກ່ອນ',
      "loading": _vm.loadingRunningNo
    },
    scopedSlots: _vm._u([{
      key: "append",
      fn: function () {
        return [_vm.nextRunningNo && !_vm.isEdit ? _c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "success"
          }
        }, [_vm._v("\n                    mdi-check-circle\n                  ")]) : _vm._e()];
      },
      proxy: true
    }]),
    model: {
      value: _vm.formData.runningNo,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "runningNo", $$v);
      },
      expression: "formData.runningNo"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຈຳນວນເປີດຮັບສະໝັກ",
      "type": "number",
      "rules": _vm.rules.totalPositions,
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-account-multiple"
    },
    model: {
      value: _vm.formData.totalPositions,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "totalPositions", _vm._n($$v));
      },
      expression: "formData.totalPositions"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ມູນຄ່າແບັດຈັອບ",
      "type": "number",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-cash"
    },
    model: {
      value: _vm.formData.principalAmount,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "principalAmount", _vm._n($$v));
      },
      expression: "formData.principalAmount"
    }
  })], 1), _vm._v(" "), _vm.selectedMou ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "mou-summary-card"
  }, [_c('div', {
    staticClass: "summary-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "white"
    }
  }, [_vm._v("mdi-file-document-outline")]), _vm._v(" "), _c('span', [_vm._v("ຂໍ້ມູນ MOU ທີ່ເລືອກ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "x-small": "",
      "color": _vm.getMouStatusColor(_vm.selectedMou.status),
      "dark": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.selectedMou.status) + "\n                  ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "summary-content"
  }, [_c('div', {
    staticClass: "summary-row"
  }, [_c('strong', [_vm._v("Job Code:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedMou.jobCode))])]), _vm._v(" "), _c('div', {
    staticClass: "summary-row"
  }, [_c('strong', [_vm._v("MOU Number:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedMou.mouNumber || '-'))])]), _vm._v(" "), _vm.selectedMou.agency ? _c('div', {
    staticClass: "summary-row"
  }, [_c('strong', [_vm._v("Agency:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedMou.agency.agencyName))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "summary-row"
  }, [_c('strong', [_vm._v("ບໍລິສັດນາຍຈ່າງ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedMou.employerCompany || '-'))])]), _vm._v(" "), _c('div', {
    staticClass: "summary-row"
  }, [_c('strong', [_vm._v("ສະຖານທີ່ເຮັດວຽກ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedMou.workLocation || '-'))])]), _vm._v(" "), _c('div', {
    staticClass: "summary-row"
  }, [_c('strong', [_vm._v("ໜ້າວຽກ:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedMou.jobTitle || '-'))])])])])]) : _vm._e()], 1), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-4"
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "3",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "ສະຖານະງານ *",
      "rules": _vm.rules.status,
      "outlined": "",
      "dense": "",
      "hide-details": "auto"
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": _vm.getStatusColor(item.value)
          }
        }, [_vm._v(_vm._s(item.text))])];
      }
    }]),
    model: {
      value: _vm.formData.status,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "status", $$v);
      },
      expression: "formData.status"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "date-field-wrapper"
  }, [_c('label', {
    staticClass: "date-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-calendar")]), _vm._v("\n                  ກຳນົດເວລາສັນຫາ\n                ")], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.batchStartDate,
      expression: "formData.batchStartDate"
    }],
    staticClass: "date-input",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.formData.batchStartDate
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "batchStartDate", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "date-field-wrapper"
  }, [_c('label', {
    staticClass: "date-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-calendar")]), _vm._v("\n                  ກຳນົດເວລາຈັດສົ່ງແຮງງານ\n                ")], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.batchEndDate,
      expression: "formData.batchEndDate"
    }],
    staticClass: "date-input",
    attrs: {
      "type": "date",
      "min": _vm.formData.batchStartDate
    },
    domProps: {
      "value": _vm.formData.batchEndDate
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "batchEndDate", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "date-field-wrapper"
  }, [_c('label', {
    staticClass: "date-label"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-calendar-export")]), _vm._v("\n                  ວັນທີ່ສົ່ງແຮງງານ\n                ")], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.batchDeliveryDate,
      expression: "formData.batchDeliveryDate"
    }],
    staticClass: "date-input",
    attrs: {
      "type": "date",
      "min": _vm.formData.batchEndDate || _vm.formData.batchStartDate
    },
    domProps: {
      "value": _vm.formData.batchDeliveryDate
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "batchDeliveryDate", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "9"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຂໍ້ມູນເພີ່ມເຕີມ",
      "outlined": "",
      "dense": "",
      "rows": "2",
      "hide-details": "auto",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.notes,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "notes", $$v);
      },
      expression: "formData.notes"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4",
      "md": "4"
    }
  }, [_c('label', [_c('i', {
    staticClass: "fas fa-building"
  }), _vm._v(" ຜູ້ຮັບຜິດຊອບ")]), _vm._v(" "), _c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.agencies.filter(agency => agency.agencyType === 'Employee'),
      "item-text": "agencyName",
      "item-value": "id",
      "label": "ພະນັກງານ",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-domain",
      "loading": _vm.loadingAgencies,
      "clearable": ""
    },
    model: {
      value: _vm.formData.agencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "agencyId", $$v);
      },
      expression: "formData.agencyId"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-3"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "disabled": _vm.saving
    },
    on: {
      "click": _vm.handleCancel
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.formValid,
      "loading": _vm.saving
    },
    on: {
      "click": _vm.handleSave
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n        " + _vm._s(_vm.isEdit ? 'Update' : 'Create') + "\n      ")], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/job_fair/job_batch/index.vue?vue&type=template&id=490a57d4&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/job_batch/index.vue?vue&type=script&lang=js
/* harmony default export */ var job_batchvue_type_script_lang_js = ({
  name: 'JobBatchDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    batch: {
      type: Object,
      default: null
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loadingAgencies: false,
      agencies: [],
      nextRunningNo: null,
      loadingRunningNo: false,
      formValid: false,
      saving: false,
      loadingMous: false,
      startDateMenu: false,
      endDateMenu: false,
      mouOptions: [],
      selectedMou: null,
      deliveryDateMenu: false,
      // Add this with other menu flags
      formData: {
        mouId: null,
        runningNo: '',
        batchName: '_',
        totalPositions: 0,
        principalAmount: 0,
        batchStartDate: null,
        batchEndDate: null,
        batchDeliveryDate: null,
        // Add this
        status: 'draft',
        notes: '',
        inchargePerson: '',
        agencyId: null
      },
      rules: {
        mouId: [v => !!v || 'MOU selection is required'],
        status: [v => !!v || 'Status is required'],
        totalPositions: [v => v >= 0 || 'Must be 0 or greater']
      },
      statusOptions: [{
        text: 'ລໍຖ້າ',
        value: 'draft'
      }, {
        text: 'ດຳເນີນງານ',
        value: 'active'
      }, {
        text: 'ສຳເລັດ',
        value: 'complted'
      }, {
        text: 'ຊຳລະແລ້ວ',
        value: 'settled'
      }, {
        text: 'ເດີນທາງແລ້ວ',
        value: 'submit'
      }]
    };
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.fetchMous();
        this.initializeForm();
      } else {
        this.resetForm();
      }
    },
    batch: {
      handler() {
        if (this.value) this.initializeForm();
      },
      deep: true
    }
  },
  methods: {
    async fetchAgencies() {
      this.loadingAgencies = true;
      try {
        const response = await this.$axios.$get('/api/agency');
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies;
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data;
        }
      } catch (error) {
        console.error('Error fetching agencies:', error);
        this.$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ');
      } finally {
        this.loadingAgencies = false;
      }
    },
    async fetchMous() {
      this.loadingMous = true;
      try {
        const response = await this.$axios.get('/api/mous', {
          params: {
            status: 'open',
            limit: 100
          }
        });
        this.mouOptions = response.data.data.mous || response.data.data || [];
      } catch (error) {
        console.error('Error fetching MOUs:', error);
        this.$toast.error('Failed to fetch MOUs');
        this.mouOptions = [];
      } finally {
        this.loadingMous = false;
      }
    },
    async fetchNextRunningNo(mouId) {
      if (!mouId || this.isEdit) return;
      this.loadingRunningNo = true;
      try {
        const response = await this.$axios.get(`/api/batch-job/next-running-no/${mouId}`);
        if (response.data.success) {
          this.nextRunningNo = response.data.data.nextRunningNo;
          // Optionally update formData to show in the field
          this.formData.runningNo = this.nextRunningNo;
        }
      } catch (error) {
        console.error('Error fetching next running number:', error);
        this.nextRunningNo = null;
        this.formData.runningNo = '';
      } finally {
        this.loadingRunningNo = false;
      }
    },
    onMouChange(mouId) {
      this.selectedMou = this.mouOptions.find(mou => mou.id === mouId) || null;

      // Fetch next running number when MOU changes (only for new batches)
      if (mouId && !this.isEdit) {
        this.fetchNextRunningNo(mouId);
      }
    },
    initializeForm() {
      this.fetchAgencies();
      if (this.isEdit && this.batch) {
        var _this$batch$batchStar, _this$batch$batchEndD, _this$batch$batchDeli;
        this.formData = {
          mouId: this.batch.mouId || null,
          batchName: this.batch.batchName || '',
          runningNo: this.batch.runningNo || '',
          totalPositions: this.batch.totalPositions || 0,
          principalAmount: this.batch.principalAmount || 0,
          // Extract date only (YYYY-MM-DD)
          batchStartDate: ((_this$batch$batchStar = this.batch.batchStartDate) === null || _this$batch$batchStar === void 0 ? void 0 : _this$batch$batchStar.split('T')[0]) || null,
          batchEndDate: ((_this$batch$batchEndD = this.batch.batchEndDate) === null || _this$batch$batchEndD === void 0 ? void 0 : _this$batch$batchEndD.split('T')[0]) || null,
          batchDeliveryDate: ((_this$batch$batchDeli = this.batch.batchDeliveryDate) === null || _this$batch$batchDeli === void 0 ? void 0 : _this$batch$batchDeli.split('T')[0]) || null,
          status: this.batch.status || 'draft',
          notes: this.batch.notes || '',
          inchargePerson: this.batch.inchargePerson || '',
          agencyId: this.batch.agencyId || null
        };
        if (this.batch.mou) {
          this.selectedMou = this.batch.mou;
        } else if (this.formData.mouId) {
          this.$nextTick(() => {
            this.selectedMou = this.mouOptions.find(mou => mou.id === this.formData.mouId) || null;
          });
        }
      } else {
        this.resetForm();
      }
      this.$nextTick(() => {
        if (this.$refs.form) this.$refs.form.resetValidation();
      });
    },
    resetForm() {
      this.formData = {
        mouId: null,
        batchName: '',
        runningNo: '',
        totalPositions: 0,
        principalAmount: 0,
        batchStartDate: null,
        batchEndDate: null,
        batchDeliveryDate: null,
        status: 'draft',
        notes: '',
        inchargePerson: '',
        agencyId: null
      };
      this.selectedMou = null;
      this.nextRunningNo = null;
      this.formValid = false;
    },
    async handleSave() {
      if (!this.$refs.form.validate()) return;
      this.saving = true;
      try {
        const endpoint = this.isEdit ? `/api/batch-job/${this.batch.id}` : '/api/batch-job';
        const method = this.isEdit ? 'put' : 'post';
        const response = await this.$axios[method](endpoint, this.formData);
        this.$toast.success(`Job batch ${this.isEdit ? 'updated' : 'created'} successfully`);
        this.$emit('saved', response.data.data);
        this.resetForm();
      } catch (error) {
        var _error$response, _error$response$data, _error$response2, _error$response2$data;
        console.error('Error saving job batch:', error);
        if ((_error$response = error.response) !== null && _error$response !== void 0 && (_error$response$data = _error$response.data) !== null && _error$response$data !== void 0 && _error$response$data.errors) {
          const errorMessages = error.response.data.errors.map(e => `${e.field}: ${e.message}`).join('\n');
          this.$toast.error(`Validation errors:\n${errorMessages}`);
        } else if ((_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2$data = _error$response2.data) !== null && _error$response2$data !== void 0 && _error$response2$data.message) {
          this.$toast.error(error.response.data.message);
        } else {
          this.$toast.error(`Failed to ${this.isEdit ? 'update' : 'create'} job batch`);
        }
      } finally {
        this.saving = false;
      }
    },
    handleCancel() {
      if (this.saving) return;
      this.resetForm();
      this.$emit('cancelled');
    },
    getStatusColor(status) {
      const colors = {
        draft: 'orange',
        active: 'green',
        completed: 'blue',
        cancelled: 'red',
        on_hold: 'grey'
      };
      return colors[status] || 'grey';
    },
    getMouStatusColor(status) {
      const colors = {
        draft: 'orange',
        active: 'green',
        expired: 'red',
        cancelled: 'grey'
      };
      return colors[status] || 'grey';
    }
  }
});
// CONCATENATED MODULE: ./components/job_fair/job_batch/index.vue?vue&type=script&lang=js
 /* harmony default export */ var job_fair_job_batchvue_type_script_lang_js = (job_batchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/job_fair/job_batch/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(779)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  job_fair_job_batchvue_type_script_lang_js,
  job_batchvue_type_template_id_490a57d4_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "490a57d4",
  "b60c2e76"
  
)

/* harmony default export */ var job_batch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(453);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }
  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _a;
        val ? this.calculateInputHeight() : (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
      });
    },
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },
    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },
  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },
    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },
    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },
    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }
      this.$emit('keydown', e);
    }
  }
}));

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(780);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("587dbc5c", content, true, context)
};

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(667);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".date-field-wrapper[data-v-490a57d4]{display:flex;flex-direction:column}.date-label[data-v-490a57d4]{align-items:center;color:rgba(0,0,0,.6);display:flex;font-size:12px;font-weight:500;margin-bottom:4px}.date-input[data-v-490a57d4]{background:#fff;border:1px solid rgba(0,0,0,.38);border-radius:4px;font-family:inherit;font-size:14px;padding:9px 12px;transition:all .2s}.date-input[data-v-490a57d4]:hover{border-color:rgba(0,0,0,.87)}.date-input[data-v-490a57d4]:focus{border-color:#1976d2;border-width:2px;outline:none;padding:8px 11px}.date-input[data-v-490a57d4]:disabled{background:#f5f5f5;cursor:not-allowed;opacity:.6}.maintenance-dialog[data-v-490a57d4]{display:flex;flex-direction:column;height:100vh}.section-header[data-v-490a57d4]{align-items:center;border-bottom:2px solid #e3f2fd;display:flex;margin-bottom:12px;padding-bottom:8px}.section-title[data-v-490a57d4]{color:#1976d2;font-size:.95rem;font-weight:600;letter-spacing:.5px;text-transform:uppercase}.mou-summary-card[data-v-490a57d4]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:8px;overflow:hidden}.mou-summary-card .summary-header[data-v-490a57d4]{align-items:center;background:hsla(0,0%,100%,.2);color:#fff;display:flex;font-size:15px;font-weight:600;padding:12px 16px}.mou-summary-card .summary-content[data-v-490a57d4]{background:#fff;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));padding:16px;grid-gap:12px;gap:12px}.mou-summary-card .summary-row[data-v-490a57d4]{display:flex;flex-direction:column;gap:4px}.mou-summary-card .summary-row strong[data-v-490a57d4]{color:#6b7280;font-size:12px;font-weight:600}.mou-summary-card .summary-row span[data-v-490a57d4]{color:#1f2937;font-size:14px;font-weight:500}.form-container[data-v-490a57d4]{background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.1);margin:0 auto;max-width:1400px;padding:16px!important}.v-chip--x-small[data-v-490a57d4]{font-size:10px!important;height:20px!important}.v-select--outlined[data-v-490a57d4] .v-input__control>.v-input__slot,.v-text-field--outlined[data-v-490a57d4] .v-input__control>.v-input__slot,.v-textarea[data-v-490a57d4] .v-input__control>.v-input__slot{min-height:40px!important}.v-toolbar--dense[data-v-490a57d4]{height:24px!important;min-height:24px!important}.v-toolbar--dense .v-toolbar__content[data-v-490a57d4]{height:24px!important;padding:4px 16px}.v-input--dense[data-v-490a57d4] .v-messages{min-height:0!important}.v-text-field[data-v-490a57d4] .v-text-field__details{margin-bottom:0!important;padding-top:2px!important}.v-alert--dense[data-v-490a57d4]{padding:12px!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=job-fair-job-batch.js.map