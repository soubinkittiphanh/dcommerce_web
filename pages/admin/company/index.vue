<template>
  <div class="text-left">
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍການ Company</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="entryFormDialog" fullscreen>
      <company-form @reload-data="loadData()
      entryFormDialog = false" :isCreate="isCreate" :key="componentKey" 
        :recordId="entrySelected" @close-dialog="entryFormDialog = false">
      </company-form>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6" class="d-flex align-center">
            <v-switch
              v-model="showInactive"
              label="ສະແດງສາຂາທີ່ປິດໃຊ້ງານ"
              color="primary"
              dense
              hide-details
              class="mt-0 pt-0"
            ></v-switch>
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
      <v-data-table v-if="entries" :headers="headers" :search="search" :items="filteredEntries">
        <template v-slot:[`item.rate`]="{ item }">
          {{ getFormatNum(item.rate) }}
        </template>
        <template v-slot:[`item.isActive`]="{ item }">
          <v-chip
            v-if="item.isActive"
            color="success"
            small
            label
          >
            ເປີດໃຊ້ງານ
          </v-chip>
          <v-chip
            v-else
            color="error"
            small
            label
          >
            ປິດໃຊ້ງານ
          </v-chip>
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
import CompanyForm from '~/components/CompanyForm.vue'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { CompanyForm },
  middleware: 'auths',
  data() {
    return {
      componentKey: 0,
      entryFormDialog: false,
      isCreate: true,
      dialog: false,
      isloading: false,
      search: '',
      showInactive: false,
      entries: [],
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
          value: 'mnemonic',
          sortable: true,
        },
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        {
          text: 'ທີ່ຢູ່',
          align: 'center',
          value: 'address',
          sortable: true,
        },
        {
          text: 'ເບີໂທ',
          align: 'center',
          value: 'tel',
          sortable: true,
        },
        {
          text: 'ອີເມວ',
          align: 'center',
          value: 'email',
          sortable: true,
        },
        {
          text: 'ສະຖານະ',
          align: 'center',
          value: 'isActive',
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
    filteredEntries() {
      if (this.showInactive) {
        return this.entries
      }
      return this.entries.filter(item => item.isActive)
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
      this.entryFormDialog = true;
    },
    createRecord() {
      this.componentKey += 1;
      this.entrySelected = 0
      this.isCreate = true
      this.entryFormDialog = true;
    },
    async loadData() {
      if(this.isloading) return
      this.isloading = true
      await this.$axios
        .get(`api/company/findAll`)
        .then((res) => {
          // ****** Clear Old Data
          this.entries = []
          for (const iterator of res.data) {
            iterator.pk = iterator['id']
            this.entries.push(iterator)
          }
          console.log("====> " + this.entries.length);
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
