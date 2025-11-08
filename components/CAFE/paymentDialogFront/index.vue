<template>
  <div>
    <!-- Main Payment Dialog -->
    <v-dialog v-model="showDialog" max-width="800" persistent>
      <v-card>
        <!-- Compact Header -->
        <v-card-title class="primary white--text py-2">
          <v-icon left color="white" size="20">mdi-credit-card</v-icon>
          Payment - Table {{ tableNumber }} Ticket - ID {{ ticketId }}
          <v-spacer></v-spacer>
          <div class="text-h6 font-weight-bold">{{ formatPrice(amount) }}</div>
          <v-btn
            icon
            color="white"
            @click="closeDialog"
            :disabled="actionLoading"
            class="ml-2"
          >
            <v-icon size="20">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <!-- QR Actions Row -->
          <v-row dense class="mb-3">
            <v-col cols="4">
              <v-btn
                block
                @click="showQROnCustomerScreen('manual')"
                :color="isCustomerDisplayOpen() ? 'success' : 'primary'"
                class="text-none"
              >
                <v-icon left size="20">
                  {{ isCustomerDisplayOpen() ? 'mdi-monitor-eye' : 'mdi-monitor-multiple' }}
                </v-icon>
                {{ isCustomerDisplayOpen() ? 'Update Display' : 'Open Display' }}
              </v-btn>
            </v-col>
            <v-col cols="4" v-if="1==0">
              <v-btn
                block
                @click="showQRDialog = true"
                color="deep-purple"
                class="text-none"
              >
                <v-icon left size="20">mdi-qrcode</v-icon>
                Local QR
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn
                block
                @click="closeCustomerDisplayWindow"
                :disabled="!isCustomerDisplayOpen()"
                color="grey"
                class="text-none"
              >
                <v-icon left size="20">mdi-monitor-off</v-icon>
                Close Display
              </v-btn>
            </v-col>
          </v-row>

          <!-- Payment Methods -->
          <div v-if="paymentLoading" class="text-center py-2">
            <v-progress-circular
              size="32"
              color="primary"
              indeterminate
            ></v-progress-circular>
            <div class="caption mt-1">Loading...</div>
          </div>

          <div v-else>
            <div class="subtitle-2 mb-2">
              <v-icon left size="18">mdi-wallet</v-icon>
              Payment Method
            </div>

            <div v-if="paymentMethods.length > 0">
              <v-row dense>
                <v-col
                  v-for="payment in paymentMethods"
                  :key="payment.id"
                  cols="4"
                  class="pa-1"
                >
                  <v-card
                    @click="selectPaymentMethod(payment)"
                    :color="
                      selectedPaymentMethod?.id === payment.id
                        ? getPaymentColor(payment.payment_code)
                        : ''
                    "
                    :class="[
                      'payment-card cursor-pointer text-center',
                      selectedPaymentMethod?.id === payment.id
                        ? 'white--text elevation-3'
                        : 'elevation-1',
                    ]"
                    hover
                    height="70"
                  >
                    <v-card-text class="pa-2">
                      <v-icon
                        :color="
                          selectedPaymentMethod?.id === payment.id
                            ? 'white'
                            : getPaymentColor(payment.payment_code)
                        "
                        size="24"
                      >
                        {{ getPaymentIcon(payment.payment_code) }}
                      </v-icon>
                      <div class="caption font-weight-medium mt-1">
                        {{ payment.payment_name }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <!-- Cash Amount Input (Only show for CASH payments) -->
              <v-expand-transition>
                <div v-if="isCashPayment" class="mt-3">
                  <v-divider class="mb-3"></v-divider>
                  
                  <div class="subtitle-2 mb-2">
                    <v-icon left size="18" color="green">mdi-cash</v-icon>
                    Cash Payment Details
                  </div>

                  <v-row dense>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="cashReceivedFormatted"
                        label="Cash Received"
                        :suffix="'₭'"
                        outlined
                        dense
                        :rules="cashRules"
                        @input="onCashInput"
                        @blur="formatCashDisplay"
                        prepend-inner-icon="mdi-cash-plus"
                        hint="Enter amount received from customer"
                        persistent-hint
                        placeholder="0"
                      ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                      <v-card 
                        :color="changeAmount >= 0 ? 'success' : 'error'"
                        class="pa-3 text-center white--text"
                        :elevation="changeAmount !== 0 ? 3 : 1"
                      >
                        <div class="caption">CHANGE</div>
                        <div class="text-h6 font-weight-bold">
                          {{ formatPrice(Math.abs(changeAmount)) }}
                        </div>
                        <div class="caption" v-if="changeAmount < 0">
                          <v-icon small color="white">mdi-alert</v-icon>
                          Insufficient
                        </div>
                        <div class="caption" v-else-if="changeAmount > 0">
                          <v-icon small color="white">mdi-arrow-up</v-icon>
                          To Return
                        </div>
                        <div class="caption" v-else>
                          <v-icon small color="white">mdi-check</v-icon>
                          Exact Amount
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>

                  <!-- Quick Cash Amount Buttons -->
                  <div class="mt-2">
                    <div class="caption mb-1 grey--text">Quick amounts:</div>
                    <v-chip-group class="quick-cash-chips">
                      <v-chip 
                        v-for="quickAmount in getQuickCashAmounts()"
                        :key="quickAmount"
                        small 
                        outlined 
                        color="success"
                        @click="setCashReceived(quickAmount)"
                        class="ma-1"
                      >
                        {{ formatPrice(quickAmount, false) }}₭
                      </v-chip>
                    </v-chip-group>
                  </div>
                </div>
              </v-expand-transition>
            </div>

            <!-- No Payment Methods -->
            <div v-else>
              <v-alert type="warning" dense class="ma-0">
                No payment methods available
                <v-btn
                  x-small
                  color="warning"
                  class="ml-2"
                  @click="$emit('reload-payment-methods')"
                >
                  Retry
                </v-btn>
              </v-alert>
            </div>
          </div>
        </v-card-text>

        <!-- Compact Actions -->
        <v-card-actions class="pa-3">
          <v-btn text @click="closeDialog" :disabled="actionLoading"
            >Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            @click="confirmPayment"
            :disabled="!isPaymentValid || actionLoading"
            :loading="actionLoading"
            class="text-none"
          >
            <v-icon left size="18">mdi-check</v-icon>
            Process Payment
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Minimal QR Dialog -->
    <v-dialog v-model="showQRDialog" max-width="400" persistent>
      <v-card>
        <v-card-title
          style="background-color: primary !important"
          class="white--text py-2"
        >
          <v-icon left color="white" size="20">mdi-qrcode</v-icon>
          QR Payment
          <v-spacer></v-spacer>
          <div class="font-weight-bold">{{ formatPrice(amount) }}</div>
          <v-btn icon color="white" @click="showQRDialog = false" class="ml-2">
            <v-icon size="20">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4 text-center">
          <!-- QR Code -->
          <v-card
            outlined
            class="pa-2 mb-3"
            style="border-color: primary !important"
          >
            <img
              :src="qrCodeUrl"
              alt="QR Payment Code"
              style="
                width: 200px;
                height: 200px;
                display: block;
                margin: 0 auto;
              "
              @error="onQRError"
            />
          </v-card>

          <!-- Compact Instructions -->
          <div class="caption grey--text mb-3">
            <v-icon small left>mdi-information</v-icon>
            Scan with mobile banking app
          </div>

          <!-- Action Buttons -->
          <v-row dense>
            <v-col cols="4">
              <v-btn
                small
                text
                @click="downloadQR"
                style="color: primary !important"
              >
                <v-icon small>mdi-download</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn
                small
                text
                @click="shareQR"
                style="color: primary !important"
              >
                <v-icon small>mdi-share</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn
                small
                text
                @click="copyQRString"
                style="color: primary !important"
              >
                <v-icon small>{{
                  copied ? 'mdi-check' : 'mdi-content-copy'
                }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'PaymentDialog',
  props: {
    show: { type: Boolean, default: false },
    amount: { type: Number, default: 0 },
    ticketId: { type: Number, default: 0 },
    tableNumber: { type: [String, Number], default: '' },
    paymentMethods: { type: Array, default: () => [] },
    paymentLoading: { type: Boolean, default: false },
    actionLoading: { type: Boolean, default: false },
  },

  data() {
    return {
      qrRefreshInterval: null, // store interval id so we can clear later
      selectedPaymentMethod: null,
      showQRDialog: false,
      copied: false,
      qrString:
        '00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405100005802LA5907KHAMMAO6260011713a321asS321as2250302120713te rminal000010812test remarks63041c9f',
      
      // Cash payment fields
      cashReceived: 0,
      cashReceivedFormatted: '',
      changeAmount: 0,
      cashRules: [
        v => !!this.cashReceived || 'Cash received amount is required',
        v => this.cashReceived >= 0 || 'Amount must be positive',
        v => this.cashReceived >= this.amount || `Insufficient amount (minimum: ${this.formatPrice(this.amount)})`
      ],

      // Customer display window reference
      customerDisplayWindow: null
    }
  },
  
  computed: {
    showDialog: {
      get() {
        return this.show
      },
      set(value) {
        if (!value) this.closeDialog()
      },
    },

    qrCodeUrl() {
      const encodedString = encodeURIComponent(
        this.currentQRString.replace(/\s/g, '')
      )
      return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedString}&format=png&margin=10&color=01532B&bgcolor=ffffff`
    },

    currentQRString() {
      return this.generateQRString()
    },

    // Check if selected payment method is cash
    isCashPayment() {
      return this.selectedPaymentMethod && 
             (this.selectedPaymentMethod.payment_code === 'CASH' || 
              this.selectedPaymentMethod.payment_name?.toLowerCase().includes('cash'))
    },

    // Validate payment based on method type
    isPaymentValid() {
      if (!this.selectedPaymentMethod) return false
      
      if (this.isCashPayment) {
        return this.cashReceived && 
               this.cashReceived >= this.amount &&
               this.changeAmount >= 0
      }
      
      return true // Non-cash payments are valid once method is selected
    }
  },

  watch: {
    // Watch for dialog opening/closing
    show: {
      handler(newVal, oldVal) {
        if (newVal && !oldVal) {
          // Dialog just opened
          this.onDialogOpened()
        } else if (!newVal && oldVal) {
          // Dialog just closed
          this.onDialogClosed()
        }
      },
      immediate: false
    },

    // Also watch for changes in amount, tableNumber, or ticketId while dialog is open
    amount: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen()
          this.calculateChange() // Recalculate change when amount changes
        }
      }
    },

    tableNumber: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen()
        }
      }
    },

    ticketId: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen()
        }
      }
    },

    // Watch for payment method changes
    selectedPaymentMethod: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          // Reset cash fields when switching payment methods
          if (!this.isCashPayment) {
            this.cashReceived = 0
            this.cashReceivedFormatted = ''
            this.changeAmount = 0
          } else {
            // Auto-fill exact amount for cash payments
            this.setCashReceived(this.amount)
          }
        }
      }
    }
  },

  mounted() {
    // Only update customer screen if dialog is already open when component mounts
    if (this.show) {
      this.onDialogOpened()
    }
  },

  beforeDestroy() {
    // Clean up intervals and hide QR from customer screen
    this.cleanup()
  },

  methods: {
    onDialogOpened() {
      console.log('Payment dialog opened - updating customer screen')
      
      // Immediately show QR on customer screen
      this.showQROnCustomerScreen()
      
      // Optional: Set up auto-refresh interval
      this.startAutoRefresh()
      
      // Emit event for parent component if needed
      this.$emit('dialog-opened')
    },

    onDialogClosed() {
      console.log('Payment dialog closed - cleaning up')
      this.cleanup()
      this.resetComponent()
    },

    startAutoRefresh() {
      // Clear any existing interval
      if (this.qrRefreshInterval) {
        clearInterval(this.qrRefreshInterval)
      }
      
      // Set up auto-refresh every 30 seconds (adjust as needed)
      this.qrRefreshInterval = setInterval(() => {
        if (this.show) {
          console.log('Auto-refreshing customer screen QR')
          this.showQROnCustomerScreen()
        }
      }, 30000) // 30 seconds
    },

    cleanup() {
      // Clear auto-refresh interval
      if (this.qrRefreshInterval) {
        clearInterval(this.qrRefreshInterval)
        this.qrRefreshInterval = null
      }
      
      // Hide QR from customer screen but keep window open
      this.hideQRFromCustomerScreen()
      
      // Note: We deliberately do NOT close the customer display window here
      // so it can be reused for subsequent payments
      console.log('Payment dialog cleanup - keeping customer display window open')
    },

    updateCustomerScreen() {
      // Debounced update to avoid too many rapid updates
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout)
      }
      
      this.updateTimeout = setTimeout(() => {
        if (this.show) {
          console.log('Updating customer screen due to data change')
          this.showQROnCustomerScreen()
        }
      }, 500) // 500ms debounce
    },

    // Updated method to handle payment method selection
    selectPaymentMethod(payment) {
      this.selectedPaymentMethod = payment
    },

    // Calculate change amount
    calculateChange() {
      this.changeAmount = this.cashReceived - this.amount
    },

    // Handle cash input with real-time formatting
    onCashInput(value) {
      // Remove all non-numeric characters except decimal point
      const numericValue = value.replace(/[^\d.]/g, '')
      
      // Convert to number and update the actual value
      this.cashReceived = parseFloat(numericValue) || 0
      
      // Format for display with thousand separators
      this.cashReceivedFormatted = this.formatNumberWithCommas(numericValue)
      
      // Calculate change
      this.calculateChange()
    },

    // Format display when field loses focus
    formatCashDisplay() {
      if (this.cashReceived > 0) {
        this.cashReceivedFormatted = this.formatNumberWithCommas(this.cashReceived.toString())
      }
    },

    // Format number with thousand separators
    formatNumberWithCommas(value) {
      if (!value) return ''
      
      // Handle decimal numbers
      const parts = value.toString().split('.')
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      
      // Return with decimal part if it exists
      return parts[1] !== undefined ? `${integerPart}.${parts[1]}` : integerPart
    },

    // Set cash received amount from quick buttons
    setCashReceived(amount) {
      this.cashReceived = amount
      this.cashReceivedFormatted = this.formatNumberWithCommas(amount.toString())
      this.calculateChange()
    },

    // Generate quick cash amount suggestions
    getQuickCashAmounts() {
      const ticketAmount = this.amount
      const amounts = []
      
      // Add exact amount
      amounts.push(ticketAmount)
      
      // Add common bill denominations above the ticket amount
      const commonBills = [20000, 50000, 100000, 200000, 500000]
      
      commonBills.forEach(bill => {
        if (bill > ticketAmount && !amounts.includes(bill)) {
          amounts.push(bill)
        }
      })
      
      // Add rounded amounts
      const roundedUp = Math.ceil(ticketAmount / 10000) * 10000
      if (roundedUp > ticketAmount && !amounts.includes(roundedUp)) {
        amounts.push(roundedUp)
      }
      
      return amounts.slice(0, 4) // Limit to 4 suggestions
    },

    showQROnCustomerScreen() {
      const qrData = {
        amount: this.amount,
        tableNumber: this.tableNumber,
        ticketId: this.ticketId,
        qrString: this.generateQRString(),
        timestamp: Date.now(),
      }

      // Try to open customer display window on second monitor
      this.openCustomerDisplayWindow(qrData)

      // Fallback: Use localStorage for existing customer display windows
      localStorage.setItem(
        'customerDisplay',
        JSON.stringify({
          type: 'SHOW_QR_PAYMENT',
          data: qrData,
        })
      )

      window.dispatchEvent(new Event('storage'))

      // Only show success message if manually clicked (not auto-update)
      if (arguments.length > 0 && arguments[0] === 'manual') {
        this.$emit(
          'show-message',
          `QR displayed on customer screen`,
          'success',
          'mdi-qrcode'
        )
      }
    },

    async openCustomerDisplayWindow(qrData) {
      try {
        // Check if customer display window already exists and is still open
        if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
          console.log('Customer display window already open, updating content')
          this.updateExistingCustomerWindow(qrData)
          return
        }

        // Check if there's a global reference to the customer display window
        if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
          console.log('Using existing global customer display window')
          this.customerDisplayWindow = window.globalCustomerDisplayWindow
          this.updateExistingCustomerWindow(qrData)
          return
        }

        console.log('Opening new customer display window...')
        
        // Get available screens/monitors
        const screens = await this.getAvailableScreens()
        
        // Determine target screen (second monitor if available)
        const targetScreen = screens.length > 1 ? screens[1] : screens[0]
        
        // Calculate window position and size for target screen
        const windowFeatures = this.calculateWindowFeatures(targetScreen)
        
        // Open new customer display window
        this.customerDisplayWindow = window.open(
          this.getCustomerDisplayURL(),
          'customerDisplay',
          windowFeatures
        )
        
        if (this.customerDisplayWindow) {
          // Store global reference so other components can reuse it
          window.globalCustomerDisplayWindow = this.customerDisplayWindow
          
          // Set up window event handlers
          this.setupCustomerWindowHandlers()
          
          // Wait for window to load then send data
          this.customerDisplayWindow.addEventListener('load', () => {
            this.sendDataToCustomerWindow(qrData)
          })
          
          // Focus the new window
          this.customerDisplayWindow.focus()
          
          console.log('Customer display window opened successfully')
        } else {
          throw new Error('Failed to open customer display window - popup blocked?')
        }
      } catch (error) {
        console.warn('Failed to open customer display window:', error)
        this.$emit(
          'show-message',
          'Could not open customer display. Please check popup settings.',
          'warning',
          'mdi-alert'
        )
      }
    },

    setupCustomerWindowHandlers() {
      if (!this.customerDisplayWindow) return

      // Handle window close event
      this.customerDisplayWindow.addEventListener('beforeunload', () => {
        console.log('Customer display window is closing')
        // Clear global reference when window closes
        window.globalCustomerDisplayWindow = null
        this.customerDisplayWindow = null
      })

      // Handle window focus/blur for better UX
      this.customerDisplayWindow.addEventListener('blur', () => {
        // Window lost focus - could add logging here
      })
    },

    async getAvailableScreens() {
      try {
        // Use Screen Management API if available (Chrome 93+)
        if ('getScreenDetails' in window) {
          const screenDetails = await window.getScreenDetails()
          return screenDetails.screens
        } else {
          // Fallback: Use basic screen info
          return [{
            left: 0,
            top: 0,
            width: window.screen.width,
            height: window.screen.height,
            availWidth: window.screen.availWidth,
            availHeight: window.screen.availHeight
          }]
        }
      } catch (error) {
        console.warn('Screen detection failed:', error)
        // Return primary screen info as fallback
        return [{
          left: 0,
          top: 0,
          width: window.screen.width,
          height: window.screen.height,
          availWidth: window.screen.availWidth,
          availHeight: window.screen.availHeight
        }]
      }
    },

    calculateWindowFeatures(screen) {
      // Calculate optimal window size and position
      const windowWidth = Math.min(800, screen.availWidth)
      const windowHeight = Math.min(600, screen.availHeight)
      
      // Center window on target screen
      const left = screen.left + (screen.availWidth - windowWidth) / 2
      const top = screen.top + (screen.availHeight - windowHeight) / 2
      
      return [
        `width=${windowWidth}`,
        `height=${windowHeight}`,
        `left=${left}`,
        `top=${top}`,
        'toolbar=no',
        'menubar=no',
        'scrollbars=yes',
        'resizable=yes',
        'location=no',
        'directories=no',
        'status=no'
      ].join(',')
    },

    getCustomerDisplayURL() {
      // You can customize this URL based on your setup
      const baseUrl = window.location.origin
      const customerDisplayPath = '/admin/cafeTable/customer' // Adjust this path as needed
      
      return `${baseUrl}${customerDisplayPath}`
    },

    updateExistingCustomerWindow(qrData) {
      try {
        // Send data to existing window
        this.sendDataToCustomerWindow(qrData)
        
        // Bring window to front
        this.customerDisplayWindow.focus()
      } catch (error) {
        console.warn('Failed to update existing customer window:', error)
        // Try to reopen window
        this.customerDisplayWindow = null
        this.openCustomerDisplayWindow(qrData)
      }
    },

    sendDataToCustomerWindow(qrData) {
      console.info(`sendDataToCustomerWindow==> ${JSON.stringify(qrData)}`)
      console.info(`sendDataToCustomerWindow AAA==> ${JSON.stringify(this.customerDisplayWindow)}`)
      if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
        // Send data via postMessage
        this.customerDisplayWindow.postMessage({
          type: 'SHOW_QR_PAYMENT',
          data: qrData
        }, '*')
        
        // Also set localStorage in the new window for compatibility
        try {
          this.customerDisplayWindow.localStorage.setItem(
            'customerDisplay',
            JSON.stringify({
              type: 'SHOW_QR_PAYMENT',
              data: qrData,
            })
          )
        } catch (error) {
          console.warn('Could not access customer window localStorage:', error)
        }
      }
    },

    hideQRFromCustomerScreen() {
      const hideMessage = {
        type: 'HIDE_QR_PAYMENT',
        timestamp: Date.now(),
      }

      // Send hide message to customer display window if it exists
      if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
        this.customerDisplayWindow.postMessage(hideMessage, '*')
      }
      
      // Also check global reference
      if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
        window.globalCustomerDisplayWindow.postMessage(hideMessage, '*')
      }

      // Fallback: use localStorage for compatibility
      localStorage.setItem('customerDisplay', JSON.stringify(hideMessage))
      window.dispatchEvent(new Event('storage'))
    },

    // Method to manually close customer display window if needed
    closeCustomerDisplayWindow() {
      try {
        if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
          this.customerDisplayWindow.close()
          console.log('Customer display window closed manually')
        }
        
        if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
          window.globalCustomerDisplayWindow.close()
          console.log('Global customer display window closed manually')
        }
        
        // Clear references
        this.customerDisplayWindow = null
        window.globalCustomerDisplayWindow = null
        
        this.$emit(
          'show-message',
          'Customer display window closed',
          'info',
          'mdi-monitor-off'
        )
      } catch (error) {
        console.warn('Error closing customer display window:', error)
      }
    },

    // Method to check if customer display is available
    isCustomerDisplayOpen() {
      return (this.customerDisplayWindow && !this.customerDisplayWindow.closed) ||
             (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed)
    },

    showPaymentSuccessOnCustomerScreen() {
      localStorage.setItem(
        'customerDisplay',
        JSON.stringify({
          type: 'PAYMENT_SUCCESS',
          data: { amount: this.amount, tableNumber: this.tableNumber },
          timestamp: Date.now(),
        })
      )
      window.dispatchEvent(new Event('storage'))
    },

    generateQRString() {
      if (!this.amount || !this.tableNumber) return this.qrString

      const amountStr = Math.round(this.amount).toString().padStart(6, '0')
      const tableStr = this.tableNumber.toString().padStart(6, '0')

      return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812Table ${this.tableNumber} payment63041c9f`
    },

    closeDialog() {
      this.cleanup()
      this.resetComponent()
      this.$emit('close')
    },

    resetComponent() {
      this.selectedPaymentMethod = null
      this.showQRDialog = false
      this.copied = false
      this.cashReceived = 0
      this.cashReceivedFormatted = ''
      this.changeAmount = 0
      
      // Clear any pending timeouts
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout)
        this.updateTimeout = null
      }
    },

    confirmPayment() {
      if (!this.selectedPaymentMethod) {
        this.$emit(
          'show-message',
          'Please select a payment method',
          'warning',
          'mdi-alert'
        )
        return
      }

      // Validate cash payment
      if (this.isCashPayment) {
        if (!this.cashReceived || this.cashReceived < this.amount) {
          this.$emit(
            'show-message',
            'Please enter a valid cash amount',
            'warning',
            'mdi-alert'
          )
          return
        }
      }

      this.showPaymentSuccessOnCustomerScreen()
      
      // Include cash details in payment data for cash payments
      const paymentData = {
        ...this.selectedPaymentMethod,
        ...(this.isCashPayment && {
          cashReceived: this.cashReceived,
          changeAmount: this.changeAmount
        })
      }
      
      this.$emit('confirm-payment', paymentData)
    },

    async copyQRString() {
      try {
        const stringToCopy = this.currentQRString

        if (navigator.clipboard) {
          await navigator.clipboard.writeText(stringToCopy)
        } else {
          const textArea = document.createElement('textarea')
          textArea.value = stringToCopy
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
        }

        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 2000)
      } catch (err) {
        console.error('Failed to copy QR string:', err)
      }
    },

    downloadQR() {
      const link = document.createElement('a')
      link.href = this.qrCodeUrl
      link.download = `qr-payment-table-${this.tableNumber}-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },

    shareQR() {
      if (navigator.share) {
        navigator
          .share({
            title: `Payment QR - Table ${this.tableNumber}`,
            text: `Payment QR Code for ${this.formatPrice(this.amount)}`,
            url: this.qrCodeUrl,
          })
          .catch((err) => console.log('Error sharing:', err))
      } else {
        this.copyQRString()
        this.$emit(
          'show-message',
          'QR code details copied!',
          'success',
          'mdi-check'
        )
      }
    },

    onQRError() {
      this.$emit('show-message', 'Failed to load QR code', 'error', 'mdi-alert')
    },

    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount || 0))
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber
    },

    getPaymentIcon(paymentCode) {
      const icons = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        CREDIT: 'mdi-credit-card-outline',
        DEBIT: 'mdi-credit-card',
        MOBILE: 'mdi-cellphone',
        DIGITAL: 'mdi-wallet',
        BANK: 'mdi-bank',
        CHECK: 'mdi-checkbook',
      }
      return icons[paymentCode] || 'mdi-currency-usd'
    },

    getPaymentColor(paymentCode) {
      const colors = {
        CASH: 'green',
        CARD: 'blue',
        CREDIT: 'purple',
        DEBIT: 'indigo',
        MOBILE: 'orange',
        DIGITAL: 'teal',
        BANK: 'brown',
        CHECK: 'grey',
      }
      return colors[paymentCode] || 'primary'
    },
  },
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.payment-card {
  transition: all 0.2s ease;
}

.payment-card:hover {
  transform: translateY(-1px);
}

.text-none {
  text-transform: none !important;
}

.quick-cash-chips .v-chip {
  margin: 2px !important;
}

.quick-cash-chips .v-chip:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}
</style>