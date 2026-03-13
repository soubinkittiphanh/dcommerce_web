<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການເມນູ</h3>
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
      <menu-header-form @reload-data="loadData()
      entryFormDialog = false" :isCreate="isCreate" :key="componentKey" :recordId="entrySelected"
        @close-dialog="entryFormDialog = false">
      </menu-header-form>
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
        <template v-slot:[`item.edit`]="{ item }">
          <v-btn color="primary" text @click="viewRecord(item)
          wallet = true
            ">
            <i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.icon`]="{ item }">
            <!-- <i :class="item.icon"></i> -->
            <v-icon color="primary">{{ item.icon }}</v-icon>
        </template>
      </v-data-table>

    </v-card>
  </div>
</template>
<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import MenuHeaderForm from '~/components/MenuHeaderForm.vue'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { MenuHeaderForm },
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
          text: '#',
          align: 'center',
          value: 'id',
          sortable: true,
        },
        {
          text: 'ລະຫັດ',
          align: 'center',
          value: 'code',
          sortable: true,
        },
        {
          text: 'icon',
          align: 'center',
          value: 'icon',
          sortable: true,
        },
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        {
          text: 'ຊື່ LL',
          align: 'center',
          value: 'llname',
          sortable: true,
        },
        {
          text: 'View/Update',
          align: 'end',
          value: 'edit',
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
      try {
        const response = await this.$axios
          .get(`api/menuHeader/find`)
        this.entries = response.data
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
      }


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
