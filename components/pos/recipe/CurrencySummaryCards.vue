<template>
  <v-row class="mb-4">
    <v-col v-for="currency in stats" :key="currency.code" cols="6" md="3">
      <v-card outlined class="pa-3 text-center elevation-2" @click="$emit('details', currency)">
        <v-avatar :color="currency.isLocal ? 'green' : 'blue'" size="40" class="mb-2">
          <span class="white--text font-weight-bold">{{ currency.code[0] }}</span>
        </v-avatar>
        <h4>{{ currency.code }}</h4>
        <h3 :class="currency.isLocal ? 'green--text' : 'blue--text'">
          {{ format(currency.totalAmount, currency.code) }}
        </h3>
        <div v-if="!currency.isLocal" class="text--secondary">
          <small>≈ {{ format(currency.localEquivalent, localCode) }}</small>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['stats', 'localCode', 'format']
}
</script>