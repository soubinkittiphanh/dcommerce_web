<template>
  <div class="text-center">
    <span class="text-h5">Widthdraw </span>
    <!-- <span class="text-h5">Product category {{this.$store.getters.loggedInUser}}</span> -->
    
    <v-dialog v-model="dialog" width="500" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຊອກຫາ"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-if="loadData"
        :headers="headers"
        :items="loadData"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title
              >ແຈ້ງຖອນເງິນ {{ loadData.length }}</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
  
          </v-toolbar>
        </template>
        <template v-slot:[`item.chat_function`]="{ item }">
          <v-btn
            small
            class="mr-2"
            @click="
              updateItem(item)

            "
          >
            ດຳເນີນການແລ້ວ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  middleware: 'auths',
  data: () => ({
    isloading: false,
    isedit: false,
    singleSelect: false,
    selected: [],
    dialog: false,
    dialogForm: false,
    message: '',
    valid: true,
    search: 'withdraw',
    rule: {
      cat_id: [(v) => !!v || 'Code ແມ່ນ ຕ້ອງໃສ່'],
      cat_name: [(v) => !!v || 'ຊື່ປະເພດຂໍ້ຄ້ວາມ ແມ່ນ ຕ້ອງໃສ່'],
    },

    headers: [
      {
        text: 'code',
        align: 'center',
        sortable: false,
        value: 'chat_msg_type',
      },
      { text: 'ເນື້ອໃນ', align: 'center', value: 'chat_message' },
      { text: 'ລູກຄ້າ', align: 'center', value: 'chat_user_id' },
      { text: 'read', align: 'center', value: 'chat_chat_isread' },
      { text: 'ເວລາ', align: 'center', value: 'chat_chat_date_time' },
      { text: 'ເລກ ບຊ', align: 'center', value: 'chat_bank_acc_id' },
      { text: 'ຊື່ ບຊ', align: 'center', value: 'chat_bank_acc_name' },
      { text: 'ທນຄ', align: 'center', value: 'chat_bank_id' },
      { text: 'ຊື່ ທນຄ', align: 'center', value: 'chat_bank_name' },
      { text: 'ຊື່ ລູກຄ້າ', align: 'center', value: 'chat_cus_name' },
      { text: 'ເບີໂທ', align: 'center', value: 'chat_cus_tel' },
      {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'chat_function',
        sortable: false,
      },
    ],
    loadData: [],
  }),
  watch: {
    message(val) {
      if (val != null) {
        this.dialog = true
        return
      }
      this.dialog = false
    },
  },
  created() {
    this.fetchData()
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      //   this.$refs.form.reset()
      this.form_data.chat_code = ''
      this.form_data.chat_name = ''
      this.form_data.chat_remark = ''
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
      const submitData = {
        chat_id: this.form_data.chat_id,
        chat_code: this.form_data.chat_code,
        chat_name: this.form_data.chat_name,
        chat_remark: this.form_data.chat_remark,
      }
      const urlpath = '/chattype_'
      if (this.isedit) {
        await this.$axios
          .post(urlpath + 'u', submitData)
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
          .post(urlpath + 'c', submitData)
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
        .get('/chat_f')
        .then((res) => {
          console.log('Data: ' + res.data)
          this.loadData = res.data.map((el) => {
            console.log('EL: ' + el.id)
            return {
              chat_id: el.id,
              chat_msg_type: el.msg_type,
              chat_message: el.chat_message,
              chat_user_id: el.user_id,
              chat_chat_isread: el.chat_isread.toString().includes('0')
                ? 'ຍັງ'
                : 'ອ່ານແລ້ວ',
              chat_chat_date_time: el.chat_date_time.replaceAll('T', ' '),
              chat_bank_acc_id: el.bank_acc_id,
              chat_bank_acc_name: el.bank_acc_name,
              chat_bank_id: el.bank_id,
              chat_bank_name: el.bank_name,
              chat_cus_name: el.cus_name,
              chat_cus_tel: el.cus_tel,
              chat_function: el.id,
            }
          })

          console.log('AFTER MAP: ' + this.loadData[0].chat_id)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isloading = false
    },
    async updateItem(val) {
      this.isloading = true
      console.log("val: "+val.chat_id)
      await this.$axios
        .post('chat_m',{"chat_id":val.chat_id})
        .then((res) => {
          this.isloading = false
          this.message = res.data
          this.fetchData();
        })
        .catch((er) => {
          this.isloading = false
          this.message = er.response.data
        })
    },
  },
}
</script>

