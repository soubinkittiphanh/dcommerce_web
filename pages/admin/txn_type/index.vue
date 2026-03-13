<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogForm" max-width="600px">
      <v-card>
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="form_data.txn_type_id"
                :counter="10"
                :rules="rule.idRules"
                label="ໄອດີ"
                required
                disabled
              ></v-text-field>
              <v-text-field
                v-model="form_data.txn_type_name"
                :counter="10"
                :rules="rule.nameRules"
                label="ຊື່ຫມວດທຸລະກຳ"
                required
              ></v-text-field>
              <v-text-field
                v-model="form_data.txn_type_desc"
                :counter="10"
                :rules="rule.passRules"
                label="ຫມາຍເຫດ"
                required
              ></v-text-field>
              <v-select
                v-model="form_data.txn_sign"
                :items="acc_sign"
                append-outer-icon="mdi-map"
                menu-props="auto"
                hide-details
                label="ເຄື່ອງຫມາຍບັນຊີ ເຄດິດ ຫລື ເດບິດ"
                single-line
              ></v-select>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn>
          <v-btn color="blue darken-1" text @click="dialogForm = false">
            ປິດ
          </v-btn>
          <v-btn color="blue darken-1" text @click="submitDatas">
            ບັນທຶກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຊອກຫາ"
          single-line
          hide-detailsx
        />
      </v-card-title>

      <v-data-table
        v-if="loaddata"
        :headers="headers"
        :search="search"
        :items="loaddata"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ປະເພດການທຸລະກຳ: {{ loaddata.length }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="
                dialogForm = true
                isedit = false
              "
            >
              ສ້າງໃຫມ່
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.function`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="
              editItem(item)
              isedit = true
            "
          >
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    isedit: false,
    dialog: false,
    isloading: false,
    dialogForm: false,
    message: '',
    valid: true,
    name: '',
    search: '',
    form_data: {
      txn_type_id: 1002,
      txn_type_name: 'ໂປໂມຊັ່ນ',
      txn_type_desc: 'Wallet ',
      txn_sign: 'DR',
    },
    acc_sign:["CR","DR"],
    loaddata: [],
    headers: [
      {
        text: 'ໄອດີ',
        align: 'center',
        value: 'txn_type_id',
      },
      { text: 'ຊື່ transaction', align: 'center', value: 'txn_type_name' },
      { text: 'ຫມາຍເຫດ', align: 'center', value: 'txn_type_desc' },
      { text: 'ເຄຶ່ອງຫມາຍບັນຊີ', align: 'center', value: 'txn_sign' },
      {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'function',
        sortable: false,
      },
    ],
    rule: {
      idRules: [(v) => !!v || 'ໄອດີ is required'],
      nameRules: [(v) => !!v || 'ຊຶ່ is required'],
      passRules: [
        (v) => !!v || 'ລະຫັດຜ່ານ is required',
        (v) => v.length <= 10 || 'ລະຫັດຜ່ານ ຈຳກັດແຕ່ 10',
      ],
      walletRules: [(v) => !!v || 'ວົງເງິນ is required'],
    },
  }),
  async created() {
    await this.fetchData()
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialog = true
        return
      }
      this.dialog = false
    },
    isedit(v) {
      if (!v) this.form_data.txn_type_id = '1XXX'
    },
  },
  methods: {
    editItem(val) {
      console.log(val.txn_type_id)
      this.form_data = this.loaddata.find((el) => el.txn_type_id === val.txn_type_id)
      this.dialogForm = true
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },

    async submitDatas() {
      this.isloading = true
      console.log('submitOut')
      if (!this.$refs.form.validate()) {
        this.isloading = false
        return
      }
      console.log('submitIn')
      const urlpath = '/txn_type_'
      if (this.isedit) {
        await this.$axios
          .put(urlpath + 'e', this.form_data)
          .then((res) => {
            this.message = res.data
            // this.reset()
          })
          .catch((er) => {
            this.message = 'Error: ' + er
          })
        this.isloading = false
      } else {
        await this.$axios
          .post(urlpath + 'i', this.form_data)
          .then((res) => {
            this.message = res.data
            // this.reset()
          })
          .catch((er) => {
            this.message = 'Error: ' + er
          })
        this.isloading = false
      }
      this.fetchData()
    },
    async fetchData() {
      this.isloading = true
      await this.$axios
        .get('txn_type_f')
        .then((res) => {
          this.loaddata = res.data.map((el) => {
            console.log(el.txn_type_id)
            return {
              txn_type_id: el.txn_code_id,
              txn_type_name: el.txn_code_name,
              txn_type_desc: el.txn_code_desc,
              txn_sign: el.txn_sign,
              function: el.txn_code_id,
            }
          })
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}
</style>