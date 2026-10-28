<template>
  <v-card class="mx-auto">
    <!-- Loading Dialog -->
    <v-dialog v-model="isLoading" hide-overlay persistent width="280">
      <v-card>
        <v-card-text class="text-center py-6">
          <v-progress-circular indeterminate color="primary" class="mb-3"></v-progress-circular>
          <div>Processing...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Header -->
    <v-card-title class="d-flex align-center primary white--text">
      <v-icon color="white" class="mr-2">mdi-cash-multiple</v-icon>
      <span>{{ isEdit ? 'ແກ້ໄຂ' : 'ເພີ່ມ' }}ຄ່າໃຊ້ຈ່າຍ</span>
      <v-spacer></v-spacer>
      <v-chip outlined color="white" small>
        {{ formattedDate }}
      </v-chip>
    </v-card-title>

    <!-- Form -->
    <v-form ref="form" v-model="isFormValid" @submit.prevent="submitData">
      <v-card-text class="pa-4">
        <v-container fluid class="pa-0">
          <!-- Row 0: Expense Source Selector (Budget vs POS Operational) -->
          <v-row dense class="mb-3">
            <v-col cols="12">
              <v-card outlined class="pa-3 grey lighten-5">
                <div class="text-caption font-weight-bold grey--text text--darken-2 mb-2">
                  <v-icon small color="primary" class="mr-1">mdi-source-branch</v-icon>
                  ແຫຼ່ງທີ່ມາຂອງລາຍຈ່າຍ (Expense Source)
                </div>
                <v-btn-toggle v-model="form.header.expenseSource" mandatory dense color="primary" class="source-toggle">
                  <v-btn value="POS_SALE" class="px-4">
                    <v-icon left small>mdi-cash-register</v-icon>
                    ລາຍຈ່າຍປົກກະຕິ (POS Operation)
                  </v-btn>
                  <v-btn value="BUDGET" class="px-4">
                    <v-icon left small>mdi-chart-pie</v-icon>
                    ງົບປະມານປະຈຳປີ (Annual Budget)
                  </v-btn>
                </v-btn-toggle>

                <!-- If Budget Source: Budget Selection & Live Headroom Preview -->
                <v-expand-transition>
                  <div v-if="form.header.expenseSource === 'BUDGET'" class="mt-3">
                    <v-row dense class="align-center">
                      <v-col cols="12" md="7">
                        <v-autocomplete v-model="form.header.budgetId" :items="budgetList" label="ເລືອກງົບປະມານປະຈຳປີ *"
                          item-text="displayName" item-value="id" outlined dense :rules="budgetRequiredRules"
                          prepend-inner-icon="mdi-chart-pie" @change="onBudgetChange" :loading="isBudgetLoading"
                          placeholder="ເລືອກແຜນງົບປະມານທີ່ຕ້ອງການຕັດຈ່າຍ...">
                          <template v-slot:item="{ item }">
                            <v-list-item-content>
                              <v-list-item-title class="font-weight-bold">
                                {{ item.name }} ({{ item.year }})
                              </v-list-item-title>
                              <v-list-item-subtitle class="text-caption">
                                ງົບທັງໝົດ: {{ formatNumber(item.allocatedAmount) }} {{ item.currency?.code }} |
                                ເຫຼືອ: {{ formatNumber(item.remainingAmount) }} {{ item.currency?.code }} ({{ item.percentSpent }}% ໃຊ້ແລ້ວ)
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="12" md="5" class="d-flex align-center">
                        <v-btn text small color="primary" @click="loadBudgets">
                          <v-icon left small>mdi-refresh</v-icon>
                          ໂຫຼດງົບປະມານໃໝ່
                        </v-btn>
                      </v-col>
                    </v-row>

                    <!-- Live Headroom Card -->
                    <v-card v-if="selectedBudget" outlined class="pa-3 mt-1 budget-headroom-card"
                      :class="isOverBudget ? 'budget-danger' : (isNearBudget ? 'budget-warning' : 'budget-safe')">
                      <div class="d-flex justify-space-between align-center mb-1">
                        <span class="font-weight-bold text-subtitle-2">
                          <v-icon small :color="isOverBudget ? 'error' : (isNearBudget ? 'warning' : 'success')">
                            {{ isOverBudget ? 'mdi-alert-circle' : (isNearBudget ? 'mdi-alert' : 'mdi-check-circle') }}
                          </v-icon>
                          {{ selectedBudget.name }} (ປີ {{ selectedBudget.year }})
                        </span>
                        <v-chip x-small :color="isOverBudget ? 'error' : (isNearBudget ? 'warning' : 'success')" dark>
                          {{ postUtilizationPercent }}% ຫຼັງຈ່າຍ
                        </v-chip>
                      </div>
                      <v-progress-linear :value="postUtilizationPercent" height="8" rounded
                        :color="isOverBudget ? 'error' : (isNearBudget ? 'warning' : 'success')" class="mb-2">
                      </v-progress-linear>
                      <v-row dense class="text-caption">
                        <v-col cols="6" sm="3">
                          <span class="grey--text">ງົບທັງໝົດ:</span>
                          <div class="font-weight-bold">{{ formatNumber(selectedBudget.allocatedAmount) }} {{ selectedBudget.currency?.code }}</div>
                        </v-col>
                        <v-col cols="6" sm="3">
                          <span class="grey--text">ໃຊ້ໄປແລ້ວ:</span>
                          <div class="font-weight-bold">{{ formatNumber(selectedBudget.spentAmount) }} {{ selectedBudget.currency?.code }}</div>
                        </v-col>
                        <v-col cols="6" sm="3">
                          <span class="grey--text">ງົບເຫຼືອຕົວຈິງ:</span>
                          <div class="font-weight-bold" :class="selectedBudget.remainingAmount < 0 ? 'error--text' : 'success--text'">
                            {{ formatNumber(selectedBudget.remainingAmount) }} {{ selectedBudget.currency?.code }}
                          </div>
                        </v-col>
                        <v-col cols="6" sm="3">
                          <span class="grey--text">ເຫຼືອຫຼັງຈ່າຍນີ້:</span>
                          <div class="font-weight-bold" :class="postRemainingAmount < 0 ? 'error--text' : 'primary--text'">
                            {{ formatNumber(postRemainingAmount) }} {{ selectedBudget.currency?.code }}
                          </div>
                        </v-col>
                      </v-row>
                      <div v-if="isOverBudget" class="mt-2 text-caption error--text font-weight-bold d-flex align-center">
                        <v-icon small color="error" class="mr-1">mdi-alert</v-icon>
                        ແຈ້ງເຕືອນ: ລາຍຈ່າຍນີ້ເກີນງົບປະມານທີ່ເຫຼືອຢູ່ (ເກີນ {{ formatNumber(Math.abs(postRemainingAmount)) }} {{ selectedBudget.currency?.code }})
                      </div>
                    </v-card>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>

          <!-- Row 1: Reference & Date -->
          <v-row dense>
            <v-col cols="12" md="8">
              <v-text-field v-model="form.header.paymentNumber" label="ເລກເອກະສານອ້າງອີງ *" outlined dense
                :rules="requiredRules" prepend-inner-icon="mdi-file-document-outline"
                placeholder="ຕົວຢ່າງ: PAY261008001"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="form.header.bookingDate" type="date" label="ວັນທີ *" outlined dense
                :rules="requiredRules" @change="onDateChange"></v-text-field>
            </v-col>
          </v-row>

          <!-- Row 2: Payee & Description -->
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.header.payee" label="ຜູ້ຮັບການຊຳລະ *" outlined dense :rules="requiredRules"
                prepend-inner-icon="mdi-account-outline" placeholder="ລະບຸຊື່ຜູ້ຮັບເງິນ / ຮ້ານຄ້າ"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.header.notes" label="ເນື້ອໃນການຊຳລະ *" outlined dense :rules="requiredRules"
                prepend-inner-icon="mdi-note-text-outline" placeholder="ລະບຸລາຍລະອຽດການຈ່າຍ"></v-text-field>
            </v-col>
          </v-row>

          <!-- Row 3: Amount, Currency & Rate -->
          <v-row dense>
            <v-col cols="12" md="4">
              <v-text-field v-model="form.header.totalAmount" label="ຈຳນວນເງິນ *" outlined dense
                :rules="[...requiredRules, ...numberRules]" v-comma-thousand
                prepend-inner-icon="mdi-cash" placeholder="0"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-autocomplete v-model="form.header.currencyId" :items="currencyList" label="ສະກຸນເງິນ *" item-text="code"
                item-value="id" outlined dense :rules="requiredRules" @input="currencyChange"
                prepend-inner-icon="mdi-currency-usd">
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.code }} - {{ data.item.name }}</v-list-item-title>
                    <v-list-item-subtitle>Rate: {{ data.item.rate }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="form.header.rate" label="ອັດຕາແລກປ່ຽນ *" outlined dense
                :rules="[...requiredRules, ...numberRules]" v-comma-thousand
                prepend-inner-icon="mdi-calculator"></v-text-field>
            </v-col>
          </v-row>

          <!-- Row 4: Payment Type -->
          <v-row dense>
            <v-col cols="12">
              <v-autocomplete v-model="form.header.paymentId" :items="paymentList" label="ປະເພດການຊຳລະ *"
                item-text="payment_name" item-value="id" outlined dense :rules="requiredRules"
                prepend-inner-icon="mdi-credit-card-outline" placeholder="ເລືອກຮູບແບບການຊຳລະ...">
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.payment_name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ data.item.payment_code }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>

          <!-- Row 5: Accounts -->
          <v-row dense>
            <v-col cols="12" md="6">
              <v-autocomplete v-model="form.header.drAccountId" :items="accountList" label="DR Account (ບັນຊີລາຍຈ່າຍ) *"
                item-text="displayName" item-value="id" outlined dense :rules="requiredRules"
                prepend-inner-icon="mdi-bank-minus" placeholder="ເລືອກບັນຊີລາຍຈ່າຍ...">
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.accountName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ data.item.accountNumber }} - {{ data.item.accountType }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
              <v-autocomplete v-model="form.header.crAccountId" :items="accountList" label="CR Account (ບັນຊີຈ່າຍເງິນ) *"
                item-text="displayName" item-value="id" outlined dense :rules="requiredRules"
                prepend-inner-icon="mdi-bank-plus" placeholder="ເລືອກບັນຊີຈ່າຍເງິນ / ເງິນສົດ / ທະນາຄານ...">
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.accountName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ data.item.accountNumber }} - {{ data.item.accountType }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>

          <!-- Active Status -->
          <v-row dense>
            <v-col cols="12">
              <v-switch v-model="form.header.isActive" label="ສະຖານະການໃຊ້ງານ (Active)" color="success" inset dense
                hide-details class="mt-0"></v-switch>
            </v-col>
          </v-row>

          <!-- Summary Card -->
          <v-card outlined class="mt-4" v-if="calculatedTotal || selectedCurrency">
            <v-card-text class="py-3">
              <div class="d-flex justify-space-between align-center mb-2">
                <div>
                  <div class="grey--text">ຈຳນວນເງິນລາວ</div>
                  <div class="title font-weight-bold">{{ calculatedTotal || '0' }} LAK</div>
                </div>
                <v-chip :color="selectedCurrency && selectedCurrency.code === 'LAK' ? 'success' : 'primary'" small>
                  {{ selectedCurrency ? selectedCurrency.code : 'LAK' }}
                </v-chip>
              </div>

              <!-- Additional Details -->
              <v-divider class="my-2"></v-divider>
              <div class="d-flex justify-space-between grey--text">
                <span>ແຫຼ່ງທີ່ມາ:</span>
                <span class="font-weight-bold" :class="form.header.expenseSource === 'BUDGET' ? 'purple--text' : 'teal--text'">
                  {{ form.header.expenseSource === 'BUDGET' ? 'ງົບປະມານປະຈຳປີ (Annual Budget)' : 'ລາຍຈ່າຍປົກກະຕິ (POS Operation)' }}
                </span>
              </div>
              <div class="d-flex justify-space-between grey--text">
                <span>ອັດຕາແລກປ່ຽນ:</span>
                <span>{{ formatNumber(form.header.rate || 1) }}</span>
              </div>
              <div class="d-flex justify-space-between grey--text" v-if="selectedPaymentMethod">
                <span>ວິທີການຊຳລະ:</span>
                <span>{{ selectedPaymentMethod.payment_name }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-container>
      </v-card-text>

      <!-- Actions -->
      <v-card-actions class="px-4 pb-4">
        <v-btn outlined color="grey" @click="$emit('close-dialog')" :disabled="isLoading">
          <v-icon left>mdi-close</v-icon>
          ປິດໜ້າຕ່າງ
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="primary" :loading="isLoading" :disabled="!isFormValid">
          <v-icon left>mdi-content-save</v-icon>
          {{ isEdit ? 'ອັບເດດ' : 'ບັນທຶກ' }}
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { mapGetters } from 'vuex'

export default {
  props: {
    paymentHeadId: {
      type: Number,
      default: null,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },

  directives: {
    commaThousand
  },

  data() {
    return {
      isLoading: false,
      isBudgetLoading: false,
      isFormValid: false,
      accountList: [],
      paymentList: [],
      budgetList: [],
      localCurrencyList: [],

      // Validation rules
      requiredRules: [
        v => !!v || 'ຕ້ອງໃສ່ຂໍ້ມູນ',
      ],
      budgetRequiredRules: [
        v => (this.form.header.expenseSource !== 'BUDGET' || !!v) || 'ກະລຸນາເລືອກແຜນງົບປະມານ',
      ],
      numberRules: [
        v => !v || !isNaN(parseFloat(v.toString().replace(/,/g, ''))) || 'ຕ້ອງເປັນຕົວເລກ',
        v => !v || parseFloat(v.toString().replace(/,/g, '')) > 0 || 'ຕ້ອງຫຼາຍກວ່າ 0',
      ],

      form: {
        header: {
          bookingDate: new Date().toISOString().substr(0, 10),
          paymentNumber: this.generatePaymentNumber(),
          payee: '',
          paymentId: null,
          currencyId: null,
          rate: 1,
          totalAmount: '',
          notes: '',
          update_user: 1,
          drAccountId: null,
          crAccountId: null,
          expenseSource: 'POS_SALE',
          budgetId: null,
          budgetImpactYear: new Date().getFullYear(),
          isActive: true
        },
      },
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency']),

    currencyList() {
      const list = this.findAllCurrency
      if (Array.isArray(list) && list.length > 0) return list
      if (list && Array.isArray(list.data) && list.data.length > 0) return list.data
      if (Array.isArray(this.localCurrencyList) && this.localCurrencyList.length > 0) return this.localCurrencyList
      return []
    },

    selectedCurrency() {
      return this.currencyList.find(c => c.id === this.form.header.currencyId)
    },

    selectedPaymentMethod() {
      return this.paymentList.find(p => p.id === this.form.header.paymentId)
    },

    selectedDrAccount() {
      return this.accountList.find(a => a.id === this.form.header.drAccountId)
    },

    selectedCrAccount() {
      return this.accountList.find(a => a.id === this.form.header.crAccountId)
    },

    selectedBudget() {
      if (!this.form.header.budgetId) return null
      return this.budgetList.find(b => b.id === this.form.header.budgetId)
    },

    currentParsedAmount() {
      return parseFloat(this.form.header.totalAmount?.toString().replace(/,/g, '') || '0')
    },

    postRemainingAmount() {
      if (!this.selectedBudget) return 0
      return (this.selectedBudget.remainingAmount || 0) - this.currentParsedAmount
    },

    postUtilizationPercent() {
      if (!this.selectedBudget || !this.selectedBudget.allocatedAmount) return 0
      const postSpent = (this.selectedBudget.spentAmount || 0) + this.currentParsedAmount
      return parseFloat(((postSpent / this.selectedBudget.allocatedAmount) * 100).toFixed(1))
    },

    isOverBudget() {
      return this.postRemainingAmount < 0 && this.currentParsedAmount > 0
    },

    isNearBudget() {
      if (!this.selectedBudget) return false
      const threshold = this.selectedBudget.thresholdWarningPercent || 80
      return this.postUtilizationPercent >= threshold && !this.isOverBudget
    },

    formattedDate() {
      return new Date().toLocaleDateString('lo-LA')
    },

    calculatedTotal() {
      const amount = parseFloat(this.form.header.totalAmount?.toString().replace(/,/g, '') || '0')
      const rate = parseFloat(this.form.header.rate?.toString().replace(/,/g, '') || '1')
      if (amount && rate) {
        return new Intl.NumberFormat('lo-LA').format(amount * rate)
      }
      return null
    }
  },

  async mounted() {
    await this.initializeForm()
  },

  methods: {
    generatePaymentNumber() {
      const now = new Date()
      const year = now.getFullYear().toString().slice(-2)
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      const day = now.getDate().toString().padStart(2, '0')
      const time = now.getTime().toString().slice(-4)
      return `PAY${year}${month}${day}${time}`
    },

    async initializeForm() {
      this.isLoading = true
      try {
        await Promise.all([
          this.loadCurrencies(),
          this.loadAccounts(),
          this.loadPaymentMethods(),
          this.loadBudgets(),
        ])

        // Set default currency if available
        if (this.currencyList.length > 0) {
          this.form.header.currencyId = this.currencyList[0].id
          this.currencyChange()
        }

        // Set default payment method
        if (this.paymentList.length > 0) {
          this.form.header.paymentId = this.paymentList[0].id
        }

        if (this.isEdit && this.paymentHeadId) {
          await this.loadPaymentById()
        }
      } catch (error) {
        this.handleError('ການໂຫຼດຂໍ້ມູນລົ້ມເຫລວ', error)
      } finally {
        this.isLoading = false
      }
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
        const rawAccounts = Array.isArray(response.data) ? response.data : (response.data?.data || [])
        this.accountList = rawAccounts.map(account => ({
          id: account.id,
          accountNumber: account.accountNumber,
          accountName: account.accountName,
          accountLLName: account.accountLLName,
          accountType: account.accountType,
          displayName: `${account.accountName} (${account.accountNumber})`,
          isActive: account.isActive
        }))

        // Set default accounts if available
        if (this.accountList.length > 0 && !this.isEdit) {
          this.form.header.drAccountId = this.accountList.find(a => a.id === 15)?.id || this.accountList[0].id
          this.form.header.crAccountId = this.accountList.find(a => a.id === 1)?.id || this.accountList[0].id
        }
      } catch (error) {
        console.error('Failed to load accounts', error)
        this.accountList = []
      }
    },

    async loadPaymentMethods() {
      try {
        const response = await this.$axios.get('/api/paymentMethod/find')
        const rawPayments = Array.isArray(response.data) ? response.data : (response.data?.data || [])
        this.paymentList = rawPayments
      } catch (error) {
        console.error('Failed to load payment methods', error)
        this.paymentList = []
      }
    },

    async loadBudgets() {
      this.isBudgetLoading = true
      try {
        const year = this.form.header.bookingDate ? new Date(this.form.header.bookingDate).getFullYear() : new Date().getFullYear()
        const response = await this.$axios.get('/api/expense-budget/find', {
          params: { year, isActive: true }
        })
        const rawBudgets = Array.isArray(response.data) ? response.data : (response.data?.data || [])
        this.budgetList = rawBudgets.map(b => ({
          ...b,
          displayName: `${b.name} (${b.year}) - ເຫຼືອ: ${this.formatNumber(b.remainingAmount)} ${b.currency?.code || ''}`
        }))
      } catch (error) {
        console.error('Failed to load budgets', error)
        this.budgetList = []
      } finally {
        this.isBudgetLoading = false
      }
    },

    onDateChange() {
      if (this.form.header.bookingDate) {
        const year = new Date(this.form.header.bookingDate).getFullYear()
        this.form.header.budgetImpactYear = year
        this.loadBudgets()
      }
    },

    onBudgetChange() {
      if (this.selectedBudget) {
        this.form.header.budgetImpactYear = this.selectedBudget.year
        // Auto-select currency and account if configured in budget
        if (this.selectedBudget.currencyId) {
          this.form.header.currencyId = this.selectedBudget.currencyId
          this.currencyChange()
        }
        if (this.selectedBudget.drAccountId) {
          this.form.header.drAccountId = this.selectedBudget.drAccountId
        }
      }
    },

    currencyChange() {
      const currency = this.currencyList.find(c => c.id === this.form.header.currencyId)
      if (currency && currency.rate) {
        this.form.header.rate = currency.rate
      }
    },

    async loadPaymentById() {
      try {
        const response = await this.$axios.get(`/api/finanicial/ap/header/find/${this.paymentHeadId}`)
        const data = response.data

        this.form.header = {
          ...data,
          bookingDate: data.bookingDate.split('T')[0],
          totalAmount: this.formatNumber(data.totalAmount),
          expenseSource: data.expenseSource || 'POS_SALE',
          budgetId: data.budgetId || null,
          budgetImpactYear: data.budgetImpactYear || new Date().getFullYear()
        }

        if (this.form.header.expenseSource === 'BUDGET') {
          await this.loadBudgets()
        }
      } catch (error) {
        throw new Error('Failed to load payment data')
      }
    },

    formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) return '0'
      return new Intl.NumberFormat('lo-LA').format(value)
    },

    parseNumber(value) {
      return parseFloat(value?.toString().replace(/,/g, '') || '0')
    },

    async submitData() {
      if (!this.$refs.form.validate() || this.isLoading) return

      // If budget source and over-budget, confirm with user
      if (this.form.header.expenseSource === 'BUDGET' && this.isOverBudget) {
        const result = await this.$swal.fire({
          title: 'ແຈ້ງເຕືອນງົບປະມານເກີນ',
          text: `ລາຍຈ່າຍນີ້ເກີນງົບປະມານທີ່ວາງໄວ້ ${this.formatNumber(Math.abs(this.postRemainingAmount))} ${this.selectedBudget?.currency?.code || ''}. ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການດຳເນີນການຕໍ່?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ຢືນຢັນບັນທຶກ (Proceed)',
          cancelButtonText: 'ຍົກເລີກ'
        })
        if (!result.isConfirmed) return
      }

      this.isLoading = true
      try {
        // Prepare data for submission
        const submitData = {
          ...this.form.header,
          totalAmount: this.parseNumber(this.form.header.totalAmount),
          rate: this.parseNumber(this.form.header.rate),
          budgetId: this.form.header.expenseSource === 'BUDGET' ? this.form.header.budgetId : null
        }

        let response
        if (this.isEdit) {
          response = await this.$axios.put(`/api/finanicial/ap/header/update/${this.paymentHeadId}`, submitData)
        } else {
          response = await this.$axios.post('/api/finanicial/ap/header/create', submitData)
        }

        swalSuccess(this.$swal, 'ສຳເລັດ', 'ດຳເນີນການສຳເລັດແລ້ວ')
        this.$emit('reload')
        this.$emit('close-dialog')

      } catch (error) {
        this.handleError('ການບັນທຶກລົ້ມເຫລວ', error)
      } finally {
        this.isLoading = false
      }
    },

    handleError(title, error) {
      console.error(title, error)
      const message = error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        error.message ||
        'ມີຂໍ້ຜິດພາດເກີດຂຶ້ນ'
      swalError2(this.$swal, title, message)
    }
  }
}
</script>

<style scoped>
.v-card-title {
  position: sticky;
  top: 0;
  z-index: 1;
}

.v-form {
  min-height: 0;
}

.budget-headroom-card {
  transition: all 0.3s ease;
  border-left: 4px solid #1976d2 !important;
}

.budget-safe {
  border-left-color: #4caf50 !important;
  background-color: #f1f8e9 !important;
}

.budget-warning {
  border-left-color: #fb8c00 !important;
  background-color: #fff8e1 !important;
}

.budget-danger {
  border-left-color: #f44336 !important;
  background-color: #ffebee !important;
}

.source-toggle :deep(.v-btn) {
  text-transform: none;
  font-weight: 500;
  font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

* {
  font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif;
}

/* Custom scrollbar */
.v-card-text {
  max-height: 75vh;
  overflow-y: auto;
}

.v-card-text::-webkit-scrollbar {
  width: 6px;
}

.v-card-text::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.v-card-text::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.v-card-text::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>