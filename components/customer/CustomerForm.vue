<template>
  <v-row justify="center">
    <!-- <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
                Open Dialog
            </v-btn>
        </template> -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card class="pa-4" width="100%">
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          ຈັດການລູກຄ້າ
        </v-chip>
        <!-- <span class="text-h5">ຈັດການລູກຄ້າ</span> -->
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="ຊື່ລູກຄ້າ*" :rules="[rules.required, rules.nameLength]" v-model="client.name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="ບໍລິສັດ" :rules="[rules.companyLength]" v-model="client.company"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="ອີເມວ" :rules="[rules.emailLength, rules.emailFormat]" v-model="client.email" persistent-hint></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="ທີ່ຢູ່" :rules="[rules.addressLength]" v-model="client.address"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="client.telephone" :rules="[rules.telephoneLength]" label="ເບີໂທປະສານສຳພັນ"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="client.credit" :rules="[rules.creditInteger]" label="Credit"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="client.lateChargePercent" :rules="[rules.lateChargePercentNumber]" label="ອັດຕາເປີເຊັນປັບໃຫມ ການຈ່າຍຊ້າ"
                  v-comma-thousand></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                 <v-autocomplete :items="grades" label="Grade" v-model="client.grade" clearable
                  placeholder="Select grade (optional)"></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="client.loyaltyPoints" label="Loyalty Points (ຄະແນນ)" type="number" color="primary" 
                  append-icon="mdi-star" persistent-hint hint="Manual adjustment of points"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-switch v-model="client.isActive" label="Active" :true-value="true" :false-value="false"></v-switch>
              </v-col>
              <!-- <v-col cols="12" sm="6">
                              <v-autocomplete item-text="desc" item-value="id" :items="account"
                                  label="ບັນຊີແຍກປະເພດ DR ACCOUNT*" v-model="form.header.drAccount"></v-autocomplete>
                          </v-col> -->
            </v-row>
          </v-container>
        </v-form>
        <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃσ່ຂໍ້ມູນ</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="warning" rounded variant="text" @click="closeForm">
          Close
        </v-btn>
        <v-btn color="primary" rounded variant="text" @click="submitData">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
import commaThousand from '@/plugins/comma-thousand'
import { swalSuccess, swalError2 } from '~/common/index'
import { mapActions } from 'vuex'
export default {
  props: {
    customerId: {
      type: Number,
      default: 0,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    commaThousand,
  },
  data() {
    return {
      valid: true,
      isloading: false,
      client: {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: null,
        isActive: true,
        loyaltyPoints: 0,
      },
      grades: ['A', 'B', 'C', 'D', 'E', 'F'],
      rules: {
        required: (v) => !!v || 'ກະລຸນາປ້ອນຂໍ້ມູນ',
        nameLength: (v) => !v || v.length <= 50 || 'ຊື່ລູກຄ້າຕ້ອງບໍ່ເກີນ 50 ຕົວອັກສອນ',
        companyLength: (v) => !v || v.length <= 50 || 'ຊື່ບໍລິສັດຕ້ອງບໍ່ເກີນ 50 ຕົວອັກສອນ',
        emailLength: (v) => !v || v.length <= 100 || 'ອີເມວຕ້ອງບໍ່ເກີນ 100 ຕົວອັກສອນ',
        emailFormat: (v) => {
          if (!v) return true
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          return pattern.test(v) || 'ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ'
        },
        addressLength: (v) => !v || v.length <= 100 || 'ທີ່ຢູ່ຕ້ອງບໍ່ເກີນ 100 ຕົວອັກສອນ',
        telephoneLength: (v) => !v || v.length <= 15 || 'ເບີໂທຕ້ອງບໍ່ເກີນ 15 ຕົວອັກສອນ',
        creditInteger: (v) =>
          v === null ||
          v === undefined ||
          v === '' ||
          Number.isInteger(Number(String(v).replace(/,/g, ''))) ||
          'Credit ຕ້ອງເປັນຕົວເລກຖ້ວນ',
        lateChargePercentNumber: (v) =>
          v === null ||
          v === undefined ||
          v === '' ||
          !isNaN(parseFloat(String(v).replace(/,/g, ''))) ||
          'ອັດຕາເປີເຊັນປັບໃຫມ ຕ້ອງເປັນຕົວເລກ',
      },
    }
  },
  mounted() {
    if (this.isEdit) {
      console.log('Load payment header')
      this.loadEntryById()
    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'initiateData',
      'setSelectedTerminal',
      'setSelectedLocation',
    ]),
    initData() {
      // Call the method directly
      this.initiateData(this.$axios)
    },
    async loadEntryById() {
      this.isloading = true
      await this.$axios
        .get(`/api/client/find/${this.customerId}`)
        .then((response) => {
          this.client = response.data
          if (this.$refs.form) {
            this.$refs.form.resetValidation()
          }
        })
        .catch((error) => {
          swalError2(this.$swal, 'Error', error.response?.data || error.message)
        })
      this.isloading = false
    },
    closeForm() {
      if (this.$refs.form) {
        this.$refs.form.resetValidation()
      }
      this.$emit('close-dialog')
    },
    async submitData() {
      if (this.isloading) return
      if (this.$refs.form && !this.$refs.form.validate()) {
        return
      }
      this.isloading = true

      const payload = {
        ...this.client,
        credit: this.client.credit !== null && this.client.credit !== undefined && this.client.credit !== ''
          ? parseInt(String(this.client.credit).replace(/,/g, ''), 10)
          : null,
        lateChargePercent: this.client.lateChargePercent !== null && this.client.lateChargePercent !== undefined && this.client.lateChargePercent !== ''
          ? parseFloat(String(this.client.lateChargePercent).replace(/,/g, ''))
          : 0,
        loyaltyPoints: this.client.loyaltyPoints !== null && this.client.loyaltyPoints !== undefined && this.client.loyaltyPoints !== ''
          ? parseInt(this.client.loyaltyPoints, 10)
          : 0
      }

      if (this.isEdit) {
        await this.$axios
          .put(`/api/client/update/${this.customerId}`, payload)
          .then((response) => {
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
            this.$emit('reload-data')
            this.closeForm()
          })
          .catch((error) => {
            const errorMsg = error.response?.data?.message || 
                             error.response?.data?.errors?.[0]?.msg || 
                             error.response?.data || 
                             error.message || 
                             'ເກີດຂໍ້ຜິດພາດ';
            swalError2(this.$swal, 'Error', errorMsg)
          })
      } else {
        await this.$axios
          .post('/api/client/create', payload)
          .then((response) => {
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
            this.$emit('reload-data')
            this.closeForm()
          })
          .catch((error) => {
            const errorMsg = error.response?.data?.message || 
                             error.response?.data?.errors?.[0]?.msg || 
                             error.response?.data || 
                             error.message || 
                             'ເກີດຂໍ້ຜິດພາດ';
            swalError2(this.$swal, 'Error', errorMsg)
          })
      }
      this.initData()
      this.isloading = false
    },
  },
}
</script>

<style></style>