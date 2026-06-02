<template>
  <div class="gl-posting-container pa-6">
    <!-- Audit Success State Overlay or View -->
    <v-fade-transition mode="out-in">
      <div v-if="successState" key="success" class="success-audit-card max-width-container mx-auto">
        <v-card class="elevation-12 rounded-xl border-success overflow-hidden print-card">
          <!-- Card Header Decoration -->
          <div class="gradient-header-success py-6 px-8 text-white text-center">
            <v-icon size="64" color="white" class="mb-3 animate-bounce-slow">mdi-check-decagram</v-icon>
            <h1 class="text-h4 font-weight-bold tracking-tight">GL Batch Posting Success</h1>
            <p class="subtitle-1 mb-0 opacity-80">Sub-ledger transactions successfully recorded and locked</p>
          </div>

          <v-card-text class="pa-8">
            <div class="d-flex flex-column align-center mb-6">
              <span class="text-caption text-uppercase font-weight-bold text--secondary">Generated Ledger Batch Number</span>
              <span class="text-h4 font-weight-black success-batch-num py-2 px-6 rounded-lg my-2">{{ successData.batchNumber }}</span>
            </div>

            <v-divider class="mb-6"></v-divider>

            <v-row class="mb-6">
              <v-col cols="12" md="6" class="py-2 border-right-md">
                <div class="d-flex justify-between py-2 px-4 row-stripe">
                  <span class="font-weight-medium text--secondary">Sub-ledger Module:</span>
                  <v-chip small color="primary" class="font-weight-bold" text-color="white">{{ successData.module }}</v-chip>
                </div>
                <div class="d-flex justify-between py-2 px-4">
                  <span class="font-weight-medium text--secondary">Post Date Range:</span>
                  <span class="font-weight-bold">{{ successData.startDate }} to {{ successData.endDate }}</span>
                </div>
                <div class="d-flex justify-between py-2 px-4 row-stripe">
                  <span class="font-weight-medium text--secondary">Total Documents Posted:</span>
                  <span class="font-weight-black text-h6 primary--text">{{ successData.totalEntriesPosted }}</span>
                </div>
              </v-col>

              <v-col cols="12" md="6" class="py-2">
                <div class="d-flex justify-between py-2 px-4 row-stripe">
                  <span class="font-weight-medium text--secondary">Total Amount Posted:</span>
                  <span class="font-weight-black text-h6 text-success-amount">{{ formatCurrency(successData.totalAmountPosted) }}</span>
                </div>
                <div class="d-flex justify-between py-2 px-4">
                  <span class="font-weight-medium text--secondary">Executed By (User ID):</span>
                  <span class="font-weight-bold">User #{{ successData.runByUserId }}</span>
                </div>
                <div class="d-flex justify-between py-2 px-4 row-stripe">
                  <span class="font-weight-medium text--secondary">Execution Timestamp:</span>
                  <span class="font-weight-medium text-caption">{{ formatTimestamp(successData.runDate) }}</span>
                </div>
              </v-col>
            </v-row>

            <v-alert type="info" border="left" colored-border elevation="2" class="mb-6">
              <strong>Audit Notice:</strong> This batch run has generated double-entry journal records. All associated source invoices and vouchers have been permanently locked against modification, deletion, or reversal.
            </v-alert>

            <div class="d-flex flex-wrap gap-4 justify-center no-print">
              <v-btn color="secondary" outlined x-large rounded class="px-8 font-weight-bold" @click="resetToSearch">
                <v-icon left>mdi-arrow-left</v-icon>
                Return to Control Center
              </v-btn>
              
              <v-btn color="primary" x-large rounded class="px-8 font-weight-bold shadow-hover" @click="printAuditTrail">
                <v-icon left>mdi-printer</v-icon>
                Print Audit Trail
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <!-- Main Interface View -->
      <div v-else key="main" class="max-width-container mx-auto">
        <!-- Elegant Breadcrumb & Title Section -->
        <v-row class="align-center mb-6">
          <v-col cols="12" sm="8">
            <div class="d-flex align-center mb-1">
              <span class="text-caption text-uppercase tracking-wider text--secondary">Finance</span>
              <v-icon small class="mx-1 text--secondary">mdi-chevron-right</v-icon>
              <span class="text-caption text-uppercase tracking-wider text--secondary">General Ledger</span>
              <v-icon small class="mx-1 text--secondary">mdi-chevron-right</v-icon>
              <span class="text-caption text-uppercase tracking-wider primary--text font-weight-bold">Posting Control Center</span>
            </div>
            <h1 class="text-h4 font-weight-black primary--text tracking-tight d-flex align-center">
              <v-icon color="primary" class="mr-2" size="36">mdi-finance</v-icon>
              General Ledger Posting Control Center
            </h1>
          </v-col>
          <v-col cols="12" sm="4" class="text-sm-right">
            <v-chip color="secondary" outlined class="font-weight-bold py-4">
              <v-icon left small>mdi-calendar-clock</v-icon>
              Business Date: {{ businessDate || todayDateString }}
            </v-chip>
          </v-col>
        </v-row>

        <!-- Banner for Feedback / Toast Notifications -->
        <v-expand-transition>
          <v-alert v-if="errorMessage" type="error" dismissible border="left" elevation="3" class="mb-6 rounded-lg font-weight-medium" @input="errorMessage = ''">
            <div class="d-flex align-center justify-between">
              <div>
                <span class="font-weight-bold">Batch Generation Error:</span> {{ errorMessage }}
              </div>
            </div>
          </v-alert>
        </v-expand-transition>

        <!-- Component 1: Control Panel (Parameters Selection) -->
        <v-card class="elevation-4 rounded-xl mb-6 border-light overflow-hidden">
          <div class="gradient-bar"></div>
          <v-card-title class="px-6 pt-5 pb-2 font-weight-bold text-h6 d-flex align-center">
            <v-icon left color="primary">mdi-tune</v-icon>
            Control Parameters Selection
          </v-card-title>
          
          <v-card-text class="px-6 pb-6">
            <v-form ref="form" v-model="formValid">
              <v-row class="align-center">
                <!-- Module Selection -->
                <v-col cols="12" md="4">
                  <div class="input-label mb-2 font-weight-bold text-subtitle-2 text--secondary">Sub-ledger Module Selection</div>
                  <v-btn-toggle v-model="selectedModule" mandatory color="primary" class="module-toggle-group w-full d-flex">
                    <v-btn value="AP" class="flex-grow-1 font-weight-bold py-6 text-body-1" outlined>
                      <v-icon left>mdi-bank-transfer-out</v-icon>
                      Accounts Payable (AP)
                    </v-btn>
                    <v-btn value="AR" class="flex-grow-1 font-weight-bold py-6 text-body-1" outlined>
                      <v-icon left>mdi-bank-transfer-in</v-icon>
                      Accounts Receivable (AR)
                    </v-btn>
                  </v-btn-toggle>
                </v-col>

                <!-- Date Range: Start Date -->
                <v-col cols="12" sm="6" md="3">
                  <div class="input-label mb-2 font-weight-bold text-subtitle-2 text--secondary">Period Start Date</div>
                  <v-menu v-model="menuStart" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="startDate"
                        prepend-inner-icon="mdi-calendar-start"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                        class="custom-field"
                        placeholder="YYYY-MM-DD"
                        :rules="[v => !!v || 'Start date is required']"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="startDate" @input="menuStart = false" color="primary" no-title></v-date-picker>
                  </v-menu>
                </v-col>

                <!-- Date Range: End Date -->
                <v-col cols="12" sm="6" md="3">
                  <div class="input-label mb-2 font-weight-bold text-subtitle-2 text--secondary">Period End Date</div>
                  <v-menu v-model="menuEnd" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="endDate"
                        prepend-inner-icon="mdi-calendar-end"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                        class="custom-field"
                        placeholder="YYYY-MM-DD"
                        :rules="[v => !!v || 'End date is required']"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="endDate" @input="menuEnd = false" color="primary" no-title></v-date-picker>
                  </v-menu>
                </v-col>

                <!-- Action Panel Buttons -->
                <v-col cols="12" md="2" class="text-right">
                  <v-btn
                    color="primary"
                    block
                    x-large
                    rounded
                    class="font-weight-bold shadow-hover py-6"
                    :loading="loadingPreview"
                    :disabled="!formValid"
                    @click="previewUnposted"
                  >
                    <v-icon left>mdi-eye-outline</v-icon>
                    Preview
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>

        <!-- Component 2: Reconciliation Preview Table -->
        <v-card class="elevation-4 rounded-xl overflow-hidden border-light mb-16">
          <v-card-title class="px-6 py-4 font-weight-bold text-h6 d-flex align-center border-bottom">
            <v-icon left color="primary">mdi-format-list-bulleted</v-icon>
            Unposted Transaction Records
            <v-spacer></v-spacer>
            <v-text-field
              v-model="searchText"
              append-icon="mdi-magnify"
              label="Search document #, description or vendor..."
              single-line
              hide-details
              dense
              outlined
              class="search-bar max-width-search"
            ></v-text-field>
          </v-card-title>

          <!-- Skeleton Loader during Loading -->
          <v-card-text v-if="loadingPreview" class="pa-6">
            <v-skeleton-loader type="table-heading, list-item-three-line, table-footer" class="my-2"></v-skeleton-loader>
          </v-card-text>

          <!-- Content Body -->
          <v-card-text v-else class="pa-0">
            <v-data-table
              :headers="tableHeaders"
              :items="unpostedDocuments"
              :search="searchText"
              single-expand
              show-expand
              :expanded.sync="expandedRows"
              item-key="id"
              class="gl-preview-table"
              no-data-text="No pending transactions to post in this selection period."
            >
              <!-- Expand Icon Slot -->
              <template v-slot:[`item.data-table-expand`]="{ isExpanded, expand }">
                <v-btn icon @click="expand(!isExpanded)" class="expand-btn-transition" :class="{ 'expanded': isExpanded }">
                  <v-icon color="primary">mdi-chevron-down</v-icon>
                </v-btn>
              </template>

              <!-- Document Date Format Slot -->
              <template v-slot:[`item.documentDate`]="{ item }">
                <span class="font-weight-medium">{{ item.documentDate }}</span>
              </template>

              <!-- Document Number Badge Slot -->
              <template v-slot:[`item.documentNumber`]="{ item }">
                <v-chip small color="secondary" class="font-weight-bold" text-color="white">
                  {{ item.documentNumber }}
                </v-chip>
              </template>

              <!-- Total Amount Format Slot -->
              <template v-slot:[`item.totalAmount`]="{ item }">
                <span class="font-weight-bold primary--text">{{ formatCurrency(item.totalAmount) }}</span>
              </template>

              <!-- Exchange Rate Format Slot -->
              <template v-slot:[`item.exchangeRate`]="{ item }">
                <span class="font-weight-bold">{{ getFormatDecimal(item.exchangeRate) }}</span>
              </template>

              <!-- Expanded Detail Drawer (Balanced double-entry subtable) -->
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length" class="expanded-row-drawer pa-4 bg-light-gradient">
                  <div class="elevation-2 rounded-lg overflow-hidden border">
                    <div class="px-4 py-2 bg-secondary d-flex align-center justify-between text-white font-weight-bold">
                      <span class="text-subtitle-2 font-weight-bold">
                        <v-icon small left color="white">mdi-shuffle-variant</v-icon>
                        Balanced Double-Entry Distribution Lines: {{ item.documentNumber }}
                      </span>
                      <v-chip x-small color="white" class="primary--text font-weight-bold">Debit = Credit Balanced</v-chip>
                    </div>

                    <table class="w-full nested-ledger-table">
                      <thead>
                        <tr>
                          <th class="text-left py-2 px-4">Line Item Description</th>
                          <th class="text-center py-2 px-4">Debit Account (Code)</th>
                          <th class="text-center py-2 px-4">Credit Account (Code)</th>
                          <th class="text-right py-2 px-4">Distribution Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(line, idx) in item.lines" :key="idx" class="ledger-row border-bottom">
                          <td class="py-2 px-4 font-weight-medium text-body-2">{{ line.description }}</td>
                          <!-- Debit Code column with clear styling -->
                          <td class="py-2 px-4 text-center">
                            <span class="dr-cr-badge dr-badge">
                              <span class="badge-tag">DR</span>
                              {{ line.drAccount }} ({{ line.drAccountCode }})
                            </span>
                          </td>
                          <!-- Credit Code column with clear styling -->
                          <td class="py-2 px-4 text-center">
                            <span class="dr-cr-badge cr-badge">
                              <span class="badge-tag">CR</span>
                              {{ line.crAccount }} ({{ line.crAccountCode }})
                            </span>
                          </td>
                          <td class="py-2 px-4 text-right font-weight-black text-body-2 text-success-amount">
                            {{ formatCurrency(line.amount) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </template>
            </v-data-table>
          </v-card-text>

          <!-- Sticky Footer Summary Bar -->
          <v-divider></v-divider>
          <div class="footer-summary-bar d-flex flex-wrap align-center justify-between py-4 px-6 gap-4">
            <div class="d-flex align-center gap-4">
              <div class="summary-metric">
                <span class="text-caption text-uppercase font-weight-bold text--secondary">Selected Invoices</span>
                <div class="text-h5 font-weight-black primary--text">{{ unpostedDocuments.length }}</div>
              </div>
              <v-divider vertical class="mx-3"></v-divider>
              <div class="summary-metric">
                <span class="text-caption text-uppercase font-weight-bold text--secondary">Aggregate Run Total</span>
                <div class="text-h5 font-weight-black text-success-amount">{{ formatCurrency(aggregateTotalAmount) }}</div>
              </div>
            </div>

            <!-- Execute Posting Action -->
            <v-btn
              color="danger"
              x-large
              rounded
              class="px-10 font-weight-bold text-white shadow-hover pulse-button"
              :disabled="unpostedDocuments.length === 0 || hasPostedSuccessfully"
              @click="dialogConfirm = true"
            >
              <v-icon left>mdi-lock-open-outline</v-icon>
              Execute Batch Posting Run
            </v-btn>
          </div>
        </v-card>

        <!-- Component 3: Execution & Locking Confirmation Dialog -->
        <v-dialog v-model="dialogConfirm" max-width="560" persistent>
          <v-card class="rounded-xl overflow-hidden elevation-24">
            <div class="dialog-header-warning py-5 px-6 d-flex align-center text-white">
              <v-icon left color="white" size="32" class="mr-2">mdi-shield-alert-outline</v-icon>
              <span class="text-h6 font-weight-bold">Confirm General Ledger Batch Posting Run</span>
            </div>

            <v-card-text class="pa-6 text-body-1">
              <p class="font-weight-medium mb-4 text-justify">
                This action will atomically generate balanced double-entry General Ledger records for the selected period and lock all associated sub-ledger invoices from further modifications.
              </p>
              
              <div class="d-flex align-center bg-warning-light p-3 rounded-lg border-warning mb-4">
                <v-icon color="amber darken-3" class="mr-2">mdi-alert</v-icon>
                <span class="text-subtitle-2 font-weight-bold text-warning-text">
                  This execution is permanent and irreversible. Locked invoices cannot be modified, deleted, or reversed in the sub-ledger.
                </span>
              </div>

              <!-- Summary details in Dialog -->
              <v-card outlined class="pa-4 bg-light rounded-lg border">
                <div class="d-flex justify-between mb-2">
                  <span class="text--secondary font-weight-bold">Sub-ledger:</span>
                  <span class="font-weight-black primary--text">{{ selectedModule }}</span>
                </div>
                <div class="d-flex justify-between mb-2">
                  <span class="text--secondary font-weight-bold">Posting Period:</span>
                  <span class="font-weight-black">{{ startDate }} to {{ endDate }}</span>
                </div>
                <div class="d-flex justify-between mb-2">
                  <span class="text--secondary font-weight-bold">Invoices count:</span>
                  <span class="font-weight-black">{{ unpostedDocuments.length }}</span>
                </div>
                <div class="d-flex justify-between">
                  <span class="text--secondary font-weight-bold">Aggregate Posting sum:</span>
                  <span class="font-weight-black text-success-amount">{{ formatCurrency(aggregateTotalAmount) }}</span>
                </div>
              </v-card>
            </v-card-text>

            <v-card-actions class="px-6 pb-6 gap-3">
              <v-spacer></v-spacer>
              <v-btn
                color="grey darken-1"
                text
                large
                rounded
                class="px-6 font-weight-bold"
                :disabled="loadingPosting"
                @click="dialogConfirm = false"
              >
                Cancel
              </v-btn>

              <v-btn
                color="danger"
                large
                rounded
                class="px-8 font-weight-bold text-white shadow-hover"
                :loading="loadingPosting"
                @click="executeBatchPosting"
              >
                <v-icon left>mdi-lock-outline</v-icon>
                Confirm and Post
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-fade-transition>
  </div>
</template>

<script>
import {
  getFirstDayOfMonth,
  getFormatNum,
  swalSuccess,
  swalError2,
  today
} from '~/common'

export default {
  name: 'GeneralLedgerPostingControlCenter',
  middleware: 'auths',
  
  data() {
    return {
      // Form fields and validation
      formValid: true,
      selectedModule: 'AP',
      startDate: getFirstDayOfMonth(),
      endDate: today,
      menuStart: false,
      menuEnd: false,
      
      // Tables & search
      searchText: '',
      loadingPreview: false,
      expandedRows: [],
      unpostedDocuments: [],
      
      // Posting confirmations & execution state
      dialogConfirm: false,
      loadingPosting: false,
      hasPostedSuccessfully: false,
      
      // Success screen & Audit
      successState: false,
      successData: {},
      
      // Notifications/errors
      errorMessage: '',
      businessDate: null,

      // Table headers config
      tableHeaders: [
        { text: 'Document #', value: 'documentNumber', align: 'start', sortable: true },
        { text: 'Document Date', value: 'documentDate', align: 'center', sortable: true },
        { text: 'Partner/Client', value: 'partnerName', align: 'start', sortable: true },
        { text: 'Currency', value: 'currency', align: 'center', sortable: true },
        { text: 'Exchange Rate', value: 'exchangeRate', align: 'end', sortable: false },
        { text: 'Total Amount', value: 'totalAmount', align: 'end', sortable: true },
        { text: 'Description', value: 'description', align: 'start', sortable: false },
        { text: 'Dist. Lines', value: 'data-table-expand', align: 'center', sortable: false }
      ]
    }
  },

  computed: {
    // Current date format fallback
    todayDateString() {
      return today
    },

    // Total aggregate amount of all unposted invoices previewed
    aggregateTotalAmount() {
      return this.unpostedDocuments.reduce((sum, doc) => {
        return sum + (Number(doc.totalAmount) || 0)
      }, 0)
    }
  },

  mounted() {
    this.fetchBusinessDate()
  },

  methods: {
    // Format currency string
    formatCurrency(val) {
      if (val === undefined || val === null || isNaN(val)) return '0.00'
      return getFormatNum(val)
    },

    // Format exchange rates/decimals
    getFormatDecimal(val) {
      if (val === undefined || val === null || isNaN(val)) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
      }).format(val)
    },

    // Convert ISO Timestamps into more friendly readability
    formatTimestamp(dateStr) {
      if (!dateStr) return ''
      try {
        const date = new Date(dateStr)
        return date.toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short'
        })
      } catch (err) {
        return dateStr
      }
    },

    // Pull current system business working date
    async fetchBusinessDate() {
      try {
        const response = await this.$axios.get('/api/businessDate/current')
        if (response.data && response.data.success && response.data.data) {
          this.businessDate = response.data.data.currentDate
        }
      } catch (error) {
        console.warn('Failed to fetch business date:', error)
      }
    },

    // Fetch unposted documents list
    async previewUnposted() {
      this.errorMessage = ''
      this.loadingPreview = true
      this.expandedRows = []
      this.unpostedDocuments = []

      const params = {
        startDate: this.startDate,
        endDate: this.endDate,
        module: this.selectedModule
      }

      try {
        const response = await this.$axios.get('/api/gl/posting/preview', { params })
        if (Array.isArray(response.data)) {
          this.unpostedDocuments = response.data
          if (this.unpostedDocuments.length === 0) {
            this.$toast.info('No unposted transactions found for this period.')
          } else {
            this.$toast.success(`Loaded ${this.unpostedDocuments.length} pending transactions.`)
          }
        } else {
          throw new Error('Received invalid document structure from backend')
        }
      } catch (error) {
        console.error('Preview error:', error)
        let errMsg = error.message || 'Error occurred while querying preview documents'
        if (error.response && error.response.data && error.response.data.error) {
          errMsg = error.response.data.error
        }
        this.errorMessage = errMsg
        swalError2(this.$swal, 'Query Unsuccessful', errMsg)
      } finally {
        this.loadingPreview = false
      }
    },

    // Action post executing to backend
    async executeBatchPosting() {
      this.loadingPosting = true
      this.errorMessage = ''

      const payload = {
        startDate: this.startDate,
        endDate: this.endDate,
        module: this.selectedModule
      }

      try {
        const response = await this.$axios.post('/api/gl/posting/batch', payload)
        
        if (response.data && response.data.data) {
          this.successData = response.data.data
          this.successState = true
          this.hasPostedSuccessfully = true
          this.dialogConfirm = false
          this.$toast.success('General Ledger Batch posted successfully.')
          swalSuccess(this.$swal, 'Execution Complete', 'Balanced ledger batch entries created successfully.')
        } else {
          throw new Error('Batch executed but empty confirmation data was returned')
        }
      } catch (error) {
        console.error('Batch Posting Execution Error:', error)
        let errMsg = error.message || 'Error occurred while executing batch posting'
        if (error.response && error.response.data && error.response.data.error) {
          errMsg = error.response.data.error
        }
        this.errorMessage = errMsg
        this.dialogConfirm = false
        swalError2(this.$swal, 'Posting Execution Failed', errMsg)
      } finally {
        this.loadingPosting = false
      }
    },

    // Reset Success flow back to normal
    resetToSearch() {
      this.successState = false
      this.successData = {}
      this.unpostedDocuments = []
      this.hasPostedSuccessfully = false
      this.previewUnposted() // Refresh list immediately
    },

    // Renders the browser print dialog
    printAuditTrail() {
      window.print()
    }
  }
}
</script>

<style scoped>
/* Main Grid & Typography styling */
.gl-posting-container {
  font-family: 'Inter', 'noto sans lao', sans-serif;
  color: #2D3748;
  background-color: #f7fafc;
  min-height: 100vh;
}

.max-width-container {
  max-width: 1400px;
}

.w-full {
  width: 100%;
}

.gap-4 {
  gap: 16px;
}

.gap-3 {
  gap: 12px;
}

/* Beautiful Gradient accents */
.gradient-bar {
  height: 5px;
  background: linear-gradient(90deg, #01532B 0%, #337555 100%);
}

.gradient-header-success {
  background: linear-gradient(135deg, #27ae60 0%, #11998e 100%);
}

/* Custom premium input cards & selectors */
.input-label {
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: #718096;
}

.module-toggle-group {
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.03);
}

.module-toggle-group .v-btn {
  border: none !important;
  text-transform: none;
  background-color: transparent !important;
  color: #4A5568 !important;
  border-radius: 0;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.module-toggle-group .v-btn--active {
  background-color: #01532B !important;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(1, 83, 43, 0.3) !important;
}

.custom-field >>> .v-input__control >>> .v-input__slot {
  background-color: #ffffff !important;
  border-radius: 12px !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02) !important;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.custom-field >>> .v-input__control >>> .v-input__slot:hover {
  border-color: #a0aec0 !important;
}

/* Data Table custom styling */
.gl-preview-table {
  background-color: #ffffff;
}

.gl-preview-table >>> th {
  background-color: #F8FAFC !important;
  font-weight: 700 !important;
  color: #4A5568 !important;
  font-size: 0.9rem !important;
  border-bottom: 2px solid #E2E8F0 !important;
  padding: 16px !important;
}

.gl-preview-table >>> td {
  padding: 16px !important;
  font-size: 0.95rem !important;
  border-bottom: 1px solid #edf2f7 !important;
}

.gl-preview-table >>> tbody tr {
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.gl-preview-table >>> tbody tr:hover {
  background-color: #F7FAFC !important;
}

/* Nested ledger distribution table styling */
.expanded-row-drawer {
  background-color: #F8FAFC !important;
}

.bg-light-gradient {
  background: linear-gradient(180deg, #F8FAFC 0%, #EDF2F7 100%);
}

.nested-ledger-table {
  border-collapse: collapse;
  background-color: #ffffff;
}

.nested-ledger-table th {
  background-color: #EDF2F7 !important;
  color: #4A5568 !important;
  font-size: 0.8rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  padding: 10px 16px !important;
  border-bottom: 2px solid #CBD5E0 !important;
}

.nested-ledger-table td {
  padding: 12px 16px !important;
  border-bottom: 1px solid #E2E8F0 !important;
}

.ledger-row:hover {
  background-color: #f7fafc !important;
}

/* DR and CR badge indicators */
.dr-cr-badge {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: 8px;
  gap: 6px;
}

.dr-badge {
  background-color: #E6F4EA;
  color: #137333;
  border: 1px solid #A8DAB5;
}

.cr-badge {
  background-color: #E8F0FE;
  color: #1A73E8;
  border: 1px solid #ADC6FC;
}

.badge-tag {
  font-size: 0.7rem;
  font-weight: 900;
  padding: 1px 4px;
  border-radius: 4px;
  color: white;
}

.dr-badge .badge-tag {
  background-color: #137333;
}

.cr-badge .badge-tag {
  background-color: #1A73E8;
}

/* Expand Action Arrow Animation */
.expand-btn-transition {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.expand-btn-transition.expanded {
  transform: rotate(-180deg);
}

/* Footer Summary Metrics */
.footer-summary-bar {
  background-color: #ffffff;
  border-top: 1px solid #E2E8F0;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.03);
}

.summary-metric {
  display: flex;
  flex-direction: column;
}

.text-success-amount {
  color: #27ae60 !important;
}

.border-bottom {
  border-bottom: 1px solid #E2E8F0;
}

/* Confirm Dialog Styling */
.dialog-header-warning {
  background: linear-gradient(135deg, #d35400 0%, #e67e22 100%);
}

.bg-warning-light {
  background-color: #FFF9E6;
}

.border-warning {
  border: 1px solid #FFE0B2;
}

.text-warning-text {
  color: #B78103;
}

.bg-light {
  background-color: #F8FAFC;
}

/* Success Card details */
.success-batch-num {
  background-color: #EDF2F7;
  color: #2D3748;
  border: 1px solid #CBD5E0;
  font-family: monospace;
  letter-spacing: 0.05em;
}

.border-success {
  border: 2px solid #27ae60;
}

.row-stripe {
  background-color: #F8FAFC;
  border-radius: 6px;
}

.border-right-md {
  border-right: 1px solid #E2E8F0;
}

@media (max-width: 960px) {
  .border-right-md {
    border-right: none;
    border-bottom: 1px solid #E2E8F0;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
}

/* Hover Shadows & Micro interactions */
.shadow-hover {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.shadow-hover:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(-1px);
}

.pulse-button {
  background-color: #D00505 !important;
  animation: pulse-border 2s infinite;
}

.pulse-button:disabled {
  background-color: #E2E8F0 !important;
  color: #A0AEC0 !important;
  animation: none;
}

@keyframes pulse-border {
  0% {
    box-shadow: 0 0 0 0 rgba(208, 5, 5, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(208, 5, 5, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(208, 5, 5, 0);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.max-width-search {
  max-width: 380px;
}

/* Printing Specific styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .gl-posting-container {
    background-color: white !important;
    padding: 0 !important;
  }
  
  .print-card {
    box-shadow: none !important;
    border: none !important;
    margin: 0 !important;
  }
  
  .gradient-header-success {
    background: none !important;
    color: black !important;
    border-bottom: 2px solid black;
    padding-bottom: 16px !important;
  }
  
  .gradient-header-success h1 {
    color: black !important;
    font-size: 24pt !important;
  }
  
  .gradient-header-success p {
    color: #4A5568 !important;
  }
  
  .gradient-header-success .v-icon {
    display: none !important;
  }
  
  .row-stripe {
    background-color: transparent !important;
    border-bottom: 1px solid #E2E8F0;
  }
  
  .border-right-md {
    border-right: none !important;
  }
  
  body {
    background: white;
    color: black;
  }
}
</style>
