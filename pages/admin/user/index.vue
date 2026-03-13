<template>
  <div class="text-left">
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍການ ຜູ້ໃຊ້ງານລະບົບ</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="entryForm" max-width="1024">
      <user-form @reload="loadData()
      entryForm = false" :isUpdate="!isCreate" :key="componentKey" :reserveUserId="preNewUserId"
        :recordId="entrySelected" @close-dialog="entryForm = false">
      </user-form>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="createRecord" class="primary" rounded>
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ໂຫຼດຂໍ້ມູນ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table v-if="recordList" :headers="headers" :search="search" :items="filterEntries">
        <template v-slot:top>
          <v-toolbar flat class="pa-4">
            <v-row>
              <v-col cols="8">
              </v-col>
              <v-col cols="4" jujustify="end">
                <v-row>
                  <v-spacer></v-spacer>
                  <v-checkbox v-model.number="showActive" label="ສະແດງລາຍການ inActive"></v-checkbox>
                </v-row>
              </v-col>
            </v-row>
          </v-toolbar>
        </template>
        <template v-slot:[`item.rate`]="{ item }">
          {{ getFormatNum(item.rate) }}
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" text @click="viewRecord(item)
          wallet = true
            ">
<i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
      </v-data-table>

    </v-card>
  </div>
</template>
<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth,getFormatNum } from '~/common'

import TerminalForm from '~/components/TerminalForm.vue'
import UserForm from '~/components/UserForm.vue'
export default {
  components: {  TerminalForm, UserForm },
  middleware: 'auths',
  data() {
    return {
      componentKey: 0,
      entryForm: false,
      isCreate: true,
      dialog: false,
      isloading: false,
      search: '',
      showActive:false,
      recordList: [],
      entrySelected: '',
      headers: [
        {
          text: '#',
          align: 'center',
          value: 'pk',
          sortable: true,
        },
        {
          text: 'ລະຫັດ',
          align: 'center',
          value: 'cus_id',
          sortable: true,
        },
        {
          text: 'ຊື່',
          align: 'center',
          value: 'cus_name',
          sortable: true,
        },
        {
          text: 'Tel',
          align: 'center',
          value: 'cus_tel',
          sortable: true,
        },
        {
          text: 'View/Update',
          align: 'end',
          value: 'id',
          sortable: false,
        },
      ],
    }
  },
  async created() {
    await this.loadData()
  },
  computed: {
    preNewUserId(){
      const maxUserId = Math.max(...this.recordList.map(user => user.cus_id));
      return maxUserId+1
    },
    filterEntries(){
      console.log(`Show inActive = ${this.showActive}`);
      if(this.showActive) return this.recordList
      return this.recordList.filter(el=>el['cus_active']==true) || []
    }
  },

  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    viewRecord(item) {
      this.componentKey += 1;
      this.entrySelected = item.id
      this.isCreate = false
      this.entryForm = true;
    },
    createRecord() {
      this.componentKey += 1;
      this.entrySelected = 0
      this.isCreate = true
      this.entryForm = true;
    },
    async loadData() {
      if(this.isloading) return
      this.isloading = true
      await this.$axios
        .get(`api/user/find`)
        .then((res) => {
          // ****** Clear Old Data
          this.recordList = []
          for (const iterator of res.data) {
            iterator.pk = iterator['id']
            this.recordList.push(iterator)
          }
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
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

table {
  border: 1px solid black;
}
</style>
