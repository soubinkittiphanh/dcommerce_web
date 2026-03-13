/**
 * Multi-Currency Vue.js Mixin
 * Enhances the sales report with proper multi-currency display and calculations
 */

import { 
  currencyUtils, 
  multiCurrencyAggregator, 
  paymentCurrencyUtils,
  reportFormatters 
} from '~/common/multi-currency-utils.js'

export const multiCurrencyMixin = {
  data() {
    return {
      // Multi-currency dialog states
      currencyReportDialog: false,
      currencyDetailsDialog: false,
      selectedCurrencyDetails: null,
      
      // Local currency setting (should match your system)
      localCurrencyCode: 'THB', // Thai Baht as your local currency
    }
  },

  computed: {
    /**
     * Enhanced currency statistics with proper conversions
     */
    enhancedCurrencyStatistics() {
      if (!this.filteredOrderHeaderList.length || !this.currencyList.length) {
        return []
      }

      const currencyReport = multiCurrencyAggregator.generateCurrencyReport(
        this.filteredOrderHeaderList, 
        this.currencyList, 
        this.localCurrencyCode
      )

      return currencyReport.currencyBreakdown
    },

    /**
     * Grand total in local currency with conversion details
     */
    grandTotalWithConversion() {
      const currencyReport = multiCurrencyAggregator.generateCurrencyReport(
        this.filteredOrderHeaderList, 
        this.currencyList, 
        this.localCurrencyCode
      )

      return {
        total: currencyReport.grandTotalLocal,
        breakdown: currencyReport.currencyBreakdown,
        conversions: currencyReport.conversionSummary
      }
    },

    /**
     * Payment statistics enhanced with currency information
     */
    enhancedPaymentStatistics() {
      const paymentCurrencyData = paymentCurrencyUtils.aggregatePaymentsByCurrency(
        this.filteredOrderHeaderList,
        this.currencyList
      )

      // Group by payment method and sum local equivalents
      const paymentStats = {}

      paymentCurrencyData.forEach(item => {
        if (!paymentStats[item.paymentCode]) {
          paymentStats[item.paymentCode] = {
            code: item.paymentCode,
            name: item.paymentMethod,
            amount: 0, // Total in local currency
            count: 0,
            currencies: [],
            color: this.getPaymentMethodColor(item.paymentCode),
            icon: this.getPaymentMethodIcon(item.paymentCode)
          }
        }

        paymentStats[item.paymentCode].amount += item.localEquivalent
        paymentStats[item.paymentCode].count += item.orderCount
        paymentStats[item.paymentCode].currencies.push({
          code: item.currencyCode,
          originalAmount: item.totalAmount,
          localEquivalent: item.localEquivalent,
          isLocal: item.currencyData.isLocalCCY
        })
      })

      // Calculate percentages
      const totalAmount = Object.values(paymentStats).reduce((sum, stat) => sum + stat.amount, 0)
      Object.values(paymentStats).forEach(stat => {
        stat.percentage = totalAmount > 0 ? (stat.amount / totalAmount) * 100 : 0
      })

      return Object.values(paymentStats).sort((a, b) => b.amount - a.amount)
    },

    /**
     * Currency conversion summary for display
     */
    currencyConversionSummary() {
      const currencyReport = multiCurrencyAggregator.generateCurrencyReport(
        this.filteredOrderHeaderList, 
        this.currencyList, 
        this.localCurrencyCode
      )

      return reportFormatters.generateCurrencySummaryText(currencyReport)
    }
  },

  methods: {
    /**
     * Format currency with proper symbol/code display
     */
    formatCurrencyDisplay(amount, currencyCode, showCode = true) {
      return currencyUtils.formatCurrency(amount, currencyCode, showCode)
    },

    /**
     * Show detailed currency breakdown
     */
    showCurrencyDetails(currencyData) {
      this.selectedCurrencyDetails = currencyData
      this.currencyDetailsDialog = true
    },

    /**
     * Show multi-currency report dialog
     */
    showCurrencyReport() {
      this.currencyReportDialog = true
    },

    /**
     * Get currency symbol for display
     */
    getCurrencySymbol(currencyCode) {
      return currencyUtils.getCurrencyDisplay(currencyCode)
    },

    /**
     * Calculate line item totals with currency conversion
     */
    calculateLineItemDisplay(line) {
      return currencyUtils.calculateLineTotals(line, this.currencyList)
    },

    /**
     * Enhanced number formatting with currency awareness
     */
    formatNumberWithCurrency(amount, currencyCode = null) {
      if (currencyCode) {
        return this.formatCurrencyDisplay(amount, currencyCode)
      }
      return this.formatNumber(amount)
    },

    /**
     * Get exchange rate display
     */
    getExchangeRateDisplay(currencyId) {
      const currency = this.currencyList.find(c => c.id === currencyId)
      if (!currency) return 'N/A'
      
      if (currency.isLocalCCY) {
        return `1.00 (Local)`
      }
      
      return `${currency.rate} (1 ${currency.code} = ${(1/currency.rate).toFixed(4)} ${this.localCurrencyCode})`
    },

    /**
     * Generate multi-currency sales report data for printing
     */
    generateMultiCurrencySalesData() {
      const currencyReport = multiCurrencyAggregator.generateCurrencyReport(
        this.filteredOrderHeaderList, 
        this.currencyList, 
        this.localCurrencyCode
      )

      return {
        summary: currencyReport,
        formattedText: this.currencyConversionSummary,
        paymentStats: this.enhancedPaymentStatistics,
        grandTotal: this.grandTotalWithConversion
      }
    },

    /**
     * Enhanced print sales report with multi-currency support
     */
    printEnhancedSalesReport() {
      try {
        console.log('🖨️ Printing enhanced multi-currency sales report...')

        const multiCurrencyData = this.generateMultiCurrencySalesData()
        
        // Prepare terminal info
        const terminalInfo = this.terminalId === 999
          ? { name: 'ທັງໝົດ', id: 999 }
          : this.customTerminalList.find(terminal => terminal.id === this.terminalId)

        // Enhanced report data
        const enhancedReportData = {
          orderHeaderList: this.filteredOrderHeaderList,
          paymentStatistics: this.enhancedPaymentStatistics,
          currencyStatistics: this.enhancedCurrencyStatistics,
          multiCurrencyData: multiCurrencyData,
          fromDate: this.fromDate,
          toDate: this.toDate,
          terminalInfo: terminalInfo,
          companyData: this.companyData?.apiData || this.companyData || {},
          companyLogo: this.companyLogo,
          formatNumber: this.formatNumberWithCurrency,
          user: this.user,
          singlePaymentCount: this.singlePaymentCount,
          multiPaymentCount: this.multiPaymentCount,
          localCurrencyCode: this.localCurrencyCode
        }

        // Call enhanced print function
        this.printMultiCurrencySalesReport(enhancedReportData)

        if (this.$toast) {
          this.$toast.success('ລາຍງານການຂາຍແບບຫຼາຍສະກຸນເງິນກຳລັງພິມ...', {
            position: 'bottom-center',
          })
        }
      } catch (error) {
        console.error('Error printing enhanced sales report:', error)
        if (this.$toast) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ', {
            position: 'bottom-center',
          })
        }
      }
    },

    /**
     * Print function for multi-currency report
     */
    printMultiCurrencySalesReport(reportData) {
      // Create print content with proper multi-currency formatting
      const printContent = this.generateMultiCurrencyPrintContent(reportData)
      
      // Open print window
      const printWindow = window.open('', '_blank', 'width=800,height=600')
      printWindow.document.write(printContent)
      printWindow.document.close()
      
      // Print after content loads
      printWindow.onload = () => {
        printWindow.print()
        setTimeout(() => printWindow.close(), 1000)
      }
    },

    /**
     * Generate HTML content for multi-currency print
     */
    generateMultiCurrencyPrintContent(reportData) {
      const { 
        multiCurrencyData, 
        companyData, 
        terminalInfo, 
        fromDate, 
        toDate,
        localCurrencyCode
      } = reportData

      return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Multi-Currency Sales Report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; font-size: 12px; }
    .header { text-align: center; margin-bottom: 20px; }
    .company-name { font-size: 18px; font-weight: bold; margin-bottom: 5px; }
    .report-title { font-size: 16px; font-weight: bold; margin: 10px 0; }
    .date-range { margin: 10px 0; }
    .currency-section { margin: 15px 0; border: 1px solid #ddd; padding: 10px; }
    .currency-header { font-weight: bold; background: #f5f5f5; padding: 5px; margin: -10px -10px 10px; }
    .currency-row { display: flex; justify-content: space-between; margin: 5px 0; }
    .total-row { font-weight: bold; border-top: 2px solid #333; padding-top: 5px; margin-top: 10px; }
    .conversion-note { font-style: italic; color: #666; font-size: 11px; }
    .payment-section { margin: 15px 0; }
    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #f2f2f2; }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <div class="company-name">${companyData.name || 'Company Name'}</div>
    <div class="report-title">ລາຍງານການຂາຍແບບຫຼາຍສະກຸນເງິນ</div>
    <div class="report-title">Multi-Currency Sales Report</div>
    <div class="date-range">
      ວັນທີ: ${fromDate} ຫາ ${toDate}<br>
      ຮ້ານ: ${terminalInfo.name}<br>
      ພິມວັນທີ: ${new Date().toLocaleDateString('lo-LA')}
    </div>
  </div>

  <div class="currency-section">
    <div class="currency-header">ສະຫຼຸບຕາມສະກຸນເງິນ (Currency Summary)</div>
    ${multiCurrencyData.summary.currencyBreakdown.map(curr => `
      <div class="currency-row">
        <span>${curr.code}:</span>
        <span>${this.formatCurrencyDisplay(curr.totalAmount, curr.code)}</span>
        ${!curr.isLocal ? `
          <span class="conversion-note">
            → ${this.formatCurrencyDisplay(curr.localEquivalent, localCurrencyCode)}
          </span>
        ` : ''}
        <span>(${curr.percentage.toFixed(1)}%)</span>
      </div>
    `).join('')}
    
    <div class="total-row currency-row">
      <span>ລວມທັງໝົດ (Grand Total):</span>
      <span><strong>${this.formatCurrencyDisplay(multiCurrencyData.grandTotal.total, localCurrencyCode)}</strong></span>
    </div>
  </div>

  ${multiCurrencyData.summary.conversionSummary.length > 0 ? `
  <div class="currency-section">
    <div class="currency-header">ອັດຕາແລກປ່ຽນທີ່ໃຊ້ (Exchange Rates Used)</div>
    ${multiCurrencyData.summary.conversionSummary.map(conv => `
      <div class="currency-row">
        <span>1 ${conv.from} =</span>
        <span>${(1/conv.rate).toFixed(4)} ${conv.to}</span>
      </div>
    `).join('')}
  </div>
  ` : ''}

  <div class="payment-section">
    <div class="currency-header">ສະຫຼຸບຕາມວິທີການຊຳລະ (Payment Method Summary)</div>
    <table>
      <thead>
        <tr>
          <th>ວິທີການຊຳລະ</th>
          <th class="text-right">ຈຳນວນ</th>
          <th class="text-right">ຍອດລວມ (${localCurrencyCode})</th>
          <th class="text-right">ເປີເຊັນ</th>
        </tr>
      </thead>
      <tbody>
        ${reportData.paymentStatistics.map(payment => `
          <tr>
            <td>${payment.name}</td>
            <td class="text-right">${payment.count}</td>
            <td class="text-right">${this.formatCurrencyDisplay(payment.amount, localCurrencyCode, false)}</td>
            <td class="text-right">${payment.percentage.toFixed(1)}%</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: 30px; text-align: center; font-size: 11px; color: #666;">
    ລາຍງານສ້າງໂດຍລະບົບ POS ມີຕີ-Currency Support<br>
    Report generated by Multi-Currency POS System
  </div>
</body>
</html>
      `
    }
  }
}