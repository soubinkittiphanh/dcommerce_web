exports.ids = [2,3,4];
exports.modules = {

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ap_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(508);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'AuditLogDialog',
  components: {
    AuditLogViewer: _components_accounting_ap_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__["default"]
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
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານ...');

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF();
        } catch (jsPDFError) {
          console.warn('jsPDF not available, using HTML print method:', jsPDFError);
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານສຳເລັດ!');
      } catch (error) {
        var _this$$toast3;
        console.error('Error exporting audit log:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານໄດ້');
      } finally {
        this.isExporting = false;
      }
    },
    async exportWithJsPDF() {
      var _this$invoiceInfo;
      // Import jsPDF dynamically (requires: npm install jspdf)
      const {
        jsPDF
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 357, 7));

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
        doc.text(`ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ: ${this.invoiceInfo.vendorInvoiceNumber}`, 20, 45);
        if (this.invoiceInfo.totalAmount) {
          doc.text(`ຍອດລວມ: ${this.formatCurrency(this.invoiceInfo.totalAmount)}`, 20, 55);
        }
      }

      // Add generation timestamp
      doc.setFontSize(10);
      doc.text(`ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}`, 20, 65);
      let yPosition = 80;

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
          doc.text(`ເລກທີໃບແຈ້ງໜີ້: ${log.recordData.invoiceNumber || '-'}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ຍອດເງິນ: ${this.formatCurrency(log.recordData.totalAmount)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ສະຖານະ: ${this.getStatusText(log.recordData.status)}`, 25, yPosition);
        }
        yPosition += 15;
      });

      // Create filename
      const filename = `audit-log-${((_this$invoiceInfo = this.invoiceInfo) === null || _this$invoiceInfo === void 0 ? void 0 : _this$invoiceInfo.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.pdf`;

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
              <p style="margin: 3px 0;"><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${log.recordData.invoiceNumber || '-'}</p>
              <p style="margin: 3px 0;"><strong>ຍອດເງິນ:</strong> ${this.formatCurrency(log.recordData.totalAmount)}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(log.recordData.status)}</p>
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
              <p><strong>ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ:</strong> ${this.invoiceInfo.vendorInvoiceNumber}</p>
              ${this.invoiceInfo.totalAmount ? `<p><strong>ຍອດລວມ:</strong> ${this.formatCurrency(this.invoiceInfo.totalAmount)}</p>` : ''}
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
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData5$vend, _log$recordData6, _log$recordData6$curr;
            return {
              id: log.id,
              action: this.getActionText(log.action),
              user: this.getUserName(log),
              email: this.getUserEmail(log),
              timestamp: log.auditDate,
              reason: log.reason,
              invoiceData: {
                invoiceNumber: (_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber,
                vendorInvoiceNumber: (_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.vendorInvoiceNumber,
                totalAmount: (_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.totalAmount,
                status: this.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status),
                vendor: (_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : (_log$recordData5$vend = _log$recordData5.vendor) === null || _log$recordData5$vend === void 0 ? void 0 : _log$recordData5$vend.name,
                currency: (_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : (_log$recordData6$curr = _log$recordData6.currency) === null || _log$recordData6$curr === void 0 ? void 0 : _log$recordData6$curr.code
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
        link.download = `audit-log-${((_this$invoiceInfo2 = this.invoiceInfo) === null || _this$invoiceInfo2 === void 0 ? void 0 : _this$invoiceInfo2.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.json`;
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
        const headers = ['ລຳດັບ', 'ການດຳເນີນງານ', 'ຜູ້ດຳເນີນການ', 'ອີເມວ', 'ເວລາ', 'ເຫດຜົນ', 'ເລກທີໃບແຈ້ງໜີ້', 'ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ', 'ຍອດເງິນ', 'ສະຖານະ', 'ຜູ້ຂາຍ', 'ສະກຸນເງິນ'];
        const csvData = this.auditLogs.map((log, index) => {
          var _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11, _log$recordData11$ven, _log$recordData12, _log$recordData12$cur;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', ((_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.invoiceNumber) || '', ((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.vendorInvoiceNumber) || '', ((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.totalAmount) || '', this.getStatusText((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.status) || '', ((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : (_log$recordData11$ven = _log$recordData11.vendor) === null || _log$recordData11$ven === void 0 ? void 0 : _log$recordData11$ven.name) || '', ((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : (_log$recordData12$cur = _log$recordData12.currency) === null || _log$recordData12$cur === void 0 ? void 0 : _log$recordData12$cur.code) || ''];
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
        link.download = `audit-log-${((_this$invoiceInfo3 = this.invoiceInfo) === null || _this$invoiceInfo3 === void 0 ? void 0 : _this$invoiceInfo3.invoiceNumber) || this.invoiceId}-${new Date().toISOString().split('T')[0]}.csv`;
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
      var _log$recordData13, _log$recordData13$mak, _log$user;
      return ((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : (_log$recordData13$mak = _log$recordData13.maker) === null || _log$recordData13$mak === void 0 ? void 0 : _log$recordData13$mak.cus_email) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.email) || '';
    },
    // Helper methods for PDF generation
    getActionText(action) {
      const actionMap = {
        CREATE: 'ສ້າງໃບແຈ້ງໜີ້',
        UPDATE: 'ອັບເດດໃບແຈ້ງໜີ້',
        DELETE: 'ລຶບໃບແຈ້ງໜີ້',
        APPROVE: 'ອະນຸມັດໃບແຈ້ງໜີ້',
        REJECT: 'ປະຕິເສດໃບແຈ້ງໜີ້'
      };
      return actionMap[action] || action;
    },
    getStatusText(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        pending: 'ລໍຖ້າການອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        rejected: 'ປະຕິເສດ',
        paid: 'ຈ່າຍແລ້ວ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusMap[status] || status;
    },
    getUserName(log) {
      var _log$recordData14, _log$recordData14$mak, _log$user2;
      return ((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : (_log$recordData14$mak = _log$recordData14.maker) === null || _log$recordData14$mak === void 0 ? void 0 : _log$recordData14$mak.cus_name) || ((_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.name) || 'ບໍ່ຮູ້ຈັກ';
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
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(336)["URL"]))

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(495);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("14cc85f4", content, true, context)
};

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(557);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("11d0e1ab", content, true, context)
};

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(468);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-log-viewer[data-v-074f3214]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-074f3214]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-074f3214]{align-items:center;display:flex;gap:8px}.filter-input[data-v-074f3214]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;padding:8px 12px}.filter-input[data-v-074f3214]:focus{border-color:#007bff;outline:none}.btn-clear[data-v-074f3214],.btn-search[data-v-074f3214]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-074f3214]{background:#007bff;color:#fff}.btn-clear[data-v-074f3214]{background:#6c757d;color:#fff}.loading[data-v-074f3214]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-074f3214]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-074f3214]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-074f3214]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-074f3214]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-074f3214]{background:#28a745}.dot-update[data-v-074f3214]{background:#007bff}.dot-delete[data-v-074f3214]{background:#dc3545}.dot-approve[data-v-074f3214]{background:#28a745}.dot-reject[data-v-074f3214]{background:#dc3545}.timeline-content[data-v-074f3214]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-074f3214]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-074f3214]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-074f3214]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-074f3214],.content-header[data-v-074f3214]{align-items:center;display:flex}.action-info[data-v-074f3214]{gap:12px}.action-badge[data-v-074f3214]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-074f3214]{background:#d4edda;color:#155724}.badge-update[data-v-074f3214]{background:#cce7ff;color:#004085}.badge-delete[data-v-074f3214]{background:#f8d7da;color:#721c24}.badge-approve[data-v-074f3214]{background:#d4edda;color:#155724}.badge-reject[data-v-074f3214]{background:#f8d7da;color:#721c24}.amount-change[data-v-074f3214]{background:#fff3cd;border-radius:4px;color:#856404;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-074f3214]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-074f3214]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-074f3214],.user-info[data-v-074f3214]{align-items:center;display:flex}.user-info[data-v-074f3214]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-074f3214]{color:#666;font-size:12px}.invoice-info[data-v-074f3214]{align-items:center;display:flex;font-size:14px;gap:12px}.invoice-number[data-v-074f3214]{color:#007bff;font-weight:600}.vendor-name[data-v-074f3214]{color:#666}.content-reason[data-v-074f3214]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-074f3214]{font-size:11px}.expand-indicator[data-v-074f3214]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-074f3214]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-074f3214]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:16px}.detail-item[data-v-074f3214]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-074f3214]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-074f3214]{color:#333;font-size:13px}.amount[data-v-074f3214]{color:#28a745;font-weight:600}.status[data-v-074f3214]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.status-draft[data-v-074f3214]{background:#e9ecef;color:#495057}.status-pending[data-v-074f3214]{background:#fff3cd;color:#856404}.status-approved[data-v-074f3214]{background:#d4edda;color:#155724}.status-paid[data-v-074f3214]{background:#cce7ff;color:#004085}.line-items-summary h4[data-v-074f3214]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.line-items[data-v-074f3214]{display:flex;flex-direction:column;gap:4px}.line-item[data-v-074f3214]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.item-desc[data-v-074f3214]{color:#333}.item-amount[data-v-074f3214]{color:#666;font-weight:500}.more-items[data-v-074f3214]{background:#f8f9fa;border-radius:4px;font-size:11px;padding:4px}.empty-state[data-v-074f3214],.more-items[data-v-074f3214]{color:#666;text-align:center}.empty-state[data-v-074f3214]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:48px 20px}.empty-state i[data-v-074f3214]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-074f3214]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-074f3214]{font-size:14px;margin:0}.pagination[data-v-074f3214]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-074f3214],.pagination[data-v-074f3214]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-074f3214]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-074f3214]:hover:not(:disabled){background:#f8f9fa;border-color:#007bff}.page-btn[data-v-074f3214]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-074f3214]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-074f3214]{padding:16px}.content-main[data-v-074f3214]{align-items:flex-start;flex-direction:column;gap:8px}.details-grid[data-v-074f3214]{grid-template-columns:1fr}.expanded-details[data-v-074f3214]{margin-left:0}.timeline-item[data-v-074f3214]:not(:last-child):before{display:none}.filter-group[data-v-074f3214]{flex-wrap:wrap}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/view/index.vue?vue&type=template&id=074f3214&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "audit-log-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-074f3214>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-074f3214>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-074f3214> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-074f3214> "), _c('select', {
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
  }, [_vm._v("Rejected")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-074f3214><i class=\"fas fa-search\" data-v-074f3214></i></button> <button class=\"btn-clear\" data-v-074f3214><i class=\"fas fa-times\" data-v-074f3214></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-074f3214><i class=\"fas fa-spinner fa-spin\" data-v-074f3214></i>\n    Loading...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-074f3214>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData2$vend, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData9$curr, _log$recordData10, _log$recordData10$lin;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-074f3214><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-074f3214><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-074f3214></i></div> <div class=\"timeline-content\" data-v-074f3214><div class=\"content-header\" data-v-074f3214><div class=\"action-info\" data-v-074f3214><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-074f3214><div class=\"user-info\" data-v-074f3214><i class=\"fas fa-user\" data-v-074f3214></i> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"invoice-info\" data-v-074f3214><span class=\"invoice-number\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber) || '-')) + "</span> <span class=\"vendor-name\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : (_log$recordData2$vend = _log$recordData2.vendor) === null || _log$recordData2$vend === void 0 ? void 0 : _log$recordData2$vend.name) || '-')) + "</span></div></div> " + (log.reason ? "<div class=\"content-reason\" data-v-074f3214><i class=\"fas fa-comment-alt\" data-v-074f3214></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-074f3214><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-074f3214></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-074f3214><div class=\"details-grid\" data-v-074f3214><div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Invoice #:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.invoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Vendor Invoice #:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.vendorInvoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Amount:</label> <span class=\"amount\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.totalAmount))) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.status}`) + " data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Due Date:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.dueDate))) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Currency:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : (_log$recordData9$curr = _log$recordData9.currency) === null || _log$recordData9$curr === void 0 ? void 0 : _log$recordData9$curr.code) || '-')) + "</span></div></div> " + ((_log$recordData10 = log.recordData) !== null && _log$recordData10 !== void 0 && (_log$recordData10$lin = _log$recordData10.lineItems) !== null && _log$recordData10$lin !== void 0 && _log$recordData10$lin.length ? "<div class=\"line-items-summary\" data-v-074f3214><h4 data-v-074f3214>" + _vm._ssrEscape("Line Items (" + _vm._s(log.recordData.lineItems.length) + ")") + "</h4> <div class=\"line-items\" data-v-074f3214>" + _vm._ssrList(log.recordData.lineItems.slice(0, 3), function (item) {
      return "<div class=\"line-item\" data-v-074f3214><span class=\"item-desc\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(item.description)) + "</span> <span class=\"item-amount\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(item.lineTotal))) + "</span></div>";
    }) + " " + (log.recordData.lineItems.length > 3 ? "<div class=\"more-items\" data-v-074f3214>" + _vm._ssrEscape("\n              +" + _vm._s(log.recordData.lineItems.length - 3) + " more items\n            ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-074f3214><i class=\"fas fa-history\" data-v-074f3214></i> <h3 data-v-074f3214>No audit records found</h3> <p data-v-074f3214>No changes have been recorded for this invoice yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-074f3214><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-074f3214><i class=\"fas fa-chevron-left\" data-v-074f3214></i></button> <span class=\"page-info\" data-v-074f3214>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-074f3214><i class=\"fas fa-chevron-right\" data-v-074f3214></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue?vue&type=template&id=074f3214&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'AuditLogViewer',
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
        action: ''
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
        // Simulate API call - replace with actual endpoint
        const response = await this.$axios.get(`/api/ap-invoices/audit/${this.invoiceId}`, {
          params: {
            page,
            limit: this.pagination.limit,
            ...this.filters
          }
        });
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
        console.error('Error loading audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load audit logs');
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
        action: ''
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
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times'
      };
      return icons[action] || 'fas fa-circle';
    },
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected'
      };
      return actions[action] || action;
    },
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'pending': 'Pending',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled'
      };
      return statuses[status] || status;
    },
    getUserName(log) {
      var _log$recordData3, _log$recordData3$make, _log$user;
      return ((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : (_log$recordData3$make = _log$recordData3.maker) === null || _log$recordData3$make === void 0 ? void 0 : _log$recordData3$make.cus_name) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name) || 'Unknown';
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
      return new Date(date).toLocaleDateString('en-US');
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var audit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(494)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "074f3214",
  "a9c014d2"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51d2ba97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(483);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51d2ba97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51d2ba97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51d2ba97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51d2ba97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-dialog-overlay[data-v-51d2ba97]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.audit-dialog[data-v-51d2ba97]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.audit-dialog-header[data-v-51d2ba97]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-51d2ba97]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.invoice-subtitle[data-v-51d2ba97]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-51d2ba97]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-51d2ba97]:hover{background:hsla(0,0%,100%,.2)}.audit-dialog-body[data-v-51d2ba97]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.audit-dialog-body[data-v-51d2ba97]::-webkit-scrollbar{width:8px}.audit-dialog-body[data-v-51d2ba97]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.audit-dialog-body[data-v-51d2ba97]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.audit-dialog-body[data-v-51d2ba97]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.audit-dialog-footer[data-v-51d2ba97]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-51d2ba97]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-51d2ba97]{background:#667eea;color:#fff}.btn-primary[data-v-51d2ba97]:hover{background:#5a6fd8;transform:translateY(-1px)}.btn-secondary[data-v-51d2ba97]{background:#6c757d;color:#fff}.btn-secondary[data-v-51d2ba97]:hover{background:#5a6268;transform:translateY(-1px)}@media (max-width:768px){.audit-dialog[data-v-51d2ba97]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.audit-dialog-header[data-v-51d2ba97]{padding:15px}.header-info h3[data-v-51d2ba97]{font-size:18px}.audit-dialog-footer[data-v-51d2ba97]{flex-direction:column;padding:15px}.btn[data-v-51d2ba97]{justify-content:center;width:100%}}@media (max-width:480px){.audit-dialog-overlay[data-v-51d2ba97]{padding:0}.audit-dialog-header[data-v-51d2ba97]{align-items:flex-start;flex-direction:column;gap:10px;position:relative}.close-btn[data-v-51d2ba97]{position:absolute;right:15px;top:15px}.header-info h3[data-v-51d2ba97]{font-size:16px}.invoice-subtitle[data-v-51d2ba97]{font-size:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(647);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("59ca2aba", content, true, context)
};

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/index.vue?vue&type=template&id=51d2ba97&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"audit-dialog\" data-v-51d2ba97>", "</div>", [_vm._ssrNode("<div class=\"audit-dialog-header\" data-v-51d2ba97><div class=\"header-info\" data-v-51d2ba97><h3 data-v-51d2ba97><i class=\"fas fa-history\" data-v-51d2ba97></i>\n          ປະຫວັດການດຳເນີນງານ\n        </h3> " + (_vm.invoiceInfo ? "<p class=\"invoice-subtitle\" data-v-51d2ba97>" + _vm._ssrEscape("\n          ໃບແຈ້ງໜີ້: " + _vm._s(_vm.invoiceInfo.invoiceNumber) + " -\n          " + _vm._s(_vm.invoiceInfo.vendorInvoiceNumber) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-51d2ba97><i class=\"fas fa-times\" data-v-51d2ba97></i></button></div> "), _vm._ssrNode("<div class=\"audit-dialog-body\" data-v-51d2ba97>", "</div>", [_c('audit-log-viewer', {
    ref: "auditLogViewer",
    attrs: {
      "invoice-id": _vm.invoiceId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"audit-dialog-footer\" data-v-51d2ba97><button type=\"button\" class=\"btn btn-secondary\" data-v-51d2ba97><i class=\"fas fa-times\" data-v-51d2ba97></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-51d2ba97><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-51d2ba97>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-51d2ba97></i>" : "<i class=\"fas fa-download\" data-v-51d2ba97></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-51d2ba97><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-51d2ba97><i class=\"fas fa-caret-down\" data-v-51d2ba97></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-51d2ba97><button class=\"dropdown-item\" data-v-51d2ba97><i class=\"fas fa-code\" data-v-51d2ba97></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-51d2ba97><i class=\"fas fa-table\" data-v-51d2ba97></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-51d2ba97><i class=\"fas fa-print\" data-v-51d2ba97></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue?vue&type=template&id=51d2ba97&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/index.vue?vue&type=script&lang=js&
var auditvue_type_script_lang_js_ = __webpack_require__(467);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_auditvue_type_script_lang_js_ = (auditvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(556)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_auditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51d2ba97",
  "913d5c1a"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49f64b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(558);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49f64b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49f64b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49f64b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49f64b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-section-header[data-v-49f64b14]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.btn-view-audit[data-v-49f64b14]{border-radius:6px;font-size:14px;font-weight:500;padding:8px 16px;transition:all .2s ease}.btn-view-audit[data-v-49f64b14]:hover{box-shadow:0 4px 8px rgba(102,126,234,.2);transform:translateY(-1px)}.btn-outline-primary[data-v-49f64b14]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline-primary[data-v-49f64b14]:hover{background:#667eea;color:#fff}.modal-overlay[data-v-49f64b14]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1050}.enhanced-dialog[data-v-49f64b14]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1200px;overflow:hidden;width:100%}.modal-header[data-v-49f64b14]{background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;padding:20px}.modal-header[data-v-49f64b14],.modal-title[data-v-49f64b14]{align-items:center;display:flex}.modal-title[data-v-49f64b14]{font-size:18px;font-weight:600;gap:10px;margin:0}.close-button[data-v-49f64b14]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;padding:5px;transition:background .2s}.close-button[data-v-49f64b14]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-49f64b14]{flex:1;overflow:hidden}.loading-state[data-v-49f64b14],.modal-body[data-v-49f64b14]{display:flex;flex-direction:column}.loading-state[data-v-49f64b14]{align-items:center;color:#666;justify-content:center;padding:40px}.spinner[data-v-49f64b14]{animation:spin-49f64b14 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:40px;margin-bottom:15px;width:40px}@keyframes spin-49f64b14{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.invoice-form[data-v-49f64b14]{display:flex;flex:1;flex-direction:column;overflow:hidden}.tab-navigation[data-v-49f64b14]{background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex}.tab-btn[data-v-49f64b14]{align-items:center;background:none;border:none;color:#666;cursor:pointer;display:flex;flex:1;font-size:14px;font-weight:500;gap:8px;justify-content:center;padding:15px 20px;position:relative;transition:all .2s}.tab-btn[data-v-49f64b14]:hover{background:rgba(102,126,234,.1);color:#667eea}.tab-btn.active[data-v-49f64b14]{background:#fff;border-bottom:3px solid #667eea;color:#667eea}.line-count[data-v-49f64b14]{background:#667eea;border-radius:12px;color:#fff;font-size:12px;min-width:20px;padding:2px 8px;text-align:center}.tab-content[data-v-49f64b14]{flex:1;overflow-y:auto;padding:0}.form-section[data-v-49f64b14]{border-bottom:1px solid #f0f0f0;padding:25px}.form-section[data-v-49f64b14]:last-child{border-bottom:none}.section-title[data-v-49f64b14]{align-items:center;border-bottom:2px solid #e9ecef;color:#333;display:flex;font-size:16px;font-weight:600;gap:10px;margin-bottom:20px;padding-bottom:10px}.section-title i[data-v-49f64b14]{color:#667eea}.form-row[data-v-49f64b14]{display:flex;flex-wrap:wrap;margin:-10px}.form-group[data-v-49f64b14]{margin-bottom:20px;padding:10px}.col-md-6[data-v-49f64b14]{flex:0 0 50%;max-width:50%}.form-group label[data-v-49f64b14]{color:#333;display:block;font-size:14px;font-weight:500;margin-bottom:5px}.form-group label.required[data-v-49f64b14]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-49f64b14]{border:1px solid #ddd;border-radius:6px;font-size:14px;padding:10px 12px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-49f64b14]:focus{border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-49f64b14]{border-color:#e74c3c;box-shadow:0 0 0 3px rgba(231,76,60,.1)}.form-control-sm[data-v-49f64b14]{font-size:13px;padding:6px 8px}.invalid-feedback[data-v-49f64b14]{color:#e74c3c;display:block;width:100%}.form-text[data-v-49f64b14],.invalid-feedback[data-v-49f64b14]{font-size:12px;margin-top:5px}.text-muted[data-v-49f64b14]{color:#6c757d}.exchange-rate-input-group[data-v-49f64b14]{align-items:center;display:flex;position:relative}.exchange-rate-addon[data-v-49f64b14]{color:#667eea;font-size:14px;pointer-events:none;position:absolute;right:10px}.currency-info[data-v-49f64b14]{color:#666;font-size:12px;font-weight:400}.exchange-display[data-v-49f64b14]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;margin-top:20px;padding:12px}.exchange-label[data-v-49f64b14]{color:#666;display:block;font-size:13px;font-weight:500;margin-bottom:8px}.exchange-amount[data-v-49f64b14]{align-items:center;display:flex;font-size:14px;font-weight:600;gap:10px}.foreign-amount[data-v-49f64b14]{color:#667eea}.exchange-arrow[data-v-49f64b14]{color:#28a745;font-size:12px}.local-amount[data-v-49f64b14]{color:#28a745}.local-currency[data-v-49f64b14]{background:#e8f5e8;border:1px solid #28a745;border-radius:4px;padding:8px 12px}.local-currency .amount.local[data-v-49f64b14]{color:#28a745;font-weight:700}.amount-summary[data-v-49f64b14]{background:#f8f9fa;border-left:4px solid #667eea;border-radius:8px;margin:20px 25px;padding:20px}.totals-grid[data-v-49f64b14]{grid-gap:15px;display:grid;gap:15px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.total-item[data-v-49f64b14]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:8px 0}.total-item[data-v-49f64b14]:last-child{border-bottom:none}.total-item.grand-total[data-v-49f64b14]{border-top:2px solid #667eea;font-size:16px;font-weight:600;grid-column:1/-1;margin-top:8px;padding-top:12px}.total-item .amount[data-v-49f64b14]{color:#333;font-weight:600}.total-item .amount.discount[data-v-49f64b14]{color:#e67e22}.audit-trail-section[data-v-49f64b14]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;margin:20px 0;padding:20px}.audit-trail-container[data-v-49f64b14]{display:flex;flex-direction:column;gap:16px}.audit-card[data-v-49f64b14]{background:#fff;border-left:4px solid #007bff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);padding:16px}.maker-card[data-v-49f64b14]{border-left-color:#28a745}.checker-card[data-v-49f64b14]{border-left-color:#17a2b8}.audit-header[data-v-49f64b14]{gap:12px;margin-bottom:12px}.audit-header[data-v-49f64b14],.audit-icon[data-v-49f64b14]{align-items:center;display:flex}.audit-icon[data-v-49f64b14]{border-radius:50%;color:#fff;font-size:18px;height:40px;justify-content:center;width:40px}.maker-icon[data-v-49f64b14]{background:#28a745}.checker-icon[data-v-49f64b14]{background:#17a2b8}.audit-title h6[data-v-49f64b14]{color:#495057;font-weight:600;margin:0}.audit-status[data-v-49f64b14]{border-radius:12px;display:inline-block;font-size:11px;font-weight:500;letter-spacing:.5px;padding:2px 8px;text-transform:uppercase}.status-created[data-v-49f64b14]{background:#d4edda;color:#155724}.status-approved[data-v-49f64b14]{background:#d1ecf1;color:#0c5460}.status-pending[data-v-49f64b14]{background:#fff3cd;color:#856404}.audit-details[data-v-49f64b14]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr 1fr}.audit-row[data-v-49f64b14]{align-items:center;display:flex;justify-content:space-between;padding:4px 0}.audit-label[data-v-49f64b14]{color:#6c757d}.audit-label[data-v-49f64b14],.audit-value[data-v-49f64b14]{font-size:13px;font-weight:500}.audit-value[data-v-49f64b14]{color:#495057}.audit-value.comment[data-v-49f64b14]{background:#f8f9fa;border-radius:4px;color:#6c757d;font-style:italic;grid-column:1/-1;margin-top:8px;padding:8px}.approval-status-summary[data-v-49f64b14]{background:#fff;border:1px solid #e9ecef;border-radius:8px;padding:20px}.status-info-header[data-v-49f64b14]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;margin-bottom:20px;padding-bottom:10px}.status-info-header h6[data-v-49f64b14]{color:#495057;font-weight:600;margin:0}.status-badge[data-v-49f64b14]{border-radius:16px;font-size:12px;font-weight:600;letter-spacing:.5px;padding:4px 12px;text-transform:uppercase}.status-badge.status-draft[data-v-49f64b14]{background:#e9ecef;color:#6c757d}.status-badge.status-pending[data-v-49f64b14]{background:#fff3cd;color:#856404}.status-badge.status-approved[data-v-49f64b14]{background:#d1ecf1;color:#0c5460}.status-badge.status-rejected[data-v-49f64b14]{background:#f8d7da;color:#721c24}.status-badge.status-paid[data-v-49f64b14]{background:#d4edda;color:#155724}.status-badge.status-cancelled[data-v-49f64b14]{background:#f8d7da;color:#721c24}.status-workflow[data-v-49f64b14]{align-items:center;display:flex;gap:20px;justify-content:center}.workflow-step[data-v-49f64b14]{align-items:center;display:flex;flex-direction:column;gap:8px;opacity:.4;transition:opacity .3s ease}.workflow-step.active[data-v-49f64b14]{opacity:1}.step-icon[data-v-49f64b14]{align-items:center;background:#e9ecef;border-radius:50%;color:#6c757d;display:flex;font-size:20px;height:50px;justify-content:center;transition:all .3s ease;width:50px}.workflow-step.active .step-icon[data-v-49f64b14]{background:#007bff;color:#fff;transform:scale(1.1)}.step-created.active .step-icon[data-v-49f64b14]{background:#28a745}.step-approved.active .step-icon[data-v-49f64b14]{background:#17a2b8}.step-label[data-v-49f64b14]{color:#6c757d;font-size:12px;font-weight:500;text-align:center}.workflow-step.active .step-label[data-v-49f64b14]{color:#495057;font-weight:600}.workflow-arrow[data-v-49f64b14]{color:#dee2e6;font-size:16px}.workflow-step.active+.workflow-arrow[data-v-49f64b14]{color:#007bff}.line-items-section[data-v-49f64b14]{padding:25px}.add-line-header[data-v-49f64b14]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.add-line-actions[data-v-49f64b14]{align-items:center;display:flex;gap:15px}.btn[data-v-49f64b14]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-49f64b14]{background:#007bff;color:#fff}.btn-secondary[data-v-49f64b14]{background:#6c757d;color:#fff}.btn-danger[data-v-49f64b14]{background:#dc3545;color:#fff}.btn[data-v-49f64b14]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-49f64b14]:disabled{cursor:not-allowed;opacity:.6;transform:none}.btn-add-line[data-v-49f64b14]{font-size:16px;font-weight:600;padding:12px 24px}.btn-lg[data-v-49f64b14]{font-size:16px;padding:12px 30px}.btn-sm[data-v-49f64b14]{align-items:center;border-radius:50%;display:flex;font-size:11px;height:28px;justify-content:center;padding:0;width:28px}.line-count-info[data-v-49f64b14]{background:#e9ecef;border-radius:20px;color:#666;font-size:12px;font-weight:500;padding:8px 12px}.empty-line-state[data-v-49f64b14]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:8px;padding:60px 20px;text-align:center}.empty-content i[data-v-49f64b14]{color:#dee2e6;font-size:64px;margin-bottom:20px}.empty-content h4[data-v-49f64b14]{color:#666;margin-bottom:10px}.empty-content p[data-v-49f64b14]{color:#999;margin-bottom:30px}.line-items-table-container[data-v-49f64b14]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:20px;overflow:hidden}.line-items-table .table[data-v-49f64b14]{border-collapse:collapse;margin:0;width:100%}.line-items-table .table th[data-v-49f64b14]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-size:13px;font-weight:600;padding:12px 8px;text-align:center}.line-items-table .table td[data-v-49f64b14]{border-top:1px solid #dee2e6;font-size:13px;padding:8px;vertical-align:middle}.line-number[data-v-49f64b14]{color:#666;font-weight:600;text-align:center}.line-total[data-v-49f64b14]{color:#333;font-weight:600;text-align:right}.line-row[data-v-49f64b14]{transition:background-color .2s}.line-row[data-v-49f64b14]:hover{background-color:rgba(102,126,234,.05)}.add-more-lines[data-v-49f64b14]{border-top:1px solid #e9ecef;padding:20px 0;text-align:center}.btn-add-more[data-v-49f64b14]{margin-right:15px}.quick-add-buttons[data-v-49f64b14]{display:inline-flex;gap:10px;margin-left:15px}.line-totals-summary[data-v-49f64b14]{background:#f8f9fa;border-left:4px solid #667eea;border-radius:8px;margin-top:20px;padding:20px}.modal-footer[data-v-49f64b14]{background:#f8f9fa;border-top:1px solid #e9ecef;padding:20px}.footer-actions[data-v-49f64b14]{display:flex;gap:10px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-49f64b14]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.totals-grid[data-v-49f64b14]{grid-template-columns:1fr}.add-line-header[data-v-49f64b14]{flex-direction:column;gap:15px}.line-items-table-container[data-v-49f64b14]{overflow-x:auto}.line-items-table .table[data-v-49f64b14]{min-width:800px}.footer-actions[data-v-49f64b14]{flex-direction:column}.footer-actions .btn[data-v-49f64b14]{justify-content:center;width:100%}.tab-btn[data-v-49f64b14]{flex-direction:column;font-size:12px;gap:4px;padding:12px 8px}.quick-add-buttons[data-v-49f64b14]{margin-left:0;margin-top:10px}.form-row[data-v-49f64b14],.quick-add-buttons[data-v-49f64b14]{flex-direction:column}.col-md-6[data-v-49f64b14]{flex:1;max-width:100%}.audit-section-header[data-v-49f64b14]{align-items:flex-start;flex-direction:column;gap:10px}.audit-details[data-v-49f64b14]{grid-template-columns:1fr}.status-workflow[data-v-49f64b14]{flex-direction:column;gap:16px}.workflow-arrow[data-v-49f64b14]{transform:rotate(90deg)}.audit-trail-container[data-v-49f64b14]{gap:12px}.audit-card[data-v-49f64b14]{padding:12px}.exchange-amount[data-v-49f64b14]{align-items:flex-start;flex-direction:column}.exchange-arrow[data-v-49f64b14]{transform:rotate(90deg)}}@media (max-width:480px){.modal-header[data-v-49f64b14]{padding:15px}.modal-title[data-v-49f64b14]{font-size:16px}.form-section[data-v-49f64b14]{padding:20px 15px}.section-title[data-v-49f64b14]{font-size:14px}.modal-footer[data-v-49f64b14]{padding:15px}.line-items-section[data-v-49f64b14]{padding:20px 15px}.empty-line-state[data-v-49f64b14]{padding:40px 15px}.empty-content i[data-v-49f64b14]{font-size:48px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/index.vue?vue&type=template&id=49f64b14&scoped=true&
var render = function render() {
  var _vm$selectedCurrency, _vm$selectedCurrency2, _vm$selectedCurrency3, _vm$selectedCurrency4, _vm$selectedCurrency5, _vm$selectedCurrency7, _vm$selectedCurrency8, _vm$selectedCurrency9, _vm$selectedCurrency10;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-49f64b14><h4 class=\"modal-title\" data-v-49f64b14><i class=\"fas fa-file-invoice\" data-v-49f64b14></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່') + "\n      ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-49f64b14><i class=\"fas fa-times\" data-v-49f64b14></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-49f64b14>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-49f64b14></div> <p data-v-49f64b14>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"invoice-form\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<div class=\"tab-navigation\" data-v-49f64b14><button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'header'
  }]) + " data-v-49f64b14><i class=\"fas fa-file-alt\" data-v-49f64b14></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </button> <button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'lines'
  }]) + " data-v-49f64b14><i class=\"fas fa-list\" data-v-49f64b14></i>\n            ລາຍການສິນຄ້າ\n            " + (_vm.lineItems.length > 0 ? "<span class=\"line-count\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length)) + "</span>" : "<!---->") + "</button></div> "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'header' ? '' : 'none'
  }) + " data-v-49f64b14>", "</div>", [_vm._ssrNode("<form data-v-49f64b14>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-49f64b14><i class=\"fas fa-info-circle\" data-v-49f64b14></i>\n                ຂໍ້ມູນພື້ນຖານ\n              </h5> <div class=\"form-row\" data-v-49f64b14><div class=\"form-group col-md-6\" data-v-49f64b14><label for=\"invoiceNumber\" class=\"required\" data-v-49f64b14>ເລກທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceNumber\" type=\"text\" placeholder=\"ເຊັ່ນ: INV-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.invoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceNumber
  }) + " data-v-49f64b14> " + (_vm.errors.invoiceNumber ? "<div class=\"invalid-feedback\" data-v-49f64b14>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceNumber) + "\n                  ") + "</div>" : "<!---->") + "</div> <div class=\"form-group col-md-6\" data-v-49f64b14><label for=\"vendorInvoiceNumber\" class=\"required\" data-v-49f64b14>ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ</label> <input id=\"vendorInvoiceNumber\" type=\"text\" placeholder=\"ເລກທີໃບແຈ້ງໜີ້ຂອງຜູ້ຂາຍ\"" + _vm._ssrAttr("value", _vm.form.vendorInvoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.vendorInvoiceNumber
  }) + " data-v-49f64b14> " + (_vm.errors.vendorInvoiceNumber ? "<div class=\"invalid-feedback\" data-v-49f64b14>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.vendorInvoiceNumber) + "\n                  ") + "</div>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"form-row\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<label for=\"vendorId\" class=\"required\" data-v-49f64b14>ຜູ້ຂາຍ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.vendorId,
      expression: "form.vendorId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.vendorId
    },
    attrs: {
      "id": "vendorId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "vendorId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onVendorChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ຂາຍ")]), _vm._v(" "), _vm._l(_vm.vendors, function (vendor) {
    return _c('option', {
      key: vendor.id,
      domProps: {
        "value": vendor.id
      }
    }, [_vm._v("\n                      " + _vm._s(vendor.name) + " (" + _vm._s(vendor.vendorCode) + ")\n                    ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.vendorId ? "<div class=\"invalid-feedback\" data-v-49f64b14>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.vendorId) + "\n                  ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" class=\"required\" data-v-49f64b14>ສະກຸນເງິນ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currencyId,
      expression: "form.currencyId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.currencyId
    },
    attrs: {
      "id": "currencyId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCurrencyChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n                      " + _vm._s(currency.name) + " (" + _vm._s(currency.code) + ")\n                    ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-49f64b14>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.currencyId) + "\n                  ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-49f64b14><div class=\"form-group col-md-6\" data-v-49f64b14><label for=\"exchangeRate\" class=\"required\" data-v-49f64b14>\n                    ອັດຕາແລກປ່ຽນ\n                    " + (_vm.selectedCurrency ? "<span class=\"currency-info\" data-v-49f64b14>" + _vm._ssrEscape("\n                      (" + _vm._s(_vm.selectedCurrency.code) + " ຕໍ່ LAK)\n                    ") + "</span>" : "<!---->") + "</label> <div class=\"exchange-rate-input-group\" data-v-49f64b14><input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-49f64b14> <div class=\"exchange-rate-addon\" data-v-49f64b14><i class=\"fas fa-exchange-alt\" data-v-49f64b14></i></div></div> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-49f64b14>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.exchangeRate) + "\n                  ") + "</div>" : "<!---->") + " <small class=\"form-text text-muted\" data-v-49f64b14>\n                    ໃຊ້ 1.0000 ສຳລັບ LAK ຫຼື ປ້ອນອັດຕາແລກປ່ຽນປັດຈຸບັນ\n                  </small></div> <div class=\"form-group col-md-6\" data-v-49f64b14>" + (_vm.selectedCurrency && _vm.form.exchangeRate ? "<div class=\"exchange-display\" data-v-49f64b14><label class=\"exchange-label\" data-v-49f64b14>ຍອດເງິນໃນສະກຸນທ້ອງຖິ່ນ</label> <div class=\"exchange-amount\" data-v-49f64b14><span class=\"foreign-amount\" data-v-49f64b14>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(_vm.calculatedTotal, ((_vm$selectedCurrency = _vm.selectedCurrency) === null || _vm$selectedCurrency === void 0 ? void 0 : _vm$selectedCurrency.code) || 'USD')) + "\n                      ") + "</span> <i class=\"fas fa-arrow-right exchange-arrow\" data-v-49f64b14></i> <span class=\"local-amount\" data-v-49f64b14>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(_vm.calculatedTotal * parseFloat(_vm.form.exchangeRate || 1), 'LAK')) + "\n                      ") + "</span></div></div>" : "<!---->") + "</div></div>")], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-49f64b14><h5 class=\"section-title\" data-v-49f64b14><i class=\"fas fa-calendar-alt\" data-v-49f64b14></i>\n                ວັນທີ\n              </h5> <div class=\"form-row\" data-v-49f64b14><div class=\"form-group col-md-6\" data-v-49f64b14><label for=\"invoiceDate\" class=\"required\" data-v-49f64b14>ວັນທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.invoiceDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceDate
  }) + " data-v-49f64b14> " + (_vm.errors.invoiceDate ? "<div class=\"invalid-feedback\" data-v-49f64b14>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceDate) + "\n                  ") + "</div>" : "<!---->") + "</div> <div class=\"form-group col-md-6\" data-v-49f64b14><label for=\"dueDate\" class=\"required\" data-v-49f64b14>ວັນທີຄົບກຳນົດ</label> <input id=\"dueDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.dueDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dueDate
  }) + " data-v-49f64b14> " + (_vm.errors.dueDate ? "<div class=\"invalid-feedback\" data-v-49f64b14>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.dueDate) + "\n                  ") + "</div>" : "<!---->") + "</div></div></div> <div class=\"form-section\" data-v-49f64b14><h5 class=\"section-title\" data-v-49f64b14><i class=\"fas fa-clipboard-list\" data-v-49f64b14></i>\n                ລາຍລະອຽດ\n              </h5> <div class=\"form-group\" data-v-49f64b14><label for=\"description\" data-v-49f64b14>ຄຳອະທິບາຍ</label> <textarea id=\"description\" rows=\"3\" placeholder=\"ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້...\" class=\"form-control\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div> <div class=\"form-group\" data-v-49f64b14><label for=\"note\" data-v-49f64b14>ໝາຍເຫດເພີ່ມເຕີມ</label> <textarea id=\"note\" rows=\"2\" placeholder=\"ໝາຍເຫດເພີ່ມເຕີມ (ຖ້າມີ)...\" class=\"form-control\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.form.note)) + "</textarea></div> " + (_vm.isEdit ? "<div class=\"form-group\" data-v-49f64b14><label for=\"reason\" class=\"required\" data-v-49f64b14>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-49f64b14> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-49f64b14>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.reason) + "\n                ") + "</div>" : "<!---->") + "</div>" : "<!---->") + "</div> <div class=\"amount-summary\" data-v-49f64b14><div class=\"totals-grid\" data-v-49f64b14><div class=\"total-item\" data-v-49f64b14><label data-v-49f64b14>ລວມຍ່ອຍ:</label> <span class=\"amount\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal, (_vm$selectedCurrency2 = _vm.selectedCurrency) === null || _vm$selectedCurrency2 === void 0 ? void 0 : _vm$selectedCurrency2.code))) + "</span></div> <div class=\"total-item\" data-v-49f64b14><label data-v-49f64b14>ສ່ວນຫຼຸດ:</label> <span class=\"amount discount\" data-v-49f64b14>" + _vm._ssrEscape("-" + _vm._s(_vm.formatCurrency(_vm.calculatedDiscount, (_vm$selectedCurrency3 = _vm.selectedCurrency) === null || _vm$selectedCurrency3 === void 0 ? void 0 : _vm$selectedCurrency3.code))) + "</span></div> <div class=\"total-item\" data-v-49f64b14><label data-v-49f64b14>ພາສີ:</label> <span class=\"amount\" data-v-49f64b14>" + _vm._ssrEscape("+" + _vm._s(_vm.formatCurrency(_vm.calculatedTax, (_vm$selectedCurrency4 = _vm.selectedCurrency) === null || _vm$selectedCurrency4 === void 0 ? void 0 : _vm$selectedCurrency4.code))) + "</span></div> <div class=\"total-item grand-total\" data-v-49f64b14><label data-v-49f64b14>ລວມທັງໝົດ:</label> <span class=\"amount\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal, (_vm$selectedCurrency5 = _vm.selectedCurrency) === null || _vm$selectedCurrency5 === void 0 ? void 0 : _vm$selectedCurrency5.code))) + "</span></div> " + (_vm.selectedCurrency && _vm.selectedCurrency.code !== 'LAK' && _vm.form.exchangeRate ? "<div class=\"total-item local-currency\" data-v-49f64b14><label data-v-49f64b14>ລວມເປັນ LAK:</label> <span class=\"amount local\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal * parseFloat(_vm.form.exchangeRate || 1), 'LAK'))) + "</span></div>" : "<!---->") + "</div></div> " + (_vm.isEdit ? "<div class=\"form-section audit-trail-section\" data-v-49f64b14><div class=\"audit-section-header\" data-v-49f64b14><h5 class=\"section-title\" data-v-49f64b14><i class=\"fas fa-history\" data-v-49f64b14></i>\n                  ປະຫວັດການດຳເນີນງານ\n                </h5> <button type=\"button\" class=\"btn btn-outline-primary btn-view-audit\" data-v-49f64b14><i class=\"fas fa-external-link-alt\" data-v-49f64b14></i>\n                  ເບິ່ງປະຫວັດລະອຽດ\n                </button></div> <div class=\"audit-trail-container\" data-v-49f64b14><div class=\"audit-card maker-card\" data-v-49f64b14><div class=\"audit-header\" data-v-49f64b14><div class=\"audit-icon maker-icon\" data-v-49f64b14><i class=\"fas fa-user-edit\" data-v-49f64b14></i></div> <div class=\"audit-title\" data-v-49f64b14><h6 data-v-49f64b14>ຜູ້ສ້າງເອກະສານ (Maker)</h6> <span class=\"audit-status status-created\" data-v-49f64b14>ສ້າງແລ້ວ</span></div></div> <div class=\"audit-details\" data-v-49f64b14><div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ຊື່ຜູ້ສ້າງ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.makerName)) + "</span></div> <div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ຕຳແໜ່ງ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.makerPosition)) + "</span></div> <div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ອີເມວ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.makerEmail || '-')) + "</span></div> <div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ວັນທີສ້າງ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.createdDate)) + "</span></div> <div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ເວລາສ້າງ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.createdTime)) + "</span></div></div></div> <div class=\"audit-card checker-card\" data-v-49f64b14><div class=\"audit-header\" data-v-49f64b14><div class=\"audit-icon checker-icon\" data-v-49f64b14><i class=\"fas fa-user-check\" data-v-49f64b14></i></div> <div class=\"audit-title\" data-v-49f64b14><h6 data-v-49f64b14>ຜູ້ກວດສອບ (Checker)</h6> <span" + _vm._ssrClass(null, ['audit-status', _vm.auditTrail.isChecked ? 'status-approved' : 'status-pending']) + " data-v-49f64b14>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.auditTrail.isChecked ? 'ອະນຸມັດແລ້ວ' : 'ລໍຖ້າການອະນຸມັດ') + "\n                      ") + "</span></div></div> <div class=\"audit-details\" data-v-49f64b14><div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ຊື່ຜູ້ກວດ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.checkerName || '-')) + "</span></div> <div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ຕຳແໜ່ງ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.checkerPosition || '-')) + "</span></div> <div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ອີເມວ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.checkerEmail || '-')) + "</span></div> <div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ວັນທີກວດ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.checkedDate || '-')) + "</span></div> <div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ເວລາກວດ:</span> <span class=\"audit-value\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.checkedTime || '-')) + "</span></div> " + (_vm.auditTrail.checkerComment ? "<div class=\"audit-row\" data-v-49f64b14><span class=\"audit-label\" data-v-49f64b14>ຄຳເຫັນ:</span> <span class=\"audit-value comment\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.checkerComment)) + "</span></div>" : "<!---->") + "</div></div> <div class=\"approval-status-summary\" data-v-49f64b14><div class=\"status-info-header\" data-v-49f64b14><h6 data-v-49f64b14>ສະຖານະເອກະສານ</h6> <span" + _vm._ssrClass(null, ['status-badge', `status-${_vm.auditTrail.status}`]) + " data-v-49f64b14>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getStatusText(_vm.auditTrail.status)) + "\n                    ") + "</span></div> <div class=\"status-workflow\" data-v-49f64b14><div" + _vm._ssrClass(null, ['workflow-step', 'step-created', {
    active: true
  }]) + " data-v-49f64b14><div class=\"step-icon\" data-v-49f64b14><i class=\"fas fa-plus-circle\" data-v-49f64b14></i></div> <span class=\"step-label\" data-v-49f64b14>ສ້າງເອກະສານ</span></div> <div class=\"workflow-arrow\" data-v-49f64b14><i class=\"fas fa-arrow-right\" data-v-49f64b14></i></div> <div" + _vm._ssrClass(null, ['workflow-step', 'step-pending', {
    active: _vm.auditTrail.isChecked
  }]) + " data-v-49f64b14><div class=\"step-icon\" data-v-49f64b14><i class=\"fas fa-clock\" data-v-49f64b14></i></div> <span class=\"step-label\" data-v-49f64b14>ລໍຖ້າການອະນຸມັດ</span></div> <div class=\"workflow-arrow\" data-v-49f64b14><i class=\"fas fa-arrow-right\" data-v-49f64b14></i></div> <div" + _vm._ssrClass(null, ['workflow-step', 'step-approved', {
    active: _vm.auditTrail.isApproved
  }]) + " data-v-49f64b14><div class=\"step-icon\" data-v-49f64b14><i class=\"fas fa-check-circle\" data-v-49f64b14></i></div> <span class=\"step-label\" data-v-49f64b14>ອະນຸມັດແລ້ວ</span></div></div></div></div></div>" : "<!---->"))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'lines' ? '' : 'none'
  }) + " data-v-49f64b14>", "</div>", [_vm._ssrNode("<div class=\"line-items-section\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<div class=\"add-line-header\" data-v-49f64b14><h5 class=\"section-title\" data-v-49f64b14><i class=\"fas fa-list\" data-v-49f64b14></i>\n                ລາຍການສິນຄ້າ / ການບໍລິການ\n              </h5> <div class=\"add-line-actions\" data-v-49f64b14><button type=\"button\" class=\"btn btn-primary btn-add-line\" data-v-49f64b14><i class=\"fas fa-plus-circle\" data-v-49f64b14></i>\n                  ເພີ່ມລາຍການສິນຄ້າ\n                </button> <span class=\"line-count-info\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length) + " ລາຍການ") + "</span></div></div> "), _vm.lineItems.length === 0 ? _vm._ssrNode("<div class=\"empty-line-state\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<div class=\"empty-content\" data-v-49f64b14><i class=\"fas fa-shopping-cart\" data-v-49f64b14></i> <h4 data-v-49f64b14>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4> <p data-v-49f64b14>\n                  ກະລຸນາເພີ່ມສິນຄ້າຫຼືການບໍລິການພ້ອມກັບບັນຊີ GL\n                  ເພື່ອສ້າງໃບແຈ້ງໜີ້\n                </p> <button type=\"button\" class=\"btn btn-lg btn-primary\" data-v-49f64b14><i class=\"fas fa-plus-circle\" data-v-49f64b14></i>\n                  ເພີ່ມລາຍການທຳອິດ\n                </button></div>")], 2) : _vm._ssrNode("<div class=\"line-items-table-container\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<div class=\"line-items-table\" data-v-49f64b14>", "</div>", [_vm._ssrNode("<table class=\"table\" data-v-49f64b14>", "</table>", [_vm._ssrNode("<thead data-v-49f64b14><tr data-v-49f64b14><th style=\"width: 40px\" data-v-49f64b14>#</th> <th style=\"width: 180px\" data-v-49f64b14>ລາຍລະອຽດ *</th> <th style=\"width: 70px\" data-v-49f64b14>ຈຳນວນ *</th> <th style=\"width: 80px\" data-v-49f64b14>ລາຄາຕໍ່ຫົວ *</th> <th style=\"width: 120px\" data-v-49f64b14>DR Account *</th> <th style=\"width: 120px\" data-v-49f64b14>CR Account *</th> <th style=\"width: 60px\" data-v-49f64b14>ສ່ວນຫຼຸດ%</th> <th style=\"width: 60px\" data-v-49f64b14>ພາສີ%</th> <th style=\"width: 100px\" data-v-49f64b14>ລວມ</th> <th style=\"width: 60px\" data-v-49f64b14>ລຶບ</th></tr></thead> "), _vm._ssrNode("<tbody data-v-49f64b14>", "</tbody>", _vm._l(_vm.lineItems, function (line, index) {
    var _vm$selectedCurrency6;
    return _vm._ssrNode("<tr class=\"line-row\" data-v-49f64b14>", "</tr>", [_vm._ssrNode("<td class=\"line-number\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-49f64b14><input type=\"text\" placeholder=\"ລາຍລະອຽດສິນຄ້າ/ການບໍລິການ...\"" + _vm._ssrAttr("value", line.description) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_description`]
    }) + " data-v-49f64b14></td> <td data-v-49f64b14><input type=\"number\" step=\"0.001\" min=\"0\"" + _vm._ssrAttr("value", line.quantity) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_quantity`]
    }) + " data-v-49f64b14></td> <td data-v-49f64b14><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.unitPrice) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_unitPrice`]
    }) + " data-v-49f64b14></td> "), _vm._ssrNode("<td data-v-49f64b14>", "</td>", [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.DRglAccountId,
        expression: "line.DRglAccountId"
      }],
      staticClass: "form-control form-control-sm",
      class: {
        'is-invalid': _vm.errors[`line_${index}_DRglAccountId`]
      },
      on: {
        "change": function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(line, "DRglAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("ເລືອກ DR Account")]), _vm._v(" "), _vm._l(_vm.glAccounts, function (account) {
      return _c('option', {
        key: account.id,
        domProps: {
          "value": account.id
        }
      }, [_vm._v("\n                            " + _vm._s(account.accountNumber) + " -\n                            " + _vm._s(account.accountName) + "\n                          ")]);
    })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<td data-v-49f64b14>", "</td>", [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.CRglAccountId,
        expression: "line.CRglAccountId"
      }],
      staticClass: "form-control form-control-sm",
      class: {
        'is-invalid': _vm.errors[`line_${index}_CRglAccountId`]
      },
      on: {
        "change": function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(line, "CRglAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("ເລືອກ CR Account")]), _vm._v(" "), _vm._l(_vm.glAccounts, function (account) {
      return _c('option', {
        key: account.id,
        domProps: {
          "value": account.id
        }
      }, [_vm._v("\n                            " + _vm._s(account.accountNumber) + " -\n                            " + _vm._s(account.accountName) + "\n                          ")]);
    })], 2)]), _vm._ssrNode(" <td data-v-49f64b14><input type=\"number\" step=\"0.01\" min=\"0\" max=\"100\"" + _vm._ssrAttr("value", line.discountRate) + " class=\"form-control form-control-sm\" data-v-49f64b14></td> <td data-v-49f64b14><input type=\"number\" step=\"0.01\" min=\"0\" max=\"100\"" + _vm._ssrAttr("value", line.taxRate) + " class=\"form-control form-control-sm\" data-v-49f64b14></td> <td class=\"line-total\" data-v-49f64b14>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.lineTotal || 0, (_vm$selectedCurrency6 = _vm.selectedCurrency) === null || _vm$selectedCurrency6 === void 0 ? void 0 : _vm$selectedCurrency6.code)) + "\n                      ") + "</td> <td data-v-49f64b14><button type=\"button\" title=\"ລຶບລາຍການ\" class=\"btn btn-sm btn-danger\" data-v-49f64b14><i class=\"fas fa-trash\" data-v-49f64b14></i></button></td>")], 2);
  }), 0)], 2)]), _vm._ssrNode(" <div class=\"add-more-lines\" data-v-49f64b14><button type=\"button\" class=\"btn btn-outline-primary btn-add-more\" data-v-49f64b14><i class=\"fas fa-plus\" data-v-49f64b14></i>\n                  ເພີ່ມລາຍການໃໝ່\n                </button> <div class=\"quick-add-buttons\" data-v-49f64b14><button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-v-49f64b14>\n                    ເພີ່ມ 3 ລາຍການ\n                  </button> <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-v-49f64b14>\n                    ເພີ່ມ 5 ລາຍການ\n                  </button></div></div> <div class=\"line-totals-summary\" data-v-49f64b14><div class=\"totals-grid\" data-v-49f64b14><div class=\"total-item\" data-v-49f64b14><label data-v-49f64b14>ລວມຍ່ອຍ:</label> <span class=\"amount\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal, (_vm$selectedCurrency7 = _vm.selectedCurrency) === null || _vm$selectedCurrency7 === void 0 ? void 0 : _vm$selectedCurrency7.code))) + "</span></div> <div class=\"total-item\" data-v-49f64b14><label data-v-49f64b14>ສ່ວນຫຼຸດ:</label> <span class=\"amount discount\" data-v-49f64b14>" + _vm._ssrEscape("-" + _vm._s(_vm.formatCurrency(_vm.calculatedDiscount, (_vm$selectedCurrency8 = _vm.selectedCurrency) === null || _vm$selectedCurrency8 === void 0 ? void 0 : _vm$selectedCurrency8.code))) + "</span></div> <div class=\"total-item\" data-v-49f64b14><label data-v-49f64b14>ພາສີ:</label> <span class=\"amount\" data-v-49f64b14>" + _vm._ssrEscape("+" + _vm._s(_vm.formatCurrency(_vm.calculatedTax, (_vm$selectedCurrency9 = _vm.selectedCurrency) === null || _vm$selectedCurrency9 === void 0 ? void 0 : _vm$selectedCurrency9.code))) + "</span></div> <div class=\"total-item grand-total\" data-v-49f64b14><label data-v-49f64b14>ລວມທັງໝົດ:</label> <span class=\"amount\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal, (_vm$selectedCurrency10 = _vm.selectedCurrency) === null || _vm$selectedCurrency10 === void 0 ? void 0 : _vm$selectedCurrency10.code))) + "</span></div> " + (_vm.selectedCurrency && _vm.selectedCurrency.code !== 'LAK' && _vm.form.exchangeRate ? "<div class=\"total-item local-currency\" data-v-49f64b14><label data-v-49f64b14>ລວມເປັນ LAK:</label> <span class=\"amount local\" data-v-49f64b14>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal * parseFloat(_vm.form.exchangeRate || 1), 'LAK'))) + "</span></div>" : "<!---->") + "</div></div>")], 2)], 2)])], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-49f64b14><div class=\"footer-actions\" data-v-49f64b14><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-49f64b14><i class=\"fas fa-times\" data-v-49f64b14></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-49f64b14>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-49f64b14></i>" : "<i class=\"fas fa-save\" data-v-49f64b14></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div></div>")], 2), _vm._ssrNode(" "), _c('audit-log-dialog', {
    attrs: {
      "visible": _vm.auditDialogVisible,
      "invoice-id": _vm.form.id,
      "invoice-info": _vm.getInvoiceInfo()
    },
    on: {
      "close": _vm.closeAuditDialog
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/invoice/index.vue?vue&type=template&id=49f64b14&scoped=true&

// EXTERNAL MODULE: ./components/accounting/ap/invoice/audit/index.vue + 3 modules
var audit = __webpack_require__(584);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/index.vue?vue&type=script&lang=js&

/* harmony default export */ var invoicevue_type_script_lang_js_ = ({
  name: 'APInvoiceDialog',
  components: {
    AuditLogDialog: audit["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoice: {
      type: Object,
      default: null
    },
    vendors: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    glAccounts: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default: null
    }
  },
  emits: ['close', 'save'],
  data() {
    return {
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      lineItems: [],
      nextTempId: 1,
      selectedVendor: null,
      selectedCurrency: null,
      auditDialogVisible: false,
      form: {
        id: null,
        invoiceNumber: '',
        vendorInvoiceNumber: '',
        vendorId: '',
        invoiceDate: '',
        dueDate: '',
        description: '',
        totalAmount: '',
        exchangeRate: 1.0,
        currencyId: '',
        makerId: '',
        note: '',
        reason: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!this.invoice;
    },
    auditTrail() {
      if (!this.invoice) {
        var _this$user, _this$user2, _this$user3, _this$user4;
        return {
          // Default values for new invoice
          makerName: ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.cus_name) || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.name) || 'ຜູ້ໃຊ້ປະຈຸບັນ',
          makerPosition: 'ພະນັກງານບັນຊີ',
          makerEmail: ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.cus_email) || ((_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.email) || '',
          createdDate: new Date().toISOString().split('T')[0],
          createdTime: new Date().toLocaleTimeString('en-GB'),
          isChecked: false,
          isApproved: false,
          checkerName: null,
          checkerPosition: null,
          checkerEmail: null,
          checkedDate: null,
          checkedTime: null,
          checkerComment: null
        };
      }

      // Extract maker information from invoice
      const maker = this.invoice.maker || {};
      const checker = this.invoice.checker || null;

      // Parse dates
      const createdAt = new Date(this.invoice.createdAt);
      const approvedAt = this.invoice.approvedAt ? new Date(this.invoice.approvedAt) : null;
      return {
        // Maker Information
        makerName: maker.cus_name || 'ບໍ່ມີຂໍ້ມູນ',
        makerPosition: maker.position || 'ພະນັກງານບັນຊີ',
        makerEmail: maker.cus_email || '',
        makerId: maker.cus_id || maker.id,
        createdDate: createdAt.toISOString().split('T')[0],
        createdTime: createdAt.toLocaleTimeString('en-GB'),
        createdDateTime: this.invoice.createdAt,
        // Checker Information
        checkerName: (checker === null || checker === void 0 ? void 0 : checker.cus_name) || null,
        checkerPosition: (checker === null || checker === void 0 ? void 0 : checker.position) || 'ຫົວໜ້າຝ່າຍບັນຊີ',
        checkerEmail: (checker === null || checker === void 0 ? void 0 : checker.cus_email) || null,
        checkerId: (checker === null || checker === void 0 ? void 0 : checker.cus_id) || (checker === null || checker === void 0 ? void 0 : checker.id) || null,
        checkedDate: approvedAt ? approvedAt.toISOString().split('T')[0] : null,
        checkedTime: approvedAt ? approvedAt.toLocaleTimeString('en-GB') : null,
        checkedDateTime: this.invoice.approvedAt,
        // Status and Comments
        isChecked: !!this.invoice.checkerId && !!this.invoice.approvedAt,
        isApproved: this.invoice.status === 'approved',
        checkerComment: this.invoice.checkerComment || null,
        // Invoice status
        status: this.invoice.status || 'draft',
        version: this.invoice.version || 1
      };
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal = (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0);
        return sum + subtotal;
      }, 0);
    },
    calculatedDiscount() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.discountAmount) || 0), 0);
    },
    calculatedTax() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.taxAmount) || 0), 0);
    },
    calculatedTotal() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.lineTotal) || 0), 0);
    },
    isFormValid() {
      const hasValidHeader = this.form.invoiceNumber && this.form.vendorInvoiceNumber && this.form.vendorId && this.form.invoiceDate && this.form.dueDate && this.form.currencyId && this.form.exchangeRate && parseFloat(this.form.exchangeRate) > 0 && (!this.isEdit || this.form.reason);
      const hasValidLines = this.lineItems.length > 0 && this.lineItems.every(line => line.description && (parseFloat(line.quantity) || 0) > 0 && (parseFloat(line.unitPrice) || 0) >= 0 && line.DRglAccountId && line.CRglAccountId);
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
    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    }
  },
  methods: {
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          vendorInvoiceNumber: this.invoice.vendorInvoiceNumber,
          vendorId: this.invoice.vendorId,
          invoiceDate: this.invoice.invoiceDate ? this.invoice.invoiceDate.split('T')[0] : '',
          dueDate: this.invoice.dueDate ? this.invoice.dueDate.split('T')[0] : '',
          description: this.invoice.description || '',
          totalAmount: this.invoice.totalAmount,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          currencyId: this.invoice.currencyId,
          makerId: this.invoice.makerId,
          note: this.invoice.note || '',
          reason: ''
        };
        await this.loadLineItems(this.invoice.id);
      } else {
        this.resetForm();

        // Initialize with default currency
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'LAK') || this.currencies.find(c => c.code === 'USD') || this.currencies[0];
          this.form.currencyId = defaultCurrency.id;
          this.selectedCurrency = defaultCurrency;

          // Set default exchange rate based on currency
          this.form.exchangeRate = defaultCurrency.code === 'LAK' ? 1.0 : 1.0;
        }

        // Initialize with one empty line item
        this.lineItems = [this.createEmptyLine()];
      }
      this.updateSelectedVendor();
      this.updateSelectedCurrency();
    },
    resetDialog() {
      this.resetForm();
      this.lineItems = [];
      this.selectedVendor = null;
      this.selectedCurrency = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
      this.auditDialogVisible = false;
    },
    async loadLineItems(invoiceId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ap-invoices-lines/invoice/${invoiceId}`);
        this.lineItems = data.data || [this.createEmptyLine()];
        this.lineItems.forEach(line => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++;
          }
          // Recalculate line totals to ensure consistency
          this.calculateLineTotal(line);
        });
      } catch (error) {
        console.error('Error loading line items:', error);
        this.lineItems = [this.createEmptyLine()];
      }
    },
    // Audit Dialog Methods
    openAuditDialog() {
      if (this.form.id) {
        this.auditDialogVisible = true;
      }
    },
    closeAuditDialog() {
      this.auditDialogVisible = false;
    },
    getInvoiceInfo() {
      if (!this.invoice) return null;
      return {
        invoiceNumber: this.form.invoiceNumber,
        vendorInvoiceNumber: this.form.vendorInvoiceNumber,
        totalAmount: this.calculatedTotal,
        status: this.invoice.status
      };
    },
    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        DRglAccountId: '',
        CRglAccountId: '',
        discountRate: 0,
        discountAmount: 0,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0,
        note: ''
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
      const discountRate = parseFloat(line.discountRate) || 0;
      const taxRate = parseFloat(line.taxRate) || 0;
      const subtotal = quantity * unitPrice;
      const discountAmount = subtotal * (discountRate / 100);
      line.discountAmount = discountAmount;
      const afterDiscount = subtotal - discountAmount;
      const taxAmount = afterDiscount * (taxRate / 100);
      line.taxAmount = taxAmount;
      line.lineTotal = afterDiscount + taxAmount;

      // Trigger exchange rate calculation when line totals change
      this.calculateExchangeAmounts();
    },
    calculateExchangeAmounts() {
      // This method can be used to recalculate amounts when exchange rate changes
      // It's called when the exchange rate field is updated
      this.clearFieldError('exchangeRate');
    },
    updateSelectedVendor() {
      if (this.form.vendorId && this.vendors.length > 0) {
        this.selectedVendor = this.vendors.find(v => v.id === this.form.vendorId);
      } else {
        this.selectedVendor = null;
      }
    },
    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);

        // Auto-set exchange rate for LAK
        if (this.selectedCurrency && this.selectedCurrency.code === 'LAK') {
          this.form.exchangeRate = 1.0;
        }
      } else {
        this.selectedCurrency = null;
      }
    },
    onVendorChange() {
      this.updateSelectedVendor();
      this.calculateDueDate();
      this.clearFieldError('vendorId');
    },
    onCurrencyChange() {
      this.updateSelectedCurrency();
      this.clearFieldError('currencyId');
    },
    calculateDueDate() {
      var _this$selectedVendor;
      if (this.form.invoiceDate && (_this$selectedVendor = this.selectedVendor) !== null && _this$selectedVendor !== void 0 && _this$selectedVendor.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(invoiceDate);
        dueDate.setDate(dueDate.getDate() + parseInt(this.selectedVendor.paymentTerms));
        this.form.dueDate = dueDate.toISOString().split('T')[0];
      }
    },
    validateForm() {
      this.errors = {};

      // Header validation
      if (!this.form.invoiceNumber) {
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້';
      }
      if (!this.form.vendorInvoiceNumber) {
        this.errors.vendorInvoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ';
      }
      if (!this.form.vendorId) {
        this.errors.vendorId = 'ກະລຸນາເລືອກຜູ້ຂາຍ';
      }
      if (!this.form.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
      }

      // Exchange rate validation
      if (!this.form.exchangeRate) {
        this.errors.exchangeRate = 'ກະລຸນາໃສ່ອັດຕາແລກປ່ຽນ';
      } else if (parseFloat(this.form.exchangeRate) <= 0) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0';
      }
      if (!this.form.invoiceDate) {
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້';
      }
      if (!this.form.dueDate) {
        this.errors.dueDate = 'ກະລຸນາໃສ່ວັນທີຄົບກຳນົດ';
      }

      // Date validation
      if (this.form.invoiceDate && this.form.dueDate) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(this.form.dueDate);
        if (dueDate <= invoiceDate) {
          this.errors.dueDate = 'ວັນທີຄົບກຳນົດຕ້ອງຫຼັງຈາກວັນທີໃບແຈ້ງໜີ້';
        }
      }

      // Line items validation
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
          if (!line.DRglAccountId) {
            this.errors[`line_${i}_DRglAccountId`] = 'ກະລຸນາເລືອກ DR Account';
          }
          if (!line.CRglAccountId) {
            this.errors[`line_${i}_CRglAccountId`] = 'ກະລຸນາເລືອກ CR Account';
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
      var _this$user5;
      if (!this.validateForm()) {
        // Switch to appropriate tab if there are errors
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
        makerId: this.form.makerId || ((_this$user5 = this.user) === null || _this$user5 === void 0 ? void 0 : _this$user5.id),
        totalAmount: this.calculatedTotal,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          discountRate: parseFloat(line.discountRate) || 0,
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
        vendorInvoiceNumber: '',
        vendorId: '',
        invoiceDate: '',
        dueDate: '',
        description: '',
        totalAmount: '',
        exchangeRate: 1.0,
        currencyId: '',
        makerId: '',
        note: '',
        reason: ''
      };
    },
    formatCurrency(amount, currencyCode = 'USD') {
      const currency = currencyCode || 'USD';
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency === 'LAK' ? 'USD' : currency,
        // Fallback since LAK might not be supported
        minimumFractionDigits: currency === 'LAK' ? 0 : 2,
        maximumFractionDigits: currency === 'LAK' ? 0 : 2
      });
      if (currency === 'LAK') {
        return `₭${new Intl.NumberFormat('en-US').format(amount || 0)}`;
      }
      return formatter.format(amount || 0);
    },
    getStatusText(status) {
      const statusMap = {
        'draft': 'ຮ່າງ',
        'pending': 'ລໍຖ້າການອະນຸມັດ',
        'approved': 'ອະນຸມັດແລ້ວ',
        'rejected': 'ປະຕິເສດ',
        'paid': 'ຈ່າຍແລ້ວ',
        'cancelled': 'ຍົກເລີກ'
      };
      return statusMap[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/invoice/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ap_invoicevue_type_script_lang_js_ = (invoicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(646)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ap_invoicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "49f64b14",
  "86e34e32"
  
)

/* harmony default export */ var invoice = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ap-invoice.js.map