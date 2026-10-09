<template>
  <div>
    <!-- Loading Overlay -->
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Create/Edit Budget Dialog -->
    <v-dialog v-model="budgetDialog" max-width="600" persistent>
      <v-card>
        <v-card-title class="primary white--text d-flex align-center">
          <v-icon color="white" class="mr-2">mdi-chart-pie</v-icon>
          <span>{{ isEdit ? 'ແກ້ໄຂ' : 'ເພີ່ມ' }}ແຜນງົບປະມານປະຈຳປີ</span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="budgetDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-form ref="budgetForm" v-model="isBudgetFormValid" @submit.prevent="saveBudget">
          <v-card-text class="pa-4">
            <v-container fluid class="pa-0">
              <v-row dense>
                <v-col cols="12" md="8">
                  <v-text-field v-model="budgetForm.name" label="ຊື່ແຜນງົບປະມານ *" outlined dense
                    :rules="requiredRules" prepend-inner-icon="mdi-format-title"
                    placeholder="ຕົວຢ່າງ: ງົບປະມານການຕະຫຼາດ 2026"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field v-model.number="budgetForm.year" type="number" label="ສົກປີ / Fiscal Year *"
                    outlined dense :rules="requiredRules" prepend-inner-icon="mdi-calendar"></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12" md="6">
                  <v-text-field v-model="budgetForm.allocatedAmount" label="ຍອດງົບປະມານທີ່ອະນຸມັດ *" outlined dense
                    :rules="[...requiredRules, ...numberRules]" v-comma-thousand
                    prepend-inner-icon="mdi-cash-multiple"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete v-model="budgetForm.currencyId" :items="currencyList" label="ສະກຸນເງິນ *"
                    item-text="code" item-value="id" outlined dense :rules="requiredRules"
                    prepend-inner-icon="mdi-currency-usd" @change="onBudgetCurrencyChange">
                    <template v-slot:item="{ item }">
                      <v-list-item-content>
                        <v-list-item-title>{{ item.code }} - {{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>Rate: {{ item.rate }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12" md="6">
                  <v-text-field v-model="budgetForm.exchangeRate" label="ອັດຕາແລກປ່ຽນ" outlined dense
                    :rules="numberRules" v-comma-thousand prepend-inner-icon="mdi-calculator"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model.number="budgetForm.thresholdWarningPercent" label="ແຈ້ງເຕືອນເມື່ອໃຊ້ຮອດ (%)"
                    type="number" min="1" max="100" outlined dense prepend-inner-icon="mdi-bell-ring-outline"
                    suffix="%"></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12" md="6">
                  <v-autocomplete v-model="budgetForm.drAccountId" :items="accountList" label="ຜູກກັບບັນຊີລາຍຈ່າຍ (Account)"
                    item-text="displayName" item-value="id" outlined dense clearable
                    prepend-inner-icon="mdi-bank" placeholder="ທຸກບັນຊີລາຍຈ່າຍ ຫຼື ເລືອກສະເພາະ">
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete v-model="budgetForm.ministryId" :items="ministryList" label="ພະແນກ / ໂຄງການ (Ministry)"
                    item-text="ministryName" item-value="id" outlined dense clearable
                    prepend-inner-icon="mdi-domain" placeholder="ເລືອກພະແນກ / ໂຄງການ">
                    <template v-slot:item="{ item }">
                      <v-list-item-content>
                        <v-list-item-title>{{ item.ministryName }}</v-list-item-title>
                        <v-list-item-subtitle v-if="item.ministryCode">{{ item.ministryCode }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12">
                  <v-textarea v-model="budgetForm.remark" label="ໝາຍເຫດ / ລາຍລະອຽດ" rows="2" outlined dense
                    prepend-inner-icon="mdi-note-text-outline"></v-textarea>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12">
                  <v-switch v-model="budgetForm.isActive" label="ສະຖານະການໃຊ້ງານ (Active)" color="success"
                    inset dense hide-details class="mt-0"></v-switch>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions class="pa-4 pt-0">
            <v-btn outlined color="grey" @click="budgetDialog = false">
              ຍົກເລີກ
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit" :loading="isSaving" :disabled="!isBudgetFormValid">
              <v-icon left>mdi-content-save</v-icon>
              {{ isEdit ? 'ອັບເດດ' : 'ບັນທຶກ' }}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <!-- Drilldown Payments Modal -->
    <v-dialog v-model="drilldownDialog" max-width="900" scrollable>
      <v-card v-if="selectedDrilldownBudget">
        <v-card-title class="primary white--text">
          <v-icon color="white" class="mr-2">mdi-format-list-bulleted</v-icon>
          <span>ລາຍການຕັດຈ່າຍງົບປະມານ: {{ selectedDrilldownBudget.name }}</span>
          <v-spacer></v-spacer>
          <v-btn small text dark class="mr-2" @click="handlePrintSingleBudget">
            <v-icon left small>mdi-printer</v-icon>
            ພິມໃບຕັດຈ່າຍ
          </v-btn>
          <v-btn icon dark @click="drilldownDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-4">
          <v-row dense class="mb-3">
            <v-col cols="12" sm="3">
              <div class="text-caption grey--text">ງົບທີ່ອະນຸມັດ:</div>
              <div class="font-weight-bold text-subtitle-1">{{ formatNumber(selectedDrilldownBudget.allocatedAmount) }} {{ selectedDrilldownBudget.currency?.code }}</div>
            </v-col>
            <v-col cols="12" sm="3">
              <div class="text-caption grey--text">ໃຊ້ໄປຕົວຈິງ:</div>
              <div class="font-weight-bold text-subtitle-1 purple--text">{{ formatNumber(selectedDrilldownBudget.spentAmount) }} {{ selectedDrilldownBudget.currency?.code }}</div>
            </v-col>
            <v-col cols="12" sm="3">
              <div class="text-caption grey--text">ງົບເຫຼືອຕົວຈິງ:</div>
              <div class="font-weight-bold text-subtitle-1" :class="selectedDrilldownBudget.remainingAmount < 0 ? 'error--text' : 'success--text'">
                {{ formatNumber(selectedDrilldownBudget.remainingAmount) }} {{ selectedDrilldownBudget.currency?.code }}
              </div>
            </v-col>
            <v-col cols="12" sm="3">
              <div class="text-caption grey--text">ອັດຕາການໃຊ້:</div>
              <v-chip x-small :color="selectedDrilldownBudget.percentSpent > 90 ? 'error' : (selectedDrilldownBudget.percentSpent >= 80 ? 'warning' : 'success')" dark>
                {{ selectedDrilldownBudget.percentSpent }}%
              </v-chip>
            </v-col>
          </v-row>
          <v-divider class="mb-3"></v-divider>

          <v-data-table :headers="drilldownHeaders" :items="selectedDrilldownBudget.payments || []" dense
            class="compact-table" :items-per-page="10">
            <template v-slot:[`item.totalAmount`]="{ item }">
              <div class="text-right font-weight-bold">
                {{ formatNumber(item.totalAmount) }}
              </div>
            </template>
            <template v-slot:[`item.bookingDate`]="{ item }">
              {{ item.bookingDate ? item.bookingDate.split('T')[0] : '' }}
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Main Container -->
    <v-card outlined class="rounded-lg shadow-sm">
      <v-card-title class="pa-4 d-flex align-center grey lighten-5 border-bottom">
        <v-icon color="purple" class="mr-3">mdi-chart-pie</v-icon>
        <div class="d-flex flex-column">
          <span class="text-h6 font-weight-bold grey--text text--darken-3">ຕິດຕາມງົບປະມານປະຈຳປີ (Annual Expense Budget)</span>
          <span class="grey--text text-caption">ຕັ້ງຄ່າແຜນງົບປະມານ ແລະ ຕິດຕາມການຕັດຈ່າຍງົບປະມານແຕ່ລະໝວດໝູ່</span>
        </div>
        <v-spacer></v-spacer>
        <v-btn color="secondary" outlined small class="mr-2" to="/admin/expense">
          <v-icon left small>mdi-arrow-left</v-icon>
          ກັບໄປໜ້າລາຍຈ່າຍ
        </v-btn>
        <v-btn color="info" @click="handlePrintReport" outlined small class="mr-2">
          <v-icon left small>mdi-printer</v-icon>
          ພິມລາຍງານ (Print)
        </v-btn>
        <v-btn color="primary" @click="openCreateBudget" depressed small class="mr-2">
          <v-icon left small>mdi-plus</v-icon>
          ຕັ້ງງົບປະມານໃໝ່ (New Budget)
        </v-btn>
        <v-btn color="secondary" @click="loadData" outlined small :loading="isLoading">
          <v-icon left small>mdi-refresh</v-icon>
          Sync Data
        </v-btn>
      </v-card-title>

      <!-- Filter bar -->
      <v-card-text class="pa-4 grey lighten-4">
        <v-row dense class="align-center">
          <v-col cols="12" sm="4" md="3">
            <v-select v-model="selectedYear" :items="yearList" label="ເລືອກສົກປີ (Fiscal Year)" outlined dense
              hide-details prepend-inner-icon="mdi-calendar" @change="loadData"></v-select>
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <v-text-field v-model="search" label="ຄົ້ນຫາແຜນງົບປະມານ, ພະແນກ..." prepend-inner-icon="mdi-magnify"
              outlined dense hide-details clearable />
          </v-col>
          <v-col cols="12" md="3" class="d-flex align-center">
            <v-switch v-model="showInactive" label="Show Inactive" dense hide-details color="primary" class="mt-0 ml-2"></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>

      <!-- Summary Metrics & Overall Progress -->
      <v-card-text class="pa-4">
        <v-row dense class="mb-4">
          <v-col cols="12" sm="6" md="3">
            <v-card outlined class="metric-card pa-3">
              <div class="grey--text text-caption font-weight-bold">ງົບປະມານທີ່ອະນຸມັດລວມ (Allocated)</div>
              <div class="text-h6 font-weight-black primary--text">
                {{ formatNumber(summaryData.totalAllocated) }}
              </div>
              <div class="text-caption grey--text">{{ summaryData.budgetCount || 0 }} ແຜນງົບປະມານ</div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card outlined class="metric-card pa-3">
              <div class="grey--text text-caption font-weight-bold">ຕັດຈ່າຍງົບແລ້ວ (Budget Spent)</div>
              <div class="text-h6 font-weight-black purple--text">
                {{ formatNumber(summaryData.totalBudgetSpent) }}
              </div>
              <div class="text-caption purple--text font-weight-bold">
                {{ summaryData.overallUtilization }}% ຂອງງົບທັງໝົດ
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card outlined class="metric-card pa-3">
              <div class="grey--text text-caption font-weight-bold">ງົບປະມານຄົງເຫຼືອ (Remaining)</div>
              <div class="text-h6 font-weight-black" :class="summaryData.totalRemaining < 0 ? 'error--text' : 'success--text'">
                {{ formatNumber(summaryData.totalRemaining) }}
              </div>
              <div class="text-caption grey--text">ພ້ອມໃຊ້ງານຕໍ່</div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card outlined class="metric-card pa-3">
              <div class="grey--text text-caption font-weight-bold">ລາຍຈ່າຍ POS ປົກກະຕິ (POS OpEx)</div>
              <div class="text-h6 font-weight-black teal--text">
                {{ formatNumber(summaryData.posExpensesTotal) }}
              </div>
              <div class="text-caption teal--text">{{ summaryData.posPaymentCount || 0 }} ລາຍການທີ່ບໍ່ຕັດງົບ</div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Global Progress Bar -->
        <v-card outlined class="pa-3 grey lighten-5">
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="font-weight-bold text-caption grey--text text--darken-2">
              <v-icon small color="purple" class="mr-1">mdi-speedometer</v-icon>
              ອັດຕາການໃຊ້າງົບປະມານລວມປີ {{ selectedYear }} (Overall Utilization)
            </span>
            <span class="font-weight-black" :class="summaryData.overallUtilization > 90 ? 'error--text' : (summaryData.overallUtilization >= 80 ? 'warning--text' : 'success--text')">
              {{ summaryData.overallUtilization }}%
            </span>
          </div>
          <v-progress-linear :value="summaryData.overallUtilization" height="12" rounded
            :color="summaryData.overallUtilization > 90 ? 'error' : (summaryData.overallUtilization >= 80 ? 'warning' : 'success')">
          </v-progress-linear>
        </v-card>
      </v-card-text>

      <!-- Budgets Data Table -->
      <v-data-table :headers="tableHeaders" :items="filteredBudgets" :search="search" dense
        class="compact-table" :items-per-page="15">
        <template v-slot:[`item.name`]="{ item }">
          <div>
            <span class="font-weight-bold primary--text">{{ item.name }}</span>
            <div class="grey--text text-caption" v-if="item.expenseAccount || item.ministry">
              {{ item.expenseAccount ? item.expenseAccount.accountName : '' }}
              {{ item.ministry ? `(${item.ministry.name})` : '' }}
            </div>
          </div>
        </template>

        <template v-slot:[`item.allocatedAmount`]="{ item }">
          <div class="text-right font-weight-bold">
            {{ formatNumber(item.allocatedAmount) }}
          </div>
        </template>

        <template v-slot:[`item.spentAmount`]="{ item }">
          <div class="text-right font-weight-bold purple--text">
            {{ formatNumber(item.spentAmount) }}
          </div>
        </template>

        <template v-slot:[`item.remainingAmount`]="{ item }">
          <div class="text-right font-weight-bold" :class="item.remainingAmount < 0 ? 'error--text' : 'success--text'">
            {{ formatNumber(item.remainingAmount) }}
          </div>
        </template>

        <template v-slot:[`item.percentSpent`]="{ item }">
          <div class="d-flex align-center" style="min-width: 140px;">
            <v-progress-linear :value="item.percentSpent" height="8" rounded class="mr-2"
              :color="item.isOverBudget ? 'error' : (item.isWarning ? 'warning' : 'success')">
            </v-progress-linear>
            <span class="text-caption font-weight-bold" :class="item.isOverBudget ? 'error--text' : (item.isWarning ? 'warning--text' : 'grey--text text--darken-2')">
              {{ item.percentSpent }}%
            </span>
          </div>
        </template>

        <template v-slot:[`item.currency.code`]="{ item }">
          <v-chip x-small outlined color="secondary" label>{{ item.currency ? item.currency.code : '' }}</v-chip>
        </template>

        <template v-slot:[`item.isActive`]="{ item }">
          <v-chip x-small :color="item.isActive ? 'success' : 'grey'" outlined label>
            {{ item.isActive ? 'Active' : 'Inactive' }}
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon small color="purple" v-bind="attrs" v-on="on" @click="openDrilldown(item)">
                <v-icon small>mdi-format-list-bulleted</v-icon>
              </v-btn>
            </template>
            <span>ເບິ່ງລາຍການຕັດຈ່າຍ ({{ item.paymentCount || 0 }})</span>
          </v-tooltip>
          <v-btn icon small color="primary" @click="editBudget(item)">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon small :color="item.isActive ? 'warning' : 'success'" v-bind="attrs" v-on="on" @click="toggleStatus(item)">
                <v-icon small>{{ item.isActive ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
              </v-btn>
            </template>
            <span>{{ item.isActive ? 'Deactivate' : 'Activate' }}</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { printAnnualBudgetReport, printSingleBudgetDrilldownReport } from '~/common/annualBudgetPrintTemplate'
import { mapGetters } from 'vuex'

export default {
  directives: { commaThousand },
  data() {
    const currentYear = new Date().getFullYear();
    return {
      isLoading: false,
      isSaving: false,
      selectedYear: currentYear,
      yearList: [currentYear - 1, currentYear, currentYear + 1, currentYear + 2],
      search: "",
      showInactive: false,
      budgetList: [],
      accountList: [],
      ministryList: [],
      localCurrencyList: [],
      summaryData: {
        totalAllocated: 0,
        totalBudgetSpent: 0,
        totalRemaining: 0,
        overallUtilization: 0,
        posExpensesTotal: 0,
        posPaymentCount: 0,
        budgetCount: 0
      },

      // Create / Edit modal state
      budgetDialog: false,
      isEdit: false,
      isBudgetFormValid: false,
      budgetForm: {
        id: null,
        name: '',
        year: currentYear,
        allocatedAmount: '',
        currencyId: 1,
        exchangeRate: 1,
        thresholdWarningPercent: 80,
        drAccountId: null,
        ministryId: null,
        remark: '',
        isActive: true
      },

      // Drilldown modal state
      drilldownDialog: false,
      selectedDrilldownBudget: null,

      requiredRules: [v => !!v || 'ຕ້ອງໃສ່ຂໍ້ມູນ'],
      numberRules: [
        v => !v || !isNaN(parseFloat(v.toString().replace(/,/g, ''))) || 'ຕ້ອງເປັນຕົວເລກ',
        v => !v || parseFloat(v.toString().replace(/,/g, '')) >= 0 || 'ຕ້ອງຫຼາຍກວ່າ ຫຼື ເທົ່າກັບ 0'
      ],

      tableHeaders: [
        { text: 'ຊື່ແຜນງົບປະມານ', align: 'start', value: 'name', sortable: true },
        { text: 'ປີ', align: 'center', value: 'year' },
        { text: 'ງົບທີ່ອະນຸມັດ', align: 'end', value: 'allocatedAmount' },
        { text: 'ໃຊ້ໄປແລ້ວ', align: 'end', value: 'spentAmount' },
        { text: 'ງົບເຫຼືອຕົວຈິງ', align: 'end', value: 'remainingAmount' },
        { text: 'ອັດຕາການໃຊ້', align: 'center', value: 'percentSpent', sortable: true },
        { text: 'ສະກຸນ', align: 'center', value: 'currency.code' },
        { text: 'ສະຖານະ', align: 'center', value: 'isActive' },
        { text: 'ຈັດການ', align: 'end', value: 'actions', sortable: false }
      ],

      drilldownHeaders: [
        { text: 'ວັນທີ', align: 'center', value: 'bookingDate' },
        { text: 'ເລກອ້າງອີງ', align: 'center', value: 'paymentNumber' },
        { text: 'ຜູ້ຮັບ', align: 'start', value: 'payee' },
        { text: 'ຈຳນວນເງິນ', align: 'end', value: 'totalAmount' },
        { text: 'ເນື້ອໃນລາຍການ', align: 'start', value: 'notes' }
      ]
    }
  },

  computed: {
    ...mapGetters(['user', 'findAllCompany', 'findAllCurrency']),
    currencyList() {
      const list = this.findAllCurrency
      if (Array.isArray(list) && list.length > 0) return list
      if (list && Array.isArray(list.data) && list.data.length > 0) return list.data
      if (Array.isArray(this.localCurrencyList) && this.localCurrencyList.length > 0) return this.localCurrencyList
      return []
    },
    filteredBudgets() {
      if (this.showInactive) {
        return this.budgetList
      }
      return this.budgetList.filter(b => b.isActive !== false)
    }
  },

  async mounted() {
    await Promise.all([
      this.loadCurrencies(),
      this.loadAccounts(),
      this.loadMinistries(),
      this.loadData()
    ])
  },

  methods: {
    formatNumber(val) {
      if (val === null || val === undefined || isNaN(val)) return '0'
      return new Intl.NumberFormat('lo-LA').format(val)
    },

    async loadCurrencies() {
      try {
        const response = await this.$axios.get('/api/currency/findAll')
        const rawData = Array.isArray(response.data) ? response.data : (response.data?.data || [])
        if (Array.isArray(rawData) && rawData.length > 0) {
          this.localCurrencyList = rawData
        }
      } catch (err) {
        console.error('Failed to load currencies', err)
      }
    },

    async loadAccounts() {
      try {
        const response = await this.$axios.get('/api/account/find')
        const rawData = Array.isArray(response.data) ? response.data : (response.data?.data || [])
        this.accountList = rawData
          .filter(a => a.accountType === 'Expense' || a.accountType === 'Asset')
          .map(a => ({
            id: a.id,
            displayName: `${a.accountName} (${a.accountNumber})`
          }))
      } catch (err) {
        console.error('Failed to load accounts', err)
        this.accountList = []
      }
    },

    async loadMinistries() {
      try {
        const response = await this.$axios.get('/api/ministries')
        const rawData = response.data
        if (Array.isArray(rawData)) {
          this.ministryList = rawData
        } else if (rawData && Array.isArray(rawData.data)) {
          this.ministryList = rawData.data
        } else if (rawData && Array.isArray(rawData.rows)) {
          this.ministryList = rawData.rows
        } else {
          this.ministryList = []
        }
      } catch (err) {
        console.error('Failed to load ministries', err)
        this.ministryList = []
      }
    },

    async loadData() {
      this.isLoading = true
      try {
        const [budgetsRes, summaryRes] = await Promise.all([
          this.$axios.get('/api/expense-budget/find', { params: { year: this.selectedYear } }),
          this.$axios.get(`/api/expense-budget/summary/${this.selectedYear}`)
        ])

        this.budgetList = Array.isArray(budgetsRes.data) ? budgetsRes.data : (budgetsRes.data?.data || [])
        this.summaryData = summaryRes.data || {}
      } catch (error) {
        console.error('Failed to load budget data', error)
      } finally {
        this.isLoading = false
      }
    },

    openCreateBudget() {
      this.isEdit = false
      this.budgetForm = {
        id: null,
        name: '',
        year: this.selectedYear,
        allocatedAmount: '',
        currencyId: this.currencyList[0]?.id || 1,
        exchangeRate: 1,
        thresholdWarningPercent: 80,
        drAccountId: null,
        ministryId: null,
        remark: '',
        isActive: true
      }
      this.budgetDialog = true
    },

    editBudget(item) {
      this.isEdit = true
      this.budgetForm = {
        id: item.id,
        name: item.name,
        year: item.year,
        allocatedAmount: this.formatNumber(item.allocatedAmount),
        currencyId: item.currencyId || item.currency?.id || 1,
        exchangeRate: this.formatNumber(item.exchangeRate || 1),
        thresholdWarningPercent: item.thresholdWarningPercent || 80,
        drAccountId: item.drAccountId,
        ministryId: item.ministryId,
        remark: item.remark || '',
        isActive: item.isActive
      }
      this.budgetDialog = true
    },

    onBudgetCurrencyChange() {
      const cur = this.currencyList.find(c => c.id === this.budgetForm.currencyId)
      if (cur && cur.rate) {
        this.budgetForm.exchangeRate = cur.rate
      }
    },

    async saveBudget() {
      if (!this.$refs.budgetForm.validate() || this.isSaving) return

      this.isSaving = true
      try {
        const payload = {
          ...this.budgetForm,
          allocatedAmount: parseFloat(this.budgetForm.allocatedAmount.toString().replace(/,/g, '') || 0),
          exchangeRate: parseFloat(this.budgetForm.exchangeRate.toString().replace(/,/g, '') || 1)
        }

        if (this.isEdit) {
          await this.$axios.put(`/api/expense-budget/update/${this.budgetForm.id}`, payload)
        } else {
          await this.$axios.post('/api/expense-budget/create', payload)
        }

        swalSuccess(this.$swal, 'ສຳເລັດ', 'ບັນທຶກແຜນງົບປະມານຮຽບຮ້ອຍແລ້ວ')
        this.budgetDialog = false
        await this.loadData()
      } catch (err) {
        swalError2(this.$swal, 'ມີຂໍ້ຜິດພາດ', err.response?.data?.message || err.message)
      } finally {
        this.isSaving = false
      }
    },

    async toggleStatus(item) {
      try {
        await this.$axios.patch(`/api/expense-budget/toggle-status/${item.id}`)
        await this.loadData()
      } catch (err) {
        swalError2(this.$swal, 'Error', err.message)
      }
    },

    async openDrilldown(item) {
      try {
        const response = await this.$axios.get(`/api/expense-budget/find/${item.id}`)
        this.selectedDrilldownBudget = response.data
        this.drilldownDialog = true
      } catch (err) {
        swalError2(this.$swal, 'Error', 'Failed to load drilldown details')
      }
    },

    handlePrintReport() {
      const company = this.findAllCompany && this.findAllCompany.length > 0 ? this.findAllCompany[0] : {}
      printAnnualBudgetReport({
        budgets: this.filteredBudgets,
        summary: this.summaryData,
        fiscalYear: this.selectedYear,
        companyData: company,
        user: typeof this.user === 'object' ? this.user : { name: this.user || 'Admin' }
      })
    },

    handlePrintSingleBudget() {
      if (!this.selectedDrilldownBudget) return
      const company = this.findAllCompany && this.findAllCompany.length > 0 ? this.findAllCompany[0] : {}
      printSingleBudgetDrilldownReport({
        budget: this.selectedDrilldownBudget,
        companyData: company,
        user: typeof this.user === 'object' ? this.user : { name: this.user || 'Admin' }
      })
    }
  }
}
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #e0e0e0 !important;
}

.metric-card {
  background-color: white !important;
  border: 1px solid #e0e0e0 !important;
  transition: all 0.3s ease;
}

.metric-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
  border-color: var(--v-primary-base) !important;
}

.compact-table :deep(th) {
  height: 44px !important;
  font-size: 0.75rem !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #757575 !important;
  background-color: #f8f9fa !important;
  font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.compact-table :deep(td) {
  height: 44px !important;
  font-size: 0.875rem !important;
  font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.text-caption,
.caption,
span.text-caption,
div.text-caption,
p.text-caption,
:deep(.text-caption),
:deep(.caption),
:deep(span.text-caption),
:deep(div.text-caption),
:deep(.text-h6),
:deep(.text-subtitle-1),
:deep(.text-subtitle-2) {
  font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

* {
  font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif;
}
</style>
