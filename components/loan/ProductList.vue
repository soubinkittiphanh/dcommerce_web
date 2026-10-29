<template>
  <v-card outlined>
    <v-card-title class="py-2">
      <span class="text-subtitle-1 font-weight-bold">ຜະລິດຕະພັນສິນເຊື່ອ (Loan products, all versions)</span>
      <v-spacer />
      <v-btn icon :loading="loading" @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
      <v-btn v-if="can('CREATE')" color="primary" small class="text-none ml-1" to="/admin/loan/product/new">
        <v-icon left small>mdi-plus</v-icon> ຜະລິດຕະພັນໃໝ່ (New product)
      </v-btn>
    </v-card-title>
    <v-alert v-if="!can('VIEW')" type="info" text dense class="ma-3">ທ່ານບໍ່ມີສິດເບິ່ງ (No VIEW permission for LN_PRODUCT).</v-alert>
    <v-data-table v-else :headers="headers" :items="products" :loading="loading" dense :items-per-page="25" :footer-props="{ 'items-per-page-options': [25, 50, 100, -1] }">
      <template #[`item.productCode`]="{ item }">
        <nuxt-link :to="`/admin/loan/product/${item.id}`" class="font-weight-bold">{{ item.productCode }}</nuxt-link>
      </template>
      <template #[`item.authStatus`]="{ item }">
        <v-chip x-small dark :color="authColors[item.authStatus]">{{ item.authStatus }}</v-chip>
        <v-chip v-if="item.status === 'SUPERSEDED'" x-small class="ml-1">SUPERSEDED</v-chip>
      </template>
      <template #[`item.actions`]="{ item }">
        <div class="d-flex justify-end">
          <template v-if="item.authStatus === 'PENDING' && can('AUTHORIZE')">
            <v-btn x-small text color="green" class="text-none" @click="decide(item, 'authorize')">ອະນຸມັດ (Authorize)</v-btn>
            <v-btn x-small text color="red" class="text-none" @click="decide(item, 'reject')">ປະຕິເສດ (Reject)</v-btn>
          </template>
          <v-btn v-if="can('CREATE')" x-small text class="text-none" @click="clone(item)">ສຳເນົາ (Clone)</v-btn>
          <v-btn x-small icon :to="`/admin/loan/product/${item.id}`"><v-icon small>mdi-open-in-app</v-icon></v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { errMsg, AUTH_COLORS } from '~/common/loan/loanApi'

export default {
  name: 'ProductList',
  data () {
    return {
      products: [],
      loading: false,
      authColors: AUTH_COLORS,
      headers: [
        { text: 'ລະຫັດ (Code)', value: 'productCode' },
        { text: 'ເວີຊັນ (Version)', value: 'version' },
        { text: 'ຊື່ (Name)', value: 'name' },
        { text: 'ຄ່າທຳນຽມ (Fee mode)', value: 'feeFinancingMode' },
        { text: 'ມີຜົນແຕ່ (Effective)', value: 'effectiveDate' },
        { text: 'ສະຖານະ (Status)', value: 'authStatus' },
        { text: '', value: 'actions', sortable: false, align: 'end' }
      ]
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    can (action) {
      return this.$store.getters['loan/can']('LN_PRODUCT', action)
    },
    async load () {
      if (!this.can('VIEW')) return
      this.loading = true
      try {
        this.products = (await this.$axios.$get('/api/loan/products')).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    async decide (item, action) {
      try {
        const res = await this.$axios.$post(`/api/loan/params/product/${item.id}/${action}`, {})
        this.$toast.success(res.message)
        await this.load()
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    },
    async clone (item) {
      const input = await this.$swal({
        title: `ສຳເນົາ ${item.productCode} (Clone)`,
        input: 'text',
        inputLabel: 'ລະຫັດຜະລິດຕະພັນໃໝ່ (New product code)',
        inputValue: `${item.productCode}-COPY`,
        showCancelButton: true
      })
      if (!input.isConfirmed || !input.value) return
      try {
        const res = await this.$axios.$post(`/api/loan/products/${item.id}/clone`, { productCode: input.value.trim().toUpperCase() })
        this.$toast.success(res.message)
        this.$router.push(`/admin/loan/product/${res.data.id}`)
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    }
  }
}
</script>
