exports.ids = [14,12,13,16];
exports.modules = {

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ar_invoice_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(570);

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
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 380, 7));

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(359)["URL"]))

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(540);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("27f22b35", content, true, context)
};

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("52254bc8", content, true, context)
};

/***/ }),

/***/ 520:
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
  add("6ca2effe", content, true, context)
};

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 540:
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

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("203c2f70", content, true, context)
};

/***/ }),

/***/ 570:
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
  
  var style0 = __webpack_require__(539)
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

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51dad720_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 580:
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

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e581fa0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(520);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e581fa0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e581fa0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e581fa0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1e581fa0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-container[data-v-1e581fa0]{background:#fff;margin:0 auto;max-width:900px;padding:40px}.invoice-header[data-v-1e581fa0]{border-bottom:3px solid primary;margin-bottom:30px;padding-bottom:15px}.header-flex[data-v-1e581fa0]{align-items:center;display:flex;gap:20px;justify-content:space-between}.header-left[data-v-1e581fa0]{flex-shrink:0}.header-center[data-v-1e581fa0]{flex:1;text-align:left}.header-right[data-v-1e581fa0]{flex-shrink:0;text-align:right}.company-logo[data-v-1e581fa0]{border-radius:4px;display:block;height:auto;max-height:100px;-o-object-fit:contain;object-fit:contain;width:120px}.fallback-logo[data-v-1e581fa0]{opacity:.8}.company-name[data-v-1e581fa0]{color:primary;font-size:24px;font-weight:700;margin:0 0 8px}.company-address[data-v-1e581fa0],.company-contact[data-v-1e581fa0]{color:#666;font-size:13px;margin:5px 0}.invoice-title h3[data-v-1e581fa0]{color:#333;font-size:20px;margin:0 0 5px}.invoice-title h4[data-v-1e581fa0]{color:#666;font-size:16px;margin:0}.invoice-info-grid[data-v-1e581fa0]{display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;background-color:#f9f9f9;border-radius:4px;gap:30px;margin:25px 0;padding:20px}.info-section h5[data-v-1e581fa0]{border-bottom:1px solid #ddd;color:#333;margin:0 0 10px;padding-bottom:5px}.client-name[data-v-1e581fa0],.info-section h5[data-v-1e581fa0]{font-size:14px;font-weight:600}.client-name[data-v-1e581fa0]{margin:5px 0}.client-details[data-v-1e581fa0]{color:#666;font-size:12px;margin:5px 0}.info-row[data-v-1e581fa0]{display:flex;font-size:12px;padding:5px 0}.label[data-v-1e581fa0]{color:#333;font-weight:600;min-width:100px}.value[data-v-1e581fa0]{color:#666}.status-badge[data-v-1e581fa0]{border-radius:12px;display:inline-block;font-size:11px;font-weight:600;padding:3px 10px}.status-badge.paid[data-v-1e581fa0]{background:#d4edda;color:#155724}.status-badge.sent[data-v-1e581fa0]{background:#d1ecf1;color:#0c5460}.status-badge.draft[data-v-1e581fa0]{background:#f8f9fa;color:#6c757d}.status-badge.overdue[data-v-1e581fa0]{background:#f8d7da;color:#721c24}.invoice-table[data-v-1e581fa0]{border-collapse:collapse;font-size:13px;margin:25px 0;width:100%}.invoice-table td[data-v-1e581fa0],.invoice-table th[data-v-1e581fa0]{border:1px solid #ddd;padding:10px}.invoice-table th[data-v-1e581fa0]{background-color:primary;color:#fff;font-weight:600;text-align:left}.invoice-table tbody tr[data-v-1e581fa0]:nth-child(2n){background-color:#f9f9f9}.invoice-table .text-center[data-v-1e581fa0]{text-align:center}.invoice-table .text-right[data-v-1e581fa0]{text-align:right}.subtotal-row td[data-v-1e581fa0],.tax-row td[data-v-1e581fa0]{background-color:#f8f9fa;font-weight:500}.total-row td[data-v-1e581fa0]{background-color:#e8f5e9;font-size:14px;font-weight:700}.amount-words[data-v-1e581fa0]{background-color:#f0f4ff;border-left:4px solid primary;font-size:14px;margin:20px 0;padding:15px}.invoice-notes[data-v-1e581fa0]{background-color:#fff9e6;border-radius:4px;font-size:13px;margin:20px 0;padding:15px}.invoice-footer[data-v-1e581fa0]{border-top:2px solid #ddd;display:flex;justify-content:space-between;margin-top:60px;padding-top:20px}.footer-section[data-v-1e581fa0]{font-size:12px}.footer-section p[data-v-1e581fa0]{margin:5px 0}.signature-area[data-v-1e581fa0]{text-align:center}.signature-line[data-v-1e581fa0]{border-top:2px solid #333;margin:80px 10px 15px;width:200px}.signature-label[data-v-1e581fa0]{color:#333;font-size:13px;font-weight:600;margin:8px 0}.signature-date[data-v-1e581fa0]{color:#666;font-size:12px}@media print{.invoice-container[data-v-1e581fa0]{padding:20px}.company-logo[data-v-1e581fa0]{max-height:80px;width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(360);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(404);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/voucher/index.vue?vue&type=template&id=1e581fa0&scoped=true










var vouchervue_type_template_id_1e581fa0_scoped_true_render = function render() {
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

// CONCATENATED MODULE: ./components/accounting/ar/invoice/voucher/index.vue?vue&type=template&id=1e581fa0&scoped=true

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

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
      return __webpack_require__(140);
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
      return `$${parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    },
    numberToWords(num) {
      // Simplified number to words - you can expand this
      if (num === 0) return 'Zero';
      if (num < 1000) return `${Math.floor(num)} Dollars`;
      if (num < 1000000) return `${Math.floor(num / 1000)} Thousand Dollars`;
      return `${Math.floor(num / 1000000)} Million Dollars`;
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
  
  var style0 = __webpack_require__(581)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_vouchervue_type_script_lang_js,
  vouchervue_type_template_id_1e581fa0_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "1e581fa0",
  "2f40ff48"
  
)

/* harmony default export */ var voucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 618:
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
var auditvue_type_script_lang_js = __webpack_require__(495);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js
 /* harmony default export */ var invoice_auditvue_type_script_lang_js = (auditvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(579)
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

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e384ed0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(557);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e384ed0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e384ed0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e384ed0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e384ed0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-5e384ed0]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1050}.enhanced-dialog[data-v-5e384ed0],.modal-overlay[data-v-5e384ed0]{display:flex;height:100vh;width:100vw}.enhanced-dialog[data-v-5e384ed0]{background:#fff;flex-direction:column;overflow:hidden}.modal-header[data-v-5e384ed0]{background:linear-gradient(135deg,primary,secondary);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;min-height:50px;padding:10px 15px}.modal-header[data-v-5e384ed0],.modal-title[data-v-5e384ed0]{align-items:center;display:flex}.modal-title[data-v-5e384ed0]{font-size:16px;font-weight:600;gap:8px;margin:0}.audit-btn[data-v-5e384ed0]{align-items:center;background:hsla(0,0%,100%,.2);border:1px solid hsla(0,0%,100%,.3);border-radius:4px;color:#fff;cursor:pointer;display:flex;font-size:12px;gap:4px;padding:4px 8px}.audit-btn[data-v-5e384ed0]:hover{background:hsla(0,0%,100%,.3)}.audit-text[data-v-5e384ed0]{font-size:11px}.close-button[data-v-5e384ed0]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;padding:4px;transition:background .2s}.close-button[data-v-5e384ed0]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-5e384ed0]{flex:1;overflow-y:auto}.loading-state[data-v-5e384ed0],.modal-body[data-v-5e384ed0]{display:flex;flex-direction:column}.loading-state[data-v-5e384ed0]{align-items:center;color:#666;justify-content:center;padding:30px}.spinner[data-v-5e384ed0]{animation:spin-5e384ed0 1s linear infinite;border:3px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:30px;margin-bottom:10px;width:30px}@keyframes spin-5e384ed0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.invoice-form[data-v-5e384ed0]{display:flex;flex:1;flex-direction:column}.form-section[data-v-5e384ed0]{border-bottom:1px solid #f0f0f0;padding:15px 20px}.section-header[data-v-5e384ed0]{justify-content:space-between;margin-bottom:12px}.section-header[data-v-5e384ed0],.section-title[data-v-5e384ed0]{align-items:center;display:flex}.section-title[data-v-5e384ed0]{border-bottom:1px solid #e9ecef;color:#333;font-size:14px;font-weight:600;gap:8px;margin:0 0 12px;padding-bottom:6px}.section-title i[data-v-5e384ed0]{color:#667eea;font-size:13px}.line-count[data-v-5e384ed0]{background:#667eea;border-radius:10px;color:#fff;font-size:11px;margin-left:4px;min-width:20px;padding:2px 8px;text-align:center}.add-line-actions[data-v-5e384ed0]{align-items:center;display:flex;gap:6px}.form-row[data-v-5e384ed0]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:10px;gap:10px;margin-bottom:12px}.form-group[data-v-5e384ed0]{margin-bottom:0}.form-group.full-width[data-v-5e384ed0]{grid-column:1/-1}.form-group label[data-v-5e384ed0]{color:#333;display:block;font-size:12px;font-weight:500;margin-bottom:3px}.form-group label.required[data-v-5e384ed0]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-5e384ed0]{border:1px solid #ddd;border-radius:4px;font-size:13px;line-height:1.2;padding:6px 8px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-5e384ed0]:focus{border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-5e384ed0]{border-color:#e74c3c;box-shadow:0 0 0 2px rgba(231,76,60,.1)}.form-control-xs[data-v-5e384ed0]{font-size:12px;padding:4px 6px}.textarea-compact[data-v-5e384ed0]{min-height:50px;resize:vertical}.invalid-feedback[data-v-5e384ed0]{color:#e74c3c;display:block;font-size:11px;margin-top:3px;width:100%}.empty-line-state[data-v-5e384ed0]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:6px;margin-top:12px;padding:30px 20px;text-align:center}.empty-content i[data-v-5e384ed0]{color:#dee2e6;font-size:40px;margin-bottom:12px}.empty-content h4[data-v-5e384ed0]{color:#666;font-size:15px;margin-bottom:8px}.line-items-table-container[data-v-5e384ed0]{border:1px solid #e9ecef;border-radius:6px;margin-top:12px;max-height:400px;overflow:hidden;overflow-y:auto}.line-items-table .table[data-v-5e384ed0]{border-collapse:collapse;margin:0;width:100%}.table-compact[data-v-5e384ed0]{font-size:12px}.line-items-table .table th[data-v-5e384ed0]{background:#f8f9fa;border-bottom:1px solid #dee2e6;font-size:11px;font-weight:600;padding:6px 4px;position:sticky;text-align:center;top:0;z-index:10}.line-items-table .table td[data-v-5e384ed0]{border-top:1px solid #dee2e6;font-size:11px;padding:4px;vertical-align:middle}.line-number[data-v-5e384ed0]{color:#666;font-weight:600;text-align:center}.line-total[data-v-5e384ed0],.tax-amount[data-v-5e384ed0]{color:#333;font-size:11px;font-weight:600;text-align:right}.line-row[data-v-5e384ed0]{transition:background-color .2s}.line-row[data-v-5e384ed0]:hover{background-color:rgba(102,126,234,.05)}.amount-summary[data-v-5e384ed0]{background:#f8f9fa;border-bottom:1px solid #f0f0f0;border-radius:0;border-top:2px solid #667eea;padding:12px 20px}.totals-compact[data-v-5e384ed0]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-gap:8px;gap:8px}.total-item[data-v-5e384ed0]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.total-item.grand-total[data-v-5e384ed0]{border-top:1px solid #667eea;font-size:13px;font-weight:600;grid-column:1/-1;margin-top:4px;padding-top:6px}.total-item .amount[data-v-5e384ed0]{color:#333;font-weight:600}.btn[data-v-5e384ed0]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:12px;gap:4px;line-height:1.2;padding:6px 12px;transition:all .2s ease}.btn-compact[data-v-5e384ed0]{font-size:12px;padding:5px 10px}.btn-sm[data-v-5e384ed0]{font-size:11px;padding:5px 10px}.btn-primary[data-v-5e384ed0]{background:#007bff;color:#fff}.btn-secondary[data-v-5e384ed0]{background:#6c757d;color:#fff}.btn-outline-secondary[data-v-5e384ed0]{background:#fff;border:1px solid #6c757d;color:#6c757d}.btn-danger[data-v-5e384ed0]{background:#dc3545;color:#fff}.btn-xs[data-v-5e384ed0]{align-items:center;border-radius:50%;display:flex;font-size:10px;height:24px;justify-content:center;padding:0;width:24px}.btn[data-v-5e384ed0]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-5e384ed0]:disabled{cursor:not-allowed;opacity:.6;transform:none}.modal-footer[data-v-5e384ed0]{background:#f8f9fa;border-top:1px solid #e9ecef;min-height:50px;padding:10px 15px}.footer-actions[data-v-5e384ed0]{display:flex;gap:8px;justify-content:flex-end}@media (max-width:768px){.form-row[data-v-5e384ed0],.totals-compact[data-v-5e384ed0]{grid-template-columns:1fr}.section-header[data-v-5e384ed0]{align-items:flex-start;flex-direction:column;gap:8px}.add-line-actions[data-v-5e384ed0]{justify-content:flex-start;width:100%}.footer-actions[data-v-5e384ed0]{flex-direction:column}.footer-actions .btn[data-v-5e384ed0]{justify-content:center;width:100%}.line-items-table-container[data-v-5e384ed0]{overflow-x:auto}.line-items-table .table[data-v-5e384ed0]{min-width:600px}}@media (max-width:480px){.modal-header[data-v-5e384ed0]{padding:8px 10px}.modal-title[data-v-5e384ed0]{font-size:14px}.form-section[data-v-5e384ed0]{padding:12px 15px}.amount-summary[data-v-5e384ed0]{padding:10px 15px}.modal-footer[data-v-5e384ed0]{padding:8px 10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=5e384ed0&scoped=true




var maintainvue_type_template_id_5e384ed0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-5e384ed0><h4 class=\"modal-title\" data-v-5e384ed0><i class=\"fas fa-file-invoice\" data-v-5e384ed0></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່') + "\n      ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-5e384ed0><i class=\"fas fa-times\" data-v-5e384ed0></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-5e384ed0>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-5e384ed0></div> <p data-v-5e384ed0>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"invoice-form\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<form data-v-5e384ed0>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-5e384ed0><i class=\"fas fa-info-circle\" data-v-5e384ed0></i>\n              ຂໍ້ມູນພື້ນຖານ\n            </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-5e384ed0><label for=\"invoiceNumber\" class=\"required\" data-v-5e384ed0>ເລກທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceNumber\" type=\"text\" placeholder=\"INV-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.invoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceNumber
  }) + " data-v-5e384ed0> " + (_vm.errors.invoiceNumber ? "<div class=\"invalid-feedback\" data-v-5e384ed0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.invoiceNumber) + "\n                ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<label for=\"clientId\" class=\"required\" data-v-5e384ed0>" + _vm._ssrEscape(_vm._s(_vm.clientLabel)) + "</label> "), _c(VAutocomplete["a" /* default */], {
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
  }), _vm._ssrNode(" " + (_vm.errors.agencyId ? "<div class=\"invalid-feedback\" data-v-5e384ed0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.agencyId) + "\n                ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<label for=\"jobBatchId\" class=\"required\" data-v-5e384ed0>ແບັດຈັອບ</label> "), _c(VAutocomplete["a" /* default */], {
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
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<label for=\"status\" data-v-5e384ed0>ສະຖານະ</label> "), _c('select', {
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
  }, [_vm._v("ຍົກເລີກ")])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-5e384ed0><label for=\"invoiceDate\" class=\"required\" data-v-5e384ed0>ວັນທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.invoiceDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceDate
  }) + " data-v-5e384ed0> " + (_vm.errors.invoiceDate ? "<div class=\"invalid-feedback\" data-v-5e384ed0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.invoiceDate) + "\n                ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-5e384ed0><label for=\"dueDate\" data-v-5e384ed0>ວັນທີຄົບກຳນົດ</label> <input id=\"dueDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.dueDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dueDate
  }) + " data-v-5e384ed0> " + (_vm.errors.dueDate ? "<div class=\"invalid-feedback\" data-v-5e384ed0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.dueDate) + "\n                ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" data-v-5e384ed0>ສະກຸນເງິນ</label> "), _c(VAutocomplete["a" /* default */], {
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
  })], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-5e384ed0><label for=\"exchangeRate\" data-v-5e384ed0>ອັດຕາແລກປ່ຽນ</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + " class=\"form-control\" data-v-5e384ed0></div>")], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-5e384ed0><div class=\"form-group full-width\" data-v-5e384ed0><label for=\"description\" data-v-5e384ed0>ລາຍລະອຽດ</label> <textarea id=\"description\" rows=\"2\" placeholder=\"ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້...\" class=\"form-control textarea-compact\" data-v-5e384ed0>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div></div> " + (_vm.isEdit ? "<div class=\"form-row\" data-v-5e384ed0><div class=\"form-group full-width\" data-v-5e384ed0><label for=\"reason\" class=\"required\" data-v-5e384ed0>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-5e384ed0> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-5e384ed0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.reason) + "\n                ") + "</div>" : "<!---->") + "</div></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-section\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<div class=\"section-header\" data-v-5e384ed0><h5 class=\"section-title\" data-v-5e384ed0><i class=\"fas fa-list\" data-v-5e384ed0></i>\n                ລາຍການສິນຄ້າ\n                " + (_vm.lineItems.length > 0 ? "<span class=\"line-count\" data-v-5e384ed0>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length)) + "</span>" : "<!---->") + "</h5> <div class=\"add-line-actions\" data-v-5e384ed0><button type=\"button\" class=\"btn btn-primary btn-sm\" data-v-5e384ed0><i class=\"fas fa-plus\" data-v-5e384ed0></i>\n                  ເພີ່ມລາຍການ\n                </button> <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" data-v-5e384ed0>\n                  +5\n                </button></div></div> "), _vm.lineItems.length === 0 ? _vm._ssrNode("<div class=\"empty-line-state\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<div class=\"empty-content\" data-v-5e384ed0><i class=\"fas fa-shopping-cart\" data-v-5e384ed0></i> <h4 data-v-5e384ed0>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4> <button type=\"button\" class=\"btn btn-primary\" data-v-5e384ed0><i class=\"fas fa-plus\" data-v-5e384ed0></i>\n                  ເພີ່ມລາຍການທຳອິດ\n                </button></div>")], 2) : _vm._ssrNode("<div class=\"line-items-table-container\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<div class=\"line-items-table\" data-v-5e384ed0>", "</div>", [_vm._ssrNode("<table class=\"table table-compact\" data-v-5e384ed0>", "</table>", [_vm._ssrNode("<thead data-v-5e384ed0><tr data-v-5e384ed0><th style=\"width: 20px\" data-v-5e384ed0>#</th> <th data-v-5e384ed0>ລາຍລະອຽດ *</th> <th data-v-5e384ed0>ລະຫັດການເງິນ*</th> <th data-v-5e384ed0>ລາຄາຕໍ່ຫົວ *</th> <th data-v-5e384ed0>ຈຳນວນ <span class=\"required\" data-v-5e384ed0>*</span></th> <th data-v-5e384ed0>ລວມຕໍ່ແຖວ</th> <th style=\"width: 40px\" data-v-5e384ed0>ລຶບ</th></tr></thead> "), _vm._ssrNode("<tbody data-v-5e384ed0>", "</tbody>", _vm._l(_vm.lineItems, function (line, index) {
    return _vm._ssrNode("<tr class=\"line-row\" data-v-5e384ed0>", "</tr>", [_vm._ssrNode("<td class=\"line-number\" data-v-5e384ed0>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-5e384ed0><input type=\"text\" placeholder=\"ລາຍລະອຽດສິນຄ້າ...\"" + _vm._ssrAttr("value", line.description) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_description`]
    }) + " data-v-5e384ed0></td> "), _vm._ssrNode("<td data-v-5e384ed0>", "</td>", [_c(VAutocomplete["a" /* default */], {
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
    }), _vm._ssrNode(" " + (!line.txnId && _vm.errors.settlementLines ? "<small class=\"text-danger d-block\" data-v-5e384ed0>\n                          ກະລຸນາເລືອກລະຫັດການເງິນ\n                        </small>" : "<!---->"))], 2), _vm._ssrNode(" <td data-v-5e384ed0><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.quantity) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_quantity`]
    }) + " data-v-5e384ed0></td> <td data-v-5e384ed0><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.unitPrice) + _vm._ssrClass("form-control form-control-xs", {
      'is-invalid': _vm.errors[`line_${index}_unitPrice`]
    }) + " data-v-5e384ed0></td> "), _vm.enableGL ? _vm._ssrNode("<td data-v-5e384ed0>", "</td>", [_c(VAutocomplete["a" /* default */], {
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
    }), _vm._ssrNode(" " + (_vm.errors[`line_${index}_DRglAccountId`] ? "<small class=\"text-danger d-block mt-1\" data-v-5e384ed0>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.errors[`line_${index}_DRglAccountId`]) + "\n                        ") + "</small>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm.enableGL ? _vm._ssrNode("<td data-v-5e384ed0>", "</td>", [_c(VAutocomplete["a" /* default */], {
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
    }), _vm._ssrNode(" " + (_vm.errors[`line_${index}_CRglAccountId`] ? "<small class=\"text-danger d-block mt-1\" data-v-5e384ed0>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.errors[`line_${index}_CRglAccountId`]) + "\n                        ") + "</small>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" <td class=\"line-total\" data-v-5e384ed0>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.lineTotal || 0)) + "\n                      ") + "</td> <td data-v-5e384ed0><button type=\"button\" title=\"ລຶບລາຍການ\" class=\"btn btn-xs btn-danger\" data-v-5e384ed0><i class=\"fas fa-trash\" data-v-5e384ed0></i></button></td>")], 2);
  }), 0)], 2)])])], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-5e384ed0><div class=\"totals-compact\" data-v-5e384ed0><div class=\"total-item\" data-v-5e384ed0><span data-v-5e384ed0>ລວມຍ່ອຍ:</span> <span class=\"amount\" data-v-5e384ed0>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-5e384ed0><span data-v-5e384ed0>ພາສີລວມ:</span> <span class=\"amount\" data-v-5e384ed0>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-5e384ed0><span data-v-5e384ed0>ຍອດສຸດທິ:</span> <span class=\"amount\" data-v-5e384ed0>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-5e384ed0><span data-v-5e384ed0>ລວມທັງໝົດ:</span> <span class=\"amount\" data-v-5e384ed0>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div>")], 2)])]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-5e384ed0><div class=\"footer-actions\" data-v-5e384ed0><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary btn-compact\" data-v-5e384ed0><i class=\"fas fa-times\" data-v-5e384ed0></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary btn-compact\" data-v-5e384ed0>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-5e384ed0></i>" : "<i class=\"fas fa-save\" data-v-5e384ed0></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button> " + (_vm.isEdit ? "<button type=\"button\" title=\"ພິມໃບແຈ້ງໜີ້\" class=\"btn btn-primary btn-compact\" data-v-5e384ed0><i class=\"fas fa-print\" data-v-5e384ed0></i> <span class=\"audit-text\" data-v-5e384ed0>ພິມ</span></button>" : "<!---->") + "</div></div>")], 2), _vm._ssrNode(" "), _c('invoice-audit-dialog', {
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

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=5e384ed0&scoped=true

// EXTERNAL MODULE: ./components/accounting/ar/invoice/audit/index.vue + 3 modules
var audit = __webpack_require__(618);

// EXTERNAL MODULE: ./components/accounting/ar/invoice/voucher/index.vue + 4 modules
var voucher = __webpack_require__(608);

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
  
  var style0 = __webpack_require__(626)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_maintainvue_type_script_lang_js,
  maintainvue_type_template_id_5e384ed0_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "5e384ed0",
  "6adf3fc7"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-invoice-maintain.js.map