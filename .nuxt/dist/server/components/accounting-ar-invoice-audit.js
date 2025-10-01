exports.ids = [9,10];
exports.modules = {

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ar_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545);

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
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 367, 7));

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
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11;
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
                currencyId: (_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.currencyId,
                exchangeRate: (_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.exchangeRate
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
          var _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData21, _log$recordData22;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', ((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.invoiceNumber) || '', ((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.totalAmount) || '', ((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.taxAmount) || '', ((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.netAmount) || '', this.formatDate((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.invoiceDate) || '', this.formatDate((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.dueDate) || '', this.getStatusText((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : _log$recordData18.status) || '', ((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : _log$recordData19.description) || '', ((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : _log$recordData20.clientId) || '', ((_log$recordData21 = log.recordData) === null || _log$recordData21 === void 0 ? void 0 : _log$recordData21.currencyId) || '', ((_log$recordData22 = log.recordData) === null || _log$recordData22 === void 0 ? void 0 : _log$recordData22.exchangeRate) || ''];
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
      var _log$recordData23, _log$recordData23$mak, _log$recordData24, _log$recordData24$che, _log$user;
      return ((_log$recordData23 = log.recordData) === null || _log$recordData23 === void 0 ? void 0 : (_log$recordData23$mak = _log$recordData23.maker) === null || _log$recordData23$mak === void 0 ? void 0 : _log$recordData23$mak.cus_email) || ((_log$recordData24 = log.recordData) === null || _log$recordData24 === void 0 ? void 0 : (_log$recordData24$che = _log$recordData24.checker) === null || _log$recordData24$che === void 0 ? void 0 : _log$recordData24$che.cus_email) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.email) || '';
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
      var _log$recordData25, _log$recordData25$mak, _log$recordData26, _log$recordData26$che, _log$user2;
      return ((_log$recordData25 = log.recordData) === null || _log$recordData25 === void 0 ? void 0 : (_log$recordData25$mak = _log$recordData25.maker) === null || _log$recordData25$mak === void 0 ? void 0 : _log$recordData25$mak.cus_name) || ((_log$recordData26 = log.recordData) === null || _log$recordData26 === void 0 ? void 0 : (_log$recordData26$che = _log$recordData26.checker) === null || _log$recordData26$che === void 0 ? void 0 : _log$recordData26$che.cus_name) || ((_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.name) || 'ບໍ່ຮູ້ຈັກ';
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(346)["URL"]))

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(535);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("11c73693", content, true, context)
};

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(600);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1f452959", content, true, context)
};

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(498);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-audit-viewer[data-v-6e17086e]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-6e17086e]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-6e17086e]{align-items:center;display:flex;gap:8px}.filter-input[data-v-6e17086e]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:120px;padding:8px 12px}.filter-input[data-v-6e17086e]:focus{border-color:#667eea;outline:none}.btn-clear[data-v-6e17086e],.btn-search[data-v-6e17086e]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-6e17086e]{background:#667eea;color:#fff}.btn-clear[data-v-6e17086e]{background:#6c757d;color:#fff}.loading[data-v-6e17086e]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-6e17086e]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-6e17086e]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-6e17086e]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-6e17086e]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-6e17086e]{background:#28a745}.dot-update[data-v-6e17086e]{background:#667eea}.dot-delete[data-v-6e17086e]{background:#dc3545}.dot-approve[data-v-6e17086e]{background:#28a745}.dot-reject[data-v-6e17086e]{background:#dc3545}.dot-submit[data-v-6e17086e]{background:#17a2b8}.dot-cancel[data-v-6e17086e]{background:#ffc107}.timeline-content[data-v-6e17086e]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-6e17086e]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-6e17086e]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-6e17086e]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-6e17086e],.content-header[data-v-6e17086e]{align-items:center;display:flex}.action-info[data-v-6e17086e]{gap:12px}.action-badge[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-6e17086e]{background:#d4edda;color:#155724}.badge-update[data-v-6e17086e]{background:#e6efff;color:#004085}.badge-delete[data-v-6e17086e]{background:#f8d7da;color:#721c24}.badge-approve[data-v-6e17086e]{background:#d4edda;color:#155724}.badge-reject[data-v-6e17086e]{background:#f8d7da;color:#721c24}.badge-submit[data-v-6e17086e]{background:#d1ecf1;color:#0c5460}.amount-change[data-v-6e17086e],.badge-cancel[data-v-6e17086e]{background:#fff3cd;color:#856404}.amount-change[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-6e17086e]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-6e17086e],.user-info[data-v-6e17086e]{align-items:center;display:flex}.user-info[data-v-6e17086e]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-6e17086e]{color:#666;font-size:12px}.invoice-info[data-v-6e17086e]{align-items:center;display:flex;font-size:14px;gap:12px}.invoice-number[data-v-6e17086e]{color:#667eea;font-size:15px;font-weight:600}.invoice-amount[data-v-6e17086e]{color:#28a745;font-size:15px;font-weight:600}.invoice-date[data-v-6e17086e]{color:#666;font-size:13px}.content-status[data-v-6e17086e]{justify-content:space-between;margin-bottom:8px}.content-status[data-v-6e17086e],.status-badge[data-v-6e17086e]{align-items:center;display:flex}.status-badge[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:500;gap:4px;padding:3px 8px}.status-badge i[data-v-6e17086e]{font-size:8px}.status-draft[data-v-6e17086e]{background:#e9ecef;color:#495057}.status-sent[data-v-6e17086e]{background:#d1ecf1;color:#0c5460}.status-paid[data-v-6e17086e]{background:#d4edda;color:#155724}.status-overdue[data-v-6e17086e]{background:#f8d7da;color:#721c24}.status-cancelled[data-v-6e17086e]{background:#e2e3e5;color:#383d41}.status-pending[data-v-6e17086e]{background:#fff3cd;color:#856404}.status-approved[data-v-6e17086e]{background:#d4edda;color:#155724}.status-rejected[data-v-6e17086e]{background:#f8d7da;color:#721c24}.line-items-count[data-v-6e17086e]{background:#f8f9fa;border-radius:3px;color:#666;font-size:12px;padding:2px 6px}.content-preview[data-v-6e17086e]{display:flex;font-size:13px;gap:12px;margin-bottom:8px}.description[data-v-6e17086e]{color:#666}.content-reason[data-v-6e17086e]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-6e17086e]{font-size:11px}.expand-indicator[data-v-6e17086e]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-6e17086e]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-6e17086e]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-bottom:16px}.detail-item[data-v-6e17086e]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-6e17086e]{color:#333;font-size:13px}.amount[data-v-6e17086e]{color:#28a745;font-weight:600}.status[data-v-6e17086e]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.description-section[data-v-6e17086e]{margin-bottom:16px}.description-section h4[data-v-6e17086e]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.description-section p[data-v-6e17086e]{color:#666;font-size:13px;line-height:1.4;margin:0}.line-items-section h4[data-v-6e17086e]{align-items:center;border-bottom:1px solid #e5e5e5;color:#333;display:flex;font-size:14px;justify-content:space-between;margin:0 0 12px;padding-bottom:4px}.total-amount[data-v-6e17086e]{color:#28a745;font-size:13px;font-weight:600}.line-items-list[data-v-6e17086e]{display:flex;flex-direction:column;gap:8px}.line-item[data-v-6e17086e]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:12px}.line-item-header[data-v-6e17086e]{align-items:center;display:flex;justify-content:space-between;margin-bottom:6px}.line-number[data-v-6e17086e]{color:#333;font-size:13px;font-weight:600}.line-total[data-v-6e17086e]{color:#28a745;font-size:14px;font-weight:600}.line-item-details[data-v-6e17086e]{display:flex;flex-direction:column;gap:6px}.line-description[data-v-6e17086e]{color:#333;font-size:13px;font-weight:500}.line-quantities[data-v-6e17086e]{color:#666;display:flex;font-size:12px;gap:12px}.quantity[data-v-6e17086e],.tax-rate[data-v-6e17086e],.unit-price[data-v-6e17086e]{background:#e9ecef;border-radius:3px;padding:2px 6px}.approval-section h4[data-v-6e17086e]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.approval-grid[data-v-6e17086e]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.approval-item[data-v-6e17086e]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.approval-item label[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.approval-item span[data-v-6e17086e]{color:#333;font-size:13px}.empty-state[data-v-6e17086e]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:48px 20px;text-align:center}.empty-state i[data-v-6e17086e]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-6e17086e]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-6e17086e]{font-size:14px;margin:0}.pagination[data-v-6e17086e]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-6e17086e],.pagination[data-v-6e17086e]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-6e17086e]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-6e17086e]:hover:not(:disabled){background:#f8f9fa;border-color:#667eea}.page-btn[data-v-6e17086e]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-6e17086e]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-6e17086e]{padding:16px}.content-main[data-v-6e17086e]{gap:8px}.content-main[data-v-6e17086e],.content-status[data-v-6e17086e]{align-items:flex-start;flex-direction:column}.content-status[data-v-6e17086e]{gap:6px}.approval-grid[data-v-6e17086e],.details-grid[data-v-6e17086e]{grid-template-columns:1fr}.expanded-details[data-v-6e17086e]{margin-left:0}.timeline-item[data-v-6e17086e]:not(:last-child):before{display:none}.filter-group[data-v-6e17086e]{flex-wrap:wrap}.line-item-header[data-v-6e17086e],.line-items-section h4[data-v-6e17086e]{align-items:flex-start;flex-direction:column;gap:4px}.line-quantities[data-v-6e17086e]{flex-wrap:wrap}}@media (max-width:480px){.invoice-info[data-v-6e17086e]{align-items:flex-start}.content-preview[data-v-6e17086e],.invoice-info[data-v-6e17086e]{flex-direction:column;gap:4px}.filter-input[data-v-6e17086e]{min-width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/view/index.vue?vue&type=template&id=6e17086e&scoped=true&
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
    var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData6$line, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData21, _log$recordData22, _log$recordData22$lin, _log$recordData23, _log$recordData24;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-6e17086e><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-6e17086e><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-6e17086e></i></div> <div class=\"timeline-content\" data-v-6e17086e><div class=\"content-header\" data-v-6e17086e><div class=\"action-info\" data-v-6e17086e><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-6e17086e><div class=\"user-info\" data-v-6e17086e><i class=\"fas fa-user\" data-v-6e17086e></i> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"invoice-info\" data-v-6e17086e><span class=\"invoice-number\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber) || 'N/A')) + "</span> <span class=\"invoice-amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount))) + "</span> <span class=\"invoice-date\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.invoiceDate))) + "</span></div></div> <div class=\"content-status\" data-v-6e17086e><span" + _vm._ssrClass("status-badge", `status-${(_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status}`) + " data-v-6e17086e><i class=\"fas fa-circle\" data-v-6e17086e></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusText((_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.status)) + "\n          ") + "</span> " + ((_log$recordData6 = log.recordData) !== null && _log$recordData6 !== void 0 && (_log$recordData6$line = _log$recordData6.lineItems) !== null && _log$recordData6$line !== void 0 && _log$recordData6$line.length ? "<span class=\"line-items-count\" data-v-6e17086e>" + _vm._ssrEscape("\n            " + _vm._s(log.recordData.lineItems.length) + " line item" + _vm._s(log.recordData.lineItems.length > 1 ? 's' : '') + "\n          ") + "</span>" : "<!---->") + "</div> " + (log.reason ? "<div class=\"content-reason\" data-v-6e17086e><i class=\"fas fa-comment-alt\" data-v-6e17086e></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " " + ((_log$recordData7 = log.recordData) !== null && _log$recordData7 !== void 0 && _log$recordData7.description ? "<div class=\"content-preview\" data-v-6e17086e><span class=\"description\" data-v-6e17086e>" + _vm._ssrEscape("\n            " + _vm._s(_vm.truncateText(log.recordData.description, 50)) + "\n          ") + "</span></div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-6e17086e><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-6e17086e></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-6e17086e><div class=\"details-grid\" data-v-6e17086e><div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.invoiceId || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice Number:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.invoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice Date:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.invoiceDate))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Due Date:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.dueDate))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Total Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.totalAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Tax Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.taxAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Net Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.netAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.status}`) + " data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Client ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.clientId) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Currency ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.currencyId) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Exchange Rate:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : _log$recordData18.exchangeRate) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Created:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : _log$recordData19.createdAt))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Last Updated:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : _log$recordData20.updateTimestamp))) + "</span></div></div> " + ((_log$recordData21 = log.recordData) !== null && _log$recordData21 !== void 0 && _log$recordData21.description ? "<div class=\"description-section\" data-v-6e17086e><h4 data-v-6e17086e>Description</h4> <p data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.description)) + "</p></div>" : "<!---->") + " " + ((_log$recordData22 = log.recordData) !== null && _log$recordData22 !== void 0 && (_log$recordData22$lin = _log$recordData22.lineItems) !== null && _log$recordData22$lin !== void 0 && _log$recordData22$lin.length ? "<div class=\"line-items-section\" data-v-6e17086e><h4 data-v-6e17086e>" + _vm._ssrEscape("\n            Line Items (" + _vm._s(log.recordData.lineItems.length) + ")\n            ") + "<span class=\"total-amount\" data-v-6e17086e>" + _vm._ssrEscape("\n              Total: " + _vm._s(_vm.formatCurrency(_vm.getTotalLineItemsAmount(log.recordData.lineItems))) + "\n            ") + "</span></h4> <div class=\"line-items-list\" data-v-6e17086e>" + _vm._ssrList(log.recordData.lineItems, function (lineItem) {
      return "<div class=\"line-item\" data-v-6e17086e><div class=\"line-item-header\" data-v-6e17086e><span class=\"line-number\" data-v-6e17086e>" + _vm._ssrEscape("Line #" + _vm._s(lineItem.lineNumber)) + "</span> <span class=\"line-total\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(lineItem.lineTotal))) + "</span></div> <div class=\"line-item-details\" data-v-6e17086e><div class=\"line-description\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(lineItem.description || 'No description')) + "</div> <div class=\"line-quantities\" data-v-6e17086e><span class=\"quantity\" data-v-6e17086e>" + _vm._ssrEscape("Qty: " + _vm._s(lineItem.quantity)) + "</span> <span class=\"unit-price\" data-v-6e17086e>" + _vm._ssrEscape("Unit Price: " + _vm._s(_vm.formatCurrency(lineItem.unitPrice))) + "</span> <span class=\"tax-rate\" data-v-6e17086e>" + _vm._ssrEscape("Tax: " + _vm._s(lineItem.taxRate) + "%") + "</span></div></div></div>";
    }) + "</div></div>" : "<!---->") + " " + ((_log$recordData23 = log.recordData) !== null && _log$recordData23 !== void 0 && _log$recordData23.maker || (_log$recordData24 = log.recordData) !== null && _log$recordData24 !== void 0 && _log$recordData24.checker ? "<div class=\"approval-section\" data-v-6e17086e><h4 data-v-6e17086e>Approval Information</h4> <div class=\"approval-grid\" data-v-6e17086e>" + (log.recordData.maker ? "<div class=\"approval-item\" data-v-6e17086e><label data-v-6e17086e>Maker:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.maker.cus_name || log.recordData.maker.name || '-')) + "</span></div>" : "<!---->") + " " + (log.recordData.checker ? "<div class=\"approval-item\" data-v-6e17086e><label data-v-6e17086e>Checker:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.checker.cus_name || log.recordData.checker.name || '-')) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-6e17086e><i class=\"fas fa-history\" data-v-6e17086e></i> <h3 data-v-6e17086e>No invoice audit records found</h3> <p data-v-6e17086e>No changes have been recorded for this invoice yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-6e17086e><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-6e17086e><i class=\"fas fa-chevron-left\" data-v-6e17086e></i></button> <span class=\"page-info\" data-v-6e17086e>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-6e17086e><i class=\"fas fa-chevron-right\" data-v-6e17086e></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue?vue&type=template&id=6e17086e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var audit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(534)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e17086e",
  "a70d6656"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc54ccc6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-audit-dialog-overlay[data-v-bc54ccc6]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.invoice-audit-dialog[data-v-bc54ccc6]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.invoice-audit-dialog-header[data-v-bc54ccc6]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-bc54ccc6]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.invoice-subtitle[data-v-bc54ccc6]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-bc54ccc6]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-bc54ccc6]:hover{background:hsla(0,0%,100%,.2)}.invoice-audit-dialog-body[data-v-bc54ccc6]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.invoice-audit-dialog-body[data-v-bc54ccc6]::-webkit-scrollbar{width:8px}.invoice-audit-dialog-body[data-v-bc54ccc6]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.invoice-audit-dialog-body[data-v-bc54ccc6]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.invoice-audit-dialog-body[data-v-bc54ccc6]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.invoice-audit-dialog-footer[data-v-bc54ccc6]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.export-options[data-v-bc54ccc6]{align-items:center;display:flex;gap:0}.main-export-btn[data-v-bc54ccc6]{border-bottom-right-radius:0;border-top-right-radius:0}.export-dropdown[data-v-bc54ccc6]{position:relative}.dropdown-toggle[data-v-bc54ccc6]{border-bottom-left-radius:0;border-left:none;border-top-left-radius:0;padding:10px 8px}.dropdown-menu[data-v-bc54ccc6]{background:#fff;border:1px solid #ddd;border-radius:6px;bottom:100%;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:5px;min-width:160px;position:absolute;right:0;z-index:1000}.dropdown-item[data-v-bc54ccc6]{align-items:center;background:none;border:none;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px 12px;text-align:left;transition:background-color .2s;width:100%}.dropdown-item[data-v-bc54ccc6]:hover{background:#f8f9fa}.btn[data-v-bc54ccc6]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-bc54ccc6]{background:#667eea;color:#fff}.btn-primary[data-v-bc54ccc6]:hover{background:#5a67d8;transform:translateY(-1px)}.btn-outline-primary[data-v-bc54ccc6]{background:#fff;border:1px solid #667eea;color:#667eea}.btn-outline-primary[data-v-bc54ccc6]:hover{background:#667eea;color:#fff;transform:translateY(-1px)}.btn-secondary[data-v-bc54ccc6]{background:#6c757d;color:#fff}.btn-secondary[data-v-bc54ccc6]:hover{background:#5a6268;transform:translateY(-1px)}.btn[data-v-bc54ccc6]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.invoice-audit-dialog[data-v-bc54ccc6]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.invoice-audit-dialog-header[data-v-bc54ccc6]{padding:15px}.header-info h3[data-v-bc54ccc6]{font-size:18px}.invoice-audit-dialog-footer[data-v-bc54ccc6]{flex-direction:column;padding:15px}.btn[data-v-bc54ccc6],.export-options[data-v-bc54ccc6]{width:100%}.btn[data-v-bc54ccc6]{justify-content:center}.main-export-btn[data-v-bc54ccc6]{border-radius:6px;border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-toggle[data-v-bc54ccc6]{border-left:1px solid #667eea;border-radius:6px;border-top-left-radius:0;border-top-right-radius:0}.dropdown-menu[data-v-bc54ccc6]{border:none;box-shadow:none;margin-bottom:0;position:static;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/index.vue?vue&type=template&id=bc54ccc6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "invoice-audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"invoice-audit-dialog\" data-v-bc54ccc6>", "</div>", [_vm._ssrNode("<div class=\"invoice-audit-dialog-header\" data-v-bc54ccc6><div class=\"header-info\" data-v-bc54ccc6><h3 data-v-bc54ccc6><i class=\"fas fa-history\" data-v-bc54ccc6></i>\n          ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້\n        </h3> " + (_vm.invoiceInfo ? "<p class=\"invoice-subtitle\" data-v-bc54ccc6>" + _vm._ssrEscape("\n          ໃບແຈ້ງໜີ້: " + _vm._s(_vm.invoiceInfo.invoiceNumber) + " - \n          " + _vm._s(_vm.formatCurrency(_vm.invoiceInfo.totalAmount)) + " - \n          " + _vm._s(_vm.formatDate(_vm.invoiceInfo.invoiceDate)) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-bc54ccc6><i class=\"fas fa-times\" data-v-bc54ccc6></i></button></div> "), _vm._ssrNode("<div class=\"invoice-audit-dialog-body\" data-v-bc54ccc6>", "</div>", [_c('invoice-audit-viewer', {
    ref: "invoiceAuditViewer",
    attrs: {
      "invoice-id": _vm.invoiceId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"invoice-audit-dialog-footer\" data-v-bc54ccc6><button type=\"button\" class=\"btn btn-secondary\" data-v-bc54ccc6><i class=\"fas fa-times\" data-v-bc54ccc6></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-bc54ccc6><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-bc54ccc6>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-bc54ccc6></i>" : "<i class=\"fas fa-download\" data-v-bc54ccc6></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-bc54ccc6><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-bc54ccc6><i class=\"fas fa-caret-down\" data-v-bc54ccc6></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-bc54ccc6><button class=\"dropdown-item\" data-v-bc54ccc6><i class=\"fas fa-code\" data-v-bc54ccc6></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-bc54ccc6><i class=\"fas fa-table\" data-v-bc54ccc6></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-bc54ccc6><i class=\"fas fa-print\" data-v-bc54ccc6></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=template&id=bc54ccc6&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js&
var auditvue_type_script_lang_js_ = __webpack_require__(497);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_auditvue_type_script_lang_js_ = (auditvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(599)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_auditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc54ccc6",
  "807c2816"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-invoice-audit.js.map