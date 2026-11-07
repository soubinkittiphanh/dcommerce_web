<template>
  <div class="pa-4">
    <!-- Header -->
    <header class="mb-4">
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-3" size="32">mdi-chart-box-outline</v-icon>
          <div>
            <h1 class="text-h5 font-weight-black primary--text mb-0">
              ຕາຕະລາງດຸນດ່ຽງບັນຈຸພັນລວມ / Master Packaging Balance Matrix
            </h1>
            <span class="text-caption grey--text text--darken-1">
              ກວດສອບຄວາມຖືກຕ້ອງຂອງບັນຈຸພັນ: ໃນສາງ + ຢູ່ຮ້ານລູກຄ້າ + ແກ້ວແຕກ vs ໂຄຕ້າໂຮງງານເບຍລາວ
            </span>
          </div>
        </div>
        <div class="d-flex align-center flex-wrap mt-2 mt-sm-0">
          <v-select
            v-model="selectedLocationId"
            :items="locationOptions"
            item-text="name"
            item-value="id"
            label="ສາຂາ / ສາງ (Location)"
            outlined
            dense
            hide-details
            prepend-inner-icon="mdi-map-marker"
            class="rounded-lg mr-2"
            style="min-width: 220px;"
            @change="loadMatrix"
          ></v-select>
          <v-btn color="primary" depressed @click="loadMatrix" :loading="isLoading" class="rounded-lg">
            <v-icon left small>mdi-refresh</v-icon> ຄິດໄລ່ໃໝ່ (Recalculate)
          </v-btn>
        </div>
      </div>
    </header>

    <!-- Master Golden Equation Explanation Banner -->
    <v-card color="primary" dark class="pa-4 mb-4 rounded-xl elevation-3">
      <div class="d-flex align-center">
        <v-avatar color="rgba(255,255,255,0.2)" size="48" class="mr-3">
          <v-icon color="white">mdi-scale-balance</v-icon>
        </v-avatar>
        <div>
          <div class="subtitle-1 font-weight-black">ສົມຜົນດຸນດ່ຽງບັນຈຸພັນ (Golden Packaging Reconciliation Equation):</div>
          <div class="caption opacity-90 mt-1">
            <b>ຍອດບັນຈຸພັນທັງໝົດ</b> = [ລັງ/ແກ້ວເປົ່າໃນສາງ] + [ໃນເບຍເຕັມລັງ] + [ໜີ້ຄ້າງຢູ່ຮ້ານລູກຄ້າ] + [ແກ້ວແຕກ/ລັງຊຳລຸດ] - [ໜີ້ຄ້າງໂຮງງານເບຍລາວ]
          </div>
        </div>
      </div>
    </v-card>

    <!-- Matrix Cards Grid -->
    <v-row dense class="mb-4">
      <v-col v-for="row in matrixData" :key="row.productId" cols="12" md="6">
        <v-card outlined class="rounded-xl pa-4 h-100">
          <div class="d-flex justify-space-between align-center border-bottom pb-2 mb-3">
            <div>
              <div class="text-h6 font-weight-black primary--text">{{ row.name }}</div>
              <span class="caption grey--text">Barcode: {{ row.barCode || '-' }}</span>
            </div>
            <v-chip
              :color="row.variance === 0 ? 'success' : (row.variance > 0 ? 'info' : 'error')"
              dark
              label
              class="font-weight-black"
            >
              {{ row.variance === 0 ? '✅ ດຸນດ່ຽງສົມບູນ (0)' : `ສ່ວນຕ່າງ: ${row.variance > 0 ? '+' : ''}${numberWithCommas(row.variance)}` }}
            </v-chip>
          </div>

          <v-simple-table dense class="grey lighten-5 rounded-lg mb-3">
            <tbody>
              <tr>
                <td class="caption font-weight-bold">📦 1. ລັງ/ແກ້ວເປົ່າໃນສາງ (Ready Empties in Warehouse):</td>
                <td class="text-right font-weight-bold">{{ numberWithCommas(row.emptyStockWarehouse) }}</td>
              </tr>
              <tr>
                <td class="caption font-weight-bold">🍺 2. ບັນຈຸພັນໃນເບຍເຕັມລັງ (Inside Full Cases on Shelf):</td>
                <td class="text-right font-weight-bold">{{ numberWithCommas(row.embeddedInFullCases) }}</td>
              </tr>
              <tr>
                <td class="caption font-weight-bold">🏪 3. ໜີ້ຄ້າງຢູ່ຮ້ານລູກຄ້າ (Wholesale Clients Debt):</td>
                <td class="text-right font-weight-bold amber--text text--darken-4">+{{ numberWithCommas(row.wholesaleCustomerDebt) }}</td>
              </tr>
              <tr>
                <td class="caption font-weight-bold">💥 4. ແກ້ວແຕກ / ລັງຊຳລຸດ (Breakages / Damage Log):</td>
                <td class="text-right font-weight-bold purple--text">+{{ numberWithCommas(row.totalBreakages) }}</td>
              </tr>
              <tr class="primary lighten-5">
                <td class="caption font-weight-black primary--text">🔹 ລວມຊັບສິນບັນຈຸພັນຕົວແທນ (Total Owned Assets):</td>
                <td class="text-right font-weight-black primary--text">{{ numberWithCommas(row.totalAssetsOwned) }}</td>
              </tr>
              <tr class="red lighten-5">
                <td class="caption font-weight-black error--text">🏭 5. ໜີ້ຄ້າງກັບໂຮງງານເບຍລາວ (Beerlao Factory Liability):</td>
                <td class="text-right font-weight-black error--text">-{{ numberWithCommas(row.factoryLiabilityWithBeerlao) }}</td>
              </tr>
            </tbody>
          </v-simple-table>

          <div class="d-flex justify-space-between align-center caption grey--text">
            <span>ສະຖານະການກວດສອບ:</span>
            <span v-if="row.variance === 0" class="success--text font-weight-bold">
              ບໍ່ມີລັງ-ແກ້ວສູນຫາຍ (No Discrepancy)
            </span>
            <span v-else class="error--text font-weight-bold">
              ມີສ່ວນຕ່າງ {{ numberWithCommas(row.variance) }} ໜ່ວຍ (ຕ້ອງກວດສອບຄືນ)
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Empty State -->
    <v-card v-if="!isLoading && matrixData.length === 0" outlined class="pa-8 text-center rounded-xl grey lighten-5 mb-4">
      <v-avatar color="grey lighten-3" size="64" class="mb-3">
        <v-icon size="36" color="grey darken-1">mdi-package-variant-closed</v-icon>
      </v-avatar>
      <div class="text-subtitle-1 font-weight-bold grey--text text--darken-3">ບໍ່ມີຂໍ້ມູນສິນຄ້າບັນຈຸພັນ (No Packaging Assets Found)</div>
      <div class="text-caption grey--text text--darken-1 mt-1">
        ບໍ່ພົບສິນຄ້າບັນຈຸພັນ (ລັງ/ແກ້ວ) ທີ່ກຳນົດເປັນ Packaging Asset ຫຼື ຈັດຢູ່ໃນໝວດໝູ່ບັນຈຸພັນໃນລະບົບ
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MasterPackagingMatrix',
  layout: 'default',
  middleware: 'auths',
  data() {
    return {
      selectedLocationId: 'all',
      matrixData: [],
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['findAllLocation']),
    locationOptions() {
      return [
        { id: 'all', name: '🏢 ທຸກສາຂາ/ສາງ (All Locations)' },
        ...(this.findAllLocation || []).map(l => ({ id: l.id, name: l.name }))
      ]
    }
  },
  async created() {
    await this.loadMatrix()
  },
  methods: {
    numberWithCommas(value) {
      if (value === undefined || value === null) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    async loadMatrix() {
      this.isLoading = true
      try {
        const res = await this.$axios.get('/api/packaging/matrix', {
          params: { locationId: this.selectedLocationId }
        })
        const raw = Array.isArray(res.data) ? res.data : (res.data?.data || res.data?.rows || [])
        this.matrixData = raw
      } catch (err) {
        console.error('Failed to load master packaging matrix:', err)
        if (this.$toast) {
          this.$toast.error('ບໍ່ສາມາດໂຫຼດຕາຕະລາງດຸນດ່ຽງບັນຈຸພັນໄດ້: ' + (err.response?.data?.message || err.message))
        }
      } finally {
        this.isLoading = false
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

