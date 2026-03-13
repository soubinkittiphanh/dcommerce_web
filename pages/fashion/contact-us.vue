<template>
  <div>
    <!-- google map -->
    <v-row justify="center" class="text-center mt-0">
      <v-col cols="12" sm="12" md="12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15180.260562408257!2d102.63310405!3d17.9757061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312468787e60ba55%3A0xb2e98d79c0280739!2z4Liq4LiW4Liy4LiZ4LmA4Lit4LiB4Lit4Lix4LiE4Lij4Lij4Liy4LiK4LiX4Li54LiV4LmE4LiX4Lii!5e0!3m2!1sth!2sla!4v1710425235808!5m2!1sth!2sla"
          width="100%"
          height="500"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
    </v-row>

    <!-- infomation for contact -->
    <v-row class="pt-5 pb-4">
      <v-col cols="12" sm="6" md="6">
        <v-list-item>
          <v-list-item-content>
            <v-icon color="grey darken-2" size="70">mdi-clock-outline</v-icon>
            <h3 class="text-center mb-0 pb-0">ເວລາເປີດຮ້ານ</h3>
          </v-list-item-content>
        </v-list-item>
        <div class="text-center">
          <span>
            ເປີດບໍລິການທຸກວັນ ເວລາເປີດຮ້ານ 08:00 - ເວລາປິດຮ້ານ 18:00.
          </span>
        </div>
      </v-col>
      <v-divider vertical class="grey mt-4 mb-4"></v-divider>
      <v-col cols="12" sm="6" md="6">
        <v-list-item>
          <v-list-item-content>
            <v-icon color="grey darken-2" size="70"
              >mdi-map-marker-circle</v-icon
            >
            <h3 class="text-center mb-0 pb-0">ສະຖານທີ່ຕັ້ງ</h3>
          </v-list-item-content>
        </v-list-item>
        <div class="text-center">
          <span>
            013 ຖະໜົນ ສຸພານຸວົງ ບ້ານ ສີຫອມ ເມືອງ ຈັນທະບູລີ ນະຄອນຫຼວງວຽງຈັນ ສປປ
            ລາວ
          </span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: "fashion",
  data() {
    return {}
  },
}
</script>

<style></style>
