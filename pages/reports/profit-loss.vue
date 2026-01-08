<!-- pages/reports/profit-loss.vue -->
<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex justify-space-between align-center mb-6">
      <div>
        <h1 class="font-weight-bold">
          ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ
        </h1>
        <p class=" grey--text mt-2">
          Profit & Loss Report - ວິເຄາະລາຍຮັບ ແລະ ລາຍຈ່າຍ
        </p>
      </div>
      <v-breadcrumbs :items="breadcrumbs" class="pa-0">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
            class="text-decoration-none"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </div>

    <!-- Main P&L Component -->
    <ProfitLossReport />
  </div>
</template>

<script>
import ProfitLossReport from '~/components/reports/ProfitLossReport.vue'

export default {
  name: 'ProfitLossReportPage',
  components: {
    ProfitLossReport
  },
  
  // Page metadata
  head() {
    return {
      title: 'ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ - P&L Report',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Profit & Loss Report - ລາຍງານວິເຄາະລາຍຮັບ ແລະ ລາຍຈ່າຍ ດ້ວຍການຄຳນວນຫຼາຍສະກຸນເງິນ'
        }
      ]
    }
  },

  // Page middleware (optional)
  middleware: ['auth'], // Require authentication to view this page

  // Page layout (optional)
  layout: 'default',

  data() {
    return {
      breadcrumbs: [
        // {
        //   text: 'ໜ້າຫຼັກ',
        //   disabled: false,
        //   href: '/'
        // },
        // {
        //   text: 'ລາຍງານ',
        //   disabled: false,
        //   href: '/reports'
        // },
        // {
        //   text: 'P&L Report',
        //   disabled: true,
        //   href: '/reports/profit-loss'
        // }
      ]
    }
  },

  // Async data fetching (if needed for initial data)
  async asyncData({ $axios, error }) {
    try {
      // You can pre-fetch any initial data here if needed
      // For example, currency list or default date ranges
      
      return {
        // initialData: data
      }
    } catch (err) {
      // Handle errors gracefully
      console.error('Error loading P&L report page:', err)
      // Don't throw error, let component handle data fetching
      return {}
    }
  },

  // Server-side data fetching (alternative to asyncData)
  async fetch() {
    // This runs on both server and client
    // Can be used for data that doesn't need to be available on initial render
    try {
      // Example: fetch currencies or other supporting data
      // await this.$store.dispatch('currencies/fetchCurrencies')
    } catch (error) {
      console.error('Error in fetch:', error)
    }
  }
}
</script>

<style scoped>
/* Page-specific styles */
.text-h4 {
  color: #1976d2;
}

.text-subtitle-1 {
  line-height: 1.5;
}

/* Breadcrumb styling */
.v-breadcrumbs {
  padding: 0 !important;
}

.v-breadcrumbs-item {
  font-size: 14px;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }
  
  .d-flex.justify-space-between {
    flex-direction: column;
    align-items: flex-start !important;
  }
  
  .v-breadcrumbs {
    margin-top: 10px;
  }
}
</style>