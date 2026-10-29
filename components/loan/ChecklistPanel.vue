<template>
  <v-card outlined :loading="loading">
    <v-card-title class="py-2">
      <span class="text-subtitle-1 font-weight-bold">ລາຍການກວດສອບກ່ອນເປີດໃຊ້ (Go-live checklist)</span>
      <v-spacer />
      <v-chip small :color="data.canDisburse ? 'green' : 'amber darken-3'" dark class="mr-2">
        {{ data.canDisburse ? 'ພ້ອມເບີກຈ່າຍ (Disbursement allowed)' : 'ລັອກການເບີກຈ່າຍ (Disbursement blocked)' }}
      </v-chip>
      <v-btn icon @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
    </v-card-title>
    <v-card-text>
      <v-alert v-if="!canView" type="info" text dense>ທ່ານບໍ່ມີສິດເບິ່ງ (No VIEW permission for LN_CHECKLIST).</v-alert>
      <v-simple-table v-else dense>
        <thead>
          <tr>
            <th>ລາຍການ (Item)</th>
            <th>ຄ່າປັດຈຸບັນ (Current values)</th>
            <th>ສະຖານະ (Status)</th>
            <th>ຢືນຢັນໂດຍ (Confirmed by)</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data.checklistItems || []" :key="item.itemKey">
            <td>
              <div class="font-weight-bold">{{ item.title }}</div>
              <div class="text-caption grey--text">{{ item.category }} · {{ item.severity }}</div>
            </td>
            <td class="text-body-2">
              {{ item.description }}
              <div v-if="item.pendingChanges" class="orange--text text-caption">
                {{ item.pendingChanges }} ລາຍການລໍຖ້າອະນຸມັດ (pending changes to authorize first)
              </div>
            </td>
            <td><v-chip x-small dark :color="statusColor(item.status)">{{ item.status }}</v-chip></td>
            <td class="text-caption">
              <span v-if="item.confirmedBy">#{{ item.confirmedBy }} · {{ item.confirmedAt }}</span>
            </td>
            <td class="text-right">
              <v-btn
                v-if="canConfirm && item.status === 'UNCONFIRMED'"
                small color="primary" class="text-none" :disabled="!!item.pendingChanges" :loading="busy === item.itemKey"
                @click="confirm(item)"
              >
                ກວດສອບ ແລະ ຢືນຢັນ (Review &amp; confirm)
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { errMsg } from '~/common/loan/loanApi'

// Each item is confirmed explicitly; the API stores who/when and a snapshot, and resets the item
// when a related parameter change is authorized later.
export default {
  name: 'ChecklistPanel',
  data () {
    return { data: {}, loading: false, busy: null }
  },
  computed: {
    canView () { return this.$store.getters['loan/can']('LN_CHECKLIST', 'VIEW') },
    canConfirm () { return this.$store.getters['loan/can']('LN_CHECKLIST', 'AUTHORIZE') }
  },
  mounted () {
    this.load()
  },
  methods: {
    statusColor (s) {
      return { CONFIRMED: 'green', UNCONFIRMED: 'orange', HELD: 'grey' }[s] || 'grey'
    },
    async load () {
      if (!this.canView) return
      this.loading = true
      try {
        this.data = (await this.$axios.$get('/api/loan/checklist')).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    async confirm (item) {
      const ok = await this.$swal({
        title: 'ຢືນຢັນ? (Confirm?)',
        text: `${item.title}: ${item.description}`,
        icon: 'question',
        showCancelButton: true
      })
      if (!ok.isConfirmed) return
      this.busy = item.itemKey
      try {
        const res = await this.$axios.$post(`/api/loan/checklist/${item.itemKey}/confirm`, {})
        this.data = res.data
        this.$toast.success(res.message)
        this.$store.dispatch('loan/fetchBanner')
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.busy = null
      }
    }
  }
}
</script>
