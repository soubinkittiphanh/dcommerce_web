<template>
  <div>
    <v-card outlined class="mb-4" :loading="loading">
      <v-card-title class="py-2">
        <span class="text-subtitle-1 font-weight-bold">ລາຍການໃໝ່ລໍຖ້າອະນຸມັດ (Unauthorized records)</span>
        <v-spacer />
        <v-text-field v-model="search" dense hide-details outlined clearable prepend-inner-icon="mdi-magnify" label="ຄົ້ນຫາ (Search)" class="mr-2" style="max-width: 260px" />
        <v-btn icon @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
      </v-card-title>
      <v-data-table :headers="recordHeaders" :items="records" dense :items-per-page="25" :footer-props="{ 'items-per-page-options': [25, 50, 100, -1] }" :search="search" no-data-text="ບໍ່ມີລາຍການ (Nothing pending)">
        <template #[`item.authStatus`]="{ item }">
          <v-chip x-small dark :color="authColors[item.authStatus]">{{ item.authStatus }}</v-chip>
        </template>
        <template #[`item.actions`]="{ item }">
          <div v-if="item.authStatus === 'PENDING' && can(item.functionCode, 'AUTHORIZE')" class="d-flex justify-end">
            <v-btn x-small text color="green" class="text-none" :disabled="isMine(item.makerId)" :title="mineTitle(item.makerId)" @click="decideRecord(item, 'authorize')">ອະນຸມັດ (Authorize)</v-btn>
            <v-btn x-small text color="red" class="text-none" :disabled="isMine(item.makerId)" @click="decideRecord(item, 'reject')">ປະຕິເສດ (Reject)</v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <v-card outlined :loading="loading">
      <v-card-title class="py-2">
        <span class="text-subtitle-1 font-weight-bold">ການປ່ຽນແປງລໍຖ້າອະນຸມັດ (Pending changes to authorized records)</span>
      </v-card-title>
      <v-data-table :headers="changeHeaders" :items="changes" dense :items-per-page="25" :footer-props="{ 'items-per-page-options': [25, 50, 100, -1] }" :search="search" no-data-text="ບໍ່ມີລາຍການ (Nothing pending)">
        <template #[`item.values`]="{ item }">
          <code class="text-caption">{{ item.values }}</code>
        </template>
        <template #[`item.actions`]="{ item }">
          <div v-if="can(item.functionCode, 'AUTHORIZE')" class="d-flex justify-end">
            <v-btn x-small text color="green" class="text-none" :disabled="isMine(item.makerId)" :title="mineTitle(item.makerId)" @click="decideChange(item, 'authorize')">ອະນຸມັດ (Authorize)</v-btn>
            <v-btn x-small text color="red" class="text-none" :disabled="isMine(item.makerId)" @click="decideChange(item, 'reject')">ປະຕິເສດ (Reject)</v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { errMsg, asList, AUTH_COLORS } from '~/common/loan/loanApi'
import { functionOf, titleOf } from '~/common/loan/masterConfigs'

// Checker inbox. Makers' own items are disabled here (default LOAN_ALLOW_SELF_AUTHORIZE = false);
// the API decides in every case.
export default {
  name: 'PendingInbox',
  data () {
    return {
      records: [],
      changes: [],
      search: '',
      loading: false,
      authColors: AUTH_COLORS,
      recordHeaders: [
        { text: 'ຕາຕະລາງ (Table)', value: 'title' },
        { text: 'ລະຫັດ (Key)', value: 'label' },
        { text: 'ຜູ້ສ້າງ (Maker)', value: 'makerId' },
        { text: 'ສະຖານະ (Status)', value: 'authStatus' },
        { text: '', value: 'actions', sortable: false, align: 'end' }
      ],
      changeHeaders: [
        { text: 'ຕາຕະລາງ (Table)', value: 'title' },
        { text: 'ລະຫັດ (Key)', value: 'entityKey' },
        { text: 'ການກະທຳ (Action)', value: 'action' },
        { text: 'ຄ່າໃໝ່ (New values)', value: 'values' },
        { text: 'ຜູ້ສ້າງ (Maker)', value: 'makerId' },
        { text: '', value: 'actions', sortable: false, align: 'end' }
      ]
    }
  },
  computed: {
    userId () {
      return this.$auth && this.$auth.user ? Number(this.$auth.user.id) : null
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    can (functionCode, action) {
      return this.$store.getters['loan/can'](functionCode, action)
    },
    isMine (makerId) {
      return makerId !== null && makerId !== undefined && Number(makerId) === this.userId
    },
    mineTitle (makerId) {
      return this.isMine(makerId) ? 'ທ່ານເປັນຜູ້ສ້າງ (You are the maker; another user must authorize)' : ''
    },
    label (row) {
      return row.productCode ? `${row.productCode} v${row.version}` : (row.code || row.componentCode || row.statusCode || row.classCode || row.taxCode || row.regulatoryClassCode || `#${row.id}`)
    },
    async load () {
      this.loading = true
      try {
        const pending = asList(await this.$axios.$get('/api/loan/pending'))
        this.records = pending.flatMap(group => group.rows.map(row => ({
          ...row,
          entity: group.entity,
          entityKey: row[group.key],
          functionCode: group.functionCode,
          title: titleOf(group.entity),
          label: this.label(row)
        })))
        const changes = this.can('LN_AUDIT_LOG', 'VIEW') ? asList(await this.$axios.$get('/api/loan/changes')) : []
        this.changes = changes.map(c => ({
          ...c,
          functionCode: functionOf(c.entityName),
          title: titleOf(c.entityName),
          values: c.payloadJson ? JSON.stringify(JSON.parse(c.payloadJson).values || {}) : ''
        }))
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    async decideRecord (item, action) {
      try {
        const res = await this.$axios.$post(`/api/loan/params/${item.entity}/${item.entityKey}/${action}`, {})
        this.$toast.success(res.message)
        await this.after()
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    },
    async decideChange (item, action) {
      try {
        const res = await this.$axios.$post(`/api/loan/changes/${item.id}/${action}`, {})
        this.$toast.success(res.message)
        await this.after()
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    },
    async after () {
      await this.load()
      this.$store.dispatch('loan/fetchBanner')
      this.$emit('changed')
    }
  }
}
</script>
