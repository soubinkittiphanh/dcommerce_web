
<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card class="pa-4">
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          ຈັດການ ລາຍການລາຄາ
        </v-chip>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.productId"
                label="* ລະຫັດສິນຄ້າ"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-text-field
                v-model="form.name"
                label="* Name"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-autocomplete
                :items="grades"
                label="Grade *"
                v-model="form.grade"
              ></v-autocomplete>
            </v-col>
            <v-col cols="2">
              <v-text-field
                v-model="form.amount"
                label="* ລາຄາ"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-autocomplete
                item-text="code"
                item-value="id"
                :items="findAllCurrency"
                label="Currency*"
                v-model="form.currencyId"
              ></v-autocomplete>
            </v-col>
            <v-col cols="2">
              <v-select
                v-model="form.type"
                :items="type"
                label="ຮູບແບບລາຄາ"
                required
              ></v-select>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model.number="form.isActive"
                label="Is Active"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                color="primary"
                rounded
                variant="text"
                @click="commitRecord"
              >
                ເພີ່ມ
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
        <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
        <v-divider> </v-divider>
        <v-data-table :headers="headers" :search="search" :items="entries">
          <!-- <template v-slot:[`item.id`]="{ item }"> -->
            <template v-slot:[`item.id`]="{ item, index }">
            <v-btn color="warning" text @click="deleteItem(item,index)">
              <i class="fa fa-trash"></i>
            </v-btn>
          </template>
          <template v-slot:[`item.name`]="{ item }">
            {{ item.name }} [ {{ item.grade }} ]
          </template>
          <template v-slot:[`item.amount`]="{ item }">
            {{ formatNumber(item.amount) }}
          </template>
        </v-data-table>
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
        <!-- <v-btn color="primary" rounded variant="text" @click="commitRecord">
                    Save
                </v-btn> -->
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
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
      grades: ['A', 'B', 'C', 'D', 'E', 'F'],
      search: '',
      form: {
        grade: '',
        productId: '',
        id: null,
        name: '',
        amount: 0,
        type: 'Price',
        currencyId: 1,
        isActive: true,
      },
      type: ['Price', 'Percent'],
      entries: [],
      headers: [
        {
          text: 'Name',
          align: 'end',
          value: 'name',
          sortable: false,
        },
        {
          text: 'ລາຄາ',
          align: 'end',
          value: 'amount',
          sortable: false,
        },
        {
          text: 'ສູດຄິດໄລ່',
          align: 'end',
          value: 'type',
          sortable: false,
        },
        {
          text: 'ລົບ',
          align: 'end',
          value: 'id',
          sortable: false,
        },
      ],
      isloading: false,
      nameRules: [
        (value) => !!value || 'Name is required',
        (value) =>
          (value && value.length <= 150) ||
          'Name must be less than 20 characters',
      ],
    }
  },
  async created() {
    this.form.productId = this.recordId
    this.loadEntry()
  },
  methods: {
    ...mapActions([
      'addProductPricesToCreate',
      'deleteProductPricesToCreate',
    ]),
    formatNumber(value) {
      return getFormatNum(value)
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        if (this.recordId == 0) {
          let localForm = { ...this.form };
          this.addProductPricesToCreate(localForm)
          console.log(
            `Item to create ${this.findAllProductPriceListToCreate.length}`
          )
          return
        }

        this.isloading = true
        let api = 'api/priceList/create'
        console.log('API => ', api)
        try {
          const response = await this.$axios.post(api, this.form)
          console.log(`Load data ${JSON.stringify(response)}`)
          await this.loadEntry()
          swalSuccess(this.$swal, 'Succeed', 'Your transaction completed')
        } catch (error) {
          return swalError2(
            this.$swal,
            'Error',
            'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
          )
        }
        this.isloading = false
      }
    },
    async deleteItem(item,idx) {
      if (this.recordId == 0) {
        this.deleteProductPricesToCreate(idx)
        return
      }
      if (!this.isloading) {
        // Implement form submission logic here
        this.isloading = true
        let api = `api/priceList/find/${item.id}`
        console.log('API => ', api)
        try {
          const response = await this.$axios.delete(api)
          console.log(`Load data `)
          await this.loadEntry()
          swalSuccess(
            this.$swal,
            'Succeed',
            'Your transaction has been deleted'
          )
        } catch (error) {
          return swalError2(
            this.$swal,
            'Error',
            'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
          )
        }
        this.isloading = false
      }
    },
    async loadEntry() {
      console.log(`Loading data .... ${this.recordId}`)
      if (this.recordId == 0) {
        this.entries = this.findAllProductPriceListToCreate
        return
      }
      try {
        const response = await this.$axios.get(
          `api/priceList/findByProductId/${this.recordId}`
        )
        console.warn(`RESPONSE DATA ${JSON.stringify(response.data)}`)
        this.entries = response.data
      } catch (error) {
        console.log('Cannot fetch data ' + error)
        return swalError2(
          this.$swal,
          'Error',
          'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
        )
      }
    },
    refreshData() {
      this.$emit('reload-data')
    },
  },
  computed: {
    ...mapGetters([
      'findAllProductPriceListToCreate',
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
    ]),
  },
}
</script>
