<template>
  <div class="text-center">
    <h1>STOCK MANAGEMENT</h1>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="12" lg="5">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted"
                  label="ຈາກວັນທີ:"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>

            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted2"
                  label="ຫາວັນທີ:"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date2"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" lg="5">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-detailsx
            />
            <!-- <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary" rounded>
                <span class="mdi mdi-microsoft-excel"></span>Generate excel file
              </v-btn> -->
            <v-text-field
              v-model="userId"
              append-icon="mdi-magnify"
              label="ລະຫັດແອັດມິນ"
              single-line
              hide-detailsx
            />
            <v-btn
              @click="fetchData"
              class="primary"
              size="large"
              variant="outlined"
              rounded
            >
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table
        v-if="loaddata"
        :headers="headers"
        :search="search"
        :items="loaddata"
      >
      <template v-slot:[`item.cost`]="{ item }">
          {{ formatNumber(item.cost) }}
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title
              >ສິນຄ້າທັງຫມົດ: {{ loaddata.length }}</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <!-- <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="
                dialogForm = true
                isedit = false
              "
            >
              ສ້າງໃຫມ່
            </v-btn> -->
          </v-toolbar>
        </template>
        <template v-slot:[`item.function`]="{ item }">
          <v-btn v-if="item.status === 'ພ້ອມໃຊ້'" @click="delCard(item)">
            <i class="fas fa-trash"></i>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { getFormatNum } from '~/common'
export default {
  middleware: 'auths',
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id)
    console.log('PRO DEFUALT ID: ' + this.pro_id)
    return /^\d+$/.test(data.params.id)
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.fetchData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.fetchData()
    },
  },
  data() {
    return {
      showlist: false,
      isstock: false,
      isloading: false,
      dialogMessage: false,
      dialog: false,
      message: '',
      userId: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      search: '',
      menu1: false,
      menu2: false,
      headers: [
        { text: 'id', align: 'center', value: 'card_id' },
        { text: 'ລະຫັດສິນຄ້າ', align: 'center', value: 'pro_id' },
        // { text: 'card sequence', align: 'center', value: 'card_number' },
        { text: 'ຕົ້ນທຶນ', align: 'center', value: 'cost' },
        { text: 'ວັນທີ', align: 'center', value: 'input_date_time' },
        { text: 'Admin', align: 'center', value: 'inputter' },
        { text: 'ສະຖານະ', align: 'center', value: 'status' },
        { text: 'ຜູ້ລົບ', align: 'center', value: 'updater' },
        { text: 'ເລລາລົບ', align: 'center', value: 'update_time' },
        {
          text: 'ລົບ',
          align: 'end',
          value: 'function',
          sortable: false,
        },
      ],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
    }
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },

  methods: {
    formatNumber(value) {
      return getFormatNum(value)
    },
    async fetchData() {
      this.isloading = true
      const prodId = this.$route.params.id
      console.log('product_id: ' + prodId)
      await this.$axios
        .get(
          `card_f/?pro_id=${prodId}&fDate=
            ${this.date} 
            &tDate=${this.date2}&userId=${this.userId}`
        )
        .then((res) => {
          this.loaddata = res.data.map((el) => {
            console.log(el.id)
            return {
              card_id: el.id,
              pro_id: el.product_id,
              card_number: el.card_number,
              cost: el.cost,
              inputter: el.inputter + ' ' + el.cus_name,
              status:
                el.card_isused === 1
                  ? 'ໃຊ້ງານແລ້ວ'
                  : el.card_isused === 2
                  ? 'ຖືກລົບ'
                  : 'ພ້ອມໃຊ້',
              input_date_time: el.card_input_date,
              updater: el.update_user,
              update_time: el.update_time,
              function: el.id,
            }
          })
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
    // formatDate(date) {
    //   if (!date) return null

    //   const [year, month, day] = date.split('-')
    //   return `${month}/${day}/${year}`
    // },
    // parseDate(date) {
    //   if (!date) return null

    //   const [month, day, year] = date.split('/')
    //   return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    // },
    formatDate(date) {
      if (!date) return null
      console.log('DATE FORMAT METHOD1: ' + date)
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      console.log('DATE PARSE METHOD1: ' + date)
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(this.activeOrderHeaderList);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'data.xlsx');
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0') // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    async delCard(id) {
      this.isloading = true
      const prodId = this.$route.params.id
      const user = this.$store.getters.loggedInUser.id
      console.log('product_id: ' + prodId + user)
      await this.$axios
        .post('card_x', { card_id: id.card_id, user_id: user })
        .then((res) => {
          this.message = res.data
          console.log(this.message)
          this.fetchData()
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