<template>
  <div class="text-center">
      <h2>imagePreviewURL{{dialog}}</h2>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-img
          v-if="imagePreviewURL"
          :src="imagePreviewURL"
          max-height="100%"
          max-width="100%"
        ></v-img>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> ຍອມຮັບ </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
    props:['imagePreviewURL','pdialog'],
    data() {
        return {
            dialog:this.pdialog,
        }
    },
}
</script>