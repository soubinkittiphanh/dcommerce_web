<template>
  <v-container fluid>
    <v-row align="center" class="mb-4">
      <v-col cols="12" md="6">
        <h1 class=" font-weight-bold primary--text">
          <v-icon large color="primary" class="mr-2">mdi-bank</v-icon>
          ຈັດການຂໍ້ມູນທະນາຄານ
        </h1>
      </v-col>
      <v-col cols="12" md="6" class="text-right">
        <v-btn color="primary" x-large elevation="2" rounded @click="openCreateDialog">
          <v-icon left>mdi-plus</v-icon>
          ເພີ່ມທະນາຄານໃໝ່
        </v-btn>
      </v-col>
    </v-row>

    <v-card elevation="2" border-radius="lg">
      <v-card-title class="pa-4">
        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາທະນາຄານ..." outlined dense hide-details
          class="max-width-300"></v-text-field>
        <v-spacer></v-spacer>
        <span class=" grey--text">ທັງໝົດ: {{ loadData.length }} ລາຍການ</span>
      </v-card-title>

      <v-data-table :headers="headers" :items="loadData" :search="search" :loading="isloading" class="elevation-0"
        :footer-props="{ 'items-per-page-options': [5, 10, 15] }">
        <template v-slot:[`item.bank_function`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="blue" v-bind="attrs" v-on="on" @click="editItem(item)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <span>ແກ້ໄຂ</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialogForm" max-width="550px" persistent transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>{{ isedit ? 'ແກ້ໄຂຂໍ້ມູນ' : 'ເພີ່ມຂໍ້ມູນທະນາຄານ' }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialogForm = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>

        <v-card-text class="pt-6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field v-model="form_data.bank_code" label="ລະຫັດ (Code)" outlined dense :rules="rule.cat_id"
                  placeholder="ເຊັ່ນ: BCEL"></v-text-field>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field v-model="form_data.bank_name" label="ຊື່ທະນາຄານ" outlined dense
                  :rules="rule.cat_name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form_data.bank_remark" label="ໝາຍເຫດ" outlined rows="3"
                  placeholder="ເພີ່ມຂໍ້ມູນເພີ່ມເຕີມ..."></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-btn text color="grey darken-1" @click="reset">ລ້າງຂໍ້ມູນ</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="grey lighten-3" depressed @click="dialogForm = false" class="mr-2">ຍົກເລີກ</v-btn>
          <v-btn color="primary" depressed :loading="isloading" @click="submitDatas">
            <v-icon left>mdi-content-save</v-icon> ບັນທຶກຂໍ້ມູນ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog" width="400">
      <dialog-classic-message :message="message" @closedialog="message = null" />
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  middleware: 'auths',
  data: () => ({
    isloading: false,
    isedit: false,
    dialog: false,
    dialogForm: false,
    message: '',
    valid: true,
    search: '',
    rule: {
      cat_id: [(v) => !!v || 'ກະລຸນາໃສ່ລະຫັດ'],
      cat_name: [(v) => !!v || 'ກະລຸນາໃສ່ຊື່ທະນາຄານ'],
    },
    form_data: {
      bank_id: null,
      bank_code: '',
      bank_name: '',
      bank_remark: '',
    },
    headers: [
      { text: 'ລະຫັດ', align: 'start', value: 'bank_code', class: 'grey lighten-4 font-weight-bold' },
      { text: 'ຊື່ທະນາຄານ', align: 'start', value: 'bank_name', class: 'grey lighten-4 font-weight-bold' },
      { text: 'ໝາຍເຫດ', align: 'start', value: 'bank_remark', class: 'grey lighten-4 font-weight-bold' },
      { text: 'ຈັດການ', align: 'center', value: 'bank_function', sortable: false, class: 'grey lighten-4 font-weight-bold' },
    ],
    loadData: [],
  }),
  watch: {
    message(val) {
      this.dialog = !!val;
    },
  },
  created() {
    this.fetchData()
  },
  methods: {
    openCreateDialog() {
      this.isedit = false;
      this.reset();
      this.dialogForm = true;
    },
    reset() {
      if (this.$refs.form) this.$refs.form.resetValidation();
      this.form_data = {
        bank_id: null,
        bank_code: '',
        bank_name: '',
        bank_remark: '',
      };
    },
    async submitDatas() {
      if (!this.$refs.form.validate()) return;

      this.isloading = true;
      const submitData = {
        bnk_id: this.form_data.bank_id,
        bnk_code: this.form_data.bank_code,
        bnk_name: this.form_data.bank_name,
        bnk_remark: this.form_data.bank_remark,
      };

      // Updated to use your /api/bank prefix
      const url = this.isedit ? '/api/bank/update' : '/api/bank/create';

      try {
        const res = await this.$axios.post(url, submitData);
        // Checking for your custom success response from the controller
        if (res.data.success) {
          this.message = res.data.message || "ດຳເນີນການສຳເລັດ";
          this.dialogForm = false;
          await this.fetchData();
        } else {
          this.message = res.data.message || "ມີຂໍ້ຜິດພາດເກີດຂຶ້ນ";
        }
      } catch (er) {
        // Handle error response from server (e.g. 500 error)
        this.message = 'Error: ' + (er.response?.data?.message || er.message);
      } finally {
        this.isloading = false;
      }
    },
    async fetchData() {
      this.isloading = true;
      try {
        // Updated path to match router.get("/find")
        const res = await this.$axios.get('/api/bank/find');
        this.loadData = res.data.map((el) => ({
          bank_id: el.id,
          bank_code: el.code,
          bank_name: el.bank_name,
          bank_remark: el.bank_remark,
          bank_function: el.id,
        }));
      } catch (er) {
        console.error('Fetch error:', er);
        this.message = "ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້";
      } finally {
        this.isloading = false;
      }
    },
    editItem(item) {
      this.isedit = true;
      // Use spread operator to prevent real-time table mutation
      this.form_data = { ...item };
      this.dialogForm = true;
    },
  },
}
</script>

<style scoped>
.max-width-300 {
  max-width: 300px;
}

/* Optional: improve table row hover effect */
.v-data-table>>>tbody tr:hover {
  background-color: #f5f5f5 !important;
}
</style>