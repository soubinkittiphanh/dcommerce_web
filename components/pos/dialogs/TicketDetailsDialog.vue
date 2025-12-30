<template>
  <v-dialog v-model="dialog" max-width="1200" persistent scrollable>
    <v-card>
      <v-card-title class="primary white--text">
        <v-icon left color="white">mdi-receipt</v-icon>
        ລາຍລະອຽດບິນ - ເລກທີ {{ ticketData?.id }}
        <v-spacer></v-spacer>
        <v-btn 
          icon 
          color="white" 
          @click="closeDialog"
          small
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      
      <v-card-text class="pa-4" v-if="ticketData">
        <!-- Basic Information Row -->
        <v-row>
          <v-col cols="12" md="6">
            <v-card outlined class="pa-3 mb-3">
              <h4 class="mb-3">
                <v-icon left color="primary">mdi-information</v-icon>
                ຂໍ້ມູນພື້ນຖານ
              </h4>
              <div class="info-row">
                <strong>ວັນທີ:</strong> {{ formatDate(ticketData.bookingDate) }}
              </div>
              <div class="info-row">
                <strong>ເວລາສ້າງ:</strong> {{ formatDateTime(ticketData.createdAt) }}
              </div>
              <div class="info-row">
                <strong>ລູກຄ້າ:</strong> 
                <v-chip small :color="getClientColor()">
                  {{ ticketData.client?.name || 'Walk-in Customer' }}
                </v-chip>
              </div>
              <div class="info-row" v-if="ticketData.client?.telephone">
                <strong>ເບີໂທ:</strong> {{ ticketData.client.telephone }}
              </div>
              <div class="info-row">
                <strong>ສາຂາ:</strong> {{ ticketData.location?.name }}
              </div>
              <div class="info-row">
                <strong>ພະນັກງານ:</strong> {{ ticketData.user?.cus_name }}
              </div>
            </v-card>
          </v-col>
          
          <v-col cols="12" md="6">
            <v-card outlined class="pa-3 mb-3">
              <h4 class="mb-3">
                <v-icon left color="success">mdi-cash</v-icon>
                ສະຫຼຸບການເງິນ
              </h4>
              <div class="info-row">
                <strong>ຍອດລວມ:</strong> 
                <span class="success--text font-weight-bold">
                  {{ formatNumber(getSubTotal()) }} {{ ticketData.currency?.code || 'LAK' }}
                </span>
              </div>
              <div class="info-row">
                <strong>ສ່ວນຫລຸດ:</strong> 
                <span class="error--text">
                  {{ formatNumber(ticketData.discount) }} {{ ticketData.currency?.code || 'LAK' }}
                </span>
              </div>
              <v-divider class="my-2"></v-divider>
              <div class="info-row">
                <strong>ຈຳນວນຊຳລະ:</strong> 
                <span class="primary--text font-weight-bold text-h6">
                  {{ formatNumber(ticketData.total) }} {{ ticketData.currency?.code || 'LAK' }}
                </span>
              </div>
              <div class="info-row">
                <strong>ອັດຕາແລກປ່ຽນ:</strong> {{ ticketData.exchangeRate || 1 }}
              </div>
              <div class="info-row">
                <strong>ສະກຸນເງິນ:</strong> {{ ticketData.currency?.name }}
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Line Items Section -->
        <v-card outlined class="mb-4">
          <v-card-title class="py-2">
            <v-icon left>mdi-format-list-bulleted</v-icon>
            ລາຍການສິນຄ້າ
            <v-spacer></v-spacer>
            <!-- GIFT INDICATOR IN HEADER -->
            <div class="d-flex align-center">
              <v-chip color="info" small class="mr-2">
                {{ getTotalItems() }} ລາຍການ | {{ getTotalQuantity() }} ຫົວໜ່ວຍ
              </v-chip>
              <v-chip 
                v-if="hasGiftItems()" 
                color="pink" 
                small 
                dark
                class="gift-header-chip"
              >
                <v-icon left small>mdi-gift</v-icon>
                {{ getGiftItems() }} ຂອງຂວັນ
                <v-icon right small>mdi-heart</v-icon>
              </v-chip>
            </div>
          </v-card-title>
          
          <v-data-table
            :headers="lineItemHeaders"
            :items="ticketData.lines || []"
            hide-default-footer
            disable-pagination
            class="elevation-0"
            :items-per-page="-1"
          >
            <template v-slot:item.product="{ item }">
              <div class="d-flex align-center">
                <div class="flex-grow-1">
                  <div class="d-flex align-center">
                    <div class="font-weight-medium">{{ item.product?.pro_name }}</div>
                    <!-- GIFT INDICATOR -->
                    <v-chip 
                      v-if="item.isGift" 
                      color="pink" 
                      text-color="white" 
                      x-small 
                      class="ml-2"
                    >
                      <v-icon left x-small>mdi-gift</v-icon>
                      ຂອງຂວັນ
                    </v-chip>
                  </div>
                  <div class="caption text--secondary">ID: {{ item.product?.pro_id }}</div>
                  <div class="caption text--secondary" v-if="item.product?.pro_desc">
                    {{ item.product.pro_desc }}
                  </div>
                </div>
                <!-- GIFT ICON -->
                <div v-if="item.isGift" class="ml-2">
                  <v-icon color="pink" size="24">mdi-gift-outline</v-icon>
                </div>
              </div>
            </template>
            
            <template v-slot:item.quantity="{ item }">
              <div class="text-center">
                <v-chip 
                  small 
                  :color="item.isGift ? 'pink' : 'blue'" 
                  dark
                  :class="{ 'gift-quantity': item.isGift }"
                >
                  <v-icon small left v-if="item.isGift">mdi-gift</v-icon>
                  {{ item.quantity }}
                </v-chip>
                <div v-if="item.isGift" class="caption pink--text mt-1">
                  <v-icon x-small color="pink">mdi-heart</v-icon>
                  ຟຣີ
                </div>
              </div>
            </template>
            
            <template v-slot:item.unitRate="{ item }">
              <div class="text-center">{{ item.unitRate }}</div>
            </template>
            
            <template v-slot:item.price="{ item }">
              <div class="text-right">
                <div v-if="item.isGift" class="gift-price">
                  <div class="text-decoration-line-through text--secondary caption">
                    {{ formatNumber(item.price) }} {{ ticketData.currency?.code || 'LAK' }}
                  </div>
                  <div class="pink--text font-weight-bold">
                    <v-icon small color="pink">mdi-gift</v-icon>
                    ຟຣີ
                  </div>
                </div>
                <div v-else>
                  {{ formatNumber(item.price) }} {{ ticketData.currency?.code || 'LAK' }}
                </div>
              </div>
            </template>
            
            <template v-slot:item.discount="{ item }">
              <div class="text-right">
                <span v-if="item.discount > 0" class="error--text">
                  -{{ formatNumber(item.discount) }} {{ ticketData.currency?.code || 'LAK' }}
                </span>
                <span v-else class="text--secondary">-</span>
              </div>
            </template>
            
            <template v-slot:item.total="{ item }">
              <div class="text-right">
                <div v-if="item.isGift" class="gift-total">
                  <div class="text-decoration-line-through text--secondary caption">
                    {{ formatNumber(item.total) }} {{ ticketData.currency?.code || 'LAK' }}
                  </div>
                  <div class="pink--text font-weight-bold">
                    <v-icon small color="pink">mdi-heart</v-icon>
                    ຟຣີ ({{ formatNumber(item.total) }} ບາດ)
                  </div>
                </div>
                <div v-else>
                  <strong class="success--text">
                    {{ formatNumber(item.total) }} {{ ticketData.currency?.code || 'LAK' }}
                  </strong>
                </div>
              </div>
            </template>
          </v-data-table>
          
          <!-- Line Items Summary -->
          <v-card-text class="py-2">
            <v-row class="text-center">
              <v-col cols="6" md="2">
                <div class="text-h6 primary--text">{{ getTotalItems() }}</div>
                <div class="caption">ລາຍການທັງໝົດ</div>
              </v-col>
              <v-col cols="6" md="2">
                <div class="text-h6 primary--text">{{ getTotalQuantity() }}</div>
                <div class="caption">ຈຳນວນທັງໝົດ</div>
              </v-col>
              <!-- GIFT STATISTICS -->
              <v-col cols="6" md="2">
                <div class="text-h6 pink--text">{{ getGiftItems() }}</div>
                <div class="caption">
                  <v-icon x-small color="pink">mdi-gift</v-icon>
                  ຂອງຂວັນ
                </div>
              </v-col>
              <v-col cols="6" md="2">
                <div class="text-h6 pink--text">{{ formatNumber(getGiftValue()) }}</div>
                <div class="caption">
                  <v-icon x-small color="pink">mdi-heart</v-icon>
                  ມູນຄ່າຂອງຂວັນ
                </div>
              </v-col>
              <v-col cols="6" md="2">
                <div class="text-h6 success--text">{{ formatNumber(getSubTotal()) }}</div>
                <div class="caption">ຍອດລວມກ່ອນຫລຸດ</div>
              </v-col>
              <v-col cols="6" md="2">
                <div class="text-h6" :class="ticketData.discount > 0 ? 'error--text' : 'text--secondary'">
                  {{ ticketData.discount > 0 ? `-${formatNumber(ticketData.discount)}` : '0' }}
                </div>
                <div class="caption">ສ່ວນຫລຸດ</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Gift Summary Card (shows only when gifts are present) -->
        <v-card 
          v-if="hasGiftItems()" 
          outlined 
          class="mb-4 gift-summary-card"
          style="background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%); border: 2px solid #e91e63;"
        >
          <v-card-title class="py-2 pink--text">
            <v-icon left color="pink">mdi-gift</v-icon>
            ສະຫຼຸບຂອງຂວັນ
            <v-spacer></v-spacer>
            <v-icon color="pink">mdi-heart</v-icon>
          </v-card-title>
          
          <v-card-text class="py-2">
            <v-row class="text-center">
              <v-col cols="6" md="3">
                <div class="text-h5 pink--text">{{ getGiftItems() }}</div>
                <div class="caption">ລາຍການຂອງຂວັນ</div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-h5 pink--text">{{ getGiftQuantity() }}</div>
                <div class="caption">ຈຳນວນຂອງຂວັນ</div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-h5 pink--text">{{ formatNumber(getGiftValue()) }}</div>
                <div class="caption">ມູນຄ່າຂອງຂວັນ (LAK)</div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-h5 pink--text">{{ getGiftPercentage().toFixed(1) }}%</div>
                <div class="caption">ເປີເຊັນຂອງຂວັນ</div>
              </v-col>
            </v-row>
            
            <v-divider class="my-2"></v-divider>
            
            <div class="text-center pink--text">
              <v-icon color="pink">mdi-information</v-icon>
              <strong>ຂອງຂວັນບໍ່ຄິດລາຄາ - ມູນຄ່າສະແດງເພື່ອການອ້າງອີງເທົ່ານັ້ນ</strong>
            </div>
          </v-card-text>
        </v-card>
        <v-card outlined class="mb-4">
          <v-card-title class="py-2">
            <v-icon left>mdi-credit-card-multiple</v-icon>
            ລາຍລະອຽດການຊຳລະ
            <v-spacer></v-spacer>
            <v-chip 
              :color="getPaymentTypeColor()" 
              small 
              dark
            >
              {{ getPaymentTypeLabel() }}
            </v-chip>
          </v-card-title>
          
          <v-data-table
            :headers="paymentHeaders"
            :items="getPaymentDetails()"
            hide-default-footer
            disable-pagination
            class="elevation-0"
            :items-per-page="-1"
          >
            <template v-slot:item.paymentMethod="{ item }">
              <v-chip :color="getPaymentMethodColor(item.code)" small dark>
                <v-icon left small>{{ getPaymentMethodIcon(item.code) }}</v-icon>
                {{ item.name }}
              </v-chip>
            </template>
            
            <template v-slot:item.amount="{ item }">
              <div class="text-right">
                <strong>{{ formatNumber(item.amount) }} {{ ticketData.currency?.code || 'LAK' }}</strong>
              </div>
            </template>
            
            <template v-slot:item.percentage="{ item }">
              <div style="min-width: 120px;">
                <v-progress-linear
                  :value="item.percentage"
                  height="20"
                  :color="getPaymentMethodColor(item.code)"
                  class="my-1"
                  rounded
                >
                  <small class="white--text font-weight-bold">
                    {{ item.percentage.toFixed(1) }}%
                  </small>
                </v-progress-linear>
              </div>
            </template>
            
            <template v-slot:item.createdAt="{ item }">
              <div class="caption">{{ item.createdAt }}</div>
            </template>
          </v-data-table>
        </v-card>

        <!-- Additional Information -->
        <v-row v-if="ticketData.remark || ticketData.referenceNo">
          <v-col cols="12">
            <v-card outlined class="pa-3">
              <h4 class="mb-3">
                <v-icon left>mdi-note-text</v-icon>
                ຂໍ້ມູນເພີ່ມເຕີມ
              </h4>
              <div v-if="ticketData.referenceNo" class="info-row">
                <strong>ເລກອ້າງອີງ:</strong> {{ ticketData.referenceNo }}
              </div>
              <div v-if="ticketData.remark" class="info-row">
                <strong>ໝາຍເຫດ:</strong> {{ ticketData.remark }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="pa-4">
        <v-btn 
          color="grey" 
          text 
          @click="closeDialog"
        >
          <v-icon left>mdi-close</v-icon>
          ປິດ
        </v-btn>
        
        <v-spacer></v-spacer>
        
        <v-btn 
          color="primary" 
          @click="printTicket" 
          v-if="showPrintButton"
        >
          <v-icon left>mdi-printer</v-icon>
          ພິມບິນ
        </v-btn>
        
        <v-btn 
          color="success" 
          @click="printPaymentDetails" 
          outlined
        >
          <v-icon left>mdi-receipt</v-icon>
          ພິມລາຍລະອຽດການຊຳລະ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TicketDetailsDialog',
  
  props: {
    value: {
      type: Boolean,
      default: false
    },
    ticketData: {
      type: Object,
      default: () => null
    },
    showPrintButton: {
      type: Boolean,
      default: true
    },
    companyLogo: {
      type: String,
      default: ''
    },
    ticketCommon: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      lineItemHeaders: [
        { 
          text: 'ສິນຄ້າ', 
          value: 'product', 
          width: '35%',
          sortable: false 
        },
        { 
          text: 'ຈຳນວນ', 
          value: 'quantity', 
          width: '10%',
          align: 'center'
        },
        { 
          text: 'ອັດຕາ', 
          value: 'unitRate', 
          width: '8%',
          align: 'center'
        },
        { 
          text: 'ລາຄາຕໍ່ຫົວໜ່ວຍ', 
          value: 'price', 
          width: '15%',
          align: 'right'
        },
        { 
          text: 'ສ່ວນຫລຸດ', 
          value: 'discount', 
          width: '12%',
          align: 'right'
        },
        { 
          text: 'ຍອດລວມ', 
          value: 'total', 
          width: '15%',
          align: 'right'
        }
      ],
      
      paymentHeaders: [
        {
          text: 'ວິທີການຊຳລະ',
          align: 'left',
          value: 'paymentMethod',
          sortable: false,
          width: '30%'
        },
        {
          text: 'ຈຳນວນເງິນ',
          align: 'right', 
          value: 'amount',
          sortable: false,
          width: '25%'
        },
        {
          text: 'ເປີເຊັນ',
          align: 'center',
          value: 'percentage',
          sortable: false,
          width: '25%'
        },
        {
          text: 'ເວລາຊຳລະ',
          align: 'center',
          value: 'createdAt',
          sortable: false,
          width: '20%'
        }
      ]
    }
  },

  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },

    ...mapGetters([
      'findAllPayment'
    ])
  },

  methods: {
    closeDialog() {
      this.$emit('input', false)
      this.$emit('close')
    },

    // Line Items Calculations
    getTotalItems() {
      if (!this.ticketData?.lines) return 0
      return this.ticketData.lines.length
    },
    
    getTotalQuantity() {
      if (!this.ticketData?.lines) return 0
      return this.ticketData.lines.reduce((sum, line) => sum + line.quantity, 0)
    },
    
    getSubTotal() {
      if (!this.ticketData?.lines) return 0
      return this.ticketData.lines.reduce((sum, line) => sum + line.total, 0)
    },

    // NEW: Gift item statistics
    getGiftItems() {
      if (!this.ticketData?.lines) return 0
      return this.ticketData.lines.filter(line => line.isGift).length
    },

    getGiftQuantity() {
      if (!this.ticketData?.lines) return 0
      return this.ticketData.lines
        .filter(line => line.isGift)
        .reduce((sum, line) => sum + line.quantity, 0)
    },

    getGiftValue() {
      if (!this.ticketData?.lines) return 0
      return this.ticketData.lines
        .filter(line => line.isGift)
        .reduce((sum, line) => sum + line.total, 0)
    },

    hasGiftItems() {
      return this.getGiftItems() > 0
    },

    getGiftPercentage() {
      const totalValue = this.getSubTotal()
      const giftValue = this.getGiftValue()
      return totalValue > 0 ? (giftValue / totalValue) * 100 : 0
    },

    // Payment Analysis
    isMultiPayment() {
      return this.ticketData?.payments && 
             Array.isArray(this.ticketData.payments) && 
             this.ticketData.payments.length > 1
    },

    getPaymentTypeLabel() {
      if (this.isMultiPayment()) {
        return `ຊຳລະຫຼາຍວິທີ (${this.ticketData.payments.length} ວິທີ)`
      } else if (this.ticketData?.payment) {
        return 'ຊຳລະແບບດຽວ'
      }
      return 'ບໍ່ມີຂໍ້ມູນ'
    },

    getPaymentTypeColor() {
      if (this.isMultiPayment()) {
        return 'success'
      } else if (this.ticketData?.payment) {
        return 'primary'
      }
      return 'grey'
    },

    getPaymentDetails() {
      const details = []
      const totalAmount = this.ticketData?.total || 0

      if (this.isMultiPayment()) {
        this.ticketData.payments.forEach(payment => {
          const percentage = totalAmount > 0 ? (payment.amount / totalAmount) * 100 : 0
          details.push({
            code: payment.paymentMethod?.payment_code || 'UNKNOWN',
            name: payment.paymentMethod?.payment_name || 'Unknown',
            amount: payment.amount || 0,
            percentage: percentage,
            createdAt: this.formatDateTime(payment.createdAt)
          })
        })
      } else if (this.ticketData?.payment) {
        details.push({
          code: this.ticketData.payment.payment_code,
          name: this.ticketData.payment.payment_name,
          amount: totalAmount,
          percentage: 100,
          createdAt: this.formatDateTime(this.ticketData.createdAt)
        })
      }

      return details
    },

    getPaymentMethodColor(paymentCode) {
      // Try to find the payment method in store first
      const paymentMethod = this.findAllPayment.find(p => p.payment_code === paymentCode)
      
      // If found in store, use a color based on payment type
      if (paymentMethod) {
        // Generate color based on payment code for consistency
        const colorMap = {
          'CASH': 'green',
          'QR': 'purple',
          'TRANSFER': 'blue',
          'TRANSFER_BCEL': 'blue',
          'BCEL': 'blue',
          'COD': 'orange',
          'CREDIT': 'red',
          'CARD': 'indigo',
          'BANK': 'teal',
          'MOBILE': 'pink'
        }
        
        // Check if exact match exists
        if (colorMap[paymentCode]) {
          return colorMap[paymentCode]
        }
        
        // For other payment codes, generate color based on common keywords
        const code = paymentCode.toUpperCase()
        if (code.includes('CASH') || code.includes('MONEY')) return 'green'
        if (code.includes('QR') || code.includes('SCAN')) return 'purple'
        if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue'
        if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo'
        if (code.includes('COD') || code.includes('DELIVERY')) return 'orange'
        if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink'
        
        // Default color for unknown payment types
        return 'primary'
      }
      
      // Fallback for unknown payment codes
      return 'grey'
    },

    getPaymentMethodIcon(paymentCode) {
      // Try to find the payment method in store first
      const paymentMethod = this.findAllPayment.find(p => p.payment_code === paymentCode)
      
      if (paymentMethod) {
        // Generate icon based on payment code
        const iconMap = {
          'CASH': 'mdi-cash',
          'QR': 'mdi-qrcode',
          'TRANSFER': 'mdi-bank-transfer',
          'TRANSFER_BCEL': 'mdi-bank-transfer',
          'BCEL': 'mdi-bank',
          'COD': 'mdi-truck-delivery',
          'CREDIT': 'mdi-credit-card-outline',
          'CARD': 'mdi-credit-card',
          'BANK': 'mdi-bank',
          'MOBILE': 'mdi-cellphone',
          'WALLET': 'mdi-wallet'
        }
        
        // Check if exact match exists
        if (iconMap[paymentCode]) {
          return iconMap[paymentCode]
        }
        
        // For other payment codes, generate icon based on common keywords
        const code = paymentCode.toUpperCase()
        if (code.includes('CASH') || code.includes('MONEY')) return 'mdi-cash'
        if (code.includes('QR') || code.includes('SCAN')) return 'mdi-qrcode'
        if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'mdi-bank-transfer'
        if (code.includes('CARD') || code.includes('CREDIT')) return 'mdi-credit-card'
        if (code.includes('COD') || code.includes('DELIVERY')) return 'mdi-truck-delivery'
        if (code.includes('MOBILE') || code.includes('PHONE')) return 'mdi-cellphone'
        if (code.includes('WALLET')) return 'mdi-wallet'
        
        // Default icon for unknown payment types
        return 'mdi-cash-multiple'
      }
      
      // Fallback for unknown payment codes
      return 'mdi-help-circle'
    },

    // Utility Methods
    getClientColor() {
      return this.ticketData?.client ? 'success' : 'grey'
    },

    // NEW: Utility method to find payment method details from store
    getPaymentMethodDetails(paymentCode) {
      if (!paymentCode || !this.findAllPayment) return null
      return this.findAllPayment.find(p => p.payment_code === paymentCode) || null
    },

    formatNumber(val) {
      if (val === null || val === undefined) return '0'
      return new Intl.NumberFormat().format(val)
    },

    formatDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },

    formatDateTime(dateString) {
      if (!dateString) return 'N/A'
      const date = new Date(dateString)
      return date.toLocaleString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    },

    // Print Methods
    printTicket() {
      this.$emit('print-ticket', this.ticketData)
    },

    printPaymentDetails() {
      if (!this.ticketData) return
      
      const paymentDetails = this.getPaymentDetails()
      
      let paymentListHtml = ''
      paymentDetails.forEach(payment => {
        paymentListHtml += `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${payment.name}</td>
            <td style="text-align: right; padding: 8px; border-bottom: 1px solid #ddd;">${this.formatNumber(payment.amount)} ${this.ticketData.currency?.code || 'LAK'}</td>
            <td style="text-align: center; padding: 8px; border-bottom: 1px solid #ddd;">${payment.percentage.toFixed(1)}%</td>
          </tr>
        `
      })

      const windowContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>ລາຍລະອຽດການຊຳລະ</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { max-width: 100px; max-height: 100px; object-fit: contain; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; }
            .info-section { margin: 20px 0; }
            .divider { margin: 20px 0; border-top: 2px solid #333; }
            .footer { text-align: center; margin-top: 30px; font-size: 18px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            ${this.companyLogo ? `<img src="${this.companyLogo}" alt="Company Logo" class="logo">` : ''}
            <h2>ລາຍລະອຽດການຊຳລະ</h2>
          </div>
          
          <div class="info-section">
            <h3>ຂໍ້ມູນພື້ນຖານ</h3>
            <p><strong>ເລກບິນ:</strong> ${this.ticketData.id}</p>
            <p><strong>ວັນທີ:</strong> ${this.formatDate(this.ticketData.bookingDate)}</p>
            <p><strong>ລູກຄ້າ:</strong> ${this.ticketData.client?.name || 'Walk-in Customer'}</p>
            <p><strong>ພະນັກງານ:</strong> ${this.ticketData.user?.cus_name || 'N/A'}</p>
            <p><strong>ສາຂາ:</strong> ${this.ticketData.location?.name || 'N/A'}</p>
          </div>

          <div class="divider"></div>

          <div class="info-section">
            <h3>ສະຫຼຸບການເງິນ</h3>
            <p><strong>ຍອດລວມກ່ອນຫລຸດ:</strong> ${this.formatNumber(this.getSubTotal())} ${this.ticketData.currency?.code || 'LAK'}</p>
            <p><strong>ສ່ວນຫລຸດ:</strong> ${this.formatNumber(this.ticketData.discount)} ${this.ticketData.currency?.code || 'LAK'}</p>
            <p><strong style="font-size: 18px;">ຈຳນວນຊຳລະ:</strong> <strong style="font-size: 18px;">${this.formatNumber(this.ticketData.total)} ${this.ticketData.currency?.code || 'LAK'}</strong></p>
          </div>

          <div class="divider"></div>

          <div class="info-section">
            <h3>ວິທີການຊຳລະ</h3>
            <table style="border: 1px solid #ddd;">
              <thead>
                <tr style="background-color: #f2f2f2;">
                  <th style="padding: 12px; border: 1px solid #ddd;">ວິທີການ</th>
                  <th style="text-align: right; padding: 12px; border: 1px solid #ddd;">ຈຳນວນ</th>
                  <th style="text-align: center; padding: 12px; border: 1px solid #ddd;">ເປີເຊັນ</th>
                </tr>
              </thead>
              <tbody>
                ${paymentListHtml}
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>ຂອບໃຈສຳລັບການຊື້ເຮືອ!</p>
            <p>THANK YOU!</p>
          </div>
        </body>
        </html>
      `

      const printWin = window.open('', '', 'width=800,height=600')
      printWin.document.open()
      printWin.document.write(windowContent)
      printWin.document.close()

      setTimeout(() => {
        printWin.print()
        printWin.close()
      }, 1000)

      this.$emit('print-payment-details', this.ticketData)
    }
  }
}
</script>

<style scoped>
.info-row {
  margin-bottom: 8px;
  padding: 4px 0;
}

.info-row strong {
  display: inline-block;
  min-width: 120px;
  color: #424242;
}

/* Enhanced styling for dialog sections */
.v-card__title {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.v-data-table >>> .v-data-table__wrapper {
  border-radius: 8px;
}

.v-data-table >>> th {
  background-color: #f8f9fa !important;
  color: #495057 !important;
  font-weight: 600 !important;
  font-size: 0.875rem !important;
}

.v-data-table >>> td {
  font-size: 0.875rem;
}

/* Responsive design */
@media (max-width: 600px) {
  .v-dialog {
    margin: 12px;
  }
  
  .info-row strong {
    min-width: 100px;
    font-size: 0.875rem;
  }
  
  .v-data-table >>> th,
  .v-data-table >>> td {
    padding: 8px 4px !important;
    font-size: 0.75rem;
  }
}

/* Custom chip styling */
.v-chip--small {
  height: 24px;
  font-size: 0.75rem;
}

/* Gift item special styling */
.gift-quantity {
  animation: giftPulse 2s infinite;
}

.gift-price, .gift-total {
  position: relative;
}

.gift-price::before, .gift-total::before {
  content: '🎁';
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  animation: giftBounce 3s infinite;
}

/* Gift animations */
@keyframes giftPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(233, 30, 99, 0);
  }
}

@keyframes giftBounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(-50%);
  }
  40% {
    transform: translateY(-60%);
  }
  60% {
    transform: translateY(-55%);
  }
}

/* Enhanced gift indicators */
.v-chip.pink {
  background: linear-gradient(45deg, #e91e63, #ff6ec7) !important;
}

.v-chip.pink .v-icon {
  animation: giftSpin 4s infinite linear;
}

@keyframes giftSpin {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(0deg); }
  35% { transform: rotate(10deg); }
  45% { transform: rotate(-10deg); }
  55% { transform: rotate(5deg); }
  65% { transform: rotate(-5deg); }
  75% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

/* Gift summary card styling */
.gift-summary-card {
  animation: giftGlow 3s infinite alternate;
  position: relative;
  overflow: hidden;
}

.gift-summary-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shimmer 4s infinite;
}

.gift-header-chip {
  animation: giftPulse 2s infinite;
}

@keyframes giftGlow {
  0% {
    box-shadow: 0 0 5px rgba(233, 30, 99, 0.3);
  }
  100% {
    box-shadow: 0 0 20px rgba(233, 30, 99, 0.6);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

/* Progress bar styling */
.v-progress-linear {
  border-radius: 4px;
}

/* Card hover effects */
.v-card--outlined {
  transition: box-shadow 0.2s ease-in-out;
}

.v-card--outlined:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
}
</style>