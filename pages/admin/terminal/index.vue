<template>
  <div class="text-left">
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍການ Terminal ໃຊ້ຂາຍເຄື່ອງ</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="entryForm" max-width="1024">
      <terminal-form @reload-data="loadData()
      entryForm = false" :isCreate="isCreate" :key="componentKey" :recordId="entrySelected"
        @close-dialog="entryForm = false">
      </terminal-form>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6" class="d-flex align-center">
            <v-switch
              v-model="showInactive"
              label="ສະແດງ Terminal ທີ່ປິດໃຊ້ງານ (Show Inactive)"
              color="primary"
              dense
              hide-details
              class="mt-0 pt-0"
            ></v-switch>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="createRecord" class="primary" rounded>
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ໂຫຼດຂໍ້ມູນ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table v-if="terminalList" :headers="headers" :search="search" :items="filteredTerminalList">
        <template v-slot:[`item.rate`]="{ item }">
          {{ getFormatNum(item.rate) }}
        </template>
        <template v-slot:[`item.bankAccount`]="{ item }">
          <v-chip v-if="item.bankAccount" small color="info" outlined>
            <v-icon left x-small>mdi-bank</v-icon>
            {{ item.bankAccount.accountName }}
          </v-chip>
          <span v-else class="grey--text">No mapping</span>
        </template>
        <template v-slot:[`item.isActive`]="{ item }">
          <v-chip v-if="item.isActive" color="success" small label>
            ເປີດໃຊ້ງານ
          </v-chip>
          <v-chip v-else color="error" small label>
            ປິດໃຊ້ງານ
          </v-chip>
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" text @click="viewRecord(item)">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-btn color="info" text @click="openAudit(item)">
            <v-icon small>mdi-history</v-icon>
          </v-btn>
        </template>
      </v-data-table>

    </v-card>

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
          <v-data-table :headers="auditHeaders" :items="auditLogs" :loading="isAuditLoading" class="elevation-1"
            show-expand single-expand :expanded.sync="expandedAudit">
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
            <template v-slot:expanded-item="{ headers, item, index }">
              <td :colspan="headers.length" class="bg-grey-lighten-4 pa-0">
                <v-card flat color="grey lighten-4">
                  <v-card-text>
                    <div class=" font-weight-bold mb-2 primary--text">ລາຍລະອຽດການປ່ຽນແປງ (Change Details)</div>
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
                              <v-chip x-small color="red lighten-5" class="red--text text--darken-2" label>{{
                                change.from }}</v-chip>
                            </td>
                            <td class="text-center"><v-icon small>mdi-arrow-right</v-icon></td>
                            <td>
                              <v-chip x-small color="green lighten-5" class="green--text text--darken-2" label>{{
                                change.to }}</v-chip>
                            </td>
                          </tr>
                          <tr v-if="getAuditDiff(item).length === 0">
                            <td colspan="4" class="text-center grey--text py-2">ບໍ່ມີຂໍ້ມູນການປ່ຽນແປງ (No specific field
                              changes detected)</td>
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
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'

import TerminalForm from '~/components/TerminalForm.vue'
export default {
  components: { TerminalForm },
  middleware: 'auths',
  data() {
    return {
      componentKey: 0,
      entryForm: false,
      isCreate: true,
      dialog: false,
      isloading: false,
      search: '',
      terminalList: [],
      showInactive: false,
      entrySelected: '',
      headers: [
        { text: '#', align: 'center', value: 'pk', sortable: true },
        { text: 'ລະຫັດ', align: 'center', value: 'code', sortable: true },
        { text: 'ຊື່', align: 'center', value: 'name', sortable: true },
        { text: 'ບັນຊີທະນາຄານ (Bank Account)', align: 'center', value: 'bankAccount', sortable: true },
        { text: 'ສະຖານະ (Status)', align: 'center', value: 'isActive', sortable: true },
        { text: 'Actions', align: 'end', value: 'id', sortable: false },
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
      ],
    }
  },
  async created() {
    await this.loadData()
  },
  computed: {
    filteredTerminalList() {
      if (this.showInactive) {
        return this.terminalList
      }
      return this.terminalList.filter((item) => item.isActive)
    },
  },

  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    viewRecord(item) {
      this.componentKey += 1;
      this.entrySelected = item.id
      this.isCreate = false
      this.entryForm = true;
    },
    createRecord() {
      this.componentKey += 1;
      this.entrySelected = 0
      this.isCreate = true
      this.entryForm = true;
    },
    async loadData() {
      if (this.isloading) return
      this.isloading = true
      await this.$axios
        .get(`api/terminal/find`)
        .then((res) => {
          // ****** Clear Old Data
          this.terminalList = []
          for (const iterator of res.data) {
            iterator.pk = iterator['id']
            this.terminalList.push(iterator)
          }
          console.log("====> " + this.terminalList.length);
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },
    async fetchAuditTrail(terminalId) {
      this.isAuditLoading = true
      try {
        const res = await this.$axios.get(`api/terminal/audit/${terminalId}`)
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
        // This is the latest audit record, compare with current terminal state
        const terminal = this.terminalList.find(t => t.id === item.terminalId);
        nextSnapshot = terminal || {};
      } else if (actualIndex > 0) {
        // Compare with the one created AFTER this one (which is index - 1 in DESC order)
        const nextLog = this.auditLogs[actualIndex - 1];
        nextSnapshot = nextLog ? (nextLog.recordData || {}) : {};
      }

      if (item.action === 'CREATE') {
        const trackedFields = ['code', 'name', 'description', 'saleRate', 'isActive', 'locationId', 'bankAccountId'];
        return trackedFields
          .filter(k => currentSnapshot[k] !== undefined)
          .map(k => ({
            field: k,
            from: '-',
            to: (currentSnapshot[k] === null || currentSnapshot[k] === undefined) ? '-' : currentSnapshot[k]
          }));
      }

      const trackedFields = ['code', 'name', 'description', 'saleRate', 'isActive', 'locationId', 'bankAccountId'];
      const changes = [];

      trackedFields.forEach(field => {
        const oldVal = currentSnapshot[field];
        const newVal = nextSnapshot[field];

        // Only add to diff if there's a real difference
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
        description: 'ລາຍລະອຽດ (Description)',
        saleRate: 'ອັດຕາການຂາຍ (Sale Rate)',
        isActive: 'ສະຖານະ (Status)',
        locationId: 'ສະຖານທີ່ (Location ID)',
        bankAccountId: 'ບັນຊີທະນາຄານ (Bank Account ID)'
      };
      return mapping[field] || field;
    }
  },
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
</style>
