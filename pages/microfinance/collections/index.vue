<template>
  <v-container fluid class="pa-6 font-outfit">
    <!-- Navigation Back -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-btn text color="secondary" to="/microfinance">
          <v-icon left>mdi-arrow-left</v-icon> Back to Dashboard
        </v-btn>
      </v-col>
    </v-row>

    <!-- Header Actions -->
    <v-row class="mb-6 align-center">
      <v-col cols="12" sm="6">
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon color="primary" class="mr-2">mdi-table-large</v-icon>
          Center Meeting Collection Sheet
        </h1>
        <p class="subtitle-2 grey--text text--darken-1">
          Select a geographic Center and schedule meeting. Review, adjust, and record group repayments in bulk.
        </p>
      </v-col>
    </v-row>

    <!-- Selection Filters Card -->
    <v-card class="rounded-xl pa-6 mb-6" outlined>
      <v-row align="center">
        <v-col cols="12" sm="4">
          <v-select
            v-model="selectedCenterId"
            :items="centers"
            item-text="name"
            item-value="id"
            label="Select Center Meeting *"
            outlined
            dense
            hide-details
            class="rounded-lg"
            @change="loadCollectionSheet"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="meetingDate"
            label="Meeting Date (YYYY-MM-DD) *"
            outlined
            dense
            hide-details
            class="rounded-lg"
            @change="loadCollectionSheet"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="text-sm-right">
          <v-btn
            color="primary"
            dark
            large
            class="rounded-xl"
            :disabled="collectionItems.length === 0"
            :loading="submitLoading"
            @click="submitCollectionSheet"
          >
            <v-icon left>mdi-check-all</v-icon> Submit Center Collection
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- Collection Sheet Data Grid -->
    <v-card class="rounded-xl pa-6" outlined>
      <div v-if="collectionItems.length === 0" class="grey--text text-center py-12">
        <v-icon size="64" color="grey lighten-1">mdi-calendar-blank-outline</v-icon>
        <h3 class="text-h6 mt-3">No Collection Items</h3>
        <p class="text-caption grey--text mb-0">Select a Center and a valid Meeting Date to load due payments.</p>
      </div>

      <v-simple-table v-else class="transparent">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left font-weight-bold">Client Name (CIF)</th>
              <th class="text-left font-weight-bold">Sub-Group</th>
              <th class="text-left font-weight-bold">Account #</th>
              <th class="text-right font-weight-bold">Expected Principal</th>
              <th class="text-right font-weight-bold">Expected Interest</th>
              <th class="text-right font-weight-bold">Total Due</th>
              <th class="text-right font-weight-bold" style="width: 170px;">Actual Paid</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in collectionItems" :key="i">
              <td>
                <span class="font-weight-bold">{{ item.clientName }}</span>
                <div class="text-caption grey--text">{{ item.cifNo }}</div>
              </td>
              <td>
                <v-chip x-small color="secondary" dark class="font-weight-bold">{{ item.groupName }}</v-chip>
              </td>
              <td>
                <span class="primary--text text-caption font-mono font-weight-bold">{{ item.accountNo }}</span>
              </td>
              <td class="text-right">{{ item.currency }} {{ item.principalDue.toFixed(2) }}</td>
              <td class="text-right">{{ item.currency }} {{ item.interestDue.toFixed(2) }}</td>
              <td class="text-right font-weight-bold error--text">{{ item.currency }} {{ item.totalDue.toFixed(2) }}</td>
              <td>
                <v-text-field
                  v-model.number="item.actualPaid"
                  type="number"
                  dense
                  outlined
                  hide-details
                  color="primary"
                  :prefix="item.currency"
                  class="rounded-lg text-right font-weight-bold success--text text--darken-2"
                ></v-text-field>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      selectedCenterId: null,
      meetingDate: new Date().toISOString().split('T')[0],
      collectionItems: [],
      submitLoading: false
    };
  },
  computed: {
    ...mapState('microfinance', ['groups', 'accounts']),
    centers() {
      return this.groups.filter(g => g.type === 'CENTER');
    }
  },
  created() {
    this.$store.dispatch('microfinance/fetchGroups');
    this.$store.dispatch('microfinance/fetchAccounts');
  },
  methods: {
    async loadCollectionSheet() {
      if (!this.selectedCenterId) return;
      this.collectionItems = [];

      try {
        // Fetch all active loan accounts
        const response = await this.$axios.get('/api/mf/accounts/find');
        const activeLoans = response.data && response.data.data ? response.data.data : [];

        // Filter accounts belonging to groups under selected Center
        const centerGroupIds = this.groups
          .filter(g => g.type === 'GROUP' && g.parentId === this.selectedCenterId)
          .map(g => g.id);

        const targetItems = [];

        activeLoans.forEach(loan => {
          if (loan.status === 'ACTIVE' && loan.customer && centerGroupIds.includes(loan.customer.groupId)) {
            // Find schedule installment matching the meeting date
            const sDue = loan.schedules.find(s => s.dueDate === this.meetingDate && s.status !== 'PAID');
            
            if (sDue) {
              const pDue = parseFloat(sDue.principalDue) - parseFloat(sDue.principalPaid || 0);
              const iDue = parseFloat(sDue.interestDue) - parseFloat(sDue.interestPaid || 0);
              const totalDue = pDue + iDue;

              const clientGroup = this.groups.find(g => g.id === loan.customer.groupId);

              targetItems.push({
                loanAccountId: loan.id,
                accountNo: loan.accountNo,
                cifNo: loan.customer.cifNo,
                clientName: `${loan.customer.firstName || loan.customer.companyName} ${loan.customer.lastName || ''}`,
                groupName: clientGroup ? clientGroup.name : 'Unknown Group',
                principalDue: pDue,
                interestDue: iDue,
                totalDue: totalDue,
                currency: loan.currency || 'USD',
                actualPaid: totalDue // Initialize input with expected amount
              });
            }
          }
        });

        this.collectionItems = targetItems;

      } catch (err) {
        console.error('Error loading collection sheet:', err);
      }
    },
    async submitCollectionSheet() {
      if (this.collectionItems.length === 0) return;
      this.submitLoading = true;
      let successCount = 0;
      let errorMessages = [];

      try {
        // Loop and post payment for each item sequentially
        for (const item of this.collectionItems) {
          if (item.actualPaid <= 0) continue;

          const res = await this.$store.dispatch('microfinance/makePayment', {
            id: item.loanAccountId,
            paymentData: {
              amountPaid: item.actualPaid,
              paymentDate: this.meetingDate
            }
          });

          if (res.success) {
            successCount++;
          } else {
            errorMessages.push(`Account ${item.accountNo}: ${res.error}`);
          }
        }

        alert(`Bulk payment complete. Posted ${successCount} payments successfully.`);
        if (errorMessages.length > 0) {
          console.error('Errors during bulk post:', errorMessages);
        }
        
        // Reload collection list
        this.loadCollectionSheet();
        this.$store.dispatch('microfinance/fetchAccounts');

      } catch (err) {
        alert('An unexpected error occurred during bulk payment.');
      } finally {
        this.submitLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif !important;
}
.font-mono {
  font-family: 'Courier New', Courier, monospace;
}
</style>
