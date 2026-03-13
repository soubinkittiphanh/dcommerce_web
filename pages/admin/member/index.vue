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
                v-model="form_data.user_id"
                :counter="10"
                :rules="rule.idRules"
                label="ໄອດີສະມາຊິກ"
                required
                disabled
              ></v-text-field>
              <v-text-field
                v-model="form_data.user_name"
                :counter="10"
                :rules="rule.nameRules"
                label="ຊື່ສະມາຊິກ"
                required
              ></v-text-field>
              <v-text-field
                v-model="form_data.user_pass"
                :counter="10"
                :rules="rule.passRules"
                label="ລະຫັດຜ່ານ"
                required
                :type="!isedit ? '' : 'password'"
              ></v-text-field>
              <v-text-field
                v-model.number="form_data.user_tel"
                :counter="10"
                :rules="rule.nameRules"
                label="ເບີໂທ"
                required
              ></v-text-field>
              <v-textarea
                outlined
                name="input-7-4"
                counter="5"
                label="ທີ່ຢູ່"
                :value="form_data.user_addr"
              ></v-textarea>
              <v-text-field
                v-model="form_data.user_wallet"
                :counter="10"
                :rules="rule.walletRules"
                label="ກະເປົ໋າ"
                required
              ></v-text-field>
              <v-text-field
                v-model="form_data.user_desc"
                :counter="10"
                label="ຂໍ້ມູນອື່ນໆ"
                required
              ></v-text-field>
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
            <v-toolbar-title>ສະມາຊິກ: {{ loaddata.length }}</v-toolbar-title>
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
  middleware: 'auths',
  data() {
    return {
      isedit: false,
      dialog: false,
      isloading: false,
      dialogForm: false,
      message: '',
      valid: true,
      name: '',
      search: '',
      form_data: {
        user_id: '1XXX',
        user_name: 'soubin',
        user_pass: 'password1234',
        user_tel: '+85620',
        user_addr: 'where do you stay?',
        user_wallet: 90000,
        user_desc: 'user remark',
      },
      loaddata: [],
      headers: [
        {
          text: 'ໄອດີ',
          align: 'center',
          value: 'user_id',
        },
        { text: 'ຊື່ສະມາຊິກ', align: 'center', value: 'user_name' },
        { text: 'ເບີໂທ', align: 'center', value: 'user_tel' },
        { text: 'ບັນຊີ', align: 'center', value: 'user_wallet' },
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
    }
  },
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
      if (!v) this.form_data.user_id = '1XXX'
    },
  },
  methods: {
    editItem(val) {
      console.log(val.user_id)
      this.form_data = this.loaddata.find((el) => el.user_id === val.user_id)
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
      const urlpath = '/user_'
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
        .get('user_f')
        .then((res) => {
          this.loaddata = res.data.map((el) => {
            console.log(el.user_id)
            return {
              user_id: el.user_id,
              user_name: el.user_name,
              user_pass: el.user_pass,
              user_tel: el.user_tel,
              user_addr: el.user_addr,
              user_wallet: el.user_wallet,
              user_desc: el.user_desc,
              function: el.user_id,
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