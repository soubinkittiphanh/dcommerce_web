<!-- layouts/empty.vue -->
<template>
  <div class="fullscreen-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout'
}
</script>

<style>
.fullscreen-layout {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow: hidden;
}

/* Hide any default body margins/padding */
body {
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
}

/* Ensure full screen display */
html, body, #__nuxt, #__layout {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>