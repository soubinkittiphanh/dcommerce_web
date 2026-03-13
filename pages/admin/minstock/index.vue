<template>
  <div class="text-left">
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍງານສິນຄ້າໃກ້ຫມົດ</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isstock" max-width="600px">
      <card-form :key="stockFormKey"  :product-id="selectedProductId" :id="selectedId" :cost="selectedProductCost"
        :product-name="selectedProductName" @close-dialog="isstock = false" @reload="rebuildStock"></card-form>
    </v-dialog>
    <v-dialog v-model="editProductForm" max-width="1200px">
      <product-form :key="productFormKey" @close-dialog="editProductForm = false" :header-id="selectedProductId"
        @refresh="fetchData" :isEdit="editProductForm"></product-form>
    </v-dialog>
    <v-dialog v-model="productFormCreate" max-width="1200px">
      <product-form-create @close-dialog="productFormCreate = false" @refresh="fetchData">
      </product-form-create>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="6" sm="6" md="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="rebuildStock" class="primary" rounded>
              <span class="mdi mdi-update"></span>
              Refresh
            </v-btn>
          </v-col>
        </v-row>


      </v-card-title>

      <v-data-table v-if="loaddata" :headers="headers" :search="search" :items="loaddata" :items-per-page="pageLine">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ສິນຄ້າທັງຫມົດ: {{ loaddata.length }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn size="large" variant="outlined" @click="productFormCreate = true" class="primary" rounded>
              <span class="mdi mdi-note-plus-outline"></span>
              ສ້າງສິນຄ້າໃຫມ່
            </v-btn>

          </v-toolbar>
        </template>
        <!-- <template v-slot:[`item.function`]="{ item }">
          <v-btn @click="triggerCardForm(item)">
            <i class="fas fa-cart-plus"></i>
            ເພີ່ມສະຕັອກ
          </v-btn>
          <v-btn @click="editStock(item)">
            <i class="fas fa-dolly"></i>
            ເບິ່ງສະຕັອກ
          </v-btn>
        </template> -->
        <template v-slot:[`item.functionEdit`]="{ item }">
          <v-btn variant="outlined" @click="editItem(item)
          isedit = true">
            <v-icon small class="mr-2">
              <!-- mdi-pencil -->
            </v-icon>
            ແກ້ໄຂ
          </v-btn>
        </template>
        <template v-slot:[`item.functionEdit`]="{ item }">
          <!-- <v-btn variant="outlined" @click="editItem(item)
          isedit = true">
            <v-icon small class="mr-2">
              mdi-pencil
            </v-icon>
          </v-btn> -->

          <v-btn color="primary" text @click="editItem(item)
          wallet = true
            ">

<i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.functionStock`]="{ item }">

          <!-- <v-btn variant="outlined" @click="triggerCardForm(item)">
            <i class="fas fa-cart-plus"></i>

          </v-btn> -->
          <v-btn color="primary" text @click="triggerCardForm(item)
          wallet = true
            ">
            <i class="fa fa-cart-plus"></i>
          </v-btn>

        </template>
        <template v-slot:[`item.functionStockView`]="{ item }">
          <!-- <v-btn variant="outlined" @click="editStock(item)">
            <i class="fas fa-eye"></i>
          </v-btn> -->

          <v-btn color="primary" text @click="editStock(item)
          wallet = true
            ">

            <i class="fa fa-eye"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.pro_cost_price`]="{ item }">
          {{ formatNumber(item.pro_cost_price) }}

        </template>
        <template v-slot:[`item.pro_price`]="{ item }">
          {{ formatNumber(item.pro_price) }}

        </template>
        <template v-slot:[`item.pro_card_count`]="{ item }">
          <!-- <p style="color: red;font-weight: bold;">{{ formatNumber(item.pro_card_count) }}</p> -->
          {{ formatNumber(item.pro_card_count) }}

        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-chip class="ma-2"
            :color="verifyStockStatus(item.minStock, item.pro_card_count).includes(`In`) ? `green` : verifyStockStatus(item.minStock, item.pro_card_count).includes(`Out`) ? `red` : `orange`"
            text-color="white">
            {{ verifyStockStatus(item.minStock, item.pro_card_count) }}
          </v-chip>

        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import ProductForm from '~/components/product/ProductForm.vue'
import { getFormatNum,swalError2,swalSuccess } from '~/common'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ProductForm, ProductFormCreate },
  middleware: 'auths',
  data() {
    return {
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedId: '',
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      headers: [
        {
          text: 'key',
          align: 'center',
          value: 'id',
        },
        {
          text: 'ໄອດີ',
          align: 'center',
          value: 'pro_id',
        },
        { text: 'ຊື່ສິນຄ້າ', align: 'center', value: 'pro_name' },
        // { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
        { text: 'ຫມວດສິນຄ້າ', align: 'center', value: 'pro_category_desc' },
        { text: 'ລາຄາ', align: 'center', value: 'pro_price' },
        // { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
        { text: 'ສະຕັອກຂັ້ນຕ່ຳ', align: 'center', value: 'minStock' },
        { text: 'Stock', align: 'center', value: 'pro_card_count' },
        { text: 'Status', align: 'center', value: 'status' },
        { text: 'cost', align: 'center', value: 'pro_cost_price' },
        {
          text: 'ເພີ່ມສະຕັອກ',
          align: 'center',
          value: 'functionStock',
          sortable: false,
        },
        {
          text: 'ເບິ່ງສະຕັອກ',
          align: 'center',
          value: 'functionStockView',
          sortable: false,
        },
        {
          text: 'ແກ້ໄຂ',
          align: 'center',
          value: 'functionEdit',
          sortable: false,
        },
      ],
    }
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
  },
  async mounted() {
    await this.fetchData()
    await this.loadCardCategory()
  },
  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation']),
  },
  methods: {
    formatNumber(value) {
      return getFormatNum(value)
    },
    verifyStockStatus(minStock, CurStock) {
      let statusStock = '';
      CurStock == 0 ? statusStock = 'Out of stock' : minStock < CurStock ? statusStock = 'In stock' : statusStock = 'Low stock'
      return statusStock;
    },
    triggerCardForm(payload) {
      this.stockFormKey += 1;
      this.selectedProductId = payload.pro_id;
      this.selectedId = payload.id;
      this.selectedProductCost = payload.pro_cost_price;
      this.selectedProductName = payload.pro_name;
      this.isstock = true;
      
    },
    async fetchData() {
      this.isloading = true
      console.log(`Minstock widget is calling`);
      let locationId = 1;
      if (this.currentSelectedLocation) {
        console.log(`Current location is selected and not null`);
        locationId = this.currentSelectedLocation['id']
      } else {
        console.log(`Current location is not selected and null`);
      }
      await this.$axios
        .get(`product_f/${locationId}`)
        .then((res) => {
          this.loaddata = []
          for (const iterator of res.data.data) {
            if (iterator['minStock'] > iterator['card_count']) {
              this.loaddata.push({
                id: iterator.id,
                pro_id: iterator.pro_id,
                pro_name: iterator.pro_name,
                pro_price: iterator.pro_price,
                pro_desc: iterator.pro_desc,
                pro_status: iterator.pro_status,
                pro_category: iterator.pro_category,
                pro_category_desc: iterator.pro_category + ' - ' + iterator.categ_name,
                pro_card_count: iterator.card_count,
                pro_cost_price: iterator.cost_price,
                pro_outlet: iterator.outlet,
                pro_outlet_name: iterator.outlet_name,
                minStock: iterator.minStock,
                // function: iterator.pro_id,
                functionEdit: iterator.pro_id,
                functionStock: iterator.pro_id,
                functionStockView: iterator.pro_id,
                status: iterator.pro_id,
              })
            }
          }
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
    editItem(item) {
      this.productFormKey += 1
      this.selectedProductId = item.pro_id
      this.editProductForm = true;
      // const obj=JSON.stringify(idx)
      // this.$router.push(`/admin/product/${idx.pro_id}`)
    },
    editStock(idx) {
      console.log('ID ' + idx.pro_id)
      console.log('NAME ' + idx.pro_name)
      console.log('OBJ ' + Object.keys(idx))
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.pro_id}`)
    },

    attachFile(payload) {
      this.carddata.length = 0
      const file = payload // in case vuetify file input
      // this.files = payload
      const reader = new FileReader()
      if (file) {
        console.log('FILE LEN: ' + file)
        reader.onload = (res) => {
          this.content = res.target.result
          console.log('Data content => : ' + this.content)
          const arr = this.content.replace(/\r\n/g, '\n').split('\n') // filter text line by line
          const tempCardData = arr.filter((el) => el !== '' && el.length >= 10) // filter only useable value and trim out null line
          let i = 0
          tempCardData.forEach((element) => {
            // loop and push to real datacart
            i++
            console.log(`Data loop ${i} ${element}`)
            this.carddata.push(
              element.replace('	', '|').replace('	', '|').split("'").pop()
            ) // filter only valid number after ' and push to cartdata
            console.log(element.split("'").pop())
          })
          console.log('CARD DATA: ' + this.carddata)
        }
        reader.onerror = (err) => console.log(err)
        reader.readAsText(file)
        // URL.revokeObjectURL(file) // free memory
      }
      // var file = FileReader.FileReader()
    },

    loadCardCategory() {
      this.isloading = true
      this.$axios
        .get('stockcate_f')
        .then((res) => {
          this.cardType = res.data.map((el) => {
            return {
              card_type_code: el.card_type_code,
              card_type_name: el.card_type_name,
            }
          })
          this.selectedCardType = this.cardType[0].card_type_code
          console.log('CARD LEN: ' + this.cardType.length)
          console.log('CARD LEN: ' + this.cardType[0].card_type_code)
          this.isloading = false
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.isloading = false
        })
    },
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true
        await this.$axios.post("/api/card/rebuildStock").then(response => {
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          this.fetchData()
        }).catch(error => {
          swalError2(this.$swal, "Error", error.response.data)
        })
        this.isloading = false
      }
    }
  },
}
</script>