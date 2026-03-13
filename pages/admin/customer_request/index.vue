<template>
  <div class="text-center">
    <span class="text-h5">Message type </span>
    <!-- <span class="text-h5">Product category {{this.$store.getters.loggedInUser}}</span> -->
    <v-dialog v-model="dialogForm" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5"
            >ປະເພດຂໍ້ຄວາມ</span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="form_data.chat_type_code"
                :disabled="isedit"
                :rules="rule['cat_id']"
                label="Code"
                required
              ></v-text-field>
              <v-text-field
                v-model="form_data.chat_type_name"
                :rules="rule['cat_name']"
                label="ຊື່ປະເພດ ຂໍ້ຄວາມ"
                required
              ></v-text-field>

              <v-textarea
                outlined
                name="input-7-4"
                counter="5"
                label="ໝາຍເຫດ"
                v-model="form_data.chat_type_remark"
              ></v-textarea>
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
              >ປະເພດຂໍ້ຄວາມ: {{ loadData.length }}</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="
                dialogForm = true
                isedit = false
                 reset()
              "
            >
              ສ້າງໃຫມ່
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.chat_type_function`]="{ item }">
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
  data: () => ({
    isloading: false,
    isedit: false,
    singleSelect: false,
    selected: [],
    dialog: false,
    dialogForm: false,
    message: '',
    valid: true,
    search: '',
    rule: {
      cat_id: [(v) => !!v || 'Code ແມ່ນ ຕ້ອງໃສ່'],
      cat_name: [(v) => !!v || 'ຊື່ປະເພດຂໍ້ຄ້ວາມ ແມ່ນ ຕ້ອງໃສ່'],
    },
    form_data: {
      chat_type_id: '',
      chat_type_code: '',
      chat_type_name: '',
      chat_type_remark: '',
    },
    headers: [
      {
        text: 'code',
        align: 'center',
        sortable: false,
        value: 'chat_type_code',
      },
      { text: 'ຊື່ປະເພດຂໍ້ຄວາມ', align: 'center', value: 'chat_type_name' },
      { text: 'ຫມາຍເຫດ', align: 'center', value: 'chat_type_remark' },
      {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'chat_type_function',
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
      this.form_data.chat_type_code = ''
      this.form_data.chat_type_name = ''
      this.form_data.chat_type_remark = ''
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
        chat_type_id: this.form_data.chat_type_id,
        chat_type_code: this.form_data.chat_type_code,
        chat_type_name: this.form_data.chat_type_name,
        chat_type_remark: this.form_data.chat_type_remark,

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
        .get('/chattype_f')
        .then((res) => {
          console.log('Data: ' + res.data)
          this.loadData = res.data.map((el) => {
            console.log('EL: ' + el.id)
            return {
              chat_type_id: el.id,
              chat_type_code: el.code,
              chat_type_name: el.name,
              chat_type_remark: el.remark,
              chat_type_function: el.id,
            }
          })
          console.log('AFTER MAP: ' + this.loadData[0].chat_type_id)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isloading = false
    },
    editItem(val) {
      console.log('SHOULD BE ID: ' + val.chat_type_function)
      const filtData = this.loadData.find(
        (el) => el.chat_type_id=== val.chat_type_function
      )
      console.log("fomr: "+filtData.chat_type_code)
      this.form_data = filtData
      this.dialogForm = true
    },
  },
}
</script>

