
<template>
  <div class="text-left">
    <v-chip class="pa-5 mb-4" color="primary" label text-color="white">
      <v-icon start>mdi-chart-bar</v-icon>
      <h3>ລາຍງານຍອດຂາຍ ຕາມໝວດສິນຄ້າຫຼັກ</h3>
    </v-chip>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-card class="pa-4">
      <v-card-title>
        <v-row align="center">
          <v-col cols="12" md="3">
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
          </v-col>
          <v-col cols="12" md="3">
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
          <v-col cols="12" md="2">
            <v-btn color="primary" @click="fetchData" rounded>ດຶງລາຍງານ</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="4" class="text-right">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details></v-text-field>
          </v-col>
        </v-row>
      </v-card-title>

      <v-data-table :headers="headers" :items="loaddata" :search="search" class="elevation-1" :items-per-page="10">
        <template v-slot:item.total_qty="{ item }">
          {{ getFormatNum(item.total_qty) }}
        </template>
        <template v-slot:item.total_sale="{ item }">
          <span class="font-weight-bold primary--text">{{ getFormatNum(item.total_sale) }} ₭</span>
        </template>
        
        <template v-slot:footer.prepend>
           <div class="pa-4">
             <strong>ລວມຍອດທັງໝົດ: {{ totalAmount }} ₭</strong>
           </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { swalError2 } from '~/util/myUtil'

export default {
  middleware: 'auths',
  data() {
    return {
      isloading: false,
      search: '',
      loaddata: [],
      headers: [
        { text: 'ລະຫັດໝວດຫຼັກ', align: 'center', value: 'mainCategoryId' },
        { text: 'ຊື່ໝວດສິນຄ້າຫຼັກ', align: 'left', value: 'mainCategoryName' },
        { text: 'ຈຳນວນຂາຍລວມ', align: 'end', value: 'total_qty' },
        { text: 'ຍອດຂາຍລວມ (LAK)', align: 'end', value: 'total_sale' },
      ],
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 2).toISOString().substr(0, 10),
      date2: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString().substr(0, 10),
      dateFormatted: '',
      dateFormatted2: '',
      menu1: false,
      menu2: false,
    }
  },
  computed: {
    totalAmount() {
      const total = this.loaddata.reduce((acc, item) => acc + parseFloat(item.total_sale || 0), 0)
      return this.getFormatNum(total)
    }
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
    },
  },
  async created() {
    this.dateFormatted = this.formatDate(this.date)
    this.dateFormatted2 = this.formatDate(this.date2)
    await this.fetchData()
  },
  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    async fetchData() {
      this.isloading = true
      try {
        const res = await this.$axios.get('api/saleByMainCategory', {
          params: {
            fromDate: this.date,
            toDate: this.date2,
          }
        })
        this.loaddata = res.data
      } catch (er) {
        swalError2(this.$swal, "Error", er)
        console.log('Error: ' + er)
      }
      this.isloading = false
    },
    formatDate(date) {
      if (!date) return null
      if (typeof date !== 'string') {
        try {
          date = new Date(date).toISOString().substr(0, 10)
        } catch (e) {
          return null
        }
      }
      const [year, month, day] = date.split('-')
      if (!year || !month || !day) return date
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date || typeof date !== 'string') return null
      const parts = date.split('/')
      if (parts.length !== 3) return null
      const [month, day, year] = parts
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  }
}
</script>

<style scoped>
.primary--text {
  color: #1976d2;
}
</style>
