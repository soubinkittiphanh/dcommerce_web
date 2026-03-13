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
    <v-card-title class="d-flex align-center warning white--text">
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
          <!-- Row 1: Reference & Date -->
          <v-row dense>
            <v-col cols="12" md="8">
              <v-text-field
                v-model="form.header.paymentNumber"
                label="ເລກເອກະສານອ້າງອີງ"
                outlined
                dense
                :rules="requiredRules"
                prepend-inner-icon="mdi-file-document-outline"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.header.bookingDate"
                type="date"
                label="ວັນທີ"
                outlined
                dense
                :rules="requiredRules"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Row 2: Payee & Description -->
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.header.payee"
                label="ຜູ້ຮັບການຊຳລະ"
                outlined
                dense
                :rules="requiredRules"
                prepend-inner-icon="mdi-account-outline"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.header.notes"
                label="ເນື້ອໃນການຊຳລະ"
                outlined
                dense
                :rules="requiredRules"
                prepend-inner-icon="mdi-note-text-outline"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Row 3: Amount, Currency & Rate -->
          <v-row dense>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.header.totalAmount"
                label="ຈຳນວນເງິນ"
                outlined
                dense
                :rules="[...requiredRules, ...numberRules]"
                v-comma-thousand
                prepend-inner-icon="mdi-cash"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-autocomplete
                v-model="form.header.currencyId"
                :items="currencyList"
                label="ສະກຸນເງິນ"
                item-text="code"
                item-value="id"
                outlined
                dense
                :rules="requiredRules"
                @input="currencyChange"
                prepend-inner-icon="mdi-currency-usd"
              >
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.code }} - {{ data.item.name }}</v-list-item-title>
                    <v-list-item-subtitle>Rate: {{ data.item.rate }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.header.rate"
                label="ອັດຕາແລກປ່ຽນ"
                outlined
                dense
                :rules="[...requiredRules, ...numberRules]"
                v-comma-thousand
                prepend-inner-icon="mdi-calculator"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Row 4: Payment Type -->
          <v-row dense>
            <v-col cols="12">
              <v-autocomplete
                v-model="form.header.paymentId"
                :items="paymentList"
                label="ປະເພດການຊຳລະ"
                item-text="payment_name"
                item-value="id"
                outlined
                dense
                :rules="requiredRules"
                prepend-inner-icon="mdi-credit-card-outline"
              >
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
              <v-autocomplete
                v-model="form.header.drAccountId"
                :items="accountList"
                label="DR Account"
                item-text="displayName"
                item-value="id"
                outlined
                dense
                :rules="requiredRules"
                prepend-inner-icon="mdi-bank-minus"
              >
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.accountName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ data.item.accountNumber }} - {{ data.item.accountType }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
              <v-autocomplete
                v-model="form.header.crAccountId"
                :items="accountList"
                label="CR Account"
                item-text="displayName"
                item-value="id"
                outlined
                dense
                :rules="requiredRules"
                prepend-inner-icon="mdi-bank-plus"
              >
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.accountName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ data.item.accountNumber }} - {{ data.item.accountType }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>

          <!-- Summary Card -->
          <v-card outlined class="mt-4" v-if="calculatedTotal || selectedCurrency">
            <v-card-text class="py-3">
              <div class="d-flex justify-space-between align-center mb-2">
                <div>
                  <div class="caption grey--text">ຈຳນວນເງິນລາວ</div>
                  <div class="title font-weight-bold">{{ calculatedTotal || '0' }} LAK</div>
                </div>
                <v-chip :color="selectedCurrency && selectedCurrency.code === 'LAK' ? 'success' : 'primary'" small>
                  {{ selectedCurrency ? selectedCurrency.code : 'LAK' }}
                </v-chip>
              </div>
              
              <!-- Additional Details -->
              <v-divider class="my-2"></v-divider>
              <div class="d-flex justify-space-between caption grey--text">
                <span>ອັດຕາແລກປ່ຽນ:</span>
                <span>{{ formatNumber(form.header.rate || 1) }}</span>
              </div>
              <div class="d-flex justify-space-between caption grey--text" v-if="selectedPaymentMethod">
                <span>ວິທີການຊຳລະ:</span>
                <span>{{ selectedPaymentMethod.payment_name }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-container>
      </v-card-text>

      <!-- Actions -->
      <v-card-actions class="px-4 pb-4">
        <v-btn
          outlined
          color="grey"
          @click="$emit('close-dialog')"
          :disabled="isLoading"
        >
          <v-icon left>mdi-close</v-icon>
          ຍົກເລີກ
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          type="submit"
          color="primary"
          :loading="isLoading"
          :disabled="!isFormValid"
        >
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
import { mapActions, mapGetters } from 'vuex'

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
      isFormValid: false,
      accountList: [],
      paymentList: [],
      
      // Validation rules
      requiredRules: [
        v => !!v || 'ຕ້ອງໃສ່ຂໍ້ມູນ',
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
          isActive: true
        },
      },
    }
  },
  
  computed: {
    ...mapGetters(['findAllCurrency']),
    
    currencyList() {
      return this.findAllCurrency || []
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
          this.loadAccounts(),
          this.loadPaymentMethods(),
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
    
    async loadAccounts() {
      try {
        const response = await this.$axios.get('/api/account/find')
        this.accountList = response.data.map(account => ({
          id: account.id,
          accountNumber: account.accountNumber,
          accountName: account.accountName,
          accountLLName: account.accountLLName,
          accountType: account.accountType,
          displayName: `${account.accountName} (${account.accountNumber})`,
          isActive: account.isActive
        }))
        
        // Set default accounts if available
        if (this.accountList.length > 0) {
          this.form.header.drAccountId = this.accountList.find(a => a.id === 15)?.id || this.accountList[0].id
          this.form.header.crAccountId = this.accountList.find(a => a.id === 1)?.id || this.accountList[0].id
        }
      } catch (error) {
        throw new Error('Failed to load accounts')
      }
    },
    
    async loadPaymentMethods() {
      try {
        const response = await this.$axios.get('/api/paymentMethod/find')
        this.paymentList = response.data
      } catch (error) {
        throw new Error('Failed to load payment methods')
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
          totalAmount: this.formatNumber(data.totalAmount)
        }
      } catch (error) {
        throw new Error('Failed to load payment data')
      }
    },
    
    formatNumber(value) {
      return new Intl.NumberFormat('lo-LA').format(value)
    },
    
    parseNumber(value) {
      return parseFloat(value?.toString().replace(/,/g, '') || '0')
    },
    
    async submitData() {
      if (!this.$refs.form.validate() || this.isLoading) return
      
      this.isLoading = true
      try {
        // Prepare data for submission
        const submitData = {
          ...this.form.header,
          totalAmount: this.parseNumber(this.form.header.totalAmount),
          rate: this.parseNumber(this.form.header.rate)
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

/* Custom scrollbar */
.v-card-text {
  max-height: 70vh;
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

/* Responsive adjustments */

</style>