<template>
  <v-alert
    v-if="bannerActive"
    prominent
    type="warning"
    color="amber darken-3"
    border="left"
    class="mb-4 white--text"
  >
    <div class="font-weight-bold">
      ແຈ້ງເຕືອນ: ໂປຣໄຟລ໌ອາກອນ ແລະ ພາຣາມິເຕີ Go-Live ຍັງບໍ່ທັນໄດ້ຮັບການຢືນຢັນ (UNCONFIRMED)
    </div>
    <div class="text-body-2">
      The tax profile is UNCONFIRMED. Production disbursement and fee/interest billing stay blocked until a manager confirms it on the Go-live checklist.
    </div>
  </v-alert>
</template>

<script>
// Shown on every loan screen while the tax profile is UNCONFIRMED (state from GET /api/loan/status)
export default {
  name: 'LoanBanner',
  computed: {
    bannerActive () {
      return this.$store.state.loan.bannerActive
    }
  }
}
</script>
