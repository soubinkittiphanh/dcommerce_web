<template>
  <v-card outlined>
    <v-card-text>
      <v-row>
        <v-col cols="3" style="text-align: left">
          <v-avatar color="primary" size="50">
            <v-icon dark size="30">
              {{ icon }}
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col class="pt-0" cols="9" style="text-align: right">
          <v-row style="text-align: right">
            <v-col cols="12">{{ title }}</v-col>
            <v-col
              cols="12"
              style="
                font-size: larger;
                font-weight: bold;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              {{ total }}
            </v-col>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="344"
                outlined
                v-for="(details, paymentCode) in groupedSales"
                :key="paymentCode"
              >
                <!-- <v-card-title>{{ paymentCode }}</v-card-title> -->
                <v-card-text>
                  {{ paymentCode }}<br>
                  <v-chip color="grey" text-color="white">
                    {{ details.totalSales.toLocaleString() }} /
                    {{ details.count }}
                    <v-icon size="14" 
                      >mdi-invoice-list-outline</v-icon
                    ></v-chip
                  >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row> </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
  
<script>
export default {
  name: 'menu-card',
  props: {
    title: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    total: {
      type: String,
      default: '',
    },
    groupedSales: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      imageSrc: require('@/assets/image/pos-terminal.png'),
    }
  },

  methods: {
    takeMeTo() {
      this.$router.push(this.path)
    },
  },
}
</script>
  
<style></style>