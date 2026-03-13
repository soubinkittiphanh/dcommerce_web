<template>
  <div class="text-center">
    <!-- Token{{ this.$store.getters.loggedInUser.token }} -->
    <v-dialog v-model="dialogMessage" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        ຈັດການ Wallet {{ form_data.user_id || 'null' }} balance:
        {{ form_data.user_balance }}</v-card-title
      >
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="form_data.user_id"
            :counter="10"
            :rules="rule.idRules"
            label="ໄອດີ"
            required
            disabled
          ></v-text-field>
          <v-select
            v-model="form_data.txn_type"
            :items="loaddata"
            :item-value="(item) => item.txn_id"
            :item-text="(item) => item.txn_id + ' - ' + item.txn_name"
            @change="selectChange"
            append-outer-icon="mdi-map"
            menu-props="auto"
            hide-details
            label="ເລືອກທຸລະກຳ"
            single-line
            :rules="rule.txnRule"
          ></v-select>
          <v-text-field
            v-model="form_data.txn_his_amount"
            :counter="10"
            :rules="rule.amountRules"
            :label="`ຈຳນວນເງິນ: ` + formatNum(form_data.txn_his_amount)"
            required
          ></v-text-field>
          <!-- <v-text-field
            :label="formatNum(form_data.txn_his_amount)"
            disabled
          ></v-text-field> -->
          <!-- <span>{{ formatNum(form_data.txn_his_amount) }}</span> -->
        </v-form>
        {{ userId }}
        <slot> </slot>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn>
        <v-btn color="blue darken-1" text @click="$emit('closewallet')">
          ປິດ
        </v-btn>
        <v-btn color="blue darken-1" text @click="submitDatas"> ບັນທຶກ </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      requiret: true,
      default: 0,
    },
    cusBalance: {
      type: Number,
      requiret: true,
      default: 0,
    },
  },
  //   props: ['userId'],
  data() {
    return {
      loaddata: [],
      isloading: false,
      valid: true,
      message: null,
      dialogMessage: false,
      form_data: {
        txn_his_id: 1000,
        txn_id: 1000,
        txn_type: 1004,
        txn_his_amount: 10000,
        user_id: this.userId,
        user_balance: this.cusBalance,
        txn_his_inputter: this.$store.getters.loggedInUser.id,
        txn_his_date: '2021-09-25 00:00:00',
      },
      rule: {
        idRules: [(v) => !!v || 'ໄອດີ is required'],
        nameRules: [(v) => !!v || 'ຊຶ່ is required'],
        amountRules: [(v) => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        passRules: [
          (v) => !!v || 'ລະຫັດຜ່ານ is required',
          (v) => v.length <= 10 || 'ລະຫັດຜ່ານ ຈຳກັດແຕ່ 10',
        ],
        walletRules: [(v) => !!v || 'ວົງເງິນ is required'],
        txnRule: [(v) => !!v || 'ກະລຸນາເລືອກ ລາຍການທຸລະກຳ is required'],
      },
    }
  },
  async created() {
    await this.fetchData()
  },
  watch: {
    userId(v) {
      this.form_data.user_id = v
    },
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
  },
  methods: {
    selectChange(v) {
      console.log('SELECT: ' + v)
      this.form_data.txn_id = v
    },
    async submitDatas() {
      this.isloading = true
      console.log('submitOut')
      if (!this.$refs.form.validate()) {
        this.isloading = false
        return
      }
      console.log('submitIn')
      const balance = this.form_data.user_balance
      const txnAmount = this.form_data.txn_his_amount
      const token = this.$store.getters.loggedInUser.token
      if (this.form_data.txn_id === 1006) {
        if (txnAmount > balance) {
          this.isloading = false
          this.message = 'ຍອດເງິນໃນບັນຊີ ບໍ່ພຽງພໍ'
          console.log('Biger')
          return
        }
      }
      // return;
      const urlpath = '/txn_his_'
      const header = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
      if (this.isedit) {
        await this.$axios
          .put(urlpath + 'e', this.form_data, header)
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
          .post(urlpath + 'i', this.form_data, header)
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
      await this.$axios
        .get('txn_f')
        .then((res) => {
          this.loaddata = res.data.map((el) => {
            console.log(el.txn_id)
            return {
              txn_id: el.txn_id,
              txn_type: el.txn_type,
              txn_name: el.txn_name,
              txn_amount: el.txn_amount,
              txn_user_id: el.txn_user_id,
              txn_inputter: el.txn_inputter,
              txn_date: el.txn_date,
              function: el.txn_id,
            }
          })
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
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
    formatNum(v) {
      return new Intl.NumberFormat().format(v)
    },
  },
}
</script>