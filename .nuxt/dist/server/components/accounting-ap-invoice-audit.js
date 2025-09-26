exports.ids = [3,4];
exports.modules = {

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ap_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(536);

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
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 368, 7));

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(347)["URL"]))

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("14cc85f4", content, true, context)
};

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(583);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6c4b4926", content, true, context)
};

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(491);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 522:
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

/***/ 536:
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
  
  var style0 = __webpack_require__(521)
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

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36e4b772_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36e4b772_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36e4b772_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36e4b772_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_36e4b772_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-dialog-overlay[data-v-36e4b772]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.audit-dialog[data-v-36e4b772]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.audit-dialog-header[data-v-36e4b772]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-36e4b772]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.invoice-subtitle[data-v-36e4b772]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-36e4b772]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-36e4b772]:hover{background:hsla(0,0%,100%,.2)}.audit-dialog-body[data-v-36e4b772]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.audit-dialog-body[data-v-36e4b772]::-webkit-scrollbar{width:8px}.audit-dialog-body[data-v-36e4b772]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.audit-dialog-body[data-v-36e4b772]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.audit-dialog-body[data-v-36e4b772]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.audit-dialog-footer[data-v-36e4b772]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-36e4b772]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-36e4b772]{background:#667eea;color:#fff}.btn-primary[data-v-36e4b772]:hover{background:#5a6fd8;transform:translateY(-1px)}.btn-secondary[data-v-36e4b772]{background:#6c757d;color:#fff}.btn-secondary[data-v-36e4b772]:hover{background:#5a6268;transform:translateY(-1px)}@media (max-width:768px){.audit-dialog[data-v-36e4b772]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.audit-dialog-header[data-v-36e4b772]{padding:15px}.header-info h3[data-v-36e4b772]{font-size:18px}.audit-dialog-footer[data-v-36e4b772]{flex-direction:column;padding:15px}.btn[data-v-36e4b772]{justify-content:center;width:100%}}@media (max-width:480px){.audit-dialog-overlay[data-v-36e4b772]{padding:0}.audit-dialog-header[data-v-36e4b772]{align-items:flex-start;flex-direction:column;gap:10px;position:relative}.close-btn[data-v-36e4b772]{position:absolute;right:15px;top:15px}.header-info h3[data-v-36e4b772]{font-size:16px}.invoice-subtitle[data-v-36e4b772]{font-size:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/index.vue?vue&type=template&id=36e4b772&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"audit-dialog\" data-v-36e4b772>", "</div>", [_vm._ssrNode("<div class=\"audit-dialog-header\" data-v-36e4b772><div class=\"header-info\" data-v-36e4b772><h3 data-v-36e4b772><i class=\"fas fa-history\" data-v-36e4b772></i>\n          ປະຫວັດການດຳເນີນງານ\n        </h3> " + (_vm.invoiceInfo ? "<p class=\"invoice-subtitle\" data-v-36e4b772>" + _vm._ssrEscape("\n          ໃບແຈ້ງໜີ້: " + _vm._s(_vm.invoiceInfo.invoiceNumber) + " -\n          " + _vm._s(_vm.invoiceInfo.vendorInvoiceNumber) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-36e4b772><i class=\"fas fa-times\" data-v-36e4b772></i></button></div> "), _vm._ssrNode("<div class=\"audit-dialog-body\" data-v-36e4b772>", "</div>", [_c('audit-log-viewer', {
    ref: "auditLogViewer",
    attrs: {
      "invoice-id": _vm.invoiceId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"audit-dialog-footer\" data-v-36e4b772><button type=\"button\" class=\"btn btn-secondary\" data-v-36e4b772><i class=\"fas fa-times\" data-v-36e4b772></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-36e4b772><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-36e4b772>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-36e4b772></i>" : "<i class=\"fas fa-download\" data-v-36e4b772></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-36e4b772><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-36e4b772><i class=\"fas fa-caret-down\" data-v-36e4b772></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-36e4b772><button class=\"dropdown-item\" data-v-36e4b772><i class=\"fas fa-code\" data-v-36e4b772></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-36e4b772><i class=\"fas fa-table\" data-v-36e4b772></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-36e4b772><i class=\"fas fa-print\" data-v-36e4b772></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue?vue&type=template&id=36e4b772&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/index.vue?vue&type=script&lang=js&
var auditvue_type_script_lang_js_ = __webpack_require__(490);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_auditvue_type_script_lang_js_ = (auditvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(582)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_auditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36e4b772",
  "913d5c1a"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ap-invoice-audit.js.map