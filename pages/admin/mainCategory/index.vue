
<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການ ປະເພດສິນຄ້າຫຼັກ</h3>
      </v-chip>
    </div>
    <v-dialog v-model="formDialog" max-width="600px">
      <main-category-form :is-create="isCreate" :record-id="entrySelectedId" @close-dialog="handleEvent"
        @reload-data="loadData" :key="componentKey" />
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
        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table v-if="entries" :headers="headers" :items="filterEntries" :items-per-page="5" :search="search"
        class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat class="pa-4">
            <v-row>
              <v-col cols="8">
                <v-toolbar-title>ຈຳນວນ ປະເພດສິນຄ້າຫຼັກທັງຫມົດ: {{ filterEntries.length }}</v-toolbar-title>
              </v-col>
              <v-col cols="4" jujustify="end">
                <v-row>
                  <v-spacer></v-spacer>
                  <v-btn class="primary" size="large" variant="outlined" rounded @click="createRecord">
                    ສ້າງໃຫມ່
                  </v-btn>
                </v-row>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-checkbox v-model.number="showActive" label="ສະແດງລາຍການ inActive"></v-checkbox>
                </v-row>
              </v-col>
            </v-row>
          </v-toolbar>
        </template>
        <template v-slot:[`item.function`]="{ item }">
          <v-btn color="primary" text @click="editItem(item)">
            <i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import { swalSuccess, swalError2 } from '~/util/myUtil'
import MainCategoryForm from '@/components/MainCategoryForm.vue';
export default {
  middleware: 'auths',
  components: {
    MainCategoryForm
  },
  data: () => ({
    isloading: false,
    dialog: false,
    entrySelectedId: 0,
    componentKey: 1,
    isCreate: false,
    formDialog: false,
    message: '',
    search: '',
    showActive: false,
    headers: [
      {
        text: 'ລະຫັດ',
        align: 'center',
        sortable: false,
        value: 'id',
      },
      { text: 'ຊື່ຫມວດຫມູ່ຫຼັກ', align: 'center', value: 'categoryName' },
      { text: 'ຫມາຍເຫດ', align: 'center', value: 'categoryDesc' },
      {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'function',
        sortable: false,
      },
    ],
    entries: [],
  }),

  created() {
    this.loadData()
  },
  computed:{
    filterEntries(){
      if(this.showActive) return this.entries
      return this.entries.filter(el=>el['isActive']==true) || []
    }
  },
  methods: {
    handleEvent() {
      this.formDialog = false;
    },
    async loadData() {
      this.isloading = true;
      await this.$axios
        .get('/api/mainCategory/findAll')
        .then((response) => {
          this.entries = response.data
        })
        .catch((er) => {
          swalError2(this.$swal, "Error", er)
        })
      this.isloading = false;
    },
    createRecord() {
      this.componentKey += 1;
      this.entrySelectedId = 0
      this.isCreate = true
      this.formDialog = true;
    },
    editItem(item) {
      this.componentKey += 1;
      this.entrySelectedId = item.id;
      this.formDialog = true;
      this.isCreate = false;
    },
  },
}
</script>
