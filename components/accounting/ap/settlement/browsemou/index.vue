<template>
  <div class="mou-content">
    <!-- Step 1: Select MOU -->
    <div class="form-section">
      <div class="form-group">
        <label>Select MOU <span class="required">*</span></label>
        <select
          v-model="selectedMOU"
          class="form-control"
          :disabled="loadingMOU"
          @change="onMOUChange"
        >
          <option :value="null">-- Select MOU --</option>
          <option v-for="mou in mouList" :key="mou.id" :value="mou">
            {{ mou.jobCode }} - {{ mou.pmCharge }} - {{ mou.jobTitle }} -
            {{ mou.employerCompany }}
          </option>
        </select>
      </div>
    </div>

    <!-- Step 2: Select Batch -->
    <div class="form-section" v-if="selectedMOU">
      <div class="form-group">
        <label>Select Batch <span class="required">*</span></label>
        <select
          v-model="selectedBatch"
          class="form-control"
          :disabled="!selectedMOU || loadingBatches"
          @change="onBatchChange"
        >
          <option :value="null">-- Select Batch --</option>
          <option v-for="batch in batchList" :key="batch.id" :value="batch">
            {{ batch.runningNo }} - {{ batch.totalPositions }} positions ({{
              batch.applicants.length
            }}
            applicants)
          </option>
        </select>
      </div>
    </div>

    <!-- Step 3: Select Agency -->
    <div class="form-section" v-if="selectedBatch">
      <div class="form-group">
        <label>Select Agency <span class="required">*</span></label>
        <select
          v-model="selectedAgency"
          class="form-control"
          :disabled="!selectedBatch || agencyList.length === 0"
          @change="onAgencyChange"
        >
          <option :value="null">
            {{
              agencyList.length === 0
                ? '-- No agencies available --'
                : '-- Select Agency --'
            }}
          </option>
          <option v-for="agency in agencyList" :key="agency.id" :value="agency">
            {{ agency.agencyName }} - {{ agency.agencyCode }} ({{
              getAgencyApplicantCount(agency.id)
            }}
            applicants)
          </option>
        </select>
        <small v-if="agencyList.length === 0" class="text-muted">
          No applicants in this batch have agencies assigned
        </small>
      </div>
    </div>

    <!-- Step 4: Invoice Details -->
    <!-- <div class="form-section" v-if="selectedAgency">
      <div class="form-grid">
        <div class="form-group">
          <label>Invoice Number <span class="required">*</span></label>
          <input
            v-model="invoiceData.invoiceNumber"
            type="text"
            class="form-control"
            placeholder="INV-XXXX"
          />
        </div>
        <div class="form-group">
          <label>Invoice Date <span class="required">*</span></label>
          <input
            v-model="invoiceData.invoiceDate"
            type="date"
            class="form-control"
          />
        </div>
      </div>
    </div> -->

    <!-- Step 5: Applicants Table -->
    <div
      class="form-section"
      v-if="selectedAgency && applicantsList.length > 0"
    >
      <div class="section-header">
        <h6 class="section-title">
          <i class="fas fa-users"></i>
          Invoice Line Items ({{ applicantsList.length }} applicants)
        </h6>
        <div class="total-badge">
          Total: <strong>{{ formatCurrency(totalAmount) }}</strong>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th style="width: 40px">#</th>
              <th>Applicant Name</th>
              <th style="width: 120px">Passport No</th>
              <th style="width: 150px">Amount</th>
              <th style="width: 200px">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(applicant, index) in applicantsList"
              :key="applicant.id"
            >
              <td class="text-center">{{ index + 1 }}</td>
              <td>
                <div class="applicant-info">
                  <div class="applicant-avatar">
                    {{ getInitials(applicant.applicantName) }}
                  </div>
                  <div>
                    <div class="applicant-name">
                      {{ applicant.applicantName }}
                    </div>
                    <div class="applicant-nationality">
                      {{ applicant.gender }}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span class="passport-badge">
                  <i class="fas fa-passport"></i>
                  {{ applicant.passportNo }}
                </span>
              </td>
              <td>
                <input
                  v-model.number="applicant.amount"
                  type="number"
                  step="0.01"
                  min="0"
                  class="form-control form-control-sm"
                  @input="calculateTotal"
                />
              </td>
              <td>
                <input
                  v-model="applicant.description"
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Description"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="selectedAgency && applicantsList.length === 0"
      class="empty-state"
    >
      <i class="fas fa-inbox fa-4x"></i>
      <p class="empty-title">No applicants available</p>
      <p class="empty-subtitle">
        No applicants found for the selected agency in this batch
      </p>
    </div>

    <!-- Action Buttons -->
    <div class="mou-actions">
      <button
        type="button"
        @click="$emit('close')"
        class="btn btn-secondary"
        :disabled="isGenerating"
      >
        <i class="fas fa-times"></i> Cancel
      </button>
      <button
        type="button"
        @click="generateInvoice"
        class="btn btn-primary"
        :disabled="!canGenerateInvoice"
      >
        <i class="fas fa-file-check"></i>
        <span v-if="isGenerating">Generating...</span>
        <span v-else>Generate Invoice</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowseMouInvoiceDialog',

  props: {
    visible: { type: Boolean, default: false },
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
        invoiceDate: new Date().toISOString().substr(0, 10),
      },
    }
  },

  computed: {
    totalAmount() {
      return this.applicantsList.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0)
    },

    canGenerateInvoice() {
      return (
        this.selectedMOU &&
        this.selectedBatch &&
        this.selectedAgency &&
        this.applicantsList.length > 0 &&
        !this.isGenerating
      )
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.loadMOUList()
      } else {
        this.resetForm()
      }
    },
  },

  created() {
    this.loadMOUList()
  },

  methods: {

    calculateTotal() {
      this.$forceUpdate()
    },
    resetForm() {
      this.selectedMOU = null
      this.selectedBatch = null
      this.selectedAgency = null
      this.batchList = []
      this.agencyList = []
      this.applicantsList = []
      this.invoiceData = {
        invoiceNumber: '',
        invoiceDate: new Date().toISOString().substr(0, 10),
      }
    },

    async loadMOUList() {
      this.loadingMOU = true
      try {
        const { data } = await this.$axios.get('/api/mous')
        if (data.success) {
          this.mouList = data.data.mous
        }
      } catch (error) {
        console.error('Error loading MOU list:', error)
        this.$toast?.error('Failed to load MOU list')
      } finally {
        this.loadingMOU = false
      }
    },

    async onMOUChange() {
      if (!this.selectedMOU) {
        this.batchList = []
        this.selectedBatch = null
        this.selectedAgency = null
        this.applicantsList = []
        this.agencyList = []
        return
      }

      this.loadingBatches = true
      try {
        const { data } = await this.$axios.get(`/api/mous/${this.selectedMOU.id}/batch`)
        if (data.success) {
          this.batchList = data.data || []
        }
        this.selectedBatch = null
        this.selectedAgency = null
        this.applicantsList = []
        this.agencyList = []
      } catch (error) {
        console.error('Error loading batches:', error)
        this.$toast?.error('Failed to load batches')
        this.batchList = []
      } finally {
        this.loadingBatches = false
      }
    },

    onBatchChange() {
      if (!this.selectedBatch) {
        this.selectedAgency = null
        this.applicantsList = []
        this.agencyList = []
        return
      }

      const agenciesMap = new Map()

      if (this.selectedBatch.applicants?.length > 0) {
        this.selectedBatch.applicants.forEach((applicant) => {
          if (applicant.agency && applicant.agencyId && !agenciesMap.has(applicant.agency.id)) {
            agenciesMap.set(applicant.agency.id, applicant.agency)
          }
        })
      }

      this.agencyList = Array.from(agenciesMap.values())
      this.selectedAgency = null
      this.applicantsList = []
    },

    onAgencyChange() {
      if (!this.selectedAgency || !this.selectedBatch) {
        this.applicantsList = []
        return
      }

      const agencyApplicants = this.selectedBatch.applicants.filter(
        (applicant) => applicant.agencyId === this.selectedAgency.id
      )

      this.applicantsList = agencyApplicants.map((applicant) => ({
        id: applicant.id,
        applicantName: `${applicant.firstName} ${applicant.lastName}`,
        passportNo: applicant.passportNo,
        gender: applicant.gender,
        amount: applicant.depositAmount || 0,
        description: `Service fee for ${applicant.firstName} ${applicant.lastName}`,
      }))
    },

    getAgencyApplicantCount(agencyId) {
      if (!this.selectedBatch?.applicants) return 0
      return this.selectedBatch.applicants.filter((a) => a.agencyId === agencyId).length
    },

    async generateInvoice() {
      if (!this.canGenerateInvoice) return

      this.isGenerating = true

      try {
        const payload = {
          mouId: this.selectedMOU.id,
          mouInfo: {
            jobCode: this.selectedMOU.jobCode,
            jobTitle: this.selectedMOU.jobTitle,
            employerCompany: this.selectedMOU.employerCompany,
            pmCharge: this.selectedMOU.pmCharge,
          },
          batchId: this.selectedBatch.id,
          batchInfo: {
            runningNo: this.selectedBatch.runningNo,
            totalPositions: this.selectedBatch.totalPositions,
          },
          agencyId: this.selectedAgency.id,
          agencyName: this.selectedAgency.agencyName,
          agencyCode: this.selectedAgency.agencyCode,
          invoiceNumber: this.invoiceData.invoiceNumber,
          invoiceDate: this.invoiceData.invoiceDate,
          lines: this.applicantsList.map((applicant) => ({
            applicantId: applicant.id,
            applicantName: applicant.applicantName,
            passportNo: applicant.passportNo,
            gender: applicant.gender,
            amount: parseFloat(applicant.amount) || 0,
            description: applicant.description || '',
          })),
          totalAmount: this.totalAmount,
        }

        this.$emit('invoice-generated', payload)
        this.$toast?.success(`Generated ${this.applicantsList.length} invoice lines`)
      } catch (error) {
        console.error('Error generating invoice:', error)
        this.$toast?.error('Failed to generate invoice')
      } finally {
        this.isGenerating = false
      }
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    getInitials(name) {
      if (!name) return '?'
      const parts = name.split(' ')
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      }
      return name.substring(0, 2).toUpperCase()
    },
  },
}
</script>

<!-- Keep existing template and styles -->

<!-- Keep existing styles -->

<style scoped>
.mou-content {
  padding: 0;
}

.form-section {
  margin-bottom: 20px;
  padding: 15px;
  background: #fafafa;
  border-radius: 6px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.form-group {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
  font-size: 13px;
}

.required {
  color: #e74c3c;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
}

.form-control:focus {
  outline: none;
  border-color: #17a2b8;
  box-shadow: 0 0 0 2px rgba(23, 162, 184, 0.1);
}

.form-control:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
}

.form-control-sm {
  padding: 4px 8px;
  font-size: 12px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}

.total-badge {
  padding: 6px 12px;
  background: #17a2b8;
  color: white;
  border-radius: 4px;
  font-size: 12px;
}

.table-responsive {
  overflow-x: auto;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: white;
}

.table {
  margin: 0;
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.table thead th {
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  padding: 10px;
  font-weight: 600;
  text-align: left;
}

.table tbody td {
  padding: 8px 10px;
  border-top: 1px solid #dee2e6;
  vertical-align: middle;
}

.applicant-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.applicant-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #17a2b8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 11px;
  flex-shrink: 0;
}

.applicant-name {
  font-weight: 500;
  color: #333;
}

.applicant-nationality {
  font-size: 11px;
  color: #6c757d;
}

.passport-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #e9ecef;
  border-radius: 4px;
  font-size: 11px;
}

.loading-state,
.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #6c757d;
}

.loading-state i {
  color: #17a2b8;
  margin-bottom: 15px;
}

.empty-state i {
  color: #dee2e6;
  margin-bottom: 15px;
}

.empty-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 10px 0 5px;
}

.empty-subtitle {
  font-size: 13px;
  color: #6c757d;
  margin: 0;
}

.mou-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px 20px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  margin-top: 20px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .mou-actions {
    flex-direction: column;
  }

  .mou-actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>