
<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການ ລູກຄ້າ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>
    <v-dialog v-model="dialogCustomer" max-width="1024">
      <CustomerForm :isEdit="!isEdit" :customerId="selectedCustomerId" @close-dialog="handleEvent" @reload-data="loadData"
        :key="componentKey" />
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="OEGkC4zNgpY">
      </youtube-player>
    </v-dialog>

    <v-card>
      <div class="pa-2">
        <v-row>
          <v-col cols="6">
            <!-- <v-btn block size="large" variant="outlined" @click="createItem" class="primary" rounded>
              ເພີ່ມລູກຄ້າ<span class="mdi mdi-account-box"></span>
            </v-btn> -->
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-btn size="large" variant="outlined" @click="createItem" class="primary" rounded>
              <span class="mdi mdi-plus-box"></span>
              ເພີ່ມລູກຄ້າ
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-account-box"></span>
              ດຶງລາຍງານ
            </v-btn>
            <!-- <v-btn @click="loadData"> ດຶງລາຍງານ </v-btn> -->
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <v-card-text>
        <v-data-table v-if="customerList" :headers="headers" :search="search" :items="filterEntries">
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
          <template v-slot:[`item.function`]="{ item }">

            <v-btn color="primary" text @click="editItem(item.id)
            wallet = true
              ">

<i class="fa-regular fa-pen-to-square"></i>
            </v-btn>

          </template>
          <template v-slot:[`item.telephone`]="{ item }">
            {{ item.telephone }}
            <v-btn color="primary" text @click="whatsappLink(item)">
              <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
            </v-btn>

          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import CustomerForm from '@/components/customer/CustomerForm.vue';

export default {
  components: {
    CustomerForm
  },
  computed:{
    filterEntries(){
      console.log(`Show inActive = ${this.showActive}`);
      if(this.showActive) return this.customerList
      return this.customerList.filter(el=>el['isActive']==true) || []
    }
  },
  data() {
    return {
      guidelineDialog: false,
      showActive: false,
      userId: "",
      componentKey: 1,
      selectedCustomerId: 0,
      dialogCustomer: false,
      customerList: [],
      search: '',
      isEdit: false,
      isloading: false,
      whatsappContactLink: "",
      headers: [
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        { text: 'company', align: 'center', value: 'company' },
        { text: 'email', align: 'center', value: 'email' },
        { text: 'telephone', align: 'center', value: 'telephone' },
        // { text: 'active', align: 'center', value: 'isAtive' },
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
      const tel = item.telephone.trim();

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    handleEvent() {
      this.dialogCustomer = false;

    },
    editItem(clientId) {
      this.componentKey += 1;
      this.selectedCustomerId = clientId;
      this.dialogCustomer = true;
      this.isEdit = false;
    },
    createItem() {
      this.componentKey += 1;
      this.dialogCustomer = true;
      this.isEdit = true;
    },
    async loadData() {
      this.isloading = true
      await this.$axios.get("api/client/find").then(response => {
        this.customerList = []
        for (const iterator of response.data) {
          this.customerList.push(iterator)
        }
      }).catch(error => {
        console.log("Error ", error);
      })
      this.isloading = false
    }
  }
}
</script>
