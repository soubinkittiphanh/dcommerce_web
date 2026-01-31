exports.ids = [199,12,13,14,16,72];
exports.modules = {

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(437);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(479);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(73);

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
  
  var style0 = __webpack_require__(786)
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

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6b9bac6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6b9bac6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6b9bac6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6b9bac6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e6b9bac6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card-title.primary[data-v-e6b9bac6]{background:linear-gradient(45deg,#1976d2,#1565c0)}.text-caption[data-v-e6b9bac6]{font-size:12px!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(451);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js + 16 modules
var VDatePicker = __webpack_require__(488);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/batch_job/index.vue?vue&type=template&id=e6b9bac6&scoped=true






















var batch_jobvue_type_template_id_e6b9bac6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
  }, [_vm._v("mdi-briefcase-outline")]), _vm._v(" "), _c('span', [_vm._v("ລະບົບຈັດການ Job Batch")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success",
      "loading": _vm.exporting,
      "disabled": _vm.loading || _vm.jobBatches.length === 0
    },
    on: {
      "click": _vm.exportToExcel
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-file-excel")]), _vm._v("\n              ສົ່ງອອກ Excel\n            ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "white",
      "text": "",
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.openCreateDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n              ເພີ່ມໃໝ່\n            ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
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
      "prepend-inner-icon": "mdi-magnify",
      "dense": "",
      "outlined": "",
      "hide-details": "",
      "clearable": ""
    },
    on: {
      "input": _vm.debounceSearch
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
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.mouFilterOptions,
      "loading": _vm.loadingMous,
      "label": "ສັນຍາ MOU",
      "prepend-inner-icon": "mdi-file-document",
      "dense": "",
      "outlined": "",
      "hide-details": "",
      "clearable": "",
      "item-text": "mouName",
      "item-value": "id"
    },
    model: {
      value: _vm.filters.mouId,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "mouId", $$v);
      },
      expression: "filters.mouId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "ສະຖານະ",
      "prepend-inner-icon": "mdi-information",
      "dense": "",
      "outlined": "",
      "hide-details": "",
      "clearable": ""
    },
    model: {
      value: _vm.filters.status,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "status", $$v);
      },
      expression: "filters.status"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VMenu["a" /* default */], {
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "min-width": "auto"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "label": "ຊ່ວງເວລາ",
            "prepend-inner-icon": "mdi-calendar",
            "readonly": "",
            "dense": "",
            "outlined": "",
            "hide-details": "",
            "clearable": ""
          },
          on: {
            "click:clear": function ($event) {
              _vm.filters.dateRange = null;
            }
          },
          model: {
            value: _vm.dateRangeText,
            callback: function ($$v) {
              _vm.dateRangeText = $$v;
            },
            expression: "dateRangeText"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }]),
    model: {
      value: _vm.dateMenu,
      callback: function ($$v) {
        _vm.dateMenu = $$v;
      },
      expression: "dateMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "range": ""
    },
    on: {
      "input": function ($event) {
        _vm.dateMenu = false;
      }
    },
    model: {
      value: _vm.filters.dateRange,
      callback: function ($$v) {
        _vm.$set(_vm.filters, "dateRange", $$v);
      },
      expression: "filters.dateRange"
    }
  })], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "secondary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": _vm.clearFilters
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-refresh")]), _vm._v("\n                  Reset\n                ")], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "mt-3"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v("mdi-table")]), _vm._v(" "), _c('span', [_vm._v("ລາຍການ Job Batch")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "outlined": ""
    }
  }, [_vm._v(" " + _vm._s(_vm.totalItems) + " ລາຍການ ")])], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-0",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.jobBatches,
      "loading": _vm.loading,
      "options": _vm.tableOptions,
      "server-items-length": _vm.totalItems,
      "footer-props": {
        'items-per-page-options': [10, 25, 50, 100]
      },
      "loading-text": "ກຳລັງໂຫຼດຂໍ້ມູນ...",
      "no-data-text": "ບໍ່ມີຂໍ້ມູນ"
    },
    on: {
      "update:options": function ($event) {
        _vm.tableOptions = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "item.runningNo",
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
        }, [_vm._v("mdi-numeric")]), _vm._v(" "), _c(VChip["a" /* default */], {
          staticClass: "font-weight-bold",
          attrs: {
            "small": "",
            "color": "primary",
            "text-color": "white"
          }
        }, [_vm._v("\n      " + _vm._s(item.runningNo) + "\n    ")])], 1)];
      }
    }, {
      key: "item.mou",
      fn: function ({
        item
      }) {
        return [item.mou ? _c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "small": "",
            "color": "primary"
          }
        }, [_vm._v("mdi-file-document")]), _vm._v(" "), _c('div', [_c('div', {
          staticClass: "text-caption font-weight-bold"
        }, [_vm._v("\n                    " + _vm._s(item.mou.employerCompany) + "\n                  ")]), _vm._v(" "), _c('div', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("\n                    " + _vm._s(item.mou.mouNumber) + "\n                  ")])])], 1) : _c('span', {
          staticClass: "text-caption grey--text"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": ""
          }
        }, [_vm._v("mdi-minus-circle")]), _vm._v("\n                ບໍ່ມີ MOU\n              ")], 1)];
      }
    }, {
      key: "item.workPlace",
      fn: function ({
        item
      }) {
        var _item$mou;
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": "",
            "color": "blue"
          }
        }, [_vm._v("mdi-map-marker")]), _vm._v(" "), _c('span', {
          staticClass: "text-caption"
        }, [_vm._v(_vm._s(((_item$mou = item.mou) === null || _item$mou === void 0 ? void 0 : _item$mou.workLocation) || '-'))])], 1)];
      }
    }, {
      key: "item.jobTitle",
      fn: function ({
        item
      }) {
        var _item$mou2;
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": "",
            "color": "purple"
          }
        }, [_vm._v("mdi-briefcase")]), _vm._v(" "), _c('span', {
          staticClass: "text-caption"
        }, [_vm._v(_vm._s(((_item$mou2 = item.mou) === null || _item$mou2 === void 0 ? void 0 : _item$mou2.jobTitle) || '-'))])], 1)];
      }
    }, {
      key: "item.status",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": _vm.getStatusColor(item.status),
            "text-color": "white"
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "x-small": "",
            "left": ""
          }
        }, [_vm._v(_vm._s(_vm.getStatusIcon(item.status)))]), _vm._v("\n                " + _vm._s(_vm.formatStatus(item.status)) + "\n              ")], 1)];
      }
    }, {
      key: "item.totalPositions",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center justify-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": "",
            "color": "success"
          }
        }, [_vm._v("mdi-account-multiple")]), _vm._v(" "), _c('span', {
          staticClass: "text-caption font-weight-bold"
        }, [_vm._v(_vm._s(item.totalPositions || 0))])], 1)];
      }
    }, {
      key: "item.principalAmount",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center justify-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": "",
            "color": "success"
          }
        }, [_vm._v("mdi-cash-multiple")]), _vm._v(" "), _c('span', {
          staticClass: "text-caption font-weight-bold"
        }, [_vm._v(_vm._s(_vm.formatNumber(item.principalAmount || 0)))])], 1)];
      }
    }, {
      key: "item.applicantCount",
      fn: function ({
        item
      }) {
        var _item$applicantStatis, _item$applicantStatis2;
        return [_c('div', {
          staticClass: "d-flex align-center justify-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": "",
            "color": "info"
          }
        }, [_vm._v("mdi-account-check")]), _vm._v(" "), _c('span', {
          staticClass: "text-caption font-weight-bold"
        }, [_vm._v("\n                  " + _vm._s(((_item$applicantStatis = item.applicantStatistics) === null || _item$applicantStatis === void 0 ? void 0 : _item$applicantStatis.interview) || ((_item$applicantStatis2 = item.applicantStatistics) === null || _item$applicantStatis2 === void 0 ? void 0 : _item$applicantStatis2.total) || 0) + "\n                  ")])], 1)];
      }
    }, {
      key: "item.batchStartDate",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": "",
            "color": "green"
          }
        }, [_vm._v("mdi-calendar-start")]), _vm._v(" "), item.batchStartDate ? _c('span', {
          staticClass: "text-caption"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatDate(item.batchStartDate)) + "\n                ")]) : _c('span', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("ບໍ່ມີ")])], 1)];
      }
    }, {
      key: "item.batchEndDate",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": "",
            "color": _vm.isOverdue(item.batchEndDate) ? 'error' : 'warning'
          }
        }, [_vm._v("\n                  mdi-calendar-end\n                ")]), _vm._v(" "), item.batchEndDate ? _c('span', {
          staticClass: "text-caption",
          class: {
            'error--text': _vm.isOverdue(item.batchEndDate)
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.formatDate(item.batchEndDate)) + "\n                ")]) : _c('span', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("ບໍ່ມີ")])], 1)];
      }
    }, {
      key: "item.batchDeliveryDate",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-1",
          attrs: {
            "x-small": "",
            "color": _vm.isOverdue(item.batchDeliveryDate) ? 'error' : 'warning'
          }
        }, [_vm._v("\n                  mdi-calendar-end\n                ")]), _vm._v(" "), item.batchDeliveryDate ? _c('span', {
          staticClass: "text-caption",
          class: {
            'error--text': _vm.isOverdue(item.batchDeliveryDate)
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.formatDate(item.batchDeliveryDate)) + "\n                ")]) : _c('span', {
          staticClass: "text-caption grey--text"
        }, [_vm._v("ບໍ່ມີ")])], 1)];
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
              return _vm.editBatch(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "info"
          }
        }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ແກ້ໄຂ")])], 1), _vm._v(" "), _c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.createInvoiceFromBatch(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "success"
          }
        }, [_vm._v("mdi-file-invoice-outline")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ສ້າງໃບແຈ້ງໜີ້")])], 1), _vm._v(" "), _c(VListItem["a" /* default */], {
          on: {
            "click": function ($event) {
              return _vm.updateStatus(item);
            }
          }
        }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
          attrs: {
            "small": "",
            "color": "orange"
          }
        }, [_vm._v("mdi-update")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_vm._v("ອັບເດດສະຖານະ")])], 1), _vm._v(" "), _c(VDivider["a" /* default */])], 1)], 1)];
      }
    }])
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c('job-batch-dialog', {
    attrs: {
      "batch": _vm.selectedBatch,
      "is-edit": _vm.isEdit
    },
    on: {
      "saved": _vm.onBatchSaved,
      "cancelled": function ($event) {
        _vm.showDialog = false;
      }
    },
    model: {
      value: _vm.showDialog,
      callback: function ($$v) {
        _vm.showDialog = $$v;
      },
      expression: "showDialog"
    }
  }), _vm._ssrNode(" "), _c('client-only', [_c('InvoiceHeaderMaintain', {
    attrs: {
      "visible": _vm.showEditDialog,
      "invoice": _vm.selectedInvoice,
      "customers": _vm.customers,
      "jobBatches": _vm.jobBatches,
      "currencies": _vm.currencies,
      "preselected-batch-id": _vm.preselectedBatchId
    },
    on: {
      "close": _vm.closeEditDialog,
      "save": _vm.onInvoiceSave
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400px",
      "persistent": ""
    },
    model: {
      value: _vm.showStatusDialog,
      callback: function ($$v) {
        _vm.showStatusDialog = $$v;
      },
      expression: "showStatusDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h6"
  }, [_vm._v("ອັບເດດສະຖານະ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "ສະຖານະໃໝ່",
      "outlined": "",
      "dense": ""
    },
    model: {
      value: _vm.newStatus,
      callback: function ($$v) {
        _vm.newStatus = $$v;
      },
      expression: "newStatus"
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.showStatusDialog = false;
      }
    }
  }, [_vm._v("ຍົກເລີກ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.updating
    },
    on: {
      "click": _vm.confirmStatusUpdate
    }
  }, [_vm._v("\n            ອັບເດດ\n          ")])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/batch_job/index.vue?vue&type=template&id=e6b9bac6&scoped=true

// EXTERNAL MODULE: ./components/job_fair/job_batch/index.vue + 4 modules
var job_batch = __webpack_require__(1071);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(44);

// EXTERNAL MODULE: ./components/accounting/ar/invoice/maintain/index.vue + 4 modules
var maintain = __webpack_require__(759);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/batch_job/index.vue?vue&type=script&lang=js




/* harmony default export */ var batch_jobvue_type_script_lang_js = ({
  name: 'JobBatchList',
  components: {
    JobBatchDialog: job_batch["default"],
    InvoiceHeaderMaintain: maintain["default"]
  },
  middleware: 'auths',
  data() {
    return {
      showEditDialog: false,
      // CHANGE: rename from showInvoiceDialog
      showInvoiceDialog: false,
      // NEW
      selectedInvoice: null,
      // NEW
      preselectedBatchId: null,
      // NEW
      customers: [],
      // NEW
      currencies: [],
      // NEW
      loading: false,
      updating: false,
      loadingMous: false,
      dateMenu: false,
      showDialog: false,
      showStatusDialog: false,
      isEdit: false,
      selectedBatch: null,
      newStatus: '',
      jobBatches: [],
      totalItems: 0,
      mouFilterOptions: [],
      exporting: false,
      // NEW: for Excel export loading state

      filters: {
        search: '',
        mouId: '',
        status: '',
        dateRange: null
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 25,
        sortBy: ['createdAt'],
        sortDesc: [true]
      },
      headers: [{
        text: 'ຮອບຈັດສົ່ງ',
        value: 'runningNo',
        sortable: true,
        width: '100px'
      }, {
        text: 'ບໍລິສັດນາຍຈ້າງ',
        value: 'mou',
        sortable: false,
        width: '200px'
      }, {
        text: 'ສະຖານທີ່ວຽກ',
        value: 'workPlace',
        sortable: false,
        width: '150px'
      }, {
        text: 'ໜ້າວຽກ',
        value: 'jobTitle',
        sortable: false,
        width: '150px'
      }, {
        text: 'ສະຖານະ',
        value: 'status',
        sortable: true,
        width: '120px'
      }, {
        text: 'ມູນຄ່າແບັດຈັອບ',
        value: 'principalAmount',
        sortable: true,
        width: '100px',
        align: 'center'
      }, {
        text: 'ເປີດຮັບ',
        value: 'totalPositions',
        sortable: true,
        width: '100px',
        align: 'center'
      }, {
        text: 'ສະໝັກແລ້ວ',
        value: 'applicantCount',
        sortable: false,
        width: '100px',
        align: 'center'
      }, {
        text: 'ວັນເລີ່ມ',
        value: 'batchStartDate',
        sortable: true,
        width: '120px'
      }, {
        text: 'ວັນສິ້ນສຸດ',
        value: 'batchEndDate',
        sortable: true,
        width: '120px'
      }, {
        text: 'ວັນທີຈັດສົ່ງແຮງງານ',
        value: 'batchDeliveryDate',
        sortable: true,
        width: '120px'
      }, {
        text: 'ຄຳສັ່ງ',
        value: 'actions',
        sortable: false,
        width: '80px',
        align: 'center'
      }],
      statusOptions: [{
        text: 'ດຳເນີນການ',
        value: 'active'
      }, {
        text: 'ສຳເລັດ',
        value: 'completed'
      }, {
        text: 'ຍົກເລີກ',
        value: 'cancelled'
      }, {
        text: 'ລໍຖ້າ',
        value: 'on_hold'
      }, {
        text: 'ເດີນທາງແລ້ວ',
        value: 'submit'
      }]
    };
  },
  computed: {
    dateRangeText() {
      if (!this.filters.dateRange || this.filters.dateRange.length === 0) return '';
      if (this.filters.dateRange.length === 1) return this.filters.dateRange[0];
      return `${this.filters.dateRange[0]} - ${this.filters.dateRange[1]}`;
    }
  },
  watch: {
    tableOptions: {
      handler() {
        this.fetchJobBatches();
      },
      deep: true
    },
    'filters.mouId'() {
      this.fetchJobBatches();
    },
    'filters.status'() {
      this.fetchJobBatches();
    },
    'filters.dateRange'() {
      this.fetchJobBatches();
    }
  },
  mounted() {
    this.fetchJobBatches();
    this.fetchMouFilterOptions();
    this.loadCustomers(); // Add this
    this.loadCurrencies(); // Add this
  },
  methods: {
    // NEW: Excel Export Method
    async exportToExcel() {
      if (this.jobBatches.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນສໍາລັບການສົ່ງອອກ');
        return;
      }
      this.exporting = true;
      try {
        // Import XLSX library dynamically (if using in browser)
        const XLSX = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 417, 7));

        // Prepare data for export
        const excelData = this.prepareExcelData();

        // Create workbook and worksheet
        const workbook = XLSX.utils.book_new();

        // Main data sheet
        const worksheet = XLSX.utils.json_to_sheet(excelData);

        // Set column widths
        worksheet['!cols'] = [{
          wch: 15
        },
        // Running No
        {
          wch: 25
        },
        // Company
        {
          wch: 20
        },
        // MOU Number
        {
          wch: 20
        },
        // Work Place
        {
          wch: 20
        },
        // Job Title
        {
          wch: 15
        },
        // Status
        {
          wch: 18
        },
        // Principal Amount
        {
          wch: 15
        },
        // Total Positions
        {
          wch: 15
        },
        // Applicant Count
        {
          wch: 15
        },
        // Start Date
        {
          wch: 15
        },
        // End Date
        {
          wch: 20
        },
        // Delivery Date
        {
          wch: 15
        } // Created Date
        ];

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Job Batches');

        // Create summary sheet
        const summaryData = this.createSummaryData();
        const summaryWorksheet = XLSX.utils.json_to_sheet(summaryData);
        summaryWorksheet['!cols'] = [{
          wch: 25
        }, {
          wch: 15
        }];
        XLSX.utils.book_append_sheet(workbook, summaryWorksheet, 'Summary');

        // Generate Excel file
        const excelBuffer = XLSX.write(workbook, {
          bookType: 'xlsx',
          type: 'array'
        });

        // Create blob and download
        const blob = new Blob([excelBuffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Job_Batches_${this.formatDateForFilename(new Date())}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.$toast.success('ສົ່ງອອກ Excel ສຳເລັດແລ້ວ');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('ສົ່ງອອກ Excel ບໍ່ສຳເລັດ: ' + error.message);
      } finally {
        this.exporting = false;
      }
    },
    // NEW: Prepare data for Excel export
    prepareExcelData() {
      return this.jobBatches.map((item, index) => {
        var _item$mou, _item$mou2, _item$mou3, _item$mou4, _item$applicantStatis, _item$applicantStatis2;
        return {
          'ຮອບຈັດສົ່ງ': item.runningNo || '',
          'ບໍລິສັດນາຍຈ້າງ': ((_item$mou = item.mou) === null || _item$mou === void 0 ? void 0 : _item$mou.employerCompany) || '',
          'ເລກທີ MOU': ((_item$mou2 = item.mou) === null || _item$mou2 === void 0 ? void 0 : _item$mou2.mouNumber) || '',
          'ສະຖານທີ່ວຽກ': ((_item$mou3 = item.mou) === null || _item$mou3 === void 0 ? void 0 : _item$mou3.workLocation) || '',
          'ໜ້າວຽກ': ((_item$mou4 = item.mou) === null || _item$mou4 === void 0 ? void 0 : _item$mou4.jobTitle) || '',
          'ສະຖານະ': this.formatStatus(item.status),
          'ມູນຄ່າແບັດຈັອບ': item.principalAmount || 0,
          'ເປີດຮັບ': item.totalPositions || 0,
          'ສະໝັກແລ້ວ': ((_item$applicantStatis = item.applicantStatistics) === null || _item$applicantStatis === void 0 ? void 0 : _item$applicantStatis.interview) || ((_item$applicantStatis2 = item.applicantStatistics) === null || _item$applicantStatis2 === void 0 ? void 0 : _item$applicantStatis2.total) || 0,
          'ວັນເລີ່ມ': item.batchStartDate ? this.formatDateForExcel(item.batchStartDate) : '',
          'ວັນສິ້ນສຸດ': item.batchEndDate ? this.formatDateForExcel(item.batchEndDate) : '',
          'ວັນຈັດສົ່ງແຮງງານ': item.batchDeliveryDate ? this.formatDateForExcel(item.batchDeliveryDate) : '',
          'ວັນທີ່ສ້າງ': item.createdAt ? this.formatDateForExcel(item.createdAt) : ''
        };
      });
    },
    // NEW: Create summary data for the summary sheet
    createSummaryData() {
      const stats = {
        totalBatches: this.jobBatches.length,
        totalPositions: this.jobBatches.reduce((sum, item) => sum + (item.totalPositions || 0), 0),
        totalPrincipalAmount: this.jobBatches.reduce((sum, item) => sum + (item.principalAmount || 0), 0),
        totalApplicants: this.jobBatches.reduce((sum, item) => {
          var _item$applicantStatis3, _item$applicantStatis4;
          return sum + (((_item$applicantStatis3 = item.applicantStatistics) === null || _item$applicantStatis3 === void 0 ? void 0 : _item$applicantStatis3.interview) || ((_item$applicantStatis4 = item.applicantStatistics) === null || _item$applicantStatis4 === void 0 ? void 0 : _item$applicantStatis4.total) || 0);
        }, 0),
        statusBreakdown: {}
      };

      // Calculate status breakdown
      this.jobBatches.forEach(item => {
        const status = this.formatStatus(item.status);
        stats.statusBreakdown[status] = (stats.statusBreakdown[status] || 0) + 1;
      });
      return [{
        'ລາຍການ': 'ລວມ Job Batch ທັງໝົດ',
        'ຈຳນວນ': stats.totalBatches
      }, {
        'ລາຍການ': 'ລວມຕຳແຫນ່ງວຽກ',
        'ຈຳນວນ': stats.totalPositions
      }, {
        'ລາຍການ': 'ລວມມູນຄ່າແບັດຈ໌',
        'ຈຳນວນ': stats.totalPrincipalAmount
      }, {
        'ລາຍການ': 'ລວມຜູ້ສະໝັກ',
        'ຈຳນວນ': stats.totalApplicants
      }, {
        'ລາຍການ': '',
        'ຈຳນວນ': ''
      }, {
        'ລາຍການ': '=== ສະຖິຕິສະຖານະ ===',
        'ຈຳນວນ': ''
      }, ...Object.entries(stats.statusBreakdown).map(([status, count]) => ({
        'ລາຍການ': status,
        'ຈຳນວນ': count
      }))];
    },
    // NEW: Format date for Excel (YYYY-MM-DD)
    formatDateForExcel(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-CA');
    },
    // NEW: Format date for filename
    formatDateForFilename(date) {
      return date.toISOString().split('T')[0];
    },
    closeEditDialog() {
      this.showEditDialog = false; // CHANGED: was closeInvoiceDialog
      this.preselectedBatchId = null;
      this.selectedInvoice = null;
    },
    async createInvoiceFromBatch(batch) {
      // Load required data if not already loaded
      await Promise.all([this.loadCustomers(), this.loadCurrencies()]);

      // Set the preselected batch ID
      this.preselectedBatchId = batch.id;

      // Clear any existing invoice
      this.selectedInvoice = null;

      // Open invoice dialog
      this.showEditDialog = true; // CHANGED: was showInvoiceDialog
    },
    async loadCustomers() {
      if (this.customers.length > 0) return; // Already loaded

      try {
        const {
          data
        } = await this.$axios.get('/api/client/find');
        if (data) {
          this.customers = data || [];
        }
      } catch (error) {
        console.error('Error loading customers:', error);
        this.$toast.error('ບໍ່ສາມາດໂຫຼດຂໍ້ມູນລູກຄ້າໄດ້');
      }
    },
    async loadCurrencies() {
      if (this.currencies.length > 0) return; // Already loaded

      try {
        const {
          data
        } = await this.$axios.get('/api/currency/findAll');
        if (data) {
          this.currencies = data || [];
        }
      } catch (error) {
        console.error('Error loading currencies:', error);
        this.$toast.error('ບໍ່ສາມາດໂຫຼດຂໍ້ມູນສະກຸນເງິນໄດ້');
      }
    },
    closeInvoiceDialog() {
      this.showInvoiceDialog = false;
      this.preselectedBatchId = null;
      this.selectedInvoice = null;
    },
    async onInvoiceSave(invoiceData) {
      try {
        const endpoint = invoiceData.id ? `/api/ar-invoices/${invoiceData.id}` : '/api/ar-invoices';
        const method = invoiceData.id ? 'put' : 'post';
        const {
          data
        } = await this.$axios[method](endpoint, invoiceData);
        this.$toast.success(invoiceData.id ? 'ອັບເດດໃບແຈ້ງໜີ້ສຳເລັດແລ້ວ' : 'ສ້າງໃບແຈ້ງໜີ້ສຳເລັດແລ້ວ');
        this.closeEditDialog(); // CHANGED: was closeInvoiceDialog
      } catch (error) {
        console.error('Error saving invoice:', error);
        this.$toast.error('ບໍ່ສາມາດບັນທຶກໃບແຈ້ງໜີ້ໄດ້');
      }
    },
    debounceSearch: Object(external_lodash_["debounce"])(function () {
      this.fetchJobBatches();
    }, 500),
    async fetchJobBatches() {
      this.loading = true;
      try {
        const params = {
          page: this.tableOptions.page,
          limit: this.tableOptions.itemsPerPage,
          sortBy: this.tableOptions.sortBy[0] || 'createdAt',
          sortOrder: this.tableOptions.sortDesc[0] ? 'DESC' : 'ASC',
          include: 'mou'
        };
        if (this.filters.search) params.search = this.filters.search;
        if (this.filters.mouId) params.mouId = this.filters.mouId;
        if (this.filters.status) params.status = this.filters.status;
        const {
          data
        } = await this.$axios.get('/api/batch-job', {
          params
        });
        this.jobBatches = data.data.jobBatches;
        this.totalItems = data.data.pagination.total;
      } catch (error) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ');
        console.error('Error fetching job batches:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchMouFilterOptions() {
      this.loadingMous = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/mous', {
          params: {
            limit: 100,
            fields: 'id,mouName,mouNumber'
          }
        });
        this.mouFilterOptions = data.data.mous || data.data || [];
      } catch (error) {
        console.error('Error fetching MOU options:', error);
      } finally {
        this.loadingMous = false;
      }
    },
    openCreateDialog() {
      this.selectedBatch = null;
      this.isEdit = false;
      this.showDialog = true;
    },
    editBatch(batch) {
      this.selectedBatch = {
        ...batch
      };
      this.isEdit = true;
      this.showDialog = true;
    },
    updateStatus(batch) {
      this.selectedBatch = batch;
      this.newStatus = batch.status;
      this.showStatusDialog = true;
    },
    async confirmStatusUpdate() {
      this.updating = true;
      try {
        await this.$axios.patch(`/api/batch-job/${this.selectedBatch.id}/status`, {
          status: this.newStatus
        });
        this.$toast.success('ອັບເດດສະຖານະສຳເລັດແລ້ວ');
        this.showStatusDialog = false;
        this.fetchJobBatches();
      } catch (error) {
        this.$toast.error('ອັບເດດສະຖານະບໍ່ສຳເລັດ');
        console.error('Error updating status:', error);
      } finally {
        this.updating = false;
      }
    },
    async deleteBatch(batch) {
      const confirmed = await this.$confirm(`ທ່ານຕ້ອງການລົບ "${batch.batchName}" ແມ່ນບໍ?`, {
        title: 'ຢືນຢັນການລົບ'
      });
      if (confirmed) {
        try {
          await this.$axios.delete(`/api/batch-job/${batch.id}`);
          this.$toast.success('ລົບສຳເລັດແລ້ວ');
          this.fetchJobBatches();
        } catch (error) {
          this.$toast.error('ການລົບບໍ່ສຳເລັດ');
          console.error('Error deleting batch:', error);
        }
      }
    },
    onBatchSaved() {
      this.showDialog = false;
      this.fetchJobBatches();
      this.fetchMouFilterOptions();
    },
    clearFilters() {
      this.filters = {
        search: '',
        mouId: '',
        status: '',
        dateRange: null
      };
      this.fetchJobBatches();
    },
    getStatusColor(status) {
      const colors = {
        active: 'success',
        completed: 'primary',
        cancelled: 'error',
        on_hold: 'warning'
      };
      return colors[status] || 'grey';
    },
    getStatusIcon(status) {
      const icons = {
        active: 'mdi-play-circle',
        completed: 'mdi-check-circle',
        cancelled: 'mdi-close-circle',
        on_hold: 'mdi-pause-circle'
      };
      return icons[status] || 'mdi-help-circle';
    },
    formatNumber(val) {
      return Object(common["e" /* getFormatNum */])(val);
    },
    formatStatus(status) {
      const labels = {
        draft: 'ລໍຖ້າ',
        active: 'ດຳເນີນການ',
        completed: 'ສຳເລັດ',
        settled: 'ຊຳລະແລ້ວ',
        submit: 'ເດີນທາງແລ້ວ'
      };
      return labels[status] || status;
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    isOverdue(date) {
      if (!date) return false;
      return new Date(date) < new Date();
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/batch_job/index.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_batch_jobvue_type_script_lang_js = (batch_jobvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/batch_job/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_batch_jobvue_type_script_lang_js,
  batch_jobvue_type_template_id_e6b9bac6_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "e6b9bac6",
  "38f3134a"
  
)

/* harmony default export */ var batch_job = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'localable',
  props: {
    locale: String
  },
  computed: {
    currentLocale() {
      return this.locale || this.$vuetify.lang.current;
    }
  }
}));

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLeapYear; });
function createUTCDate(year, month = 0, day = 1) {
  let date;
  if (year < 100 && year >= 0) {
    date = new Date(Date.UTC(year, month, day));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(year);
    }
  } else {
    date = new Date(Date.UTC(year, month, day));
  }
  return date;
}
function firstWeekOffset(year, firstDayOfWeek, firstDayOfYear) {
  const firstWeekDayInFirstWeek = 7 + firstDayOfWeek - firstDayOfYear;
  const firstWeekDayOfYear = (7 + createUTCDate(year, 0, firstWeekDayInFirstWeek).getUTCDay() - firstDayOfWeek) % 7;
  return -firstWeekDayOfYear + firstWeekDayInFirstWeek - 1;
}
function dayOfYear(year, month, day, firstDayOfWeek) {
  let dayOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month];
  if (month > 1 && isLeapYear(year)) {
    dayOfYear++;
  }
  return dayOfYear + day;
}
function weeksInYear(year, firstDayOfWeek, firstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, firstDayOfYear);
  const weekOffsetNext = firstWeekOffset(year + 1, firstDayOfWeek, firstDayOfYear);
  const daysInYear = isLeapYear(year) ? 366 : 365;
  return (daysInYear - weekOffset + weekOffsetNext) / 7;
}
function weekNumber(year, month, day, firstDayOfWeek, localeFirstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, localeFirstDayOfYear);
  const week = Math.ceil((dayOfYear(year, month, day, firstDayOfWeek) - weekOffset) / 7);
  if (week < 1) {
    return week + weeksInYear(year - 1, firstDayOfWeek, localeFirstDayOfYear);
  } else if (week > weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear)) {
    return week - weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear);
  } else {
    return week;
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(457);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 457:
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PARSE_REGEX */
/* unused harmony export PARSE_TIME */
/* unused harmony export DAYS_IN_MONTH */
/* unused harmony export DAYS_IN_MONTH_LEAP */
/* unused harmony export DAYS_IN_MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAYS_IN_MONTH_MAX; });
/* unused harmony export MONTH_MAX */
/* unused harmony export MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DAY_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DAYS_IN_WEEK; });
/* unused harmony export MINUTES_IN_HOUR */
/* unused harmony export MINUTE_MAX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINUTES_IN_DAY; });
/* unused harmony export HOURS_IN_DAY */
/* unused harmony export HOUR_MAX */
/* unused harmony export FIRST_HOUR */
/* unused harmony export OFFSET_YEAR */
/* unused harmony export OFFSET_MONTH */
/* unused harmony export OFFSET_HOUR */
/* unused harmony export OFFSET_TIME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getStartOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getEndOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getStartOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getEndOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return validateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return parseTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return validateTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return parseTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getDayIdentifier; });
/* unused harmony export getTimeIdentifier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getTimestampIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return updateRelative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isTimedless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return updateHasTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return updateMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return updateWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return updateFormatted; });
/* unused harmony export getWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return copyTimestamp; });
/* unused harmony export padNumber */
/* unused harmony export getDate */
/* unused harmony export getTime */
/* unused harmony export nextMinutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return nextDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return prevDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return relativeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return diffMinutes; });
/* unused harmony export findWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getWeekdaySkips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return timestampToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createDayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createIntervalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createNativeLocaleFormatter; });
/* harmony import */ var _util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455);

const PARSE_REGEX = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/;
const PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/;
const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_MIN = 28;
const DAYS_IN_MONTH_MAX = 31;
const MONTH_MAX = 12;
const MONTH_MIN = 1;
const DAY_MIN = 1;
const DAYS_IN_WEEK = 7;
const MINUTES_IN_HOUR = 60;
const MINUTE_MAX = 59;
const MINUTES_IN_DAY = 24 * 60;
const HOURS_IN_DAY = 24;
const HOUR_MAX = 23;
const FIRST_HOUR = 0;
const OFFSET_YEAR = 10000;
const OFFSET_MONTH = 100;
const OFFSET_HOUR = 100;
const OFFSET_TIME = 10000;
function getStartOfWeek(timestamp, weekdays, today) {
  const start = copyTimestamp(timestamp);
  findWeekday(start, weekdays[0], prevDay);
  updateFormatted(start);
  if (today) {
    updateRelative(start, today, start.hasTime);
  }
  return start;
}
function getEndOfWeek(timestamp, weekdays, today) {
  const end = copyTimestamp(timestamp);
  findWeekday(end, weekdays[weekdays.length - 1]);
  updateFormatted(end);
  if (today) {
    updateRelative(end, today, end.hasTime);
  }
  return end;
}
function getStartOfMonth(timestamp) {
  const start = copyTimestamp(timestamp);
  start.day = DAY_MIN;
  updateWeekday(start);
  updateFormatted(start);
  return start;
}
function getEndOfMonth(timestamp) {
  const end = copyTimestamp(timestamp);
  end.day = daysInMonth(end.year, end.month);
  updateWeekday(end);
  updateFormatted(end);
  return end;
}
function validateTime(input) {
  return typeof input === 'number' && isFinite(input) || !!PARSE_TIME.exec(input) || typeof input === 'object' && isFinite(input.hour) && isFinite(input.minute);
}
function parseTime(input) {
  if (typeof input === 'number') {
    // when a number is given, it's minutes since 12:00am
    return input;
  } else if (typeof input === 'string') {
    // when a string is given, it's a hh:mm:ss format where seconds are optional
    const parts = PARSE_TIME.exec(input);
    if (!parts) {
      return false;
    }
    return parseInt(parts[1]) * 60 + parseInt(parts[3] || 0);
  } else if (typeof input === 'object') {
    // when an object is given, it must have hour and minute
    if (typeof input.hour !== 'number' || typeof input.minute !== 'number') {
      return false;
    }
    return input.hour * 60 + input.minute;
  } else {
    // unsupported type
    return false;
  }
}
function validateTimestamp(input) {
  return typeof input === 'number' && isFinite(input) || typeof input === 'string' && !!PARSE_REGEX.exec(input) || input instanceof Date;
}
function parseTimestamp(input, required = false, now) {
  if (typeof input === 'number' && isFinite(input)) {
    input = new Date(input);
  }
  if (input instanceof Date) {
    const date = parseDate(input);
    if (now) {
      updateRelative(date, now, date.hasTime);
    }
    return date;
  }
  if (typeof input !== 'string') {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  } // YYYY-MM-DD hh:mm:ss

  const parts = PARSE_REGEX.exec(input);
  if (!parts) {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  }
  const timestamp = {
    date: input,
    time: '',
    year: parseInt(parts[1]),
    month: parseInt(parts[2]),
    day: parseInt(parts[4]) || 1,
    hour: parseInt(parts[6]) || 0,
    minute: parseInt(parts[8]) || 0,
    weekday: 0,
    hasDay: !!parts[4],
    hasTime: !!(parts[6] && parts[8]),
    past: false,
    present: false,
    future: false
  };
  updateWeekday(timestamp);
  updateFormatted(timestamp);
  if (now) {
    updateRelative(timestamp, now, timestamp.hasTime);
  }
  return timestamp;
}
function parseDate(date) {
  return updateFormatted({
    date: '',
    time: '',
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    hasDay: true,
    hasTime: true,
    past: false,
    present: true,
    future: false
  });
}
function getDayIdentifier(timestamp) {
  return timestamp.year * OFFSET_YEAR + timestamp.month * OFFSET_MONTH + timestamp.day;
}
function getTimeIdentifier(timestamp) {
  return timestamp.hour * OFFSET_HOUR + timestamp.minute;
}
function getTimestampIdentifier(timestamp) {
  return getDayIdentifier(timestamp) * OFFSET_TIME + getTimeIdentifier(timestamp);
}
function updateRelative(timestamp, now, time = false) {
  let a = getDayIdentifier(now);
  let b = getDayIdentifier(timestamp);
  let present = a === b;
  if (timestamp.hasTime && time && present) {
    a = getTimeIdentifier(now);
    b = getTimeIdentifier(timestamp);
    present = a === b;
  }
  timestamp.past = b < a;
  timestamp.present = present;
  timestamp.future = b > a;
  return timestamp;
}
function isTimedless(input) {
  return input instanceof Date || typeof input === 'number' && isFinite(input);
}
function updateHasTime(timestamp, hasTime, now) {
  if (timestamp.hasTime !== hasTime) {
    timestamp.hasTime = hasTime;
    if (!hasTime) {
      timestamp.hour = HOUR_MAX;
      timestamp.minute = MINUTE_MAX;
      timestamp.time = getTime(timestamp);
    }
    if (now) {
      updateRelative(timestamp, now, timestamp.hasTime);
    }
  }
  return timestamp;
}
function updateMinutes(timestamp, minutes, now) {
  timestamp.hasTime = true;
  timestamp.hour = Math.floor(minutes / MINUTES_IN_HOUR);
  timestamp.minute = minutes % MINUTES_IN_HOUR;
  timestamp.time = getTime(timestamp);
  if (now) {
    updateRelative(timestamp, now, true);
  }
  return timestamp;
}
function updateWeekday(timestamp) {
  timestamp.weekday = getWeekday(timestamp);
  return timestamp;
}
function updateFormatted(timestamp) {
  timestamp.time = getTime(timestamp);
  timestamp.date = getDate(timestamp);
  return timestamp;
}
function getWeekday(timestamp) {
  if (timestamp.hasDay) {
    const _ = Math.floor;
    const k = timestamp.day;
    const m = (timestamp.month + 9) % MONTH_MAX + 1;
    const C = _(timestamp.year / 100);
    const Y = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
    return ((k + _(2.6 * m - 0.2) - 2 * C + Y + _(Y / 4) + _(C / 4)) % 7 + 7) % 7;
  }
  return timestamp.weekday;
}
function daysInMonth(year, month) {
  return Object(_util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__[/* isLeapYear */ "a"])(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
}
function copyTimestamp(timestamp) {
  const {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  } = timestamp;
  return {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  };
}
function padNumber(x, length) {
  let padded = String(x);
  while (padded.length < length) {
    padded = '0' + padded;
  }
  return padded;
}
function getDate(timestamp) {
  let str = `${padNumber(timestamp.year, 4)}-${padNumber(timestamp.month, 2)}`;
  if (timestamp.hasDay) str += `-${padNumber(timestamp.day, 2)}`;
  return str;
}
function getTime(timestamp) {
  if (!timestamp.hasTime) {
    return '';
  }
  return `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
}
function nextMinutes(timestamp, minutes) {
  timestamp.minute += minutes;
  while (timestamp.minute > MINUTES_IN_HOUR) {
    timestamp.minute -= MINUTES_IN_HOUR;
    timestamp.hour++;
    if (timestamp.hour >= HOURS_IN_DAY) {
      nextDay(timestamp);
      timestamp.hour = FIRST_HOUR;
    }
  }
  return timestamp;
}
function nextDay(timestamp) {
  timestamp.day++;
  timestamp.weekday = (timestamp.weekday + 1) % DAYS_IN_WEEK;
  if (timestamp.day > DAYS_IN_MONTH_MIN && timestamp.day > daysInMonth(timestamp.year, timestamp.month)) {
    timestamp.day = DAY_MIN;
    timestamp.month++;
    if (timestamp.month > MONTH_MAX) {
      timestamp.month = MONTH_MIN;
      timestamp.year++;
    }
  }
  return timestamp;
}
function prevDay(timestamp) {
  timestamp.day--;
  timestamp.weekday = (timestamp.weekday + 6) % DAYS_IN_WEEK;
  if (timestamp.day < DAY_MIN) {
    timestamp.month--;
    if (timestamp.month < MONTH_MIN) {
      timestamp.year--;
      timestamp.month = MONTH_MAX;
    }
    timestamp.day = daysInMonth(timestamp.year, timestamp.month);
  }
  return timestamp;
}
function relativeDays(timestamp, mover = nextDay, days = 1) {
  while (--days >= 0) mover(timestamp);
  return timestamp;
}
function diffMinutes(min, max) {
  const Y = (max.year - min.year) * 525600;
  const M = (max.month - min.month) * 43800;
  const D = (max.day - min.day) * 1440;
  const h = (max.hour - min.hour) * 60;
  const m = max.minute - min.minute;
  return Y + M + D + h + m;
}
function findWeekday(timestamp, weekday, mover = nextDay, maxDays = 6) {
  while (timestamp.weekday !== weekday && --maxDays >= 0) mover(timestamp);
  return timestamp;
}
function getWeekdaySkips(weekdays) {
  const skips = [1, 1, 1, 1, 1, 1, 1];
  const filled = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < weekdays.length; i++) {
    filled[weekdays[i]] = 1;
  }
  for (let k = 0; k < DAYS_IN_WEEK; k++) {
    let skip = 1;
    for (let j = 1; j < DAYS_IN_WEEK; j++) {
      const next = (k + j) % DAYS_IN_WEEK;
      if (filled[next]) {
        break;
      }
      skip++;
    }
    skips[k] = filled[k] * skip;
  }
  return skips;
}
function timestampToDate(timestamp) {
  const time = `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
  const date = timestamp.date;
  return new Date(`${date}T${time}:00+00:00`);
}
function createDayList(start, end, now, weekdaySkips, max = 42, min = 0) {
  const stop = getDayIdentifier(end);
  const days = [];
  let current = copyTimestamp(start);
  let currentIdentifier = 0;
  let stopped = currentIdentifier === stop;
  if (stop < getDayIdentifier(start)) {
    throw new Error('End date is earlier than start date.');
  }
  while ((!stopped || days.length < min) && days.length < max) {
    currentIdentifier = getDayIdentifier(current);
    stopped = stopped || currentIdentifier === stop;
    if (weekdaySkips[current.weekday] === 0) {
      current = nextDay(current);
      continue;
    }
    const day = copyTimestamp(current);
    updateFormatted(day);
    updateRelative(day, now);
    days.push(day);
    current = relativeDays(current, nextDay, weekdaySkips[current.weekday]);
  }
  if (!days.length) throw new Error('No dates found using specified start date, end date, and weekdays.');
  return days;
}
function createIntervalList(timestamp, first, minutes, count, now) {
  const intervals = [];
  for (let i = 0; i < count; i++) {
    const mins = first + i * minutes;
    const int = copyTimestamp(timestamp);
    intervals.push(updateMinutes(int, mins, now));
  }
  return intervals;
}
function createNativeLocaleFormatter(locale, getOptions) {
  const emptyFormatter = (_t, _s) => '';
  if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
    return emptyFormatter;
  }
  return (timestamp, short) => {
    try {
      const intlFormatter = new Intl.DateTimeFormat(locale || undefined, getOptions(timestamp, short));
      return intlFormatter.format(timestampToDate(timestamp));
    } catch (e) {
      return '';
    }
  };
}

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(464);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("265ccd52", content, true)

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:4px;contain:layout style;display:inline-flex;flex-direction:column;font-size:1rem;position:relative;vertical-align:top}.v-picker--full-width{display:flex;width:100%}.v-picker--full-width>.v-picker__body{margin:initial}.v-picker__title{border-top-left-radius:4px;border-top-right-radius:4px;color:#fff;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){cursor:pointer;opacity:.6}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{align-items:center;display:flex;flex:1 0 auto;flex-direction:column;height:auto;margin:0 auto;overflow:hidden;position:relative;z-index:0}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-bottom-right-radius:0;border-top-right-radius:0;height:100%;position:absolute;top:0;width:170px;z-index:1}.v-application--is-ltr .v-picker--landscape .v-picker__title{left:0}.v-application--is-rtl .v-picker--landscape .v-picker__title{right:0}.v-application--is-ltr .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-ltr .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:170px;margin-right:0}.v-application--is-rtl .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-rtl .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:0;margin-right:170px}.v-picker--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(466);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ec842454", content, true)

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-title{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;line-height:1}.v-application--is-ltr .v-date-picker-title .v-picker__title__btn{text-align:left}.v-application--is-rtl .v-date-picker-title .v-picker__title__btn{text-align:right}.v-date-picker-title__year{align-items:center;display:inline-flex;font-size:14px;font-weight:500;margin-bottom:8px}.v-date-picker-title__date{font-size:34px;font-weight:500;margin-bottom:-8px;overflow:hidden;padding-bottom:8px;position:relative;text-align:left}.v-date-picker-title__date>div{position:relative}.v-date-picker-title--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(468);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("075924a4", content, true)

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:rgba(0,0,0,.87)}.theme--light.v-date-picker-header .v-date-picker-header__value--disabled button{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:#fff}.theme--dark.v-date-picker-header .v-date-picker-header__value--disabled button{color:hsla(0,0%,100%,.5)}.v-date-picker-header{align-items:center;display:flex;justify-content:space-between;padding:4px 16px;position:relative}.v-date-picker-header .v-btn{margin:0;z-index:auto}.v-date-picker-header .v-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-date-picker-header__value{flex:1;overflow:hidden;position:relative;text-align:center}.v-date-picker-header__value div{transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-header__value button{cursor:pointer;font-weight:700;outline:none;padding:.5rem;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-date-picker-header--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(470);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0f7d136a", content, true)

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-table .v-date-picker-table--date__week,.theme--light.v-date-picker-table th{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-table .v-date-picker-table--date__week,.theme--dark.v-date-picker-table th{color:hsla(0,0%,100%,.5)}.v-date-picker-table{height:242px;padding:0 12px;position:relative}.v-date-picker-table table{table-layout:fixed;top:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-table td,.v-date-picker-table th{position:relative;text-align:center}.v-date-picker-table th{font-size:12px}.v-date-picker-table--date .v-btn{height:32px;width:32px}.v-date-picker-table .v-btn{font-size:12px;margin:0;z-index:auto}.v-date-picker-table .v-btn.v-btn--active{color:#fff}.v-date-picker-table--month td{height:56px;text-align:center;vertical-align:middle;width:33.333333%}.v-date-picker-table--month td .v-btn{margin:0 auto;max-width:140px;min-width:40px;width:100%}.v-date-picker-table--date th{font-weight:600;padding:8px 0}.v-date-picker-table--date td{width:45px}.v-date-picker-table__events{height:8px;left:0;position:absolute;text-align:center;white-space:pre;width:100%}.v-date-picker-table__events>div{border-radius:50%;display:inline-block;height:8px;margin:0 1px;width:8px}.v-date-picker-table--date .v-date-picker-table__events{bottom:6px}.v-date-picker-table--month .v-date-picker-table__events{bottom:8px}.v-date-picker-table__current .v-date-picker-table__events{margin-bottom:-1px}.v-date-picker-table--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(472);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("4dc2915a", content, true)

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-years{font-size:16px;font-weight:400;height:290px;list-style-type:none;overflow:auto;text-align:center}.v-date-picker-years.v-date-picker-years{padding:0}.v-date-picker-years li{cursor:pointer;padding:8px 0;transition:none}.v-date-picker-years li.active{font-size:26px;font-weight:500;padding:10px 0}.v-date-picker-years li:hover{background:rgba(0,0,0,.12)}.v-picker--landscape .v-date-picker-years{height:290px;padding:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(456);
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

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTitle.sass
var VDatePickerTitle = __webpack_require__(465);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker-button/index.js
// Mixins
 // Utilities



/* @vue/component */

/* harmony default export */ var picker_button = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  methods: {
    genPickerButton(prop, value, content, readonly = false, staticClass = '') {
      const active = this[prop] === value;
      const click = event => {
        event.stopPropagation();
        this.$emit(`update:${Object(helpers["x" /* kebabCase */])(prop)}`, value);
      };
      return this.$createElement('div', {
        staticClass: `v-picker__title__btn ${staticClass}`.trim(),
        class: {
          'v-picker__title__btn--active': active,
          'v-picker__title__btn--readonly': readonly
        },
        on: active || readonly ? undefined : {
          click
        }
      }, Array.isArray(content) ? content : [content]);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerTitle.js
 // Components

 // Mixins

 // Utils


/* harmony default export */ var VDatePicker_VDatePickerTitle = (Object(mixins["a" /* default */])(picker_button
/* @vue/component */).extend({
  name: 'v-date-picker-title',
  props: {
    date: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    readonly: Boolean,
    selectingYear: Boolean,
    value: {
      type: String
    },
    year: {
      type: [Number, String],
      default: ''
    },
    yearIcon: {
      type: String
    }
  },
  data: () => ({
    isReversing: false
  }),
  computed: {
    computedTransition() {
      return this.isReversing ? 'picker-reverse-transition' : 'picker-transition';
    }
  },
  watch: {
    value(val, prev) {
      this.isReversing = val < prev;
    }
  },
  methods: {
    genYearIcon() {
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          dark: true
        }
      }, this.yearIcon);
    },
    getYearBtn() {
      return this.genPickerButton('selectingYear', true, [String(this.year), this.yearIcon ? this.genYearIcon() : null], false, 'v-date-picker-title__year');
    },
    genTitleText() {
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('div', {
        domProps: {
          innerHTML: this.date || '&nbsp;'
        },
        key: this.value
      })]);
    },
    genTitleDate() {
      return this.genPickerButton('selectingYear', false, [this.genTitleText()], false, 'v-date-picker-title__date');
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-date-picker-title',
      class: {
        'v-date-picker-title--disabled': this.disabled
      }
    }, [this.getYearBtn(), this.genTitleDate()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerHeader.sass
var VDatePickerHeader = __webpack_require__(467);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/localable/index.js
var localable = __webpack_require__(454);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/pad.js
const padStart = (string, targetLength, padString) => {
  targetLength = targetLength >> 0;
  string = String(string);
  padString = String(padString);
  if (string.length > targetLength) {
    return String(string);
  }
  targetLength = targetLength - string.length;
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length);
  }
  return padString.slice(0, targetLength) + String(string);
};
/* harmony default export */ var pad = ((n, length = 2) => padStart(n, length, '0'));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/createNativeLocaleFormatter.js

function createNativeLocaleFormatter(locale, options, substrOptions = {
  start: 0,
  length: 0
}) {
  const makeIsoString = dateString => {
    const [year, month, date] = dateString.trim().split(' ')[0].split('-');
    return [pad(year, 4), pad(month || 1), pad(date || 1)].join('-');
  };
  try {
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);
    return dateString => intlFormatter.format(new Date(`${makeIsoString(dateString)}T00:00:00+00:00`));
  } catch (e) {
    return substrOptions.start || substrOptions.length ? dateString => makeIsoString(dateString).substr(substrOptions.start || 0, substrOptions.length) : undefined;
  }
}
/* harmony default export */ var util_createNativeLocaleFormatter = (createNativeLocaleFormatter);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/monthChange.js

/**
 * @param {String} value YYYY-MM format
 * @param {Number} sign -1 or +1
 */

/* harmony default export */ var monthChange = ((value, sign) => {
  const [year, month] = value.split('-').map(Number);
  if (month + sign === 0) {
    return `${year - 1}-12`;
  } else if (month + sign === 13) {
    return `${year + 1}-01`;
  } else {
    return `${year}-${pad(month + sign)}`;
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerHeader.js
 // Components


 // Mixins



 // Utils



/* harmony default export */ var VDatePicker_VDatePickerHeader = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-header',
  props: {
    disabled: Boolean,
    format: Function,
    min: String,
    max: String,
    nextAriaLabel: String,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevAriaLabel: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    readonly: Boolean,
    value: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isReversing: false
    };
  },
  computed: {
    formatter() {
      if (this.format) {
        return this.format;
      } else if (String(this.value).split('-')[1]) {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 7
        });
      } else {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        });
      }
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  methods: {
    genBtn(change) {
      const ariaLabelId = change > 0 ? this.nextAriaLabel : this.prevAriaLabel;
      const ariaLabel = ariaLabelId ? this.$vuetify.lang.t(ariaLabelId) : undefined;
      const disabled = this.disabled || change < 0 && this.min && this.calculateChange(change) < this.min || change > 0 && this.max && this.calculateChange(change) > this.max;
      return this.$createElement(VBtn["a" /* default */], {
        attrs: {
          'aria-label': ariaLabel
        },
        props: {
          dark: this.dark,
          disabled,
          icon: true,
          light: this.light
        },
        on: {
          click: e => {
            e.stopPropagation();
            this.$emit('input', this.calculateChange(change));
          }
        }
      }, [this.$createElement(VIcon["a" /* default */], change < 0 === !this.$vuetify.rtl ? this.prevIcon : this.nextIcon)]);
    },
    calculateChange(sign) {
      const [year, month] = String(this.value).split('-').map(Number);
      if (month == null) {
        return `${year + sign}`;
      } else {
        return monthChange(String(this.value), sign);
      }
    },
    genHeader() {
      const color = !this.disabled && (this.color || 'accent');
      const header = this.$createElement('div', this.setTextColor(color, {
        key: String(this.value)
      }), [this.$createElement('button', {
        attrs: {
          type: 'button'
        },
        on: {
          click: () => this.$emit('toggle')
        }
      }, [this.$slots.default || this.formatter(String(this.value))])]);
      const transition = this.$createElement('transition', {
        props: {
          name: this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition'
        }
      }, [header]);
      return this.$createElement('div', {
        staticClass: 'v-date-picker-header__value',
        class: {
          'v-date-picker-header__value--disabled': this.disabled
        }
      }, [transition]);
    }
  },
  render() {
    return this.$createElement('div', {
      staticClass: 'v-date-picker-header',
      class: {
        'v-date-picker-header--disabled': this.disabled,
        ...this.themeClasses
      }
    }, [this.genBtn(-1), this.genHeader(), this.genBtn(+1)]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTable.sass
var VDatePickerTable = __webpack_require__(469);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/eventHelpers.js
function createItemTypeNativeListeners(instance, itemTypeSuffix, value) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName.slice(0, -itemTypeSuffix.length)] = event => instance.$emit(eventName, value, event);
    }
    return on;
  }, {});
}
function createItemTypeListeners(instance, itemTypeSuffix) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName] = instance.$listeners[eventName];
    }
    return on;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/sanitizeDateString.js
// Adds leading zero to month/day if necessary, returns 'YYYY' if type = 'year',
// 'YYYY-MM' if 'month' and 'YYYY-MM-DD' if 'date'

/* harmony default export */ var sanitizeDateString = ((dateString, type) => {
  const [year, month = 1, date = 1] = dateString.split('-');
  return `${year}-${pad(month)}-${pad(date)}`.substr(0, {
    date: 10,
    month: 7,
    year: 4
  }[type]);
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/isDateAllowed.js
function isDateAllowed(date, min, max, allowedFn) {
  return (!allowedFn || allowedFn(date)) && (!min || date >= min.substr(0, 10)) && (!max || date <= max);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/mixins/date-picker-table.js
 // Directives

 // Mixins



 // Utils






/* harmony default export */ var date_picker_table = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    allowedDates: Function,
    current: String,
    disabled: Boolean,
    format: Function,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    min: String,
    max: String,
    range: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    tableDate: {
      type: String,
      required: true
    },
    value: [String, Array]
  },
  data: () => ({
    isReversing: false,
    wheelThrottle: null
  }),
  computed: {
    computedTransition() {
      return this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition';
    },
    displayedMonth() {
      return Number(this.tableDate.split('-')[1]) - 1;
    },
    displayedYear() {
      return Number(this.tableDate.split('-')[0]);
    }
  },
  watch: {
    tableDate(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  mounted() {
    this.wheelThrottle = Object(helpers["G" /* throttle */])(this.wheel, 250);
  },
  methods: {
    genButtonClasses(isAllowed, isFloating, isSelected, isCurrent, isFirst, isLast) {
      return {
        'v-size--default': !isFloating,
        'v-date-picker-table__current': isCurrent,
        'v-btn--active': isSelected,
        'v-btn--flat': !isAllowed || this.disabled,
        'v-btn--text': isSelected === isCurrent,
        'v-btn--rounded': isFloating,
        'v-btn--disabled': !isAllowed || this.disabled,
        'v-btn--outlined': isCurrent && !isSelected,
        'v-date-picker--first-in-range': isFirst,
        'v-date-picker--last-in-range': isLast,
        ...this.themeClasses
      };
    },
    genButtonEvents(value, isAllowed, mouseEventType) {
      if (this.disabled) return undefined;
      return Object(mergeData["c" /* mergeListeners */])({
        click: () => {
          if (isAllowed && !this.readonly) this.$emit('input', value);
        }
      }, createItemTypeNativeListeners(this, `:${mouseEventType}`, value));
    },
    genButton(value, isFloating, mouseEventType, formatter, isOtherMonth = false) {
      const isAllowed = isDateAllowed(value, this.min, this.max, this.allowedDates);
      const isSelected = this.isSelected(value) && isAllowed;
      const isCurrent = value === this.current;
      const setColor = isSelected ? this.setBackgroundColor : this.setTextColor;
      const color = (isSelected || isCurrent) && (this.color || 'accent');
      let isFirst = false;
      let isLast = false;
      if (this.range && !!this.value && Array.isArray(this.value)) {
        isFirst = value === this.value[0];
        isLast = value === this.value[this.value.length - 1];
      }
      return this.$createElement('button', setColor(color, {
        staticClass: 'v-btn',
        class: this.genButtonClasses(isAllowed && !isOtherMonth, isFloating, isSelected, isCurrent, isFirst, isLast),
        attrs: {
          type: 'button'
        },
        domProps: {
          disabled: this.disabled || !isAllowed || isOtherMonth
        },
        on: this.genButtonEvents(value, isAllowed, mouseEventType)
      }), [this.$createElement('div', {
        staticClass: 'v-btn__content'
      }, [formatter(value)]), this.genEvents(value)]);
    },
    getEventColors(date) {
      const arrayize = v => Array.isArray(v) ? v : [v];
      let eventData;
      let eventColors = [];
      if (Array.isArray(this.events)) {
        eventData = this.events.includes(date);
      } else if (this.events instanceof Function) {
        eventData = this.events(date) || false;
      } else if (this.events) {
        eventData = this.events[date] || false;
      } else {
        eventData = false;
      }
      if (!eventData) {
        return [];
      } else if (eventData !== true) {
        eventColors = arrayize(eventData);
      } else if (typeof this.eventColor === 'string') {
        eventColors = [this.eventColor];
      } else if (typeof this.eventColor === 'function') {
        eventColors = arrayize(this.eventColor(date));
      } else if (Array.isArray(this.eventColor)) {
        eventColors = this.eventColor;
      } else {
        eventColors = arrayize(this.eventColor[date]);
      }
      return eventColors.filter(v => v);
    },
    genEvents(date) {
      const eventColors = this.getEventColors(date);
      return eventColors.length ? this.$createElement('div', {
        staticClass: 'v-date-picker-table__events'
      }, eventColors.map(color => this.$createElement('div', this.setBackgroundColor(color)))) : null;
    },
    isValidScroll(value, calculateTableDate) {
      const tableDate = calculateTableDate(value); // tableDate is 'YYYY-MM' for DateTable and 'YYYY' for MonthTable

      const sanitizeType = tableDate.split('-').length === 1 ? 'year' : 'month';
      return value < 0 && (this.min ? tableDate >= sanitizeDateString(this.min, sanitizeType) : true) || value > 0 && (this.max ? tableDate <= sanitizeDateString(this.max, sanitizeType) : true);
    },
    wheel(e, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(e.deltaY));
    },
    touch(value, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(value));
    },
    genTable(staticClass, children, calculateTableDate) {
      const transition = this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('table', {
        key: this.tableDate
      }, children)]);
      const touchDirective = {
        name: 'touch',
        value: {
          left: e => e.offsetX < -15 && this.isValidScroll(1, calculateTableDate) && this.touch(1, calculateTableDate),
          right: e => e.offsetX > 15 && this.isValidScroll(-1, calculateTableDate) && this.touch(-1, calculateTableDate)
        }
      };
      return this.$createElement('div', {
        staticClass,
        class: {
          'v-date-picker-table--disabled': this.disabled,
          ...this.themeClasses
        },
        on: !this.disabled && this.scrollable ? {
          wheel: e => {
            e.preventDefault();
            if (this.isValidScroll(e.deltaY, calculateTableDate)) {
              this.wheelThrottle(e, calculateTableDate);
            }
          }
        } : undefined,
        directives: [touchDirective]
      }, [transition]);
    },
    isSelected(value) {
      if (Array.isArray(this.value)) {
        if (this.range && this.value.length === 2) {
          const [from, to] = [...this.value].sort();
          return from <= value && value <= to;
        } else {
          return this.value.indexOf(value) !== -1;
        }
      }
      return value === this.value;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dateTimeUtils.js
var dateTimeUtils = __webpack_require__(455);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerDateTable.js
// Mixins
 // Utils





/* harmony default export */ var VDatePickerDateTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-date-table',
  props: {
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    weekdayFormat: Function
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        day: 'numeric',
        timeZone: 'UTC'
      }, {
        start: 8,
        length: 2
      });
    },
    weekdayFormatter() {
      return this.weekdayFormat || util_createNativeLocaleFormatter(this.currentLocale, {
        weekday: 'narrow',
        timeZone: 'UTC'
      });
    },
    weekDays() {
      const first = parseInt(this.firstDayOfWeek, 10);
      return this.weekdayFormatter ? Object(helpers["i" /* createRange */])(7).map(i => this.weekdayFormatter(`2017-01-${first + i + 15}`)) // 2017-01-15 is Sunday
      : Object(helpers["i" /* createRange */])(7).map(i => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][(i + first) % 7]);
    }
  },
  methods: {
    calculateTableDate(delta) {
      return monthChange(this.tableDate, Math.sign(delta || 1));
    },
    genTHead() {
      const days = this.weekDays.map(day => this.$createElement('th', day));
      if (this.showWeek) {
        days.unshift(this.$createElement('th'));
      }
      return this.$createElement('thead', this.genTR(days));
    },
    // Returns number of the days from the firstDayOfWeek to the first day of the current month
    weekDaysBeforeFirstDayOfTheMonth() {
      const firstDayOfTheMonth = new Date(`${this.displayedYear}-${pad(this.displayedMonth + 1)}-01T00:00:00+00:00`);
      const weekDay = firstDayOfTheMonth.getUTCDay();
      return (weekDay - parseInt(this.firstDayOfWeek) + 7) % 7;
    },
    getWeekNumber(dayInMonth) {
      return Object(dateTimeUtils["b" /* weekNumber */])(this.displayedYear, this.displayedMonth, dayInMonth, parseInt(this.firstDayOfWeek), parseInt(this.localeFirstDayOfYear));
    },
    genWeekNumber(weekNumber) {
      return this.$createElement('td', [this.$createElement('small', {
        staticClass: 'v-date-picker-table--date__week'
      }, String(weekNumber).padStart(2, '0'))]);
    },
    // eslint-disable-next-line max-statements
    genTBody() {
      const children = [];
      const daysInMonth = new Date(this.displayedYear, this.displayedMonth + 1, 0).getDate();
      let rows = [];
      let day = this.weekDaysBeforeFirstDayOfTheMonth();
      if (this.showWeek) {
        rows.push(this.genWeekNumber(this.getWeekNumber(1)));
      }
      const prevMonthYear = this.displayedMonth ? this.displayedYear : this.displayedYear - 1;
      const prevMonth = (this.displayedMonth + 11) % 12;
      const firstDayFromPreviousMonth = new Date(this.displayedYear, this.displayedMonth, 0).getDate();
      const cellsInRow = this.showWeek ? 8 : 7;
      while (day--) {
        const date = `${prevMonthYear}-${pad(prevMonth + 1)}-${pad(firstDayFromPreviousMonth - day)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      for (day = 1; day <= daysInMonth; day++) {
        const date = `${this.displayedYear}-${pad(this.displayedMonth + 1)}-${pad(day)}`;
        rows.push(this.$createElement('td', [this.genButton(date, true, 'date', this.formatter)]));
        if (rows.length % cellsInRow === 0) {
          children.push(this.genTR(rows));
          rows = [];
          if (this.showWeek && (day < daysInMonth || this.showAdjacentMonths)) {
            rows.push(this.genWeekNumber(this.getWeekNumber(day + 7)));
          }
        }
      }
      const nextMonthYear = this.displayedMonth === 11 ? this.displayedYear + 1 : this.displayedYear;
      const nextMonth = (this.displayedMonth + 1) % 12;
      let nextMonthDay = 1;
      while (rows.length < cellsInRow) {
        const date = `${nextMonthYear}-${pad(nextMonth + 1)}-${pad(nextMonthDay++)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      if (rows.length) {
        children.push(this.genTR(rows));
      }
      return this.$createElement('tbody', children);
    },
    genTR(children) {
      return [this.$createElement('tr', children)];
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--date', [this.genTHead(), this.genTBody()], this.calculateTableDate);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerMonthTable.js
// Mixins
 // Utils



/* harmony default export */ var VDatePickerMonthTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-month-table',
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        month: 'short',
        timeZone: 'UTC'
      }, {
        start: 5,
        length: 2
      });
    }
  },
  methods: {
    calculateTableDate(delta) {
      return `${parseInt(this.tableDate, 10) + Math.sign(delta || 1)}`;
    },
    genTBody() {
      const children = [];
      const cols = Array(3).fill(null);
      const rows = 12 / cols.length;
      for (let row = 0; row < rows; row++) {
        const tds = cols.map((_, col) => {
          const month = row * cols.length + col;
          const date = `${this.displayedYear}-${pad(month + 1)}`;
          return this.$createElement('td', {
            key: month
          }, [this.genButton(date, false, 'month', this.formatter)]);
        });
        children.push(this.$createElement('tr', {
          key: row
        }, tds));
      }
      return this.$createElement('tbody', children);
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--month', [this.genTBody()], this.calculateTableDate);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerYears.sass
var VDatePickerYears = __webpack_require__(471);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerYears.js
 // Mixins


 // Utils




/* harmony default export */ var VDatePicker_VDatePickerYears = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-years',
  props: {
    format: Function,
    min: [Number, String],
    max: [Number, String],
    readonly: Boolean,
    value: [Number, String]
  },
  data() {
    return {
      defaultColor: 'primary'
    };
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        year: 'numeric',
        timeZone: 'UTC'
      }, {
        length: 4
      });
    }
  },
  mounted() {
    setTimeout(() => {
      const activeItem = this.$el.getElementsByClassName('active')[0];
      if (activeItem) {
        this.$el.scrollTop = activeItem.offsetTop - this.$el.offsetHeight / 2 + activeItem.offsetHeight / 2;
      } else if (this.min && !this.max) {
        this.$el.scrollTop = this.$el.scrollHeight;
      } else if (!this.min && this.max) {
        this.$el.scrollTop = 0;
      } else {
        this.$el.scrollTop = this.$el.scrollHeight / 2 - this.$el.offsetHeight / 2;
      }
    });
  },
  methods: {
    genYearItem(year) {
      const formatted = this.formatter(`${year}`);
      const active = parseInt(this.value, 10) === year;
      const color = active && (this.color || 'primary');
      return this.$createElement('li', this.setTextColor(color, {
        key: year,
        class: {
          active
        },
        on: Object(mergeData["c" /* mergeListeners */])({
          click: () => this.$emit('input', year)
        }, createItemTypeNativeListeners(this, ':year', year))
      }), formatted);
    },
    genYearItems() {
      const children = [];
      const selectedYear = this.value ? parseInt(this.value, 10) : new Date().getFullYear();
      const maxYear = this.max ? parseInt(this.max, 10) : selectedYear + 100;
      const minYear = Math.min(maxYear, this.min ? parseInt(this.min, 10) : selectedYear - 100);
      for (let year = maxYear; year >= minYear; year--) {
        children.push(this.genYearItem(year));
      }
      return children;
    }
  },
  render() {
    return this.$createElement('ul', {
      staticClass: 'v-date-picker-years',
      ref: 'years'
    }, this.genYearItems());
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VPicker/VPicker.sass
var VPicker = __webpack_require__(463);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCard/VCard.sass
var VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/VPicker.js

 // Mixins



 // Helpers



/* @vue/component */

/* harmony default export */ var VPicker_VPicker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    landscape: Boolean,
    noTitle: Boolean,
    transition: {
      type: String,
      default: 'fade-transition'
    },
    width: {
      type: [Number, String],
      default: 290
    }
  },
  computed: {
    computedTitleColor() {
      const defaultTitleColor = this.isDark ? false : this.color || 'primary';
      return this.color || defaultTitleColor;
    }
  },
  methods: {
    genTitle() {
      return this.$createElement('div', this.setBackgroundColor(this.computedTitleColor, {
        staticClass: 'v-picker__title',
        class: {
          'v-picker__title--landscape': this.landscape
        }
      }), this.$slots.title);
    },
    genBodyTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, this.$slots.default);
    },
    genBody() {
      return this.$createElement('div', {
        staticClass: 'v-picker__body',
        class: {
          'v-picker__body--no-title': this.noTitle,
          ...this.themeClasses
        },
        style: this.fullWidth ? undefined : {
          width: Object(helpers["h" /* convertToUnit */])(this.width)
        }
      }, [this.genBodyTransition()]);
    },
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-picker__actions v-card__actions',
        class: {
          'v-picker__actions--no-title': this.noTitle
        }
      }, this.$slots.actions);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-picker v-card',
      class: {
        'v-picker--flat': this.flat,
        'v-picker--landscape': this.landscape,
        'v-picker--full-width': this.fullWidth,
        ...this.themeClasses,
        ...this.elevationClasses
      }
    }, [this.$slots.title ? this.genTitle() : null, this.genBody(), this.$slots.actions ? this.genActions() : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/index.js


/* harmony default export */ var components_VPicker = (VPicker_VPicker);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker/index.js
// Components
 // Mixins



 // Utils


/* harmony default export */ var picker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    headerColor: String,
    landscape: Boolean,
    noTitle: Boolean,
    width: {
      type: [Number, String],
      default: 290
    }
  },
  methods: {
    genPickerTitle() {
      return null;
    },
    genPickerBody() {
      return null;
    },
    genPickerActionsSlot() {
      return this.$scopedSlots.default ? this.$scopedSlots.default({
        save: this.save,
        cancel: this.cancel
      }) : this.$slots.default;
    },
    genPicker(staticClass) {
      const children = [];
      if (!this.noTitle) {
        const title = this.genPickerTitle();
        title && children.push(title);
      }
      const body = this.genPickerBody();
      body && children.push(body);
      children.push(this.$createElement('template', {
        slot: 'actions'
      }, [this.genPickerActionsSlot()]));
      return this.$createElement(components_VPicker, {
        staticClass,
        props: {
          color: this.headerColor || this.color,
          dark: this.dark,
          elevation: this.elevation,
          flat: this.flat,
          fullWidth: this.fullWidth,
          landscape: this.landscape,
          light: this.light,
          width: this.width,
          noTitle: this.noTitle
        }
      }, children);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/timestamp.js
var timestamp = __webpack_require__(458);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js
// Components




 // Mixins


 // Utils







/* harmony default export */ var VDatePicker = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(localable["a" /* default */], picker).extend({
  name: 'v-date-picker',
  props: {
    activePicker: String,
    allowedDates: Function,
    // Function formatting the day in date picker table
    dayFormat: Function,
    disabled: Boolean,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    // Function formatting the tableDate in the day/month table header
    headerDateFormat: Function,
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    max: String,
    min: String,
    // Function formatting month in the months table
    monthFormat: Function,
    multiple: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    nextMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextMonthAriaLabel'
    },
    nextYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextYearAriaLabel'
    },
    pickerDate: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    prevMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevMonthAriaLabel'
    },
    prevYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevYearAriaLabel'
    },
    range: Boolean,
    reactive: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    showCurrent: {
      type: [Boolean, String],
      default: true
    },
    selectedItemsText: {
      type: String,
      default: '$vuetify.datePicker.itemsSelected'
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    // Function formatting currently selected date in the picker title
    titleDateFormat: Function,
    type: {
      type: String,
      default: 'date',
      validator: type => ['date', 'month'].includes(type) // TODO: year
    },
    value: [Array, String],
    weekdayFormat: Function,
    // Function formatting the year in table header and pickup title
    yearFormat: Function,
    yearIcon: String
  },
  data() {
    const now = new Date();
    return {
      internalActivePicker: this.type.toUpperCase(),
      inputDay: null,
      inputMonth: null,
      inputYear: null,
      isReversing: false,
      now,
      // tableDate is a string in 'YYYY' / 'YYYY-M' format (leading zero for month is not required)
      tableDate: (() => {
        if (this.pickerDate) {
          return this.pickerDate;
        }
        const multipleValue = Object(helpers["I" /* wrapInArray */])(this.value);
        const date = multipleValue[multipleValue.length - 1] || (typeof this.showCurrent === 'string' ? this.showCurrent : `${now.getFullYear()}-${now.getMonth() + 1}`);
        return sanitizeDateString(date, this.type === 'date' ? 'month' : 'year');
      })()
    };
  },
  computed: {
    multipleValue() {
      return Object(helpers["I" /* wrapInArray */])(this.value);
    },
    isMultiple() {
      return this.multiple || this.range;
    },
    lastValue() {
      return this.isMultiple ? this.multipleValue[this.multipleValue.length - 1] : this.value;
    },
    selectedMonths() {
      if (!this.value || this.type === 'month') {
        return this.value;
      } else if (this.isMultiple) {
        return this.multipleValue.map(val => val.substr(0, 7));
      } else {
        return this.value.substr(0, 7);
      }
    },
    current() {
      if (this.showCurrent === true) {
        return sanitizeDateString(`${this.now.getFullYear()}-${this.now.getMonth() + 1}-${this.now.getDate()}`, this.type);
      }
      return this.showCurrent || null;
    },
    inputDate() {
      return this.type === 'date' ? `${this.inputYear}-${pad(this.inputMonth + 1)}-${pad(this.inputDay)}` : `${this.inputYear}-${pad(this.inputMonth + 1)}`;
    },
    tableMonth() {
      return Number((this.pickerDate || this.tableDate).split('-')[1]) - 1;
    },
    tableYear() {
      return Number((this.pickerDate || this.tableDate).split('-')[0]);
    },
    minMonth() {
      return this.min ? sanitizeDateString(this.min, 'month') : null;
    },
    maxMonth() {
      return this.max ? sanitizeDateString(this.max, 'month') : null;
    },
    minYear() {
      return this.min ? sanitizeDateString(this.min, 'year') : null;
    },
    maxYear() {
      return this.max ? sanitizeDateString(this.max, 'year') : null;
    },
    formatters() {
      return {
        year: this.yearFormat || util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        }),
        titleDate: this.titleDateFormat || (this.isMultiple ? this.defaultTitleMultipleDateFormatter : this.defaultTitleDateFormatter)
      };
    },
    defaultTitleMultipleDateFormatter() {
      return dates => {
        if (!dates.length) {
          return '-';
        }
        if (dates.length === 1) {
          return this.defaultTitleDateFormatter(dates[0]);
        }
        return this.$vuetify.lang.t(this.selectedItemsText, dates.length);
      };
    },
    defaultTitleDateFormatter() {
      const titleFormats = {
        year: {
          year: 'numeric',
          timeZone: 'UTC'
        },
        month: {
          month: 'long',
          timeZone: 'UTC'
        },
        date: {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          timeZone: 'UTC'
        }
      };
      const titleDateFormatter = util_createNativeLocaleFormatter(this.currentLocale, titleFormats[this.type], {
        start: 0,
        length: {
          date: 10,
          month: 7,
          year: 4
        }[this.type]
      });
      const landscapeFormatter = date => titleDateFormatter(date).replace(/([^\d\s])([\d])/g, (match, nonDigit, digit) => `${nonDigit} ${digit}`).replace(', ', ',<br>');
      return this.landscape ? landscapeFormatter : titleDateFormatter;
    }
  },
  watch: {
    internalActivePicker: {
      immediate: true,
      handler(val) {
        this.$emit('update:active-picker', val);
      }
    },
    activePicker(val) {
      this.internalActivePicker = val;
    },
    tableDate(val, prev) {
      // Make a ISO 8601 strings from val and prev for comparision, otherwise it will incorrectly
      // compare for example '2000-9' and '2000-10'
      const sanitizeType = this.type === 'month' ? 'year' : 'month';
      this.isReversing = sanitizeDateString(val, sanitizeType) < sanitizeDateString(prev, sanitizeType);
      this.$emit('update:picker-date', val);
    },
    pickerDate(val) {
      if (val) {
        this.tableDate = val;
      } else if (this.lastValue && this.type === 'date') {
        this.tableDate = sanitizeDateString(this.lastValue, 'month');
      } else if (this.lastValue && this.type === 'month') {
        this.tableDate = sanitizeDateString(this.lastValue, 'year');
      }
    },
    value(newValue, oldValue) {
      this.checkMultipleProp();
      this.setInputDate();
      if (!this.isMultiple && this.value && !this.pickerDate || this.isMultiple && this.multipleValue.length && (!oldValue || !oldValue.length) && !this.pickerDate) {
        this.tableDate = sanitizeDateString(this.inputDate, this.type === 'month' ? 'year' : 'month');
      }
    },
    type(type) {
      this.internalActivePicker = type.toUpperCase();
      if (this.value && this.value.length) {
        const output = this.multipleValue.map(val => sanitizeDateString(val, type)).filter(this.isDateAllowed);
        this.$emit('input', this.isMultiple ? output : output[0]);
      }
    }
  },
  created() {
    this.checkMultipleProp();
    if (this.pickerDate !== this.tableDate) {
      this.$emit('update:picker-date', this.tableDate);
    }
    this.setInputDate();
  },
  methods: {
    emitInput(newInput) {
      if (this.range) {
        if (this.multipleValue.length !== 1) {
          this.$emit('input', [newInput]);
        } else {
          const output = [this.multipleValue[0], newInput];
          this.$emit('input', output);
          this.$emit('change', output);
        }
        return;
      }
      const output = this.multiple ? this.multipleValue.indexOf(newInput) === -1 ? this.multipleValue.concat([newInput]) : this.multipleValue.filter(x => x !== newInput) : newInput;
      this.$emit('input', output);
      this.multiple || this.$emit('change', newInput);
    },
    checkMultipleProp() {
      if (this.value == null) return;
      const valueType = this.value.constructor.name;
      const expected = this.isMultiple ? 'Array' : 'String';
      if (valueType !== expected) {
        Object(console["c" /* consoleWarn */])(`Value must be ${this.isMultiple ? 'an' : 'a'} ${expected}, got ${valueType}`, this);
      }
    },
    isDateAllowed(value) {
      return isDateAllowed(value, this.min, this.max, this.allowedDates);
    },
    yearClick(value) {
      this.inputYear = value;
      if (this.type === 'month') {
        this.tableDate = `${value}`;
      } else {
        this.tableDate = `${value}-${pad((this.tableMonth || 0) + 1)}`;
      }
      this.internalActivePicker = 'MONTH';
      if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
        this.$emit('input', this.inputDate);
      }
    },
    monthClick(value) {
      const [year, month] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      if (this.type === 'date') {
        if (this.inputDay) {
          this.inputDay = Math.min(this.inputDay, Object(timestamp["i" /* daysInMonth */])(this.inputYear, this.inputMonth + 1));
        }
        this.tableDate = value;
        this.internalActivePicker = 'DATE';
        if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
          this.$emit('input', this.inputDate);
        }
      } else {
        this.emitInput(this.inputDate);
      }
    },
    dateClick(value) {
      const [year, month, day] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      this.inputDay = parseInt(day, 10);
      this.emitInput(this.inputDate);
    },
    genPickerTitle() {
      return this.$createElement(VDatePicker_VDatePickerTitle, {
        props: {
          date: this.value ? this.formatters.titleDate(this.isMultiple ? this.multipleValue : this.value) : '',
          disabled: this.disabled,
          readonly: this.readonly,
          selectingYear: this.internalActivePicker === 'YEAR',
          year: this.formatters.year(this.multipleValue.length ? `${this.inputYear}` : this.tableDate),
          yearIcon: this.yearIcon,
          value: this.multipleValue[0]
        },
        slot: 'title',
        on: {
          'update:selecting-year': value => this.internalActivePicker = value ? 'YEAR' : this.type.toUpperCase()
        }
      });
    },
    genTableHeader() {
      return this.$createElement(VDatePicker_VDatePickerHeader, {
        props: {
          nextIcon: this.nextIcon,
          color: this.color,
          dark: this.dark,
          disabled: this.disabled,
          format: this.headerDateFormat,
          light: this.light,
          locale: this.locale,
          min: this.internalActivePicker === 'DATE' ? this.minMonth : this.minYear,
          max: this.internalActivePicker === 'DATE' ? this.maxMonth : this.maxYear,
          nextAriaLabel: this.internalActivePicker === 'DATE' ? this.nextMonthAriaLabel : this.nextYearAriaLabel,
          prevAriaLabel: this.internalActivePicker === 'DATE' ? this.prevMonthAriaLabel : this.prevYearAriaLabel,
          prevIcon: this.prevIcon,
          readonly: this.readonly,
          value: this.internalActivePicker === 'DATE' ? `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}` : `${pad(this.tableYear, 4)}`
        },
        on: {
          toggle: () => this.internalActivePicker = this.internalActivePicker === 'DATE' ? 'MONTH' : 'YEAR',
          input: value => this.tableDate = value
        }
      });
    },
    genDateTable() {
      return this.$createElement(VDatePickerDateTable, {
        props: {
          allowedDates: this.allowedDates,
          color: this.color,
          current: this.current,
          dark: this.dark,
          disabled: this.disabled,
          events: this.events,
          eventColor: this.eventColor,
          firstDayOfWeek: this.firstDayOfWeek,
          format: this.dayFormat,
          light: this.light,
          locale: this.locale,
          localeFirstDayOfYear: this.localeFirstDayOfYear,
          min: this.min,
          max: this.max,
          range: this.range,
          readonly: this.readonly,
          scrollable: this.scrollable,
          showAdjacentMonths: this.showAdjacentMonths,
          showWeek: this.showWeek,
          tableDate: `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}`,
          value: this.value,
          weekdayFormat: this.weekdayFormat
        },
        ref: 'table',
        on: {
          input: this.dateClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':date')
        }
      });
    },
    genMonthTable() {
      return this.$createElement(VDatePickerMonthTable, {
        props: {
          allowedDates: this.type === 'month' ? this.allowedDates : null,
          color: this.color,
          current: this.current ? sanitizeDateString(this.current, 'month') : null,
          dark: this.dark,
          disabled: this.disabled,
          events: this.type === 'month' ? this.events : null,
          eventColor: this.type === 'month' ? this.eventColor : null,
          format: this.monthFormat,
          light: this.light,
          locale: this.locale,
          min: this.minMonth,
          max: this.maxMonth,
          range: this.range,
          readonly: this.readonly && this.type === 'month',
          scrollable: this.scrollable,
          value: this.selectedMonths,
          tableDate: `${pad(this.tableYear, 4)}`
        },
        ref: 'table',
        on: {
          input: this.monthClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':month')
        }
      });
    },
    genYears() {
      return this.$createElement(VDatePicker_VDatePickerYears, {
        props: {
          color: this.color,
          format: this.yearFormat,
          locale: this.locale,
          min: this.minYear,
          max: this.maxYear,
          value: this.tableYear
        },
        on: {
          input: this.yearClick,
          ...createItemTypeListeners(this, ':year')
        }
      });
    },
    genPickerBody() {
      const children = this.internalActivePicker === 'YEAR' ? [this.genYears()] : [this.genTableHeader(), this.internalActivePicker === 'DATE' ? this.genDateTable() : this.genMonthTable()];
      return this.$createElement('div', {
        key: this.internalActivePicker
      }, children);
    },
    setInputDate() {
      if (this.lastValue) {
        const array = this.lastValue.split('-');
        this.inputYear = parseInt(array[0], 10);
        this.inputMonth = parseInt(array[1], 10) - 1;
        if (this.type === 'date') {
          this.inputDay = parseInt(array[2], 10);
        }
      } else {
        this.inputYear = this.inputYear || this.now.getFullYear();
        this.inputMonth = this.inputMonth == null ? this.inputMonth : this.now.getMonth();
        this.inputDay = this.inputDay || this.now.getDate();
      }
    }
  },
  render() {
    return this.genPicker('v-picker--date');
  }
}));

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ar_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(615);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'InvoiceAuditDialog',
  components: {
    InvoiceAuditViewer: _components_accounting_ar_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoiceId: {
      type: [Number, String],
      default: null
    },
    invoiceInfo: {
      type: Object,
      default: null
    }
  },
  emits: ['close'],
  data() {
    return {
      auditLogs: [],
      isExporting: false,
      showExportOptions: false
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.handleClose();
    },
    onLogsLoaded(logs) {
      this.auditLogs = logs;
    },
    // Hide dropdown when clicking outside
    hideExportOptions() {
      this.showExportOptions = false;
    },
    handleOutsideClick(event) {
      var _this$$el;
      const exportDropdown = (_this$$el = this.$el) === null || _this$$el === void 0 ? void 0 : _this$$el.querySelector('.export-dropdown');
      if (exportDropdown && !exportDropdown.contains(event.target)) {
        this.showExportOptions = false;
      }
    },
    async exportAuditLog() {
      if (this.isExporting) return;
      try {
        var _this$$toast, _this$$toast2;
        this.isExporting = true;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້...');

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF();
        } catch (jsPDFError) {
          console.warn('jsPDF not available, using HTML print method:', jsPDFError);
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້ສຳເລັດ!');
      } catch (error) {
        var _this$$toast3;
        console.error('Error exporting invoice audit log:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້ໄດ້');
      } finally {
        this.isExporting = false;
      }
    },
    async exportWithJsPDF() {
      var _this$invoiceInfo;
      // Import jsPDF dynamically (requires: npm install jspdf)
      const {
        jsPDF
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 416, 7));

      // Create new PDF document
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້', 20, 20);

      // Add invoice info
      if (this.invoiceInfo) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`ເລກທີໃບແຈ້ງໜີ້: ${this.invoiceInfo.invoiceNumber}`, 20, 35);
        doc.text(`ຈຳນວນເງິນ: ${this.formatCurrency(this.invoiceInfo.totalAmount)}`, 20, 45);
        doc.text(`ວັນທີໃບແຈ້ງໜີ້: ${this.formatDate(this.invoiceInfo.invoiceDate)}`, 20, 55);
        if (this.invoiceInfo.status) {
          doc.text(`ສະຖານະ: ${this.getStatusText(this.invoiceInfo.status)}`, 20, 65);
        }
      }

      // Add generation timestamp
      doc.setFontSize(10);
      doc.text(`ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}`, 20, 80);
      let yPosition = 95;

      // Add audit logs
      this.auditLogs.forEach((log, index) => {
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }

        // Log header
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}. ${this.getActionText(log.action)}`, 20, yPosition);

        // User and timestamp
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        yPosition += 10;
        doc.text(`ຜູ້ດຳເນີນການ: ${this.getUserName(log)}`, 25, yPosition);
        yPosition += 8;
        doc.text(`ເວລາ: ${this.formatDateTime(log.auditDate)}`, 25, yPosition);

        // Reason if exists
        if (log.reason) {
          yPosition += 8;
          doc.text(`ເຫດຜົນ: ${log.reason}`, 25, yPosition);
        }

        // Invoice data summary
        if (log.recordData) {
          yPosition += 8;
          doc.text(`ຈຳນວນເງິນລວມ: ${this.formatCurrency(log.recordData.totalAmount)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ວັນທີໃບແຈ້ງໜີ້: ${this.formatDate(log.recordData.invoiceDate)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ສະຖານະ: ${this.getStatusText(log.recordData.status)}`, 25, yPosition);
          if (log.recordData.description) {
            yPosition += 8;
            doc.text(`ລາຍລະອຽດ: ${log.recordData.description}`, 25, yPosition);
          }
        }
        yPosition += 15;
      });

      // Create filename
      const filename = `invoice-audit-log-${((_this$invoiceInfo = this.invoiceInfo) === null || _this$invoiceInfo === void 0 ? void 0 : _this$invoiceInfo.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.pdf`;

      // Download PDF
      doc.save(filename);
    },
    exportWithPrintJS() {
      // Create HTML content for export
      const htmlContent = this.generateHTMLContent();

      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    },
    generateHTMLContent() {
      const logs = this.auditLogs.map((log, index) => `
        <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
          <h4 style="margin: 0 0 10px 0; color: #333;">${index + 1}. ${this.getActionText(log.action)}</h4>
          <p style="margin: 5px 0;"><strong>ຜູ້ດຳເນີນການ:</strong> ${this.getUserName(log)}</p>
          <p style="margin: 5px 0;"><strong>ເວລາ:</strong> ${this.formatDateTime(log.auditDate)}</p>
          ${log.reason ? `<p style="margin: 5px 0;"><strong>ເຫດຜົນ:</strong> ${log.reason}</p>` : ''}
          ${log.recordData ? `
            <div style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 3px;">
              <p style="margin: 3px 0;"><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${log.recordData.invoiceNumber || ''}</p>
              <p style="margin: 3px 0;"><strong>ຈຳນວນເງິນລວມ:</strong> ${this.formatCurrency(log.recordData.totalAmount)}</p>
              <p style="margin: 3px 0;"><strong>ວັນທີໃບແຈ້ງໜີ້:</strong> ${this.formatDate(log.recordData.invoiceDate)}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(log.recordData.status)}</p>
              ${log.recordData.description ? `<p style="margin: 3px 0;"><strong>ລາຍລະອຽດ:</strong> ${log.recordData.description}</p>` : ''}
            </div>
          ` : ''}
        </div>
      `).join('');
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້</title>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
            .invoice-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .timestamp { text-align: right; color: #666; font-size: 12px; margin-bottom: 20px; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້</h1>
          
          ${this.invoiceInfo ? `
            <div class="invoice-info">
              <p><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${this.invoiceInfo.invoiceNumber}</p>
              <p><strong>ຈຳນວນເງິນ:</strong> ${this.formatCurrency(this.invoiceInfo.totalAmount)}</p>
              <p><strong>ວັນທີໃບແຈ້ງໜີ້:</strong> ${this.formatDate(this.invoiceInfo.invoiceDate)}</p>
              ${this.invoiceInfo.status ? `<p><strong>ສະຖານະ:</strong> ${this.getStatusText(this.invoiceInfo.status)}</p>` : ''}
            </div>
          ` : ''}
          
          <div class="timestamp">ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}</div>
          
          <div class="audit-logs">
            ${logs}
          </div>
        </body>
        </html>
      `;
    },
    exportAsJSON() {
      this.showExportOptions = false;
      try {
        var _this$invoiceInfo2, _this$$toast4;
        const exportData = {
          invoiceInfo: this.invoiceInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map(log => {
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData0, _log$recordData1;
            return {
              id: log.id,
              action: this.getActionText(log.action),
              user: this.getUserName(log),
              email: this.getUserEmail(log),
              timestamp: log.auditDate,
              reason: log.reason,
              invoiceData: {
                invoiceId: log.invoiceId,
                invoiceNumber: (_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber,
                totalAmount: (_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount,
                taxAmount: (_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.taxAmount,
                netAmount: (_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.netAmount,
                invoiceDate: (_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.invoiceDate,
                dueDate: (_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.dueDate,
                status: this.getStatusText((_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.status),
                description: (_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.description,
                clientId: (_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.clientId,
                currencyId: (_log$recordData0 = log.recordData) === null || _log$recordData0 === void 0 ? void 0 : _log$recordData0.currencyId,
                exchangeRate: (_log$recordData1 = log.recordData) === null || _log$recordData1 === void 0 ? void 0 : _log$recordData1.exchangeRate
              }
            };
          })
        };
        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], {
          type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `invoice-audit-log-${((_this$invoiceInfo2 = this.invoiceInfo) === null || _this$invoiceInfo2 === void 0 ? void 0 : _this$invoiceInfo2.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.success('ສົ່ງອອກ JSON ສຳເລັດ!');
      } catch (error) {
        var _this$$toast5;
        console.error('Error exporting JSON:', error);
        (_this$$toast5 = this.$toast) === null || _this$$toast5 === void 0 ? void 0 : _this$$toast5.error('ບໍ່ສາມາດສົ່ງອອກ JSON ໄດ້');
      }
    },
    exportAsCSV() {
      this.showExportOptions = false;
      try {
        var _this$invoiceInfo3, _this$$toast6;
        const headers = ['ລຳດັບ', 'ການດຳເນີນງານ', 'ຜູ້ດຳເນີນການ', 'ອີເມວ', 'ເວລາ', 'ເຫດຜົນ', 'ເລກທີໃບແຈ້ງໜີ້', 'ຈຳນວນເງິນລວມ', 'ຈຳນວນເງິນພາສີ', 'ຈຳນວນເງິນສຸດທິ', 'ວັນທີໃບແຈ້ງໜີ້', 'ວັນທີຄົບກຳນົດ', 'ສະຖານະ', 'ລາຍລະອຽດ', 'ລູກຄ້າ ID', 'ສະກຸນເງິນ ID', 'ອັດຕາແລກປ່ຽນ'];
        const csvData = this.auditLogs.map((log, index) => {
          var _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', ((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.invoiceNumber) || '', ((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.totalAmount) || '', ((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.taxAmount) || '', ((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.netAmount) || '', this.formatDate((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.invoiceDate) || '', this.formatDate((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.dueDate) || '', this.getStatusText((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.status) || '', ((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.description) || '', ((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : _log$recordData18.clientId) || '', ((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : _log$recordData19.currencyId) || '', ((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : _log$recordData20.exchangeRate) || ''];
        });
        const csvContent = [headers, ...csvData].map(row => row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')).join('\n');

        // Add BOM for proper UTF-8 encoding
        const bom = '\uFEFF';
        const blob = new Blob([bom + csvContent], {
          type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `invoice-audit-log-${((_this$invoiceInfo3 = this.invoiceInfo) === null || _this$invoiceInfo3 === void 0 ? void 0 : _this$invoiceInfo3.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        (_this$$toast6 = this.$toast) === null || _this$$toast6 === void 0 ? void 0 : _this$$toast6.success('ສົ່ງອອກ CSV ສຳເລັດ!');
      } catch (error) {
        var _this$$toast7;
        console.error('Error exporting CSV:', error);
        (_this$$toast7 = this.$toast) === null || _this$$toast7 === void 0 ? void 0 : _this$$toast7.error('ບໍ່ສາມາດສົ່ງອອກ CSV ໄດ້');
      }
    },
    getUserEmail(log) {
      var _log$recordData21, _log$recordData21$mak, _log$recordData22, _log$recordData22$che, _log$user;
      return ((_log$recordData21 = log.recordData) === null || _log$recordData21 === void 0 ? void 0 : (_log$recordData21$mak = _log$recordData21.maker) === null || _log$recordData21$mak === void 0 ? void 0 : _log$recordData21$mak.cus_email) || ((_log$recordData22 = log.recordData) === null || _log$recordData22 === void 0 ? void 0 : (_log$recordData22$che = _log$recordData22.checker) === null || _log$recordData22$che === void 0 ? void 0 : _log$recordData22$che.cus_email) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.email) || '';
    },
    // Helper methods for PDF generation
    getActionText(action) {
      const actionMap = {
        CREATE: 'ສ້າງໃບແຈ້ງໜີ້',
        UPDATE: 'ອັບເດດໃບແຈ້ງໜີ້',
        DELETE: 'ລຶບໃບແຈ້ງໜີ້',
        APPROVE: 'ອະນຸມັດໃບແຈ້ງໜີ້',
        REJECT: 'ປະຕິເສດໃບແຈ້ງໜີ້',
        SUBMIT: 'ສົ່ງໃບແຈ້ງໜີ້',
        CANCEL: 'ຍົກເລີກໃບແຈ້ງໜີ້'
      };
      return actionMap[action] || action;
    },
    getStatusText(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
        pending: 'ລໍຖ້າການອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        rejected: 'ປະຕິເສດ'
      };
      return statusMap[status] || status;
    },
    getUserName(log) {
      var _log$recordData23, _log$recordData23$mak, _log$recordData24, _log$recordData24$che, _log$user2;
      return ((_log$recordData23 = log.recordData) === null || _log$recordData23 === void 0 ? void 0 : (_log$recordData23$mak = _log$recordData23.maker) === null || _log$recordData23$mak === void 0 ? void 0 : _log$recordData23$mak.cus_name) || ((_log$recordData24 = log.recordData) === null || _log$recordData24 === void 0 ? void 0 : (_log$recordData24$che = _log$recordData24.checker) === null || _log$recordData24$che === void 0 ? void 0 : _log$recordData24$che.cus_name) || ((_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.name) || 'ບໍ່ຮູ້ຈັກ';
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(412)["URL"]))

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(582);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("27f22b35", content, true, context)
};

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(626);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("52254bc8", content, true, context)
};

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(628);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("10779ce4", content, true, context)
};

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-audit-viewer[data-v-6e17086e]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-6e17086e]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-6e17086e]{align-items:center;display:flex;gap:8px}.filter-input[data-v-6e17086e]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:120px;padding:8px 12px}.filter-input[data-v-6e17086e]:focus{border-color:#667eea;outline:none}.btn-clear[data-v-6e17086e],.btn-search[data-v-6e17086e]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-6e17086e]{background:#667eea;color:#fff}.btn-clear[data-v-6e17086e]{background:#6c757d;color:#fff}.loading[data-v-6e17086e]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-6e17086e]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-6e17086e]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-6e17086e]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-6e17086e]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-6e17086e]{background:#28a745}.dot-update[data-v-6e17086e]{background:#667eea}.dot-delete[data-v-6e17086e]{background:#dc3545}.dot-approve[data-v-6e17086e]{background:#28a745}.dot-reject[data-v-6e17086e]{background:#dc3545}.dot-submit[data-v-6e17086e]{background:#17a2b8}.dot-cancel[data-v-6e17086e]{background:#ffc107}.timeline-content[data-v-6e17086e]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-6e17086e]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-6e17086e]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-6e17086e]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-6e17086e],.content-header[data-v-6e17086e]{align-items:center;display:flex}.action-info[data-v-6e17086e]{gap:12px}.action-badge[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-6e17086e]{background:#d4edda;color:#155724}.badge-update[data-v-6e17086e]{background:#e6efff;color:#004085}.badge-delete[data-v-6e17086e]{background:#f8d7da;color:#721c24}.badge-approve[data-v-6e17086e]{background:#d4edda;color:#155724}.badge-reject[data-v-6e17086e]{background:#f8d7da;color:#721c24}.badge-submit[data-v-6e17086e]{background:#d1ecf1;color:#0c5460}.amount-change[data-v-6e17086e],.badge-cancel[data-v-6e17086e]{background:#fff3cd;color:#856404}.amount-change[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-6e17086e]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-6e17086e],.user-info[data-v-6e17086e]{align-items:center;display:flex}.user-info[data-v-6e17086e]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-6e17086e]{color:#666;font-size:12px}.invoice-info[data-v-6e17086e]{align-items:center;display:flex;font-size:14px;gap:12px}.invoice-number[data-v-6e17086e]{color:#667eea;font-size:15px;font-weight:600}.invoice-amount[data-v-6e17086e]{color:#28a745;font-size:15px;font-weight:600}.invoice-date[data-v-6e17086e]{color:#666;font-size:13px}.content-status[data-v-6e17086e]{justify-content:space-between;margin-bottom:8px}.content-status[data-v-6e17086e],.status-badge[data-v-6e17086e]{align-items:center;display:flex}.status-badge[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:500;gap:4px;padding:3px 8px}.status-badge i[data-v-6e17086e]{font-size:8px}.status-draft[data-v-6e17086e]{background:#e9ecef;color:#495057}.status-sent[data-v-6e17086e]{background:#d1ecf1;color:#0c5460}.status-paid[data-v-6e17086e]{background:#d4edda;color:#155724}.status-overdue[data-v-6e17086e]{background:#f8d7da;color:#721c24}.status-cancelled[data-v-6e17086e]{background:#e2e3e5;color:#383d41}.status-pending[data-v-6e17086e]{background:#fff3cd;color:#856404}.status-approved[data-v-6e17086e]{background:#d4edda;color:#155724}.status-rejected[data-v-6e17086e]{background:#f8d7da;color:#721c24}.line-items-count[data-v-6e17086e]{background:#f8f9fa;border-radius:3px;color:#666;font-size:12px;padding:2px 6px}.content-preview[data-v-6e17086e]{display:flex;font-size:13px;gap:12px;margin-bottom:8px}.description[data-v-6e17086e]{color:#666}.content-reason[data-v-6e17086e]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-6e17086e]{font-size:11px}.expand-indicator[data-v-6e17086e]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-6e17086e]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-6e17086e]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));grid-gap:12px;gap:12px;margin-bottom:16px}.detail-item[data-v-6e17086e]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-6e17086e]{color:#333;font-size:13px}.amount[data-v-6e17086e]{color:#28a745;font-weight:600}.status[data-v-6e17086e]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.description-section[data-v-6e17086e]{margin-bottom:16px}.description-section h4[data-v-6e17086e]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.description-section p[data-v-6e17086e]{color:#666;font-size:13px;line-height:1.4;margin:0}.line-items-section h4[data-v-6e17086e]{align-items:center;border-bottom:1px solid #e5e5e5;color:#333;display:flex;font-size:14px;justify-content:space-between;margin:0 0 12px;padding-bottom:4px}.total-amount[data-v-6e17086e]{color:#28a745;font-size:13px;font-weight:600}.line-items-list[data-v-6e17086e]{display:flex;flex-direction:column;gap:8px}.line-item[data-v-6e17086e]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:12px}.line-item-header[data-v-6e17086e]{align-items:center;display:flex;justify-content:space-between;margin-bottom:6px}.line-number[data-v-6e17086e]{color:#333;font-size:13px;font-weight:600}.line-total[data-v-6e17086e]{color:#28a745;font-size:14px;font-weight:600}.line-item-details[data-v-6e17086e]{display:flex;flex-direction:column;gap:6px}.line-description[data-v-6e17086e]{color:#333;font-size:13px;font-weight:500}.line-quantities[data-v-6e17086e]{color:#666;display:flex;font-size:12px;gap:12px}.quantity[data-v-6e17086e],.tax-rate[data-v-6e17086e],.unit-price[data-v-6e17086e]{background:#e9ecef;border-radius:3px;padding:2px 6px}.approval-section h4[data-v-6e17086e]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.approval-grid[data-v-6e17086e]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:12px;gap:12px}.approval-item[data-v-6e17086e]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.approval-item label[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.approval-item span[data-v-6e17086e]{color:#333;font-size:13px}.empty-state[data-v-6e17086e]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:48px 20px;text-align:center}.empty-state i[data-v-6e17086e]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-6e17086e]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-6e17086e]{font-size:14px;margin:0}.pagination[data-v-6e17086e]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-6e17086e],.pagination[data-v-6e17086e]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-6e17086e]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-6e17086e]:hover:not(:disabled){background:#f8f9fa;border-color:#667eea}.page-btn[data-v-6e17086e]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-6e17086e]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-6e17086e]{padding:16px}.content-main[data-v-6e17086e]{gap:8px}.content-main[data-v-6e17086e],.content-status[data-v-6e17086e]{align-items:flex-start;flex-direction:column}.content-status[data-v-6e17086e]{gap:6px}.approval-grid[data-v-6e17086e],.details-grid[data-v-6e17086e]{grid-template-columns:1fr}.expanded-details[data-v-6e17086e]{margin-left:0}.timeline-item[data-v-6e17086e]:not(:last-child):before{display:none}.filter-group[data-v-6e17086e]{flex-wrap:wrap}.line-item-header[data-v-6e17086e],.line-items-section h4[data-v-6e17086e]{align-items:flex-start;flex-direction:column;gap:4px}.line-quantities[data-v-6e17086e]{flex-wrap:wrap}}@media (max-width:480px){.invoice-info[data-v-6e17086e]{align-items:flex-start}.content-preview[data-v-6e17086e],.invoice-info[data-v-6e17086e]{flex-direction:column;gap:4px}.filter-input[data-v-6e17086e]{min-width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(674);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("06a1883c", content, true, context)
};

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/view/index.vue?vue&type=template&id=6e17086e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "invoice-audit-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-6e17086e>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-6e17086e>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-6e17086e> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-6e17086e> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.action,
      expression: "filters.action"
    }],
    staticClass: "filter-input",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "action", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Actions")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREATE"
    }
  }, [_vm._v("Created")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UPDATE"
    }
  }, [_vm._v("Updated")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DELETE"
    }
  }, [_vm._v("Deleted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "APPROVE"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REJECT"
    }
  }, [_vm._v("Rejected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SUBMIT"
    }
  }, [_vm._v("Submitted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CANCEL"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.status,
      expression: "filters.status"
    }],
    staticClass: "filter-input",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("Draft")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sent"
    }
  }, [_vm._v("Sent")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "overdue"
    }
  }, [_vm._v("Overdue")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-6e17086e><i class=\"fas fa-search\" data-v-6e17086e></i></button> <button class=\"btn-clear\" data-v-6e17086e><i class=\"fas fa-times\" data-v-6e17086e></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-6e17086e><i class=\"fas fa-spinner fa-spin\" data-v-6e17086e></i>\n    Loading invoice history...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-6e17086e>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData6$line, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData0, _log$recordData1, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData20$lin, _log$recordData21, _log$recordData22;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-6e17086e><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-6e17086e><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-6e17086e></i></div> <div class=\"timeline-content\" data-v-6e17086e><div class=\"content-header\" data-v-6e17086e><div class=\"action-info\" data-v-6e17086e><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-6e17086e><div class=\"user-info\" data-v-6e17086e><i class=\"fas fa-user\" data-v-6e17086e></i> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"invoice-info\" data-v-6e17086e><span class=\"invoice-number\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber) || 'N/A')) + "</span> <span class=\"invoice-amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount))) + "</span> <span class=\"invoice-date\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.invoiceDate))) + "</span></div></div> <div class=\"content-status\" data-v-6e17086e><span" + _vm._ssrClass("status-badge", `status-${(_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status}`) + " data-v-6e17086e><i class=\"fas fa-circle\" data-v-6e17086e></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusText((_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.status)) + "\n          ") + "</span> " + ((_log$recordData6 = log.recordData) !== null && _log$recordData6 !== void 0 && (_log$recordData6$line = _log$recordData6.lineItems) !== null && _log$recordData6$line !== void 0 && _log$recordData6$line.length ? "<span class=\"line-items-count\" data-v-6e17086e>" + _vm._ssrEscape("\n            " + _vm._s(log.recordData.lineItems.length) + " line item" + _vm._s(log.recordData.lineItems.length > 1 ? 's' : '') + "\n          ") + "</span>" : "<!---->") + "</div> " + (log.reason ? "<div class=\"content-reason\" data-v-6e17086e><i class=\"fas fa-comment-alt\" data-v-6e17086e></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " " + ((_log$recordData7 = log.recordData) !== null && _log$recordData7 !== void 0 && _log$recordData7.description ? "<div class=\"content-preview\" data-v-6e17086e><span class=\"description\" data-v-6e17086e>" + _vm._ssrEscape("\n            " + _vm._s(_vm.truncateText(log.recordData.description, 50)) + "\n          ") + "</span></div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-6e17086e><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-6e17086e></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-6e17086e><div class=\"details-grid\" data-v-6e17086e><div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.invoiceId || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice Number:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.invoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice Date:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.invoiceDate))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Due Date:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData0 = log.recordData) === null || _log$recordData0 === void 0 ? void 0 : _log$recordData0.dueDate))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Total Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData1 = log.recordData) === null || _log$recordData1 === void 0 ? void 0 : _log$recordData1.totalAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Tax Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.taxAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Net Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.netAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.status}`) + " data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Client ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.clientId) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Currency ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.currencyId) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Exchange Rate:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.exchangeRate) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Created:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.createdAt))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Last Updated:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : _log$recordData18.updateTimestamp))) + "</span></div></div> " + ((_log$recordData19 = log.recordData) !== null && _log$recordData19 !== void 0 && _log$recordData19.description ? "<div class=\"description-section\" data-v-6e17086e><h4 data-v-6e17086e>Description</h4> <p data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.description)) + "</p></div>" : "<!---->") + " " + ((_log$recordData20 = log.recordData) !== null && _log$recordData20 !== void 0 && (_log$recordData20$lin = _log$recordData20.lineItems) !== null && _log$recordData20$lin !== void 0 && _log$recordData20$lin.length ? "<div class=\"line-items-section\" data-v-6e17086e><h4 data-v-6e17086e>" + _vm._ssrEscape("\n            Line Items (" + _vm._s(log.recordData.lineItems.length) + ")\n            ") + "<span class=\"total-amount\" data-v-6e17086e>" + _vm._ssrEscape("\n              Total: " + _vm._s(_vm.formatCurrency(_vm.getTotalLineItemsAmount(log.recordData.lineItems))) + "\n            ") + "</span></h4> <div class=\"line-items-list\" data-v-6e17086e>" + _vm._ssrList(log.recordData.lineItems, function (lineItem) {
      return "<div class=\"line-item\" data-v-6e17086e><div class=\"line-item-header\" data-v-6e17086e><span class=\"line-number\" data-v-6e17086e>" + _vm._ssrEscape("Line #" + _vm._s(lineItem.lineNumber)) + "</span> <span class=\"line-total\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(lineItem.lineTotal))) + "</span></div> <div class=\"line-item-details\" data-v-6e17086e><div class=\"line-description\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(lineItem.description || 'No description')) + "</div> <div class=\"line-quantities\" data-v-6e17086e><span class=\"quantity\" data-v-6e17086e>" + _vm._ssrEscape("Qty: " + _vm._s(lineItem.quantity)) + "</span> <span class=\"unit-price\" data-v-6e17086e>" + _vm._ssrEscape("Unit Price: " + _vm._s(_vm.formatCurrency(lineItem.unitPrice))) + "</span> <span class=\"tax-rate\" data-v-6e17086e>" + _vm._ssrEscape("Tax: " + _vm._s(lineItem.taxRate) + "%") + "</span></div></div></div>";
    }) + "</div></div>" : "<!---->") + " " + ((_log$recordData21 = log.recordData) !== null && _log$recordData21 !== void 0 && _log$recordData21.maker || (_log$recordData22 = log.recordData) !== null && _log$recordData22 !== void 0 && _log$recordData22.checker ? "<div class=\"approval-section\" data-v-6e17086e><h4 data-v-6e17086e>Approval Information</h4> <div class=\"approval-grid\" data-v-6e17086e>" + (log.recordData.maker ? "<div class=\"approval-item\" data-v-6e17086e><label data-v-6e17086e>Maker:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.maker.cus_name || log.recordData.maker.name || '-')) + "</span></div>" : "<!---->") + " " + (log.recordData.checker ? "<div class=\"approval-item\" data-v-6e17086e><label data-v-6e17086e>Checker:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.checker.cus_name || log.recordData.checker.name || '-')) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-6e17086e><i class=\"fas fa-history\" data-v-6e17086e></i> <h3 data-v-6e17086e>No invoice audit records found</h3> <p data-v-6e17086e>No changes have been recorded for this invoice yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-6e17086e><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-6e17086e><i class=\"fas fa-chevron-left\" data-v-6e17086e></i></button> <span class=\"page-info\" data-v-6e17086e>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-6e17086e><i class=\"fas fa-chevron-right\" data-v-6e17086e></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue?vue&type=template&id=6e17086e&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/view/index.vue?vue&type=script&lang=js
/* harmony default export */ var viewvue_type_script_lang_js = ({
  name: 'InvoiceAuditViewer',
  props: {
    invoiceId: {
      type: [Number, String],
      default: null
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    showFilters: {
      type: Boolean,
      default: true
    }
  },
  emits: ['logs-loaded'],
  data() {
    return {
      loading: false,
      auditLogs: [],
      expandedId: null,
      filters: {
        dateFrom: '',
        dateTo: '',
        action: '',
        status: ''
      },
      pagination: {
        page: 1,
        limit: 10,
        total: 0,
        pages: 0
      }
    };
  },
  mounted() {
    if (this.autoLoad) {
      this.loadAuditLogs();
    }
  },
  watch: {
    invoiceId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      try {
        // API call for invoice audit logs
        const response = await this.$axios.get(`/api/ar-invoices/audit/${this.invoiceId}`);
        if (response.data.success) {
          this.auditLogs = this.processAuditLogs(response.data.data);
          this.pagination = response.data.pagination || {
            page: 1,
            limit: 10,
            total: this.auditLogs.length,
            pages: Math.ceil(this.auditLogs.length / 10)
          };
          this.$emit('logs-loaded', this.auditLogs);
        }
      } catch (error) {
        var _this$$toast;
        console.error('Error loading invoice audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load invoice audit logs');
      } finally {
        this.loading = false;
      }
    },
    processAuditLogs(logs) {
      return logs.map(log => {
        if (typeof log.recordData === 'string') {
          try {
            log.recordData = JSON.parse(log.recordData);
          } catch (e) {
            console.warn('Failed to parse recordData:', e);
          }
        }
        return log;
      }).sort((a, b) => new Date(b.auditDate) - new Date(a.auditDate));
    },
    toggleExpand(logId) {
      this.expandedId = this.expandedId === logId ? null : logId;
    },
    changePage(page) {
      if (page >= 1 && page <= this.pagination.pages) {
        this.loadAuditLogs(page);
      }
    },
    clearFilters() {
      this.filters = {
        dateFrom: '',
        dateTo: '',
        action: '',
        status: ''
      };
      this.loadAuditLogs();
    },
    showAmountChange(log, index) {
      var _prevLog$recordData, _log$recordData;
      if (log.action !== 'UPDATE' || index === this.auditLogs.length - 1) return false;
      const prevLog = this.auditLogs[index + 1];
      if (!prevLog || !((_prevLog$recordData = prevLog.recordData) !== null && _prevLog$recordData !== void 0 && _prevLog$recordData.totalAmount) || !((_log$recordData = log.recordData) !== null && _log$recordData !== void 0 && _log$recordData.totalAmount)) return false;
      return prevLog.recordData.totalAmount !== log.recordData.totalAmount;
    },
    getAmountChange(log, index) {
      var _log$recordData2, _prevLog$recordData2;
      const prevLog = this.auditLogs[index + 1];
      const current = ((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount) || 0;
      const previous = (prevLog === null || prevLog === void 0 ? void 0 : (_prevLog$recordData2 = prevLog.recordData) === null || _prevLog$recordData2 === void 0 ? void 0 : _prevLog$recordData2.totalAmount) || 0;
      const diff = current - previous;
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    getTotalLineItemsAmount(lineItems) {
      return lineItems.reduce((total, item) => total + (item.lineTotal || 0), 0);
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times',
        'SUBMIT': 'fas fa-paper-plane',
        'CANCEL': 'fas fa-ban'
      };
      return icons[action] || 'fas fa-circle';
    },
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected',
        'SUBMIT': 'Submitted',
        'CANCEL': 'Cancelled'
      };
      return actions[action] || action;
    },
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'sent': 'Sent',
        'paid': 'Paid',
        'overdue': 'Overdue',
        'cancelled': 'Cancelled',
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected'
      };
      return statuses[status] || status;
    },
    getUserName(log) {
      var _log$recordData3, _log$recordData3$make, _log$recordData4, _log$recordData4$chec, _log$user;
      return ((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : (_log$recordData3$make = _log$recordData3.maker) === null || _log$recordData3$make === void 0 ? void 0 : _log$recordData3$make.cus_name) || ((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : (_log$recordData4$chec = _log$recordData4.checker) === null || _log$recordData4$chec === void 0 ? void 0 : _log$recordData4$chec.cus_name) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name) || 'Unknown User';
    },
    formatTime(date) {
      if (!date) return '-';
      const now = new Date();
      const logDate = new Date(date);
      const diffHours = Math.abs(now - logDate) / (1000 * 60 * 60);
      if (diffHours < 24) {
        return logDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        });
      } else {
        return logDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });
      }
    },
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
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(amount);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue?vue&type=script&lang=js
 /* harmony default export */ var audit_viewvue_type_script_lang_js = (viewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(581)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e17086e",
  "a70d6656"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(560);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-audit-dialog-overlay[data-v-51dad720]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.invoice-audit-dialog[data-v-51dad720]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.invoice-audit-dialog-header[data-v-51dad720]{align-items:center;background:linear-gradient(135deg,primary,secondary);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-51dad720]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.invoice-subtitle[data-v-51dad720]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-51dad720]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-51dad720]:hover{background:hsla(0,0%,100%,.2)}.invoice-audit-dialog-body[data-v-51dad720]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.invoice-audit-dialog-body[data-v-51dad720]::-webkit-scrollbar{width:8px}.invoice-audit-dialog-body[data-v-51dad720]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.invoice-audit-dialog-body[data-v-51dad720]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.invoice-audit-dialog-body[data-v-51dad720]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.invoice-audit-dialog-footer[data-v-51dad720]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.export-options[data-v-51dad720]{align-items:center;display:flex;gap:0}.main-export-btn[data-v-51dad720]{border-bottom-right-radius:0;border-top-right-radius:0}.export-dropdown[data-v-51dad720]{position:relative}.dropdown-toggle[data-v-51dad720]{border-bottom-left-radius:0;border-left:none;border-top-left-radius:0;padding:10px 8px}.dropdown-menu[data-v-51dad720]{background:#fff;border:1px solid #ddd;border-radius:6px;bottom:100%;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:5px;min-width:160px;position:absolute;right:0;z-index:1000}.dropdown-item[data-v-51dad720]{align-items:center;background:none;border:none;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px 12px;text-align:left;transition:background-color .2s;width:100%}.dropdown-item[data-v-51dad720]:hover{background:#f8f9fa}.btn[data-v-51dad720]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-51dad720]{background:#667eea;color:#fff}.btn-primary[data-v-51dad720]:hover{background:#5a67d8;transform:translateY(-1px)}.btn-outline-primary[data-v-51dad720]{background:#fff;border:1px solid #667eea;color:#667eea}.btn-outline-primary[data-v-51dad720]:hover{background:#667eea;color:#fff;transform:translateY(-1px)}.btn-secondary[data-v-51dad720]{background:#6c757d;color:#fff}.btn-secondary[data-v-51dad720]:hover{background:#5a6268;transform:translateY(-1px)}.btn[data-v-51dad720]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.invoice-audit-dialog[data-v-51dad720]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.invoice-audit-dialog-header[data-v-51dad720]{padding:15px}.header-info h3[data-v-51dad720]{font-size:18px}.invoice-audit-dialog-footer[data-v-51dad720]{flex-direction:column;padding:15px}.btn[data-v-51dad720],.export-options[data-v-51dad720]{width:100%}.btn[data-v-51dad720]{justify-content:center}.main-export-btn[data-v-51dad720]{border-radius:6px;border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-toggle[data-v-51dad720]{border-left:1px solid #667eea;border-radius:6px;border-top-left-radius:0;border-top-right-radius:0}.dropdown-menu[data-v-51dad720]{border:none;box-shadow:none;margin-bottom:0;position:static;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(561);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-container[data-v-a3c6311c]{background:#fff;margin:0 auto;max-width:900px;padding:40px}.invoice-header[data-v-a3c6311c]{border-bottom:3px solid primary;margin-bottom:30px;padding-bottom:15px}.header-flex[data-v-a3c6311c]{align-items:center;display:flex;gap:20px;justify-content:space-between}.header-left[data-v-a3c6311c]{flex-shrink:0}.header-center[data-v-a3c6311c]{flex:1;text-align:left}.header-right[data-v-a3c6311c]{flex-shrink:0;text-align:right}.company-logo[data-v-a3c6311c]{border-radius:4px;display:block;height:auto;max-height:100px;-o-object-fit:contain;object-fit:contain;width:120px}.fallback-logo[data-v-a3c6311c]{opacity:.8}.company-name[data-v-a3c6311c]{color:primary;font-size:24px;font-weight:700;margin:0 0 8px}.company-address[data-v-a3c6311c],.company-contact[data-v-a3c6311c]{color:#666;font-size:13px;margin:5px 0}.invoice-title h3[data-v-a3c6311c]{color:#333;font-size:20px;margin:0 0 5px}.invoice-title h4[data-v-a3c6311c]{color:#666;font-size:16px;margin:0}.invoice-info-grid[data-v-a3c6311c]{display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;background-color:#f9f9f9;border-radius:4px;gap:30px;margin:25px 0;padding:20px}.info-section h5[data-v-a3c6311c]{border-bottom:1px solid #ddd;color:#333;margin:0 0 10px;padding-bottom:5px}.client-name[data-v-a3c6311c],.info-section h5[data-v-a3c6311c]{font-size:14px;font-weight:600}.client-name[data-v-a3c6311c]{margin:5px 0}.client-details[data-v-a3c6311c]{color:#666;font-size:12px;margin:5px 0}.info-row[data-v-a3c6311c]{display:flex;font-size:12px;padding:5px 0}.label[data-v-a3c6311c]{color:#333;font-weight:600;min-width:100px}.value[data-v-a3c6311c]{color:#666}.status-badge[data-v-a3c6311c]{border-radius:12px;display:inline-block;font-size:11px;font-weight:600;padding:3px 10px}.status-badge.paid[data-v-a3c6311c]{background:#d4edda;color:#155724}.status-badge.sent[data-v-a3c6311c]{background:#d1ecf1;color:#0c5460}.status-badge.draft[data-v-a3c6311c]{background:#f8f9fa;color:#6c757d}.status-badge.overdue[data-v-a3c6311c]{background:#f8d7da;color:#721c24}.invoice-table[data-v-a3c6311c]{border-collapse:collapse;font-size:13px;margin:25px 0;width:100%}.invoice-table td[data-v-a3c6311c],.invoice-table th[data-v-a3c6311c]{border:1px solid #ddd;padding:10px}.invoice-table th[data-v-a3c6311c]{background-color:primary;color:#fff;font-weight:600;text-align:left}.invoice-table tbody tr[data-v-a3c6311c]:nth-child(2n){background-color:#f9f9f9}.invoice-table .text-center[data-v-a3c6311c]{text-align:center}.invoice-table .text-right[data-v-a3c6311c]{text-align:right}.subtotal-row td[data-v-a3c6311c],.tax-row td[data-v-a3c6311c]{background-color:#f8f9fa;font-weight:500}.total-row td[data-v-a3c6311c]{background-color:#e8f5e9;font-size:14px;font-weight:700}.amount-words[data-v-a3c6311c]{background-color:#f0f4ff;border-left:4px solid primary;font-size:14px;margin:20px 0;padding:15px}.invoice-notes[data-v-a3c6311c]{background-color:#fff9e6;border-radius:4px;font-size:13px;margin:20px 0;padding:15px}.invoice-footer[data-v-a3c6311c]{border-top:2px solid #ddd;display:flex;justify-content:space-between;margin-top:60px;padding-top:20px}.footer-section[data-v-a3c6311c]{font-size:12px}.footer-section p[data-v-a3c6311c]{margin:5px 0}.signature-area[data-v-a3c6311c]{text-align:center}.signature-line[data-v-a3c6311c]{border-top:2px solid #333;margin:80px 10px 15px;width:200px}.signature-label[data-v-a3c6311c]{color:#333;font-size:13px;font-weight:600;margin:8px 0}.signature-date[data-v-a3c6311c]{color:#666;font-size:12px}@media print{.invoice-container[data-v-a3c6311c]{padding:20px}.company-logo[data-v-a3c6311c]{max-height:80px;width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(442);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/voucher/index.vue?vue&type=template&id=a3c6311c&scoped=true










var vouchervue_type_template_id_a3c6311c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": "",
      "scrollable": "",
      "transition": "dialog-bottom-transition"
    },
    model: {
      value: _vm.visible,
      callback: function ($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_vm.hasValidData ? _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-printer")]), _vm._v(" "), _c('span', [_vm._v("ໃບແຈ້ງໜີ້ - Invoice")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_c('div', {
    staticClass: "invoice-container",
    attrs: {
      "id": "invoice-print-area"
    }
  }, [_c('div', {
    staticClass: "invoice-header"
  }, [_c('div', {
    staticClass: "header-flex"
  }, [_c('div', {
    staticClass: "header-left"
  }, [_vm.companyLogoUrl ? _c('img', {
    staticClass: "company-logo",
    attrs: {
      "src": _vm.companyLogoUrl,
      "alt": "Company Logo"
    },
    on: {
      "error": _vm.onLogoError
    }
  }) : _c('img', {
    staticClass: "company-logo fallback-logo",
    attrs: {
      "src": _vm.fallbackLogoUrl,
      "alt": "Company Logo"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "header-center"
  }, [_c('h2', {
    staticClass: "company-name"
  }, [_vm._v(_vm._s(_vm.companyName))]), _vm._v(" "), _c('p', {
    staticClass: "company-address"
  }, [_vm._v(_vm._s(_vm.companyAddress))]), _vm._v(" "), _c('p', {
    staticClass: "company-contact"
  }, [_vm._v(_vm._s(_vm.companyContact))])]), _vm._v(" "), _c('div', {
    staticClass: "header-right"
  }, [_c('div', {
    staticClass: "invoice-title"
  }, [_c('h3', [_vm._v("INVOICE")]), _vm._v(" "), _c('h4', [_vm._v("ໃບແຈ້ງໜີ້")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "invoice-info-grid"
  }, [_c('div', {
    staticClass: "info-section"
  }, [_c('h5', [_vm._v("Bill To:")]), _vm._v(" "), _c('p', {
    staticClass: "client-name"
  }, [_vm._v(_vm._s(_vm.getClientName))]), _vm._v(" "), _c('p', {
    staticClass: "client-details"
  }, [_vm._v(_vm._s(_vm.getClientDetails))])]), _vm._v(" "), _c('div', {
    staticClass: "info-section"
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Invoice No:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.safeInvoiceData.invoiceNumber || '-'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Invoice Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeInvoiceData.invoiceDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Due Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeInvoiceData.dueDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Status:")]), _vm._v(" "), _c('span', {
    class: ['status-badge', _vm.safeInvoiceData.status]
  }, [_vm._v("\n                " + _vm._s(_vm.getStatusLabel(_vm.safeInvoiceData.status)) + "\n              ")])])])]), _vm._v(" "), _c('table', {
    staticClass: "invoice-table"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "5%"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "40%"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("Quantity")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Unit Price")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("Tax")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "20%"
    }
  }, [_vm._v("Amount")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.safeLineItems, function (line, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.description || '-'))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatNumber(line.quantity)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.unitPrice)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.taxAmount)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.lineTotal)))])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "subtotal-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v("Subtotal:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.subtotal)))])])]), _vm._v(" "), _c('tr', {
    staticClass: "tax-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v("Total Tax:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalTax)))])])]), _vm._v(" "), _c('tr', {
    staticClass: "total-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v("Total Amount:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalAmount)))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "amount-words"
  }, [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.amountInWords) + "\n        ")]), _vm._v(" "), _vm.safeInvoiceData.description ? _c('div', {
    staticClass: "invoice-notes"
  }, [_c('strong', [_vm._v("Notes:")]), _vm._v(" " + _vm._s(_vm.safeInvoiceData.description) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "invoice-footer"
  }, [_c('div', {
    staticClass: "footer-section"
  }, [_c('p', [_c('strong', [_vm._v("Payment Terms:")]), _vm._v(" " + _vm._s(_vm.paymentTerms))]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Currency:")]), _vm._v(" " + _vm._s(_vm.getCurrencyInfo))])]), _vm._v(" "), _c('div', {
    staticClass: "footer-section signature-area"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Authorized Signature")]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("\n              Date: " + _vm._s(_vm.formatDate(_vm.safeInvoiceData.invoiceDate)) + "\n            ")])])])])]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        ປິດ\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.printInvoice
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n        ພິມ\n      ")], 1)], 1)], 1) : _c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center pa-8"
  }, [_vm.visible ? _c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary",
      "size": "64"
    }
  }) : _c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey lighten-1"
    }
  }, [_vm._v("\n        mdi-file-document-outline\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "mt-4 grey--text"
  }, [_vm._v("\n        " + _vm._s(_vm.visible ? 'ກຳລັງໂຫຼດຂໍ້ມູນ...' : 'ບໍ່ມີຂໍ້ມູນສຳລັບພິມ') + "\n      ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_vm._v("ປິດ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/voucher/index.vue?vue&type=template&id=a3c6311c&scoped=true

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/voucher/index.vue?vue&type=script&lang=js

/* harmony default export */ var vouchervue_type_script_lang_js = ({
  name: 'ARInvoicePrinter',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoiceData: {
      type: Object,
      required: false,
      default: null
    },
    agencies: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      logoLoadError: false,
      companies: [] // Store companies list
    };
  },
  computed: {
    companyDataV1() {
      console.log(`**********COMPANY DATA V1 PDFINVOICE ${api["b" /* mainCompanyInfo */]}**********`);
      let comV1 = Object(api["c" /* mainCompanyInfoV1 */])(this.$store);
      console.info(`Company data fetch from api V1 ${comV1}`);
      return comV1;
    },
    hasValidData() {
      return this.invoiceData && this.invoiceData.id;
    },
    safeInvoiceData() {
      return this.invoiceData || {};
    },
    safeLineItems() {
      return this.safeInvoiceData.lineItems || [];
    },
    // Company Logo Logic
    firstCompanyWithImage() {
      return this.companies.find(company => company.profile_image_path && company.isActive);
    },
    companyLogoUrl() {
      if (this.logoLoadError) return null;
      const firstCompany = this.firstCompanyWithImage;
      if (firstCompany && firstCompany.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || '';
        return `${baseUrl}/${firstCompany.profile_image_path}`;
      }
      return null;
    },
    fallbackLogoUrl() {
      // Return your default logo
      return __webpack_require__(163);
    },
    // Company information
    companyName() {
      return this.companyDataV1.name;
    },
    companyAddress() {
      return this.companyDataV1.address;
    },
    companyContact() {
      var _this$companyDataV, _this$companyDataV2;
      const tel = ((_this$companyDataV = this.companyDataV1) === null || _this$companyDataV === void 0 ? void 0 : _this$companyDataV.tel) || '+856 20 XXXX XXXX';
      const email = ((_this$companyDataV2 = this.companyDataV1) === null || _this$companyDataV2 === void 0 ? void 0 : _this$companyDataV2.email) || 'info@company.com';
      return `Tel: ${tel} | Email: ${email}`;
    },
    getClientName() {
      const agencyId = this.safeInvoiceData.agencyId;
      if (!agencyId) return '-';
      const agency = this.agencies.find(a => a.id === agencyId);
      return (agency === null || agency === void 0 ? void 0 : agency.agencyName) || (agency === null || agency === void 0 ? void 0 : agency.name) || '-';
    },
    getClientDetails() {
      const agencyId = this.safeInvoiceData.agencyId;
      if (!agencyId) return '';
      const agency = this.agencies.find(a => a.id === agencyId);
      if (!agency) return '';
      const parts = [];
      if (agency.address) parts.push(agency.address);
      if (agency.phone) parts.push(`Tel: ${agency.phone}`);
      if (agency.email) parts.push(`Email: ${agency.email}`);
      return parts.join(' | ');
    },
    getCurrencyInfo() {
      const currencyId = this.safeInvoiceData.currencyId;
      if (!currencyId) return 'USD';
      const currency = this.currencies.find(c => c.id === currencyId);
      return currency ? `${currency.name} (${currency.code})` : 'USD';
    },
    paymentTerms() {
      const invoiceDate = new Date(this.safeInvoiceData.invoiceDate);
      const dueDate = new Date(this.safeInvoiceData.dueDate);
      if (!isNaN(invoiceDate) && !isNaN(dueDate)) {
        const days = Math.round((dueDate - invoiceDate) / (1000 * 60 * 60 * 24));
        return `Net ${days} days`;
      }
      return 'Net 30 days';
    },
    subtotal() {
      return this.safeLineItems.reduce((sum, line) => {
        const qty = parseFloat(line.quantity) || 0;
        const price = parseFloat(line.unitPrice) || 0;
        return sum + qty * price;
      }, 0);
    },
    totalTax() {
      return this.safeLineItems.reduce((sum, line) => sum + (parseFloat(line.taxAmount) || 0), 0);
    },
    totalAmount() {
      return this.safeLineItems.reduce((sum, line) => sum + (parseFloat(line.lineTotal) || 0), 0);
    },
    amountInWords() {
      // Implement your number-to-words conversion
      return this.numberToWords(this.totalAmount) + ' Only';
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.loadCompanies();
      }
    }
  },
  methods: {
    // Load companies to get the first one with image
    async loadCompanies() {
      try {
        const response = await this.$axios.get('/api/company/findAll');
        this.companies = Array.isArray(response.data) ? response.data : [];
        console.log('Companies loaded for invoice:', this.companies.length);
      } catch (error) {
        console.error('Error loading companies for invoice:', error);
        this.companies = [];
      }
    },
    onLogoError() {
      console.warn('Company logo failed to load, using fallback');
      this.logoLoadError = true;
    },
    getStatusLabel(status) {
      const labels = {
        draft: 'Draft',
        sent: 'Sent',
        paid: 'Paid',
        overdue: 'Overdue'
      };
      return labels[status] || status || 'Unknown';
    },
    formatDate(date) {
      if (!date) return '-';
      try {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      } catch {
        return '-';
      }
    },
    formatNumber(value) {
      if (!value && value !== 0) return '0';
      return parseFloat(value).toLocaleString();
    },
    formatCurrency(value) {
      if (!value && value !== 0) return '$0.00';
      return `${parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    },
    numberToWords(num) {
      // Simplified number to words - you can expand this
      if (num === 0) return 'Zero';
      if (num < 1000) return `${Math.floor(num)} ${this.getCurrencyInfo}`;
      if (num < 1000000) return `${Math.floor(num / 1000)} Thousand ${this.getCurrencyInfo}`;
      return `${Math.floor(num / 1000000)} Million ${this.getCurrencyInfo}`;
    },
    printInvoice() {
      const printContent = document.getElementById('invoice-print-area');
      if (!printContent) {
        this.$toast.error('Print content not found');
        return;
      }
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
        <head>
          <title>Invoice - ${this.safeInvoiceData.invoiceNumber}</title>
          <style>
            * { 
              margin: 0; 
              padding: 0; 
              box-sizing: border-box; 
            }
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.4; 
              color: #333; 
            }
            .invoice-container { 
              background: white; 
              padding: 20px; 
              max-width: 900px; 
              margin: 0 auto; 
            }
            .invoice-header { 
              margin-bottom: 20px; 
              border-bottom: 3px solid primary; 
              padding-bottom: 15px; 
            }
            .header-flex { 
              display: flex; 
              align-items: center; 
              justify-content: space-between; 
              gap: 20px; 
            }
            .header-left { 
              flex-shrink: 0; 
            }
            .header-center { 
              flex: 1; 
              text-align: left; 
            }
            .header-right { 
              flex-shrink: 0; 
              text-align: right; 
            }
            .company-logo { 
              width: 100px; 
              height: auto; 
              object-fit: contain; 
              display: block; 
              max-height: 80px; 
            }
            .company-name { 
              margin: 0 0 8px 0; 
              font-size: 20px; 
              font-weight: bold; 
              color: primary; 
            }
            .company-address, .company-contact { 
              margin: 3px 0; 
              font-size: 11px; 
              color: #666; 
            }
            .invoice-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px; 
              color: #333; 
            }
            .invoice-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .invoice-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              margin: 20px 0; 
              padding: 15px; 
              background-color: #f9f9f9; 
              border-radius: 4px; 
            }
            .info-section h5 { 
              margin: 0 0 10px; 
              font-size: 12px; 
              font-weight: 600; 
              color: #333; 
              border-bottom: 1px solid #ddd; 
              padding-bottom: 5px; 
            }
            .client-name { 
              font-weight: 600; 
              font-size: 12px; 
              margin: 5px 0; 
            }
            .client-details { 
              font-size: 10px; 
              color: #666; 
              margin: 5px 0; 
            }
            .info-row { 
              display: flex; 
              padding: 3px 0; 
              font-size: 10px; 
            }
            .label { 
              font-weight: 600; 
              color: #333; 
              min-width: 80px; 
            }
            .value { 
              color: #666; 
            }
            .status-badge { 
              display: inline-block; 
              padding: 2px 8px; 
              border-radius: 10px; 
              font-size: 9px; 
              font-weight: 600; 
            }
            .status-badge.paid { 
              background: #d4edda; 
              color: #155724; 
            }
            .status-badge.sent { 
              background: #d1ecf1; 
              color: #0c5460; 
            }
            .status-badge.draft { 
              background: #f8f9fa; 
              color: #6c757d; 
            }
            .status-badge.overdue { 
              background: #f8d7da; 
              color: #721c24; 
            }
            .invoice-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .invoice-table th, .invoice-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .invoice-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .invoice-table .text-center { 
              text-align: center; 
            }
            .invoice-table .text-right { 
              text-align: right; 
            }
            .subtotal-row td, .tax-row td, .total-row td { 
              background-color: #f9f9f9; 
              font-size: 12px; 
            }
            .amount-words { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
              border-left: 3px solid primary; 
            }
            .invoice-notes { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #fff9e6; 
            }
            .invoice-footer { 
              display: flex; 
              justify-content: space-between; 
              margin-top: 40px; 
              padding-top: 20px; 
              border-top: 1px solid #ddd; 
            }
            .footer-section { 
              font-size: 12px; 
            }
            .signature-line { 
              border-top: 1px solid #000; 
              margin: 60px 20px 10px; 
              width: 200px; 
            }
            .signature-label { 
              font-weight: bold; 
              margin: 5px 0; 
            }
            .signature-date { 
              font-size: 11px; 
              color: #666; 
            }
          }
        </style>
      `);
      printWindow.document.write('</head><body>');
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/invoice/voucher/index.vue?vue&type=script&lang=js
 /* harmony default export */ var invoice_vouchervue_type_script_lang_js = (vouchervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/voucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(627)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_vouchervue_type_script_lang_js,
  vouchervue_type_template_id_a3c6311c_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "a3c6311c",
  "2f40ff48"
  
)

/* harmony default export */ var voucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/index.vue?vue&type=template&id=51dad720&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "invoice-audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"invoice-audit-dialog\" data-v-51dad720>", "</div>", [_vm._ssrNode("<div class=\"invoice-audit-dialog-header\" data-v-51dad720><div class=\"header-info\" data-v-51dad720><h3 data-v-51dad720><i class=\"fas fa-history\" data-v-51dad720></i>\n          ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້\n        </h3> " + (_vm.invoiceInfo ? "<p class=\"invoice-subtitle\" data-v-51dad720>" + _vm._ssrEscape("\n          ໃບແຈ້ງໜີ້: " + _vm._s(_vm.invoiceInfo.invoiceNumber) + " - \n          " + _vm._s(_vm.formatCurrency(_vm.invoiceInfo.totalAmount)) + " - \n          " + _vm._s(_vm.formatDate(_vm.invoiceInfo.invoiceDate)) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-51dad720><i class=\"fas fa-times\" data-v-51dad720></i></button></div> "), _vm._ssrNode("<div class=\"invoice-audit-dialog-body\" data-v-51dad720>", "</div>", [_c('invoice-audit-viewer', {
    ref: "invoiceAuditViewer",
    attrs: {
      "invoice-id": _vm.invoiceId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"invoice-audit-dialog-footer\" data-v-51dad720><button type=\"button\" class=\"btn btn-secondary\" data-v-51dad720><i class=\"fas fa-times\" data-v-51dad720></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-51dad720><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-51dad720>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-51dad720></i>" : "<i class=\"fas fa-download\" data-v-51dad720></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-51dad720><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-51dad720><i class=\"fas fa-caret-down\" data-v-51dad720></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-51dad720><button class=\"dropdown-item\" data-v-51dad720><i class=\"fas fa-code\" data-v-51dad720></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-51dad720><i class=\"fas fa-table\" data-v-51dad720></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-51dad720><i class=\"fas fa-print\" data-v-51dad720></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=template&id=51dad720&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js
var auditvue_type_script_lang_js = __webpack_require__(536);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js
 /* harmony default export */ var invoice_auditvue_type_script_lang_js = (auditvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(625)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_auditvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51dad720",
  "807c2816"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(787);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("587dbc5c", content, true, context)
};

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24aee5b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(602);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24aee5b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24aee5b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24aee5b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24aee5b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-24aee5b2]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-24aee5b2],.modal-overlay[data-v-24aee5b2]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-24aee5b2]{background:#fff;flex-direction:column;overflow:hidden}.modal-header[data-v-24aee5b2]{background:linear-gradient(135deg,primary,secondary);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;min-height:50px;padding:10px 15px}.modal-header[data-v-24aee5b2],.modal-title[data-v-24aee5b2]{align-items:center;display:flex}.modal-title[data-v-24aee5b2]{font-size:16px;font-weight:600;gap:8px;margin:0}.audit-btn[data-v-24aee5b2]{align-items:center;background:hsla(0,0%,100%,.2);border:1px solid hsla(0,0%,100%,.3);border-radius:4px;color:#fff;cursor:pointer;display:flex;font-size:12px;gap:4px;padding:4px 8px}.audit-btn[data-v-24aee5b2]:hover{background:hsla(0,0%,100%,.3)}.audit-text[data-v-24aee5b2]{font-size:11px}.close-button[data-v-24aee5b2]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;padding:4px;transition:background .2s}.close-button[data-v-24aee5b2]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-24aee5b2]{flex:1;overflow-y:auto}.loading-state[data-v-24aee5b2],.modal-body[data-v-24aee5b2]{display:flex;flex-direction:column}.loading-state[data-v-24aee5b2]{align-items:center;color:#666;justify-content:center;padding:30px}.spinner[data-v-24aee5b2]{animation:spin-24aee5b2 1s linear infinite;border:3px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:30px;margin-bottom:10px;width:30px}@keyframes spin-24aee5b2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.invoice-form[data-v-24aee5b2]{display:flex;flex:1;flex-direction:column}.form-section[data-v-24aee5b2]{border-bottom:1px solid #f0f0f0;padding:15px 20px}.section-header[data-v-24aee5b2]{justify-content:space-between;margin-bottom:12px}.section-header[data-v-24aee5b2],.section-title[data-v-24aee5b2]{align-items:center;display:flex}.section-title[data-v-24aee5b2]{border-bottom:1px solid #e9ecef;color:#333;font-size:14px;font-weight:600;gap:8px;margin:0 0 12px;padding-bottom:6px}.section-title i[data-v-24aee5b2]{color:#667eea;font-size:13px}.line-count[data-v-24aee5b2]{background:#667eea;border-radius:10px;color:#fff;font-size:11px;margin-left:4px;min-width:20px;padding:2px 8px;text-align:center}.add-line-actions[data-v-24aee5b2]{align-items:center;display:flex;gap:6px}.form-row[data-v-24aee5b2]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:10px;gap:10px;margin-bottom:12px}.form-group[data-v-24aee5b2]{margin-bottom:0}.form-group.full-width[data-v-24aee5b2]{grid-column:1/-1}.form-group label[data-v-24aee5b2]{color:#333;display:block;font-size:12px;font-weight:500;margin-bottom:3px}.form-group label.required[data-v-24aee5b2]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-24aee5b2]{border:1px solid #ddd;border-radius:4px;font-size:13px;line-height:1.2;padding:6px 8px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-24aee5b2]:focus{border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-24aee5b2]{border-color:#e74c3c;box-shadow:0 0 0 2px rgba(231,76,60,.1)}.form-control-xs[data-v-24aee5b2]{font-size:12px;padding:4px 6px}.textarea-compact[data-v-24aee5b2]{min-height:50px;resize:vertical}.invalid-feedback[data-v-24aee5b2]{color:#e74c3c;display:block;font-size:11px;margin-top:3px;width:100%}.empty-line-state[data-v-24aee5b2]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:6px;margin-top:12px;padding:30px 20px;text-align:center}.empty-content i[data-v-24aee5b2]{color:#dee2e6;font-size:40px;margin-bottom:12px}.empty-content h4[data-v-24aee5b2]{color:#666;font-size:15px;margin-bottom:8px}.line-items-table-container[data-v-24aee5b2]{border:1px solid #e9ecef;border-radius:6px;margin-top:12px;max-height:400px;overflow:hidden;overflow-y:auto}.line-items-table .table[data-v-24aee5b2]{border-collapse:collapse;margin:0;width:100%}.table-compact[data-v-24aee5b2]{font-size:12px}.line-items-table .table th[data-v-24aee5b2]{background:#f8f9fa;border-bottom:1px solid #dee2e6;font-size:11px;font-weight:600;padding:6px 4px;position:sticky;text-align:center;top:0;z-index:10}.line-items-table .table td[data-v-24aee5b2]{border-top:1px solid #dee2e6;font-size:11px;padding:4px;vertical-align:middle}.line-number[data-v-24aee5b2]{color:#666;font-weight:600;text-align:center}.line-total[data-v-24aee5b2],.tax-amount[data-v-24aee5b2]{color:#333;font-size:11px;font-weight:600;text-align:right}.line-row[data-v-24aee5b2]{transition:background-color .2s}.line-row[data-v-24aee5b2]:hover{background-color:rgba(102,126,234,.05)}.amount-summary[data-v-24aee5b2]{background:#f8f9fa;border-bottom:1px solid #f0f0f0;border-radius:0;border-top:2px solid #667eea;padding:12px 20px}.totals-compact[data-v-24aee5b2]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-gap:8px;gap:8px}.total-item[data-v-24aee5b2]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.total-item.grand-total[data-v-24aee5b2]{border-top:1px solid #667eea;font-size:13px;font-weight:600;grid-column:1/-1;margin-top:4px;padding-top:6px}.total-item .amount[data-v-24aee5b2]{color:#333;font-weight:600}.btn[data-v-24aee5b2]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:12px;gap:4px;line-height:1.2;padding:6px 12px;transition:all .2s ease}.btn-compact[data-v-24aee5b2]{font-size:12px;padding:5px 10px}.btn-sm[data-v-24aee5b2]{font-size:11px;padding:5px 10px}.btn-primary[data-v-24aee5b2]{background:#007bff;color:#fff}.btn-secondary[data-v-24aee5b2]{background:#6c757d;color:#fff}.btn-outline-secondary[data-v-24aee5b2]{background:#fff;border:1px solid #6c757d;color:#6c757d}.btn-danger[data-v-24aee5b2]{background:#dc3545;color:#fff}.btn-xs[data-v-24aee5b2]{align-items:center;border-radius:50%;display:flex;font-size:10px;height:24px;justify-content:center;padding:0;width:24px}.btn[data-v-24aee5b2]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-24aee5b2]:disabled{cursor:not-allowed;opacity:.6;transform:none}.modal-footer[data-v-24aee5b2]{background:#f8f9fa;border-top:1px solid #e9ecef;min-height:50px;padding:10px 15px}.footer-actions[data-v-24aee5b2]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.form-row[data-v-24aee5b2],.totals-compact[data-v-24aee5b2]{grid-template-columns:1fr}.section-header[data-v-24aee5b2]{align-items:flex-start;flex-direction:column;gap:8px}.add-line-actions[data-v-24aee5b2]{justify-content:flex-start;width:100%}.footer-actions[data-v-24aee5b2]{flex-direction:column}.footer-actions .btn[data-v-24aee5b2]{justify-content:center;width:100%}.line-items-table-container[data-v-24aee5b2]{overflow-x:auto}.line-items-table .table[data-v-24aee5b2]{min-width:600px}}@media (max-width:480px){.modal-header[data-v-24aee5b2]{padding:8px 10px}.modal-title[data-v-24aee5b2]{font-size:14px}.form-section[data-v-24aee5b2]{padding:12px 15px}.amount-summary[data-v-24aee5b2]{padding:10px 15px}.modal-footer[data-v-24aee5b2]{padding:8px 10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=24aee5b2&scoped=true




var maintainvue_type_template_id_24aee5b2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<div class=\"modal-header primary\" data-v-24aee5b2><h4 class=\"modal-title\" data-v-24aee5b2><i class=\"fas fa-file-invoice\" data-v-24aee5b2></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່') + "\n      ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-24aee5b2><i class=\"fas fa-times\" data-v-24aee5b2></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-24aee5b2>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-24aee5b2></div> <p data-v-24aee5b2>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"invoice-form\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<form data-v-24aee5b2>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-24aee5b2><i class=\"fas fa-info-circle\" data-v-24aee5b2></i>\n              ຂໍ້ມູນພື້ນຖານ\n            </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-24aee5b2><label for=\"invoiceNumber\" class=\"required\" data-v-24aee5b2>ເລກທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceNumber\" type=\"text\" placeholder=\"INV-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.invoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceNumber
  }) + " data-v-24aee5b2> " + (_vm.errors.invoiceNumber ? "<div class=\"invalid-feedback\" data-v-24aee5b2>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.invoiceNumber) + "\n                ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<label for=\"clientId\" class=\"required\" data-v-24aee5b2>" + _vm._ssrEscape(_vm._s(_vm.clientLabel)) + "</label> "), _c(VAutocomplete["a" /* default */], {
    staticClass: "mt-0",
    attrs: {
      "id": "agencyId",
      "items": _vm.agencies,
      "item-value": "id",
      "item-text": "name",
      "label": _vm.formLabel.vendor,
      "error": !!_vm.errors.agencyId,
      "error-messages": _vm.errors.agencyId,
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto"
    },
    on: {
      "change": _vm.onVendorChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                        " + _vm._s(item.name || item.agencyName) + "\n                        "), _c('span', {
          staticClass: "grey--text text-caption"
        }, [_vm._v("\n                          (" + _vm._s(item.code || item.agencyCode) + ")\n                        ")])])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                    " + _vm._s(item.name || item.agencyName) + " (" + _vm._s(item.code || item.agencyCode) + ")\n                  ")];
      }
    }], null, false, 866812987),
    model: {
      value: _vm.form.agencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "agencyId", $$v);
      },
      expression: "form.agencyId"
    }
  }), _vm._ssrNode(" " + (_vm.errors.agencyId ? "<div class=\"invalid-feedback\" data-v-24aee5b2>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.agencyId) + "\n                ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<label for=\"jobBatchId\" class=\"required\" data-v-24aee5b2>ແບັດຈັອບ</label> "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "id": "jobBatchId",
      "items": _vm.jobBatches,
      "item-value": "id",
      "item-text": "runningNo",
      "filter": _vm.jobBatchFilter,
      "error": !!_vm.errors.jobBatchId,
      "error-messages": _vm.errors.jobBatchId,
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto",
      "placeholder": "ເລືອກແບັດຈັອບ"
    },
    on: {
      "change": _vm.onBatchJobChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        var _item$mou;
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                        " + _vm._s(item.runningNo) + " (" + _vm._s(item.totalPositions || ((_item$mou = item.mou) === null || _item$mou === void 0 ? void 0 : _item$mou.jobTitle)) + ")\n                      ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        var _item$mou2;
        return [_vm._v("\n                    " + _vm._s(item.runningNo) + " (" + _vm._s(item.totalPositions || ((_item$mou2 = item.mou) === null || _item$mou2 === void 0 ? void 0 : _item$mou2.jobTitle)) + ")\n                  ")];
      }
    }], null, false, 1721893448),
    model: {
      value: _vm.form.jobBatchId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "jobBatchId", $$v);
      },
      expression: "form.jobBatchId"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<label for=\"status\" data-v-24aee5b2>ສະຖານະ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "status"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("ແບບຮ່າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sent"
    }
  }, [_vm._v("ສົ່ງແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("ຈ່າຍແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "overdue"
    }
  }, [_vm._v("ເກີນກຳນົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("ຍົກເລີກ")])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-24aee5b2><label for=\"invoiceDate\" class=\"required\" data-v-24aee5b2>ວັນທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.invoiceDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceDate
  }) + " data-v-24aee5b2> " + (_vm.errors.invoiceDate ? "<div class=\"invalid-feedback\" data-v-24aee5b2>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.invoiceDate) + "\n                ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-24aee5b2><label for=\"dueDate\" data-v-24aee5b2>ວັນທີຄົບກຳນົດ</label> <input id=\"dueDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.dueDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dueDate
  }) + " data-v-24aee5b2> " + (_vm.errors.dueDate ? "<div class=\"invalid-feedback\" data-v-24aee5b2>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.dueDate) + "\n                ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" data-v-24aee5b2>ສະກຸນເງິນ</label> "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "id": "currencyId",
      "items": _vm.currencies,
      "item-value": "id",
      "item-text": "name",
      "filter": _vm.currencyFilter,
      "error": !!_vm.errors.currencyId,
      "error-messages": _vm.errors.currencyId,
      "dense": "",
      "outlined": "",
      "clearable": "",
      "hide-details": "auto",
      "placeholder": "ເລືອກສະກຸນເງິນ"
    },
    on: {
      "change": _vm.onCurrencyChange
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                        " + _vm._s(item.name) + " (" + _vm._s(item.code) + ")\n                      ")])], 1)];
      }
    }, {
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                    " + _vm._s(item.name) + " (" + _vm._s(item.code) + ")\n                  ")];
      }
    }], null, false, 2423314344),
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-24aee5b2><label for=\"exchangeRate\" data-v-24aee5b2>ອັດຕາແລກປ່ຽນ</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + " class=\"form-control\" data-v-24aee5b2></div>")], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-24aee5b2><div class=\"form-group full-width\" data-v-24aee5b2><label for=\"description\" data-v-24aee5b2>ລາຍລະອຽດ</label> <textarea id=\"description\" rows=\"2\" placeholder=\"ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້...\" class=\"form-control textarea-compact\" data-v-24aee5b2>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div></div> " + (_vm.isEdit ? "<div class=\"form-row\" data-v-24aee5b2><div class=\"form-group full-width\" data-v-24aee5b2><label for=\"reason\" class=\"required\" data-v-24aee5b2>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-24aee5b2> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-24aee5b2>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.reason) + "\n                ") + "</div>" : "<!---->") + "</div></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-section\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<div class=\"section-header\" data-v-24aee5b2><h5 class=\"section-title\" data-v-24aee5b2><i class=\"fas fa-list\" data-v-24aee5b2></i>\n                ລາຍການສິນຄ້າ\n                " + (_vm.lineItems.length > 0 ? "<span class=\"line-count\" data-v-24aee5b2>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length)) + "</span>" : "<!---->") + "</h5> <div class=\"add-line-actions\" data-v-24aee5b2><button type=\"button\" class=\"btn btn-primary btn-sm\" data-v-24aee5b2><i class=\"fas fa-plus\" data-v-24aee5b2></i>\n                  ເພີ່ມລາຍການ\n                </button> <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" data-v-24aee5b2>\n                  +5\n                </button></div></div> "), _vm.lineItems.length === 0 ? _vm._ssrNode("<div class=\"empty-line-state\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<div class=\"empty-content\" data-v-24aee5b2><i class=\"fas fa-shopping-cart\" data-v-24aee5b2></i> <h4 data-v-24aee5b2>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4> <button type=\"button\" class=\"btn btn-primary\" data-v-24aee5b2><i class=\"fas fa-plus\" data-v-24aee5b2></i>\n                  ເພີ່ມລາຍການທຳອິດ\n                </button></div>")], 2) : _vm._ssrNode("<div class=\"line-items-table-container\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<div class=\"line-items-table\" data-v-24aee5b2>", "</div>", [_vm._ssrNode("<table class=\"table table-compact\" data-v-24aee5b2>", "</table>", [_vm._ssrNode("<thead data-v-24aee5b2><tr data-v-24aee5b2><th style=\"width: 20px\" data-v-24aee5b2>#</th> <th data-v-24aee5b2>ລາຍລະອຽດ *</th> <th data-v-24aee5b2>ລະຫັດການເງິນ*</th> <th data-v-24aee5b2>ລາຄາຕໍ່ຫົວ *</th> <th data-v-24aee5b2>ຈຳນວນ <span class=\"required\" data-v-24aee5b2>*</span></th> <th data-v-24aee5b2>ລວມຕໍ່ແຖວ</th> <th style=\"width: 40px\" data-v-24aee5b2>ລຶບ</th></tr></thead> "), _vm._ssrNode("<tbody data-v-24aee5b2>", "</tbody>", _vm._l(_vm.lineItems, function (line, index) {
    return _vm._ssrNode("<tr class=\"line-row\" data-v-24aee5b2>", "</tr>", [_vm._ssrNode("<td class=\"line-number\" data-v-24aee5b2>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-24aee5b2><input type=\"text\" placeholder=\"ລາຍລະອຽດສິນຄ້າ...\"" + _vm._ssrAttr("value", line.description) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_description`]
    }) + " data-v-24aee5b2></td> "), _vm._ssrNode("<td data-v-24aee5b2>", "</td>", [_c(VAutocomplete["a" /* default */], {
      staticClass: "mt-0",
      attrs: {
        "items": _vm.transactionCodes.filter(t => t.type === 'INCOME' && t.isActive),
        "item-value": "id",
        "item-text": "code",
        "label": _vm.loadingTransactionCodes ? 'ກຳລັງໂຫຼດ...' : 'ເລືອກລະຫັດການເງິນ',
        "loading": _vm.loadingTransactionCodes,
        "disabled": _vm.loadingTransactionCodes,
        "error": !line.txnId && _vm.errors.settlementLines,
        "dense": "",
        "outlined": "",
        "clearable": "",
        "hide-details": "auto"
      },
      scopedSlots: _vm._u([{
        key: "item",
        fn: function ({
          item
        }) {
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                                " + _vm._s(item.code) + " - " + _vm._s(item.description) + "\n                              ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                            " + _vm._s(item.code) + " - " + _vm._s(item.description) + "\n                          ")];
        }
      }], null, true),
      model: {
        value: line.txnId,
        callback: function ($$v) {
          _vm.$set(line, "txnId", $$v);
        },
        expression: "line.txnId"
      }
    }), _vm._ssrNode(" " + (!line.txnId && _vm.errors.settlementLines ? "<small class=\"text-danger d-block\" data-v-24aee5b2>\n                          ກະລຸນາເລືອກລະຫັດການເງິນ\n                        </small>" : "<!---->"))], 2), _vm._ssrNode(" <td data-v-24aee5b2><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.quantity) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_quantity`]
    }) + " data-v-24aee5b2></td> <td data-v-24aee5b2><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.unitPrice) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_unitPrice`]
    }) + " data-v-24aee5b2></td> "), _vm.enableGL ? _vm._ssrNode("<td data-v-24aee5b2>", "</td>", [_c(VAutocomplete["a" /* default */], {
      staticClass: "mt-0",
      attrs: {
        "items": _vm.glAccounts,
        "item-value": "id",
        "item-text": "accountNumber",
        "label": "DR Account",
        "error": !!_vm.errors[`line_${index}_DRglAccountId`],
        "dense": "",
        "outlined": "",
        "clearable": "",
        "hide-details": "auto"
      },
      scopedSlots: _vm._u([{
        key: "item",
        fn: function ({
          item
        }) {
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                                " + _vm._s(item.accountNumber) + " -\n                                " + _vm._s(item.accountName) + "\n                              ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                            " + _vm._s(item.accountNumber) + " - " + _vm._s(item.accountName) + "\n                          ")];
        }
      }], null, true),
      model: {
        value: line.DRglAccountId,
        callback: function ($$v) {
          _vm.$set(line, "DRglAccountId", $$v);
        },
        expression: "line.DRglAccountId"
      }
    }), _vm._ssrNode(" " + (_vm.errors[`line_${index}_DRglAccountId`] ? "<small class=\"text-danger d-block mt-1\" data-v-24aee5b2>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.errors[`line_${index}_DRglAccountId`]) + "\n                        ") + "</small>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm.enableGL ? _vm._ssrNode("<td data-v-24aee5b2>", "</td>", [_c(VAutocomplete["a" /* default */], {
      staticClass: "mt-0",
      attrs: {
        "items": _vm.glAccounts,
        "item-value": "id",
        "item-text": "accountNumber",
        "label": "CR Account",
        "error": !!_vm.errors[`line_${index}_CRglAccountId`],
        "dense": "",
        "outlined": "",
        "clearable": "",
        "hide-details": "auto"
      },
      scopedSlots: _vm._u([{
        key: "item",
        fn: function ({
          item
        }) {
          return [_c(VList["a" /* VListItemContent */], [_c(VList["c" /* VListItemTitle */], [_vm._v("\n                                " + _vm._s(item.accountNumber) + " -\n                                " + _vm._s(item.accountName) + "\n                              ")])], 1)];
        }
      }, {
        key: "selection",
        fn: function ({
          item
        }) {
          return [_vm._v("\n                            " + _vm._s(item.accountNumber) + " - " + _vm._s(item.accountName) + "\n                          ")];
        }
      }], null, true),
      model: {
        value: line.CRglAccountId,
        callback: function ($$v) {
          _vm.$set(line, "CRglAccountId", $$v);
        },
        expression: "line.CRglAccountId"
      }
    }), _vm._ssrNode(" " + (_vm.errors[`line_${index}_CRglAccountId`] ? "<small class=\"text-danger d-block mt-1\" data-v-24aee5b2>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.errors[`line_${index}_CRglAccountId`]) + "\n                        ") + "</small>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" <td class=\"line-total\" data-v-24aee5b2>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.lineTotal || 0)) + "\n                      ") + "</td> <td data-v-24aee5b2><button type=\"button\" title=\"ລຶບລາຍການ\" class=\"btn btn-xs btn-danger\" data-v-24aee5b2><i class=\"fas fa-trash\" data-v-24aee5b2></i></button></td>")], 2);
  }), 0)], 2)])])], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-24aee5b2><div class=\"totals-compact\" data-v-24aee5b2><div class=\"total-item\" data-v-24aee5b2><span data-v-24aee5b2>ລວມຍ່ອຍ:</span> <span class=\"amount\" data-v-24aee5b2>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-24aee5b2><span data-v-24aee5b2>ພາສີລວມ:</span> <span class=\"amount\" data-v-24aee5b2>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-24aee5b2><span data-v-24aee5b2>ຍອດສຸດທິ:</span> <span class=\"amount\" data-v-24aee5b2>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-24aee5b2><span data-v-24aee5b2>ລວມທັງໝົດ:</span> <span class=\"amount\" data-v-24aee5b2>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div>")], 2)])]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-24aee5b2><div class=\"footer-actions\" data-v-24aee5b2><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary btn-compact\" data-v-24aee5b2><i class=\"fas fa-times\" data-v-24aee5b2></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary btn-compact\" data-v-24aee5b2>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-24aee5b2></i>" : "<i class=\"fas fa-save\" data-v-24aee5b2></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button> " + (_vm.isEdit ? "<button type=\"button\" title=\"ພິມໃບແຈ້ງໜີ້\" class=\"btn btn-primary btn-compact\" data-v-24aee5b2><i class=\"fas fa-print\" data-v-24aee5b2></i> <span class=\"audit-text\" data-v-24aee5b2>ພິມ</span></button>" : "<!---->") + "</div></div>")], 2), _vm._ssrNode(" "), _c('invoice-audit-dialog', {
    attrs: {
      "visible": _vm.showAuditDialog,
      "invoice-id": _vm.form.id,
      "invoice-info": _vm.invoiceInfoForAudit
    },
    on: {
      "close": _vm.closeAuditDialog
    }
  }), _vm._ssrNode(" "), _c('a-r-invoice-printer', {
    attrs: {
      "visible": _vm.showInvoicePrinter,
      "invoice-data": _vm.selectedInvoice,
      "agencies": _vm.agencies,
      "currencies": _vm.currencies
    },
    on: {
      "close": function ($event) {
        _vm.showInvoicePrinter = false;
      }
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=24aee5b2&scoped=true

// EXTERNAL MODULE: ./components/accounting/ar/invoice/audit/index.vue + 3 modules
var audit = __webpack_require__(664);

// EXTERNAL MODULE: ./components/accounting/ar/invoice/voucher/index.vue + 4 modules
var voucher = __webpack_require__(653);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js


/* harmony default export */ var maintainvue_type_script_lang_js = ({
  name: 'InvoiceHeaderMaintain',
  components: {
    InvoiceAuditDialog: audit["default"],
    ARInvoicePrinter: voucher["default"]
  },
  props: {
    glAccounts: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: false
    },
    invoice: {
      type: Object,
      default: null
    },
    customers: {
      type: Array,
      default: () => []
    },
    agencies: {
      type: Array,
      default: () => []
    },
    jobBatches: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    preselectedBatchId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      transactionCodes: [],
      // Add this
      loadingTransactionCodes: false,
      // Add this
      selectedVendor: null,
      showAuditDialog: false,
      showInvoicePrinter: false,
      selectedInvoice: null,
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      lineItems: [],
      nextTempId: 1,
      selectedCustomer: null,
      selectedCurrency: null,
      form: {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        clientId: null,
        agencyId: null,
        jobBatchId: null,
        currencyId: null,
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
        status: 'draft',
        description: '',
        reason: ''
      }
    };
  },
  async mounted() {
    await this.loadTransactionCodes(); // Add this
  },
  computed: {
    formLabel() {
      return {
        vendor: `ເລືອກ ${this.clientLabel}`,
        model: ''
      };
    },
    clientLabel() {
      const item = this.getSPF.find(spf => spf.code == 'LABEL_AC_CUS');
      return (item === null || item === void 0 ? void 0 : item.value) || 'ກະຊວງ';
    },
    getSPF() {
      return this.$store.getters.findSPF;
    },
    enableBatchJobbutton() {
      const spf = this.getSPF.find(spf => spf.code === 'AC_AR_BATCH_JOB');
      return (spf === null || spf === void 0 ? void 0 : spf.value) === 'Y';
    },
    enableGL() {
      const spf = this.getSPF.find(spf => spf.code === 'AC_AR_GL_ENABLE');
      return (spf === null || spf === void 0 ? void 0 : spf.value) === 'Y';
    },
    getSPF() {
      return this.$store.getters.findSPF;
    },
    isEdit() {
      return !!(this.invoice && this.invoice.id);
    },
    user() {
      return this.$auth.user || '';
    },
    invoiceInfoForAudit() {
      if (!this.form.id) return null;
      return {
        invoiceNumber: this.form.invoiceNumber,
        totalAmount: this.calculatedTotal,
        invoiceDate: this.form.invoiceDate,
        status: this.form.status,
        clientId: this.form.clientId,
        agencyId: this.form.agencyId,
        jobBatchId: this.form.jobBatchId,
        currencyId: this.form.currencyId,
        description: this.form.description
      };
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal = (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0);
        return sum + subtotal;
      }, 0);
    },
    calculatedTax() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.taxAmount) || 0), 0);
    },
    calculatedNet() {
      return this.calculatedSubtotal;
    },
    calculatedTotal() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.lineTotal) || 0), 0);
    },
    isFormValid() {
      const hasValidHeader = this.form.invoiceNumber && this.form.invoiceDate && this.form.agencyId && (!this.isEdit || this.form.reason);
      const hasValidLines = this.lineItems.length > 0 && this.lineItems.every(line => line.description && (parseFloat(line.quantity) || 0) > 0 && (parseFloat(line.unitPrice) || 0) >= 0);
      return hasValidHeader && hasValidLines;
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
    preselectedBatchId: {
      handler(batchId) {
        if (batchId && this.visible && !this.isEdit) {
          this.$nextTick(() => {
            this.form.jobBatchId = batchId;
            this.onBatchJobChange();
          });
        }
      },
      immediate: true
    },
    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    }
  },
  methods: {
    // Print Invoice Method
    async loadTransactionCodes() {
      this.loadingTransactionCodes = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/transaction-codes', {
          params: {
            includeInactive: false,
            type: 'EXPENSE' // Filter only EXPENSE types for payments
          }
        });
        this.transactionCodes = data || [];
      } catch (error) {
        var _this$$toast;
        console.error('Error loading transaction codes:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('ໂຫລດລະຫັດການເງິນບໍ່ສຳເລັດ');
        this.transactionCodes = [];
      } finally {
        this.loadingTransactionCodes = false;
      }
    },
    getTransactionCodeLabel(txnId) {
      const txn = this.transactionCodes.find(t => t.id === txnId);
      return txn ? `${txn.code} - ${txn.description}` : '';
    },
    printInvoice() {
      if (!this.isEdit) {
        var _this$$toast2;
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.warning('ກະລຸນາບັນທຶກໃບແຈ້ງໜີ້ກ່ອນພິມ');
        return;
      }
      if (this.lineItems.length === 0) {
        var _this$$toast3;
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.warning('ບໍ່ມີລາຍການສຳລັບພິມ');
        return;
      }

      // Prepare complete invoice data
      const invoiceData = {
        id: this.form.id,
        invoiceNumber: this.form.invoiceNumber,
        invoiceDate: this.form.invoiceDate,
        dueDate: this.form.dueDate,
        agencyId: this.form.agencyId,
        jobBatchId: this.form.jobBatchId,
        currencyId: this.form.currencyId,
        exchangeRate: this.form.exchangeRate,
        status: this.form.status,
        description: this.form.description || '',
        lineItems: this.lineItems.map(line => ({
          description: line.description || '-',
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxAmount: parseFloat(line.taxAmount) || 0,
          lineTotal: parseFloat(line.lineTotal) || 0
        }))
      };

      // Set data first, then open dialog
      this.selectedInvoice = invoiceData;

      // Use nextTick to ensure data is set before dialog opens
      this.$nextTick(() => {
        this.showInvoicePrinter = true;
      });
    },
    async requestSequence() {
      try {
        const {
          data
        } = await this.$axios.get('/api/ar-invoices/sequence');
        if (data.success) {
          this.form.invoiceNumber = data.data.invoiceNumber;
          this.$message.success(`Invoice number generated: ${data.data.invoiceNumber}`);
          return data.data.invoiceNumber;
        }
      } catch (error) {
        console.error('Error getting invoice sequence:', error);
        this.$message.error('Failed to generate invoice number');
        throw error;
      }
    },
    updateSelectedVendor() {
      if (this.form.agencyId && this.agencies.length > 0) {
        this.selectedVendor = this.agencies.find(v => v.id === this.form.agencyId);
      } else {
        this.selectedVendor = null;
      }
    },
    onVendorChange() {
      this.updateSelectedVendor();
      this.calculateDueDate();
      this.clearFieldError('agencyId');
    },
    openAuditDialog() {
      console.warn(`Opening dialog`);
      this.showAuditDialog = true;
    },
    closeAuditDialog() {
      this.showAuditDialog = false;
    },
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          invoiceDate: this.invoice.invoiceDate ? this.invoice.invoiceDate.split('T')[0] : '',
          dueDate: this.invoice.dueDate ? this.invoice.dueDate.split('T')[0] : '',
          agencyId: this.invoice.agencyId,
          jobBatchId: this.invoice.jobBatchId,
          currencyId: this.invoice.currencyId,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          totalAmount: this.invoice.totalAmount || 0.0,
          taxAmount: this.invoice.taxAmount || 0.0,
          netAmount: this.invoice.netAmount || 0.0,
          status: this.invoice.status || 'draft',
          description: this.invoice.description || '',
          reason: ''
        };
        await this.loadLineItems(this.invoice.id);
      } else {
        this.resetForm();
        this.form.invoiceDate = new Date().toISOString().split('T')[0];
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        this.form.dueDate = dueDate.toISOString().split('T')[0];
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'USD') || this.currencies[0];
          this.form.currencyId = defaultCurrency.id;
          this.selectedCurrency = defaultCurrency;
        }
        this.lineItems = [this.createEmptyLine()];
        this.requestSequence();
      }
      this.updateSelectedCustomer();
      this.updateSelectedCurrency();
    },
    resetDialog() {
      this.resetForm();
      this.lineItems = [];
      this.selectedCustomer = null;
      this.selectedCurrency = null;
      this.selectedInvoice = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
    },
    async loadLineItems(invoiceId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${invoiceId}`);
        this.lineItems = data.data || [this.createEmptyLine()];
        this.lineItems.forEach(line => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++;
          }
        });
      } catch (error) {
        console.error('Error loading line items:', error);
        this.lineItems = [this.createEmptyLine()];
      }
    },
    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        DRglAccountId: null,
        CRglAccountId: null,
        txnId: null,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0
      };
    },
    addNewLine() {
      this.lineItems.push(this.createEmptyLine());
    },
    addMultipleLines(count) {
      for (let i = 0; i < count; i++) {
        this.lineItems.push(this.createEmptyLine());
      }
    },
    removeLine(index) {
      if (this.lineItems.length > 1) {
        this.lineItems.splice(index, 1);
        this.updateLineNumbers();
      }
    },
    updateLineNumbers() {
      this.lineItems.forEach((line, index) => {
        line.lineNumber = index + 1;
      });
    },
    calculateLineTotal(line) {
      const quantity = parseFloat(line.quantity) || 0;
      const unitPrice = parseFloat(line.unitPrice) || 0;
      const taxRate = parseFloat(line.taxRate) || 0;
      const subtotal = quantity * unitPrice;
      const taxAmount = subtotal * (taxRate / 100);
      line.taxAmount = taxAmount;
      line.lineTotal = subtotal + taxAmount;
    },
    updateSelectedCustomer() {
      if (this.form.agencyId && this.agencies.length > 0) {
        this.selectedCustomer = this.agencies.find(c => c.id === this.form.agencyId);
      } else {
        this.selectedCustomer = null;
      }
    },
    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
        this.form.exchangeRate = this.currencies.find(c => c.id === this.form.currencyId).rate;
      } else {
        this.selectedCurrency = null;
      }
    },
    onCustomerChange() {
      this.updateSelectedCustomer();
      this.calculateDueDate();
      this.clearFieldError('agencyId');
    },
    onBatchJobChange() {
      this.clearFieldError('jobBatchId');
      if (!this.form.jobBatchId) {
        return;
      }
      const selectedBatch = this.jobBatches.find(batch => batch.id === this.form.jobBatchId);
      if (!selectedBatch) {
        return;
      }
      if (this.lineItems.length > 0 && this.lineItems.some(line => line.description)) {
        const shouldClear = confirm('ມີລາຍການສິນຄ້າຢູ່ແລ້ວ. ທ່ານຕ້ອງການແທນທີ່ດ້ວຍລາຍການຈາກ Job Batch ບໍ?');
        if (!shouldClear) {
          return;
        }
      }
      this.lineItems = [];
      const mou = selectedBatch.mou;
      if (!mou) {
        this.showToast('ບໍ່ພົບຂໍ້ມູນ MOU ສຳລັບ Job Batch ນີ້', 'warning');
        this.lineItems = [this.createEmptyLine()];
        return;
      }
      const pmCharge = parseFloat(mou.pmCharge) || 0;
      const numberOfWorkers = parseFloat(mou.numberOfWorkers) || 1;
      const unitPrice = numberOfWorkers > 0 ? pmCharge / numberOfWorkers : pmCharge;
      const quantity = parseFloat(selectedBatch.totalPositions) || 0;
      if (mou.currencyId) {
        this.form.currencyId = mou.currencyId;
        this.updateSelectedCurrency();
      }
      const recruitmentLine = {
        tempId: this.nextTempId++,
        lineNumber: 1,
        description: `ຄ່າບໍລິການຮັບສະໝັກງານ - ${mou.jobTitle || 'N/A'} (${selectedBatch.runningNo}) - ${mou.employerCompany || ''}`,
        quantity: quantity,
        unitPrice: unitPrice,
        DRglAccountId: null,
        CRglAccountId: null,
        txnId: null,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0
      };
      this.calculateLineTotal(recruitmentLine);
      this.lineItems.push(recruitmentLine);
      this.updateLineNumbers();
      this.showToast(`ເພີ່ມລາຍການຈາກ Job Batch ${selectedBatch.runningNo} ສຳເລັດແລ້ວ (${quantity} ຕຳແໜ່ງ × ${this.formatCurrency(unitPrice)})`, 'success');
      this.activeTab = 'lines';
    },
    onCurrencyChange() {
      this.updateSelectedCurrency();
      this.clearFieldError('currencyId');
    },
    calculateDueDate() {
      var _this$selectedCustome;
      if (this.form.invoiceDate && (_this$selectedCustome = this.selectedCustomer) !== null && _this$selectedCustome !== void 0 && _this$selectedCustome.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(invoiceDate);
        dueDate.setDate(dueDate.getDate() + parseInt(this.selectedCustomer.paymentTerms));
        this.form.dueDate = dueDate.toISOString().split('T')[0];
      }
    },
    validateForm() {
      this.errors = {};
      if (!this.form.invoiceNumber) {
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້';
      }
      if (!this.form.agencyId) {
        this.errors.agencyId = 'ກະລຸນາເລືອກລູກຄ້າ';
      }
      if (!this.form.invoiceDate) {
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້';
      }
      if (this.form.invoiceDate && this.form.dueDate) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(this.form.dueDate);
        if (dueDate <= invoiceDate) {
          this.errors.dueDate = 'ວັນທີຄົບກຳນົດຕ້ອງຫຼັງຈາກວັນທີໃບແຈ້ງໜີ້';
        }
      }
      if (this.lineItems.length === 0) {
        this.errors.lineItems = 'ກະລຸນາເພີ່ມລາຍການສິນຄ້າຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        for (let i = 0; i < this.lineItems.length; i++) {
          const line = this.lineItems[i];
          if (!line.description) {
            this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ';
          }
          if (!line.quantity || parseFloat(line.quantity) <= 0) {
            this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0';
          }
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0) {
            this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ';
          }
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
        if (Object.keys(this.errors).some(key => key.startsWith('line_'))) {
          this.activeTab = 'lines';
        } else {
          this.activeTab = 'header';
        }
        return;
      }
      this.saving = true;
      const formData = {
        ...this.form,
        totalAmount: this.calculatedTotal,
        taxAmount: this.calculatedTax,
        netAmount: this.calculatedNet,
        updateUserId: this.user.id,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxRate: parseFloat(line.taxRate) || 0
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
      this.form = {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        clientId: null,
        jobBatchId: null,
        currencyId: null,
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
        status: 'draft',
        description: '',
        reason: ''
      };
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        this.$toast[type](message);
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`);
        }
      }
    },
    // Add missing filter methods if not present
    jobBatchFilter(item, queryText) {
      var _item$mou;
      const searchText = queryText.toLowerCase();
      return item.runningNo.toLowerCase().includes(searchText) || ((_item$mou = item.mou) === null || _item$mou === void 0 ? void 0 : _item$mou.jobTitle) && item.mou.jobTitle.toLowerCase().includes(searchText);
    },
    currencyFilter(item, queryText) {
      const searchText = queryText.toLowerCase();
      return item.name.toLowerCase().includes(searchText) || item.code.toLowerCase().includes(searchText);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js
 /* harmony default export */ var invoice_maintainvue_type_script_lang_js = (maintainvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(673)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_maintainvue_type_script_lang_js,
  maintainvue_type_template_id_24aee5b2_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "24aee5b2",
  "6adf3fc7"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_490a57d4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".date-field-wrapper[data-v-490a57d4]{display:flex;flex-direction:column}.date-label[data-v-490a57d4]{align-items:center;color:rgba(0,0,0,.6);display:flex;font-size:12px;font-weight:500;margin-bottom:4px}.date-input[data-v-490a57d4]{background:#fff;border:1px solid rgba(0,0,0,.38);border-radius:4px;font-family:inherit;font-size:14px;padding:9px 12px;transition:all .2s}.date-input[data-v-490a57d4]:hover{border-color:rgba(0,0,0,.87)}.date-input[data-v-490a57d4]:focus{border-color:#1976d2;border-width:2px;outline:none;padding:8px 11px}.date-input[data-v-490a57d4]:disabled{background:#f5f5f5;cursor:not-allowed;opacity:.6}.maintenance-dialog[data-v-490a57d4]{display:flex;flex-direction:column;height:100vh}.section-header[data-v-490a57d4]{align-items:center;border-bottom:2px solid #e3f2fd;display:flex;margin-bottom:12px;padding-bottom:8px}.section-title[data-v-490a57d4]{color:#1976d2;font-size:.95rem;font-weight:600;letter-spacing:.5px;text-transform:uppercase}.mou-summary-card[data-v-490a57d4]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:8px;overflow:hidden}.mou-summary-card .summary-header[data-v-490a57d4]{align-items:center;background:hsla(0,0%,100%,.2);color:#fff;display:flex;font-size:15px;font-weight:600;padding:12px 16px}.mou-summary-card .summary-content[data-v-490a57d4]{background:#fff;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));padding:16px;grid-gap:12px;gap:12px}.mou-summary-card .summary-row[data-v-490a57d4]{display:flex;flex-direction:column;gap:4px}.mou-summary-card .summary-row strong[data-v-490a57d4]{color:#6b7280;font-size:12px;font-weight:600}.mou-summary-card .summary-row span[data-v-490a57d4]{color:#1f2937;font-size:14px;font-weight:500}.form-container[data-v-490a57d4]{background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.1);margin:0 auto;max-width:1400px;padding:16px!important}.v-chip--x-small[data-v-490a57d4]{font-size:10px!important;height:20px!important}.v-select--outlined[data-v-490a57d4] .v-input__control>.v-input__slot,.v-text-field--outlined[data-v-490a57d4] .v-input__control>.v-input__slot,.v-textarea[data-v-490a57d4] .v-input__control>.v-input__slot{min-height:40px!important}.v-toolbar--dense[data-v-490a57d4]{height:24px!important;min-height:24px!important}.v-toolbar--dense .v-toolbar__content[data-v-490a57d4]{height:24px!important;padding:4px 16px}.v-input--dense[data-v-490a57d4] .v-messages{min-height:0!important}.v-text-field[data-v-490a57d4] .v-text-field__details{margin-bottom:0!important;padding-top:2px!important}.v-alert--dense[data-v-490a57d4]{padding:12px!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1557101a", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map