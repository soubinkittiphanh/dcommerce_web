
<template>
    <div class="layout-coming-soon">
      <nuxt />
    </div>
  </template>
  
  <script>
  export default {
    head() {
      return {
        title: 'Coming Soon',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'We are currently working on something amazing. Stay tuned!'
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .layout-coming-soon {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  