<template>
  <div>
    <v-card outlined :loading="loading" class="mb-4">
      <v-card-title class="py-2">
        <span class="text-subtitle-1 font-weight-bold">ໂປຣໄຟລ໌ອາກອນ (Tax profile)</span>
        <v-spacer />
        <v-chip small dark :color="profile.confirmationStatus === 'CONFIRMED' ? 'green' : 'orange'">{{ profile.confirmationStatus }}</v-chip>
      </v-card-title>
      <v-card-text v-if="!canView">
        <v-alert type="info" text dense>ທ່ານບໍ່ມີສິດເບິ່ງ (No VIEW permission for LN_TAX_PROFILE).</v-alert>
      </v-card-text>
      <v-card-text v-else>
        <v-row dense>
          <v-col cols="12" md="4">
            <v-switch v-model="form.companyVatRegistered" :disabled="!canEdit" label="ບໍລິສັດຈົດທະບຽນ VAT (Company VAT registered)" />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.posTaxId"
              :items="posTaxItems"
              :disabled="!canEdit"
              label="ອາກອນ POS (POS tax row used for the rate)"
              dense outlined
            />
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-caption grey--text">ອັດຕາ VAT ປັດຈຸບັນ (Current VAT rate, read from POS)</div>
            <div v-if="vat" class="text-h6">{{ vat.code }} · {{ vat.rate }}</div>
            <div v-else class="red--text text-body-2">{{ vatError }}</div>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="form.notes" :disabled="!canEdit" label="ໝາຍເຫດ (Notes)" rows="2" dense outlined />
          </v-col>
        </v-row>
        <div class="text-caption grey--text">
          ແກ້ໄຂຫຼ້າສຸດໂດຍ (Last modified by): #{{ profile.lastModifiedBy || '-' }} ·
          ຢືນຢັນໂດຍ (Confirmed by): #{{ profile.confirmedBy || '-' }} {{ profile.confirmedAt || '' }}
        </div>
        <div class="text-caption orange--text mt-1">
          ການແກ້ໄຂໃດໆຈະເຮັດໃຫ້ກັບເປັນ UNCONFIRMED; ຜູ້ແກ້ໄຂບໍ່ສາມາດຢືນຢັນເອງ (Any change returns the profile to UNCONFIRMED; the last editor cannot confirm it).
        </div>
      </v-card-text>
      <v-card-actions v-if="canView">
        <v-spacer />
        <v-btn v-if="canEdit" text color="primary" class="text-none" :loading="saving" @click="save">ບັນທຶກ (Save)</v-btn>
        <v-btn
          v-if="canConfirm"
          color="green" dark class="text-none"
          :disabled="profile.confirmationStatus === 'CONFIRMED'"
          :loading="confirming"
          @click="confirm"
        >
          ຢືນຢັນໂປຣໄຟລ໌ອາກອນ (Confirm tax profile)
        </v-btn>
      </v-card-actions>
    </v-card>
    <master-data-table v-if="componentConfig" :config="componentConfig" />
  </div>
</template>

<script>
import MasterDataTable from './MasterDataTable.vue'
import { configFor } from '~/common/loan/masterConfigs'
import { errMsg } from '~/common/loan/loanApi'

// Edits only companyVatRegistered / posTaxId / notes; confirmation is a separate, permissioned action.
export default {
  name: 'TaxProfilePanel',
  components: { MasterDataTable },
  data () {
    return { profile: {}, vat: null, vatError: '', posTaxes: [], form: {}, loading: false, saving: false, confirming: false }
  },
  computed: {
    can () { return this.$store.getters['loan/can'] },
    canView () { return this.can('LN_TAX_PROFILE', 'VIEW') },
    canEdit () { return this.can('LN_TAX_PROFILE', 'EDIT') },
    canConfirm () { return this.can('LN_TAX_PROFILE', 'AUTHORIZE') },
    posTaxItems () { return this.posTaxes.map(t => ({ value: t.id, text: `${t.code} - ${t.name} (${t.rate})` })) },
    componentConfig () { return configFor('component') }
  },
  mounted () {
    this.load()
  },
  methods: {
    async load () {
      if (!this.canView) return
      this.loading = true
      try {
        const d = (await this.$axios.$get('/api/loan/tax-profile')).data
        this.profile = d.taxProfile
        this.vat = d.vat
        this.vatError = d.vatError
        this.posTaxes = d.posTaxes || []
        this.form = { companyVatRegistered: d.taxProfile.companyVatRegistered, posTaxId: d.taxProfile.posTaxId, notes: d.taxProfile.notes }
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    async save () {
      this.saving = true
      try {
        const res = await this.$axios.$put('/api/loan/tax-profile', this.form)
        this.$toast.success(res.message)
        await this.afterChange()
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.saving = false
      }
    },
    async confirm () {
      this.confirming = true
      try {
        const res = await this.$axios.$post('/api/loan/tax-profile/confirm', {})
        this.$toast.success(res.message)
        await this.afterChange()
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.confirming = false
      }
    },
    async afterChange () {
      await this.load()
      await this.$store.dispatch('loan/fetchBanner')
      this.$emit('changed')
    }
  }
}
</script>
