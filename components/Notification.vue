<template>
  <div class="notification is-danger">
        <v-alert
      border="bottom"
      color="pink darken-1"
      dark
    >
    {{message}}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message']
}
</script>