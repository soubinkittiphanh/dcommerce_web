
<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card class="pa-4">
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          ຈັດການຫົວໜ່ວຍສິນຄ້າ
        </v-chip>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            disabled
            v-model="form.id"
            label="* Code"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.name"
            label="* ຊື່"
            required
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            v-model="form.unitRate"
            label="* ຈຳນວນຕໍ່ໜ່ວຍ"
            required
          ></v-text-field>
          <v-checkbox
            v-model.number="form.isActive"
            label="Is Active"
          ></v-checkbox>
        </v-form>
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
        <v-btn color="primary" rounded variant="text" @click="commitRecord">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true,
    },
    recordId: {
      type: Number,
      require: false,
      default: 0,
    },
  },
  data() {
    return {
      form: {
        id: null,
        name: '',
        unitRate: 1,
        isActive: true,
      },
      isloading: false,
      nameRules: [
        (value) => !!value || 'Name is required',
        (value) =>
          (value && value.length <= 20) ||
          'Name must be less than 20 characters',
      ],
    }
  },
  // mounted() {
  //     this.loadEntry();
  // },
  async created() {
    this.loadEntry()
  },
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
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        // Implement form submission logic here
        this.isloading = true
        let api = this.isCreate
          ? 'api/unit/create'
          : `api/unit/update/${this.recordId}`
        console.log('API => ', api)
        if (this.isCreate) {
          await this.$axios
            .post(api, this.form)
            .then((response) => {
              this.refreshData()
              return swalSuccess(
                this.$swal,
                'Succeed',
                'Your transaction completed'
              )
            })
            .catch((error) => {
              console.log('Error: ', error)
              return swalError2(
                this.$swal,
                'Error',
                'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
              )
            })
        } else {
          await this.$axios
            .put(api, this.form)
            .then((response) => {
              this.refreshData()
              return swalSuccess(
                this.$swal,
                'Succeed',
                'Your transaction completed'
              )
            })
            .catch((error) => {
              console.log('Error: ', error)
              return swalError2(
                this.$swal,
                'Error',
                'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
              )
            })
        }
        this.isloading = false
      }
    },
    async loadEntry() {
      console.log(`===> Update form record load`)
      if (this.recordId && !this.isCreate) {
        await this.$axios
          .get(`api/unit/find/${this.recordId}`)
          .then((response) => {
            // this.form.name = response.data["name"]
            // this.form.code = response.data["code"]
            // this.form.isActive = response.data["isActive"]
            this.form = response.data
          })
          .catch((error) => {
            console.log('Cannot fetch data ' + error)
          })
      }
    },
    refreshData() {
      this.initData()
      this.$emit('reload-data')
    },
  },
  computed: {
    // Add any necessary computed properties here
  },
}
</script>
