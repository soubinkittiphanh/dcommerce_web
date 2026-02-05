exports.ids = [66];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(496);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("735d40bc", content, true)

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(130);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
// Styles
 // Extensions

 // Components

 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-file-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    chips: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    counterSizeString: {
      type: String,
      default: '$vuetify.fileInput.counterSize'
    },
    counterString: {
      type: String,
      default: '$vuetify.fileInput.counter'
    },
    hideInput: Boolean,
    multiple: Boolean,
    placeholder: String,
    prependIcon: {
      type: String,
      default: '$file'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: [Boolean, Number],
      default: false,
      validator: v => {
        return typeof v === 'boolean' || [1000, 1024].includes(v);
      }
    },
    smallChips: Boolean,
    truncateLength: {
      type: [Number, String],
      default: 22
    },
    type: {
      type: String,
      default: 'file'
    },
    value: {
      default: undefined,
      validator: val => {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(val).every(v => v != null && typeof v === 'object');
      }
    }
  },
  computed: {
    classes() {
      return {
        ..._VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-file-input': true
      };
    },
    computedCounterValue() {
      const fileCount = this.multiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
      if (!this.showSize) return this.$vuetify.lang.t(this.counterString, fileCount);
      const bytes = this.internalArrayValue.reduce((bytes, {
        size = 0
      }) => {
        return bytes + size;
      }, 0);
      return this.$vuetify.lang.t(this.counterSizeString, fileCount, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(bytes, this.base === 1024));
    },
    internalArrayValue() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(this.internalValue);
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(val) {
        this.lazyValue = val;
        this.$emit('change', this.lazyValue);
      }
    },
    isDirty() {
      return this.internalArrayValue.length > 0;
    },
    isLabelActive() {
      return this.isDirty;
    },
    text() {
      if (!this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel)) return [this.placeholder];
      return this.internalArrayValue.map(file => {
        const {
          name = '',
          size = 0
        } = file;
        const truncatedText = this.truncateText(name);
        return !this.showSize ? truncatedText : `${truncatedText} (${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(size, this.base === 1024)})`;
      });
    },
    base() {
      return typeof this.showSize !== 'boolean' ? this.showSize : undefined;
    },
    hasChips() {
      return this.chips || this.smallChips;
    }
  },
  watch: {
    readonly: {
      handler(v) {
        if (v === true) Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* consoleError */ "b"])('readonly is not supported on <v-file-input>', this);
      },
      immediate: true
    },
    value(v) {
      const value = this.multiple ? v : v ? [v] : [];
      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* deepEqual */ "k"])(value, this.$refs.input.files)) {
        // When the input value is changed programatically, clear the
        // internal input's value so that the `onInput` handler
        // can be triggered again if the user re-selects the exact
        // same file(s). Ideally, `input.files` should be
        // manipulated directly but that property is readonly.
        this.$refs.input.value = '';
      }
    }
  },
  methods: {
    clearableCallback() {
      this.internalValue = this.multiple ? [] : null;
      this.$refs.input.value = '';
    },
    genChips() {
      if (!this.isDirty) return [];
      return this.text.map((text, index) => this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          small: this.smallChips
        },
        on: {
          'click:close': () => {
            const internalValue = this.internalValue;
            internalValue.splice(index, 1);
            this.internalValue = internalValue; // Trigger the watcher
          }
        }
      }, [text]));
    },
    genControl() {
      const render = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControl.call(this);
      if (this.hideInput) {
        render.data.style = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_5__[/* mergeStyles */ "d"])(render.data.style, {
          display: 'none'
        });
      }
      return render;
    },
    genInput() {
      const input = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.data.attrs.multiple = this.multiple; // We should not be setting value
      // programmatically on the input
      // when it is using type="file"

      delete input.data.domProps.value; // This solves an issue in Safari where
      // nothing happens when adding a file
      // due to the input event not firing
      // https://github.com/vuetifyjs/vuetify/issues/7941

      delete input.data.on.input;
      input.data.on.change = this.onInput;
      return [this.genSelections(), input];
    },
    genPrependSlot() {
      if (!this.prependIcon) return null;
      const icon = this.genIcon('prepend', () => {
        this.$refs.input.click();
      });
      return this.genSlot('prepend', 'outer', [icon]);
    },
    genSelectionText() {
      const length = this.text.length;
      if (length < 2) return this.text;
      if (this.showSize && !this.counter) return [this.computedCounterValue];
      return [this.$vuetify.lang.t(this.counterString, length)];
    },
    genSelections() {
      const children = [];
      if (this.isDirty && this.$scopedSlots.selection) {
        this.internalArrayValue.forEach((file, index) => {
          if (!this.$scopedSlots.selection) return;
          children.push(this.$scopedSlots.selection({
            text: this.text[index],
            file,
            index
          }));
        });
      } else {
        children.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText());
      }
      return this.$createElement('div', {
        staticClass: 'v-file-input__text',
        class: {
          'v-file-input__text--placeholder': this.placeholder && !this.isDirty,
          'v-file-input__text--chips': this.hasChips && !this.$scopedSlots.selection
        }
      }, children);
    },
    genTextFieldSlot() {
      const node = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genTextFieldSlot.call(this);
      node.data.on = {
        ...(node.data.on || {}),
        click: e => {
          // Clicking the label already delegates to input element, so we shouldn't click it twice
          if (e.target && e.target.nodeName === 'LABEL') return;
          this.$refs.input.click();
        }
      };
      return node;
    },
    onInput(e) {
      const files = [...(e.target.files || [])];
      this.internalValue = this.multiple ? files : files[0]; // Set initialValue here otherwise isFocused
      // watcher in VTextField will emit a change
      // event whenever the component is blurred

      this.initialValue = this.internalValue;
    },
    onKeyDown(e) {
      this.$emit('keydown', e);
    },
    truncateText(str) {
      if (str.length < Number(this.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(this.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }
  }
}));

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ImageUpload',
  props: {
    // Image display
    imagePath: {
      type: String,
      default: null
    },
    baseUrl: {
      type: String,
      default: ''
    },
    imageDisplaySize: {
      type: [String, Number],
      default: 200
    },
    imageDisplayHeight: {
      type: [String, Number],
      default: 150
    },
    // Upload configuration
    entityId: {
      type: [String, Number],
      required: true
    },
    uploadEndpoint: {
      type: String,
      required: true
    },
    deleteEndpoint: {
      type: String,
      default: ''
    },
    acceptedTypes: {
      type: String,
      default: 'image/*'
    },
    maxSizeMB: {
      type: Number,
      default: 5
    },
    // UI Configuration
    showHeader: {
      type: Boolean,
      default: true
    },
    showUploadSection: {
      type: Boolean,
      default: true
    },
    allowDelete: {
      type: Boolean,
      default: true
    },
    showGuidelines: {
      type: Boolean,
      default: true
    },
    // Text customization
    headerText: {
      type: String,
      default: 'ຮູບໂປຣໄຟລ໌'
    },
    uploadLabel: {
      type: String,
      default: 'ເລືອກຮູບໃໝ່'
    },
    previewLabel: {
      type: String,
      default: 'ຕົວຢ່າງຮູບທີ່ເລືອກ:'
    },
    placeholderText: {
      type: String,
      default: 'ບໍ່ມີຮູບ'
    },
    uploadButtonText: {
      type: String,
      default: 'ອັບໂຫລດຮູບ'
    },
    deleteButtonText: {
      type: String,
      default: 'ລຶບ'
    },
    uploadingText: {
      type: String,
      default: 'ກຳລັງອັບໂຫລດ...'
    },
    cancelButtonText: {
      type: String,
      default: 'ຍົກເລີກ'
    },
    // Icons
    headerIcon: {
      type: String,
      default: 'mdi-image-outline'
    },
    uploadIcon: {
      type: String,
      default: 'mdi-camera'
    },
    placeholderIcon: {
      type: String,
      default: 'mdi-image-outline'
    }
  },
  data() {
    return {
      selectedFile: null,
      previewUrl: null,
      uploading: false,
      deleting: false
    };
  },
  computed: {
    currentImageUrl() {
      if (this.imagePath) {
        return this.baseUrl ? `${this.baseUrl}/${this.imagePath}` : `/${this.imagePath}`;
      }
      return null;
    },
    canUpload() {
      return this.entityId && this.uploadEndpoint;
    },
    guidelines() {
      const types = this.acceptedTypes.replace('image/', '').replace('*', 'JPG, PNG, GIF').toUpperCase();
      return `• ຮອງຮັບໄຟລ໌: ${types}<br>• ຂະໜາດສູງສຸດ: ${this.maxSizeMB}MB<br>• ແນະນຳຂະໜາດ: 400x400px`;
    }
  },
  methods: {
    onFileSelected(file) {
      if (file) {
        try {
          this.validateFile(file);
          this.previewUrl = URL.createObjectURL(file);
        } catch (error) {
          this.$toast.error(error.message);
          this.clearSelectedFile();
        }
      } else {
        this.clearSelectedFile();
      }
    },
    validateFile(file) {
      // Validate file type
      if (this.acceptedTypes !== 'image/*') {
        const allowedTypes = this.acceptedTypes.split(',').map(type => type.trim());
        if (!allowedTypes.includes(file.type)) {
          throw new Error('ປະເພດໄຟລ໌ບໍ່ຮອງຮັບ');
        }
      } else {
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
          throw new Error('ກະລຸນາເລືອກໄຟລ໌ຮູບພາບ (JPG, PNG, GIF)');
        }
      }

      // Validate file size
      const maxSize = this.maxSizeMB * 1024 * 1024;
      if (file.size > maxSize) {
        throw new Error(`ຂະໜາດໄຟລ໌ໃຫຍ່ເກີນໄປ (ສູງສຸດ ${this.maxSizeMB}MB)`);
      }
    },
    clearSelectedFile() {
      this.selectedFile = null;
      if (this.previewUrl) {
        URL.revokeObjectURL(this.previewUrl);
        this.previewUrl = null;
      }
      if (this.$refs.fileInput) {
        this.$refs.fileInput.reset();
      }
    },
    async handleUpload() {
      if (!this.selectedFile || !this.canUpload) return;
      this.uploading = true;
      try {
        const formData = new FormData();
        formData.append('profile_image', this.selectedFile);
        const response = await this.$axios.post(this.uploadEndpoint.replace(':id', this.entityId), formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.$toast.success('ອັບໂຫລດຮູບສຳເລັດແລ້ວ');
        this.clearSelectedFile();

        // Emit success event with response data
        this.$emit('upload-success', response.data);
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Upload error:', error);
        const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ອັບໂຫລດຮູບບໍ່ສຳເລັດ';
        this.$toast.error(errorMessage);
        this.$emit('upload-error', error);
      } finally {
        this.uploading = false;
      }
    },
    async handleDelete() {
      if (!this.deleteEndpoint) {
        this.$emit('delete-requested');
        return;
      }
      try {
        const result = await this.$swal.fire({
          title: 'ຢືນຢັນການລຶບ',
          text: 'ທ່ານຕ້ອງການລຶບຮູບນີ້ແທ້ບໍ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ລຶບ',
          cancelButtonText: 'ຍົກເລີກ'
        });
        if (result.isConfirmed) {
          this.deleting = true;
          await this.$axios.delete(this.deleteEndpoint.replace(':id', this.entityId));
          this.$toast.success('ລຶບຮູບສຳເລັດແລ້ວ');
          this.$emit('delete-success');
        }
      } catch (error) {
        var _error$response2, _error$response2$data;
        console.error('Delete error:', error);
        const errorMessage = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || 'ລຶບຮູບບໍ່ສຳເລັດ';
        this.$toast.error(errorMessage);
        this.$emit('delete-error', error);
      } finally {
        this.deleting = false;
      }
    }
  },
  beforeDestroy() {
    // Clean up preview URL
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(413)["URL"]))

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(879);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("508cf42a", content, true, context)
};

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_style_index_0_id_00b32072_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_style_index_0_id_00b32072_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_style_index_0_id_00b32072_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_style_index_0_id_00b32072_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_style_index_0_id_00b32072_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-preview-container[data-v-00b32072]{min-height:150px}.profile-image[data-v-00b32072]{border-radius:8px}.preview-image[data-v-00b32072]{border:1px solid #e0e0e0;border-radius:4px}.v-file-input[data-v-00b32072]{margin-bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js
var VSubheader = __webpack_require__(132);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageUpload.vue?vue&type=template&id=00b32072&scoped=true













var ImageUploadvue_type_template_id_00b32072_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "image-upload-component"
  }, [_vm.showHeader ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDivider["a" /* default */], {
    staticClass: "my-4"
  }), _vm._v(" "), _c(VSubheader["a" /* default */], {
    staticClass: "pl-0"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v(_vm._s(_vm.headerIcon))]), _vm._v("\n        " + _vm._s(_vm.headerText) + "\n      ")], 1)], 1)], 1) : _vm._e(), _vm._ssrNode(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": _vm.showUploadSection ? 6 : 12
    }
  }, [_c('div', {
    staticClass: "image-preview-container"
  }, [_vm.currentImageUrl ? _c(VCard["a" /* default */], {
    staticClass: "mx-auto",
    attrs: {
      "max-width": _vm.imageDisplaySize,
      "elevation": "2"
    }
  }, [_c(VImg["a" /* default */], {
    staticClass: "profile-image",
    attrs: {
      "src": _vm.currentImageUrl,
      "height": _vm.imageDisplayHeight,
      "cover": ""
    },
    scopedSlots: _vm._u([{
      key: "placeholder",
      fn: function () {
        return [_c(VRow["a" /* default */], {
          staticClass: "fill-height ma-0",
          attrs: {
            "align": "center",
            "justify": "center"
          }
        }, [_c(VProgressCircular["a" /* default */], {
          attrs: {
            "indeterminate": "",
            "color": "grey lighten-5"
          }
        })], 1)];
      },
      proxy: true
    }], null, false, 4034393411)
  }), _vm._v(" "), _vm.allowDelete ? _c(components_VCard["a" /* VCardActions */], {
    staticClass: "justify-center"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "text": "",
      "small": "",
      "loading": _vm.deleting
    },
    on: {
      "click": _vm.handleDelete
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-delete")]), _vm._v("\n              " + _vm._s(_vm.deleteButtonText) + "\n            ")], 1)], 1) : _vm._e()], 1) : _c(VCard["a" /* default */], {
    staticClass: "mx-auto d-flex align-center justify-center",
    attrs: {
      "max-width": _vm.imageDisplaySize,
      "height": _vm.imageDisplayHeight,
      "elevation": "1",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey lighten-2"
    }
  }, [_vm._v(_vm._s(_vm.placeholderIcon))]), _vm._v(" "), _c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v(_vm._s(_vm.placeholderText))])], 1)])], 1)]), _vm._v(" "), _vm.showUploadSection ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "fileInput",
    attrs: {
      "accept": _vm.acceptedTypes,
      "label": _vm.uploadLabel,
      "prepend-icon": _vm.uploadIcon,
      "show-size": "",
      "disabled": _vm.uploading,
      "clearable": ""
    },
    on: {
      "change": _vm.onFileSelected
    },
    model: {
      value: _vm.selectedFile,
      callback: function ($$v) {
        _vm.selectedFile = $$v;
      },
      expression: "selectedFile"
    }
  }), _vm._v(" "), _vm.previewUrl ? _c('div', {
    staticClass: "mt-3"
  }, [_c(VSubheader["a" /* default */], {
    staticClass: "pl-0"
  }, [_vm._v(_vm._s(_vm.previewLabel))]), _vm._v(" "), _c(VImg["a" /* default */], {
    staticClass: "preview-image",
    attrs: {
      "src": _vm.previewUrl,
      "max-width": "150",
      "max-height": "100"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mt-4"
  }, [_vm.selectedFile && !_vm.uploading ? _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary",
      "disabled": !_vm.selectedFile || !_vm.canUpload
    },
    on: {
      "click": _vm.handleUpload
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-upload")]), _vm._v("\n          " + _vm._s(_vm.uploadButtonText) + "\n        ")], 1) : _vm._e(), _vm._v(" "), _vm.uploading ? _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": "",
      "disabled": ""
    }
  }, [_vm._v("\n          " + _vm._s(_vm.uploadingText) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.selectedFile ? _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": "",
      "disabled": _vm.uploading
    },
    on: {
      "click": _vm.clearSelectedFile
    }
  }, [_vm._v("\n          " + _vm._s(_vm.cancelButtonText) + "\n        ")]) : _vm._e()], 1), _vm._v(" "), _vm.showGuidelines ? _c(VAlert["a" /* default */], {
    staticClass: "mt-3",
    attrs: {
      "type": "info",
      "text": "",
      "dense": ""
    }
  }, [_c('small', {
    domProps: {
      "innerHTML": _vm._s(_vm.guidelines)
    }
  })]) : _vm._e()], 1) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ImageUpload.vue?vue&type=template&id=00b32072&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageUpload.vue?vue&type=script&lang=js
var ImageUploadvue_type_script_lang_js = __webpack_require__(650);

// CONCATENATED MODULE: ./components/ImageUpload.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ImageUploadvue_type_script_lang_js = (ImageUploadvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ImageUpload.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(878)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageUploadvue_type_script_lang_js,
  ImageUploadvue_type_template_id_00b32072_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "00b32072",
  "9151498e"
  
)

/* harmony default export */ var ImageUpload = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=image-upload.js.map