<template>
  <v-card>
    <!-- <v-card-title> Image preview </v-card-title> -->
    <v-img :src="iUrl || 'No image'"> </v-img>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" variant="text" rounded @click.prevent="$emit('closeDia')">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['iUrl'],
}
</script>