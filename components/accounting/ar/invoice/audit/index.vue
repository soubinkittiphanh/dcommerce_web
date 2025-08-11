<template>
  <div v-if="visible" class="settlement-audit-dialog-overlay" @click="handleOverlayClick">
    <div class="settlement-audit-dialog" @click.stop>
      <!-- Dialog Header -->
      <div class="settlement-audit-dialog-header">
        <div class="header-info">
          <h3>
            <i class="fas fa-history"></i>
            ປະຫວັດການດຳເນີນງານການຊຳລະ
          </h3>
          <p v-if="settlementInfo" class="settlement-subtitle">
            ການຊຳລະ: {{ settlementInfo.settlementId }} - 
            {{ formatCurrency(settlementInfo.paymentAmount) }} - 
            {{ formatDate(settlementInfo.settlementDate) }}
          </p>
        </div>
        <button type="button" class="close-btn" @click="handleClose">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- Dialog Body -->
      <div class="settlement-audit-dialog-body">
        <settlement-audit-viewer
          ref="settlementAuditViewer"
          :settlement-id="settlementId"
          :auto-load="visible"
          @logs-loaded="onLogsLoaded"
        />
      </div>

      <!-- Dialog Footer -->
      <div class="settlement-audit-dialog-footer">
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
import SettlementAuditViewer from '~/components/accounting/ap/settlement/audit/view'

export default {
  name: 'SettlementAuditDialog',

  components: {
    SettlementAuditViewer,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    settlementId: {
      type: [Number, String],
      default: null,
    },
    settlementInfo: {
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
        this.$toast?.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະ...')

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

        this.$toast?.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະສຳເລັດ!')
      } catch (error) {
        console.error('Error exporting settlement audit log:', error)
        this.$toast?.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະໄດ້')
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
      doc.text('ປະຫວັດການດຳເນີນງານການຊຳລະ', 20, 20)

      // Add settlement info
      if (this.settlementInfo) {
        doc.setFontSize(12)
        doc.setFont('helvetica', 'normal')
        doc.text(`ເລກທີການຊຳລະ: ${this.settlementInfo.settlementId}`, 20, 35)
        doc.text(
          `ຈຳນວນເງິນ: ${this.formatCurrency(this.settlementInfo.paymentAmount)}`,
          20,
          45
        )
        doc.text(
          `ວັນທີຊຳລະ: ${this.formatDate(this.settlementInfo.settlementDate)}`,
          20,
          55
        )
        if (this.settlementInfo.status) {
          doc.text(
            `ສະຖານະ: ${this.getStatusText(this.settlementInfo.status)}`,
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

        // Settlement data summary
        if (log.recordData) {
          yPosition += 8
          doc.text(
            `ຈຳນວນເງິນຊຳລະ: ${this.formatCurrency(log.recordData.paymentAmount)}`,
            25,
            yPosition
          )
          yPosition += 8
          doc.text(
            `ວັນທີຊຳລະ: ${this.formatDate(log.recordData.settlementDate)}`,
            25,
            yPosition
          )
          yPosition += 8
          doc.text(
            `ສະຖານະ: ${this.getStatusText(log.recordData.status)}`,
            25,
            yPosition
          )
          if (log.recordData.reference) {
            yPosition += 8
            doc.text(`ອ້າງອີງ: ${log.recordData.reference}`, 25, yPosition)
          }
        }

        yPosition += 15
      })

      // Create filename
      const filename = `settlement-audit-log-${
        this.settlementInfo?.settlementId || this.settlementId
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
              <p style="margin: 3px 0;"><strong>ຈຳນວນເງິນຊຳລະ:</strong> ${this.formatCurrency(
                log.recordData.paymentAmount
              )}</p>
              <p style="margin: 3px 0;"><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(
                log.recordData.settlementDate
              )}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(
                log.recordData.status
              )}</p>
              ${
                log.recordData.reference
                  ? `<p style="margin: 3px 0;"><strong>ອ້າງອີງ:</strong> ${log.recordData.reference}</p>`
                  : ''
              }
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
          
          ${
            this.settlementInfo
              ? `
            <div class="settlement-info">
              <p><strong>ເລກທີການຊຳລະ:</strong> ${
                this.settlementInfo.settlementId
              }</p>
              <p><strong>ຈຳນວນເງິນ:</strong> ${this.formatCurrency(
                this.settlementInfo.paymentAmount
              )}</p>
              <p><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(
                this.settlementInfo.settlementDate
              )}</p>
              ${
                this.settlementInfo.status
                  ? `<p><strong>ສະຖານະ:</strong> ${this.getStatusText(
                      this.settlementInfo.status
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
          settlementInfo: this.settlementInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map((log) => ({
            id: log.id,
            action: this.getActionText(log.action),
            user: this.getUserName(log),
            email: this.getUserEmail(log),
            timestamp: log.auditDate,
            reason: log.reason,
            settlementData: {
              settlementId: log.settlementId,
              paymentAmount: log.recordData?.paymentAmount,
              baseAmount: log.recordData?.baseAmount,
              settlementDate: log.recordData?.settlementDate,
              status: this.getStatusText(log.recordData?.status),
              reference: log.recordData?.reference,
              description: log.recordData?.description,
              note: log.recordData?.note,
              paymentMethod: log.recordData?.paymentMethod?.name,
              bankAccount: log.recordData?.bankAccount?.accountName,
              invoiceSettlements: log.recordData?.invoiceSettlements?.length || 0
            },
          })),
        }

        const jsonString = JSON.stringify(exportData, null, 2)
        const blob = new Blob([jsonString], { type: 'application/json' })
        const url = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = `settlement-audit-log-${
          this.settlementInfo?.settlementId || this.settlementId
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
          'ເລກທີການຊຳລະ',
          'ຈຳນວນເງິນຊຳລະ',
          'ຈຳນວນເງິນພື້ນຖານ',
          'ວັນທີຊຳລະ',
          'ສະຖານະ',
          'ອ້າງອີງ',
          'ລາຍລະອຽດ',
          'ໝາຍເຫດ',
          'ວິທີການຊຳລະ',
          'ບັນຊີທະນາຄານ',
          'ຈຳນວນໃບແຈ້ງໜີ້'
        ]

        const csvData = this.auditLogs.map((log, index) => [
          index + 1,
          this.getActionText(log.action),
          this.getUserName(log),
          this.getUserEmail(log),
          this.formatDateTime(log.auditDate),
          log.reason || '',
          log.settlementId || '',
          log.recordData?.paymentAmount || '',
          log.recordData?.baseAmount || '',
          this.formatDate(log.recordData?.settlementDate) || '',
          this.getStatusText(log.recordData?.status) || '',
          log.recordData?.reference || '',
          log.recordData?.description || '',
          log.recordData?.note || '',
          log.recordData?.paymentMethod?.name || '',
          log.recordData?.bankAccount?.accountName || '',
          log.recordData?.invoiceSettlements?.length || 0
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
        link.download = `settlement-audit-log-${
          this.settlementInfo?.settlementId || this.settlementId
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
        CREATE: 'ສ້າງການຊຳລະ',
        UPDATE: 'ອັບເດດການຊຳລະ',
        DELETE: 'ລຶບການຊຳລະ',
        APPROVE: 'ອະນຸມັດການຊຳລະ',
        REJECT: 'ປະຕິເສດການຊຳລະ',
        SUBMIT: 'ສົ່ງການຊຳລະ',
        CANCEL: 'ຍົກເລີກການຊຳລະ',
      }
      return actionMap[action] || action
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
.settlement-audit-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1060; /* Higher than main dialog */
  padding: 20px;
}

.settlement-audit-dialog {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1400px;
  max-height: 95vh;
  overflow: hidden; /* Keep this to prevent dialog from growing beyond viewport */
  display: flex;
  flex-direction: column;
}

.settlement-audit-dialog-header {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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

.settlement-subtitle {
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

.settlement-audit-dialog-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: #f8f9fa;
  min-height: 0;
  padding: 0; /* Let the inner component handle padding */
}

/* For better scrollbar styling (WebKit browsers) */
.settlement-audit-dialog-body::-webkit-scrollbar {
  width: 8px;
}

.settlement-audit-dialog-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.settlement-audit-dialog-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.settlement-audit-dialog-body::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

.settlement-audit-dialog-footer {
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

.dropdown-item:first-child {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.dropdown-item:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
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
  background: #28a745;
  color: white;
}

.btn-primary:hover {
  background: #218838;
  transform: translateY(-1px);
}

.btn-outline-primary {
  background: white;
  color: #28a745;
  border: 1px solid #28a745;
}

.btn-outline-primary:hover {
  background: #28a745;
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
  .settlement-audit-dialog {
    max-width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .settlement-audit-dialog-header {
    padding: 15px;
  }

  .header-info h3 {
    font-size: 18px;
  }

  .settlement-audit-dialog-footer {
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
    border-left: 1px solid #28a745;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    border: none;
    margin-bottom: 0;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .settlement-audit-dialog-overlay {
    padding: 0;
  }

  .settlement-audit-dialog-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .header-info h3 {
    font-size: 16px;
  }

  .settlement-subtitle {
    font-size: 12px;
  }
}
</style>