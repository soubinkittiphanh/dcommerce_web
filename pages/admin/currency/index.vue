<template>
  <div class="text-left">
    <div class="mb-4">
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon left>mdi-label</v-icon>
        <h3>ລາຍການ ສະກຸນເງິນ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon left>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <v-alert v-if="localCurrency" primary prominent class="mb-4" icon="mdi-home-currency">
      <div class="d-flex justify-space-between align-center">
        <div>
          <div class="text-h6">Current Local Currency</div>
          <div>
            {{ localCurrency.name }} ({{ localCurrency.code }}) - Rate:
            {{ getFormatNum(localCurrency.rate) }}
          </div>
        </div>
        <v-btn color="primary" outlined small @click="showSwitchLocalDialog = true">
          <v-icon left>mdi-swap-horizontal</v-icon>
          Switch Local
        </v-btn>
      </div>
    </v-alert>

    <v-dialog v-model="showSwitchLocalDialog" max-width="500">
      <v-card>
        <v-card-title>
          <span class="text-h5">Switch Local Currency</span>
        </v-card-title>
        <v-card-text>
          <v-select v-model="selectedNewLocal" :items="nonLocalCurrencies" item-text="displayName" item-value="id"
            label="Select New Local Currency" outlined :rules="[(v) => !!v || 'Please select a currency']"></v-select>
          <v-alert type="warning" class="mt-3" dense text>
            <strong>Warning:</strong> This will change your base currency for all exchange rate calculations.
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="showSwitchLocalDialog = false">Cancel</v-btn>
          <v-btn color="primary" text @click="switchLocalCurrency" :disabled="!selectedNewLocal"
            :loading="switchingLocal">Switch</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player v-if="guidelineDialog" @close-dialog="guidelineDialog = false" youtube-link="5zESPW16wgY">
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-dialog v-model="currencyDialogForm" persistent max-width="700px">
      <currency-form v-if="currencyDialogForm" @reload-data="handleReloadData" :isCreate="isCreate" :key="componentKey"
        :recordId="currencySelected" @close-dialog="handleCloseDialog">
      </currency-form>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="12" sm="6">
            <v-chip-group v-model="currencyTypeFilter" mandatory color="primary" class="mb-2">
              <v-chip value="all" small>All</v-chip>
              <v-chip value="local" small color="success" text-color="white">Local</v-chip>
              <v-chip value="foreign" small>Foreign</v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details clearable
              outlined dense />
          </v-col>
          <v-col cols="6">
            <v-btn large outlined color="primary" @click="createRecord" rounded>
              <v-icon left>mdi-plus</v-icon>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn large outlined color="primary" @click="loadData" rounded :loading="isloading">
              <v-icon left>mdi-cloud-download</v-icon>ໂຫຼດຂໍ້ມູນ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>

      <v-divider></v-divider>

      <v-data-table :headers="headers" :items="filteredCurrencyList" :search="search" :loading="isloading"
        class="elevation-1">
        <template v-slot:[`item.code`]="{ item }">
          <div class="d-flex align-center">
            <span class="font-weight-bold">{{ item.code }}</span>
            <v-chip v-if="item.isLocalCCY" x-small color="success" class="ml-2">LOCAL</v-chip>
          </div>
        </template>

        <template v-slot:[`item.rate`]="{ item }">
          <div class="text-center">
            <div class="font-weight-medium">{{ getFormatNum(item.rate) }}</div>
            <div class="caption grey--text">{{ getRateDirection(item) }}</div>
          </div>
        </template>

        <template v-slot:[`item.exchangeDirection`]="{ item }">
          <v-chip :color="item.exchangeDirection === 'local_to_foreign' ? 'blue' : 'orange'" small dark>
            <v-icon left small>
              {{ item.exchangeDirection === 'local_to_foreign' ? 'mdi-arrow-right' : 'mdi-arrow-left' }}
            </v-icon>
            {{ getDirectionLabel(item) }}
          </v-chip>
        </template>

        <template v-slot:[`item.isActive`]="{ item }">
          <v-chip :color="item.isActive ? 'success' : 'error'" x-small dark>
            {{ item.isActive ? 'Active' : 'Inactive' }}
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex">
            <v-btn icon color="primary" small @click="viewRecord(item)">
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon color="info" small @click="openAudit(item)">
              <v-icon small>mdi-history</v-icon>
            </v-btn>
            <v-btn v-if="!item.isLocalCCY" icon color="success" small @click="quickSetAsLocal(item)">
              <v-icon small>mdi-home-plus</v-icon>
            </v-btn>
            <v-btn v-if="!item.isLocalCCY" icon color="error" small @click="confirmDelete(item)">
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Confirm Delete</v-card-title>
        <v-card-text>
          Are you sure you want to delete <strong>{{ currencyToDelete?.name }}</strong>?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" text @click="deleteCurrency">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Audit Trail Dialog -->
    <v-dialog v-model="auditDialog" max-width="900">
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-history</v-icon>
          ປະຫວັດການປ່ຽນແປງ (Audit Trail)
          <v-spacer></v-spacer>
          <v-btn icon dark @click="auditDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pt-4">
          <v-data-table
            :headers="auditHeaders"
            :items="auditLogs"
            :loading="isAuditLoading"
            class="elevation-1"
            show-expand
            single-expand
            :expanded.sync="expandedAudit"
          >
            <template v-slot:[`item.auditDate`]="{ item }">
              {{ formatDateTime(item.auditDate) }}
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <v-chip small :color="getActionColor(item.action)" dark label>
                {{ item.action }}
              </v-chip>
            </template>
            <template v-slot:[`item.user`]="{ item }">
              {{ item.user ? item.user.cus_name : 'Unknown' }}
            </template>

            <!-- Expansion Slot for Details -->
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length" class="bg-grey-lighten-4 pa-0">
                <v-card flat color="grey lighten-4">
                  <v-card-text>
                    <div class="subtitle-2 font-weight-bold mb-2 primary--text">ລາຍລະອຽດການປ່ຽນແປງ (Change Details)</div>
                    <v-simple-table dense class="transparent">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">ຟິວ (Field)</th>
                            <th class="text-left">ກ່ອນ (Before/From)</th>
                            <th class="text-center" width="50"></th>
                            <th class="text-left">ຫຼັງ (After/To)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="change in getAuditDiff(item)" :key="change.field">
                            <td class="font-weight-medium">{{ formatFieldName(change.field) }}</td>
                            <td>
                              <v-chip x-small color="red lighten-5" class="red--text text--darken-2" label>{{ change.from }}</v-chip>
                            </td>
                            <td class="text-center"><v-icon small>mdi-arrow-right</v-icon></td>
                            <td>
                              <v-chip x-small color="green lighten-5" class="green--text text--darken-2" label>{{ change.to }}</v-chip>
                            </td>
                          </tr>
                          <tr v-if="getAuditDiff(item).length === 0">
                            <td colspan="4" class="text-center grey--text py-2">ບໍ່ມີຂໍ້ມູນການປ່ຽນແປງ (No specific field changes detected)</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </td>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import CurrencyForm from '~/components/CurrencyForm.vue'

export default {
  components: { CurrencyForm },
  data() {
    return {
      guidelineDialog: false,
      isloading: false,
      currencyDialogForm: false,
      currencyList: [],
      localCurrency: null,
      search: '',
      currencyTypeFilter: 'all',
      isCreate: true,
      currencySelected: 0,
      componentKey: 0,
      showSwitchLocalDialog: false,
      selectedNewLocal: null,
      switchingLocal: false,
      deleteDialog: false,
      currencyToDelete: null,
      headers: [
        { text: '#', value: 'pk', width: '80px' },
        { text: 'ລະຫັດ', value: 'code', width: '120px' },
        { text: 'ຊື່', value: 'name' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'rate', align: 'center' },
        { text: 'ທິດທາງ', value: 'exchangeDirection', align: 'center' },
        { text: 'ສະຖານະ', value: 'isActive', width: '100px' },
        { text: 'Actions', value: 'actions', sortable: false, width: '180px' }
      ],
      // Audit Trail
      auditDialog: false,
      auditLogs: [],
      isAuditLoading: false,
      expandedAudit: [],
      auditHeaders: [
        { text: 'ວັນທີ (Date)', value: 'auditDate', sortable: true },
        { text: 'ການກະທຳ (Action)', value: 'action' },
        { text: 'ຜູ້ໃຊ້ (User)', value: 'user' },
        { text: 'ໝາຍເຫດ (Reason)', value: 'reason' },
        { text: '', value: 'data-table-expand' },
      ]
    }
  },
  computed: {
    filteredCurrencyList() {
      if (this.currencyTypeFilter === 'local') return this.currencyList.filter(c => c.isLocalCCY)
      if (this.currencyTypeFilter === 'foreign') return this.currencyList.filter(c => !c.isLocalCCY)
      return this.currencyList
    },
    nonLocalCurrencies() {
      return this.currencyList.filter(c => !c.isLocalCCY && c.isActive).map(c => ({
        id: c.id, displayName: `${c.name} (${c.code})`
      }))
    }
  },
  async created() {
    await this.loadData()
    await this.loadLocalCurrency()
  },
  methods: {
    getFormatNum(val) { return getFormatNum(val) },
    getRateDirection(item) {
      const localCode = this.localCurrency?.code || 'LOCAL'
      return item.exchangeDirection === 'local_to_foreign'
        ? `1 ${localCode} = ${this.getFormatNum(item.rate)} ${item.code}`
        : `1 ${item.code} = ${this.getFormatNum(item.rate)} ${localCode}`
    },
    getDirectionLabel(item) {
      const localCode = this.localCurrency?.code || 'LOCAL'
      return item.exchangeDirection === 'local_to_foreign' ? `${localCode} → ${item.code}` : `${item.code} → ${localCode}`
    },
    async loadData() {
      this.isloading = true
      try {
        const res = await this.$axios.get('api/currency/findAll')
        this.currencyList = res.data.map(i => ({ ...i, pk: i.id }))
      } catch (e) { swalError2(this.$swal, 'Error', 'Load failed') }
      this.isloading = false
    },
    async loadLocalCurrency() {
      try {
        const res = await this.$axios.get('api/currency/findLocalCurrency')
        this.localCurrency = res.data
      } catch (e) { this.localCurrency = null }
    },
    async switchLocalCurrency() {
      if (!this.selectedNewLocal) return
      this.switchingLocal = true
      try {
        await this.$axios.post('api/currency/switchLocalCurrency', { newLocalCurrencyId: this.selectedNewLocal })
        await this.loadData(); await this.loadLocalCurrency()
        swalSuccess(this.$swal, 'Success', 'Local currency switched')
        this.showSwitchLocalDialog = false
      } catch (e) { swalError2(this.$swal, 'Error', 'Failed') }
      this.switchingLocal = false
    },
    async quickSetAsLocal(item) {
      try {
        await this.$axios.post('api/currency/switchLocalCurrency', { newLocalCurrencyId: item.id })
        await this.loadData(); await this.loadLocalCurrency()
        swalSuccess(this.$swal, 'Success', `${item.name} set as Local`)
      } catch (e) { swalError2(this.$swal, 'Error', 'Failed') }
    },
    confirmDelete(item) { this.currencyToDelete = item; this.deleteDialog = true },
    async deleteCurrency() {
      try {
        await this.$axios.delete(`api/currency/delete/${this.currencyToDelete.id}`)
        await this.loadData()
        swalSuccess(this.$swal, 'Deleted', 'Success')
      } catch (e) { swalError2(this.$swal, 'Error', 'Delete failed') }
      this.deleteDialog = false
    },
    handleReloadData() { this.loadData(); this.loadLocalCurrency() },
    handleCloseDialog() { this.currencyDialogForm = false },
    createRecord() { this.isCreate = true; this.currencySelected = 0; this.componentKey++; this.currencyDialogForm = true },
    viewRecord(item) { this.isCreate = false; this.currencySelected = item.id; this.componentKey++; this.currencyDialogForm = true },
    async fetchAuditTrail(currencyId) {
      this.isAuditLoading = true
      try {
        const res = await this.$axios.get(`api/currency/audit/${currencyId}`)
        this.auditLogs = res.data.data || []
      } catch (er) {
        swalError2(this.$swal, 'Error', 'Could not load audit data: ' + er.message)
      } finally {
        this.isAuditLoading = false
      }
    },
    openAudit(item) {
      this.auditLogs = []
      this.auditDialog = true
      this.expandedAudit = []
      this.fetchAuditTrail(item.id)
    },
    formatDateTime(val) {
      if (!val) return '-'
      return new Date(val).toLocaleString('en-GB')
    },
    getActionColor(action) {
      const colors = {
        'CREATE': 'success',
        'UPDATE': 'info',
        'DELETE': 'error'
      }
      return colors[action] || 'grey'
    },
    getAuditDiff(item) {
      const currentSnapshot = item.recordData || {};
      let nextSnapshot = {};

      // Find the index of this item in the sorted audit logs
      const actualIndex = this.auditLogs.findIndex(log => log.id === item.id);

      if (actualIndex === 0) {
        // This is the latest audit record, compare with current state in the list
        const currency = this.currencyList.find(c => c.id === item.currencyId);
        nextSnapshot = currency || {};
      } else if (actualIndex > 0) {
        // Compare with the one created AFTER this one (which is index - 1 in DESC order)
        const nextLog = this.auditLogs[actualIndex - 1];
        nextSnapshot = nextLog ? (nextLog.recordData || {}) : {};
      }

      if (item.action === 'CREATE') {
        const trackedFields = ['code', 'name', 'rate', 'isActive', 'isLocalCCY', 'exchangeDirection'];
        return trackedFields
          .filter(k => currentSnapshot[k] !== undefined)
          .map(k => ({
            field: k,
            from: '-',
            to: (currentSnapshot[k] === null || currentSnapshot[k] === undefined) ? '-' : currentSnapshot[k]
          }));
      }

      const trackedFields = ['code', 'name', 'rate', 'isActive', 'isLocalCCY', 'exchangeDirection'];
      const changes = [];

      trackedFields.forEach(field => {
        const oldVal = currentSnapshot[field];
        const newVal = nextSnapshot[field];

        if (oldVal != newVal && newVal !== undefined) {
          changes.push({
            field,
            from: (oldVal === null || oldVal === undefined) ? '-' : oldVal,
            to: (newVal === null || newVal === undefined) ? '-' : newVal
          });
        }
      });

      return changes;
    },
    formatFieldName(field) {
      const mapping = {
        code: 'ລະຫັດ (Code)',
        name: 'ຊື່ (Name)',
        rate: 'ອັດຕາແລກປ່ຽນ (Rate)',
        isActive: 'ສະຖານະ (Active)',
        isLocalCCY: 'ສະກຸນເງິນຫຼັກ (Local CCY)',
        exchangeDirection: 'ທິດທາງແລກປ່ຽນ (Exchange Direction)'
      };
      return mapping[field] || field;
    }
  }
}
</script>
<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

.gap-1>*+* {
  margin-left: 4px;
}

/* Additional styles for better error handling */
.retry-section {
  text-align: center;
  padding: 40px 20px;
}

.empty-state {
  padding: 60px 20px;
  text-align: center;
}

/* Loading overlay improvements */
.v-data-table__wrapper {
  position: relative;
  min-height: 300px;
}
</style>