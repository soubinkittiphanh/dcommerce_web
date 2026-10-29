<template>
  <v-card outlined>
    <v-card-title class="py-2">
      <span class="text-subtitle-1 font-weight-bold">{{ config.title }}</span>
      <v-spacer />
      <v-text-field v-model="search" dense hide-details outlined clearable prepend-inner-icon="mdi-magnify" label="ຄົ້ນຫາ (Search)" class="mr-2" style="max-width: 220px" />
      <v-select
        v-model="statusFilter"
        :items="statusItems"
        dense
        hide-details
        outlined
        class="mr-2"
        style="max-width: 200px"
        label="ສະຖານະ (Status)"
        @change="load"
      />
      <v-btn icon :loading="loading" @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
      <v-btn v-if="can('CREATE')" color="primary" small class="text-none ml-1" @click="openCreate">
        <v-icon left small>mdi-plus</v-icon> ເພີ່ມ (New)
      </v-btn>
    </v-card-title>

    <v-alert v-if="!can('VIEW')" type="info" text dense class="ma-3">
      ທ່ານບໍ່ມີສິດເບິ່ງຂໍ້ມູນນີ້ (You do not have VIEW permission for {{ config.functionCode }}).
    </v-alert>

    <v-data-table
      v-else
      :headers="headers"
      :items="items"
      :loading="loading"
      dense
      :items-per-page="25"
      :footer-props="{ 'items-per-page-options': [25, 50, 100, -1] }"
      :search="search"
      class="elevation-0"
    >
      <template #[`item.authStatus`]="{ item }">
        <v-chip x-small :color="authColors[item.authStatus]" dark>{{ item.authStatus }}</v-chip>
        <v-chip v-if="changeFor(item)" x-small color="deep-purple" dark class="ml-1">
          {{ changeFor(item).action }} pending
        </v-chip>
      </template>
      <template v-for="b in boolColumns" #[`item.${b}`]="{ item }">
        <v-icon :key="b" small :color="item[b] ? 'green' : 'grey'">{{ item[b] ? 'mdi-check' : 'mdi-minus' }}</v-icon>
      </template>
      <template #[`item.actions`]="{ item }">
        <div class="d-flex justify-end">
          <template v-if="changeFor(item) && can('AUTHORIZE')">
            <v-btn x-small text color="green" class="text-none" @click="decideChange(changeFor(item), 'authorize')">ອະນຸມັດການປ່ຽນ (Authorize change)</v-btn>
            <v-btn x-small text color="red" class="text-none" @click="decideChange(changeFor(item), 'reject')">ປະຕິເສດ (Reject)</v-btn>
          </template>
          <template v-if="item.authStatus === 'PENDING' && can('AUTHORIZE')">
            <v-btn x-small text color="green" class="text-none" @click="decide(item, 'authorize')">ອະນຸມັດ (Authorize)</v-btn>
            <v-btn x-small text color="red" class="text-none" @click="decide(item, 'reject')">ປະຕິເສດ (Reject)</v-btn>
          </template>
          <v-btn
            v-if="can('EDIT') && ['PENDING', 'REJECTED', 'AUTHORIZED'].includes(item.authStatus)"
            icon x-small :disabled="!editable(item)" :title="editTitle(item)" @click="openEdit(item)"
          >
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            v-if="can('DELETE') && item.authStatus !== 'CLOSED'"
            icon x-small :disabled="!editable(item)" title="ລຶບ (Delete)" @click="remove(item)"
          >
            <v-icon small color="red">mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="720" persistent>
      <v-card>
        <v-card-title class="text-subtitle-1 font-weight-bold">
          {{ editing ? 'ແກ້ໄຂ (Edit)' : 'ເພີ່ມ (New)' }} - {{ config.title }}
        </v-card-title>
        <v-card-text>
          <v-alert v-if="editing && editing.authStatus === 'AUTHORIZED'" type="info" text dense>
            ລາຍການນີ້ອະນຸມັດແລ້ວ: ການແກ້ໄຂຈະລໍຖ້າການອະນຸມັດ (This record is authorized: your edit is saved as a pending change for a checker).
          </v-alert>
          <v-row dense>
            <v-col v-for="fld in formFields" :key="fld.key" cols="12" :md="fld.type === 'textarea' ? 12 : 6">
              <v-switch v-if="fld.type === 'bool'" v-model="form[fld.key]" :label="fld.label" dense hide-details class="mt-1" />
              <v-autocomplete
                v-else-if="fld.type === 'select'"
                v-model="form[fld.key]"
                :items="options[fld.key] || []"
                :label="fld.label"
                :clearable="!!fld.optional"
                :disabled="identityLocked(fld)"
                dense outlined
              />
              <v-textarea v-else-if="fld.type === 'textarea'" v-model="form[fld.key]" :label="fld.label" rows="2" dense outlined />
              <v-text-field
                v-else
                v-model="form[fld.key]"
                :label="fld.label"
                :type="inputType(fld)"
                :hint="hints[fld.type]"
                :disabled="identityLocked(fld)"
                dense outlined
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text class="text-none" @click="dialog = false">ຍົກເລີກ (Cancel)</v-btn>
          <v-btn color="primary" class="text-none" :loading="saving" @click="save">ບັນທຶກ (Save)</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { errMsg, asList, loadPosOptions, loadRefOptions, AUTH_COLORS } from '~/common/loan/loanApi'

// Generic list / create / edit / authorize screen for one loan parameter table (see masterConfigs.js).
// Buttons follow the user's sec_group_grant permissions; the API enforces them and maker-checker.
export default {
  name: 'MasterDataTable',
  props: {
    config: { type: Object, required: true },
    // Extra list filters, e.g. { productId: 12 } for the children of one product
    filters: { type: Object, default: () => ({}) },
    // Values forced on create and hidden from the form, e.g. { productId: 12 }
    fixed: { type: Object, default: () => ({}) },
    // Hide create / edit / delete (e.g. children of a product version that is not editable)
    readonly: { type: Boolean, default: false }
  },
  data () {
    return {
      items: [],
      changes: [],
      search: '',
      loading: false,
      saving: false,
      statusFilter: '',
      dialog: false,
      editing: null,
      form: {},
      options: {},
      authColors: AUTH_COLORS,
      statusItems: [
        { text: 'ທັງໝົດ (All)', value: '' },
        { text: 'ລໍຖ້າ (Pending)', value: 'PENDING' },
        { text: 'ອະນຸມັດ (Authorized)', value: 'AUTHORIZED' },
        { text: 'ປະຕິເສດ (Rejected)', value: 'REJECTED' },
        { text: 'ປິດ (Closed)', value: 'CLOSED' }
      ],
      hints: {
        money: 'Decimal, up to 4 places (e.g. 300000.0000)',
        rate: 'Rate between 0 and 1 (0.12 = 12%)',
        decimal: 'Decimal, up to 6 places'
      }
    }
  },
  computed: {
    keyField () {
      return this.config.keyField || 'id'
    },
    columnKeys () {
      return this.config.columns || this.config.fields.slice(0, 5).map(x => x.key)
    },
    headers () {
      const label = k => (this.config.fields.find(x => x.key === k) || { label: k }).label
      return [
        ...this.columnKeys.map(k => ({ text: label(k), value: k })),
        { text: 'ສະຖານະ (Status)', value: 'authStatus' },
        { text: '', value: 'actions', sortable: false, align: 'end' }
      ]
    },
    formFields () {
      return this.config.fields.filter(x => this.fixed[x.key] === undefined)
    },
    boolColumns () {
      return this.columnKeys.filter(k => (this.config.fields.find(x => x.key === k) || {}).type === 'bool')
    },
    userId () {
      return this.$auth && this.$auth.user ? Number(this.$auth.user.id) : null
    }
  },
  watch: {
    config () {
      this.options = {}
      this.load()
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    can (action) {
      if (this.readonly && ['CREATE', 'EDIT', 'DELETE'].includes(action)) return false
      return this.$store.getters['loan/can'](this.config.functionCode, action)
    },
    async load () {
      if (!this.can('VIEW')) return
      this.loading = true
      try {
        const params = { limit: 500, ...this.filters }
        if (this.statusFilter) params.authStatus = this.statusFilter
        const [rows, changes] = await Promise.all([
          this.$axios.$get(`/api/loan/params/${this.config.entity}`, { params }),
          this.$axios.$get('/api/loan/changes', { params: { entityName: this.config.entity } }).catch(() => ({ data: [] }))
        ])
        this.items = asList(rows)
        this.changes = asList(changes)
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    changeFor (item) {
      return this.changes.find(c => c.entityKey === String(item[this.keyField]))
    },
    // Unauthorized rows can only be edited by their maker; authorized rows get a pending change
    editable (item) {
      if (item.authStatus === 'AUTHORIZED') return !this.changeFor(item)
      return item.makerId === null || item.makerId === undefined || Number(item.makerId) === this.userId
    },
    editTitle (item) {
      if (this.editable(item)) return item.authStatus === 'AUTHORIZED' ? 'ສົ່ງການປ່ຽນແປງ (Submit change)' : 'ແກ້ໄຂ (Edit)'
      return item.authStatus === 'AUTHORIZED' ? 'A change is already pending' : 'Only the maker can edit an unauthorized record'
    },
    identityLocked (fld) {
      return !!(fld.identity && this.editing && this.editing.authStatus === 'AUTHORIZED')
    },
    inputType (fld) {
      return { int: 'number', date: 'date' }[fld.type] || 'text'
    },
    async loadOptions () {
      const lookups = this.$store.state.loan.lookups
      for (const fld of this.config.fields.filter(x => x.type === 'select')) {
        if (this.options[fld.key]) continue
        try {
          let items = []
          if (fld.lookup) items = (lookups[fld.lookup] || []).map(l => ({ value: l.code, text: `${l.code} - ${l.name}` }))
          else if (fld.enumKey) items = this.$store.getters['loan/enumOf'](fld.enumKey).map(v => ({ value: v, text: v }))
          else if (fld.ref) items = await loadRefOptions(this.$axios, fld.ref)
          else if (fld.pos) items = await loadPosOptions(this.$axios, fld.pos)
          this.$set(this.options, fld.key, items)
        } catch (err) {
          this.$toast.error(`${fld.label}: ${errMsg(err)}`)
        }
      }
    },
    openCreate () {
      this.editing = null
      this.form = Object.fromEntries(this.config.fields.map(x => [x.key, x.type === 'bool' ? false : null]))
      this.dialog = true
      this.loadOptions()
    },
    openEdit (item) {
      this.editing = item
      this.form = Object.fromEntries(this.config.fields.map(x => [x.key, item[x.key] === undefined ? null : item[x.key]]))
      this.dialog = true
      this.loadOptions()
    },
    payload () {
      const out = {}
      for (const fld of this.config.fields) {
        let v = this.form[fld.key]
        if (v === '' || v === undefined) v = null
        if (this.editing) {
          if (String(v) === String(this.editing[fld.key] === undefined ? null : this.editing[fld.key])) continue
        } else if (v === null && fld.type !== 'bool') {
          continue
        }
        if (fld.type === 'int' && v !== null) v = Number(v)
        out[fld.key] = v
      }
      if (!this.editing) Object.assign(out, this.fixed)
      return out
    },
    async save () {
      this.saving = true
      try {
        const body = this.payload()
        const res = this.editing
          ? await this.$axios.$put(`/api/loan/params/${this.config.entity}/${this.editing[this.keyField]}`, body)
          : await this.$axios.$post(`/api/loan/params/${this.config.entity}`, body)
        this.$toast.success(res.message || 'Saved')
        this.dialog = false
        await this.load()
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.saving = false
      }
    },
    async decide (item, action) {
      try {
        const res = await this.$axios.$post(`/api/loan/params/${this.config.entity}/${item[this.keyField]}/${action}`, {})
        this.$toast.success(res.message)
        await this.afterDecision()
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    },
    async decideChange (change, action) {
      try {
        const res = await this.$axios.$post(`/api/loan/changes/${change.id}/${action}`, {})
        this.$toast.success(res.message)
        await this.afterDecision()
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    },
    async remove (item) {
      const confirm = await this.$swal({
        title: 'ລຶບລາຍການ? (Delete?)',
        text: item.authStatus === 'AUTHORIZED' ? 'An authorized record is closed only after a checker approves.' : 'This unauthorized record will be removed.',
        icon: 'warning',
        showCancelButton: true
      })
      if (!confirm.isConfirmed) return
      try {
        const res = await this.$axios.$delete(`/api/loan/params/${this.config.entity}/${item[this.keyField]}`)
        this.$toast.success(res.message)
        await this.load()
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    },
    async afterDecision () {
      await this.load()
      this.$store.dispatch('loan/fetchBanner')
      this.$emit('changed')
    }
  }
}
</script>
