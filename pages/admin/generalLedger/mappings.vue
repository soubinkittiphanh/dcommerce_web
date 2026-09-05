<template>
  <div class="gl-mappings-container">
    <!-- Header -->
    <v-row class="mb-4">
      <v-col cols="12">
        <div>
          <h1 class="font-weight-black primary--text text-h4 mb-1">ກຳນົດຜູກບັນຊີ General Ledger</h1>
          <p class="text-subtitle-1 text--secondary">Configure GL Account Mappings for Sales and Inventory Transactions</p>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <v-row>
      <!-- Sales GL Mappings Card -->
      <v-col cols="12" md="6">
        <v-card class="rounded-xl elevation-2 h-100">
          <v-card-title class="primary white--text py-3 px-5 d-flex align-center">
            <v-icon color="white" class="mr-2">mdi-point-of-sale</v-icon>
            <span class="font-weight-bold text-subtitle-1">ບັນຊີຂາຍ & ຮັບຊຳລະ (Sales & Payment GL)</span>
          </v-card-title>
          <v-card-text class="pa-5 pt-6">
            <!-- Revenue Account -->
            <div class="mapping-field mb-5">
              <label class="d-block font-weight-bold text-subtitle-2 mb-2 grey--text text--darken-3">
                1. ບັນຊີລາຍຮັບການຂາຍ (Sales Revenue Account)
              </label>
              <v-select
                v-model="mappings.GL_MAP_REV_ACC"
                :items="accounts"
                item-text="displayName"
                item-value="accountNumber"
                outlined
                dense
                hide-details
                placeholder="ເລືອກບັນຊີລາຍຮັບ"
                prepend-inner-icon="mdi-cash-register"
              ></v-select>
              <span class="text-caption grey--text pl-1">ບັນຊີບັນທຶກລາຍຮັບທັງໝົດທີ່ໄດ້ຈາກການຂາຍສິນຄ້າ ແລະ ບໍລິການ</span>
            </div>

            <!-- Cash Payments Account -->
            <div class="mapping-field mb-5">
              <label class="d-block font-weight-bold text-subtitle-2 mb-2 grey--text text--darken-3">
                2. ບັນຊີເງິນສົດໃນມື (Cash payment Account)
              </label>
              <v-select
                v-model="mappings.GL_MAP_CASH_ACC"
                :items="accounts"
                item-text="displayName"
                item-value="accountNumber"
                outlined
                dense
                hide-details
                placeholder="ເລືອກບັນຊີເງິນສົດ"
                prepend-inner-icon="mdi-cash"
              ></v-select>
              <span class="text-caption grey--text pl-1">ບັນຊີຮັບຊຳລະດ້ວຍເງິນສົດ ຫຼື ການຈ່າຍແບບ COD</span>
            </div>

            <!-- Bank / QR Payments Account -->
            <div class="mapping-field mb-5">
              <label class="d-block font-weight-bold text-subtitle-2 mb-2 grey--text text--darken-3">
                3. ບັນຊີເງິນຝາກທະນາຄານ / QR SCAN (Bank Account)
              </label>
              <v-select
                v-model="mappings.GL_MAP_BANK_ACC"
                :items="accounts"
                item-text="displayName"
                item-value="accountNumber"
                outlined
                dense
                hide-details
                placeholder="ເລືອກບັນຊີທະນາຄານ"
                prepend-inner-icon="mdi-bank"
              ></v-select>
              <span class="text-caption grey--text pl-1">ບັນຊີຮັບຊຳລະດ້ວຍເງິນໂອນ, QR Scan, ບັດເຄຣດິດ ຫຼື ບັນຊີ Wallet</span>
            </div>

            <!-- Accounts Receivable (AR) Account -->
            <div class="mapping-field mb-2">
              <label class="d-block font-weight-bold text-subtitle-2 mb-2 grey--text text--darken-3">
                4. ບັນຊີໜີ້ຕ້ອງຮັບ AR (Accounts Receivable Account)
              </label>
              <v-select
                v-model="mappings.GL_MAP_AR_ACC"
                :items="accounts"
                item-text="displayName"
                item-value="accountNumber"
                outlined
                dense
                hide-details
                placeholder="ເລືອກບັນຊີໜີ້ຕ້ອງຮັບ"
                prepend-inner-icon="mdi-account-arrow-left"
              ></v-select>
              <span class="text-caption grey--text pl-1">ບັນຊີບັນທຶກໜີ້ຕ້ອງຮັບ AR ສຳລັບການຂາຍເຊື່ອ ຫຼື ຕິດໜີ້</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Inventory & COGS GL Mappings Card -->
      <v-col cols="12" md="6">
        <v-card class="rounded-xl elevation-2 h-100">
          <v-card-title class="secondary white--text py-3 px-5 d-flex align-center">
            <v-icon color="white" class="mr-2">mdi-warehouse</v-icon>
            <span class="font-weight-bold text-subtitle-1">ບັນຊີສາງ & ຕົ້ນທຶນສິນຄ້າ (Inventory & COGS GL)</span>
          </v-card-title>
          <v-card-text class="pa-5 pt-6">
            <!-- Inventory Account -->
            <div class="mapping-field mb-5">
              <label class="d-block font-weight-bold text-subtitle-2 mb-2 grey--text text--darken-3">
                1. ບັນຊີມູນຄ່າສິນຄ້າໃນສາງ (Merchandise Inventory Account)
              </label>
              <v-select
                v-model="mappings.GL_MAP_INV_ACC"
                :items="accounts"
                item-text="displayName"
                item-value="accountNumber"
                outlined
                dense
                hide-details
                placeholder="ເລືອກບັນຊີສາງສິນຄ້າ"
                prepend-inner-icon="mdi-store-24h"
              ></v-select>
              <span class="text-caption grey--text pl-1">ບັນຊີມູນຄ່າສິນຄ້າທັງໝົດໃນສາງ (Asset) ທີ່ໃຊ້ຕັດສະຕັອກ</span>
            </div>

            <!-- COGS Account -->
            <div class="mapping-field mb-5">
              <label class="d-block font-weight-bold text-subtitle-2 mb-2 grey--text text--darken-3">
                2. ບັນຊີຕົ້ນທຶນສິນຄ້າຂາຍ (Cost of Goods Sold Account)
              </label>
              <v-select
                v-model="mappings.GL_MAP_COGS_ACC"
                :items="accounts"
                item-text="displayName"
                item-value="accountNumber"
                outlined
                dense
                hide-details
                placeholder="ເລືອກບັນຊີຕົ້ນທຶນ"
                prepend-inner-icon="mdi-chart-line-variant"
              ></v-select>
              <span class="text-caption grey--text pl-1">ບັນຊີຄ່າໃຊ້ຈ່າຍຕົ້ນທຶນສິນຄ້າທີ່ຂາຍອອກໄປ (Expense)</span>
            </div>

            <!-- Accounts Payable (AP) Account -->
            <div class="mapping-field mb-2">
              <label class="d-block font-weight-bold text-subtitle-2 mb-2 grey--text text--darken-3">
                3. ບັນຊີໜີ້ຕ້ອງສົ່ງ AP (Accounts Payable Account)
              </label>
              <v-select
                v-model="mappings.GL_MAP_AP_ACC"
                :items="accounts"
                item-text="displayName"
                item-value="accountNumber"
                outlined
                dense
                hide-details
                placeholder="ເລືອກບັນຊີໜີ້ຕ້ອງສົ່ງ"
                prepend-inner-icon="mdi-account-arrow-right"
              ></v-select>
              <span class="text-caption grey--text pl-1">ບັນຊີບັນທຶກໜີ້ຕ້ອງສົ່ງ AP ເມື່ອມີການຮັບສິນຄ້າ (Stock Inward / Topup) ແບບຕິດໜີ້</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Save Button Actions -->
    <v-row class="mt-6">
      <v-col cols="12" class="text-right">
        <v-btn
          color="primary"
          class="px-8 py-5 rounded-lg font-weight-bold text-subtitle-1"
          elevation="2"
          @click="saveMappings"
          :loading="saving"
        >
          <v-icon left>mdi-content-save-cog</v-icon>
          ບັນທຶກການຜູກບັນຊີ (Save Mappings)
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  middleware: 'auths',
  data() {
    return {
      loading: false,
      saving: false,
      accounts: [],
      rawSpf: [],
      mappings: {
        GL_MAP_REV_ACC: null,
        GL_MAP_CASH_ACC: null,
        GL_MAP_BANK_ACC: null,
        GL_MAP_AR_ACC: null,
        GL_MAP_INV_ACC: null,
        GL_MAP_COGS_ACC: null,
        GL_MAP_AP_ACC: null
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      this.loading = true
      try {
        await Promise.all([
          this.loadAccounts(),
          this.loadSpfMappings()
        ])
      } catch (error) {
        console.error('Error initializing mappings:', error)
      } finally {
        this.loading = false
      }
    },
    async loadAccounts() {
      try {
        const { data } = await this.$axios.get('/api/accountChart/chartAccount')
        this.accounts = (data || []).map(acc => ({
          ...acc,
          displayName: `${acc.accountNumber} - ${acc.accountName} (${acc.accountType})`
        }))
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
        this.$toast.error('ບໍ່ສາມາດດຶງລາຍການຜັງບັນຊີໄດ້')
      }
    },
    async loadSpfMappings() {
      try {
        const { data } = await this.$axios.get('/api/spf/find')
        this.rawSpf = data || []
        
        // Populate local mappings from database parameter table
        const keys = Object.keys(this.mappings)
        this.rawSpf.forEach(item => {
          if (keys.includes(item.code)) {
            this.mappings[item.code] = item.value ? parseInt(item.value, 10) : null
          }
        })
      } catch (error) {
        console.error('Error loading SPF parameters:', error)
        this.$toast.error('ບໍ່ສາມາດດຶງຂໍ້ມູນການຜູກບັນຊີໃນລະບົບໄດ້')
      }
    },
    async saveMappings() {
      this.saving = true
      try {
        const updates = []
        const keys = Object.keys(this.mappings)

        for (const code of keys) {
          const matchedSpf = this.rawSpf.find(item => item.code === code)
          const value = this.mappings[code]

          if (matchedSpf) {
            // Update existing parameter
            updates.push(
              this.$axios.put(`/api/spf/update/${matchedSpf.id}`, {
                code,
                value: value ? String(value) : null,
                remark: matchedSpf.remark,
                isActive: true
              })
            )
          } else {
            // If parameter wasn't seeded (failsafe), create it
            updates.push(
              this.$axios.post('/api/spf/create', {
                code,
                value: value ? String(value) : null,
                remark: `GL mapping key: ${code}`,
                isActive: true
              })
            )
          }
        }

        await Promise.all(updates)
        this.$toast.success('ບັນທຶກການຜູກບັນຊີ General Ledger ສຳເລັດແລ້ວ')
        
        // Reload parameters to sync IDs
        await this.loadSpfMappings()
      } catch (error) {
        console.error('Error saving GL mappings:', error)
        this.$toast.error('ມີຂໍ້ຜິດພາດໃນການບັນທຶກການຜູກບັນຊີ')
      } finally {
        this.saving = false
      }
    }
  }
}
</script>

<style scoped>
.gl-mappings-container {
  max-width: 1200px;
  margin: 0 auto;
}

.mapping-field label {
  font-size: 0.95rem;
}
</style>
