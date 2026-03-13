<template>
    <v-alert
      :type="this.statusType"
      title="Alert title"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
    ></v-alert>
  </template>



<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        message:{
            type: String,
            default: '',
        },
        statusType:{
            type: String,
            require:true
        }
    },
    async created() {
        await this.fetchData();
    },
    data() {
        return {
            search: '',
            orderList: [],

        }
    },

}
</script>

<style></style>