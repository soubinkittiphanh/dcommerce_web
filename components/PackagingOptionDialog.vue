<template>
  <v-dialog v-model="dialog" max-width="800" persistent>
    <v-card class="rounded-xl overflow-hidden">
      <!-- Dialog Header -->
      <v-toolbar color="primary" dark flat dense class="px-4">
        <v-icon left>mdi-package-variant-closed</v-icon>
        <v-toolbar-title class="subtitle-1 font-weight-bold">
          ກຳນົດບັນຈຸພັນສົ່ງຄືນ / Returnable Packaging Setup
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small @click="closeDialog">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-4 pt-5">
        <!-- Target Product Info -->
        <v-alert dense text color="primary" class="mb-4 rounded-lg">
          <div class="d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-information</v-icon>
            <div>
              <span class="font-weight-black">{{ productName || 'ສິນຄ້າ' }}</span>
              <span v-if="productBarcode" class="caption grey--text ml-2">({{ productBarcode }})</span>
            </div>
          </div>
        </v-alert>

        <!-- Toggle Returnable Packaging -->
        <v-switch
          v-model="isReturnable"
          label="ສິນຄ້ານີ້ມີບັນຈຸພັນທີ່ຕ້ອງສົ່ງຄືນ (Returnable Packaging Enabled)"
          color="primary"
          inset
          dense
          class="mb-3 font-weight-bold"
        ></v-switch>

        <!-- Packaging Lines Table -->
        <div v-if="isReturnable">
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="caption font-weight-bold grey--text text--darken-2">
              ລາຍການບັນຈຸພັນປະກອບ (Crates & Bottles Component List):
            </span>
            <v-btn small color="primary" outlined @click="addPackagingRow" class="rounded-lg">
              <v-icon left small>mdi-plus</v-icon> ເພີ່ມບັນຈຸພັນ
            </v-btn>
          </div>

          <v-simple-table dense class="elevation-1 rounded-lg">
            <thead>
              <tr class="grey lighten-4">
                <th class="text-left">#</th>
                <th class="text-left" style="min-width: 250px;">ປະເພດບັນຈຸພັນ (Packaging Asset)</th>
                <th class="text-center" style="width: 120px;">ຈຳນວນຕໍ່ລັງ (Ratio)</th>
                <th class="text-right" style="width: 160px;">ຄ່າມັດຈຳຕໍ່ໜ່ວຍ (Deposit Rate)</th>
                <th class="text-right" style="width: 140px;">ລວມມັດຈຳ (Line Total)</th>
                <th class="text-center" style="width: 60px;">ລົບ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in packagingRows" :key="idx">
                <td>{{ idx + 1 }}</td>
                <td>
                  <v-autocomplete
                    v-model="row.packagingProductId"
                    :items="packagingAssetProducts"
                    item-text="displayName"
                    item-value="id"
                    dense
                    outlined
                    hide-details
                    placeholder="ເລືອກລັງ ຫຼື ແກ້ວ..."
                    class="my-1"
                    :loading="isLoadingAssets"
                    no-data-text="ບໍ່ພົບສິນຄ້າ (No Products Available)"
                    @change="onProductSelected(row)"
                  >
                    <template v-slot:item="{ item }">
                      <div class="py-1">
                        <div class="font-weight-bold">{{ item.pro_name }}</div>
                        <div class="caption grey--text">
                          <span v-if="item.barCode">Barcode: {{ item.barCode }} | </span>
                          <span>ລາຄາ: {{ numberWithCommas(item.pro_price) }} LAK</span>
                        </div>
                      </div>
                    </template>
                  </v-autocomplete>
                </td>
                <td>
                  <v-text-field
                    v-model.number="row.quantity"
                    type="number"
                    min="1"
                    dense
                    outlined
                    hide-details
                    class="my-1 text-center"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model.number="row.depositPrice"
                    type="number"
                    min="0"
                    dense
                    outlined
                    hide-details
                    class="my-1 text-right"
                  ></v-text-field>
                </td>
                <td class="text-right font-weight-black primary--text">
                  {{ numberWithCommas((row.quantity || 0) * (row.depositPrice || 0)) }} LAK
                </td>
                <td class="text-center">
                  <v-btn icon small color="error" @click="removePackagingRow(idx)">
                    <v-icon small>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
              <tr v-if="packagingRows.length === 0">
                <td colspan="6" class="text-center pa-4 grey--text">
                  ບໍ່ມີລາຍການບັນຈຸພັນ. ກົດ "ເພີ່ມບັນຈຸພັນ" ເພື່ອກຳນົດລັງ ຫຼື ແກ້ວ.
                </td>
              </tr>
            </tbody>
          </v-simple-table>

          <!-- Total Deposit Summary Card -->
          <v-card outlined class="pa-3 mt-3 rounded-lg grey lighten-5 d-flex justify-space-between align-center">
            <span class="subtitle-2 font-weight-bold">ຍອດຄ່າມັດຈຳລວມຕໍ່ 1 ລັງ (Total Deposit per Case):</span>
            <span class="text-h6 font-weight-black primary--text">
              {{ numberWithCommas(totalDepositPerCase) }} LAK
            </span>
          </v-card>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog" :disabled="isSaving">ຍົກເລີກ</v-btn>
        <v-btn color="primary" depressed @click="savePackaging" :loading="isSaving" class="px-6 rounded-lg">
          <v-icon left small>mdi-content-save</v-icon> ບັນທຶກ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'

export default {
  name: 'PackagingOptionDialog',
  props: {
    value: { type: Boolean, default: false },
    productId: { type: [Number, String], default: null },
    productName: { type: String, default: '' },
    productBarcode: { type: String, default: '' }
  },
  data() {
    return {
      dialog: this.value,
      isReturnable: false,
      packagingRows: [],
      packagingAssetProducts: [],
      isSaving: false,
      isLoading: false,
      isLoadingAssets: false
    }
  },
  watch: {
    value(val) {
      this.dialog = val
      if (val && this.productId) {
        this.loadPackagingData()
        this.loadPackagingAssetProducts()
      }
    },
    dialog(val) {
      this.$emit('input', val)
    }
  },
  computed: {
    totalDepositPerCase() {
      return this.packagingRows.reduce((sum, row) => {
        return sum + ((row.quantity || 0) * (row.depositPrice || 0))
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
      this.$emit('close-dialog')
    },
    addPackagingRow() {
      this.packagingRows.push({
        packagingProductId: null,
        quantity: 1,
        depositPrice: 0
      })
    },
    removePackagingRow(idx) {
      this.packagingRows.splice(idx, 1)
    },
    onProductSelected(row) {
      if (!row || !row.packagingProductId) return
      const matched = this.packagingAssetProducts.find(p => String(p.id) === String(row.packagingProductId) || String(p.pro_id) === String(row.packagingProductId))
      if (matched && (!row.depositPrice || row.depositPrice === 0)) {
        row.depositPrice = matched.pro_price || 0
      }
    },
    async loadPackagingAssetProducts() {
      this.isLoadingAssets = true
      try {
        let rawList = []

        // Strategy 1: Dedicated packaging assets endpoint
        try {
          const resAssets = await this.$axios.get('/api/packaging/assets')
          if (resAssets.data && Array.isArray(resAssets.data) && resAssets.data.length > 0) {
            rawList = resAssets.data
          }
        } catch (e) {
          // ignore fallback
        }

        // Strategy 2: Main product endpoint in dc_web (product_f_v1)
        if (rawList.length === 0) {
          try {
            const res = await this.$axios.get('product_f_v1/1', { params: { isActive: false } })
            rawList = res.data?.data || res.data?.rows || (Array.isArray(res.data) ? res.data : [])
          } catch (e) {
            // ignore fallback
          }
        }

        // Strategy 3: Standard /api/product/find endpoint
        if (rawList.length === 0) {
          try {
            const res2 = await this.$axios.get('/api/product/find')
            rawList = Array.isArray(res2.data) ? res2.data : (res2.data?.rows || res2.data?.data || [])
          } catch (e) {
            // ignore fallback
          }
        }

        // Strategy 4: Vuex Store cache
        if (rawList.length === 0 && this.$store && this.$store.getters.findAllProduct) {
          rawList = this.$store.getters.findAllProduct || []
        }

        if (Array.isArray(rawList) && rawList.length > 0) {
          const mapped = rawList.map((p, idx) => {
            const pid = p.id ?? p.pro_id ?? idx
            const pName = p.pro_name || p.name || 'ສິນຄ້າບໍ່ມີຊື່'
            const pBarcode = p.barCode || p.barcode || ''
            const pPrice = Number(p.pro_price || p.price || 0)
            return {
              id: pid,
              pro_id: p.pro_id ?? p.id ?? idx,
              pro_name: pName,
              barCode: pBarcode,
              pro_price: pPrice,
              isPackagingAsset: p.isPackagingAsset || false,
              displayName: `${pName} ${pBarcode ? '[' + pBarcode + ']' : ''}`
            }
          })

          // Sort so that crates and bottles appear first in the dropdown
          this.packagingAssetProducts = mapped.sort((a, b) => {
            const aIsPkg = a.isPackagingAsset || a.pro_name.includes('ລັງ') || a.pro_name.includes('ແກ້ວ') || a.pro_name.toLowerCase().includes('crate') || a.pro_name.toLowerCase().includes('bottle')
            const bIsPkg = b.isPackagingAsset || b.pro_name.includes('ລັງ') || b.pro_name.includes('ແກ້ວ') || b.pro_name.toLowerCase().includes('crate') || b.pro_name.toLowerCase().includes('bottle')
            if (aIsPkg && !bIsPkg) return -1
            if (!aIsPkg && bIsPkg) return 1
            return 0
          })
        } else {
          this.packagingAssetProducts = []
        }
      } catch (err) {
        console.error('Failed to load packaging asset products:', err)
        this.packagingAssetProducts = []
      } finally {
        this.isLoadingAssets = false
      }
    },
    async loadPackagingData() {
      this.isLoading = true
      try {
        const res = await this.$axios.get(`/api/packaging/product/${this.productId}`)
        const list = Array.isArray(res.data) ? res.data : (res.data?.rows || res.data?.data || [])
        if (list && list.length > 0) {
          this.isReturnable = true
          this.packagingRows = list.map(item => ({
            packagingProductId: item.packagingProductId,
            quantity: item.quantity,
            depositPrice: parseFloat(item.depositPrice) || 0
          }))
        } else {
          this.isReturnable = false
          this.packagingRows = []
        }
      } catch (err) {
        console.error('Failed to load packaging info:', err)
        this.isReturnable = false
        this.packagingRows = []
      } finally {
        this.isLoading = false
      }
    },
    async savePackaging() {
      this.isSaving = true
      try {
        const payload = {
          packagings: this.isReturnable ? this.packagingRows.filter(r => r.packagingProductId) : []
        }
        await this.$axios.post(`/api/packaging/product/${this.productId}`, payload)
        swalSuccess(this.$swal, 'ສຳເລັດ', 'ບັນທຶກກຳນົດບັນຈຸພັນສຳເລັດ')
        this.$emit('saved')
        this.closeDialog()
      } catch (err) {
        console.error('Failed to save packaging configuration:', err)
        swalError2(this.$swal, 'Error', err.response?.data?.message || err.message)
      } finally {
        this.isSaving = false
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

