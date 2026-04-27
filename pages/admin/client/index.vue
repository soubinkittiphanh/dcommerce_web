<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການ ລູກຄ້າ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
      <v-chip class="pa-5" color="secondary" label text-color="white" @click="loyaltyGuideDialog = true">
        <v-icon start class="mr-1">mdi-settings-transfer</v-icon>
        <h3>ຄູ່ມືລະບົບ / System Guide</h3>
      </v-chip>
    </div>
    <SystemGuideDialog v-model="loyaltyGuideDialog" />
    <v-dialog v-model="dialogCustomer" max-width="1024">
      <CustomerForm :isEdit="!isEdit" :customerId="selectedCustomerId" @close-dialog="handleEvent"
        @reload-data="loadData" :key="componentKey" />
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="OEGkC4zNgpY">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="dialogAudit" max-width="900">
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>ປະຫວັດການແກ້ໄຂ / Audit Trail</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialogAudit = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pa-4">
          <v-data-table :headers="auditHeaders" :items="auditList" :loading="loadingAudit" class="elevation-1">
            <template v-slot:[`item.action`]="{ item }">
              <v-chip :color="getActionColor(item.action)" small label text-color="white">
                {{ item.action }}
              </v-chip>
            </template>
            <template v-slot:[`item.auditDate`]="{ item }">
              {{ formatDate(item.auditDate) }}
            </template>
            <template v-slot:[`item.changes`]="{ item }">
              <v-dialog v-model="item.showDetail" width="800">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn x-small color="info" v-bind="attrs" v-on="on" outlined>
                    <v-icon left x-small>mdi-compare</v-icon>
                    View Changes
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class=" grey lighten-2">
                    ລາຍລະອຽດການປ່ຽນແປງ / Change Details
                  </v-card-title>
                  <v-card-text class="pa-4">
                    <div v-if="item.action === 'CREATE'" class="text-center pa-4">
                      <v-alert type="success" outlined>
                        Record created with initial data
                      </v-alert>
                      <pre class="json-display text-left">{{ JSON.stringify(item.after, null, 2) }}</pre>
                    </div>
                    <div v-else-if="item.changes.length > 0">
                      <v-simple-table dense>
                        <thead>
                          <tr>
                            <th class="text-left">Field</th>
                            <th class="text-left">Before</th>
                            <th class="text-left">After</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="change in item.changes" :key="change.field">
                            <td class="font-weight-bold">{{ change.field }}</td>
                            <td class="red--text text--lighten-1">{{ change.oldValue }}</td>
                            <td class="green--text text--darken-1">{{ change.newValue }}</td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </div>
                    <div v-else class="text-center pa-4">
                      <v-icon large color="grey">mdi-alert-circle-outline</v-icon>
                      <p>No field-level changes detected (possibly metadata only)</p>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="item.showDetail = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogLoyalty" max-width="900">
      <v-card>
        <v-toolbar color="warning" dark>
          <v-toolbar-title>ປະຫວັດຄະແນນສະສົມ / Loyalty History</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialogLoyalty = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pa-4">
          <v-data-table :headers="loyaltyHeaders" :items="loyaltyList" :loading="loadingLoyalty" class="elevation-1">
            <template v-slot:[`item.points`]="{ item }">
              <span :class="item.points > 0 ? 'green--text font-weight-bold' : 'red--text font-weight-bold'">
                {{ item.points > 0 ? '+' : '' }}{{ item.points }}
              </span>
            </template>
            <template v-slot:[`item.type`]="{ item }">
              <v-chip :color="getLoyaltyTypeColor(item.type)" x-small label text-color="white">
                {{ item.type }}
              </v-chip>
            </template>
            <template v-slot:[`item.createdAt`]="{ item }">
              {{ formatDate(item.createdAt) }}
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-card>
      <div class="pa-2">
        <v-row>
          <v-col cols="6">
            <!-- <v-btn block size="large" variant="outlined" @click="createItem" class="primary" rounded>
              ເພີ່ມລູກຄ້າ<span class="mdi mdi-account-box"></span>
            </v-btn> -->
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-btn size="large" variant="outlined" @click="createItem" class="primary" rounded>
              <span class="mdi mdi-plus-box"></span>
              ເພີ່ມລູກຄ້າ
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-account-box"></span>
              ດຶງລາຍງານ
            </v-btn>
            <!-- <v-btn @click="loadData"> ດຶງລາຍງານ </v-btn> -->
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <v-card-text>
        <v-data-table v-if="customerList" :headers="headers" :search="search" :items="filterEntries">
          <template v-slot:top>
            <v-toolbar flat class="pa-4">
              <v-row>
                <v-col cols="8">
                </v-col>
                <v-col cols="4" justify="end">
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-checkbox v-model.number="showActive" label="ສະແດງລາຍການ inActive"></v-checkbox>
                  </v-row>
                </v-col>
              </v-row>
            </v-toolbar>
          </template>
          <template v-slot:[`item.function`]="{ item }">

            <v-btn color="primary" text @click="editItem(item.id); wallet = true">

              <i class="fa-regular fa-pen-to-square"></i>
            </v-btn>

            <v-btn color="grey darken-1" text @click="viewAudit(item)">
              <v-icon>mdi-history</v-icon>
            </v-btn>

            <v-btn color="amber darken-2" text @click="viewLoyalty(item)">
              <v-icon>mdi-star-circle</v-icon>
            </v-btn>

          </template>
          <template v-slot:[`item.telephone`]="{ item }">
            {{ item.telephone }}
            <v-btn color="primary" text @click="whatsappLink(item)">
              <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
            </v-btn>

          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import CustomerForm from '@/components/customer/CustomerForm.vue';
import SystemGuideDialog from '@/components/common/SystemGuideDialog.vue';

export default {
  components: {
    CustomerForm,
    SystemGuideDialog
  },
  computed: {
    filterEntries() {
      console.log(`Show inActive = ${this.showActive}`);
      if (this.showActive) return this.customerList
      return this.customerList.filter(el => el['isActive'] == true) || []
    }
  },
  data() {
    return {
      guidelineDialog: false,
      loyaltyGuideDialog: false,
      showActive: false,
      userId: "",
      componentKey: 1,
      selectedCustomerId: 0,
      dialogCustomer: false,
      customerList: [],
      search: '',
      isEdit: false,
      isloading: false,
      whatsappContactLink: "",
      headers: [
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        { text: 'company', align: 'center', value: 'company' },
        { text: 'email', align: 'center', value: 'email' },
        { text: 'telephone', align: 'center', value: 'telephone' },
        // { text: 'active', align: 'center', value: 'isAtive' },
        {
          text: 'ລາຍລະອຽດ',
          align: 'end',
          value: 'function',
          sortable: false,
        },
      ],
      auditHeaders: [
        { text: 'ວັນທີ', value: 'auditDate' },
        { text: 'ຜູ້ແກ້ໄຂ', value: 'user.name' },
        { text: 'ການກະທຳ', value: 'action' },
        { text: 'ເຫດຜົນ', value: 'reason' },
        { text: 'ການປ່ຽນແປງ', value: 'changes', sortable: false },
      ],
      dialogAudit: false,
      auditList: [],
      loadingAudit: false,
      dialogLoyalty: false,
      loyaltyList: [],
      loadingLoyalty: false,
      loyaltyHeaders: [
        { text: 'ວັນທີ', value: 'createdAt' },
        { text: 'ຄະແນນ', value: 'points', align: 'center' },
        { text: 'ປະເພດ', value: 'type', align: 'center' },
        { text: 'ໝາຍເຫດ', value: 'remark' },
      ],
      wallet: false,
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    whatsappLink(item) {
      // const completeTel = tel.substring(tel.length-7);
      const tel = item.telephone.trim();

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    handleEvent() {
      this.dialogCustomer = false;

    },
    editItem(clientId) {
      this.componentKey += 1;
      this.selectedCustomerId = clientId;
      this.dialogCustomer = true;
      this.isEdit = false;
    },
    createItem() {
      this.componentKey += 1;
      this.dialogCustomer = true;
      this.isEdit = true;
    },
    async loadData() {
      this.isloading = true
      await this.$axios.get("api/client/find").then(response => {
        this.customerList = []
        for (const iterator of response.data) {
          this.customerList.push(iterator)
        }
      }).catch(error => {
        console.log("Error ", error);
      })
      this.isloading = false
    },
    async viewAudit(item) {
      this.selectedCustomerId = item.id;
      this.dialogAudit = true;
      this.loadingAudit = true;
      try {
        const response = await this.$axios.get(`api/client/audit/${item.id}`);
        const rawAudits = response.data;

        // Process audits to show before/after comparison
        this.auditList = rawAudits.map((audit, index) => {
          let before = null;
          let after = null;

          if (audit.action === 'CREATE') {
            after = audit.recordData;
          } else if (audit.action === 'UPDATE') {
            before = audit.recordData;
            // The 'after' state for an UPDATE is either the 'before' of the next audit 
            // entry in time, or the current state if this is the latest audit.
            after = (index === 0) ? item : rawAudits[index - 1].recordData;
          } else if (audit.action === 'DELETE') {
            before = audit.recordData;
          }

          return {
            ...audit,
            before,
            after,
            changes: this.getDifferences(before, after),
            showDetail: false
          };
        });
      } catch (error) {
        console.error("Error fetching audit trail:", error);
      } finally {
        this.loadingAudit = false;
      }
    },
    getDifferences(before, after) {
      if (!before || !after) return [];
      const diffs = [];
      const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
      const ignoreKeys = ['createdAt', 'updatedAt', 'updateTimestamp', 'id'];

      keys.forEach(key => {
        if (ignoreKeys.includes(key)) return;
        if (JSON.stringify(before[key]) !== JSON.stringify(after[key])) {
          diffs.push({
            field: key,
            oldValue: before[key] === null ? 'null' : before[key],
            newValue: after[key] === null ? 'null' : after[key]
          });
        }
      });
      return diffs;
    },
    getActionColor(action) {
      switch (action) {
        case 'CREATE': return 'success';
        case 'UPDATE': return 'info';
        case 'DELETE': return 'error';
        default: return 'grey';
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    async viewLoyalty(item) {
      this.selectedCustomerId = item.id;
      this.dialogLoyalty = true;
      this.loadingLoyalty = true;
      try {
        const response = await this.$axios.get(`api/client/loyalty-transactions/${item.id}`);
        this.loyaltyList = response.data;
      } catch (error) {
        console.error("Error fetching loyalty transactions:", error);
      } finally {
        this.loadingLoyalty = false;
      }
    },
    getLoyaltyTypeColor(type) {
      switch (type) {
        case 'AWARDED': return 'success';
        case 'REDEEMED': return 'orange';
        case 'CANCELLED': return 'red text--accent-4';
        case 'ADJUSTED': return 'blue-grey';
        default: return 'grey';
      }
    }
  }
}
</script>
