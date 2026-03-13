<template>
  <div class="text-center">
      <h1>ເຕີມເຄດິດ Wallet In</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="ລະຫັດອ້າງອີງ"
        required
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="ໄອດີລູກຄ້າ"
        required
      ></v-select>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="ຈຳວນເງິນ"
        required
      ></v-text-field>

      <v-textarea
        outlined
        name="input-7-4"
        counter="5"
        label="ໝາຍເຫດ"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        ກວດສອບຂໍ້ມູນ
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn>

      <v-btn color="warning" @click="resetValidation"> ບັນທຶກ </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  middleware: 'auths',
  data() {return{
    dialog: false,
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        'Avatar size should be less than 2 MB!',
    ],
    select: null,
    items: [
      'ບັດເກມ GARINA FREEFIRE',
      'ບັດເກມ PUBG',
      'ເຄື່ອງໃຊ້ທົ່ວໄປ',
      'ເຄື່ອງດື່ມ',
    ],
    checkbox: false,
  }},

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

