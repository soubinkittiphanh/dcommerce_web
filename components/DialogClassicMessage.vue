<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2"> ຂໍ້ຄວາມ </v-card-title>

    <v-card-text>
      {{ message }}
    </v-card-text>
    
      <!-- <v-alert v-if="message==='Transaction completed'" type="success"></v-alert> -->
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="toggleDialog"> ຕົກລົງ </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleDialog() {
      this.$emit('closedialog')
    },
  },
}
</script>
