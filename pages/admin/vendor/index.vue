
<template>
  <div>
    <v-dialog v-model="formDialog" max-width="1024" persistent>
      <vendor-form :is-create="isCreate" :record-id="entrySelectedId" @close-dialog="handleEvent" @reload-data="loadData" :key="componentKey"/>
    </v-dialog>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700" :key="dialogKey">
      <youtube-player @close-dialog="guidelineDialog = false" :youtube-link="watchingLink">
      </youtube-player>
    </v-dialog>
    <v-chip class="pa-5" color="primary" label text-color="white">
      <!-- <v-icon start>mdi-label</v-icon> -->
      <v-icon start>mdi mdi-lifebuoy</v-icon>
      <h3>ສາທິດການນຳໃຊ້ລະບົບ</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>

        <v-row>
          <v-col cols="6">
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6">
            <v-btn size="large" variant="outlined" @click="createRecord" class="primary" rounded :disabled="user.id!=1">
              <span class="mdi mdi-plus-box"></span>
              ເພີ່ມລາຍການ
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-account-box"></span>
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>

      </v-card-text>


      <v-data-table v-if="entries" :headers="headers" :search="search" :items="entries">

        <template v-slot:[`item.edit`]="{ item }">

          <v-btn color="primary" text @click="editItem(item)
          isedit = true
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
import VendorForm from '~/components/VendorForm.vue';
export default {
  components: {
    VendorForm
  },
  data() {
    return {
      guidelineDialog:false,
      componentKey:1,
      watchingLink:'OEGkC4zNgpY',
      selectedRiderId:"",
      formDialog: false,
      entries: [],
      search: '',
      entrySelectedId:0,
      isCreate:false,
      isloading: false,
      dialogKey:1,
      headers: [
        {
          text: 'ຊື່',
          align: 'left',
          value: 'name',
          sortable: true,
        },
        { text: 'ເບີໂທ', align: 'center', value: 'tel' },
        { text: 'note', align: 'center', value: 'remark' },
        {
          text: '',
          align: 'end',
          value: 'function',
          sortable: false,
        },
        {
          text: '',
          align: 'end',
          value: 'edit',
          sortable: false,
        },
      ],
    }
  },
  mounted() {
    this.loadData()
  },
  computed:{
    user() {
      return this.$auth.user || ''
    },
  },
  methods: {
    viewItem(item){
      this.watchingLink = item.youtubeLink
      this.dialogKey +=1;
      this.guidelineDialog = true;
    },

    createRecord() {
      this.componentKey += 1;
      this.entrySelectedId = 0
      this.isCreate = true
      this.formDialog = true;
    },
    handleEvent() {
      this.formDialog = false;
    },
    editItem(item){
      if (this.user.id!=1) {
        return swalError2(this.$swal, 'Error', 'ສະເພາະ ຜູ້ດູແລລະບົບເທົ່ານັ້ນ ')
      }
      this.componentKey += 1;
      this.entrySelectedId = item.id;
      this.formDialog = true;
      this.isCreate = false;
    },

    async loadData() {
      await this.$axios.get("api/vendor/findAll").then(response => {
        this.isloading = true
        this.entries = response.data
      }).catch(error => {
        console.log("Error ", error);
      })
      this.isloading = false
    }
  }
}
</script>
