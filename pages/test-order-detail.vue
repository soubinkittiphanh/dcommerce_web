<template>
  <v-app>
    <v-main>
      <div class="pa-4 bg-grey-lighten-4">
        <v-card class="mb-4 pa-4 rounded-xl" elevation="2">
          <div class="d-flex justify-space-between align-center flex-wrap gap-2">
            <div>
              <h2 class="text-h6 font-weight-bold primary--text">OrderDetailPosCRUD Preview & Test Hub</h2>
              <p class="caption grey--text mb-0">Live interactive preview for UX/UI validation</p>
            </div>
            <div class="d-flex gap-2">
              <v-btn color="primary" depressed @click="openNewDialog">
                <v-icon left>mdi-plus</v-icon>
                New Order Mode
              </v-btn>
              <v-btn color="teal darken-2" dark depressed @click="openSplitDialog">
                <v-icon left>mdi-credit-card-multiple</v-icon>
                Split-Payment Order Mode
              </v-btn>
            </div>
          </div>
        </v-card>

        <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
          <order-detail-pos-c-r-u-d
            v-if="dialog"
            ref="orderDetail"
            :header-id="selectedHeaderId"
            :is-update="isUpdateMode"
            :is-quotation="isQuotationMode"
            @close-dialog="dialog = false"
            @reload="dialog = false"
          />
        </v-dialog>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'

export default {
  auth: false,
  components: {
    OrderDetailPosCRUD,
  },
  data() {
    return {
      dialog: true,
      selectedHeaderId: 0,
      isUpdateMode: false,
      isQuotationMode: false,
    }
  },
  async mounted() {
    // Populate store with rich sample data if empty for instant stunning visual demo
    if (!this.$store.getters.findAllCurrency || this.$store.getters.findAllCurrency.length === 0) {
      await this.$store.dispatch('initCurrency', [
        { id: 1, code: 'LAK', rate: 1, isLocalCCY: true },
        { id: 2, code: 'THB', rate: 650, isLocalCCY: false },
        { id: 3, code: 'USD', rate: 22000, isLocalCCY: false },
      ])
    }
    if (!this.$store.getters.findAllProduct || this.$store.getters.findAllProduct.length === 0) {
      this.$store.commit('findProduct', [
        { id: 101, pro_name: 'ເບຍລາວ ຂວດໃຫຍ່ (Beerlao Lager 640ml)', barCode: '885002900101', pro_price: 18000, saleCurrencyId: 1 },
        { id: 102, pro_name: 'ນ້ຳດື່ມຫົວເສືອ 550ml (Tigerhead Water)', barCode: '885002900102', pro_price: 5000, saleCurrencyId: 1 },
        { id: 103, pro_name: 'ກາເຟດາວ ເອສເປຣສໂຊ (Dao Coffee Espresso)', barCode: '885002900103', pro_price: 32000, saleCurrencyId: 1 },
        { id: 104, pro_name: 'ເຂົ້າໜົມປັງຝຣັ່ງ (Baguette Bread)', barCode: '885002900104', pro_price: 12000, saleCurrencyId: 1 },
        { id: 105, pro_name: 'ນົມສົດ Dutch Mill 400ml', barCode: '885002900105', pro_price: 15000, saleCurrencyId: 1 },
      ])
    }
    if (!this.$store.getters.findAllClient || this.$store.getters.findAllClient.length === 0) {
      this.$store.commit('findClient', [
        { id: 1, company: 'ລູກຄ້າທົ່ວໄປ (General Walk-in Customer)', tel: '020-55551234' },
        { id: 2, company: 'ຮ້ານອາຫານ ມີໄຊ (Meexay Restaurant)', tel: '020-99887766' },
        { id: 3, company: 'ບໍລິສັດ ພັດທະນາການຄ້າ ຈຳກັດ', tel: '021-412345' },
      ])
    }
    if (!this.$store.getters.findAllPayment || this.$store.getters.findAllPayment.length === 0) {
      this.$store.commit('findPayment', [
        { id: 1, payment_code: 'CASH', payment_name: 'ເງິນສົດ (Cash)' },
        { id: 2, payment_code: 'BCEL', payment_name: 'BCEL One QR' },
        { id: 3, payment_code: 'TRANSFER', payment_name: 'ໂອນເງິນຜ່ານທະນາຄານ (Bank Transfer)' },
        { id: 4, payment_code: 'CARD', payment_name: 'ບັດເຄຣດິດ/ເດບິດ (Credit Card)' },
      ])
    }
    if (!this.$store.getters.findAllUnit || this.$store.getters.findAllUnit.length === 0) {
      this.$store.commit('findUnit', [
        { id: 1, name: 'ແກ້ວ (Bottle)', unitRate: 1 },
        { id: 2, name: 'ແກັດ (Crate/Case)', unitRate: 24 },
        { id: 3, name: 'ຊອງ (Pack)', unitRate: 1 },
      ])
    }

    // Seed preview with sample items
    this.$nextTick(() => {
      this.seedSampleLines()
    })
  },
  methods: {
    seedSampleLines() {
      if (this.$refs.orderDetail) {
        const comp = this.$refs.orderDetail
        comp.transaction = {
          id: 8492,
          isActive: true,
          bookingDate: new Date().toISOString().substr(0, 10),
          clientId: 1,
          currencyId: 1,
          exchangeRate: 1,
          discount: 5000,
          referenceNo: 'POS-2026-88',
          remark: 'Delivery to Table #4, VIP Zone',
          user: { cus_name: 'Khamphanh (Cashier)' },
          payments: [
            { id: 1, paymentId: 1, payment_code: 'CASH', payment_name: 'ເງິນສົດ (Cash)', amount: 50000, percentage: 56.8, currency_id: 1, exchange_rate: 1 },
            { id: 2, paymentId: 2, payment_code: 'BCEL', payment_name: 'BCEL One QR', amount: 38000, percentage: 43.2, currency_id: 1, exchange_rate: 1 },
          ],
          lines: [
            { id: 1, productId: 101, quantity: 3, unitId: 1, unitRate: 1, price: 18000, discount: 0, total: 54000, currencyId: 1, exchangeRate: 1, isActive: true },
            { id: 2, productId: 102, quantity: 2, unitId: 1, unitRate: 1, price: 5000, discount: 0, total: 10000, currencyId: 1, exchangeRate: 1, isActive: true },
            { id: 3, productId: 104, quantity: 2, unitId: 3, unitRate: 1, price: 12000, discount: 0, total: 24000, currencyId: 1, exchangeRate: 1, isActive: true },
          ],
        }
      }
    },
    openNewDialog() {
      this.selectedHeaderId = 0
      this.isUpdateMode = false
      this.isQuotationMode = false
      this.dialog = true
    },
    openSplitDialog() {
      this.selectedHeaderId = 8492
      this.isUpdateMode = true
      this.isQuotationMode = false
      this.dialog = true
      this.$nextTick(() => {
        this.seedSampleLines()
      })
    },
  },
}
</script>
