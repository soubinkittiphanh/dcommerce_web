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
    <v-card class="pa-4">
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          ຈັດການລູກຄ້າ
        </v-chip>
        <!-- <span class="text-h5">ຈັດການລູກຄ້າ</span> -->
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="ຊື່ລູກຄ້າ*"
                required
                v-model="client.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                required
                label="ບໍລິສັດ*"
                v-model="client.company"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="ອີເມວ*"
                v-model="client.email"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="ທີ່ຢູ່*"
                required
                v-model="client.address"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="client.telephone"
                label="ເບີໂທປະສານສຳພັນ*"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="client.credit"
                label="Credit *"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="client.lateChargePercent"
                label="ອັດຕາເປີເຊັນປັບໃຫມ ການຈ່າຍຊ້າ*"
                required
                v-comma-thousand
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                :items="grades"
                label="Grade *"
                v-model="client.grade"
              ></v-autocomplete>
            </v-col>
            <v-switch
              v-model="client.isActive"
              label="Active"
              :true-value="true"
              :false-value="false"
            ></v-switch>
            <!-- <v-col cols="12" sm="6">
                            <v-autocomplete item-text="desc" item-value="id" :items="account"
                                label="ບັນຊີແຍກປະເພດ DR ACCOUNT*" v-model="form.header.drAccount"></v-autocomplete>
                        </v-col> -->
          </v-row>
        </v-container>
        <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="warning"
          rounded
          variant="text"
          @click="$emit('close-dialog')"
        >
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
import { mapActions, mapGetters } from 'vuex'
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
      isloading: false,
      client: {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: 'C',
        isActive: true,
      },
      grades: ['A', 'B', 'C', 'D', 'E', 'F'],
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
        })
        .catch((error) => {
          swalError2(this.$swal, 'Error', error.response.data)
        })
      this.isloading = false
    },
    async submitData() {
      if (this.isloading) return
      this.isloading = true
      if (this.isEdit) {
        await this.$axios
          .put(`/api/client/update/${this.customerId}`, this.client)
          .then((response) => {
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
            this.$emit('reload-data')
          })
          .catch((error) => {
            swalError2(this.$swal, 'Error', error.response.data)
          })
      } else {
        await this.$axios
          .post('/api/client/create', this.client)
          .then((response) => {
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
            this.$emit('reload-data')
          })
          .catch((error) => {
            swalError2(this.$swal, 'Error', error.response.data.errors[0].msg)
          })
      }
      this.initData()
      this.isloading = false
    },
  },
}
</script>

<style></style>