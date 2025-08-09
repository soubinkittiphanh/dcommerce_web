exports.ids = [197];
exports.modules = {

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(357);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      sharedMessage: 'Hello from mixin!'
    };
  },
  methods: {
    // Excel Export Functions
    // Add these methods to your Vue component

    // Individual Export Functions
    async exportMinistryReportToExcel() {
      try {
        if (!this.ministrySummaryReport.length) {
          this.$toast.warning('No ministry data to export');
          return;
        }
        const workbook = this.createExcelWorkbook();
        const worksheet = this.createMinistryWorksheet();

        // Add worksheet to workbook
        xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, worksheet, 'Ministry Report');

        // Generate filename with current date
        const filename = `Ministry_Report_${this.formatDateForFilename()}.xlsx`;

        // Save file
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, filename);
        this.$toast.success('Ministry report exported successfully');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('Failed to export ministry report');
      }
    },
    async exportBankAccountReportToExcel() {
      try {
        if (!this.bankAccountSummaryReport.length) {
          this.$toast.warning('No bank account data to export');
          return;
        }
        const workbook = this.createExcelWorkbook();
        const worksheet = this.createBankAccountWorksheet();
        xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, worksheet, 'Bank Account Report');
        const filename = `Bank_Account_Report_${this.formatDateForFilename()}.xlsx`;
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, filename);
        this.$toast.success('Bank account report exported successfully');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('Failed to export bank account report');
      }
    },
    async exportChartAccountReportToExcel() {
      try {
        if (!this.chartAccountSummaryReport.length) {
          this.$toast.warning('No chart account data to export');
          return;
        }
        const workbook = this.createExcelWorkbook();
        const worksheet = this.createChartAccountWorksheet();
        xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, worksheet, 'Chart Account Report');
        const filename = `Chart_Account_Report_${this.formatDateForFilename()}.xlsx`;
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, filename);
        this.$toast.success('Chart account report exported successfully');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('Failed to export chart account report');
      }
    },
    // Combined Export Function
    async exportAllReportsToExcel() {
      try {
        const hasMinistry = this.ministrySummaryReport && this.ministrySummaryReport.length > 0;
        const hasBankAccount = this.bankAccountSummaryReport && this.bankAccountSummaryReport.length > 0;
        const hasChartAccount = this.chartAccountSummaryReport && this.chartAccountSummaryReport.length > 0;
        if (!hasMinistry && !hasBankAccount && !hasChartAccount) {
          this.$toast.warning('No data available to export');
          return;
        }
        const workbook = this.createExcelWorkbook();

        // Add each report as a separate sheet
        if (hasMinistry) {
          const ministryWorksheet = this.createMinistryWorksheet();
          xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, ministryWorksheet, 'Ministry Report');
        }
        if (hasBankAccount) {
          const bankAccountWorksheet = this.createBankAccountWorksheet();
          xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, bankAccountWorksheet, 'Bank Account Report');
        }
        if (hasChartAccount) {
          const chartAccountWorksheet = this.createChartAccountWorksheet();
          xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_append_sheet(workbook, chartAccountWorksheet, 'Chart Account Report');
        }
        const filename = `Financial_Reports_${this.formatDateForFilename()}.xlsx`;
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, filename);
        this.$toast.success('All reports exported successfully');
      } catch (error) {
        console.error('Export error:', error);
        this.$toast.error('Failed to export reports');
      }
    },
    // Helper Functions
    createExcelWorkbook() {
      return xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].book_new();
    },
    createMinistryWorksheet() {
      var _this$ministryTotals2;
      // Create header row
      const headers = ['#', 'Ministry Code', 'Ministry Name', 'Settlement Count', ...this.currencyList, 'Total (LAK)'];

      // Create data rows
      const data = this.ministrySummaryReport.map((item, index) => {
        const row = [index + 1, item.ministryCode, item.ministryName, item.settlementCount];

        // Add currency amounts
        this.currencyList.forEach(currency => {
          var _item$amounts;
          row.push(((_item$amounts = item.amounts) === null || _item$amounts === void 0 ? void 0 : _item$amounts[currency]) || 0);
        });

        // Add total
        row.push(item.totalLakEquivalent || 0);
        return row;
      });

      // Add totals row
      const totalsRow = ['', '', 'TOTAL', this.ministrySummaryReport.reduce((sum, m) => sum + m.settlementCount, 0)];
      this.currencyList.forEach(currency => {
        var _this$ministryTotals, _this$ministryTotals$;
        totalsRow.push(((_this$ministryTotals = this.ministryTotals) === null || _this$ministryTotals === void 0 ? void 0 : (_this$ministryTotals$ = _this$ministryTotals.currencyTotals) === null || _this$ministryTotals$ === void 0 ? void 0 : _this$ministryTotals$[currency]) || 0);
      });
      totalsRow.push(((_this$ministryTotals2 = this.ministryTotals) === null || _this$ministryTotals2 === void 0 ? void 0 : _this$ministryTotals2.totalLakEquivalent) || 0);

      // Combine headers, data, and totals
      const worksheetData = [headers, ...data, totalsRow];

      // Create worksheet
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].aoa_to_sheet(worksheetData);

      // Add metadata
      this.addWorksheetMetadata(worksheet, 'Ministry Financial Report');
      return worksheet;
    },
    createBankAccountWorksheet() {
      var _this$bankAccountTota3;
      const headers = ['#', 'Account Number', 'Account Name', 'Bank Name', 'Account Type', 'Settlement Count', ...this.currencyList, 'Total (LAK)'];
      const data = this.bankAccountSummaryReport.map((item, index) => {
        const row = [index + 1, item.accountNumber, item.accountName, item.bankName, item.accountType, item.settlementCount];
        this.currencyList.forEach(currency => {
          var _item$amounts2;
          row.push(((_item$amounts2 = item.amounts) === null || _item$amounts2 === void 0 ? void 0 : _item$amounts2[currency]) || 0);
        });
        row.push(item.totalLakEquivalent || 0);
        return row;
      });
      const totalsRow = ['', '', '', '', 'TOTAL', this.bankAccountSummaryReport.reduce((sum, b) => sum + b.settlementCount, 0)];
      this.currencyList.forEach(currency => {
        var _this$bankAccountTota, _this$bankAccountTota2;
        totalsRow.push(((_this$bankAccountTota = this.bankAccountTotals) === null || _this$bankAccountTota === void 0 ? void 0 : (_this$bankAccountTota2 = _this$bankAccountTota.currencyTotals) === null || _this$bankAccountTota2 === void 0 ? void 0 : _this$bankAccountTota2[currency]) || 0);
      });
      totalsRow.push(((_this$bankAccountTota3 = this.bankAccountTotals) === null || _this$bankAccountTota3 === void 0 ? void 0 : _this$bankAccountTota3.totalLakEquivalent) || 0);
      const worksheetData = [headers, ...data, totalsRow];
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].aoa_to_sheet(worksheetData);
      this.addWorksheetMetadata(worksheet, 'Bank Account Financial Report');
      return worksheet;
    },
    createChartAccountWorksheet() {
      var _this$chartAccountTot3;
      const headers = ['#', 'Account Number', 'Account Name', 'Settlement Count', ...this.currencyList, 'Total (LAK)'];
      const data = this.chartAccountSummaryReport.map((item, index) => {
        const row = [index + 1, item.accountNumber, item.accountName, item.settlementCount];
        this.currencyList.forEach(currency => {
          var _item$amounts3;
          row.push(((_item$amounts3 = item.amounts) === null || _item$amounts3 === void 0 ? void 0 : _item$amounts3[currency]) || 0);
        });
        row.push(item.totalLakEquivalent || 0);
        return row;
      });
      const totalsRow = ['', '', 'TOTAL', this.chartAccountSummaryReport.reduce((sum, c) => sum + c.settlementCount, 0)];
      this.currencyList.forEach(currency => {
        var _this$chartAccountTot, _this$chartAccountTot2;
        totalsRow.push(((_this$chartAccountTot = this.chartAccountTotals) === null || _this$chartAccountTot === void 0 ? void 0 : (_this$chartAccountTot2 = _this$chartAccountTot.currencyTotals) === null || _this$chartAccountTot2 === void 0 ? void 0 : _this$chartAccountTot2[currency]) || 0);
      });
      totalsRow.push(((_this$chartAccountTot3 = this.chartAccountTotals) === null || _this$chartAccountTot3 === void 0 ? void 0 : _this$chartAccountTot3.totalLakEquivalent) || 0);
      const worksheetData = [headers, ...data, totalsRow];
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].aoa_to_sheet(worksheetData);
      this.addWorksheetMetadata(worksheet, 'Chart Account Financial Report');
      return worksheet;
    },
    addWorksheetMetadata(worksheet, title) {
      var _this$dateRange, _this$dateRange2;
      // Add title and date range as metadata
      const metadata = [[title], [`Report Period: ${((_this$dateRange = this.dateRange) === null || _this$dateRange === void 0 ? void 0 : _this$dateRange.start) || 'N/A'} to ${((_this$dateRange2 = this.dateRange) === null || _this$dateRange2 === void 0 ? void 0 : _this$dateRange2.end) || 'N/A'}`], [`Generated: ${new Date().toLocaleString()}`], [''] // Empty row before data
      ];

      // Insert metadata at the top
      xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].sheet_add_aoa(worksheet, metadata, {
        origin: 'A1'
      });

      // Adjust the existing data to start after metadata
      const range = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].decode_range(worksheet['!ref']);
      range.e.r += metadata.length;
      worksheet['!ref'] = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].encode_range(range);
    },
    formatDateForFilename() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${year}${month}${day}_${hours}${minutes}`;
    }
  }
});

/***/ })

};;
//# sourceMappingURL=excel.js.map