<template>
  <div class="text-center">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ messageTitle || 'No title' }}
      </v-card-title>

      <v-card-text>
        {{ messageBody || 'No message' }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="feedbackHandle(true)">
          ຍອມຮັບ
        </v-btn>
        <v-btn color="primary" text @click="feedbackHandle(false)">
          ຍົກເລີກ
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['dia', 'messageTitle', 'messageBody'],
  methods: {
    feedbackHandle(v) {
      this.$emit('react', v)
    },
  },
}
</script>