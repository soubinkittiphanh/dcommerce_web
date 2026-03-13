<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    {{form_data.cus_id}}
  balance:  {{form_data.cus_balance}}
    <v-dialog v-model="wallet" max-width="300px">
      <wallet :user-id="form_data.cus_id" :cus-balance="form_data.cus_balance" @closewallet="wallet = false"></wallet>
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
                v-model="form_data.cus_id"
                :counter="10"
                :rules="rule.idRules"
                label="ໄອດີລູກຄ້າ"
                required
                disabled
              ></v-text-field>
              <v-text-field
                v-model="form_data.cus_name"
                :counter="10"
                :rules="rule.nameRules"
                label="ຊື່ລູກຄ້າ"
                required
              ></v-text-field>
              <v-text-field
                v-model="form_data.cus_pass"
                :counter="10"
                :rules="rule.passRules"
                label="ລະຫັດຜ່ານ"
                required
                :type="!isedit ? '' : 'password'"
              ></v-text-field>
              <v-text-field
                v-model.number="form_data.cus_tel"
                :counter="10"
                :rules="rule.nameRules"
                label="ເບີໂທ"
                required
              ></v-text-field>
              <v-text-field
                v-model.number="form_data.cus_email"
                :counter="10"
                :rules="rule.nameRules"
                label="ອີເມວ"
                required
              ></v-text-field>
              <v-checkbox
                v-model="form_data.cus_active"
                :label="`ເປິດໃຊ້ງານທັນທີ`"
              ></v-checkbox>
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
            <v-toolbar-title>ລູກຄ້າ: {{ loaddata.length }}</v-toolbar-title>
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
        <template v-slot:[`item.cus_active`]="{ item }">
          <v-checkbox v-model="item.cus_active" disabled></v-checkbox>
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
        <template v-slot:[`item.wallet`]="{ item }">
          <!-- <i class="fas fa-wallet"></i> -->
          <v-btn
            color="blue darken-1"
            text
            @click="
              walletAction(item)
              wallet = true
            "
          >
            <i class="fas fa-wallet"></i>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
    middleware: 'auths',
  data () {return {
    wallet: false,
    isedit: false,
    dialog: false,
    isloading: false,
    dialogForm: false,
    message: '',
    valid: true,
    name: '',
    search: '',
    form_data: {
      cus_id: '1XXX',
      cus_pass: 'pasw1ss1',
      cus_name: 'cmeedit',
      cus_tel: '99884dd',
      cus_email: '@email.com',
      cus_balance: 0,
      cus_active: false,
    },
    loaddata: [],
    headers: [
      {
        text: 'ໄອດີ',
        align: 'center',
        value: 'cus_id',
      },
      { text: 'ຊື່ສະມາຊິກ', align: 'center', value: 'cus_name' },
      { text: 'ເບີໂທ', align: 'center', value: 'cus_tel' },
      { text: 'email', align: 'center', value: 'cus_email' },
      { text: 'ຍອດເງິນ', align: 'center', value: 'cus_balance' },
      {
        text: 'active',
        align: 'end',
        value: 'cus_active',
        sortable: false,
      },
      {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'function',
        sortable: false,
      },
      {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'wallet',
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
  }},
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
      if (!v) this.form_data.cus_id = '1XXX'
    },
  },
  methods: {
    walletAction(v) {
      console.log('Wallet: ' + v.cus_id)
      console.log('Bal: ' + v.cus_balance)
      this.form_data.cus_id=v.cus_id;
      this.form_data.cus_balance= parseInt( v.cus_balance.replaceAll(",",""));
      console.log("Int: "+parseInt( v.cus_balance.replaceAll(",","")).toString());
    },
    editItem(val) {
      console.log(val.cus_id)
      this.form_data = this.loaddata.find((el) => el.cus_id === val.cus_id)
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
      const urlpath = '/customer_'
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
        .get('customer_f')
        .then((res) => {
          this.loaddata = res.data.map((el) => {
            console.log(el.cus_id)
            return {
              cus_id: el.cus_id,
              cus_pass: el.cus_pass,
              cus_name: el.cus_name,
              cus_tel: el.cus_tel,
              cus_email: el.cus_email,
              cus_balance: Intl.NumberFormat().format(el.CREDIT-(el.ORDER_DEBIT+el.DEBIT)),
              cus_active: el.cus_active,
              function: el.cus_id,
              wallet: el.cus_id,
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