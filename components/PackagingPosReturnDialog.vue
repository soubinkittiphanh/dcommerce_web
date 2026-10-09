<template>
  <v-dialog v-model="dialog" max-width="700" persistent>
    <v-card class="rounded-xl overflow-hidden elevation-12">
      <!-- Toolbar -->
      <v-toolbar color="teal darken-2" dark flat class="px-4">
        <v-icon left size="26">mdi-package-down</v-icon>
        <v-toolbar-title class="subtitle-1 font-weight-black">
          ຮັບຄືນລັງ-ແກ້ວເປົ່າ / Return Empties & Settle Debt
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small @click="closeDialog">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-4 pt-5">
        <!-- Customer Selection Dropdown (For Registered / Wholesale Clients) -->
        <div class="mb-3">
          <div class="subtitle-2 font-weight-bold grey--text text--darken-2 mb-1 d-flex align-center">
            <v-icon x-small color="teal" class="mr-1">mdi-account-search</v-icon>
            ເລືອກລູກຄ້າ / ຮ້ານຄ້າຕົວແທນ (Select Registered Client):
          </div>
          <v-autocomplete
            v-model="selectedClientId"
            :items="clientList"
            item-text="displayName"
            item-value="id"
            label="ຄົ້ນຫາລູກຄ້າ ຫຼື ເບີໂທ (Search Customer/Phone)..."
            prepend-inner-icon="mdi-account"
            outlined
            dense
            clearable
            hide-details
            class="rounded-lg mb-2"
            @change="onClientSelected"
          >
            <template v-slot:item="{ item }">
              <div class="py-1">
                <div class="font-weight-bold">{{ item.name }} <span v-if="item.company" class="caption grey--text">({{ item.company }})</span></div>
                <div class="caption teal--text">ໂທ: {{ item.telephone || 'ບໍ່ມີເບີ' }}</div>
              </div>
            </template>
          </v-autocomplete>

          <!-- Client Outstanding Packaging Debt Preview -->
          <v-alert
            v-if="selectedClientId && clientPackagingBalances.length > 0"
            dense
            outlined
            color="amber darken-3"
            class="rounded-lg pa-3 mb-2"
          >
            <div class="d-flex justify-space-between align-center flex-wrap">
              <div>
                <span class="caption font-weight-bold amber--text text--darken-4">
                  <v-icon small color="amber darken-3" class="mr-1">mdi-alert-circle</v-icon>
                  ຍອດໜີ້ບັນຈຸພັນຄ້າງສົ່ງປະຈຸບັນ (Current Outstanding Debt):
                </span>
                <div class="d-flex gap-2 mt-1 flex-wrap">
                  <v-chip
                    v-for="(bal, bIdx) in clientPackagingBalances"
                    :key="bIdx"
                    small
                    :color="bal.balanceOwed > 0 ? 'amber darken-2' : 'teal darken-2'"
                    dark
                    class="font-weight-black"
                  >
                    {{ bal.packagingName }}: {{ numberWithCommas(bal.balanceOwed) }} ໜ່ວຍ
                  </v-chip>
                </div>
              </div>
              <v-btn
                x-small
                color="teal darken-2"
                dark
                depressed
                class="rounded-lg font-weight-bold mt-1"
                @click="autoFillFromDebt"
              >
                <v-icon left x-small>mdi-auto-fix</v-icon>
                ຕື່ມຕາມຍອດໜີ້ (Fill from Debt)
              </v-btn>
            </div>
          </v-alert>
          <v-alert
            v-else-if="selectedClientId && clientPackagingBalances.length === 0 && !isLoadingBalances"
            dense
            outlined
            color="teal"
            class="rounded-lg pa-2 mb-2 caption font-weight-bold text-center"
          >
            ✅ ລູກຄ້ານີ້ບໍ່ມີໜີ້ຄ້າງສົ່ງບັນຈຸພັນ (Client has zero outstanding packaging debt)
          </v-alert>
        </div>

        <!-- Optional Free Text Phone / Name (If Walk-in) -->
        <v-expand-transition>
          <div v-if="!selectedClientId" class="mb-3">
            <v-row dense>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="customerPhone"
                  label="ເບີໂທລູກຄ້າຍ່ອຍ (Walk-in Phone - Optional)"
                  prepend-inner-icon="mdi-phone"
                  outlined
                  dense
                  hide-details
                  class="rounded-lg"
                  placeholder="020XXXXXXXX"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="customerName"
                  label="ຊື່ລູກຄ້າຍ່ອຍ (Walk-in Name - Optional)"
                  prepend-inner-icon="mdi-account-outline"
                  outlined
                  dense
                  hide-details
                  class="rounded-lg"
                  placeholder="ຊື່ລູກຄ້າ..."
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
        </v-expand-transition>

        <!-- Quick Returned Empties List -->
        <div class="subtitle-2 font-weight-bold grey--text text--darken-2 mb-2 d-flex align-center">
          <v-icon x-small color="teal" class="mr-1">mdi-format-list-checks</v-icon>
          ລາຍການບັນຈຸພັນທີ່ຮັບຄືນ (Returned Packaging Items):
        </div>

        <v-card outlined class="rounded-lg mb-3 pa-2 grey lighten-5">
          <div v-if="isLoadingAssets" class="text-center py-4">
            <v-progress-circular indeterminate color="teal" size="24" class="mr-2"></v-progress-circular>
            <span class="caption grey--text">ກຳລັງໂຫຼດລາຍການບັນຈຸພັນ...</span>
          </div>
          <div v-else-if="returnLines.length === 0" class="text-center py-4 grey--text caption">
            ບໍ່ພົບລາຍການບັນຈຸພັນ (No Packaging Assets Found)
          </div>
          <template v-else>
            <v-row v-for="(item, idx) in returnLines" :key="idx" align="center" dense class="mb-1">
              <v-col cols="6">
                <div class="font-weight-bold subtitle-2">{{ item.name }}</div>
                <div class="caption grey--text">ຄ່າມັດຈຳ: {{ numberWithCommas(item.depositPrice) }} LAK/ໜ່ວຍ</div>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.number="item.quantity"
                  type="number"
                  min="0"
                  outlined
                  dense
                  hide-details
                  label="ຈຳນວນ"
                  class="rounded-lg text-center"
                ></v-text-field>
              </v-col>
              <v-col cols="3" class="text-right">
                <span class="font-weight-black subtitle-2 teal--text text--darken-3">
                  {{ numberWithCommas((item.quantity || 0) * (item.depositPrice || 0)) }} LAK
                </span>
              </v-col>
            </v-row>
          </template>
        </v-card>

        <!-- Notes -->
        <v-text-field
          v-model="notes"
          label="ໝາຍເຫດ (Notes)"
          outlined
          dense
          hide-details
          class="rounded-lg mb-4"
          placeholder="ລະບຸໝາຍເຫດຖ້າມີ..."
        ></v-text-field>

        <!-- Total Refund Banner -->
        <v-alert dense text color="teal darken-2" class="rounded-xl pa-4 mb-0">
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="caption grey--text text--darken-2">ຍອດເງິນຄືນຄ່າມັດຈຳທັງໝົດ:</span>
              <div class="subtitle-1 font-weight-bold teal--text text--darken-4">
                {{ selectedClientId ? 'ຕັດໜີ້ບັນຈຸພັນ / Clear Packaging Debt' : 'ຈ່າຍເງິນຄືນຄ່າມັດຈຳ / Refund Deposit' }}
              </div>
            </div>
            <div class="text-right">
              <span class="text-h5 font-weight-black teal--text text--darken-4">
                {{ numberWithCommas(totalRefundAmount) }} LAK
              </span>
            </div>
          </div>
        </v-alert>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog" :disabled="isSubmitting" class="rounded-lg">
          ຍົກເລີກ
        </v-btn>
        <v-btn
          color="teal darken-2"
          dark
          depressed
          @click="submitRefund"
          :loading="isSubmitting"
          :disabled="totalRefundItemsCount <= 0"
          class="px-6 rounded-lg font-weight-bold"
        >
          <v-icon left small>mdi-cash-refund</v-icon>
          {{ selectedClientId ? 'ຢືນຢັນຮັບຄືນ ແລະ ຕັດໜີ້' : `ຈ່າຍເງິນຄືນ (${numberWithCommas(totalRefundAmount)} LAK)` }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'

export default {
  name: 'PackagingPosReturnDialog',
  props: {
    value: { type: Boolean, default: false },
    locationId: { type: [Number, String], default: 1 },
    terminalId: { type: [Number, String], default: null },
    clientId: { type: [Number, String], default: null }
  },
  data() {
    return {
      dialog: this.value,
      selectedClientId: this.clientId || null,
      clientList: [],
      clientPackagingBalances: [],
      isLoadingBalances: false,
      customerPhone: '',
      customerName: '',
      notes: '',
      isSubmitting: false,
      isLoadingAssets: false,
      returnLines: []
    }
  },
  watch: {
    value(val) {
      this.dialog = val
      if (val) {
        this.loadClients()
        this.loadPackagingProducts()
        if (this.clientId) {
          this.selectedClientId = this.clientId
          this.onClientSelected(this.clientId)
        }
      }
    },
    clientId(val) {
      if (val) {
        this.selectedClientId = val
        this.onClientSelected(val)
      }
    },
    dialog(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.loadClients()
    this.loadPackagingProducts()
  },
  computed: {
    totalRefundAmount() {
      return this.returnLines.reduce((sum, item) => {
        return sum + ((item.quantity || 0) * (item.depositPrice || 0))
      }, 0)
    },
    totalRefundItemsCount() {
      return this.returnLines.reduce((sum, item) => {
        return sum + (Number(item.quantity) || 0)
      }, 0)
    }
  },
  methods: {
    numberWithCommas(value) {
      if (value === undefined || value === null) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    closeDialog() {
      this.dialog = false
      this.selectedClientId = null
      this.clientPackagingBalances = []
      this.customerPhone = ''
      this.customerName = ''
      this.notes = ''
      this.returnLines.forEach(l => { l.quantity = 0 })
      this.$emit('close-dialog')
    },
    async loadClients() {
      try {
        let rawClients = []
        if (this.$store && this.$store.getters.findAllClient && this.$store.getters.findAllClient.length > 0) {
          rawClients = this.$store.getters.findAllClient
        } else {
          const res = await this.$axios.get('/api/client/find')
          rawClients = Array.isArray(res.data) ? res.data : (res.data?.rows || res.data?.data || [])
        }

        this.clientList = rawClients.map(c => ({
          id: c.id,
          name: c.name || '',
          company: c.company || '',
          telephone: c.telephone || '',
          displayName: `${c.name || ''} ${c.company ? '(' + c.company + ')' : ''} ${c.telephone ? '[' + c.telephone + ']' : ''}`
        }))
      } catch (err) {
        console.error('Failed to load clients:', err)
      }
    },
    async onClientSelected(clientId) {
      if (!clientId) {
        this.clientPackagingBalances = []
        return
      }

      const client = this.clientList.find(c => c.id === clientId)
      if (client) {
        this.customerName = client.name
        this.customerPhone = client.telephone
      }

      this.isLoadingBalances = true
      try {
        const res = await this.$axios.get(`/api/packaging/customer/balance/${clientId}`)
        this.clientPackagingBalances = Array.isArray(res.data) ? res.data : []
      } catch (err) {
        console.warn('Failed to load client packaging balance:', err)
        this.clientPackagingBalances = []
      } finally {
        this.isLoadingBalances = false
      }
    },
    autoFillFromDebt() {
      if (!this.clientPackagingBalances || this.clientPackagingBalances.length === 0) return

      this.clientPackagingBalances.forEach(bal => {
        const targetLine = this.returnLines.find(
          l => String(l.packagingProductId) === String(bal.packagingProductId) ||
               (l.name && bal.packagingName && l.name.includes(bal.packagingName))
        )
        if (targetLine && bal.balanceOwed > 0) {
          targetLine.quantity = bal.balanceOwed
        }
      })
    },
    async loadPackagingProducts() {
      this.isLoadingAssets = true
      try {
        let items = []
        try {
          const res = await this.$axios.get('/api/packaging/assets')
          if (res.data && Array.isArray(res.data) && res.data.length > 0) {
            items = res.data
          }
        } catch (e) {
          // fallback
        }

        if (items.length === 0) {
          try {
            const res2 = await this.$axios.get('product_f_v1/1', { params: { isActive: false } })
            const raw = res2.data?.data || res2.data?.rows || (Array.isArray(res2.data) ? res2.data : [])
            items = raw.filter(p => p && (p.isPackagingAsset || p.pro_name?.includes('ລັງ') || p.pro_name?.includes('ແກ້ວ')))
          } catch (e) {
            // fallback
          }
        }

        if (items.length === 0) {
          const fallbackRes = await this.$axios.get('/api/product/find')
          const list = Array.isArray(fallbackRes.data)
            ? fallbackRes.data
            : (fallbackRes.data?.rows || fallbackRes.data?.data || [])
          items = list.filter(
            p => p && (p.isPackagingAsset || p.pro_name?.includes('ລັງ') || p.pro_name?.includes('ແກ້ວ'))
          )
        }

        if (items.length > 0) {
          this.returnLines = items.map(p => ({
            packagingProductId: p.id ?? p.pro_id,
            name: p.pro_name || p.name,
            depositPrice: Number(p.pro_price || p.price || 20000),
            quantity: 0
          }))
        }
      } catch (err) {
        console.error('Failed to load packaging items:', err)
      } finally {
        this.isLoadingAssets = false
      }
    },
    async submitRefund() {
      const activeItems = this.returnLines.filter(item => (item.quantity || 0) > 0)
      if (activeItems.length === 0) return

      this.isSubmitting = true
      try {
        const payload = {
          clientId: this.selectedClientId || null,
          customerPhone: this.customerPhone || null,
          customerName: this.customerName || null,
          returnedItems: activeItems.map(i => ({
            packagingProductId: i.packagingProductId,
            quantity: i.quantity,
            depositPrice: i.depositPrice
          })),
          locationId: this.locationId || 1,
          terminalId: this.terminalId || null,
          notes: this.notes || (this.selectedClientId ? `POS Empties Return - Client #${this.selectedClientId}` : 'POS Retail Empties Return')
        }

        const res = await this.$axios.post('/api/packaging/pos/return', payload)
        if (res.data?.success) {
          const clientName = this.customerName || (this.selectedClientId ? `Client #${this.selectedClientId}` : 'Walk-in')
          swalSuccess(
            this.$swal,
            'ສຳເລັດ',
            `ຮັບຄືນບັນຈຸພັນສຳເລັດ (${clientName}): ${this.numberWithCommas(res.data.totalRefundAmount)} LAK`
          )
          this.$emit('refund-completed', res.data)
          this.closeDialog()
        }
      } catch (err) {
        console.error('Failed to process POS empties refund:', err)
        swalError2(this.$swal, 'Error', err.response?.data?.message || err.message)
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.subtitle-1,
.subtitle-2,
::v-deep .subtitle-1,
::v-deep .subtitle-2 {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.caption,
.text-caption,
::v-deep .caption,
::v-deep .text-caption {
  font-size: 0.75rem !important;
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}
</style>

