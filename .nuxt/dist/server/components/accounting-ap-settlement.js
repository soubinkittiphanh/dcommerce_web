exports.ids = [6,7,8,9];
exports.modules = {

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ap_settlement_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(559);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SettlementAuditDialog',
  components: {
    SettlementAuditViewer: _components_accounting_ap_settlement_audit_view__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    settlementId: {
      type: [Number, String],
      default: null
    },
    settlementInfo: {
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
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະ...');

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF();
        } catch (jsPDFError) {
          console.warn('jsPDF not available, using HTML print method:', jsPDFError);
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະສຳເລັດ!');
      } catch (error) {
        var _this$$toast3;
        console.error('Error exporting settlement audit log:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະໄດ້');
      } finally {
        this.isExporting = false;
      }
    },
    async exportWithJsPDF() {
      var _this$settlementInfo;
      // Import jsPDF dynamically (requires: npm install jspdf)
      const {
        jsPDF
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 368, 7));

      // Create new PDF document
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('ປະຫວັດການດຳເນີນງານການຊຳລະ', 20, 20);

      // Add settlement info
      if (this.settlementInfo) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`ເລກທີການຊຳລະ: ${this.settlementInfo.settlementId}`, 20, 35);
        doc.text(`ຈຳນວນເງິນ: ${this.formatCurrency(this.settlementInfo.paymentAmount)}`, 20, 45);
        doc.text(`ວັນທີຊຳລະ: ${this.formatDate(this.settlementInfo.settlementDate)}`, 20, 55);
        if (this.settlementInfo.status) {
          doc.text(`ສະຖານະ: ${this.getStatusText(this.settlementInfo.status)}`, 20, 65);
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

        // Settlement data summary
        if (log.recordData) {
          yPosition += 8;
          doc.text(`ຈຳນວນເງິນຊຳລະ: ${this.formatCurrency(log.recordData.paymentAmount)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ວັນທີຊຳລະ: ${this.formatDate(log.recordData.settlementDate)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ສະຖານະ: ${this.getStatusText(log.recordData.status)}`, 25, yPosition);
          if (log.recordData.reference) {
            yPosition += 8;
            doc.text(`ອ້າງອີງ: ${log.recordData.reference}`, 25, yPosition);
          }
        }
        yPosition += 15;
      });

      // Create filename
      const filename = `settlement-audit-log-${((_this$settlementInfo = this.settlementInfo) === null || _this$settlementInfo === void 0 ? void 0 : _this$settlementInfo.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.pdf`;

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
              <p style="margin: 3px 0;"><strong>ຈຳນວນເງິນຊຳລະ:</strong> ${this.formatCurrency(log.recordData.paymentAmount)}</p>
              <p style="margin: 3px 0;"><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(log.recordData.settlementDate)}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(log.recordData.status)}</p>
              ${log.recordData.reference ? `<p style="margin: 3px 0;"><strong>ອ້າງອີງ:</strong> ${log.recordData.reference}</p>` : ''}
              ${log.recordData.description ? `<p style="margin: 3px 0;"><strong>ລາຍລະອຽດ:</strong> ${log.recordData.description}</p>` : ''}
            </div>
          ` : ''}
        </div>
      `).join('');
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ປະຫວັດການດຳເນີນງານການຊຳລະ</title>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
            .settlement-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .timestamp { text-align: right; color: #666; font-size: 12px; margin-bottom: 20px; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>ປະຫວັດການດຳເນີນງານການຊຳລະ</h1>
          
          ${this.settlementInfo ? `
            <div class="settlement-info">
              <p><strong>ເລກທີການຊຳລະ:</strong> ${this.settlementInfo.settlementId}</p>
              <p><strong>ຈຳນວນເງິນ:</strong> ${this.formatCurrency(this.settlementInfo.paymentAmount)}</p>
              <p><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(this.settlementInfo.settlementDate)}</p>
              ${this.settlementInfo.status ? `<p><strong>ສະຖານະ:</strong> ${this.getStatusText(this.settlementInfo.status)}</p>` : ''}
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
        var _this$settlementInfo2, _this$$toast4;
        const exportData = {
          settlementInfo: this.settlementInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map(log => {
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData8$paym, _log$recordData9, _log$recordData9$bank, _log$recordData10, _log$recordData10$inv;
            return {
              id: log.id,
              action: this.getActionText(log.action),
              user: this.getUserName(log),
              email: this.getUserEmail(log),
              timestamp: log.auditDate,
              reason: log.reason,
              settlementData: {
                settlementId: log.settlementId,
                paymentAmount: (_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.paymentAmount,
                baseAmount: (_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.baseAmount,
                settlementDate: (_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.settlementDate,
                status: this.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status),
                reference: (_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.reference,
                description: (_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.description,
                note: (_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.note,
                paymentMethod: (_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : (_log$recordData8$paym = _log$recordData8.paymentMethod) === null || _log$recordData8$paym === void 0 ? void 0 : _log$recordData8$paym.name,
                bankAccount: (_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : (_log$recordData9$bank = _log$recordData9.bankAccount) === null || _log$recordData9$bank === void 0 ? void 0 : _log$recordData9$bank.accountName,
                invoiceSettlements: ((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : (_log$recordData10$inv = _log$recordData10.invoiceSettlements) === null || _log$recordData10$inv === void 0 ? void 0 : _log$recordData10$inv.length) || 0
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
        link.download = `settlement-audit-log-${((_this$settlementInfo2 = this.settlementInfo) === null || _this$settlementInfo2 === void 0 ? void 0 : _this$settlementInfo2.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.json`;
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
        var _this$settlementInfo3, _this$$toast6;
        const headers = ['ລຳດັບ', 'ການດຳເນີນງານ', 'ຜູ້ດຳເນີນການ', 'ອີເມວ', 'ເວລາ', 'ເຫດຜົນ', 'ເລກທີການຊຳລະ', 'ຈຳນວນເງິນຊຳລະ', 'ຈຳນວນເງິນພື້ນຖານ', 'ວັນທີຊຳລະ', 'ສະຖານະ', 'ອ້າງອີງ', 'ລາຍລະອຽດ', 'ໝາຍເຫດ', 'ວິທີການຊຳລະ', 'ບັນຊີທະນາຄານ', 'ຈຳນວນໃບແຈ້ງໜີ້'];
        const csvData = this.auditLogs.map((log, index) => {
          var _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData18$pay, _log$recordData19, _log$recordData19$ban, _log$recordData20, _log$recordData20$inv;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', log.settlementId || '', ((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.paymentAmount) || '', ((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.baseAmount) || '', this.formatDate((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.settlementDate) || '', this.getStatusText((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.status) || '', ((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.reference) || '', ((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.description) || '', ((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.note) || '', ((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : (_log$recordData18$pay = _log$recordData18.paymentMethod) === null || _log$recordData18$pay === void 0 ? void 0 : _log$recordData18$pay.name) || '', ((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : (_log$recordData19$ban = _log$recordData19.bankAccount) === null || _log$recordData19$ban === void 0 ? void 0 : _log$recordData19$ban.accountName) || '', ((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : (_log$recordData20$inv = _log$recordData20.invoiceSettlements) === null || _log$recordData20$inv === void 0 ? void 0 : _log$recordData20$inv.length) || 0];
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
        link.download = `settlement-audit-log-${((_this$settlementInfo3 = this.settlementInfo) === null || _this$settlementInfo3 === void 0 ? void 0 : _this$settlementInfo3.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.csv`;
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
        CREATE: 'ສ້າງການຊຳລະ',
        UPDATE: 'ອັບເດດການຊຳລະ',
        DELETE: 'ລຶບການຊຳລະ',
        APPROVE: 'ອະນຸມັດການຊຳລະ',
        REJECT: 'ປະຕິເສດການຊຳລະ',
        SUBMIT: 'ສົ່ງການຊຳລະ',
        CANCEL: 'ຍົກເລີກການຊຳລະ'
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
        cancelled: 'ຍົກເລີກ',
        active: 'ໃຊ້ງານ',
        inactive: 'ບໍ່ໃຊ້ງານ'
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(347)["URL"]))

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(543);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("355eff84", content, true, context)
};

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(614);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("59ce7be4", content, true, context)
};

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(616);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("116f3c60", content, true, context)
};

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-audit-viewer[data-v-749b7dea]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-749b7dea]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-749b7dea]{align-items:center;display:flex;gap:8px}.filter-input[data-v-749b7dea]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:120px;padding:8px 12px}.filter-input[data-v-749b7dea]:focus{border-color:#007bff;outline:none}.btn-clear[data-v-749b7dea],.btn-search[data-v-749b7dea]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-749b7dea]{background:#007bff;color:#fff}.btn-clear[data-v-749b7dea]{background:#6c757d;color:#fff}.loading[data-v-749b7dea]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-749b7dea]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-749b7dea]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-749b7dea]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-749b7dea]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-749b7dea]{background:#28a745}.dot-update[data-v-749b7dea]{background:#007bff}.dot-delete[data-v-749b7dea]{background:#dc3545}.dot-approve[data-v-749b7dea]{background:#28a745}.dot-reject[data-v-749b7dea]{background:#dc3545}.dot-submit[data-v-749b7dea]{background:#17a2b8}.dot-cancel[data-v-749b7dea]{background:#ffc107}.timeline-content[data-v-749b7dea]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-749b7dea]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-749b7dea]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-749b7dea]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-749b7dea],.content-header[data-v-749b7dea]{align-items:center;display:flex}.action-info[data-v-749b7dea]{gap:12px}.action-badge[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-749b7dea]{background:#d4edda;color:#155724}.badge-update[data-v-749b7dea]{background:#cce7ff;color:#004085}.badge-delete[data-v-749b7dea]{background:#f8d7da;color:#721c24}.badge-approve[data-v-749b7dea]{background:#d4edda;color:#155724}.badge-reject[data-v-749b7dea]{background:#f8d7da;color:#721c24}.badge-submit[data-v-749b7dea]{background:#d1ecf1;color:#0c5460}.amount-change[data-v-749b7dea],.badge-cancel[data-v-749b7dea]{background:#fff3cd;color:#856404}.amount-change[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-749b7dea]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-749b7dea],.user-info[data-v-749b7dea]{align-items:center;display:flex}.user-info[data-v-749b7dea]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-749b7dea]{color:#666;font-size:12px}.settlement-info[data-v-749b7dea]{align-items:center;display:flex;font-size:14px;gap:12px}.settlement-amount[data-v-749b7dea]{font-size:15px}.settlement-date[data-v-749b7dea]{color:#666;font-size:13px}.content-status[data-v-749b7dea]{justify-content:space-between;margin-bottom:8px}.content-status[data-v-749b7dea],.status-badge[data-v-749b7dea]{align-items:center;display:flex}.status-badge[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:500;gap:4px;padding:3px 8px}.status-badge i[data-v-749b7dea]{font-size:8px}.status-draft[data-v-749b7dea]{background:#e9ecef;color:#495057}.status-pending[data-v-749b7dea]{background:#fff3cd;color:#856404}.status-approved[data-v-749b7dea]{background:#d4edda;color:#155724}.status-rejected[data-v-749b7dea]{background:#f8d7da;color:#721c24}.status-paid[data-v-749b7dea]{background:#cce7ff;color:#004085}.status-active[data-v-749b7dea]{background:#d1ecf1;color:#0c5460}.settlements-count[data-v-749b7dea]{background:#f8f9fa;border-radius:3px;color:#666;font-size:12px;padding:2px 6px}.content-preview[data-v-749b7dea]{display:flex;font-size:13px;gap:12px;margin-bottom:8px}.reference[data-v-749b7dea]{color:#007bff;font-weight:500}.description[data-v-749b7dea]{color:#666}.content-reason[data-v-749b7dea]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-749b7dea]{font-size:11px}.expand-indicator[data-v-749b7dea]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-749b7dea]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-749b7dea]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-bottom:16px}.detail-item[data-v-749b7dea]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-749b7dea]{color:#333;font-size:13px}.amount[data-v-749b7dea]{color:#28a745;font-weight:600}.status[data-v-749b7dea]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.description-section[data-v-749b7dea],.note-section[data-v-749b7dea]{margin-bottom:16px}.description-section h4[data-v-749b7dea],.note-section h4[data-v-749b7dea]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.description-section p[data-v-749b7dea],.note-section p[data-v-749b7dea]{color:#666;font-size:13px;line-height:1.4;margin:0}.settlements-section h4[data-v-749b7dea]{align-items:center;border-bottom:1px solid #e5e5e5;color:#333;display:flex;font-size:14px;justify-content:space-between;margin:0 0 12px;padding-bottom:4px}.total-amount[data-v-749b7dea]{color:#28a745;font-size:13px;font-weight:600}.settlements-list[data-v-749b7dea]{display:flex;flex-direction:column;gap:8px}.settlement-item[data-v-749b7dea]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:12px}.settlement-header[data-v-749b7dea]{align-items:center;display:flex;justify-content:space-between;margin-bottom:6px}.settlement-id[data-v-749b7dea]{color:#333;font-size:13px;font-weight:600}.settlement-amount[data-v-749b7dea]{color:#28a745;font-size:14px;font-weight:600}.settlement-details[data-v-749b7dea]{align-items:center;display:flex;font-size:12px;gap:12px}.line-item[data-v-749b7dea]{color:#666}.settlement-status[data-v-749b7dea]{border-radius:3px;font-weight:500;padding:2px 6px}.settlement-date[data-v-749b7dea]{color:#999}.approval-section h4[data-v-749b7dea]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.approval-grid[data-v-749b7dea]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.approval-item[data-v-749b7dea]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.approval-item label[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.approval-item span[data-v-749b7dea]{color:#333;font-size:13px}.empty-state[data-v-749b7dea]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:48px 20px;text-align:center}.empty-state i[data-v-749b7dea]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-749b7dea]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-749b7dea]{font-size:14px;margin:0}.pagination[data-v-749b7dea]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-749b7dea],.pagination[data-v-749b7dea]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-749b7dea]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-749b7dea]:hover:not(:disabled){background:#f8f9fa;border-color:#007bff}.page-btn[data-v-749b7dea]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-749b7dea]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-749b7dea]{padding:16px}.content-main[data-v-749b7dea]{gap:8px}.content-main[data-v-749b7dea],.content-status[data-v-749b7dea]{align-items:flex-start;flex-direction:column}.content-status[data-v-749b7dea]{gap:6px}.approval-grid[data-v-749b7dea],.details-grid[data-v-749b7dea]{grid-template-columns:1fr}.expanded-details[data-v-749b7dea]{margin-left:0}.timeline-item[data-v-749b7dea]:not(:last-child):before{display:none}.filter-group[data-v-749b7dea]{flex-wrap:wrap}.settlement-header[data-v-749b7dea],.settlements-section h4[data-v-749b7dea]{align-items:flex-start;flex-direction:column;gap:4px}.settlement-details[data-v-749b7dea]{flex-wrap:wrap}}@media (max-width:480px){.settlement-info[data-v-749b7dea]{align-items:flex-start}.content-preview[data-v-749b7dea],.settlement-info[data-v-749b7dea]{flex-direction:column;gap:4px}.filter-input[data-v-749b7dea]{min-width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/view/index.vue?vue&type=template&id=749b7dea&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settlement-audit-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-749b7dea>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-749b7dea>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-749b7dea> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-749b7dea> "), _c('select', {
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
      "value": "pending"
    }
  }, [_vm._v("Pending")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rejected"
    }
  }, [_vm._v("Rejected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-749b7dea><i class=\"fas fa-search\" data-v-749b7dea></i></button> <button class=\"btn-clear\" data-v-749b7dea><i class=\"fas fa-times\" data-v-749b7dea></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-749b7dea><i class=\"fas fa-spinner fa-spin\" data-v-749b7dea></i>\n    Loading settlement history...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-749b7dea>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData5$invo, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData14$pay, _log$recordData15, _log$recordData15$ban, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData20$inv, _log$recordData21, _log$recordData22;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-749b7dea><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-749b7dea><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-749b7dea></i></div> <div class=\"timeline-content\" data-v-749b7dea><div class=\"content-header\" data-v-749b7dea><div class=\"action-info\" data-v-749b7dea><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-749b7dea><div class=\"user-info\" data-v-749b7dea><i class=\"fas fa-user\" data-v-749b7dea></i> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"settlement-info\" data-v-749b7dea><span class=\"settlement-amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.paymentAmount))) + "</span> <span class=\"settlement-date\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.settlementDate))) + "</span></div></div> <div class=\"content-status\" data-v-749b7dea><span" + _vm._ssrClass("status-badge", `status-${(_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.status}`) + " data-v-749b7dea><i class=\"fas fa-circle\" data-v-749b7dea></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status)) + "\n          ") + "</span> " + ((_log$recordData5 = log.recordData) !== null && _log$recordData5 !== void 0 && (_log$recordData5$invo = _log$recordData5.invoiceSettlements) !== null && _log$recordData5$invo !== void 0 && _log$recordData5$invo.length ? "<span class=\"settlements-count\" data-v-749b7dea>" + _vm._ssrEscape("\n            " + _vm._s(log.recordData.invoiceSettlements.length) + " invoice" + _vm._s(log.recordData.invoiceSettlements.length > 1 ? 's' : '') + "\n          ") + "</span>" : "<!---->") + "</div> " + (log.reason ? "<div class=\"content-reason\" data-v-749b7dea><i class=\"fas fa-comment-alt\" data-v-749b7dea></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " " + ((_log$recordData6 = log.recordData) !== null && _log$recordData6 !== void 0 && _log$recordData6.reference || (_log$recordData7 = log.recordData) !== null && _log$recordData7 !== void 0 && _log$recordData7.description ? "<div class=\"content-preview\" data-v-749b7dea>" + (log.recordData.reference ? "<span class=\"reference\" data-v-749b7dea>" + _vm._ssrEscape("\n            Ref: " + _vm._s(log.recordData.reference) + "\n          ") + "</span>" : "<!---->") + " " + (log.recordData.description ? "<span class=\"description\" data-v-749b7dea>" + _vm._ssrEscape("\n            " + _vm._s(_vm.truncateText(log.recordData.description, 50)) + "\n          ") + "</span>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-749b7dea><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-749b7dea></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-749b7dea><div class=\"details-grid\" data-v-749b7dea><div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Settlement ID:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.settlementId || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Settlement Date:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.settlementDate))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Payment Amount:</label> <span class=\"amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.paymentAmount))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Base Amount:</label> <span class=\"amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.baseAmount))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.status}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Reference:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.reference) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Payment Method:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : (_log$recordData14$pay = _log$recordData14.paymentMethod) === null || _log$recordData14$pay === void 0 ? void 0 : _log$recordData14$pay.name) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Bank Account:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : (_log$recordData15$ban = _log$recordData15.bankAccount) === null || _log$recordData15$ban === void 0 ? void 0 : _log$recordData15$ban.accountName) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Created:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.createdAt))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Last Updated:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.updateTimestamp))) + "</span></div></div> " + ((_log$recordData18 = log.recordData) !== null && _log$recordData18 !== void 0 && _log$recordData18.description ? "<div class=\"description-section\" data-v-749b7dea><h4 data-v-749b7dea>Description</h4> <p data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.description)) + "</p></div>" : "<!---->") + " " + ((_log$recordData19 = log.recordData) !== null && _log$recordData19 !== void 0 && _log$recordData19.note ? "<div class=\"note-section\" data-v-749b7dea><h4 data-v-749b7dea>Note</h4> <p data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.note)) + "</p></div>" : "<!---->") + " " + ((_log$recordData20 = log.recordData) !== null && _log$recordData20 !== void 0 && (_log$recordData20$inv = _log$recordData20.invoiceSettlements) !== null && _log$recordData20$inv !== void 0 && _log$recordData20$inv.length ? "<div class=\"settlements-section\" data-v-749b7dea><h4 data-v-749b7dea>" + _vm._ssrEscape("\n            Invoice Settlements (" + _vm._s(log.recordData.invoiceSettlements.length) + ")\n            ") + "<span class=\"total-amount\" data-v-749b7dea>" + _vm._ssrEscape("\n              Total: " + _vm._s(_vm.formatCurrency(_vm.getTotalSettlementAmount(log.recordData.invoiceSettlements))) + "\n            ") + "</span></h4> <div class=\"settlements-list\" data-v-749b7dea>" + _vm._ssrList(log.recordData.invoiceSettlements, function (settlement) {
      return "<div class=\"settlement-item\" data-v-749b7dea><div class=\"settlement-header\" data-v-749b7dea><span class=\"settlement-id\" data-v-749b7dea>" + _vm._ssrEscape("Settlement #" + _vm._s(settlement.id)) + "</span> <span class=\"settlement-amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(settlement.amount))) + "</span></div> <div class=\"settlement-details\" data-v-749b7dea><span class=\"line-item\" data-v-749b7dea>" + _vm._ssrEscape("Line Item #" + _vm._s(settlement.invoiceLineItemId)) + "</span> <span" + _vm._ssrClass("settlement-status", `status-${settlement.status}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getStatusText(settlement.status)) + "\n                ") + "</span> <span class=\"settlement-date\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(settlement.createdAt))) + "</span></div></div>";
    }) + "</div></div>" : "<!---->") + " " + ((_log$recordData21 = log.recordData) !== null && _log$recordData21 !== void 0 && _log$recordData21.maker || (_log$recordData22 = log.recordData) !== null && _log$recordData22 !== void 0 && _log$recordData22.checker ? "<div class=\"approval-section\" data-v-749b7dea><h4 data-v-749b7dea>Approval Information</h4> <div class=\"approval-grid\" data-v-749b7dea>" + (log.recordData.maker ? "<div class=\"approval-item\" data-v-749b7dea><label data-v-749b7dea>Maker:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.maker.cus_name || log.recordData.maker.name || '-')) + "</span></div>" : "<!---->") + " " + (log.recordData.checker ? "<div class=\"approval-item\" data-v-749b7dea><label data-v-749b7dea>Checker:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.checker.cus_name || log.recordData.checker.name || '-')) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-749b7dea><i class=\"fas fa-history\" data-v-749b7dea></i> <h3 data-v-749b7dea>No settlement audit records found</h3> <p data-v-749b7dea>No changes have been recorded for this settlement yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-749b7dea><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-749b7dea><i class=\"fas fa-chevron-left\" data-v-749b7dea></i></button> <span class=\"page-info\" data-v-749b7dea>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-749b7dea><i class=\"fas fa-chevron-right\" data-v-749b7dea></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue?vue&type=template&id=749b7dea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'SettlementAuditViewer',
  props: {
    settlementId: {
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
    settlementId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      try {
        // API call for settlement audit logs
        const response = await this.$axios.get(`/api/ap-invoices-settlement/audit/${this.settlementId}`, {
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
        console.error('Error loading settlement audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load settlement audit logs');
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
      if (!prevLog || !((_prevLog$recordData = prevLog.recordData) !== null && _prevLog$recordData !== void 0 && _prevLog$recordData.paymentAmount) || !((_log$recordData = log.recordData) !== null && _log$recordData !== void 0 && _log$recordData.paymentAmount)) return false;
      return prevLog.recordData.paymentAmount !== log.recordData.paymentAmount;
    },
    getAmountChange(log, index) {
      var _log$recordData2, _prevLog$recordData2;
      const prevLog = this.auditLogs[index + 1];
      const current = ((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.paymentAmount) || 0;
      const previous = (prevLog === null || prevLog === void 0 ? void 0 : (_prevLog$recordData2 = prevLog.recordData) === null || _prevLog$recordData2 === void 0 ? void 0 : _prevLog$recordData2.paymentAmount) || 0;
      const diff = current - previous;
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    getTotalSettlementAmount(settlements) {
      return settlements.reduce((total, settlement) => total + (settlement.amount || 0), 0);
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
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled',
        'active': 'Active',
        'inactive': 'Inactive'
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
// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var audit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(542)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "749b7dea",
  "a9386c0e"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_084231f4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(526);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_084231f4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_084231f4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_084231f4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_084231f4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-audit-dialog-overlay[data-v-084231f4]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.settlement-audit-dialog[data-v-084231f4]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.settlement-audit-dialog-header[data-v-084231f4]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-084231f4]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.settlement-subtitle[data-v-084231f4]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-084231f4]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-084231f4]:hover{background:hsla(0,0%,100%,.2)}.settlement-audit-dialog-body[data-v-084231f4]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.settlement-audit-dialog-body[data-v-084231f4]::-webkit-scrollbar{width:8px}.settlement-audit-dialog-body[data-v-084231f4]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.settlement-audit-dialog-body[data-v-084231f4]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.settlement-audit-dialog-body[data-v-084231f4]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.settlement-audit-dialog-footer[data-v-084231f4]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.export-options[data-v-084231f4]{align-items:center;display:flex;gap:0}.main-export-btn[data-v-084231f4]{border-bottom-right-radius:0;border-top-right-radius:0}.export-dropdown[data-v-084231f4]{position:relative}.dropdown-toggle[data-v-084231f4]{border-bottom-left-radius:0;border-left:none;border-top-left-radius:0;padding:10px 8px}.dropdown-menu[data-v-084231f4]{background:#fff;border:1px solid #ddd;border-radius:6px;bottom:100%;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:5px;min-width:160px;position:absolute;right:0;z-index:1000}.dropdown-item[data-v-084231f4]{align-items:center;background:none;border:none;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px 12px;text-align:left;transition:background-color .2s;width:100%}.dropdown-item[data-v-084231f4]:hover{background:#f8f9fa}.dropdown-item[data-v-084231f4]:first-child{border-top-left-radius:6px;border-top-right-radius:6px}.dropdown-item[data-v-084231f4]:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.btn[data-v-084231f4]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-084231f4]{background:#28a745;color:#fff}.btn-primary[data-v-084231f4]:hover{background:#218838;transform:translateY(-1px)}.btn-outline-primary[data-v-084231f4]{background:#fff;border:1px solid #28a745;color:#28a745}.btn-outline-primary[data-v-084231f4]:hover{background:#28a745;color:#fff;transform:translateY(-1px)}.btn-secondary[data-v-084231f4]{background:#6c757d;color:#fff}.btn-secondary[data-v-084231f4]:hover{background:#5a6268;transform:translateY(-1px)}.btn[data-v-084231f4]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.settlement-audit-dialog[data-v-084231f4]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.settlement-audit-dialog-header[data-v-084231f4]{padding:15px}.header-info h3[data-v-084231f4]{font-size:18px}.settlement-audit-dialog-footer[data-v-084231f4]{flex-direction:column;padding:15px}.btn[data-v-084231f4],.export-options[data-v-084231f4]{width:100%}.btn[data-v-084231f4]{justify-content:center}.main-export-btn[data-v-084231f4]{border-radius:6px;border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-toggle[data-v-084231f4]{border-left:1px solid #28a745;border-radius:6px;border-top-left-radius:0;border-top-right-radius:0}.dropdown-menu[data-v-084231f4]{border:none;box-shadow:none;margin-bottom:0;position:static;width:100%}}@media (max-width:480px){.settlement-audit-dialog-overlay[data-v-084231f4]{padding:0}.settlement-audit-dialog-header[data-v-084231f4]{align-items:flex-start;flex-direction:column;gap:10px;position:relative}.close-btn[data-v-084231f4]{position:absolute;right:15px;top:15px}.header-info h3[data-v-084231f4]{font-size:16px}.settlement-subtitle[data-v-084231f4]{font-size:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4664dd31_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mou-content[data-v-4664dd31]{padding:0}.form-section[data-v-4664dd31]{background:#fafafa;border-radius:6px;margin-bottom:20px;padding:15px}.form-grid[data-v-4664dd31]{grid-gap:15px;display:grid;gap:15px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.form-group[data-v-4664dd31]{margin-bottom:0}.form-group label[data-v-4664dd31]{color:#333;display:block;font-size:13px;font-weight:500;margin-bottom:5px}.required[data-v-4664dd31]{color:#e74c3c}.form-control[data-v-4664dd31]{border:1px solid #ddd;border-radius:4px;font-size:13px;padding:8px 12px;width:100%}.form-control[data-v-4664dd31]:focus{border-color:#17a2b8;box-shadow:0 0 0 2px rgba(23,162,184,.1);outline:none}.form-control[data-v-4664dd31]:disabled{background-color:#f8f9fa;color:#6c757d}.form-control-sm[data-v-4664dd31]{font-size:12px;padding:4px 8px}.section-header[data-v-4664dd31]{flex-wrap:wrap;gap:10px;justify-content:space-between;margin-bottom:15px}.section-header[data-v-4664dd31],.section-title[data-v-4664dd31]{align-items:center;display:flex}.section-title[data-v-4664dd31]{color:#333;font-size:14px;font-weight:600;gap:8px;margin:0}.total-badge[data-v-4664dd31]{background:#17a2b8;border-radius:4px;color:#fff;font-size:12px;padding:6px 12px}.table-responsive[data-v-4664dd31]{background:#fff;border:1px solid #e9ecef;border-radius:6px;overflow-x:auto}.table[data-v-4664dd31]{border-collapse:collapse;font-size:12px;margin:0;width:100%}.table thead th[data-v-4664dd31]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-weight:600;padding:10px;text-align:left}.table tbody td[data-v-4664dd31]{border-top:1px solid #dee2e6;padding:8px 10px;vertical-align:middle}.applicant-info[data-v-4664dd31]{align-items:center;display:flex;gap:10px}.applicant-avatar[data-v-4664dd31]{align-items:center;background:#17a2b8;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:11px;font-weight:600;height:32px;justify-content:center;width:32px}.applicant-name[data-v-4664dd31]{color:#333;font-weight:500}.applicant-nationality[data-v-4664dd31]{color:#6c757d;font-size:11px}.passport-badge[data-v-4664dd31]{align-items:center;background:#e9ecef;border-radius:4px;display:inline-flex;font-size:11px;gap:4px;padding:4px 8px}.empty-state[data-v-4664dd31],.loading-state[data-v-4664dd31]{color:#6c757d;padding:40px 20px;text-align:center}.loading-state i[data-v-4664dd31]{color:#17a2b8;margin-bottom:15px}.empty-state i[data-v-4664dd31]{color:#dee2e6;margin-bottom:15px}.empty-title[data-v-4664dd31]{color:#333;font-size:16px;font-weight:600;margin:10px 0 5px}.empty-subtitle[data-v-4664dd31]{color:#6c757d;font-size:13px;margin:0}.mou-actions[data-v-4664dd31]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;margin-top:20px;padding:15px 20px}.btn[data-v-4664dd31]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:13px;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-4664dd31]{background:#007bff;color:#fff}.btn-secondary[data-v-4664dd31]{background:#6c757d;color:#fff}.btn[data-v-4664dd31]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-4664dd31]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.form-grid[data-v-4664dd31]{grid-template-columns:1fr}.section-header[data-v-4664dd31]{align-items:flex-start}.mou-actions[data-v-4664dd31],.section-header[data-v-4664dd31]{flex-direction:column}.mou-actions .btn[data-v-4664dd31]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(692);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("9fae1408", content, true, context)
};

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/browsemou/index.vue?vue&type=template&id=4664dd31&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mou-content"
  }, [_vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select MOU <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedMOU,
      expression: "selectedMOU"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": _vm.loadingMOU
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedMOU = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onMOUChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("-- Select MOU --")]), _vm._v(" "), _vm._l(_vm.mouList, function (mou) {
    return _c('option', {
      key: mou.id,
      domProps: {
        "value": mou
      }
    }, [_vm._v("\n          " + _vm._s(mou.jobCode) + " - " + _vm._s(mou.pmCharge) + " - " + _vm._s(mou.jobTitle) + " -\n          " + _vm._s(mou.employerCompany) + "\n        ")]);
  })], 2)], 2)]), _vm._ssrNode(" "), _vm.selectedMOU ? _vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select Batch <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedBatch,
      expression: "selectedBatch"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": !_vm.selectedMOU || _vm.loadingBatches
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedBatch = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onBatchChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("-- Select Batch --")]), _vm._v(" "), _vm._l(_vm.batchList, function (batch) {
    return _c('option', {
      key: batch.id,
      domProps: {
        "value": batch
      }
    }, [_vm._v("\n          " + _vm._s(batch.runningNo) + " - " + _vm._s(batch.totalPositions) + " positions (" + _vm._s(batch.applicants.length) + "\n          applicants)\n        ")]);
  })], 2)], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.selectedBatch ? _vm._ssrNode("<div class=\"form-section\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-4664dd31>", "</div>", [_vm._ssrNode("<label data-v-4664dd31>Select Agency <span class=\"required\" data-v-4664dd31>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAgency,
      expression: "selectedAgency"
    }],
    staticClass: "form-control",
    attrs: {
      "disabled": !_vm.selectedBatch || _vm.agencyList.length === 0
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedAgency = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onAgencyChange]
    }
  }, [_c('option', {
    domProps: {
      "value": null
    }
  }, [_vm._v("\n          " + _vm._s(_vm.agencyList.length === 0 ? '-- No agencies available --' : '-- Select Agency --') + "\n        ")]), _vm._v(" "), _vm._l(_vm.agencyList, function (agency) {
    return _c('option', {
      key: agency.id,
      domProps: {
        "value": agency
      }
    }, [_vm._v("\n          " + _vm._s(agency.agencyName) + " - " + _vm._s(agency.agencyCode) + " (" + _vm._s(_vm.getAgencyApplicantCount(agency.id)) + "\n          applicants)\n        ")]);
  })], 2), _vm._ssrNode(" " + (_vm.agencyList.length === 0 ? "<small class=\"text-muted\" data-v-4664dd31>\n        No applicants in this batch have agencies assigned\n      </small>" : "<!---->"))], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.selectedAgency && _vm.applicantsList.length > 0 ? "<div class=\"form-section\" data-v-4664dd31><div class=\"section-header\" data-v-4664dd31><h6 class=\"section-title\" data-v-4664dd31><i class=\"fas fa-users\" data-v-4664dd31></i>" + _vm._ssrEscape("\n        Invoice Line Items (" + _vm._s(_vm.applicantsList.length) + " applicants)\n      ") + "</h6> <div class=\"total-badge\" data-v-4664dd31>\n        Total: <strong data-v-4664dd31>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.totalAmount))) + "</strong></div></div> <div class=\"table-responsive\" data-v-4664dd31><table class=\"table table-bordered\" data-v-4664dd31><thead data-v-4664dd31><tr data-v-4664dd31><th style=\"width: 40px\" data-v-4664dd31>#</th> <th data-v-4664dd31>Applicant Name</th> <th style=\"width: 120px\" data-v-4664dd31>Passport No</th> <th style=\"width: 150px\" data-v-4664dd31>Amount</th> <th style=\"width: 200px\" data-v-4664dd31>Description</th></tr></thead> <tbody data-v-4664dd31>" + _vm._ssrList(_vm.applicantsList, function (applicant, index) {
    return "<tr data-v-4664dd31><td class=\"text-center\" data-v-4664dd31>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-4664dd31><div class=\"applicant-info\" data-v-4664dd31><div class=\"applicant-avatar\" data-v-4664dd31>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getInitials(applicant.applicantName)) + "\n                ") + "</div> <div data-v-4664dd31><div class=\"applicant-name\" data-v-4664dd31>" + _vm._ssrEscape("\n                    " + _vm._s(applicant.applicantName) + "\n                  ") + "</div> <div class=\"applicant-nationality\" data-v-4664dd31>" + _vm._ssrEscape("\n                    " + _vm._s(applicant.gender) + "\n                  ") + "</div></div></div></td> <td data-v-4664dd31><span class=\"passport-badge\" data-v-4664dd31><i class=\"fas fa-passport\" data-v-4664dd31></i>" + _vm._ssrEscape("\n                " + _vm._s(applicant.passportNo) + "\n              ") + "</span></td> <td data-v-4664dd31><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", applicant.amount) + " class=\"form-control form-control-sm\" data-v-4664dd31></td> <td data-v-4664dd31><input type=\"text\" placeholder=\"Description\"" + _vm._ssrAttr("value", applicant.description) + " class=\"form-control form-control-sm\" data-v-4664dd31></td></tr>";
  }) + "</tbody></table></div></div>" : "<!---->") + " " + (_vm.selectedAgency && _vm.applicantsList.length === 0 ? "<div class=\"empty-state\" data-v-4664dd31><i class=\"fas fa-inbox fa-4x\" data-v-4664dd31></i> <p class=\"empty-title\" data-v-4664dd31>No applicants available</p> <p class=\"empty-subtitle\" data-v-4664dd31>\n      No applicants found for the selected agency in this batch\n    </p></div>" : "<!---->") + " <div class=\"mou-actions\" data-v-4664dd31><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isGenerating) + " class=\"btn btn-secondary\" data-v-4664dd31><i class=\"fas fa-times\" data-v-4664dd31></i> Cancel\n    </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canGenerateInvoice) + " class=\"btn btn-primary\" data-v-4664dd31><i class=\"fas fa-file-check\" data-v-4664dd31></i> " + (_vm.isGenerating ? "<span data-v-4664dd31>Generating...</span>" : "<span data-v-4664dd31>Generate Invoice</span>") + "</button></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue?vue&type=template&id=4664dd31&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(104);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/browsemou/index.vue?vue&type=script&lang=js&













/* harmony default export */ var browsemouvue_type_script_lang_js_ = ({
  name: 'BrowseMouInvoiceDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loadingMOU: false,
      loadingBatches: false,
      isGenerating: false,
      mouList: [],
      batchList: [],
      agencyList: [],
      applicantsList: [],
      selectedMOU: null,
      selectedBatch: null,
      selectedAgency: null,
      invoiceData: {
        invoiceNumber: '',
        invoiceDate: new Date().toISOString().substr(0, 10)
      }
    };
  },
  computed: {
    totalAmount() {
      return this.applicantsList.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
    },
    canGenerateInvoice() {
      return this.selectedMOU && this.selectedBatch && this.selectedAgency && this.applicantsList.length > 0 && !this.isGenerating;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.loadMOUList();
      } else {
        this.resetForm();
      }
    }
  },
  created() {
    this.loadMOUList();
  },
  methods: {
    calculateTotal() {
      this.$forceUpdate();
    },
    resetForm() {
      this.selectedMOU = null;
      this.selectedBatch = null;
      this.selectedAgency = null;
      this.batchList = [];
      this.agencyList = [];
      this.applicantsList = [];
      this.invoiceData = {
        invoiceNumber: '',
        invoiceDate: new Date().toISOString().substr(0, 10)
      };
    },
    async loadMOUList() {
      this.loadingMOU = true;
      try {
        const {
          data
        } = await this.$axios.get('/api/mous');
        if (data.success) {
          this.mouList = data.data.mous;
        }
      } catch (error) {
        var _this$$toast;
        console.error('Error loading MOU list:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load MOU list');
      } finally {
        this.loadingMOU = false;
      }
    },
    async onMOUChange() {
      if (!this.selectedMOU) {
        this.batchList = [];
        this.selectedBatch = null;
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
        return;
      }
      this.loadingBatches = true;
      try {
        const {
          data
        } = await this.$axios.get(`/api/mous/${this.selectedMOU.id}/batch`);
        if (data.success) {
          this.batchList = data.data || [];
        }
        this.selectedBatch = null;
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
      } catch (error) {
        var _this$$toast2;
        console.error('Error loading batches:', error);
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.error('Failed to load batches');
        this.batchList = [];
      } finally {
        this.loadingBatches = false;
      }
    },
    onBatchChange() {
      var _this$selectedBatch$a;
      if (!this.selectedBatch) {
        this.selectedAgency = null;
        this.applicantsList = [];
        this.agencyList = [];
        return;
      }
      const agenciesMap = new Map();
      if (((_this$selectedBatch$a = this.selectedBatch.applicants) === null || _this$selectedBatch$a === void 0 ? void 0 : _this$selectedBatch$a.length) > 0) {
        this.selectedBatch.applicants.forEach(applicant => {
          if (applicant.agency && applicant.agencyId && !agenciesMap.has(applicant.agency.id)) {
            agenciesMap.set(applicant.agency.id, applicant.agency);
          }
        });
      }
      this.agencyList = Array.from(agenciesMap.values());
      this.selectedAgency = null;
      this.applicantsList = [];
    },
    onAgencyChange() {
      if (!this.selectedAgency || !this.selectedBatch) {
        this.applicantsList = [];
        return;
      }
      const agencyApplicants = this.selectedBatch.applicants.filter(applicant => applicant.agencyId === this.selectedAgency.id);
      this.applicantsList = agencyApplicants.map(applicant => ({
        id: applicant.id,
        applicantName: `${applicant.firstName} ${applicant.lastName}`,
        passportNo: applicant.passportNo,
        gender: applicant.gender,
        amount: applicant.depositAmount || 0,
        description: `Service fee for ${applicant.firstName} ${applicant.lastName}`
      }));
    },
    getAgencyApplicantCount(agencyId) {
      var _this$selectedBatch;
      if (!((_this$selectedBatch = this.selectedBatch) !== null && _this$selectedBatch !== void 0 && _this$selectedBatch.applicants)) return 0;
      return this.selectedBatch.applicants.filter(a => a.agencyId === agencyId).length;
    },
    async generateInvoice() {
      if (!this.canGenerateInvoice) return;
      this.isGenerating = true;
      try {
        var _this$$toast3;
        const payload = {
          mouId: this.selectedMOU.id,
          mouInfo: {
            jobCode: this.selectedMOU.jobCode,
            jobTitle: this.selectedMOU.jobTitle,
            employerCompany: this.selectedMOU.employerCompany,
            pmCharge: this.selectedMOU.pmCharge
          },
          batchId: this.selectedBatch.id,
          batchInfo: {
            runningNo: this.selectedBatch.runningNo,
            totalPositions: this.selectedBatch.totalPositions
          },
          agencyId: this.selectedAgency.id,
          agencyName: this.selectedAgency.agencyName,
          agencyCode: this.selectedAgency.agencyCode,
          invoiceNumber: this.invoiceData.invoiceNumber,
          invoiceDate: this.invoiceData.invoiceDate,
          lines: this.applicantsList.map(applicant => ({
            applicantId: applicant.id,
            applicantName: applicant.applicantName,
            passportNo: applicant.passportNo,
            gender: applicant.gender,
            amount: parseFloat(applicant.amount) || 0,
            description: applicant.description || ''
          })),
          totalAmount: this.totalAmount
        };
        this.$emit('invoice-generated', payload);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.success(`Generated ${this.applicantsList.length} invoice lines`);
      } catch (error) {
        var _this$$toast4;
        console.error('Error generating invoice:', error);
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.error('Failed to generate invoice');
      } finally {
        this.isGenerating = false;
      }
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    getInitials(name) {
      if (!name) return '?';
      const parts = name.split(' ');
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var settlement_browsemouvue_type_script_lang_js_ = (browsemouvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/browsemou/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(615)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settlement_browsemouvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4664dd31",
  "40d5f1bf"
  
)

/* harmony default export */ var browsemou = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/index.vue?vue&type=template&id=084231f4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "settlement-audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"settlement-audit-dialog\" data-v-084231f4>", "</div>", [_vm._ssrNode("<div class=\"settlement-audit-dialog-header\" data-v-084231f4><div class=\"header-info\" data-v-084231f4><h3 data-v-084231f4><i class=\"fas fa-history\" data-v-084231f4></i>\n          ປະຫວັດການດຳເນີນງານການຊຳລະ\n        </h3> " + (_vm.settlementInfo ? "<p class=\"settlement-subtitle\" data-v-084231f4>" + _vm._ssrEscape("\n          ການຊຳລະ: " + _vm._s(_vm.settlementInfo.settlementId) + " - \n          " + _vm._s(_vm.formatCurrency(_vm.settlementInfo.paymentAmount)) + " - \n          " + _vm._s(_vm.formatDate(_vm.settlementInfo.settlementDate)) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-084231f4><i class=\"fas fa-times\" data-v-084231f4></i></button></div> "), _vm._ssrNode("<div class=\"settlement-audit-dialog-body\" data-v-084231f4>", "</div>", [_c('settlement-audit-viewer', {
    ref: "settlementAuditViewer",
    attrs: {
      "settlement-id": _vm.settlementId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"settlement-audit-dialog-footer\" data-v-084231f4><button type=\"button\" class=\"btn btn-secondary\" data-v-084231f4><i class=\"fas fa-times\" data-v-084231f4></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-084231f4><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-084231f4>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-084231f4></i>" : "<i class=\"fas fa-download\" data-v-084231f4></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-084231f4><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-084231f4><i class=\"fas fa-caret-down\" data-v-084231f4></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-084231f4><button class=\"dropdown-item\" data-v-084231f4><i class=\"fas fa-code\" data-v-084231f4></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-084231f4><i class=\"fas fa-table\" data-v-084231f4></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-084231f4><i class=\"fas fa-print\" data-v-084231f4></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue?vue&type=template&id=084231f4&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/index.vue?vue&type=script&lang=js&
var auditvue_type_script_lang_js_ = __webpack_require__(501);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var settlement_auditvue_type_script_lang_js_ = (auditvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(613)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settlement_auditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "084231f4",
  "05026f5e"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44bb4dad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44bb4dad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44bb4dad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44bb4dad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44bb4dad_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-44bb4dad]{align-items:center;background-color:rgba(0,0,0,.7);justify-content:center;left:0;padding:0;position:fixed;top:0;z-index:1000}.modal-overlay[data-v-44bb4dad],.settlement-dialog[data-v-44bb4dad]{display:flex;height:100vh;width:100vw}.settlement-dialog[data-v-44bb4dad]{background:#fff;flex-direction:column;overflow:hidden}.dialog-header[data-v-44bb4dad]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;min-height:50px;padding:12px 20px}.dialog-header h4[data-v-44bb4dad]{font-size:16px;font-weight:600;margin:0}.header-actions[data-v-44bb4dad]{gap:8px}.audit-btn[data-v-44bb4dad],.header-actions[data-v-44bb4dad]{align-items:center;display:flex}.audit-btn[data-v-44bb4dad]{background:hsla(0,0%,100%,.2);border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:12px;gap:4px;padding:6px 10px;transition:all .2s ease}.audit-btn[data-v-44bb4dad]:hover{background:hsla(0,0%,100%,.3)}.audit-text[data-v-44bb4dad]{font-size:11px}.close-btn[data-v-44bb4dad]{background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:16px;padding:4px;transition:all .2s ease}.close-btn[data-v-44bb4dad]:hover{background:hsla(0,0%,100%,.2)}.dialog-body[data-v-44bb4dad]{flex:1;overflow-y:auto;padding:0}.form-section[data-v-44bb4dad]{background:#fafafa;border-bottom:1px solid #e9ecef;margin:0;padding:15px}.section-title[data-v-44bb4dad]{align-items:center;border-bottom:1px solid #17a2b8;color:#333;display:flex;font-size:14px;font-weight:600;gap:6px;margin-bottom:12px;padding-bottom:4px}.section-title i[data-v-44bb4dad]{color:#17a2b8;font-size:13px}.section-header[data-v-44bb4dad]{gap:10px;justify-content:space-between;margin-bottom:12px}.section-actions[data-v-44bb4dad],.section-header[data-v-44bb4dad]{align-items:center;display:flex;flex-wrap:wrap}.section-actions[data-v-44bb4dad]{gap:8px}.allocation-info[data-v-44bb4dad]{display:flex;font-size:11px;gap:12px}.info-item[data-v-44bb4dad]{background:#fff;border:1px solid #ddd;border-radius:4px;padding:4px 8px}.form-grid[data-v-44bb4dad]{grid-gap:10px;display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.span-2[data-v-44bb4dad]{grid-column:span 2}.form-group[data-v-44bb4dad]{margin-bottom:0}.form-group label[data-v-44bb4dad]{color:#333;display:block;font-size:12px;font-weight:500;margin-bottom:3px}.required[data-v-44bb4dad]{color:#e74c3c}.form-control[data-v-44bb4dad]{border:1px solid #ddd;border-radius:4px;font-size:12px;height:32px;padding:6px 8px;transition:border-color .2s ease;width:100%}.form-control[data-v-44bb4dad]:focus{border-color:#17a2b8;box-shadow:0 0 0 2px rgba(23,162,184,.1);outline:none}.form-control[data-v-44bb4dad]:disabled{background-color:#f8f9fa;color:#6c757d}.form-control.is-invalid[data-v-44bb4dad]{border-color:#e74c3c}.form-control-xs[data-v-44bb4dad]{font-size:11px;height:28px;padding:4px 6px}.invalid-feedback[data-v-44bb4dad]{color:#e74c3c;display:block;font-size:10px;margin-top:2px;width:100%}.type-badge[data-v-44bb4dad]{border-radius:3px;font-size:10px;font-weight:600;padding:2px 6px;text-transform:uppercase}.type-badge.invoice[data-v-44bb4dad]{background:#e3f2fd;color:#1976d2}.type-badge.manual[data-v-44bb4dad]{background:#fff3e0;color:#f57c00}.type-badge.mou[data-v-44bb4dad]{background:#e8f5e9;color:#2e7d32}.no-invoices[data-v-44bb4dad]{background:#fff;border:2px dashed #ddd;border-radius:6px;color:#666;padding:30px 20px;text-align:center}.no-invoices i[data-v-44bb4dad]{font-size:32px;margin-bottom:10px;opacity:.5}.no-invoices p[data-v-44bb4dad]{font-size:14px;font-weight:600;margin:8px 0 15px}.action-buttons[data-v-44bb4dad]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.settlement-lines[data-v-44bb4dad]{background:#fff;border:1px solid #e9ecef;border-radius:6px;overflow:hidden}.table[data-v-44bb4dad]{border-collapse:collapse;font-size:11px;margin:0;width:100%}.table th[data-v-44bb4dad]{background:#f8f9fa;border-bottom:1px solid #dee2e6;font-size:10px;font-weight:600;padding:6px 4px;text-align:center;white-space:nowrap}.table td[data-v-44bb4dad]{border-top:1px solid #dee2e6;padding:4px;vertical-align:middle}.line-number[data-v-44bb4dad]{color:#666;font-size:10px;font-weight:600;text-align:center}.amount-cell[data-v-44bb4dad]{font-size:10px;font-weight:500;text-align:right}.allocation-summary[data-v-44bb4dad]{background:#f8f9fa;border-top:1px solid #dee2e6;padding:10px}.totals-inline[data-v-44bb4dad]{flex-wrap:wrap;font-size:11px;gap:10px;justify-content:space-between}.total-item[data-v-44bb4dad],.totals-inline[data-v-44bb4dad]{align-items:center;display:flex}.btn[data-v-44bb4dad],.total-item[data-v-44bb4dad]{gap:4px}.btn[data-v-44bb4dad]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:500;padding:6px 12px;transition:all .2s ease;white-space:nowrap}.btn-primary[data-v-44bb4dad]{background:#007bff;color:#fff}.btn-secondary[data-v-44bb4dad]{background:#6c757d;color:#fff}.btn-success[data-v-44bb4dad]{background:#28a745;color:#fff}.btn-info[data-v-44bb4dad]{background:#17a2b8;color:#fff}.btn-danger[data-v-44bb4dad]{background:#dc3545;color:#fff}.btn-sm[data-v-44bb4dad]{font-size:11px;padding:4px 8px}.btn-xs[data-v-44bb4dad]{align-items:center;border-radius:50%;display:flex;font-size:10px;height:24px;justify-content:center;padding:0;width:24px}.btn[data-v-44bb4dad]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-44bb4dad]:disabled{cursor:not-allowed;opacity:.6;transform:none}.dialog-footer[data-v-44bb4dad]{background:#f8f9fa;border-top:1px solid #e9ecef;min-height:56px;padding:12px 20px}.footer-actions[data-v-44bb4dad]{display:flex;gap:8px;justify-content:flex-end}.invoice-selector-overlay[data-v-44bb4dad]{align-items:center;background-color:rgba(0,0,0,.8);display:flex;height:100vh;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100vw;z-index:1100}.invoice-selector-modal[data-v-44bb4dad]{background:#fff;border-radius:6px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:80vh;max-width:800px;overflow:hidden;width:100%}.modal-header[data-v-44bb4dad]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:12px 15px}.modal-header h5[data-v-44bb4dad]{color:#333;font-size:14px;font-weight:600;margin:0}.modal-body[data-v-44bb4dad]{flex:1;overflow-y:auto;padding:15px}.invoice-filters[data-v-44bb4dad]{background:#f8f9fa;border-radius:4px;margin-bottom:15px;padding:10px}.filter-grid[data-v-44bb4dad]{grid-gap:10px;display:grid;gap:10px;grid-template-columns:1fr 1fr}.invoice-list[data-v-44bb4dad]{border:1px solid #e9ecef;border-radius:4px;max-height:400px;overflow-y:auto}.table-hover tbody tr[data-v-44bb4dad]:hover{background-color:rgba(0,0,0,.075)}.selected-row[data-v-44bb4dad]{background-color:rgba(23,162,184,.1)!important}.no-data[data-v-44bb4dad]{color:#666;font-size:13px;padding:30px 20px;text-align:center}.modal-actions[data-v-44bb4dad]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:8px;justify-content:flex-end;padding:12px 15px}@media (max-width:768px){.form-grid[data-v-44bb4dad]{grid-template-columns:1fr}.span-2[data-v-44bb4dad]{grid-column:span 1}.section-actions[data-v-44bb4dad],.section-header[data-v-44bb4dad]{align-items:flex-start;flex-direction:column}.section-actions[data-v-44bb4dad]{width:100%}.allocation-info[data-v-44bb4dad]{flex-direction:column;gap:6px;width:100%}.totals-inline[data-v-44bb4dad]{align-items:flex-start;gap:6px}.footer-actions[data-v-44bb4dad],.totals-inline[data-v-44bb4dad]{flex-direction:column}.footer-actions .btn[data-v-44bb4dad]{justify-content:center;width:100%}.invoice-selector-modal[data-v-44bb4dad]{max-width:95vw}.filter-grid[data-v-44bb4dad]{grid-template-columns:1fr}.invoice-list[data-v-44bb4dad]{overflow-x:auto}.table[data-v-44bb4dad]{min-width:600px}.action-buttons[data-v-44bb4dad]{flex-direction:column}.action-buttons .btn[data-v-44bb4dad]{width:100%}}@media (max-width:480px){.dialog-header[data-v-44bb4dad]{padding:10px 15px}.dialog-header h4[data-v-44bb4dad]{font-size:14px}.header-actions[data-v-44bb4dad]{gap:6px}.audit-text[data-v-44bb4dad]{display:none}.dialog-body[data-v-44bb4dad]{padding:0}.form-section[data-v-44bb4dad]{padding:12px}.dialog-footer[data-v-44bb4dad]{padding:10px 15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(399);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(348);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 2 modules
var VTextField = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/index.vue?vue&type=template&id=44bb4dad&scoped=true&














var settlementvue_type_template_id_44bb4dad_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.handleOverlayClick.apply(null, arguments);
      }
    }
  }, [_vm._ssrNode("<div class=\"settlement-dialog\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<div class=\"dialog-header\" data-v-44bb4dad><h4 data-v-44bb4dad>" + _vm._ssrEscape(_vm._s(_vm.isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ສ້າງການຊຳລະໃໝ່')) + "</h4> <div class=\"header-actions\" data-v-44bb4dad>" + (_vm.isEditMode ? "<button type=\"button\" title=\"ເບິ່ງປະຫວັດການດຳເນີນງານ\" class=\"audit-btn\" data-v-44bb4dad><i class=\"fas fa-history\" data-v-44bb4dad></i> <span class=\"audit-text\" data-v-44bb4dad>ປະຫວັດ</span></button>" : "<!---->") + " <button class=\"close-btn\" data-v-44bb4dad><i class=\"fas fa-times\" data-v-44bb4dad></i></button></div></div> "), _vm._ssrNode("<div class=\"dialog-body\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<form data-v-44bb4dad>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-44bb4dad><i class=\"fas fa-credit-card\" data-v-44bb4dad></i>\n            ຂໍ້ມູນການຊຳລະ\n          </h5> "), _vm._ssrNode("<div class=\"form-grid\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-44bb4dad><label data-v-44bb4dad>ວັນທີຊຳລະ <span class=\"required\" data-v-44bb4dad>*</span></label> <input type=\"date\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.settlementDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.settlementDate
  }) + " data-v-44bb4dad> " + (_vm.errors.settlementDate ? "<div class=\"invalid-feedback\" data-v-44bb4dad>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.settlementDate) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-44bb4dad><label data-v-44bb4dad>ຈຳນວນເງິນຊຳລະ <span class=\"required\" data-v-44bb4dad>*</span></label> <input type=\"text\" disabled=\"disabled\" readonly=\"readonly\"" + _vm._ssrAttr("value", _vm.formatCurrency(_vm.totalAllocated)) + " class=\"form-control\" data-v-44bb4dad> <small class=\"text-muted\" data-v-44bb4dad>Auto-calculated from settlement lines</small></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" class=\"required\" data-v-44bb4dad>ສະກຸນເງິນ</label> "), _c('select', {
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
    }, [_vm._v("\n                  " + _vm._s(currency.name) + " (" + _vm._s(currency.code) + ")\n                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-44bb4dad>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.currencyId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<label data-v-44bb4dad>ວິທີການຊຳລະ <span class=\"required\" data-v-44bb4dad>*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentMethodId,
      expression: "form.paymentMethodId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.paymentMethodId
    },
    attrs: {
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "paymentMethodId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກວິທີການຊຳລະ")]), _vm._v(" "), _vm._l(_vm.paymentMethods, function (method) {
    return _c('option', {
      key: method.id,
      domProps: {
        "value": method.id
      }
    }, [_vm._v("\n                  " + _vm._s(method.payment_name) + "\n                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.paymentMethodId ? "<div class=\"invalid-feedback\" data-v-44bb4dad>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.paymentMethodId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<label data-v-44bb4dad>ບັນຊີທະນາຄານ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankAccountId,
      expression: "form.bankAccountId"
    }],
    staticClass: "form-control",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີທະນາຄານ")]), _vm._v(" "), _vm._l(_vm.bankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                  " + _vm._s(account.accountNumber) + " - " + _vm._s(account.bankName) + "\n                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-44bb4dad><label data-v-44bb4dad>ອ້າງອີງ</label> <input type=\"text\" maxlength=\"100\" placeholder=\"ຫມາຍເລກອ້າງອີງ\"" + _vm._ssrAttr("value", _vm.form.reference) + " class=\"form-control\" data-v-44bb4dad></div> <div class=\"form-group span-2\" data-v-44bb4dad><label data-v-44bb4dad>ຄຳອະທິບາຍ</label> <textarea rows=\"2\" placeholder=\"ຄຳອະທິບາຍການຊຳລະ\" class=\"form-control\" data-v-44bb4dad>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-section\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<div class=\"section-header\" data-v-44bb4dad><h5 class=\"section-title\" data-v-44bb4dad><i class=\"fas fa-list\" data-v-44bb4dad></i>\n              ລາຍການຈັດສັນ\n            </h5> <div class=\"section-actions\" data-v-44bb4dad><button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-info btn-sm\" data-v-44bb4dad><i class=\"fas fa-file-contract\" data-v-44bb4dad></i> ເພີ່ມຈາກ MOU\n              </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-success btn-sm\" data-v-44bb4dad><i class=\"fas fa-plus\" data-v-44bb4dad></i> ເພີ່ມລາຍການ\n              </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-primary btn-sm\" data-v-44bb4dad><i class=\"fas fa-file-invoice\" data-v-44bb4dad></i> ເລືອກຈາກໃບແຈ້ງໜີ້\n              </button> <div class=\"allocation-info\" data-v-44bb4dad><span class=\"info-item\" data-v-44bb4dad>\n                  ຈັດສັນ:\n                  <strong data-v-44bb4dad>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.totalAllocated))) + "</strong></span></div></div></div> "), _vm.settlementLines.length === 0 ? _vm._ssrNode("<div class=\"no-invoices\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<i class=\"fas fa-clipboard-list\" data-v-44bb4dad></i> <p data-v-44bb4dad>ຍັງບໍ່ມີລາຍການຈັດສັນ</p> <div class=\"action-buttons\" data-v-44bb4dad><button type=\"button\" class=\"btn btn-info btn-sm\" data-v-44bb4dad><i class=\"fas fa-file-contract\" data-v-44bb4dad></i> ເພີ່ມຈາກ MOU\n              </button> <button type=\"button\" class=\"btn btn-success btn-sm\" data-v-44bb4dad><i class=\"fas fa-plus-circle\" data-v-44bb4dad></i> ເພີ່ມລາຍການດ້ວຍມື\n              </button> <button type=\"button\" class=\"btn btn-primary btn-sm\" data-v-44bb4dad><i class=\"fas fa-file-invoice\" data-v-44bb4dad></i> ເລືອກຈາກໃບແຈ້ງໜີ້\n              </button></div>")], 2) : _vm._ssrNode("<div class=\"settlement-lines\" data-v-44bb4dad>", "</div>", [_vm._ssrNode("<table class=\"table\" data-v-44bb4dad>", "</table>", [_vm._ssrNode("<thead data-v-44bb4dad><tr data-v-44bb4dad><th style=\"width: 30px\" data-v-44bb4dad>#</th> <th style=\"width: 100px\" data-v-44bb4dad>ປະເພດ</th> <th style=\"width: 120px\" data-v-44bb4dad>ເລກທີໃບແຈ້ງໜີ້</th> <th style=\"width: 150px\" data-v-44bb4dad>ຕົວແທນ</th> <th data-v-44bb4dad>ຄຳອະທິບາຍ</th> <th style=\"width: 80px\" data-v-44bb4dad>ຈຳນວນເງິນ</th> <th style=\"width: 40px\" data-v-44bb4dad>ລຶບ</th></tr></thead> "), _vm._ssrNode("<tbody data-v-44bb4dad>", "</tbody>", _vm._l(_vm.settlementLines, function (line, index) {
    return _vm._ssrNode("<tr data-v-44bb4dad>", "</tr>", [_vm._ssrNode("<td class=\"line-number\" data-v-44bb4dad>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-44bb4dad><span" + _vm._ssrClass(null, ['type-badge', line.type]) + " data-v-44bb4dad>" + _vm._ssrEscape("\n                      " + _vm._s(line.type === 'invoice' ? 'ໃບແຈ້ງໜີ້' : line.type === 'mou' ? 'MOU' : 'ດ້ວຍມື') + "\n                    ") + "</span></td> <td data-v-44bb4dad>" + (line.type === 'manual' ? "<input type=\"text\" placeholder=\"ເລກທີໃບແຈ້ງໜີ້\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + _vm._ssrAttr("value", line.invoiceNumber) + " class=\"form-control form-control-xs\" data-v-44bb4dad>" : "<span data-v-44bb4dad>" + _vm._ssrEscape(_vm._s(line.invoiceNumber || '-')) + "</span>") + "</td> "), _vm._ssrNode("<td data-v-44bb4dad>", "</td>", [line.type === 'manual' ? _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: line.agencyId,
        expression: "line.agencyId"
      }],
      staticClass: "form-control form-control-xs",
      attrs: {
        "disabled": !_vm.canModifyAllocations
      },
      on: {
        "change": function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(line, "agencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("ເລືອກຕົວແທນ")]), _vm._v(" "), _vm._l(_vm.agencies, function (agency) {
      return _c('option', {
        key: agency.id,
        domProps: {
          "value": agency.id
        }
      }, [_vm._v("\n                        " + _vm._s(agency.agencyName) + " - " + _vm._s(agency.agencyCode) + " -\n                        " + _vm._s(agency.agencyType) + "\n                      ")]);
    })], 2) : _c('span', [_vm._v(_vm._s(line.agencyType || '-'))])]), _vm._ssrNode(" <td data-v-44bb4dad><input type=\"text\" placeholder=\"ຄຳອະທິບາຍ\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + _vm._ssrAttr("value", line.description) + " class=\"form-control form-control-xs\" data-v-44bb4dad></td> <td data-v-44bb4dad><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + _vm._ssrAttr("value", line.amount) + " class=\"form-control form-control-xs\" data-v-44bb4dad></td> <td data-v-44bb4dad><button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.canModifyAllocations) + " class=\"btn btn-xs btn-danger\" data-v-44bb4dad><i class=\"fas fa-trash\" data-v-44bb4dad></i></button></td>")], 2);
  }), 0)], 2), _vm._ssrNode(" <div class=\"allocation-summary\" data-v-44bb4dad><div class=\"totals-inline\" data-v-44bb4dad><span class=\"total-item\" data-v-44bb4dad>\n                  ລວມຈັດສັນ:\n                  <strong data-v-44bb4dad>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.totalAllocated))) + "</strong></span></div></div>")], 2)], 2), _vm._ssrNode(" " + (_vm.showApprovalSection ? "<div class=\"form-section\" data-v-44bb4dad><h5 class=\"section-title\" data-v-44bb4dad><i class=\"fas fa-check-circle\" data-v-44bb4dad></i>\n            ການອະນຸມັດ\n          </h5> <div class=\"form-grid\" data-v-44bb4dad><div class=\"form-group\" data-v-44bb4dad><label data-v-44bb4dad>ຜູ້ອະນຸມັດ</label> <input type=\"text\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.checkerName) + " class=\"form-control\" data-v-44bb4dad></div> <div class=\"form-group\" data-v-44bb4dad><label data-v-44bb4dad>ໝາຍເຫດການອະນຸມັດ</label> <textarea rows=\"2\" placeholder=\"ໝາຍເຫດການອະນຸມັດ\"" + _vm._ssrAttr("disabled", !_vm.canApprove) + " class=\"form-control\" data-v-44bb4dad>" + _vm._ssrEscape(_vm._s(_vm.form.approvalNote)) + "</textarea></div></div></div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"dialog-footer\" data-v-44bb4dad><div class=\"footer-actions\" data-v-44bb4dad><button type=\"button\" class=\"btn btn-secondary\" data-v-44bb4dad><i class=\"fas fa-times\" data-v-44bb4dad></i> ຍົກເລີກ\n        </button> " + (_vm.canApprove && _vm.form.status === 'pending' ? "<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isSubmitting) + " class=\"btn btn-success\" data-v-44bb4dad><i class=\"fas fa-check\" data-v-44bb4dad></i> ອະນຸມັດ\n        </button>" : "<!---->") + " " + (_vm.canComplete && ['pending', 'approved'].includes(_vm.form.status) ? "<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isSubmitting) + " class=\"btn btn-info\" data-v-44bb4dad><i class=\"fas fa-check-circle\" data-v-44bb4dad></i> ສຳເລັດ\n        </button>" : "<!---->") + " <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.isSubmitting || !_vm.canModify) + " class=\"btn btn-primary\" data-v-44bb4dad><i class=\"fas fa-save\" data-v-44bb4dad></i>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isSubmitting ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div></div>")], 2), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "900px",
      "persistent": "",
      "scrollable": ""
    },
    model: {
      value: _vm.showInvoiceSelector,
      callback: function ($$v) {
        _vm.showInvoiceSelector = $$v;
      },
      expression: "showInvoiceSelector"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', [_vm._v("ເລືອກໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": _vm.closeInvoiceSelector
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້",
      "outlined": "",
      "dense": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-magnify"
    },
    on: {
      "input": _vm.filterInvoices
    },
    model: {
      value: _vm.invoiceSearchTerm,
      callback: function ($$v) {
        _vm.invoiceSearchTerm = $$v;
      },
      expression: "invoiceSearchTerm"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.agencyFilterOptions,
      "item-text": "name",
      "item-value": "id",
      "label": "ຕົວແທນ",
      "outlined": "",
      "dense": "",
      "clearable": "",
      "prepend-inner-icon": "mdi-account"
    },
    on: {
      "change": _vm.filterInvoices
    },
    model: {
      value: _vm.selectedAgencyFilter,
      callback: function ($$v) {
        _vm.selectedAgencyFilter = $$v;
      },
      expression: "selectedAgencyFilter"
    }
  })], 1)], 1), _vm._v(" "), _c(VDataTable["a" /* default */], {
    staticClass: "elevation-1",
    attrs: {
      "headers": _vm.invoiceTableHeaders,
      "items": _vm.filteredInvoices,
      "items-per-page": 10,
      "show-select": "",
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item.invoiceNumber",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "font-weight-medium"
        }, [_vm._v(_vm._s(item.invoiceNumber))])];
      }
    }, {
      key: "item.agency",
      fn: function ({
        item
      }) {
        return [_vm._v("\n            " + _vm._s(_vm.getAgencyName(item)) + "\n          ")];
      }
    }, {
      key: "item.dueDate",
      fn: function ({
        item
      }) {
        return [_vm._v("\n            " + _vm._s(_vm.formatDate(item.dueDate)) + "\n          ")];
      }
    }, {
      key: "item.outstandingAmount",
      fn: function ({
        item
      }) {
        return [_c('span', {
          staticClass: "font-weight-bold"
        }, [_vm._v("\n              " + _vm._s(_vm.formatCurrency(item.outstandingAmount)) + "\n            ")])];
      }
    }], null, false, 2481259708),
    model: {
      value: _vm.tempSelectedInvoices,
      callback: function ($$v) {
        _vm.tempSelectedInvoices = $$v;
      },
      expression: "tempSelectedInvoices"
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.closeInvoiceSelector
    }
  }, [_vm._v("ຍົກເລີກ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.confirmInvoiceSelection
    }
  }, [_vm._v("\n          ຢືນຢັນການເລືອກ (" + _vm._s(_vm.tempSelectedInvoices.length) + ")\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200px",
      "persistent": "",
      "scrollable": ""
    },
    model: {
      value: _vm.showMOUDialog,
      callback: function ($$v) {
        _vm.showMOUDialog = $$v;
      },
      expression: "showMOUDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-file-contract")]), _vm._v(" "), _c('span', [_vm._v("Create Invoice from MOU")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": _vm.closeMOUDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pt-4"
  }, [_c('browse-mou-invoice-dialog', {
    attrs: {
      "visible": _vm.showMOUDialog
    },
    on: {
      "close": _vm.closeMOUDialog,
      "invoice-generated": _vm.onInvoiceGenerated
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c('settlement-audit-dialog', {
    attrs: {
      "visible": _vm.showAuditDialog,
      "settlement-id": _vm.form.id,
      "settlement-info": _vm.settlementInfoForAudit
    },
    on: {
      "close": _vm.closeAuditDialog
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue?vue&type=template&id=44bb4dad&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(104);

// EXTERNAL MODULE: ./components/accounting/ap/settlement/audit/index.vue + 3 modules
var audit = __webpack_require__(646);

// EXTERNAL MODULE: ./components/accounting/ap/settlement/browsemou/index.vue + 4 modules
var browsemou = __webpack_require__(644);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/index.vue?vue&type=script&lang=js&















/* harmony default export */ var settlementvue_type_script_lang_js_ = ({
  name: 'SettlementDialog',
  components: {
    SettlementAuditDialog: audit["default"],
    BrowseMouInvoiceDialog: browsemou["default"]
  },
  props: {
    currencies: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: false
    },
    settlement: {
      type: Object,
      default: null
    },
    outstandingInvoices: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        currencyId: null,
        paymentMethodId: '',
        bankAccountId: '',
        reference: '',
        description: '',
        status: 'draft',
        makerId: null,
        checkerId: null,
        approvalNote: ''
      },
      settlementLines: [],
      tempSelectedInvoices: [],
      paymentMethods: [],
      bankAccounts: [],
      agencies: [],
      errors: {},
      isSubmitting: false,
      showInvoiceSelector: false,
      showMOUDialog: false,
      showAuditDialog: false,
      invoiceSearchTerm: '',
      selectedAgencyFilter: '',
      filteredInvoices: [],
      lineIdCounter: 1,
      loadingAgencies: false,
      invoiceTableHeaders: [{
        text: 'ເລກທີໃບແຈ້ງໜີ້',
        value: 'invoiceNumber',
        sortable: true
      }, {
        text: 'ຕົວແທນ',
        value: 'agency',
        sortable: false
      }, {
        text: 'ວັນທີຄົບກຳນົດ',
        value: 'dueDate',
        sortable: true
      }, {
        text: 'ຍອດຄ້າງຈ່າຍ',
        value: 'outstandingAmount',
        sortable: true,
        align: 'end'
      }]
    };
  },
  computed: {
    user() {
      return this.$auth.user || {};
    },
    isEditMode() {
      return !!(this.settlement && this.settlement.id);
    },
    canModify() {
      return ['draft', 'pending'].includes(this.form.status);
    },
    canModifyAllocations() {
      return this.canModify;
    },
    canApprove() {
      return this.user.canApproveSettlements && this.form.status === 'pending';
    },
    canComplete() {
      return this.user.canCompleteSettlements && ['pending', 'approved'].includes(this.form.status);
    },
    showApprovalSection() {
      return this.isEditMode && ['pending', 'approved', 'completed'].includes(this.form.status);
    },
    totalAllocated() {
      return this.settlementLines.reduce((sum, line) => sum + parseFloat(line.amount || 0), 0);
    },
    availableAgencies() {
      const agencyMap = new Map();
      this.outstandingInvoices.forEach(invoice => {
        const agency = invoice.agency || invoice.vendor;
        if (agency && !agencyMap.has(agency.id)) {
          agencyMap.set(agency.id, {
            id: agency.id,
            name: agency.name || agency.agencyName,
            code: agency.code || agency.agencyCode || agency.vendorCode
          });
        }
      });
      return Array.from(agencyMap.values());
    },
    agencyFilterOptions() {
      return [{
        id: '',
        name: 'ທຸກຕົວແທນ'
      }, ...this.availableAgencies];
    },
    makerName() {
      var _this$settlement;
      if (this.isEditMode && (_this$settlement = this.settlement) !== null && _this$settlement !== void 0 && _this$settlement.maker) {
        return this.settlement.maker.cus_name || this.settlement.maker.username;
      }
      return this.user.cus_name || this.user.username;
    },
    checkerName() {
      var _this$settlement2;
      if (this.isEditMode && (_this$settlement2 = this.settlement) !== null && _this$settlement2 !== void 0 && _this$settlement2.checker) {
        return this.settlement.checker.fullName || this.settlement.checker.username;
      }
      return '';
    },
    settlementInfoForAudit() {
      if (!this.isEditMode) return null;
      return {
        settlementId: this.form.id,
        paymentAmount: this.totalAllocated,
        settlementDate: this.form.settlementDate,
        status: this.form.status,
        reference: this.form.reference,
        description: this.form.description
      };
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) this.initializeDialog();
    },
    settlement: {
      handler(newVal) {
        if (newVal) this.loadSettlementData(newVal);
      },
      immediate: true
    }
  },
  async mounted() {
    await this.loadReferenceData();
  },
  methods: {
    getAgencyName(invoice) {
      const agency = invoice.agency || invoice.vendor;
      return (agency === null || agency === void 0 ? void 0 : agency.name) || (agency === null || agency === void 0 ? void 0 : agency.agencyName) || 'N/A';
    },
    onCurrencyChange() {},
    async initializeDialog() {
      // Load reference data first
      await this.loadReferenceData();

      // Then load settlement data
      if (this.settlement) {
        this.loadSettlementData(this.settlement);
      } else {
        this.resetForm();
      }
      this.filteredInvoices = [...this.outstandingInvoices];
    },
    async loadReferenceData() {
      try {
        await Promise.all([this.loadPaymentMethods(), this.loadBankAccounts(), this.fetchAgencies()]);
      } catch (error) {
        console.error('Error loading reference data:', error);
      }
    },
    async loadPaymentMethods() {
      try {
        const {
          data
        } = await this.$axios.get('/api/paymentMethod/find');
        this.paymentMethods = data || [];
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.paymentMethods = [];
      }
    },
    async loadBankAccounts() {
      try {
        const {
          data
        } = await this.$axios.get('/api/bank_account/find');
        this.bankAccounts = data || [];
      } catch (error) {
        console.error('Error loading bank accounts:', error);
        this.bankAccounts = [];
      }
    },
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
        var _this$$toast;
        console.error('Error fetching agencies:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ');
      } finally {
        this.loadingAgencies = false;
      }
    },
    loadSettlementData(settlement) {
      this.form = {
        id: settlement.id,
        settlementDate: settlement.settlementDate || new Date().toISOString().split('T')[0],
        // Convert to numbers to match option values
        paymentMethodId: settlement.paymentMethodId ? Number(settlement.paymentMethodId) : '',
        currencyId: settlement.currencyId ? Number(settlement.currencyId) : '',
        bankAccountId: settlement.bankAccountId ? Number(settlement.bankAccountId) : '',
        reference: settlement.reference || '',
        description: settlement.description || '',
        status: settlement.status || 'draft',
        makerId: settlement.makerId || this.user.id,
        checkerId: settlement.checkerId || null,
        approvalNote: settlement.approvalNote || ''
      };
      if (settlement.invoiceSettlements) {
        this.settlementLines = settlement.invoiceSettlements.map(allocation => {
          var _agency;
          // Handle different data structures
          let invoice = null;
          let agency = null;
          let agencyName = '';
          let invoiceNumber = '';
          let invoiceId = null;

          // Check if this is an invoice-linked line
          if (allocation.invoiceLineItem && allocation.invoiceLineItem.invoice) {
            invoice = allocation.invoiceLineItem.invoice;
            invoiceId = invoice.id;
            invoiceNumber = invoice.invoiceNumber;
            agency = invoice.agency || invoice.vendor;
          }

          // Get agency information (from line level or invoice level)
          if (allocation.agency) {
            agency = allocation.agency;
            agencyName = agency.agencyName || agency.name || '';
          } else if (allocation.applicant) {
            agencyName = allocation.applicant.name || '';
          } else if (agency) {
            agencyName = agency.agencyName || agency.name || '';
          }
          return {
            tempId: this.lineIdCounter++,
            type: invoiceId ? 'invoice' : 'manual',
            invoiceId: invoiceId,
            invoiceNumber: invoiceNumber,
            agencyId: allocation.agencyId || ((_agency = agency) === null || _agency === void 0 ? void 0 : _agency.id) || null,
            agencyName: agencyName,
            applicantId: allocation.applicantId || null,
            description: allocation.description || '',
            amount: parseFloat(allocation.amount || 0)
          };
        });
      }
    },
    resetForm() {
      this.form = {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        currencyId: '',
        paymentMethodId: '',
        bankAccountId: '',
        reference: '',
        description: '',
        status: 'draft',
        makerId: this.user.id,
        checkerId: null,
        approvalNote: ''
      };
      this.settlementLines = [];
      this.errors = {};
      this.lineIdCounter = 1;
    },
    addManualLine() {
      this.settlementLines.push({
        tempId: this.lineIdCounter++,
        type: 'manual',
        invoiceId: null,
        invoiceNumber: '',
        agencyId: '',
        agencyName: '',
        description: '',
        amount: 0
      });
    },
    removeLine(index) {
      this.settlementLines.splice(index, 1);
    },
    openAuditDialog() {
      if (!this.isEditMode) {
        var _this$$toast2;
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.warning('ບໍ່ສາມາດເບິ່ງປະຫວັດການດຳເນີນງານໄດ້ ເນື່ອງຈາກຍັງບໍ່ໄດ້ບັນທຶກການຊຳລະ');
        return;
      }
      this.showAuditDialog = true;
    },
    closeAuditDialog() {
      this.showAuditDialog = false;
    },
    openMOUDialog() {
      this.showMOUDialog = true;
    },
    closeMOUDialog() {
      this.showMOUDialog = false;
    },
    onInvoiceGenerated(invoiceData) {
      var _invoiceData$lines, _this$$toast4;
      if (!(invoiceData !== null && invoiceData !== void 0 && (_invoiceData$lines = invoiceData.lines) !== null && _invoiceData$lines !== void 0 && _invoiceData$lines.length)) {
        var _this$$toast3;
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('No invoice lines received');
        return;
      }
      const mouInfo = invoiceData.mouInfo || {};
      const batchInfo = invoiceData.batchInfo || {};
      invoiceData.lines.forEach(line => {
        const description = `${mouInfo.jobCode || 'MOU'} | ${batchInfo.runningNo || 'Batch'} | ${invoiceData.agencyCode || 'Agency'} | ${line.applicantName} (${line.passportNo})`;
        this.settlementLines.push({
          tempId: this.lineIdCounter++,
          type: 'mou',
          invoiceId: null,
          invoiceNumber: invoiceData.invoiceNumber || '',
          agencyId: invoiceData.agencyId || null,
          agencyName: `${invoiceData.agencyName} (${invoiceData.agencyCode})`,
          description,
          amount: parseFloat(line.amount || 0)
        });
      });
      (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.success(`Added ${invoiceData.lines.length} MOU lines to settlement`);
      this.closeMOUDialog();
    },
    filterInvoices() {
      let filtered = [...this.outstandingInvoices];
      if (this.invoiceSearchTerm) {
        const search = this.invoiceSearchTerm.toLowerCase();
        filtered = filtered.filter(invoice => {
          const agency = invoice.agency || invoice.vendor;
          const agencyName = (agency === null || agency === void 0 ? void 0 : agency.name) || (agency === null || agency === void 0 ? void 0 : agency.agencyName) || '';
          return invoice.invoiceNumber.toLowerCase().includes(search) || agencyName.toLowerCase().includes(search);
        });
      }
      if (this.selectedAgencyFilter) {
        filtered = filtered.filter(invoice => {
          const agency = invoice.agency || invoice.vendor;
          return (agency === null || agency === void 0 ? void 0 : agency.id) === this.selectedAgencyFilter;
        });
      }
      this.filteredInvoices = filtered;
    },
    confirmInvoiceSelection() {
      this.tempSelectedInvoices.forEach(invoice => {
        if (!this.settlementLines.find(line => line.invoiceId === invoice.id)) {
          const agency = invoice.agency || invoice.vendor;
          this.settlementLines.push({
            tempId: this.lineIdCounter++,
            type: 'invoice',
            invoiceId: invoice.id,
            invoiceNumber: invoice.invoiceNumber,
            agencyId: (agency === null || agency === void 0 ? void 0 : agency.id) || null,
            agencyName: (agency === null || agency === void 0 ? void 0 : agency.name) || (agency === null || agency === void 0 ? void 0 : agency.agencyName) || '',
            description: '',
            amount: parseFloat(invoice.outstandingAmount || 0)
          });
        }
      });
      this.closeInvoiceSelector();
    },
    closeInvoiceSelector() {
      this.showInvoiceSelector = false;
      this.tempSelectedInvoices = [];
      this.invoiceSearchTerm = '';
      this.selectedAgencyFilter = '';
      this.filteredInvoices = [...this.outstandingInvoices];
    },
    validateForm() {
      var _this$form$reference;
      this.errors = {};
      if (!this.form.settlementDate) this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີຊຳລະ';
      if (this.totalAllocated <= 0) this.errors.paymentAmount = 'ກະລຸນາເພີ່ມລາຍການຈັດສັນ';
      if (!this.form.paymentMethodId) this.errors.paymentMethodId = 'ກະລຸນາເລືອກວິທີການຊຳລະ';
      if (!this.form.currencyId) this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
      if (((_this$form$reference = this.form.reference) === null || _this$form$reference === void 0 ? void 0 : _this$form$reference.length) > 100) this.errors.reference = 'ຫມາຍເລກອ້າງອີງຍາວເກີນ 100 ຕົວອັກສອນ';
      return Object.keys(this.errors).length === 0;
    },
    async submitForm() {
      if (!this.validateForm()) return;
      this.isSubmitting = true;
      try {
        const formData = {
          ...this.form,
          paymentAmount: this.totalAllocated,
          baseAmount: this.totalAllocated,
          makerId: this.form.makerId || this.user.id,
          settlementLines: this.settlementLines.map(line => ({
            type: line.type,
            invoiceId: line.invoiceId,
            invoiceNumber: line.invoiceNumber,
            agencyId: line.agencyId,
            description: line.description,
            amount: parseFloat(line.amount || 0)
          }))
        };
        this.$emit('save', formData);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        this.isSubmitting = false;
      }
    },
    async approveSettlement() {
      if (!this.canApprove) return;
      this.isSubmitting = true;
      try {
        this.$emit('approve', {
          id: this.form.id,
          status: 'approved',
          checkerId: this.user.id,
          approvalNote: this.form.approvalNote
        });
      } catch (error) {
        console.error('Error approving settlement:', error);
      } finally {
        this.isSubmitting = false;
      }
    },
    async completeSettlement() {
      if (!this.canComplete) return;
      this.isSubmitting = true;
      try {
        this.$emit('complete', {
          id: this.form.id,
          status: 'completed'
        });
      } catch (error) {
        console.error('Error completing settlement:', error);
      } finally {
        this.isSubmitting = false;
      }
    },
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('en-GB');
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ap_settlementvue_type_script_lang_js_ = (settlementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(691)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ap_settlementvue_type_script_lang_js_,
  settlementvue_type_template_id_44bb4dad_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "44bb4dad",
  "6a236dc5"
  
)

/* harmony default export */ var settlement = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ap-settlement.js.map