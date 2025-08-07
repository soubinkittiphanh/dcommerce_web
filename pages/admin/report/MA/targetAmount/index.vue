<template>
  <div class="revenue-dashboard">
    <!-- Header Section -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl">
          <v-card-title class="py-2 px-4 d-flex align-center custom-primary-bg white--text">
            <v-icon color="white" class="mr-2">mdi-chart-line</v-icon>
            <span class="text-h5 font-weight-medium">
              Revenue Target Dashboard
            </span>
          </v-card-title>
          
          <v-divider></v-divider>
          
          <!-- Filters -->
          <v-card-text class="pa-4">
            <v-row>
              <v-col cols="12" md="2">
                <v-select
                  v-model="selectedYear"
                  :items="availableYears"
                  label="Year"
                  outlined
                  dense
                  @change="loadDashboardData"
                ></v-select>
              </v-col>
              
              <v-col cols="12" md="2">
                <v-select
                  v-model="selectedBranchId"
                  :items="branches"
                  item-text="name"
                  item-value="id"
                  label="Branch"
                  outlined
                  dense
                  clearable
                  @change="loadDashboardData"
                ></v-select>
              </v-col>
              
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="dateRange.start"
                  type="date"
                  label="From Date"
                  outlined
                  dense
                  @change="loadDashboardData"
                ></v-text-field>
              </v-col>
              
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="dateRange.end"
                  type="date"
                  label="To Date"
                  outlined
                  dense
                  @change="loadDashboardData"
                ></v-text-field>
              </v-col>
              
              <v-col cols="12" md="2">
                <v-btn
                  class="custom-primary-bg white--text"
                  block
                  outlined
                  @click="loadDashboardData"
                  :loading="loading"
                >
                  <v-icon left color="white">mdi-refresh</v-icon>
                  Refresh
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Summary Cards -->
    <v-row class="mb-4">
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="purple" class="mr-3">
                <v-icon color="white">mdi-bullseye</v-icon>
              </v-avatar>
              <div>
                <div class="text-caption grey--text">Total Target</div>
                <div class="text-h6 font-weight-bold">{{ formatAmount(summaryTotals.totalTarget) }}</div>
                <div class="text-caption">{{ dashboardData.length }} targets</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar class="mr-3 custom-primary-bg">
                <v-icon color="white">mdi-check-circle</v-icon>
              </v-avatar>
              <div>
                <div class="text-caption grey--text">Total Achieved</div>
                <div class="text-h6 font-weight-bold custom-primary-text">{{ formatAmount(summaryTotals.totalAchieved) }}</div>
                <div class="text-caption">{{ achievementPercentage }}% of target</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="warning" class="mr-3">
                <v-icon color="white">mdi-alert-circle</v-icon>
              </v-avatar>
              <div>
                <div class="text-caption grey--text">Outstanding</div>
                <div class="text-h6 font-weight-bold warning--text">{{ formatAmount(summaryTotals.totalOutstanding) }}</div>
                <div class="text-caption">{{ outstandingPercentage }}% remaining</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar :color="performanceStatus.color === 'custom-primary-bg' ? '#01532B' : performanceStatus.color" class="mr-3">
                <v-icon color="white">mdi-chart-line</v-icon>
              </v-avatar>
              <div>
                <div class="text-caption grey--text">Performance</div>
                <div class="text-h6 font-weight-bold" :class="performanceStatus.color === 'custom-primary-bg' ? 'custom-primary-text' : performanceStatus.color + '--text'">{{ performanceStatus.text }}</div>
                <div class="text-caption">{{ activeTargetsCount }} active targets</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Progress Overview -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl">
          <v-card-title class="py-2 px-4 custom-primary-bg white--text">
            <v-icon color="white" class="mr-2">mdi-progress-check</v-icon>
            <span class="text-subtitle-1 font-weight-medium">Overall Progress</span>
          </v-card-title>
          
          <v-divider></v-divider>
          
          <v-card-text class="pa-4">
            <div class="d-flex align-center mb-2">
              <span class="text-body-2 font-weight-medium">{{ achievementPercentage }}% Complete</span>
              <v-spacer></v-spacer>
              <span class="text-body-2">{{ formatAmount(summaryTotals.totalOutstanding) }} LAK Remaining</span>
            </div>
            <v-progress-linear
              :value="achievementPercentage"
              height="20"
              rounded
              class="custom-progress"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Main Data Table -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl">
          <v-card-title class="py-2 px-4 d-flex align-center custom-primary-bg white--text">
            <v-icon color="white" class="mr-2">mdi-table</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              Revenue Targets by Ministry & Chart Account
            </span>
            <v-spacer></v-spacer>
            <v-btn
              color="white"
              small
              outlined
              class="mr-2"
              @click="exportToCSV"
              :disabled="!dashboardData.length"
              :loading="exporting"
            >
              <v-icon small left color="white">mdi-file-excel</v-icon>
              <span style="color: white;">Export</span>
            </v-btn>
            <v-btn
              icon
              small
              @click="loadDashboardData"
              :loading="loading"
              color="white"
            >
              <v-icon small color="white">mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loading" class="text-center py-6">
              <v-progress-circular indeterminate class="custom-primary-color" />
              <div class="mt-2 text-caption">
                Loading dashboard data...
              </div>
            </div>

            <div
              v-else-if="!dashboardData.length"
              class="text-center py-6"
            >
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">
                No revenue target data available
              </div>
            </div>

            <v-simple-table v-else dense>
              <template v-slot:default>
                <thead>
                  <tr class="custom-table-header">
                    <th class="white--text text-caption font-weight-bold">#</th>
                    <th class="white--text text-caption font-weight-bold">Target Name</th>
                    <th class="white--text text-caption font-weight-bold">Ministry</th>
                    <th class="white--text text-caption font-weight-bold">Chart Account</th>
                    <!-- Dynamic Target Currency Columns -->
                    <th
                      v-for="currency in currencyList"
                      :key="'target-' + currency"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Target {{ currency }}
                    </th>
                    <!-- Dynamic Achieved Currency Columns -->
                    <th
                      v-for="currency in currencyList"
                      :key="'achieved-' + currency"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Achieved {{ currency }}
                    </th>
                    <th class="white--text text-caption font-weight-bold text-right">Target (LAK)</th>
                    <th class="white--text text-caption font-weight-bold text-right">Achieved (LAK)</th>
                    <th class="white--text text-caption font-weight-bold text-right">Outstanding (LAK)</th>
                    <th class="white--text text-caption font-weight-bold text-center">Progress</th>
                    <th class="white--text text-caption font-weight-bold text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in dashboardData"
                    :key="item.id"
                    :class="{
                      'grey lighten-5': index % 2 === 0,
                      'orange lighten-4': !item.isActive,
                    }"
                  >
                    <td class="text-caption text-center">{{ index + 1 }}</td>
                    <td class="text-body-2">
                      <div class="font-weight-medium">{{ item.name }}</div>
                      <div class="text-caption grey--text">{{ item.year }}</div>
                    </td>
                    <td class="text-body-2">
                      <div class="font-weight-medium">{{ item.ministryCode || 'N/A' }} {{ JSON.stringify(item) }}</div>
                      <div class="text-caption grey--text">{{ item.ministryName || 'No Ministry' }}</div>
                    </td>
                    <td class="text-body-2">
                      <div class="font-weight-medium">{{ item.accountNumber || 'N/A' }}</div>
                      <div class="text-caption grey--text">{{ item.accountName || 'No Chart Account' }}</div>
                    </td>
                    <!-- Dynamic Target Amount Columns -->
                    <td
                      v-for="currency in currencyList"
                      :key="'target-amt-' + currency"
                      class="text-body-2 text-right"
                    >
                      {{ formatAmount(item.targetAmounts[currency] || 0) }}
                    </td>
                    <!-- Dynamic Achieved Amount Columns -->
                    <td
                      v-for="currency in currencyList"
                      :key="'achieved-amt-' + currency"
                      class="text-body-2 text-right custom-primary-text"
                    >
                      {{ formatAmount(item.achievedAmounts[currency] || 0) }}
                    </td>
                    <td class="text-body-2 text-right font-weight-medium">
                      {{ formatAmount(item.targetAmountLAK) }}
                    </td>
                    <td class="text-body-2 text-right font-weight-medium custom-primary-text">
                      {{ formatAmount(item.achievedAmount) }}
                    </td>
                    <td class="text-body-2 text-right font-weight-medium warning--text">
                      {{ formatAmount(item.outstandingAmount) }}
                    </td>
                    <td class="text-center">
                      <div class="d-flex align-center justify-center">
                        <v-progress-circular
                          :value="item.progressPercentage"
                          :color="getProgressColor(item.progressPercentage)"
                          size="30"
                          width="3"
                          class="mr-2"
                        >
                          <span class="text-caption">{{ item.progressPercentage }}%</span>
                        </v-progress-circular>
                      </div>
                    </td>
                    <td class="text-center">
                      <v-chip 
                        small 
                        :style="{ backgroundColor: getStatusColor(item.progressPercentage), color: 'white' }"
                      >
                        {{ getStatusText(item.progressPercentage) }}
                      </v-chip>
                    </td>
                  </tr>
                  <!-- Totals Row -->
                  <tr class="custom-table-totals">
                    <td colspan="4" class="font-weight-bold text-caption white--text">
                      ລວມ (Total)
                    </td>
                    <!-- Dynamic Target Totals -->
                    <td
                      v-for="currency in currencyList"
                      :key="'target-total-' + currency"
                      class="text-right font-weight-bold text-body-2 white--text"
                    >
                      {{ formatAmount(summaryTotals.targetCurrencyTotals[currency] || 0) }}
                    </td>
                    <!-- Dynamic Achieved Totals -->
                    <td
                      v-for="currency in currencyList"
                      :key="'achieved-total-' + currency"
                      class="text-right font-weight-bold text-body-2 white--text"
                    >
                      {{ formatAmount(summaryTotals.achievedCurrencyTotals[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold text-body-2 white--text">
                      {{ formatAmount(summaryTotals.totalTarget) }}
                    </td>
                    <td class="text-right font-weight-bold text-body-2 white--text">
                      {{ formatAmount(summaryTotals.totalAchieved) }}
                    </td>
                    <td class="text-right font-weight-bold text-body-2 white--text">
                      {{ formatAmount(summaryTotals.totalOutstanding) }}
                    </td>
                    <td class="text-center">
                      <v-progress-circular
                        :value="achievementPercentage"
                        color="white"
                        size="35"
                        width="4"
                      >
                        <span class="text-caption font-weight-bold white--text">{{ achievementPercentage }}%</span>
                      </v-progress-circular>
                    </td>
                    <td class="text-center">
                      <v-chip 
                        color="white"
                        text-color="#01532B"
                      >
                        {{ getStatusText(achievementPercentage) }}
                      </v-chip>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'RevenueTargetDashboard',
  
  data() {
    return {
      loading: false,
      exporting: false,
      
      // Filter states
      selectedYear: new Date().getFullYear(),
      selectedBranchId: '',
      dateRange: {
        start: new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0], // Jan 1st
        end: new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0]  // Dec 31st
      },
      
      // Data
      revenueTargets: [],
      settlements: [],
      dashboardData: [],
      branches: [],
      currencyList: [],
      
      // Computed totals
      summaryTotals: {
        totalTarget: 0,
        totalAchieved: 0,
        totalOutstanding: 0,
        targetCurrencyTotals: {},
        achievedCurrencyTotals: {}
      }
    }
  },

  computed: {
    availableYears() {
      const currentYear = new Date().getFullYear()
      return Array.from({ length: 10 }, (_, i) => ({
        text: (currentYear - 5 + i).toString(),
        value: currentYear - 5 + i
      }))
    },

    achievementPercentage() {
      if (this.summaryTotals.totalTarget === 0) return 0
      return Math.round((this.summaryTotals.totalAchieved / this.summaryTotals.totalTarget) * 100)
    },

    outstandingPercentage() {
      return 100 - this.achievementPercentage
    },

    performanceStatus() {
      const percentage = this.achievementPercentage
      if (percentage >= 90) return { text: 'Excellent', color: 'custom-primary-bg' }
      if (percentage >= 75) return { text: 'Good', color: 'info' }
      if (percentage >= 50) return { text: 'Average', color: 'warning' }
      return { text: 'Needs Improvement', color: 'error' }
    },

    activeTargetsCount() {
      return this.revenueTargets.filter(target => target.isActive).length
    }
  },

  async mounted() {
    await this.loadDashboardData()
  },

  methods: {
    async loadDashboardData() {
      this.loading = true
      try {
        await Promise.all([
          this.fetchRevenueTargets(),
          this.fetchSettlements()
        ])
        this.processDashboardData()
      } catch (error) {
        console.error('Error loading dashboard data:', error)
        this.$toast.error('Failed to load dashboard data')
      } finally {
        this.loading = false
      }
    },

    async fetchRevenueTargets() {
      try {
        const params = {
          year: this.selectedYear,
          include: 'currency,subMinistries,chartAccount'
        }

        const response = await this.$axios.get('/api/revenue-targets', { params })
        
        if (Array.isArray(response.data)) {
          this.revenueTargets = response.data.map(target => ({
            id: target.id,
            name: target.name,
            year: target.year,
            targetAmount: parseFloat(target.targetAmount) || 0,
            exchangeRate: parseFloat(target.exchangeRate) || 1,
            currencyId: target.currencyId,
            parentMinistryId: target.parentMinistryId,
            chartAccountId: target.chartAccountId,
            currency: target.currency,
            subMinistries: target.subMinistries,
            chartAccount: target.chartAccount,
            remark: target.remark,
            isActive: target.isActive,
            createdAt: target.createdAt,
            updateTimestamp: target.updateTimestamp
          }))
        } else {
          this.revenueTargets = []
        }
      } catch (error) {
        console.error('Error fetching revenue targets:', error)
        throw error
      }
    },

    async fetchSettlements() {
      try {
        let allSettlements = []
        let currentPage = 1
        let totalPages = 1

        do {
          const response = await this.$axios.get('/api/settlements', {
            params: {
              branchId: this.selectedBranchId,
              fromDate: this.dateRange.start,
              toDate: this.dateRange.end,
              isPosted: true,
              include: ['ministry', 'currency', 'chartAccount'],
              page: currentPage,
              limit: 50
            }
          })

          const pageData = response.data.data?.settlements || []
          allSettlements = allSettlements.concat(pageData)

          const pagination = response.data.data?.pagination
          if (pagination) {
            totalPages = pagination.totalPages
          }

          currentPage++
        } while (currentPage <= totalPages)

        this.settlements = allSettlements
      } catch (error) {
        console.error('Error fetching settlements:', error)
        throw error
      }
    },

    processDashboardData() {
      // Create a map to group settlements by ministry and chart account
      const settlementMap = new Map()
      const currencySet = new Set()

      this.settlements.forEach(settlement => {
        const ministryId = settlement.ministry?.id || 'NO_MINISTRY'
        const chartAccountId = settlement.chartAccount?.id || 'NO_CHART_ACCOUNT'
        const key = `${ministryId}-${chartAccountId}`
        const currencyCode = settlement.currency?.code || 'LAK'

        const exchangeRate = parseFloat(settlement.exchangeRate) || 1
        const amount = parseFloat(settlement.amount) || 0
        const lakEquivalent = amount * exchangeRate

        currencySet.add(currencyCode)

        if (!settlementMap.has(key)) {
          settlementMap.set(key, {
            ministryId,
            chartAccountId,
            totalLakEquivalent: 0,
            amounts: {}
          })
        }

        const settlementData = settlementMap.get(key)
        settlementData.totalLakEquivalent += lakEquivalent
        settlementData.amounts[currencyCode] = (settlementData.amounts[currencyCode] || 0) + amount
      })

      // Collect all currencies from revenue targets and settlements
      this.revenueTargets.forEach(target => {
        const currencyCode = target.currency?.code || 'LAK'
        currencySet.add(currencyCode)
      })

      this.currencyList = Array.from(currencySet).sort()

      // Process revenue targets and match with achievements
      this.dashboardData = this.revenueTargets.map(target => {
        const ministryId = target.parentMinistryId || 'NO_MINISTRY'
        const chartAccountId = target.chartAccountId || 'NO_CHART_ACCOUNT'
        const key = `${ministryId}-${chartAccountId}`

        const targetAmountLAK = target.targetAmount * target.exchangeRate
        const achievedAmount = settlementMap.get(key)?.totalLakEquivalent || 0
        const outstandingAmount = Math.max(0, targetAmountLAK - achievedAmount)
        const progressPercentage = targetAmountLAK > 0 
          ? Math.min(100, Math.round((achievedAmount / targetAmountLAK) * 100))
          : 0

        // Create currency breakdowns
        const targetAmounts = {}
        const achievedAmounts = {}
        
        this.currencyList.forEach(currency => {
          // Target amounts: only show in the target's currency
          if (currency === (target.currency?.code || 'LAK')) {
            targetAmounts[currency] = target.targetAmount
          } else {
            targetAmounts[currency] = 0
          }
          
          // Achieved amounts: from settlements
          achievedAmounts[currency] = settlementMap.get(key)?.amounts[currency] || 0
        })

        return {
          id: target.id,
          name: target.name,
          year: target.year,
          targetAmount: target.targetAmount,
          targetAmountLAK,
          achievedAmount,
          outstandingAmount,
          progressPercentage,
          targetAmounts,
          achievedAmounts,
          currencyCode: target.currency?.code || 'LAK',
          ministryCode: target.subMinistries?.ministryCode,
          ministryName: target.subMinistries?.ministryName,
          accountNumber: target.chartAccount?.accountNumber,
          accountName: target.chartAccount?.accountName,
          isActive: target.isActive
        }
      })

      // Calculate summary totals
      const targetCurrencyTotals = {}
      const achievedCurrencyTotals = {}

      this.currencyList.forEach(currency => {
        targetCurrencyTotals[currency] = this.dashboardData.reduce((sum, item) => 
          sum + (item.targetAmounts[currency] || 0), 0
        )
        achievedCurrencyTotals[currency] = this.dashboardData.reduce((sum, item) => 
          sum + (item.achievedAmounts[currency] || 0), 0
        )
      })

      this.summaryTotals = {
        totalTarget: this.dashboardData.reduce((sum, item) => sum + item.targetAmountLAK, 0),
        totalAchieved: this.dashboardData.reduce((sum, item) => sum + item.achievedAmount, 0),
        totalOutstanding: this.dashboardData.reduce((sum, item) => sum + item.outstandingAmount, 0),
        targetCurrencyTotals,
        achievedCurrencyTotals
      }
    },

    formatAmount(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount)
    },

    getProgressColor(percentage) {
      if (percentage >= 90) return '#01532B'
      if (percentage >= 75) return '#17a2b8'
      if (percentage >= 50) return '#ffc107'
      return '#dc3545'
    },

    getStatusColor(percentage) {
      if (percentage >= 100) return '#01532B'
      if (percentage >= 90) return '#01532B'
      if (percentage >= 75) return '#17a2b8'
      if (percentage >= 50) return '#ffc107'
      return '#dc3545'
    },

    getStatusText(percentage) {
      if (percentage >= 100) return 'Complete'
      if (percentage >= 90) return 'Excellent'
      if (percentage >= 75) return 'On Track'
      if (percentage >= 50) return 'Fair'
      return 'Behind'
    },

    async exportToCSV() {
      this.exporting = true
      try {
        const headers = [
          'Target Name', 'Year', 'Ministry Code', 'Ministry Name',
          'Account Number', 'Account Name'
        ]
        
        // Add dynamic target currency headers
        this.currencyList.forEach(currency => {
          headers.push(`Target ${currency}`)
        })
        
        // Add dynamic achieved currency headers
        this.currencyList.forEach(currency => {
          headers.push(`Achieved ${currency}`)
        })
        
        headers.push('Target Amount (LAK)', 'Achieved Amount (LAK)', 'Outstanding Amount (LAK)', 'Progress %', 'Status')

        const rows = this.dashboardData.map(item => {
          const row = [
            item.name,
            item.year,
            item.ministryCode || '',
            item.ministryName || '',
            item.accountNumber || '',
            item.accountName || ''
          ]
          
          // Add target amounts for each currency
          this.currencyList.forEach(currency => {
            row.push(item.targetAmounts[currency] || 0)
          })
          
          // Add achieved amounts for each currency
          this.currencyList.forEach(currency => {
            row.push(item.achievedAmounts[currency] || 0)
          })
          
          row.push(
            item.targetAmountLAK,
            item.achievedAmount,
            item.outstandingAmount,
            item.progressPercentage,
            this.getStatusText(item.progressPercentage)
          )
          
          return row
        })

        const csvContent = [headers, ...rows]
          .map(row => row.map(field => `"${field}"`).join(','))
          .join('\n')

        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `revenue-targets-dashboard-${this.selectedYear}.csv`
        link.click()
        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error exporting CSV:', error)
        this.$toast.error('Failed to export CSV')
      } finally {
        this.exporting = false
      }
    }
  }
}
</script>

<style scoped>
.revenue-dashboard {
  padding: 16px;
}

/* Custom Color Theme #01532B */
.custom-primary-bg {
  background-color: #01532B !important;
}

.custom-primary-text {
  color: #01532B !important;
}

.custom-primary-color {
  color: #01532B !important;
}

.custom-table-header {
  background-color: #01532B !important;
}

.custom-table-totals {
  background-color: rgba(1, 83, 43, 0.8) !important;
}

.custom-progress >>> .v-progress-linear__determinate {
  background-color: #01532B !important;
}

/* Custom styling for progress bars */
.v-progress-circular {
  font-size: 10px;
}

/* Table styling enhancements */
.v-simple-table >>> thead tr th {
  background-color: #01532B !important;
}

.v-simple-table >>> tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.04) !important;
}

/* Card styling */
.rounded-lg {
  border-radius: 12px !important;
}

.rounded-xl {
  border-radius: 16px !important;
}

/* Performance status colors with custom theme */
.performance-excellent {
  color: #01532B !important;
}

.performance-good {
  color: #4CAF50 !important;
}

.performance-average {
  color: #FF9800 !important;
}

.performance-poor {
  color: #F44336 !important;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .revenue-dashboard {
    padding: 8px;
  }
}
</style>