<template>
  <v-card outlined :loading="loading">
    <v-card-title class="py-2 flex-wrap">
      <span class="text-subtitle-1 font-weight-bold">ກົດການບັນທຶກບັນຊີ (Accounting entry rules)</span>
      <v-spacer />
      <v-btn icon :disabled="loading" @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
    </v-card-title>

    <v-card-text>
      <v-alert v-if="!canView" type="info" text dense>ທ່ານບໍ່ມີສິດເບິ່ງ (No VIEW permission for LN_ENTRY_RULE).</v-alert>

      <template v-else>
        <v-alert type="info" text dense class="mb-3">
          ອ່ານຢ່າງດຽວ: ກົດຖືກສ້າງຈາກ seed ແລະ ແກ້ໄຂໃນ "ຂໍ້ມູນພື້ນຖານ". ການອະນຸມັດຕ້ອງເປັນຄົນທີສອງ ແລະ ທຸກແຖວຖືກບັນທຶກປະຫວັດ.
          (Read-only list. Rules are edited in Master data. Authorizing needs a second person unless LOAN_ALLOW_SELF_AUTHORIZE is on; every row is audited.)
        </v-alert>

        <v-row dense>
          <v-col cols="12" md="4">
            <v-autocomplete v-model="filters.event" :items="eventItems" label="ເຫດການ (Event)" dense outlined clearable hide-details />
          </v-col>
          <v-col cols="6" md="3">
            <v-select v-model="filters.active" :items="activeItems" label="ໃຊ້ງານ (Active)" dense outlined hide-details />
          </v-col>
          <v-col cols="6" md="3">
            <v-select v-model="filters.status" :items="statusItems" label="ສະຖານະ (Status)" dense outlined hide-details />
          </v-col>
          <v-col cols="12" md="2" class="d-flex align-center text-caption grey--text">
            {{ filtered.length }} / {{ rules.length }} ກົດ (rules)
          </v-col>
        </v-row>

        <v-expansion-panels multiple class="mt-3">
          <v-expansion-panel v-for="g in groups" :key="g.eventCode">
            <v-expansion-panel-header>
              <div class="d-flex align-center flex-wrap">
                <span class="font-weight-bold mr-2">{{ g.eventCode }}</span>
                <span class="text-caption grey--text mr-3">{{ eventName(g.eventCode) }}</span>
                <v-chip v-if="g.pending.length" x-small dark color="orange" class="mr-1">{{ g.pending.length }} PENDING</v-chip>
                <v-chip v-if="g.authorized" x-small dark color="green" class="mr-1">{{ g.authorized }} AUTHORIZED</v-chip>
                <v-chip v-if="g.inactive" x-small outlined class="mr-1">{{ g.inactive }} inactive</v-chip>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-if="canAuthorize && g.pending.length" class="d-flex mb-2">
                <v-spacer />
                <v-btn small color="green" dark class="text-none" @click="openReview(g)">
                  <v-icon left small>mdi-check-all</v-icon>ກວດ ແລະ ອະນຸມັດ (Review &amp; authorize {{ g.pending.length }})
                </v-btn>
              </div>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th>Tag</th><th>Dr/Cr</th><th>ບົດບາດ (Role)</th><th>Qualifier</th>
                    <th>ເງື່ອນໄຂ (Filters)</th><th>ໃຊ້ງານ (Active)</th><th>ສະຖານະ (Status)</th><th>ມີຜົນແຕ່ (From)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="r in g.rows" :key="r.id" :class="{ 'grey--text': !r.isActive }">
                    <td>{{ r.amountTag }}</td>
                    <td>{{ r.drCr }}</td>
                    <td>{{ r.roleCode }}</td>
                    <td>{{ r.qualifierSource === 'NONE' ? '' : r.qualifierSource }}</td>
                    <td class="text-caption">{{ filterText(r) }}</td>
                    <td><v-icon small :color="r.isActive ? 'green' : 'grey'">{{ r.isActive ? 'mdi-check' : 'mdi-minus' }}</v-icon></td>
                    <td><v-chip x-small dark :color="authColors[r.authStatus]">{{ r.authStatus }}</v-chip></td>
                    <td class="text-caption">{{ r.effectiveFrom }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div v-if="!loading && !groups.length" class="text-center grey--text py-6">ບໍ່ມີກົດທີ່ກົງກັບເງື່ອນໄຂ (No rules match the filters)</div>
      </template>
    </v-card-text>

    <v-dialog v-model="review.open" max-width="760" scrollable>
      <v-card v-if="review.group">
        <v-card-title class="text-subtitle-1 font-weight-bold">
          ກວດ ແລະ ອະນຸມັດ {{ review.group.eventCode }} (Review &amp; authorize)
        </v-card-title>
        <v-card-text>
          <v-alert v-if="review.own.length" type="warning" text dense>
            {{ review.own.length }} ກົດສ້າງໂດຍທ່ານ: ຕ້ອງໃຫ້ຄົນອື່ນອະນຸມັດ.
            ({{ review.own.length }} rule(s) were created by you and need another checker; they are left out unless you include them, which only works when self-authorization is enabled and is audited.)
            <v-checkbox v-model="review.includeOwn" dense hide-details label="ລວມກົດຂອງຂ້ອຍ (Include my own rules)" />
          </v-alert>
          <v-simple-table dense>
            <thead><tr><th>Tag</th><th>Dr/Cr</th><th>ບົດບາດ (Role)</th><th>ເງື່ອນໄຂ (Filters)</th><th>ໃຊ້ງານ (Active)</th><th>ຜູ້ສ້າງ (Maker)</th></tr></thead>
            <tbody>
              <tr v-for="r in reviewRows" :key="r.id">
                <td>{{ r.amountTag }}</td><td>{{ r.drCr }}</td><td>{{ r.roleCode }}{{ r.qualifierSource === 'NONE' ? '' : ` [${r.qualifierSource}]` }}</td>
                <td class="text-caption">{{ filterText(r) }}</td><td>{{ r.isActive ? 'yes' : 'no' }}</td><td>#{{ r.makerId || 'seed' }}</td>
              </tr>
            </tbody>
          </v-simple-table>
          <div class="text-caption mt-2">
            ທັງໝົດ ຫຼື ບໍ່ມີເລີຍ: ຖ້າແຖວໃດຜິດ, ບໍ່ມີແຖວໃດຖືກອະນຸມັດ. (All or nothing: if any row is refused, none is authorized.)
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text class="text-none" @click="review.open = false">ຍົກເລີກ (Cancel)</v-btn>
          <v-btn color="green" dark class="text-none" :loading="review.busy" :disabled="!reviewRows.length" @click="authorizeGroup">
            ອະນຸມັດ {{ reviewRows.length }} ກົດ (Authorize {{ reviewRows.length }})
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { errMsg, asList, AUTH_COLORS } from '~/common/loan/loanApi'

// Entry rules grouped by event, with a bulk review-and-authorize action per group.
// The API (POST /params/accounting-entry-rule/bulk-authorize) enforces maker-checker and audits each row.
export default {
  name: 'EntryRulesPanel',
  data () {
    return {
      loading: false,
      rules: [],
      events: {},
      filters: { event: null, active: 'ALL', status: 'ALL' },
      activeItems: [
        { value: 'ALL', text: 'ທັງໝົດ (All)' },
        { value: 'ACTIVE', text: 'ໃຊ້ງານ (Active)' },
        { value: 'INACTIVE', text: 'ບໍ່ໃຊ້ງານ (Inactive options)' }
      ],
      statusItems: [
        { value: 'ALL', text: 'ທັງໝົດ (All)' },
        { value: 'PENDING', text: 'ລໍຖ້າອະນຸມັດ (Pending)' },
        { value: 'AUTHORIZED', text: 'ອະນຸມັດແລ້ວ (Authorized)' },
        { value: 'REJECTED', text: 'ປະຕິເສດ (Rejected)' }
      ],
      review: { open: false, group: null, own: [], includeOwn: false, busy: false },
      authColors: AUTH_COLORS
    }
  },
  computed: {
    canView () { return this.$store.getters['loan/can']('LN_ENTRY_RULE', 'VIEW') },
    canAuthorize () { return this.$store.getters['loan/can']('LN_ENTRY_RULE', 'AUTHORIZE') },
    userId () { return this.$auth && this.$auth.user ? Number(this.$auth.user.id) : null },
    eventItems () {
      return [...new Set(this.rules.map(r => r.eventCode))].sort().map(e => ({ value: e, text: `${e} - ${this.eventName(e)}` }))
    },
    filtered () {
      const { event, active, status } = this.filters
      return this.rules.filter(r => (!event || r.eventCode === event)
        && (active === 'ALL' || (active === 'ACTIVE') === Boolean(r.isActive))
        && (status === 'ALL' || r.authStatus === status))
    },
    groups () {
      const by = {}
      for (const r of this.filtered) (by[r.eventCode] = by[r.eventCode] || []).push(r)
      return Object.keys(by).sort().map(eventCode => {
        const rows = by[eventCode]
        return {
          eventCode,
          rows,
          pending: rows.filter(r => r.authStatus === 'PENDING'),
          authorized: rows.filter(r => r.authStatus === 'AUTHORIZED').length,
          inactive: rows.filter(r => !r.isActive).length
        }
      })
    },
    reviewRows () {
      if (!this.review.group) return []
      return this.review.group.pending.filter(r => this.review.includeOwn || !this.isMine(r))
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    isMine (r) { return r.makerId !== null && r.makerId !== undefined && Number(r.makerId) === this.userId },
    eventName (code) { return this.events[code] || '' },
    filterText (r) {
      return [['mode', r.feeModeFilter], ['presentation', r.presentationFilter], ['target', r.targetFilter]]
        .filter(([, v]) => v && v !== 'ANY').map(([k, v]) => `${k}=${v}`).join(', ') || 'all products'
    },
    async fetchAll (entity) {
      const out = []
      for (let page = 1; ; page++) {
        const res = await this.$axios.$get(`/api/loan/params/${entity}`, { params: { limit: 500, page } })
        out.push(...asList(res))
        if (!res.data || !res.data.totalPages || page >= res.data.totalPages) return out
      }
    },
    async load () {
      if (!this.canView) return
      this.loading = true
      try {
        const [rules, events] = await Promise.all([this.fetchAll('accounting-entry-rule'), this.fetchAll('event')])
        this.rules = rules
        this.events = Object.fromEntries(events.map(e => [e.eventCode, e.name]))
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    openReview (group) {
      this.review = { open: true, group, own: group.pending.filter(r => this.isMine(r)), includeOwn: false, busy: false }
    },
    async authorizeGroup () {
      this.review.busy = true
      try {
        const res = await this.$axios.$post('/api/loan/params/accounting-entry-rule/bulk-authorize', { keys: this.reviewRows.map(r => r.id) })
        this.$toast.success(res.message)
        this.review.open = false
        await this.load()
        this.$emit('changed')
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.review.busy = false
      }
    }
  }
}
</script>
