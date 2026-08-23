<template>
  <v-container class="d-flex align-center justify-center fill-height" fluid>
    <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
  </v-container>
</template>

<script>
export default {
  name: 'SchoolBillingIndex',
  middleware: 'auths',
  mounted() {
    this.$router.replace('/admin/school/invoice');
  }
}
</script>
