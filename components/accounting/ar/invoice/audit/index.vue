<template>
  <div v-if="visible" class="invoice-audit-dialog-overlay" @click="handleOverlayClick">
    <div class="invoice-audit-dialog" @click.stop>
      <!-- Dialog Header -->
      <div class="invoice-audit-dialog-header">
        <div class="header-info">
          <h3>
            <i class="fas fa-history"></i>
            ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້
          </h3>
          <p v-if="invoiceInfo" class="invoice-subtitle">
            ໃບແຈ້ງໜີ້: {{ invoiceInfo.invoiceNumber }} - 
            {{ formatCurrency(invoiceInfo.totalAmount) }} - 
            {{ formatDate(invoiceInfo.invoiceDate) }}
          </p>
        </div>
        <button type="button" class="close-btn" @click="handleClose">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- Dialog Body -->
      <div class="invoice-audit-dialog-body">
        <invoice-audit-viewer
          ref="invoiceAuditViewer"
          :invoice-id="invoiceId"
          :auto-load="visible"
          @logs-loaded="onLogsLoaded"
        />
      </div>

      <!-- Dialog Footer -->
      <div class="invoice-audit-dialog-footer">
        <button
          type="button"
          class="btn btn-secondary"
          @click.stop="handleClose"
        >
          <i class="fas fa-times"></i>
          ປິດ
        </button>

        <!-- Export Options -->
        <div class="export-options">
          <button
            type="button"
            class="btn btn-primary main-export-btn"
            @click="exportAuditLog"
            :disabled="isExporting"
          >
            <i v-if="isExporting" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-download"></i>
            {{ isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF' }}
          </button>

          <div class="export-dropdown">
            <button
              type="button"
              class="btn btn-outline-primary dropdown-toggle"
              @click="showExportOptions = !showExportOptions"
              :disabled="isExporting"
            >
              <i class="fas fa-caret-down"></i>
            </button>

            <div v-if="showExportOptions" class="dropdown-menu">
              <button @click="exportAsJSON" class="dropdown-item">
                <i class="fas fa-code"></i>
                ສົ່ງອອກ JSON
              </button>
              <button @click="exportAsCSV" class="dropdown-item">
                <i class="fas fa-table"></i>
                ສົ່ງອອກ CSV
              </button>
              <button @click="exportWithPrintJS" class="dropdown-item">
                <i class="fas fa-print"></i>
                ພິມ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InvoiceAuditViewer from '~/components/accounting/ar/invoice/audit/view'

export default {
  name: 'InvoiceAuditDialog',

  components: {
    InvoiceAuditViewer,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    invoiceId: {
      type: [Number, String],
      default: null,
    },
    invoiceInfo: {
      type: Object,
      default: null,
    },
  },

  emits: ['close'],

  data() {
    return {
      auditLogs: [],
      isExporting: false,
      showExportOptions: false,
    }
  },

  mounted() {
    document.addEventListener('click', this.handleOutsideClick)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick)
  },

  methods: {
    handleClose() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.handleClose()
    },

    onLogsLoaded(logs) {
      this.auditLogs = logs
    },

    // Hide dropdown when clicking outside
    hideExportOptions() {
      this.showExportOptions = false
    },

    handleOutsideClick(event) {
      const exportDropdown = this.$el?.querySelector('.export-dropdown')
      if (exportDropdown && !exportDropdown.contains(event.target)) {
        this.showExportOptions = false
      }
    },

    async exportAuditLog() {
      if (this.isExporting) return

      try {
        this.isExporting = true
        this.$toast?.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້...')

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF()
        } catch (jsPDFError) {
          console.warn(
            'jsPDF not available, using HTML print method:',
            jsPDFError
          )
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS()
        }

        this.$toast?.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້ສຳເລັດ!')
      } catch (error) {
        console.error('Error exporting invoice audit log:', error)
        this.$toast?.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້ໄດ້')
      } finally {
        this.isExporting = false
      }
    },

    async exportWithJsPDF() {
      // Import jsPDF dynamically (requires: npm install jspdf)
      const { jsPDF } = await import('jspdf')

      // Create new PDF document
      const doc = new jsPDF()

      // Add title
      doc.setFontSize(16)
      doc.setFont('helvetica', 'bold')
      doc.text('ປະຫວັດການດຳເນີນງານໃບແຈ້ງໜີ້', 20, 20)

      // Add invoice info
      if (this.invoiceInfo) {
        doc.setFontSize(12)
        doc.setFont('helvetica', 'normal')
        doc.text(`ເລກທີໃບແຈ້ງໜີ້: ${this.invoiceInfo.invoiceNumber}`, 20, 35)
        doc.text(
          `ຈຳນວນເງິນ: ${this.formatCurrency(this.invoiceInfo.totalAmount)}`,
          20,
          45
        )
        doc.text(
          `ວັນທີໃບແຈ້ງໜີ້: ${this.formatDate(this.invoiceInfo.invoiceDate)}`,
          20,
          55
        )
        if (this.invoiceInfo.status) {
          doc.text(
            `ສະຖານະ: ${this.getStatusText(this.invoiceInfo.status)}`,
            20,
            65
          )
        }
      }

      // Add generation timestamp
      doc.setFontSize(10)
      doc.text(`ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}`, 20, 80)

      let yPosition = 95

      // Add audit logs
      this.auditLogs.forEach((log, index) => {
        if (yPosition > 250) {
          doc.addPage()
          yPosition = 20
        }

        // Log header
        doc.setFontSize(12)
        doc.setFont('helvetica', 'bold')
        doc.text(
          `${index + 1}. ${this.getActionText(log.action)}`,
          20,
          yPosition
        )

        // User and timestamp
        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        yPosition += 10
        doc.text(`ຜູ້ດຳເນີນການ: ${this.getUserName(log)}`, 25, yPosition)
        yPosition += 8
        doc.text(`ເວລາ: ${this.formatDateTime(log.auditDate)}`, 25, yPosition)

        // Reason if exists
        if (log.reason) {
          yPosition += 8
          doc.text(`ເຫດຜົນ: ${log.reason}`, 25, yPosition)
        }

        // Invoice data summary
        if (log.recordData) {
          yPosition += 8
          doc.text(
            `ຈຳນວນເງິນລວມ: ${this.formatCurrency(log.recordData.totalAmount)}`,
            25,
            yPosition
          )
          yPosition += 8
          doc.text(
            `ວັນທີໃບແຈ້ງໜີ້: ${this.formatDate(log.recordData.invoiceDate)}`,
            25,
            yPosition
          )
          yPosition += 8
          doc.text(
            `ສະຖານະ: ${this.getStatusText(log.recordData.status)}`,
            25,
            yPosition
          )
          if (log.recordData.description) {
            yPosition += 8
            doc.text(`ລາຍລະອຽດ: ${log.recordData.description}`, 25, yPosition)
          }
        }

        yPosition += 15
      })

      // Create filename
      const filename = `invoice-audit-log-${
        this.invoiceInfo?.invoiceNumber || this.invoiceId
      }-${new Date().toISOString().split('T')[0]}.pdf`

      // Download PDF
      doc.save(filename)
    },

    exportWithPrintJS() {
      // Create HTML content for export
      const htmlContent = this.generateHTMLContent()

      // Create a new window for printing
      const printWindow = window.open('', '_blank')
      printWindow.document.write(htmlContent)
      printWindow.document.close()

      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 500)
    },

    generateHTMLContent() {
      const logs = this.auditLogs
        .map(
          (log, index) => `
        <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
          <h4 style="margin: 0 0 10px 0; color: #333;">${
            index + 1
          }. ${this.getActionText(log.action)}</h4>
          <p style="margin: 5px 0;"><strong>ຜູ້ດຳເນີນການ:</strong> ${this.getUserName(
            log
          )}</p>
          <p style="margin: 5px 0;"><strong>ເວລາ:</strong> ${this.formatDateTime(
            log.auditDate
          )}</p>
          ${
            log.reason
              ? `<p style="margin: 5px 0;"><strong>ເຫດຜົນ:</strong> ${log.reason}</p>`
              : ''
          }
          ${
            log.recordData
              ? `
            <div style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 3px;">
              <p style="margin: 3px 0;"><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${
                log.recordData.invoiceNumber || ''
              }</p>
              <p style="margin: 3px 0;"><strong>ຈຳນວນເງິນລວມ:</strong> ${this.formatCurrency(
                log.recordData.totalAmount
              )}</p>
              <p style="margin: 3px 0;"><strong>ວັນທີໃບແຈ້ງໜີ້:</strong> ${this.formatDate(
                log.recordData.invoiceDate
              )}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(
                log.recordData.status
              )}</p>
              ${
                log.recordData.description
                  ? `<p style="margin: 3px 0;"><strong>ລາຍລະອຽດ:</strong> ${log.recordData.description}</p>`
                  : ''
              }
            </div>
          `
              : ''
          }
        </div>
      `
        )
        .join('')

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
          
          ${
            this.invoiceInfo
              ? `
            <div class="invoice-info">
              <p><strong>ເລກທີໃບແຈ້ງໜີ້:</strong> ${
                this.invoiceInfo.invoiceNumber
              }</p>
              <p><strong>ຈຳນວນເງິນ:</strong> ${this.formatCurrency(
                this.invoiceInfo.totalAmount
              )}</p>
              <p><strong>ວັນທີໃບແຈ້ງໜີ້:</strong> ${this.formatDate(
                this.invoiceInfo.invoiceDate
              )}</p>
              ${
                this.invoiceInfo.status
                  ? `<p><strong>ສະຖານະ:</strong> ${this.getStatusText(
                      this.invoiceInfo.status
                    )}</p>`
                  : ''
              }
            </div>
          `
              : ''
          }
          
          <div class="timestamp">ສ້າງເມື່ອ: ${new Date().toLocaleString(
            'lo-LA'
          )}</div>
          
          <div class="audit-logs">
            ${logs}
          </div>
        </body>
        </html>
      `
    },

    exportAsJSON() {
      this.showExportOptions = false

      try {
        const exportData = {
          invoiceInfo: this.invoiceInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map((log) => ({
            id: log.id,
            action: this.getActionText(log.action),
            user: this.getUserName(log),
            email: this.getUserEmail(log),
            timestamp: log.auditDate,
            reason: log.reason,
            invoiceData: {
              invoiceId: log.invoiceId,
              invoiceNumber: log.recordData?.invoiceNumber,
              totalAmount: log.recordData?.totalAmount,
              taxAmount: log.recordData?.taxAmount,
              netAmount: log.recordData?.netAmount,
              invoiceDate: log.recordData?.invoiceDate,
              dueDate: log.recordData?.dueDate,
              status: this.getStatusText(log.recordData?.status),
              description: log.recordData?.description,
              clientId: log.recordData?.clientId,
              currencyId: log.recordData?.currencyId,
              exchangeRate: log.recordData?.exchangeRate,
            },
          })),
        }

        const jsonString = JSON.stringify(exportData, null, 2)
        const blob = new Blob([jsonString], { type: 'application/json' })
        const url = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = `invoice-audit-log-${
          this.invoiceInfo?.invoiceNumber || this.invoiceId
        }-${new Date().toISOString().split('T')[0]}.json`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        this.$toast?.success('ສົ່ງອອກ JSON ສຳເລັດ!')
      } catch (error) {
        console.error('Error exporting JSON:', error)
        this.$toast?.error('ບໍ່ສາມາດສົ່ງອອກ JSON ໄດ້')
      }
    },

    exportAsCSV() {
      this.showExportOptions = false

      try {
        const headers = [
          'ລຳດັບ',
          'ການດຳເນີນງານ',
          'ຜູ້ດຳເນີນການ',
          'ອີເມວ',
          'ເວລາ',
          'ເຫດຜົນ',
          'ເລກທີໃບແຈ້ງໜີ້',
          'ຈຳນວນເງິນລວມ',
          'ຈຳນວນເງິນພາສີ',
          'ຈຳນວນເງິນສຸດທິ',
          'ວັນທີໃບແຈ້ງໜີ້',
          'ວັນທີຄົບກຳນົດ',
          'ສະຖານະ',
          'ລາຍລະອຽດ',
          'ລູກຄ້າ ID',
          'ສະກຸນເງິນ ID',
          'ອັດຕາແລກປ່ຽນ'
        ]

        const csvData = this.auditLogs.map((log, index) => [
          index + 1,
          this.getActionText(log.action),
          this.getUserName(log),
          this.getUserEmail(log),
          this.formatDateTime(log.auditDate),
          log.reason || '',
          log.recordData?.invoiceNumber || '',
          log.recordData?.totalAmount || '',
          log.recordData?.taxAmount || '',
          log.recordData?.netAmount || '',
          this.formatDate(log.recordData?.invoiceDate) || '',
          this.formatDate(log.recordData?.dueDate) || '',
          this.getStatusText(log.recordData?.status) || '',
          log.recordData?.description || '',
          log.recordData?.clientId || '',
          log.recordData?.currencyId || '',
          log.recordData?.exchangeRate || ''
        ])

        const csvContent = [headers, ...csvData]
          .map((row) =>
            row
              .map((field) => `"${String(field).replace(/"/g, '""')}"`)
              .join(',')
          )
          .join('\n')

        // Add BOM for proper UTF-8 encoding
        const bom = '\uFEFF'
        const blob = new Blob([bom + csvContent], {
          type: 'text/csv;charset=utf-8;',
        })
        const url = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = `invoice-audit-log-${
          this.invoiceInfo?.invoiceNumber || this.invoiceId
        }-${new Date().toISOString().split('T')[0]}.csv`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        this.$toast?.success('ສົ່ງອອກ CSV ສຳເລັດ!')
      } catch (error) {
        console.error('Error exporting CSV:', error)
        this.$toast?.error('ບໍ່ສາມາດສົ່ງອອກ CSV ໄດ້')
      }
    },

    getUserEmail(log) {
      return log.recordData?.maker?.cus_email || 
             log.recordData?.checker?.cus_email || 
             log.user?.email || ''
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
        CANCEL: 'ຍົກເລີກໃບແຈ້ງໜີ້',
      }
      return actionMap[action] || action
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
      }
      return statusMap[status] || status
    },

    getUserName(log) {
      return log.recordData?.maker?.cus_name || 
             log.recordData?.checker?.cus_name || 
             log.user?.name || 
             'ບໍ່ຮູ້ຈັກ'
    },

    formatDateTime(date) {
      if (!date) return '-'
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    },

    formatCurrency(amount) {
      if (!amount) return '-'
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
    },
  },
}
</script>

<style scoped>
/* Same styling as settlement audit dialog but with invoice-specific colors */
.invoice-audit-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1060;
  padding: 20px;
}

.invoice-audit-dialog {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1400px;
  max-height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.invoice-audit-dialog-header {
background: linear-gradient(135deg, #01532b 0%, #337555 100%);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9ecef;
}

.header-info h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.invoice-subtitle {
  margin: 5px 0 0 0;
  font-size: 14px;
  opacity: 0.9;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.invoice-audit-dialog-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: #f8f9fa;
  min-height: 0;
  padding: 0;
}

.invoice-audit-dialog-body::-webkit-scrollbar {
  width: 8px;
}

.invoice-audit-dialog-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.invoice-audit-dialog-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.invoice-audit-dialog-body::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

.invoice-audit-dialog-footer {
  padding: 20px;
  background: white;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.export-options {
  display: flex;
  align-items: center;
  gap: 0;
}

.main-export-btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.export-dropdown {
  position: relative;
}

.dropdown-toggle {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
  padding: 10px 8px;
}

.dropdown-menu {
  position: absolute;
  bottom: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 160px;
  margin-bottom: 5px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background: #f8f9fa;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a67d8;
  transform: translateY(-1px);
}

.btn-outline-primary {
  background: white;
  color: #667eea;
  border: 1px solid #667eea;
}

.btn-outline-primary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .invoice-audit-dialog {
    max-width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .invoice-audit-dialog-header {
    padding: 15px;
  }

  .header-info h3 {
    font-size: 18px;
  }

  .invoice-audit-dialog-footer {
    padding: 15px;
    flex-direction: column;
  }

  .export-options {
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .main-export-btn {
    border-radius: 6px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .dropdown-toggle {
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-left: 1px solid #667eea;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    border: none;
    margin-bottom: 0;
    width: 100%;
  }
}
</style>