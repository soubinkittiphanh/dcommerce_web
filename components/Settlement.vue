<template>
  <div class="text-center">
    <!-- Token{{ this.$store.getters.loggedInUser.token }} -->
    <!-- TODO: MAE A PROPER FORM -->
    <!-- <v-dialog v-model="dialogMessage" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog> -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        ຊຳລະບິນ {{ this.orderId || 'null' }} ຍອດ:
        {{ formatNum(this.amount) }} </v-card-title>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          
            <v-autocomplete item-text="payment_code" item-value="id" :items="findAllPayment"
                                        label="ການຊຳລະ*" v-model="paymentId"></v-autocomplete>
          <v-text-field v-model="paymentAmount" :counter="10" :rules="rule.amountRules"
            :label="`ຈຳນວນເງິນ: ` + formatNum(paymentAmount)" required></v-text-field>
          <v-text-field v-model.number="codFee" :counter="10" :rules="numberRule"
            :label="`ຄ່າທຳນຽມ COD: ` + formatNum(codFee)" required></v-text-field>
        </v-form>
        <!-- {{ userId }} -->
        <slot> </slot>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn> -->
        <v-btn class="warning" rounded text @click="$emit('close-dialog')">
          ປິດ
        </v-btn>
        <v-btn class="primary" rounded text @click="submitDatas"> ບັນທຶກ </v-btn>
   
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
export default {
//   There are several types available for Vue.js props:

// 1. `String`: Expects a string value.
// 2. `Number`: Expects a numeric value.
// 3. `Boolean`: Expects a boolean value.
// 4. `Array`: Expects an array value.
// 5. `Object`: Expects an object value.
// 6. `Function`: Expects a function value.
// 7. `Symbol`: Expects a symbol value.
// 8. `Date`: Expects a date value.
// 9. `RegExp`: Expects a regular expression value.

// You can also create custom types by passing a validator function to the `validator` property of the prop object.
  props: {
    amount: {
      type: Number,
      require: true,
      default: 0,
    },
    orderId: {
      type: Number,
      require: true,
    },
    dyCusId: {
      type: Number,
      require: true,
    },

  },
  computed:{
    ...mapGetters([ 'findAllPayment',  'findAllCurrency', ]),
    user() {
      return this.$auth.user || ''
    },
    numberRule() {
            return [
                value => value !== undefined && value !== null && value !== '' || 'Field is required',
                value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'
            ];
        },
  },

  data() {
    return {
      loaddata: [],
      isloading: false,
      valid: true,
      message: null,
      dialogMessage: false,
      paymentAmount: this.amount,
      paymentId:1,
      codFee: 0,
      
      rule: {
        idRules: [(v) => !!v || 'ໄອດີ is required'],
        amountRules: [(v) => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        amountCODRules: [(v) => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        txnRule: [(v) => !!v || 'ກະລຸນາເລືອກ ລາຍການທຸລະກຳ is required'],
      },

    }
  },
  async created() {
    this.codFee = +0;
  },

  watch: {
    amount(newAmount){
      console.log("New amount: ",newAmount);
      this.paymentAmount= newAmount;
    }
  },
  methods: {
    
    async submitDatas() {
      this.isloading = true
      console.log("AMOUNT: ", this.amount);
      if (!this.$refs.form.validate()) {
        console.log("From validate is verified");
        this.isloading = false
        return
      }
      //  if (1===1) return ;
      const paymentPayload = {
        paymentId: this.paymentId,
        codFee: this.codFee,
        customerId: this.dyCusId,
        amount: this.paymentAmount,
      }

      const urlpath = `api/sale/settle/${this.orderId}`
      console.log(`PAYLOAD: ${JSON.stringify(paymentPayload)}`);
      await this.$axios
        .put(urlpath,paymentPayload)
        .then((res) => {
          console.log("this.message", res.status);
          if (res.status ==200 ) {
            // ******* reload data if transaction completed ********
            console.log("RELOAD DATA TRIGGER");
            this.refreshData(true);
            return swalSuccess(this.$swal,'Succeed','Your transaction completed');
          }
          return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        })
        .catch((er) => {
          return swalError2(this.$swal, "Error", `ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ${er}`);
        })
      this.isloading = false

      // this.fetchData()  PAYLOAD: {"paymentId":1,"codFee":10000,"customerId":214,"amount":14000} //405
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
    refreshData(v) {
      this.$emit('reload', v)
    }
  },
}
</script>