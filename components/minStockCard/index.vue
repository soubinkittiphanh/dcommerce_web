<template>
  <div class="text-center">
    
    <v-card>
      <v-card-title>
        ສິ້ນຄ້າໃກ້ໝົດ
      </v-card-title>

      <v-data-table v-if="loaddata" :headers="headers" :search="search" :items="loaddata" :items-per-page="pageLine">


        <!-- <template v-slot:[`item.functionEdit`]="{ item }">
          <v-btn class="primary" variant="outlined" @click="editItem(item)
          isedit = true">
            <v-icon small class="mr-2">
              mdi-pencil
            </v-icon>
            ແກ້ໄຂ
          </v-btn>
        </template>
        <template v-slot:[`item.functionStock`]="{ item }">

          <v-btn class="primary" variant="outlined" @click="triggerCardForm(item)">
            <i class="fas fa-cart-plus"></i>
            ເພີ່ມສະຕັອກ
          </v-btn>

        </template>
        <template v-slot:[`item.functionStockView`]="{ item }">
          <v-btn class="primary" variant="outlined" @click="editStock(item)">
            <i class="fas fa-dolly"></i>
            ເບິ່ງສະຕັອກ
          </v-btn>
        </template> -->
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
import { getFormatNum } from '~/common'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ProductForm, ProductFormCreate },
  middleware: 'auths',
  data() {
    return {
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedProductId: '',
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
          text: 'ໄອດີ',
          align: 'center',
          value: 'pro_id',
        },
        { text: 'ຊື່ສິນຄ້າ', align: 'center', value: 'pro_name' },
        { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
        { text: 'ຫມວດສິນຄ້າ', align: 'center', value: 'pro_category_desc' },
        { text: 'ລາຄາ', align: 'center', value: 'pro_price' },
        // { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
        { text: 'ສະຕັອກຂັ້ນຕ່ຳ', align: 'center', value: 'minStock' },
        { text: 'Stock', align: 'center', value: 'pro_card_count' },
        { text: 'Status', align: 'center', value: 'status' },
        { text: 'cost', align: 'center', value: 'pro_cost_price' },
        { text: 'Vendor', align: 'center', value: 'vendorName' },
        // {
        //   text: 'ສະຕັອກ',
        //   align: 'center',
        //   value: 'functionStock',
        //   sortable: false,
        // },
        // {
        //   text: 'ເບິ່ງສະຕັອກ',
        //   align: 'center',
        //   value: 'functionStockView',
        //   sortable: false,
        // },
        // {
        //   text: 'ແກ້ໄຂ',
        //   align: 'center',
        //   value: 'functionEdit',
        //   sortable: false,
        // },
      ],
    }
  },
  computed:{
    ...mapGetters(['findAllTerminal', 'findSelectedTerminal','currentSelectedLocation', 'findAllLocation']),
        
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
      this.selectedProductCost = payload.pro_cost_price;
      this.selectedProductName = payload.pro_name;
      this.isstock = true;
    },
    async fetchData() {
      console.log(`CARD SELECTE ${this.currentSelectedLocation['id']}`);
      this.isloading = true
      await this.$axios
        .get(`product_f/${this.currentSelectedLocation['id']}`)
        .then((res) => {
          this.loaddata = []
          for (const iterator of res.data) {
            if (iterator['minStock'] > iterator['card_count']) {
              this.loaddata.push({
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
                vendorName: iterator.vendorName,
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