<template>
  <div class="text-left">
  <div >
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍການ ສິດການນຳໃຊ້</h3>
    </v-chip>
    <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="M8GsEpxydWI">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="entryFormDialog" max-width="1024">
      <authority-form @reload-data="loadData()
      entryFormDialog = false" :isCreate="isCreate" :key="componentKey" :recordId="entrySelected"
        @close-dialog="entryFormDialog = false">
      </authority-form>
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
      <v-data-table v-if="entries" :headers="headers" :search="search" :items="entries">
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
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import AuthorityForm from '~/components/AuthorityForm.vue'
export default {
  components: { AuthorityForm },
  middleware: 'auths',
  data() {
    return {
      componentKey: 0,
      entryFormDialog: false,
      guidelineDialog: false,
      isCreate: true,
      dialog: false,
      isloading: false,
      search: '',
      entries: [],
      entrySelected: '',
      headers: [
        {
          text: 'ລະຫັດ',
          align: 'center',
          value: 'code',
          sortable: true,
        },
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
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
  },

  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    viewRecord(item) {
      this.componentKey += 1;
      this.entrySelected = item.id
      this.isCreate = false
      this.entryFormDialog = true;
    },
    createRecord() {
      this.componentKey += 1;
      this.entrySelected = 0
      this.isCreate = true
      this.entryFormDialog = true;
    },
    async loadData() {
      if (this.isloading) return
      this.isloading = true
      await this.$axios
        .get(`api/authority/findAll`)
        .then((res) => {
          // ****** Clear Old Data
          this.entries = res.data
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

/* .myelevation {
  background-color: '#f0f0f';
  color: red;
} */
</style>
