
<template>
  <div>
    <v-dialog v-model="dialogRider" max-width="1024" persistent>
      <RiderForm :is-create="isCreate" :rider-id="selectedRiderId" @close-dialog="handleEvent" @reload-data="loadData" :key="componentKey"/>
    </v-dialog>
    <div>
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ຈັດການຣາຍເດີ</h3>
    </v-chip>
    <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="ZCfSp3zuTL4">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>


    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <v-btn @click="createItem" class="primary" size="large" variant="outlined" rounded> ສ້າງລາຍເດີ </v-btn>

          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
            <!-- <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx /> -->
            <v-btn @click="loadData" class="primary" size="large" variant="outlined" rounded> ດຶງລາຍງານ </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>

      </v-card-text>


      <v-data-table v-if="riderList" :headers="headers" :search="search" :items="riderList">
        <template v-slot:[`item.function`]="{ item }">

          <v-btn color="primary" text @click="editItem(item.id)
          wallet = true
            ">
<i class="fa-regular fa-pen-to-square"></i>
          </v-btn>

        </template>
        <template v-slot:[`item.tel`]="{ item }">
          {{ item.tel }}
          <v-btn color="primary" text @click="whatsappLink(item)">
            <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
          </v-btn>

        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import RiderForm from '@/components/RiderForm.vue';

export default {
  components: {
    RiderForm
  },
  data() {
    return {
      userId: "",
      componentKey:1,
      selectedRiderId:"",
      dialogRider: false,
      guidelineDialog: false,
      riderList: [],
      search: '',
      isCreate:false,
      isloading: false,
      whatsappContactLink: "",
      headers: [
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        { text: 'ເບີໂທ', align: 'center', value: 'tel' },
        { text: 'Rating', align: 'center', value: 'rating' },
        { text: 'active', align: 'center', value: 'isAtive' },
        {
          text: 'ລາຍລະອຽດ',
          align: 'end',
          value: 'function',
          sortable: false,
        },
      ],
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    whatsappLink(item) {
      // const completeTel = tel.substring(tel.length-7);
      const tel = item.tel.trim();

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    handleEvent() {
      this.dialogRider = false;

    },
    editItem(riderId){
      this.componentKey += 1;
      this.selectedRiderId = riderId;
      this.dialogRider = true;
      this.isCreate = false;
    },
    createItem(){
      this.componentKey += 1;
      this.dialogRider = true;
      this.isCreate = true;
    },
    async loadData() {
      await this.$axios.get("api/rider/findAll").then(response => {
        this.isloading = true
        this.riderList = response.data.map(el => {
          return {
            id: el["id"],
            name: el["name"],
            tel: el["tel"],
            rating: el["rating"],
            isActive: el["isActive"],
            function: el["id"],
          }
        })
      }).catch(error => {
        console.log("Error ", error);
      })
      this.isloading = false
    }
  }
}
</script>
